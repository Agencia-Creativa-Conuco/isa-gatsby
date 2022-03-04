import React from "react";
import styled from "@emotion/styled";
import {
  PhoneIcon,
  MailIcon,
  WhatsappIcon,
  ClockIcon,
  LocationIcon2,
} from "../components/icons";
import Link from "../components/link";
import colors from "./styles/colors";
import { container, mq } from "./layout/new";

const Contact = ({ data = {} }) => {
  const {
    title = "Contacto",

    telefonos = [],
    emails = [],
    whatsapp = [],
    horarios,
    direcciones,
  } = data;

  return telefonos?.length || emails?.length ? (
    <Section id="section_contact">
      <SSection>
        <Container>
          <Title>{title}</Title>

          {telefonos?.length ? (
            <ListItem>
              <Icon>
                <PhoneIcon />
              </Icon>
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
                    <Item key={index}>
                      <Phone>
                        <StyledLink to={`tel: ${telefono}`} target="_blank">
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
            </ListItem>
          ) : null}
          {whatsapp?.length ? (
            <ListItem>
              <Icon>
                <WhatsappIcon />
              </Icon>

              <List>
                {whatsapp.map((item, index) => {
                  const { telefono } = item;

                  return (
                    <Item key={index}>
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
            </ListItem>
          ) : null}
          {horarios?.length ? (
            <ListItem>
              <Icon>
                <ClockIcon />
              </Icon>

              <List>
                {horarios.map((item, index) => {
                  return (
                    <Item key={index}>
                      <ItemFont>{`${item.dias}: ${item.horas}`} </ItemFont>
                    </Item>
                  );
                })}
              </List>
            </ListItem>
          ) : null}

          {emails?.length ? (
            <ListItem>
              <Icon>
                <MailIcon />
              </Icon>

              <List>
                {emails.map((item, index) => {
                  const { email } = item;

                  return (
                    <Item key={index}>
                      <ItemFont>
                        <StyledLink to={`mailto: ${email}`} target="_blank">
                          {email}
                        </StyledLink>
                      </ItemFont>
                    </Item>
                  );
                })}
              </List>
            </ListItem>
          ) : null}
          {direcciones?.length ? (
            <ListItem>
              <Icon>
                <LocationIcon2 />
              </Icon>

              <List>
                {direcciones.map((item, index) => {
                  const { direccion } = item;

                  return (
                    <Item key={index}>
                      <ItemFont>
                        <StyledLink
                          to={`https://goo.gl/maps/G3r1CimBgviSPRwQ9`}
                          target="_blank"
                        >
                          {direccion}
                        </StyledLink>
                      </ItemFont>
                    </Item>
                  );
                })}
              </List>
            </ListItem>
          ) : null}
        </Container>
      </SSection>
    </Section>
  ) : null;
};

export default Contact;

const Section = styled.section`
  background-color: ${colors.gray.light};
  overflow: hidden;
`;

const SSection = styled.div`
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
  }
`;

const Container = styled.div`
  ${container}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h2`
  color: ${colors.text.base};
  text-transform: uppercase;
  font-weight: initial;
  margin-bottom: 4rem;
  margin-top: 0;
`;

const ListItem = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Icon = styled.div`
  max-width: 3rem;
  width: 100%;
  color: ${colors.primary.base};
  svg {
    fill: ${colors.primary.base};
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  color: ${colors.text.base};
  margin-bottom: 1rem;
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
