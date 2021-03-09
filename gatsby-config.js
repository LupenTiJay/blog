module.exports =  {
    siteMetadata: {
      title: `Jayant's Blog`,
      blogMain: `Welcome to my blog where I share interesting experiences working with different technologies and occasionally about food`,
      blogDisclaimer: `This site is written and maintained my me, if you have any questions shoot me an email`
    },
    plugins: [       
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          // CommonMark mode (default: true)
          commonmark: true,
          // Footnotes mode (default: true)
          footnotes: true,
          // Pedantic mode (default: true)
          pedantic: true,
          // GitHub Flavored Markdown mode (default: true)
          gfm: true,
          // Plugins configs
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                // Class prefix for <pre> tags containing syntax highlighting;
                // defaults to 'language-' (e.g. <pre class="language-js">).
                // If your site loads Prism into the browser at runtime,
                // (e.g. for use with libraries like react-live),
                // you may use this to prevent Prism from re-processing syntax.
                // This is an uncommon use-case though;
                // If you're unsure, it's best to use the default value.
                classPrefix: "language-",
                // This is used to allow setting a language for inline code
                // (i.e. single backticks) by creating a separator.
                // This separator is a string and will do no white-space
                // stripping.
                // A suggested value for English speakers is the non-ascii
                // character '›'.
                inlineCodeMarker: null,
                // This lets you set up language aliases.  For example,
                // setting this to '{ sh: "bash" }' will let you use
                // the language "sh" which will highlight using the
                // bash highlighter.
                aliases: {},
                // This toggles the display of line numbers globally alongside the code.
                // To use it, add the following line in gatsby-browser.js
                // right after importing the prism color scheme:
                //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                // Defaults to false.
                // If you wish to only show line numbers on certain code blocks,
                // leave false and use the {numberLines: true} syntax below
                showLineNumbers: true,
                // If setting this to true, the parser won't handle and highlight inline
                // code used in markdown i.e. single backtick code like `this`.
                noInlineHighlight: false,
                // This adds a new language definition to Prism or extend an already
                // existing language definition. More details on this option can be
                // found under the header "Add new language definition or extend an
                // existing language" below.
                languageExtensions: [
                  {
                    language: "superscript",
                    extend: "javascript",
                    definition: {
                      superscript_types: /(SuperType)/,
                    },
                    insertBefore: {
                      function: {
                        superscript_keywords: /(superif|superelse)/,
                      },
                    },
                  },
                ],
                // Customize the prompt used in shell output
                // Values below are default
                prompt: {
                  user: "root",
                  host: "localhost",
                  global: false,
                },
                // By default the HTML entities <>&'" are escaped.
                // Add additional HTML escapes by providing a mapping
                // of HTML entities and their escape value IE: { '}': '&#123;' }
                escapeEntities: {},
              },
            },
            {
              resolve: 'gatsby-remark-graph',
              options: {
                // this is the language in your code-block that triggers mermaid parsing
                language: 'mermaid', // default
                theme: 'neutral', // could also be dark, forest, or neutral,
              }
            },
            `gatsby-remark-katex`,
            {
                resolve: `gatsby-remark-images`,
                options: {
                    maxWidth: 650,
                },
            },
          ],
        },
      },     
      // {
      //   resolve: `gatsby-transformer-remark`,
      //   options: {
      //     plugins: [
      //       {
      //         resolve: 'gatsby-remark-images',
      //         options: {
      //           maxWidth: 970,
      //         },
      //       },
      //       {
      //         resolve: `gatsby-remark-katex`,
      //         // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
      //         strict: `ignore`
      //       },
            // {
            //   resolve: 'gatsby-remark-graph',
            //   options: {
            //     // this is the language in your code-block that triggers mermaid parsing
            //     language: 'mermaid', // default
            //     theme: 'neutral', // could also be dark, forest, or neutral,
            //   }
            // },
            // {
            //   resolve: `gatsby-remark-prismjs`,
            //   options: {
            //     // Class prefix for <pre> tags containing syntax highlighting;
            //     // defaults to 'language-' (e.g. <pre class="language-js">).
            //     // If your site loads Prism into the browser at runtime,
            //     // (e.g. for use with libraries like react-live),
            //     // you may use this to prevent Prism from re-processing syntax.
            //     // This is an uncommon use-case though;
            //     // If you're unsure, it's best to use the default value.
            //     classPrefix: "language-",
            //     // This is used to allow setting a language for inline code
            //     // (i.e. single backticks) by creating a separator.
            //     // This separator is a string and will do no white-space
            //     // stripping.
            //     // A suggested value for English speakers is the non-ascii
            //     // character '›'.
            //     inlineCodeMarker: null,
            //     // This lets you set up language aliases.  For example,
            //     // setting this to '{ sh: "bash" }' will let you use
            //     // the language "sh" which will highlight using the
            //     // bash highlighter.
            //     aliases: {},
            //     // This toggles the display of line numbers globally alongside the code.
            //     // To use it, add the following line in gatsby-browser.js
            //     // right after importing the prism color scheme:
            //     //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
            //     // Defaults to false.
            //     // If you wish to only show line numbers on certain code blocks,
            //     // leave false and use the {numberLines: true} syntax below
            //     showLineNumbers: true,
            //     // If setting this to true, the parser won't handle and highlight inline
            //     // code used in markdown i.e. single backtick code like `this`.
            //     noInlineHighlight: false,
            //     // This adds a new language definition to Prism or extend an already
            //     // existing language definition. More details on this option can be
            //     // found under the header "Add new language definition or extend an
            //     // existing language" below.
            //     languageExtensions: [
            //       {
            //         language: "superscript",
            //         extend: "javascript",
            //         definition: {
            //           superscript_types: /(SuperType)/,
            //         },
            //         insertBefore: {
            //           function: {
            //             superscript_keywords: /(superif|superelse)/,
            //           },
            //         },
            //       },
            //     ],
            //     // Customize the prompt used in shell output
            //     // Values below are default
            //     prompt: {
            //       user: "root",
            //       host: "localhost",
            //       global: false,
            //     },
            //     // By default the HTML entities <>&'" are escaped.
            //     // Add additional HTML escapes by providing a mapping
            //     // of HTML entities and their escape value IE: { '}': '&#123;' }
            //     escapeEntities: {},
            //   },
            // },
      //     ],
      //   },
      // },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          },
      },
      `gatsby-plugin-glamor`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      'gatsby-plugin-sharp',
      // {
      //   resolve: `gatsby-transformer-remark`,
      //   options: {
      //     plugins: [
      //       {
      //         resolve: 'gatsby-remark-images',
      //         options: {
      //           maxWidth: 970,
      //         },
      //       },
      //       {
      //         resolve: `gatsby-remark-prismjs`,
      //         options: {
      //           // Class prefix for <pre> tags containing syntax highlighting;
      //           // defaults to 'language-' (eg <pre class="language-js">).
      //           // If your site loads Prism into the browser at runtime,
      //           // (eg for use with libraries like react-live),
      //           // you may use this to prevent Prism from re-processing syntax.
      //           // This is an uncommon use-case though;
      //           // If you're unsure, it's best to use the default value.
      //           classPrefix: "language-",
      //           languageExtensions: [
      //             {
      //               language: "superscript",
      //               extend: "javascript",
      //               definition: {
      //                 superscript_types: /(SuperType)/,
      //               },
      //               insertBefore: {
      //                 function: {
      //                   superscript_keywords: /(superif|superelse)/,
      //                 },
      //               },
      //             },
      //           ],
      //         },
      //       },
      //       {
      //         resolve: `gatsby-remark-katex`,
      //         // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
      //         strict: `ignore`
      //       },
      //     ],
      //   },
      // },
    ],
  };