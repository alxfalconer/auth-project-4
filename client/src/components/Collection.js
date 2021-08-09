import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
const api = "http://localhost:3001/"

export const Collection = () => {
    const [collection, setCollection] = useState("")
    const history = useHistory()

    const createCollection = () => {
        fetch(api + "collections", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(collection)
        }).then((res) => res.json())
        .then((res) => {
          console.log(res)
          setCollection({})
          history.push("/gallery") 
        })
      }

return (
    <div>
        <h1>Your Collection</h1>
        <button onClick={createCollection} className='poem-button'>Start Your Collection</button>
    </div>
    )
}