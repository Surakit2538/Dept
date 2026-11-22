const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-BgOKbJS5.js","assets/cats-OhTetaJM.js","assets/ListPage-B7nEdBpE.js","assets/MePage-aAq8xKj9.js","assets/plan-bd1a09FX.js","assets/cards-BTUL1kk0.js","assets/editbill-CPV4QBGp.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const im="modulepreload",om=function(n){return"/app/"+n},bl={},St=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=om(l),l in bl)return;bl[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":im,h||(_.as="script"),_.crossOrigin="",_.href=l,c&&_.setAttribute("nonce",c),document.head.appendChild(_),h)return new Promise((m,T)=>{_.addEventListener("load",m),_.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Hi,de,Ph,tn,Al,Ch,Dh,Oo,oi,es,Nh,Ca,Jo,Yo,wi={},Ei=[],am=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Gi=Array.isArray;function Mt(n,e){for(var t in e)n[t]=e[t];return n}function Da(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function cm(n,e,t){var r,s,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?Hi.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return ai(n,a,r,s,null)}function ai(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Ph,__i:-1,__u:0};return s==null&&de.vnode!=null&&de.vnode(i),i}function J(n){return n.children}function ci(n,e){this.props=n,this.context=e}function Mn(n,e){if(e==null)return n.__?Mn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Mn(n):null}function lm(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],s=[],i=Mt({},e);i.__v=e.__v+1,de.vnode&&de.vnode(i),Na(n.__P,i,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Mn(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,xh(r,i,s),e.__e=e.__=null,i.__e!=t&&Mh(i)}}function Mh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Mh(n)}function Sl(n){(!n.__d&&(n.__d=!0)&&tn.push(n)&&!Ti.__r++||Al!=de.debounceRendering)&&((Al=de.debounceRendering)||Ch)(Ti)}function Ti(){try{for(var n,e=1;tn.length;)tn.length>e&&tn.sort(Dh),n=tn.shift(),e=tn.length,lm(n)}finally{tn.length=Ti.__r=0}}function Vh(n,e,t,r,s,i,a,c,l,h,f){var _,m,T,k,D,S,M=r&&r.__k||Ei,O=e.length;for(l=um(t,e,M,l,O),_=0;_<O;_++)(T=t.__k[_])!=null&&(m=T.__i!=-1&&M[T.__i]||wi,T.__i=_,S=Na(n,T,m,s,i,a,c,l,h,f),k=T.__e,T.ref&&m.ref!=T.ref&&(m.ref&&Ma(m.ref,null,T),f.push(T.ref,T.__c||k,T)),D==null&&k!=null&&(D=k),4&T.__u?(l=Oh(T,l,n),m.__e&&(m.__e=null)):typeof T.type=="function"&&S!==void 0?l=S:k&&(l=k.nextSibling),T.__u&=-7);return t.__e=D,l}function um(n,e,t,r,s){var i,a,c,l,h,f=t.length,_=f,m=0;for(n.__k=new Array(s),i=0;i<s;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[i]=ai(null,a,null,null,null):Gi(a)?a=n.__k[i]=ai(J,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[i]=ai(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[i]=a,l=i+m,a.__=n,a.__b=n.__b+1,c=null,(h=a.__i=hm(a,t,l,_))!=-1&&(_--,(c=t[h])&&(c.__u|=2)),c==null||c.__v==null?(h==-1&&(s>f?m--:s<f&&m++),typeof a.type!="function"&&(a.__u|=4)):h!=l&&(h==l-1?m--:h==l+1?m++:(h>l?m--:m++,a.__u|=4))):n.__k[i]=null;if(_)for(i=0;i<f;i++)(c=t[i])!=null&&!(2&c.__u)&&(c.__e==r&&(r=Mn(c)),Uh(c,c));return r}function Oh(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=Oh(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Mn(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function hm(n,e,t,r){var s,i,a,c=n.key,l=n.type,h=e[t],f=h!=null&&(2&h.__u)==0;if(h===null&&c==null||f&&c==h.key&&l==h.type)return t;if(r>(f?1:0)){for(s=t-1,i=t+1;s>=0||i<e.length;)if((h=e[a=s>=0?s--:i++])!=null&&!(2&h.__u)&&c==h.key&&l==h.type)return a}return-1}function Rl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||am.test(e)?t:t+"px"}function Js(n,e,t,r,s){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Rl(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Rl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Nh,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t[es]=r[es]:(t[es]=Ca,n.addEventListener(e,i?Yo:Jo,i)):n.removeEventListener(e,i?Yo:Jo,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function kl(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[oi]==null)e[oi]=Ca++;else if(e[oi]<t[es])return;return t(de.event?de.event(e):e)}}}function Na(n,e,t,r,s,i,a,c,l,h){var f,_,m,T,k,D,S,M,O,$,H,X,Z,I,y,E,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[c=e.__e=t.__e]),(f=de.__b)&&f(e);e:if(typeof b=="function"){_=a.length;try{if(O=e.props,$=b.prototype&&b.prototype.render,H=(f=b.contextType)&&r[f.__c],X=f?H?H.props.value:f.__:r,t.__c?M=(m=e.__c=t.__c).__=m.__E:($?e.__c=m=new b(O,X):(e.__c=m=new ci(O,X),m.constructor=b,m.render=fm),H&&H.sub(m),m.state||(m.state={}),m.__n=r,T=m.__d=!0,m.__h=[],m._sb=[]),$&&m.__s==null&&(m.__s=m.state),$&&b.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=Mt({},m.__s)),Mt(m.__s,b.getDerivedStateFromProps(O,m.__s))),k=m.props,D=m.state,m.__v=e,T)$&&b.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),$&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if($&&b.getDerivedStateFromProps==null&&O!==k&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(O,X),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(O,m.__s,X)===!1){e.__v!=t.__v&&(m.props=O,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),Ei.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m),c=Mn(t);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(O,m.__s,X),$&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(k,D,S)})}if(m.context=X,m.props=O,m.__P=n,m.__e=!1,Z=de.__r,I=0,$)m.state=m.__s,m.__d=!1,Z&&Z(e),f=m.render(m.props,m.state,m.context),Ei.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,Z&&Z(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++I<25);m.state=m.__s,m.getChildContext!=null&&(r=Mt(Mt({},r),m.getChildContext())),$&&!T&&m.getSnapshotBeforeUpdate!=null&&(S=m.getSnapshotBeforeUpdate(k,D)),y=f!=null&&f.type===J&&f.key==null?Fh(f.props.children):f,c=Vh(n,Gi(y)?y:[y],e,t,r,s,i,a,c,l,h),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),M&&(m.__E=m.__=null)}catch(A){if(a.length=_,e.__v=null,l||i!=null){if(A.then){for(e.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i!=null&&(i[i.indexOf(c)]=null),e.__e=c}else if(i!=null)for(E=i.length;E--;)Da(i[E])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),A.then||Lh(e),de.__e(A,e,t)}}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=dm(t.__e,e,t,r,s,i,a,l,h);return(f=de.diffed)&&f(e),128&e.__u?void 0:c}function Lh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Lh))}function xh(n,e,t){for(var r=0;r<t.length;r++)Ma(t[r],t[++r],t[++r]);de.__c&&de.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){de.__e(i,s.__v)}})}function Fh(n){return typeof n!="object"||n==null||n.__b>0?n:Gi(n)?n.map(Fh):n.constructor!==void 0?null:Mt({},n)}function dm(n,e,t,r,s,i,a,c,l){var h,f,_,m,T,k,D,S=t.props||wi,M=e.props,O=e.type;if(O=="svg"?s="http://www.w3.org/2000/svg":O=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(h=0;h<i.length;h++)if((T=i[h])&&"setAttribute"in T==!!O&&(O?T.localName==O:T.nodeType==3)){n=T,i[h]=null;break}}if(n==null){if(O==null)return document.createTextNode(M);n=document.createElementNS(s,O,M.is&&M),c&&(de.__m&&de.__m(e,i),c=!1),i=null}if(O==null)S===M||c&&n.data==M||(n.data=M);else{if(i=O=="textarea"&&M.defaultValue!=null?null:i&&Hi.call(n.childNodes),!c&&i!=null)for(S={},h=0;h<n.attributes.length;h++)S[(T=n.attributes[h]).name]=T.value;for(h in S)T=S[h],h=="dangerouslySetInnerHTML"?_=T:h=="children"||h in M||h=="value"&&"defaultValue"in M||h=="checked"&&"defaultChecked"in M||Js(n,h,null,T,s);for(h in M)T=M[h],h=="children"?m=T:h=="dangerouslySetInnerHTML"?f=T:h=="value"?k=T:h=="checked"?D=T:c&&typeof T!="function"||S[h]===T||Js(n,h,T,S[h],s);if(f)c||_&&(f.__html==_.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(_&&(n.innerHTML=""),Vh(e.type=="template"?n.content:n,Gi(m)?m:[m],e,t,r,O=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:t.__k&&Mn(t,0),c,l),i!=null)for(h=i.length;h--;)Da(i[h]);c&&O!="textarea"||(h="value",O=="progress"&&k==null?n.removeAttribute("value"):k!=null&&(k!==n[h]||O=="progress"&&!k||O=="option"&&k!=S[h])&&Js(n,h,k,S[h],s),h="checked",D!=null&&D!=n[h]&&Js(n,h,D,S[h],s))}return n}function Ma(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){de.__e(s,t)}}function Uh(n,e,t){var r,s;if(de.unmount&&de.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||Ma(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){de.__e(i,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&Uh(r[s],e,t||typeof n.type!="function");t||Da(n.__e),n.__c=n.__=n.__e=void 0}function fm(n,e,t){return this.constructor(n,t)}function pm(n,e,t){var r,s,i,a;e==document&&(e=document.documentElement),de.__&&de.__(n,e),s=(r=!1)?null:e.__k,i=[],a=[],Na(e,n=e.__k=cm(J,null,[n]),s||wi,wi,e.namespaceURI,s?null:e.firstChild?Hi.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,a),xh(i,n,a),n.props.children=null}Hi=Ei.slice,de={__e:function(n,e,t,r){for(var s,i,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},Ph=0,ci.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Mt({},this.state),typeof n=="function"&&(n=n(Mt({},t),this.props)),n&&Mt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Sl(this))},ci.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Sl(this))},ci.prototype.render=J,tn=[],Ch=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Dh=function(n,e){return n.__v.__b-e.__v.__b},Ti.__r=0,Oo=Math.random().toString(8),oi="__d"+Oo,es="__a"+Oo,Nh=/(PointerCapture)$|Capture$/i,Ca=0,Jo=kl(!1),Yo=kl(!0);var mm=0;function d(n,e,t,r,s,i){e||(e={});var a,c,l=e;if("ref"in l)for(c in l={},e)c=="ref"?a=e[c]:l[c]=e[c];var h={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--mm,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)l[c]===void 0&&(l[c]=a[c]);return de.vnode&&de.vnode(h),h}var os,Ee,Lo,Pl,Ii=0,$h=[],be=de,Cl=be.__b,Dl=be.__r,Nl=be.diffed,Ml=be.__c,Vl=be.unmount,Ol=be.__;function Va(n,e){be.__h&&be.__h(Ee,n,Ii||e),Ii=0;var t=Ee.__H||(Ee.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function ee(n){return Ii=1,gm(qh,n)}function gm(n,e,t){var r=Va(os++,2);if(r.t=n,!r.__c&&(r.__=[qh(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,c);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=Ee,!Ee.__f)){var s=function(c,l,h){if(!r.__c.__H)return!0;var f=!1,_=r.__c.props!==c;if(r.__c.__H.__.some(function(T){if(T.__N){f=!0;var k=T.__[0];T.__=T.__N,T.__N=void 0,k!==T.__[0]&&(_=!0)}}),i){var m=i.call(this,c,l,h);return f?m||_:m}return!f||_};Ee.__f=!0;var i=Ee.shouldComponentUpdate,a=Ee.componentWillUpdate;Ee.componentWillUpdate=function(c,l,h){if(this.__e){var f=i;i=void 0,s(c,l,h),i=f}a&&a.call(this,c,l,h)},Ee.shouldComponentUpdate=s}return r.__N||r.__}function _e(n,e){var t=Va(os++,3);!be.__s&&jh(t.__H,e)&&(t.__=n,t.u=e,Ee.__H.__h.push(t))}function Bh(n){return Ii=5,He(function(){return{current:n}},[])}function He(n,e){var t=Va(os++,7);return jh(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function _m(){for(var n;n=$h.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(li),e.__h.some(Zo),e.__h=[]}catch(t){e.__h=[],be.__e(t,n.__v)}}}be.__b=function(n){Ee=null,Cl&&Cl(n)},be.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Ol&&Ol(n,e)},be.__r=function(n){Dl&&Dl(n),os=0;var e=(Ee=n.__c).__H;e&&(Lo===Ee?(e.__h=[],Ee.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(li),e.__h.some(Zo),e.__h=[],os=0)),Lo=Ee},be.diffed=function(n){Nl&&Nl(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&($h.push(e)!==1&&Pl===be.requestAnimationFrame||((Pl=be.requestAnimationFrame)||ym)(_m)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Lo=Ee=null},be.__c=function(n,e){e.some(function(t){try{t.__h.some(li),t.__h=t.__h.filter(function(r){return!r.__||Zo(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],be.__e(r,t.__v)}}),Ml&&Ml(n,e)},be.unmount=function(n){Vl&&Vl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{li(r)}catch(s){e=s}}),t.__H=void 0,e&&be.__e(e,t.__v))};var Ll=typeof requestAnimationFrame=="function";function ym(n){var e,t=function(){clearTimeout(r),Ll&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);Ll&&(e=requestAnimationFrame(t))}function li(n){var e=Ee,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Ee=e}function Zo(n){var e=Ee;n.__c=n.__(),Ee=e}function jh(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function qh(n,e){return typeof e=="function"?e(n):e}const zh={netflix:"E50914",spotify:"1DB954",youtube:"FF0000",grab:"00B14F",shopee:"EE4D2D",line:"00C300",starbucks:"006241",mcdonalds:"FBC817",kfc:"F40027",apple:"000000",applemusic:"FA243C",google:"4285F4",googlecloud:"4285F4",openai:"412991",anthropic:"191919",shell:"FFD500",foodpanda:"D70F64",airbnb:"FF5A5F",icloud:"3693F3",amazon:"FF9900",hbo:"000000",tiktok:"000000",instagram:"E4405F",facebook:"0866FF",whatsapp:"25D366",telegram:"26A5E4",discord:"5865F2",twitch:"9146FF",steam:"000000",playstation:"003791",nintendoswitch:"E60012",roblox:"000000",uber:"000000",airasia:"FF0000",expedia:"191E3B",tripadvisor:"34E0A1",ikea:"0058A3",uniqlo:"FF0000",handm:"E50010",zara:"000000",nike:"111111",adidas:"000000",samsung:"1428A0",adobe:"FF0000",dropbox:"0061FF",github:"181717",canva:"00C4CC",notion:"000000",figma:"F24E1E",zoom:"0B5CFF",slack:"4A154B",paypal:"003087",aliexpress:"FF4747",googledrive:"4285F4",googleplay:"414141",soundcloud:"FF5500",tidal:"000000",linkedin:"0A66C2",patreon:"000000",youtubemusic:"FF0000",toyota:"EB0A1E",honda:"E40521",mazda:"101010",nissan:"C3002F",mitsubishi:"E60012",bmw:"0066B1",mercedes:"242424",tesla:"CC0000",suzuki:"E30613"},vm=n=>{const e=parseInt(n.slice(1),16);return .299*(e>>16&255)+.587*(e>>8&255)+.114*(e&255)>170},Wh=n=>vm(n)?"#111111":"#ffffff",U=(n,e,t,r={})=>{const s=r.bg||"#"+zh[t];return{key:n,re:e,si:t,bg:s,fg:r.fg||Wh(s),...r}},zr=(n,e,t)=>U(n,e,t,{bg:"#ffffff",fg:"#"+zh[t],ring:!0}),ct=(n,e,t,r={})=>({key:n,re:e,bg:t,fg:r.fg||Wh(t),...r}),wm=[U("netflix",/netflix|เน็ตฟลิกซ์/,"netflix",{bg:"#000000",fg:"#e50914"}),U("youtubemusic",/youtube ?music|ยูทูบ ?มิวสิค/,"youtubemusic"),zr("youtube",/youtube|ยูทูบ/,"youtube"),U("spotify",/spotify|สปอติฟาย/,"spotify",{bg:"#191414",fg:"#1ed760"}),ct("disney",/disney|ดิสนีย์/,"#113ccf"),U("hbo",/\bhbo\b/,"hbo"),U("applemusic",/apple ?music/,"applemusic"),U("icloud",/icloud/,"icloud"),U("apple",/apple|itunes/,"apple"),zr("googlecloud",/google ?cloud/,"googlecloud"),zr("googledrive",/google ?(drive|one)/,"googledrive"),zr("googleplay",/google ?play/,"googleplay"),zr("google",/google|กูเกิล/,"google"),U("chatgpt",/chatgpt|openai/,"openai",{bg:"#10a37f",fg:"#ffffff"}),U("claude",/claude|anthropic/,"anthropic",{bg:"#d97757",fg:"#ffffff"}),ct("lineman",/line ?man|ไลน์แมน|lpth\*pf|\blm_/,"#06c755"),U("line",/\bline\b|ไลน์/,"line",{bg:"#06c755",fg:"#ffffff"}),U("grab",/\bgrab|แกร็บ/,"grab"),U("uber",/\buber\b/,"uber"),U("foodpanda",/foodpanda|ฟู้ดแพนด้า/,"foodpanda"),ct("seven",/7-?11|7-eleven|seven ?eleven|เซเว่น/,"#00a650"),ct("cafeamazon",/caf[eé] ?amazon|คาเฟ่ ?อเมซอน|อเมซอน/,"#00693c"),U("amazon",/\bamazon\b/,"amazon",{bg:"#232f3e",fg:"#ff9900"}),U("starbucks",/starbucks|สตาร์บัค/,"starbucks",{round:!0}),U("shopee",/shopee|ช้อปปี้/,"shopee"),ct("lazada",/lazada|ลาซาด้า/,"#0f146d"),U("aliexpress",/aliexpress|อาลีเอ็กซ์/,"aliexpress"),U("mcdonald",/mcdonald|แมคโดนัลด์|แมค ?ดี/,"mcdonalds",{bg:"#da291c",fg:"#ffc72c"}),U("kfc",/\bkfc|เคเอฟซี/,"kfc"),ct("ais",/\bais\b|เอไอเอส/,"#8dc63f"),ct("true",/\btrue\b|ทรูมูฟ|ทรูออนไลน์/,"#ee2e24"),ct("3bb",/3bb/,"#0055a5"),ct("ptt",/\bptt\b|ปตท/,"#00439c"),U("shell",/\bshell\b|เชลล์/,"shell",{bg:"#ffd500",fg:"#dd1d21"}),ct("lotus",/lotus|โลตัส/,"#00a651"),ct("bigc",/big ?c\b|บิ๊กซี/,"#ed1c24"),ct("makro",/makro|แม็คโคร|แมคโคร/,"#003d8f"),U("airasia",/airasia|แอร์เอเชีย/,"airasia"),U("airbnb",/airbnb/,"airbnb"),U("expedia",/expedia/,"expedia"),U("tripadvisor",/tripadvisor/,"tripadvisor"),U("tiktok",/tiktok|ติ๊กต็อก/,"tiktok"),U("instagram",/instagram/,"instagram"),U("facebook",/facebook|เฟซบุ๊ก/,"facebook"),U("whatsapp",/whatsapp/,"whatsapp"),U("telegram",/telegram/,"telegram"),U("discord",/discord/,"discord"),U("twitch",/twitch/,"twitch"),U("steam",/steam|สตีม/,"steam"),U("playstation",/playstation|เพลย์สเตชัน|\bpsn\b/,"playstation"),U("nintendo",/nintendo|นินเทนโด/,"nintendoswitch"),U("roblox",/roblox/,"roblox"),U("soundcloud",/soundcloud/,"soundcloud"),U("tidal",/\btidal\b/,"tidal"),U("linkedin",/linkedin/,"linkedin"),U("patreon",/patreon/,"patreon"),U("paypal",/paypal/,"paypal"),U("github",/github/,"github"),U("adobe",/adobe/,"adobe"),U("dropbox",/dropbox/,"dropbox"),U("canva",/canva/,"canva"),U("notion",/notion/,"notion"),U("figma",/figma/,"figma"),U("zoom",/\bzoom\b/,"zoom"),U("slack",/\bslack\b/,"slack"),U("samsung",/samsung|ซัมซุง/,"samsung"),U("ikea",/ikea|อิเกีย/,"ikea"),U("uniqlo",/uniqlo|ยูนิโคล่/,"uniqlo"),U("handm",/h&m/,"handm"),U("zara",/\bzara\b/,"zara"),U("nike",/\bnike\b|ไนกี้/,"nike"),U("adidas",/adidas|อาดิดาส/,"adidas"),U("toyota",/toyota|โตโยต้า|โตโยตา/,"toyota"),U("honda",/honda|ฮอนด้า|civic|ซีวิค/,"honda"),U("mazda",/mazda|มาสด้า/,"mazda"),U("nissan",/nissan|นิสสัน/,"nissan"),U("mitsubishi",/mitsubishi|มิตซู/,"mitsubishi"),U("bmw",/\bbmw\b/,"bmw"),U("mercedes",/mercedes|benz|เบนซ์/,"mercedes"),U("tesla",/tesla|เทสล่า/,"tesla"),U("suzuki",/suzuki|ซูซูกิ/,"suzuki")];function Em(n){const e=String(n||"").toLowerCase();return e.trim()&&wm.find(t=>t.re.test(e))||null}const xl={home:d(J,{children:[d("path",{d:"M3.5 11 12 4l8.5 7"}),d("path",{d:"M5.5 9.8V20h13V9.8"}),d("path",{d:"M10 20v-5.5h4V20"})]}),bill:d(J,{children:[d("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),d("path",{d:"M9 8.5h6M9 12h6"})]}),swap:d("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:d(J,{children:[d("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),d("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),d("path",{d:"M15.5 13.8h2.2"})]}),user:d(J,{children:[d("circle",{cx:"12",cy:"8.5",r:"3.6"}),d("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:d("path",{d:"M12 5v14M5 12h14"}),check:d("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:d(J,{children:[d("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),d("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),d("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),d("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:d("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:d("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:d("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:d("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:d("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:d(J,{children:[d("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),d("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:d(J,{children:[d("path",{d:"M5.5 8h13l-1 11.5h-11z"}),d("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:d("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:d(J,{children:[d("circle",{cx:"6",cy:"12",r:"1.1"}),d("circle",{cx:"12",cy:"12",r:"1.1"}),d("circle",{cx:"18",cy:"12",r:"1.1"})]}),people:d(J,{children:[d("circle",{cx:"9",cy:"8.5",r:"3.2"}),d("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),d("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:d(J,{children:[d("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),d("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),bell:d(J,{children:[d("path",{d:"M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"}),d("path",{d:"M10 20.5h4"})]}),trash:d(J,{children:[d("path",{d:"M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7"}),d("path",{d:"M10.5 11v5M13.5 11v5"})]}),alert:d(J,{children:[d("path",{d:"M12 4.5 3.5 19h17z"}),d("path",{d:"M12 10v4.5M12 17h.01"})]}),chart:d("path",{d:"M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5"}),sliders:d(J,{children:[d("path",{d:"M5 7h9M18 7h1M5 17h1M10 17h9"}),d("circle",{cx:"16",cy:"7",r:"2"}),d("circle",{cx:"8",cy:"17",r:"2"})]}),coffee:d(J,{children:[d("path",{d:"M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z"}),d("path",{d:"M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4.5v2M12 4.5v2"})]}),key:d(J,{children:[d("circle",{cx:"8.5",cy:"14.5",r:"3.5"}),d("path",{d:"M11 12 19 4.5M16 7.5l2.5 2.5M14 9.5l1.8 1.8"})]}),film:d(J,{children:[d("rect",{x:"4",y:"5",width:"16",height:"14",rx:"2"}),d("path",{d:"M8 5v14M16 5v14M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4"})]}),pill:d(J,{children:[d("rect",{x:"3.5",y:"9",width:"17",height:"6.5",rx:"3.25",transform:"rotate(-40 12 12)"}),d("path",{d:"m9.4 9.4 5.2 5.2"})]}),plane:d("path",{d:"M3.5 13.5 20.5 5l-4 14-4.5-4.5-3 3v-4.5zM11.5 14.5 20.5 5"}),gift:d(J,{children:[d("rect",{x:"4",y:"9",width:"16",height:"4",rx:"1"}),d("path",{d:"M5.5 13v6.5h13V13M12 9v10.5M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9zM12 9c1-3.5 5-3.5 5-1.2 0 1.2-2 1.2-5 1.2z"})]}),paw:d(J,{children:[d("circle",{cx:"7",cy:"10",r:"1.6"}),d("circle",{cx:"11",cy:"6.8",r:"1.6"}),d("circle",{cx:"15.5",cy:"7.5",r:"1.6"}),d("circle",{cx:"18",cy:"11.5",r:"1.6"}),d("path",{d:"M8 17.5c0-2.5 2.2-4.5 4.5-4.5s4.5 2 4 4.2c-.4 1.8-2 2.3-4 2.3S8 19.5 8 17.5z"})]}),search:d(J,{children:[d("circle",{cx:"11",cy:"11",r:"6"}),d("path",{d:"m16 16 4 4"})]}),pencil:d("path",{d:"M5 19l1-4L16.5 4.5a2 2 0 0 1 3 3L9 18zM14.5 6.5l3 3"}),close:d("path",{d:"M6 6l12 12M18 6 6 18"}),copy:d(J,{children:[d("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),d("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),play:d("polygon",{points:"8 5 19 12 8 19",style:"fill:currentColor"}),shield:d("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),mobile:d(J,{children:[d("rect",{x:"7",y:"3",width:"10",height:"18",rx:"2.5"}),d("path",{d:"M11 17.5h2"})]}),external:d(J,{children:d("path",{d:"M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"})}),layers:d(J,{children:[d("polygon",{points:"12 3 3 8 12 13 21 8"}),d("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]}),sparkle:d("path",{d:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"}),sun:d(J,{children:[d("circle",{cx:"12",cy:"12",r:"4"}),d("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),moon:d("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"}),list:d("path",{d:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"}),upload:d("path",{d:"M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14"}),grid:d(J,{children:[d("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"13",y:"4",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"13",y:"13",width:"7",height:"7",rx:"1.5"})]}),heart:d("path",{d:"M12 20s-7.5-4.4-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"}),star:d("path",{d:"m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"}),target:d(J,{children:[d("circle",{cx:"12",cy:"12",r:"8.5"}),d("circle",{cx:"12",cy:"12",r:"4.8"}),d("circle",{cx:"12",cy:"12",r:"1.2"})]}),card:d(J,{children:[d("rect",{x:"3",y:"5.5",width:"18",height:"13",rx:"2.5"}),d("path",{d:"M3 10h18M7 14.5h4"})]}),calendar:d(J,{children:[d("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),d("path",{d:"M16 2v4M8 2v4M3 10h18"})]})};function Q({name:n,size:e,class:t=""}){return d("svg",{class:`ic ${t}`,viewBox:"0 0 24 24","aria-hidden":"true",style:e?{width:e,height:e}:void 0,children:xl[n]||xl.dots})}const Tm={"fa-utensils":"food","fa-mug-hot":"coffee","fa-wine-glass":"coffee","fa-car":"car","fa-gas-pump":"car","fa-bus":"car","fa-plane":"plane","fa-cart-shopping":"bag","fa-basket-shopping":"bag","fa-scissors":"bag","fa-pills":"pill","fa-paw":"paw","fa-gift":"gift","fa-film":"film","fa-house":"key","fa-bolt":"bolt","fa-mobile-screen":"bolt","fa-mobile-screen-button":"bolt","fa-arrow-down":"down","fa-credit-card":"card"},Im=n=>Tm[n]||"bill";let ea=null,Fl=null;const ta=new Set;function bm(){Fl||(Fl=St(()=>import("./brand-paths-Dbek54K2.js"),[]).then(n=>{ea=n.SI,ta.forEach(e=>e())}).catch(()=>{}))}function Am(){const[,n]=ee(0);return _e(()=>{if(ea)return;const e=()=>n(t=>t+1);return ta.add(e),bm(),()=>ta.delete(e)},[]),ea}function Sm({b:n,size:e,name:t}){const r=Am();if(n.si&&r&&r[n.si]){const s=Math.round(e*.58);return d("svg",{viewBox:"0 0 24 24",width:s,height:s,"aria-hidden":"true",children:d("path",{d:r[n.si],fill:n.fg})})}return d(Q,{name:t,size:Math.round(e*.5)})}function Rm({desc:n,name:e,size:t=40,iconSize:r}){const s=Em(n);if(!s)return d("span",{class:"ico",style:t!==40?{width:t,height:t}:void 0,children:d(Q,{name:e,size:r})});const i={width:t,height:t,background:s.bg,color:s.fg,borderRadius:s.round?"50%":Math.round(t*.3)};return s.ring&&(i.boxShadow="inset 0 0 0 1.5px #e3e8f5"),d("span",{class:"ico brand",style:i,"aria-hidden":"true",children:d(Sm,{b:s,size:t,name:e})})}function Ul({size:n=24}){return d("svg",{viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",style:{flex:"none"},children:[d("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),d("path",{d:"M19 13h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),d("path",{d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"}),d("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"}),d("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"})]})}function Wr({size:n=88,label:e=""}){return d("div",{class:"ld-wrap",role:"status","aria-live":"polite",children:[d("svg",{class:"ld",viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",children:[d("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),d("g",{class:"ld-l",children:[d("path",{d:"M19 13h13v35l-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),d("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),d("g",{class:"ld-r",children:[d("path",{d:"M32 13h13v38l-4.3-3-4.4 3-4.3-3z",fill:"#ffffff"}),d("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),d("path",{class:"ld-cut",d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"})]}),e?d("p",{class:"ld-t",children:e}):null]})}var $l={};/**
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
 */const Hh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},km=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,_=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,T=h&63;l||(T=64,a||(m=64)),r.push(t[f],t[_],t[m],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):km(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||_==null)throw new Pm;const m=i<<2|c>>4;if(r.push(m),h!==64){const T=c<<4&240|h>>2;if(r.push(T),_!==64){const k=h<<6&192|_;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cm=function(n){const e=Hh(n);return Gh.encodeByteArray(e,!0)},bi=function(n){return Cm(n).replace(/\./g,"")},Kh=function(n){try{return Gh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nm=()=>Dm().__FIREBASE_DEFAULTS__,Mm=()=>{if(typeof process>"u"||typeof $l>"u")return;const n=$l.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kh(n[1]);return e&&JSON.parse(e)},Ki=()=>{try{return Nm()||Mm()||Vm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qh=n=>{var e,t;return(t=(e=Ki())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Om=n=>{const e=Qh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xh=()=>{var n;return(n=Ki())===null||n===void 0?void 0:n.config},Jh=n=>{var e;return(e=Ki())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Lm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function xm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bi(JSON.stringify(t)),bi(JSON.stringify(a)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Um(){var n;const e=(n=Ki())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $m(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qm(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zm(){return!Um()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Hm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Gm="FirebaseError";class Ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gm,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Km(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ht(s,c,r)}}function Km(n,e){return n.replace(Qm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qm=/\{\$([^}]+)}/g;function Xm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ai(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Bl(i)&&Bl(a)){if(!Ai(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Bl(n){return n!==null&&typeof n=="object"}/**
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
 */function _s(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jm(n,e){const t=new Ym(n,e);return t.subscribe.bind(t)}class Ym{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=xo),s.error===void 0&&(s.error=xo),s.complete===void 0&&(s.complete=xo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xo(){}/**
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
 */class eg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Lm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ng(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tg(n){return n===kn?void 0:n}function ng(n){return n.instantiationMode==="EAGER"}/**
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
 */class rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const sg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ig=re.INFO,og={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ag=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=og[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=ig,this._logHandler=ag,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const cg=(n,e)=>e.some(t=>n instanceof t);let jl,ql;function lg(){return jl||(jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ug(){return ql||(ql=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yh=new WeakMap,na=new WeakMap,Zh=new WeakMap,Fo=new WeakMap,La=new WeakMap;function hg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(cn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Yh.set(t,n)}).catch(()=>{}),La.set(e,n),e}function dg(n){if(na.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});na.set(n,e)}let ra={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return na.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return cn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fg(n){ra=n(ra)}function pg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Uo(this),e,...t);return Zh.set(r,e.sort?e.sort():[e]),cn(r)}:ug().includes(n)?function(...e){return n.apply(Uo(this),e),cn(Yh.get(this))}:function(...e){return cn(n.apply(Uo(this),e))}}function mg(n){return typeof n=="function"?pg(n):(n instanceof IDBTransaction&&dg(n),cg(n,lg())?new Proxy(n,ra):n)}function cn(n){if(n instanceof IDBRequest)return hg(n);if(Fo.has(n))return Fo.get(n);const e=mg(n);return e!==n&&(Fo.set(n,e),La.set(e,n)),e}const Uo=n=>La.get(n);function gg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=cn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(cn(a.result),l.oldVersion,l.newVersion,cn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const _g=["get","getKey","getAll","getAllKeys","count"],yg=["put","add","delete","clear"],$o=new Map;function zl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_g.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return $o.set(e,i),i}fg(n=>({...n,get:(e,t,r)=>zl(e,t)||n.get(e,t,r),has:(e,t)=>!!zl(e,t)||n.has(e,t)}));/**
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
 */class vg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wg(n){const e=n.getComponent();return e?.type==="VERSION"}const sa="@firebase/app",Wl="0.10.13";/**
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
 */const Ut=new Oa("@firebase/app"),Eg="@firebase/app-compat",Tg="@firebase/analytics-compat",Ig="@firebase/analytics",bg="@firebase/app-check-compat",Ag="@firebase/app-check",Sg="@firebase/auth",Rg="@firebase/auth-compat",kg="@firebase/database",Pg="@firebase/data-connect",Cg="@firebase/database-compat",Dg="@firebase/functions",Ng="@firebase/functions-compat",Mg="@firebase/installations",Vg="@firebase/installations-compat",Og="@firebase/messaging",Lg="@firebase/messaging-compat",xg="@firebase/performance",Fg="@firebase/performance-compat",Ug="@firebase/remote-config",$g="@firebase/remote-config-compat",Bg="@firebase/storage",jg="@firebase/storage-compat",qg="@firebase/firestore",zg="@firebase/vertexai-preview",Wg="@firebase/firestore-compat",Hg="firebase",Gg="10.14.1";/**
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
 */const ia="[DEFAULT]",Kg={[sa]:"fire-core",[Eg]:"fire-core-compat",[Ig]:"fire-analytics",[Tg]:"fire-analytics-compat",[Ag]:"fire-app-check",[bg]:"fire-app-check-compat",[Sg]:"fire-auth",[Rg]:"fire-auth-compat",[kg]:"fire-rtdb",[Pg]:"fire-data-connect",[Cg]:"fire-rtdb-compat",[Dg]:"fire-fn",[Ng]:"fire-fn-compat",[Mg]:"fire-iid",[Vg]:"fire-iid-compat",[Og]:"fire-fcm",[Lg]:"fire-fcm-compat",[xg]:"fire-perf",[Fg]:"fire-perf-compat",[Ug]:"fire-rc",[$g]:"fire-rc-compat",[Bg]:"fire-gcs",[jg]:"fire-gcs-compat",[qg]:"fire-fst",[Wg]:"fire-fst-compat",[zg]:"fire-vertex","fire-js":"fire-js",[Hg]:"fire-js-all"};/**
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
 */const Si=new Map,Qg=new Map,oa=new Map;function Hl(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fr(n){const e=n.name;if(oa.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,n);for(const t of Si.values())Hl(t,n);for(const t of Qg.values())Hl(t,n);return!0}function xa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n.settings!==void 0}/**
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
 */const Xg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new gs("app","Firebase",Xg);/**
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
 */class Jg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Tr=Gg;function ed(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ia,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});if(t||(t=Xh()),!t)throw ln.create("no-options");const i=Si.get(s);if(i){if(Ai(t,i.options)&&Ai(r,i.config))return i;throw ln.create("duplicate-app",{appName:s})}const a=new rg(s);for(const l of oa.values())a.addComponent(l);const c=new Jg(t,r,a);return Si.set(s,c),c}function td(n=ia){const e=Si.get(n);if(!e&&n===ia&&Xh())return ed();if(!e)throw ln.create("no-app",{appName:n});return e}function un(n,e,t){var r;let s=(r=Kg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}fr(new Vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Yg="firebase-heartbeat-database",Zg=1,as="firebase-heartbeat-store";let Bo=null;function nd(){return Bo||(Bo=gg(Yg,Zg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(as)}catch(t){console.warn(t)}}}}).catch(n=>{throw ln.create("idb-open",{originalErrorMessage:n.message})})),Bo}async function e_(n){try{const t=(await nd()).transaction(as),r=await t.objectStore(as).get(rd(n));return await t.done,r}catch(e){if(e instanceof Ht)Ut.warn(e.message);else{const t=ln.create("idb-get",{originalErrorMessage:e?.message});Ut.warn(t.message)}}}async function Gl(n,e){try{const r=(await nd()).transaction(as,"readwrite");await r.objectStore(as).put(e,rd(n)),await r.done}catch(t){if(t instanceof Ht)Ut.warn(t.message);else{const r=ln.create("idb-set",{originalErrorMessage:t?.message});Ut.warn(r.message)}}}function rd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const t_=1024,n_=30*24*60*60*1e3;class r_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new i_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=n_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kl(),{heartbeatsToSend:r,unsentEntries:s}=s_(this._heartbeatsCache.heartbeats),i=bi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ut.warn(t),""}}}function Kl(){return new Date().toISOString().substring(0,10)}function s_(n,e=t_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ql(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ql(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class i_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?Hm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await e_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ql(n){return bi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function o_(n){fr(new Vn("platform-logger",e=>new vg(e),"PRIVATE")),fr(new Vn("heartbeat",e=>new r_(e),"PRIVATE")),un(sa,Wl,n),un(sa,Wl,"esm2017"),un("fire-js","")}o_("");var a_="firebase",c_="10.14.1";/**
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
 */un(a_,c_,"app");var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,sd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function E(){}E.prototype=y.prototype,I.D=y.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(b,A,v){for(var w=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)w[ue-2]=arguments[ue];return y.prototype[A].apply(b,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,E){E||(E=0);var b=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)b[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;16>A;++A)b[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=I.g[0],E=I.g[1],A=I.g[2];var v=I.g[3],w=y+(v^E&(A^v))+b[0]+3614090360&4294967295;y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[1]+3905402710&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[2]+606105819&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[3]+3250441966&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[4]+4118548399&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[5]+1200080426&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[6]+2821735955&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[7]+4249261313&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[8]+1770035416&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[9]+2336552879&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[10]+4294925233&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[11]+2304563134&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[12]+1804603682&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[13]+4254626195&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[14]+2792965006&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[15]+1236535329&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(A^v&(E^A))+b[1]+4129170786&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[6]+3225465664&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[11]+643717713&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[0]+3921069994&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[5]+3593408605&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[10]+38016083&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[15]+3634488961&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[4]+3889429448&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[9]+568446438&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[14]+3275163606&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[3]+4107603335&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[8]+1163531501&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[13]+2850285829&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[2]+4243563512&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[7]+1735328473&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[12]+2368359562&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(E^A^v)+b[5]+4294588738&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[8]+2272392833&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[11]+1839030562&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[14]+4259657740&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[1]+2763975236&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[4]+1272893353&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[7]+4139469664&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[10]+3200236656&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[13]+681279174&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[0]+3936430074&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[3]+3572445317&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[6]+76029189&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[9]+3654602809&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[12]+3873151461&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[15]+530742520&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[2]+3299628645&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(A^(E|~v))+b[0]+4096336452&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[7]+1126891415&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[14]+2878612391&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[5]+4237533241&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[12]+1700485571&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[3]+2399980690&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[10]+4293915773&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[1]+2240044497&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[8]+1873313359&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[15]+4264355552&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[6]+2734768916&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[13]+1309151649&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[4]+4149444226&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[11]+3174756917&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[2]+718787259&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+v&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var E=y-this.blockSize,b=this.B,A=this.h,v=0;v<y;){if(A==0)for(;v<=E;)s(this,I,v),v+=this.blockSize;if(typeof I=="string"){for(;v<y;)if(b[A++]=I.charCodeAt(v++),A==this.blockSize){s(this,b),A=0;break}}else for(;v<y;)if(b[A++]=I[v++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var E=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=E&255,E/=256;for(this.u(I),I=Array(16),y=E=0;4>y;++y)for(var b=0;32>b;b+=8)I[E++]=this.g[y]>>>b&255;return I};function i(I,y){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=y(I)}function a(I,y){this.h=y;for(var E=[],b=!0,A=I.length-1;0<=A;A--){var v=I[A]|0;b&&v==y||(E[A]=v,b=!1)}this.g=E}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return S(h(-I));for(var y=[],E=1,b=0;I>=E;b++)y[b]=I/E|0,E*=4294967296;return new a(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return S(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),b=_,A=0;A<I.length;A+=8){var v=Math.min(8,I.length-A),w=parseInt(I.substring(A,A+v),y);8>v?(v=h(Math.pow(y,v)),b=b.j(v).add(h(w))):(b=b.j(E),b=b.add(h(w)))}return b}var _=l(0),m=l(1),T=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-S(this).m();for(var I=0,y=1,E=0;E<this.g.length;E++){var b=this.i(E);I+=(0<=b?b:4294967296+b)*y,y*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(D(this))return"-"+S(this).toString(I);for(var y=h(Math.pow(I,6)),E=this,b="";;){var A=H(E,y).g;E=M(E,A.j(y));var v=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=A,k(E))return v+b;for(;6>v.length;)v="0"+v;b=v+b}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function D(I){return I.h==-1}n.l=function(I){return I=M(this,I),D(I)?-1:k(I)?0:1};function S(I){for(var y=I.g.length,E=[],b=0;b<y;b++)E[b]=~I.g[b];return new a(E,~I.h).add(m)}n.abs=function(){return D(this)?S(this):this},n.add=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],b=0,A=0;A<=y;A++){var v=b+(this.i(A)&65535)+(I.i(A)&65535),w=(v>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=w>>>16,v&=65535,w&=65535,E[A]=w<<16|v}return new a(E,E[E.length-1]&-2147483648?-1:0)};function M(I,y){return I.add(S(y))}n.j=function(I){if(k(this)||k(I))return _;if(D(this))return D(I)?S(this).j(S(I)):S(S(this).j(I));if(D(I))return S(this.j(S(I)));if(0>this.l(T)&&0>I.l(T))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,E=[],b=0;b<2*y;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<I.g.length;A++){var v=this.i(b)>>>16,w=this.i(b)&65535,ue=I.i(A)>>>16,Ce=I.i(A)&65535;E[2*b+2*A]+=w*Ce,O(E,2*b+2*A),E[2*b+2*A+1]+=v*Ce,O(E,2*b+2*A+1),E[2*b+2*A+1]+=w*ue,O(E,2*b+2*A+1),E[2*b+2*A+2]+=v*ue,O(E,2*b+2*A+2)}for(b=0;b<y;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=y;b<2*y;b++)E[b]=0;return new a(E,0)};function O(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function $(I,y){this.g=I,this.h=y}function H(I,y){if(k(y))throw Error("division by zero");if(k(I))return new $(_,_);if(D(I))return y=H(S(I),y),new $(S(y.g),S(y.h));if(D(y))return y=H(I,S(y)),new $(S(y.g),y.h);if(30<I.g.length){if(D(I)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,b=y;0>=b.l(I);)E=X(E),b=X(b);var A=Z(E,1),v=Z(b,1);for(b=Z(b,2),E=Z(E,2);!k(b);){var w=v.add(b);0>=w.l(I)&&(A=A.add(E),v=w),b=Z(b,1),E=Z(E,1)}return y=M(I,A.j(y)),new $(A,y)}for(A=_;0<=I.l(y);){for(E=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),v=h(E),w=v.j(y);D(w)||0<w.l(I);)E-=b,v=h(E),w=v.j(y);k(v)&&(v=m),A=A.add(v),I=M(I,w)}return new $(A,I)}n.A=function(I){return H(this,I).h},n.and=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)&I.i(b);return new a(E,this.h&I.h)},n.or=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)|I.i(b);return new a(E,this.h|I.h)},n.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)^I.i(b);return new a(E,this.h^I.h)};function X(I){for(var y=I.g.length+1,E=[],b=0;b<y;b++)E[b]=I.i(b)<<1|I.i(b-1)>>>31;return new a(E,I.h)}function Z(I,y){var E=y>>5;y%=32;for(var b=I.g.length-E,A=[],v=0;v<b;v++)A[v]=0<y?I.i(v+E)>>>y|I.i(v+E+1)<<32-y:I.i(v+E);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Cn=a}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});var Ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var id,Xr,od,ui,aa,ad,cd,ld;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,p){return o==Array.prototype||o==Object.prototype||(o[u]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ys=="object"&&Ys];for(var u=0;u<o.length;++u){var p=o[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var p=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in p))break e;p=p[R]}o=o[o.length-1],g=p[o],u=u(g),u!=g&&u!=null&&e(p,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var p=0,g=!1,R={next:function(){if(!g&&p<o.length){var C=p++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,p){return o.call.apply(o.bind,arguments)}function _(o,u,p){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function m(o,u,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,m.apply(null,arguments)}function T(o,u){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function p(){}p.prototype=u.prototype,o.aa=u.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var L=Array(arguments.length-2),he=2;he<arguments.length;he++)L[he-2]=arguments[he];return u.prototype[R].apply(g,L)}}function D(o){const u=o.length;if(0<u){const p=Array(u);for(let g=0;g<u;g++)p[g]=o[g];return p}return[]}function S(o,u){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let L=0;L<C;L++)o[R+L]=g[L]}else o.push(g)}}class M{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function O(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var X=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Z(o,u,p){for(const g in o)u.call(p,o[g],g,o)}function I(o,u){for(const p in o)u.call(void 0,o[p],p,o)}function y(o){const u={};for(const p in o)u[p]=o[p];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let p,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(p in g)o[p]=g[p];for(let C=0;C<E.length;C++)p=E[C],Object.prototype.hasOwnProperty.call(g,p)&&(o[p]=g[p])}}function A(o){var u=1;o=o.split(":");const p=[];for(;0<u&&o.length;)p.push(o.shift()),u--;return o.length&&p.push(o.join(":")),p}function v(o){c.setTimeout(()=>{throw o},0)}function w(){var o=Kt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ue{constructor(){this.h=this.g=null}add(u,p){const g=Ce.get();g.set(u,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Ce=new M(()=>new Rt,o=>o.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,Gt=!1,Kt=new ue,Ds=()=>{const o=c.Promise.resolve(void 0);Ze=()=>{o.then(Cr)}};var Cr=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(p){v(p)}var u=Ce;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Gt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Dr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,u),c.removeEventListener("test",p,u)}catch{}return o}();function ot(o,u){if(fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(X){e:{try{H(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else p=="mouseover"?u=o.fromElement:p=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Eo[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ot.aa.h.call(this)}}k(ot,fe);var Eo={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),Ns=0;function Fe(o,u,p,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=p,this.capture=!!g,this.ha=R,this.key=++Ns,this.da=this.fa=!1}function Qt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function De(o){this.src=o,this.g={},this.h=0}De.prototype.add=function(o,u,p,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var L=tt(o,u,g,R);return-1<L?(u=o[L],p||(u.fa=!1)):(u=new Fe(u,this.src,C,!!g,R),u.fa=p,o.push(u)),u};function et(o,u){var p=u.type;if(p in o.g){var g=o.g[p],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(Qt(u),o.g[p].length==0&&(delete o.g[p],o.h--))}}function tt(o,u,p,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!p&&C.ha==g)return R}return-1}var at="closure_lm_"+(1e6*Math.random()|0),vn={};function Hn(o,u,p,g,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Hn(o,u[C],p,g,R);return null}return p=Nr(p),o&&o[Wn]?o.K(u,p,h(g)?!!g.capture:!1,R):Ms(o,u,p,!1,g,R)}function Ms(o,u,p,g,R,C){if(!u)throw Error("Invalid event type");var L=h(R)?!!R.capture:!!R,he=Kn(o);if(he||(o[at]=he=new De(o)),p=he.add(u,p,g,L,C),p.proxy)return p;if(g=Vs(),p.proxy=g,g.src=o,g.listener=p,o.addEventListener)Dr||(R=L),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(Gn(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Vs(){function o(p){return u.call(o.src,o.listener,p)}const u=wn;return o}function kt(o,u,p,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)kt(o,u[C],p,g,R);else g=h(g)?!!g.capture:!!g,p=Nr(p),o&&o[Wn]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],p=tt(C,p,g,R),-1<p&&(Qt(C[p]),Array.prototype.splice.call(C,p,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Kn(o))&&(u=o.g[u.toString()],o=-1,u&&(o=tt(u,p,g,R)),(p=-1<o?u[o]:null)&&_t(p))}function _t(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Wn])et(u.i,o);else{var p=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(p,g,o.capture):u.detachEvent?u.detachEvent(Gn(p),g):u.addListener&&u.removeListener&&u.removeListener(g),(p=Kn(u))?(et(p,o),p.h==0&&(p.src=null,u[at]=null)):Qt(o)}}}function Gn(o){return o in vn?vn[o]:vn[o]="on"+o}function wn(o,u){if(o.da)o=!0;else{u=new ot(u,this);var p=o.listener,g=o.ha||o.src;o.fa&&_t(o),o=p.call(g,u)}return o}function Kn(o){return o=o[at],o instanceof De?o:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nr(o){return typeof o=="function"?o:(o[Y]||(o[Y]=function(u){return o.handleEvent(u)}),o[Y])}function ge(){ht.call(this),this.i=new De(this),this.M=this,this.F=null}k(ge,ht),ge.prototype[Wn]=!0,ge.prototype.removeEventListener=function(o,u,p,g){kt(this,o,u,p,g)};function Ne(o,u){var p,g=o.F;if(g)for(p=[];g;g=g.F)p.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new fe(u,o);else if(u instanceof fe)u.target=u.target||o;else{var R=u;u=new fe(g,o),b(u,R)}if(R=!0,p)for(var C=p.length-1;0<=C;C--){var L=u.g=p[C];R=En(L,g,!0,u)&&R}if(L=u.g=o,R=En(L,g,!0,u)&&R,R=En(L,g,!1,u)&&R,p)for(C=0;C<p.length;C++)L=u.g=p[C],R=En(L,g,!1,u)&&R}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var p=o.g[u],g=0;g<p.length;g++)Qt(p[g]);delete o.g[u],o.h--}}this.F=null},ge.prototype.K=function(o,u,p,g){return this.i.add(String(o),u,!1,p,g)},ge.prototype.L=function(o,u,p,g){return this.i.add(String(o),u,!0,p,g)};function En(o,u,p,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var L=u[C];if(L&&!L.da&&L.capture==p){var he=L.listener,Me=L.ha||L.src;L.fa&&et(o.i,L),R=he.call(Me,g)!==!1&&R}}return R&&!g.defaultPrevented}function Xt(o,u,p){if(typeof o=="function")p&&(o=m(o,p));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Qn(o){o.g=Xt(()=>{o.g=null,o.i&&(o.i=!1,Qn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class To extends ht{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(o){ht.call(this),this.h=o,this.g={}}k(Pt,ht);var Os=[];function Xn(o){Z(o.g,function(u,p){this.g.hasOwnProperty(p)&&_t(u)},o),o.g={}}Pt.prototype.N=function(){Pt.aa.N.call(this),Xn(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tn=c.JSON.stringify,Jn=c.JSON.parse,Ls=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function yt(){}yt.prototype.h=null;function Yn(o){return o.h||(o.h=o.i())}function Mr(){}var In={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vt(){fe.call(this,"d")}k(vt,fe);function Zn(){fe.call(this,"c")}k(Zn,fe);var Qe={},P=null;function x(){return P=P||new ge}Qe.La="serverreachability";function q(o){fe.call(this,Qe.La,o)}k(q,fe);function Ct(o){const u=x();Ne(u,new q(u))}Qe.STAT_EVENT="statevent";function xc(o,u){fe.call(this,Qe.STAT_EVENT,o),this.stat=u}k(xc,fe);function We(o){const u=x();Ne(u,new xc(u,o))}Qe.Ma="timingevent";function Fc(o,u){fe.call(this,Qe.Ma,o),this.size=u}k(Fc,fe);function Vr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Or(){this.g=!0}Or.prototype.xa=function(){this.g=!1};function Lp(o,u,p,g,R,C){o.info(function(){if(o.g)if(C)for(var L="",he=C.split("&"),Me=0;Me<he.length;Me++){var ie=he[Me].split("=");if(1<ie.length){var Ue=ie[0];ie=ie[1];var $e=Ue.split("_");L=2<=$e.length&&$e[1]=="type"?L+(Ue+"="+ie+"&"):L+(Ue+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+p+`
`+L})}function xp(o,u,p,g,R,C,L){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+p+`
`+C+" "+L})}function er(o,u,p,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Up(o,p)+(g?" "+g:"")})}function Fp(o,u){o.info(function(){return"TIMEOUT: "+u})}Or.prototype.info=function(){};function Up(o,u){if(!o.g)return u;if(!u)return null;try{var p=JSON.parse(u);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var g=p[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<R.length;L++)R[L]=""}}}}return Tn(p)}catch{return u}}var xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Io;function Fs(){}k(Fs,yt),Fs.prototype.g=function(){return new XMLHttpRequest},Fs.prototype.i=function(){return{}},Io=new Fs;function Jt(o,u,p,g){this.j=o,this.i=u,this.l=p,this.R=g||1,this.U=new Pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var Bc={},bo={};function Ao(o,u,p){o.L=1,o.v=js(Dt(u)),o.m=p,o.P=!0,jc(o,null)}function jc(o,u){o.F=Date.now(),Us(o),o.A=Dt(o.v);var p=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),nl(p.i,"t",g),o.C=0,p=o.j.J,o.h=new $c,o.g=wl(o.j,p?u:null,!o.m),0<o.O&&(o.M=new To(m(o.Y,o,o.g),o.O)),u=o.U,p=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Os[0]=R.toString()),R=Os);for(var C=0;C<R.length;C++){var L=Hn(p,R[C],g||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ct(),Lp(o.i,o.u,o.A,o.l,o.R,o.m)}Jt.prototype.ca=function(o){o=o.target;const u=this.M;u&&Nt(o)==3?u.j():this.Y(o)},Jt.prototype.Y=function(o){try{if(o==this.g)e:{const $e=Nt(this.g);var u=this.g.Ba();const rr=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||ll(this.g)))){this.J||$e!=4||u==7||(u==8||0>=rr?Ct(3):Ct(2)),So(this);var p=this.g.Z();this.X=p;t:if(qc(this)){var g=ll(this.g);o="";var R=g.length,C=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Lr(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=p==200,xp(this.i,this.u,this.A,this.l,this.R,$e,p),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Me=this.g;if((he=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(he)){var ie=he;break t}}ie=null}if(p=ie)er(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ro(this,p);else{this.o=!1,this.s=3,We(12),bn(this),Lr(this);break e}}if(this.P){p=!0;let dt;for(;!this.J&&this.C<L.length;)if(dt=$p(this,L),dt==bo){$e==4&&(this.s=4,We(14),p=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Bc){this.s=4,We(15),er(this.i,this.l,L,"[Invalid Chunk]"),p=!1;break}else er(this.i,this.l,dt,null),Ro(this,dt);if(qc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||L.length!=0||this.h.h||(this.s=1,We(16),p=!1),this.o=this.o&&p,!p)er(this.i,this.l,L,"[Invalid Chunked Response]"),bn(this),Lr(this);else if(0<L.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Mo(Ue),Ue.M=!0,We(11))}}else er(this.i,this.l,L,null),Ro(this,L);$e==4&&bn(this),this.o&&!this.J&&($e==4?gl(this.j,this):(this.o=!1,Us(this)))}else rm(this.g),p==400&&0<L.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),bn(this),Lr(this)}}}catch{}finally{}};function qc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function $p(o,u){var p=o.C,g=u.indexOf(`
`,p);return g==-1?bo:(p=Number(u.substring(p,g)),isNaN(p)?Bc:(g+=1,g+p>u.length?bo:(u=u.slice(g,g+p),o.C=g+p,u)))}Jt.prototype.cancel=function(){this.J=!0,bn(this)};function Us(o){o.S=Date.now()+o.I,zc(o,o.I)}function zc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Vr(m(o.ba,o),u)}function So(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Jt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Fp(this.i,this.A),this.L!=2&&(Ct(),We(17)),bn(this),this.s=2,Lr(this)):zc(this,this.S-o)};function Lr(o){o.j.G==0||o.J||gl(o.j,o)}function bn(o){So(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Xn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ro(o,u){try{var p=o.j;if(p.G!=0&&(p.g==o||ko(p.h,o))){if(!o.K&&ko(p.h,o)&&p.G==3){try{var g=p.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)Ks(p),Hs(p);else break e;No(p),We(18)}}else p.za=R[1],0<p.za-p.T&&37500>R[2]&&p.F&&p.v==0&&!p.C&&(p.C=Vr(m(p.Za,p),6e3));if(1>=Gc(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Sn(p,11)}else if((o.K||p.g==o)&&Ks(p),!O(u))for(R=p.Da.g.parse(u),u=0;u<R.length;u++){let ie=R[u];if(p.T=ie[0],ie=ie[1],p.G==2)if(ie[0]=="c"){p.K=ie[1],p.ia=ie[2];const Ue=ie[3];Ue!=null&&(p.la=Ue,p.j.info("VER="+p.la));const $e=ie[4];$e!=null&&(p.Aa=$e,p.j.info("SVER="+p.Aa));const rr=ie[5];rr!=null&&typeof rr=="number"&&0<rr&&(g=1.5*rr,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const dt=o.g;if(dt){const Xs=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var C=g.h;C.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Po(C,C.h),C.h=null))}if(g.D){const Vo=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vo&&(g.ya=Vo,pe(g.I,g.D,Vo))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var L=o;if(g.qa=vl(g,g.J?g.ia:null,g.W),L.K){Kc(g.h,L);var he=L,Me=g.L;Me&&(he.I=Me),he.B&&(So(he),Us(he)),g.g=L}else pl(g);0<p.i.length&&Gs(p)}else ie[0]!="stop"&&ie[0]!="close"||Sn(p,7);else p.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Sn(p,7):Do(p):ie[0]!="noop"&&p.l&&p.l.ta(ie),p.v=0)}}Ct(4)}catch{}}var Bp=class{constructor(o,u){this.g=o,this.map=u}};function Wc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Gc(o){return o.h?1:o.g?o.g.size:0}function ko(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Po(o,u){o.g?o.g.add(u):o.h=u}function Kc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Wc.prototype.cancel=function(){if(this.i=Qc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Qc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const p of o.g.values())u=u.concat(p.D);return u}return D(o.i)}function jp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],p=o.length,g=0;g<p;g++)u.push(o[g]);return u}u=[],p=0;for(g in o)u[p++]=o[g];return u}function qp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var p=0;p<o;p++)u.push(p);return u}u=[],p=0;for(const g in o)u[p++]=g;return u}}}function Xc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var p=qp(o),g=jp(o),R=g.length,C=0;C<R;C++)u.call(void 0,g[C],p&&p[C],o)}var Jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zp(o,u){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var g=o[p].indexOf("="),R=null;if(0<=g){var C=o[p].substring(0,g);R=o[p].substring(g+1)}else C=o[p];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function An(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof An){this.h=o.h,$s(this,o.j),this.o=o.o,this.g=o.g,Bs(this,o.s),this.l=o.l;var u=o.i,p=new Ur;p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),Yc(this,p),this.m=o.m}else o&&(u=String(o).match(Jc))?(this.h=!1,$s(this,u[1]||"",!0),this.o=xr(u[2]||""),this.g=xr(u[3]||"",!0),Bs(this,u[4]),this.l=xr(u[5]||"",!0),Yc(this,u[6]||"",!0),this.m=xr(u[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}An.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Fr(u,Zc,!0),":");var p=this.g;return(p||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Fr(u,Zc,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Fr(p,p.charAt(0)=="/"?Gp:Hp,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Fr(p,Qp)),o.join("")};function Dt(o){return new An(o)}function $s(o,u,p){o.j=p?xr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Bs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Yc(o,u,p){u instanceof Ur?(o.i=u,Xp(o.i,o.h)):(p||(u=Fr(u,Kp)),o.i=new Ur(u,o.h))}function pe(o,u,p){o.i.set(u,p)}function js(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function xr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Fr(o,u,p){return typeof o=="string"?(o=encodeURI(o).replace(u,Wp),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Wp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Zc=/[#\/\?@]/g,Hp=/[#\?:]/g,Gp=/[#\?]/g,Kp=/[#\?@]/g,Qp=/#/g;function Ur(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Yt(o){o.g||(o.g=new Map,o.h=0,o.i&&zp(o.i,function(u,p){o.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=Ur.prototype,n.add=function(o,u){Yt(this),this.i=null,o=tr(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(u),this.h+=1,this};function el(o,u){Yt(o),u=tr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function tl(o,u){return Yt(o),u=tr(o,u),o.g.has(u)}n.forEach=function(o,u){Yt(this),this.g.forEach(function(p,g){p.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){Yt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),p=[];for(let g=0;g<u.length;g++){const R=o[g];for(let C=0;C<R.length;C++)p.push(u[g])}return p},n.V=function(o){Yt(this);let u=[];if(typeof o=="string")tl(this,o)&&(u=u.concat(this.g.get(tr(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)u=u.concat(o[p])}return u},n.set=function(o,u){return Yt(this),this.i=null,o=tr(this,o),tl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function nl(o,u,p){el(o,u),0<p.length&&(o.i=null,o.g.set(tr(o,u),D(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var p=0;p<u.length;p++){var g=u[p];const C=encodeURIComponent(String(g)),L=this.V(g);for(g=0;g<L.length;g++){var R=C;L[g]!==""&&(R+="="+encodeURIComponent(String(L[g]))),o.push(R)}}return this.i=o.join("&")};function tr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Xp(o,u){u&&!o.j&&(Yt(o),o.i=null,o.g.forEach(function(p,g){var R=g.toLowerCase();g!=R&&(el(this,g),nl(this,R,p))},o)),o.j=u}function Jp(o,u){const p=new Or;if(c.Image){const g=new Image;g.onload=T(Zt,p,"TestLoadImage: loaded",!0,u,g),g.onerror=T(Zt,p,"TestLoadImage: error",!1,u,g),g.onabort=T(Zt,p,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(Zt,p,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Yp(o,u){const p=new Or,g=new AbortController,R=setTimeout(()=>{g.abort(),Zt(p,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?Zt(p,"TestPingServer: ok",!0,u):Zt(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Zt(p,"TestPingServer: error",!1,u)})}function Zt(o,u,p,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(p)}catch{}}function Zp(){this.g=new Ls}function em(o,u,p){const g=p||"";try{Xc(o,function(R,C){let L=R;h(R)&&(L=Tn(R)),u.push(g+C+"="+encodeURIComponent(L))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function qs(o){this.l=o.Ub||null,this.j=o.eb||!1}k(qs,yt),qs.prototype.g=function(){return new zs(this.l,this.j)},qs.prototype.i=function(o){return function(){return o}}({});function zs(o,u){ge.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(zs,ge),n=zs.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Br(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$r(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Br(this)),this.g&&(this.readyState=3,Br(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?$r(this):Br(this),this.readyState==3&&rl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,$r(this))},n.Qa=function(o){this.g&&(this.response=o,$r(this))},n.ga=function(){this.g&&$r(this)};function $r(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Br(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=u.next();return o.join(`\r
`)};function Br(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function sl(o){let u="";return Z(o,function(p,g){u+=g,u+=":",u+=p,u+=`\r
`}),u}function Co(o,u,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=sl(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):pe(o,u,p))}function ve(o){ge.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ve,ge);var tm=/^https?$/i,nm=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Io.g(),this.v=this.o?Yn(this.o):Yn(Io),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){il(this,C);return}if(o=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)p.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())p.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(nm,u,void 0))||g||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of p)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){il(this,C)}};function il(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,ol(o),Ws(o)}function ol(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),Ws(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ws(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?al(this):this.bb())},n.bb=function(){al(this)};function al(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Nt(o)!=4||o.Z()!=2)){if(o.u&&Nt(o)==4)Xt(o.Ea,0,o);else if(Ne(o,"readystatechange"),Nt(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var g;if(g=L===0){var R=String(o.D).match(Jc)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!tm.test(R?R.toLowerCase():"")}p=g}if(p)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var C=2<Nt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",ol(o)}}finally{Ws(o)}}}}function Ws(o,u){if(o.g){cl(o);const p=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ne(o,"ready");try{p.onreadystatechange=g}catch{}}}function cl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Jn(u)}};function ll(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function rm(o){const u={};o=(o.g&&2<=Nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(O(o[g]))continue;var p=A(o[g]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const C=u[R]||[];u[R]=C,C.push(p)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jr(o,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||u}function ul(o){this.Aa=0,this.i=[],this.j=new Or,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jr("baseRetryDelayMs",5e3,o),this.cb=jr("retryDelaySeedMs",1e4,o),this.Wa=jr("forwardChannelMaxRetries",2,o),this.wa=jr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wc(o&&o.concurrentRequestLimit),this.Da=new Zp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ul.prototype,n.la=8,n.G=1,n.connect=function(o,u,p,g){We(0),this.W=o,this.H=u||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=vl(this,null,this.W),Gs(this)};function Do(o){if(hl(o),o.G==3){var u=o.U++,p=Dt(o.I);if(pe(p,"SID",o.K),pe(p,"RID",u),pe(p,"TYPE","terminate"),qr(o,p),u=new Jt(o,o.j,u),u.L=2,u.v=js(Dt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=u.v,p=!0),p||(u.g=wl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Us(u)}yl(o)}function Hs(o){o.g&&(Mo(o),o.g.cancel(),o.g=null)}function hl(o){Hs(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ks(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Gs(o){if(!Hc(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ze||Ds(),Gt||(Ze(),Gt=!0),Kt.add(u,o),o.B=0}}function sm(o,u){return Gc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Vr(m(o.Ga,o,u),_l(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Jt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=fl(this,R,u),p=Dt(this.I),pe(p,"RID",o),pe(p,"CVER",22),this.D&&pe(p,"X-HTTP-Session-Id",this.D),qr(this,p),C&&(this.O?u="headers="+encodeURIComponent(String(sl(C)))+"&"+u:this.m&&Co(p,this.m,C)),Po(this.h,R),this.Ua&&pe(p,"TYPE","init"),this.P?(pe(p,"$req",u),pe(p,"SID","null"),R.T=!0,Ao(R,p,null)):Ao(R,p,u),this.G=2}}else this.G==3&&(o?dl(this,o):this.i.length==0||Hc(this.h)||dl(this))};function dl(o,u){var p;u?p=u.l:p=o.U++;const g=Dt(o.I);pe(g,"SID",o.K),pe(g,"RID",p),pe(g,"AID",o.T),qr(o,g),o.m&&o.o&&Co(g,o.m,o.o),p=new Jt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),u&&(o.i=u.D.concat(o.i)),u=fl(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Po(o.h,p),Ao(p,g,u)}function qr(o,u){o.H&&Z(o.H,function(p,g){pe(u,g,p)}),o.l&&Xc({},function(p,g){pe(u,g,p)})}function fl(o,u,p){p=Math.min(o.i.length,p);var g=o.l?m(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const L=["count="+p];C==-1?0<p?(C=R[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let he=!0;for(let Me=0;Me<p;Me++){let ie=R[Me].g;const Ue=R[Me].map;if(ie-=C,0>ie)C=Math.max(0,R[Me].g-100),he=!1;else try{em(Ue,L,"req"+ie+"_")}catch{g&&g(Ue)}}if(he){g=L.join("&");break e}}}return o=o.i.splice(0,p),u.D=o,g}function pl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ze||Ds(),Gt||(Ze(),Gt=!0),Kt.add(u,o),o.v=0}}function No(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Vr(m(o.Fa,o),_l(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Vr(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),Hs(this),ml(this))};function Mo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ml(o){o.g=new Jt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Dt(o.qa);pe(u,"RID","rpc"),pe(u,"SID",o.K),pe(u,"AID",o.T),pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(u,"TO",o.ja),pe(u,"TYPE","xmlhttp"),qr(o,u),o.m&&o.o&&Co(u,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=js(Dt(u)),p.m=null,p.P=!0,jc(p,o)}n.Za=function(){this.C!=null&&(this.C=null,Hs(this),No(this),We(19))};function Ks(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function gl(o,u){var p=null;if(o.g==u){Ks(o),Mo(o),o.g=null;var g=2}else if(ko(o.h,u))p=u.D,Kc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){p=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=x(),Ne(g,new Fc(g,p)),Gs(o)}else pl(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&sm(o,u)||g==2&&No(o)))switch(p&&0<p.length&&(u=o.h,u.i=u.i.concat(p)),R){case 1:Sn(o,5);break;case 4:Sn(o,10);break;case 3:Sn(o,6);break;default:Sn(o,2)}}}function _l(o,u){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*u}function Sn(o,u){if(o.j.info("Error code "+u),u==2){var p=m(o.fb,o),g=o.Xa;const R=!g;g=new An(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$s(g,"https"),js(g),R?Jp(g.toString(),p):Yp(g.toString(),p)}else We(2);o.G=0,o.l&&o.l.sa(u),yl(o),hl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function yl(o){if(o.G=0,o.ka=[],o.l){const u=Qc(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ka,u),S(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function vl(o,u,p){var g=p instanceof An?Dt(p):new An(p);if(g.g!="")u&&(g.g=u+"."+g.g),Bs(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new An(null);g&&$s(C,g),u&&(C.g=u),R&&Bs(C,R),p&&(C.l=p),g=C}return p=o.D,u=o.ya,p&&u&&pe(g,p,u),pe(g,"VER",o.la),qr(o,g),g}function wl(o,u,p){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ve(new qs({eb:p})):new ve(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}n=El.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qs(){}Qs.prototype.g=function(o,u){return new nt(o,u)};function nt(o,u){ge.call(this),this.g=new ul(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!O(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!O(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new nr(this)}k(nt,ge),nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nt.prototype.close=function(){Do(this.g)},nt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=Tn(o),o=p);u.i.push(new Bp(u.Ya++,o)),u.G==3&&Gs(u)},nt.prototype.N=function(){this.g.l=null,delete this.j,Do(this.g),delete this.g,nt.aa.N.call(this)};function Tl(o){vt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const p in u){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Tl,vt);function Il(){Zn.call(this),this.status=1}k(Il,Zn);function nr(o){this.g=o}k(nr,El),nr.prototype.ua=function(){Ne(this.g,"a")},nr.prototype.ta=function(o){Ne(this.g,new Tl(o))},nr.prototype.sa=function(o){Ne(this.g,new Il)},nr.prototype.ra=function(){Ne(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,nt.prototype.send=nt.prototype.o,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,ld=function(){return new Qs},cd=function(){return x()},ad=Qe,aa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,ui=xs,Uc.COMPLETE="complete",od=Uc,Mr.EventType=In,In.OPEN="a",In.CLOSE="b",In.ERROR="c",In.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Xr=Mr,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,id=ve}).apply(typeof Ys<"u"?Ys:typeof self<"u"?self:typeof window<"u"?window:{});const Jl="@firebase/firestore";/**
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
 */let Ir="10.14.0";/**
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
 */const On=new Oa("@firebase/firestore");function Hr(){return On.logLevel}function B(n,...e){if(On.logLevel<=re.DEBUG){const t=e.map(Fa);On.debug(`Firestore (${Ir}): ${n}`,...t)}}function $t(n,...e){if(On.logLevel<=re.ERROR){const t=e.map(Fa);On.error(`Firestore (${Ir}): ${n}`,...t)}}function pr(n,...e){if(On.logLevel<=re.WARN){const t=e.map(Fa);On.warn(`Firestore (${Ir}): ${n}`,...t)}}function Fa(n){if(typeof n=="string")return n;try{/**
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
 */function W(n="Unexpected state"){const e=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: `+n;throw $t(e),new Error(e)}function le(n,e){n||W()}function K(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ud{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class l_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(je.UNAUTHENTICATED))}shutdown(){}}class u_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class h_{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ft,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ft)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new ud(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new je(e)}}class d_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class f_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new d_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){le(this.o===void 0);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string"),this.R=t.token,new p_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function g_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class hd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=g_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(n,e){return n<e?-1:n>e?1:0}function mr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Se{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Se(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class cs{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return cs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class me extends cs{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new me(t)}static emptyPath(){return new me([])}}const __=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends cs{construct(e,t,r){return new Oe(e,t,r)}static isValidIdentifier(e){return __.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(me.fromString(e))}static fromName(e){return new j(me.fromString(e).popFirst(5))}static empty(){return new j(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new me(e.slice()))}}function y_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Se(t+1,0):new Se(t,r));return new pn(s,j.empty(),e)}function v_(n){return new pn(n.readTime,n.key,-1)}class pn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pn(G.min(),j.empty(),-1)}static max(){return new pn(G.max(),j.empty(),-1)}}function w_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}/**
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
 */const E_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ys(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==E_)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function I_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function vs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ua{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ua.oe=-1;function Qi(n){return n==null}function Ri(n){return n===0&&1/n==-1/0}function b_(n){return typeof n=="number"&&Number.isInteger(n)&&!Ri(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Yl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ye{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zl(this.data.getIterator())}getIteratorFrom(e){return new Zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class Zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fd("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const A_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(n){if(le(!!n),typeof n=="string"){let e=0;const t=A_.exec(n);if(le(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ln(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
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
 */function $a(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ba(n){const e=n.mapValue.fields.__previous_value__;return $a(e)?Ba(e):e}function ls(n){const e=mn(n.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class S_{constructor(e,t,r,s,i,a,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class us{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ei={mapValue:{}};function xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$a(n)?4:k_(n)?9007199254740991:R_(n)?10:11:W()}function At(n,e){if(n===e)return!0;const t=xn(n);if(t!==xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ls(n).isEqual(ls(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=mn(s.timestampValue),c=mn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Ln(s.bytesValue).isEqual(Ln(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return we(s.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return we(s.integerValue)===we(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=we(s.doubleValue),c=we(i.doubleValue);return a===c?Ri(a)===Ri(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return mr(n.arrayValue.values||[],e.arrayValue.values||[],At);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Yl(a)!==Yl(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!At(a[l],c[l])))return!1;return!0}(n,e);default:return W()}}function hs(n,e){return(n.values||[]).find(t=>At(t,e))!==void 0}function gr(n,e){if(n===e)return 0;const t=xn(n),r=xn(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=we(i.integerValue||i.doubleValue),l=we(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return eu(n.timestampValue,e.timestampValue);case 4:return eu(ls(n),ls(e));case 5:return oe(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Ln(i),l=Ln(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=oe(c[h],l[h]);if(f!==0)return f}return oe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=oe(we(i.latitude),we(a.latitude));return c!==0?c:oe(we(i.longitude),we(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return tu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const _=i.fields||{},m=a.fields||{},T=(c=_.value)===null||c===void 0?void 0:c.arrayValue,k=(l=m.value)===null||l===void 0?void 0:l.arrayValue,D=oe(((h=T?.values)===null||h===void 0?void 0:h.length)||0,((f=k?.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:tu(T,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ei.mapValue&&a===ei.mapValue)return 0;if(i===ei.mapValue)return 1;if(a===ei.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let _=0;_<l.length&&_<f.length;++_){const m=oe(l[_],f[_]);if(m!==0)return m;const T=gr(c[l[_]],h[f[_]]);if(T!==0)return T}return oe(l.length,f.length)}(n.mapValue,e.mapValue);default:throw W()}}function eu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);const t=mn(n),r=mn(e),s=oe(t.seconds,r.seconds);return s!==0?s:oe(t.nanos,r.nanos)}function tu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=gr(t[s],r[s]);if(i)return i}return oe(t.length,r.length)}function _r(n){return ca(n)}function ca(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ln(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ca(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ca(t.fields[a])}`;return s+"}"}(n.mapValue):W()}function nu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function la(n){return!!n&&"integerValue"in n}function ja(n){return!!n&&"arrayValue"in n}function ru(n){return!!n&&"nullValue"in n}function su(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hi(n){return!!n&&"mapValue"in n}function R_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ts(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ts(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ts(n.arrayValue.values[t]);return e}return Object.assign({},n)}function k_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ts(t)}setAll(e){let t=Oe.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ts(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xe(ts(this.value))}}function pd(n){const e=[];return Bn(n.fields,(t,r)=>{const s=new Oe([t]);if(hi(r)){const i=pd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new st(e)}/**
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
 */class ki{constructor(e,t){this.position=e,this.inclusive=t}}function iu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),t.key):r=gr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ou(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!At(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Pi{constructor(e,t="asc"){this.field=e,this.dir=t}}function P_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class md{}class Ae extends md{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new D_(e,t,r):t==="array-contains"?new V_(e,r):t==="in"?new O_(e,r):t==="not-in"?new L_(e,r):t==="array-contains-any"?new x_(e,r):new Ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new N_(e,r):new M_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(gr(t,this.value)):t!==null&&xn(this.value)===xn(t)&&this.matchesComparison(gr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends md{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new pt(e,t)}matches(e){return gd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gd(n){return n.op==="and"}function _d(n){return C_(n)&&gd(n)}function C_(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function ua(n){if(n instanceof Ae)return n.field.canonicalString()+n.op.toString()+_r(n.value);if(_d(n))return n.filters.map(e=>ua(e)).join(",");{const e=n.filters.map(t=>ua(t)).join(",");return`${n.op}(${e})`}}function yd(n,e){return n instanceof Ae?function(r,s){return s instanceof Ae&&r.op===s.op&&r.field.isEqual(s.field)&&At(r.value,s.value)}(n,e):n instanceof pt?function(r,s){return s instanceof pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&yd(a,s.filters[c]),!0):!1}(n,e):void W()}function vd(n){return n instanceof Ae?function(t){return`${t.field.canonicalString()} ${t.op} ${_r(t.value)}`}(n):n instanceof pt?function(t){return t.op.toString()+" {"+t.getFilters().map(vd).join(" ,")+"}"}(n):"Filter"}class D_ extends Ae{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class N_ extends Ae{constructor(e,t){super(e,"in",t),this.keys=wd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class M_ extends Ae{constructor(e,t){super(e,"not-in",t),this.keys=wd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class V_ extends Ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ja(t)&&hs(t.arrayValue,this.value)}}class O_ extends Ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hs(this.value.arrayValue,t)}}class L_ extends Ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hs(this.value.arrayValue,t)}}class x_ extends Ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ja(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>hs(this.value.arrayValue,r))}}/**
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
 */class F_{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function au(n,e=null,t=[],r=[],s=null,i=null,a=null){return new F_(n,e,t,r,s,i,a)}function qa(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ua(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>_r(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>_r(r)).join(",")),e.ue=t}return e.ue}function za(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!P_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ou(n.startAt,e.startAt)&&ou(n.endAt,e.endAt)}function ha(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ws{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function U_(n,e,t,r,s,i,a,c){return new ws(n,e,t,r,s,i,a,c)}function Xi(n){return new ws(n)}function cu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ed(n){return n.collectionGroup!==null}function ns(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Le(Oe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Pi(i,r))}),t.has(Oe.keyField().canonicalString())||e.ce.push(new Pi(Oe.keyField(),r))}return e.ce}function Et(n){const e=K(n);return e.le||(e.le=$_(e,ns(n))),e.le}function $_(n,e){if(n.limitType==="F")return au(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pi(s.field,i)});const t=n.endAt?new ki(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ki(n.startAt.position,n.startAt.inclusive):null;return au(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function da(n,e){const t=n.filters.concat([e]);return new ws(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ci(n,e,t){return new ws(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ji(n,e){return za(Et(n),Et(e))&&n.limitType===e.limitType}function Td(n){return`${qa(Et(n))}|lt:${n.limitType}`}function ir(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>vd(s)).join(", ")}]`),Qi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>_r(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>_r(s)).join(",")),`Target(${r})`}(Et(n))}; limitType=${n.limitType})`}function Yi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ns(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=iu(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,ns(r),s)||r.endAt&&!function(a,c,l){const h=iu(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,ns(r),s))}(n,e)}function B_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Id(n){return(e,t)=>{let r=!1;for(const s of ns(n)){const i=j_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function j_(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?gr(l,h):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class br{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return dd(this.inner)}size(){return this.innerSize}}/**
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
 */const q_=new ye(j.comparator);function Bt(){return q_}const bd=new ye(j.comparator);function Jr(...n){let e=bd;for(const t of n)e=e.insert(t.key,t);return e}function Ad(n){let e=bd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Pn(){return rs()}function Sd(){return rs()}function rs(){return new br(n=>n.toString(),(n,e)=>n.isEqual(e))}const z_=new ye(j.comparator),W_=new Le(j.comparator);function ne(...n){let e=W_;for(const t of n)e=e.add(t);return e}const H_=new Le(oe);function G_(){return H_}/**
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
 */function Wa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ri(e)?"-0":e}}function Rd(n){return{integerValue:""+n}}function K_(n,e){return b_(e)?Rd(e):Wa(n,e)}/**
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
 */class Zi{constructor(){this._=void 0}}function Q_(n,e,t){return n instanceof Di?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$a(i)&&(i=Ba(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof ds?Pd(n,e):n instanceof fs?Cd(n,e):function(s,i){const a=kd(s,i),c=lu(a)+lu(s.Pe);return la(a)&&la(s.Pe)?Rd(c):Wa(s.serializer,c)}(n,e)}function X_(n,e,t){return n instanceof ds?Pd(n,e):n instanceof fs?Cd(n,e):t}function kd(n,e){return n instanceof Ni?function(r){return la(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Di extends Zi{}class ds extends Zi{constructor(e){super(),this.elements=e}}function Pd(n,e){const t=Dd(e);for(const r of n.elements)t.some(s=>At(s,r))||t.push(r);return{arrayValue:{values:t}}}class fs extends Zi{constructor(e){super(),this.elements=e}}function Cd(n,e){let t=Dd(e);for(const r of n.elements)t=t.filter(s=>!At(s,r));return{arrayValue:{values:t}}}class Ni extends Zi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function lu(n){return we(n.integerValue||n.doubleValue)}function Dd(n){return ja(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function J_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ds&&s instanceof ds||r instanceof fs&&s instanceof fs?mr(r.elements,s.elements,At):r instanceof Ni&&s instanceof Ni?At(r.Pe,s.Pe):r instanceof Di&&s instanceof Di}(n.transform,e.transform)}class Y_{constructor(e,t){this.version=e,this.transformResults=t}}class Je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class eo{}function Nd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new to(n.key,Je.none()):new Es(n.key,n.data,Je.none());{const t=n.data,r=Xe.empty();let s=new Le(Oe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new _n(n.key,r,new st(s.toArray()),Je.none())}}function Z_(n,e,t){n instanceof Es?function(s,i,a){const c=s.value.clone(),l=hu(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof _n?function(s,i,a){if(!di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=hu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Md(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ss(n,e,t,r){return n instanceof Es?function(i,a,c,l){if(!di(i.precondition,a))return c;const h=i.value.clone(),f=du(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof _n?function(i,a,c,l){if(!di(i.precondition,a))return c;const h=du(i.fieldTransforms,l,a),f=a.data;return f.setAll(Md(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(i,a,c){return di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function ey(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=kd(r.transform,s||null);i!=null&&(t===null&&(t=Xe.empty()),t.set(r.field,i))}return t||null}function uu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mr(r,s,(i,a)=>J_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Es extends eo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _n extends eo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Md(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function hu(n,e,t){const r=new Map;le(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,X_(a,c,t[s]))}return r}function du(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Q_(i,a,e))}return r}class to extends eo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ty extends eo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ny{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Z_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ss(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ss(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Sd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Nd(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(t,r)=>uu(t,r))&&mr(this.baseMutations,e.baseMutations,(t,r)=>uu(t,r))}}class Ha{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){le(e.mutations.length===r.length);let s=function(){return z_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ha(e,t,r,s)}}/**
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
 */class ry{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ie,se;function iy(n){switch(n){default:return W();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Vd(n){if(n===void 0)return $t("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ie.OK:return N.OK;case Ie.CANCELLED:return N.CANCELLED;case Ie.UNKNOWN:return N.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return N.INTERNAL;case Ie.UNAVAILABLE:return N.UNAVAILABLE;case Ie.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ie.NOT_FOUND:return N.NOT_FOUND;case Ie.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ie.ABORTED:return N.ABORTED;case Ie.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ie.DATA_LOSS:return N.DATA_LOSS;default:return W()}}(se=Ie||(Ie={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oy(){return new TextEncoder}/**
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
 */const ay=new Cn([4294967295,4294967295],0);function fu(n){const e=oy().encode(n),t=new sd;return t.update(e),new Uint8Array(t.digest())}function pu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cn([t,r],0),new Cn([s,i],0)]}class Ga{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Yr(`Invalid padding: ${t}`);if(r<0)throw new Yr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Yr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Cn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Cn.fromNumber(r)));return s.compare(ay)===1&&(s=new Cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=fu(e),[r,s]=pu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ga(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=fu(e),[r,s]=pu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class no{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ts.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new no(G.min(),s,new ye(oe),Bt(),ne())}}class Ts{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ts(r,t,ne(),ne(),ne())}}/**
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
 */class fi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Od{constructor(e,t){this.targetId=e,this.me=t}}class Ld{constructor(e,t,r=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class mu{constructor(){this.fe=0,this.ge=_u(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:W()}}),new Ts(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=_u()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cy{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bt(),this.qe=gu(),this.Qe=new ye(oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(ha(i))if(r===0){const a=new j(i.path);this.Ue(t,a,qe.newNoDocument(a,G.min()))}else le(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Ln(r).toUint8Array()}catch(l){if(l instanceof fd)return pr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ga(a,s,i)}catch(l){return pr(l instanceof Yr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&ha(c.target)){const l=new j(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,qe.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ne();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new no(e,t,this.Qe,this.ke,r);return this.ke=Bt(),this.qe=gu(),this.Qe=new ye(oe),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new mu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Le(oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function gu(){return new ye(j.comparator)}function _u(){return new ye(j.comparator)}const ly={asc:"ASCENDING",desc:"DESCENDING"},uy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hy={and:"AND",or:"OR"};class dy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fa(n,e){return n.useProto3Json||Qi(e)?e:{value:e}}function Mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fy(n,e){return Mi(n,e.toTimestamp())}function Tt(n){return le(!!n),G.fromTimestamp(function(t){const r=mn(t);return new Se(r.seconds,r.nanos)}(n))}function Ka(n,e){return pa(n,e).canonicalString()}function pa(n,e){const t=function(s){return new me(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Fd(n){const e=me.fromString(n);return le(qd(e)),e}function ma(n,e){return Ka(n.databaseId,e.path)}function jo(n,e){const t=Fd(e);if(t.get(1)!==n.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j($d(t))}function Ud(n,e){return Ka(n.databaseId,e)}function py(n){const e=Fd(n);return e.length===4?me.emptyPath():$d(e)}function ga(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $d(n){return le(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function yu(n,e,t){return{name:ma(n,e),fields:t.value.mapValue.fields}}function my(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(le(f===void 0||typeof f=="string"),xe.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?N.UNKNOWN:Vd(h.code);return new F(f,h.message||"")}(a);t=new Ld(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jo(n,r.document.name),i=Tt(r.document.updateTime),a=r.document.createTime?Tt(r.document.createTime):G.min(),c=new Xe({mapValue:{fields:r.document.fields}}),l=qe.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new fi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jo(n,r.document),i=r.readTime?Tt(r.readTime):G.min(),a=qe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new fi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jo(n,r.document),i=r.removedTargetIds||[];t=new fi([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new sy(s,i),c=r.targetId;t=new Od(c,a)}}return t}function gy(n,e){let t;if(e instanceof Es)t={update:yu(n,e.key,e.value)};else if(e instanceof to)t={delete:ma(n,e.key)};else if(e instanceof _n)t={update:yu(n,e.key,e.data),updateMask:Ay(e.fieldMask)};else{if(!(e instanceof ty))return W();t={verify:ma(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Di)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ds)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ni)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(n,e.precondition)),t}function _y(n,e){return n&&n.length>0?(le(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Tt(s.updateTime):Tt(i);return a.isEqual(G.min())&&(a=Tt(i)),new Y_(a,s.transformResults||[])}(t,e))):[]}function yy(n,e){return{documents:[Ud(n,e.path)]}}function vy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ud(n,s);const i=function(h){if(h.length!==0)return jd(pt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:or(m.field),direction:Ty(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=fa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function wy(n){let e=py(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){le(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(_){const m=Bd(_);return m instanceof pt&&_d(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(m=>function(k){return new Pi(ar(k.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(_){let m;return m=typeof _=="object"?_.value:_,Qi(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(_){const m=!!_.before,T=_.values||[];return new ki(T,m)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const m=!_.before,T=_.values||[];return new ki(T,m)}(t.endAt)),U_(e,s,a,i,c,"F",l,h)}function Ey(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ar(t.unaryFilter.field);return Ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ar(t.unaryFilter.field);return Ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ar(t.unaryFilter.field);return Ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ar(t.unaryFilter.field);return Ae.create(a,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(t){return Ae.create(ar(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return pt.create(t.compositeFilter.filters.map(r=>Bd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W()}}(t.compositeFilter.op))}(n):W()}function Ty(n){return ly[n]}function Iy(n){return uy[n]}function by(n){return hy[n]}function or(n){return{fieldPath:n.canonicalString()}}function ar(n){return Oe.fromServerFormat(n.fieldPath)}function jd(n){return n instanceof Ae?function(t){if(t.op==="=="){if(su(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NAN"}};if(ru(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(su(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NAN"}};if(ru(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(t.field),op:Iy(t.op),value:t.value}}}(n):n instanceof pt?function(t){const r=t.getFilters().map(s=>jd(s));return r.length===1?r[0]:{compositeFilter:{op:by(t.op),filters:r}}}(n):W()}function Ay(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Sy{constructor(e){this.ct=e}}function Ry(n){const e=wy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ci(e,e.limit,"L"):e}/**
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
 */class ky{constructor(){this.un=new Py}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(pn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Py{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Le(me.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(me.comparator)).toArray()}}/**
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
 */class Cy{constructor(){this.changes=new br(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Dy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ny{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ss(r.mutation,s,st.empty(),Se.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=Pn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Jr();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Pn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Bt();const a=rs(),c=function(){return rs()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof _n)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ss(f.mutation,h,f.mutation.getFieldMask(),Se.now())):a.set(h.key,st.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var _;return c.set(h,new Dy(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const r=rs();let s=new ye((a,c)=>a-c),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||st.empty();f=c.applyToLocalView(h,f),r.set(l,f);const _=(s.get(c.batchId)||ne()).add(l);s=s.insert(c.batchId,_)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,_=Sd();f.forEach(m=>{if(!i.has(m)){const T=Nd(t.get(m),r.get(m));T!==null&&_.set(m,T),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ed(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(Pn());let c=-1,l=i;return a.next(h=>V.forEach(h,(f,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ne())).next(f=>({batchId:c,changes:Ad(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let s=Jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Jr();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,l=>{const h=function(_,m){return new ws(m,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((_,m)=>{a=a.insert(_,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,qe.newInvalidDocument(f)))});let c=Jr();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ss(f.mutation,h,st.empty(),Se.now()),Yi(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class My{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Tt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Ry(s.bundledQuery),readTime:Tt(s.readTime)}}(t)),V.resolve()}}/**
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
 */class Vy{constructor(){this.overlays=new ye(j.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Pn(),i=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ye((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Pn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Pn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return V.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ry(t,r));let i=this.Ir.get(t);i===void 0&&(i=ne(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Oy{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Qa{constructor(){this.Tr=new Le(ke.Er),this.dr=new Le(ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ke(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ke(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new j(new me([])),r=new ke(t,e),s=new ke(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new j(new me([])),r=new ke(t,e),s=new ke(t,e+1);let i=ne();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ke(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return j.comparator(e.key,t.key)||oe(e.wr,t.wr)}static Ar(e,t){return oe(e.wr,t.wr)||j.comparator(e.key,t.key)}}/**
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
 */class Ly{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Le(ke.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ny(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ke(t,0),s=new ke(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(oe);return t.forEach(s=>{const i=new ke(s,0),a=new ke(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const a=new ke(new j(i),0);let c=new Le(oe);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){le(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,s=>{const i=new ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ke(t,0),s=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class xy{constructor(e){this.Mr=e,this.docs=function(){return new ye(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let r=Bt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qe.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Bt();const a=t.path,c=new j(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||w_(v_(f),r)<=0||(s.has(f.key)||Yi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){W()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Fy(this)}getSize(e){return V.resolve(this.size)}}class Fy extends Cy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Uy{constructor(e){this.persistence=e,this.Nr=new br(t=>qa(t),za),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qa,this.targetCount=0,this.kr=yr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new yr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
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
 */class $y{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ua(0),this.Kr=!1,this.Kr=!0,this.$r=new Oy,this.referenceDelegate=e(this),this.Ur=new Uy(this),this.indexManager=new ky,this.remoteDocumentCache=function(s){return new xy(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Sy(t),this.Gr=new My(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Ly(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new By(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class By extends T_{constructor(e){super(),this.currentSequenceNumber=e}}class Xa{constructor(e){this.persistence=e,this.Jr=new Qa,this.Yr=null}static Zr(e){return new Xa(e)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=j.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,G.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Ja{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ja(e,t.fromCache,r,s)}}/**
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
 */class jy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zm()?8:I_(ze())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new jy;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Hr()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ir(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Hr()<=re.DEBUG&&B("QueryEngine","Query:",ir(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Hr()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ir(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Et(t))):V.resolve())}Yi(e,t){if(cu(t))return V.resolve(null);let r=Et(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ci(t,null,"F"),r=Et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ne(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,c);return this.ns(t,h,a,l.readTime)?this.Yi(e,Ci(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return cu(t)||s.isEqual(G.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?V.resolve(null):(Hr()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ir(t)),this.rs(e,a,t,y_(s,-1)).next(c=>c))})}ts(e,t){let r=new Le(Id(e));return t.forEach((s,i)=>{Yi(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Hr()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ir(t)),this.Ji.getDocumentsMatchingQuery(e,t,pn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class zy{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ye(oe),this._s=new br(i=>qa(i),za),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ny(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Wy(n,e,t,r){return new zy(n,e,t,r)}async function zd(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=ne();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function Hy(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const _=h.batch,m=_.keys();let T=V.resolve();return m.forEach(k=>{T=T.next(()=>f.getEntry(l,k)).next(D=>{const S=h.docVersions.get(k);le(S!==null),D.version.compareTo(S)<0&&(_.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,_))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ne();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Wd(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Gy(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,_)=>{const m=s.get(_);if(!m)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,_)));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?T=T.withResumeToken(xe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(_,T),function(D,S,M){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,T,f)&&c.push(t.Ur.updateTargetData(i,T))});let l=Bt(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Ky(i,a,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(G.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(_=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function Ky(n,e,t){let r=ne(),s=ne();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Bt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function Qy(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xy(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new an(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function _a(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!vs(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function vu(n,e,t){const r=K(n);let s=G.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const _=K(l),m=_._s.get(f);return m!==void 0?V.resolve(_.os.get(m)):_.Ur.getTargetData(h,f)}(r,a,Et(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:G.min(),t?i:ne())).next(c=>(Jy(r,B_(e),c),{documents:c,Ts:i})))}function Jy(n,e,t){let r=n.us.get(e)||G.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class wu{constructor(){this.activeTargetIds=G_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yy{constructor(){this.so=new wu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Zy{_o(e){}shutdown(){}}/**
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
 */class Eu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ti=null;function qo(){return ti===null?ti=function(){return 268435456+Math.round(2147483648*Math.random())}():ti++,"0x"+ti.toString(16)}/**
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
 */const ev={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Be="WebChannelConnection";class nv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=qo(),l=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,l,h,s).then(f=>(B("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw pr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ir}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=ev[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=qo();return new Promise((a,c)=>{const l=new id;l.setWithCredentials(!0),l.listenOnce(od.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ui.NO_ERROR:const f=l.getResponseJson();B(Be,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case ui.TIMEOUT:B(Be,`RPC '${e}' ${i} timed out`),c(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case ui.HTTP_ERROR:const _=l.getStatus();if(B(Be,`RPC '${e}' ${i} failed with status:`,_,"response text:",l.getResponseText()),_>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m?.error;if(T&&T.status&&T.message){const k=function(S){const M=S.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(M)>=0?M:N.UNKNOWN}(T.status);c(new F(k,T.message))}else c(new F(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new F(N.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{B(Be,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);B(Be,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=qo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ld(),c=cd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");B(Be,`Creating RPC '${e}' stream ${s}: ${f}`,l);const _=a.createWebChannel(f,l);let m=!1,T=!1;const k=new tv({Io:S=>{T?B(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(B(Be,`Opening RPC '${e}' stream ${s} transport.`),_.open(),m=!0),B(Be,`RPC '${e}' stream ${s} sending:`,S),_.send(S))},To:()=>_.close()}),D=(S,M,O)=>{S.listen(M,$=>{try{O($)}catch(H){setTimeout(()=>{throw H},0)}})};return D(_,Xr.EventType.OPEN,()=>{T||(B(Be,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),D(_,Xr.EventType.CLOSE,()=>{T||(T=!0,B(Be,`RPC '${e}' stream ${s} transport closed`),k.So())}),D(_,Xr.EventType.ERROR,S=>{T||(T=!0,pr(Be,`RPC '${e}' stream ${s} transport errored:`,S),k.So(new F(N.UNAVAILABLE,"The operation could not be completed")))}),D(_,Xr.EventType.MESSAGE,S=>{var M;if(!T){const O=S.data[0];le(!!O);const $=O,H=$.error||((M=$[0])===null||M===void 0?void 0:M.error);if(H){B(Be,`RPC '${e}' stream ${s} received error:`,H);const X=H.status;let Z=function(E){const b=Ie[E];if(b!==void 0)return Vd(b)}(X),I=H.message;Z===void 0&&(Z=N.INTERNAL,I="Unknown error status: "+X+" with message "+H.message),T=!0,k.So(new F(Z,I)),_.close()}else B(Be,`RPC '${e}' stream ${s} received:`,O),k.bo(O)}}),D(c,ad.STAT_EVENT,S=>{S.stat===aa.PROXY?B(Be,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===aa.NOPROXY&&B(Be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function zo(){return typeof document<"u"?document:null}/**
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
 */function ro(n){return new dy(n,!0)}/**
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
 */class Hd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Gd{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?($t(t.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new F(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rv extends Gd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=my(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?Tt(a.readTime):G.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=ga(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=ha(l)?{documents:yy(i,l)}:{query:vy(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=xd(i,a.resumeToken);const h=fa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=Mi(i,a.snapshotVersion.toTimestamp());const h=fa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Ey(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=ga(this.serializer),t.removeTarget=e,this.a_(t)}}class sv extends Gd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=_y(e.writeResults,e.commitTime),r=Tt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=ga(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gy(this.serializer,r))};this.a_(t)}}/**
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
 */class iv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,pa(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(N.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,pa(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ov{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class av{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{jn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=K(l);h.L_.add(4),await Is(h),h.q_.set("Unknown"),h.L_.delete(4),await so(h)}(this))})}),this.q_=new ov(r,s)}}async function so(n){if(jn(n))for(const e of n.B_)await e(!0)}async function Is(n){for(const e of n.B_)await e(!1)}function Kd(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),tc(t)?ec(t):Ar(t).r_()&&Za(t,e))}function Ya(n,e){const t=K(n),r=Ar(t);t.N_.delete(e),r.r_()&&Qd(t,e),t.N_.size===0&&(r.r_()?r.o_():jn(t)&&t.q_.set("Unknown"))}function Za(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ar(n).A_(e)}function Qd(n,e){n.Q_.xe(e),Ar(n).R_(e)}function ec(n){n.Q_=new cy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ar(n).start(),n.q_.v_()}function tc(n){return jn(n)&&!Ar(n).n_()&&n.N_.size>0}function jn(n){return K(n).L_.size===0}function Xd(n){n.Q_=void 0}async function cv(n){n.q_.set("Online")}async function lv(n){n.N_.forEach((e,t)=>{Za(n,e)})}async function uv(n,e){Xd(n),tc(n)?(n.q_.M_(e),ec(n)):n.q_.set("Unknown")}async function hv(n,e,t){if(n.q_.set("Online"),e instanceof Ld&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vi(n,r)}else if(e instanceof fi?n.Q_.Ke(e):e instanceof Od?n.Q_.He(e):n.Q_.We(e),!t.isEqual(G.min()))try{const r=await Wd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),Qd(i,l);const _=new an(f.target,l,h,f.sequenceNumber);Za(i,_)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Vi(n,r)}}async function Vi(n,e,t){if(!vs(e))throw e;n.L_.add(1),await Is(n),n.q_.set("Offline"),t||(t=()=>Wd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await so(n)})}function Jd(n,e){return e().catch(t=>Vi(n,t,e))}async function io(n){const e=K(n),t=gn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;dv(e);)try{const s=await Qy(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,fv(e,s)}catch(s){await Vi(e,s)}Yd(e)&&Zd(e)}function dv(n){return jn(n)&&n.O_.length<10}function fv(n,e){n.O_.push(e);const t=gn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Yd(n){return jn(n)&&!gn(n).n_()&&n.O_.length>0}function Zd(n){gn(n).start()}async function pv(n){gn(n).p_()}async function mv(n){const e=gn(n);for(const t of n.O_)e.m_(t.mutations)}async function gv(n,e,t){const r=n.O_.shift(),s=Ha.from(r,e,t);await Jd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await io(n)}async function _v(n,e){e&&gn(n).V_&&await async function(r,s){if(function(a){return iy(a)&&a!==N.ABORTED}(s.code)){const i=r.O_.shift();gn(r).s_(),await Jd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await io(r)}}(n,e),Yd(n)&&Zd(n)}async function Tu(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=jn(t);t.L_.add(3),await Is(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await so(t)}async function yv(n,e){const t=K(n);e?(t.L_.delete(2),await so(t)):e||(t.L_.add(2),await Is(t),t.q_.set("Unknown"))}function Ar(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new rv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:cv.bind(null,n),Ro:lv.bind(null,n),mo:uv.bind(null,n),d_:hv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),tc(n)?ec(n):n.q_.set("Unknown")):(await n.K_.stop(),Xd(n))})),n.K_}function gn(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new sv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:pv.bind(null,n),mo:_v.bind(null,n),f_:mv.bind(null,n),g_:gv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await io(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class nc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new nc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rc(n,e){if($t("AsyncQueue",`${e}: ${n}`),vs(n))return new F(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Iu{constructor(){this.W_=new ye(j.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):W():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class vr{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new vr(e,t,lr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ji(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class wv{constructor(){this.queries=bu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=bu(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new F(N.ABORTED,"Firestore shutting down"))}}function bu(){return new br(n=>Td(n),Ji)}async function sc(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new vv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=rc(a,`Initialization of query '${ir(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&oc(t)}async function ic(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ev(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&oc(t)}function Tv(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function oc(n){n.Y_.forEach(e=>{e.next()})}var ya,Au;(Au=ya||(ya={})).ea="default",Au.Cache="cache";class ac{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ya.Cache}}/**
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
 */class ef{constructor(e){this.key=e}}class tf{constructor(e){this.key=e}}class Iv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Id(e),this.Ra=new lr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Iu,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,_)=>{const m=s.get(f),T=Yi(this.query,_)?_:null,k=!!m&&this.mutatedKeys.has(m.key),D=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let S=!1;m&&T?m.data.isEqual(T.data)?k!==D&&(r.track({type:3,doc:T}),S=!0):this.ga(m,T)||(r.track({type:2,doc:T}),S=!0,(l&&this.Aa(T,l)>0||h&&this.Aa(T,h)<0)&&(c=!0)):!m&&T?(r.track({type:0,doc:T}),S=!0):m&&!T&&(r.track({type:1,doc:m}),S=!0,(l||h)&&(c=!0)),S&&(T?(a=a.add(T),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,_)=>function(T,k){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return D(T)-D(k)}(f.type,_.type)||this.Aa(f.doc,_.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,a.length!==0||h?{snapshot:new vr(this.query,e.Ra,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Iu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new tf(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ef(r))}),t}ba(e){this.Ta=e.Ts,this.da=ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return vr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class bv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Av{constructor(e){this.key=e,this.va=!1}}class Sv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new br(c=>Td(c),Ji),this.Ma=new Map,this.xa=new Set,this.Oa=new ye(j.comparator),this.Na=new Map,this.La=new Qa,this.Ba={},this.ka=new Map,this.qa=yr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Rv(n,e,t=!0){const r=cf(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await nf(r,e,t,!0),s}async function kv(n,e){const t=cf(n);await nf(t,e,!0,!1)}async function nf(n,e,t,r){const s=await Xy(n.localStore,Et(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Pv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Kd(n.remoteStore,s),c}async function Pv(n,e,t,r,s){n.Ka=(_,m,T)=>async function(D,S,M,O){let $=S.view.ma(M);$.ns&&($=await vu(D.localStore,S.query,!1).then(({documents:I})=>S.view.ma(I,$)));const H=O&&O.targetChanges.get(S.targetId),X=O&&O.targetMismatches.get(S.targetId)!=null,Z=S.view.applyChanges($,D.isPrimaryClient,H,X);return Ru(D,S.targetId,Z.wa),Z.snapshot}(n,_,m,T);const i=await vu(n.localStore,e,!0),a=new Iv(e,i.Ts),c=a.ma(i.documents),l=Ts.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Ru(n,t,h.wa);const f=new bv(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Cv(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Ji(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _a(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ya(r.remoteStore,s.targetId),va(r,s.targetId)}).catch(ys)):(va(r,s.targetId),await _a(r.localStore,s.targetId,!0))}async function Dv(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ya(t.remoteStore,r.targetId))}async function Nv(n,e,t){const r=Uv(n);try{const s=await function(a,c){const l=K(a),h=Se.now(),f=c.reduce((T,k)=>T.add(k.key),ne());let _,m;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let k=Bt(),D=ne();return l.cs.getEntries(T,f).next(S=>{k=S,k.forEach((M,O)=>{O.isValidDocument()||(D=D.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,k)).next(S=>{_=S;const M=[];for(const O of c){const $=ey(O,_.get(O.key).overlayedDocument);$!=null&&M.push(new _n(O.key,$,pd($.value.mapValue),Je.exists(!0)))}return l.mutationQueue.addMutationBatch(T,h,M,c)}).next(S=>{m=S;const M=S.applyToLocalDocumentSet(_,D);return l.documentOverlayCache.saveOverlays(T,S.batchId,M)})}).then(()=>({batchId:m.batchId,changes:Ad(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Ba[a.currentUser.toKey()];h||(h=new ye(oe)),h=h.insert(c,l),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await bs(r,s.changes),await io(r.remoteStore)}catch(s){const i=rc(s,"Failed to persist write");t.reject(i)}}async function rf(n,e){const t=K(n);try{const r=await Gy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?le(a.va):s.removedDocuments.size>0&&(le(a.va),a.va=!1))}),await bs(t,r,e)}catch(r){await ys(r)}}function Su(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=K(a);l.onlineState=c;let h=!1;l.queries.forEach((f,_)=>{for(const m of _.j_)m.Z_(c)&&(h=!0)}),h&&oc(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Mv(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ye(j.comparator);a=a.insert(i,qe.newNoDocument(i,G.min()));const c=ne().add(i),l=new no(G.min(),new Map,new ye(oe),a,c);await rf(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),cc(r)}else await _a(r.localStore,e,!1).then(()=>va(r,e,t)).catch(ys)}async function Vv(n,e){const t=K(n),r=e.batch.batchId;try{const s=await Hy(t.localStore,e);of(t,r,null),sf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bs(t,s)}catch(s){await ys(s)}}async function Ov(n,e,t){const r=K(n);try{const s=await function(a,c){const l=K(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(_=>(le(_!==null),f=_.keys(),l.mutationQueue.removeMutationBatch(h,_))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);of(r,e,t),sf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bs(r,s)}catch(s){await ys(s)}}function sf(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function of(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function va(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||af(n,r)})}function af(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ya(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),cc(n))}function Ru(n,e,t){for(const r of t)r instanceof ef?(n.La.addReference(r.key,e),Lv(n,r)):r instanceof tf?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||af(n,r.key)):W()}function Lv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),cc(n))}function cc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new j(me.fromString(e)),r=n.qa.next();n.Na.set(r,new Av(t)),n.Oa=n.Oa.insert(t,r),Kd(n.remoteStore,new an(Et(Xi(t.path)),r,"TargetPurposeLimboResolution",Ua.oe))}}async function bs(n,e,t){const r=K(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const _=h?!h.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,_?"current":"not-current")}if(h){s.push(h);const _=Ja.Wi(l.targetId,h);i.push(_)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>V.forEach(h,m=>V.forEach(m.$i,T=>f.persistence.referenceDelegate.addReference(_,m.targetId,T)).next(()=>V.forEach(m.Ui,T=>f.persistence.referenceDelegate.removeReference(_,m.targetId,T)))))}catch(_){if(!vs(_))throw _;B("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const m=_.targetId;if(!_.fromCache){const T=f.os.get(m),k=T.snapshotVersion,D=T.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(m,D)}}}(r.localStore,i))}async function xv(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await zd(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new F(N.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bs(t,r.hs)}}function Fv(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return ne().add(r.key);{let s=ne();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function cf(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mv.bind(null,e),e.Ca.d_=Ev.bind(null,e.eventManager),e.Ca.$a=Tv.bind(null,e.eventManager),e}function Uv(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ov.bind(null,e),e}class Oi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ro(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Wy(this.persistence,new qy,e.initialUser,this.serializer)}Ga(e){return new $y(Xa.Zr,this.serializer)}Wa(e){return new Yy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oi.provider={build:()=>new Oi};class wa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xv.bind(null,this.syncEngine),await yv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wv}()}createDatastore(e){const t=ro(e.databaseInfo.databaseId),r=function(i){return new nv(i)}(e.databaseInfo);return function(i,a,c,l){return new iv(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new av(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Su(this.syncEngine,t,0),function(){return Eu.D()?new Eu:new Zy}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,f){const _=new Sv(s,i,a,c,l,h);return f&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);B("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Is(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}wa.provider={build:()=>new wa};/**
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
 */class lc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class $v{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=je.UNAUTHENTICATED,this.clientId=hd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=rc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wo(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ku(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Bv(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Tu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Tu(e.remoteStore,s)),n._onlineComponents=e}async function Bv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;pr("Error using user provided cache. Falling back to memory cache: "+t),await Wo(n,new Oi)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Wo(n,new Oi);return n._offlineComponents}async function lf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await ku(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await ku(n,new wa))),n._onlineComponents}function jv(n){return lf(n).then(e=>e.syncEngine)}async function Li(n){const e=await lf(n),t=e.eventManager;return t.onListen=Rv.bind(null,e.syncEngine),t.onUnlisten=Cv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Dv.bind(null,e.syncEngine),t}function qv(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new lc({next:m=>{f.Za(),a.enqueueAndForget(()=>ic(i,_));const T=m.docs.has(c);!T&&m.fromCache?h.reject(new F(N.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&l&&l.source==="server"?h.reject(new F(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new ac(Xi(c.path),f,{includeMetadataChanges:!0,_a:!0});return sc(i,_)}(await Li(n),n.asyncQueue,e,t,r)),r.promise}function zv(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new lc({next:m=>{f.Za(),a.enqueueAndForget(()=>ic(i,_)),m.fromCache&&l.source==="server"?h.reject(new F(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new ac(c,f,{includeMetadataChanges:!0,_a:!0});return sc(i,_)}(await Li(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function uf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pu=new Map;/**
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
 */function hf(n,e,t){if(!t)throw new F(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Wv(n,e,t,r){if(e===!0&&r===!0)throw new F(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Cu(n){if(!j.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Du(n){if(j.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function it(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oo(n);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Nu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ao{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new l_;switch(r.type){case"firstParty":return new f_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Pu.get(t);r&&(B("ComponentProvider","Removing Datastore"),Pu.delete(t),r.terminate())}(this),Promise.resolve()}}function Hv(n,e,t,r={}){var s;const i=(n=it(n,ao))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=je.MOCK_USER;else{c=xm(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new je(h)}n._authCredentials=new u_(new ud(c,l))}}/**
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
 */class yn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yn(this.firestore,e,this._query)}}class Ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class hn extends yn{constructor(e,t,r){super(e,t,Xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new j(e))}withConverter(e){return new hn(this.firestore,e,this._path)}}function Pe(n,e,...t){if(n=Re(n),hf("collection","path",e),n instanceof ao){const r=me.fromString(e,...t);return Du(r),new hn(n,null,r)}{if(!(n instanceof Ke||n instanceof hn))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return Du(r),new hn(n.firestore,null,r)}}function Ye(n,e,...t){if(n=Re(n),arguments.length===1&&(e=hd.newId()),hf("doc","path",e),n instanceof ao){const r=me.fromString(e,...t);return Cu(r),new Ke(n,null,new j(r))}{if(!(n instanceof Ke||n instanceof hn))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return Cu(r),new Ke(n.firestore,n instanceof hn?n.converter:null,new j(r))}}/**
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
 */class Mu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hd(this,"async_queue_retry"),this.Vu=()=>{const r=zo();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=zo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=zo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ft;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!vs(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=nc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Vu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class jt extends ao{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Mu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mu(e),this._firestoreClient=void 0,await e}}}function Gv(n,e){const t=typeof n=="object"?n:td(),r=typeof n=="string"?n:"(default)",s=xa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Om("firestore");i&&Hv(s,...i)}return s}function As(n){if(n._terminated)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kv(n),n._firestoreClient}function Kv(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,f){return new S_(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,uf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $v(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(xe.fromBase64String(e))}catch(t){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wr(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class uc{constructor(e){this._methodName=e}}/**
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
 */class hc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */class dc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Qv=/^__.*__$/;class Xv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Es(e,this.data,t,this.fieldTransforms)}}class df{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new _n(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ff(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class fc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new fc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ff(this.Cu)&&Qv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Jv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ro(e)}Qu(e,t,r,s=!1){return new fc({Cu:e,methodName:t,qu:r,path:Oe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function co(n){const e=n._freezeSettings(),t=ro(n._databaseId);return new Jv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pf(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);pc("Data must be an object, but it was:",a,r);const c=_f(r,a);let l,h;if(i.merge)l=new st(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const _ of i.mergeFields){const m=Ea(e,_,t);if(!a.contains(m))throw new F(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);vf(f,m)||f.push(m)}l=new st(f),h=a.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,h=a.fieldTransforms;return new Xv(new Xe(c),l,h)}class lo extends uc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lo}}function mf(n,e,t,r){const s=n.Qu(1,e,t);pc("Data must be an object, but it was:",s,r);const i=[],a=Xe.empty();Bn(r,(l,h)=>{const f=mc(e,l,t);h=Re(h);const _=s.Nu(f);if(h instanceof lo)i.push(f);else{const m=Ss(h,_);m!=null&&(i.push(f),a.set(f,m))}});const c=new st(i);return new df(a,c,s.fieldTransforms)}function gf(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[Ea(e,r,t)],l=[s];if(i.length%2!=0)throw new F(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Ea(e,i[m])),l.push(i[m+1]);const h=[],f=Xe.empty();for(let m=c.length-1;m>=0;--m)if(!vf(h,c[m])){const T=c[m];let k=l[m];k=Re(k);const D=a.Nu(T);if(k instanceof lo)h.push(T);else{const S=Ss(k,D);S!=null&&(h.push(T),f.set(T,S))}}const _=new st(h);return new df(f,_,a.fieldTransforms)}function Yv(n,e,t,r=!1){return Ss(t,n.Qu(r?4:3,e))}function Ss(n,e){if(yf(n=Re(n)))return pc("Unsupported field value:",e,n),_f(n,e);if(n instanceof uc)return function(r,s){if(!ff(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Ss(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return K_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Se.fromDate(r);return{timestampValue:Mi(s.serializer,i)}}if(r instanceof Se){const i=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mi(s.serializer,i)}}if(r instanceof hc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wr)return{bytesValue:xd(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ka(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dc)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Wa(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${oo(r)}`)}(n,e)}function _f(n,e){const t={};return dd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(n,(r,s)=>{const i=Ss(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function yf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof hc||n instanceof wr||n instanceof Ke||n instanceof uc||n instanceof dc)}function pc(n,e,t){if(!yf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=oo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ea(n,e,t){if((e=Re(e))instanceof Sr)return e._internalPath;if(typeof e=="string")return mc(n,e);throw xi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Zv=new RegExp("[~\\*/\\[\\]]");function mc(n,e,t){if(e.search(Zv)>=0)throw xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Sr(...e.split("."))._internalPath}catch{throw xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new F(N.INVALID_ARGUMENT,c+n+l)}function vf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class wf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class e0 extends wf{data(){return super.data()}}function gc(n,e){return typeof e=="string"?mc(n,e):e instanceof Sr?e._internalPath:e._delegate._internalPath}/**
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
 */function Ef(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _c{}class Tf extends _c{}function lt(n,e,...t){let r=[];e instanceof _c&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof yc).length,c=i.filter(l=>l instanceof uo).length;if(a>1||a>0&&c>0)throw new F(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class uo extends Tf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new uo(e,t,r)}_apply(e){const t=this._parse(e);return If(e._query,t),new yn(e.firestore,e.converter,da(e._query,t))}_parse(e){const t=co(e.firestore);return function(i,a,c,l,h,f,_){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Lu(_,f);const T=[];for(const k of _)T.push(Ou(l,i,k));m={arrayValue:{values:T}}}else m=Ou(l,i,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Lu(_,f),m=Yv(c,a,_,f==="in"||f==="not-in");return Ae.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ge(n,e,t){const r=e,s=gc("where",n);return uo._create(s,r,t)}class yc extends _c{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:pt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)If(a,l),a=da(a,l)}(e._query,t),new yn(e.firestore,e.converter,da(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vc extends Tf{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new vc(e,t,r)}_apply(e){return new yn(e.firestore,e.converter,Ci(e._query,this._limit,this._limitType))}}function ni(n){return vc._create("limit",n,"F")}function Ou(n,e,t){if(typeof(t=Re(t))=="string"){if(t==="")throw new F(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ed(e)&&t.indexOf("/")!==-1)throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!j.isDocumentKey(r))throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nu(n,new j(r))}if(t instanceof Ke)return nu(n,t._key);throw new F(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oo(t)}.`)}function Lu(n,e){if(!Array.isArray(n)||n.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function If(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class t0{convertValue(e,t="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>we(a.doubleValue));return new dc(i)}convertGeoPoint(e){return new hc(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ba(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const t=mn(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);le(qd(r));const s=new us(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||$t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function bf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Zr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Af extends wf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(gc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class pi extends Af{data(e={}){return super.data(e)}}class Sf{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Zr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new pi(this._firestore,this._userDataWriter,r.key,r,new Zr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Zr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Zr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:n0(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function n0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
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
 */function r0(n){n=it(n,Ke);const e=it(n.firestore,jt);return qv(As(e),n._key).then(t=>Rf(e,n,t))}class wc extends t0{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}function s0(n){n=it(n,yn);const e=it(n.firestore,jt),t=As(e),r=new wc(e);return Ef(n._query),zv(t,n._query).then(s=>new Sf(e,r,n,s))}function i0(n,e,t,...r){n=it(n,Ke);const s=it(n.firestore,jt),i=co(s);let a;return a=typeof(e=Re(e))=="string"||e instanceof Sr?gf(i,"updateDoc",n._key,e,t,r):mf(i,"updateDoc",n._key,e),ho(s,[a.toMutation(n._key,Je.exists(!0))])}function o0(n){return ho(it(n.firestore,jt),[new to(n._key,Je.none())])}function a0(n,e){const t=it(n.firestore,jt),r=Ye(n),s=bf(n.converter,e);return ho(t,[pf(co(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Je.exists(!1))]).then(()=>r)}function c0(n,...e){var t,r,s;n=Re(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Vu(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Vu(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(s=_.complete)===null||s===void 0?void 0:s.bind(_)}let l,h,f;if(n instanceof Ke)h=it(n.firestore,jt),f=Xi(n._key.path),l={next:_=>{e[a]&&e[a](Rf(h,n,_))},error:e[a+1],complete:e[a+2]};else{const _=it(n,yn);h=it(_.firestore,jt),f=_._query;const m=new wc(h);l={next:T=>{e[a]&&e[a](new Sf(h,m,_,T))},error:e[a+1],complete:e[a+2]},Ef(n._query)}return function(m,T,k,D){const S=new lc(D),M=new ac(T,S,k);return m.asyncQueue.enqueueAndForget(async()=>sc(await Li(m),M)),()=>{S.Za(),m.asyncQueue.enqueueAndForget(async()=>ic(await Li(m),M))}}(As(h),f,c,l)}function ho(n,e){return function(r,s){const i=new Ft;return r.asyncQueue.enqueueAndForget(async()=>Nv(await jv(r),s,i)),i.promise}(As(n),e)}function Rf(n,e,t){const r=t.docs.get(e._key),s=new wc(n);return new Af(n,s,e._key,r,new Zr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class l0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=co(e)}set(e,t,r){this._verifyNotCommitted();const s=Ho(e,this._firestore),i=bf(s.converter,t,r),a=pf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Je.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ho(e,this._firestore);let a;return a=typeof(t=Re(t))=="string"||t instanceof Sr?gf(this._dataReader,"WriteBatch.update",i._key,t,r,s):mf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Je.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ho(e,this._firestore);return this._mutations=this._mutations.concat(new to(t._key,Je.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ho(n,e){if((n=Re(n)).firestore!==e)throw new F(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function u0(n){return As(n=it(n,jt)),new l0(n,e=>ho(n,e))}(function(e,t=!0){(function(s){Ir=s})(Tr),fr(new Vn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new jt(new h_(r.getProvider("auth-internal")),new m_(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),un(Jl,"4.7.3",e),un(Jl,"4.7.3","esm2017")})();function Ec(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h0=kf,Pf=new gs("auth","Firebase",kf());/**
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
 */const Fi=new Oa("@firebase/auth");function d0(n,...e){Fi.logLevel<=re.WARN&&Fi.warn(`Auth (${Tr}): ${n}`,...e)}function mi(n,...e){Fi.logLevel<=re.ERROR&&Fi.error(`Auth (${Tr}): ${n}`,...e)}/**
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
 */function qt(n,...e){throw Tc(n,...e)}function It(n,...e){return Tc(n,...e)}function Cf(n,e,t){const r=Object.assign(Object.assign({},h0()),{[e]:t});return new gs("auth","Firebase",r).create(e,{appName:n.name})}function dn(n){return Cf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Pf.create(n,...e)}function z(n,e,...t){if(!n)throw Tc(e,...t)}function Ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mi(e),new Error(e)}function zt(n,e){n||Ot(e)}/**
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
 */function Ta(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function f0(){return xu()==="http:"||xu()==="https:"}function xu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function p0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f0()||Bm()||"connection"in navigator)?navigator.onLine:!0}function m0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,zt(t>e,"Short delay should be less than long delay!"),this.isMobile=Fm()||jm()}get(){return p0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ic(n,e){zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Df{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const g0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _0=new Rs(3e4,6e4);function fo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rr(n,e,t,r,s={}){return Nf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=_s(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return $m()||(h.referrerPolicy="no-referrer"),Df.fetch()(Vf(n,n.config.apiHost,t,c),h)})}async function Nf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},g0),e);try{const s=new y0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ri(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ri(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ri(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ri(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cf(n,f,h);qt(n,f)}}catch(s){if(s instanceof Ht)throw s;qt(n,"network-request-failed",{message:String(s)})}}async function Mf(n,e,t,r,s={}){const i=await Rr(n,e,t,r,s);return"mfaPendingCredential"in i&&qt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Vf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ic(n.config,s):`${n.config.apiScheme}://${s}`}class y0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),_0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ri(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=It(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function v0(n,e){return Rr(n,"POST","/v1/accounts:delete",e)}async function Of(n,e){return Rr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function is(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w0(n,e=!1){const t=Re(n),r=await t.getIdToken(e),s=bc(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:is(Go(s.auth_time)),issuedAtTime:is(Go(s.iat)),expirationTime:is(Go(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Go(n){return Number(n)*1e3}function bc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return mi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kh(t);return s?JSON.parse(s):(mi("Failed to decode base64 JWT payload"),null)}catch(s){return mi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Fu(n){const e=bc(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ps(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ht&&E0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function E0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class T0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ia{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ui(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ps(n,Of(t,{idToken:r}));z(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Lf(i.providerUserInfo):[],c=b0(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,f=l?h:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ia(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function I0(n){const e=Re(n);await Ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function b0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lf(n){return n.map(e=>{var{providerId:t}=e,r=Ec(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function A0(n,e){const t=await Nf(n,{},async()=>{const r=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Vf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Df.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function S0(n,e){return Rr(n,"POST","/v2/accounts:revokeToken",fo(n,e))}/**
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
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Fu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await A0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new ur;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function en(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ia(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ps(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return w0(this,e)}reload(){return I0(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ui(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await ps(this,v0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,f;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(h=t.createdAt)!==null&&h!==void 0?h:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:H,isAnonymous:X,providerData:Z,stsTokenManager:I}=t;z($&&I,e,"internal-error");const y=ur.fromJSON(this.name,I);z(typeof $=="string",e,"internal-error"),en(_,e.name),en(m,e.name),z(typeof H=="boolean",e,"internal-error"),z(typeof X=="boolean",e,"internal-error"),en(T,e.name),en(k,e.name),en(D,e.name),en(S,e.name),en(M,e.name),en(O,e.name);const E=new Lt({uid:$,auth:e,email:m,emailVerified:H,displayName:_,isAnonymous:X,photoURL:k,phoneNumber:T,tenantId:D,stsTokenManager:y,createdAt:M,lastLoginAt:O});return Z&&Array.isArray(Z)&&(E.providerData=Z.map(b=>Object.assign({},b))),S&&(E._redirectEventId=S),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new ur;s.updateFromServerResponse(t);const i=new Lt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ui(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new ur;c.updateFromIdToken(r);const l=new Lt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ia(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
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
 */const Uu=new Map;function xt(n){zt(n instanceof Function,"Expected a class definition");let e=Uu.get(n);return e?(zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uu.set(n,e),e)}/**
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
 */class xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xf.type="NONE";const $u=xf;/**
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
 */function gi(n,e,t){return`firebase:${n}:${e}:${t}`}class hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gi(this.userKey,s.apiKey,i),this.fullPersistenceKey=gi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new hr(xt($u),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||xt($u);const a=gi(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){const _=Lt._fromJSON(e,f);h!==i&&(c=_),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new hr(i,e,r))}}/**
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
 */function Bu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ff(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qf(e))return"Blackberry";if(zf(e))return"Webos";if(Uf(e))return"Safari";if((e.includes("chrome/")||$f(e))&&!e.includes("edge/"))return"Chrome";if(jf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ff(n=ze()){return/firefox\//i.test(n)}function Uf(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $f(n=ze()){return/crios\//i.test(n)}function Bf(n=ze()){return/iemobile/i.test(n)}function jf(n=ze()){return/android/i.test(n)}function qf(n=ze()){return/blackberry/i.test(n)}function zf(n=ze()){return/webos/i.test(n)}function Ac(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function R0(n=ze()){var e;return Ac(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k0(){return qm()&&document.documentMode===10}function Wf(n=ze()){return Ac(n)||jf(n)||zf(n)||qf(n)||/windows phone/i.test(n)||Bf(n)}/**
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
 */function Hf(n,e=[]){let t;switch(n){case"Browser":t=Bu(ze());break;case"Worker":t=`${Bu(ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tr}/${r}`}/**
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
 */class P0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function C0(n,e={}){return Rr(n,"GET","/v2/passwordPolicy",fo(n,e))}/**
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
 */const D0=6;class N0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:D0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class M0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ju(this),this.idTokenSubscription=new ju(this),this.beforeStateQueue=new P0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Of(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ui(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(dn(this));const t=e?Re(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await C0(this),t=new N0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await S0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&d0(`Error while retrieving App Check token: ${t.error}`),t?.token}}function po(n){return Re(n)}class ju{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jm(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V0(n){Sc=n}function O0(n){return Sc.loadJS(n)}function L0(){return Sc.gapiScript}function x0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function F0(n,e){const t=xa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ai(i,e??{}))return s;qt(s,"already-initialized")}return t.initialize({options:e})}function U0(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(xt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function $0(n,e,t){const r=po(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Gf(e),{host:a,port:c}=B0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),j0()}function Gf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function B0(n){const e=Gf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:qu(a)}}}function qu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function j0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Kf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,t){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}/**
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
 */async function dr(n,e){return Mf(n,"POST","/v1/accounts:signInWithIdp",fo(n,e))}/**
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
 */const q0="http://localhost";class Fn extends Kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ec(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Fn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return dr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,dr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dr(e,t)}buildRequest(){const e={requestUri:q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_s(t)}return e}}/**
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
 */class Qf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends Qf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nn extends ks{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rn.credential(t,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class sn extends ks{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class on extends ks{constructor(){super("twitter.com")}static credential(e,t){return Fn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return on.credential(t,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
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
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Lt._fromIdTokenResponse(e,r,s),a=zu(r);return new Un({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=zu(r);return new Un({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function zu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class $i extends Ht{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$i.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new $i(e,t,r,s)}}function Xf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$i._fromErrorAndOperation(n,i,e,r):i})}async function z0(n,e,t=!1){const r=await ps(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Un._forOperation(n,"link",r)}/**
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
 */async function W0(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(dn(r));const s="reauthenticate";try{const i=await ps(n,Xf(r,s,e,n),t);z(i.idToken,r,"internal-error");const a=bc(i.idToken);z(a,r,"internal-error");const{sub:c}=a;return z(n.uid===c,r,"user-mismatch"),Un._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
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
 */async function H0(n,e,t=!1){if(Vt(n.app))return Promise.reject(dn(n));const r="signIn",s=await Xf(n,r,e),i=await Un._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */async function G0(n,e){return Mf(n,"POST","/v1/accounts:signInWithCustomToken",fo(n,e))}/**
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
 */async function K0(n,e){if(Vt(n.app))return Promise.reject(dn(n));const t=po(n),r=await G0(t,{token:e,returnSecureToken:!0}),s=await Un._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function Q0(n,e,t,r){return Re(n).onIdTokenChanged(e,t,r)}function X0(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function J0(n){return Re(n).signOut()}const Bi="__sak";/**
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
 */class Jf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bi,"1"),this.storage.removeItem(Bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Y0=1e3,Z0=10;class Yf extends Jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);k0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yf.type="LOCAL";const ew=Yf;/**
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
 */class Zf extends Jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zf.type="SESSION";const ep=Zf;/**
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
 */function tw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class mo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new mo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await tw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mo.receivers=[];/**
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
 */function Rc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class nw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Rc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const m=_;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function bt(){return window}function rw(n){bt().location.href=n}/**
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
 */function tp(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function sw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ow(){return tp()?self:null}/**
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
 */const np="firebaseLocalStorageDb",aw=1,ji="firebaseLocalStorage",rp="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function go(n,e){return n.transaction([ji],e?"readwrite":"readonly").objectStore(ji)}function cw(){const n=indexedDB.deleteDatabase(np);return new Ps(n).toPromise()}function ba(){const n=indexedDB.open(np,aw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ji,{keyPath:rp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ji)?e(r):(r.close(),await cw(),e(await ba()))})})}async function Wu(n,e,t){const r=go(n,!0).put({[rp]:e,value:t});return new Ps(r).toPromise()}async function lw(n,e){const t=go(n,!1).get(e),r=await new Ps(t).toPromise();return r===void 0?null:r.value}function Hu(n,e){const t=go(n,!0).delete(e);return new Ps(t).toPromise()}const uw=800,hw=3;class sp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ba(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>hw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mo._getInstance(ow()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sw(),!this.activeServiceWorker)return;this.sender=new nw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ba();return await Wu(e,Bi,"1"),await Hu(e,Bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>lw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=go(s,!1).getAll();return new Ps(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sp.type="LOCAL";const dw=sp;new Rs(3e4,6e4);/**
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
 */function fw(n,e){return e?xt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class kc extends Kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pw(n){return H0(n.auth,new kc(n),n.bypassAuthState)}function mw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),W0(t,new kc(n),n.bypassAuthState)}async function gw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),z0(t,new kc(n),n.bypassAuthState)}/**
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
 */class ip{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pw;case"linkViaPopup":case"linkViaRedirect":return gw;case"reauthViaPopup":case"reauthViaRedirect":return mw;default:qt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _w=new Rs(2e3,1e4);class cr extends ip{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_w.get())};e()}}cr.currentPopupAction=null;/**
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
 */const yw="pendingRedirect",_i=new Map;class vw extends ip{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_i.get(this.auth._key());if(!e){try{const r=await ww(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_i.set(this.auth._key(),e)}return this.bypassAuthState||_i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ww(n,e){const t=Iw(e),r=Tw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Ew(n,e){_i.set(n._key(),e)}function Tw(n){return xt(n._redirectPersistence)}function Iw(n){return gi(yw,n.config.apiKey,n.name)}async function bw(n,e,t=!1){if(Vt(n.app))return Promise.reject(dn(n));const r=po(n),s=fw(r,e),a=await new vw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Aw=10*60*1e3;class Sw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!op(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(It(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Aw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gu(e))}saveEventToCache(e){this.cachedEventUids.add(Gu(e)),this.lastProcessedEventTime=Date.now()}}function Gu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function op({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Rw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return op(n);default:return!1}}/**
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
 */async function kw(n,e={}){return Rr(n,"GET","/v1/projects",e)}/**
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
 */const Pw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cw=/^https?/;async function Dw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await kw(n);for(const t of e)try{if(Nw(t))return}catch{}qt(n,"unauthorized-domain")}function Nw(n){const e=Ta(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Cw.test(t))return!1;if(Pw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Mw=new Rs(3e4,6e4);function Ku(){const n=bt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Vw(n){return new Promise((e,t)=>{var r,s,i;function a(){Ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ku(),t(It(n,"network-request-failed"))},timeout:Mw.get()})}if(!((s=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=bt().gapi)===null||i===void 0)&&i.load)a();else{const c=x0("iframefcb");return bt()[c]=()=>{gapi.load?a():t(It(n,"network-request-failed"))},O0(`${L0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw yi=null,e})}let yi=null;function Ow(n){return yi=yi||Vw(n),yi}/**
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
 */const Lw=new Rs(5e3,15e3),xw="__/auth/iframe",Fw="emulator/auth/iframe",Uw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$w=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bw(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ic(e,Fw):`https://${n.config.authDomain}/${xw}`,r={apiKey:e.apiKey,appName:n.name,v:Tr},s=$w.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${_s(r).slice(1)}`}async function jw(n){const e=await Ow(n),t=bt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:Bw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=It(n,"network-request-failed"),c=bt().setTimeout(()=>{i(a)},Lw.get());function l(){bt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const qw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zw=500,Ww=600,Hw="_blank",Gw="http://localhost";class Qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kw(n,e,t,r=zw,s=Ww){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},qw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ze().toLowerCase();t&&(c=$f(h)?Hw:t),Ff(h)&&(e=e||Gw,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[T,k])=>`${m}${T}=${k},`,"");if(R0(h)&&c!=="_self")return Qw(e||"",c),new Qu(null);const _=window.open(e||"",c,f);z(_,n,"popup-blocked");try{_.focus()}catch{}return new Qu(_)}function Qw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Xw="__/auth/handler",Jw="emulator/auth/handler",Yw=encodeURIComponent("fac");async function Xu(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tr,eventId:s};if(e instanceof Qf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Xm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof ks){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${Yw}=${encodeURIComponent(l)}`:"";return`${Zw(n)}?${_s(c).slice(1)}${h}`}function Zw({config:n}){return n.emulator?Ic(n,Jw):`https://${n.authDomain}/${Xw}`}/**
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
 */const Ko="webStorageSupport";class eE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ep,this._completeRedirectFn=bw,this._overrideRedirectResult=Ew}async _openPopup(e,t,r,s){var i;zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Xu(e,t,r,Ta(),s);return Kw(e,a,Rc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Xu(e,t,r,Ta(),s);return rw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(zt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jw(e),r=new Sw(e);return t.register("authEvent",s=>(z(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ko,{type:Ko},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[Ko];a!==void 0&&t(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wf()||Uf()||Ac()}}const tE=eE;var Ju="@firebase/auth",Yu="1.7.9";/**
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
 */class nE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sE(n){fr(new Vn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hf(n)},h=new M0(r,s,i,l);return U0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fr(new Vn("auth-internal",e=>{const t=po(e.getProvider("auth").getImmediate());return(r=>new nE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Ju,Yu,rE(n)),un(Ju,Yu,"esm2017")}/**
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
 */const iE=5*60,oE=Jh("authIdTokenMaxAge")||iE;let Zu=null;const aE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>oE)return;const s=t?.token;Zu!==s&&(Zu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cE(n=td()){const e=xa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=F0(n,{popupRedirectResolver:tE,persistence:[dw,ew,ep]}),r=Jh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=aE(i.toString());X0(t,a,()=>a(t.currentUser)),Q0(t,c=>a(c))}}const s=Qh("auth");return s&&$0(t,`http://${s}`),t}function lE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}V0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=It("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",lE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sE("Browser");const uE={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},eh="2008948704-db2goT00",ap=ed(uE),ae=Gv(ap),Dn=cE(ap);let cp=()=>{};const hE=new Promise(n=>{cp=n});let th=!1;const dE=setTimeout(()=>Pc(),1e4);function Pc(){th||(th=!0,clearTimeout(dE),cp())}const qn=()=>hE,fE=n=>"m_"+n;async function Cc(n,e){try{n&&(!Dn.currentUser||Dn.currentUser.uid!==fE(e))&&await K0(Dn,n)}catch(t){console.warn("firebase sign-in:",t&&t.message)}Pc()}const ut=async(...n)=>(await qn(),s0(...n)),pE=async(...n)=>(await qn(),r0(...n)),zn=async(...n)=>(await qn(),i0(...n)),Dc=async(...n)=>(await qn(),o0(...n)),lp=async(...n)=>(await qn(),a0(...n));function nh(n,e,t){let r=null,s=!1;return qn().then(()=>{s||(r=c0(n,e,t))}),()=>{s=!0,r&&r()}}function up(n){const e=u0(n),t=e.commit.bind(e);return e.commit=async()=>(await qn(),t()),e}function hp(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function mE(){return typeof liff<"u"?Promise.resolve():new Promise((n,e)=>{let t=0;const r=setInterval(()=>{typeof liff<"u"?(clearInterval(r),n()):++t>100&&(clearInterval(r),e(new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้")))},100)})}let dp=()=>{},_o=!1,fp=()=>{};const gE="เซสชัน LINE หมดอายุ กดเข้าสู่ระบบใหม่ที่แถบด้านบน";function _E(n){fp=n,_o&&n()}function yE(){try{const n=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}liff.login({redirectUri:n})}catch{}}function qi(){_o=!0,fp();const n=new Error(gE);return n.expired=!0,n}const vE=new Promise(n=>{dp=n});let ms="pending";const Aa="dm:v2:webtoken",wE=20*24*60*60*1e3;function yo(){try{const n=JSON.parse(localStorage.getItem(Aa)||"null");return n&&typeof n.token=="string"&&n.token?n:null}catch{return null}}function pp(n){try{n?localStorage.setItem(Aa,JSON.stringify({token:n,t:Date.now()})):localStorage.removeItem(Aa)}catch{}}async function EE(){const n=yo();if(!(n&&Date.now()-n.t<wE))try{const e=liff.getIDToken();if(!e)return;const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e,kind:"web"})}),r=await t.json().catch(()=>({}));t.ok&&r.success&&r.token&&pp(r.token)}catch{}}const TE="U0d739eea39c312e11c487e22861920d1",IE=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();function Sa(n,e,t){return{name:IE(e.name),memberId:n,pictureUrl:/^https:\/\//i.test(e.pictureUrl||"")?e.pictureUrl:"",isAdmin:e.role==="admin"||t===TE,realName:e.realName||"",promptpay:e.promptpay||""}}const bE=["code","state","liffClientId","liffRedirectUri","error","error_description"],AE=()=>{const n=new URLSearchParams(location.search);return n.has("code")||n.has("liffClientId")};function rh(){try{const n=new URL(location.href);let e=!1;for(const r of bE)n.searchParams.has(r)&&(n.searchParams.delete(r),e=!0);let t=n.hash;t==="#_=_"&&(t="",e=!0),e&&history.replaceState(null,"",n.pathname+(n.search||"")+t)}catch{}}let vi="";function sh(){return vi}async function SE(){await mE();const n=AE();try{await liff.init({liffId:eh})}catch(t){if(vi=`เริ่มระบบ LINE ไม่สำเร็จ: ${t&&t.message||t}`,n)rh(),await liff.init({liffId:eh});else throw t}if(rh(),!liff.isLoggedIn()){ms="out",vi=vi||(n?"ล็อกอินกลับมาแล้วแต่ LINE ไม่ยืนยันบัตร (ลองกดเข้าสู่ระบบใหม่อีกครั้ง)":"บัตรล็อกอิน LINE ในเบราว์เซอร์นี้หมดอายุหรือยังไม่มี");const t=gp();if(t&&yo()&&!n){try{const s=await pE(Ye(ae,"members",String(t.memberId)));if(s.exists())return Sa(s.id,s.data(),s.data().lineUserId||"")}catch{}return t}if(t&&!n)return _o=!0,{needLogin:!0};const r=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}return liff.login({redirectUri:r}),null}ms="in",dp(),EE();try{const t=sessionStorage.getItem("dept_auth_hash");t&&(sessionStorage.removeItem("dept_auth_hash"),(!location.hash||location.hash==="#"||location.hash==="#_=_")&&(location.hash=t))}catch{}const e=await mp({action:"login"});if(e.member)return await Cc(e.firebaseToken,e.member.id),Sa(e.member.id,e.member,e.member.lineUserId);if(e.needLink)return{needLink:!0,profile:e.profile||{},candidates:e.candidates||[],suggest:e.suggest||""};throw new Error(e.message||"เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง")}async function mp(n){const e=liff.getIDToken();if(!e)throw new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองรีเฟรชหน้านี้");const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,idToken:e})}),r=await t.json().catch(()=>({}));return!t.ok&&!r.message&&(r.message=`เข้าสู่ระบบไม่สำเร็จ (${t.status})`),r}async function oI(n,e){const t=await mp({action:"link",memberId:e});if(!t.member)throw new Error(t.message||"ผูกบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง");return kr(),await Cc(t.firebaseToken,t.member.id),Sa(t.member.id,t.member,t.member.lineUserId)}const Nc=24*60*60*1e3,vo=10*60*1e3,Wt="dm:v2:";function mt(n,e){try{const t=localStorage.getItem(Wt+n);if(!t)return null;const{t:r,v:s}=JSON.parse(t);return Date.now()-r<e?s:null}catch{return null}}function gt(n,e){try{localStorage.setItem(Wt+n,JSON.stringify({t:Date.now(),v:e}))}catch{}}const RE=30*24*60*60*1e3,kE=7*24*60*60*1e3;function gp(){const n=mt("user",RE);return n&&n.name&&n.memberId?n:null}function PE(n){n&&n.name&&n.memberId&&gt("user",n)}function CE(n,e){const t=mt(`snap:${n}:${e}`,kE);return t&&Array.isArray(t.transactions)&&Array.isArray(t.settlements)&&Array.isArray(t.wallet)?t:null}function DE(n,e,t){gt(`snap:${n}:${e}`,{transactions:t.transactions,settlements:t.settlements,wallet:t.wallet})}function NE(){return mt("members",1/0)}function Ra(){try{Object.keys(localStorage).filter(n=>n.startsWith(Wt)).forEach(n=>localStorage.removeItem(n))}catch{}}const _p=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();async function ME(){const n=mt("members",vo);if(n)return n;const e=await ut(Pe(ae,"members")),t=[...new Set(e.docs.map(r=>_p(r.data().name)).filter(Boolean))];return gt("members",t),t}async function VE(n){const e=mt("m:"+n,Nc);if(e)return e;const[t,r]=await Promise.all([ut(lt(Pe(ae,"transactions"),Ge("date",">=",`${n}-01`),Ge("date","<=",`${n}-31`))),ut(lt(Pe(ae,"settlements"),Ge("month","==",n)))]),s={transactions:t.docs.map(i=>({id:i.id,...i.data()})),settlements:r.docs.map(i=>({id:i.id,...i.data()}))};return gt("m:"+n,s),s}function OE(n,e){const t={transactions:null,settlements:null},r=()=>{t.transactions&&t.settlements&&e({...t})},s=a=>e({error:a}),i=[nh(lt(Pe(ae,"transactions"),Ge("date",">=",`${n}-01`),Ge("date","<=",`${n}-31`)),a=>{t.transactions=a.docs.map(c=>({id:c.id,...c.data()})),r()},s),nh(lt(Pe(ae,"settlements"),Ge("month","==",n)),a=>{t.settlements=a.docs.map(c=>({id:c.id,...c.data()})),r()},s)];return()=>i.forEach(a=>a())}async function Te(n,e,{line:t=!1}={}){const r=t?null:yo();if(r){const c=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.token},body:JSON.stringify(e)});let l={};try{l=await c.json()}catch{}if(c.status!==401){if(!c.ok)throw new Error(l.message||`เกิดข้อผิดพลาด (${c.status})`);return l}pp("")}if(_o||ms==="out")throw qi();await Promise.race([vE,new Promise((c,l)=>setTimeout(()=>l(new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองใหม่อีกครั้ง")),2e4))]);const s=liff.getIDToken(),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,idToken:s})});let a={};try{a=await i.json()}catch{}if(i.status===401)throw qi();if(!i.ok)throw new Error(a.message||`เกิดข้อผิดพลาด (${i.status})`);return a}async function LE(n,{current:e=!1}={}){if(!e){const s=mt("w:"+n,Nc);if(s)return s}const t=await Te("/api/shortcut-transaction",{action:"wallet-list",month:n}),r=Array.isArray(t.items)?t.items:[];return e||gt("w:"+n,r),r}async function xE(n,e){const t={},r=[];for(const c of n){if(c===e)continue;const l=mt("w:"+c,Nc);l?t[c]=l:r.push(c)}if(r.length===0)return t[e]=await LE(e,{current:!0}),t;const s=r.slice().sort()[0],i=await Te("/api/shortcut-transaction",{action:"wallet-list",since:s}),a=Array.isArray(i.items)?i.items:[];t[e]=a.filter(c=>String(c.date||"").startsWith(e));for(const c of r){const l=a.filter(h=>String(h.date||"").startsWith(c));t[c]=l,gt("w:"+c,l)}return t}async function aI(){const n=await Te("/api/device-token",{},{line:!0});if(!n.success||!n.token)throw new Error(n.message||"สร้างรหัสไม่สำเร็จ");return n}async function cI(){if(ms!=="in")throw qi();const n=await fetch("/api/device-token",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:liff.getIDToken()})});let e={};try{e=await n.json()}catch{}if(!n.ok||!e.success)throw new Error(e.message||"ยกเลิกรหัสไม่สำเร็จ");return e}async function lI(n,e){await Te("/api/shortcut-transaction",{action:"wallet-update",id:n,...e})}async function uI(n){let e=0;for(let t=0;t<n.length;t+=100){const r=await Te("/api/shortcut-transaction",{action:"wallet-update",items:n.slice(t,t+100)});e+=Number(r.updated)||0}return e}async function FE(){const n=await Te("/api/shortcut-transaction",{action:"wallet-template-list"});return Array.isArray(n.items)?n.items:[]}async function hI(n,e){await Te("/api/shortcut-transaction",{action:"wallet-template-update",id:n,...e}),Pr()}async function dI(n){await Te("/api/shortcut-transaction",{action:"wallet-template-stop",id:n}),Pr()}const yp=n=>n&&n.plan&&typeof n.plan=="object"?n.plan:{budget:{total:0,cats:{}},months:{},goals:[]};async function UE(){const n=mt("plan",vo);if(n)return n;const e=yp(await Te("/api/shortcut-transaction",{action:"plan-get"}));return gt("plan",e),e}const wo=async n=>{const e=yp(await Te("/api/shortcut-transaction",n));return gt("plan",e),e},$E=({scope:n,month:e,total:t,cats:r,clear:s=!1})=>wo({action:"plan-budget-set",scope:n,month:e,total:t,cats:r,clear:s}),BE=n=>wo({action:"goal-save",...n}),jE=(n,e,t)=>wo({action:"goal-move",id:n,amount:e,dir:t}),qE=n=>wo({action:"goal-delete",id:n}),zE=5*60*1e3;async function ih({force:n=!1}={}){const e=n?null:mt("cards",zE);if(e)return e;const t=await Te("/api/shortcut-transaction",{action:"card-list"}),r={enabled:t.enabled===!0,cards:Array.isArray(t.cards)?t.cards:[]};return gt("cards",r),r}function WE(){try{localStorage.removeItem(Wt+"cards")}catch{}}const Mc=async n=>{const e=await Te("/api/shortcut-transaction",n);return WE(),e},HE=n=>Mc({action:"card-save",...n}),GE=n=>Mc({action:"card-delete",id:n}),KE=(n,e,t)=>Mc({action:"card-paid",id:n,paid:e,key:t});async function fI(n,e){for(const t of n.ids&&n.ids.length?n.ids:[n.id])await zn(Ye(ae,"members",String(t)),{cardAlerts:!!e});kr()}async function pI(){const n=await Te("/api/shortcut-transaction",{action:"line-quota"});return n&&n.quota?n.quota:null}async function QE(n){return n&&n.recurring&&Pr(),Te("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}async function oh(){const n=mt("profiles",vo);if(n)return n;const e=await ut(Pe(ae,"members")),t=new Map;e.docs.forEach(s=>{const i=s.data(),a=_p(i.name);if(!a)return;const c={id:s.id,name:a,promptpay:i.promptpay||"",realName:i.realName||"",englishName:i.englishName||"",hasLine:!!i.lineUserId,pictureUrl:/^https?:\/\//i.test(i.pictureUrl||"")?i.pictureUrl:"",role:i.role==="admin"?"admin":"member",cardAlerts:i.cardAlerts===!0,ids:[s.id]},l=t.get(a);l&&(c.ids=[...l.ids,s.id],c.cardAlerts=c.cardAlerts||l.cardAlerts),!l||!l.hasLine&&c.hasLine||!l.promptpay&&c.promptpay||!l.pictureUrl&&c.pictureUrl?t.set(a,c):(l.ids=c.ids,l.cardAlerts=c.cardAlerts)});const r=[...t.values()];return gt("profiles",r),r}function vp(n){try{localStorage.removeItem(Wt+"m:"+n),localStorage.removeItem(Wt+"w:"+n)}catch{}}function kr(){try{localStorage.removeItem(Wt+"profiles"),localStorage.removeItem(Wt+"members")}catch{}}async function ah(n){return Te("/api/shortcut-transaction",{action:"wallet-delete",id:n})}async function mI(n){let e=0;for(let t=0;t<n.length;t+=50){const r=await Te("/api/shortcut-transaction",{action:"wallet-confirm",ids:n.slice(t,t+50)});e+=Number(r.confirmed)||0}return e}async function XE(n){return(await Te("/api/shortcut-transaction",{action:"wallet-get",id:n})).item||null}async function gI(n){let e=0,t=0;for(let r=0;r<n.length;r+=50){const s=await Te("/api/shortcut-transaction",{action:"wallet-delete-many",ids:n.slice(r,r+50)});e+=Number(s.deleted)||0,t+=Array.isArray(s.failed)?s.failed.length:0}return{deleted:e,failed:t}}async function JE(){return(await ut(lt(Pe(ae,"subscription_templates"),Ge("active","==",!0)))).docs.map(e=>({id:e.id,...e.data()}))}async function YE(){const n=mt("billsched",vo);if(n)return n;const[e,t]=await Promise.all([JE(),FE().catch(()=>[])]),r={group:e.map(s=>({id:s.id,desc:s.desc,amount:s.amount,billingDay:s.billingDay,payer:s.payer,splits:s.splits,icon:s.icon,active:s.active})),personal:t.map(s=>({id:s.id,desc:s.desc,amount:s.amount,billingDay:s.billingDay,icon:s.icon}))};return gt("billsched",r),r}function Pr(){try{localStorage.removeItem(Wt+"billsched")}catch{}}async function _I(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc.trim().slice(0,100)||"บิลรายเดือน"),typeof e.icon=="string"&&(t.icon=e.icon),e.billingDay!==void 0&&(t.billingDay=Math.min(31,Math.max(1,Math.round(Number(e.billingDay))||1))),await zn(Ye(ae,"subscription_templates",String(n)),t),Pr()}async function yI(n){await zn(Ye(ae,"subscription_templates",String(n)),{active:!1,stoppedAt:new Date}),Pr()}async function ZE(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc),typeof e.icon=="string"&&(t.icon=e.icon),await zn(Ye(ae,"transactions",String(n)),t)}async function vI(n){await lp(Pe(ae,"members"),{name:n,createdAt:new Date().toISOString(),quickAdded:!0,role:"member"}),kr()}async function wI(n,e){const t={realName:String(e.realName||""),promptpay:String(e.promptpay||""),role:e.role==="admin"?"admin":"member",realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date};await zn(Ye(ae,"members",String(n)),t),kr()}async function EI(n){const e=n.name;if((await Promise.all([ut(lt(Pe(ae,"transactions"),Ge("payer","==",e),ni(1))),ut(lt(Pe(ae,"transactions"),Ge(new Sr("splits",e),">=",0),ni(1))),ut(lt(Pe(ae,"settlements"),Ge("from","==",e),ni(1))),ut(lt(Pe(ae,"settlements"),Ge("to","==",e),ni(1)))])).some(r=>!r.empty))throw new Error(`ลบ ${e} ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน (ถ้าลบ ยอดหนี้ของคนอื่นจะคำนวณผิด)`);await Dc(Ye(ae,"members",String(n.id))),kr()}async function TI({from:n,to:e,amount:t,month:r,adminName:s}){await lp(Pe(ae,"settlements"),{status:"verified",month:r,from:n,to:e,amount:Number(t),transactionIds:[],createdAt:new Date().toISOString(),verifiedByAdmin:!0,adminId:s||"unknown"})}async function II(n,e){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(e))throw new Error("เดือนไม่ถูกต้อง");await zn(Ye(ae,"settlements",String(n)),{month:e})}async function bI(n){await Dc(Ye(ae,"settlements",String(n)))}async function AI(){return(await Te("/api/shortcut-transaction",{action:"admin-status"})).status||{debt:null,subs:null,cards:null}}async function SI(){return(await Te("/api/shortcut-transaction",{action:"group-summary"})).message||"ส่งแล้ว"}async function RI(){return(await Te("/api/shortcut-transaction",{action:"remind-all"})).message||"สั่งเตือนแล้ว"}async function kI(n){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(n))throw new Error("เดือนไม่ถูกต้อง");const e=await ut(lt(Pe(ae,"transactions"),Ge("date",">=",`${n}-01`),Ge("date","<=",`${n}-31`))),t=new Map;e.docs.forEach(a=>t.set(a.id,a.ref));const r=[...new Set(e.docs.map(a=>a.data().groupId).filter(Boolean))];for(const a of r)(await ut(lt(Pe(ae,"transactions"),Ge("groupId","==",a)))).docs.forEach(l=>t.set(l.id,l.ref));const s=await ut(lt(Pe(ae,"settlements"),Ge("month","==",n))),i=[...t.values(),...s.docs.map(a=>a.ref)];for(let a=0;a<i.length;a+=400){const c=up(ae);i.slice(a,a+400).forEach(l=>c.delete(l)),await c.commit()}return vp(n),{bills:t.size,settlements:s.docs.length}}async function eT(n){await Dc(Ye(ae,"transactions",String(n)))}async function PI(n,e){for(let t=0;t<n.length;t+=10)await Promise.all(n.slice(t,t+10).map(r=>ZE(r,{icon:e})));return n.length}async function CI(n){for(let e=0;e<n.length;e+=10)await Promise.all(n.slice(e,e+10).map(t=>eT(t)));return n.length}async function DI(n,e){await zn(Ye(ae,"members",String(n)),{...e,realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date}),kr()}async function NI(n,{to:e,amount:t,month:r}){const s=await new Promise((l,h)=>{const f=new FileReader;f.onload=()=>l(String(f.result).split(",")[1]),f.onerror=()=>h(new Error("อ่านไฟล์รูปไม่สำเร็จ")),f.readAsDataURL(n)});if(ms!=="in")throw qi();const i=liff.getIDToken(),a=await fetch("/api/verify-settlement-slip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:i,to:e,amount:t,month:r,base64Image:s})});let c={};try{c=await a.json()}catch{}return{ok:a.ok&&c.success===!0,json:c,status:a.status}}function MI(){try{liff.logout()}catch{}try{J0(Dn)}catch{}Ra(),location.href="/"}async function ch({docs:n,template:e}){const t=up(ae);n.forEach(r=>t.set(Ye(Pe(ae,"transactions")),r)),e&&t.set(Ye(Pe(ae,"subscription_templates")),e),await t.commit(),e&&Pr()}(async()=>{try{if(typeof Dn.authStateReady=="function"&&await Dn.authStateReady(),Dn.currentUser)return Pc();const n=yo();if(!n)return;const e=await fetch("/api/device-token?firebase=1",{headers:{Authorization:"Bearer "+n.token}}),t=await e.json().catch(()=>({}));e.ok&&t.success&&t.member&&await Cc(t.firebaseToken,t.member.id)}catch(n){console.warn("firebase pass:",n&&n.message)}})();const lh=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},uh=60;function tT(n,e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));if(!t)throw new Error("รูปแบบวันที่ไม่ถูกต้อง");const r=Number(t[1]),s=Number(t[2])-1,i=Number(t[3]),a=r*12+s+Number(e),c=Math.floor(a/12),l=a-c*12,h=new Date(Date.UTC(c,l+1,0)).getUTCDate(),f=Math.min(i,h);return`${String(c).padStart(4,"0")}-${String(l+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`}function nT({amount:n,installments:e,splits:t,date:r}){const s=Number(e);if(!Number.isInteger(s)||s<1||s>uh)throw new Error(`จำนวนงวดต้องเป็นเลข 1–${uh}`);const i=Object.keys(t||{});if(i.length===0)throw new Error("ไม่มีผู้ร่วมจ่าย");const a=lh(n);if(a<=0)throw new Error("ยอดเงินไม่ถูกต้อง");const c=i.map(f=>[f,lh(t[f])]),l=a-c.reduce((f,[,_])=>f+_,0);if(l!==0){let f=0;c.forEach(([,_],m)=>{_>c[f][1]&&(f=m)}),c[f][1]+=l}const h=[];for(let f=0;f<s;f++){const _={};let m=0;for(const[T,k]of c){const D=Math.floor(k/s),S=f<k-D*s?1:0;_[T]=(D+S)/100,m+=D+S}h.push({index:f+1,date:tT(r,f),amount:m/100,splits:_})}return h}const rT=[["trip",["เที่ยว","โรงแรม","ที่พักรีสอร์ท","เครื่องบิน","ตั๋วเครื่องบิน","airbnb","agoda","ทริป"]],["rent",["ค่าเช่า","ค่าห้อง","ค่าหอ","คอนโด","ค่าส่วนกลาง"]],["drink",["กาแฟ","ชานม","ชาไข่มุก","คาเฟ่","เครื่องดื่ม","น้ำผลไม้","เหล้า","เบียร์","ไวน์","ปาร์ตี้","starbucks","amazon"]],["pet",["แมว","หมา","สุนัข","สัตว์"]],["food",["ข้าว","กิน","อาหาร","ก๋วยเตี๋ยว","ขนม","หมูกระทะ","ชาบู","บุฟเฟ","ส้มตำ","ไก่","หมู","เนื้อ","ปิ้งย่าง","ผัด","ต้ม","แกง","ส้ม","ไอติม","เค้ก","grab food","lineman","line man","foodpanda"]],["bills",["ค่าไฟ","ค่าน้ำ","ค่าเน็ต","อินเทอร์เน็ต","เน็ต","โทรศัพท์","ค่าโทร","netflix","spotify","youtube","disney","subscription","ค่าบริการ","claude","chatgpt","openai","icloud","adobe","canva","hbo","prime video","google one","ค่ามือถือ","ค่าเช่ารายเดือน","dtac","true","ais","3bb","google cloud"]],["travel",["รถ","น้ำมัน","แท็กซี่","grab","bolt","bts","mrt","ทางด่วน","ที่จอดรถ","ค่าเดินทาง","รถเมล์","ตั๋วรถ","civic","honda","toyota","mazda","nissan","isuzu","mitsubishi","benz","bmw","ประกันรถ","ภาษีรถ","พ.ร.บ.","ค่างวดรถ","ผ่อนรถ","ล้างรถ","ค่ารถ"]],["fun",["หนัง","โรงหนัง","เกม","steam","คอนเสิร์ต","บัตรคอน","karaoke","คาราโอเกะ","บอร์ดเกม","ดูหนัง"]],["health",["ค่ายา","ซื้อยา","หมอ","โรงพยาบาล","คลินิก","ฟัน","ตรวจสุขภาพ","วิตามิน","ฟิตเนส","ยิม"]],["gift",["ของขวัญ","วันเกิด","ซองงาน","ทำบุญ","ดอกไม้"]],["goods",["ซื้อ","ของใช้","ช้อป","shopee","lazada","7-11","เซเว่น","ซุปเปอร์","โลตัส","บิ๊กซี","tops","makro","แม็คโคร","ที่ปิ้ง","ครีม","สบู่","ยาสระผม","ตัดผม","ซาลอน"]]];function sT(n){const e=String(n||"").toLowerCase();if(!e.trim())return"other";for(const[t,r]of rT)if(r.some(s=>e.includes(s)))return t;return"other"}const iT=[{key:"food",label:"อาหารและเครื่องดื่ม",short:"อาหาร",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",short:"บิล/รายเดือน",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",short:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",short:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"fun",label:"บันเทิง",short:"บันเทิง",icons:["fa-film"]},{key:"other",label:"อื่นๆ",short:"อื่นๆ",icons:[]}],hh=iT.map(n=>n.key),VI=["plane","shield","home","phone","car","gift","heart","star"],OI=["accent","sun","receive","accent2","navy"],oT=80,aT=/^\d{4}-(0[1-9]|1[0-2])$/,Nn=n=>Math.round((Number(n)||0)*100),dh=n=>typeof n=="string"&&aT.test(n),fh=n=>!!(n&&(Number(n.total)>0||Object.values(n.cats||{}).some(e=>Number(e)>0)));function cT(n,e){const t=n||{},r=t.months&&t.months[e];return fh(r)?{total:Number(r.total)||0,cats:{...r.cats||{}},source:"month"}:fh(t.budget)?{total:Number(t.budget.total)||0,cats:{...t.budget.cats||{}},source:"default"}:{total:0,cats:{},source:"none"}}function ph(n,e){return e>0?n>e?"over":n/e*100>=oT?"near":"ok":"none"}const ka=(n,e)=>e>0?Math.round(n/e*100):0;function lT(n,e){const t=n||{total:0,cats:{},source:"none"},r=Object.fromEntries(hh.map(h=>[h,Nn((t.cats||{})[h])])),s=Object.values(r).reduce((h,f)=>h+f,0),i=Nn(t.total)>0?Nn(t.total):s,a=Math.max(0,Math.round(Number(e&&e.totalSat)||0)),c=e&&e.cats||{},l=hh.filter(h=>r[h]>0).map(h=>{const f=Math.max(0,Math.round(Number(c[h])||0));return{key:h,budgetSat:r[h],spentSat:f,leftSat:r[h]-f,percent:ka(f,r[h]),level:ph(f,r[h])}});return{set:i>0,source:t.source||"none",budgetSat:i,spentSat:a,leftSat:i-a,percent:ka(a,i),level:ph(a,i),cats:l,unassignedSat:Math.max(0,i-s)}}function uT(n,e){if(!dh(n)||!dh(e))return 0;const[t,r]=n.split("-").map(Number),[s,i]=e.split("-").map(Number);return Math.max(0,(s-t)*12+(i-r)+1)}function hT(n,e){return(n&&Array.isArray(n.log)?n.log:[]).filter(t=>String(t.date).startsWith(e)).reduce((t,r)=>t+Nn(r.amount),0)}function wp(n,e){const t=n||{},r=Nn(t.target),s=Nn(t.saved),i=Math.max(0,r-s),a=r>0&&s>=r,c=t.deadline?uT(e,t.deadline):0,l=!!t.deadline&&c===0&&!a;let h=0;return a||(h=t.deadline?c>0?Math.ceil(i/c/100)*100:i:Nn(t.monthly)),{targetSat:r,savedSat:s,remainingSat:i,percent:Math.min(100,ka(s,r)),done:a,monthsLeft:c,late:l,perMonthSat:h,thisMonthSat:hT(t,e)}}function Ep(n,e){let t=0,r=0;for(const s of n||[]){const i=wp(s,e);i.done||(t+=i.perMonthSat),r+=i.thisMonthSat}return{planSat:t,doneSat:Math.max(0,r)}}function dT(n,e,t){const r=Math.max(0,Math.round(Number(n)||0)-Ep(e,t).planSat);return Math.floor(r/1e4)*1e4}function ce(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function fn(n){const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0}function fT({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const s=new Set(n.map(ce).filter(Boolean)),i={};s.forEach(l=>{i[l]=0});const a=[],c=(l,h,f)=>{const _=ce(l);_&&(s.has(_)?i[_]+=h:a.push({type:"unknown_name",name:_,...f}))};for(const l of e){if(!l||typeof l.date!="string"||!l.date.startsWith(r))continue;const h=l.splits&&typeof l.splits=="object"?Object.entries(l.splits):[];if(h.length===0){a.push({type:"no_splits",id:l.id});continue}const f=fn(l.amount);c(l.payer,f,{id:l.id});let _=0;for(const[m,T]of h){const k=fn(T);_+=k,c(m,-k,{id:l.id})}Math.abs(_-f)>h.length&&a.push({type:"split_mismatch",id:l.id,diffSatang:_-f})}for(const l of t){if(!l||l.status!=="verified"||l.month!==r)continue;const h=fn(l.amount);c(l.from,h,{id:l.id}),c(l.to,-h,{id:l.id})}return{balances:i,warnings:a}}function pT(n,{minSatang:e=100}={}){const t=[],r=[];for(const[l,h]of Object.entries(n))h<=-e?t.push({name:l,amt:-h}):h>=e&&r.push({name:l,amt:h});const s=(l,h)=>h.amt-l.amt||(l.name<h.name?-1:l.name>h.name?1:0);t.sort(s),r.sort(s);const i=[];let a=0,c=0;for(;a<t.length&&c<r.length;){const l=t[a],h=r[c],f=Math.min(l.amt,h.amt);f>=e&&i.push({from:l.name,to:h.name,amountSatang:f,amount:f/100}),l.amt-=f,h.amt-=f,l.amt<e&&a++,h.amt<e&&c++}return i}function Tp(n){const e=Number(n)||0;return Math.abs(e)<100?0:Math.round(e/100)}function zi(n,e){if(!n)return 0;const t=ce(e),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return ce(n.payer)===t?fn(n.amount):0;let s=0;for(const[i,a]of r)ce(i)===t&&(s+=fn(a));return s}function Ip(n,e){return n&&ce(n.payer)===ce(e)?fn(n.amount):0}const bp=(n,e)=>typeof n=="string"&&n.startsWith(e);function Ap({name:n,transactions:e=[],settlements:t=[],month:r}){const s=ce(n);let i=0,a=0;for(const f of e)!f||!bp(f.date,r)||(i+=Ip(f,s),a+=zi(f,s));let c=0,l=0;for(const f of t){if(!f||f.status!=="verified"||f.month!==r)continue;const _=fn(f.amount);ce(f.from)===s&&(c+=_),ce(f.to)===s&&(l+=_)}const h=i-a+c-l;return{name:s,month:r,paid:i,share:a,sent:c,received:l,balance:h}}function Sp({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const{balances:s,warnings:i}=fT({memberNames:n,transactions:e,settlements:t,month:r}),a=pT(s),c=Object.keys(s).sort().map(l=>{const h=Ap({name:l,transactions:e,settlements:t,month:r}),f=Tp(s[l]);return{...h,balance:s[l],displayBalance:f,cleared:f===0}});return{month:r,balances:s,plan:a,warnings:i,members:c}}function Vc({name:n,month:e,walletEntries:t=[],transactions:r=[],settlements:s=[]}){const i=ce(n),a=new Set;let c=0,l=0;for(const m of t){if(!m||ce(m.ownerName)!==i||!bp(m.date||m.month,e))continue;const T=m.dedupKey||m.transRef;if(T){if(a.has(T))continue;a.add(T)}const k=fn(m.amount);k<=0||(m.type==="income"?c+=k:m.type==="expense"&&(l+=k))}const h=Ap({name:i,transactions:r,settlements:s,month:e}),f=h.share,_=l+f;return{name:i,month:e,income:c,personalExpense:l,groupShare:f,expenseTotal:_,net:c-_,receivedBack:h.received,paidBack:h.sent}}function Rp(n){return(n||[]).map(e=>({from:e.from,to:e.to,amount:Math.round(e.amountSatang/100)})).filter(e=>e.amount>=1)}const Wi=[{key:"food",label:"อาหารและเครื่องดื่ม",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"fun",label:"บันเทิง",icons:["fa-film"]},{key:"other",label:"อื่นๆ",icons:[]}];function mT(n){const e=Wi.find(t=>t.icons.includes(n));return e?e.key:"other"}const mh=n=>String(n||"").slice(0,7);function gh({name:n,month:e,today:t="",members:r,transactions:s,settlements:i,walletItems:a=[]}){const c=ce(n),l=Sp({memberNames:r,transactions:s,settlements:i,month:e}),h=Vc({name:c,month:e,walletEntries:a.map(v=>({ownerName:c,type:v.type,amount:v.amount,date:v.date})),transactions:s,settlements:i}),f=Object.fromEntries(Wi.map(v=>[v.key,0])),_={},m={},T=(v,w,ue,Ce,Rt)=>{if(!Ce||!String(v).startsWith(e))return;f[mT(ue)]+=Ce;const Ze=Number(String(v).slice(8,10));_[Ze]=(_[Ze]||0)+Ce,m[Ze]||(m[Ze]=[]),m[Ze].push({desc:w||"ไม่ระบุ",icon:ue,satang:Ce,kind:Rt})};for(const v of s)!v||mh(v.date)!==e||T(v.date,v.desc,v.icon,zi(v,c),"group");for(const v of a)v.type==="expense"&&T(v.date,v.desc,v.icon,Math.round(Number(v.amount)*100),"personal");const k=Object.values(f).reduce((v,w)=>v+w,0),D=Wi.map(v=>({key:v.key,label:v.label,satang:f[v.key],percent:k>0?Math.round(f[v.key]/k*100):0})).filter(v=>v.satang>0).sort((v,w)=>w.satang-v.satang),S=t.startsWith(e)?Number(t.slice(8,10)):Er(e),M=[];for(let v=1;v<=S;v++)M.push({day:v,satang:_[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,items:m[v]||[]});const O=Er(e),$=[];for(let v=1;v<=O;v++)$.push({day:v,date:`${e}-${String(v).padStart(2,"0")}`,satang:_[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,isFuture:t.startsWith(e)&&v>Number(t.slice(8,10)),items:m[v]||[]});const H=h.expenseTotal,X=S>0?Math.round(H/S/100):0,Z=Rp(l.plan),I=Z.filter(v=>v.to===c).map(v=>({name:v.from,amount:v.amount})).sort((v,w)=>w.amount-v.amount),y=Z.filter(v=>v.from===c).map(v=>({name:v.to,amount:v.amount})).sort((v,w)=>w.amount-v.amount),E=I[0]?I[0].amount:0;I.forEach(v=>{v.share=E?Math.round(v.amount/E*100):0});const b=y[0]?y[0].amount:0;y.forEach(v=>{v.share=b?Math.round(v.amount/b*100):0});const A=[];for(const v of s){if(!v||mh(v.date)!==e)continue;const w=zi(v,c);(w>0||Ip(v,c)>0)&&A.push({id:v.id,kind:"group",desc:v.desc||"",icon:v.icon,satang:w,date:v.date,ts:Number(v.timestamp)||0})}for(const v of a)String(v.date).startsWith(e)&&A.push({id:v.id,kind:v.type==="income"?"income":"personal",desc:v.desc||"",icon:v.icon,satang:Math.round(Number(v.amount)*100),date:v.date,ts:Number(v.timestamp)||0});return A.sort((v,w)=>w.date.localeCompare(v.date)||w.ts-v.ts),{month:e,incomeSat:h.income,spentSat:H,personalSat:h.personalExpense,groupShareSat:h.groupShare,netSat:h.net,net:Tp(h.net),spentPercent:h.income>0?Math.min(999,Math.round(H/h.income*100)):null,receivedBackSat:h.receivedBack,categories:D,daily:M,calendarDays:$,average:X,owedToMe:I,owedTotal:I.reduce((v,w)=>v+w.amount,0),iOwe:y,iOweTotal:y.reduce((v,w)=>v+w.amount,0),recent:A.slice(0,5),warnings:l.warnings}}function _h(n,e,t=""){const r=e.month,s={};for(const h of e.categories||[])s[h.key]=h.satang;const i=lT(cT(n||{},r),{totalSat:e.spentSat,cats:s}),a=(n&&n.goals||[]).map(h=>({...h,s:wp(h,r)})),c=t.startsWith(r),l=c?Er(r)-Number(t.slice(8,10))+1:0;return{month:r,status:i,goals:a,saving:Ep(a,r),suggestSat:dT(e.incomeSat,a,r),daysLeft:l,perDaySat:c&&i.leftSat>0&&l>0?Math.floor(i.leftSat/l/100)*100:0}}function gT({me:n,month:e,today:t,group:r=[],personal:s=[],cards:i=[]}){const a=ce(n),c=S=>Math.round((Number(S)||0)*100),l=[];for(const S of r){if(!S||S.active===!1)continue;const M=S.splits&&typeof S.splits=="object"?S.splits:{},O=Object.keys(M).find(H=>ce(H)===a),$=ce(S.payer);!O&&$!==a||l.push({id:"g:"+S.id,kind:"group",desc:String(S.desc||"บิลรายเดือน"),icon:S.icon||"",billingDay:Number(S.billingDay)||1,mySat:O?c(M[O]):0,totalSat:c(S.amount),payer:$,people:Object.keys(M).length,names:Object.keys(M).map(ce),coverFor:!O})}for(const S of s)!S||S.active===!1||l.push({id:"p:"+S.id,kind:"personal",desc:String(S.desc||"รายจ่ายรายเดือน"),icon:S.icon||"",billingDay:Number(S.billingDay)||1,mySat:c(S.amount),totalSat:c(S.amount),payer:a,people:1,coverFor:!1});const h=(S,M)=>Math.min(Math.max(1,Math.round(M)||1),Er(S)),f=(S,M)=>{const O=`${M}-${String(h(M,S.billingDay)).padStart(2,"0")}`,$=Math.round((Date.parse(O+"T00:00:00Z")-Date.parse(t+"T00:00:00Z"))/864e5);return{...S,date:O,day:Number(O.slice(8,10)),daysLeft:$,status:$<0?"done":$===0?"today":"soon"}},_=yT(i,t),m=[...l.map(S=>f(S,e)),..._.filter(S=>S.date.startsWith(e))].sort((S,M)=>S.day-M.day||S.desc.localeCompare(M.desc)),T=t.slice(0,7),k=[...[T,ft(T,1),ft(T,2)].flatMap(S=>l.map(M=>f(M,S))),..._].filter(S=>S.daysLeft>=0).sort((S,M)=>S.daysLeft-M.daysLeft||M.mySat-S.mySat),D=m.filter(S=>S.kind!=="card");return{month:e,items:m,totalSat:D.reduce((S,M)=>S+M.mySat,0),dueSat:D.filter(S=>S.daysLeft>=0).reduce((S,M)=>S+M.mySat,0),upcoming:k}}function _T(n){const e=n&&n.bank&&n.bank!=="อื่นๆ"?n.bank:"บัตร";return n&&n.last4?`${e} •• ${n.last4}`:e}function Qo(n){return`${Number(n.slice(8,10))} ${$n(n.slice(0,7))}`}function yT(n,e){const t=[];for(const r of n||[]){const s=(i,a)=>{const c=Math.round((Date.parse(i.dueDate+"T00:00:00Z")-Date.parse(e+"T00:00:00Z"))/864e5);t.push({id:`c:${r.id}:${i.key}`,kind:"card",cardId:r.id,color:r.color,desc:_T(r),icon:"fa-credit-card",date:i.dueDate,day:Number(i.dueDate.slice(8,10)),billingDay:r.dueDay,daysLeft:c,status:c<0?"done":c===0?"today":"soon",mySat:Number(i.amountSat)||0,totalSat:Number(i.amountSat)||0,start:i.start,end:i.end,pending:a,people:1,coverFor:!1})};r.due&&!r.due.paid&&s(r.due,!1),r.open&&s(r.open,!0)}return t}function vT(n,e){if(n.kind==="card")return n.pending?`ยังไม่ตัดรอบ (ตัดรอบ ${Qo(n.end)})`:`ยอดรอบ ${Qo(n.start)} - ${Qo(n.end)}`;if(n.kind==="personal")return"ส่วนตัว";const t=n.payer===ce(e);return n.coverFor?"คุณจ่ายแทน":t?`คุณจ่าย หาร ${n.people}`:`${n.payer} จ่าย หาร ${n.people}`}function Er(n){const[e,t]=n.split("-").map(Number);return new Date(Date.UTC(e,t,0)).getUTCDate()}function ft(n,e){const[t,r]=n.split("-").map(Number),s=t*12+(r-1)+e,i=Math.floor(s/12);return`${i}-${String(s-i*12+1).padStart(2,"0")}`}const Cs=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],wT=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];function kp(n){const[e,t]=n.split("-").map(Number);return`${Cs[t-1]} ${e+543}`}function Oc(n){const[e,t]=n.split("-").map(Number);return`${wT[t-1]} ${e+543}`}function te(n,{decimals:e=0,sign:t=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return`${r<0?"-":t&&r>0?"+":""}฿${s}`}function ET({name:n,months:e,transactions:t,settlements:r,walletItems:s=[]}){const i=ce(n),a=s.map(c=>({ownerName:i,type:c.type,amount:c.amount,date:c.date}));return e.map(c=>{const l=Vc({name:i,month:c,walletEntries:a,transactions:t,settlements:r});return{month:c,spentSat:l.expenseTotal,incomeSat:l.income}})}function yh(n,e){return Array.from({length:e},(t,r)=>ft(n,r-(e-1)))}function $n(n){return Cs[Number(n.slice(5,7))-1]}function LI(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10?e.slice(0,6)+"XXXX":e.length===13?"X-XXXX-XXXXX-"+e.slice(11,13)+"-X":e}function Pp(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10||e.length===13?e:""}function xI(n,e){const t=Pp(n);return!t||!(Number(e)>0)?"":`https://promptpay.io/${t}/${Number(e).toFixed(2)}`}function TT({name:n,month:e,members:t,transactions:r,settlements:s}){const i=ce(n),a=Sp({memberNames:t,transactions:r,settlements:s,month:e}),c=Rp(a.plan).map(f=>({from:f.from,to:f.to,amount:f.amount,role:f.from===i?"pay":f.to===i?"receive":"other"})),l={pay:0,receive:1,other:2};c.sort((f,_)=>l[f.role]-l[_.role]||_.amount-f.amount);const h=(s||[]).filter(f=>f&&f.status==="verified"&&f.month===e).map(f=>({id:f.id,from:f.from,to:f.to,amount:Number(f.amount)||0,manual:!!f.verifiedByAdmin,createdAt:f.createdAt||""})).sort((f,_)=>String(_.createdAt).localeCompare(String(f.createdAt)));return{lines:c,history:h,mineToPay:c.filter(f=>f.role==="pay"),mineToReceive:c.filter(f=>f.role==="receive"),cleared:c.length===0}}function IT({name:n,month:e,walletItems:t,transactions:r,settlements:s}){const i=ce(n),a=Vc({name:i,month:e,walletEntries:t.map(l=>({ownerName:i,type:l.type,amount:l.amount,date:l.date})),transactions:r,settlements:s}),c=t.filter(l=>String(l.date).startsWith(e)).sort((l,h)=>h.date.localeCompare(l.date)||(Number(h.timestamp)||0)-(Number(l.timestamp)||0)).map(l=>({id:l.id,type:l.type==="income"?"income":"expense",desc:l.desc||"",amount:Number(l.amount)||0,date:l.date,icon:l.icon||"",card:l.card||"",unconfirmed:l.unconfirmed===!0,recurring:l.recurring===!0||String(l.id||"").startsWith("wsub_"),ts:Number(l.timestamp)||0}));return{incomeSat:a.income,personalSat:a.personalExpense,groupShareSat:a.groupShare,spentSat:a.expenseTotal,netSat:a.net,receivedBackSat:a.receivedBack,paidBackSat:a.paidBack,items:c}}function bT({name:n,month:e,transactions:t,search:r=""}){const s=ce(n),i=String(r||"").trim().toUpperCase(),a=t.filter(l=>l&&String(l.date||"").startsWith(e)).map(l=>({id:l.id,desc:l.desc||"",date:l.date,icon:l.icon||"",payer:l.payer||"",amountSat:AT(l.amount),myShareSat:zi(l,s),iPaid:ce(l.payer)===s,people:Object.keys(l.splits||{}),type:l.paymentType||"normal",ts:Number(l.timestamp)||0})).filter(l=>!i||l.desc.toUpperCase().includes(i)||ce(l.payer).includes(i)).sort((l,h)=>h.date.localeCompare(l.date)||h.ts-l.ts),c=a.filter(l=>l.myShareSat>0||l.iPaid);return{all:a,mine:c,totalSat:a.reduce((l,h)=>l+h.amountSat,0),myShareSat:c.reduce((l,h)=>l+h.myShareSat,0)}}const AT=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},FI=[{key:"food",label:"อาหาร",fa:"fa-utensils",icon:"food"},{key:"drink",label:"เครื่องดื่ม",fa:"fa-mug-hot",icon:"coffee"},{key:"goods",label:"ของใช้",fa:"fa-cart-shopping",icon:"bag"},{key:"travel",label:"เดินทาง",fa:"fa-car",icon:"car"},{key:"bills",label:"บิล",fa:"fa-bolt",icon:"bolt"},{key:"rent",label:"ที่พัก",fa:"fa-house",icon:"key"},{key:"fun",label:"บันเทิง",fa:"fa-film",icon:"film"},{key:"health",label:"สุขภาพ",fa:"fa-pills",icon:"pill"},{key:"trip",label:"เที่ยว",fa:"fa-plane",icon:"plane"},{key:"gift",label:"ของขวัญ",fa:"fa-gift",icon:"gift"},{key:"pet",label:"สัตว์เลี้ยง",fa:"fa-paw",icon:"paw"},{key:"other",label:"อื่นๆ",fa:"fa-money-bill",icon:"dots"}],UI=sT;function ST({me:n,members:e,transactions:t,limit:r=6}){const s=ce(n),i=new Set((e||[]).map(ce)),a=new Map;for(const c of t||[]){const l=new Set(Object.keys(c&&c.splits||{}).map(ce));l.add(ce(c&&c.payer)),l.has(s)&&l.forEach(h=>{h&&h!==s&&i.has(h)&&a.set(h,(a.get(h)||0)+1)})}return[...a.entries()].sort((c,l)=>l[1]-c[1]||(c[0]<l[0]?-1:1)).slice(0,r).map(([c])=>c)}function RT(n,e){const t=Math.round(Number(n)*100),r=e.length,s=Math.floor(t/r),i=t-s*r;return Object.fromEntries(e.map((a,c)=>[a,(s+(c<i?1:0))/100]))}function $I(n){const e=Math.round(Number(n.amount)*100)/100;if(!Number.isFinite(e)||e<=0)return{ok:!1,error:"ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"};if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date||""))return{ok:!1,error:"เลือกวันที่ให้ถูกต้อง"};if(n.today&&n.date>n.today)return{ok:!1,error:"เลือกวันที่ไม่เกินวันนี้"};const t=ce(n.payer);if(!t)return{ok:!1,error:"เลือกคนจ่าย"};const r=[...new Set((n.participants||[]).map(ce).filter(Boolean))];if(r.length===0)return{ok:!1,error:"เลือกคนหารอย่างน้อย 1 คน"};if(r.length===1&&r[0]===t)return{ok:!1,error:"บิลที่มีแต่ตัวเองคนเดียวไม่ต้องหาร ให้ใช้รายจ่ายส่วนตัวแทน"};let s;if(n.mode==="custom"){s={};let h=0;for(const _ of r){const m=Math.round(Number((n.custom||{})[_])*100);if(!Number.isFinite(m)||m<=0)return{ok:!1,error:`ใส่ยอดของ ${_} ให้มากกว่า 0 (หรือเอาออกจากคนหาร)`};s[_]=m/100,h+=m}const f=Math.round(e*100)-h;if(f!==0)return{ok:!1,error:`ยอดที่แบ่งรวมกัน ${te(h/100,{decimals:2})} ไม่เท่ายอดบิล ${te(e,{decimals:2})} (${f>0?"ขาด":"เกิน"} ${te(Math.abs(f)/100,{decimals:2})})`}}else{const h=r.includes(t)?[...r.filter(f=>f!==t),t]:r;s=RT(e,h)}const i=String(n.desc||"").trim().slice(0,100)||"ไม่ระบุ",a=n.icon||"fa-money-bill",c=n.now||Date.now(),l={payer:t,icon:a};if(n.type==="installment"){const h=Number(n.installments);let f;try{f=nT({amount:e,installments:h,splits:s,date:n.date})}catch(m){return{ok:!1,error:m.message}}const _=`grp_${c}`;return{ok:!0,docs:f.map((m,T)=>({...l,date:m.date,desc:`${i} (${m.index}/${h})`,amount:m.amount,splits:m.splits,paymentType:"installment",groupId:_,timestamp:c+T})),template:null,summary:`ผ่อน ${h} งวด งวดละประมาณ ${te(e/h,{decimals:2})}`}}if(n.type==="subscription"){const h=`sub_${c}`,f=n.recurring!==!1,_={...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"subscription",subscriptionRecurring:f,subscriptionStartDate:n.date,groupId:h,timestamp:c},m=f?{desc:i,amount:e,payer:t,splits:s,icon:a,billingDay:Number(n.date.slice(8,10))||1,groupId:h,active:!0,createdAt:new Date(c),createdBy:t,lastGeneratedMonth:n.date.slice(0,7)}:null;return{ok:!0,docs:[_],template:m,summary:f?"สร้างซ้ำทุกเดือนอัตโนมัติ":"ครั้งเดียว"}}return{ok:!0,docs:[{...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"normal",timestamp:c}],template:null,summary:r.includes(t)?`หารกับเพื่อน ${r.length} คน (รวมผู้จ่าย)`:`จ่ายแทน ${r.length} คน (ไม่มีส่วนของผู้จ่าย)`}}const si=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"list",label:"รายการ",icon:"list"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"me",label:"ฉัน",icon:"user"}],kT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];function Cp({month:n,today:e}){if(!n)return null;const t=e&&e.startsWith(n),r=t?Number(e.slice(8,10)):Er(n),[s,i]=n.split("-").map(Number),a=t?kT[new Date(Date.UTC(s,i-1,r)).getUTCDay()]:"ทั้งเดือน";return d("span",{class:"dtile","aria-hidden":"true",children:[d("span",{class:"m",children:$n(n)}),d("span",{class:"d num",children:r}),d("span",{class:"w",children:a})]})}const vh=["home","list","clear","me"];function PT({page:n,children:e}){const t=Bh(n),r=t.current;_e(()=>{t.current=n},[n]);const s=r===n?"":vh.indexOf(n)>vh.indexOf(r)?"dir-r":"dir-l";return d("div",{class:`page-swap ${s}`.trim(),children:e},n)}function CT({month:n,onChange:e,min:t,max:r}){return d("div",{class:"month-wrap",children:[n!==r&&d("button",{type:"button",class:"btn sm ghost",onClick:()=>e(r),children:"เดือนนี้"}),d("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[d("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=t,onClick:()=>e(ft(n,-1)),children:d(Q,{name:"left",size:16})}),d("span",{class:"num","aria-live":"polite",children:kp(n)}),d("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>e(ft(n,1)),children:d(Q,{name:"right",size:16})})]})]})}function Dp({icon:n,title:e,note:t}){return d("div",{class:"sec-t",children:[d("span",{class:"ico",children:d(Q,{name:n})}),d("div",{children:[d("h2",{children:e}),t&&d("p",{children:t})]})]})}function DT(n){let e=0;for(const t of String(n||""))e=(e*31+t.codePointAt(0))%997;return e%5}const NT=({name:n,pictures:e={}})=>d("span",{class:"payer-av",title:`${n} จ่าย`,children:d(Lc,{name:n,pictureUrl:e[n],size:"xs"})}),MT=({payer:n,people:e=[],pictures:t={}})=>d("span",{class:"flow","aria-label":`${n} จ่าย หารกับ ${e.join(", ")}`,children:[d(NT,{name:n,pictures:t}),d(Q,{name:"right",size:12,class:"flow-arr"}),d(Pa,{names:e,pictures:t,max:3,size:"xs"})]});function Pa({names:n=[],pictures:e={},max:t=3,size:r="sm"}){const s=n.slice(0,t);return d("span",{class:"avstack","aria-hidden":"true",children:[s.map(i=>d(Lc,{name:i,pictureUrl:e[i],size:r},i)),n.length>t&&d("span",{class:"avstack-more num",children:["+",n.length-t]})]})}function Lc({name:n,pictureUrl:e,size:t=""}){const[r,s]=ee(!1),i=[...String(n||"?")][0],a=`av tint${DT(n)} ${t}`.trim();return e&&!r?d("img",{src:e,alt:n?`รูปของ ${n}`:"",class:a,onError:()=>s(!0),loading:"lazy"}):d("div",{class:a,"aria-hidden":"true",children:i})}function VT(){const[n,e]=ee(()=>{if(typeof document>"u")return"light";const s=localStorage.getItem("dm:theme");return s==="dark"||s==="light"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),t=()=>{const s=n==="dark"?"light":"dark";e(s),document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("dm:theme",s)}catch{}},r=n==="dark";return d("button",{type:"button",class:"theme-toggle","aria-label":r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",title:r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",onClick:t,children:d(Q,{name:r?"sun":"moon",size:18})})}function BI({label:n,value:e,options:t,onChange:r,icon:s="calendar",title:i,id:a}){const[c,l]=ee(!1),h=(t||[]).find(f=>f.value===e)||t&&t[0]||{};return d("div",{class:"field",children:[n&&d("label",{for:a,children:n}),d("button",{type:"button",id:a,class:"c-select-trigger",onClick:()=>l(!0),"aria-haspopup":"dialog",children:[s&&d("span",{class:"ico sm",children:d(Q,{name:s,size:16})}),d("span",{class:"c-select-val num",children:h.label||e}),d(Q,{name:"down",size:16,class:"mute"})]}),c&&d(Np,{title:i||n||"เลือกรายการ",onClose:()=>l(!1),children:d("div",{class:"c-select-list",children:(t||[]).map(f=>{const _=f.value===e;return d("button",{type:"button",class:`c-select-item ${_?"on":""}`,onClick:()=>{r(f.value),l(!1)},children:[d("span",{class:"c-select-item-text num",children:f.label}),_&&d(Q,{name:"check",size:18,class:"rcv"})]},f.value)})})})]})}function OT({value:n,max:e,today:t,onSelect:r,onClose:s}){const[i,a]=ee(()=>(n||t).slice(0,7)),[c,l]=ee(n||t),[h,f]=i.split("-").map(Number),_=Er(i),m=new Date(Date.UTC(h,f-1,1)).getUTCDay(),T=[];for(let D=0;D<m;D++)T.push(null);for(let D=1;D<=_;D++)T.push(`${i}-${String(D).padStart(2,"0")}`);const k=["อา","จ","อ","พ","พฤ","ศ","ส"];return d(Np,{title:"ปฏิทิน",onClose:s,children:d("div",{class:"cal-box",children:[d("div",{class:"cal-hd",children:[d("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",onClick:()=>a(ft(i,-1)),children:d(Q,{name:"left",size:16})}),d("span",{class:"cal-month-title num",children:Oc(i)}),d("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e&&ft(i,1).slice(0,7)>e.slice(0,7),onClick:()=>a(ft(i,1)),children:d(Q,{name:"right",size:16})})]}),d("div",{class:"cal-grid",role:"grid",children:[d("div",{class:"cal-dow-row",role:"row",children:k.map(D=>d("span",{class:"cal-dow",role:"columnheader",children:D},D))}),d("div",{class:"cal-days-grid",children:T.map((D,S)=>{if(!D)return d("span",{class:"cal-day empty"},`empty-${S}`);const M=Number(D.slice(8,10)),O=D===t,$=D===c,H=e&&D>e;return d("button",{type:"button",class:`cal-day-btn num ${$?"on":""} ${O?"today":""}`,disabled:H,onClick:()=>l(D),children:M},D)})})]}),d("div",{class:"cal-actions",children:[d("button",{type:"button",class:"btn ghost",onClick:()=>{l(t),a(t.slice(0,7))},children:"วันนี้"}),d("button",{type:"button",class:"btn",onClick:()=>r(c),children:["ยืนยัน (",Number(c.slice(8,10))," ",Cs[Number(c.slice(5,7))-1],")"]})]})]})})}function jI({id:n,label:e="วันที่",value:t,onChange:r,max:s,today:i}){const[a,c]=ee(!1),[l,h,f]=i.split("-").map(Number),_=new Date(Date.UTC(l,h-1,f-1)),m=`${_.getUTCFullYear()}-${String(_.getUTCMonth()+1).padStart(2,"0")}-${String(_.getUTCDate()).padStart(2,"0")}`,T=t===i,k=t===m,[D,S,M]=(t||i).split("-").map(Number),O=D+543,$=Cs[S-1]||"",H=T?`วันนี้ · ${M} ${$} ${O}`:k?`เมื่อวาน · ${M} ${$} ${O}`:`${M} ${$} ${O}`;return d("div",{class:"field",children:[d("span",{class:"fl",id:`${n}-l`,children:e}),d("div",{class:"date-pick-wrap",children:[d("button",{type:"button",id:n,class:"date-trigger","aria-labelledby":`${n}-l`,onClick:()=>c(!0),children:[d("span",{class:"ico sm",children:d(Q,{name:"calendar",size:16})}),d("span",{class:"date-trigger-text num",children:H}),d("span",{class:"date-trigger-tag",children:"ปฏิทิน"})]}),d("div",{class:"date-quick-chips",children:[d("button",{type:"button",class:`date-quick-btn ${T?"on":""}`,onClick:()=>r(i),children:"วันนี้"}),d("button",{type:"button",class:`date-quick-btn ${k?"on":""}`,onClick:()=>r(m),children:"เมื่อวาน"}),d("button",{type:"button",class:`date-quick-btn ${!T&&!k?"on":""}`,onClick:()=>c(!0),children:"แก้ไขวันที่"})]})]}),a&&d(OT,{value:t||i,max:s||i,today:i,onSelect:X=>{r(X),c(!1)},onClose:()=>c(!1)})]})}const Gr=[];function Np({title:n,onClose:e,children:t,as:r="div",onSubmit:s,action:i,class:a=""}){const c=Bh(null);return _e(()=>{const h=document.activeElement,f={};Gr.push(f);const _=k=>{k.key==="Escape"&&Gr[Gr.length-1]===f&&e()};document.addEventListener("keydown",_);const m=document.body.style.overflow;return document.body.style.overflow="hidden",(c.current&&c.current.querySelector("input, select, textarea")||c.current).focus({preventScroll:!0}),()=>{const k=Gr.indexOf(f);k>=0&&Gr.splice(k,1),document.removeEventListener("keydown",_),document.body.style.overflow=m,h&&h.focus&&h.focus({preventScroll:!0})}},[]),d("div",{class:"scrim",onClick:h=>h.target===h.currentTarget&&e(),children:d(r,{class:`sheet ${a}`.trim(),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:c,onSubmit:s,children:[d("div",{class:"grab","aria-hidden":"true"}),d("div",{class:"sheet-hd",children:[d("h2",{children:n}),i,d("button",{type:"button",class:"icon-btn",onClick:e,"aria-label":"ปิด",children:d(Q,{name:"close",size:18})})]}),t]})})}function qI({label:n,onConfirm:e,verb:t="ลบ",busyText:r="กำลังลบ",keepText:s="ยกเลิก",icon:i="trash",danger:a=!0}){const[c,l]=ee("idle");return _e(()=>{if(c!=="confirm")return;const h=setTimeout(()=>l("idle"),5e3);return()=>clearTimeout(h)},[c]),c==="idle"?d("button",{type:"button",class:"icon-btn","aria-label":`${t} ${n}`,onClick:()=>l("confirm"),children:d(Q,{name:i,size:17})}):d("span",{class:"confirm",children:[d("button",{type:"button",class:`btn sm ${a?"danger":""}`,disabled:c==="busy",onClick:async()=>{l("busy");try{await e()}finally{l("idle")}},children:c==="busy"?r:t}),d("button",{type:"button",class:"btn sm ghost",disabled:c==="busy",onClick:()=>l("idle"),children:s})]})}function rt({load:n,name:e,fallback:t=null,...r}){const[s,i]=ee(null);if(_e(()=>{let c=!0;return n().then(l=>{c&&l&&l[e]&&i({name:e,C:l[e]})}).catch(()=>{}),()=>{c=!1}},[e]),!s||s.name!==e)return t;const a=s.C;return d(a,{...r})}function zI({icon:n,title:e,summary:t,children:r,defaultOpen:s=!1}){const[i,a]=ee(s);return d("section",{class:"card collapsible",children:[d("button",{type:"button",class:"coll-head","aria-expanded":i,onClick:()=>a(!i),children:[d("span",{class:"ico accent",children:d(Q,{name:n})}),d("span",{class:"grow",children:[d("b",{children:e}),d("small",{children:t})]}),d(Q,{name:"down",size:16,class:`coll-chev ${i?"up":""}`})]}),i&&d("div",{class:"coll-body",children:r})]})}function Rn({blocks:n=3}){return d("div",{class:"home-grid","aria-busy":"true","aria-label":"กำลังโหลดข้อมูล",children:[d("div",{class:"col",children:Array.from({length:Math.ceil(n/2)},(e,t)=>d("div",{class:"card sk",style:{height:t===0?"168px":"220px"}},t))}),d("div",{class:"col",children:Array.from({length:Math.floor(n/2)},(e,t)=>d("div",{class:"card sk",style:{height:"200px"}},t))})]})}function LT({onRetry:n}){return d("div",{class:"card state",role:"alert",children:[d("span",{class:"ico",children:d(Q,{name:"alert"})}),d("div",{children:[d("b",{children:"โหลดข้อมูลไม่สำเร็จ"}),d("p",{children:"ตรวจอินเทอร์เน็ตแล้วลองใหม่ ถ้ายังไม่ได้ อาจเป็นเพราะโควต้าฐานข้อมูลของวันนี้เต็ม"})]}),d("button",{type:"button",class:"btn sm",onClick:n,children:"ลองใหม่"})]})}function xT({tab:n,onTab:e,userName:t,userPicture:r,tools:s,onAdd:i,children:a}){const c=(si.find(l=>l.key===n)||si[0]).label;return d("div",{class:"app",children:[d("a",{class:"skip",href:"#main",children:"ข้ามไปเนื้อหา"}),d("aside",{class:"side",children:[d("div",{class:"brand",children:[d(Ul,{size:34}),"Dept Money"]}),d("nav",{"aria-label":"เมนูหลัก",children:si.map(l=>d("button",{type:"button",class:`snav ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[d(Q,{name:l.icon}),l.label]},l.key))}),d("button",{type:"button",class:"btn side-add",onClick:i,children:[d(Q,{name:"plus"}),"บันทึกรายการ"]}),d("div",{class:"side-me",children:[d(Lc,{name:t,pictureUrl:r}),d("span",{children:t})]})]}),d("main",{class:"page",id:"main",children:[d("header",{class:"top",children:[d("div",{class:"brand mobile-only","aria-hidden":"true",children:[d(Ul,{size:30}),"Dept Money"]}),d("h1",{class:"page-title",children:c}),d("div",{class:"top-actions",children:[s,d(VT,{})]})]}),a]}),d("button",{type:"button",class:"fab",onClick:i,children:[d(Q,{name:"plus"}),"บันทึก"]}),d("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:d("div",{class:"tabbar-in",children:si.map(l=>d("button",{type:"button",class:`tab ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[d(Q,{name:l.icon}),l.label]},l.key))})})]})}const FT=Object.fromEntries(Wi.map(n=>[n.key,n.label])),Mp={food:"food",bills:"bolt",goods:"bag",travel:"car",fun:"film",other:"dots"},UT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],$T=["อา","จ","อ","พ","พฤ","ศ","ส"];function Vp({percent:n,of:e="รายรับ",sub:t="ใช้ไปแล้ว"}){const s=2*Math.PI*42,i=Math.max(0,Math.min(100,n));return d("div",{class:"ring",role:"img","aria-label":`ใช้ไปแล้ว ${n}% ของ${e}`,children:[d("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[d("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),d("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--pay)","stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${s*i/100} ${s}`,transform:"rotate(-90 50 50)"})]}),d("div",{class:"ring-t",children:[d("b",{class:"num",children:[n,"%"]}),d("span",{children:t})]})]})}function BT({m:n,bm:e,today:t,onBudget:r}){const s=e.status,i=s.leftSat<0;return d("section",{class:"card hero","aria-label":"สรุปเดือนเทียบงบ",children:[d("div",{class:"hero-l",children:[d("div",{class:"hero-top",children:[d(Cp,{month:n.month,today:t}),d("div",{children:[d("p",{class:"lbl",children:i?"ใช้เกินงบแล้ว":"งบเหลือเดือนนี้"}),d("p",{class:"big num",children:te(Math.round(Math.abs(s.leftSat)/100))})]})]}),d("div",{class:"chips",children:[d("button",{type:"button",class:"chip chip-btn",onClick:r,"aria-label":`งบ ${te(s.budgetSat/100)} แตะเพื่อแก้งบ`,children:["งบ ",d("b",{class:"num",children:te(s.budgetSat/100)})]}),d("span",{class:"chip",children:[d(Q,{name:"up",size:14,class:"pay"}),"ใช้ไป ",d("b",{class:"num",children:te(s.spentSat/100)})]}),n.incomeSat>0&&d("span",{class:"chip",children:[d(Q,{name:"down",size:14,class:"rcv"}),"รายรับ ",d("b",{class:"num",children:te(n.incomeSat/100)})]})]}),d("p",{class:"lbl hero-split",children:e.perDaySat>0?d(J,{children:["เหลืออีก ",e.daysLeft," วัน ใช้ได้วันละ ",d("b",{class:"num",children:te(e.perDaySat/100)})]}):d(J,{children:["ส่วนตัว ",d("span",{class:"num",children:te(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",d("span",{class:"num",children:te(n.groupShareSat/100)})]})})]}),d(Vp,{percent:s.percent,of:"งบ",sub:"ของงบ"})]})}function jT({m:n,onAddIncome:e,today:t="",bm:r=null,onBudget:s=null}){if(r&&r.status.set)return d(BT,{m:n,bm:r,today:t,onBudget:s});const i=n.incomeSat>0,a=i&&n.netSat<0,c=i?a?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",l=i?Math.abs(n.netSat)/100:n.spentSat/100,h=!i||a?"pay":"rcv";return d("section",{class:"card hero","aria-label":"สรุปเดือน",children:[d("div",{class:"hero-l",children:[d("div",{class:"hero-top",children:[d(Cp,{month:n.month,today:t}),d("div",{children:[d("p",{class:"lbl",children:c}),d("p",{class:`big num ${h}`,children:te(Math.round(l))})]})]}),d("div",{class:"chips",children:[d("span",{class:"chip",children:[d(Q,{name:"down",size:14,class:"rcv"}),"รายรับ ",d("b",{class:"num",children:te(n.incomeSat/100)})]}),d("span",{class:"chip",children:[d(Q,{name:"up",size:14,class:"pay"}),"ใช้ไป ",d("b",{class:"num",children:te(n.spentSat/100)})]})]}),d("p",{class:"lbl hero-split",children:["ส่วนตัว ",d("span",{class:"num",children:te(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",d("span",{class:"num",children:te(n.groupShareSat/100)})]}),s&&d("button",{type:"button",class:"set-budget",onClick:s,children:[d(Q,{name:"plus",size:14}),"ตั้งงบเดือนนี้"]})]}),i?d(Vp,{percent:n.spentPercent}):d("button",{type:"button",class:"hint",onClick:e,children:[d(Q,{name:"plus",size:20}),"เพิ่มรายรับ",d("small",{children:"เพื่อดูว่าเหลือใช้เท่าไร"})]})]})}function qT({m:n,profiles:e=[],month:t="",nowMonth:r=""}){const s=Object.fromEntries((e||[]).map(l=>[l.name,l.pictureUrl])),i=n.owedToMe.map(l=>l.name),a=n.iOwe.map(l=>l.name),c=t&&r&&t!==r?` (${$n(t)})`:"";return d("div",{class:"owe-grid",children:[d("a",{class:"card owe-card",href:"#clear","aria-label":`เพื่อนค้างฉัน ${te(n.owedTotal)}${i.length?" ได้แก่ "+i.join(", "):""}`,children:[d("span",{class:"owe-k",children:["เพื่อนค้างฉัน",c,d(Q,{name:"right",size:14})]}),d("b",{class:`owe-v num ${n.owedTotal>0?"rcv":""}`,children:te(n.owedTotal)}),i.length>0?d(Pa,{names:i,pictures:s}):d("span",{class:"owe-ok",children:[d(Q,{name:"check",size:14}),"ไม่มีใครค้าง"]})]}),d("a",{class:"card owe-card",href:"#clear","aria-label":`ฉันค้างเพื่อน ${te(n.iOweTotal)}${a.length?" ได้แก่ "+a.join(", "):""}`,children:[d("span",{class:"owe-k",children:["ฉันค้างเพื่อน",c,d(Q,{name:"right",size:14})]}),d("b",{class:`owe-v num ${n.iOweTotal>0?"pay":""}`,children:te(n.iOweTotal)}),a.length>0?d(Pa,{names:a,pictures:s}):d("span",{class:"owe-ok",children:[d(Q,{name:"check",size:14}),"ไม่ค้างใคร"]})]})]})}function zT({sched:n,me:e,onOpen:t,onCard:r,pictures:s={}}){const i=n&&n.upcoming||[];if(!i.length)return null;const[a,...c]=i,l=k=>te(k/100,{decimals:k%100?2:0}),h=k=>k.coverFor?l(k.totalSat):l(k.mySat),f=k=>`${Number(k.date.slice(8,10))} ${$n(k.date.slice(0,7))}`,_=k=>k.daysLeft===0?"วันนี้":`อีก ${k.daysLeft} วัน`,m=k=>k.kind==="card"&&r?()=>r(k.cardId):t,T=k=>k.kind==="card"?k.pending?"จ่ายบัตร (ยังไม่ตัดรอบ)":"ครบกำหนดจ่ายบัตร":"บิลถัดไป";return d("section",{class:"nb","aria-label":"บิลรายเดือนที่จะถึง",children:[d("button",{type:"button",class:"nb-main",onClick:m(a),"aria-label":`${T(a)} ${a.desc} ${h(a)} ${_(a)} แตะเพื่อเปิดปฏิทินบิล`,children:[a.daysLeft===0?d("span",{class:"nb-cal num","aria-hidden":"true",children:[d("span",{class:"band",children:"วันนี้"}),d("b",{children:Number(a.date.slice(8,10))}),d("small",{children:$n(a.date.slice(0,7))})]}):d("span",{class:"nb-count","aria-hidden":"true",children:[d("small",{children:"อีก"}),d("b",{class:"num",children:a.daysLeft}),d("small",{children:"วัน"})]}),d("span",{class:"nb-t",children:[d("small",{children:[T(a)," · ",a.daysLeft===0?a.kind==="card"?"วันนี้":"ตัดวันนี้":f(a)]}),d("b",{children:a.desc}),d("span",{class:"nb-amt num",children:[h(a),a.kind==="group"&&!a.coverFor&&d("em",{children:[" จาก ",l(a.totalSat)]})]}),a.kind==="group"?d("span",{class:"nb-flow",children:[d(MT,{payer:a.payer,people:a.names||[],pictures:s}),a.coverFor&&d("small",{children:"จ่ายแทน"})]}):d("small",{children:vT(a,e)})]}),d(Q,{name:a.kind==="card"?"card":"calendar",size:18,class:"nb-ic"})]}),c.length>0&&d("div",{class:"nb-up",children:c.slice(0,2).map(k=>d("button",{type:"button",class:"nb-mini",onClick:m(k),children:[d("span",{class:"lbl",children:[f(k)," · ",_(k)]}),d("b",{children:k.desc}),d("span",{class:"num",children:[h(k),k.kind==="group"&&!k.coverFor&&d("em",{children:[" จาก ",l(k.totalSat)]})]})]},k.id+k.date))})]})}const wh={near:"ใกล้เต็ม",over:"เกินงบ"};function WT({c:n,label:e}){const t=Math.max(n.spentSat>0?3:0,Math.min(100,n.percent));return d("li",{class:"cat",children:[d("span",{class:"ico big-ico",children:d(Q,{name:Mp[n.key]||"dots"})}),d("div",{class:"cat-b",children:[d("div",{class:"cat-r",children:[d("span",{children:[e,wh[n.level]&&d("span",{class:`lv-tag ${n.level}`,children:wh[n.level]})]}),d("span",{class:"num",children:[d("b",{children:te(n.spentSat/100)}),d("em",{children:["/ ",te(n.budgetSat/100)]})]})]}),d("div",{class:`bar lv ${n.level}`,role:"img","aria-label":`ใช้ไป ${n.percent}% ของงบ${e}`,children:d("i",{style:{width:`${t}%`}})}),d("div",{class:"cat-s num",children:[d("span",{children:n.leftSat>=0?`เหลือ ${te(n.leftSat/100)}`:`เกินงบ ${te(-n.leftSat/100)}`}),d("span",{children:[n.percent,"%"]})]})]})]},n.key)}function HT({cats:n,bm:e=null,onBudget:t=null}){const r=e&&e.status.set?e.status.cats:[],s=new Set(r.map(f=>f.key)),i=n.filter(f=>!s.has(f.key));if(n.length===0&&r.length===0)return null;const a=n[0],c=f=>FT[f]||f,l=r.length?`ตั้งงบไว้ ${r.length} หมวด`:a?`ส่วนใหญ่ไปกับ${a.label} ${a.percent}%`:"",h=i[0];return d("section",{class:"card",children:[d("div",{class:"sec-row",children:[d(Dp,{icon:"bag",title:"ใช้ไปกับอะไร",note:l}),e&&e.status.set&&t&&d("button",{type:"button",class:"link-btn",onClick:t,children:"แก้งบ"})]}),d("ul",{class:"cats",children:[r.map(f=>d(WT,{c:f,label:c(f.key)},f.key)),i.map(f=>d("li",{class:"cat",children:[d("span",{class:"ico big-ico",children:d(Q,{name:Mp[f.key]||"dots"})}),d("div",{class:"cat-b",children:[d("div",{class:"cat-r",children:[d("span",{children:f.label}),d("span",{class:"num",children:[d("b",{children:[f.percent,"%"]}),d("em",{children:te(f.satang/100)})]})]}),d("div",{class:"bar",children:d("i",{style:{width:`${Math.max(3,Math.round(f.percent/h.percent*100))}%`}})})]})]},f.key))]})]})}const Op=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n)),GT=n=>te(n/100,{decimals:2});function KT(n,e){if(!n||!e)return 0;const t=n/e;return t>.6?3:t>.25?2:1}function QT({month:n,days:e,onPick:t}){const[r,s]=n.split("-").map(Number),i=new Date(Date.UTC(r,s-1,1)).getUTCDay(),a=e.reduce((c,l)=>Math.max(c,l.satang),0);return d("div",{class:"sc-grid",role:"group","aria-label":`ปฏิทินรายจ่าย ${Oc(n)}`,children:[$T.map(c=>d("span",{class:"sc-dow","aria-hidden":"true",children:c},c)),Array.from({length:i},(c,l)=>d("span",{},`e${l}`)),e.map(c=>d("button",{type:"button",class:`sc-day h${KT(c.satang,a)} ${c.today?"today":""} ${c.satang>0&&c.satang===a?"peak":""}`,disabled:c.isFuture,onClick:()=>t(c.day),"aria-label":`วันที่ ${c.day} ใช้ไป ${c.satang>0?te(c.satang/100):"0 บาท"}`,children:[d("span",{class:"num",children:c.day}),c.satang>0?d("small",{class:"num",children:Op(c.satang/100)}):null]},c.day))]})}function XT({month:n,days:e,day:t,onDay:r}){const s=e.find(h=>h.day===t)||e[0];if(!s)return null;const[i,a]=n.split("-").map(Number),c=UT[new Date(Date.UTC(i,a-1,s.day)).getUTCDay()],l=e.filter(h=>!h.isFuture).length;return d("div",{class:"sc-day-view",children:[d("div",{class:"sc-day-hd",children:[d("span",{class:"dtile sm","aria-hidden":"true",children:[d("span",{class:"m",children:$n(n)}),d("span",{class:"d num",children:s.day})]}),d("div",{class:"grow",children:[d("b",{children:[c," ",s.day," ",$n(n)]}),d("span",{class:"lbl",children:[s.items.length," รายการ"]})]}),d("b",{class:"num pay",children:te(s.satang/100)})]}),d("div",{class:"sc-day-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"วันก่อนหน้า",disabled:s.day<=1,onClick:()=>r(s.day-1),children:d(Q,{name:"left",size:16})}),d("span",{class:"lbl",children:"เลื่อนดูวันอื่น"}),d("button",{type:"button",class:"icon-btn","aria-label":"วันถัดไป",disabled:s.day>=l,onClick:()=>r(s.day+1),children:d(Q,{name:"right",size:16})})]}),s.items.length===0?d("p",{class:"empty",children:[d(Q,{name:"check",size:16,class:"rcv"}),"ไม่มีรายจ่ายในวันนี้"]}):d("ul",{class:"plain",children:s.items.map((h,f)=>d("li",{class:"row",children:[d(Rm,{desc:h.desc,name:Im(h.icon),size:36,iconSize:18}),d("div",{class:"grow",children:[d("div",{class:"t",children:h.desc||"ไม่ระบุ"}),d("div",{class:"s",children:h.kind==="group"?"ส่วนของฉันในกลุ่ม":"ส่วนตัว"})]}),d("span",{class:"num pay",children:GT(h.satang)})]},f))})]})}function JT({year:n,series:e,since:t,nowMonth:r,onPick:s}){const i=Object.fromEntries((e||[]).map(l=>[l.month,l.spentSat])),a=Array.from({length:12},(l,h)=>{const f=`${n}-${String(h+1).padStart(2,"0")}`,_=f>=t&&f<=r;return{key:f,label:Cs[h],inRange:_,sat:_&&i[f]||0}}),c=a.reduce((l,h)=>Math.max(l,h.sat),0);return d("div",{class:"sc-year",children:a.map(l=>d("button",{type:"button",class:`sc-mon ${l.key===r?"cur":""}`,disabled:!l.inRange,onClick:()=>s(l.key),"aria-label":`${kp(l.key)} ใช้ไป ${l.inRange?te(l.sat/100):"ไม่มีข้อมูล"}`,children:[d("small",{children:l.label}),d("b",{class:"num",children:l.inRange?Op(l.sat/100):"-"}),d("i",{style:{width:`${l.inRange&&c>0?Math.max(4,Math.round(l.sat/c*100)):0}%`}})]},l.key))})}function YT({model:n,month:e,onMonth:t,since:r,nowMonth:s,series:i,onNeedYear:a=()=>{}}){const[c,l]=ee("month"),[h,f]=ee(1);_e(()=>{c==="year"&&a()},[c]);const _=n.calendarDays||[],m=Number(e.slice(0,4)),T=_.reduce((I,y)=>y.satang>(I?I.satang:0)?y:I,null),k=I=>{const y=ft(e,I);y>=r&&y<=s&&t(y)},D=I=>{const y=e.slice(5,7);let E=`${m+I}-${y}`;E<r?E=r:E>s&&(E=s),t(E)},S=r<`${m}-01`,M=`${m+1}-01`<=s,O=(i||[]).filter(I=>I.month.startsWith(String(m))).reduce((I,y)=>I+y.spentSat,0),$=(i||[]).filter(I=>I.month.startsWith(String(m))&&I.month>=r&&I.month<=s).length;function H(I){f(I),l("day")}function X(I){t(I),l("month")}function Z(I){if(I==="day"&&c!=="day"){const y=_.find(E=>E.today);f(y?y.day:T?T.day:1)}l(I)}return d("section",{class:"card sc","aria-label":"ปฏิทินรายจ่าย",children:[d(Dp,{icon:"calendar",title:"ใช้ไปเท่าไร",note:"รวมรายจ่ายส่วนตัวและส่วนของฉันในกลุ่ม"}),d("div",{class:"seg sc-seg",role:"group","aria-label":"ดูเป็น",children:[["day","วัน"],["month","เดือน"],["year","ปี"]].map(([I,y])=>d("button",{type:"button",class:c===I?"on":"","aria-pressed":c===I,onClick:()=>Z(I),children:y},I))}),c==="year"?d(J,{children:[d("div",{class:"sc-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"ปีก่อนหน้า",disabled:!S,onClick:()=>D(-1),children:d(Q,{name:"left",size:16})}),d("b",{class:"num",children:["ปี ",m+543]}),d("button",{type:"button",class:"icon-btn","aria-label":"ปีถัดไป",disabled:!M,onClick:()=>D(1),children:d(Q,{name:"right",size:16})})]}),i?d(J,{children:[d("div",{class:"sc-sum",children:[d("div",{children:[d("span",{class:"lbl",children:"ใช้ไปทั้งปี"}),d("b",{class:"num pay",children:te(O/100)})]}),d("div",{children:[d("span",{class:"lbl",children:"เฉลี่ยต่อเดือน"}),d("b",{class:"num",children:te($>0?O/100/$:0)})]})]}),d(JT,{year:m,series:i,since:r,nowMonth:s,onPick:X})]}):d("p",{class:"empty","aria-busy":"true",children:"กำลังโหลดข้อมูลทั้งปี"})]}):d(J,{children:[d("div",{class:"sc-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",disabled:e<=r,onClick:()=>k(-1),children:d(Q,{name:"left",size:16})}),d("b",{class:"num",children:Oc(e)}),d("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e>=s,onClick:()=>k(1),children:d(Q,{name:"right",size:16})})]}),c==="month"?d(J,{children:[d("div",{class:"sc-sum",children:[d("div",{children:[d("span",{class:"lbl",children:"ใช้ไปทั้งเดือน"}),d("b",{class:"num pay",children:te(n.spentSat/100)})]}),d("div",{children:[d("span",{class:"lbl",children:"เฉลี่ยต่อวัน"}),d("b",{class:"num",children:te(n.average)})]})]}),d(QT,{month:e,days:_,onPick:H}),T?d("p",{class:"lbl sc-foot",children:["ใช้มากสุดวันที่ ",T.day," (",te(T.satang/100),") แตะวันเพื่อดูรายการ"]}):d("p",{class:"lbl sc-foot",children:"ยังไม่มีรายจ่ายในเดือนนี้"})]}):d(XT,{month:e,days:_,day:h,onDay:f})]})]})}function ZT({model:n,series:e,month:t,onMonth:r,onAddIncome:s,profiles:i=[],today:a="",nowMonth:c="",since:l="",onNeedYear:h,bm:f=null,onBudget:_=null,bills:m=null,me:T="",onBills:k=()=>{},onCard:D=null}){const S=c||t;return d("div",{class:"home-grid",children:[d("div",{class:"col",children:[d(jT,{m:n,onAddIncome:s,today:a,bm:f,onBudget:_}),d(qT,{m:n,profiles:i,month:t,nowMonth:S}),t===S&&d(zT,{sched:m,me:T,onOpen:k,onCard:D,pictures:Object.fromEntries((i||[]).map(M=>[M.name,M.pictureUrl]))}),d(HT,{cats:n.categories,bm:f,onBudget:_})]}),d("div",{class:"col",children:d(YT,{model:n,month:t,onMonth:r,since:l||ft(S,-11),nowMonth:S,series:e,onNeedYear:h})})]})}const Eh=()=>St(()=>import("./add-BgOKbJS5.js"),__vite__mapDeps([0,1])),Th=()=>St(()=>import("./ClearPage-BhcIW8qi.js"),[]),Ih=()=>St(()=>import("./ListPage-B7nEdBpE.js"),__vite__mapDeps([2,1])),bh=()=>St(()=>import("./MePage-aAq8xKj9.js"),__vite__mapDeps([3,4,5])),Ah=()=>St(()=>import("./onboard-cCJcB-OQ.js"),[]),Xo=()=>St(()=>import("./plan-bd1a09FX.js"),[]),eI=()=>St(()=>import("./billcal-CRnI9_gy.js"),[]),Sh=()=>St(()=>import("./cards-BTUL1kk0.js"),[]),wt=gp();function Kr(){const n=new URLSearchParams(location.search).get("liff.state")||"";return(location.hash||(n.includes("#")?n.slice(n.indexOf("#")):"")).slice(1)}function Qr(n){const e=/^(edit|split|choose)=([A-Za-z0-9_-]{1,100})$/.exec(String(n||""));return e?{kind:e[1],id:e[2]}:null}function sr(n){const e=/^card=([A-Za-z0-9_-]{1,60})$/.exec(String(n||""));return e?e[1]:""}const Rh=hp().slice(0,7),kh=12,tI=["home","list","clear","me"],ii=n=>n==="bills"||n==="wallet"?"list":tI.includes(n)?n:"home";function nI(){const[n,e]=ee(wt?{state:"ok",user:wt}:{state:"loading"}),[t,r]=ee(()=>{const P=Kr();return Qr(P)?"list":sr(P)?"me":ii(P)}),[s,i]=ee(()=>Qr(Kr())),[a,c]=ee(null),[l,h]=ee(null),f=He(()=>hp(),[]),_=f.slice(0,7),m=He(()=>ft(_,-11),[_]),[T,k]=ee(_),[D,S]=ee(()=>wt?NE():null),[M,O]=ee(()=>{const P=wt?CE(wt.name,Rh):null;return P?{[Rh]:P}:{}}),[$,H]=ee(!1),[X,Z]=ee(null),[I,y]=ee(""),[E,b]=ee(null),[A,v]=ee(()=>wt&&Kr()==="add"?"menu":null),[w,ue]=ee(""),[Ce,Rt]=ee(0),[Ze,Gt]=ee(!1),[Kt,Ds]=ee(!1),[Cr,ht]=ee(!!wt),[fe,Dr]=ee(null),[ot,Eo]=ee(null),[Wn,Ns]=ee(!1),[Fe,Qt]=ee(null),[De,et]=ee(()=>{const P=sr(Kr());return P?{kind:"detail",id:P}:null}),[tt,at]=ee(null),vn=P=>{if(P.needLogin){Gt(!0);return}wt&&!P.needLink&&P.memberId!==wt.memberId&&(Ra(),O({}),S(null),Z(null)),P.needLink?e({state:"link",profile:P.profile,candidates:P.candidates,suggest:P.suggest||""}):!P.isAdmin&&(!P.realName||!Pp(P.promptpay))?e({state:"onboard",user:P}):e(x=>x.state==="ok"&&JSON.stringify(x.user)===JSON.stringify(P)?x:{state:"ok",user:P}),P.needLink||PE(P)},Hn=(P,x)=>O(q=>({...q,[P]:{...q[P]||{},...x}}));_e(()=>{SE().then(P=>{if(!P)return;vn(P);const x=Kr();if(x==="add"){v("menu"),r("home");try{history.replaceState(null,"",location.pathname+"#home")}catch{}}else Qr(x)?(i(Qr(x)),r("list")):sr(x)?(et({kind:"detail",id:sr(x)}),r("me")):x&&["home","list","bills","wallet","clear","me"].includes(x)&&r(ii(x))}).catch(P=>{wt?console.warn("signIn:",P.message):e({state:"error",message:P.message})})},[]),_e(()=>{_E(()=>Gt(!0))},[]),_e(()=>{const P=()=>{const x=location.hash.slice(1),q=Qr(x);q?(i(q),r("list")):sr(x)?(et({kind:"detail",id:sr(x)}),r("me")):r(ii(x))};return addEventListener("hashchange",P),()=>removeEventListener("hashchange",P)},[]),_e(()=>{n.state==="ok"&&ME().then(S).catch(()=>H(!0))},[n.state,Ce]),_e(()=>{n.state!=="ok"||!["home","list","clear","me"].includes(t)||X||oh().then(Z).catch(()=>H(!0))},[n.state,t,X]),_e(()=>{n.state==="ok"&&UE().then(Dr).catch(P=>{P.expired||console.warn("loadPlan:",P.message),Dr(x=>x||{budget:{total:0,cats:{}},months:{},goals:[]})})},[n.state,Ce]),_e(()=>{n.state!=="ok"||t!=="home"||YE().then(Eo).catch(P=>console.warn("loadBillSchedule:",P&&P.message))},[n.state,t,Ce]);const Ms=X&&n.state==="ok"?X.find(P=>P.id===n.user.memberId||(P.ids||[]).includes(n.user.memberId))||X.find(P=>P.name===n.user.name):null,Vs=!!(Ms&&Ms.cardAlerts);_e(()=>{if(!(n.state!=="ok"||!X||!["home","me"].includes(t))){if(!Vs){Qt({enabled:!1,cards:[]});return}ih().then(Qt).catch(P=>{P.expired||console.warn("loadCards:",P&&P.message)})}},[n.state,t,Ce,Vs,!!X]),_e(()=>{if(n.state==="ok")return OE(_,P=>{P.error?H(!0):Hn(_,P)})},[n.state,_]);const kt=He(()=>[...new Set([...Kt?yh(_,kh):[],T])].filter(P=>P!==_),[_,T,Kt]);_e(()=>{if(n.state!=="ok")return;const P=[_,...kt.filter(x=>!(M[x]&&M[x].wallet))];xE(P,_).then(x=>Object.entries(x).forEach(([q,Ct])=>Hn(q,{wallet:Ct}))).catch(x=>{x.expired||ue(x.message)})},[n.state,_,Ce,kt.filter(P=>!(M[P]&&M[P].wallet)).join("|")]),_e(()=>{n.state==="ok"&&kt.forEach(P=>{M[P]&&M[P].transactions||VE(P).then(x=>Hn(P,{transactions:x.transactions,settlements:x.settlements})).catch(()=>H(!0))})},[n.state,kt,kt.filter(P=>!(M[P]&&M[P].transactions)).join("|")]);const _t=M[_];_e(()=>{n.state==="ok"&&_t&&_t.transactions&&_t.settlements&&_t.wallet&&DE(n.user.name,_,_t)},[_t]),_e(()=>{if(n.state!=="ok")return;const x=(window.requestIdleCallback||(q=>setTimeout(q,1500)))(()=>{[Ih,Th,bh,Eh].forEach(q=>q().catch(()=>{}))});return()=>{window.cancelIdleCallback?window.cancelIdleCallback(x):clearTimeout(x)}},[n.state]),_e(()=>{if(w){const P=setTimeout(()=>ue(""),3200);return()=>clearTimeout(P)}},[w]);const Gn=P=>M[P]&&M[P].transactions&&M[P].settlements&&M[P].wallet,wn=n.state==="ok"&&D&&Gn(_)&&Gn(T);_e(()=>{wn&&ht(!0)},[wn]),_e(()=>{if(Cr)return;const P=setTimeout(()=>ht(!0),12e3);return()=>clearTimeout(P)},[Cr]);const Kn=wn&&kt.every(Gn),Y=He(()=>{if(!wn)return null;const P=Object.values(M);return{transactions:P.flatMap(x=>x.transactions||[]),settlements:P.flatMap(x=>x.settlements||[]),wallet:P.flatMap(x=>x.wallet||[])}},[wn,M]),Nr=He(()=>Y&&D?ST({me:n.user.name,members:D,transactions:Y.transactions}):[],[Y,n,D]),ge=He(()=>Y?gh({name:n.user.name,month:T,today:f,members:D,transactions:Y.transactions,settlements:Y.settlements,walletItems:Y.wallet}):null,[Y,n,D,T,f]),Ne=He(()=>Y&&Kt&&Kn?ET({name:n.user.name,months:yh(_,kh),transactions:Y.transactions,settlements:Y.settlements,walletItems:Y.wallet}):null,[Y,Kt,Kn,n,_]),En=He(()=>Y?TT({name:n.user.name,month:T,members:D,transactions:Y.transactions,settlements:Y.settlements}):null,[Y,n,D,T]),Xt=He(()=>Y?IT({name:n.user.name,month:T,walletItems:Y.wallet,transactions:Y.transactions,settlements:Y.settlements}):null,[Y,n,T]),Qn=He(()=>Y?T===_?ge:gh({name:n.user.name,month:_,today:f,members:D,transactions:Y.transactions,settlements:Y.settlements,walletItems:Y.wallet}):null,[Y,ge,T,_]),To=He(()=>fe&&ge?_h(fe,ge,f):null,[fe,ge,f]),Pt=He(()=>fe&&Qn?_h(fe,Qn,f):null,[fe,Qn,f]),Os=He(()=>ot&&n.state==="ok"?gT({me:n.user.name,month:_,today:f,group:ot.group,personal:ot.personal,cards:Fe&&Fe.enabled?Fe.cards:[]}):null,[ot,n,_,f,Fe]),Xn=(P,x)=>P.then(()=>ih({force:!0})).then(q=>(Qt(q),x&&ue(x),q)),Tn=De&&De.kind==="detail"&&Fe?Fe.cards.find(P=>P.id===De.id):null;_e(()=>{if(De&&De.kind==="detail"&&Fe&&!Tn&&(et(null),ue(Fe.enabled?"ไม่พบบัตรนี้ (อาจถูกลบไปแล้ว)":"ผู้ดูแลยังไม่ได้เปิดเตือนบัตรเครดิตให้คุณ")),De&&De.kind==="detail"&&Fe)try{history.replaceState(null,"",location.pathname+"#me")}catch{}},[De,Fe]);const Jn=(P,x)=>P.then(q=>(Dr(q),x&&ue(x),q)),Ls=He(()=>Y?bT({name:n.user.name,month:T,transactions:Y.transactions,search:I}):null,[Y,n,T,I]),yt=(P=T)=>{vp(P),P===_?Rt(x=>x+1):O(x=>{const q={...x};return delete q[P],q})},Yn=P=>{b({amount:P.amount,desc:P.desc,date:P.date,icon:P.icon,convertId:P.id,month:String(P.date).slice(0,7)}),v("bill")};_e(()=>{if(!s||!Y)return;let P=!0;const x=Y.wallet.find(q=>q.id===s.id);return(x?Promise.resolve(x):XE(s.id)).then(q=>{if(P){if(!q){ue("ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");return}s.kind==="split"&&q.type!=="income"?Yn(q):s.kind==="choose"&&q.type!=="income"?h(q):(r("list"),c({...q}))}}).catch(q=>{P&&!q.expired&&ue(q.message)}).finally(()=>{if(P){i(null);try{history.replaceState(null,"",location.pathname+"#list")}catch{}}}),()=>{P=!1}},[s,!!Y]);const Mr=()=>{Ra(),O({}),S(null),H(!1),Rt(P=>P+1)};if(n.state==="loading")return d("div",{class:"center",children:d(Wr,{label:"กำลังเข้าสู่ระบบ"})});if(n.state==="error")return d("div",{class:"center",children:[d(Wr,{}),d("p",{role:"alert",children:n.message}),d("button",{type:"button",class:"btn",onClick:()=>location.reload(),children:"ลองใหม่"})]});if(n.state==="link")return d(rt,{load:Ah,name:"LinkPage",profile:n.profile,candidates:n.candidates,suggest:n.suggest,onDone:vn,fallback:d("div",{class:"center",children:d(Wr,{})})});if(n.state==="onboard")return d(rt,{load:Ah,name:"OnboardPage",user:n.user,onDone:vn,fallback:d("div",{class:"center",children:d(Wr,{})})});if(!Cr&&!$)return d("div",{class:"center",children:d(Wr,{label:"กำลังโหลดข้อมูล"})});const In=P=>{location.hash=P,r(P),window.scrollTo(0,0)},vt=ii(t),Zn=vt!=="me";let Qe;return Zn&&$?Qe=d(LT,{onRetry:Mr}):vt==="home"?Qe=ge?d(ZT,{model:ge,series:Ne,month:T,onMonth:k,onAddIncome:()=>v("income"),profiles:X||[],today:f,nowMonth:_,since:m,onNeedYear:()=>Ds(!0),bm:To,onBudget:fe?()=>at({kind:"budget"}):null,bills:Os,me:n.user.name,onBills:()=>Ns(!0),onCard:P=>et({kind:"detail",id:P})}):d(Rn,{blocks:5}):vt==="list"?Qe=Ls&&Xt?d(rt,{load:Ih,name:"ListPage",fallback:d(Rn,{blocks:3}),pictures:Object.fromEntries((X||[]).map(P=>[P.name,P.pictureUrl])),bills:Ls,wallet:Xt,month:T,today:f,search:I,onSearch:y,me:n.user.name,isAdmin:n.user.isAdmin,version:Ce,openEdit:a,onSplit:Yn,onChanged:()=>yt(),onError:ue,onInfo:ue}):d(Rn,{blocks:3}):vt==="clear"?Qe=En&&X?d(rt,{load:Th,name:"ClearPage",fallback:d(Rn,{blocks:2}),model:En,profiles:X,month:T,back:Xt?{receivedSat:Xt.receivedBackSat,paidSat:Xt.paidBackSat}:null,onChanged:()=>yt(),isAdmin:n.user.isAdmin,adminName:n.user.name,onError:ue,onInfo:ue}):d(Rn,{blocks:2}):Qe=X?d(rt,{load:bh,name:"MePage",fallback:d(Rn,{blocks:2}),auth:n,profiles:X,onSaved:()=>Z(null),onRefresh:Mr,onMembers:()=>{oh().then(Z).catch(()=>Z(null)),Rt(P=>P+1)},onToast:ue,transactions:Y?Y.transactions:[],onDataChanged:P=>yt(P),bm:Pt,onBudget:()=>at({kind:"budget"}),onGoalAdd:()=>at({kind:"goal"}),onGoalMove:(P,x)=>at({kind:"move",goal:P,dir:x}),onGoalEdit:P=>at({kind:"goal",goal:P}),cards:Fe,onCardAdd:()=>et({kind:"add"}),onCardOpen:P=>et({kind:"detail",id:P.id})}):d(Rn,{blocks:2}),d(J,{children:[Ze&&d("div",{class:"login-banner",role:"alert",children:[d("span",{children:["เซสชัน LINE หมดอายุ ยังดูข้อมูลที่จำไว้ได้ แต่ข้อมูลกระเป๋าและการบันทึกต้องเข้าสู่ระบบใหม่",sh()&&d("small",{class:"diag",children:sh()})]}),d("button",{type:"button",class:"btn sm",onClick:yE,children:"เข้าสู่ระบบใหม่"})]}),d(xT,{tab:vt,onTab:In,userName:n.user.name,userPicture:n.user.pictureUrl,onAdd:()=>v("menu"),tools:Zn&&d(CT,{month:T,onChange:k,min:m,max:_}),children:d(PT,{page:vt,children:Qe})}),A&&d(rt,{load:Eh,name:"AddSheet",initial:A==="income"?"income":A==="bill"?"bill":null,prefill:E,convertWallet:ah,today:f,members:D||[],me:n.user.name,suggested:Nr,save:QE,saveBill:ch,onClose:()=>{v(null),b(null)},onSaved:(P,x=[])=>{ue(P),x.forEach(q=>yt(q)),Rt(q=>q+1)}}),l&&d(rt,{load:()=>St(()=>import("./editbill-CPV4QBGp.js"),__vite__mapDeps([6,1])),name:"ChooseSheet",item:l,members:D||[],me:n.user.name,suggested:Nr,today:f,saveBill:ch,removeWallet:ah,onClose:()=>h(null),onConfirmed:()=>yt(String(l.date).slice(0,7)),onDone:(P,x=[])=>{ue(P),x.forEach(q=>yt(q)),Rt(q=>q+1)},onMoreSplit:P=>{h(null),Yn(P)}}),De&&(De.kind==="add"||De.kind==="edit")&&d(rt,{load:Sh,name:"CardEditSheet",card:De.card||null,onClose:()=>et(null),onSave:P=>Xn(HE(P),P.id?"แก้บัตรแล้ว":"เพิ่มบัตรแล้ว"),onDelete:P=>Xn(GE(P),"ลบบัตรแล้ว")}),Tn&&d(rt,{load:Sh,name:"CardDetailSheet",card:Tn,onClose:()=>et(null),onEdit:P=>et({kind:"edit",card:P}),onPaid:(P,x,q)=>Xn(KE(P,x,q),x?"จ่ายแล้ว ไม่เตือนรอบนี้อีก":"ยกเลิก จ่ายแล้ว").catch(Ct=>ue(Ct.message))}),Wn&&ot&&d(rt,{load:eI,name:"BillCalendarSheet",data:{...ot,cards:Fe&&Fe.enabled?Fe.cards:[]},pictures:Object.fromEntries((X||[]).map(P=>[P.name,P.pictureUrl])),me:n.user.name,today:f,onClose:()=>Ns(!1)}),tt&&tt.kind==="budget"&&d(rt,{load:Xo,name:"BudgetSheet",plan:fe,nowMonth:_,suggestSat:Pt?Pt.suggestSat:0,onClose:()=>at(null),onSave:P=>Jn($E(P),P.clear?"กลับไปใช้งบปกติแล้ว":"บันทึกงบแล้ว")}),tt&&tt.kind==="move"&&d(rt,{load:Xo,name:"GoalMoveSheet",goal:tt.goal,dir:tt.dir,month:_,onClose:()=>at(null),onMove:(P,x,q)=>Jn(jE(P,x,q),q==="out"?"ถอนออกจากเป้าแล้ว":"เก็บเข้าเป้าแล้ว")}),tt&&tt.kind==="goal"&&d(rt,{load:Xo,name:"GoalEditSheet",goal:tt.goal||null,nowMonth:_,onClose:()=>at(null),onSave:P=>Jn(BE(P),P.id?"แก้เป้าแล้ว":"เพิ่มเป้าแล้ว"),onDelete:P=>Jn(qE(P),"ลบเป้าแล้ว")}),w&&d("div",{class:"toast",role:"status",children:w})]})}pm(d(nI,{}),document.getElementById("app"));export{oI as $,Lc as A,FI as B,$n as C,jI as D,Im as E,eT as F,NT as G,ah as H,Q as I,CI as J,gI as K,rt as L,PI as M,JE as N,FE as O,MT as P,yI as Q,dI as R,Np as S,He as T,zI as U,SI as V,MI as W,AI as X,DI as Y,Ul as Z,St as _,Rm as a,ft as a0,iT as a1,VI as a2,OI as a3,wp as a4,uT as a5,gT as a6,Oc as a7,vT as a8,Qo as a9,_T as aa,lI as ab,ZE as ac,_I as ad,hI as ae,BI as af,kI as ag,vI as ah,pI as ai,EI as aj,wI as ak,fI as al,aI as am,cI as an,Em as b,te as c,ee as d,RT as e,$I as f,UI as g,Cp as h,hp as i,J as j,Dp as k,qI as l,kp as m,bI as n,yh as o,II as p,TI as q,RI as r,xI as s,LI as t,d as u,Pp as v,NI as w,_e as x,mI as y,uI as z};
