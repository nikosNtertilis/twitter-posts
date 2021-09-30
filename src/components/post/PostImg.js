import React from 'react'
import { TwitterChats } from '../../images/post';
import './PostImg.css'

const PostImg = ({title, link}) => {   
    return (
        <div className="flex post-img" id="post-img">
            
            <img className="width100" src={TwitterChats}></img>
            
            <div className="img-text">
                <h4>{title}</h4>
                <p>{title}</p>
                <p className="grey-text">{link}</p>
            </div>
            
             
        </div>
    )
}

export default PostImg;