import React from "react";
import "./CSCPage.css";
import HeaderBlack from "../../components/HeaderBlack/HeaderBlack";
import Footer from "../../components/Footer/Footer";
import CSCLeftTopCorner from "../../assets/images/CSCLeftTopCorner.svg"
import usePageTitle from "../../hooks/usePageTitle";
import cscImage from "../../assets/images/CSCImage.png";
import mainImageBackground from "../../assets/images/CSCBackground.png";
import cscFigures from "../../assets/images/CSCFigures.svg";
import chatImage from "../../assets/images/CSCChat.png";
import customFavicon from "../../assets/images/favicon.svg";
import useFavicon from "../../hooks/useFavicon";

const CSCPage = () => {
  usePageTitle("Career&Science Community");
  useFavicon(customFavicon);

  const handleExternalNavigation = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <HeaderBlack title="Career&Science Community" subtitle="Про карьеру, науку, проекты"/>
      <main className="csc-page__main">
        <section className="csc-page__section__description csc-page__padding__inline">
            <p className="csc-page__section__description__text">Это уникальная инициатива, объединяющая карьерное развитие, научные исследования и инновационные проекты. </p>
            <img
                src={CSCLeftTopCorner}
                className="csc-page__section__description__background"
            />
        </section>
        <section className="csc-page__section__main-image csc-page__padding__inline">
            <img
                src={cscImage}
                className="csc-page__csc-image"
            />
            <img
                src={mainImageBackground}
                className="csc-page__main-image__background"
            />
        </section>
        <section className="csc-page__section__fields csc-page__padding__inline">
            <section className="csc-page__section__career-science">
                <section className="csc-page__section__career csc-page__project__style">
                    <h3 className="csc-page__name-project__style">КАРЬЕРА</h3>
                    <p className="csc-page__project__text">- это не просто работа, это путь к вашим мечтам. Мы предлагаем ресурсы, советы и менторские программы, которые помогут вам определить свои цели и достичь их. Вместе мы создадим стратегию вашего карьерного роста! </p>
                </section>
                <section className="csc-page__section__science csc-page__project__style">
                    <h3 className="csc-page__name-project__style">НАУКА</h3>
                    <p className="csc-page__project__text">- научные исследования открывают новые горизонты и возможности. В рамках Career&Science Community мы будем делиться последними достижениями науки, чтобы вдохновить вас на новые идеи и открытия. </p>
                </section>
            </section>
            <img
                className="csc-page__csc-image__figures"
                src={cscFigures}
            />
            <section className="csc-page__section__project csc-page__project__style">
                <h3 className="csc-page__name-project__style">ПРОЕКТЫ</h3>
                <p className="csc-page__project__text">- мы верим в силу совместной работы. Career&Science Community станет платформой для реализации ваших идей и проектов. Объединяя усилия, мы сможем создать что-то поистине значимое и инновационное.</p>
            </section>
        </section>
        <section className="csc-page__section__chat csc-page__padding__inline">
            <section className="csc-page__section__chat-image">
                {/* <!-- <img /> --> */}
                <button onClick={() => handleExternalNavigation('https://t.me/+llPytTIk7v5jNTNi')}>
                    <img
                        src={chatImage}
                        className="csc-page__chat-image"
                    />
                </button>
                {/* <!-- <img/> --> */}
            </section>
            <section className="csc-page__section__chat__info">
                <h2 className="csc-page__chat__title">ЧАТ</h2>
                <section className="csc-page__chat__text">
                    <p>Для участников нашего сообщества, куда будет публиковаться важная информация:<br />- о возможностях в Академии и не только<br />- о стажировках и различных проектах<br />- об олимпиадах</p>
                </section>
            </section>
        </section>

      </main>
      <Footer/>
    </>
  )
}

export default CSCPage;