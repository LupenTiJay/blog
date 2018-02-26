import React from "react";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import styles from "../styles/pages-index.module.css"
const getBlogCard = (node) => {
    console.log(node)
    return (
        <div key={node.id} className={styles.blogCard}>
        <h3 className={styles.title}>
            {node.frontmatter.title}
        </h3>
        <p className={styles.date}>
        {node.frontmatter.date}
        </p>
        <p className={styles.excerpt}>
            {node.excerpt}
        </p>
        <Link
        to={node.fields.slug}>
        Read more
        </Link>

        </div>
    )
}

module.exports = getBlogCard;