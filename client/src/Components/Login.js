import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {

  const [errors, setErrors] = useState([])
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const { username, email, password } = formData

  function handleChange(e) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  //double check this
  function handleSubmit(e) {
    e.preventDefault()
    const user = {
      username, email, password
    }
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(navigate('/explore'))
      .catch(error => setErrors(error))
  }

  
  return (
    <main className="login-page">
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="name" value={username} onChange={handleChange} />
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
      {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}
    </main>
    //display map over errors array
    //set timeout to display errors, then reset state back to empty array, trigger rerender

  );
}
