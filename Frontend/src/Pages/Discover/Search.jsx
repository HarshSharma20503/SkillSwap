import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './Search.css';

const Search = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div className={`search-bar ${isActive ? 'active' : ''}`}>
      <input
        type="text"
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <FiSearch className="search-icon" />
    </div>
  );
};

export default Search;
