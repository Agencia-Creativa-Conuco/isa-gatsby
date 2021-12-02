import React , {useEffect} from "react";
import { mq } from "../layout/index";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Input from "../styles/input";
import { SearchIcon } from "../icons";
import { BaseToggle } from "../navigation/nav-toggle";
import { useFlexSearch } from "react-use-flexsearch";
import { useQueryParam, StringParam } from "use-query-params";
import { graphql, useStaticQuery } from "gatsby";

const SearchForm = ({ isResults, setResultsSearch }) => {

  const resultado = useStaticQuery(graphql`
    {
      localSearchPages {
        store
        index
      }
    }
  `);

  const { index: resultsIndex, store: resultsStore } = resultado.localSearchPages;

  const [query] = useQueryParam("s", StringParam);

  const resultados = useFlexSearch(query, resultsIndex, resultsStore);

  useEffect( () => {
    setResultsSearch(resultados);
  }, [resultados, setResultsSearch]);

  // ComponentWillMount
  // ComponentWillUpdate
  // ComponentDidUpdate
  // ComponentDidMount

  return (
    <>
      <Form
        role="search"
        aria-label="Buscar:"
        method="get"
        action={`/search/?s=`}
        onSubmit={ () => { setResultsSearch(resultados) }}
      >
        <Input
          defaultValue={query}
          css={isResults ? inputResults : inputHeader}
          type="search"
          placeholder="Buscar:"
          name="s"
        />

        {isResults ? (
          <HeaderToggle>
            <BaseToggle>
              <Icon>
                <SearchIcon />
              </Icon>
            </BaseToggle>
          </HeaderToggle>
        ) : null}
      </Form>
    </>
  );
};

export default SearchForm;

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
`;

const HeaderToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 0;
  margin: 0 15px;
  position: relative;
  z-index: 5;
`;

const Icon = styled.div``;

const inputHeader = css`
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
  height: 3rem;
  appearance: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  ${mq.md} {
    border: none;
    height: 5rem;
  }

  &:focus {
    margin-left: 0.1rem;
    outline: thin dotted;
    outline-offset: -4px;
  }
`;

const inputResults = css`
  background: white;
  border-radius: 4rem;
  padding: 1rem 1.8rem;
  border: none;
`;
