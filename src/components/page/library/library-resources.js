import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";

const LibraryResources = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    
    const { meta_box } = page;
    const { 
        library_resources_title, 
        library_resources_copy, 
        library_resources_content
     } = meta_box;
    
    
    return data.isReady?(
        <Section>
            <Container fluid >
                <Row >   
                <Col size={11} mlAuto >
                        <DivTitle >
                            <SectionTitle > { library_resources_title }</SectionTitle>
                        </DivTitle>
                    </Col>

                         <ColStyles size={10} color = {colors.blue.base}  >
                                     <Copy>{ library_resources_copy } </Copy>
                            </ColStyles>

                            <ColStyles size={10} color = {colors.blue.dark} >
                                <Content >
                                    <Html2React 
                                        html={ library_resources_content }
                                    />
                                    
                                </Content>
                            </ColStyles>
                        </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(LibraryResources);



const ColStyles = styled( Col )`
        position: relative;
        width: 100%;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background-color: ${ props => props.color };
            z-index: -1;

`

const DivTitle = styled.div`
        padding: 2rem 4rem;
`;

const SectionTitle = styled.h2`
`;

const Copy = styled.div`
        padding: 4rem 0rem 1rem 4rem;
`;
const Content  = styled.div`
        padding: 1rem 0rem 1rem 4rem;   
`;



