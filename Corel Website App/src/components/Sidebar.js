// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar({ sidebarSelection, setSidebarSelection }) {
  return (
    <aside className="sidebar">
      <button
        onClick={() => setSidebarSelection("home")}
        className={sidebarSelection === "home" ? "active" : ""}
      >
        Home
      </button>
      <button
        onClick={() => setSidebarSelection("compRequest")}
        className={sidebarSelection === "compRequest" ? "active" : ""}
      >
        Comp. Request
      </button>
      <button
        onClick={() => setSidebarSelection("menus")}
        className={sidebarSelection === "menus" ? "active" : ""}
      >
        Menus
      </button>
    </aside>
  );
}

export default Sidebar;
