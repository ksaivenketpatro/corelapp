// src/components/Header.js
import React from 'react';
import './Header.css';

function Header({ headerSelection, setHeaderSelection }) {
  return (
    <header className="header">
      <div className="tabs">
        <button onClick={() => setHeaderSelection("componentLibrary")} className={headerSelection === "componentLibrary" ? "active" : ""}>
          Component Library
        </button>
        <button onClick={() => setHeaderSelection("sysEng")} className={headerSelection === "sysEng" ? "active" : ""}>
          Sys. Eng.
        </button>
        <button onClick={() => setHeaderSelection("mfg")} className={headerSelection === "mfg" ? "active" : ""}>
          Mfg.
        </button>
        <button onClick={() => setHeaderSelection("stores")} className={headerSelection === "stores" ? "active" : ""}>
          Stores
        </button>
        <button onClick={() => setHeaderSelection("purchase")} className={headerSelection === "purchase" ? "active" : ""}>
          Purchase
        </button>
        <button onClick={() => setHeaderSelection("timeSheet")} className={headerSelection === "timeSheet" ? "active" : ""}>
          Time Sheet
        </button>
      </div>
    </header>
  );
}

export default Header;
