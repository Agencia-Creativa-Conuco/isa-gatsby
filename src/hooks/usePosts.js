import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpPost {
              nodes {
                id
                __typename
                title
                content
                excerpt
                date
                link
                uri
                slug
                featuredImage {
                  node {
                    ...ImageFragment
                  }
                }
                author {
                  node {
                    id
                    name
                    uri
                    slug
                  }
                }
                categories {
                  nodes {
                    id
                    name
                    slug
                    link
                    uri
                  }
                }
                tags {
                  nodes {
                    id
                    name
                    slug
                    link
                    uri
                  }
                }

                datosPublicacion{
                  tipo
                  archivo {
                    localFile {
                      publicURL
                    }
                  }
                  datosDelEvento {
                    fechaInicio
                    fechaFin
                    modalidad
                    lugar
                  }
                }
                #postData {
                #  type
                #  file {
                #    localFile {
                #      publicURL
                #    }
                #  }
                #  eventData{
                #    startDate
                #    endDate
                #    modalidad
                #    place
                #  }
                #}

              }
            }
          }
        `
    );
    
    return resultado.allWpPost.nodes.map( post => ({
        id: post.id,
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        date: post.date,
        author: post.author,
        categories: post.categories.nodes,
        tags: post.tags.nodes,
        slug: post.slug,
        uri: post.uri,
        link: post.link,
        featuredImage: post.featuredImage? post.featuredImage?.node?.localFile : null,
        type: post.__typename,
        tipoPublicacion: post?.datosPublicacion?.tipo,
        archivo: post?.datosPublicacion?.archivo?.localFile?.publicURL,
        evento: post?.datosPublicacion?.datosDelEvento,
    }));
}
 
export default usePosts;