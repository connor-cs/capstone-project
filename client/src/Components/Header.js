import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Signup from './Signup'



export default function Header({isSignedIn}) {

    //do I have signed in state in header or app?
    const [signedIn, setSignedIn] = useState(false)
    return (
        <header className='header-bar'>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/">Good Hikes</NavLink>
            <NavLink to="/login">{isSignedIn ? "Logout" : "Login"}</NavLink>
            <NavLink to="/signup">{isSignedIn ? "Account" : "Signup"}</NavLink>
            
        </header>
    )
}
