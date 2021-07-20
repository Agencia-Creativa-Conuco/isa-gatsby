import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "@osirispp/frontity-layout";
import FeaturedMedia from "../../featured-media";
import ResourceCard from "../../resource-card";

const LibraryRegulation = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    
    const { meta_box } = page;
    const { 
        library_regulation_title, 
        library_regulation_copy 
    } = meta_box;
    
    
    return data.isReady?(
        <Section>
            <Container>
                <Row >
                <Col size={12} sizeMD={6} sizeLG={5}  mlAuto  noGutters>
                <DivTitle >
                            <SectionTitle > { library_regulation_title } </SectionTitle>
                            <Html2React 
                                html={ library_regulation_copy }
                            />
                        </DivTitle>
                    </Col>   
                 <Col size={12} sizeMD={4} mrAuto noGutters>
                         <ResourceCard />
                    </Col>   
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(LibraryRegulation);


const DivTitle = styled.div`
        padding: 4rem;
        text-aling:right;
        position: relative;
        ${mq.md}{
            padding:0;
        }
`;


const SectionTitle = styled.h2`
`;
