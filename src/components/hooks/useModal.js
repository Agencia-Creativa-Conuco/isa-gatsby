import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CloseIcon } from "../../components/icons";
import { Row, Col, Container } from "../../components/layout/index";
import colors from "../../components/styles/colors";
import { Global } from "@emotion/react";
import { fadeIn, slideDown } from "../../components/styles/animations";

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const ModalUI = ({title, children}) => {
    return (
      <ModalWrapper data-open={isModalOpen} onClick={closeModal}>
        {isModalOpen && <Global styles={{ body: { overflowY: "hidden" } }} />}
        <CardModal
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CardWrapper>
            <Container>
              <Row>
                <Col>
                  <ModalHeader size={12} colors={colors}>
                    {title && <ModalTitle>{title}</ModalTitle>}
                    <CloseButton onClick={closeModal} colors={colors}>
                      <CloseIcon />
                    </CloseButton>
                  </ModalHeader>
                  <ModalBody>{children}</ModalBody>
                </Col>
              </Row>
            </Container>
          </CardWrapper>
        </CardModal>
      </ModalWrapper>
    );
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    ModalUI,
  };
};

export default useModal;

const ModalWrapper = styled.div`
  ${({ display }) => css`
    background: rgba(0, 0, 0, 0.5);
    display: none;
    opacity: 0;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    bottom: 0;
    top: 0;
    z-index: 20000;
    animation: ${fadeIn} 0.2s ease-out;

    &[data-open="true"] {
      display: flex;
      left: 0;
      opacity: 1;
      right: 0;
      transition: opacity 0.25s ease-out;
      align-items: baseline;
      justify-content: center;
    }
  `}
`;

const CardModal = styled.div`
  background: #fff;
  margin: 0 1rem;
  margin-top: 15vh;
  margin-bottom: 15vh;
  border-radius: 5px;
  animation: ${slideDown} 0.4s ease-out;
`;

const CardWrapper = styled.div`
  height: 100%;
  align-content: baseline;
`;

const ModalHeader = styled(Col)`
  ${({ colors }) => `
        background-color: ${colors.gray.lighter};
        align-self: baseline;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 70px;
        text-align: left;
        color: ${colors.green.base};
        font-weight: bold;
    `}
`;

const ModalTitle = styled.h4`
  margin: 0;
`;

const CloseButton = styled.button`
  ${({ colors }) => css`
    background: none;
    border: none;
    box-shadow: none;
    position: absolute;
    color: ${colors ? colors.gray.dark : "#555552"};
    right: 0rem;
    top: 1rem;
    z-index: 6;
    &:hover {
      cursor: pointer;
      svg {
        transform: scale(1.3);
      }
    }

    svg {
      height: 2rem;
      transition: transform 0.15s ease-in-out;
      fill: currentColor;

      height: 2.5rem;
      width: 2rem;
    }
  `}
`;

const ModalBody = styled(Col)`
  padding-top: 20px;
  padding-bottom: 20px;
`;
