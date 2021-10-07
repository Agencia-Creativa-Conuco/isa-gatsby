import React from "react";
import styled from "@emotion/styled";
import Layout from "../../components/layout";
import DEPCover from "./dep-cover";
import DEPActivities from "./dep-activities";
import DEPDevelopment from "./dep-development";
import DEPServices  from "./dep-services";
import DEPLaboratory from "./dep-laboratory";
import DEPVeterinary from "./dep-veterinary";
import DEPCede from "./dep-cede";
import DEPServicesMenu from "./dep-services-menu";
import DEPPymes from "./dep-pymes";
// import DEPIdentity from "./dep-identity";
// import DEPAsesory from "./dep-asesory";


const DEPPage = () => {

    return  (
      <Layout>
        <Container>
          <DEPCover/>
          <DEPActivities/>
          <DEPDevelopment/>
          <DEPServices />
          <DEPServicesMenu/>
          <DEPPymes />
          <DEPLaboratory/>
          <DEPCede />
          <DEPVeterinary />
      
        {/* <DEPIdentity />
          <DEPAsesory /> */}
        </Container>
      </Layout>
    )
};

export default DEPPage;

const Container = styled.div`
    width: 100%;
    margin: 0;
    overflow: hidden;
`;