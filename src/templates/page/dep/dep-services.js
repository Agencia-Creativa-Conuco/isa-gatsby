import React from 'react';
import styled from "@emotion/styled";

import { Container, Section, Row, Col} from "../../../components/layout/index";
// import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Link  from "../../../components/link"


const DEPServices = ({ page }) =>{
    const {
        dep:{
            services:{
                title,
                copy,
                image
            }
        }
    } = page;

    return (
        <BGSection spaceNone img={image.localFile.publicURL}  >
            <Container  >
                <Row>
                    <Col size={12} sizeMD={8} sizeLG={6} mlAuto>
                        <Content>
                                <Title>{ title } </Title>
                                <Copy>{ copy } </Copy> 
                                <ServiceLink to={"/"} color={ colors.blue.base}> cartera de services</ServiceLink>
                         </Content>
                    </Col>
                </Row>
            </Container>
        </BGSection>
    );

}

export default DEPServices;



const BGSection = styled(Section)`
    background: url(${ props => props.img });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    min-height: 45rem;
    padding-top: 5rem;
    padding-bottom: 10rem;
`;

const Content = styled.div`
    padding: 3rem 0;
    text-align: right;
    position: relative;
    
    *{
        color: white;
    }
`;

const Title = styled.h2`
        margin-bottom: 4rem;
`;

const Copy = styled.p`
        margin-bottom: 4rem;
`;


const ServiceLink = styled(Link)`
        font-size: 2rem;
        text-decoration: none;
        color: ${props => props.color};   
        text-align: right;
`;




