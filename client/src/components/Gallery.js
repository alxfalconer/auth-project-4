import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const api = "http://localhost:3001/"

export function Gallery({user, userId, setLoggedIn}) {

  useEffect(() => {
    fetchArtwork();
  },[]);

  const [artworks, setData] = useState([]);
  const [collection, setCollection] = useState({})

  const fetchArtwork = async () => {
    const data = await fetch('https://api.artic.edu/api/v1/artworks?limit=50')

    const artworks = await data.json()
    // console.log(artworks.data);
    setData(artworks.data);
  }
  
  const createCollection = (e) => {
    e.preventDefault()
    fetch(api + "collections",
   {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify( {
            user_id: userId
        })
    }).then((res) => res.json())
    .then((data) => {
      console.log(data)
      setLoggedIn(true)
      setCollection(collection)
      window.alert("Collection created!")
      // history.push("/gallery") 
    })
  }

  return (
    
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h3>Peruse the gallery and click the artworks that pique your interest.</h3>

      <button onClick={createCollection} className='poem-button'>Click to Create Collection</button>
       
      {artworks.map(data => (
        <h2 className="artworks" key={data.id}><em>
          <Link to={`artworks/${data.id}`}>
          <img className="small" id="image" src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt=""/>
          </Link>
          </em>
          </h2>
      ))}
    </div>
  );
}