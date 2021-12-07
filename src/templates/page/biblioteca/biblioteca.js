import React from "react";
import styled from "@emotion/styled";
import BibliotecaCover from "./biblioteca-cover";
import BibliotecaServicios from "./biblioteca-servicios";
import BibliotecaRecursos from "./biblioteca-recursos";
import BibliotecaHorario from "./biblioteca-horario";
import Layout from "../../../components/layout";
import PageIndexes from "../../../components/page-indexes";


const Biblioteca = (props) => {

    const data = [
        {
          name: " Servicios",
          id: "#section_1",
        },
        {
          name: "Recursos",
          id: "#section_2",
        },
        {
          name: "Horario de servicios",
          id: "#section_3",
        },
      ];

    return (
        <Layout {...props}>
            <Container>
                <BibliotecaCover />
                <BibliotecaServicios />
                <BibliotecaRecursos />
                <BibliotecaHorario />
               <PageIndexes data={data}/>

            </Container>
        </Layout>
    );
};

export default Biblioteca;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;