"use strict";(self.webpackChunkwebpack_earth=self.webpackChunkwebpack_earth||[]).push([[834],{9834:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var n=a(7294),l=a(9711),r=a(6974),o=a(3379),i=a.n(o),c=a(7795),m=a.n(c),s=a(569),f=a.n(s),h=a(3565),u=a.n(h),p=a(9216),d=a.n(p),v=a(4589),y=a.n(v),E=a(8773),g={};g.styleTagTransform=y(),g.setAttributes=u(),g.insert=f().bind(null,"head"),g.domAPI=m(),g.insertStyleElement=d(),i()(E.Z,g),E.Z&&E.Z.locals&&E.Z.locals;var b=a(9813);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function x(e,t,a,n,l,r,o){try{var i=e[r](o),c=i.value}catch(e){return void a(e)}i.done?t(c):Promise.resolve(c).then(n,l)}function M(e){return function(){var t=this,a=arguments;return new Promise((function(n,l){var r=e.apply(t,a);function o(e){x(r,n,l,o,i,"next",e)}function i(e){x(r,n,l,o,i,"throw",e)}o(void 0)}))}}function A(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function k(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var L=n.lazy((function(){return a.e(945).then(a.bind(a,5945))})),P=n.lazy((function(){return Promise.all([a.e(669),a.e(521),a.e(479)]).then(a.bind(a,3479))})),j=n.lazy((function(){return Promise.all([a.e(669),a.e(822)]).then(a.bind(a,4822))})),O=n.lazy((function(){return a.e(366).then(a.bind(a,2366))})),S=n.lazy((function(){return a.e(296).then(a.bind(a,296))}));function R(){var e=(0,r.TH)();return n.createElement("div",null,n.createElement("h3",null,"No match for ",n.createElement("code",null,e.pathname)))}const V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(m,e);var t,a,o,i,c=(o=m,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(o);if(i){var a=Z(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return k(this,e)});function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),N(H(t=c.call(this,e)),"inputUserName",(function(){var e=prompt("Please provide your name","First Last");localStorage.setItem("name",e)})),N(H(t),"checkAsync",M(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://javascript.info/article/promise-chaining/user.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})))),console.log(e),t.state={leftOpen:!1},t}return t=m,(a=[{key:"componentDidMount",value:function(){this.checkAsync(),localStorage.name?console.log(localStorage.getItem("name")):this.inputUserName()}},{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(n.Suspense,{fallback:n.createElement("div",null,n.createElement(b.a,null))},n.createElement(l.VK,null,n.createElement("nav",{className:"navbar"},n.createElement("ul",{className:"navbar-nav"},n.createElement("li",{className:"logo"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 32 32"},n.createElement("path",{fill:"#e0e0e2",d:"M29.79,29.79,2.21,2.21a1,1,0,0,0-1.71.7V29.5a2.006,2.006,0,0,0,2,2H29.09A1,1,0,0,0,29.79,29.79ZM15.09,25.5H7.5a1,1,0,0,1-1-1V16.91a1,1,0,0,1,1.71-.7l7.58,7.58A1,1,0,0,1,15.09,25.5Z"}),n.createElement("path",{fill:"#afaeb3",d:"M3 7.5a.5.5 0 0 1-.5.5H.5V7h2A.5.5 0 0 1 3 7.5zM5 29.5v2H4v-2a.5.5 0 0 1 1 0zM10 29.5v2H9v-2a.5.5 0 0 1 1 0zM15 29.5v2H14v-2a.5.5 0 0 1 1 0zM19 31.5v-2a.5.5 0 0 1 1 0v2zM24 31.5v-2a.5.5 0 0 1 1 0v2zM3 12.5a.5.5 0 0 1-.5.5H.5V12h2A.5.5 0 0 1 3 12.5zM3 17.5a.5.5 0 0 1-.5.5H.5V17h2A.5.5 0 0 1 3 17.5zM3 22.5a.5.5 0 0 1-.5.5H.5V22h2A.5.5 0 0 1 3 22.5zM3 27.5a.5.5 0 0 1-.5.5H.5V27h2A.5.5 0 0 1 3 27.5z"})),n.createElement("span",{className:"link-text logo-text"},localStorage.getItem("name"))),n.createElement("li",{className:"nav-item"},n.createElement(l.rU,{to:"/home","aria-label":"home",className:"nav-link"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 32 32"},n.createElement("path",{fill:"#fedc55",d:"M12.5,31.5H3.454A2,2,0,0,1,1.6,28.757L12.572,1.321a1,1,0,0,1,1.928.371V29.5A2,2,0,0,1,12.5,31.5Z"}),n.createElement("path",{fill:"#f9a839",d:"M19.428,1.321,30.4,28.757A2,2,0,0,1,28.546,31.5H19.5a2,2,0,0,1-2-2V1.693A1,1,0,0,1,19.428,1.321Z"})),n.createElement("span",{className:"link-text"},"Home"))),n.createElement("li",{className:"nav-item"},n.createElement(l.rU,{to:"/analytics","aria-label":"analytics",className:"nav-link"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 32 32"},n.createElement("path",{fill:"#56bc8d",d:"M31.5,21A9.486,9.486,0,0,1,16,28.35,9.421,9.421,0,0,0,19.5,21a8.514,8.514,0,0,0-.07-1.14,9.494,9.494,0,0,0,6-7.72A9.495,9.495,0,0,1,31.5,21Z"}),n.createElement("path",{fill:"#c6e5d6",d:"M19.5,21A9.421,9.421,0,0,1,16,28.35,9.42,9.42,0,0,1,12.5,21a8.5,8.5,0,0,1,.07-1.14,9.512,9.512,0,0,0,6.86,0A8.514,8.514,0,0,1,19.5,21Z"}),n.createElement("path",{fill:"#4880bd",d:"M16,28.35A9.495,9.495,0,1,1,6.57,12.14a9.494,9.494,0,0,0,6,7.72A8.5,8.5,0,0,0,12.5,21,9.42,9.42,0,0,0,16,28.35Z"}),n.createElement("path",{fill:"#b7d9f4",d:"M16,13.64a9.441,9.441,0,0,0-3.43,6.22,9.494,9.494,0,0,1-6-7.72A9.545,9.545,0,0,1,10,11.5,9.431,9.431,0,0,1,16,13.64Z"}),n.createElement("path",{fill:"#fbea9a",d:"M19.43,19.86a9.512,9.512,0,0,1-6.86,0A9.441,9.441,0,0,1,16,13.64,9.441,9.441,0,0,1,19.43,19.86Z"}),n.createElement("path",{fill:"#f2a6b5",d:"M25.43,12.14a9.494,9.494,0,0,1-6,7.72A9.441,9.441,0,0,0,16,13.64a9.431,9.431,0,0,1,6-2.14A9.545,9.545,0,0,1,25.43,12.14Z"}),n.createElement("path",{fill:"#ec4369",d:"M25.5,11a8.515,8.515,0,0,1-.07,1.14A9.545,9.545,0,0,0,22,11.5a9.431,9.431,0,0,0-6,2.14,9.431,9.431,0,0,0-6-2.14,9.545,9.545,0,0,0-3.43.64A8.5,8.5,0,0,1,6.5,11a9.5,9.5,0,0,1,19,0Z"})),n.createElement("span",{className:"link-text"},"Analytics"))),n.createElement("li",{className:"nav-item"},n.createElement(l.rU,{to:"/input","aria-label":"input",className:"nav-link"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 32 32"},n.createElement("path",{fill:"#f5bdaf",d:"M29.5,26.67,26.67,29.5a2,2,0,0,1-2.83,0L5.45,11.11,3.16,5.14,1.92,1.92,5.15,3.16l5.96,2.29L29.5,23.84A2,2,0,0,1,29.5,26.67Z"}),n.createElement("polygon",{fill:"#57565e",points:"20.22 25.88 21.64 24.47 24.47 21.64 25.88 20.22 27.37 21.72 25.96 23.13 23.13 25.96 21.72 27.37 20.22 25.88"}),n.createElement("path",{fill:"#ed4569",d:"M29.5,26.67,26.67,29.5a2,2,0,0,1-2.83,0l-2.12-2.13,1.41-1.41,2.83-2.83,1.41-1.41,2.13,2.12A2,2,0,0,1,29.5,26.67Z"}),n.createElement("path",{fill:"#e13442",d:"M25.88 20.22l-1.41 1.42L11.7 8.87a2.006 2.006 0 0 1-.59-1.42v-2zM21.64 24.47l-1.4 1.432L5.45 11.11h2a2.006 2.006 0 0 1 1.42.59z"}),n.createElement("path",{fill:"#e0e0e2",d:"M24.314,23.814h4a2,2,0,0,1,2,2v3a0,0,0,0,1,0,0h-8a0,0,0,0,1,0,0v-3A2,2,0,0,1,24.314,23.814Z",transform:"rotate(135 26.314 26.314)"}),n.createElement("path",{fill:"#57565e",d:"M5.15,3.16v.01A3.191,3.191,0,0,1,3.16,5.14L1.92,1.92Z"}),n.createElement("path",{fill:"#ed4569",d:"M24.47,21.64,11.7,8.87a2.006,2.006,0,0,0-1.42-.59h-1a1,1,0,0,0-1,1v1a2.006,2.006,0,0,0,.59,1.42L21.64,24.47Z"})),n.createElement("span",{className:"link-text"},"Input"))),n.createElement("li",{className:"nav-item"},n.createElement(l.rU,{to:"/todo","aria-label":"todo",className:"nav-link"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 32 32"},n.createElement("path",{fill:"#8c8891",d:"M27.5 31.25a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3A.5.5 0 0 1 27.5 31.25zM31.5 10.25a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1h1A1.5 1.5 0 0 1 32 4.75v5A.5.5 0 0 1 31.5 10.25z"}),n.createElement("path",{fill:"#56bc8d",d:"M29.5,25.75l-2,3-2-3v-23a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2Z"}),n.createElement("path",{fill:"#e0e0e2",d:"M29.5,17.75h0a4.47,4.47,0,0,0-4,0h0v6h0a4.47,4.47,0,0,1,4,0h0Z"}),n.createElement("line",{x1:"25.5",x2:"29.5",y1:"5.75",y2:"5.75",fill:"#4880bd"}),n.createElement("rect",{width:"30",height:"21",x:"-3",y:"5.25",fill:"#4880bd",rx:"2",ry:"2",transform:"rotate(90 12 15.75)"}),n.createElement("path",{fill:"#8c8891",d:"M2.5 4.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 8.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 12.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 16.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 20.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 24.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 28.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z"}),n.createElement("rect",{width:"13",height:"4",x:"5.5",y:"3.75",fill:"#e0e0e2",rx:".5",ry:".5"}),n.createElement("path",{fill:"#e0e0e2",d:"M16.5,11.25h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"})),n.createElement("span",{className:"link-text"},"Todo"))),n.createElement("li",{className:"nav-item"},n.createElement(l.rU,{to:"/file-upload","aria-label":"file-upload",className:"nav-link"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 32 32"},n.createElement("path",{fill:"#8c8891",d:"M27.5 31.25a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3A.5.5 0 0 1 27.5 31.25zM31.5 10.25a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1h1A1.5 1.5 0 0 1 32 4.75v5A.5.5 0 0 1 31.5 10.25z"}),n.createElement("path",{fill:"#56bc8d",d:"M29.5,25.75l-2,3-2-3v-23a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2Z"}),n.createElement("path",{fill:"#e0e0e2",d:"M29.5,17.75h0a4.47,4.47,0,0,0-4,0h0v6h0a4.47,4.47,0,0,1,4,0h0Z"}),n.createElement("line",{x1:"25.5",x2:"29.5",y1:"5.75",y2:"5.75",fill:"#4880bd"}),n.createElement("rect",{width:"30",height:"21",x:"-3",y:"5.25",fill:"#4880bd",rx:"2",ry:"2",transform:"rotate(90 12 15.75)"}),n.createElement("path",{fill:"#8c8891",d:"M2.5 4.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 8.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 12.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 16.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 20.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 24.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM2.5 28.25H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z"}),n.createElement("rect",{width:"13",height:"4",x:"5.5",y:"3.75",fill:"#e0e0e2",rx:".5",ry:".5"}),n.createElement("path",{fill:"#e0e0e2",d:"M16.5,11.25h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"})),n.createElement("span",{className:"link-text"},"FileUpload"))))),n.createElement("main",null,n.createElement(r.Z5,null,n.createElement(r.AW,{path:"/home",element:n.createElement(L,null)}),n.createElement(r.AW,{path:"/analytics",element:n.createElement(P,null)}),n.createElement(r.AW,{path:"/input",element:n.createElement(j,null)}),n.createElement(r.AW,{path:"/todo",element:n.createElement(O,null)}),n.createElement(r.AW,{path:"/file-upload",element:n.createElement(S,null)}),n.createElement(r.AW,{path:"/",element:n.createElement(L,null)}),n.createElement(r.AW,{path:"*",element:n.createElement(R,null)}))))))}}])&&A(t.prototype,a),m}(n.Component)},8773:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(8081),l=a.n(n),r=a(3645),o=a.n(r)()(l());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&family=Roboto:wght@100;300&display=swap);"]),o.push([e.id,'main{margin-left:5rem;padding:1rem}.navbar{position:fixed;background-color:#fff;transition:width 600ms ease;overflow:scroll;border:1px solid #000;font-family:"Roboto",sans-serif;font-size:1.2rem}.navbar-nav{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;align-items:center;height:100%}.nav-item{width:100%}.nav-link{display:flex;align-items:center;height:4rem;color:#000;text-decoration:none;transition:600ms}.nav-link:hover{color:#000;background-color:rgba(231,231,231,.87)}.link-text{display:none;margin-left:1rem}.nav-link svg{width:2rem;min-width:2rem;margin:0 1.5rem}.logo{font-weight:bold;text-transform:uppercase;margin-bottom:1rem;text-align:center;color:#000;background:#fff;font-size:1.5rem;letter-spacing:.3ch;width:100%;cursor:crosshair}.logo svg{transform:rotate(0deg);transition:600ms}.logo-text{font-family:"Roboto",sans-serif;display:inline;position:absolute;left:-999px;top:2rem;transition:600ms}.navbar:hover .logo svg{transform:rotate(-180deg)}@media only screen and (max-width: 600px){.navbar{bottom:0;width:100vw;height:4rem}.logo{display:none}.navbar-nav{flex-direction:row}.nav-link{justify-content:center}main{margin-left:0;margin-bottom:5rem}}@media only screen and (min-width: 600px){.navbar{top:0;width:5rem;height:100vh}.navbar:hover{width:16rem}.navbar:hover .link-text{display:inline}.navbar:hover .logo svg{margin-left:11rem}.navbar:hover .logo-text{left:1.75rem;top:2rem}}',""]);const i=o}}]);