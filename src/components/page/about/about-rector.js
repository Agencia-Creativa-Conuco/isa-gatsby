import { connect, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";


const AboutRector = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    const {
        meta_box
    } = page;

    const {
        about_rector_image,
        about_rector_copy,
        about_rector_title = [
            "Palabras del rector",
            "Otras palabras"
        ]
    } = meta_box;

    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    return data.isReady?(
        <BgSection id="rector" decoBg={colors.blue.base} spaceTopNone>
            <Container >
                <Row alignCenter>
                    <Col 
                    size={12} 
                    sizeLG={6} 
                    >
                        <CubeRector decoBg={colors.blue.base}>
                            <FeaturedMedia
                                media={about_rector_image}
                                size="100%"
                                rounded
                                zIndex="1"
                                bgColor={colors.gray.light}
                            />
                            <CubeRector2 decoBg={colors.blue.base}/>
                        </CubeRector>
                    </Col>

                    <Col
                     size={12} 
                     sizeLG={6}
                      >
                        <Content decoBg={colors.blue.base} >
                            <SectionTitle decoBg={colors.blue.base}> 
                                {
                                    about_rector_title.map((text, index)=>{
                                        return(
                                            <TitleText key={index}>{text}</TitleText>
                                        )
                                    })
                                }
                            </SectionTitle>
                            <Html2React 
                                html={about_rector_copy}
                            />
                        </Content>
                    </Col>
                </Row>
            </Container>
        </BgSection>
    ):null;

}

export default connect(AboutRector);

const BgSection = styled(Section)`
&::before{
    content: "";
    position: absolute;
    width: 7%;
    padding-bottom: 7%;
    background: ${props => props.decoBg};
    right: 0;
    top: -1%;
    box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.25);
    } 
`;

const Content = styled.div``;

const SectionTitle = styled.h2`
    margin-top: 10rem;
`;

const TitleText = styled.span`
    display: block;
    &:last-of-type{
        transform-origin: 0 0;
        transform: scale(0.7);
    }
`;

const CubeRector = styled.div`
        position: relative;
        max-width: 50rem;
        margin: 0 auto;
        margin-top: 4rem;
        &::before{
            content: "";
            position: absolute;
            left: 8%;
            top: 8%;
            width: 13%;
            padding-bottom: 13%;
            background: ${props => props.decoBg};
            z-index: 2;
            box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.5);
        }
         &::after{
            content: "";
            position: absolute;
            width: 5%;
            padding-bottom: 5%;
            background: ${props => props.decoBg};
            left: 2%;
            top: 2%;
            opacity: 0.6;
        }   
`;

const CubeRector2 = styled.div`
    position:relative;
    &::before{
        content: "";
        position: absolute;
        width: 45%;
        padding-bottom: 35%;
        background: ${props => props.decoBg};
        opacity:0.3; 
        right: 0;
        bottom: 0;
        transform: translate(-40%, 20%);
    }
    &::after{
        content: "";
        position: absolute;
        width: 30%;
        padding-bottom: 15%;
        background: ${props => props.decoBg};
        opacity:0.3;
        right: 0;
        bottom: 0;
        transform: translate(-10%, 47%);
    }
`