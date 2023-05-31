import React, { forwardRef, useState } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
const Post = forwardRef(
    ({ displayName, username, verified, tempstamp, text, avatar }, ref) => {
        const [count, setCount] = React.useState(0);

        function increase() {
            setCount(count + 1);
        }

        return (
            <div className="post" ref={ref}>
                <div className="post_avator">
                    <Avatar src={avatar} />
                </div>
                <div className="post_body">
                    <div className="post_header">
                        <div className="post_headerText">
                            <h3>
                                {displayName}
                                {''}
                                <span className="post_headerSpecial">
                                    {verified && (
                                        <VerifiedIcon className="post_badge" />
                                    )}{' '}
                                    {username}
                                </span>
                            </h3>
                        </div>
                        <div className="post_headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>

                    <div className="post_footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <LoopIcon fontSize="small" />
                        <h4 className="like_count">
                            <span class="like">
                                <button onClick={increase} className="pointer">
                                    <FavoriteBorderIcon fontSize="small" />
                                </button>
                                {count}
                            </span>
                        </h4>

                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
        );
    }
);
export default Post;
