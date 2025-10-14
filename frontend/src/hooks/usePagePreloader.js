import { useState, useEffect, useRef } from 'react';

const preloadedImageSets = new Set();

const usePagePreloader = (imageList = []) => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const hasStartedLoading = useRef(false);

    useEffect(() => {
        const imageSetKey = imageList.sort().join('|');
        
        if (preloadedImageSets.has(imageSetKey)) {
            console.log('usePagePreloader: изображения уже загружены');
            setIsLoading(false);
            setLoadingProgress(100);
            return;
        }

        if (hasStartedLoading.current) {
            return;
        }

        console.log('usePagePreloader: запуск загрузки', {
            imageCount: imageList?.length || 0
        });

        if (!imageList || imageList.length === 0) {
            console.log('usePagePreloader: нет изображений, завершаем');
            setIsLoading(false);
            setLoadingProgress(100);
            preloadedImageSets.add(imageSetKey);
            return;
        }

        hasStartedLoading.current = true;

        const loadImages = async () => {
            setIsLoading(true);
            setLoadingProgress(0);

            try {
                let loadedCount = 0;

                const loadPromises = imageList.map((imageSrc) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.onload = () => {
                            loadedCount++;
                            const progress = (loadedCount / imageList.length) * 100;
                            setLoadingProgress(progress);
                            console.log(`Загружено: ${loadedCount}/${imageList.length} (${progress}%)`);
                            resolve();
                        };
                        img.onerror = () => {
                            loadedCount++;
                            const progress = (loadedCount / imageList.length) * 100;
                            setLoadingProgress(progress);
                            console.log(`Ошибка загрузки: ${loadedCount}/${imageList.length} (${progress}%)`);
                            resolve();
                        };
                        img.src = imageSrc;
                    });
                });

                await Promise.all(loadPromises);
                console.log('usePagePreloader: все изображения загружены');
                
                setTimeout(() => {
                    setIsLoading(false);
                    setLoadingProgress(100);
                    preloadedImageSets.add(imageSetKey);
                    console.log('usePagePreloader: набор добавлен в кэш');
                }, 500);
                
            } catch (error) {
                console.error('Ошибка загрузки изображений:', error);
                setIsLoading(false);
                setLoadingProgress(100);
                preloadedImageSets.add(imageSetKey);
            }
        };

        loadImages();

        return () => {
            if (isLoading) {
                hasStartedLoading.current = false;
            }
        };
    }, [imageList]);

    return { isLoading, loadingProgress };
};

export const clearPreloaderCache = () => {
    preloadedImageSets.clear();
    console.log('Кэш прелоадера очищен');
};

export default usePagePreloader;