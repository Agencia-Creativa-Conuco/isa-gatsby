import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import { useStaticQuery, graphql } from "gatsby";
import { container, mq } from "../../../components/layout/new";

const DEPDevelopment = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { in: ["direccion-extension-y-proyectos"] }
        }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  // Convierte arreglo de imágenes en objeto cuya llave es el nómbre del archivo
  // Esto para facilitar la búsqueda de la imagenes en los componentes hijos.
  const images = allFile.nodes.reduce((obj, item) => {
    return {
      ...obj,
      [item.name]: item,
    };
  }, {});

  const title = "Proyectos En Desarrollo",
    content = `
            <p>Además de dedicarse a la docencia y la investigación, la Universidad cuenta con una amplia trayectoria en la elaboración y ejecución de proyectos, principalmente relacionados al desarrollo social y agroproductivo. Esto ha conllevado a que la institución posea una fuerte vinculación con las distintas entidades, ONG, Ministerios y Estamentos Estatales que brindan soporte al desarrollo del país y a los sectores más vulnerables.</p>
            <p>Con ello se ha cultivado una amplia experiencia sobre las metodologías de intervención, tanto para los programas de capacitación, como para el acompañamiento y asistencia técnica dirigidos al incremento de la competitividad y al mejoramiento de la calidad y productividad de dichos sectores.</p>
            <p>Actualmente, la Universidad ISA, mediante alianzas estratégicas con entidades públicas y privadas, enfoca sus esfuerzos en los siguientes ámbitos:</p>
        `,
    contentActividades = `
            <ul style="list-style-type: circle">
                <li>Producción Sostenible y Seguridad Alimentaria</li>
                <li>Innovación de Bienes y Servicios de los Sectores Productivos</li>
                <li>Nutrición y Sistemas de Alimentación Animal</li>
                <li>Desarrollo de Empresas Rurales y Agroalimentarias</li>
                <li>Gestión Ambiental</li>
                <li>Gestión Empresarial</li>
                <li>Desarrollo Comunitario</li>
                <li>Emprendimiento e Innovación</li>
            </ul>
        `;

  return (
    <Section spaceNone id="section_2">
      <Container fluid>
        <Section
          as="div"
          thin
          css={css`
            background-color: ${colors.blue.dark};
          `}
        >
          <ContainerWrapper>
            <Wrapper color="white">
              <Title color={colors.white}> {title} </Title>
              <Content color={colors.white}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Content>
            </Wrapper>
          </ContainerWrapper>
        </Section>

        <Section as="div" thin>
          <ContainerWrapper>
            <Wrapper>
              <Media decoBg={colors.cta.base}>
                <FeaturedMedia
                  media={images.ambitos}
                  // size="60%"
                  maxWidth="25rem"
                  alignCenter
                  mxAuto
                  alt="Logo de proyecto..."
                />
              </Media>
              <List>
                <div
                  css={css`
                    color: ${colors.gray.base};
                  `}
                  dangerouslySetInnerHTML={{ __html: contentActividades }}
                />
              </List>
            </Wrapper>
          </ContainerWrapper>
        </Section>
      </Container>
    </Section>
  );
};

export default DEPDevelopment;

const Section = styled.section``;

const Container = styled.div`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`;

const ContainerWrapper = styled.div`
  margin-bottom: 3.2rem;
  margin-top: 3.2rem;
  ${mq.md} {
    margin-bottom: 6.4rem;
    margin-top: 6.4rem;
  }
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  color: ${(props) => props.color};
`;

const Wrapper = styled.div`
  align-self: center;
  padding: 0 1.5rem;
  ${({ color }) => css`
    ${color
      ? css`
          * {
            color: ${color};
          }
        `
      : css``}
    ${mq.xl} {
      max-width: 57rem;
      margin: 0 auto;
    }
  `}
`;

const List = styled.div`
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  color: ${(props) => props.color};
`;

const Media = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;
