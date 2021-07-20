import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";

const LibraryCover = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    
    const { meta_box } = page;
    const { 
        library_cover_title,
        library_cover_copy
    } = meta_box;
    
    return data.isReady?(
        <Section spaceNone css={sectionStyles}>
            <Container fluid>
                <Row alignCenter >
                    <Col 
                        size={12} 
                        sizeMD={6} 
                        sizeLG={5} 
                        zIndex={2}
                        order={2} 
                        orderMD={1}
                    >
                        <Content decoBg={colors.blue.base}>
                        
                            <SectionTitle> { library_cover_title } </SectionTitle>
                            <Html2React 
                                html={ library_cover_copy }
                            />
                        </Content>
                    </Col>
                    <Col 
                        size={11} 
                        sizeMD={6}
                        sizeLG={7} 
                        noGutters 
                        zIndex={1}
                        order={1} 
                        orderMD={2}
                        mlAuto
                    >
                     <Media 
                        decoBg={colors.secondary.light}
                        decoBgB={colors.secondary.dark}>

                            <Logo
                                media={page.featured_media}
                                size="100%"
                                sizeLG="80%"
                                loading="eager"
                            />
                        </Media>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(LibraryCover);

const sectionStyles = css`
    overflow: hidden;
`;

const Content = styled.div`
    margin: 2rem auto;
    max-width: 50rem;
    position: relative;
`;


const SectionTitle = styled.h1``;


const Media = styled.div`
position: relative;
&::before{
    content: "";
    position: absolute;
    padding:27%;
    clip-path: circle(50%  at 50% 50%);
    background: ${props => props.decoBg};
    z-index: 1;
    left: 7%;
    top: -25%;
    box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.15);

}
    &::after{
        content: "";
        position: absolute;
        top: 15%;
        left: 9%;
        padding: 4%;
        background-color:${props => props.decoBgB};
        clip-path: circle(50%  at 50% 50%); 
        z-index: 2;
        ${mq.lg}{
            top: 18%;
            left: 5%;
        }
    }

`;

const Logo = styled(FeaturedMedia)`
    clip-path: ellipse(100% 100% at right 88%);
    z-index: 4;
`;

