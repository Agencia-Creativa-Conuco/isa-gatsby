import React from "react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import Post from "./post";
import Career from "./career";
import Faculty from "./faculty"
import Project from "./project";
import News from "./news";

const Single = ({state}) => {
    const data = state.source.get(state.router.link);

    return data.isReady ?(
        <Switch>
            <Career when={data.isCareer} />
            <Faculty when={data.isFaculty} />
            <Project when={data.isProject} />
            <News />
        </Switch>
    ) : null;
}

export default connect(Single);