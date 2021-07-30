import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';

const ServiceSurgery = ({ page }) =>{
    const {
        studentServices: {
            enfermeria: {
                title, 
                content,
                image,
                cta
            }
        } 
    } = page;

    return (
        <Section>
            <Container>
                <Row>
                    <Col size={12} sizeMD={6} sizeMD={7} zIndex={2} noGutters>
                        <DecoLogo
                            decoBg={colors.blue.dark}
                            decoBgA={colors.cta.base}
                        >
                        <Media
                            media={  image }
                            size="56.25%"
                            bgColor
                        />
                        </DecoLogo>
                    </Col>
                    <ContentCol bgColor={colors.primary.light}>
                        <DivTitle color={colors.blue.dark}>
                            <SectionTitle>{  title }</SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                            {
                                cta?(
                                    <Cta to={cta.url} target={cta.target}>{cta.title}</Cta>
                                ):null
                            }
                        </DivTitle>
                    </ContentCol>
                </Row>
            </Container>
        </Section>
    );

}

export default ServiceSurgery;

const ContentCol = styled(Col)`
    ${({bgColor="lightblue"})=>css`
        z-index: 1;
        position: relative;
        padding-bottom: 4rem;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${bgColor};
            opacity: 0.3;
            z-index: -1;
            transform-origin: 50% 100%;
            ${mq.md}{
                transform: scale(1.2, 2);
            }
        }
    `}
`;

const Media = styled(FeaturedMedia)`
    // ${mq.md}{
    //     transform: translateX(2rem);
    // }

    // ${mq.lg}{
    //     transform: translateX(4rem);
    // }
`;

const DivTitle = styled.div`
`;


const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const DecoLogo = styled.div`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left:0;
        top:-4%;
        background: ${props => props.decoBg};
        width: 15%;
        padding-bottom: 7%;
        z-index: 5;
        // transform: translate(50%,0);
    }
    &::after{
        content: "";
        position: absolute;
        left:0;
        top:-4%;
        background: ${props => props.decoBgA};
        width: 45%;
        padding-bottom: 7%;
        z-index: 4;
        // transform: translate(50%,0);
    }
`