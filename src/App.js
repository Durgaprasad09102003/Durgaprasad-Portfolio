import React from 'react';
import './App.css';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './components/Component.css';
import assets from './assets/assets';

function App() {
  return (
    <>
    <Router basename='/Durgaprasad-Portfolio'>
      <Routes>
        <Route path= '/Durgaprasad-Portfolio' element={<Navigate to='/home' />} />
        <Route path= '/home' element={<Home />} />
      </Routes>
  </Router>

      
    </>
  );
}

export default App;
