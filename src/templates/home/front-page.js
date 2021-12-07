import React from "react";

import HomeCover from "./home-cover";
import HomeContact from "./home-contact";
import HomeProjects from "./home-projects";
import HomeAplication from "./home-aplication";
import HomeOffer from "./home-offer";
import HomeNews from "./home-news";
import Calendar from "../../components/calendar";

import useSlides from "../../hooks/useSlides";
import PageIndexes from "../../components/page-indexes";

const FrontPage = ({ page}) => {

  const data = [
    {
      name: "Ofertas y Periodo de Admision",
      id: "#section_1",
    },
    {
      name: "Noticias Recientes",
      id: "#section_2",
    },
    {
      name: "Proyectos de investigación",
      id: "#section_3",
    },
    {
      name: "Aplicación",
      id: "#section_4",
    },
    {
      name: "Contáctanos",
      id: "#section_5",
    }
  ];


  //Obtiene los datos de los slides
  const slides = useSlides();

  // Load the post, but only if the data is ready.
  return (
    <>
      <HomeCover {...{ slides }} />
      <HomeOffer />
      <Calendar/>
      <HomeNews />
      <HomeProjects />
      <HomeAplication />
      <HomeContact />
      <PageIndexes data={data}/>
    </>
  );
};

export default FrontPage;