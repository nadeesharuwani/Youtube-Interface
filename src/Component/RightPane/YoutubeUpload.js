import React from 'react'
import './YoutubeUpload.css'

export default function YoutubeUpload(props) {
  return (
    <div className='uploadContainer'>
      
        <img src={props.url1} alt="" className="imgUpload" id='focused-image'/>
      
      <div className="bottomPartFirst">
        <img src={props.url2} alt="" className="profilePic" />
        <p class="description">{props.description} </p>
      </div>
      <div className="bottomPartSecond">
        <p className='channelName'>{props.cName}</p>
        <p className='uploadTime'>{props.time}</p>
      </div>
    </div>
  )
}
