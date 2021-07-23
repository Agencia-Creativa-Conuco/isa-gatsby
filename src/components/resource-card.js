import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "./link";
import { DownloadIcon } from "./icons";
import { Row, Col } from "./layout/index";
import {h5} from "./styles/tipography";
import cta from "./styles/cta";
import FeaturedMedia from "./featured-media"
import colors from "./styles/colors";

const ResourceCard = ({
    state, actions, libraries, 
    title, to, icon, color=state.theme.colors.primary.dark
}) => {
    
    return (
        <Card>
            <DownloadLink href={to} download>
                <Row>
                    <Col>
                        <ResourceName color={color}>{title}</ResourceName>
                    </Col>
                </Row>
                <Row alignCenter>
                    <Col size="auto" mxAuto>
                        <Icon bgColor={icon?"transparent":colors.gray.light} hasIcon={icon?true:false}>
                        {
                            icon? (
                                <FeaturedMedia media={icon} />
                            ):(
                                <DownloadIcon />
                            )
                        }
                        </Icon>
                        <Button>Descargar</Button>
                    </Col>
                </Row>
            </DownloadLink>
        </Card>
    )
}

export default ResourceCard;

const Card = styled.div`
    max-width: 300px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,0.15);
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 50px;
    &:hover{
        svg{
            opacity: 0.5;
        }
    }
`;

const DownloadLink = styled.a`
    padding: 15px;
    display: block;
    text-decoration: none;
    color: inherit;
`;

const ResourceName = styled.span`
    ${({color="blue"}) => css`
        ${h5}
        display: block;
        text-align: center;
        font-weight: bold;
        color: ${color};
        margin: 0;
        margin-bottom: 1rem;
        text-transform: uppercase;
    `}
`;

const Icon = styled.div`
    ${({bgColor="lightgray", hasIcon=false})=>css`
        position: relative;
        display: block;
        margin: 0 auto;
        width: 70px;
        ${hasIcon?css`
            margin: 1rem auto;
        `:css`
            background-color: ${bgColor};
            padding-bottom: 70px;
            border-radius: 50%;
        `}
        svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.5);
            fill: black;
            opacity: 0.25;
            transition: opacity 0.2s ease-in-out;
        }
    `}
`;

const Button = styled.span`
    ${cta}
    margin-top: 1rem;
`;