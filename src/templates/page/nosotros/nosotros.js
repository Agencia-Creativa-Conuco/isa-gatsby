import React from "react";
import styled from "@emotion/styled";
import Layout from "../../../components/layout";
import NosotrosCover from "./nosotros-cover";
import NosotrosHistory from "./nosotros-history";
import NosotrosRector from "./nosotros-rector";
import NosotrosCampus from "./nosotros-campus";
import NosotrosPhilosophy from "./nosotros-philosophy";
import PageIndexes from "../../../components/page-indexes";

const Nosotros = (props) => {

  const data = [
    {
      name: "Nuestra Historia",
      id: "#section_1",
    },
    {
      name: "Nuestro Rector",
      id: "#section_2",
    },
    {
      name: "Filosofía Nosotros",
      id: "#section_3",
    },
    {
      name: "Nuestro campus",
      id: "#section_4",
    }
  ];

  // Load the post, but only if the data is ready.
  return (
    <Layout {...props}>
      <Container>
        <NosotrosCover  />
        <NosotrosHistory  />
        <NosotrosRector />
        <NosotrosPhilosophy />
        <NosotrosCampus />
        <PageIndexes data={data}/>
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
