import React, { useState } from 'react'
// import { useHistory } from "react-router-dom"
const api = "http://localhost:3001/"

export const Collection = ({user, userId}) => {
    const [collection, setCollection] = useState({})
    // const history = useHistory()

    const createCollection = () => {
        fetch(api + "collections", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify( {
                user_id: userId
            })
        }).then((res) => res.json())
        .then((data) => {
          console.log(data)
          setCollection(data)
        //   history.push("/gallery") 
        })
      }

return (
    <div>
        <h1>{user.name}'s Collection</h1>
        <h3>Navigate to our gallery to add artworks</h3>
        <h3>or click the button below to create a collection.</h3>
        <button onClick={createCollection} className='poem-button'>Start a New Collection</button>
    </div>
    )
}