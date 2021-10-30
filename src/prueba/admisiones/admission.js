import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Section } from "../../components/layout/index";
import usePeriodosAdmision from "../../hooks/usePeriodosAdmision";
import Layout from "../../components/layout";

import usePages from "../../hooks/usePages";

import AdmissionCover from "./admission-cover";
import AdmissionInfo from "./admission-info";
import AdmissionForm from "./admission-form";
import AdmissionCredit from "./admission-credit";
import AdmissionBeca from "./admission-beca";
import AdmissionServices from "./admission-services";
import Calendar from "../../components/calendar";
import colors from "../../components/styles/colors";

// markup
const Admissions = (props) => {
    
  const [page] = usePages().filter( page => page.slug ==="admisiones");

  return (
      <Layout {...props}>
        <Container>
        <AdmissionCover />
        <CalendarSection bgColor={colors.gray.light} spaceNone>
            <Calendar />
        </CalendarSection>
        <AdmissionInfo />
        <AdmissionForm />
        <AdmissionCredit />
        <AdmissionBeca />
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
