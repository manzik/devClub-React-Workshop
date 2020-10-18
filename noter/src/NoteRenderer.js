import React from "react";

import marked from "marked";
import ReactHtmlParser from 'react-html-parser';

function NoteRenderer({ activeNote, setActiveNoteText }) 
{
    let mdTextAreaRef = React.useRef();

    return <>
        <div className="note-raw-md">
            <textarea
                onChange={() => setActiveNoteText(mdTextAreaRef.current.value)}
                ref={mdTextAreaRef}
                value={activeNote.text}
                spellCheck={false}
            ></textarea>
        </div>
        <div className="note-rendered-md">
            { ReactHtmlParser(marked(activeNote.text)) }
        </div>
    </>;
}

export default NoteRenderer;