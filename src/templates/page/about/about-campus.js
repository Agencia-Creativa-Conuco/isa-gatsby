import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import Carousel from "react-slick";
import {LeftArrowIcon, RightArrowIcon} from "../../../components/icons";
import colors from '../../../components/styles/colors';

const Arrows = (props => {

    const Arrow = styled.div`
      ${({bgColor="blue", color="white"})=>css`
        padding: 1rem;
        border-radius: 50%;
        background-color: ${bgColor};
        color: ${color};
        width: 5rem;
        height: 5rem;
        margin: 0 3rem;
        z-index: 2;
        position: absolute;
        top: 50%;
        display: none !important;
        ${mq.lg}{
            display: block !important;
        }
        &:focus{
          background-color: ${bgColor};
          color: ${color};
        }
        &:hover{
          background-color: ${bgColor};
          color: ${color};
        }
        &:before{
          content: initial;
        }
      `}
    `;
  
    return(
      <Arrow {...props}/>
    )
  
})

const AboutCampus = ({ page }) =>{

    const {
        about: {
            campus: {
                title,
                images,
            }
        }
    } = page;

    return images?.length?(
        <Section spaceNone>
            <Container
                fluid 
                noGutters
            >
                <Row>
                    <Col 
                        sizeLG={6}
                        mlAuto
                    >
                        <SectionTitle>{ title }</SectionTitle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel
                            prevArrow={<Arrows bgColor={"white"} color={colors.primary.dark}><LeftArrowIcon/></Arrows>}
                            nextArrow={<Arrows bgColor={"white"} color={colors.primary.dark}><RightArrowIcon/></Arrows>}
                        >
                        {
                            images.map((item,index) => {
                                return (
                                    <FeaturedMedia 
                                        key={item.ID}
                                        media={item.localFile}
                                        size="56.25%"
                                        sizeXL="40%"
                                        bgColor={colors.gray.light}
                                    />
                                )
                        })}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default AboutCampus;

// const colStyles = css`
//     padding: 1.5rem;
//     margin-top: -1.5rem;
// `;

const SectionTitle = styled.h2`
    text-align: center;
    ${mq.lg}{
        margin-top: -5rem;
        margin-bottom: 0;
    }
`;