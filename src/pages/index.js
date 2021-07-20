import * as React from "react"
import Layout from "../components/layout";
import useInicio from "../hooks/useInicio";
import useSlides from "../hooks/useSlides";
import usePosts from "../hooks/usePosts";
import useProjects from "../hooks/useProjects";
import useFaculties from "../hooks/useFaculties";
import useCareers from "../hooks/useCareers";
import useEvents from "../hooks/useEvents";
import useResources from "../hooks/useResources";
import usePersons from "../hooks/usePersons";

import Image from "gatsby-image";

import HomeCover from "../components/page/front-page/home-cover";
import HomeOffer from "../components/page/front-page/home-offer";
import HomeNews from "../components/page/front-page/home-news";
import HomeProjects from "../components/page/front-page/home-projects";
import HomeAplication from "../components/page/front-page/home-aplication";
import HomeContact from "../components/page/front-page/home-contact";
import Calendar from "../components/calendar";

// markup
const IndexPage = () => {

  //Obtiene los datos de la página de inicio
  const [page] = useInicio();

  //Obtiene los datos de los slides
  const slides = useSlides();

  //Obtiene los datos de los Posts
  const posts = usePosts();

  //Obtiene los datos de los Proyectos
  const projects = useProjects();

  //Obtiene los datos de los Facultades
  const faculties = useFaculties();

  //Obtiene los datos de los Careeras
  const careers = useCareers();

  //Obtiene los datos de los Eventos
  const events = useEvents();

  //Obtiene los datos de los Eventos
  const resources = useResources();

  //Obtiene los datos de los Personas
  const persons = usePersons();

  const{
    title,
    featuredImage
  } = page;
  
  return (
      <Layout>
        <HomeCover {...{ slides, page }}/>
        <HomeOffer {...{ careers, faculties, page }}/>
        <Calendar {...{events}}/>
        <HomeNews {...{ posts, page }}/>
        <HomeProjects {...{ projects, page }}/>
        <HomeAplication {...{ page }} />
        <HomeContact {...{ page }} />
      </Layout>
  )
}
export default IndexPage
