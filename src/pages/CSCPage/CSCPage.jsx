import React from "react";
import "./CSCPage.css";
import HeaderBlack from "../../components/HeaderBlack/HeaderBlack";
import Footer from "../../components/Footer/Footer";
import CSCLeftTopCorner from "../../assets/images/CSCLeftTopCorner.svg"
import usePageTitle from "../../hooks/usePageTitle";
import cscImage from "../../assets/images/CSCImage.png";
import mainImageBackground from "../../assets/images/CSCBackground.png";
import cscFigures from "../../assets/images/CSCFigures.svg";
import chatImage from "../../assets/images/CSCChat.svg";

const CSCPage = () => {
  usePageTitle("Career&Science Community");

  return (
    <>
      <HeaderBlack title="Career&Science Community" subtitle="Про карьеру, науку, проекты"/>
      <main className="main">
        <section className="section__description padding__inline">
            <p className="section__description__text">Это уникальная инициатива, объединяющая карьерное развитие, научные исследования и инновационные проекты. </p>
            <img
                src={CSCLeftTopCorner}
                className="section__description__background"
            />
        </section>
        <section className="section__main-image padding__inline">
            <img
                src={cscImage}
                className="csc-image"
            />
            <img
                src={mainImageBackground}
                className="main-image__background"
            />
        </section>
        <section className="section__fields padding__inline">
            <section className="section__career-science">
                <section className="section__career project__style">
                    <h3 className="name-project__style">КАРЬЕРА</h3>
                    <p className="project__text">- это не просто работа, это путь к вашим мечтам. Мы предлагаем ресурсы, советы и менторские программы, которые помогут вам определить свои цели и достичь их. Вместе мы создадим стратегию вашего карьерного роста! </p>
                </section>
                <section className="section__science project__style">
                    <h3 className="name-project__style">НАУКА</h3>
                    <p className="project__text">- научные исследования открывают новые горизонты и возможности. В рамках Career&Science Community мы будем делиться последними достижениями науки, чтобы вдохновить вас на новые идеи и открытия. </p>
                </section>
            </section>
            <img
                className="csc-image__figures"
                src={cscFigures}
            />
            <section className="section__project project__style">
                <h3 className="name-project__style">ПРОЕКТЫ</h3>
                <p className="project__text">- мы верим в силу совместной работы. Career&Science Community станет платформой для реализации ваших идей и проектов. Объединяя усилия, мы сможем создать что-то поистине значимое и инновационное.</p>
            </section>
        </section>
        <section className="section__chat padding__inline">
            <section className="section__chat-image">
                {/* <!-- <img /> --> */}
                <img
                    src={chatImage}
                    className="chat-image"
                />
                {/* <!-- <img/> --> */}
            </section>
            <section className="section__chat__info">
                <h2 className="chat__title">ЧАТ</h2>
                <section className="chat__text">
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