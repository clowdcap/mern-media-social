import React from 'react'
import './sidebar.css'
import { Users } from "../../dummyData"

import { 
    RssFeed, 
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from '@mui/icons-material'
import Close_Friends from '../close_friends/Close_Friends'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__wrapper">
            <ul className="sidebar__list">

                <li className="sidebar__list__item">
                    <RssFeed className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Feed</span>
                </li>

                <li className="sidebar__list__item">
                    <Chat className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Chats</span>
                </li>

                <li className="sidebar__list__item">
                    <PlayCircleFilledOutlined className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Videos</span>
                </li>

                <li className="sidebar__list__item">
                    <Group className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Groups</span>
                </li>

                <li className="sidebar__list__item">
                    <Bookmark className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Bookmarks</span>
                </li>

                <li className="sidebar__list__item">
                    <HelpOutline className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Questions</span>
                </li>

                <li className="sidebar__list__item">
                    <WorkOutline className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Jobs</span>
                </li>

                <li className="sidebar__list__item">
                    <Event className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Events</span>
                </li>

                <li className="sidebar__list__item">
                    <School className='sidebar__icon' />
                    <span className="sidebar__list__item__text">Courses</span>
                </li>
                
            </ul>

            <button className="sidebar__button">Show More</button>

            <hr className='siderbar__hr' />

            <ul className="sidebar__friend__list">
                
                {Users.map(u => (
                    <Close_Friends key={u.id} user={u} />
                ))}

                

            </ul>
        </div>
    </div>
  )
}

export default Sidebar