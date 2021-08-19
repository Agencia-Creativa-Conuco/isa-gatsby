import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col,mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import colors from '../../../components/styles/colors';



const DEPCede = ({ page }) =>{

    const {
        dep:{
            cede:{
                title,
                copy,
                image,
                group
            }
        }
    } = page;


    return (
        <Section spaceTopNone>
            <Container>
                <Row>
                    <Col size={12} sizeLG={6}>
                        <DivTitle>
                            <SectionTitle>{ title }</SectionTitle>
                            <Copy>{ copy }</Copy>
                        </DivTitle>
                        <DivLogo>
                            <Logo
                                media={ image }
                                size="70%"
                                zIndex="20"
                            />
                        </DivLogo>
                    </Col>
                    <Col css={css`background-color: ${colors.blue.dark};`}>
                        <PriorityDiv color={colors.white}>
                            <PriorityTitle color={colors.white}> {  group.title } </PriorityTitle>
                            <PriorityCopy> { group.copy  } </PriorityCopy>
                        </PriorityDiv>
                    </Col>
                </Row>
            </Container>
        </Section>
    );

}

export default DEPCede;


const DivTitle = styled.div``;

const SectionTitle = styled.h2`
    margin-bottom: 3rem;
`;

const Copy = styled.p``;

const DivLogo = styled.div``;

const Logo = styled(FeaturedMedia)`
    ${mq.lg}{
        transform:  translate(6rem, 4rem);
    }
`;

const PriorityDiv = styled.div`
    padding: 3rem 5rem 0rem 10rem;  
    color: ${props => props.color};
`;

const PriorityTitle = styled.h5`
    color: ${props => props.color};
`;

const PriorityCopy = styled.p``;