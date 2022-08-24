import React from 'react'
import './close_friends.css'

const Close_Friends = ( {user} ) => {
  return (
    <li className="sidebar__friend">
        <img className='sidebar__friend__img' src={user.profile_picture} alt="" />
        <span className='sidebar__friend__name'>{user.username}</span>
    </li>

  )
}

export default Close_Friends