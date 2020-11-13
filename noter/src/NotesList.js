import React from "react";

function NotesList({ notes, addNote, selectedNoteID, setSelectedNoteID, deleteNoteByID })
{
    const askAddNote = () => {
        let noteName = prompt("Please enter a name for your new note");
        let noteID = Date.now();
        let noteText = "";

        addNote(noteID, noteName, noteText);
    }

    return <div className="notes-list">
        <div className="header-item">Notes</div>
        <hr/>
        {
            notes.map(note => 
            {
                return <div className="note-item" onClick={() => setSelectedNoteID(note.id)}>
                    
                    <div className="note-name">
                        { note.id == selectedNoteID ? <span>&gt; </span> : "" }
                        {note.name}
                    </div>
                    <div className="note-delete" onClick={() => deleteNoteByID(note.id)}>x</div>
                </div>;
            })
        }
        <div className="add-note" onClick={askAddNote}> + </div>
    </div>;
}

export default NotesList;