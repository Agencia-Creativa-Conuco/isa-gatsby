import React from 'React';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Section, Container, Row, Col, mq } from '../../../components/layout/index';
import colors from '../../../components/styles/colors';

const OfertaTecnica = () => {

    return (
        <SSection>
            <Container>
                <Row>
                    <Col>
                        <SubTitle>Áreas de Formación</SubTitle>
                    </Col>
                </Row>
                <Row>
                    <Col size={12}>
                        <Sector>Sector Construcción</Sector>
                        <Divisiones>
                            <Division>
                                <DivisionTitulo>Itinerario Completo Ebanista:</DivisionTitulo>
                                <ul>
                                    <li>Auxiliar de Ebanista (Habilitación).</li>
                                    <li>Ebanista (Complementación).</li>
                                    <li>Ingles Técnico Aplicado a Ebanistería (Complementación).</li>
                                </ul>
                            </Division>
                            <Division>
                                <DivisionTitulo>Itinerario completo Plomero:</DivisionTitulo>
                                <ul>
                                    <li>Auxiliar de Plomero (Habilitación).</li>
                                    <li>Plomero Residencial (Complementación).</li>
                                    <li>Plomero Industrial (Complementación).</li>
                                    <li>Ingles Técnico Aplicado a Plomería (Complementación).</li>
                                </ul>
                            </Division>
                            <Division>
                                <DivisionTitulo>Itinerario completo: Técnico en Instalaciones y Mantenimiento Eléctrico:</DivisionTitulo>
                                <ul>
                                    <li>Instalaciones Eléctricas Residenciales (Habilitación).</li>
                                    <li>Instalaciones Eléctricas Industriales (Complementación).</li>
                                    <li>Instalaciones Industriales en Controles Electicos (Complementación).</li>
                                    <li>Programador Básico de PLC (Complementación).</li>
                                    <li>Mantenimiento Eléctrico Industrial (Complementación).</li>
                                    <li>Ingles Técnico Aplicado a Electricidad (Complementación).</li>
                                </ul>
                            </Division>
                            <Division>
                                <DivisionTitulo>Itinerario completo Albañil:</DivisionTitulo>
                                <ul>
                                    <li>Auxiliar de Albañil (Habilitación).</li>
                                    <li>Albañil de Terminaciones (Complementación).</li>
                                    <li>Varillero de Refuerzo (Complementación).</li>
                                    <li>Ingles Técnico Aplicado a Albañilería (Complementación).</li>
                                    <li>Diseño y Confección de Escaleras y Topes Decorativos Especiales (Habilitación).</li>
                                </ul>
                            </Division>
                        </Divisiones>
                    </Col>
                    <Col size={12}>
                        <Sector>Sector Empresarial</Sector>
                        <Divisiones>
                            <Division>
                                <DivisionTitulo>Itinerario completo Ventas:</DivisionTitulo>
                                <ul>
                                    <li>Vendedor Auxiliar (Habilitación)</li>
                                    <li>Vendedor Externo (Complementación).</li>
                                    <li>Analista de Canales de Distribución (Complementación).</li>
                                    <li>Asistente de Administración de Ventas (Complementación).</li>
                                    <li>Ingles Técnico Aplicado a Ventas (Complementación).</li>
                                    <li>Visitador a Medico (Habilitación).</li>
                                </ul>
                            </Division>
                            <Division>
                                <DivisionTitulo>Informática:</DivisionTitulo>
                                <ul>
                                    <li>Manejador de Informática Aplicada (Habilitación).</li>
                                    <li>Manejador de Programa de Oficina e Internet (Habilitación).</li>
                                    <li>Diseñador de Pagina Web, CSS y Javacript (Complementación).</li>
                                    <li>Manejador de Programa de Oficina y Presentaciones (Habilitación).</li>
                                    <li>Reparador de PC y Administrador de Redes (Complementación).</li>
                                </ul>
                            </Division>
                            <Division>
                                <DivisionTitulo>Contabilidad:</DivisionTitulo>
                                <ul>
                                    <li>Auxiliar de Contabilidad</li>
                                </ul>
                            </Division>
                        </Divisiones>
                    </Col>
                    <Col size={12}>
                        <Sector>Sector Agropecuario</Sector>
                        <Divisiones>
                            <Division>
                                <DivisionTitulo>Producción  Animal:</DivisionTitulo>
                                <ul>
                                    <li>Inseminador Artificial (Habilitación).</li>
                                    <li>Criador de Aves (Habilitación)</li>
                                    <li>Criador de Ganado Vacuno (Habilitación)</li>
                                    <li>Criador de Chivos y Ovejos (Habilitación)</li>
                                    <li>Criador de Abejas (Habilitación)</li>
                                    <li>Criador de Cerdos (Habilitación)</li>
                                    <li>Procesamiento de Leche (Habilitación).</li>
                                    <li>Productor de Pastos y Forrajes (Habilitación).</li>
                                    <li>Encargado de Empresas Agropecuarios (Habilitación).</li>
                                </ul>
                            </Division>
                            <Division>
                                <DivisionTitulo>Producción Agrícola:</DivisionTitulo>
                                <ul>
                                    <li>Operador de Ambiente Controlado (Habilitación).</li>
                                    <li>Productor en Invernadero (Complementación).</li>
                                    <li>Conservador de Recursos Naturales y Protección para el Medio Ambiente (Complementación).</li>
                                    <li>Manejador Post-cosecha de Banano (Habilitación).</li>
                                    <li>Manejador Post-cosecha de Cacao (Habilitación).</li>
                                    <li>Manejador Post-cosecha de Café (Habilitación).</li>
                                    <li>Manejador de Inocuidad de los Alimentos (Habilitación).</li>
                                    <li>Productor de Abonos y Bioles Orgánicos para Cultivos Agrícolas (Habilitación).</li>
                                    <li>Productor de Cultivos Orgánicos (Habilitación).</li>
                                    <li>Productor de Cultivos y Abono Orgánicos (Complementación).</li>
                                </ul>
                            </Division>
                            <Division>
                                <DivisionTitulo>Mecanización Agrícola:</DivisionTitulo>
                                <ul>
                                    <li>Operador de Tractor y sus Implementos (Complementación).</li>
                                </ul>
                            </Division>
                        </Divisiones>
                    </Col>
                </Row>
            </Container>
        </SSection>
    );
}

export default OfertaTecnica;


const SSection = styled(Section)`
    ${({bgColor="initial", color}) => css`
        background-color: ${bgColor};
        color: ${color};
        overflow: hidden;
        `}
        `;
        
const SubTitle = styled.h2`
    ${( {color}) => css`
        color: ${color};
        margin-top: 0;
        margin-bottom: 3rem;
        text-align: center;
    `}
`;

const Sector = styled.h3`
    font-weight: 300;
    text-transform: uppercase;
    padding: .5rem 0;
    border-bottom: .1rem solid ${colors.primary.black};
    /* background-color: rgba(50,50,50, 0.05); */
`;

const Divisiones = styled.ul`
    list-style: none;
    display: grid;
    margin: 0;
    ${mq.md}{
        grid-template-columns: 1fr 1fr;
    }
    ${mq.lg}{
        grid-template-columns: 1fr 1fr;
    }
`;

const Division = styled.div`
`;

const DivisionTitulo = styled.h4`
    font-weight: 600;
`;

