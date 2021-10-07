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
                
                studentServices {
                  coverStudentServices {
                    copy
                  }
                  actividadesExtracurriculares {
                    title
                    copy
                    cta {
                      ...CtaFragment
                    }
                    image {
                      ...ImageFragment
                    }
                  }
                  orientacion {
                    title
                    content
                    cta {
                      ...CtaFragment
                    }
                    image {
                      ...ImageFragment
                    }
                  }
                  desarrollo {
                    title
                    content
                    cta {
                      ...CtaFragment
                    }
                    image {
                      ...ImageFragment
                    }
                  }
                  alojamiento {
                    title
                    content
                    cta {
                      ...CtaFragment
                    }
                    image {
                      ...ImageFragment
                    }
                  }
                  enfermeria {
                    title
                    content
                    cta {
                      ...CtaFragment
                    }
                    image {
                      ...ImageFragment
                    }
                  }
                  deportes {
                    title
                    content
                    cta {
                      ...CtaFragment
                    }
                    sports {
                      name
                      image {
                        ...ImageFragment
                      }
                    }
                  }

                  asistenciaEconomica {
                    title
                    content
                    image {
                      ...ImageFragment
                    }
                    cta {
                      ...CtaFragment
                    }
                  }
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

                investigation{
                  coverInvestigation {
                    copy
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
        studentServices: page.studentServices,
        investigation:{
          cover: page.investigation.coverInvestigation
        },
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