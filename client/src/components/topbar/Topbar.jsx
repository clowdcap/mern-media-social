import React from 'react'
import './topbar.css'
import { 
  Search, 
  Person, 
  Chat, 
  Notifications 
} from '@mui/icons-material'
 
const Topbar = () => {
  return (
    
    <div className='topbar__container'>

      <div className='topbar__left'>
        <span className="logo">José Social</span>
      </div>
      
      <div className='topbar__center'>
        <div className="search__bar">
          <Search className="search__icon" />
          <input placeholder="Search for friend, post or video"
            className="search__input"/>
        </div>
      </div>

      <div className='topbar__right'>
        <div className="topbar__links">
          <span className="topbar__link">Homepage</span>
          <span className="topbar__link">Timeline</span>
        </div>

        <div className="topbar__icons">
          <div className="topbar__icon__item">
            <Person />
            <span className="topbar__icon__badge">1</span>
          </div>

          <div className="topbar__icon__item">
            <Chat />
            <span className="topbar__icon__badge">1</span>
          </div>

          <div className="topbar__icon__item">
            <Notifications />
            <span className="topbar__icon__badge">1</span>
          </div>
        </div>

        <img src="/assets/person/1.jpeg" alt="" className="topbar__img" />
      </div>

    </div> 
   
  )
}

export default Topbar