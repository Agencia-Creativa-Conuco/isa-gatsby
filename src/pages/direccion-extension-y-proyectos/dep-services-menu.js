import React,{useState} from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col} from "../../components/layout/index";
// import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';


const DEPServicesMenu = () =>{
 
    const [view, setView] = useState(0);

    const servicesMenu = [
        {
            title : "Gerenciales y Mercadológicos",
            content: `
                <ul>
                    <li>Planes de mercadeo</li>
                    <li>Planes estratégicos</li>
                    <li>Planes de negocios</li>
                    <li>Creación de modelos de Responsabilidad Social Corporativa (RSC)</li>
                    <li>Investigación de mercados</li>
                    <li>Análisis de cadenas de valor</li>
                    <li>Análisis y descripción de puestos</li>
                    <li>Análisis y mejora de productos y procesos</li>
                    <li>Diseños de Manuales de procedimientos y medidas de control interno contables y administrativos.</li>
                    <li>Análisis financieros</li>
                    <li>Valuación de empresas</li>
                    <li>Mercadeo agrícola</li>
                    <li>Administración de fincas</li>
                </ul>
            `,
        },
        {
            title : "Gestión Medioambiental y Recursos Naturales",
            content: `
                <ul>
                    <li>Servicios de Laboratorio Especializados en Madera</li>
                    <li>Consultorías Ambientales en General</li>
                    <li>Estudios de Impactos Ambientales</li>
                    <li>Estudios de Inventario Forestal</li>
                    <li>Asesoría para la Protección de los Recursos Naturales y Ambientales</li>
                    <li>Capacitaciones para la mitigación y adaptación al cambio climático</li>
                </ul>
            `,
        },
        {
            title : "Departamento de Ciencia Animal",
            content: `
                <ul>
                    <li>Consultas en general</li>
                    <li>Vacunas ( Felinos, Caninos)</li>
                    <li>Coproológicos</li>
                    <li>Sonografias</li>
                    <li>Baño, corte de uña y de pelo en caninos</li>
                    <li>Cirugías en general</li>
                    <li>Rayos X</li>
                </ul>
            `,
        },
        {
            title : "Departamento de Agronomía",
            content: `
                <ul>
                    <li>Extracción de ADN</li>
                    <li>Análisis por PCR y electroforesis</li>
                    <li>Determinación de material vegetal infectado por Candidatus Liberibacter asiaticus (enfermedad del Huang Long Bing)</li>
                    <li>Análisis fitopatológico para diagnóstico de hongos fitopatógenos en tejidos vegetales (raices, tallo, hojas, flores, frutos, ramas, etc).</li>
                    <li>Análisis fitopatológico para diagnóstico de bacterias fitopatógenas (raíces, tallo, hojas, flores, frutos, ramas, etc).</li>
                    <li>Análisis fitopatológico para diagnóstico de nemátodos fitopatógeno en suelo y raíces.</li>
                    <li>Diagnóstico de plagas insectiles y ácaros.</li>
                </ul>
            `,
        },
        {
            title : "Departamento de Tecnología de Alimentos",
            content: `
                <ul>
                    <li>Servicios de soporte y seguimiento en Gestión de Calidad.</li>
                    <li>Capacitación en Buenas Prácticas Agrícolas de banano, mango y aguacate.</li>
                    <li>Capacitación en manejo poscosecha de vegetales orientales.</li>
                    <li>Servicios de Capacitación en BPM (Buenas Prácticas de Manufactura).</li>
                    <li>Consultoría en Buenas Prácticas de Manufactura y Procedimientos Operativos Estandarizados de Saneamiento (BPM / POES)</li>
                    <li>Servicios de Capacitación en BPM (Buenas Prácticas de Manufactura).</li>
                    <li>Consultoría en Buenas Prácticas de Manufactura y Procedimientos Operativos Estandarizados de Saneamiento (BPM / POES)</li>
                    <li>Correcto manejo de almacenes y materias primas.</li>
                </ul>
            `,
        },
    ]

    return (
        <SSection spaceTopNone>
            <Container>
                <Row justifyContent="center">
                    <Col noGutters>
                        <Menu>
                            <Row justifyContent="center">
                            {
                                servicesMenu.map((item, index)=>{
                                    
                                    const {
                                        title,
                                    } = item;
                                    
                                    return(
                                        <Col size={6} sizeMD={4} sizeXL={2} key={index} > 
                                            {/* <Link to={stringify({path:parse(state.router.link).path, hash:"#contenido"})} > */}
                                                <Option 
                                                    decoBG={colors.blue.base}    
                                                    onClick={ (e) => setView( view === index ? view : index ) }
                                                    active={view === index} 
                                                    color={view === index ? colors.blue.base : colors.white}                                        
                                                >
                                                    <OptionIcon
                                                        bgColor={view === index ? colors.blue.base : colors.white}                                      
                                                    >
                                                        {/* <FeaturedMedia media={icon} /> */}
                                                    </OptionIcon>
                                                    <OptionName>{title}</OptionName>
                                                </Option> 
                                            {/* </Link> */}
                                        </Col>
                                    )
                                })
                            }
                            </Row>
                        </Menu>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Content  bg={colors.gray.light} id="contenido">
                        { 
                            servicesMenu.map( (item,index) => {

                                const {
                                    content
                                } = item;

                                return(
                                    <Copy 
                                        key={index} 
                                        noGutters
                                        active={view === index} 
                                        hidden={index!==view}
                                        dangerouslySetInnerHTML={{__html: content }} 
                                    />
                                )  
                                
                            })
                        }
                        </Content>
                    </Col>
                </Row>
            </Container>
        </SSection>
    );
}

export default DEPServicesMenu;

const SSection = styled(Section)`
    margin-top: -8rem !important;
`;

const Menu = styled.ul`
    position:relative;
    padding-top: 4rem;
    padding-bottom: 6rem;
    margin: 0;
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        width: 110%;
        background: #0A214F;
        margin: 0;
        transform: translate( -50%, 0); 
        border-radius: 0 0 5rem 5rem;
    }
`;

const Option = styled.li`
    ${({ active, color="white"})=>css`
        margin: 0 auto;
        padding: 0;
        list-style: none;
        position:relative;
        /* font-size:1.4rem; */
        font-weight: 600;
        text-align:center;
        transition: all 0.45s ease-in-out;
        color: ${color};
        cursor: pointer;    
        max-width: 20rem;
        margin-bottom: 2rem;
    `}
`;

const OptionName = styled.p`
    color: inherit;
    margin: 0;
`;

const OptionIcon = styled.div`
    ${({bgColor="white"})=>css`
        width: 5rem;
        height: 5rem;
        padding: 1.2rem;
        border-radius: 50%;
        background-color: ${bgColor};
        margin: 0 auto;
        margin-bottom: 1rem;
    `}
`;

const Content = styled.div`
    position:relative;
    width: 80%;
    margin: 0 auto;
    margin-top: -4rem;
    z-index:1;
    padding: 4rem 0;
    &:before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 110%;
        height: 100%;
        background: ${props => props.bg};
        border-radius: 2rem;
        z-index: -1;
    }
`;

const Copy = styled.div``;

