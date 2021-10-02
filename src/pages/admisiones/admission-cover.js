import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';
import Cta from "../../components/cta";

const AdmissionCover = ({ images }) =>{

    const 
        title = "Estudia con nosotros",
        copy = "Sigue estos pasos y estudia con nosotros, aplica para vivir una experiencia educativa de calidad que marcará un antes y un después en tu carrera profesional. ¿Estás listo?",
        cta = {
            url: "#form",
            title: "Aplicar",
        }
    return (
        <Section spaceNone>
            <Container fluid>
                <Row alignCenter>
                    <Col 
                        size={12} 
                        sizeMD={7}  
                        sizeLG={6}  
                        noGutters
                    >
                        <DivLogo decoBg={colors.secondary.light}>
                            <DecoLogo decoBg={colors.secondary.light}>
                            <Logo
                                media={images.cover}
                                alt="Admisiones Universidad ISA"
                                size="100%"
                                sizeXL="90%"
                                bgColor
                            />
                            </DecoLogo>
                        </DivLogo>
                    </Col>
                    <Col 
                        size={12} 
                        sizeMD={5}
                        sizeLG={6}  
                    >
                        <Content as="div" decoBg={colors.secondary.light}>
                            <SectionTitle>{title}</SectionTitle>
                            <Copy>{copy}</Copy>
                            <StyledCTA 
                                to={cta.url}
                                paddingX="7rem"
                            >{cta.title}</StyledCTA>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default AdmissionCover;

const Content = styled(Section)`
    position: relative;
    max-width: 57rem;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
    &:after{
        content: "";
        position: absolute;
        top: 0%;
        right: 0%;
        transform: translate(100%, -100%);
        background-color: ${props =>  props.decoBg};
        padding: 5%;
        opacity: 0.7;
        z-index: -1;
    }

`;

const SectionTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 3rem;
    text-align: center;

    ${mq.md}{
        text-align: left;
    }
`;

const Copy = styled.p``;

const StyledCTA = styled(Cta)`

    ${mq.md}{
        margin-top: 3rem;
    }
`;

const DivLogo = styled.div`
    position:relative;
    &::before{
        content: "";
        background-color: ${props => props.decoBg};
        position: absolute;
        padding: 15%;
        bottom: 0;
        right: 0;
        transform: translate(2rem,0);
        opacity: 0.3;
    }

    &::after{
        content: "";
        background-color: ${props => props.decoBg};
        position: absolute;
        padding: 20%;
        bottom: 0;
        right: 0;
        transform: translate(2rem,0rem);
        opacity: 0.2;
    }

    
`;

const DecoLogo = styled.div`
    position:relative;
    &:before{
        content:"";
        position:absolute;
        padding: 5%;
        right:13%;
        top:27%;
        background-color: ${props => props.decoBg};
        opacity: 0.7;
    }
    &&:after{
        content:"";
        position:absolute;
        padding: 1.7%;
        right:6%;
        top:22%;
        background-color: ${props => props.decoBg};
        opacity: 0.7;
    }
`

const Logo = styled(FeaturedMedia)`
    clip-path: ellipse(97% 100% at left 88%);
    z-index: 5;

`;