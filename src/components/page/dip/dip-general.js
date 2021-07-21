import React, {useState, useEffect} from "react";
import { connect, styled, css } from "frontity";
import { Container, Row, Col, Section} from "@osirispp/frontity-layout";
import Carousel from "react-slick";
import FeaturedMedia from "../../featured-media";
import Link from "../../link";

const DIPGeneral = ({ state }) =>{
    const data = state.source.get(state.router.link);
    
    const page = state.source[data.type][data.id];

    const {
        projects = [],
        faculties = [],
    } = page;

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    let slider1 = [];
    let slider2 = [];

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2]);

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

    return data.isReady?(
        <Section spaceNone>
            <Container fluid>
                <Row>
                    <Col 
                        noGutters 
                        size={12}
                        sizeLG={6}
                    >
                        <Carousel
                            arrows={false}
                            dots
                            appendDots={dots => <Dots>{dots.map((item,index)=>{
                                return <Dot key={index}>{item}</Dot>
                            })}</Dots>}
                            asNavFor={nav2}
                            ref={slider => (slider1 = slider)}
                        >
                        {
                            departaments.map((item, index)=>{
                                
                                const {
                                    featured_media,
                                } = item;

                                return(
                                    <FeaturedMedia 
                                        key={index}
                                        media={featured_media} 
                                        size="56.25%"
                                        bgColor
                                    />
                                )
                            })
                        }
                        </Carousel>
                    </Col>
                    <Col 
                        noGutters
                        guttersLG
                        size={12}
                        sizeLG={6}
                        css={
                            css`background-color:${colors.gray.light};`
                        }
                    >
                        <Carousel
                            arrows={false}
                            fade
                            asNavFor={nav1}
                            ref={slider => (slider2 = slider)}
                        >
                        {
                            departaments.map((item, index)=>{
                                
                                const {
                                    featured_media,
                                    title,
                                    link,
                                    projects = [],
                                    meta_box
                                } = item;

                                const {
                                    projects_to_faculties_to = []
                                } = meta_box;

                                const [faculty] = faculties.filter((item)=>{
                                    const [projectRelated] = projects_to_faculties_to;
                                    return item.id == projectRelated;
                                });

                                return (
                                    <Departament key={index}>
                                        <ContentContainer css={css`width: 200%;`}>
                                            <Row>
                                                <Col size={12} sizeLG={6} zIndex="1">
                                                    {
                                                        faculty?(
                                                            <FacultyName>{faculty.title.rendered}</FacultyName>
                                                        ):null
                                                    }
                                                    <Link to={link} noDecoration>
                                                        <DepartamentName>{title.rendered}</DepartamentName>
                                                    </Link>
                                                    <DepartamentProjects>
                                                    {
                                                        projects.map((item,index)=>{

                                                            const {
                                                                title,
                                                                link = state.router.link
                                                            } = item;

                                                            return (
                                                                <Project key={index} color={colors.gray.base} colorHover={colors.secondary.base}>
                                                                    <StyledLink to={link} noDecoration>
                                                                        <ProjectName>{title.rendered}</ProjectName>
                                                                    </StyledLink>
                                                                </Project>
                                                            )
                                                        })
                                                    }
                                                    </DepartamentProjects>
                                                </Col>
                                            </Row>
                                        </ContentContainer>
                                    </Departament>
                                )
                            })
                        }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Section>
    ):null;

}

export default connect(DIPGeneral);

const ContentContainer = styled(Container)`
    margin: 5rem auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Departament = styled.div``;

const FacultyName = styled.h3`
    margin-bottom: 0rem;
    font-weight: 300;
    text-transform: uppercase;
`;

const DepartamentName = styled.h2`
    margin-top: 0;
    margin-bottom: 4rem;
    font-weight: 900;
    text-transform: uppercase;
`;

const DepartamentProjects = styled.ul`
    /* padding: 0;
    margin: 0; */
`;

const Project = styled.li`
    ${({color="gray", colorHover="darkblue"})=>css`
        /* list-style: none; */
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