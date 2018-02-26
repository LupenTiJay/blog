import React from "react";
import Link from "gatsby-link";
import BioMain from "../components/bio-main"
import { rhythm } from "../utils/typography";
import styles from "../styles/pages-index.module.css"
import getBlogCard from "../components/blog-card"
export default ({ data }) => {
  return (
    <div>
      <BioMain />
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>

      {data.allMarkdownRemark.edges.map(({ node }) =>
       getBlogCard(node)
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`