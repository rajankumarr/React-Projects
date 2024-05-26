import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

function Player() {
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width={'90%'} height={'90%'} src="https://www.youtube.com/embed/OA_JPoQ9qaA?si=3Ix2eWrIib_79-2M" title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
