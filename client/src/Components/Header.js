import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useContext } from 'react'
// import LoginContext from './SignInContext'



export default function Header() {
    
    
    return (
        <header className='header-bar'>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/">Good Hikes</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            
        </header>
    )
}
