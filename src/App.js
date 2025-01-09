import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import './components/Component.css';
import {  Link, Navigate, Route, Routes } from 'react-router-dom';
import AllProjects from './pages/AllProjects/AllProjects';
import Header from './components/Header';
import AllMedia from './pages/Media/AllMedia';

function App() {
  return (
    <>
    <Header>
      <Link to="/home">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/media">Media</Link>
    </Header>


    <Routes>
      <Route path='/' element={<Navigate to={"/home"} />} />
      <Route path='/' element={<Home /> } />
      <Route path='/home' element={<Home /> } />
      <Route path='/projects' element={<AllProjects /> } />
      <Route path='/media' element={<AllMedia /> } />
    </Routes>
      

    </>
  );
}

export default App;


