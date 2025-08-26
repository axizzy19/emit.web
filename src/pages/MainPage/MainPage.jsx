import React from "react";
import './MainPage.css';
import logo from '../../assets/images/logo.svg';
import cornerLineLeftTop from '../../assets/images/CornerLineLeftUpWard.svg';
import cornerLineRightBottom from '../../assets/images/CornerLineRightBottom.svg';
import cornerPictureRightTop from '../../assets/images/CornerPictureRightTop.svg';
import cornerPictureLeftBottom from '../../assets/images/CornerPictureLeftBottom.svg';
import usePageTitle from "../../hooks/usePageTitle";

const MainPage = () => {
  usePageTitle('Главная страница');
  
  return (
      <body>
        <section class="corner-lines__background">
          <img
            class="corner-line__left lines__corners"
            src={cornerLineLeftTop}
            alt="Угол верхний левый"
          />
          <img
            class="corner-line__right lines__corners"
            src={cornerLineRightBottom}
            alt="Угол нижний правый"
          />
        </section>
        <header class="header">
          <a class="header__logo">
            <img
              class="header__logo-img"
              src={logo}
              alt="Логотип проекта"
            />
          </a>
        </header>
        <section class="corner-images__background">
          <img
            class="corner-image__right image__corners"
            src={cornerPictureRightTop}
            alt="Картинка в правом верхнем углу"
          />
          <img
            class="corner-image__left image__corners"
            src={cornerPictureLeftBottom}
            alt="Картинка в левом нижнем углу"
          />
        </section>
        <section class="header__main">
          <nav class="header__menu">
            <ul class="header__menu-list">
              <li class="header__menu-item header__menu-item-major">
                <button class="header__menu-button">Общая информация</button>
              </li>
              <li class="header__menu-item">
                <button class="header__menu-button" href="#0">Клубы</button>
              </li>
              <li class="header__menu-item">
                <button class="header__menu-button" href="#0">Студенческий совет ЭМИТ</button>
              </li>
              <li class="header__menu-item">
                <button class="header__menu-button" href="#0">Студенческий спортивный клуб ЭМИТ</button>
              </li>
              <li class="header__menu-item">
                <button class="header__menu-button" href="#0">ЭМИТ man</button>
              </li>
            </ul>
          </nav>
        </section>
      </body>   
  )
}

export default MainPage;