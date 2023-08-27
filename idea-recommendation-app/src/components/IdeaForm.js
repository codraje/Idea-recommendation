// import React, { useState } from 'react';
// import "../App.css";

// function IdeaForm({ onSaveIdea }) { // Correct the prop name to onSaveIdea
//   const [idea, setIdea] = useState('');

//   const handleIdeaChange = (event) => {
//     setIdea(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSaveIdea(idea); // Use onSaveIdea instead of onSave
//     setIdea('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={idea}
//         onChange={handleIdeaChange}
//         placeholder="Enter your idea"
//       />
//       <button type="submit">Save Idea</button>
//     </form>
//   );
// }

// export default IdeaForm;


import React, { useState } from 'react';

function IdeaForm({ onSaveIdea, savedIdeas }) {
  const [idea, setIdea] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSaveIdea(idea);
    setIdea('');
  };

  return (
    <div className="idea-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Enter your idea..."
        />
        <button type="submit">Save Idea</button>
      </form>
      <div className="saved-ideas">
        <h2>Saved Ideas</h2>
        {savedIdeas.map((savedIdea, index) => (
          <div key={index} className="saved-idea">
            <p>{savedIdea}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IdeaForm;
