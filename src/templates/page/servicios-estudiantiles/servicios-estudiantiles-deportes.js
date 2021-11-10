import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "../../../components/layout/index";
import FeaturedMedia from "../../../components/featured-media";
import Carousel from "react-slick";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import {h4} from "../../../components/styles/tipography"

const ServiciosEstudiantilesDeportes = () =>{

    const images = useFiles();

    const  
        title = "Unidad de Deporte", 
        content = `
            <p>La unidad de Deporte gestiona profesionalmente los programas de actividad física y deportiva para los estudiantes, con el objetivo de fomentar y mantener en ellos la importancia de aquellos aspectos que tengan que ver con su desarrollo y disciplina física. Esta unidad coordina la formación de equipos, entrenamientos y participación del estudiantado en los principales eventos deportivos universitarios e interuniversitarios que se desarrollan en el país.</p>
        `,
        anotherTitle ="DISCIPLINAS DESARROLLADAS PARA AMBOS GÉNEROS",
        sports = [
            {
                name: "Baloncesto Masculino",
                image: images['servicios-estudiantiles'].baloncesto,
            },
            {
                name: "Voleibol",
                image: images['servicios-estudiantiles'].voleibol,
            },
            {
                name: "Futbol",
                image: images['servicios-estudiantiles'].futbol,
            },
            {
                name: "Atletismo",
                image: images['servicios-estudiantiles'].atletismo,
            },
            {
                name: "Béisbol",
                image: images['servicios-estudiantiles'].beisbol,
            },
            {
                name: "Ajedrez",
                image: images['servicios-estudiantiles'].ajedrez,
            },
        ],
        cta = null

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [slider1, setSlider1] = useState([]);
    const [slider2, setSlider2] = useState([]);

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])

    return (
        <Section spaceNone>
            <Container>
                <Row>
                    <Col 
                        size={12} 
                        sizeMD={7} 
                        zIndex={2} 
                        noGutters
                        orderMD={2}
                    >
                        <Carousel
                            asNavFor={nav2}
                            pauseOnHover
                            ref={slider => (setSlider1(slider))}
                        >
                        {
                            sports? sports.map((item,index)=>{
                                return(
                                    <Logo
                                        key={index}
                                        media={item.image}
                                        size="56.25%"
                                        bgColor
                                    />
                                )
                            }): null
                        }
                        </Carousel>
                        <Carousel
                            autoplay
                            asNavFor={nav1}
                            ref={slider => (setSlider2(slider))}
                            slidesToShow={3}
                            pauseOnHover
                            centerMode={true}
                        >
                        {
                            sports? sports.map((item,index)=>{
                                return(
                                    <Dot key={index} onClick={e => nav2.slickGoTo(index)} >
                                        <Logo
                                            media={item.image}
                                            size="56.25%"
                                            bgColor
                                        />
                                    </Dot>
                                )
                            }):null
                        }
                        </Carousel>
                    </Col>
                    <ContentCol 
                        bgColor={colors.primary.light}
                        orderMD={1}
                    >
                        <DivTitle color={colors.primary.dark}>
                            <SectionTitle>{title}</SectionTitle>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                            <AnotherTitle>{anotherTitle}</AnotherTitle>
                            <Container>
                                <Row>
                                {
                                    sports? sports.map((item, index)=>{
                                        return(
                                            <Col size={12} sizeSM={6} key={index}>
                                                <Sport>{item.name}</Sport>
                                            </Col>
                                        )
                                    }) : null   
                                }
                                </Row>
                            </Container>
                            {
                                cta?(
                                    <Cta to={cta.url} target={cta.target}>{cta.title}</Cta>
                                ):null
                            }
                        </DivTitle>
                    </ContentCol>
                </Row>
            </Container>
        </Section>
    );

}

export default ServiciosEstudiantilesDeportes;

const ContentCol = styled(Col)`
    ${({bgColor="lightblue"})=>css`
        z-index: 1;
        position: relative;
        padding-bottom: 4rem;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${bgColor};
            opacity: 0.3;
            z-index: -1;
            transform-origin: 50% 100%;
            ${mq.md}{
                transform: scale(1.2, 1.7);
            }
        }
    `}
`;

const Dot = styled.div`
    padding: .5rem;
`;

const Logo = styled(FeaturedMedia)``;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;
const DivTitle = styled.div``;

// const CardMin = styled.div`
//     margin-top: 4rem;
// `;

// const MinLogo = styled(FeaturedMedia)`
// `;

const Sport = styled.p`
    font-weight: bold;
    margin-bottom: .2rem;
`;

const AnotherTitle = styled.h3`
    ${h4}
    font-weight: 700;
`;