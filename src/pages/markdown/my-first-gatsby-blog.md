---
title: "Why I gave Gatsby a try"
date: "2017-01-01T00:00:00Z"
layout: post
draft: true
path: "/pages/gatsby"
category: "Gatsby"
description: "Gatsby is advirtised as being a robust static generator and it seems it has delivered"
tags: ["Engineering", "Draft"]
---

Gatsby is a static generator powered by React. This provides an advantage for React developers looking to make powerful static site. In addition you can leverage variety of libraries that exists for React to make development less tedious.  Gatsby is excellent of looking to develop docs, blog or a template for businesses. By using appropriate plugins you can easily connect the site to various data sources which are interfaced with GraphQL. In this article I will go over basics to spark your curiosity.

### What can you build with Gatsby

The two classification according to Gatsby docs are Hybrid App Pages and Client-only Pages. 
Hybrid pages load initial components which will then fetch and render data from API. An example can be an e-commerce site with universal product pages and live data.
Client-only pages stay only on client-side which are gated by authentication. 

### Plugins

Plugins makes it easy to solve issues revolving setting up. For example setting up Sass, markdown support, typography and the list continues. For example if I need to use prismjs for adding code snippet to my site. I simply add this to my plugin file

```javascript
options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
              },
            },
          ],
        },
```

### GraphQL

On the surface GraphQL is essentially querying endpoints. Kind of like SQL for your database. In Gatsby GraphQL works on top of data layer which means same methodology is used for obtaining data. 

```javascript
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`;
```

This is a query I use in this blog. Using the slug I query the html file of blog post and its front matter. I tell GraphQL that from the frontmatter provide the title and tags from the markdown file.
I recommend checking out the whole documentation on GraphQL at https://graphql.org/

### Using React

Since I don’t have a lot of dynamic features on my site at the moment I decided to use functional components that don’t require states. However in the next iteration of this site I will be transitioning to using components with states to make the site more robust.
Here is a great article on using states in Gatsby https://www.gatsbyjs.org/tutorial/part-one/

### Conclusion

Gatsby is a pretty power tool for developers look to get the job done quickly. Using React under the hood opens up many possibilities for developed to create and share their build. Building my blog on top of Gatsby is turning out to be great.