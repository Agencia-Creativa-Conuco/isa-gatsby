import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Section } from "../../components/layout/index";
import useEvents from "../../hooks/useEvents";
import Layout from "../../components/layout";

import {useStaticQuery, graphql} from "gatsby";
import usePages from "../../hooks/usePages";

import AdmissionCover from "./admission-cover";
import AdmissionInfo from "./admission-info";
import AdmissionForm from "./admission-form";
import AdmissionCredit from "./admission-credit";
import AdmissionServices from "./admission-services";
import Calendar from "../../components/calendar";
import colors from "../../components/styles/colors";

// markup
const Admissions = () => {
    
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["admisiones"] } }) {
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
  const images = allFile.nodes.reduce((obj, item) => {
    return {
      ...obj,
      [item.name]: item,
    };
  }, {});

  const [page] = usePages().filter( page => page.slug ==="admisiones");

  const eventCategories = page.events.categories.map((item) => item.id);

  const events = useEvents();

//   Eventos filtrados por categorías
  const filteredEvents = events.filter(
    (event) =>
      event.categories.filter((category) =>
        eventCategories.includes(category.id)
      ).length
  );

  return (
      <Layout>
        <Container>
        <AdmissionCover {...{ images }} />
        <CalendarSection bgColor={colors.gray.light} spaceNone>
            <Calendar events={filteredEvents} />
        </CalendarSection>
        <AdmissionInfo />
        <AdmissionForm />
        <AdmissionCredit />
        <AdmissionServices />
        </Container>
      </Layout>
  );
};
export default Admissions;

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

const CalendarSection = styled(Section)`
  ${({ bgColor }) => css`
    background-color: ${bgColor};
    overflow: hidden;
  `}
`;
