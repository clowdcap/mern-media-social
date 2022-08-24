import React from 'react'
import './share.css'

import { 
  PermMedia,
  Label,
  Room,
  EmojiEmotions
} from '@mui/icons-material'

const Share = () => {
  return (
    <div className='share'>
        <div className="share__wrapper">
          <div className="share__top">
            <img className='share__profile__img' src="/assets/person/1.jpeg" alt="" />
            <input type="text" placeholder="What's in your mind Safak?" 
              className="share__input" />
          </div>

          <hr className='share__hr'/>

          <div className="share__bottom">
            <div className="share__options">

              <div className="share__option">
                <PermMedia htmlColor="tomato" className='share__icon'/>
                <span className="share__option__text">Photo or Video</span>
              </div>

              <div className="share__option">
                <Label htmlColor="blue" className='share__icon'/>
                <span className="share__option__text">Tag</span>
              </div>

              <div className="share__option">
                <Room htmlColor="green" className='share__icon'/>
                <span className="share__option__text">Location</span>
              </div>

              <div className="share__option">
                <EmojiEmotions htmlColor="goldenrod" className='share__icon'/>
                <span className="share__option__text">Feelings</span>
              </div>

            </div>

            <button className='share__button'>Share</button>

          </div>
        </div>
    </div>
  )
}

export default Share