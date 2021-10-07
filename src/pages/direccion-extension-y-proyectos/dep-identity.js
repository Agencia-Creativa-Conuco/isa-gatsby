import React from 'react';
import styled from "@emotion/styled";
import { Container, Section, Row, Col,mq} from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import colors from '../../components/styles/colors';


const DEPIdentity = ({ page }) =>{

    return (
        <BGSection fluid spaceNone bg={colors.gray.light}>
            <Container>
                <Row alignCenter>

                {/* { projects_identity_group.map((item, index) =>{
                            
                            return(
                                <Col size={12} sizeMD={6} sizeLG={4} key={index} mxAuto> 
                                    <DivTitle color={colors.white}>
                                        <Title color={colors.blue.dark} bg={colors.white}>{ item.group_title }</Title>
                                        <Copy>{ item.group_copy }</Copy>
                                    </DivTitle>
                                </Col>

                                     )    
                                })}    */}
                     </Row>
            </Container>
        </BGSection>
    );

}

export default DEPIdentity;




const BGSection = styled(Section)`
    background: ${props => props.bg};
    padding-top: 5%;
    padding-bottom: 10%;
`;

const DivTitle = styled.div`
    max-width: 29rem;
    margin-left: auto;
    margin-right: auto;
`;


const Title = styled.p`
font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: ${props => props.color};
    background: ${props => props.bg};
    border-radius: 70px;
    padding:5%;
    transform: translate(-2rem);
`;

const Copy = styled.p``;

