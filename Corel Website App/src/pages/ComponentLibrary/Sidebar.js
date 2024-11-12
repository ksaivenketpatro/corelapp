import React from 'react';

function Sidebar({ setSelectedContent }) {
  return (
    <aside className="sidebar">
      <button onClick={() => setSelectedContent("home")}>Search</button>
      <button onClick={() => setSelectedContent("compRequest")}>Request</button>
    </aside>
  );
}

export default Sidebar;