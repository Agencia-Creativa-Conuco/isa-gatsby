import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import { useStaticQuery, graphql } from "gatsby";
import { container, mq } from "../../../components/layout/new/";

const CentroMipymesCover = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["centro-mipymes"] } }) {
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

  const images = allFile.nodes.reduce((obj, item) => {
    return {
      ...obj,
      [item.name]: item,
    };
  }, {});

  const data = {
    title: "CENTRO MIPYMES",
    copy: "El Centro MIPYMES (Centro de Servicios de Apoyo Integral de las micro, pequeñas y medianas empresas) es una iniciativa por parte del Ministerio de Industria y Comercio a través del Viceministerio de Fomento a las MIPYMES en alianza con la Universidad ISA, el cual tiene como objetivo principal brindar los servicios y las consultorías necesarias a las micro, pequeñas y medianas empresas, de manera gratuita, para fortalecer su capacidad productiva, competitividad y eficienci",
    logo: images.logo,
  };

  return (
    <Section>
      <Logo>
        <FeaturedMedia media={data.logo} alt="CENTRO MIPYMES" loading="eager" />
      </Logo>
      <SectionTitle>{data.title}</SectionTitle>

      <Copy>{data.copy}</Copy>
    </Section>
  );
};

export default CentroMipymesCover;

const Section = styled.section`
  ${container}

  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
`;

const Logo = styled.div`
  position: relative;
  width: 35rem;
  margin-top: 5.5rem;

  ${mq.md} {
    /* width: 35%; */

    margin-top: 11.5rem;
  }
`;

const SectionTitle = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  ${mq.md} {
    text-align: left;
  }
`;

const Copy = styled.p``;
