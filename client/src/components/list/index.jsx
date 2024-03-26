// src/List.js
import React, { useState } from 'react';
import Card from '../card/index';

const List = ({ list }) => {
  const [newCardTitle, setNewCardTitle] = useState('');

  const handleNewCard = async () => {
    const response = await fetch(`/api/boards/${list.id}/cards`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ title: newCardTitle }),
     });
    const newCard = await response.json();
    // Update the list to include the new card
    // This might involve updating the state in the parent component or using a state management library
   };

   return (
    <div className="list">
      <h2>{list.title}</h2>
      {list.cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
      <input
        type="text"
        value={newCardTitle}
        onChange={(e) => setNewCardTitle(e.target.value)}
      />
      <button onClick={handleNewCard}>Add Card</button>
    </div>
 );
};

export default List;
