import React, {useState, useEffect} from "react";
import { connect, styled, css } from "frontity";
import { Container, Row, Col, Section} from "../../layout/index";
import Link from "../../link";

const DIPGeneral = ({ state }) =>{
    const data = state.source.get(state.router.link);
    
    const page = state.source[data.type][data.id];

    const {
        projects = [],
        faculties = [],
    } = page;
    
    const facultyList = faculties.filter((faculty)=>{
        const {meta_box} = faculty;
        const {projects_to_faculties_from} = meta_box;

        return projects_to_faculties_from.length;
    });

    //Se prepara la estructura en departamentos y projectos hijos;
    const departaments = projects.filter((item, index)=> item.parent == 0)
    .map((departament)=>{
        const project = Object.assign(departament,{
            projects:projects.filter((project)=>{

                const {
                    parent,
                    meta_box
                } = project;

                const {
                    project_type,
                } = meta_box;

                return parent == departament.id && project_type === "project_line";
            })
        })
        return project;
    })
    .filter((departament)=>departament.projects.length);

    const {colors} = state.theme;

    return data.isReady && facultyList.length?(
        <SSection 
            bgColor={colors.gray.light}
            spaceNone
        >
            <FacultyList as="ul">
            {
                facultyList.map((faculty,index)=>{
                    
                    const{title} = faculty;

                    return(
                        <Faculty key={index}>
                            <Container>
                                <Row>
                                    <Col>
                                        <FacultyName>{title.rendered}</FacultyName>
                                    </Col>
                                </Row>
                                <Row as="ul">
                                    <Col size={12}>
                                    {
                                        departaments.map((item, index)=>{
                                            
                                            const {
                                                title,
                                                link,
                                                projects = [],
                                            } = item;
                        
                                            return (
                                                <Departament key={index}>
                                                    
                                                    <Row>
                                                        <Col>
                                                            <Link to={link} noDecoration>
                                                                <DepartamentName>{title.rendered}</DepartamentName>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                    
                                                    <Row as="ul">
                                                        {
                                                            projects.map((item,index)=>{
                                                                
                                                                const {
                                                                    title,
                                                                    link = state.router.link
                                                                } = item;
                
                                                                return (
                                                                    <Col size={12} sizeMD={6} key={index}>
                                                                        <Project color={colors.gray.base} colorHover={colors.secondary.base}>
                                                                            <StyledLink to={link} noDecoration>
                                                                                <ProjectName>{title.rendered}</ProjectName>
                                                                            </StyledLink>
                                                                        </Project>
                                                                    </Col>
                                                                )
                                                            })
                                                        }
                                                    </Row>

                                                </Departament>
                                            )
                                        })
                                    }
                                    </Col>
                                </Row>
                            </Container>
                        </Faculty>
                    )
                })
            }
            </FacultyList>
        </SSection>
    ):null;

}

export default connect(DIPGeneral);

const SSection = styled(Section)`
    ${({bgColor="lightgray"})=>css`
        background-color: ${bgColor};
        overflow: hidden;
    `}
`;

const ContentContainer = styled(Container)`
    margin: 5rem auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;


const FacultyList = styled(Section)`
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    `;

const Faculty = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 4rem;
    `;

const FacultyName = styled.h3`
    margin-bottom: 0rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 2rem;
    border-bottom: .2rem solid;
`;

const Departament = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 4rem;
`;

const DepartamentName = styled.h2`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 900;
    text-transform: uppercase;
`;

const Project = styled.li`
    ${({color="gray", colorHover="darkblue"})=>css`
        list-style: none;
        padding: 0;
        margin: 0;
        color: ${color};
        transition: all 0.25s ease-in-out;
        position: relative;
        z-index: 1;
        &:hover{
            color: ${colorHover};
        }
    `}
`;

const ProjectName = styled.h4`
    margin: 0rem;
    font-weight: initial;
    text-transform: uppercase;
    color: inherit;
    padding: 1rem 0;
`;

const Dots = styled.ul`
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2rem;
`;

const Dot = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    button{
        margin: 0 !important;
        padding: 0 !important;
        width: 1.5rem !important;
        height: 1.5rem !important;
        border-radius: 50% !important;
        background-color: white !important;
        opacity: .5;
        &:before{
            content: none !important;
        }
        &:after{
            content: none;
        }
    }
    .slick-active{
        button{
            opacity: 1;
        }
    }
`;