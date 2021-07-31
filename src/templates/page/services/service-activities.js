import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Row, Col, Section, mq} from "../../../components/layout/index";
import Carousel from "react-slick";
import FeaturedMedia from "../../../components/featured-media";
import {h2} from "../../../components/styles/tipography";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";

const ServiceActivities = ({ page }) =>{
    const {
        studentServices: {
            actividadesExtracurriculares,
        }
    } = page;

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [slider1, setSlider1] = useState([]);
    const [slider2, setSlider2] = useState([]);

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])

    return actividadesExtracurriculares?(
        <Section spaceBottomNone>
            <Container>
                <Row>
                    <Col>
                        <SectionTitle> Actividades Extracurriculares </SectionTitle>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col 
                        noGutters 
                        size={12}
                    >
                        <Carousel
                            arrows={false}
                            asNavFor={nav2}
                            autoplay
                            pauseOnHover
                            ref={slider => (setSlider1(slider))}
                        >
                        {
                            actividadesExtracurriculares.map((item, index)=>{
                                
                                const {
                                    image,
                                } = item;

                                return(
                                    <FeaturedMedia 
                                        key={index}
                                        media={image} 
                                        size="56.25%"
                                        sizeMD="40%"
                                        sizeXL="35%"
                                        bgColor
                                    />
                                )
                            })
                        }
                        </Carousel>
                    </Col>
                    <ContentCol 
                        size={12}
                        bgColor={colors.primary.base}
                    >
                        <ContentCarousel
                            arrows={false}
                            fade
                            dots
                            appendDots={dots => <Dots>{dots.map((item,index)=>{
                                return <Dot key={index}>{item}</Dot>
                            })}</Dots>}
                            asNavFor={nav1}
                            ref={slider => (setSlider2(slider))}
                        >
                        {
                            actividadesExtracurriculares.map((item, index)=>{
                                
                                const {
                                    title,
                                    copy,
                                    cta,
                                } = item;

                                return (
                                    <Slide key={index}>
                                        <Container noGutters>
                                            <Row>
                                                <Col>
                                                    <Content>
                                                        <Title>{title}</Title>
                                                        <Copy>{copy}</Copy>
                                                        {
                                                            cta?(
                                                                <Cta to={cta.url} target={cta.target}>{cta.title}</Cta>
                                                            ):null
                                                        }
                                                    </Content>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Slide>
                                )
                            })
                        }
                        </ContentCarousel>
                    </ContentCol>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default ServiceActivities;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 4rem;
`;

const ContentCol = styled(Col)`
    ${({bgColor="blue"})=>css`
        background-color: ${bgColor};
        ${mq.lg}{
            position: absolute;
            right: 5%;
            height: 100%;
            padding: 5rem;
            max-width: 57rem;
        }
    `}
`;

const ContentCarousel = styled(Carousel)`
    height: 100%;
    padding-bottom: 10rem;
`;

const Dots = styled.ul`
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2rem;
`;

const Dot = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    button{
        margin: 0 !important;
        padding: 0 !important;
        width: 1.5rem !important;
        height: 1.5rem !important;
        border-radius: 50% !important;
        background-color: white !important;
        opacity: .5;
        &:before{
            content: none !important;
        }
        &:after{
            content: none;
        }
    }
    .slick-active{
        button{
            opacity: 1;
        }
    }
`;

const Slide = styled.div``;

const Content = styled.div`
    padding-top: 4rem;
    ${mq.md}{
        text-align: right;
    }
`;

const Title = styled.h3`
    color: white;
    text-transform: uppercase;
    margin-bottom: 4rem;
    font-weight: 900;
    ${h2}
`;

const Copy = styled.p`
    color: white;
`;