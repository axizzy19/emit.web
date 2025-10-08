import React from 'react';
import './Header.css';
import navigationButton from '../../assets/images/NavigationButton.png';
import ranepaLogos from '../../assets/images/RanepaLogosB.svg';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = ({ title, subtitle }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
        <header className="header-component__header">
          <section className="header-component__section__logos">
                  <a>
                      <img
                          src={ranepaLogos}
                          className="header-component__ranepa__logos"
                      />
                  </a>
              </section>
          <section className="header-component__section__header">
              <button>
                  <img
                      src={navigationButton}
                      className="header-component__navigation__button"
                      alt="Кнопка навигации"
                  />
              </button>
              
          </section>
          <section className="header-component__section__title">
              <h1 className="header-component__title__page-name">{title}</h1>
                {subtitle && (
                <h2 className="header-component__title__page-name__h2">{subtitle}</h2>
                )}
          </section>
          <section className="header-component__section__navigation">
              <button
                className="header-component__main-page__button header-component__main-page__button__main"
                onClick={() => handleNavigation('/')}
              >
                    ГЛАВНАЯ СТРАНИЦА
              </button>
              <button
                className="header-component__main-page__button"
                onClick={() => handleNavigation('/pages/ccemit')}
              >
                СТУДЕНЧЕСКАЯ СТРУКТУРА
              </button>
              <button
                className="header-component__main-page__button"
                onClick={() => handleNavigation('/pages/clubs')}
              >
                КЛУБЫ
              </button>
              {/* <button
                className="header-component__main-page__button header-component__main-page__button__emitman"
                onClick={() => handleNavigation('/pages/')}
              >
                ЭМИТMAN
              </button> */}
          </section>
        </header>
  )
}

export default Header;