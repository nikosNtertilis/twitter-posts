import React from 'react'
import './PostBtn.css'

const PostBtn = ({index = 0, btnImg , number = 0 }) => {
    return (
        <div className="flex post-btn" key={"post-btn-" + index} id={"post-btn-" + index}>
            <img className="btn-img" src={btnImg}></img>
            <p className="grey-text">{number}</p>
        </div>
    )
}

export default PostBtn;