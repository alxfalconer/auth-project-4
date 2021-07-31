import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList'

function Gallery() {

  useEffect(() => {
      fetchArt();
  },[]);

  const [artworks, setData] = useState([]);

  const fetchArt = async () => {
    const data = await fetch('https://api.artic.edu/api/v1/artworks?limit=1')
    const artworks = await data.json()
    setData(artworks.data);  
  }
  
return (
    <div>
        <br></br>
        <h1 style={{fontSize: "20px"}}>Take your time.</h1>
        <h1 style={{fontSize: "20px"}}>Contribute a line.</h1>
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

export default Gallery;