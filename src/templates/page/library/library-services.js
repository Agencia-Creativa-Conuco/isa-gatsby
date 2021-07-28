import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";

const LibraryServices = ({ state,libraries }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const {colors} = state.theme;
    const Html2React = libraries.html2react.Component; 

    
    const { meta_box } = page;
    const { 
            library_servic_copy,
            library_servic_title,
            library_servic_image
          } = meta_box;
    
    return data.isReady?(
        <StylesSection color={colors.gray.light}>
            <Container fluid notFluidXL sizeXL="192rem">
                <Row>
                <Col size={12} sizeMD={6} noGutters>

                <Media 
                        decoBg={colors.blue.base}
                        decoBgB={colors.blue.dark}>
                        <DecoMedia 
                        decoBg={colors.blue.base}
                        decoBgB={colors.blue.dark}/> 
                        <FeaturedMedia
                            media={ library_servic_image }
                            size="60.25%"
                            heightMD="100%"
                            />   
                        </Media>
                    </Col>
                <Col size={12} sizeMD={6} noGutters>
                        <DivTitle decoBg = {colors.blue.dark}>
                            <SectionTitle > { library_servic_title } </SectionTitle>
                            <Html2React 
                                html={ library_servic_copy }
                            />
                        </DivTitle>
                    </Col>
     
                </Row>
            </Container>
        </StylesSection>
    ):null;

}

export default connect(LibraryServices);



const StylesSection = styled(Section)`

&::before{
    content: "";
    position: absolute;
    background: ${props => props.color};
    width: 100%;
    height: 100%;
    ${mq.md}{
        width: 97%;
    }


}
`

const DivTitle = styled.div`
        margin: 6rem; 
        position: relative;

        ${mq.md}{
            margin: 2rem 6rem 0rem 6rem;
        }
        ${mq.lg}{
            margin: 4rem 8rem 6rem 15rem;
        }
`;


const SectionTitle = styled.h2`
`;
const Media = styled.div`
position: relative;
&::before{
    content: "";
    position: absolute;
    padding:3%;
    padding-bottom:53.2%;
    background: ${props => props.decoBgB};
    z-index: 1;
    left: 0;
    top: 0;
    box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.15);

}
    &::after{
        content: "";
        position: absolute;
        top:0 ;
        left: 0;
        padding:3%;
        padding-bottom:15%;
        background-color:${props => props.decoBg};
        z-index: 2;
    }

`;
const DecoMedia = styled.div`
&::before{
    content: "";
    position: absolute;
    padding:3%;
    padding-bottom:25%;
    background: ${props => props.decoBg};
    z-index: 1;
    left: 100%;
    bottom: 0;
    box-shadow: 0 2.5rem 2.5rem rgba(0,0,0,0.15);

}
    &::after{
        content: "";
        position: absolute;
        bottom:0 ;
        left: 100%;
        padding:3%;
        padding-bottom:10%;
        background-color:${props => props.decoBgB};
        z-index: 2;
    }

`;