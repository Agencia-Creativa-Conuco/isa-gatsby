import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Container, Row, Col, mq, Section} from "./layout/index";
import colors from "./styles/colors";
import moment from "moment";

const Calendar = ({ events = [], title="Fechas de admisión", noEventsTitle}) => {

    // Load the post, but only if the data is ready.
  return (noEventsTitle || events.length)? (
    <Section>
        <Container>
            {title ? (
                <Row>
                    <Col>
                        <Title>{title}</Title>
                    </Col>
                </Row>
            ):null}
            {events.length ? (
                <Row>
                    <Col size="auto" mxAuto>
                        <EventList>
                            <Row justifyContent="center">
                            {
                                events.map( (event, index) => {

                                    const {
                                        dueDate
                                    } = event;

                                    const date = new Date(moment(dueDate, "DD-MM-YYYY").format('yyyy-MM-DD'));
                                    const month = new Intl.DateTimeFormat('es', { month: 'long' }).format(date);
                                    const day = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(date);
            
                                    return (
                                        <EventCard key={index} size="auto" noGutters>
                                            <EventDay color={colors.secondary.base}>{day}</EventDay>
                                            <EventMonth>{month}</EventMonth>
                                        </EventCard>
                                    );
                                })
                            }
                            </Row>
                        </EventList>
                    </Col>
                </Row>
            ):(
                <Row>
                    <Col>
                        <NoEventsText>{noEventsTitle}</NoEventsText>
                    </Col>
                </Row>
            )}
        </Container>
    </Section>
  ) : null;
};

export default Calendar;

const Title = styled.h2`
    text-align: center;
`;

const EventList = styled.div`
    ${mq.md}{
        border-radius: 10rem;
        padding: 1.5rem;
        overflow: hidden;
        box-shadow: 0 2rem 2rem rgba(0,0,0,0.2);
        background-color: white;
    }
`;

const EventCard = styled(Col)`
    background-color: white;
    padding: .5rem 1.5rem;
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20rem;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.2);
    margin: 2rem;
    border-radius: 10rem;
    ${mq.md}{
        border-left: 0.2rem solid lightgray;
        box-shadow: initial;
        margin: initial;
        border-radius: initial;
    }
    &:first-of-type{
        border: initial;
    }
`;

const EventDay = styled.span`
    ${({color="green"})=>css`
        font-size: 35px;
        color: ${color};
        font-weight: 900;
        margin-right: .5rem;
    `}
`;

const EventMonth = styled.span`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

const NoEventsText = styled.p`
    text-align: center;
`;