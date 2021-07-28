import React from "react";

import HomeCover from "./home-cover";
import HomeContact from "./home-contact";
import HomeProjects from "./home-projects";
import HomeAplication from "./home-aplication";
import HomeOffer from "./home-offer";
import HomeNews from "./home-news";
import Calendar from "../../components/calendar";

import useSlides from "../../hooks/useSlides";
import usePosts from "../../hooks/usePosts";
import useProjects from "../../hooks/useProjects";
import useEvents from "../../hooks/useEvents";

const FrontPage = ({ page }) => {

  //Obtiene los datos de los slides
  const slides = useSlides();

  //Obtiene los datos de los Posts
  const posts = usePosts();

  //Obtiene los datos de los Proyectos
  const projects = useProjects();

  //Obtiene los datos de los Eventos
  const events = useEvents();

  // Load the post, but only if the data is ready.
  return (
    <>
      <HomeCover {...{ slides, page }}/>
      <HomeOffer {...{ page }}/>
      <Calendar {...{events}}/>
      <HomeNews {...{ posts, page }}/>
      <HomeProjects {...{ projects, page }}/>
      <HomeAplication {...{ page }} />
      <HomeContact {...{ page }} />
    </>
  );
};

export default FrontPage;