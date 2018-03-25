import React from "react";
import {Div} from "glamorous";
import Bio from "../components/bio.js"
import styles from "../styles/blog-post.module.css"
import BlogArticleHeader from "../components/blog-article-header.js"
import getTagBadge from "../components/tags.js"
import { Container, Row, Col } from "reactstrap";
export default ({ data }) => {
  if (data === undefined) return null
  console.log(data)
  const post = data.markdownRemark;
  let tags = []
  for(var tag in post.frontmatter.tags){
    tags.push(getTagBadge(post.frontmatter.tags[tag]))
  }
  return (
    <div className={styles.page}>
      <BlogArticleHeader/>
      <Container>
        <Row>
        <div className={styles.col}>
          <Col lg='8' xs='10' md='10'>
            <div className={styles.tagContainer}>
              {tags}
            </div>
            <h1 className={styles.title}>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <Bio/>
          </Col>
        </div>
      </Row>
      </Container>
    </div>
  );
};

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