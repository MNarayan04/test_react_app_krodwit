import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the list of items and the input field
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Handler function to add the item to the list
  const handleAddItem = () => {
    if (newItem.trim() === '') return; // If input is empty, do nothing

    setItems([...items, newItem]); // Add the new item to the list
    setNewItem(''); // Clear the input field
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>
      
      {/* Input field for adding new items */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      
      {/* Button to add the item to the list */}
      <div className='btn'><button onClick={handleAddItem}>Add Item</button></div>
      
      
      {/* Display the list of items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
