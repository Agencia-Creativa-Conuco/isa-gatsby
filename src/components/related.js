import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "./featured-media";
import { h5 } from "./styles/posts-tipography";
import Link from "./link";
import colors from "./styles/colors";
import { container, mq } from "./layout/new";

const Related = ({ title = "Recientes", items = [] }) => {
  return items.length ? (
    <Section>
      <Container>
        <SectionTitle> {title} </SectionTitle>

        <SubContainer>
          {items.map((item, index) => {
            const { link, title, featuredImage } = item;

            return (
              <Card key={index}>
                <StyledLink to={link}>
                  <Media>
                    <FeaturedMedia
                      media={featuredImage}
                      size="65.25%"
                      bgColor
                    />
                  </Media>
                  <Title>{title}</Title>
                </StyledLink>
              </Card>
            );
          })}
        </SubContainer>
      </Container>
    </Section>
  ) : null;
};

export default Related;

const Section = styled.section`
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
  }
`;
const Container = styled.div`
  ${container}
  padding: 0;
`;

const SubContainer = styled.div`
  position: relative;
  display: grid;
  padding: 0;
  grid-template-columns: 100%;
  justify-content: center;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }

  ${mq.lg} {
    grid-template-columns: 33.3333% 33.3333% 33.3333%;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 7rem;
  text-align: center;
`;

const Card = styled.div`
  position: relative;
  padding: 0 1.5rem;
  margin: 0rem 2rem 4rem auto;
  &::before {
    content: "";
    background: ${colors.secondary.lighter};
    position: absolute;
    width: 60%;
    padding-bottom: 50%;
    transform: translate(-2.5rem, -2.5rem);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  display: block;
  z-index: 1;
`;

const Media = styled.div``;

const Title = styled.h3`
  ${h5}
`;
