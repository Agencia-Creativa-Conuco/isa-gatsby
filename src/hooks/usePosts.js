import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {

    const resultado = useStaticQuery(
        graphql `
        {
            allWpPost {
              nodes {
                id: databaseId
                title
                content
                excerpt
                date
                link
                uri
                slug
                featuredImage {
                  node {
                    localFile {
                      sharp: childImageSharp {
                        fluid(maxWidth: 1200) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
                author {
                  node {
                    id: databaseId
                    name
                    uri
                    slug
                  }
                }
                categories {
                  nodes {
                    id: databaseId
                    name
                    slug
                    link
                    uri
                  }
                }
                tags {
                  nodes {
                    id: databaseId
                    name
                    slug
                    link
                    uri
                  }
                }
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
        featuredImage: post.featuredImage? post.featuredImage.node.localFile : null
    }));
}
 
export default usePosts;