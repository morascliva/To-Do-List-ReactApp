// src/App.js
import React from 'react';
import TodoList from './TodoList';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Commented out the logo and default React message */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* TodoList component */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
