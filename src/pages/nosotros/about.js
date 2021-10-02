import React from "react";
import styled from "@emotion/styled";
import Layout from "../../components/layout";
import AboutCover from "./about-cover";
import AboutHistory from "./about-history";
import AboutRector from "./about-rector";
import AboutCampus from "./about-campus";
import AboutPhilosophy from "./about-philosophy";

import { useStaticQuery, graphql } from "gatsby";

const About = ({ ...props }) => {

  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: {
            in: [
              "about"
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

  // Convierte arreglo de imágenes en objeto cuya llave es el nómbre del archivo
  // Esto para facilitar la búsqueda de la imagenes en los componentes hijos.
  const images = allFile.nodes.reduce( (obj, item)=>{
      return {
          ...obj,
          [item.name]:item
      }
  }, {} )

  // Load the post, but only if the data is ready.
  return (
    <Layout>
      <Container>
        <AboutCover {...{images}} />
        <AboutHistory {...{images}} />
        <AboutRector {...{images}} />
        <AboutPhilosophy />
        <AboutCampus {...{images}} />
      </Container>
    </Layout>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
