import React from 'react'
import './online.css'

const Online = ( {user} ) => {
  return (
    
    <li className="rightbar__friend">
        <div className="rightbar__profile__img__container">
            <img src={user.profile_picture} alt="" className="rightbar__profile__img" />
            <span className="rightbar__online"></span>
        </div>
        <span className='rightbar__username'>{user.username}</span>
    </li>

  )
}

export default Online