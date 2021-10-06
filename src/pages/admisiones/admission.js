import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Section } from "../../components/layout/index";
import useEvents from "../../hooks/useEvents";
import Layout from "../../components/layout";

import usePages from "../../hooks/usePages";

import AdmissionCover from "./admission-cover";
import AdmissionInfo from "./admission-info";
import AdmissionForm from "./admission-form";
import AdmissionCredit from "./admission-credit";
import AdmissionServices from "./admission-services";
import Calendar from "../../components/calendar";
import colors from "../../components/styles/colors";

// markup
const Admissions = (props) => {
    
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
      <Layout {...props}>
        <Container>
        <AdmissionCover />
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
