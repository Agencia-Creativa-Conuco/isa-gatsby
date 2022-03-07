import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/new";

const PostCover = ({ post }) => {
  const { title, featuredImage } = post;

  return (
    <Section>
      <Container fluid>
        <ImageContainer>
          <Image>
            <FeaturedMedia
              media={featuredImage}
              height="100%"
              bgColor
              loading="eager"
            />
          </Image>
        </ImageContainer>
        <SubContainer noGutters>
          <Content>
            <Title>{title}</Title>
          </Content>
        </SubContainer>
      </Container>
    </Section>
  );
};

export default PostCover;

const Section = styled.section``;
const Container = styled.div`
  ${container}
  display:grid;
  padding: 0;
  grid-template-columns: 100%;
  justify-content: end;

  ${mq.lg} {
    grid-template-columns: 6% 84%;
    div:first-of-type {
      order: 2;
    }
  }
  ${mq.xl} {
    grid-template-columns: 7.5% 75%;
  }
`;

const SubContainer = styled.div`
  ${container}
  display:grid;
  padding: 0;
  grid-template-columns: 100%;
  /* justify-content: end; */
  ${mq.sm} {
    grid-template-columns: 60%;
  }

  ${mq.lg} {
    grid-template-columns: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0%;
  ${mq.lg} {
    padding-bottom: 56.25%;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  align-self: end;
  padding: 0 1.5rem;
  margin-bottom: 4rem;
  margin-top: -2rem;
  ${mq.lg} {
    margin: 10rem 0;
    width: 57rem;
  }
`;

const Title = styled.h1`
  position: relative;
  font-weight: 900;
  text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1.5rem 0.5rem rgba(0, 0, 0, 0.15));
  text-transform: uppercase;
  background-color: white;
  display: inline;
  z-index: 2;
`;
