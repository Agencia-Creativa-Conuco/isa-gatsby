import { connect, styled } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";

const DEPActivities = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component;
    
    const { meta_box } = page;
    const {  
        projects_activities_title,
        projects_activities_copy
    } = meta_box;


    return data.isReady?(
        <BGSection spaceNone bg={colors.gray.light}>
            <StyledContainer>
                <Row justifyContent="center">
                    <Col size={12}>
                        <DivTitle>
                            <SectionTitle>{  projects_activities_title }</SectionTitle>
                            <Content>
                                <Html2React 
                                    html={ projects_activities_copy }
                                />
                            </Content>
                        </DivTitle>
                    </Col>
                </Row>
            </StyledContainer>
        </BGSection>
    ):null;

}

export default connect(DEPActivities);

const BGSection = styled(Section)`
    background: ${props => props.bg};
`;

const StyledContainer = styled(Container)`
    padding-top: 1.5em;
    padding-bottom: 6em;
`;

const DivTitle = styled.div``;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 4rem;
`;

const Content = styled.div``;

