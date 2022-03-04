import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Section, Container, Row, Col, mq } from "../components/layout/index";
import {
  PhoneIcon,
  MailIcon,
  WhatsappIcon,
  ClockIcon,
  LocationIcon2,
} from "../components/icons";
import Link from "../components/link";
import colors from "./styles/colors";

const Contact = ({
  data = {},
  color = colors.primary.base,
  bgColor = colors.gray.light,
}) => {
  const {
    title = "Contacto",

    telefonos = [],
    emails = [],
    whatsapp = [],
    horarios,
    direcciones,
  } = data;

  return telefonos?.length || emails?.length ? (
    <MSection spaceNone bgColor={bgColor} id="section_contact">
      <SSection as="div">
        <Container>
          <Row>
            <Col size={12}>
              <Title color={colors.text.base}>{title}</Title>
            </Col>

            {telefonos?.length ? (
              <Col size={12}>
                <ListItem>
                  <Row>
                    <Col size="auto">
                      <Icon color={color}>
                        <PhoneIcon />
                      </Icon>
                    </Col>
                    <Col noLGutters>
                      <List>
                        {telefonos.map((item, index) => {
                          const { telefono, extensiones = [] } = item;

                          const extsFormated = extensiones?.length
                            ? extensiones.reduce((acc, cur, idx, src) => {
                                return (
                                  acc +
                                  (idx < src.length - 1
                                    ? cur.extension + ", "
                                    : cur.extension)
                                );
                              }, "")
                            : "";

                          return (
                            <Item key={index} color={colors.text.base}>
                              <Phone>
                                <StyledLink
                                  to={`tel: ${telefono}`}
                                  target="_blank"
                                >
                                  {telefono}
                                  {extensiones?.length > 0
                                    ? (extensiones?.length > 1
                                        ? `, Exts. `
                                        : ", Ext. ") + extsFormated
                                    : ""}{" "}
                                </StyledLink>
                              </Phone>
                            </Item>
                          );
                        })}
                      </List>
                    </Col>
                  </Row>
                </ListItem>
              </Col>
            ) : null}
            {whatsapp?.length ? (
              <Col size={12}>
                <ListItem>
                  <Row>
                    <Col size="auto">
                      <Icon color={color}>
                        <WhatsappIcon />
                      </Icon>
                    </Col>
                    <Col noLGutters>
                      <List>
                        {whatsapp.map((item, index) => {
                          const { telefono } = item;

                          return (
                            <Item key={index} color={colors.text.base}>
                              <Phone>
                                <StyledLink
                                  to={`https://wa.me/1${telefono?.replace(
                                    /[^0-9]/g,
                                    ""
                                  )}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {telefono}
                                </StyledLink>
                              </Phone>
                            </Item>
                          );
                        })}
                      </List>
                    </Col>
                  </Row>
                </ListItem>
              </Col>
            ) : null}
            {horarios?.length ? (
              <Col size={12}>
                <ListItem>
                  <Row>
                    <Col size="auto">
                      <Icon color={color}>
                        <ClockIcon />
                      </Icon>
                    </Col>
                    <Col noLGutters>
                      <List>
                        {horarios.map((item, index) => {
                          return (
                            <Item key={index} color={colors.text.base}>
                              <ItemFont>
                                {`${item.dias}: ${item.horas}`}{" "}
                              </ItemFont>
                            </Item>
                          );
                        })}
                      </List>
                    </Col>
                  </Row>
                </ListItem>
              </Col>
            ) : null}

            {emails?.length ? (
              <Col size={12}>
                <ListItem>
                  <Row>
                    <Col size="auto">
                      <Icon color={color}>
                        <MailIcon />
                      </Icon>
                    </Col>
                    <Col noLGutters>
                      <List>
                        {emails.map((item, index) => {
                          const { email } = item;

                          return (
                            <Item key={index} color={colors.text.base}>
                              <ItemFont>
                                <StyledLink
                                  to={`mailto: ${email}`}
                                  target="_blank"
                                >
                                  {email}
                                </StyledLink>
                              </ItemFont>
                            </Item>
                          );
                        })}
                      </List>
                    </Col>
                  </Row>
                </ListItem>
              </Col>
            ) : null}
            {direcciones?.length ? (
              <Col size={12}>
                <ListItem>
                  <Row>
                    <Col size="auto">
                      <Icon color={color}>
                        <LocationIcon2 />
                      </Icon>
                    </Col>
                    <Col noLGutters>
                      <List>
                        {direcciones.map((item, index) => {
                          const { direccion } = item;

                          return (
                            <Item key={index} color={colors.text.base}>
                              <ItemFont>
                                <StyledLink to={`https://goo.gl/maps/G3r1CimBgviSPRwQ9`} target="_blank">
                                  {direccion}
                                </StyledLink>
                              </ItemFont>
                            </Item>
                          );
                        })}
                      </List>
                    </Col>
                  </Row>
                </ListItem>
              </Col>
            ) : null}
          </Row>
        </Container>
      </SSection>
    </MSection>
  ) : null;
};

export default Contact;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MSection = styled(Section)`
  ${({ bgColor = "transparent" }) => css`
    background-color: ${bgColor};
    overflow: hidden;
  `}
`;

const SSection = styled(Section)``;

const Title = styled.h2`
  ${({ color = "darkblue" }) => css`
    color: ${color};
    text-transform: uppercase;
    font-weight: initial;
    margin-bottom: 4rem;
    margin-top: 0;
  `}
`;

const ListItem = styled.div``;

const Icon = styled.div`
  ${({ color = "darkblue" }) => css`
    max-width: 3rem;
    color: ${color};
    svg{
      fill:${color};
    }
  `}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  ${({ color = "darkblue" }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${color};
    margin-bottom: 1rem;
  `}
`;

const Phone = styled.div`
  font-weight: 900;
  font-size: 2rem;
  ${mq.md} {
    font-size: 3rem;
  }
`;


const ItemFont = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;
