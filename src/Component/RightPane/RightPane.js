import React from 'react'
import './RightPane.css'
import RightTop from './RightTop'
import YoutubeUpload from './YoutubeUpload'

export default function RightPane() {
  return (
    <div className='RightContainer'>
     <div className="rightTop">
      <RightTop channel="Hiru"/>
      <RightTop channel="Music"/>
      <RightTop channel="React Router"/>
      <RightTop channel="AUK Lerning"/>
      <RightTop channel="Cartoon"/>
      <RightTop channel="Films"/>
      <RightTop channel="Hiru"/>
      <RightTop channel="Music"/>
      <RightTop channel="React Router"/>
     </div>
     
     <div className='Container'>
     <YoutubeUpload url1="./image/AUK1.jfif"
      url2="./image/AUK.jfif"
      description="node JS full Tutorial for Bignners part 04"
      cName="AUK Leraning"
      time="17k viwes . 1 month ago"
       />
      
      <YoutubeUpload url1="./image/derana1.jfif"
      url2="./image/derana.png"
      description="News Today Live"
      cName="TV Derana"
      time="10k viwes . 1 min ago"
       />

      <YoutubeUpload url1="./image/code.jfif"
      url2="./image/codeCamp.jfif"
      description="Privider package Basic "
      cName="Code Camp"
      time="1k viwes . 10 month ago"
       />
    </div>

    <div className='Container'>
     <YoutubeUpload url1="./image/j.jfif"
      url2="./image/java.jfif"
      description="Java Tutorial for Bignners"
      cName="java Tutorial"
      time="11k viwes . 1 year ago"
       />
      
      <YoutubeUpload url1="./image/apeamma.jfif"
      url2="./image/amma.jfif"
      description="cook with ape amma "
      cName="Ape Amma"
      time="1k viwes . 1 week ago"
       />

      <YoutubeUpload url1="./image/react.jfif"
      url2="./image/banchiLogo.jfif"
      description="File Handlling with react"
      cName="code with banchi"
      time="17k viwes . 2 month ago"
       />
    </div>

    <div className='Container'>
     <YoutubeUpload url1="./image/AUK1.jfif"
      url2="./image/AUK.jfif"
      description="node JS full Tutorial for Bignners part 04"
      cName="AUK Leraning"
      time="17k viwes . 1 month ago"
       />
      
      <YoutubeUpload url1="./image/derana1.jfif"
      url2="./image/derana.png"
      description="News Today Live"
      cName="TV Derana"
      time="10k viwes . 1 min ago"
       />

      <YoutubeUpload url1="./image/code.jfif"
      url2="./image/codeCamp.jfif"
      description="Privider package Basic "
      cName="Code Camp"
      time="1k viwes . 10 month ago"
       />
    </div>

    <div className='Container'>
     <YoutubeUpload url1="./image/j.jfif"
      url2="./image/java.jfif"
      description="Java Tutorial for Bignners"
      cName="java Tutorial"
      time="11k viwes . 1 year ago"
       />
      
      <YoutubeUpload url1="./image/apeamma.jfif"
      url2="./image/amma.jfif"
      description="cook with ape amma "
      cName="Ape Amma"
      time="1k viwes . 1 week ago"
       />

      <YoutubeUpload url1="./image/react.jfif"
      url2="./image/banchiLogo.jfif"
      description="File Handlling with react"
      cName="code with banchi"
      time="17k viwes . 2 month ago"
       />
    </div>
    
    
    </div>
  )
}
