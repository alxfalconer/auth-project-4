import React, {useState, useEffect} from 'react';
import {ReviewList} from './ReviewList'

export function Gallery() {

  useEffect(() => {
      fetchArt();
  },[]);

  const [artworks, setData] = useState([]);

  const fetchArt = async () => {
    const data = await fetch('https://api.artic.edu/api/v1/artworks?limit=10')
    const artworks = await data.json()
    setData(artworks.data);  
  }
  
return (
    <div>
        <br></br>
        <h1 style={{fontSize: "20px"}}>Peruse our gallery.</h1>
        <h1 style={{fontSize: "20px"}}>Purchase what you please.</h1>
        <br></br>
      {artworks.map(data => (
        <h2 fetchArt={fetchArt} className="artworks" key={data.id}>
          <img id="image" src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt=""/>
          <ReviewList />
          </h2>
      ))}
    </div>
  );
}