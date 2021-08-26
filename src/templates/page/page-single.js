import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FeaturedMedia from "../../components/featured-media";
import { Container, Row, Col, mq, Section} from "../../components/layout/index";
import colors from "../../components/styles/colors";

const PageSingle = ({ page }) => {

  const {
    title,
    featuredImage,
    content,
    settings,
  } = page;
  
  const {
    pageCustom = false,
  } = settings;

  // Load the post, but only if the data is ready.
  return (
    <>
      {/* <Global styles={css`${styles}`} /> */}
      <Section as="article" spaceNone>
        {/* COVER */}
        {
          !pageCustom?(
            <Section spaceNone as="div">
              <Cover bgColor={colors.primary.dark} hasMedia={featuredImage?true:false}>
                <FeaturedMedia 
                  media={featuredImage} 
                  size="80%"
                  sizeSM="70%"
                  sizeMD="56.25%"
                  sizeLG="45%" 
                  sizeXL="35%" 
                />
              </Cover>
              <Header>
                <Container>
                  <Row>
                    <Col>
                        <TitleWrapper>
                          <Title dangerouslySetInnerHTML={{ __html: title }} />
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
          <Content dangerouslySetInnerHTML={{__html: content}}/>
        </Section>
      </Section>

    </>
  );
};

export default PageSingle;

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
