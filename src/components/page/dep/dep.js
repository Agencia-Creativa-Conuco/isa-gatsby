import React from "react";
import { connect, styled } from "frontity";
import DEPCover from "./dep-cover";
import DEPActivities from "./dep-activities";
import DEPLaboratory from "./dep-laboratory";
import DEPPymes from "./dep-pymes";
import DEPIdentity from "./dep-identity";
import DEPAsesory from "./dep-asesory";
import DEPVeterinary from "./dep-veterinary";
import DEPCede from "./dep-cede";
import DEPDevelopment from "./dep-development";
import DEPServices  from "./dep-services";
import DEPServicesMenu from "./dep-services-menu";


const DEPPage = ({ state }) => {

  // Get information about the current URL.
    const data = state.source.get(state.router.link);

  // Load the post, but only if the data is ready.
    return data.isReady? (
      <Container>
        <DEPCover />
        <DEPActivities />
        <DEPDevelopment />
        <DEPServices />
        <DEPServicesMenu/>
        <DEPLaboratory />
        <DEPPymes />
        <DEPIdentity />
        <DEPAsesory />
        <DEPVeterinary />
        <DEPCede />
      </Container>
    ) : null;
};

export default connect(DEPPage);

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;