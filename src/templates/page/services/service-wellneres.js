import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';

const ServiceWellneres = ({ page }) =>{
    
    const {  
        studentServices: {
            desarrollo: {
                title,
                content,
                image 
            }
        }
    } = page;

    return (
        <Section spaceNone>
            <Container fluid>
                <Row>
                <Col size={12} sizeMD={6} orderMD={2} noGutters>
                    <FeaturedMedia
                        media={ image }
                            size="56.25%"
                            heightMD="100%"
                            bgColor
                        />
                    </Col>
                    <Col size={12} sizeMD={6} orderMD={1}>
                        <DivTitle decoBg = {colors.blue.dark}>
                            <SectionTitle > { title } </SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                        </DivTitle>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default ServiceWellneres;


const DivTitle = styled.div`
    max-width: 57rem;
    margin: 0 auto;
    padding: 1.5rem 0;
    ${mq.sm}{
        padding: 4rem 0;
    }
    ${mq.md}{
        text-align: right;
        padding: 10% 0;
    }
    &::before{
        content: "";
        position: absolute;
        padding: 2.2%;
        top:0;
        right:0;
        background: ${props => props.decoBg};
        opacity: 0.8;
    }
`;


const SectionTitle = styled.h2`
`;
