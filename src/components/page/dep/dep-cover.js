import { connect, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";

const DEPCover = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    const {
        meta_box
    } = page;

    const {
        projects_cover_copy
    } = meta_box;

    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    return data.isReady?(
        <Section spaceNone>
            <Container fluid noGutters>
                <Row>
                    <Col size={12} sizeLG={7}>
                        <DecoLogo
                            decoBg ={colors.blue.base}
                        >
                        <Logo
                            media={page.featured_media}
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
                                            <SectionTitle> {page.title.rendered} </SectionTitle>
                                            <Copy>
                                                <Html2React 
                                                    html={projects_cover_copy}
                                                />
                                            </Copy>
                                        </DivTitle>
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

export default connect(DEPCover);

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