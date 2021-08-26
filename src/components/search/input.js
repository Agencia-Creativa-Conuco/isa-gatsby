import React from "react";
import { mq } from "../layout/index";
import { css } from '@emotion/react';
import styled from "@emotion/styled";
import Input from "../styles/input";
import { SearchIcon } from "../icons";
import { BaseToggle  } from "../navigation/nav-toggle";


 const InputResults = ({valor, isResults} )=>{

     return( 
            <>
             <SearchForm
                  role="search"
                  aria-label="Buscar:"
                  method="get" 
                  action={`/search/?s=`}
                  >
            <Input
                defaultValue={valor}
                css={ isResults? inputResults: inputHeader}
                type="search"
                placeholder="Buscar:"
                name="s"
            />

            {isResults ?(
                <HeaderToggle>
                    <BaseToggle>
                            <Icon>
                                <SearchIcon/>
                            </Icon>
                    </BaseToggle>
             </HeaderToggle>
                ):null
              }
              </SearchForm>
                
        </>

        )
}

export default InputResults



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
`;


const inputResults = css`
  background: white;
  border-radius: 4rem;
  padding: 1rem 1.8rem;
  border: none;
`;
