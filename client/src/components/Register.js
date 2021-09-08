import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import sunnycollector from "./sunnycollector.gif"

// const api = "http://localhost:3001/"

export const Register = ({ setUser }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const history = useHistory()

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value)
    if (e.target.name === "password") setPassword(e.target.value)
    if (e.target.name === "name") setName(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {
      method: "POST",
      headers: {
            "Content-type": "application/json",
            Accepts: "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            name
          
        })
      }
    fetch("/register", newUser,
    {
      credentials: 'include'  
    }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUser(data)
        history.push("/login") 
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='login-form'>
      <h1>Want to become a Collector?</h1>
      <h3><img className="sunnycollector" src={sunnycollector} alt="sunnycollector"/></h3>
      <h2>Register below to access the gallery.</h2>
      <form onSubmit={handleRegister} className='poem-form'>
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
          <button onClick={handleRegister} className='poem-button'>
            Submit
          </button>
    </form>
    </div>
  )
}