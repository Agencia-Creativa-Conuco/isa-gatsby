import React from "react";
import styled from "@emotion/styled";
import useFacultades from "../../hooks/useFacultades";
import useCarreras from "../../hooks/useCarreras";
import useGrados from "../../hooks/useGrados";
// import useInvestigaciones from "../../hooks/useInvestigaciones";
// import useLineasInvestigacion from "../../hooks/useLineasInvestigacion";
import DepartamentCover from "./departament-cover";
import DepartamentCareers from "./departament-carreras";
// import DepartamentProjects from "./departament-projects";
import Contact from "../../components/contact";
import colors from "../../components/styles/colors";

const Departament= ({ departamento })=>{

    const [facultad] = useFacultades().filter( facultad => facultad.id === departamento.facultad );

    //Obtiene las carreras que pertenecen al departamento
    const carreras = useCarreras().filter( carrera => departamento.carreras.map( dcareer => dcareer.id).includes(carrera.id) );

    //Obtiene los grados de las carreras que pertenecen al departamento.
    const grados = useGrados().filter( grado => carreras.map( carrera => carrera.grado.id ).includes(grado.id) );

    //Obtiene las líneas de proyecto relacionadas con el departamento.
    // const projectLines = useLineasInvestigacion().filter( line => departamento.projectLines.map( dline => dline.id ).includes( line.id ) );

    //Obtiene los proyectos de investigación correspondientes a las líneas de proyectos del departamento.
    // const projects = useInvestigaciones().filter( project => projectLines.map( line => line.id ).includes( project.projectLine.id ) );

    return (
        <Article>
            <DepartamentCover {...{departamento, facultad}}/>
            <DepartamentCareers {...{facultad, carreras, grados}}/>
            {/* <DepartamentProjects {...{facultad, projectLines, projects}}/> */}
            <Contact data={departamento.contact} color={facultad.color} bgColor={colors.gray.light} />
        </Article>
    );
}

export default Departament;

const Article = styled.article`
    margin-bottom: 20rem;
`;
