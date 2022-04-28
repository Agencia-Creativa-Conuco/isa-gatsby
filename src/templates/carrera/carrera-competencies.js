import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { lighten, darken } from 'polished'
import colors from '../../components/styles/colors'
import { container, mq } from '../../components/layout/new/'

const CarreraCompetencias = ({ carrera, facultad }) => {
  const [active, setActive] = useState(0)

  const { tabs = [] } = carrera

  const facultyColor = facultad?.color || colors.primary.base

  return tabs.length ? (
    <Section>
      <div
        css={displayerSectionStyles({
          bgColor: colors.gray.light,
          bgDecoBig: darken(0.15, facultyColor),
          bgDecoSmall: lighten(0.15, facultyColor),
        })}
      >
        <Container>
          <Navigation>
            {tabs.map((item, index) => {
              const { titulo } = item

              const isActive = index === active

              return (
                <NanUl key={index}>
                  <NavItem>
                    <Tab
                      disabled={isActive}
                      color={colors.text.base}
                      activeColor={darken(0.15, facultyColor)}
                      activeBgColor={lighten(0.52, facultyColor)}
                      onClick={(e) => {
                        setActive(index)
                      }}
                    >
                      {titulo}
                    </Tab>
                  </NavItem>
                </NanUl>
              )
            })}
          </Navigation>

          <Displayer>
            {tabs.map((item, index) => {
              const { contenido } = item

              const isActive = index === active

              return (
                <Content key={index} hidden={!isActive}>
                  <Description
                    dangerouslySetInnerHTML={{ __html: contenido }}
                  />
                </Content>
              )
            })}
          </Displayer>
        </Container>
      </div>
    </Section>
  ) : null
}

export default CarreraCompetencias

const Section = styled.section`
    margin-bottom: 5.5rem;
    margin-top: 5.5rem;
${mq.md}{
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
}
}
`

const displayerSectionStyles = ({
  bgColor = '#F0F0F0',
  bgDecoBig = 'green',
  bgDecoSmall = 'lightgreen',
}) => css`
  background-color: ${bgColor};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10%;
    padding-bottom: 10%;
    background-color: ${bgDecoBig};
    transform: translate(25%, 50%);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5%;
    padding-bottom: 5%;
    background-color: ${bgDecoSmall};
    transform: translate(-100%, 50%);
    opacity: 0.5;
  }
`

const Container = styled.div`
  ${container}
`
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
  padding: 0;
  margin: 0 auto;
  margin-top: -2rem;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  background-color: white;
  border-radius: 1.5rem;
  overflow: hidden;
`

const NavItem = styled.li`
  list-style: none;
  margin: 0;
`

const Tab = styled.button`
  ${({
    color = 'darkgray',
    activeColor = 'green',
    activeBgColor = 'lightgreen',
  }) => css`
    text-transform: uppercase;
    padding: 1.5rem;
    display: block;
    max-width: initial;
    width: 100%;
    text-align: center;
    background-color: white;
    cursor: pointer;
    color: ${color};
    transition: all 0.25s ease-in-out;
    &[disabled] {
      color: ${activeColor};
      font-weight: bold;
      background-color: ${activeBgColor};
    }
  `}
`

const Displayer = styled.div``

const Content = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 6rem 0;
  padding-bottom: 10rem;
  position: relative;
  z-index: 2;
  ${mq.md} {
    box-sizing: content-box;
    padding: 4rem 4rem;
    padding-bottom: 10rem;
  }
`

// const Title = styled.h2`
//     ${({color="green"})=>css`
//         color: ${color};
//         text-transform: uppercase;
//         margin-bottom: 4rem;
//         text-align: center;
//     `}
// `;

const Description = styled.div`
  margin-bottom: 3rem;
`

const NanUl = styled.ul`
  margin: 0;
  padding: 0;
`
