import React from "react";
import "./ClubsPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import mainArrows from "../../assets/images/ClubsArrows.svg";
import clubsBackground from "../../assets/images/ClubsBackground.svg";
import club01 from "../../assets/images/Club01.svg";
import knowMoreArrows from "../../assets/images/KnowMoreArrow.svg";
import cscLogo from "../../assets/images/ClubCSC.png";
import clubBC from "../../assets/images/ClubBC.png";
import clubDebates from "../../assets/images/ClubDebates.png";
import clubEmeeting from "../../assets/images/ClubEmeeting.png";

const ClubsPage = () => {
  return (
    <>
      <Header title="Клубы Института ЭМИТ"/>
      <main className="clubs-page__main">
       <img
            src={mainArrows}
            className="clubs-page__main__arrows-image"
       />
       <img
                src={clubsBackground}
                className="clubs-page__clubs-background"
        />
       <section className="clubs-page__main__section__clubs">
            <section className="clubs-page__main__section__clubs__position">
                <img
                    className="clubs-page__club__images"
                    src={club01}
                />
                <section className="clubs-page__main__section__clubs__description">
                    <h2 className="clubs-page__main__section__clubs__name">Цифровое комьюнити</h2>
                    <p className="clubs-page__main__section__clubs__text">Комьюнити единомышленников, заинтересованных в развитии в сфере цифровых технологий.</p>
                    <button className="clubs-page__know-more__button">
                        <h4 className="clubs-page__main__section__clubs__text">узнать больше</h4>
                        <img
                            className="clubs-page__club__arrow-image"
                            src={knowMoreArrows}
                        />
                    </button>
                </section>
            </section>
            <section className="clubs-page__main__section__clubs__position clubs-page__reversed-position">
                <section className="clubs-page__main__section__clubs__description">
                    <h2 className="clubs-page__main__section__clubs__name">Career&Science Community</h2>
                    <p className="clubs-page__main__section__clubs__text">Проект-проводник в мир карьеры и науки.</p>
                    <button className="clubs-page__know-more__button">
                        <h4 className="clubs-page__main__section__clubs__text">узнать больше</h4>
                        <img
                            className="clubs-page__club__arrow-image"
                            src={knowMoreArrows}
                        />
                    </button>
                </section>
                <img
                    className="clubs-page__club__images"
                    src={cscLogo}
                />
            </section>
            <section className="clubs-page__main__section__clubs__position">
                <img
                    className="clubs-page__club__images"
                    src={clubBC}
                />
                <section className="clubs-page__main__section__clubs__description">
                    <h2 className="clubs-page__main__section__clubs__name">Большое сердце</h2>
                    <p className="clubs-page__main__section__clubs__text">Проект, целью которого является благотворительная помощь всем, кто в ней нуждается.</p>
                    <button className="clubs-page__know-more__button">
                        <h4 className="clubs-page__main__section__clubs__text">узнать больше</h4>
                        <img
                            className="clubs-page__club__arrow-image"
                            src={knowMoreArrows}
                        />
                    </button>
                </section>
            </section>
            <section className="clubs-page__main__section__clubs__position clubs-page__reversed-position">
                <section className="clubs-page__main__section__clubs__description">
                    <h2 className="clubs-page__main__section__clubs__name">Клуб дебатов</h2>
                    <p className="clubs-page__main__section__clubs__text">Парламентские дебаты представляют собой интеллектуальную игру, в которой необходимо аргументировать позицию, достающуюся в случайном порядке.</p>
                    <button className="clubs-page__know-more__button">
                        <h4 className="clubs-page__main__section__clubs__text">узнать больше</h4>
                        <img
                            className="clubs-page__club__arrow-image"
                            src={knowMoreArrows}
                        />
                    </button>
                </section>
                <img
                    className="clubs-page__club__images"
                    src={clubDebates}
                />
            </section>
            <section className="clubs-page__main__section__clubs__position">
                <img
                    className="clubs-page__club__images"
                    src={clubEmeeting}
                />
                <section className="clubs-page__main__section__clubs__description">
                    <h2 className="clubs-page__main__section__clubs__name">ЭMEETING</h2>
                    <p className="clubs-page__main__section__clubs__text">Мероприятие, направленное на сплочение студентов и отдых от рабочей атмосферы.</p>
                    <button className="clubs-page__know-more__button">
                        <h4 className="clubs-page__main__section__clubs__text">узнать больше</h4>
                        <img
                            className="clubs-page__club__arrow-image"
                            src={knowMoreArrows}
                        />
                    </button>
                </section>
            </section>
        </section>

      </main>
      <Footer/>
    </>
  )
}

export default ClubsPage;