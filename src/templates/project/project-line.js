import React from "react";
import { styled, css, connect } from "frontity";
import ProjectLineCover from "./project-line-cover";
import ProjectLineList from "./project-line-list";

const ProjectLine  = ({ state })=>{

    const data = state.source.get(state.router.link);


    return(
        
        <Article key={data.id}>
            <ProjectLineCover />
            <ProjectLineList />
        </Article>
    )
}

export default connect( ProjectLine );

const Article = styled.article``;
