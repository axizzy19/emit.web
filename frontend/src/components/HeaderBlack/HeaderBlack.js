import React from 'react';
import './HeaderBlack.css';
import navigationButton from "../../assets/images/NavigationButton.png"
import ranepaLogos from "../../assets/images/RanepaLogosWhiteB.svg"
import { useNavigate } from 'react-router-dom';

const HeaderBlack = ({ title, subtitle }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const pageImages = [ranepaLogos];

  return (
      <header className="header-black-component__header">
        <section className="header-black-component__section__logos">
                <button onClick={() => handleNavigation('/pages/ccemit')}>
                    <img
                        src={ranepaLogos}
                        className="header-black-component__ranepa__logos"
                    />
                </button>
            </section>
        <section className="header-black-component__section__header">
            <button>
                <img
                    src={navigationButton}
                    className="header-black-component__navigation__button"
                    alt="Кнопка навигации"
                />
            </button>
            
        </section>
        <section className="header-black-component__section__title">
            <h1 className="header-black-component__title__page-name">{title}</h1>
            <h2 className="header-black-component__title__page-name__h2">{subtitle}</h2>
        </section>
        <section className="header-black-component__section__navigation">
            <button
              className="header-black-component__main-page__button main-page__button__main"
              onClick={() => handleNavigation('/')}
            >
              ГЛАВНАЯ СТРАНИЦА
            </button>
            <button
              className="header-black-component__main-page__button"
              onClick={() => handleNavigation('/pages/ccemit')}
            >
              СТУДЕНЧЕСКАЯ СТРУКТУРА
            </button>
            <button 
              className="header-black-component__main-page__button"
              onClick={() => handleNavigation('/pages/clubs')}
            >
              КЛУБЫ
            </button>
            {/* <button className="header-black-component__main-page__button main-page__button__emitman">ЭМИТMAN</button> */}
        </section>
      </header>
  )
}

export default HeaderBlack;