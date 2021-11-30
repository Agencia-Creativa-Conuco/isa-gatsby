import styled from '@emotion/styled';
import React from 'react'
import TeamSlider from '../../../components/team-slider';

const DIPTeam = ({investigadores}) => {


const interno = [];
const externo = [];

investigadores.map((item) => {
  //GUARDA EQUIPO DE INVESTIGACION INTERNO
  item.equipoInvestigacion === "interno" && interno.push(item);

  //GUARDA EQUIPO DE INVESTIGACION EXTERNO
  item.equipoInvestigacion === "externo" && externo.push(item);

  return 0;
});

    return (
        <Container>
            <TeamSlider investigadores={interno} title="EQUIPO DE INVESTIGACIÓN INTERNO"/>
            <TeamSlider investigadores={externo} title="EQUIPO DE INVESTIGACIÓN EXTERNO" />
        </Container>
    )
}


export default DIPTeam;

const Container = styled.div``;
