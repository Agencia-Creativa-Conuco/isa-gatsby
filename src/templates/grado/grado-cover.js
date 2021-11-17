import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col} from "../../components/layout/index";
import colors from '../../components/styles/colors';

const GradeCover = ({ grado }) =>{

    const {
        nombre,
    } = grado;

    return (
        <Section spaceNone bgColor={colors.primary.base} overflow="hidden">
            <Section as="div" mediumTop spaceBottomNone>
                <Container fluid>
                    <Row alignCenter>
                        <Col size={12}>
                            <SectionTitle> {nombre} </SectionTitle>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </Section>
    );

}

export default GradeCover;

const SectionTitle = styled.h1`
    text-align: center;
    color: white;
`;