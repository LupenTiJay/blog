import React from "react";
import glamorous from "glamorous";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import styles from "../styles/blog-header.module.css"
import logo from "../assets/logo4.png";
import { Container, Row, Col } from "reactstrap";
const BlogHeader = () => {
    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    
                    <Col>
                    <div className={styles.col}>
                        <img
                        src={logo}
                        alt={`Jayant Tiwari`}
                        className={styles.logo}
                        />
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
export default BlogHeader;