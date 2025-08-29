import React from "react";
import "./DebatesPage.css";
import usePageTitle from "../../hooks/usePageTitle";
import Footer from "../../components/Footer/Footer";
import HeaderBlack from "../../components/HeaderBlack/HeaderBlack";
import debatesBackground from "../../assets/images/DebatesBackground.svg";
import debatesFoto1 from "../../assets/images/DebatesFoto-1.png";
import debatesFoto2 from "../../assets/images/DebatesFoto-2.png";
import debatesClubLogo from "../../assets/images/DebatesClubLogo.png";
import customFavicon from "../../assets/images/favicon.svg";
import useFavicon from "../../hooks/useFavicon";

const DebatesPage = () => {
  usePageTitle("Клуб дебатов");
  useFavicon(customFavicon);

  return (
    <>
    <HeaderBlack title="Клуб дебатов ЭМИТ" subtitle="Учим аргументировать"/>
    <main className="debates-page__main">
        <section className="debates-page__section__description debates-page__padding__inline">
            <p className="debates-page__section__description__text">Это уникальная инициатива, объединяющая карьерное развитие, научные исследования и инновационные проекты. </p>
        </section>
        <img
            src={debatesBackground}
            className="debates-page__debates__line"
        />
        <section className="debates-page__section__info debates-page__padding__inline">
            <section className="debates-page__section__info-part">
                <img
                    className="debates-page__debates__foto"
                    src={debatesFoto1}
                />
                <p className="debates-page__text-info">В парламентских дебатах участвуют 4 команды по два человека в каждой. Одна команда является правительством, другая – оппозицией. Дебатеры узнают тему раунда за 15 минут до его начала.</p>
            </section>
            <section className="debates-page__section__info-part debates-page__style-reversed">
                <img
                    className="debates-page__debates__foto"
                    src={debatesFoto2}
                />
                <p className="debates-page__text-info">При подготовке они могут пользоваться любыми источниками информации. По окончании времени начинается раунд. Все спикеры выступают в определенном порядке, на речи дается по 7 минут. Команду победителей определяет судья. </p>
            </section>
        </section>
        <img
            src={debatesClubLogo}
            className="debates-page__debates__foto__logo debates-page__padding__inline"
        />

    </main>
    <Footer/>
    </>
  )
}

export default DebatesPage;