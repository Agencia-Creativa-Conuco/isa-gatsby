import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DownloadIcon } from "./icons";
import { Row, Col  } from "./layout/index";
// import FeaturedMedia from "./featured-media"
import colors from "./styles/colors";
import useModal from "./hooks/useModal";
import CardInfo from "./card"

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
                <Div >
                    <Row>
                        <Col>
                            <ResourceName color={color}>{title}</ResourceName>
                        </Col>
                    </Row>
                    <Row alignCenter>
                        <Col size="auto" mxAuto>
                        </Col>
                    </Row>
                </Div>                                              
                <Icon bgColor={icon?"transparent":colors.gray.light} hasIcon={false}>
                {/* {
                    icon? (
                        <FeaturedMedia media={icon} />
                    ):( */}
                        <DownloadIcon />
                    {/* )
                } */}
                </Icon>       
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
    width: 300px;
    height: 11rem;
    padding: 1rem;
    box-shadow: 0rem 2.5rem 4rem rgb(0 0 0 / 6%);
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 50px;
    padding-bottom: 5rem;
    &:hover{
        cursor: pointer;
        svg{
            opacity: 0.5;          
        }
    }
`;

const Div = styled.div`
    padding: 15px;
    display: block;
    &:hover{
      cursor: pointer;
    }
`;

const ResourceName = styled.span`
    ${({color="blue"}) => css`
        display: block;
        text-align: center;
        font-weight: bold;
        color: ${color};
        margin: 0;
        text-transform: uppercase;
        line-height: 1.2;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    `}
`;

const Icon = styled.div`
    ${({bgColor="lightgray", hasIcon=false})=>css`
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        margin: 0 auto;
        width: 70px;
        svg{
            position: relative;
            width: 2.5rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.5);
            fill: black;
            opacity: 0.25;
            transition: opacity 0.2s ease-in-out;
        }
    `}
`;
