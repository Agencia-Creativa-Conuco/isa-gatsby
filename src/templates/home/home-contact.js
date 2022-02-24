import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";
import Form from "../../components/form";
import useFiles from "../../hooks/useFiles";
import { container, mq } from "../../components/layout/new";

const HomeContact = () => {
  const images = useFiles();

  const title = "Contáctanos";

  return (
    <Section spaceNone id="section_5" fluid>
      <Media>
        <Image
          media={images.home.contacto}
          alt={title}
          size="56.25%"
          sizeLG="120%"
          sizeXL="100%"
          bg={colors.blue.base}
          bgColor={colors.gray.light}
          position="95% 50%"
        />
      </Media>
      <Container>
        <Content>
          <SectionTitle> {title} </SectionTitle>
          <Form formId="386740ac-0068-4408-b0ad-1b7b62a5c417" />
        </Content>
      </Container>
    </Section>
  );
};

export default HomeContact;

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "col_1"
    "col_2";

  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "col_2 col_1";
  }
`;
const Container = styled.div`
  position: relative;
  grid-area: col_2;
`;

const Media = styled.div`
  display: flex;
  align-self: center;
`;

const Content = styled.div`
  margin: 3rem 1.5rem;
  &::after {
    content: "";
    background: ${colors.primary.light};
    width: 8%;
    padding: 8%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  margin: 6rem auto;
  text-align: center;
`;

const Image = styled(FeaturedMedia)`
  grid-area: col_1;
  ${mq.md} {
    margin-top: 10%;
    &::after {
      padding: 20px;
      bottom: 0;
      transform: translateX(-4rem);
    }
  }

  ${mq.lg} {
    margin-top: 0;
    &::after {
      padding: 40px;
      transform: translateX(-8rem);
    }
  }
`;
