import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";

const DIPCover = ({ page }) =>{

    const {
        title,
        featuredImage,
        investigation: {
            cover : {
                copy
            }
        }
    } = page;


    return (
        <StyledSection spaceNone decoBg={colors.cta.base}>
            <Container noGutters fluid>
                <Row alignCenter>
                    <Col 
                    size={12} 
                    sizeMD={5}
                    sizeLG={6}
                    order={2} 
                    orderMD={1}  
                    >
                        <CopyContainer>
                            <Row>
                                <Col
                                    size={12}
                                    sizeMD={6}
                                >
                                    <Title> { title } </Title>
                                    <Copy>{ copy }</Copy> 
                                </Col>
                            </Row>
                        </CopyContainer>
                    </Col>
                    <Col 
                     size={11} 
                     sizeSM={10}
                     sizeMD={7}
                     sizeLG={6}
                     order={1} 
                     orderMD={2}
                     mlAuto
                     >
                        <DecoLogo decoBg ={colors.blue.dark}>
                        <Logo
                            media={featuredImage}
                            size="100%"
                            sizeMD="100%"
                            sizeXL="90%"
                            bgColor
                        />
                        </DecoLogo>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );

}

export default DIPCover;

const StyledSection = styled(Section)`
    ${({ decoBg="blue" })=>css`
        &:before{
            content: "";
            position:absolute;
            top:10%; 
            left: 0%;
            width: 30%;
            padding-bottom:30%;
            border-radius: 50%;
            background: ${decoBg};
            transform: translate(-90%, 0);
        }
    `}
`;

const CopyContainer = styled(Container)`
    width: 200%;
    position: relative;
    margin: 10% auto;
    ${mq.md}{
        margin-top: 10rem;
        left: 100%;
        transform: translate(-50%,0);
    }
`;

const Title = styled.h1`
    margin-top: 0;
`;

const Copy = styled.p``;

const Logo = styled(FeaturedMedia)`
    clip-path: ellipse(100% 100% at right);
`;

const DecoLogo = styled.div`
 position: relative;
 &::after{
     content: "";
     position:absolute;
     left:-8%;
     bottom:15%;
     padding:8%;
     clip-path: circle(50% at 50% 50%);
     background: ${props => props.decoBg}

 }

`;