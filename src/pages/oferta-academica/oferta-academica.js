import React from "react";
import styled from "@emotion/styled";
import OfferCover from "./offer-cover";
import OfferFaculties from "./offer-faculties";
import OfferTecnics from "./offer-tecnics";
import OfferInternational from "./offer-international";
import Layout from "../../components/layout";
import { useStaticQuery, graphql } from "gatsby";

const OfferPage = () => {

    //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: {
          in: [
            "oferta-academica"
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
                <OfferCover {...{images}} />
                <OfferFaculties />
                <OfferTecnics {...{images}} />
                <OfferInternational {...{images}} />
            </Container>
        </Layout>
    );
};

export default OfferPage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;