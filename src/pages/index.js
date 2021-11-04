import * as React from "react"
import Layout from "../components/layout";
import usePages from "../hooks/usePages";
import FrontPage from "../templates/home/front-page";

// markup
const IndexPage = (props) => {

  const [page] = usePages().filter( page => page.isFrontPage );

  return (
      <Layout {...props}>
        <FrontPage {...{page}} />
      </Layout>
  )
}
export default IndexPage
