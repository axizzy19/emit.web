import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import CCEmitPage from '../pages/CCEmitPage/CCEmitPage';
import '../styles/App.css';
import CCKEmitPage from '../pages/CCKEmitPage/CCKEmitPage';
import ClubsPage from '../pages/ClubsPage/ClubsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/pages/ccemit" element={<CCEmitPage />}/>
        <Route path="/pages/cckemit" element={<CCKEmitPage />}/>
        <Route path="/pages/clubs" element={<ClubsPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;