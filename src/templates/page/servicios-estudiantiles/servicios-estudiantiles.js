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

    const data = [
      {
        name: "Activiades Extracurriculares",
        id: "#section_1",
      },
      {
        name: "Departamento de  Desarrollo y Bienestar Estudiantil",
        id: "#section_2",
      },
      {
        name: "Orientación e Inclusión Estudiantil",
        id: "#section_3",
      },
      {
        name: "Servicio de Enfermería",
        id: "#section_4",
      },
      {
        name: "Unidad de Deporte",
        id: "#section_5",
      },
      {
        name: "Programa de Premiación a la Exelencia",
        id: "#section_6",
      },
      {
        name: "Asociación De Graduados De ISA (AGISA)",
        id: "#section_7",
      },
    ];
  // Load the post, but only if the data is ready.
    return (
        <Layout {...{props, data}}>
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