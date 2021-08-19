import React,{useState} from "react";
import Cta from "./cta";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Section, Row, Col, mq} from "./layout/index";
import {h5} from "./styles/tipography";
import colors from './styles/colors';
import { CloseIcon } from "./icons";
import FeaturedMedia from "./featured-media";



const ModalCard = ({props}) =>{



    const [close, setOPen] = useState(true);
     const  OpenMOdal =()=>{
         setOPen(!close)
         console.log("Open");
     }

      const obj ={
        content: `Lorem ipsum dolor sit amet consectetur adipiscing, elit mus himenaeos taciti eget ac, quisque fringilla ridiculus quis tempor.Suspendisse mattis placerat gravida primis sagittis bibendum dis nascetur libero. `
    }

    return(
        <>
        <Modal hidden={close}>
        <ModalContainer>
                    <CloseButton  onClick={OpenMOdal} colors={colors}>
                        <CloseIcon/>
                    </CloseButton>

               {props?.map((item,index)=>{
                   const {
                       title,
                       featuredImage
                   } = item;
                return(                    
                        <Row>
                            <Col order={2} orderMD={1}>
                                <ModalHeader> {title}</ModalHeader>
                                <ModalBody> {obj.content}</ModalBody>
                                <StyledCTA >Descargar</StyledCTA>
                            </Col>

                            {featuredImage?(
                        <Col size={12} sizeMD={5} order={1} orderMD={2}>
                                <Media>
                                  <Image  media={featuredImage} />
                               </Media>
                           </Col>
                    ):null 
                    } 
                        </Row>
                       )
                })
            }     
        </ModalContainer>
        </Modal>
             <Option onClick={OpenMOdal} >Ver</Option>
        </>
        )
    }
    
    
export default ModalCard;
    
    
const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 5; 
    `;

const ModalContainer = styled.div`
    max-width: 660px;
    position: relative;
    background: white;
    top: 30vh;
    border-radius: 15px;
    padding:2rem 3rem;
    margin: 0rem 2rem;
    ${mq.md}{
        margin: 0 auto;
    }
`;

const CloseButton = styled.button`
  ${({ colors }) => css`
    background: none;
    border: none;
    box-shadow: none;
    position: absolute;
    color: ${colors ? colors.gray.dark : "#555552"};
    left: 90%;
    top: 1.5rem;
    z-index:6;
    &:hover {
      svg {
        transform: scale(1.3);
      }
    }
    ${mq.md} {
        left: 94%;
      }
    svg {
      height: 1.5rem;
      transition: transform 0.15s ease-in-out;
      fill: currentColor;

        height: 2.5rem;
        width: 2rem;
    }
  `}
`;


const ModalHeader = styled.h2``;

const ModalBody = styled.div`
    margin: 0 auto;
`;

const StyledCTA = styled(Cta)`
    margin-top: 2rem;

`;

const Option = styled.h3`
&:hover {
        font-size: 3rem;
        cursor: pointer;
    }

`;

const Media = styled.div`
    display: grid;
    `

const Image = styled(FeaturedMedia)`
    padding-top: 3rem ;

`;





