import React, { useEffect, useState } from "react";
import { Detail } from "../Components/Detail";

export const ArtContainer = ({ user }) => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => fetchArtworks(), []);       // Retrieves alerts for logged in user

  const fetchArtworks = () => {
    fetch("users/" + user.id + "/artworks")
      .then((res) => res.json())
      .then((res) => setArtworks(res))
      .catch((err) => console.log("error = ", err));
  };

  const renderArtworks = () => {              // Renders alerts
    if (!!artworks) {
      return artworks.map((artwork, id) => (
        <Detail
          key={id}
          name={artwork.title}
          title={artwork.artist_title}
          artworkID={artwork.id}
          deleteArtwork={deleteArtwork}
          updateArtwork={updateArtwork}
        />
      ));
    }
  };

  const deleteArtwork = (artworkID) => {          // Deletes alerts
    console.log("DELETE WORKING");
    const delObj = {
      method: "DELETE",
    };
    fetch("artworks/" + artworkID, delObj)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log("delete err = ", err));
  };

  const updateArtwork = (artworkID) => {         // Updates selected alert
    console.log("updateArtwork = ", artworkID);
    const updateObj = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        price: newPrice,
      }),
    };
    fetch("artworks/" + artworkID, updateObj)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log("delete err = ", err));
  };

  return (
    <div>
      <hr></hr>
      <br></br>
      {artworks.length === 0 ? (
        <h1>No Active Alerts</h1>
      ) : (
        <>
          <h2>Your Alerts</h2>
          {renderArtworks()}
        </>
      )}
    </div>
  );
};