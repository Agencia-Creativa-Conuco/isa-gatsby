import React from "react";
import styled from "@emotion/styled";
import colors from "../styles/colors";
// import SearchForm from './search-form'
import useSearch from "../hooks/useSearch";
import { container, mq } from "../layout/new";

const ResultsHeader = (props) => {
  const { SearchForm } = useSearch();

  return (
    <Section>
      <Background />
      <Container>
        <Header>
          <Label>
            <SearchForm isResults={true} {...props} />
          </Label>
        </Header>
      </Container>
    </Section>
  );
};

export default ResultsHeader;

const Section = styled.div``;

const Container = styled.div`
  ${container}
  display:grid;
  grid-template-columns: 90%;

  ${mq.md} {
    grid-template-columns: 59%;
  }
`;
const Header = styled.div`
  margin-top: -6rem;
  padding: 0 1.5rem;
`;

const Background = styled.div`
  width: 100%;
  height: 19rem;
  position: relative;
  top: 0;
  background: ${colors.gray.light};
  &::before {
    content: "";
    position: absolute;
    bottom: -2rem;
    right: -4rem;
    background: ${colors.primary.dark};
    clip-path: circle(50% at 100% 50%);
    padding: 9rem;
  }
`;

const Label = styled.label`
  align-items: stretch;
  display: flex;
  font-size: inherit;
  margin: 0;
  width: 100%;
`;
