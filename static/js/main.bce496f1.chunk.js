(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"})),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",HTMLFor:"flexSwitchCheckDefault"},"Enable dark mode"))))))}function i(e){return e.alert&&l.a.createElement("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," : ",e.alert.msg)}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-3"},l.a.createElement("h3",{className:"my-3 text-".concat("light"===e.mode?"dark":"light")},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){o(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},id:"exampleFormControlTextarea1",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toUpperCase();o(t),e.showalert("Your text is converted into uppercase.","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toLowerCase();o(t),e.showalert("Your text is converted into lowercase.","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){for(var t=r.split(" "),a="",n=0;n<t.length;n++){var l=t[n],c=l.slice(0,1),s=l.slice(1,l.length);a=a+" "+(c.toLowerCase()+s.toUpperCase())}o(a),e.showalert("Your text is converted into tOGGLEcase.","success")}},"Convert text into tOGGLEcase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){o(""),e.showalert("Clear text","success")}},"Clear text")),l.a.createElement("div",{className:"container my-3 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h2",{className:"my-3"},"Your text summary"),l.a.createElement("p",null,r.split(" ").length-1," words and ",r.length," characters are in your text"),l.a.createElement("p",null,"You will tack ",.008*r.split(" ").length," minutes to read this text"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the textbox above to preview it here")))}s.defaultProps={title:"set title here",abouttext:"About"};var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",abouttext:"About",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#6f89b0",g("Dark mode is enable","success"),document.title="TextUtils - Darkmode"):(r("light"),document.body.style.backgroundColor="white",g("Light mode is enable","success"),document.title="TextUtils - Lightmode")}}),l.a.createElement(i,{alert:d}),l.a.createElement(m,{heading:"Enter the taxt to analyze below",showalert:g,mode:a}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.bce496f1.chunk.js.map