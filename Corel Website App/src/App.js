// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SysEng from './pages/SysEng';
import Mfg from './pages/Mfg';
import Stores from './pages/Stores';
import Purchase from './pages/Purchase';
import TimeSheet from './pages/TimeSheet';
import './App.css';

function App() {
  const [headerSelection, setHeaderSelection] = useState("componentLibrary");
  const [sidebarSelection, setSidebarSelection] = useState("home");

  return (
    <Router>
      <Header headerSelection={headerSelection} setHeaderSelection={setHeaderSelection} />
      <div className="content">
        <Routes>
        <Route path="/" element={<Navigate to="/component-library" replace />} />
          <Route
            path="/component-library"
            element={
              <div className="main-container">
                <Sidebar sidebarSelection={sidebarSelection} setSidebarSelection={setSidebarSelection} />
                <MainContent selectedAction={sidebarSelection} />
              </div>
            }
          />
          <Route path="/sys-eng" element={<SysEng />} />
          <Route path="/mfg" element={<Mfg />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/timesheet" element={<TimeSheet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
