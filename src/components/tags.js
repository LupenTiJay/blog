import React from "react";
import Link from "gatsby-link";
import styles from "../styles/pages-index.module.css"
const _ = require('lodash');
const tagColor =  {
    Engineering:{background:'#FAEFF5', color:'#E168A5'},
    Draft: {background: '#AEF0FC', color:'#47E2FF'}
}
const getTagBadge = (tag) => {
    if (tagColor[tag] === undefined) return
    console.log(tag)
    let tagBackgroundColor = tagColor[tag].background;
    let textColor = tagColor[tag].color;
    var divStyle = {
        color: textColor,
        backgroundColor: tagBackgroundColor,
        display: 'inline',
        padding: '3px',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        paddingBottom:'4px',
        borderRadius: '1rem',
        marginBottom: '1rem',
        letterSpacing: '3px',
        margin: '0.5rem',
        };
    return (
        <div style={divStyle}> {tag}</div>
    )

}

export default getTagBadge;