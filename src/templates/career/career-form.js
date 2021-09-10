import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../components/layout/index";
import colors from "../../components/styles/colors";
import BackgroundImage from "gatsby-background-image";
import Form from '../../components/form';


const CareerForm = ({ career, faculty }) =>{
    
    const {
        form: {
            // title,
            image
        }
    } = career;

    // const facultyColor = faculty.color;
    
    return (
        <BGSection spaceNone>
            <BackgroundImage fluid={image.localFile.childImageSharp.fluid} >
                <Container>
                    <Row >
                        <Col size="auto" css={css`background-color: ${colors.gray.light};`}> 
                            <Wrapper>
                                <Title>Solicitud de admisión</Title>
                                <Form formId="69ce8ab3-acc5-438e-bd13-b5bb7a7c7ebf" cardStyle={false} />
                            </Wrapper>
                        </Col>
                    </Row>
                </Container>
            </BackgroundImage>
        </BGSection>
    );

}

export default CareerForm;

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