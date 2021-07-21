import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";

const Cover = ({ state, libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    const {
        featured_media,
        meta_box
    } = page;

    const {
        about_cover_copy,
        about_cover_cta = 1,
        about_cover_cta_text = "Conoce más",
        about_cover_cta_url = libraries.source.stringify({
            path: libraries.source.parse(state.router.link).path,
            hash: "#rector"
        })
    } = meta_box;

    const {colors} = state.theme;

    return data.isReady?(
        <Section spaceNone css={sectionStyles}>
            <Container  fluid  noGutters>
                <Row alignCenter >
                    <Col 
                        size={12} 
                        sizeMD={5}
                        sizeLG={6} 
                        zIndex={2}
                        order={2} 
                        orderMD={1}
                    >
                        <CopyContainer>
                            <Row>
                                <Col
                                    size={12}
                                    sizeMD={6}
                                >
                                    <Content decoBg={colors.blue.base}>
                                    
                                        <SectionTitle> {page.title.rendered} </SectionTitle>
                                        <Copy>{ about_cover_copy} </Copy>

                                        
                                        {
                                            parseInt(about_cover_cta)?(
                                                <Link 
                                                    to={about_cover_cta_url}
                                                    color={colors.blue.dark}
                                                    cta
                                                >
                                                    { about_cover_cta_text }
                                                </Link>
                                            ):null
                                        }
                                    
                                    </Content>
                                </Col>
                            </Row>
                        </CopyContainer>
                    </Col>
                    <Col 
                     size={11} 
                     sizeSM={10}
                     sizeMD={7}
                     sizeLG={6}
                     order={1} 
                     orderMD={2}
                     mlAuto
                    >
                        <Media decoBg={colors.blue.base}>
                            <Logo
                                media={featured_media}
                                size="100%"
                                sizeXL="90%"
                                bgColor
                            />
                            <DivCube 
                                decoBg={colors.primary.base} 
                                decoBgA={colors.primary.light}
                                decoBgB={colors.primary.base}
                            />
                        </Media>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(Cover);

const sectionStyles = css`
    overflow: hidden;
`;

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

const Content = styled.div`
    margin: 2rem auto;
    max-width: 50rem;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 25%;
        padding-bottom: 25%;
        left: 0;
        bottom: 0;
        background-color: ${props => props.decoBg};
        opacity: 20%;
        transform: translate(-50%, 50%);
        z-index: -1;
    }
`;

const SectionTitle = styled.h1``;

const Copy = styled.p``;

const Media = styled.div`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width: 10%;
        padding-bottom: 10%;
        background: ${props => props.decoBg};
        z-index: 10;
        left: 10%;
        top: 10%;
        box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.15);
    }
`;

const Logo = styled(FeaturedMedia)`
    clip-path: ellipse(100% 100% at right 73%);
    z-index: 4;
`;

const DivCube = styled.div`
    ${({decoBg = "#4B84E9", decoBgA="#CCEDFA", decoBgB="#4B84E9"})=>css`
        position: absolute;
        left: 0;
        bottom: 12%;
        width:40%;
        padding-bottom: 15%;
        background: ${decoBg};
        opacity: 80%;
        transform: translate(-75%, 0);
        z-index: 2;
        &::before {
            content: "";
            position: absolute;
            width: 35%;
            padding-bottom: 70%;
            top: 0;
            left: 0;
            background: ${decoBgB};
            opacity: 80%;
            z-index: 3;
        }
        &::after{
            content: "";
            position: absolute;
            left: 35%;
            top: 0;
            width: 65%;
            padding-bottom: 100%;
            background: ${decoBgA};
            opacity: 70%;
            transform: translate(0, -30%);
            z-index: 1;
        }
    `}
`;