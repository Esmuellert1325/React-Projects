import React from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Data from './data';

export default function App() {
  const cardData = Data.map(item => {
    return (
      <Card 
        item = {item}
      />
    )
  }) 
  return (
    <div>
      <Navbar />
      {cardData}
    </div>
  )
} 