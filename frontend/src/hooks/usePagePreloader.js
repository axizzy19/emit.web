import { useState, useEffect } from 'react';

const usePagePreloader = (imageList = []) => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            if (!imageList || imageList.length === 0) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            setLoadingProgress(0);

            try {
                let loadedCount = 0;

                const loadPromises = imageList.map((imageSrc) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.onload = () => {
                            loadedCount++;
                            setLoadingProgress((loadedCount / imageList.length) * 100);
                            resolve();
                        };
                        img.onerror = () => {
                            loadedCount++;
                            setLoadingProgress((loadedCount / imageList.length) * 100);
                            resolve();
                        };
                        img.src = imageSrc;
                    });
                });

                await Promise.all(loadPromises);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
                
            } catch (error) {
                console.error('Ошибка загрузки изображений:', error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, [imageList]);

    return { isLoading, loadingProgress };
};

export default usePagePreloader;