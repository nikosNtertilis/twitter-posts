import React from 'react'
import { TwitterCircle, TwitterLogo, TwitterVerifiedBadge } from '../../images/post';
import './PostHeader.css'

const PostHeader = ({username, userLink }) => {
    return (
        <div className="flex post-header" id="post-header">
            <TwitterCircle className="twitter-circle" />
            <div className="flex justify-b flex-column width100">
                <div className="flex justify-sb align-b">
                    <div className="flex align-b">
                        <h4>{username}</h4>
                        <TwitterVerifiedBadge className="verified-badge" />
                    </div>
                    <TwitterLogo className="twitter-logo" />
                </div>
                <p className="grey-text">{userLink}</p>
            </div>
        </div>
    )
}

export default PostHeader;