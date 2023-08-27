import React, { useState } from 'react';
import IdeaForm from './components/IdeaForm';
import './App.css';

function App() {
  const [savedIdeas, setSavedIdeas] = useState([]); // Initialize savedIdeas array

  const handleSaveIdea = (idea) => {
    setSavedIdeas([...savedIdeas, idea]);
  };

  return (
    <div className="App">
      <h1>Idea Recommendation App</h1>
      <IdeaForm onSaveIdea={handleSaveIdea} savedIdeas={savedIdeas} /> {/* Pass savedIdeas to IdeaForm */}
    </div>
  );
}

export default App;



