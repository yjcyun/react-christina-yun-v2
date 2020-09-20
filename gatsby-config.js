module.exports = {
  siteMetadata: {
    title: 'Christina Yun',
    description: 'I am a a freelance frontend website developer from Toronto, Canada . Learn more about what I can do.',
    author: 'Christina Yun',
    siteUrl: 'https://christinayun.ca'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}