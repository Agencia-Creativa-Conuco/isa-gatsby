import { connect, styled,css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";

const OfferInternational = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
        offer_international_title,
        offer_international_copy, 
        offer_international_group_copy,
        offer_international_image,
        offer_international_items
     } = meta_box;



    return data.isReady?(
        <Section>
            <Container fluid notFluidMD>
                <Row css={topRow({
                    bg: colors.primary.light
                })}>
                    <Row alignItems="flex-end">
                        <Col size={12} sizeMD={7} orderMD={2}>
                            <DivTitle>
                                <SectionTitle>{ offer_international_title }</SectionTitle>
                                     <Html2React 
                                       html={ offer_international_copy }
                                         />
                                     <StyledLink to="#" cta>CONOCER MAS</StyledLink>
                            </DivTitle>
                        </Col>
                        <Col size={12} sizeMD={5} orderMD={1}>
                            <DivLogo>
                                <Logo
                                    media={ offer_international_image }
                                />
                            </DivLogo>
                        </Col>
                    </Row>

                </Row>
                <Row css={bottomRow({
                    bg:colors.blue.dark
                })}>
                    <Col noGutters>
                        <DivTitle sizeXL="90rem">
                            <Row>
                                <Col size={12} >
                                    <Title color={colors.white}>
                                    <Html2React 
                                        html={offer_international_group_copy}
                                            />
                                    </Title>
                                </Col>
                            </Row>
                            <Row>
                            {
                                offer_international_items.map((item,index)=>{
                                    return(
                                        <Col size={12} sizeMD={6} key={index}>
                                            <ContentTitle color={colors.white}> { item.title }  </ContentTitle>
                                            <Content color={colors.white}>  
                                                <Html2React html={ item.content }/>
                                            </Content>
                                        </Col>
                                    )
                                })
                            }                       
                            </Row>
                        </DivTitle>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(OfferInternational);


const topRow = ({bg}) => css`
    background: ${bg};
    border-radius: 40px 40px 0 0;
`;

const bottomRow = ({bg}) => css`
    background: ${bg};
`;

const DivTitle = styled.div`
    padding: 1.5rem;
    ${mq.lg}{
        padding: 3rem;
    }
`;

const StyledLink = styled(Link)`
    margin-top: 2rem;
    margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
    margin-bottom: 4rem;
`;

const DivLogo = styled.div`
    ${mq.md}{
        transform-origin: 80% 100%;
        transform: scale(1.2);
    }
`;

const Logo = styled(FeaturedMedia)`
    
`;

const Title = styled.p`
    color: ${props => props.color};
`;

const ContentTitle = styled.h5`
    color: ${props => props.color};
    text-align: center;
`;

const Content = styled.div`
        color: ${props => props.color};
`;