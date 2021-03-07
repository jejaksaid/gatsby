import React from 'react';
import { graphql } from 'gatsby';

const Home = ({data}) => {
    console.log(data.site);
    return (
        <>
            <h1>Halo Dunia!</h1>
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
  }

`;