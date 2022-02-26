import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useStaticQuery, graphql } from "gatsby";
import FeaturedMedia from "./featured-media";
import {
  InstagramIcon,
  Facebook2Icon,
  TwitterIcon,
  YoutubeIcon,
  LinkedInIcon,
} from "./icons";
import Navigation from "./navigation/navigation";
import colors from "./styles/colors";
import { getHierarchicalItems } from "./inc/auxiliar";
import useFiles from "../hooks/useFiles";
import useGlobalOption from "../hooks/useGlobalOption";
import Link from "../components/link";
import { container, mq } from "./layout/new";

const Footer = ({ state, libraries }) => {
  const images = useFiles().site;
  // Consultar y optener logo.svg
  const { menu } = useStaticQuery(graphql`
    query {
      menu: wpMenu(locations: { in: FOOTER }) {
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

  const [{ redesSociales }] = useGlobalOption();

  const icons = {
    facebook: Facebook2Icon,
    twitter: TwitterIcon,
    youtube: YoutubeIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
  };

  const redes = redesSociales.map((red) => {
    return {
      ...red,
      icon: icons[red.tipoRed],
    };
  });

  return redes.length ? (
    <FooterWrapper fluid>
      <RowWrapper color={colors.blue.dark}>
        <ContainerLayoutOne fluid>
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
          <Link to={"/"} aria-label="Logo">
            <FeaturedMedia
              media={images["logo-footer"]}
              maxWidth="25rem"
              mxAuto
              css={MediaDeco}
              alt="Logo Universidad ISA Blanco"
            />
          </Link>
        </ContainerLayoutOne>
      </RowWrapper>

      {/* Row de los Icons */}
      <RowWrapper color={colors.blue.base}>
        <ContainerLayoutTwo fluid>
          <ColLayoutOne>
            <Title color={colors.shadow.base}> REDES SOCIALES </Title>
            <SocialBox>
              {redes.map((red, index) => {
                const Icon = red.icon;

                return (
                  <LinkIcon
                    key={index}
                    href={red.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={red.tipoRed}
                  >
                    <Icon />
                  </LinkIcon>
                );
              })}
            </SocialBox>
          </ColLayoutOne>
          <ColLayoutTwo>
            <Title>Contacto</Title>
            <BoxContact>
              <span>Teléfono: </span>
              <Link to={"tel:8092472000"} target="_blank">
                809-247-2000
              </Link>
            </BoxContact>
            <BoxContact>
              <span>Email: </span>
              <Link to={"mailto:info@isa.edu.do"} target="_blank">
                info@isa.edu.do
              </Link>
            </BoxContact>
            <BoxContact>
              <span>Dirección: </span>
              <Link
                to={"https://goo.gl/maps/kjucmUrxqEWdxS7c7"}
                target="_blank"
              >
                Ave. Pres. Antonio Guzmán Km. 5 1/2, La Herradura, Santiago.
                Apartado Postal 166
              </Link>
            </BoxContact>
          </ColLayoutTwo>
        </ContainerLayoutTwo>
      </RowWrapper>
    </FooterWrapper>
  ) : null;
};

// Connect the Header component to get access to the `state` in it's `props`
export default Footer;

const FooterWrapper = styled.footer`
  ${container}
  padding: 0;
`;

const RowWrapper = styled.div`
  background-color: ${(props) => props.color};
  padding: 5rem 0;
  color: white;
`;

const ContainerLayoutOne = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 100%;
  max-width: 150rem;

  div {
    order: 1;
  }
  ${mq.lg} {
    grid-template-columns: 70% 30%;
    a:first-of-type {
      order: 2;
    }
  }
`;

const ContainerLayoutTwo = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 100%;
  max-width: 150rem;
  ${mq.md} {
    grid-template-columns: 32% 68%;
  }
  ${mq.lg} {
    grid-template-columns: 25% 70%;
  }
`;

const ColLayoutOne = styled.div`
  padding: 0 0 0 1.5rem;
  ${mq.md} {
    border-right: 0.1rem solid lightgray;
  }
`;

const ColLayoutTwo = styled.div`
  padding: 0 1.5rem;
`;

const Title = styled.h3`
  color: white;
  font-weight: bold;
  text-shadow: ${(props) => props.color};
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

const StylesCol = css``;

const SocialBox = styled.div``;

const LinkIcon = styled.a`
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  line-height: 4.5rem;
  color: white;
  text-align: center;
  font-size: 0;
  &:hover {
    opacity: 0.5;
  }
  svg {
    display: inline-block;
    line-height: 4.5rem;
    fill: white;
    width: 60%;
    line-height: 4.5rem;
    vertical-align: middle;
  }
`;
const BoxContact = styled.div`
  & > a {
    text-decoration: none;
    color: white;
  }
  & > span {
    font-weight: bold;
  }
`;
