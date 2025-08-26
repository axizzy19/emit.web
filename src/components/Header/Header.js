import React from 'react';
import './Header.css';
import navigationButton from '../../assets/images/NavigationButton.png';
import ranepaLogos from '../../assets/images/RanepaLogos.svg';


const Header = () => {
  return (
        <header className="header-component__header">
          <section className="header-component__section__header">
              <button>
                  <img
                      src={navigationButton}
                      className="header-component__navigation__button"
                      alt="Кнопка навигации"
                  />
              </button>
              <section className="header-component__section__logos">
                  <a>
                      <img
                          src={ranepaLogos}
                          className="header-component__ranepa__logos"
                      />
                  </a>
              </section>
          </section>
          <section className="header-component__section__title">
              <h1 className="header-component__title__page-name">Студенческий совет ЭМИТ</h1>
              <h2 className="header-component__title__page-name__h2">XVI созыв</h2>
          </section>
          <section className="header-component__section__navigation">
              <button className="header-component__main-page__button header-component__main-page__button__main">ГЛАВНАЯ СТРАНИЦА</button>
              <button className="header-component__main-page__button">СТУДЕНЧЕСКАЯ СТРУКТУРА</button>
              <button className="header-component__main-page__button">КЛУБЫ</button>
              <button className="header-component__main-page__button header-component__main-page__button__emitman">ЭМИТMAN</button>
          </section>
        </header>
  )
}

export default Header;