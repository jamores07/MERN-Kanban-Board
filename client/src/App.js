import React, { useState, useEffect } from 'react';
import Board from './components/board';
import { boardData } from './server/data/data';

function App() {
 const [lists, setLists] = useState([]);

 useEffect(() => {
    // Simulate fetching data from the server
    setLists(boardData);
 }, []);

 return (
    <div className="App">
      <Board lists={lists} />
    </div>
 );
}

export default App;

