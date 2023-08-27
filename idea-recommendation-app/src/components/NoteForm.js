import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [noteContent, setNoteContent] = useState('');

  const handleNoteChange = (event) => {
    const inputValue = event.target.value;
    setNoteContent(inputValue);
    // Implement suggestion logic for <>
  };

  const handleAddNote = () => {
    onAddNote(noteContent);
    setNoteContent('');
  };

  return (
    <div className="note-form">
      <textarea
        value={noteContent}
        onChange={handleNoteChange}
        placeholder="Enter your note..."
        rows={3}
      />
      <button className="add-note-button" onClick={handleAddNote}>
        Add Note
      </button>
    </div>
  );
}

export default NoteForm;
