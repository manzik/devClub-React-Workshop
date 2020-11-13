import React from "react";

import './App.css';

import NotesList from './NotesList';
import NoteRenderer from "./NoteRenderer";
import usePersistentState from "./usePersistentState";

let defaultNoteID = 0;
let defaultNote = {
  id: defaultNoteID,
  name: "Introduction",
  text: `## Noter

![notebook](https://cdn.dribbble.com/users/119233/screenshots/7022501/media/fa17c4799bdbccb6dbbf7e313a678a62.jpg)
<small>Image from Unsplash</small>

The best note-taking app, probably ever.

___

## Features

1. Markdown note-taking
  - Easier and more classy notes with markdown
2. Add and delete notes
  - You can add as many notes as you want
3. Persistent storage
  - You won't lose your notes, not under my watch
4. Being the **best** note-taking app ever
  - I don't _need_ to explain myself

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
};

function App() 
{
  const [notes, setNotes] = usePersistentState([defaultNote], "notes");
  const [selectedNoteID, setSelectedNoteID] = React.useState(defaultNoteID);

  let selectedNote = null;

  const getNoteByID = id => 
  {
    const note = notes.filter(note => 
    {
      return note.id == selectedNoteID;
    })[0];

    return note;
  };
  
  if(selectedNoteID !== null)
  {
    selectedNote = getNoteByID(selectedNoteID);
  }
  
  const setSelectedNoteText = (text) => 
  {
    setNotes(prevNotes => prevNotes.map((note) => 
        (note.id == selectedNoteID ? { ...note, text } : note)
      )
    );
  };

  const addNote = (id, name, text) =>
  {
    let newNote = {id, name, text};
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const deleteNoteByID = (id) => 
  {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <NotesList 
        notes={notes} 
        addNote={addNote}
        setSelectedNoteID={setSelectedNoteID}
        selectedNoteID={selectedNoteID}
        deleteNoteByID={deleteNoteByID}
      >

      </NotesList>
      <div className="note-body-container">
        {
          !selectedNote
          ?
          <span className="no-file-selected">Please create or select a note</span>
          :
          <NoteRenderer selectedNote={selectedNote} setSelectedNoteText={setSelectedNoteText}>

          </NoteRenderer>
        }
      </div>
    </div>
  );
}

export default App;
