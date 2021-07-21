import { connect, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";

const DEPPymes = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const { meta_box } = page;
    const { 
        projects_pymes_title,
        projects_pymes_copy,
        projects_pymes_image
     } = meta_box;


    return data.isReady?(
        <Section spaceBottomNone>
            <Container fluid notFluidXL sizeXL="192rem" noGutters>
                <WrapperRow bg={colors.blue.base} decoBg={colors.blue.dark}>
                    
                    <Row>
                        <Col size={12} sizeMD={5}>
                            <DecoLogo decoBg={colors.blue.dark}>
                            <Logo
                                media={ projects_pymes_image }
                                size="100%"
                                mxAuto
                                maxWidth="45rem"
                            />
                        </DecoLogo>
                        </Col>
                        <Col size={12} sizeMD={6}>
                            <SectionTitle> { projects_pymes_title } </SectionTitle>
                            <DivTitle color={colors.white} decoBg={colors.blue.dark}>
                                <Copy> { projects_pymes_copy } </Copy>
                            </DivTitle>
                        </Col>
                    </Row>
                </WrapperRow>
            </Container>
        </Section>
    ):null;

}

export default connect(DEPPymes);

const WrapperRow = styled.div`
    background: ${props => props.bg};
    margin-top: 20%;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width:1.6%;
        padding-bottom:17%;
        right:0;
        top:0;
        background: ${props => props.decoBg};
        opacity: 0.8;
    } 
`;

const DivTitle = styled.div`
    color: ${props => props.color};
    padding: 5rem 4rem;
    ${mq.md}{
        padding: 5rem 0rem 2rem 0rem
        
    }

    ${mq.lg}{
    padding: 2rem 0rem 2rem 0rem
    }
`;


const SectionTitle = styled.h2`
    text-align: center;
    ${mq.md}{
        margin-top: -4rem;
    }

    ${mq.lg}{
        margin-top: 0;
        transform: translateY(-6rem);
    }
`;

const Copy = styled.p`
`


const Logo = styled(FeaturedMedia)`
    
    transform:  translateY(-4rem);

    ${mq.md}{
        margin-top: -3rem;
        transform: translateY(0);
    }

    ${mq.lg}{
        margin-top: -13rem;
    }
`;
const DecoLogo = styled.div`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width:20%;
        padding-bottom:16%;
        left:0;
        top:13%;
        background: ${props => props.decoBg};
    } 
`;