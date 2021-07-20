import { connect, styled,css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";

const ServiceResidence = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
         service_residence_title, 
         service_residence_copy,
         service_residence_image
    } = meta_box;


    return data.isReady?(
        <Section spaceNone zIndex={2}>
            <Container fluid notFluidXL sizeXL="192rem">
                <Row>
                    <Col size={12} sizeLG={5} css={css`background-color:${colors.blue.dark}; padding: 0;`}>
                        <Container>
                            <Row>
                                <Col>
                                    <DivTitle color={colors.white}>
                                        <SectionTitle color={colors.white}>{ service_residence_title } </SectionTitle>
                                        <Html2React 
                                            html={ service_residence_copy }
                                        />
                                    </DivTitle>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col size={12} sizeLG={7} noGutters>
                        <FeaturedMedia
                            media={ service_residence_image }
                            size="56.25%"
                            height="100%"
                            bgColor
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(ServiceResidence);


const DivTitle = styled.div`
    color: ${props => props.color};
    padding: 1.5rem 0;
    ${mq.sm}{
        padding: 4rem 0;
    }
    ${mq.lg}{
        max-width: 57rem;
        margin: 0 auto;
        padding: 10% 0;
    }
`;


const SectionTitle = styled.h2`
    margin: 3rem 0;
    color: ${props => props.color};
`;
