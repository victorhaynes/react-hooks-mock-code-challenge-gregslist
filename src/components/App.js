import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useEffect, useState } from "react";


function App() {

  // Initialize state for the list of listings
  const [allListings, setAllListings] = useState([])

  // Fetch the listings
  useEffect( () => 
  fetch("http://localhost:6001/listings")
  .then(res => res.json())
  .then( (listingsArray) => setAllListings(listingsArray))
  , [])

  
  // Here, we are passing back up the individualListing from the card component, filtering state array to exclude what we deleted/passed up
  function handleDelete(individualListing){
    setAllListings( (oldListings) => oldListings.filter( (existingListing) => existingListing !== individualListing ))
  }


  return (
    <div className="app">
      <Header />
      <ListingsContainer
        allListings={allListings}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
