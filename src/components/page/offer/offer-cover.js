import { connect, styled,css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";

const OfferCover = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { offer_cover_copy } = meta_box;



    return data.isReady?(
        <Section spaceNone>
            <Container fluid>
                <Row alignCenter>
                    <Col size={12} sizeMD={6} sizeLG={7} noLGutters>
                        <DivLogo decoBg={ colors.blue.dark } decoBgA={colors.blue.base}>    
                            <Logo
                                media={page.featured_media}
                                size="100%"
                                sizeMD="120%"
                                sizeLG="100%"
                                sizeXL="80%"
                                bgColor
                            />
                        </DivLogo>
                    </Col>
                    <Col size={12} sizeMD={6} sizeLG={5}>
                        <DivTitle>
                            <SectionTitle> {page.title.rendered} </SectionTitle>
                            <Html2React 
                                html={ offer_cover_copy }
                            />
                        </DivTitle>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(OfferCover);

const DivLogo = styled.div`
    position:relative;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        background-color: ${props => props.decoBgA};
        padding: 4%;
        clip-path: circle(50%  at 50% 50%); 
        right: 0;
        opacity: 0.8;
        transform: translate(-2rem, 7rem);
        ${mq.md}{
            transform: translate(${8.2*100}%, 9rem);
        }
    }
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        background-color: ${props => props.decoBg};
        padding: 20%;
        clip-path: circle(50%  at 50% 100%); 
        right: -3%;
        z-index:5;
        ${mq.md}{
            right: -12%;
            z-index:0;
        }
    }


`;

const DivTitle = styled.div`
    max-width: 57rem;
    margin: 10% auto;
    ${mq.md}{
        margin: 10rem auto;
    }
`;

const SectionTitle = styled.h1``;

const Logo = styled(FeaturedMedia)`
clip-path: ellipse(88% 75% at left);
z-index: 5;
${mq.md}{
        clip-path: ellipse(100% 100% at left);
    }
`;