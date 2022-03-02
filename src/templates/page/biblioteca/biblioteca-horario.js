import React from 'react';
import styled from "@emotion/styled";
import colors from "../../../components/styles/colors";
import {   ClockIcon  } from "../../../components/icons";
import { container, mq } from "../../../components/layout/new";


const BibliotecaHorario = () =>{

const data =[
    
    {
    title: "HORARIO DE SERVICIOS",
    area:"Circulación y préstamos de colecciones general, de referencia y reserva",
    horaryTitle: "LUNES A VIERNES",
    horarySchedule:"8:00 a.m. - 12:00 p.m. / 1:00 p.m. - 10:00 p.m.",
    OtherScheduleTitle: "SÁBADO",
    OtherSchedule:"8:00 a.m. - 12:00 p.m. / 1:00 p.m. - 5:00 p.m.",

    
},
{
    title: "SERVICIO DE SALA DIGITAL",
    area:"Uso de computadora con acceso a internet, escáneres e impresión de documentos",
    horaryTitle: "LUNES A VIERNES",
    horarySchedule:"8:00 a.m. - 12:00 p.m. / 1:00 p.m. - 5:00 p.m.",
    OtherScheduleTitle: "SÁBADO",
    OtherSchedule:"8:00 a.m. - 12:00 p.m.",
},
{
    title: "EQUIPOS AUDIOVISUALES",
    area:"Circulación y préstamos de equipos audiovisuales",
    horaryTitle: "LUNES A VIERNES",
    horarySchedule:"8:00 a.m. - 12:00 p.m. / 1:00 p.m. - 5:00 p.m.",
    OtherScheduleTitle: "SÁBADO",
    OtherSchedule:"8:00 a.m. - 12:00 p.m.",
},


]


    return (
        <Section fluid id="section_3">
                <Icon>
                        <ClockIcon />
                </Icon>   
            <Container>         
                      <SectionTitle>Horario de servicios</SectionTitle>
                        <WrapperContainer>
                            {data.map((data, index)=>{
                                const {
                                    title,
                                    area,
                                    horaryScheduleTitle,
                                    horarySchedule,
                                    OtherScheduleTitle,
                                    OtherSchedule

                                } = data;
                                return (
                                  <ScheduleContainer key={index}>
                                    <Service>{title}</Service>
                                    <Area>{area}</Area>

                                    <ScheduleTitle>
                                      {horaryScheduleTitle}
                                    </ScheduleTitle>
                                    <Schedule>{horarySchedule}</Schedule>

                                    <ScheduleTitle>
                                      {OtherScheduleTitle}
                                    </ScheduleTitle>
                                    <Schedule>{OtherSchedule}</Schedule>
                                  </ScheduleContainer>
                                );
                            })}
                            </WrapperContainer>



            </ Container>
        </Section>
    );

}


export default BibliotecaHorario;


const Section = styled.section`
${container}
  margin-bottom: 5.5rem;
    margin-top: 5.5rem;
  ${mq.md}{
    margin-bottom: 9.6rem;
  margin-top: 9.6rem;
  }

  &::before{
    content: '';
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.blue.dark};
}
`;

const Container = styled.div`
${container}

    box-shadow: 0 .7rem  0.7rem  rgba(0,0,0,0.15);
    border-radius: 15px;
    padding-bottom: 4rem;
    position: relative;
    margin-bottom: 50px;
    background: white;


`; 


const WrapperContainer = styled.div`

/* display: grid;
grid-template-columns: 100%; */

justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;


const SectionTitle = styled.h2`
    margin-top: 7rem;
    margin-bottom: 2rem;
    text-align: center;
`;

const Icon = styled.div`
        position: relative;
        display: block;
        margin: 0 auto;
        bottom: -5rem;
        width: 100px;
        background-color: ${colors.cta.base};
        padding-bottom: 100px;
        border-radius: 50%;
        z-index: 2;
        svg{
            fill: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.5);
        }
`;

const ScheduleContainer = styled.div`
    text-align: center;
    margin-bottom: 4rem;
    width: 100%;

${mq.md} {
  width: 50%;
}
${mq.lg} {
  width: 33.3333%;
}
`;

const Service = styled.p`
    margin-bottom: 0;
    color: green;
    font-weight: bold;
`;

const Area = styled.p``;

const ScheduleTitle = styled.p`
    margin-bottom: 0;
`;

const Schedule = styled.p``;