import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media"
import colors from "../../components/styles/colors";
import useFiles from '../../hooks/useFiles';

const LibraryServices = () =>{

    const images = useFiles();

    const 
        title = "Servicios",
        content = `
            <ul>
                <li>Préstamo de materiales: libros, revistas, enciclopedias, diccionarios, atlas, entre otros.</li>
                <li>Sala de lectura con capacidad para 60 usuarios simultáneamente y ambiente propicio para el estudio.</li>
                <li>Catálogo en línea donde se pueden localizar con facilidad todo el material bibliográfico con que cuenta la biblioteca.</li>
                <li>Sala digital dotada de computadoras con internet, scanners, impresión y enciclopedias digitales para consulta e investigación.</li>
                <li>Consulta en Bases de datos: EBSCO, TEEAL</li>
                <li>Orientación y asesoría al usuario.</li>
                <li>Consulta de Libros digitales.</li>
                <li>Préstamos de equipos y materiales audiovisuales como televisores, cámara digital, proyectores de multimedia, retroproyectores, portátiles, DVD.</li>
                <li>Servicios de fotocopiado, encuadernación y venta de materiales.</li>
                <li>Servicio de Internet Wifi</li>
            </ul>
        `,
        image = images.biblioteca.servicios;

    return(
        <StylesSection color={colors.gray.light}>
            <Container fluid >
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