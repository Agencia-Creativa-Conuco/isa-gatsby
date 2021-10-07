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
                

                events {
                  eventCategories {
                    __typename
                    id
                    name
                    slug
                    link
                    uri
                  }
                }

                posts {
                  categories {
                    id
                  }
                }

                contact {
                  phones {
                    phone
                    exts {
                      ext
                    }
                  }
                  whatsapp {
                    phone
                  }
                  emails {
                    email
                  }
                }
        
                resources {
                  resourceRelationship {
                    ... on WpResource {
                      id
                      title
                      featuredImage {
                        node {
                          ...ImageFragment
                        }
                      }
                      resource {
                        type
                        description
                        file {
                          id
                          localFile {
                            id
                            publicURL
                          }
                        }
                      }
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
        styles: page.styles,
        settings: page.pageSettings,
        events: {
          categories: page?.events?.eventCategories || [],
        },
        posts: {
          categories: page?.posts?.categories || [],
        },
        resources: page.resources,
        contact: page.contact,

    }));
}
 
export default usePages;