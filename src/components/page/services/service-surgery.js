import { connect, styled,css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";

const ServiceSurgery = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
         service_surgery_title, 
         service_surgery_copy,
         service_surgery_image
    } = meta_box;



    return data.isReady?(
        <Section>
            <Container>
                <Row>
                    <Col size={12} sizeMD={6} sizeMD={7} zIndex={2} noGutters>
                        <DecoLogo
                            decoBg={colors.blue.dark}
                            decoBgA={colors.cta.base}
                        >
                        <Media
                            media={  service_surgery_image }
                            size="56.25%"
                            bgColor
                        />
                        </DecoLogo>
                    </Col>
                    <ContentCol bgColor={colors.primary.light}>
                        <DivTitle color={colors.blue.dark}>
                            <SectionTitle>{  service_surgery_title }</SectionTitle>
                            <Html2React 
                                html={ service_surgery_copy }                             
                            />
                        </DivTitle>
                    </ContentCol>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(ServiceSurgery);

const ContentCol = styled(Col)`
    ${({bgColor="lightblue"})=>css`
        z-index: 1;
        position: relative;
        padding-bottom: 4rem;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${bgColor};
            opacity: 0.3;
            z-index: -1;
            transform-origin: 50% 100%;
            ${mq.md}{
                transform: scale(1.2, 2);
            }
        }
    `}
`;

const Media = styled(FeaturedMedia)`
    // ${mq.md}{
    //     transform: translateX(2rem);
    // }

    // ${mq.lg}{
    //     transform: translateX(4rem);
    // }
`;

const DivTitle = styled.div`
`;


const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const DecoLogo = styled.div`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left:0;
        top:-4%;
        background: ${props => props.decoBg};
        width: 15%;
        padding-bottom: 7%;
        z-index: 5;
        // transform: translate(50%,0);
    }
    &::after{
        content: "";
        position: absolute;
        left:0;
        top:-4%;
        background: ${props => props.decoBgA};
        width: 45%;
        padding-bottom: 7%;
        z-index: 4;
        // transform: translate(50%,0);
    }
`