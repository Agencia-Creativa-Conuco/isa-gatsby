import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import usePosts from "../hooks/usePosts";
import { Section, Col, Container, Row } from "../components/layout/index";
import FeaturedMedia from "../components/featured-media";
import Link from "../components/link";
import Cta from "../components/cta";
import colors from "../components/styles/colors";

// markup
const Post = (props) => {
  const { pageContext } = props;

  const { offset, nextPagePath, previousPagePath, postsPerPage } = pageContext;

  console.log(props)

  const posts = usePosts()
    .filter((post, idx) => idx >= parseInt(offset))
    .filter((post, idx) => idx < parseInt(postsPerPage));

  return (
    <Layout>
      <Section as="article">
        <Container>
          <Row>
            {posts.map((post) => {
              return (
                <Col key={post.id} size={12} sizeMD={4}>
                  <SLink to={post.uri}>
                    <Article>
                      <FeaturedMedia media={post.featuredImage} size="56.25%" bgColor/>
                      <Title>{post.title}</Title>
                      <Excerpt dangerouslySetInnerHTML={{__html: post.excerpt}} />
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

const Article = styled.article``;

const Title = styled.h3`
  text-transform: uppercase;
`;

const Excerpt = styled.div``;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;