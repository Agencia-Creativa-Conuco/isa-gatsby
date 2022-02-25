import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Carousel from "react-slick";
import FeaturedMedia from "../../../components/featured-media";
import { LeftArrowIcon, RightArrowIcon } from "../../../components/icons";
import colors from "../../../components/styles/colors";
import { useStaticQuery, graphql } from "gatsby";
import { container, mq } from "../../../components/layout/new";

const Arrows = (props) => {
  const Arrow = styled.div`
    ${({ bgColor = "blue" }) => css`
      padding: 1rem;
      border-radius: 50%;
      background-color: ${bgColor};
      color: white;
      width: 5rem;
      height: 5rem;
      margin: 0 3rem;
      z-index: 2;
      position: absolute;
      top: 15rem;
      &:focus {
        background-color: ${bgColor};
        color: white;
      }
      &:hover {
        background-color: ${bgColor};
        color: white;
      }
      &:before {
        content: initial;
      }
    `}
  `;

  return <Arrow {...props} />;
};

const NosotrosHistory = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["nosotros"] } }) {
        nodes {
          id
          name
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

  const history = [
    {
      title: "Fundación de la Institución",
      year: "1962",
      content: `
                <p>La Universidad ISA surgió en 1962 como instituto vocacional, por iniciativa de la Asociación para el Desarrollo, Inc. (APEDI), respondiendo a las necesidades propias de una economía esencialmente agrícola y de una sociedad de origen básicamente rural.</p>
            `,
      image: images["crono-1"],
    },
    {
      title: "Firma del Acuerdo para dejar establecido el ISA",
      year: "1962",
      content: `
                <p>Para concretizar esta iniciativa, la APEDI contó con el apoyo  de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID) y el Gobierno Dominicano. Así, el 3 de agosto de 1962 se firma el acuerdo que deja establecido al Instituto Superior de Agricultura (ISA), hoy día la Universidad ISA.</p>
            `,
      image: images["crono-2"],
    },
    {
      title: "Primeras edificaciones de la institución",
      year: "1964",
      content: `
                <p>El 26 de enero del año 1964 se inauguran las primeras edificaciones de la institución y el 30 de marzo de ese mismo año, inicia sus labores con unos 80 estudiantes procedentes de diversas regiones de la República Dominicana. Con un cuerpo docente y administrativo nacional y la asistencia internacional de la Universidad Agrícola y Mecánica de Texas.</p>
            `,
      image: images["crono-3"],
    },
    {
      title: "El Estado dominicano otorga a ISA categoría de Universidad",
      year: "1986",
      content: `
                <p>En 1986, como resultado del trabajo constante del instituto en el desarrollo de una infraestructura física adecuada, la excelente calidad de su cuerpo docente, de su historial de investigación y dada la alta calidad profesional de sus egresados, el gobierno dominicano le otorgó a ISA la categoría de Universidad.</p>
            `,
      image: images["crono-4"],
    },
    {
      title: "Hoy Universidad ISA",
      year: "Actualidad",
      content: `
                <p>El desarrollo de las actividades de la Universidad ISA durante las últimas cinco décadas, ha respondido claramente a las necesidades de tecnificación e industrialización de los sectores productivos de la agropecuaria nacional.</p> 
                <p>La Universidad ha sabido responder a los cambios que la sociedad ha demandado, y en la actualidad ha diversificado su oferta curricular ofreciendo carreras que responden a las necesidades del país. En todas ellas introduciendo cambios en la estructura curricular para formar profesionales con las competencias requeridas para desarrollar su labor con profesionalidad, inspirados en los principios y valores que sustenta la Universidad.</p>
            `,
      image: images["crono-5"],
    },
  ];

  return (
    <Section spaceNone fluid bg={colors.gray.light} id="section_1">
      <SectionTitle>Nuestra Historia</SectionTitle>

      <Carousel
        centerMode
        infinite={false}
        variableWidth
        prevArrow={
          <Arrows bgColor={colors.primary.base}>
            <LeftArrowIcon />
          </Arrows>
        }
        nextArrow={
          <Arrows bgColor={colors.primary.base}>
            <RightArrowIcon />
          </Arrows>
        }
        responsive={[
          {
            breakpoint: mq.smv,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              variableWidth: false,
            },
          },
        ]}
      >
        {history.map((item, index) => {
          const { title, year, image, content } = item;

          return (
            <Item key={index}>
              <CardYear
                color={colors.blue.dark}
                bg={colors.secondary.base}
                bgLine={colors.text_main}
              >
                {index === history.length - 1 ? "ACTUALIDAD" : year}
              </CardYear>

              <Card bg={colors.white}>
                {image && (
                  <CardMedia>
                    <FeaturedMedia
                      media={image}
                      size="100%"
                      bgColor={colors.gray.light}
                      alt={title}
                    />
                  </CardMedia>
                )}
                <CardTitle color={colors.blue.dark}>{title}</CardTitle>
                <CardDescription
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </Card>
            </Item>
          );
        })}
      </Carousel>
    </Section>
  );
};

export default NosotrosHistory;

const CardDescription = styled.div`
  text-align: justify;
  display: none;
`;

const Section = styled.section`
  ${container}
  background: ${(props) => props.bg};
  padding:  4rem 0;

  .slick-current {
    ${CardDescription} {
      display: block;
    }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

const Item = styled.div`
  padding: 5rem 0;
  position: relative;
  ${mq.sm} {
    padding: 5rem;
  }
`;

const CardYear = styled.span`
  ${({
    color = "darkblue",
    bgDecoRounded = "green",
    bgDecoLine = "gray",
  }) => css`
    display: block;
    text-align: center;
    margin-bottom: 10rem;
    font-size: 3rem;
    font-weight: 900;
    color: ${color};
    position: relative;
    &:before {
      content: "";
      width: 1rem;
      height: 1rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 1rem);
      background-color: ${bgDecoRounded};
      border-radius: 50%;
      z-index: 1;
    }
    &:after {
      content: "";
      width: 200%;
      height: 0.2rem;
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translate(-50%, -0.5rem);
      background-color: ${bgDecoLine};
      border-radius: 50%;
      z-index: 0;
    }
  `}
`;

const Card = styled.div`
  background: ${(props) => props.bg};
  width: 100rem;
  max-width: 29rem;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: silver 0 10px 30px;
  margin: 0 auto;
`;

const CardTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.color};
  font-weight: bold;
`;

const CardMedia = styled.div`
  border-radius: 50%;
  max-width: 22rem;
  margin: 0 auto;
  margin-top: -7.5rem;
  overflow: hidden;
`;
