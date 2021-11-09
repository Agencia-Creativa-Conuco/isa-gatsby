import React from "react";
import styled from "@emotion/styled";
import BibliotecaCover from "./biblioteca-cover";
import BibliotecaServicios from "./biblioteca-servicios";
import BibliotecaRecursos from "./biblioteca-recursos";
import BibliotecaHorario from "./biblioteca-horario";
import Layout from "../../../components/layout";

const Biblioteca = (props) => {

    return (
        <Layout {...props}>
            <Container>
                <BibliotecaCover />
                <BibliotecaServicios />
                <BibliotecaRecursos />
                <BibliotecaHorario />
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