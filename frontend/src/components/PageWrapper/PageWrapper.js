import React from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import usePagePreloader from '../../hooks/usePagePreloader';

const PageWrapper = ({ children, images = [] }) => {
    const { isLoading, loadingProgress } = usePagePreloader(images);

    const getLoadingStatus = () => {
        if (loadingProgress < 30) return "Инициализация компонентов...";
        if (loadingProgress < 60) return "Загрузка ресурсов...";
        if (loadingProgress < 90) return "Оптимизация контента...";
        return "Финальная настройка...";
    };

    if (isLoading) {
        return (
            <LoadingScreen 
                progress={loadingProgress} 
                status={getLoadingStatus()}
            />
        );
    }

    return children;
};

export default React.memo(PageWrapper);