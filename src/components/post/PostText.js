import React from 'react'
import './PostText.css'

const PostText = ({text, date}) => {
    return (
        <div className="post-text" id="post-text">
            <p>{text}</p>
            <p className="grey-text">{date}</p>
        </div>
    )
}

export default PostText;
