import React from "react";
import { styled, css, connect } from "frontity";
import ProjectDepartamentCover from "./project-departament-cover";
import ProjectDepartamentList from "./project-departament-list";

const ProjectDepartament  = ({ state })=>{

    const data = state.source.get(state.router.link);


    return(
        
        <Article key={data.id}>
            <ProjectDepartamentCover />
            <ProjectDepartamentList />
        </Article>
    )
}

export default connect( ProjectDepartament );

const Article = styled.article``;
