import React from "react";
import styled from "@emotion/styled";
import ServiciosEstudiantilesCover from "./servicios-estudiantiles-cover";
import ServiciosEstudiantilesPsicologia from "./servicios-estudiantiles-psicologia";
import ServiciosEstudiantilesBienestar from "./servicios-estudiantiles-bienestar";
// import ServiciosEstudiantilesResidencia from "./servicios-estudiantiles-residencia";
import ServiciosEstudiantilesAGISA from "./servicios-estudiantiles-agisa";
import ServiciosEstudiantilesClinica from "./servicios-estudiantiles-clinica";
import ServiciosEstudiantilesDeportes from "./servicios-estudiantiles-deportes";
import ServiciosEstudiantilesExcelencia from "./servicios-estudiantiles-excelencia";
import ServiciosEstudiantilesActividades from "./servicios-estudiantiles-actividades";
import Layout from "../../../components/layout";

const ServiciosEstudiantilesPage = (props) => {

  // Load the post, but only if the data is ready.
    return (
        <Layout {...props}>
            <Container>
                <ServiciosEstudiantilesCover /> 
                <ServiciosEstudiantilesActividades />
                <ServiciosEstudiantilesBienestar />
                <ServiciosEstudiantilesPsicologia />
                {/* <ServiciosEstudiantilesResidencia /> */}
                <ServiciosEstudiantilesClinica />
                <ServiciosEstudiantilesDeportes />
                <ServiciosEstudiantilesExcelencia />
                <ServiciosEstudiantilesAGISA />
            </Container>
        </Layout>
    );
};

export default ServiciosEstudiantilesPage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;