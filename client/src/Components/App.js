import '../App.css';
import React from 'react'
import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Explore from './Explore';
import { Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react'
import TrailsContainer from './TrailsContainer';
import LoginContext from './SignInContext';
import { isLoggedIn } from './SignInContext';


function App() {

  // const [isSignedIn, setIsSignedIn] = useState(false)

  console.log(LoginContext)

  return (
    <div className='App'>
      <LoginContext.Provider value={isLoggedIn.loggedIn}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Landing />}></Route>

          <Route exact path='/login' element={<Login />}></Route>

          <Route exact path='/signup' element={<Signup />} ></Route>

          <Route exact path='/explore' element={<Explore />}></Route>

          <Route exact path='/about' element={<About />}></Route>

          {/* <Route exact path = '/trails' element={<TrailsContainer/>}></Route> */}

        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
