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
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                // Class prefix for <pre> tags containing syntax highlighting;
                // defaults to 'language-' (eg <pre class="language-js">).
                // If your site loads Prism into the browser at runtime,
                // (eg for use with libraries like react-live),
                // you may use this to prevent Prism from re-processing syntax.
                // This is an uncommon use-case though;
                // If you're unsure, it's best to use the default value.
                classPrefix: "language-",
              },
            },
          ],
        },
      },
    ],
  };