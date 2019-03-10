(function () {function xc(e){return(xc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function db(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xa(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function gb(e,t,r){return t&&Xa(e.prototype,t),r&&Xa(e,r),e}function ib(e,t){return!t||"object"!==xc(t)&&"function"!=typeof t?Eb(e):t}function Eb(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Sb(e){return(Sb=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Tb(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&lc(e,t)}function lc(e,t){return(lc=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var wc=function(){},g={},s=[],ab=[];function a(e,t){var r,o,n,$,a=ab;for($=arguments.length;$-->2;)s.push(arguments[$]);for(t&&null!=t.children&&(s.length||s.push(t.children),delete t.children);s.length;)if((o=s.pop())&&void 0!==o.pop)for($=o.length;$--;)s.push(o[$]);else"boolean"==typeof o&&(o=null),(n="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(n=!1)),n&&r?a[a.length-1]+=o:a===ab?a=[o]:a.push(o),r=n;var m=new wc;return m.nodeName=e,m.children=a,m.attributes=null==t?void 0:t,m.key=null==t?void 0:t.key,void 0!==g.vnode&&g.vnode(m),m}function j(e,t){for(var r in t)e[r]=t[r];return e}function p(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var _b="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function ac(e,t){return a(e.nodeName,j(j({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var ic=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,sa=[];function Ea(e){!e._dirty&&(e._dirty=!0)&&1==sa.push(e)&&(g.debounceRendering||_b)(Ia)}function Ia(){for(var e;e=sa.pop();)e._dirty&&E(e)}function Cc(e,t,r){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&Va(e,t.nodeName):r||e._componentConstructor===t.nodeName}function Va(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function Wa(e){var t=j({},e.attributes);t.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);return t}function Db(e,t){var r=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return r.normalizedNodeName=e,r}function ea(e){var t=e.parentNode;t&&t.removeChild(e)}function ha(e,t,r,o,n){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)p(r,null),p(o,e);else if("class"!==t||n){if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof r||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof r)for(var $ in r)$ in o||(e.style[$]="");for(var $ in o)e.style[$]="number"==typeof o[$]&&!1===ic.test($)?o[$]+"px":o[$]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?r||e.addEventListener(t,ia,a):e.removeEventListener(t,ia,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!n&&t in e){try{e[t]=null==o?"":o}catch(p){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var m=n&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?m?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(m?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}}else e.className=o||""}function ia(e){return this._listeners[e.type](g.event&&g.event(e)||e)}var na=[],da=0,y=!1,ya=!1;function Ba(){for(var e;e=na.shift();)g.afterMount&&g.afterMount(e),e.componentDidMount&&e.componentDidMount()}function Ca(e,t,r,o,n,$){da++||(y=null!=n&&void 0!==n.ownerSVGElement,ya=null!=e&&!("__preactattr_"in e));var a=Da(e,t,r,o,$);return n&&a.parentNode!==n&&n.appendChild(a),--da||(ya=!1,$||Ba()),a}function Da(e,t,r,o,n){var $=e,a=y;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||n)?e.nodeValue!=t&&(e.nodeValue=t):($=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild($,e),k(e,!0))),$.__preactattr_=!0,$;var m=t.nodeName;if("function"==typeof m)return Zb(e,t,r,o);if(y="svg"===m||"foreignObject"!==m&&y,m=String(m),(!e||!Va(e,m))&&($=Db(m,y),e)){for(;e.firstChild;)$.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild($,e),k(e,!0)}var p=$.firstChild,i=$.__preactattr_,s=t.children;if(null==i){i=$.__preactattr_={};for(var l=$.attributes,v=l.length;v--;)i[l[v].name]=l[v].value}return!ya&&s&&1===s.length&&"string"==typeof s[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=s[0]&&(p.nodeValue=s[0]):(s&&s.length||null!=p)&&Rc($,s,r,o,ya||null!=i.dangerouslySetInnerHTML),rb($,t.attributes,i),y=a,$}function Rc(e,t,r,o,n){var $,a,m,p,i,s=e.childNodes,l=[],v={},d=0,c=0,A=s.length,u=0,O=t?t.length:0;if(0!==A)for(var K=0;K<A;K++){var f=s[K],x=f.__preactattr_;null!=(h=O&&x?f._component?f._component.__key:x.key:null)?(d++,v[h]=f):(x||(void 0!==f.splitText?!n||f.nodeValue.trim():n))&&(l[u++]=f)}if(0!==O)for(K=0;K<O;K++){var h;if(i=null,null!=(h=(p=t[K]).key))d&&void 0!==v[h]&&(i=v[h],v[h]=void 0,d--);else if(c<u)for($=c;$<u;$++)if(void 0!==l[$]&&Cc(a=l[$],p,n)){i=a,l[$]=void 0,$===u-1&&u--,$===c&&c++;break}i=Da(i,p,r,o),m=s[K],i&&i!==e&&i!==m&&(null==m?e.appendChild(i):i===m.nextSibling?ea(m):e.insertBefore(i,m))}if(d)for(var K in v)void 0!==v[K]&&k(v[K],!1);for(;c<=u;)void 0!==(i=l[u--])&&k(i,!1)}function k(e,t){var r=e._component;r?F(r):(null!=e.__preactattr_&&p(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||ea(e),Ha(e))}function Ha(e){for(e=e.lastChild;e;){var t=e.previousSibling;k(e,!0),e=t}}function rb(e,t,r){var o;for(o in r)t&&null!=t[o]||null==r[o]||ha(e,o,r[o],r[o]=void 0,y);for(o in t)"children"===o||"innerHTML"===o||o in r&&t[o]===("value"===o||"checked"===o?e[o]:r[o])||ha(e,o,r[o],r[o]=t[o],y)}var z=[];function Ka(e,t,r){var o,n=z.length;for(e.prototype&&e.prototype.render?(o=new e(t,r),I.call(o,t,r)):((o=new I(t,r)).constructor=e,o.render=Ob);n--;)if(z[n].constructor===e)return o.nextBase=z[n].nextBase,z.splice(n,1),o;return o}function Ob(e,t,r){return this.constructor(e,r)}function D(e,t,r,o,n){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||n?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==r&&(1!==r&&!1===g.syncComponentUpdates&&e.base?Ea(e):E(e,1,n)),p(e.__ref,e))}function E(e,t,r,o){if(!e._disable){var n,$,a,m=e.props,p=e.state,i=e.context,s=e.prevProps||m,l=e.prevState||p,v=e.prevContext||i,d=e.base,c=e.nextBase,A=d||c,u=e._component,O=!1,K=v;if(e.constructor.getDerivedStateFromProps&&(p=j(j({},p),e.constructor.getDerivedStateFromProps(m,p)),e.state=p),d&&(e.props=s,e.state=l,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(m,p,i)?O=!0:e.componentWillUpdate&&e.componentWillUpdate(m,p,i),e.props=m,e.state=p,e.context=i),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!O){n=e.render(m,p,i),e.getChildContext&&(i=j(j({},i),e.getChildContext())),d&&e.getSnapshotBeforeUpdate&&(K=e.getSnapshotBeforeUpdate(s,l));var f,x,h=n&&n.nodeName;if("function"==typeof h){var _=Wa(n);($=u)&&$.constructor===h&&_.key==$.__key?D($,_,1,i,!1):(f=$,e._component=$=Ka(h,_,i),$.nextBase=$.nextBase||c,$._parentComponent=e,D($,_,0,i,!1),E($,1,r,!0)),x=$.base}else a=A,(f=u)&&(a=e._component=null),(A||1===t)&&(a&&(a._component=null),x=Ca(a,n,i,r||!d,A&&A.parentNode,!0));if(A&&x!==A&&$!==u){var C=A.parentNode;C&&x!==C&&(C.replaceChild(x,A),f||(A._component=null,k(A,!1)))}if(f&&F(f),e.base=x,x&&!o){for(var y=e,N=e;N=N._parentComponent;)(y=N).base=x;x._component=y,x._componentConstructor=y.constructor}}for(!d||r?na.push(e):O||(e.componentDidUpdate&&e.componentDidUpdate(s,l,K),g.afterUpdate&&g.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);da||o||Ba()}}function Zb(e,t,r,o){for(var n=e&&e._component,$=n,a=e,m=n&&e._componentConstructor===t.nodeName,p=m,i=Wa(t);n&&!p&&(n=n._parentComponent);)p=n.constructor===t.nodeName;return n&&p&&(!o||n._component)?(D(n,i,3,r,o),e=n.base):($&&!m&&(F($),e=a=null),n=Ka(t.nodeName,i,r),e&&!n.nextBase&&(n.nextBase=e,a=null),D(n,i,1,r,o),e=n.base,a&&e!==a&&(a._component=null,k(a,!1))),e}function F(e){g.beforeUnmount&&g.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?F(r):t&&(null!=t.__preactattr_&&p(t.__preactattr_.ref,null),e.nextBase=t,ea(t),z.push(e),Ha(t)),p(e.__ref,null)}function I(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function bc(e,t,r){return Ca(r,e,{},!1,t,!1)}function cc(){return{}}j(I.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=j(j({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),Ea(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),E(this,2)},render:function(){}});var v={h:a,createElement:a,cloneElement:ac,createRef:cc,Component:I,render:bc,rerender:Ia,options:g};var jc=0,ja=document.head.appendChild(document.createElement("style")).sheet;function mc(r){return r.replace(/[A-Z]/g,"-$&").toLowerCase()}function qc(r){ja.insertRule(r,ja.cssRules.length)}function uc(r){var a="p"+jc++;return ma(r,"."+a).forEach(qc),a}function la(r,a){return a+"{"+r+"}"}function ma(r,a,$){var n=[""];for(var e in $=$||0,r){var t=r[e];e=mc(e),t.sub||Array.isArray(t)?(t=Array.isArray(t)?t:[t]).forEach(function(r){return n[0]+=e+":"+r+";"}):(/^(:|>|\.|\*)/.test(e)&&(e=a+e),e=e.replace(/&/g,a),n.push(la(ma(t,a,!/^@/.test(e)).join(""),e)))}return $||(n[0]=la(n[0],a)),n}var ba=function(r){return function(a){var $={};return function(n){return function(e,t){t=(e=e||{}).children||t;var s="function"==typeof n?n(e):n,o=JSON.stringify(s);return $[o]||($[o]=uc(s)),e.class=[$[o],e.class].filter(Boolean).join(" "),r(a,e,t)}}}};function Gc(t){return(Gc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Kc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oa(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Uc(t,e,r){return e&&oa(t.prototype,e),r&&oa(t,r),t}function Wc(t,e){return!e||"object"!==Gc(e)&&"function"!=typeof e?_(t):e}function cb(t){return(cb=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function eb(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&fb(t,e)}function fb(t,e){return(fb=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var W=function(t){return function(e){function r(){var t;return Kc(this,r),(t=Wc(this,cb(r).apply(this,arguments))).state={width:0,height:0,parentWidth:0,parentHeight:0},t.ref=null,t.listener=t.update.bind(_(_(t))),t}return eb(r,v.Component),Uc(r,[{key:"update",value:function(){this.setState({width:this.base.clientWidth,height:this.base.clientHeight,parentWidth:this.base.parentNode.clientWidth,parentHeight:this.base.parentNode.clientHeight})}},{key:"componentDidMount",value:function(){this.update(),window.addEventListener("resize",this.listener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.listener)}},{key:"render",value:function(){var e=this;return a(t,Object.assign({ref:function(t){return e.ref=t}},this.props,this.state))}}]),r}()};var kb=function(t){return a("div",null,JSON.stringify(t))};var bd=W(kb);function pb(t){return(pb="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function qb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ta(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function tb(t,e,r){return e&&ta(t.prototype,e),r&&ta(t,r),t}function ub(t,e){return!e||"object"!==pb(e)&&"function"!=typeof e?vb(t):e}function vb(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xb(t){return(xb=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Bb(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Cb(t,e)}function Cb(t,e){return(Cb=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var o,n,Jb={},b=Jb={};function V(){throw new Error("setTimeout has not been defined")}function U(){throw new Error("clearTimeout has not been defined")}function Ga($){if(o===setTimeout)return setTimeout($,0);if((o===V||!o)&&setTimeout)return o=setTimeout,setTimeout($,0);try{return o($,0)}catch(e){try{return o.call(null,$,0)}catch(e){return o.call(this,$,0)}}}function $b($){if(n===clearTimeout)return clearTimeout($);if((n===U||!n)&&clearTimeout)return n=clearTimeout,clearTimeout($);try{return n($)}catch(e){try{return n.call(null,$)}catch(e){return n.call(this,$)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:V}catch($){o=V}try{n="function"==typeof clearTimeout?clearTimeout:U}catch($){n=U}}();var t,i=[],S=!1,Na=-1;function dc(){S&&t&&(S=!1,t.length?i=t.concat(i):Na=-1,i.length&&Qa())}function Qa(){if(!S){var $=Ga(dc);S=!0;for(var e=i.length;e;){for(t=i,i=[];++Na<e;)t&&t[Na].run();Na=-1,e=i.length}t=null,S=!1,$b($)}}function Ua($,e){this.fun=$,this.array=e}function f(){}b.nextTick=function($){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];i.push(new Ua($,e)),1!==i.length||S||Ga(Qa)},Ua.prototype.run=function(){this.fun.apply(null,this.array)},b.title="browser",b.browser=!0,b.env={},b.argv=[],b.version="",b.versions={},b.on=f,b.addListener=f,b.once=f,b.off=f,b.removeListener=f,b.removeAllListeners=f,b.emit=f,b.prependListener=f,b.prependOnceListener=f,b.listeners=function($){return[]},b.binding=function($){throw new Error("process.binding is not supported")},b.cwd=function(){return"/"},b.chdir=function($){throw new Error("process.chdir is not supported")},b.umask=function(){return 0};var R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bb=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},Ya=function(){function e(e,r){for(var a=0;a<r.length;a++){var t=r[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,a,t){return a&&e(r.prototype,a),t&&e(r,t),r}}(),vc=function(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e},Za="undefined"!=typeof Symbol?Symbol("immer-nothing"):vc({},"immer-nothing",!0),_a="undefined"!=typeof Symbol?Symbol("immer-draftable"):"__$immer_draftable",c="undefined"!=typeof Symbol?Symbol("immer-state"):"__$immer_state";function x(e){return!!e&&!!e[c]}function w(e){if(!e||"object"!==(void 0===e?"undefined":R(e)))return!1;if(Array.isArray(e))return!0;var r=Object.getPrototypeOf(e);return!r||r===Object.prototype||!!e[_a]||!!e.constructor[_a]}var Q=Object.assign||function(e,r){for(var a in r)q(r,a)&&(e[a]=r[a]);return e},ka="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function H(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Array.isArray(e))return e.slice();var a=Object.create(Object.getPrototypeOf(e));return ka(e).forEach(function(t){if(t!==c){var $=Object.getOwnPropertyDescriptor(e,t);if($.get){if(!r)throw new Error("Immer drafts cannot have computed properties");$.value=$.get.call(e)}$.enumerable?a[t]=$.value:Object.defineProperty(a,t,{value:$.value,writable:!0,configurable:!0})}}),a}function u(e,r){if(Array.isArray(e))for(var a=0;a<e.length;a++)r(a,e[a],e);else ka(e).forEach(function(a){return r(a,e[a],e)})}function pa(e,r){return Object.getOwnPropertyDescriptor(e,r).enumerable}function q(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function L(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var h=function(){function e(r){bb(this,e),this.drafts=[],this.parent=r,this.canAutoFreeze=!0,this.patches=null}return Ya(e,[{key:"usePatches",value:function(e){e&&(this.patches=[],this.inversePatches=[],this.patchListener=e)}},{key:"revoke",value:function(){this.leave(),this.drafts.forEach(hb),this.drafts=null}},{key:"leave",value:function(){this===e.current&&(e.current=this.parent)}}]),e}();function hb(e){e[c].revoke()}h.current=null,h.enter=function(){return this.current=new h(this.current)};var qa={};function jb(e,r,a){e.drafts.forEach(function(e){e[c].finalizing=!0}),a?x(r)&&r[c].scope===e&&xa(e.drafts):(e.patches&&Y(e.drafts[0]),xa(e.drafts))}function ra(e,r){var a=Array.isArray(e),t=va(e);u(t,function(r){sb(t,r,a||pa(e,r))});var $=r?r.scope:h.current;return yb(t,c,{scope:$,modified:!1,finalizing:!1,finalized:!1,assigned:{},parent:r,base:e,draft:t,copy:null,revoke:lb,revoked:!1}),$.drafts.push(t),t}function lb(){this.revoked=!0}function P(e){return e.copy||e.base}function nb(e,r){wa(e);var a=P(e)[r];return!e.finalizing&&a===e.base[r]&&w(a)?(ua(e),e.copy[r]=ra(a,e)):a}function ob(e,r,a){if(wa(e),e.assigned[r]=!0,!e.modified){if(L(P(e)[r],a))return;l(e),ua(e)}e.copy[r]=a}function l(e){e.modified||(e.modified=!0,e.parent&&l(e.parent))}function ua(e){e.copy||(e.copy=va(e.base))}function va(e){var r=e&&e[c];if(r){r.finalizing=!0;var a=H(r.draft,!0);return r.finalizing=!1,a}return H(e)}function sb(e,r,a){var t=qa[r];t?t.enumerable=a:qa[r]=t={configurable:!0,enumerable:a,get:function(){return nb(this[c],r)},set:function(e){ob(this[c],r,e)}},Object.defineProperty(e,r,t)}function wa(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(P(e)))}function xa(e){for(var r=e.length-1;r>=0;r--){var a=e[r][c];a.modified||(Array.isArray(a.base)?za(a)&&l(a):wb(a)&&l(a))}}function Y(e){if(e&&"object"===(void 0===e?"undefined":R(e))){var r=e[c];if(r){var a=r.base,t=r.draft,$=r.assigned;if(Array.isArray(e)){if(za(r)){if(l(r),$.length=!0,t.length<a.length)for(var n=t.length;n<a.length;n++)$[n]=!1;else for(var o=a.length;o<t.length;o++)$[o]=!0;for(var i=0;i<t.length;i++)void 0===$[i]&&Y(t[i])}}else Object.keys(t).forEach(function(e){void 0!==a[e]||q(a,e)?$[e]||Y(t[e]):($[e]=!0,l(r))}),Object.keys(a).forEach(function(e){void 0!==t[e]||q(t,e)||($[e]=!1,l(r))})}}}function wb(e){for(var r=e.base,a=e.draft,t=Object.keys(a),$=t.length-1;$>=0;$--)if(void 0===r[t[$]]&&!q(r,t[$]))return!0;return t.length!==Object.keys(r).length}function za(e){var r=e.draft;if(r.length!==e.base.length)return!0;var a=Object.getOwnPropertyDescriptor(r,r.length-1);return!(!a||a.get)}function yb(e,r,a){Object.defineProperty(e,r,{value:a,enumerable:!1,writable:!0})}var zb=Object.freeze({willFinalize:jb,createProxy:ra});function Ab(){}function Aa(e,r){var a=r?r.scope:h.current,t={scope:a,modified:!1,finalized:!1,assigned:{},parent:r,base:e,draft:null,drafts:{},copy:null,revoke:null},$=Array.isArray(e)?Proxy.revocable([t],C):Proxy.revocable(t,G),n=$.revoke,o=$.proxy;return t.draft=o,t.revoke=n,a.drafts.push(o),o}var G={get:Fb,has:function(e,r){return r in A(e)},ownKeys:function(e){return Reflect.ownKeys(A(e))},set:Gb,deleteProperty:Hb,getOwnPropertyDescriptor:Ib,defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},C={};function A(e){return e.copy||e.base}function Fb(e,r){if(r===c)return e;var a=e.drafts;if(!e.modified&&q(a,r))return a[r];var t=A(e)[r];if(e.finalized||!w(t))return t;if(e.modified){if(t!==e.base[r])return t;a=e.copy}return a[r]=Aa(t,e)}function Gb(e,r,a){if(!e.modified){if(a?L(e.base[r],a)||a===e.drafts[r]:L(e.base[r],a)&&r in e.base)return!0;T(e)}return e.assigned[r]=!0,e.copy[r]=a,!0}function Hb(e,r){return(void 0!==e.base[r]||r in e.base)&&(e.assigned[r]=!1,T(e)),e.copy&&delete e.copy[r],!0}function Ib(e,r){var a=A(e),t=Reflect.getOwnPropertyDescriptor(a,r);return t&&(t.writable=!0,t.configurable=!Array.isArray(a)||"length"!==r),t}function T(e){e.modified||(e.modified=!0,e.copy=Q(H(e.base),e.drafts),e.drafts=null,e.parent&&T(e.parent))}u(G,function(e,r){C[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),C.deleteProperty=function(e,r){if(isNaN(parseInt(r)))throw new Error("Immer only supports deleting array indices");return G.deleteProperty.call(this,e[0],r)},C.set=function(e,r,a){if("length"!==r&&isNaN(parseInt(r)))throw new Error("Immer only supports setting array indices and the 'length' property");return G.set.call(this,e[0],r,a)};var Kb=Object.freeze({willFinalize:Ab,createProxy:Aa});function Lb(e,r,a,t){Array.isArray(e.base)?Mb(e,r,a,t):Nb(e,r,a,t)}function Mb(e,r,a,t){var $=e.base,n=e.copy,o=e.assigned;if(n.length<$.length){var i=[n,$];$=i[0],n=i[1];var s=[t,a];a=s[0],t=s[1]}for(var c=n.length-$.length,f=0;$[f]===n[f]&&f<$.length;)++f;for(var v=$.length;v>f&&$[v-1]===n[v+c-1];)--v;for(var u=f;u<v;++u)if(o[u]&&n[u]!==$[u]){var p=r.concat([u]);a.push({op:"replace",path:p,value:n[u]}),t.push({op:"replace",path:p,value:$[u]})}for(var l=v!=$.length,h=a.length,N=v+c-1;N>=v;--N){var L=r.concat([N]);a[h+N-v]={op:"add",path:L,value:n[N]},l&&t.push({op:"remove",path:L})}l||t.push({op:"replace",path:r.concat(["length"]),value:$.length})}function Nb(e,r,a,t){var $=e.base,n=e.copy;u(e.assigned,function(e,o){var i=$[e],s=n[e],c=o?e in $?"replace":"add":"remove";if(i!==s||"replace"!==c){var f=r.concat(e);a.push("remove"===c?{op:c,path:f}:{op:c,path:f,value:s}),t.push("add"===c?{op:"remove",path:f}:"remove"===c?{op:"add",path:f,value:i}:{op:"replace",path:f,value:i})}})}function Fa(e,r){for(var a=0;a<r.length;a++){var t=r[a],$=t.path;if(0===$.length&&"replace"===t.op)e=t.value;else{for(var n=e,o=0;o<$.length-1;o++)if(!(n=n[$[o]])||"object"!==(void 0===n?"undefined":R(n)))throw new Error("Cannot apply patch, path doesn't resolve: "+$.join("/"));var i=$[$.length-1];switch(t.op){case"replace":n[i]=t.value;break;case"add":Array.isArray(n)?n.splice(i,0,t.value):n[i]=t.value;break;case"remove":Array.isArray(n)?n.splice(i,1):delete n[i];break;default:throw new Error("Unsupported patch operation: "+t.op);}}}return e}function Pb(){}var Qb={useProxies:"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect,autoFreeze:void 0===Jb&&"verifyMinified"===Pb.name,onAssign:null,onDelete:null,onCopy:null},Rb=function(){function e(r){bb(this,e),Q(this,Qb,r),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this)}return Ya(e,[{key:"produce",value:function(e,r,a){var t=this;if("function"==typeof e&&"function"!=typeof r){var $=r;return r=e,function(){for(var e=arguments.length,a=Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$;return t.produce(o,function(e){var t;return(t=r).call.apply(t,[e,e].concat(a))})}}if("function"!=typeof r)throw new Error("if first argument is not a function, the second argument to produce should be a function");if(void 0!==a&&"function"!=typeof a)throw new Error("the third argument of a producer should not be set or a function");var n=void 0;if(w(e)){var o=h.enter(),i=this.createProxy(e),s=!0;try{n=r.call(i,i),s=!1}finally{s?o.revoke():o.leave()}return n instanceof Promise?n.then(function(e){return o.usePatches(a),t.processResult(e,o)},function(e){throw o.revoke(),e}):(o.usePatches(a),this.processResult(n,o))}return void 0===(n=r(e))?e:n!==Za?n:void 0}},{key:"createDraft",value:function(e){if(!w(e))throw new Error("First argument to createDraft should be a plain object, an array, or an immerable object.");var r=h.enter(),a=this.createProxy(e);return r.leave(),a[c].customDraft=!0,a}},{key:"finishDraft",value:function(e,r){if(!x(e))throw new Error("First argument to finishDraft should be an object from createDraft.");var a=e[c];if(!a.customDraft)throw new Error("The draft provided was not created using `createDraft`");if(a.finalized)throw new Error("The draft provided was has already been finished");var t=a.scope;return t.usePatches(r),this.processResult(void 0,t)}},{key:"setAutoFreeze",value:function(e){this.autoFreeze=e}},{key:"setUseProxies",value:function(e){this.useProxies=e,Q(this,e?Kb:zb)}},{key:"applyPatches",value:function(e,r){return x(e)?Fa(e,r):this.produce(e,function(e){return Fa(e,r)})}},{key:"processResult",value:function(e,r){var a=r.drafts[0],t=void 0!==e&&e!==a;if(this.willFinalize(r,e,t),t){if(a[c].modified)throw r.revoke(),new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");w(e)&&(e=this.finalize(e,null,r)),r.patches&&(r.patches.push({op:"replace",path:[],value:e}),r.inversePatches.push({op:"replace",path:[],value:a[c].base}))}else e=this.finalize(a,[],r);return r.revoke(),r.patches&&r.patchListener(r.patches,r.inversePatches),e!==Za?e:void 0}},{key:"finalize",value:function(e,r,a){var t=this,$=e[c];if(!$)return Object.isFrozen(e)?e:this.finalizeTree(e,null,a);if($.scope!==a)return e;if(!$.modified)return $.base;if(!$.finalized){if($.finalized=!0,this.finalizeTree($.draft,r,a),this.onDelete)if(this.useProxies){var n=$.assigned;for(var o in n)n[o]||this.onDelete($,o)}else{var i=$.base,s=$.copy;u(i,function(e){q(s,e)||t.onDelete($,e)})}this.onCopy&&this.onCopy($),this.autoFreeze&&a.canAutoFreeze&&Object.freeze($.copy),r&&a.patches&&Lb($,r,a.patches,a.inversePatches)}return $.copy}},{key:"finalizeTree",value:function(e,r,a){var t=this,$=e[c];$&&(this.useProxies||($.finalizing=!0,$.copy=H($.draft,!0),$.finalizing=!1),e=$.copy);var n=!!r&&!!a.patches;return u(e,function o(i,s,c){if(s===c)throw Error("Immer forbids circular references");var f=!!$&&c===e;if(x(s)){var v=f&&n&&!$.assigned[i]?r.concat(i):null;if(x(s=t.finalize(s,v,a))&&(a.canAutoFreeze=!1),Array.isArray(c)||pa(c,i)?c[i]=s:Object.defineProperty(c,i,{value:s}),f&&s===$.base[i])return}else{if(f&&L(s,$.base[i]))return;w(s)&&!Object.isFrozen(s)&&u(s,o)}f&&t.onAssign&&t.onAssign($,i,s)}),e}}]),e}(),e=new Rb,m=e.produce,ad=e.setAutoFreeze.bind(e),$c=e.setUseProxies.bind(e),Zc=e.applyPatches.bind(e),$=e.createDraft.bind(e),K=e.finishDraft.bind(e);var d,Ja=function(t,o){for(var $=[],r=0;r<t;r++)$[r]=Array(o).fill(0);return{blocks:$,tick:0,controlBlock:{orientation:d.VERTICAL,positionX:Math.floor(o/2),positionY:t-2,firstBlock:1,secondBlock:2},controlBlockSpeed:10,fallSpeed:5,isDead:!1,removeChain:0,coolDown:9}},X=function(t){return t.blocks[0].length},La=function(t){return t.blocks.length-2},Ma=function(t,o){t.blocks.forEach(function(t,$){return t.forEach(function(t,r){return o($,r)})})},O=function(t){Ma(t,function(o,$){0!==t.blocks[o][$]&&Z(t,$,o)&&(t.blocks[o-1][$]=t.blocks[o][$],t.blocks[o][$]=0)})},Oa=function(t,o,$,r){r.push([o,$]);var n=[];t.blocks[o+1]&&t.blocks[o+1][$]===t.blocks[o][$]&&n.push([o+1,$]),o>0&&t.blocks[o-1][$]===t.blocks[o][$]&&n.push([o-1,$]),$<X(t)-1&&t.blocks[o][$+1]===t.blocks[o][$]&&n.push([o,$+1]),$>0&&t.blocks[o][$-1]===t.blocks[o][$]&&n.push([o,$-1]),n.forEach(function(o){r.map(function(t){return t.toString()}).includes(o.toString())||Oa(t,o[0],o[1],r)})},ec=function(t){var o=0,$=0;return Ma(t,function(r,n){if(t.blocks[r][n]>0){var i=[];Oa(t,r,n,i),i.length>3&&i.forEach(function(r){t.blocks[r[0]][r[1]]=0,o+=1,$+=i.length})}}),[o,$]},fc=function(t){if(t.tick+=1,t.coolDown>0)t.coolDown--;else{if(t.controlBlock)return nc(t),void(t.coolDown=t.controlBlockSpeed-1);if(t!==m(t,O))return O(t),void(t.coolDown=(t===m(t,O)?t.controlBlockSpeed:t.fallSpeed)-1);if(ec(t)[0]>0)return t.coolDown=t.controlBlockSpeed-1,void(t.removeChain+=1);t.removeChain=0,sc(t)?(hc(t),t.coolDown=t.controlBlockSpeed-1):t.isDead=!0}},gc=function(t){return m(t,fc)};!function(t){t[t.HORIZONTAL=0]="HORIZONTAL",t[t.VERTICAL=1]="VERTICAL"}(d||(d={}));var hc=function(t){t.controlBlock={orientation:d.VERTICAL,positionX:Pa(t),positionY:La(t),firstBlock:1,secondBlock:2}},Pa=function(t){return Math.floor(X(t)/2)},Z=function(t,o,$){return 0!==$&&0===t.blocks[$-1][o]},kc=function(t,o,$){return 0!==o&&0===t.blocks[$][o-1]},Ra=function(t,o,$){return o!==X(t)&&0===t.blocks[$][o+1]},Sa=function(t){var o=t.controlBlock;return!!o&&(0===o.positionY||!Z(t,o.positionX,o.positionY)||o.orientation===d.HORIZONTAL&&!Z(t,o.positionX+1,o.positionY))},nc=function(t){t.controlBlock&&(Sa(t)?(tc(t),t.controlBlock=null):Ta(t))},oc=function(t){var o=t.controlBlock;o&&Ra(t,o.positionX+(o.orientation===d.HORIZONTAL?1:0),o.positionY)&&o.positionX++},pc=function(t){var o=t.controlBlock;o&&kc(t,o.positionX,o.positionY)&&o.positionX--},Ta=function(t){var o=t.controlBlock;o&&(Sa(t)||o.positionY--)},rc=function(t){var o,$=t.controlBlock;$&&($.orientation!==d.VERTICAL||Ra(t,$.positionX,$.positionY))&&($.orientation=$.orientation===d.HORIZONTAL?d.VERTICAL:d.HORIZONTAL,$.orientation===d.VERTICAL&&(o=[$.secondBlock,$.firstBlock],$.firstBlock=o[0],$.secondBlock=o[1]))},sc=function(t){return 0===t.blocks[La(t)][Pa(t)]},tc=function(t){if(t.controlBlock){var o=t.controlBlock.positionX,$=t.controlBlock.positionY,r=t.controlBlock.orientation===d.VERTICAL?t.controlBlock.positionX:t.controlBlock.positionX+1,n=t.controlBlock.orientation===d.VERTICAL?t.controlBlock.positionY+1:t.controlBlock.positionY;t.blocks[$][o]=t.controlBlock.firstBlock,t.blocks[n][r]=t.controlBlock.secondBlock}};var N={ourGame:Ja(20,8),theirGame:Ja(20,8)};var aa=new Set;var r=function(t){var e=N;N=t(N),aa.forEach(function(t){return t(N,e)})};var ca=function(t){return function(e){return function(r){function o(){var e;return qb(this,o),(e=ub(this,xb(o).apply(this,arguments))).handleStateChange=function(r,o){var $=t(o),u=t(r);Object.keys($).some(function(t){return $[t]!==u[t]})&&e.forceUpdate()},e}return Bb(o,v.Component),tb(o,[{key:"componentWillMount",value:function(){aa.add(this.handleStateChange)}},{key:"componentWillUnmount",value:function(){aa.delete(this.handleStateChange)}},{key:"render",value:function(){return a(e,Object.assign({},this.props,t(N)))}}]),o}()}};var yc=function(){r(function(t){return m(t,function(t){pc(t.ourGame)})})};var zc=function(){r(function(t){return m(t,function(t){oc(t.ourGame)})})};var Ac=function(){r(function(t){return m(t,function(t){Ta(t.ourGame)})})};var Bc=function(){r(function(t){return m(t,function(t){rc(t.ourGame)})})};var B=ba(a),Dc=B("div")(function($){return{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}),Ec=B("div")(function($){return{flex:"1",height:0}}),Fc=B("div")(function($){return{flex:"1",height:0,display:"flex"}}),M=W(B("div")(function($){return{backgroundColor:"black",height:"100%",lineHeight:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"20px",width:"".concat($.parentHeight,"px"),":active":{backgroundColor:"blue"}}})),Hc=function(){return a(Dc,null,a(Ec,null,a(M,{onclick:Bc},"Rotate")),a(Fc,null,a(M,{onclick:yc},"Left"),a(M,{onclick:Ac},"Down"),a(M,{onclick:zc},"Right")))};function Ic(o){return(Ic="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function Jc(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function $a(o,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function Lc(o,t,r){return t&&$a(o.prototype,t),r&&$a(o,r),o}function Mc(o,t){return!t||"object"!==Ic(t)&&"function"!=typeof t?Nc(o):t}function Nc(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Oc(o){return(Oc=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function Pc(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Qc(o,t)}function Qc(o,t){return(Qc=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o})(o,t)}var fa,Sc=ba(a);!function(o){o[o.HORIZONTAL=0]="HORIZONTAL",o[o.VERTICAL=1]="VERTICAL"}(fa||(fa={}));var Tc=function(o){function t(){var o;return Jc(this,t),(o=Mc(this,Oc(t).apply(this,arguments))).getBlockSize=function(){var t=o.props.blocks.length,r=o.props.blocks[0].length;return t/r<o.props.parentHeight/o.props.parentWidth?o.props.parentWidth/r:o.props.parentHeight/t},o.getBlocks=function(){var t=o.getBlockSize();return o.props.blocks.map(function(o,r){return o.map(function(o,e){return 0!==o&&a(ga,{row:r,col:e,blockSize:t,type:o})}).filter(function(o){return o})})},o.getControlBlocks=function(){if(o.props.controlBlock){var t=o.getBlockSize();return[a(ga,{row:o.props.controlBlock.positionY,col:o.props.controlBlock.positionX,blockSize:t,type:o.props.controlBlock.firstBlock}),a(ga,{row:o.props.controlBlock.positionY+(o.props.controlBlock.orientation===fa.VERTICAL?1:0),col:o.props.controlBlock.positionX+(o.props.controlBlock.orientation===fa.HORIZONTAL?1:0),blockSize:t,type:o.props.controlBlock.secondBlock})]}return null},o}return Pc(t,v.Component),Lc(t,[{key:"render",value:function(){var o=this.getBlocks();return console.log(o),a("div",{style:"background-color: black; height: 100%; position: relative; width: ".concat(this.getBlockSize()*this.props.blocks[0].length,"px")},this.getBlocks(),this.getControlBlocks())}}]),t}(),ga=Sc("div")(function(o){return{backgroundColor:"rgb(".concat(255-50*o.type,", ").concat(0+50*o.type,", ",100," )"),position:"absolute",left:"0",bottom:"0",transform:"translateX(".concat(o.col*o.blockSize,"px) translateY(").concat(-o.row*o.blockSize,"px)"),width:"".concat(o.blockSize,"px"),height:"".concat(o.blockSize,"px"),borderRadius:"".concat(o.blockSize,"px")}}),Vc=W(Tc);var J=ba(a),Xc=J("div")(function($){return{height:"100%",width:"100%",overflow:"hidden",backgroundColor:"black",textColor:"white",display:"flex",flexDirection:"column",justifyContent:"stretch",alignItems:"stretch"}}),Yb=J("div")(function($){return{backgroundColor:"red",flex:"1",height:"0"}}),Xb=J("div")(function($){return{backgroundColor:"blue",flex:"2",height:"0",display:"flex",justifyContent:"center"}}),Wb=J("div")(function($){return{backgroundColor:"green",flex:"1",height:"0"}}),Vb=ca(function($){return{controlBlock:$.ourGame.controlBlock,blocks:$.ourGame.blocks}})(function($){return a(Vc,{blocks:$.blocks,controlBlock:$.controlBlock})});var _c=ca(function($){return{theirBlocks:$.theirGame.blocks}})(function($){return a("div",null,JSON.stringify($))});var Ub=ca(function($){return{controlBlock:$.ourGame.controlBlock}})(function($){return a("div",null,JSON.stringify($))});var mb=function($){return a(Xc,null,a(Yb,null,a(Ub,null)),a(Xb,null,a(Vb,null)),a(Wb,null,a(Hc,null)))};var Yc=function(e){function t(){return db(this,t),ib(this,Sb(t).apply(this,arguments))}return Tb(t,v.Component),gb(t,[{key:"render",value:function(){return a(mb,null)}}]),t}();setInterval(function(){return r(function(e){return Object.assign({},e,{ourGame:gc(e.ourGame)})})},50),document.body.innerHTML="",v.render(a(Yc,null),document.body);})();