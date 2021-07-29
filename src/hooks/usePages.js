import { graphql, useStaticQuery } from 'gatsby';

const usePages = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpPage {
              nodes {
                id
                title
                content
                date
                link
                uri
                slug
                isFrontPage
                isPostsPage
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1920) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
                
                home {
                  cover {
                    copy
                    cta {
                      title
                      url
                      target
                    }
                  }
                  ctaSection {
                    title
                    copy
                    cta {
                      target
                      title
                      url
                    }
                    image {
                      localFile {
                        publicURL
                        childImageSharp {
                          fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  }
                  form {
                    title
                    image {
                      localFile {
                        publicURL
                        childImageSharp {
                          fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  }
                }

                about {
                  cover {
                    copy
                    cta {
                      target
                      title
                      url
                    }
                  }
                  
                  history {
                    content
                    title
                    year
                    image {
                      localFile {
                        publicURL
                        childImageSharp {
                          fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  }
        
                  perfil {
                    name
                    jobtitle
                    content
                    photo {
                      localFile {
                        publicURL
                        childImageSharp {
                          fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  }
                  
                  tabs {
                    content
                    title
                  }
        
                  campus {
                    title
                    images {
                      id
                      localFile {
                        publicURL
                        childImageSharp {
                          fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  }
        
                }
        
                events {
                  categories {
                    __typename
                    id
                    name
                    slug
                    link
                    uri
                  }
                }
                investigation{
                  coverInvestigation{
                    copy
                  }
                }
        
                resources {
                  resourceRelationship {
                    ... on WpResource {
                      id
                      title
                      featuredImage {
                        node {
                          localFile {
                            publicURL
                            childImageSharp {
                              fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                            }
                          }
                        }
                      }
                      resource {
                        type
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
        home: page.home,
        about: {
          cover: page.about.cover,
          history: page.about.history || [],
          perfil: page.about.perfil,
          tabs: page.about.tabs || [],
          campus: page.about.campus,
        },
        investigation:{
          cover: page.investigation.coverInvestigation
        },
        events: {
          categories: page?.events?.categories || []
        },
        resources: page.resources,
    }));
}
 
export default usePages;