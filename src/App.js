import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './components/Component.css';
import assets from './assets/assets';

function App() {
  return (
    <>
      <Routes>
        <Route path= '/' element={<Navigate to='/home' />} />
        <Route path= '/home' element={<Home />} />
      </Routes>

      
    </>
  );
}

export default App;
