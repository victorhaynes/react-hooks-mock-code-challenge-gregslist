import React, {useState} from "react";
import ListingCard from "./ListingCard";
import {v4 as uuid} from "uuid"

function ListingsContainer({allListings, handleDelete}) {


  return (
    <main>
      <ul className="cards">
        { allListings.map( (individualListing) => <ListingCard key={uuid()} individualListing={individualListing} handleDelete={handleDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
