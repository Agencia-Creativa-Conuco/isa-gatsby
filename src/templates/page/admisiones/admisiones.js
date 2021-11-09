import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Section } from "../../../components/layout/index";
import Layout from "../../../components/layout";

import AdmisionesCover from "./admisiones-cover";
import AdmisionesInfo from "./admisiones-info";
import AdmisionesForm from "./admisiones-form";
import AdmisionesCredito from "./admisiones-credito";
import AdmisionesBeca from "./admisiones-beca";
import AdmisionesServicios from "./admisiones-servicios";
import Calendar from "../../../components/calendar";
import colors from "../../../components/styles/colors";

// markup
const Admissions = (props) => {

  return (
      <Layout {...props} >
        <Container>
          <AdmisionesCover />
          <CalendarSection bgColor={colors.gray.light} spaceNone>
              <Calendar />
          </CalendarSection>
          <AdmisionesInfo />
          <AdmisionesForm />
          <AdmisionesCredito />
          <AdmisionesBeca />
          <AdmisionesServicios />
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
