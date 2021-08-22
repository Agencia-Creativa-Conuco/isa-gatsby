import React from 'react'
import styled from "@emotion/styled";
import { css } from '@emotion/react';
import { CloseIcon } from "./icons";
import { Row, Col, Container} from "./layout/index";
import colors from './styles/colors';
import { Global } from '@emotion/react';


const ModalCard = ( {isOpen, closeModal, title="Title default", children} ) => {


    //Detiene el enevto del padre
    const handlEeventFather =(e)=> e.stopPropagation();

    return(
        <Card display={isOpen ? "grid":"none"} onClick={closeModal} >
          { isOpen &&
            <Global styles={{ body: { overflowY: "hidden" } }} />
          }
            <CardModal onClick={handlEeventFather}>
              <Container>
                <CloseButton onClick={closeModal} colors={colors}>
                         <CloseIcon/>
                </CloseButton>
                <Row>
                  <Col>
                    {children ? children: <h2>{title}</h2>}
                  </Col>
                </Row>
              </Container>
            </CardModal>
        </Card>
    )
        
}


export default ModalCard;

const Card = styled.div`
  ${ ({display}) => css`
    background-color: rgba(0,0,0, .80);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
    display: ${display};
    justify-content: center;
    align-items: center;

    `}
`;

const CardModal = styled.div`
    position: relative;
    max-width: 660px;
    background: white;
    padding:2rem 3rem;
    border-radius: 5px;
`;

const CloseButton = styled.button`
  ${({ colors }) => css`
    background: none;
    border: none;
    box-shadow: none;
    position: absolute;
    color: ${colors ? colors.gray.dark : "#555552"};
    right: -2rem;
    top: -1rem;
    z-index:6;
    &:hover {
      svg {
        transform: scale(1.3);
      }
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
