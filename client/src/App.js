import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Collection } from './components/Collection'
import { Detail } from './components/Detail';
import {Gallery} from './components/Gallery';
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import React, { useState, useEffect } from 'react'
import './App.css'
const api = "http://localhost:3001/"

function App() {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedin] = useState(false)

  useEffect(() => {
    currentUser()
  }, [])

  const currentUser = () => {    
    fetch(api + "me", 
    {
      credentials: 'include'  
    }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("current user: ", data)
        if (!data.error) {
          setUser(data)
          setLoggedin(true)
            }
          })
      .catch((err) => console.log("error =", err))
  };

   const handleLogout = (e) => {
    e.preventDefault();
     const delObj = {
       method: "DELETE"
      };
      fetch(api + "logout", delObj)
      .then((res) => res.json())
      .then((res) => {
        setLoggedin(false)
        setUser({})
        window.alert("Adios!")
        console.log(res)
      })
      .catch((err) => console.log("error =", err))
   }

  return (
      <Router>
        <div className="App">
          <div className="container">
              <Nav loggedIn={loggedIn} handleLogout={handleLogout} />
                <Route exact path ="/" component={Home} />
                <Route exact path ="/login">
                  <Login setUser={setUser} setLoggedIn={setLoggedin} />
                </Route>
                <Route exact path ="/register">
                  <Register setUser={setUser} setLoggedin={setLoggedin} />  
                </Route>
                <Route exact path ="/collection"> 
                  {loggedIn ? (<Collection user={user} userId={user.id} setUser={setUser} setLoggedIn={setLoggedin}/> )
                        : (<Login setUser={setUser} setLoggedIn={setLoggedin} />)}
                </Route>
                <Route exact path="/artworks/:id" component={Detail} userId={user.id} setUser={setUser} setLoggedIn={setLoggedin}/>
                
                <Route exact path="/gallery">
                  {loggedIn ? (<Gallery user={user} userId={user.id} setUser={setUser} setLoggedIn={setLoggedin}/>)
                  : (<Register setUser={setUser}/>)}
                  </Route>
              <Footer />
          </div>
      
        </div>
      </Router>
  );
}

export default App;