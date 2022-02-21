import React from "react";
import styled from "@emotion/styled";
import Layout from "../../components/layout";
import EgresadosCover from "./egresados-cover";
import EgresadosBody from "./egresados-body";


const EgresadosSingle = (props)=>{

    const metaData = {
        title: "Egresados",
        description: "Pronto agregaremos una description a la pagina de Egresados",
      };
    

    return (
        
        <Layout {...props} {...metaData}>
          <EgresadosCover/>
          <EgresadosBody/>
        </Layout>
    )
}

export default EgresadosSingle;

const Section = styled.section``;
