import { graphql, useStaticQuery } from 'gatsby';

const useResources = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpResource {
              nodes {
                id
                __typename
                title
                date
                link
                uri
                slug
                resource {
                  description
                  file {
                    localFile {
                      publicURL
                    }
                  }
                }
                featuredImage {
                  node {
                    ...ImageFragment
                  }
                }
              }
            }
          }
        `
    );

    return resultado.allWpResource.nodes.map( resource => ({
        id: resource.id,
        title: resource.title,
        date: resource.date,
        slug: resource.slug,
        uri: resource.uri,
        link: resource.link,
        featuredImage: resource.featuredImage? resource.featuredImage.node.localFile : null,
        type: resource.__typename,
        resource: resource.resource
    }));
}
 
export default useResources;