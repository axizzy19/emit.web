import React from "react";
import "./EmeetingPage.css";
import usePageTitle from "../../hooks/usePageTitle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import emeetingBackground from "../../assets/images/EmeetingBackground.svg";
import emeetingFoto1 from "../../assets/images/emeeting-foto-1.png";
import emeetingCornerLeftTop from "../../assets/images/EmeetingCornerLeftTop.png";
import emeetingFoto2 from "../../assets/images/emeeting-foto-2.png";
import emeetingCornerRightBottom from "../../assets/images/EmeetingCornerRightBottom.png";
import customFavicon from "../../assets/images/favicon.svg";
import useFavicon from "../../hooks/useFavicon";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const EmeetingPage = () => {
  usePageTitle("ЭMEETING");
  useFavicon(customFavicon);

  const pageImages = [emeetingBackground, emeetingFoto1, emeetingCornerLeftTop, emeetingFoto2, emeetingCornerRightBottom, customFavicon];

  return (
    <>
        <Header title="ЭMEETING" subtitle="Встречи, мероприятия"/>
        <PageWrapper images={pageImages}>
        <div className="positions">
        <main className="emeetimg-page__main">
            <section className="emeetimg-page__section__description emeetimg-page__padding__inline">
                <p className="emeetimg-page__section__description__text">Посещая наши мероприятия, вы сможете познакомиться с другими ребятами нашего института(и не только), поиграть в настольные и видео-игры, а так же просто расслабиться, проведя время в приятной компании!</p>
                <img
                    src={emeetingBackground}
                    className="emeetimg-page__section__description__background"
                />
            </section>
            <section className="emeetimg-page__section__emeeting__fotos">
                <section className="emeetimg-page__section__fotos__part emeetimg-page__padding__inline">
                    <p>Встреча, вдохновленная серией фильмов о Гарри Поттере</p>
                    <section className="emeetimg-page__emeeting__corners">
                        <img
                            src={emeetingFoto1}
                            className="emeetimg-page__emeeting__fotos emeetimg-page__foto-1"
                        />
                        <img 
                            src={emeetingCornerLeftTop}
                            className="emeetimg-page__emeeting__corner-left-top"
                        />
                    </section>
                </section>
                <section className="emeetimg-page__section__fotos__part emeetimg-page__padding__inline emeetimg-page__position__reversed">
                    <p>Просмотр фильма «Элвин и бурундуки»</p>
                    <section className="emeetimg-page__emeeting__corners">
                        <img
                            src={emeetingFoto2}
                            className="emeetimg-page__emeeting__fotos emeetimg-page__foto-2"
                        />
                        <img 
                            src={emeetingCornerRightBottom}
                            className="emeetimg-page__emeeting__corner-right-bottom"
                        />
                    </section>
                </section>
            </section>

        </main>
        <Footer/>
        </div>
        </PageWrapper>
    </>
  )
}

export default EmeetingPage;