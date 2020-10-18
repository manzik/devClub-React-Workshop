import React from "react";
import "./App.css";

import NotesList from "./NotesList";
import NoteRenderer from "./NoteRenderer";

import usePersistantState from "./usePersistentState";

let initialNotes = [{
  id: Date.now(),
  name: "Mount Kailas",
  text: `## Noter

  ![notebook](https://cdn.dribbble.com/users/119233/screenshots/7022501/media/fa17c4799bdbccb6dbbf7e313a678a62.jpg)
  
  <small>The best note-taking app ever. End of story.</small>

## Features

1. Markdown note-taking
 - Faster and more classy notes with markdown
2. Add and delete notes
 - You can add as many notes as you want
1. Persistent storage
 - You won't lose your notes. Not under my watch
1. Being the **best** note-taking app ever
 - I don't _need_ to explain myself

Here's some random React code for no particular reason:
\`\`\`javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\``
}]

function App() 
{
  let [notes, setNotes] = usePersistantState("notes", initialNotes);
  console.log(notes);
  let [activeNoteId, setActiveNoteId] = React.useState(notes[0] ? notes[0].id : null);

  let activeNote = null;
  if(activeNoteId != null)
  {
    activeNote = notes.filter((note) => note.id == activeNoteId)[0];
  }

  let addNote = (id, name, text) => 
  {
    setNotes([...notes, { id, name, text }])
  };

  let selectActiveNoteById = (id) => 
  {
    setActiveNoteId(id);
  };
  let deleteNoteById = (id) => 
  {
    setNotes(notes.filter(note => note.id != id));
  };

  let setActiveNoteText = (newText) => 
  {
    setNotes(notes.map((note) => 
    {
      if(note.id == activeNoteId)
        return { ...note, text: newText };
      else
        return note;
    }));
  };

  return (
    <div className="App">
      <NotesList 
        notes={notes} addNote={addNote} 
        activeNoteId={activeNoteId}
        selectActiveNoteById={selectActiveNoteById}
        deleteNoteById={deleteNoteById}
      />
      <div className="note-body-container">
        {
          activeNote
          ?
          <NoteRenderer 
            activeNote={activeNote}
            setActiveNoteText={setActiveNoteText}
          />
          :
          <span className="no-file-selected">Please create a new note or select one</span>
        }
      </div>
    </div>
  );
}

export default App;
