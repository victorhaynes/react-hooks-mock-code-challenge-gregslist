import React, {useState} from "react";

function ListingCard({individualListing, handleDelete}) {
  
  // 1) Initialize what is being tracked in state
  const [isFavorited, setIsFavorited] = useState(false)
  // 2) attach event listner, define callback
  function handleFavorite(){
    setIsFavorited( (oldFavoritedValue) => !oldFavoritedValue )
  }


  // Function to delete object clicked (allListings[0], allListings[1] etc. from JSON server)
  function deleteObject(){
    fetch(`http://localhost:6001/listings/${individualListing.id}`, {
      method: 'DELETE',
    })
    .then( r => r.json())
    .then( () => handleDelete(individualListing) )
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={individualListing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{individualListing.description}</strong>
        <span> · {individualListing.location}</span>
        <button className="emoji-button delete" onClick={deleteObject}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
