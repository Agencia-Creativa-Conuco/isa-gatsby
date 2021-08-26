import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col,mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';



const DEPCover = ({ page }) =>{

    const {
        title,
        featuredImage,
        dep:{
            cover:{
            titleDEp,
            copy
          }
        }
    } = page;
    
    return (
        <Section spaceNone>
            <Container fluid noGutters>
                <Row alignCenter>
                    <Col size={12} sizeLG={7}>
                        <DecoLogo
                            decoBg ={colors.blue.base}
                        >
                        <Logo
                            media={featuredImage}
                            size="100%"
                            size="80%"
                            bgColor
                        />
                        <DecoLogo2 decoBg={colors.blue.dark}/>
                        </DecoLogo>
                    </Col>
                    <Col>
                        <Section as="div">
                            <Container>
                                <Row>
                                    <Col>
                                        <DivTitle>
                                            <SectionTitle> {title}</SectionTitle>
                                            <Copy>{copy}</Copy>
                                        </DivTitle>
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default DEPCover;

const DivTitle = styled.div`
    ${mq.xl}{
        max-width: 57rem;
        margin: 0 auto;
    }
`;

const SectionTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 3rem;
`;

const Copy = styled.p``;

const Logo = styled(FeaturedMedia)`
    clip-path: circle(85% at 20% 3%);
`;

const DecoLogo = styled.div`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        right:23%;
        bottom:0;
        background: ${props => props.decoBg};
        width: 17%;
        padding-bottom: 35%;
        opacity: 0.4;
    }
    &::after{
        content: "";
        position: absolute;
        right:7%;
        bottom:0;
        background: ${props => props.decoBg};
        width: 16%;
        padding-bottom: 12%;
    }
`;


const DecoLogo2 = styled.div`
    &::before{
        content: "";
        position: absolute;
        right:10%;
        bottom:21%;
        background: ${props => props.decoBg};
        padding:4.5%;
        clip-path: circle(50% at 50% 50%);
    }
`;