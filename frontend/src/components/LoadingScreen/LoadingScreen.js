import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ progress, status }) => {
    return (
        <div className="loading-screen">
            <div className="loading-screen__content">
                <h1 className="loading-screen__title">ПОДГОТОВКА РЕСУРСОВ</h1>
                
                <div className="loading-screen__progress-container">
                    <div 
                        className="loading-screen__progress-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                
                <div className="loading-screen__progress-text">
                    {Math.round(progress)}%
                </div>
                
                <div className="loading-screen__status">
                    {status}
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;