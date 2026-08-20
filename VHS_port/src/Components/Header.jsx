import React from 'react'
import '../styles/App.css'
import { Link } from 'react-router-dom'
import logo from '../assets/viv-logo 1.svg'


function Header() {
    return (
        <div className="menu border-t-transparent border-white border-[8px] relative z-[9999]">
            <div className="logo">
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
            <div className="menu_items">
                <a className='no-menu-style text-white hover:text-[#bbbbbb]' href='#about'>About</a>
                <a className='no-menu-style text-white hover:text-[#bbbbbb]' href='https://github.com/vivek84835V' target='blank'>GitHub</a>
                <a className='no-menu-style text-white hover:text-[#bbbbbb]' href='#contact'>Contact</a>
                <Link to="/projects" className='menu-link' style={{ textDecoration: 'none', all: 'unset' }}><h5>Projects</h5></Link>
                <a className='hover:border border-white hover:bg-white hover:text-black animation:fadeIn 0.5s ease-in-out' href=''>SignUp</a>
            </div>
        </div>
    )
}

export default Header
