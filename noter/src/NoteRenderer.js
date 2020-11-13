import React from "react";

import marked from "marked";
import ReactHtmlParser from 'react-html-parser';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('javascript', javascript);

marked.setOptions({
    highlight: function(code, language) {
        const hljs = require('highlight.js');
        const languageSelection = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(languageSelection, code).value;
      },
});

function NoteRenderer({ activeNote, setActiveNoteText }) 
{
    return <>
        <div className="note-raw-md">
            <textarea
                onChange={e => setActiveNoteText(e.target.value)}
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