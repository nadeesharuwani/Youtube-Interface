import React from 'react'
import './RightTop.css'
export default function RightTop(props) {
  return (
      <div className='rightTop'>
        
          <div className="channel">
            <p>{props.channel}</p>
          </div>
        
      </div>
  )
}
