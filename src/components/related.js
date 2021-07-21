import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Section, Container, Row, Col, mq} from "./layout/index";
import FeaturedMedia from "./featured-media";
import { h5 } from "./styles/posts-tipography";
import Link from "./link";
import colors from "./styles/colors";

const Related = ({ title = "Recientes", items=[] })=>{
    
    return  items.length ?(
        <Section >
            <Container>
                <Row>
                    <Col size='auto' mxAuto >
                        <SectionTitle> { title } </SectionTitle>   
                    </Col>
                </Row>
                <Row>
                    {items.map((item, index)=>{
                        const {
                            link,
                            title,
                            featuredImage,
                        } = item;   

                        return  ( 
                            <Col size={12} sizeMD={6} sizeLG={4} mxAuto key={index}>
                                <Card  DecoColor={colors.secondary.lighter}>
                                    <StyledLink to={link} noDecoration>
                                        <Row>
                                            <Col size={12} >
                                                <Media color={ colors.green.light }>
                                                <FeaturedMedia  
                                                    media={ featuredImage }
                                                    size="65.25%"
                                                    bgColor
                                                    />      
                                                </Media>
                                            <Col size={12}noGutters>
                                                <Title>{ title }</Title>
                                            </Col>
                                        </Col>           
                                    </Row>  
                                </StyledLink>
                            </Card>
                        </Col>  
                    );
                })}
                </Row>

            </Container>
        </Section>

    ):null;
}

export default Related;

const SectionTitle = styled.h2`
        margin-bottom: 7rem;
`;

const Card = styled.div`
    ${({ DecoColor="green" })=>css`
        margin:0rem 2rem 4rem auto;
            &::before{
                content: "";
                background: ${ DecoColor };
                position: absolute;
                width: 60%;
                padding-bottom: 50%;
                transform: translate(-2.5rem, -2.5rem);
            }
    `}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    position: relative;
    display: block;
    z-index: 1;
`;

const Media = styled.div``;

const Title = styled.h3`
    ${h5}
`;