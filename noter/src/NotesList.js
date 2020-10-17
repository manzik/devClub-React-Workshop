import React from "react";

// Render notes, and give user the option to add a note
function NotesList({ notes, addNote, selectActiveNoteById }) 
{

    let onAddNewNote = () => 
    {
        let noteId = Date.now();
        let noteName = prompt("Please enter a name for your new note.");
        let noteText = "";
        
        addNote(noteId, noteName, noteText);
    };

    return <div className="notes-list">
        {
            notes.map((note, ind) => 
            {
                return <div 
                    className="note-item" key={note.id}
                    onClick={() => selectActiveNoteById(note.id)}
                >
                    {note.name}
                </div>;
            })
        }
        <div className="note-item add-note" onClick={onAddNewNote}> + </div>
    </div>;
}

export default NotesList;