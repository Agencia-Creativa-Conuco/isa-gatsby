import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from '../../../components/cta';

const ServicePsychology = ({ page }) =>{

    const { 
        studentServices: {
            orientacion: {
                title, 
                content,
                image,
                cta
            }
        }
    } = page;

    return (
        <Section spaceNone>
            <Container fluid>
                <Row>
                    <Col size={12} sizeMD={6} noGutters>
                        <FeaturedMedia
                            media={ image }
                            size="56.25%"
                            heightMD="100%"
                            bgColor
                        />
                    </Col>
                    <Col size={12} sizeMD={6}>
                        <DivTitle decoBg = {colors.blue.dark}>
                            <SectionTitle>  { title }  </SectionTitle>
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
        </Section>
    );

}

export default ServicePsychology;


const DivTitle = styled.div`
    max-width: 57rem;
    margin: 0 auto;
    padding: 1.5rem 0;
    ${mq.sm}{
        padding: 4rem 0;
    }
    ${mq.md}{
        padding: 10% 0;
    }
    &::before{
        content: "";
        position: absolute;
        padding: 2.2%;
        bottom:0;
        left:0;
        background: ${props => props.decoBg};
        opacity: 0.8;
    }
`; 


const SectionTitle = styled.h2`

`;
