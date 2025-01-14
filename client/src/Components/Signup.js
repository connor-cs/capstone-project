import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./LoggedInContext";

export default function Signup() {

  const [errors, setErrors] = useState([])
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const { setLoggedIn } = useContext(LoginContext)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (res.ok) {
          res.json()
          setLoggedIn(true)
          navigate('/explore')
        }
        else {
          res.json()
            .then(errors => setErrors([...errors.error]))
             .then(console.log(errors))
        }
      })
  }

  //this needs tested
  //console log on values from the onChange to make sure they are as expected
  return (
    <main className="signup-page">
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type="submit">Signup</button>
      </form>
      {errors ? errors.map(e => <div>{e}</div>) : null}
    </main>
  );
}
