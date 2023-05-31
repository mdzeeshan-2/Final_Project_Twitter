import React, { useState } from 'react'
import db from './firebase';
import "./TweetBox.css"
import {Avatar, Button } from '@mui/material'
export default function Tweetbox() {
  const [tweetMessaage, setTweetMessage] = useState("");
  const sendTweet = (e) =>{
   e.preventDefault(); 
   db.collection('posts').add({
    displayName: "Md Zeeshan",
    username: "firebase",
    verified: true,
   text: tweetMessaage,
   avatar: "https://cdnb.artstation.com/p/assets/images/images/056/661/377/large/mizuri-fierybatman.jpg?1669802532"
   });
   setTweetMessage("");
  }
  return (
    <div className='tweetBox'>
    <form>
        <div className='tweetBox_input'>
          <Avatar 
            src="https://cdnb.artstation.com/p/assets/images/images/056/661/377/large/mizuri-fierybatman.jpg?1669802532"
          />
          <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessaage} className='input_back' placeholder="What's happening" type='text'/>
        </div>

        <Button onClick={sendTweet} type='submit' className='tweetbox_tweetButton'>Tweet</Button>
    </form>
    </div>
  )
}
