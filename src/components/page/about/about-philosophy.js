import React from 'react';
import { Container, Section, Row, Col, mq} from "../../layout/index";
import {useState} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from '../../styles/colors';

import {Spring, animated} from "@react-spring/web";

const AboutPhilosophy = ({ page }) =>{

    const {
        about:{
            tabs
        },
    } = page;

    // Index 0 by default
    const [view, setView] = useState( 0 );

    const handlerView = value => setView(value);

    return (
        <StyledSection spaceBottomNone bgColor={colors.blue.dark} decoBg={colors.blue.base}>
            <Container>
                <DecoContainer bgColor={colors.gray.light}/>
                <Row>
                    <Col  
                        noGutterns 
                        size={12} 
                        sizeLG={6}
                        orderLG={1}
                        order={2}
                        css={colStyle({
                            active:view? true: false,
                            bgColor:colors.blue.dark
                        })}
                    >
                        {tabs.map( (item,i) => {
                                const {
                                    title,
                                    content
                                } = item;

                                const isActive = view == i;

                                return(
                                    <Spring
                                        key={i} 
                                        reset={ isActive}
                                        from={{ opacity: 0}}
                                        to={[
                                        { opacity: 1},
                                        ]}
                                    >
                                    {
                                        styles =>(
                                            <animated.div style={styles}>
                                                <CardInfo 
                                                    key={i} 
                                                    bg={colors.blue.dark}
                                                    active={isActive}
                                                >
                                                    <CardTitle>{title}</CardTitle>
                                                    <div dangerouslySetInnerHTML={{__html: content}} />
                                                </CardInfo>
                                            </animated.div>
                                        )
                                    }

                                    </Spring>
                                )
                            })}
                    </Col>
                    <Col  
                        order={1}
                        orderLG={2} 
                        mlAuto
                    >
                        <List bgColor={colors.gray.light} decoBg={colors.blue.dark}>
                        {tabs.map( (item,i) => {
                            
                            const {
                                title
                            } = item;

                            const isActive = view == i;
                            
                            return(
                                <Item 
                                    key={i} 
                                    onClick={()=> handlerView(i)} 
                                    active={isActive}
                                    bg={colors.gray.light}
                                    bgA={colors.secondary.base}
                                    decoBg={colors.blue.dark}
                                >
                                    {title}   
                                </Item>
                            )
                        })}
                        </List>
                    </Col>
                </Row>
               
            </Container>
        </StyledSection>
    );

}

export default AboutPhilosophy;

const StyledSection = styled(Section)`
    ${({bgColor="blue", decoBg="red"})=>css`
        &:before{
            content:'';
            background-color: ${bgColor};
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            ${mq.lg}{
                width: 50%;
            }
        }
        &:after{
            content:'';
            position:absolute;
            background: ${decoBg};
            width: 15%;
            padding-bottom: 15%;
            bottom: 0;
            right: 0;
            border-radius: 50%;
            transform: translate(50%, 50%);
            opacity: 0.8;
        }
    `}
`

const DecoContainer = styled.div`
    position: relative;
    content:"";
    background:${ props => props.bgColor};
    width: 100%;
    padding-bottom: 13%;
    position: absolute;
    top: 0;
    left:0;
    margin-top: -5rem;
    display: none;
    ${mq.lg}{
        display: block;
    }
`

const colStyle = ({active, bgColor="blue"}) => css`
    background-color: ${bgColor};
`;

const CardInfo = styled.div`
    display: none;
    margin-top: 4rem;
    min-height: 40rem;
    color: white;
    padding-bottom: 4rem;

    ${mq.lg}{
        min-height: 70rem;
        margin-top: 6rem;
    }
    ${props => props.active?`
        display: block;
    `:""};
`;

const CardTitle = styled.h2`
    color: white;
    text-transform: uppercase;
    margin-bottom: 5rem;
`;

const List = styled.ul`
    ${({bgColor="lightgray", decoBg="blue"})=>css`
        padding: 1rem 0;
        max-width: 75rem;
        margin: 0 auto;
        text-align: center;
        background-color: ${bgColor};
        margin-top: -4rem;
        position: relative;
        ${mq.lg}{
            text-align: left;
            background-color: initial;
            margin-top: initial;
            padding: 0;
            padding-left: 3rem;
        }
        &:before{
            content:'';
            position: absolute;
            top: 0;
            right: 0;
            width: 3rem;
            padding-bottom: 3rem;
            background-color: ${decoBg};
            border-radius: 50%;
            transform: translate(-50%, -50%);
            ${mq.lg}{
                width: 6rem;
                padding-bottom: 6rem;
                transform: translate(0%, -120%);
            }
        }
    `}
`;

const Item = styled.li`
    display: inline-block;
    list-style: none;
    font-size: 2rem;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem;
    margin: 0;
    ${mq.lg}{
        display: block;
        font-size: 3rem;
    }

    ${props => props.active?`
        font-weight: 600;
        text-decoration: underline;
        text-decoration-color: ${props.bgA};
        text-decoration-thickness: 0.3rem;
        transition: padding 900ms  ease-out;
    `:""};
`;