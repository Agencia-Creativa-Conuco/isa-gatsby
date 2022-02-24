import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FeaturedMedia from "../../components/featured-media";
import Link from "../../components/link";
import colors from "../../components/styles/colors";
import usePosts from "../../hooks/usePosts";
import { container, mq } from "../../components/layout/new";

const HomeNews = () => {
  const posts = usePosts();

  const newsTitle = "Noticias Recientes";

  const news = posts.filter((post) => post.tipoPublicacion === "post");

  return news.length > 0 ? (
    <Container id="section_2">
      <Title>{newsTitle}</Title>
      <ColumnOne>
        {news.slice(0, 1).map((item, index) => {
          const { title, excerpt, link, featuredImage } = item;

          return (
            <Card key={index} main>
              <StyledLink to={link} aria-label="Click para abrir el post...">
                <CardMedia>
                  <Media>
                    <FeaturedMedia
                      media={featuredImage}
                      alt={title}
                      size="56.25%"
                      bgColor={colors.gray.light}
                    />
                  </Media>
                </CardMedia>
                <CardBody>
                  <CardTitle main>{title}</CardTitle>
                  <Excerpt
                    colorText={colors.text.base}
                    main
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  />
                </CardBody>
              </StyledLink>
            </Card>
          );
        })}
      </ColumnOne>
      <ColumnTwo>
        {news.slice(1, 4).map((item, index) => {
          const { title, excerpt, link, featuredImage } = item;

          return (
            <Card key={index} bgDeco={colors.secondary.lighter}>
              <StyledLink to={link} aria-label="Click para abrir el post...">
                <SubComlumn>
                  <CardMedia>
                    <Media>
                      <FeaturedMedia
                        media={featuredImage}
                        alt={title}
                        size="56.25%"
                        bgColor={colors.gray.light}
                      />
                    </Media>
                  </CardMedia>

                  <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <Excerpt
                      colorText={colors.text.base}
                      dangerouslySetInnerHTML={{ __html: excerpt }}
                    />
                  </CardBody>
                </SubComlumn>
              </StyledLink>
            </Card>
          );
        })}
      </ColumnTwo>
    </Container>
  ) : null;
};

export default HomeNews;

const Container = styled.section`
  ${container}

  margin-bottom: 9.6rem;
  margin-top: 9.6rem;
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "col_1"
    "col_2";

  ${mq.lg} {
    grid-template-columns: 60% 40%;
    grid-template-areas: "col_1 col_2";
  }
`;

const ColumnOne = styled.div`
  grid-area: col_1;
  ${mq.lg} {
    margin-right: 2.5rem;
  }
`;

const ColumnTwo = styled.div`
  grid-area: col_2;
`;

const Title = styled.h2`
  background: ${colors.secondary.base};
  color: white;
  position: absolute;
  border-radius: 1rem;
  padding: 1.5rem;
  top: 0;
  left: 0;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.5);
  z-index: 2;
  font-size: 1.7rem;
`;

const Card = styled.div`
  ${({ bgDeco = "green", main }) => css`
    margin: 1.5rem;
    position: relative;
    ${main
      ? css``
      : css`
          &::before {
            content: "";
            background: ${bgDeco};
            position: absolute;
            width: 22%;
            padding-bottom: 22%;
            transform: translate(-2.5rem, -2rem);
          }
        `}
  `}
`;

const CardMedia = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 56.25%;
  /* background-color: #fafafa; */
`;

const Media = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const CardBody = styled.div``;

const CardTitle = styled.h3`
  font-weight: bold;
  ${({ main }) => css`
    margin-top: 0;
    text-transform: uppercase;
    ${main
      ? css``
      : css`
          ${mq.md} {
            font-size: 1.8rem;
          }
        `}
  `}
`;

const Excerpt = styled.div`
  ${({ colorText = "#555555", main }) => css`
    color: ${colorText};
    ${main
      ? css``
      : css`
          ${mq.lg} {
            display: none;
          }
        `}
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
`;

const SubComlumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
    div {
      margin-right: 1rem;
    }
  }
`;
