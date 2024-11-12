// src/components/Table.js
import React from 'react';

// Dummy data for the table
const dummyData = [
  { id: 1, name: 'Component A', description: 'Description for Component A' },
  { id: 2, name: 'Component B', description: 'Description for Component B' },
  { id: 3, name: 'Component C', description: 'Description for Component C' },
];

function Table() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
