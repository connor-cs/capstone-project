import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import styled from 'styled-components'

export default function Landing() {
  
  const navigate = useNavigate()
  
  return (
    <>
      <main className='landing-page'>
        <div className='welcome-message'>
          <h2>Welcome to Good Hikes</h2>
          <button className='explore-btn' onClick={()=>navigate('/explore')}>Explore trails</button>
        </div>
      </main>
      <p>2022 Connor Cyphers</p>
    </>
  )
}

// const Image = styled.img.attrs( () => ({
//     src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
// }))`
//     position: center;
//     object-fit: fill
//     `