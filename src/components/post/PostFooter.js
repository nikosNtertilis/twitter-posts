import React from 'react'
import { informationIcon, TwitterHeart, TwitterReply, TwitterRetweet } from '../../images/post'
import PostBtn from './PostBtn'
import './PostFooter.css'

const PostFooter = () => {
    return (
        <div className="flex post-footer" id="post-footer">
            <div className="flex">
                <PostBtn 
                btnImg={TwitterReply} 
                number={74} 
                index={0} />
                <PostBtn 
                btnImg={TwitterRetweet} 
                number={437} 
                index={1} />
                <PostBtn 
                btnImg={TwitterHeart} 
                number={732} 
                index={2} />
            </div>
            
            <img className="info-img" src={informationIcon}></img>
        </div>
    )
}

export default PostFooter
