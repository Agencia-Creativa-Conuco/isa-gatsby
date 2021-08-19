import React from "react";
import styled from "@emotion/styled";
import ResultsHeader from "./results-header";
import ResultsBody from "./results-body"

import useResources from '../../hooks/useResources'

const SearchView = (props) =>{

  const resources = useResources();

    return (
        <Article>
          <ResultsHeader/>
          <ResultsBody {...{props,resources }}/>
        </Article>
);

}


export default SearchView;


const Article = styled.article``;
