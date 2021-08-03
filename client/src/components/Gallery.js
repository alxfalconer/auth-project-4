import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export function Gallery() {

  useEffect(() => {
    fetchData();
  },[]);

  const [artworks, setData] = useState([]); 

  const fetchData = async () => {
    const data = await fetch('https://api.artic.edu/api/v1/artworks?limit=50')

    const artworks = await data.json()
    console.log(artworks.data);
    setData(artworks.data);
  }
  

  return (
    
    <div>
      <h1>Our Artworks:</h1>
      <h3 id="learnmore">Click the pieces you'd like to learn more about.</h3>
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


// import React, {useState, useEffect} from 'react';
// // import {ReviewList} from './ReviewList'
// import { Link } from 'react-router-dom';

// export function Gallery() {

//   useEffect(() => {
//       fetchArt();
//   },[]);

//   const [artworks, setData] = useState([]);

//   const fetchArt = async () => {
//     const data = await fetch('https://api.artic.edu/api/v1/artworks?limit=10')
//     const artworks = await data.json()
//     setData(artworks.data);  
//   }
  
// return (
//     <div>
//         <br></br>
//         <h1 style={{fontSize: "20px"}}>Peruse our gallery.</h1>
//         <h1 style={{fontSize: "20px"}}>Purchase what you please.</h1>
//         <br></br>
//       {artworks.map(data => (
//         <h2 fetchArt={fetchArt} className="artworks" key={data.id}>
//             <Link to={`gallery/${data.id}`}></Link>
//           <img id="image" src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt=""/>
//           {/* <ReviewList /> */}
//           </h2>
//       ))}
//     </div>
//   );
// }