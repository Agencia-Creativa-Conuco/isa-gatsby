import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';

const OfferInternational = ({ page }) =>{
    const { 
        offer: {
            internationalOffer: {
                title,
                copy,
                image,
                content,
                columns,
                cta
            }
        }
     } = page;

    return (
        <Section>
            <Container fluid notFluidMD>
                <Row css={topRow({
                    bg: colors.primary.light
                })}>
                    <Row alignItems="flex-end">
                        <Col size={12} sizeMD={7} orderMD={2}>
                            <DivTitle>
                                <SectionTitle>{ title }</SectionTitle>
                                     <div dangerouslySetInnerHTML={{__html: copy}} />
                                     {
                                         cta?(
                                             <StyledLink to={cta.url} target={cta.target}>{cta.title}</StyledLink>
                                         ):null
                                     }
                            </DivTitle>
                        </Col>
                        <Col size={12} sizeMD={5} orderMD={1}>
                            <DivLogo>
                                <Logo
                                    media={ image }
                                />
                            </DivLogo>
                        </Col>
                    </Row>

                </Row>
                <Row css={bottomRow({
                    bg:colors.blue.dark
                })}>
                    <Col noGutters>
                        <DivTitle sizeXL="90rem">
                            <Row>
                                <Col size={12} >
                                    <Title color={colors.white}>
                                        <div dangerouslySetInnerHTML={{__html: content}} />
                                    </Title>
                                </Col>
                            </Row>
                            <Row>
                            {
                                columns.map((item,index)=>{
                                    return(
                                        <Col size={12} sizeMD={6} key={index}>
                                            <ContentTitle color={colors.white}> { item.title }  </ContentTitle>
                                            <Content color={colors.white} dangerouslySetInnerHTML={{__html: item.content}} />
                                        </Col>
                                    )
                                })
                            }                       
                            </Row>
                        </DivTitle>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default OfferInternational;


const topRow = ({bg}) => css`
    background: ${bg};
    border-radius: 40px 40px 0 0;
`;

const bottomRow = ({bg}) => css`
    background: ${bg};
`;

const DivTitle = styled.div`
    padding: 1.5rem;
    ${mq.lg}{
        padding: 3rem;
    }
`;

const StyledLink = styled(Cta)`
    margin-top: 2rem;
    margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
    margin-bottom: 4rem;
`;

const DivLogo = styled.div`
    ${mq.md}{
        transform-origin: 80% 100%;
        transform: scale(1.2);
    }
`;

const Logo = styled(FeaturedMedia)`
    
`;

const Title = styled.p`
    color: ${props => props.color};
`;

const ContentTitle = styled.h5`
    color: ${props => props.color};
    text-align: center;
`;

const Content = styled.div`
        color: ${props => props.color};
`;