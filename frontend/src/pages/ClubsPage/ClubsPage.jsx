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
import usePageTitle from "../../hooks/usePageTitle";
import customFavicon from "../../assets/images/favicon.svg";
import useFavicon from "../../hooks/useFavicon";
import { useNavigate } from "react-router-dom";
import { usePageCache } from "../../hooks/usePageCahce";

const ClubsPage = () => {
    usePageCache();
  usePageTitle("Клубы Института ЭМИТ");
  useFavicon(customFavicon);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
        <Header title="Клубы Института ЭМИТ" subtitle="Выходи за рамки"/>
        <main className="clubs-page__main">
        <img
                src={mainArrows}
                className="clubs-page__main__arrows-image"
        />
        {/* <img
                    src={clubsBackground}
                    className="clubs-page__clubs-background"
            /> */}
        <section className="clubs-page__main__section__clubs">
                <section className="clubs-page__main__section__clubs__position clubs-page__reversed-position">
                    <section className="clubs-page__main__section__clubs__description">
                        <h2 className="clubs-page__main__section__clubs__name">Career&Science Community</h2>
                        <p className="clubs-page__main__section__clubs__text">Проект-проводник в мир карьеры и науки.</p>
                        <button className="clubs-page__know-more__button" onClick={() => handleNavigation("/pages/clubs/csc")}>
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
                        <button className="clubs-page__know-more__button" onClick={() => handleNavigation("/pages/clubs/bc")}>
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
                        <button className="clubs-page__know-more__button" onClick={() => handleNavigation("/pages/clubs/debates")}>
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
                        <button className="clubs-page__know-more__button" onClick={() => handleNavigation("/pages/clubs/emeeting")}>
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
                        <section className="clubs-page__main__section__clubs__description">
                            <h2 className="clubs-page__main__section__clubs__name">Цифровое комьюнити</h2>
                            <p className="clubs-page__main__section__clubs__text">Комьюнити единомышленников, заинтересованных в развитии в сфере цифровых технологий.</p>
                            <button className="clubs-page__know-more__button" onClick={() => handleNavigation("/pages/clubs/itcommunity")}>
                                <h4 className="clubs-page__main__section__clubs__text">узнать больше</h4>
                                <img
                                    className="clubs-page__club__arrow-image"
                                    src={knowMoreArrows}
                                />
                            </button>
                        </section>
                    </section>
                    <img
                            className="clubs-page__club__images"
                            src={club01}
                    />
                </section>
            </section>

        </main>
        <Footer/>
    </>
  )
}

export default ClubsPage;