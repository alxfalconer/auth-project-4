
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Like from './Like';
const api = "http://localhost:3001/"

export function Detail({ match }) {
    useEffect(() => {
      fetchData();
    //   console.log(match);
  },[]);

  const [detail, setDetail] = useState({
    data: {},
  });

//   const [collectionItems, setCollectionItems] = useState([])

//   const onAdd = (detail) => {
//     const exist = collectionItems.find(x => x.id === detail.id);
//     if(exist) {
//         setCollectionItems([...collectionItems, {...detail}])
//     }
// }

  const fetchData = async () => {
      const fetchData = await fetch(
          `https://api.artic.edu/api/v1/artworks/${match.params.id}`
          );
      const detail = await fetchData.json();
      setDetail(detail);
    //   console.log(detail);
  };

  const artSubmit = () => {
  
  const data = { 
      artwork: {
      "title": detail.data.title,
      "artist_title": detail.data.artist_title,
      "place_of_origin": detail.data.place_of_origin,
      "date_display": detail.data.date_display,
      "medium_display": detail.data.medium_display,
      "image_id": detail.data.image_id
      }
    };
  fetch(api + "artworks", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
}).then((result) => {
    result.json().then((res) => {
      console.log(res)
    })
  })
}

//   const deleteArtwork = (id) => {
//     const deleteArr = [...detail].filter(detail => detail.id !== id);
//     fetch(api + `artworks/${id}`, {
//       method: 'DELETE'
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.log(resp)
//         setDetail(deleteArr)
//       })
//     })
//   }

  return (
    <div>
        <u>
        <h1 id="title">{detail.data.title}</h1>
        </u>
        <h2 id="artist">{detail.data.artist_title}</h2>
        <h3 id="origin">{detail.data.place_of_origin}, {detail.data.date_display}</h3>
        <h4 id="materials">{detail.data.medium_display}</h4>
        <img className="small" id="image" src={`https://www.artic.edu/iiif/2/${detail.data.image_id}/full/843,/0/default.jpg`} alt=""/> 
        <br></br>
        <br></br>
        <br></br>
        {/* <button onClick={onAdd} className="poem-button">Add</button>
        <Like artworkId={artwork.id}/> */}
        <Link onClick={artSubmit()}  className="poem-button">Add to Collection</Link>
        {/* <Collection detail={detail} onAdd={onAdd} deleteArtwork={deleteArtwork}/> */}
        <br></br>
        <br></br>
        <br></br>

    </div>
  );
}

// export default Detail;

// import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';


// export const Detail = ({ match }) => {
//     const [details, setData] = useState({
//     data: {},
//   }); 

//   useEffect(() => {
//     fetch(`https://api.artic.edu/api/v1/artworks/${match.params.id}`)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         setData(data);
//     });
// }, []);

 
//   return (
//     <div>
//         <u>
//        <h1 id="title">{details.title}</h1>
//         </u>
//         <h2 id="artist">{details.artist_title}</h2>
//         <h3 id="origin">{details.place_of_origin}, {details.date_display}</h3>
//         <h4 id="materials">{details.medium_display}</h4>
//         <img id="image" src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg`} alt=""/> 
//         <p></p>
//         <Link to="/collection">Add to Collection</Link>
//         <p></p>

//     </div>
//   );
// }