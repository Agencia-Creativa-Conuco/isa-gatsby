import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";


const DEPDevelopment = ({ state, libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
        projects_development_title,
        projects_development_copy, 
        projects_development_image,
        projects_development_content,
     } = meta_box;


    return data.isReady?(
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
                                            <Title color={colors.white}> { projects_development_title } </Title>
                                            <Content color={colors.white}> 
                                                <Html2React html={ projects_development_copy } />
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
                                                    media={ projects_development_image }
                                                    // size="60%"
                                                    maxWidth="25rem"
                                                    alignCenter
                                                    mxAuto
                                                />
                                            </Media>
                                            <List color={colors.gray.base}>
                                            {
                                                projects_development_content.map((item, index)=>{

                                                    return(
                                                        <Item key={index}>{item}</Item>
                                                    )
                                                })   
                                            }
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
    ):null;

}

export default connect(DEPDevelopment);

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

const Item = styled.li`
`;

const Content = styled.div`
    color:  ${props => props.color};
`;

const Media = styled.div`
    position: relative;
    margin-bottom: 4rem;
`;