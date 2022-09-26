import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'



export default function Header() {

    //do I have signed in state in header or app?
    const [signedIn, setSignedIn] = useState(false)
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
