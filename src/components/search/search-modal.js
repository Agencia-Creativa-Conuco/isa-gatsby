import React, { useRef } from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

import { CloseIcon } from "../icons";
import ScreenReaderText from "../styles/screen-reader";
import useFocusTrap from "../hooks/use-trap-focus";
import useFocusEffect from "../hooks/use-focus-effect";
import Button from "../styles/button";
import { useFlexSearch } from "react-use-flexsearch";
import { graphql, useStaticQuery } from "gatsby";

import { mq } from "../layout/index";
import colors from "../styles/colors";


const SearchModal = ({ isSearchModalOpen, toggleSearchModal, setResultsSearch }) => {
  
  const resultado = useStaticQuery(graphql`
    {
      localSearchPages {
        store
        index
      }
    }
  `);


    const {
        index: resultsIndex,
        store: resultsStore
    }  = resultado.localSearchPages;


  
  const { search } = window.location;    
  const query = new URLSearchParams(search).get('s');
  const resultados = useFlexSearch( query, resultsIndex, resultsStore );
  

  setResultsSearch(resultados);


  const closeSearchModal = () => {
    toggleSearchModal(false);
  };

  const { primary } = colors;

  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();
  const containerRef = useRef();

  useFocusEffect(inputRef, isSearchModalOpen);
  useFocusTrap(containerRef, isSearchModalOpen);

  // Format the query to remove trailing spaces and replace space with "+"
  // const formatQuery = (query) => query.trim().replace(" ", "+").toLowerCase();


  // console.log(inputRef )
  const handleSubmit = (event) => {

// Prevent page navigation
// event.preventDefault();

  // console.log("Entre");
//   // Get the input's value
//   const searchString = inputRef.current.value;

//   // If the typed search string is not empty
  //   // Better to trim write spaces as well
  //   if (searchString.trim().length > 0) {
  //     setQuery(searchString)
  //     // Let's go search for blogs that match the search string
  //     // actions.router.set(`/search/?s=${formatQuery(searchString)}`);

  //     // Scroll the page to the top
  //     window.scrollTo(0, 0);

  //     // Close the search modal
      // closeSearchModal();

      // return event.target.action = ``
  //   }
  };

  return (
    <>
      <ModalOverlay
        role="presentation"
        data-open={isSearchModalOpen}
        onClick={closeSearchModal}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          z-index: 2000;
        `}
      >
        {isSearchModalOpen ? (
          <>
            <Global
              styles={css`
                html {
                  overflow-y: hidden;
                }
              `}
            />

            <ModalInner
              role="dialog"
              aria-modal="true"
              onClick={(event) => {
                // prevent clicks within the content from propagating to the ModalOverlay
                event.stopPropagation();
              }}
            >
              <SectionInner ref={containerRef}>
                <SearchForm
                  role="search"
                  aria-label="Buscar:"
                  // onSubmit={handleSubmit}
                  method="get" 
                  onSubmit={handleSubmit}
                  action={`/search/?s=`}
                  >
                  <SearchInput
                    // ref={inputRef}
                    type="search"
                    defaultValue={query}
                    placeholder="Buscar:"
                    name="s"
                  />
                  <SearchButton bg={primary}>Search</SearchButton>
                </SearchForm>

                <CloseButton onClick={closeSearchModal} colors={colors}>
                  <ScreenReaderText>Cerrar búsqueda</ScreenReaderText>
                  <CloseIcon />
                </CloseButton>
              </SectionInner>
            </ModalInner>
          </>
        ) : null}
      </div>

      
    </>

  );
};

export default SearchModal;

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  display: none;
  opacity: 0;
  position: fixed;
  bottom: 0;
  left: -9999rem;
  top: 0;
  transition: opacity 0.2s linear, left 0s 0.2s linear;
  width: 100%;
  z-index: 999;

  &[data-open="true"] {
    display: block;
    opacity: 1;
    left: 0;
  }
`;

const ModalInner = styled.div`
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.08);
  transform: translateY(0);
  background: #fff;
  transition: transform 0.25s ease-in-out, box-shadow 0.1s 0.25s linear;
  cursor: default;
`;

const SectionInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 120rem;
  width: calc(100% - 4rem);
  display: flex;
  justify-content: space-between;
  max-width: 168rem;

  ${mq.md} {
    width: calc(100% - 8rem);
  }
`;

const SearchForm = styled.form`
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
`;

const SearchInput = styled.input`
  ${({ layout }) => css`
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
    appearance: none;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }

    ${mq.md} {
      border: none;
      font-size: 3.2rem;
      height: 8rem;
    }

    &:focus {
      outline: thin dotted;
      outline-offset: -4px;
    }
  `}
`;

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

    color: ${colors ? colors.gray.dark : "#555552"};
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    margin-right: -2.5rem;
    padding: 0 2.5rem;

    &:hover {
      svg {
        transform: scale(1.3);
      }
    }

    svg {
      height: 1.5rem;
      transition: transform 0.15s ease-in-out;
      width: 1.5rem;
      fill: currentColor;
      ${mq.md} {
        height: 2.5rem;
        width: 2.5rem;
      }
    }
  `}
`;

const SearchButton = styled(Button)`
  position: absolute;
  right: -9999rem;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 0 0.8rem 0.8rem;
  border-color: #dcd7ca;

  &:focus {
    right: 0;
  }
`;
