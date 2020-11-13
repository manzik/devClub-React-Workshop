(this.webpackJsonpnoter=this.webpackJsonpnoter||[]).push([[0],{290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),s=(n(36),n(30)),l=n(9),i=n(4);n(37);var u=function(e){var t=e.notes,n=e.addNote,a=e.selectedNoteID,o=e.setSelectedNoteID,c=e.deleteNoteByID;return r.a.createElement("div",{className:"notes-list"},r.a.createElement("div",{className:"header-item"},"Notes"),r.a.createElement("hr",null),t.map((function(e){return r.a.createElement("div",{className:"note-item",onClick:function(){return o(e.id)}},r.a.createElement("div",{className:"note-name"},e.id==a?r.a.createElement("span",null,"> "):"",e.name),r.a.createElement("div",{className:"note-delete",onClick:function(){return c(e.id)}},"x"))})),r.a.createElement("div",{className:"add-note",onClick:function(){var e=prompt("Please enter a name for your new note");if(e){var t=Date.now();n(t,e,"## New note")}}}," + "))},d=n(7),m=n.n(d),f=n(29),v=n.n(f);n(81);m.a.setOptions({renderer:new m.a.Renderer,highlight:function(e,t){var a=n(82),r=a.getLanguage(t)?t:"plaintext";return a.highlight(r,e).value}});var p=function(e){var t=e.selectedNote,n=e.setSelectedNoteText;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"note-input-md"},r.a.createElement("textarea",{onChange:function(e){return n(e.target.value)},value:t.text})),r.a.createElement("div",{className:"note-rendered-md"},v()(m()(t.text))))};var N=function(e,t){var n=r.a.useState(e),a=Object(i.a)(n,2),o=a[0],c=a[1];return r.a.useEffect((function(){var e=localStorage.getItem(t);e&&c(JSON.parse(e))}),[]),r.a.useEffect((function(){localStorage.setItem(t,JSON.stringify(o))}),[o]),[o,c]},g={id:0,name:"Introduction",text:"## Noter\n\n![notebook](https://cdn.dribbble.com/users/119233/screenshots/7022501/media/fa17c4799bdbccb6dbbf7e313a678a62.jpg)\n<small>Image from Unsplash</small>\n\nThe best note-taking app, probably ever.\n\n___\n\n## Features\n\n1. Markdown note-taking\n  - Easier and more classy notes with markdown\n2. Add and delete notes\n  - You can add as many notes as you want\n3. Persistent storage\n  - You won't lose your notes, not under my watch\n4. Being the **best** note-taking app ever\n  - I don't _need_ to explain myself\n\nHere's a random Javascript code for no particular reason:\n```javascript\nfunction sumOfDigits(num)\n{\n  let sum = 0;\n\n  num = Math.abs(num);\n  while(num != 0)\n  {\n    sum += num % 10; // Add last digit to the sum\n    num = Math.floor(num / 10); // Remove the last digit\n  }\n\n  return sum;\n}\n```"};var h=function(){var e=N([g],"notes"),t=Object(i.a)(e,2),n=t[0],a=t[1],o=r.a.useState(0),c=Object(i.a)(o,2),d=c[0],m=c[1],f=null;return null!==d&&(f=n.filter((function(e){return e.id==d}))[0]),r.a.createElement("div",{className:"App"},r.a.createElement(u,{notes:n,addNote:function(e,t,n){var r={id:e,name:t,text:n};a((function(e){return[].concat(Object(s.a)(e),[r])}))},setSelectedNoteID:m,selectedNoteID:d,deleteNoteByID:function(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}}),r.a.createElement("div",{className:"note-body-container"},f?r.a.createElement(p,{selectedNote:f,setSelectedNoteText:function(e){a((function(t){return t.map((function(t){return t.id==d?Object(l.a)(Object(l.a)({},t),{},{text:e}):t}))}))}}):r.a.createElement("span",{className:"no-file-selected"},"Please create or select a note")))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},31:function(e,t,n){e.exports=n(290)},36:function(e,t,n){},37:function(e,t,n){},62:function(e,t){}},[[31,1,2]]]);
//# sourceMappingURL=main.96b1bd88.chunk.js.map