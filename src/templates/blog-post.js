import React from "react";
import {Div} from "glamorous";
import Bio from "../components/bio.js"
import styles from "../styles/blog-post.module.css"
import BlogArticleHeader from "../components/blog-article-header.js"
import getTagBadge from "../components/tags.js"
import { Container, Row, Col } from "reactstrap";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'
import JustComments from 'gatsby-plugin-just-comments';
import $ from 'jquery'
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
            <div className={styles.htmlBody} dangerouslySetInnerHTML={{ __html: post.html }} />
            <JustComments
              apikey="32c0c0f3-21e2-45c6-9694-af92a38a8b2a"
            />
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