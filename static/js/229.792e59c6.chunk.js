"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[229],{676:function(t,n,e){var o=e(689),r=e(87),i=e(336),c=e(184);n.Z=function(t){var n=t.movies,e=(0,o.TH)();return(0,c.jsx)("ul",{className:i.Z.list,children:n.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{state:{from:e},className:i.Z.item,to:"/movies/".concat(t.id),children:t.title})},t.id)}))})}},375:function(t,n,e){e.d(n,{Df:function(){return r},TP:function(){return c},tx:function(){return u},z1:function(){return i},zv:function(){return s}});var o="c4018622b4e004039a1f5b78df8394b2",r=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)).then((function(t){if(t.ok)return t.json();throw new Error("Response was not ok.")})).then((function(t){return t.results}))},i=function(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t)).then((function(t){if(t.ok)return t.json();throw new Error("Response was not ok.")})).then((function(t){return t.results}))},c=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o)).then((function(t){if(t.ok)return t.json();throw new Error("Response was not ok.")}))},s=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o)).then((function(t){if(t.ok)return t.json();throw new Error("Response was not ok.")})).then((function(t){return t.cast}))},u=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o)).then((function(t){if(t.ok)return t.json();throw new Error("Response was not ok.")})).then((function(t){return t.results}))}},229:function(t,n,e){e.r(n);var o=e(439),r=e(791),i=e(676),c=e(375),s=e(336),u=e(184);n.default=function(){var t=(0,r.useState)([]),n=(0,o.Z)(t,2),e=n[0],a=n[1];return(0,r.useEffect)((function(){(0,c.Df)().then((function(t){return a(t)})).catch((function(t){return console.log("Error",t)}))}),[]),(0,u.jsxs)("div",{className:s.Z.section,children:[(0,u.jsx)("h2",{className:s.Z.title,children:"Trending Movies Today"}),(0,u.jsx)(i.Z,{movies:e})]})}},336:function(t,n){n.Z={section:"Home_section__1GQ45",title:"Home_title__5eO91",list:"Home_list__ZP0j7",item:"Home_item__VlSdp"}}}]);
//# sourceMappingURL=229.792e59c6.chunk.js.map