import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button } from '@mui/material';
import SidebarOption from './SidebarOption';
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon  className='sidebar__twitterIcon'/>
      <SidebarOption active Icon={HomeIcon} className='font_side' text="Home"/>
      <SidebarOption Icon={TagIcon} className='font_side' text="Explore"/>
      <SidebarOption Icon={NotificationsNoneIcon} className='font_side' text="Notification"/>
      <SidebarOption Icon={MailOutlineIcon} className='font_side' text="Message"/>
      <SidebarOption Icon={BookmarkBorderIcon} className='font_side' text="Bookmark"/>
      <SidebarOption Icon={PersonOutlineIcon} className='font_side' text="Profile"/>
      <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}
