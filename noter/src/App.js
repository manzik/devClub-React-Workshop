import React from "react";
import "./App.css";

import fs from "fs"

import NotesList from "./NotesList";
import NoteRenderer from "./NoteRenderer";

import usePersistantState from "./usePersistentState";

let initialNotes = [{
  id: Date.now(),
  name: "Noter Introduction",
  text: `## Noter

![notebook](https://cdn.dribbble.com/users/119233/screenshots/7022501/media/fa17c4799bdbccb6dbbf7e313a678a62.jpg)    
<small>Image from Unsplash</small>

The best note-taking app ever.

___

## Features

1. Markdown note-taking
 - Easier and more classy notes with markdown
2. Add and delete notes
 - You can add as many notes as you want
1. Persistent storage
 - You won't lose your notes, not under my watch
1. Being the **best** note-taking app ever
 - I don't _need_ to explain myself

## Usage

- Use the "+" button on the left sidebar to add a new note
- Start typing markdown code into the left panel. You can see the results on the right panel
- You can delete notes by hovering on a note on the left sidebar and clicking the "x" button
___

Here's a random Javascript code for no particular reason:
\`\`\`javascript
function sumOfDigits(num)
{
  let sum = 0;

  num = Math.abs(num);
  while(num != 0)
  {
    sum += num % 10; // Add last digit to the sum
    num = Math.floor(num / 10); // Remove the last digit
  }

  return sum;
}
\`\`\``
}];

function App() 
{
  let [notes, setNotes] = usePersistantState("notes", initialNotes);
  let [activeNoteId, setActiveNoteId] = React.useState(notes[0] && notes[0].id);

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
