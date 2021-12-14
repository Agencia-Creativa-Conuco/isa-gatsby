import * as React from 'react'
import Layout from '../components/layout'
import usePages from '../hooks/usePages'
import FrontPage from '../templates/home/front-page'

// markup
const IndexPage = (props) => {
  const [page] = usePages().filter((page) => page.isFrontPage)

  const data = [
    {
      name: 'Ofertas y Periodo de Admision',
      id: '#section_1',
    },
    {
      name: 'Noticias Recientes',
      id: '#section_2',
    },
    {
      name: 'Proyectos de investigación',
      id: '#section_3',
    },
    {
      name: 'Estudia con nosotros',
      id: '#section_4',
    },
    {
      name: 'Contáctanos',
      id: '#section_5',
    },
  ]

  return (
    <Layout {...{ data }} {...props}>
      <FrontPage {...{ page }} />
    </Layout>
  )
}
export default IndexPage
