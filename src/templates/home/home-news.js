import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import Link from "../../components/link";
import colors from "../../components/styles/colors";

const HomeNews = ({ page, posts }) =>{
    
    const {
        newsTitle = "Noticias Recientes",
    } = page;

    const news = posts;

    return news.length > 0?(
        <Section>
            <Container>
                <Row>
                    <Col>
                        <Title>{newsTitle}</Title>
                    </Col>
                </Row>
                <Row>
                    <Col size={12} sizeLG={7}>
                    {news.slice(0,1).map((item, index)=> {

                        const {
                            title,
                            excerpt,
                            link,
                            featuredImage
                        } = item;

                        return (
                            <Card key={index} main>
                                <StyledLink to={link} noDecoration>
                                    <Container>
                                        <Row>
                                            <Col size={12}>
                                                <CardMedia>
                                                    <FeaturedMedia
                                                        media={featuredImage}
                                                        size="56.25%"
                                                        bgColor={colors.gray.light}
                                                    />
                                                </CardMedia>
                                            </Col>
                                            <Col size={12}>
                                                <CardBody>
                                                    <CardTitle main>{title}</CardTitle>
                                                    <Excerpt main dangerouslySetInnerHTML={{__html: excerpt}} />
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </Container>
                                </StyledLink>
                            </Card>
                        )
                    })}
                    </Col>
                    <Col size={12} sizeLG={5}>
                    {
                        news.slice(1,4).map((item, index)=> {

                            const {
                                title,
                                excerpt,
                                link,
                                featuredImage
                            } = item;          

                            return (
                                <Card key={index} bgDeco={colors.secondary.lighter}>
                                    <StyledLink to={link} noDecoration>
                                        <Container>
                                            <Row>
                                                <Col size={12} sizeMD={6}>
                                                    <CardMedia>
                                                        <FeaturedMedia
                                                            media={featuredImage}
                                                            size="56.25%"
                                                            bgColor={colors.gray.light}
                                                        />
                                                    </CardMedia>
                                                </Col>
                                                <Col size={12} sizeMD={6}>
                                                    <CardBody>
                                                        <CardTitle>{title}</CardTitle>
                                                        <Excerpt dangerouslySetInnerHTML={{__html: excerpt}} />
                                                    </CardBody>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </StyledLink>
                                </Card>
                            )
                        }
                    )}
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default HomeNews;

const Title = styled.h2`
    ${({bgColor="green", color="white"})=>css`
        background: ${bgColor};
        color: white;
        position: absolute;
        border-radius: 1.5rem;
        padding: 1.5rem;
        top: 0;
        left: 0;
        box-shadow: 0 0 7px gray;
        z-index: 2;
    `}
`;

const Card = styled.div`
    ${({bgDeco="green", main})=>css`
        margin-bottom: 2rem;
        ${main?css``:css`
            &::before{
                content: "";
                background: ${bgDeco};
                position: absolute;
                width: 20%;
                padding-bottom: 20%;
                transform: translate(-1.5rem, -1.5rem);
            }
        `}
    `}
`;

const CardMedia = styled.div`
    margin-bottom: 1rem;
`;

const CardBody = styled.div``;

const CardTitle = styled.h3`
    font-weight: bold;
    ${({main})=>css`
        margin-top: 0;
        text-transform: uppercase;
        ${main?css``:css`
            ${mq.md}{
                font-size: 1.8rem;
            }
        `}
    `}
`;

const Excerpt = styled.div`
    ${({main})=>css`
        ${main?css``:css`
            ${mq.lg}{
                display: none;
            }
        `}
    `}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: gray;
`;