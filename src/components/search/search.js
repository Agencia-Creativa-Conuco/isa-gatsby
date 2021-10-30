import React from "react";
import styled from "@emotion/styled";
import ResultsHeader from "./results-header";
import ResultsBody from "./results-body"

import useRecursos from '../../hooks/useRecursos'

const SearchView = (props) =>{

  const resources = useRecursos();
  

  return (
      <Article>
        <ResultsHeader {...props} />
        <ResultsBody {...{props,resources }}/>
      </Article>
);

}


export default SearchView;


const Article = styled.article``;
