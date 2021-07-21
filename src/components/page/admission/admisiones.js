import * as React from "react"
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Layout from "../../layout";
import { Section } from "../../layout/index";
import useInicio from "../../../hooks/useInicio";
import useSlides from "../../../hooks/useSlides";
import usePosts from "../../../hooks/usePosts";
import useProjects from "../../../hooks/useProjects";
import useFaculties from "../../../hooks/useFaculties";
import useCareers from "../../../hooks/useCareers";
import useEvents from "../../../hooks/useEvents";
import useResources from "../../../hooks/useResources";
import usePersons from "../../../hooks/usePersons";

import AdmissionCover from "./admission-cover";
import AdmissionForm from "./admission-form";
import ResourceList from "../../resourceslist";
// import AdmissionInfo from "./admission-info";
// import Calendar from "../components/calendar";

// markup
const Admisiones = ({page}) => {

  return (
      <Layout>
        <Container>
          <AdmissionCover {...{ page }} />
          {/* <CalendarSection bgColor={colors.gray.light} spaceNone>
              <Calendar/>
          </CalendarSection>
          <AdmissionInfo /> */}
          <AdmissionForm />
          <ResourceList items={page.resources.nodes} />
        </Container>
      </Layout>
  )
}
export default Admisiones

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