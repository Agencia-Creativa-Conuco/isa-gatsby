import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Section, Container, Row, Col, mq } from "../components/layout/index";
import {  PhoneIcon, MailIcon, WhatsappIcon  } from "../components/icons";
import Link from "../components/link";
import colors from "./styles/colors";

const Contact = ({ data = {}, color = "green", bgColor="transparent"}) => {

    const {
        title = "Contacto",
        phones = [],
        emails = [],
        whatsapp = [],
    } = data;

    return phones?.length || emails?.length?  
    (
        <MSection spaceNone bgColor={bgColor}>
            <SSection as="div">
                <Container>
                    <Row>
                        <Col size={12}>
                            <Title color={color}>{title}</Title>
                        </Col>
                        {
                            phones?.length?(
                                <Col size={12}>
                                    <PhoneList> 
                                        <Row>
                                            <Col size="auto">
                                                <Icon color={color}>
                                                    <PhoneIcon  /> 
                                                </Icon>
                                            </Col>
                                            <Col noLGutters>
                                                <List>
                                                {
                                                    phones.map((item, index)=>{

                                                        const {
                                                            phone, 
                                                            exts = []
                                                        } = item;

                                                        const extsFormated = exts?.length? exts.reduce(( acc, cur, idx, src ) => {
                                                            return acc + ((idx < src.length - 1) ? (cur.ext + ", ") : cur.ext);
                                                        }, "") : "";

                                                        return (
                                                            <Item key={index} color={color}>
                                                                <Phone>
                                                                    <StyledLink to={`tel: ${phone}`} target="_blank" >{ phone }{ exts?.length > 0? (exts?.length > 1? `, Exts. ` : ", Ext. " ) + extsFormated : ""} </StyledLink>
                                                                </Phone>
                                                            </Item>
                                                        )
                                                    })
                                                }
                                                </List>
                                            </Col>
                                        </Row> 
                                    </PhoneList> 
                                </Col>
                            ):null
                        }
                        {
                            whatsapp?.length?(
                                <Col size={12}>
                                    <PhoneList> 
                                        <Row>
                                            <Col size="auto">
                                                <Icon color={color}>
                                                    <WhatsappIcon  /> 
                                                </Icon>
                                            </Col>
                                            <Col noLGutters>
                                                <List>
                                                {
                                                    whatsapp.map((item, index)=>{

                                                        const {
                                                            phone, 
                                                        } = item;

                                                        return (
                                                            <Item key={index} color={color}>
                                                                <Phone>
                                                                    <StyledLink to={`https://wa.me/1${phone.replace(/[^0-9]/g,'')}`} target="_blank">{ phone }</StyledLink>
                                                                </Phone>
                                                            </Item>
                                                        )
                                                    })
                                                }
                                                </List>
                                            </Col>
                                        </Row> 
                                    </PhoneList> 
                                </Col>
                            ):null
                        }
                        {
                            emails?.length?(
                                <Col size={12}>
                                    <MailList> 
                                        <Row>
                                            <Col size="auto">
                                                <Icon color={color}>
                                                    <MailIcon /> 
                                                </Icon>
                                            </Col>
                                            <Col noLGutters>
                                                <List>
                                                {
                                                    emails.map((item, index)=>{

                                                        const {email} = item;

                                                        return (
                                                            <Item key={index} color={colors.text.base}>
                                                                <Email>
                                                                    <StyledLink to={`mailto: ${email}`} target="_blank" >{email}</StyledLink>
                                                                </Email>
                                                            </Item>
                                                        )
                                                    })
                                                }
                                                </List>
                                            </Col>
                                        </Row> 
                                    </MailList> 
                                </Col>
                            ):null
                        }
                    </Row>
                </Container>
            </SSection>
        </MSection>
    ):null
}

export default Contact;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const MSection = styled(Section)`
    ${({bgColor="transparent"})=>css`
        background-color: ${bgColor};
        overflow: hidden;
    `}
`;

const SSection = styled(Section)`
`;

const Title = styled.h2`
    ${({color="darkblue"})=>css`
        color: ${color};
        text-transform: uppercase;
        font-weight: initial;
        margin-bottom: 4rem;
        margin-top: 0;
    `}
`;

const PhoneList =  styled.div``;

const MailList =  styled.div``;

const Icon = styled.div`
    ${({color="darkblue"})=>css`
        max-width: 3rem;
        color: ${color};
    `}
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
`;

const Item = styled.li`
    ${({color="darkblue"})=>css`
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
    ${mq.md}{
        font-size: 3rem;
    }
`;

const Email = styled.p`
    font-weight: bold;
    font-size: 2rem;
`;