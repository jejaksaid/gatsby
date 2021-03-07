import React from 'react';
import { graphql } from 'gatsby';

const Home = ({data}) => {
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    const post = data.allMdx.nodes;
    return (
        <>
            <h1>Blog Post</h1>
            {posts.map((post) => {
                const title = post.frontmatter.title || post.fields.slug;
                return(
                    <div>
                        <h1> {title} </h1>
                        
                        <p>{post.frontmatter.date}</p>
                        <p>{post.frontmatter.description}</p>
                    </div>
                )    
            })}
        </>
    )
}


export default Home;

export const pageQuery = graphql` 
    {
        site {
        siteMetadata {
        description
        title
      }
    }
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          excerpt
          slug
          frontmatter {
            date
            title
            published
            description
          }
        }
      }
    
  }

`;