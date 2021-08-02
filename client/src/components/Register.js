import React, { useState } from "react"
import { useHistory } from "react-router-dom"

const api = "http://localhost:3001/"

export const Register = ({ setUser, setLoggedin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const history = useHistory()

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value)
    if (e.target.name === "password") setPassword(e.target.value)
    if (e.target.name === "name") setName(e.target.value)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    const signupObj = {
      method: "POST",
      headers: {
            "Content-type": "application/json",
            Accepts: "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            name
        }),
      }
      // console.log(signupObj)
    fetch(api + "signup", signupObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUser(data)
        setLoggedin(true)
        history.push("/") 
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='login-form'>
      <h1>Become a Collector</h1>
      <form onSubmit={handleSignup} className='poem-form'>
          <input
            placeholder='Enter email'
            value={email}
            onChange={handleChange}
            name='email'
            className='poem-input'
            type="email"
            required
          />
          <br></br>
            <input
            placeholder='Enter password'
            value={password}
            onChange={handleChange}
            name='password'
            className='poem-input'
            type="password"
            required
          />
          <br></br>
           <input
            placeholder='Enter username'
            value={name}
            onChange={handleChange}
            name='name'
            className='poem-input'
            required
          />
          <br></br>
          <br></br>
          <button onClick={handleSignup} className='poem-button'>
            Submit
          </button>
    </form>
    </div>
  )
}