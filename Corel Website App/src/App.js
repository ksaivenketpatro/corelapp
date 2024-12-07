// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ComponentLibrary from './pages/ComponentLibrary';
import SysEng from './pages/SysEng';
import Mfg from './pages/Mfg';
import Stores from './pages/Stores';
import Purchase from './pages/Purchase';
import TimeSheet from './pages/TimeSheet';
import Home from './pages/Home';
import './App.css';

import SearchEngine from './pages/ComponentLibrary/Sidebar/SearchEngine';
import RequestEngine from './pages/ComponentLibrary/Sidebar/RequestEngine';
import ProductForm from './pages/ComponentLibrary/Sidebar/ProductForm';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Parent route for ComponentLibrary */}
          <Route path="/componentlibrary" element={<ComponentLibrary />}>
            <Route path="searchengine" element={<SearchEngine />} />
            <Route path="requestengine" element={<RequestEngine />} />
            <Route path="productform" element={<ProductForm />} />
          </Route>
          
          <Route path="/syseng" element={<SysEng />} />
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
