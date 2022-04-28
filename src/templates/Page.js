import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { css, Global } from '@emotion/react'

import FrontPage from './home/front-page'
import usePages from '../hooks/usePages'
import PageSingle from './page/page-single'

export const query = graphql`
  query($id: String!) {
    allWpPage(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`

// markup
const Post = ({ data, ...props }) => {
  const {
    allWpPage: { nodes: pages },
  } = data

  const [page] = usePages().filter((page) =>
    pages.map((item) => item.id).includes(page.id),
  )

  const { isFrontPage } = page

  const metaData = {
    title: page.title,
    description: page.excerpt,
  }

  return (
    <Layout {...props} {...metaData} obj={page}>
      <Global
        styles={css`
          ${page.styles}
        `}
      />
      {isFrontPage ? <FrontPage /> : <PageSingle {...{ page }} />}
    </Layout>
  )
}
export default Post
