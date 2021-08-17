
import React from "react";
import styled from "@emotion/styled";
import Input from "../styles/input";
import { SearchIcon } from "../icons";
import { BaseToggle  } from "../navigation/nav-toggle";

// import {}

const ReslutsSearchForm = () => {


    const { search } = window.location;    
    const query = new URLSearchParams(search).get('s');


  return (
    <Form 
    role="search" 
    aria-label="404 not found" 
    // onSubmit={handleSubmit}
    method="get" 
    action={`/search/?s=`}
    
    
    >
      <Label>
        <SearchInput
          type="search"
          defaultValue={query}
          placeholder="Buscar: No funciono de momento"
        />
      </Label>
      
      <HeaderToggle>
        <BaseToggle>
         <Icon>
           <SearchIcon/>
         </Icon>
        </BaseToggle>
    </HeaderToggle>

    </Form>
  
  );
};

export default  ReslutsSearchForm ;

const Form = styled.form`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  background: white;
  border-radius: 4rem;
`;

const Label = styled.label`
  align-items: stretch;
  display: flex;
  font-size: inherit;
  margin: 0;
  width: 100%;
`;

const SearchInput = styled(Input)`
  background: white;
  border-radius: 4rem;
  padding: 1rem 1.8rem;
  border: none;
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