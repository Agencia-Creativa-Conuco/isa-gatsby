import React from "react";

import HomeCover from "./home-cover";
import HomeContact from "./home-contact";
import HomeProjects from "./home-projects";
import HomeAplication from "./home-aplication";
import HomeOffer from "./home-offer";
import HomeNews from "./home-news";
import Calendar from "../../components/calendar";

import useSlides from "../../hooks/useSlides";
import useProjects from "../../hooks/useProjects";

const FrontPage = ({ page, posts = [] }) => {

  //Obtiene los datos de los slides
  const slides = useSlides();

  //Obtiene los datos de los Proyectos
  const projects = useProjects();

  // Load the post, but only if the data is ready.
  return (
    <>
      <HomeCover {...{ slides }} />
      <HomeOffer />
      <Calendar />
      <HomeNews {...{ posts }} />
      <HomeProjects {...{ projects }} />
      <HomeAplication />
      <HomeContact />
    </>
  );
};

export default FrontPage;