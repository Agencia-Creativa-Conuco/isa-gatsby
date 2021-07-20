import React, { useEffect } from "react";
import { connect, styled, css, Global} from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import { Container, Row, Col, mq, Section} from "@osirispp/frontity-layout";

const PageComponent = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  const { styles } = post;

  const {
    title,
    featured_media,
    link,
    content,
    meta_box,
  } = post;

  const {
    page_custom
  } = meta_box;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const {colors} = state.theme;

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
      <Global styles={css`${styles}`} />
      <Section as="article" spaceNone>
        {/* COVER */}
        {
          !parseInt(page_custom)?(
            <Section spaceNone as="div">
              <Cover bgColor={colors.primary.dark} hasMedia={featured_media?true:false}>
                {
                  featured_media && state.theme.featured.showOnPost ? (
                    <FeaturedMedia 
                      media={featured_media} 
                      size="80%"
                      sizeSM="70%"
                      sizeMD="56.25%"
                      sizeLG="45%" 
                      sizeXL="35%" 
                    />
                  ):null
                }
              </Cover>
              <Header>
                <Container>
                  <Row>
                    <Col>
                        <TitleWrapper>
                          <Title dangerouslySetInnerHTML={{ __html: title.rendered }} />
                        </TitleWrapper>
                    </Col>
                  </Row>
                </Container>
              </Header>
            </Section>
          ):null
        }
        {/* Render the content using the Html2React component so the HTML is processed
        by the processors we included in the libraries.html2react.processors array. */}
        <Section spaceNone>
          <Content>
            <Html2React html={content.rendered} />
          </Content>
        </Section>
      </Section>

    </>
  ) : null;
};

export default connect(PageComponent);

const Cover = styled.div`
  ${({bgColor="darkblue", hasMedia})=>css`
    
    background-color: ${bgColor};
    
    ${hasMedia?css`
      ${mq.xl}{
        max-height: 55rem;
        overflow: hidden;
      }
    `:css`
      min-height: 40rem;
    `}
  `}
`;

const Header = styled.div`
  margin-top: -10rem;
`;

const TitleWrapper = styled.div`
  background-color: white;
  border-radius: 5rem 5rem 0 0;
  overflow: hidden;
`;

const Title = styled.h1`
  ${({color="#001F56"}) => css`
    color: ${color};
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 0 10rem;
    text-align: center;
  `}
`;

const Content = styled.div``;
