import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CCEmitPage from '../pages/CCEmitPage/CCEmitPage';
import '../styles/App.css';
import CCKEmitPage from '../pages/CCKEmitPage/CCKEmitPage';
import ClubsPage from '../pages/ClubsPage/ClubsPage';
import ITCommunityPage from '../pages/ITCommunityPage/ITCommunityPage';
import CSCPage from '../pages/CSCPage/CSCPage';
import BCPage from '../pages/BCPage/BCPage';
import DebatesPage from '../pages/DebatesPage/DebatesPage';
import EmeetingPage from '../pages/EmeetingPage/EmeetingPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import { useAuth } from '../hooks/useAuth';
import customFavicon from "../assets/images/favicon.svg";
import useFavicon from '../hooks/useFavicon';
import HeadPersonalAccountPage from '../pages/HeadPersonalAccountPage/HeadPersonalAccountPage';
import MentorPersonalAccountPage from '../pages/MentorPersonalAccount/MentorPersonalAccount';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import RoleBasedRoute from '../components/RoleBasedRoute/RoleBasedRoute';

const App = () => {
  useFavicon(customFavicon);

  const { user, login, logout, loading } = useAuth();
  
  return (
    <Router>
      <Routes>
        {/* Публичные маршруты (доступны без авторизации) */}
        <Route path="/" element={<CCEmitPage />}/>
        <Route path="/pages/cckemit" element={<CCKEmitPage />}/>
        <Route path="/pages/clubs" element={<ClubsPage/>}/>
        <Route path='/pages/clubs/itcommunity' element={<ITCommunityPage/>} />
        <Route path="/pages/clubs/csc" element={<CSCPage/>} />
        <Route path="/pages/clubs/bc" element={<BCPage/>} />
        <Route path="/pages/clubs/debates" element={<DebatesPage/>} />
        <Route path="/pages/clubs/emeeting" element={<EmeetingPage/>} />
        <Route path="/pages/auth" element={<AuthPage onLogin={login}/>} />
        
        {/* Защищенные маршруты (требуют авторизации) */}
        <Route 
          path="/pages/head-personal-account" 
          element={
            <ProtectedRoute>
              <RoleBasedRoute allowedRoles={['admin', 'head']}>
                <HeadPersonalAccountPage />
              </RoleBasedRoute>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/pages/mentor-personal-account" 
          element={
            <ProtectedRoute>
              <RoleBasedRoute allowedRoles={['admin', 'teacher', 'mentor']}>
                <MentorPersonalAccountPage />
              </RoleBasedRoute>
            </ProtectedRoute>
          } 
        />

      </Routes>
    </Router>
  );
};

export default App;