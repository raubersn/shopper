import React from 'react'
import Hello from '../Components/Hello/Hello';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

export const Shop = () => {
  return (
    <div>
      <Hello />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter/>
    </div>
  );
}
