import React from "react";
import styled from "@emotion/styled";
import { Section, Container, Row, Col } from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import useFiles from "../../hooks/useFiles";

const AdmissionCredit = () => {
  
  const images = useFiles();
  
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <Title>Becas</Title>
            <Copy>
              Becas disponibles a través de:
            </Copy>
            <Row alignCenter>
              <Col size={12} sizeMD={4}>
                <a href="https://agricultura.gob.do/" target="_blank" rel="noreferrer" aria-label="Ministerio De Agricultura">
                  <Institution>
                      <Media>
                          <FeaturedMedia media={images.admisiones.ministerio_agricultura} />
                      </Media>
                  </Institution>
                </a>
              </Col>
              <Col size={12} sizeMD={4}>
                <a href="https://juventud.gob.do/" target="_blank" rel="noreferrer" aria-label="Ministerio De La Juventud">
                  <Institution>
                      <Media>
                          <FeaturedMedia media={images.admisiones.ministerio_juventud} />
                      </Media>
                  </Institution>
                </a>
              </Col>
              <Col size={12} sizeMD={4}>
                <a href="https://mescyt.gob.do/" target="_blank" rel="noreferrer" aria-label="MESCYT"> 
                  <Institution>
                      <Media>
                          <FeaturedMedia media={images.admisiones.mescyt} />
                      </Media>
                  </Institution>
                </a>
              </Col>
              <Col size={12} sizeMD={4}>
                <a href="http://www.cedaf.org.do/" target="_blank" rel="noreferrer" aria-label="CEDAF"> 
                  <Institution>
                      <Media>
                          <FeaturedMedia media={images.admisiones.cedaf} />
                      </Media>
                  </Institution>
                </a>
              </Col>
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
    margin-bottom: 4rem;
    display: flex;
    position: relative;
`;

const Media = styled.div`
    flex: 1;
    max-width: 12.5rem;
    margin: 0 auto;
`;
