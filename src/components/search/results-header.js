import React from 'react'
import styled from '@emotion/styled'
import { Container, Section, Row, Col } from '../layout/index'
import colors from '../styles/colors'
// import SearchForm from './search-form'
import useSearch from '../hooks/useSearch'

const ResultsHeader = (props) => {
  const { SearchForm } = useSearch()

  return (
    <Section spaceNone>
      <Background />
      <Container>
        <Row>
          <Col size={10} sizeMD={7}>
            <Header>
              <Label>
                <SearchForm isResults={true} {...props} />
              </Label>
            </Header>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default ResultsHeader

const Header = styled.div`
  margin-top: -6rem;
`

const Background = styled.div`
  width: 100%;
  height: 19rem;
  position: relative;
  top: 0;
  background: ${colors.gray.light};
  &::before {
    content: '';
    position: absolute;
    bottom: -2rem;
    right: -4rem;
    background: ${colors.primary.dark};
    clip-path: circle(50% at 100% 50%);
    padding: 9rem;
  }
`

const Label = styled.label`
  align-items: stretch;
  display: flex;
  font-size: inherit;
  margin: 0;
  width: 100%;
`
