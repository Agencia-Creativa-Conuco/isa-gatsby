import { connect, styled,css } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";

const OfferTecnics = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
            offer_tecnics_title,
            offer_tecnics_copy,
            offer_tecnics_image
        } = meta_box;

    return data.isReady?(
        <Section spaceNone css={css`background: ${colors.gray.light};`}>
            <Container fluid>
                <Row>
                    <Col 
                        size={12}
                        sizeLG={6} 
                        order={2}
                        orderMD={1}
                    >
                        <DivTitle decoBg={colors.blue.base}>
                            <SectionTitle decoBg={colors.blue.base}>{ offer_tecnics_title }</SectionTitle>
                            <Html2React 
                                html={ offer_tecnics_copy }
                            />
                            <StyledLink to="#" cta>CONOCER MAS</StyledLink>
                        </DivTitle>
                        <DecoCol decoBg={colors.blue.base}/>
                    </Col>
                    <Col 
                        size={12} 
                        sizeLG={6} 
                        order={1}
                        orderMD={2}
                        noGutters
                    >
                        <FeaturedMedia
                            media={ offer_tecnics_image }
                            size="56.26%"
                            heightMD="100%"
                            bgColor
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(OfferTecnics);

const DivTitle = styled.div`
    max-width: 57rem;
    margin: 10% auto;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        background-color: ${props => props.decoBg};
        padding: 3%;
        left: 0;
        opacity: 0.8;
        transform: translate(2rem, 2rem);

        
    }

`;

const SectionTitle = styled.h2`
    margin-bottom: 4rem;
`;

const StyledLink = styled(Link)`
    margin-top: 2rem;
    margin-bottom: 3rem;
`;

const DecoCol = styled.div`
    position: absolute;
    background-color: ${props => props.decoBg};
    width: 15%;
    padding-bottom: 15%;
    right: 0;
    bottom: 0;
    opacity: 80%;
    transform: translate(25%, 0);
    z-index: 0;
    &:after{
        content: "";
        position: absolute;
        background-color: ${props => props.decoBg};
        width: 40%;
        padding-bottom: 40%;
        top: 0;
        left: 0;
        opacity: 40%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
`