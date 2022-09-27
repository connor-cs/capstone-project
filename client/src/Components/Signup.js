import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  
  const [errors, setErrors] = useState([])
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    })
      .then(res=>res.json())
      .catch(errors=>setErrors(errors))
      .then(console.log(errors))
    // fetch("/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password
    //   })
    // })
    // .then(res=>res.json())
    // .then
  }
  
  //this needs tested
  //console log on values from the onChange to make sure they are as expected
  return (
    <main className="signup-page">
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        <label>Password:</label>
        <input type="password" value ={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Signup</button>
      </form>
    </main>
  );
}
