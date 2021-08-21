import React, { useState } from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import Link from "../../components/link";
import {LeftArrowIcon} from "../../components/icons";
import { useStaticQuery, graphql } from 'gatsby';

import {Spring, animated} from "@react-spring/web";
import colors from "../../components/styles/colors";
import { getHierarchicalItems } from "../../components/inc/auxiliar";

const Item = ({ item, ...other })=>{
    
        const {
            label,
            url,
            children = [],
        } = item;

        const {
            level = 1
        } = other;

    const isMain = level === 1;

    return (
        <Col size={12} sizeMD={ isMain? 12 : level===2? 6 : 12 }>
            <Component>
                <StyledLink to={url}>
                    <Title 
                        color={ (level + 1) % 2 === 0 && level !== 1? colors.text.base : colors.primary.dark } 
                        bgHover={colors.gray.light}
                        {...{isMain, level}}
                    >{label}</Title>
                </StyledLink>
                {
                    children.length?(
                        <ItemList items={children} level={level + 1} />
                    ):null
                }
            </Component>
        </Col>
    );
    
}

const Component = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
`

const Title = styled.span`
    ${({isMain, level, color="blue", bgHover="lightgray"})=>css`
        color: ${color};
        padding: .5rem 1.5rem;
        text-transform: uppercase;
        font-size: 2rem;
        display: block;
        ${mq.md}{
            display: inline-block;
        }
        &:hover{
            background-color: ${bgHover};
        }
        ${isMain?css`
            font-weight: 900;
        `: level % 2 !== 0? css`
            font-weight: normal;
        `: css`
            font-weight: 300;
        `}
    `}
`;

const ItemList = ({items, ...other })=>{

    const {
        level = 1
    } = other;

    return (
        <Container noGutters>
            <StyledRow as="ul" {...{level}} >
            {
                items.map((item,index)=>{
                    return (
                        <Item key={item.id} item={item} {...other} />
                    )
                })
            }
            </StyledRow>
        </Container>
    )
} 

const StyledRow = styled(Row)`
    ${({level})=>css`
        padding: 0;
        ${level===2? css`margin-bottom: 2rem;` : css` margin-bottom: 0; `};
        ${(level + 1) % 2 === 0 || (level + 1) === 3 ? css`
            padding-left: 0;
            `: css`
            padding-left: 1rem;
        `}
    `}
`;

const NavItem = ({item, isActive, setView}) => {

    const {
        id,
        label,
        description,
        wpFields: {
            icon
        },
        children,
    } = item;
    
    return (
        <MenuItem 
            onClick={(e) => setView( isActive? null : id )}
            active={isActive}
            bg={colors.blue.base}
            bgHover={colors.gray.light}
        >
            <MenuItemBody>
                <IconWrapper bgColor={colors.gray.light}>
                    <Icon media={icon?.localFile} size="100%" fit="initial"/>
                </IconWrapper>
                <OfferTitle>{label}</OfferTitle>
                {
                    description?(
                        <OfferCopy>{description}</OfferCopy>
                    ):null
                }
            </MenuItemBody>
            {
                children.length?(
                    <ExpandIcon
                        bgColor={isActive?"white":colors.primary.dark}
                        color={isActive?colors.primary.dark:"white"}
                        {...{isActive}}
                    >
                        <LeftArrowIcon/>
                    </ExpandIcon>
                ):null
            }
        </MenuItem>
    );
}

const HomeOffer = ({ page }) =>{
    
    const [view, setView] = useState();
    
    //Consultar y optener logo.svg
    const { menu } = useStaticQuery( graphql`
        query {
            menu: wpMenu(locations: {in: HOME_NAV}) {
                id
                name
                menuItems {
                  nodes {
                    id
                    label
                    description
                    url
                    target
                    path
                    parentId
                    order
                    wpFields {
                        icon {
                          id
                          alt: altText
                          full_url: sourceUrl
                          srcset: srcSet 
                          ...ImageFragment           
                        }
                      }
                  }
                }
            }
        }
    `);

    const {
        menuItems = getHierarchicalItems(menu?.menuItems?.nodes) || []
    } = page;

    return menuItems.length?(
        <Section
            css={sectionStyles} 
            spaceNone
        >
            <Navigation>
                <Container>
                    <Row>
                        {
                            menuItems.map((item,index)=>{

                                const {
                                    id,
                                    url,
                                    children
                                } = item;

                                const isActive = view === id;

                                return children.length?(
                                    <Col size={6} sizeLG={3} mxAuto noGutters key={index}>
                                        <NavItem {...{item, isActive, setView}}/>
                                    </Col>
                                ):(
                                    <Col size={6} sizeLG={3} mxAuto noGutters key={index}>
                                        <StyledLink to={url}>
                                            <NavItem {...{item, isActive, setView}}/>
                                        </StyledLink>
                                    </Col>
                                )
                            })
                        }
                    </Row>

                </Container>
            </Navigation>
            <Displayer as="div">
                {
                    menuItems.map((item, index) =>{

                        const {
                            id,
                            children
                        } = item;

                        const isActive = view === id;

                        return children.length > 0?(
                            <DisplayerSection key={id} hidden={!isActive}>
                                <Spring
                                    reset={ isActive}
                                    from={{ marginTop: "-100%", opacity: 0}}
                                    to={[
                                      { marginTop: "0", opacity: 1},
                                    ]}
                                >
                                {
                                    styles =>(
                                        <Anim style={styles}>
                                            <ItemList items={children}/>
                                        </Anim>
                                    )
                                }
                                </Spring>
                            </DisplayerSection>
                        ):null
                        
                    })
                }
            </Displayer>
        </Section>
    ):null;

}

export default HomeOffer;

const Anim = styled(animated.div)`
    padding: 5rem 0;
`;

const sectionStyles = css`
`;

const Navigation = styled.div`
    box-shadow: 0 0 2.5rem rgba(0,0,0,0.15);
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const MenuItem = styled.div`
    ${({active, bg="lightblue", bgHover="lightgray"})=>css`
        padding: 1.5rem;
        text-align: center;
        transition: all 200ms ease-in-out;
        cursor: pointer;
        height: 100%;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        ${mq.md}{
            min-height: 10rem;
            padding: 2.5rem 1.5rem;
        }

        ${active?css`
            
            background-color: ${bg};
            color: white;
            transform: scale(1.1);
            z-index: 2;
            box-shadow: 0 0 0.5rem rgba(0,0,0,.15);
           
            ${OfferTitle}{
                color: white;
            }

        `:css`
            &:hover{
                background-color: ${bgHover};
                box-shadow: 0 0 0.5rem rgba(0,0,0,.15);
            }
        `}
    `}
`;

const MenuItemBody = styled.div``;

const OfferTitle = styled.h3`
    margin-top: 0;
    font-weight: 900;
    font-size: 1.8rem;
    margin-bottom: 0;
    text-transform: uppercase;
    ${mq.md}{
        margin-bottom: 1rem;
    }
`;

const OfferCopy = styled.p`
    display: none;
    ${mq.sm}{
        display: block;
    }
    ${mq.md}{
        margin-bottom: 2rem;
    }
`;

const ExpandIcon = styled.div`
    ${({color="white", bgColor="blue", isActive})=>css`
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 auto;
        margin-top: .5rem;
        border-radius: 50%;
        background-color: ${bgColor};
        color: ${color};
        transition: all 0.25s ease-in-out;
        ${isActive?css`
            transform: rotate(90deg);
        `:css`
            transform: rotate(-90deg);
        `}
        ${mq.sm}{
            width: 2rem;
            height: 2rem;
        }
        ${mq.md}{
            width: 2.5rem;
            height: 2.5rem;
        }
    `}
`;

const IconWrapper = styled.div`
    ${({bgColor="lightgray"})=>css`
        padding: 1.7rem;
        border-radius: 50%;
        background-color: ${bgColor};
        width: 8rem;
        height: 8rem;
        margin: 0 auto;
        margin-bottom: 1rem;
    `}
`;

const Icon = styled(FeaturedMedia)``;

const Displayer = styled.div``;

const DisplayerSection = styled.div`
    box-shadow: 0 0 2.5rem rgba(0,0,0,0.15) inset;
    overflow: hidden;
`;