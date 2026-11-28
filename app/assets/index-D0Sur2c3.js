const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-5A5eUQgM.js","assets/payfrom-BnZdx0Zb.js","assets/itemsplit-Dz84TFPu.js","assets/ListPage-CE5OJAA3.js","assets/MePage-Di-D8ul9.js","assets/plan-D6DBXm7D.js","assets/cards-CZSjDZQF.js","assets/editbill-C7VZ2NqR.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Mm="modulepreload",Vm=function(n){return"/app/"+n},Yl={},V=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=Vm(l),l in Yl)return;Yl[l]=!0;const d=l.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Mm,d||(g.as="script"),g.crossOrigin="",g.href=l,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((m,E)=>{g.addEventListener("load",m),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var yo,pe,rd,hn,Jl,sd,id,aa,Ri,ws,od,ic,Ta,Ia,Bi={},$i=[],Nm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,vo=Array.isArray;function jt(n,e){for(var t in e)n[t]=e[t];return n}function oc(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Om(n,e,t){var r,s,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?yo.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return ki(n,a,r,s,null)}function ki(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++rd,__i:-1,__u:0};return s==null&&pe.vnode!=null&&pe.vnode(i),i}function K(n){return n.children}function Pi(n,e){this.props=n,this.context=e}function Wn(n,e){if(e==null)return n.__?Wn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Wn(n):null}function Lm(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],s=[],i=jt({},e);i.__v=e.__v+1,pe.vnode&&pe.vnode(i),ac(n.__P,i,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Wn(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,hd(r,i,s),e.__e=e.__=null,i.__e!=t&&ad(i)}}function ad(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),ad(n)}function Zl(n){(!n.__d&&(n.__d=!0)&&hn.push(n)&&!zi.__r++||Jl!=pe.debounceRendering)&&((Jl=pe.debounceRendering)||sd)(zi)}function zi(){try{for(var n,e=1;hn.length;)hn.length>e&&hn.sort(id),n=hn.shift(),e=hn.length,Lm(n)}finally{hn.length=zi.__r=0}}function cd(n,e,t,r,s,i,a,c,l,d,f){var g,m,E,R,D,A,N=r&&r.__k||$i,F=e.length;for(l=xm(t,e,N,l,F),g=0;g<F;g++)(E=t.__k[g])!=null&&(m=E.__i!=-1&&N[E.__i]||Bi,E.__i=g,A=ac(n,E,m,s,i,a,c,l,d,f),R=E.__e,E.ref&&m.ref!=E.ref&&(m.ref&&cc(m.ref,null,E),f.push(E.ref,E.__c||R,E)),D==null&&R!=null&&(D=R),4&E.__u?(l=ld(E,l,n),m.__e&&(m.__e=null)):typeof E.type=="function"&&A!==void 0?l=A:R&&(l=R.nextSibling),E.__u&=-7);return t.__e=D,l}function xm(n,e,t,r,s){var i,a,c,l,d,f=t.length,g=f,m=0;for(n.__k=new Array(s),i=0;i<s;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[i]=ki(null,a,null,null,null):vo(a)?a=n.__k[i]=ki(K,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[i]=ki(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[i]=a,l=i+m,a.__=n,a.__b=n.__b+1,c=null,(d=a.__i=Fm(a,t,l,g))!=-1&&(g--,(c=t[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(s>f?m--:s<f&&m++),typeof a.type!="function"&&(a.__u|=4)):d!=l&&(d==l-1?m--:d==l+1?m++:(d>l?m--:m++,a.__u|=4))):n.__k[i]=null;if(g)for(i=0;i<f;i++)(c=t[i])!=null&&!(2&c.__u)&&(c.__e==r&&(r=Wn(c)),fd(c,c));return r}function ld(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=ld(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Wn(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Fm(n,e,t,r){var s,i,a,c=n.key,l=n.type,d=e[t],f=d!=null&&(2&d.__u)==0;if(d===null&&c==null||f&&c==d.key&&l==d.type)return t;if(r>(f?1:0)){for(s=t-1,i=t+1;s>=0||i<e.length;)if((d=e[a=s>=0?s--:i++])!=null&&!(2&d.__u)&&c==d.key&&l==d.type)return a}return-1}function eu(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Nm.test(e)?t:t+"px"}function _i(n,e,t,r,s){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||eu(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||eu(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(od,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t[ws]=r[ws]:(t[ws]=ic,n.addEventListener(e,i?Ia:Ta,i)):n.removeEventListener(e,i?Ia:Ta,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function tu(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[Ri]==null)e[Ri]=ic++;else if(e[Ri]<t[ws])return;return t(pe.event?pe.event(e):e)}}}function ac(n,e,t,r,s,i,a,c,l,d){var f,g,m,E,R,D,A,N,F,B,H,W,ee,b,v,w,T=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[c=e.__e=t.__e]),(f=pe.__b)&&f(e);e:if(typeof T=="function"){g=a.length;try{if(F=e.props,B=T.prototype&&T.prototype.render,H=(f=T.contextType)&&r[f.__c],W=f?H?H.props.value:f.__:r,t.__c?N=(m=e.__c=t.__c).__=m.__E:(B?e.__c=m=new T(F,W):(e.__c=m=new Pi(F,W),m.constructor=T,m.render=jm),H&&H.sub(m),m.state||(m.state={}),m.__n=r,E=m.__d=!0,m.__h=[],m._sb=[]),B&&m.__s==null&&(m.__s=m.state),B&&T.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=jt({},m.__s)),jt(m.__s,T.getDerivedStateFromProps(F,m.__s))),R=m.props,D=m.state,m.__v=e,E)B&&T.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),B&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(B&&T.getDerivedStateFromProps==null&&F!==R&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(F,W),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(F,m.__s,W)===!1){e.__v!=t.__v&&(m.props=F,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(S){S&&(S.__=e)}),$i.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m),c=Wn(t);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(F,m.__s,W),B&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(R,D,A)})}if(m.context=W,m.props=F,m.__P=n,m.__e=!1,ee=pe.__r,b=0,B)m.state=m.__s,m.__d=!1,ee&&ee(e),f=m.render(m.props,m.state,m.context),$i.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,ee&&ee(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++b<25);m.state=m.__s,m.getChildContext!=null&&(r=jt(jt({},r),m.getChildContext())),B&&!E&&m.getSnapshotBeforeUpdate!=null&&(A=m.getSnapshotBeforeUpdate(R,D)),v=f!=null&&f.type===K&&f.key==null?dd(f.props.children):f,c=cd(n,vo(v)?v:[v],e,t,r,s,i,a,c,l,d),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),N&&(m.__E=m.__=null)}catch(S){if(a.length=g,e.__v=null,l||i!=null){if(S.then){for(e.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i!=null&&(i[i.indexOf(c)]=null),e.__e=c}else if(i!=null)for(w=i.length;w--;)oc(i[w])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),S.then||ud(e),pe.__e(S,e,t)}}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=Um(t.__e,e,t,r,s,i,a,l,d);return(f=pe.diffed)&&f(e),128&e.__u?void 0:c}function ud(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(ud))}function hd(n,e,t){for(var r=0;r<t.length;r++)cc(t[r],t[++r],t[++r]);pe.__c&&pe.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){pe.__e(i,s.__v)}})}function dd(n){return typeof n!="object"||n==null||n.__b>0?n:vo(n)?n.map(dd):n.constructor!==void 0?null:jt({},n)}function Um(n,e,t,r,s,i,a,c,l){var d,f,g,m,E,R,D,A=t.props||Bi,N=e.props,F=e.type;if(F=="svg"?s="http://www.w3.org/2000/svg":F=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((E=i[d])&&"setAttribute"in E==!!F&&(F?E.localName==F:E.nodeType==3)){n=E,i[d]=null;break}}if(n==null){if(F==null)return document.createTextNode(N);n=document.createElementNS(s,F,N.is&&N),c&&(pe.__m&&pe.__m(e,i),c=!1),i=null}if(F==null)A===N||c&&n.data==N||(n.data=N);else{if(i=F=="textarea"&&N.defaultValue!=null?null:i&&yo.call(n.childNodes),!c&&i!=null)for(A={},d=0;d<n.attributes.length;d++)A[(E=n.attributes[d]).name]=E.value;for(d in A)E=A[d],d=="dangerouslySetInnerHTML"?g=E:d=="children"||d in N||d=="value"&&"defaultValue"in N||d=="checked"&&"defaultChecked"in N||_i(n,d,null,E,s);for(d in N)E=N[d],d=="children"?m=E:d=="dangerouslySetInnerHTML"?f=E:d=="value"?R=E:d=="checked"?D=E:c&&typeof E!="function"||A[d]===E||_i(n,d,E,A[d],s);if(f)c||g&&(f.__html==g.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(g&&(n.innerHTML=""),cd(e.type=="template"?n.content:n,vo(m)?m:[m],e,t,r,F=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:t.__k&&Wn(t,0),c,l),i!=null)for(d=i.length;d--;)oc(i[d]);c&&F!="textarea"||(d="value",F=="progress"&&R==null?n.removeAttribute("value"):R!=null&&(R!==n[d]||F=="progress"&&!R||F=="option"&&R!=A[d])&&_i(n,d,R,A[d],s),d="checked",D!=null&&D!=n[d]&&_i(n,d,D,A[d],s))}return n}function cc(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){pe.__e(s,t)}}function fd(n,e,t){var r,s;if(pe.unmount&&pe.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||cc(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){pe.__e(i,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&fd(r[s],e,t||typeof n.type!="function");t||oc(n.__e),n.__c=n.__=n.__e=void 0}function jm(n,e,t){return this.constructor(n,t)}function Bm(n,e,t){var r,s,i,a;e==document&&(e=document.documentElement),pe.__&&pe.__(n,e),s=(r=!1)?null:e.__k,i=[],a=[],ac(e,n=e.__k=Om(K,null,[n]),s||Bi,Bi,e.namespaceURI,s?null:e.firstChild?yo.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,a),hd(i,n,a),n.props.children=null}yo=$i.slice,pe={__e:function(n,e,t,r){for(var s,i,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},rd=0,Pi.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=jt({},this.state),typeof n=="function"&&(n=n(jt({},t),this.props)),n&&jt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Zl(this))},Pi.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Zl(this))},Pi.prototype.render=K,hn=[],sd=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,id=function(n,e){return n.__v.__b-e.__v.__b},zi.__r=0,aa=Math.random().toString(8),Ri="__d"+aa,ws="__a"+aa,od=/(PointerCapture)$|Capture$/i,ic=0,Ta=tu(!1),Ia=tu(!0);var $m=0;function h(n,e,t,r,s,i){e||(e={});var a,c,l=e;if("ref"in l)for(c in l={},e)c=="ref"?a=e[c]:l[c]=e[c];var d={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--$m,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)l[c]===void 0&&(l[c]=a[c]);return pe.vnode&&pe.vnode(d),d}var Rs,Re,ca,nu,qi=0,pd=[],Pe=pe,ru=Pe.__b,su=Pe.__r,iu=Pe.diffed,ou=Pe.__c,au=Pe.unmount,cu=Pe.__;function lc(n,e){Pe.__h&&Pe.__h(Re,n,qi||e),qi=0;var t=Re.__H||(Re.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function te(n){return qi=1,zm(gd,n)}function zm(n,e,t){var r=lc(Rs++,2);if(r.t=n,!r.__c&&(r.__=[gd(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],d=r.t(l,c);l!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=Re,!Re.__f)){var s=function(c,l,d){if(!r.__c.__H)return!0;var f=!1,g=r.__c.props!==c;if(r.__c.__H.__.some(function(E){if(E.__N){f=!0;var R=E.__[0];E.__=E.__N,E.__N=void 0,R!==E.__[0]&&(g=!0)}}),i){var m=i.call(this,c,l,d);return f?m||g:m}return!f||g};Re.__f=!0;var i=Re.shouldComponentUpdate,a=Re.componentWillUpdate;Re.componentWillUpdate=function(c,l,d){if(this.__e){var f=i;i=void 0,s(c,l,d),i=f}a&&a.call(this,c,l,d)},Re.shouldComponentUpdate=s}return r.__N||r.__}function de(n,e){var t=lc(Rs++,3);!Pe.__s&&md(t.__H,e)&&(t.__=n,t.u=e,Re.__H.__h.push(t))}function Wi(n){return qi=5,Qe(function(){return{current:n}},[])}function Qe(n,e){var t=lc(Rs++,7);return md(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function qm(){for(var n;n=pd.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(Ci),e.__h.some(Aa),e.__h=[]}catch(t){e.__h=[],Pe.__e(t,n.__v)}}}Pe.__b=function(n){Re=null,ru&&ru(n)},Pe.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),cu&&cu(n,e)},Pe.__r=function(n){su&&su(n),Rs=0;var e=(Re=n.__c).__H;e&&(ca===Re?(e.__h=[],Re.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(Ci),e.__h.some(Aa),e.__h=[],Rs=0)),ca=Re},Pe.diffed=function(n){iu&&iu(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(pd.push(e)!==1&&nu===Pe.requestAnimationFrame||((nu=Pe.requestAnimationFrame)||Wm)(qm)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),ca=Re=null},Pe.__c=function(n,e){e.some(function(t){try{t.__h.some(Ci),t.__h=t.__h.filter(function(r){return!r.__||Aa(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Pe.__e(r,t.__v)}}),ou&&ou(n,e)},Pe.unmount=function(n){au&&au(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{Ci(r)}catch(s){e=s}}),t.__H=void 0,e&&Pe.__e(e,t.__v))};var lu=typeof requestAnimationFrame=="function";function Wm(n){var e,t=function(){clearTimeout(r),lu&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);lu&&(e=requestAnimationFrame(t))}function Ci(n){var e=Re,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Re=e}function Aa(n){var e=Re;n.__c=n.__(),Re=e}function md(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function gd(n,e){return typeof e=="function"?e(n):e}const _d={netflix:"E50914",spotify:"1DB954",youtube:"FF0000",grab:"00B14F",shopee:"EE4D2D",line:"00C300",starbucks:"006241",mcdonalds:"FBC817",kfc:"F40027",apple:"000000",applemusic:"FA243C",google:"4285F4",googlecloud:"4285F4",openai:"412991",anthropic:"191919",shell:"FFD500",foodpanda:"D70F64",airbnb:"FF5A5F",icloud:"3693F3",amazon:"FF9900",hbo:"000000",tiktok:"000000",instagram:"E4405F",facebook:"0866FF",whatsapp:"25D366",telegram:"26A5E4",discord:"5865F2",twitch:"9146FF",steam:"000000",playstation:"003791",nintendoswitch:"E60012",roblox:"000000",uber:"000000",airasia:"FF0000",expedia:"191E3B",tripadvisor:"34E0A1",ikea:"0058A3",uniqlo:"FF0000",handm:"E50010",zara:"000000",nike:"111111",adidas:"000000",samsung:"1428A0",adobe:"FF0000",dropbox:"0061FF",github:"181717",canva:"00C4CC",notion:"000000",figma:"F24E1E",zoom:"0B5CFF",slack:"4A154B",paypal:"003087",aliexpress:"FF4747",googledrive:"4285F4",googleplay:"414141",soundcloud:"FF5500",tidal:"000000",linkedin:"0A66C2",patreon:"000000",youtubemusic:"FF0000",toyota:"EB0A1E",honda:"E40521",mazda:"101010",nissan:"C3002F",mitsubishi:"E60012",bmw:"0066B1",mercedes:"242424",tesla:"CC0000",suzuki:"E30613",burgerking:"D62300",tripdotcom:"287DFA",epicgames:"313131",duolingo:"58CC02",udemy:"A435F0",coursera:"0056D2",visa:"1A1F71",mastercard:"EB001B",americanexpress:"2E77BC",wise:"9FE870",ubereats:"06C167",perplexity:"1FB8CD",googlegemini:"8E75B2",xiaomi:"FF6900",huawei:"FF0000",oppo:"2D683D",applepay:"000000",googlepay:"4285F4",x:"000000",pinterest:"BD081C",snapchat:"FFFC00",messenger:"00B2FF",nordvpn:"4687FF",expressvpn:"DA3940",primevideo:"1F2E3E",hotelsdotcom:"EF3346",boots:"05054B",jcb:"0B4EA2"},Hm=n=>{const e=parseInt(n.slice(1),16);return .299*(e>>16&255)+.587*(e>>8&255)+.114*(e&255)>170},uc=n=>Hm(n)?"#111111":"#ffffff",L=(n,e,t,r={})=>{const s=r.bg||"#"+_d[t];return{key:n,re:e,si:t,bg:s,fg:r.fg||uc(s),...r}},hs=(n,e,t)=>L(n,e,t,{bg:"#ffffff",fg:"#"+_d[t],ring:!0}),Ee=(n,e,t,r={})=>({key:n,re:e,bg:t,fg:r.fg||uc(t),...r}),je=(n,e,t,r,s={})=>({key:n,re:e,text:t,bg:r,fg:s.fg||uc(r),...s}),Gm=[je("aia",/\baia\b|เอไอเอ/,"AIA","#d31145"),je("axa",/\baxa\b|แอกซ่า/,"AXA","#00008f"),je("fwd",/\bfwd\b|เอฟดับบลิวดี/,"FWD","#183028",{fg:"#ee7623"}),je("allianz",/allianz|อลิอันซ์/,"Allianz","#003781"),je("prudential",/prudential|พรูเด็นเชียล/,"PRU","#ed1b2e"),je("muangthailife",/muang ?thai ?life|เมืองไทยประกันชีวิต/,"MTL","#388fca"),je("thailife",/thai ?life|ไทยประกันชีวิต/,"TLI","#007ac1"),je("bangkoklife",/bangkok ?life|กรุงเทพประกันชีวิต/,"BLA","#003394"),je("generali",/generali|เจนเนอราลี่/,"Generali","#c1210d"),je("manulife",/manulife|แมนูไลฟ์/,"Manulife","#00a758"),je("dhipaya",/dhipaya|ทิพยประกัน/,"ทิพย","#ec2227"),je("viriyah",/viriyah|วิริยะ/,"วิริยะ","#0134a2",{fg:"#fcaf17"}),je("msig",/\bmsig\b/,"MSIG","#e11f27"),je("bki",/bangkok ?insurance|กรุงเทพประกันภัย|\bbki\b/,"BKI","#05048c"),je("roojai",/roojai|รู้ใจ/,"รู้ใจ","#003b71",{fg:"#ff5011"}),je("chubb",/chubb|ชับบ์/,"CHUBB","#000000"),je("sompo",/sompo|ซมโปะ/,"SOMPO","#e10032"),Ee("coway",/coway|โคเวย์/,"#00a8e1",{icon:"water"}),Ee("foodland",/foodland|ฟู้ดแลนด์/,"#fc0001",{icon:"bag"}),Ee("tops",/\btops\b|ท็อปส์/,"#ff3d1c",{icon:"bag"}),Ee("central",/central|เซ็นทรัล/,"#f50a3c",{icon:"bag"}),Ee("mk",/\bmk\b|เอ็มเค/,"#ec1c24",{icon:"food"}),Ee("swensens",/swensen|สเวนเซ่น/,"#e10e18",{icon:"cake"}),Ee("watsons",/watsons|วัตสัน/,"#009aa9",{icon:"beauty"}),Ee("powerbuy",/power ?buy|เพาเวอร์บาย/,"#5f3281",{icon:"laptop"}),Ee("bts",/\bbts\b|บีทีเอส/,"#c81518",{icon:"train"}),Ee("mrt",/\bmrt\b|เอ็มอาร์ที/,"#045091",{icon:"train"}),Ee("bangchak",/bangchak|บางจาก/,"#37b34a",{icon:"fuel"}),L("applepay",/apple ?pay/,"applepay"),L("googlepay",/google ?pay|g ?pay/,"googlepay",{bg:"#ffffff",fg:"#4285f4",ring:!0}),L("gemini",/gemini|เจมิไน/,"googlegemini"),L("primevideo",/prime ?video/,"primevideo"),L("ubereats",/uber ?eats/,"ubereats"),L("burgerking",/burger ?king|เบอร์เกอร์ ?คิง/,"burgerking"),L("tripdotcom",/trip\.com|ทริปดอทคอม/,"tripdotcom"),L("hotelsdotcom",/hotels\.com/,"hotelsdotcom"),L("epicgames",/epic ?games/,"epicgames"),L("duolingo",/duolingo/,"duolingo"),L("udemy",/udemy/,"udemy"),L("coursera",/coursera/,"coursera"),L("visa",/\bvisa\b|วีซ่า/,"visa"),L("mastercard",/master ?card|มาสเตอร์การ์ด/,"mastercard",{bg:"#ffffff",fg:"#eb001b",ring:!0}),L("amex",/american ?express|\bamex\b/,"americanexpress"),L("jcb",/\bjcb\b/,"jcb"),L("wise",/\bwise\b/,"wise"),L("perplexity",/perplexity/,"perplexity"),L("xiaomi",/xiaomi|เสียวหมี่/,"xiaomi"),L("huawei",/huawei|หัวเว่ย/,"huawei"),L("oppo",/\boppo\b/,"oppo"),L("x",/\bx\.com|twitter|ทวิตเตอร์/,"x"),L("pinterest",/pinterest/,"pinterest"),L("snapchat",/snapchat/,"snapchat"),L("messenger",/messenger/,"messenger"),L("nordvpn",/nordvpn/,"nordvpn"),L("expressvpn",/expressvpn/,"expressvpn"),L("boots",/\bboots\b|บู๊ทส์/,"boots"),L("netflix",/netflix|เน็ตฟลิกซ์/,"netflix",{bg:"#000000",fg:"#e50914"}),L("youtubemusic",/youtube ?music|ยูทูบ ?มิวสิค/,"youtubemusic"),hs("youtube",/youtube|ยูทูบ/,"youtube"),L("spotify",/spotify|สปอติฟาย/,"spotify",{bg:"#191414",fg:"#1ed760"}),Ee("disney",/disney|ดิสนีย์/,"#113ccf"),L("hbo",/\bhbo\b/,"hbo"),L("applemusic",/apple ?music/,"applemusic"),L("icloud",/icloud/,"icloud"),L("apple",/apple|itunes/,"apple"),hs("googlecloud",/google ?cloud/,"googlecloud"),hs("googledrive",/google ?(drive|one)/,"googledrive"),hs("googleplay",/google ?play/,"googleplay"),hs("google",/google|กูเกิล/,"google"),L("chatgpt",/chatgpt|openai/,"openai",{bg:"#10a37f",fg:"#ffffff"}),L("claude",/claude/,"claude",{bg:"#d97757",fg:"#ffffff"}),L("anthropic",/anthropic/,"anthropic",{bg:"#d97757",fg:"#ffffff"}),Ee("lineman",/line ?man|ไลน์แมน|lpth\*pf|\blm_/,"#06c755"),L("line",/\bline\b|ไลน์/,"line",{bg:"#06c755",fg:"#ffffff"}),L("grab",/\bgrab|แกร็บ/,"grab"),L("uber",/\buber\b/,"uber"),L("foodpanda",/foodpanda|ฟู้ดแพนด้า/,"foodpanda"),Ee("seven",/7-?11|7-eleven|seven ?eleven|เซเว่น/,"#00a650"),Ee("cafeamazon",/caf[eé] ?amazon|คาเฟ่ ?อเมซอน|อเมซอน/,"#00693c"),L("amazon",/\bamazon\b/,"amazon",{bg:"#232f3e",fg:"#ff9900"}),L("starbucks",/starbucks|สตาร์บัค/,"starbucks",{round:!0}),L("shopee",/shopee|ช้อปปี้/,"shopee"),Ee("lazada",/lazada|ลาซาด้า/,"#0f146d"),L("aliexpress",/aliexpress|อาลีเอ็กซ์/,"aliexpress"),L("mcdonald",/mcdonald|แมคโดนัลด์|แมค ?ดี/,"mcdonalds",{bg:"#da291c",fg:"#ffc72c"}),L("kfc",/\bkfc|เคเอฟซี/,"kfc"),Ee("ais",/\bais\b|เอไอเอส/,"#8dc63f"),Ee("true",/\btrue\b|ทรูมูฟ|ทรูออนไลน์/,"#ee2e24"),Ee("3bb",/3bb/,"#0055a5"),Ee("ptt",/\bptt\b|ปตท/,"#00439c"),L("shell",/\bshell\b|เชลล์/,"shell",{bg:"#ffd500",fg:"#dd1d21"}),Ee("lotus",/lotus|โลตัส/,"#00a651"),Ee("bigc",/big ?c\b|บิ๊กซี/,"#ed1c24"),Ee("makro",/makro|แม็คโคร|แมคโคร/,"#003d8f"),L("airasia",/airasia|แอร์เอเชีย/,"airasia"),L("airbnb",/airbnb/,"airbnb"),L("expedia",/expedia/,"expedia"),L("tripadvisor",/tripadvisor/,"tripadvisor"),L("tiktok",/tiktok|ติ๊กต็อก/,"tiktok"),L("instagram",/instagram/,"instagram"),L("facebook",/facebook|เฟซบุ๊ก/,"facebook"),L("whatsapp",/whatsapp/,"whatsapp"),L("telegram",/telegram/,"telegram"),L("discord",/discord/,"discord"),L("twitch",/twitch/,"twitch"),L("steam",/steam|สตีม/,"steam"),L("playstation",/playstation|เพลย์สเตชัน|\bpsn\b/,"playstation"),L("nintendo",/nintendo|นินเทนโด/,"nintendoswitch"),L("roblox",/roblox/,"roblox"),L("soundcloud",/soundcloud/,"soundcloud"),L("tidal",/\btidal\b/,"tidal"),L("linkedin",/linkedin/,"linkedin"),L("patreon",/patreon/,"patreon"),L("paypal",/paypal/,"paypal"),L("github",/github/,"github"),L("adobe",/adobe/,"adobe"),L("dropbox",/dropbox/,"dropbox"),L("canva",/canva/,"canva"),L("notion",/notion/,"notion"),L("figma",/figma/,"figma"),L("zoom",/\bzoom\b/,"zoom"),L("slack",/\bslack\b/,"slack"),L("samsung",/samsung|ซัมซุง/,"samsung"),L("ikea",/ikea|อิเกีย/,"ikea"),L("uniqlo",/uniqlo|ยูนิโคล่/,"uniqlo"),L("handm",/h&m/,"handm"),L("zara",/\bzara\b/,"zara"),L("nike",/\bnike\b|ไนกี้/,"nike"),L("adidas",/adidas|อาดิดาส/,"adidas"),L("toyota",/toyota|โตโยต้า|โตโยตา/,"toyota"),L("honda",/honda|ฮอนด้า|civic|ซีวิค/,"honda"),L("mazda",/mazda|มาสด้า/,"mazda"),L("nissan",/nissan|นิสสัน/,"nissan"),L("mitsubishi",/mitsubishi|มิตซู/,"mitsubishi"),L("bmw",/\bbmw\b/,"bmw"),L("mercedes",/mercedes|benz|เบนซ์/,"mercedes"),L("tesla",/tesla|เทสล่า/,"tesla"),L("suzuki",/suzuki|ซูซูกิ/,"suzuki")];function Km(n){const e=String(n||"").toLowerCase();return e.trim()&&Gm.find(t=>t.re.test(e))||null}const Eo=[{key:"food",label:"อาหาร",fa:"fa-utensils",icon:"food",group:"food"},{key:"drink",label:"กาแฟ/เครื่องดื่ม",fa:"fa-mug-hot",icon:"coffee",group:"food"},{key:"snack",label:"ขนม/เบเกอรี่",fa:"fa-cookie",icon:"cake",group:"food"},{key:"fresh",label:"ของสด/ตลาด",fa:"fa-carrot",icon:"leaf",group:"food"},{key:"delivery",label:"เดลิเวอรี่",fa:"fa-box",icon:"box",group:"food"},{key:"party",label:"เหล้า/ปาร์ตี้",fa:"fa-wine-glass",icon:"glass",group:"food"},{key:"bills",label:"ค่าไฟ/บิล",fa:"fa-bolt",icon:"bolt",group:"bills"},{key:"water",label:"ค่าน้ำ",fa:"fa-droplet",icon:"water",group:"bills"},{key:"net",label:"เน็ต/WiFi",fa:"fa-wifi",icon:"wifi",group:"bills"},{key:"phone",label:"มือถือ",fa:"fa-mobile-screen",icon:"mobile",group:"bills"},{key:"rent",label:"ที่พัก/ค่าห้อง",fa:"fa-house",icon:"key",group:"bills"},{key:"condo",label:"ค่าส่วนกลาง",fa:"fa-building",icon:"building",group:"bills"},{key:"insure",label:"ประกัน",fa:"fa-shield",icon:"shieldok",group:"bills"},{key:"tax",label:"ภาษี/ค่าธรรมเนียม",fa:"fa-file-invoice-dollar",icon:"taxdoc",group:"bills"},{key:"app",label:"แอป/สมาชิก",fa:"fa-table-cells",icon:"apps",group:"bills"},{key:"goods",label:"ของใช้/ซุปเปอร์",fa:"fa-cart-shopping",icon:"bag",group:"goods"},{key:"clothes",label:"เสื้อผ้า",fa:"fa-shirt",icon:"shirt",group:"goods"},{key:"beauty",label:"ความงาม",fa:"fa-spray-can",icon:"beauty",group:"goods"},{key:"gadget",label:"ไอที/อุปกรณ์",fa:"fa-laptop",icon:"laptop",group:"goods"},{key:"home",label:"ของแต่งบ้าน",fa:"fa-couch",icon:"sofa",group:"goods"},{key:"health",label:"ยา/สุขภาพ",fa:"fa-pills",icon:"pill",group:"goods"},{key:"doctor",label:"หมอ/โรงพยาบาล",fa:"fa-hospital",icon:"cross",group:"goods"},{key:"pet",label:"สัตว์เลี้ยง",fa:"fa-paw",icon:"paw",group:"goods"},{key:"gift",label:"ของขวัญ",fa:"fa-gift",icon:"gift",group:"goods"},{key:"kid",label:"ลูก/เด็ก",fa:"fa-baby",icon:"baby",group:"goods"},{key:"travel",label:"รถ/ผ่อนรถ",fa:"fa-car",icon:"car",group:"travel"},{key:"fuel",label:"น้ำมัน/ชาร์จรถ",fa:"fa-gas-pump",icon:"fuel",group:"travel"},{key:"transit",label:"รถไฟฟ้า/รถเมล์",fa:"fa-train-subway",icon:"train",group:"travel"},{key:"ride",label:"วิน/แท็กซี่",fa:"fa-motorcycle",icon:"moto",group:"travel"},{key:"parking",label:"ทางด่วน/ที่จอด",fa:"fa-square-parking",icon:"parking",group:"travel"},{key:"carcare",label:"ล้าง/ซ่อมรถ",fa:"fa-wrench",icon:"wrench",group:"travel"},{key:"trip",label:"เที่ยว",fa:"fa-plane",icon:"plane",group:"travel"},{key:"fun",label:"หนัง/สตรีม",fa:"fa-film",icon:"film",group:"fun"},{key:"game",label:"เกม",fa:"fa-gamepad",icon:"game",group:"fun"},{key:"sport",label:"กีฬา/ฟิตเนส",fa:"fa-dumbbell",icon:"dumbbell",group:"fun"},{key:"event",label:"คอนเสิร์ต/งาน",fa:"fa-ticket",icon:"ticket",group:"fun"},{key:"merit",label:"ทำบุญ/บริจาค",fa:"fa-hands-praying",icon:"lotus",group:"other"},{key:"edu",label:"การศึกษา",fa:"fa-graduation-cap",icon:"grad",group:"other"},{key:"transfer",label:"โอน/เติมเงิน",fa:"fa-money-bill-transfer",icon:"swap",group:"other"},{key:"other",label:"อื่นๆ",fa:"fa-money-bill",icon:"dots",group:"other"}];Object.fromEntries(Eo.map(n=>[n.key,n.fa]));const Qm=[["delivery",["grab food","grabfood","lineman","line man","foodpanda","robinhood","shopeefood","เดลิเวอรี่","ส่งอาหาร"]],["insure",["ประกัน","เบี้ย","aia","axa","fwd","allianz","prudential","generali","manulife","msig","chubb","sompo","roojai","รู้ใจ","ทิพย","วิริยะ"]],["tax",["ภาษี","สรรพากร","revenue","ค่าธรรมเนียม","ค่าปรับ"]],["condo",["ค่าส่วนกลาง","นิติบุคคล"]],["trip",["เที่ยว","โรงแรม","ที่พักรีสอร์ท","เครื่องบิน","ตั๋วเครื่องบิน","airbnb","agoda","ทริป","airasia","trip.com","booking"]],["rent",["ค่าเช่า","ค่าห้อง","ค่าหอ","คอนโด"]],["party",["เหล้า","เบียร์","ไวน์","ปาร์ตี้","ผับ"]],["drink",["กาแฟ","ชานม","ชาไข่มุก","คาเฟ่","เครื่องดื่ม","น้ำผลไม้","starbucks","amazon","coffee"]],["snack",["ขนม","เค้ก","เบเกอรี่","ขนมปัง","ไอติม","ไอศกรีม","โดนัท","ครัวซอง","swensen","after you"]],["fresh",["ผักสด","ผลไม้","ตลาดสด","ของสด","ผัก "]],["pet",["แมว","หมา","สุนัข","สัตว์"]],["water",["ค่าน้ำ","ประปา","coway"]],["net",["ค่าเน็ต","อินเทอร์เน็ต","internet","เน็ตบ้าน","wifi","3bb","fiber","ไฟเบอร์"]],["phone",["ค่าโทร","ค่ามือถือ","โทรศัพท์","dtac","ais","truemove","เติมเงินมือถือ"]],["app",["netflix","spotify","youtube","disney","subscription","claude","chatgpt","openai","icloud","adobe","canva","hbo","prime video","google one","apple music","notion","gemini","perplexity","ค่าบริการ"]],["bills",["ค่าไฟ","การไฟฟ้า","เน็ต","ค่าเช่ารายเดือน","google cloud"]],["delivery",["grab"]],["food",["ข้าว","กิน","อาหาร","ก๋วยเตี๋ยว","หมูกระทะ","ชาบู","สุกี้","บุฟเฟ","ส้มตำ","ไก่","หมู","เนื้อ","ปิ้งย่าง","ผัด","ต้ม","แกง","กะเพรา","กระเพรา","ไข่เจียว","ลูกชิ้น","บะหมี่","สเต๊ะ","สลัด","salad","บอนชอน","bonchon","kfc","mcdonald","burger","pizza","ร้านอาหาร"]],["fuel",["น้ำมัน","ปตท","ptt","shell","บางจาก","bangchak","esso","caltex","ชาร์จรถ"]],["transit",["bts","mrt","รถไฟฟ้า","รถเมล์","รถไฟ","airport link"]],["ride",["แท็กซี่","taxi","วินมอเตอร์ไซค์","มอเตอร์ไซค์รับจ้าง","bolt"]],["parking",["ทางด่วน","ที่จอดรถ","จอดรถ","easy pass","m-flow"]],["carcare",["ล้างรถ","ซ่อมรถ","เปลี่ยนยาง","เช็คระยะ","อะไหล่"]],["travel",["รถ","แท็กซี่","ค่าเดินทาง","ตั๋วรถ","civic","honda","toyota","mazda","nissan","isuzu","mitsubishi","benz","bmw","พ.ร.บ.","ค่างวดรถ","ผ่อนรถ","ค่ารถ"]],["game",["เกม","steam","playstation","nintendo","garena","rov"]],["sport",["ฟิตเนส","ยิม","fitness","ฟุตบอล","แบดมินตัน","ว่ายน้ำ"]],["event",["คอนเสิร์ต","บัตรคอน","งานแฟร์","อีเวนต์"]],["fun",["หนัง","โรงหนัง","ดูหนัง","karaoke","คาราโอเกะ","บอร์ดเกม"]],["doctor",["หมอ","โรงพยาบาล","คลินิก","ทำฟัน","หมอฟัน","ตรวจสุขภาพ"]],["health",["ค่ายา","ซื้อยา","วิตามิน","ร้านยา"]],["beauty",["สิว","เครื่องสำอาง","สกินแคร์","ลิป","เซรั่ม","ทำเล็บ","ทำผม","ตัดผม","ซาลอน","สปา","นวด","watsons","วัตสัน"]],["clothes",["เสื้อ","กางเกง","ยีน","กระโปรง","รองเท้า","uniqlo","h&m","zara","nike","adidas"]],["gadget",["ipad","iphone","macbook","โน้ตบุ๊ก","notebook","หูฟัง","สายชาร์จ","power buy","powerbuy"]],["home",["เฟอร์นิเจอร์","ikea","homepro","โฮมโปร","ผ้าม่าน","ที่นอน","หมอน"]],["kid",["นมผง","ผ้าอ้อม","แพมเพิส","ของเล่น","ค่าลูก"]],["merit",["ทำบุญ","บริจาค","พวงมาลัย","ใส่บาตร","ถวาย"]],["edu",["ค่าเรียน","ค่าเทอม","คอร์สเรียน","udemy","coursera","duolingo"]],["gift",["ของขวัญ","วันเกิด","ซองงาน","ดอกไม้"]],["goods",["ซื้อ","ของใช้","ช้อป","shopee","lazada","7-11","เซเว่น","ซุปเปอร์","โลตัส","lotus","บิ๊กซี","big c","tops","foodland","makro","แม็คโคร","cj","ที่ปิ้ง","ครีม","สบู่","ยาสระผม","ที่ปั่นหู","ทิชชู่"]]];function Xm(n){const e=String(n||"").toLowerCase();if(!e.trim())return"other";for(const[t,r]of Qm)if(r.some(s=>e.includes(s)))return t;return"other"}const Ym={food:[],bills:["fa-mobile-screen-button"],goods:["fa-basket-shopping","fa-shopping-basket","fa-shopping-bag","fa-scissors"],travel:["fa-bus"],fun:["fa-tv"],other:[]},Jm=[{key:"food",label:"อาหารและเครื่องดื่ม",short:"อาหาร"},{key:"bills",label:"บิลและค่าบริการ",short:"บิล/รายเดือน"},{key:"goods",label:"ของใช้",short:"ของใช้"},{key:"travel",label:"เดินทาง",short:"เดินทาง"},{key:"fun",label:"บันเทิง",short:"บันเทิง"},{key:"other",label:"อื่นๆ",short:"อื่นๆ"}],yd=Jm.map(n=>({...n,icons:n.key==="other"?[]:[...Eo.filter(e=>e.group===n.key).map(e=>e.fa),...Ym[n.key]]})),uu={home:h(K,{children:[h("path",{d:"M3.5 11 12 4l8.5 7"}),h("path",{d:"M5.5 9.8V20h13V9.8"}),h("path",{d:"M10 20v-5.5h4V20"})]}),bill:h(K,{children:[h("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),h("path",{d:"M9 8.5h6M9 12h6"})]}),swap:h("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:h(K,{children:[h("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),h("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),h("path",{d:"M15.5 13.8h2.2"})]}),user:h(K,{children:[h("circle",{cx:"12",cy:"8.5",r:"3.6"}),h("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:h("path",{d:"M12 5v14M5 12h14"}),check:h("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:h(K,{children:[h("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),h("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),h("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),h("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:h("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:h("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:h("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:h("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:h("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:h(K,{children:[h("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),h("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:h(K,{children:[h("path",{d:"M5.5 8h13l-1 11.5h-11z"}),h("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:h("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:h(K,{children:[h("circle",{cx:"6",cy:"12",r:"1.1"}),h("circle",{cx:"12",cy:"12",r:"1.1"}),h("circle",{cx:"18",cy:"12",r:"1.1"})]}),people:h(K,{children:[h("circle",{cx:"9",cy:"8.5",r:"3.2"}),h("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),h("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:h(K,{children:[h("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),h("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),bell:h(K,{children:[h("path",{d:"M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"}),h("path",{d:"M10 20.5h4"})]}),trash:h(K,{children:[h("path",{d:"M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7"}),h("path",{d:"M10.5 11v5M13.5 11v5"})]}),alert:h(K,{children:[h("path",{d:"M12 4.5 3.5 19h17z"}),h("path",{d:"M12 10v4.5M12 17h.01"})]}),chart:h("path",{d:"M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5"}),sliders:h(K,{children:[h("path",{d:"M5 7h9M18 7h1M5 17h1M10 17h9"}),h("circle",{cx:"16",cy:"7",r:"2"}),h("circle",{cx:"8",cy:"17",r:"2"})]}),coffee:h(K,{children:[h("path",{d:"M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z"}),h("path",{d:"M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4.5v2M12 4.5v2"})]}),key:h(K,{children:[h("circle",{cx:"8.5",cy:"14.5",r:"3.5"}),h("path",{d:"M11 12 19 4.5M16 7.5l2.5 2.5M14 9.5l1.8 1.8"})]}),film:h(K,{children:[h("rect",{x:"4",y:"5",width:"16",height:"14",rx:"2"}),h("path",{d:"M8 5v14M16 5v14M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4"})]}),pill:h(K,{children:[h("rect",{x:"3.5",y:"9",width:"17",height:"6.5",rx:"3.25",transform:"rotate(-40 12 12)"}),h("path",{d:"m9.4 9.4 5.2 5.2"})]}),plane:h("path",{d:"M3.5 13.5 20.5 5l-4 14-4.5-4.5-3 3v-4.5zM11.5 14.5 20.5 5"}),gift:h(K,{children:[h("rect",{x:"4",y:"9",width:"16",height:"4",rx:"1"}),h("path",{d:"M5.5 13v6.5h13V13M12 9v10.5M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9zM12 9c1-3.5 5-3.5 5-1.2 0 1.2-2 1.2-5 1.2z"})]}),paw:h(K,{children:[h("circle",{cx:"7",cy:"10",r:"1.6"}),h("circle",{cx:"11",cy:"6.8",r:"1.6"}),h("circle",{cx:"15.5",cy:"7.5",r:"1.6"}),h("circle",{cx:"18",cy:"11.5",r:"1.6"}),h("path",{d:"M8 17.5c0-2.5 2.2-4.5 4.5-4.5s4.5 2 4 4.2c-.4 1.8-2 2.3-4 2.3S8 19.5 8 17.5z"})]}),search:h(K,{children:[h("circle",{cx:"11",cy:"11",r:"6"}),h("path",{d:"m16 16 4 4"})]}),pencil:h("path",{d:"M5 19l1-4L16.5 4.5a2 2 0 0 1 3 3L9 18zM14.5 6.5l3 3"}),close:h("path",{d:"M6 6l12 12M18 6 6 18"}),copy:h(K,{children:[h("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),h("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),play:h("polygon",{points:"8 5 19 12 8 19",style:"fill:currentColor"}),shield:h("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),mobile:h(K,{children:[h("rect",{x:"7",y:"3",width:"10",height:"18",rx:"2.5"}),h("path",{d:"M11 17.5h2"})]}),external:h(K,{children:h("path",{d:"M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"})}),layers:h(K,{children:[h("polygon",{points:"12 3 3 8 12 13 21 8"}),h("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]}),sparkle:h("path",{d:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"}),sun:h(K,{children:[h("circle",{cx:"12",cy:"12",r:"4"}),h("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),moon:h("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"}),list:h("path",{d:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"}),upload:h("path",{d:"M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14"}),grid:h(K,{children:[h("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"13",y:"4",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"13",y:"13",width:"7",height:"7",rx:"1.5"})]}),heart:h("path",{d:"M12 20s-7.5-4.4-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"}),star:h("path",{d:"m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"}),target:h(K,{children:[h("circle",{cx:"12",cy:"12",r:"8.5"}),h("circle",{cx:"12",cy:"12",r:"4.8"}),h("circle",{cx:"12",cy:"12",r:"1.2"})]}),card:h(K,{children:[h("rect",{x:"3",y:"5.5",width:"18",height:"13",rx:"2.5"}),h("path",{d:"M3 10h18M7 14.5h4"})]}),cake:h("path",{d:"M6 11h12l-1.5 8.5h-9zM6 11a6 6 0 0 1 12 0M9.5 11.5l.6 8M14.5 11.5l-.6 8"}),leaf:h("path",{d:"M5 19c0-8 5-13 14-14-1 9-6 14-14 14zM5 19l7.5-7.5"}),box:h("path",{d:"M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8"}),glass:h("path",{d:"M8 3.5h8l-.5 5a3.5 3.5 0 0 1-7 0zM12 12v8M8.5 20h7"}),water:h("path",{d:"M12 3.5c3.5 4 6 7.2 6 10.2a6 6 0 0 1-12 0c0-3 2.5-6.2 6-10.2z"}),wifi:h("path",{d:"M4.5 9.5a11 11 0 0 1 15 0M7.5 12.8a7 7 0 0 1 9 0M10.5 16a3 3 0 0 1 3 0M12 19h.01"}),building:h("path",{d:"M5 20V5h9v15M14 9h5v11M3.5 20h17M8 8h3M8 11h3M8 14h3"}),shieldok:h(K,{children:[h("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),h("path",{d:"m8.8 12.2 2.2 2.2 4.2-4.4"})]}),taxdoc:h("path",{d:"M7 3.5h7l4 4v13H7zM14 3.5v4h4M9.5 16.5l5-5M10 12h.01M14 16h.01"}),apps:h(K,{children:[h("rect",{x:"4",y:"4",width:"7",height:"7",rx:"2"}),h("rect",{x:"13",y:"4",width:"7",height:"7",rx:"2"}),h("rect",{x:"4",y:"13",width:"7",height:"7",rx:"2"}),h("path",{d:"M16.5 13v7M13 16.5h7"})]}),shirt:h("path",{d:"M8 4 4.5 6.5 6 10l2-1v11h8V9l2 1 1.5-3.5L16 4c-.8 1.5-2.2 2.2-4 2.2S8.8 5.5 8 4z"}),beauty:h("path",{d:"M9 21h6v-8H9zM10 13V9.5l4-2V13M13.5 4.5l1.5-1.5M16 6l2-1"}),laptop:h(K,{children:[h("rect",{x:"5",y:"5.5",width:"14",height:"10",rx:"1.5"}),h("path",{d:"M3 18.5h18"})]}),sofa:h("path",{d:"M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11M3.5 12a1.5 1.5 0 0 1 3 0v2h11v-2a1.5 1.5 0 0 1 3 0v5h-17zM6 17v2M18 17v2"}),cross:h("path",{d:"M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z"}),baby:h("path",{d:"M9 8h6v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM10 8V5.5h4V8M12 3v2.5M9 12h3M9 15h3"}),fuel:h("path",{d:"M5 20V5.5A1.5 1.5 0 0 1 6.5 4h6A1.5 1.5 0 0 1 14 5.5V20M3.5 20h12M6.5 9h6M14 10h2a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 0 3 0V9l-2.5-3"}),train:h("path",{d:"M7 4h10a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2zM5 10h14M9 13.5h.01M15 13.5h.01M8 17l-2 3M16 17l2 3"}),moto:h(K,{children:[h("circle",{cx:"5.5",cy:"16.5",r:"2.5"}),h("circle",{cx:"18.5",cy:"16.5",r:"2.5"}),h("path",{d:"M8 16.5h6l-2.5-6H8M11.5 10.5h3.5l3.5 6M15 10.5l1-3h2.5"})]}),parking:h(K,{children:[h("rect",{x:"4.5",y:"4",width:"15",height:"16",rx:"3"}),h("path",{d:"M10 16V8h3a2.5 2.5 0 0 1 0 5h-3"})]}),wrench:h("path",{d:"M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z"}),game:h("path",{d:"M7 9h10a4 4 0 0 1 4 4v1a3 3 0 0 1-5.4 1.8L14.5 14h-5l-1.1 1.8A3 3 0 0 1 3 14v-1a4 4 0 0 1 4-4zM8 11.5v3M6.5 13h3M15.5 12.5h.01M17.5 14h.01"}),dumbbell:h("path",{d:"M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10"}),ticket:h("path",{d:"M4 7.5h16v3a1.5 1.5 0 0 0 0 3v3H4v-3a1.5 1.5 0 0 0 0-3zM14 7.5v9"}),lotus:h("path",{d:"M12 19c-4 0-7-2.5-7.5-6 2.6 0 4.8 1 6 2.6M12 19c4 0 7-2.5 7.5-6-2.6 0-4.8 1-6 2.6M12 19c-1.8-2-2.5-4.3-2-7 .5-2.4 1.2-4 2-5.5.8 1.5 1.5 3.1 2 5.5.5 2.7-.2 5-2 7z"}),grad:h("path",{d:"M2.5 9.5 12 5l9.5 4.5L12 14zM6.5 11.5V16c1.5 1.5 3.5 2.2 5.5 2.2s4-.7 5.5-2.2v-4.5M21.5 9.5V14"}),calendar:h(K,{children:[h("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),h("path",{d:"M16 2v4M8 2v4M3 10h18"})]})};function Z({name:n,size:e,class:t=""}){return h("svg",{class:`ic ${t}`,viewBox:"0 0 24 24","aria-hidden":"true",style:e?{width:e,height:e}:void 0,children:uu[n]||uu.dots})}const Zm={...Object.fromEntries(Eo.map(n=>[n.fa,n.icon])),"fa-basket-shopping":"bag","fa-shopping-basket":"bag","fa-shopping-bag":"bag","fa-scissors":"beauty","fa-bus":"train","fa-mobile-screen-button":"mobile","fa-tv":"film","fa-receipt":"bill","fa-arrow-down":"down","fa-credit-card":"card"},eg=n=>Zm[n]||"bill";let vd={};try{vd=Object.assign({"./brand-icons/adidas.js":()=>V(()=>import("./adidas-BFStthNF.js"),[]),"./brand-icons/adobe.js":()=>V(()=>import("./adobe-DVsy-5v7.js"),[]),"./brand-icons/airasia.js":()=>V(()=>import("./airasia-CrX-Wo8m.js"),[]),"./brand-icons/airbnb.js":()=>V(()=>import("./airbnb-Cbhk9IRm.js"),[]),"./brand-icons/aliexpress.js":()=>V(()=>import("./aliexpress-C7Fut5Pv.js"),[]),"./brand-icons/amazon.js":()=>V(()=>import("./amazon-CE_vqqMO.js"),[]),"./brand-icons/americanexpress.js":()=>V(()=>import("./americanexpress-CR4kUFKX.js"),[]),"./brand-icons/anthropic.js":()=>V(()=>import("./anthropic-CtOESTBn.js"),[]),"./brand-icons/apple.js":()=>V(()=>import("./apple-DQyrqi12.js"),[]),"./brand-icons/applemusic.js":()=>V(()=>import("./applemusic-BrRrMIij.js"),[]),"./brand-icons/applepay.js":()=>V(()=>import("./applepay-9Xr-TPlj.js"),[]),"./brand-icons/bmw.js":()=>V(()=>import("./bmw-DUfdtu5i.js"),[]),"./brand-icons/boots.js":()=>V(()=>import("./boots-DHKV8zUU.js"),[]),"./brand-icons/burgerking.js":()=>V(()=>import("./burgerking-sO9DRM_Y.js"),[]),"./brand-icons/canva.js":()=>V(()=>import("./canva-2sjRryIN.js"),[]),"./brand-icons/claude.js":()=>V(()=>import("./claude-DIOmB7mL.js"),[]),"./brand-icons/coursera.js":()=>V(()=>import("./coursera-osog-YAy.js"),[]),"./brand-icons/discord.js":()=>V(()=>import("./discord-BCvBrKcf.js"),[]),"./brand-icons/dropbox.js":()=>V(()=>import("./dropbox-DDDezJAq.js"),[]),"./brand-icons/duolingo.js":()=>V(()=>import("./duolingo-C51AbWwW.js"),[]),"./brand-icons/epicgames.js":()=>V(()=>import("./epicgames-CLU38Wl3.js"),[]),"./brand-icons/expedia.js":()=>V(()=>import("./expedia-CnFVrTVT.js"),[]),"./brand-icons/expressvpn.js":()=>V(()=>import("./expressvpn-lg98L813.js"),[]),"./brand-icons/facebook.js":()=>V(()=>import("./facebook-DVxFB6lG.js"),[]),"./brand-icons/figma.js":()=>V(()=>import("./figma-BvSNmEK5.js"),[]),"./brand-icons/foodpanda.js":()=>V(()=>import("./foodpanda-mCNdPjBQ.js"),[]),"./brand-icons/github.js":()=>V(()=>import("./github-CugS4z52.js"),[]),"./brand-icons/google.js":()=>V(()=>import("./google-BOeWiJEc.js"),[]),"./brand-icons/googlecloud.js":()=>V(()=>import("./googlecloud-Cu0q9mrt.js"),[]),"./brand-icons/googledrive.js":()=>V(()=>import("./googledrive-DJRS2uJI.js"),[]),"./brand-icons/googlegemini.js":()=>V(()=>import("./googlegemini-Ban1TaY7.js"),[]),"./brand-icons/googlepay.js":()=>V(()=>import("./googlepay-d4D0YCZv.js"),[]),"./brand-icons/googleplay.js":()=>V(()=>import("./googleplay-DSYmKzy-.js"),[]),"./brand-icons/grab.js":()=>V(()=>import("./grab-C5n4U66f.js"),[]),"./brand-icons/handm.js":()=>V(()=>import("./handm-BrkydCya.js"),[]),"./brand-icons/hbo.js":()=>V(()=>import("./hbo-Xi3Ga0Ag.js"),[]),"./brand-icons/honda.js":()=>V(()=>import("./honda-B3MvvqC_.js"),[]),"./brand-icons/hotelsdotcom.js":()=>V(()=>import("./hotelsdotcom-gf0EbR2R.js"),[]),"./brand-icons/huawei.js":()=>V(()=>import("./huawei-Ce-BjWiW.js"),[]),"./brand-icons/icloud.js":()=>V(()=>import("./icloud-k5g80BhN.js"),[]),"./brand-icons/ikea.js":()=>V(()=>import("./ikea-DlA-oA_M.js"),[]),"./brand-icons/instagram.js":()=>V(()=>import("./instagram-CsdKzdLT.js"),[]),"./brand-icons/jcb.js":()=>V(()=>import("./jcb-CgtLIRZ7.js"),[]),"./brand-icons/kfc.js":()=>V(()=>import("./kfc-B288Vwqr.js"),[]),"./brand-icons/line.js":()=>V(()=>import("./line-BoNSQUC3.js"),[]),"./brand-icons/linkedin.js":()=>V(()=>import("./linkedin-BhyiVVvo.js"),[]),"./brand-icons/mastercard.js":()=>V(()=>import("./mastercard-CVUa-KQc.js"),[]),"./brand-icons/mazda.js":()=>V(()=>import("./mazda-DCLcb_dq.js"),[]),"./brand-icons/mcdonalds.js":()=>V(()=>import("./mcdonalds-BPA871I9.js"),[]),"./brand-icons/mercedes.js":()=>V(()=>import("./mercedes-AbDC0bVz.js"),[]),"./brand-icons/messenger.js":()=>V(()=>import("./messenger-CaDRAr-b.js"),[]),"./brand-icons/mitsubishi.js":()=>V(()=>import("./mitsubishi-DnsdlJzq.js"),[]),"./brand-icons/netflix.js":()=>V(()=>import("./netflix-BQQvNjqW.js"),[]),"./brand-icons/nike.js":()=>V(()=>import("./nike-CQqk4eLe.js"),[]),"./brand-icons/nintendoswitch.js":()=>V(()=>import("./nintendoswitch-DabqU0av.js"),[]),"./brand-icons/nissan.js":()=>V(()=>import("./nissan-ByAdzwv7.js"),[]),"./brand-icons/nordvpn.js":()=>V(()=>import("./nordvpn-8Y1Pe2Cy.js"),[]),"./brand-icons/notion.js":()=>V(()=>import("./notion-D0FaaC_S.js"),[]),"./brand-icons/openai.js":()=>V(()=>import("./openai-CvQEFKhM.js"),[]),"./brand-icons/oppo.js":()=>V(()=>import("./oppo-CtZkq0iL.js"),[]),"./brand-icons/patreon.js":()=>V(()=>import("./patreon-Cgi1AMep.js"),[]),"./brand-icons/paypal.js":()=>V(()=>import("./paypal-klZJXRR5.js"),[]),"./brand-icons/perplexity.js":()=>V(()=>import("./perplexity-ZTjoHRA0.js"),[]),"./brand-icons/pinterest.js":()=>V(()=>import("./pinterest-CKr7QArU.js"),[]),"./brand-icons/playstation.js":()=>V(()=>import("./playstation-CTfIUaqK.js"),[]),"./brand-icons/primevideo.js":()=>V(()=>import("./primevideo-Byl7UFA-.js"),[]),"./brand-icons/roblox.js":()=>V(()=>import("./roblox-_F2R7ZKS.js"),[]),"./brand-icons/samsung.js":()=>V(()=>import("./samsung-B_t_liHH.js"),[]),"./brand-icons/shell.js":()=>V(()=>import("./shell-BIpGpjau.js"),[]),"./brand-icons/shopee.js":()=>V(()=>import("./shopee-Bs2iWnxz.js"),[]),"./brand-icons/slack.js":()=>V(()=>import("./slack-75zySf2G.js"),[]),"./brand-icons/snapchat.js":()=>V(()=>import("./snapchat-CPiEDscF.js"),[]),"./brand-icons/soundcloud.js":()=>V(()=>import("./soundcloud-BBH8gZHV.js"),[]),"./brand-icons/spotify.js":()=>V(()=>import("./spotify-B_qVdDhj.js"),[]),"./brand-icons/starbucks.js":()=>V(()=>import("./starbucks-DF2cwUqt.js"),[]),"./brand-icons/steam.js":()=>V(()=>import("./steam-CS1KFeMC.js"),[]),"./brand-icons/suzuki.js":()=>V(()=>import("./suzuki-TLXQdY_a.js"),[]),"./brand-icons/telegram.js":()=>V(()=>import("./telegram-Bj1cRE8S.js"),[]),"./brand-icons/tesla.js":()=>V(()=>import("./tesla-Bch3k-t6.js"),[]),"./brand-icons/tidal.js":()=>V(()=>import("./tidal-UWumJdzo.js"),[]),"./brand-icons/tiktok.js":()=>V(()=>import("./tiktok-wkIpYuJU.js"),[]),"./brand-icons/toyota.js":()=>V(()=>import("./toyota-Dy60P9dg.js"),[]),"./brand-icons/tripadvisor.js":()=>V(()=>import("./tripadvisor-DD1XuwRQ.js"),[]),"./brand-icons/tripdotcom.js":()=>V(()=>import("./tripdotcom-C2ph0l9V.js"),[]),"./brand-icons/twitch.js":()=>V(()=>import("./twitch-BkTzJ-pQ.js"),[]),"./brand-icons/uber.js":()=>V(()=>import("./uber-C_GI5I78.js"),[]),"./brand-icons/ubereats.js":()=>V(()=>import("./ubereats-BOutM2TN.js"),[]),"./brand-icons/udemy.js":()=>V(()=>import("./udemy-CCkTko6L.js"),[]),"./brand-icons/uniqlo.js":()=>V(()=>import("./uniqlo-BRPwj_dP.js"),[]),"./brand-icons/visa.js":()=>V(()=>import("./visa-DU-4OIJV.js"),[]),"./brand-icons/whatsapp.js":()=>V(()=>import("./whatsapp-qy7qRrjE.js"),[]),"./brand-icons/wise.js":()=>V(()=>import("./wise-DdBiRZhN.js"),[]),"./brand-icons/x.js":()=>V(()=>import("./x-CG_DUqJq.js"),[]),"./brand-icons/xiaomi.js":()=>V(()=>import("./xiaomi-D5HYuHGY.js"),[]),"./brand-icons/youtube.js":()=>V(()=>import("./youtube-1Fc4bTfZ.js"),[]),"./brand-icons/youtubemusic.js":()=>V(()=>import("./youtubemusic-DYGvrmqP.js"),[]),"./brand-icons/zara.js":()=>V(()=>import("./zara-BVgS0uKm.js"),[]),"./brand-icons/zoom.js":()=>V(()=>import("./zoom-CNAWINv7.js"),[])})}catch{}const Hi={},hu={},Sa=new Set;function tg(n){if(Hi[n]||hu[n])return;const e=vd[`./brand-icons/${n}.js`];e&&(hu[n]=e().then(t=>{Hi[n]=t.default,Sa.forEach(r=>r())}).catch(()=>{}))}function ng(n){const[,e]=te(0);return de(()=>{if(!n||Hi[n])return;const t=()=>e(r=>r+1);return Sa.add(t),tg(n),()=>Sa.delete(t)},[n]),n?Hi[n]:null}function rg({b:n,size:e,name:t}){const r=ng(n.si);if(n.text){const s=/[ก-๙]/.test(n.text)?Math.ceil(n.text.replace(/[ิีึืุูั่้๊๋็์]/g,"").length*.75):n.text.length,i=Math.round(e*(s>5?.21:s>3?.26:.32));return h("b",{class:"brand-wm",style:{fontSize:i},children:n.text})}if(r){const s=Math.round(e*.58);return h("svg",{viewBox:"0 0 24 24",width:s,height:s,"aria-hidden":"true",children:h("path",{d:r,fill:n.fg})})}return h(Z,{name:n.icon||t,size:Math.round(e*.5)})}function sg({desc:n,name:e,size:t=40,iconSize:r}){const s=Km(n);if(!s)return h("span",{class:"ico",style:t!==40?{width:t,height:t}:void 0,children:h(Z,{name:e,size:r})});const i={width:t,height:t,background:s.bg,color:s.fg,borderRadius:s.round?"50%":Math.round(t*.3)};return s.ring&&(i.boxShadow="inset 0 0 0 1.5px #e3e8f5"),h("span",{class:"ico brand",style:i,"aria-hidden":"true",children:h(rg,{b:s,size:t,name:e})})}function du({size:n=24}){return h("svg",{viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",style:{flex:"none"},children:[h("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),h("path",{d:"M19 13h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),h("path",{d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"}),h("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"}),h("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"})]})}function ds({size:n=88,label:e=""}){return h("div",{class:"ld-wrap",role:"status","aria-live":"polite",children:[h("svg",{class:"ld",viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",children:[h("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),h("g",{class:"ld-l",children:[h("path",{d:"M19 13h13v35l-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),h("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),h("g",{class:"ld-r",children:[h("path",{d:"M32 13h13v38l-4.3-3-4.4 3-4.3-3z",fill:"#ffffff"}),h("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),h("path",{class:"ld-cut",d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"})]}),e?h("p",{class:"ld-t",children:e}):null]})}var fu={};/**
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
 */const Ed=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ig=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let m=(c&15)<<2|d>>6,E=d&63;l||(E=64,a||(m=64)),r.push(t[f],t[g],t[m],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ed(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ig(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new og;const m=i<<2|c>>4;if(r.push(m),d!==64){const E=c<<4&240|d>>2;if(r.push(E),g!==64){const R=d<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class og extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ag=function(n){const e=Ed(n);return wd.encodeByteArray(e,!0)},Gi=function(n){return ag(n).replace(/\./g,"")},bd=function(n){try{return wd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lg=()=>cg().__FIREBASE_DEFAULTS__,ug=()=>{if(typeof process>"u"||typeof fu>"u")return;const n=fu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bd(n[1]);return e&&JSON.parse(e)},wo=()=>{try{return lg()||ug()||hg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Td=n=>{var e,t;return(t=(e=wo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},dg=n=>{const e=Td(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Id=()=>{var n;return(n=wo())===null||n===void 0?void 0:n.config},Ad=n=>{var e;return(e=wo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class fg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function pg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gi(JSON.stringify(t)),Gi(JSON.stringify(a)),""].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function gg(){var n;const e=(n=wo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _g(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Eg(){const n=Ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wg(){return!gg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bg(){try{return typeof indexedDB=="object"}catch{return!1}}function Tg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ig="FirebaseError";class Zt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ig,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Ag(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Zt(s,c,r)}}function Ag(n,e){return n.replace(Sg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Sg=/\{\$([^}]+)}/g;function Rg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ki(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(pu(i)&&pu(a)){if(!Ki(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function pu(n){return n!==null&&typeof n=="object"}/**
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
 */function Fs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kg(n,e){const t=new Pg(n,e);return t.subscribe.bind(t)}class Pg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=la),s.error===void 0&&(s.error=la),s.complete===void 0&&(s.complete=la);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function la(){}/**
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
 */function Ne(n){return n&&n._delegate?n._delegate:n}class Hn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class Dg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vg(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mg(n){return n===Un?void 0:n}function Vg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ng{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const Og={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Lg=ae.INFO,xg={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Fg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=xg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=Lg,this._logHandler=Fg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Og[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Ug=(n,e)=>e.some(t=>n instanceof t);let mu,gu;function jg(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bg(){return gu||(gu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sd=new WeakMap,Ra=new WeakMap,Rd=new WeakMap,ua=new WeakMap,dc=new WeakMap;function $g(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(_n(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Sd.set(t,n)}).catch(()=>{}),dc.set(e,n),e}function zg(n){if(Ra.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ra.set(n,e)}let ka={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ra.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qg(n){ka=n(ka)}function Wg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ha(this),e,...t);return Rd.set(r,e.sort?e.sort():[e]),_n(r)}:Bg().includes(n)?function(...e){return n.apply(ha(this),e),_n(Sd.get(this))}:function(...e){return _n(n.apply(ha(this),e))}}function Hg(n){return typeof n=="function"?Wg(n):(n instanceof IDBTransaction&&zg(n),Ug(n,jg())?new Proxy(n,ka):n)}function _n(n){if(n instanceof IDBRequest)return $g(n);if(ua.has(n))return ua.get(n);const e=Hg(n);return e!==n&&(ua.set(n,e),dc.set(e,n)),e}const ha=n=>dc.get(n);function Gg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=_n(a);return r&&a.addEventListener("upgradeneeded",l=>{r(_n(a.result),l.oldVersion,l.newVersion,_n(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Kg=["get","getKey","getAll","getAllKeys","count"],Qg=["put","add","delete","clear"],da=new Map;function _u(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Qg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kg.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return da.set(e,i),i}qg(n=>({...n,get:(e,t,r)=>_u(e,t)||n.get(e,t,r),has:(e,t)=>!!_u(e,t)||n.has(e,t)}));/**
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
 */class Xg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Yg(n){const e=n.getComponent();return e?.type==="VERSION"}const Pa="@firebase/app",yu="0.10.13";/**
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
 */const Ht=new hc("@firebase/app"),Jg="@firebase/app-compat",Zg="@firebase/analytics-compat",e_="@firebase/analytics",t_="@firebase/app-check-compat",n_="@firebase/app-check",r_="@firebase/auth",s_="@firebase/auth-compat",i_="@firebase/database",o_="@firebase/data-connect",a_="@firebase/database-compat",c_="@firebase/functions",l_="@firebase/functions-compat",u_="@firebase/installations",h_="@firebase/installations-compat",d_="@firebase/messaging",f_="@firebase/messaging-compat",p_="@firebase/performance",m_="@firebase/performance-compat",g_="@firebase/remote-config",__="@firebase/remote-config-compat",y_="@firebase/storage",v_="@firebase/storage-compat",E_="@firebase/firestore",w_="@firebase/vertexai-preview",b_="@firebase/firestore-compat",T_="firebase",I_="10.14.1";/**
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
 */const Ca="[DEFAULT]",A_={[Pa]:"fire-core",[Jg]:"fire-core-compat",[e_]:"fire-analytics",[Zg]:"fire-analytics-compat",[n_]:"fire-app-check",[t_]:"fire-app-check-compat",[r_]:"fire-auth",[s_]:"fire-auth-compat",[i_]:"fire-rtdb",[o_]:"fire-data-connect",[a_]:"fire-rtdb-compat",[c_]:"fire-fn",[l_]:"fire-fn-compat",[u_]:"fire-iid",[h_]:"fire-iid-compat",[d_]:"fire-fcm",[f_]:"fire-fcm-compat",[p_]:"fire-perf",[m_]:"fire-perf-compat",[g_]:"fire-rc",[__]:"fire-rc-compat",[y_]:"fire-gcs",[v_]:"fire-gcs-compat",[E_]:"fire-fst",[b_]:"fire-fst-compat",[w_]:"fire-vertex","fire-js":"fire-js",[T_]:"fire-js-all"};/**
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
 */const Qi=new Map,S_=new Map,Da=new Map;function vu(n,e){try{n.container.addComponent(e)}catch(t){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function kr(n){const e=n.name;if(Da.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,n);for(const t of Qi.values())vu(t,n);for(const t of S_.values())vu(t,n);return!0}function fc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bt(n){return n.settings!==void 0}/**
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
 */const R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new xs("app","Firebase",R_);/**
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
 */class k_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const jr=I_;function kd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ca,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yn.create("bad-app-name",{appName:String(s)});if(t||(t=Id()),!t)throw yn.create("no-options");const i=Qi.get(s);if(i){if(Ki(t,i.options)&&Ki(r,i.config))return i;throw yn.create("duplicate-app",{appName:s})}const a=new Ng(s);for(const l of Da.values())a.addComponent(l);const c=new k_(t,r,a);return Qi.set(s,c),c}function Pd(n=Ca){const e=Qi.get(n);if(!e&&n===Ca&&Id())return kd();if(!e)throw yn.create("no-app",{appName:n});return e}function vn(n,e,t){var r;let s=(r=A_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(c.join(" "));return}kr(new Hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const P_="firebase-heartbeat-database",C_=1,ks="firebase-heartbeat-store";let fa=null;function Cd(){return fa||(fa=Gg(P_,C_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ks)}catch(t){console.warn(t)}}}}).catch(n=>{throw yn.create("idb-open",{originalErrorMessage:n.message})})),fa}async function D_(n){try{const t=(await Cd()).transaction(ks),r=await t.objectStore(ks).get(Dd(n));return await t.done,r}catch(e){if(e instanceof Zt)Ht.warn(e.message);else{const t=yn.create("idb-get",{originalErrorMessage:e?.message});Ht.warn(t.message)}}}async function Eu(n,e){try{const r=(await Cd()).transaction(ks,"readwrite");await r.objectStore(ks).put(e,Dd(n)),await r.done}catch(t){if(t instanceof Zt)Ht.warn(t.message);else{const r=yn.create("idb-set",{originalErrorMessage:t?.message});Ht.warn(r.message)}}}function Dd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const M_=1024,V_=30*24*60*60*1e3;class N_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=V_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wu(),{heartbeatsToSend:r,unsentEntries:s}=O_(this._heartbeatsCache.heartbeats),i=Gi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ht.warn(t),""}}}function wu(){return new Date().toISOString().substring(0,10)}function O_(n,e=M_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),bu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class L_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bg()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await D_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bu(n){return Gi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function x_(n){kr(new Hn("platform-logger",e=>new Xg(e),"PRIVATE")),kr(new Hn("heartbeat",e=>new N_(e),"PRIVATE")),vn(Pa,yu,n),vn(Pa,yu,"esm2017"),vn("fire-js","")}x_("");var F_="firebase",U_="10.14.1";/**
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
 */vn(F_,U_,"app");var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $n,Md;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function w(){}w.prototype=v.prototype,b.D=v.prototype,b.prototype=new w,b.prototype.constructor=b,b.C=function(T,S,k){for(var _=Array(arguments.length-2),G=2;G<arguments.length;G++)_[G-2]=arguments[G];return v.prototype[S].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,w){w||(w=0);var T=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)T[S]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(S=0;16>S;++S)T[S]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=b.g[0],w=b.g[1],S=b.g[2];var k=b.g[3],_=v+(k^w&(S^k))+T[0]+3614090360&4294967295;v=w+(_<<7&4294967295|_>>>25),_=k+(S^v&(w^S))+T[1]+3905402710&4294967295,k=v+(_<<12&4294967295|_>>>20),_=S+(w^k&(v^w))+T[2]+606105819&4294967295,S=k+(_<<17&4294967295|_>>>15),_=w+(v^S&(k^v))+T[3]+3250441966&4294967295,w=S+(_<<22&4294967295|_>>>10),_=v+(k^w&(S^k))+T[4]+4118548399&4294967295,v=w+(_<<7&4294967295|_>>>25),_=k+(S^v&(w^S))+T[5]+1200080426&4294967295,k=v+(_<<12&4294967295|_>>>20),_=S+(w^k&(v^w))+T[6]+2821735955&4294967295,S=k+(_<<17&4294967295|_>>>15),_=w+(v^S&(k^v))+T[7]+4249261313&4294967295,w=S+(_<<22&4294967295|_>>>10),_=v+(k^w&(S^k))+T[8]+1770035416&4294967295,v=w+(_<<7&4294967295|_>>>25),_=k+(S^v&(w^S))+T[9]+2336552879&4294967295,k=v+(_<<12&4294967295|_>>>20),_=S+(w^k&(v^w))+T[10]+4294925233&4294967295,S=k+(_<<17&4294967295|_>>>15),_=w+(v^S&(k^v))+T[11]+2304563134&4294967295,w=S+(_<<22&4294967295|_>>>10),_=v+(k^w&(S^k))+T[12]+1804603682&4294967295,v=w+(_<<7&4294967295|_>>>25),_=k+(S^v&(w^S))+T[13]+4254626195&4294967295,k=v+(_<<12&4294967295|_>>>20),_=S+(w^k&(v^w))+T[14]+2792965006&4294967295,S=k+(_<<17&4294967295|_>>>15),_=w+(v^S&(k^v))+T[15]+1236535329&4294967295,w=S+(_<<22&4294967295|_>>>10),_=v+(S^k&(w^S))+T[1]+4129170786&4294967295,v=w+(_<<5&4294967295|_>>>27),_=k+(w^S&(v^w))+T[6]+3225465664&4294967295,k=v+(_<<9&4294967295|_>>>23),_=S+(v^w&(k^v))+T[11]+643717713&4294967295,S=k+(_<<14&4294967295|_>>>18),_=w+(k^v&(S^k))+T[0]+3921069994&4294967295,w=S+(_<<20&4294967295|_>>>12),_=v+(S^k&(w^S))+T[5]+3593408605&4294967295,v=w+(_<<5&4294967295|_>>>27),_=k+(w^S&(v^w))+T[10]+38016083&4294967295,k=v+(_<<9&4294967295|_>>>23),_=S+(v^w&(k^v))+T[15]+3634488961&4294967295,S=k+(_<<14&4294967295|_>>>18),_=w+(k^v&(S^k))+T[4]+3889429448&4294967295,w=S+(_<<20&4294967295|_>>>12),_=v+(S^k&(w^S))+T[9]+568446438&4294967295,v=w+(_<<5&4294967295|_>>>27),_=k+(w^S&(v^w))+T[14]+3275163606&4294967295,k=v+(_<<9&4294967295|_>>>23),_=S+(v^w&(k^v))+T[3]+4107603335&4294967295,S=k+(_<<14&4294967295|_>>>18),_=w+(k^v&(S^k))+T[8]+1163531501&4294967295,w=S+(_<<20&4294967295|_>>>12),_=v+(S^k&(w^S))+T[13]+2850285829&4294967295,v=w+(_<<5&4294967295|_>>>27),_=k+(w^S&(v^w))+T[2]+4243563512&4294967295,k=v+(_<<9&4294967295|_>>>23),_=S+(v^w&(k^v))+T[7]+1735328473&4294967295,S=k+(_<<14&4294967295|_>>>18),_=w+(k^v&(S^k))+T[12]+2368359562&4294967295,w=S+(_<<20&4294967295|_>>>12),_=v+(w^S^k)+T[5]+4294588738&4294967295,v=w+(_<<4&4294967295|_>>>28),_=k+(v^w^S)+T[8]+2272392833&4294967295,k=v+(_<<11&4294967295|_>>>21),_=S+(k^v^w)+T[11]+1839030562&4294967295,S=k+(_<<16&4294967295|_>>>16),_=w+(S^k^v)+T[14]+4259657740&4294967295,w=S+(_<<23&4294967295|_>>>9),_=v+(w^S^k)+T[1]+2763975236&4294967295,v=w+(_<<4&4294967295|_>>>28),_=k+(v^w^S)+T[4]+1272893353&4294967295,k=v+(_<<11&4294967295|_>>>21),_=S+(k^v^w)+T[7]+4139469664&4294967295,S=k+(_<<16&4294967295|_>>>16),_=w+(S^k^v)+T[10]+3200236656&4294967295,w=S+(_<<23&4294967295|_>>>9),_=v+(w^S^k)+T[13]+681279174&4294967295,v=w+(_<<4&4294967295|_>>>28),_=k+(v^w^S)+T[0]+3936430074&4294967295,k=v+(_<<11&4294967295|_>>>21),_=S+(k^v^w)+T[3]+3572445317&4294967295,S=k+(_<<16&4294967295|_>>>16),_=w+(S^k^v)+T[6]+76029189&4294967295,w=S+(_<<23&4294967295|_>>>9),_=v+(w^S^k)+T[9]+3654602809&4294967295,v=w+(_<<4&4294967295|_>>>28),_=k+(v^w^S)+T[12]+3873151461&4294967295,k=v+(_<<11&4294967295|_>>>21),_=S+(k^v^w)+T[15]+530742520&4294967295,S=k+(_<<16&4294967295|_>>>16),_=w+(S^k^v)+T[2]+3299628645&4294967295,w=S+(_<<23&4294967295|_>>>9),_=v+(S^(w|~k))+T[0]+4096336452&4294967295,v=w+(_<<6&4294967295|_>>>26),_=k+(w^(v|~S))+T[7]+1126891415&4294967295,k=v+(_<<10&4294967295|_>>>22),_=S+(v^(k|~w))+T[14]+2878612391&4294967295,S=k+(_<<15&4294967295|_>>>17),_=w+(k^(S|~v))+T[5]+4237533241&4294967295,w=S+(_<<21&4294967295|_>>>11),_=v+(S^(w|~k))+T[12]+1700485571&4294967295,v=w+(_<<6&4294967295|_>>>26),_=k+(w^(v|~S))+T[3]+2399980690&4294967295,k=v+(_<<10&4294967295|_>>>22),_=S+(v^(k|~w))+T[10]+4293915773&4294967295,S=k+(_<<15&4294967295|_>>>17),_=w+(k^(S|~v))+T[1]+2240044497&4294967295,w=S+(_<<21&4294967295|_>>>11),_=v+(S^(w|~k))+T[8]+1873313359&4294967295,v=w+(_<<6&4294967295|_>>>26),_=k+(w^(v|~S))+T[15]+4264355552&4294967295,k=v+(_<<10&4294967295|_>>>22),_=S+(v^(k|~w))+T[6]+2734768916&4294967295,S=k+(_<<15&4294967295|_>>>17),_=w+(k^(S|~v))+T[13]+1309151649&4294967295,w=S+(_<<21&4294967295|_>>>11),_=v+(S^(w|~k))+T[4]+4149444226&4294967295,v=w+(_<<6&4294967295|_>>>26),_=k+(w^(v|~S))+T[11]+3174756917&4294967295,k=v+(_<<10&4294967295|_>>>22),_=S+(v^(k|~w))+T[2]+718787259&4294967295,S=k+(_<<15&4294967295|_>>>17),_=w+(k^(S|~v))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(S+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+k&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var w=v-this.blockSize,T=this.B,S=this.h,k=0;k<v;){if(S==0)for(;k<=w;)s(this,b,k),k+=this.blockSize;if(typeof b=="string"){for(;k<v;)if(T[S++]=b.charCodeAt(k++),S==this.blockSize){s(this,T),S=0;break}}else for(;k<v;)if(T[S++]=b[k++],S==this.blockSize){s(this,T),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var w=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=w&255,w/=256;for(this.u(b),b=Array(16),v=w=0;4>v;++v)for(var T=0;32>T;T+=8)b[w++]=this.g[v]>>>T&255;return b};function i(b,v){var w=c;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=v(b)}function a(b,v){this.h=v;for(var w=[],T=!0,S=b.length-1;0<=S;S--){var k=b[S]|0;T&&k==v||(w[S]=k,T=!1)}this.g=w}var c={};function l(b){return-128<=b&&128>b?i(b,function(v){return new a([v|0],0>v?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return g;if(0>b)return A(d(-b));for(var v=[],w=1,T=0;b>=w;T++)v[T]=b/w|0,w*=4294967296;return new a(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return A(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),T=g,S=0;S<b.length;S+=8){var k=Math.min(8,b.length-S),_=parseInt(b.substring(S,S+k),v);8>k?(k=d(Math.pow(v,k)),T=T.j(k).add(d(_))):(T=T.j(w),T=T.add(d(_)))}return T}var g=l(0),m=l(1),E=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-A(this).m();for(var b=0,v=1,w=0;w<this.g.length;w++){var T=this.i(w);b+=(0<=T?T:4294967296+T)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(D(this))return"-"+A(this).toString(b);for(var v=d(Math.pow(b,6)),w=this,T="";;){var S=H(w,v).g;w=N(w,S.j(v));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(b);if(w=S,R(w))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function D(b){return b.h==-1}n.l=function(b){return b=N(this,b),D(b)?-1:R(b)?0:1};function A(b){for(var v=b.g.length,w=[],T=0;T<v;T++)w[T]=~b.g[T];return new a(w,~b.h).add(m)}n.abs=function(){return D(this)?A(this):this},n.add=function(b){for(var v=Math.max(this.g.length,b.g.length),w=[],T=0,S=0;S<=v;S++){var k=T+(this.i(S)&65535)+(b.i(S)&65535),_=(k>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);T=_>>>16,k&=65535,_&=65535,w[S]=_<<16|k}return new a(w,w[w.length-1]&-2147483648?-1:0)};function N(b,v){return b.add(A(v))}n.j=function(b){if(R(this)||R(b))return g;if(D(this))return D(b)?A(this).j(A(b)):A(A(this).j(b));if(D(b))return A(this.j(A(b)));if(0>this.l(E)&&0>b.l(E))return d(this.m()*b.m());for(var v=this.g.length+b.g.length,w=[],T=0;T<2*v;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<b.g.length;S++){var k=this.i(T)>>>16,_=this.i(T)&65535,G=b.i(S)>>>16,We=b.i(S)&65535;w[2*T+2*S]+=_*We,F(w,2*T+2*S),w[2*T+2*S+1]+=k*We,F(w,2*T+2*S+1),w[2*T+2*S+1]+=_*G,F(w,2*T+2*S+1),w[2*T+2*S+2]+=k*G,F(w,2*T+2*S+2)}for(T=0;T<v;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=v;T<2*v;T++)w[T]=0;return new a(w,0)};function F(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function B(b,v){this.g=b,this.h=v}function H(b,v){if(R(v))throw Error("division by zero");if(R(b))return new B(g,g);if(D(b))return v=H(A(b),v),new B(A(v.g),A(v.h));if(D(v))return v=H(b,A(v)),new B(A(v.g),v.h);if(30<b.g.length){if(D(b)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=v;0>=T.l(b);)w=W(w),T=W(T);var S=ee(w,1),k=ee(T,1);for(T=ee(T,2),w=ee(w,2);!R(T);){var _=k.add(T);0>=_.l(b)&&(S=S.add(w),k=_),T=ee(T,1),w=ee(w,1)}return v=N(b,S.j(v)),new B(S,v)}for(S=g;0<=b.l(v);){for(w=Math.max(1,Math.floor(b.m()/v.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=d(w),_=k.j(v);D(_)||0<_.l(b);)w-=T,k=d(w),_=k.j(v);R(k)&&(k=m),S=S.add(k),b=N(b,_)}return new B(S,b)}n.A=function(b){return H(this,b).h},n.and=function(b){for(var v=Math.max(this.g.length,b.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)&b.i(T);return new a(w,this.h&b.h)},n.or=function(b){for(var v=Math.max(this.g.length,b.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)|b.i(T);return new a(w,this.h|b.h)},n.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)^b.i(T);return new a(w,this.h^b.h)};function W(b){for(var v=b.g.length+1,w=[],T=0;T<v;T++)w[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(w,b.h)}function ee(b,v){var w=v>>5;v%=32;for(var T=b.g.length-w,S=[],k=0;k<T;k++)S[k]=0<v?b.i(k+w)>>>v|b.i(k+w+1)<<32-v:b.i(k+w);return new a(S,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Md=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,$n=a}).apply(typeof Tu<"u"?Tu:typeof self<"u"?self:typeof window<"u"?window:{});var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vd,_s,Nd,Di,Ma,Od,Ld,xd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,p){return o==Array.prototype||o==Object.prototype||(o[u]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var u=0;u<o.length;++u){var p=o[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var p=r;o=o.split(".");for(var y=0;y<o.length-1;y++){var P=o[y];if(!(P in p))break e;p=p[P]}o=o[o.length-1],y=p[o],u=u(y),u!=y&&u!=null&&e(p,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var p=0,y=!1,P={next:function(){if(!y&&p<o.length){var C=p++;return{value:u(C,o[C]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,p){return o.call.apply(o.bind,arguments)}function g(o,u,p){if(!o)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function m(o,u,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function E(o,u){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function R(o,u){function p(){}p.prototype=u.prototype,o.aa=u.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(y,P,C){for(var U=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)U[fe-2]=arguments[fe];return u.prototype[P].apply(y,U)}}function D(o){const u=o.length;if(0<u){const p=Array(u);for(let y=0;y<u;y++)p[y]=o[y];return p}return[]}function A(o,u){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(l(y)){const P=o.length||0,C=y.length||0;o.length=P+C;for(let U=0;U<C;U++)o[P+U]=y[U]}else o.push(y)}}class N{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var W=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ee(o,u,p){for(const y in o)u.call(p,o[y],y,o)}function b(o,u){for(const p in o)u.call(void 0,o[p],p,o)}function v(o){const u={};for(const p in o)u[p]=o[p];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let p,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(p in y)o[p]=y[p];for(let C=0;C<w.length;C++)p=w[C],Object.prototype.hasOwnProperty.call(y,p)&&(o[p]=y[p])}}function S(o){var u=1;o=o.split(":");const p=[];for(;0<u&&o.length;)p.push(o.shift()),u--;return o.length&&p.push(o.join(":")),p}function k(o){c.setTimeout(()=>{throw o},0)}function _(){var o=en;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,p){const y=We.get();y.set(u,p),this.h?this.h.next=y:this.g=y,this.h=y}}var We=new N(()=>new yt,o=>o.reset());class yt{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,it=!1,en=new G,Zs=()=>{const o=c.Promise.resolve(void 0);Ot=()=>{o.then(Gr)}};var Gr=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(p){k(p)}var u=We;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}it=!1};function bt(){this.s=this.s,this.C=this.C}bt.prototype.s=!1,bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Kr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,u),c.removeEventListener("test",p,u)}catch{}return o}();function vt(o,u){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(W){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else p=="mouseover"?u=o.fromElement:p=="mouseout"&&(u=o.toElement);this.relatedTarget=u,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Xo[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&vt.aa.h.call(this)}}R(vt,ge);var Xo={2:"touch",3:"pen",4:"mouse"};vt.prototype.h=function(){vt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var rr="closure_listenable_"+(1e6*Math.random()|0),ei=0;function De(o,u,p,y,P){this.listener=o,this.proxy=null,this.src=u,this.type=p,this.capture=!!y,this.ha=P,this.key=++ei,this.da=this.fa=!1}function tn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fe(o){this.src=o,this.g={},this.h=0}Fe.prototype.add=function(o,u,p,y,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var U=Lt(o,u,y,P);return-1<U?(u=o[U],p||(u.fa=!1)):(u=new De(u,this.src,C,!!y,P),u.fa=p,o.push(u)),u};function dt(o,u){var p=u.type;if(p in o.g){var y=o.g[p],P=Array.prototype.indexOf.call(y,u,void 0),C;(C=0<=P)&&Array.prototype.splice.call(y,P,1),C&&(tn(u),o.g[p].length==0&&(delete o.g[p],o.h--))}}function Lt(o,u,p,y){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==u&&C.capture==!!p&&C.ha==y)return P}return-1}var Pn="closure_lm_"+(1e6*Math.random()|0),sr={};function ti(o,u,p,y,P){if(Array.isArray(u)){for(var C=0;C<u.length;C++)ti(o,u[C],p,y,P);return null}return p=Xr(p),o&&o[rr]?o.K(u,p,d(y)?!!y.capture:!1,P):St(o,u,p,!1,y,P)}function St(o,u,p,y,P,C){if(!u)throw Error("Invalid event type");var U=d(P)?!!P.capture:!!P,fe=be(o);if(fe||(o[Pn]=fe=new Fe(o)),p=fe.add(u,p,y,U,C),p.proxy)return p;if(y=nn(),p.proxy=y,y.src=o,y.listener=p,o.addEventListener)Kr||(P=U),P===void 0&&(P=!1),o.addEventListener(u.toString(),y,P);else if(o.attachEvent)o.attachEvent(ir(u.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function nn(){function o(p){return u.call(o.src,o.listener,p)}const u=Qr;return o}function Oe(o,u,p,y,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)Oe(o,u[C],p,y,P);else y=d(y)?!!y.capture:!!y,p=Xr(p),o&&o[rr]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],p=Lt(C,p,y,P),-1<p&&(tn(C[p]),Array.prototype.splice.call(C,p,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=be(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Lt(u,p,y,P)),(p=-1<o?u[o]:null)&&tt(p))}function tt(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[rr])dt(u.i,o);else{var p=o.type,y=o.proxy;u.removeEventListener?u.removeEventListener(p,y,o.capture):u.detachEvent?u.detachEvent(ir(p),y):u.addListener&&u.removeListener&&u.removeListener(y),(p=be(u))?(dt(p,o),p.h==0&&(p.src=null,u[Pn]=null)):tn(o)}}}function ir(o){return o in sr?sr[o]:sr[o]="on"+o}function Qr(o,u){if(o.da)o=!0;else{u=new vt(u,this);var p=o.listener,y=o.ha||o.src;o.fa&&tt(o),o=p.call(y,u)}return o}function be(o){return o=o[Pn],o instanceof Fe?o:null}var rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xr(o){return typeof o=="function"?o:(o[rn]||(o[rn]=function(u){return o.handleEvent(u)}),o[rn])}function Ae(){bt.call(this),this.i=new Fe(this),this.M=this,this.F=null}R(Ae,bt),Ae.prototype[rr]=!0,Ae.prototype.removeEventListener=function(o,u,p,y){Oe(this,o,u,p,y)};function Le(o,u){var p,y=o.F;if(y)for(p=[];y;y=y.F)p.push(y);if(o=o.M,y=u.type||u,typeof u=="string")u=new ge(u,o);else if(u instanceof ge)u.target=u.target||o;else{var P=u;u=new ge(y,o),T(u,P)}if(P=!0,p)for(var C=p.length-1;0<=C;C--){var U=u.g=p[C];P=or(U,y,!0,u)&&P}if(U=u.g=o,P=or(U,y,!0,u)&&P,P=or(U,y,!1,u)&&P,p)for(C=0;C<p.length;C++)U=u.g=p[C],P=or(U,y,!1,u)&&P}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var p=o.g[u],y=0;y<p.length;y++)tn(p[y]);delete o.g[u],o.h--}}this.F=null},Ae.prototype.K=function(o,u,p,y){return this.i.add(String(o),u,!1,p,y)},Ae.prototype.L=function(o,u,p,y){return this.i.add(String(o),u,!0,p,y)};function or(o,u,p,y){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,C=0;C<u.length;++C){var U=u[C];if(U&&!U.da&&U.capture==p){var fe=U.listener,Ue=U.ha||U.src;U.fa&&dt(o.i,U),P=fe.call(Ue,y)!==!1&&P}}return P&&!y.defaultPrevented}function xt(o,u,p){if(typeof o=="function")p&&(o=m(o,p));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function ot(o){o.g=xt(()=>{o.g=null,o.i&&(o.i=!1,ot(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Cn extends bt{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rt(o){bt.call(this),this.h=o,this.g={}}R(Rt,bt);var ar=[];function Yr(o){ee(o.g,function(u,p){this.g.hasOwnProperty(p)&&tt(u)},o),o.g={}}Rt.prototype.N=function(){Rt.aa.N.call(this),Yr(this)},Rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jr=c.JSON.stringify,Zr=c.JSON.parse,Dn=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function cr(){}cr.prototype.h=null;function ne(o){return o.h||(o.h=o.i())}function es(){}var ft={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ts(){ge.call(this,"d")}R(ts,ge);function lr(){ge.call(this,"c")}R(lr,ge);var pt={},ur=null;function hr(){return ur=ur||new Ae}pt.La="serverreachability";function dr(o){ge.call(this,pt.La,o)}R(dr,ge);function Mn(o){const u=hr();Le(u,new dr(u))}pt.STAT_EVENT="statevent";function fr(o,u){ge.call(this,pt.STAT_EVENT,o),this.stat=u}R(fr,ge);function Me(o){const u=hr();Le(u,new fr(u,o))}pt.Ma="timingevent";function ns(o,u){ge.call(this,pt.Ma,o),this.size=u}R(ns,ge);function sn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Tt(){this.g=!0}Tt.prototype.xa=function(){this.g=!1};function ni(o,u,p,y,P,C){o.info(function(){if(o.g)if(C)for(var U="",fe=C.split("&"),Ue=0;Ue<fe.length;Ue++){var le=fe[Ue].split("=");if(1<le.length){var He=le[0];le=le[1];var Ge=He.split("_");U=2<=Ge.length&&Ge[1]=="type"?U+(He+"="+le+"&"):U+(He+"=redacted&")}}else U=null;else U=C;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+u+`
`+p+`
`+U})}function on(o,u,p,y,P,C,U){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+u+`
`+p+`
`+C+" "+U})}function kt(o,u,p,y){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Yo(o,p)+(y?" "+y:"")})}function ri(o,u){o.info(function(){return"TIMEOUT: "+u})}Tt.prototype.info=function(){};function Yo(o,u){if(!o.g)return u;if(!u)return null;try{var p=JSON.parse(u);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var y=p[o];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return Jr(p)}catch{return u}}var pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pt;function Vn(){}R(Vn,cr),Vn.prototype.g=function(){return new XMLHttpRequest},Vn.prototype.i=function(){return{}},Pt=new Vn;function nt(o,u,p,y){this.j=o,this.i=u,this.l=p,this.R=y||1,this.U=new Rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new I}function I(){this.i=null,this.g="",this.h=!1}var x={},z={};function Nn(o,u,p){o.L=1,o.v=ci(Ft(u)),o.m=p,o.P=!0,ml(o,null)}function ml(o,u){o.F=Date.now(),ii(o),o.A=Ft(o.v);var p=o.A,y=o.R;Array.isArray(y)||(y=[String(y)]),Pl(p.i,"t",y),o.C=0,p=o.j.J,o.h=new I,o.g=Gl(o.j,p?u:null,!o.m),0<o.O&&(o.M=new Cn(m(o.Y,o,o.g),o.O)),u=o.U,p=o.g,y=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(ar[0]=P.toString()),P=ar);for(var C=0;C<P.length;C++){var U=ti(p,P[C],y||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Mn(),ni(o.i,o.u,o.A,o.l,o.R,o.m)}nt.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ut(o)==3?u.j():this.Y(o)},nt.prototype.Y=function(o){try{if(o==this.g)e:{const Ge=Ut(this.g);var u=this.g.Ba();const _r=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||Ll(this.g)))){this.J||Ge!=4||u==7||(u==8||0>=_r?Mn(3):Mn(2)),Jo(this);var p=this.g.Z();this.X=p;t:if(gl(this)){var y=Ll(this.g);o="";var P=y.length,C=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),rs(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(y[u],{stream:!(C&&u==P-1)});y.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,on(this.i,this.u,this.A,this.l,this.R,Ge,p),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ue=this.g;if((fe=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(fe)){var le=fe;break t}}le=null}if(p=le)kt(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zo(this,p);else{this.o=!1,this.s=3,Me(12),On(this),rs(this);break e}}if(this.P){p=!0;let It;for(;!this.J&&this.C<U.length;)if(It=fm(this,U),It==z){Ge==4&&(this.s=4,Me(14),p=!1),kt(this.i,this.l,null,"[Incomplete Response]");break}else if(It==x){this.s=4,Me(15),kt(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else kt(this.i,this.l,It,null),Zo(this,It);if(gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||U.length!=0||this.h.h||(this.s=1,Me(16),p=!1),this.o=this.o&&p,!p)kt(this.i,this.l,U,"[Invalid Chunked Response]"),On(this),rs(this);else if(0<U.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ia(He),He.M=!0,Me(11))}}else kt(this.i,this.l,U,null),Zo(this,U);Ge==4&&On(this),this.o&&!this.J&&(Ge==4?zl(this.j,this):(this.o=!1,ii(this)))}else Cm(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),On(this),rs(this)}}}catch{}finally{}};function gl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function fm(o,u){var p=o.C,y=u.indexOf(`
`,p);return y==-1?z:(p=Number(u.substring(p,y)),isNaN(p)?x:(y+=1,y+p>u.length?z:(u=u.slice(y,y+p),o.C=y+p,u)))}nt.prototype.cancel=function(){this.J=!0,On(this)};function ii(o){o.S=Date.now()+o.I,_l(o,o.I)}function _l(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=sn(m(o.ba,o),u)}function Jo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}nt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ri(this.i,this.A),this.L!=2&&(Mn(),Me(17)),On(this),this.s=2,rs(this)):_l(this,this.S-o)};function rs(o){o.j.G==0||o.J||zl(o.j,o)}function On(o){Jo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Yr(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Zo(o,u){try{var p=o.j;if(p.G!=0&&(p.g==o||ea(p.h,o))){if(!o.K&&ea(p.h,o)&&p.G==3){try{var y=p.Da.g.parse(u)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)pi(p),di(p);else break e;sa(p),Me(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=sn(m(p.Za,p),6e3));if(1>=El(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else xn(p,11)}else if((o.K||p.g==o)&&pi(p),!F(u))for(P=p.Da.g.parse(u),u=0;u<P.length;u++){let le=P[u];if(p.T=le[0],le=le[1],p.G==2)if(le[0]=="c"){p.K=le[1],p.ia=le[2];const He=le[3];He!=null&&(p.la=He,p.j.info("VER="+p.la));const Ge=le[4];Ge!=null&&(p.Aa=Ge,p.j.info("SVER="+p.Aa));const _r=le[5];_r!=null&&typeof _r=="number"&&0<_r&&(y=1.5*_r,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const It=o.g;if(It){const gi=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gi){var C=y.h;C.g||gi.indexOf("spdy")==-1&&gi.indexOf("quic")==-1&&gi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ta(C,C.h),C.h=null))}if(y.D){const oa=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(y.ya=oa,_e(y.I,y.D,oa))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var U=o;if(y.qa=Hl(y,y.J?y.ia:null,y.W),U.K){wl(y.h,U);var fe=U,Ue=y.L;Ue&&(fe.I=Ue),fe.B&&(Jo(fe),ii(fe)),y.g=U}else Bl(y);0<p.i.length&&fi(p)}else le[0]!="stop"&&le[0]!="close"||xn(p,7);else p.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?xn(p,7):ra(p):le[0]!="noop"&&p.l&&p.l.ta(le),p.v=0)}}Mn(4)}catch{}}var pm=class{constructor(o,u){this.g=o,this.map=u}};function yl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function El(o){return o.h?1:o.g?o.g.size:0}function ea(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ta(o,u){o.g?o.g.add(u):o.h=u}function wl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}yl.prototype.cancel=function(){if(this.i=bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function bl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const p of o.g.values())u=u.concat(p.D);return u}return D(o.i)}function mm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],p=o.length,y=0;y<p;y++)u.push(o[y]);return u}u=[],p=0;for(y in o)u[p++]=o[y];return u}function gm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var p=0;p<o;p++)u.push(p);return u}u=[],p=0;for(const y in o)u[p++]=y;return u}}}function Tl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var p=gm(o),y=mm(o),P=y.length,C=0;C<P;C++)u.call(void 0,y[C],p&&p[C],o)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _m(o,u){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var y=o[p].indexOf("="),P=null;if(0<=y){var C=o[p].substring(0,y);P=o[p].substring(y+1)}else C=o[p];u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ln(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ln){this.h=o.h,oi(this,o.j),this.o=o.o,this.g=o.g,ai(this,o.s),this.l=o.l;var u=o.i,p=new os;p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),Al(this,p),this.m=o.m}else o&&(u=String(o).match(Il))?(this.h=!1,oi(this,u[1]||"",!0),this.o=ss(u[2]||""),this.g=ss(u[3]||"",!0),ai(this,u[4]),this.l=ss(u[5]||"",!0),Al(this,u[6]||"",!0),this.m=ss(u[7]||"")):(this.h=!1,this.i=new os(null,this.h))}Ln.prototype.toString=function(){var o=[],u=this.j;u&&o.push(is(u,Sl,!0),":");var p=this.g;return(p||u=="file")&&(o.push("//"),(u=this.o)&&o.push(is(u,Sl,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(is(p,p.charAt(0)=="/"?Em:vm,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",is(p,bm)),o.join("")};function Ft(o){return new Ln(o)}function oi(o,u,p){o.j=p?ss(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ai(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Al(o,u,p){u instanceof os?(o.i=u,Tm(o.i,o.h)):(p||(u=is(u,wm)),o.i=new os(u,o.h))}function _e(o,u,p){o.i.set(u,p)}function ci(o){return _e(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ss(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function is(o,u,p){return typeof o=="string"?(o=encodeURI(o).replace(u,ym),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ym(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Sl=/[#\/\?@]/g,vm=/[#\?:]/g,Em=/[#\?]/g,wm=/[#\?@]/g,bm=/#/g;function os(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&_m(o.i,function(u,p){o.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=os.prototype,n.add=function(o,u){an(this),this.i=null,o=mr(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(u),this.h+=1,this};function Rl(o,u){an(o),u=mr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function kl(o,u){return an(o),u=mr(o,u),o.g.has(u)}n.forEach=function(o,u){an(this),this.g.forEach(function(p,y){p.forEach(function(P){o.call(u,P,y,this)},this)},this)},n.na=function(){an(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),p=[];for(let y=0;y<u.length;y++){const P=o[y];for(let C=0;C<P.length;C++)p.push(u[y])}return p},n.V=function(o){an(this);let u=[];if(typeof o=="string")kl(this,o)&&(u=u.concat(this.g.get(mr(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)u=u.concat(o[p])}return u},n.set=function(o,u){return an(this),this.i=null,o=mr(this,o),kl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Pl(o,u,p){Rl(o,u),0<p.length&&(o.i=null,o.g.set(mr(o,u),D(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var p=0;p<u.length;p++){var y=u[p];const C=encodeURIComponent(String(y)),U=this.V(y);for(y=0;y<U.length;y++){var P=C;U[y]!==""&&(P+="="+encodeURIComponent(String(U[y]))),o.push(P)}}return this.i=o.join("&")};function mr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Tm(o,u){u&&!o.j&&(an(o),o.i=null,o.g.forEach(function(p,y){var P=y.toLowerCase();y!=P&&(Rl(this,y),Pl(this,P,p))},o)),o.j=u}function Im(o,u){const p=new Tt;if(c.Image){const y=new Image;y.onload=E(cn,p,"TestLoadImage: loaded",!0,u,y),y.onerror=E(cn,p,"TestLoadImage: error",!1,u,y),y.onabort=E(cn,p,"TestLoadImage: abort",!1,u,y),y.ontimeout=E(cn,p,"TestLoadImage: timeout",!1,u,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else u(!1)}function Am(o,u){const p=new Tt,y=new AbortController,P=setTimeout(()=>{y.abort(),cn(p,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:y.signal}).then(C=>{clearTimeout(P),C.ok?cn(p,"TestPingServer: ok",!0,u):cn(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),cn(p,"TestPingServer: error",!1,u)})}function cn(o,u,p,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(p)}catch{}}function Sm(){this.g=new Dn}function Rm(o,u,p){const y=p||"";try{Tl(o,function(P,C){let U=P;d(P)&&(U=Jr(P)),u.push(y+C+"="+encodeURIComponent(U))})}catch(P){throw u.push(y+"type="+encodeURIComponent("_badmap")),P}}function li(o){this.l=o.Ub||null,this.j=o.eb||!1}R(li,cr),li.prototype.g=function(){return new ui(this.l,this.j)},li.prototype.i=function(o){return function(){return o}}({});function ui(o,u){Ae.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ui,Ae),n=ui.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,cs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,cs(this)),this.g&&(this.readyState=3,cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?as(this):cs(this),this.readyState==3&&Cl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,as(this))},n.Qa=function(o){this.g&&(this.response=o,as(this))},n.ga=function(){this.g&&as(this)};function as(o){o.readyState=4,o.l=null,o.j=null,o.v=null,cs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=u.next();return o.join(`\r
`)};function cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Dl(o){let u="";return ee(o,function(p,y){u+=y,u+=":",u+=p,u+=`\r
`}),u}function na(o,u,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Dl(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):_e(o,u,p))}function Te(o){Ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Te,Ae);var km=/^https?$/i,Pm=["POST","PUT"];n=Te.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pt.g(),this.v=this.o?ne(this.o):ne(Pt),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Ml(this,C);return}if(o=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)p.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const C of y.keys())p.set(C,y.get(C));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(C=>C.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Pm,u,void 0))||y||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,U]of p)this.g.setRequestHeader(C,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ol(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Ml(this,C)}};function Ml(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Vl(o),hi(o)}function Vl(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),Te.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Nl(this):this.bb())},n.bb=function(){Nl(this)};function Nl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ut(o)!=4||o.Z()!=2)){if(o.u&&Ut(o)==4)xt(o.Ea,0,o);else if(Le(o,"readystatechange"),Ut(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var y;if(y=U===0){var P=String(o.D).match(Il)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),y=!km.test(P?P.toLowerCase():"")}p=y}if(p)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var C=2<Ut(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Vl(o)}}finally{hi(o)}}}}function hi(o,u){if(o.g){Ol(o);const p=o.g,y=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Le(o,"ready");try{p.onreadystatechange=y}catch{}}}function Ol(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ut(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Zr(u)}};function Ll(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Cm(o){const u={};o=(o.g&&2<=Ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(F(o[y]))continue;var p=S(o[y]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const C=u[P]||[];u[P]=C,C.push(p)}b(u,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(o,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||u}function xl(o){this.Aa=0,this.i=[],this.j=new Tt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ls("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ls("baseRetryDelayMs",5e3,o),this.cb=ls("retryDelaySeedMs",1e4,o),this.Wa=ls("forwardChannelMaxRetries",2,o),this.wa=ls("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new yl(o&&o.concurrentRequestLimit),this.Da=new Sm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xl.prototype,n.la=8,n.G=1,n.connect=function(o,u,p,y){Me(0),this.W=o,this.H=u||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Hl(this,null,this.W),fi(this)};function ra(o){if(Fl(o),o.G==3){var u=o.U++,p=Ft(o.I);if(_e(p,"SID",o.K),_e(p,"RID",u),_e(p,"TYPE","terminate"),us(o,p),u=new nt(o,o.j,u),u.L=2,u.v=ci(Ft(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=u.v,p=!0),p||(u.g=Gl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ii(u)}Wl(o)}function di(o){o.g&&(ia(o),o.g.cancel(),o.g=null)}function Fl(o){di(o),o.u&&(c.clearTimeout(o.u),o.u=null),pi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function fi(o){if(!vl(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ot||Zs(),it||(Ot(),it=!0),en.add(u,o),o.B=0}}function Dm(o,u){return El(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=sn(m(o.Ga,o,u),ql(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new nt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=v(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(u+=y,4096<u){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=jl(this,P,u),p=Ft(this.I),_e(p,"RID",o),_e(p,"CVER",22),this.D&&_e(p,"X-HTTP-Session-Id",this.D),us(this,p),C&&(this.O?u="headers="+encodeURIComponent(String(Dl(C)))+"&"+u:this.m&&na(p,this.m,C)),ta(this.h,P),this.Ua&&_e(p,"TYPE","init"),this.P?(_e(p,"$req",u),_e(p,"SID","null"),P.T=!0,Nn(P,p,null)):Nn(P,p,u),this.G=2}}else this.G==3&&(o?Ul(this,o):this.i.length==0||vl(this.h)||Ul(this))};function Ul(o,u){var p;u?p=u.l:p=o.U++;const y=Ft(o.I);_e(y,"SID",o.K),_e(y,"RID",p),_e(y,"AID",o.T),us(o,y),o.m&&o.o&&na(y,o.m,o.o),p=new nt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),u&&(o.i=u.D.concat(o.i)),u=jl(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ta(o.h,p),Nn(p,y,u)}function us(o,u){o.H&&ee(o.H,function(p,y){_e(u,y,p)}),o.l&&Tl({},function(p,y){_e(u,y,p)})}function jl(o,u,p){p=Math.min(o.i.length,p);var y=o.l?m(o.l.Na,o.l,o):null;e:{var P=o.i;let C=-1;for(;;){const U=["count="+p];C==-1?0<p?(C=P[0].g,U.push("ofs="+C)):C=0:U.push("ofs="+C);let fe=!0;for(let Ue=0;Ue<p;Ue++){let le=P[Ue].g;const He=P[Ue].map;if(le-=C,0>le)C=Math.max(0,P[Ue].g-100),fe=!1;else try{Rm(He,U,"req"+le+"_")}catch{y&&y(He)}}if(fe){y=U.join("&");break e}}}return o=o.i.splice(0,p),u.D=o,y}function Bl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ot||Zs(),it||(Ot(),it=!0),en.add(u,o),o.v=0}}function sa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=sn(m(o.Fa,o),ql(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,$l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=sn(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),di(this),$l(this))};function ia(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function $l(o){o.g=new nt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Ft(o.qa);_e(u,"RID","rpc"),_e(u,"SID",o.K),_e(u,"AID",o.T),_e(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&_e(u,"TO",o.ja),_e(u,"TYPE","xmlhttp"),us(o,u),o.m&&o.o&&na(u,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=ci(Ft(u)),p.m=null,p.P=!0,ml(p,o)}n.Za=function(){this.C!=null&&(this.C=null,di(this),sa(this),Me(19))};function pi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function zl(o,u){var p=null;if(o.g==u){pi(o),ia(o),o.g=null;var y=2}else if(ea(o.h,u))p=u.D,wl(o.h,u),y=1;else return;if(o.G!=0){if(u.o)if(y==1){p=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;y=hr(),Le(y,new ns(y,p)),fi(o)}else Bl(o);else if(P=u.s,P==3||P==0&&0<u.X||!(y==1&&Dm(o,u)||y==2&&sa(o)))switch(p&&0<p.length&&(u=o.h,u.i=u.i.concat(p)),P){case 1:xn(o,5);break;case 4:xn(o,10);break;case 3:xn(o,6);break;default:xn(o,2)}}}function ql(o,u){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*u}function xn(o,u){if(o.j.info("Error code "+u),u==2){var p=m(o.fb,o),y=o.Xa;const P=!y;y=new Ln(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||oi(y,"https"),ci(y),P?Im(y.toString(),p):Am(y.toString(),p)}else Me(2);o.G=0,o.l&&o.l.sa(u),Wl(o),Fl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Wl(o){if(o.G=0,o.ka=[],o.l){const u=bl(o.h);(u.length!=0||o.i.length!=0)&&(A(o.ka,u),A(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Hl(o,u,p){var y=p instanceof Ln?Ft(p):new Ln(p);if(y.g!="")u&&(y.g=u+"."+y.g),ai(y,y.s);else{var P=c.location;y=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var C=new Ln(null);y&&oi(C,y),u&&(C.g=u),P&&ai(C,P),p&&(C.l=p),y=C}return p=o.D,u=o.ya,p&&u&&_e(y,p,u),_e(y,"VER",o.la),us(o,y),y}function Gl(o,u,p){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Te(new li({eb:p})):new Te(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kl(){}n=Kl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function mi(){}mi.prototype.g=function(o,u){return new mt(o,u)};function mt(o,u){Ae.call(this),this.g=new xl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new gr(this)}R(mt,Ae),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){ra(this.g)},mt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=Jr(o),o=p);u.i.push(new pm(u.Ya++,o)),u.G==3&&fi(u)},mt.prototype.N=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,mt.aa.N.call(this)};function Ql(o){ts.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const p in u){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(Ql,ts);function Xl(){lr.call(this),this.status=1}R(Xl,lr);function gr(o){this.g=o}R(gr,Kl),gr.prototype.ua=function(){Le(this.g,"a")},gr.prototype.ta=function(o){Le(this.g,new Ql(o))},gr.prototype.sa=function(o){Le(this.g,new Xl)},gr.prototype.ra=function(){Le(this.g,"b")},mi.prototype.createWebChannel=mi.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,xd=function(){return new mi},Ld=function(){return hr()},Od=pt,Ma={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,Di=pr,si.COMPLETE="complete",Nd=si,es.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,_s=es,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,Vd=Te}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});const Iu="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Br="10.14.0";/**
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
 */const Gn=new hc("@firebase/firestore");function fs(){return Gn.logLevel}function $(n,...e){if(Gn.logLevel<=ae.DEBUG){const t=e.map(pc);Gn.debug(`Firestore (${Br}): ${n}`,...t)}}function Gt(n,...e){if(Gn.logLevel<=ae.ERROR){const t=e.map(pc);Gn.error(`Firestore (${Br}): ${n}`,...t)}}function Pr(n,...e){if(Gn.logLevel<=ae.WARN){const t=e.map(pc);Gn.warn(`Firestore (${Br}): ${n}`,...t)}}function pc(n){if(typeof n=="string")return n;try{/**
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
 */function X(n="Unexpected state"){const e=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+n;throw Gt(e),new Error(e)}function he(n,e){n||X()}function J(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Fd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class j_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xe.UNAUTHENTICATED))}shutdown(){}}class B_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $_{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new Fd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new Xe(e)}}class z_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class q_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new z_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){he(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(he(typeof t.token=="string"),this.R=t.token,new W_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function G_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ud{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=G_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Cr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Ve{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ve(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ve(0,0))}static max(){return new Y(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ps{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(),r===void 0?r=e.length-t:r>e.length-t&&X(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ps.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ps?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ye extends Ps{construct(e,t,r){return new ye(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ye(t)}static emptyPath(){return new ye([])}}const K_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Ps{construct(e,t,r){return new $e(e,t,r)}static isValidIdentifier(e){return K_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new j(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ye.fromString(e))}static fromName(e){return new q(ye.fromString(e).popFirst(5))}static empty(){return new q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ye(e.slice()))}}function Q_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new Tn(s,q.empty(),e)}function X_(n){return new Tn(n.readTime,n.key,-1)}class Tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Tn(Y.min(),q.empty(),-1)}static max(){return new Tn(Y.max(),q.empty(),-1)}}function Y_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const J_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Z_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Us(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==J_)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function ey(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function js(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mc.oe=-1;function bo(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}function ty(n){return typeof n=="number"&&Number.isInteger(n)&&!Xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Au(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class we{constructor(e,t){this.comparator=e,this.root=t||Be.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vi(this.root,e,this.comparator,!0)}}class vi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Be(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Su(this.data.getIterator())}getIteratorFrom(e){return new Su(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ze(this.comparator);return t.data=e,t}}class Su{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class gt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new gt([])}unionWith(e){let t=new ze($e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new gt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Cr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bd("Invalid base64 string: "+i):i}}(e);return new qe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const ny=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(n){if(he(!!n),typeof n=="string"){let e=0;const t=ny.exec(n);if(he(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kn(n){return typeof n=="string"?qe.fromBase64String(n):qe.fromUint8Array(n)}/**
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
 */function gc(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function _c(n){const e=n.mapValue.fields.__previous_value__;return gc(e)?_c(e):e}function Cs(n){const e=In(n.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class ry{constructor(e,t,r,s,i,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class Ds{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ds("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ds&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ei={mapValue:{}};function Qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gc(n)?4:iy(n)?9007199254740991:sy(n)?10:11:X()}function Nt(n,e){if(n===e)return!0;const t=Qn(n);if(t!==Qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cs(n).isEqual(Cs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=In(s.timestampValue),c=In(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Kn(s.bytesValue).isEqual(Kn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Se(s.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Se(s.integerValue)===Se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Se(s.doubleValue),c=Se(i.doubleValue);return a===c?Xi(a)===Xi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Cr(n.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Au(a)!==Au(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Nt(a[l],c[l])))return!1;return!0}(n,e);default:return X()}}function Ms(n,e){return(n.values||[]).find(t=>Nt(t,e))!==void 0}function Dr(n,e){if(n===e)return 0;const t=Qn(n),r=Qn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Se(i.integerValue||i.doubleValue),l=Se(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Ru(n.timestampValue,e.timestampValue);case 4:return Ru(Cs(n),Cs(e));case 5:return ue(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Kn(i),l=Kn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=ue(c[d],l[d]);if(f!==0)return f}return ue(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ue(Se(i.latitude),Se(a.latitude));return c!==0?c:ue(Se(i.longitude),Se(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ku(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,d,f;const g=i.fields||{},m=a.fields||{},E=(c=g.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,D=ue(((d=E?.values)===null||d===void 0?void 0:d.length)||0,((f=R?.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:ku(E,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ei.mapValue&&a===Ei.mapValue)return 0;if(i===Ei.mapValue)return 1;if(a===Ei.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const m=ue(l[g],f[g]);if(m!==0)return m;const E=Dr(c[l[g]],d[f[g]]);if(E!==0)return E}return ue(l.length,f.length)}(n.mapValue,e.mapValue);default:throw X()}}function Ru(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=In(n),r=In(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function ku(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Dr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function Mr(n){return Va(n)}function Va(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=In(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Kn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Va(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Va(t.fields[a])}`;return s+"}"}(n.mapValue):X()}function Pu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Na(n){return!!n&&"integerValue"in n}function yc(n){return!!n&&"arrayValue"in n}function Cu(n){return!!n&&"nullValue"in n}function Du(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mi(n){return!!n&&"mapValue"in n}function sy(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function bs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=bs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function iy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(t)}setAll(e){let t=$e.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=bs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Zn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ct(bs(this.value))}}function $d(n){const e=[];return Zn(n.fields,(t,r)=>{const s=new $e([t]);if(Mi(r)){const i=$d(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new gt(e)}/**
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
 */class Ye{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ye(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,t,r,s){return new Ye(e,1,t,Y.min(),r,s,0)}static newNoDocument(e,t){return new Ye(e,2,t,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,t){return new Ye(e,3,t,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yi{constructor(e,t){this.position=e,this.inclusive=t}}function Mu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=Dr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ji{constructor(e,t="asc"){this.field=e,this.dir=t}}function oy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class zd{}class Ce extends zd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cy(e,t,r):t==="array-contains"?new hy(e,r):t==="in"?new dy(e,r):t==="not-in"?new fy(e,r):t==="array-contains-any"?new py(e,r):new Ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ly(e,r):new uy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Dr(t,this.value)):t!==null&&Qn(this.value)===Qn(t)&&this.matchesComparison(Dr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends zd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new At(e,t)}matches(e){return qd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qd(n){return n.op==="and"}function Wd(n){return ay(n)&&qd(n)}function ay(n){for(const e of n.filters)if(e instanceof At)return!1;return!0}function Oa(n){if(n instanceof Ce)return n.field.canonicalString()+n.op.toString()+Mr(n.value);if(Wd(n))return n.filters.map(e=>Oa(e)).join(",");{const e=n.filters.map(t=>Oa(t)).join(",");return`${n.op}(${e})`}}function Hd(n,e){return n instanceof Ce?function(r,s){return s instanceof Ce&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)}(n,e):n instanceof At?function(r,s){return s instanceof At&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Hd(a,s.filters[c]),!0):!1}(n,e):void X()}function Gd(n){return n instanceof Ce?function(t){return`${t.field.canonicalString()} ${t.op} ${Mr(t.value)}`}(n):n instanceof At?function(t){return t.op.toString()+" {"+t.getFilters().map(Gd).join(" ,")+"}"}(n):"Filter"}class cy extends Ce{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class ly extends Ce{constructor(e,t){super(e,"in",t),this.keys=Kd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uy extends Ce{constructor(e,t){super(e,"not-in",t),this.keys=Kd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class hy extends Ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yc(t)&&Ms(t.arrayValue,this.value)}}class dy extends Ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ms(this.value.arrayValue,t)}}class fy extends Ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ms(this.value.arrayValue,t)}}class py extends Ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ms(this.value.arrayValue,r))}}/**
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
 */class my{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Nu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new my(n,e,t,r,s,i,a)}function vc(n){const e=J(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Oa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Mr(r)).join(",")),e.ue=t}return e.ue}function Ec(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!oy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vu(n.startAt,e.startAt)&&Vu(n.endAt,e.endAt)}function La(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Bs{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gy(n,e,t,r,s,i,a,c){return new Bs(n,e,t,r,s,i,a,c)}function To(n){return new Bs(n)}function Ou(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qd(n){return n.collectionGroup!==null}function Ts(n){const e=J(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ze($e.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ji(i,r))}),t.has($e.keyField().canonicalString())||e.ce.push(new Ji($e.keyField(),r))}return e.ce}function Ct(n){const e=J(n);return e.le||(e.le=_y(e,Ts(n))),e.le}function _y(n,e){if(n.limitType==="F")return Nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ji(s.field,i)});const t=n.endAt?new Yi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yi(n.startAt.position,n.startAt.inclusive):null;return Nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xa(n,e){const t=n.filters.concat([e]);return new Bs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Zi(n,e,t){return new Bs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Io(n,e){return Ec(Ct(n),Ct(e))&&n.limitType===e.limitType}function Xd(n){return`${vc(Ct(n))}|lt:${n.limitType}`}function vr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gd(s)).join(", ")}]`),bo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Mr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Mr(s)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function Ao(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ts(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=Mu(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,Ts(r),s)||r.endAt&&!function(a,c,l){const d=Mu(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,Ts(r),s))}(n,e)}function yy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yd(n){return(e,t)=>{let r=!1;for(const s of Ts(n)){const i=vy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vy(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Dr(l,d):X()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class $r{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jd(this.inner)}size(){return this.innerSize}}/**
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
 */const Ey=new we(q.comparator);function Kt(){return Ey}const Jd=new we(q.comparator);function ys(...n){let e=Jd;for(const t of n)e=e.insert(t.key,t);return e}function Zd(n){let e=Jd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function jn(){return Is()}function ef(){return Is()}function Is(){return new $r(n=>n.toString(),(n,e)=>n.isEqual(e))}const wy=new we(q.comparator),by=new ze(q.comparator);function oe(...n){let e=by;for(const t of n)e=e.add(t);return e}const Ty=new ze(ue);function Iy(){return Ty}/**
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
 */function wc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function tf(n){return{integerValue:""+n}}function Ay(n,e){return ty(e)?tf(e):wc(n,e)}/**
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
 */class So{constructor(){this._=void 0}}function Sy(n,e,t){return n instanceof eo?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gc(i)&&(i=_c(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Vs?rf(n,e):n instanceof Ns?sf(n,e):function(s,i){const a=nf(s,i),c=Lu(a)+Lu(s.Pe);return Na(a)&&Na(s.Pe)?tf(c):wc(s.serializer,c)}(n,e)}function Ry(n,e,t){return n instanceof Vs?rf(n,e):n instanceof Ns?sf(n,e):t}function nf(n,e){return n instanceof to?function(r){return Na(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class eo extends So{}class Vs extends So{constructor(e){super(),this.elements=e}}function rf(n,e){const t=of(e);for(const r of n.elements)t.some(s=>Nt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ns extends So{constructor(e){super(),this.elements=e}}function sf(n,e){let t=of(e);for(const r of n.elements)t=t.filter(s=>!Nt(s,r));return{arrayValue:{values:t}}}class to extends So{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Lu(n){return Se(n.integerValue||n.doubleValue)}function of(n){return yc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ky(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Vs&&s instanceof Vs||r instanceof Ns&&s instanceof Ns?Cr(r.elements,s.elements,Nt):r instanceof to&&s instanceof to?Nt(r.Pe,s.Pe):r instanceof eo&&s instanceof eo}(n.transform,e.transform)}class Py{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ro{}function af(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ko(n.key,ut.none()):new $s(n.key,n.data,ut.none());{const t=n.data,r=ct.empty();let s=new ze($e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Sn(n.key,r,new gt(s.toArray()),ut.none())}}function Cy(n,e,t){n instanceof $s?function(s,i,a){const c=s.value.clone(),l=Fu(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Sn?function(s,i,a){if(!Vi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Fu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(cf(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function As(n,e,t,r){return n instanceof $s?function(i,a,c,l){if(!Vi(i.precondition,a))return c;const d=i.value.clone(),f=Uu(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Sn?function(i,a,c,l){if(!Vi(i.precondition,a))return c;const d=Uu(i.fieldTransforms,l,a),f=a.data;return f.setAll(cf(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return Vi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Dy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=nf(r.transform,s||null);i!=null&&(t===null&&(t=ct.empty()),t.set(r.field,i))}return t||null}function xu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cr(r,s,(i,a)=>ky(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $s extends Ro{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sn extends Ro{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Fu(n,e,t){const r=new Map;he(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Ry(a,c,t[s]))}return r}function Uu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Sy(i,a,e))}return r}class ko extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class My extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Cy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=As(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=As(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ef();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=af(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&Cr(this.mutations,e.mutations,(t,r)=>xu(t,r))&&Cr(this.baseMutations,e.baseMutations,(t,r)=>xu(t,r))}}class bc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){he(e.mutations.length===r.length);let s=function(){return wy}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new bc(e,t,r,s)}}/**
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
 */class Ny{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Oy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ke,ce;function Ly(n){switch(n){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function lf(n){if(n===void 0)return Gt("GRPC error has no .code"),M.UNKNOWN;switch(n){case ke.OK:return M.OK;case ke.CANCELLED:return M.CANCELLED;case ke.UNKNOWN:return M.UNKNOWN;case ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ke.INTERNAL:return M.INTERNAL;case ke.UNAVAILABLE:return M.UNAVAILABLE;case ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ke.NOT_FOUND:return M.NOT_FOUND;case ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ke.ABORTED:return M.ABORTED;case ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ke.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(ce=ke||(ke={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xy(){return new TextEncoder}/**
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
 */const Fy=new $n([4294967295,4294967295],0);function ju(n){const e=xy().encode(n),t=new Md;return t.update(e),new Uint8Array(t.digest())}function Bu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $n([t,r],0),new $n([s,i],0)]}class Tc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vs(`Invalid padding: ${t}`);if(r<0)throw new vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=$n.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply($n.fromNumber(r)));return s.compare(Fy)===1&&(s=new $n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ju(e),[r,s]=Bu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Tc(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=ju(e),[r,s]=Bu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Po{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Po(Y.min(),s,new we(ue),Kt(),oe())}}class zs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new zs(r,t,oe(),oe(),oe())}}/**
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
 */class Ni{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class uf{constructor(e,t){this.targetId=e,this.me=t}}class hf{constructor(e,t,r=qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class $u{constructor(){this.fe=0,this.ge=qu(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),t=oe(),r=oe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X()}}),new zs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=qu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Uy{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kt(),this.qe=zu(),this.Qe=new we(ue)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(La(i))if(r===0){const a=new q(i.path);this.Ue(t,a,Ye.newNoDocument(a,Y.min()))}else he(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Kn(r).toUint8Array()}catch(l){if(l instanceof Bd)return Pr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Tc(a,s,i)}catch(l){return Pr(l instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&La(c.target)){const l=new q(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Ye.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=oe();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Po(e,t,this.Qe,this.ke,r);return this.ke=Kt(),this.qe=zu(),this.Qe=new we(ue),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new $u,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ze(ue),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $u),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function zu(){return new we(q.comparator)}function qu(){return new we(q.comparator)}const jy={asc:"ASCENDING",desc:"DESCENDING"},By={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$y={and:"AND",or:"OR"};class zy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fa(n,e){return n.useProto3Json||bo(e)?e:{value:e}}function no(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function df(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qy(n,e){return no(n,e.toTimestamp())}function Dt(n){return he(!!n),Y.fromTimestamp(function(t){const r=In(t);return new Ve(r.seconds,r.nanos)}(n))}function Ic(n,e){return Ua(n,e).canonicalString()}function Ua(n,e){const t=function(s){return new ye(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ff(n){const e=ye.fromString(n);return he(yf(e)),e}function ja(n,e){return Ic(n.databaseId,e.path)}function pa(n,e){const t=ff(e);if(t.get(1)!==n.databaseId.projectId)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(mf(t))}function pf(n,e){return Ic(n.databaseId,e)}function Wy(n){const e=ff(n);return e.length===4?ye.emptyPath():mf(e)}function Ba(n){return new ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mf(n){return he(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wu(n,e,t){return{name:ja(n,e),fields:t.value.mapValue.fields}}function Hy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(he(f===void 0||typeof f=="string"),qe.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array),qe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?M.UNKNOWN:lf(d.code);return new j(f,d.message||"")}(a);t=new hf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=pa(n,r.document.name),i=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):Y.min(),c=new ct({mapValue:{fields:r.document.fields}}),l=Ye.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Ni(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=pa(n,r.document),i=r.readTime?Dt(r.readTime):Y.min(),a=Ye.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ni([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=pa(n,r.document),i=r.removedTargetIds||[];t=new Ni([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Oy(s,i),c=r.targetId;t=new uf(c,a)}}return t}function Gy(n,e){let t;if(e instanceof $s)t={update:Wu(n,e.key,e.value)};else if(e instanceof ko)t={delete:ja(n,e.key)};else if(e instanceof Sn)t={update:Wu(n,e.key,e.data),updateMask:nv(e.fieldMask)};else{if(!(e instanceof My))return X();t={verify:ja(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof eo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Vs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ns)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof to)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw X()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(n,e.precondition)),t}function Ky(n,e){return n&&n.length>0?(he(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Dt(s.updateTime):Dt(i);return a.isEqual(Y.min())&&(a=Dt(i)),new Py(a,s.transformResults||[])}(t,e))):[]}function Qy(n,e){return{documents:[pf(n,e.path)]}}function Xy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=pf(n,s);const i=function(d){if(d.length!==0)return _f(At.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(m){return{field:Er(m.field),direction:Zy(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Fa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Yy(n){let e=Wy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){he(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const m=gf(g);return m instanceof At&&Wd(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(m=>function(R){return new Ji(wr(R.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(g){let m;return m=typeof g=="object"?g.value:g,bo(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(g){const m=!!g.before,E=g.values||[];return new Yi(E,m)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const m=!g.before,E=g.values||[];return new Yi(E,m)}(t.endAt)),gy(e,s,a,i,c,"F",l,d)}function Jy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wr(t.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=wr(t.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wr(t.unaryFilter.field);return Ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wr(t.unaryFilter.field);return Ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(n):n.fieldFilter!==void 0?function(t){return Ce.create(wr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return At.create(t.compositeFilter.filters.map(r=>gf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(t.compositeFilter.op))}(n):X()}function Zy(n){return jy[n]}function ev(n){return By[n]}function tv(n){return $y[n]}function Er(n){return{fieldPath:n.canonicalString()}}function wr(n){return $e.fromServerFormat(n.fieldPath)}function _f(n){return n instanceof Ce?function(t){if(t.op==="=="){if(Du(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NAN"}};if(Cu(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Du(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NAN"}};if(Cu(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(t.field),op:ev(t.op),value:t.value}}}(n):n instanceof At?function(t){const r=t.getFilters().map(s=>_f(s));return r.length===1?r[0]:{compositeFilter:{op:tv(t.op),filters:r}}}(n):X()}function nv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class gn{constructor(e,t,r,s,i=Y.min(),a=Y.min(),c=qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rv{constructor(e){this.ct=e}}function sv(n){const e=Yy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zi(e,e.limit,"L"):e}/**
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
 */class iv{constructor(){this.un=new ov}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Tn.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class ov{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ze(ye.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(ye.comparator)).toArray()}}/**
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
 */class Vr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vr(0)}static kn(){return new Vr(-1)}}/**
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
 */class av{constructor(){this.changes=new $r(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&As(r.mutation,s,gt.empty(),Ve.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const s=jn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ys();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=jn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Kt();const a=Is(),c=function(){return Is()}();return t.forEach((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Sn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),As(f.mutation,d,f.mutation.getFieldMask(),Ve.now())):a.set(d.key,gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return c.set(d,new cv(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Is();let s=new we((a,c)=>a-c),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||gt.empty();f=c.applyToLocalView(d,f),r.set(l,f);const g=(s.get(c.batchId)||oe()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,g=ef();f.forEach(m=>{if(!i.has(m)){const E=af(t.get(m),r.get(m));E!==null&&g.set(m,E),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(jn());let c=-1,l=i;return a.next(d=>O.forEach(d,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,oe())).next(f=>({batchId:c,changes:Zd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=ys();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ys();return this.indexManager.getCollectionParents(e,i).next(c=>O.forEach(c,l=>{const d=function(g,m){return new Bs(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((g,m)=>{a=a.insert(g,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ye.newInvalidDocument(f)))});let c=ys();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&As(f.mutation,d,gt.empty(),Ve.now()),Ao(t,d)&&(c=c.insert(l,d))}),c})}}/**
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
 */class uv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:sv(s.bundledQuery),readTime:Dt(s.readTime)}}(t)),O.resolve()}}/**
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
 */class hv{constructor(){this.overlays=new we(q.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jn();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=jn(),i=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new we((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=jn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=jn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return O.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ny(t,r));let i=this.Ir.get(t);i===void 0&&(i=oe(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class dv{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class Ac{constructor(){this.Tr=new ze(xe.Er),this.dr=new ze(xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new xe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new xe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new q(new ye([])),r=new xe(t,e),s=new xe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new ye([])),r=new xe(t,e),s=new xe(t,e+1);let i=oe();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new xe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||ue(e.wr,t.wr)}static Ar(e,t){return ue(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
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
 */class fv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ze(xe.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Vy(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new xe(t,0),s=new xe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ze(ue);return t.forEach(s=>{const i=new xe(s,0),a=new xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new xe(new q(i),0);let c=new ze(ue);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.wr)),!0)},a),O.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){he(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,s=>{const i=new xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new xe(t,0),s=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class pv{constructor(e){this.Mr=e,this.docs=function(){return new we(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(t))}getEntries(e,t){let r=Kt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Kt();const a=t.path,c=new q(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Y_(X_(f),r)<=0||(s.has(f.key)||Ao(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){X()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new mv(this)}getSize(e){return O.resolve(this.size)}}class mv extends av{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class gv{constructor(e){this.persistence=e,this.Nr=new $r(t=>vc(t),Ec),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ac,this.targetCount=0,this.kr=Vr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Vr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
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
 */class _v{constructor(e,t){this.qr={},this.overlays={},this.Qr=new mc(0),this.Kr=!1,this.Kr=!0,this.$r=new dv,this.referenceDelegate=e(this),this.Ur=new gv(this),this.indexManager=new iv,this.remoteDocumentCache=function(s){return new pv(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new rv(t),this.Gr=new uv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new fv(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new yv(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class yv extends Z_{constructor(e){super(),this.currentSequenceNumber=e}}class Sc{constructor(e){this.persistence=e,this.Jr=new Ac,this.Yr=null}static Zr(e){return new Sc(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const s=q.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Rc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=oe(),s=oe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Rc(e,t.fromCache,r,s)}}/**
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
 */class vv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ev{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wg()?8:ey(Ze())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new vv;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(fs()<=ae.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",vr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(fs()<=ae.DEBUG&&$("QueryEngine","Query:",vr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(fs()<=ae.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",vr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):O.resolve())}Yi(e,t){if(Ou(t))return O.resolve(null);let r=Ct(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Zi(t,null,"F"),r=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=oe(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,c);return this.ns(t,d,a,l.readTime)?this.Yi(e,Zi(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,s){return Ou(t)||s.isEqual(Y.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?O.resolve(null):(fs()<=ae.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vr(t)),this.rs(e,a,t,Q_(s,-1)).next(c=>c))})}ts(e,t){let r=new ze(Yd(e));return t.forEach((s,i)=>{Ao(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return fs()<=ae.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",vr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Tn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class wv{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new we(ue),this._s=new $r(i=>vc(i),Ec),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function bv(n,e,t,r){return new wv(n,e,t,r)}async function vf(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=oe();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Tv(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const g=d.batch,m=g.keys();let E=O.resolve();return m.forEach(R=>{E=E.next(()=>f.getEntry(l,R)).next(D=>{const A=d.docVersions.get(R);he(A!==null),D.version.compareTo(A)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=oe();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ef(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Iv(n,e){const t=J(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,g)));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(g,E),function(D,A,N){return D.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,E,f)&&c.push(t.Ur.updateTargetData(i,E))});let l=Kt(),d=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Av(i,a,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(Y.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return O.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.os=s,i))}function Av(n,e,t){let r=oe(),s=oe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Kt();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):$("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function Sv(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Rv(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new gn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function $a(n,e,t){const r=J(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!js(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Hu(n,e,t){const r=J(n);let s=Y.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const g=J(l),m=g._s.get(f);return m!==void 0?O.resolve(g.os.get(m)):g.Ur.getTargetData(d,f)}(r,a,Ct(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:Y.min(),t?i:oe())).next(c=>(kv(r,yy(e),c),{documents:c,Ts:i})))}function kv(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Gu{constructor(){this.activeTargetIds=Iy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pv{constructor(){this.so=new Gu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Gu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Cv{_o(e){}shutdown(){}}/**
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
 */class Ku{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wi=null;function ma(){return wi===null?wi=function(){return 268435456+Math.round(2147483648*Math.random())}():wi++,"0x"+wi.toString(16)}/**
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
 */const Dv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Mv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ke="WebChannelConnection";class Vv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=ma(),l=this.xo(t,r.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,l,d,s).then(f=>($("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Pr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Br}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=Dv[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ma();return new Promise((a,c)=>{const l=new Vd;l.setWithCredentials(!0),l.listenOnce(Nd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Di.NO_ERROR:const f=l.getResponseJson();$(Ke,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Di.TIMEOUT:$(Ke,`RPC '${e}' ${i} timed out`),c(new j(M.DEADLINE_EXCEEDED,"Request time out"));break;case Di.HTTP_ERROR:const g=l.getStatus();if($(Ke,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m?.error;if(E&&E.status&&E.message){const R=function(A){const N=A.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(N)>=0?N:M.UNKNOWN}(E.status);c(new j(R,E.message))}else c(new j(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{$(Ke,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);$(Ke,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=ma(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xd(),c=Ld(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");$(Ke,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let m=!1,E=!1;const R=new Mv({Io:A=>{E?$(Ke,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(m||($(Ke,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),$(Ke,`RPC '${e}' stream ${s} sending:`,A),g.send(A))},To:()=>g.close()}),D=(A,N,F)=>{A.listen(N,B=>{try{F(B)}catch(H){setTimeout(()=>{throw H},0)}})};return D(g,_s.EventType.OPEN,()=>{E||($(Ke,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),D(g,_s.EventType.CLOSE,()=>{E||(E=!0,$(Ke,`RPC '${e}' stream ${s} transport closed`),R.So())}),D(g,_s.EventType.ERROR,A=>{E||(E=!0,Pr(Ke,`RPC '${e}' stream ${s} transport errored:`,A),R.So(new j(M.UNAVAILABLE,"The operation could not be completed")))}),D(g,_s.EventType.MESSAGE,A=>{var N;if(!E){const F=A.data[0];he(!!F);const B=F,H=B.error||((N=B[0])===null||N===void 0?void 0:N.error);if(H){$(Ke,`RPC '${e}' stream ${s} received error:`,H);const W=H.status;let ee=function(w){const T=ke[w];if(T!==void 0)return lf(T)}(W),b=H.message;ee===void 0&&(ee=M.INTERNAL,b="Unknown error status: "+W+" with message "+H.message),E=!0,R.So(new j(ee,b)),g.close()}else $(Ke,`RPC '${e}' stream ${s} received:`,F),R.bo(F)}}),D(c,Od.STAT_EVENT,A=>{A.stat===Ma.PROXY?$(Ke,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===Ma.NOPROXY&&$(Ke,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function ga(){return typeof document<"u"?document:null}/**
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
 */function Co(n){return new zy(n,!0)}/**
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
 */class wf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class bf{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new wf(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(Gt(t.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new j(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nv extends bf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Hy(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Dt(a.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ba(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=La(l)?{documents:Qy(i,l)}:{query:Xy(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=df(i,a.resumeToken);const d=Fa(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(Y.min())>0){c.readTime=no(i,a.snapshotVersion.toTimestamp());const d=Fa(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Jy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ba(this.serializer),t.removeTarget=e,this.a_(t)}}class Ov extends bf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Ky(e.writeResults,e.commitTime),r=Dt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ba(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Gy(this.serializer,r))};this.a_(t)}}/**
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
 */class Lv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Ua(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(M.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Ua(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class xv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gt(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Fv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{er(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=J(l);d.L_.add(4),await qs(d),d.q_.set("Unknown"),d.L_.delete(4),await Do(d)}(this))})}),this.q_=new xv(r,s)}}async function Do(n){if(er(n))for(const e of n.B_)await e(!0)}async function qs(n){for(const e of n.B_)await e(!1)}function Tf(n,e){const t=J(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Dc(t)?Cc(t):zr(t).r_()&&Pc(t,e))}function kc(n,e){const t=J(n),r=zr(t);t.N_.delete(e),r.r_()&&If(t,e),t.N_.size===0&&(r.r_()?r.o_():er(t)&&t.q_.set("Unknown"))}function Pc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zr(n).A_(e)}function If(n,e){n.Q_.xe(e),zr(n).R_(e)}function Cc(n){n.Q_=new Uy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),zr(n).start(),n.q_.v_()}function Dc(n){return er(n)&&!zr(n).n_()&&n.N_.size>0}function er(n){return J(n).L_.size===0}function Af(n){n.Q_=void 0}async function Uv(n){n.q_.set("Online")}async function jv(n){n.N_.forEach((e,t)=>{Pc(n,e)})}async function Bv(n,e){Af(n),Dc(n)?(n.q_.M_(e),Cc(n)):n.q_.set("Unknown")}async function $v(n,e,t){if(n.q_.set("Online"),e instanceof hf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ro(n,r)}else if(e instanceof Ni?n.Q_.Ke(e):e instanceof uf?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await Ef(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(qe.EMPTY_BYTE_STRING,f.snapshotVersion)),If(i,l);const g=new gn(f.target,l,d,f.sequenceNumber);Pc(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ro(n,r)}}async function ro(n,e,t){if(!js(e))throw e;n.L_.add(1),await qs(n),n.q_.set("Offline"),t||(t=()=>Ef(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Do(n)})}function Sf(n,e){return e().catch(t=>ro(n,t,e))}async function Mo(n){const e=J(n),t=An(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zv(e);)try{const s=await Sv(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,qv(e,s)}catch(s){await ro(e,s)}Rf(e)&&kf(e)}function zv(n){return er(n)&&n.O_.length<10}function qv(n,e){n.O_.push(e);const t=An(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Rf(n){return er(n)&&!An(n).n_()&&n.O_.length>0}function kf(n){An(n).start()}async function Wv(n){An(n).p_()}async function Hv(n){const e=An(n);for(const t of n.O_)e.m_(t.mutations)}async function Gv(n,e,t){const r=n.O_.shift(),s=bc.from(r,e,t);await Sf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Mo(n)}async function Kv(n,e){e&&An(n).V_&&await async function(r,s){if(function(a){return Ly(a)&&a!==M.ABORTED}(s.code)){const i=r.O_.shift();An(r).s_(),await Sf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mo(r)}}(n,e),Rf(n)&&kf(n)}async function Qu(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=er(t);t.L_.add(3),await qs(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Do(t)}async function Qv(n,e){const t=J(n);e?(t.L_.delete(2),await Do(t)):e||(t.L_.add(2),await qs(t),t.q_.set("Unknown"))}function zr(n){return n.K_||(n.K_=function(t,r,s){const i=J(t);return i.w_(),new Nv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Uv.bind(null,n),Ro:jv.bind(null,n),mo:Bv.bind(null,n),d_:$v.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Dc(n)?Cc(n):n.q_.set("Unknown")):(await n.K_.stop(),Af(n))})),n.K_}function An(n){return n.U_||(n.U_=function(t,r,s){const i=J(t);return i.w_(),new Ov(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Wv.bind(null,n),mo:Kv.bind(null,n),f_:Hv.bind(null,n),g_:Gv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Mo(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Mc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Mc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vc(n,e){if(Gt("AsyncQueue",`${e}: ${n}`),js(n))return new j(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Tr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=ys(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Tr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Xu{constructor(){this.W_=new we(q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Nr{constructor(e,t,r,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Nr(e,t,Tr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Io(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Xv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Yv{constructor(){this.queries=Yu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=J(t),i=s.queries;s.queries=Yu(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new j(M.ABORTED,"Firestore shutting down"))}}function Yu(){return new $r(n=>Xd(n),Io)}async function Nc(n,e){const t=J(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Xv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Vc(a,`Initialization of query '${vr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Lc(t)}async function Oc(n,e){const t=J(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jv(n,e){const t=J(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Lc(t)}function Zv(n,e,t){const r=J(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Lc(n){n.Y_.forEach(e=>{e.next()})}var za,Ju;(Ju=za||(za={})).ea="default",Ju.Cache="cache";class xc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Nr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==za.Cache}}/**
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
 */class Pf{constructor(e){this.key=e}}class Cf{constructor(e){this.key=e}}class e0{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=Yd(e),this.Ra=new Tr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Xu,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),E=Ao(this.query,g)?g:null,R=!!m&&this.mutatedKeys.has(m.key),D=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let A=!1;m&&E?m.data.isEqual(E.data)?R!==D&&(r.track({type:3,doc:E}),A=!0):this.ga(m,E)||(r.track({type:2,doc:E}),A=!0,(l&&this.Aa(E,l)>0||d&&this.Aa(E,d)<0)&&(c=!0)):!m&&E?(r.track({type:0,doc:E}),A=!0):m&&!E&&(r.track({type:1,doc:m}),A=!0,(l||d)&&(c=!0)),A&&(E?(a=a.add(E),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(E,R){const D=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return D(E)-D(R)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new Nr(this.query,e.Ra,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Xu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Cf(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Pf(r))}),t}ba(e){this.Ta=e.Ts,this.da=oe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Nr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class t0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class n0{constructor(e){this.key=e,this.va=!1}}class r0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new $r(c=>Xd(c),Io),this.Ma=new Map,this.xa=new Set,this.Oa=new we(q.comparator),this.Na=new Map,this.La=new Ac,this.Ba={},this.ka=new Map,this.qa=Vr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function s0(n,e,t=!0){const r=Lf(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Df(r,e,t,!0),s}async function i0(n,e){const t=Lf(n);await Df(t,e,!0,!1)}async function Df(n,e,t,r){const s=await Rv(n.localStore,Ct(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await o0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tf(n.remoteStore,s),c}async function o0(n,e,t,r,s){n.Ka=(g,m,E)=>async function(D,A,N,F){let B=A.view.ma(N);B.ns&&(B=await Hu(D.localStore,A.query,!1).then(({documents:b})=>A.view.ma(b,B)));const H=F&&F.targetChanges.get(A.targetId),W=F&&F.targetMismatches.get(A.targetId)!=null,ee=A.view.applyChanges(B,D.isPrimaryClient,H,W);return eh(D,A.targetId,ee.wa),ee.snapshot}(n,g,m,E);const i=await Hu(n.localStore,e,!0),a=new e0(e,i.Ts),c=a.ma(i.documents),l=zs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);eh(n,t,d.wa);const f=new t0(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function a0(n,e,t){const r=J(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Io(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $a(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&kc(r.remoteStore,s.targetId),qa(r,s.targetId)}).catch(Us)):(qa(r,s.targetId),await $a(r.localStore,s.targetId,!0))}async function c0(n,e){const t=J(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),kc(t.remoteStore,r.targetId))}async function l0(n,e,t){const r=g0(n);try{const s=await function(a,c){const l=J(a),d=Ve.now(),f=c.reduce((E,R)=>E.add(R.key),oe());let g,m;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let R=Kt(),D=oe();return l.cs.getEntries(E,f).next(A=>{R=A,R.forEach((N,F)=>{F.isValidDocument()||(D=D.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,R)).next(A=>{g=A;const N=[];for(const F of c){const B=Dy(F,g.get(F.key).overlayedDocument);B!=null&&N.push(new Sn(F.key,B,$d(B.value.mapValue),ut.exists(!0)))}return l.mutationQueue.addMutationBatch(E,d,N,c)}).next(A=>{m=A;const N=A.applyToLocalDocumentSet(g,D);return l.documentOverlayCache.saveOverlays(E,A.batchId,N)})}).then(()=>({batchId:m.batchId,changes:Zd(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new we(ue)),d=d.insert(c,l),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await Ws(r,s.changes),await Mo(r.remoteStore)}catch(s){const i=Vc(s,"Failed to persist write");t.reject(i)}}async function Mf(n,e){const t=J(n);try{const r=await Iv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?he(a.va):s.removedDocuments.size>0&&(he(a.va),a.va=!1))}),await Ws(t,r,e)}catch(r){await Us(r)}}function Zu(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=J(a);l.onlineState=c;let d=!1;l.queries.forEach((f,g)=>{for(const m of g.j_)m.Z_(c)&&(d=!0)}),d&&Lc(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function u0(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new we(q.comparator);a=a.insert(i,Ye.newNoDocument(i,Y.min()));const c=oe().add(i),l=new Po(Y.min(),new Map,new we(ue),a,c);await Mf(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Fc(r)}else await $a(r.localStore,e,!1).then(()=>qa(r,e,t)).catch(Us)}async function h0(n,e){const t=J(n),r=e.batch.batchId;try{const s=await Tv(t.localStore,e);Nf(t,r,null),Vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ws(t,s)}catch(s){await Us(s)}}async function d0(n,e,t){const r=J(n);try{const s=await function(a,c){const l=J(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(g=>(he(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);Nf(r,e,t),Vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ws(r,s)}catch(s){await Us(s)}}function Vf(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Nf(n,e,t){const r=J(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function qa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Of(n,r)})}function Of(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(kc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Fc(n))}function eh(n,e,t){for(const r of t)r instanceof Pf?(n.La.addReference(r.key,e),f0(n,r)):r instanceof Cf?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Of(n,r.key)):X()}function f0(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+t),n.xa.add(r),Fc(n))}function Fc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new q(ye.fromString(e)),r=n.qa.next();n.Na.set(r,new n0(t)),n.Oa=n.Oa.insert(t,r),Tf(n.remoteStore,new gn(Ct(To(t.path)),r,"TargetPurposeLimboResolution",mc.oe))}}async function Ws(n,e,t){const r=J(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Rc.Wi(l.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,d){const f=J(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(d,m=>O.forEach(m.$i,E=>f.persistence.referenceDelegate.addReference(g,m.targetId,E)).next(()=>O.forEach(m.Ui,E=>f.persistence.referenceDelegate.removeReference(g,m.targetId,E)))))}catch(g){if(!js(g))throw g;$("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const m=g.targetId;if(!g.fromCache){const E=f.os.get(m),R=E.snapshotVersion,D=E.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,D)}}}(r.localStore,i))}async function p0(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await vf(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new j(M.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ws(t,r.hs)}}function m0(n,e){const t=J(n),r=t.Na.get(e);if(r&&r.va)return oe().add(r.key);{let s=oe();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Lf(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u0.bind(null,e),e.Ca.d_=Jv.bind(null,e.eventManager),e.Ca.$a=Zv.bind(null,e.eventManager),e}function g0(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d0.bind(null,e),e}class so{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Co(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return bv(this.persistence,new Ev,e.initialUser,this.serializer)}Ga(e){return new _v(Sc.Zr,this.serializer)}Wa(e){return new Pv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}so.provider={build:()=>new so};class Wa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=p0.bind(null,this.syncEngine),await Qv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Yv}()}createDatastore(e){const t=Co(e.databaseInfo.databaseId),r=function(i){return new Vv(i)}(e.databaseInfo);return function(i,a,c,l){return new Lv(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Fv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Zu(this.syncEngine,t,0),function(){return Ku.D()?new Ku:new Cv}())}createSyncEngine(e,t){return function(s,i,a,c,l,d,f){const g=new r0(s,i,a,c,l,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=J(s);$("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await qs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wa.provider={build:()=>new Wa};/**
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
 */class Uc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Gt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class _0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=Ud.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _a(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function th(n,e){n.asyncQueue.verifyOperationInProgress();const t=await y0(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Qu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Qu(e.remoteStore,s)),n._onlineComponents=e}async function y0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await _a(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Pr("Error using user provided cache. Falling back to memory cache: "+t),await _a(n,new so)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await _a(n,new so);return n._offlineComponents}async function xf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await th(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await th(n,new Wa))),n._onlineComponents}function v0(n){return xf(n).then(e=>e.syncEngine)}async function io(n){const e=await xf(n),t=e.eventManager;return t.onListen=s0.bind(null,e.syncEngine),t.onUnlisten=a0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=i0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=c0.bind(null,e.syncEngine),t}function E0(n,e,t={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const f=new Uc({next:m=>{f.Za(),a.enqueueAndForget(()=>Oc(i,g));const E=m.docs.has(c);!E&&m.fromCache?d.reject(new j(M.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&l&&l.source==="server"?d.reject(new j(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),g=new xc(To(c.path),f,{includeMetadataChanges:!0,_a:!0});return Nc(i,g)}(await io(n),n.asyncQueue,e,t,r)),r.promise}function w0(n,e,t={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const f=new Uc({next:m=>{f.Za(),a.enqueueAndForget(()=>Oc(i,g)),m.fromCache&&l.source==="server"?d.reject(new j(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),g=new xc(c,f,{includeMetadataChanges:!0,_a:!0});return Nc(i,g)}(await io(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Ff(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const nh=new Map;/**
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
 */function Uf(n,e,t){if(!t)throw new j(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function b0(n,e,t,r){if(e===!0&&r===!0)throw new j(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rh(n){if(!q.isDocumentKey(n))throw new j(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sh(n){if(q.isDocumentKey(n))throw new j(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X()}function _t(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vo(n);throw new j(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class ih{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}b0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ff((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class No{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ih({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ih(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new j_;switch(r.type){case"firstParty":return new q_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=nh.get(t);r&&($("ComponentProvider","Removing Datastore"),nh.delete(t),r.terminate())}(this),Promise.resolve()}}function T0(n,e,t,r={}){var s;const i=(n=_t(n,No))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Xe.MOCK_USER;else{c=pg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new j(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Xe(d)}n._authCredentials=new B_(new Fd(c,l))}}/**
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
 */class Rn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rn(this.firestore,e,this._query)}}class rt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class En extends Rn{constructor(e,t,r){super(e,t,To(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new q(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function Ie(n,e,...t){if(n=Ne(n),Uf("collection","path",e),n instanceof No){const r=ye.fromString(e,...t);return sh(r),new En(n,null,r)}{if(!(n instanceof rt||n instanceof En))throw new j(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return sh(r),new En(n.firestore,null,r)}}function et(n,e,...t){if(n=Ne(n),arguments.length===1&&(e=Ud.newId()),Uf("doc","path",e),n instanceof No){const r=ye.fromString(e,...t);return rh(r),new rt(n,null,new q(r))}{if(!(n instanceof rt||n instanceof En))throw new j(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return rh(r),new rt(n.firestore,n instanceof En?n.converter:null,new q(r))}}/**
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
 */class oh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wf(this,"async_queue_retry"),this.Vu=()=>{const r=ga();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ga();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Wt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!js(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Gt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Mc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function ah(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Qt extends No{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new oh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oh(e),this._firestoreClient=void 0,await e}}}function I0(n,e){const t=typeof n=="object"?n:Pd(),r=typeof n=="string"?n:"(default)",s=fc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dg("firestore");i&&T0(s,...i)}return s}function Hs(n){if(n._terminated)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||A0(n),n._firestoreClient}function A0(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,d,f){return new ry(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ff(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new _0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class Or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Or(qe.fromBase64String(e))}catch(t){throw new j(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Or(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jc{constructor(e){this._methodName=e}}/**
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
 */class Bc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class $c{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const S0=/^__.*__$/;class R0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Sn(e,this.data,this.fieldMask,t,this.fieldTransforms):new $s(e,this.data,t,this.fieldTransforms)}}class jf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Sn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class zc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new zc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return oo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Bf(this.Cu)&&S0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class k0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Co(e)}Qu(e,t,r,s=!1){return new zc({Cu:e,methodName:t,qu:r,path:$e.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oo(n){const e=n._freezeSettings(),t=Co(n._databaseId);return new k0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $f(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);qc("Data must be an object, but it was:",a,r);const c=Wf(r,a);let l,d;if(i.merge)l=new gt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Ha(e,g,t);if(!a.contains(m))throw new j(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Gf(f,m)||f.push(m)}l=new gt(f),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new R0(new ct(c),l,d)}class Gs extends jc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gs}}function zf(n,e,t,r){const s=n.Qu(1,e,t);qc("Data must be an object, but it was:",s,r);const i=[],a=ct.empty();Zn(r,(l,d)=>{const f=Wc(e,l,t);d=Ne(d);const g=s.Nu(f);if(d instanceof Gs)i.push(f);else{const m=Ks(d,g);m!=null&&(i.push(f),a.set(f,m))}});const c=new gt(i);return new jf(a,c,s.fieldTransforms)}function qf(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[Ha(e,r,t)],l=[s];if(i.length%2!=0)throw new j(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Ha(e,i[m])),l.push(i[m+1]);const d=[],f=ct.empty();for(let m=c.length-1;m>=0;--m)if(!Gf(d,c[m])){const E=c[m];let R=l[m];R=Ne(R);const D=a.Nu(E);if(R instanceof Gs)d.push(E);else{const A=Ks(R,D);A!=null&&(d.push(E),f.set(E,A))}}const g=new gt(d);return new jf(f,g,a.fieldTransforms)}function P0(n,e,t,r=!1){return Ks(t,n.Qu(r?4:3,e))}function Ks(n,e){if(Hf(n=Ne(n)))return qc("Unsupported field value:",e,n),Wf(n,e);if(n instanceof jc)return function(r,s){if(!Bf(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Ks(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ay(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:no(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:no(s.serializer,i)}}if(r instanceof Bc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Or)return{bytesValue:df(s.serializer,r._byteString)};if(r instanceof rt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ic(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $c)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return wc(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Vo(r)}`)}(n,e)}function Wf(n,e){const t={};return jd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zn(n,(r,s)=>{const i=Ks(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Hf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof Bc||n instanceof Or||n instanceof rt||n instanceof jc||n instanceof $c)}function qc(n,e,t){if(!Hf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Vo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ha(n,e,t){if((e=Ne(e))instanceof qr)return e._internalPath;if(typeof e=="string")return Wc(n,e);throw oo("Field path arguments must be of type string or ",n,!1,void 0,t)}const C0=new RegExp("[~\\*/\\[\\]]");function Wc(n,e,t){if(e.search(C0)>=0)throw oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qr(...e.split("."))._internalPath}catch{throw oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new j(M.INVALID_ARGUMENT,c+n+l)}function Gf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Kf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new D0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class D0 extends Kf{data(){return super.data()}}function Hc(n,e){return typeof e=="string"?Wc(n,e):e instanceof qr?e._internalPath:e._delegate._internalPath}/**
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
 */function Qf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gc{}class Xf extends Gc{}function Je(n,e,...t){let r=[];e instanceof Gc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Kc).length,c=i.filter(l=>l instanceof Lo).length;if(a>1||a>0&&c>0)throw new j(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Lo extends Xf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Lo(e,t,r)}_apply(e){const t=this._parse(e);return Yf(e._query,t),new Rn(e.firestore,e.converter,xa(e._query,t))}_parse(e){const t=Oo(e.firestore);return function(i,a,c,l,d,f,g){let m;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new j(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){lh(g,f);const E=[];for(const R of g)E.push(ch(l,i,R));m={arrayValue:{values:E}}}else m=ch(l,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||lh(g,f),m=P0(c,a,g,f==="in"||f==="not-in");return Ce.create(d,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ve(n,e,t){const r=e,s=Hc("where",n);return Lo._create(s,r,t)}class Kc extends Gc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:At.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Yf(a,l),a=xa(a,l)}(e._query,t),new Rn(e.firestore,e.converter,xa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qc extends Xf{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Qc(e,t,r)}_apply(e){return new Rn(e.firestore,e.converter,Zi(e._query,this._limit,this._limitType))}}function Bn(n){return Qc._create("limit",n,"F")}function ch(n,e,t){if(typeof(t=Ne(t))=="string"){if(t==="")throw new j(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qd(e)&&t.indexOf("/")!==-1)throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ye.fromString(t));if(!q.isDocumentKey(r))throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pu(n,new q(r))}if(t instanceof rt)return Pu(n,t._key);throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vo(t)}.`)}function lh(n,e){if(!Array.isArray(n)||n.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Yf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class M0{convertValue(e,t="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Se(a.doubleValue));return new $c(i)}convertGeoPoint(e){return new Bc(Se(e.latitude),Se(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_c(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Cs(e));default:return null}}convertTimestamp(e){const t=In(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ye.fromString(e);he(yf(r));const s=new Ds(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||Gt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Jf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Es{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zf extends Kf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Hc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Oi extends Zf{data(e={}){return super.data(e)}}class ep{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Es(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Oi(this._firestore,this._userDataWriter,r.key,r,new Es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Oi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Es(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Oi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Es(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:V0(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function V0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function N0(n){n=_t(n,rt);const e=_t(n.firestore,Qt);return E0(Hs(e),n._key).then(t=>tp(e,n,t))}class Xc extends M0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Or(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,t)}}function O0(n){n=_t(n,Rn);const e=_t(n.firestore,Qt),t=Hs(e),r=new Xc(e);return Qf(n._query),w0(t,n._query).then(s=>new ep(e,r,n,s))}function L0(n,e,t,...r){n=_t(n,rt);const s=_t(n.firestore,Qt),i=Oo(s);let a;return a=typeof(e=Ne(e))=="string"||e instanceof qr?qf(i,"updateDoc",n._key,e,t,r):zf(i,"updateDoc",n._key,e),xo(s,[a.toMutation(n._key,ut.exists(!0))])}function x0(n){return xo(_t(n.firestore,Qt),[new ko(n._key,ut.none())])}function F0(n,e){const t=_t(n.firestore,Qt),r=et(n),s=Jf(n.converter,e);return xo(t,[$f(Oo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ut.exists(!1))]).then(()=>r)}function U0(n,...e){var t,r,s;n=Ne(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||ah(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ah(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,d,f;if(n instanceof rt)d=_t(n.firestore,Qt),f=To(n._key.path),l={next:g=>{e[a]&&e[a](tp(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=_t(n,Rn);d=_t(g.firestore,Qt),f=g._query;const m=new Xc(d);l={next:E=>{e[a]&&e[a](new ep(d,m,g,E))},error:e[a+1],complete:e[a+2]},Qf(n._query)}return function(m,E,R,D){const A=new Uc(D),N=new xc(E,A,R);return m.asyncQueue.enqueueAndForget(async()=>Nc(await io(m),N)),()=>{A.Za(),m.asyncQueue.enqueueAndForget(async()=>Oc(await io(m),N))}}(Hs(d),f,c,l)}function xo(n,e){return function(r,s){const i=new Wt;return r.asyncQueue.enqueueAndForget(async()=>l0(await v0(r),s,i)),i.promise}(Hs(n),e)}function tp(n,e,t){const r=t.docs.get(e._key),s=new Xc(n);return new Zf(n,s,e._key,r,new Es(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class j0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Oo(e)}set(e,t,r){this._verifyNotCommitted();const s=ya(e,this._firestore),i=Jf(s.converter,t,r),a=$f(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,ut.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=ya(e,this._firestore);let a;return a=typeof(t=Ne(t))=="string"||t instanceof qr?qf(this._dataReader,"WriteBatch.update",i._key,t,r,s):zf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,ut.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ya(e,this._firestore);return this._mutations=this._mutations.concat(new ko(t._key,ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ya(n,e){if((n=Ne(n)).firestore!==e)throw new j(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function B0(){return new Gs("deleteField")}/**
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
 */function $0(n){return Hs(n=_t(n,Qt)),new j0(n,e=>xo(n,e))}(function(e,t=!0){(function(s){Br=s})(jr),kr(new Hn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Qt(new $_(r.getProvider("auth-internal")),new H_(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new j(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ds(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),vn(Iu,"4.7.3",e),vn(Iu,"4.7.3","esm2017")})();function Yc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function np(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z0=np,rp=new xs("auth","Firebase",np());/**
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
 */const ao=new hc("@firebase/auth");function q0(n,...e){ao.logLevel<=ae.WARN&&ao.warn(`Auth (${jr}): ${n}`,...e)}function Li(n,...e){ao.logLevel<=ae.ERROR&&ao.error(`Auth (${jr}): ${n}`,...e)}/**
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
 */function Xt(n,...e){throw Jc(n,...e)}function Mt(n,...e){return Jc(n,...e)}function sp(n,e,t){const r=Object.assign(Object.assign({},z0()),{[e]:t});return new xs("auth","Firebase",r).create(e,{appName:n.name})}function wn(n){return sp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return rp.create(n,...e)}function Q(n,e,...t){if(!n)throw Jc(e,...t)}function $t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Li(e),new Error(e)}function Yt(n,e){n||$t(e)}/**
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
 */function Ga(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function W0(){return uh()==="http:"||uh()==="https:"}function uh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function H0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(W0()||yg()||"connection"in navigator)?navigator.onLine:!0}function G0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Qs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yt(t>e,"Short delay should be less than long delay!"),this.isMobile=mg()||vg()}get(){return H0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zc(n,e){Yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ip{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const K0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Q0=new Qs(3e4,6e4);function Fo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wr(n,e,t,r,s={}){return op(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Fs(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return _g()||(d.referrerPolicy="no-referrer"),ip.fetch()(cp(n,n.config.apiHost,t,c),d)})}async function op(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},K0),e);try{const s=new X0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw bi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw bi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw bi(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw sp(n,f,d);Xt(n,f)}}catch(s){if(s instanceof Zt)throw s;Xt(n,"network-request-failed",{message:String(s)})}}async function ap(n,e,t,r,s={}){const i=await Wr(n,e,t,r,s);return"mfaPendingCredential"in i&&Xt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function cp(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Zc(n.config,s):`${n.config.apiScheme}://${s}`}class X0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),Q0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Mt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Y0(n,e){return Wr(n,"POST","/v1/accounts:delete",e)}async function lp(n,e){return Wr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ss(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J0(n,e=!1){const t=Ne(n),r=await t.getIdToken(e),s=el(r);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Ss(va(s.auth_time)),issuedAtTime:Ss(va(s.iat)),expirationTime:Ss(va(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function va(n){return Number(n)*1e3}function el(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Li("JWT malformed, contained fewer than 3 sections"),null;try{const s=bd(t);return s?JSON.parse(s):(Li("Failed to decode base64 JWT payload"),null)}catch(s){return Li("Caught error parsing JWT payload as JSON",s?.toString()),null}}function hh(n){const e=el(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Os(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Zt&&Z0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Z0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class eE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ka{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function co(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Os(n,lp(t,{idToken:r}));Q(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?up(i.providerUserInfo):[],c=nE(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!c?.length,f=l?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ka(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function tE(n){const e=Ne(n);await co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function up(n){return n.map(e=>{var{providerId:t}=e,r=Yc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rE(n,e){const t=await op(n,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=cp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ip.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sE(n,e){return Wr(n,"POST","/v2/accounts:revokeToken",Fo(n,e))}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=hh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await rE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Ir;return r&&(Q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function ln(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Yc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ka(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Os(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J0(this,e)}reload(){return tE(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Os(this,Y0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,d,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,A=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,N=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:H,isAnonymous:W,providerData:ee,stsTokenManager:b}=t;Q(B&&b,e,"internal-error");const v=Ir.fromJSON(this.name,b);Q(typeof B=="string",e,"internal-error"),ln(g,e.name),ln(m,e.name),Q(typeof H=="boolean",e,"internal-error"),Q(typeof W=="boolean",e,"internal-error"),ln(E,e.name),ln(R,e.name),ln(D,e.name),ln(A,e.name),ln(N,e.name),ln(F,e.name);const w=new zt({uid:B,auth:e,email:m,emailVerified:H,displayName:g,isAnonymous:W,photoURL:R,phoneNumber:E,tenantId:D,stsTokenManager:v,createdAt:N,lastLoginAt:F});return ee&&Array.isArray(ee)&&(w.providerData=ee.map(T=>Object.assign({},T))),A&&(w._redirectEventId=A),w}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ir;s.updateFromServerResponse(t);const i=new zt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await co(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?up(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new Ir;c.updateFromIdToken(r);const l=new zt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ka(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,d),l}}/**
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
 */const dh=new Map;function qt(n){Yt(n instanceof Function,"Expected a class definition");let e=dh.get(n);return e?(Yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dh.set(n,e),e)}/**
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
 */class hp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hp.type="NONE";const fh=hp;/**
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
 */function xi(n,e,t){return`firebase:${n}:${e}:${t}`}class Ar{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xi(this.userKey,s.apiKey,i),this.fullPersistenceKey=xi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ar(qt(fh),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||qt(fh);const a=xi(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){const g=zt._fromJSON(e,f);d!==i&&(c=g),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ar(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Ar(i,e,r))}}/**
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
 */function ph(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_p(e))return"Blackberry";if(yp(e))return"Webos";if(fp(e))return"Safari";if((e.includes("chrome/")||pp(e))&&!e.includes("edge/"))return"Chrome";if(gp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function dp(n=Ze()){return/firefox\//i.test(n)}function fp(n=Ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pp(n=Ze()){return/crios\//i.test(n)}function mp(n=Ze()){return/iemobile/i.test(n)}function gp(n=Ze()){return/android/i.test(n)}function _p(n=Ze()){return/blackberry/i.test(n)}function yp(n=Ze()){return/webos/i.test(n)}function tl(n=Ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function iE(n=Ze()){var e;return tl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oE(){return Eg()&&document.documentMode===10}function vp(n=Ze()){return tl(n)||gp(n)||yp(n)||_p(n)||/windows phone/i.test(n)||mp(n)}/**
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
 */function Ep(n,e=[]){let t;switch(n){case"Browser":t=ph(Ze());break;case"Worker":t=`${ph(Ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jr}/${r}`}/**
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
 */class aE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function cE(n,e={}){return Wr(n,"GET","/v2/passwordPolicy",Fo(n,e))}/**
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
 */const lE=6;class uE{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:lE,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class hE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mh(this),this.idTokenSubscription=new mh(this),this.beforeStateQueue=new aE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lp(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await co(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=G0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(wn(this));const t=e?Ne(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cE(this),t=new uE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await sE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ep(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&q0(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Uo(n){return Ne(n)}class mh{constructor(e){this.auth=e,this.observer=null,this.addObserver=kg(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dE(n){nl=n}function fE(n){return nl.loadJS(n)}function pE(){return nl.gapiScript}function mE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function gE(n,e){const t=fc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ki(i,e??{}))return s;Xt(s,"already-initialized")}return t.initialize({options:e})}function _E(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(qt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function yE(n,e,t){const r=Uo(n);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=wp(e),{host:a,port:c}=vE(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),EE()}function wp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vE(n){const e=wp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:gh(a)}}}function gh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function EE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class bp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,t){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
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
 */async function Sr(n,e){return ap(n,"POST","/v1/accounts:signInWithIdp",Fo(n,e))}/**
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
 */const wE="http://localhost";class Xn extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Yc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Xn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Sr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sr(e,t)}buildRequest(){const e={requestUri:wE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fs(t)}return e}}/**
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
 */class Tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xs extends Tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends Xs{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class fn extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return fn.credential(t,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
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
 */class pn extends Xs{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class mn extends Xs{constructor(){super("twitter.com")}static credential(e,t){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return mn.credential(t,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),a=_h(r);return new Yn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_h(r);return new Yn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _h(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class lo extends Zt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new lo(e,t,r,s)}}function Ip(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(n,i,e,r):i})}async function bE(n,e,t=!1){const r=await Os(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yn._forOperation(n,"link",r)}/**
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
 */async function TE(n,e,t=!1){const{auth:r}=n;if(Bt(r.app))return Promise.reject(wn(r));const s="reauthenticate";try{const i=await Os(n,Ip(r,s,e,n),t);Q(i.idToken,r,"internal-error");const a=el(i.idToken);Q(a,r,"internal-error");const{sub:c}=a;return Q(n.uid===c,r,"user-mismatch"),Yn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
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
 */async function IE(n,e,t=!1){if(Bt(n.app))return Promise.reject(wn(n));const r="signIn",s=await Ip(n,r,e),i=await Yn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */async function AE(n,e){return ap(n,"POST","/v1/accounts:signInWithCustomToken",Fo(n,e))}/**
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
 */async function SE(n,e){if(Bt(n.app))return Promise.reject(wn(n));const t=Uo(n),r=await AE(t,{token:e,returnSecureToken:!0}),s=await Yn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function RE(n,e,t,r){return Ne(n).onIdTokenChanged(e,t,r)}function kE(n,e,t){return Ne(n).beforeAuthStateChanged(e,t)}function PE(n){return Ne(n).signOut()}const uo="__sak";/**
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
 */class Ap{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CE=1e3,DE=10;class Sp extends Ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);oE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sp.type="LOCAL";const ME=Sp;/**
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
 */class Rp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rp.type="SESSION";const kp=Rp;/**
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
 */function VE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await VE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
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
 */function rl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class NE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=rl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Vt(){return window}function OE(n){Vt().location.href=n}/**
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
 */function Pp(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function LE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xE(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function FE(){return Pp()?self:null}/**
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
 */const Cp="firebaseLocalStorageDb",UE=1,ho="firebaseLocalStorage",Dp="fbase_key";class Ys{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bo(n,e){return n.transaction([ho],e?"readwrite":"readonly").objectStore(ho)}function jE(){const n=indexedDB.deleteDatabase(Cp);return new Ys(n).toPromise()}function Qa(){const n=indexedDB.open(Cp,UE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ho,{keyPath:Dp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ho)?e(r):(r.close(),await jE(),e(await Qa()))})})}async function yh(n,e,t){const r=Bo(n,!0).put({[Dp]:e,value:t});return new Ys(r).toPromise()}async function BE(n,e){const t=Bo(n,!1).get(e),r=await new Ys(t).toPromise();return r===void 0?null:r.value}function vh(n,e){const t=Bo(n,!0).delete(e);return new Ys(t).toPromise()}const $E=800,zE=3;class Mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>zE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(FE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await LE(),!this.activeServiceWorker)return;this.sender=new NE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qa();return await yh(e,uo,"1"),await vh(e,uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>BE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Bo(s,!1).getAll();return new Ys(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$E)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mp.type="LOCAL";const qE=Mp;new Qs(3e4,6e4);/**
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
 */function WE(n,e){return e?qt(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sl extends bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function HE(n){return IE(n.auth,new sl(n),n.bypassAuthState)}function GE(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),TE(t,new sl(n),n.bypassAuthState)}async function KE(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),bE(t,new sl(n),n.bypassAuthState)}/**
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
 */class Vp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HE;case"linkViaPopup":case"linkViaRedirect":return KE;case"reauthViaPopup":case"reauthViaRedirect":return GE;default:Xt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QE=new Qs(2e3,1e4);class br extends Vp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QE.get())};e()}}br.currentPopupAction=null;/**
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
 */const XE="pendingRedirect",Fi=new Map;class YE extends Vp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Fi.get(this.auth._key());if(!e){try{const r=await JE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Fi.set(this.auth._key(),e)}return this.bypassAuthState||Fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JE(n,e){const t=tw(e),r=ew(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ZE(n,e){Fi.set(n._key(),e)}function ew(n){return qt(n._redirectPersistence)}function tw(n){return xi(XE,n.config.apiKey,n.name)}async function nw(n,e,t=!1){if(Bt(n.app))return Promise.reject(wn(n));const r=Uo(n),s=WE(r,e),a=await new YE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const rw=10*60*1e3;class sw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Np(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eh(e))}saveEventToCache(e){this.cachedEventUids.add(Eh(e)),this.lastProcessedEventTime=Date.now()}}function Eh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Np({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function iw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Np(n);default:return!1}}/**
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
 */async function ow(n,e={}){return Wr(n,"GET","/v1/projects",e)}/**
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
 */const aw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cw=/^https?/;async function lw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ow(n);for(const t of e)try{if(uw(t))return}catch{}Xt(n,"unauthorized-domain")}function uw(n){const e=Ga(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!cw.test(t))return!1;if(aw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const hw=new Qs(3e4,6e4);function wh(){const n=Vt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dw(n){return new Promise((e,t)=>{var r,s,i;function a(){wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wh(),t(Mt(n,"network-request-failed"))},timeout:hw.get()})}if(!((s=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Vt().gapi)===null||i===void 0)&&i.load)a();else{const c=mE("iframefcb");return Vt()[c]=()=>{gapi.load?a():t(Mt(n,"network-request-failed"))},fE(`${pE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ui=null,e})}let Ui=null;function fw(n){return Ui=Ui||dw(n),Ui}/**
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
 */const pw=new Qs(5e3,15e3),mw="__/auth/iframe",gw="emulator/auth/iframe",_w={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vw(n){const e=n.config;Q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zc(e,gw):`https://${n.config.authDomain}/${mw}`,r={apiKey:e.apiKey,appName:n.name,v:jr},s=yw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Fs(r).slice(1)}`}async function Ew(n){const e=await fw(n),t=Vt().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:vw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_w,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Mt(n,"network-request-failed"),c=Vt().setTimeout(()=>{i(a)},pw.get());function l(){Vt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const ww={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bw=500,Tw=600,Iw="_blank",Aw="http://localhost";class bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sw(n,e,t,r=bw,s=Tw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},ww),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Ze().toLowerCase();t&&(c=pp(d)?Iw:t),dp(d)&&(e=e||Aw,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[E,R])=>`${m}${E}=${R},`,"");if(iE(d)&&c!=="_self")return Rw(e||"",c),new bh(null);const g=window.open(e||"",c,f);Q(g,n,"popup-blocked");try{g.focus()}catch{}return new bh(g)}function Rw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const kw="__/auth/handler",Pw="emulator/auth/handler",Cw=encodeURIComponent("fac");async function Th(n,e,t,r,s,i){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jr,eventId:s};if(e instanceof Tp){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Rg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Xs){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${Cw}=${encodeURIComponent(l)}`:"";return`${Dw(n)}?${Fs(c).slice(1)}${d}`}function Dw({config:n}){return n.emulator?Zc(n,Pw):`https://${n.authDomain}/${kw}`}/**
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
 */const Ea="webStorageSupport";class Mw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kp,this._completeRedirectFn=nw,this._overrideRedirectResult=ZE}async _openPopup(e,t,r,s){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Th(e,t,r,Ga(),s);return Sw(e,a,rl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Th(e,t,r,Ga(),s);return OE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ew(e),r=new sw(e);return t.register("authEvent",s=>(Q(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ea,{type:Ea},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[Ea];a!==void 0&&t(!!a),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vp()||fp()||tl()}}const Vw=Mw;var Ih="@firebase/auth",Ah="1.7.9";/**
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
 */class Nw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ow(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lw(n){kr(new Hn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ep(n)},d=new hE(r,s,i,l);return _E(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),kr(new Hn("auth-internal",e=>{const t=Uo(e.getProvider("auth").getImmediate());return(r=>new Nw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Ih,Ah,Ow(n)),vn(Ih,Ah,"esm2017")}/**
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
 */const xw=5*60,Fw=Ad("authIdTokenMaxAge")||xw;let Sh=null;const Uw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Fw)return;const s=t?.token;Sh!==s&&(Sh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jw(n=Pd()){const e=fc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gE(n,{popupRedirectResolver:Vw,persistence:[qE,ME,kp]}),r=Ad("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Uw(i.toString());kE(t,a,()=>a(t.currentUser)),RE(t,c=>a(c))}}const s=Td("auth");return s&&yE(t,`http://${s}`),t}function Bw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}dE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Bw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lw("Browser");function se(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function bn(n){const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0}function $w({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const s=new Set(n.map(se).filter(Boolean)),i={};s.forEach(l=>{i[l]=0});const a=[],c=(l,d,f)=>{const g=se(l);g&&(s.has(g)?i[g]+=d:a.push({type:"unknown_name",name:g,...f}))};for(const l of e){if(!l||typeof l.date!="string"||!l.date.startsWith(r))continue;const d=l.splits&&typeof l.splits=="object"?Object.entries(l.splits):[];if(d.length===0){a.push({type:"no_splits",id:l.id});continue}const f=bn(l.amount);c(l.payer,f,{id:l.id});let g=0;for(const[m,E]of d){const R=bn(E);g+=R,c(m,-R,{id:l.id})}Math.abs(g-f)>d.length&&a.push({type:"split_mismatch",id:l.id,diffSatang:g-f})}for(const l of t){if(!l||l.status!=="verified"||l.month!==r)continue;const d=bn(l.amount);c(l.from,d,{id:l.id}),c(l.to,-d,{id:l.id})}return{balances:i,warnings:a}}function zw(n,{minSatang:e=100}={}){const t=[],r=[];for(const[l,d]of Object.entries(n))d<=-e?t.push({name:l,amt:-d}):d>=e&&r.push({name:l,amt:d});const s=(l,d)=>d.amt-l.amt||(l.name<d.name?-1:l.name>d.name?1:0);t.sort(s),r.sort(s);const i=[];let a=0,c=0;for(;a<t.length&&c<r.length;){const l=t[a],d=r[c],f=Math.min(l.amt,d.amt);f>=e&&i.push({from:l.name,to:d.name,amountSatang:f,amount:f/100}),l.amt-=f,d.amt-=f,l.amt<e&&a++,d.amt<e&&c++}return i}function Op(n){const e=Number(n)||0;return Math.abs(e)<100?0:Math.round(e/100)}function fo(n,e){if(!n)return 0;const t=se(e),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return se(n.payer)===t?bn(n.amount):0;let s=0;for(const[i,a]of r)se(i)===t&&(s+=bn(a));return s}function Lp(n,e){return n&&se(n.payer)===se(e)?bn(n.amount):0}const xp=(n,e)=>typeof n=="string"&&n.startsWith(e);function Fp({name:n,transactions:e=[],settlements:t=[],month:r}){const s=se(n);let i=0,a=0;for(const f of e)!f||!xp(f.date,r)||(i+=Lp(f,s),a+=fo(f,s));let c=0,l=0;for(const f of t){if(!f||f.status!=="verified"||f.month!==r)continue;const g=bn(f.amount);se(f.from)===s&&(c+=g),se(f.to)===s&&(l+=g)}const d=i-a+c-l;return{name:s,month:r,paid:i,share:a,sent:c,received:l,balance:d}}function Up({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const{balances:s,warnings:i}=$w({memberNames:n,transactions:e,settlements:t,month:r}),a=zw(s),c=Object.keys(s).sort().map(l=>{const d=Fp({name:l,transactions:e,settlements:t,month:r}),f=Op(s[l]);return{...d,balance:s[l],displayBalance:f,cleared:f===0}});return{month:r,balances:s,plan:a,warnings:i,members:c}}function il({name:n,month:e,walletEntries:t=[],transactions:r=[],settlements:s=[]}){const i=se(n),a=new Set;let c=0,l=0;for(const m of t){if(!m||se(m.ownerName)!==i||!xp(m.date||m.month,e))continue;const E=m.dedupKey||m.transRef;if(E){if(a.has(E))continue;a.add(E)}const R=bn(m.amount);R<=0||(m.type==="income"?c+=R:m.type==="expense"&&(l+=R))}const d=Fp({name:i,transactions:r,settlements:s,month:e}),f=d.share,g=l+f;return{name:i,month:e,income:c,personalExpense:l,groupShare:f,expenseTotal:g,net:c-g,receivedBack:d.received,paidBack:d.sent}}function jp(n){return(n||[]).map(e=>({from:e.from,to:e.to,amount:Math.round(e.amountSatang/100)})).filter(e=>e.amount>=1)}const Bp=n=>[...new Set(n.map(se).filter(Boolean))].sort();function qw(n){if(!n||typeof n!="object")return[];const e=n.splits&&typeof n.splits=="object"?Object.keys(n.splits):[];return Bp([n.payer,...e])}function $p(n){return!n||typeof n!="object"?[]:Bp([n.from,n.to])}function Ww(n,e){return n==="settlements"?$p(e):qw(e)}function Xa(n,e){return{...e,people:Ww(n,e)}}const Rh=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function Hw(n){return new Date(Number(n)+7*60*60*1e3).toISOString().slice(0,7)}function Ya(n,e){const t=String(n||"").slice(0,7);return/^\d{4}-(0[1-9]|1[0-2])$/.test(t)&&t<Hw(e)}function Gw(n){const[e,t]=String(n).split("-").map(Number);return Rh[t-1]?`${Rh[t-1]} ${e+543}`:String(n)}function zp(n){return`เดือน ${Gw(String(n).slice(0,7))} ปิดยอดแล้ว เพิ่มหรือลบบิลของเดือนนี้ไม่ได้ (ยอดเคลียร์เงินจะได้ไม่เปลี่ยน) ถ้าจำเป็นให้ผู้ดูแลหลักทำให้`}const Kw={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},kh="2008948704-db2goT00",qp=kd(Kw),re=I0(qp),zn=jw(qp);let Wp=()=>{};const Qw=new Promise(n=>{Wp=n});let Ph=!1;const Xw=setTimeout(()=>ol(),1e4);function ol(){Ph||(Ph=!0,clearTimeout(Xw),Wp())}const tr=()=>Qw,Yw=n=>"m_"+n;async function al(n,e){try{n&&(!zn.currentUser||zn.currentUser.uid!==Yw(e))&&await SE(zn,n)}catch(t){console.warn("firebase sign-in:",t&&t.message)}ol()}const lt=async(...n)=>(await tr(),O0(...n)),Jw=async(...n)=>(await tr(),N0(...n)),kn=async(...n)=>(await tr(),L0(...n)),cl=async(...n)=>(await tr(),x0(...n)),Hp=async(...n)=>(await tr(),F0(...n));function Ch(n,e,t){let r=null,s=!1;return tr().then(()=>{s||(r=U0(n,e,t))}),()=>{s=!0,r&&r()}}function ll(n){const e=$0(n),t=e.commit.bind(e);return e.commit=async()=>(await tr(),t()),e}function Gp(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function Zw(){return typeof liff<"u"?Promise.resolve():new Promise((n,e)=>{let t=0;const r=setInterval(()=>{typeof liff<"u"?(clearInterval(r),n()):++t>100&&(clearInterval(r),e(new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้")))},100)})}let Kp=()=>{},$o=!1,Qp=()=>{};const eb="เซสชัน LINE หมดอายุ กดเข้าสู่ระบบใหม่ที่แถบด้านบน";function tb(n){Qp=n,$o&&n()}function nb(){try{const n=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}liff.login({redirectUri:n})}catch{}}function po(){$o=!0,Qp();const n=new Error(eb);return n.expired=!0,n}const rb=new Promise(n=>{Kp=n});let Ls="pending";const Ja="dm:v2:webtoken",sb=20*24*60*60*1e3;function zo(){try{const n=JSON.parse(localStorage.getItem(Ja)||"null");return n&&typeof n.token=="string"&&n.token?n:null}catch{return null}}function Xp(n){try{n?localStorage.setItem(Ja,JSON.stringify({token:n,t:Date.now()})):localStorage.removeItem(Ja)}catch{}}async function ib(){const n=zo();if(!(n&&Date.now()-n.t<sb))try{const e=liff.getIDToken();if(!e)return;const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e,kind:"web"})}),r=await t.json().catch(()=>({}));t.ok&&r.success&&r.token&&Xp(r.token)}catch{}}const ob="U0d739eea39c312e11c487e22861920d1",ab=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();function Za(n,e,t){return{name:ab(e.name),memberId:n,pictureUrl:/^https:\/\//i.test(e.pictureUrl||"")?e.pictureUrl:"",isAdmin:e.role==="admin"||t===ob,realName:e.realName||"",promptpay:e.promptpay||""}}const cb=["code","state","liffClientId","liffRedirectUri","error","error_description"],lb=()=>{const n=new URLSearchParams(location.search);return n.has("code")||n.has("liffClientId")};function Dh(){try{const n=new URL(location.href);let e=!1;for(const r of cb)n.searchParams.has(r)&&(n.searchParams.delete(r),e=!0);let t=n.hash;t==="#_=_"&&(t="",e=!0),e&&history.replaceState(null,"",n.pathname+(n.search||"")+t)}catch{}}let ji="";function Mh(){return ji}async function ub(){await Zw();const n=lb();try{await liff.init({liffId:kh})}catch(t){if(ji=`เริ่มระบบ LINE ไม่สำเร็จ: ${t&&t.message||t}`,n)Dh(),await liff.init({liffId:kh});else throw t}if(Dh(),!liff.isLoggedIn()){Ls="out",ji=ji||(n?"ล็อกอินกลับมาแล้วแต่ LINE ไม่ยืนยันบัตร (ลองกดเข้าสู่ระบบใหม่อีกครั้ง)":"บัตรล็อกอิน LINE ในเบราว์เซอร์นี้หมดอายุหรือยังไม่มี");const t=Jp();if(t&&zo()&&!n){try{const s=await Jw(et(re,"members",String(t.memberId)));if(s.exists())return Za(s.id,s.data(),s.data().lineUserId||"")}catch{}return t}if(t&&!n)return $o=!0,{needLogin:!0};const r=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}return liff.login({redirectUri:r}),null}Ls="in",Kp(),ib();try{const t=sessionStorage.getItem("dept_auth_hash");t&&(sessionStorage.removeItem("dept_auth_hash"),(!location.hash||location.hash==="#"||location.hash==="#_=_")&&(location.hash=t))}catch{}const e=await Yp({action:"login"});if(e.member)return await al(e.firebaseToken,e.member.id),Za(e.member.id,e.member,e.member.lineUserId);if(e.needLink)return{needLink:!0,profile:e.profile||{},candidates:e.candidates||[],suggest:e.suggest||""};throw new Error(e.message||"เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง")}async function Yp(n){const e=liff.getIDToken();if(!e)throw new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองรีเฟรชหน้านี้");const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,idToken:e})}),r=await t.json().catch(()=>({}));return!t.ok&&!r.message&&(r.message=`เข้าสู่ระบบไม่สำเร็จ (${t.status})`),r}async function KT(n,e){const t=await Yp({action:"link",memberId:e});if(!t.member)throw new Error(t.message||"ผูกบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง");return nr(),await al(t.firebaseToken,t.member.id),Za(t.member.id,t.member,t.member.lineUserId)}const qo=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase(),Wo=24*60*60*1e3,Ho=10*60*1e3,Jt="dm:v2:";function ht(n,e){try{const t=localStorage.getItem(Jt+n);if(!t)return null;const{t:r,v:s}=JSON.parse(t);return Date.now()-r<e?s:null}catch{return null}}function st(n,e){try{localStorage.setItem(Jt+n,JSON.stringify({t:Date.now(),v:e}))}catch{}}const hb=30*24*60*60*1e3,db=7*24*60*60*1e3;function Jp(){const n=ht("user",hb);return n&&n.name&&n.memberId?n:null}function fb(n){n&&n.name&&n.memberId&&st("user",n)}let mo=null;const Go=()=>mo||"*";function Lr(){return ht("privacy",1/0)}function Zp(){return ht("seeall",1/0)===!0}function pb(n){st("seeall",!!n)}function em(n,e=Lr(),t=Zp()){return!e||!e.hide||e.super&&t?null:qo(n)||null}function tm(n){mo=n||null}const xr=()=>mo?[ve("people","array-contains",mo)]:[];function mb(n,e,t=Go()){const r=ht(`snap:${n}:${t}:${e}`,db);return r&&Array.isArray(r.transactions)&&Array.isArray(r.settlements)&&Array.isArray(r.wallet)?r:null}function gb(n,e,t){st(`snap:${n}:${Go()}:${e}`,{transactions:t.transactions,settlements:t.settlements,wallet:t.wallet})}function _b(){return ht("members",1/0)}function ec(){try{Object.keys(localStorage).filter(n=>n.startsWith(Jt)).forEach(n=>localStorage.removeItem(n))}catch{}}async function yb(){const n=ht("members",Ho);if(n)return n;const e=await lt(Ie(re,"members")),t=[...new Set(e.docs.map(r=>qo(r.data().name)).filter(Boolean))];return st("members",t),t}async function vb(n){const e=`m:${Go()}:${n}`,t=ht(e,Wo);if(t)return t;const[r,s]=await Promise.all([lt(Je(Ie(re,"transactions"),...xr(),ve("date",">=",`${n}-01`),ve("date","<=",`${n}-31`))),lt(Je(Ie(re,"settlements"),...xr(),ve("month","==",n)))]),i={transactions:r.docs.map(a=>({id:a.id,...a.data()})),settlements:s.docs.map(a=>({id:a.id,...a.data()}))};return st(e,i),i}function Eb(n,e){const t={transactions:null,settlements:null},r=()=>{t.transactions&&t.settlements&&e({...t})},s=a=>e({error:a}),i=[Ch(Je(Ie(re,"transactions"),...xr(),ve("date",">=",`${n}-01`),ve("date","<=",`${n}-31`)),a=>{t.transactions=a.docs.map(c=>({id:c.id,...c.data()})),r()},s),Ch(Je(Ie(re,"settlements"),...xr(),ve("month","==",n)),a=>{t.settlements=a.docs.map(c=>({id:c.id,...c.data()})),r()},s)];return()=>i.forEach(a=>a())}async function me(n,e,{line:t=!1}={}){const r=t?null:zo();if(r){const c=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.token},body:JSON.stringify(e)});let l={};try{l=await c.json()}catch{}if(c.status!==401){if(!c.ok)throw new Error(l.message||`เกิดข้อผิดพลาด (${c.status})`);return l}Xp("")}if($o||Ls==="out")throw po();await Promise.race([rb,new Promise((c,l)=>setTimeout(()=>l(new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองใหม่อีกครั้ง")),2e4))]);const s=liff.getIDToken(),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,idToken:s})});let a={};try{a=await i.json()}catch{}if(i.status===401)throw po();if(!i.ok)throw new Error(a.message||`เกิดข้อผิดพลาด (${i.status})`);return a}async function wb(n,{current:e=!1}={}){if(!e){const s=ht("w:"+n,Wo);if(s)return s}const t=await me("/api/shortcut-transaction",{action:"wallet-list",month:n}),r=Array.isArray(t.items)?t.items:[];return e||st("w:"+n,r),r}async function bb(n,e){const t={},r=[];for(const c of n){if(c===e)continue;const l=ht("w:"+c,Wo);l?t[c]=l:r.push(c)}if(r.length===0)return t[e]=await wb(e,{current:!0}),t;const s=r.slice().sort()[0],i=await me("/api/shortcut-transaction",{action:"wallet-list",since:s}),a=Array.isArray(i.items)?i.items:[];t[e]=a.filter(c=>String(c.date||"").startsWith(e));for(const c of r){const l=a.filter(d=>String(d.date||"").startsWith(c));t[c]=l,st("w:"+c,l)}return t}async function QT(){const n=await me("/api/device-token",{},{line:!0});if(!n.success||!n.token)throw new Error(n.message||"สร้างรหัสไม่สำเร็จ");return n}async function XT(){if(Ls!=="in")throw po();const n=await fetch("/api/device-token",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:liff.getIDToken()})});let e={};try{e=await n.json()}catch{}if(!n.ok||!e.success)throw new Error(e.message||"ยกเลิกรหัสไม่สำเร็จ");return e}async function YT(n,e){await me("/api/shortcut-transaction",{action:"wallet-update",id:n,...e})}async function JT(n){let e=0;for(let t=0;t<n.length;t+=100){const r=await me("/api/shortcut-transaction",{action:"wallet-update",items:n.slice(t,t+100)});e+=Number(r.updated)||0}return e}async function Tb(){const n=await me("/api/shortcut-transaction",{action:"wallet-template-list"});return Array.isArray(n.items)?n.items:[]}async function ZT(n,e){await me("/api/shortcut-transaction",{action:"wallet-template-update",id:n,...e}),Hr()}async function eI(n){await me("/api/shortcut-transaction",{action:"wallet-template-stop",id:n}),Hr()}let Rr=[];const nm=n=>{const e=n&&n.plan&&typeof n.plan=="object"?n.plan:{budget:{total:0,cats:{}},months:{},goals:[]};return n&&Array.isArray(n.shared)&&(Rr=n.shared),{...e,shared:Rr}};async function Ib(){const n=ht("plan",Ho);if(n)return Rr=Array.isArray(n.shared)?n.shared:[],n;const e=nm(await me("/api/shortcut-transaction",{action:"plan-get"}));return st("plan",e),e}const Ko=async n=>{const e=nm(await me("/api/shortcut-transaction",n));return st("plan",e),e},Ab=({scope:n,month:e,total:t,cats:r,clear:s=!1})=>Ko({action:"plan-budget-set",scope:n,month:e,total:t,cats:r,clear:s}),Sb=n=>Ko({action:"goal-save",...n}),Rb=(n,e,t)=>Ko({action:"goal-move",id:n,amount:e,dir:t}),kb=n=>Ko({action:"goal-delete",id:n}),Qo=async n=>{const e=await me("/api/shortcut-transaction",n);Rr=Array.isArray(e.shared)?e.shared:Rr;const r={...ht("plan",1/0)||{budget:{total:0,cats:{}},months:{},goals:[]},shared:Rr};return st("plan",r),r},Pb=n=>Qo({action:"shared-goal-save",...n}),Cb=(n,e,t)=>Qo({action:"shared-goal-move",id:n,amount:e,dir:t}),Db=n=>Qo({action:"shared-goal-delete",id:n}),Mb=n=>Qo({action:"shared-goal-leave",id:n}),Vb=5*60*1e3;async function Vh({force:n=!1}={}){const e=n?null:ht("cards",Vb);if(e)return e;const t=await me("/api/shortcut-transaction",{action:"card-list"}),r={enabled:t.enabled===!0,cards:Array.isArray(t.cards)?t.cards:[]};return st("cards",r),r}function Nb(){try{localStorage.removeItem(Jt+"cards")}catch{}}const ul=async n=>{const e=await me("/api/shortcut-transaction",n);return Nb(),e},Ob=n=>ul({action:"card-save",...n}),Lb=n=>ul({action:"card-delete",id:n}),xb=(n,e,t)=>ul({action:"card-paid",id:n,paid:e,key:t});async function tI(n,e){for(const t of n.ids&&n.ids.length?n.ids:[n.id])await kn(et(re,"members",String(t)),{cardAlerts:!!e});nr()}async function nI(n,e){for(const t of n.ids&&n.ids.length?n.ids:[n.id])await kn(et(re,"members",String(t)),{receiptScan:!!e});nr()}async function Fb(n,e=1600){const t=URL.createObjectURL(n);try{const r=await new Promise((a,c)=>{const l=new Image;l.onload=()=>a(l),l.onerror=()=>c(new Error("เปิดรูปไม่ได้ ลองถ่ายใหม่")),l.src=t}),s=Math.min(1,e/Math.max(r.naturalWidth,r.naturalHeight)),i=document.createElement("canvas");return i.width=Math.round(r.naturalWidth*s),i.height=Math.round(r.naturalHeight*s),i.getContext("2d").drawImage(r,0,0,i.width,i.height),i.toDataURL("image/jpeg",.82).split(",")[1]}finally{URL.revokeObjectURL(t)}}async function Ub(n){const e=await Fb(n),t=await me("/api/shortcut-transaction",{action:"receipt-read",imageBase64:e,mimeType:"image/jpeg"});if(!t.receipt)throw new Error(t.message||"อ่านรายการจากรูปนี้ไม่ได้ ลองถ่ายให้เห็นทั้งใบ หรือพิมพ์รายการเอง");return t.receipt}async function rI(){const n=await me("/api/shortcut-transaction",{action:"line-quota"});return n&&n.quota?n.quota:null}async function jb(n){return n&&n.recurring&&Hr(),me("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}async function Nh(){const n=ht("profiles",Ho);if(n)return n;const e=await lt(Ie(re,"members")),t=new Map;e.docs.forEach(s=>{const i=s.data(),a=qo(i.name);if(!a)return;const c={id:s.id,name:a,promptpay:i.promptpay||"",realName:i.realName||"",englishName:i.englishName||"",hasLine:!!i.lineUserId,pictureUrl:/^https?:\/\//i.test(i.pictureUrl||"")?i.pictureUrl:"",role:i.role==="admin"?"admin":"member",cardAlerts:i.cardAlerts===!0,receiptScan:i.receiptScan===!0,ids:[s.id]},l=t.get(a);l&&(c.ids=[...l.ids,s.id],c.cardAlerts=c.cardAlerts||l.cardAlerts,c.receiptScan=c.receiptScan||l.receiptScan),!l||!l.hasLine&&c.hasLine||!l.promptpay&&c.promptpay||!l.pictureUrl&&c.pictureUrl?t.set(a,c):(l.ids=c.ids,l.cardAlerts=c.cardAlerts,l.receiptScan=c.receiptScan)});const r=[...t.values()];return st("profiles",r),r}function hl(n){try{Object.keys(localStorage).filter(e=>e.startsWith(Jt+"m:")&&e.endsWith(":"+n)).forEach(e=>localStorage.removeItem(e)),localStorage.removeItem(Jt+"w:"+n)}catch{}delete un[n]}function nr(){try{localStorage.removeItem(Jt+"profiles"),localStorage.removeItem(Jt+"members")}catch{}}async function Oh(n){return me("/api/shortcut-transaction",{action:"wallet-delete",id:n})}async function sI(n){let e=0;for(let t=0;t<n.length;t+=50){const r=await me("/api/shortcut-transaction",{action:"wallet-confirm",ids:n.slice(t,t+50)});e+=Number(r.confirmed)||0}return e}async function Bb(n){return(await me("/api/shortcut-transaction",{action:"wallet-get",id:n})).item||null}async function iI(n){let e=0,t=0;for(let r=0;r<n.length;r+=50){const s=await me("/api/shortcut-transaction",{action:"wallet-delete-many",ids:n.slice(r,r+50)});e+=Number(s.deleted)||0,t+=Array.isArray(s.failed)?s.failed.length:0}return{deleted:e,failed:t}}async function $b(){return(await lt(Je(Ie(re,"subscription_templates"),...xr(),ve("active","==",!0)))).docs.map(e=>({id:e.id,...e.data()}))}async function zb(){const n="billsched:"+Go(),e=ht(n,Ho);if(e)return e;const[t,r]=await Promise.all([$b(),Tb().catch(()=>[])]),s={group:t.map(i=>({id:i.id,desc:i.desc,amount:i.amount,billingDay:i.billingDay,payer:i.payer,splits:i.splits,icon:i.icon,active:i.active,every:i.every,startMonth:i.startMonth})),personal:r.map(i=>({id:i.id,desc:i.desc,amount:i.amount,billingDay:i.billingDay,icon:i.icon,every:i.every,startMonth:i.startMonth}))};return st(n,s),s}function Hr(){try{Object.keys(localStorage).filter(n=>n.startsWith(Jt+"billsched")).forEach(n=>localStorage.removeItem(n))}catch{}}const un={},Ti={};async function wa(n,{nowMonth:e="",force:t=!1,all:r=!1}={}){const s=f=>un[f]&&un[f].all===r&&Date.now()-un[f].t<(f===e?3e5:Wo),i=t?n:n.filter(f=>!s(f)),a=JSON.stringify([i,r]);Ti[a]||(Ti[a]=me("/api/shortcut-transaction",{action:"clear-plan",months:i,all:r}).finally(()=>{delete Ti[a]}));const c=await Ti[a],l={hide:c.hide===!0,super:c.super===!0};st("privacy",l),Object.entries(c.plans||{}).forEach(([f,g])=>{un[f]={t:Date.now(),all:r,lines:g}});const d={};return n.forEach(f=>{un[f]&&un[f].all===r&&(d[f]=un[f].lines)}),{...l,plans:d}}async function oI(n){const e=await me("/api/shortcut-transaction",{action:"privacy-set",hide:!!n}),t=Lr()||{};return st("privacy",{...t,hide:e.hide===!0}),e.message}async function aI(){let n=0,e=0;for(let t=0;t<5;t++){const r=await me("/api/shortcut-transaction",{action:"privacy-backfill"});if(n+=Number(r.updated)||0,e=Math.max(e,Number(r.checked)||0),r.done)return{done:!0,updated:n,checked:e}}return{done:!1,updated:n,checked:e}}async function cI(n){const e=qo(n),t=[["tx","บิล",Je(Ie(re,"transactions"),ve("people","array-contains",e),ve("date",">=","2000-01-01"),ve("date","<=","2999-12-31"),Bn(1))],["st","ประวัติเคลียร์เงิน",Je(Ie(re,"settlements"),ve("people","array-contains",e),ve("month","==","2000-01"),Bn(1))],["tpl","บิลรายเดือน",Je(Ie(re,"subscription_templates"),ve("people","array-contains",e),ve("active","==",!0),Bn(1))]];return Promise.all(t.map(async([r,s,i])=>{try{return await lt(i),{key:r,label:s,ok:!0,link:""}}catch(a){const c=String(a&&a.message||""),l=c.match(/https:\/\/console\.firebase\.google\.com\S+/);return{key:r,label:s,ok:!1,link:l?l[0]:"",error:a&&a.code==="failed-precondition"?"":c.slice(0,120)}}}))}async function lI(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc.trim().slice(0,100)||"บิลรายเดือน"),typeof e.icon=="string"&&(t.icon=e.icon),e.billingDay!==void 0&&(t.billingDay=Math.min(31,Math.max(1,Math.round(Number(e.billingDay))||1))),e.every!==void 0&&(t.every=[1,3,6,12].includes(Number(e.every))?Number(e.every):1,t.startMonth=Math.min(12,Math.max(1,Math.round(Number(e.startMonth))||1))),await kn(et(re,"subscription_templates",String(n)),t),Hr()}async function uI(n){await kn(et(re,"subscription_templates",String(n)),{active:!1,stoppedAt:new Date}),Hr()}async function qb(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc),typeof e.icon=="string"&&(t.icon=e.icon),await kn(et(re,"transactions",String(n)),t)}async function hI(n,e){const t=!!(Lr()||{}).super;if(!t&&Ya(n.date,Date.now()))throw new Error(zp(n.date));let r=[{id:String(n.id),date:n.date,amount:Number(n.amount),payer:n.payer}];if(n.type==="installment"&&n.groupId){const c=(await lt(Je(Ie(re,"transactions"),...xr(),ve("groupId","==",String(n.groupId))))).docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.id!==String(n.id)&&(t||!Ya(l.date,Date.now()))).map(l=>({id:l.id,date:l.date,amount:Number(l.amount),payer:l.payer}));r=r.concat(c)}const s=ll(re);for(const a of r){const c=e(a.amount);s.update(et(re,"transactions",a.id),{splits:c,people:Xa("transactions",{payer:a.payer,splits:c}).people,receipt:B0()})}await s.commit();const i=[...new Set(r.map(a=>String(a.date).slice(0,7)))];return i.forEach(a=>hl(a)),i}async function dI(n){await Hp(Ie(re,"members"),{name:n,createdAt:new Date().toISOString(),quickAdded:!0,role:"member"}),nr()}async function fI(n,e){const t={realName:String(e.realName||""),promptpay:String(e.promptpay||""),role:e.role==="admin"?"admin":"member",realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date};await kn(et(re,"members",String(n)),t),nr()}async function pI(n){const e=n.name;if((await Promise.all([lt(Je(Ie(re,"transactions"),ve("payer","==",e),Bn(1))),lt(Je(Ie(re,"transactions"),ve(new qr("splits",e),">=",0),Bn(1))),lt(Je(Ie(re,"settlements"),ve("from","==",e),Bn(1))),lt(Je(Ie(re,"settlements"),ve("to","==",e),Bn(1)))])).some(r=>!r.empty))throw new Error(`ลบ ${e} ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน (ถ้าลบ ยอดหนี้ของคนอื่นจะคำนวณผิด)`);await cl(et(re,"members",String(n.id))),nr()}async function mI({from:n,to:e,amount:t,month:r,adminName:s}){await Hp(Ie(re,"settlements"),{status:"verified",month:r,from:n,to:e,people:$p({from:n,to:e}),amount:Number(t),transactionIds:[],createdAt:new Date().toISOString(),verifiedByAdmin:!0,adminId:s||"unknown"})}async function gI(n,e){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(e))throw new Error("เดือนไม่ถูกต้อง");await kn(et(re,"settlements",String(n)),{month:e})}async function _I(n){await cl(et(re,"settlements",String(n)))}async function yI(){return(await me("/api/shortcut-transaction",{action:"admin-status"})).jobs||{debt:null,subs:null,cards:null}}async function vI(){return(await me("/api/shortcut-transaction",{action:"group-summary"})).message||"ส่งแล้ว"}async function EI(n=""){return(await me("/api/shortcut-transaction",{action:"remind-all",month:n})).message||"สั่งเตือนแล้ว"}async function wI(n){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(n))throw new Error("เดือนไม่ถูกต้อง");const e=await lt(Je(Ie(re,"transactions"),ve("date",">=",`${n}-01`),ve("date","<=",`${n}-31`))),t=new Map;e.docs.forEach(a=>t.set(a.id,a.ref));const r=[...new Set(e.docs.map(a=>a.data().groupId).filter(Boolean))];for(const a of r)(await lt(Je(Ie(re,"transactions"),ve("groupId","==",a)))).docs.forEach(l=>t.set(l.id,l.ref));const s=await lt(Je(Ie(re,"settlements"),ve("month","==",n))),i=[...t.values(),...s.docs.map(a=>a.ref)];for(let a=0;a<i.length;a+=400){const c=ll(re);i.slice(a,a+400).forEach(l=>c.delete(l)),await c.commit()}return hl(n),{bills:t.size,settlements:s.docs.length}}async function Wb(n){await cl(et(re,"transactions",String(n)))}async function bI(n,e){for(let t=0;t<n.length;t+=10)await Promise.all(n.slice(t,t+10).map(r=>qb(r,{icon:e})));return n.length}async function TI(n){for(let e=0;e<n.length;e+=10)await Promise.all(n.slice(e,e+10).map(t=>Wb(t)));return n.length}async function II(n,e){await kn(et(re,"members",String(n)),{...e,realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date}),nr()}async function AI(n,{to:e,amount:t,month:r}){const s=await new Promise((l,d)=>{const f=new FileReader;f.onload=()=>l(String(f.result).split(",")[1]),f.onerror=()=>d(new Error("อ่านไฟล์รูปไม่สำเร็จ")),f.readAsDataURL(n)});if(Ls!=="in")throw po();const i=liff.getIDToken(),a=await fetch("/api/verify-settlement-slip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:i,to:e,amount:t,month:r,base64Image:s})});let c={};try{c=await a.json()}catch{}return{ok:a.ok&&c.success===!0,json:c,status:a.status}}function SI(){try{liff.logout()}catch{}try{PE(zn)}catch{}ec(),location.href="/"}async function Lh({docs:n,template:e}){const t=n.find(s=>Ya(s.date,Date.now()));if(t&&!(Lr()||{}).super)throw new Error(zp(t.date));const r=ll(re);n.forEach(s=>r.set(et(Ie(re,"transactions")),Xa("transactions",s))),e&&r.set(et(Ie(re,"subscription_templates")),Xa("subscription_templates",e)),await r.commit(),e&&Hr()}(async()=>{try{if(typeof zn.authStateReady=="function"&&await zn.authStateReady(),zn.currentUser)return ol();const n=zo();if(!n)return;const e=await fetch("/api/device-token?firebase=1",{headers:{Authorization:"Bearer "+n.token}}),t=await e.json().catch(()=>({}));e.ok&&t.success&&t.member&&await al(t.firebaseToken,t.member.id)}catch(n){console.warn("firebase pass:",n&&n.message)}})();const xh=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},Fh=60;function Hb(n,e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));if(!t)throw new Error("รูปแบบวันที่ไม่ถูกต้อง");const r=Number(t[1]),s=Number(t[2])-1,i=Number(t[3]),a=r*12+s+Number(e),c=Math.floor(a/12),l=a-c*12,d=new Date(Date.UTC(c,l+1,0)).getUTCDate(),f=Math.min(i,d);return`${String(c).padStart(4,"0")}-${String(l+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`}function Gb({amount:n,installments:e,splits:t,date:r}){const s=Number(e);if(!Number.isInteger(s)||s<1||s>Fh)throw new Error(`จำนวนงวดต้องเป็นเลข 1–${Fh}`);const i=Object.keys(t||{});if(i.length===0)throw new Error("ไม่มีผู้ร่วมจ่าย");const a=xh(n);if(a<=0)throw new Error("ยอดเงินไม่ถูกต้อง");const c=i.map(f=>[f,xh(t[f])]),l=a-c.reduce((f,[,g])=>f+g,0);if(l!==0){let f=0;c.forEach(([,g],m)=>{g>c[f][1]&&(f=m)}),c[f][1]+=l}const d=[];for(let f=0;f<s;f++){const g={};let m=0;for(const[E,R]of c){const D=Math.floor(R/s),A=f<R-D*s?1:0;g[E]=(D+A)/100,m+=D+A}d.push({index:f+1,date:Hb(r,f),amount:m/100,splits:g})}return d}const Uh=yd.map(n=>n.key),RI=["plane","shield","home","phone","car","gift","heart","star"],kI=["accent","sun","receive","accent2","navy"],Kb=80,Qb=/^\d{4}-(0[1-9]|1[0-2])$/,qn=n=>Math.round((Number(n)||0)*100),jh=n=>typeof n=="string"&&Qb.test(n),Bh=n=>!!(n&&(Number(n.total)>0||Object.values(n.cats||{}).some(e=>Number(e)>0)));function Xb(n,e){const t=n||{},r=t.months&&t.months[e];return Bh(r)?{total:Number(r.total)||0,cats:{...r.cats||{}},source:"month"}:Bh(t.budget)?{total:Number(t.budget.total)||0,cats:{...t.budget.cats||{}},source:"default"}:{total:0,cats:{},source:"none"}}function $h(n,e){return e>0?n>e?"over":n/e*100>=Kb?"near":"ok":"none"}const tc=(n,e)=>e>0?Math.round(n/e*100):0;function Yb(n,e){const t=n||{total:0,cats:{},source:"none"},r=Object.fromEntries(Uh.map(d=>[d,qn((t.cats||{})[d])])),s=Object.values(r).reduce((d,f)=>d+f,0),i=qn(t.total)>0?qn(t.total):s,a=Math.max(0,Math.round(Number(e&&e.totalSat)||0)),c=e&&e.cats||{},l=Uh.filter(d=>r[d]>0).map(d=>{const f=Math.max(0,Math.round(Number(c[d])||0));return{key:d,budgetSat:r[d],spentSat:f,leftSat:r[d]-f,percent:tc(f,r[d]),level:$h(f,r[d])}});return{set:i>0,source:t.source||"none",budgetSat:i,spentSat:a,leftSat:i-a,percent:tc(a,i),level:$h(a,i),cats:l,unassignedSat:Math.max(0,i-s)}}function Jb(n,e){if(!jh(n)||!jh(e))return 0;const[t,r]=n.split("-").map(Number),[s,i]=e.split("-").map(Number);return Math.max(0,(s-t)*12+(i-r)+1)}function Zb(n,e){return(n&&Array.isArray(n.log)?n.log:[]).filter(t=>String(t.date).startsWith(e)).reduce((t,r)=>t+qn(r.amount),0)}function nc(n,e){const t=n||{},r=qn(t.target),s=qn(t.saved),i=Math.max(0,r-s),a=r>0&&s>=r,c=t.deadline?Jb(e,t.deadline):0,l=!!t.deadline&&c===0&&!a;let d=0;return a||(d=t.deadline?c>0?Math.ceil(i/c/100)*100:i:qn(t.monthly)),{targetSat:r,savedSat:s,remainingSat:i,percent:Math.min(100,tc(s,r)),done:a,monthsLeft:c,late:l,perMonthSat:d,thisMonthSat:Zb(t,e)}}function rm(n,e){let t=0,r=0;for(const s of n||[]){const i=nc(s,e);i.done||(t+=i.perMonthSat),r+=i.thisMonthSat}return{planSat:t,doneSat:Math.max(0,r)}}function eT(n,e,t){const r=Math.max(0,Math.round(Number(n)||0)-rm(e,t).planSat);return Math.floor(r/1e4)*1e4}const tT=[1,3,6,12],nT=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function Fr(n){const e=Number(n&&n.every);return tT.includes(e)?e:1}function go(n){const e=Number(n&&n.startMonth);return Number.isInteger(e)&&e>=1&&e<=12?e:1}function rc(n,e){const t=Fr(n);return t===1?!0:((Number(String(e).slice(5,7))-go(n))%t+t)%t===0}function PI(n){return Array.from({length:12},(e,t)=>t+1).filter(e=>rc(n,`2000-${String(e).padStart(2,"0")}`))}const CI=n=>12/Fr(n);function DI(n){const e=Fr(n),t=Math.min(31,Math.max(1,Number(n&&n.billingDay)||1));return e===1?`ทุกวันที่ ${t}`:e===12?`ทุกปี ${t} ${nT[go(n)-1]}`:`ทุก ${e} เดือน วันที่ ${t}`}function rT(n){const e=Fr(n);return e===1?"":e===12?"ทุกปี":`ทุก ${e} เดือน`}const _o=yd.map(n=>({key:n.key,label:n.label,icons:n.icons}));function sT(n){const e=_o.find(t=>t.icons.includes(n));return e?e.key:"other"}const zh=n=>String(n||"").slice(0,7);function qh({name:n,month:e,today:t="",members:r,transactions:s,settlements:i,walletItems:a=[],planLines:c=null}){const l=se(n),d=Up({memberNames:r,transactions:s,settlements:i,month:e}),f=il({name:l,month:e,walletEntries:a.map(_=>({ownerName:l,type:_.type,amount:_.amount,date:_.date})),transactions:s,settlements:i}),g=Object.fromEntries(_o.map(_=>[_.key,0])),m={},E={},R=(_,G,We,yt,Ot)=>{if(!yt||!String(_).startsWith(e))return;g[sT(We)]+=yt;const it=Number(String(_).slice(8,10));m[it]=(m[it]||0)+yt,E[it]||(E[it]=[]),E[it].push({desc:G||"ไม่ระบุ",icon:We,satang:yt,kind:Ot})};for(const _ of s)!_||zh(_.date)!==e||R(_.date,_.desc,_.icon,fo(_,l),"group");for(const _ of a)_.type==="expense"&&R(_.date,_.desc,_.icon,Math.round(Number(_.amount)*100),"personal");const D=Object.values(g).reduce((_,G)=>_+G,0),A=_o.map(_=>({key:_.key,label:_.label,satang:g[_.key],percent:D>0?Math.round(g[_.key]/D*100):0})).filter(_=>_.satang>0).sort((_,G)=>G.satang-_.satang),N=t.startsWith(e)?Number(t.slice(8,10)):Ur(e),F=[];for(let _=1;_<=N;_++)F.push({day:_,satang:m[_]||0,today:t===`${e}-${String(_).padStart(2,"0")}`,items:E[_]||[]});const B=Ur(e),H=[];for(let _=1;_<=B;_++)H.push({day:_,date:`${e}-${String(_).padStart(2,"0")}`,satang:m[_]||0,today:t===`${e}-${String(_).padStart(2,"0")}`,isFuture:t.startsWith(e)&&_>Number(t.slice(8,10)),items:E[_]||[]});const W=f.expenseTotal,ee=N>0?Math.round(W/N/100):0,b=c||jp(d.plan),v=b.filter(_=>_.to===l).map(_=>({name:_.from,amount:_.amount})).sort((_,G)=>G.amount-_.amount),w=b.filter(_=>_.from===l).map(_=>({name:_.to,amount:_.amount})).sort((_,G)=>G.amount-_.amount),T=v[0]?v[0].amount:0;v.forEach(_=>{_.share=T?Math.round(_.amount/T*100):0});const S=w[0]?w[0].amount:0;w.forEach(_=>{_.share=S?Math.round(_.amount/S*100):0});const k=[];for(const _ of s){if(!_||zh(_.date)!==e)continue;const G=fo(_,l);(G>0||Lp(_,l)>0)&&k.push({id:_.id,kind:"group",desc:_.desc||"",icon:_.icon,satang:G,date:_.date,ts:Number(_.timestamp)||0})}for(const _ of a)String(_.date).startsWith(e)&&k.push({id:_.id,kind:_.type==="income"?"income":"personal",desc:_.desc||"",icon:_.icon,satang:Math.round(Number(_.amount)*100),date:_.date,ts:Number(_.timestamp)||0});return k.sort((_,G)=>G.date.localeCompare(_.date)||G.ts-_.ts),{month:e,incomeSat:f.income,spentSat:W,personalSat:f.personalExpense,groupShareSat:f.groupShare,netSat:f.net,net:Op(f.net),spentPercent:f.income>0?Math.min(999,Math.round(W/f.income*100)):null,receivedBackSat:f.receivedBack,categories:A,daily:F,calendarDays:H,average:ee,owedToMe:v,owedTotal:v.reduce((_,G)=>_+G.amount,0),iOwe:w,iOweTotal:w.reduce((_,G)=>_+G.amount,0),recent:k.slice(0,5),warnings:d.warnings}}function Wh(n,e,t=""){const r=e.month,s={};for(const D of e.categories||[])s[D.key]=D.satang;const i=Yb(Xb(n||{},r),{totalSat:e.spentSat,cats:s}),a=(n&&n.goals||[]).map(D=>({...D,s:nc(D,r)})),c=(n&&n.shared||[]).map(D=>({...D,s:nc(D,r)})),l=[...a,...c],d=rm(a,r);let f=0,g=0;for(const D of c)D.s.done||(f+=Number(D.perPersonSat)||0),g+=Number(D.mineMonthSat)||0;const m={planSat:d.planSat+f,doneSat:Math.max(0,d.doneSat+g)},E=t.startsWith(r),R=E?Ur(r)-Number(t.slice(8,10))+1:0;return{month:r,status:i,goals:l,saving:m,suggestSat:Math.max(0,eT(e.incomeSat,a,r)-Math.ceil(f/1e4)*1e4),daysLeft:R,perDaySat:E&&i.leftSat>0&&R>0?Math.floor(i.leftSat/R/100)*100:0}}function iT({me:n,month:e,today:t,group:r=[],personal:s=[],cards:i=[]}){const a=se(n),c=A=>Math.round((Number(A)||0)*100),l=[];for(const A of r){if(!A||A.active===!1)continue;const N=A.splits&&typeof A.splits=="object"?A.splits:{},F=Object.keys(N).find(H=>se(H)===a),B=se(A.payer);!F&&B!==a||l.push({id:"g:"+A.id,kind:"group",desc:String(A.desc||"บิลรายเดือน"),icon:A.icon||"",billingDay:Number(A.billingDay)||1,mySat:F?c(N[F]):0,totalSat:c(A.amount),payer:B,people:Object.keys(N).length,names:Object.keys(N).map(se),coverFor:!F,every:Fr(A),startMonth:go(A)})}for(const A of s)!A||A.active===!1||l.push({id:"p:"+A.id,kind:"personal",desc:String(A.desc||"รายจ่ายรายเดือน"),icon:A.icon||"",billingDay:Number(A.billingDay)||1,mySat:c(A.amount),totalSat:c(A.amount),payer:a,people:1,coverFor:!1,every:Fr(A),startMonth:go(A)});const d=(A,N)=>Math.min(Math.max(1,Math.round(N)||1),Ur(A)),f=(A,N)=>{const F=`${N}-${String(d(N,A.billingDay)).padStart(2,"0")}`,B=Math.round((Date.parse(F+"T00:00:00Z")-Date.parse(t+"T00:00:00Z"))/864e5);return{...A,date:F,day:Number(F.slice(8,10)),daysLeft:B,status:B<0?"done":B===0?"today":"soon"}},g=aT(i,t),m=[...l.filter(A=>rc(A,e)).map(A=>f(A,e)),...g.filter(A=>A.date.startsWith(e))].sort((A,N)=>A.day-N.day||A.desc.localeCompare(N.desc)),E=t.slice(0,7),R=[...[E,wt(E,1),wt(E,2)].flatMap(A=>l.filter(N=>rc(N,A)).map(N=>f(N,A))),...g].filter(A=>A.daysLeft>=0).sort((A,N)=>A.daysLeft-N.daysLeft||N.mySat-A.mySat),D=m.filter(A=>A.kind!=="card");return{month:e,items:m,totalSat:D.reduce((A,N)=>A+N.mySat,0),dueSat:D.filter(A=>A.daysLeft>=0).reduce((A,N)=>A+N.mySat,0),upcoming:R}}function oT(n){const e=n&&n.bank&&n.bank!=="อื่นๆ"?n.bank:"บัตร";return n&&n.last4?`${e} •• ${n.last4}`:e}function ba(n){return`${Number(n.slice(8,10))} ${Jn(n.slice(0,7))}`}function aT(n,e){const t=[];for(const r of n||[]){const s=(i,a)=>{const c=Math.round((Date.parse(i.dueDate+"T00:00:00Z")-Date.parse(e+"T00:00:00Z"))/864e5);t.push({id:`c:${r.id}:${i.key}`,kind:"card",cardId:r.id,color:r.color,desc:oT(r),icon:"fa-credit-card",date:i.dueDate,day:Number(i.dueDate.slice(8,10)),billingDay:r.dueDay,daysLeft:c,status:c<0?"done":c===0?"today":"soon",mySat:Number(i.amountSat)||0,totalSat:Number(i.amountSat)||0,start:i.start,end:i.end,pending:a,people:1,coverFor:!1})};r.due&&!r.due.paid&&s(r.due,!1),r.open&&s(r.open,!0)}return t}function cT(n,e){if(n.kind==="card")return n.pending?`ยังไม่ตัดรอบ (ตัดรอบ ${ba(n.end)})`:`ยอดรอบ ${ba(n.start)} - ${ba(n.end)}`;if(n.kind==="personal")return"ส่วนตัว";const t=n.payer===se(e);return n.coverFor?"คุณจ่ายแทน":t?`คุณจ่าย หาร ${n.people}`:`${n.payer} จ่าย หาร ${n.people}`}function Ur(n){const[e,t]=n.split("-").map(Number);return new Date(Date.UTC(e,t,0)).getUTCDate()}function wt(n,e){const[t,r]=n.split("-").map(Number),s=t*12+(r-1)+e,i=Math.floor(s/12);return`${i}-${String(s-i*12+1).padStart(2,"0")}`}const Js=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],lT=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];function sm(n){const[e,t]=n.split("-").map(Number);return`${Js[t-1]} ${e+543}`}function dl(n){const[e,t]=n.split("-").map(Number);return`${lT[t-1]} ${e+543}`}function ie(n,{decimals:e=0,sign:t=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return`${r<0?"-":t&&r>0?"+":""}฿${s}`}function uT({name:n,months:e,transactions:t,settlements:r,walletItems:s=[]}){const i=se(n),a=s.map(c=>({ownerName:i,type:c.type,amount:c.amount,date:c.date}));return e.map(c=>{const l=il({name:i,month:c,walletEntries:a,transactions:t,settlements:r});return{month:c,spentSat:l.expenseTotal,incomeSat:l.income}})}function Hh(n,e){return Array.from({length:e},(t,r)=>wt(n,r-(e-1)))}function Jn(n){return Js[Number(n.slice(5,7))-1]}function MI(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10?e.slice(0,6)+"XXXX":e.length===13?"X-XXXX-XXXXX-"+e.slice(11,13)+"-X":e}function im(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10||e.length===13?e:""}function VI(n,e){const t=im(n);return!t||!(Number(e)>0)?"":`https://promptpay.io/${t}/${Number(e).toFixed(2)}`}function hT({name:n,month:e,members:t,transactions:r,settlements:s,planLines:i=null}){const a=se(n),l=(i||jp(Up({memberNames:t,transactions:r,settlements:s,month:e}).plan)).map(g=>({from:g.from,to:g.to,amount:g.amount,role:g.from===a?"pay":g.to===a?"receive":"other"})),d={pay:0,receive:1,other:2};l.sort((g,m)=>d[g.role]-d[m.role]||m.amount-g.amount);const f=(s||[]).filter(g=>g&&g.status==="verified"&&g.month===e).map(g=>({id:g.id,from:g.from,to:g.to,amount:Number(g.amount)||0,manual:!!g.verifiedByAdmin,createdAt:g.createdAt||""})).sort((g,m)=>String(m.createdAt).localeCompare(String(g.createdAt)));return{lines:l,history:f,mineToPay:l.filter(g=>g.role==="pay"),mineToReceive:l.filter(g=>g.role==="receive"),cleared:l.length===0}}function dT({name:n,month:e,walletItems:t,transactions:r,settlements:s}){const i=se(n),a=il({name:i,month:e,walletEntries:t.map(l=>({ownerName:i,type:l.type,amount:l.amount,date:l.date})),transactions:r,settlements:s}),c=t.filter(l=>String(l.date).startsWith(e)).sort((l,d)=>d.date.localeCompare(l.date)||(Number(d.timestamp)||0)-(Number(l.timestamp)||0)).map(l=>({id:l.id,type:l.type==="income"?"income":"expense",desc:l.desc||"",amount:Number(l.amount)||0,date:l.date,icon:l.icon||"",card:l.card||"",cardId:l.cardId||"",account:l.account||"",unconfirmed:l.unconfirmed===!0,recurring:l.recurring===!0||String(l.id||"").startsWith("wsub_"),ts:Number(l.timestamp)||0}));return{incomeSat:a.income,personalSat:a.personalExpense,groupShareSat:a.groupShare,spentSat:a.expenseTotal,netSat:a.net,receivedBackSat:a.receivedBack,paidBackSat:a.paidBack,items:c}}function fT({name:n,month:e,transactions:t,search:r=""}){const s=se(n),i=String(r||"").trim().toUpperCase(),a=t.filter(l=>l&&String(l.date||"").startsWith(e)).map(l=>({id:l.id,desc:l.desc||"",date:l.date,icon:l.icon||"",payer:l.payer||"",amountSat:pT(l.amount),myShareSat:fo(l,s),iPaid:se(l.payer)===s,people:Object.keys(l.splits||{}),splits:l.splits||{},groupId:l.groupId||"",receipt:l.receipt&&Array.isArray(l.receipt.items)?l.receipt:null,type:l.paymentType||"normal",ts:Number(l.timestamp)||0})).filter(l=>!i||l.desc.toUpperCase().includes(i)||se(l.payer).includes(i)).sort((l,d)=>d.date.localeCompare(l.date)||d.ts-l.ts),c=a.filter(l=>l.myShareSat>0||l.iPaid);return{all:a,mine:c,totalSat:a.reduce((l,d)=>l+d.amountSat,0),myShareSat:c.reduce((l,d)=>l+d.myShareSat,0)}}const pT=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},NI=Eo.map(n=>({key:n.key,label:n.label,fa:n.fa,icon:n.icon,group:n.group})),OI=Xm;function mT({me:n,members:e,transactions:t,limit:r=6}){const s=se(n),i=new Set((e||[]).map(se)),a=new Map;for(const c of t||[]){const l=new Set(Object.keys(c&&c.splits||{}).map(se));l.add(se(c&&c.payer)),l.has(s)&&l.forEach(d=>{d&&d!==s&&i.has(d)&&a.set(d,(a.get(d)||0)+1)})}return[...a.entries()].sort((c,l)=>l[1]-c[1]||(c[0]<l[0]?-1:1)).slice(0,r).map(([c])=>c)}function fl(n,e){const t=Math.round(Number(n)*100),r=e.length,s=Math.floor(t/r),i=t-s*r;return Object.fromEntries(e.map((a,c)=>[a,(s+(c<i?1:0))/100]))}function om({amount:n,payer:e,people:t,mode:r,custom:s}){if(r==="custom"){const a={};let c=0;for(const d of t){const f=Math.round(Number((s||{})[d])*100);if(!Number.isFinite(f)||f<=0)return{ok:!1,error:`ใส่ยอดของ ${d} ให้มากกว่า 0 (หรือเอาออกจากคนหาร)`};a[d]=f/100,c+=f}const l=Math.round(n*100)-c;return l!==0?{ok:!1,error:`ยอดที่แบ่งรวมกัน ${ie(c/100,{decimals:2})} ไม่เท่ายอดบิล ${ie(n,{decimals:2})} (${l>0?"ขาด":"เกิน"} ${ie(Math.abs(l)/100,{decimals:2})})`}:{ok:!0,splits:a}}const i=t.includes(e)?[...t.filter(a=>a!==e),e]:t;return{ok:!0,splits:fl(n,i)}}function LI({amount:n,payer:e,participants:t,mode:r,custom:s}){const i=Math.round(Number(n)*100)/100;if(!Number.isFinite(i)||i<=0)return{ok:!1,error:"ยอดบิลไม่ถูกต้อง"};const a=se(e),c=[...new Set((t||[]).map(se).filter(Boolean))];if(c.length===0)return{ok:!1,error:"เลือกคนหารอย่างน้อย 1 คน"};if(c.length===1&&c[0]===a)return{ok:!1,error:"บิลที่มีแต่คนจ่ายคนเดียวไม่ต้องหาร ถ้าไม่มีเพื่อนหารแล้วให้ลบบิลนี้"};const l={};for(const[d,f]of Object.entries(s||{}))l[se(d)]=f;return om({amount:i,payer:a,people:c,mode:r,custom:l})}function xI(n,e,t){const r=Object.keys(n||{}).map(se);if(r.length===0)return!0;const s=se(t),i=r.includes(s)?[...r.filter(l=>l!==s),s]:r,a=fl(e,i),c=Object.fromEntries(Object.entries(n).map(([l,d])=>[se(l),Math.round(Number(d)*100)]));return i.every(l=>Math.round(a[l]*100)===c[l])}function FI({splits:n,amount:e,payer:t,mode:r}){const s=Object.keys(n||{});if(r!=="custom"){const m=se(t),E=s.includes(m)?[...s.filter(R=>R!==m),m]:s;return fl(e,E)}const i=Math.round(Number(e)*100),a=s.map(m=>Math.round(Number(n[m])*100)),c=a.reduce((m,E)=>m+E,0)||1,l=a.map(m=>i*m/c),d=l.map(Math.floor);let f=i-d.reduce((m,E)=>m+E,0);const g=l.map((m,E)=>[m-Math.floor(m),E]).sort((m,E)=>E[0]-m[0]||m[1]-E[1]);for(let m=0;f>0;m=(m+1)%g.length,f--)d[g[m][1]]+=1;return Object.fromEntries(s.map((m,E)=>[m,d[E]/100]))}function UI(n){const e=Math.round(Number(n.amount)*100)/100;if(!Number.isFinite(e)||e<=0)return{ok:!1,error:"ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"};if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date||""))return{ok:!1,error:"เลือกวันที่ให้ถูกต้อง"};if(n.today&&n.date>n.today)return{ok:!1,error:"เลือกวันที่ไม่เกินวันนี้"};const t=se(n.payer);if(!t)return{ok:!1,error:"เลือกคนจ่าย"};const r=[...new Set((n.participants||[]).map(se).filter(Boolean))];if(r.length===0)return{ok:!1,error:"เลือกคนหารอย่างน้อย 1 คน"};if(r.length===1&&r[0]===t)return{ok:!1,error:"บิลที่มีแต่ตัวเองคนเดียวไม่ต้องหาร ให้ใช้รายจ่ายส่วนตัวแทน"};const s=om({amount:e,payer:t,people:r,mode:n.mode,custom:n.custom});if(!s.ok)return s;const i=s.splits,a=String(n.desc||"").trim().slice(0,100)||"ไม่ระบุ",c=n.icon||"fa-money-bill",l=n.now||Date.now(),d={payer:t,icon:c};if(n.type==="installment"){const f=Number(n.installments);let g;try{g=Gb({amount:e,installments:f,splits:i,date:n.date})}catch(E){return{ok:!1,error:E.message}}const m=`grp_${l}`;return{ok:!0,docs:g.map((E,R)=>({...d,date:E.date,desc:`${a} (${E.index}/${f})`,amount:E.amount,splits:E.splits,paymentType:"installment",groupId:m,timestamp:l+R})),template:null,summary:`ผ่อน ${f} งวด งวดละประมาณ ${ie(e/f,{decimals:2})}`}}if(n.type==="subscription"){const f=`sub_${l}`,g=n.recurring!==!1,m=[1,3,6,12].includes(Number(n.every))?Number(n.every):1,E={...d,date:n.date,desc:a,amount:e,splits:i,paymentType:"subscription",subscriptionRecurring:g,subscriptionStartDate:n.date,groupId:f,timestamp:l},R=g?{desc:a,amount:e,payer:t,splits:i,icon:c,billingDay:Number(n.date.slice(8,10))||1,groupId:f,active:!0,createdAt:new Date(l),createdBy:t,lastGeneratedMonth:n.date.slice(0,7),every:m,startMonth:Number(n.date.slice(5,7))||1}:null,D=m===1?"ทุกเดือน":m===12?"ทุกปี":`ทุก ${m} เดือน`;return{ok:!0,docs:[E],template:R,summary:g?`สร้างซ้ำ${D}อัตโนมัติ`:"ครั้งเดียว"}}return{ok:!0,docs:[{...d,date:n.date,desc:a,amount:e,splits:i,paymentType:"normal",timestamp:l,...n.receipt?{receipt:n.receipt}:{}}],template:null,summary:r.includes(t)?`หารกับเพื่อน ${r.length} คน (รวมผู้จ่าย)`:`จ่ายแทน ${r.length} คน (ไม่มีส่วนของผู้จ่าย)`}}const Ii=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"list",label:"รายการ",icon:"list"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"me",label:"ฉัน",icon:"user"}],gT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];function am({month:n,today:e}){if(!n)return null;const t=e&&e.startsWith(n),r=t?Number(e.slice(8,10)):Ur(n),[s,i]=n.split("-").map(Number),a=t?gT[new Date(Date.UTC(s,i-1,r)).getUTCDay()]:"ทั้งเดือน";return h("span",{class:"dtile","aria-hidden":"true",children:[h("span",{class:"m",children:Jn(n)}),h("span",{class:"d num",children:r}),h("span",{class:"w",children:a})]})}const Gh=["home","list","clear","me"];function _T({page:n,children:e}){const t=Wi(n),r=t.current;de(()=>{t.current=n},[n]);const s=r===n?"":Gh.indexOf(n)>Gh.indexOf(r)?"dir-r":"dir-l";return h("div",{class:`page-swap ${s}`.trim(),children:e},n)}function yT({month:n,onChange:e,min:t,max:r}){return h("div",{class:"month-wrap",children:[n!==r&&h("button",{type:"button",class:"btn sm ghost",onClick:()=>e(r),children:"เดือนนี้"}),h("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[h("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=t,onClick:()=>e(wt(n,-1)),children:h(Z,{name:"left",size:16})}),h("span",{class:"num","aria-live":"polite",children:sm(n)}),h("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>e(wt(n,1)),children:h(Z,{name:"right",size:16})})]})]})}function cm({icon:n,title:e,note:t}){return h("div",{class:"sec-t",children:[h("span",{class:"ico",children:h(Z,{name:n})}),h("div",{children:[h("h2",{children:e}),t&&h("p",{children:t})]})]})}function vT(n){let e=0;for(const t of String(n||""))e=(e*31+t.codePointAt(0))%997;return e%5}const ET=({name:n,pictures:e={}})=>h("span",{class:"payer-av",title:`${n} จ่าย`,children:h(pl,{name:n,pictureUrl:e[n],size:"xs"})}),wT=({payer:n,people:e=[],pictures:t={}})=>h("span",{class:"flow","aria-label":`${n} จ่าย หารกับ ${e.join(", ")}`,children:[h(ET,{name:n,pictures:t}),h(Z,{name:"right",size:12,class:"flow-arr"}),h(sc,{names:e,pictures:t,max:3,size:"xs"})]});function sc({names:n=[],pictures:e={},max:t=3,size:r="sm"}){const s=n.slice(0,t);return h("span",{class:"avstack","aria-hidden":"true",children:[s.map(i=>h(pl,{name:i,pictureUrl:e[i],size:r},i)),n.length>t&&h("span",{class:"avstack-more num",children:["+",n.length-t]})]})}function pl({name:n,pictureUrl:e,size:t=""}){const[r,s]=te(!1),i=[...String(n||"?")][0],a=`av tint${vT(n)} ${t}`.trim();return e&&!r?h("img",{src:e,alt:n?`รูปของ ${n}`:"",class:a,onError:()=>s(!0),loading:"lazy"}):h("div",{class:a,"aria-hidden":"true",children:i})}function bT(){const[n,e]=te(()=>{if(typeof document>"u")return"light";const s=localStorage.getItem("dm:theme");return s==="dark"||s==="light"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),t=()=>{const s=n==="dark"?"light":"dark";e(s),document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("dm:theme",s)}catch{}},r=n==="dark";return h("button",{type:"button",class:"theme-toggle","aria-label":r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",title:r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",onClick:t,children:h(Z,{name:r?"sun":"moon",size:18})})}function jI({label:n,value:e,options:t,onChange:r,icon:s="calendar",title:i,id:a}){const[c,l]=te(!1),d=(t||[]).find(f=>f.value===e)||t&&t[0]||{};return h("div",{class:"field",children:[n&&h("label",{for:a,children:n}),h("button",{type:"button",id:a,class:"c-select-trigger",onClick:()=>l(!0),"aria-haspopup":"dialog",children:[s&&h("span",{class:"ico sm",children:h(Z,{name:s,size:16})}),h("span",{class:"c-select-val num",children:d.label||e}),h(Z,{name:"down",size:16,class:"mute"})]}),c&&h(lm,{title:i||n||"เลือกรายการ",onClose:()=>l(!1),children:h("div",{class:"c-select-list",children:(t||[]).map(f=>{const g=f.value===e;return h("button",{type:"button",class:`c-select-item ${g?"on":""}`,onClick:()=>{r(f.value),l(!1)},children:[h("span",{class:"c-select-item-text num",children:f.label}),g&&h(Z,{name:"check",size:18,class:"rcv"})]},f.value)})})})]})}function TT({value:n,max:e,min:t="",today:r,onSelect:s,onClose:i}){const[a,c]=te(()=>(n||r).slice(0,7)),[l,d]=te(n||r),[f,g]=a.split("-").map(Number),m=Ur(a),E=new Date(Date.UTC(f,g-1,1)).getUTCDay(),R=[];for(let A=0;A<E;A++)R.push(null);for(let A=1;A<=m;A++)R.push(`${a}-${String(A).padStart(2,"0")}`);const D=["อา","จ","อ","พ","พฤ","ศ","ส"];return h(lm,{title:"ปฏิทิน",onClose:i,children:h("div",{class:"cal-box",children:[h("div",{class:"cal-hd",children:[h("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",disabled:!!t&&wt(a,-1).slice(0,7)<t.slice(0,7),onClick:()=>c(wt(a,-1)),children:h(Z,{name:"left",size:16})}),h("span",{class:"cal-month-title num",children:dl(a)}),h("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e&&wt(a,1).slice(0,7)>e.slice(0,7),onClick:()=>c(wt(a,1)),children:h(Z,{name:"right",size:16})})]}),h("div",{class:"cal-grid",role:"grid",children:[h("div",{class:"cal-dow-row",role:"row",children:D.map(A=>h("span",{class:"cal-dow",role:"columnheader",children:A},A))}),h("div",{class:"cal-days-grid",children:R.map((A,N)=>{if(!A)return h("span",{class:"cal-day empty"},`empty-${N}`);const F=Number(A.slice(8,10)),B=A===r,H=A===l,W=e&&A>e||t&&A<t;return h("button",{type:"button",class:`cal-day-btn num ${H?"on":""} ${B?"today":""}`,disabled:W,onClick:()=>d(A),children:F},A)})})]}),h("div",{class:"cal-actions",children:[h("button",{type:"button",class:"btn ghost",onClick:()=>{d(r),c(r.slice(0,7))},children:"วันนี้"}),h("button",{type:"button",class:"btn",onClick:()=>s(l),children:["ยืนยัน (",Number(l.slice(8,10))," ",Js[Number(l.slice(5,7))-1],")"]})]})]})})}function BI({id:n,label:e="วันที่",value:t,onChange:r,max:s,min:i="",today:a}){const[c,l]=te(!1),[d,f,g]=a.split("-").map(Number),m=new Date(Date.UTC(d,f-1,g-1)),E=`${m.getUTCFullYear()}-${String(m.getUTCMonth()+1).padStart(2,"0")}-${String(m.getUTCDate()).padStart(2,"0")}`,R=t===a,D=t===E,[A,N,F]=(t||a).split("-").map(Number),B=A+543,H=Js[N-1]||"",W=R?`วันนี้ · ${F} ${H} ${B}`:D?`เมื่อวาน · ${F} ${H} ${B}`:`${F} ${H} ${B}`;return h("div",{class:"field",children:[h("span",{class:"fl",id:`${n}-l`,children:e}),h("div",{class:"date-pick-wrap",children:[h("button",{type:"button",id:n,class:"date-trigger","aria-labelledby":`${n}-l`,onClick:()=>l(!0),children:[h("span",{class:"ico sm",children:h(Z,{name:"calendar",size:16})}),h("span",{class:"date-trigger-text num",children:W}),h("span",{class:"date-trigger-tag",children:"ปฏิทิน"})]}),h("div",{class:"date-quick-chips",children:[h("button",{type:"button",class:`date-quick-btn ${R?"on":""}`,onClick:()=>r(a),children:"วันนี้"}),h("button",{type:"button",class:`date-quick-btn ${D?"on":""}`,disabled:!!i&&E<i,onClick:()=>r(E),children:"เมื่อวาน"}),h("button",{type:"button",class:`date-quick-btn ${!R&&!D?"on":""}`,onClick:()=>l(!0),children:"แก้ไขวันที่"})]})]}),c&&h(TT,{value:t||a,max:s||a,min:i,today:a,onSelect:ee=>{r(ee),l(!1)},onClose:()=>l(!1)})]})}const ps=[];function lm({title:n,onClose:e,children:t,as:r="div",onSubmit:s,action:i,class:a=""}){const c=Wi(null);return de(()=>{const d=document.activeElement,f={};ps.push(f);const g=R=>{R.key==="Escape"&&ps[ps.length-1]===f&&e()};document.addEventListener("keydown",g);const m=document.body.style.overflow;return document.body.style.overflow="hidden",(c.current&&c.current.querySelector("input, select, textarea")||c.current).focus({preventScroll:!0}),()=>{const R=ps.indexOf(f);R>=0&&ps.splice(R,1),document.removeEventListener("keydown",g),document.body.style.overflow=m,d&&d.focus&&d.focus({preventScroll:!0})}},[]),h("div",{class:"scrim",onClick:d=>d.target===d.currentTarget&&e(),children:h(r,{class:`sheet ${a}`.trim(),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:c,onSubmit:s,children:[h("div",{class:"grab","aria-hidden":"true"}),h("div",{class:"sheet-hd",children:[h("h2",{children:n}),i,h("button",{type:"button",class:"icon-btn",onClick:e,"aria-label":"ปิด",children:h(Z,{name:"close",size:18})})]}),t]})})}function $I({label:n,onConfirm:e,verb:t="ลบ",busyText:r="กำลังลบ",keepText:s="ยกเลิก",icon:i="trash",danger:a=!0}){const[c,l]=te("idle");return de(()=>{if(c!=="confirm")return;const d=setTimeout(()=>l("idle"),5e3);return()=>clearTimeout(d)},[c]),c==="idle"?h("button",{type:"button",class:"icon-btn","aria-label":`${t} ${n}`,onClick:()=>l("confirm"),children:h(Z,{name:i,size:17})}):h("span",{class:"confirm",children:[h("button",{type:"button",class:`btn sm ${a?"danger":""}`,disabled:c==="busy",onClick:async()=>{l("busy");try{await e()}finally{l("idle")}},children:c==="busy"?r:t}),h("button",{type:"button",class:"btn sm ghost",disabled:c==="busy",onClick:()=>l("idle"),children:s})]})}function at({load:n,name:e,fallback:t=null,...r}){const[s,i]=te(null);if(de(()=>{let c=!0;return n().then(l=>{c&&l&&l[e]&&i({name:e,C:l[e]})}).catch(()=>{}),()=>{c=!1}},[e]),!s||s.name!==e)return t;const a=s.C;return h(a,{...r})}function zI({icon:n,title:e,summary:t,children:r,defaultOpen:s=!1}){const[i,a]=te(s);return h("section",{class:"card collapsible",children:[h("button",{type:"button",class:"coll-head","aria-expanded":i,onClick:()=>a(!i),children:[h("span",{class:"ico accent",children:h(Z,{name:n})}),h("span",{class:"grow",children:[h("b",{children:e}),h("small",{children:t})]}),h(Z,{name:"down",size:16,class:`coll-chev ${i?"up":""}`})]}),i&&h("div",{class:"coll-body",children:r})]})}function Fn({blocks:n=3}){return h("div",{class:"home-grid","aria-busy":"true","aria-label":"กำลังโหลดข้อมูล",children:[h("div",{class:"col",children:Array.from({length:Math.ceil(n/2)},(e,t)=>h("div",{class:"card sk",style:{height:t===0?"168px":"220px"}},t))}),h("div",{class:"col",children:Array.from({length:Math.floor(n/2)},(e,t)=>h("div",{class:"card sk",style:{height:"200px"}},t))})]})}function IT({onRetry:n}){return h("div",{class:"card state",role:"alert",children:[h("span",{class:"ico",children:h(Z,{name:"alert"})}),h("div",{children:[h("b",{children:"โหลดข้อมูลไม่สำเร็จ"}),h("p",{children:"ตรวจอินเทอร์เน็ตแล้วลองใหม่ ถ้ายังไม่ได้ อาจเป็นเพราะโควต้าฐานข้อมูลของวันนี้เต็ม"})]}),h("button",{type:"button",class:"btn sm",onClick:n,children:"ลองใหม่"})]})}function AT({tab:n,onTab:e,userName:t,userPicture:r,tools:s,onAdd:i,children:a}){const c=(Ii.find(l=>l.key===n)||Ii[0]).label;return h("div",{class:"app",children:[h("a",{class:"skip",href:"#main",children:"ข้ามไปเนื้อหา"}),h("aside",{class:"side",children:[h("div",{class:"brand",children:[h(du,{size:34}),"Dept Money"]}),h("nav",{"aria-label":"เมนูหลัก",children:Ii.map(l=>h("button",{type:"button",class:`snav ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[h(Z,{name:l.icon}),l.label]},l.key))}),h("button",{type:"button",class:"btn side-add",onClick:i,children:[h(Z,{name:"plus"}),"บันทึกรายการ"]}),h("div",{class:"side-me",children:[h(pl,{name:t,pictureUrl:r}),h("span",{children:t})]})]}),h("main",{class:"page",id:"main",children:[h("header",{class:"top",children:[h("div",{class:"brand mobile-only","aria-hidden":"true",children:[h(du,{size:30}),"Dept Money"]}),h("h1",{class:"page-title",children:c}),h("div",{class:"top-actions",children:[s,h(bT,{})]})]}),a]}),h("button",{type:"button",class:"fab",onClick:i,children:[h(Z,{name:"plus"}),"บันทึก"]}),h("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:h("div",{class:"tabbar-in",children:Ii.map(l=>h("button",{type:"button",class:`tab ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[h(Z,{name:l.icon}),l.label]},l.key))})})]})}const ST=Object.fromEntries(_o.map(n=>[n.key,n.label])),um={food:"food",bills:"bolt",goods:"bag",travel:"car",fun:"film",other:"dots"},RT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],kT=["อา","จ","อ","พ","พฤ","ศ","ส"];function hm({percent:n,of:e="รายรับ",sub:t="ใช้ไปแล้ว"}){const s=2*Math.PI*42,i=Math.max(0,Math.min(100,n));return h("div",{class:"ring",role:"img","aria-label":`ใช้ไปแล้ว ${n}% ของ${e}`,children:[h("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[h("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),h("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--pay)","stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${s*i/100} ${s}`,transform:"rotate(-90 50 50)"})]}),h("div",{class:"ring-t",children:[h("b",{class:"num",children:[n,"%"]}),h("span",{children:t})]})]})}function PT({m:n,bm:e,today:t,onBudget:r}){const s=e.status,i=s.leftSat<0;return h("section",{class:"card hero","aria-label":"สรุปเดือนเทียบงบ",children:[h("div",{class:"hero-l",children:[h("div",{class:"hero-top",children:[h(am,{month:n.month,today:t}),h("div",{children:[h("p",{class:"lbl",children:i?"ใช้เกินงบแล้ว":"งบเหลือเดือนนี้"}),h("p",{class:"big num",children:ie(Math.round(Math.abs(s.leftSat)/100))})]})]}),h("div",{class:"chips",children:[h("button",{type:"button",class:"chip chip-btn",onClick:r,"aria-label":`งบ ${ie(s.budgetSat/100)} แตะเพื่อแก้งบ`,children:["งบ ",h("b",{class:"num",children:ie(s.budgetSat/100)})]}),h("span",{class:"chip",children:[h(Z,{name:"up",size:14,class:"pay"}),"ใช้ไป ",h("b",{class:"num",children:ie(s.spentSat/100)})]}),n.incomeSat>0&&h("span",{class:"chip",children:[h(Z,{name:"down",size:14,class:"rcv"}),"รายรับ ",h("b",{class:"num",children:ie(n.incomeSat/100)})]})]}),h("p",{class:"lbl hero-split",children:e.perDaySat>0?h(K,{children:["เหลืออีก ",e.daysLeft," วัน ใช้ได้วันละ ",h("b",{class:"num",children:ie(e.perDaySat/100)})]}):h(K,{children:["ส่วนตัว ",h("span",{class:"num",children:ie(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",h("span",{class:"num",children:ie(n.groupShareSat/100)})]})})]}),h(hm,{percent:s.percent,of:"งบ",sub:"ของงบ"})]})}function CT({m:n,onAddIncome:e,today:t="",bm:r=null,onBudget:s=null}){if(r&&r.status.set)return h(PT,{m:n,bm:r,today:t,onBudget:s});const i=n.incomeSat>0,a=i&&n.netSat<0,c=i?a?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",l=i?Math.abs(n.netSat)/100:n.spentSat/100,d=!i||a?"pay":"rcv";return h("section",{class:"card hero","aria-label":"สรุปเดือน",children:[h("div",{class:"hero-l",children:[h("div",{class:"hero-top",children:[h(am,{month:n.month,today:t}),h("div",{children:[h("p",{class:"lbl",children:c}),h("p",{class:`big num ${d}`,children:ie(Math.round(l))})]})]}),h("div",{class:"chips",children:[h("span",{class:"chip",children:[h(Z,{name:"down",size:14,class:"rcv"}),"รายรับ ",h("b",{class:"num",children:ie(n.incomeSat/100)})]}),h("span",{class:"chip",children:[h(Z,{name:"up",size:14,class:"pay"}),"ใช้ไป ",h("b",{class:"num",children:ie(n.spentSat/100)})]})]}),h("p",{class:"lbl hero-split",children:["ส่วนตัว ",h("span",{class:"num",children:ie(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",h("span",{class:"num",children:ie(n.groupShareSat/100)})]}),s&&h("button",{type:"button",class:"set-budget",onClick:s,children:[h(Z,{name:"plus",size:14}),"ตั้งงบเดือนนี้"]})]}),i?h(hm,{percent:n.spentPercent}):h("button",{type:"button",class:"hint",onClick:e,children:[h(Z,{name:"plus",size:20}),"เพิ่มรายรับ",h("small",{children:"เพื่อดูว่าเหลือใช้เท่าไร"})]})]})}function DT({m:n,profiles:e=[],month:t="",nowMonth:r=""}){const s=Object.fromEntries((e||[]).map(l=>[l.name,l.pictureUrl])),i=n.owedToMe.map(l=>l.name),a=n.iOwe.map(l=>l.name),c=t&&r&&t!==r?` (${Jn(t)})`:"";return h("div",{class:"owe-grid",children:[h("a",{class:"card owe-card",href:"#clear","aria-label":`เพื่อนค้างฉัน ${ie(n.owedTotal)}${i.length?" ได้แก่ "+i.join(", "):""}`,children:[h("span",{class:"owe-k",children:["เพื่อนค้างฉัน",c,h(Z,{name:"right",size:14})]}),h("b",{class:`owe-v num ${n.owedTotal>0?"rcv":""}`,children:ie(n.owedTotal)}),i.length>0?h(sc,{names:i,pictures:s}):h("span",{class:"owe-ok",children:[h(Z,{name:"check",size:14}),"ไม่มีใครค้าง"]})]}),h("a",{class:"card owe-card",href:"#clear","aria-label":`ฉันค้างเพื่อน ${ie(n.iOweTotal)}${a.length?" ได้แก่ "+a.join(", "):""}`,children:[h("span",{class:"owe-k",children:["ฉันค้างเพื่อน",c,h(Z,{name:"right",size:14})]}),h("b",{class:`owe-v num ${n.iOweTotal>0?"pay":""}`,children:ie(n.iOweTotal)}),a.length>0?h(sc,{names:a,pictures:s}):h("span",{class:"owe-ok",children:[h(Z,{name:"check",size:14}),"ไม่ค้างใคร"]})]})]})}function MT({sched:n,me:e,onOpen:t,onCard:r,pictures:s={}}){const i=n&&n.upcoming||[];if(!i.length)return null;const[a,...c]=i,l=R=>ie(R/100,{decimals:R%100?2:0}),d=R=>R.coverFor?l(R.totalSat):l(R.mySat),f=R=>`${Number(R.date.slice(8,10))} ${Jn(R.date.slice(0,7))}`,g=R=>R.daysLeft===0?"วันนี้":`อีก ${R.daysLeft} วัน`,m=R=>R.kind==="card"&&r?()=>r(R.cardId):t,E=R=>R.kind==="card"?R.pending?"จ่ายบัตร (ยังไม่ตัดรอบ)":"ครบกำหนดจ่ายบัตร":"บิลถัดไป";return h("section",{class:"nb","aria-label":"บิลรายเดือนที่จะถึง",children:[h("button",{type:"button",class:"nb-main",onClick:m(a),"aria-label":`${E(a)} ${a.desc} ${d(a)} ${g(a)} แตะเพื่อเปิดปฏิทินบิล`,children:[a.daysLeft===0?h("span",{class:"nb-cal num","aria-hidden":"true",children:[h("span",{class:"band",children:"วันนี้"}),h("b",{children:Number(a.date.slice(8,10))}),h("small",{children:Jn(a.date.slice(0,7))})]}):h("span",{class:"nb-count","aria-hidden":"true",children:[h("small",{children:"อีก"}),h("b",{class:"num",children:a.daysLeft}),h("small",{children:"วัน"})]}),h("span",{class:"nb-t",children:[h("small",{children:[E(a)," · ",a.daysLeft===0?a.kind==="card"?"วันนี้":"ตัดวันนี้":f(a),a.every>1&&h("span",{class:"nb-pill",children:rT(a)})]}),h("b",{children:a.desc}),h("span",{class:"nb-amt num",children:[d(a),a.kind==="group"&&!a.coverFor&&h("em",{children:[" จาก ",l(a.totalSat)]})]}),a.kind==="group"?h("span",{class:"nb-flow",children:[h(wT,{payer:a.payer,people:a.names||[],pictures:s}),a.coverFor&&h("small",{children:"จ่ายแทน"})]}):h("small",{children:cT(a,e)})]}),h(Z,{name:a.kind==="card"?"card":"calendar",size:18,class:"nb-ic"})]}),c.length>0&&h("div",{class:"nb-up",children:c.slice(0,2).map(R=>h("button",{type:"button",class:"nb-mini",onClick:m(R),children:[h("span",{class:"lbl",children:[f(R)," · ",g(R)]}),h("b",{children:R.desc}),h("span",{class:"num",children:[d(R),R.kind==="group"&&!R.coverFor&&h("em",{children:[" จาก ",l(R.totalSat)]})]})]},R.id+R.date))})]})}const Kh={near:"ใกล้เต็ม",over:"เกินงบ"};function VT({c:n,label:e}){const t=Math.max(n.spentSat>0?3:0,Math.min(100,n.percent));return h("li",{class:"cat",children:[h("span",{class:"ico big-ico",children:h(Z,{name:um[n.key]||"dots"})}),h("div",{class:"cat-b",children:[h("div",{class:"cat-r",children:[h("span",{children:[e,Kh[n.level]&&h("span",{class:`lv-tag ${n.level}`,children:Kh[n.level]})]}),h("span",{class:"num",children:[h("b",{children:ie(n.spentSat/100)}),h("em",{children:["/ ",ie(n.budgetSat/100)]})]})]}),h("div",{class:`bar lv ${n.level}`,role:"img","aria-label":`ใช้ไป ${n.percent}% ของงบ${e}`,children:h("i",{style:{width:`${t}%`}})}),h("div",{class:"cat-s num",children:[h("span",{children:n.leftSat>=0?`เหลือ ${ie(n.leftSat/100)}`:`เกินงบ ${ie(-n.leftSat/100)}`}),h("span",{children:[n.percent,"%"]})]})]})]},n.key)}function NT({cats:n,bm:e=null,onBudget:t=null}){const r=e&&e.status.set?e.status.cats:[],s=new Set(r.map(f=>f.key)),i=n.filter(f=>!s.has(f.key));if(n.length===0&&r.length===0)return null;const a=n[0],c=f=>ST[f]||f,l=r.length?`ตั้งงบไว้ ${r.length} หมวด`:a?`ส่วนใหญ่ไปกับ${a.label} ${a.percent}%`:"",d=i[0];return h("section",{class:"card",children:[h("div",{class:"sec-row",children:[h(cm,{icon:"bag",title:"ใช้ไปกับอะไร",note:l}),e&&e.status.set&&t&&h("button",{type:"button",class:"link-btn",onClick:t,children:"แก้งบ"})]}),h("ul",{class:"cats",children:[r.map(f=>h(VT,{c:f,label:c(f.key)},f.key)),i.map(f=>h("li",{class:"cat",children:[h("span",{class:"ico big-ico",children:h(Z,{name:um[f.key]||"dots"})}),h("div",{class:"cat-b",children:[h("div",{class:"cat-r",children:[h("span",{children:f.label}),h("span",{class:"num",children:[h("b",{children:[f.percent,"%"]}),h("em",{children:ie(f.satang/100)})]})]}),h("div",{class:"bar",children:h("i",{style:{width:`${Math.max(3,Math.round(f.percent/d.percent*100))}%`}})})]})]},f.key))]})]})}const dm=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n)),OT=n=>ie(n/100,{decimals:2});function LT(n,e){if(!n||!e)return 0;const t=n/e;return t>.6?3:t>.25?2:1}function xT({month:n,days:e,onPick:t}){const[r,s]=n.split("-").map(Number),i=new Date(Date.UTC(r,s-1,1)).getUTCDay(),a=e.reduce((c,l)=>Math.max(c,l.satang),0);return h("div",{class:"sc-grid",role:"group","aria-label":`ปฏิทินรายจ่าย ${dl(n)}`,children:[kT.map(c=>h("span",{class:"sc-dow","aria-hidden":"true",children:c},c)),Array.from({length:i},(c,l)=>h("span",{},`e${l}`)),e.map(c=>h("button",{type:"button",class:`sc-day h${LT(c.satang,a)} ${c.today?"today":""} ${c.satang>0&&c.satang===a?"peak":""}`,disabled:c.isFuture,onClick:()=>t(c.day),"aria-label":`วันที่ ${c.day} ใช้ไป ${c.satang>0?ie(c.satang/100):"0 บาท"}`,children:[h("span",{class:"num",children:c.day}),c.satang>0?h("small",{class:"num",children:dm(c.satang/100)}):null]},c.day))]})}function FT({month:n,days:e,day:t,onDay:r}){const s=e.find(d=>d.day===t)||e[0];if(!s)return null;const[i,a]=n.split("-").map(Number),c=RT[new Date(Date.UTC(i,a-1,s.day)).getUTCDay()],l=e.filter(d=>!d.isFuture).length;return h("div",{class:"sc-day-view",children:[h("div",{class:"sc-day-hd",children:[h("span",{class:"dtile sm","aria-hidden":"true",children:[h("span",{class:"m",children:Jn(n)}),h("span",{class:"d num",children:s.day})]}),h("div",{class:"grow",children:[h("b",{children:[c," ",s.day," ",Jn(n)]}),h("span",{class:"lbl",children:[s.items.length," รายการ"]})]}),h("b",{class:"num pay",children:ie(s.satang/100)})]}),h("div",{class:"sc-day-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"วันก่อนหน้า",disabled:s.day<=1,onClick:()=>r(s.day-1),children:h(Z,{name:"left",size:16})}),h("span",{class:"lbl",children:"เลื่อนดูวันอื่น"}),h("button",{type:"button",class:"icon-btn","aria-label":"วันถัดไป",disabled:s.day>=l,onClick:()=>r(s.day+1),children:h(Z,{name:"right",size:16})})]}),s.items.length===0?h("p",{class:"empty",children:[h(Z,{name:"check",size:16,class:"rcv"}),"ไม่มีรายจ่ายในวันนี้"]}):h("ul",{class:"plain",children:s.items.map((d,f)=>h("li",{class:"row",children:[h(sg,{desc:d.desc,name:eg(d.icon),size:36,iconSize:18}),h("div",{class:"grow",children:[h("div",{class:"t",children:d.desc||"ไม่ระบุ"}),h("div",{class:"s",children:d.kind==="group"?"ส่วนของฉันในกลุ่ม":"ส่วนตัว"})]}),h("span",{class:"num pay",children:OT(d.satang)})]},f))})]})}function UT({year:n,series:e,since:t,nowMonth:r,onPick:s}){const i=Object.fromEntries((e||[]).map(l=>[l.month,l.spentSat])),a=Array.from({length:12},(l,d)=>{const f=`${n}-${String(d+1).padStart(2,"0")}`,g=f>=t&&f<=r;return{key:f,label:Js[d],inRange:g,sat:g&&i[f]||0}}),c=a.reduce((l,d)=>Math.max(l,d.sat),0);return h("div",{class:"sc-year",children:a.map(l=>h("button",{type:"button",class:`sc-mon ${l.key===r?"cur":""}`,disabled:!l.inRange,onClick:()=>s(l.key),"aria-label":`${sm(l.key)} ใช้ไป ${l.inRange?ie(l.sat/100):"ไม่มีข้อมูล"}`,children:[h("small",{children:l.label}),h("b",{class:"num",children:l.inRange?dm(l.sat/100):"-"}),h("i",{style:{width:`${l.inRange&&c>0?Math.max(4,Math.round(l.sat/c*100)):0}%`}})]},l.key))})}function jT({model:n,month:e,onMonth:t,since:r,nowMonth:s,series:i,onNeedYear:a=()=>{}}){const[c,l]=te("month"),[d,f]=te(1);de(()=>{c==="year"&&a()},[c]);const g=n.calendarDays||[],m=Number(e.slice(0,4)),E=g.reduce((b,v)=>v.satang>(b?b.satang:0)?v:b,null),R=b=>{const v=wt(e,b);v>=r&&v<=s&&t(v)},D=b=>{const v=e.slice(5,7);let w=`${m+b}-${v}`;w<r?w=r:w>s&&(w=s),t(w)},A=r<`${m}-01`,N=`${m+1}-01`<=s,F=(i||[]).filter(b=>b.month.startsWith(String(m))).reduce((b,v)=>b+v.spentSat,0),B=(i||[]).filter(b=>b.month.startsWith(String(m))&&b.month>=r&&b.month<=s).length;function H(b){f(b),l("day")}function W(b){t(b),l("month")}function ee(b){if(b==="day"&&c!=="day"){const v=g.find(w=>w.today);f(v?v.day:E?E.day:1)}l(b)}return h("section",{class:"card sc","aria-label":"ปฏิทินรายจ่าย",children:[h(cm,{icon:"calendar",title:"ใช้ไปเท่าไร",note:"รวมรายจ่ายส่วนตัวและส่วนของฉันในกลุ่ม"}),h("div",{class:"seg sc-seg",role:"group","aria-label":"ดูเป็น",children:[["day","วัน"],["month","เดือน"],["year","ปี"]].map(([b,v])=>h("button",{type:"button",class:c===b?"on":"","aria-pressed":c===b,onClick:()=>ee(b),children:v},b))}),c==="year"?h(K,{children:[h("div",{class:"sc-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"ปีก่อนหน้า",disabled:!A,onClick:()=>D(-1),children:h(Z,{name:"left",size:16})}),h("b",{class:"num",children:["ปี ",m+543]}),h("button",{type:"button",class:"icon-btn","aria-label":"ปีถัดไป",disabled:!N,onClick:()=>D(1),children:h(Z,{name:"right",size:16})})]}),i?h(K,{children:[h("div",{class:"sc-sum",children:[h("div",{children:[h("span",{class:"lbl",children:"ใช้ไปทั้งปี"}),h("b",{class:"num pay",children:ie(F/100)})]}),h("div",{children:[h("span",{class:"lbl",children:"เฉลี่ยต่อเดือน"}),h("b",{class:"num",children:ie(B>0?F/100/B:0)})]})]}),h(UT,{year:m,series:i,since:r,nowMonth:s,onPick:W})]}):h("p",{class:"empty","aria-busy":"true",children:"กำลังโหลดข้อมูลทั้งปี"})]}):h(K,{children:[h("div",{class:"sc-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",disabled:e<=r,onClick:()=>R(-1),children:h(Z,{name:"left",size:16})}),h("b",{class:"num",children:dl(e)}),h("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e>=s,onClick:()=>R(1),children:h(Z,{name:"right",size:16})})]}),c==="month"?h(K,{children:[h("div",{class:"sc-sum",children:[h("div",{children:[h("span",{class:"lbl",children:"ใช้ไปทั้งเดือน"}),h("b",{class:"num pay",children:ie(n.spentSat/100)})]}),h("div",{children:[h("span",{class:"lbl",children:"เฉลี่ยต่อวัน"}),h("b",{class:"num",children:ie(n.average)})]})]}),h(xT,{month:e,days:g,onPick:H}),E?h("p",{class:"lbl sc-foot",children:["ใช้มากสุดวันที่ ",E.day," (",ie(E.satang/100),") แตะวันเพื่อดูรายการ"]}):h("p",{class:"lbl sc-foot",children:"ยังไม่มีรายจ่ายในเดือนนี้"})]}):h(FT,{month:e,days:g,day:d,onDay:f})]})]})}function BT({model:n,series:e,month:t,onMonth:r,onAddIncome:s,profiles:i=[],today:a="",nowMonth:c="",since:l="",onNeedYear:d,bm:f=null,onBudget:g=null,bills:m=null,me:E="",onBills:R=()=>{},onCard:D=null}){const A=c||t;return h("div",{class:"home-grid",children:[h("div",{class:"col",children:[h(CT,{m:n,onAddIncome:s,today:a,bm:f,onBudget:g}),h(DT,{m:n,profiles:i,month:t,nowMonth:A}),t===A&&h(MT,{sched:m,me:E,onOpen:R,onCard:D,pictures:Object.fromEntries((i||[]).map(N=>[N.name,N.pictureUrl]))}),h(NT,{cats:n.categories,bm:f,onBudget:g})]}),h("div",{class:"col",children:h(jT,{model:n,month:t,onMonth:r,since:l||wt(A,-11),nowMonth:A,series:e,onNeedYear:d})})]})}const Qh=()=>V(()=>import("./add-5A5eUQgM.js"),__vite__mapDeps([0,1,2])),Xh=()=>V(()=>import("./ClearPage-qiXIBwtJ.js"),[]),Yh=()=>V(()=>import("./ListPage-CE5OJAA3.js"),__vite__mapDeps([3,1])),Jh=()=>V(()=>import("./MePage-Di-D8ul9.js"),__vite__mapDeps([4,5,6])),Zh=()=>V(()=>import("./onboard-mbmsaG1S.js"),[]),Ai=()=>V(()=>import("./plan-D6DBXm7D.js"),[]),$T=()=>V(()=>import("./billcal-DqgFwgT5.js"),[]),ed=()=>V(()=>import("./cards-CZSjDZQF.js"),[]),Et=Jp();tm(Et?em(Et.name):null);function ms(){const n=new URLSearchParams(location.search).get("liff.state")||"";return(location.hash||(n.includes("#")?n.slice(n.indexOf("#")):"")).slice(1)}function gs(n){const e=/^(edit|split|choose)=([A-Za-z0-9_-]{1,100})$/.exec(String(n||""));return e?{kind:e[1],id:e[2]}:null}function yr(n){const e=/^card=([A-Za-z0-9_-]{1,60})$/.exec(String(n||""));return e?e[1]:""}const td=Gp().slice(0,7),nd=12,zT=["home","list","clear","me"],Si=n=>n==="bills"||n==="wallet"?"list":zT.includes(n)?n:"home";function qT(){const[n,e]=te(Et?{state:"ok",user:Et}:{state:"loading"}),[t,r]=te(()=>{const I=ms();return gs(I)?"list":yr(I)?"me":Si(I)}),[s,i]=te(()=>gs(ms())),[a,c]=te(null),[l,d]=te(null),f=Qe(()=>Gp(),[]),g=f.slice(0,7),m=Qe(()=>wt(g,-11),[g]),[E,R]=te(g),[D,A]=te(()=>Et?_b():null),[N,F]=te(()=>{const I=Et?mb(Et.name,td):null;return I?{[td]:I}:{}}),[B,H]=te(!1),[W,ee]=te(null),[b,v]=te(""),[w,T]=te(null),[S,k]=te(()=>Et&&ms()==="add"?"menu":null),[_,G]=te(""),[We,yt]=te(0),[Ot,it]=te(!1),[en,Zs]=te(!1),[Gr,bt]=te(!!Et),[ge,Kr]=te(null),[vt,Xo]=te(null),[rr,ei]=te(!1),[De,tn]=te(null),[Fe,dt]=te(()=>{const I=yr(ms());return I?{kind:"detail",id:I}:null}),[Lt,Pn]=te(()=>Lr()),[sr,ti]=te(()=>Zp()),[St,nn]=te({}),[Oe,tt]=te(null),ir=I=>{if(I.needLogin){it(!0);return}Et&&!I.needLink&&I.memberId!==Et.memberId&&(ec(),F({}),A(null),ee(null)),I.needLink?e({state:"link",profile:I.profile,candidates:I.candidates,suggest:I.suggest||""}):!I.isAdmin&&(!I.realName||!im(I.promptpay))?e({state:"onboard",user:I}):e(x=>x.state==="ok"&&JSON.stringify(x.user)===JSON.stringify(I)?x:{state:"ok",user:I}),I.needLink||fb(I)},Qr=(I,x)=>F(z=>({...z,[I]:{...z[I]||{},...x}})),be=n.state==="ok"?em(n.user.name,Lt,sr):null;tm(be);const rn=Lt!==null,Xr=Wi(be);de(()=>{Xr.current!==be&&(Xr.current=be,F(I=>Object.fromEntries(Object.entries(I).filter(([,x])=>x.wallet).map(([x,z])=>[x,{wallet:z.wallet}]))),nn({}))},[be]),de(()=>{n.state==="ok"&&wa([g],{nowMonth:g}).then(I=>{Pn({hide:I.hide,super:I.super}),nn(x=>({...x,...I.plans}))}).catch(I=>{I.expired||console.warn("clear-plan:",I.message),Lr()||Pn({hide:!1,super:!1})})},[n.state,We]),de(()=>{ub().then(I=>{if(!I)return;ir(I);const x=ms();if(x==="add"){k("menu"),r("home");try{history.replaceState(null,"",location.pathname+"#home")}catch{}}else gs(x)?(i(gs(x)),r("list")):yr(x)?(dt({kind:"detail",id:yr(x)}),r("me")):x&&["home","list","bills","wallet","clear","me"].includes(x)&&r(Si(x))}).catch(I=>{Et?console.warn("signIn:",I.message):e({state:"error",message:I.message})})},[]),de(()=>{tb(()=>it(!0))},[]),de(()=>{const I=()=>{const x=location.hash.slice(1),z=gs(x);z?(i(z),r("list")):yr(x)?(dt({kind:"detail",id:yr(x)}),r("me")):r(Si(x))};return addEventListener("hashchange",I),()=>removeEventListener("hashchange",I)},[]),de(()=>{n.state==="ok"&&yb().then(A).catch(()=>H(!0))},[n.state,We]),de(()=>{n.state!=="ok"||!["home","list","clear","me"].includes(t)||W||Nh().then(ee).catch(()=>H(!0))},[n.state,t,W]),de(()=>{n.state==="ok"&&Ib().then(Kr).catch(I=>{I.expired||console.warn("loadPlan:",I.message),Kr(x=>x||{budget:{total:0,cats:{}},months:{},goals:[]})})},[n.state,We]),de(()=>{n.state!=="ok"||t!=="home"||zb().then(Xo).catch(I=>console.warn("loadBillSchedule:",I&&I.message))},[n.state,t,We]);const Ae=W&&n.state==="ok"?W.find(I=>I.id===n.user.memberId||(I.ids||[]).includes(n.user.memberId))||W.find(I=>I.name===n.user.name):null,Le=!!(Ae&&Ae.cardAlerts),or=!!(Ae&&Ae.receiptScan);de(()=>{if(!(n.state!=="ok"||!W||!["home","me","list"].includes(t))){if(!Le){tn({enabled:!1,cards:[]});return}Vh().then(tn).catch(I=>{I.expired||console.warn("loadCards:",I&&I.message)})}},[n.state,t,We,Le,!!W]),de(()=>{if(!(n.state!=="ok"||!rn))return Eb(g,I=>{I.error?H(!0):Qr(g,I)})},[n.state,g,rn,be]);const xt=Qe(()=>[...new Set([...en?Hh(g,nd):[],E])].filter(I=>I!==g),[g,E,en]);de(()=>{if(n.state!=="ok")return;const I=[g,...xt.filter(x=>!(N[x]&&N[x].wallet))];bb(I,g).then(x=>Object.entries(x).forEach(([z,Nn])=>Qr(z,{wallet:Nn}))).catch(x=>{x.expired||G(x.message)})},[n.state,g,We,xt.filter(I=>!(N[I]&&N[I].wallet)).join("|")]),de(()=>{n.state!=="ok"||!rn||xt.forEach(I=>{N[I]&&N[I].transactions||vb(I).then(x=>Qr(I,{transactions:x.transactions,settlements:x.settlements})).catch(()=>H(!0))})},[n.state,rn,be,xt,xt.filter(I=>!(N[I]&&N[I].transactions)).join("|")]);const ot=N[g];de(()=>{if(n.state!=="ok"||!be)return;const I=[...new Set([g,E])].filter(x=>!St[x]);I.length&&wa(I,{nowMonth:g}).then(x=>nn(z=>({...z,...x.plans}))).catch(x=>{x.expired||G(x.message)})},[n.state,be,E,g,!!St[E],!!St[g]]);const Cn=ot&&ot.transactions&&ot.settlements?ot.transactions.map(I=>I.id+":"+I.amount).sort().join(",")+"|"+ot.settlements.map(I=>I.id+":"+I.status).sort().join(","):"",Rt=Wi("");de(()=>{if(!be||!Cn)return;if(!Rt.current){Rt.current=Cn;return}if(Rt.current===Cn)return;Rt.current=Cn;const I=setTimeout(()=>{wa([g],{nowMonth:g,force:!0}).then(x=>nn(z=>({...z,...x.plans}))).catch(()=>{})},1200);return()=>clearTimeout(I)},[be,Cn]);const ar=I=>be?St[I]||[]:null,Yr=!!(Lt&&Lt.super),Jr=Yr?"":g+"-01";de(()=>{n.state==="ok"&&ot&&ot.transactions&&ot.settlements&&ot.wallet&&gb(n.user.name,g,ot)},[ot]),de(()=>{if(n.state!=="ok")return;const x=(window.requestIdleCallback||(z=>setTimeout(z,1500)))(()=>{[Yh,Xh,Jh,Qh].forEach(z=>z().catch(()=>{}))});return()=>{window.cancelIdleCallback?window.cancelIdleCallback(x):clearTimeout(x)}},[n.state]),de(()=>{if(_){const I=setTimeout(()=>G(""),3200);return()=>clearTimeout(I)}},[_]);const Zr=I=>N[I]&&N[I].transactions&&N[I].settlements&&N[I].wallet,Dn=n.state==="ok"&&D&&Zr(g)&&Zr(E);de(()=>{Dn&&bt(!0)},[Dn]),de(()=>{if(Gr)return;const I=setTimeout(()=>bt(!0),12e3);return()=>clearTimeout(I)},[Gr]);const cr=Dn&&xt.every(Zr),ne=Qe(()=>{if(!Dn)return null;const I=Object.values(N);return{transactions:I.flatMap(x=>x.transactions||[]),settlements:I.flatMap(x=>x.settlements||[]),wallet:I.flatMap(x=>x.wallet||[])}},[Dn,N]),es=Qe(()=>ne&&D?mT({me:n.user.name,members:D,transactions:ne.transactions}):[],[ne,n,D]),ft=Qe(()=>ne?qh({name:n.user.name,month:E,today:f,members:D,transactions:ne.transactions,settlements:ne.settlements,walletItems:ne.wallet,planLines:ar(E)}):null,[ne,n,D,E,f,be,St]),ts=Qe(()=>ne&&en&&cr?uT({name:n.user.name,months:Hh(g,nd),transactions:ne.transactions,settlements:ne.settlements,walletItems:ne.wallet}):null,[ne,en,cr,n,g]),lr=Qe(()=>ne&&(!be||St[E])?hT({name:n.user.name,month:E,members:D,transactions:ne.transactions,settlements:ne.settlements,planLines:ar(E)}):null,[ne,n,D,E,be,St]),pt=Qe(()=>ne?dT({name:n.user.name,month:E,walletItems:ne.wallet,transactions:ne.transactions,settlements:ne.settlements}):null,[ne,n,E]),ur=Qe(()=>ne?E===g?ft:qh({name:n.user.name,month:g,today:f,members:D,transactions:ne.transactions,settlements:ne.settlements,walletItems:ne.wallet,planLines:ar(g)}):null,[ne,ft,E,g,be,St]),hr=Qe(()=>ge&&ft?Wh(ge,ft,f):null,[ge,ft,f]),dr=Qe(()=>ge&&ur?Wh(ge,ur,f):null,[ge,ur,f]),Mn=Qe(()=>vt&&n.state==="ok"?iT({me:n.user.name,month:g,today:f,group:vt.group,personal:vt.personal,cards:De&&De.enabled?De.cards:[]}):null,[vt,n,g,f,De]),fr=(I,x)=>I.then(()=>Vh({force:!0})).then(z=>(tn(z),x&&G(x),z)),Me=Fe&&Fe.kind==="detail"&&De?De.cards.find(I=>I.id===Fe.id):null;de(()=>{if(Fe&&Fe.kind==="detail"&&De&&!Me&&(dt(null),G(De.enabled?"ไม่พบบัตรนี้ (อาจถูกลบไปแล้ว)":"ผู้ดูแลยังไม่ได้เปิดเตือนบัตรเครดิตให้คุณ")),Fe&&Fe.kind==="detail"&&De)try{history.replaceState(null,"",location.pathname+"#me")}catch{}},[Fe,De]);const ns=De&&De.enabled?De.cards:[],sn=Qe(()=>Object.fromEntries((W||[]).map(I=>[I.name,I.pictureUrl])),[W]),Tt=(I,x)=>I.then(z=>(Kr(z),x&&G(x),z)),ni=Qe(()=>ne?fT({name:n.user.name,month:E,transactions:ne.transactions,search:b}):null,[ne,n,E,b]),on=(I=E)=>{hl(I),nn(x=>{if(!x[I])return x;const z={...x};return delete z[I],z}),I===g?yt(x=>x+1):F(x=>{const z={...x};return delete z[I],z})},kt=I=>{T({amount:I.amount,desc:I.desc,date:I.date,icon:I.icon,convertId:I.id,month:String(I.date).slice(0,7)}),k("bill")};de(()=>{if(!s||!ne)return;let I=!0;const x=ne.wallet.find(z=>z.id===s.id);return(x?Promise.resolve(x):Bb(s.id)).then(z=>{if(I){if(!z){G("ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");return}s.kind==="split"&&z.type!=="income"?kt(z):s.kind==="choose"&&z.type!=="income"?d(z):(r("list"),c({...z}))}}).catch(z=>{I&&!z.expired&&G(z.message)}).finally(()=>{if(I){i(null);try{history.replaceState(null,"",location.pathname+"#list")}catch{}}}),()=>{I=!1}},[s,!!ne]);const ri=()=>{ec(),F({}),nn({}),A(null),H(!1),yt(I=>I+1)},Yo=I=>{pb(I),ti(I)},pr=I=>Pn(x=>({...x||{},hide:I}));if(n.state==="loading")return h("div",{class:"center",children:h(ds,{label:"กำลังเข้าสู่ระบบ"})});if(n.state==="error")return h("div",{class:"center",children:[h(ds,{}),h("p",{role:"alert",children:n.message}),h("button",{type:"button",class:"btn",onClick:()=>location.reload(),children:"ลองใหม่"})]});if(n.state==="link")return h(at,{load:Zh,name:"LinkPage",profile:n.profile,candidates:n.candidates,suggest:n.suggest,onDone:ir,fallback:h("div",{class:"center",children:h(ds,{})})});if(n.state==="onboard")return h(at,{load:Zh,name:"OnboardPage",user:n.user,onDone:ir,fallback:h("div",{class:"center",children:h(ds,{})})});if(!Gr&&!B)return h("div",{class:"center",children:h(ds,{label:"กำลังโหลดข้อมูล"})});const si=I=>{location.hash=I,r(I),window.scrollTo(0,0)},Pt=Si(t),Vn=Pt!=="me";let nt;return Vn&&B?nt=h(IT,{onRetry:ri}):Pt==="home"?nt=ft?h(BT,{model:ft,series:ts,month:E,onMonth:R,onAddIncome:()=>k("income"),profiles:W||[],today:f,nowMonth:g,since:m,onNeedYear:()=>Zs(!0),bm:hr,onBudget:ge?()=>tt({kind:"budget"}):null,bills:Mn,me:n.user.name,onBills:()=>ei(!0),onCard:I=>dt({kind:"detail",id:I})}):h(Fn,{blocks:5}):Pt==="list"?nt=ni&&pt?h(at,{load:Yh,name:"ListPage",fallback:h(Fn,{blocks:3}),pictures:Object.fromEntries((W||[]).map(I=>[I.name,I.pictureUrl])),bills:ni,wallet:pt,month:E,today:f,search:b,onSearch:v,me:n.user.name,isAdmin:n.user.isAdmin,isSuper:Yr,openFrom:g+"-01",privateMode:!!be,cards:ns,version:We,openEdit:a,onSplit:kt,members:D||[],onChanged:()=>on(),onError:G,onInfo:G}):h(Fn,{blocks:3}):Pt==="clear"?nt=lr&&W?h(at,{load:Xh,name:"ClearPage",fallback:h(Fn,{blocks:2}),model:lr,profiles:W,month:E,back:pt?{receivedSat:pt.receivedBackSat,paidSat:pt.paidBackSat}:null,onChanged:()=>on(),isAdmin:n.user.isAdmin,privateMode:!!be,adminName:n.user.name,onError:G,onInfo:G}):h(Fn,{blocks:2}):nt=W?h(at,{load:Jh,name:"MePage",fallback:h(Fn,{blocks:2}),auth:n,profiles:W,onSaved:()=>ee(null),onRefresh:ri,onMembers:()=>{Nh().then(ee).catch(()=>ee(null)),yt(I=>I+1)},onToast:G,transactions:ne?ne.transactions:[],onDataChanged:I=>on(I),bm:dr,onBudget:()=>tt({kind:"budget"}),onGoalAdd:()=>tt({kind:"goal"}),onGoalMove:(I,x)=>tt({kind:"move",goal:I,dir:x}),onGoalEdit:I=>tt({kind:"goal",goal:I}),onGoalShared:I=>tt({kind:"shared",goal:I}),cards:De,privacy:Lt,seeAll:sr,onSeeAll:Yo,onPrivacy:pr,onCardAdd:()=>dt({kind:"add"}),onCardOpen:I=>dt({kind:"detail",id:I.id})}):h(Fn,{blocks:2}),h(K,{children:[Ot&&h("div",{class:"login-banner",role:"alert",children:[h("span",{children:["เซสชัน LINE หมดอายุ ยังดูข้อมูลที่จำไว้ได้ แต่ข้อมูลกระเป๋าและการบันทึกต้องเข้าสู่ระบบใหม่",Mh()&&h("small",{class:"diag",children:Mh()})]}),h("button",{type:"button",class:"btn sm",onClick:nb,children:"เข้าสู่ระบบใหม่"})]}),h(AT,{tab:Pt,onTab:si,userName:n.user.name,userPicture:n.user.pictureUrl,onAdd:()=>k("menu"),tools:Vn&&h(yT,{month:E,onChange:R,min:m,max:g}),children:h(_T,{page:Pt,children:nt})}),S&&h(at,{load:Qh,name:"AddSheet",initial:S==="income"?"income":S==="bill"?"bill":null,prefill:w,convertWallet:Oh,today:f,members:D||[],me:n.user.name,suggested:es,save:jb,saveBill:Lh,openFrom:Jr,cards:ns,canScan:or,readReceipt:Ub,onClose:()=>{k(null),T(null)},onSaved:(I,x=[])=>{G(I),x.forEach(z=>on(z)),yt(z=>z+1)}}),l&&h(at,{load:()=>V(()=>import("./editbill-C7VZ2NqR.js"),__vite__mapDeps([7,1])),name:"ChooseSheet",item:l,members:D||[],me:n.user.name,suggested:es,today:f,saveBill:Lh,removeWallet:Oh,onClose:()=>d(null),onConfirmed:()=>on(String(l.date).slice(0,7)),onDone:(I,x=[])=>{G(I),x.forEach(z=>on(z)),yt(z=>z+1)},onMoreSplit:I=>{d(null),kt(I)}}),Fe&&(Fe.kind==="add"||Fe.kind==="edit")&&h(at,{load:ed,name:"CardEditSheet",card:Fe.card||null,onClose:()=>dt(null),onSave:I=>fr(Ob(I),I.id?"แก้บัตรแล้ว":"เพิ่มบัตรแล้ว"),onDelete:I=>fr(Lb(I),"ลบบัตรแล้ว")}),Me&&h(at,{load:ed,name:"CardDetailSheet",card:Me,onClose:()=>dt(null),onEdit:I=>dt({kind:"edit",card:I}),onPaid:(I,x,z)=>fr(xb(I,x,z),x?"จ่ายแล้ว ไม่เตือนรอบนี้อีก":"ยกเลิก จ่ายแล้ว").catch(Nn=>G(Nn.message))}),rr&&vt&&h(at,{load:$T,name:"BillCalendarSheet",data:{...vt,cards:De&&De.enabled?De.cards:[]},pictures:Object.fromEntries((W||[]).map(I=>[I.name,I.pictureUrl])),me:n.user.name,today:f,onClose:()=>ei(!1)}),Oe&&Oe.kind==="budget"&&h(at,{load:Ai,name:"BudgetSheet",plan:ge,nowMonth:g,suggestSat:dr?dr.suggestSat:0,onClose:()=>tt(null),onSave:I=>Tt(Ab(I),I.clear?"กลับไปใช้งบปกติแล้ว":"บันทึกงบแล้ว")}),Oe&&Oe.kind==="move"&&h(at,{load:Ai,name:"GoalMoveSheet",goal:Oe.goal,dir:Oe.dir,month:g,onClose:()=>tt(null),onMove:(I,x,z)=>Tt((Oe.goal.shared?Cb:Rb)(I,x,z),z==="out"?"ถอนออกจากเป้าแล้ว":"เก็บเข้าเป้าแล้ว")}),Oe&&Oe.kind==="goal"&&h(at,{load:Ai,name:"GoalEditSheet",goal:Oe.goal||null,nowMonth:g,members:D||[],me:n.user.name,pictures:sn,onClose:()=>tt(null),onSave:I=>Tt(I.shared?Pb(I):Sb(I),I.id?"แก้เป้าแล้ว":I.shared?"สร้างเป้าแล้ว เพื่อนจะเห็นในแท็บ ฉัน":"เพิ่มเป้าแล้ว"),onDelete:I=>Tt(Oe.goal&&Oe.goal.shared?Db(I):kb(I),"ลบเป้าแล้ว")}),Oe&&Oe.kind==="shared"&&h(at,{load:Ai,name:"SharedGoalSheet",goal:Oe.goal,month:g,me:n.user.name,pictures:sn,onClose:()=>tt(null),onEdit:I=>tt({kind:"goal",goal:I}),onLeave:I=>Tt(Mb(I),"ออกจากเป้าแล้ว")}),_&&h("div",{class:"toast",role:"status",children:_})]})}Bm(h(qT,{}),document.getElementById("app"));export{aI as $,pl as A,NI as B,Jn as C,BI as D,eg as E,Wb as F,ET as G,Oh as H,Z as I,TI as J,iI as K,at as L,bI as M,$b as N,Tb as O,wT as P,uI as Q,eI as R,lm as S,Qe as T,zI as U,DI as V,vI as W,SI as X,yI as Y,II as Z,V as _,sg as a,cI as a0,oI as a1,du as a2,KT as a3,wt as a4,yd as a5,RI as a6,kI as a7,nc as a8,Jb as a9,fI as aA,nI as aB,tI as aC,QT as aD,XT as aE,sc as aa,iT as ab,dl as ac,cT as ad,ba as ae,oT as af,LI as ag,YT as ah,qb as ai,hI as aj,FI as ak,lI as al,ZT as am,xI as an,_o as ao,PI as ap,CI as aq,nT as ar,rc as as,se as at,Wi as au,jI as av,wI as aw,dI as ax,rI as ay,pI as az,Km as b,ie as c,te as d,fl as e,K as f,UI as g,OI as h,am as i,Gp as j,cm as k,$I as l,sm as m,_I as n,Hh as o,gI as p,mI as q,EI as r,VI as s,MI as t,h as u,im as v,AI as w,de as x,sI as y,JT as z};
