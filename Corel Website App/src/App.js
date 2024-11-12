// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ComponentLibrary from './pages/ComponentLibrary/ComponentLibrary';
import SysEng from './pages/SysEng';
import Mfg from './pages/Mfg';
import Stores from './pages/Stores';
import Purchase from './pages/Purchase';
import TimeSheet from './pages/TimeSheet';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component-library" element={<ComponentLibrary />} />
          <Route path="/sys-eng" element={<SysEng />} />
          <Route path="/mfg" element={<Mfg />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/time-sheet" element={<TimeSheet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
