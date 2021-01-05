import React from 'react';
import ListItem from './List/ListItem';
import List from './List/List'
import './App.css';

function App() {
  return (
    <div className="App">
      <List>
        <ListItem />
      </List>
    </div>
  );
}

export default App;
