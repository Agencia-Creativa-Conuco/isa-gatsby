import React from "react";
import styled from "@emotion/styled";
import useFaculties from "../../hooks/useFaculties";
import useCareers from "../../hooks/useCareers";
import useGrades from "../../hooks/useGrades";
import useProjects from "../../hooks/useProjects";
import useProjectLines from "../../hooks/useProjectLines";
import DepartamentCover from "./departament-cover";
import DepartamentCareers from "./departament-careers";
import DepartamentProjects from "./departament-projects";
import Contact from "../../components/contact";
import colors from "../../components/styles/colors";

const Departament= ({ departament })=>{

    const [faculty] = useFaculties().filter( faculty => faculty.id === departament.faculty.id );

    //Obtiene las carreras que pertenecen al departamento
    const careers = useCareers().filter( career => departament.careers.map( dcareer => dcareer.id).includes(career.id) );

    //Obtiene los grados de las carreras que pertenecen al departamento.
    const grades = useGrades().filter( grade => careers.map( career => career.grade.id ).includes(grade.id) );

    //Obtiene las líneas de proyecto relacionadas con el departamento.
    const projectLines = useProjectLines().filter( line => departament.projectLines.map( dline => dline.id ).includes( line.id ) );

    //Obtiene los proyectos de investigación correspondientes a las líneas de proyectos del departamento.
    const projects = useProjects().filter( project => projectLines.map( line => line.id ).includes( project.projectLine.id ) );

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
