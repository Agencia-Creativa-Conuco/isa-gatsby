import React, { useEffect, useRef } from 'react'
import { mq } from '../layout/index'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Input from '../styles/input'
import { SearchIcon } from '../icons'
import { BaseToggle } from '../navigation/nav-toggle'
import { useQueryParam, StringParam } from 'use-query-params'
import { navigate } from 'gatsby'

const SearchForm = ({ searchButton = true }) => {
  const [query] = useQueryParam('s', StringParam)

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])

  return (
    <Form
      role="search"
      aria-label="Buscar:"
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/search/?s=${ref.current.value}`)
      }}
    >
      <Input
        defaultValue={query}
        css={inputStyles(searchButton)}
        type="search"
        placeholder="Buscar:"
        name="search"
        ref={ref}
      />

      {searchButton ? (
        <HeaderToggle>
          <BaseToggle>
            <Icon>
              <SearchIcon />
            </Icon>
          </BaseToggle>
        </HeaderToggle>
      ) : null}
    </Form>
  )
}

export default SearchForm

const Form = styled.form`
  margin: 0;
  position: relative;
  width: 100%;
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;

  ${mq.md} {
    position: relative;
    width: 100%;
  }
`

const HeaderToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 0;
  margin: 0 15px;
  position: relative;
  z-index: 5;
`

const Icon = styled.div``

const inputStyles = (searchButton) => css`
  background: none;
  border: none;
  border-radius: 0;
  color: inherit;
  display: block;
  font-size: 2rem;
  letter-spacing: -0.0277em;
  margin: 0 0 0 -2rem;
  max-width: calc(100% + 2rem);
  padding: 0 0 0 2rem;
  width: calc(100% + 2rem);
  height: 4rem;
  appearance: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  ${mq.md} {
    border: none;
    height: 4.5rem;
  }

  &:focus {
    outline: thin dotted;
    outline-offset: -4px;
  }
  ${searchButton
    ? css`
        background: white;
        border-radius: 4rem;
        padding: 1rem 1.8rem;
        border: none;
      `
    : css``}
`

// const inputResults = css`
//
// `
