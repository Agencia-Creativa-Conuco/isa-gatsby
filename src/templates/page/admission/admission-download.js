import { connect, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";

const AdmissionDownload = ({ state }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;

    return data.isReady?(
        <Section>
            <Container>
                <Row justifyMDContent="space-around">
                    <Col size={12} sizeMD={4}>
                        <CardTitle>
                            <SectionTitle> {page.title.rendered} </SectionTitle>
                        </CardTitle>
                        <Card bg={colors.white}>

                            <FeaturedMedia
                                media={page.featured_media}
                                size="100%"
                                maxWidth="8rem"
                                mxAuto
                            />
                            
                            <CardLink>

                                <StyledLink 
                                    to={"#"}
                                    cta
                                >DESCARGAR</StyledLink>

                            </CardLink>
                        </Card>
                    </Col>
                    <Col size={12} sizeMD={4} >
                        <CardTitle>
                            <SectionTitle> {page.title.rendered} </SectionTitle>
                        </CardTitle>
                        <Card bg={colors.white}>
                            <FeaturedMedia
                                media={page.featured_media}
                                size="100%"
                                maxWidth="8rem"
                                mxAuto
                            />
    
                            <CardLink>

                                <StyledLink 
                                    to={"#"}
                                    cta
                                >DESCARGAR</StyledLink>

                            </CardLink>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(AdmissionDownload);


const CardTitle = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 2em auto;
`;

const Card = styled.div`
    background: ${props => props.bg};
    box-shadow: rgba(0,0,0,0.15) 0 3rem 4rem;
    padding: 3rem 1rem;
    border-radius: 15px;
    max-width: 23rem;
    margin: 0 auto;
`;

const SectionTitle = styled.h3`
    text-align: center;
`;

const CardLink = styled.div`
    text-align: center;
`;

const StyledLink = styled(Link)`
    margin: 1.3rem auto;
    margin-bottom: 0;
`;
