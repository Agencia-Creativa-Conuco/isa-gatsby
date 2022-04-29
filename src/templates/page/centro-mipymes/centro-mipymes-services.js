import React from 'react'
import styled from "@emotion/styled";
import { container, mq } from "../../../components/layout/new/";

const Data = {
  title: "SERVICIOS QUE OFRECE EL CENTRO MIPYMES",
  content: [
    {
      title: "Asesoría Empresarial",
      copy: `
            Es el acompañamiento que hace un asesor del Centro a un emprendedor(a), un empresario(a) o un grupo asociativo, durante un período de tiempo, para desarrollar o mejorar las habilidades empresariales en los tomadores de decisiones en materia de:<br><br>

            a. Mercadeo<br><br>
            
            d. Finanzas<br><br>
            
            b. Operaciones<br><br>
            
            e. Tecnologías de la Información y la Comunicación (TIC)<br><br>
            
            c. Contabilidad<br><br>
            
            `,
    },
    {
      title: " Formalización",
      copy: " Se refiere al proceso de asesoría, acompañamiento y gestión de la formalización de una empresa o asociación hasta la obtención de su RNC y su registro de nombre comercial.",
    },
    {
      title: "Fortalecimiento de la asociatividad",
      copy: " Se refiere al proceso de acompañamiento que hace un asesor del centro a un grupo asociativo, para desarrollar o mejorar las habilidades empresariales y orientarlos a consolidarse como grupo y mejorar la competitividad de su actividad comercial.",
    },
    {
      title: "Capacitación",
      copy: "Se refiere a formaciones, de manera grupal, presencial o virtual, general o especializada, para varios emprendedores(as) o para una o varias empresas, con un mínimo de diez (10) participantes",
    },
    {
      title: "Vinculación",
      copy: "Se refiere al proceso de acercamiento del empresario o emprendedor a otras empresas y a otros programas o servicios que ofrecen instituciones públicas y privadas relacionadas con las Mipymes",
    },
    {
      title: "Asistencia técnica contratada",
      copy: " Es un servicio técnico especializado, proporcionado por un consultor contratado, diferente al asesor, debido a su nivel de especialización y tiempo de implementación.",
    },
  ],
};


 const CentroMipymesServices = () => {
  return (
    <Section fluid>
      <SectionTitle>{Data.title}</SectionTitle>
      <Container>
        {Data.content.map((data, index) => (
          <Content key={index}>
            <Deco>
              <Title>{data.title}</Title>
            </Deco>
            <Copy dangerouslySetInnerHTML={{ __html: data.copy }} />
          </Content>
        ))}
      </Container>
    </Section>
  );
}


export default CentroMipymesServices



const Section = styled.section`
  ${container}
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;

`;

const Container = styled.div`
  ${container}

  display: grid;
  grid-template-columns: 100%;
  padding: 3rem;
  gap: 2rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }

`;

const SectionTitle = styled.h2`
text-align:center;
`;



const Content = styled.div`
`;

const Deco = styled.div`
  position: relative;
`;

const Title = styled.h3`
  font-weight: 900;
  padding: 0 0 2rem;

  &:before{
    content: "";
    width: 30%;
    border-top-width: 2px;
    border-top-color: #333;
    border-top-style: solid;
    position: absolute;
    background: red;
    z-index: 3445445;
     bottom: 0
}
`;


const Copy = styled.p``;
