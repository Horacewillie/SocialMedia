import React from 'react'
import './header.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

function Header() {
    return (
        <div className = 'headerContainer'>
            <div className="headerLeft">
                <span className="logo">IjobaSocial</span>
            </div>
            <div className="headerCenter">
                <div className="searchbar">
                    <Search className = 'searchIcon'/>
                    <input placeholder = 'Search for Friends/Posts' className="searchInput" />
                </div>
            </div>
            <div className="headerRight">
                <div className="headerLinks">
                    <span className="headerLink">Homepage</span>
                    <span className="headerLink">Timeline</span>
                </div>
                <div className="headerIcons">
                    <div className="headerIconItem">
                        <Person />
                        <span className="headerIconBadge">1</span>
                    </div>
                    <div className="headerIconItem">
                        <Chat />
                        <span className="headerIconBadge">2</span>
                    </div>
                    <div className="headerIconItem">
                        <Notifications />
                        <span className="headerIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/Person/1.jpeg" alt="" className="headerImg" />
            </div>
        </div>
    )
}

export default Header
