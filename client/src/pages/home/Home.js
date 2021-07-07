import React from 'react'
import "./home.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

function Home() {
    return (
        <div className = 'homeContainer'>
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    )
}

export default Home
