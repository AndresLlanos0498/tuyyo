(this["webpackJsonpnetflix-clone-reactjs"]=this["webpackJsonpnetflix-clone-reactjs"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/icon-amazon.f42807c1.png"},20:function(e,t,a){e.exports=a.p+"static/media/icon-netflix.262e5be1.png"},34:function(e,t,a){e.exports=a(53)},40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),i=a(14),s=a(2),l=a(4),u=a.n(l),m=a(8),d=a(3),p="f1be033bddb8fb966472887ab1a96000",f=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={getHomeList:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/discover/tv?with_network=213&language=es-MX&api_key=".concat(p));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originales de Netflix",type:"tv",items:e.t0},e.next=6,f("/trending/all/week?language=es-MX&api_key=".concat(p));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para ti",type:"tv",items:e.t2},e.next=10,f("/movie/top_rated?language=es-MX&api_key=".concat(p));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Lo mas visto",type:"movie",items:e.t4},e.next=14,f("/discover/movie?with_genres=28&language=es-MX&api_key=".concat(p));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"Accion",type:"movie",items:e.t6},e.next=18,f("/discover/movie?with_genres=35&language=es-MX&api_key=".concat(p));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Comedia",type:"movie",items:e.t8},e.next=22,f("/discover/movie?with_genres=27&language=es-MX&api_key=".concat(p));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",type:"movie",items:e.t10},e.next=26,f("/discover/movie?with_genres=10749&language=es-MX&api_key=".concat(p));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",type:"movie",items:e.t12},e.next=30,f("/discover/movie?with_genres=99&language=es-MX&api_key=".concat(p));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Documentales",type:"movie",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=a,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,f("/movie/".concat(t,"?language=es-MX&api_key=").concat(p));case 7:return n=e.sent,e.abrupt("break",15);case 9:return e.next=11,f("/tv/".concat(t,"?language=es-MX&api_key=").concat(p));case 11:return n=e.sent,e.abrupt("break",15);case 13:return n=null,e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getTrailerVideo:function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=a,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,f("/movie/".concat(t,"/videos?language=es-MX&api_key=").concat(p));case 7:return n=e.sent,e.abrupt("break",15);case 9:return e.next=11,f("/tv/".concat(t,"/videos?language=es-MX&api_key=").concat(p));case 11:return n=e.sent,e.abrupt("break",15);case 13:return n=null,e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},g=(a(40),a(29)),b=a.n(g),h=a(30),E=a.n(h);var w=function(e){var t=e.title,a=e.items,c=e.type,o=Object(n.useState)(-400),s=Object(d.a)(o,2),l=s[0],u=s[1];return r.a.createElement("div",{className:"movieRow"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"movieRow--left",onClick:function(){var e=l+Math.round(window.innerWidth/2);e>0&&(e=0),u(e)}},r.a.createElement(b.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"movieRow--right",onClick:function(){var e=l-Math.round(window.innerWidth/2),t=200*a.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-80),u(e)}},r.a.createElement(E.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"movieRow--listarea"},r.a.createElement("div",{className:"movieRow--list",style:{marginLeft:l,width:200*a.results.length}},a.results.length>0&&a.results.map((function(e,t){return null!==e.poster_path&&r.a.createElement("div",{key:t,className:"movieRow--item"},r.a.createElement(i.b,{to:"/details/".concat(c,"/").concat(e.id)},r.a.createElement("img",{alt:e.original_title,src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path)})))})))))},k=(a(47),a(31)),y=a.n(k),_=a(32),x=a.n(_);var N=function(e){var t=e.item,a=(new Date(t.first_air_date),[]);for(var n in t.genres)a.push(t.genres[n].name);return t.overview.length>200?t.overview.substring(0,200):t.overview,r.a.createElement("section",{className:"featured",style:{backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center top",backgroundImage:"url(https://i.ibb.co/25YKcVZ/Whats-App-Image-2024-09-07-at-12-06-16-AM.jpg)"}},r.a.createElement("div",{className:"featured--vertical"},r.a.createElement("div",{className:"featured--horizontal"},r.a.createElement("div",{className:"featured--name"},"Tu y Yo"),r.a.createElement("div",{className:"featured--info"},r.a.createElement("div",{className:"featured--points"},"20/10 puntos"),r.a.createElement("div",{className:"featured--year"},"13 de Julio 2024"),r.a.createElement("div",{className:"featured--seasons"},"Primera temporada")),r.a.createElement("div",{className:"featured--description"},"Desde que se conocieron siendo apenas unos adolescentes, su conexi\xf3n fue innegable, pero la vida, con todos sus giros inesperados, les hizo recorrer caminos separados. Ahora, despu\xe9s de a\xf1os de aprendizajes, amores y desamores, se reencuentran para descubrir que lo que sent\xedan de adolescentes ha madurado en un amor profundo e inquebrantable. Juntos, deber\xe1n enfrentar los desaf\xedos del presente mientras construyen un futuro donde cada recuerdo, cada promesa y cada sue\xf1o se entrelazan para crear una historia de amor verdadera."),r.a.createElement("div",{className:"featured--buttons"},r.a.createElement("a",{disabled:!0,className:"featured--watchbutton",href:"https://youtube.com/embed/1TmzXqsdAnI?si=KdU2_VBXmPsCuIre?cc_lang_pref=fr&autoplay=1&cc_load_policy=1&controls=0&showinfo=0&autohide=1"},r.a.createElement("div",null,r.a.createElement(y.a,null),"Reproducir")),r.a.createElement("a",{disabled:!0,className:"featured--mylistbutton"},r.a.createElement("div",null,r.a.createElement(x.a,null),"Agregar a lista"))),r.a.createElement("div",{className:"featured--genres"},r.a.createElement("strong",null,"Generos:")," Romance, Comedia, Drama"))))};a(48);var j=function(e){var t=e.black;return r.a.createElement("header",{className:t?"black":""},r.a.createElement("div",{className:"header--logo"},r.a.createElement("a",{href:""},r.a.createElement("img",{alt:"Netflix",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"})),r.a.createElement("div",null,"F\u2764A")),r.a.createElement("div",{className:"header--user"},r.a.createElement("a",{href:""},r.a.createElement("img",{alt:"Usu\xe1rio",src:"https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg"}))))};a(49);var O=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(d.a)(o,2),s=i[0],l=i[1],p=Object(n.useState)(!1),f=Object(d.a)(p,2),g=f[0],b=f[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getHomeList();case 2:return t=e.sent,l(t),a=t.filter((function(e){return"originals"===e.slug})),n=Math.floor(Math.random()*(a[0].items.results.length-1)),r=a[0].items.results[n],e.next=9,v.getMovieInfo(r.id,"tv");case 9:o=e.sent,c(o);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=function(){window.scrollY>10?b(!0):b(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(j,{black:g}),a&&r.a.createElement(N,{item:a}),r.a.createElement("section",{className:"lists"},s.map((function(e,t){return r.a.createElement(w,{key:t,title:e.title,items:e.items,type:e.type})}))),r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.netflix.com/br/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"Netflix",width:"18",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png"})),r.a.createElement("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"Themoviedb.org",width:"42",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"}))),"Hecho con ",r.a.createElement("span",{role:"img","aria-label":"Cora\xe7\xe3o"},"\u2764\ufe0f por ",r.a.createElement("a",{href:"",target:"_blank",rel:"noopener noreferrer"},"Andres Llanos "))),s.length<=0&&r.a.createElement("div",{className:"loading"},r.a.createElement("img",{alt:"Carregando",src:"https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif"})))},M=a(21),S=a.n(M),z=a(22),X=a.n(z),A=a(23),I=a.n(A),R=a(19),C=a.n(R),q=a(20),T=a.n(q);a(50);var V=function(){var e=Object(s.f)(),t=e.id,a=e.type,c=Object(n.useState)({}),o=Object(d.a)(c,2),l=o[0],p=o[1],f=Object(n.useState)([]),g=Object(d.a)(f,2),b=g[0],h=g[1],E=Object(n.useState)(),w=Object(d.a)(E,2),k=w[0],y=w[1],_=Object(n.useState)(!1),x=Object(d.a)(_,2),N=x[0],j=x[1],O=Object(n.useState)(),M=Object(d.a)(O,2),z=M[0],A=M[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getMovieInfo(t,a);case 2:return n=e.sent,e.next=5,v.getTrailerVideo(t,a);case 5:r=e.sent,p(n),h(r),A(n.overview.length>120?n.overview.substring(0,120)+"...":n.overview),console.log(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,a]),r.a.createElement("main",{className:"details",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(l.backdrop_path,")")}},r.a.createElement(i.b,{to:"/",className:"details--backbutton"},"Volver"),r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("div",{className:"details--info"},r.a.createElement("h3",{className:l.vote_average>5?"positive":"negative"},10*l.vote_average+"%")),r.a.createElement("h1",null,l.original_title||l.original_name),r.a.createElement("h4",null,z),void 0!==b.results&&0!==b.results.length&&r.a.createElement("a",{onClick:function(){return function(){var e=b.results;if(void 0!==e&&e.length>0){var t="https://youtube.com/embed/".concat(e[0].key,"?autoplay=1&controls=0&showinfo=0&autohide=1");y(t)}}()},className:"details--viewtrailer"},r.a.createElement("div",null,r.a.createElement(S.a,null),"Ver Trailer")),void 0!==l.homepage&&""!==l.homepage&&r.a.createElement("a",{href:l.homepage,target:"_blank",rel:"noopener noreferrer",className:"details--officialsite"},r.a.createElement("div",null,l.homepage.includes("netflix")?r.a.createElement("img",{alt:"Netflix",src:T.a,width:"23"}):l.homepage.includes("amazon")?r.a.createElement("img",{alt:"Amazon",src:C.a,width:"23"}):r.a.createElement(X.a,null))))),void 0!==k&&r.a.createElement("aside",{className:N?"video--fullscreen":""},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){j(!N)}},r.a.createElement(I.a,null))),r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"1",src:k})))};a(51);var L=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),s=Object(d.a)(o,2),l=s[0],p=s[1],f=Object(n.useState)(!1),v=Object(d.a)(f,2),g=v[0],b=v[1],h=Object(n.useState)(),E=Object(d.a)(h,2),w=E[0],k=E[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t="Desde que se conocieron siendo apenas unos adolescentes, su conexi\xf3n fue innegable, pero la vida, con todos sus giros inesperad.."),k("Descubrieron que lo suyo siempre fue amor. Ahora, entre risas, viajes, y alguno que otro conflicto, viven su dia a dia construyendo un futuro juntos."),console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement("main",{className:"details",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://i.ibb.co/K6zyzRR/Whats-App-Image-2024-09-07-at-12-01-44-AM.jpg)"}},r.a.createElement(i.b,{to:"/",className:"details--backbutton"},"Volver"),r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("div",{className:"details--info"},r.a.createElement("h3",{className:"positive"},"100%")),r.a.createElement("h1",null,"Siempre Nosotros"),r.a.createElement("h4",null,w),r.a.createElement("a",{onClick:function(){return function(){if(void 0!==a&&a.length>0){p("https://youtube.com/embed/1TmzXqsdAnI?si=KdU2_VBXmPsCuIre?cc_lang_pref=fr&autoplay=1&cc_load_policy=1&controls=0&showinfo=0&autohide=1")}}()},className:"details--viewtrailer"},r.a.createElement("div",null,r.a.createElement(S.a,null),"Ver Trailer")),void 0!==a.homepage&&""!==a.homepage&&r.a.createElement("a",{href:a.homepage,target:"_blank",rel:"noopener noreferrer",className:"details--officialsite"},r.a.createElement("div",null,a.homepage.includes("netflix")?r.a.createElement("img",{alt:"Netflix",src:T.a,width:"23"}):a.homepage.includes("amazon")?r.a.createElement("img",{alt:"Amazon",src:C.a,width:"23"}):r.a.createElement(X.a,null))))),void 0!==l&&r.a.createElement("aside",{className:g?"video--fullscreen":""},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){b(!g)}},r.a.createElement(I.a,null))),r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"1",src:l})))};var D=function(){return r.a.createElement(i.a,{basename:"/tuyyo"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:O}),r.a.createElement(s.a,{path:"/13072024",exact:!0,component:L}),r.a.createElement(s.a,{path:"/details/:type/:id",exact:!0,component:V})))};var P=function(){return r.a.createElement(D,null)};o.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a7023bb2.chunk.js.map