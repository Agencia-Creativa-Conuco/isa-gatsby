import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { EyeIcon, DownArrowIcon } from "./icons";
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
            <Card>
                <CardMedia>
                    <Media>
                        <FeaturedMedia media={item.imagenPortada} height="100%" fit="contain" position="center center"/>
                    </Media>
                </CardMedia>
                <CardBody>
                    <ResourceName color={color}>{title}</ResourceName>
                    <ButtonBox>
                        <Link href={item.archivo} download>
                            <Button>
                                <DownArrowIcon />
                            </Button>
                        </Link>
                        <Button onClick={openModal}>
                            <EyeIcon />
                        </Button>
                    </ButtonBox>
                </CardBody>
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
    border: 1.5rem solid white;
    border-bottom: 5rem solid white;
    height: 12rem;
    position: relative;
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
        height: 100%;
        overflow: hidden;
    `}
`;

const ButtonBox = styled.div`
    position: absolute;
    bottom: -1rem;
    transform: translate(0, 100%);
    left: 0;
`;

const Button = styled.button`
    background-color: ${colors.primary.base};
    color: white;
    height: 3rem;
    width: 3rem;
    padding: .5rem;
    margin-right: 1rem;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.75;
    transition: 0.2s all ease-in-out;
    &:hover{
        opacity: 1;
    }
    svg{
        color: inherit;
        fill: currentColor;
        width: 200%;
        transition: opacity 0.2s ease-in-out;
    }    
`;

const Link = styled.a`
    text-decoration: none;
`;

