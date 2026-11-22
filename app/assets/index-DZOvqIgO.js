const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-2IeOfZD5.js","assets/freq-D8q3eED7.js","assets/ListPage-oJiH2ztM.js","assets/MePage-D37bZdnE.js","assets/plan-CTby3Vvv.js","assets/cards-DRhZwEKd.js","assets/editbill-DMZHgOWp.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const cm="modulepreload",lm=function(n){return"/app/"+n},Rl={},St=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=lm(l),l in Rl)return;Rl[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":cm,h||(_.as="script"),_.crossOrigin="",_.href=l,c&&_.setAttribute("nonce",c),document.head.appendChild(_),h)return new Promise((m,T)=>{_.addEventListener("load",m),_.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Ki,de,Dh,tn,kl,Mh,Vh,xo,ai,ts,Oh,Ma,Zo,ea,Ei={},Ti=[],um=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Qi=Array.isArray;function Mt(n,e){for(var t in e)n[t]=e[t];return n}function Va(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function hm(n,e,t){var r,s,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?Ki.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return ci(n,a,r,s,null)}function ci(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Dh,__i:-1,__u:0};return s==null&&de.vnode!=null&&de.vnode(i),i}function Y(n){return n.children}function li(n,e){this.props=n,this.context=e}function Mn(n,e){if(e==null)return n.__?Mn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Mn(n):null}function dm(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],s=[],i=Mt({},e);i.__v=e.__v+1,de.vnode&&de.vnode(i),Oa(n.__P,i,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Mn(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,$h(r,i,s),e.__e=e.__=null,i.__e!=t&&Lh(i)}}function Lh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Lh(n)}function Pl(n){(!n.__d&&(n.__d=!0)&&tn.push(n)&&!Ii.__r++||kl!=de.debounceRendering)&&((kl=de.debounceRendering)||Mh)(Ii)}function Ii(){try{for(var n,e=1;tn.length;)tn.length>e&&tn.sort(Vh),n=tn.shift(),e=tn.length,dm(n)}finally{tn.length=Ii.__r=0}}function xh(n,e,t,r,s,i,a,c,l,h,f){var _,m,T,R,N,S,M=r&&r.__k||Ti,O=e.length;for(l=fm(t,e,M,l,O),_=0;_<O;_++)(T=t.__k[_])!=null&&(m=T.__i!=-1&&M[T.__i]||Ei,T.__i=_,S=Oa(n,T,m,s,i,a,c,l,h,f),R=T.__e,T.ref&&m.ref!=T.ref&&(m.ref&&La(m.ref,null,T),f.push(T.ref,T.__c||R,T)),N==null&&R!=null&&(N=R),4&T.__u?(l=Fh(T,l,n),m.__e&&(m.__e=null)):typeof T.type=="function"&&S!==void 0?l=S:R&&(l=R.nextSibling),T.__u&=-7);return t.__e=N,l}function fm(n,e,t,r,s){var i,a,c,l,h,f=t.length,_=f,m=0;for(n.__k=new Array(s),i=0;i<s;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[i]=ci(null,a,null,null,null):Qi(a)?a=n.__k[i]=ci(Y,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[i]=ci(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[i]=a,l=i+m,a.__=n,a.__b=n.__b+1,c=null,(h=a.__i=pm(a,t,l,_))!=-1&&(_--,(c=t[h])&&(c.__u|=2)),c==null||c.__v==null?(h==-1&&(s>f?m--:s<f&&m++),typeof a.type!="function"&&(a.__u|=4)):h!=l&&(h==l-1?m--:h==l+1?m++:(h>l?m--:m++,a.__u|=4))):n.__k[i]=null;if(_)for(i=0;i<f;i++)(c=t[i])!=null&&!(2&c.__u)&&(c.__e==r&&(r=Mn(c)),jh(c,c));return r}function Fh(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=Fh(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Mn(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function pm(n,e,t,r){var s,i,a,c=n.key,l=n.type,h=e[t],f=h!=null&&(2&h.__u)==0;if(h===null&&c==null||f&&c==h.key&&l==h.type)return t;if(r>(f?1:0)){for(s=t-1,i=t+1;s>=0||i<e.length;)if((h=e[a=s>=0?s--:i++])!=null&&!(2&h.__u)&&c==h.key&&l==h.type)return a}return-1}function Cl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||um.test(e)?t:t+"px"}function Js(n,e,t,r,s){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Cl(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Cl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Oh,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t[ts]=r[ts]:(t[ts]=Ma,n.addEventListener(e,i?ea:Zo,i)):n.removeEventListener(e,i?ea:Zo,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Nl(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[ai]==null)e[ai]=Ma++;else if(e[ai]<t[ts])return;return t(de.event?de.event(e):e)}}}function Oa(n,e,t,r,s,i,a,c,l,h){var f,_,m,T,R,N,S,M,O,$,H,X,Z,I,y,E,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[c=e.__e=t.__e]),(f=de.__b)&&f(e);e:if(typeof b=="function"){_=a.length;try{if(O=e.props,$=b.prototype&&b.prototype.render,H=(f=b.contextType)&&r[f.__c],X=f?H?H.props.value:f.__:r,t.__c?M=(m=e.__c=t.__c).__=m.__E:($?e.__c=m=new b(O,X):(e.__c=m=new li(O,X),m.constructor=b,m.render=gm),H&&H.sub(m),m.state||(m.state={}),m.__n=r,T=m.__d=!0,m.__h=[],m._sb=[]),$&&m.__s==null&&(m.__s=m.state),$&&b.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=Mt({},m.__s)),Mt(m.__s,b.getDerivedStateFromProps(O,m.__s))),R=m.props,N=m.state,m.__v=e,T)$&&b.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),$&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if($&&b.getDerivedStateFromProps==null&&O!==R&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(O,X),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(O,m.__s,X)===!1){e.__v!=t.__v&&(m.props=O,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),Ti.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m),c=Mn(t);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(O,m.__s,X),$&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(R,N,S)})}if(m.context=X,m.props=O,m.__P=n,m.__e=!1,Z=de.__r,I=0,$)m.state=m.__s,m.__d=!1,Z&&Z(e),f=m.render(m.props,m.state,m.context),Ti.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,Z&&Z(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++I<25);m.state=m.__s,m.getChildContext!=null&&(r=Mt(Mt({},r),m.getChildContext())),$&&!T&&m.getSnapshotBeforeUpdate!=null&&(S=m.getSnapshotBeforeUpdate(R,N)),y=f!=null&&f.type===Y&&f.key==null?Bh(f.props.children):f,c=xh(n,Qi(y)?y:[y],e,t,r,s,i,a,c,l,h),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),M&&(m.__E=m.__=null)}catch(A){if(a.length=_,e.__v=null,l||i!=null){if(A.then){for(e.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i!=null&&(i[i.indexOf(c)]=null),e.__e=c}else if(i!=null)for(E=i.length;E--;)Va(i[E])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),A.then||Uh(e),de.__e(A,e,t)}}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=mm(t.__e,e,t,r,s,i,a,l,h);return(f=de.diffed)&&f(e),128&e.__u?void 0:c}function Uh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Uh))}function $h(n,e,t){for(var r=0;r<t.length;r++)La(t[r],t[++r],t[++r]);de.__c&&de.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){de.__e(i,s.__v)}})}function Bh(n){return typeof n!="object"||n==null||n.__b>0?n:Qi(n)?n.map(Bh):n.constructor!==void 0?null:Mt({},n)}function mm(n,e,t,r,s,i,a,c,l){var h,f,_,m,T,R,N,S=t.props||Ei,M=e.props,O=e.type;if(O=="svg"?s="http://www.w3.org/2000/svg":O=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(h=0;h<i.length;h++)if((T=i[h])&&"setAttribute"in T==!!O&&(O?T.localName==O:T.nodeType==3)){n=T,i[h]=null;break}}if(n==null){if(O==null)return document.createTextNode(M);n=document.createElementNS(s,O,M.is&&M),c&&(de.__m&&de.__m(e,i),c=!1),i=null}if(O==null)S===M||c&&n.data==M||(n.data=M);else{if(i=O=="textarea"&&M.defaultValue!=null?null:i&&Ki.call(n.childNodes),!c&&i!=null)for(S={},h=0;h<n.attributes.length;h++)S[(T=n.attributes[h]).name]=T.value;for(h in S)T=S[h],h=="dangerouslySetInnerHTML"?_=T:h=="children"||h in M||h=="value"&&"defaultValue"in M||h=="checked"&&"defaultChecked"in M||Js(n,h,null,T,s);for(h in M)T=M[h],h=="children"?m=T:h=="dangerouslySetInnerHTML"?f=T:h=="value"?R=T:h=="checked"?N=T:c&&typeof T!="function"||S[h]===T||Js(n,h,T,S[h],s);if(f)c||_&&(f.__html==_.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(_&&(n.innerHTML=""),xh(e.type=="template"?n.content:n,Qi(m)?m:[m],e,t,r,O=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:t.__k&&Mn(t,0),c,l),i!=null)for(h=i.length;h--;)Va(i[h]);c&&O!="textarea"||(h="value",O=="progress"&&R==null?n.removeAttribute("value"):R!=null&&(R!==n[h]||O=="progress"&&!R||O=="option"&&R!=S[h])&&Js(n,h,R,S[h],s),h="checked",N!=null&&N!=n[h]&&Js(n,h,N,S[h],s))}return n}function La(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){de.__e(s,t)}}function jh(n,e,t){var r,s;if(de.unmount&&de.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||La(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){de.__e(i,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&jh(r[s],e,t||typeof n.type!="function");t||Va(n.__e),n.__c=n.__=n.__e=void 0}function gm(n,e,t){return this.constructor(n,t)}function _m(n,e,t){var r,s,i,a;e==document&&(e=document.documentElement),de.__&&de.__(n,e),s=(r=!1)?null:e.__k,i=[],a=[],Oa(e,n=e.__k=hm(Y,null,[n]),s||Ei,Ei,e.namespaceURI,s?null:e.firstChild?Ki.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,a),$h(i,n,a),n.props.children=null}Ki=Ti.slice,de={__e:function(n,e,t,r){for(var s,i,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},Dh=0,li.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Mt({},this.state),typeof n=="function"&&(n=n(Mt({},t),this.props)),n&&Mt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Pl(this))},li.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Pl(this))},li.prototype.render=Y,tn=[],Mh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Vh=function(n,e){return n.__v.__b-e.__v.__b},Ii.__r=0,xo=Math.random().toString(8),ai="__d"+xo,ts="__a"+xo,Oh=/(PointerCapture)$|Capture$/i,Ma=0,Zo=Nl(!1),ea=Nl(!0);var ym=0;function d(n,e,t,r,s,i){e||(e={});var a,c,l=e;if("ref"in l)for(c in l={},e)c=="ref"?a=e[c]:l[c]=e[c];var h={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ym,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)l[c]===void 0&&(l[c]=a[c]);return de.vnode&&de.vnode(h),h}var as,Ee,Fo,Dl,bi=0,qh=[],be=de,Ml=be.__b,Vl=be.__r,Ol=be.diffed,Ll=be.__c,xl=be.unmount,Fl=be.__;function xa(n,e){be.__h&&be.__h(Ee,n,bi||e),bi=0;var t=Ee.__H||(Ee.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function ee(n){return bi=1,vm(Hh,n)}function vm(n,e,t){var r=xa(as++,2);if(r.t=n,!r.__c&&(r.__=[Hh(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,c);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=Ee,!Ee.__f)){var s=function(c,l,h){if(!r.__c.__H)return!0;var f=!1,_=r.__c.props!==c;if(r.__c.__H.__.some(function(T){if(T.__N){f=!0;var R=T.__[0];T.__=T.__N,T.__N=void 0,R!==T.__[0]&&(_=!0)}}),i){var m=i.call(this,c,l,h);return f?m||_:m}return!f||_};Ee.__f=!0;var i=Ee.shouldComponentUpdate,a=Ee.componentWillUpdate;Ee.componentWillUpdate=function(c,l,h){if(this.__e){var f=i;i=void 0,s(c,l,h),i=f}a&&a.call(this,c,l,h)},Ee.shouldComponentUpdate=s}return r.__N||r.__}function _e(n,e){var t=xa(as++,3);!be.__s&&Wh(t.__H,e)&&(t.__=n,t.u=e,Ee.__H.__h.push(t))}function zh(n){return bi=5,He(function(){return{current:n}},[])}function He(n,e){var t=xa(as++,7);return Wh(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function wm(){for(var n;n=qh.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(ui),e.__h.some(ta),e.__h=[]}catch(t){e.__h=[],be.__e(t,n.__v)}}}be.__b=function(n){Ee=null,Ml&&Ml(n)},be.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Fl&&Fl(n,e)},be.__r=function(n){Vl&&Vl(n),as=0;var e=(Ee=n.__c).__H;e&&(Fo===Ee?(e.__h=[],Ee.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(ui),e.__h.some(ta),e.__h=[],as=0)),Fo=Ee},be.diffed=function(n){Ol&&Ol(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(qh.push(e)!==1&&Dl===be.requestAnimationFrame||((Dl=be.requestAnimationFrame)||Em)(wm)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Fo=Ee=null},be.__c=function(n,e){e.some(function(t){try{t.__h.some(ui),t.__h=t.__h.filter(function(r){return!r.__||ta(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],be.__e(r,t.__v)}}),Ll&&Ll(n,e)},be.unmount=function(n){xl&&xl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{ui(r)}catch(s){e=s}}),t.__H=void 0,e&&be.__e(e,t.__v))};var Ul=typeof requestAnimationFrame=="function";function Em(n){var e,t=function(){clearTimeout(r),Ul&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);Ul&&(e=requestAnimationFrame(t))}function ui(n){var e=Ee,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Ee=e}function ta(n){var e=Ee;n.__c=n.__(),Ee=e}function Wh(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Hh(n,e){return typeof e=="function"?e(n):e}const Gh={netflix:"E50914",spotify:"1DB954",youtube:"FF0000",grab:"00B14F",shopee:"EE4D2D",line:"00C300",starbucks:"006241",mcdonalds:"FBC817",kfc:"F40027",apple:"000000",applemusic:"FA243C",google:"4285F4",googlecloud:"4285F4",openai:"412991",anthropic:"191919",shell:"FFD500",foodpanda:"D70F64",airbnb:"FF5A5F",icloud:"3693F3",amazon:"FF9900",hbo:"000000",tiktok:"000000",instagram:"E4405F",facebook:"0866FF",whatsapp:"25D366",telegram:"26A5E4",discord:"5865F2",twitch:"9146FF",steam:"000000",playstation:"003791",nintendoswitch:"E60012",roblox:"000000",uber:"000000",airasia:"FF0000",expedia:"191E3B",tripadvisor:"34E0A1",ikea:"0058A3",uniqlo:"FF0000",handm:"E50010",zara:"000000",nike:"111111",adidas:"000000",samsung:"1428A0",adobe:"FF0000",dropbox:"0061FF",github:"181717",canva:"00C4CC",notion:"000000",figma:"F24E1E",zoom:"0B5CFF",slack:"4A154B",paypal:"003087",aliexpress:"FF4747",googledrive:"4285F4",googleplay:"414141",soundcloud:"FF5500",tidal:"000000",linkedin:"0A66C2",patreon:"000000",youtubemusic:"FF0000",toyota:"EB0A1E",honda:"E40521",mazda:"101010",nissan:"C3002F",mitsubishi:"E60012",bmw:"0066B1",mercedes:"242424",tesla:"CC0000",suzuki:"E30613"},Tm=n=>{const e=parseInt(n.slice(1),16);return .299*(e>>16&255)+.587*(e>>8&255)+.114*(e&255)>170},Kh=n=>Tm(n)?"#111111":"#ffffff",U=(n,e,t,r={})=>{const s=r.bg||"#"+Gh[t];return{key:n,re:e,si:t,bg:s,fg:r.fg||Kh(s),...r}},Wr=(n,e,t)=>U(n,e,t,{bg:"#ffffff",fg:"#"+Gh[t],ring:!0}),ct=(n,e,t,r={})=>({key:n,re:e,bg:t,fg:r.fg||Kh(t),...r}),Im=[U("netflix",/netflix|เน็ตฟลิกซ์/,"netflix",{bg:"#000000",fg:"#e50914"}),U("youtubemusic",/youtube ?music|ยูทูบ ?มิวสิค/,"youtubemusic"),Wr("youtube",/youtube|ยูทูบ/,"youtube"),U("spotify",/spotify|สปอติฟาย/,"spotify",{bg:"#191414",fg:"#1ed760"}),ct("disney",/disney|ดิสนีย์/,"#113ccf"),U("hbo",/\bhbo\b/,"hbo"),U("applemusic",/apple ?music/,"applemusic"),U("icloud",/icloud/,"icloud"),U("apple",/apple|itunes/,"apple"),Wr("googlecloud",/google ?cloud/,"googlecloud"),Wr("googledrive",/google ?(drive|one)/,"googledrive"),Wr("googleplay",/google ?play/,"googleplay"),Wr("google",/google|กูเกิล/,"google"),U("chatgpt",/chatgpt|openai/,"openai",{bg:"#10a37f",fg:"#ffffff"}),U("claude",/claude|anthropic/,"anthropic",{bg:"#d97757",fg:"#ffffff"}),ct("lineman",/line ?man|ไลน์แมน|lpth\*pf|\blm_/,"#06c755"),U("line",/\bline\b|ไลน์/,"line",{bg:"#06c755",fg:"#ffffff"}),U("grab",/\bgrab|แกร็บ/,"grab"),U("uber",/\buber\b/,"uber"),U("foodpanda",/foodpanda|ฟู้ดแพนด้า/,"foodpanda"),ct("seven",/7-?11|7-eleven|seven ?eleven|เซเว่น/,"#00a650"),ct("cafeamazon",/caf[eé] ?amazon|คาเฟ่ ?อเมซอน|อเมซอน/,"#00693c"),U("amazon",/\bamazon\b/,"amazon",{bg:"#232f3e",fg:"#ff9900"}),U("starbucks",/starbucks|สตาร์บัค/,"starbucks",{round:!0}),U("shopee",/shopee|ช้อปปี้/,"shopee"),ct("lazada",/lazada|ลาซาด้า/,"#0f146d"),U("aliexpress",/aliexpress|อาลีเอ็กซ์/,"aliexpress"),U("mcdonald",/mcdonald|แมคโดนัลด์|แมค ?ดี/,"mcdonalds",{bg:"#da291c",fg:"#ffc72c"}),U("kfc",/\bkfc|เคเอฟซี/,"kfc"),ct("ais",/\bais\b|เอไอเอส/,"#8dc63f"),ct("true",/\btrue\b|ทรูมูฟ|ทรูออนไลน์/,"#ee2e24"),ct("3bb",/3bb/,"#0055a5"),ct("ptt",/\bptt\b|ปตท/,"#00439c"),U("shell",/\bshell\b|เชลล์/,"shell",{bg:"#ffd500",fg:"#dd1d21"}),ct("lotus",/lotus|โลตัส/,"#00a651"),ct("bigc",/big ?c\b|บิ๊กซี/,"#ed1c24"),ct("makro",/makro|แม็คโคร|แมคโคร/,"#003d8f"),U("airasia",/airasia|แอร์เอเชีย/,"airasia"),U("airbnb",/airbnb/,"airbnb"),U("expedia",/expedia/,"expedia"),U("tripadvisor",/tripadvisor/,"tripadvisor"),U("tiktok",/tiktok|ติ๊กต็อก/,"tiktok"),U("instagram",/instagram/,"instagram"),U("facebook",/facebook|เฟซบุ๊ก/,"facebook"),U("whatsapp",/whatsapp/,"whatsapp"),U("telegram",/telegram/,"telegram"),U("discord",/discord/,"discord"),U("twitch",/twitch/,"twitch"),U("steam",/steam|สตีม/,"steam"),U("playstation",/playstation|เพลย์สเตชัน|\bpsn\b/,"playstation"),U("nintendo",/nintendo|นินเทนโด/,"nintendoswitch"),U("roblox",/roblox/,"roblox"),U("soundcloud",/soundcloud/,"soundcloud"),U("tidal",/\btidal\b/,"tidal"),U("linkedin",/linkedin/,"linkedin"),U("patreon",/patreon/,"patreon"),U("paypal",/paypal/,"paypal"),U("github",/github/,"github"),U("adobe",/adobe/,"adobe"),U("dropbox",/dropbox/,"dropbox"),U("canva",/canva/,"canva"),U("notion",/notion/,"notion"),U("figma",/figma/,"figma"),U("zoom",/\bzoom\b/,"zoom"),U("slack",/\bslack\b/,"slack"),U("samsung",/samsung|ซัมซุง/,"samsung"),U("ikea",/ikea|อิเกีย/,"ikea"),U("uniqlo",/uniqlo|ยูนิโคล่/,"uniqlo"),U("handm",/h&m/,"handm"),U("zara",/\bzara\b/,"zara"),U("nike",/\bnike\b|ไนกี้/,"nike"),U("adidas",/adidas|อาดิดาส/,"adidas"),U("toyota",/toyota|โตโยต้า|โตโยตา/,"toyota"),U("honda",/honda|ฮอนด้า|civic|ซีวิค/,"honda"),U("mazda",/mazda|มาสด้า/,"mazda"),U("nissan",/nissan|นิสสัน/,"nissan"),U("mitsubishi",/mitsubishi|มิตซู/,"mitsubishi"),U("bmw",/\bbmw\b/,"bmw"),U("mercedes",/mercedes|benz|เบนซ์/,"mercedes"),U("tesla",/tesla|เทสล่า/,"tesla"),U("suzuki",/suzuki|ซูซูกิ/,"suzuki")];function bm(n){const e=String(n||"").toLowerCase();return e.trim()&&Im.find(t=>t.re.test(e))||null}const $l={home:d(Y,{children:[d("path",{d:"M3.5 11 12 4l8.5 7"}),d("path",{d:"M5.5 9.8V20h13V9.8"}),d("path",{d:"M10 20v-5.5h4V20"})]}),bill:d(Y,{children:[d("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),d("path",{d:"M9 8.5h6M9 12h6"})]}),swap:d("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:d(Y,{children:[d("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),d("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),d("path",{d:"M15.5 13.8h2.2"})]}),user:d(Y,{children:[d("circle",{cx:"12",cy:"8.5",r:"3.6"}),d("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:d("path",{d:"M12 5v14M5 12h14"}),check:d("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:d(Y,{children:[d("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),d("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),d("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),d("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:d("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:d("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:d("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:d("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:d("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:d(Y,{children:[d("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),d("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:d(Y,{children:[d("path",{d:"M5.5 8h13l-1 11.5h-11z"}),d("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:d("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:d(Y,{children:[d("circle",{cx:"6",cy:"12",r:"1.1"}),d("circle",{cx:"12",cy:"12",r:"1.1"}),d("circle",{cx:"18",cy:"12",r:"1.1"})]}),people:d(Y,{children:[d("circle",{cx:"9",cy:"8.5",r:"3.2"}),d("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),d("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:d(Y,{children:[d("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),d("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),bell:d(Y,{children:[d("path",{d:"M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"}),d("path",{d:"M10 20.5h4"})]}),trash:d(Y,{children:[d("path",{d:"M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7"}),d("path",{d:"M10.5 11v5M13.5 11v5"})]}),alert:d(Y,{children:[d("path",{d:"M12 4.5 3.5 19h17z"}),d("path",{d:"M12 10v4.5M12 17h.01"})]}),chart:d("path",{d:"M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5"}),sliders:d(Y,{children:[d("path",{d:"M5 7h9M18 7h1M5 17h1M10 17h9"}),d("circle",{cx:"16",cy:"7",r:"2"}),d("circle",{cx:"8",cy:"17",r:"2"})]}),coffee:d(Y,{children:[d("path",{d:"M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z"}),d("path",{d:"M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4.5v2M12 4.5v2"})]}),key:d(Y,{children:[d("circle",{cx:"8.5",cy:"14.5",r:"3.5"}),d("path",{d:"M11 12 19 4.5M16 7.5l2.5 2.5M14 9.5l1.8 1.8"})]}),film:d(Y,{children:[d("rect",{x:"4",y:"5",width:"16",height:"14",rx:"2"}),d("path",{d:"M8 5v14M16 5v14M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4"})]}),pill:d(Y,{children:[d("rect",{x:"3.5",y:"9",width:"17",height:"6.5",rx:"3.25",transform:"rotate(-40 12 12)"}),d("path",{d:"m9.4 9.4 5.2 5.2"})]}),plane:d("path",{d:"M3.5 13.5 20.5 5l-4 14-4.5-4.5-3 3v-4.5zM11.5 14.5 20.5 5"}),gift:d(Y,{children:[d("rect",{x:"4",y:"9",width:"16",height:"4",rx:"1"}),d("path",{d:"M5.5 13v6.5h13V13M12 9v10.5M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9zM12 9c1-3.5 5-3.5 5-1.2 0 1.2-2 1.2-5 1.2z"})]}),paw:d(Y,{children:[d("circle",{cx:"7",cy:"10",r:"1.6"}),d("circle",{cx:"11",cy:"6.8",r:"1.6"}),d("circle",{cx:"15.5",cy:"7.5",r:"1.6"}),d("circle",{cx:"18",cy:"11.5",r:"1.6"}),d("path",{d:"M8 17.5c0-2.5 2.2-4.5 4.5-4.5s4.5 2 4 4.2c-.4 1.8-2 2.3-4 2.3S8 19.5 8 17.5z"})]}),search:d(Y,{children:[d("circle",{cx:"11",cy:"11",r:"6"}),d("path",{d:"m16 16 4 4"})]}),pencil:d("path",{d:"M5 19l1-4L16.5 4.5a2 2 0 0 1 3 3L9 18zM14.5 6.5l3 3"}),close:d("path",{d:"M6 6l12 12M18 6 6 18"}),copy:d(Y,{children:[d("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),d("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),play:d("polygon",{points:"8 5 19 12 8 19",style:"fill:currentColor"}),shield:d("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),mobile:d(Y,{children:[d("rect",{x:"7",y:"3",width:"10",height:"18",rx:"2.5"}),d("path",{d:"M11 17.5h2"})]}),external:d(Y,{children:d("path",{d:"M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"})}),layers:d(Y,{children:[d("polygon",{points:"12 3 3 8 12 13 21 8"}),d("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]}),sparkle:d("path",{d:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"}),sun:d(Y,{children:[d("circle",{cx:"12",cy:"12",r:"4"}),d("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),moon:d("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"}),list:d("path",{d:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"}),upload:d("path",{d:"M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14"}),grid:d(Y,{children:[d("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"13",y:"4",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"13",y:"13",width:"7",height:"7",rx:"1.5"})]}),heart:d("path",{d:"M12 20s-7.5-4.4-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"}),star:d("path",{d:"m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"}),target:d(Y,{children:[d("circle",{cx:"12",cy:"12",r:"8.5"}),d("circle",{cx:"12",cy:"12",r:"4.8"}),d("circle",{cx:"12",cy:"12",r:"1.2"})]}),card:d(Y,{children:[d("rect",{x:"3",y:"5.5",width:"18",height:"13",rx:"2.5"}),d("path",{d:"M3 10h18M7 14.5h4"})]}),calendar:d(Y,{children:[d("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),d("path",{d:"M16 2v4M8 2v4M3 10h18"})]})};function Q({name:n,size:e,class:t=""}){return d("svg",{class:`ic ${t}`,viewBox:"0 0 24 24","aria-hidden":"true",style:e?{width:e,height:e}:void 0,children:$l[n]||$l.dots})}const Am={"fa-utensils":"food","fa-mug-hot":"coffee","fa-wine-glass":"coffee","fa-car":"car","fa-gas-pump":"car","fa-bus":"car","fa-plane":"plane","fa-cart-shopping":"bag","fa-basket-shopping":"bag","fa-scissors":"bag","fa-pills":"pill","fa-paw":"paw","fa-gift":"gift","fa-film":"film","fa-house":"key","fa-bolt":"bolt","fa-mobile-screen":"bolt","fa-mobile-screen-button":"bolt","fa-arrow-down":"down","fa-credit-card":"card"},Sm=n=>Am[n]||"bill";let na=null,Bl=null;const ra=new Set;function Rm(){Bl||(Bl=St(()=>import("./brand-paths-Dbek54K2.js"),[]).then(n=>{na=n.SI,ra.forEach(e=>e())}).catch(()=>{}))}function km(){const[,n]=ee(0);return _e(()=>{if(na)return;const e=()=>n(t=>t+1);return ra.add(e),Rm(),()=>ra.delete(e)},[]),na}function Pm({b:n,size:e,name:t}){const r=km();if(n.si&&r&&r[n.si]){const s=Math.round(e*.58);return d("svg",{viewBox:"0 0 24 24",width:s,height:s,"aria-hidden":"true",children:d("path",{d:r[n.si],fill:n.fg})})}return d(Q,{name:t,size:Math.round(e*.5)})}function Cm({desc:n,name:e,size:t=40,iconSize:r}){const s=bm(n);if(!s)return d("span",{class:"ico",style:t!==40?{width:t,height:t}:void 0,children:d(Q,{name:e,size:r})});const i={width:t,height:t,background:s.bg,color:s.fg,borderRadius:s.round?"50%":Math.round(t*.3)};return s.ring&&(i.boxShadow="inset 0 0 0 1.5px #e3e8f5"),d("span",{class:"ico brand",style:i,"aria-hidden":"true",children:d(Pm,{b:s,size:t,name:e})})}function jl({size:n=24}){return d("svg",{viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",style:{flex:"none"},children:[d("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),d("path",{d:"M19 13h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),d("path",{d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"}),d("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"}),d("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"})]})}function Hr({size:n=88,label:e=""}){return d("div",{class:"ld-wrap",role:"status","aria-live":"polite",children:[d("svg",{class:"ld",viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",children:[d("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),d("g",{class:"ld-l",children:[d("path",{d:"M19 13h13v35l-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),d("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),d("g",{class:"ld-r",children:[d("path",{d:"M32 13h13v38l-4.3-3-4.4 3-4.3-3z",fill:"#ffffff"}),d("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),d("path",{class:"ld-cut",d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"})]}),e?d("p",{class:"ld-t",children:e}):null]})}var ql={};/**
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
 */const Qh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Nm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,_=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,T=h&63;l||(T=64,a||(m=64)),r.push(t[f],t[_],t[m],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Nm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||_==null)throw new Dm;const m=i<<2|c>>4;if(r.push(m),h!==64){const T=c<<4&240|h>>2;if(r.push(T),_!==64){const R=h<<6&192|_;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mm=function(n){const e=Qh(n);return Xh.encodeByteArray(e,!0)},Ai=function(n){return Mm(n).replace(/\./g,"")},Yh=function(n){try{return Xh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Om=()=>Vm().__FIREBASE_DEFAULTS__,Lm=()=>{if(typeof process>"u"||typeof ql>"u")return;const n=ql.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yh(n[1]);return e&&JSON.parse(e)},Xi=()=>{try{return Om()||Lm()||xm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jh=n=>{var e,t;return(t=(e=Xi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Fm=n=>{const e=Jh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zh=()=>{var n;return(n=Xi())===null||n===void 0?void 0:n.config},ed=n=>{var e;return(e=Xi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function $m(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ai(JSON.stringify(t)),Ai(JSON.stringify(a)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function jm(){var n;const e=(n=Xi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hm(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gm(){return!jm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function Qm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Xm="FirebaseError";class Ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Xm,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Ym(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ht(s,c,r)}}function Ym(n,e){return n.replace(Jm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jm=/\{\$([^}]+)}/g;function Zm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Si(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(zl(i)&&zl(a)){if(!Si(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function zl(n){return n!==null&&typeof n=="object"}/**
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
 */function ys(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eg(n,e){const t=new tg(n,e);return t.subscribe.bind(t)}class tg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ng(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Uo),s.error===void 0&&(s.error=Uo),s.complete===void 0&&(s.complete=Uo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ng(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uo(){}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class rg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Um;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ig(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sg(n){return n===kn?void 0:n}function ig(n){return n.instantiationMode==="EAGER"}/**
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
 */class og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const ag={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},cg=re.INFO,lg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ug=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=lg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fa{constructor(e){this.name=e,this._logLevel=cg,this._logHandler=ug,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ag[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const hg=(n,e)=>e.some(t=>n instanceof t);let Wl,Hl;function dg(){return Wl||(Wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fg(){return Hl||(Hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const td=new WeakMap,sa=new WeakMap,nd=new WeakMap,$o=new WeakMap,Ua=new WeakMap;function pg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(cn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&td.set(t,n)}).catch(()=>{}),Ua.set(e,n),e}function mg(n){if(sa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});sa.set(n,e)}let ia={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return cn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gg(n){ia=n(ia)}function _g(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Bo(this),e,...t);return nd.set(r,e.sort?e.sort():[e]),cn(r)}:fg().includes(n)?function(...e){return n.apply(Bo(this),e),cn(td.get(this))}:function(...e){return cn(n.apply(Bo(this),e))}}function yg(n){return typeof n=="function"?_g(n):(n instanceof IDBTransaction&&mg(n),hg(n,dg())?new Proxy(n,ia):n)}function cn(n){if(n instanceof IDBRequest)return pg(n);if($o.has(n))return $o.get(n);const e=yg(n);return e!==n&&($o.set(n,e),Ua.set(e,n)),e}const Bo=n=>Ua.get(n);function vg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=cn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(cn(a.result),l.oldVersion,l.newVersion,cn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const wg=["get","getKey","getAll","getAllKeys","count"],Eg=["put","add","delete","clear"],jo=new Map;function Gl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jo.get(e))return jo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Eg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wg.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return jo.set(e,i),i}gg(n=>({...n,get:(e,t,r)=>Gl(e,t)||n.get(e,t,r),has:(e,t)=>!!Gl(e,t)||n.has(e,t)}));/**
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
 */class Tg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ig(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ig(n){const e=n.getComponent();return e?.type==="VERSION"}const oa="@firebase/app",Kl="0.10.13";/**
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
 */const Ut=new Fa("@firebase/app"),bg="@firebase/app-compat",Ag="@firebase/analytics-compat",Sg="@firebase/analytics",Rg="@firebase/app-check-compat",kg="@firebase/app-check",Pg="@firebase/auth",Cg="@firebase/auth-compat",Ng="@firebase/database",Dg="@firebase/data-connect",Mg="@firebase/database-compat",Vg="@firebase/functions",Og="@firebase/functions-compat",Lg="@firebase/installations",xg="@firebase/installations-compat",Fg="@firebase/messaging",Ug="@firebase/messaging-compat",$g="@firebase/performance",Bg="@firebase/performance-compat",jg="@firebase/remote-config",qg="@firebase/remote-config-compat",zg="@firebase/storage",Wg="@firebase/storage-compat",Hg="@firebase/firestore",Gg="@firebase/vertexai-preview",Kg="@firebase/firestore-compat",Qg="firebase",Xg="10.14.1";/**
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
 */const aa="[DEFAULT]",Yg={[oa]:"fire-core",[bg]:"fire-core-compat",[Sg]:"fire-analytics",[Ag]:"fire-analytics-compat",[kg]:"fire-app-check",[Rg]:"fire-app-check-compat",[Pg]:"fire-auth",[Cg]:"fire-auth-compat",[Ng]:"fire-rtdb",[Dg]:"fire-data-connect",[Mg]:"fire-rtdb-compat",[Vg]:"fire-fn",[Og]:"fire-fn-compat",[Lg]:"fire-iid",[xg]:"fire-iid-compat",[Fg]:"fire-fcm",[Ug]:"fire-fcm-compat",[$g]:"fire-perf",[Bg]:"fire-perf-compat",[jg]:"fire-rc",[qg]:"fire-rc-compat",[zg]:"fire-gcs",[Wg]:"fire-gcs-compat",[Hg]:"fire-fst",[Kg]:"fire-fst-compat",[Gg]:"fire-vertex","fire-js":"fire-js",[Qg]:"fire-js-all"};/**
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
 */const Ri=new Map,Jg=new Map,ca=new Map;function Ql(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fr(n){const e=n.name;if(ca.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;ca.set(e,n);for(const t of Ri.values())Ql(t,n);for(const t of Jg.values())Ql(t,n);return!0}function $a(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n.settings!==void 0}/**
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
 */const Zg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new _s("app","Firebase",Zg);/**
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
 */class e_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Ir=Xg;function rd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:aa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});if(t||(t=Zh()),!t)throw ln.create("no-options");const i=Ri.get(s);if(i){if(Si(t,i.options)&&Si(r,i.config))return i;throw ln.create("duplicate-app",{appName:s})}const a=new og(s);for(const l of ca.values())a.addComponent(l);const c=new e_(t,r,a);return Ri.set(s,c),c}function sd(n=aa){const e=Ri.get(n);if(!e&&n===aa&&Zh())return rd();if(!e)throw ln.create("no-app",{appName:n});return e}function un(n,e,t){var r;let s=(r=Yg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}fr(new Vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const t_="firebase-heartbeat-database",n_=1,cs="firebase-heartbeat-store";let qo=null;function id(){return qo||(qo=vg(t_,n_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(cs)}catch(t){console.warn(t)}}}}).catch(n=>{throw ln.create("idb-open",{originalErrorMessage:n.message})})),qo}async function r_(n){try{const t=(await id()).transaction(cs),r=await t.objectStore(cs).get(od(n));return await t.done,r}catch(e){if(e instanceof Ht)Ut.warn(e.message);else{const t=ln.create("idb-get",{originalErrorMessage:e?.message});Ut.warn(t.message)}}}async function Xl(n,e){try{const r=(await id()).transaction(cs,"readwrite");await r.objectStore(cs).put(e,od(n)),await r.done}catch(t){if(t instanceof Ht)Ut.warn(t.message);else{const r=ln.create("idb-set",{originalErrorMessage:t?.message});Ut.warn(r.message)}}}function od(n){return`${n.name}!${n.options.appId}`}/**
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
 */const s_=1024,i_=30*24*60*60*1e3;class o_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new c_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=i_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yl(),{heartbeatsToSend:r,unsentEntries:s}=a_(this._heartbeatsCache.heartbeats),i=Ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ut.warn(t),""}}}function Yl(){return new Date().toISOString().substring(0,10)}function a_(n,e=s_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Jl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Jl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class c_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?Qm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await r_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jl(n){return Ai(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function l_(n){fr(new Vn("platform-logger",e=>new Tg(e),"PRIVATE")),fr(new Vn("heartbeat",e=>new o_(e),"PRIVATE")),un(oa,Kl,n),un(oa,Kl,"esm2017"),un("fire-js","")}l_("");var u_="firebase",h_="10.14.1";/**
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
 */un(u_,h_,"app");var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,ad;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function E(){}E.prototype=y.prototype,I.D=y.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(b,A,v){for(var w=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)w[ue-2]=arguments[ue];return y.prototype[A].apply(b,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,E){E||(E=0);var b=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)b[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;16>A;++A)b[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=I.g[0],E=I.g[1],A=I.g[2];var v=I.g[3],w=y+(v^E&(A^v))+b[0]+3614090360&4294967295;y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[1]+3905402710&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[2]+606105819&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[3]+3250441966&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[4]+4118548399&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[5]+1200080426&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[6]+2821735955&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[7]+4249261313&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[8]+1770035416&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[9]+2336552879&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[10]+4294925233&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[11]+2304563134&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[12]+1804603682&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[13]+4254626195&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[14]+2792965006&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[15]+1236535329&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(A^v&(E^A))+b[1]+4129170786&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[6]+3225465664&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[11]+643717713&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[0]+3921069994&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[5]+3593408605&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[10]+38016083&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[15]+3634488961&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[4]+3889429448&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[9]+568446438&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[14]+3275163606&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[3]+4107603335&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[8]+1163531501&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[13]+2850285829&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[2]+4243563512&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[7]+1735328473&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[12]+2368359562&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(E^A^v)+b[5]+4294588738&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[8]+2272392833&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[11]+1839030562&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[14]+4259657740&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[1]+2763975236&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[4]+1272893353&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[7]+4139469664&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[10]+3200236656&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[13]+681279174&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[0]+3936430074&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[3]+3572445317&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[6]+76029189&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[9]+3654602809&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[12]+3873151461&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[15]+530742520&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[2]+3299628645&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(A^(E|~v))+b[0]+4096336452&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[7]+1126891415&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[14]+2878612391&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[5]+4237533241&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[12]+1700485571&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[3]+2399980690&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[10]+4293915773&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[1]+2240044497&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[8]+1873313359&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[15]+4264355552&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[6]+2734768916&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[13]+1309151649&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[4]+4149444226&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[11]+3174756917&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[2]+718787259&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+v&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var E=y-this.blockSize,b=this.B,A=this.h,v=0;v<y;){if(A==0)for(;v<=E;)s(this,I,v),v+=this.blockSize;if(typeof I=="string"){for(;v<y;)if(b[A++]=I.charCodeAt(v++),A==this.blockSize){s(this,b),A=0;break}}else for(;v<y;)if(b[A++]=I[v++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var E=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=E&255,E/=256;for(this.u(I),I=Array(16),y=E=0;4>y;++y)for(var b=0;32>b;b+=8)I[E++]=this.g[y]>>>b&255;return I};function i(I,y){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=y(I)}function a(I,y){this.h=y;for(var E=[],b=!0,A=I.length-1;0<=A;A--){var v=I[A]|0;b&&v==y||(E[A]=v,b=!1)}this.g=E}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return S(h(-I));for(var y=[],E=1,b=0;I>=E;b++)y[b]=I/E|0,E*=4294967296;return new a(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return S(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),b=_,A=0;A<I.length;A+=8){var v=Math.min(8,I.length-A),w=parseInt(I.substring(A,A+v),y);8>v?(v=h(Math.pow(y,v)),b=b.j(v).add(h(w))):(b=b.j(E),b=b.add(h(w)))}return b}var _=l(0),m=l(1),T=l(16777216);n=a.prototype,n.m=function(){if(N(this))return-S(this).m();for(var I=0,y=1,E=0;E<this.g.length;E++){var b=this.i(E);I+=(0<=b?b:4294967296+b)*y,y*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(N(this))return"-"+S(this).toString(I);for(var y=h(Math.pow(I,6)),E=this,b="";;){var A=H(E,y).g;E=M(E,A.j(y));var v=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=A,R(E))return v+b;for(;6>v.length;)v="0"+v;b=v+b}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=M(this,I),N(I)?-1:R(I)?0:1};function S(I){for(var y=I.g.length,E=[],b=0;b<y;b++)E[b]=~I.g[b];return new a(E,~I.h).add(m)}n.abs=function(){return N(this)?S(this):this},n.add=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],b=0,A=0;A<=y;A++){var v=b+(this.i(A)&65535)+(I.i(A)&65535),w=(v>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=w>>>16,v&=65535,w&=65535,E[A]=w<<16|v}return new a(E,E[E.length-1]&-2147483648?-1:0)};function M(I,y){return I.add(S(y))}n.j=function(I){if(R(this)||R(I))return _;if(N(this))return N(I)?S(this).j(S(I)):S(S(this).j(I));if(N(I))return S(this.j(S(I)));if(0>this.l(T)&&0>I.l(T))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,E=[],b=0;b<2*y;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<I.g.length;A++){var v=this.i(b)>>>16,w=this.i(b)&65535,ue=I.i(A)>>>16,Ce=I.i(A)&65535;E[2*b+2*A]+=w*Ce,O(E,2*b+2*A),E[2*b+2*A+1]+=v*Ce,O(E,2*b+2*A+1),E[2*b+2*A+1]+=w*ue,O(E,2*b+2*A+1),E[2*b+2*A+2]+=v*ue,O(E,2*b+2*A+2)}for(b=0;b<y;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=y;b<2*y;b++)E[b]=0;return new a(E,0)};function O(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function $(I,y){this.g=I,this.h=y}function H(I,y){if(R(y))throw Error("division by zero");if(R(I))return new $(_,_);if(N(I))return y=H(S(I),y),new $(S(y.g),S(y.h));if(N(y))return y=H(I,S(y)),new $(S(y.g),y.h);if(30<I.g.length){if(N(I)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,b=y;0>=b.l(I);)E=X(E),b=X(b);var A=Z(E,1),v=Z(b,1);for(b=Z(b,2),E=Z(E,2);!R(b);){var w=v.add(b);0>=w.l(I)&&(A=A.add(E),v=w),b=Z(b,1),E=Z(E,1)}return y=M(I,A.j(y)),new $(A,y)}for(A=_;0<=I.l(y);){for(E=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),v=h(E),w=v.j(y);N(w)||0<w.l(I);)E-=b,v=h(E),w=v.j(y);R(v)&&(v=m),A=A.add(v),I=M(I,w)}return new $(A,I)}n.A=function(I){return H(this,I).h},n.and=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)&I.i(b);return new a(E,this.h&I.h)},n.or=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)|I.i(b);return new a(E,this.h|I.h)},n.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)^I.i(b);return new a(E,this.h^I.h)};function X(I){for(var y=I.g.length+1,E=[],b=0;b<y;b++)E[b]=I.i(b)<<1|I.i(b-1)>>>31;return new a(E,I.h)}function Z(I,y){var E=y>>5;y%=32;for(var b=I.g.length-E,A=[],v=0;v<b;v++)A[v]=0<y?I.i(v+E)>>>y|I.i(v+E+1)<<32-y:I.i(v+E);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ad=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Cn=a}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cd,Yr,ld,hi,la,ud,hd,dd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,p){return o==Array.prototype||o==Object.prototype||(o[u]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zs=="object"&&Zs];for(var u=0;u<o.length;++u){var p=o[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var p=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var k=o[g];if(!(k in p))break e;p=p[k]}o=o[o.length-1],g=p[o],u=u(g),u!=g&&u!=null&&e(p,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var p=0,g=!1,k={next:function(){if(!g&&p<o.length){var C=p++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,p){return o.call.apply(o.bind,arguments)}function _(o,u,p){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function m(o,u,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,m.apply(null,arguments)}function T(o,u){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function R(o,u){function p(){}p.prototype=u.prototype,o.aa=u.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(g,k,C){for(var L=Array(arguments.length-2),he=2;he<arguments.length;he++)L[he-2]=arguments[he];return u.prototype[k].apply(g,L)}}function N(o){const u=o.length;if(0<u){const p=Array(u);for(let g=0;g<u;g++)p[g]=o[g];return p}return[]}function S(o,u){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const k=o.length||0,C=g.length||0;o.length=k+C;for(let L=0;L<C;L++)o[k+L]=g[L]}else o.push(g)}}class M{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function O(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var X=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Z(o,u,p){for(const g in o)u.call(p,o[g],g,o)}function I(o,u){for(const p in o)u.call(void 0,o[p],p,o)}function y(o){const u={};for(const p in o)u[p]=o[p];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let p,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(p in g)o[p]=g[p];for(let C=0;C<E.length;C++)p=E[C],Object.prototype.hasOwnProperty.call(g,p)&&(o[p]=g[p])}}function A(o){var u=1;o=o.split(":");const p=[];for(;0<u&&o.length;)p.push(o.shift()),u--;return o.length&&p.push(o.join(":")),p}function v(o){c.setTimeout(()=>{throw o},0)}function w(){var o=Kt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ue{constructor(){this.h=this.g=null}add(u,p){const g=Ce.get();g.set(u,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Ce=new M(()=>new Rt,o=>o.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,Gt=!1,Kt=new ue,Ds=()=>{const o=c.Promise.resolve(void 0);Ze=()=>{o.then(Nr)}};var Nr=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(p){v(p)}var u=Ce;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Gt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Dr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,u),c.removeEventListener("test",p,u)}catch{}return o}();function ot(o,u){if(fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(X){e:{try{H(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else p=="mouseover"?u=o.fromElement:p=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Io[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ot.aa.h.call(this)}}R(ot,fe);var Io={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),Ms=0;function Fe(o,u,p,g,k){this.listener=o,this.proxy=null,this.src=u,this.type=p,this.capture=!!g,this.ha=k,this.key=++Ms,this.da=this.fa=!1}function Qt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ne(o){this.src=o,this.g={},this.h=0}Ne.prototype.add=function(o,u,p,g,k){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var L=tt(o,u,g,k);return-1<L?(u=o[L],p||(u.fa=!1)):(u=new Fe(u,this.src,C,!!g,k),u.fa=p,o.push(u)),u};function et(o,u){var p=u.type;if(p in o.g){var g=o.g[p],k=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=k)&&Array.prototype.splice.call(g,k,1),C&&(Qt(u),o.g[p].length==0&&(delete o.g[p],o.h--))}}function tt(o,u,p,g){for(var k=0;k<o.length;++k){var C=o[k];if(!C.da&&C.listener==u&&C.capture==!!p&&C.ha==g)return k}return-1}var at="closure_lm_"+(1e6*Math.random()|0),vn={};function Hn(o,u,p,g,k){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Hn(o,u[C],p,g,k);return null}return p=Mr(p),o&&o[Wn]?o.K(u,p,h(g)?!!g.capture:!1,k):Vs(o,u,p,!1,g,k)}function Vs(o,u,p,g,k,C){if(!u)throw Error("Invalid event type");var L=h(k)?!!k.capture:!!k,he=Kn(o);if(he||(o[at]=he=new Ne(o)),p=he.add(u,p,g,L,C),p.proxy)return p;if(g=Os(),p.proxy=g,g.src=o,g.listener=p,o.addEventListener)Dr||(k=L),k===void 0&&(k=!1),o.addEventListener(u.toString(),g,k);else if(o.attachEvent)o.attachEvent(Gn(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Os(){function o(p){return u.call(o.src,o.listener,p)}const u=wn;return o}function kt(o,u,p,g,k){if(Array.isArray(u))for(var C=0;C<u.length;C++)kt(o,u[C],p,g,k);else g=h(g)?!!g.capture:!!g,p=Mr(p),o&&o[Wn]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],p=tt(C,p,g,k),-1<p&&(Qt(C[p]),Array.prototype.splice.call(C,p,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Kn(o))&&(u=o.g[u.toString()],o=-1,u&&(o=tt(u,p,g,k)),(p=-1<o?u[o]:null)&&_t(p))}function _t(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Wn])et(u.i,o);else{var p=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(p,g,o.capture):u.detachEvent?u.detachEvent(Gn(p),g):u.addListener&&u.removeListener&&u.removeListener(g),(p=Kn(u))?(et(p,o),p.h==0&&(p.src=null,u[at]=null)):Qt(o)}}}function Gn(o){return o in vn?vn[o]:vn[o]="on"+o}function wn(o,u){if(o.da)o=!0;else{u=new ot(u,this);var p=o.listener,g=o.ha||o.src;o.fa&&_t(o),o=p.call(g,u)}return o}function Kn(o){return o=o[at],o instanceof Ne?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mr(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function ge(){ht.call(this),this.i=new Ne(this),this.M=this,this.F=null}R(ge,ht),ge.prototype[Wn]=!0,ge.prototype.removeEventListener=function(o,u,p,g){kt(this,o,u,p,g)};function De(o,u){var p,g=o.F;if(g)for(p=[];g;g=g.F)p.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new fe(u,o);else if(u instanceof fe)u.target=u.target||o;else{var k=u;u=new fe(g,o),b(u,k)}if(k=!0,p)for(var C=p.length-1;0<=C;C--){var L=u.g=p[C];k=En(L,g,!0,u)&&k}if(L=u.g=o,k=En(L,g,!0,u)&&k,k=En(L,g,!1,u)&&k,p)for(C=0;C<p.length;C++)L=u.g=p[C],k=En(L,g,!1,u)&&k}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var p=o.g[u],g=0;g<p.length;g++)Qt(p[g]);delete o.g[u],o.h--}}this.F=null},ge.prototype.K=function(o,u,p,g){return this.i.add(String(o),u,!1,p,g)},ge.prototype.L=function(o,u,p,g){return this.i.add(String(o),u,!0,p,g)};function En(o,u,p,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,C=0;C<u.length;++C){var L=u[C];if(L&&!L.da&&L.capture==p){var he=L.listener,Me=L.ha||L.src;L.fa&&et(o.i,L),k=he.call(Me,g)!==!1&&k}}return k&&!g.defaultPrevented}function Xt(o,u,p){if(typeof o=="function")p&&(o=m(o,p));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Qn(o){o.g=Xt(()=>{o.g=null,o.i&&(o.i=!1,Qn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class bo extends ht{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(o){ht.call(this),this.h=o,this.g={}}R(Pt,ht);var Ls=[];function Xn(o){Z(o.g,function(u,p){this.g.hasOwnProperty(p)&&_t(u)},o),o.g={}}Pt.prototype.N=function(){Pt.aa.N.call(this),Xn(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tn=c.JSON.stringify,Yn=c.JSON.parse,xs=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function yt(){}yt.prototype.h=null;function Jn(o){return o.h||(o.h=o.i())}function Vr(){}var In={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vt(){fe.call(this,"d")}R(vt,fe);function Zn(){fe.call(this,"c")}R(Zn,fe);var Qe={},P=null;function x(){return P=P||new ge}Qe.La="serverreachability";function q(o){fe.call(this,Qe.La,o)}R(q,fe);function Ct(o){const u=x();De(u,new q(u))}Qe.STAT_EVENT="statevent";function $c(o,u){fe.call(this,Qe.STAT_EVENT,o),this.stat=u}R($c,fe);function We(o){const u=x();De(u,new $c(u,o))}Qe.Ma="timingevent";function Bc(o,u){fe.call(this,Qe.Ma,o),this.size=u}R(Bc,fe);function Or(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Lr(){this.g=!0}Lr.prototype.xa=function(){this.g=!1};function Up(o,u,p,g,k,C){o.info(function(){if(o.g)if(C)for(var L="",he=C.split("&"),Me=0;Me<he.length;Me++){var ie=he[Me].split("=");if(1<ie.length){var Ue=ie[0];ie=ie[1];var $e=Ue.split("_");L=2<=$e.length&&$e[1]=="type"?L+(Ue+"="+ie+"&"):L+(Ue+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+u+`
`+p+`
`+L})}function $p(o,u,p,g,k,C,L){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+u+`
`+p+`
`+C+" "+L})}function er(o,u,p,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+jp(o,p)+(g?" "+g:"")})}function Bp(o,u){o.info(function(){return"TIMEOUT: "+u})}Lr.prototype.info=function(){};function jp(o,u){if(!o.g)return u;if(!u)return null;try{var p=JSON.parse(u);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var g=p[o];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var C=k[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<k.length;L++)k[L]=""}}}}return Tn(p)}catch{return u}}var Fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ao;function Us(){}R(Us,yt),Us.prototype.g=function(){return new XMLHttpRequest},Us.prototype.i=function(){return{}},Ao=new Us;function Yt(o,u,p,g){this.j=o,this.i=u,this.l=p,this.R=g||1,this.U=new Pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qc}function qc(){this.i=null,this.g="",this.h=!1}var zc={},So={};function Ro(o,u,p){o.L=1,o.v=qs(Nt(u)),o.m=p,o.P=!0,Wc(o,null)}function Wc(o,u){o.F=Date.now(),$s(o),o.A=Nt(o.v);var p=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),il(p.i,"t",g),o.C=0,p=o.j.J,o.h=new qc,o.g=Il(o.j,p?u:null,!o.m),0<o.O&&(o.M=new bo(m(o.Y,o,o.g),o.O)),u=o.U,p=o.g,g=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ls[0]=k.toString()),k=Ls);for(var C=0;C<k.length;C++){var L=Hn(p,k[C],g||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ct(),Up(o.i,o.u,o.A,o.l,o.R,o.m)}Yt.prototype.ca=function(o){o=o.target;const u=this.M;u&&Dt(o)==3?u.j():this.Y(o)},Yt.prototype.Y=function(o){try{if(o==this.g)e:{const $e=Dt(this.g);var u=this.g.Ba();const rr=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||dl(this.g)))){this.J||$e!=4||u==7||(u==8||0>=rr?Ct(3):Ct(2)),ko(this);var p=this.g.Z();this.X=p;t:if(Hc(this)){var g=dl(this.g);o="";var k=g.length,C=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),xr(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==k-1)});g.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=p==200,$p(this.i,this.u,this.A,this.l,this.R,$e,p),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Me=this.g;if((he=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(he)){var ie=he;break t}}ie=null}if(p=ie)er(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Po(this,p);else{this.o=!1,this.s=3,We(12),bn(this),xr(this);break e}}if(this.P){p=!0;let dt;for(;!this.J&&this.C<L.length;)if(dt=qp(this,L),dt==So){$e==4&&(this.s=4,We(14),p=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==zc){this.s=4,We(15),er(this.i,this.l,L,"[Invalid Chunk]"),p=!1;break}else er(this.i,this.l,dt,null),Po(this,dt);if(Hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||L.length!=0||this.h.h||(this.s=1,We(16),p=!1),this.o=this.o&&p,!p)er(this.i,this.l,L,"[Invalid Chunked Response]"),bn(this),xr(this);else if(0<L.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Oo(Ue),Ue.M=!0,We(11))}}else er(this.i,this.l,L,null),Po(this,L);$e==4&&bn(this),this.o&&!this.J&&($e==4?vl(this.j,this):(this.o=!1,$s(this)))}else om(this.g),p==400&&0<L.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),bn(this),xr(this)}}}catch{}finally{}};function Hc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function qp(o,u){var p=o.C,g=u.indexOf(`
`,p);return g==-1?So:(p=Number(u.substring(p,g)),isNaN(p)?zc:(g+=1,g+p>u.length?So:(u=u.slice(g,g+p),o.C=g+p,u)))}Yt.prototype.cancel=function(){this.J=!0,bn(this)};function $s(o){o.S=Date.now()+o.I,Gc(o,o.I)}function Gc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Or(m(o.ba,o),u)}function ko(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Yt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Bp(this.i,this.A),this.L!=2&&(Ct(),We(17)),bn(this),this.s=2,xr(this)):Gc(this,this.S-o)};function xr(o){o.j.G==0||o.J||vl(o.j,o)}function bn(o){ko(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Xn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Po(o,u){try{var p=o.j;if(p.G!=0&&(p.g==o||Co(p.h,o))){if(!o.K&&Co(p.h,o)&&p.G==3){try{var g=p.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)Qs(p),Gs(p);else break e;Vo(p),We(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=Or(m(p.Za,p),6e3));if(1>=Xc(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Sn(p,11)}else if((o.K||p.g==o)&&Qs(p),!O(u))for(k=p.Da.g.parse(u),u=0;u<k.length;u++){let ie=k[u];if(p.T=ie[0],ie=ie[1],p.G==2)if(ie[0]=="c"){p.K=ie[1],p.ia=ie[2];const Ue=ie[3];Ue!=null&&(p.la=Ue,p.j.info("VER="+p.la));const $e=ie[4];$e!=null&&(p.Aa=$e,p.j.info("SVER="+p.Aa));const rr=ie[5];rr!=null&&typeof rr=="number"&&0<rr&&(g=1.5*rr,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const dt=o.g;if(dt){const Ys=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var C=g.h;C.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(No(C,C.h),C.h=null))}if(g.D){const Lo=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(g.ya=Lo,pe(g.I,g.D,Lo))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var L=o;if(g.qa=Tl(g,g.J?g.ia:null,g.W),L.K){Yc(g.h,L);var he=L,Me=g.L;Me&&(he.I=Me),he.B&&(ko(he),$s(he)),g.g=L}else _l(g);0<p.i.length&&Ks(p)}else ie[0]!="stop"&&ie[0]!="close"||Sn(p,7);else p.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Sn(p,7):Mo(p):ie[0]!="noop"&&p.l&&p.l.ta(ie),p.v=0)}}Ct(4)}catch{}}var zp=class{constructor(o,u){this.g=o,this.map=u}};function Kc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Xc(o){return o.h?1:o.g?o.g.size:0}function Co(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function No(o,u){o.g?o.g.add(u):o.h=u}function Yc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Kc.prototype.cancel=function(){if(this.i=Jc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Jc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const p of o.g.values())u=u.concat(p.D);return u}return N(o.i)}function Wp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],p=o.length,g=0;g<p;g++)u.push(o[g]);return u}u=[],p=0;for(g in o)u[p++]=o[g];return u}function Hp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var p=0;p<o;p++)u.push(p);return u}u=[],p=0;for(const g in o)u[p++]=g;return u}}}function Zc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var p=Hp(o),g=Wp(o),k=g.length,C=0;C<k;C++)u.call(void 0,g[C],p&&p[C],o)}var el=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gp(o,u){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var g=o[p].indexOf("="),k=null;if(0<=g){var C=o[p].substring(0,g);k=o[p].substring(g+1)}else C=o[p];u(C,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function An(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof An){this.h=o.h,Bs(this,o.j),this.o=o.o,this.g=o.g,js(this,o.s),this.l=o.l;var u=o.i,p=new $r;p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),tl(this,p),this.m=o.m}else o&&(u=String(o).match(el))?(this.h=!1,Bs(this,u[1]||"",!0),this.o=Fr(u[2]||""),this.g=Fr(u[3]||"",!0),js(this,u[4]),this.l=Fr(u[5]||"",!0),tl(this,u[6]||"",!0),this.m=Fr(u[7]||"")):(this.h=!1,this.i=new $r(null,this.h))}An.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ur(u,nl,!0),":");var p=this.g;return(p||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ur(u,nl,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Ur(p,p.charAt(0)=="/"?Xp:Qp,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Ur(p,Jp)),o.join("")};function Nt(o){return new An(o)}function Bs(o,u,p){o.j=p?Fr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function js(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function tl(o,u,p){u instanceof $r?(o.i=u,Zp(o.i,o.h)):(p||(u=Ur(u,Yp)),o.i=new $r(u,o.h))}function pe(o,u,p){o.i.set(u,p)}function qs(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Fr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ur(o,u,p){return typeof o=="string"?(o=encodeURI(o).replace(u,Kp),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Kp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nl=/[#\/\?@]/g,Qp=/[#\?:]/g,Xp=/[#\?]/g,Yp=/[#\?@]/g,Jp=/#/g;function $r(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Jt(o){o.g||(o.g=new Map,o.h=0,o.i&&Gp(o.i,function(u,p){o.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=$r.prototype,n.add=function(o,u){Jt(this),this.i=null,o=tr(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(u),this.h+=1,this};function rl(o,u){Jt(o),u=tr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function sl(o,u){return Jt(o),u=tr(o,u),o.g.has(u)}n.forEach=function(o,u){Jt(this),this.g.forEach(function(p,g){p.forEach(function(k){o.call(u,k,g,this)},this)},this)},n.na=function(){Jt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),p=[];for(let g=0;g<u.length;g++){const k=o[g];for(let C=0;C<k.length;C++)p.push(u[g])}return p},n.V=function(o){Jt(this);let u=[];if(typeof o=="string")sl(this,o)&&(u=u.concat(this.g.get(tr(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)u=u.concat(o[p])}return u},n.set=function(o,u){return Jt(this),this.i=null,o=tr(this,o),sl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function il(o,u,p){rl(o,u),0<p.length&&(o.i=null,o.g.set(tr(o,u),N(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var p=0;p<u.length;p++){var g=u[p];const C=encodeURIComponent(String(g)),L=this.V(g);for(g=0;g<L.length;g++){var k=C;L[g]!==""&&(k+="="+encodeURIComponent(String(L[g]))),o.push(k)}}return this.i=o.join("&")};function tr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Zp(o,u){u&&!o.j&&(Jt(o),o.i=null,o.g.forEach(function(p,g){var k=g.toLowerCase();g!=k&&(rl(this,g),il(this,k,p))},o)),o.j=u}function em(o,u){const p=new Lr;if(c.Image){const g=new Image;g.onload=T(Zt,p,"TestLoadImage: loaded",!0,u,g),g.onerror=T(Zt,p,"TestLoadImage: error",!1,u,g),g.onabort=T(Zt,p,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(Zt,p,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function tm(o,u){const p=new Lr,g=new AbortController,k=setTimeout(()=>{g.abort(),Zt(p,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(k),C.ok?Zt(p,"TestPingServer: ok",!0,u):Zt(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Zt(p,"TestPingServer: error",!1,u)})}function Zt(o,u,p,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(p)}catch{}}function nm(){this.g=new xs}function rm(o,u,p){const g=p||"";try{Zc(o,function(k,C){let L=k;h(k)&&(L=Tn(k)),u.push(g+C+"="+encodeURIComponent(L))})}catch(k){throw u.push(g+"type="+encodeURIComponent("_badmap")),k}}function zs(o){this.l=o.Ub||null,this.j=o.eb||!1}R(zs,yt),zs.prototype.g=function(){return new Ws(this.l,this.j)},zs.prototype.i=function(o){return function(){return o}}({});function Ws(o,u){ge.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ws,ge),n=Ws.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,jr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ol(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ol(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Br(this):jr(this),this.readyState==3&&ol(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Br(this))},n.Qa=function(o){this.g&&(this.response=o,Br(this))},n.ga=function(){this.g&&Br(this)};function Br(o){o.readyState=4,o.l=null,o.j=null,o.v=null,jr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=u.next();return o.join(`\r
`)};function jr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function al(o){let u="";return Z(o,function(p,g){u+=g,u+=":",u+=p,u+=`\r
`}),u}function Do(o,u,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=al(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):pe(o,u,p))}function ve(o){ge.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ve,ge);var sm=/^https?$/i,im=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ao.g(),this.v=this.o?Jn(this.o):Jn(Ao),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){cl(this,C);return}if(o=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)p.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())p.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(C=>C.toLowerCase()=="content-type"),k=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(im,u,void 0))||g||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of p)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){cl(this,C)}};function cl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,ll(o),Hs(o)}function ll(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),Hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ul(this):this.bb())},n.bb=function(){ul(this)};function ul(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Dt(o)!=4||o.Z()!=2)){if(o.u&&Dt(o)==4)Xt(o.Ea,0,o);else if(De(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var g;if(g=L===0){var k=String(o.D).match(el)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),g=!sm.test(k?k.toLowerCase():"")}p=g}if(p)De(o,"complete"),De(o,"success");else{o.m=6;try{var C=2<Dt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",ll(o)}}finally{Hs(o)}}}}function Hs(o,u){if(o.g){hl(o);const p=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||De(o,"ready");try{p.onreadystatechange=g}catch{}}}function hl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Yn(u)}};function dl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function om(o){const u={};o=(o.g&&2<=Dt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(O(o[g]))continue;var p=A(o[g]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const C=u[k]||[];u[k]=C,C.push(p)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qr(o,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||u}function fl(o){this.Aa=0,this.i=[],this.j=new Lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qr("baseRetryDelayMs",5e3,o),this.cb=qr("retryDelaySeedMs",1e4,o),this.Wa=qr("forwardChannelMaxRetries",2,o),this.wa=qr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Kc(o&&o.concurrentRequestLimit),this.Da=new nm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fl.prototype,n.la=8,n.G=1,n.connect=function(o,u,p,g){We(0),this.W=o,this.H=u||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Tl(this,null,this.W),Ks(this)};function Mo(o){if(pl(o),o.G==3){var u=o.U++,p=Nt(o.I);if(pe(p,"SID",o.K),pe(p,"RID",u),pe(p,"TYPE","terminate"),zr(o,p),u=new Yt(o,o.j,u),u.L=2,u.v=qs(Nt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=u.v,p=!0),p||(u.g=Il(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$s(u)}El(o)}function Gs(o){o.g&&(Oo(o),o.g.cancel(),o.g=null)}function pl(o){Gs(o),o.u&&(c.clearTimeout(o.u),o.u=null),Qs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ks(o){if(!Qc(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ze||Ds(),Gt||(Ze(),Gt=!0),Kt.add(u,o),o.B=0}}function am(o,u){return Xc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Or(m(o.Ga,o,u),wl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new Yt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(k.H=C,C=null),this.P)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=gl(this,k,u),p=Nt(this.I),pe(p,"RID",o),pe(p,"CVER",22),this.D&&pe(p,"X-HTTP-Session-Id",this.D),zr(this,p),C&&(this.O?u="headers="+encodeURIComponent(String(al(C)))+"&"+u:this.m&&Do(p,this.m,C)),No(this.h,k),this.Ua&&pe(p,"TYPE","init"),this.P?(pe(p,"$req",u),pe(p,"SID","null"),k.T=!0,Ro(k,p,null)):Ro(k,p,u),this.G=2}}else this.G==3&&(o?ml(this,o):this.i.length==0||Qc(this.h)||ml(this))};function ml(o,u){var p;u?p=u.l:p=o.U++;const g=Nt(o.I);pe(g,"SID",o.K),pe(g,"RID",p),pe(g,"AID",o.T),zr(o,g),o.m&&o.o&&Do(g,o.m,o.o),p=new Yt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),u&&(o.i=u.D.concat(o.i)),u=gl(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),No(o.h,p),Ro(p,g,u)}function zr(o,u){o.H&&Z(o.H,function(p,g){pe(u,g,p)}),o.l&&Zc({},function(p,g){pe(u,g,p)})}function gl(o,u,p){p=Math.min(o.i.length,p);var g=o.l?m(o.l.Na,o.l,o):null;e:{var k=o.i;let C=-1;for(;;){const L=["count="+p];C==-1?0<p?(C=k[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let he=!0;for(let Me=0;Me<p;Me++){let ie=k[Me].g;const Ue=k[Me].map;if(ie-=C,0>ie)C=Math.max(0,k[Me].g-100),he=!1;else try{rm(Ue,L,"req"+ie+"_")}catch{g&&g(Ue)}}if(he){g=L.join("&");break e}}}return o=o.i.splice(0,p),u.D=o,g}function _l(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ze||Ds(),Gt||(Ze(),Gt=!0),Kt.add(u,o),o.v=0}}function Vo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Or(m(o.Fa,o),wl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,yl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Or(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),Gs(this),yl(this))};function Oo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function yl(o){o.g=new Yt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Nt(o.qa);pe(u,"RID","rpc"),pe(u,"SID",o.K),pe(u,"AID",o.T),pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(u,"TO",o.ja),pe(u,"TYPE","xmlhttp"),zr(o,u),o.m&&o.o&&Do(u,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=qs(Nt(u)),p.m=null,p.P=!0,Wc(p,o)}n.Za=function(){this.C!=null&&(this.C=null,Gs(this),Vo(this),We(19))};function Qs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function vl(o,u){var p=null;if(o.g==u){Qs(o),Oo(o),o.g=null;var g=2}else if(Co(o.h,u))p=u.D,Yc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){p=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;g=x(),De(g,new Bc(g,p)),Ks(o)}else _l(o);else if(k=u.s,k==3||k==0&&0<u.X||!(g==1&&am(o,u)||g==2&&Vo(o)))switch(p&&0<p.length&&(u=o.h,u.i=u.i.concat(p)),k){case 1:Sn(o,5);break;case 4:Sn(o,10);break;case 3:Sn(o,6);break;default:Sn(o,2)}}}function wl(o,u){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*u}function Sn(o,u){if(o.j.info("Error code "+u),u==2){var p=m(o.fb,o),g=o.Xa;const k=!g;g=new An(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bs(g,"https"),qs(g),k?em(g.toString(),p):tm(g.toString(),p)}else We(2);o.G=0,o.l&&o.l.sa(u),El(o),pl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function El(o){if(o.G=0,o.ka=[],o.l){const u=Jc(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ka,u),S(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Tl(o,u,p){var g=p instanceof An?Nt(p):new An(p);if(g.g!="")u&&(g.g=u+"."+g.g),js(g,g.s);else{var k=c.location;g=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var C=new An(null);g&&Bs(C,g),u&&(C.g=u),k&&js(C,k),p&&(C.l=p),g=C}return p=o.D,u=o.ya,p&&u&&pe(g,p,u),pe(g,"VER",o.la),zr(o,g),g}function Il(o,u,p){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ve(new zs({eb:p})):new ve(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bl(){}n=bl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xs(){}Xs.prototype.g=function(o,u){return new nt(o,u)};function nt(o,u){ge.call(this),this.g=new fl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!O(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!O(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new nr(this)}R(nt,ge),nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nt.prototype.close=function(){Mo(this.g)},nt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=Tn(o),o=p);u.i.push(new zp(u.Ya++,o)),u.G==3&&Ks(u)},nt.prototype.N=function(){this.g.l=null,delete this.j,Mo(this.g),delete this.g,nt.aa.N.call(this)};function Al(o){vt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const p in u){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(Al,vt);function Sl(){Zn.call(this),this.status=1}R(Sl,Zn);function nr(o){this.g=o}R(nr,bl),nr.prototype.ua=function(){De(this.g,"a")},nr.prototype.ta=function(o){De(this.g,new Al(o))},nr.prototype.sa=function(o){De(this.g,new Sl)},nr.prototype.ra=function(){De(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,nt.prototype.send=nt.prototype.o,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,dd=function(){return new Xs},hd=function(){return x()},ud=Qe,la={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fs.NO_ERROR=0,Fs.TIMEOUT=8,Fs.HTTP_ERROR=6,hi=Fs,jc.COMPLETE="complete",ld=jc,Vr.EventType=In,In.OPEN="a",In.CLOSE="b",In.ERROR="c",In.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Yr=Vr,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,cd=ve}).apply(typeof Zs<"u"?Zs:typeof self<"u"?self:typeof window<"u"?window:{});const eu="@firebase/firestore";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let br="10.14.0";/**
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
 */const On=new Fa("@firebase/firestore");function Gr(){return On.logLevel}function B(n,...e){if(On.logLevel<=re.DEBUG){const t=e.map(Ba);On.debug(`Firestore (${br}): ${n}`,...t)}}function $t(n,...e){if(On.logLevel<=re.ERROR){const t=e.map(Ba);On.error(`Firestore (${br}): ${n}`,...t)}}function pr(n,...e){if(On.logLevel<=re.WARN){const t=e.map(Ba);On.warn(`Firestore (${br}): ${n}`,...t)}}function Ba(n){if(typeof n=="string")return n;try{/**
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
 */function W(n="Unexpected state"){const e=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: `+n;throw $t(e),new Error(e)}function le(n,e){n||W()}function K(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class fd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(je.UNAUTHENTICATED))}shutdown(){}}class f_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class p_{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ft,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ft)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new fd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new je(e)}}class m_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class g_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new m_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class __{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){le(this.o===void 0);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string"),this.R=t.token,new __(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function v_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class pd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=v_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(n,e){return n<e?-1:n>e?1:0}function mr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Se{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Se(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Se(0,0))}static max(){return new G(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ls{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ls.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ls?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class me extends ls{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new me(t)}static emptyPath(){return new me([])}}const w_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends ls{construct(e,t,r){return new Oe(e,t,r)}static isValidIdentifier(e){return w_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(me.fromString(e))}static fromName(e){return new j(me.fromString(e).popFirst(5))}static empty(){return new j(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new me(e.slice()))}}function E_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Se(t+1,0):new Se(t,r));return new pn(s,j.empty(),e)}function T_(n){return new pn(n.readTime,n.key,-1)}class pn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pn(G.min(),j.empty(),-1)}static max(){return new pn(G.max(),j.empty(),-1)}}function I_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}/**
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
 */const b_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vs(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==b_)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function S_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ws(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ja{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ja.oe=-1;function Yi(n){return n==null}function ki(n){return n===0&&1/n==-1/0}function R_(n){return typeof n=="number"&&Number.isInteger(n)&&!ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function tu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function md(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ye{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ei(this.root,e,this.comparator,!0)}}class ei{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nu(this.data.getIterator())}getIteratorFrom(e){return new nu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class nu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class st{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new st([])}unionWith(e){let t=new Le(Oe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class gd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gd("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const k_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(n){if(le(!!n),typeof n=="string"){let e=0;const t=k_.exec(n);if(le(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ln(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
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
 */function qa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function za(n){const e=n.mapValue.fields.__previous_value__;return qa(e)?za(e):e}function us(n){const e=mn(n.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class P_{constructor(e,t,r,s,i,a,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class hs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ti={mapValue:{}};function xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qa(n)?4:N_(n)?9007199254740991:C_(n)?10:11:W()}function At(n,e){if(n===e)return!0;const t=xn(n);if(t!==xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return us(n).isEqual(us(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=mn(s.timestampValue),c=mn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Ln(s.bytesValue).isEqual(Ln(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return we(s.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return we(s.integerValue)===we(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=we(s.doubleValue),c=we(i.doubleValue);return a===c?ki(a)===ki(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return mr(n.arrayValue.values||[],e.arrayValue.values||[],At);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(tu(a)!==tu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!At(a[l],c[l])))return!1;return!0}(n,e);default:return W()}}function ds(n,e){return(n.values||[]).find(t=>At(t,e))!==void 0}function gr(n,e){if(n===e)return 0;const t=xn(n),r=xn(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=we(i.integerValue||i.doubleValue),l=we(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return ru(n.timestampValue,e.timestampValue);case 4:return ru(us(n),us(e));case 5:return oe(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Ln(i),l=Ln(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=oe(c[h],l[h]);if(f!==0)return f}return oe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=oe(we(i.latitude),we(a.latitude));return c!==0?c:oe(we(i.longitude),we(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return su(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const _=i.fields||{},m=a.fields||{},T=(c=_.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,N=oe(((h=T?.values)===null||h===void 0?void 0:h.length)||0,((f=R?.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:su(T,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ti.mapValue&&a===ti.mapValue)return 0;if(i===ti.mapValue)return 1;if(a===ti.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let _=0;_<l.length&&_<f.length;++_){const m=oe(l[_],f[_]);if(m!==0)return m;const T=gr(c[l[_]],h[f[_]]);if(T!==0)return T}return oe(l.length,f.length)}(n.mapValue,e.mapValue);default:throw W()}}function ru(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);const t=mn(n),r=mn(e),s=oe(t.seconds,r.seconds);return s!==0?s:oe(t.nanos,r.nanos)}function su(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=gr(t[s],r[s]);if(i)return i}return oe(t.length,r.length)}function _r(n){return ua(n)}function ua(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ln(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ua(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ua(t.fields[a])}`;return s+"}"}(n.mapValue):W()}function iu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ha(n){return!!n&&"integerValue"in n}function Wa(n){return!!n&&"arrayValue"in n}function ou(n){return!!n&&"nullValue"in n}function au(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function di(n){return!!n&&"mapValue"in n}function C_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ns(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ns(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ns(n.arrayValue.values[t]);return e}return Object.assign({},n)}function N_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!di(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ns(t)}setAll(e){let t=Oe.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ns(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());di(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];di(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xe(ns(this.value))}}function _d(n){const e=[];return Bn(n.fields,(t,r)=>{const s=new Oe([t]);if(di(r)){const i=_d(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new st(e)}/**
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
 */class qe{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new qe(e,0,G.min(),G.min(),G.min(),Xe.empty(),0)}static newFoundDocument(e,t,r,s){return new qe(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new qe(e,2,t,G.min(),G.min(),Xe.empty(),0)}static newUnknownDocument(e,t){return new qe(e,3,t,G.min(),G.min(),Xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pi{constructor(e,t){this.position=e,this.inclusive=t}}function cu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),t.key):r=gr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!At(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function D_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class yd{}class Ae extends yd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new V_(e,t,r):t==="array-contains"?new x_(e,r):t==="in"?new F_(e,r):t==="not-in"?new U_(e,r):t==="array-contains-any"?new $_(e,r):new Ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new O_(e,r):new L_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(gr(t,this.value)):t!==null&&xn(this.value)===xn(t)&&this.matchesComparison(gr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends yd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new pt(e,t)}matches(e){return vd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vd(n){return n.op==="and"}function wd(n){return M_(n)&&vd(n)}function M_(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function da(n){if(n instanceof Ae)return n.field.canonicalString()+n.op.toString()+_r(n.value);if(wd(n))return n.filters.map(e=>da(e)).join(",");{const e=n.filters.map(t=>da(t)).join(",");return`${n.op}(${e})`}}function Ed(n,e){return n instanceof Ae?function(r,s){return s instanceof Ae&&r.op===s.op&&r.field.isEqual(s.field)&&At(r.value,s.value)}(n,e):n instanceof pt?function(r,s){return s instanceof pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ed(a,s.filters[c]),!0):!1}(n,e):void W()}function Td(n){return n instanceof Ae?function(t){return`${t.field.canonicalString()} ${t.op} ${_r(t.value)}`}(n):n instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(Td).join(" ,")+"}"}(n):"Filter"}class V_ extends Ae{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class O_ extends Ae{constructor(e,t){super(e,"in",t),this.keys=Id("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class L_ extends Ae{constructor(e,t){super(e,"not-in",t),this.keys=Id("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Id(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class x_ extends Ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wa(t)&&ds(t.arrayValue,this.value)}}class F_ extends Ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ds(this.value.arrayValue,t)}}class U_ extends Ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ds(this.value.arrayValue,t)}}class $_ extends Ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ds(this.value.arrayValue,r))}}/**
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
 */class B_{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function uu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new B_(n,e,t,r,s,i,a)}function Ha(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>da(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>_r(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>_r(r)).join(",")),e.ue=t}return e.ue}function Ga(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!D_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ed(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lu(n.startAt,e.startAt)&&lu(n.endAt,e.endAt)}function fa(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Es{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function j_(n,e,t,r,s,i,a,c){return new Es(n,e,t,r,s,i,a,c)}function Ji(n){return new Es(n)}function hu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bd(n){return n.collectionGroup!==null}function rs(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Le(Oe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ci(i,r))}),t.has(Oe.keyField().canonicalString())||e.ce.push(new Ci(Oe.keyField(),r))}return e.ce}function Et(n){const e=K(n);return e.le||(e.le=q_(e,rs(n))),e.le}function q_(n,e){if(n.limitType==="F")return uu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ci(s.field,i)});const t=n.endAt?new Pi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Pi(n.startAt.position,n.startAt.inclusive):null;return uu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function pa(n,e){const t=n.filters.concat([e]);return new Es(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ni(n,e,t){return new Es(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zi(n,e){return Ga(Et(n),Et(e))&&n.limitType===e.limitType}function Ad(n){return`${Ha(Et(n))}|lt:${n.limitType}`}function ir(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Td(s)).join(", ")}]`),Yi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>_r(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>_r(s)).join(",")),`Target(${r})`}(Et(n))}; limitType=${n.limitType})`}function eo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of rs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=cu(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,rs(r),s)||r.endAt&&!function(a,c,l){const h=cu(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,rs(r),s))}(n,e)}function z_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Sd(n){return(e,t)=>{let r=!1;for(const s of rs(n)){const i=W_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function W_(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?gr(l,h):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class Ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return md(this.inner)}size(){return this.innerSize}}/**
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
 */const H_=new ye(j.comparator);function Bt(){return H_}const Rd=new ye(j.comparator);function Jr(...n){let e=Rd;for(const t of n)e=e.insert(t.key,t);return e}function kd(n){let e=Rd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Pn(){return ss()}function Pd(){return ss()}function ss(){return new Ar(n=>n.toString(),(n,e)=>n.isEqual(e))}const G_=new ye(j.comparator),K_=new Le(j.comparator);function ne(...n){let e=K_;for(const t of n)e=e.add(t);return e}const Q_=new Le(oe);function X_(){return Q_}/**
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
 */function Ka(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(e)?"-0":e}}function Cd(n){return{integerValue:""+n}}function Y_(n,e){return R_(e)?Cd(e):Ka(n,e)}/**
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
 */class to{constructor(){this._=void 0}}function J_(n,e,t){return n instanceof Di?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qa(i)&&(i=za(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof fs?Dd(n,e):n instanceof ps?Md(n,e):function(s,i){const a=Nd(s,i),c=du(a)+du(s.Pe);return ha(a)&&ha(s.Pe)?Cd(c):Ka(s.serializer,c)}(n,e)}function Z_(n,e,t){return n instanceof fs?Dd(n,e):n instanceof ps?Md(n,e):t}function Nd(n,e){return n instanceof Mi?function(r){return ha(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Di extends to{}class fs extends to{constructor(e){super(),this.elements=e}}function Dd(n,e){const t=Vd(e);for(const r of n.elements)t.some(s=>At(s,r))||t.push(r);return{arrayValue:{values:t}}}class ps extends to{constructor(e){super(),this.elements=e}}function Md(n,e){let t=Vd(e);for(const r of n.elements)t=t.filter(s=>!At(s,r));return{arrayValue:{values:t}}}class Mi extends to{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function du(n){return we(n.integerValue||n.doubleValue)}function Vd(n){return Wa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ey(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof fs&&s instanceof fs||r instanceof ps&&s instanceof ps?mr(r.elements,s.elements,At):r instanceof Mi&&s instanceof Mi?At(r.Pe,s.Pe):r instanceof Di&&s instanceof Di}(n.transform,e.transform)}class ty{constructor(e,t){this.version=e,this.transformResults=t}}class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class no{}function Od(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ro(n.key,Ye.none()):new Ts(n.key,n.data,Ye.none());{const t=n.data,r=Xe.empty();let s=new Le(Oe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new _n(n.key,r,new st(s.toArray()),Ye.none())}}function ny(n,e,t){n instanceof Ts?function(s,i,a){const c=s.value.clone(),l=pu(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof _n?function(s,i,a){if(!fi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=pu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Ld(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function is(n,e,t,r){return n instanceof Ts?function(i,a,c,l){if(!fi(i.precondition,a))return c;const h=i.value.clone(),f=mu(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof _n?function(i,a,c,l){if(!fi(i.precondition,a))return c;const h=mu(i.fieldTransforms,l,a),f=a.data;return f.setAll(Ld(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(i,a,c){return fi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function ry(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Nd(r.transform,s||null);i!=null&&(t===null&&(t=Xe.empty()),t.set(r.field,i))}return t||null}function fu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mr(r,s,(i,a)=>ey(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ts extends no{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _n extends no{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ld(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function pu(n,e,t){const r=new Map;le(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Z_(a,c,t[s]))}return r}function mu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,J_(i,a,e))}return r}class ro extends no{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sy extends no{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ny(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=is(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=is(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Pd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Od(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(t,r)=>fu(t,r))&&mr(this.baseMutations,e.baseMutations,(t,r)=>fu(t,r))}}class Qa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){le(e.mutations.length===r.length);let s=function(){return G_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Qa(e,t,r,s)}}/**
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
 */class oy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ay{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ie,se;function cy(n){switch(n){default:return W();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function xd(n){if(n===void 0)return $t("GRPC error has no .code"),D.UNKNOWN;switch(n){case Ie.OK:return D.OK;case Ie.CANCELLED:return D.CANCELLED;case Ie.UNKNOWN:return D.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return D.INTERNAL;case Ie.UNAVAILABLE:return D.UNAVAILABLE;case Ie.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ie.NOT_FOUND:return D.NOT_FOUND;case Ie.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ie.ABORTED:return D.ABORTED;case Ie.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ie.DATA_LOSS:return D.DATA_LOSS;default:return W()}}(se=Ie||(Ie={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ly(){return new TextEncoder}/**
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
 */const uy=new Cn([4294967295,4294967295],0);function gu(n){const e=ly().encode(n),t=new ad;return t.update(e),new Uint8Array(t.digest())}function _u(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cn([t,r],0),new Cn([s,i],0)]}class Xa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Zr(`Invalid padding: ${t}`);if(r<0)throw new Zr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Zr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Cn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Cn.fromNumber(r)));return s.compare(uy)===1&&(s=new Cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=gu(e),[r,s]=_u(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Xa(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=gu(e),[r,s]=_u(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class so{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Is.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new so(G.min(),s,new ye(oe),Bt(),ne())}}class Is{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Is(r,t,ne(),ne(),ne())}}/**
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
 */class pi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Fd{constructor(e,t){this.targetId=e,this.me=t}}class Ud{constructor(e,t,r=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class yu{constructor(){this.fe=0,this.ge=wu(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:W()}}),new Is(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=wu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hy{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bt(),this.qe=vu(),this.Qe=new ye(oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(fa(i))if(r===0){const a=new j(i.path);this.Ue(t,a,qe.newNoDocument(a,G.min()))}else le(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Ln(r).toUint8Array()}catch(l){if(l instanceof gd)return pr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Xa(a,s,i)}catch(l){return pr(l instanceof Zr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&fa(c.target)){const l=new j(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,qe.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ne();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new so(e,t,this.Qe,this.ke,r);return this.ke=Bt(),this.qe=vu(),this.Qe=new ye(oe),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new yu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Le(oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function vu(){return new ye(j.comparator)}function wu(){return new ye(j.comparator)}const dy={asc:"ASCENDING",desc:"DESCENDING"},fy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},py={and:"AND",or:"OR"};class my{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ma(n,e){return n.useProto3Json||Yi(e)?e:{value:e}}function Vi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $d(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gy(n,e){return Vi(n,e.toTimestamp())}function Tt(n){return le(!!n),G.fromTimestamp(function(t){const r=mn(t);return new Se(r.seconds,r.nanos)}(n))}function Ya(n,e){return ga(n,e).canonicalString()}function ga(n,e){const t=function(s){return new me(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Bd(n){const e=me.fromString(n);return le(Hd(e)),e}function _a(n,e){return Ya(n.databaseId,e.path)}function zo(n,e){const t=Bd(e);if(t.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(qd(t))}function jd(n,e){return Ya(n.databaseId,e)}function _y(n){const e=Bd(n);return e.length===4?me.emptyPath():qd(e)}function ya(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qd(n){return le(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Eu(n,e,t){return{name:_a(n,e),fields:t.value.mapValue.fields}}function yy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(le(f===void 0||typeof f=="string"),xe.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?D.UNKNOWN:xd(h.code);return new F(f,h.message||"")}(a);t=new Ud(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zo(n,r.document.name),i=Tt(r.document.updateTime),a=r.document.createTime?Tt(r.document.createTime):G.min(),c=new Xe({mapValue:{fields:r.document.fields}}),l=qe.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new pi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zo(n,r.document),i=r.readTime?Tt(r.readTime):G.min(),a=qe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new pi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zo(n,r.document),i=r.removedTargetIds||[];t=new pi([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ay(s,i),c=r.targetId;t=new Fd(c,a)}}return t}function vy(n,e){let t;if(e instanceof Ts)t={update:Eu(n,e.key,e.value)};else if(e instanceof ro)t={delete:_a(n,e.key)};else if(e instanceof _n)t={update:Eu(n,e.key,e.data),updateMask:ky(e.fieldMask)};else{if(!(e instanceof sy))return W();t={verify:_a(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Di)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ps)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Mi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(n,e.precondition)),t}function wy(n,e){return n&&n.length>0?(le(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Tt(s.updateTime):Tt(i);return a.isEqual(G.min())&&(a=Tt(i)),new ty(a,s.transformResults||[])}(t,e))):[]}function Ey(n,e){return{documents:[jd(n,e.path)]}}function Ty(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=jd(n,s);const i=function(h){if(h.length!==0)return Wd(pt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:or(m.field),direction:Ay(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ma(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function Iy(n){let e=_y(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){le(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(_){const m=zd(_);return m instanceof pt&&wd(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(m=>function(R){return new Ci(ar(R.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(_){let m;return m=typeof _=="object"?_.value:_,Yi(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(_){const m=!!_.before,T=_.values||[];return new Pi(T,m)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const m=!_.before,T=_.values||[];return new Pi(T,m)}(t.endAt)),j_(e,s,a,i,c,"F",l,h)}function by(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ar(t.unaryFilter.field);return Ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ar(t.unaryFilter.field);return Ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ar(t.unaryFilter.field);return Ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ar(t.unaryFilter.field);return Ae.create(a,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(t){return Ae.create(ar(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(r=>zd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W()}}(t.compositeFilter.op))}(n):W()}function Ay(n){return dy[n]}function Sy(n){return fy[n]}function Ry(n){return py[n]}function or(n){return{fieldPath:n.canonicalString()}}function ar(n){return Oe.fromServerFormat(n.fieldPath)}function Wd(n){return n instanceof Ae?function(t){if(t.op==="=="){if(au(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NAN"}};if(ou(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(au(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NAN"}};if(ou(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(t.field),op:Sy(t.op),value:t.value}}}(n):n instanceof pt?function(t){const r=t.getFilters().map(s=>Wd(s));return r.length===1?r[0]:{compositeFilter:{op:Ry(t.op),filters:r}}}(n):W()}function ky(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class an{constructor(e,t,r,s,i=G.min(),a=G.min(),c=xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new an(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Py{constructor(e){this.ct=e}}function Cy(n){const e=Iy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ni(e,e.limit,"L"):e}/**
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
 */class Ny{constructor(){this.un=new Dy}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(pn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Dy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Le(me.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(me.comparator)).toArray()}}/**
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
 */class yr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new yr(0)}static kn(){return new yr(-1)}}/**
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
 */class My{constructor(){this.changes=new Ar(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Vy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Oy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&is(r.mutation,s,st.empty(),Se.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=Pn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Jr();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Pn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Bt();const a=ss(),c=function(){return ss()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof _n)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),is(f.mutation,h,f.mutation.getFieldMask(),Se.now())):a.set(h.key,st.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var _;return c.set(h,new Vy(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ss();let s=new ye((a,c)=>a-c),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||st.empty();f=c.applyToLocalView(h,f),r.set(l,f);const _=(s.get(c.batchId)||ne()).add(l);s=s.insert(c.batchId,_)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,_=Pd();f.forEach(m=>{if(!i.has(m)){const T=Od(t.get(m),r.get(m));T!==null&&_.set(m,T),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(Pn());let c=-1,l=i;return a.next(h=>V.forEach(h,(f,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ne())).next(f=>({batchId:c,changes:kd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let s=Jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Jr();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,l=>{const h=function(_,m){return new Es(m,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((_,m)=>{a=a.insert(_,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,qe.newInvalidDocument(f)))});let c=Jr();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&is(f.mutation,h,st.empty(),Se.now()),eo(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class Ly{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Tt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Cy(s.bundledQuery),readTime:Tt(s.readTime)}}(t)),V.resolve()}}/**
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
 */class xy{constructor(){this.overlays=new ye(j.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Pn(),i=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ye((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Pn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Pn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return V.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new oy(t,r));let i=this.Ir.get(t);i===void 0&&(i=ne(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Fy{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Ja{constructor(){this.Tr=new Le(ke.Er),this.dr=new Le(ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ke(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ke(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new j(new me([])),r=new ke(t,e),s=new ke(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new j(new me([])),r=new ke(t,e),s=new ke(t,e+1);let i=ne();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ke(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return j.comparator(e.key,t.key)||oe(e.wr,t.wr)}static Ar(e,t){return oe(e.wr,t.wr)||j.comparator(e.key,t.key)}}/**
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
 */class Uy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Le(ke.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new iy(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ke(t,0),s=new ke(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(oe);return t.forEach(s=>{const i=new ke(s,0),a=new ke(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const a=new ke(new j(i),0);let c=new Le(oe);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){le(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,s=>{const i=new ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ke(t,0),s=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class $y{constructor(e){this.Mr=e,this.docs=function(){return new ye(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let r=Bt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qe.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Bt();const a=t.path,c=new j(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||I_(T_(f),r)<=0||(s.has(f.key)||eo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){W()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new By(this)}getSize(e){return V.resolve(this.size)}}class By extends My{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class jy{constructor(e){this.persistence=e,this.Nr=new Ar(t=>Ha(t),Ga),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ja,this.targetCount=0,this.kr=yr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new yr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
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
 */class qy{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ja(0),this.Kr=!1,this.Kr=!0,this.$r=new Fy,this.referenceDelegate=e(this),this.Ur=new jy(this),this.indexManager=new Ny,this.remoteDocumentCache=function(s){return new $y(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Py(t),this.Gr=new Ly(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Uy(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new zy(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class zy extends A_{constructor(e){super(),this.currentSequenceNumber=e}}class Za{constructor(e){this.persistence=e,this.Jr=new Ja,this.Yr=null}static Zr(e){return new Za(e)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=j.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,G.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class ec{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ec(e,t.fromCache,r,s)}}/**
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
 */class Wy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Gm()?8:S_(ze())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Wy;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Gr()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ir(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Gr()<=re.DEBUG&&B("QueryEngine","Query:",ir(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Gr()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ir(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Et(t))):V.resolve())}Yi(e,t){if(hu(t))return V.resolve(null);let r=Et(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ni(t,null,"F"),r=Et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ne(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,c);return this.ns(t,h,a,l.readTime)?this.Yi(e,Ni(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return hu(t)||s.isEqual(G.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?V.resolve(null):(Gr()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ir(t)),this.rs(e,a,t,E_(s,-1)).next(c=>c))})}ts(e,t){let r=new Le(Sd(e));return t.forEach((s,i)=>{eo(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Gr()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ir(t)),this.Ji.getDocumentsMatchingQuery(e,t,pn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class Gy{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ye(oe),this._s=new Ar(i=>Ha(i),Ga),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Oy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Ky(n,e,t,r){return new Gy(n,e,t,r)}async function Gd(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=ne();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function Qy(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const _=h.batch,m=_.keys();let T=V.resolve();return m.forEach(R=>{T=T.next(()=>f.getEntry(l,R)).next(N=>{const S=h.docVersions.get(R);le(S!==null),N.version.compareTo(S)<0&&(_.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,_))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ne();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Kd(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Xy(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,_)=>{const m=s.get(_);if(!m)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,_)));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?T=T.withResumeToken(xe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(_,T),function(N,S,M){return N.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,T,f)&&c.push(t.Ur.updateTargetData(i,T))});let l=Bt(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Yy(i,a,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(G.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(_=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function Yy(n,e,t){let r=ne(),s=ne();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Bt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function Jy(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zy(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new an(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function va(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ws(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Tu(n,e,t){const r=K(n);let s=G.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const _=K(l),m=_._s.get(f);return m!==void 0?V.resolve(_.os.get(m)):_.Ur.getTargetData(h,f)}(r,a,Et(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:G.min(),t?i:ne())).next(c=>(ev(r,z_(e),c),{documents:c,Ts:i})))}function ev(n,e,t){let r=n.us.get(e)||G.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Iu{constructor(){this.activeTargetIds=X_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tv{constructor(){this.so=new Iu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Iu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nv{_o(e){}shutdown(){}}/**
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
 */class bu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ni=null;function Wo(){return ni===null?ni=function(){return 268435456+Math.round(2147483648*Math.random())}():ni++,"0x"+ni.toString(16)}/**
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
 */const rv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Be="WebChannelConnection";class iv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=Wo(),l=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,l,h,s).then(f=>(B("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw pr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+br}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=rv[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Wo();return new Promise((a,c)=>{const l=new cd;l.setWithCredentials(!0),l.listenOnce(ld.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case hi.NO_ERROR:const f=l.getResponseJson();B(Be,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case hi.TIMEOUT:B(Be,`RPC '${e}' ${i} timed out`),c(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case hi.HTTP_ERROR:const _=l.getStatus();if(B(Be,`RPC '${e}' ${i} failed with status:`,_,"response text:",l.getResponseText()),_>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m?.error;if(T&&T.status&&T.message){const R=function(S){const M=S.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(M)>=0?M:D.UNKNOWN}(T.status);c(new F(R,T.message))}else c(new F(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new F(D.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{B(Be,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);B(Be,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=Wo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dd(),c=hd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");B(Be,`Creating RPC '${e}' stream ${s}: ${f}`,l);const _=a.createWebChannel(f,l);let m=!1,T=!1;const R=new sv({Io:S=>{T?B(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(B(Be,`Opening RPC '${e}' stream ${s} transport.`),_.open(),m=!0),B(Be,`RPC '${e}' stream ${s} sending:`,S),_.send(S))},To:()=>_.close()}),N=(S,M,O)=>{S.listen(M,$=>{try{O($)}catch(H){setTimeout(()=>{throw H},0)}})};return N(_,Yr.EventType.OPEN,()=>{T||(B(Be,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),N(_,Yr.EventType.CLOSE,()=>{T||(T=!0,B(Be,`RPC '${e}' stream ${s} transport closed`),R.So())}),N(_,Yr.EventType.ERROR,S=>{T||(T=!0,pr(Be,`RPC '${e}' stream ${s} transport errored:`,S),R.So(new F(D.UNAVAILABLE,"The operation could not be completed")))}),N(_,Yr.EventType.MESSAGE,S=>{var M;if(!T){const O=S.data[0];le(!!O);const $=O,H=$.error||((M=$[0])===null||M===void 0?void 0:M.error);if(H){B(Be,`RPC '${e}' stream ${s} received error:`,H);const X=H.status;let Z=function(E){const b=Ie[E];if(b!==void 0)return xd(b)}(X),I=H.message;Z===void 0&&(Z=D.INTERNAL,I="Unknown error status: "+X+" with message "+H.message),T=!0,R.So(new F(Z,I)),_.close()}else B(Be,`RPC '${e}' stream ${s} received:`,O),R.bo(O)}}),N(c,ud.STAT_EVENT,S=>{S.stat===la.PROXY?B(Be,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===la.NOPROXY&&B(Be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Ho(){return typeof document<"u"?document:null}/**
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
 */function io(n){return new my(n,!0)}/**
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
 */class Qd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Xd{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Qd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?($t(t.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ov extends Xd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=yy(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?Tt(a.readTime):G.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=ya(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=fa(l)?{documents:Ey(i,l)}:{query:Ty(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$d(i,a.resumeToken);const h=ma(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=Vi(i,a.snapshotVersion.toTimestamp());const h=ma(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=by(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=ya(this.serializer),t.removeTarget=e,this.a_(t)}}class av extends Xd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=wy(e.writeResults,e.commitTime),r=Tt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=ya(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vy(this.serializer,r))};this.a_(t)}}/**
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
 */class cv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ga(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,ga(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class lv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class uv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{jn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=K(l);h.L_.add(4),await bs(h),h.q_.set("Unknown"),h.L_.delete(4),await oo(h)}(this))})}),this.q_=new lv(r,s)}}async function oo(n){if(jn(n))for(const e of n.B_)await e(!0)}async function bs(n){for(const e of n.B_)await e(!1)}function Yd(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),sc(t)?rc(t):Sr(t).r_()&&nc(t,e))}function tc(n,e){const t=K(n),r=Sr(t);t.N_.delete(e),r.r_()&&Jd(t,e),t.N_.size===0&&(r.r_()?r.o_():jn(t)&&t.q_.set("Unknown"))}function nc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sr(n).A_(e)}function Jd(n,e){n.Q_.xe(e),Sr(n).R_(e)}function rc(n){n.Q_=new hy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Sr(n).start(),n.q_.v_()}function sc(n){return jn(n)&&!Sr(n).n_()&&n.N_.size>0}function jn(n){return K(n).L_.size===0}function Zd(n){n.Q_=void 0}async function hv(n){n.q_.set("Online")}async function dv(n){n.N_.forEach((e,t)=>{nc(n,e)})}async function fv(n,e){Zd(n),sc(n)?(n.q_.M_(e),rc(n)):n.q_.set("Unknown")}async function pv(n,e,t){if(n.q_.set("Online"),e instanceof Ud&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oi(n,r)}else if(e instanceof pi?n.Q_.Ke(e):e instanceof Fd?n.Q_.He(e):n.Q_.We(e),!t.isEqual(G.min()))try{const r=await Kd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),Jd(i,l);const _=new an(f.target,l,h,f.sequenceNumber);nc(i,_)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Oi(n,r)}}async function Oi(n,e,t){if(!ws(e))throw e;n.L_.add(1),await bs(n),n.q_.set("Offline"),t||(t=()=>Kd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await oo(n)})}function ef(n,e){return e().catch(t=>Oi(n,t,e))}async function ao(n){const e=K(n),t=gn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mv(e);)try{const s=await Jy(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,gv(e,s)}catch(s){await Oi(e,s)}tf(e)&&nf(e)}function mv(n){return jn(n)&&n.O_.length<10}function gv(n,e){n.O_.push(e);const t=gn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function tf(n){return jn(n)&&!gn(n).n_()&&n.O_.length>0}function nf(n){gn(n).start()}async function _v(n){gn(n).p_()}async function yv(n){const e=gn(n);for(const t of n.O_)e.m_(t.mutations)}async function vv(n,e,t){const r=n.O_.shift(),s=Qa.from(r,e,t);await ef(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ao(n)}async function wv(n,e){e&&gn(n).V_&&await async function(r,s){if(function(a){return cy(a)&&a!==D.ABORTED}(s.code)){const i=r.O_.shift();gn(r).s_(),await ef(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ao(r)}}(n,e),tf(n)&&nf(n)}async function Au(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=jn(t);t.L_.add(3),await bs(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await oo(t)}async function Ev(n,e){const t=K(n);e?(t.L_.delete(2),await oo(t)):e||(t.L_.add(2),await bs(t),t.q_.set("Unknown"))}function Sr(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new ov(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:hv.bind(null,n),Ro:dv.bind(null,n),mo:fv.bind(null,n),d_:pv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),sc(n)?rc(n):n.q_.set("Unknown")):(await n.K_.stop(),Zd(n))})),n.K_}function gn(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new av(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_v.bind(null,n),mo:wv.bind(null,n),f_:yv.bind(null,n),g_:vv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ao(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ic{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ic(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oc(n,e){if($t("AsyncQueue",`${e}: ${n}`),ws(n))return new F(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class lr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Jr(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new lr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Su{constructor(){this.W_=new ye(j.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):W():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class vr{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new vr(e,t,lr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Tv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Iv{constructor(){this.queries=Ru(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=Ru(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new F(D.ABORTED,"Firestore shutting down"))}}function Ru(){return new Ar(n=>Ad(n),Zi)}async function ac(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Tv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=oc(a,`Initialization of query '${ir(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&lc(t)}async function cc(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function bv(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&lc(t)}function Av(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function lc(n){n.Y_.forEach(e=>{e.next()})}var wa,ku;(ku=wa||(wa={})).ea="default",ku.Cache="cache";class uc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wa.Cache}}/**
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
 */class rf{constructor(e){this.key=e}}class sf{constructor(e){this.key=e}}class Sv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Sd(e),this.Ra=new lr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Su,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,_)=>{const m=s.get(f),T=eo(this.query,_)?_:null,R=!!m&&this.mutatedKeys.has(m.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let S=!1;m&&T?m.data.isEqual(T.data)?R!==N&&(r.track({type:3,doc:T}),S=!0):this.ga(m,T)||(r.track({type:2,doc:T}),S=!0,(l&&this.Aa(T,l)>0||h&&this.Aa(T,h)<0)&&(c=!0)):!m&&T?(r.track({type:0,doc:T}),S=!0):m&&!T&&(r.track({type:1,doc:m}),S=!0,(l||h)&&(c=!0)),S&&(T?(a=a.add(T),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,_)=>function(T,R){const N=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return N(T)-N(R)}(f.type,_.type)||this.Aa(f.doc,_.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,a.length!==0||h?{snapshot:new vr(this.query,e.Ra,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Su,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new sf(r))}),this.da.forEach(r=>{e.has(r)||t.push(new rf(r))}),t}ba(e){this.Ta=e.Ts,this.da=ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return vr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Rv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class kv{constructor(e){this.key=e,this.va=!1}}class Pv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ar(c=>Ad(c),Zi),this.Ma=new Map,this.xa=new Set,this.Oa=new ye(j.comparator),this.Na=new Map,this.La=new Ja,this.Ba={},this.ka=new Map,this.qa=yr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Cv(n,e,t=!0){const r=hf(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await of(r,e,t,!0),s}async function Nv(n,e){const t=hf(n);await of(t,e,!0,!1)}async function of(n,e,t,r){const s=await Zy(n.localStore,Et(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Dv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Yd(n.remoteStore,s),c}async function Dv(n,e,t,r,s){n.Ka=(_,m,T)=>async function(N,S,M,O){let $=S.view.ma(M);$.ns&&($=await Tu(N.localStore,S.query,!1).then(({documents:I})=>S.view.ma(I,$)));const H=O&&O.targetChanges.get(S.targetId),X=O&&O.targetMismatches.get(S.targetId)!=null,Z=S.view.applyChanges($,N.isPrimaryClient,H,X);return Cu(N,S.targetId,Z.wa),Z.snapshot}(n,_,m,T);const i=await Tu(n.localStore,e,!0),a=new Sv(e,i.Ts),c=a.ma(i.documents),l=Is.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Cu(n,t,h.wa);const f=new Rv(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Mv(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Zi(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await va(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&tc(r.remoteStore,s.targetId),Ea(r,s.targetId)}).catch(vs)):(Ea(r,s.targetId),await va(r.localStore,s.targetId,!0))}async function Vv(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),tc(t.remoteStore,r.targetId))}async function Ov(n,e,t){const r=jv(n);try{const s=await function(a,c){const l=K(a),h=Se.now(),f=c.reduce((T,R)=>T.add(R.key),ne());let _,m;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=Bt(),N=ne();return l.cs.getEntries(T,f).next(S=>{R=S,R.forEach((M,O)=>{O.isValidDocument()||(N=N.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,R)).next(S=>{_=S;const M=[];for(const O of c){const $=ry(O,_.get(O.key).overlayedDocument);$!=null&&M.push(new _n(O.key,$,_d($.value.mapValue),Ye.exists(!0)))}return l.mutationQueue.addMutationBatch(T,h,M,c)}).next(S=>{m=S;const M=S.applyToLocalDocumentSet(_,N);return l.documentOverlayCache.saveOverlays(T,S.batchId,M)})}).then(()=>({batchId:m.batchId,changes:kd(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Ba[a.currentUser.toKey()];h||(h=new ye(oe)),h=h.insert(c,l),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await As(r,s.changes),await ao(r.remoteStore)}catch(s){const i=oc(s,"Failed to persist write");t.reject(i)}}async function af(n,e){const t=K(n);try{const r=await Xy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?le(a.va):s.removedDocuments.size>0&&(le(a.va),a.va=!1))}),await As(t,r,e)}catch(r){await vs(r)}}function Pu(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=K(a);l.onlineState=c;let h=!1;l.queries.forEach((f,_)=>{for(const m of _.j_)m.Z_(c)&&(h=!0)}),h&&lc(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lv(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ye(j.comparator);a=a.insert(i,qe.newNoDocument(i,G.min()));const c=ne().add(i),l=new so(G.min(),new Map,new ye(oe),a,c);await af(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),hc(r)}else await va(r.localStore,e,!1).then(()=>Ea(r,e,t)).catch(vs)}async function xv(n,e){const t=K(n),r=e.batch.batchId;try{const s=await Qy(t.localStore,e);lf(t,r,null),cf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await As(t,s)}catch(s){await vs(s)}}async function Fv(n,e,t){const r=K(n);try{const s=await function(a,c){const l=K(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(_=>(le(_!==null),f=_.keys(),l.mutationQueue.removeMutationBatch(h,_))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);lf(r,e,t),cf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await As(r,s)}catch(s){await vs(s)}}function cf(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function lf(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ea(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||uf(n,r)})}function uf(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(tc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),hc(n))}function Cu(n,e,t){for(const r of t)r instanceof rf?(n.La.addReference(r.key,e),Uv(n,r)):r instanceof sf?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||uf(n,r.key)):W()}function Uv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),hc(n))}function hc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new j(me.fromString(e)),r=n.qa.next();n.Na.set(r,new kv(t)),n.Oa=n.Oa.insert(t,r),Yd(n.remoteStore,new an(Et(Ji(t.path)),r,"TargetPurposeLimboResolution",ja.oe))}}async function As(n,e,t){const r=K(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const _=h?!h.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,_?"current":"not-current")}if(h){s.push(h);const _=ec.Wi(l.targetId,h);i.push(_)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>V.forEach(h,m=>V.forEach(m.$i,T=>f.persistence.referenceDelegate.addReference(_,m.targetId,T)).next(()=>V.forEach(m.Ui,T=>f.persistence.referenceDelegate.removeReference(_,m.targetId,T)))))}catch(_){if(!ws(_))throw _;B("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const m=_.targetId;if(!_.fromCache){const T=f.os.get(m),R=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,N)}}}(r.localStore,i))}async function $v(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Gd(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new F(D.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await As(t,r.hs)}}function Bv(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return ne().add(r.key);{let s=ne();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function hf(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=af.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lv.bind(null,e),e.Ca.d_=bv.bind(null,e.eventManager),e.Ca.$a=Av.bind(null,e.eventManager),e}function jv(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fv.bind(null,e),e}class Li{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=io(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Ky(this.persistence,new Hy,e.initialUser,this.serializer)}Ga(e){return new qy(Za.Zr,this.serializer)}Wa(e){return new tv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Li.provider={build:()=>new Li};class Ta{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$v.bind(null,this.syncEngine),await Ev(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Iv}()}createDatastore(e){const t=io(e.databaseInfo.databaseId),r=function(i){return new iv(i)}(e.databaseInfo);return function(i,a,c,l){return new cv(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new uv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Pu(this.syncEngine,t,0),function(){return bu.D()?new bu:new nv}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,f){const _=new Pv(s,i,a,c,l,h);return f&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);B("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await bs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ta.provider={build:()=>new Ta};/**
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
 */class dc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class qv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=je.UNAUTHENTICATED,this.clientId=pd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=oc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Go(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Nu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zv(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Au(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Au(e.remoteStore,s)),n._onlineComponents=e}async function zv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Go(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;pr("Error using user provided cache. Falling back to memory cache: "+t),await Go(n,new Li)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Go(n,new Li);return n._offlineComponents}async function df(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Nu(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Nu(n,new Ta))),n._onlineComponents}function Wv(n){return df(n).then(e=>e.syncEngine)}async function xi(n){const e=await df(n),t=e.eventManager;return t.onListen=Cv.bind(null,e.syncEngine),t.onUnlisten=Mv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vv.bind(null,e.syncEngine),t}function Hv(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new dc({next:m=>{f.Za(),a.enqueueAndForget(()=>cc(i,_));const T=m.docs.has(c);!T&&m.fromCache?h.reject(new F(D.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&l&&l.source==="server"?h.reject(new F(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new uc(Ji(c.path),f,{includeMetadataChanges:!0,_a:!0});return ac(i,_)}(await xi(n),n.asyncQueue,e,t,r)),r.promise}function Gv(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new dc({next:m=>{f.Za(),a.enqueueAndForget(()=>cc(i,_)),m.fromCache&&l.source==="server"?h.reject(new F(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new uc(c,f,{includeMetadataChanges:!0,_a:!0});return ac(i,_)}(await xi(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function ff(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Du=new Map;/**
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
 */function pf(n,e,t){if(!t)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Kv(n,e,t,r){if(e===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Mu(n){if(!j.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vu(n){if(j.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function co(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function it(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=co(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Ou{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ff((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ou({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ou(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d_;switch(r.type){case"firstParty":return new g_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Du.get(t);r&&(B("ComponentProvider","Removing Datastore"),Du.delete(t),r.terminate())}(this),Promise.resolve()}}function Qv(n,e,t,r={}){var s;const i=(n=it(n,lo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=je.MOCK_USER;else{c=$m(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new je(h)}n._authCredentials=new f_(new fd(c,l))}}/**
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
 */class yn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yn(this.firestore,e,this._query)}}class Ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class hn extends yn{constructor(e,t,r){super(e,t,Ji(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new j(e))}withConverter(e){return new hn(this.firestore,e,this._path)}}function Pe(n,e,...t){if(n=Re(n),pf("collection","path",e),n instanceof lo){const r=me.fromString(e,...t);return Vu(r),new hn(n,null,r)}{if(!(n instanceof Ke||n instanceof hn))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return Vu(r),new hn(n.firestore,null,r)}}function Je(n,e,...t){if(n=Re(n),arguments.length===1&&(e=pd.newId()),pf("doc","path",e),n instanceof lo){const r=me.fromString(e,...t);return Mu(r),new Ke(n,null,new j(r))}{if(!(n instanceof Ke||n instanceof hn))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return Mu(r),new Ke(n.firestore,n instanceof hn?n.converter:null,new j(r))}}/**
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
 */class Lu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Qd(this,"async_queue_retry"),this.Vu=()=>{const r=Ho();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ft;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ws(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=ic.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function xu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class jt extends lo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Lu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lu(e),this._firestoreClient=void 0,await e}}}function Xv(n,e){const t=typeof n=="object"?n:sd(),r=typeof n=="string"?n:"(default)",s=$a(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Fm("firestore");i&&Qv(s,...i)}return s}function Ss(n){if(n._terminated)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yv(n),n._firestoreClient}function Yv(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,f){return new P_(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ff(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new qv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(xe.fromBase64String(e))}catch(t){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wr(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Rr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fc{constructor(e){this._methodName=e}}/**
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
 */class pc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */class mc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Jv=/^__.*__$/;class Zv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ts(e,this.data,t,this.fieldTransforms)}}class mf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new _n(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class gc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(gf(this.Cu)&&Jv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class e0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||io(e)}Qu(e,t,r,s=!1){return new gc({Cu:e,methodName:t,qu:r,path:Oe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uo(n){const e=n._freezeSettings(),t=io(n._databaseId);return new e0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _f(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);_c("Data must be an object, but it was:",a,r);const c=wf(r,a);let l,h;if(i.merge)l=new st(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const _ of i.mergeFields){const m=Ia(e,_,t);if(!a.contains(m))throw new F(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Tf(f,m)||f.push(m)}l=new st(f),h=a.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,h=a.fieldTransforms;return new Zv(new Xe(c),l,h)}class ho extends fc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ho}}function yf(n,e,t,r){const s=n.Qu(1,e,t);_c("Data must be an object, but it was:",s,r);const i=[],a=Xe.empty();Bn(r,(l,h)=>{const f=yc(e,l,t);h=Re(h);const _=s.Nu(f);if(h instanceof ho)i.push(f);else{const m=Rs(h,_);m!=null&&(i.push(f),a.set(f,m))}});const c=new st(i);return new mf(a,c,s.fieldTransforms)}function vf(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[Ia(e,r,t)],l=[s];if(i.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Ia(e,i[m])),l.push(i[m+1]);const h=[],f=Xe.empty();for(let m=c.length-1;m>=0;--m)if(!Tf(h,c[m])){const T=c[m];let R=l[m];R=Re(R);const N=a.Nu(T);if(R instanceof ho)h.push(T);else{const S=Rs(R,N);S!=null&&(h.push(T),f.set(T,S))}}const _=new st(h);return new mf(f,_,a.fieldTransforms)}function t0(n,e,t,r=!1){return Rs(t,n.Qu(r?4:3,e))}function Rs(n,e){if(Ef(n=Re(n)))return _c("Unsupported field value:",e,n),wf(n,e);if(n instanceof fc)return function(r,s){if(!gf(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Rs(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Y_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Se.fromDate(r);return{timestampValue:Vi(s.serializer,i)}}if(r instanceof Se){const i=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vi(s.serializer,i)}}if(r instanceof pc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wr)return{bytesValue:$d(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ya(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mc)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ka(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${co(r)}`)}(n,e)}function wf(n,e){const t={};return md(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(n,(r,s)=>{const i=Rs(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ef(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof pc||n instanceof wr||n instanceof Ke||n instanceof fc||n instanceof mc)}function _c(n,e,t){if(!Ef(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=co(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ia(n,e,t){if((e=Re(e))instanceof Rr)return e._internalPath;if(typeof e=="string")return yc(n,e);throw Fi("Field path arguments must be of type string or ",n,!1,void 0,t)}const n0=new RegExp("[~\\*/\\[\\]]");function yc(n,e,t){if(e.search(n0)>=0)throw Fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rr(...e.split("."))._internalPath}catch{throw Fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new F(D.INVALID_ARGUMENT,c+n+l)}function Tf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class If{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new r0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class r0 extends If{data(){return super.data()}}function vc(n,e){return typeof e=="string"?yc(n,e):e instanceof Rr?e._internalPath:e._delegate._internalPath}/**
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
 */function bf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wc{}class Af extends wc{}function lt(n,e,...t){let r=[];e instanceof wc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Ec).length,c=i.filter(l=>l instanceof fo).length;if(a>1||a>0&&c>0)throw new F(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class fo extends Af{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new fo(e,t,r)}_apply(e){const t=this._parse(e);return Sf(e._query,t),new yn(e.firestore,e.converter,pa(e._query,t))}_parse(e){const t=uo(e.firestore);return function(i,a,c,l,h,f,_){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Uu(_,f);const T=[];for(const R of _)T.push(Fu(l,i,R));m={arrayValue:{values:T}}}else m=Fu(l,i,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Uu(_,f),m=t0(c,a,_,f==="in"||f==="not-in");return Ae.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ge(n,e,t){const r=e,s=vc("where",n);return fo._create(s,r,t)}class Ec extends wc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ec(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:pt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Sf(a,l),a=pa(a,l)}(e._query,t),new yn(e.firestore,e.converter,pa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tc extends Af{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Tc(e,t,r)}_apply(e){return new yn(e.firestore,e.converter,Ni(e._query,this._limit,this._limitType))}}function ri(n){return Tc._create("limit",n,"F")}function Fu(n,e,t){if(typeof(t=Re(t))=="string"){if(t==="")throw new F(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bd(e)&&t.indexOf("/")!==-1)throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!j.isDocumentKey(r))throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iu(n,new j(r))}if(t instanceof Ke)return iu(n,t._key);throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${co(t)}.`)}function Uu(n,e){if(!Array.isArray(n)||n.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class s0{convertValue(e,t="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>we(a.doubleValue));return new mc(i)}convertGeoPoint(e){return new pc(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=za(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(us(e));default:return null}}convertTimestamp(e){const t=mn(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);le(Hd(r));const s=new hs(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||$t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Rf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class es{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kf extends If{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class mi extends kf{data(e={}){return super.data(e)}}class Pf{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new es(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mi(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new mi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new es(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new mi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new es(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:i0(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function i0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
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
 */function o0(n){n=it(n,Ke);const e=it(n.firestore,jt);return Hv(Ss(e),n._key).then(t=>Cf(e,n,t))}class Ic extends s0{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}function a0(n){n=it(n,yn);const e=it(n.firestore,jt),t=Ss(e),r=new Ic(e);return bf(n._query),Gv(t,n._query).then(s=>new Pf(e,r,n,s))}function c0(n,e,t,...r){n=it(n,Ke);const s=it(n.firestore,jt),i=uo(s);let a;return a=typeof(e=Re(e))=="string"||e instanceof Rr?vf(i,"updateDoc",n._key,e,t,r):yf(i,"updateDoc",n._key,e),po(s,[a.toMutation(n._key,Ye.exists(!0))])}function l0(n){return po(it(n.firestore,jt),[new ro(n._key,Ye.none())])}function u0(n,e){const t=it(n.firestore,jt),r=Je(n),s=Rf(n.converter,e);return po(t,[_f(uo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ye.exists(!1))]).then(()=>r)}function h0(n,...e){var t,r,s;n=Re(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||xu(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(xu(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(s=_.complete)===null||s===void 0?void 0:s.bind(_)}let l,h,f;if(n instanceof Ke)h=it(n.firestore,jt),f=Ji(n._key.path),l={next:_=>{e[a]&&e[a](Cf(h,n,_))},error:e[a+1],complete:e[a+2]};else{const _=it(n,yn);h=it(_.firestore,jt),f=_._query;const m=new Ic(h);l={next:T=>{e[a]&&e[a](new Pf(h,m,_,T))},error:e[a+1],complete:e[a+2]},bf(n._query)}return function(m,T,R,N){const S=new dc(N),M=new uc(T,S,R);return m.asyncQueue.enqueueAndForget(async()=>ac(await xi(m),M)),()=>{S.Za(),m.asyncQueue.enqueueAndForget(async()=>cc(await xi(m),M))}}(Ss(h),f,c,l)}function po(n,e){return function(r,s){const i=new Ft;return r.asyncQueue.enqueueAndForget(async()=>Ov(await Wv(r),s,i)),i.promise}(Ss(n),e)}function Cf(n,e,t){const r=t.docs.get(e._key),s=new Ic(n);return new kf(n,s,e._key,r,new es(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class d0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=uo(e)}set(e,t,r){this._verifyNotCommitted();const s=Ko(e,this._firestore),i=Rf(s.converter,t,r),a=_f(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Ye.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ko(e,this._firestore);let a;return a=typeof(t=Re(t))=="string"||t instanceof Rr?vf(this._dataReader,"WriteBatch.update",i._key,t,r,s):yf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Ye.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ko(e,this._firestore);return this._mutations=this._mutations.concat(new ro(t._key,Ye.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ko(n,e){if((n=Re(n)).firestore!==e)throw new F(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function f0(n){return Ss(n=it(n,jt)),new d0(n,e=>po(n,e))}(function(e,t=!0){(function(s){br=s})(Ir),fr(new Vn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new jt(new p_(r.getProvider("auth-internal")),new y_(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),un(eu,"4.7.3",e),un(eu,"4.7.3","esm2017")})();function bc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Nf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p0=Nf,Df=new _s("auth","Firebase",Nf());/**
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
 */const Ui=new Fa("@firebase/auth");function m0(n,...e){Ui.logLevel<=re.WARN&&Ui.warn(`Auth (${Ir}): ${n}`,...e)}function gi(n,...e){Ui.logLevel<=re.ERROR&&Ui.error(`Auth (${Ir}): ${n}`,...e)}/**
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
 */function qt(n,...e){throw Ac(n,...e)}function It(n,...e){return Ac(n,...e)}function Mf(n,e,t){const r=Object.assign(Object.assign({},p0()),{[e]:t});return new _s("auth","Firebase",r).create(e,{appName:n.name})}function dn(n){return Mf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ac(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Df.create(n,...e)}function z(n,e,...t){if(!n)throw Ac(e,...t)}function Ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gi(e),new Error(e)}function zt(n,e){n||Ot(e)}/**
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
 */function ba(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function g0(){return $u()==="http:"||$u()==="https:"}function $u(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function _0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g0()||zm()||"connection"in navigator)?navigator.onLine:!0}function y0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ks{constructor(e,t){this.shortDelay=e,this.longDelay=t,zt(t>e,"Short delay should be less than long delay!"),this.isMobile=Bm()||Wm()}get(){return _0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sc(n,e){zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Vf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const v0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const w0=new ks(3e4,6e4);function mo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function kr(n,e,t,r,s={}){return Of(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ys(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return qm()||(h.referrerPolicy="no-referrer"),Vf.fetch()(xf(n,n.config.apiHost,t,c),h)})}async function Of(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},v0),e);try{const s=new E0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw si(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw si(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw si(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Mf(n,f,h);qt(n,f)}}catch(s){if(s instanceof Ht)throw s;qt(n,"network-request-failed",{message:String(s)})}}async function Lf(n,e,t,r,s={}){const i=await kr(n,e,t,r,s);return"mfaPendingCredential"in i&&qt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function xf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Sc(n.config,s):`${n.config.apiScheme}://${s}`}class E0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),w0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=It(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function T0(n,e){return kr(n,"POST","/v1/accounts:delete",e)}async function Ff(n,e){return kr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function os(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I0(n,e=!1){const t=Re(n),r=await t.getIdToken(e),s=Rc(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:os(Qo(s.auth_time)),issuedAtTime:os(Qo(s.iat)),expirationTime:os(Qo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Qo(n){return Number(n)*1e3}function Rc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yh(t);return s?JSON.parse(s):(gi("Failed to decode base64 JWT payload"),null)}catch(s){return gi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Bu(n){const e=Rc(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ms(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ht&&b0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function b0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class A0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Aa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $i(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ms(n,Ff(t,{idToken:r}));z(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Uf(i.providerUserInfo):[],c=R0(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,f=l?h:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Aa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function S0(n){const e=Re(n);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Uf(n){return n.map(e=>{var{providerId:t}=e,r=bc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function k0(n,e){const t=await Of(n,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=xf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Vf.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function P0(n,e){return kr(n,"POST","/v2/accounts:revokeToken",mo(n,e))}/**
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
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Bu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await k0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new ur;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function en(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=bc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new A0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Aa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ms(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return I0(this,e)}reload(){return S0(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await ms(this,T0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,f;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(h=t.createdAt)!==null&&h!==void 0?h:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:H,isAnonymous:X,providerData:Z,stsTokenManager:I}=t;z($&&I,e,"internal-error");const y=ur.fromJSON(this.name,I);z(typeof $=="string",e,"internal-error"),en(_,e.name),en(m,e.name),z(typeof H=="boolean",e,"internal-error"),z(typeof X=="boolean",e,"internal-error"),en(T,e.name),en(R,e.name),en(N,e.name),en(S,e.name),en(M,e.name),en(O,e.name);const E=new Lt({uid:$,auth:e,email:m,emailVerified:H,displayName:_,isAnonymous:X,photoURL:R,phoneNumber:T,tenantId:N,stsTokenManager:y,createdAt:M,lastLoginAt:O});return Z&&Array.isArray(Z)&&(E.providerData=Z.map(b=>Object.assign({},b))),S&&(E._redirectEventId=S),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new ur;s.updateFromServerResponse(t);const i=new Lt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $i(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Uf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new ur;c.updateFromIdToken(r);const l=new Lt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Aa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
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
 */const ju=new Map;function xt(n){zt(n instanceof Function,"Expected a class definition");let e=ju.get(n);return e?(zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ju.set(n,e),e)}/**
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
 */class $f{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$f.type="NONE";const qu=$f;/**
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
 */function _i(n,e,t){return`firebase:${n}:${e}:${t}`}class hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_i(this.userKey,s.apiKey,i),this.fullPersistenceKey=_i("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new hr(xt(qu),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||xt(qu);const a=_i(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){const _=Lt._fromJSON(e,f);h!==i&&(c=_),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new hr(i,e,r))}}/**
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
 */function zu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hf(e))return"Blackberry";if(Gf(e))return"Webos";if(jf(e))return"Safari";if((e.includes("chrome/")||qf(e))&&!e.includes("edge/"))return"Chrome";if(Wf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Bf(n=ze()){return/firefox\//i.test(n)}function jf(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qf(n=ze()){return/crios\//i.test(n)}function zf(n=ze()){return/iemobile/i.test(n)}function Wf(n=ze()){return/android/i.test(n)}function Hf(n=ze()){return/blackberry/i.test(n)}function Gf(n=ze()){return/webos/i.test(n)}function kc(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function C0(n=ze()){var e;return kc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function N0(){return Hm()&&document.documentMode===10}function Kf(n=ze()){return kc(n)||Wf(n)||Gf(n)||Hf(n)||/windows phone/i.test(n)||zf(n)}/**
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
 */function Qf(n,e=[]){let t;switch(n){case"Browser":t=zu(ze());break;case"Worker":t=`${zu(ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ir}/${r}`}/**
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
 */class D0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function M0(n,e={}){return kr(n,"GET","/v2/passwordPolicy",mo(n,e))}/**
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
 */const V0=6;class O0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:V0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class L0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wu(this),this.idTokenSubscription=new Wu(this),this.beforeStateQueue=new D0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Df,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ff(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(dn(this));const t=e?Re(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await M0(this),t=new O0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await P0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&m0(`Error while retrieving App Check token: ${t.error}`),t?.token}}function go(n){return Re(n)}class Wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=eg(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x0(n){Pc=n}function F0(n){return Pc.loadJS(n)}function U0(){return Pc.gapiScript}function $0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function B0(n,e){const t=$a(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Si(i,e??{}))return s;qt(s,"already-initialized")}return t.initialize({options:e})}function j0(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(xt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function q0(n,e,t){const r=go(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xf(e),{host:a,port:c}=z0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),W0()}function Xf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function z0(n){const e=Xf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Hu(a)}}}function Hu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function W0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Yf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,t){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}/**
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
 */async function dr(n,e){return Lf(n,"POST","/v1/accounts:signInWithIdp",mo(n,e))}/**
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
 */const H0="http://localhost";class Fn extends Yf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=bc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Fn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return dr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,dr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dr(e,t)}buildRequest(){const e={requestUri:H0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ys(t)}return e}}/**
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
 */class Jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ps extends Jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nn extends Ps{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends Ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rn.credential(t,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class sn extends Ps{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class on extends Ps{constructor(){super("twitter.com")}static credential(e,t){return Fn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return on.credential(t,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
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
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Lt._fromIdTokenResponse(e,r,s),a=Gu(r);return new Un({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Gu(r);return new Un({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Gu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Bi extends Ht{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Bi(e,t,r,s)}}function Zf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(n,i,e,r):i})}async function G0(n,e,t=!1){const r=await ms(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Un._forOperation(n,"link",r)}/**
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
 */async function K0(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(dn(r));const s="reauthenticate";try{const i=await ms(n,Zf(r,s,e,n),t);z(i.idToken,r,"internal-error");const a=Rc(i.idToken);z(a,r,"internal-error");const{sub:c}=a;return z(n.uid===c,r,"user-mismatch"),Un._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
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
 */async function Q0(n,e,t=!1){if(Vt(n.app))return Promise.reject(dn(n));const r="signIn",s=await Zf(n,r,e),i=await Un._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */async function X0(n,e){return Lf(n,"POST","/v1/accounts:signInWithCustomToken",mo(n,e))}/**
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
 */async function Y0(n,e){if(Vt(n.app))return Promise.reject(dn(n));const t=go(n),r=await X0(t,{token:e,returnSecureToken:!0}),s=await Un._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function J0(n,e,t,r){return Re(n).onIdTokenChanged(e,t,r)}function Z0(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function ew(n){return Re(n).signOut()}const ji="__sak";/**
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
 */class ep{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ji,"1"),this.storage.removeItem(ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tw=1e3,nw=10;class tp extends ep{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);N0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tp.type="LOCAL";const rw=tp;/**
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
 */class np extends ep{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}np.type="SESSION";const rp=np;/**
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
 */function sw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new _o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await sw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
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
 */function Cc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class iw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Cc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const m=_;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function bt(){return window}function ow(n){bt().location.href=n}/**
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
 */function sp(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function aw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lw(){return sp()?self:null}/**
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
 */const ip="firebaseLocalStorageDb",uw=1,qi="firebaseLocalStorage",op="fbase_key";class Cs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yo(n,e){return n.transaction([qi],e?"readwrite":"readonly").objectStore(qi)}function hw(){const n=indexedDB.deleteDatabase(ip);return new Cs(n).toPromise()}function Sa(){const n=indexedDB.open(ip,uw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(qi,{keyPath:op})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(qi)?e(r):(r.close(),await hw(),e(await Sa()))})})}async function Ku(n,e,t){const r=yo(n,!0).put({[op]:e,value:t});return new Cs(r).toPromise()}async function dw(n,e){const t=yo(n,!1).get(e),r=await new Cs(t).toPromise();return r===void 0?null:r.value}function Qu(n,e){const t=yo(n,!0).delete(e);return new Cs(t).toPromise()}const fw=800,pw=3;class ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>pw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(lw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aw(),!this.activeServiceWorker)return;this.sender=new iw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sa();return await Ku(e,ji,"1"),await Qu(e,ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ku(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>dw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yo(s,!1).getAll();return new Cs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ap.type="LOCAL";const mw=ap;new ks(3e4,6e4);/**
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
 */function gw(n,e){return e?xt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Nc extends Yf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _w(n){return Q0(n.auth,new Nc(n),n.bypassAuthState)}function yw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),K0(t,new Nc(n),n.bypassAuthState)}async function vw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),G0(t,new Nc(n),n.bypassAuthState)}/**
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
 */class cp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _w;case"linkViaPopup":case"linkViaRedirect":return vw;case"reauthViaPopup":case"reauthViaRedirect":return yw;default:qt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ww=new ks(2e3,1e4);class cr extends cp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ww.get())};e()}}cr.currentPopupAction=null;/**
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
 */const Ew="pendingRedirect",yi=new Map;class Tw extends cp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const r=await Iw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Iw(n,e){const t=Sw(e),r=Aw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function bw(n,e){yi.set(n._key(),e)}function Aw(n){return xt(n._redirectPersistence)}function Sw(n){return _i(Ew,n.config.apiKey,n.name)}async function Rw(n,e,t=!1){if(Vt(n.app))return Promise.reject(dn(n));const r=go(n),s=gw(r,e),a=await new Tw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const kw=10*60*1e3;class Pw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!lp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(It(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xu(e))}saveEventToCache(e){this.cachedEventUids.add(Xu(e)),this.lastProcessedEventTime=Date.now()}}function Xu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Cw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lp(n);default:return!1}}/**
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
 */async function Nw(n,e={}){return kr(n,"GET","/v1/projects",e)}/**
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
 */const Dw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mw=/^https?/;async function Vw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Nw(n);for(const t of e)try{if(Ow(t))return}catch{}qt(n,"unauthorized-domain")}function Ow(n){const e=ba(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Mw.test(t))return!1;if(Dw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Lw=new ks(3e4,6e4);function Yu(){const n=bt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xw(n){return new Promise((e,t)=>{var r,s,i;function a(){Yu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yu(),t(It(n,"network-request-failed"))},timeout:Lw.get()})}if(!((s=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=bt().gapi)===null||i===void 0)&&i.load)a();else{const c=$0("iframefcb");return bt()[c]=()=>{gapi.load?a():t(It(n,"network-request-failed"))},F0(`${U0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw vi=null,e})}let vi=null;function Fw(n){return vi=vi||xw(n),vi}/**
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
 */const Uw=new ks(5e3,15e3),$w="__/auth/iframe",Bw="emulator/auth/iframe",jw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zw(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sc(e,Bw):`https://${n.config.authDomain}/${$w}`,r={apiKey:e.apiKey,appName:n.name,v:Ir},s=qw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ys(r).slice(1)}`}async function Ww(n){const e=await Fw(n),t=bt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:zw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=It(n,"network-request-failed"),c=bt().setTimeout(()=>{i(a)},Uw.get());function l(){bt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const Hw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gw=500,Kw=600,Qw="_blank",Xw="http://localhost";class Ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yw(n,e,t,r=Gw,s=Kw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Hw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ze().toLowerCase();t&&(c=qf(h)?Qw:t),Bf(h)&&(e=e||Xw,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[T,R])=>`${m}${T}=${R},`,"");if(C0(h)&&c!=="_self")return Jw(e||"",c),new Ju(null);const _=window.open(e||"",c,f);z(_,n,"popup-blocked");try{_.focus()}catch{}return new Ju(_)}function Jw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Zw="__/auth/handler",eE="emulator/auth/handler",tE=encodeURIComponent("fac");async function Zu(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ir,eventId:s};if(e instanceof Jf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Zm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof Ps){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${tE}=${encodeURIComponent(l)}`:"";return`${nE(n)}?${ys(c).slice(1)}${h}`}function nE({config:n}){return n.emulator?Sc(n,eE):`https://${n.authDomain}/${Zw}`}/**
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
 */const Xo="webStorageSupport";class rE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rp,this._completeRedirectFn=Rw,this._overrideRedirectResult=bw}async _openPopup(e,t,r,s){var i;zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Zu(e,t,r,ba(),s);return Yw(e,a,Cc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Zu(e,t,r,ba(),s);return ow(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(zt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ww(e),r=new Pw(e);return t.register("authEvent",s=>(z(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xo,{type:Xo},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[Xo];a!==void 0&&t(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kf()||jf()||kc()}}const sE=rE;var eh="@firebase/auth",th="1.7.9";/**
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
 */class iE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aE(n){fr(new Vn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qf(n)},h=new L0(r,s,i,l);return j0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fr(new Vn("auth-internal",e=>{const t=go(e.getProvider("auth").getImmediate());return(r=>new iE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(eh,th,oE(n)),un(eh,th,"esm2017")}/**
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
 */const cE=5*60,lE=ed("authIdTokenMaxAge")||cE;let nh=null;const uE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>lE)return;const s=t?.token;nh!==s&&(nh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hE(n=sd()){const e=$a(n,"auth");if(e.isInitialized())return e.getImmediate();const t=B0(n,{popupRedirectResolver:sE,persistence:[mw,rw,rp]}),r=ed("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=uE(i.toString());Z0(t,a,()=>a(t.currentUser)),J0(t,c=>a(c))}}const s=Jh("auth");return s&&q0(t,`http://${s}`),t}function dE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}x0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=It("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",dE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aE("Browser");const fE={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},rh="2008948704-db2goT00",up=rd(fE),ae=Xv(up),Nn=hE(up);let hp=()=>{};const pE=new Promise(n=>{hp=n});let sh=!1;const mE=setTimeout(()=>Dc(),1e4);function Dc(){sh||(sh=!0,clearTimeout(mE),hp())}const qn=()=>pE,gE=n=>"m_"+n;async function Mc(n,e){try{n&&(!Nn.currentUser||Nn.currentUser.uid!==gE(e))&&await Y0(Nn,n)}catch(t){console.warn("firebase sign-in:",t&&t.message)}Dc()}const ut=async(...n)=>(await qn(),a0(...n)),_E=async(...n)=>(await qn(),o0(...n)),zn=async(...n)=>(await qn(),c0(...n)),Vc=async(...n)=>(await qn(),l0(...n)),dp=async(...n)=>(await qn(),u0(...n));function ih(n,e,t){let r=null,s=!1;return qn().then(()=>{s||(r=h0(n,e,t))}),()=>{s=!0,r&&r()}}function fp(n){const e=f0(n),t=e.commit.bind(e);return e.commit=async()=>(await qn(),t()),e}function pp(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function yE(){return typeof liff<"u"?Promise.resolve():new Promise((n,e)=>{let t=0;const r=setInterval(()=>{typeof liff<"u"?(clearInterval(r),n()):++t>100&&(clearInterval(r),e(new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้")))},100)})}let mp=()=>{},vo=!1,gp=()=>{};const vE="เซสชัน LINE หมดอายุ กดเข้าสู่ระบบใหม่ที่แถบด้านบน";function wE(n){gp=n,vo&&n()}function EE(){try{const n=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}liff.login({redirectUri:n})}catch{}}function zi(){vo=!0,gp();const n=new Error(vE);return n.expired=!0,n}const TE=new Promise(n=>{mp=n});let gs="pending";const Ra="dm:v2:webtoken",IE=20*24*60*60*1e3;function wo(){try{const n=JSON.parse(localStorage.getItem(Ra)||"null");return n&&typeof n.token=="string"&&n.token?n:null}catch{return null}}function _p(n){try{n?localStorage.setItem(Ra,JSON.stringify({token:n,t:Date.now()})):localStorage.removeItem(Ra)}catch{}}async function bE(){const n=wo();if(!(n&&Date.now()-n.t<IE))try{const e=liff.getIDToken();if(!e)return;const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e,kind:"web"})}),r=await t.json().catch(()=>({}));t.ok&&r.success&&r.token&&_p(r.token)}catch{}}const AE="U0d739eea39c312e11c487e22861920d1",SE=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();function ka(n,e,t){return{name:SE(e.name),memberId:n,pictureUrl:/^https:\/\//i.test(e.pictureUrl||"")?e.pictureUrl:"",isAdmin:e.role==="admin"||t===AE,realName:e.realName||"",promptpay:e.promptpay||""}}const RE=["code","state","liffClientId","liffRedirectUri","error","error_description"],kE=()=>{const n=new URLSearchParams(location.search);return n.has("code")||n.has("liffClientId")};function oh(){try{const n=new URL(location.href);let e=!1;for(const r of RE)n.searchParams.has(r)&&(n.searchParams.delete(r),e=!0);let t=n.hash;t==="#_=_"&&(t="",e=!0),e&&history.replaceState(null,"",n.pathname+(n.search||"")+t)}catch{}}let wi="";function ah(){return wi}async function PE(){await yE();const n=kE();try{await liff.init({liffId:rh})}catch(t){if(wi=`เริ่มระบบ LINE ไม่สำเร็จ: ${t&&t.message||t}`,n)oh(),await liff.init({liffId:rh});else throw t}if(oh(),!liff.isLoggedIn()){gs="out",wi=wi||(n?"ล็อกอินกลับมาแล้วแต่ LINE ไม่ยืนยันบัตร (ลองกดเข้าสู่ระบบใหม่อีกครั้ง)":"บัตรล็อกอิน LINE ในเบราว์เซอร์นี้หมดอายุหรือยังไม่มี");const t=vp();if(t&&wo()&&!n){try{const s=await _E(Je(ae,"members",String(t.memberId)));if(s.exists())return ka(s.id,s.data(),s.data().lineUserId||"")}catch{}return t}if(t&&!n)return vo=!0,{needLogin:!0};const r=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}return liff.login({redirectUri:r}),null}gs="in",mp(),bE();try{const t=sessionStorage.getItem("dept_auth_hash");t&&(sessionStorage.removeItem("dept_auth_hash"),(!location.hash||location.hash==="#"||location.hash==="#_=_")&&(location.hash=t))}catch{}const e=await yp({action:"login"});if(e.member)return await Mc(e.firebaseToken,e.member.id),ka(e.member.id,e.member,e.member.lineUserId);if(e.needLink)return{needLink:!0,profile:e.profile||{},candidates:e.candidates||[],suggest:e.suggest||""};throw new Error(e.message||"เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง")}async function yp(n){const e=liff.getIDToken();if(!e)throw new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองรีเฟรชหน้านี้");const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,idToken:e})}),r=await t.json().catch(()=>({}));return!t.ok&&!r.message&&(r.message=`เข้าสู่ระบบไม่สำเร็จ (${t.status})`),r}async function dI(n,e){const t=await yp({action:"link",memberId:e});if(!t.member)throw new Error(t.message||"ผูกบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง");return Pr(),await Mc(t.firebaseToken,t.member.id),ka(t.member.id,t.member,t.member.lineUserId)}const Oc=24*60*60*1e3,Eo=10*60*1e3,Wt="dm:v2:";function mt(n,e){try{const t=localStorage.getItem(Wt+n);if(!t)return null;const{t:r,v:s}=JSON.parse(t);return Date.now()-r<e?s:null}catch{return null}}function gt(n,e){try{localStorage.setItem(Wt+n,JSON.stringify({t:Date.now(),v:e}))}catch{}}const CE=30*24*60*60*1e3,NE=7*24*60*60*1e3;function vp(){const n=mt("user",CE);return n&&n.name&&n.memberId?n:null}function DE(n){n&&n.name&&n.memberId&&gt("user",n)}function ME(n,e){const t=mt(`snap:${n}:${e}`,NE);return t&&Array.isArray(t.transactions)&&Array.isArray(t.settlements)&&Array.isArray(t.wallet)?t:null}function VE(n,e,t){gt(`snap:${n}:${e}`,{transactions:t.transactions,settlements:t.settlements,wallet:t.wallet})}function OE(){return mt("members",1/0)}function Pa(){try{Object.keys(localStorage).filter(n=>n.startsWith(Wt)).forEach(n=>localStorage.removeItem(n))}catch{}}const wp=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();async function LE(){const n=mt("members",Eo);if(n)return n;const e=await ut(Pe(ae,"members")),t=[...new Set(e.docs.map(r=>wp(r.data().name)).filter(Boolean))];return gt("members",t),t}async function xE(n){const e=mt("m:"+n,Oc);if(e)return e;const[t,r]=await Promise.all([ut(lt(Pe(ae,"transactions"),Ge("date",">=",`${n}-01`),Ge("date","<=",`${n}-31`))),ut(lt(Pe(ae,"settlements"),Ge("month","==",n)))]),s={transactions:t.docs.map(i=>({id:i.id,...i.data()})),settlements:r.docs.map(i=>({id:i.id,...i.data()}))};return gt("m:"+n,s),s}function FE(n,e){const t={transactions:null,settlements:null},r=()=>{t.transactions&&t.settlements&&e({...t})},s=a=>e({error:a}),i=[ih(lt(Pe(ae,"transactions"),Ge("date",">=",`${n}-01`),Ge("date","<=",`${n}-31`)),a=>{t.transactions=a.docs.map(c=>({id:c.id,...c.data()})),r()},s),ih(lt(Pe(ae,"settlements"),Ge("month","==",n)),a=>{t.settlements=a.docs.map(c=>({id:c.id,...c.data()})),r()},s)];return()=>i.forEach(a=>a())}async function Te(n,e,{line:t=!1}={}){const r=t?null:wo();if(r){const c=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.token},body:JSON.stringify(e)});let l={};try{l=await c.json()}catch{}if(c.status!==401){if(!c.ok)throw new Error(l.message||`เกิดข้อผิดพลาด (${c.status})`);return l}_p("")}if(vo||gs==="out")throw zi();await Promise.race([TE,new Promise((c,l)=>setTimeout(()=>l(new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองใหม่อีกครั้ง")),2e4))]);const s=liff.getIDToken(),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,idToken:s})});let a={};try{a=await i.json()}catch{}if(i.status===401)throw zi();if(!i.ok)throw new Error(a.message||`เกิดข้อผิดพลาด (${i.status})`);return a}async function UE(n,{current:e=!1}={}){if(!e){const s=mt("w:"+n,Oc);if(s)return s}const t=await Te("/api/shortcut-transaction",{action:"wallet-list",month:n}),r=Array.isArray(t.items)?t.items:[];return e||gt("w:"+n,r),r}async function $E(n,e){const t={},r=[];for(const c of n){if(c===e)continue;const l=mt("w:"+c,Oc);l?t[c]=l:r.push(c)}if(r.length===0)return t[e]=await UE(e,{current:!0}),t;const s=r.slice().sort()[0],i=await Te("/api/shortcut-transaction",{action:"wallet-list",since:s}),a=Array.isArray(i.items)?i.items:[];t[e]=a.filter(c=>String(c.date||"").startsWith(e));for(const c of r){const l=a.filter(h=>String(h.date||"").startsWith(c));t[c]=l,gt("w:"+c,l)}return t}async function fI(){const n=await Te("/api/device-token",{},{line:!0});if(!n.success||!n.token)throw new Error(n.message||"สร้างรหัสไม่สำเร็จ");return n}async function pI(){if(gs!=="in")throw zi();const n=await fetch("/api/device-token",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:liff.getIDToken()})});let e={};try{e=await n.json()}catch{}if(!n.ok||!e.success)throw new Error(e.message||"ยกเลิกรหัสไม่สำเร็จ");return e}async function mI(n,e){await Te("/api/shortcut-transaction",{action:"wallet-update",id:n,...e})}async function gI(n){let e=0;for(let t=0;t<n.length;t+=100){const r=await Te("/api/shortcut-transaction",{action:"wallet-update",items:n.slice(t,t+100)});e+=Number(r.updated)||0}return e}async function BE(){const n=await Te("/api/shortcut-transaction",{action:"wallet-template-list"});return Array.isArray(n.items)?n.items:[]}async function _I(n,e){await Te("/api/shortcut-transaction",{action:"wallet-template-update",id:n,...e}),Cr()}async function yI(n){await Te("/api/shortcut-transaction",{action:"wallet-template-stop",id:n}),Cr()}const Ep=n=>n&&n.plan&&typeof n.plan=="object"?n.plan:{budget:{total:0,cats:{}},months:{},goals:[]};async function jE(){const n=mt("plan",Eo);if(n)return n;const e=Ep(await Te("/api/shortcut-transaction",{action:"plan-get"}));return gt("plan",e),e}const To=async n=>{const e=Ep(await Te("/api/shortcut-transaction",n));return gt("plan",e),e},qE=({scope:n,month:e,total:t,cats:r,clear:s=!1})=>To({action:"plan-budget-set",scope:n,month:e,total:t,cats:r,clear:s}),zE=n=>To({action:"goal-save",...n}),WE=(n,e,t)=>To({action:"goal-move",id:n,amount:e,dir:t}),HE=n=>To({action:"goal-delete",id:n}),GE=5*60*1e3;async function ch({force:n=!1}={}){const e=n?null:mt("cards",GE);if(e)return e;const t=await Te("/api/shortcut-transaction",{action:"card-list"}),r={enabled:t.enabled===!0,cards:Array.isArray(t.cards)?t.cards:[]};return gt("cards",r),r}function KE(){try{localStorage.removeItem(Wt+"cards")}catch{}}const Lc=async n=>{const e=await Te("/api/shortcut-transaction",n);return KE(),e},QE=n=>Lc({action:"card-save",...n}),XE=n=>Lc({action:"card-delete",id:n}),YE=(n,e,t)=>Lc({action:"card-paid",id:n,paid:e,key:t});async function vI(n,e){for(const t of n.ids&&n.ids.length?n.ids:[n.id])await zn(Je(ae,"members",String(t)),{cardAlerts:!!e});Pr()}async function wI(){const n=await Te("/api/shortcut-transaction",{action:"line-quota"});return n&&n.quota?n.quota:null}async function JE(n){return n&&n.recurring&&Cr(),Te("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}async function lh(){const n=mt("profiles",Eo);if(n)return n;const e=await ut(Pe(ae,"members")),t=new Map;e.docs.forEach(s=>{const i=s.data(),a=wp(i.name);if(!a)return;const c={id:s.id,name:a,promptpay:i.promptpay||"",realName:i.realName||"",englishName:i.englishName||"",hasLine:!!i.lineUserId,pictureUrl:/^https?:\/\//i.test(i.pictureUrl||"")?i.pictureUrl:"",role:i.role==="admin"?"admin":"member",cardAlerts:i.cardAlerts===!0,ids:[s.id]},l=t.get(a);l&&(c.ids=[...l.ids,s.id],c.cardAlerts=c.cardAlerts||l.cardAlerts),!l||!l.hasLine&&c.hasLine||!l.promptpay&&c.promptpay||!l.pictureUrl&&c.pictureUrl?t.set(a,c):(l.ids=c.ids,l.cardAlerts=c.cardAlerts)});const r=[...t.values()];return gt("profiles",r),r}function Tp(n){try{localStorage.removeItem(Wt+"m:"+n),localStorage.removeItem(Wt+"w:"+n)}catch{}}function Pr(){try{localStorage.removeItem(Wt+"profiles"),localStorage.removeItem(Wt+"members")}catch{}}async function uh(n){return Te("/api/shortcut-transaction",{action:"wallet-delete",id:n})}async function EI(n){let e=0;for(let t=0;t<n.length;t+=50){const r=await Te("/api/shortcut-transaction",{action:"wallet-confirm",ids:n.slice(t,t+50)});e+=Number(r.confirmed)||0}return e}async function ZE(n){return(await Te("/api/shortcut-transaction",{action:"wallet-get",id:n})).item||null}async function TI(n){let e=0,t=0;for(let r=0;r<n.length;r+=50){const s=await Te("/api/shortcut-transaction",{action:"wallet-delete-many",ids:n.slice(r,r+50)});e+=Number(s.deleted)||0,t+=Array.isArray(s.failed)?s.failed.length:0}return{deleted:e,failed:t}}async function eT(){return(await ut(lt(Pe(ae,"subscription_templates"),Ge("active","==",!0)))).docs.map(e=>({id:e.id,...e.data()}))}async function tT(){const n=mt("billsched",Eo);if(n)return n;const[e,t]=await Promise.all([eT(),BE().catch(()=>[])]),r={group:e.map(s=>({id:s.id,desc:s.desc,amount:s.amount,billingDay:s.billingDay,payer:s.payer,splits:s.splits,icon:s.icon,active:s.active,every:s.every,startMonth:s.startMonth})),personal:t.map(s=>({id:s.id,desc:s.desc,amount:s.amount,billingDay:s.billingDay,icon:s.icon,every:s.every,startMonth:s.startMonth}))};return gt("billsched",r),r}function Cr(){try{localStorage.removeItem(Wt+"billsched")}catch{}}async function II(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc.trim().slice(0,100)||"บิลรายเดือน"),typeof e.icon=="string"&&(t.icon=e.icon),e.billingDay!==void 0&&(t.billingDay=Math.min(31,Math.max(1,Math.round(Number(e.billingDay))||1))),e.every!==void 0&&(t.every=[1,3,6,12].includes(Number(e.every))?Number(e.every):1,t.startMonth=Math.min(12,Math.max(1,Math.round(Number(e.startMonth))||1))),await zn(Je(ae,"subscription_templates",String(n)),t),Cr()}async function bI(n){await zn(Je(ae,"subscription_templates",String(n)),{active:!1,stoppedAt:new Date}),Cr()}async function nT(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc),typeof e.icon=="string"&&(t.icon=e.icon),await zn(Je(ae,"transactions",String(n)),t)}async function AI(n){await dp(Pe(ae,"members"),{name:n,createdAt:new Date().toISOString(),quickAdded:!0,role:"member"}),Pr()}async function SI(n,e){const t={realName:String(e.realName||""),promptpay:String(e.promptpay||""),role:e.role==="admin"?"admin":"member",realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date};await zn(Je(ae,"members",String(n)),t),Pr()}async function RI(n){const e=n.name;if((await Promise.all([ut(lt(Pe(ae,"transactions"),Ge("payer","==",e),ri(1))),ut(lt(Pe(ae,"transactions"),Ge(new Rr("splits",e),">=",0),ri(1))),ut(lt(Pe(ae,"settlements"),Ge("from","==",e),ri(1))),ut(lt(Pe(ae,"settlements"),Ge("to","==",e),ri(1)))])).some(r=>!r.empty))throw new Error(`ลบ ${e} ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน (ถ้าลบ ยอดหนี้ของคนอื่นจะคำนวณผิด)`);await Vc(Je(ae,"members",String(n.id))),Pr()}async function kI({from:n,to:e,amount:t,month:r,adminName:s}){await dp(Pe(ae,"settlements"),{status:"verified",month:r,from:n,to:e,amount:Number(t),transactionIds:[],createdAt:new Date().toISOString(),verifiedByAdmin:!0,adminId:s||"unknown"})}async function PI(n,e){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(e))throw new Error("เดือนไม่ถูกต้อง");await zn(Je(ae,"settlements",String(n)),{month:e})}async function CI(n){await Vc(Je(ae,"settlements",String(n)))}async function NI(){return(await Te("/api/shortcut-transaction",{action:"admin-status"})).jobs||{debt:null,subs:null,cards:null}}async function DI(){return(await Te("/api/shortcut-transaction",{action:"group-summary"})).message||"ส่งแล้ว"}async function MI(){return(await Te("/api/shortcut-transaction",{action:"remind-all"})).message||"สั่งเตือนแล้ว"}async function VI(n){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(n))throw new Error("เดือนไม่ถูกต้อง");const e=await ut(lt(Pe(ae,"transactions"),Ge("date",">=",`${n}-01`),Ge("date","<=",`${n}-31`))),t=new Map;e.docs.forEach(a=>t.set(a.id,a.ref));const r=[...new Set(e.docs.map(a=>a.data().groupId).filter(Boolean))];for(const a of r)(await ut(lt(Pe(ae,"transactions"),Ge("groupId","==",a)))).docs.forEach(l=>t.set(l.id,l.ref));const s=await ut(lt(Pe(ae,"settlements"),Ge("month","==",n))),i=[...t.values(),...s.docs.map(a=>a.ref)];for(let a=0;a<i.length;a+=400){const c=fp(ae);i.slice(a,a+400).forEach(l=>c.delete(l)),await c.commit()}return Tp(n),{bills:t.size,settlements:s.docs.length}}async function rT(n){await Vc(Je(ae,"transactions",String(n)))}async function OI(n,e){for(let t=0;t<n.length;t+=10)await Promise.all(n.slice(t,t+10).map(r=>nT(r,{icon:e})));return n.length}async function LI(n){for(let e=0;e<n.length;e+=10)await Promise.all(n.slice(e,e+10).map(t=>rT(t)));return n.length}async function xI(n,e){await zn(Je(ae,"members",String(n)),{...e,realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date}),Pr()}async function FI(n,{to:e,amount:t,month:r}){const s=await new Promise((l,h)=>{const f=new FileReader;f.onload=()=>l(String(f.result).split(",")[1]),f.onerror=()=>h(new Error("อ่านไฟล์รูปไม่สำเร็จ")),f.readAsDataURL(n)});if(gs!=="in")throw zi();const i=liff.getIDToken(),a=await fetch("/api/verify-settlement-slip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:i,to:e,amount:t,month:r,base64Image:s})});let c={};try{c=await a.json()}catch{}return{ok:a.ok&&c.success===!0,json:c,status:a.status}}function UI(){try{liff.logout()}catch{}try{ew(Nn)}catch{}Pa(),location.href="/"}async function hh({docs:n,template:e}){const t=fp(ae);n.forEach(r=>t.set(Je(Pe(ae,"transactions")),r)),e&&t.set(Je(Pe(ae,"subscription_templates")),e),await t.commit(),e&&Cr()}(async()=>{try{if(typeof Nn.authStateReady=="function"&&await Nn.authStateReady(),Nn.currentUser)return Dc();const n=wo();if(!n)return;const e=await fetch("/api/device-token?firebase=1",{headers:{Authorization:"Bearer "+n.token}}),t=await e.json().catch(()=>({}));e.ok&&t.success&&t.member&&await Mc(t.firebaseToken,t.member.id)}catch(n){console.warn("firebase pass:",n&&n.message)}})();const dh=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},fh=60;function sT(n,e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));if(!t)throw new Error("รูปแบบวันที่ไม่ถูกต้อง");const r=Number(t[1]),s=Number(t[2])-1,i=Number(t[3]),a=r*12+s+Number(e),c=Math.floor(a/12),l=a-c*12,h=new Date(Date.UTC(c,l+1,0)).getUTCDate(),f=Math.min(i,h);return`${String(c).padStart(4,"0")}-${String(l+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`}function iT({amount:n,installments:e,splits:t,date:r}){const s=Number(e);if(!Number.isInteger(s)||s<1||s>fh)throw new Error(`จำนวนงวดต้องเป็นเลข 1–${fh}`);const i=Object.keys(t||{});if(i.length===0)throw new Error("ไม่มีผู้ร่วมจ่าย");const a=dh(n);if(a<=0)throw new Error("ยอดเงินไม่ถูกต้อง");const c=i.map(f=>[f,dh(t[f])]),l=a-c.reduce((f,[,_])=>f+_,0);if(l!==0){let f=0;c.forEach(([,_],m)=>{_>c[f][1]&&(f=m)}),c[f][1]+=l}const h=[];for(let f=0;f<s;f++){const _={};let m=0;for(const[T,R]of c){const N=Math.floor(R/s),S=f<R-N*s?1:0;_[T]=(N+S)/100,m+=N+S}h.push({index:f+1,date:sT(r,f),amount:m/100,splits:_})}return h}const oT=[["trip",["เที่ยว","โรงแรม","ที่พักรีสอร์ท","เครื่องบิน","ตั๋วเครื่องบิน","airbnb","agoda","ทริป"]],["rent",["ค่าเช่า","ค่าห้อง","ค่าหอ","คอนโด","ค่าส่วนกลาง"]],["drink",["กาแฟ","ชานม","ชาไข่มุก","คาเฟ่","เครื่องดื่ม","น้ำผลไม้","เหล้า","เบียร์","ไวน์","ปาร์ตี้","starbucks","amazon"]],["pet",["แมว","หมา","สุนัข","สัตว์"]],["food",["ข้าว","กิน","อาหาร","ก๋วยเตี๋ยว","ขนม","หมูกระทะ","ชาบู","บุฟเฟ","ส้มตำ","ไก่","หมู","เนื้อ","ปิ้งย่าง","ผัด","ต้ม","แกง","ส้ม","ไอติม","เค้ก","grab food","lineman","line man","foodpanda"]],["bills",["ค่าไฟ","ค่าน้ำ","ค่าเน็ต","อินเทอร์เน็ต","เน็ต","โทรศัพท์","ค่าโทร","netflix","spotify","youtube","disney","subscription","ค่าบริการ","claude","chatgpt","openai","icloud","adobe","canva","hbo","prime video","google one","ค่ามือถือ","ค่าเช่ารายเดือน","dtac","true","ais","3bb","google cloud"]],["travel",["รถ","น้ำมัน","แท็กซี่","grab","bolt","bts","mrt","ทางด่วน","ที่จอดรถ","ค่าเดินทาง","รถเมล์","ตั๋วรถ","civic","honda","toyota","mazda","nissan","isuzu","mitsubishi","benz","bmw","ประกันรถ","ภาษีรถ","พ.ร.บ.","ค่างวดรถ","ผ่อนรถ","ล้างรถ","ค่ารถ"]],["fun",["หนัง","โรงหนัง","เกม","steam","คอนเสิร์ต","บัตรคอน","karaoke","คาราโอเกะ","บอร์ดเกม","ดูหนัง"]],["health",["ค่ายา","ซื้อยา","หมอ","โรงพยาบาล","คลินิก","ฟัน","ตรวจสุขภาพ","วิตามิน","ฟิตเนส","ยิม"]],["gift",["ของขวัญ","วันเกิด","ซองงาน","ทำบุญ","ดอกไม้"]],["goods",["ซื้อ","ของใช้","ช้อป","shopee","lazada","7-11","เซเว่น","ซุปเปอร์","โลตัส","บิ๊กซี","tops","makro","แม็คโคร","ที่ปิ้ง","ครีม","สบู่","ยาสระผม","ตัดผม","ซาลอน"]]];function aT(n){const e=String(n||"").toLowerCase();if(!e.trim())return"other";for(const[t,r]of oT)if(r.some(s=>e.includes(s)))return t;return"other"}const cT=[{key:"food",label:"อาหารและเครื่องดื่ม",short:"อาหาร",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",short:"บิล/รายเดือน",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",short:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",short:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"fun",label:"บันเทิง",short:"บันเทิง",icons:["fa-film"]},{key:"other",label:"อื่นๆ",short:"อื่นๆ",icons:[]}],ph=cT.map(n=>n.key),$I=["plane","shield","home","phone","car","gift","heart","star"],BI=["accent","sun","receive","accent2","navy"],lT=80,uT=/^\d{4}-(0[1-9]|1[0-2])$/,Dn=n=>Math.round((Number(n)||0)*100),mh=n=>typeof n=="string"&&uT.test(n),gh=n=>!!(n&&(Number(n.total)>0||Object.values(n.cats||{}).some(e=>Number(e)>0)));function hT(n,e){const t=n||{},r=t.months&&t.months[e];return gh(r)?{total:Number(r.total)||0,cats:{...r.cats||{}},source:"month"}:gh(t.budget)?{total:Number(t.budget.total)||0,cats:{...t.budget.cats||{}},source:"default"}:{total:0,cats:{},source:"none"}}function _h(n,e){return e>0?n>e?"over":n/e*100>=lT?"near":"ok":"none"}const Ca=(n,e)=>e>0?Math.round(n/e*100):0;function dT(n,e){const t=n||{total:0,cats:{},source:"none"},r=Object.fromEntries(ph.map(h=>[h,Dn((t.cats||{})[h])])),s=Object.values(r).reduce((h,f)=>h+f,0),i=Dn(t.total)>0?Dn(t.total):s,a=Math.max(0,Math.round(Number(e&&e.totalSat)||0)),c=e&&e.cats||{},l=ph.filter(h=>r[h]>0).map(h=>{const f=Math.max(0,Math.round(Number(c[h])||0));return{key:h,budgetSat:r[h],spentSat:f,leftSat:r[h]-f,percent:Ca(f,r[h]),level:_h(f,r[h])}});return{set:i>0,source:t.source||"none",budgetSat:i,spentSat:a,leftSat:i-a,percent:Ca(a,i),level:_h(a,i),cats:l,unassignedSat:Math.max(0,i-s)}}function fT(n,e){if(!mh(n)||!mh(e))return 0;const[t,r]=n.split("-").map(Number),[s,i]=e.split("-").map(Number);return Math.max(0,(s-t)*12+(i-r)+1)}function pT(n,e){return(n&&Array.isArray(n.log)?n.log:[]).filter(t=>String(t.date).startsWith(e)).reduce((t,r)=>t+Dn(r.amount),0)}function Ip(n,e){const t=n||{},r=Dn(t.target),s=Dn(t.saved),i=Math.max(0,r-s),a=r>0&&s>=r,c=t.deadline?fT(e,t.deadline):0,l=!!t.deadline&&c===0&&!a;let h=0;return a||(h=t.deadline?c>0?Math.ceil(i/c/100)*100:i:Dn(t.monthly)),{targetSat:r,savedSat:s,remainingSat:i,percent:Math.min(100,Ca(s,r)),done:a,monthsLeft:c,late:l,perMonthSat:h,thisMonthSat:pT(t,e)}}function bp(n,e){let t=0,r=0;for(const s of n||[]){const i=Ip(s,e);i.done||(t+=i.perMonthSat),r+=i.thisMonthSat}return{planSat:t,doneSat:Math.max(0,r)}}function mT(n,e,t){const r=Math.max(0,Math.round(Number(n)||0)-bp(e,t).planSat);return Math.floor(r/1e4)*1e4}const gT=[1,3,6,12],_T=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function Er(n){const e=Number(n&&n.every);return gT.includes(e)?e:1}function Wi(n){const e=Number(n&&n.startMonth);return Number.isInteger(e)&&e>=1&&e<=12?e:1}function Na(n,e){const t=Er(n);return t===1?!0:((Number(String(e).slice(5,7))-Wi(n))%t+t)%t===0}function jI(n){return Array.from({length:12},(e,t)=>t+1).filter(e=>Na(n,`2000-${String(e).padStart(2,"0")}`))}const qI=n=>12/Er(n);function zI(n){const e=Er(n),t=Math.min(31,Math.max(1,Number(n&&n.billingDay)||1));return e===1?`ทุกวันที่ ${t}`:e===12?`ทุกปี ${t} ${_T[Wi(n)-1]}`:`ทุก ${e} เดือน วันที่ ${t}`}function yT(n){const e=Er(n);return e===1?"":e===12?"ทุกปี":`ทุก ${e} เดือน`}function ce(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function fn(n){const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0}function vT({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const s=new Set(n.map(ce).filter(Boolean)),i={};s.forEach(l=>{i[l]=0});const a=[],c=(l,h,f)=>{const _=ce(l);_&&(s.has(_)?i[_]+=h:a.push({type:"unknown_name",name:_,...f}))};for(const l of e){if(!l||typeof l.date!="string"||!l.date.startsWith(r))continue;const h=l.splits&&typeof l.splits=="object"?Object.entries(l.splits):[];if(h.length===0){a.push({type:"no_splits",id:l.id});continue}const f=fn(l.amount);c(l.payer,f,{id:l.id});let _=0;for(const[m,T]of h){const R=fn(T);_+=R,c(m,-R,{id:l.id})}Math.abs(_-f)>h.length&&a.push({type:"split_mismatch",id:l.id,diffSatang:_-f})}for(const l of t){if(!l||l.status!=="verified"||l.month!==r)continue;const h=fn(l.amount);c(l.from,h,{id:l.id}),c(l.to,-h,{id:l.id})}return{balances:i,warnings:a}}function wT(n,{minSatang:e=100}={}){const t=[],r=[];for(const[l,h]of Object.entries(n))h<=-e?t.push({name:l,amt:-h}):h>=e&&r.push({name:l,amt:h});const s=(l,h)=>h.amt-l.amt||(l.name<h.name?-1:l.name>h.name?1:0);t.sort(s),r.sort(s);const i=[];let a=0,c=0;for(;a<t.length&&c<r.length;){const l=t[a],h=r[c],f=Math.min(l.amt,h.amt);f>=e&&i.push({from:l.name,to:h.name,amountSatang:f,amount:f/100}),l.amt-=f,h.amt-=f,l.amt<e&&a++,h.amt<e&&c++}return i}function Ap(n){const e=Number(n)||0;return Math.abs(e)<100?0:Math.round(e/100)}function Hi(n,e){if(!n)return 0;const t=ce(e),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return ce(n.payer)===t?fn(n.amount):0;let s=0;for(const[i,a]of r)ce(i)===t&&(s+=fn(a));return s}function Sp(n,e){return n&&ce(n.payer)===ce(e)?fn(n.amount):0}const Rp=(n,e)=>typeof n=="string"&&n.startsWith(e);function kp({name:n,transactions:e=[],settlements:t=[],month:r}){const s=ce(n);let i=0,a=0;for(const f of e)!f||!Rp(f.date,r)||(i+=Sp(f,s),a+=Hi(f,s));let c=0,l=0;for(const f of t){if(!f||f.status!=="verified"||f.month!==r)continue;const _=fn(f.amount);ce(f.from)===s&&(c+=_),ce(f.to)===s&&(l+=_)}const h=i-a+c-l;return{name:s,month:r,paid:i,share:a,sent:c,received:l,balance:h}}function Pp({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const{balances:s,warnings:i}=vT({memberNames:n,transactions:e,settlements:t,month:r}),a=wT(s),c=Object.keys(s).sort().map(l=>{const h=kp({name:l,transactions:e,settlements:t,month:r}),f=Ap(s[l]);return{...h,balance:s[l],displayBalance:f,cleared:f===0}});return{month:r,balances:s,plan:a,warnings:i,members:c}}function xc({name:n,month:e,walletEntries:t=[],transactions:r=[],settlements:s=[]}){const i=ce(n),a=new Set;let c=0,l=0;for(const m of t){if(!m||ce(m.ownerName)!==i||!Rp(m.date||m.month,e))continue;const T=m.dedupKey||m.transRef;if(T){if(a.has(T))continue;a.add(T)}const R=fn(m.amount);R<=0||(m.type==="income"?c+=R:m.type==="expense"&&(l+=R))}const h=kp({name:i,transactions:r,settlements:s,month:e}),f=h.share,_=l+f;return{name:i,month:e,income:c,personalExpense:l,groupShare:f,expenseTotal:_,net:c-_,receivedBack:h.received,paidBack:h.sent}}function Cp(n){return(n||[]).map(e=>({from:e.from,to:e.to,amount:Math.round(e.amountSatang/100)})).filter(e=>e.amount>=1)}const Gi=[{key:"food",label:"อาหารและเครื่องดื่ม",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"fun",label:"บันเทิง",icons:["fa-film"]},{key:"other",label:"อื่นๆ",icons:[]}];function ET(n){const e=Gi.find(t=>t.icons.includes(n));return e?e.key:"other"}const yh=n=>String(n||"").slice(0,7);function vh({name:n,month:e,today:t="",members:r,transactions:s,settlements:i,walletItems:a=[]}){const c=ce(n),l=Pp({memberNames:r,transactions:s,settlements:i,month:e}),h=xc({name:c,month:e,walletEntries:a.map(v=>({ownerName:c,type:v.type,amount:v.amount,date:v.date})),transactions:s,settlements:i}),f=Object.fromEntries(Gi.map(v=>[v.key,0])),_={},m={},T=(v,w,ue,Ce,Rt)=>{if(!Ce||!String(v).startsWith(e))return;f[ET(ue)]+=Ce;const Ze=Number(String(v).slice(8,10));_[Ze]=(_[Ze]||0)+Ce,m[Ze]||(m[Ze]=[]),m[Ze].push({desc:w||"ไม่ระบุ",icon:ue,satang:Ce,kind:Rt})};for(const v of s)!v||yh(v.date)!==e||T(v.date,v.desc,v.icon,Hi(v,c),"group");for(const v of a)v.type==="expense"&&T(v.date,v.desc,v.icon,Math.round(Number(v.amount)*100),"personal");const R=Object.values(f).reduce((v,w)=>v+w,0),N=Gi.map(v=>({key:v.key,label:v.label,satang:f[v.key],percent:R>0?Math.round(f[v.key]/R*100):0})).filter(v=>v.satang>0).sort((v,w)=>w.satang-v.satang),S=t.startsWith(e)?Number(t.slice(8,10)):Tr(e),M=[];for(let v=1;v<=S;v++)M.push({day:v,satang:_[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,items:m[v]||[]});const O=Tr(e),$=[];for(let v=1;v<=O;v++)$.push({day:v,date:`${e}-${String(v).padStart(2,"0")}`,satang:_[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,isFuture:t.startsWith(e)&&v>Number(t.slice(8,10)),items:m[v]||[]});const H=h.expenseTotal,X=S>0?Math.round(H/S/100):0,Z=Cp(l.plan),I=Z.filter(v=>v.to===c).map(v=>({name:v.from,amount:v.amount})).sort((v,w)=>w.amount-v.amount),y=Z.filter(v=>v.from===c).map(v=>({name:v.to,amount:v.amount})).sort((v,w)=>w.amount-v.amount),E=I[0]?I[0].amount:0;I.forEach(v=>{v.share=E?Math.round(v.amount/E*100):0});const b=y[0]?y[0].amount:0;y.forEach(v=>{v.share=b?Math.round(v.amount/b*100):0});const A=[];for(const v of s){if(!v||yh(v.date)!==e)continue;const w=Hi(v,c);(w>0||Sp(v,c)>0)&&A.push({id:v.id,kind:"group",desc:v.desc||"",icon:v.icon,satang:w,date:v.date,ts:Number(v.timestamp)||0})}for(const v of a)String(v.date).startsWith(e)&&A.push({id:v.id,kind:v.type==="income"?"income":"personal",desc:v.desc||"",icon:v.icon,satang:Math.round(Number(v.amount)*100),date:v.date,ts:Number(v.timestamp)||0});return A.sort((v,w)=>w.date.localeCompare(v.date)||w.ts-v.ts),{month:e,incomeSat:h.income,spentSat:H,personalSat:h.personalExpense,groupShareSat:h.groupShare,netSat:h.net,net:Ap(h.net),spentPercent:h.income>0?Math.min(999,Math.round(H/h.income*100)):null,receivedBackSat:h.receivedBack,categories:N,daily:M,calendarDays:$,average:X,owedToMe:I,owedTotal:I.reduce((v,w)=>v+w.amount,0),iOwe:y,iOweTotal:y.reduce((v,w)=>v+w.amount,0),recent:A.slice(0,5),warnings:l.warnings}}function wh(n,e,t=""){const r=e.month,s={};for(const h of e.categories||[])s[h.key]=h.satang;const i=dT(hT(n||{},r),{totalSat:e.spentSat,cats:s}),a=(n&&n.goals||[]).map(h=>({...h,s:Ip(h,r)})),c=t.startsWith(r),l=c?Tr(r)-Number(t.slice(8,10))+1:0;return{month:r,status:i,goals:a,saving:bp(a,r),suggestSat:mT(e.incomeSat,a,r),daysLeft:l,perDaySat:c&&i.leftSat>0&&l>0?Math.floor(i.leftSat/l/100)*100:0}}function TT({me:n,month:e,today:t,group:r=[],personal:s=[],cards:i=[]}){const a=ce(n),c=S=>Math.round((Number(S)||0)*100),l=[];for(const S of r){if(!S||S.active===!1)continue;const M=S.splits&&typeof S.splits=="object"?S.splits:{},O=Object.keys(M).find(H=>ce(H)===a),$=ce(S.payer);!O&&$!==a||l.push({id:"g:"+S.id,kind:"group",desc:String(S.desc||"บิลรายเดือน"),icon:S.icon||"",billingDay:Number(S.billingDay)||1,mySat:O?c(M[O]):0,totalSat:c(S.amount),payer:$,people:Object.keys(M).length,names:Object.keys(M).map(ce),coverFor:!O,every:Er(S),startMonth:Wi(S)})}for(const S of s)!S||S.active===!1||l.push({id:"p:"+S.id,kind:"personal",desc:String(S.desc||"รายจ่ายรายเดือน"),icon:S.icon||"",billingDay:Number(S.billingDay)||1,mySat:c(S.amount),totalSat:c(S.amount),payer:a,people:1,coverFor:!1,every:Er(S),startMonth:Wi(S)});const h=(S,M)=>Math.min(Math.max(1,Math.round(M)||1),Tr(S)),f=(S,M)=>{const O=`${M}-${String(h(M,S.billingDay)).padStart(2,"0")}`,$=Math.round((Date.parse(O+"T00:00:00Z")-Date.parse(t+"T00:00:00Z"))/864e5);return{...S,date:O,day:Number(O.slice(8,10)),daysLeft:$,status:$<0?"done":$===0?"today":"soon"}},_=bT(i,t),m=[...l.filter(S=>Na(S,e)).map(S=>f(S,e)),..._.filter(S=>S.date.startsWith(e))].sort((S,M)=>S.day-M.day||S.desc.localeCompare(M.desc)),T=t.slice(0,7),R=[...[T,ft(T,1),ft(T,2)].flatMap(S=>l.filter(M=>Na(M,S)).map(M=>f(M,S))),..._].filter(S=>S.daysLeft>=0).sort((S,M)=>S.daysLeft-M.daysLeft||M.mySat-S.mySat),N=m.filter(S=>S.kind!=="card");return{month:e,items:m,totalSat:N.reduce((S,M)=>S+M.mySat,0),dueSat:N.filter(S=>S.daysLeft>=0).reduce((S,M)=>S+M.mySat,0),upcoming:R}}function IT(n){const e=n&&n.bank&&n.bank!=="อื่นๆ"?n.bank:"บัตร";return n&&n.last4?`${e} •• ${n.last4}`:e}function Yo(n){return`${Number(n.slice(8,10))} ${$n(n.slice(0,7))}`}function bT(n,e){const t=[];for(const r of n||[]){const s=(i,a)=>{const c=Math.round((Date.parse(i.dueDate+"T00:00:00Z")-Date.parse(e+"T00:00:00Z"))/864e5);t.push({id:`c:${r.id}:${i.key}`,kind:"card",cardId:r.id,color:r.color,desc:IT(r),icon:"fa-credit-card",date:i.dueDate,day:Number(i.dueDate.slice(8,10)),billingDay:r.dueDay,daysLeft:c,status:c<0?"done":c===0?"today":"soon",mySat:Number(i.amountSat)||0,totalSat:Number(i.amountSat)||0,start:i.start,end:i.end,pending:a,people:1,coverFor:!1})};r.due&&!r.due.paid&&s(r.due,!1),r.open&&s(r.open,!0)}return t}function AT(n,e){if(n.kind==="card")return n.pending?`ยังไม่ตัดรอบ (ตัดรอบ ${Yo(n.end)})`:`ยอดรอบ ${Yo(n.start)} - ${Yo(n.end)}`;if(n.kind==="personal")return"ส่วนตัว";const t=n.payer===ce(e);return n.coverFor?"คุณจ่ายแทน":t?`คุณจ่าย หาร ${n.people}`:`${n.payer} จ่าย หาร ${n.people}`}function Tr(n){const[e,t]=n.split("-").map(Number);return new Date(Date.UTC(e,t,0)).getUTCDate()}function ft(n,e){const[t,r]=n.split("-").map(Number),s=t*12+(r-1)+e,i=Math.floor(s/12);return`${i}-${String(s-i*12+1).padStart(2,"0")}`}const Ns=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],ST=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];function Np(n){const[e,t]=n.split("-").map(Number);return`${Ns[t-1]} ${e+543}`}function Fc(n){const[e,t]=n.split("-").map(Number);return`${ST[t-1]} ${e+543}`}function te(n,{decimals:e=0,sign:t=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return`${r<0?"-":t&&r>0?"+":""}฿${s}`}function RT({name:n,months:e,transactions:t,settlements:r,walletItems:s=[]}){const i=ce(n),a=s.map(c=>({ownerName:i,type:c.type,amount:c.amount,date:c.date}));return e.map(c=>{const l=xc({name:i,month:c,walletEntries:a,transactions:t,settlements:r});return{month:c,spentSat:l.expenseTotal,incomeSat:l.income}})}function Eh(n,e){return Array.from({length:e},(t,r)=>ft(n,r-(e-1)))}function $n(n){return Ns[Number(n.slice(5,7))-1]}function WI(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10?e.slice(0,6)+"XXXX":e.length===13?"X-XXXX-XXXXX-"+e.slice(11,13)+"-X":e}function Dp(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10||e.length===13?e:""}function HI(n,e){const t=Dp(n);return!t||!(Number(e)>0)?"":`https://promptpay.io/${t}/${Number(e).toFixed(2)}`}function kT({name:n,month:e,members:t,transactions:r,settlements:s}){const i=ce(n),a=Pp({memberNames:t,transactions:r,settlements:s,month:e}),c=Cp(a.plan).map(f=>({from:f.from,to:f.to,amount:f.amount,role:f.from===i?"pay":f.to===i?"receive":"other"})),l={pay:0,receive:1,other:2};c.sort((f,_)=>l[f.role]-l[_.role]||_.amount-f.amount);const h=(s||[]).filter(f=>f&&f.status==="verified"&&f.month===e).map(f=>({id:f.id,from:f.from,to:f.to,amount:Number(f.amount)||0,manual:!!f.verifiedByAdmin,createdAt:f.createdAt||""})).sort((f,_)=>String(_.createdAt).localeCompare(String(f.createdAt)));return{lines:c,history:h,mineToPay:c.filter(f=>f.role==="pay"),mineToReceive:c.filter(f=>f.role==="receive"),cleared:c.length===0}}function PT({name:n,month:e,walletItems:t,transactions:r,settlements:s}){const i=ce(n),a=xc({name:i,month:e,walletEntries:t.map(l=>({ownerName:i,type:l.type,amount:l.amount,date:l.date})),transactions:r,settlements:s}),c=t.filter(l=>String(l.date).startsWith(e)).sort((l,h)=>h.date.localeCompare(l.date)||(Number(h.timestamp)||0)-(Number(l.timestamp)||0)).map(l=>({id:l.id,type:l.type==="income"?"income":"expense",desc:l.desc||"",amount:Number(l.amount)||0,date:l.date,icon:l.icon||"",card:l.card||"",unconfirmed:l.unconfirmed===!0,recurring:l.recurring===!0||String(l.id||"").startsWith("wsub_"),ts:Number(l.timestamp)||0}));return{incomeSat:a.income,personalSat:a.personalExpense,groupShareSat:a.groupShare,spentSat:a.expenseTotal,netSat:a.net,receivedBackSat:a.receivedBack,paidBackSat:a.paidBack,items:c}}function CT({name:n,month:e,transactions:t,search:r=""}){const s=ce(n),i=String(r||"").trim().toUpperCase(),a=t.filter(l=>l&&String(l.date||"").startsWith(e)).map(l=>({id:l.id,desc:l.desc||"",date:l.date,icon:l.icon||"",payer:l.payer||"",amountSat:NT(l.amount),myShareSat:Hi(l,s),iPaid:ce(l.payer)===s,people:Object.keys(l.splits||{}),type:l.paymentType||"normal",ts:Number(l.timestamp)||0})).filter(l=>!i||l.desc.toUpperCase().includes(i)||ce(l.payer).includes(i)).sort((l,h)=>h.date.localeCompare(l.date)||h.ts-l.ts),c=a.filter(l=>l.myShareSat>0||l.iPaid);return{all:a,mine:c,totalSat:a.reduce((l,h)=>l+h.amountSat,0),myShareSat:c.reduce((l,h)=>l+h.myShareSat,0)}}const NT=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},GI=[{key:"food",label:"อาหาร",fa:"fa-utensils",icon:"food"},{key:"drink",label:"เครื่องดื่ม",fa:"fa-mug-hot",icon:"coffee"},{key:"goods",label:"ของใช้",fa:"fa-cart-shopping",icon:"bag"},{key:"travel",label:"เดินทาง",fa:"fa-car",icon:"car"},{key:"bills",label:"บิล",fa:"fa-bolt",icon:"bolt"},{key:"rent",label:"ที่พัก",fa:"fa-house",icon:"key"},{key:"fun",label:"บันเทิง",fa:"fa-film",icon:"film"},{key:"health",label:"สุขภาพ",fa:"fa-pills",icon:"pill"},{key:"trip",label:"เที่ยว",fa:"fa-plane",icon:"plane"},{key:"gift",label:"ของขวัญ",fa:"fa-gift",icon:"gift"},{key:"pet",label:"สัตว์เลี้ยง",fa:"fa-paw",icon:"paw"},{key:"other",label:"อื่นๆ",fa:"fa-money-bill",icon:"dots"}],KI=aT;function DT({me:n,members:e,transactions:t,limit:r=6}){const s=ce(n),i=new Set((e||[]).map(ce)),a=new Map;for(const c of t||[]){const l=new Set(Object.keys(c&&c.splits||{}).map(ce));l.add(ce(c&&c.payer)),l.has(s)&&l.forEach(h=>{h&&h!==s&&i.has(h)&&a.set(h,(a.get(h)||0)+1)})}return[...a.entries()].sort((c,l)=>l[1]-c[1]||(c[0]<l[0]?-1:1)).slice(0,r).map(([c])=>c)}function MT(n,e){const t=Math.round(Number(n)*100),r=e.length,s=Math.floor(t/r),i=t-s*r;return Object.fromEntries(e.map((a,c)=>[a,(s+(c<i?1:0))/100]))}function QI(n){const e=Math.round(Number(n.amount)*100)/100;if(!Number.isFinite(e)||e<=0)return{ok:!1,error:"ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"};if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date||""))return{ok:!1,error:"เลือกวันที่ให้ถูกต้อง"};if(n.today&&n.date>n.today)return{ok:!1,error:"เลือกวันที่ไม่เกินวันนี้"};const t=ce(n.payer);if(!t)return{ok:!1,error:"เลือกคนจ่าย"};const r=[...new Set((n.participants||[]).map(ce).filter(Boolean))];if(r.length===0)return{ok:!1,error:"เลือกคนหารอย่างน้อย 1 คน"};if(r.length===1&&r[0]===t)return{ok:!1,error:"บิลที่มีแต่ตัวเองคนเดียวไม่ต้องหาร ให้ใช้รายจ่ายส่วนตัวแทน"};let s;if(n.mode==="custom"){s={};let h=0;for(const _ of r){const m=Math.round(Number((n.custom||{})[_])*100);if(!Number.isFinite(m)||m<=0)return{ok:!1,error:`ใส่ยอดของ ${_} ให้มากกว่า 0 (หรือเอาออกจากคนหาร)`};s[_]=m/100,h+=m}const f=Math.round(e*100)-h;if(f!==0)return{ok:!1,error:`ยอดที่แบ่งรวมกัน ${te(h/100,{decimals:2})} ไม่เท่ายอดบิล ${te(e,{decimals:2})} (${f>0?"ขาด":"เกิน"} ${te(Math.abs(f)/100,{decimals:2})})`}}else{const h=r.includes(t)?[...r.filter(f=>f!==t),t]:r;s=MT(e,h)}const i=String(n.desc||"").trim().slice(0,100)||"ไม่ระบุ",a=n.icon||"fa-money-bill",c=n.now||Date.now(),l={payer:t,icon:a};if(n.type==="installment"){const h=Number(n.installments);let f;try{f=iT({amount:e,installments:h,splits:s,date:n.date})}catch(m){return{ok:!1,error:m.message}}const _=`grp_${c}`;return{ok:!0,docs:f.map((m,T)=>({...l,date:m.date,desc:`${i} (${m.index}/${h})`,amount:m.amount,splits:m.splits,paymentType:"installment",groupId:_,timestamp:c+T})),template:null,summary:`ผ่อน ${h} งวด งวดละประมาณ ${te(e/h,{decimals:2})}`}}if(n.type==="subscription"){const h=`sub_${c}`,f=n.recurring!==!1,_=[1,3,6,12].includes(Number(n.every))?Number(n.every):1,m={...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"subscription",subscriptionRecurring:f,subscriptionStartDate:n.date,groupId:h,timestamp:c},T=f?{desc:i,amount:e,payer:t,splits:s,icon:a,billingDay:Number(n.date.slice(8,10))||1,groupId:h,active:!0,createdAt:new Date(c),createdBy:t,lastGeneratedMonth:n.date.slice(0,7),every:_,startMonth:Number(n.date.slice(5,7))||1}:null,R=_===1?"ทุกเดือน":_===12?"ทุกปี":`ทุก ${_} เดือน`;return{ok:!0,docs:[m],template:T,summary:f?`สร้างซ้ำ${R}อัตโนมัติ`:"ครั้งเดียว"}}return{ok:!0,docs:[{...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"normal",timestamp:c}],template:null,summary:r.includes(t)?`หารกับเพื่อน ${r.length} คน (รวมผู้จ่าย)`:`จ่ายแทน ${r.length} คน (ไม่มีส่วนของผู้จ่าย)`}}const ii=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"list",label:"รายการ",icon:"list"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"me",label:"ฉัน",icon:"user"}],VT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];function Mp({month:n,today:e}){if(!n)return null;const t=e&&e.startsWith(n),r=t?Number(e.slice(8,10)):Tr(n),[s,i]=n.split("-").map(Number),a=t?VT[new Date(Date.UTC(s,i-1,r)).getUTCDay()]:"ทั้งเดือน";return d("span",{class:"dtile","aria-hidden":"true",children:[d("span",{class:"m",children:$n(n)}),d("span",{class:"d num",children:r}),d("span",{class:"w",children:a})]})}const Th=["home","list","clear","me"];function OT({page:n,children:e}){const t=zh(n),r=t.current;_e(()=>{t.current=n},[n]);const s=r===n?"":Th.indexOf(n)>Th.indexOf(r)?"dir-r":"dir-l";return d("div",{class:`page-swap ${s}`.trim(),children:e},n)}function LT({month:n,onChange:e,min:t,max:r}){return d("div",{class:"month-wrap",children:[n!==r&&d("button",{type:"button",class:"btn sm ghost",onClick:()=>e(r),children:"เดือนนี้"}),d("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[d("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=t,onClick:()=>e(ft(n,-1)),children:d(Q,{name:"left",size:16})}),d("span",{class:"num","aria-live":"polite",children:Np(n)}),d("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>e(ft(n,1)),children:d(Q,{name:"right",size:16})})]})]})}function Vp({icon:n,title:e,note:t}){return d("div",{class:"sec-t",children:[d("span",{class:"ico",children:d(Q,{name:n})}),d("div",{children:[d("h2",{children:e}),t&&d("p",{children:t})]})]})}function xT(n){let e=0;for(const t of String(n||""))e=(e*31+t.codePointAt(0))%997;return e%5}const FT=({name:n,pictures:e={}})=>d("span",{class:"payer-av",title:`${n} จ่าย`,children:d(Uc,{name:n,pictureUrl:e[n],size:"xs"})}),UT=({payer:n,people:e=[],pictures:t={}})=>d("span",{class:"flow","aria-label":`${n} จ่าย หารกับ ${e.join(", ")}`,children:[d(FT,{name:n,pictures:t}),d(Q,{name:"right",size:12,class:"flow-arr"}),d(Da,{names:e,pictures:t,max:3,size:"xs"})]});function Da({names:n=[],pictures:e={},max:t=3,size:r="sm"}){const s=n.slice(0,t);return d("span",{class:"avstack","aria-hidden":"true",children:[s.map(i=>d(Uc,{name:i,pictureUrl:e[i],size:r},i)),n.length>t&&d("span",{class:"avstack-more num",children:["+",n.length-t]})]})}function Uc({name:n,pictureUrl:e,size:t=""}){const[r,s]=ee(!1),i=[...String(n||"?")][0],a=`av tint${xT(n)} ${t}`.trim();return e&&!r?d("img",{src:e,alt:n?`รูปของ ${n}`:"",class:a,onError:()=>s(!0),loading:"lazy"}):d("div",{class:a,"aria-hidden":"true",children:i})}function $T(){const[n,e]=ee(()=>{if(typeof document>"u")return"light";const s=localStorage.getItem("dm:theme");return s==="dark"||s==="light"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),t=()=>{const s=n==="dark"?"light":"dark";e(s),document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("dm:theme",s)}catch{}},r=n==="dark";return d("button",{type:"button",class:"theme-toggle","aria-label":r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",title:r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",onClick:t,children:d(Q,{name:r?"sun":"moon",size:18})})}function XI({label:n,value:e,options:t,onChange:r,icon:s="calendar",title:i,id:a}){const[c,l]=ee(!1),h=(t||[]).find(f=>f.value===e)||t&&t[0]||{};return d("div",{class:"field",children:[n&&d("label",{for:a,children:n}),d("button",{type:"button",id:a,class:"c-select-trigger",onClick:()=>l(!0),"aria-haspopup":"dialog",children:[s&&d("span",{class:"ico sm",children:d(Q,{name:s,size:16})}),d("span",{class:"c-select-val num",children:h.label||e}),d(Q,{name:"down",size:16,class:"mute"})]}),c&&d(Op,{title:i||n||"เลือกรายการ",onClose:()=>l(!1),children:d("div",{class:"c-select-list",children:(t||[]).map(f=>{const _=f.value===e;return d("button",{type:"button",class:`c-select-item ${_?"on":""}`,onClick:()=>{r(f.value),l(!1)},children:[d("span",{class:"c-select-item-text num",children:f.label}),_&&d(Q,{name:"check",size:18,class:"rcv"})]},f.value)})})})]})}function BT({value:n,max:e,today:t,onSelect:r,onClose:s}){const[i,a]=ee(()=>(n||t).slice(0,7)),[c,l]=ee(n||t),[h,f]=i.split("-").map(Number),_=Tr(i),m=new Date(Date.UTC(h,f-1,1)).getUTCDay(),T=[];for(let N=0;N<m;N++)T.push(null);for(let N=1;N<=_;N++)T.push(`${i}-${String(N).padStart(2,"0")}`);const R=["อา","จ","อ","พ","พฤ","ศ","ส"];return d(Op,{title:"ปฏิทิน",onClose:s,children:d("div",{class:"cal-box",children:[d("div",{class:"cal-hd",children:[d("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",onClick:()=>a(ft(i,-1)),children:d(Q,{name:"left",size:16})}),d("span",{class:"cal-month-title num",children:Fc(i)}),d("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e&&ft(i,1).slice(0,7)>e.slice(0,7),onClick:()=>a(ft(i,1)),children:d(Q,{name:"right",size:16})})]}),d("div",{class:"cal-grid",role:"grid",children:[d("div",{class:"cal-dow-row",role:"row",children:R.map(N=>d("span",{class:"cal-dow",role:"columnheader",children:N},N))}),d("div",{class:"cal-days-grid",children:T.map((N,S)=>{if(!N)return d("span",{class:"cal-day empty"},`empty-${S}`);const M=Number(N.slice(8,10)),O=N===t,$=N===c,H=e&&N>e;return d("button",{type:"button",class:`cal-day-btn num ${$?"on":""} ${O?"today":""}`,disabled:H,onClick:()=>l(N),children:M},N)})})]}),d("div",{class:"cal-actions",children:[d("button",{type:"button",class:"btn ghost",onClick:()=>{l(t),a(t.slice(0,7))},children:"วันนี้"}),d("button",{type:"button",class:"btn",onClick:()=>r(c),children:["ยืนยัน (",Number(c.slice(8,10))," ",Ns[Number(c.slice(5,7))-1],")"]})]})]})})}function YI({id:n,label:e="วันที่",value:t,onChange:r,max:s,today:i}){const[a,c]=ee(!1),[l,h,f]=i.split("-").map(Number),_=new Date(Date.UTC(l,h-1,f-1)),m=`${_.getUTCFullYear()}-${String(_.getUTCMonth()+1).padStart(2,"0")}-${String(_.getUTCDate()).padStart(2,"0")}`,T=t===i,R=t===m,[N,S,M]=(t||i).split("-").map(Number),O=N+543,$=Ns[S-1]||"",H=T?`วันนี้ · ${M} ${$} ${O}`:R?`เมื่อวาน · ${M} ${$} ${O}`:`${M} ${$} ${O}`;return d("div",{class:"field",children:[d("span",{class:"fl",id:`${n}-l`,children:e}),d("div",{class:"date-pick-wrap",children:[d("button",{type:"button",id:n,class:"date-trigger","aria-labelledby":`${n}-l`,onClick:()=>c(!0),children:[d("span",{class:"ico sm",children:d(Q,{name:"calendar",size:16})}),d("span",{class:"date-trigger-text num",children:H}),d("span",{class:"date-trigger-tag",children:"ปฏิทิน"})]}),d("div",{class:"date-quick-chips",children:[d("button",{type:"button",class:`date-quick-btn ${T?"on":""}`,onClick:()=>r(i),children:"วันนี้"}),d("button",{type:"button",class:`date-quick-btn ${R?"on":""}`,onClick:()=>r(m),children:"เมื่อวาน"}),d("button",{type:"button",class:`date-quick-btn ${!T&&!R?"on":""}`,onClick:()=>c(!0),children:"แก้ไขวันที่"})]})]}),a&&d(BT,{value:t||i,max:s||i,today:i,onSelect:X=>{r(X),c(!1)},onClose:()=>c(!1)})]})}const Kr=[];function Op({title:n,onClose:e,children:t,as:r="div",onSubmit:s,action:i,class:a=""}){const c=zh(null);return _e(()=>{const h=document.activeElement,f={};Kr.push(f);const _=R=>{R.key==="Escape"&&Kr[Kr.length-1]===f&&e()};document.addEventListener("keydown",_);const m=document.body.style.overflow;return document.body.style.overflow="hidden",(c.current&&c.current.querySelector("input, select, textarea")||c.current).focus({preventScroll:!0}),()=>{const R=Kr.indexOf(f);R>=0&&Kr.splice(R,1),document.removeEventListener("keydown",_),document.body.style.overflow=m,h&&h.focus&&h.focus({preventScroll:!0})}},[]),d("div",{class:"scrim",onClick:h=>h.target===h.currentTarget&&e(),children:d(r,{class:`sheet ${a}`.trim(),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:c,onSubmit:s,children:[d("div",{class:"grab","aria-hidden":"true"}),d("div",{class:"sheet-hd",children:[d("h2",{children:n}),i,d("button",{type:"button",class:"icon-btn",onClick:e,"aria-label":"ปิด",children:d(Q,{name:"close",size:18})})]}),t]})})}function JI({label:n,onConfirm:e,verb:t="ลบ",busyText:r="กำลังลบ",keepText:s="ยกเลิก",icon:i="trash",danger:a=!0}){const[c,l]=ee("idle");return _e(()=>{if(c!=="confirm")return;const h=setTimeout(()=>l("idle"),5e3);return()=>clearTimeout(h)},[c]),c==="idle"?d("button",{type:"button",class:"icon-btn","aria-label":`${t} ${n}`,onClick:()=>l("confirm"),children:d(Q,{name:i,size:17})}):d("span",{class:"confirm",children:[d("button",{type:"button",class:`btn sm ${a?"danger":""}`,disabled:c==="busy",onClick:async()=>{l("busy");try{await e()}finally{l("idle")}},children:c==="busy"?r:t}),d("button",{type:"button",class:"btn sm ghost",disabled:c==="busy",onClick:()=>l("idle"),children:s})]})}function rt({load:n,name:e,fallback:t=null,...r}){const[s,i]=ee(null);if(_e(()=>{let c=!0;return n().then(l=>{c&&l&&l[e]&&i({name:e,C:l[e]})}).catch(()=>{}),()=>{c=!1}},[e]),!s||s.name!==e)return t;const a=s.C;return d(a,{...r})}function ZI({icon:n,title:e,summary:t,children:r,defaultOpen:s=!1}){const[i,a]=ee(s);return d("section",{class:"card collapsible",children:[d("button",{type:"button",class:"coll-head","aria-expanded":i,onClick:()=>a(!i),children:[d("span",{class:"ico accent",children:d(Q,{name:n})}),d("span",{class:"grow",children:[d("b",{children:e}),d("small",{children:t})]}),d(Q,{name:"down",size:16,class:`coll-chev ${i?"up":""}`})]}),i&&d("div",{class:"coll-body",children:r})]})}function Rn({blocks:n=3}){return d("div",{class:"home-grid","aria-busy":"true","aria-label":"กำลังโหลดข้อมูล",children:[d("div",{class:"col",children:Array.from({length:Math.ceil(n/2)},(e,t)=>d("div",{class:"card sk",style:{height:t===0?"168px":"220px"}},t))}),d("div",{class:"col",children:Array.from({length:Math.floor(n/2)},(e,t)=>d("div",{class:"card sk",style:{height:"200px"}},t))})]})}function jT({onRetry:n}){return d("div",{class:"card state",role:"alert",children:[d("span",{class:"ico",children:d(Q,{name:"alert"})}),d("div",{children:[d("b",{children:"โหลดข้อมูลไม่สำเร็จ"}),d("p",{children:"ตรวจอินเทอร์เน็ตแล้วลองใหม่ ถ้ายังไม่ได้ อาจเป็นเพราะโควต้าฐานข้อมูลของวันนี้เต็ม"})]}),d("button",{type:"button",class:"btn sm",onClick:n,children:"ลองใหม่"})]})}function qT({tab:n,onTab:e,userName:t,userPicture:r,tools:s,onAdd:i,children:a}){const c=(ii.find(l=>l.key===n)||ii[0]).label;return d("div",{class:"app",children:[d("a",{class:"skip",href:"#main",children:"ข้ามไปเนื้อหา"}),d("aside",{class:"side",children:[d("div",{class:"brand",children:[d(jl,{size:34}),"Dept Money"]}),d("nav",{"aria-label":"เมนูหลัก",children:ii.map(l=>d("button",{type:"button",class:`snav ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[d(Q,{name:l.icon}),l.label]},l.key))}),d("button",{type:"button",class:"btn side-add",onClick:i,children:[d(Q,{name:"plus"}),"บันทึกรายการ"]}),d("div",{class:"side-me",children:[d(Uc,{name:t,pictureUrl:r}),d("span",{children:t})]})]}),d("main",{class:"page",id:"main",children:[d("header",{class:"top",children:[d("div",{class:"brand mobile-only","aria-hidden":"true",children:[d(jl,{size:30}),"Dept Money"]}),d("h1",{class:"page-title",children:c}),d("div",{class:"top-actions",children:[s,d($T,{})]})]}),a]}),d("button",{type:"button",class:"fab",onClick:i,children:[d(Q,{name:"plus"}),"บันทึก"]}),d("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:d("div",{class:"tabbar-in",children:ii.map(l=>d("button",{type:"button",class:`tab ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[d(Q,{name:l.icon}),l.label]},l.key))})})]})}const zT=Object.fromEntries(Gi.map(n=>[n.key,n.label])),Lp={food:"food",bills:"bolt",goods:"bag",travel:"car",fun:"film",other:"dots"},WT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],HT=["อา","จ","อ","พ","พฤ","ศ","ส"];function xp({percent:n,of:e="รายรับ",sub:t="ใช้ไปแล้ว"}){const s=2*Math.PI*42,i=Math.max(0,Math.min(100,n));return d("div",{class:"ring",role:"img","aria-label":`ใช้ไปแล้ว ${n}% ของ${e}`,children:[d("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[d("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),d("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--pay)","stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${s*i/100} ${s}`,transform:"rotate(-90 50 50)"})]}),d("div",{class:"ring-t",children:[d("b",{class:"num",children:[n,"%"]}),d("span",{children:t})]})]})}function GT({m:n,bm:e,today:t,onBudget:r}){const s=e.status,i=s.leftSat<0;return d("section",{class:"card hero","aria-label":"สรุปเดือนเทียบงบ",children:[d("div",{class:"hero-l",children:[d("div",{class:"hero-top",children:[d(Mp,{month:n.month,today:t}),d("div",{children:[d("p",{class:"lbl",children:i?"ใช้เกินงบแล้ว":"งบเหลือเดือนนี้"}),d("p",{class:"big num",children:te(Math.round(Math.abs(s.leftSat)/100))})]})]}),d("div",{class:"chips",children:[d("button",{type:"button",class:"chip chip-btn",onClick:r,"aria-label":`งบ ${te(s.budgetSat/100)} แตะเพื่อแก้งบ`,children:["งบ ",d("b",{class:"num",children:te(s.budgetSat/100)})]}),d("span",{class:"chip",children:[d(Q,{name:"up",size:14,class:"pay"}),"ใช้ไป ",d("b",{class:"num",children:te(s.spentSat/100)})]}),n.incomeSat>0&&d("span",{class:"chip",children:[d(Q,{name:"down",size:14,class:"rcv"}),"รายรับ ",d("b",{class:"num",children:te(n.incomeSat/100)})]})]}),d("p",{class:"lbl hero-split",children:e.perDaySat>0?d(Y,{children:["เหลืออีก ",e.daysLeft," วัน ใช้ได้วันละ ",d("b",{class:"num",children:te(e.perDaySat/100)})]}):d(Y,{children:["ส่วนตัว ",d("span",{class:"num",children:te(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",d("span",{class:"num",children:te(n.groupShareSat/100)})]})})]}),d(xp,{percent:s.percent,of:"งบ",sub:"ของงบ"})]})}function KT({m:n,onAddIncome:e,today:t="",bm:r=null,onBudget:s=null}){if(r&&r.status.set)return d(GT,{m:n,bm:r,today:t,onBudget:s});const i=n.incomeSat>0,a=i&&n.netSat<0,c=i?a?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",l=i?Math.abs(n.netSat)/100:n.spentSat/100,h=!i||a?"pay":"rcv";return d("section",{class:"card hero","aria-label":"สรุปเดือน",children:[d("div",{class:"hero-l",children:[d("div",{class:"hero-top",children:[d(Mp,{month:n.month,today:t}),d("div",{children:[d("p",{class:"lbl",children:c}),d("p",{class:`big num ${h}`,children:te(Math.round(l))})]})]}),d("div",{class:"chips",children:[d("span",{class:"chip",children:[d(Q,{name:"down",size:14,class:"rcv"}),"รายรับ ",d("b",{class:"num",children:te(n.incomeSat/100)})]}),d("span",{class:"chip",children:[d(Q,{name:"up",size:14,class:"pay"}),"ใช้ไป ",d("b",{class:"num",children:te(n.spentSat/100)})]})]}),d("p",{class:"lbl hero-split",children:["ส่วนตัว ",d("span",{class:"num",children:te(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",d("span",{class:"num",children:te(n.groupShareSat/100)})]}),s&&d("button",{type:"button",class:"set-budget",onClick:s,children:[d(Q,{name:"plus",size:14}),"ตั้งงบเดือนนี้"]})]}),i?d(xp,{percent:n.spentPercent}):d("button",{type:"button",class:"hint",onClick:e,children:[d(Q,{name:"plus",size:20}),"เพิ่มรายรับ",d("small",{children:"เพื่อดูว่าเหลือใช้เท่าไร"})]})]})}function QT({m:n,profiles:e=[],month:t="",nowMonth:r=""}){const s=Object.fromEntries((e||[]).map(l=>[l.name,l.pictureUrl])),i=n.owedToMe.map(l=>l.name),a=n.iOwe.map(l=>l.name),c=t&&r&&t!==r?` (${$n(t)})`:"";return d("div",{class:"owe-grid",children:[d("a",{class:"card owe-card",href:"#clear","aria-label":`เพื่อนค้างฉัน ${te(n.owedTotal)}${i.length?" ได้แก่ "+i.join(", "):""}`,children:[d("span",{class:"owe-k",children:["เพื่อนค้างฉัน",c,d(Q,{name:"right",size:14})]}),d("b",{class:`owe-v num ${n.owedTotal>0?"rcv":""}`,children:te(n.owedTotal)}),i.length>0?d(Da,{names:i,pictures:s}):d("span",{class:"owe-ok",children:[d(Q,{name:"check",size:14}),"ไม่มีใครค้าง"]})]}),d("a",{class:"card owe-card",href:"#clear","aria-label":`ฉันค้างเพื่อน ${te(n.iOweTotal)}${a.length?" ได้แก่ "+a.join(", "):""}`,children:[d("span",{class:"owe-k",children:["ฉันค้างเพื่อน",c,d(Q,{name:"right",size:14})]}),d("b",{class:`owe-v num ${n.iOweTotal>0?"pay":""}`,children:te(n.iOweTotal)}),a.length>0?d(Da,{names:a,pictures:s}):d("span",{class:"owe-ok",children:[d(Q,{name:"check",size:14}),"ไม่ค้างใคร"]})]})]})}function XT({sched:n,me:e,onOpen:t,onCard:r,pictures:s={}}){const i=n&&n.upcoming||[];if(!i.length)return null;const[a,...c]=i,l=R=>te(R/100,{decimals:R%100?2:0}),h=R=>R.coverFor?l(R.totalSat):l(R.mySat),f=R=>`${Number(R.date.slice(8,10))} ${$n(R.date.slice(0,7))}`,_=R=>R.daysLeft===0?"วันนี้":`อีก ${R.daysLeft} วัน`,m=R=>R.kind==="card"&&r?()=>r(R.cardId):t,T=R=>R.kind==="card"?R.pending?"จ่ายบัตร (ยังไม่ตัดรอบ)":"ครบกำหนดจ่ายบัตร":"บิลถัดไป";return d("section",{class:"nb","aria-label":"บิลรายเดือนที่จะถึง",children:[d("button",{type:"button",class:"nb-main",onClick:m(a),"aria-label":`${T(a)} ${a.desc} ${h(a)} ${_(a)} แตะเพื่อเปิดปฏิทินบิล`,children:[a.daysLeft===0?d("span",{class:"nb-cal num","aria-hidden":"true",children:[d("span",{class:"band",children:"วันนี้"}),d("b",{children:Number(a.date.slice(8,10))}),d("small",{children:$n(a.date.slice(0,7))})]}):d("span",{class:"nb-count","aria-hidden":"true",children:[d("small",{children:"อีก"}),d("b",{class:"num",children:a.daysLeft}),d("small",{children:"วัน"})]}),d("span",{class:"nb-t",children:[d("small",{children:[T(a)," · ",a.daysLeft===0?a.kind==="card"?"วันนี้":"ตัดวันนี้":f(a),a.every>1&&d("span",{class:"nb-pill",children:yT(a)})]}),d("b",{children:a.desc}),d("span",{class:"nb-amt num",children:[h(a),a.kind==="group"&&!a.coverFor&&d("em",{children:[" จาก ",l(a.totalSat)]})]}),a.kind==="group"?d("span",{class:"nb-flow",children:[d(UT,{payer:a.payer,people:a.names||[],pictures:s}),a.coverFor&&d("small",{children:"จ่ายแทน"})]}):d("small",{children:AT(a,e)})]}),d(Q,{name:a.kind==="card"?"card":"calendar",size:18,class:"nb-ic"})]}),c.length>0&&d("div",{class:"nb-up",children:c.slice(0,2).map(R=>d("button",{type:"button",class:"nb-mini",onClick:m(R),children:[d("span",{class:"lbl",children:[f(R)," · ",_(R)]}),d("b",{children:R.desc}),d("span",{class:"num",children:[h(R),R.kind==="group"&&!R.coverFor&&d("em",{children:[" จาก ",l(R.totalSat)]})]})]},R.id+R.date))})]})}const Ih={near:"ใกล้เต็ม",over:"เกินงบ"};function YT({c:n,label:e}){const t=Math.max(n.spentSat>0?3:0,Math.min(100,n.percent));return d("li",{class:"cat",children:[d("span",{class:"ico big-ico",children:d(Q,{name:Lp[n.key]||"dots"})}),d("div",{class:"cat-b",children:[d("div",{class:"cat-r",children:[d("span",{children:[e,Ih[n.level]&&d("span",{class:`lv-tag ${n.level}`,children:Ih[n.level]})]}),d("span",{class:"num",children:[d("b",{children:te(n.spentSat/100)}),d("em",{children:["/ ",te(n.budgetSat/100)]})]})]}),d("div",{class:`bar lv ${n.level}`,role:"img","aria-label":`ใช้ไป ${n.percent}% ของงบ${e}`,children:d("i",{style:{width:`${t}%`}})}),d("div",{class:"cat-s num",children:[d("span",{children:n.leftSat>=0?`เหลือ ${te(n.leftSat/100)}`:`เกินงบ ${te(-n.leftSat/100)}`}),d("span",{children:[n.percent,"%"]})]})]})]},n.key)}function JT({cats:n,bm:e=null,onBudget:t=null}){const r=e&&e.status.set?e.status.cats:[],s=new Set(r.map(f=>f.key)),i=n.filter(f=>!s.has(f.key));if(n.length===0&&r.length===0)return null;const a=n[0],c=f=>zT[f]||f,l=r.length?`ตั้งงบไว้ ${r.length} หมวด`:a?`ส่วนใหญ่ไปกับ${a.label} ${a.percent}%`:"",h=i[0];return d("section",{class:"card",children:[d("div",{class:"sec-row",children:[d(Vp,{icon:"bag",title:"ใช้ไปกับอะไร",note:l}),e&&e.status.set&&t&&d("button",{type:"button",class:"link-btn",onClick:t,children:"แก้งบ"})]}),d("ul",{class:"cats",children:[r.map(f=>d(YT,{c:f,label:c(f.key)},f.key)),i.map(f=>d("li",{class:"cat",children:[d("span",{class:"ico big-ico",children:d(Q,{name:Lp[f.key]||"dots"})}),d("div",{class:"cat-b",children:[d("div",{class:"cat-r",children:[d("span",{children:f.label}),d("span",{class:"num",children:[d("b",{children:[f.percent,"%"]}),d("em",{children:te(f.satang/100)})]})]}),d("div",{class:"bar",children:d("i",{style:{width:`${Math.max(3,Math.round(f.percent/h.percent*100))}%`}})})]})]},f.key))]})]})}const Fp=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n)),ZT=n=>te(n/100,{decimals:2});function eI(n,e){if(!n||!e)return 0;const t=n/e;return t>.6?3:t>.25?2:1}function tI({month:n,days:e,onPick:t}){const[r,s]=n.split("-").map(Number),i=new Date(Date.UTC(r,s-1,1)).getUTCDay(),a=e.reduce((c,l)=>Math.max(c,l.satang),0);return d("div",{class:"sc-grid",role:"group","aria-label":`ปฏิทินรายจ่าย ${Fc(n)}`,children:[HT.map(c=>d("span",{class:"sc-dow","aria-hidden":"true",children:c},c)),Array.from({length:i},(c,l)=>d("span",{},`e${l}`)),e.map(c=>d("button",{type:"button",class:`sc-day h${eI(c.satang,a)} ${c.today?"today":""} ${c.satang>0&&c.satang===a?"peak":""}`,disabled:c.isFuture,onClick:()=>t(c.day),"aria-label":`วันที่ ${c.day} ใช้ไป ${c.satang>0?te(c.satang/100):"0 บาท"}`,children:[d("span",{class:"num",children:c.day}),c.satang>0?d("small",{class:"num",children:Fp(c.satang/100)}):null]},c.day))]})}function nI({month:n,days:e,day:t,onDay:r}){const s=e.find(h=>h.day===t)||e[0];if(!s)return null;const[i,a]=n.split("-").map(Number),c=WT[new Date(Date.UTC(i,a-1,s.day)).getUTCDay()],l=e.filter(h=>!h.isFuture).length;return d("div",{class:"sc-day-view",children:[d("div",{class:"sc-day-hd",children:[d("span",{class:"dtile sm","aria-hidden":"true",children:[d("span",{class:"m",children:$n(n)}),d("span",{class:"d num",children:s.day})]}),d("div",{class:"grow",children:[d("b",{children:[c," ",s.day," ",$n(n)]}),d("span",{class:"lbl",children:[s.items.length," รายการ"]})]}),d("b",{class:"num pay",children:te(s.satang/100)})]}),d("div",{class:"sc-day-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"วันก่อนหน้า",disabled:s.day<=1,onClick:()=>r(s.day-1),children:d(Q,{name:"left",size:16})}),d("span",{class:"lbl",children:"เลื่อนดูวันอื่น"}),d("button",{type:"button",class:"icon-btn","aria-label":"วันถัดไป",disabled:s.day>=l,onClick:()=>r(s.day+1),children:d(Q,{name:"right",size:16})})]}),s.items.length===0?d("p",{class:"empty",children:[d(Q,{name:"check",size:16,class:"rcv"}),"ไม่มีรายจ่ายในวันนี้"]}):d("ul",{class:"plain",children:s.items.map((h,f)=>d("li",{class:"row",children:[d(Cm,{desc:h.desc,name:Sm(h.icon),size:36,iconSize:18}),d("div",{class:"grow",children:[d("div",{class:"t",children:h.desc||"ไม่ระบุ"}),d("div",{class:"s",children:h.kind==="group"?"ส่วนของฉันในกลุ่ม":"ส่วนตัว"})]}),d("span",{class:"num pay",children:ZT(h.satang)})]},f))})]})}function rI({year:n,series:e,since:t,nowMonth:r,onPick:s}){const i=Object.fromEntries((e||[]).map(l=>[l.month,l.spentSat])),a=Array.from({length:12},(l,h)=>{const f=`${n}-${String(h+1).padStart(2,"0")}`,_=f>=t&&f<=r;return{key:f,label:Ns[h],inRange:_,sat:_&&i[f]||0}}),c=a.reduce((l,h)=>Math.max(l,h.sat),0);return d("div",{class:"sc-year",children:a.map(l=>d("button",{type:"button",class:`sc-mon ${l.key===r?"cur":""}`,disabled:!l.inRange,onClick:()=>s(l.key),"aria-label":`${Np(l.key)} ใช้ไป ${l.inRange?te(l.sat/100):"ไม่มีข้อมูล"}`,children:[d("small",{children:l.label}),d("b",{class:"num",children:l.inRange?Fp(l.sat/100):"-"}),d("i",{style:{width:`${l.inRange&&c>0?Math.max(4,Math.round(l.sat/c*100)):0}%`}})]},l.key))})}function sI({model:n,month:e,onMonth:t,since:r,nowMonth:s,series:i,onNeedYear:a=()=>{}}){const[c,l]=ee("month"),[h,f]=ee(1);_e(()=>{c==="year"&&a()},[c]);const _=n.calendarDays||[],m=Number(e.slice(0,4)),T=_.reduce((I,y)=>y.satang>(I?I.satang:0)?y:I,null),R=I=>{const y=ft(e,I);y>=r&&y<=s&&t(y)},N=I=>{const y=e.slice(5,7);let E=`${m+I}-${y}`;E<r?E=r:E>s&&(E=s),t(E)},S=r<`${m}-01`,M=`${m+1}-01`<=s,O=(i||[]).filter(I=>I.month.startsWith(String(m))).reduce((I,y)=>I+y.spentSat,0),$=(i||[]).filter(I=>I.month.startsWith(String(m))&&I.month>=r&&I.month<=s).length;function H(I){f(I),l("day")}function X(I){t(I),l("month")}function Z(I){if(I==="day"&&c!=="day"){const y=_.find(E=>E.today);f(y?y.day:T?T.day:1)}l(I)}return d("section",{class:"card sc","aria-label":"ปฏิทินรายจ่าย",children:[d(Vp,{icon:"calendar",title:"ใช้ไปเท่าไร",note:"รวมรายจ่ายส่วนตัวและส่วนของฉันในกลุ่ม"}),d("div",{class:"seg sc-seg",role:"group","aria-label":"ดูเป็น",children:[["day","วัน"],["month","เดือน"],["year","ปี"]].map(([I,y])=>d("button",{type:"button",class:c===I?"on":"","aria-pressed":c===I,onClick:()=>Z(I),children:y},I))}),c==="year"?d(Y,{children:[d("div",{class:"sc-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"ปีก่อนหน้า",disabled:!S,onClick:()=>N(-1),children:d(Q,{name:"left",size:16})}),d("b",{class:"num",children:["ปี ",m+543]}),d("button",{type:"button",class:"icon-btn","aria-label":"ปีถัดไป",disabled:!M,onClick:()=>N(1),children:d(Q,{name:"right",size:16})})]}),i?d(Y,{children:[d("div",{class:"sc-sum",children:[d("div",{children:[d("span",{class:"lbl",children:"ใช้ไปทั้งปี"}),d("b",{class:"num pay",children:te(O/100)})]}),d("div",{children:[d("span",{class:"lbl",children:"เฉลี่ยต่อเดือน"}),d("b",{class:"num",children:te($>0?O/100/$:0)})]})]}),d(rI,{year:m,series:i,since:r,nowMonth:s,onPick:X})]}):d("p",{class:"empty","aria-busy":"true",children:"กำลังโหลดข้อมูลทั้งปี"})]}):d(Y,{children:[d("div",{class:"sc-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",disabled:e<=r,onClick:()=>R(-1),children:d(Q,{name:"left",size:16})}),d("b",{class:"num",children:Fc(e)}),d("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e>=s,onClick:()=>R(1),children:d(Q,{name:"right",size:16})})]}),c==="month"?d(Y,{children:[d("div",{class:"sc-sum",children:[d("div",{children:[d("span",{class:"lbl",children:"ใช้ไปทั้งเดือน"}),d("b",{class:"num pay",children:te(n.spentSat/100)})]}),d("div",{children:[d("span",{class:"lbl",children:"เฉลี่ยต่อวัน"}),d("b",{class:"num",children:te(n.average)})]})]}),d(tI,{month:e,days:_,onPick:H}),T?d("p",{class:"lbl sc-foot",children:["ใช้มากสุดวันที่ ",T.day," (",te(T.satang/100),") แตะวันเพื่อดูรายการ"]}):d("p",{class:"lbl sc-foot",children:"ยังไม่มีรายจ่ายในเดือนนี้"})]}):d(nI,{month:e,days:_,day:h,onDay:f})]})]})}function iI({model:n,series:e,month:t,onMonth:r,onAddIncome:s,profiles:i=[],today:a="",nowMonth:c="",since:l="",onNeedYear:h,bm:f=null,onBudget:_=null,bills:m=null,me:T="",onBills:R=()=>{},onCard:N=null}){const S=c||t;return d("div",{class:"home-grid",children:[d("div",{class:"col",children:[d(KT,{m:n,onAddIncome:s,today:a,bm:f,onBudget:_}),d(QT,{m:n,profiles:i,month:t,nowMonth:S}),t===S&&d(XT,{sched:m,me:T,onOpen:R,onCard:N,pictures:Object.fromEntries((i||[]).map(M=>[M.name,M.pictureUrl]))}),d(JT,{cats:n.categories,bm:f,onBudget:_})]}),d("div",{class:"col",children:d(sI,{model:n,month:t,onMonth:r,since:l||ft(S,-11),nowMonth:S,series:e,onNeedYear:h})})]})}const bh=()=>St(()=>import("./add-2IeOfZD5.js"),__vite__mapDeps([0,1])),Ah=()=>St(()=>import("./ClearPage-Bfgaizz1.js"),[]),Sh=()=>St(()=>import("./ListPage-oJiH2ztM.js"),__vite__mapDeps([2,1])),Rh=()=>St(()=>import("./MePage-D37bZdnE.js"),__vite__mapDeps([3,4,5])),kh=()=>St(()=>import("./onboard-BZjU7rHL.js"),[]),Jo=()=>St(()=>import("./plan-CTby3Vvv.js"),[]),oI=()=>St(()=>import("./billcal-D_sJBKVe.js"),[]),Ph=()=>St(()=>import("./cards-DRhZwEKd.js"),[]),wt=vp();function Qr(){const n=new URLSearchParams(location.search).get("liff.state")||"";return(location.hash||(n.includes("#")?n.slice(n.indexOf("#")):"")).slice(1)}function Xr(n){const e=/^(edit|split|choose)=([A-Za-z0-9_-]{1,100})$/.exec(String(n||""));return e?{kind:e[1],id:e[2]}:null}function sr(n){const e=/^card=([A-Za-z0-9_-]{1,60})$/.exec(String(n||""));return e?e[1]:""}const Ch=pp().slice(0,7),Nh=12,aI=["home","list","clear","me"],oi=n=>n==="bills"||n==="wallet"?"list":aI.includes(n)?n:"home";function cI(){const[n,e]=ee(wt?{state:"ok",user:wt}:{state:"loading"}),[t,r]=ee(()=>{const P=Qr();return Xr(P)?"list":sr(P)?"me":oi(P)}),[s,i]=ee(()=>Xr(Qr())),[a,c]=ee(null),[l,h]=ee(null),f=He(()=>pp(),[]),_=f.slice(0,7),m=He(()=>ft(_,-11),[_]),[T,R]=ee(_),[N,S]=ee(()=>wt?OE():null),[M,O]=ee(()=>{const P=wt?ME(wt.name,Ch):null;return P?{[Ch]:P}:{}}),[$,H]=ee(!1),[X,Z]=ee(null),[I,y]=ee(""),[E,b]=ee(null),[A,v]=ee(()=>wt&&Qr()==="add"?"menu":null),[w,ue]=ee(""),[Ce,Rt]=ee(0),[Ze,Gt]=ee(!1),[Kt,Ds]=ee(!1),[Nr,ht]=ee(!!wt),[fe,Dr]=ee(null),[ot,Io]=ee(null),[Wn,Ms]=ee(!1),[Fe,Qt]=ee(null),[Ne,et]=ee(()=>{const P=sr(Qr());return P?{kind:"detail",id:P}:null}),[tt,at]=ee(null),vn=P=>{if(P.needLogin){Gt(!0);return}wt&&!P.needLink&&P.memberId!==wt.memberId&&(Pa(),O({}),S(null),Z(null)),P.needLink?e({state:"link",profile:P.profile,candidates:P.candidates,suggest:P.suggest||""}):!P.isAdmin&&(!P.realName||!Dp(P.promptpay))?e({state:"onboard",user:P}):e(x=>x.state==="ok"&&JSON.stringify(x.user)===JSON.stringify(P)?x:{state:"ok",user:P}),P.needLink||DE(P)},Hn=(P,x)=>O(q=>({...q,[P]:{...q[P]||{},...x}}));_e(()=>{PE().then(P=>{if(!P)return;vn(P);const x=Qr();if(x==="add"){v("menu"),r("home");try{history.replaceState(null,"",location.pathname+"#home")}catch{}}else Xr(x)?(i(Xr(x)),r("list")):sr(x)?(et({kind:"detail",id:sr(x)}),r("me")):x&&["home","list","bills","wallet","clear","me"].includes(x)&&r(oi(x))}).catch(P=>{wt?console.warn("signIn:",P.message):e({state:"error",message:P.message})})},[]),_e(()=>{wE(()=>Gt(!0))},[]),_e(()=>{const P=()=>{const x=location.hash.slice(1),q=Xr(x);q?(i(q),r("list")):sr(x)?(et({kind:"detail",id:sr(x)}),r("me")):r(oi(x))};return addEventListener("hashchange",P),()=>removeEventListener("hashchange",P)},[]),_e(()=>{n.state==="ok"&&LE().then(S).catch(()=>H(!0))},[n.state,Ce]),_e(()=>{n.state!=="ok"||!["home","list","clear","me"].includes(t)||X||lh().then(Z).catch(()=>H(!0))},[n.state,t,X]),_e(()=>{n.state==="ok"&&jE().then(Dr).catch(P=>{P.expired||console.warn("loadPlan:",P.message),Dr(x=>x||{budget:{total:0,cats:{}},months:{},goals:[]})})},[n.state,Ce]),_e(()=>{n.state!=="ok"||t!=="home"||tT().then(Io).catch(P=>console.warn("loadBillSchedule:",P&&P.message))},[n.state,t,Ce]);const Vs=X&&n.state==="ok"?X.find(P=>P.id===n.user.memberId||(P.ids||[]).includes(n.user.memberId))||X.find(P=>P.name===n.user.name):null,Os=!!(Vs&&Vs.cardAlerts);_e(()=>{if(!(n.state!=="ok"||!X||!["home","me"].includes(t))){if(!Os){Qt({enabled:!1,cards:[]});return}ch().then(Qt).catch(P=>{P.expired||console.warn("loadCards:",P&&P.message)})}},[n.state,t,Ce,Os,!!X]),_e(()=>{if(n.state==="ok")return FE(_,P=>{P.error?H(!0):Hn(_,P)})},[n.state,_]);const kt=He(()=>[...new Set([...Kt?Eh(_,Nh):[],T])].filter(P=>P!==_),[_,T,Kt]);_e(()=>{if(n.state!=="ok")return;const P=[_,...kt.filter(x=>!(M[x]&&M[x].wallet))];$E(P,_).then(x=>Object.entries(x).forEach(([q,Ct])=>Hn(q,{wallet:Ct}))).catch(x=>{x.expired||ue(x.message)})},[n.state,_,Ce,kt.filter(P=>!(M[P]&&M[P].wallet)).join("|")]),_e(()=>{n.state==="ok"&&kt.forEach(P=>{M[P]&&M[P].transactions||xE(P).then(x=>Hn(P,{transactions:x.transactions,settlements:x.settlements})).catch(()=>H(!0))})},[n.state,kt,kt.filter(P=>!(M[P]&&M[P].transactions)).join("|")]);const _t=M[_];_e(()=>{n.state==="ok"&&_t&&_t.transactions&&_t.settlements&&_t.wallet&&VE(n.user.name,_,_t)},[_t]),_e(()=>{if(n.state!=="ok")return;const x=(window.requestIdleCallback||(q=>setTimeout(q,1500)))(()=>{[Sh,Ah,Rh,bh].forEach(q=>q().catch(()=>{}))});return()=>{window.cancelIdleCallback?window.cancelIdleCallback(x):clearTimeout(x)}},[n.state]),_e(()=>{if(w){const P=setTimeout(()=>ue(""),3200);return()=>clearTimeout(P)}},[w]);const Gn=P=>M[P]&&M[P].transactions&&M[P].settlements&&M[P].wallet,wn=n.state==="ok"&&N&&Gn(_)&&Gn(T);_e(()=>{wn&&ht(!0)},[wn]),_e(()=>{if(Nr)return;const P=setTimeout(()=>ht(!0),12e3);return()=>clearTimeout(P)},[Nr]);const Kn=wn&&kt.every(Gn),J=He(()=>{if(!wn)return null;const P=Object.values(M);return{transactions:P.flatMap(x=>x.transactions||[]),settlements:P.flatMap(x=>x.settlements||[]),wallet:P.flatMap(x=>x.wallet||[])}},[wn,M]),Mr=He(()=>J&&N?DT({me:n.user.name,members:N,transactions:J.transactions}):[],[J,n,N]),ge=He(()=>J?vh({name:n.user.name,month:T,today:f,members:N,transactions:J.transactions,settlements:J.settlements,walletItems:J.wallet}):null,[J,n,N,T,f]),De=He(()=>J&&Kt&&Kn?RT({name:n.user.name,months:Eh(_,Nh),transactions:J.transactions,settlements:J.settlements,walletItems:J.wallet}):null,[J,Kt,Kn,n,_]),En=He(()=>J?kT({name:n.user.name,month:T,members:N,transactions:J.transactions,settlements:J.settlements}):null,[J,n,N,T]),Xt=He(()=>J?PT({name:n.user.name,month:T,walletItems:J.wallet,transactions:J.transactions,settlements:J.settlements}):null,[J,n,T]),Qn=He(()=>J?T===_?ge:vh({name:n.user.name,month:_,today:f,members:N,transactions:J.transactions,settlements:J.settlements,walletItems:J.wallet}):null,[J,ge,T,_]),bo=He(()=>fe&&ge?wh(fe,ge,f):null,[fe,ge,f]),Pt=He(()=>fe&&Qn?wh(fe,Qn,f):null,[fe,Qn,f]),Ls=He(()=>ot&&n.state==="ok"?TT({me:n.user.name,month:_,today:f,group:ot.group,personal:ot.personal,cards:Fe&&Fe.enabled?Fe.cards:[]}):null,[ot,n,_,f,Fe]),Xn=(P,x)=>P.then(()=>ch({force:!0})).then(q=>(Qt(q),x&&ue(x),q)),Tn=Ne&&Ne.kind==="detail"&&Fe?Fe.cards.find(P=>P.id===Ne.id):null;_e(()=>{if(Ne&&Ne.kind==="detail"&&Fe&&!Tn&&(et(null),ue(Fe.enabled?"ไม่พบบัตรนี้ (อาจถูกลบไปแล้ว)":"ผู้ดูแลยังไม่ได้เปิดเตือนบัตรเครดิตให้คุณ")),Ne&&Ne.kind==="detail"&&Fe)try{history.replaceState(null,"",location.pathname+"#me")}catch{}},[Ne,Fe]);const Yn=(P,x)=>P.then(q=>(Dr(q),x&&ue(x),q)),xs=He(()=>J?CT({name:n.user.name,month:T,transactions:J.transactions,search:I}):null,[J,n,T,I]),yt=(P=T)=>{Tp(P),P===_?Rt(x=>x+1):O(x=>{const q={...x};return delete q[P],q})},Jn=P=>{b({amount:P.amount,desc:P.desc,date:P.date,icon:P.icon,convertId:P.id,month:String(P.date).slice(0,7)}),v("bill")};_e(()=>{if(!s||!J)return;let P=!0;const x=J.wallet.find(q=>q.id===s.id);return(x?Promise.resolve(x):ZE(s.id)).then(q=>{if(P){if(!q){ue("ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");return}s.kind==="split"&&q.type!=="income"?Jn(q):s.kind==="choose"&&q.type!=="income"?h(q):(r("list"),c({...q}))}}).catch(q=>{P&&!q.expired&&ue(q.message)}).finally(()=>{if(P){i(null);try{history.replaceState(null,"",location.pathname+"#list")}catch{}}}),()=>{P=!1}},[s,!!J]);const Vr=()=>{Pa(),O({}),S(null),H(!1),Rt(P=>P+1)};if(n.state==="loading")return d("div",{class:"center",children:d(Hr,{label:"กำลังเข้าสู่ระบบ"})});if(n.state==="error")return d("div",{class:"center",children:[d(Hr,{}),d("p",{role:"alert",children:n.message}),d("button",{type:"button",class:"btn",onClick:()=>location.reload(),children:"ลองใหม่"})]});if(n.state==="link")return d(rt,{load:kh,name:"LinkPage",profile:n.profile,candidates:n.candidates,suggest:n.suggest,onDone:vn,fallback:d("div",{class:"center",children:d(Hr,{})})});if(n.state==="onboard")return d(rt,{load:kh,name:"OnboardPage",user:n.user,onDone:vn,fallback:d("div",{class:"center",children:d(Hr,{})})});if(!Nr&&!$)return d("div",{class:"center",children:d(Hr,{label:"กำลังโหลดข้อมูล"})});const In=P=>{location.hash=P,r(P),window.scrollTo(0,0)},vt=oi(t),Zn=vt!=="me";let Qe;return Zn&&$?Qe=d(jT,{onRetry:Vr}):vt==="home"?Qe=ge?d(iI,{model:ge,series:De,month:T,onMonth:R,onAddIncome:()=>v("income"),profiles:X||[],today:f,nowMonth:_,since:m,onNeedYear:()=>Ds(!0),bm:bo,onBudget:fe?()=>at({kind:"budget"}):null,bills:Ls,me:n.user.name,onBills:()=>Ms(!0),onCard:P=>et({kind:"detail",id:P})}):d(Rn,{blocks:5}):vt==="list"?Qe=xs&&Xt?d(rt,{load:Sh,name:"ListPage",fallback:d(Rn,{blocks:3}),pictures:Object.fromEntries((X||[]).map(P=>[P.name,P.pictureUrl])),bills:xs,wallet:Xt,month:T,today:f,search:I,onSearch:y,me:n.user.name,isAdmin:n.user.isAdmin,version:Ce,openEdit:a,onSplit:Jn,onChanged:()=>yt(),onError:ue,onInfo:ue}):d(Rn,{blocks:3}):vt==="clear"?Qe=En&&X?d(rt,{load:Ah,name:"ClearPage",fallback:d(Rn,{blocks:2}),model:En,profiles:X,month:T,back:Xt?{receivedSat:Xt.receivedBackSat,paidSat:Xt.paidBackSat}:null,onChanged:()=>yt(),isAdmin:n.user.isAdmin,adminName:n.user.name,onError:ue,onInfo:ue}):d(Rn,{blocks:2}):Qe=X?d(rt,{load:Rh,name:"MePage",fallback:d(Rn,{blocks:2}),auth:n,profiles:X,onSaved:()=>Z(null),onRefresh:Vr,onMembers:()=>{lh().then(Z).catch(()=>Z(null)),Rt(P=>P+1)},onToast:ue,transactions:J?J.transactions:[],onDataChanged:P=>yt(P),bm:Pt,onBudget:()=>at({kind:"budget"}),onGoalAdd:()=>at({kind:"goal"}),onGoalMove:(P,x)=>at({kind:"move",goal:P,dir:x}),onGoalEdit:P=>at({kind:"goal",goal:P}),cards:Fe,onCardAdd:()=>et({kind:"add"}),onCardOpen:P=>et({kind:"detail",id:P.id})}):d(Rn,{blocks:2}),d(Y,{children:[Ze&&d("div",{class:"login-banner",role:"alert",children:[d("span",{children:["เซสชัน LINE หมดอายุ ยังดูข้อมูลที่จำไว้ได้ แต่ข้อมูลกระเป๋าและการบันทึกต้องเข้าสู่ระบบใหม่",ah()&&d("small",{class:"diag",children:ah()})]}),d("button",{type:"button",class:"btn sm",onClick:EE,children:"เข้าสู่ระบบใหม่"})]}),d(qT,{tab:vt,onTab:In,userName:n.user.name,userPicture:n.user.pictureUrl,onAdd:()=>v("menu"),tools:Zn&&d(LT,{month:T,onChange:R,min:m,max:_}),children:d(OT,{page:vt,children:Qe})}),A&&d(rt,{load:bh,name:"AddSheet",initial:A==="income"?"income":A==="bill"?"bill":null,prefill:E,convertWallet:uh,today:f,members:N||[],me:n.user.name,suggested:Mr,save:JE,saveBill:hh,onClose:()=>{v(null),b(null)},onSaved:(P,x=[])=>{ue(P),x.forEach(q=>yt(q)),Rt(q=>q+1)}}),l&&d(rt,{load:()=>St(()=>import("./editbill-DMZHgOWp.js"),__vite__mapDeps([6,1])),name:"ChooseSheet",item:l,members:N||[],me:n.user.name,suggested:Mr,today:f,saveBill:hh,removeWallet:uh,onClose:()=>h(null),onConfirmed:()=>yt(String(l.date).slice(0,7)),onDone:(P,x=[])=>{ue(P),x.forEach(q=>yt(q)),Rt(q=>q+1)},onMoreSplit:P=>{h(null),Jn(P)}}),Ne&&(Ne.kind==="add"||Ne.kind==="edit")&&d(rt,{load:Ph,name:"CardEditSheet",card:Ne.card||null,onClose:()=>et(null),onSave:P=>Xn(QE(P),P.id?"แก้บัตรแล้ว":"เพิ่มบัตรแล้ว"),onDelete:P=>Xn(XE(P),"ลบบัตรแล้ว")}),Tn&&d(rt,{load:Ph,name:"CardDetailSheet",card:Tn,onClose:()=>et(null),onEdit:P=>et({kind:"edit",card:P}),onPaid:(P,x,q)=>Xn(YE(P,x,q),x?"จ่ายแล้ว ไม่เตือนรอบนี้อีก":"ยกเลิก จ่ายแล้ว").catch(Ct=>ue(Ct.message))}),Wn&&ot&&d(rt,{load:oI,name:"BillCalendarSheet",data:{...ot,cards:Fe&&Fe.enabled?Fe.cards:[]},pictures:Object.fromEntries((X||[]).map(P=>[P.name,P.pictureUrl])),me:n.user.name,today:f,onClose:()=>Ms(!1)}),tt&&tt.kind==="budget"&&d(rt,{load:Jo,name:"BudgetSheet",plan:fe,nowMonth:_,suggestSat:Pt?Pt.suggestSat:0,onClose:()=>at(null),onSave:P=>Yn(qE(P),P.clear?"กลับไปใช้งบปกติแล้ว":"บันทึกงบแล้ว")}),tt&&tt.kind==="move"&&d(rt,{load:Jo,name:"GoalMoveSheet",goal:tt.goal,dir:tt.dir,month:_,onClose:()=>at(null),onMove:(P,x,q)=>Yn(WE(P,x,q),q==="out"?"ถอนออกจากเป้าแล้ว":"เก็บเข้าเป้าแล้ว")}),tt&&tt.kind==="goal"&&d(rt,{load:Jo,name:"GoalEditSheet",goal:tt.goal||null,nowMonth:_,onClose:()=>at(null),onSave:P=>Yn(zE(P),P.id?"แก้เป้าแล้ว":"เพิ่มเป้าแล้ว"),onDelete:P=>Yn(HE(P),"ลบเป้าแล้ว")}),w&&d("div",{class:"toast",role:"status",children:w})]})}_m(d(cI,{}),document.getElementById("app"));export{jl as $,Uc as A,GI as B,$n as C,YI as D,Sm as E,rT as F,FT as G,uh as H,Q as I,LI as J,TI as K,rt as L,OI as M,eT as N,BE as O,UT as P,bI as Q,yI as R,Op as S,He as T,ZI as U,zI as V,DI as W,UI as X,NI as Y,xI as Z,St as _,Cm as a,dI as a0,ft as a1,cT as a2,$I as a3,BI as a4,Ip as a5,fT as a6,TT as a7,Fc as a8,AT as a9,Yo as aa,IT as ab,mI as ac,nT as ad,II as ae,_I as af,jI as ag,qI as ah,_T as ai,Na as aj,XI as ak,VI as al,AI as am,wI as an,RI as ao,SI as ap,vI as aq,fI as ar,pI as as,bm as b,te as c,ee as d,MT as e,Y as f,QI as g,KI as h,Mp as i,pp as j,Vp as k,JI as l,Np as m,CI as n,Eh as o,PI as p,kI as q,MI as r,HI as s,WI as t,d as u,Dp as v,FI as w,_e as x,EI as y,gI as z};
