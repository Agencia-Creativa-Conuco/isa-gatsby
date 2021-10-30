import React from "react";
import styled from "@emotion/styled";
import useFacultades from "../../hooks/useFacultades";
import useCarreras from "../../hooks/useCarreras";
import useGrados from "../../hooks/useGrados";
// import useInvestigaciones from "../../hooks/useInvestigaciones";
// import useLineasInvestigacion from "../../hooks/useLineasInvestigacion";
import DepartamentCover from "./departament-cover";
import DepartamentCareers from "./departament-careers";
// import DepartamentProjects from "./departament-projects";
import Contact from "../../components/contact";
import colors from "../../components/styles/colors";

const Departament= ({ departament })=>{

    const [faculty] = useFacultades().filter( faculty => faculty.id === departament.faculty.id );

    //Obtiene las carreras que pertenecen al departamento
    const careers = useCarreras().filter( career => departament.careers.map( dcareer => dcareer.id).includes(career.id) );

    //Obtiene los grados de las carreras que pertenecen al departamento.
    const grades = useGrados().filter( grade => careers.map( career => career.grade.id ).includes(grade.id) );

    //Obtiene las líneas de proyecto relacionadas con el departamento.
    // const projectLines = useLineasInvestigacion().filter( line => departament.projectLines.map( dline => dline.id ).includes( line.id ) );

    //Obtiene los proyectos de investigación correspondientes a las líneas de proyectos del departamento.
    // const projects = useInvestigaciones().filter( project => projectLines.map( line => line.id ).includes( project.projectLine.id ) );

    return (
        <Article>
            <DepartamentCover {...{departament, faculty}}/>
            <DepartamentCareers {...{faculty, careers, grades}}/>
            {/* <DepartamentProjects {...{faculty, projectLines, projects}}/> */}
            <Contact data={departament.contact} color={faculty.color} bgColor={colors.gray.light} />
        </Article>
    );
}

export default Departament;

const Article = styled.article`
    margin-bottom: 20rem;
`;
