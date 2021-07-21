import { connect, styled, css } from "frontity";
import { Container, Section, Row, Col, mq} from "../../layout/index";
import FeaturedMedia from "../../featured-media";
import { useState } from "react";
import {AdmissionRequisiteIcon} from "../../icons";
import {h1,h2} from "../../styles/tipography";
import {Spring, animated} from "@react-spring/web";

const AdmissionInfo = ({ state }) =>{
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    
    const {
        meta_box,
        careers = []
    } = page;

    const { 
        admission_requirements_show
    } = meta_box;

    const grades = careers.filter((career)=>{
        return career.parent == 0;
    });

    const {colors} = state.theme;
    const [view, setView] = useState(0);

    const handlerView = (value) => setView(value); 

    return grades.length && parseInt(admission_requirements_show)?(
        <Section spaceNone>
            <Container fluid notFluidXL sizeXL="192rem">
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

                                            const isActive = view == index;

                                            return (
                                                <Item 
                                                    key={index}
                                                    color={isActive?"white":colors.secondary.dark}
                                                    onClick={() => setView(index)}
                                                    {...{isActive}}
                                                >
                                                    <ItemName>{grade.title.rendered}</ItemName>
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
                                        career_requirements = [],
                                    } = grade.meta_box;

                                    const isActive = view == index;

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
                                                <DisplayerSection key={index} hidden={view != index}>
                                                    <DisplayerSectionTitle color={colors.secondary.dark}>Requisitos de {grade.title.rendered}</DisplayerSectionTitle>
                                                    <Requirements>
                                                    {
                                                        career_requirements.map((requirement, index)=>{
                                                            const {name} = requirement;
                                                            return (
                                                                <Requirement key={index} color={colors.secondary.dark}>{name}</Requirement>
                                                            );
                                                        })
                                                    }
                                                    </Requirements>
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

export default connect(AdmissionInfo);

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