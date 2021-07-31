import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col } from "../../../components/layout/index";
import colors from "../../../components/styles/colors";

const LibraryResources = ({ page }) =>{

    const {
        library:{
            recursos:{
                title,
                copy,
                titlecontent,
                content
            }
        },
    } = page;

    
    return (
        <Section>
            <Container fluid >
                <Row >   
                <Col size={11} mlAuto >
                        <DivTitle >
                            <SectionTitle > { title }</SectionTitle>
                        </DivTitle>
                    </Col>

                         <ColStyles size={10} color = {colors.blue.base}  >
                                     <Copy>{ copy } </Copy>
                            </ColStyles>

                            <ColStyles size={10} color = {colors.blue.dark} >
                            <Content>{ titlecontent }</Content>
                                <Row>
                                {content.map((item, index)=>{
                                     const{ cloneContent } = item;
                                    return(
                                        <Col size={12} sizeMD={6} key={index}>
                                                <Content>
                                                     <div dangerouslySetInnerHTML={{__html: cloneContent}} />
                                                </Content>
                                        </Col>
                                        )
                                    })}
                                    </Row>
                                
                            </ColStyles>
                        </Row>
            </Container>
        </Section>
    );

}

export default LibraryResources;



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
        }

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



