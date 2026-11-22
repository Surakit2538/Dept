const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-C51htztA.js","assets/freq-B_wnts-0.js","assets/ListPage-DuqcZwif.js","assets/MePage-CLUCOnU9.js","assets/plan-D6QxjyGF.js","assets/cards-Cob0WFUu.js","assets/editbill-CESfAeep.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const dm="modulepreload",fm=function(n){return"/app/"+n},Cl={},N=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=fm(l),l in Cl)return;Cl[l]=!0;const d=l.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":dm,d||(g.as="script"),g.crossOrigin="",g.href=l,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((m,w)=>{g.addEventListener("load",m),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Xi,fe,Oh,nn,Dl,Lh,xh,jo,ci,ns,Fh,Oa,na,ra,wi={},Ti=[],pm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Yi=Array.isArray;function Nt(n,e){for(var t in e)n[t]=e[t];return n}function La(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function mm(n,e,t){var r,s,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?Xi.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return li(n,a,r,s,null)}function li(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Oh,__i:-1,__u:0};return s==null&&fe.vnode!=null&&fe.vnode(i),i}function W(n){return n.children}function ui(n,e){this.props=n,this.context=e}function Nn(n,e){if(e==null)return n.__?Nn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Nn(n):null}function _m(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],s=[],i=Nt({},e);i.__v=e.__v+1,fe.vnode&&fe.vnode(i),xa(n.__P,i,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Nn(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,zh(r,i,s),e.__e=e.__=null,i.__e!=t&&Uh(i)}}function Uh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Uh(n)}function Vl(n){(!n.__d&&(n.__d=!0)&&nn.push(n)&&!Ii.__r++||Dl!=fe.debounceRendering)&&((Dl=fe.debounceRendering)||Lh)(Ii)}function Ii(){try{for(var n,e=1;nn.length;)nn.length>e&&nn.sort(xh),n=nn.shift(),e=nn.length,_m(n)}finally{nn.length=Ii.__r=0}}function jh(n,e,t,r,s,i,a,c,l,d,f){var g,m,w,R,D,S,M=r&&r.__k||Ti,x=e.length;for(l=gm(t,e,M,l,x),g=0;g<x;g++)(w=t.__k[g])!=null&&(m=w.__i!=-1&&M[w.__i]||wi,w.__i=g,S=xa(n,w,m,s,i,a,c,l,d,f),R=w.__e,w.ref&&m.ref!=w.ref&&(m.ref&&Fa(m.ref,null,w),f.push(w.ref,w.__c||R,w)),D==null&&R!=null&&(D=R),4&w.__u?(l=$h(w,l,n),m.__e&&(m.__e=null)):typeof w.type=="function"&&S!==void 0?l=S:R&&(l=R.nextSibling),w.__u&=-7);return t.__e=D,l}function gm(n,e,t,r,s){var i,a,c,l,d,f=t.length,g=f,m=0;for(n.__k=new Array(s),i=0;i<s;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[i]=li(null,a,null,null,null):Yi(a)?a=n.__k[i]=li(W,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[i]=li(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[i]=a,l=i+m,a.__=n,a.__b=n.__b+1,c=null,(d=a.__i=ym(a,t,l,g))!=-1&&(g--,(c=t[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(s>f?m--:s<f&&m++),typeof a.type!="function"&&(a.__u|=4)):d!=l&&(d==l-1?m--:d==l+1?m++:(d>l?m--:m++,a.__u|=4))):n.__k[i]=null;if(g)for(i=0;i<f;i++)(c=t[i])!=null&&!(2&c.__u)&&(c.__e==r&&(r=Nn(c)),Wh(c,c));return r}function $h(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=$h(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Nn(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ym(n,e,t,r){var s,i,a,c=n.key,l=n.type,d=e[t],f=d!=null&&(2&d.__u)==0;if(d===null&&c==null||f&&c==d.key&&l==d.type)return t;if(r>(f?1:0)){for(s=t-1,i=t+1;s>=0||i<e.length;)if((d=e[a=s>=0?s--:i++])!=null&&!(2&d.__u)&&c==d.key&&l==d.type)return a}return-1}function Ml(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||pm.test(e)?t:t+"px"}function Zs(n,e,t,r,s){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Ml(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Ml(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Fh,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t[ns]=r[ns]:(t[ns]=Oa,n.addEventListener(e,i?ra:na,i)):n.removeEventListener(e,i?ra:na,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Nl(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[ci]==null)e[ci]=Oa++;else if(e[ci]<t[ns])return;return t(fe.event?fe.event(e):e)}}}function xa(n,e,t,r,s,i,a,c,l,d){var f,g,m,w,R,D,S,M,x,$,K,J,ee,T,y,b,I=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[c=e.__e=t.__e]),(f=fe.__b)&&f(e);e:if(typeof I=="function"){g=a.length;try{if(x=e.props,$=I.prototype&&I.prototype.render,K=(f=I.contextType)&&r[f.__c],J=f?K?K.props.value:f.__:r,t.__c?M=(m=e.__c=t.__c).__=m.__E:($?e.__c=m=new I(x,J):(e.__c=m=new ui(x,J),m.constructor=I,m.render=Em),K&&K.sub(m),m.state||(m.state={}),m.__n=r,w=m.__d=!0,m.__h=[],m._sb=[]),$&&m.__s==null&&(m.__s=m.state),$&&I.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=Nt({},m.__s)),Nt(m.__s,I.getDerivedStateFromProps(x,m.__s))),R=m.props,D=m.state,m.__v=e,w)$&&I.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),$&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if($&&I.getDerivedStateFromProps==null&&x!==R&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(x,J),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(x,m.__s,J)===!1){e.__v!=t.__v&&(m.props=x,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),Ti.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m),c=Nn(t);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(x,m.__s,J),$&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(R,D,S)})}if(m.context=J,m.props=x,m.__P=n,m.__e=!1,ee=fe.__r,T=0,$)m.state=m.__s,m.__d=!1,ee&&ee(e),f=m.render(m.props,m.state,m.context),Ti.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,ee&&ee(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++T<25);m.state=m.__s,m.getChildContext!=null&&(r=Nt(Nt({},r),m.getChildContext())),$&&!w&&m.getSnapshotBeforeUpdate!=null&&(S=m.getSnapshotBeforeUpdate(R,D)),y=f!=null&&f.type===W&&f.key==null?qh(f.props.children):f,c=jh(n,Yi(y)?y:[y],e,t,r,s,i,a,c,l,d),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),M&&(m.__E=m.__=null)}catch(A){if(a.length=g,e.__v=null,l||i!=null){if(A.then){for(e.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i!=null&&(i[i.indexOf(c)]=null),e.__e=c}else if(i!=null)for(b=i.length;b--;)La(i[b])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),A.then||Bh(e),fe.__e(A,e,t)}}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=vm(t.__e,e,t,r,s,i,a,l,d);return(f=fe.diffed)&&f(e),128&e.__u?void 0:c}function Bh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Bh))}function zh(n,e,t){for(var r=0;r<t.length;r++)Fa(t[r],t[++r],t[++r]);fe.__c&&fe.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){fe.__e(i,s.__v)}})}function qh(n){return typeof n!="object"||n==null||n.__b>0?n:Yi(n)?n.map(qh):n.constructor!==void 0?null:Nt({},n)}function vm(n,e,t,r,s,i,a,c,l){var d,f,g,m,w,R,D,S=t.props||wi,M=e.props,x=e.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((w=i[d])&&"setAttribute"in w==!!x&&(x?w.localName==x:w.nodeType==3)){n=w,i[d]=null;break}}if(n==null){if(x==null)return document.createTextNode(M);n=document.createElementNS(s,x,M.is&&M),c&&(fe.__m&&fe.__m(e,i),c=!1),i=null}if(x==null)S===M||c&&n.data==M||(n.data=M);else{if(i=x=="textarea"&&M.defaultValue!=null?null:i&&Xi.call(n.childNodes),!c&&i!=null)for(S={},d=0;d<n.attributes.length;d++)S[(w=n.attributes[d]).name]=w.value;for(d in S)w=S[d],d=="dangerouslySetInnerHTML"?g=w:d=="children"||d in M||d=="value"&&"defaultValue"in M||d=="checked"&&"defaultChecked"in M||Zs(n,d,null,w,s);for(d in M)w=M[d],d=="children"?m=w:d=="dangerouslySetInnerHTML"?f=w:d=="value"?R=w:d=="checked"?D=w:c&&typeof w!="function"||S[d]===w||Zs(n,d,w,S[d],s);if(f)c||g&&(f.__html==g.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(g&&(n.innerHTML=""),jh(e.type=="template"?n.content:n,Yi(m)?m:[m],e,t,r,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:t.__k&&Nn(t,0),c,l),i!=null)for(d=i.length;d--;)La(i[d]);c&&x!="textarea"||(d="value",x=="progress"&&R==null?n.removeAttribute("value"):R!=null&&(R!==n[d]||x=="progress"&&!R||x=="option"&&R!=S[d])&&Zs(n,d,R,S[d],s),d="checked",D!=null&&D!=n[d]&&Zs(n,d,D,S[d],s))}return n}function Fa(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){fe.__e(s,t)}}function Wh(n,e,t){var r,s;if(fe.unmount&&fe.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||Fa(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){fe.__e(i,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&Wh(r[s],e,t||typeof n.type!="function");t||La(n.__e),n.__c=n.__=n.__e=void 0}function Em(n,e,t){return this.constructor(n,t)}function bm(n,e,t){var r,s,i,a;e==document&&(e=document.documentElement),fe.__&&fe.__(n,e),s=(r=!1)?null:e.__k,i=[],a=[],xa(e,n=e.__k=mm(W,null,[n]),s||wi,wi,e.namespaceURI,s?null:e.firstChild?Xi.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,a),zh(i,n,a),n.props.children=null}Xi=Ti.slice,fe={__e:function(n,e,t,r){for(var s,i,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},Oh=0,ui.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Nt({},this.state),typeof n=="function"&&(n=n(Nt({},t),this.props)),n&&Nt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Vl(this))},ui.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Vl(this))},ui.prototype.render=W,nn=[],Lh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,xh=function(n,e){return n.__v.__b-e.__v.__b},Ii.__r=0,jo=Math.random().toString(8),ci="__d"+jo,ns="__a"+jo,Fh=/(PointerCapture)$|Capture$/i,Oa=0,na=Nl(!1),ra=Nl(!0);var wm=0;function h(n,e,t,r,s,i){e||(e={});var a,c,l=e;if("ref"in l)for(c in l={},e)c=="ref"?a=e[c]:l[c]=e[c];var d={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--wm,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)l[c]===void 0&&(l[c]=a[c]);return fe.vnode&&fe.vnode(d),d}var cs,Te,$o,Ol,Ai=0,Hh=[],Se=fe,Ll=Se.__b,xl=Se.__r,Fl=Se.diffed,Ul=Se.__c,jl=Se.unmount,$l=Se.__;function Ua(n,e){Se.__h&&Se.__h(Te,n,Ai||e),Ai=0;var t=Te.__H||(Te.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function te(n){return Ai=1,Tm(Qh,n)}function Tm(n,e,t){var r=Ua(cs++,2);if(r.t=n,!r.__c&&(r.__=[Qh(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],d=r.t(l,c);l!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=Te,!Te.__f)){var s=function(c,l,d){if(!r.__c.__H)return!0;var f=!1,g=r.__c.props!==c;if(r.__c.__H.__.some(function(w){if(w.__N){f=!0;var R=w.__[0];w.__=w.__N,w.__N=void 0,R!==w.__[0]&&(g=!0)}}),i){var m=i.call(this,c,l,d);return f?m||g:m}return!f||g};Te.__f=!0;var i=Te.shouldComponentUpdate,a=Te.componentWillUpdate;Te.componentWillUpdate=function(c,l,d){if(this.__e){var f=i;i=void 0,s(c,l,d),i=f}a&&a.call(this,c,l,d)},Te.shouldComponentUpdate=s}return r.__N||r.__}function ye(n,e){var t=Ua(cs++,3);!Se.__s&&Kh(t.__H,e)&&(t.__=n,t.u=e,Te.__H.__h.push(t))}function Gh(n){return Ai=5,Qe(function(){return{current:n}},[])}function Qe(n,e){var t=Ua(cs++,7);return Kh(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Im(){for(var n;n=Hh.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(hi),e.__h.some(sa),e.__h=[]}catch(t){e.__h=[],Se.__e(t,n.__v)}}}Se.__b=function(n){Te=null,Ll&&Ll(n)},Se.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),$l&&$l(n,e)},Se.__r=function(n){xl&&xl(n),cs=0;var e=(Te=n.__c).__H;e&&($o===Te?(e.__h=[],Te.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(hi),e.__h.some(sa),e.__h=[],cs=0)),$o=Te},Se.diffed=function(n){Fl&&Fl(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Hh.push(e)!==1&&Ol===Se.requestAnimationFrame||((Ol=Se.requestAnimationFrame)||Am)(Im)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),$o=Te=null},Se.__c=function(n,e){e.some(function(t){try{t.__h.some(hi),t.__h=t.__h.filter(function(r){return!r.__||sa(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Se.__e(r,t.__v)}}),Ul&&Ul(n,e)},Se.unmount=function(n){jl&&jl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{hi(r)}catch(s){e=s}}),t.__H=void 0,e&&Se.__e(e,t.__v))};var Bl=typeof requestAnimationFrame=="function";function Am(n){var e,t=function(){clearTimeout(r),Bl&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);Bl&&(e=requestAnimationFrame(t))}function hi(n){var e=Te,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Te=e}function sa(n){var e=Te;n.__c=n.__(),Te=e}function Kh(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Qh(n,e){return typeof e=="function"?e(n):e}const Xh={netflix:"E50914",spotify:"1DB954",youtube:"FF0000",grab:"00B14F",shopee:"EE4D2D",line:"00C300",starbucks:"006241",mcdonalds:"FBC817",kfc:"F40027",apple:"000000",applemusic:"FA243C",google:"4285F4",googlecloud:"4285F4",openai:"412991",anthropic:"191919",shell:"FFD500",foodpanda:"D70F64",airbnb:"FF5A5F",icloud:"3693F3",amazon:"FF9900",hbo:"000000",tiktok:"000000",instagram:"E4405F",facebook:"0866FF",whatsapp:"25D366",telegram:"26A5E4",discord:"5865F2",twitch:"9146FF",steam:"000000",playstation:"003791",nintendoswitch:"E60012",roblox:"000000",uber:"000000",airasia:"FF0000",expedia:"191E3B",tripadvisor:"34E0A1",ikea:"0058A3",uniqlo:"FF0000",handm:"E50010",zara:"000000",nike:"111111",adidas:"000000",samsung:"1428A0",adobe:"FF0000",dropbox:"0061FF",github:"181717",canva:"00C4CC",notion:"000000",figma:"F24E1E",zoom:"0B5CFF",slack:"4A154B",paypal:"003087",aliexpress:"FF4747",googledrive:"4285F4",googleplay:"414141",soundcloud:"FF5500",tidal:"000000",linkedin:"0A66C2",patreon:"000000",youtubemusic:"FF0000",toyota:"EB0A1E",honda:"E40521",mazda:"101010",nissan:"C3002F",mitsubishi:"E60012",bmw:"0066B1",mercedes:"242424",tesla:"CC0000",suzuki:"E30613",burgerking:"D62300",tripdotcom:"287DFA",epicgames:"313131",duolingo:"58CC02",udemy:"A435F0",coursera:"0056D2",visa:"1A1F71",mastercard:"EB001B",americanexpress:"2E77BC",wise:"9FE870",ubereats:"06C167",perplexity:"1FB8CD",googlegemini:"8E75B2",xiaomi:"FF6900",huawei:"FF0000",oppo:"2D683D",applepay:"000000",googlepay:"4285F4",x:"000000",pinterest:"BD081C",snapchat:"FFFC00",messenger:"00B2FF",nordvpn:"4687FF",expressvpn:"DA3940",primevideo:"1F2E3E",hotelsdotcom:"EF3346",boots:"05054B",jcb:"0B4EA2"},Sm=n=>{const e=parseInt(n.slice(1),16);return .299*(e>>16&255)+.587*(e>>8&255)+.114*(e&255)>170},ja=n=>Sm(n)?"#111111":"#ffffff",L=(n,e,t,r={})=>{const s=r.bg||"#"+Xh[t];return{key:n,re:e,si:t,bg:s,fg:r.fg||ja(s),...r}},Hr=(n,e,t)=>L(n,e,t,{bg:"#ffffff",fg:"#"+Xh[t],ring:!0}),ve=(n,e,t,r={})=>({key:n,re:e,bg:t,fg:r.fg||ja(t),...r}),Le=(n,e,t,r,s={})=>({key:n,re:e,text:t,bg:r,fg:s.fg||ja(r),...s}),Rm=[Le("aia",/\baia\b|เอไอเอ/,"AIA","#d31145"),Le("axa",/\baxa\b|แอกซ่า/,"AXA","#00008f"),Le("fwd",/\bfwd\b|เอฟดับบลิวดี/,"FWD","#183028",{fg:"#ee7623"}),Le("allianz",/allianz|อลิอันซ์/,"Allianz","#003781"),Le("prudential",/prudential|พรูเด็นเชียล/,"PRU","#ed1b2e"),Le("muangthailife",/muang ?thai ?life|เมืองไทยประกันชีวิต/,"MTL","#388fca"),Le("thailife",/thai ?life|ไทยประกันชีวิต/,"TLI","#007ac1"),Le("bangkoklife",/bangkok ?life|กรุงเทพประกันชีวิต/,"BLA","#003394"),Le("generali",/generali|เจนเนอราลี่/,"Generali","#c1210d"),Le("manulife",/manulife|แมนูไลฟ์/,"Manulife","#00a758"),Le("dhipaya",/dhipaya|ทิพยประกัน/,"ทิพย","#ec2227"),Le("viriyah",/viriyah|วิริยะ/,"วิริยะ","#0134a2",{fg:"#fcaf17"}),Le("msig",/\bmsig\b/,"MSIG","#e11f27"),Le("bki",/bangkok ?insurance|กรุงเทพประกันภัย|\bbki\b/,"BKI","#05048c"),Le("roojai",/roojai|รู้ใจ/,"รู้ใจ","#003b71",{fg:"#ff5011"}),Le("chubb",/chubb|ชับบ์/,"CHUBB","#000000"),Le("sompo",/sompo|ซมโปะ/,"SOMPO","#e10032"),ve("coway",/coway|โคเวย์/,"#00a8e1",{icon:"water"}),ve("foodland",/foodland|ฟู้ดแลนด์/,"#fc0001",{icon:"bag"}),ve("tops",/\btops\b|ท็อปส์/,"#ff3d1c",{icon:"bag"}),ve("central",/central|เซ็นทรัล/,"#f50a3c",{icon:"bag"}),ve("mk",/\bmk\b|เอ็มเค/,"#ec1c24",{icon:"food"}),ve("swensens",/swensen|สเวนเซ่น/,"#e10e18",{icon:"cake"}),ve("watsons",/watsons|วัตสัน/,"#009aa9",{icon:"beauty"}),ve("powerbuy",/power ?buy|เพาเวอร์บาย/,"#5f3281",{icon:"laptop"}),ve("bts",/\bbts\b|บีทีเอส/,"#c81518",{icon:"train"}),ve("mrt",/\bmrt\b|เอ็มอาร์ที/,"#045091",{icon:"train"}),ve("bangchak",/bangchak|บางจาก/,"#37b34a",{icon:"fuel"}),L("applepay",/apple ?pay/,"applepay"),L("googlepay",/google ?pay|g ?pay/,"googlepay",{bg:"#ffffff",fg:"#4285f4",ring:!0}),L("gemini",/gemini|เจมิไน/,"googlegemini"),L("primevideo",/prime ?video/,"primevideo"),L("ubereats",/uber ?eats/,"ubereats"),L("burgerking",/burger ?king|เบอร์เกอร์ ?คิง/,"burgerking"),L("tripdotcom",/trip\.com|ทริปดอทคอม/,"tripdotcom"),L("hotelsdotcom",/hotels\.com/,"hotelsdotcom"),L("epicgames",/epic ?games/,"epicgames"),L("duolingo",/duolingo/,"duolingo"),L("udemy",/udemy/,"udemy"),L("coursera",/coursera/,"coursera"),L("visa",/\bvisa\b|วีซ่า/,"visa"),L("mastercard",/master ?card|มาสเตอร์การ์ด/,"mastercard",{bg:"#ffffff",fg:"#eb001b",ring:!0}),L("amex",/american ?express|\bamex\b/,"americanexpress"),L("jcb",/\bjcb\b/,"jcb"),L("wise",/\bwise\b/,"wise"),L("perplexity",/perplexity/,"perplexity"),L("xiaomi",/xiaomi|เสียวหมี่/,"xiaomi"),L("huawei",/huawei|หัวเว่ย/,"huawei"),L("oppo",/\boppo\b/,"oppo"),L("x",/\bx\.com|twitter|ทวิตเตอร์/,"x"),L("pinterest",/pinterest/,"pinterest"),L("snapchat",/snapchat/,"snapchat"),L("messenger",/messenger/,"messenger"),L("nordvpn",/nordvpn/,"nordvpn"),L("expressvpn",/expressvpn/,"expressvpn"),L("boots",/\bboots\b|บู๊ทส์/,"boots"),L("netflix",/netflix|เน็ตฟลิกซ์/,"netflix",{bg:"#000000",fg:"#e50914"}),L("youtubemusic",/youtube ?music|ยูทูบ ?มิวสิค/,"youtubemusic"),Hr("youtube",/youtube|ยูทูบ/,"youtube"),L("spotify",/spotify|สปอติฟาย/,"spotify",{bg:"#191414",fg:"#1ed760"}),ve("disney",/disney|ดิสนีย์/,"#113ccf"),L("hbo",/\bhbo\b/,"hbo"),L("applemusic",/apple ?music/,"applemusic"),L("icloud",/icloud/,"icloud"),L("apple",/apple|itunes/,"apple"),Hr("googlecloud",/google ?cloud/,"googlecloud"),Hr("googledrive",/google ?(drive|one)/,"googledrive"),Hr("googleplay",/google ?play/,"googleplay"),Hr("google",/google|กูเกิล/,"google"),L("chatgpt",/chatgpt|openai/,"openai",{bg:"#10a37f",fg:"#ffffff"}),L("claude",/claude/,"claude",{bg:"#d97757",fg:"#ffffff"}),L("anthropic",/anthropic/,"anthropic",{bg:"#d97757",fg:"#ffffff"}),ve("lineman",/line ?man|ไลน์แมน|lpth\*pf|\blm_/,"#06c755"),L("line",/\bline\b|ไลน์/,"line",{bg:"#06c755",fg:"#ffffff"}),L("grab",/\bgrab|แกร็บ/,"grab"),L("uber",/\buber\b/,"uber"),L("foodpanda",/foodpanda|ฟู้ดแพนด้า/,"foodpanda"),ve("seven",/7-?11|7-eleven|seven ?eleven|เซเว่น/,"#00a650"),ve("cafeamazon",/caf[eé] ?amazon|คาเฟ่ ?อเมซอน|อเมซอน/,"#00693c"),L("amazon",/\bamazon\b/,"amazon",{bg:"#232f3e",fg:"#ff9900"}),L("starbucks",/starbucks|สตาร์บัค/,"starbucks",{round:!0}),L("shopee",/shopee|ช้อปปี้/,"shopee"),ve("lazada",/lazada|ลาซาด้า/,"#0f146d"),L("aliexpress",/aliexpress|อาลีเอ็กซ์/,"aliexpress"),L("mcdonald",/mcdonald|แมคโดนัลด์|แมค ?ดี/,"mcdonalds",{bg:"#da291c",fg:"#ffc72c"}),L("kfc",/\bkfc|เคเอฟซี/,"kfc"),ve("ais",/\bais\b|เอไอเอส/,"#8dc63f"),ve("true",/\btrue\b|ทรูมูฟ|ทรูออนไลน์/,"#ee2e24"),ve("3bb",/3bb/,"#0055a5"),ve("ptt",/\bptt\b|ปตท/,"#00439c"),L("shell",/\bshell\b|เชลล์/,"shell",{bg:"#ffd500",fg:"#dd1d21"}),ve("lotus",/lotus|โลตัส/,"#00a651"),ve("bigc",/big ?c\b|บิ๊กซี/,"#ed1c24"),ve("makro",/makro|แม็คโคร|แมคโคร/,"#003d8f"),L("airasia",/airasia|แอร์เอเชีย/,"airasia"),L("airbnb",/airbnb/,"airbnb"),L("expedia",/expedia/,"expedia"),L("tripadvisor",/tripadvisor/,"tripadvisor"),L("tiktok",/tiktok|ติ๊กต็อก/,"tiktok"),L("instagram",/instagram/,"instagram"),L("facebook",/facebook|เฟซบุ๊ก/,"facebook"),L("whatsapp",/whatsapp/,"whatsapp"),L("telegram",/telegram/,"telegram"),L("discord",/discord/,"discord"),L("twitch",/twitch/,"twitch"),L("steam",/steam|สตีม/,"steam"),L("playstation",/playstation|เพลย์สเตชัน|\bpsn\b/,"playstation"),L("nintendo",/nintendo|นินเทนโด/,"nintendoswitch"),L("roblox",/roblox/,"roblox"),L("soundcloud",/soundcloud/,"soundcloud"),L("tidal",/\btidal\b/,"tidal"),L("linkedin",/linkedin/,"linkedin"),L("patreon",/patreon/,"patreon"),L("paypal",/paypal/,"paypal"),L("github",/github/,"github"),L("adobe",/adobe/,"adobe"),L("dropbox",/dropbox/,"dropbox"),L("canva",/canva/,"canva"),L("notion",/notion/,"notion"),L("figma",/figma/,"figma"),L("zoom",/\bzoom\b/,"zoom"),L("slack",/\bslack\b/,"slack"),L("samsung",/samsung|ซัมซุง/,"samsung"),L("ikea",/ikea|อิเกีย/,"ikea"),L("uniqlo",/uniqlo|ยูนิโคล่/,"uniqlo"),L("handm",/h&m/,"handm"),L("zara",/\bzara\b/,"zara"),L("nike",/\bnike\b|ไนกี้/,"nike"),L("adidas",/adidas|อาดิดาส/,"adidas"),L("toyota",/toyota|โตโยต้า|โตโยตา/,"toyota"),L("honda",/honda|ฮอนด้า|civic|ซีวิค/,"honda"),L("mazda",/mazda|มาสด้า/,"mazda"),L("nissan",/nissan|นิสสัน/,"nissan"),L("mitsubishi",/mitsubishi|มิตซู/,"mitsubishi"),L("bmw",/\bbmw\b/,"bmw"),L("mercedes",/mercedes|benz|เบนซ์/,"mercedes"),L("tesla",/tesla|เทสล่า/,"tesla"),L("suzuki",/suzuki|ซูซูกิ/,"suzuki")];function km(n){const e=String(n||"").toLowerCase();return e.trim()&&Rm.find(t=>t.re.test(e))||null}const Ji=[{key:"food",label:"อาหาร",fa:"fa-utensils",icon:"food",group:"food"},{key:"drink",label:"กาแฟ/เครื่องดื่ม",fa:"fa-mug-hot",icon:"coffee",group:"food"},{key:"snack",label:"ขนม/เบเกอรี่",fa:"fa-cookie",icon:"cake",group:"food"},{key:"fresh",label:"ของสด/ตลาด",fa:"fa-carrot",icon:"leaf",group:"food"},{key:"delivery",label:"เดลิเวอรี่",fa:"fa-box",icon:"box",group:"food"},{key:"party",label:"เหล้า/ปาร์ตี้",fa:"fa-wine-glass",icon:"glass",group:"food"},{key:"bills",label:"ค่าไฟ/บิล",fa:"fa-bolt",icon:"bolt",group:"bills"},{key:"water",label:"ค่าน้ำ",fa:"fa-droplet",icon:"water",group:"bills"},{key:"net",label:"เน็ต/WiFi",fa:"fa-wifi",icon:"wifi",group:"bills"},{key:"phone",label:"มือถือ",fa:"fa-mobile-screen",icon:"mobile",group:"bills"},{key:"rent",label:"ที่พัก/ค่าห้อง",fa:"fa-house",icon:"key",group:"bills"},{key:"condo",label:"ค่าส่วนกลาง",fa:"fa-building",icon:"building",group:"bills"},{key:"insure",label:"ประกัน",fa:"fa-shield",icon:"shieldok",group:"bills"},{key:"tax",label:"ภาษี/ค่าธรรมเนียม",fa:"fa-file-invoice-dollar",icon:"taxdoc",group:"bills"},{key:"app",label:"แอป/สมาชิก",fa:"fa-table-cells",icon:"apps",group:"bills"},{key:"goods",label:"ของใช้/ซุปเปอร์",fa:"fa-cart-shopping",icon:"bag",group:"goods"},{key:"clothes",label:"เสื้อผ้า",fa:"fa-shirt",icon:"shirt",group:"goods"},{key:"beauty",label:"ความงาม",fa:"fa-spray-can",icon:"beauty",group:"goods"},{key:"gadget",label:"ไอที/อุปกรณ์",fa:"fa-laptop",icon:"laptop",group:"goods"},{key:"home",label:"ของแต่งบ้าน",fa:"fa-couch",icon:"sofa",group:"goods"},{key:"health",label:"ยา/สุขภาพ",fa:"fa-pills",icon:"pill",group:"goods"},{key:"doctor",label:"หมอ/โรงพยาบาล",fa:"fa-hospital",icon:"cross",group:"goods"},{key:"pet",label:"สัตว์เลี้ยง",fa:"fa-paw",icon:"paw",group:"goods"},{key:"gift",label:"ของขวัญ",fa:"fa-gift",icon:"gift",group:"goods"},{key:"kid",label:"ลูก/เด็ก",fa:"fa-baby",icon:"baby",group:"goods"},{key:"travel",label:"รถ/ผ่อนรถ",fa:"fa-car",icon:"car",group:"travel"},{key:"fuel",label:"น้ำมัน/ชาร์จรถ",fa:"fa-gas-pump",icon:"fuel",group:"travel"},{key:"transit",label:"รถไฟฟ้า/รถเมล์",fa:"fa-train-subway",icon:"train",group:"travel"},{key:"ride",label:"วิน/แท็กซี่",fa:"fa-motorcycle",icon:"moto",group:"travel"},{key:"parking",label:"ทางด่วน/ที่จอด",fa:"fa-square-parking",icon:"parking",group:"travel"},{key:"carcare",label:"ล้าง/ซ่อมรถ",fa:"fa-wrench",icon:"wrench",group:"travel"},{key:"trip",label:"เที่ยว",fa:"fa-plane",icon:"plane",group:"travel"},{key:"fun",label:"หนัง/สตรีม",fa:"fa-film",icon:"film",group:"fun"},{key:"game",label:"เกม",fa:"fa-gamepad",icon:"game",group:"fun"},{key:"sport",label:"กีฬา/ฟิตเนส",fa:"fa-dumbbell",icon:"dumbbell",group:"fun"},{key:"event",label:"คอนเสิร์ต/งาน",fa:"fa-ticket",icon:"ticket",group:"fun"},{key:"merit",label:"ทำบุญ/บริจาค",fa:"fa-hands-praying",icon:"lotus",group:"other"},{key:"edu",label:"การศึกษา",fa:"fa-graduation-cap",icon:"grad",group:"other"},{key:"transfer",label:"โอน/เติมเงิน",fa:"fa-money-bill-transfer",icon:"swap",group:"other"},{key:"other",label:"อื่นๆ",fa:"fa-money-bill",icon:"dots",group:"other"}];Object.fromEntries(Ji.map(n=>[n.key,n.fa]));const Pm=[["delivery",["grab food","grabfood","lineman","line man","foodpanda","robinhood","shopeefood","เดลิเวอรี่","ส่งอาหาร"]],["insure",["ประกัน","เบี้ย","aia","axa","fwd","allianz","prudential","generali","manulife","msig","chubb","sompo","roojai","รู้ใจ","ทิพย","วิริยะ"]],["tax",["ภาษี","สรรพากร","revenue","ค่าธรรมเนียม","ค่าปรับ"]],["condo",["ค่าส่วนกลาง","นิติบุคคล"]],["trip",["เที่ยว","โรงแรม","ที่พักรีสอร์ท","เครื่องบิน","ตั๋วเครื่องบิน","airbnb","agoda","ทริป","airasia","trip.com","booking"]],["rent",["ค่าเช่า","ค่าห้อง","ค่าหอ","คอนโด"]],["party",["เหล้า","เบียร์","ไวน์","ปาร์ตี้","ผับ"]],["drink",["กาแฟ","ชานม","ชาไข่มุก","คาเฟ่","เครื่องดื่ม","น้ำผลไม้","starbucks","amazon","coffee"]],["snack",["ขนม","เค้ก","เบเกอรี่","ขนมปัง","ไอติม","ไอศกรีม","โดนัท","ครัวซอง","swensen","after you"]],["fresh",["ผักสด","ผลไม้","ตลาดสด","ของสด","ผัก "]],["pet",["แมว","หมา","สุนัข","สัตว์"]],["water",["ค่าน้ำ","ประปา","coway"]],["net",["ค่าเน็ต","อินเทอร์เน็ต","internet","เน็ตบ้าน","wifi","3bb","fiber","ไฟเบอร์"]],["phone",["ค่าโทร","ค่ามือถือ","โทรศัพท์","dtac","ais","truemove","เติมเงินมือถือ"]],["app",["netflix","spotify","youtube","disney","subscription","claude","chatgpt","openai","icloud","adobe","canva","hbo","prime video","google one","apple music","notion","gemini","perplexity","ค่าบริการ"]],["bills",["ค่าไฟ","การไฟฟ้า","เน็ต","ค่าเช่ารายเดือน","google cloud"]],["delivery",["grab"]],["food",["ข้าว","กิน","อาหาร","ก๋วยเตี๋ยว","หมูกระทะ","ชาบู","สุกี้","บุฟเฟ","ส้มตำ","ไก่","หมู","เนื้อ","ปิ้งย่าง","ผัด","ต้ม","แกง","กะเพรา","กระเพรา","ไข่เจียว","ลูกชิ้น","บะหมี่","สเต๊ะ","สลัด","salad","บอนชอน","bonchon","kfc","mcdonald","burger","pizza","ร้านอาหาร"]],["fuel",["น้ำมัน","ปตท","ptt","shell","บางจาก","bangchak","esso","caltex","ชาร์จรถ"]],["transit",["bts","mrt","รถไฟฟ้า","รถเมล์","รถไฟ","airport link"]],["ride",["แท็กซี่","taxi","วินมอเตอร์ไซค์","มอเตอร์ไซค์รับจ้าง","bolt"]],["parking",["ทางด่วน","ที่จอดรถ","จอดรถ","easy pass","m-flow"]],["carcare",["ล้างรถ","ซ่อมรถ","เปลี่ยนยาง","เช็คระยะ","อะไหล่"]],["travel",["รถ","แท็กซี่","ค่าเดินทาง","ตั๋วรถ","civic","honda","toyota","mazda","nissan","isuzu","mitsubishi","benz","bmw","พ.ร.บ.","ค่างวดรถ","ผ่อนรถ","ค่ารถ"]],["game",["เกม","steam","playstation","nintendo","garena","rov"]],["sport",["ฟิตเนส","ยิม","fitness","ฟุตบอล","แบดมินตัน","ว่ายน้ำ"]],["event",["คอนเสิร์ต","บัตรคอน","งานแฟร์","อีเวนต์"]],["fun",["หนัง","โรงหนัง","ดูหนัง","karaoke","คาราโอเกะ","บอร์ดเกม"]],["doctor",["หมอ","โรงพยาบาล","คลินิก","ทำฟัน","หมอฟัน","ตรวจสุขภาพ"]],["health",["ค่ายา","ซื้อยา","วิตามิน","ร้านยา"]],["beauty",["สิว","เครื่องสำอาง","สกินแคร์","ลิป","เซรั่ม","ทำเล็บ","ทำผม","ตัดผม","ซาลอน","สปา","นวด","watsons","วัตสัน"]],["clothes",["เสื้อ","กางเกง","ยีน","กระโปรง","รองเท้า","uniqlo","h&m","zara","nike","adidas"]],["gadget",["ipad","iphone","macbook","โน้ตบุ๊ก","notebook","หูฟัง","สายชาร์จ","power buy","powerbuy"]],["home",["เฟอร์นิเจอร์","ikea","homepro","โฮมโปร","ผ้าม่าน","ที่นอน","หมอน"]],["kid",["นมผง","ผ้าอ้อม","แพมเพิส","ของเล่น","ค่าลูก"]],["merit",["ทำบุญ","บริจาค","พวงมาลัย","ใส่บาตร","ถวาย"]],["edu",["ค่าเรียน","ค่าเทอม","คอร์สเรียน","udemy","coursera","duolingo"]],["gift",["ของขวัญ","วันเกิด","ซองงาน","ดอกไม้"]],["goods",["ซื้อ","ของใช้","ช้อป","shopee","lazada","7-11","เซเว่น","ซุปเปอร์","โลตัส","lotus","บิ๊กซี","big c","tops","foodland","makro","แม็คโคร","cj","ที่ปิ้ง","ครีม","สบู่","ยาสระผม","ที่ปั่นหู","ทิชชู่"]]];function Cm(n){const e=String(n||"").toLowerCase();if(!e.trim())return"other";for(const[t,r]of Pm)if(r.some(s=>e.includes(s)))return t;return"other"}const Dm={food:[],bills:["fa-mobile-screen-button"],goods:["fa-basket-shopping","fa-shopping-basket","fa-shopping-bag","fa-scissors"],travel:["fa-bus"],fun:["fa-tv"],other:[]},Vm=[{key:"food",label:"อาหารและเครื่องดื่ม",short:"อาหาร"},{key:"bills",label:"บิลและค่าบริการ",short:"บิล/รายเดือน"},{key:"goods",label:"ของใช้",short:"ของใช้"},{key:"travel",label:"เดินทาง",short:"เดินทาง"},{key:"fun",label:"บันเทิง",short:"บันเทิง"},{key:"other",label:"อื่นๆ",short:"อื่นๆ"}],Yh=Vm.map(n=>({...n,icons:n.key==="other"?[]:[...Ji.filter(e=>e.group===n.key).map(e=>e.fa),...Dm[n.key]]})),zl={home:h(W,{children:[h("path",{d:"M3.5 11 12 4l8.5 7"}),h("path",{d:"M5.5 9.8V20h13V9.8"}),h("path",{d:"M10 20v-5.5h4V20"})]}),bill:h(W,{children:[h("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),h("path",{d:"M9 8.5h6M9 12h6"})]}),swap:h("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:h(W,{children:[h("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),h("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),h("path",{d:"M15.5 13.8h2.2"})]}),user:h(W,{children:[h("circle",{cx:"12",cy:"8.5",r:"3.6"}),h("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:h("path",{d:"M12 5v14M5 12h14"}),check:h("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:h(W,{children:[h("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),h("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),h("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),h("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:h("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:h("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:h("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:h("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:h("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:h(W,{children:[h("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),h("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:h(W,{children:[h("path",{d:"M5.5 8h13l-1 11.5h-11z"}),h("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:h("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:h(W,{children:[h("circle",{cx:"6",cy:"12",r:"1.1"}),h("circle",{cx:"12",cy:"12",r:"1.1"}),h("circle",{cx:"18",cy:"12",r:"1.1"})]}),people:h(W,{children:[h("circle",{cx:"9",cy:"8.5",r:"3.2"}),h("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),h("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:h(W,{children:[h("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),h("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),bell:h(W,{children:[h("path",{d:"M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"}),h("path",{d:"M10 20.5h4"})]}),trash:h(W,{children:[h("path",{d:"M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7"}),h("path",{d:"M10.5 11v5M13.5 11v5"})]}),alert:h(W,{children:[h("path",{d:"M12 4.5 3.5 19h17z"}),h("path",{d:"M12 10v4.5M12 17h.01"})]}),chart:h("path",{d:"M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5"}),sliders:h(W,{children:[h("path",{d:"M5 7h9M18 7h1M5 17h1M10 17h9"}),h("circle",{cx:"16",cy:"7",r:"2"}),h("circle",{cx:"8",cy:"17",r:"2"})]}),coffee:h(W,{children:[h("path",{d:"M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z"}),h("path",{d:"M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4.5v2M12 4.5v2"})]}),key:h(W,{children:[h("circle",{cx:"8.5",cy:"14.5",r:"3.5"}),h("path",{d:"M11 12 19 4.5M16 7.5l2.5 2.5M14 9.5l1.8 1.8"})]}),film:h(W,{children:[h("rect",{x:"4",y:"5",width:"16",height:"14",rx:"2"}),h("path",{d:"M8 5v14M16 5v14M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4"})]}),pill:h(W,{children:[h("rect",{x:"3.5",y:"9",width:"17",height:"6.5",rx:"3.25",transform:"rotate(-40 12 12)"}),h("path",{d:"m9.4 9.4 5.2 5.2"})]}),plane:h("path",{d:"M3.5 13.5 20.5 5l-4 14-4.5-4.5-3 3v-4.5zM11.5 14.5 20.5 5"}),gift:h(W,{children:[h("rect",{x:"4",y:"9",width:"16",height:"4",rx:"1"}),h("path",{d:"M5.5 13v6.5h13V13M12 9v10.5M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9zM12 9c1-3.5 5-3.5 5-1.2 0 1.2-2 1.2-5 1.2z"})]}),paw:h(W,{children:[h("circle",{cx:"7",cy:"10",r:"1.6"}),h("circle",{cx:"11",cy:"6.8",r:"1.6"}),h("circle",{cx:"15.5",cy:"7.5",r:"1.6"}),h("circle",{cx:"18",cy:"11.5",r:"1.6"}),h("path",{d:"M8 17.5c0-2.5 2.2-4.5 4.5-4.5s4.5 2 4 4.2c-.4 1.8-2 2.3-4 2.3S8 19.5 8 17.5z"})]}),search:h(W,{children:[h("circle",{cx:"11",cy:"11",r:"6"}),h("path",{d:"m16 16 4 4"})]}),pencil:h("path",{d:"M5 19l1-4L16.5 4.5a2 2 0 0 1 3 3L9 18zM14.5 6.5l3 3"}),close:h("path",{d:"M6 6l12 12M18 6 6 18"}),copy:h(W,{children:[h("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),h("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),play:h("polygon",{points:"8 5 19 12 8 19",style:"fill:currentColor"}),shield:h("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),mobile:h(W,{children:[h("rect",{x:"7",y:"3",width:"10",height:"18",rx:"2.5"}),h("path",{d:"M11 17.5h2"})]}),external:h(W,{children:h("path",{d:"M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"})}),layers:h(W,{children:[h("polygon",{points:"12 3 3 8 12 13 21 8"}),h("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]}),sparkle:h("path",{d:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"}),sun:h(W,{children:[h("circle",{cx:"12",cy:"12",r:"4"}),h("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),moon:h("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"}),list:h("path",{d:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"}),upload:h("path",{d:"M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14"}),grid:h(W,{children:[h("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"13",y:"4",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"13",y:"13",width:"7",height:"7",rx:"1.5"})]}),heart:h("path",{d:"M12 20s-7.5-4.4-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"}),star:h("path",{d:"m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"}),target:h(W,{children:[h("circle",{cx:"12",cy:"12",r:"8.5"}),h("circle",{cx:"12",cy:"12",r:"4.8"}),h("circle",{cx:"12",cy:"12",r:"1.2"})]}),card:h(W,{children:[h("rect",{x:"3",y:"5.5",width:"18",height:"13",rx:"2.5"}),h("path",{d:"M3 10h18M7 14.5h4"})]}),cake:h("path",{d:"M6 11h12l-1.5 8.5h-9zM6 11a6 6 0 0 1 12 0M9.5 11.5l.6 8M14.5 11.5l-.6 8"}),leaf:h("path",{d:"M5 19c0-8 5-13 14-14-1 9-6 14-14 14zM5 19l7.5-7.5"}),box:h("path",{d:"M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8"}),glass:h("path",{d:"M8 3.5h8l-.5 5a3.5 3.5 0 0 1-7 0zM12 12v8M8.5 20h7"}),water:h("path",{d:"M12 3.5c3.5 4 6 7.2 6 10.2a6 6 0 0 1-12 0c0-3 2.5-6.2 6-10.2z"}),wifi:h("path",{d:"M4.5 9.5a11 11 0 0 1 15 0M7.5 12.8a7 7 0 0 1 9 0M10.5 16a3 3 0 0 1 3 0M12 19h.01"}),building:h("path",{d:"M5 20V5h9v15M14 9h5v11M3.5 20h17M8 8h3M8 11h3M8 14h3"}),shieldok:h(W,{children:[h("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),h("path",{d:"m8.8 12.2 2.2 2.2 4.2-4.4"})]}),taxdoc:h("path",{d:"M7 3.5h7l4 4v13H7zM14 3.5v4h4M9.5 16.5l5-5M10 12h.01M14 16h.01"}),apps:h(W,{children:[h("rect",{x:"4",y:"4",width:"7",height:"7",rx:"2"}),h("rect",{x:"13",y:"4",width:"7",height:"7",rx:"2"}),h("rect",{x:"4",y:"13",width:"7",height:"7",rx:"2"}),h("path",{d:"M16.5 13v7M13 16.5h7"})]}),shirt:h("path",{d:"M8 4 4.5 6.5 6 10l2-1v11h8V9l2 1 1.5-3.5L16 4c-.8 1.5-2.2 2.2-4 2.2S8.8 5.5 8 4z"}),beauty:h("path",{d:"M9 21h6v-8H9zM10 13V9.5l4-2V13M13.5 4.5l1.5-1.5M16 6l2-1"}),laptop:h(W,{children:[h("rect",{x:"5",y:"5.5",width:"14",height:"10",rx:"1.5"}),h("path",{d:"M3 18.5h18"})]}),sofa:h("path",{d:"M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11M3.5 12a1.5 1.5 0 0 1 3 0v2h11v-2a1.5 1.5 0 0 1 3 0v5h-17zM6 17v2M18 17v2"}),cross:h("path",{d:"M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z"}),baby:h("path",{d:"M9 8h6v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM10 8V5.5h4V8M12 3v2.5M9 12h3M9 15h3"}),fuel:h("path",{d:"M5 20V5.5A1.5 1.5 0 0 1 6.5 4h6A1.5 1.5 0 0 1 14 5.5V20M3.5 20h12M6.5 9h6M14 10h2a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 0 3 0V9l-2.5-3"}),train:h("path",{d:"M7 4h10a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2zM5 10h14M9 13.5h.01M15 13.5h.01M8 17l-2 3M16 17l2 3"}),moto:h(W,{children:[h("circle",{cx:"5.5",cy:"16.5",r:"2.5"}),h("circle",{cx:"18.5",cy:"16.5",r:"2.5"}),h("path",{d:"M8 16.5h6l-2.5-6H8M11.5 10.5h3.5l3.5 6M15 10.5l1-3h2.5"})]}),parking:h(W,{children:[h("rect",{x:"4.5",y:"4",width:"15",height:"16",rx:"3"}),h("path",{d:"M10 16V8h3a2.5 2.5 0 0 1 0 5h-3"})]}),wrench:h("path",{d:"M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z"}),game:h("path",{d:"M7 9h10a4 4 0 0 1 4 4v1a3 3 0 0 1-5.4 1.8L14.5 14h-5l-1.1 1.8A3 3 0 0 1 3 14v-1a4 4 0 0 1 4-4zM8 11.5v3M6.5 13h3M15.5 12.5h.01M17.5 14h.01"}),dumbbell:h("path",{d:"M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10"}),ticket:h("path",{d:"M4 7.5h16v3a1.5 1.5 0 0 0 0 3v3H4v-3a1.5 1.5 0 0 0 0-3zM14 7.5v9"}),lotus:h("path",{d:"M12 19c-4 0-7-2.5-7.5-6 2.6 0 4.8 1 6 2.6M12 19c4 0 7-2.5 7.5-6-2.6 0-4.8 1-6 2.6M12 19c-1.8-2-2.5-4.3-2-7 .5-2.4 1.2-4 2-5.5.8 1.5 1.5 3.1 2 5.5.5 2.7-.2 5-2 7z"}),grad:h("path",{d:"M2.5 9.5 12 5l9.5 4.5L12 14zM6.5 11.5V16c1.5 1.5 3.5 2.2 5.5 2.2s4-.7 5.5-2.2v-4.5M21.5 9.5V14"}),calendar:h(W,{children:[h("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),h("path",{d:"M16 2v4M8 2v4M3 10h18"})]})};function Y({name:n,size:e,class:t=""}){return h("svg",{class:`ic ${t}`,viewBox:"0 0 24 24","aria-hidden":"true",style:e?{width:e,height:e}:void 0,children:zl[n]||zl.dots})}const Mm={...Object.fromEntries(Ji.map(n=>[n.fa,n.icon])),"fa-basket-shopping":"bag","fa-shopping-basket":"bag","fa-shopping-bag":"bag","fa-scissors":"beauty","fa-bus":"train","fa-mobile-screen-button":"mobile","fa-tv":"film","fa-receipt":"bill","fa-arrow-down":"down","fa-credit-card":"card"},Nm=n=>Mm[n]||"bill";let Jh={};try{Jh=Object.assign({"./brand-icons/adidas.js":()=>N(()=>import("./adidas-BFStthNF.js"),[]),"./brand-icons/adobe.js":()=>N(()=>import("./adobe-DVsy-5v7.js"),[]),"./brand-icons/airasia.js":()=>N(()=>import("./airasia-CrX-Wo8m.js"),[]),"./brand-icons/airbnb.js":()=>N(()=>import("./airbnb-Cbhk9IRm.js"),[]),"./brand-icons/aliexpress.js":()=>N(()=>import("./aliexpress-C7Fut5Pv.js"),[]),"./brand-icons/amazon.js":()=>N(()=>import("./amazon-CE_vqqMO.js"),[]),"./brand-icons/americanexpress.js":()=>N(()=>import("./americanexpress-CR4kUFKX.js"),[]),"./brand-icons/anthropic.js":()=>N(()=>import("./anthropic-CtOESTBn.js"),[]),"./brand-icons/apple.js":()=>N(()=>import("./apple-DQyrqi12.js"),[]),"./brand-icons/applemusic.js":()=>N(()=>import("./applemusic-BrRrMIij.js"),[]),"./brand-icons/applepay.js":()=>N(()=>import("./applepay-9Xr-TPlj.js"),[]),"./brand-icons/bmw.js":()=>N(()=>import("./bmw-DUfdtu5i.js"),[]),"./brand-icons/boots.js":()=>N(()=>import("./boots-DHKV8zUU.js"),[]),"./brand-icons/burgerking.js":()=>N(()=>import("./burgerking-sO9DRM_Y.js"),[]),"./brand-icons/canva.js":()=>N(()=>import("./canva-2sjRryIN.js"),[]),"./brand-icons/claude.js":()=>N(()=>import("./claude-DIOmB7mL.js"),[]),"./brand-icons/coursera.js":()=>N(()=>import("./coursera-osog-YAy.js"),[]),"./brand-icons/discord.js":()=>N(()=>import("./discord-BCvBrKcf.js"),[]),"./brand-icons/dropbox.js":()=>N(()=>import("./dropbox-DDDezJAq.js"),[]),"./brand-icons/duolingo.js":()=>N(()=>import("./duolingo-C51AbWwW.js"),[]),"./brand-icons/epicgames.js":()=>N(()=>import("./epicgames-CLU38Wl3.js"),[]),"./brand-icons/expedia.js":()=>N(()=>import("./expedia-CnFVrTVT.js"),[]),"./brand-icons/expressvpn.js":()=>N(()=>import("./expressvpn-lg98L813.js"),[]),"./brand-icons/facebook.js":()=>N(()=>import("./facebook-DVxFB6lG.js"),[]),"./brand-icons/figma.js":()=>N(()=>import("./figma-BvSNmEK5.js"),[]),"./brand-icons/foodpanda.js":()=>N(()=>import("./foodpanda-mCNdPjBQ.js"),[]),"./brand-icons/github.js":()=>N(()=>import("./github-CugS4z52.js"),[]),"./brand-icons/google.js":()=>N(()=>import("./google-BOeWiJEc.js"),[]),"./brand-icons/googlecloud.js":()=>N(()=>import("./googlecloud-Cu0q9mrt.js"),[]),"./brand-icons/googledrive.js":()=>N(()=>import("./googledrive-DJRS2uJI.js"),[]),"./brand-icons/googlegemini.js":()=>N(()=>import("./googlegemini-Ban1TaY7.js"),[]),"./brand-icons/googlepay.js":()=>N(()=>import("./googlepay-d4D0YCZv.js"),[]),"./brand-icons/googleplay.js":()=>N(()=>import("./googleplay-DSYmKzy-.js"),[]),"./brand-icons/grab.js":()=>N(()=>import("./grab-C5n4U66f.js"),[]),"./brand-icons/handm.js":()=>N(()=>import("./handm-BrkydCya.js"),[]),"./brand-icons/hbo.js":()=>N(()=>import("./hbo-Xi3Ga0Ag.js"),[]),"./brand-icons/honda.js":()=>N(()=>import("./honda-B3MvvqC_.js"),[]),"./brand-icons/hotelsdotcom.js":()=>N(()=>import("./hotelsdotcom-gf0EbR2R.js"),[]),"./brand-icons/huawei.js":()=>N(()=>import("./huawei-Ce-BjWiW.js"),[]),"./brand-icons/icloud.js":()=>N(()=>import("./icloud-k5g80BhN.js"),[]),"./brand-icons/ikea.js":()=>N(()=>import("./ikea-DlA-oA_M.js"),[]),"./brand-icons/instagram.js":()=>N(()=>import("./instagram-CsdKzdLT.js"),[]),"./brand-icons/jcb.js":()=>N(()=>import("./jcb-CgtLIRZ7.js"),[]),"./brand-icons/kfc.js":()=>N(()=>import("./kfc-B288Vwqr.js"),[]),"./brand-icons/line.js":()=>N(()=>import("./line-BoNSQUC3.js"),[]),"./brand-icons/linkedin.js":()=>N(()=>import("./linkedin-BhyiVVvo.js"),[]),"./brand-icons/mastercard.js":()=>N(()=>import("./mastercard-CVUa-KQc.js"),[]),"./brand-icons/mazda.js":()=>N(()=>import("./mazda-DCLcb_dq.js"),[]),"./brand-icons/mcdonalds.js":()=>N(()=>import("./mcdonalds-BPA871I9.js"),[]),"./brand-icons/mercedes.js":()=>N(()=>import("./mercedes-AbDC0bVz.js"),[]),"./brand-icons/messenger.js":()=>N(()=>import("./messenger-CaDRAr-b.js"),[]),"./brand-icons/mitsubishi.js":()=>N(()=>import("./mitsubishi-DnsdlJzq.js"),[]),"./brand-icons/netflix.js":()=>N(()=>import("./netflix-BQQvNjqW.js"),[]),"./brand-icons/nike.js":()=>N(()=>import("./nike-CQqk4eLe.js"),[]),"./brand-icons/nintendoswitch.js":()=>N(()=>import("./nintendoswitch-DabqU0av.js"),[]),"./brand-icons/nissan.js":()=>N(()=>import("./nissan-ByAdzwv7.js"),[]),"./brand-icons/nordvpn.js":()=>N(()=>import("./nordvpn-8Y1Pe2Cy.js"),[]),"./brand-icons/notion.js":()=>N(()=>import("./notion-D0FaaC_S.js"),[]),"./brand-icons/openai.js":()=>N(()=>import("./openai-CvQEFKhM.js"),[]),"./brand-icons/oppo.js":()=>N(()=>import("./oppo-CtZkq0iL.js"),[]),"./brand-icons/patreon.js":()=>N(()=>import("./patreon-Cgi1AMep.js"),[]),"./brand-icons/paypal.js":()=>N(()=>import("./paypal-klZJXRR5.js"),[]),"./brand-icons/perplexity.js":()=>N(()=>import("./perplexity-ZTjoHRA0.js"),[]),"./brand-icons/pinterest.js":()=>N(()=>import("./pinterest-CKr7QArU.js"),[]),"./brand-icons/playstation.js":()=>N(()=>import("./playstation-CTfIUaqK.js"),[]),"./brand-icons/primevideo.js":()=>N(()=>import("./primevideo-Byl7UFA-.js"),[]),"./brand-icons/roblox.js":()=>N(()=>import("./roblox-_F2R7ZKS.js"),[]),"./brand-icons/samsung.js":()=>N(()=>import("./samsung-B_t_liHH.js"),[]),"./brand-icons/shell.js":()=>N(()=>import("./shell-BIpGpjau.js"),[]),"./brand-icons/shopee.js":()=>N(()=>import("./shopee-Bs2iWnxz.js"),[]),"./brand-icons/slack.js":()=>N(()=>import("./slack-75zySf2G.js"),[]),"./brand-icons/snapchat.js":()=>N(()=>import("./snapchat-CPiEDscF.js"),[]),"./brand-icons/soundcloud.js":()=>N(()=>import("./soundcloud-BBH8gZHV.js"),[]),"./brand-icons/spotify.js":()=>N(()=>import("./spotify-B_qVdDhj.js"),[]),"./brand-icons/starbucks.js":()=>N(()=>import("./starbucks-DF2cwUqt.js"),[]),"./brand-icons/steam.js":()=>N(()=>import("./steam-CS1KFeMC.js"),[]),"./brand-icons/suzuki.js":()=>N(()=>import("./suzuki-TLXQdY_a.js"),[]),"./brand-icons/telegram.js":()=>N(()=>import("./telegram-Bj1cRE8S.js"),[]),"./brand-icons/tesla.js":()=>N(()=>import("./tesla-Bch3k-t6.js"),[]),"./brand-icons/tidal.js":()=>N(()=>import("./tidal-UWumJdzo.js"),[]),"./brand-icons/tiktok.js":()=>N(()=>import("./tiktok-wkIpYuJU.js"),[]),"./brand-icons/toyota.js":()=>N(()=>import("./toyota-Dy60P9dg.js"),[]),"./brand-icons/tripadvisor.js":()=>N(()=>import("./tripadvisor-DD1XuwRQ.js"),[]),"./brand-icons/tripdotcom.js":()=>N(()=>import("./tripdotcom-C2ph0l9V.js"),[]),"./brand-icons/twitch.js":()=>N(()=>import("./twitch-BkTzJ-pQ.js"),[]),"./brand-icons/uber.js":()=>N(()=>import("./uber-C_GI5I78.js"),[]),"./brand-icons/ubereats.js":()=>N(()=>import("./ubereats-BOutM2TN.js"),[]),"./brand-icons/udemy.js":()=>N(()=>import("./udemy-CCkTko6L.js"),[]),"./brand-icons/uniqlo.js":()=>N(()=>import("./uniqlo-BRPwj_dP.js"),[]),"./brand-icons/visa.js":()=>N(()=>import("./visa-DU-4OIJV.js"),[]),"./brand-icons/whatsapp.js":()=>N(()=>import("./whatsapp-qy7qRrjE.js"),[]),"./brand-icons/wise.js":()=>N(()=>import("./wise-DdBiRZhN.js"),[]),"./brand-icons/x.js":()=>N(()=>import("./x-CG_DUqJq.js"),[]),"./brand-icons/xiaomi.js":()=>N(()=>import("./xiaomi-D5HYuHGY.js"),[]),"./brand-icons/youtube.js":()=>N(()=>import("./youtube-1Fc4bTfZ.js"),[]),"./brand-icons/youtubemusic.js":()=>N(()=>import("./youtubemusic-DYGvrmqP.js"),[]),"./brand-icons/zara.js":()=>N(()=>import("./zara-BVgS0uKm.js"),[]),"./brand-icons/zoom.js":()=>N(()=>import("./zoom-CNAWINv7.js"),[])})}catch{}const Si={},ql={},ia=new Set;function Om(n){if(Si[n]||ql[n])return;const e=Jh[`./brand-icons/${n}.js`];e&&(ql[n]=e().then(t=>{Si[n]=t.default,ia.forEach(r=>r())}).catch(()=>{}))}function Lm(n){const[,e]=te(0);return ye(()=>{if(!n||Si[n])return;const t=()=>e(r=>r+1);return ia.add(t),Om(n),()=>ia.delete(t)},[n]),n?Si[n]:null}function xm({b:n,size:e,name:t}){const r=Lm(n.si);if(n.text){const s=/[ก-๙]/.test(n.text)?Math.ceil(n.text.replace(/[ิีึืุูั่้๊๋็์]/g,"").length*.75):n.text.length,i=Math.round(e*(s>5?.21:s>3?.26:.32));return h("b",{class:"brand-wm",style:{fontSize:i},children:n.text})}if(r){const s=Math.round(e*.58);return h("svg",{viewBox:"0 0 24 24",width:s,height:s,"aria-hidden":"true",children:h("path",{d:r,fill:n.fg})})}return h(Y,{name:n.icon||t,size:Math.round(e*.5)})}function Fm({desc:n,name:e,size:t=40,iconSize:r}){const s=km(n);if(!s)return h("span",{class:"ico",style:t!==40?{width:t,height:t}:void 0,children:h(Y,{name:e,size:r})});const i={width:t,height:t,background:s.bg,color:s.fg,borderRadius:s.round?"50%":Math.round(t*.3)};return s.ring&&(i.boxShadow="inset 0 0 0 1.5px #e3e8f5"),h("span",{class:"ico brand",style:i,"aria-hidden":"true",children:h(xm,{b:s,size:t,name:e})})}function Wl({size:n=24}){return h("svg",{viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",style:{flex:"none"},children:[h("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),h("path",{d:"M19 13h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),h("path",{d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"}),h("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"}),h("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"})]})}function Gr({size:n=88,label:e=""}){return h("div",{class:"ld-wrap",role:"status","aria-live":"polite",children:[h("svg",{class:"ld",viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",children:[h("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),h("g",{class:"ld-l",children:[h("path",{d:"M19 13h13v35l-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),h("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),h("g",{class:"ld-r",children:[h("path",{d:"M32 13h13v38l-4.3-3-4.4 3-4.3-3z",fill:"#ffffff"}),h("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),h("path",{class:"ld-cut",d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"})]}),e?h("p",{class:"ld-t",children:e}):null]})}var Hl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Um=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let m=(c&15)<<2|d>>6,w=d&63;l||(w=64,a||(m=64)),r.push(t[f],t[g],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Um(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new jm;const m=i<<2|c>>4;if(r.push(m),d!==64){const w=c<<4&240|d>>2;if(r.push(w),g!==64){const R=d<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $m=function(n){const e=Zh(n);return ed.encodeByteArray(e,!0)},Ri=function(n){return $m(n).replace(/\./g,"")},td=function(n){try{return ed.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=()=>Bm().__FIREBASE_DEFAULTS__,qm=()=>{if(typeof process>"u"||typeof Hl>"u")return;const n=Hl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&td(n[1]);return e&&JSON.parse(e)},Zi=()=>{try{return zm()||qm()||Wm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nd=n=>{var e,t;return(t=(e=Zi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Hm=n=>{const e=nd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},rd=()=>{var n;return(n=Zi())===null||n===void 0?void 0:n.config},sd=n=>{var e;return(e=Zi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ri(JSON.stringify(t)),Ri(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Xm(){var n;const e=(n=Zi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ym(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e_(){const n=Ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function t_(){return!Xm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function n_(){try{return typeof indexedDB=="object"}catch{return!1}}function r_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="FirebaseError";class Gt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=s_,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?i_(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Gt(s,c,r)}}function i_(n,e){return n.replace(o_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const o_=/\{\$([^}]+)}/g;function a_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ki(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Gl(i)&&Gl(a)){if(!ki(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Gl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function c_(n,e){const t=new l_(n,e);return t.subscribe.bind(t)}class l_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");u_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Bo),s.error===void 0&&(s.error=Bo),s.complete===void 0&&(s.complete=Bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n){return n&&n._delegate?n._delegate:n}class On{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Gm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f_(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:d_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function d_(n){return n===Pn?void 0:n}function f_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new h_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const m_={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},__=se.INFO,g_={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},y_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=g_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=__,this._logHandler=y_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const v_=(n,e)=>e.some(t=>n instanceof t);let Kl,Ql;function E_(){return Kl||(Kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b_(){return Ql||(Ql=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const id=new WeakMap,oa=new WeakMap,od=new WeakMap,zo=new WeakMap,Ba=new WeakMap;function w_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(ln(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&id.set(t,n)}).catch(()=>{}),Ba.set(e,n),e}function T_(n){if(oa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});oa.set(n,e)}let aa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||od.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ln(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function I_(n){aa=n(aa)}function A_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qo(this),e,...t);return od.set(r,e.sort?e.sort():[e]),ln(r)}:b_().includes(n)?function(...e){return n.apply(qo(this),e),ln(id.get(this))}:function(...e){return ln(n.apply(qo(this),e))}}function S_(n){return typeof n=="function"?A_(n):(n instanceof IDBTransaction&&T_(n),v_(n,E_())?new Proxy(n,aa):n)}function ln(n){if(n instanceof IDBRequest)return w_(n);if(zo.has(n))return zo.get(n);const e=S_(n);return e!==n&&(zo.set(n,e),Ba.set(e,n)),e}const qo=n=>Ba.get(n);function R_(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=ln(a);return r&&a.addEventListener("upgradeneeded",l=>{r(ln(a.result),l.oldVersion,l.newVersion,ln(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const k_=["get","getKey","getAll","getAllKeys","count"],P_=["put","add","delete","clear"],Wo=new Map;function Xl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wo.get(e))return Wo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=P_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||k_.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Wo.set(e,i),i}I_(n=>({...n,get:(e,t,r)=>Xl(e,t)||n.get(e,t,r),has:(e,t)=>!!Xl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(D_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function D_(n){const e=n.getComponent();return e?.type==="VERSION"}const ca="@firebase/app",Yl="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new $a("@firebase/app"),V_="@firebase/app-compat",M_="@firebase/analytics-compat",N_="@firebase/analytics",O_="@firebase/app-check-compat",L_="@firebase/app-check",x_="@firebase/auth",F_="@firebase/auth-compat",U_="@firebase/database",j_="@firebase/data-connect",$_="@firebase/database-compat",B_="@firebase/functions",z_="@firebase/functions-compat",q_="@firebase/installations",W_="@firebase/installations-compat",H_="@firebase/messaging",G_="@firebase/messaging-compat",K_="@firebase/performance",Q_="@firebase/performance-compat",X_="@firebase/remote-config",Y_="@firebase/remote-config-compat",J_="@firebase/storage",Z_="@firebase/storage-compat",eg="@firebase/firestore",tg="@firebase/vertexai-preview",ng="@firebase/firestore-compat",rg="firebase",sg="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="[DEFAULT]",ig={[ca]:"fire-core",[V_]:"fire-core-compat",[N_]:"fire-analytics",[M_]:"fire-analytics-compat",[L_]:"fire-app-check",[O_]:"fire-app-check-compat",[x_]:"fire-auth",[F_]:"fire-auth-compat",[U_]:"fire-rtdb",[j_]:"fire-data-connect",[$_]:"fire-rtdb-compat",[B_]:"fire-fn",[z_]:"fire-fn-compat",[q_]:"fire-iid",[W_]:"fire-iid-compat",[H_]:"fire-fcm",[G_]:"fire-fcm-compat",[K_]:"fire-perf",[Q_]:"fire-perf-compat",[X_]:"fire-rc",[Y_]:"fire-rc-compat",[J_]:"fire-gcs",[Z_]:"fire-gcs-compat",[eg]:"fire-fst",[ng]:"fire-fst-compat",[tg]:"fire-vertex","fire-js":"fire-js",[rg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Map,og=new Map,ua=new Map;function Jl(n,e){try{n.container.addComponent(e)}catch(t){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pr(n){const e=n.name;if(ua.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;ua.set(e,n);for(const t of Pi.values())Jl(t,n);for(const t of og.values())Jl(t,n);return!0}function za(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ot(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new ys("app","Firebase",ag);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=sg;function ad(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:la,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(t||(t=rd()),!t)throw un.create("no-options");const i=Pi.get(s);if(i){if(ki(t,i.options)&&ki(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const a=new p_(s);for(const l of ua.values())a.addComponent(l);const c=new cg(t,r,a);return Pi.set(s,c),c}function cd(n=la){const e=Pi.get(n);if(!e&&n===la&&rd())return ad();if(!e)throw un.create("no-app",{appName:n});return e}function hn(n,e,t){var r;let s=(r=ig[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(c.join(" "));return}pr(new On(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="firebase-heartbeat-database",ug=1,ls="firebase-heartbeat-store";let Ho=null;function ld(){return Ho||(Ho=R_(lg,ug,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw un.create("idb-open",{originalErrorMessage:n.message})})),Ho}async function hg(n){try{const t=(await ld()).transaction(ls),r=await t.objectStore(ls).get(ud(n));return await t.done,r}catch(e){if(e instanceof Gt)jt.warn(e.message);else{const t=un.create("idb-get",{originalErrorMessage:e?.message});jt.warn(t.message)}}}async function Zl(n,e){try{const r=(await ld()).transaction(ls,"readwrite");await r.objectStore(ls).put(e,ud(n)),await r.done}catch(t){if(t instanceof Gt)jt.warn(t.message);else{const r=un.create("idb-set",{originalErrorMessage:t?.message});jt.warn(r.message)}}}function ud(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=1024,fg=30*24*60*60*1e3;class pg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _g(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=eu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=fg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eu(),{heartbeatsToSend:r,unsentEntries:s}=mg(this._heartbeatsCache.heartbeats),i=Ri(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return jt.warn(t),""}}}function eu(){return new Date().toISOString().substring(0,10)}function mg(n,e=dg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),tu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n_()?r_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tu(n){return Ri(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n){pr(new On("platform-logger",e=>new C_(e),"PRIVATE")),pr(new On("heartbeat",e=>new pg(e),"PRIVATE")),hn(ca,Yl,n),hn(ca,Yl,"esm2017"),hn("fire-js","")}gg("");var yg="firebase",vg="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(yg,vg,"app");var nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dn,hd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function b(){}b.prototype=y.prototype,T.D=y.prototype,T.prototype=new b,T.prototype.constructor=T,T.C=function(I,A,v){for(var E=Array(arguments.length-2),he=2;he<arguments.length;he++)E[he-2]=arguments[he];return y.prototype[A].apply(I,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,b){b||(b=0);var I=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)I[A]=y.charCodeAt(b++)|y.charCodeAt(b++)<<8|y.charCodeAt(b++)<<16|y.charCodeAt(b++)<<24;else for(A=0;16>A;++A)I[A]=y[b++]|y[b++]<<8|y[b++]<<16|y[b++]<<24;y=T.g[0],b=T.g[1],A=T.g[2];var v=T.g[3],E=y+(v^b&(A^v))+I[0]+3614090360&4294967295;y=b+(E<<7&4294967295|E>>>25),E=v+(A^y&(b^A))+I[1]+3905402710&4294967295,v=y+(E<<12&4294967295|E>>>20),E=A+(b^v&(y^b))+I[2]+606105819&4294967295,A=v+(E<<17&4294967295|E>>>15),E=b+(y^A&(v^y))+I[3]+3250441966&4294967295,b=A+(E<<22&4294967295|E>>>10),E=y+(v^b&(A^v))+I[4]+4118548399&4294967295,y=b+(E<<7&4294967295|E>>>25),E=v+(A^y&(b^A))+I[5]+1200080426&4294967295,v=y+(E<<12&4294967295|E>>>20),E=A+(b^v&(y^b))+I[6]+2821735955&4294967295,A=v+(E<<17&4294967295|E>>>15),E=b+(y^A&(v^y))+I[7]+4249261313&4294967295,b=A+(E<<22&4294967295|E>>>10),E=y+(v^b&(A^v))+I[8]+1770035416&4294967295,y=b+(E<<7&4294967295|E>>>25),E=v+(A^y&(b^A))+I[9]+2336552879&4294967295,v=y+(E<<12&4294967295|E>>>20),E=A+(b^v&(y^b))+I[10]+4294925233&4294967295,A=v+(E<<17&4294967295|E>>>15),E=b+(y^A&(v^y))+I[11]+2304563134&4294967295,b=A+(E<<22&4294967295|E>>>10),E=y+(v^b&(A^v))+I[12]+1804603682&4294967295,y=b+(E<<7&4294967295|E>>>25),E=v+(A^y&(b^A))+I[13]+4254626195&4294967295,v=y+(E<<12&4294967295|E>>>20),E=A+(b^v&(y^b))+I[14]+2792965006&4294967295,A=v+(E<<17&4294967295|E>>>15),E=b+(y^A&(v^y))+I[15]+1236535329&4294967295,b=A+(E<<22&4294967295|E>>>10),E=y+(A^v&(b^A))+I[1]+4129170786&4294967295,y=b+(E<<5&4294967295|E>>>27),E=v+(b^A&(y^b))+I[6]+3225465664&4294967295,v=y+(E<<9&4294967295|E>>>23),E=A+(y^b&(v^y))+I[11]+643717713&4294967295,A=v+(E<<14&4294967295|E>>>18),E=b+(v^y&(A^v))+I[0]+3921069994&4294967295,b=A+(E<<20&4294967295|E>>>12),E=y+(A^v&(b^A))+I[5]+3593408605&4294967295,y=b+(E<<5&4294967295|E>>>27),E=v+(b^A&(y^b))+I[10]+38016083&4294967295,v=y+(E<<9&4294967295|E>>>23),E=A+(y^b&(v^y))+I[15]+3634488961&4294967295,A=v+(E<<14&4294967295|E>>>18),E=b+(v^y&(A^v))+I[4]+3889429448&4294967295,b=A+(E<<20&4294967295|E>>>12),E=y+(A^v&(b^A))+I[9]+568446438&4294967295,y=b+(E<<5&4294967295|E>>>27),E=v+(b^A&(y^b))+I[14]+3275163606&4294967295,v=y+(E<<9&4294967295|E>>>23),E=A+(y^b&(v^y))+I[3]+4107603335&4294967295,A=v+(E<<14&4294967295|E>>>18),E=b+(v^y&(A^v))+I[8]+1163531501&4294967295,b=A+(E<<20&4294967295|E>>>12),E=y+(A^v&(b^A))+I[13]+2850285829&4294967295,y=b+(E<<5&4294967295|E>>>27),E=v+(b^A&(y^b))+I[2]+4243563512&4294967295,v=y+(E<<9&4294967295|E>>>23),E=A+(y^b&(v^y))+I[7]+1735328473&4294967295,A=v+(E<<14&4294967295|E>>>18),E=b+(v^y&(A^v))+I[12]+2368359562&4294967295,b=A+(E<<20&4294967295|E>>>12),E=y+(b^A^v)+I[5]+4294588738&4294967295,y=b+(E<<4&4294967295|E>>>28),E=v+(y^b^A)+I[8]+2272392833&4294967295,v=y+(E<<11&4294967295|E>>>21),E=A+(v^y^b)+I[11]+1839030562&4294967295,A=v+(E<<16&4294967295|E>>>16),E=b+(A^v^y)+I[14]+4259657740&4294967295,b=A+(E<<23&4294967295|E>>>9),E=y+(b^A^v)+I[1]+2763975236&4294967295,y=b+(E<<4&4294967295|E>>>28),E=v+(y^b^A)+I[4]+1272893353&4294967295,v=y+(E<<11&4294967295|E>>>21),E=A+(v^y^b)+I[7]+4139469664&4294967295,A=v+(E<<16&4294967295|E>>>16),E=b+(A^v^y)+I[10]+3200236656&4294967295,b=A+(E<<23&4294967295|E>>>9),E=y+(b^A^v)+I[13]+681279174&4294967295,y=b+(E<<4&4294967295|E>>>28),E=v+(y^b^A)+I[0]+3936430074&4294967295,v=y+(E<<11&4294967295|E>>>21),E=A+(v^y^b)+I[3]+3572445317&4294967295,A=v+(E<<16&4294967295|E>>>16),E=b+(A^v^y)+I[6]+76029189&4294967295,b=A+(E<<23&4294967295|E>>>9),E=y+(b^A^v)+I[9]+3654602809&4294967295,y=b+(E<<4&4294967295|E>>>28),E=v+(y^b^A)+I[12]+3873151461&4294967295,v=y+(E<<11&4294967295|E>>>21),E=A+(v^y^b)+I[15]+530742520&4294967295,A=v+(E<<16&4294967295|E>>>16),E=b+(A^v^y)+I[2]+3299628645&4294967295,b=A+(E<<23&4294967295|E>>>9),E=y+(A^(b|~v))+I[0]+4096336452&4294967295,y=b+(E<<6&4294967295|E>>>26),E=v+(b^(y|~A))+I[7]+1126891415&4294967295,v=y+(E<<10&4294967295|E>>>22),E=A+(y^(v|~b))+I[14]+2878612391&4294967295,A=v+(E<<15&4294967295|E>>>17),E=b+(v^(A|~y))+I[5]+4237533241&4294967295,b=A+(E<<21&4294967295|E>>>11),E=y+(A^(b|~v))+I[12]+1700485571&4294967295,y=b+(E<<6&4294967295|E>>>26),E=v+(b^(y|~A))+I[3]+2399980690&4294967295,v=y+(E<<10&4294967295|E>>>22),E=A+(y^(v|~b))+I[10]+4293915773&4294967295,A=v+(E<<15&4294967295|E>>>17),E=b+(v^(A|~y))+I[1]+2240044497&4294967295,b=A+(E<<21&4294967295|E>>>11),E=y+(A^(b|~v))+I[8]+1873313359&4294967295,y=b+(E<<6&4294967295|E>>>26),E=v+(b^(y|~A))+I[15]+4264355552&4294967295,v=y+(E<<10&4294967295|E>>>22),E=A+(y^(v|~b))+I[6]+2734768916&4294967295,A=v+(E<<15&4294967295|E>>>17),E=b+(v^(A|~y))+I[13]+1309151649&4294967295,b=A+(E<<21&4294967295|E>>>11),E=y+(A^(b|~v))+I[4]+4149444226&4294967295,y=b+(E<<6&4294967295|E>>>26),E=v+(b^(y|~A))+I[11]+3174756917&4294967295,v=y+(E<<10&4294967295|E>>>22),E=A+(y^(v|~b))+I[2]+718787259&4294967295,A=v+(E<<15&4294967295|E>>>17),E=b+(v^(A|~y))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+v&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var b=y-this.blockSize,I=this.B,A=this.h,v=0;v<y;){if(A==0)for(;v<=b;)s(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<y;)if(I[A++]=T.charCodeAt(v++),A==this.blockSize){s(this,I),A=0;break}}else for(;v<y;)if(I[A++]=T[v++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var b=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=b&255,b/=256;for(this.u(T),T=Array(16),y=b=0;4>y;++y)for(var I=0;32>I;I+=8)T[b++]=this.g[y]>>>I&255;return T};function i(T,y){var b=c;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=y(T)}function a(T,y){this.h=y;for(var b=[],I=!0,A=T.length-1;0<=A;A--){var v=T[A]|0;I&&v==y||(b[A]=v,I=!1)}this.g=b}var c={};function l(T){return-128<=T&&128>T?i(T,function(y){return new a([y|0],0>y?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return S(d(-T));for(var y=[],b=1,I=0;T>=b;I++)y[I]=T/b|0,b*=4294967296;return new a(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return S(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=d(Math.pow(y,8)),I=g,A=0;A<T.length;A+=8){var v=Math.min(8,T.length-A),E=parseInt(T.substring(A,A+v),y);8>v?(v=d(Math.pow(y,v)),I=I.j(v).add(d(E))):(I=I.j(b),I=I.add(d(E)))}return I}var g=l(0),m=l(1),w=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-S(this).m();for(var T=0,y=1,b=0;b<this.g.length;b++){var I=this.i(b);T+=(0<=I?I:4294967296+I)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(D(this))return"-"+S(this).toString(T);for(var y=d(Math.pow(T,6)),b=this,I="";;){var A=K(b,y).g;b=M(b,A.j(y));var v=((0<b.g.length?b.g[0]:b.h)>>>0).toString(T);if(b=A,R(b))return v+I;for(;6>v.length;)v="0"+v;I=v+I}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=M(this,T),D(T)?-1:R(T)?0:1};function S(T){for(var y=T.g.length,b=[],I=0;I<y;I++)b[I]=~T.g[I];return new a(b,~T.h).add(m)}n.abs=function(){return D(this)?S(this):this},n.add=function(T){for(var y=Math.max(this.g.length,T.g.length),b=[],I=0,A=0;A<=y;A++){var v=I+(this.i(A)&65535)+(T.i(A)&65535),E=(v>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);I=E>>>16,v&=65535,E&=65535,b[A]=E<<16|v}return new a(b,b[b.length-1]&-2147483648?-1:0)};function M(T,y){return T.add(S(y))}n.j=function(T){if(R(this)||R(T))return g;if(D(this))return D(T)?S(this).j(S(T)):S(S(this).j(T));if(D(T))return S(this.j(S(T)));if(0>this.l(w)&&0>T.l(w))return d(this.m()*T.m());for(var y=this.g.length+T.g.length,b=[],I=0;I<2*y;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<T.g.length;A++){var v=this.i(I)>>>16,E=this.i(I)&65535,he=T.i(A)>>>16,Ve=T.i(A)&65535;b[2*I+2*A]+=E*Ve,x(b,2*I+2*A),b[2*I+2*A+1]+=v*Ve,x(b,2*I+2*A+1),b[2*I+2*A+1]+=E*he,x(b,2*I+2*A+1),b[2*I+2*A+2]+=v*he,x(b,2*I+2*A+2)}for(I=0;I<y;I++)b[I]=b[2*I+1]<<16|b[2*I];for(I=y;I<2*y;I++)b[I]=0;return new a(b,0)};function x(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function $(T,y){this.g=T,this.h=y}function K(T,y){if(R(y))throw Error("division by zero");if(R(T))return new $(g,g);if(D(T))return y=K(S(T),y),new $(S(y.g),S(y.h));if(D(y))return y=K(T,S(y)),new $(S(y.g),y.h);if(30<T.g.length){if(D(T)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var b=m,I=y;0>=I.l(T);)b=J(b),I=J(I);var A=ee(b,1),v=ee(I,1);for(I=ee(I,2),b=ee(b,2);!R(I);){var E=v.add(I);0>=E.l(T)&&(A=A.add(b),v=E),I=ee(I,1),b=ee(b,1)}return y=M(T,A.j(y)),new $(A,y)}for(A=g;0<=T.l(y);){for(b=Math.max(1,Math.floor(T.m()/y.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),v=d(b),E=v.j(y);D(E)||0<E.l(T);)b-=I,v=d(b),E=v.j(y);R(v)&&(v=m),A=A.add(v),T=M(T,E)}return new $(A,T)}n.A=function(T){return K(this,T).h},n.and=function(T){for(var y=Math.max(this.g.length,T.g.length),b=[],I=0;I<y;I++)b[I]=this.i(I)&T.i(I);return new a(b,this.h&T.h)},n.or=function(T){for(var y=Math.max(this.g.length,T.g.length),b=[],I=0;I<y;I++)b[I]=this.i(I)|T.i(I);return new a(b,this.h|T.h)},n.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),b=[],I=0;I<y;I++)b[I]=this.i(I)^T.i(I);return new a(b,this.h^T.h)};function J(T){for(var y=T.g.length+1,b=[],I=0;I<y;I++)b[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(b,T.h)}function ee(T,y){var b=y>>5;y%=32;for(var I=T.g.length-b,A=[],v=0;v<I;v++)A[v]=0<y?T.i(v+b)>>>y|T.i(v+b+1)<<32-y:T.i(v+b);return new a(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Dn=a}).apply(typeof nu<"u"?nu:typeof self<"u"?self:typeof window<"u"?window:{});var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dd,Jr,fd,di,ha,pd,md,_d;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,p){return o==Array.prototype||o==Object.prototype||(o[u]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ei=="object"&&ei];for(var u=0;u<o.length;++u){var p=o[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var p=r;o=o.split(".");for(var _=0;_<o.length-1;_++){var k=o[_];if(!(k in p))break e;p=p[k]}o=o[o.length-1],_=p[o],u=u(_),u!=_&&u!=null&&e(p,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var p=0,_=!1,k={next:function(){if(!_&&p<o.length){var C=p++;return{value:u(C,o[C]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,p){return o.call.apply(o.bind,arguments)}function g(o,u,p){if(!o)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function m(o,u,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function w(o,u){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),o.apply(this,_)}}function R(o,u){function p(){}p.prototype=u.prototype,o.aa=u.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(_,k,C){for(var F=Array(arguments.length-2),de=2;de<arguments.length;de++)F[de-2]=arguments[de];return u.prototype[k].apply(_,F)}}function D(o){const u=o.length;if(0<u){const p=Array(u);for(let _=0;_<u;_++)p[_]=o[_];return p}return[]}function S(o,u){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const k=o.length||0,C=_.length||0;o.length=k+C;for(let F=0;F<C;F++)o[k+F]=_[F]}else o.push(_)}}class M{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var J=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ee(o,u,p){for(const _ in o)u.call(p,o[_],_,o)}function T(o,u){for(const p in o)u.call(void 0,o[p],p,o)}function y(o){const u={};for(const p in o)u[p]=o[p];return u}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)o[p]=_[p];for(let C=0;C<b.length;C++)p=b[C],Object.prototype.hasOwnProperty.call(_,p)&&(o[p]=_[p])}}function A(o){var u=1;o=o.split(":");const p=[];for(;0<u&&o.length;)p.push(o.shift()),u--;return o.length&&p.push(o.join(":")),p}function v(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Qt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class he{constructor(){this.h=this.g=null}add(u,p){const _=Ve.get();_.set(u,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Ve=new M(()=>new kt,o=>o.reset());class kt{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,Kt=!1,Qt=new he,Ms=()=>{const o=c.Promise.resolve(void 0);nt=()=>{o.then(Vr)}};var Vr=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(p){v(p)}var u=Ve;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Kt=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Mr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,u),c.removeEventListener("test",p,u)}catch{}return o}();function lt(o,u){if(pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,_=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(J){e:{try{K(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else p=="mouseover"?u=o.fromElement:p=="mouseout"&&(u=o.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:So[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&lt.aa.h.call(this)}}R(lt,pe);var So={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),Ns=0;function $e(o,u,p,_,k){this.listener=o,this.proxy=null,this.src=u,this.type=p,this.capture=!!_,this.ha=k,this.key=++Ns,this.da=this.fa=!1}function Xt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Me(o){this.src=o,this.g={},this.h=0}Me.prototype.add=function(o,u,p,_,k){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var F=st(o,u,_,k);return-1<F?(u=o[F],p||(u.fa=!1)):(u=new $e(u,this.src,C,!!_,k),u.fa=p,o.push(u)),u};function rt(o,u){var p=u.type;if(p in o.g){var _=o.g[p],k=Array.prototype.indexOf.call(_,u,void 0),C;(C=0<=k)&&Array.prototype.splice.call(_,k,1),C&&(Xt(u),o.g[p].length==0&&(delete o.g[p],o.h--))}}function st(o,u,p,_){for(var k=0;k<o.length;++k){var C=o[k];if(!C.da&&C.listener==u&&C.capture==!!p&&C.ha==_)return k}return-1}var ut="closure_lm_"+(1e6*Math.random()|0),En={};function Gn(o,u,p,_,k){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Gn(o,u[C],p,_,k);return null}return p=Nr(p),o&&o[Hn]?o.K(u,p,d(_)?!!_.capture:!1,k):Os(o,u,p,!1,_,k)}function Os(o,u,p,_,k,C){if(!u)throw Error("Invalid event type");var F=d(k)?!!k.capture:!!k,de=Qn(o);if(de||(o[ut]=de=new Me(o)),p=de.add(u,p,_,F,C),p.proxy)return p;if(_=Ls(),p.proxy=_,_.src=o,_.listener=p,o.addEventListener)Mr||(k=F),k===void 0&&(k=!1),o.addEventListener(u.toString(),_,k);else if(o.attachEvent)o.attachEvent(Kn(u.toString()),_);else if(o.addListener&&o.removeListener)o.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ls(){function o(p){return u.call(o.src,o.listener,p)}const u=bn;return o}function Pt(o,u,p,_,k){if(Array.isArray(u))for(var C=0;C<u.length;C++)Pt(o,u[C],p,_,k);else _=d(_)?!!_.capture:!!_,p=Nr(p),o&&o[Hn]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],p=st(C,p,_,k),-1<p&&(Xt(C[p]),Array.prototype.splice.call(C,p,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Qn(o))&&(u=o.g[u.toString()],o=-1,u&&(o=st(u,p,_,k)),(p=-1<o?u[o]:null)&&vt(p))}function vt(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Hn])rt(u.i,o);else{var p=o.type,_=o.proxy;u.removeEventListener?u.removeEventListener(p,_,o.capture):u.detachEvent?u.detachEvent(Kn(p),_):u.addListener&&u.removeListener&&u.removeListener(_),(p=Qn(u))?(rt(p,o),p.h==0&&(p.src=null,u[ut]=null)):Xt(o)}}}function Kn(o){return o in En?En[o]:En[o]="on"+o}function bn(o,u){if(o.da)o=!0;else{u=new lt(u,this);var p=o.listener,_=o.ha||o.src;o.fa&&vt(o),o=p.call(_,u)}return o}function Qn(o){return o=o[ut],o instanceof Me?o:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nr(o){return typeof o=="function"?o:(o[Z]||(o[Z]=function(u){return o.handleEvent(u)}),o[Z])}function ge(){ft.call(this),this.i=new Me(this),this.M=this,this.F=null}R(ge,ft),ge.prototype[Hn]=!0,ge.prototype.removeEventListener=function(o,u,p,_){Pt(this,o,u,p,_)};function Ne(o,u){var p,_=o.F;if(_)for(p=[];_;_=_.F)p.push(_);if(o=o.M,_=u.type||u,typeof u=="string")u=new pe(u,o);else if(u instanceof pe)u.target=u.target||o;else{var k=u;u=new pe(_,o),I(u,k)}if(k=!0,p)for(var C=p.length-1;0<=C;C--){var F=u.g=p[C];k=wn(F,_,!0,u)&&k}if(F=u.g=o,k=wn(F,_,!0,u)&&k,k=wn(F,_,!1,u)&&k,p)for(C=0;C<p.length;C++)F=u.g=p[C],k=wn(F,_,!1,u)&&k}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var p=o.g[u],_=0;_<p.length;_++)Xt(p[_]);delete o.g[u],o.h--}}this.F=null},ge.prototype.K=function(o,u,p,_){return this.i.add(String(o),u,!1,p,_)},ge.prototype.L=function(o,u,p,_){return this.i.add(String(o),u,!0,p,_)};function wn(o,u,p,_){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,C=0;C<u.length;++C){var F=u[C];if(F&&!F.da&&F.capture==p){var de=F.listener,Oe=F.ha||F.src;F.fa&&rt(o.i,F),k=de.call(Oe,_)!==!1&&k}}return k&&!_.defaultPrevented}function Yt(o,u,p){if(typeof o=="function")p&&(o=m(o,p));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Xn(o){o.g=Yt(()=>{o.g=null,o.i&&(o.i=!1,Xn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ro extends ft{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Xn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(o){ft.call(this),this.h=o,this.g={}}R(Ct,ft);var xs=[];function Yn(o){ee(o.g,function(u,p){this.g.hasOwnProperty(p)&&vt(u)},o),o.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),Yn(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tn=c.JSON.stringify,Jn=c.JSON.parse,Fs=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Et(){}Et.prototype.h=null;function Zn(o){return o.h||(o.h=o.i())}function Or(){}var In={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bt(){pe.call(this,"d")}R(bt,pe);function er(){pe.call(this,"c")}R(er,pe);var Je={},P=null;function U(){return P=P||new ge}Je.La="serverreachability";function q(o){pe.call(this,Je.La,o)}R(q,pe);function Dt(o){const u=U();Ne(u,new q(u))}Je.STAT_EVENT="statevent";function zc(o,u){pe.call(this,Je.STAT_EVENT,o),this.stat=u}R(zc,pe);function Ke(o){const u=U();Ne(u,new zc(u,o))}Je.Ma="timingevent";function qc(o,u){pe.call(this,Je.Ma,o),this.size=u}R(qc,pe);function Lr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function xr(){this.g=!0}xr.prototype.xa=function(){this.g=!1};function zp(o,u,p,_,k,C){o.info(function(){if(o.g)if(C)for(var F="",de=C.split("&"),Oe=0;Oe<de.length;Oe++){var oe=de[Oe].split("=");if(1<oe.length){var Be=oe[0];oe=oe[1];var ze=Be.split("_");F=2<=ze.length&&ze[1]=="type"?F+(Be+"="+oe+"&"):F+(Be+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+u+`
`+p+`
`+F})}function qp(o,u,p,_,k,C,F){o.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+u+`
`+p+`
`+C+" "+F})}function tr(o,u,p,_){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hp(o,p)+(_?" "+_:"")})}function Wp(o,u){o.info(function(){return"TIMEOUT: "+u})}xr.prototype.info=function(){};function Hp(o,u){if(!o.g)return u;if(!u)return null;try{var p=JSON.parse(u);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var _=p[o];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var C=k[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<k.length;F++)k[F]=""}}}}return Tn(p)}catch{return u}}var Us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ko;function js(){}R(js,Et),js.prototype.g=function(){return new XMLHttpRequest},js.prototype.i=function(){return{}},ko=new js;function Jt(o,u,p,_){this.j=o,this.i=u,this.l=p,this.R=_||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hc}function Hc(){this.i=null,this.g="",this.h=!1}var Gc={},Po={};function Co(o,u,p){o.L=1,o.v=qs(Vt(u)),o.m=p,o.P=!0,Kc(o,null)}function Kc(o,u){o.F=Date.now(),$s(o),o.A=Vt(o.v);var p=o.A,_=o.R;Array.isArray(_)||(_=[String(_)]),cl(p.i,"t",_),o.C=0,p=o.j.J,o.h=new Hc,o.g=Sl(o.j,p?u:null,!o.m),0<o.O&&(o.M=new Ro(m(o.Y,o,o.g),o.O)),u=o.U,p=o.g,_=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(xs[0]=k.toString()),k=xs);for(var C=0;C<k.length;C++){var F=Gn(p,k[C],_||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Dt(),zp(o.i,o.u,o.A,o.l,o.R,o.m)}Jt.prototype.ca=function(o){o=o.target;const u=this.M;u&&Mt(o)==3?u.j():this.Y(o)},Jt.prototype.Y=function(o){try{if(o==this.g)e:{const ze=Mt(this.g);var u=this.g.Ba();const sr=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||ml(this.g)))){this.J||ze!=4||u==7||(u==8||0>=sr?Dt(3):Dt(2)),Do(this);var p=this.g.Z();this.X=p;t:if(Qc(this)){var _=ml(this.g);o="";var k=_.length,C=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),Fr(this);var F="";break t}this.h.i=new c.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(_[u],{stream:!(C&&u==k-1)});_.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=p==200,qp(this.i,this.u,this.A,this.l,this.R,ze,p),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Oe=this.g;if((de=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(de)){var oe=de;break t}}oe=null}if(p=oe)tr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vo(this,p);else{this.o=!1,this.s=3,Ke(12),An(this),Fr(this);break e}}if(this.P){p=!0;let pt;for(;!this.J&&this.C<F.length;)if(pt=Gp(this,F),pt==Po){ze==4&&(this.s=4,Ke(14),p=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==Gc){this.s=4,Ke(15),tr(this.i,this.l,F,"[Invalid Chunk]"),p=!1;break}else tr(this.i,this.l,pt,null),Vo(this,pt);if(Qc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||F.length!=0||this.h.h||(this.s=1,Ke(16),p=!1),this.o=this.o&&p,!p)tr(this.i,this.l,F,"[Invalid Chunked Response]"),An(this),Fr(this);else if(0<F.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Fo(Be),Be.M=!0,Ke(11))}}else tr(this.i,this.l,F,null),Vo(this,F);ze==4&&An(this),this.o&&!this.J&&(ze==4?wl(this.j,this):(this.o=!1,$s(this)))}else um(this.g),p==400&&0<F.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),An(this),Fr(this)}}}catch{}finally{}};function Qc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Gp(o,u){var p=o.C,_=u.indexOf(`
`,p);return _==-1?Po:(p=Number(u.substring(p,_)),isNaN(p)?Gc:(_+=1,_+p>u.length?Po:(u=u.slice(_,_+p),o.C=_+p,u)))}Jt.prototype.cancel=function(){this.J=!0,An(this)};function $s(o){o.S=Date.now()+o.I,Xc(o,o.I)}function Xc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Lr(m(o.ba,o),u)}function Do(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Jt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Wp(this.i,this.A),this.L!=2&&(Dt(),Ke(17)),An(this),this.s=2,Fr(this)):Xc(this,this.S-o)};function Fr(o){o.j.G==0||o.J||wl(o.j,o)}function An(o){Do(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Yn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Vo(o,u){try{var p=o.j;if(p.G!=0&&(p.g==o||Mo(p.h,o))){if(!o.K&&Mo(p.h,o)&&p.G==3){try{var _=p.Da.g.parse(u)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)Xs(p),Ks(p);else break e;xo(p),Ke(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=Lr(m(p.Za,p),6e3));if(1>=Zc(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Rn(p,11)}else if((o.K||p.g==o)&&Xs(p),!x(u))for(k=p.Da.g.parse(u),u=0;u<k.length;u++){let oe=k[u];if(p.T=oe[0],oe=oe[1],p.G==2)if(oe[0]=="c"){p.K=oe[1],p.ia=oe[2];const Be=oe[3];Be!=null&&(p.la=Be,p.j.info("VER="+p.la));const ze=oe[4];ze!=null&&(p.Aa=ze,p.j.info("SVER="+p.Aa));const sr=oe[5];sr!=null&&typeof sr=="number"&&0<sr&&(_=1.5*sr,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const pt=o.g;if(pt){const Js=pt.g?pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Js){var C=_.h;C.g||Js.indexOf("spdy")==-1&&Js.indexOf("quic")==-1&&Js.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(No(C,C.h),C.h=null))}if(_.D){const Uo=pt.g?pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(_.ya=Uo,me(_.I,_.D,Uo))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var F=o;if(_.qa=Al(_,_.J?_.ia:null,_.W),F.K){el(_.h,F);var de=F,Oe=_.L;Oe&&(de.I=Oe),de.B&&(Do(de),$s(de)),_.g=F}else El(_);0<p.i.length&&Qs(p)}else oe[0]!="stop"&&oe[0]!="close"||Rn(p,7);else p.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Rn(p,7):Lo(p):oe[0]!="noop"&&p.l&&p.l.ta(oe),p.v=0)}}Dt(4)}catch{}}var Kp=class{constructor(o,u){this.g=o,this.map=u}};function Yc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Zc(o){return o.h?1:o.g?o.g.size:0}function Mo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function No(o,u){o.g?o.g.add(u):o.h=u}function el(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Yc.prototype.cancel=function(){if(this.i=tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function tl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const p of o.g.values())u=u.concat(p.D);return u}return D(o.i)}function Qp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],p=o.length,_=0;_<p;_++)u.push(o[_]);return u}u=[],p=0;for(_ in o)u[p++]=o[_];return u}function Xp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var p=0;p<o;p++)u.push(p);return u}u=[],p=0;for(const _ in o)u[p++]=_;return u}}}function nl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var p=Xp(o),_=Qp(o),k=_.length,C=0;C<k;C++)u.call(void 0,_[C],p&&p[C],o)}var rl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yp(o,u){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var _=o[p].indexOf("="),k=null;if(0<=_){var C=o[p].substring(0,_);k=o[p].substring(_+1)}else C=o[p];u(C,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Sn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Sn){this.h=o.h,Bs(this,o.j),this.o=o.o,this.g=o.g,zs(this,o.s),this.l=o.l;var u=o.i,p=new $r;p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),sl(this,p),this.m=o.m}else o&&(u=String(o).match(rl))?(this.h=!1,Bs(this,u[1]||"",!0),this.o=Ur(u[2]||""),this.g=Ur(u[3]||"",!0),zs(this,u[4]),this.l=Ur(u[5]||"",!0),sl(this,u[6]||"",!0),this.m=Ur(u[7]||"")):(this.h=!1,this.i=new $r(null,this.h))}Sn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(jr(u,il,!0),":");var p=this.g;return(p||u=="file")&&(o.push("//"),(u=this.o)&&o.push(jr(u,il,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(jr(p,p.charAt(0)=="/"?em:Zp,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",jr(p,nm)),o.join("")};function Vt(o){return new Sn(o)}function Bs(o,u,p){o.j=p?Ur(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function zs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function sl(o,u,p){u instanceof $r?(o.i=u,rm(o.i,o.h)):(p||(u=jr(u,tm)),o.i=new $r(u,o.h))}function me(o,u,p){o.i.set(u,p)}function qs(o){return me(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ur(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function jr(o,u,p){return typeof o=="string"?(o=encodeURI(o).replace(u,Jp),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Jp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var il=/[#\/\?@]/g,Zp=/[#\?:]/g,em=/[#\?]/g,tm=/[#\?@]/g,nm=/#/g;function $r(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Zt(o){o.g||(o.g=new Map,o.h=0,o.i&&Yp(o.i,function(u,p){o.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=$r.prototype,n.add=function(o,u){Zt(this),this.i=null,o=nr(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(u),this.h+=1,this};function ol(o,u){Zt(o),u=nr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function al(o,u){return Zt(o),u=nr(o,u),o.g.has(u)}n.forEach=function(o,u){Zt(this),this.g.forEach(function(p,_){p.forEach(function(k){o.call(u,k,_,this)},this)},this)},n.na=function(){Zt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),p=[];for(let _=0;_<u.length;_++){const k=o[_];for(let C=0;C<k.length;C++)p.push(u[_])}return p},n.V=function(o){Zt(this);let u=[];if(typeof o=="string")al(this,o)&&(u=u.concat(this.g.get(nr(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)u=u.concat(o[p])}return u},n.set=function(o,u){return Zt(this),this.i=null,o=nr(this,o),al(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function cl(o,u,p){ol(o,u),0<p.length&&(o.i=null,o.g.set(nr(o,u),D(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var p=0;p<u.length;p++){var _=u[p];const C=encodeURIComponent(String(_)),F=this.V(_);for(_=0;_<F.length;_++){var k=C;F[_]!==""&&(k+="="+encodeURIComponent(String(F[_]))),o.push(k)}}return this.i=o.join("&")};function nr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function rm(o,u){u&&!o.j&&(Zt(o),o.i=null,o.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(ol(this,_),cl(this,k,p))},o)),o.j=u}function sm(o,u){const p=new xr;if(c.Image){const _=new Image;_.onload=w(en,p,"TestLoadImage: loaded",!0,u,_),_.onerror=w(en,p,"TestLoadImage: error",!1,u,_),_.onabort=w(en,p,"TestLoadImage: abort",!1,u,_),_.ontimeout=w(en,p,"TestLoadImage: timeout",!1,u,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=o}else u(!1)}function im(o,u){const p=new xr,_=new AbortController,k=setTimeout(()=>{_.abort(),en(p,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:_.signal}).then(C=>{clearTimeout(k),C.ok?en(p,"TestPingServer: ok",!0,u):en(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),en(p,"TestPingServer: error",!1,u)})}function en(o,u,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function om(){this.g=new Fs}function am(o,u,p){const _=p||"";try{nl(o,function(k,C){let F=k;d(k)&&(F=Tn(k)),u.push(_+C+"="+encodeURIComponent(F))})}catch(k){throw u.push(_+"type="+encodeURIComponent("_badmap")),k}}function Ws(o){this.l=o.Ub||null,this.j=o.eb||!1}R(Ws,Et),Ws.prototype.g=function(){return new Hs(this.l,this.j)},Ws.prototype.i=function(o){return function(){return o}}({});function Hs(o,u){ge.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Hs,ge),n=Hs.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,zr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ll(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ll(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Br(this):zr(this),this.readyState==3&&ll(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Br(this))},n.Qa=function(o){this.g&&(this.response=o,Br(this))},n.ga=function(){this.g&&Br(this)};function Br(o){o.readyState=4,o.l=null,o.j=null,o.v=null,zr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=u.next();return o.join(`\r
`)};function zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ul(o){let u="";return ee(o,function(p,_){u+=_,u+=":",u+=p,u+=`\r
`}),u}function Oo(o,u,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=ul(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):me(o,u,p))}function be(o){ge.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(be,ge);var cm=/^https?$/i,lm=["POST","PUT"];n=be.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ko.g(),this.v=this.o?Zn(this.o):Zn(ko),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){hl(this,C);return}if(o=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const C of _.keys())p.set(C,_.get(C));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(C=>C.toLowerCase()=="content-type"),k=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(lm,u,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,F]of p)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){hl(this,C)}};function hl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,dl(o),Gs(o)}function dl(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),Gs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gs(this,!0)),be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fl(this):this.bb())},n.bb=function(){fl(this)};function fl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Mt(o)!=4||o.Z()!=2)){if(o.u&&Mt(o)==4)Yt(o.Ea,0,o);else if(Ne(o,"readystatechange"),Mt(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var _;if(_=F===0){var k=String(o.D).match(rl)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),_=!cm.test(k?k.toLowerCase():"")}p=_}if(p)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var C=2<Mt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",dl(o)}}finally{Gs(o)}}}}function Gs(o,u){if(o.g){pl(o);const p=o.g,_=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ne(o,"ready");try{p.onreadystatechange=_}catch{}}}function pl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Jn(u)}};function ml(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function um(o){const u={};o=(o.g&&2<=Mt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<o.length;_++){if(x(o[_]))continue;var p=A(o[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const C=u[k]||[];u[k]=C,C.push(p)}T(u,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qr(o,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||u}function _l(o){this.Aa=0,this.i=[],this.j=new xr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qr("baseRetryDelayMs",5e3,o),this.cb=qr("retryDelaySeedMs",1e4,o),this.Wa=qr("forwardChannelMaxRetries",2,o),this.wa=qr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Yc(o&&o.concurrentRequestLimit),this.Da=new om,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_l.prototype,n.la=8,n.G=1,n.connect=function(o,u,p,_){Ke(0),this.W=o,this.H=u||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Al(this,null,this.W),Qs(this)};function Lo(o){if(gl(o),o.G==3){var u=o.U++,p=Vt(o.I);if(me(p,"SID",o.K),me(p,"RID",u),me(p,"TYPE","terminate"),Wr(o,p),u=new Jt(o,o.j,u),u.L=2,u.v=qs(Vt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=u.v,p=!0),p||(u.g=Sl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$s(u)}Il(o)}function Ks(o){o.g&&(Fo(o),o.g.cancel(),o.g=null)}function gl(o){Ks(o),o.u&&(c.clearTimeout(o.u),o.u=null),Xs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Qs(o){if(!Jc(o.h)&&!o.s){o.s=!0;var u=o.Ga;nt||Ms(),Kt||(nt(),Kt=!0),Qt.add(u,o),o.B=0}}function hm(o,u){return Zc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Lr(m(o.Ga,o,u),Tl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new Jt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),I(C,this.S)):C=this.S),this.m!==null||this.O||(k.H=C,C=null),this.P)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=vl(this,k,u),p=Vt(this.I),me(p,"RID",o),me(p,"CVER",22),this.D&&me(p,"X-HTTP-Session-Id",this.D),Wr(this,p),C&&(this.O?u="headers="+encodeURIComponent(String(ul(C)))+"&"+u:this.m&&Oo(p,this.m,C)),No(this.h,k),this.Ua&&me(p,"TYPE","init"),this.P?(me(p,"$req",u),me(p,"SID","null"),k.T=!0,Co(k,p,null)):Co(k,p,u),this.G=2}}else this.G==3&&(o?yl(this,o):this.i.length==0||Jc(this.h)||yl(this))};function yl(o,u){var p;u?p=u.l:p=o.U++;const _=Vt(o.I);me(_,"SID",o.K),me(_,"RID",p),me(_,"AID",o.T),Wr(o,_),o.m&&o.o&&Oo(_,o.m,o.o),p=new Jt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),u&&(o.i=u.D.concat(o.i)),u=vl(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),No(o.h,p),Co(p,_,u)}function Wr(o,u){o.H&&ee(o.H,function(p,_){me(u,_,p)}),o.l&&nl({},function(p,_){me(u,_,p)})}function vl(o,u,p){p=Math.min(o.i.length,p);var _=o.l?m(o.l.Na,o.l,o):null;e:{var k=o.i;let C=-1;for(;;){const F=["count="+p];C==-1?0<p?(C=k[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let de=!0;for(let Oe=0;Oe<p;Oe++){let oe=k[Oe].g;const Be=k[Oe].map;if(oe-=C,0>oe)C=Math.max(0,k[Oe].g-100),de=!1;else try{am(Be,F,"req"+oe+"_")}catch{_&&_(Be)}}if(de){_=F.join("&");break e}}}return o=o.i.splice(0,p),u.D=o,_}function El(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;nt||Ms(),Kt||(nt(),Kt=!0),Qt.add(u,o),o.v=0}}function xo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Lr(m(o.Fa,o),Tl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,bl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Lr(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Ks(this),bl(this))};function Fo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function bl(o){o.g=new Jt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Vt(o.qa);me(u,"RID","rpc"),me(u,"SID",o.K),me(u,"AID",o.T),me(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&me(u,"TO",o.ja),me(u,"TYPE","xmlhttp"),Wr(o,u),o.m&&o.o&&Oo(u,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=qs(Vt(u)),p.m=null,p.P=!0,Kc(p,o)}n.Za=function(){this.C!=null&&(this.C=null,Ks(this),xo(this),Ke(19))};function Xs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function wl(o,u){var p=null;if(o.g==u){Xs(o),Fo(o),o.g=null;var _=2}else if(Mo(o.h,u))p=u.D,el(o.h,u),_=1;else return;if(o.G!=0){if(u.o)if(_==1){p=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;_=U(),Ne(_,new qc(_,p)),Qs(o)}else El(o);else if(k=u.s,k==3||k==0&&0<u.X||!(_==1&&hm(o,u)||_==2&&xo(o)))switch(p&&0<p.length&&(u=o.h,u.i=u.i.concat(p)),k){case 1:Rn(o,5);break;case 4:Rn(o,10);break;case 3:Rn(o,6);break;default:Rn(o,2)}}}function Tl(o,u){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*u}function Rn(o,u){if(o.j.info("Error code "+u),u==2){var p=m(o.fb,o),_=o.Xa;const k=!_;_=new Sn(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bs(_,"https"),qs(_),k?sm(_.toString(),p):im(_.toString(),p)}else Ke(2);o.G=0,o.l&&o.l.sa(u),Il(o),gl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Il(o){if(o.G=0,o.ka=[],o.l){const u=tl(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ka,u),S(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Al(o,u,p){var _=p instanceof Sn?Vt(p):new Sn(p);if(_.g!="")u&&(_.g=u+"."+_.g),zs(_,_.s);else{var k=c.location;_=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var C=new Sn(null);_&&Bs(C,_),u&&(C.g=u),k&&zs(C,k),p&&(C.l=p),_=C}return p=o.D,u=o.ya,p&&u&&me(_,p,u),me(_,"VER",o.la),Wr(o,_),_}function Sl(o,u,p){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new be(new Ws({eb:p})):new be(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rl(){}n=Rl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ys(){}Ys.prototype.g=function(o,u){return new it(o,u)};function it(o,u){ge.call(this),this.g=new _l(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!x(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!x(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new rr(this)}R(it,ge),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){Lo(this.g)},it.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=Tn(o),o=p);u.i.push(new Kp(u.Ya++,o)),u.G==3&&Qs(u)},it.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,it.aa.N.call(this)};function kl(o){bt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const p in u){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(kl,bt);function Pl(){er.call(this),this.status=1}R(Pl,er);function rr(o){this.g=o}R(rr,Rl),rr.prototype.ua=function(){Ne(this.g,"a")},rr.prototype.ta=function(o){Ne(this.g,new kl(o))},rr.prototype.sa=function(o){Ne(this.g,new Pl)},rr.prototype.ra=function(){Ne(this.g,"b")},Ys.prototype.createWebChannel=Ys.prototype.g,it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,_d=function(){return new Ys},md=function(){return U()},pd=Je,ha={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,di=Us,Wc.COMPLETE="complete",fd=Wc,Or.EventType=In,In.OPEN="a",In.CLOSE="b",In.ERROR="c",In.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Jr=Or,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,dd=be}).apply(typeof ei<"u"?ei:typeof self<"u"?self:typeof window<"u"?window:{});const ru="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new $a("@firebase/firestore");function Kr(){return Ln.logLevel}function B(n,...e){if(Ln.logLevel<=se.DEBUG){const t=e.map(qa);Ln.debug(`Firestore (${Ar}): ${n}`,...t)}}function $t(n,...e){if(Ln.logLevel<=se.ERROR){const t=e.map(qa);Ln.error(`Firestore (${Ar}): ${n}`,...t)}}function mr(n,...e){if(Ln.logLevel<=se.WARN){const t=e.map(qa);Ln.warn(`Firestore (${Ar}): ${n}`,...t)}}function qa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const e=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+n;throw $t(e),new Error(e)}function ue(n,e){n||G()}function X(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Eg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}}class bg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wg{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ut,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ut)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new gd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new We(e)}}class Tg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ig{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Tg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ag{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ue(this.o===void 0);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string"),this.R=t.token,new Ag(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Rg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ae(n,e){return n<e?-1:n>e?1:0}function _r(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ke(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ke(0,0))}static max(){return new Q(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return us.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof us?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class _e extends us{construct(e,t,r){return new _e(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new _e(t)}static emptyPath(){return new _e([])}}const kg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends us{construct(e,t,r){return new Fe(e,t,r)}static isValidIdentifier(e){return kg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(_e.fromString(e))}static fromName(e){return new z(_e.fromString(e).popFirst(5))}static empty(){return new z(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new _e(e.slice()))}}function Pg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new ke(t+1,0):new ke(t,r));return new mn(s,z.empty(),e)}function Cg(n){return new mn(n.readTime,n.key,-1)}class mn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mn(Q.min(),z.empty(),-1)}static max(){return new mn(Q.max(),z.empty(),-1)}}function Dg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Vg)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Ng(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bs(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wa.oe=-1;function eo(n){return n==null}function Ci(n){return n===0&&1/n==-1/0}function Og(n){return typeof n=="number"&&Number.isInteger(n)&&!Ci(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ti(this.root,e,this.comparator,!0)}}class ti{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??xe.RED,this.left=s??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,s,i){return this}insert(e,t,r){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iu(this.data.getIterator())}getIteratorFrom(e){return new iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ue(this.comparator);return t.data=e,t}}class iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new at([])}unionWith(e){let t=new Ue(Fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new at(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _r(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ed("Invalid base64 string: "+i):i}}(e);return new je(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const Lg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(n){if(ue(!!n),typeof n=="string"){let e=0;const t=Lg.exec(n);if(ue(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xn(n){return typeof n=="string"?je.fromBase64String(n):je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ga(n){const e=n.mapValue.fields.__previous_value__;return Ha(e)?Ga(e):e}function hs(n){const e=_n(n.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t,r,s,i,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class ds{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ds("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ds&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={mapValue:{}};function Fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ha(n)?4:Ug(n)?9007199254740991:Fg(n)?10:11:G()}function Rt(n,e){if(n===e)return!0;const t=Fn(n);if(t!==Fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hs(n).isEqual(hs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=_n(s.timestampValue),c=_n(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return xn(s.bytesValue).isEqual(xn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return we(s.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return we(s.integerValue)===we(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=we(s.doubleValue),c=we(i.doubleValue);return a===c?Ci(a)===Ci(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return _r(n.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(su(a)!==su(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Rt(a[l],c[l])))return!1;return!0}(n,e);default:return G()}}function fs(n,e){return(n.values||[]).find(t=>Rt(t,e))!==void 0}function gr(n,e){if(n===e)return 0;const t=Fn(n),r=Fn(e);if(t!==r)return ae(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ae(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=we(i.integerValue||i.doubleValue),l=we(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return ou(n.timestampValue,e.timestampValue);case 4:return ou(hs(n),hs(e));case 5:return ae(n.stringValue,e.stringValue);case 6:return function(i,a){const c=xn(i),l=xn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=ae(c[d],l[d]);if(f!==0)return f}return ae(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ae(we(i.latitude),we(a.latitude));return c!==0?c:ae(we(i.longitude),we(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return au(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,d,f;const g=i.fields||{},m=a.fields||{},w=(c=g.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,D=ae(((d=w?.values)===null||d===void 0?void 0:d.length)||0,((f=R?.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:au(w,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ni.mapValue&&a===ni.mapValue)return 0;if(i===ni.mapValue)return 1;if(a===ni.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const m=ae(l[g],f[g]);if(m!==0)return m;const w=gr(c[l[g]],d[f[g]]);if(w!==0)return w}return ae(l.length,f.length)}(n.mapValue,e.mapValue);default:throw G()}}function ou(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ae(n,e);const t=_n(n),r=_n(e),s=ae(t.seconds,r.seconds);return s!==0?s:ae(t.nanos,r.nanos)}function au(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=gr(t[s],r[s]);if(i)return i}return ae(t.length,r.length)}function yr(n){return da(n)}function da(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=_n(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=da(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${da(t.fields[a])}`;return s+"}"}(n.mapValue):G()}function cu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function fa(n){return!!n&&"integerValue"in n}function Ka(n){return!!n&&"arrayValue"in n}function lu(n){return!!n&&"nullValue"in n}function uu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fi(n){return!!n&&"mapValue"in n}function Fg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function rs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=rs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ug(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(t)}setAll(e){let t=Fe.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=rs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());fi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];fi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ze(rs(this.value))}}function bd(n){const e=[];return Bn(n.fields,(t,r)=>{const s=new Fe([t]);if(fi(r)){const i=bd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new at(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new He(e,0,Q.min(),Q.min(),Q.min(),Ze.empty(),0)}static newFoundDocument(e,t,r,s){return new He(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new He(e,2,t,Q.min(),Q.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,Q.min(),Q.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){this.position=e,this.inclusive=t}}function hu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=gr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function du(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t="asc"){this.field=e,this.dir=t}}function jg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{}class Re extends wd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Bg(e,t,r):t==="array-contains"?new Wg(e,r):t==="in"?new Hg(e,r):t==="not-in"?new Gg(e,r):t==="array-contains-any"?new Kg(e,r):new Re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new zg(e,r):new qg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(gr(t,this.value)):t!==null&&Fn(this.value)===Fn(t)&&this.matchesComparison(gr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _t extends wd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new _t(e,t)}matches(e){return Td(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Td(n){return n.op==="and"}function Id(n){return $g(n)&&Td(n)}function $g(n){for(const e of n.filters)if(e instanceof _t)return!1;return!0}function pa(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+yr(n.value);if(Id(n))return n.filters.map(e=>pa(e)).join(",");{const e=n.filters.map(t=>pa(t)).join(",");return`${n.op}(${e})`}}function Ad(n,e){return n instanceof Re?function(r,s){return s instanceof Re&&r.op===s.op&&r.field.isEqual(s.field)&&Rt(r.value,s.value)}(n,e):n instanceof _t?function(r,s){return s instanceof _t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ad(a,s.filters[c]),!0):!1}(n,e):void G()}function Sd(n){return n instanceof Re?function(t){return`${t.field.canonicalString()} ${t.op} ${yr(t.value)}`}(n):n instanceof _t?function(t){return t.op.toString()+" {"+t.getFilters().map(Sd).join(" ,")+"}"}(n):"Filter"}class Bg extends Re{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class zg extends Re{constructor(e,t){super(e,"in",t),this.keys=Rd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class qg extends Re{constructor(e,t){super(e,"not-in",t),this.keys=Rd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class Wg extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ka(t)&&fs(t.arrayValue,this.value)}}class Hg extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fs(this.value.arrayValue,t)}}class Gg extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fs(this.value.arrayValue,t)}}class Kg extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ka(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function fu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Qg(n,e,t,r,s,i,a)}function Qa(n){const e=X(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>pa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),eo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>yr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>yr(r)).join(",")),e.ue=t}return e.ue}function Xa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!jg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!du(n.startAt,e.startAt)&&du(n.endAt,e.endAt)}function ma(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Xg(n,e,t,r,s,i,a,c){return new ws(n,e,t,r,s,i,a,c)}function to(n){return new ws(n)}function pu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kd(n){return n.collectionGroup!==null}function ss(n){const e=X(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ue(Fe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Vi(i,r))}),t.has(Fe.keyField().canonicalString())||e.ce.push(new Vi(Fe.keyField(),r))}return e.ce}function Tt(n){const e=X(n);return e.le||(e.le=Yg(e,ss(n))),e.le}function Yg(n,e){if(n.limitType==="F")return fu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vi(s.field,i)});const t=n.endAt?new Di(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Di(n.startAt.position,n.startAt.inclusive):null;return fu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _a(n,e){const t=n.filters.concat([e]);return new ws(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Mi(n,e,t){return new ws(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function no(n,e){return Xa(Tt(n),Tt(e))&&n.limitType===e.limitType}function Pd(n){return`${Qa(Tt(n))}|lt:${n.limitType}`}function or(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Sd(s)).join(", ")}]`),eo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>yr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>yr(s)).join(",")),`Target(${r})`}(Tt(n))}; limitType=${n.limitType})`}function ro(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=hu(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,ss(r),s)||r.endAt&&!function(a,c,l){const d=hu(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,ss(r),s))}(n,e)}function Jg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cd(n){return(e,t)=>{let r=!1;for(const s of ss(n)){const i=Zg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Zg(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?gr(l,d):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Ee(z.comparator);function Bt(){return ey}const Dd=new Ee(z.comparator);function Zr(...n){let e=Dd;for(const t of n)e=e.insert(t.key,t);return e}function Vd(n){let e=Dd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Cn(){return is()}function Md(){return is()}function is(){return new Sr(n=>n.toString(),(n,e)=>n.isEqual(e))}const ty=new Ee(z.comparator),ny=new Ue(z.comparator);function re(...n){let e=ny;for(const t of n)e=e.add(t);return e}const ry=new Ue(ae);function sy(){return ry}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ci(e)?"-0":e}}function Nd(n){return{integerValue:""+n}}function iy(n,e){return Og(e)?Nd(e):Ya(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this._=void 0}}function oy(n,e,t){return n instanceof Ni?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ha(i)&&(i=Ga(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof ps?Ld(n,e):n instanceof ms?xd(n,e):function(s,i){const a=Od(s,i),c=mu(a)+mu(s.Pe);return fa(a)&&fa(s.Pe)?Nd(c):Ya(s.serializer,c)}(n,e)}function ay(n,e,t){return n instanceof ps?Ld(n,e):n instanceof ms?xd(n,e):t}function Od(n,e){return n instanceof Oi?function(r){return fa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ni extends so{}class ps extends so{constructor(e){super(),this.elements=e}}function Ld(n,e){const t=Fd(e);for(const r of n.elements)t.some(s=>Rt(s,r))||t.push(r);return{arrayValue:{values:t}}}class ms extends so{constructor(e){super(),this.elements=e}}function xd(n,e){let t=Fd(e);for(const r of n.elements)t=t.filter(s=>!Rt(s,r));return{arrayValue:{values:t}}}class Oi extends so{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function mu(n){return we(n.integerValue||n.doubleValue)}function Fd(n){return Ka(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ps&&s instanceof ps||r instanceof ms&&s instanceof ms?_r(r.elements,s.elements,Rt):r instanceof Oi&&s instanceof Oi?Rt(r.Pe,s.Pe):r instanceof Ni&&s instanceof Ni}(n.transform,e.transform)}class ly{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class io{}function Ud(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new oo(n.key,et.none()):new Ts(n.key,n.data,et.none());{const t=n.data,r=Ze.empty();let s=new Ue(Fe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new yn(n.key,r,new at(s.toArray()),et.none())}}function uy(n,e,t){n instanceof Ts?function(s,i,a){const c=s.value.clone(),l=gu(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof yn?function(s,i,a){if(!pi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=gu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(jd(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function os(n,e,t,r){return n instanceof Ts?function(i,a,c,l){if(!pi(i.precondition,a))return c;const d=i.value.clone(),f=yu(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof yn?function(i,a,c,l){if(!pi(i.precondition,a))return c;const d=yu(i.fieldTransforms,l,a),f=a.data;return f.setAll(jd(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return pi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function hy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Od(r.transform,s||null);i!=null&&(t===null&&(t=Ze.empty()),t.set(r.field,i))}return t||null}function _u(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_r(r,s,(i,a)=>cy(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ts extends io{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yn extends io{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function gu(n,e,t){const r=new Map;ue(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ay(a,c,t[s]))}return r}function yu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,oy(i,a,e))}return r}class oo extends io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dy extends io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=os(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=os(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Md();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Ud(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),re())}isEqual(e){return this.batchId===e.batchId&&_r(this.mutations,e.mutations,(t,r)=>_u(t,r))&&_r(this.baseMutations,e.baseMutations,(t,r)=>_u(t,r))}}class Ja{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ue(e.mutations.length===r.length);let s=function(){return ty}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ja(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ie;function _y(n){switch(n){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function $d(n){if(n===void 0)return $t("GRPC error has no .code"),V.UNKNOWN;switch(n){case Ae.OK:return V.OK;case Ae.CANCELLED:return V.CANCELLED;case Ae.UNKNOWN:return V.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return V.INTERNAL;case Ae.UNAVAILABLE:return V.UNAVAILABLE;case Ae.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ae.NOT_FOUND:return V.NOT_FOUND;case Ae.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ae.ABORTED:return V.ABORTED;case Ae.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ae.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(ie=Ae||(Ae={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new Dn([4294967295,4294967295],0);function vu(n){const e=gy().encode(n),t=new hd;return t.update(e),new Uint8Array(t.digest())}function Eu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dn([t,r],0),new Dn([s,i],0)]}class Za{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new es(`Invalid padding: ${t}`);if(r<0)throw new es(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new es(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new es(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Dn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Dn.fromNumber(r)));return s.compare(yy)===1&&(s=new Dn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=vu(e),[r,s]=Eu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Za(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=vu(e),[r,s]=Eu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Is.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ao(Q.min(),s,new Ee(ae),Bt(),re())}}class Is{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Is(r,t,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Bd{constructor(e,t){this.targetId=e,this.me=t}}class zd{constructor(e,t,r=je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bu{constructor(){this.fe=0,this.ge=Tu(),this.pe=je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),t=re(),r=re();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Is(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Tu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vy{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bt(),this.qe=wu(),this.Qe=new Ee(ae)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(ma(i))if(r===0){const a=new z(i.path);this.Ue(t,a,He.newNoDocument(a,Q.min()))}else ue(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=xn(r).toUint8Array()}catch(l){if(l instanceof Ed)return mr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Za(a,s,i)}catch(l){return mr(l instanceof es?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&ma(c.target)){const l=new z(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,He.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=re();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ao(e,t,this.Qe,this.ke,r);return this.ke=Bt(),this.qe=wu(),this.Qe=new Ee(ae),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ue(ae),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function wu(){return new Ee(z.comparator)}function Tu(){return new Ee(z.comparator)}const Ey={asc:"ASCENDING",desc:"DESCENDING"},by={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wy={and:"AND",or:"OR"};class Ty{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ga(n,e){return n.useProto3Json||eo(e)?e:{value:e}}function Li(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Iy(n,e){return Li(n,e.toTimestamp())}function It(n){return ue(!!n),Q.fromTimestamp(function(t){const r=_n(t);return new ke(r.seconds,r.nanos)}(n))}function ec(n,e){return ya(n,e).canonicalString()}function ya(n,e){const t=function(s){return new _e(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Wd(n){const e=_e.fromString(n);return ue(Xd(e)),e}function va(n,e){return ec(n.databaseId,e.path)}function Go(n,e){const t=Wd(e);if(t.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(Gd(t))}function Hd(n,e){return ec(n.databaseId,e)}function Ay(n){const e=Wd(n);return e.length===4?_e.emptyPath():Gd(e)}function Ea(n){return new _e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gd(n){return ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Iu(n,e,t){return{name:va(n,e),fields:t.value.mapValue.fields}}function Sy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(ue(f===void 0||typeof f=="string"),je.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),je.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?V.UNKNOWN:$d(d.code);return new j(f,d.message||"")}(a);t=new zd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Go(n,r.document.name),i=It(r.document.updateTime),a=r.document.createTime?It(r.document.createTime):Q.min(),c=new Ze({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new mi(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Go(n,r.document),i=r.readTime?It(r.readTime):Q.min(),a=He.newNoDocument(s,i),c=r.removedTargetIds||[];t=new mi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Go(n,r.document),i=r.removedTargetIds||[];t=new mi([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new my(s,i),c=r.targetId;t=new Bd(c,a)}}return t}function Ry(n,e){let t;if(e instanceof Ts)t={update:Iu(n,e.key,e.value)};else if(e instanceof oo)t={delete:va(n,e.key)};else if(e instanceof yn)t={update:Iu(n,e.key,e.data),updateMask:Ly(e.fieldMask)};else{if(!(e instanceof dy))return G();t={verify:va(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Ni)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ps)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ms)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Oi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Iy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(n,e.precondition)),t}function ky(n,e){return n&&n.length>0?(ue(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?It(s.updateTime):It(i);return a.isEqual(Q.min())&&(a=It(i)),new ly(a,s.transformResults||[])}(t,e))):[]}function Py(n,e){return{documents:[Hd(n,e.path)]}}function Cy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Hd(n,s);const i=function(d){if(d.length!==0)return Qd(_t.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(m){return{field:ar(m.field),direction:My(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ga(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Dy(n){let e=Ay(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ue(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const m=Kd(g);return m instanceof _t&&Id(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(m=>function(R){return new Vi(cr(R.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(g){let m;return m=typeof g=="object"?g.value:g,eo(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(g){const m=!!g.before,w=g.values||[];return new Di(w,m)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const m=!g.before,w=g.values||[];return new Di(w,m)}(t.endAt)),Xg(e,s,a,i,c,"F",l,d)}function Vy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=cr(t.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cr(t.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cr(t.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=cr(t.unaryFilter.field);return Re.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return Re.create(cr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return _t.create(t.compositeFilter.filters.map(r=>Kd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function My(n){return Ey[n]}function Ny(n){return by[n]}function Oy(n){return wy[n]}function ar(n){return{fieldPath:n.canonicalString()}}function cr(n){return Fe.fromServerFormat(n.fieldPath)}function Qd(n){return n instanceof Re?function(t){if(t.op==="=="){if(uu(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NAN"}};if(lu(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(uu(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NAN"}};if(lu(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(t.field),op:Ny(t.op),value:t.value}}}(n):n instanceof _t?function(t){const r=t.getFilters().map(s=>Qd(s));return r.length===1?r[0]:{compositeFilter:{op:Oy(t.op),filters:r}}}(n):G()}function Ly(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,r,s,i=Q.min(),a=Q.min(),c=je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.ct=e}}function Fy(n){const e=Dy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.un=new jy}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(mn.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class jy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ue(_e.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ue(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vr(0)}static kn(){return new vr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.changes=new Sr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&os(r.mutation,s,at.empty(),ke.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,t,r=re()){const s=Cn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Zr();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Cn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,re()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Bt();const a=is(),c=function(){return is()}();return t.forEach((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof yn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),os(f.mutation,d,f.mutation.getFieldMask(),ke.now())):a.set(d.key,at.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return c.set(d,new By(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=is();let s=new Ee((a,c)=>a-c),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||at.empty();f=c.applyToLocalView(d,f),r.set(l,f);const g=(s.get(c.batchId)||re()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,g=Md();f.forEach(m=>{if(!i.has(m)){const w=Ud(t.get(m),r.get(m));w!==null&&g.set(m,w),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(Cn());let c=-1,l=i;return a.next(d=>O.forEach(d,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,re())).next(f=>({batchId:c,changes:Vd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let s=Zr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Zr();return this.indexManager.getCollectionParents(e,i).next(c=>O.forEach(c,l=>{const d=function(g,m){return new ws(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((g,m)=>{a=a.insert(g,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,He.newInvalidDocument(f)))});let c=Zr();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&os(f.mutation,d,at.empty(),ke.now()),ro(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:It(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Fy(s.bundledQuery),readTime:It(s.readTime)}}(t)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.overlays=new Ee(z.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Cn();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=Cn(),i=t.length+1,a=new z(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ee((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Cn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Cn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return O.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new py(t,r));let i=this.Ir.get(t);i===void 0&&(i=re(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.Tr=new Ue(Ce.Er),this.dr=new Ue(Ce.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ce(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new z(new _e([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new z(new _e([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=re();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return z.comparator(e.key,t.key)||ae(e.wr,t.wr)}static Ar(e,t){return ae(e.wr,t.wr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ue(Ce.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fy(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new Ce(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(ae);return t.forEach(s=>{const i=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new z(i),0);let c=new Ue(ae);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.wr)),!0)},a),O.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ue(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ce(t,0),s=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.Mr=e,this.docs=function(){return new Ee(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let r=Bt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():He.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Bt();const a=t.path,c=new z(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Dg(Cg(f),r)<=0||(s.has(f.key)||ro(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){G()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Qy(this)}getSize(e){return O.resolve(this.size)}}class Qy extends $y{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.persistence=e,this.Nr=new Sr(t=>Qa(t),Xa),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tc,this.targetCount=0,this.kr=vr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new vr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Wa(0),this.Kr=!1,this.Kr=!0,this.$r=new Hy,this.referenceDelegate=e(this),this.Ur=new Xy(this),this.indexManager=new Uy,this.remoteDocumentCache=function(s){return new Ky(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new xy(t),this.Gr=new qy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Wy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Gy(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new Jy(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Jy extends Mg{constructor(e){super(),this.currentSequenceNumber=e}}class nc{constructor(e){this.persistence=e,this.Jr=new tc,this.Yr=null}static Zr(e){return new nc(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const s=z.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=re(),s=re();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return t_()?8:Ng(Ge())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Zy;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Kr()<=se.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Kr()<=se.DEBUG&&B("QueryEngine","Query:",or(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Kr()<=se.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tt(t))):O.resolve())}Yi(e,t){if(pu(t))return O.resolve(null);let r=Tt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Mi(t,null,"F"),r=Tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=re(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,c);return this.ns(t,d,a,l.readTime)?this.Yi(e,Mi(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,s){return pu(t)||s.isEqual(Q.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?O.resolve(null):(Kr()<=se.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),or(t)),this.rs(e,a,t,Pg(s,-1)).next(c=>c))})}ts(e,t){let r=new Ue(Cd(e));return t.forEach((s,i)=>{ro(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Kr()<=se.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",or(t)),this.Ji.getDocumentsMatchingQuery(e,t,mn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Ee(ae),this._s=new Sr(i=>Qa(i),Xa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function nv(n,e,t,r){return new tv(n,e,t,r)}async function Yd(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=re();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function rv(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const g=d.batch,m=g.keys();let w=O.resolve();return m.forEach(R=>{w=w.next(()=>f.getEntry(l,R)).next(D=>{const S=d.docVersions.get(R);ue(S!==null),D.version.compareTo(S)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=re();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Jd(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function sv(n,e){const t=X(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,g)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?w=w.withResumeToken(je.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(g,w),function(D,S,M){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,w,f)&&c.push(t.Ur.updateTargetData(i,w))});let l=Bt(),d=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(iv(i,a,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(Q.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return O.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.os=s,i))}function iv(n,e,t){let r=re(),s=re();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Bt();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function ov(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function av(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new cn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ba(n,e,t){const r=X(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!bs(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Au(n,e,t){const r=X(n);let s=Q.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const g=X(l),m=g._s.get(f);return m!==void 0?O.resolve(g.os.get(m)):g.Ur.getTargetData(d,f)}(r,a,Tt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:Q.min(),t?i:re())).next(c=>(cv(r,Jg(e),c),{documents:c,Ts:i})))}function cv(n,e,t){let r=n.us.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Su{constructor(){this.activeTargetIds=sy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lv{constructor(){this.so=new Su,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Su,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri=null;function Ko(){return ri===null?ri=function(){return 268435456+Math.round(2147483648*Math.random())}():ri++,"0x"+ri.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class fv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=Ko(),l=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,l,d,s).then(f=>(B("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw mr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ar}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=hv[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Ko();return new Promise((a,c)=>{const l=new dd;l.setWithCredentials(!0),l.listenOnce(fd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case di.NO_ERROR:const f=l.getResponseJson();B(qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case di.TIMEOUT:B(qe,`RPC '${e}' ${i} timed out`),c(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case di.HTTP_ERROR:const g=l.getStatus();if(B(qe,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m?.error;if(w&&w.status&&w.message){const R=function(S){const M=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(M)>=0?M:V.UNKNOWN}(w.status);c(new j(R,w.message))}else c(new j(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B(qe,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);B(qe,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=Ko(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=_d(),c=md(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");B(qe,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let m=!1,w=!1;const R=new dv({Io:S=>{w?B(qe,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(B(qe,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),B(qe,`RPC '${e}' stream ${s} sending:`,S),g.send(S))},To:()=>g.close()}),D=(S,M,x)=>{S.listen(M,$=>{try{x($)}catch(K){setTimeout(()=>{throw K},0)}})};return D(g,Jr.EventType.OPEN,()=>{w||(B(qe,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),D(g,Jr.EventType.CLOSE,()=>{w||(w=!0,B(qe,`RPC '${e}' stream ${s} transport closed`),R.So())}),D(g,Jr.EventType.ERROR,S=>{w||(w=!0,mr(qe,`RPC '${e}' stream ${s} transport errored:`,S),R.So(new j(V.UNAVAILABLE,"The operation could not be completed")))}),D(g,Jr.EventType.MESSAGE,S=>{var M;if(!w){const x=S.data[0];ue(!!x);const $=x,K=$.error||((M=$[0])===null||M===void 0?void 0:M.error);if(K){B(qe,`RPC '${e}' stream ${s} received error:`,K);const J=K.status;let ee=function(b){const I=Ae[b];if(I!==void 0)return $d(I)}(J),T=K.message;ee===void 0&&(ee=V.INTERNAL,T="Unknown error status: "+J+" with message "+K.message),w=!0,R.So(new j(ee,T)),g.close()}else B(qe,`RPC '${e}' stream ${s} received:`,x),R.bo(x)}}),D(c,pd.STAT_EVENT,S=>{S.stat===ha.PROXY?B(qe,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===ha.NOPROXY&&B(qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Qo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n){return new Ty(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Zd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?($t(t.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new j(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pv extends ef{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Sy(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?It(a.readTime):Q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ea(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=ma(l)?{documents:Py(i,l)}:{query:Cy(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=qd(i,a.resumeToken);const d=ga(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(Q.min())>0){c.readTime=Li(i,a.snapshotVersion.toTimestamp());const d=ga(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Vy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ea(this.serializer),t.removeTarget=e,this.a_(t)}}class mv extends ef{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ky(e.writeResults,e.commitTime),r=It(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ea(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ry(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ya(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(V.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,ya(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($t(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{zn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=X(l);d.L_.add(4),await As(d),d.q_.set("Unknown"),d.L_.delete(4),await lo(d)}(this))})}),this.q_=new gv(r,s)}}async function lo(n){if(zn(n))for(const e of n.B_)await e(!0)}async function As(n){for(const e of n.B_)await e(!1)}function tf(n,e){const t=X(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ac(t)?oc(t):Rr(t).r_()&&ic(t,e))}function sc(n,e){const t=X(n),r=Rr(t);t.N_.delete(e),r.r_()&&nf(t,e),t.N_.size===0&&(r.r_()?r.o_():zn(t)&&t.q_.set("Unknown"))}function ic(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rr(n).A_(e)}function nf(n,e){n.Q_.xe(e),Rr(n).R_(e)}function oc(n){n.Q_=new vy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Rr(n).start(),n.q_.v_()}function ac(n){return zn(n)&&!Rr(n).n_()&&n.N_.size>0}function zn(n){return X(n).L_.size===0}function rf(n){n.Q_=void 0}async function vv(n){n.q_.set("Online")}async function Ev(n){n.N_.forEach((e,t)=>{ic(n,e)})}async function bv(n,e){rf(n),ac(n)?(n.q_.M_(e),oc(n)):n.q_.set("Unknown")}async function wv(n,e,t){if(n.q_.set("Online"),e instanceof zd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xi(n,r)}else if(e instanceof mi?n.Q_.Ke(e):e instanceof Bd?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Q.min()))try{const r=await Jd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(je.EMPTY_BYTE_STRING,f.snapshotVersion)),nf(i,l);const g=new cn(f.target,l,d,f.sequenceNumber);ic(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await xi(n,r)}}async function xi(n,e,t){if(!bs(e))throw e;n.L_.add(1),await As(n),n.q_.set("Offline"),t||(t=()=>Jd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await lo(n)})}function sf(n,e){return e().catch(t=>xi(n,t,e))}async function uo(n){const e=X(n),t=gn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Tv(e);)try{const s=await ov(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Iv(e,s)}catch(s){await xi(e,s)}of(e)&&af(e)}function Tv(n){return zn(n)&&n.O_.length<10}function Iv(n,e){n.O_.push(e);const t=gn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function of(n){return zn(n)&&!gn(n).n_()&&n.O_.length>0}function af(n){gn(n).start()}async function Av(n){gn(n).p_()}async function Sv(n){const e=gn(n);for(const t of n.O_)e.m_(t.mutations)}async function Rv(n,e,t){const r=n.O_.shift(),s=Ja.from(r,e,t);await sf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await uo(n)}async function kv(n,e){e&&gn(n).V_&&await async function(r,s){if(function(a){return _y(a)&&a!==V.ABORTED}(s.code)){const i=r.O_.shift();gn(r).s_(),await sf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uo(r)}}(n,e),of(n)&&af(n)}async function ku(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=zn(t);t.L_.add(3),await As(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await lo(t)}async function Pv(n,e){const t=X(n);e?(t.L_.delete(2),await lo(t)):e||(t.L_.add(2),await As(t),t.q_.set("Unknown"))}function Rr(n){return n.K_||(n.K_=function(t,r,s){const i=X(t);return i.w_(),new pv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:vv.bind(null,n),Ro:Ev.bind(null,n),mo:bv.bind(null,n),d_:wv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ac(n)?oc(n):n.q_.set("Unknown")):(await n.K_.stop(),rf(n))})),n.K_}function gn(n){return n.U_||(n.U_=function(t,r,s){const i=X(t);return i.w_(),new mv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Av.bind(null,n),mo:kv.bind(null,n),f_:Sv.bind(null,n),g_:Rv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await uo(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new cc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lc(n,e){if($t("AsyncQueue",`${e}: ${n}`),bs(n))return new j(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=Zr(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.W_=new Ee(z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Er{constructor(e,t,r,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Er(e,t,ur.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&no(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Dv{constructor(){this.queries=Cu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=X(t),i=s.queries;s.queries=Cu(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new j(V.ABORTED,"Firestore shutting down"))}}function Cu(){return new Sr(n=>Pd(n),no)}async function uc(n,e){const t=X(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Cv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=lc(a,`Initialization of query '${or(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&dc(t)}async function hc(n,e){const t=X(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Vv(n,e){const t=X(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&dc(t)}function Mv(n,e,t){const r=X(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function dc(n){n.Y_.forEach(e=>{e.next()})}var wa,Du;(Du=wa||(wa={})).ea="default",Du.Cache="cache";class fc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.key=e}}class lf{constructor(e){this.key=e}}class Nv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=Cd(e),this.Ra=new ur(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Pu,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),w=ro(this.query,g)?g:null,R=!!m&&this.mutatedKeys.has(m.key),D=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let S=!1;m&&w?m.data.isEqual(w.data)?R!==D&&(r.track({type:3,doc:w}),S=!0):this.ga(m,w)||(r.track({type:2,doc:w}),S=!0,(l&&this.Aa(w,l)>0||d&&this.Aa(w,d)<0)&&(c=!0)):!m&&w?(r.track({type:0,doc:w}),S=!0):m&&!w&&(r.track({type:1,doc:m}),S=!0,(l||d)&&(c=!0)),S&&(w?(a=a.add(w),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(w,R){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return D(w)-D(R)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new Er(this.query,e.Ra,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new lf(r))}),this.da.forEach(r=>{e.has(r)||t.push(new cf(r))}),t}ba(e){this.Ta=e.Ts,this.da=re();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Er.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ov{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Lv{constructor(e){this.key=e,this.va=!1}}class xv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Sr(c=>Pd(c),no),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(z.comparator),this.Na=new Map,this.La=new tc,this.Ba={},this.ka=new Map,this.qa=vr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Fv(n,e,t=!0){const r=mf(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await uf(r,e,t,!0),s}async function Uv(n,e){const t=mf(n);await uf(t,e,!0,!1)}async function uf(n,e,t,r){const s=await av(n.localStore,Tt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await jv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&tf(n.remoteStore,s),c}async function jv(n,e,t,r,s){n.Ka=(g,m,w)=>async function(D,S,M,x){let $=S.view.ma(M);$.ns&&($=await Au(D.localStore,S.query,!1).then(({documents:T})=>S.view.ma(T,$)));const K=x&&x.targetChanges.get(S.targetId),J=x&&x.targetMismatches.get(S.targetId)!=null,ee=S.view.applyChanges($,D.isPrimaryClient,K,J);return Mu(D,S.targetId,ee.wa),ee.snapshot}(n,g,m,w);const i=await Au(n.localStore,e,!0),a=new Nv(e,i.Ts),c=a.ma(i.documents),l=Is.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);Mu(n,t,d.wa);const f=new Ov(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function $v(n,e,t){const r=X(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!no(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ba(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&sc(r.remoteStore,s.targetId),Ta(r,s.targetId)}).catch(Es)):(Ta(r,s.targetId),await ba(r.localStore,s.targetId,!0))}async function Bv(n,e){const t=X(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),sc(t.remoteStore,r.targetId))}async function zv(n,e,t){const r=Xv(n);try{const s=await function(a,c){const l=X(a),d=ke.now(),f=c.reduce((w,R)=>w.add(R.key),re());let g,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=Bt(),D=re();return l.cs.getEntries(w,f).next(S=>{R=S,R.forEach((M,x)=>{x.isValidDocument()||(D=D.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,R)).next(S=>{g=S;const M=[];for(const x of c){const $=hy(x,g.get(x.key).overlayedDocument);$!=null&&M.push(new yn(x.key,$,bd($.value.mapValue),et.exists(!0)))}return l.mutationQueue.addMutationBatch(w,d,M,c)}).next(S=>{m=S;const M=S.applyToLocalDocumentSet(g,D);return l.documentOverlayCache.saveOverlays(w,S.batchId,M)})}).then(()=>({batchId:m.batchId,changes:Vd(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new Ee(ae)),d=d.insert(c,l),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await Ss(r,s.changes),await uo(r.remoteStore)}catch(s){const i=lc(s,"Failed to persist write");t.reject(i)}}async function hf(n,e){const t=X(n);try{const r=await sv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?ue(a.va):s.removedDocuments.size>0&&(ue(a.va),a.va=!1))}),await Ss(t,r,e)}catch(r){await Es(r)}}function Vu(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=X(a);l.onlineState=c;let d=!1;l.queries.forEach((f,g)=>{for(const m of g.j_)m.Z_(c)&&(d=!0)}),d&&dc(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qv(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Ee(z.comparator);a=a.insert(i,He.newNoDocument(i,Q.min()));const c=re().add(i),l=new ao(Q.min(),new Map,new Ee(ae),a,c);await hf(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),pc(r)}else await ba(r.localStore,e,!1).then(()=>Ta(r,e,t)).catch(Es)}async function Wv(n,e){const t=X(n),r=e.batch.batchId;try{const s=await rv(t.localStore,e);ff(t,r,null),df(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ss(t,s)}catch(s){await Es(s)}}async function Hv(n,e,t){const r=X(n);try{const s=await function(a,c){const l=X(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(g=>(ue(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);ff(r,e,t),df(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ss(r,s)}catch(s){await Es(s)}}function df(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function ff(n,e,t){const r=X(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ta(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||pf(n,r)})}function pf(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(sc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),pc(n))}function Mu(n,e,t){for(const r of t)r instanceof cf?(n.La.addReference(r.key,e),Gv(n,r)):r instanceof lf?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||pf(n,r.key)):G()}function Gv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),pc(n))}function pc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new z(_e.fromString(e)),r=n.qa.next();n.Na.set(r,new Lv(t)),n.Oa=n.Oa.insert(t,r),tf(n.remoteStore,new cn(Tt(to(t.path)),r,"TargetPurposeLimboResolution",Wa.oe))}}async function Ss(n,e,t){const r=X(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=rc.Wi(l.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,d){const f=X(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(d,m=>O.forEach(m.$i,w=>f.persistence.referenceDelegate.addReference(g,m.targetId,w)).next(()=>O.forEach(m.Ui,w=>f.persistence.referenceDelegate.removeReference(g,m.targetId,w)))))}catch(g){if(!bs(g))throw g;B("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const m=g.targetId;if(!g.fromCache){const w=f.os.get(m),R=w.snapshotVersion,D=w.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,D)}}}(r.localStore,i))}async function Kv(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Yd(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new j(V.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ss(t,r.hs)}}function Qv(n,e){const t=X(n),r=t.Na.get(e);if(r&&r.va)return re().add(r.key);{let s=re();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function mf(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qv.bind(null,e),e.Ca.d_=Vv.bind(null,e.eventManager),e.Ca.$a=Mv.bind(null,e.eventManager),e}function Xv(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hv.bind(null,e),e}class Fi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=co(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return nv(this.persistence,new ev,e.initialUser,this.serializer)}Ga(e){return new Yy(nc.Zr,this.serializer)}Wa(e){return new lv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fi.provider={build:()=>new Fi};class Ia{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kv.bind(null,this.syncEngine),await Pv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dv}()}createDatastore(e){const t=co(e.databaseInfo.databaseId),r=function(i){return new fv(i)}(e.databaseInfo);return function(i,a,c,l){return new _v(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new yv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Vu(this.syncEngine,t,0),function(){return Ru.D()?new Ru:new uv}())}createSyncEngine(e,t){return function(s,i,a,c,l,d,f){const g=new xv(s,i,a,c,l,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=X(s);B("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await As(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ia.provider={build:()=>new Ia};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=We.UNAUTHENTICATED,this.clientId=yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=lc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xo(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Yd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Nu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jv(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ku(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ku(e.remoteStore,s)),n._onlineComponents=e}async function Jv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;mr("Error using user provided cache. Falling back to memory cache: "+t),await Xo(n,new Fi)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Xo(n,new Fi);return n._offlineComponents}async function _f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Nu(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Nu(n,new Ia))),n._onlineComponents}function Zv(n){return _f(n).then(e=>e.syncEngine)}async function Ui(n){const e=await _f(n),t=e.eventManager;return t.onListen=Fv.bind(null,e.syncEngine),t.onUnlisten=$v.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Uv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Bv.bind(null,e.syncEngine),t}function e0(n,e,t={}){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const f=new mc({next:m=>{f.Za(),a.enqueueAndForget(()=>hc(i,g));const w=m.docs.has(c);!w&&m.fromCache?d.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?d.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),g=new fc(to(c.path),f,{includeMetadataChanges:!0,_a:!0});return uc(i,g)}(await Ui(n),n.asyncQueue,e,t,r)),r.promise}function t0(n,e,t={}){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const f=new mc({next:m=>{f.Za(),a.enqueueAndForget(()=>hc(i,g)),m.fromCache&&l.source==="server"?d.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),g=new fc(c,f,{includeMetadataChanges:!0,_a:!0});return uc(i,g)}(await Ui(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n,e,t){if(!t)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function n0(n,e,t,r){if(e===!0&&r===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Lu(n){if(!z.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xu(n){if(z.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ho(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ho(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Eg;switch(r.type){case"firstParty":return new Ig(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ou.get(t);r&&(B("ComponentProvider","Removing Datastore"),Ou.delete(t),r.terminate())}(this),Promise.resolve()}}function r0(n,e,t,r={}){var s;const i=(n=ct(n,fo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=We.MOCK_USER;else{c=Km(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new j(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new We(d)}n._authCredentials=new bg(new gd(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vn(this.firestore,e,this._query)}}class Ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}}class dn extends vn{constructor(e,t,r){super(e,t,to(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new z(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function De(n,e,...t){if(n=Pe(n),yf("collection","path",e),n instanceof fo){const r=_e.fromString(e,...t);return xu(r),new dn(n,null,r)}{if(!(n instanceof Ye||n instanceof dn))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return xu(r),new dn(n.firestore,null,r)}}function tt(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=yd.newId()),yf("doc","path",e),n instanceof fo){const r=_e.fromString(e,...t);return Lu(r),new Ye(n,null,new z(r))}{if(!(n instanceof Ye||n instanceof dn))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return Lu(r),new Ye(n.firestore,n instanceof dn?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Zd(this,"async_queue_retry"),this.Vu=()=>{const r=Qo();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Qo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Qo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ut;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!bs(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=cc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function ju(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class zt extends fo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Uu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uu(e),this._firestoreClient=void 0,await e}}}function s0(n,e){const t=typeof n=="object"?n:cd(),r=typeof n=="string"?n:"(default)",s=za(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Hm("firestore");i&&r0(s,...i)}return s}function Rs(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||i0(n),n._firestoreClient}function i0(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,d,f){return new xg(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Yv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new br(je.fromBase64String(e))}catch(t){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new br(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=/^__.*__$/;class a0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new yn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ts(e,this.data,t,this.fieldTransforms)}}class vf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new yn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ef(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class vc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ji(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ef(this.Cu)&&o0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class c0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||co(e)}Qu(e,t,r,s=!1){return new vc({Cu:e,methodName:t,qu:r,path:Fe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function po(n){const e=n._freezeSettings(),t=co(n._databaseId);return new c0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bf(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Ec("Data must be an object, but it was:",a,r);const c=If(r,a);let l,d;if(i.merge)l=new at(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Aa(e,g,t);if(!a.contains(m))throw new j(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Sf(f,m)||f.push(m)}l=new at(f),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new a0(new Ze(c),l,d)}class mo extends _c{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mo}}function wf(n,e,t,r){const s=n.Qu(1,e,t);Ec("Data must be an object, but it was:",s,r);const i=[],a=Ze.empty();Bn(r,(l,d)=>{const f=bc(e,l,t);d=Pe(d);const g=s.Nu(f);if(d instanceof mo)i.push(f);else{const m=ks(d,g);m!=null&&(i.push(f),a.set(f,m))}});const c=new at(i);return new vf(a,c,s.fieldTransforms)}function Tf(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[Aa(e,r,t)],l=[s];if(i.length%2!=0)throw new j(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Aa(e,i[m])),l.push(i[m+1]);const d=[],f=Ze.empty();for(let m=c.length-1;m>=0;--m)if(!Sf(d,c[m])){const w=c[m];let R=l[m];R=Pe(R);const D=a.Nu(w);if(R instanceof mo)d.push(w);else{const S=ks(R,D);S!=null&&(d.push(w),f.set(w,S))}}const g=new at(d);return new vf(f,g,a.fieldTransforms)}function l0(n,e,t,r=!1){return ks(t,n.Qu(r?4:3,e))}function ks(n,e){if(Af(n=Pe(n)))return Ec("Unsupported field value:",e,n),If(n,e);if(n instanceof _c)return function(r,s){if(!Ef(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=ks(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:Li(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Li(s.serializer,i)}}if(r instanceof gc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof br)return{bytesValue:qd(s.serializer,r._byteString)};if(r instanceof Ye){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ec(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yc)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ya(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ho(r)}`)}(n,e)}function If(n,e){const t={};return vd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(n,(r,s)=>{const i=ks(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Af(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ke||n instanceof gc||n instanceof br||n instanceof Ye||n instanceof _c||n instanceof yc)}function Ec(n,e,t){if(!Af(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ho(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Aa(n,e,t){if((e=Pe(e))instanceof kr)return e._internalPath;if(typeof e=="string")return bc(n,e);throw ji("Field path arguments must be of type string or ",n,!1,void 0,t)}const u0=new RegExp("[~\\*/\\[\\]]");function bc(n,e,t){if(e.search(u0)>=0)throw ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new kr(...e.split("."))._internalPath}catch{throw ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ji(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new j(V.INVALID_ARGUMENT,c+n+l)}function Sf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class h0 extends Rf{data(){return super.data()}}function wc(n,e){return typeof e=="string"?bc(n,e):e instanceof kr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tc{}class Pf extends Tc{}function ht(n,e,...t){let r=[];e instanceof Tc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Ic).length,c=i.filter(l=>l instanceof _o).length;if(a>1||a>0&&c>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class _o extends Pf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new _o(e,t,r)}_apply(e){const t=this._parse(e);return Cf(e._query,t),new vn(e.firestore,e.converter,_a(e._query,t))}_parse(e){const t=po(e.firestore);return function(i,a,c,l,d,f,g){let m;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Bu(g,f);const w=[];for(const R of g)w.push($u(l,i,R));m={arrayValue:{values:w}}}else m=$u(l,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Bu(g,f),m=l0(c,a,g,f==="in"||f==="not-in");return Re.create(d,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Xe(n,e,t){const r=e,s=wc("where",n);return _o._create(s,r,t)}class Ic extends Tc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ic(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:_t.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Cf(a,l),a=_a(a,l)}(e._query,t),new vn(e.firestore,e.converter,_a(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ac extends Pf{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ac(e,t,r)}_apply(e){return new vn(e.firestore,e.converter,Mi(e._query,this._limit,this._limitType))}}function si(n){return Ac._create("limit",n,"F")}function $u(n,e,t){if(typeof(t=Pe(t))=="string"){if(t==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kd(e)&&t.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(_e.fromString(t));if(!z.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cu(n,new z(r))}if(t instanceof Ye)return cu(n,t._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ho(t)}.`)}function Bu(n,e){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class d0{convertValue(e,t="none"){switch(Fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>we(a.doubleValue));return new yc(i)}convertGeoPoint(e){return new gc(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ga(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hs(e));default:return null}}convertTimestamp(e){const t=_n(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=_e.fromString(e);ue(Xd(r));const s=new ds(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||$t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vf extends Rf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class _i extends Vf{data(e={}){return super.data(e)}}class Mf{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ts(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new _i(this._firestore,this._userDataWriter,r.key,r,new ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new _i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new _i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:f0(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function f0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(n){n=ct(n,Ye);const e=ct(n.firestore,zt);return e0(Rs(e),n._key).then(t=>Nf(e,n,t))}class Sc extends d0{constructor(e){super(),this.firestore=e}convertBytes(e){return new br(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,t)}}function m0(n){n=ct(n,vn);const e=ct(n.firestore,zt),t=Rs(e),r=new Sc(e);return kf(n._query),t0(t,n._query).then(s=>new Mf(e,r,n,s))}function _0(n,e,t,...r){n=ct(n,Ye);const s=ct(n.firestore,zt),i=po(s);let a;return a=typeof(e=Pe(e))=="string"||e instanceof kr?Tf(i,"updateDoc",n._key,e,t,r):wf(i,"updateDoc",n._key,e),go(s,[a.toMutation(n._key,et.exists(!0))])}function g0(n){return go(ct(n.firestore,zt),[new oo(n._key,et.none())])}function y0(n,e){const t=ct(n.firestore,zt),r=tt(n),s=Df(n.converter,e);return go(t,[bf(po(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,et.exists(!1))]).then(()=>r)}function v0(n,...e){var t,r,s;n=Pe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||ju(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ju(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,d,f;if(n instanceof Ye)d=ct(n.firestore,zt),f=to(n._key.path),l={next:g=>{e[a]&&e[a](Nf(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=ct(n,vn);d=ct(g.firestore,zt),f=g._query;const m=new Sc(d);l={next:w=>{e[a]&&e[a](new Mf(d,m,g,w))},error:e[a+1],complete:e[a+2]},kf(n._query)}return function(m,w,R,D){const S=new mc(D),M=new fc(w,S,R);return m.asyncQueue.enqueueAndForget(async()=>uc(await Ui(m),M)),()=>{S.Za(),m.asyncQueue.enqueueAndForget(async()=>hc(await Ui(m),M))}}(Rs(d),f,c,l)}function go(n,e){return function(r,s){const i=new Ut;return r.asyncQueue.enqueueAndForget(async()=>zv(await Zv(r),s,i)),i.promise}(Rs(n),e)}function Nf(n,e,t){const r=t.docs.get(e._key),s=new Sc(n);return new Vf(n,s,e._key,r,new ts(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=po(e)}set(e,t,r){this._verifyNotCommitted();const s=Yo(e,this._firestore),i=Df(s.converter,t,r),a=bf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,et.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Yo(e,this._firestore);let a;return a=typeof(t=Pe(t))=="string"||t instanceof kr?Tf(this._dataReader,"WriteBatch.update",i._key,t,r,s):wf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,et.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Yo(e,this._firestore);return this._mutations=this._mutations.concat(new oo(t._key,et.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yo(n,e){if((n=Pe(n)).firestore!==e)throw new j(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(n){return Rs(n=ct(n,zt)),new E0(n,e=>go(n,e))}(function(e,t=!0){(function(s){Ar=s})(Ir),pr(new On("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new zt(new wg(r.getProvider("auth-internal")),new Sg(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ds(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),hn(ru,"4.7.3",e),hn(ru,"4.7.3","esm2017")})();function Rc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w0=Of,Lf=new ys("auth","Firebase",Of());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new $a("@firebase/auth");function T0(n,...e){$i.logLevel<=se.WARN&&$i.warn(`Auth (${Ir}): ${n}`,...e)}function gi(n,...e){$i.logLevel<=se.ERROR&&$i.error(`Auth (${Ir}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,...e){throw kc(n,...e)}function At(n,...e){return kc(n,...e)}function xf(n,e,t){const r=Object.assign(Object.assign({},w0()),{[e]:t});return new ys("auth","Firebase",r).create(e,{appName:n.name})}function fn(n){return xf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Lf.create(n,...e)}function H(n,e,...t){if(!n)throw kc(e,...t)}function Lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gi(e),new Error(e)}function Wt(n,e){n||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function I0(){return zu()==="http:"||zu()==="https:"}function zu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I0()||Jm()||"connection"in navigator)?navigator.onLine:!0}function S0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qm()||Zm()}get(){return A0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n,e){Wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Ps(3e4,6e4);function yo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pr(n,e,t,r,s={}){return Uf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=vs(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return Ym()||(d.referrerPolicy="no-referrer"),Ff.fetch()($f(n,n.config.apiHost,t,c),d)})}async function Uf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},R0),e);try{const s=new P0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ii(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ii(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ii(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw xf(n,f,d);qt(n,f)}}catch(s){if(s instanceof Gt)throw s;qt(n,"network-request-failed",{message:String(s)})}}async function jf(n,e,t,r,s={}){const i=await Pr(n,e,t,r,s);return"mfaPendingCredential"in i&&qt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function $f(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Pc(n.config,s):`${n.config.apiScheme}://${s}`}class P0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),k0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=At(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(n,e){return Pr(n,"POST","/v1/accounts:delete",e)}async function Bf(n,e){return Pr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D0(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),s=Cc(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:as(Jo(s.auth_time)),issuedAtTime:as(Jo(s.iat)),expirationTime:as(Jo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Jo(n){return Number(n)*1e3}function Cc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const s=td(t);return s?JSON.parse(s):(gi("Failed to decode base64 JWT payload"),null)}catch(s){return gi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function qu(n){const e=Cc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Gt&&V0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function V0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await _s(n,Bf(t,{idToken:r}));H(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zf(i.providerUserInfo):[],c=O0(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!c?.length,f=l?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ra(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function N0(n){const e=Pe(n);await Bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zf(n){return n.map(e=>{var{providerId:t}=e,r=Rc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(n,e){const t=await Uf(n,{},async()=>{const r=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=$f(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ff.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function x0(n,e){return Pr(n,"POST","/v2/accounts:revokeToken",yo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=qu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await L0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new hr;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new M0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ra(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await _s(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return D0(this,e)}reload(){return N0(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(fn(this.auth));const e=await this.getIdToken();return await _s(this,C0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,d,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(d=t.createdAt)!==null&&d!==void 0?d:void 0,x=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:K,isAnonymous:J,providerData:ee,stsTokenManager:T}=t;H($&&T,e,"internal-error");const y=hr.fromJSON(this.name,T);H(typeof $=="string",e,"internal-error"),tn(g,e.name),tn(m,e.name),H(typeof K=="boolean",e,"internal-error"),H(typeof J=="boolean",e,"internal-error"),tn(w,e.name),tn(R,e.name),tn(D,e.name),tn(S,e.name),tn(M,e.name),tn(x,e.name);const b=new xt({uid:$,auth:e,email:m,emailVerified:K,displayName:g,isAnonymous:J,photoURL:R,phoneNumber:w,tenantId:D,stsTokenManager:y,createdAt:M,lastLoginAt:x});return ee&&Array.isArray(ee)&&(b.providerData=ee.map(I=>Object.assign({},I))),S&&(b._redirectEventId=S),b}static async _fromIdTokenResponse(e,t,r=!1){const s=new hr;s.updateFromServerResponse(t);const i=new xt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new hr;c.updateFromIdToken(r);const l=new xt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ra(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Map;function Ft(n){Wt(n instanceof Function,"Expected a class definition");let e=Wu.get(n);return e?(Wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qf.type="NONE";const Hu=qf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n,e,t){return`firebase:${n}:${e}:${t}`}class dr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yi(this.userKey,s.apiKey,i),this.fullPersistenceKey=yi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new dr(Ft(Hu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ft(Hu);const a=yi(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){const g=xt._fromJSON(e,f);d!==i&&(c=g),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new dr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new dr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xf(e))return"Blackberry";if(Yf(e))return"Webos";if(Hf(e))return"Safari";if((e.includes("chrome/")||Gf(e))&&!e.includes("edge/"))return"Chrome";if(Qf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Wf(n=Ge()){return/firefox\//i.test(n)}function Hf(n=Ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gf(n=Ge()){return/crios\//i.test(n)}function Kf(n=Ge()){return/iemobile/i.test(n)}function Qf(n=Ge()){return/android/i.test(n)}function Xf(n=Ge()){return/blackberry/i.test(n)}function Yf(n=Ge()){return/webos/i.test(n)}function Dc(n=Ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function F0(n=Ge()){var e;return Dc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U0(){return e_()&&document.documentMode===10}function Jf(n=Ge()){return Dc(n)||Qf(n)||Yf(n)||Xf(n)||/windows phone/i.test(n)||Kf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,e=[]){let t;switch(n){case"Browser":t=Gu(Ge());break;case"Worker":t=`${Gu(Ge())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ir}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(n,e={}){return Pr(n,"GET","/v2/passwordPolicy",yo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=6;class z0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:B0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ku(this),this.idTokenSubscription=new Ku(this),this.beforeStateQueue=new j0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ft(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bf(this,{idToken:e}),r=await xt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(fn(this));const t=e?Pe(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $0(this),t=new z0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await x0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ft(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[Ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&T0(`Error while retrieving App Check token: ${t.error}`),t?.token}}function vo(n){return Pe(n)}class Ku{constructor(e){this.auth=e,this.observer=null,this.addObserver=c_(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W0(n){Vc=n}function H0(n){return Vc.loadJS(n)}function G0(){return Vc.gapiScript}function K0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(n,e){const t=za(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ki(i,e??{}))return s;qt(s,"already-initialized")}return t.initialize({options:e})}function X0(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Ft);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Y0(n,e,t){const r=vo(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ep(e),{host:a,port:c}=J0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Z0()}function ep(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function J0(n){const e=ep(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Qu(a)}}}function Qu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Z0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,t){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n,e){return jf(n,"POST","/v1/accounts:signInWithIdp",yo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="http://localhost";class Un extends tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Rc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Un(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return fr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,fr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fr(e,t)}buildRequest(){const e={requestUri:eE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends np{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Cs{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Un._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return sn.credential(t,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Cs{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Cs{constructor(){super("twitter.com")}static credential(e,t){return Un._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return an.credential(t,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await xt._fromIdTokenResponse(e,r,s),a=Xu(r);return new jn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Xu(r);return new jn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Xu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Gt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new zi(e,t,r,s)}}function rp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(n,i,e,r):i})}async function tE(n,e,t=!1){const r=await _s(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(n,e,t=!1){const{auth:r}=n;if(Ot(r.app))return Promise.reject(fn(r));const s="reauthenticate";try{const i=await _s(n,rp(r,s,e,n),t);H(i.idToken,r,"internal-error");const a=Cc(i.idToken);H(a,r,"internal-error");const{sub:c}=a;return H(n.uid===c,r,"user-mismatch"),jn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(n,e,t=!1){if(Ot(n.app))return Promise.reject(fn(n));const r="signIn",s=await rp(n,r,e),i=await jn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(n,e){return jf(n,"POST","/v1/accounts:signInWithCustomToken",yo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n,e){if(Ot(n.app))return Promise.reject(fn(n));const t=vo(n),r=await sE(t,{token:e,returnSecureToken:!0}),s=await jn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function oE(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function aE(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}function cE(n){return Pe(n).signOut()}const qi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qi,"1"),this.storage.removeItem(qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=1e3,uE=10;class ip extends sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);U0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},lE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ip.type="LOCAL";const hE=ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op extends sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}op.type="SESSION";const ap=op;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Eo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await dE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=Mc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function pE(n){St().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function mE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _E(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gE(){return cp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="firebaseLocalStorageDb",yE=1,Wi="firebaseLocalStorage",up="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bo(n,e){return n.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function vE(){const n=indexedDB.deleteDatabase(lp);return new Ds(n).toPromise()}function ka(){const n=indexedDB.open(lp,yE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Wi,{keyPath:up})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Wi)?e(r):(r.close(),await vE(),e(await ka()))})})}async function Yu(n,e,t){const r=bo(n,!0).put({[up]:e,value:t});return new Ds(r).toPromise()}async function EE(n,e){const t=bo(n,!1).get(e),r=await new Ds(t).toPromise();return r===void 0?null:r.value}function Ju(n,e){const t=bo(n,!0).delete(e);return new Ds(t).toPromise()}const bE=800,wE=3;class hp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ka(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>wE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eo._getInstance(gE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mE(),!this.activeServiceWorker)return;this.sender=new fE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_E()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ka();return await Yu(e,qi,"1"),await Ju(e,qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>EE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ju(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bo(s,!1).getAll();return new Ds(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hp.type="LOCAL";const TE=hp;new Ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(n,e){return e?Ft(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AE(n){return rE(n.auth,new Nc(n),n.bypassAuthState)}function SE(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),nE(t,new Nc(n),n.bypassAuthState)}async function RE(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),tE(t,new Nc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AE;case"linkViaPopup":case"linkViaRedirect":return RE;case"reauthViaPopup":case"reauthViaRedirect":return SE;default:qt(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new Ps(2e3,1e4);class lr extends dp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kE.get())};e()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="pendingRedirect",vi=new Map;class CE extends dp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vi.get(this.auth._key());if(!e){try{const r=await DE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vi.set(this.auth._key(),e)}return this.bypassAuthState||vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DE(n,e){const t=NE(e),r=ME(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function VE(n,e){vi.set(n._key(),e)}function ME(n){return Ft(n._redirectPersistence)}function NE(n){return yi(PE,n.config.apiKey,n.name)}async function OE(n,e,t=!1){if(Ot(n.app))return Promise.reject(fn(n));const r=vo(n),s=IE(r,e),a=await new CE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=10*60*1e3;class xE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(At(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zu(e))}saveEventToCache(e){this.cachedEventUids.add(Zu(e)),this.lastProcessedEventTime=Date.now()}}function Zu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function FE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(n,e={}){return Pr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$E=/^https?/;async function BE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await UE(n);for(const t of e)try{if(zE(t))return}catch{}qt(n,"unauthorized-domain")}function zE(n){const e=Sa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!$E.test(t))return!1;if(jE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Ps(3e4,6e4);function eh(){const n=St().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WE(n){return new Promise((e,t)=>{var r,s,i;function a(){eh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eh(),t(At(n,"network-request-failed"))},timeout:qE.get()})}if(!((s=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=St().gapi)===null||i===void 0)&&i.load)a();else{const c=K0("iframefcb");return St()[c]=()=>{gapi.load?a():t(At(n,"network-request-failed"))},H0(`${G0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ei=null,e})}let Ei=null;function HE(n){return Ei=Ei||WE(n),Ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=new Ps(5e3,15e3),KE="__/auth/iframe",QE="emulator/auth/iframe",XE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JE(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pc(e,QE):`https://${n.config.authDomain}/${KE}`,r={apiKey:e.apiKey,appName:n.name,v:Ir},s=YE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${vs(r).slice(1)}`}async function ZE(n){const e=await HE(n),t=St().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:JE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=At(n,"network-request-failed"),c=St().setTimeout(()=>{i(a)},GE.get());function l(){St().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tb=500,nb=600,rb="_blank",sb="http://localhost";class th{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ib(n,e,t,r=tb,s=nb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},eb),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Ge().toLowerCase();t&&(c=Gf(d)?rb:t),Wf(d)&&(e=e||sb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[w,R])=>`${m}${w}=${R},`,"");if(F0(d)&&c!=="_self")return ob(e||"",c),new th(null);const g=window.open(e||"",c,f);H(g,n,"popup-blocked");try{g.focus()}catch{}return new th(g)}function ob(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="__/auth/handler",cb="emulator/auth/handler",lb=encodeURIComponent("fac");async function nh(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ir,eventId:s};if(e instanceof np){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",a_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Cs){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${lb}=${encodeURIComponent(l)}`:"";return`${ub(n)}?${vs(c).slice(1)}${d}`}function ub({config:n}){return n.emulator?Pc(n,cb):`https://${n.authDomain}/${ab}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="webStorageSupport";class hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ap,this._completeRedirectFn=OE,this._overrideRedirectResult=VE}async _openPopup(e,t,r,s){var i;Wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await nh(e,t,r,Sa(),s);return ib(e,a,Mc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await nh(e,t,r,Sa(),s);return pE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ZE(e),r=new xE(e);return t.register("authEvent",s=>(H(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zo,{type:Zo},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[Zo];a!==void 0&&t(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jf()||Hf()||Dc()}}const db=hb;var rh="@firebase/auth",sh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mb(n){pr(new On("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zf(n)},d=new q0(r,s,i,l);return X0(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pr(new On("auth-internal",e=>{const t=vo(e.getProvider("auth").getImmediate());return(r=>new fb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(rh,sh,pb(n)),hn(rh,sh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=5*60,gb=sd("authIdTokenMaxAge")||_b;let ih=null;const yb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>gb)return;const s=t?.token;ih!==s&&(ih=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vb(n=cd()){const e=za(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Q0(n,{popupRedirectResolver:db,persistence:[TE,hE,ap]}),r=sd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=yb(i.toString());aE(t,a,()=>a(t.currentUser)),oE(t,c=>a(c))}}const s=nd("auth");return s&&Y0(t,`http://${s}`),t}function Eb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}W0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=At("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Eb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mb("Browser");const bb={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},oh="2008948704-db2goT00",pp=ad(bb),ce=s0(pp),Vn=vb(pp);let mp=()=>{};const wb=new Promise(n=>{mp=n});let ah=!1;const Tb=setTimeout(()=>Oc(),1e4);function Oc(){ah||(ah=!0,clearTimeout(Tb),mp())}const qn=()=>wb,Ib=n=>"m_"+n;async function Lc(n,e){try{n&&(!Vn.currentUser||Vn.currentUser.uid!==Ib(e))&&await iE(Vn,n)}catch(t){console.warn("firebase sign-in:",t&&t.message)}Oc()}const dt=async(...n)=>(await qn(),m0(...n)),Ab=async(...n)=>(await qn(),p0(...n)),Wn=async(...n)=>(await qn(),_0(...n)),xc=async(...n)=>(await qn(),g0(...n)),_p=async(...n)=>(await qn(),y0(...n));function ch(n,e,t){let r=null,s=!1;return qn().then(()=>{s||(r=v0(n,e,t))}),()=>{s=!0,r&&r()}}function gp(n){const e=b0(n),t=e.commit.bind(e);return e.commit=async()=>(await qn(),t()),e}function yp(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function Sb(){return typeof liff<"u"?Promise.resolve():new Promise((n,e)=>{let t=0;const r=setInterval(()=>{typeof liff<"u"?(clearInterval(r),n()):++t>100&&(clearInterval(r),e(new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้")))},100)})}let vp=()=>{},wo=!1,Ep=()=>{};const Rb="เซสชัน LINE หมดอายุ กดเข้าสู่ระบบใหม่ที่แถบด้านบน";function kb(n){Ep=n,wo&&n()}function Pb(){try{const n=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}liff.login({redirectUri:n})}catch{}}function Hi(){wo=!0,Ep();const n=new Error(Rb);return n.expired=!0,n}const Cb=new Promise(n=>{vp=n});let gs="pending";const Pa="dm:v2:webtoken",Db=20*24*60*60*1e3;function To(){try{const n=JSON.parse(localStorage.getItem(Pa)||"null");return n&&typeof n.token=="string"&&n.token?n:null}catch{return null}}function bp(n){try{n?localStorage.setItem(Pa,JSON.stringify({token:n,t:Date.now()})):localStorage.removeItem(Pa)}catch{}}async function Vb(){const n=To();if(!(n&&Date.now()-n.t<Db))try{const e=liff.getIDToken();if(!e)return;const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e,kind:"web"})}),r=await t.json().catch(()=>({}));t.ok&&r.success&&r.token&&bp(r.token)}catch{}}const Mb="U0d739eea39c312e11c487e22861920d1",Nb=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();function Ca(n,e,t){return{name:Nb(e.name),memberId:n,pictureUrl:/^https:\/\//i.test(e.pictureUrl||"")?e.pictureUrl:"",isAdmin:e.role==="admin"||t===Mb,realName:e.realName||"",promptpay:e.promptpay||""}}const Ob=["code","state","liffClientId","liffRedirectUri","error","error_description"],Lb=()=>{const n=new URLSearchParams(location.search);return n.has("code")||n.has("liffClientId")};function lh(){try{const n=new URL(location.href);let e=!1;for(const r of Ob)n.searchParams.has(r)&&(n.searchParams.delete(r),e=!0);let t=n.hash;t==="#_=_"&&(t="",e=!0),e&&history.replaceState(null,"",n.pathname+(n.search||"")+t)}catch{}}let bi="";function uh(){return bi}async function xb(){await Sb();const n=Lb();try{await liff.init({liffId:oh})}catch(t){if(bi=`เริ่มระบบ LINE ไม่สำเร็จ: ${t&&t.message||t}`,n)lh(),await liff.init({liffId:oh});else throw t}if(lh(),!liff.isLoggedIn()){gs="out",bi=bi||(n?"ล็อกอินกลับมาแล้วแต่ LINE ไม่ยืนยันบัตร (ลองกดเข้าสู่ระบบใหม่อีกครั้ง)":"บัตรล็อกอิน LINE ในเบราว์เซอร์นี้หมดอายุหรือยังไม่มี");const t=Tp();if(t&&To()&&!n){try{const s=await Ab(tt(ce,"members",String(t.memberId)));if(s.exists())return Ca(s.id,s.data(),s.data().lineUserId||"")}catch{}return t}if(t&&!n)return wo=!0,{needLogin:!0};const r=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}return liff.login({redirectUri:r}),null}gs="in",vp(),Vb();try{const t=sessionStorage.getItem("dept_auth_hash");t&&(sessionStorage.removeItem("dept_auth_hash"),(!location.hash||location.hash==="#"||location.hash==="#_=_")&&(location.hash=t))}catch{}const e=await wp({action:"login"});if(e.member)return await Lc(e.firebaseToken,e.member.id),Ca(e.member.id,e.member,e.member.lineUserId);if(e.needLink)return{needLink:!0,profile:e.profile||{},candidates:e.candidates||[],suggest:e.suggest||""};throw new Error(e.message||"เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง")}async function wp(n){const e=liff.getIDToken();if(!e)throw new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองรีเฟรชหน้านี้");const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,idToken:e})}),r=await t.json().catch(()=>({}));return!t.ok&&!r.message&&(r.message=`เข้าสู่ระบบไม่สำเร็จ (${t.status})`),r}async function gT(n,e){const t=await wp({action:"link",memberId:e});if(!t.member)throw new Error(t.message||"ผูกบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง");return Cr(),await Lc(t.firebaseToken,t.member.id),Ca(t.member.id,t.member,t.member.lineUserId)}const Fc=24*60*60*1e3,Io=10*60*1e3,Ht="dm:v2:";function gt(n,e){try{const t=localStorage.getItem(Ht+n);if(!t)return null;const{t:r,v:s}=JSON.parse(t);return Date.now()-r<e?s:null}catch{return null}}function yt(n,e){try{localStorage.setItem(Ht+n,JSON.stringify({t:Date.now(),v:e}))}catch{}}const Fb=30*24*60*60*1e3,Ub=7*24*60*60*1e3;function Tp(){const n=gt("user",Fb);return n&&n.name&&n.memberId?n:null}function jb(n){n&&n.name&&n.memberId&&yt("user",n)}function $b(n,e){const t=gt(`snap:${n}:${e}`,Ub);return t&&Array.isArray(t.transactions)&&Array.isArray(t.settlements)&&Array.isArray(t.wallet)?t:null}function Bb(n,e,t){yt(`snap:${n}:${e}`,{transactions:t.transactions,settlements:t.settlements,wallet:t.wallet})}function zb(){return gt("members",1/0)}function Da(){try{Object.keys(localStorage).filter(n=>n.startsWith(Ht)).forEach(n=>localStorage.removeItem(n))}catch{}}const Ip=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();async function qb(){const n=gt("members",Io);if(n)return n;const e=await dt(De(ce,"members")),t=[...new Set(e.docs.map(r=>Ip(r.data().name)).filter(Boolean))];return yt("members",t),t}async function Wb(n){const e=gt("m:"+n,Fc);if(e)return e;const[t,r]=await Promise.all([dt(ht(De(ce,"transactions"),Xe("date",">=",`${n}-01`),Xe("date","<=",`${n}-31`))),dt(ht(De(ce,"settlements"),Xe("month","==",n)))]),s={transactions:t.docs.map(i=>({id:i.id,...i.data()})),settlements:r.docs.map(i=>({id:i.id,...i.data()}))};return yt("m:"+n,s),s}function Hb(n,e){const t={transactions:null,settlements:null},r=()=>{t.transactions&&t.settlements&&e({...t})},s=a=>e({error:a}),i=[ch(ht(De(ce,"transactions"),Xe("date",">=",`${n}-01`),Xe("date","<=",`${n}-31`)),a=>{t.transactions=a.docs.map(c=>({id:c.id,...c.data()})),r()},s),ch(ht(De(ce,"settlements"),Xe("month","==",n)),a=>{t.settlements=a.docs.map(c=>({id:c.id,...c.data()})),r()},s)];return()=>i.forEach(a=>a())}async function Ie(n,e,{line:t=!1}={}){const r=t?null:To();if(r){const c=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.token},body:JSON.stringify(e)});let l={};try{l=await c.json()}catch{}if(c.status!==401){if(!c.ok)throw new Error(l.message||`เกิดข้อผิดพลาด (${c.status})`);return l}bp("")}if(wo||gs==="out")throw Hi();await Promise.race([Cb,new Promise((c,l)=>setTimeout(()=>l(new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองใหม่อีกครั้ง")),2e4))]);const s=liff.getIDToken(),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,idToken:s})});let a={};try{a=await i.json()}catch{}if(i.status===401)throw Hi();if(!i.ok)throw new Error(a.message||`เกิดข้อผิดพลาด (${i.status})`);return a}async function Gb(n,{current:e=!1}={}){if(!e){const s=gt("w:"+n,Fc);if(s)return s}const t=await Ie("/api/shortcut-transaction",{action:"wallet-list",month:n}),r=Array.isArray(t.items)?t.items:[];return e||yt("w:"+n,r),r}async function Kb(n,e){const t={},r=[];for(const c of n){if(c===e)continue;const l=gt("w:"+c,Fc);l?t[c]=l:r.push(c)}if(r.length===0)return t[e]=await Gb(e,{current:!0}),t;const s=r.slice().sort()[0],i=await Ie("/api/shortcut-transaction",{action:"wallet-list",since:s}),a=Array.isArray(i.items)?i.items:[];t[e]=a.filter(c=>String(c.date||"").startsWith(e));for(const c of r){const l=a.filter(d=>String(d.date||"").startsWith(c));t[c]=l,yt("w:"+c,l)}return t}async function yT(){const n=await Ie("/api/device-token",{},{line:!0});if(!n.success||!n.token)throw new Error(n.message||"สร้างรหัสไม่สำเร็จ");return n}async function vT(){if(gs!=="in")throw Hi();const n=await fetch("/api/device-token",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:liff.getIDToken()})});let e={};try{e=await n.json()}catch{}if(!n.ok||!e.success)throw new Error(e.message||"ยกเลิกรหัสไม่สำเร็จ");return e}async function ET(n,e){await Ie("/api/shortcut-transaction",{action:"wallet-update",id:n,...e})}async function bT(n){let e=0;for(let t=0;t<n.length;t+=100){const r=await Ie("/api/shortcut-transaction",{action:"wallet-update",items:n.slice(t,t+100)});e+=Number(r.updated)||0}return e}async function Qb(){const n=await Ie("/api/shortcut-transaction",{action:"wallet-template-list"});return Array.isArray(n.items)?n.items:[]}async function wT(n,e){await Ie("/api/shortcut-transaction",{action:"wallet-template-update",id:n,...e}),Dr()}async function TT(n){await Ie("/api/shortcut-transaction",{action:"wallet-template-stop",id:n}),Dr()}const Ap=n=>n&&n.plan&&typeof n.plan=="object"?n.plan:{budget:{total:0,cats:{}},months:{},goals:[]};async function Xb(){const n=gt("plan",Io);if(n)return n;const e=Ap(await Ie("/api/shortcut-transaction",{action:"plan-get"}));return yt("plan",e),e}const Ao=async n=>{const e=Ap(await Ie("/api/shortcut-transaction",n));return yt("plan",e),e},Yb=({scope:n,month:e,total:t,cats:r,clear:s=!1})=>Ao({action:"plan-budget-set",scope:n,month:e,total:t,cats:r,clear:s}),Jb=n=>Ao({action:"goal-save",...n}),Zb=(n,e,t)=>Ao({action:"goal-move",id:n,amount:e,dir:t}),ew=n=>Ao({action:"goal-delete",id:n}),tw=5*60*1e3;async function hh({force:n=!1}={}){const e=n?null:gt("cards",tw);if(e)return e;const t=await Ie("/api/shortcut-transaction",{action:"card-list"}),r={enabled:t.enabled===!0,cards:Array.isArray(t.cards)?t.cards:[]};return yt("cards",r),r}function nw(){try{localStorage.removeItem(Ht+"cards")}catch{}}const Uc=async n=>{const e=await Ie("/api/shortcut-transaction",n);return nw(),e},rw=n=>Uc({action:"card-save",...n}),sw=n=>Uc({action:"card-delete",id:n}),iw=(n,e,t)=>Uc({action:"card-paid",id:n,paid:e,key:t});async function IT(n,e){for(const t of n.ids&&n.ids.length?n.ids:[n.id])await Wn(tt(ce,"members",String(t)),{cardAlerts:!!e});Cr()}async function AT(){const n=await Ie("/api/shortcut-transaction",{action:"line-quota"});return n&&n.quota?n.quota:null}async function ow(n){return n&&n.recurring&&Dr(),Ie("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}async function dh(){const n=gt("profiles",Io);if(n)return n;const e=await dt(De(ce,"members")),t=new Map;e.docs.forEach(s=>{const i=s.data(),a=Ip(i.name);if(!a)return;const c={id:s.id,name:a,promptpay:i.promptpay||"",realName:i.realName||"",englishName:i.englishName||"",hasLine:!!i.lineUserId,pictureUrl:/^https?:\/\//i.test(i.pictureUrl||"")?i.pictureUrl:"",role:i.role==="admin"?"admin":"member",cardAlerts:i.cardAlerts===!0,ids:[s.id]},l=t.get(a);l&&(c.ids=[...l.ids,s.id],c.cardAlerts=c.cardAlerts||l.cardAlerts),!l||!l.hasLine&&c.hasLine||!l.promptpay&&c.promptpay||!l.pictureUrl&&c.pictureUrl?t.set(a,c):(l.ids=c.ids,l.cardAlerts=c.cardAlerts)});const r=[...t.values()];return yt("profiles",r),r}function Sp(n){try{localStorage.removeItem(Ht+"m:"+n),localStorage.removeItem(Ht+"w:"+n)}catch{}}function Cr(){try{localStorage.removeItem(Ht+"profiles"),localStorage.removeItem(Ht+"members")}catch{}}async function fh(n){return Ie("/api/shortcut-transaction",{action:"wallet-delete",id:n})}async function ST(n){let e=0;for(let t=0;t<n.length;t+=50){const r=await Ie("/api/shortcut-transaction",{action:"wallet-confirm",ids:n.slice(t,t+50)});e+=Number(r.confirmed)||0}return e}async function aw(n){return(await Ie("/api/shortcut-transaction",{action:"wallet-get",id:n})).item||null}async function RT(n){let e=0,t=0;for(let r=0;r<n.length;r+=50){const s=await Ie("/api/shortcut-transaction",{action:"wallet-delete-many",ids:n.slice(r,r+50)});e+=Number(s.deleted)||0,t+=Array.isArray(s.failed)?s.failed.length:0}return{deleted:e,failed:t}}async function cw(){return(await dt(ht(De(ce,"subscription_templates"),Xe("active","==",!0)))).docs.map(e=>({id:e.id,...e.data()}))}async function lw(){const n=gt("billsched",Io);if(n)return n;const[e,t]=await Promise.all([cw(),Qb().catch(()=>[])]),r={group:e.map(s=>({id:s.id,desc:s.desc,amount:s.amount,billingDay:s.billingDay,payer:s.payer,splits:s.splits,icon:s.icon,active:s.active,every:s.every,startMonth:s.startMonth})),personal:t.map(s=>({id:s.id,desc:s.desc,amount:s.amount,billingDay:s.billingDay,icon:s.icon,every:s.every,startMonth:s.startMonth}))};return yt("billsched",r),r}function Dr(){try{localStorage.removeItem(Ht+"billsched")}catch{}}async function kT(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc.trim().slice(0,100)||"บิลรายเดือน"),typeof e.icon=="string"&&(t.icon=e.icon),e.billingDay!==void 0&&(t.billingDay=Math.min(31,Math.max(1,Math.round(Number(e.billingDay))||1))),e.every!==void 0&&(t.every=[1,3,6,12].includes(Number(e.every))?Number(e.every):1,t.startMonth=Math.min(12,Math.max(1,Math.round(Number(e.startMonth))||1))),await Wn(tt(ce,"subscription_templates",String(n)),t),Dr()}async function PT(n){await Wn(tt(ce,"subscription_templates",String(n)),{active:!1,stoppedAt:new Date}),Dr()}async function uw(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc),typeof e.icon=="string"&&(t.icon=e.icon),await Wn(tt(ce,"transactions",String(n)),t)}async function CT(n){await _p(De(ce,"members"),{name:n,createdAt:new Date().toISOString(),quickAdded:!0,role:"member"}),Cr()}async function DT(n,e){const t={realName:String(e.realName||""),promptpay:String(e.promptpay||""),role:e.role==="admin"?"admin":"member",realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date};await Wn(tt(ce,"members",String(n)),t),Cr()}async function VT(n){const e=n.name;if((await Promise.all([dt(ht(De(ce,"transactions"),Xe("payer","==",e),si(1))),dt(ht(De(ce,"transactions"),Xe(new kr("splits",e),">=",0),si(1))),dt(ht(De(ce,"settlements"),Xe("from","==",e),si(1))),dt(ht(De(ce,"settlements"),Xe("to","==",e),si(1)))])).some(r=>!r.empty))throw new Error(`ลบ ${e} ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน (ถ้าลบ ยอดหนี้ของคนอื่นจะคำนวณผิด)`);await xc(tt(ce,"members",String(n.id))),Cr()}async function MT({from:n,to:e,amount:t,month:r,adminName:s}){await _p(De(ce,"settlements"),{status:"verified",month:r,from:n,to:e,amount:Number(t),transactionIds:[],createdAt:new Date().toISOString(),verifiedByAdmin:!0,adminId:s||"unknown"})}async function NT(n,e){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(e))throw new Error("เดือนไม่ถูกต้อง");await Wn(tt(ce,"settlements",String(n)),{month:e})}async function OT(n){await xc(tt(ce,"settlements",String(n)))}async function LT(){return(await Ie("/api/shortcut-transaction",{action:"admin-status"})).jobs||{debt:null,subs:null,cards:null}}async function xT(){return(await Ie("/api/shortcut-transaction",{action:"group-summary"})).message||"ส่งแล้ว"}async function FT(){return(await Ie("/api/shortcut-transaction",{action:"remind-all"})).message||"สั่งเตือนแล้ว"}async function UT(n){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(n))throw new Error("เดือนไม่ถูกต้อง");const e=await dt(ht(De(ce,"transactions"),Xe("date",">=",`${n}-01`),Xe("date","<=",`${n}-31`))),t=new Map;e.docs.forEach(a=>t.set(a.id,a.ref));const r=[...new Set(e.docs.map(a=>a.data().groupId).filter(Boolean))];for(const a of r)(await dt(ht(De(ce,"transactions"),Xe("groupId","==",a)))).docs.forEach(l=>t.set(l.id,l.ref));const s=await dt(ht(De(ce,"settlements"),Xe("month","==",n))),i=[...t.values(),...s.docs.map(a=>a.ref)];for(let a=0;a<i.length;a+=400){const c=gp(ce);i.slice(a,a+400).forEach(l=>c.delete(l)),await c.commit()}return Sp(n),{bills:t.size,settlements:s.docs.length}}async function hw(n){await xc(tt(ce,"transactions",String(n)))}async function jT(n,e){for(let t=0;t<n.length;t+=10)await Promise.all(n.slice(t,t+10).map(r=>uw(r,{icon:e})));return n.length}async function $T(n){for(let e=0;e<n.length;e+=10)await Promise.all(n.slice(e,e+10).map(t=>hw(t)));return n.length}async function BT(n,e){await Wn(tt(ce,"members",String(n)),{...e,realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date}),Cr()}async function zT(n,{to:e,amount:t,month:r}){const s=await new Promise((l,d)=>{const f=new FileReader;f.onload=()=>l(String(f.result).split(",")[1]),f.onerror=()=>d(new Error("อ่านไฟล์รูปไม่สำเร็จ")),f.readAsDataURL(n)});if(gs!=="in")throw Hi();const i=liff.getIDToken(),a=await fetch("/api/verify-settlement-slip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:i,to:e,amount:t,month:r,base64Image:s})});let c={};try{c=await a.json()}catch{}return{ok:a.ok&&c.success===!0,json:c,status:a.status}}function qT(){try{liff.logout()}catch{}try{cE(Vn)}catch{}Da(),location.href="/"}async function ph({docs:n,template:e}){const t=gp(ce);n.forEach(r=>t.set(tt(De(ce,"transactions")),r)),e&&t.set(tt(De(ce,"subscription_templates")),e),await t.commit(),e&&Dr()}(async()=>{try{if(typeof Vn.authStateReady=="function"&&await Vn.authStateReady(),Vn.currentUser)return Oc();const n=To();if(!n)return;const e=await fetch("/api/device-token?firebase=1",{headers:{Authorization:"Bearer "+n.token}}),t=await e.json().catch(()=>({}));e.ok&&t.success&&t.member&&await Lc(t.firebaseToken,t.member.id)}catch(n){console.warn("firebase pass:",n&&n.message)}})();const mh=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},_h=60;function dw(n,e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));if(!t)throw new Error("รูปแบบวันที่ไม่ถูกต้อง");const r=Number(t[1]),s=Number(t[2])-1,i=Number(t[3]),a=r*12+s+Number(e),c=Math.floor(a/12),l=a-c*12,d=new Date(Date.UTC(c,l+1,0)).getUTCDate(),f=Math.min(i,d);return`${String(c).padStart(4,"0")}-${String(l+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`}function fw({amount:n,installments:e,splits:t,date:r}){const s=Number(e);if(!Number.isInteger(s)||s<1||s>_h)throw new Error(`จำนวนงวดต้องเป็นเลข 1–${_h}`);const i=Object.keys(t||{});if(i.length===0)throw new Error("ไม่มีผู้ร่วมจ่าย");const a=mh(n);if(a<=0)throw new Error("ยอดเงินไม่ถูกต้อง");const c=i.map(f=>[f,mh(t[f])]),l=a-c.reduce((f,[,g])=>f+g,0);if(l!==0){let f=0;c.forEach(([,g],m)=>{g>c[f][1]&&(f=m)}),c[f][1]+=l}const d=[];for(let f=0;f<s;f++){const g={};let m=0;for(const[w,R]of c){const D=Math.floor(R/s),S=f<R-D*s?1:0;g[w]=(D+S)/100,m+=D+S}d.push({index:f+1,date:dw(r,f),amount:m/100,splits:g})}return d}const gh=Yh.map(n=>n.key),WT=["plane","shield","home","phone","car","gift","heart","star"],HT=["accent","sun","receive","accent2","navy"],pw=80,mw=/^\d{4}-(0[1-9]|1[0-2])$/,Mn=n=>Math.round((Number(n)||0)*100),yh=n=>typeof n=="string"&&mw.test(n),vh=n=>!!(n&&(Number(n.total)>0||Object.values(n.cats||{}).some(e=>Number(e)>0)));function _w(n,e){const t=n||{},r=t.months&&t.months[e];return vh(r)?{total:Number(r.total)||0,cats:{...r.cats||{}},source:"month"}:vh(t.budget)?{total:Number(t.budget.total)||0,cats:{...t.budget.cats||{}},source:"default"}:{total:0,cats:{},source:"none"}}function Eh(n,e){return e>0?n>e?"over":n/e*100>=pw?"near":"ok":"none"}const Va=(n,e)=>e>0?Math.round(n/e*100):0;function gw(n,e){const t=n||{total:0,cats:{},source:"none"},r=Object.fromEntries(gh.map(d=>[d,Mn((t.cats||{})[d])])),s=Object.values(r).reduce((d,f)=>d+f,0),i=Mn(t.total)>0?Mn(t.total):s,a=Math.max(0,Math.round(Number(e&&e.totalSat)||0)),c=e&&e.cats||{},l=gh.filter(d=>r[d]>0).map(d=>{const f=Math.max(0,Math.round(Number(c[d])||0));return{key:d,budgetSat:r[d],spentSat:f,leftSat:r[d]-f,percent:Va(f,r[d]),level:Eh(f,r[d])}});return{set:i>0,source:t.source||"none",budgetSat:i,spentSat:a,leftSat:i-a,percent:Va(a,i),level:Eh(a,i),cats:l,unassignedSat:Math.max(0,i-s)}}function yw(n,e){if(!yh(n)||!yh(e))return 0;const[t,r]=n.split("-").map(Number),[s,i]=e.split("-").map(Number);return Math.max(0,(s-t)*12+(i-r)+1)}function vw(n,e){return(n&&Array.isArray(n.log)?n.log:[]).filter(t=>String(t.date).startsWith(e)).reduce((t,r)=>t+Mn(r.amount),0)}function Rp(n,e){const t=n||{},r=Mn(t.target),s=Mn(t.saved),i=Math.max(0,r-s),a=r>0&&s>=r,c=t.deadline?yw(e,t.deadline):0,l=!!t.deadline&&c===0&&!a;let d=0;return a||(d=t.deadline?c>0?Math.ceil(i/c/100)*100:i:Mn(t.monthly)),{targetSat:r,savedSat:s,remainingSat:i,percent:Math.min(100,Va(s,r)),done:a,monthsLeft:c,late:l,perMonthSat:d,thisMonthSat:vw(t,e)}}function kp(n,e){let t=0,r=0;for(const s of n||[]){const i=Rp(s,e);i.done||(t+=i.perMonthSat),r+=i.thisMonthSat}return{planSat:t,doneSat:Math.max(0,r)}}function Ew(n,e,t){const r=Math.max(0,Math.round(Number(n)||0)-kp(e,t).planSat);return Math.floor(r/1e4)*1e4}const bw=[1,3,6,12],ww=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function wr(n){const e=Number(n&&n.every);return bw.includes(e)?e:1}function Gi(n){const e=Number(n&&n.startMonth);return Number.isInteger(e)&&e>=1&&e<=12?e:1}function Ma(n,e){const t=wr(n);return t===1?!0:((Number(String(e).slice(5,7))-Gi(n))%t+t)%t===0}function GT(n){return Array.from({length:12},(e,t)=>t+1).filter(e=>Ma(n,`2000-${String(e).padStart(2,"0")}`))}const KT=n=>12/wr(n);function QT(n){const e=wr(n),t=Math.min(31,Math.max(1,Number(n&&n.billingDay)||1));return e===1?`ทุกวันที่ ${t}`:e===12?`ทุกปี ${t} ${ww[Gi(n)-1]}`:`ทุก ${e} เดือน วันที่ ${t}`}function Tw(n){const e=wr(n);return e===1?"":e===12?"ทุกปี":`ทุก ${e} เดือน`}function le(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function pn(n){const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0}function Iw({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const s=new Set(n.map(le).filter(Boolean)),i={};s.forEach(l=>{i[l]=0});const a=[],c=(l,d,f)=>{const g=le(l);g&&(s.has(g)?i[g]+=d:a.push({type:"unknown_name",name:g,...f}))};for(const l of e){if(!l||typeof l.date!="string"||!l.date.startsWith(r))continue;const d=l.splits&&typeof l.splits=="object"?Object.entries(l.splits):[];if(d.length===0){a.push({type:"no_splits",id:l.id});continue}const f=pn(l.amount);c(l.payer,f,{id:l.id});let g=0;for(const[m,w]of d){const R=pn(w);g+=R,c(m,-R,{id:l.id})}Math.abs(g-f)>d.length&&a.push({type:"split_mismatch",id:l.id,diffSatang:g-f})}for(const l of t){if(!l||l.status!=="verified"||l.month!==r)continue;const d=pn(l.amount);c(l.from,d,{id:l.id}),c(l.to,-d,{id:l.id})}return{balances:i,warnings:a}}function Aw(n,{minSatang:e=100}={}){const t=[],r=[];for(const[l,d]of Object.entries(n))d<=-e?t.push({name:l,amt:-d}):d>=e&&r.push({name:l,amt:d});const s=(l,d)=>d.amt-l.amt||(l.name<d.name?-1:l.name>d.name?1:0);t.sort(s),r.sort(s);const i=[];let a=0,c=0;for(;a<t.length&&c<r.length;){const l=t[a],d=r[c],f=Math.min(l.amt,d.amt);f>=e&&i.push({from:l.name,to:d.name,amountSatang:f,amount:f/100}),l.amt-=f,d.amt-=f,l.amt<e&&a++,d.amt<e&&c++}return i}function Pp(n){const e=Number(n)||0;return Math.abs(e)<100?0:Math.round(e/100)}function Ki(n,e){if(!n)return 0;const t=le(e),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return le(n.payer)===t?pn(n.amount):0;let s=0;for(const[i,a]of r)le(i)===t&&(s+=pn(a));return s}function Cp(n,e){return n&&le(n.payer)===le(e)?pn(n.amount):0}const Dp=(n,e)=>typeof n=="string"&&n.startsWith(e);function Vp({name:n,transactions:e=[],settlements:t=[],month:r}){const s=le(n);let i=0,a=0;for(const f of e)!f||!Dp(f.date,r)||(i+=Cp(f,s),a+=Ki(f,s));let c=0,l=0;for(const f of t){if(!f||f.status!=="verified"||f.month!==r)continue;const g=pn(f.amount);le(f.from)===s&&(c+=g),le(f.to)===s&&(l+=g)}const d=i-a+c-l;return{name:s,month:r,paid:i,share:a,sent:c,received:l,balance:d}}function Mp({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const{balances:s,warnings:i}=Iw({memberNames:n,transactions:e,settlements:t,month:r}),a=Aw(s),c=Object.keys(s).sort().map(l=>{const d=Vp({name:l,transactions:e,settlements:t,month:r}),f=Pp(s[l]);return{...d,balance:s[l],displayBalance:f,cleared:f===0}});return{month:r,balances:s,plan:a,warnings:i,members:c}}function jc({name:n,month:e,walletEntries:t=[],transactions:r=[],settlements:s=[]}){const i=le(n),a=new Set;let c=0,l=0;for(const m of t){if(!m||le(m.ownerName)!==i||!Dp(m.date||m.month,e))continue;const w=m.dedupKey||m.transRef;if(w){if(a.has(w))continue;a.add(w)}const R=pn(m.amount);R<=0||(m.type==="income"?c+=R:m.type==="expense"&&(l+=R))}const d=Vp({name:i,transactions:r,settlements:s,month:e}),f=d.share,g=l+f;return{name:i,month:e,income:c,personalExpense:l,groupShare:f,expenseTotal:g,net:c-g,receivedBack:d.received,paidBack:d.sent}}function Np(n){return(n||[]).map(e=>({from:e.from,to:e.to,amount:Math.round(e.amountSatang/100)})).filter(e=>e.amount>=1)}const Qi=Yh.map(n=>({key:n.key,label:n.label,icons:n.icons}));function Sw(n){const e=Qi.find(t=>t.icons.includes(n));return e?e.key:"other"}const bh=n=>String(n||"").slice(0,7);function wh({name:n,month:e,today:t="",members:r,transactions:s,settlements:i,walletItems:a=[]}){const c=le(n),l=Mp({memberNames:r,transactions:s,settlements:i,month:e}),d=jc({name:c,month:e,walletEntries:a.map(v=>({ownerName:c,type:v.type,amount:v.amount,date:v.date})),transactions:s,settlements:i}),f=Object.fromEntries(Qi.map(v=>[v.key,0])),g={},m={},w=(v,E,he,Ve,kt)=>{if(!Ve||!String(v).startsWith(e))return;f[Sw(he)]+=Ve;const nt=Number(String(v).slice(8,10));g[nt]=(g[nt]||0)+Ve,m[nt]||(m[nt]=[]),m[nt].push({desc:E||"ไม่ระบุ",icon:he,satang:Ve,kind:kt})};for(const v of s)!v||bh(v.date)!==e||w(v.date,v.desc,v.icon,Ki(v,c),"group");for(const v of a)v.type==="expense"&&w(v.date,v.desc,v.icon,Math.round(Number(v.amount)*100),"personal");const R=Object.values(f).reduce((v,E)=>v+E,0),D=Qi.map(v=>({key:v.key,label:v.label,satang:f[v.key],percent:R>0?Math.round(f[v.key]/R*100):0})).filter(v=>v.satang>0).sort((v,E)=>E.satang-v.satang),S=t.startsWith(e)?Number(t.slice(8,10)):Tr(e),M=[];for(let v=1;v<=S;v++)M.push({day:v,satang:g[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,items:m[v]||[]});const x=Tr(e),$=[];for(let v=1;v<=x;v++)$.push({day:v,date:`${e}-${String(v).padStart(2,"0")}`,satang:g[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,isFuture:t.startsWith(e)&&v>Number(t.slice(8,10)),items:m[v]||[]});const K=d.expenseTotal,J=S>0?Math.round(K/S/100):0,ee=Np(l.plan),T=ee.filter(v=>v.to===c).map(v=>({name:v.from,amount:v.amount})).sort((v,E)=>E.amount-v.amount),y=ee.filter(v=>v.from===c).map(v=>({name:v.to,amount:v.amount})).sort((v,E)=>E.amount-v.amount),b=T[0]?T[0].amount:0;T.forEach(v=>{v.share=b?Math.round(v.amount/b*100):0});const I=y[0]?y[0].amount:0;y.forEach(v=>{v.share=I?Math.round(v.amount/I*100):0});const A=[];for(const v of s){if(!v||bh(v.date)!==e)continue;const E=Ki(v,c);(E>0||Cp(v,c)>0)&&A.push({id:v.id,kind:"group",desc:v.desc||"",icon:v.icon,satang:E,date:v.date,ts:Number(v.timestamp)||0})}for(const v of a)String(v.date).startsWith(e)&&A.push({id:v.id,kind:v.type==="income"?"income":"personal",desc:v.desc||"",icon:v.icon,satang:Math.round(Number(v.amount)*100),date:v.date,ts:Number(v.timestamp)||0});return A.sort((v,E)=>E.date.localeCompare(v.date)||E.ts-v.ts),{month:e,incomeSat:d.income,spentSat:K,personalSat:d.personalExpense,groupShareSat:d.groupShare,netSat:d.net,net:Pp(d.net),spentPercent:d.income>0?Math.min(999,Math.round(K/d.income*100)):null,receivedBackSat:d.receivedBack,categories:D,daily:M,calendarDays:$,average:J,owedToMe:T,owedTotal:T.reduce((v,E)=>v+E.amount,0),iOwe:y,iOweTotal:y.reduce((v,E)=>v+E.amount,0),recent:A.slice(0,5),warnings:l.warnings}}function Th(n,e,t=""){const r=e.month,s={};for(const d of e.categories||[])s[d.key]=d.satang;const i=gw(_w(n||{},r),{totalSat:e.spentSat,cats:s}),a=(n&&n.goals||[]).map(d=>({...d,s:Rp(d,r)})),c=t.startsWith(r),l=c?Tr(r)-Number(t.slice(8,10))+1:0;return{month:r,status:i,goals:a,saving:kp(a,r),suggestSat:Ew(e.incomeSat,a,r),daysLeft:l,perDaySat:c&&i.leftSat>0&&l>0?Math.floor(i.leftSat/l/100)*100:0}}function Rw({me:n,month:e,today:t,group:r=[],personal:s=[],cards:i=[]}){const a=le(n),c=S=>Math.round((Number(S)||0)*100),l=[];for(const S of r){if(!S||S.active===!1)continue;const M=S.splits&&typeof S.splits=="object"?S.splits:{},x=Object.keys(M).find(K=>le(K)===a),$=le(S.payer);!x&&$!==a||l.push({id:"g:"+S.id,kind:"group",desc:String(S.desc||"บิลรายเดือน"),icon:S.icon||"",billingDay:Number(S.billingDay)||1,mySat:x?c(M[x]):0,totalSat:c(S.amount),payer:$,people:Object.keys(M).length,names:Object.keys(M).map(le),coverFor:!x,every:wr(S),startMonth:Gi(S)})}for(const S of s)!S||S.active===!1||l.push({id:"p:"+S.id,kind:"personal",desc:String(S.desc||"รายจ่ายรายเดือน"),icon:S.icon||"",billingDay:Number(S.billingDay)||1,mySat:c(S.amount),totalSat:c(S.amount),payer:a,people:1,coverFor:!1,every:wr(S),startMonth:Gi(S)});const d=(S,M)=>Math.min(Math.max(1,Math.round(M)||1),Tr(S)),f=(S,M)=>{const x=`${M}-${String(d(M,S.billingDay)).padStart(2,"0")}`,$=Math.round((Date.parse(x+"T00:00:00Z")-Date.parse(t+"T00:00:00Z"))/864e5);return{...S,date:x,day:Number(x.slice(8,10)),daysLeft:$,status:$<0?"done":$===0?"today":"soon"}},g=Pw(i,t),m=[...l.filter(S=>Ma(S,e)).map(S=>f(S,e)),...g.filter(S=>S.date.startsWith(e))].sort((S,M)=>S.day-M.day||S.desc.localeCompare(M.desc)),w=t.slice(0,7),R=[...[w,mt(w,1),mt(w,2)].flatMap(S=>l.filter(M=>Ma(M,S)).map(M=>f(M,S))),...g].filter(S=>S.daysLeft>=0).sort((S,M)=>S.daysLeft-M.daysLeft||M.mySat-S.mySat),D=m.filter(S=>S.kind!=="card");return{month:e,items:m,totalSat:D.reduce((S,M)=>S+M.mySat,0),dueSat:D.filter(S=>S.daysLeft>=0).reduce((S,M)=>S+M.mySat,0),upcoming:R}}function kw(n){const e=n&&n.bank&&n.bank!=="อื่นๆ"?n.bank:"บัตร";return n&&n.last4?`${e} •• ${n.last4}`:e}function ea(n){return`${Number(n.slice(8,10))} ${$n(n.slice(0,7))}`}function Pw(n,e){const t=[];for(const r of n||[]){const s=(i,a)=>{const c=Math.round((Date.parse(i.dueDate+"T00:00:00Z")-Date.parse(e+"T00:00:00Z"))/864e5);t.push({id:`c:${r.id}:${i.key}`,kind:"card",cardId:r.id,color:r.color,desc:kw(r),icon:"fa-credit-card",date:i.dueDate,day:Number(i.dueDate.slice(8,10)),billingDay:r.dueDay,daysLeft:c,status:c<0?"done":c===0?"today":"soon",mySat:Number(i.amountSat)||0,totalSat:Number(i.amountSat)||0,start:i.start,end:i.end,pending:a,people:1,coverFor:!1})};r.due&&!r.due.paid&&s(r.due,!1),r.open&&s(r.open,!0)}return t}function Cw(n,e){if(n.kind==="card")return n.pending?`ยังไม่ตัดรอบ (ตัดรอบ ${ea(n.end)})`:`ยอดรอบ ${ea(n.start)} - ${ea(n.end)}`;if(n.kind==="personal")return"ส่วนตัว";const t=n.payer===le(e);return n.coverFor?"คุณจ่ายแทน":t?`คุณจ่าย หาร ${n.people}`:`${n.payer} จ่าย หาร ${n.people}`}function Tr(n){const[e,t]=n.split("-").map(Number);return new Date(Date.UTC(e,t,0)).getUTCDate()}function mt(n,e){const[t,r]=n.split("-").map(Number),s=t*12+(r-1)+e,i=Math.floor(s/12);return`${i}-${String(s-i*12+1).padStart(2,"0")}`}const Vs=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],Dw=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];function Op(n){const[e,t]=n.split("-").map(Number);return`${Vs[t-1]} ${e+543}`}function $c(n){const[e,t]=n.split("-").map(Number);return`${Dw[t-1]} ${e+543}`}function ne(n,{decimals:e=0,sign:t=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return`${r<0?"-":t&&r>0?"+":""}฿${s}`}function Vw({name:n,months:e,transactions:t,settlements:r,walletItems:s=[]}){const i=le(n),a=s.map(c=>({ownerName:i,type:c.type,amount:c.amount,date:c.date}));return e.map(c=>{const l=jc({name:i,month:c,walletEntries:a,transactions:t,settlements:r});return{month:c,spentSat:l.expenseTotal,incomeSat:l.income}})}function Ih(n,e){return Array.from({length:e},(t,r)=>mt(n,r-(e-1)))}function $n(n){return Vs[Number(n.slice(5,7))-1]}function XT(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10?e.slice(0,6)+"XXXX":e.length===13?"X-XXXX-XXXXX-"+e.slice(11,13)+"-X":e}function Lp(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10||e.length===13?e:""}function YT(n,e){const t=Lp(n);return!t||!(Number(e)>0)?"":`https://promptpay.io/${t}/${Number(e).toFixed(2)}`}function Mw({name:n,month:e,members:t,transactions:r,settlements:s}){const i=le(n),a=Mp({memberNames:t,transactions:r,settlements:s,month:e}),c=Np(a.plan).map(f=>({from:f.from,to:f.to,amount:f.amount,role:f.from===i?"pay":f.to===i?"receive":"other"})),l={pay:0,receive:1,other:2};c.sort((f,g)=>l[f.role]-l[g.role]||g.amount-f.amount);const d=(s||[]).filter(f=>f&&f.status==="verified"&&f.month===e).map(f=>({id:f.id,from:f.from,to:f.to,amount:Number(f.amount)||0,manual:!!f.verifiedByAdmin,createdAt:f.createdAt||""})).sort((f,g)=>String(g.createdAt).localeCompare(String(f.createdAt)));return{lines:c,history:d,mineToPay:c.filter(f=>f.role==="pay"),mineToReceive:c.filter(f=>f.role==="receive"),cleared:c.length===0}}function Nw({name:n,month:e,walletItems:t,transactions:r,settlements:s}){const i=le(n),a=jc({name:i,month:e,walletEntries:t.map(l=>({ownerName:i,type:l.type,amount:l.amount,date:l.date})),transactions:r,settlements:s}),c=t.filter(l=>String(l.date).startsWith(e)).sort((l,d)=>d.date.localeCompare(l.date)||(Number(d.timestamp)||0)-(Number(l.timestamp)||0)).map(l=>({id:l.id,type:l.type==="income"?"income":"expense",desc:l.desc||"",amount:Number(l.amount)||0,date:l.date,icon:l.icon||"",card:l.card||"",unconfirmed:l.unconfirmed===!0,recurring:l.recurring===!0||String(l.id||"").startsWith("wsub_"),ts:Number(l.timestamp)||0}));return{incomeSat:a.income,personalSat:a.personalExpense,groupShareSat:a.groupShare,spentSat:a.expenseTotal,netSat:a.net,receivedBackSat:a.receivedBack,paidBackSat:a.paidBack,items:c}}function Ow({name:n,month:e,transactions:t,search:r=""}){const s=le(n),i=String(r||"").trim().toUpperCase(),a=t.filter(l=>l&&String(l.date||"").startsWith(e)).map(l=>({id:l.id,desc:l.desc||"",date:l.date,icon:l.icon||"",payer:l.payer||"",amountSat:Lw(l.amount),myShareSat:Ki(l,s),iPaid:le(l.payer)===s,people:Object.keys(l.splits||{}),type:l.paymentType||"normal",ts:Number(l.timestamp)||0})).filter(l=>!i||l.desc.toUpperCase().includes(i)||le(l.payer).includes(i)).sort((l,d)=>d.date.localeCompare(l.date)||d.ts-l.ts),c=a.filter(l=>l.myShareSat>0||l.iPaid);return{all:a,mine:c,totalSat:a.reduce((l,d)=>l+d.amountSat,0),myShareSat:c.reduce((l,d)=>l+d.myShareSat,0)}}const Lw=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},JT=Ji.map(n=>({key:n.key,label:n.label,fa:n.fa,icon:n.icon,group:n.group})),ZT=Cm;function xw({me:n,members:e,transactions:t,limit:r=6}){const s=le(n),i=new Set((e||[]).map(le)),a=new Map;for(const c of t||[]){const l=new Set(Object.keys(c&&c.splits||{}).map(le));l.add(le(c&&c.payer)),l.has(s)&&l.forEach(d=>{d&&d!==s&&i.has(d)&&a.set(d,(a.get(d)||0)+1)})}return[...a.entries()].sort((c,l)=>l[1]-c[1]||(c[0]<l[0]?-1:1)).slice(0,r).map(([c])=>c)}function Fw(n,e){const t=Math.round(Number(n)*100),r=e.length,s=Math.floor(t/r),i=t-s*r;return Object.fromEntries(e.map((a,c)=>[a,(s+(c<i?1:0))/100]))}function eI(n){const e=Math.round(Number(n.amount)*100)/100;if(!Number.isFinite(e)||e<=0)return{ok:!1,error:"ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"};if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date||""))return{ok:!1,error:"เลือกวันที่ให้ถูกต้อง"};if(n.today&&n.date>n.today)return{ok:!1,error:"เลือกวันที่ไม่เกินวันนี้"};const t=le(n.payer);if(!t)return{ok:!1,error:"เลือกคนจ่าย"};const r=[...new Set((n.participants||[]).map(le).filter(Boolean))];if(r.length===0)return{ok:!1,error:"เลือกคนหารอย่างน้อย 1 คน"};if(r.length===1&&r[0]===t)return{ok:!1,error:"บิลที่มีแต่ตัวเองคนเดียวไม่ต้องหาร ให้ใช้รายจ่ายส่วนตัวแทน"};let s;if(n.mode==="custom"){s={};let d=0;for(const g of r){const m=Math.round(Number((n.custom||{})[g])*100);if(!Number.isFinite(m)||m<=0)return{ok:!1,error:`ใส่ยอดของ ${g} ให้มากกว่า 0 (หรือเอาออกจากคนหาร)`};s[g]=m/100,d+=m}const f=Math.round(e*100)-d;if(f!==0)return{ok:!1,error:`ยอดที่แบ่งรวมกัน ${ne(d/100,{decimals:2})} ไม่เท่ายอดบิล ${ne(e,{decimals:2})} (${f>0?"ขาด":"เกิน"} ${ne(Math.abs(f)/100,{decimals:2})})`}}else{const d=r.includes(t)?[...r.filter(f=>f!==t),t]:r;s=Fw(e,d)}const i=String(n.desc||"").trim().slice(0,100)||"ไม่ระบุ",a=n.icon||"fa-money-bill",c=n.now||Date.now(),l={payer:t,icon:a};if(n.type==="installment"){const d=Number(n.installments);let f;try{f=fw({amount:e,installments:d,splits:s,date:n.date})}catch(m){return{ok:!1,error:m.message}}const g=`grp_${c}`;return{ok:!0,docs:f.map((m,w)=>({...l,date:m.date,desc:`${i} (${m.index}/${d})`,amount:m.amount,splits:m.splits,paymentType:"installment",groupId:g,timestamp:c+w})),template:null,summary:`ผ่อน ${d} งวด งวดละประมาณ ${ne(e/d,{decimals:2})}`}}if(n.type==="subscription"){const d=`sub_${c}`,f=n.recurring!==!1,g=[1,3,6,12].includes(Number(n.every))?Number(n.every):1,m={...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"subscription",subscriptionRecurring:f,subscriptionStartDate:n.date,groupId:d,timestamp:c},w=f?{desc:i,amount:e,payer:t,splits:s,icon:a,billingDay:Number(n.date.slice(8,10))||1,groupId:d,active:!0,createdAt:new Date(c),createdBy:t,lastGeneratedMonth:n.date.slice(0,7),every:g,startMonth:Number(n.date.slice(5,7))||1}:null,R=g===1?"ทุกเดือน":g===12?"ทุกปี":`ทุก ${g} เดือน`;return{ok:!0,docs:[m],template:w,summary:f?`สร้างซ้ำ${R}อัตโนมัติ`:"ครั้งเดียว"}}return{ok:!0,docs:[{...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"normal",timestamp:c}],template:null,summary:r.includes(t)?`หารกับเพื่อน ${r.length} คน (รวมผู้จ่าย)`:`จ่ายแทน ${r.length} คน (ไม่มีส่วนของผู้จ่าย)`}}const oi=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"list",label:"รายการ",icon:"list"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"me",label:"ฉัน",icon:"user"}],Uw=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];function xp({month:n,today:e}){if(!n)return null;const t=e&&e.startsWith(n),r=t?Number(e.slice(8,10)):Tr(n),[s,i]=n.split("-").map(Number),a=t?Uw[new Date(Date.UTC(s,i-1,r)).getUTCDay()]:"ทั้งเดือน";return h("span",{class:"dtile","aria-hidden":"true",children:[h("span",{class:"m",children:$n(n)}),h("span",{class:"d num",children:r}),h("span",{class:"w",children:a})]})}const Ah=["home","list","clear","me"];function jw({page:n,children:e}){const t=Gh(n),r=t.current;ye(()=>{t.current=n},[n]);const s=r===n?"":Ah.indexOf(n)>Ah.indexOf(r)?"dir-r":"dir-l";return h("div",{class:`page-swap ${s}`.trim(),children:e},n)}function $w({month:n,onChange:e,min:t,max:r}){return h("div",{class:"month-wrap",children:[n!==r&&h("button",{type:"button",class:"btn sm ghost",onClick:()=>e(r),children:"เดือนนี้"}),h("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[h("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=t,onClick:()=>e(mt(n,-1)),children:h(Y,{name:"left",size:16})}),h("span",{class:"num","aria-live":"polite",children:Op(n)}),h("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>e(mt(n,1)),children:h(Y,{name:"right",size:16})})]})]})}function Fp({icon:n,title:e,note:t}){return h("div",{class:"sec-t",children:[h("span",{class:"ico",children:h(Y,{name:n})}),h("div",{children:[h("h2",{children:e}),t&&h("p",{children:t})]})]})}function Bw(n){let e=0;for(const t of String(n||""))e=(e*31+t.codePointAt(0))%997;return e%5}const zw=({name:n,pictures:e={}})=>h("span",{class:"payer-av",title:`${n} จ่าย`,children:h(Bc,{name:n,pictureUrl:e[n],size:"xs"})}),qw=({payer:n,people:e=[],pictures:t={}})=>h("span",{class:"flow","aria-label":`${n} จ่าย หารกับ ${e.join(", ")}`,children:[h(zw,{name:n,pictures:t}),h(Y,{name:"right",size:12,class:"flow-arr"}),h(Na,{names:e,pictures:t,max:3,size:"xs"})]});function Na({names:n=[],pictures:e={},max:t=3,size:r="sm"}){const s=n.slice(0,t);return h("span",{class:"avstack","aria-hidden":"true",children:[s.map(i=>h(Bc,{name:i,pictureUrl:e[i],size:r},i)),n.length>t&&h("span",{class:"avstack-more num",children:["+",n.length-t]})]})}function Bc({name:n,pictureUrl:e,size:t=""}){const[r,s]=te(!1),i=[...String(n||"?")][0],a=`av tint${Bw(n)} ${t}`.trim();return e&&!r?h("img",{src:e,alt:n?`รูปของ ${n}`:"",class:a,onError:()=>s(!0),loading:"lazy"}):h("div",{class:a,"aria-hidden":"true",children:i})}function Ww(){const[n,e]=te(()=>{if(typeof document>"u")return"light";const s=localStorage.getItem("dm:theme");return s==="dark"||s==="light"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),t=()=>{const s=n==="dark"?"light":"dark";e(s),document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("dm:theme",s)}catch{}},r=n==="dark";return h("button",{type:"button",class:"theme-toggle","aria-label":r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",title:r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",onClick:t,children:h(Y,{name:r?"sun":"moon",size:18})})}function tI({label:n,value:e,options:t,onChange:r,icon:s="calendar",title:i,id:a}){const[c,l]=te(!1),d=(t||[]).find(f=>f.value===e)||t&&t[0]||{};return h("div",{class:"field",children:[n&&h("label",{for:a,children:n}),h("button",{type:"button",id:a,class:"c-select-trigger",onClick:()=>l(!0),"aria-haspopup":"dialog",children:[s&&h("span",{class:"ico sm",children:h(Y,{name:s,size:16})}),h("span",{class:"c-select-val num",children:d.label||e}),h(Y,{name:"down",size:16,class:"mute"})]}),c&&h(Up,{title:i||n||"เลือกรายการ",onClose:()=>l(!1),children:h("div",{class:"c-select-list",children:(t||[]).map(f=>{const g=f.value===e;return h("button",{type:"button",class:`c-select-item ${g?"on":""}`,onClick:()=>{r(f.value),l(!1)},children:[h("span",{class:"c-select-item-text num",children:f.label}),g&&h(Y,{name:"check",size:18,class:"rcv"})]},f.value)})})})]})}function Hw({value:n,max:e,today:t,onSelect:r,onClose:s}){const[i,a]=te(()=>(n||t).slice(0,7)),[c,l]=te(n||t),[d,f]=i.split("-").map(Number),g=Tr(i),m=new Date(Date.UTC(d,f-1,1)).getUTCDay(),w=[];for(let D=0;D<m;D++)w.push(null);for(let D=1;D<=g;D++)w.push(`${i}-${String(D).padStart(2,"0")}`);const R=["อา","จ","อ","พ","พฤ","ศ","ส"];return h(Up,{title:"ปฏิทิน",onClose:s,children:h("div",{class:"cal-box",children:[h("div",{class:"cal-hd",children:[h("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",onClick:()=>a(mt(i,-1)),children:h(Y,{name:"left",size:16})}),h("span",{class:"cal-month-title num",children:$c(i)}),h("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e&&mt(i,1).slice(0,7)>e.slice(0,7),onClick:()=>a(mt(i,1)),children:h(Y,{name:"right",size:16})})]}),h("div",{class:"cal-grid",role:"grid",children:[h("div",{class:"cal-dow-row",role:"row",children:R.map(D=>h("span",{class:"cal-dow",role:"columnheader",children:D},D))}),h("div",{class:"cal-days-grid",children:w.map((D,S)=>{if(!D)return h("span",{class:"cal-day empty"},`empty-${S}`);const M=Number(D.slice(8,10)),x=D===t,$=D===c,K=e&&D>e;return h("button",{type:"button",class:`cal-day-btn num ${$?"on":""} ${x?"today":""}`,disabled:K,onClick:()=>l(D),children:M},D)})})]}),h("div",{class:"cal-actions",children:[h("button",{type:"button",class:"btn ghost",onClick:()=>{l(t),a(t.slice(0,7))},children:"วันนี้"}),h("button",{type:"button",class:"btn",onClick:()=>r(c),children:["ยืนยัน (",Number(c.slice(8,10))," ",Vs[Number(c.slice(5,7))-1],")"]})]})]})})}function nI({id:n,label:e="วันที่",value:t,onChange:r,max:s,today:i}){const[a,c]=te(!1),[l,d,f]=i.split("-").map(Number),g=new Date(Date.UTC(l,d-1,f-1)),m=`${g.getUTCFullYear()}-${String(g.getUTCMonth()+1).padStart(2,"0")}-${String(g.getUTCDate()).padStart(2,"0")}`,w=t===i,R=t===m,[D,S,M]=(t||i).split("-").map(Number),x=D+543,$=Vs[S-1]||"",K=w?`วันนี้ · ${M} ${$} ${x}`:R?`เมื่อวาน · ${M} ${$} ${x}`:`${M} ${$} ${x}`;return h("div",{class:"field",children:[h("span",{class:"fl",id:`${n}-l`,children:e}),h("div",{class:"date-pick-wrap",children:[h("button",{type:"button",id:n,class:"date-trigger","aria-labelledby":`${n}-l`,onClick:()=>c(!0),children:[h("span",{class:"ico sm",children:h(Y,{name:"calendar",size:16})}),h("span",{class:"date-trigger-text num",children:K}),h("span",{class:"date-trigger-tag",children:"ปฏิทิน"})]}),h("div",{class:"date-quick-chips",children:[h("button",{type:"button",class:`date-quick-btn ${w?"on":""}`,onClick:()=>r(i),children:"วันนี้"}),h("button",{type:"button",class:`date-quick-btn ${R?"on":""}`,onClick:()=>r(m),children:"เมื่อวาน"}),h("button",{type:"button",class:`date-quick-btn ${!w&&!R?"on":""}`,onClick:()=>c(!0),children:"แก้ไขวันที่"})]})]}),a&&h(Hw,{value:t||i,max:s||i,today:i,onSelect:J=>{r(J),c(!1)},onClose:()=>c(!1)})]})}const Qr=[];function Up({title:n,onClose:e,children:t,as:r="div",onSubmit:s,action:i,class:a=""}){const c=Gh(null);return ye(()=>{const d=document.activeElement,f={};Qr.push(f);const g=R=>{R.key==="Escape"&&Qr[Qr.length-1]===f&&e()};document.addEventListener("keydown",g);const m=document.body.style.overflow;return document.body.style.overflow="hidden",(c.current&&c.current.querySelector("input, select, textarea")||c.current).focus({preventScroll:!0}),()=>{const R=Qr.indexOf(f);R>=0&&Qr.splice(R,1),document.removeEventListener("keydown",g),document.body.style.overflow=m,d&&d.focus&&d.focus({preventScroll:!0})}},[]),h("div",{class:"scrim",onClick:d=>d.target===d.currentTarget&&e(),children:h(r,{class:`sheet ${a}`.trim(),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:c,onSubmit:s,children:[h("div",{class:"grab","aria-hidden":"true"}),h("div",{class:"sheet-hd",children:[h("h2",{children:n}),i,h("button",{type:"button",class:"icon-btn",onClick:e,"aria-label":"ปิด",children:h(Y,{name:"close",size:18})})]}),t]})})}function rI({label:n,onConfirm:e,verb:t="ลบ",busyText:r="กำลังลบ",keepText:s="ยกเลิก",icon:i="trash",danger:a=!0}){const[c,l]=te("idle");return ye(()=>{if(c!=="confirm")return;const d=setTimeout(()=>l("idle"),5e3);return()=>clearTimeout(d)},[c]),c==="idle"?h("button",{type:"button",class:"icon-btn","aria-label":`${t} ${n}`,onClick:()=>l("confirm"),children:h(Y,{name:i,size:17})}):h("span",{class:"confirm",children:[h("button",{type:"button",class:`btn sm ${a?"danger":""}`,disabled:c==="busy",onClick:async()=>{l("busy");try{await e()}finally{l("idle")}},children:c==="busy"?r:t}),h("button",{type:"button",class:"btn sm ghost",disabled:c==="busy",onClick:()=>l("idle"),children:s})]})}function ot({load:n,name:e,fallback:t=null,...r}){const[s,i]=te(null);if(ye(()=>{let c=!0;return n().then(l=>{c&&l&&l[e]&&i({name:e,C:l[e]})}).catch(()=>{}),()=>{c=!1}},[e]),!s||s.name!==e)return t;const a=s.C;return h(a,{...r})}function sI({icon:n,title:e,summary:t,children:r,defaultOpen:s=!1}){const[i,a]=te(s);return h("section",{class:"card collapsible",children:[h("button",{type:"button",class:"coll-head","aria-expanded":i,onClick:()=>a(!i),children:[h("span",{class:"ico accent",children:h(Y,{name:n})}),h("span",{class:"grow",children:[h("b",{children:e}),h("small",{children:t})]}),h(Y,{name:"down",size:16,class:`coll-chev ${i?"up":""}`})]}),i&&h("div",{class:"coll-body",children:r})]})}function kn({blocks:n=3}){return h("div",{class:"home-grid","aria-busy":"true","aria-label":"กำลังโหลดข้อมูล",children:[h("div",{class:"col",children:Array.from({length:Math.ceil(n/2)},(e,t)=>h("div",{class:"card sk",style:{height:t===0?"168px":"220px"}},t))}),h("div",{class:"col",children:Array.from({length:Math.floor(n/2)},(e,t)=>h("div",{class:"card sk",style:{height:"200px"}},t))})]})}function Gw({onRetry:n}){return h("div",{class:"card state",role:"alert",children:[h("span",{class:"ico",children:h(Y,{name:"alert"})}),h("div",{children:[h("b",{children:"โหลดข้อมูลไม่สำเร็จ"}),h("p",{children:"ตรวจอินเทอร์เน็ตแล้วลองใหม่ ถ้ายังไม่ได้ อาจเป็นเพราะโควต้าฐานข้อมูลของวันนี้เต็ม"})]}),h("button",{type:"button",class:"btn sm",onClick:n,children:"ลองใหม่"})]})}function Kw({tab:n,onTab:e,userName:t,userPicture:r,tools:s,onAdd:i,children:a}){const c=(oi.find(l=>l.key===n)||oi[0]).label;return h("div",{class:"app",children:[h("a",{class:"skip",href:"#main",children:"ข้ามไปเนื้อหา"}),h("aside",{class:"side",children:[h("div",{class:"brand",children:[h(Wl,{size:34}),"Dept Money"]}),h("nav",{"aria-label":"เมนูหลัก",children:oi.map(l=>h("button",{type:"button",class:`snav ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[h(Y,{name:l.icon}),l.label]},l.key))}),h("button",{type:"button",class:"btn side-add",onClick:i,children:[h(Y,{name:"plus"}),"บันทึกรายการ"]}),h("div",{class:"side-me",children:[h(Bc,{name:t,pictureUrl:r}),h("span",{children:t})]})]}),h("main",{class:"page",id:"main",children:[h("header",{class:"top",children:[h("div",{class:"brand mobile-only","aria-hidden":"true",children:[h(Wl,{size:30}),"Dept Money"]}),h("h1",{class:"page-title",children:c}),h("div",{class:"top-actions",children:[s,h(Ww,{})]})]}),a]}),h("button",{type:"button",class:"fab",onClick:i,children:[h(Y,{name:"plus"}),"บันทึก"]}),h("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:h("div",{class:"tabbar-in",children:oi.map(l=>h("button",{type:"button",class:`tab ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[h(Y,{name:l.icon}),l.label]},l.key))})})]})}const Qw=Object.fromEntries(Qi.map(n=>[n.key,n.label])),jp={food:"food",bills:"bolt",goods:"bag",travel:"car",fun:"film",other:"dots"},Xw=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],Yw=["อา","จ","อ","พ","พฤ","ศ","ส"];function $p({percent:n,of:e="รายรับ",sub:t="ใช้ไปแล้ว"}){const s=2*Math.PI*42,i=Math.max(0,Math.min(100,n));return h("div",{class:"ring",role:"img","aria-label":`ใช้ไปแล้ว ${n}% ของ${e}`,children:[h("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[h("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),h("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--pay)","stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${s*i/100} ${s}`,transform:"rotate(-90 50 50)"})]}),h("div",{class:"ring-t",children:[h("b",{class:"num",children:[n,"%"]}),h("span",{children:t})]})]})}function Jw({m:n,bm:e,today:t,onBudget:r}){const s=e.status,i=s.leftSat<0;return h("section",{class:"card hero","aria-label":"สรุปเดือนเทียบงบ",children:[h("div",{class:"hero-l",children:[h("div",{class:"hero-top",children:[h(xp,{month:n.month,today:t}),h("div",{children:[h("p",{class:"lbl",children:i?"ใช้เกินงบแล้ว":"งบเหลือเดือนนี้"}),h("p",{class:"big num",children:ne(Math.round(Math.abs(s.leftSat)/100))})]})]}),h("div",{class:"chips",children:[h("button",{type:"button",class:"chip chip-btn",onClick:r,"aria-label":`งบ ${ne(s.budgetSat/100)} แตะเพื่อแก้งบ`,children:["งบ ",h("b",{class:"num",children:ne(s.budgetSat/100)})]}),h("span",{class:"chip",children:[h(Y,{name:"up",size:14,class:"pay"}),"ใช้ไป ",h("b",{class:"num",children:ne(s.spentSat/100)})]}),n.incomeSat>0&&h("span",{class:"chip",children:[h(Y,{name:"down",size:14,class:"rcv"}),"รายรับ ",h("b",{class:"num",children:ne(n.incomeSat/100)})]})]}),h("p",{class:"lbl hero-split",children:e.perDaySat>0?h(W,{children:["เหลืออีก ",e.daysLeft," วัน ใช้ได้วันละ ",h("b",{class:"num",children:ne(e.perDaySat/100)})]}):h(W,{children:["ส่วนตัว ",h("span",{class:"num",children:ne(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",h("span",{class:"num",children:ne(n.groupShareSat/100)})]})})]}),h($p,{percent:s.percent,of:"งบ",sub:"ของงบ"})]})}function Zw({m:n,onAddIncome:e,today:t="",bm:r=null,onBudget:s=null}){if(r&&r.status.set)return h(Jw,{m:n,bm:r,today:t,onBudget:s});const i=n.incomeSat>0,a=i&&n.netSat<0,c=i?a?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",l=i?Math.abs(n.netSat)/100:n.spentSat/100,d=!i||a?"pay":"rcv";return h("section",{class:"card hero","aria-label":"สรุปเดือน",children:[h("div",{class:"hero-l",children:[h("div",{class:"hero-top",children:[h(xp,{month:n.month,today:t}),h("div",{children:[h("p",{class:"lbl",children:c}),h("p",{class:`big num ${d}`,children:ne(Math.round(l))})]})]}),h("div",{class:"chips",children:[h("span",{class:"chip",children:[h(Y,{name:"down",size:14,class:"rcv"}),"รายรับ ",h("b",{class:"num",children:ne(n.incomeSat/100)})]}),h("span",{class:"chip",children:[h(Y,{name:"up",size:14,class:"pay"}),"ใช้ไป ",h("b",{class:"num",children:ne(n.spentSat/100)})]})]}),h("p",{class:"lbl hero-split",children:["ส่วนตัว ",h("span",{class:"num",children:ne(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",h("span",{class:"num",children:ne(n.groupShareSat/100)})]}),s&&h("button",{type:"button",class:"set-budget",onClick:s,children:[h(Y,{name:"plus",size:14}),"ตั้งงบเดือนนี้"]})]}),i?h($p,{percent:n.spentPercent}):h("button",{type:"button",class:"hint",onClick:e,children:[h(Y,{name:"plus",size:20}),"เพิ่มรายรับ",h("small",{children:"เพื่อดูว่าเหลือใช้เท่าไร"})]})]})}function eT({m:n,profiles:e=[],month:t="",nowMonth:r=""}){const s=Object.fromEntries((e||[]).map(l=>[l.name,l.pictureUrl])),i=n.owedToMe.map(l=>l.name),a=n.iOwe.map(l=>l.name),c=t&&r&&t!==r?` (${$n(t)})`:"";return h("div",{class:"owe-grid",children:[h("a",{class:"card owe-card",href:"#clear","aria-label":`เพื่อนค้างฉัน ${ne(n.owedTotal)}${i.length?" ได้แก่ "+i.join(", "):""}`,children:[h("span",{class:"owe-k",children:["เพื่อนค้างฉัน",c,h(Y,{name:"right",size:14})]}),h("b",{class:`owe-v num ${n.owedTotal>0?"rcv":""}`,children:ne(n.owedTotal)}),i.length>0?h(Na,{names:i,pictures:s}):h("span",{class:"owe-ok",children:[h(Y,{name:"check",size:14}),"ไม่มีใครค้าง"]})]}),h("a",{class:"card owe-card",href:"#clear","aria-label":`ฉันค้างเพื่อน ${ne(n.iOweTotal)}${a.length?" ได้แก่ "+a.join(", "):""}`,children:[h("span",{class:"owe-k",children:["ฉันค้างเพื่อน",c,h(Y,{name:"right",size:14})]}),h("b",{class:`owe-v num ${n.iOweTotal>0?"pay":""}`,children:ne(n.iOweTotal)}),a.length>0?h(Na,{names:a,pictures:s}):h("span",{class:"owe-ok",children:[h(Y,{name:"check",size:14}),"ไม่ค้างใคร"]})]})]})}function tT({sched:n,me:e,onOpen:t,onCard:r,pictures:s={}}){const i=n&&n.upcoming||[];if(!i.length)return null;const[a,...c]=i,l=R=>ne(R/100,{decimals:R%100?2:0}),d=R=>R.coverFor?l(R.totalSat):l(R.mySat),f=R=>`${Number(R.date.slice(8,10))} ${$n(R.date.slice(0,7))}`,g=R=>R.daysLeft===0?"วันนี้":`อีก ${R.daysLeft} วัน`,m=R=>R.kind==="card"&&r?()=>r(R.cardId):t,w=R=>R.kind==="card"?R.pending?"จ่ายบัตร (ยังไม่ตัดรอบ)":"ครบกำหนดจ่ายบัตร":"บิลถัดไป";return h("section",{class:"nb","aria-label":"บิลรายเดือนที่จะถึง",children:[h("button",{type:"button",class:"nb-main",onClick:m(a),"aria-label":`${w(a)} ${a.desc} ${d(a)} ${g(a)} แตะเพื่อเปิดปฏิทินบิล`,children:[a.daysLeft===0?h("span",{class:"nb-cal num","aria-hidden":"true",children:[h("span",{class:"band",children:"วันนี้"}),h("b",{children:Number(a.date.slice(8,10))}),h("small",{children:$n(a.date.slice(0,7))})]}):h("span",{class:"nb-count","aria-hidden":"true",children:[h("small",{children:"อีก"}),h("b",{class:"num",children:a.daysLeft}),h("small",{children:"วัน"})]}),h("span",{class:"nb-t",children:[h("small",{children:[w(a)," · ",a.daysLeft===0?a.kind==="card"?"วันนี้":"ตัดวันนี้":f(a),a.every>1&&h("span",{class:"nb-pill",children:Tw(a)})]}),h("b",{children:a.desc}),h("span",{class:"nb-amt num",children:[d(a),a.kind==="group"&&!a.coverFor&&h("em",{children:[" จาก ",l(a.totalSat)]})]}),a.kind==="group"?h("span",{class:"nb-flow",children:[h(qw,{payer:a.payer,people:a.names||[],pictures:s}),a.coverFor&&h("small",{children:"จ่ายแทน"})]}):h("small",{children:Cw(a,e)})]}),h(Y,{name:a.kind==="card"?"card":"calendar",size:18,class:"nb-ic"})]}),c.length>0&&h("div",{class:"nb-up",children:c.slice(0,2).map(R=>h("button",{type:"button",class:"nb-mini",onClick:m(R),children:[h("span",{class:"lbl",children:[f(R)," · ",g(R)]}),h("b",{children:R.desc}),h("span",{class:"num",children:[d(R),R.kind==="group"&&!R.coverFor&&h("em",{children:[" จาก ",l(R.totalSat)]})]})]},R.id+R.date))})]})}const Sh={near:"ใกล้เต็ม",over:"เกินงบ"};function nT({c:n,label:e}){const t=Math.max(n.spentSat>0?3:0,Math.min(100,n.percent));return h("li",{class:"cat",children:[h("span",{class:"ico big-ico",children:h(Y,{name:jp[n.key]||"dots"})}),h("div",{class:"cat-b",children:[h("div",{class:"cat-r",children:[h("span",{children:[e,Sh[n.level]&&h("span",{class:`lv-tag ${n.level}`,children:Sh[n.level]})]}),h("span",{class:"num",children:[h("b",{children:ne(n.spentSat/100)}),h("em",{children:["/ ",ne(n.budgetSat/100)]})]})]}),h("div",{class:`bar lv ${n.level}`,role:"img","aria-label":`ใช้ไป ${n.percent}% ของงบ${e}`,children:h("i",{style:{width:`${t}%`}})}),h("div",{class:"cat-s num",children:[h("span",{children:n.leftSat>=0?`เหลือ ${ne(n.leftSat/100)}`:`เกินงบ ${ne(-n.leftSat/100)}`}),h("span",{children:[n.percent,"%"]})]})]})]},n.key)}function rT({cats:n,bm:e=null,onBudget:t=null}){const r=e&&e.status.set?e.status.cats:[],s=new Set(r.map(f=>f.key)),i=n.filter(f=>!s.has(f.key));if(n.length===0&&r.length===0)return null;const a=n[0],c=f=>Qw[f]||f,l=r.length?`ตั้งงบไว้ ${r.length} หมวด`:a?`ส่วนใหญ่ไปกับ${a.label} ${a.percent}%`:"",d=i[0];return h("section",{class:"card",children:[h("div",{class:"sec-row",children:[h(Fp,{icon:"bag",title:"ใช้ไปกับอะไร",note:l}),e&&e.status.set&&t&&h("button",{type:"button",class:"link-btn",onClick:t,children:"แก้งบ"})]}),h("ul",{class:"cats",children:[r.map(f=>h(nT,{c:f,label:c(f.key)},f.key)),i.map(f=>h("li",{class:"cat",children:[h("span",{class:"ico big-ico",children:h(Y,{name:jp[f.key]||"dots"})}),h("div",{class:"cat-b",children:[h("div",{class:"cat-r",children:[h("span",{children:f.label}),h("span",{class:"num",children:[h("b",{children:[f.percent,"%"]}),h("em",{children:ne(f.satang/100)})]})]}),h("div",{class:"bar",children:h("i",{style:{width:`${Math.max(3,Math.round(f.percent/d.percent*100))}%`}})})]})]},f.key))]})]})}const Bp=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n)),sT=n=>ne(n/100,{decimals:2});function iT(n,e){if(!n||!e)return 0;const t=n/e;return t>.6?3:t>.25?2:1}function oT({month:n,days:e,onPick:t}){const[r,s]=n.split("-").map(Number),i=new Date(Date.UTC(r,s-1,1)).getUTCDay(),a=e.reduce((c,l)=>Math.max(c,l.satang),0);return h("div",{class:"sc-grid",role:"group","aria-label":`ปฏิทินรายจ่าย ${$c(n)}`,children:[Yw.map(c=>h("span",{class:"sc-dow","aria-hidden":"true",children:c},c)),Array.from({length:i},(c,l)=>h("span",{},`e${l}`)),e.map(c=>h("button",{type:"button",class:`sc-day h${iT(c.satang,a)} ${c.today?"today":""} ${c.satang>0&&c.satang===a?"peak":""}`,disabled:c.isFuture,onClick:()=>t(c.day),"aria-label":`วันที่ ${c.day} ใช้ไป ${c.satang>0?ne(c.satang/100):"0 บาท"}`,children:[h("span",{class:"num",children:c.day}),c.satang>0?h("small",{class:"num",children:Bp(c.satang/100)}):null]},c.day))]})}function aT({month:n,days:e,day:t,onDay:r}){const s=e.find(d=>d.day===t)||e[0];if(!s)return null;const[i,a]=n.split("-").map(Number),c=Xw[new Date(Date.UTC(i,a-1,s.day)).getUTCDay()],l=e.filter(d=>!d.isFuture).length;return h("div",{class:"sc-day-view",children:[h("div",{class:"sc-day-hd",children:[h("span",{class:"dtile sm","aria-hidden":"true",children:[h("span",{class:"m",children:$n(n)}),h("span",{class:"d num",children:s.day})]}),h("div",{class:"grow",children:[h("b",{children:[c," ",s.day," ",$n(n)]}),h("span",{class:"lbl",children:[s.items.length," รายการ"]})]}),h("b",{class:"num pay",children:ne(s.satang/100)})]}),h("div",{class:"sc-day-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"วันก่อนหน้า",disabled:s.day<=1,onClick:()=>r(s.day-1),children:h(Y,{name:"left",size:16})}),h("span",{class:"lbl",children:"เลื่อนดูวันอื่น"}),h("button",{type:"button",class:"icon-btn","aria-label":"วันถัดไป",disabled:s.day>=l,onClick:()=>r(s.day+1),children:h(Y,{name:"right",size:16})})]}),s.items.length===0?h("p",{class:"empty",children:[h(Y,{name:"check",size:16,class:"rcv"}),"ไม่มีรายจ่ายในวันนี้"]}):h("ul",{class:"plain",children:s.items.map((d,f)=>h("li",{class:"row",children:[h(Fm,{desc:d.desc,name:Nm(d.icon),size:36,iconSize:18}),h("div",{class:"grow",children:[h("div",{class:"t",children:d.desc||"ไม่ระบุ"}),h("div",{class:"s",children:d.kind==="group"?"ส่วนของฉันในกลุ่ม":"ส่วนตัว"})]}),h("span",{class:"num pay",children:sT(d.satang)})]},f))})]})}function cT({year:n,series:e,since:t,nowMonth:r,onPick:s}){const i=Object.fromEntries((e||[]).map(l=>[l.month,l.spentSat])),a=Array.from({length:12},(l,d)=>{const f=`${n}-${String(d+1).padStart(2,"0")}`,g=f>=t&&f<=r;return{key:f,label:Vs[d],inRange:g,sat:g&&i[f]||0}}),c=a.reduce((l,d)=>Math.max(l,d.sat),0);return h("div",{class:"sc-year",children:a.map(l=>h("button",{type:"button",class:`sc-mon ${l.key===r?"cur":""}`,disabled:!l.inRange,onClick:()=>s(l.key),"aria-label":`${Op(l.key)} ใช้ไป ${l.inRange?ne(l.sat/100):"ไม่มีข้อมูล"}`,children:[h("small",{children:l.label}),h("b",{class:"num",children:l.inRange?Bp(l.sat/100):"-"}),h("i",{style:{width:`${l.inRange&&c>0?Math.max(4,Math.round(l.sat/c*100)):0}%`}})]},l.key))})}function lT({model:n,month:e,onMonth:t,since:r,nowMonth:s,series:i,onNeedYear:a=()=>{}}){const[c,l]=te("month"),[d,f]=te(1);ye(()=>{c==="year"&&a()},[c]);const g=n.calendarDays||[],m=Number(e.slice(0,4)),w=g.reduce((T,y)=>y.satang>(T?T.satang:0)?y:T,null),R=T=>{const y=mt(e,T);y>=r&&y<=s&&t(y)},D=T=>{const y=e.slice(5,7);let b=`${m+T}-${y}`;b<r?b=r:b>s&&(b=s),t(b)},S=r<`${m}-01`,M=`${m+1}-01`<=s,x=(i||[]).filter(T=>T.month.startsWith(String(m))).reduce((T,y)=>T+y.spentSat,0),$=(i||[]).filter(T=>T.month.startsWith(String(m))&&T.month>=r&&T.month<=s).length;function K(T){f(T),l("day")}function J(T){t(T),l("month")}function ee(T){if(T==="day"&&c!=="day"){const y=g.find(b=>b.today);f(y?y.day:w?w.day:1)}l(T)}return h("section",{class:"card sc","aria-label":"ปฏิทินรายจ่าย",children:[h(Fp,{icon:"calendar",title:"ใช้ไปเท่าไร",note:"รวมรายจ่ายส่วนตัวและส่วนของฉันในกลุ่ม"}),h("div",{class:"seg sc-seg",role:"group","aria-label":"ดูเป็น",children:[["day","วัน"],["month","เดือน"],["year","ปี"]].map(([T,y])=>h("button",{type:"button",class:c===T?"on":"","aria-pressed":c===T,onClick:()=>ee(T),children:y},T))}),c==="year"?h(W,{children:[h("div",{class:"sc-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"ปีก่อนหน้า",disabled:!S,onClick:()=>D(-1),children:h(Y,{name:"left",size:16})}),h("b",{class:"num",children:["ปี ",m+543]}),h("button",{type:"button",class:"icon-btn","aria-label":"ปีถัดไป",disabled:!M,onClick:()=>D(1),children:h(Y,{name:"right",size:16})})]}),i?h(W,{children:[h("div",{class:"sc-sum",children:[h("div",{children:[h("span",{class:"lbl",children:"ใช้ไปทั้งปี"}),h("b",{class:"num pay",children:ne(x/100)})]}),h("div",{children:[h("span",{class:"lbl",children:"เฉลี่ยต่อเดือน"}),h("b",{class:"num",children:ne($>0?x/100/$:0)})]})]}),h(cT,{year:m,series:i,since:r,nowMonth:s,onPick:J})]}):h("p",{class:"empty","aria-busy":"true",children:"กำลังโหลดข้อมูลทั้งปี"})]}):h(W,{children:[h("div",{class:"sc-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",disabled:e<=r,onClick:()=>R(-1),children:h(Y,{name:"left",size:16})}),h("b",{class:"num",children:$c(e)}),h("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e>=s,onClick:()=>R(1),children:h(Y,{name:"right",size:16})})]}),c==="month"?h(W,{children:[h("div",{class:"sc-sum",children:[h("div",{children:[h("span",{class:"lbl",children:"ใช้ไปทั้งเดือน"}),h("b",{class:"num pay",children:ne(n.spentSat/100)})]}),h("div",{children:[h("span",{class:"lbl",children:"เฉลี่ยต่อวัน"}),h("b",{class:"num",children:ne(n.average)})]})]}),h(oT,{month:e,days:g,onPick:K}),w?h("p",{class:"lbl sc-foot",children:["ใช้มากสุดวันที่ ",w.day," (",ne(w.satang/100),") แตะวันเพื่อดูรายการ"]}):h("p",{class:"lbl sc-foot",children:"ยังไม่มีรายจ่ายในเดือนนี้"})]}):h(aT,{month:e,days:g,day:d,onDay:f})]})]})}function uT({model:n,series:e,month:t,onMonth:r,onAddIncome:s,profiles:i=[],today:a="",nowMonth:c="",since:l="",onNeedYear:d,bm:f=null,onBudget:g=null,bills:m=null,me:w="",onBills:R=()=>{},onCard:D=null}){const S=c||t;return h("div",{class:"home-grid",children:[h("div",{class:"col",children:[h(Zw,{m:n,onAddIncome:s,today:a,bm:f,onBudget:g}),h(eT,{m:n,profiles:i,month:t,nowMonth:S}),t===S&&h(tT,{sched:m,me:w,onOpen:R,onCard:D,pictures:Object.fromEntries((i||[]).map(M=>[M.name,M.pictureUrl]))}),h(rT,{cats:n.categories,bm:f,onBudget:g})]}),h("div",{class:"col",children:h(lT,{model:n,month:t,onMonth:r,since:l||mt(S,-11),nowMonth:S,series:e,onNeedYear:d})})]})}const Rh=()=>N(()=>import("./add-C51htztA.js"),__vite__mapDeps([0,1])),kh=()=>N(()=>import("./ClearPage-D3s0LLKo.js"),[]),Ph=()=>N(()=>import("./ListPage-DuqcZwif.js"),__vite__mapDeps([2,1])),Ch=()=>N(()=>import("./MePage-CLUCOnU9.js"),__vite__mapDeps([3,4,5])),Dh=()=>N(()=>import("./onboard-BSIQPxu8.js"),[]),ta=()=>N(()=>import("./plan-D6QxjyGF.js"),[]),hT=()=>N(()=>import("./billcal-Ct10ynX5.js"),[]),Vh=()=>N(()=>import("./cards-Cob0WFUu.js"),[]),wt=Tp();function Xr(){const n=new URLSearchParams(location.search).get("liff.state")||"";return(location.hash||(n.includes("#")?n.slice(n.indexOf("#")):"")).slice(1)}function Yr(n){const e=/^(edit|split|choose)=([A-Za-z0-9_-]{1,100})$/.exec(String(n||""));return e?{kind:e[1],id:e[2]}:null}function ir(n){const e=/^card=([A-Za-z0-9_-]{1,60})$/.exec(String(n||""));return e?e[1]:""}const Mh=yp().slice(0,7),Nh=12,dT=["home","list","clear","me"],ai=n=>n==="bills"||n==="wallet"?"list":dT.includes(n)?n:"home";function fT(){const[n,e]=te(wt?{state:"ok",user:wt}:{state:"loading"}),[t,r]=te(()=>{const P=Xr();return Yr(P)?"list":ir(P)?"me":ai(P)}),[s,i]=te(()=>Yr(Xr())),[a,c]=te(null),[l,d]=te(null),f=Qe(()=>yp(),[]),g=f.slice(0,7),m=Qe(()=>mt(g,-11),[g]),[w,R]=te(g),[D,S]=te(()=>wt?zb():null),[M,x]=te(()=>{const P=wt?$b(wt.name,Mh):null;return P?{[Mh]:P}:{}}),[$,K]=te(!1),[J,ee]=te(null),[T,y]=te(""),[b,I]=te(null),[A,v]=te(()=>wt&&Xr()==="add"?"menu":null),[E,he]=te(""),[Ve,kt]=te(0),[nt,Kt]=te(!1),[Qt,Ms]=te(!1),[Vr,ft]=te(!!wt),[pe,Mr]=te(null),[lt,So]=te(null),[Hn,Ns]=te(!1),[$e,Xt]=te(null),[Me,rt]=te(()=>{const P=ir(Xr());return P?{kind:"detail",id:P}:null}),[st,ut]=te(null),En=P=>{if(P.needLogin){Kt(!0);return}wt&&!P.needLink&&P.memberId!==wt.memberId&&(Da(),x({}),S(null),ee(null)),P.needLink?e({state:"link",profile:P.profile,candidates:P.candidates,suggest:P.suggest||""}):!P.isAdmin&&(!P.realName||!Lp(P.promptpay))?e({state:"onboard",user:P}):e(U=>U.state==="ok"&&JSON.stringify(U.user)===JSON.stringify(P)?U:{state:"ok",user:P}),P.needLink||jb(P)},Gn=(P,U)=>x(q=>({...q,[P]:{...q[P]||{},...U}}));ye(()=>{xb().then(P=>{if(!P)return;En(P);const U=Xr();if(U==="add"){v("menu"),r("home");try{history.replaceState(null,"",location.pathname+"#home")}catch{}}else Yr(U)?(i(Yr(U)),r("list")):ir(U)?(rt({kind:"detail",id:ir(U)}),r("me")):U&&["home","list","bills","wallet","clear","me"].includes(U)&&r(ai(U))}).catch(P=>{wt?console.warn("signIn:",P.message):e({state:"error",message:P.message})})},[]),ye(()=>{kb(()=>Kt(!0))},[]),ye(()=>{const P=()=>{const U=location.hash.slice(1),q=Yr(U);q?(i(q),r("list")):ir(U)?(rt({kind:"detail",id:ir(U)}),r("me")):r(ai(U))};return addEventListener("hashchange",P),()=>removeEventListener("hashchange",P)},[]),ye(()=>{n.state==="ok"&&qb().then(S).catch(()=>K(!0))},[n.state,Ve]),ye(()=>{n.state!=="ok"||!["home","list","clear","me"].includes(t)||J||dh().then(ee).catch(()=>K(!0))},[n.state,t,J]),ye(()=>{n.state==="ok"&&Xb().then(Mr).catch(P=>{P.expired||console.warn("loadPlan:",P.message),Mr(U=>U||{budget:{total:0,cats:{}},months:{},goals:[]})})},[n.state,Ve]),ye(()=>{n.state!=="ok"||t!=="home"||lw().then(So).catch(P=>console.warn("loadBillSchedule:",P&&P.message))},[n.state,t,Ve]);const Os=J&&n.state==="ok"?J.find(P=>P.id===n.user.memberId||(P.ids||[]).includes(n.user.memberId))||J.find(P=>P.name===n.user.name):null,Ls=!!(Os&&Os.cardAlerts);ye(()=>{if(!(n.state!=="ok"||!J||!["home","me"].includes(t))){if(!Ls){Xt({enabled:!1,cards:[]});return}hh().then(Xt).catch(P=>{P.expired||console.warn("loadCards:",P&&P.message)})}},[n.state,t,Ve,Ls,!!J]),ye(()=>{if(n.state==="ok")return Hb(g,P=>{P.error?K(!0):Gn(g,P)})},[n.state,g]);const Pt=Qe(()=>[...new Set([...Qt?Ih(g,Nh):[],w])].filter(P=>P!==g),[g,w,Qt]);ye(()=>{if(n.state!=="ok")return;const P=[g,...Pt.filter(U=>!(M[U]&&M[U].wallet))];Kb(P,g).then(U=>Object.entries(U).forEach(([q,Dt])=>Gn(q,{wallet:Dt}))).catch(U=>{U.expired||he(U.message)})},[n.state,g,Ve,Pt.filter(P=>!(M[P]&&M[P].wallet)).join("|")]),ye(()=>{n.state==="ok"&&Pt.forEach(P=>{M[P]&&M[P].transactions||Wb(P).then(U=>Gn(P,{transactions:U.transactions,settlements:U.settlements})).catch(()=>K(!0))})},[n.state,Pt,Pt.filter(P=>!(M[P]&&M[P].transactions)).join("|")]);const vt=M[g];ye(()=>{n.state==="ok"&&vt&&vt.transactions&&vt.settlements&&vt.wallet&&Bb(n.user.name,g,vt)},[vt]),ye(()=>{if(n.state!=="ok")return;const U=(window.requestIdleCallback||(q=>setTimeout(q,1500)))(()=>{[Ph,kh,Ch,Rh].forEach(q=>q().catch(()=>{}))});return()=>{window.cancelIdleCallback?window.cancelIdleCallback(U):clearTimeout(U)}},[n.state]),ye(()=>{if(E){const P=setTimeout(()=>he(""),3200);return()=>clearTimeout(P)}},[E]);const Kn=P=>M[P]&&M[P].transactions&&M[P].settlements&&M[P].wallet,bn=n.state==="ok"&&D&&Kn(g)&&Kn(w);ye(()=>{bn&&ft(!0)},[bn]),ye(()=>{if(Vr)return;const P=setTimeout(()=>ft(!0),12e3);return()=>clearTimeout(P)},[Vr]);const Qn=bn&&Pt.every(Kn),Z=Qe(()=>{if(!bn)return null;const P=Object.values(M);return{transactions:P.flatMap(U=>U.transactions||[]),settlements:P.flatMap(U=>U.settlements||[]),wallet:P.flatMap(U=>U.wallet||[])}},[bn,M]),Nr=Qe(()=>Z&&D?xw({me:n.user.name,members:D,transactions:Z.transactions}):[],[Z,n,D]),ge=Qe(()=>Z?wh({name:n.user.name,month:w,today:f,members:D,transactions:Z.transactions,settlements:Z.settlements,walletItems:Z.wallet}):null,[Z,n,D,w,f]),Ne=Qe(()=>Z&&Qt&&Qn?Vw({name:n.user.name,months:Ih(g,Nh),transactions:Z.transactions,settlements:Z.settlements,walletItems:Z.wallet}):null,[Z,Qt,Qn,n,g]),wn=Qe(()=>Z?Mw({name:n.user.name,month:w,members:D,transactions:Z.transactions,settlements:Z.settlements}):null,[Z,n,D,w]),Yt=Qe(()=>Z?Nw({name:n.user.name,month:w,walletItems:Z.wallet,transactions:Z.transactions,settlements:Z.settlements}):null,[Z,n,w]),Xn=Qe(()=>Z?w===g?ge:wh({name:n.user.name,month:g,today:f,members:D,transactions:Z.transactions,settlements:Z.settlements,walletItems:Z.wallet}):null,[Z,ge,w,g]),Ro=Qe(()=>pe&&ge?Th(pe,ge,f):null,[pe,ge,f]),Ct=Qe(()=>pe&&Xn?Th(pe,Xn,f):null,[pe,Xn,f]),xs=Qe(()=>lt&&n.state==="ok"?Rw({me:n.user.name,month:g,today:f,group:lt.group,personal:lt.personal,cards:$e&&$e.enabled?$e.cards:[]}):null,[lt,n,g,f,$e]),Yn=(P,U)=>P.then(()=>hh({force:!0})).then(q=>(Xt(q),U&&he(U),q)),Tn=Me&&Me.kind==="detail"&&$e?$e.cards.find(P=>P.id===Me.id):null;ye(()=>{if(Me&&Me.kind==="detail"&&$e&&!Tn&&(rt(null),he($e.enabled?"ไม่พบบัตรนี้ (อาจถูกลบไปแล้ว)":"ผู้ดูแลยังไม่ได้เปิดเตือนบัตรเครดิตให้คุณ")),Me&&Me.kind==="detail"&&$e)try{history.replaceState(null,"",location.pathname+"#me")}catch{}},[Me,$e]);const Jn=(P,U)=>P.then(q=>(Mr(q),U&&he(U),q)),Fs=Qe(()=>Z?Ow({name:n.user.name,month:w,transactions:Z.transactions,search:T}):null,[Z,n,w,T]),Et=(P=w)=>{Sp(P),P===g?kt(U=>U+1):x(U=>{const q={...U};return delete q[P],q})},Zn=P=>{I({amount:P.amount,desc:P.desc,date:P.date,icon:P.icon,convertId:P.id,month:String(P.date).slice(0,7)}),v("bill")};ye(()=>{if(!s||!Z)return;let P=!0;const U=Z.wallet.find(q=>q.id===s.id);return(U?Promise.resolve(U):aw(s.id)).then(q=>{if(P){if(!q){he("ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");return}s.kind==="split"&&q.type!=="income"?Zn(q):s.kind==="choose"&&q.type!=="income"?d(q):(r("list"),c({...q}))}}).catch(q=>{P&&!q.expired&&he(q.message)}).finally(()=>{if(P){i(null);try{history.replaceState(null,"",location.pathname+"#list")}catch{}}}),()=>{P=!1}},[s,!!Z]);const Or=()=>{Da(),x({}),S(null),K(!1),kt(P=>P+1)};if(n.state==="loading")return h("div",{class:"center",children:h(Gr,{label:"กำลังเข้าสู่ระบบ"})});if(n.state==="error")return h("div",{class:"center",children:[h(Gr,{}),h("p",{role:"alert",children:n.message}),h("button",{type:"button",class:"btn",onClick:()=>location.reload(),children:"ลองใหม่"})]});if(n.state==="link")return h(ot,{load:Dh,name:"LinkPage",profile:n.profile,candidates:n.candidates,suggest:n.suggest,onDone:En,fallback:h("div",{class:"center",children:h(Gr,{})})});if(n.state==="onboard")return h(ot,{load:Dh,name:"OnboardPage",user:n.user,onDone:En,fallback:h("div",{class:"center",children:h(Gr,{})})});if(!Vr&&!$)return h("div",{class:"center",children:h(Gr,{label:"กำลังโหลดข้อมูล"})});const In=P=>{location.hash=P,r(P),window.scrollTo(0,0)},bt=ai(t),er=bt!=="me";let Je;return er&&$?Je=h(Gw,{onRetry:Or}):bt==="home"?Je=ge?h(uT,{model:ge,series:Ne,month:w,onMonth:R,onAddIncome:()=>v("income"),profiles:J||[],today:f,nowMonth:g,since:m,onNeedYear:()=>Ms(!0),bm:Ro,onBudget:pe?()=>ut({kind:"budget"}):null,bills:xs,me:n.user.name,onBills:()=>Ns(!0),onCard:P=>rt({kind:"detail",id:P})}):h(kn,{blocks:5}):bt==="list"?Je=Fs&&Yt?h(ot,{load:Ph,name:"ListPage",fallback:h(kn,{blocks:3}),pictures:Object.fromEntries((J||[]).map(P=>[P.name,P.pictureUrl])),bills:Fs,wallet:Yt,month:w,today:f,search:T,onSearch:y,me:n.user.name,isAdmin:n.user.isAdmin,version:Ve,openEdit:a,onSplit:Zn,onChanged:()=>Et(),onError:he,onInfo:he}):h(kn,{blocks:3}):bt==="clear"?Je=wn&&J?h(ot,{load:kh,name:"ClearPage",fallback:h(kn,{blocks:2}),model:wn,profiles:J,month:w,back:Yt?{receivedSat:Yt.receivedBackSat,paidSat:Yt.paidBackSat}:null,onChanged:()=>Et(),isAdmin:n.user.isAdmin,adminName:n.user.name,onError:he,onInfo:he}):h(kn,{blocks:2}):Je=J?h(ot,{load:Ch,name:"MePage",fallback:h(kn,{blocks:2}),auth:n,profiles:J,onSaved:()=>ee(null),onRefresh:Or,onMembers:()=>{dh().then(ee).catch(()=>ee(null)),kt(P=>P+1)},onToast:he,transactions:Z?Z.transactions:[],onDataChanged:P=>Et(P),bm:Ct,onBudget:()=>ut({kind:"budget"}),onGoalAdd:()=>ut({kind:"goal"}),onGoalMove:(P,U)=>ut({kind:"move",goal:P,dir:U}),onGoalEdit:P=>ut({kind:"goal",goal:P}),cards:$e,onCardAdd:()=>rt({kind:"add"}),onCardOpen:P=>rt({kind:"detail",id:P.id})}):h(kn,{blocks:2}),h(W,{children:[nt&&h("div",{class:"login-banner",role:"alert",children:[h("span",{children:["เซสชัน LINE หมดอายุ ยังดูข้อมูลที่จำไว้ได้ แต่ข้อมูลกระเป๋าและการบันทึกต้องเข้าสู่ระบบใหม่",uh()&&h("small",{class:"diag",children:uh()})]}),h("button",{type:"button",class:"btn sm",onClick:Pb,children:"เข้าสู่ระบบใหม่"})]}),h(Kw,{tab:bt,onTab:In,userName:n.user.name,userPicture:n.user.pictureUrl,onAdd:()=>v("menu"),tools:er&&h($w,{month:w,onChange:R,min:m,max:g}),children:h(jw,{page:bt,children:Je})}),A&&h(ot,{load:Rh,name:"AddSheet",initial:A==="income"?"income":A==="bill"?"bill":null,prefill:b,convertWallet:fh,today:f,members:D||[],me:n.user.name,suggested:Nr,save:ow,saveBill:ph,onClose:()=>{v(null),I(null)},onSaved:(P,U=[])=>{he(P),U.forEach(q=>Et(q)),kt(q=>q+1)}}),l&&h(ot,{load:()=>N(()=>import("./editbill-CESfAeep.js"),__vite__mapDeps([6,1])),name:"ChooseSheet",item:l,members:D||[],me:n.user.name,suggested:Nr,today:f,saveBill:ph,removeWallet:fh,onClose:()=>d(null),onConfirmed:()=>Et(String(l.date).slice(0,7)),onDone:(P,U=[])=>{he(P),U.forEach(q=>Et(q)),kt(q=>q+1)},onMoreSplit:P=>{d(null),Zn(P)}}),Me&&(Me.kind==="add"||Me.kind==="edit")&&h(ot,{load:Vh,name:"CardEditSheet",card:Me.card||null,onClose:()=>rt(null),onSave:P=>Yn(rw(P),P.id?"แก้บัตรแล้ว":"เพิ่มบัตรแล้ว"),onDelete:P=>Yn(sw(P),"ลบบัตรแล้ว")}),Tn&&h(ot,{load:Vh,name:"CardDetailSheet",card:Tn,onClose:()=>rt(null),onEdit:P=>rt({kind:"edit",card:P}),onPaid:(P,U,q)=>Yn(iw(P,U,q),U?"จ่ายแล้ว ไม่เตือนรอบนี้อีก":"ยกเลิก จ่ายแล้ว").catch(Dt=>he(Dt.message))}),Hn&&lt&&h(ot,{load:hT,name:"BillCalendarSheet",data:{...lt,cards:$e&&$e.enabled?$e.cards:[]},pictures:Object.fromEntries((J||[]).map(P=>[P.name,P.pictureUrl])),me:n.user.name,today:f,onClose:()=>Ns(!1)}),st&&st.kind==="budget"&&h(ot,{load:ta,name:"BudgetSheet",plan:pe,nowMonth:g,suggestSat:Ct?Ct.suggestSat:0,onClose:()=>ut(null),onSave:P=>Jn(Yb(P),P.clear?"กลับไปใช้งบปกติแล้ว":"บันทึกงบแล้ว")}),st&&st.kind==="move"&&h(ot,{load:ta,name:"GoalMoveSheet",goal:st.goal,dir:st.dir,month:g,onClose:()=>ut(null),onMove:(P,U,q)=>Jn(Zb(P,U,q),q==="out"?"ถอนออกจากเป้าแล้ว":"เก็บเข้าเป้าแล้ว")}),st&&st.kind==="goal"&&h(ot,{load:ta,name:"GoalEditSheet",goal:st.goal||null,nowMonth:g,onClose:()=>ut(null),onSave:P=>Jn(Jb(P),P.id?"แก้เป้าแล้ว":"เพิ่มเป้าแล้ว"),onDelete:P=>Jn(ew(P),"ลบเป้าแล้ว")}),E&&h("div",{class:"toast",role:"status",children:E})]})}bm(h(fT,{}),document.getElementById("app"));export{Wl as $,Bc as A,JT as B,$n as C,nI as D,Nm as E,hw as F,zw as G,fh as H,Y as I,$T as J,RT as K,ot as L,jT as M,cw as N,Qb as O,qw as P,PT as Q,TT as R,Up as S,Qe as T,sI as U,QT as V,xT as W,qT as X,LT as Y,BT as Z,N as _,Fm as a,gT as a0,mt as a1,Yh as a2,WT as a3,HT as a4,Rp as a5,yw as a6,Rw as a7,$c as a8,Cw as a9,ea as aa,kw as ab,ET as ac,uw as ad,kT as ae,wT as af,Qi as ag,GT as ah,KT as ai,ww as aj,Ma as ak,tI as al,UT as am,CT as an,AT as ao,VT as ap,DT as aq,IT as ar,yT as as,vT as at,km as b,ne as c,te as d,Fw as e,W as f,eI as g,ZT as h,xp as i,yp as j,Fp as k,rI as l,Op as m,OT as n,Ih as o,NT as p,MT as q,FT as r,YT as s,XT as t,h as u,Lp as v,zT as w,ye as x,ST as y,bT as z};
