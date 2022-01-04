import React from 'react'
import Layout from '../components/layout'
import ResultsHeader from '../components/search/results-header'
import ResultsBody from '../components/search/results-body'

const Search = (props) => {
  return (
    <Layout>
      <ResultsHeader {...props} />
      <ResultsBody {...props} />
    </Layout>
  )
}

export default Search
