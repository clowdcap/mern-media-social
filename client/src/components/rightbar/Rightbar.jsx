import React from 'react'
import './rightbar.css'
import { 
  MoreVert,
} from '@mui/icons-material'
import { Users } from "../../dummyData"
import Online from '../online/Online'

const Rightbar = ( {profile} ) => {

  const Home_Rightbar = () => {
    return (
      <>
        <div className="birthday__container">
          <img src="/assets/gift.png" className='birthday__img' alt="" />
          <span className='birthday__text'>
            <b>Luana França</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar__ad" />
        <h4 className="rightbar__title">Online Friends</h4>
        <ul className="rightbar__friend__list">
          { Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const Profile_Rightbar = () => {
    return (
      <>

        <h4 className="rightbar__title">User information</h4>

        <div className="rightbar__info">

          <div className="rightbar__info__item">
            <span className="rightbar__info__key">City:</span>
            <span className="rightbar__info__value">New York</span>
          </div>
          <div className="rightbar__info__item">
            <span className="rightbar__info__key">From:</span>
            <span className="rightbar__info__value">Madrid</span>
          </div>
          <div className="rightbar__info__item">
            <span className="rightbar__info__key">Relationship:</span>
            <span className="rightbar__info__value">Single</span>
          </div>

        </div>


        <h4 className="rightbar__title">User friends</h4>

        <div className="rightbar__followings">
          
          <div className="rightbar__following">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbar__following__img"
            />
            <span className="rightbar__following__name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbar__following__img"
            />
            <span className="rightbar__following__name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbar__following__img"
            />
            <span className="rightbar__following__name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbar__following__img"
            />
            <span className="rightbar__following__name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbar__following__img"
            />
            <span className="rightbar__following__name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbar__following__img"
            />
            <span className="rightbar__following__name">John Carter</span>
          </div>

        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbar__wrapper">
        {profile ? <Profile_Rightbar /> : <Home_Rightbar />}
      </div>
    </div>
  )
}

export default Rightbar