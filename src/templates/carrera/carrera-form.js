import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import colors from "../../components/styles/colors";
import BackgroundImage from "gatsby-background-image";
import Form from '../../components/form';
import useGrados from '../../hooks/useGrados';



const CarreraForm = ({ carrera, facultad }) =>{
    
    const {
        grado,
        imagenFormulario
    } = carrera;

    const data = useGrados();

    console.log(data)

    const filtro = data.filter((item)=>  item.id  === grado.id )
    .map((item)=>{
        return item.formulario.formularios
    })

    let ids= [];
    for (let i of filtro[0]){
        ids.push(i.id)
      }     
    
    return (
        <BGSection spaceNone>
            <BackgroundImage fluid={imagenFormulario.localFile.childImageSharp.fluid} >
                <Container>
                    <Row >
                        <Col size="auto" css={css`background-color: ${colors.gray.light};`}> 
                            <Wrapper>
                                <Title>Solicitud de admisión</Title>
                                <Form   formIds={ids}  cardStyle={false} />
                            </Wrapper>
                        </Col>
                    </Row>
                </Container>
            </BackgroundImage>
        </BGSection>
    );

}

export default CarreraForm;

const BGSection = styled(Section)`
    background: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

`;

const Wrapper = styled.div`
    max-width: 40rem;
    padding: 2rem 0;
    ${mq.md}{
        padding: 4rem;
    }
`;

const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 3rem;
`;