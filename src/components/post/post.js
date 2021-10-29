import React from "react";
import styled from "@emotion/styled";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import { Container, Section } from "../layout/index";
import {UserIcon, CalendarIcon} from "../icons";
import colors from "../styles/colors";
//import bootstrapCSS from "bootstrap/dist/css/bootstrap.min.css";

const Post = ({ post }) => {

  const {
    title,
    content,
    author,
    date,
    featuredImage
  } = post;

  // Load the post, but only if the data is ready.
  return (
    <>
      <Section as="article">
        <Container>
          
          <Header>

          <FeaturedMedia 
            media={featuredImage.node.localFile} 
            size="56.25%" 
            bgColor={colors.image.base}
          />

          <div>

            <Meta>
              <StyledLink to={author.link}>
                <Author>
                  <MetaIcon>
                    <UserIcon />
                  </MetaIcon>
                  <MetaText><b> {author.name} </b></MetaText>
                </Author>
              </StyledLink>
              <Fecha>
                <MetaIcon>
                  <CalendarIcon/>
                </MetaIcon>
                <MetaText><b>{` ${new Date(date).toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}</b></MetaText>
              </Fecha>
            </Meta>

          <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

          </div>
          </Header>


        </Container>
        {/* Render the content using the Html2React component so the HTML is processed
        by the processors we included in the libraries.html2react.processors array. */}
        <Content dangerouslySetInnerHTML={{__html: content }}>
        </Content>
      </Section>
    </>
  );
};

export default Post;

const Header = styled.header`
  // margin-bottom: 40px;
`;

const Title = styled.h1`
  margin: 20px 0;
  font-weight: 900;
  text-align: center;
`;

const Meta = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const MetaIcon = styled.span`
  vertical-align: middle;
  display: inline;
  svg{
    display: inline-block;
  }
`;

const MetaText = styled.span`
  vertical-align: middle;
  display: inline;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
`;
  
const Fecha = styled.p`
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  padding: 15px;
  max-width: 750px;
  margin: 0 auto;
`;