import React, { useState } from 'react';
import './Sidebar.css';

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilterOptions = (id) => {
    setActiveFilter(activeFilter === id ? null : id);
  };

  return (
    <div className="filter-content">
      <h2>Filter By <span style={{ float: "right", color: "green", cursor: "pointer" }}>Reset Filters</span></h2>

      <div className="filter-group">
        <label>State</label>
        <select>
          <option>Maharashtra</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Ministry Name</label>
        <select>
          <option>Ministry of Agriculture and Farming</option>
        </select>
      </div>

      <div className="filter-group" onClick={() => toggleFilterOptions('Residence')}>
        <label>Residence</label>
        <div className={`filter-options ${activeFilter === 'Residence' ? 'active' : ''}`}>
          <label><input type="checkbox" /> Both</label>
          <label><input type="checkbox" /> Rural</label>
        </div>
      </div>
      <div className="filter-group" onClick={() => toggleFilterOptions('Benefit Type')}>
        <label>Benefit Type</label>
        <div className={`filter-options ${activeFilter === 'Benefit Type' ? 'active' : ''}`}>
          <label><input type="checkbox" /> Cash</label>
          <label><input type="checkbox" /> Composite</label>
          <label><input type="checkbox" />In Kind</label>
        </div>
      </div>

      <div className="filter-group" onClick={() => toggleFilterOptions('DBT Scheme')}>
        <label>DBT Scheme</label>
        <div className={`filter-options ${activeFilter === 'DBT Scheme' ? 'active' : ''}`}>
          <label><input type="checkbox" /> No</label>
          <label><input type="checkbox" /> Yes</label>
        </div>
      </div>
      <div className="filter-group" onClick={() => toggleFilterOptions('Application Mode')}>
        <label>Application Mode</label>
        <div className={`filter-options ${activeFilter === 'Application Mode' ? 'active' : ''}`}>
          <label><input type="checkbox" />Offline</label>
          <label><input type="checkbox" />Online</label>
        </div>
      </div>

    </div>
  );
};

export default Filters;
