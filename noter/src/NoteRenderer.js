import React from "react";
import ReactMarkdown from 'react-markdown'

function NoteRenderer({ selectedNote, setSelectedNoteText })
{
    return <>
        <div className="note-input-md">
            <textarea
                onChange={e => setSelectedNoteText(e.target.value)}
                value={selectedNote.text}
            >
            </textarea>
        </div>
        <div className="note-rendered-md">
            {
                <ReactMarkdown>{selectedNote.text}</ReactMarkdown>
            }
        </div>
    </>;
}

export default NoteRenderer;