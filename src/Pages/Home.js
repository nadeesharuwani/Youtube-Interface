import React from 'react'
import Nav from '../Component/navigation/Nav'
import './Home.css'
import BodyLeft from '../Component/LeftPane/BodyLeft'
import RightPane from '../Component/RightPane/RightPane'
export default function Home() {
  return (
    <div>
      <Nav/>
      <div className="BottomContainer">
        <BodyLeft/>
        <RightPane/>
      </div>
      
    </div>
  )
}
