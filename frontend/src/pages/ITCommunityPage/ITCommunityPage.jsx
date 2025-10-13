import React from "react";
import "./ITCommunityPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import usePageTitle from "../../hooks/usePageTitle";
import podcastBackground from "../../assets/images/PodcastBackground.png";
import podcastFoto1 from "../../assets/images/PodcastFoto-1.png";
import podcastFoto2 from "../../assets/images/PodcastFoto-2.png";
import BITFoto from "../../assets/images/BITFoto.png";
import BITCircles from "../../assets/images/BITCircles.svg";
import pulsarFoto from "../../assets/images/PulsarFoto.png";
import customFavicon from "../../assets/images/favicon.svg";
import useFavicon from "../../hooks/useFavicon";

const ITCommunityPage = () => {
  usePageTitle("Цифровое комьюнити");
  useFavicon(customFavicon);
  
  return (
    <>
        <Header title="Цифровое комьюнити" subtitle="Паутина возможностей"/>
        <main className="itcommunity-page__main">
            <section className="itcommunity-page__section-reverse">
                <p className="itcommunity-page__bit-text">Мы объединяем все диджитал-проекты под одной крышей и создаём среду, в которой каждый студент Президентской Академии, который интересуется IT и креативными индустриями, сможет найти друзей или даже реализовать собственную инициативу.</p>
                <section className="itcommunity-page__section__podcast">
                    <img
                        src={podcastBackground}
                        className="itcommunity-page__podcast__background"
                    />
                    <section className="itcommunity-page__section__podcast__part-1">
                        <img
                            src={podcastFoto1}
                            className="itcommunity-page__podcast__fotos"
                        />
                        <section className="itcommunity-page__podcast__name">
                            <h2 className="itcommunity-page__name__podcast">Подкаст</h2>
                            <h2 className="itcommunity-page__name__name-podcast">«Пожужжим?»</h2>
                        </section>
                    </section>
                    <section className="itcommunity-page__section__podcast__part-2">
                        <img
                            src={podcastFoto2}
                            className="itcommunity-page__podcast__fotos"
                        />
                    </section>
                </section>

            </section>
            
            <section className="itcommunity-page__section__products">
                <section className="itcommunity-page__product-item">
                    <img
                        className="itcommunity-page__product-foto"
                        src={BITFoto}
                    />
                    <section className="itcommunity-page__product__description">
                        <h2 className="itcommunity-page__product__name">Цифровой форум BIT</h2>
                        <p className="itcommunity-page__product__text">«BIT» — это время, когда Академия становится уникальной площадкой для спикеров из индустрий. Ты узнаешь всё о старте карьеры и продвижении в сфере цифровых технологий, о ведении проектов и об основах бизнеса.</p>
                    </section>
                    <img
                        className="itcommunity-page__background__circles"
                        src={BITCircles}
                    />
                </section>
                <section className="itcommunity-page__product-item product-reverse">
                    <img
                        className="itcommunity-page__product-foto"
                        src={pulsarFoto}
                    />
                    <section className="itcommunity-page__product__description">
                        <h2 className="itcommunity-page__product__name">Телеграмм-бот Пульсар</h2>
                        <p className="itcommunity-page__product__text">В этом проекте мы создали специального бота, который поможет вам погрузиться в завораживающую вселенную мероприятия.</p>
                    </section>
                </section>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default ITCommunityPage;