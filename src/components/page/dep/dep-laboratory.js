import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import link from "../../link";

const DEPLaboratory = ({ state }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;

    const { meta_box } = page;
    const { projects_laboratory_group } = meta_box;



    return data.isReady?(
        <Section >
            <Container fluid notFluidXL sizeXL="192rem"  >
            {projects_laboratory_group.map((item,index) =>{
                     
                     return index < 1 ?(
                             <Row key={index}>
                                <Col noGutters size={12} sizeMD={6} order={2} orderMD={1}>
                                <FeaturedMedia
                                    media={ item.image }
                                    size="56.25%"
                                    heightMD="100%"
                                />
                                </Col>
                                <Col css={css`background-color:${colors.blue.dark}`} order={1} orderMD={2} noGutters>
                                    <DivTitle color={colors.white}>
                                        <SectionTitle color={colors.white}>{ item.title }</SectionTitle>
                                        <Title>{ item.copy }</Title>
                                        <ServiceLink color={colors.blue.base} link='/'> { item.services }  </ServiceLink>
                                    </DivTitle>
                                </Col>
                            </Row>

                    ):(
                        <Row key={index}>
                            <Col css={css`background-color:${colors.blue.dark}`} noGutters>
                                <DivTitle color={colors.white}>
                                    <SectionTitle color={colors.white}>{ item.title }</SectionTitle>
                                    <Title>{ item.copy }</Title>
                                      <ServiceLink color={colors.blue.base} link='/'> { item.services } </ServiceLink>
                                </DivTitle>
                            </Col>
                            <Col noGutters size={12} sizeMD={6}>
                            <FeaturedMedia
                                media={ item.image }
                                size="56.25%"
                                heightMD="100%"
                            />
                            </Col>
                    </Row>
                    )})
                }
                
            </Container>
        </Section>
    ):null;

}

export default connect(DEPLaboratory);


const DivTitle = styled.div`
    padding: 5% 10%;
    color: ${props => props.color};

`;


const SectionTitle = styled.h2`
    margin-bottom: 3rem;
    color: ${props => props.color};
`;

const Title = styled.p`
        max-height: 25rem;
        font-size: 2.3rem;
        position:relative;
        overflow-y: auto;
        
        // &::-webkit-scrollbar{
        //     width: 25px
        // }
        // &::-webkit-scrollbar-track{
        //     background:red;
        // }


`;


const ServiceLink = styled(link)`
        font-size: 2.3rem;
        text-decoration: none;
        color: ${props => props.color};    
`;
