import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';


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
            <Container fluid >
             {dataLaboratory.map((item,index) =>{
                 const {
                    title,
                    copy,
                    image,
                    cta,
                 } = item;
                     
                     return (
                        <Row key={index}>
                            <Col noGutters size={12} sizeMD={6} order={1} orderMD={index%2?2:1}>
                                <FeaturedMedia
                                    media={ image }
                                    size="56.25%"
                                    heightMD="100%"
                                />
                            </Col>
                            <Col css={css`background-color:${colors.blue.dark};`} order={2} orderMD={index%2?1:2} noGutters>
                                <Content color={colors.white}>
                                    <Title color={colors.white}>{ title }</Title>
                                    <Copy>{ copy }</Copy>
                                    {cta ? (
                                        <Cta to={cta.url} target={cta.target}>
                                            {cta.title}
                                        </Cta>
                                    ) : null}
                                </Content>
                            </Col>
                        </Row>
                     )
                })} 
            </Container>
        </Section>
    );

}

export default DEPLaboratory;


const Content = styled.div`
    padding: 5% 10% 10% 10%;
    color: ${props => props.color};
    ${mq.md}{
        padding: 10%;
    }
`;


const Title = styled.h2`
    margin-bottom: 3rem;
    color: ${props => props.color};
`;

const Copy = styled.p`
    position:relative;
`;


// const ServiceLink = styled(link)`
//         font-size: 2.3rem;
//         text-decoration: none;
//         color: ${props => props.color};    
// `;
