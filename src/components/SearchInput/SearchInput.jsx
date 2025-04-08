import { MagnifyingGlass } from "phosphor-react";
import React, { useState } from 'react';
import './SearchInput.css';

const SearchInput = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`search-container ${focused ? 'focused' : ''}`}>
      <input
        type="text"
        placeholder="Buscar..."
        className="search-input"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <span className="search-icon">
        <MagnifyingGlass size={20} />
      </span>
    </div>
  );
};

export default SearchInput;
