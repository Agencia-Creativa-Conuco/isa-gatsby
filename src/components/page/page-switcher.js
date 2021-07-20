import React from "react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import Page from "./page";
import FrontPage from "./front-page";
import AboutPage from "./about";
import AdmissionPage from "./admission";
import ServicePage from "./services";
import OfferPage from "./offer";
import DIP from "./dip";
import DIPProjectLines from "./dip-project-lines";
import DEP from "./dep";
import LibraryPage from "./library";
import Area from "./area";


const PageSwitcher = ({ state}) => {

  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const {page_type} = page.meta_box;
  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Switch>
      <FrontPage when={data.isHome} />
      <AboutPage when={page_type === "about"} /> 
      <AdmissionPage when={page_type === "admission"} /> 
      <ServicePage when={page_type === "service"}/>
      <OfferPage when={page_type === "offer"}/>
      <DIP when={page_type === "dip"}/>
      <DIPProjectLines when={page_type === "dip_project_lines"}/>
      <DEP when={page_type === "dep"}/>
      <LibraryPage when={page_type === "library"}/>
      {/* <Area when={page_type === "projects_area"} /> */}
      <Page />
    </Switch>
  ) : null;
};

export default connect(PageSwitcher);