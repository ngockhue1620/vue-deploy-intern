(function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);b&&b(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8c297d73"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"a8ab3a61"}[t]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===c)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],b.parentNode.removeChild(b),n(o)},b.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(b);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0177":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(t,e,n,a,c,o){var u=Object(r["v"])("Header"),i=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["e"])("div",null,[Object(r["h"])(u),Object(r["h"])(i)])}n("ac1f"),n("841c");var c={class:"navbar navbar-expand-lg navbar-light bg-light"},o=Object(r["g"])("SHOP"),u=Object(r["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["h"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarSupportedContent"},s={class:"navbar-nav mr-auto"},l={class:"nav-item active"},d=Object(r["g"])("HOME"),b={class:"cart"},p=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-cart-dash",viewBox:"0 0 16 16"},[Object(r["h"])("path",{d:"M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"}),Object(r["h"])("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})],-1),h={class:"form-inline my-2 my-lg-0",method:"get"};function f(t,e,n,a,f,m){var O=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",c,[Object(r["h"])(O,{class:"btn btn-outline-info",to:"/"},{default:Object(r["B"])((function(){return[o]})),_:1}),u,Object(r["h"])("div",i,[Object(r["h"])("ul",s,[Object(r["h"])("li",l,[Object(r["h"])(O,{class:"nav-link",to:"/"},{default:Object(r["B"])((function(){return[d]})),_:1})])]),Object(r["h"])("div",b,[Object(r["h"])(O,{class:"btn btn-outline-info",to:"/cart"},{default:Object(r["B"])((function(){return[p,Object(r["g"])(" "+Object(r["x"])(t.count_amount_cart),1)]})),_:1})]),Object(r["h"])("div",h,[Object(r["C"])(Object(r["h"])("input",{class:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search","onUpdate:modelValue":e[1]||(e[1]=function(t){return f.keyWord=t})},null,512),[[r["z"],f.keyWord]]),Object(r["h"])("button",{class:"btn btn-outline-success my-2 my-sm-0",onClick:e[2]||(e[2]=function(e){return t.search(f.keyWord)})}," Search ")])])])}var m=n("5530"),O=n("5502"),g={name:"HelloWorld",data:function(){return{keyWord:""}},computed:Object(m["a"])({},Object(O["c"])(["count_amount_cart"])),methods:Object(m["a"])({},Object(O["b"])(["search"]))};g.render=f;var v=g,j={components:{Header:v}};j.render=a;var y=j,_=n("1da1"),C=(n("96cf"),n("d81d"),n("bc3a")),w=n.n(C),T={listProduct:[],query_search:""},E={getProduct:function(t){if(""==t.query_search)return t.listProduct;var e=[];return t.listProduct.map((function(n){var r=n.productName.toUpperCase().search(isNaN(t.query_search)?t.query_search.toUpperCase():t.query_search);r>=0|1==n.id&&e.push(n)})),e}},P={getListProduct:function(t){return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,w.a.get("http://laravel-react-sell-web.herokuapp.com/api/product").then((function(t){n("GET_PRODUCTS",t.data)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},search:function(t,e){var n=t.commit;n("SEARCH",e)},delete_search:function(t){var e=t.commit;e("DELETE_SEARCH")}},A={GET_PRODUCTS:function(t,e){t.listProduct=e,console.log("list",t.listProduct)},SEARCH:function(t,e){t.query_search=e},DELETE_SEARCH:function(t){t.query_search=""}},k={state:T,getters:E,mutations:A,actions:P},q=(n("a434"),{carts:[]}),S={count_amount_cart:function(t){var e=0;return t.carts.map((function(t){e+=t.quantity,console.log("run")})),e},getCartList:function(t){return console.log(t.carts),t.carts},count_total_cart:function(t){var e=0;return t.carts.map((function(t){e+=parseInt(t.price)*t.quantity})),e}},x={addProductTocart:function(t,e){var n=t.commit;n("ADD_TO_CART",e)},updateCartQuantity:function(t,e){var n=t.commit;n("UPDATE_CART_QUANTITY",e)},remove_cart_item:function(t,e){var n=t.commit;n("REMOVE_CART_ITEM",e)}},R={ADD_TO_CART:function(t,e){var n=!0;t.carts.map((function(t){if(t.id==e.id)return console.log("update gio hang"),t.quantity+=1,void(n=!1)})),console.log("them gio hang"),1==n&&(e.quantity=1,t.carts.push(e)),console.log(t.carts)},UPDATE_CART_QUANTITY:function(t,e){t.carts[e.index].quantity=parseInt(e.quantity)},REMOVE_CART_ITEM:function(t,e){t.carts.splice(e,1)}},L={state:q,getters:S,actions:x,mutations:R},M=n("bfa9"),H=new M["a"]({storage:window.localStorage}),N=Object(O["a"])({modules:{products:k,cart:L},plugins:[H.plugin]}),D=N,U=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),B={class:"body-component"};function I(t,e,n,a,c,o){var u=Object(r["v"])("Menu"),i=Object(r["v"])("Content");return Object(r["q"])(),Object(r["e"])("div",B,[Object(r["h"])(u),Object(r["h"])(i)])}var z={class:"Menu-component"},W={class:"btn-group"},V=Object(r["h"])("button",{type:"button",class:"btn btn-danger dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Category ",-1),Q={class:"dropdown-menu"};function G(t,e,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",z,[Object(r["h"])("div",W,[V,Object(r["h"])("div",Q,[Object(r["h"])("ul",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(c.categoryList,(function(e,n){return Object(r["q"])(),Object(r["e"])("li",{class:"dropdown-item",key:n,onClick:function(n){return t.search(e.id)}},Object(r["x"])(e.categoryName),9,["onClick"])})),128))])])])])}var J=n("bc3a"),Y=J.default,F=Y.create({baseURL:"http://laravel-react-sell-web.herokuapp.com/"}),K=F,X={data:function(){return{categoryList:[]}},created:function(){this.getCategory()},methods:Object(m["a"])(Object(m["a"])({},Object(O["b"])(["search"])),{},{getCategory:function(){var t=this;K.get("api/category").then((function(e){t.categoryList=e.data}))}})};n("91fe");X.render=G;var Z=X,$={class:"Content-component "},tt={class:"card-body"},et={class:"card-text"},nt={class:"component-price-Add-button"},rt={class:"product-price"},at=Object(r["h"])("div",{class:"Content-component "},"Đang tải dữ liệu",-1);function ct(t,e,n,a,c,o){return Object(r["q"])(),Object(r["e"])(r["b"],null,{default:Object(r["B"])((function(){return[Object(r["h"])("div",$,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(t.getProduct,(function(e){return Object(r["q"])(),Object(r["e"])("div",{class:"card ",key:e.id},[Object(r["h"])("img",{class:"productImage-content",src:e.imageAddress,alt:"Card image cap"},null,8,["src"]),Object(r["h"])("div",tt,[Object(r["h"])("p",et,Object(r["x"])(e.productName),1)]),Object(r["h"])("div",nt,[Object(r["h"])("p",rt,Object(r["x"])(e.price)+" VNĐ",1),Object(r["h"])("button",{class:"btn btn-primary",onClick:function(n){return t.addProductTocart(e)}},"Add To Cart",8,["onClick"])])])})),128))])]})),fallback:Object(r["B"])((function(){return[at]})),_:1})}var ot={data:function(){return{listProduct:[]}},created:function(){this.getListProduct(),this.delete_search()},computed:Object(m["a"])({},Object(O["c"])(["getProduct"])),methods:Object(m["a"])({},Object(O["b"])(["getListProduct","addProductTocart","delete_search"]))};n("6ee4");ot.render=ct;var ut=ot,it={components:{Menu:Z,Content:ut}};it.render=I;var st=it,lt=[{path:"/",name:"Home",component:st},{path:"/cart",name:"About",component:function(){return n.e("about").then(n.bind(null,"ee55"))}}],dt=Object(U["a"])({history:Object(U["b"])("/"),routes:lt}),bt=dt,pt=Object(r["d"])(y);pt.use(D),pt.use(bt),pt.mount("#app")},"6ee4":function(t,e,n){"use strict";n("e71a")},"91fe":function(t,e,n){"use strict";n("0177")},e71a:function(t,e,n){}});
//# sourceMappingURL=app.08b9efce.js.map