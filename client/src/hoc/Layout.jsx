import React from 'react'
import Header from '../components/header/Header'

function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className = "page_container">{children}</div>
        </div>
    )
}

export default Layout
