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
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Protected Parent route for ComponentLibrary */}
          <Route path="/componentlibrary" element={
            <ProtectedRoute>
              <ComponentLibrary />
            </ProtectedRoute>
          }>
            <Route path="searchengine" element={
              <ProtectedRoute>
                <SearchEngine />
              </ProtectedRoute>
            } />
            <Route path="requestengine" element={
              <ProtectedRoute>
                <RequestEngine />
              </ProtectedRoute>
            } />
            <Route path="productform" element={
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            } />
          </Route>
          
          <Route path="/syseng" element={
            <ProtectedRoute>
              <SysEng />
            </ProtectedRoute>
          } />
          <Route path="/mfg" element={
            <ProtectedRoute>
              <Mfg />
            </ProtectedRoute>
          } />
          <Route path="/stores" element={
            <ProtectedRoute>
              <Stores />
            </ProtectedRoute>
          } />
          <Route path="/purchase" element={
            <ProtectedRoute>
              <Purchase />
            </ProtectedRoute>
          } />
          <Route path="/timesheet" element={
            <ProtectedRoute>
              <TimeSheet />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;