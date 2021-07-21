import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useInicio = () => {

    const resultado = useStaticQuery(
        graphql `
            query {
                allWpPage(filter: {slug: {eq: "isa"}}) {
                    nodes {
                        id: databaseId
                        title
                        slug
                        uri
                        link
                        isFrontPage
                        isPostsPage
                        newsTitle
                        newsShow
                        projectShow
                        projectTitle
                        aplicationShow
                        aplicationImage {
                            alt
                            caption
                            description
                            height
                            name
                            path
                            srcset
                            title
                            url
                            width
                            full_url
                        }
                        navigationShow
                        navigationItems {
                            id
                            title
                            content
                            icon {
                                alt
                                caption
                                description
                                full_url
                                height
                                name
                                path
                                srcset
                                title
                                url
                                width
                            }
                            post {
                                id: databaseId
                                slug
                                link
                                uri
                            }
                        }
                        aplicationCopy
                        aplicationCta
                        aplicationCtaUrl
                        aplicationCtaText
                        aplicationTitle
                        contactTitle
                        contactShow
                        contactImage {
                            alt
                            caption
                            description
                            height
                            name
                            path
                            srcset
                            title
                            url
                            width
                            full_url
                        }
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp {
                                        fluid( maxWidth: 1200 ) {
                                            ...GatsbyImageSharpFluid_withWebp
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

    return resultado.allWpPage.nodes.map( inicio => ({
        id: inicio.id,
        title: inicio.title,
        slug: inicio.slug,
        uri: inicio.uri,
        link: inicio.link,
        newsShow: inicio.newsShow,
        newsTitle: inicio.newsTitle,
        projectTitle: inicio.projectTitle,
        projectShow: inicio.projectShow,
        navigationShow: inicio.navigationShow,
        navigationItems: inicio.navigationItems,
        aplicationShow: inicio.aplicationShow,
        aplicationImage: inicio.aplicationImage,
        aplicationCopy: inicio.aplicationCopy,
        aplicationCta: inicio.aplicationCta,
        aplicationCtaUrl: inicio.aplicationCtaUrl,
        aplicationCtaText: inicio.aplicationCtaText,
        aplicationTitle: inicio.aplicationTitle,
        contactTitle: inicio.contactTitle,
        contactShow: inicio.contactShow,
        contactImage: inicio.contactImage,
        isFrontPage: inicio.isFrontPage,
        isPostsPage: inicio.isPostsPage,
        featuredImage: inicio.featuredImage? inicio.featuredImage.node.localFile : null,
    }));
}
 
export default useInicio;