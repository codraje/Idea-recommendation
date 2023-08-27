import React from 'react';

function SearchBar({ onCreateNote, onSearchChange }) {
  return (
    <div className="search-bar">
      <button className="create-note-button" onClick={onCreateNote}>
        Create Notes
      </button>
      <input
        type="text"
        className="search-input"
        placeholder="Search notes..."
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;

