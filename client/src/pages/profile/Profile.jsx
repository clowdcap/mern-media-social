import React from 'react'
import './profile.css'

import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

const Profile = () => {
  return (
    <>
        <Topbar />

        <div className="profile center ">
            <Sidebar />

            <div className="profile__right">
                <div className="profile__right__top">

                    <div className="profile__cover">
                        <img className='profile__cover__img' src="/assets/post/3.jpeg" alt="" />
                        <img className='profile__user__img' src="/assets/person/7.jpeg" alt="" />
                    </div>

                    <div className="profile__info">
                        <h4 className='profile__info__name'>Jose Marinho</h4>
                        <span className='profile__info__desc'>Hello guys</span>
                    </div>
                </div>
                <div className="profile__right__bottom">
                    <Feed />
                    <Rightbar profile />
                </div>
            </div>
            
        </div>
      
    </>
  )
}

export default Profile