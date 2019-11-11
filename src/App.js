import React from 'react';
import Navigation from "./views/home/navigation";
import Search from "./views/home/search";
import Main from "./views/home/mainSection";

import './App.css';

function App() {
  return (
    <div className="App">
      
        <Navigation />
        <Search />
        <Main />
    </div>
  );
}

export default App;
