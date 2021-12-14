import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import colors from './styles/colors'
import { ListIcon, CloseIcon } from './icons'
import { Global } from '@emotion/react'
import { fadeIn, slideUp } from './styles/animations'

const PageIndexes = ({ data = [] }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Wrapper data-open={isVisible} onClick={() => setIsVisible(!isVisible)}>
      {isVisible && <Global styles={{ body: { overflowY: 'hidden' } }} />}

      {isVisible ? (
        <Card>
          <ul style={{ margin: '1rem 2rem 0 0' }}>
            {data.map((item) => {
              return (
                <StylesLink href={item.id} key={item.id}>
                  <StylesLI>{item.name}</StylesLI>
                </StylesLink>
              )
            })}
          </ul>
          <CloseButton onClick={() => setIsVisible(!isVisible)} colors={colors}>
            <CloseIcon />
          </CloseButton>
        </Card>
      ) : (
        <ContainerArrow>
          <ListIcon />
        </ContainerArrow>
      )}
    </Wrapper>
  )
}

export default PageIndexes

const Wrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: baseline;
    align-items: end;
    justify-content: end;
    padding-bottom: 1rem;
    padding-right: 1rem;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 99;
    animation: ${fadeIn} 0.2s ease-out;

    &[data-open='true'] {
      background-color: rgba(0, 0, 0, 0.4);
      height: 100vh;
      left: 0;
      right: 0;
      transition: opacity 0.25s ease-out;
      z-index:2000;
    }
  `}
`

const ContainerArrow = styled.div`
  background: ${colors.primary.base};
  border-radius: 1rem;
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  color: white;
  padding: 0.8rem;

  svg {
    fill: white;
    margin: 0 auto;
  }
  :hover {
    cursor: pointer;
  }
`

const Card = styled.div`
  background: #fff;
  margin: 0 1rem;
  margin-top: 15vh;
  margin-bottom: 1vh;
  border-radius: 5px;
  animation: ${slideUp} 0.4s ease-out;
  width: auto;
  padding: 3rem 1.5rem;
  position: relative;
`

const CloseButton = styled.button`
  ${({ colors }) => css`
    background: none;
    border: none;
    box-shadow: none;
    position: absolute;
    color: ${colors ? colors.gray.dark : '#555552'};
    right: 0rem;
    top: 0rem;
    padding: 1rem;
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

      height: 2rem;
      width: 1.5rem;
    }
  `}
`

const StylesLink = styled.a`
  text-decoration: none;
`

const StylesLI = styled.li`
  list-style: none;
  background: aliceblue;
  padding: 0.5rem;
`
