(self.webpackChunkexemplo=self.webpackChunkexemplo||[]).push([[179],{cDf5:function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},hvbx:function(e,n,t){"use strict";t.r(n);var l,o,r,i,a={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function _(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var l,o,r,i=arguments,a={};for(r in n)"key"==r?l=n[r]:"ref"==r?o=n[r]:a[r]=n[r];if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(i[r]);if(null!=t&&(a.children=t),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===a[r]&&(a[r]=e.defaultProps[r]);return f(e,a,l,o,null)}function f(e,n,t,o,r){var i={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++l.__v:r};return null!=l.vnode&&l.vnode(i),i}function h(e){return e.children}function d(e,n){this.props=e,this.context=n}function v(e,n){if(null==n)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?v(e):null}function m(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!y.__r++||i!==l.debounceRendering)&&((i=l.debounceRendering)||r)(y)}function y(){for(var e;y.__r=o.length;)e=o.sort((function(e,n){return e.__v.__b-n.__v.__b})),o=[],e.some((function(e){var n,t,l,o,r,i;e.__d&&(r=(o=(n=e).__v).__e,(i=n.__P)&&(t=[],(l=c({},o)).__v=o.__v+1,P(i,o,l,n.__n,void 0!==i.ownerSVGElement,null!=o.__h?[r]:null,t,null==r?v(o):r,o.__h),M(t,o),o.__e!=r&&m(o)))}))}function b(e,n,t,l,o,r,i,s,c,_){var p,d,m,g,y,b,x,N=l&&l.__k||u,C=N.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(g=t.__k[p]=null==(g=n[p])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?f(null,g,null,null,g):Array.isArray(g)?f(h,{children:g},null,null,null):g.__b>0?f(g.type,g.props,g.key,null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(m=N[p])||m&&g.key==m.key&&g.type===m.type)N[p]=void 0;else for(d=0;d<C;d++){if((m=N[d])&&g.key==m.key&&g.type===m.type){N[d]=void 0;break}m=null}P(e,g,m=m||a,o,r,i,s,c,_),y=g.__e,(d=g.ref)&&m.ref!=d&&(x||(x=[]),m.ref&&x.push(m.ref,null,g),x.push(d,g.__c||y,g)),null!=y?(null==b&&(b=y),"function"==typeof g.type&&null!=g.__k&&g.__k===m.__k?g.__d=c=k(g,c,e):c=A(e,g,m,N,y,c),_||"option"!==t.type?"function"==typeof t.type&&(t.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=v(m))}for(t.__e=b,p=C;p--;)null!=N[p]&&("function"==typeof t.type&&null!=N[p].__e&&N[p].__e==t.__d&&(t.__d=v(l,p+1)),E(N[p],N[p]));if(x)for(p=0;p<x.length;p++)L(x[p],x[++p],x[++p])}function k(e,n,t){var l,o;for(l=0;l<e.__k.length;l++)(o=e.__k[l])&&(o.__=e,n="function"==typeof o.type?k(o,n,t):A(t,o,o,e.__k,o.__e,n));return n}function x(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){x(e,n)})):n.push(e)),n}function A(e,n,t,l,o,r){var i,a,u;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(null==t||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),i=null;else{for(a=r,u=0;(a=a.nextSibling)&&u<l.length;u+=2)if(a==o)break e;e.insertBefore(o,r),i=r}return void 0!==i?i:o.nextSibling}function N(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||s.test(n)?t:t+"px"}function C(e,n,t,l,o){var r;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof l&&(e.style.cssText=l=""),l)for(n in l)t&&n in t||N(e.style,n,"");if(t)for(n in t)l&&t[n]===l[n]||N(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?l||e.addEventListener(n,r?w:S,r):e.removeEventListener(n,r?w:S,r);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function S(e){this.l[e.type+!1](l.event?l.event(e):e)}function w(e){this.l[e.type+!0](l.event?l.event(e):e)}function P(e,n,t,o,r,i,a,u,s){var _,p,f,v,m,g,y,k,x,A,N,C=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,u=n.__e=t.__e,n.__h=null,i=[u]),(_=l.__b)&&_(n);try{e:if("function"==typeof C){if(k=n.props,x=(_=C.contextType)&&o[_.__c],A=_?x?x.props.value:_.__:o,t.__c?y=(p=n.__c=t.__c).__=p.__E:("prototype"in C&&C.prototype.render?n.__c=p=new C(k,A):(n.__c=p=new d(k,A),p.constructor=C,p.render=D),x&&x.sub(p),p.props=k,p.state||(p.state={}),p.context=A,p.__n=o,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=c({},p.__s)),c(p.__s,C.getDerivedStateFromProps(k,p.__s))),v=p.props,m=p.state,f)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,A),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,A)||n.__v===t.__v){p.props=k,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,p.__h.length&&a.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,A),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,g)}))}p.context=A,p.props=k,p.state=p.__s,(_=l.__r)&&_(n),p.__d=!1,p.__v=n,p.__P=e,_=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=c(c({},o),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(v,m)),N=null!=_&&_.type===h&&null==_.key?_.props.children:_,b(e,Array.isArray(N)?N:[N],n,t,o,r,i,a,u,s),p.base=n.__e,n.__h=null,p.__h.length&&a.push(p),y&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=U(t.__e,n,t,o,r,i,a,s);(_=l.diffed)&&_(n)}catch(e){n.__v=null,(s||null!=i)&&(n.__e=u,n.__h=!!s,i[i.indexOf(u)]=null),l.__e(e,n,t)}}function M(e,n){l.__c&&l.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){l.__e(e,n.__v)}}))}function U(e,n,t,l,o,r,i,s){var c,p,f,h,d=t.props,v=n.props,m=n.type,g=0;if("svg"===m&&(o=!0),null!=r)for(;g<r.length;g++)if((c=r[g])&&(c===e||(m?c.localName==m:3==c.nodeType))){e=c,r[g]=null;break}if(null==e){if(null===m)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),r=null,s=!1}if(null===m)d===v||s&&e.data===v||(e.data=v);else{if(r=r&&u.slice.call(e.childNodes),p=(d=t.props||a).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!s){if(null!=r)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,l,o){var r;for(r in t)"children"===r||"key"===r||r in n||C(e,r,null,t[r],l);for(r in n)o&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||C(e,r,n[r],t[r],l)}(e,v,d,o,s),f)n.__k=[];else if(g=n.props.children,b(e,Array.isArray(g)?g:[g],n,t,l,o&&"foreignObject"!==m,r,i,e.firstChild,s),null!=r)for(g=r.length;g--;)null!=r[g]&&_(r[g]);s||("value"in v&&void 0!==(g=v.value)&&(g!==e.value||"progress"===m&&!g)&&C(e,"value",g,d.value,!1),"checked"in v&&void 0!==(g=v.checked)&&g!==e.checked&&C(e,"checked",g,d.checked,!1))}return e}function L(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){l.__e(e,t)}}function E(e,n,t){var o,r,i;if(l.unmount&&l.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||L(o,null,n)),t||"function"==typeof e.type||(t=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){l.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t);null!=r&&_(r)}function D(e,n,t){return this.constructor(e,t)}function T(e,n,t){var o,r,i;l.__&&l.__(e,n),r=(o="function"==typeof t)?null:t&&t.__k||n.__k,i=[],P(n,e=(!o&&t||n).__k=p(h,null,[e]),r||a,a,void 0!==n.ownerSVGElement,!o&&t?[t]:r?null:n.firstChild?u.slice.call(n.childNodes):null,i,!o&&t?t:r?r.__e:n.firstChild,o),M(i,e)}l={__e:function(e,n){for(var t,l,o;n=n.__;)if((t=n.__c)&&!t.__)try{if((l=t.constructor)&&null!=l.getDerivedStateFromError&&(t.setState(l.getDerivedStateFromError(e)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),o=t.__d),o)return t.__E=t}catch(n){e=n}throw e},__v:0},d.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},t),this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),g(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},d.prototype.render=h,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0;var R={};function I(e,n){for(var t in n)e[t]=n[t];return e}function O(e,n,t){var l,o=/(?:\?([^#]*))?(#.*)?$/,r=e.match(o),i={};if(r&&r[1])for(var a=r[1].split("&"),u=0;u<a.length;u++){var s=a[u].split("=");i[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=B(e.replace(o,"")),n=B(n||"");for(var c=Math.max(e.length,n.length),_=0;_<c;_++)if(n[_]&&":"===n[_].charAt(0)){var p=n[_].replace(/(^:|[+*?]+$)/g,""),f=(n[_].match(/[+*?]+$/)||R)[0]||"",h=~f.indexOf("+"),d=~f.indexOf("*"),v=e[_]||"";if(!v&&!d&&(f.indexOf("?")<0||h)){l=!1;break}if(i[p]=decodeURIComponent(v),h||d){i[p]=e.slice(_).map(decodeURIComponent).join("/");break}}else if(n[_]!==e[_]){l=!1;break}return(!0===t.default||!1!==l)&&i}function W(e,n){return e.rank<n.rank?1:e.rank>n.rank?-1:e.index-n.index}function j(e,n){return e.index=n,e.rank=function(e){return e.props.default?0:(n=e.props.path,B(n).map(K).join(""));var n}(e),e.props}function B(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function K(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var $=null,F=[],G=[],H={};function z(){var e;return""+((e=$&&$.location?$.location:$&&$.getCurrentLocation?$.getCurrentLocation():"undefined"!=typeof location?location:H).pathname||"")+(e.search||"")}function q(e,n){return void 0===n&&(n=!1),"string"!=typeof e&&e.url&&(n=e.replace,e=e.url),function(e){for(var n=F.length;n--;)if(F[n].canRoute(e))return!0;return!1}(e)&&function(e,n){void 0===n&&(n="push"),$&&$[n]?$[n](e):"undefined"!=typeof history&&history[n+"State"]&&history[n+"State"](null,null,e)}(e,n?"replace":"push"),Q(e)}function Q(e){for(var n=!1,t=0;t<F.length;t++)!0===F[t].routeTo(e)&&(n=!0);for(var l=G.length;l--;)G[l](e);return n}function V(e){if(e&&e.getAttribute){var n=e.getAttribute("href"),t=e.getAttribute("target");if(n&&n.match(/^\//g)&&(!t||t.match(/^_?self$/i)))return q(n)}}function J(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return V(e.currentTarget||e.target||this),X(e)}function X(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function Y(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var n=e.target;do{if("A"===String(n.nodeName).toUpperCase()&&n.getAttribute("href")){if(n.hasAttribute("native"))return;if(V(n))return X(e)}}while(n=n.parentNode)}}var Z=!1;var ee=function(e){function n(n){e.call(this,n),n.history&&($=n.history),this.state={url:n.url||z()},Z||("function"==typeof addEventListener&&($||addEventListener("popstate",(function(){Q(z())})),addEventListener("click",Y)),Z=!0)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},n.prototype.canRoute=function(e){var n=x(this.props.children);return this.getMatchingChildren(n,e,!1).length>0},n.prototype.routeTo=function(e){this.setState({url:e});var n=this.canRoute(e);return this.updating||this.forceUpdate(),n},n.prototype.componentWillMount=function(){F.push(this),this.updating=!0},n.prototype.componentDidMount=function(){var e=this;$&&(this.unlisten=$.listen((function(n){e.routeTo(""+(n.pathname||"")+(n.search||""))}))),this.updating=!1},n.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),F.splice(F.indexOf(this),1)},n.prototype.componentWillUpdate=function(){this.updating=!0},n.prototype.componentDidUpdate=function(){this.updating=!1},n.prototype.getMatchingChildren=function(e,n,t){return e.filter(j).sort(W).map((function(e){var l=O(n,e.props.path,e.props);if(l){if(!1!==t){var o={url:n,matches:l};return I(o,l),delete o.ref,delete o.key,function(e,n,t){var l,o,r,i=arguments,a=c({},e.props);for(r in n)"key"==r?l=n[r]:"ref"==r?o=n[r]:a[r]=n[r];if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(i[r]);return null!=t&&(a.children=t),f(e.type,a,l||e.key,o||e.ref,null)}(e,o)}return e}})).filter(Boolean)},n.prototype.render=function(e,n){var t=e.children,l=e.onChange,o=n.url,r=this.getMatchingChildren(x(t),o,!0),i=r[0]||null,a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof l&&l({router:this,url:o,previous:a,active:r,current:i})),i},n}(d),ne=function(e){return p("a",I({onClick:J},e))};ee.subscribers=G,ee.getCurrentUrl=z,ee.route=q,ee.Router=ee,ee.Route=function(e){return p(e.component,e)},ee.Link=ne,ee.exec=O;var te=ee;t("cDf5");function le(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e)for(var t in e)e[t]&&(n=n.length?n.concat(" ",t):n.concat(t));return n}function oe(){return p("navbar",{className:"navbar-top"},p("h1",{title:"Administrações"},p(ne,{href:"/",className:"home-link"},"Adminstração municipal de belas")),p("div",{className:"navbar-logo",title:"Administrações"},p(ne,{href:"/",className:"home-link"},p("img",{alt:"República de Angola Insignia",src:"./assets/imagens/insignia.png",width:"100"}))),p("div",{className:"navbar-ham"},p("button",{className:"nav-open-menu",onClick:function(){var e=document.querySelector(".navbar-list");e&&e.classList.add("nav-menu-open")}},p("svg",{width:"16",height:"16",viewBox:"0 0 32 32"},p("title",null,"Menu"),p("path",{d:"M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"})),p("span",null,"Menu"))),p("div",{className:"navbar-list"},p("button",{className:"nav-close-menu",onClick:function(){var e=document.querySelector(".navbar-list");e&&e.classList.remove("nav-menu-open")}},p("svg",{width:"16",height:"16",viewBox:"0 0 32 32",fill:"white"},p("title",null,"Fecha Menu"),p("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"}))),p("div",{className:"nav-menu"},p("h2",null,"Área institucional"),p("ul",null,p("li",null,p(ne,{href:"/pagina"},"Estatuto orgánico")),p("li",null,p(ne,{href:"/pagina"},"Organigrama")),p("li",null,p(ne,{href:"/pagina"},"Quadro de pessoal")),p("li",null,p(ne,{href:"/pagina"},"Manual de acolhimento")))),p("div",{className:"nav-menu"},p("h2",null,"Agenda Política"),p("ul",null,p("li",null,p(ne,{href:"/pagina"},"Agenda do Administrador(a)")),p("li",null,p(ne,{href:"/pagina"},"Agenda do vice-Administrador(a)")))),p("div",{className:"nav-menu"},p("h2",null,"Serviços"),p("ul",null,p("li",null,p(ne,{href:"/pagina"},"Suporte Técnico")),p("li",null,p(ne,{href:"/pagina"},"Listas telefonicos")))),p("div",{className:"nav-menu"},p("h2",null,"Publicações e Legislações"),p("ul",null,p("li",null,p(ne,{href:"/pagina"},"Artigos"))))))}function re(e,n){return function(t){var l=document.getElementById("".concat(e,"-").concat(n)),o=document.querySelectorAll(".".concat(e,"-paneis > .show-galeria-panel"));o&&o.forEach((function(e){e.classList.remove("show-galeria-panel")})),l&&l.classList.add("show-galeria-panel")}}function ie(e){var n=e.buttonsPos,t=e.name,l=e.items,o=e.width,r=e.height,i=l||[];return p("div",{className:"galeria-wrapper"},p("div",{className:le({"galeria-button-bottom-right":"bottom"===n,"galeria-button-top-left":"top"===n},"galeria-button")},i.map((function(e,n){return p("button",{onMouseDown:re(t,n+1)},n+1)}))),p("div",{className:"".concat(t,"-paneis")},i.map((function(e,n){if(0===n){var l=le({"show-galeria-panel":!0},e.props.className);e.props.className=l}e.props.style||(e.props.style={}),e.props.id="".concat(t,"-").concat(n+1);var i=le({"galeria-panel-item":!0},e.props.className);return e.props.className=i,e.props.style.width=o,e.props.style.height=r,e}))))}T(p((function(){return p(h,null,p(oe,null),p(te,{history:void 0,onChange:function(){}},p("div",{path:"/pagina",style:{height:"100vh",textAlign:"center"}},p("h1",null,"Template")),p("main",{path:"/",className:"app-content"},p(ie,{height:"450px",buttonsPos:"bottom",name:"galeria-panel-item",items:[p("div",null,p("img",{alt:"Galeria",src:"./assets/imagens/belas6.jpeg"})),p("div",null,p("img",{alt:"Galeria",src:"./assets/imagens/belas2.jpeg"})),p("div",null,p("img",{alt:"Galeria",src:"./assets/imagens/belas3.jpeg"})),p("div",null,p("img",{alt:"Galeria",src:"./assets/imagens/belas4.jpeg"})),p("div",null,p("img",{alt:"Galeria",src:"./assets/imagens/belas5.jpeg"}))]}))),p("footer",null,p("div",{className:"footer-img"},p("img",{alt:"República de Angola",src:"./assets/imagens/angola-footer.png"})),p("div",{className:"footer-lists"},p("div",{className:"footer-menu"},p("h2",null,"Área institucional"),p("ul",null,p("li",null,p(ne,{href:"/pagina"},"Estatuto orgánico")),p("li",null,p(ne,{href:"/pagina"},"Organigrama")),p("li",null,p(ne,{href:"/pagina"},"Quadro de pessoal")),p("li",null,p(ne,{href:"/pagina"},"Manual de acolhimento")))),p("div",{className:"footer-menu"},p("h2",null,"Agenda Política"),p("ul",null,p("li",null,p(ne,{href:"/pagina"},"Agenda do Administrador(a)")),p("li",null,p(ne,{href:"/pagina"},"Agenda do vice-Administrador(a)")))),p("div",{className:"footer-menu"},p("h2",null,"Serviços"),p("ul",null,p("li",null,p(ne,{href:"/pagina"},"Suporte Técnico")),p("li",null,p(ne,{href:"/pagina"},"Listas telefonicos")))),p("div",{className:"footer-menu"},p("h2",null,"Publicações e Legislações"),p("ul",null,p("li",null,p(ne,{href:"/pagina"},"Artigos")))))))}),null),document.getElementById("app"))}},0,[["hvbx",303]]]);