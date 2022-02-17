import { graphql, useStaticQuery } from 'gatsby';

const usePages = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpPage {
              nodes {
                id
                __typename
                title
                content
                date
                link
                uri
                slug
                isFrontPage
                isPostsPage
                styles
                featuredImage {
                  node {
                    ...ImageFragment
                  }
                }

                pageSettings{
                  pageCustom
                }

                #posts {
                #  categories {
                #    id
                #  }
                #}

                contacto {
                  horarios {
                    dias
                    horas
                  }
                  telefonos {
                    telefono
                    extensiones {
                      extension
                    }
                  }
                  whatsapp {
                    telefono
                  }
                  emails {
                    email
                  }
                  direcciones {
                    direccion
                  }
                }
        
                datosRecursos {
                  relacion {
                    ... on WpRecurso {
                      id
                    }
                  }
                }
                
              }
            }
          }
        `
    );
    
    return resultado.allWpPage.nodes.map( page => ({
        id: page.id,
        title: page.title,
        content: page.content,
        date: page.date,
        slug: page.slug,
        uri: page.uri,
        link: page.link,
        isFrontPage: page.isFrontPage,
        isPostsPage: page.isPostsPage,
        featuredImage: page?.featuredImage?.node?.localFile,
        type: page.__typename,
        styles: page?.styles,
        settings: page.pageSettings,
        posts: {
          categories: page?.posts?.categories || [],
        },
        recursos: page?.datosRecursos?.relacion,
        contacto: page.contacto,

    }));
}
 
export default usePages;