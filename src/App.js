import React from 'react';
 import './App.css';
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Routes>
          <Route exact path='/' element ={<HomeScreen />} />
          <Route path='/test' element ={<h1>hello sir</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
