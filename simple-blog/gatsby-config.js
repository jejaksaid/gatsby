module.exports = {
    siteMetadata: {
        title: `BlogSaid`,
        author: {
            name: `Said`,
            summary: `The self-taught`,
        },
        description: `A simple blog with gatsby`,
        siteUrl: `https://localhost:8000`,
        social: {
            twitter: `msaidramadhan`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            option: {
                extensions: [`.mdx`, 'md'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            option: {
                path: `${__dirname}/blog`,
                name: `blog`,
            },
        },
    ],
};