import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";

const DEPCede = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    const { meta_box } = page;
    const { 
        projects_cede_title,
        projects_cede_copy,
        projects_cede_image,
        projects_cede_group
     } = meta_box;

    return data.isReady?(
        <Section spaceTopNone>
            <Container>
                <Row>
                    <Col size={12} sizeLG={6}>
                        <DivTitle>
                            <SectionTitle>{ projects_cede_title }</SectionTitle>
                            <Copy>{ projects_cede_copy }</Copy>
                        </DivTitle>
                        <DivLogo>
                            <Logo
                                media={ projects_cede_image }
                                size="70%"
                                zIndex="20"
                            />
                        </DivLogo>
                    </Col>
                    <Col css={css`background-color: ${colors.blue.dark};`}>
                        <PriorityDiv color={colors.white}>
                            <PriorityTitle color={colors.white}> { projects_cede_group.title } </PriorityTitle>
                            <PriorityCopy> { projects_cede_group.copy } </PriorityCopy>
                        </PriorityDiv>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(DEPCede);


const DivTitle = styled.div`
`;

const SectionTitle = styled.h2`
    margin-bottom: 3rem;
`;

const Copy = styled.p``


const DivLogo = styled.div`
`;

const Logo = styled(FeaturedMedia)`

    ${mq.lg}{
        transform:  translate(6rem, 4rem);
    }
`;

const PriorityDiv = styled.div`
    padding: 3rem 5rem 0rem 10rem;  
    color: ${props => props.color};
`;

const PriorityTitle = styled.h5`
    color: ${props => props.color};
`;

const PriorityCopy = styled.p`

`;