import React from "react";
import './MainPage.css';
import logo from '../../assets/images/logo.svg';
import cornerLineLeftTop from '../../assets/images/CornerLineLeftUpWard.svg';
import cornerLineRightBottom from '../../assets/images/CornerLineRightBottom.svg';
import cornerPictureRightTop from '../../assets/images/CornerPictureRightTop.svg';
import cornerPictureLeftBottom from '../../assets/images/CornerPictureLeftBottom.svg';
import usePageTitle from "../../hooks/usePageTitle";
import customFavicon from "../../assets/images/favicon.svg";
import useFavicon from "../../hooks/useFavicon";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { getPageImages, preloadAllImages } from "../../utils/imageManager";

const MainPage = () => {
  usePageTitle('Главная страница');
  useFavicon(customFavicon);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const BCPageImages = getPageImages('bcPage');
  const mainPageImages = getPageImages('mainPage');
  
  return (
    <PageWrapper images={mainPageImages}>
      <div id="main-page">
        {
          <div className="body">
            <section className="corner-lines__background">
              <img
                className="corner-line__left lines__corners"
                src={cornerLineLeftTop}
                alt="Угол верхний левый"
              />
              <img
                className="corner-line__right lines__corners"
                src={cornerLineRightBottom}
                alt="Угол нижний правый"
              />
            </section>
            <header className="header">
              <button onClick={() => handleNavigation('/pages/ccemit')} className="header__logo">
                <img
                  className="header__logo-img"
                  src={logo}
                  alt="Логотип проекта"
                />
              </button>
            </header>
            <section className="corner-images__background">
              <img
                className="corner-image__right image__corners"
                src={cornerPictureRightTop}
                alt="Картинка в правом верхнем углу"
              />
              <img
                className="corner-image__left image__corners"
                src={cornerPictureLeftBottom}
                alt="Картинка в левом нижнем углу"
              />
            </section>
            <section className="header__main">
              <nav className="header__menu">
                <ul className="header__menu-list">
                  {/* <li className="header__menu-item header__menu-item-major">
                    <button className="header__menu-button">Общая информация</button>
                  </li> */}
                  <li className="header__menu-item">
                    <button
                      className="header__menu-button"
                      onClick={() => handleNavigation('/pages/clubs')}
                    >
                      Клубы
                    </button>
                  </li>
                  <li className="header__menu-item">
                    <button
                      className="header__menu-button"
                      onClick={() => handleNavigation('/pages/ccemit')}
                    >
                      Студенческий совет ЭМИТ
                    </button>
                  </li>
                  <li className="header__menu-item">
                    <button
                      className="header__menu-button"
                      onClick={() => handleNavigation('/pages/cckemit')}
                    >
                      Студенческий спортивный клуб ЭМИТ
                    </button>
                  </li>
                    {/* <li className="header__menu-item">
                    <button
                      className="header__menu-button"
                      // onClick={() => handleNavigation('/pages/')}
                    >
                      Личный кабинет
                    </button>
                  </li> */}
                  {/* <li className="header__menu-item">
                    <button className="header__menu-button" href="#0">ЭМИТ man</button>
                  </li> */}
                </ul>
              </nav>
            </section>
          </div>   
        }
        
      </div>
    </PageWrapper>
  )
};

export default MainPage;