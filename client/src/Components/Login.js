import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login({isSignedIn, setIsSignedIn}) {

  const [errors, setErrors] = useState([])
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()
  const { username, password } = formData

  
  function handleChange(e) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function updateLoginState() {

  }


  //double check this
  function handleSubmit(e) {
    e.preventDefault()
    const user = {
      username, password
    }
    console.log(user)
    fetch('/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(setIsSignedIn(true))
      .then(navigate('/explore'))
      .catch(error => setErrors(error))
      .then(console.log("errors", errors))
  }

  
  return (
    <main className="login-page">
      
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          
          <label>Username</label>
          <input type="text" name="username" value={username} onChange={handleChange} />
          
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} />
          <button type="submit">Login</button>
        
        </form>
      </div>
      {isSignedIn? "you are signed in" : "signin now"}
      {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}
    </main>
    //display map over errors array
    //set timeout to display errors, then reset state back to empty array, trigger rerender

  );
}
