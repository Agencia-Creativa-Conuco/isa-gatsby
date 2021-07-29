import * as React from "react"
import Layout from "../components/layout";
import useInicio from "../hooks/useInicio";
import usePages from "../hooks/usePages";
import FrontPage from "../templates/home/front-page";

// markup
const IndexPage = () => {

  //Obtiene los datos de la página de inicio
  const [frontPage] = useInicio();

  const [page] = usePages().filter( page => page.id === frontPage.id );

  return (
      <Layout>
        <FrontPage {...{page}} />
      </Layout>
  )
}
export default IndexPage
