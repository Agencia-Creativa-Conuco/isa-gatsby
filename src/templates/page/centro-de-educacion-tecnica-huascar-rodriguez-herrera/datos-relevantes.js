import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Carousel from "react-slick";
import {LeftArrowIcon, RightArrowIcon} from "../../../components/icons";
import colors from "../../../components/styles/colors";
import { container,mq } from '../../../components/layout/new'


const Arrows = (props => {
  
    const Arrow = styled.div`
    padding: 1rem;
    border-radius: 50%;
    background-color: ${colors.primary.base};
    color: white;
    width: 5rem;
    height: 5rem;
    margin: 0 3rem;
    z-index: 2;
    position: absolute;
    top: 15rem;
    &:focus {
      background-color: ${colors.primary.base};
      color: white;
    }
    &:hover {
      background-color: ${colors.primary.base};
      color: white;
    }
    &:before {
      content: initial;
    }
  `;
  
    return(
      <Arrow {...props}/>
    )
  
})

const DatosRelevantes = () =>{

    const history = [
        {
            year: "2014",
            content: `
                <p>En el año 2014 se impartió el programa de capacitación en albañilería, electricidad y plomería básica para mejorar el acceso a agua y saneamiento en comunidades seleccionadas de las provincias de Santiago Rodríguez, Dajabón y Montecristi. Los beneficiarios directos oficialmente inscritos en el programa y que aprobaron exitosamente todos los requisitos del mismo fueron 50 (16 mujeres y 34 hombres).</p>
            `,
        },
        {
            year: "2015",
            content: `
                <p>En el 2015 se impartió el programa de capacitación en electricidad para comunidades y varios sectores de la provincia de Santiago, como parte del  convenio realizado entre ISA/INFOTEP. Los beneficiarios directos que aprobaron exitosamente todos los requisitos fueron 61 personas (61 hombres).</p>
            `,
        },
        {
            year: "2016",
            content: `
                <p>En el 2016 se impartió el programa de capacitación en  electricidad residencial, electricidad industrial, auxiliar de plomería, auxiliar de albañilería y auxiliar de ebanista, como parte del  convenio realizado entre ISA/INFOTEP. Los beneficiarios directos que aprobaron exitosamente todos los requisitos fueron 89 personas (17 mujeres y 72 hombres).</p>
                <p>En del 2016 se impartió el Programa de Capacitación convenida entre INFOTEP/PROFYE/ISA en Electricidad Residencial, Electricidad Industrial, Auxiliar de Plomería, Emprendimiento Juvenil,  Auxiliar de Albañilería y Auxiliar de Ebanista. Los beneficiarios directos que aprobaron exitosamente todos los requisitos fueron 129 personas (6 mujeres y 123 hombres).</p>
                <p>En diciembre del 2016 terminó el tercer Programa de Capacitación convenida entre INFOTEP/ISA en Electricidad Residencial, Plomero Residencial, Básico de Ventas y Vendedor Externo. Los beneficiarios directos que aprobaron exitosamente todos los requisitos fueron 110 personas (17 mujeres y 93 hombres).</p>
            `,
        },
        {
            year: "2017",
            content: `
                <p>En el 2017 se impartió el  Programa de Capacitación convenida entre INFOTEP/ISA en Básico de Plomero, Instalaciones Eléctricas Industrial, Plomero Residencial, Instalaciones Eléctricas Residencial, Básico de Ebanista, Básico de Albañil, Controles Eléctricos, Programación Básico de PLC, Básico de Ventas, Ventas Externas y Logística de Distribución. Los beneficiarios directos que aprobaron exitosamente todos los requisitos fueron 238 personas (73 mujeres y 165 hombres).</p>
                <p>En diciembre del  2017 se impartió el  Programa de Capacitación convenida entre INFOTEP/PROFYE/ISA en Básico de Plomero, Plomero Residencial, Instalaciones Eléctricas Residencial, Básico de Albañil, Los beneficiarios directos que aprobaron exitosamente todos los requisitos fueron 71 personas.</p>
            `,
        },
        {
            year: "2018",
            content: `
                <p>En diciembre de 2018 se realizó el cuarto cierre de programa con el auspicio del Instituto Nacional de Formación Técnico Profesional, (INFOTEP) y la Empresa Cemento Cibao. Se entregaron a la sociedad 263 nuevos técnicos profesionales que se hicieron merecedores 347 certificados, capacitados para ofrecer sus servicios en el sector Construcción, mientras que, en apoyo a la competitividad y el mejoramiento del sector Agropecuario se formaron 384 personas obteniendo 426 certificaciones en diversas áreas del sector.</p> 
            `,
        }
    ]

    return (
        <Section spaceNone fluid bg={colors.gray.light} id="section_1">
      <SectionTitle>Datos Relevantes</SectionTitle>

      <Carousel
        centerMode
        infinite={false}
        variableWidth
        prevArrow={
          <Arrows>
            <LeftArrowIcon />
          </Arrows>
        }
        nextArrow={
          <Arrows>
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
          const {  year, content } = item;

          return (
            <Item key={index}>
              <CardYear>
                {index === history.length - 1 ? "ACTUALIDAD" : year}
              </CardYear>

              <Card>
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

}

export default DatosRelevantes;


const CardDescription = styled.div`
  text-align: justify;
  /* display: none; */
  max-height: 12rem;

`;

const Section = styled.section`
  ${container}
  background: ${colors.gray.light};
  padding:  4rem 0;

  .slick-current {
    ${CardDescription} {
  max-height: 100%;
      
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
    bgDecoRounded = "green",
    bgDecoLine = "gray",
  }) => css`
    display: block;
    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    color: ${colors.blue.dark};
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
  background: ${colors.white};
  width: 100rem;
  max-width: 29rem;
    border: 2rem solid transparent;
  border-radius: 15px;
  box-shadow: silver 0 10px 30px;
  margin: 0 auto;
    overflow: hidden;
    ${mq.md}{
        max-width: 40rem;
    }
`;
