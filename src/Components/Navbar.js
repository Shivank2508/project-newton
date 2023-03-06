import React from 'react'
import './Navbar.css'
import { BsPerson, BsSearch } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div>
            <div className='navbar-container'>
                <div className='navbar-name'>
                    <h1>Reddit clone</h1>
                </div>
                <div className='navbar-input'>
                    <BsSearch />
                    <input type="text" placeholder='Search Something' />
                </div>
                <div className='navbar-login'>

                    <button type="button">Login</button>
                    <BsPerson />
                </div>

            </div>
        </div>
    )
}

export default Navbar