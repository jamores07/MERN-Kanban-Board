import React, { useState } from 'react';
import List from '../list/index';

const Board = ({ lists }) => {
 const [newListTitle, setNewListTitle ] = useState('');

 const handleNewList = async () => {
    const response = await fetch('/api/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newListTitle }),
    });
    const newList = await response.json();
    // Update the state to include the new list
    // This will require lifting state up or using a state management library
 };

   
 return (
    <div className="board">
      {lists.map(list => (
        <List key={list.id} list={list} />
      ))}
      <input
        type="text"
        value={newListTitle}
        onChange={(e) => setNewListTitle(e.target.value)}
      />
      <button onClick={handleNewList}>Add List</button>
    </div>
 );
};

export default Board;