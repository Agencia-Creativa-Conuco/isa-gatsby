import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Section, Container, Row, Col } from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";

const AdmissionCredit = ({ page }) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          relativePath: {
            in: [
              "admisiones/banco_adopem.png"
              "admisiones/banfondesa.jpg"
              "admisiones/fundapec.png"
            ]
          }
        }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <Title>Crédito Educativo</Title>
            <Copy>
              Financiamiento disponible a través de:
            </Copy>
            <Row alignCenter>
            {images.nodes.map((image) => {
              return (
                <Col key={image.id} size={12} sizeMD={4}>
                    <Institution>
                        <Media>
                            <FeaturedMedia media={image} />
                        </Media>
                    </Institution>
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

export default AdmissionCredit;

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`;

const Copy = styled.p``;

const Institution = styled.div`
    width: 100%;
    max-width: 25rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    display: flex;
    position: relative;
`;

const Media = styled.div`
    flex: 1;
`;
