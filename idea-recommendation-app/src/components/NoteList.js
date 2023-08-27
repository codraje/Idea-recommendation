import React from 'react';

function NoteList({ notes, onSuggestNote }) {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div key={index} className="note">
          {note}
          <button
            className="suggest-note-button"
            onClick={() => onSuggestNote(note)}
          >
            Suggest
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;

