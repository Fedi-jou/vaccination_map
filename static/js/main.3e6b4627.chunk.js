(this["webpackJsonpreact-10"]=this["webpackJsonpreact-10"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},71:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(43),i=n.n(r),s=(n(50),n(51),n(24)),o=n(4),l=n(20),u=(n(71),n(11)),d=n.n(u),j=n(16),h=n(17),b=n.n(h),O=n(3),f=Object(c.createContext)(),m=function(e){var t=e.children,n=Object(c.useState)(),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://disease.sh/v3/covid-19/countries").then((function(e){i(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsx)(f.Provider,{value:{data:r},children:t})},v=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)(),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false").then((function(e){i(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsx)(v.Provider,{value:{data1:r},children:t})};var p=function(){var e=Object(c.useContext)(f).data,t=Object(c.useContext)(v).data1,n=Object(c.useState)(),a=Object(o.a)(n,2),r=a[0],i=a[1],u=Object(c.useState)({width:"100vw",height:"100vh",latitude:0,longitude:0,zoom:2.5}),d=Object(o.a)(u,2),j=d[0],h=d[1];return Object(c.useEffect)((function(){var e=function(e){"Escape"===e.key&&i(null)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"helloo"})}),Object(O.jsxs)(l.c,Object(s.a)(Object(s.a)({},j),{},{mapboxApiAccessToken:"pk.eyJ1Ijoiam91ZiIsImEiOiJja3NydHRxbGwwaXZ0MnBwbmltcmZ1NmM1In0.Y4S9nBOCRVlxW50Iq_0BFQ",onViewportChange:function(e){return h(e)},mapStyle:"mapbox://styles/jouf/cksruy2272mlv17qhkk94xpsd",children:[e&&e.map((function(e,t){return Object(O.jsxs)(l.a,{className:"map-marker",latitude:e.countryInfo.lat,longitude:e.countryInfo.long,children:[Object(O.jsx)("div",{style:{height:15,width:15},className:"map-marker",onClick:function(){return i(e)}}),console.log(r,"hello")]},t)})),r&&Object(O.jsx)(l.b,{latitude:r.countryInfo.lat,longitude:r.countryInfo.long,anchor:"bottom",closeButton:!0,onClose:function(){return i(null)},children:Object(O.jsxs)("div",{className:"tooltip-card",children:[Object(O.jsxs)("div",{className:"tooltip-header",children:[Object(O.jsx)("img",{className:"tooltip-img",src:r.countryInfo.flag,alt:""}),r.country]}),Object(O.jsxs)("div",{className:"tooltip-content",children:[Object(O.jsxs)("div",{className:"content-row",children:[Object(O.jsx)("div",{className:"small heading text-secondary me-2",children:"Total doses given :"}),Object(O.jsx)("div",{className:"h6 heading",children:t&&t.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object.values(e.timeline).map((function(t){return Object(O.jsx)(O.Fragment,{children:JSON.stringify(e.country)===JSON.stringify(r.country)?Object(O.jsx)("div",{children:t.toLocaleString()}):null})}))})}))})]}),Object(O.jsxs)("div",{className:"content-row",children:[Object(O.jsx)("div",{className:"small heading text-secondary me-2",children:"Total Population :"}),Object(O.jsx)("div",{className:"h6 heading",children:r.population.toLocaleString()})]})]})]})})]}))]})};var g=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(x,{children:Object(O.jsx)(m,{children:Object(O.jsx)(p,{})})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),y()}},[[91,1,2]]]);
//# sourceMappingURL=main.3e6b4627.chunk.js.map