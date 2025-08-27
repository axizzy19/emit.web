import React from 'react';
import './HeaderBlack.css';
import navigationButton from "../../assets/images/NavigationButton.png"
import ranepaLogos from "../../assets/images/RanepaLogosWhite.svg"

const HeaderBlack = ({ title, subtitle }) => {
  return (
    <>
      <header className="header-black-component__header">
        <section className="header-black-component__section__header">
            <button>
                <img
                    src={navigationButton}
                    className="header-black-component__navigation__button"
                    alt="Кнопка навигации"
                />
            </button>
            <section className="header-black-component__section__logos">
                <a>
                    <img
                        src={ranepaLogos}
                        className="header-black-component__ranepa__logos"
                    />
                </a>
            </section>
        </section>
        <section className="header-black-component__section__title">
            <h1 className="header-black-component__title__page-name">{title}</h1>
            <h2 className="header-black-component__title__page-name__h2">{subtitle}</h2>
        </section>
        <section className="header-black-component__section__navigation">
            <button className="header-black-component__main-page__button main-page__button__main">ГЛАВНАЯ СТРАНИЦА</button>
            <button className="header-black-component__main-page__button">СТУДЕНЧЕСКАЯ СТРУКТУРА</button>
            <button className="header-black-component__main-page__button">КЛУБЫ</button>
            <button className="header-black-component__main-page__button main-page__button__emitman">ЭМИТMAN</button>
        </section>
      </header>
    </>
  )
}

export default HeaderBlack;