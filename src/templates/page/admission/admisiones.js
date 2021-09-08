import * as React from "react"
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Section } from "../../../components/layout/index";
import useEvents from "../../../hooks/useEvents";

import AdmissionCover from "./admission-cover";
import AdmissionForm from "./admission-form";
import ResourceList from "../../../components/resourceslist";
import AdmissionInfo from "./admission-info";
import AdmissionCredit from "./admission-credit";
import AdmissionServices from "./admission-services";
import Calendar from "../../../components/calendar";
import colors from "../../../components/styles/colors";

// markup
const Admisiones = ({page}) => {

  const eventCategories = page.events.categories.map( item => item.id );

  
  const events = useEvents();
  
  //Eventos filtrados por categorías
  const filteredEvents = events.filter( event => event.categories.filter( category => eventCategories.includes(category.id) ).length );
  
  return (
    <Container>
      <AdmissionCover {...{ page }} />
      <CalendarSection bgColor={colors.gray.light} spaceNone>
          <Calendar events={filteredEvents} />
      </CalendarSection>
      <AdmissionInfo {...{ page }} />
      <AdmissionForm />
      <AdmissionCredit {...{page}} />
      <AdmissionServices {...{page}} />
      <ResourceList items={ page.resources?.resourceRelationship } />
    </Container>
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