(this["webpackJsonpprogetto-react-di-rosario-procopio"]=this["webpackJsonpprogetto-react-di-rosario-procopio"]||[]).push([[0],{16:function(e,t,o){"use strict";o.r(t);var c=o(3),n=o(2),s=o(14),r=o.n(s),a=o(15),i=o.n(a),l=(o(40),o(0));function j(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),o=t[0],s=t[1],r=Object(n.useState)([]),a=Object(c.a)(r,2),j=a[0],u=a[1],b=Object(n.useState)("AIzaSyAXHZUVP7FFWX8eqg0EUxXFTKQAM6JUOfM"),h=Object(c.a)(b,2),d=h[0];h[1];return Object(l.jsxs)("div",{class:"container",children:[Object(l.jsx)("h1",{children:"Book Search"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.a.get("https://www.googleapis.com/books/v1/volumes?q="+o+"&key="+d+"&maxResults=10").then((function(e){console.log(e.data.items),u(e.data.items)}))},children:[Object(l.jsx)("div",{class:"form-group",children:Object(l.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;s(t)},className:"form-control mt-10",placeholder:"Search for Books",autoComplete:"off"})}),Object(l.jsx)("button",{type:"submit",className:"btn btn-danger",children:"Search"})]}),j.map((function(e){return Object(l.jsx)("div",{class:"card",children:Object(l.jsxs)("a",{href:e.volumeInfo.previewLink,children:[Object(l.jsx)("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:e.title}),Object(l.jsxs)("div",{class:"container",children:[Object(l.jsx)("h1",{children:e.volumeInfo.title}),Object(l.jsx)("h2",{children:e.volumeInfo.authors})]})]})})}))]})}var u=document.getElementById("root");r.a.render(Object(l.jsx)(j,{}),u)},40:function(e,t,o){}},[[16,1,2]]]);
//# sourceMappingURL=main.536f3866.chunk.js.map