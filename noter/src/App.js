import React from "react";
import "./App.css";

import NotesList from "./NotesList";
import NoteRenderer from "./NoteRenderer";

import usePersistantState from "./usePersistantState";

function App() 
{
  let [notes, setNotes] = usePersistantState([]);
  let [activeNoteId, setActiveNoteId] = React.useState(null);

  let activeNote = null;
  if(activeNoteId != null)
  {
    activeNote = notes.filter((note) => note.id == activeNoteId)[0];
  }

  let addNote = (id, name, text) => {
    setNotes([...notes, { id, name, text }])
  };

  let selectActiveNoteById = (id) => {
    setActiveNoteId(id);
  };

  let setActiveNoteText = (newText) => 
  {
    console.log(newText);
    setNotes(notes.map((note) => 
    {
      if(note.id == activeNoteId)
        return { ...note, text: newText };
      else
        return note;
    }))
  };

  return (
    <div className="App">
      <NotesList 
        notes={notes} addNote={addNote} 
        selectActiveNoteById={selectActiveNoteById}
      />
      <NoteRenderer 
        activeNote={activeNote}
        setActiveNoteText={setActiveNoteText}
      />
    </div>
  );
}

export default App;
