import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link, useStaticQuery, graphql } from "gatsby";
import colors from "./styles/colors";
import Nav from "./nav";
import MobileMenu from "./menu";
import SearchInput from "./header-search-form";
import SearchButton from "./search/search-button";
import { getHierarchicalItems } from "./inc/auxiliar";
import FeaturedMedia from "./featured-media";
import useFiles from "../hooks/useFiles";
import { container, mq } from "./layout/new/index";

const Header = ({ setResultsSearch }) => {
  //Consultar y optener logo.svg
  const { menu } = useStaticQuery(graphql`
    query {
      menu: wpMenu(locations: { in: PRIMARY }) {
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

  const logo = useFiles().site.logo;

  const menuItems = getHierarchicalItems(menu.menuItems.nodes);

  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const [isSearchModalOpen, toggleSearchModal] = useState(false);

  return (
    <HeaderWrapper
      color={colors.header.base}
      colorSticky={colors.header.sticky}
    >
      <Container>
        <StyledLink to="/">
          <Logo>
            <FeaturedMedia media={logo} alt="Logo universidad ISA" />
          </Logo>
        </StyledLink>

        <NavWrapper>
          <NavWrapperContainer>
            <Nav items={menuItems} {...{ isMobileMenuOpen }} hideXS showLG />

            <Gadgets>
              {!isMobileMenuOpen && (
                <SearchButton {...{ isSearchModalOpen, toggleSearchModal }} />
              )}
              <MobileMenu
                items={menuItems}
                {...{
                  isMobileMenuOpen,
                  toggleMobileMenu,
                  toggleSearchModal,
                }}
              />
            </Gadgets>
          </NavWrapperContainer>
        </NavWrapper>

        <WrapperSearch>
          <SearchInput
            {...{
              isSearchModalOpen,
              toggleSearchModal,
              setResultsSearch,
              isMobileMenuOpen,
            }}
          />
        </WrapperSearch>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  ${({ color, colorSticky, isSticky, isOnTop }) => css`
    padding: 0.15rem 0;
    position: relative;
    z-index: 100;
    transition: background 0.2s ease-in-out;
    ${isSticky
      ? css`
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
        `
      : css``}
    ${!isOnTop
      ? css`
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
        `
      : css``}
  `}
`;

const Container = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 1fr 1fr auto;

  grid-template-areas:
    "col_1 col col_2"
    "col_3 col_3 col_3";

  ${mq.lg} {
    grid-template-columns: 1fr auto auto;

    grid-template-areas:
      "col_1 col_2 col_2"
      "col_space col_3 col_3";
  }
`;
const Logo = styled.div`
  max-width: 9rem;
  width: 12rem;
  ${mq.md} {
    max-width: 10rem;
  }
  ${mq.lg} {
    max-width: 12rem;
  }
`;

const NavWrapper = styled.div`
  grid-area: col_2;
`;

const NavWrapperContainer = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 10rem;
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  ${mq.lg} {
    grid-template-columns: 1fr 50px;
  }
`;

const WrapperSearch = styled.div`
  grid-area: col_3;
  max-width: 81rem;
  margin-left: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  grid-area: col_1;
`;

const Gadgets = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
`;
