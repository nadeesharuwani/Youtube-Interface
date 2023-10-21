import React from 'react'
import './Nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Nav() {
  return (
    <div className='navigationBox'>
      <div className="leftNav">
          <div className="menuIcon">
            <MenuIcon sx={{ fontSize: 35 }}/>
          </div>
          <div className="YouTubleIcon">
            <YouTubeIcon sx={{ fontSize:35}} htmlColor='red'/>
            <p className="YouTubeText">YouTube<sup>LK</sup></p>
          </div>
      </div>

      <div className="centerNav">
          <div className="searchBar">
            <input type='text' placeholder='Search' className='SearchInput'/>
            <div className="vertical"></div>
            <SearchIcon className='searchIcon' htmlColor='grey'/>
          </div>
          <div className="micIconCricul">
            <MicIcon className="micIcon"/>
          </div>
      </div>

      <div className="rightNav">
        <div className="rightIcon">
          <VideoCallIcon className='videoIcon' sx={{ fontSize:30}}/>
          <NotificationsNoneIcon className='notificationIcon' sx={{ fontSize:30}}/>
          <span className='notificationNumber'>9+</span>
          <img src="./image/profile.jfif" alt="" className="profile"/>
        </div>
      </div>
    </div>
  )
}
