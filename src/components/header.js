import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useStaticQuery, graphql } from 'gatsby';
import colors from './styles/colors';
import { Container, Row, Col } from './layout/index';

const Header = () => {

    //Consultar y optener logo.svg
    const { logo } = useStaticQuery( graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
    `);

    return ( 
        <HeaderWrapper 
            color={colors.header.base} 
            colorSticky={colors.header.sticky} 
            // isSticky={isSticky} 
            // isOnTop={state.theme.menu.isOnTop}
        > 
            <Container >
                <Row alignContent="center" alignCenter>
                <Col size="auto">
                    <StyledLink to="/">
                        <Logo>
                            <img src={logo.publicURL} alt="Logo universidad ISA" />
                        </Logo> 
                    </StyledLink>
                </Col>
                <Col>
                    <Row>
                    <Col size="auto" mlAuto>
                        <NavWrapper>
                            <Row alignCenter>
                                <Col alignSelf="normal" noGutters lGuttersLG>
                                    AQUI VA LA NAVEGACIÓN
                                    {/* <Nav hideXS showLG/> */}
                                </Col>
                                <Col size="auto" mlAuto>
                                <Gadgets>
                                    AQUI VAN LOS BOTONES
                                    {/* <SearchButton />
                                    <MobileMenu /> */}
                                </Gadgets>
                                </Col>
                            </Row>
                        </NavWrapper>
                    </Col>
                    </Row>
                </Col>
                </Row>
            </Container>
            {/* <SearchModal /> */}
        </HeaderWrapper>
    );
}
 
export default Header;


const HeaderWrapper = styled.header`
  ${ ({color, colorSticky, isSticky, isOnTop}) => css`
    padding: 1rem 0;
    position: relative;
    z-index: 100;
    transition: background 0.2s ease-in-out;
    ${ isSticky? css`
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      /* background-color: ${colorSticky}; */
      ` : css`
      /* background-color: ${color}; */
    `}
    ${!isOnTop? css`
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      /* background-color: ${colorSticky}; */
    `: css`
      /* background-color: ${color}; */
    `}

  `}
`;
  
const Logo = styled.div`
  max-width: 12rem;
`;

const NavWrapper = styled.div`
  background-color: white;
  padding: .5rem;
  border-radius: 10rem;
  box-shadow: 0.1rem .1rem .5rem rgba(0,0,0,.15);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Gadgets = styled.div`
  display: flex;
  align-items: center;
`;