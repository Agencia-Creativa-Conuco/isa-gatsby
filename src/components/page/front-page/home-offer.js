import React, { useState } from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";
import {LeftArrowIcon} from "../../icons";
import { useStaticQuery, graphql } from 'gatsby';

import {Spring, animated} from "@react-spring/web";
import colors from "../../styles/colors";
import { getHierarchicalItems } from "../../inc/auxiliar";

const Item = ({ item })=>{
    
        const {
            title,
            link,
            parent,
            type,
            careers = [],
            children = []
        } = item;

        const isMain = parent?false: true;
    
        const isCareer = type === "career";
    
        return (
            <Col size={12} sizeMD={isCareer? 12 : isMain? 12 : 6 }>
                <Component>
                    <Link to={link} noDecoration>
                        <Title 
                            color={isCareer?colors.text.base:colors.primary.dark} 
                            bgHover={colors.gray.light}
                            {...{isMain, isCareer}}
                        >{title}</Title>
                    </Link>
                    {
                        careers.length?(
                            <ItemList items={careers} />
                        ):null
                    }
                    {
                        children.length?(
                            <ItemList items={children} />
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
    ${({isMain, isCareer, color="blue", bgHover="lightgray"})=>css`
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
        `: isCareer? css`
            text-transform: capitalize;
        `: css`
            /* font-weight: 300; */
        `}
    `}
`;

const ItemList = ({items})=>{

    return (
        <Container noGutters>
            <StyledRow as="ul">
            {
                items.map((item,index)=>{
                    return (
                        <Item key={index} item={item} />
                    )
                })
            }
            </StyledRow>
        </Container>
    )
} 

const StyledRow = styled(Row)`
    padding: 0;
`;

const HomeOffer = ({ page, faculties, careers }) =>{
    
    const [view, setView] = useState();

    
    //Consultar y optener logo.svg
    const { logo, menu } = useStaticQuery( graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }

            menu: wpMenu(name: {eq: "home_nav"}) {
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
                    wpFields {
                        icon {
                          id
                          alt: altText
                          full_url: sourceUrl
                          srcset: srcSet 
                          localFile {
                            publicURL
                            childImageSharp {
                              fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                            }
                          }           
                        }
                      }
                  }
                }
            }
        }
    `);

    const {
        navigationShow,
        navigationItems,
        menuItems = getHierarchicalItems(menu.menuItems.nodes) 
    } = page;


    const hierarchy = ({parent=0, faculties=[], careers=[], grade}) => {

       return faculties
            .filter((faculty)=>faculty.parent == parent)
            .map((faculty)=>{

                return {
                    ...faculty,
                    children: hierarchy({parent: faculty.id, faculties, careers, grade}),
                    careers: careers.filter((career)=>{
                        const [ careerFaculty ] = career.faculties;

                        return careerFaculty && careerFaculty.id == faculty.id && career.parent == grade
                    })
                }
            })
            .filter((faculty)=>faculty.children.length || faculty.careers.length)
    }

    return menuItems.length && navigationShow?(
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
                                    label,
                                    description,
                                    wpFields: {
                                        icon
                                    }
                                } = item;

                                console.log(icon)
                                const isActive = view == index;

                                return (
                                    <Col size={6} sizeLG mxAuto noGutters key={index}>
                                        <MenuItem 
                                            onClick={(e) => setView( isActive? null : index )}
                                            active={isActive}
                                            bg={colors.blue.base}
                                            bgHover={colors.gray.light}
                                        >
                                            <MenuItemBody>
                                                <IconWrapper bgColor={colors.gray.light}>
                                                    <Icon media={icon?.localFile} size="100%" fit="initial"/>
                                                </IconWrapper>
                                                <OfferTitle>{label}</OfferTitle>
                                                <OfferCopy>{description}</OfferCopy>
                                            </MenuItemBody>
                                            <ExpandIcon
                                                bgColor={isActive?"white":colors.primary.dark}
                                                color={isActive?colors.primary.dark:"white"}
                                                {...{isActive}}
                                            >
                                                <LeftArrowIcon/>
                                            </ExpandIcon>
                                        </MenuItem>
                                    </Col>
                                )
                            })
                        }
                    </Row>

                </Container>
            </Navigation>
            {/* <Displayer as="div">
                {
                    menuItems.map((item, index) =>{

                        if(post.type != "career"){
                            return null;
                        }

                        const items = hierarchy({parent: 0, faculties, careers, grade: post.id});

                        const isActive = view == index;

                        return items.length > 0?(
                            <DisplayerSection key={index} hidden={!isActive}>
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
                                            <ItemList items={items}/>
                                        </Anim>
                                    )
                                }
                                </Spring>
                            </DisplayerSection>
                        ):null
                        
                    })
                }
            </Displayer> */}
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
    color: black;
    display: block;
    height: 100%;
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
        justify-description: space-between;
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
            
                ${OfferTitle}{
                }   
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