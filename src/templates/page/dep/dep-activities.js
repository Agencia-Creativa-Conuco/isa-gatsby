import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col} from "../../../components/layout/index";
import colors from '../../../components/styles/colors';


const DEPActivities = ({ page }) =>{

    const {
        dep:{
            activities:{
                title,
                content
            }
        }

    } = page;
 

    return (
        <BGSection spaceNone bg={colors.gray.light}>
            <StyledContainer>
                <Row justifyContent="center">
                    <Col size={12}>
                        <DivTitle>
                            <SectionTitle>{ title }</SectionTitle>
                            <Content>
                            <div dangerouslySetInnerHTML={{__html: content}} /> 
                            </Content>
                        </DivTitle>
                    </Col>
                </Row>
            </StyledContainer>
        </BGSection>
    );

}

export default DEPActivities;

const BGSection = styled(Section)`
    background: ${props => props.bg};
`;

const StyledContainer = styled(Container)`
    padding-top: 1.5em;
    padding-bottom: 6em;
`;

const DivTitle = styled.div``;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 4rem;
`;

const Content = styled.div``;

