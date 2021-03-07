module.exports = {
    siteMetadata: {
        title: `gatsby course`,
        author: {
            name: `Said`,
            summary: `learning gatsby course`,
        },
        description: `a simple gatsby course`,
        siteUrl: `https://localhost:8000`,
        social: {
            twitter: `msaidramadhan`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `blog`,
            },
        },
    ],
};