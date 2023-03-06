import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-feed'>
                <h3>FEED</h3>
                <ul>
                    <li>Home</li>
                    <li>Popular</li>
                </ul>
                <h3>TOPICS</h3>
                <ul>
                    <li>Gaming</li>
                    <li>Sports</li>
                    <li>Crypto</li>
                    <li>Politics</li>
                    <li>More</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar