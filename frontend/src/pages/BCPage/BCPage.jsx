import React from "react";
import "./BCPage.css";
import usePageTitle from "../../hooks/usePageTitle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BCDescriptionBackground from "../../assets/images/BCDescriptionBackground.svg";
import BCCorner from "../../assets/images/BCCorner.svg";
import BCCircles from "../../assets/images/BCCircles.svg";
import BCFoto1 from "../../assets/images/BCFoto-1.png";
import BCFoto2 from "../../assets/images/BCFoto-2.png";
import BCLinesDivision from "../../assets/images/BCLinesDivision.svg";
import BCChart from "../../assets/images/BCChart.png"
import useFavicon from "../../hooks/useFavicon";
import customFavicon from "../../assets/images/favicon.svg";
import { usePageCache } from "../../hooks/usePageCahce";

const BCPage = () => {
//   usePageCache();
  usePageTitle("Большое сердце");
  useFavicon(customFavicon);
  
  return (
    <>
        <Header title="Большое сердце" subtitle="Делаем добро вместе"/>
        <main className="bc-page__main">
        <section className="bc-page__section__description bc-page__padding__inline">
                <p className="bc-page__section__description__text">В мире, где доброта и сострадание становятся все более важными, волонтерский проект "Большое сердце" представляет собой уникальную возможность для студентов внести свой вклад в мире поддержки, помощи и волонтерства</p>
            </section>
        <section className="bc-page__section__big-heart__images">
                <img
                    className="bc-page__big-heart__foto-corner"
                    src={BCCorner}
                    alt="Уголок фотографии"
                />
                <img
                    className="bc-page__big-heart__foto-circles"
                    src={BCCircles}
                    alt="Круги фотографии"
                />
                <img
                    src={BCFoto1}
                    className="bc-page__big-heart__image"
                    alt="Фотография с приюта"
                />
                <img
                    src={BCFoto2}
                    className="bc-page__big-heart__image"
                    alt="Фотография с выезда"
                />
        </section>
        <section className="bc-page__section__project-insides bc-page__padding__inline">
                <h2 className="bc-page__section__project-insides__title bc-page__bold-font">Проект включает в себя:</h2>
                <section className="bc-page__insides">
                    <section className="bc-page__position__relative">
                        <p>Помощь в детских домах и приютах</p>
                    </section>
                    <section className="bc-page__position__relative">
                        <p>Организацию благотворительных мероприятий</p>
                    </section>
                    <section className="bc-page__position__relative">
                        <p>Сбор гуманитарной помощи</p>
                    </section>
                </section>
        </section>
        <img
                className="bc-page__lines__division"
                src={BCLinesDivision}
                alt="Линия разделения"
        />
        <section className="bc-page__section__chart bc-page__padding__inline">
                <img
                    className="bc-page__chart__image"
                    src={BCChart}
                    alt="Карта добрых дел"
                />
                <section className="bc-page__section__chart__info">
                    <h2 className="bc-page__chart__title bc-page__bold-font">Карта добрых дел</h2>
                    <p className="bc-page__chart__text">На этой карте отмечены места, где волонтеры «Большого сердца» оказали помощь за последние 2 года.</p>
                </section>
        </section>
        </main>
        <Footer/>
    </>
  )
};

export default BCPage;