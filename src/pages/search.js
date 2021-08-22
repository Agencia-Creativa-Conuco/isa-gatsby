import React from "react";
import Layout from "../components/layout";
import SearchView from "../components/search/search";

const Search = (props) =>{

    return(
        <Layout>
            <SearchView {...props} />
        </Layout>
    )

}

export default Search;
