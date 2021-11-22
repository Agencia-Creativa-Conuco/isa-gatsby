import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DownloadIcon } from "./icons";
import colors from "./styles/colors";
import useModal from "./hooks/useModal";
import CardInfo from "./card"
import FeaturedMedia from "./featured-media";
import { mq } from "./layout/index";

const ResourceCard = ({
    state, actions, libraries, 
    title, to, icon, color=state.theme.colors.primary.dark,
    item
}) => {

    const {
        openModal, 
        ModalUI
    } = useModal();

    return (
        <>
            <Card onClick={openModal}>
                <CardMedia>
                    <Media>
                        <FeaturedMedia media={item.imagenPortada} height="100%" fit="contain" position="0% 0%"/>
                    </Media>
                </CardMedia>
                <CardBody>
                    <ResourceName color={color}>{title}</ResourceName>
                </CardBody>
                {/* <Icon bgColor={icon?"transparent":colors.gray.light} hasIcon={false}>
                    <DownloadIcon />
                </Icon>        */}
            </Card>
            {/* Aca se les pasan los datos que se mostrararan en el modal */}
            <ModalUI size="80rem">
                <CardInfo item={item}/>
            </ModalUI> 
        </>
    )
}

export default ResourceCard;

const Card = styled.div`
    /* padding: 1.5rem; */
    width: 50rem;
    max-width: 27rem;
    box-shadow: 0rem 2.5rem 4rem rgb(0 0 0 / 10%);
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 50px;
    display: flex;
    overflow: hidden;
    ${mq.sm}{
        max-width: 32rem;
    }
    &:hover{
        cursor: pointer;
        svg{
            opacity: 0.5;          
        }
    }
`;


const CardMedia = styled.div`
    height: 12rem;
    flex: 1;
    padding: 1.5rem;
    background-color: rgba( 0 0 0 / 10%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Media = styled.div`
    width: 90%;
    height: 90%;
`;

const CardBody = styled.div`
    flex: 2;
    display: flex;
    text-align: left;
    overflow: hidden;
    border: 1.5rem solid white;
    height: 12rem;
    overflow: hidden;
`;

const ResourceName = styled.span`
    ${({color="blue"}) => css`
        font-weight: bold;
        color: ${color};
        margin: 0;
        text-transform: uppercase;
        line-height: 1.3;
        font-size: 1.4rem;
        display: -webkit-box;
    `}
`;

const Icon = styled.div`
    width: 3rem;
    margin: 0 auto;
    svg{
        width: 200%;
        opacity: 0.25;
        transition: opacity 0.2s ease-in-out;
    }
`;
