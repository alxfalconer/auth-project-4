import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom"
// const api = "http://localhost:3001/"

export function Detail({ match, userId}) {
    useEffect(() => {
      fetchData();
  },[]);

  // const history = useHistory()
 
  const [detail, setDetail] = useState({
    data: {}, userId
  });

  const fetchData = async () => {
      const fetchData = await fetch(
          `https://api.artic.edu/api/v1/artworks/${match.params.id}`
          );
      const detail = await fetchData.json();
      setDetail(detail);
  };

  const [collection, setCollection] = useState({});

  const artSubmit = ({userId}) => {
    fetch("/collections")
    .then((res) => res.json())
    .then((res) => setCollection(res))
    .catch((err) => console.log("error = ", err));

    // e.preventDefault();
  const data = { 
    "title": detail.data.title,
    "artist_title": detail.data.artist_title,
    "place_of_origin": detail.data.place_of_origin,
    "date_display": detail.data.date_display,
    "medium_display": detail.data.medium_display,
    "image_id": detail.data.image_id,
    "user_id": userId,
    "collection_id": collection.id
    };
  fetch("/artworks", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
}).then((result) => {
    result.json().then((res) => {
      console.log(res)
      window.alert("Added!")
      // history.push("/gallery") 
    })
  })
}


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
        <button onClick={artSubmit} className="poem-button">Add to Collection?</button>
        <br></br>
        <br></br>
        <br></br>

    </div>
  );
}

