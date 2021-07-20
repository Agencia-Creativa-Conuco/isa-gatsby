import { connect, styled,css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import link from "../../link";

const DEPVeterinary = ({ state, libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;


    const { meta_box } = page;
    const { 
        projects_veterinary_title,
        projects_veterinary_copy,
        projects_veterinary_subTitle,
        projects_veterinary_image,
        projects_veterinary_group
     } = meta_box;



    return data.isReady?(
        <Section>
            <Container>
                <WrapperRow>
                    <Row>
                        <Col size={12} sizeMD={7} noGutters>
                            <DivTitle color={colors.blue.dark} bg={colors.blue.dark}>
                                <SectionTitle> { projects_veterinary_title } </SectionTitle>
                                <Copy> { projects_veterinary_copy } </Copy>
                                <Row>
                                    <Col size={12} css={stylesCol}>
                                    <ServiceLink color={colors.blue.base} link='/'> { projects_veterinary_subTitle } </ServiceLink>
                                    </Col>
                                    <Row >
                                            {projects_veterinary_group.map((item, index)=>{
                                                    return(
                                                      <Col size={6} key={ index }>  
                                                                 <ServiceCopy  color={colors.gray.base} > { item.title  }  </ServiceCopy>
                                                      </Col>
                                                    )
                                            })}     
                                    </Row>

                                    </Row>
                            </DivTitle>
                        </Col>
                        <SpecialCol
                         size={12}
                          sizeMD={5} 
                          noGutters
                          DecoBg={colors.blue.base}
                          DecoBgA={colors.blue.dark}
                          >                            
                            <Media
                                media={ projects_veterinary_image }
                                size="90%"
                            />
                        </SpecialCol>
                    </Row>
                </WrapperRow>
            </Container>
        </Section>
    ):null;

}

export default connect(DEPVeterinary);

const WrapperRow = styled.div`
    box-shadow: silver 0 0 10px;
    border-radius: 20px;
`;

const DivTitle = styled.div`
    color: ${props => props.color};
    padding: 10%;
    padding-bottom: 10%;

    ${mq.lg}{
        padding: 5rem 7rem 3rem 10rem;
    }
`;


const SectionTitle = styled.h2`
    margin-bottom: 3rem;
`;

const Copy = styled.p``;


const stylesCol =  css`
        margin-top: 2rem;
        margin-bottom: 5rem;

`
const ServiceLink = styled(link)`
        font-weight: bold;
        text-decoration: none;
        color: ${props => props.color};    
`;

const ServiceCopy = styled.div`
        color: ${ props => props.color  }

`

const Media = styled( FeaturedMedia )`
        top:-10%;
        height: 110%;
`;

const SpecialCol =  styled(Col)`
        background: ${props => props.DecoBg};
        border-radius: 0px 20px 20px 0px;
        position:relative;
        &::before{
            content: "";
            position: absolute;
            padding:10%;
            right:10%;
            top:-7%;
            background: ${props => props.DecoBgA};
            clip-path: circle(50% at 50% 50%);
            z-index:1;
            ${mq.lg}{
                top:-13%;
            }
`;