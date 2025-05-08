import { MagnifyingGlass } from "phosphor-react";
import React from 'react';
import './SearchInput.css';

const SearchInput = ({ onFocus, onBlur,isFocused }) => {

  return (
    <div className={`search-container ${isFocused ? 'focused' : ''}`}>
       <input
        type="text"
        placeholder="Buscar..."
        className="search-input"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <span className="search-icon">
        <MagnifyingGlass size={20} />
      </span>
    </div>
  );
};

export default SearchInput;
