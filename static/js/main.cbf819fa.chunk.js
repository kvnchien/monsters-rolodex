(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(4),o=n.n(c),a=(n(14),n(3)),i=n.n(a),h=n(5),u=n(6),l=n(7),d=n(9),j=n(8),m=(n.p,n(16),n(17),n(18),n(0)),p=function(e){return Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(m.jsx)("h2",{children:e.monster.name}),Object(m.jsx)("p",{children:e.monster.email})]})},b=function(e){return Object(m.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(m.jsx)(p,{monster:e},e.id)}))})},f=(n(20),function(e){var t=e.placeholder,n=e.handleChange;return Object(m.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:" Monsters Rolodex "}),Object(m.jsx)(f,{placeholder:"search monsters",handleChange:this.handleChange}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsx)(b,{monsters:s})})]})}},{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),this.setState({monsters:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(s.Component),O=x,v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.cbf819fa.chunk.js.map