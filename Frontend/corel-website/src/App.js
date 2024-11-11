// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TimeSheet from './pages/TimeSheet';
import CompRequest from './pages/CompRequest';
import Menus from './pages/Menus';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timesheet" element={<TimeSheet />} />
            <Route path="/comp-request" element={<CompRequest />} />
            <Route path="/menus" element={<Menus />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
