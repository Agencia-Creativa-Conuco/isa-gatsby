import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';

const ServiceResidence = ({ page }) =>{

    const { 
        studentServices: {
            alojamiento: {
                title, 
                content,
                image,
                cta
            }
        }
    } = page;

    return (
        <Section spaceNone zIndex={2}>
            <Container fluid notFluidXL sizeXL="192rem">
                <Row>
                    <Col size={12} sizeLG={5} css={css`background-color:${colors.blue.dark}; padding: 0;`}>
                        <Container>
                            <Row>
                                <Col>
                                    <DivTitle color={colors.white}>
                                        <SectionTitle color={colors.white}>{ title } </SectionTitle>
                                        <div dangerouslySetInnerHTML={{__html: content}} />
                                        {
                                            cta?(
                                                <Cta to={cta.url} target={cta.target}>{cta.title}</Cta>
                                            ):null
                                        }
                                    </DivTitle>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col size={12} sizeLG={7} noGutters>
                        <FeaturedMedia
                            media={ image }
                            size="56.25%"
                            height="100%"
                            bgColor
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default ServiceResidence;


const DivTitle = styled.div`
    color: ${props => props.color};
    padding: 1.5rem 0;
    ${mq.sm}{
        padding: 4rem 0;
    }
    ${mq.lg}{
        max-width: 57rem;
        margin: 0 auto;
        padding: 10% 0;
    }
`;


const SectionTitle = styled.h2`
    margin: 3rem 0;
    color: ${props => props.color};
`;
