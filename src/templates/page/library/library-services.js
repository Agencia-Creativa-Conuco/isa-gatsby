import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media"
import colors from "../../../components/styles/colors";
const LibraryServices = ({ page }) =>{


    const {
        library:{
            services:{
                title,
                content,
                image
            }
        },
    } = page;

    return(
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
                            media={ image }
                            size="60.25%"
                            heightMD="100%"
                            />   
                        </Media>
                    </Col>
                <Col size={12} sizeMD={6} noGutters>
                        <DivTitle decoBg = {colors.blue.dark}>
                            <SectionTitle > { title } </SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                        </DivTitle>
                    </Col>
     
                </Row>
            </Container>
        </StylesSection>
    );

}

export default LibraryServices;



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


const SectionTitle = styled.h2``;


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