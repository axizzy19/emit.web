import React from 'react';
import './CCKEmitPage.css';
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack';
import usePageTitle from '../../hooks/usePageTitle';
import arrows from "../../assets/images/ArrowsRed.png";
import cckFoto1 from "../../assets/images/CCK-foto-1.svg";
import cckFoto2 from "../../assets/images/CCK-foto-2.png";
import cckFotoEvents1 from "../../assets/images/CCK-foto-events-1.png";
import cckCalendarLines from "../../assets/images/CalendarLinesWhite.png";
import cckFotoEvents2 from "../../assets/images/CCK-foto-events-2.png";
import cckFotoEvents3 from "../../assets/images/CCK-foto-events-3.png";
import starImage from "../../assets/images/StarImage.png";
import presidentCckFoto from "../../assets/images/PresidentCCKFoto.png";
import presidentCckBackground from "../../assets/images/PresidentCCKBackground.svg";
import cckTeamFoto from "../../assets/images/CCKTeamFoto.jpg";
import Footer from '../../components/Footer/Footer';


const CCKEmitPage = () => {
  usePageTitle("Студенческий спортивный клуб ЭМИТ");

  return (
    <>
      <HeaderBlack title="Студенческий спортивный клуб ЭМИТ" subtitle="V созыв"/>
      <main className="cckemit-page__main">
        <section className="cckemit-page__section__description  cckemit-page__section__style">
            <section className="cckemit-page__section__name">
                <h2 className="cckemit-page__section__name__text">Описание</h2>
                <img
                    src={arrows}
                    className="cckemit-page__arrows__image"
                />
            </section>
            <section className="cckemit-page__section__description__main">
                <section className="cckemit-page__section__description__main__part">
                    <section className="cckemit-page__main-page__text__decoration">
                        <p className="cckemit-page__main-page__text">Студенческий спортивный клуб «Чёрная Мамба» - это команда активных студентов, развивающая спорт и здоровый образ жизни. Клуб предлагает разнообразные спортивные секции, от командных до индивидуальных видов</p>
                    </section>
                    <img
                        src={cckFoto1}
                        className="cckemit-page__description_images cckemit-page__main-page__images cckemit-page__main-page__image-1"
                    />
                </section>
                <section className="cckemit-page__section__description__main__part cckemit-page__section__description__main__part-2">
                    <img
                        src={cckFoto2}
                        className="cckemit-page__description_images cckemit-page__main-page__images"
                    />
                    <p className="cckemit-page__main-page__text">Предоставляет возможности для организации спортивных мероприятий, поиска новых друзей и улучшения жизни института. Ведь успех – это движение, а движение – это ЭМИТ!</p>
                </section>
            </section>
        </section>

        <section className="cckemit-page__section__calendar  cckemit-page__section__style">
            <section className="cckemit-page__section__name cckemit-page__section__calendar__name">
                <h2 className="cckemit-page__section__name__text">Календарь мероприятий</h2>
                <img
                    src={arrows}
                    className="cckemit-page__arrows__image cckemit-page__arrows__image-reverse"
                />
            </section>
            <section className="cckemit-page__section__calendar__main">
                <section className="cckemit-page__section__calendar__main__info">
                    <section className="cckemit-page__section__calendar__images">
                    <img
                        src={cckFotoEvents1}
                        className="cckemit-page__calendar__images cckemit-page__main-page__images"
                    />
                    <img
                        src={cckCalendarLines}
                        className="cckemit-page__calendar-lines__image"
                    />
                    <img
                        src={cckFotoEvents2}
                        className="cckemit-page__calendar__images cckemit-page__main-page__images"
                    />
                    <img
                        src={cckCalendarLines}
                        className="cckemit-page__calendar-lines__image"
                    />
                    <img
                        src={cckFotoEvents3}
                        className="cckemit-page__calendar__images cckemit-page__main-page__images"
                    />
                </section>
                <section className="cckemit-page__section__calendar__events">
                    <section className="cckemit-page__section__calendar__event">
                        <section className="cckemit-page__section__calendar__event__details">
                            <h2 className="cckemit-page__section__calendar__event__name">Кубок Первокурсников по футболу</h2>
                            <p className="cckemit-page__section__calendar__event__date">24-26 сентября</p>
                            <p className="cckemit-page__section__calendar__event__time">время</p>
                        </section>
                        <p className="cckemit-page__section__calendar__event__place">Место</p>
                    </section>
                    <section className="cckemit-page__section__calendar__event">
                        <section className="cckemit-page__section__calendar__event__details">
                            <h2 className="cckemit-page__section__calendar__event__name">Академические Игры Дружбы</h2>
                            <p className="cckemit-page__section__calendar__event__date">15-20 сентября</p>
                            <p className="cckemit-page__section__calendar__event__time">время</p>
                        </section>
                        <p className="cckemit-page__section__calendar__event__place">Место</p>
                    </section>
                    <section className="cckemit-page__section__calendar__event">
                        <section className="cckemit-page__section__calendar__event__details">
                            <h2 className="cckemit-page__section__calendar__event__name">Лига Академических команд по футболу</h2>
                            <p className="cckemit-page__section__calendar__event__date">октябрь - апрель</p>
                            <p className="cckemit-page__section__calendar__event__time">время</p>
                        </section>
                        <p className="cckemit-page__section__calendar__event__place">Место</p>
                    </section>
                    <section className="cckemit-page__section__calendar__event">
                        <section className="cckemit-page__section__calendar__event__details">
                            <h2 className="cckemit-page__section__calendar__event__name">Спартакиада Президентской академии</h2>
                            <p className="cckemit-page__section__calendar__event__date">осень-весна</p>
                            <p className="cckemit-page__section__calendar__event__time">время</p>
                        </section>
                        <p className="cckemit-page__section__calendar__event__place">Место</p>
                    </section>
                </section>
                </section>
                <img
                    className="cckemit-page__section__calendar__star-image"
                    src={starImage}
                />
            </section>
            
        </section>

        <section className="cckemit-page__section__president  cckemit-page__section__style">
            <section className="cckemit-page__section__president__title">
                <h2 className="cckemit-page__section__president__title__status">ПРЕДСЕДАТЕЛЬ</h2>
                <h2 className="cckemit-page__section__president__name">Ажгалиева Александра</h2>
            </section>
            <section className="cckemit-page__section__president__image__place">
                <img
                    className="cckemit-page__section__president__image"
                    src={presidentCckFoto}
                />
            </section>
            <img
                className="cckemit-page__section__president-background"
                src={presidentCckBackground}
            />
        </section>

        <section className="cckemit-page__section__team cckemit-page__section__style">
            <h2 className="cckemit-page__section__team__title">Члены созыва</h2>
            
            <section className="cckemit-page__section__team__image-place">
                <img
                    src={cckTeamFoto}
                    className="cckemit-page__section__team__image"
                />
            </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CCKEmitPage;