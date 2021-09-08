import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
const api = "http://localhost:3001/"

export const Collection = ({user, setLoggedIn}) => {
    const [collection, setCollection] = useState({})
    const history = useHistory()

    useEffect(() => fetchCollections(), []);

    const fetchCollections = () => {
      fetch(api + "users/" + user.id + "/collections",

      )
        .then((res) => res.json())
        .then((res) => setCollection(res))
        .catch((err) => console.log("error = ", err));
    };
    
    const deleteCollection = (collectionID) => {   
        console.log("DELETE WORKING");
        const delObj = {
          method: "DELETE",
        };
        fetch(api + "collections/" + collectionID, delObj
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setLoggedIn(true)
          })
          .catch((err) => console.log("delete err = ", err));
      };
  
    

return (
    <div>
        <h1>{user.name}'s Collection</h1>
        <h3>Navigate to the gallery to add artworks or click the button below to create a collection.</h3>
        <button onClick={deleteCollection} className='poem-button'>Delete Collection?</button>
        <br></br>
        <br></br>
    </div>
    )
}