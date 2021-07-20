import * as React from "react"
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Layout from "../components/layout";
import { Section } from "../components/layout/index";
import useInicio from "../hooks/useInicio";
import useSlides from "../hooks/useSlides";
import usePosts from "../hooks/usePosts";
import useProjects from "../hooks/useProjects";
import useFaculties from "../hooks/useFaculties";
import useCareers from "../hooks/useCareers";
import useEvents from "../hooks/useEvents";
import useResources from "../hooks/useResources";
import usePersons from "../hooks/usePersons";

import AdmissionCover from "../components/page/admission/admission-cover";
import AdmissionForm from "../components/page/admission/admission-form";
import ResourceList from "../components/resourceslist";
// import AdmissionInfo from "./admission-info";
// import Calendar from "../components/calendar";

// markup
const IndexPage = () => {

  //Obtiene los datos de los Facultades
  const faculties = useFaculties();

  //Obtiene los datos de los Careeras
  const careers = useCareers();

  //Obtiene los datos de los Eventos
  const events = useEvents();

  //Obtiene los datos de los Eventos
  const resources = useResources();

  console.log(resources)

  return (
      <Layout>
        <Container>
          <AdmissionCover />
          {/* <CalendarSection bgColor={colors.gray.light} spaceNone>
              <Calendar/>
          </CalendarSection>
          <AdmissionInfo /> */}
          <AdmissionForm />
          <ResourceList />
        </Container>
      </Layout>
  )
}
export default IndexPage

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;

const CalendarSection = styled(Section)`
    ${({bgColor})=>css`
        background-color: ${bgColor};
        overflow: hidden;
    `}
`;