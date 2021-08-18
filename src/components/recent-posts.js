import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq } from "./layout/index";
import FeaturedMedia from "./featured-media";
import Link from "./link";
import colors from "./styles/colors";

const RecentPosts = ({ title="Noticias Recientes", posts }) =>{
 
    return posts.length?(
        <Section>
            <Container fluid>
                <Row>
                    <Col>
                        <SectionTitle> { title } </SectionTitle>
                    </Col>
                </Row>
                <Row>
                    {posts.slice(0,3).map( (item, index) => {

                        const {
                            title,
                            featuredImage,
                            link
                        } = item

                        return(
                            <Col key={index} size={12} sizeMD={6} sizeLG={4} mxMDAuto noGuttersLG>
                                <StyledLink to={link}>
                                    <Card>    
                                        <Media
                                            media={featuredImage}
                                            size="56.25%"
                                            sizeLG="100%"
                                            bgColor
                                        />
                                        <DivTitle bg={colors.blue.base}>
                                            <Title color={colors.white} size="2rem"> 
                                                {title}
                                            </Title>
                                        </DivTitle>
                                    </Card>
                                </StyledLink>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Section>
    ):null;

}

export default RecentPosts;

const Card = styled.div`
    margin-bottom: 6rem;
    transition: all 500ms ease;
`;

const Media = styled(FeaturedMedia)``;

const DivTitle = styled.div`
    ${({bg="blue"})=>css`
        padding: 2rem 1.5rem;
        background: ${bg};
        width: 100%;
        transition: all 0.25s ease-in-out;

        ${mq.lg}{
            padding: 2.5rem;
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 0;
        }
    `}
`;

const Title = styled.h3`
    ${({color="blue"})=>css`
        color: ${color};
        font-weight: 900;
        margin: 0;
        text-transform: uppercase;
        font-size: 2rem;
    `}
`;



const StyledLink = styled(Link)`
    text-decoration: none;
    position: relative;
    display: block;
    z-index: 1;

    &:hover{
        z-index: 2;
        ${mq.lg}{
            ${DivTitle}{
                opacity: 1;
            }

            ${Card}{
                transform: scale(1.05);
                transition: all 500ms ease;
            }

        }
    }
`;

const SectionTitle = styled.h2`
    margin-bottom: 4rem;
    text-align: center;
`;

