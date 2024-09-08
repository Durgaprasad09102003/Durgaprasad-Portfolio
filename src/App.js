import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Navigate, Route, Router, Routes } from 'react-router-dom';
=======
>>>>>>> 02a51f6 (update)
import Home from './pages/Home/Home';
import './components/Component.css';
import assets from './assets/assets';
import {  Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
<<<<<<< HEAD
    <Router basename='/Durgaprasad-Portfolio'>
      <Routes>
        <Route path= '/Durgaprasad-Portfolio' element={<Navigate to='/home' />} />
        <Route path= '/home' element={<Home />} />
      </Routes>
  </Router>

      
=======
      <Routes >
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
>>>>>>> 02a51f6 (update)
    </>
  );
}

export default App;


