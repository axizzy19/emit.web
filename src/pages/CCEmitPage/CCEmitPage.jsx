import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './CCEmitPage.css';
import usePageTitle from "../../hooks/usePageTitle";
import arrowsImage from '../../assets/images/TitleArrows.svg';
import ccFoto1 from '../../assets/images/CCFoto1.png';
import ccFoto2 from "../../assets/images/CCFoto2.png";
import descriptionLines from "../../assets/images/DescriptionLines.svg";
import eventFoto1 from "../../assets/images/EventsFoto1.png";
import calendarLines from "../../assets/images/CalendarLines.svg";
import eventFoto2 from "../../assets/images/EventsFoto2.png";
import eventFoto3 from "../../assets/images/EventsFoto3.png";
import starImage from "../../assets/images/StarImage.png"
import presidentImage from "../../assets/images/PresidentImage.png";
import presidentBackground from "../../assets/images/PresidentBackground.svg";
import teamFoto from "../../assets/images/TeamFoto.svg";

const CCEmitPage = () => {
  usePageTitle('Студенческий совет ЭМИТ');

  return ( 
    <>
      <Header />
      <main className="ccemit-page__main">
        <section className="ccemit-page__section__description  ccemit-page__section__style">
            <section className="ccemit-page__section__name">
                <h2 className="ccemit-page__section__name__text">Описание</h2>
                <img
                    src={arrowsImage}
                    className="ccemit-page__arrows__image"
                />
            </section>
            <section className="ccemit-page__section__description__main">
                <section className="ccemit-page__section__description__main__part">
                    <p className="ccemit-page__main-page__text">Студенческий совет Института экономики, математики и информационных технологий — коллектив смелых, умных и креативных людей, которые не боятся делать новое 
и сталкиваться с трудностями. </p>
                    <img
                        src={ccFoto1}
                        className="ccemit-page__description_images ccemit-page__main-page__images ccemit-page__main-page__image-1"
                    />
                </section>
                <section className="ccemit-page__section__description__main__part ccemit-page__section__description__main__part-2">
                    <img
                        src={ccFoto2}
                        className="ccemit-page__description_images ccemit-page__main-page__images"
                    />
                    <img 
                        src={descriptionLines}
                        className="ccemit-page__description_lines"
                    />
                    <p className="ccemit-page__main-page__text">Мы любим то, что делаем, и делаем то, что любим, развивая себя, среду вокруг себя и других людей. Успех неизбежен, если тыв Институте ЭМИТ</p>
                </section>
            </section>
        </section>

        <section className="ccemit-page__section__calendar  ccemit-page__section__style">
            <section className="ccemit-page__section__name ccemit-page__section__calendar__name">
                <h2 className="ccemit-page__section__name__text">Календарь мероприятий</h2>
                <img
                    src={arrowsImage}
                    className="ccemit-page__arrows__image ccemit-page__arrows__image-reverse"
                />
            </section>
            <section className="ccemit-page__section__calendar__main">
                <section className="ccemit-page__section__calendar__main__info">
                    <section className="ccemit-page__section__calendar__images">
                    <img
                        src={eventFoto1}
                        className="ccemit-page__calendar__images ccemit-page__main-page__images"
                    />
                    <img
                        src={calendarLines}
                        className="ccemit-page__calendar-lines__image"
                    />
                    <img
                        src={eventFoto2}
                        className="ccemit-page__calendar__images ccemit-page__main-page__images"
                    />
                    <img
                        src={calendarLines}
                        className="ccemit-page__calendar-lines__image"
                    />
                    <img
                        src={eventFoto3}
                        className="ccemit-page__calendar__images ccemit-page__main-page__images"
                    />
                </section>
                <section className="ccemit-page__section__calendar__events">
                    <section className="ccemit-page__section__calendar__event">
                        <section className="ccemit-page__section__calendar__event__details">
                            <h2 className="ccemit-page__section__calendar__event__name">День первокурсника</h2>
                            <p className="ccemit-page__section__calendar__event__date">9 сентября</p>
                            <p className="ccemit-page__section__calendar__event__time">время</p>
                        </section>
                        <p className="ccemit-page__section__calendar__event__place">Кампус Академии</p>
                    </section>
                    <section className="ccemit-page__section__calendar__event">
                        <section className="ccemit-page__section__calendar__event__details">
                            <h2 className="ccemit-page__section__calendar__event__name">Пульсар</h2>
                            <p className="ccemit-page__section__calendar__event__date">10 октября</p>
                            <p className="ccemit-page__section__calendar__event__time">время</p>
                        </section>
                        <p className="ccemit-page__section__calendar__event__place">Академия, 1 корпус БАЗ</p>
                    </section>
                    <section className="ccemit-page__section__calendar__event">
                        <section className="ccemit-page__section__calendar__event__details">
                            <h2 className="ccemit-page__section__calendar__event__name">1-й этап Актива ЭМИТ</h2>
                            <p className="ccemit-page__section__calendar__event__date">11 ноября</p>
                            <p className="ccemit-page__section__calendar__event__time">время</p>
                        </section>
                        <p className="ccemit-page__section__calendar__event__place">Кампус Академии</p>
                    </section>
                    <section className="ccemit-page__section__calendar__event">
                        <section className="ccemit-page__section__calendar__event__details">
                            <h2 className="ccemit-page__section__calendar__event__name">Медиахакатон</h2>
                            <p className="ccemit-page__section__calendar__event__date">12 декабря</p>
                            <p className="ccemit-page__section__calendar__event__time">время</p>
                        </section>
                        <p className="ccemit-page__section__calendar__event__place">Академия, 1 корпус библиотека</p>
                    </section>
                </section>
                </section>
                <img
                    className="ccemit-page__section__calendar__star-image"
                    src={starImage}
                />
            </section>
            
        </section>

        <section className="ccemit-page__section__president  ccemit-page__section__style">
            <section className="ccemit-page__section__president__title">
                <h2 className="ccemit-page__section__president__title__status">ПРЕДСЕДАТЕЛЬ</h2>
                <h2 className="ccemit-page__section__president__name">Симанчук Виктория</h2>
            </section>
            <section className="ccemit-page__section__president__image__place">
                <img
                    className="ccemit-page__section__president__image"
                    src={presidentImage}
                />
            </section>
            <img
                className="ccemit-page__section__president-background"
                src={presidentBackground}
            />
        </section>
        <section className="ccemit-page__section__team section__style">
            <h2 className="ccemit-page__section__team__title">Члены созыва</h2>
            
            <section className="ccemit-page__section__team__image-place">
                <img
                    src={teamFoto}
                    className="ccemit-page__section__team__image"
                />
            </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CCEmitPage;