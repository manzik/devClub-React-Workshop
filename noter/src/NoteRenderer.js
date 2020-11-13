import React from "react";
import marked from "marked";
import ReactHtmlParser from "react-html-parser";

// https://marked.js.org/using_advanced
// START: Markdown code highlighter
import 'highlight.js/styles/github.css';
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    }
  });
// END: Markdown code highlighter

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
                ReactHtmlParser(marked(selectedNote.text))
            }
        </div>
    </>;
}

export default NoteRenderer;