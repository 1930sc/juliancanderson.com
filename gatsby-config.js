require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Julian Christian Anderson',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`300`, `400`, `500`, `600`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`300`, `400`, `500`, `600`, `700`],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        url: `https://api-apeast.graphcms.com/v1/cjn9y3ml1120501gh6ib6a91h/master`,
        typeName: `Link`,
        refetchInterval: 20,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        url: `https://api-apeast.graphcms.com/v1/cjn9y3ml1120501gh6ib6a91h/master`,
        typeName: `PageData`,
        refetchInterval: 20,
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir
        aliases: {
          '@components': './components',
          '@images': './images',
          '@hooks': './hooks',
          '@utils': './utils',
          helpers: './helpers', // <- will become ./src/helpers
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static', // <- will become ./public/static
          },
        },
      },
    },
    'gatsby-plugin-offline',
  ],
}
