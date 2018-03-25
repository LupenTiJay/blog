import React from "react";
import Link from "gatsby-link";
import BioMain from "../components/bio-main"
import { rhythm } from "../utils/typography";
import styles from "../styles/pages-index.module.css"
import getBlogCard from "../components/blog-card"
import BlogHeader from "../components/blog-header"
import { Container, Row, Col } from "reactstrap";
export default ({ data }) => {
  return (
<div className={styles.page}>
  <BlogHeader/>
    <Container>
      <Row>
        <div className={styles.col}>
          <Col xs='%100' sm='80%' md='10'>
              <BioMain />
              <h4>
                Number of Posts: {data.allMarkdownRemark.totalCount}
              </h4>
              {data.allMarkdownRemark.edges.map(({ node }) =>
              getBlogCard(node)
              )}
          </Col>
        </div>
      </Row>
    </Container>
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
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`