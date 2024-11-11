// src/components/MainContent.js
import React from 'react';
import './MainContent.css';

function MainContent({ selectedAction }) {
  console.log("Selected Action:", selectedAction); // Debugging line

  let content;
  switch (selectedAction) {
    case "home":
      content = <p>Welcome to the Component Library Home Page.</p>;
      break;
    case "compRequest":
      content = <p>Here you can make a component request.</p>;
      break;
    case "menus":
      content = <p>This section contains various menus.</p>;
      break;
    default:
      content = <p>Select an option from the sidebar.</p>;
  }

  return <main className="main-content">{content}</main>;
}

export default MainContent;
