import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col,mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import link from "../../../components/link";

const DEPVeterinary = ({ page }) =>{


    const {
        dep:{
            veterinary:{
                title,
                copy,
                servicios,
                image,
                groupServices
            }
        }
    } = page;

    return (
        <Section>
            <Container>
                <WrapperRow>
                    <Row>
                        <Col size={12} sizeMD={7} noGutters>
                            <DivTitle color={colors.blue.dark} bg={colors.blue.dark}>
                                <SectionTitle> { title } </SectionTitle>
                                <Copy> { copy } </Copy>
                                <Row>
                                    <Col size={12} css={stylesCol}>
                                    <ServiceLink color={colors.blue.base} to='/'> { servicios } </ServiceLink>
                                    </Col>
                       
                                            {groupServices.map((item, index)=>{
                                                    return(
                                                      <Col size={6} key={ index }>  
                                                                 <ServiceCopy  color={colors.gray.base} > { item.title  }  </ServiceCopy>
                                                      </Col>
                                                    )
                                            })}     
                                    </Row>
                            </DivTitle>
                        </Col>
                        <SpecialCol
                         size={12}
                          sizeMD={5} 
                          noGutters
                          DecoBg={colors.blue.base}
                          DecoBgA={colors.blue.dark}
                          >                            
                            <Media
                                media={ image }
                                size="90%"
                            />
                        </SpecialCol>
                    </Row>
                </WrapperRow>
            </Container>
        </Section>
    );

}

export default DEPVeterinary;

const WrapperRow = styled.div`
    box-shadow: silver 0 0 10px;
    border-radius: 20px;
`;

const DivTitle = styled.div`
    color: ${props => props.color};
    padding: 10%;
    padding-bottom: 10%;

    ${mq.lg}{
        padding: 5rem 7rem 3rem 10rem;
    }
`;


const SectionTitle = styled.h2`
    margin-bottom: 3rem;
`;

const Copy = styled.p``;


const stylesCol =  css`
        margin-top: 2rem;
        margin-bottom: 5rem;
`;

const ServiceLink = styled(link)`
        font-weight: bold;
        text-decoration: none;
        color: ${props => props.color};    
`;

const ServiceCopy = styled.div`
        color: ${ props => props.color  };

`;

const Media = styled( FeaturedMedia )`
        top:-10%;
        height: 110%;
`;

const SpecialCol =  styled(Col)`
        background: ${props => props.DecoBg};
        border-radius: 0px 20px 20px 0px;
        position:relative;
        &::before{
            content: "";
            position: absolute;
            padding:10%;
            right:10%;
            top:-7%;
            background: ${props => props.DecoBgA};
            clip-path: circle(50% at 50% 50%);
            z-index:1;
            ${mq.lg}{
                top:-13%;
            }
        }
`;