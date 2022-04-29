import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "../../../components/layout/new/";
import FeaturedMedia from "../../../components/featured-media";
import { useStaticQuery, graphql } from "gatsby";

const CentroMipymesEconomic = () => {
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
    title: "IMPACTO ECONÓMICO",
    copy: `
      <ul>
      <li>Acceso al financiamiento</li>
      <li>Incremento en ventas</li>
      <li>Empleos creados</li>
      <li>Empleos retenidos</li>
      </ul`,

    image: images.logo,
  };

  return (
    <Section>
      <Content>
        <Title >{data.title}</Title>
        <Copy dangerouslySetInnerHTML={{ __html: data.copy }} />
      </Content>

      <Image>
        <FeaturedMedia
          media={data.image}
          alt="CENTRO MIPYMES"
          loading="eager"
        />
      </Image>
    </Section>
  );
};

export default CentroMipymesEconomic;

const Section = styled.section`
  ${container}
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
`;

const Image = styled.div`
  position: relative;
  width: 33rem;
`;

const Content = styled.div`
  max-width: 50rem;
`;

const Title = styled.h2`
  padding-bottom: 2.5rem;
`;

const Copy = styled.p``;
