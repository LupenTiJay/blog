import React from "react";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import styles from "../styles/pages-index.module.css"
import { Badge } from 'react-bootstrap';
import { Button } from "reactstrap";
import getTagBadge from './tags.js'
const _ = require('lodash')
const draftIcon = require('../assets/draftIcon.svg')
    const getBlogCard = (node) => {
        console.log(JSON.stringify(node, null, 2))
    let tags = []
    for(var tag in node.frontmatter.tags) {
        tags.push(getTagBadge(node.frontmatter.tags[tag]))
    }
    return (
        // <Link  
        //     to={node.fields.slug} 
        //     activeStyle={{ all: "unset" }}>
        <div key={node.id} className={`${styles.grow} ${styles.blogCard}`}>
        {tags}
        <div>
            </div>
        <h3 className={styles.title}>
            {node.frontmatter.title}
        </h3>

        <div className={styles.date}>
            {node.frontmatter.date}
        </div>
        <p className={styles.excerpt}>
            {node.excerpt}
        </p>
        <Link
            to={node.fields.slug}>Read more → 
        </Link>
        

    </div>
    // </Link>
    )
}

export default getBlogCard;