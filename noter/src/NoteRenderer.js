import React from "react";

import marked from "marked";
import ReactHtmlParser from 'react-html-parser';

function NoteRenderer({ activeNote, setActiveNoteText }) 
{
    let mdTextAreaRef = React.useRef();

    if(activeNote)
        return <div className="note-body-container">
            <div className="note-raw-md">
                <textarea 
                    onChange={() => setActiveNoteText(mdTextAreaRef.current.value)}
                    ref={mdTextAreaRef}
                    value={activeNote.text}
                ></textarea>
            </div>
            <div className="note-rendered-md">
                { ReactHtmlParser(marked(activeNote.text)) }
            </div>
        </div>;
    else
        return null;
}

export default NoteRenderer;