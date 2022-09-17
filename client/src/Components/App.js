import '../App.css';
import React from 'react'
import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Explore from './Explore';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import User from './User';


function App() {

  const [isSignedIn, setIsSignedIn] = useState(false)



  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Landing />}></Route>
        
        <Route exact path='/login' element={<Login />}></Route>

        <Route exact path='/signup' element={<Signup />} setIsSignedIn={setIsSignedIn}></Route>

        <Route exact path='/explore' element={<Explore />}></Route>

        <Route exact path='/about' element={<About />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
