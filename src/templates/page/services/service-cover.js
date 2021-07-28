import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";

const ServiceCover = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    const {
        meta_box
    } = page;

    const {
        service_cover_copy,
    } = meta_box;

    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    return data.isReady?(
        <Section spaceNone>
            <Container noGutters fluid>
                <Row alignCenter>
                    <Col 
                        size={12} 
                        sizeMD
                        order={2} 
                        orderMD={1}  
                    >
                        <CopyContainer>
                            <Row>
                                <Col
                                    size={12}
                                    sizeMD={6}
                                >
                                    <DivTitle>
                                        <SectionTitle> {page.title.rendered} </SectionTitle>
                                        <Copy>{service_cover_copy}</Copy> 
                                    </DivTitle>
                                </Col>
                            </Row>
                        </CopyContainer>
                    </Col>
                    <Col 
                        size={12} 
                        sizeMD={6}
                        noGutters 
                        zIndex={1}
                        order={1}
                    >
                        <Content decoBg={colors.blue.base}>
                        <Media
                        >
                            <FeaturedMedia 
                                decoBg={colors.primary.base} 
                                media={page.featured_media}
                                size="100%"
                                sizeXL="90%"
                                bgColor
                            />
                        </Media>
                        <DecoContent 
                            decoBg={colors.blue.base}
                            decoBgB={colors.blue.dark}
                            decoBgC={colors.cta.base}
                         />
                        </Content> 
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(ServiceCover);


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

const DivTitle = styled.div``;

const SectionTitle = styled.h1``;

const Copy = styled.p``;

const Media = styled.div`
    z-index: 4;
    clip-path: ellipse(100% 100% at 100% 0%);
`;

const Content = styled.div`
    ${({decoBg = "#4B84E9"})=>css`
        position: relative;
        &:before{
            content: "";
            position: absolute;
            right:0;
            bottom:0;
            width: 40%;
            padding-bottom: 20%;
            background:${ decoBg };
        }
        &:after{
            content: "";
            position: absolute;
            right:0;
            bottom:0;
            width: 57.5%;
            padding-bottom: 20%;
            background:${ decoBg };
            opacity:0.2;
            z-index: -1;
        }
    `}
`
const DecoContent = styled.div`
    ${({decoBg = "#4B84E9", decoBgB =" #0A214F",  decoBgC="#00A4E5"})=>css`
        position: absolute;
        right:57%;
        bottom:18%;
        width: 21%;
        padding-bottom: 20%;
        background:${ decoBgC };
        z-index: -1;
        &:before{
            content: "";
            position: absolute;
            right:100%;
            bottom:-40%;
            padding: 45%;
            clip-path: circle(50%  at 100% 50%); 
            background:${ decoBgB };
        }
        &:after{
            content: "";
            position: absolute;
            left:-51%;
            top:-10%;
            padding:16%;
            background:${ decoBg };
            opacity:0.3;
        }
    `}
` 
