import React from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import SchemeCard from './components/SchemeCard';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <SearchBar />
        <div className="scheme-list">
          <SchemeCard />
          <SchemeCard />
          <SchemeCard />
        </div>
      </div>
    </div>
  );
};

export default App;
