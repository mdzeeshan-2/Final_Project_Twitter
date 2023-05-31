import React from 'react'
import "./Widgets.css"
import "./Post.css"
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import SearchIcon from '@mui/icons-material/Search';
export default function Widgets({displayName, username, verified,  avatar}){
  return (
    <div className='widgets'>
      <div className='widgets_input'>
    <SearchIcon className='widgets_searchIcon'/>
    <input className='input' placeholder='Search Twitter' type='text' />
      </div>
      <div className='widgets_widgetsContainer'>
        <h2 className='widget_font'>What's happening</h2>
        <br></br>
        <h5 className='treding'>Trending in India</h5>
        <h4 className='widget_font'>#SupremeCourt</h4>
        <h5 className='treding'>10.4K Tweets</h5>
        <br></br>
        <h5 className='treding'>Sports · Trending</h5>
        <h4 className='widget_font'>Gujrat Titans</h4>
        <h5 className='treding'>Trending with<span className='hastag' >&nbsp;&nbsp;#AvaDe #ipl</span> </h5>
        <br></br>
        <h5 className='treding'>Business & Finance · Trending</h5>
        <h4 className='widget_font'>MUST</h4>
        <h5 className='treding'>324k Tweets</h5>
        <br></br>
        <h5 className='treding'>Indian Premier League · Trending</h5>
        <h4 className='widget_font'>MSDhoni</h4>
        <h5 className='treding'>Trending with <span className='hastag'>#ChennaiSuperKings #ipl</span></h5>
        <br></br>
        <h4 className='hastag'>Show more</h4>
      </div>
      <div className='widgets_widgetsContainer'>
      <h2 className='widget_font'>Who to follow</h2>
      <br></br>
      <div className='post_bottomLine'>
      <div className='post_avator'>
        <Avatar src="https://cdnb.artstation.com/p/assets/images/images/056/661/377/large/mizuri-fierybatman.jpg?1669802532"/>
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            <h3 className='widget_font'>
            Md Zeeshan {""} <span className='post_headerSpecial'>
             <VerifiedIcon className='post_badge'/>
            </span>
            </h3>
         <span className='treding'> @mdzeeshan</span>  
          </div> 
        </div>
       </div>
      </div>
      <div className='post_bottomLine'>
      <div className='post_avator'>
        <Avatar src="https://cdnb.artstation.com/p/assets/images/images/056/661/377/large/mizuri-fierybatman.jpg?1669802532"/>
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            <h3 className='widget_font'>
            Md Zeeshan{""}    
            <span className='post_headerSpecial'>
             <VerifiedIcon className='post_badge'/>
            </span>
            </h3>
            <span className='treding'> @mdzeeshan</span>
             
          </div> 
        </div>
       </div>
      </div>
      <div className='post_bottomLine'>
      <div className='post_avator'>
        <Avatar src="https://cdnb.artstation.com/p/assets/images/images/056/661/377/large/mizuri-fierybatman.jpg?1669802532"/>
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            <h3 className='widget_font'>
            Md Zeeshan{""}    
            <span className='post_headerSpecial'>
             <VerifiedIcon className='post_badge'/>
            </span>
            </h3>
            <span className='treding'> @mdzeeshan</span> 
          </div> 
        </div>
       </div>
      </div>
      <br></br>
        <h4 className='hastag'>Show more</h4>
      </div>
    </div>
  )
}
