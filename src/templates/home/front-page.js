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

import { useStaticQuery, graphql } from "gatsby";

const FrontPage = ({ page, posts = [], events }) => {

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: {
            in: [
              "home"
            ]
          }
        }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const images = allFile.nodes.reduce( (obj, item)=>{
      return {
          ...obj,
          [item.name]:item
      }
  }, {} )

  //Obtiene los datos de los slides
  const slides = useSlides();

  //Obtiene los datos de los Proyectos
  const projects = useProjects();

  //Ordena los eventos de menor a mayor
  const eventList = events.sort( (a, b) => {

    const dateA = new Date(a.dueDate);
    const dateB = new Date (b.dueDate);

    return dateA - dateB;
  })
  // Filtra los eventos que no han vencido
  .filter( (event, index) => {
    const today = new Date();
    const dueDate = new Date(event.dueDate);

    return dueDate >= today;
  })
  //Solo se muestran 3 resultados en la página
  .filter( (event, index) => {
    return index <=2
  } );

  // Load the post, but only if the data is ready.
  return (
    <>
      <HomeCover {...{ slides, images }} />
      <HomeOffer />
      <Calendar {...{events}} />
      <HomeNews {...{ posts }} />
      <HomeProjects {...{ projects }} />
      <HomeAplication {...{ images }} />
      <HomeContact {...{ images }} />
    </>
  );
};

export default FrontPage;