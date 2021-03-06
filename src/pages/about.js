import React from "react";
import AboutHeader from "../components/about-header"
import styles from "../styles/about-me.module.css"
import profilePic from '../assets/profile.png'
import Link from "gatsby-link";
import { Container, Row, Col, Button } from "react-bootstrap";
var { SocialIcon } = require('react-social-icons');
const urls = {
  github :'https://github.com/LupenTiJay',
  linkedin:'https://linkedin.com/in/jtiwari',
}

export default ({ data }) =>
  <div>
    <AboutHeader/>
      <div className={styles.page}>
        <Container>
          <Row>
            <div className={styles.col}>
            <Col lg='8' xs='10' md='10'>
                <img
                  src={profilePic}
                  alt={`Jayant Tiwari`}
                  className={styles.img}
                />
                  <h1 className={styles.title}>
                    A little bit about me
                  </h1>
                  <p className={styles.body}>
                    SDE at Alexa Internet @ Amazon
                  </p>
                  {/* <div className={styles.body}>
                    <a
                    href={"https://drive.google.com/file/d/1u7WrGUqVTdOjM2avkbnUsFWRhBxNfStw/view?usp=sharing"}
                    className={styles.body}>
                    <Button outline color="success">Resume</Button>    
                    </a>
                  </div> */}
                  <h1 className={styles.title}>
                    Contact me through
                  </h1>
                  <div className={styles.logoContainer}>
                    <div className={styles.socialIcon}>
                      <SocialIcon url={urls['github']} />
                    </div>
                    <div className={styles.socialIcon}>
                      <SocialIcon url={urls['linkedin']}/>
                    </div>
                  </div>
              </Col>
            </div>
        </Row>
      </Container>
    </div>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`