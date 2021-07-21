import { connect, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";

const ServicePsychology = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
         service_psychology_title, 
         service_psychology_copy,
         service_psychology_image
    } = meta_box;



    return data.isReady?(
        <Section spaceNone>
            <Container fluid>
                <Row>
                    <Col size={12} sizeMD={6} noGutters>
                        <FeaturedMedia
                            media={ service_psychology_image }
                            size="56.25%"
                            heightMD="100%"
                            bgColor
                        />
                    </Col>
                    <Col size={12} sizeMD={6}>
                        <DivTitle decoBg = {colors.blue.dark}>
                            <SectionTitle>  { service_psychology_title }  </SectionTitle>
                            <Html2React 
                                html={ service_psychology_copy }
                            />
                            
                        </DivTitle>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(ServicePsychology);


const DivTitle = styled.div`
    max-width: 57rem;
    margin: 0 auto;
    padding: 1.5rem 0;
    ${mq.sm}{
        padding: 4rem 0;
    }
    ${mq.md}{
        padding: 10% 0;
    }
    &::before{
        content: "";
        position: absolute;
        padding: 2.2%;
        bottom:0;
        left:0;
        background: ${props => props.decoBg};
        opacity: 0.8;
    }
`; 


const SectionTitle = styled.h2`

`;
