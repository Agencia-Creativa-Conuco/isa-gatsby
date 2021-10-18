import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, mq } from "./layout/index";
import FeaturedMedia from "./featured-media";
import {
  InstagramIcon,
  Facebook2Icon,
  TwitterIcon,
} from "./icons";
import Navigation from "./navigation/navigation";
import colors from "./styles/colors";
import { getHierarchicalItems } from "./inc/auxiliar";

const Footer = ({ state, libraries }) => {
  //Consultar y optener logo.svg
  const { logo, menu } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-footer.svg" }) {
        publicURL
      }

      menu: wpMenu(locations: {in: MENU_2}) {
        id
        name
        menuItems {
          nodes {
            id
            label
            url
            target
            path
            parentId
            order
          }
        }
      }
    }
  `);

  const items = getHierarchicalItems(menu.menuItems.nodes);

  const {
      url_twitter = "https://twitter.com/universidad_isa", 
      url_facebook = 'https://www.facebook.com/UniversidadISA',
      url_instagram = 'https://www.instagram.com/universidadisa'
  } = menu

  return (
    <FooterWrapper>
      <Container fluid>
        <RowWrapper color={colors.blue.dark}>
          <Container sizeXL="150rem">
            <Row>
              <Col size={12} sizeLG order={2} orderLG={1}>
                <Navigation
                  items={items}
                  split
                  noGutters
                  itemColor={colors.text_main}
                  labelColor={colors.text_main}
                  itemBg="rgba(255,255,255,0.05)"
                  itemBgCurrent="rgba(255,255,255,0.05)"
                  itemBorderColor="white"
                  isMain
                  size={12}
                  sizeSM={6}
                  sizeXL={4}
                />
              </Col>
              <Col size={12} sizeLG={3} order={1} orderLG={2}>
                <Link to={"/"}  aria-label="Logo">
                  <FeaturedMedia
                    media={logo}
                    maxWidth="25rem"
                    mxAuto
                    css={MediaDeco}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        </RowWrapper>

        {/* Row de los Icons */}
        <RowWrapper color={colors.blue.base}>
          <Container sizeXL="150rem">
            <Row>
              <Col size={12} sizeMD={4} css={StylesCol}>
                <Title> REDES SOCIALES </Title>
                <Row>
                  {url_twitter ? (
                    <Col size="auto">
                      <LinkIcon href={url_twitter} target="_blank" rel="noreferrer"  aria-label="Click para abrir la red social...">
                        <TwitterIcon />
                      </LinkIcon>
                    </Col>
                  ) : null}

                  {url_instagram ? (
                    <Col size="auto">
                      <LinkIcon href={url_instagram} target="_blank" rel="noreferrer"  aria-label="Click para abrir la red social...">
                        <InstagramIcon />
                      </LinkIcon>
                    </Col>
                  ) : null}

                  {url_facebook ? (
                    <Col size="auto">
     
                      <LinkIcon href={url_facebook} target="_blank" rel="noreferrer"  aria-label="Click para abrir la red social...">
                        <Facebook2Icon />
                      </LinkIcon>
                    </Col>
                  ) : null}
                </Row>
              </Col>
            </Row>
          </Container>
        </RowWrapper>
      </Container>
    </FooterWrapper>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default Footer;

const FooterWrapper = styled.footer``;

const RowWrapper = styled(Row)`
  background-color: ${(props) => props.color};
  padding: 5rem 0;
  color: white;
`;
const Title = styled.h3`
  color: white;
  font-weight: bold;
  text-shadow:  0px 0px 10px #000000;
`;

const MediaDeco = css`
  margin-bottom: 6rem;
  &:after {
    content: "";
    position: absolute;
    margin: 0 auto;
    width: 99%;
    padding-bottom: 0.1rem;
    bottom: -3rem;
    background: #666666;
    opacity: 0.5;
  }
`;

const StylesCol = css`
  ${mq.md} {
    border-right: 0.1rem solid lightgray;
  }
`;

const LinkIcon = styled.a`
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  display: inline-block;
  margin: 0 auto;
  padding: 10px;
  color: white;
  &:hover {
    opacity: 0.5;
  }
  svg {
    fill: white;
  }
`;
