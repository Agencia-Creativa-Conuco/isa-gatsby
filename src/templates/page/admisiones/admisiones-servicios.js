import React from "react";
import styled from "@emotion/styled";
import { Section, Container, Row, Col } from "../../../components/layout/index";
import { HotelIcon, FoodIcon } from "../../../components/icons";
import { css } from "@emotion/react";
import colors from "../../../components/styles/colors";
import useModal from "../../../components/hooks/useModal";
import Cta from "../../../components/cta";
import useGlobalOption from "../../../hooks/useGlobalOption";

const AdmisionesServicios = () => {
  const [{ serviciosOpcionales }] = useGlobalOption();

  const title = "Servicios Opcionales",
    services = [
      {
        id: "alojamiento",
        name: "Alojamiento",
        icon: HotelIcon,
        contenido: `
          <p>El Programa de Residencia Estudiantil, es un servicio que ofrece la Universidad ISA a sus estudiantes, principalmente a aquellos provenientes de zonas alejadas a la provincia de Santiago, con el objetivo de propiciar un ambiente que les permita la dedicación a sus estudios y a la vez, lograr un buen desempeño académico.</p>
          <p>Los estudiantes que desean conservar el derecho al servicio de residencia estudiantil, deben mantener un rendimiento académico en condición normal (2.0/4.0); y el respeto a las normas y reglamentos institucionales.</p>
          <h3>Observaciones:</h3>
          <ul>
            <li>Los estudiantes podrán permanecer en la residencia estudiantil, solo en el período académico que indica el calendario académico cada cuatrimestre.</li>
            <li>Es responsabilidad del estudiante, actualizar el servicio de alojamiento al inicio de cada cuatrimestre.</li>
            <li>Para mantener el servicio, el estudiante debe respetar los estatutos establecidos en el Reglamento Estudiantil.</li>
          </ul>
        `,
      },
      {
        id: "alimentacion",
        name: "Alimentación",
        icon: FoodIcon,
        contenido: `
          <p>El Programa de Servicio de  Alimentación, es una facilidad que ofrece la Universidad ISA a sus estudiantes, principalmente a aquellos provenientes de zonas alejadas a la provincia de Santiago, con el objetivo de propiciar un ambiente que les permita la dedicación a sus estudios y a la vez, lograr un buen desempeño académico.</p>
          <p>Los estudiantes que desean conservar el derecho al servicio de alimentación, deben mantener un rendimiento académico en condición normal (2.0/4.0); y el respeto a las normas y reglamentos institucionales.</p>
          <p>Contar con los servicios de desayuno, almuerzo y cena durante su estancia en la Universidad.</p>
          <p>Contar con las facilidades necesarias que les permitan el acceso a los servicios de alimentación de acuerdo a sus necesidades.</p>
        `,
      },
    ];



  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <Title>{title}</Title>
            <Row alignCenter>
              {/* Agrega los lisnks d elos formularios */}
              
              {services.map((service, index) => {
                serviciosOpcionales.forEach((item) => {
                  if ( item.alimentacion !== null &&  service.id === item.tipoServicio ) {
                    service.url = item.alimentacion;
                  }

                  if ( item.alojamiento !== null && service.id === item.tipoServicio ) {
                    service.url = item.alojamiento;
                  }
                });
                return (
                  <Col key={index} size={12} sizeMD={4} mxAuto>
                    <ServiceComponent {...{ service }} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default AdmisionesServicios;

const ServiceComponent = ({ service }) => {
  const { openModal, ModalUI } = useModal();

  const Icono = service.icon;

  return (
    <>
      <Service onClick={openModal}>
        <Icon
          css={css`
            color: ${colors.primary.dark};
          `}
        >
          <Icono />
        </Icon>
        <h3>{service.name}</h3>
      </Service>
      <ModalUI size="80rem">
        <h2>{service.name}</h2>
        <Contenido dangerouslySetInnerHTML={{ __html: service.contenido }} />
        <Cta to={service.url} target="_blank" aria-label={service.name}>
          Solicitar
        </Cta>
      </ModalUI>
    </>
  );
};

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`;

const Service = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: #fafafa;
  padding: 1.5rem;
  text-align: center;
`;

const Icon = styled.div`
  max-width: 6rem;
  margin: 0 auto;
`;

const Contenido = styled.div``;
