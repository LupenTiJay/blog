import React from "react";
import {Div} from "glamorous";
import Bio from "../components/bio.js"
import styles from "../styles/blog-post.module.css"
import BlogArticleHeader from "../components/blog-article-header.js"
import getTagBadge from "../components/tags.js"
import { Container, Row, Col } from "reactstrap";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'
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
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            
            <InputGroup className={styles.feedbackGroup}>
              <Input id="feedback" type="textarea" placeholder="Feedback is appreciated!" bsSize='lg' />
            </InputGroup>
            <div id='response' className={styles.submit}>
            </div>
            <div className={styles.feedbackButton}>
            <Button color="success" onClick={feedbackWebhook}>Send</Button>
            </div>
            <Bio/>
          </Col>
        </div>
        
      </Row>
      </Container>
    </div>
  );
};
const feedbackWebhook =  (yolo) => {
  // do webhook
  console.log(document.getElementById('feedback').value)
  document.getElementById("response").innerHTML="Thanks!"; 
  const url = 'https://hooks.slack.com/services/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'
  const text = document.getElementById('feedback').value

  $.ajax({
    data: JSON.stringify({
        "text": text
    }),
    dataType: 'json',
    processData: false,
    type: 'POST',
    url: url
  });

  return (
    <div> test </div>
  )
}
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