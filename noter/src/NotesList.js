import React from "react";

const isElectron = window && window.process && window.process.type;

function NotesList({ notes, addNote, selectedNoteID, setSelectedNoteID, deleteNoteByID })
{
    const askAddNote = () => 
    {
        if(!isElectron)
        {
            let noteName = prompt("Please enter a name for your new note");

            if(noteName)
            {
                let noteID = Date.now();
                let noteText = "## New note";

                addNote(noteID, noteName, noteText);
            }
        }
        else
        {
            const smalltalk = require('smalltalk');
            smalltalk
            .prompt("Question", "Please enter a name for your new note", "")
            .then((noteName) => {
                let noteID = Date.now();
                let noteText = "## New note";

                addNote(noteID, noteName, noteText);
            })
            .catch(() => {
                console.log("cancel");
            });
        }
        
    };

    return <div className="notes-list">
        <div className="header-item">Notes</div>
        <hr/>
        {
            notes.map(note => 
            {
                return <div className={`note-item ${note.id == selectedNoteID ? "selected" : ""}`} onClick={() => setSelectedNoteID(note.id)}>
                    <div className="note-name">
                        { note.name }
                    </div>
                    <div className="note-delete" onClick={() => deleteNoteByID(note.id)}>x</div>
                </div>;
            })
        }
        <div className="add-note" onClick={askAddNote}> + </div>
    </div>;
}

export default NotesList;