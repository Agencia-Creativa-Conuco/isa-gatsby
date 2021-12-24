import React from 'react'
import styled from '@emotion/styled'
import { CloseIcon } from '../icons'
import ScreenReaderText from '../styles/screen-reader'
import SearchForm from './input'

import { mq } from '../layout/index'
import colors from '../styles/colors'

import { useTransition, animated, config } from '@react-spring/web'

const SearchInput = ({
  isSearchModalOpen,
  toggleSearchModal,
  setResultsSearch,
}) => {
  const closeSearchModal = () => {
    toggleSearchModal(false)
  }

  const transitions = useTransition(isSearchModalOpen, {
    from: { opacity: 0, top: -50 },
    enter: { opacity: 1, top: 1 },
    leave: { opacity: 0, top: -50 },
    reverse: isSearchModalOpen,
    delay: 0,
    config: config.wobbly,
  })

  return transitions((styles, item) =>
    item ? (
      <AWrapper style={styles}>
        <ModalOverlay
          role="presentation"
          data-open={isSearchModalOpen}
          onClick={closeSearchModal}
        />
        <ModalInner role="dialog" aria-modal="true">
          <SectionInner>
            {/* Input */}
            <SearchForm {...{ setResultsSearch }} />

            <CloseButton onClick={closeSearchModal}>
              <ScreenReaderText>Cerrar búsqueda</ScreenReaderText>
              <CloseIcon />
            </CloseButton>
          </SectionInner>
        </ModalInner>
      </AWrapper>
    ) : null,
  )
}

export default SearchInput

const AWrapper = styled(animated.div)`
  position: relative;
`

const ModalOverlay = styled.div``

const ModalInner = styled.div`
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
  background: #fff;
  border-radius: 5rem;
  cursor: default;
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
  background: none;
  border: none;
  box-shadow: none;
  border-radius: 0;
  font-size: inherit;
  font-weight: 400;
  letter-spacing: inherit;
  padding: 0;
  text-transform: none;
  color: ${colors.gray.dark || '#555552'};
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
`
