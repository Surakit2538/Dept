const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-C_TXQHKQ.js","assets/cats-CQn2GfKp.js","assets/ListPage-CKR__2Ii.js","assets/MePage-CxzvKMFR.js","assets/plan-DUMwjeZy.js","assets/editbill-CrlEjSG0.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Yp="modulepreload",Zp=function(n){return"/app/"+n},gl={},fn=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=Zp(l),l in gl)return;gl[l]=!0;const h=l.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":Yp,h||(_.as="script"),_.crossOrigin="",_.href=l,c&&_.setAttribute("nonce",c),document.head.appendChild(_),h)return new Promise((m,I)=>{_.addEventListener("load",m),_.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Li,ue,vh,Jt,_l,wh,Eh,So,Qs,$r,Th,va,$o,jo,li={},ui=[],em=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,xi=Array.isArray;function It(n,e){for(var t in e)n[t]=e[t];return n}function wa(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function tm(n,e,t){var r,s,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?Li.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return Xs(n,a,r,s,null)}function Xs(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++vh,__i:-1,__u:0};return s==null&&ue.vnode!=null&&ue.vnode(i),i}function Q(n){return n.children}function Js(n,e){this.props=n,this.context=e}function Rn(n,e){if(e==null)return n.__?Rn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Rn(n):null}function nm(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],s=[],i=It({},e);i.__v=e.__v+1,ue.vnode&&ue.vnode(i),Ea(n.__P,i,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Rn(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,Rh(r,i,s),e.__e=e.__=null,i.__e!=t&&Ih(i)}}function Ih(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Ih(n)}function yl(n){(!n.__d&&(n.__d=!0)&&Jt.push(n)&&!hi.__r++||_l!=ue.debounceRendering)&&((_l=ue.debounceRendering)||wh)(hi)}function hi(){try{for(var n,e=1;Jt.length;)Jt.length>e&&Jt.sort(Eh),n=Jt.shift(),e=Jt.length,nm(n)}finally{Jt.length=hi.__r=0}}function bh(n,e,t,r,s,i,a,c,l,h,p){var _,m,I,k,C,N,O=r&&r.__k||ui,L=e.length;for(l=rm(t,e,O,l,L),_=0;_<L;_++)(I=t.__k[_])!=null&&(m=I.__i!=-1&&O[I.__i]||li,I.__i=_,N=Ea(n,I,m,s,i,a,c,l,h,p),k=I.__e,I.ref&&m.ref!=I.ref&&(m.ref&&Ta(m.ref,null,I),p.push(I.ref,I.__c||k,I)),C==null&&k!=null&&(C=k),4&I.__u?(l=Ah(I,l,n),m.__e&&(m.__e=null)):typeof I.type=="function"&&N!==void 0?l=N:k&&(l=k.nextSibling),I.__u&=-7);return t.__e=C,l}function rm(n,e,t,r,s){var i,a,c,l,h,p=t.length,_=p,m=0;for(n.__k=new Array(s),i=0;i<s;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[i]=Xs(null,a,null,null,null):xi(a)?a=n.__k[i]=Xs(Q,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[i]=Xs(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[i]=a,l=i+m,a.__=n,a.__b=n.__b+1,c=null,(h=a.__i=sm(a,t,l,_))!=-1&&(_--,(c=t[h])&&(c.__u|=2)),c==null||c.__v==null?(h==-1&&(s>p?m--:s<p&&m++),typeof a.type!="function"&&(a.__u|=4)):h!=l&&(h==l-1?m--:h==l+1?m++:(h>l?m--:m++,a.__u|=4))):n.__k[i]=null;if(_)for(i=0;i<p;i++)(c=t[i])!=null&&!(2&c.__u)&&(c.__e==r&&(r=Rn(c)),Ph(c,c));return r}function Ah(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=Ah(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Rn(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function sm(n,e,t,r){var s,i,a,c=n.key,l=n.type,h=e[t],p=h!=null&&(2&h.__u)==0;if(h===null&&c==null||p&&c==h.key&&l==h.type)return t;if(r>(p?1:0)){for(s=t-1,i=t+1;s>=0||i<e.length;)if((h=e[a=s>=0?s--:i++])!=null&&!(2&h.__u)&&c==h.key&&l==h.type)return a}return-1}function vl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||em.test(e)?t:t+"px"}function Us(n,e,t,r,s){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||vl(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||vl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Th,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t[$r]=r[$r]:(t[$r]=va,n.addEventListener(e,i?jo:$o,i)):n.removeEventListener(e,i?jo:$o,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function wl(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[Qs]==null)e[Qs]=va++;else if(e[Qs]<t[$r])return;return t(ue.event?ue.event(e):e)}}}function Ea(n,e,t,r,s,i,a,c,l,h){var p,_,m,I,k,C,N,O,L,$,K,ee,Y,T,y,E,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[c=e.__e=t.__e]),(p=ue.__b)&&p(e);e:if(typeof b=="function"){_=a.length;try{if(L=e.props,$=b.prototype&&b.prototype.render,K=(p=b.contextType)&&r[p.__c],ee=p?K?K.props.value:p.__:r,t.__c?O=(m=e.__c=t.__c).__=m.__E:($?e.__c=m=new b(L,ee):(e.__c=m=new Js(L,ee),m.constructor=b,m.render=om),K&&K.sub(m),m.state||(m.state={}),m.__n=r,I=m.__d=!0,m.__h=[],m._sb=[]),$&&m.__s==null&&(m.__s=m.state),$&&b.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=It({},m.__s)),It(m.__s,b.getDerivedStateFromProps(L,m.__s))),k=m.props,C=m.state,m.__v=e,I)$&&b.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),$&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if($&&b.getDerivedStateFromProps==null&&L!==k&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(L,ee),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(L,m.__s,ee)===!1){e.__v!=t.__v&&(m.props=L,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),ui.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m),c=Rn(t);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(L,m.__s,ee),$&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(k,C,N)})}if(m.context=ee,m.props=L,m.__P=n,m.__e=!1,Y=ue.__r,T=0,$)m.state=m.__s,m.__d=!1,Y&&Y(e),p=m.render(m.props,m.state,m.context),ui.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,Y&&Y(e),p=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++T<25);m.state=m.__s,m.getChildContext!=null&&(r=It(It({},r),m.getChildContext())),$&&!I&&m.getSnapshotBeforeUpdate!=null&&(N=m.getSnapshotBeforeUpdate(k,C)),y=p!=null&&p.type===Q&&p.key==null?kh(p.props.children):p,c=bh(n,xi(y)?y:[y],e,t,r,s,i,a,c,l,h),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),O&&(m.__E=m.__=null)}catch(A){if(a.length=_,e.__v=null,l||i!=null){if(A.then){for(e.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i!=null&&(i[i.indexOf(c)]=null),e.__e=c}else if(i!=null)for(E=i.length;E--;)wa(i[E])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),A.then||Sh(e),ue.__e(A,e,t)}}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=im(t.__e,e,t,r,s,i,a,l,h);return(p=ue.diffed)&&p(e),128&e.__u?void 0:c}function Sh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Sh))}function Rh(n,e,t){for(var r=0;r<t.length;r++)Ta(t[r],t[++r],t[++r]);ue.__c&&ue.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){ue.__e(i,s.__v)}})}function kh(n){return typeof n!="object"||n==null||n.__b>0?n:xi(n)?n.map(kh):n.constructor!==void 0?null:It({},n)}function im(n,e,t,r,s,i,a,c,l){var h,p,_,m,I,k,C,N=t.props||li,O=e.props,L=e.type;if(L=="svg"?s="http://www.w3.org/2000/svg":L=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(h=0;h<i.length;h++)if((I=i[h])&&"setAttribute"in I==!!L&&(L?I.localName==L:I.nodeType==3)){n=I,i[h]=null;break}}if(n==null){if(L==null)return document.createTextNode(O);n=document.createElementNS(s,L,O.is&&O),c&&(ue.__m&&ue.__m(e,i),c=!1),i=null}if(L==null)N===O||c&&n.data==O||(n.data=O);else{if(i=L=="textarea"&&O.defaultValue!=null?null:i&&Li.call(n.childNodes),!c&&i!=null)for(N={},h=0;h<n.attributes.length;h++)N[(I=n.attributes[h]).name]=I.value;for(h in N)I=N[h],h=="dangerouslySetInnerHTML"?_=I:h=="children"||h in O||h=="value"&&"defaultValue"in O||h=="checked"&&"defaultChecked"in O||Us(n,h,null,I,s);for(h in O)I=O[h],h=="children"?m=I:h=="dangerouslySetInnerHTML"?p=I:h=="value"?k=I:h=="checked"?C=I:c&&typeof I!="function"||N[h]===I||Us(n,h,I,N[h],s);if(p)c||_&&(p.__html==_.__html||p.__html==n.innerHTML)||(n.innerHTML=p.__html),e.__k=[];else if(_&&(n.innerHTML=""),bh(e.type=="template"?n.content:n,xi(m)?m:[m],e,t,r,L=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:t.__k&&Rn(t,0),c,l),i!=null)for(h=i.length;h--;)wa(i[h]);c&&L!="textarea"||(h="value",L=="progress"&&k==null?n.removeAttribute("value"):k!=null&&(k!==n[h]||L=="progress"&&!k||L=="option"&&k!=N[h])&&Us(n,h,k,N[h],s),h="checked",C!=null&&C!=n[h]&&Us(n,h,C,N[h],s))}return n}function Ta(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){ue.__e(s,t)}}function Ph(n,e,t){var r,s;if(ue.unmount&&ue.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||Ta(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){ue.__e(i,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&Ph(r[s],e,t||typeof n.type!="function");t||wa(n.__e),n.__c=n.__=n.__e=void 0}function om(n,e,t){return this.constructor(n,t)}function am(n,e,t){var r,s,i,a;e==document&&(e=document.documentElement),ue.__&&ue.__(n,e),s=(r=!1)?null:e.__k,i=[],a=[],Ea(e,n=e.__k=tm(Q,null,[n]),s||li,li,e.namespaceURI,s?null:e.firstChild?Li.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,a),Rh(i,n,a),n.props.children=null}Li=ui.slice,ue={__e:function(n,e,t,r){for(var s,i,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},vh=0,Js.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=It({},this.state),typeof n=="function"&&(n=n(It({},t),this.props)),n&&It(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),yl(this))},Js.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),yl(this))},Js.prototype.render=Q,Jt=[],wh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Eh=function(n,e){return n.__v.__b-e.__v.__b},hi.__r=0,So=Math.random().toString(8),Qs="__d"+So,$r="__a"+So,Th=/(PointerCapture)$|Capture$/i,va=0,$o=wl(!1),jo=wl(!0);var cm=0;function d(n,e,t,r,s,i){e||(e={});var a,c,l=e;if("ref"in l)for(c in l={},e)c=="ref"?a=e[c]:l[c]=e[c];var h={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--cm,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)l[c]===void 0&&(l[c]=a[c]);return ue.vnode&&ue.vnode(h),h}var Gr,we,Ro,El,di=0,Ch=[],Ie=ue,Tl=Ie.__b,Il=Ie.__r,bl=Ie.diffed,Al=Ie.__c,Sl=Ie.unmount,Rl=Ie.__;function Ia(n,e){Ie.__h&&Ie.__h(we,n,di||e),di=0;var t=we.__H||(we.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function ie(n){return di=1,lm(Vh,n)}function lm(n,e,t){var r=Ia(Gr++,2);if(r.t=n,!r.__c&&(r.__=[Vh(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,c);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=we,!we.__f)){var s=function(c,l,h){if(!r.__c.__H)return!0;var p=!1,_=r.__c.props!==c;if(r.__c.__H.__.some(function(I){if(I.__N){p=!0;var k=I.__[0];I.__=I.__N,I.__N=void 0,k!==I.__[0]&&(_=!0)}}),i){var m=i.call(this,c,l,h);return p?m||_:m}return!p||_};we.__f=!0;var i=we.shouldComponentUpdate,a=we.componentWillUpdate;we.componentWillUpdate=function(c,l,h){if(this.__e){var p=i;i=void 0,s(c,l,h),i=p}a&&a.call(this,c,l,h)},we.shouldComponentUpdate=s}return r.__N||r.__}function ye(n,e){var t=Ia(Gr++,3);!Ie.__s&&Dh(t.__H,e)&&(t.__=n,t.u=e,we.__H.__h.push(t))}function Nh(n){return di=5,Ge(function(){return{current:n}},[])}function Ge(n,e){var t=Ia(Gr++,7);return Dh(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function um(){for(var n;n=Ch.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(Ys),e.__h.some(qo),e.__h=[]}catch(t){e.__h=[],Ie.__e(t,n.__v)}}}Ie.__b=function(n){we=null,Tl&&Tl(n)},Ie.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Rl&&Rl(n,e)},Ie.__r=function(n){Il&&Il(n),Gr=0;var e=(we=n.__c).__H;e&&(Ro===we?(e.__h=[],we.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(Ys),e.__h.some(qo),e.__h=[],Gr=0)),Ro=we},Ie.diffed=function(n){bl&&bl(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ch.push(e)!==1&&El===Ie.requestAnimationFrame||((El=Ie.requestAnimationFrame)||hm)(um)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Ro=we=null},Ie.__c=function(n,e){e.some(function(t){try{t.__h.some(Ys),t.__h=t.__h.filter(function(r){return!r.__||qo(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Ie.__e(r,t.__v)}}),Al&&Al(n,e)},Ie.unmount=function(n){Sl&&Sl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{Ys(r)}catch(s){e=s}}),t.__H=void 0,e&&Ie.__e(e,t.__v))};var kl=typeof requestAnimationFrame=="function";function hm(n){var e,t=function(){clearTimeout(r),kl&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);kl&&(e=requestAnimationFrame(t))}function Ys(n){var e=we,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),we=e}function qo(n){var e=we;n.__c=n.__(),we=e}function Dh(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Vh(n,e){return typeof e=="function"?e(n):e}const Mh={netflix:"E50914",spotify:"1DB954",youtube:"FF0000",grab:"00B14F",shopee:"EE4D2D",line:"00C300",starbucks:"006241",mcdonalds:"FBC817",kfc:"F40027",apple:"000000",applemusic:"FA243C",google:"4285F4",googlecloud:"4285F4",openai:"412991",anthropic:"191919",shell:"FFD500",foodpanda:"D70F64",airbnb:"FF5A5F",icloud:"3693F3",amazon:"FF9900",hbo:"000000",tiktok:"000000",instagram:"E4405F",facebook:"0866FF",whatsapp:"25D366",telegram:"26A5E4",discord:"5865F2",twitch:"9146FF",steam:"000000",playstation:"003791",nintendoswitch:"E60012",roblox:"000000",uber:"000000",airasia:"FF0000",expedia:"191E3B",tripadvisor:"34E0A1",ikea:"0058A3",uniqlo:"FF0000",handm:"E50010",zara:"000000",nike:"111111",adidas:"000000",samsung:"1428A0",adobe:"FF0000",dropbox:"0061FF",github:"181717",canva:"00C4CC",notion:"000000",figma:"F24E1E",zoom:"0B5CFF",slack:"4A154B",paypal:"003087",aliexpress:"FF4747",googledrive:"4285F4",googleplay:"414141",soundcloud:"FF5500",tidal:"000000",linkedin:"0A66C2",patreon:"000000",youtubemusic:"FF0000",toyota:"EB0A1E",honda:"E40521",mazda:"101010",nissan:"C3002F",mitsubishi:"E60012",bmw:"0066B1",mercedes:"242424",tesla:"CC0000",suzuki:"E30613"},dm=n=>{const e=parseInt(n.slice(1),16);return .299*(e>>16&255)+.587*(e>>8&255)+.114*(e&255)>170},Oh=n=>dm(n)?"#111111":"#ffffff",F=(n,e,t,r={})=>{const s=r.bg||"#"+Mh[t];return{key:n,re:e,si:t,bg:s,fg:r.fg||Oh(s),...r}},Dr=(n,e,t)=>F(n,e,t,{bg:"#ffffff",fg:"#"+Mh[t],ring:!0}),et=(n,e,t,r={})=>({key:n,re:e,bg:t,fg:r.fg||Oh(t),...r}),fm=[F("netflix",/netflix|เน็ตฟลิกซ์/,"netflix",{bg:"#000000",fg:"#e50914"}),F("youtubemusic",/youtube ?music|ยูทูบ ?มิวสิค/,"youtubemusic"),Dr("youtube",/youtube|ยูทูบ/,"youtube"),F("spotify",/spotify|สปอติฟาย/,"spotify",{bg:"#191414",fg:"#1ed760"}),et("disney",/disney|ดิสนีย์/,"#113ccf"),F("hbo",/\bhbo\b/,"hbo"),F("applemusic",/apple ?music/,"applemusic"),F("icloud",/icloud/,"icloud"),F("apple",/apple|itunes/,"apple"),Dr("googlecloud",/google ?cloud/,"googlecloud"),Dr("googledrive",/google ?(drive|one)/,"googledrive"),Dr("googleplay",/google ?play/,"googleplay"),Dr("google",/google|กูเกิล/,"google"),F("chatgpt",/chatgpt|openai/,"openai",{bg:"#10a37f",fg:"#ffffff"}),F("claude",/claude|anthropic/,"anthropic",{bg:"#d97757",fg:"#ffffff"}),et("lineman",/line ?man|ไลน์แมน|lpth\*pf|\blm_/,"#06c755"),F("line",/\bline\b|ไลน์/,"line",{bg:"#06c755",fg:"#ffffff"}),F("grab",/\bgrab|แกร็บ/,"grab"),F("uber",/\buber\b/,"uber"),F("foodpanda",/foodpanda|ฟู้ดแพนด้า/,"foodpanda"),et("seven",/7-?11|7-eleven|seven ?eleven|เซเว่น/,"#00a650"),et("cafeamazon",/caf[eé] ?amazon|คาเฟ่ ?อเมซอน|อเมซอน/,"#00693c"),F("amazon",/\bamazon\b/,"amazon",{bg:"#232f3e",fg:"#ff9900"}),F("starbucks",/starbucks|สตาร์บัค/,"starbucks",{round:!0}),F("shopee",/shopee|ช้อปปี้/,"shopee"),et("lazada",/lazada|ลาซาด้า/,"#0f146d"),F("aliexpress",/aliexpress|อาลีเอ็กซ์/,"aliexpress"),F("mcdonald",/mcdonald|แมคโดนัลด์|แมค ?ดี/,"mcdonalds",{bg:"#da291c",fg:"#ffc72c"}),F("kfc",/\bkfc|เคเอฟซี/,"kfc"),et("ais",/\bais\b|เอไอเอส/,"#8dc63f"),et("true",/\btrue\b|ทรูมูฟ|ทรูออนไลน์/,"#ee2e24"),et("3bb",/3bb/,"#0055a5"),et("ptt",/\bptt\b|ปตท/,"#00439c"),F("shell",/\bshell\b|เชลล์/,"shell",{bg:"#ffd500",fg:"#dd1d21"}),et("lotus",/lotus|โลตัส/,"#00a651"),et("bigc",/big ?c\b|บิ๊กซี/,"#ed1c24"),et("makro",/makro|แม็คโคร|แมคโคร/,"#003d8f"),F("airasia",/airasia|แอร์เอเชีย/,"airasia"),F("airbnb",/airbnb/,"airbnb"),F("expedia",/expedia/,"expedia"),F("tripadvisor",/tripadvisor/,"tripadvisor"),F("tiktok",/tiktok|ติ๊กต็อก/,"tiktok"),F("instagram",/instagram/,"instagram"),F("facebook",/facebook|เฟซบุ๊ก/,"facebook"),F("whatsapp",/whatsapp/,"whatsapp"),F("telegram",/telegram/,"telegram"),F("discord",/discord/,"discord"),F("twitch",/twitch/,"twitch"),F("steam",/steam|สตีม/,"steam"),F("playstation",/playstation|เพลย์สเตชัน|\bpsn\b/,"playstation"),F("nintendo",/nintendo|นินเทนโด/,"nintendoswitch"),F("roblox",/roblox/,"roblox"),F("soundcloud",/soundcloud/,"soundcloud"),F("tidal",/\btidal\b/,"tidal"),F("linkedin",/linkedin/,"linkedin"),F("patreon",/patreon/,"patreon"),F("paypal",/paypal/,"paypal"),F("github",/github/,"github"),F("adobe",/adobe/,"adobe"),F("dropbox",/dropbox/,"dropbox"),F("canva",/canva/,"canva"),F("notion",/notion/,"notion"),F("figma",/figma/,"figma"),F("zoom",/\bzoom\b/,"zoom"),F("slack",/\bslack\b/,"slack"),F("samsung",/samsung|ซัมซุง/,"samsung"),F("ikea",/ikea|อิเกีย/,"ikea"),F("uniqlo",/uniqlo|ยูนิโคล่/,"uniqlo"),F("handm",/h&m/,"handm"),F("zara",/\bzara\b/,"zara"),F("nike",/\bnike\b|ไนกี้/,"nike"),F("adidas",/adidas|อาดิดาส/,"adidas"),F("toyota",/toyota|โตโยต้า|โตโยตา/,"toyota"),F("honda",/honda|ฮอนด้า|civic|ซีวิค/,"honda"),F("mazda",/mazda|มาสด้า/,"mazda"),F("nissan",/nissan|นิสสัน/,"nissan"),F("mitsubishi",/mitsubishi|มิตซู/,"mitsubishi"),F("bmw",/\bbmw\b/,"bmw"),F("mercedes",/mercedes|benz|เบนซ์/,"mercedes"),F("tesla",/tesla|เทสล่า/,"tesla"),F("suzuki",/suzuki|ซูซูกิ/,"suzuki")];function pm(n){const e=String(n||"").toLowerCase();return e.trim()&&fm.find(t=>t.re.test(e))||null}const Pl={home:d(Q,{children:[d("path",{d:"M3.5 11 12 4l8.5 7"}),d("path",{d:"M5.5 9.8V20h13V9.8"}),d("path",{d:"M10 20v-5.5h4V20"})]}),bill:d(Q,{children:[d("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),d("path",{d:"M9 8.5h6M9 12h6"})]}),swap:d("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:d(Q,{children:[d("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),d("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),d("path",{d:"M15.5 13.8h2.2"})]}),user:d(Q,{children:[d("circle",{cx:"12",cy:"8.5",r:"3.6"}),d("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:d("path",{d:"M12 5v14M5 12h14"}),check:d("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:d(Q,{children:[d("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),d("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),d("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),d("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:d("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:d("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:d("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:d("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:d("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:d(Q,{children:[d("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),d("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:d(Q,{children:[d("path",{d:"M5.5 8h13l-1 11.5h-11z"}),d("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:d("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:d(Q,{children:[d("circle",{cx:"6",cy:"12",r:"1.1"}),d("circle",{cx:"12",cy:"12",r:"1.1"}),d("circle",{cx:"18",cy:"12",r:"1.1"})]}),people:d(Q,{children:[d("circle",{cx:"9",cy:"8.5",r:"3.2"}),d("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),d("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:d(Q,{children:[d("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),d("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),bell:d(Q,{children:[d("path",{d:"M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"}),d("path",{d:"M10 20.5h4"})]}),trash:d(Q,{children:[d("path",{d:"M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7"}),d("path",{d:"M10.5 11v5M13.5 11v5"})]}),alert:d(Q,{children:[d("path",{d:"M12 4.5 3.5 19h17z"}),d("path",{d:"M12 10v4.5M12 17h.01"})]}),chart:d("path",{d:"M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5"}),sliders:d(Q,{children:[d("path",{d:"M5 7h9M18 7h1M5 17h1M10 17h9"}),d("circle",{cx:"16",cy:"7",r:"2"}),d("circle",{cx:"8",cy:"17",r:"2"})]}),coffee:d(Q,{children:[d("path",{d:"M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z"}),d("path",{d:"M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4.5v2M12 4.5v2"})]}),key:d(Q,{children:[d("circle",{cx:"8.5",cy:"14.5",r:"3.5"}),d("path",{d:"M11 12 19 4.5M16 7.5l2.5 2.5M14 9.5l1.8 1.8"})]}),film:d(Q,{children:[d("rect",{x:"4",y:"5",width:"16",height:"14",rx:"2"}),d("path",{d:"M8 5v14M16 5v14M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4"})]}),pill:d(Q,{children:[d("rect",{x:"3.5",y:"9",width:"17",height:"6.5",rx:"3.25",transform:"rotate(-40 12 12)"}),d("path",{d:"m9.4 9.4 5.2 5.2"})]}),plane:d("path",{d:"M3.5 13.5 20.5 5l-4 14-4.5-4.5-3 3v-4.5zM11.5 14.5 20.5 5"}),gift:d(Q,{children:[d("rect",{x:"4",y:"9",width:"16",height:"4",rx:"1"}),d("path",{d:"M5.5 13v6.5h13V13M12 9v10.5M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9zM12 9c1-3.5 5-3.5 5-1.2 0 1.2-2 1.2-5 1.2z"})]}),paw:d(Q,{children:[d("circle",{cx:"7",cy:"10",r:"1.6"}),d("circle",{cx:"11",cy:"6.8",r:"1.6"}),d("circle",{cx:"15.5",cy:"7.5",r:"1.6"}),d("circle",{cx:"18",cy:"11.5",r:"1.6"}),d("path",{d:"M8 17.5c0-2.5 2.2-4.5 4.5-4.5s4.5 2 4 4.2c-.4 1.8-2 2.3-4 2.3S8 19.5 8 17.5z"})]}),search:d(Q,{children:[d("circle",{cx:"11",cy:"11",r:"6"}),d("path",{d:"m16 16 4 4"})]}),pencil:d("path",{d:"M5 19l1-4L16.5 4.5a2 2 0 0 1 3 3L9 18zM14.5 6.5l3 3"}),close:d("path",{d:"M6 6l12 12M18 6 6 18"}),copy:d(Q,{children:[d("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),d("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),play:d("polygon",{points:"8 5 19 12 8 19",style:"fill:currentColor"}),shield:d("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),mobile:d(Q,{children:[d("rect",{x:"7",y:"3",width:"10",height:"18",rx:"2.5"}),d("path",{d:"M11 17.5h2"})]}),external:d(Q,{children:d("path",{d:"M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"})}),layers:d(Q,{children:[d("polygon",{points:"12 3 3 8 12 13 21 8"}),d("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]}),sparkle:d("path",{d:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"}),sun:d(Q,{children:[d("circle",{cx:"12",cy:"12",r:"4"}),d("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),moon:d("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"}),list:d("path",{d:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"}),upload:d("path",{d:"M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14"}),grid:d(Q,{children:[d("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"13",y:"4",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"13",y:"13",width:"7",height:"7",rx:"1.5"})]}),heart:d("path",{d:"M12 20s-7.5-4.4-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"}),star:d("path",{d:"m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"}),target:d(Q,{children:[d("circle",{cx:"12",cy:"12",r:"8.5"}),d("circle",{cx:"12",cy:"12",r:"4.8"}),d("circle",{cx:"12",cy:"12",r:"1.2"})]}),calendar:d(Q,{children:[d("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),d("path",{d:"M16 2v4M8 2v4M3 10h18"})]})};function X({name:n,size:e,class:t=""}){return d("svg",{class:`ic ${t}`,viewBox:"0 0 24 24","aria-hidden":"true",style:e?{width:e,height:e}:void 0,children:Pl[n]||Pl.dots})}const mm={"fa-utensils":"food","fa-mug-hot":"coffee","fa-wine-glass":"coffee","fa-car":"car","fa-gas-pump":"car","fa-bus":"car","fa-plane":"plane","fa-cart-shopping":"bag","fa-basket-shopping":"bag","fa-scissors":"bag","fa-pills":"pill","fa-paw":"paw","fa-gift":"gift","fa-film":"film","fa-house":"key","fa-bolt":"bolt","fa-mobile-screen":"bolt","fa-mobile-screen-button":"bolt","fa-arrow-down":"down"},gm=n=>mm[n]||"bill";let zo=null,Cl=null;const Wo=new Set;function _m(){Cl||(Cl=fn(()=>import("./brand-paths-Dbek54K2.js"),[]).then(n=>{zo=n.SI,Wo.forEach(e=>e())}).catch(()=>{}))}function ym(){const[,n]=ie(0);return ye(()=>{if(zo)return;const e=()=>n(t=>t+1);return Wo.add(e),_m(),()=>Wo.delete(e)},[]),zo}function vm({b:n,size:e,name:t}){const r=ym();if(n.si&&r&&r[n.si]){const s=Math.round(e*.58);return d("svg",{viewBox:"0 0 24 24",width:s,height:s,"aria-hidden":"true",children:d("path",{d:r[n.si],fill:n.fg})})}return d(X,{name:t,size:Math.round(e*.5)})}function wm({desc:n,name:e,size:t=40,iconSize:r}){const s=pm(n);if(!s)return d("span",{class:"ico",style:t!==40?{width:t,height:t}:void 0,children:d(X,{name:e,size:r})});const i={width:t,height:t,background:s.bg,color:s.fg,borderRadius:s.round?"50%":Math.round(t*.3)};return s.ring&&(i.boxShadow="inset 0 0 0 1.5px #e3e8f5"),d("span",{class:"ico brand",style:i,"aria-hidden":"true",children:d(vm,{b:s,size:t,name:e})})}function Nl({size:n=24}){return d("svg",{viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",style:{flex:"none"},children:[d("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),d("path",{d:"M19 13h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),d("path",{d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"}),d("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"}),d("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"})]})}function Vr({size:n=88,label:e=""}){return d("div",{class:"ld-wrap",role:"status","aria-live":"polite",children:[d("svg",{class:"ld",viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",children:[d("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),d("g",{class:"ld-l",children:[d("path",{d:"M19 13h13v35l-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),d("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),d("g",{class:"ld-r",children:[d("path",{d:"M32 13h13v38l-4.3-3-4.4 3-4.3-3z",fill:"#ffffff"}),d("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),d("path",{class:"ld-cut",d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"})]}),e?d("p",{class:"ld-t",children:e}):null]})}var Dl={};/**
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
 */const Lh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Em=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,p=i>>2,_=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,I=h&63;l||(I=64,a||(m=64)),r.push(t[p],t[_],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Em(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||_==null)throw new Tm;const m=i<<2|c>>4;if(r.push(m),h!==64){const I=c<<4&240|h>>2;if(r.push(I),_!==64){const k=h<<6&192|_;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Im=function(n){const e=Lh(n);return xh.encodeByteArray(e,!0)},fi=function(n){return Im(n).replace(/\./g,"")},Fh=function(n){try{return xh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Am=()=>bm().__FIREBASE_DEFAULTS__,Sm=()=>{if(typeof process>"u"||typeof Dl>"u")return;const n=Dl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fh(n[1]);return e&&JSON.parse(e)},Fi=()=>{try{return Am()||Sm()||Rm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uh=n=>{var e,t;return(t=(e=Fi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},km=n=>{const e=Uh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Bh=()=>{var n;return(n=Fi())===null||n===void 0?void 0:n.config},$h=n=>{var e;return(e=Fi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Pm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Cm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fi(JSON.stringify(t)),fi(JSON.stringify(a)),""].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Dm(){var n;const e=(n=Fi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Om(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lm(){const n=Be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xm(){return!Dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fm(){try{return typeof indexedDB=="object"}catch{return!1}}function Um(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Bm="FirebaseError";class Lt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bm,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?$m(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Lt(s,c,r)}}function $m(n,e){return n.replace(jm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jm=/\{\$([^}]+)}/g;function qm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Vl(i)&&Vl(a)){if(!pi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Vl(n){return n!==null&&typeof n=="object"}/**
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
 */function is(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zm(n,e){const t=new Wm(n,e);return t.subscribe.bind(t)}class Wm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ko),s.error===void 0&&(s.error=ko),s.complete===void 0&&(s.complete=ko);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ko(){}/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class kn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class Gm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qm(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Km(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Km(n){return n===Tn?void 0:n}function Qm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Jm={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Ym=te.INFO,Zm={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},eg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Zm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ba{constructor(e){this.name=e,this._logLevel=Ym,this._logHandler=eg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const tg=(n,e)=>e.some(t=>n instanceof t);let Ml,Ol;function ng(){return Ml||(Ml=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rg(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jh=new WeakMap,Ho=new WeakMap,qh=new WeakMap,Po=new WeakMap,Aa=new WeakMap;function sg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(rn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&jh.set(t,n)}).catch(()=>{}),Aa.set(e,n),e}function ig(n){if(Ho.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ho.set(n,e)}let Go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ho.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function og(n){Go=n(Go)}function ag(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Co(this),e,...t);return qh.set(r,e.sort?e.sort():[e]),rn(r)}:rg().includes(n)?function(...e){return n.apply(Co(this),e),rn(jh.get(this))}:function(...e){return rn(n.apply(Co(this),e))}}function cg(n){return typeof n=="function"?ag(n):(n instanceof IDBTransaction&&ig(n),tg(n,ng())?new Proxy(n,Go):n)}function rn(n){if(n instanceof IDBRequest)return sg(n);if(Po.has(n))return Po.get(n);const e=cg(n);return e!==n&&(Po.set(n,e),Aa.set(e,n)),e}const Co=n=>Aa.get(n);function lg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=rn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(rn(a.result),l.oldVersion,l.newVersion,rn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ug=["get","getKey","getAll","getAllKeys","count"],hg=["put","add","delete","clear"],No=new Map;function Ll(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(No.get(e))return No.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=hg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ug.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return No.set(e,i),i}og(n=>({...n,get:(e,t,r)=>Ll(e,t)||n.get(e,t,r),has:(e,t)=>!!Ll(e,t)||n.has(e,t)}));/**
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
 */class dg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fg(n){const e=n.getComponent();return e?.type==="VERSION"}const Ko="@firebase/app",xl="0.10.13";/**
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
 */const Ct=new ba("@firebase/app"),pg="@firebase/app-compat",mg="@firebase/analytics-compat",gg="@firebase/analytics",_g="@firebase/app-check-compat",yg="@firebase/app-check",vg="@firebase/auth",wg="@firebase/auth-compat",Eg="@firebase/database",Tg="@firebase/data-connect",Ig="@firebase/database-compat",bg="@firebase/functions",Ag="@firebase/functions-compat",Sg="@firebase/installations",Rg="@firebase/installations-compat",kg="@firebase/messaging",Pg="@firebase/messaging-compat",Cg="@firebase/performance",Ng="@firebase/performance-compat",Dg="@firebase/remote-config",Vg="@firebase/remote-config-compat",Mg="@firebase/storage",Og="@firebase/storage-compat",Lg="@firebase/firestore",xg="@firebase/vertexai-preview",Fg="@firebase/firestore-compat",Ug="firebase",Bg="10.14.1";/**
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
 */const Qo="[DEFAULT]",$g={[Ko]:"fire-core",[pg]:"fire-core-compat",[gg]:"fire-analytics",[mg]:"fire-analytics-compat",[yg]:"fire-app-check",[_g]:"fire-app-check-compat",[vg]:"fire-auth",[wg]:"fire-auth-compat",[Eg]:"fire-rtdb",[Tg]:"fire-data-connect",[Ig]:"fire-rtdb-compat",[bg]:"fire-fn",[Ag]:"fire-fn-compat",[Sg]:"fire-iid",[Rg]:"fire-iid-compat",[kg]:"fire-fcm",[Pg]:"fire-fcm-compat",[Cg]:"fire-perf",[Ng]:"fire-perf-compat",[Dg]:"fire-rc",[Vg]:"fire-rc-compat",[Mg]:"fire-gcs",[Og]:"fire-gcs-compat",[Lg]:"fire-fst",[Fg]:"fire-fst-compat",[xg]:"fire-vertex","fire-js":"fire-js",[Ug]:"fire-js-all"};/**
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
 */const mi=new Map,jg=new Map,Xo=new Map;function Fl(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function er(n){const e=n.name;if(Xo.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;Xo.set(e,n);for(const t of mi.values())Fl(t,n);for(const t of jg.values())Fl(t,n);return!0}function Sa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function bt(n){return n.settings!==void 0}/**
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
 */const qg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new ss("app","Firebase",qg);/**
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
 */class zg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const cr=Bg;function zh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sn.create("bad-app-name",{appName:String(s)});if(t||(t=Bh()),!t)throw sn.create("no-options");const i=mi.get(s);if(i){if(pi(t,i.options)&&pi(r,i.config))return i;throw sn.create("duplicate-app",{appName:s})}const a=new Xm(s);for(const l of Xo.values())a.addComponent(l);const c=new zg(t,r,a);return mi.set(s,c),c}function Wh(n=Qo){const e=mi.get(n);if(!e&&n===Qo&&Bh())return zh();if(!e)throw sn.create("no-app",{appName:n});return e}function on(n,e,t){var r;let s=(r=$g[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(c.join(" "));return}er(new kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Wg="firebase-heartbeat-database",Hg=1,Kr="firebase-heartbeat-store";let Do=null;function Hh(){return Do||(Do=lg(Wg,Hg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kr)}catch(t){console.warn(t)}}}}).catch(n=>{throw sn.create("idb-open",{originalErrorMessage:n.message})})),Do}async function Gg(n){try{const t=(await Hh()).transaction(Kr),r=await t.objectStore(Kr).get(Gh(n));return await t.done,r}catch(e){if(e instanceof Lt)Ct.warn(e.message);else{const t=sn.create("idb-get",{originalErrorMessage:e?.message});Ct.warn(t.message)}}}async function Ul(n,e){try{const r=(await Hh()).transaction(Kr,"readwrite");await r.objectStore(Kr).put(e,Gh(n)),await r.done}catch(t){if(t instanceof Lt)Ct.warn(t.message);else{const r=sn.create("idb-set",{originalErrorMessage:t?.message});Ct.warn(r.message)}}}function Gh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Kg=1024,Qg=30*24*60*60*1e3;class Xg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Qg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bl(),{heartbeatsToSend:r,unsentEntries:s}=Jg(this._heartbeatsCache.heartbeats),i=fi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ct.warn(t),""}}}function Bl(){return new Date().toISOString().substring(0,10)}function Jg(n,e=Kg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),$l(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),$l(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fm()?Um().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $l(n){return fi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Zg(n){er(new kn("platform-logger",e=>new dg(e),"PRIVATE")),er(new kn("heartbeat",e=>new Xg(e),"PRIVATE")),on(Ko,xl,n),on(Ko,xl,"esm2017"),on("fire-js","")}Zg("");var e_="firebase",t_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(e_,t_,"app");var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bn,Kh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function E(){}E.prototype=y.prototype,T.D=y.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(b,A,v){for(var w=Array(arguments.length-2),he=2;he<arguments.length;he++)w[he-2]=arguments[he];return y.prototype[A].apply(b,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,E){E||(E=0);var b=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)b[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;16>A;++A)b[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=T.g[0],E=T.g[1],A=T.g[2];var v=T.g[3],w=y+(v^E&(A^v))+b[0]+3614090360&4294967295;y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[1]+3905402710&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[2]+606105819&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[3]+3250441966&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[4]+4118548399&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[5]+1200080426&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[6]+2821735955&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[7]+4249261313&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[8]+1770035416&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[9]+2336552879&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[10]+4294925233&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[11]+2304563134&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(v^E&(A^v))+b[12]+1804603682&4294967295,y=E+(w<<7&4294967295|w>>>25),w=v+(A^y&(E^A))+b[13]+4254626195&4294967295,v=y+(w<<12&4294967295|w>>>20),w=A+(E^v&(y^E))+b[14]+2792965006&4294967295,A=v+(w<<17&4294967295|w>>>15),w=E+(y^A&(v^y))+b[15]+1236535329&4294967295,E=A+(w<<22&4294967295|w>>>10),w=y+(A^v&(E^A))+b[1]+4129170786&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[6]+3225465664&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[11]+643717713&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[0]+3921069994&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[5]+3593408605&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[10]+38016083&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[15]+3634488961&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[4]+3889429448&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[9]+568446438&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[14]+3275163606&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[3]+4107603335&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[8]+1163531501&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(A^v&(E^A))+b[13]+2850285829&4294967295,y=E+(w<<5&4294967295|w>>>27),w=v+(E^A&(y^E))+b[2]+4243563512&4294967295,v=y+(w<<9&4294967295|w>>>23),w=A+(y^E&(v^y))+b[7]+1735328473&4294967295,A=v+(w<<14&4294967295|w>>>18),w=E+(v^y&(A^v))+b[12]+2368359562&4294967295,E=A+(w<<20&4294967295|w>>>12),w=y+(E^A^v)+b[5]+4294588738&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[8]+2272392833&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[11]+1839030562&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[14]+4259657740&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[1]+2763975236&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[4]+1272893353&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[7]+4139469664&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[10]+3200236656&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[13]+681279174&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[0]+3936430074&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[3]+3572445317&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[6]+76029189&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(E^A^v)+b[9]+3654602809&4294967295,y=E+(w<<4&4294967295|w>>>28),w=v+(y^E^A)+b[12]+3873151461&4294967295,v=y+(w<<11&4294967295|w>>>21),w=A+(v^y^E)+b[15]+530742520&4294967295,A=v+(w<<16&4294967295|w>>>16),w=E+(A^v^y)+b[2]+3299628645&4294967295,E=A+(w<<23&4294967295|w>>>9),w=y+(A^(E|~v))+b[0]+4096336452&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[7]+1126891415&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[14]+2878612391&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[5]+4237533241&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[12]+1700485571&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[3]+2399980690&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[10]+4293915773&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[1]+2240044497&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[8]+1873313359&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[15]+4264355552&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[6]+2734768916&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[13]+1309151649&4294967295,E=A+(w<<21&4294967295|w>>>11),w=y+(A^(E|~v))+b[4]+4149444226&4294967295,y=E+(w<<6&4294967295|w>>>26),w=v+(E^(y|~A))+b[11]+3174756917&4294967295,v=y+(w<<10&4294967295|w>>>22),w=A+(y^(v|~E))+b[2]+718787259&4294967295,A=v+(w<<15&4294967295|w>>>17),w=E+(v^(A|~y))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+v&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var E=y-this.blockSize,b=this.B,A=this.h,v=0;v<y;){if(A==0)for(;v<=E;)s(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<y;)if(b[A++]=T.charCodeAt(v++),A==this.blockSize){s(this,b),A=0;break}}else for(;v<y;)if(b[A++]=T[v++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var E=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=E&255,E/=256;for(this.u(T),T=Array(16),y=E=0;4>y;++y)for(var b=0;32>b;b+=8)T[E++]=this.g[y]>>>b&255;return T};function i(T,y){var E=c;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=y(T)}function a(T,y){this.h=y;for(var E=[],b=!0,A=T.length-1;0<=A;A--){var v=T[A]|0;b&&v==y||(E[A]=v,b=!1)}this.g=E}var c={};function l(T){return-128<=T&&128>T?i(T,function(y){return new a([y|0],0>y?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return _;if(0>T)return N(h(-T));for(var y=[],E=1,b=0;T>=E;b++)y[b]=T/E|0,E*=4294967296;return new a(y,0)}function p(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return N(p(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),b=_,A=0;A<T.length;A+=8){var v=Math.min(8,T.length-A),w=parseInt(T.substring(A,A+v),y);8>v?(v=h(Math.pow(y,v)),b=b.j(v).add(h(w))):(b=b.j(E),b=b.add(h(w)))}return b}var _=l(0),m=l(1),I=l(16777216);n=a.prototype,n.m=function(){if(C(this))return-N(this).m();for(var T=0,y=1,E=0;E<this.g.length;E++){var b=this.i(E);T+=(0<=b?b:4294967296+b)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(C(this))return"-"+N(this).toString(T);for(var y=h(Math.pow(T,6)),E=this,b="";;){var A=K(E,y).g;E=O(E,A.j(y));var v=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=A,k(E))return v+b;for(;6>v.length;)v="0"+v;b=v+b}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function C(T){return T.h==-1}n.l=function(T){return T=O(this,T),C(T)?-1:k(T)?0:1};function N(T){for(var y=T.g.length,E=[],b=0;b<y;b++)E[b]=~T.g[b];return new a(E,~T.h).add(m)}n.abs=function(){return C(this)?N(this):this},n.add=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],b=0,A=0;A<=y;A++){var v=b+(this.i(A)&65535)+(T.i(A)&65535),w=(v>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);b=w>>>16,v&=65535,w&=65535,E[A]=w<<16|v}return new a(E,E[E.length-1]&-2147483648?-1:0)};function O(T,y){return T.add(N(y))}n.j=function(T){if(k(this)||k(T))return _;if(C(this))return C(T)?N(this).j(N(T)):N(N(this).j(T));if(C(T))return N(this.j(N(T)));if(0>this.l(I)&&0>T.l(I))return h(this.m()*T.m());for(var y=this.g.length+T.g.length,E=[],b=0;b<2*y;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<T.g.length;A++){var v=this.i(b)>>>16,w=this.i(b)&65535,he=T.i(A)>>>16,je=T.i(A)&65535;E[2*b+2*A]+=w*je,L(E,2*b+2*A),E[2*b+2*A+1]+=v*je,L(E,2*b+2*A+1),E[2*b+2*A+1]+=w*he,L(E,2*b+2*A+1),E[2*b+2*A+2]+=v*he,L(E,2*b+2*A+2)}for(b=0;b<y;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=y;b<2*y;b++)E[b]=0;return new a(E,0)};function L(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function $(T,y){this.g=T,this.h=y}function K(T,y){if(k(y))throw Error("division by zero");if(k(T))return new $(_,_);if(C(T))return y=K(N(T),y),new $(N(y.g),N(y.h));if(C(y))return y=K(T,N(y)),new $(N(y.g),y.h);if(30<T.g.length){if(C(T)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,b=y;0>=b.l(T);)E=ee(E),b=ee(b);var A=Y(E,1),v=Y(b,1);for(b=Y(b,2),E=Y(E,2);!k(b);){var w=v.add(b);0>=w.l(T)&&(A=A.add(E),v=w),b=Y(b,1),E=Y(E,1)}return y=O(T,A.j(y)),new $(A,y)}for(A=_;0<=T.l(y);){for(E=Math.max(1,Math.floor(T.m()/y.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),v=h(E),w=v.j(y);C(w)||0<w.l(T);)E-=b,v=h(E),w=v.j(y);k(v)&&(v=m),A=A.add(v),T=O(T,w)}return new $(A,T)}n.A=function(T){return K(this,T).h},n.and=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)&T.i(b);return new a(E,this.h&T.h)},n.or=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)|T.i(b);return new a(E,this.h|T.h)},n.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)^T.i(b);return new a(E,this.h^T.h)};function ee(T){for(var y=T.g.length+1,E=[],b=0;b<y;b++)E[b]=T.i(b)<<1|T.i(b-1)>>>31;return new a(E,T.h)}function Y(T,y){var E=y>>5;y%=32;for(var b=T.g.length-E,A=[],v=0;v<b;v++)A[v]=0<y?T.i(v+E)>>>y|T.i(v+E+1)<<32-y:T.i(v+E);return new a(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,bn=a}).apply(typeof jl<"u"?jl:typeof self<"u"?self:typeof window<"u"?window:{});var Bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qh,xr,Xh,Zs,Jo,Jh,Yh,Zh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bs=="object"&&Bs];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in f))break e;f=f[S]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,S={next:function(){if(!g&&f<o.length){var R=f++;return{value:u(R,o[R]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,f){return o.call.apply(o.bind,arguments)}function _(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,m.apply(null,arguments)}function I(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,S,R){for(var M=Array(arguments.length-2),le=2;le<arguments.length;le++)M[le-2]=arguments[le];return u.prototype[S].apply(g,M)}}function C(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function N(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const S=o.length||0,R=g.length||0;o.length=S+R;for(let M=0;M<R;M++)o[S+M]=g[M]}else o.push(g)}}class O{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var ee=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Y(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function T(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)o[f]=g[f];for(let R=0;R<E.length;R++)f=E[R],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function v(o){c.setTimeout(()=>{throw o},0)}function w(){var o=Bt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class he{constructor(){this.h=this.g=null}add(u,f){const g=je.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var je=new O(()=>new _t,o=>o.reset());class _t{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,Ut=!1,Bt=new he,Es=()=>{const o=c.Promise.resolve(void 0);Xe=()=>{o.then(pr)}};var pr=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(f){v(f)}var u=je;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Ut=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var mr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o}();function qe(o,u){if(de.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ee){e:{try{K(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ct[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qe.aa.h.call(this)}}k(qe,de);var ct={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),gr=0;function jt(o,u,f,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++gr,this.da=this.fa=!1}function it(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function qt(o){this.src=o,this.g={},this.h=0}qt.prototype.add=function(o,u,f,g,S){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var M=Fn(o,u,g,S);return-1<M?(u=o[M],f||(u.fa=!1)):(u=new jt(u,this.src,R,!!g,S),u.fa=f,o.push(u)),u};function yt(o,u){var f=u.type;if(f in o.g){var g=o.g[f],S=Array.prototype.indexOf.call(g,u,void 0),R;(R=0<=S)&&Array.prototype.splice.call(g,S,1),R&&(it(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Fn(o,u,f,g){for(var S=0;S<o.length;++S){var R=o[S];if(!R.da&&R.listener==u&&R.capture==!!f&&R.ha==g)return S}return-1}var J="closure_lm_"+(1e6*Math.random()|0),Un={};function lt(o,u,f,g,S){if(Array.isArray(u)){for(var R=0;R<u.length;R++)lt(o,u[R],f,g,S);return null}return f=vt(f),o&&o[$t]?o.K(u,f,h(g)?!!g.capture:!1,S):lo(o,u,f,!1,g,S)}function lo(o,u,f,g,S,R){if(!u)throw Error("Invalid event type");var M=h(S)?!!S.capture:!!S,le=Wt(o);if(le||(o[J]=le=new qt(o)),f=le.add(u,f,g,M,R),f.proxy)return f;if(g=Ts(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)mr||(S=M),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(Is(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ts(){function o(f){return u.call(o.src,o.listener,f)}const u=_r;return o}function zt(o,u,f,g,S){if(Array.isArray(u))for(var R=0;R<u.length;R++)zt(o,u[R],f,g,S);else g=h(g)?!!g.capture:!!g,f=vt(f),o&&o[$t]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],f=Fn(R,f,g,S),-1<f&&(it(R[f]),Array.prototype.splice.call(R,f,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=Wt(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Fn(u,f,g,S)),(f=-1<o?u[o]:null)&&gn(f))}function gn(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[$t])yt(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(Is(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Wt(u))?(yt(f,o),f.h==0&&(f.src=null,u[J]=null)):it(o)}}}function Is(o){return o in Un?Un[o]:Un[o]="on"+o}function _r(o,u){if(o.da)o=!0;else{u=new qe(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&gn(o),o=f.call(g,u)}return o}function Wt(o){return o=o[J],o instanceof qt?o:null}var Bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(o){return typeof o=="function"?o:(o[Bn]||(o[Bn]=function(u){return o.handleEvent(u)}),o[Bn])}function Ee(){st.call(this),this.i=new qt(this),this.M=this,this.F=null}k(Ee,st),Ee.prototype[$t]=!0,Ee.prototype.removeEventListener=function(o,u,f,g){zt(this,o,u,f,g)};function Re(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new de(u,o);else if(u instanceof de)u.target=u.target||o;else{var S=u;u=new de(g,o),b(u,S)}if(S=!0,f)for(var R=f.length-1;0<=R;R--){var M=u.g=f[R];S=$n(M,g,!0,u)&&S}if(M=u.g=o,S=$n(M,g,!0,u)&&S,S=$n(M,g,!1,u)&&S,f)for(R=0;R<f.length;R++)M=u.g=f[R],S=$n(M,g,!1,u)&&S}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)it(f[g]);delete o.g[u],o.h--}}this.F=null},Ee.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Ee.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function $n(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,R=0;R<u.length;++R){var M=u[R];if(M&&!M.da&&M.capture==f){var le=M.listener,Ce=M.ha||M.src;M.fa&&yt(o.i,M),S=le.call(Ce,g)!==!1&&S}}return S&&!g.defaultPrevented}function wt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function yr(o){o.g=wt(()=>{o.g=null,o.i&&(o.i=!1,yr(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ht extends st{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:yr(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function P(o){st.call(this),this.h=o,this.g={}}k(P,st);var B=[];function W(o){Y(o.g,function(u,f){this.g.hasOwnProperty(f)&&gn(u)},o),o.g={}}P.prototype.N=function(){P.aa.N.call(this),W(this)},P.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vr=c.JSON.stringify,Rp=c.JSON.parse,kp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function uo(){}uo.prototype.h=null;function Ac(o){return o.h||(o.h=o.i())}function Sc(){}var wr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ho(){de.call(this,"d")}k(ho,de);function fo(){de.call(this,"c")}k(fo,de);var _n={},Rc=null;function bs(){return Rc=Rc||new Ee}_n.La="serverreachability";function kc(o){de.call(this,_n.La,o)}k(kc,de);function Er(o){const u=bs();Re(u,new kc(u))}_n.STAT_EVENT="statevent";function Pc(o,u){de.call(this,_n.STAT_EVENT,o),this.stat=u}k(Pc,de);function ze(o){const u=bs();Re(u,new Pc(u,o))}_n.Ma="timingevent";function Cc(o,u){de.call(this,_n.Ma,o),this.size=u}k(Cc,de);function Tr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Ir(){this.g=!0}Ir.prototype.xa=function(){this.g=!1};function Pp(o,u,f,g,S,R){o.info(function(){if(o.g)if(R)for(var M="",le=R.split("&"),Ce=0;Ce<le.length;Ce++){var se=le[Ce].split("=");if(1<se.length){var Oe=se[0];se=se[1];var Le=Oe.split("_");M=2<=Le.length&&Le[1]=="type"?M+(Oe+"="+se+"&"):M+(Oe+"=redacted&")}}else M=null;else M=R;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+M})}function Cp(o,u,f,g,S,R,M){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+R+" "+M})}function jn(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Dp(o,f)+(g?" "+g:"")})}function Np(o,u){o.info(function(){return"TIMEOUT: "+u})}Ir.prototype.info=function(){};function Dp(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var R=S[0];if(R!="noop"&&R!="stop"&&R!="close")for(var M=1;M<S.length;M++)S[M]=""}}}}return vr(f)}catch{return u}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},po;function Ss(){}k(Ss,uo),Ss.prototype.g=function(){return new XMLHttpRequest},Ss.prototype.i=function(){return{}},po=new Ss;function Gt(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new P(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dc}function Dc(){this.i=null,this.g="",this.h=!1}var Vc={},mo={};function go(o,u,f){o.L=1,o.v=Cs(Et(u)),o.m=f,o.P=!0,Mc(o,null)}function Mc(o,u){o.F=Date.now(),Rs(o),o.A=Et(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Kc(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Dc,o.g=dl(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ht(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(B[0]=S.toString()),S=B);for(var R=0;R<S.length;R++){var M=lt(f,S[R],g||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Er(),Pp(o.i,o.u,o.A,o.l,o.R,o.m)}Gt.prototype.ca=function(o){o=o.target;const u=this.M;u&&Tt(o)==3?u.j():this.Y(o)},Gt.prototype.Y=function(o){try{if(o==this.g)e:{const Le=Tt(this.g);var u=this.g.Ba();const Wn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||tl(this.g)))){this.J||Le!=4||u==7||(u==8||0>=Wn?Er(3):Er(2)),_o(this);var f=this.g.Z();this.X=f;t:if(Oc(this)){var g=tl(this.g);o="";var S=g.length,R=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),br(this);var M="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(R&&u==S-1)});g.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=f==200,Cp(this.i,this.u,this.A,this.l,this.R,Le,f),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Ce=this.g;if((le=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(le)){var se=le;break t}}se=null}if(f=se)jn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yo(this,f);else{this.o=!1,this.s=3,ze(12),yn(this),br(this);break e}}if(this.P){f=!0;let ot;for(;!this.J&&this.C<M.length;)if(ot=Vp(this,M),ot==mo){Le==4&&(this.s=4,ze(14),f=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==Vc){this.s=4,ze(15),jn(this.i,this.l,M,"[Invalid Chunk]"),f=!1;break}else jn(this.i,this.l,ot,null),yo(this,ot);if(Oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||M.length!=0||this.h.h||(this.s=1,ze(16),f=!1),this.o=this.o&&f,!f)jn(this.i,this.l,M,"[Invalid Chunked Response]"),yn(this),br(this);else if(0<M.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),bo(Oe),Oe.M=!0,ze(11))}}else jn(this.i,this.l,M,null),yo(this,M);Le==4&&yn(this),this.o&&!this.J&&(Le==4?cl(this.j,this):(this.o=!1,Rs(this)))}else Xp(this.g),f==400&&0<M.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),yn(this),br(this)}}}catch{}finally{}};function Oc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Vp(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?mo:(f=Number(u.substring(f,g)),isNaN(f)?Vc:(g+=1,g+f>u.length?mo:(u=u.slice(g,g+f),o.C=g+f,u)))}Gt.prototype.cancel=function(){this.J=!0,yn(this)};function Rs(o){o.S=Date.now()+o.I,Lc(o,o.I)}function Lc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Tr(m(o.ba,o),u)}function _o(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Gt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Np(this.i,this.A),this.L!=2&&(Er(),ze(17)),yn(this),this.s=2,br(this)):Lc(this,this.S-o)};function br(o){o.j.G==0||o.J||cl(o.j,o)}function yn(o){_o(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,W(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function yo(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||vo(f.h,o))){if(!o.K&&vo(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ls(f),Ms(f);else break e;Io(f),ze(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Tr(m(f.Za,f),6e3));if(1>=Uc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else wn(f,11)}else if((o.K||f.g==o)&&Ls(f),!L(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let se=S[u];if(f.T=se[0],se=se[1],f.G==2)if(se[0]=="c"){f.K=se[1],f.ia=se[2];const Oe=se[3];Oe!=null&&(f.la=Oe,f.j.info("VER="+f.la));const Le=se[4];Le!=null&&(f.Aa=Le,f.j.info("SVER="+f.Aa));const Wn=se[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(g=1.5*Wn,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const ot=o.g;if(ot){const Fs=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var R=g.h;R.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(wo(R,R.h),R.h=null))}if(g.D){const Ao=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(g.ya=Ao,fe(g.I,g.D,Ao))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var M=o;if(g.qa=hl(g,g.J?g.ia:null,g.W),M.K){Bc(g.h,M);var le=M,Ce=g.L;Ce&&(le.I=Ce),le.B&&(_o(le),Rs(le)),g.g=M}else ol(g);0<f.i.length&&Os(f)}else se[0]!="stop"&&se[0]!="close"||wn(f,7);else f.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?wn(f,7):To(f):se[0]!="noop"&&f.l&&f.l.ta(se),f.v=0)}}Er(4)}catch{}}var Mp=class{constructor(o,u){this.g=o,this.map=u}};function xc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Uc(o){return o.h?1:o.g?o.g.size:0}function vo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function wo(o,u){o.g?o.g.add(u):o.h=u}function Bc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}xc.prototype.cancel=function(){if(this.i=$c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function $c(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return C(o.i)}function Op(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function Lp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function jc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Lp(o),g=Op(o),S=g.length,R=0;R<S;R++)u.call(void 0,g[R],f&&f[R],o)}var qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xp(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),S=null;if(0<=g){var R=o[f].substring(0,g);S=o[f].substring(g+1)}else R=o[f];u(R,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function vn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof vn){this.h=o.h,ks(this,o.j),this.o=o.o,this.g=o.g,Ps(this,o.s),this.l=o.l;var u=o.i,f=new Rr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),zc(this,f),this.m=o.m}else o&&(u=String(o).match(qc))?(this.h=!1,ks(this,u[1]||"",!0),this.o=Ar(u[2]||""),this.g=Ar(u[3]||"",!0),Ps(this,u[4]),this.l=Ar(u[5]||"",!0),zc(this,u[6]||"",!0),this.m=Ar(u[7]||"")):(this.h=!1,this.i=new Rr(null,this.h))}vn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Sr(u,Wc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Sr(u,Wc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Sr(f,f.charAt(0)=="/"?Bp:Up,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Sr(f,jp)),o.join("")};function Et(o){return new vn(o)}function ks(o,u,f){o.j=f?Ar(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ps(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function zc(o,u,f){u instanceof Rr?(o.i=u,qp(o.i,o.h)):(f||(u=Sr(u,$p)),o.i=new Rr(u,o.h))}function fe(o,u,f){o.i.set(u,f)}function Cs(o){return fe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ar(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Sr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Fp),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Fp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wc=/[#\/\?@]/g,Up=/[#\?:]/g,Bp=/[#\?]/g,$p=/[#\?@]/g,jp=/#/g;function Rr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Kt(o){o.g||(o.g=new Map,o.h=0,o.i&&xp(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Rr.prototype,n.add=function(o,u){Kt(this),this.i=null,o=qn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Hc(o,u){Kt(o),u=qn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Gc(o,u){return Kt(o),u=qn(o,u),o.g.has(u)}n.forEach=function(o,u){Kt(this),this.g.forEach(function(f,g){f.forEach(function(S){o.call(u,S,g,this)},this)},this)},n.na=function(){Kt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=o[g];for(let R=0;R<S.length;R++)f.push(u[g])}return f},n.V=function(o){Kt(this);let u=[];if(typeof o=="string")Gc(this,o)&&(u=u.concat(this.g.get(qn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Kt(this),this.i=null,o=qn(this,o),Gc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Kc(o,u,f){Hc(o,u),0<f.length&&(o.i=null,o.g.set(qn(o,u),C(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const R=encodeURIComponent(String(g)),M=this.V(g);for(g=0;g<M.length;g++){var S=R;M[g]!==""&&(S+="="+encodeURIComponent(String(M[g]))),o.push(S)}}return this.i=o.join("&")};function qn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function qp(o,u){u&&!o.j&&(Kt(o),o.i=null,o.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Hc(this,g),Kc(this,S,f))},o)),o.j=u}function zp(o,u){const f=new Ir;if(c.Image){const g=new Image;g.onload=I(Qt,f,"TestLoadImage: loaded",!0,u,g),g.onerror=I(Qt,f,"TestLoadImage: error",!1,u,g),g.onabort=I(Qt,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=I(Qt,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Wp(o,u){const f=new Ir,g=new AbortController,S=setTimeout(()=>{g.abort(),Qt(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(R=>{clearTimeout(S),R.ok?Qt(f,"TestPingServer: ok",!0,u):Qt(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Qt(f,"TestPingServer: error",!1,u)})}function Qt(o,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Hp(){this.g=new kp}function Gp(o,u,f){const g=f||"";try{jc(o,function(S,R){let M=S;h(S)&&(M=vr(S)),u.push(g+R+"="+encodeURIComponent(M))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Ns(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Ns,uo),Ns.prototype.g=function(){return new Ds(this.l,this.j)},Ns.prototype.i=function(o){return function(){return o}}({});function Ds(o,u){Ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ds,Ee),n=Ds.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Pr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Pr(this)),this.g&&(this.readyState=3,Pr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?kr(this):Pr(this),this.readyState==3&&Qc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,kr(this))},n.Qa=function(o){this.g&&(this.response=o,kr(this))},n.ga=function(){this.g&&kr(this)};function kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Pr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Pr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xc(o){let u="";return Y(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Eo(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Xc(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):fe(o,u,f))}function _e(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(_e,Ee);var Kp=/^https?$/i,Qp=["POST","PUT"];n=_e.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():po.g(),this.v=this.o?Ac(this.o):Ac(po),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){Jc(this,R);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())f.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Qp,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of f)this.g.setRequestHeader(R,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{el(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Jc(this,R)}};function Jc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Yc(o),Vs(o)}function Yc(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Re(this,"complete"),Re(this,"abort"),Vs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vs(this,!0)),_e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zc(this):this.bb())},n.bb=function(){Zc(this)};function Zc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Tt(o)!=4||o.Z()!=2)){if(o.u&&Tt(o)==4)wt(o.Ea,0,o);else if(Re(o,"readystatechange"),Tt(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=M===0){var S=String(o.D).match(qc)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!Kp.test(S?S.toLowerCase():"")}f=g}if(f)Re(o,"complete"),Re(o,"success");else{o.m=6;try{var R=2<Tt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Yc(o)}}finally{Vs(o)}}}}function Vs(o,u){if(o.g){el(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Re(o,"ready");try{f.onreadystatechange=g}catch{}}}function el(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Tt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Rp(u)}};function tl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xp(o){const u={};o=(o.g&&2<=Tt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(L(o[g]))continue;var f=A(o[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=u[S]||[];u[S]=R,R.push(f)}T(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function nl(o){this.Aa=0,this.i=[],this.j=new Ir,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cr("baseRetryDelayMs",5e3,o),this.cb=Cr("retryDelaySeedMs",1e4,o),this.Wa=Cr("forwardChannelMaxRetries",2,o),this.wa=Cr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new xc(o&&o.concurrentRequestLimit),this.Da=new Hp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=nl.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ze(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=hl(this,null,this.W),Os(this)};function To(o){if(rl(o),o.G==3){var u=o.U++,f=Et(o.I);if(fe(f,"SID",o.K),fe(f,"RID",u),fe(f,"TYPE","terminate"),Nr(o,f),u=new Gt(o,o.j,u),u.L=2,u.v=Cs(Et(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=dl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Rs(u)}ul(o)}function Ms(o){o.g&&(bo(o),o.g.cancel(),o.g=null)}function rl(o){Ms(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ls(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Os(o){if(!Fc(o.h)&&!o.s){o.s=!0;var u=o.Ga;Xe||Es(),Ut||(Xe(),Ut=!0),Bt.add(u,o),o.B=0}}function Jp(o,u){return Uc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Tr(m(o.Ga,o,u),ll(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Gt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=y(R),b(R,this.S)):R=this.S),this.m!==null||this.O||(S.H=R,R=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=il(this,S,u),f=Et(this.I),fe(f,"RID",o),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),Nr(this,f),R&&(this.O?u="headers="+encodeURIComponent(String(Xc(R)))+"&"+u:this.m&&Eo(f,this.m,R)),wo(this.h,S),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",u),fe(f,"SID","null"),S.T=!0,go(S,f,null)):go(S,f,u),this.G=2}}else this.G==3&&(o?sl(this,o):this.i.length==0||Fc(this.h)||sl(this))};function sl(o,u){var f;u?f=u.l:f=o.U++;const g=Et(o.I);fe(g,"SID",o.K),fe(g,"RID",f),fe(g,"AID",o.T),Nr(o,g),o.m&&o.o&&Eo(g,o.m,o.o),f=new Gt(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=il(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),wo(o.h,f),go(f,g,u)}function Nr(o,u){o.H&&Y(o.H,function(f,g){fe(u,g,f)}),o.l&&jc({},function(f,g){fe(u,g,f)})}function il(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var S=o.i;let R=-1;for(;;){const M=["count="+f];R==-1?0<f?(R=S[0].g,M.push("ofs="+R)):R=0:M.push("ofs="+R);let le=!0;for(let Ce=0;Ce<f;Ce++){let se=S[Ce].g;const Oe=S[Ce].map;if(se-=R,0>se)R=Math.max(0,S[Ce].g-100),le=!1;else try{Gp(Oe,M,"req"+se+"_")}catch{g&&g(Oe)}}if(le){g=M.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function ol(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Xe||Es(),Ut||(Xe(),Ut=!0),Bt.add(u,o),o.v=0}}function Io(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Tr(m(o.Fa,o),ll(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,al(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Tr(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Ms(this),al(this))};function bo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function al(o){o.g=new Gt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Et(o.qa);fe(u,"RID","rpc"),fe(u,"SID",o.K),fe(u,"AID",o.T),fe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&fe(u,"TO",o.ja),fe(u,"TYPE","xmlhttp"),Nr(o,u),o.m&&o.o&&Eo(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Cs(Et(u)),f.m=null,f.P=!0,Mc(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Ms(this),Io(this),ze(19))};function Ls(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function cl(o,u){var f=null;if(o.g==u){Ls(o),bo(o),o.g=null;var g=2}else if(vo(o.h,u))f=u.D,Bc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;g=bs(),Re(g,new Cc(g,f)),Os(o)}else ol(o);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&Jp(o,u)||g==2&&Io(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),S){case 1:wn(o,5);break;case 4:wn(o,10);break;case 3:wn(o,6);break;default:wn(o,2)}}}function ll(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function wn(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const S=!g;g=new vn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ks(g,"https"),Cs(g),S?zp(g.toString(),f):Wp(g.toString(),f)}else ze(2);o.G=0,o.l&&o.l.sa(u),ul(o),rl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function ul(o){if(o.G=0,o.ka=[],o.l){const u=$c(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function hl(o,u,f){var g=f instanceof vn?Et(f):new vn(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ps(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var R=new vn(null);g&&ks(R,g),u&&(R.g=u),S&&Ps(R,S),f&&(R.l=f),g=R}return f=o.D,u=o.ya,f&&u&&fe(g,f,u),fe(g,"VER",o.la),Nr(o,g),g}function dl(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new _e(new Ns({eb:f})):new _e(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fl(){}n=fl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xs(){}xs.prototype.g=function(o,u){return new Je(o,u)};function Je(o,u){Ee.call(this),this.g=new nl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!L(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!L(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new zn(this)}k(Je,Ee),Je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){To(this.g)},Je.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=vr(o),o=f);u.i.push(new Mp(u.Ya++,o)),u.G==3&&Os(u)},Je.prototype.N=function(){this.g.l=null,delete this.j,To(this.g),delete this.g,Je.aa.N.call(this)};function pl(o){ho.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(pl,ho);function ml(){fo.call(this),this.status=1}k(ml,fo);function zn(o){this.g=o}k(zn,fl),zn.prototype.ua=function(){Re(this.g,"a")},zn.prototype.ta=function(o){Re(this.g,new pl(o))},zn.prototype.sa=function(o){Re(this.g,new ml)},zn.prototype.ra=function(){Re(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,Zh=function(){return new xs},Yh=function(){return bs()},Jh=_n,Jo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,Zs=As,Nc.COMPLETE="complete",Xh=Nc,Sc.EventType=wr,wr.OPEN="a",wr.CLOSE="b",wr.ERROR="c",wr.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,xr=Sc,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,Qh=_e}).apply(typeof Bs<"u"?Bs:typeof self<"u"?self:typeof window<"u"?window:{});const ql="@firebase/firestore";/**
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
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
 */let lr="10.14.0";/**
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
 */const Pn=new ba("@firebase/firestore");function Mr(){return Pn.logLevel}function U(n,...e){if(Pn.logLevel<=te.DEBUG){const t=e.map(Ra);Pn.debug(`Firestore (${lr}): ${n}`,...t)}}function Nt(n,...e){if(Pn.logLevel<=te.ERROR){const t=e.map(Ra);Pn.error(`Firestore (${lr}): ${n}`,...t)}}function tr(n,...e){if(Pn.logLevel<=te.WARN){const t=e.map(Ra);Pn.warn(`Firestore (${lr}): ${n}`,...t)}}function Ra(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+n;throw Nt(e),new Error(e)}function ce(n,e){n||z()}function G(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ed{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class r_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class s_{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new ed(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Fe(e)}}class i_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class o_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new i_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ce(this.o===void 0);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string"),this.R=t.token,new a_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class td{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=l_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(n,e){return n<e?-1:n>e?1:0}function nr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ae(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new Ae(0,0))}static max(){return new H(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qr{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends Qr{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const u_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends Qr{construct(e,t,r){return new De(e,t,r)}static isValidIdentifier(e){return u_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new x(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new x(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(pe.fromString(e))}static fromName(e){return new j(pe.fromString(e).popFirst(5))}static empty(){return new j(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new pe(e.slice()))}}function h_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new Ae(t+1,0):new Ae(t,r));return new un(s,j.empty(),e)}function d_(n){return new un(n.readTime,n.key,-1)}class un{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new un(H.min(),j.empty(),-1)}static max(){return new un(H.max(),j.empty(),-1)}}function f_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function os(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==p_)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(p=>{a[h]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function g_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function as(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ka{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ka.oe=-1;function Ui(n){return n==null}function gi(n){return n===0&&1/n==-1/0}function __(n){return typeof n=="number"&&Number.isInteger(n)&&!gi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function zl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function On(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ne(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wl(this.data.getIterator())}getIteratorFrom(e){return new Wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class Wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new Ve(De.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rd("Invalid base64 string: "+i):i}}(e);return new Me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const y_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(n){if(ce(!!n),typeof n=="string"){let e=0;const t=y_.exec(n);if(ce(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Cn(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ca(n){const e=n.mapValue.fields.__previous_value__;return Pa(e)?Ca(e):e}function Xr(n){const e=hn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class v_{constructor(e,t,r,s,i,a,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Jr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Jr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js={mapValue:{}};function Nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pa(n)?4:E_(n)?9007199254740991:w_(n)?10:11:z()}function gt(n,e){if(n===e)return!0;const t=Nn(n);if(t!==Nn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xr(n).isEqual(Xr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=hn(s.timestampValue),c=hn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Cn(s.bytesValue).isEqual(Cn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ve(s.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ve(s.integerValue)===ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ve(s.doubleValue),c=ve(i.doubleValue);return a===c?gi(a)===gi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return nr(n.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(zl(a)!==zl(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!gt(a[l],c[l])))return!1;return!0}(n,e);default:return z()}}function Yr(n,e){return(n.values||[]).find(t=>gt(t,e))!==void 0}function rr(n,e){if(n===e)return 0;const t=Nn(n),r=Nn(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ve(i.integerValue||i.doubleValue),l=ve(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Hl(n.timestampValue,e.timestampValue);case 4:return Hl(Xr(n),Xr(e));case 5:return oe(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Cn(i),l=Cn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const p=oe(c[h],l[h]);if(p!==0)return p}return oe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=oe(ve(i.latitude),ve(a.latitude));return c!==0?c:oe(ve(i.longitude),ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,p;const _=i.fields||{},m=a.fields||{},I=(c=_.value)===null||c===void 0?void 0:c.arrayValue,k=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=oe(((h=I?.values)===null||h===void 0?void 0:h.length)||0,((p=k?.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:Gl(I,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===js.mapValue&&a===js.mapValue)return 0;if(i===js.mapValue)return 1;if(a===js.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let _=0;_<l.length&&_<p.length;++_){const m=oe(l[_],p[_]);if(m!==0)return m;const I=rr(c[l[_]],h[p[_]]);if(I!==0)return I}return oe(l.length,p.length)}(n.mapValue,e.mapValue);default:throw z()}}function Hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);const t=hn(n),r=hn(e),s=oe(t.seconds,r.seconds);return s!==0?s:oe(t.nanos,r.nanos)}function Gl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=rr(t[s],r[s]);if(i)return i}return oe(t.length,r.length)}function sr(n){return Yo(n)}function Yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=hn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Cn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Yo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Yo(t.fields[a])}`;return s+"}"}(n.mapValue):z()}function Kl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Zo(n){return!!n&&"integerValue"in n}function Na(n){return!!n&&"arrayValue"in n}function Ql(n){return!!n&&"nullValue"in n}function Xl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ei(n){return!!n&&"mapValue"in n}function w_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return On(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function E_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(t)}setAll(e){let t=De.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=jr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ei(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){On(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ke(jr(this.value))}}function sd(n){const e=[];return On(n.fields,(t,r)=>{const s=new De([t]);if(ei(r)){const i=sd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ye(e)}/**
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
 */class Ue{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ue(e,0,H.min(),H.min(),H.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Ue(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Ue(e,2,t,H.min(),H.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Ue(e,3,t,H.min(),H.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _i{constructor(e,t){this.position=e,this.inclusive=t}}function Jl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),t.key):r=rr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class yi{constructor(e,t="asc"){this.field=e,this.dir=t}}function T_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class id{}class be extends id{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new b_(e,t,r):t==="array-contains"?new R_(e,r):t==="in"?new k_(e,r):t==="not-in"?new P_(e,r):t==="array-contains-any"?new C_(e,r):new be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new A_(e,r):new S_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(rr(t,this.value)):t!==null&&Nn(this.value)===Nn(t)&&this.matchesComparison(rr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends id{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new at(e,t)}matches(e){return od(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function od(n){return n.op==="and"}function ad(n){return I_(n)&&od(n)}function I_(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function ea(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+sr(n.value);if(ad(n))return n.filters.map(e=>ea(e)).join(",");{const e=n.filters.map(t=>ea(t)).join(",");return`${n.op}(${e})`}}function cd(n,e){return n instanceof be?function(r,s){return s instanceof be&&r.op===s.op&&r.field.isEqual(s.field)&&gt(r.value,s.value)}(n,e):n instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&cd(a,s.filters[c]),!0):!1}(n,e):void z()}function ld(n){return n instanceof be?function(t){return`${t.field.canonicalString()} ${t.op} ${sr(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(ld).join(" ,")+"}"}(n):"Filter"}class b_ extends be{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class A_ extends be{constructor(e,t){super(e,"in",t),this.keys=ud("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class S_ extends be{constructor(e,t){super(e,"not-in",t),this.keys=ud("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ud(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class R_ extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Na(t)&&Yr(t.arrayValue,this.value)}}class k_ extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yr(this.value.arrayValue,t)}}class P_ extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Yr(this.value.arrayValue,t)}}class C_ extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Na(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Yr(this.value.arrayValue,r))}}/**
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
 */class N_{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Zl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new N_(n,e,t,r,s,i,a)}function Da(n){const e=G(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ea(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>sr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>sr(r)).join(",")),e.ue=t}return e.ue}function Va(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!T_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yl(n.startAt,e.startAt)&&Yl(n.endAt,e.endAt)}function ta(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class cs{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function D_(n,e,t,r,s,i,a,c){return new cs(n,e,t,r,s,i,a,c)}function Bi(n){return new cs(n)}function eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hd(n){return n.collectionGroup!==null}function qr(n){const e=G(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ve(De.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new yi(i,r))}),t.has(De.keyField().canonicalString())||e.ce.push(new yi(De.keyField(),r))}return e.ce}function dt(n){const e=G(n);return e.le||(e.le=V_(e,qr(n))),e.le}function V_(n,e){if(n.limitType==="F")return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new yi(s.field,i)});const t=n.endAt?new _i(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _i(n.startAt.position,n.startAt.inclusive):null;return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function na(n,e){const t=n.filters.concat([e]);return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function vi(n,e,t){return new cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $i(n,e){return Va(dt(n),dt(e))&&n.limitType===e.limitType}function dd(n){return`${Da(dt(n))}|lt:${n.limitType}`}function Hn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>ld(s)).join(", ")}]`),Ui(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>sr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>sr(s)).join(",")),`Target(${r})`}(dt(n))}; limitType=${n.limitType})`}function ji(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of qr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Jl(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,qr(r),s)||r.endAt&&!function(a,c,l){const h=Jl(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,qr(r),s))}(n,e)}function M_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fd(n){return(e,t)=>{let r=!1;for(const s of qr(n)){const i=O_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function O_(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rr(l,h):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class ur{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return nd(this.inner)}size(){return this.innerSize}}/**
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
 */const L_=new ge(j.comparator);function Dt(){return L_}const pd=new ge(j.comparator);function Fr(...n){let e=pd;for(const t of n)e=e.insert(t.key,t);return e}function md(n){let e=pd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function In(){return zr()}function gd(){return zr()}function zr(){return new ur(n=>n.toString(),(n,e)=>n.isEqual(e))}const x_=new ge(j.comparator),F_=new Ve(j.comparator);function Z(...n){let e=F_;for(const t of n)e=e.add(t);return e}const U_=new Ve(oe);function B_(){return U_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gi(e)?"-0":e}}function _d(n){return{integerValue:""+n}}function $_(n,e){return __(e)?_d(e):Ma(n,e)}/**
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
 */class qi{constructor(){this._=void 0}}function j_(n,e,t){return n instanceof wi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pa(i)&&(i=Ca(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Zr?vd(n,e):n instanceof es?wd(n,e):function(s,i){const a=yd(s,i),c=tu(a)+tu(s.Pe);return Zo(a)&&Zo(s.Pe)?_d(c):Ma(s.serializer,c)}(n,e)}function q_(n,e,t){return n instanceof Zr?vd(n,e):n instanceof es?wd(n,e):t}function yd(n,e){return n instanceof Ei?function(r){return Zo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wi extends qi{}class Zr extends qi{constructor(e){super(),this.elements=e}}function vd(n,e){const t=Ed(e);for(const r of n.elements)t.some(s=>gt(s,r))||t.push(r);return{arrayValue:{values:t}}}class es extends qi{constructor(e){super(),this.elements=e}}function wd(n,e){let t=Ed(e);for(const r of n.elements)t=t.filter(s=>!gt(s,r));return{arrayValue:{values:t}}}class Ei extends qi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function tu(n){return ve(n.integerValue||n.doubleValue)}function Ed(n){return Na(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function z_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Zr&&s instanceof Zr||r instanceof es&&s instanceof es?nr(r.elements,s.elements,gt):r instanceof Ei&&s instanceof Ei?gt(r.Pe,s.Pe):r instanceof wi&&s instanceof wi}(n.transform,e.transform)}class W_{constructor(e,t){this.version=e,this.transformResults=t}}class Qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zi{}function Td(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wi(n.key,Qe.none()):new ls(n.key,n.data,Qe.none());{const t=n.data,r=Ke.empty();let s=new Ve(De.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new pn(n.key,r,new Ye(s.toArray()),Qe.none())}}function H_(n,e,t){n instanceof ls?function(s,i,a){const c=s.value.clone(),l=ru(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof pn?function(s,i,a){if(!ti(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ru(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Id(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Wr(n,e,t,r){return n instanceof ls?function(i,a,c,l){if(!ti(i.precondition,a))return c;const h=i.value.clone(),p=su(i.fieldTransforms,l,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof pn?function(i,a,c,l){if(!ti(i.precondition,a))return c;const h=su(i.fieldTransforms,l,a),p=a.data;return p.setAll(Id(i)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(i,a,c){return ti(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function G_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=yd(r.transform,s||null);i!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,i))}return t||null}function nu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&nr(r,s,(i,a)=>z_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ls extends zi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pn extends zi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Id(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ru(n,e,t){const r=new Map;ce(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,q_(a,c,t[s]))}return r}function su(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,j_(i,a,e))}return r}class Wi extends zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K_ extends zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Q_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&H_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Wr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Wr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Td(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&nr(this.mutations,e.mutations,(t,r)=>nu(t,r))&&nr(this.baseMutations,e.baseMutations,(t,r)=>nu(t,r))}}class Oa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ce(e.mutations.length===r.length);let s=function(){return x_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Oa(e,t,r,s)}}/**
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
 */class X_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class J_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Te,re;function Y_(n){switch(n){default:return z();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function bd(n){if(n===void 0)return Nt("GRPC error has no .code"),D.UNKNOWN;switch(n){case Te.OK:return D.OK;case Te.CANCELLED:return D.CANCELLED;case Te.UNKNOWN:return D.UNKNOWN;case Te.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Te.INTERNAL:return D.INTERNAL;case Te.UNAVAILABLE:return D.UNAVAILABLE;case Te.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Te.NOT_FOUND:return D.NOT_FOUND;case Te.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Te.ABORTED:return D.ABORTED;case Te.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Te.DATA_LOSS:return D.DATA_LOSS;default:return z()}}(re=Te||(Te={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Z_(){return new TextEncoder}/**
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
 */const ey=new bn([4294967295,4294967295],0);function iu(n){const e=Z_().encode(n),t=new Kh;return t.update(e),new Uint8Array(t.digest())}function ou(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new bn([t,r],0),new bn([s,i],0)]}class La{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ur(`Invalid padding: ${t}`);if(r<0)throw new Ur(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=bn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(bn.fromNumber(r)));return s.compare(ey)===1&&(s=new bn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=iu(e),[r,s]=ou(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new La(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=iu(e),[r,s]=ou(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hi(H.min(),s,new ge(oe),Dt(),Z())}}class us{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new us(r,t,Z(),Z(),Z())}}/**
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
 */class ni{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Ad{constructor(e,t){this.targetId=e,this.me=t}}class Sd{constructor(e,t,r=Me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class au{constructor(){this.fe=0,this.ge=lu(),this.pe=Me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new us(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=lu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ty{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dt(),this.qe=cu(),this.Qe=new ge(oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(ta(i))if(r===0){const a=new j(i.path);this.Ue(t,a,Ue.newNoDocument(a,H.min()))}else ce(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Cn(r).toUint8Array()}catch(l){if(l instanceof rd)return tr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new La(a,s,i)}catch(l){return tr(l instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&ta(c.target)){const l=new j(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Ue.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=Z();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Hi(e,t,this.Qe,this.ke,r);return this.ke=Dt(),this.qe=cu(),this.Qe=new ge(oe),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new au,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ve(oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new au),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function cu(){return new ge(j.comparator)}function lu(){return new ge(j.comparator)}const ny={asc:"ASCENDING",desc:"DESCENDING"},ry={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sy={and:"AND",or:"OR"};class iy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ra(n,e){return n.useProto3Json||Ui(e)?e:{value:e}}function Ti(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function oy(n,e){return Ti(n,e.toTimestamp())}function ft(n){return ce(!!n),H.fromTimestamp(function(t){const r=hn(t);return new Ae(r.seconds,r.nanos)}(n))}function xa(n,e){return sa(n,e).canonicalString()}function sa(n,e){const t=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function kd(n){const e=pe.fromString(n);return ce(Vd(e)),e}function ia(n,e){return xa(n.databaseId,e.path)}function Vo(n,e){const t=kd(e);if(t.get(1)!==n.databaseId.projectId)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Cd(t))}function Pd(n,e){return xa(n.databaseId,e)}function ay(n){const e=kd(n);return e.length===4?pe.emptyPath():Cd(e)}function oa(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Cd(n){return ce(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function uu(n,e,t){return{name:ia(n,e),fields:t.value.mapValue.fields}}function cy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(ce(p===void 0||typeof p=="string"),Me.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Me.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const p=h.code===void 0?D.UNKNOWN:bd(h.code);return new x(p,h.message||"")}(a);t=new Sd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vo(n,r.document.name),i=ft(r.document.updateTime),a=r.document.createTime?ft(r.document.createTime):H.min(),c=new Ke({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(s,i,a,c),h=r.targetIds||[],p=r.removedTargetIds||[];t=new ni(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vo(n,r.document),i=r.readTime?ft(r.readTime):H.min(),a=Ue.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ni([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vo(n,r.document),i=r.removedTargetIds||[];t=new ni([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new J_(s,i),c=r.targetId;t=new Ad(c,a)}}return t}function ly(n,e){let t;if(e instanceof ls)t={update:uu(n,e.key,e.value)};else if(e instanceof Wi)t={delete:ia(n,e.key)};else if(e instanceof pn)t={update:uu(n,e.key,e.data),updateMask:yy(e.fieldMask)};else{if(!(e instanceof K_))return z();t={verify:ia(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof wi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Zr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof es)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ei)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:oy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function uy(n,e){return n&&n.length>0?(ce(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?ft(s.updateTime):ft(i);return a.isEqual(H.min())&&(a=ft(i)),new W_(a,s.transformResults||[])}(t,e))):[]}function hy(n,e){return{documents:[Pd(n,e.path)]}}function dy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Pd(n,s);const i=function(h){if(h.length!==0)return Dd(at.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(p=>function(m){return{field:Gn(m.field),direction:my(m.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ra(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function fy(n){let e=ay(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ce(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(_){const m=Nd(_);return m instanceof at&&ad(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(m=>function(k){return new yi(Kn(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(_){let m;return m=typeof _=="object"?_.value:_,Ui(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(_){const m=!!_.before,I=_.values||[];return new _i(I,m)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const m=!_.before,I=_.values||[];return new _i(I,m)}(t.endAt)),D_(e,s,a,i,c,"F",l,h)}function py(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Kn(t.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Kn(t.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Kn(t.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Kn(t.unaryFilter.field);return be.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return be.create(Kn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(r=>Nd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function my(n){return ny[n]}function gy(n){return ry[n]}function _y(n){return sy[n]}function Gn(n){return{fieldPath:n.canonicalString()}}function Kn(n){return De.fromServerFormat(n.fieldPath)}function Dd(n){return n instanceof be?function(t){if(t.op==="=="){if(Xl(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NAN"}};if(Ql(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xl(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NOT_NAN"}};if(Ql(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(t.field),op:gy(t.op),value:t.value}}}(n):n instanceof at?function(t){const r=t.getFilters().map(s=>Dd(s));return r.length===1?r[0]:{compositeFilter:{op:_y(t.op),filters:r}}}(n):z()}function yy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class nn{constructor(e,t,r,s,i=H.min(),a=H.min(),c=Me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vy{constructor(e){this.ct=e}}function wy(n){const e=fy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vi(e,e.limit,"L"):e}/**
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
 */class Ey{constructor(){this.un=new Ty}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(un.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(un.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Ty{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ve(pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ve(pe.comparator)).toArray()}}/**
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
 */class ir{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ir(0)}static kn(){return new ir(-1)}}/**
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
 */class Iy{constructor(){this.changes=new ur(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class by{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ay{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Wr(r.mutation,s,Ye.empty(),Ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const s=In();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Fr();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=In();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Dt();const a=zr(),c=function(){return zr()}();return t.forEach((l,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof pn)?i=i.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),Wr(p.mutation,h,p.mutation.getFieldMask(),Ae.now())):a.set(h.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,p)=>a.set(h,p)),t.forEach((h,p)=>{var _;return c.set(h,new by(p,(_=a.get(h))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const r=zr();let s=new ge((a,c)=>a-c),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let p=r.get(l)||Ye.empty();p=c.applyToLocalView(h,p),r.set(l,p);const _=(s.get(c.batchId)||Z()).add(l);s=s.insert(c.batchId,_)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,p=l.value,_=gd();p.forEach(m=>{if(!i.has(m)){const I=Td(t.get(m),r.get(m));I!==null&&_.set(m,I),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(In());let c=-1,l=i;return a.next(h=>V.forEach(h,(p,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(m=>{l=l.insert(p,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Z())).next(p=>({batchId:c,changes:md(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let s=Fr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Fr();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,l=>{const h=function(_,m){return new cs(m,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((_,m)=>{a=a.insert(_,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,Ue.newInvalidDocument(p)))});let c=Fr();return a.forEach((l,h)=>{const p=i.get(l);p!==void 0&&Wr(p.mutation,h,Ye.empty(),Ae.now()),ji(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ft(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:wy(s.bundledQuery),readTime:ft(s.readTime)}}(t)),V.resolve()}}/**
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
 */class Ry{constructor(){this.overlays=new ge(j.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=In();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=In(),i=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ge((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=In(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=In(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,p)=>c.set(h,p)),!(c.size()>=s)););return V.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new X_(t,r));let i=this.Ir.get(t);i===void 0&&(i=Z(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class ky{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Fa{constructor(){this.Tr=new Ve(ke.Er),this.dr=new Ve(ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ke(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ke(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new j(new pe([])),r=new ke(t,e),s=new ke(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new j(new pe([])),r=new ke(t,e),s=new ke(t,e+1);let i=Z();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ke(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return j.comparator(e.key,t.key)||oe(e.wr,t.wr)}static Ar(e,t){return oe(e.wr,t.wr)||j.comparator(e.key,t.key)}}/**
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
 */class Py{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ve(ke.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Q_(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ke(t,0),s=new ke(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(oe);return t.forEach(s=>{const i=new ke(s,0),a=new ke(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const a=new ke(new j(i),0);let c=new Ve(oe);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ce(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,s=>{const i=new ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ke(t,0),s=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Cy{constructor(e){this.Mr=e,this.docs=function(){return new ge(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(t))}getEntries(e,t){let r=Dt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ue.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Dt();const a=t.path,c=new j(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:p}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||f_(d_(p),r)<=0||(s.has(p.key)||ji(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ny(this)}getSize(e){return V.resolve(this.size)}}class Ny extends Iy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Dy{constructor(e){this.persistence=e,this.Nr=new ur(t=>Da(t),Va),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Fa,this.targetCount=0,this.kr=ir.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ir(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
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
 */class Vy{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ka(0),this.Kr=!1,this.Kr=!0,this.$r=new ky,this.referenceDelegate=e(this),this.Ur=new Dy(this),this.indexManager=new Ey,this.remoteDocumentCache=function(s){return new Cy(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new vy(t),this.Gr=new Sy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ry,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Py(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new My(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class My extends m_{constructor(e){super(),this.currentSequenceNumber=e}}class Ua{constructor(e){this.persistence=e,this.Jr=new Fa,this.Yr=null}static Zr(e){return new Ua(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=j.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Ba{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=Z(),s=Z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ba(e,t.fromCache,r,s)}}/**
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
 */class Oy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ly{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xm()?8:g_(Be())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Oy;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Mr()<=te.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Hn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Mr()<=te.DEBUG&&U("QueryEngine","Query:",Hn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Mr()<=te.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Hn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dt(t))):V.resolve())}Yi(e,t){if(eu(t))return V.resolve(null);let r=dt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=vi(t,null,"F"),r=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Z(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,c);return this.ns(t,h,a,l.readTime)?this.Yi(e,vi(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return eu(t)||s.isEqual(H.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?V.resolve(null):(Mr()<=te.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hn(t)),this.rs(e,a,t,h_(s,-1)).next(c=>c))})}ts(e,t){let r=new Ve(fd(e));return t.forEach((s,i)=>{ji(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Mr()<=te.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Hn(t)),this.Ji.getDocumentsMatchingQuery(e,t,un.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ge(oe),this._s=new ur(i=>Da(i),Va),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ay(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Fy(n,e,t,r){return new xy(n,e,t,r)}async function Md(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Z();for(const h of s){a.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of i){c.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function Uy(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,p){const _=h.batch,m=_.keys();let I=V.resolve();return m.forEach(k=>{I=I.next(()=>p.getEntry(l,k)).next(C=>{const N=h.docVersions.get(k);ce(N!==null),C.version.compareTo(N)<0&&(_.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),p.addEntry(C)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(l,_))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Z();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Od(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function By(n,e){const t=G(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,_)=>{const m=s.get(_);if(!m)return;c.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,_)));let I=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?I=I.withResumeToken(Me.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):p.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(p.resumeToken,r)),s=s.insert(_,I),function(C,N,O){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,I,p)&&c.push(t.Ur.updateTargetData(i,I))});let l=Dt(),h=Z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push($y(i,a,e.documentUpdates).next(p=>{l=p.Ps,h=p.Is})),!r.isEqual(H.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(_=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function $y(n,e,t){let r=Z(),s=Z();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Dt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):U("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function jy(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qy(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new nn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function aa(n,e,t){const r=G(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!as(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function hu(n,e,t){const r=G(n);let s=H.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,p){const _=G(l),m=_._s.get(p);return m!==void 0?V.resolve(_.os.get(m)):_.Ur.getTargetData(h,p)}(r,a,dt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:Z())).next(c=>(zy(r,M_(e),c),{documents:c,Ts:i})))}function zy(n,e,t){let r=n.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class du{constructor(){this.activeTargetIds=B_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wy{constructor(){this.so=new du,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new du,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Hy{_o(e){}shutdown(){}}/**
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
 */class fu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qs=null;function Mo(){return qs===null?qs=function(){return 268435456+Math.round(2147483648*Math.random())}():qs++,"0x"+qs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ky{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const xe="WebChannelConnection";class Qy extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=Mo(),l=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,l,h,s).then(p=>(U("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw tr("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",s),p})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=Gy[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Mo();return new Promise((a,c)=>{const l=new Qh;l.setWithCredentials(!0),l.listenOnce(Xh.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Zs.NO_ERROR:const p=l.getResponseJson();U(xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case Zs.TIMEOUT:U(xe,`RPC '${e}' ${i} timed out`),c(new x(D.DEADLINE_EXCEEDED,"Request time out"));break;case Zs.HTTP_ERROR:const _=l.getStatus();if(U(xe,`RPC '${e}' ${i} failed with status:`,_,"response text:",l.getResponseText()),_>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m?.error;if(I&&I.status&&I.message){const k=function(N){const O=N.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(O)>=0?O:D.UNKNOWN}(I.status);c(new x(k,I.message))}else c(new x(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new x(D.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U(xe,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);U(xe,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=Mo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Zh(),c=Yh(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=i.join("");U(xe,`Creating RPC '${e}' stream ${s}: ${p}`,l);const _=a.createWebChannel(p,l);let m=!1,I=!1;const k=new Ky({Io:N=>{I?U(xe,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(U(xe,`Opening RPC '${e}' stream ${s} transport.`),_.open(),m=!0),U(xe,`RPC '${e}' stream ${s} sending:`,N),_.send(N))},To:()=>_.close()}),C=(N,O,L)=>{N.listen(O,$=>{try{L($)}catch(K){setTimeout(()=>{throw K},0)}})};return C(_,xr.EventType.OPEN,()=>{I||(U(xe,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),C(_,xr.EventType.CLOSE,()=>{I||(I=!0,U(xe,`RPC '${e}' stream ${s} transport closed`),k.So())}),C(_,xr.EventType.ERROR,N=>{I||(I=!0,tr(xe,`RPC '${e}' stream ${s} transport errored:`,N),k.So(new x(D.UNAVAILABLE,"The operation could not be completed")))}),C(_,xr.EventType.MESSAGE,N=>{var O;if(!I){const L=N.data[0];ce(!!L);const $=L,K=$.error||((O=$[0])===null||O===void 0?void 0:O.error);if(K){U(xe,`RPC '${e}' stream ${s} received error:`,K);const ee=K.status;let Y=function(E){const b=Te[E];if(b!==void 0)return bd(b)}(ee),T=K.message;Y===void 0&&(Y=D.INTERNAL,T="Unknown error status: "+ee+" with message "+K.message),I=!0,k.So(new x(Y,T)),_.close()}else U(xe,`RPC '${e}' stream ${s} received:`,L),k.bo(L)}}),C(c,Jh.STAT_EVENT,N=>{N.stat===Jo.PROXY?U(xe,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Jo.NOPROXY&&U(xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Oo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){return new iy(n,!0)}/**
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
 */class Ld{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class xd{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ld(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Nt(t.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new x(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xy extends xd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=cy(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?ft(a.readTime):H.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=oa(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=ta(l)?{documents:hy(i,l)}:{query:dy(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Rd(i,a.resumeToken);const h=ra(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Ti(i,a.snapshotVersion.toTimestamp());const h=ra(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=py(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=oa(this.serializer),t.removeTarget=e,this.a_(t)}}class Jy extends xd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=uy(e.writeResults,e.commitTime),r=ft(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=oa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ly(this.serializer,r))};this.a_(t)}}/**
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
 */class Yy extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,sa(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,sa(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Zy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nt(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class ev{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ln(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=G(l);h.L_.add(4),await hs(h),h.q_.set("Unknown"),h.L_.delete(4),await Ki(h)}(this))})}),this.q_=new Zy(r,s)}}async function Ki(n){if(Ln(n))for(const e of n.B_)await e(!0)}async function hs(n){for(const e of n.B_)await e(!1)}function Fd(n,e){const t=G(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),za(t)?qa(t):hr(t).r_()&&ja(t,e))}function $a(n,e){const t=G(n),r=hr(t);t.N_.delete(e),r.r_()&&Ud(t,e),t.N_.size===0&&(r.r_()?r.o_():Ln(t)&&t.q_.set("Unknown"))}function ja(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hr(n).A_(e)}function Ud(n,e){n.Q_.xe(e),hr(n).R_(e)}function qa(n){n.Q_=new ty({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),hr(n).start(),n.q_.v_()}function za(n){return Ln(n)&&!hr(n).n_()&&n.N_.size>0}function Ln(n){return G(n).L_.size===0}function Bd(n){n.Q_=void 0}async function tv(n){n.q_.set("Online")}async function nv(n){n.N_.forEach((e,t)=>{ja(n,e)})}async function rv(n,e){Bd(n),za(n)?(n.q_.M_(e),qa(n)):n.q_.set("Unknown")}async function sv(n,e,t){if(n.q_.set("Online"),e instanceof Sd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ii(n,r)}else if(e instanceof ni?n.Q_.Ke(e):e instanceof Ad?n.Q_.He(e):n.Q_.We(e),!t.isEqual(H.min()))try{const r=await Od(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const p=i.N_.get(l);if(!p)return;i.N_.set(l,p.withResumeToken(Me.EMPTY_BYTE_STRING,p.snapshotVersion)),Ud(i,l);const _=new nn(p.target,l,h,p.sequenceNumber);ja(i,_)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ii(n,r)}}async function Ii(n,e,t){if(!as(e))throw e;n.L_.add(1),await hs(n),n.q_.set("Offline"),t||(t=()=>Od(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ki(n)})}function $d(n,e){return e().catch(t=>Ii(n,t,e))}async function Qi(n){const e=G(n),t=dn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;iv(e);)try{const s=await jy(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,ov(e,s)}catch(s){await Ii(e,s)}jd(e)&&qd(e)}function iv(n){return Ln(n)&&n.O_.length<10}function ov(n,e){n.O_.push(e);const t=dn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function jd(n){return Ln(n)&&!dn(n).n_()&&n.O_.length>0}function qd(n){dn(n).start()}async function av(n){dn(n).p_()}async function cv(n){const e=dn(n);for(const t of n.O_)e.m_(t.mutations)}async function lv(n,e,t){const r=n.O_.shift(),s=Oa.from(r,e,t);await $d(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qi(n)}async function uv(n,e){e&&dn(n).V_&&await async function(r,s){if(function(a){return Y_(a)&&a!==D.ABORTED}(s.code)){const i=r.O_.shift();dn(r).s_(),await $d(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qi(r)}}(n,e),jd(n)&&qd(n)}async function pu(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ln(t);t.L_.add(3),await hs(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ki(t)}async function hv(n,e){const t=G(n);e?(t.L_.delete(2),await Ki(t)):e||(t.L_.add(2),await hs(t),t.q_.set("Unknown"))}function hr(n){return n.K_||(n.K_=function(t,r,s){const i=G(t);return i.w_(),new Xy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:tv.bind(null,n),Ro:nv.bind(null,n),mo:rv.bind(null,n),d_:sv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),za(n)?qa(n):n.q_.set("Unknown")):(await n.K_.stop(),Bd(n))})),n.K_}function dn(n){return n.U_||(n.U_=function(t,r,s){const i=G(t);return i.w_(),new Jy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:av.bind(null,n),mo:uv.bind(null,n),f_:cv.bind(null,n),g_:lv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Qi(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Wa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Wa(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ha(n,e){if(Nt("AsyncQueue",`${e}: ${n}`),as(n))return new x(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Xn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Fr(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new Xn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class mu{constructor(){this.W_=new ge(j.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class or{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new or(e,t,Xn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class dv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class fv{constructor(){this.queries=gu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=gu(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new x(D.ABORTED,"Firestore shutting down"))}}function gu(){return new ur(n=>dd(n),$i)}async function Ga(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new dv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ha(a,`Initialization of query '${Hn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Qa(t)}async function Ka(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function pv(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Qa(t)}function mv(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Qa(n){n.Y_.forEach(e=>{e.next()})}var ca,_u;(_u=ca||(ca={})).ea="default",_u.Cache="cache";class Xa{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ca.Cache}}/**
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
 */class zd{constructor(e){this.key=e}}class Wd{constructor(e){this.key=e}}class gv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=fd(e),this.Ra=new Xn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new mu,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,_)=>{const m=s.get(p),I=ji(this.query,_)?_:null,k=!!m&&this.mutatedKeys.has(m.key),C=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;m&&I?m.data.isEqual(I.data)?k!==C&&(r.track({type:3,doc:I}),N=!0):this.ga(m,I)||(r.track({type:2,doc:I}),N=!0,(l&&this.Aa(I,l)>0||h&&this.Aa(I,h)<0)&&(c=!0)):!m&&I?(r.track({type:0,doc:I}),N=!0):m&&!I&&(r.track({type:1,doc:m}),N=!0,(l||h)&&(c=!0)),N&&(I?(a=a.add(I),i=C?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,_)=>function(I,k){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return C(I)-C(k)}(p.type,_.type)||this.Aa(p.doc,_.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,a.length!==0||h?{snapshot:new or(this.query,e.Ra,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Wd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new zd(r))}),t}ba(e){this.Ta=e.Ts,this.da=Z();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return or.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _v{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class yv{constructor(e){this.key=e,this.va=!1}}class vv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ur(c=>dd(c),$i),this.Ma=new Map,this.xa=new Set,this.Oa=new ge(j.comparator),this.Na=new Map,this.La=new Fa,this.Ba={},this.ka=new Map,this.qa=ir.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wv(n,e,t=!0){const r=Jd(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Hd(r,e,t,!0),s}async function Ev(n,e){const t=Jd(n);await Hd(t,e,!0,!1)}async function Hd(n,e,t,r){const s=await qy(n.localStore,dt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Tv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Fd(n.remoteStore,s),c}async function Tv(n,e,t,r,s){n.Ka=(_,m,I)=>async function(C,N,O,L){let $=N.view.ma(O);$.ns&&($=await hu(C.localStore,N.query,!1).then(({documents:T})=>N.view.ma(T,$)));const K=L&&L.targetChanges.get(N.targetId),ee=L&&L.targetMismatches.get(N.targetId)!=null,Y=N.view.applyChanges($,C.isPrimaryClient,K,ee);return vu(C,N.targetId,Y.wa),Y.snapshot}(n,_,m,I);const i=await hu(n.localStore,e,!0),a=new gv(e,i.Ts),c=a.ma(i.documents),l=us.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);vu(n,t,h.wa);const p=new _v(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Iv(n,e,t){const r=G(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!$i(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await aa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&$a(r.remoteStore,s.targetId),la(r,s.targetId)}).catch(os)):(la(r,s.targetId),await aa(r.localStore,s.targetId,!0))}async function bv(n,e){const t=G(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$a(t.remoteStore,r.targetId))}async function Av(n,e,t){const r=Dv(n);try{const s=await function(a,c){const l=G(a),h=Ae.now(),p=c.reduce((I,k)=>I.add(k.key),Z());let _,m;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let k=Dt(),C=Z();return l.cs.getEntries(I,p).next(N=>{k=N,k.forEach((O,L)=>{L.isValidDocument()||(C=C.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,k)).next(N=>{_=N;const O=[];for(const L of c){const $=G_(L,_.get(L.key).overlayedDocument);$!=null&&O.push(new pn(L.key,$,sd($.value.mapValue),Qe.exists(!0)))}return l.mutationQueue.addMutationBatch(I,h,O,c)}).next(N=>{m=N;const O=N.applyToLocalDocumentSet(_,C);return l.documentOverlayCache.saveOverlays(I,N.batchId,O)})}).then(()=>({batchId:m.batchId,changes:md(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Ba[a.currentUser.toKey()];h||(h=new ge(oe)),h=h.insert(c,l),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await ds(r,s.changes),await Qi(r.remoteStore)}catch(s){const i=Ha(s,"Failed to persist write");t.reject(i)}}async function Gd(n,e){const t=G(n);try{const r=await By(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?ce(a.va):s.removedDocuments.size>0&&(ce(a.va),a.va=!1))}),await ds(t,r,e)}catch(r){await os(r)}}function yu(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=G(a);l.onlineState=c;let h=!1;l.queries.forEach((p,_)=>{for(const m of _.j_)m.Z_(c)&&(h=!0)}),h&&Qa(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sv(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ge(j.comparator);a=a.insert(i,Ue.newNoDocument(i,H.min()));const c=Z().add(i),l=new Hi(H.min(),new Map,new ge(oe),a,c);await Gd(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ja(r)}else await aa(r.localStore,e,!1).then(()=>la(r,e,t)).catch(os)}async function Rv(n,e){const t=G(n),r=e.batch.batchId;try{const s=await Uy(t.localStore,e);Qd(t,r,null),Kd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ds(t,s)}catch(s){await os(s)}}async function kv(n,e,t){const r=G(n);try{const s=await function(a,c){const l=G(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return l.mutationQueue.lookupMutationBatch(h,c).next(_=>(ce(_!==null),p=_.keys(),l.mutationQueue.removeMutationBatch(h,_))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>l.localDocuments.getDocuments(h,p))})}(r.localStore,e);Qd(r,e,t),Kd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ds(r,s)}catch(s){await os(s)}}function Kd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Qd(n,e,t){const r=G(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function la(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Xd(n,r)})}function Xd(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&($a(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ja(n))}function vu(n,e,t){for(const r of t)r instanceof zd?(n.La.addReference(r.key,e),Pv(n,r)):r instanceof Wd?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Xd(n,r.key)):z()}function Pv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ja(n))}function Ja(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new j(pe.fromString(e)),r=n.qa.next();n.Na.set(r,new yv(t)),n.Oa=n.Oa.insert(t,r),Fd(n.remoteStore,new nn(dt(Bi(t.path)),r,"TargetPurposeLimboResolution",ka.oe))}}async function ds(n,e,t){const r=G(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(h=>{var p;if((h||t)&&r.isPrimaryClient){const _=h?!h.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,_?"current":"not-current")}if(h){s.push(h);const _=Ba.Wi(l.targetId,h);i.push(_)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,h){const p=G(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>V.forEach(h,m=>V.forEach(m.$i,I=>p.persistence.referenceDelegate.addReference(_,m.targetId,I)).next(()=>V.forEach(m.Ui,I=>p.persistence.referenceDelegate.removeReference(_,m.targetId,I)))))}catch(_){if(!as(_))throw _;U("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const m=_.targetId;if(!_.fromCache){const I=p.os.get(m),k=I.snapshotVersion,C=I.withLastLimboFreeSnapshotVersion(k);p.os=p.os.insert(m,C)}}}(r.localStore,i))}async function Cv(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await Md(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new x(D.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ds(t,r.hs)}}function Nv(n,e){const t=G(n),r=t.Na.get(e);if(r&&r.va)return Z().add(r.key);{let s=Z();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Jd(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sv.bind(null,e),e.Ca.d_=pv.bind(null,e.eventManager),e.Ca.$a=mv.bind(null,e.eventManager),e}function Dv(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kv.bind(null,e),e}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Fy(this.persistence,new Ly,e.initialUser,this.serializer)}Ga(e){return new Vy(Ua.Zr,this.serializer)}Wa(e){return new Wy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bi.provider={build:()=>new bi};class ua{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cv.bind(null,this.syncEngine),await hv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fv}()}createDatastore(e){const t=Gi(e.databaseInfo.databaseId),r=function(i){return new Qy(i)}(e.databaseInfo);return function(i,a,c,l){return new Yy(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new ev(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>yu(this.syncEngine,t,0),function(){return fu.D()?new fu:new Hy}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,p){const _=new vv(s,i,a,c,l,h);return p&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);U("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await hs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ua.provider={build:()=>new ua};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ya{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Vv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=td.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ha(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lo(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Md(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Mv(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>pu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>pu(e.remoteStore,s)),n._onlineComponents=e}async function Mv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;tr("Error using user provided cache. Falling back to memory cache: "+t),await Lo(n,new bi)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Lo(n,new bi);return n._offlineComponents}async function Yd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await wu(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await wu(n,new ua))),n._onlineComponents}function Ov(n){return Yd(n).then(e=>e.syncEngine)}async function Ai(n){const e=await Yd(n),t=e.eventManager;return t.onListen=wv.bind(null,e.syncEngine),t.onUnlisten=Iv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ev.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bv.bind(null,e.syncEngine),t}function Lv(n,e,t={}){const r=new kt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const p=new Ya({next:m=>{p.Za(),a.enqueueAndForget(()=>Ka(i,_));const I=m.docs.has(c);!I&&m.fromCache?h.reject(new x(D.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&l&&l.source==="server"?h.reject(new x(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new Xa(Bi(c.path),p,{includeMetadataChanges:!0,_a:!0});return Ga(i,_)}(await Ai(n),n.asyncQueue,e,t,r)),r.promise}function xv(n,e,t={}){const r=new kt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const p=new Ya({next:m=>{p.Za(),a.enqueueAndForget(()=>Ka(i,_)),m.fromCache&&l.source==="server"?h.reject(new x(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new Xa(c,p,{includeMetadataChanges:!0,_a:!0});return Ga(i,_)}(await Ai(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Zd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Map;/**
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
 */function ef(n,e,t){if(!t)throw new x(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Fv(n,e,t,r){if(e===!0&&r===!0)throw new x(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tu(n){if(!j.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Iu(n){if(j.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xi(n);throw new x(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Fv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ji{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new n_;switch(r.type){case"firstParty":return new o_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Eu.get(t);r&&(U("ComponentProvider","Removing Datastore"),Eu.delete(t),r.terminate())}(this),Promise.resolve()}}function Uv(n,e,t,r={}){var s;const i=(n=Ze(n,Ji))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Fe.MOCK_USER;else{c=Cm(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new x(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Fe(h)}n._authCredentials=new r_(new ed(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mn(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class an extends mn{constructor(e,t,r){super(e,t,Bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new j(e))}withConverter(e){return new an(this.firestore,e,this._path)}}function Pe(n,e,...t){if(n=Se(n),ef("collection","path",e),n instanceof Ji){const r=pe.fromString(e,...t);return Iu(r),new an(n,null,r)}{if(!(n instanceof He||n instanceof an))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Iu(r),new an(n.firestore,null,r)}}function rt(n,e,...t){if(n=Se(n),arguments.length===1&&(e=td.newId()),ef("doc","path",e),n instanceof Ji){const r=pe.fromString(e,...t);return Tu(r),new He(n,null,new j(r))}{if(!(n instanceof He||n instanceof an))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Tu(r),new He(n.firestore,n instanceof an?n.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ld(this,"async_queue_retry"),this.Vu=()=>{const r=Oo();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Oo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Oo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new kt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!as(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Wa.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Su(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Vt extends Ji{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Au,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Au(e),this._firestoreClient=void 0,await e}}}function Bv(n,e){const t=typeof n=="object"?n:Wh(),r=typeof n=="string"?n:"(default)",s=Sa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=km("firestore");i&&Uv(s,...i)}return s}function fs(n){if(n._terminated)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$v(n),n._firestoreClient}function $v(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,p){return new v_(c,l,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Zd(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Vv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(Me.fromBase64String(e))}catch(t){throw new x(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ar(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this._methodName=e}}/**
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
 */class ec{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */class tc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const jv=/^__.*__$/;class qv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new pn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ls(e,this.data,t,this.fieldTransforms)}}class tf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new pn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class nc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Si(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(nf(this.Cu)&&jv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class zv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gi(e)}Qu(e,t,r,s=!1){return new nc({Cu:e,methodName:t,qu:r,path:De.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yi(n){const e=n._freezeSettings(),t=Gi(n._databaseId);return new zv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rf(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);rc("Data must be an object, but it was:",a,r);const c=af(r,a);let l,h;if(i.merge)l=new Ye(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const _ of i.mergeFields){const m=ha(e,_,t);if(!a.contains(m))throw new x(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lf(p,m)||p.push(m)}l=new Ye(p),h=a.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,h=a.fieldTransforms;return new qv(new Ke(c),l,h)}class Zi extends Za{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zi}}function sf(n,e,t,r){const s=n.Qu(1,e,t);rc("Data must be an object, but it was:",s,r);const i=[],a=Ke.empty();On(r,(l,h)=>{const p=sc(e,l,t);h=Se(h);const _=s.Nu(p);if(h instanceof Zi)i.push(p);else{const m=ps(h,_);m!=null&&(i.push(p),a.set(p,m))}});const c=new Ye(i);return new tf(a,c,s.fieldTransforms)}function of(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[ha(e,r,t)],l=[s];if(i.length%2!=0)throw new x(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ha(e,i[m])),l.push(i[m+1]);const h=[],p=Ke.empty();for(let m=c.length-1;m>=0;--m)if(!lf(h,c[m])){const I=c[m];let k=l[m];k=Se(k);const C=a.Nu(I);if(k instanceof Zi)h.push(I);else{const N=ps(k,C);N!=null&&(h.push(I),p.set(I,N))}}const _=new Ye(h);return new tf(p,_,a.fieldTransforms)}function Wv(n,e,t,r=!1){return ps(t,n.Qu(r?4:3,e))}function ps(n,e){if(cf(n=Se(n)))return rc("Unsupported field value:",e,n),af(n,e);if(n instanceof Za)return function(r,s){if(!nf(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=ps(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ae.fromDate(r);return{timestampValue:Ti(s.serializer,i)}}if(r instanceof Ae){const i=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ti(s.serializer,i)}}if(r instanceof ec)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ar)return{bytesValue:Rd(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tc)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ma(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Xi(r)}`)}(n,e)}function af(n,e){const t={};return nd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):On(n,(r,s)=>{const i=ps(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function cf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof ec||n instanceof ar||n instanceof He||n instanceof Za||n instanceof tc)}function rc(n,e,t){if(!cf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Xi(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ha(n,e,t){if((e=Se(e))instanceof dr)return e._internalPath;if(typeof e=="string")return sc(n,e);throw Si("Field path arguments must be of type string or ",n,!1,void 0,t)}const Hv=new RegExp("[~\\*/\\[\\]]");function sc(n,e,t){if(e.search(Hv)>=0)throw Si(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dr(...e.split("."))._internalPath}catch{throw Si(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Si(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new x(D.INVALID_ARGUMENT,c+n+l)}function lf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ic("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gv extends uf{data(){return super.data()}}function ic(n,e){return typeof e=="string"?sc(n,e):e instanceof dr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oc{}class df extends oc{}function tt(n,e,...t){let r=[];e instanceof oc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof ac).length,c=i.filter(l=>l instanceof eo).length;if(a>1||a>0&&c>0)throw new x(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class eo extends df{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new eo(e,t,r)}_apply(e){const t=this._parse(e);return ff(e._query,t),new mn(e.firestore,e.converter,na(e._query,t))}_parse(e){const t=Yi(e.firestore);return function(i,a,c,l,h,p,_){let m;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new x(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ku(_,p);const I=[];for(const k of _)I.push(Ru(l,i,k));m={arrayValue:{values:I}}}else m=Ru(l,i,_)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ku(_,p),m=Wv(c,a,_,p==="in"||p==="not-in");return be.create(h,p,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function We(n,e,t){const r=e,s=ic("where",n);return eo._create(s,r,t)}class ac extends oc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ac(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:at.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)ff(a,l),a=na(a,l)}(e._query,t),new mn(e.firestore,e.converter,na(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cc extends df{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new cc(e,t,r)}_apply(e){return new mn(e.firestore,e.converter,vi(e._query,this._limit,this._limitType))}}function zs(n){return cc._create("limit",n,"F")}function Ru(n,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new x(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hd(e)&&t.indexOf("/")!==-1)throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(pe.fromString(t));if(!j.isDocumentKey(r))throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kl(n,new j(r))}if(t instanceof He)return Kl(n,t._key);throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xi(t)}.`)}function ku(n,e){if(!Array.isArray(n)||n.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ff(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Kv{convertValue(e,t="none"){switch(Nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return On(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ve(a.doubleValue));return new tc(i)}convertGeoPoint(e){return new ec(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ca(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Xr(e));default:return null}}convertTimestamp(e){const t=hn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);ce(Vd(r));const s=new Jr(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||Nt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mf extends uf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ic("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ri extends mf{data(e={}){return super.data(e)}}class gf{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Br(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ri(this._firestore,this._userDataWriter,r.key,r,new Br(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Br(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Br(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Qv(c.type),doc:l,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Qv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n){n=Ze(n,He);const e=Ze(n.firestore,Vt);return Lv(fs(e),n._key).then(t=>_f(e,n,t))}class lc extends Kv{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function Jv(n){n=Ze(n,mn);const e=Ze(n.firestore,Vt),t=fs(e),r=new lc(e);return hf(n._query),xv(t,n._query).then(s=>new gf(e,r,n,s))}function Yv(n,e,t,...r){n=Ze(n,He);const s=Ze(n.firestore,Vt),i=Yi(s);let a;return a=typeof(e=Se(e))=="string"||e instanceof dr?of(i,"updateDoc",n._key,e,t,r):sf(i,"updateDoc",n._key,e),to(s,[a.toMutation(n._key,Qe.exists(!0))])}function Zv(n){return to(Ze(n.firestore,Vt),[new Wi(n._key,Qe.none())])}function ew(n,e){const t=Ze(n.firestore,Vt),r=rt(n),s=pf(n.converter,e);return to(t,[rf(Yi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then(()=>r)}function tw(n,...e){var t,r,s;n=Se(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Su(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Su(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(s=_.complete)===null||s===void 0?void 0:s.bind(_)}let l,h,p;if(n instanceof He)h=Ze(n.firestore,Vt),p=Bi(n._key.path),l={next:_=>{e[a]&&e[a](_f(h,n,_))},error:e[a+1],complete:e[a+2]};else{const _=Ze(n,mn);h=Ze(_.firestore,Vt),p=_._query;const m=new lc(h);l={next:I=>{e[a]&&e[a](new gf(h,m,_,I))},error:e[a+1],complete:e[a+2]},hf(n._query)}return function(m,I,k,C){const N=new Ya(C),O=new Xa(I,N,k);return m.asyncQueue.enqueueAndForget(async()=>Ga(await Ai(m),O)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>Ka(await Ai(m),O))}}(fs(h),p,c,l)}function to(n,e){return function(r,s){const i=new kt;return r.asyncQueue.enqueueAndForget(async()=>Av(await Ov(r),s,i)),i.promise}(fs(n),e)}function _f(n,e,t){const r=t.docs.get(e._key),s=new lc(n);return new mf(n,s,e._key,r,new Br(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Yi(e)}set(e,t,r){this._verifyNotCommitted();const s=xo(e,this._firestore),i=pf(s.converter,t,r),a=rf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Qe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=xo(e,this._firestore);let a;return a=typeof(t=Se(t))=="string"||t instanceof dr?of(this._dataReader,"WriteBatch.update",i._key,t,r,s):sf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=xo(e,this._firestore);return this._mutations=this._mutations.concat(new Wi(t._key,Qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xo(n,e){if((n=Se(n)).firestore!==e)throw new x(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n){return fs(n=Ze(n,Vt)),new nw(n,e=>to(n,e))}(function(e,t=!0){(function(s){lr=s})(cr),er(new kn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Vt(new s_(r.getProvider("auth-internal")),new c_(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new x(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jr(h.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),on(ql,"4.7.3",e),on(ql,"4.7.3","esm2017")})();function uc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function yf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sw=yf,vf=new ss("auth","Firebase",yf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new ba("@firebase/auth");function iw(n,...e){Ri.logLevel<=te.WARN&&Ri.warn(`Auth (${cr}): ${n}`,...e)}function si(n,...e){Ri.logLevel<=te.ERROR&&Ri.error(`Auth (${cr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,...e){throw hc(n,...e)}function pt(n,...e){return hc(n,...e)}function wf(n,e,t){const r=Object.assign(Object.assign({},sw()),{[e]:t});return new ss("auth","Firebase",r).create(e,{appName:n.name})}function cn(n){return wf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return vf.create(n,...e)}function q(n,e,...t){if(!n)throw hc(e,...t)}function At(n){const e="INTERNAL ASSERTION FAILED: "+n;throw si(e),new Error(e)}function Ot(n,e){n||At(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ow(){return Pu()==="http:"||Pu()==="https:"}function Pu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ow()||Mm()||"connection"in navigator)?navigator.onLine:!0}function cw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ot(t>e,"Short delay should be less than long delay!"),this.isMobile=Nm()||Om()}get(){return aw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,e){Ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new ms(3e4,6e4);function no(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fr(n,e,t,r,s={}){return Tf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=is(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return Vm()||(h.referrerPolicy="no-referrer"),Ef.fetch()(bf(n,n.config.apiHost,t,c),h)})}async function Tf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},lw),e);try{const s=new hw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ws(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ws(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ws(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wf(n,p,h);Mt(n,p)}}catch(s){if(s instanceof Lt)throw s;Mt(n,"network-request-failed",{message:String(s)})}}async function If(n,e,t,r,s={}){const i=await fr(n,e,t,r,s);return"mfaPendingCredential"in i&&Mt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function bf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?dc(n.config,s):`${n.config.apiScheme}://${s}`}class hw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),uw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ws(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=pt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(n,e){return fr(n,"POST","/v1/accounts:delete",e)}async function Af(n,e){return fr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fw(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=fc(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Hr(Fo(s.auth_time)),issuedAtTime:Hr(Fo(s.iat)),expirationTime:Hr(Fo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Fo(n){return Number(n)*1e3}function fc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fh(t);return s?JSON.parse(s):(si("Failed to decode base64 JWT payload"),null)}catch(s){return si("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Cu(n){const e=fc(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Lt&&pw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function pw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ki(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ts(n,Af(t,{idToken:r}));q(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Sf(i.providerUserInfo):[],c=_w(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,p=l?h:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new fa(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,_)}async function gw(n){const e=Se(n);await ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _w(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sf(n){return n.map(e=>{var{providerId:t}=e,r=uc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e){const t=await Tf(n,{},async()=>{const r=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=bf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ef.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vw(n,e){return fr(n,"POST","/v2/accounts:revokeToken",no(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Cu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await yw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Jn;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class St{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ts(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fw(this,e)}reload(){return gw(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ki(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await ts(this,dw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,p;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,I=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,O=(h=t.createdAt)!==null&&h!==void 0?h:void 0,L=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:$,emailVerified:K,isAnonymous:ee,providerData:Y,stsTokenManager:T}=t;q($&&T,e,"internal-error");const y=Jn.fromJSON(this.name,T);q(typeof $=="string",e,"internal-error"),Xt(_,e.name),Xt(m,e.name),q(typeof K=="boolean",e,"internal-error"),q(typeof ee=="boolean",e,"internal-error"),Xt(I,e.name),Xt(k,e.name),Xt(C,e.name),Xt(N,e.name),Xt(O,e.name),Xt(L,e.name);const E=new St({uid:$,auth:e,email:m,emailVerified:K,displayName:_,isAnonymous:ee,photoURL:k,phoneNumber:I,tenantId:C,stsTokenManager:y,createdAt:O,lastLoginAt:L});return Y&&Array.isArray(Y)&&(E.providerData=Y.map(b=>Object.assign({},b))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Jn;s.updateFromServerResponse(t);const i=new St({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ki(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new Jn;c.updateFromIdToken(r);const l=new St({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map;function Rt(n){Ot(n instanceof Function,"Expected a class definition");let e=Nu.get(n);return e?(Ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nu.set(n,e),e)}/**
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
 */class Rf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rf.type="NONE";const Du=Rf;/**
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
 */function ii(n,e,t){return`firebase:${n}:${e}:${t}`}class Yn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ii(this.userKey,s.apiKey,i),this.fullPersistenceKey=ii("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yn(Rt(Du),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rt(Du);const a=ii(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(a);if(p){const _=St._fromJSON(e,p);h!==i&&(c=_),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yn(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Yn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vf(e))return"Blackberry";if(Mf(e))return"Webos";if(Pf(e))return"Safari";if((e.includes("chrome/")||Cf(e))&&!e.includes("edge/"))return"Chrome";if(Df(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function kf(n=Be()){return/firefox\//i.test(n)}function Pf(n=Be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cf(n=Be()){return/crios\//i.test(n)}function Nf(n=Be()){return/iemobile/i.test(n)}function Df(n=Be()){return/android/i.test(n)}function Vf(n=Be()){return/blackberry/i.test(n)}function Mf(n=Be()){return/webos/i.test(n)}function pc(n=Be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ww(n=Be()){var e;return pc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ew(){return Lm()&&document.documentMode===10}function Of(n=Be()){return pc(n)||Df(n)||Mf(n)||Vf(n)||/windows phone/i.test(n)||Nf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n,e=[]){let t;switch(n){case"Browser":t=Vu(Be());break;case"Worker":t=`${Vu(Be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cr}/${r}`}/**
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
 */class Tw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Iw(n,e={}){return fr(n,"GET","/v2/passwordPolicy",no(n,e))}/**
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
 */const bw=6;class Aw{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:bw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mu(this),this.idTokenSubscription=new Mu(this),this.beforeStateQueue=new Tw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Af(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ki(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(cn(this));const t=e?Se(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Iw(this),t=new Aw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await vw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[Rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&iw(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ro(n){return Se(n)}class Mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=zm(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rw(n){mc=n}function kw(n){return mc.loadJS(n)}function Pw(){return mc.gapiScript}function Cw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(n,e){const t=Sa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(pi(i,e??{}))return s;Mt(s,"already-initialized")}return t.initialize({options:e})}function Dw(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Rt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Vw(n,e,t){const r=ro(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=xf(e),{host:a,port:c}=Mw(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ow()}function xf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mw(n){const e=xf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ou(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Ou(a)}}}function Ou(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ow(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,t){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n,e){return If(n,"POST","/v1/accounts:signInWithIdp",no(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="http://localhost";class Dn extends Ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=uc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Dn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}buildRequest(){const e={requestUri:Lw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=is(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gs extends Uf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends gs{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Dn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Zt.credential(t,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends gs{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends gs{constructor(){super("twitter.com")}static credential(e,t){return Dn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),a=Lu(r);return new Vn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Lu(r);return new Vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Lu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Lt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Pi(e,t,r,s)}}function Bf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pi._fromErrorAndOperation(n,i,e,r):i})}async function xw(n,e,t=!1){const r=await ts(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vn._forOperation(n,"link",r)}/**
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
 */async function Fw(n,e,t=!1){const{auth:r}=n;if(bt(r.app))return Promise.reject(cn(r));const s="reauthenticate";try{const i=await ts(n,Bf(r,s,e,n),t);q(i.idToken,r,"internal-error");const a=fc(i.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(n.uid===c,r,"user-mismatch"),Vn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Mt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(n,e,t=!1){if(bt(n.app))return Promise.reject(cn(n));const r="signIn",s=await Bf(n,r,e),i=await Vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,e){return If(n,"POST","/v1/accounts:signInWithCustomToken",no(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(n,e){if(bt(n.app))return Promise.reject(cn(n));const t=ro(n),r=await Bw(t,{token:e,returnSecureToken:!0}),s=await Vn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function jw(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function qw(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function zw(n){return Se(n).signOut()}const Ci="__sak";/**
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
 */class $f{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ci,"1"),this.storage.removeItem(Ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=1e3,Hw=10;class jf extends $f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ew()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Hw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jf.type="LOCAL";const Gw=jf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends $f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qf.type="SESSION";const zf=qf;/**
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
 */function Kw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class so{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new so(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await Kw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}so.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Qw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=gc("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const m=_;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function Xw(n){mt().location.href=n}/**
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
 */function Wf(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function Jw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Zw(){return Wf()?self:null}/**
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
 */const Hf="firebaseLocalStorageDb",e0=1,Ni="firebaseLocalStorage",Gf="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function io(n,e){return n.transaction([Ni],e?"readwrite":"readonly").objectStore(Ni)}function t0(){const n=indexedDB.deleteDatabase(Hf);return new _s(n).toPromise()}function pa(){const n=indexedDB.open(Hf,e0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ni,{keyPath:Gf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ni)?e(r):(r.close(),await t0(),e(await pa()))})})}async function xu(n,e,t){const r=io(n,!0).put({[Gf]:e,value:t});return new _s(r).toPromise()}async function n0(n,e){const t=io(n,!1).get(e),r=await new _s(t).toPromise();return r===void 0?null:r.value}function Fu(n,e){const t=io(n,!0).delete(e);return new _s(t).toPromise()}const r0=800,s0=3;class Kf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>s0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=so._getInstance(Zw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Jw(),!this.activeServiceWorker)return;this.sender=new Qw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pa();return await xu(e,Ci,"1"),await Fu(e,Ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>n0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=io(s,!1).getAll();return new _s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kf.type="LOCAL";const i0=Kf;new ms(3e4,6e4);/**
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
 */function o0(n,e){return e?Rt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _c extends Ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function a0(n){return Uw(n.auth,new _c(n),n.bypassAuthState)}function c0(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Fw(t,new _c(n),n.bypassAuthState)}async function l0(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),xw(t,new _c(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a0;case"linkViaPopup":case"linkViaRedirect":return l0;case"reauthViaPopup":case"reauthViaRedirect":return c0;default:Mt(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new ms(2e3,1e4);class Qn extends Qf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u0.get())};e()}}Qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="pendingRedirect",oi=new Map;class d0 extends Qf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await f0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f0(n,e){const t=g0(e),r=m0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function p0(n,e){oi.set(n._key(),e)}function m0(n){return Rt(n._redirectPersistence)}function g0(n){return ii(h0,n.config.apiKey,n.name)}async function _0(n,e,t=!1){if(bt(n.app))return Promise.reject(cn(n));const r=ro(n),s=o0(r,e),a=await new d0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=10*60*1e3;class v0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uu(e))}saveEventToCache(e){this.cachedEventUids.add(Uu(e)),this.lastProcessedEventTime=Date.now()}}function Uu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function w0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(n,e={}){return fr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I0=/^https?/;async function b0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await E0(n);for(const t of e)try{if(A0(t))return}catch{}Mt(n,"unauthorized-domain")}function A0(n){const e=da(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!I0.test(t))return!1;if(T0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const S0=new ms(3e4,6e4);function Bu(){const n=mt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function R0(n){return new Promise((e,t)=>{var r,s,i;function a(){Bu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bu(),t(pt(n,"network-request-failed"))},timeout:S0.get()})}if(!((s=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mt().gapi)===null||i===void 0)&&i.load)a();else{const c=Cw("iframefcb");return mt()[c]=()=>{gapi.load?a():t(pt(n,"network-request-failed"))},kw(`${Pw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ai=null,e})}let ai=null;function k0(n){return ai=ai||R0(n),ai}/**
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
 */const P0=new ms(5e3,15e3),C0="__/auth/iframe",N0="emulator/auth/iframe",D0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M0(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?dc(e,N0):`https://${n.config.authDomain}/${C0}`,r={apiKey:e.apiKey,appName:n.name,v:cr},s=V0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${is(r).slice(1)}`}async function O0(n){const e=await k0(n),t=mt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:M0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=pt(n,"network-request-failed"),c=mt().setTimeout(()=>{i(a)},P0.get());function l(){mt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const L0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x0=500,F0=600,U0="_blank",B0="http://localhost";class $u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $0(n,e,t,r=x0,s=F0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},L0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=Be().toLowerCase();t&&(c=Cf(h)?U0:t),kf(h)&&(e=e||B0,l.scrollbars="yes");const p=Object.entries(l).reduce((m,[I,k])=>`${m}${I}=${k},`,"");if(ww(h)&&c!=="_self")return j0(e||"",c),new $u(null);const _=window.open(e||"",c,p);q(_,n,"popup-blocked");try{_.focus()}catch{}return new $u(_)}function j0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const q0="__/auth/handler",z0="emulator/auth/handler",W0=encodeURIComponent("fac");async function ju(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:cr,eventId:s};if(e instanceof Uf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",qm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof gs){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),h=l?`#${W0}=${encodeURIComponent(l)}`:"";return`${H0(n)}?${is(c).slice(1)}${h}`}function H0({config:n}){return n.emulator?dc(n,z0):`https://${n.authDomain}/${q0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="webStorageSupport";class G0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zf,this._completeRedirectFn=_0,this._overrideRedirectResult=p0}async _openPopup(e,t,r,s){var i;Ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ju(e,t,r,da(),s);return $0(e,a,gc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ju(e,t,r,da(),s);return Xw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await O0(e),r=new v0(e);return t.register("authEvent",s=>(q(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uo,{type:Uo},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[Uo];a!==void 0&&t(!!a),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=b0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Of()||Pf()||pc()}}const K0=G0;var qu="@firebase/auth",zu="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J0(n){er(new kn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lf(n)},h=new Sw(r,s,i,l);return Dw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),er(new kn("auth-internal",e=>{const t=ro(e.getProvider("auth").getImmediate());return(r=>new Q0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(qu,zu,X0(n)),on(qu,zu,"esm2017")}/**
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
 */const Y0=5*60,Z0=$h("authIdTokenMaxAge")||Y0;let Wu=null;const eE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Z0)return;const s=t?.token;Wu!==s&&(Wu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tE(n=Wh()){const e=Sa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Nw(n,{popupRedirectResolver:K0,persistence:[i0,Gw,zf]}),r=$h("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=eE(i.toString());qw(t,a,()=>a(t.currentUser)),jw(t,c=>a(c))}}const s=Uh("auth");return s&&Vw(t,`http://${s}`),t}function nE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Rw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=pt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",nE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J0("Browser");const rE={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},Hu="2008948704-db2goT00",Jf=zh(rE),ae=Bv(Jf),An=tE(Jf);let Yf=()=>{};const sE=new Promise(n=>{Yf=n});let Gu=!1;const iE=setTimeout(()=>yc(),1e4);function yc(){Gu||(Gu=!0,clearTimeout(iE),Yf())}const xn=()=>sE,oE=n=>"m_"+n;async function vc(n,e){try{n&&(!An.currentUser||An.currentUser.uid!==oE(e))&&await $w(An,n)}catch(t){console.warn("firebase sign-in:",t&&t.message)}yc()}const nt=async(...n)=>(await xn(),Jv(...n)),aE=async(...n)=>(await xn(),Xv(...n)),ys=async(...n)=>(await xn(),Yv(...n)),wc=async(...n)=>(await xn(),Zv(...n)),Zf=async(...n)=>(await xn(),ew(...n));function Ku(n,e,t){let r=null,s=!1;return xn().then(()=>{s||(r=tw(n,e,t))}),()=>{s=!0,r&&r()}}function ep(n){const e=rw(n),t=e.commit.bind(e);return e.commit=async()=>(await xn(),t()),e}function tp(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function cE(){return typeof liff<"u"?Promise.resolve():new Promise((n,e)=>{let t=0;const r=setInterval(()=>{typeof liff<"u"?(clearInterval(r),n()):++t>100&&(clearInterval(r),e(new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้")))},100)})}let np=()=>{},oo=!1,rp=()=>{};const lE="เซสชัน LINE หมดอายุ กดเข้าสู่ระบบใหม่ที่แถบด้านบน";function uE(n){rp=n,oo&&n()}function hE(){try{const n=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}liff.login({redirectUri:n})}catch{}}function Di(){oo=!0,rp();const n=new Error(lE);return n.expired=!0,n}const dE=new Promise(n=>{np=n});let ns="pending";const ma="dm:v2:webtoken",fE=20*24*60*60*1e3;function ao(){try{const n=JSON.parse(localStorage.getItem(ma)||"null");return n&&typeof n.token=="string"&&n.token?n:null}catch{return null}}function sp(n){try{n?localStorage.setItem(ma,JSON.stringify({token:n,t:Date.now()})):localStorage.removeItem(ma)}catch{}}async function pE(){const n=ao();if(!(n&&Date.now()-n.t<fE))try{const e=liff.getIDToken();if(!e)return;const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e,kind:"web"})}),r=await t.json().catch(()=>({}));t.ok&&r.success&&r.token&&sp(r.token)}catch{}}const mE="U0d739eea39c312e11c487e22861920d1",gE=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();function ga(n,e,t){return{name:gE(e.name),memberId:n,pictureUrl:/^https:\/\//i.test(e.pictureUrl||"")?e.pictureUrl:"",isAdmin:e.role==="admin"||t===mE,realName:e.realName||"",promptpay:e.promptpay||""}}const _E=["code","state","liffClientId","liffRedirectUri","error","error_description"],yE=()=>{const n=new URLSearchParams(location.search);return n.has("code")||n.has("liffClientId")};function Qu(){try{const n=new URL(location.href);let e=!1;for(const r of _E)n.searchParams.has(r)&&(n.searchParams.delete(r),e=!0);let t=n.hash;t==="#_=_"&&(t="",e=!0),e&&history.replaceState(null,"",n.pathname+(n.search||"")+t)}catch{}}let ci="";function Xu(){return ci}async function vE(){await cE();const n=yE();try{await liff.init({liffId:Hu})}catch(t){if(ci=`เริ่มระบบ LINE ไม่สำเร็จ: ${t&&t.message||t}`,n)Qu(),await liff.init({liffId:Hu});else throw t}if(Qu(),!liff.isLoggedIn()){ns="out",ci=ci||(n?"ล็อกอินกลับมาแล้วแต่ LINE ไม่ยืนยันบัตร (ลองกดเข้าสู่ระบบใหม่อีกครั้ง)":"บัตรล็อกอิน LINE ในเบราว์เซอร์นี้หมดอายุหรือยังไม่มี");const t=op();if(t&&ao()&&!n){try{const s=await aE(rt(ae,"members",String(t.memberId)));if(s.exists())return ga(s.id,s.data(),s.data().lineUserId||"")}catch{}return t}if(t&&!n)return oo=!0,{needLogin:!0};const r=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}return liff.login({redirectUri:r}),null}ns="in",np(),pE();try{const t=sessionStorage.getItem("dept_auth_hash");t&&(sessionStorage.removeItem("dept_auth_hash"),(!location.hash||location.hash==="#"||location.hash==="#_=_")&&(location.hash=t))}catch{}const e=await ip({action:"login"});if(e.member)return await vc(e.firebaseToken,e.member.id),ga(e.member.id,e.member,e.member.lineUserId);if(e.needLink)return{needLink:!0,profile:e.profile||{},candidates:e.candidates||[],suggest:e.suggest||""};throw new Error(e.message||"เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง")}async function ip(n){const e=liff.getIDToken();if(!e)throw new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองรีเฟรชหน้านี้");const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,idToken:e})}),r=await t.json().catch(()=>({}));return!t.ok&&!r.message&&(r.message=`เข้าสู่ระบบไม่สำเร็จ (${t.status})`),r}async function FT(n,e){const t=await ip({action:"link",memberId:e});if(!t.member)throw new Error(t.message||"ผูกบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง");return vs(),await vc(t.firebaseToken,t.member.id),ga(t.member.id,t.member,t.member.lineUserId)}const Ec=24*60*60*1e3,Tc=10*60*1e3,Mn="dm:v2:";function xt(n,e){try{const t=localStorage.getItem(Mn+n);if(!t)return null;const{t:r,v:s}=JSON.parse(t);return Date.now()-r<e?s:null}catch{return null}}function Ft(n,e){try{localStorage.setItem(Mn+n,JSON.stringify({t:Date.now(),v:e}))}catch{}}const wE=30*24*60*60*1e3,EE=7*24*60*60*1e3;function op(){const n=xt("user",wE);return n&&n.name&&n.memberId?n:null}function TE(n){n&&n.name&&n.memberId&&Ft("user",n)}function IE(n,e){const t=xt(`snap:${n}:${e}`,EE);return t&&Array.isArray(t.transactions)&&Array.isArray(t.settlements)&&Array.isArray(t.wallet)?t:null}function bE(n,e,t){Ft(`snap:${n}:${e}`,{transactions:t.transactions,settlements:t.settlements,wallet:t.wallet})}function AE(){return xt("members",1/0)}function _a(){try{Object.keys(localStorage).filter(n=>n.startsWith(Mn)).forEach(n=>localStorage.removeItem(n))}catch{}}const ap=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();async function SE(){const n=xt("members",Tc);if(n)return n;const e=await nt(Pe(ae,"members")),t=[...new Set(e.docs.map(r=>ap(r.data().name)).filter(Boolean))];return Ft("members",t),t}async function RE(n){const e=xt("m:"+n,Ec);if(e)return e;const[t,r]=await Promise.all([nt(tt(Pe(ae,"transactions"),We("date",">=",`${n}-01`),We("date","<=",`${n}-31`))),nt(tt(Pe(ae,"settlements"),We("month","==",n)))]),s={transactions:t.docs.map(i=>({id:i.id,...i.data()})),settlements:r.docs.map(i=>({id:i.id,...i.data()}))};return Ft("m:"+n,s),s}function kE(n,e){const t={transactions:null,settlements:null},r=()=>{t.transactions&&t.settlements&&e({...t})},s=a=>e({error:a}),i=[Ku(tt(Pe(ae,"transactions"),We("date",">=",`${n}-01`),We("date","<=",`${n}-31`)),a=>{t.transactions=a.docs.map(c=>({id:c.id,...c.data()})),r()},s),Ku(tt(Pe(ae,"settlements"),We("month","==",n)),a=>{t.settlements=a.docs.map(c=>({id:c.id,...c.data()})),r()},s)];return()=>i.forEach(a=>a())}async function $e(n,e,{line:t=!1}={}){const r=t?null:ao();if(r){const c=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.token},body:JSON.stringify(e)});let l={};try{l=await c.json()}catch{}if(c.status!==401){if(!c.ok)throw new Error(l.message||`เกิดข้อผิดพลาด (${c.status})`);return l}sp("")}if(oo||ns==="out")throw Di();await Promise.race([dE,new Promise((c,l)=>setTimeout(()=>l(new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองใหม่อีกครั้ง")),2e4))]);const s=liff.getIDToken(),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,idToken:s})});let a={};try{a=await i.json()}catch{}if(i.status===401)throw Di();if(!i.ok)throw new Error(a.message||`เกิดข้อผิดพลาด (${i.status})`);return a}async function PE(n,{current:e=!1}={}){if(!e){const s=xt("w:"+n,Ec);if(s)return s}const t=await $e("/api/shortcut-transaction",{action:"wallet-list",month:n}),r=Array.isArray(t.items)?t.items:[];return e||Ft("w:"+n,r),r}async function CE(n,e){const t={},r=[];for(const c of n){if(c===e)continue;const l=xt("w:"+c,Ec);l?t[c]=l:r.push(c)}if(r.length===0)return t[e]=await PE(e,{current:!0}),t;const s=r.slice().sort()[0],i=await $e("/api/shortcut-transaction",{action:"wallet-list",since:s}),a=Array.isArray(i.items)?i.items:[];t[e]=a.filter(c=>String(c.date||"").startsWith(e));for(const c of r){const l=a.filter(h=>String(h.date||"").startsWith(c));t[c]=l,Ft("w:"+c,l)}return t}async function UT(){const n=await $e("/api/device-token",{},{line:!0});if(!n.success||!n.token)throw new Error(n.message||"สร้างรหัสไม่สำเร็จ");return n}async function BT(){if(ns!=="in")throw Di();const n=await fetch("/api/device-token",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:liff.getIDToken()})});let e={};try{e=await n.json()}catch{}if(!n.ok||!e.success)throw new Error(e.message||"ยกเลิกรหัสไม่สำเร็จ");return e}async function $T(n,e){await $e("/api/shortcut-transaction",{action:"wallet-update",id:n,...e})}async function jT(n){let e=0;for(let t=0;t<n.length;t+=100){const r=await $e("/api/shortcut-transaction",{action:"wallet-update",items:n.slice(t,t+100)});e+=Number(r.updated)||0}return e}async function qT(){const n=await $e("/api/shortcut-transaction",{action:"wallet-template-list"});return Array.isArray(n.items)?n.items:[]}async function zT(n,e){await $e("/api/shortcut-transaction",{action:"wallet-template-update",id:n,...e})}async function WT(n){await $e("/api/shortcut-transaction",{action:"wallet-template-stop",id:n})}const cp=n=>n&&n.plan&&typeof n.plan=="object"?n.plan:{budget:{total:0,cats:{}},months:{},goals:[]};async function NE(){const n=xt("plan",Tc);if(n)return n;const e=cp(await $e("/api/shortcut-transaction",{action:"plan-get"}));return Ft("plan",e),e}const co=async n=>{const e=cp(await $e("/api/shortcut-transaction",n));return Ft("plan",e),e},DE=({scope:n,month:e,total:t,cats:r,clear:s=!1})=>co({action:"plan-budget-set",scope:n,month:e,total:t,cats:r,clear:s}),VE=n=>co({action:"goal-save",...n}),ME=(n,e,t)=>co({action:"goal-move",id:n,amount:e,dir:t}),OE=n=>co({action:"goal-delete",id:n});async function LE(n){return $e("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}async function xE(){const n=xt("profiles",Tc);if(n)return n;const e=await nt(Pe(ae,"members")),t=new Map;e.docs.forEach(s=>{const i=s.data(),a=ap(i.name);if(!a)return;const c={id:s.id,name:a,promptpay:i.promptpay||"",realName:i.realName||"",englishName:i.englishName||"",hasLine:!!i.lineUserId,pictureUrl:/^https?:\/\//i.test(i.pictureUrl||"")?i.pictureUrl:"",role:i.role==="admin"?"admin":"member"},l=t.get(a);(!l||!l.hasLine&&c.hasLine||!l.promptpay&&c.promptpay||!l.pictureUrl&&c.pictureUrl)&&t.set(a,c)});const r=[...t.values()];return Ft("profiles",r),r}function lp(n){try{localStorage.removeItem(Mn+"m:"+n),localStorage.removeItem(Mn+"w:"+n)}catch{}}function vs(){try{localStorage.removeItem(Mn+"profiles"),localStorage.removeItem(Mn+"members")}catch{}}async function Ju(n){return $e("/api/shortcut-transaction",{action:"wallet-delete",id:n})}async function HT(n){let e=0;for(let t=0;t<n.length;t+=50){const r=await $e("/api/shortcut-transaction",{action:"wallet-confirm",ids:n.slice(t,t+50)});e+=Number(r.confirmed)||0}return e}async function FE(n){return(await $e("/api/shortcut-transaction",{action:"wallet-get",id:n})).item||null}async function GT(n){let e=0,t=0;for(let r=0;r<n.length;r+=50){const s=await $e("/api/shortcut-transaction",{action:"wallet-delete-many",ids:n.slice(r,r+50)});e+=Number(s.deleted)||0,t+=Array.isArray(s.failed)?s.failed.length:0}return{deleted:e,failed:t}}async function KT(){return(await nt(tt(Pe(ae,"subscription_templates"),We("active","==",!0)))).docs.map(e=>({id:e.id,...e.data()}))}async function QT(n){await ys(rt(ae,"subscription_templates",String(n)),{active:!1,stoppedAt:new Date})}async function UE(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc),typeof e.icon=="string"&&(t.icon=e.icon),await ys(rt(ae,"transactions",String(n)),t)}async function XT(n){await Zf(Pe(ae,"members"),{name:n,createdAt:new Date().toISOString(),quickAdded:!0,role:"member"}),vs()}async function JT(n,e){const t={realName:String(e.realName||""),promptpay:String(e.promptpay||""),role:e.role==="admin"?"admin":"member",realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date};await ys(rt(ae,"members",String(n)),t),vs()}async function YT(n){const e=n.name;if((await Promise.all([nt(tt(Pe(ae,"transactions"),We("payer","==",e),zs(1))),nt(tt(Pe(ae,"transactions"),We(new dr("splits",e),">=",0),zs(1))),nt(tt(Pe(ae,"settlements"),We("from","==",e),zs(1))),nt(tt(Pe(ae,"settlements"),We("to","==",e),zs(1)))])).some(r=>!r.empty))throw new Error(`ลบ ${e} ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน (ถ้าลบ ยอดหนี้ของคนอื่นจะคำนวณผิด)`);await wc(rt(ae,"members",String(n.id))),vs()}async function ZT({from:n,to:e,amount:t,month:r,adminName:s}){await Zf(Pe(ae,"settlements"),{status:"verified",month:r,from:n,to:e,amount:Number(t),transactionIds:[],createdAt:new Date().toISOString(),verifiedByAdmin:!0,adminId:s||"unknown"})}async function eI(n,e){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(e))throw new Error("เดือนไม่ถูกต้อง");await ys(rt(ae,"settlements",String(n)),{month:e})}async function tI(n){await wc(rt(ae,"settlements",String(n)))}async function nI(){return(await $e("/api/shortcut-transaction",{action:"remind-all"})).message||"สั่งเตือนแล้ว"}async function rI(n){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(n))throw new Error("เดือนไม่ถูกต้อง");const e=await nt(tt(Pe(ae,"transactions"),We("date",">=",`${n}-01`),We("date","<=",`${n}-31`))),t=new Map;e.docs.forEach(a=>t.set(a.id,a.ref));const r=[...new Set(e.docs.map(a=>a.data().groupId).filter(Boolean))];for(const a of r)(await nt(tt(Pe(ae,"transactions"),We("groupId","==",a)))).docs.forEach(l=>t.set(l.id,l.ref));const s=await nt(tt(Pe(ae,"settlements"),We("month","==",n))),i=[...t.values(),...s.docs.map(a=>a.ref)];for(let a=0;a<i.length;a+=400){const c=ep(ae);i.slice(a,a+400).forEach(l=>c.delete(l)),await c.commit()}return lp(n),{bills:t.size,settlements:s.docs.length}}async function BE(n){await wc(rt(ae,"transactions",String(n)))}async function sI(n,e){for(let t=0;t<n.length;t+=10)await Promise.all(n.slice(t,t+10).map(r=>UE(r,{icon:e})));return n.length}async function iI(n){for(let e=0;e<n.length;e+=10)await Promise.all(n.slice(e,e+10).map(t=>BE(t)));return n.length}async function oI(n,e){await ys(rt(ae,"members",String(n)),{...e,realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date}),vs()}async function aI(n,{to:e,amount:t,month:r}){const s=await new Promise((l,h)=>{const p=new FileReader;p.onload=()=>l(String(p.result).split(",")[1]),p.onerror=()=>h(new Error("อ่านไฟล์รูปไม่สำเร็จ")),p.readAsDataURL(n)});if(ns!=="in")throw Di();const i=liff.getIDToken(),a=await fetch("/api/verify-settlement-slip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:i,to:e,amount:t,month:r,base64Image:s})});let c={};try{c=await a.json()}catch{}return{ok:a.ok&&c.success===!0,json:c,status:a.status}}function cI(){try{liff.logout()}catch{}try{zw(An)}catch{}_a(),location.href="/"}async function Yu({docs:n,template:e}){const t=ep(ae);n.forEach(r=>t.set(rt(Pe(ae,"transactions")),r)),e&&t.set(rt(Pe(ae,"subscription_templates")),e),await t.commit()}(async()=>{try{if(typeof An.authStateReady=="function"&&await An.authStateReady(),An.currentUser)return yc();const n=ao();if(!n)return;const e=await fetch("/api/device-token?firebase=1",{headers:{Authorization:"Bearer "+n.token}}),t=await e.json().catch(()=>({}));e.ok&&t.success&&t.member&&await vc(t.firebaseToken,t.member.id)}catch(n){console.warn("firebase pass:",n&&n.message)}})();const Zu=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},eh=60;function $E(n,e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));if(!t)throw new Error("รูปแบบวันที่ไม่ถูกต้อง");const r=Number(t[1]),s=Number(t[2])-1,i=Number(t[3]),a=r*12+s+Number(e),c=Math.floor(a/12),l=a-c*12,h=new Date(Date.UTC(c,l+1,0)).getUTCDate(),p=Math.min(i,h);return`${String(c).padStart(4,"0")}-${String(l+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`}function jE({amount:n,installments:e,splits:t,date:r}){const s=Number(e);if(!Number.isInteger(s)||s<1||s>eh)throw new Error(`จำนวนงวดต้องเป็นเลข 1–${eh}`);const i=Object.keys(t||{});if(i.length===0)throw new Error("ไม่มีผู้ร่วมจ่าย");const a=Zu(n);if(a<=0)throw new Error("ยอดเงินไม่ถูกต้อง");const c=i.map(p=>[p,Zu(t[p])]),l=a-c.reduce((p,[,_])=>p+_,0);if(l!==0){let p=0;c.forEach(([,_],m)=>{_>c[p][1]&&(p=m)}),c[p][1]+=l}const h=[];for(let p=0;p<s;p++){const _={};let m=0;for(const[I,k]of c){const C=Math.floor(k/s),N=p<k-C*s?1:0;_[I]=(C+N)/100,m+=C+N}h.push({index:p+1,date:$E(r,p),amount:m/100,splits:_})}return h}const qE=[["trip",["เที่ยว","โรงแรม","ที่พักรีสอร์ท","เครื่องบิน","ตั๋วเครื่องบิน","airbnb","agoda","ทริป"]],["rent",["ค่าเช่า","ค่าห้อง","ค่าหอ","คอนโด","ค่าส่วนกลาง"]],["drink",["กาแฟ","ชานม","ชาไข่มุก","คาเฟ่","เครื่องดื่ม","น้ำผลไม้","เหล้า","เบียร์","ไวน์","ปาร์ตี้","starbucks","amazon"]],["pet",["แมว","หมา","สุนัข","สัตว์"]],["food",["ข้าว","กิน","อาหาร","ก๋วยเตี๋ยว","ขนม","หมูกระทะ","ชาบู","บุฟเฟ","ส้มตำ","ไก่","หมู","เนื้อ","ปิ้งย่าง","ผัด","ต้ม","แกง","ส้ม","ไอติม","เค้ก","grab food","lineman","line man","foodpanda"]],["bills",["ค่าไฟ","ค่าน้ำ","ค่าเน็ต","อินเทอร์เน็ต","เน็ต","โทรศัพท์","ค่าโทร","netflix","spotify","youtube","disney","subscription","ค่าบริการ","claude","chatgpt","openai","icloud","adobe","canva","hbo","prime video","google one","ค่ามือถือ","ค่าเช่ารายเดือน","dtac","true","ais","3bb","google cloud"]],["travel",["รถ","น้ำมัน","แท็กซี่","grab","bolt","bts","mrt","ทางด่วน","ที่จอดรถ","ค่าเดินทาง","รถเมล์","ตั๋วรถ","civic","honda","toyota","mazda","nissan","isuzu","mitsubishi","benz","bmw","ประกันรถ","ภาษีรถ","พ.ร.บ.","ค่างวดรถ","ผ่อนรถ","ล้างรถ","ค่ารถ"]],["fun",["หนัง","โรงหนัง","เกม","steam","คอนเสิร์ต","บัตรคอน","karaoke","คาราโอเกะ","บอร์ดเกม","ดูหนัง"]],["health",["ค่ายา","ซื้อยา","หมอ","โรงพยาบาล","คลินิก","ฟัน","ตรวจสุขภาพ","วิตามิน","ฟิตเนส","ยิม"]],["gift",["ของขวัญ","วันเกิด","ซองงาน","ทำบุญ","ดอกไม้"]],["goods",["ซื้อ","ของใช้","ช้อป","shopee","lazada","7-11","เซเว่น","ซุปเปอร์","โลตัส","บิ๊กซี","tops","makro","แม็คโคร","ที่ปิ้ง","ครีม","สบู่","ยาสระผม","ตัดผม","ซาลอน"]]];function zE(n){const e=String(n||"").toLowerCase();if(!e.trim())return"other";for(const[t,r]of qE)if(r.some(s=>e.includes(s)))return t;return"other"}const WE=[{key:"food",label:"อาหารและเครื่องดื่ม",short:"อาหาร",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",short:"บิล/รายเดือน",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",short:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",short:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"fun",label:"บันเทิง",short:"บันเทิง",icons:["fa-film"]},{key:"other",label:"อื่นๆ",short:"อื่นๆ",icons:[]}],th=WE.map(n=>n.key),lI=["plane","shield","home","phone","car","gift","heart","star"],uI=["accent","sun","receive","accent2","navy"],HE=80,GE=/^\d{4}-(0[1-9]|1[0-2])$/,Sn=n=>Math.round((Number(n)||0)*100),nh=n=>typeof n=="string"&&GE.test(n),rh=n=>!!(n&&(Number(n.total)>0||Object.values(n.cats||{}).some(e=>Number(e)>0)));function KE(n,e){const t=n||{},r=t.months&&t.months[e];return rh(r)?{total:Number(r.total)||0,cats:{...r.cats||{}},source:"month"}:rh(t.budget)?{total:Number(t.budget.total)||0,cats:{...t.budget.cats||{}},source:"default"}:{total:0,cats:{},source:"none"}}function sh(n,e){return e>0?n>e?"over":n/e*100>=HE?"near":"ok":"none"}const ya=(n,e)=>e>0?Math.round(n/e*100):0;function QE(n,e){const t=n||{total:0,cats:{},source:"none"},r=Object.fromEntries(th.map(h=>[h,Sn((t.cats||{})[h])])),s=Object.values(r).reduce((h,p)=>h+p,0),i=Sn(t.total)>0?Sn(t.total):s,a=Math.max(0,Math.round(Number(e&&e.totalSat)||0)),c=e&&e.cats||{},l=th.filter(h=>r[h]>0).map(h=>{const p=Math.max(0,Math.round(Number(c[h])||0));return{key:h,budgetSat:r[h],spentSat:p,leftSat:r[h]-p,percent:ya(p,r[h]),level:sh(p,r[h])}});return{set:i>0,source:t.source||"none",budgetSat:i,spentSat:a,leftSat:i-a,percent:ya(a,i),level:sh(a,i),cats:l,unassignedSat:Math.max(0,i-s)}}function XE(n,e){if(!nh(n)||!nh(e))return 0;const[t,r]=n.split("-").map(Number),[s,i]=e.split("-").map(Number);return Math.max(0,(s-t)*12+(i-r)+1)}function JE(n,e){return(n&&Array.isArray(n.log)?n.log:[]).filter(t=>String(t.date).startsWith(e)).reduce((t,r)=>t+Sn(r.amount),0)}function up(n,e){const t=n||{},r=Sn(t.target),s=Sn(t.saved),i=Math.max(0,r-s),a=r>0&&s>=r,c=t.deadline?XE(e,t.deadline):0,l=!!t.deadline&&c===0&&!a;let h=0;return a||(h=t.deadline?c>0?Math.ceil(i/c/100)*100:i:Sn(t.monthly)),{targetSat:r,savedSat:s,remainingSat:i,percent:Math.min(100,ya(s,r)),done:a,monthsLeft:c,late:l,perMonthSat:h,thisMonthSat:JE(t,e)}}function hp(n,e){let t=0,r=0;for(const s of n||[]){const i=up(s,e);i.done||(t+=i.perMonthSat),r+=i.thisMonthSat}return{planSat:t,doneSat:Math.max(0,r)}}function YE(n,e,t){const r=Math.max(0,Math.round(Number(n)||0)-hp(e,t).planSat);return Math.floor(r/1e4)*1e4}function me(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function ln(n){const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0}function ZE({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const s=new Set(n.map(me).filter(Boolean)),i={};s.forEach(l=>{i[l]=0});const a=[],c=(l,h,p)=>{const _=me(l);_&&(s.has(_)?i[_]+=h:a.push({type:"unknown_name",name:_,...p}))};for(const l of e){if(!l||typeof l.date!="string"||!l.date.startsWith(r))continue;const h=l.splits&&typeof l.splits=="object"?Object.entries(l.splits):[];if(h.length===0){a.push({type:"no_splits",id:l.id});continue}const p=ln(l.amount);c(l.payer,p,{id:l.id});let _=0;for(const[m,I]of h){const k=ln(I);_+=k,c(m,-k,{id:l.id})}Math.abs(_-p)>h.length&&a.push({type:"split_mismatch",id:l.id,diffSatang:_-p})}for(const l of t){if(!l||l.status!=="verified"||l.month!==r)continue;const h=ln(l.amount);c(l.from,h,{id:l.id}),c(l.to,-h,{id:l.id})}return{balances:i,warnings:a}}function eT(n,{minSatang:e=100}={}){const t=[],r=[];for(const[l,h]of Object.entries(n))h<=-e?t.push({name:l,amt:-h}):h>=e&&r.push({name:l,amt:h});const s=(l,h)=>h.amt-l.amt||(l.name<h.name?-1:l.name>h.name?1:0);t.sort(s),r.sort(s);const i=[];let a=0,c=0;for(;a<t.length&&c<r.length;){const l=t[a],h=r[c],p=Math.min(l.amt,h.amt);p>=e&&i.push({from:l.name,to:h.name,amountSatang:p,amount:p/100}),l.amt-=p,h.amt-=p,l.amt<e&&a++,h.amt<e&&c++}return i}function dp(n){const e=Number(n)||0;return Math.abs(e)<100?0:Math.round(e/100)}function Vi(n,e){if(!n)return 0;const t=me(e),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return me(n.payer)===t?ln(n.amount):0;let s=0;for(const[i,a]of r)me(i)===t&&(s+=ln(a));return s}function fp(n,e){return n&&me(n.payer)===me(e)?ln(n.amount):0}const pp=(n,e)=>typeof n=="string"&&n.startsWith(e);function mp({name:n,transactions:e=[],settlements:t=[],month:r}){const s=me(n);let i=0,a=0;for(const p of e)!p||!pp(p.date,r)||(i+=fp(p,s),a+=Vi(p,s));let c=0,l=0;for(const p of t){if(!p||p.status!=="verified"||p.month!==r)continue;const _=ln(p.amount);me(p.from)===s&&(c+=_),me(p.to)===s&&(l+=_)}const h=i-a+c-l;return{name:s,month:r,paid:i,share:a,sent:c,received:l,balance:h}}function gp({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const{balances:s,warnings:i}=ZE({memberNames:n,transactions:e,settlements:t,month:r}),a=eT(s),c=Object.keys(s).sort().map(l=>{const h=mp({name:l,transactions:e,settlements:t,month:r}),p=dp(s[l]);return{...h,balance:s[l],displayBalance:p,cleared:p===0}});return{month:r,balances:s,plan:a,warnings:i,members:c}}function Ic({name:n,month:e,walletEntries:t=[],transactions:r=[],settlements:s=[]}){const i=me(n),a=new Set;let c=0,l=0;for(const m of t){if(!m||me(m.ownerName)!==i||!pp(m.date||m.month,e))continue;const I=m.dedupKey||m.transRef;if(I){if(a.has(I))continue;a.add(I)}const k=ln(m.amount);k<=0||(m.type==="income"?c+=k:m.type==="expense"&&(l+=k))}const h=mp({name:i,transactions:r,settlements:s,month:e}),p=h.share,_=l+p;return{name:i,month:e,income:c,personalExpense:l,groupShare:p,expenseTotal:_,net:c-_,receivedBack:h.received,paidBack:h.sent}}function _p(n){return(n||[]).map(e=>({from:e.from,to:e.to,amount:Math.round(e.amountSatang/100)})).filter(e=>e.amount>=1)}const Mi=[{key:"food",label:"อาหารและเครื่องดื่ม",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"fun",label:"บันเทิง",icons:["fa-film"]},{key:"other",label:"อื่นๆ",icons:[]}];function tT(n){const e=Mi.find(t=>t.icons.includes(n));return e?e.key:"other"}const ih=n=>String(n||"").slice(0,7);function oh({name:n,month:e,today:t="",members:r,transactions:s,settlements:i,walletItems:a=[]}){const c=me(n),l=gp({memberNames:r,transactions:s,settlements:i,month:e}),h=Ic({name:c,month:e,walletEntries:a.map(v=>({ownerName:c,type:v.type,amount:v.amount,date:v.date})),transactions:s,settlements:i}),p=Object.fromEntries(Mi.map(v=>[v.key,0])),_={},m={},I=(v,w,he,je,_t)=>{if(!je||!String(v).startsWith(e))return;p[tT(he)]+=je;const Xe=Number(String(v).slice(8,10));_[Xe]=(_[Xe]||0)+je,m[Xe]||(m[Xe]=[]),m[Xe].push({desc:w||"ไม่ระบุ",icon:he,satang:je,kind:_t})};for(const v of s)!v||ih(v.date)!==e||I(v.date,v.desc,v.icon,Vi(v,c),"group");for(const v of a)v.type==="expense"&&I(v.date,v.desc,v.icon,Math.round(Number(v.amount)*100),"personal");const k=Object.values(p).reduce((v,w)=>v+w,0),C=Mi.map(v=>({key:v.key,label:v.label,satang:p[v.key],percent:k>0?Math.round(p[v.key]/k*100):0})).filter(v=>v.satang>0).sort((v,w)=>w.satang-v.satang),N=t.startsWith(e)?Number(t.slice(8,10)):rs(e),O=[];for(let v=1;v<=N;v++)O.push({day:v,satang:_[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,items:m[v]||[]});const L=rs(e),$=[];for(let v=1;v<=L;v++)$.push({day:v,date:`${e}-${String(v).padStart(2,"0")}`,satang:_[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,isFuture:t.startsWith(e)&&v>Number(t.slice(8,10)),items:m[v]||[]});const K=h.expenseTotal,ee=N>0?Math.round(K/N/100):0,Y=_p(l.plan),T=Y.filter(v=>v.to===c).map(v=>({name:v.from,amount:v.amount})).sort((v,w)=>w.amount-v.amount),y=Y.filter(v=>v.from===c).map(v=>({name:v.to,amount:v.amount})).sort((v,w)=>w.amount-v.amount),E=T[0]?T[0].amount:0;T.forEach(v=>{v.share=E?Math.round(v.amount/E*100):0});const b=y[0]?y[0].amount:0;y.forEach(v=>{v.share=b?Math.round(v.amount/b*100):0});const A=[];for(const v of s){if(!v||ih(v.date)!==e)continue;const w=Vi(v,c);(w>0||fp(v,c)>0)&&A.push({id:v.id,kind:"group",desc:v.desc||"",icon:v.icon,satang:w,date:v.date,ts:Number(v.timestamp)||0})}for(const v of a)String(v.date).startsWith(e)&&A.push({id:v.id,kind:v.type==="income"?"income":"personal",desc:v.desc||"",icon:v.icon,satang:Math.round(Number(v.amount)*100),date:v.date,ts:Number(v.timestamp)||0});return A.sort((v,w)=>w.date.localeCompare(v.date)||w.ts-v.ts),{month:e,incomeSat:h.income,spentSat:K,personalSat:h.personalExpense,groupShareSat:h.groupShare,netSat:h.net,net:dp(h.net),spentPercent:h.income>0?Math.min(999,Math.round(K/h.income*100)):null,receivedBackSat:h.receivedBack,categories:C,daily:O,calendarDays:$,average:ee,owedToMe:T,owedTotal:T.reduce((v,w)=>v+w.amount,0),iOwe:y,iOweTotal:y.reduce((v,w)=>v+w.amount,0),recent:A.slice(0,5),warnings:l.warnings}}function ah(n,e,t=""){const r=e.month,s={};for(const h of e.categories||[])s[h.key]=h.satang;const i=QE(KE(n||{},r),{totalSat:e.spentSat,cats:s}),a=(n&&n.goals||[]).map(h=>({...h,s:up(h,r)})),c=t.startsWith(r),l=c?rs(r)-Number(t.slice(8,10))+1:0;return{month:r,status:i,goals:a,saving:hp(a,r),suggestSat:YE(e.incomeSat,a,r),daysLeft:l,perDaySat:c&&i.leftSat>0&&l>0?Math.floor(i.leftSat/l/100)*100:0}}function rs(n){const[e,t]=n.split("-").map(Number);return new Date(Date.UTC(e,t,0)).getUTCDate()}function Pt(n,e){const[t,r]=n.split("-").map(Number),s=t*12+(r-1)+e,i=Math.floor(s/12);return`${i}-${String(s-i*12+1).padStart(2,"0")}`}const ws=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],nT=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];function yp(n){const[e,t]=n.split("-").map(Number);return`${ws[t-1]} ${e+543}`}function bc(n){const[e,t]=n.split("-").map(Number);return`${nT[t-1]} ${e+543}`}function ne(n,{decimals:e=0,sign:t=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return`${r<0?"-":t&&r>0?"+":""}฿${s}`}function rT({name:n,months:e,transactions:t,settlements:r,walletItems:s=[]}){const i=me(n),a=s.map(c=>({ownerName:i,type:c.type,amount:c.amount,date:c.date}));return e.map(c=>{const l=Ic({name:i,month:c,walletEntries:a,transactions:t,settlements:r});return{month:c,spentSat:l.expenseTotal,incomeSat:l.income}})}function ch(n,e){return Array.from({length:e},(t,r)=>Pt(n,r-(e-1)))}function Oi(n){return ws[Number(n.slice(5,7))-1]}function hI(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10?e.slice(0,6)+"XXXX":e.length===13?"X-XXXX-XXXXX-"+e.slice(11,13)+"-X":e}function vp(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10||e.length===13?e:""}function dI(n,e){const t=vp(n);return!t||!(Number(e)>0)?"":`https://promptpay.io/${t}/${Number(e).toFixed(2)}`}function sT({name:n,month:e,members:t,transactions:r,settlements:s}){const i=me(n),a=gp({memberNames:t,transactions:r,settlements:s,month:e}),c=_p(a.plan).map(p=>({from:p.from,to:p.to,amount:p.amount,role:p.from===i?"pay":p.to===i?"receive":"other"})),l={pay:0,receive:1,other:2};c.sort((p,_)=>l[p.role]-l[_.role]||_.amount-p.amount);const h=(s||[]).filter(p=>p&&p.status==="verified"&&p.month===e).map(p=>({id:p.id,from:p.from,to:p.to,amount:Number(p.amount)||0,manual:!!p.verifiedByAdmin,createdAt:p.createdAt||""})).sort((p,_)=>String(_.createdAt).localeCompare(String(p.createdAt)));return{lines:c,history:h,mineToPay:c.filter(p=>p.role==="pay"),mineToReceive:c.filter(p=>p.role==="receive"),cleared:c.length===0}}function iT({name:n,month:e,walletItems:t,transactions:r,settlements:s}){const i=me(n),a=Ic({name:i,month:e,walletEntries:t.map(l=>({ownerName:i,type:l.type,amount:l.amount,date:l.date})),transactions:r,settlements:s}),c=t.filter(l=>String(l.date).startsWith(e)).sort((l,h)=>h.date.localeCompare(l.date)||(Number(h.timestamp)||0)-(Number(l.timestamp)||0)).map(l=>({id:l.id,type:l.type==="income"?"income":"expense",desc:l.desc||"",amount:Number(l.amount)||0,date:l.date,icon:l.icon||"",card:l.card||"",unconfirmed:l.unconfirmed===!0,recurring:l.recurring===!0||String(l.id||"").startsWith("wsub_"),ts:Number(l.timestamp)||0}));return{incomeSat:a.income,personalSat:a.personalExpense,groupShareSat:a.groupShare,spentSat:a.expenseTotal,netSat:a.net,receivedBackSat:a.receivedBack,paidBackSat:a.paidBack,items:c}}function oT({name:n,month:e,transactions:t,search:r=""}){const s=me(n),i=String(r||"").trim().toUpperCase(),a=t.filter(l=>l&&String(l.date||"").startsWith(e)).map(l=>({id:l.id,desc:l.desc||"",date:l.date,icon:l.icon||"",payer:l.payer||"",amountSat:aT(l.amount),myShareSat:Vi(l,s),iPaid:me(l.payer)===s,people:Object.keys(l.splits||{}),type:l.paymentType||"normal",ts:Number(l.timestamp)||0})).filter(l=>!i||l.desc.toUpperCase().includes(i)||me(l.payer).includes(i)).sort((l,h)=>h.date.localeCompare(l.date)||h.ts-l.ts),c=a.filter(l=>l.myShareSat>0||l.iPaid);return{all:a,mine:c,totalSat:a.reduce((l,h)=>l+h.amountSat,0),myShareSat:c.reduce((l,h)=>l+h.myShareSat,0)}}const aT=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},fI=[{key:"food",label:"อาหาร",fa:"fa-utensils",icon:"food"},{key:"drink",label:"เครื่องดื่ม",fa:"fa-mug-hot",icon:"coffee"},{key:"goods",label:"ของใช้",fa:"fa-cart-shopping",icon:"bag"},{key:"travel",label:"เดินทาง",fa:"fa-car",icon:"car"},{key:"bills",label:"บิล",fa:"fa-bolt",icon:"bolt"},{key:"rent",label:"ที่พัก",fa:"fa-house",icon:"key"},{key:"fun",label:"บันเทิง",fa:"fa-film",icon:"film"},{key:"health",label:"สุขภาพ",fa:"fa-pills",icon:"pill"},{key:"trip",label:"เที่ยว",fa:"fa-plane",icon:"plane"},{key:"gift",label:"ของขวัญ",fa:"fa-gift",icon:"gift"},{key:"pet",label:"สัตว์เลี้ยง",fa:"fa-paw",icon:"paw"},{key:"other",label:"อื่นๆ",fa:"fa-money-bill",icon:"dots"}],pI=zE;function cT({me:n,members:e,transactions:t,limit:r=6}){const s=me(n),i=new Set((e||[]).map(me)),a=new Map;for(const c of t||[]){const l=new Set(Object.keys(c&&c.splits||{}).map(me));l.add(me(c&&c.payer)),l.has(s)&&l.forEach(h=>{h&&h!==s&&i.has(h)&&a.set(h,(a.get(h)||0)+1)})}return[...a.entries()].sort((c,l)=>l[1]-c[1]||(c[0]<l[0]?-1:1)).slice(0,r).map(([c])=>c)}function lT(n,e){const t=Math.round(Number(n)*100),r=e.length,s=Math.floor(t/r),i=t-s*r;return Object.fromEntries(e.map((a,c)=>[a,(s+(c<i?1:0))/100]))}function mI(n){const e=Math.round(Number(n.amount)*100)/100;if(!Number.isFinite(e)||e<=0)return{ok:!1,error:"ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"};if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date||""))return{ok:!1,error:"เลือกวันที่ให้ถูกต้อง"};if(n.today&&n.date>n.today)return{ok:!1,error:"เลือกวันที่ไม่เกินวันนี้"};const t=me(n.payer);if(!t)return{ok:!1,error:"เลือกคนจ่าย"};const r=[...new Set((n.participants||[]).map(me).filter(Boolean))];if(r.length===0)return{ok:!1,error:"เลือกคนหารอย่างน้อย 1 คน"};if(r.length===1&&r[0]===t)return{ok:!1,error:"บิลที่มีแต่ตัวเองคนเดียวไม่ต้องหาร ให้ใช้รายจ่ายส่วนตัวแทน"};let s;if(n.mode==="custom"){s={};let h=0;for(const _ of r){const m=Math.round(Number((n.custom||{})[_])*100);if(!Number.isFinite(m)||m<=0)return{ok:!1,error:`ใส่ยอดของ ${_} ให้มากกว่า 0 (หรือเอาออกจากคนหาร)`};s[_]=m/100,h+=m}const p=Math.round(e*100)-h;if(p!==0)return{ok:!1,error:`ยอดที่แบ่งรวมกัน ${ne(h/100,{decimals:2})} ไม่เท่ายอดบิล ${ne(e,{decimals:2})} (${p>0?"ขาด":"เกิน"} ${ne(Math.abs(p)/100,{decimals:2})})`}}else{const h=r.includes(t)?[...r.filter(p=>p!==t),t]:r;s=lT(e,h)}const i=String(n.desc||"").trim().slice(0,100)||"ไม่ระบุ",a=n.icon||"fa-money-bill",c=n.now||Date.now(),l={payer:t,icon:a};if(n.type==="installment"){const h=Number(n.installments);let p;try{p=jE({amount:e,installments:h,splits:s,date:n.date})}catch(m){return{ok:!1,error:m.message}}const _=`grp_${c}`;return{ok:!0,docs:p.map((m,I)=>({...l,date:m.date,desc:`${i} (${m.index}/${h})`,amount:m.amount,splits:m.splits,paymentType:"installment",groupId:_,timestamp:c+I})),template:null,summary:`ผ่อน ${h} งวด งวดละประมาณ ${ne(e/h,{decimals:2})}`}}if(n.type==="subscription"){const h=`sub_${c}`,p=n.recurring!==!1,_={...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"subscription",subscriptionRecurring:p,subscriptionStartDate:n.date,groupId:h,timestamp:c},m=p?{desc:i,amount:e,payer:t,splits:s,icon:a,billingDay:Number(n.date.slice(8,10))||1,groupId:h,active:!0,createdAt:new Date(c),createdBy:t,lastGeneratedMonth:n.date.slice(0,7)}:null;return{ok:!0,docs:[_],template:m,summary:p?"สร้างซ้ำทุกเดือนอัตโนมัติ":"ครั้งเดียว"}}return{ok:!0,docs:[{...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"normal",timestamp:c}],template:null,summary:r.includes(t)?`หารกับเพื่อน ${r.length} คน (รวมผู้จ่าย)`:`จ่ายแทน ${r.length} คน (ไม่มีส่วนของผู้จ่าย)`}}const Hs=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"list",label:"รายการ",icon:"list"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"me",label:"ฉัน",icon:"user"}],uT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];function wp({month:n,today:e}){if(!n)return null;const t=e&&e.startsWith(n),r=t?Number(e.slice(8,10)):rs(n),[s,i]=n.split("-").map(Number),a=t?uT[new Date(Date.UTC(s,i-1,r)).getUTCDay()]:"ทั้งเดือน";return d("span",{class:"dtile","aria-hidden":"true",children:[d("span",{class:"m",children:Oi(n)}),d("span",{class:"d num",children:r}),d("span",{class:"w",children:a})]})}const lh=["home","list","clear","me"];function hT({page:n,children:e}){const t=Nh(n),r=t.current;ye(()=>{t.current=n},[n]);const s=r===n?"":lh.indexOf(n)>lh.indexOf(r)?"dir-r":"dir-l";return d("div",{class:`page-swap ${s}`.trim(),children:e},n)}function dT({month:n,onChange:e,min:t,max:r}){return d("div",{class:"month-wrap",children:[n!==r&&d("button",{type:"button",class:"btn sm ghost",onClick:()=>e(r),children:"เดือนนี้"}),d("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[d("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=t,onClick:()=>e(Pt(n,-1)),children:d(X,{name:"left",size:16})}),d("span",{class:"num","aria-live":"polite",children:yp(n)}),d("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>e(Pt(n,1)),children:d(X,{name:"right",size:16})})]})]})}function Ep({icon:n,title:e,note:t}){return d("div",{class:"sec-t",children:[d("span",{class:"ico",children:d(X,{name:n})}),d("div",{children:[d("h2",{children:e}),t&&d("p",{children:t})]})]})}function fT(n){let e=0;for(const t of String(n||""))e=(e*31+t.codePointAt(0))%997;return e%5}function uh({names:n=[],pictures:e={},max:t=3,size:r="sm"}){const s=n.slice(0,t);return d("span",{class:"avstack","aria-hidden":"true",children:[s.map(i=>d(Tp,{name:i,pictureUrl:e[i],size:r},i)),n.length>t&&d("span",{class:"avstack-more num",children:["+",n.length-t]})]})}function Tp({name:n,pictureUrl:e,size:t=""}){const[r,s]=ie(!1),i=[...String(n||"?")][0],a=`av tint${fT(n)} ${t}`.trim();return e&&!r?d("img",{src:e,alt:n?`รูปของ ${n}`:"",class:a,onError:()=>s(!0),loading:"lazy"}):d("div",{class:a,"aria-hidden":"true",children:i})}function pT(){const[n,e]=ie(()=>{if(typeof document>"u")return"light";const s=localStorage.getItem("dm:theme");return s==="dark"||s==="light"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),t=()=>{const s=n==="dark"?"light":"dark";e(s),document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("dm:theme",s)}catch{}},r=n==="dark";return d("button",{type:"button",class:"theme-toggle","aria-label":r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",title:r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",onClick:t,children:d(X,{name:r?"sun":"moon",size:18})})}function gI({label:n,value:e,options:t,onChange:r,icon:s="calendar",title:i,id:a}){const[c,l]=ie(!1),h=(t||[]).find(p=>p.value===e)||t&&t[0]||{};return d("div",{class:"field",children:[n&&d("label",{for:a,children:n}),d("button",{type:"button",id:a,class:"c-select-trigger",onClick:()=>l(!0),"aria-haspopup":"dialog",children:[s&&d("span",{class:"ico sm",children:d(X,{name:s,size:16})}),d("span",{class:"c-select-val num",children:h.label||e}),d(X,{name:"down",size:16,class:"mute"})]}),c&&d(Ip,{title:i||n||"เลือกรายการ",onClose:()=>l(!1),children:d("div",{class:"c-select-list",children:(t||[]).map(p=>{const _=p.value===e;return d("button",{type:"button",class:`c-select-item ${_?"on":""}`,onClick:()=>{r(p.value),l(!1)},children:[d("span",{class:"c-select-item-text num",children:p.label}),_&&d(X,{name:"check",size:18,class:"rcv"})]},p.value)})})})]})}function mT({value:n,max:e,today:t,onSelect:r,onClose:s}){const[i,a]=ie(()=>(n||t).slice(0,7)),[c,l]=ie(n||t),[h,p]=i.split("-").map(Number),_=rs(i),m=new Date(Date.UTC(h,p-1,1)).getUTCDay(),I=[];for(let C=0;C<m;C++)I.push(null);for(let C=1;C<=_;C++)I.push(`${i}-${String(C).padStart(2,"0")}`);const k=["อา","จ","อ","พ","พฤ","ศ","ส"];return d(Ip,{title:"ปฏิทิน",onClose:s,children:d("div",{class:"cal-box",children:[d("div",{class:"cal-hd",children:[d("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",onClick:()=>a(Pt(i,-1)),children:d(X,{name:"left",size:16})}),d("span",{class:"cal-month-title num",children:bc(i)}),d("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e&&Pt(i,1).slice(0,7)>e.slice(0,7),onClick:()=>a(Pt(i,1)),children:d(X,{name:"right",size:16})})]}),d("div",{class:"cal-grid",role:"grid",children:[d("div",{class:"cal-dow-row",role:"row",children:k.map(C=>d("span",{class:"cal-dow",role:"columnheader",children:C},C))}),d("div",{class:"cal-days-grid",children:I.map((C,N)=>{if(!C)return d("span",{class:"cal-day empty"},`empty-${N}`);const O=Number(C.slice(8,10)),L=C===t,$=C===c,K=e&&C>e;return d("button",{type:"button",class:`cal-day-btn num ${$?"on":""} ${L?"today":""}`,disabled:K,onClick:()=>l(C),children:O},C)})})]}),d("div",{class:"cal-actions",children:[d("button",{type:"button",class:"btn ghost",onClick:()=>{l(t),a(t.slice(0,7))},children:"วันนี้"}),d("button",{type:"button",class:"btn",onClick:()=>r(c),children:["ยืนยัน (",Number(c.slice(8,10))," ",ws[Number(c.slice(5,7))-1],")"]})]})]})})}function _I({id:n,label:e="วันที่",value:t,onChange:r,max:s,today:i}){const[a,c]=ie(!1),[l,h,p]=i.split("-").map(Number),_=new Date(Date.UTC(l,h-1,p-1)),m=`${_.getUTCFullYear()}-${String(_.getUTCMonth()+1).padStart(2,"0")}-${String(_.getUTCDate()).padStart(2,"0")}`,I=t===i,k=t===m,[C,N,O]=(t||i).split("-").map(Number),L=C+543,$=ws[N-1]||"",K=I?`วันนี้ · ${O} ${$} ${L}`:k?`เมื่อวาน · ${O} ${$} ${L}`:`${O} ${$} ${L}`;return d("div",{class:"field",children:[d("span",{class:"fl",id:`${n}-l`,children:e}),d("div",{class:"date-pick-wrap",children:[d("button",{type:"button",id:n,class:"date-trigger","aria-labelledby":`${n}-l`,onClick:()=>c(!0),children:[d("span",{class:"ico sm",children:d(X,{name:"calendar",size:16})}),d("span",{class:"date-trigger-text num",children:K}),d("span",{class:"date-trigger-tag",children:"ปฏิทิน"})]}),d("div",{class:"date-quick-chips",children:[d("button",{type:"button",class:`date-quick-btn ${I?"on":""}`,onClick:()=>r(i),children:"วันนี้"}),d("button",{type:"button",class:`date-quick-btn ${k?"on":""}`,onClick:()=>r(m),children:"เมื่อวาน"}),d("button",{type:"button",class:`date-quick-btn ${!I&&!k?"on":""}`,onClick:()=>c(!0),children:"แก้ไขวันที่"})]})]}),a&&d(mT,{value:t||i,max:s||i,today:i,onSelect:ee=>{r(ee),c(!1)},onClose:()=>c(!1)})]})}const Or=[];function Ip({title:n,onClose:e,children:t,as:r="div",onSubmit:s,action:i,class:a=""}){const c=Nh(null);return ye(()=>{const h=document.activeElement,p={};Or.push(p);const _=k=>{k.key==="Escape"&&Or[Or.length-1]===p&&e()};document.addEventListener("keydown",_);const m=document.body.style.overflow;return document.body.style.overflow="hidden",(c.current&&c.current.querySelector("input, select, textarea")||c.current).focus({preventScroll:!0}),()=>{const k=Or.indexOf(p);k>=0&&Or.splice(k,1),document.removeEventListener("keydown",_),document.body.style.overflow=m,h&&h.focus&&h.focus({preventScroll:!0})}},[]),d("div",{class:"scrim",onClick:h=>h.target===h.currentTarget&&e(),children:d(r,{class:`sheet ${a}`.trim(),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:c,onSubmit:s,children:[d("div",{class:"grab","aria-hidden":"true"}),d("div",{class:"sheet-hd",children:[d("h2",{children:n}),i,d("button",{type:"button",class:"icon-btn",onClick:e,"aria-label":"ปิด",children:d(X,{name:"close",size:18})})]}),t]})})}function yI({label:n,onConfirm:e,verb:t="ลบ",busyText:r="กำลังลบ",keepText:s="ยกเลิก",icon:i="trash",danger:a=!0}){const[c,l]=ie("idle");return ye(()=>{if(c!=="confirm")return;const h=setTimeout(()=>l("idle"),5e3);return()=>clearTimeout(h)},[c]),c==="idle"?d("button",{type:"button",class:"icon-btn","aria-label":`${t} ${n}`,onClick:()=>l("confirm"),children:d(X,{name:i,size:17})}):d("span",{class:"confirm",children:[d("button",{type:"button",class:`btn sm ${a?"danger":""}`,disabled:c==="busy",onClick:async()=>{l("busy");try{await e()}finally{l("idle")}},children:c==="busy"?r:t}),d("button",{type:"button",class:"btn sm ghost",disabled:c==="busy",onClick:()=>l("idle"),children:s})]})}function ut({load:n,name:e,fallback:t=null,...r}){const[s,i]=ie(null);if(ye(()=>{let c=!0;return n().then(l=>{c&&l&&l[e]&&i({name:e,C:l[e]})}).catch(()=>{}),()=>{c=!1}},[e]),!s||s.name!==e)return t;const a=s.C;return d(a,{...r})}function vI({icon:n,title:e,summary:t,children:r,defaultOpen:s=!1}){const[i,a]=ie(s);return d("section",{class:"card collapsible",children:[d("button",{type:"button",class:"coll-head","aria-expanded":i,onClick:()=>a(!i),children:[d("span",{class:"ico accent",children:d(X,{name:n})}),d("span",{class:"grow",children:[d("b",{children:e}),d("small",{children:t})]}),d(X,{name:"down",size:16,class:`coll-chev ${i?"up":""}`})]}),i&&d("div",{class:"coll-body",children:r})]})}function En({blocks:n=3}){return d("div",{class:"home-grid","aria-busy":"true","aria-label":"กำลังโหลดข้อมูล",children:[d("div",{class:"col",children:Array.from({length:Math.ceil(n/2)},(e,t)=>d("div",{class:"card sk",style:{height:t===0?"168px":"220px"}},t))}),d("div",{class:"col",children:Array.from({length:Math.floor(n/2)},(e,t)=>d("div",{class:"card sk",style:{height:"200px"}},t))})]})}function gT({onRetry:n}){return d("div",{class:"card state",role:"alert",children:[d("span",{class:"ico",children:d(X,{name:"alert"})}),d("div",{children:[d("b",{children:"โหลดข้อมูลไม่สำเร็จ"}),d("p",{children:"ตรวจอินเทอร์เน็ตแล้วลองใหม่ ถ้ายังไม่ได้ อาจเป็นเพราะโควต้าฐานข้อมูลของวันนี้เต็ม"})]}),d("button",{type:"button",class:"btn sm",onClick:n,children:"ลองใหม่"})]})}function _T({tab:n,onTab:e,userName:t,userPicture:r,tools:s,onAdd:i,children:a}){const c=(Hs.find(l=>l.key===n)||Hs[0]).label;return d("div",{class:"app",children:[d("a",{class:"skip",href:"#main",children:"ข้ามไปเนื้อหา"}),d("aside",{class:"side",children:[d("div",{class:"brand",children:[d(Nl,{size:34}),"Dept Money"]}),d("nav",{"aria-label":"เมนูหลัก",children:Hs.map(l=>d("button",{type:"button",class:`snav ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[d(X,{name:l.icon}),l.label]},l.key))}),d("button",{type:"button",class:"btn side-add",onClick:i,children:[d(X,{name:"plus"}),"บันทึกรายการ"]}),d("div",{class:"side-me",children:[d(Tp,{name:t,pictureUrl:r}),d("span",{children:t})]})]}),d("main",{class:"page",id:"main",children:[d("header",{class:"top",children:[d("div",{class:"brand mobile-only","aria-hidden":"true",children:[d(Nl,{size:30}),"Dept Money"]}),d("h1",{class:"page-title",children:c}),d("div",{class:"top-actions",children:[s,d(pT,{})]})]}),a]}),d("button",{type:"button",class:"fab",onClick:i,children:[d(X,{name:"plus"}),"บันทึก"]}),d("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:d("div",{class:"tabbar-in",children:Hs.map(l=>d("button",{type:"button",class:`tab ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[d(X,{name:l.icon}),l.label]},l.key))})})]})}const yT=Object.fromEntries(Mi.map(n=>[n.key,n.label])),bp={food:"food",bills:"bolt",goods:"bag",travel:"car",fun:"film",other:"dots"},vT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],wT=["อา","จ","อ","พ","พฤ","ศ","ส"];function Ap({percent:n,of:e="รายรับ",sub:t="ใช้ไปแล้ว"}){const s=2*Math.PI*42,i=Math.max(0,Math.min(100,n));return d("div",{class:"ring",role:"img","aria-label":`ใช้ไปแล้ว ${n}% ของ${e}`,children:[d("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[d("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),d("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--pay)","stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${s*i/100} ${s}`,transform:"rotate(-90 50 50)"})]}),d("div",{class:"ring-t",children:[d("b",{class:"num",children:[n,"%"]}),d("span",{children:t})]})]})}function ET({m:n,bm:e,today:t,onBudget:r}){const s=e.status,i=s.leftSat<0;return d("section",{class:"card hero","aria-label":"สรุปเดือนเทียบงบ",children:[d("div",{class:"hero-l",children:[d("div",{class:"hero-top",children:[d(wp,{month:n.month,today:t}),d("div",{children:[d("p",{class:"lbl",children:i?"ใช้เกินงบแล้ว":"งบเหลือเดือนนี้"}),d("p",{class:"big num",children:ne(Math.round(Math.abs(s.leftSat)/100))})]})]}),d("div",{class:"chips",children:[d("button",{type:"button",class:"chip chip-btn",onClick:r,"aria-label":`งบ ${ne(s.budgetSat/100)} แตะเพื่อแก้งบ`,children:["งบ ",d("b",{class:"num",children:ne(s.budgetSat/100)})]}),d("span",{class:"chip",children:[d(X,{name:"up",size:14,class:"pay"}),"ใช้ไป ",d("b",{class:"num",children:ne(s.spentSat/100)})]}),n.incomeSat>0&&d("span",{class:"chip",children:[d(X,{name:"down",size:14,class:"rcv"}),"รายรับ ",d("b",{class:"num",children:ne(n.incomeSat/100)})]})]}),d("p",{class:"lbl hero-split",children:e.perDaySat>0?d(Q,{children:["เหลืออีก ",e.daysLeft," วัน ใช้ได้วันละ ",d("b",{class:"num",children:ne(e.perDaySat/100)})]}):d(Q,{children:["ส่วนตัว ",d("span",{class:"num",children:ne(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",d("span",{class:"num",children:ne(n.groupShareSat/100)})]})})]}),d(Ap,{percent:s.percent,of:"งบ",sub:"ของงบ"})]})}function TT({m:n,onAddIncome:e,today:t="",bm:r=null,onBudget:s=null}){if(r&&r.status.set)return d(ET,{m:n,bm:r,today:t,onBudget:s});const i=n.incomeSat>0,a=i&&n.netSat<0,c=i?a?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",l=i?Math.abs(n.netSat)/100:n.spentSat/100,h=!i||a?"pay":"rcv";return d("section",{class:"card hero","aria-label":"สรุปเดือน",children:[d("div",{class:"hero-l",children:[d("div",{class:"hero-top",children:[d(wp,{month:n.month,today:t}),d("div",{children:[d("p",{class:"lbl",children:c}),d("p",{class:`big num ${h}`,children:ne(Math.round(l))})]})]}),d("div",{class:"chips",children:[d("span",{class:"chip",children:[d(X,{name:"down",size:14,class:"rcv"}),"รายรับ ",d("b",{class:"num",children:ne(n.incomeSat/100)})]}),d("span",{class:"chip",children:[d(X,{name:"up",size:14,class:"pay"}),"ใช้ไป ",d("b",{class:"num",children:ne(n.spentSat/100)})]})]}),d("p",{class:"lbl hero-split",children:["ส่วนตัว ",d("span",{class:"num",children:ne(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",d("span",{class:"num",children:ne(n.groupShareSat/100)})]}),s&&d("button",{type:"button",class:"set-budget",onClick:s,children:[d(X,{name:"plus",size:14}),"ตั้งงบเดือนนี้"]})]}),i?d(Ap,{percent:n.spentPercent}):d("button",{type:"button",class:"hint",onClick:e,children:[d(X,{name:"plus",size:20}),"เพิ่มรายรับ",d("small",{children:"เพื่อดูว่าเหลือใช้เท่าไร"})]})]})}function IT({m:n,profiles:e=[],month:t="",nowMonth:r=""}){const s=Object.fromEntries((e||[]).map(l=>[l.name,l.pictureUrl])),i=n.owedToMe.map(l=>l.name),a=n.iOwe.map(l=>l.name),c=t&&r&&t!==r?` (${Oi(t)})`:"";return d("div",{class:"owe-grid",children:[d("a",{class:"card owe-card",href:"#clear","aria-label":`เพื่อนค้างฉัน ${ne(n.owedTotal)}${i.length?" ได้แก่ "+i.join(", "):""}`,children:[d("span",{class:"owe-k",children:["เพื่อนค้างฉัน",c,d(X,{name:"right",size:14})]}),d("b",{class:`owe-v num ${n.owedTotal>0?"rcv":""}`,children:ne(n.owedTotal)}),i.length>0?d(uh,{names:i,pictures:s}):d("span",{class:"owe-ok",children:[d(X,{name:"check",size:14}),"ไม่มีใครค้าง"]})]}),d("a",{class:"card owe-card",href:"#clear","aria-label":`ฉันค้างเพื่อน ${ne(n.iOweTotal)}${a.length?" ได้แก่ "+a.join(", "):""}`,children:[d("span",{class:"owe-k",children:["ฉันค้างเพื่อน",c,d(X,{name:"right",size:14})]}),d("b",{class:`owe-v num ${n.iOweTotal>0?"pay":""}`,children:ne(n.iOweTotal)}),a.length>0?d(uh,{names:a,pictures:s}):d("span",{class:"owe-ok",children:[d(X,{name:"check",size:14}),"ไม่ค้างใคร"]})]})]})}const hh={near:"ใกล้เต็ม",over:"เกินงบ"};function bT({c:n,label:e}){const t=Math.max(n.spentSat>0?3:0,Math.min(100,n.percent));return d("li",{class:"cat",children:[d("span",{class:"ico big-ico",children:d(X,{name:bp[n.key]||"dots"})}),d("div",{class:"cat-b",children:[d("div",{class:"cat-r",children:[d("span",{children:[e,hh[n.level]&&d("span",{class:`lv-tag ${n.level}`,children:hh[n.level]})]}),d("span",{class:"num",children:[d("b",{children:ne(n.spentSat/100)}),d("em",{children:["/ ",ne(n.budgetSat/100)]})]})]}),d("div",{class:`bar lv ${n.level}`,role:"img","aria-label":`ใช้ไป ${n.percent}% ของงบ${e}`,children:d("i",{style:{width:`${t}%`}})}),d("div",{class:"cat-s num",children:[d("span",{children:n.leftSat>=0?`เหลือ ${ne(n.leftSat/100)}`:`เกินงบ ${ne(-n.leftSat/100)}`}),d("span",{children:[n.percent,"%"]})]})]})]},n.key)}function AT({cats:n,bm:e=null,onBudget:t=null}){const r=e&&e.status.set?e.status.cats:[],s=new Set(r.map(p=>p.key)),i=n.filter(p=>!s.has(p.key));if(n.length===0&&r.length===0)return null;const a=n[0],c=p=>yT[p]||p,l=r.length?`ตั้งงบไว้ ${r.length} หมวด`:a?`ส่วนใหญ่ไปกับ${a.label} ${a.percent}%`:"",h=i[0];return d("section",{class:"card",children:[d("div",{class:"sec-row",children:[d(Ep,{icon:"bag",title:"ใช้ไปกับอะไร",note:l}),e&&e.status.set&&t&&d("button",{type:"button",class:"link-btn",onClick:t,children:"แก้งบ"})]}),d("ul",{class:"cats",children:[r.map(p=>d(bT,{c:p,label:c(p.key)},p.key)),i.map(p=>d("li",{class:"cat",children:[d("span",{class:"ico big-ico",children:d(X,{name:bp[p.key]||"dots"})}),d("div",{class:"cat-b",children:[d("div",{class:"cat-r",children:[d("span",{children:p.label}),d("span",{class:"num",children:[d("b",{children:[p.percent,"%"]}),d("em",{children:ne(p.satang/100)})]})]}),d("div",{class:"bar",children:d("i",{style:{width:`${Math.max(3,Math.round(p.percent/h.percent*100))}%`}})})]})]},p.key))]})]})}const Sp=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n)),ST=n=>ne(n/100,{decimals:2});function RT(n,e){if(!n||!e)return 0;const t=n/e;return t>.6?3:t>.25?2:1}function kT({month:n,days:e,onPick:t}){const[r,s]=n.split("-").map(Number),i=new Date(Date.UTC(r,s-1,1)).getUTCDay(),a=e.reduce((c,l)=>Math.max(c,l.satang),0);return d("div",{class:"sc-grid",role:"group","aria-label":`ปฏิทินรายจ่าย ${bc(n)}`,children:[wT.map(c=>d("span",{class:"sc-dow","aria-hidden":"true",children:c},c)),Array.from({length:i},(c,l)=>d("span",{},`e${l}`)),e.map(c=>d("button",{type:"button",class:`sc-day h${RT(c.satang,a)} ${c.today?"today":""} ${c.satang>0&&c.satang===a?"peak":""}`,disabled:c.isFuture,onClick:()=>t(c.day),"aria-label":`วันที่ ${c.day} ใช้ไป ${c.satang>0?ne(c.satang/100):"0 บาท"}`,children:[d("span",{class:"num",children:c.day}),c.satang>0?d("small",{class:"num",children:Sp(c.satang/100)}):null]},c.day))]})}function PT({month:n,days:e,day:t,onDay:r}){const s=e.find(h=>h.day===t)||e[0];if(!s)return null;const[i,a]=n.split("-").map(Number),c=vT[new Date(Date.UTC(i,a-1,s.day)).getUTCDay()],l=e.filter(h=>!h.isFuture).length;return d("div",{class:"sc-day-view",children:[d("div",{class:"sc-day-hd",children:[d("span",{class:"dtile sm","aria-hidden":"true",children:[d("span",{class:"m",children:Oi(n)}),d("span",{class:"d num",children:s.day})]}),d("div",{class:"grow",children:[d("b",{children:[c," ",s.day," ",Oi(n)]}),d("span",{class:"lbl",children:[s.items.length," รายการ"]})]}),d("b",{class:"num pay",children:ne(s.satang/100)})]}),d("div",{class:"sc-day-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"วันก่อนหน้า",disabled:s.day<=1,onClick:()=>r(s.day-1),children:d(X,{name:"left",size:16})}),d("span",{class:"lbl",children:"เลื่อนดูวันอื่น"}),d("button",{type:"button",class:"icon-btn","aria-label":"วันถัดไป",disabled:s.day>=l,onClick:()=>r(s.day+1),children:d(X,{name:"right",size:16})})]}),s.items.length===0?d("p",{class:"empty",children:[d(X,{name:"check",size:16,class:"rcv"}),"ไม่มีรายจ่ายในวันนี้"]}):d("ul",{class:"plain",children:s.items.map((h,p)=>d("li",{class:"row",children:[d(wm,{desc:h.desc,name:gm(h.icon),size:36,iconSize:18}),d("div",{class:"grow",children:[d("div",{class:"t",children:h.desc||"ไม่ระบุ"}),d("div",{class:"s",children:h.kind==="group"?"ส่วนของฉันในกลุ่ม":"ส่วนตัว"})]}),d("span",{class:"num pay",children:ST(h.satang)})]},p))})]})}function CT({year:n,series:e,since:t,nowMonth:r,onPick:s}){const i=Object.fromEntries((e||[]).map(l=>[l.month,l.spentSat])),a=Array.from({length:12},(l,h)=>{const p=`${n}-${String(h+1).padStart(2,"0")}`,_=p>=t&&p<=r;return{key:p,label:ws[h],inRange:_,sat:_&&i[p]||0}}),c=a.reduce((l,h)=>Math.max(l,h.sat),0);return d("div",{class:"sc-year",children:a.map(l=>d("button",{type:"button",class:`sc-mon ${l.key===r?"cur":""}`,disabled:!l.inRange,onClick:()=>s(l.key),"aria-label":`${yp(l.key)} ใช้ไป ${l.inRange?ne(l.sat/100):"ไม่มีข้อมูล"}`,children:[d("small",{children:l.label}),d("b",{class:"num",children:l.inRange?Sp(l.sat/100):"-"}),d("i",{style:{width:`${l.inRange&&c>0?Math.max(4,Math.round(l.sat/c*100)):0}%`}})]},l.key))})}function NT({model:n,month:e,onMonth:t,since:r,nowMonth:s,series:i,onNeedYear:a=()=>{}}){const[c,l]=ie("month"),[h,p]=ie(1);ye(()=>{c==="year"&&a()},[c]);const _=n.calendarDays||[],m=Number(e.slice(0,4)),I=_.reduce((T,y)=>y.satang>(T?T.satang:0)?y:T,null),k=T=>{const y=Pt(e,T);y>=r&&y<=s&&t(y)},C=T=>{const y=e.slice(5,7);let E=`${m+T}-${y}`;E<r?E=r:E>s&&(E=s),t(E)},N=r<`${m}-01`,O=`${m+1}-01`<=s,L=(i||[]).filter(T=>T.month.startsWith(String(m))).reduce((T,y)=>T+y.spentSat,0),$=(i||[]).filter(T=>T.month.startsWith(String(m))&&T.month>=r&&T.month<=s).length;function K(T){p(T),l("day")}function ee(T){t(T),l("month")}function Y(T){if(T==="day"&&c!=="day"){const y=_.find(E=>E.today);p(y?y.day:I?I.day:1)}l(T)}return d("section",{class:"card sc","aria-label":"ปฏิทินรายจ่าย",children:[d(Ep,{icon:"calendar",title:"ใช้ไปเท่าไร",note:"รวมรายจ่ายส่วนตัวและส่วนของฉันในกลุ่ม"}),d("div",{class:"seg sc-seg",role:"group","aria-label":"ดูเป็น",children:[["day","วัน"],["month","เดือน"],["year","ปี"]].map(([T,y])=>d("button",{type:"button",class:c===T?"on":"","aria-pressed":c===T,onClick:()=>Y(T),children:y},T))}),c==="year"?d(Q,{children:[d("div",{class:"sc-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"ปีก่อนหน้า",disabled:!N,onClick:()=>C(-1),children:d(X,{name:"left",size:16})}),d("b",{class:"num",children:["ปี ",m+543]}),d("button",{type:"button",class:"icon-btn","aria-label":"ปีถัดไป",disabled:!O,onClick:()=>C(1),children:d(X,{name:"right",size:16})})]}),i?d(Q,{children:[d("div",{class:"sc-sum",children:[d("div",{children:[d("span",{class:"lbl",children:"ใช้ไปทั้งปี"}),d("b",{class:"num pay",children:ne(L/100)})]}),d("div",{children:[d("span",{class:"lbl",children:"เฉลี่ยต่อเดือน"}),d("b",{class:"num",children:ne($>0?L/100/$:0)})]})]}),d(CT,{year:m,series:i,since:r,nowMonth:s,onPick:ee})]}):d("p",{class:"empty","aria-busy":"true",children:"กำลังโหลดข้อมูลทั้งปี"})]}):d(Q,{children:[d("div",{class:"sc-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",disabled:e<=r,onClick:()=>k(-1),children:d(X,{name:"left",size:16})}),d("b",{class:"num",children:bc(e)}),d("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e>=s,onClick:()=>k(1),children:d(X,{name:"right",size:16})})]}),c==="month"?d(Q,{children:[d("div",{class:"sc-sum",children:[d("div",{children:[d("span",{class:"lbl",children:"ใช้ไปทั้งเดือน"}),d("b",{class:"num pay",children:ne(n.spentSat/100)})]}),d("div",{children:[d("span",{class:"lbl",children:"เฉลี่ยต่อวัน"}),d("b",{class:"num",children:ne(n.average)})]})]}),d(kT,{month:e,days:_,onPick:K}),I?d("p",{class:"lbl sc-foot",children:["ใช้มากสุดวันที่ ",I.day," (",ne(I.satang/100),") แตะวันเพื่อดูรายการ"]}):d("p",{class:"lbl sc-foot",children:"ยังไม่มีรายจ่ายในเดือนนี้"})]}):d(PT,{month:e,days:_,day:h,onDay:p})]})]})}function DT({model:n,series:e,month:t,onMonth:r,onAddIncome:s,profiles:i=[],today:a="",nowMonth:c="",since:l="",onNeedYear:h,bm:p=null,onBudget:_=null}){const m=c||t;return d("div",{class:"home-grid",children:[d("div",{class:"col",children:[d(TT,{m:n,onAddIncome:s,today:a,bm:p,onBudget:_}),d(IT,{m:n,profiles:i,month:t,nowMonth:m}),d(AT,{cats:n.categories,bm:p,onBudget:_})]}),d("div",{class:"col",children:d(NT,{model:n,month:t,onMonth:r,since:l||Pt(m,-11),nowMonth:m,series:e,onNeedYear:h})})]})}const dh=()=>fn(()=>import("./add-C_TXQHKQ.js"),__vite__mapDeps([0,1])),fh=()=>fn(()=>import("./ClearPage-JcYnKV9T.js"),[]),ph=()=>fn(()=>import("./ListPage-CKR__2Ii.js"),__vite__mapDeps([2,1])),mh=()=>fn(()=>import("./MePage-CxzvKMFR.js"),__vite__mapDeps([3,4])),gh=()=>fn(()=>import("./onboard-B_EW3dei.js"),[]),Bo=()=>fn(()=>import("./plan-DUMwjeZy.js"),[]),ht=op();function Gs(){const n=new URLSearchParams(location.search).get("liff.state")||"";return(location.hash||(n.includes("#")?n.slice(n.indexOf("#")):"")).slice(1)}function Lr(n){const e=/^(edit|split|choose)=([A-Za-z0-9_-]{1,100})$/.exec(String(n||""));return e?{kind:e[1],id:e[2]}:null}const _h=tp().slice(0,7),yh=12,VT=["home","list","clear","me"],Ks=n=>n==="bills"||n==="wallet"?"list":VT.includes(n)?n:"home";function MT(){const[n,e]=ie(ht?{state:"ok",user:ht}:{state:"loading"}),[t,r]=ie(()=>{const P=Gs();return Lr(P)?"list":Ks(P)}),[s,i]=ie(()=>Lr(Gs())),[a,c]=ie(null),[l,h]=ie(null),p=Ge(()=>tp(),[]),_=p.slice(0,7),m=Ge(()=>Pt(_,-11),[_]),[I,k]=ie(_),[C,N]=ie(()=>ht?AE():null),[O,L]=ie(()=>{const P=ht?IE(ht.name,_h):null;return P?{[_h]:P}:{}}),[$,K]=ie(!1),[ee,Y]=ie(null),[T,y]=ie(""),[E,b]=ie(null),[A,v]=ie(()=>ht&&Gs()==="add"?"menu":null),[w,he]=ie(""),[je,_t]=ie(0),[Xe,Ut]=ie(!1),[Bt,Es]=ie(!1),[pr,st]=ie(!!ht),[de,mr]=ie(null),[qe,ct]=ie(null),$t=P=>{if(P.needLogin){Ut(!0);return}ht&&!P.needLink&&P.memberId!==ht.memberId&&(_a(),L({}),N(null),Y(null)),P.needLink?e({state:"link",profile:P.profile,candidates:P.candidates,suggest:P.suggest||""}):!P.isAdmin&&(!P.realName||!vp(P.promptpay))?e({state:"onboard",user:P}):e(B=>B.state==="ok"&&JSON.stringify(B.user)===JSON.stringify(P)?B:{state:"ok",user:P}),P.needLink||TE(P)},gr=(P,B)=>L(W=>({...W,[P]:{...W[P]||{},...B}}));ye(()=>{vE().then(P=>{if(!P)return;$t(P);const B=Gs();if(B==="add"){v("menu"),r("home");try{history.replaceState(null,"",location.pathname+"#home")}catch{}}else Lr(B)?(i(Lr(B)),r("list")):B&&["home","list","bills","wallet","clear","me"].includes(B)&&r(Ks(B))}).catch(P=>{ht?console.warn("signIn:",P.message):e({state:"error",message:P.message})})},[]),ye(()=>{uE(()=>Ut(!0))},[]),ye(()=>{const P=()=>{const B=location.hash.slice(1),W=Lr(B);W?(i(W),r("list")):r(Ks(B))};return addEventListener("hashchange",P),()=>removeEventListener("hashchange",P)},[]),ye(()=>{n.state==="ok"&&SE().then(N).catch(()=>K(!0))},[n.state,je]),ye(()=>{n.state!=="ok"||!["home","list","clear","me"].includes(t)||ee||xE().then(Y).catch(()=>K(!0))},[n.state,t,ee]),ye(()=>{n.state==="ok"&&NE().then(mr).catch(P=>{P.expired||console.warn("loadPlan:",P.message),mr(B=>B||{budget:{total:0,cats:{}},months:{},goals:[]})})},[n.state,je]),ye(()=>{if(n.state==="ok")return kE(_,P=>{P.error?K(!0):gr(_,P)})},[n.state,_]);const jt=Ge(()=>[...new Set([...Bt?ch(_,yh):[],I])].filter(P=>P!==_),[_,I,Bt]);ye(()=>{if(n.state!=="ok")return;const P=[_,...jt.filter(B=>!(O[B]&&O[B].wallet))];CE(P,_).then(B=>Object.entries(B).forEach(([W,vr])=>gr(W,{wallet:vr}))).catch(B=>{B.expired||he(B.message)})},[n.state,_,je,jt.filter(P=>!(O[P]&&O[P].wallet)).join("|")]),ye(()=>{n.state==="ok"&&jt.forEach(P=>{O[P]&&O[P].transactions||RE(P).then(B=>gr(P,{transactions:B.transactions,settlements:B.settlements})).catch(()=>K(!0))})},[n.state,jt,jt.filter(P=>!(O[P]&&O[P].transactions)).join("|")]);const it=O[_];ye(()=>{n.state==="ok"&&it&&it.transactions&&it.settlements&&it.wallet&&bE(n.user.name,_,it)},[it]),ye(()=>{if(n.state!=="ok")return;const B=(window.requestIdleCallback||(W=>setTimeout(W,1500)))(()=>{[ph,fh,mh,dh].forEach(W=>W().catch(()=>{}))});return()=>{window.cancelIdleCallback?window.cancelIdleCallback(B):clearTimeout(B)}},[n.state]),ye(()=>{if(w){const P=setTimeout(()=>he(""),3200);return()=>clearTimeout(P)}},[w]);const qt=P=>O[P]&&O[P].transactions&&O[P].settlements&&O[P].wallet,yt=n.state==="ok"&&C&&qt(_)&&qt(I);ye(()=>{yt&&st(!0)},[yt]),ye(()=>{if(pr)return;const P=setTimeout(()=>st(!0),12e3);return()=>clearTimeout(P)},[pr]);const Fn=yt&&jt.every(qt),J=Ge(()=>{if(!yt)return null;const P=Object.values(O);return{transactions:P.flatMap(B=>B.transactions||[]),settlements:P.flatMap(B=>B.settlements||[]),wallet:P.flatMap(B=>B.wallet||[])}},[yt,O]),Un=Ge(()=>J&&C?cT({me:n.user.name,members:C,transactions:J.transactions}):[],[J,n,C]),lt=Ge(()=>J?oh({name:n.user.name,month:I,today:p,members:C,transactions:J.transactions,settlements:J.settlements,walletItems:J.wallet}):null,[J,n,C,I,p]),lo=Ge(()=>J&&Bt&&Fn?rT({name:n.user.name,months:ch(_,yh),transactions:J.transactions,settlements:J.settlements,walletItems:J.wallet}):null,[J,Bt,Fn,n,_]),Ts=Ge(()=>J?sT({name:n.user.name,month:I,members:C,transactions:J.transactions,settlements:J.settlements}):null,[J,n,C,I]),zt=Ge(()=>J?iT({name:n.user.name,month:I,walletItems:J.wallet,transactions:J.transactions,settlements:J.settlements}):null,[J,n,I]),gn=Ge(()=>J?I===_?lt:oh({name:n.user.name,month:_,today:p,members:C,transactions:J.transactions,settlements:J.settlements,walletItems:J.wallet}):null,[J,lt,I,_]),Is=Ge(()=>de&&lt?ah(de,lt,p):null,[de,lt,p]),_r=Ge(()=>de&&gn?ah(de,gn,p):null,[de,gn,p]),Wt=(P,B)=>P.then(W=>(mr(W),B&&he(B),W)),Bn=Ge(()=>J?oT({name:n.user.name,month:I,transactions:J.transactions,search:T}):null,[J,n,I,T]),vt=(P=I)=>{lp(P),P===_?_t(B=>B+1):L(B=>{const W={...B};return delete W[P],W})},Ee=P=>{b({amount:P.amount,desc:P.desc,date:P.date,icon:P.icon,convertId:P.id,month:String(P.date).slice(0,7)}),v("bill")};ye(()=>{if(!s||!J)return;let P=!0;const B=J.wallet.find(W=>W.id===s.id);return(B?Promise.resolve(B):FE(s.id)).then(W=>{if(P){if(!W){he("ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");return}s.kind==="split"&&W.type!=="income"?Ee(W):s.kind==="choose"&&W.type!=="income"?h(W):(r("list"),c({...W}))}}).catch(W=>{P&&!W.expired&&he(W.message)}).finally(()=>{if(P){i(null);try{history.replaceState(null,"",location.pathname+"#list")}catch{}}}),()=>{P=!1}},[s,!!J]);const Re=()=>{_a(),L({}),N(null),K(!1),_t(P=>P+1)};if(n.state==="loading")return d("div",{class:"center",children:d(Vr,{label:"กำลังเข้าสู่ระบบ"})});if(n.state==="error")return d("div",{class:"center",children:[d(Vr,{}),d("p",{role:"alert",children:n.message}),d("button",{type:"button",class:"btn",onClick:()=>location.reload(),children:"ลองใหม่"})]});if(n.state==="link")return d(ut,{load:gh,name:"LinkPage",profile:n.profile,candidates:n.candidates,suggest:n.suggest,onDone:$t,fallback:d("div",{class:"center",children:d(Vr,{})})});if(n.state==="onboard")return d(ut,{load:gh,name:"OnboardPage",user:n.user,onDone:$t,fallback:d("div",{class:"center",children:d(Vr,{})})});if(!pr&&!$)return d("div",{class:"center",children:d(Vr,{label:"กำลังโหลดข้อมูล"})});const $n=P=>{location.hash=P,r(P),window.scrollTo(0,0)},wt=Ks(t),yr=wt!=="me";let Ht;return yr&&$?Ht=d(gT,{onRetry:Re}):wt==="home"?Ht=lt?d(DT,{model:lt,series:lo,month:I,onMonth:k,onAddIncome:()=>v("income"),profiles:ee||[],today:p,nowMonth:_,since:m,onNeedYear:()=>Es(!0),bm:Is,onBudget:de?()=>ct({kind:"budget"}):null}):d(En,{blocks:5}):wt==="list"?Ht=Bn&&zt?d(ut,{load:ph,name:"ListPage",fallback:d(En,{blocks:3}),pictures:Object.fromEntries((ee||[]).map(P=>[P.name,P.pictureUrl])),bills:Bn,wallet:zt,month:I,today:p,search:T,onSearch:y,me:n.user.name,isAdmin:n.user.isAdmin,version:je,openEdit:a,onSplit:Ee,onChanged:()=>vt(),onError:he,onInfo:he}):d(En,{blocks:3}):wt==="clear"?Ht=Ts&&ee?d(ut,{load:fh,name:"ClearPage",fallback:d(En,{blocks:2}),model:Ts,profiles:ee,month:I,back:zt?{receivedSat:zt.receivedBackSat,paidSat:zt.paidBackSat}:null,onChanged:()=>vt(),isAdmin:n.user.isAdmin,adminName:n.user.name,onError:he,onInfo:he}):d(En,{blocks:2}):Ht=ee?d(ut,{load:mh,name:"MePage",fallback:d(En,{blocks:2}),auth:n,profiles:ee,onSaved:()=>Y(null),onRefresh:Re,onMembers:()=>{Y(null),_t(P=>P+1)},onToast:he,transactions:J?J.transactions:[],onDataChanged:P=>vt(P),bm:_r,onBudget:()=>ct({kind:"budget"}),onGoalAdd:()=>ct({kind:"goal"}),onGoalMove:(P,B)=>ct({kind:"move",goal:P,dir:B}),onGoalEdit:P=>ct({kind:"goal",goal:P})}):d(En,{blocks:2}),d(Q,{children:[Xe&&d("div",{class:"login-banner",role:"alert",children:[d("span",{children:["เซสชัน LINE หมดอายุ ยังดูข้อมูลที่จำไว้ได้ แต่ข้อมูลกระเป๋าและการบันทึกต้องเข้าสู่ระบบใหม่",Xu()&&d("small",{class:"diag",children:Xu()})]}),d("button",{type:"button",class:"btn sm",onClick:hE,children:"เข้าสู่ระบบใหม่"})]}),d(_T,{tab:wt,onTab:$n,userName:n.user.name,userPicture:n.user.pictureUrl,onAdd:()=>v("menu"),tools:yr&&d(dT,{month:I,onChange:k,min:m,max:_}),children:d(hT,{page:wt,children:Ht})}),A&&d(ut,{load:dh,name:"AddSheet",initial:A==="income"?"income":A==="bill"?"bill":null,prefill:E,convertWallet:Ju,today:p,members:C||[],me:n.user.name,suggested:Un,save:LE,saveBill:Yu,onClose:()=>{v(null),b(null)},onSaved:(P,B=[])=>{he(P),B.forEach(W=>vt(W)),_t(W=>W+1)}}),l&&d(ut,{load:()=>fn(()=>import("./editbill-CrlEjSG0.js"),__vite__mapDeps([5,1])),name:"ChooseSheet",item:l,members:C||[],me:n.user.name,suggested:Un,today:p,saveBill:Yu,removeWallet:Ju,onClose:()=>h(null),onConfirmed:()=>vt(String(l.date).slice(0,7)),onDone:(P,B=[])=>{he(P),B.forEach(W=>vt(W)),_t(W=>W+1)},onMoreSplit:P=>{h(null),Ee(P)}}),qe&&qe.kind==="budget"&&d(ut,{load:Bo,name:"BudgetSheet",plan:de,nowMonth:_,suggestSat:_r?_r.suggestSat:0,onClose:()=>ct(null),onSave:P=>Wt(DE(P),P.clear?"กลับไปใช้งบปกติแล้ว":"บันทึกงบแล้ว")}),qe&&qe.kind==="move"&&d(ut,{load:Bo,name:"GoalMoveSheet",goal:qe.goal,dir:qe.dir,month:_,onClose:()=>ct(null),onMove:(P,B,W)=>Wt(ME(P,B,W),W==="out"?"ถอนออกจากเป้าแล้ว":"เก็บเข้าเป้าแล้ว")}),qe&&qe.kind==="goal"&&d(ut,{load:Bo,name:"GoalEditSheet",goal:qe.goal||null,nowMonth:_,onClose:()=>ct(null),onSave:P=>Wt(VE(P),P.id?"แก้เป้าแล้ว":"เพิ่มเป้าแล้ว"),onDelete:P=>Wt(OE(P),"ลบเป้าแล้ว")}),w&&d("div",{class:"toast",role:"status",children:w})]})}am(d(MT,{}),document.getElementById("app"));export{lI as $,Tp as A,fI as B,Oi as C,_I as D,gm as E,BE as F,Ju as G,iI as H,X as I,GT as J,sI as K,ut as L,KT as M,qT as N,QT as O,WT as P,vI as Q,uh as R,Ip as S,Ge as T,cI as U,oI as V,Nl as W,FT as X,Pt as Y,WE as Z,fn as _,wm as a,uI as a0,up as a1,XE as a2,$T as a3,UE as a4,zT as a5,gI as a6,rI as a7,XT as a8,YT as a9,JT as aa,UT as ab,BT as ac,pm as b,ne as c,ie as d,lT as e,mI as f,pI as g,wp as h,tp as i,Q as j,Ep as k,yI as l,yp as m,tI as n,ch as o,eI as p,ZT as q,nI as r,dI as s,hI as t,d as u,vp as v,aI as w,ye as x,HT as y,jT as z};
