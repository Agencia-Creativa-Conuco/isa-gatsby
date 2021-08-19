import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';



const DEPLaboratory = ({ page }) =>{

    const {
        dep:{
            laboratory:{
                dataLaboratory
            }
        }
    } = page;

    return (
        <Section >
            <Container fluid notFluidXL sizeXL="192rem"  >
             {dataLaboratory.map((item,index) =>{
                 const {
                    title,
                    copy,
                    image

                 } = item;
                     
                     return index < 1 ?(
                             <Row key={index}>
                                <Col noGutters size={12} sizeMD={6} order={2} orderMD={1}>
                                <FeaturedMedia
                                    media={ image }
                                    size="56.25%"
                                    heightMD="100%"
                                />
                                </Col>
                                <Col css={css`background-color:${colors.blue.dark};`} order={1} orderMD={2} noGutters>
                                    <DivTitle color={colors.white}>
                                        <SectionTitle color={colors.white}>{ title }</SectionTitle>
                                        <Title>{ copy }</Title>
                                        {/* <ServiceLink color={colors.blue.base} to='/'> { item.services }  </ServiceLink> */}
                                    </DivTitle>
                                </Col>
                            </Row>

                    ):(
                        <Row key={index}>
                            <Col css={css`background-color:${colors.blue.dark};`} noGutters>
                                <DivTitle color={colors.white}>
                                    <SectionTitle color={colors.white}>{ title }</SectionTitle>
                                    <Title>{ copy }</Title>
                                      {/* <ServiceLink color={colors.blue.base} to='/'> { item.services } </ServiceLink> */}
                                </DivTitle>
                            </Col>
                            <Col noGutters size={12} sizeMD={6}>
                            <FeaturedMedia
                                media={ image }
                                size="56.25%"
                                heightMD="100%"
                            />
                            </Col>
                    </Row>
                    )})
                } 
                
            </Container>
        </Section>
    );

}

export default DEPLaboratory;


const DivTitle = styled.div`
    padding: 5% 10%;
    color: ${props => props.color};

`;


const SectionTitle = styled.h2`
    margin-bottom: 3rem;
    color: ${props => props.color};
`;

const Title = styled.p`
        max-height: 25rem;
        position:relative;
        overflow-y: auto;
        
`;


// const ServiceLink = styled(link)`
//         font-size: 2.3rem;
//         text-decoration: none;
//         color: ${props => props.color};    
// `;
