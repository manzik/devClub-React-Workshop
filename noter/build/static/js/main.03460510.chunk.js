(this.webpackJsonpnoter=this.webpackJsonpnoter||[]).push([[0],{291:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(30),c=n.n(r),s=(n(38),n(11)),i=n(32),l=n(4);n(39),n(40);var u=function(e){var t=e.notes,n=e.addNote,a=e.selectActiveNoteById,r=e.activeNoteId,c=e.deleteNoteById;return o.a.createElement("div",{className:"notes-list"},o.a.createElement("div",{className:"note-item header-item"},"Notes"),o.a.createElement("hr",null),t.map((function(e){return o.a.createElement("div",{className:"note-item",key:e.id,onClick:function(){return a(e.id)}},o.a.createElement("span",{className:"note-name"},e.id==r?o.a.createElement("span",{style:{color:"#2EA7FF"}},"> "):"",e.name),o.a.createElement("span",{className:"note-delete",onClick:function(){return c(e.id)}},"x"))})),o.a.createElement("div",{className:"note-item add-note",onClick:function(){var e=Date.now(),t=prompt("Please enter a name for your new note.");t&&n(e,t,"## New note")}}," + "))},m=n(10),d=n.n(m),f=n(31),v=n.n(f),p=n(8),g=n.n(p),N=n(9),h=n.n(N);n(290);g.a.registerLanguage("javascript",h.a),d.a.setOptions({highlight:function(e,t){var a=n(8),o=a.getLanguage(t)?t:"plaintext";return a.highlight(o,e).value}});var b=function(e){var t=e.activeNote,n=e.setActiveNoteText,a=o.a.useRef();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"note-raw-md"},o.a.createElement("textarea",{onChange:function(){return n(a.current.value)},ref:a,value:t.text,spellCheck:!1})),o.a.createElement("div",{className:"note-rendered-md"},v()(d()(t.text))))};var E=function(e,t){var n=JSON.parse(localStorage.getItem(e)),a=o.a.useState(n||t),r=Object(l.a)(a,2),c=r[0],s=r[1];return o.a.useEffect((function(){null!==localStorage.getItem(e)||localStorage.setItem(e,JSON.stringify(t))}),[]),[c,function(t){localStorage.setItem(e,JSON.stringify(t)),s(t)}]},y=[{id:Date.now(),name:"Mount Kailas",text:"## Noter\n\n![notebook](https://cdn.dribbble.com/users/119233/screenshots/7022501/media/fa17c4799bdbccb6dbbf7e313a678a62.jpg)\n<small>Image from Unsplash</small>\n\nThe best note-taking app, probably ever.\n\n___\n\n## Features\n\n1. Markdown note-taking\n - Easier and more classy notes with markdown\n2. Add and delete notes\n - You can add as many notes as you want\n1. Persistent storage\n - You won't lose your notes, not under my watch\n1. Being the **best** note-taking app ever\n - I don't _need_ to explain myself\n\nHere's a random Javascript code for no particular reason:\n```javascript\nfunction sumOfDigits(num)\n{\n  let sum = 0;\n\n  num = Math.abs(num);\n  while(num != 0)\n  {\n    sum += num % 10; // Add last digit to the sum\n    num = Math.floor(num / 10); // Remove the last digit\n  }\n\n  return sum;\n}\n```"}];var w=function(){var e=E("notes",y),t=Object(l.a)(e,2),n=t[0],a=t[1],r=o.a.useState(n[0]?n[0].id:null),c=Object(l.a)(r,2),m=c[0],d=c[1],f=null;return null!=m&&(f=n.filter((function(e){return e.id==m}))[0]),o.a.createElement("div",{className:"App"},o.a.createElement(u,{notes:n,addNote:function(e,t,o){a([].concat(Object(i.a)(n),[{id:e,name:t,text:o}]))},activeNoteId:m,selectActiveNoteById:function(e){d(e)},deleteNoteById:function(e){a(n.filter((function(t){return t.id!=e})))}}),o.a.createElement("div",{className:"note-body-container"},f?o.a.createElement(b,{activeNote:f,setActiveNoteText:function(e){a(n.map((function(t){return t.id==m?Object(s.a)(Object(s.a)({},t),{},{text:e}):t})))}}):o.a.createElement("span",{className:"no-file-selected"},"Please create a new note or select one")))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root"))},33:function(e,t,n){e.exports=n(291)},38:function(e,t,n){},39:function(e,t,n){},65:function(e,t){}},[[33,1,2]]]);
//# sourceMappingURL=main.03460510.chunk.js.map