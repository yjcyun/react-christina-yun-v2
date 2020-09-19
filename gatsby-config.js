module.exports = {
  siteMetadata: {
    title: 'Christina Yun',
    description: 'Christina is a frontend web developer in Toronto, ON.',
    author: 'Christina Yun',
    data:['item1', 'item2']
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}