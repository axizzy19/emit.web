import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import CCEmitPage from '../pages/CCEmitPage/CCEmitPage';
import '../styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/pages/ccemit" element={<CCEmitPage />}/>
      </Routes>
    </Router>
  );
};

export default App;