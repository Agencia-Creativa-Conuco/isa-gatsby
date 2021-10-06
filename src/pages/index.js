import * as React from "react"
import Layout from "../components/layout";
import usePages from "../hooks/usePages";
import FrontPage from "../templates/home/front-page";
import usePosts from "../hooks/usePosts";
import useEvents from "../hooks/useEvents";

// markup
const IndexPage = (props) => {

  const [page] = usePages().filter( page => page.isFrontPage );

  //Obtiene los datos de los Posts de las categorías seleccionadas
  const posts = usePosts().filter( post => post.categories.filter( category => page.posts.categories.map( item => item.id ).includes(category.id) ).length );

  //Obtiene los datos de los Eventos
  const events = useEvents().filter( event => event.categories.filter( category => page.events.categories.map( item => item.id ).includes( category.id ) ).length );
  
  return (
      <Layout {...props}>
        <FrontPage {...{page, posts, events}} />
      </Layout>
  )
}
export default IndexPage
