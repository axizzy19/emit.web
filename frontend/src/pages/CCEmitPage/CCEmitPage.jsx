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
import teamFoto from "../../assets/images/TeamFoto.png";
import useFavicon from "../../hooks/useFavicon";
import customFavicon from "../../assets/images/favicon.svg";
import { usePageCache } from "../../hooks/usePageCahce";

const CCEmitPage = () => {
    usePageCache();
  usePageTitle('Студенческий совет ЭМИТ');
  useFavicon(customFavicon);

  return ( 
    <>
      <Header title="Cтуденческий совет ЭМИТ" subtitle="XVI созыв"/>
        <main className="ccemit-page__main">
            <section className="ccemit-page__section__description  ccemit-page__section__style">
                <section className="ccemit-page__section__name">
                    <h2 className="ccemit-page__section__name__text">Описание</h2>
                    <img
                        src={arrowsImage}
                        className="ccemit-page__arrows__image"
                        alt="Декоративные стрелки"
                    />
                </section>
                <section className="ccemit-page__section__description__main">
                    <section className="ccemit-page__section__description__main__part">
                        <p className="ccemit-page__main-page__text">Студенческий совет Института экономики, математики и информационных технологий — коллектив смелых, умных и креативных людей, которые не боятся делать новое 
    и сталкиваться с трудностями. </p>
                        <img
                            src={ccFoto1}
                            className="ccemit-page__description_images ccemit-page__main-page__images ccemit-page__main-page__image-1"
                            alt="Фото студенческого совета 1"
                        />
                    </section>
                    <section className="ccemit-page__section__description__main__part ccemit-page__section__description__main__part-2">
                        <img
                            src={ccFoto2}
                            className="ccemit-page__description_images ccemit-page__main-page__images"
                            alt="Фото студенческого совета 2"
                        />
                        <img 
                            src={descriptionLines}
                            className="ccemit-page__description_lines"
                            alt="Декоративные линии"
                        />
                        <p className="ccemit-page__main-page__text ccemit-page__main-page__text_2">Мы любим то, что делаем, и делаем то, что любим, развивая себя, среду вокруг себя и других людей. Успех неизбежен, если тыв Институте ЭМИТ</p>
                    </section>
                </section>
            </section>

            <section className="ccemit-page__section__calendar  ccemit-page__section__style">
                <section className="ccemit-page__section__name ccemit-page__section__calendar__name">
                    <h2 className="ccemit-page__section__name__text">Календарь мероприятий</h2>
                    <img
                        src={arrowsImage}
                        className="ccemit-page__arrows__image ccemit-page__arrows__image-reverse"
                        alt="Декоративные стрелки"
                    />
                </section>
                <section className="ccemit-page__section__calendar__main">
                    <section className="ccemit-page__section__calendar__main__info">
                        <section className="ccemit-page__section__calendar__images">
                        <img
                            src={eventFoto1}
                            className="ccemit-page__calendar__images "
                            alt="Мероприятие 1"
                        />
                        <img
                            src={calendarLines}
                            className="ccemit-page__calendar-lines__image"
                            alt="Разделительные линии"
                        />
                        <img
                            src={eventFoto2}
                            className="ccemit-page__calendar__images "
                            alt="Мероприятие 2"
                        />
                        <img
                            src={calendarLines}
                            className="ccemit-page__calendar-lines__image"
                            alt="Разделительные линии"
                        />
                        <img
                            src={eventFoto3}
                            className="ccemit-page__calendar__images "
                            alt="Мероприятие 3"
                        />
                    </section>
                    <section className="ccemit-page__section__calendar__events">
                        <section className="ccemit-page__section__calendar__event">
                            <section className="ccemit-page__section__calendar__event__details">
                                <h2 className="ccemit-page__section__calendar__event__name">Пульсар</h2>
                                <p className="ccemit-page__section__calendar__event__date">27 ноября</p>
                                {/* <p className="ccemit-page__section__calendar__event__time">время уточняется</p> */}
                            </section>
                            <p className="ccemit-page__section__calendar__event__place">Академия, 1 корпус БАЗ</p>
                        </section>
                        <section className="ccemit-page__section__calendar__event">
                            <section className="ccemit-page__section__calendar__event__details">
                                <h2 className="ccemit-page__section__calendar__event__name">1-й этап Актива ЭМИТ</h2>
                                <p className="ccemit-page__section__calendar__event__date">11 ноября</p>
                                {/* <p className="ccemit-page__section__calendar__event__time">время уточняется</p> */}
                            </section>
                            <p className="ccemit-page__section__calendar__event__place">Кампус Академии</p>
                        </section>
                        <section className="ccemit-page__section__calendar__event">
                            <section className="ccemit-page__section__calendar__event__details">
                                <h2 className="ccemit-page__section__calendar__event__name">Цветная капуста</h2>
                                <p className="ccemit-page__section__calendar__event__date">28 ноября - 1 декабря</p>
                                {/* <p className="ccemit-page__section__calendar__event__time">время</p> */}
                            </section>
                            <p className="ccemit-page__section__calendar__event__place">Кампус Академии</p>
                        </section>
                        <section className="ccemit-page__section__calendar__event">
                            <section className="ccemit-page__section__calendar__event__details">
                                <h2 className="ccemit-page__section__calendar__event__name">Медиахакатон</h2>
                                <p className="ccemit-page__section__calendar__event__date">дата уточняется</p>
                                {/* <p className="ccemit-page__section__calendar__event__time">время уточняется</p> */}
                            </section>
                            <p className="ccemit-page__section__calendar__event__place">Академия, 1 корпус библиотека</p>
                        </section>
                    </section>
                    </section>
                    <img
                        className="ccemit-page__section__calendar__star-image"
                        src={starImage}
                        alt="Декоративная звезда"
                    />
                </section>
                
            </section>
            <section className="ccemit-page__section__president-and-background">
                <section className="ccemit-page__section__president  ccemit-page__section__style">
                    <section className="ccemit-page__section__president__title">
                        <h2 className="ccemit-page__section__president__title__status">ПРЕДСЕДАТЕЛЬ</h2>
                        <h2 className="ccemit-page__section__president__name">Симанчук Виктория</h2>
                    </section>
                    <section className="ccemit-page__section__president__image__place">
                        <img
                            className="ccemit-page__section__president__image"
                            src={presidentImage}
                            alt="Председатель студенческого совета"
                        />
                    </section>
                </section>
                <img
                    className="ccemit-page__section__president-background"
                    src={presidentBackground}
                    alt="Фон секции председателя"
                />
            </section>
            {/* <section className="ccemit-page__section__president  ccemit-page__section__style">
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
            </section> */}


            <section className="ccemit-page__section__team section__style">
                <h2 className="ccemit-page__section__team__title">Члены созыва</h2>
                
                <section className="ccemit-page__section__team__image-place">
                    <img
                        src={teamFoto}
                        className="ccemit-page__section__team__image"
                        alt="Фото созыва"
                    />
                </section>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default CCEmitPage;
