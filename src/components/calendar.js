import React from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import colors from "./styles/colors";
import moment from "moment";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import useModal from "./hooks/useModal";
import usePeriodosAdmision from "../hooks/usePeriodosAdmision";
import Link from "./link";
import container from "./layout/new/container";
import mq from "./layout/new/mq";



const Event = ({ event }) => {
  const { openModal, ModalUI } = useModal();

  const examDates = event.fechasExamenesAdmision.map((date) =>
    moment(date.fechaExamen, "", "es").toDate()
  );

  const modifiers = {
    highlighted: examDates,
  };

  console.log(new Date())
  const MONTHS = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const WEEKDAYS_LONG = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const WEEKDAYS_SHORT = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];



  return (
    <>
      <EventCard size="auto" noGutters onClick={openModal}>
        {/* <EventDay color={colors.secondary.base}>{day}</EventDay> */}
        <EventName>{event.nombre}</EventName>
      </EventCard>
      <ModalUI title={event.nombre}>
        <EventTitle>Fechas para tomar el examen de admisión</EventTitle>

        <DayPicker
          modifiers={modifiers}
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
        />
        <ColStyles>
          <BoxContact>
            <span>Haz tu cita en: </span>
            <Link to={"mailto:admisiones@isa.edu.do"} target="_blank">
              admisiones@isa.edu.do
            </Link>
          </BoxContact>
          <BoxContact>
            <span>Whatsapp: </span>
            <Link to={"https://wa.me/8295209209"} target="_blank">
              829-520-9209
            </Link>
          </BoxContact>
        </ColStyles>
      </ModalUI>
    </>
  );
};

// var isEmpty = (".DayPicker-Month").html() === "";
// var getid= document.getElementById("identificador_del_div").hasChildNodes();

const Calendar = ({
  title = "FECHAS PARA TOMAR EL EXAMEN DE ADMISIÓN POMA",
  noEventsTitle,
}) => {
  //Obtiene los datos de los Eventos
  const events = usePeriodosAdmision();


  //Ordena los eventos de menor a mayor
  const eventList = events
    //Ordena por el campo orden de wordpress
    .sort((a, b) => a.order - b.order);

  // Load the post, but only if the data is ready.
  return noEventsTitle || eventList.length ? (
    <Section>
      <Global styles={birthdayStyle} />

      <Container>
        {title ? <Title>{title}</Title> : null}
        {eventList.length ? (
          <EventList>
            {eventList.map((event, index) => {
              console.log(event)
              return <Event key={index} event={event} />;
            })}
          </EventList>
        ) : (
          <NoEventsText>{noEventsTitle}</NoEventsText>
        )}
      </Container>
    </Section>
  ) : null;
};

export default Calendar;

const Section = styled.section`
margin-bottom: 9.6rem;
margin-top: 9.6rem;

`;  

const Container = styled.div`
  ${container}
`;

const Title = styled.h2`
  text-align: center;
`;

const EventList = styled.div`
  max-width: fit-content;
  margin: 0 auto;
  ${mq.md} {
    border-radius: 10rem;
    padding: 1.5rem;
    overflow: hidden;
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);
    background-color: white;
    columns: 32rem 3;
    column-rule-style: solid;
    column-rule-color: lightgray;
    column-rule-width: 0.25rem;
  }
`;

const EventCard = styled.div`
  cursor: pointer;
  background-color: white;
  padding: 0.5rem 1.5rem;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20rem;
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);
  margin: 2rem;
  border-radius: 10rem;
  ${mq.md} {
    /* border-left: 0.2rem solid lightgray; */
    box-shadow: initial;
    margin: initial;
    border-radius: initial;
  }
  &:first-of-type {
    /* border: initial; */
  }
`;

const EventName = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const NoEventsText = styled.p`
  text-align: center;
`;

const EventTitle = styled.h3`
  color: ${colors.primary.dark};
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 2rem;
  margin-top: 0;
`;

const birthdayStyle = css`
  .DayPicker {
    width: 100%;
    background-color: ${colors.gray.light};
  }
  .DayPicker-wrapper {
    width: 100%;
  }
  .DayPicker-Months {
    width: 100%;
  }
  .DayPicker-Month {
    width: 100%;
  }
  .DayPicker-Day {
    font-size: 1.7rem;
    border-radius: 0  !important;
  }
  .DayPicker-Day.DayPicker-Day--highlighted.DayPicker-Day {
    color: white;
      background-color:${colors.primary.base};
      position: relative;

 
  }

  .DayPicker-Day.DayPicker-Day--highlighted.DayPicker-Day--outside {
      background-color: inherit;
  }
  .DayPicker-Caption {
    font-weight: 400;
    text-align: center;
    font-size: 2rem;
    div {
      font-size: inherit;
      font-weight: inherit;
    }
  }
`;

const BoxContact = styled.div`
  & > a {
    text-decoration: none;
    color: black;
  }
  & > span {
    font-weight: bold;
    color: #001f56;
  }
`;

const ColStyles = styled.div`
  margin-top: 2rem;
`;
