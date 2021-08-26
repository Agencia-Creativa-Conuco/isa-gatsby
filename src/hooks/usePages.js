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
                
                home {
                  cover {
                    copy
                    cta {
                      ...CtaFragment
                    }
                  }
                  ctaSection {
                    title
                    copy
                    cta {
                      ...CtaFragment
                    }
                    image {
                      ...ImageFragment
                    }
                  }
                  
                  form {
                    title
                    image {
                      ...ImageFragment
                    }
                  }
                }

                offer {
                  coverOffer {
                    copy
                  }
                  centerOffer {
                    title
                    content
                    cta {
                      ...CtaFragment
                    }
                    image {
                      ...ImageFragment
                    }
                  }

                  internationalOffer {
                    content
                    copy
                    title
                    image {
                      ...ImageFragment
                    }
                    cta {
                      ...CtaFragment
                    }
                    columns {
                      content
                      title
                    }
                  }
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

                about {
                  cover {
                    copy
                    cta {
                      ...CtaFragment
                    }
                  }
                  
                  history {
                    content
                    title
                    year
                    image {
                      ...ImageFragment
                    }
                  }
        
                  perfil {
                    name
                    jobtitle
                    content
                    photo {
                      ...ImageFragment
                    }
                  }
                  
                  tabs {
                    content
                    title
                  }
        
                  campus {
                    title
                    images {
                      ...ImageFragment
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
                library {
                  coverLibrary {
                    copy
                    titleLibrary
                  }
                  horary {
                    title
                    content {
                      content
                    }
                  }
                  recursos {
                    copy
                    titlecontent
                    title
                    content {
                      cloneContent
                    } 
                  }
                  reglamento {
                    copy
                    title
                  }
                  services {
                    content
                    title
                    image{
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
                  dep{
                    coverDep{
                      copy
                    }
                    activitiesDep {
                      content
                      title
                    }
                    developmentProject {
                      content
                      title
                      contentActividades
                      image{
                        ...ImageFragment
                      }
                    }
                    serviciosProfesionales {
                      copy
                      title
                      servicesMenu {
                        title
                        copy
                      }
                      image{
                        ...ImageFragment
                      }
                      
                    }
                    laboratorio {
                      dataLaboratory {
                        copy
                        title
                        image{
                          ...ImageFragment
                        }
                      }
                    }
                    mipymes {
                      copy
                      title
                      image{
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
                    clinicaVeterinaria {
                      title
                      copy
                      servicios
                      groupServices {
                        title
                      }
                      image{
                        ...ImageFragment
                      }
                    }
                    cede {
                      copy
                      title
                      group {
                        copy
                        title
                      }
                      image{
                        ...ImageFragment
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
        home: page.home,
        offer: page.offer,
        studentServices: page.studentServices,
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
          categories: page?.events?.eventCategories || [],
        },
        posts: {
          categories: page?.posts?.categories || [],
        },
        resources: page.resources,
        contact: page.contact,
        library:{
          cover: page.library.coverLibrary,
          horary: page.library.horary,
          recursos: page.library.recursos ,
          reglamento: page.library.reglamento,
          services: page.library.services
        },
        dep:{
          cover: page.dep?.coverDep,
          activities: page.dep?.activitiesDep,
          development: page.dep?.developmentProject,
          services: page.dep?.serviciosProfesionales,
          laboratory: page.dep?.laboratorio,
          veterinary: page.dep?.clinicaVeterinaria,
          cede: page.dep?.cede,
          mipymes: page.dep?.mipymes
        }

    }));
}
 
export default usePages;