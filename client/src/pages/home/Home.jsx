import React from 'react'
import './home.css'

import Topbar from './../../components/topbar/Topbar'
import Sidebar from './../../components/sidebar/Sidebar'
import Feed from './../../components/feed/Feed'
import Rightbar from './../../components/rightbar/Rightbar'

const Home = () => {
  return (
    <>
      <Topbar />

      <div className="home__container center ">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>

      
    </>
  )
}

export default Home