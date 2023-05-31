import React, { useEffect, useState } from 'react';
import './feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
        <div className="feed">
            {/* Header */}

            <div className="feed_header">
                <h2>Home</h2>
                <span className="side_vector">
                    <AutoFixHighOutlinedIcon />
                </span>{' '}
            </div>

            {/* TweetBox */}

            <TweetBox />

            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={posts.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                    />
                ))}
            </FlipMove>

            {/* Post */}
        </div>
    );
}
