import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Container, Section, Row, Col} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';
import Cta from '../../../components/cta';

const OfferTecnics = ({ page }) =>{

    const {
        offer: {
            centerOffer: {
                title,
                content,
                image,
                cta
            }
        }, 
    } = page;

    return (
        <Section spaceNone css={css`background: ${colors.gray.light};`}>
            <Container fluid>
                <Row>
                    <Col 
                        size={12}
                        sizeLG={6} 
                        order={2}
                        orderMD={1}
                    >
                        <DivTitle decoBg={colors.blue.base}>
                            <SectionTitle decoBg={colors.blue.base}>{ title }</SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                            {
                                cta? (
                                    <StyledLink to={cta.url} target={cta.target}>{cta.title}</StyledLink>
                                ) : null
                            }
                        </DivTitle>
                        <DecoCol decoBg={colors.blue.base}/>
                    </Col>
                    <Col 
                        size={12} 
                        sizeLG={6} 
                        order={1}
                        orderMD={2}
                        noGutters
                    >
                        <FeaturedMedia
                            media={ image }
                            size="56.26%"
                            heightMD="100%"
                            bgColor
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default OfferTecnics;

const DivTitle = styled.div`
    max-width: 57rem;
    margin: 10% auto;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        background-color: ${props => props.decoBg};
        padding: 3%;
        left: 0;
        opacity: 0.8;
        transform: translate(2rem, 2rem);

        
    }

`;

const SectionTitle = styled.h2`
    margin-bottom: 4rem;
`;

const StyledLink = styled(Cta)`
    margin-top: 2rem;
    margin-bottom: 3rem;
`;

const DecoCol = styled.div`
    position: absolute;
    background-color: ${props => props.decoBg};
    width: 15%;
    padding-bottom: 15%;
    right: 0;
    bottom: 0;
    opacity: 80%;
    transform: translate(25%, 0);
    z-index: 0;
    &:after{
        content: "";
        position: absolute;
        background-color: ${props => props.decoBg};
        width: 40%;
        padding-bottom: 40%;
        top: 0;
        left: 0;
        opacity: 40%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
`