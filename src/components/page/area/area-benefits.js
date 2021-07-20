import React from "react";
import {styled, css, connect} from "frontity";

const Area = ({state, actions, libraries})=>{
    
    const data = state.source.get(state.router.link);


    return data.isReady?(
        <article>AREA</article>
    ):null
}

export default connect(Area);