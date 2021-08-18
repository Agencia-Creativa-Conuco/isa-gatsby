import React from 'react';
import styled from "@emotion/styled";
import { css } from '@emotion/react';
import { Container, Section, Row, Col,mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';



const DEPDevelopment = ({ page }) =>{



    const {
        dep:{
            development:{
                title,
                content,
                contentActividades,
                image,
            }
        }

    } = page;
 
    



    return (
        <Section spaceNone  >
            <Container fluid  >
                <Row>
                    <Col
                     size={12} 
                     sizeMD={6}
                     css={css`background-color:${colors.blue.dark};`}
                     noGutters
                     >
                        <Section as="div" thin>
                            <Container>
                                <Row>
                                    <Col>
                                        <Wrapper color="white">
                                            <Title color={colors.white}> { title } </Title>
                                            <Content color={colors.white}> 
                                            <div dangerouslySetInnerHTML={{__html: content}} />
                                            </Content>
                                        </Wrapper>
                                    </Col>
                                </Row>
                            </Container>
                        </Section>
                     </Col>
                    <Col
                        size={12} 
                        sizeMD={6}
                        noGutters
                    >
                        <Section as="div" thin>
                            <Container>
                                <Row>
                                    <Col>
                                        <Wrapper>
                                            <Media  decoBg={colors.cta.base}>
                                                <FeaturedMedia
                                                    media={ image  }
                                                    // size="60%"
                                                    maxWidth="25rem"
                                                    alignCenter
                                                    mxAuto
                                                />
                                            </Media>
                                            <List>
                                            <div css={css`color:${colors.gray.base};`} dangerouslySetInnerHTML={{__html: contentActividades}} />
                                            </List>
                                        </Wrapper>
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

export default DEPDevelopment;

const Title = styled.h2`
    margin-bottom: 3rem;
    color: ${props => props.color};
`;

const Wrapper = styled.div`
    ${({color})=>css`
        ${color?css`
            *{
                color: ${color};
            }
        `:css``}
        ${mq.xl}{
            max-width: 57rem;
            margin: 0 auto;
        }
    `}
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
`;



const Content = styled.div`
    color:  ${props => props.color};
`;

const Media = styled.div`
    position: relative;
    margin-bottom: 4rem;
`;