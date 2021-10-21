import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import usePosts from "../hooks/usePosts";
import { Section, Col, Container, Row } from "../components/layout/index";
import FeaturedMedia from "../components/featured-media";
import Link from "../components/link";
import Cta from "../components/cta";
import colors from "../components/styles/colors";
import useCategories from "../hooks/useCategories";
import {h3} from "../components/styles/tipography"

// markup
const Post = (props) => {
  const { pageContext } = props;

  const { nextPagePath, previousPagePath, items, id } = pageContext;

  const [category] = useCategories().filter( category => category.id === id);

  const posts = usePosts()
    .filter(( post ) => items.includes( post.id ) );

  // const posts = usePosts()
  // .filter((post, idx) => idx >= parseInt(offset))
  // .filter((post, idx) => idx < parseInt(postsPerPage));

  return (
    <Layout>
      <Section as="article">
        <Container>
          <Row>
            <Col>
              <Title>{category.name}</Title>
            </Col>
          </Row>
          <Row>
            {posts.map((post) => {
              return (
                <Col key={post.id} size={12} sizeMD={6} sizeLG={4}>
                  <SLink to={post.uri}>
                    <Article>
                      <FeaturedMedia media={post.featuredImage} size="56.25%" bgColor/>
                      <ItemTitle>{post.title}</ItemTitle>
                      {
                        post.postType === "post"?(
                          <Excerpt dangerouslySetInnerHTML={{__html: post.excerpt}} />
                        ):null
                      }
                    </Article>
                  </SLink>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Container>
            <Row>
              {
                previousPagePath?(
                  <Col mlAuto size="auto">
                    <Cta 
                      to={previousPagePath} 
                      bgColor={colors.secondary.base}
                      bgActiveColor={colors.secondary.base}
                    >Recientes</Cta>
                  </Col>
                ):null
              }
              {
                nextPagePath?(
                  <Col mrAuto size="auto">
                    <Cta 
                      to={nextPagePath}
                      bgColor={colors.secondary.base}
                      bgActiveColor={colors.secondary.base}
                    >Anteriores</Cta>
                  </Col>
                ):null
              }
            </Row>
        </Container>
      </Section>
    </Layout>
  );
};
export default Post;

const Article = styled.article`
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  margin-bottom: 4rem;
`;

const ItemTitle = styled.h2`
  ${h3}
  text-transform: initial;
  margin-top: 1rem;
`;

const Excerpt = styled.div``;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;