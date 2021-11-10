import React from "react";
import styled from "@emotion/styled";
import Layout from "../../../components/layout";
import NosotrosCover from "./nosotros-cover";
import NosotrosHistory from "./nosotros-history";
import NosotrosRector from "./nosotros-rector";
import NosotrosCampus from "./nosotros-campus";
import NosotrosPhilosophy from "./nosotros-philosophy";

const Nosotros = (props) => {

  // Load the post, but only if the data is ready.
  return (
    <Layout {...props}>
      <Container>
        <NosotrosCover  />
        <NosotrosHistory  />
        <NosotrosRector  />
        <NosotrosPhilosophy />
        <NosotrosCampus  />
      </Container>
    </Layout>
  );
};

export default Nosotros;

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
