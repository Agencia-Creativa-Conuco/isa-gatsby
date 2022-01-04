import React from 'react'
import SearchForm from '../search/search-form'

const useSearch = () => {
  return {
    SearchForm: (props) => <SearchForm {...props} />,
  }
}

export default useSearch
