import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col } from "../../../components/layout/index";
import Carousel from "react-slick";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Link from "../../../components/link";

const DIPGeneral = ({ page, projects, departaments, faculties, projectLines }) =>{

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [slider1, setSlider1] = useState([]);
    const [slider2, setSlider2] = useState([]);

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2]);

    // const departaments = projects.filter((item)=> !(item.parent > 0));


    return (
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
                            ref={slider => (setSlider1(slider))}
                        >
                        {
                            departaments.map((item, index)=>{
                                
                                const {
                                    featuredImage,
                                } = item;

                                return(
                                    <FeaturedMedia 
                                        key={index}
                                        media={featuredImage} 
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
                            ref={slider => (setSlider2(slider))}
                        >
                        {
                            departaments.map((departament, index)=>{
                                
                                const [faculty] = faculties.filter( faculty => departament.faculty.id === faculty.id );

                                const lines = projectLines.filter( line => departament.projectLines.map( item => item.id ).includes(line.id) );

                                return (
                                    <Departament key={index}>
                                        <ContentContainer css={css`width: 200%;`}>
                                            <Row>
                                                <Col size={12} sizeLG={6} zIndex="1">
                                                    {
                                                        faculty?(
                                                            <StyledLink to={faculty.uri}>
                                                                <FacultyName>{faculty.title}</FacultyName>
                                                            </StyledLink>
                                                        ):null
                                                    }
                                                    <DepartamentName>{departament.title}</DepartamentName>
                                                    <DepartamentProjects>
                                                        
                                                    {
                                                        lines.map((item,index)=>{
                                                            const {
                                                                title,
                                                            } = item;
                                                            return (
                                                                <Project key={index} color={colors.gray.base} colorHover={colors.secondary.base}>
                                                                    <StyledLink to={item.uri}>
                                                                        <ProjectName>{title}</ProjectName>
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
    );

}

export default DIPGeneral;

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