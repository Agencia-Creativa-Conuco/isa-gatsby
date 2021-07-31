import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import colors from "../../../components/styles/colors";
import {   ClockIcon  } from "../../../components/icons";


const LibraryHorary = ({ page}) =>{

    const {
        library:{
            horary:{
                title,
                content,
            }
        },
    } = page;


    return (
        <SectionStyles color={colors.blue.dark}>
            <Row>
                <Icon bgColor={colors.cta.base} >
                        <ClockIcon />
                </Icon>   
            </Row>
            <StylesContainer>         
                <Row >
                    <Col size={12}  noGutters>
                      <SectionTitle>{ title }</SectionTitle>
                    </Col>
                </Row>
                    <Row>      
                        {content.map((item, index)=>{
                            const{ content } = item;
                            return(
                                <Col size={12} sizeMD={4} key={index} > 
                                   <div dangerouslySetInnerHTML={{__html: content}} />
                                </Col>
                        )})
                        }
                        
                    </Row>
            </ StylesContainer>
        </SectionStyles>
    );

}


export default LibraryHorary;

const SectionStyles =styled(Section)`
&::before{
    content: '';
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
}
`;

const StylesContainer = styled(Container)`
    box-shadow: 0 .7rem  0.7rem  rgba(0,0,0,0.15);
    border-radius: 15px;
    padding-bottom: 4rem;
    position: relative;
    margin-bottom: 50px;
    background: white;
`;


const SectionTitle = styled.h2`
    margin-top: 7rem;
    margin-bottom: 2rem;
    text-align: center;
`;
const Icon = styled.div`
    ${({bgColor="#00A4E5"})=>css`
        position: relative;
        display: block;
        margin: 0 auto;
        bottom: -5rem;
        width: 100px;
        background-color: ${bgColor};
        padding-bottom: 100px;
        border-radius: 50%;
        z-index: 2;
        svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.5);
            fill: white;
        }
    `}
`;