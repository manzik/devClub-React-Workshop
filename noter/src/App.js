import React from "react";
import "./App.css";

import NotesList from "./NotesList";
import NoteRenderer from "./NoteRenderer";

import usePersistantState from "./usePersistantState";

let initialNotes = [{
  id: Date.now(),
  name: "Mount Kailas",
  text: `## Mount Kailas

  ![s](https://cdn.dribbble.com/users/989466/screenshots/14205792/september-landscape-2020-v4-dribbble-alex-pasquarella_4x.png)
  
  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus dui fringilla mollis malesuada. Praesent dui sapien, malesuada ac dui dictum, posuere commodo ipsum. Morbi quis sapien at erat porta ullamcorper nec eget ipsum. Etiam at arcu quis mauris molestie vulputate quis non tellus. Nam velit tortor, sollicitudin eget metus et, rutrum imperdiet elit. Vestibulum porta nisl quis augue porttitor molestie. Aenean laoreet molestie lorem tincidunt cursus.
  </small>`
}]

function App() 
{
  let [notes, setNotes] = usePersistantState("notes", []);
  let [activeNoteId, setActiveNoteId] = React.useState(initialNotes);

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
          <span className="no-file-selected">Please create a new file or select one</span>
        }
      </div>
    </div>
  );
}

export default App;
