import React, { useState } from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import {AdmissionRequisiteIcon} from "../../../components/icons";
import {h2} from "../../../components/styles/tipography";
import {Spring, animated} from "@react-spring/web";
import colors from "../../../components/styles/colors";
import useCareers from "../../../hooks/useCareers";
import useRequirementsCategories from '../../../hooks/useRequirementsCategories';

const AdmissionInfo = ({ page }) =>{
    
    //Obtiene los datos de los Careeras
    const careers = useCareers();

    const categories = useRequirementsCategories();

    const grades = careers.filter((career)=>{
        return !career.parent && career.type === "grade";
    });

    const [view, setView] = useState(0);

    return grades.length ?(
        <Section spaceNone>
            <Container fluid>
                <Row>

                    <Col 
                        size={12} 
                        sizeMD={4} 
                        sizeLG={4} 
                        order={1}
                        orderMD={2}
                        noGutterns 
                        css={css`background-color:${colors.secondary.light};`}
                        >
                        <Navigation>
                            <Row alignSMItems="flex-end">
                                <Col size={12} sizeSM={6} sizeMD={12} orderMD={2}>
                                    <Icon color={colors.secondary.dark}>
                                        <AdmissionRequisiteIcon/>
                                    </Icon>
                                </Col>
                                <Col>
                                    {
                                        grades.map((grade,index)=>{

                                            const isActive = view === index;

                                            const {
                                                title,
                                                id
                                            } = grade;

                                            return (
                                                <Item 
                                                    key={id}
                                                    color={isActive?"white":colors.secondary.dark}
                                                    onClick={() => setView(index)}
                                                    {...{isActive}}
                                                >
                                                    <ItemName>{title}</ItemName>
                                                </Item>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>
                        </Navigation>
                    </Col>

                    <Col 
                     size={12}
                     sizeMD={7}
                     sizeLG={7}
                     order={2}
                     orderMD={1}
                     noGutterns 
                     css={css`background-color:${colors.secondary.lighter};`}>
                         <Displayer>
                            {
                                grades.map((grade,index)=>{

                                    const {
                                        requirements = [],
                                    } = grade;

                                    const isActive = view === index;

                                    return (
                                    <Spring
                                        key={index} 
                                        reset={ isActive}
                                        from={{ opacity: 0}}
                                        to={[
                                        { opacity: 1},
                                        ]}
                                    >
                                    {
                                        styles =>(
                                            <animated.div style={styles}>
                                                <DisplayerSection key={index} hidden={view !== index}>
                                                    <DisplayerSectionTitle color={colors.secondary.dark}>Requisitos de {grade.title}</DisplayerSectionTitle>
                                                    
                                                    <Groups>
                                                    {
                                                        categories.map((group,index)=>{

                                                            const {
                                                                id, 
                                                                name
                                                            } = group;

                                                            const catRequirements = requirements.filter( item => {
                                                                return item.category.map( category => category.id ).includes(id);
                                                            })

                                                            return catRequirements.length? (
                                                                <Group key={id} color={colors.secondary.dark}>
                                                                    <GroupName>{name}</GroupName>
                                                                    <Requirements>
                                                                    {
                                                                        catRequirements.map((item, index)=>{
                                                                            const {requirement} = item;
                                                                            return (
                                                                                <Requirement key={index} color={colors.secondary.dark}>{requirement}</Requirement>
                                                                            );
                                                                        })
                                                                    }
                                                                    </Requirements>
                                                                </Group>
                                                            ): null
                                                        })
                                                    }
                                                    </Groups>
                                                    
                                                </DisplayerSection>
                                            </animated.div>
                                        )
                                    }
                                    </Spring>
                                    )
                                })
                            }
                         </Displayer>
                    </Col>

                </Row>
            </Container>
        </Section>
    ):null;

}

export default AdmissionInfo;

const Navigation = styled.ul`
    margin: 0 auto;
    padding: 10%;
    ${mq.sm}{
        padding: 5%;
    }
    ${mq.md}{
        padding: 3rem;
    }
`;

const Item = styled.li`
    ${({color="green", isActive})=>css`
        ${h2}
        cursor: pointer;
        font-weight: bold;
        text-align: right;
        text-transform: uppercase;
        list-style: none;
        color: ${color};
        margin: 0;
        margin-bottom: 0rem;
        padding: .5rem 0;
        transition: all 0.25s ease-in-out;
        ${isActive?css`
            transform-origin: 100% 0%;
            transform: scale(1.2);
        `:css``}
    `}
`;

const ItemName = styled.span`
    display: block;
`;

const Displayer = styled.div``;

const DisplayerSection = styled.div`
    margin: 0;
    text-align: right;
    padding: 10%;
    ${mq.sm}{
        padding: 5%;
    }
    ${mq.md}{
        padding: 3rem;
    }
`;

const DisplayerSectionTitle = styled.h3`
    ${({color="red"})=>css`
        ${h2}
        color: ${color};
        text-transform: uppercase;
        font-weight: 900;
        margin-top: 0;
    `}
`;

const Groups = styled.ul``;

const Group = styled.li`
    ${({color="green"})=>css`
        color: ${color};
        list-style: none;
    `}
`;

const GroupName = styled.h3`
    text-transform: uppercase;
    font-weight: 600;
    color: inherit;
`;

const Requirements = styled.ul``;

const Requirement = styled.li`
    ${({color="green"})=>css`
        color: ${color};
        list-style: none;
    `}
`;

const Icon = styled.div`
    ${({color="green"})=>css`
        color: ${color};
        max-width: 30rem;
        margin: 2rem auto;
    `}
`;