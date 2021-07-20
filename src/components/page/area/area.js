import React from "react";
import {styled, css, connect} from "frontity";
import Cover from "./area-cover";
import Benefits from "./area-benefits";
import Services from "./area-services";
import About from "./area-about";

const Area = ({state, actions, libraries})=>{
    
    const data = state.source.get(state.router.link);


    return data.isReady?(
        <article>
            <Cover />
            <Benefits />
            <Services />
            <About />
        </article>
    ):null
}

export default connect(Area);