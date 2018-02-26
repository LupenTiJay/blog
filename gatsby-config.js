module.exports = {
    siteMetadata: {
      title: `Jayant's Blog`,
      blogMain: `Welcome to my blog where I share interesting experiences working with different technologies and occasionally about food`,
      blogDisclaimer: `This site is written and maintained my me, if you have any questions shoot me an email`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
        },
      `gatsby-plugin-glamor`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  };