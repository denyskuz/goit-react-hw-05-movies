"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[506],{506:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(885),i=t(791),a=t(731),c=t(739),o=t(433),s="MovieDetails_information__Tt7+r",l="MovieDetails_image__c1FeV",u="MovieDetails_info__qv2SI",d="MovieDetails_genres__Pnmgt",v="MovieDetails_backLink__dzd-p",f="MovieDetails_additionalBox__-qEeh",h="MovieDetails_list__dbNMP",m=t(184),x=function(){var e,n,t,x,_,p=(0,c.UO)().movieId,j=(0,i.useState)(null),g=(0,r.Z)(j,2),k=g[0],w=g[1],b=(0,c.TH)();(0,i.useEffect)((function(){(0,o.Mc)(p).then((function(e){w(e)}))}),[p]);var y=k&&new Date(k.release_date).getFullYear();console.log("location.state?.from",null===(e=b.state)||void 0===e?void 0:e.from);var M=null!==(n=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";return(0,m.jsxs)("main",{children:[(0,m.jsx)(a.OL,{className:v,to:M,children:"Go back"}),k&&(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("section",{className:s,children:[(0,m.jsx)("div",{className:l,children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(k.poster_path),alt:k.title})}),(0,m.jsxs)("div",{className:u,children:[(0,m.jsxs)("h2",{children:[k.title," (",y,")"]}),(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:[(0,m.jsx)("strong",{children:"User score:"}),(0,m.jsx)("span",{children:k.vote_average})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("strong",{children:"Overview:"}),(0,m.jsx)("span",{children:k.overview})]}),(0,m.jsx)("li",{children:(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("strong",{children:"Genres:"}),k.genres.map((function(e){var n=e.id,t=e.name;return(0,m.jsx)("span",{children:t},n)}))]})})]}),(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)("strong",{children:"Additional information"}),(0,m.jsxs)("ul",{className:h,children:[(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"cast",state:{from:null===(x=b.state)||void 0===x?void 0:x.from},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"reviews",state:{from:null===(_=b.state)||void 0===_?void 0:_.from},children:"Reviews"})})]}),(0,m.jsx)(c.j3,{context:k})]})]})]})})]})}},433:function(e,n,t){function r(e,n,t,r,i,a,c){try{var o=e[a](c),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,a){var c=e.apply(n,t);function o(e){r(c,i,a,o,s,"next",e)}function s(e){r(c,i,a,o,s,"throw",e)}o(void 0)}))}}t.d(n,{Mc:function(){return f},uV:function(){return h},Hx:function(){return m},HI:function(){return v},wr:function(){return d}});var a=t(757),c=t.n(a),o="https://api.themoviedb.org/3",s="e704dedb4527dcb2d58f4f28374639e6";function l(){return u.apply(this,arguments)}function u(){return u=i(c().mark((function e(){var n,t,r,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function d(){return l("".concat(o,"/trending/all/day?api_key=").concat(s))}function v(e){return l("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function f(e){return l("".concat(o,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"))}function h(e){return l("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function m(e){return l("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"))}}}]);
//# sourceMappingURL=506.06f61cf7.chunk.js.map