import React from "react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import Project from "./project";
import ProjectLine from "./project-line";
import ProjectDepartament from "./project-departament";

const ProjectSwitcher = ({state}) => {
    const data = state.source.get(state.router.link);
    const project = state.source[data.type][data.id];

    const {
        meta_box,
        parent,
    } = project;

    const {
        project_type
    } = meta_box;

    return data.isReady ?(
        <Switch>
            <ProjectDepartament when={parent === 0} />
            <ProjectLine when={project_type === "project_line"} />
            <Project />
        </Switch>
    ) : null;
}

export default connect(ProjectSwitcher);