import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import usePosts from "../hooks/usePosts";
import FeaturedMedia from "../components/featured-media";
import Link from "../components/link";
import Cta from "../components/cta";
import colors from "../components/styles/colors";
import useCategories from "../hooks/useCategories";
import { h3 } from "../components/styles/tipography";
import { container, mq } from "../components/layout/new";

// markup
const Post = (props) => {
  const { pageContext } = props;

  const { nextPagePath, previousPagePath, items, id } = pageContext;

  const [category] = useCategories().filter((category) => category.id === id);

  const posts = usePosts().filter((post) => items.includes(post.id));

  // const posts = usePosts()
  // .filter((post, idx) => idx >= parseInt(offset))
  // .filter((post, idx) => idx < parseInt(postsPerPage));

  const metaData = {
    title: category.name,
    description: category.description,
  };

  return (
    <Layout {...props} {...metaData}>
      <Section as="article">
        <Container>
          <Title>{category.name}</Title>
          <RowLayout>
            {posts.map((post) => {
              return (
                <SLink to={post.uri}>
                  <Article>
                    <FeaturedMedia
                      media={post.featuredImage}
                      size="56.25%"
                      bgColor
                    />
                    <ItemTitle>{post.title}</ItemTitle>
                    {post.postType === "post" ? (
                      <Excerpt
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    ) : null}
                  </Article>
                </SLink>
              );
            })}
          </RowLayout>
        </Container>
        <ContainerBottom>
          {previousPagePath ? (
            <ColBottom>
              <Cta
                to={previousPagePath}
                bgColor={colors.secondary.base}
                bgActiveColor={colors.secondary.base}
              >
                Recientes
              </Cta>
            </ColBottom>
          ) : null}
          {nextPagePath ? (
            <ColBottom>
              <Cta
                to={nextPagePath}
                bgColor={colors.secondary.base}
                bgActiveColor={colors.secondary.base}
              >
                Anteriores
              </Cta>
            </ColBottom>
          ) : null}
        </ContainerBottom>
      </Section>
    </Layout>
  );
};
export default Post;

const Article = styled.article`
  margin-bottom: 4rem;
`;

const Section = styled.article`
  padding: 0;
  margin-top: 5.5rem;
  margin-bottom: 5.5rem;

  ${mq.md} {
    margin-top: 12rem;
    margin-bottom: 9.6rem;
  }
`;

const Container = styled.div`
  ${container}
`;

const RowLayout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1rem;
  ${mq.md} {
    grid-template-columns: auto auto;
  }

  ${mq.lg} {
    grid-template-columns: auto auto auto;
  }
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
  /* margin */
`;
const ContainerBottom = styled.div`
  display: flex;
  justify-content: center;
`;

const ColBottom = styled.span`
  margin: 0 4rem;
`;
