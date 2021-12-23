import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

import globalStyles from '../components/styles/global-styles'
import FontFace from '../components/styles/font-faces'
import Header from './header'
import Footer from './footer'
import ResourcesList from './resourceslist'
import Contact from './contact'
import usePages from '../hooks/usePages'
import PageIndexes from './page-indexes'
import Seo from '../components/seo'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = (props) => {
  //Si obj no es pasado en props, utiliza page;
  const [page] = usePages().filter((page) => page.uri === props.path)

  const { children, obj = page, data } = props

  const [resultsSearch, setResultsSearch] = useState()

  const {
    wp: { generalSettings: settings },
  } = useStaticQuery(graphql`
    query MyQuery {
      wp {
        id
        generalSettings {
          dateFormat
          description
          email
          language
          startOfWeek
          timeFormat
          timezone
          title
          url
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{settings.title}</title>
        <meta name="description" content={settings.description} />

        <link
          rel="preload"
          href="//js.hs-scripts.com/20627890.js"
          as="script"
        ></link>
        <link
          rel="preload"
          href="https://code.jquery.com/jquery-3.6.0.min.js"
          as="script"
        ></link>

        {/* FONTS */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link> */}
        {/* Start of HubSpot Embed Code */}
      </Helmet>

      <Seo {...props} />

      <FontFace />

      <Global styles={globalStyles({ settings })} />

      <Header {...{ setResultsSearch }} />

      <Main>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...{ resultsSearch, setResultsSearch },
            })
          }
          return child
        })}
        {/* 
          Se muestran recursos relacionados con el tipo de dato 
            - Se excluye el tipo pensum para los objetos de tipo WpCarrera. Ya que los pensums se muestran de una forma distinta en las carreras
        */}
        <ResourcesList
          items={obj?.recursos || []}
          exclude={obj?.type === 'WpCarrera' ? ['pensum'] : []}
        />
        {/* Se muestra información de contacto relacionada con el tipo de dato */}
        <Contact data={obj?.contacto} />
        {data && <PageIndexes data={data} />}
      </Main>

      <Footer />
    </>
  )
}

export default Layout

const Main = styled.main`
  overflow: hidden;
`
