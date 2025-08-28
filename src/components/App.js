import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import CCEmitPage from '../pages/CCEmitPage/CCEmitPage';
import '../styles/App.css';
import CCKEmitPage from '../pages/CCKEmitPage/CCKEmitPage';
import ClubsPage from '../pages/ClubsPage/ClubsPage';
import ITCommunityPage from '../pages/ITCommunityPage/ITCommunityPage';
import CSCPage from '../pages/CSCPage/CSCPage';
import BCPage from '../pages/BCPage/BCPage';
import DebatesPage from '../pages/DebatesPage/DebatesPage';
import EmeetingPage from '../pages/EmeetingPage/EmeetingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/pages/ccemit" element={<CCEmitPage />}/>
        <Route path="/pages/cckemit" element={<CCKEmitPage />}/>
        <Route path="/pages/clubs" element={<ClubsPage/>}/>
        <Route path='/pages/clubs/itcommunity' element={<ITCommunityPage/>} />
        <Route path="/pages/clubs/csc" element={<CSCPage/>} />
        <Route path="/pages/clubs/bc" element={<BCPage/>} />
        <Route path="/pages/clubs/debates" element={<DebatesPage/>} />
        <Route path="/pages/clubs/emeeting" element={<EmeetingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;