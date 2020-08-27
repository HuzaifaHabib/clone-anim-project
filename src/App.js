import React from 'react';
import './App.css';
import NavBar from './Components/Navbar'
import {HomeComponent} from './Components/Home/HomeComponent'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeComponent />
    </div>
  );
}

export default App;
