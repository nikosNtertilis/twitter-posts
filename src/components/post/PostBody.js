import React from 'react'
import { useSelector } from 'react-redux';
import './PostBody.css'
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImg from './PostImg';
import PostText from './PostText';

const PostBody = ({index = 0, height = "auto"}) => {

    const list = useSelector(state => state.posts.list)

    const {id, userId, body, title } = list[index]

    const date = `10:00 PM - Aug, 2021`;

    const link = `blog.twitter.com`;
    const userLink = `@Twitter`;

    return (
        <div 
        className="post-body" 
        key={"post-" + index} 
        id={"post-" + index}
        style={{height: height}}
        >
            <PostHeader username={userId} userLink={userLink} />
            <PostText text={body} date={date} />
            <PostImg title={title} link={link}  />
            <PostFooter />
        </div>
    )
}

export default PostBody;