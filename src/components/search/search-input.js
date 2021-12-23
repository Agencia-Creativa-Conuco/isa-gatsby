import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { CloseIcon } from '../icons'
import ScreenReaderText from '../styles/screen-reader'
import useFocusTrap from '../hooks/use-trap-focus'
import useFocusEffect from '../hooks/use-focus-effect'
import SearchForm from './input'

import { mq } from '../layout/index'
import colors from '../styles/colors'

const SearchInput = ({
  isSearchModalOpen,
  toggleSearchModal,
  setResultsSearch,
  isMobileMenuOpen,
}) => {
  const closeSearchModal = () => {
    toggleSearchModal(false)
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      toggleSearchModal(false)
    }
  }, [isMobileMenuOpen, toggleSearchModal])

  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef()
  const containerRef = useRef()

  useFocusEffect(inputRef, isSearchModalOpen)
  useFocusTrap(containerRef, isSearchModalOpen)

  return (
    <>
      <ModalOverlay
        role="presentation"
        data-open={isSearchModalOpen}
        onClick={closeSearchModal}
      />
      <ModalInner
        role="dialog"
        aria-modal="true"
        active={isSearchModalOpen}
        onClick={(event) => {
          // prevent clicks within the content from propagating to the ModalOverlay
          event.stopPropagation()
        }}
      >
        <SectionInner ref={containerRef}>
          {/* Input */}
          <SearchForm {...{ setResultsSearch }} />

          <CloseButton onClick={closeSearchModal} colors={colors}>
            <ScreenReaderText>Cerrar búsqueda</ScreenReaderText>
            <CloseIcon />
          </CloseButton>
        </SectionInner>
      </ModalInner>
    </>
  )
}

export default SearchInput

const ModalOverlay = styled.div``

const ModalInner = styled.div`
  ${({ active }) => css`
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.08);
    position: absolute;
    right: 1.5rem;
    left: 1.5rem;
    transition: all 0.25s ease-in-out;
    background: #fff;
    border-radius: 5rem;
    cursor: default;
    ${active
      ? css`
          top: 0.25rem;
          opacity: 1;
          height: auto;
        `
      : css`
          top: -2rem;
          opacity: 0;
          visibility: hidden;
        `}
  `}
`

const SectionInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 110rem;
  width: calc(100% - 4rem);
  display: flex;
  justify-content: space-between;
  max-width: 168rem;

  ${mq.md} {
    width: calc(100% - 8rem);
  }
`

const CloseButton = styled.button`
  ${({ colors }) => css`
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: inherit;
    padding: 0;
    text-transform: none;
    color: ${colors ? colors.gray.dark : '#555552'};
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    margin-right: -2.5rem;
    padding: 0 2.5rem;

    &:hover {
      cursor: pointer;
      svg {
        transform: scale(1.2);
      }
    }

    svg {
      height: 1.2rem;
      width: 1.2rem;
      fill: currentColor;
      ${mq.md} {
        height: 1.2rem;
        width: 1.2rem;
      }
    }
  `}
`
