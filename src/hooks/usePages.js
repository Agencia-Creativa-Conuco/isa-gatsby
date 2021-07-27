import React from 'react';
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

                about {
                  copy {
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
                    titulo
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
                  fieldGroupName
                  categories {
                    __typename
                    id
                    name
                    slug
                    link
                    uri
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
    
    return resultado.allWpPage.nodes.map( post => ({
        id: post.id,
        title: post.title,
        content: post.content,
        date: post.date,
        slug: post.slug,
        uri: post.uri,
        link: post.link,
        featuredImage: post?.featuredImage?.node?.localFile,
        about: post.about,
        events: {
          categories: post?.events?.categories || []
        },
        resources: post.resources,
    }));
}
 
export default usePages;