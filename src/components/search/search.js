import React from "react";
import styled from "@emotion/styled";
import ResultsHeader from "./results-header";
import ResultsBody from "./results-body"

const SearchView = (props) =>{
  return (
      <Article>
        <ResultsHeader {...props} />
        <ResultsBody {...{props}}/>
      </Article>
  );
}


export default SearchView;


const Article = styled.article``;
