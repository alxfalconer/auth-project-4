import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Profile } from './components/Profile'
import {Gallery} from './components/Gallery';
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import React, { useState, useEffect } from 'react'
import './App.css'
const api = "http://localhost:3001/"

function App( props ) {
  const [user, setUser] = useState({})
  const [loggedin, setLoggedin] = useState(false)

  useEffect(() => {  //matches user in system(if one) with session user, passes user info
    findMe()
  }, [])

  const findMe = () => {    
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        console.log("current user: ", data)
        if (!data.error) {
          setUser(data)
          setLoggedin(true)
            }
          }  
        )
      .catch((err) => console.log("error =", err))
  }

   const handleLogout = (e) => {
    e.preventDefault();
     const delObj = {
       method: "DELETE"
      }
      fetch(api + "logout", delObj)
      .then((res) => res.json())
      .then((res) => {
        setLoggedin(false)
        setUser({})
        console.log(res)
      })
      .catch((err) => console.log("error =", err))
   }

  return (
      <Router>
        <div className="App">
          <div className="container">
              <NavBar loggedin={loggedin} handleLogout={handleLogout} />
              <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/login">
                  <Login setUser={setUser} setLoggedIn={setLoggedin} />
                </Route>
                <Route exact path ="/register">
                  <Register setUser={setUser} setLoggedin={setLoggedin} />  
                </Route>
                <Route exact path ="/profile"> 
                  {loggedin ? <Profile user={user} setLoggedin={setLoggedin} /> 
                        : <Login setUser={setUser} setLoggedIn={setLoggedin} /> }
                </Route> 
                <Route exact path="/gallery" component={Gallery}/>
                {/* <Route component={NoMatch} /> */}
              </Switch>
              <Footer />
          </div>
      
        </div>
      </Router>
  );
}

export default App;