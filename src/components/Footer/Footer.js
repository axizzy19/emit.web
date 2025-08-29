import React from 'react';
import './Footer.css';
import vkLogo from "../../assets/images/vk-logo.png";
import telegramLogo from "../../assets/images/telegram-logo.png";

const Footer = () => {
  const handleExternalNavigation = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      <section className="footer__section__info">
          <h4 className="footer__title">Контактная информация</h4>
          <p>Москва, проспект Вернадского, дом 82, корпус 5</p>
      </section>
      <section className="footer__section__numbers">
          <p>+7(999) 999-99-99</p>
          <p>+7(999) 999-99-99</p>
          <p>contact@ranepa.ru</p>
      </section>
      <section className="footer__section__contacts">
          <h4 className="footer__title footer__title__social-media">Мы в социальных сетях</h4>
          <button className="social-media" onClick={() => handleExternalNavigation("https://vk.com/smi_emit")}>
              <img
                  className="vk-image social-media__logo"
                  src={vkLogo}
              />
              <p>ВКонтанкте</p>
          </button>
          <button className="social-media" onClick={() => handleExternalNavigation("https://t.me/smi_emit")}>
              <img
                  className="vk-image social-media__logo"
                  src={telegramLogo}
              />
              <p>Telegram</p>
          </button>
      </section>
    </footer>
  )
}

export default Footer;