import { connect, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";

const ServiceEconomics = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
         service_economics_title, 
         service_economics_copy,
         service_economics_image
    } = meta_box;


    return data.isReady?(
        <Section>
            <Container>
                <Row>
                    <Col>
                        <Wrapper>
                            <Row>
                                <Col 
                                    size={12}
                                    sizeLG={6} 
                                    sizeXL={7} 
                                    noGuttersLG
                                >
                                    <DecoMedia 
                                        decoBg={colors.blue.dark}
                                        decoBgA={colors.cta.base}
                                    >
                                        <FeaturedMedia
                                            media={ service_economics_image }
                                            size="56.25%"
                                            heightMD="100%"
                                            zIndex={3}
                                            bgColor
                                        />
                                        <DecoMedia2                          
                                            decoBg={colors.blue.dark}
                                            decoBgA={colors.cta.base}
                                        />
                                    </DecoMedia>
                                </Col>
                                <Col>
                                    <DivTitle 
                                        color={colors.blue.dark}
                                    >
                                        <SectionTitle> { service_economics_title } </SectionTitle>
                                        <Html2React 
                                            html={ service_economics_copy }
                                        />
                                        <StyledLink link="#" cta>APLICAR</StyledLink>
                                    </DivTitle>
                                </Col>
                            </Row>
                        </Wrapper>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(ServiceEconomics);


const Wrapper = styled.div`
    box-shadow: silver 0 15px 20px;
    border-radius: 0 0 60px 60px;
    background-color: white;

    ${mq.lg}{
        border-radius: 0 50px 50px 0;
    }
`;


const DivTitle = styled.div`
    color: ${props => props.color};
    padding: 5%;
    padding-bottom: 10%;


    ${mq.lg}{
        padding: 5%;
    }

    ${mq.xl}{
        padding: 7%;
    }
`;


const SectionTitle = styled.h2`
    font-weight: 900;
    font-size: 2rem;
    margin-top: 0;
    ${mq.md}{
        font-size: 3rem;
    }
`;

const StyledLink = styled(Link)`

    margin-top: 1rem;

    ${mq.md}{
        margin-top: 2.5rem;
    }
`;
const DecoMedia2 = styled.div`
    position: relative;
    &:before{
        content: "";
        position: absolute;
        left:-3%;
        bottom:-5%;
        background: ${props => props.decoBg};
        width: 13%;
        padding-bottom: 15%;
        z-index: 2;
    }
    &:after{
        content: "";
        position: absolute;
        left:-3%;
        bottom:0;
        background: ${props => props.decoBgA};
        width: 13%;
        padding-bottom: 40%;
        z-index: 1;
    }
`
const DecoMedia = styled.div`
    height: 100%;
    &:before{
        content: "";
        position: absolute;
        right:5%;
        top:0%;
        transform: translate(0,-50%);
        background: ${props => props.decoBgA};
        width: 23%;
        padding-bottom: 4%;
        z-index: 0;
    }
    &:after{
        content: "";
        position: absolute;
        right:5%;
        top:0%;
        transform: translate(0,-50%);
        background: ${props => props.decoBg};
        width: 12%;
        padding-bottom: 4%;
        z-index: 0;
    }
`