import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"
const api = "http://localhost:3001/"

export const Login = ({ setUser, setLoggedIn }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value)
    if (e.target.name === "password") setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // Send Login request to our backend
    const loginObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
    fetch(api + "login", loginObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!!data.id) {
          // set the current user to some higher state
          setUser(data)
          setLoggedIn(true)
          history.push("/collection")
        } 
        else 
        window.alert("Stranger danger! We don't recognize that email and/or password. Please try again or click the button below to register.")
        setEmail("")
        setPassword("")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='login-form'>
      <h1>So we meet again...</h1>
          <form onSubmit={handleLogin} className='poem-form'>
          <input
            placeholder='Enter email'
            value={email}
            onChange={handleChange}
            name='email'
            className='poem-input'
            type="email"
            required
          />
            <input
            type="password" 
            placeholder='Enter password'
            value={password}
            onChange={handleChange}
            name='password'
            className='poem-input'
          />
          <button onClick={handleLogin} className='poem-button'>
            Login
          </button>
    </form>
    <br></br>
    <Link className= "poem-button" to="/register">New here? Register!</Link>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    </div>
  )
}