import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Section, Container, Row, Col, mq} from "../../components/layout/index";
import colors from "../../components/styles/colors";

const PostContent = ({ post })=>{

    const {
        content
    } = post;

    return (
        <Section  spaceNone >
            <Container>
                <Row>  
                    <Col>
                        <BgDeco 
                            bgColor={colors.gray.light}
                            decoColor={colors.primary.light}
                            decoColor2={colors.primary.base}/>
                            <Container noGutters>
                                <Row>
                                    <Col>
                                        <Content dangerouslySetInnerHTML={{__html: content }} />
                                    </Col>
                                </Row>
                            </Container>
                    </Col>       
                </Row>
            </Container>  
        </Section>
    );
}

export default PostContent;


const BgDeco = styled.div`    
    ${({ bgColor, decoColor, decoColor2 })=>css`
            position: absolute;
            top: 0;
            right: 0;
            left: 50%;
            width: 110%;
            height: 100%;
            color: white;
            transform: translateX(-50%);
            background: ${ bgColor };
                &::before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top:0;
                    width: 7%;
                    padding-bottom: 15%;
                    transform: translate( -50%, -20%);
                    color: white;
                    background-color:${ decoColor };
                }
            &::after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 100%;
                    width: 100%;
                    height: 100%;
                    background-color: ${decoColor2}; 
                } 
        `}
    `;


const Content = styled.div`
    padding: 4rem 0;
        ${mq.md}{
            padding: 6rem 0;
        }
        ${mq.lg}{
            max-width: 75rem;
            margin: 0 auto;
        }
`;


