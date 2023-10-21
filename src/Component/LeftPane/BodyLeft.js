import React from 'react'
import './BodyLeft.css'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function BodyLeft() {
  return (
    <div className='bodyLeftBox'>
      <li className="firstIconList">
        <HomeIcon active className='HomeIcon'/>
        <span className="ListText">Home</span>
      </li>

      <li className="firstIconList">
        <SubscriptionsIcon className='SubscriptionsIcon'/>
        <span className="ListText"> Subscribe </span>
      </li>
     <hr/>
     
     <li className="secondIconList">
        < VideoLibraryIcon className=' VideoLibraryIcon'/>
        <span className="ListText">Library</span>
      </li>
      <li className="secondIconList">
        < HistoryIcon className='HistoryIcon'/>
        <span className="ListText">History</span>
      </li>
      <li className="secondIconList">
        < SlideshowIcon className=' SlideshowIcon'/>
        <span className="ListText">Your Videos</span>
      </li>
      <li className="secondIconList">
        <WatchLaterIcon className='WatchLaterIcon'/>
        <span className="ListText">Watch Later</span>
      </li>
      <li className="secondIconList">
        <ThumbUpIcon className=' ThumbUpIcon' />
        <span className="ListText">Liked videos</span>
      </li>

    <hr/>
    <div className="subscribeContiner">
      <p className="Subscribe">Subscription</p>
      <div className="subscriptionList">
        <img src="./image/codeCamp.jfif" alt="" className="subImage" />
        <span className="subText">Code Camp Sri Lanka</span>
      </div>
      <div className="subscriptionList">
        <img src="./image/AUK.jfif" alt="" className="subImage" />
        <span className="subText">AUK Learning</span>
      </div>

        <div className="subscriptionList">
          <img src="./image/derana.png" alt="" className="subImage" />
          <span className="subText">TV Derana</span>
       </div>

        <div className="subscriptionList">
          <img src="./image/java.jfif" alt="" className="subImage" />
          <span className="subText">Java Code</span>
        </div>
        

        <div className="subscriptionList">
          <img src="./image/amma.jfif" alt="" className="subImage" />
          <span className="subText">Ape Amma</span>
        </div>
        

        <div className="subscriptionList">
          <img src="./image/codeCamp.jfif" alt="" className="subImage" />
          <span className="subText">Code Camp Sri Lanka</span>
        </div>
    </div>
    <hr/>
    <div className="explorePart">
      <div className="exploreIcons">
        <div className="thirdIcon">
          <WhatshotIcon/>
          <span className='iconText'>Trending</span>
        </div>
        <div className="thirdIcon">
        <MusicNoteIcon/>
        <span className='iconText'>Music</span>
        </div>
        
        <div className="thirdIcon">
        <SportsEsportsIcon/>
        <span className='iconText'>Gaming</span>
        </div>
        
        <div className="thirdIcon">
        <EmojiEventsIcon />
        <span className='iconText'>Sports</span>
        </div>
        
      </div>
    </div>
  </div>
  )
}
