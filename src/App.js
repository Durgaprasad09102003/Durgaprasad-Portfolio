import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import './components/Component.css';
import assets from './assets/assets';
import {  Navigate, Route, Routes } from 'react-router-dom';
import AllProjects from './pages/AllProjects/AllProjects';
import Header from './components/Header';
import AllMedia from './pages/Media/AllMedia';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path="/home" element={
          <>
            <Header /> 
            <Home />
          </>
        } />
        <Route path='/projects' element={
          <>
            <Header />
            <AllProjects />
          </>
        } />
        <Route path='/media' element={
          <>
            <Header />
            <AllMedia />
          </>
        } />
      </Routes>
      

    </>
  );
}

export default App;


