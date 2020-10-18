import React from "react";

// Render notes, and give user the option to add a note
function NotesList({ notes, addNote, selectActiveNoteById, activeNoteId, deleteNoteById }) 
{

    let onAddNewNote = () => 
    {
        let noteId = Date.now();
        let noteName = prompt("Please enter a name for your new note.");
        let noteText = "";
        
        if(noteName)
            addNote(noteId, noteName, noteText);
    };

    return <div className="notes-list">
        <div className="note-item header-item">Notes</div>
        <hr/>
        {
            notes.map((note) => 
            {
                return <div 
                    className="note-item" key={note.id}
                    onClick={() => selectActiveNoteById(note.id)}
                >
                    <span className="note-name">
                        {note.id == activeNoteId ? <span style={{ color: "#2EA7FF" }}>&gt; </span> : ""}
                        {note.name}
                    </span>
                    <span className="note-delete" onClick={() => deleteNoteById(note.id)}>x</span>
                </div>;
            })
        }
        <div className="note-item add-note" onClick={onAddNewNote}> + </div>
    </div>;
}

export default NotesList;