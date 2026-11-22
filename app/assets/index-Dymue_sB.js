const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-CQdH4Nw3.js","assets/freq-2QqQ2-QI.js","assets/ListPage-DHKmwZhL.js","assets/MePage-DYURuThq.js","assets/plan-DYjVAA8Y.js","assets/cards-BSHuxg0A.js","assets/editbill-DhtJ9H0Z.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Am="modulepreload",Sm=function(n){return"/app/"+n},zl={},N=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=Sm(l),l in zl)return;zl[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Am,d||(m.as="script"),m.crossOrigin="",m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),d)return new Promise((_,b)=>{m.addEventListener("load",_),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var lo,pe,Qh,pn,ql,Xh,Yh,na,yi,ds,Jh,Ja,va,Ea,Mi={},Vi=[],Rm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,uo=Array.isArray;function Ft(n,e){for(var t in e)n[t]=e[t];return n}function Za(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function km(n,e,t){var r,s,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?lo.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return vi(n,a,r,s,null)}function vi(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Qh,__i:-1,__u:0};return s==null&&pe.vnode!=null&&pe.vnode(i),i}function H(n){return n.children}function Ei(n,e){this.props=n,this.context=e}function Wn(n,e){if(e==null)return n.__?Wn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Wn(n):null}function Pm(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],s=[],i=Ft({},e);i.__v=e.__v+1,pe.vnode&&pe.vnode(i),ec(n.__P,i,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Wn(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,rd(r,i,s),e.__e=e.__=null,i.__e!=t&&Zh(i)}}function Zh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Zh(n)}function Wl(n){(!n.__d&&(n.__d=!0)&&pn.push(n)&&!Ni.__r++||ql!=pe.debounceRendering)&&((ql=pe.debounceRendering)||Xh)(Ni)}function Ni(){try{for(var n,e=1;pn.length;)pn.length>e&&pn.sort(Yh),n=pn.shift(),e=pn.length,Pm(n)}finally{pn.length=Ni.__r=0}}function ed(n,e,t,r,s,i,a,c,l,d,p){var m,_,b,k,D,S,V=r&&r.__k||Vi,F=e.length;for(l=Cm(t,e,V,l,F),m=0;m<F;m++)(b=t.__k[m])!=null&&(_=b.__i!=-1&&V[b.__i]||Mi,b.__i=m,S=ec(n,b,_,s,i,a,c,l,d,p),k=b.__e,b.ref&&_.ref!=b.ref&&(_.ref&&tc(_.ref,null,b),p.push(b.ref,b.__c||k,b)),D==null&&k!=null&&(D=k),4&b.__u?(l=td(b,l,n),_.__e&&(_.__e=null)):typeof b.type=="function"&&S!==void 0?l=S:k&&(l=k.nextSibling),b.__u&=-7);return t.__e=D,l}function Cm(n,e,t,r,s){var i,a,c,l,d,p=t.length,m=p,_=0;for(n.__k=new Array(s),i=0;i<s;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[i]=vi(null,a,null,null,null):uo(a)?a=n.__k[i]=vi(H,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[i]=vi(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[i]=a,l=i+_,a.__=n,a.__b=n.__b+1,c=null,(d=a.__i=Dm(a,t,l,m))!=-1&&(m--,(c=t[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(s>p?_--:s<p&&_++),typeof a.type!="function"&&(a.__u|=4)):d!=l&&(d==l-1?_--:d==l+1?_++:(d>l?_--:_++,a.__u|=4))):n.__k[i]=null;if(m)for(i=0;i<p;i++)(c=t[i])!=null&&!(2&c.__u)&&(c.__e==r&&(r=Wn(c)),id(c,c));return r}function td(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=td(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Wn(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Dm(n,e,t,r){var s,i,a,c=n.key,l=n.type,d=e[t],p=d!=null&&(2&d.__u)==0;if(d===null&&c==null||p&&c==d.key&&l==d.type)return t;if(r>(p?1:0)){for(s=t-1,i=t+1;s>=0||i<e.length;)if((d=e[a=s>=0?s--:i++])!=null&&!(2&d.__u)&&c==d.key&&l==d.type)return a}return-1}function Hl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Rm.test(e)?t:t+"px"}function li(n,e,t,r,s){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Hl(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Hl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Jh,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t[ds]=r[ds]:(t[ds]=Ja,n.addEventListener(e,i?Ea:va,i)):n.removeEventListener(e,i?Ea:va,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Gl(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[yi]==null)e[yi]=Ja++;else if(e[yi]<t[ds])return;return t(pe.event?pe.event(e):e)}}}function ec(n,e,t,r,s,i,a,c,l,d){var p,m,_,b,k,D,S,V,F,B,Q,J,te,w,v,E,T=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[c=e.__e=t.__e]),(p=pe.__b)&&p(e);e:if(typeof T=="function"){m=a.length;try{if(F=e.props,B=T.prototype&&T.prototype.render,Q=(p=T.contextType)&&r[p.__c],J=p?Q?Q.props.value:p.__:r,t.__c?V=(_=e.__c=t.__c).__=_.__E:(B?e.__c=_=new T(F,J):(e.__c=_=new Ei(F,J),_.constructor=T,_.render=Vm),Q&&Q.sub(_),_.state||(_.state={}),_.__n=r,b=_.__d=!0,_.__h=[],_._sb=[]),B&&_.__s==null&&(_.__s=_.state),B&&T.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=Ft({},_.__s)),Ft(_.__s,T.getDerivedStateFromProps(F,_.__s))),k=_.props,D=_.state,_.__v=e,b)B&&T.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),B&&_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(B&&T.getDerivedStateFromProps==null&&F!==k&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(F,J),e.__v==t.__v||!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(F,_.__s,J)===!1){e.__v!=t.__v&&(_.props=F,_.state=_.__s,_.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),Vi.push.apply(_.__h,_._sb),_._sb=[],_.__h.length&&a.push(_),c=Wn(t);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(F,_.__s,J),B&&_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(k,D,S)})}if(_.context=J,_.props=F,_.__P=n,_.__e=!1,te=pe.__r,w=0,B)_.state=_.__s,_.__d=!1,te&&te(e),p=_.render(_.props,_.state,_.context),Vi.push.apply(_.__h,_._sb),_._sb=[];else do _.__d=!1,te&&te(e),p=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++w<25);_.state=_.__s,_.getChildContext!=null&&(r=Ft(Ft({},r),_.getChildContext())),B&&!b&&_.getSnapshotBeforeUpdate!=null&&(S=_.getSnapshotBeforeUpdate(k,D)),v=p!=null&&p.type===H&&p.key==null?sd(p.props.children):p,c=ed(n,uo(v)?v:[v],e,t,r,s,i,a,c,l,d),_.base=e.__e,e.__u&=-161,_.__h.length&&a.push(_),V&&(_.__E=_.__=null)}catch(A){if(a.length=m,e.__v=null,l||i!=null){if(A.then){for(e.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i!=null&&(i[i.indexOf(c)]=null),e.__e=c}else if(i!=null)for(E=i.length;E--;)Za(i[E])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),A.then||nd(e),pe.__e(A,e,t)}}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=Mm(t.__e,e,t,r,s,i,a,l,d);return(p=pe.diffed)&&p(e),128&e.__u?void 0:c}function nd(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(nd))}function rd(n,e,t){for(var r=0;r<t.length;r++)tc(t[r],t[++r],t[++r]);pe.__c&&pe.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){pe.__e(i,s.__v)}})}function sd(n){return typeof n!="object"||n==null||n.__b>0?n:uo(n)?n.map(sd):n.constructor!==void 0?null:Ft({},n)}function Mm(n,e,t,r,s,i,a,c,l){var d,p,m,_,b,k,D,S=t.props||Mi,V=e.props,F=e.type;if(F=="svg"?s="http://www.w3.org/2000/svg":F=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((b=i[d])&&"setAttribute"in b==!!F&&(F?b.localName==F:b.nodeType==3)){n=b,i[d]=null;break}}if(n==null){if(F==null)return document.createTextNode(V);n=document.createElementNS(s,F,V.is&&V),c&&(pe.__m&&pe.__m(e,i),c=!1),i=null}if(F==null)S===V||c&&n.data==V||(n.data=V);else{if(i=F=="textarea"&&V.defaultValue!=null?null:i&&lo.call(n.childNodes),!c&&i!=null)for(S={},d=0;d<n.attributes.length;d++)S[(b=n.attributes[d]).name]=b.value;for(d in S)b=S[d],d=="dangerouslySetInnerHTML"?m=b:d=="children"||d in V||d=="value"&&"defaultValue"in V||d=="checked"&&"defaultChecked"in V||li(n,d,null,b,s);for(d in V)b=V[d],d=="children"?_=b:d=="dangerouslySetInnerHTML"?p=b:d=="value"?k=b:d=="checked"?D=b:c&&typeof b!="function"||S[d]===b||li(n,d,b,S[d],s);if(p)c||m&&(p.__html==m.__html||p.__html==n.innerHTML)||(n.innerHTML=p.__html),e.__k=[];else if(m&&(n.innerHTML=""),ed(e.type=="template"?n.content:n,uo(_)?_:[_],e,t,r,F=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:t.__k&&Wn(t,0),c,l),i!=null)for(d=i.length;d--;)Za(i[d]);c&&F!="textarea"||(d="value",F=="progress"&&k==null?n.removeAttribute("value"):k!=null&&(k!==n[d]||F=="progress"&&!k||F=="option"&&k!=S[d])&&li(n,d,k,S[d],s),d="checked",D!=null&&D!=n[d]&&li(n,d,D,S[d],s))}return n}function tc(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){pe.__e(s,t)}}function id(n,e,t){var r,s;if(pe.unmount&&pe.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||tc(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){pe.__e(i,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&id(r[s],e,t||typeof n.type!="function");t||Za(n.__e),n.__c=n.__=n.__e=void 0}function Vm(n,e,t){return this.constructor(n,t)}function Nm(n,e,t){var r,s,i,a;e==document&&(e=document.documentElement),pe.__&&pe.__(n,e),s=(r=!1)?null:e.__k,i=[],a=[],ec(e,n=e.__k=km(H,null,[n]),s||Mi,Mi,e.namespaceURI,s?null:e.firstChild?lo.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,a),rd(i,n,a),n.props.children=null}lo=Vi.slice,pe={__e:function(n,e,t,r){for(var s,i,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},Qh=0,Ei.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ft({},this.state),typeof n=="function"&&(n=n(Ft({},t),this.props)),n&&Ft(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Wl(this))},Ei.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Wl(this))},Ei.prototype.render=H,pn=[],Xh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Yh=function(n,e){return n.__v.__b-e.__v.__b},Ni.__r=0,na=Math.random().toString(8),yi="__d"+na,ds="__a"+na,Jh=/(PointerCapture)$|Capture$/i,Ja=0,va=Gl(!1),Ea=Gl(!0);var Om=0;function h(n,e,t,r,s,i){e||(e={});var a,c,l=e;if("ref"in l)for(c in l={},e)c=="ref"?a=e[c]:l[c]=e[c];var d={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Om,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)l[c]===void 0&&(l[c]=a[c]);return pe.vnode&&pe.vnode(d),d}var ys,Se,ra,Kl,Oi=0,od=[],Pe=pe,Ql=Pe.__b,Xl=Pe.__r,Yl=Pe.diffed,Jl=Pe.__c,Zl=Pe.unmount,eu=Pe.__;function nc(n,e){Pe.__h&&Pe.__h(Se,n,Oi||e),Oi=0;var t=Se.__H||(Se.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function ee(n){return Oi=1,Lm(cd,n)}function Lm(n,e,t){var r=nc(ys++,2);if(r.t=n,!r.__c&&(r.__=[cd(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],d=r.t(l,c);l!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=Se,!Se.__f)){var s=function(c,l,d){if(!r.__c.__H)return!0;var p=!1,m=r.__c.props!==c;if(r.__c.__H.__.some(function(b){if(b.__N){p=!0;var k=b.__[0];b.__=b.__N,b.__N=void 0,k!==b.__[0]&&(m=!0)}}),i){var _=i.call(this,c,l,d);return p?_||m:_}return!p||m};Se.__f=!0;var i=Se.shouldComponentUpdate,a=Se.componentWillUpdate;Se.componentWillUpdate=function(c,l,d){if(this.__e){var p=i;i=void 0,s(c,l,d),i=p}a&&a.call(this,c,l,d)},Se.shouldComponentUpdate=s}return r.__N||r.__}function de(n,e){var t=nc(ys++,3);!Pe.__s&&ad(t.__H,e)&&(t.__=n,t.u=e,Se.__H.__h.push(t))}function Li(n){return Oi=5,Ye(function(){return{current:n}},[])}function Ye(n,e){var t=nc(ys++,7);return ad(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function xm(){for(var n;n=od.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(bi),e.__h.some(ba),e.__h=[]}catch(t){e.__h=[],Pe.__e(t,n.__v)}}}Pe.__b=function(n){Se=null,Ql&&Ql(n)},Pe.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),eu&&eu(n,e)},Pe.__r=function(n){Xl&&Xl(n),ys=0;var e=(Se=n.__c).__H;e&&(ra===Se?(e.__h=[],Se.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(bi),e.__h.some(ba),e.__h=[],ys=0)),ra=Se},Pe.diffed=function(n){Yl&&Yl(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(od.push(e)!==1&&Kl===Pe.requestAnimationFrame||((Kl=Pe.requestAnimationFrame)||Fm)(xm)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),ra=Se=null},Pe.__c=function(n,e){e.some(function(t){try{t.__h.some(bi),t.__h=t.__h.filter(function(r){return!r.__||ba(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Pe.__e(r,t.__v)}}),Jl&&Jl(n,e)},Pe.unmount=function(n){Zl&&Zl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{bi(r)}catch(s){e=s}}),t.__H=void 0,e&&Pe.__e(e,t.__v))};var tu=typeof requestAnimationFrame=="function";function Fm(n){var e,t=function(){clearTimeout(r),tu&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);tu&&(e=requestAnimationFrame(t))}function bi(n){var e=Se,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Se=e}function ba(n){var e=Se;n.__c=n.__(),Se=e}function ad(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function cd(n,e){return typeof e=="function"?e(n):e}const ld={netflix:"E50914",spotify:"1DB954",youtube:"FF0000",grab:"00B14F",shopee:"EE4D2D",line:"00C300",starbucks:"006241",mcdonalds:"FBC817",kfc:"F40027",apple:"000000",applemusic:"FA243C",google:"4285F4",googlecloud:"4285F4",openai:"412991",anthropic:"191919",shell:"FFD500",foodpanda:"D70F64",airbnb:"FF5A5F",icloud:"3693F3",amazon:"FF9900",hbo:"000000",tiktok:"000000",instagram:"E4405F",facebook:"0866FF",whatsapp:"25D366",telegram:"26A5E4",discord:"5865F2",twitch:"9146FF",steam:"000000",playstation:"003791",nintendoswitch:"E60012",roblox:"000000",uber:"000000",airasia:"FF0000",expedia:"191E3B",tripadvisor:"34E0A1",ikea:"0058A3",uniqlo:"FF0000",handm:"E50010",zara:"000000",nike:"111111",adidas:"000000",samsung:"1428A0",adobe:"FF0000",dropbox:"0061FF",github:"181717",canva:"00C4CC",notion:"000000",figma:"F24E1E",zoom:"0B5CFF",slack:"4A154B",paypal:"003087",aliexpress:"FF4747",googledrive:"4285F4",googleplay:"414141",soundcloud:"FF5500",tidal:"000000",linkedin:"0A66C2",patreon:"000000",youtubemusic:"FF0000",toyota:"EB0A1E",honda:"E40521",mazda:"101010",nissan:"C3002F",mitsubishi:"E60012",bmw:"0066B1",mercedes:"242424",tesla:"CC0000",suzuki:"E30613",burgerking:"D62300",tripdotcom:"287DFA",epicgames:"313131",duolingo:"58CC02",udemy:"A435F0",coursera:"0056D2",visa:"1A1F71",mastercard:"EB001B",americanexpress:"2E77BC",wise:"9FE870",ubereats:"06C167",perplexity:"1FB8CD",googlegemini:"8E75B2",xiaomi:"FF6900",huawei:"FF0000",oppo:"2D683D",applepay:"000000",googlepay:"4285F4",x:"000000",pinterest:"BD081C",snapchat:"FFFC00",messenger:"00B2FF",nordvpn:"4687FF",expressvpn:"DA3940",primevideo:"1F2E3E",hotelsdotcom:"EF3346",boots:"05054B",jcb:"0B4EA2"},Um=n=>{const e=parseInt(n.slice(1),16);return .299*(e>>16&255)+.587*(e>>8&255)+.114*(e&255)>170},rc=n=>Um(n)?"#111111":"#ffffff",L=(n,e,t,r={})=>{const s=r.bg||"#"+ld[t];return{key:n,re:e,si:t,bg:s,fg:r.fg||rc(s),...r}},ns=(n,e,t)=>L(n,e,t,{bg:"#ffffff",fg:"#"+ld[t],ring:!0}),ve=(n,e,t,r={})=>({key:n,re:e,bg:t,fg:r.fg||rc(t),...r}),Fe=(n,e,t,r,s={})=>({key:n,re:e,text:t,bg:r,fg:s.fg||rc(r),...s}),jm=[Fe("aia",/\baia\b|เอไอเอ/,"AIA","#d31145"),Fe("axa",/\baxa\b|แอกซ่า/,"AXA","#00008f"),Fe("fwd",/\bfwd\b|เอฟดับบลิวดี/,"FWD","#183028",{fg:"#ee7623"}),Fe("allianz",/allianz|อลิอันซ์/,"Allianz","#003781"),Fe("prudential",/prudential|พรูเด็นเชียล/,"PRU","#ed1b2e"),Fe("muangthailife",/muang ?thai ?life|เมืองไทยประกันชีวิต/,"MTL","#388fca"),Fe("thailife",/thai ?life|ไทยประกันชีวิต/,"TLI","#007ac1"),Fe("bangkoklife",/bangkok ?life|กรุงเทพประกันชีวิต/,"BLA","#003394"),Fe("generali",/generali|เจนเนอราลี่/,"Generali","#c1210d"),Fe("manulife",/manulife|แมนูไลฟ์/,"Manulife","#00a758"),Fe("dhipaya",/dhipaya|ทิพยประกัน/,"ทิพย","#ec2227"),Fe("viriyah",/viriyah|วิริยะ/,"วิริยะ","#0134a2",{fg:"#fcaf17"}),Fe("msig",/\bmsig\b/,"MSIG","#e11f27"),Fe("bki",/bangkok ?insurance|กรุงเทพประกันภัย|\bbki\b/,"BKI","#05048c"),Fe("roojai",/roojai|รู้ใจ/,"รู้ใจ","#003b71",{fg:"#ff5011"}),Fe("chubb",/chubb|ชับบ์/,"CHUBB","#000000"),Fe("sompo",/sompo|ซมโปะ/,"SOMPO","#e10032"),ve("coway",/coway|โคเวย์/,"#00a8e1",{icon:"water"}),ve("foodland",/foodland|ฟู้ดแลนด์/,"#fc0001",{icon:"bag"}),ve("tops",/\btops\b|ท็อปส์/,"#ff3d1c",{icon:"bag"}),ve("central",/central|เซ็นทรัล/,"#f50a3c",{icon:"bag"}),ve("mk",/\bmk\b|เอ็มเค/,"#ec1c24",{icon:"food"}),ve("swensens",/swensen|สเวนเซ่น/,"#e10e18",{icon:"cake"}),ve("watsons",/watsons|วัตสัน/,"#009aa9",{icon:"beauty"}),ve("powerbuy",/power ?buy|เพาเวอร์บาย/,"#5f3281",{icon:"laptop"}),ve("bts",/\bbts\b|บีทีเอส/,"#c81518",{icon:"train"}),ve("mrt",/\bmrt\b|เอ็มอาร์ที/,"#045091",{icon:"train"}),ve("bangchak",/bangchak|บางจาก/,"#37b34a",{icon:"fuel"}),L("applepay",/apple ?pay/,"applepay"),L("googlepay",/google ?pay|g ?pay/,"googlepay",{bg:"#ffffff",fg:"#4285f4",ring:!0}),L("gemini",/gemini|เจมิไน/,"googlegemini"),L("primevideo",/prime ?video/,"primevideo"),L("ubereats",/uber ?eats/,"ubereats"),L("burgerking",/burger ?king|เบอร์เกอร์ ?คิง/,"burgerking"),L("tripdotcom",/trip\.com|ทริปดอทคอม/,"tripdotcom"),L("hotelsdotcom",/hotels\.com/,"hotelsdotcom"),L("epicgames",/epic ?games/,"epicgames"),L("duolingo",/duolingo/,"duolingo"),L("udemy",/udemy/,"udemy"),L("coursera",/coursera/,"coursera"),L("visa",/\bvisa\b|วีซ่า/,"visa"),L("mastercard",/master ?card|มาสเตอร์การ์ด/,"mastercard",{bg:"#ffffff",fg:"#eb001b",ring:!0}),L("amex",/american ?express|\bamex\b/,"americanexpress"),L("jcb",/\bjcb\b/,"jcb"),L("wise",/\bwise\b/,"wise"),L("perplexity",/perplexity/,"perplexity"),L("xiaomi",/xiaomi|เสียวหมี่/,"xiaomi"),L("huawei",/huawei|หัวเว่ย/,"huawei"),L("oppo",/\boppo\b/,"oppo"),L("x",/\bx\.com|twitter|ทวิตเตอร์/,"x"),L("pinterest",/pinterest/,"pinterest"),L("snapchat",/snapchat/,"snapchat"),L("messenger",/messenger/,"messenger"),L("nordvpn",/nordvpn/,"nordvpn"),L("expressvpn",/expressvpn/,"expressvpn"),L("boots",/\bboots\b|บู๊ทส์/,"boots"),L("netflix",/netflix|เน็ตฟลิกซ์/,"netflix",{bg:"#000000",fg:"#e50914"}),L("youtubemusic",/youtube ?music|ยูทูบ ?มิวสิค/,"youtubemusic"),ns("youtube",/youtube|ยูทูบ/,"youtube"),L("spotify",/spotify|สปอติฟาย/,"spotify",{bg:"#191414",fg:"#1ed760"}),ve("disney",/disney|ดิสนีย์/,"#113ccf"),L("hbo",/\bhbo\b/,"hbo"),L("applemusic",/apple ?music/,"applemusic"),L("icloud",/icloud/,"icloud"),L("apple",/apple|itunes/,"apple"),ns("googlecloud",/google ?cloud/,"googlecloud"),ns("googledrive",/google ?(drive|one)/,"googledrive"),ns("googleplay",/google ?play/,"googleplay"),ns("google",/google|กูเกิล/,"google"),L("chatgpt",/chatgpt|openai/,"openai",{bg:"#10a37f",fg:"#ffffff"}),L("claude",/claude/,"claude",{bg:"#d97757",fg:"#ffffff"}),L("anthropic",/anthropic/,"anthropic",{bg:"#d97757",fg:"#ffffff"}),ve("lineman",/line ?man|ไลน์แมน|lpth\*pf|\blm_/,"#06c755"),L("line",/\bline\b|ไลน์/,"line",{bg:"#06c755",fg:"#ffffff"}),L("grab",/\bgrab|แกร็บ/,"grab"),L("uber",/\buber\b/,"uber"),L("foodpanda",/foodpanda|ฟู้ดแพนด้า/,"foodpanda"),ve("seven",/7-?11|7-eleven|seven ?eleven|เซเว่น/,"#00a650"),ve("cafeamazon",/caf[eé] ?amazon|คาเฟ่ ?อเมซอน|อเมซอน/,"#00693c"),L("amazon",/\bamazon\b/,"amazon",{bg:"#232f3e",fg:"#ff9900"}),L("starbucks",/starbucks|สตาร์บัค/,"starbucks",{round:!0}),L("shopee",/shopee|ช้อปปี้/,"shopee"),ve("lazada",/lazada|ลาซาด้า/,"#0f146d"),L("aliexpress",/aliexpress|อาลีเอ็กซ์/,"aliexpress"),L("mcdonald",/mcdonald|แมคโดนัลด์|แมค ?ดี/,"mcdonalds",{bg:"#da291c",fg:"#ffc72c"}),L("kfc",/\bkfc|เคเอฟซี/,"kfc"),ve("ais",/\bais\b|เอไอเอส/,"#8dc63f"),ve("true",/\btrue\b|ทรูมูฟ|ทรูออนไลน์/,"#ee2e24"),ve("3bb",/3bb/,"#0055a5"),ve("ptt",/\bptt\b|ปตท/,"#00439c"),L("shell",/\bshell\b|เชลล์/,"shell",{bg:"#ffd500",fg:"#dd1d21"}),ve("lotus",/lotus|โลตัส/,"#00a651"),ve("bigc",/big ?c\b|บิ๊กซี/,"#ed1c24"),ve("makro",/makro|แม็คโคร|แมคโคร/,"#003d8f"),L("airasia",/airasia|แอร์เอเชีย/,"airasia"),L("airbnb",/airbnb/,"airbnb"),L("expedia",/expedia/,"expedia"),L("tripadvisor",/tripadvisor/,"tripadvisor"),L("tiktok",/tiktok|ติ๊กต็อก/,"tiktok"),L("instagram",/instagram/,"instagram"),L("facebook",/facebook|เฟซบุ๊ก/,"facebook"),L("whatsapp",/whatsapp/,"whatsapp"),L("telegram",/telegram/,"telegram"),L("discord",/discord/,"discord"),L("twitch",/twitch/,"twitch"),L("steam",/steam|สตีม/,"steam"),L("playstation",/playstation|เพลย์สเตชัน|\bpsn\b/,"playstation"),L("nintendo",/nintendo|นินเทนโด/,"nintendoswitch"),L("roblox",/roblox/,"roblox"),L("soundcloud",/soundcloud/,"soundcloud"),L("tidal",/\btidal\b/,"tidal"),L("linkedin",/linkedin/,"linkedin"),L("patreon",/patreon/,"patreon"),L("paypal",/paypal/,"paypal"),L("github",/github/,"github"),L("adobe",/adobe/,"adobe"),L("dropbox",/dropbox/,"dropbox"),L("canva",/canva/,"canva"),L("notion",/notion/,"notion"),L("figma",/figma/,"figma"),L("zoom",/\bzoom\b/,"zoom"),L("slack",/\bslack\b/,"slack"),L("samsung",/samsung|ซัมซุง/,"samsung"),L("ikea",/ikea|อิเกีย/,"ikea"),L("uniqlo",/uniqlo|ยูนิโคล่/,"uniqlo"),L("handm",/h&m/,"handm"),L("zara",/\bzara\b/,"zara"),L("nike",/\bnike\b|ไนกี้/,"nike"),L("adidas",/adidas|อาดิดาส/,"adidas"),L("toyota",/toyota|โตโยต้า|โตโยตา/,"toyota"),L("honda",/honda|ฮอนด้า|civic|ซีวิค/,"honda"),L("mazda",/mazda|มาสด้า/,"mazda"),L("nissan",/nissan|นิสสัน/,"nissan"),L("mitsubishi",/mitsubishi|มิตซู/,"mitsubishi"),L("bmw",/\bbmw\b/,"bmw"),L("mercedes",/mercedes|benz|เบนซ์/,"mercedes"),L("tesla",/tesla|เทสล่า/,"tesla"),L("suzuki",/suzuki|ซูซูกิ/,"suzuki")];function Bm(n){const e=String(n||"").toLowerCase();return e.trim()&&jm.find(t=>t.re.test(e))||null}const ho=[{key:"food",label:"อาหาร",fa:"fa-utensils",icon:"food",group:"food"},{key:"drink",label:"กาแฟ/เครื่องดื่ม",fa:"fa-mug-hot",icon:"coffee",group:"food"},{key:"snack",label:"ขนม/เบเกอรี่",fa:"fa-cookie",icon:"cake",group:"food"},{key:"fresh",label:"ของสด/ตลาด",fa:"fa-carrot",icon:"leaf",group:"food"},{key:"delivery",label:"เดลิเวอรี่",fa:"fa-box",icon:"box",group:"food"},{key:"party",label:"เหล้า/ปาร์ตี้",fa:"fa-wine-glass",icon:"glass",group:"food"},{key:"bills",label:"ค่าไฟ/บิล",fa:"fa-bolt",icon:"bolt",group:"bills"},{key:"water",label:"ค่าน้ำ",fa:"fa-droplet",icon:"water",group:"bills"},{key:"net",label:"เน็ต/WiFi",fa:"fa-wifi",icon:"wifi",group:"bills"},{key:"phone",label:"มือถือ",fa:"fa-mobile-screen",icon:"mobile",group:"bills"},{key:"rent",label:"ที่พัก/ค่าห้อง",fa:"fa-house",icon:"key",group:"bills"},{key:"condo",label:"ค่าส่วนกลาง",fa:"fa-building",icon:"building",group:"bills"},{key:"insure",label:"ประกัน",fa:"fa-shield",icon:"shieldok",group:"bills"},{key:"tax",label:"ภาษี/ค่าธรรมเนียม",fa:"fa-file-invoice-dollar",icon:"taxdoc",group:"bills"},{key:"app",label:"แอป/สมาชิก",fa:"fa-table-cells",icon:"apps",group:"bills"},{key:"goods",label:"ของใช้/ซุปเปอร์",fa:"fa-cart-shopping",icon:"bag",group:"goods"},{key:"clothes",label:"เสื้อผ้า",fa:"fa-shirt",icon:"shirt",group:"goods"},{key:"beauty",label:"ความงาม",fa:"fa-spray-can",icon:"beauty",group:"goods"},{key:"gadget",label:"ไอที/อุปกรณ์",fa:"fa-laptop",icon:"laptop",group:"goods"},{key:"home",label:"ของแต่งบ้าน",fa:"fa-couch",icon:"sofa",group:"goods"},{key:"health",label:"ยา/สุขภาพ",fa:"fa-pills",icon:"pill",group:"goods"},{key:"doctor",label:"หมอ/โรงพยาบาล",fa:"fa-hospital",icon:"cross",group:"goods"},{key:"pet",label:"สัตว์เลี้ยง",fa:"fa-paw",icon:"paw",group:"goods"},{key:"gift",label:"ของขวัญ",fa:"fa-gift",icon:"gift",group:"goods"},{key:"kid",label:"ลูก/เด็ก",fa:"fa-baby",icon:"baby",group:"goods"},{key:"travel",label:"รถ/ผ่อนรถ",fa:"fa-car",icon:"car",group:"travel"},{key:"fuel",label:"น้ำมัน/ชาร์จรถ",fa:"fa-gas-pump",icon:"fuel",group:"travel"},{key:"transit",label:"รถไฟฟ้า/รถเมล์",fa:"fa-train-subway",icon:"train",group:"travel"},{key:"ride",label:"วิน/แท็กซี่",fa:"fa-motorcycle",icon:"moto",group:"travel"},{key:"parking",label:"ทางด่วน/ที่จอด",fa:"fa-square-parking",icon:"parking",group:"travel"},{key:"carcare",label:"ล้าง/ซ่อมรถ",fa:"fa-wrench",icon:"wrench",group:"travel"},{key:"trip",label:"เที่ยว",fa:"fa-plane",icon:"plane",group:"travel"},{key:"fun",label:"หนัง/สตรีม",fa:"fa-film",icon:"film",group:"fun"},{key:"game",label:"เกม",fa:"fa-gamepad",icon:"game",group:"fun"},{key:"sport",label:"กีฬา/ฟิตเนส",fa:"fa-dumbbell",icon:"dumbbell",group:"fun"},{key:"event",label:"คอนเสิร์ต/งาน",fa:"fa-ticket",icon:"ticket",group:"fun"},{key:"merit",label:"ทำบุญ/บริจาค",fa:"fa-hands-praying",icon:"lotus",group:"other"},{key:"edu",label:"การศึกษา",fa:"fa-graduation-cap",icon:"grad",group:"other"},{key:"transfer",label:"โอน/เติมเงิน",fa:"fa-money-bill-transfer",icon:"swap",group:"other"},{key:"other",label:"อื่นๆ",fa:"fa-money-bill",icon:"dots",group:"other"}];Object.fromEntries(ho.map(n=>[n.key,n.fa]));const $m=[["delivery",["grab food","grabfood","lineman","line man","foodpanda","robinhood","shopeefood","เดลิเวอรี่","ส่งอาหาร"]],["insure",["ประกัน","เบี้ย","aia","axa","fwd","allianz","prudential","generali","manulife","msig","chubb","sompo","roojai","รู้ใจ","ทิพย","วิริยะ"]],["tax",["ภาษี","สรรพากร","revenue","ค่าธรรมเนียม","ค่าปรับ"]],["condo",["ค่าส่วนกลาง","นิติบุคคล"]],["trip",["เที่ยว","โรงแรม","ที่พักรีสอร์ท","เครื่องบิน","ตั๋วเครื่องบิน","airbnb","agoda","ทริป","airasia","trip.com","booking"]],["rent",["ค่าเช่า","ค่าห้อง","ค่าหอ","คอนโด"]],["party",["เหล้า","เบียร์","ไวน์","ปาร์ตี้","ผับ"]],["drink",["กาแฟ","ชานม","ชาไข่มุก","คาเฟ่","เครื่องดื่ม","น้ำผลไม้","starbucks","amazon","coffee"]],["snack",["ขนม","เค้ก","เบเกอรี่","ขนมปัง","ไอติม","ไอศกรีม","โดนัท","ครัวซอง","swensen","after you"]],["fresh",["ผักสด","ผลไม้","ตลาดสด","ของสด","ผัก "]],["pet",["แมว","หมา","สุนัข","สัตว์"]],["water",["ค่าน้ำ","ประปา","coway"]],["net",["ค่าเน็ต","อินเทอร์เน็ต","internet","เน็ตบ้าน","wifi","3bb","fiber","ไฟเบอร์"]],["phone",["ค่าโทร","ค่ามือถือ","โทรศัพท์","dtac","ais","truemove","เติมเงินมือถือ"]],["app",["netflix","spotify","youtube","disney","subscription","claude","chatgpt","openai","icloud","adobe","canva","hbo","prime video","google one","apple music","notion","gemini","perplexity","ค่าบริการ"]],["bills",["ค่าไฟ","การไฟฟ้า","เน็ต","ค่าเช่ารายเดือน","google cloud"]],["delivery",["grab"]],["food",["ข้าว","กิน","อาหาร","ก๋วยเตี๋ยว","หมูกระทะ","ชาบู","สุกี้","บุฟเฟ","ส้มตำ","ไก่","หมู","เนื้อ","ปิ้งย่าง","ผัด","ต้ม","แกง","กะเพรา","กระเพรา","ไข่เจียว","ลูกชิ้น","บะหมี่","สเต๊ะ","สลัด","salad","บอนชอน","bonchon","kfc","mcdonald","burger","pizza","ร้านอาหาร"]],["fuel",["น้ำมัน","ปตท","ptt","shell","บางจาก","bangchak","esso","caltex","ชาร์จรถ"]],["transit",["bts","mrt","รถไฟฟ้า","รถเมล์","รถไฟ","airport link"]],["ride",["แท็กซี่","taxi","วินมอเตอร์ไซค์","มอเตอร์ไซค์รับจ้าง","bolt"]],["parking",["ทางด่วน","ที่จอดรถ","จอดรถ","easy pass","m-flow"]],["carcare",["ล้างรถ","ซ่อมรถ","เปลี่ยนยาง","เช็คระยะ","อะไหล่"]],["travel",["รถ","แท็กซี่","ค่าเดินทาง","ตั๋วรถ","civic","honda","toyota","mazda","nissan","isuzu","mitsubishi","benz","bmw","พ.ร.บ.","ค่างวดรถ","ผ่อนรถ","ค่ารถ"]],["game",["เกม","steam","playstation","nintendo","garena","rov"]],["sport",["ฟิตเนส","ยิม","fitness","ฟุตบอล","แบดมินตัน","ว่ายน้ำ"]],["event",["คอนเสิร์ต","บัตรคอน","งานแฟร์","อีเวนต์"]],["fun",["หนัง","โรงหนัง","ดูหนัง","karaoke","คาราโอเกะ","บอร์ดเกม"]],["doctor",["หมอ","โรงพยาบาล","คลินิก","ทำฟัน","หมอฟัน","ตรวจสุขภาพ"]],["health",["ค่ายา","ซื้อยา","วิตามิน","ร้านยา"]],["beauty",["สิว","เครื่องสำอาง","สกินแคร์","ลิป","เซรั่ม","ทำเล็บ","ทำผม","ตัดผม","ซาลอน","สปา","นวด","watsons","วัตสัน"]],["clothes",["เสื้อ","กางเกง","ยีน","กระโปรง","รองเท้า","uniqlo","h&m","zara","nike","adidas"]],["gadget",["ipad","iphone","macbook","โน้ตบุ๊ก","notebook","หูฟัง","สายชาร์จ","power buy","powerbuy"]],["home",["เฟอร์นิเจอร์","ikea","homepro","โฮมโปร","ผ้าม่าน","ที่นอน","หมอน"]],["kid",["นมผง","ผ้าอ้อม","แพมเพิส","ของเล่น","ค่าลูก"]],["merit",["ทำบุญ","บริจาค","พวงมาลัย","ใส่บาตร","ถวาย"]],["edu",["ค่าเรียน","ค่าเทอม","คอร์สเรียน","udemy","coursera","duolingo"]],["gift",["ของขวัญ","วันเกิด","ซองงาน","ดอกไม้"]],["goods",["ซื้อ","ของใช้","ช้อป","shopee","lazada","7-11","เซเว่น","ซุปเปอร์","โลตัส","lotus","บิ๊กซี","big c","tops","foodland","makro","แม็คโคร","cj","ที่ปิ้ง","ครีม","สบู่","ยาสระผม","ที่ปั่นหู","ทิชชู่"]]];function zm(n){const e=String(n||"").toLowerCase();if(!e.trim())return"other";for(const[t,r]of $m)if(r.some(s=>e.includes(s)))return t;return"other"}const qm={food:[],bills:["fa-mobile-screen-button"],goods:["fa-basket-shopping","fa-shopping-basket","fa-shopping-bag","fa-scissors"],travel:["fa-bus"],fun:["fa-tv"],other:[]},Wm=[{key:"food",label:"อาหารและเครื่องดื่ม",short:"อาหาร"},{key:"bills",label:"บิลและค่าบริการ",short:"บิล/รายเดือน"},{key:"goods",label:"ของใช้",short:"ของใช้"},{key:"travel",label:"เดินทาง",short:"เดินทาง"},{key:"fun",label:"บันเทิง",short:"บันเทิง"},{key:"other",label:"อื่นๆ",short:"อื่นๆ"}],ud=Wm.map(n=>({...n,icons:n.key==="other"?[]:[...ho.filter(e=>e.group===n.key).map(e=>e.fa),...qm[n.key]]})),nu={home:h(H,{children:[h("path",{d:"M3.5 11 12 4l8.5 7"}),h("path",{d:"M5.5 9.8V20h13V9.8"}),h("path",{d:"M10 20v-5.5h4V20"})]}),bill:h(H,{children:[h("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),h("path",{d:"M9 8.5h6M9 12h6"})]}),swap:h("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:h(H,{children:[h("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),h("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),h("path",{d:"M15.5 13.8h2.2"})]}),user:h(H,{children:[h("circle",{cx:"12",cy:"8.5",r:"3.6"}),h("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:h("path",{d:"M12 5v14M5 12h14"}),check:h("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:h(H,{children:[h("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),h("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),h("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),h("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:h("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:h("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:h("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:h("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:h("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:h(H,{children:[h("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),h("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:h(H,{children:[h("path",{d:"M5.5 8h13l-1 11.5h-11z"}),h("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:h("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:h(H,{children:[h("circle",{cx:"6",cy:"12",r:"1.1"}),h("circle",{cx:"12",cy:"12",r:"1.1"}),h("circle",{cx:"18",cy:"12",r:"1.1"})]}),people:h(H,{children:[h("circle",{cx:"9",cy:"8.5",r:"3.2"}),h("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),h("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:h(H,{children:[h("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),h("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),bell:h(H,{children:[h("path",{d:"M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"}),h("path",{d:"M10 20.5h4"})]}),trash:h(H,{children:[h("path",{d:"M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7"}),h("path",{d:"M10.5 11v5M13.5 11v5"})]}),alert:h(H,{children:[h("path",{d:"M12 4.5 3.5 19h17z"}),h("path",{d:"M12 10v4.5M12 17h.01"})]}),chart:h("path",{d:"M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5"}),sliders:h(H,{children:[h("path",{d:"M5 7h9M18 7h1M5 17h1M10 17h9"}),h("circle",{cx:"16",cy:"7",r:"2"}),h("circle",{cx:"8",cy:"17",r:"2"})]}),coffee:h(H,{children:[h("path",{d:"M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z"}),h("path",{d:"M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4.5v2M12 4.5v2"})]}),key:h(H,{children:[h("circle",{cx:"8.5",cy:"14.5",r:"3.5"}),h("path",{d:"M11 12 19 4.5M16 7.5l2.5 2.5M14 9.5l1.8 1.8"})]}),film:h(H,{children:[h("rect",{x:"4",y:"5",width:"16",height:"14",rx:"2"}),h("path",{d:"M8 5v14M16 5v14M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4"})]}),pill:h(H,{children:[h("rect",{x:"3.5",y:"9",width:"17",height:"6.5",rx:"3.25",transform:"rotate(-40 12 12)"}),h("path",{d:"m9.4 9.4 5.2 5.2"})]}),plane:h("path",{d:"M3.5 13.5 20.5 5l-4 14-4.5-4.5-3 3v-4.5zM11.5 14.5 20.5 5"}),gift:h(H,{children:[h("rect",{x:"4",y:"9",width:"16",height:"4",rx:"1"}),h("path",{d:"M5.5 13v6.5h13V13M12 9v10.5M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9zM12 9c1-3.5 5-3.5 5-1.2 0 1.2-2 1.2-5 1.2z"})]}),paw:h(H,{children:[h("circle",{cx:"7",cy:"10",r:"1.6"}),h("circle",{cx:"11",cy:"6.8",r:"1.6"}),h("circle",{cx:"15.5",cy:"7.5",r:"1.6"}),h("circle",{cx:"18",cy:"11.5",r:"1.6"}),h("path",{d:"M8 17.5c0-2.5 2.2-4.5 4.5-4.5s4.5 2 4 4.2c-.4 1.8-2 2.3-4 2.3S8 19.5 8 17.5z"})]}),search:h(H,{children:[h("circle",{cx:"11",cy:"11",r:"6"}),h("path",{d:"m16 16 4 4"})]}),pencil:h("path",{d:"M5 19l1-4L16.5 4.5a2 2 0 0 1 3 3L9 18zM14.5 6.5l3 3"}),close:h("path",{d:"M6 6l12 12M18 6 6 18"}),copy:h(H,{children:[h("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),h("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),play:h("polygon",{points:"8 5 19 12 8 19",style:"fill:currentColor"}),shield:h("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),mobile:h(H,{children:[h("rect",{x:"7",y:"3",width:"10",height:"18",rx:"2.5"}),h("path",{d:"M11 17.5h2"})]}),external:h(H,{children:h("path",{d:"M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"})}),layers:h(H,{children:[h("polygon",{points:"12 3 3 8 12 13 21 8"}),h("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]}),sparkle:h("path",{d:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"}),sun:h(H,{children:[h("circle",{cx:"12",cy:"12",r:"4"}),h("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),moon:h("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"}),list:h("path",{d:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"}),upload:h("path",{d:"M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14"}),grid:h(H,{children:[h("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"13",y:"4",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1.5"}),h("rect",{x:"13",y:"13",width:"7",height:"7",rx:"1.5"})]}),heart:h("path",{d:"M12 20s-7.5-4.4-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"}),star:h("path",{d:"m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"}),target:h(H,{children:[h("circle",{cx:"12",cy:"12",r:"8.5"}),h("circle",{cx:"12",cy:"12",r:"4.8"}),h("circle",{cx:"12",cy:"12",r:"1.2"})]}),card:h(H,{children:[h("rect",{x:"3",y:"5.5",width:"18",height:"13",rx:"2.5"}),h("path",{d:"M3 10h18M7 14.5h4"})]}),cake:h("path",{d:"M6 11h12l-1.5 8.5h-9zM6 11a6 6 0 0 1 12 0M9.5 11.5l.6 8M14.5 11.5l-.6 8"}),leaf:h("path",{d:"M5 19c0-8 5-13 14-14-1 9-6 14-14 14zM5 19l7.5-7.5"}),box:h("path",{d:"M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8"}),glass:h("path",{d:"M8 3.5h8l-.5 5a3.5 3.5 0 0 1-7 0zM12 12v8M8.5 20h7"}),water:h("path",{d:"M12 3.5c3.5 4 6 7.2 6 10.2a6 6 0 0 1-12 0c0-3 2.5-6.2 6-10.2z"}),wifi:h("path",{d:"M4.5 9.5a11 11 0 0 1 15 0M7.5 12.8a7 7 0 0 1 9 0M10.5 16a3 3 0 0 1 3 0M12 19h.01"}),building:h("path",{d:"M5 20V5h9v15M14 9h5v11M3.5 20h17M8 8h3M8 11h3M8 14h3"}),shieldok:h(H,{children:[h("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),h("path",{d:"m8.8 12.2 2.2 2.2 4.2-4.4"})]}),taxdoc:h("path",{d:"M7 3.5h7l4 4v13H7zM14 3.5v4h4M9.5 16.5l5-5M10 12h.01M14 16h.01"}),apps:h(H,{children:[h("rect",{x:"4",y:"4",width:"7",height:"7",rx:"2"}),h("rect",{x:"13",y:"4",width:"7",height:"7",rx:"2"}),h("rect",{x:"4",y:"13",width:"7",height:"7",rx:"2"}),h("path",{d:"M16.5 13v7M13 16.5h7"})]}),shirt:h("path",{d:"M8 4 4.5 6.5 6 10l2-1v11h8V9l2 1 1.5-3.5L16 4c-.8 1.5-2.2 2.2-4 2.2S8.8 5.5 8 4z"}),beauty:h("path",{d:"M9 21h6v-8H9zM10 13V9.5l4-2V13M13.5 4.5l1.5-1.5M16 6l2-1"}),laptop:h(H,{children:[h("rect",{x:"5",y:"5.5",width:"14",height:"10",rx:"1.5"}),h("path",{d:"M3 18.5h18"})]}),sofa:h("path",{d:"M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11M3.5 12a1.5 1.5 0 0 1 3 0v2h11v-2a1.5 1.5 0 0 1 3 0v5h-17zM6 17v2M18 17v2"}),cross:h("path",{d:"M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z"}),baby:h("path",{d:"M9 8h6v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM10 8V5.5h4V8M12 3v2.5M9 12h3M9 15h3"}),fuel:h("path",{d:"M5 20V5.5A1.5 1.5 0 0 1 6.5 4h6A1.5 1.5 0 0 1 14 5.5V20M3.5 20h12M6.5 9h6M14 10h2a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 0 3 0V9l-2.5-3"}),train:h("path",{d:"M7 4h10a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2zM5 10h14M9 13.5h.01M15 13.5h.01M8 17l-2 3M16 17l2 3"}),moto:h(H,{children:[h("circle",{cx:"5.5",cy:"16.5",r:"2.5"}),h("circle",{cx:"18.5",cy:"16.5",r:"2.5"}),h("path",{d:"M8 16.5h6l-2.5-6H8M11.5 10.5h3.5l3.5 6M15 10.5l1-3h2.5"})]}),parking:h(H,{children:[h("rect",{x:"4.5",y:"4",width:"15",height:"16",rx:"3"}),h("path",{d:"M10 16V8h3a2.5 2.5 0 0 1 0 5h-3"})]}),wrench:h("path",{d:"M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z"}),game:h("path",{d:"M7 9h10a4 4 0 0 1 4 4v1a3 3 0 0 1-5.4 1.8L14.5 14h-5l-1.1 1.8A3 3 0 0 1 3 14v-1a4 4 0 0 1 4-4zM8 11.5v3M6.5 13h3M15.5 12.5h.01M17.5 14h.01"}),dumbbell:h("path",{d:"M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10"}),ticket:h("path",{d:"M4 7.5h16v3a1.5 1.5 0 0 0 0 3v3H4v-3a1.5 1.5 0 0 0 0-3zM14 7.5v9"}),lotus:h("path",{d:"M12 19c-4 0-7-2.5-7.5-6 2.6 0 4.8 1 6 2.6M12 19c4 0 7-2.5 7.5-6-2.6 0-4.8 1-6 2.6M12 19c-1.8-2-2.5-4.3-2-7 .5-2.4 1.2-4 2-5.5.8 1.5 1.5 3.1 2 5.5.5 2.7-.2 5-2 7z"}),grad:h("path",{d:"M2.5 9.5 12 5l9.5 4.5L12 14zM6.5 11.5V16c1.5 1.5 3.5 2.2 5.5 2.2s4-.7 5.5-2.2v-4.5M21.5 9.5V14"}),calendar:h(H,{children:[h("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),h("path",{d:"M16 2v4M8 2v4M3 10h18"})]})};function Z({name:n,size:e,class:t=""}){return h("svg",{class:`ic ${t}`,viewBox:"0 0 24 24","aria-hidden":"true",style:e?{width:e,height:e}:void 0,children:nu[n]||nu.dots})}const Hm={...Object.fromEntries(ho.map(n=>[n.fa,n.icon])),"fa-basket-shopping":"bag","fa-shopping-basket":"bag","fa-shopping-bag":"bag","fa-scissors":"beauty","fa-bus":"train","fa-mobile-screen-button":"mobile","fa-tv":"film","fa-receipt":"bill","fa-arrow-down":"down","fa-credit-card":"card"},Gm=n=>Hm[n]||"bill";let hd={};try{hd=Object.assign({"./brand-icons/adidas.js":()=>N(()=>import("./adidas-BFStthNF.js"),[]),"./brand-icons/adobe.js":()=>N(()=>import("./adobe-DVsy-5v7.js"),[]),"./brand-icons/airasia.js":()=>N(()=>import("./airasia-CrX-Wo8m.js"),[]),"./brand-icons/airbnb.js":()=>N(()=>import("./airbnb-Cbhk9IRm.js"),[]),"./brand-icons/aliexpress.js":()=>N(()=>import("./aliexpress-C7Fut5Pv.js"),[]),"./brand-icons/amazon.js":()=>N(()=>import("./amazon-CE_vqqMO.js"),[]),"./brand-icons/americanexpress.js":()=>N(()=>import("./americanexpress-CR4kUFKX.js"),[]),"./brand-icons/anthropic.js":()=>N(()=>import("./anthropic-CtOESTBn.js"),[]),"./brand-icons/apple.js":()=>N(()=>import("./apple-DQyrqi12.js"),[]),"./brand-icons/applemusic.js":()=>N(()=>import("./applemusic-BrRrMIij.js"),[]),"./brand-icons/applepay.js":()=>N(()=>import("./applepay-9Xr-TPlj.js"),[]),"./brand-icons/bmw.js":()=>N(()=>import("./bmw-DUfdtu5i.js"),[]),"./brand-icons/boots.js":()=>N(()=>import("./boots-DHKV8zUU.js"),[]),"./brand-icons/burgerking.js":()=>N(()=>import("./burgerking-sO9DRM_Y.js"),[]),"./brand-icons/canva.js":()=>N(()=>import("./canva-2sjRryIN.js"),[]),"./brand-icons/claude.js":()=>N(()=>import("./claude-DIOmB7mL.js"),[]),"./brand-icons/coursera.js":()=>N(()=>import("./coursera-osog-YAy.js"),[]),"./brand-icons/discord.js":()=>N(()=>import("./discord-BCvBrKcf.js"),[]),"./brand-icons/dropbox.js":()=>N(()=>import("./dropbox-DDDezJAq.js"),[]),"./brand-icons/duolingo.js":()=>N(()=>import("./duolingo-C51AbWwW.js"),[]),"./brand-icons/epicgames.js":()=>N(()=>import("./epicgames-CLU38Wl3.js"),[]),"./brand-icons/expedia.js":()=>N(()=>import("./expedia-CnFVrTVT.js"),[]),"./brand-icons/expressvpn.js":()=>N(()=>import("./expressvpn-lg98L813.js"),[]),"./brand-icons/facebook.js":()=>N(()=>import("./facebook-DVxFB6lG.js"),[]),"./brand-icons/figma.js":()=>N(()=>import("./figma-BvSNmEK5.js"),[]),"./brand-icons/foodpanda.js":()=>N(()=>import("./foodpanda-mCNdPjBQ.js"),[]),"./brand-icons/github.js":()=>N(()=>import("./github-CugS4z52.js"),[]),"./brand-icons/google.js":()=>N(()=>import("./google-BOeWiJEc.js"),[]),"./brand-icons/googlecloud.js":()=>N(()=>import("./googlecloud-Cu0q9mrt.js"),[]),"./brand-icons/googledrive.js":()=>N(()=>import("./googledrive-DJRS2uJI.js"),[]),"./brand-icons/googlegemini.js":()=>N(()=>import("./googlegemini-Ban1TaY7.js"),[]),"./brand-icons/googlepay.js":()=>N(()=>import("./googlepay-d4D0YCZv.js"),[]),"./brand-icons/googleplay.js":()=>N(()=>import("./googleplay-DSYmKzy-.js"),[]),"./brand-icons/grab.js":()=>N(()=>import("./grab-C5n4U66f.js"),[]),"./brand-icons/handm.js":()=>N(()=>import("./handm-BrkydCya.js"),[]),"./brand-icons/hbo.js":()=>N(()=>import("./hbo-Xi3Ga0Ag.js"),[]),"./brand-icons/honda.js":()=>N(()=>import("./honda-B3MvvqC_.js"),[]),"./brand-icons/hotelsdotcom.js":()=>N(()=>import("./hotelsdotcom-gf0EbR2R.js"),[]),"./brand-icons/huawei.js":()=>N(()=>import("./huawei-Ce-BjWiW.js"),[]),"./brand-icons/icloud.js":()=>N(()=>import("./icloud-k5g80BhN.js"),[]),"./brand-icons/ikea.js":()=>N(()=>import("./ikea-DlA-oA_M.js"),[]),"./brand-icons/instagram.js":()=>N(()=>import("./instagram-CsdKzdLT.js"),[]),"./brand-icons/jcb.js":()=>N(()=>import("./jcb-CgtLIRZ7.js"),[]),"./brand-icons/kfc.js":()=>N(()=>import("./kfc-B288Vwqr.js"),[]),"./brand-icons/line.js":()=>N(()=>import("./line-BoNSQUC3.js"),[]),"./brand-icons/linkedin.js":()=>N(()=>import("./linkedin-BhyiVVvo.js"),[]),"./brand-icons/mastercard.js":()=>N(()=>import("./mastercard-CVUa-KQc.js"),[]),"./brand-icons/mazda.js":()=>N(()=>import("./mazda-DCLcb_dq.js"),[]),"./brand-icons/mcdonalds.js":()=>N(()=>import("./mcdonalds-BPA871I9.js"),[]),"./brand-icons/mercedes.js":()=>N(()=>import("./mercedes-AbDC0bVz.js"),[]),"./brand-icons/messenger.js":()=>N(()=>import("./messenger-CaDRAr-b.js"),[]),"./brand-icons/mitsubishi.js":()=>N(()=>import("./mitsubishi-DnsdlJzq.js"),[]),"./brand-icons/netflix.js":()=>N(()=>import("./netflix-BQQvNjqW.js"),[]),"./brand-icons/nike.js":()=>N(()=>import("./nike-CQqk4eLe.js"),[]),"./brand-icons/nintendoswitch.js":()=>N(()=>import("./nintendoswitch-DabqU0av.js"),[]),"./brand-icons/nissan.js":()=>N(()=>import("./nissan-ByAdzwv7.js"),[]),"./brand-icons/nordvpn.js":()=>N(()=>import("./nordvpn-8Y1Pe2Cy.js"),[]),"./brand-icons/notion.js":()=>N(()=>import("./notion-D0FaaC_S.js"),[]),"./brand-icons/openai.js":()=>N(()=>import("./openai-CvQEFKhM.js"),[]),"./brand-icons/oppo.js":()=>N(()=>import("./oppo-CtZkq0iL.js"),[]),"./brand-icons/patreon.js":()=>N(()=>import("./patreon-Cgi1AMep.js"),[]),"./brand-icons/paypal.js":()=>N(()=>import("./paypal-klZJXRR5.js"),[]),"./brand-icons/perplexity.js":()=>N(()=>import("./perplexity-ZTjoHRA0.js"),[]),"./brand-icons/pinterest.js":()=>N(()=>import("./pinterest-CKr7QArU.js"),[]),"./brand-icons/playstation.js":()=>N(()=>import("./playstation-CTfIUaqK.js"),[]),"./brand-icons/primevideo.js":()=>N(()=>import("./primevideo-Byl7UFA-.js"),[]),"./brand-icons/roblox.js":()=>N(()=>import("./roblox-_F2R7ZKS.js"),[]),"./brand-icons/samsung.js":()=>N(()=>import("./samsung-B_t_liHH.js"),[]),"./brand-icons/shell.js":()=>N(()=>import("./shell-BIpGpjau.js"),[]),"./brand-icons/shopee.js":()=>N(()=>import("./shopee-Bs2iWnxz.js"),[]),"./brand-icons/slack.js":()=>N(()=>import("./slack-75zySf2G.js"),[]),"./brand-icons/snapchat.js":()=>N(()=>import("./snapchat-CPiEDscF.js"),[]),"./brand-icons/soundcloud.js":()=>N(()=>import("./soundcloud-BBH8gZHV.js"),[]),"./brand-icons/spotify.js":()=>N(()=>import("./spotify-B_qVdDhj.js"),[]),"./brand-icons/starbucks.js":()=>N(()=>import("./starbucks-DF2cwUqt.js"),[]),"./brand-icons/steam.js":()=>N(()=>import("./steam-CS1KFeMC.js"),[]),"./brand-icons/suzuki.js":()=>N(()=>import("./suzuki-TLXQdY_a.js"),[]),"./brand-icons/telegram.js":()=>N(()=>import("./telegram-Bj1cRE8S.js"),[]),"./brand-icons/tesla.js":()=>N(()=>import("./tesla-Bch3k-t6.js"),[]),"./brand-icons/tidal.js":()=>N(()=>import("./tidal-UWumJdzo.js"),[]),"./brand-icons/tiktok.js":()=>N(()=>import("./tiktok-wkIpYuJU.js"),[]),"./brand-icons/toyota.js":()=>N(()=>import("./toyota-Dy60P9dg.js"),[]),"./brand-icons/tripadvisor.js":()=>N(()=>import("./tripadvisor-DD1XuwRQ.js"),[]),"./brand-icons/tripdotcom.js":()=>N(()=>import("./tripdotcom-C2ph0l9V.js"),[]),"./brand-icons/twitch.js":()=>N(()=>import("./twitch-BkTzJ-pQ.js"),[]),"./brand-icons/uber.js":()=>N(()=>import("./uber-C_GI5I78.js"),[]),"./brand-icons/ubereats.js":()=>N(()=>import("./ubereats-BOutM2TN.js"),[]),"./brand-icons/udemy.js":()=>N(()=>import("./udemy-CCkTko6L.js"),[]),"./brand-icons/uniqlo.js":()=>N(()=>import("./uniqlo-BRPwj_dP.js"),[]),"./brand-icons/visa.js":()=>N(()=>import("./visa-DU-4OIJV.js"),[]),"./brand-icons/whatsapp.js":()=>N(()=>import("./whatsapp-qy7qRrjE.js"),[]),"./brand-icons/wise.js":()=>N(()=>import("./wise-DdBiRZhN.js"),[]),"./brand-icons/x.js":()=>N(()=>import("./x-CG_DUqJq.js"),[]),"./brand-icons/xiaomi.js":()=>N(()=>import("./xiaomi-D5HYuHGY.js"),[]),"./brand-icons/youtube.js":()=>N(()=>import("./youtube-1Fc4bTfZ.js"),[]),"./brand-icons/youtubemusic.js":()=>N(()=>import("./youtubemusic-DYGvrmqP.js"),[]),"./brand-icons/zara.js":()=>N(()=>import("./zara-BVgS0uKm.js"),[]),"./brand-icons/zoom.js":()=>N(()=>import("./zoom-CNAWINv7.js"),[])})}catch{}const xi={},ru={},wa=new Set;function Km(n){if(xi[n]||ru[n])return;const e=hd[`./brand-icons/${n}.js`];e&&(ru[n]=e().then(t=>{xi[n]=t.default,wa.forEach(r=>r())}).catch(()=>{}))}function Qm(n){const[,e]=ee(0);return de(()=>{if(!n||xi[n])return;const t=()=>e(r=>r+1);return wa.add(t),Km(n),()=>wa.delete(t)},[n]),n?xi[n]:null}function Xm({b:n,size:e,name:t}){const r=Qm(n.si);if(n.text){const s=/[ก-๙]/.test(n.text)?Math.ceil(n.text.replace(/[ิีึืุูั่้๊๋็์]/g,"").length*.75):n.text.length,i=Math.round(e*(s>5?.21:s>3?.26:.32));return h("b",{class:"brand-wm",style:{fontSize:i},children:n.text})}if(r){const s=Math.round(e*.58);return h("svg",{viewBox:"0 0 24 24",width:s,height:s,"aria-hidden":"true",children:h("path",{d:r,fill:n.fg})})}return h(Z,{name:n.icon||t,size:Math.round(e*.5)})}function Ym({desc:n,name:e,size:t=40,iconSize:r}){const s=Bm(n);if(!s)return h("span",{class:"ico",style:t!==40?{width:t,height:t}:void 0,children:h(Z,{name:e,size:r})});const i={width:t,height:t,background:s.bg,color:s.fg,borderRadius:s.round?"50%":Math.round(t*.3)};return s.ring&&(i.boxShadow="inset 0 0 0 1.5px #e3e8f5"),h("span",{class:"ico brand",style:i,"aria-hidden":"true",children:h(Xm,{b:s,size:t,name:e})})}function su({size:n=24}){return h("svg",{viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",style:{flex:"none"},children:[h("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),h("path",{d:"M19 13h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),h("path",{d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"}),h("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"}),h("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"})]})}function rs({size:n=88,label:e=""}){return h("div",{class:"ld-wrap",role:"status","aria-live":"polite",children:[h("svg",{class:"ld",viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",children:[h("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),h("g",{class:"ld-l",children:[h("path",{d:"M19 13h13v35l-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),h("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),h("g",{class:"ld-r",children:[h("path",{d:"M32 13h13v38l-4.3-3-4.4 3-4.3-3z",fill:"#ffffff"}),h("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),h("path",{class:"ld-cut",d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"})]}),e?h("p",{class:"ld-t",children:e}):null]})}var iu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Jm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,b=d&63;l||(b=64,a||(_=64)),r.push(t[p],t[m],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new Zm;const _=i<<2|c>>4;if(r.push(_),d!==64){const b=c<<4&240|d>>2;if(r.push(b),m!==64){const k=d<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e_=function(n){const e=dd(n);return fd.encodeByteArray(e,!0)},Fi=function(n){return e_(n).replace(/\./g,"")},pd=function(n){try{return fd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function t_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const n_=()=>t_().__FIREBASE_DEFAULTS__,r_=()=>{if(typeof process>"u"||typeof iu>"u")return;const n=iu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},s_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pd(n[1]);return e&&JSON.parse(e)},fo=()=>{try{return n_()||r_()||s_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},md=n=>{var e,t;return(t=(e=fo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},i_=n=>{const e=md(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},_d=()=>{var n;return(n=fo())===null||n===void 0?void 0:n.config},gd=n=>{var e;return(e=fo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function a_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fi(JSON.stringify(t)),Fi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function l_(){var n;const e=(n=fo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function u_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function h_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function d_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f_(){const n=Xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function p_(){return!l_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m_(){try{return typeof indexedDB=="object"}catch{return!1}}function __(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="FirebaseError";class Yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=g_,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?y_(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Yt(s,c,r)}}function y_(n,e){return n.replace(v_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;function E_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ui(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ou(i)&&ou(a)){if(!Ui(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ou(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function b_(n,e){const t=new w_(n,e);return t.subscribe.bind(t)}class w_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");T_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=sa),s.error===void 0&&(s.error=sa),s.complete===void 0&&(s.complete=sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sa(){}/**
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
 */function Ve(n){return n&&n._delegate?n._delegate:n}class Hn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class I_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new o_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(S_(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:A_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A_(n){return n===Un?void 0:n}function S_(n){return n.instantiationMode==="EAGER"}/**
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
 */class R_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new I_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const k_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},P_=ie.INFO,C_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},D_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=C_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sc{constructor(e){this.name=e,this._logLevel=P_,this._logHandler=D_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?k_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const M_=(n,e)=>e.some(t=>n instanceof t);let au,cu;function V_(){return au||(au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N_(){return cu||(cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yd=new WeakMap,Ta=new WeakMap,vd=new WeakMap,ia=new WeakMap,ic=new WeakMap;function O_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(En(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&yd.set(t,n)}).catch(()=>{}),ic.set(e,n),e}function L_(n){if(Ta.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ta.set(n,e)}let Ia={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ta.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return En(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function x_(n){Ia=n(Ia)}function F_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(oa(this),e,...t);return vd.set(r,e.sort?e.sort():[e]),En(r)}:N_().includes(n)?function(...e){return n.apply(oa(this),e),En(yd.get(this))}:function(...e){return En(n.apply(oa(this),e))}}function U_(n){return typeof n=="function"?F_(n):(n instanceof IDBTransaction&&L_(n),M_(n,V_())?new Proxy(n,Ia):n)}function En(n){if(n instanceof IDBRequest)return O_(n);if(ia.has(n))return ia.get(n);const e=U_(n);return e!==n&&(ia.set(n,e),ic.set(e,n)),e}const oa=n=>ic.get(n);function j_(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=En(a);return r&&a.addEventListener("upgradeneeded",l=>{r(En(a.result),l.oldVersion,l.newVersion,En(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const B_=["get","getKey","getAll","getAllKeys","count"],$_=["put","add","delete","clear"],aa=new Map;function lu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=$_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||B_.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return aa.set(e,i),i}x_(n=>({...n,get:(e,t,r)=>lu(e,t)||n.get(e,t,r),has:(e,t)=>!!lu(e,t)||n.has(e,t)}));/**
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
 */class z_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(q_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function q_(n){const e=n.getComponent();return e?.type==="VERSION"}const Aa="@firebase/app",uu="0.10.13";/**
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
 */const qt=new sc("@firebase/app"),W_="@firebase/app-compat",H_="@firebase/analytics-compat",G_="@firebase/analytics",K_="@firebase/app-check-compat",Q_="@firebase/app-check",X_="@firebase/auth",Y_="@firebase/auth-compat",J_="@firebase/database",Z_="@firebase/data-connect",eg="@firebase/database-compat",tg="@firebase/functions",ng="@firebase/functions-compat",rg="@firebase/installations",sg="@firebase/installations-compat",ig="@firebase/messaging",og="@firebase/messaging-compat",ag="@firebase/performance",cg="@firebase/performance-compat",lg="@firebase/remote-config",ug="@firebase/remote-config-compat",hg="@firebase/storage",dg="@firebase/storage-compat",fg="@firebase/firestore",pg="@firebase/vertexai-preview",mg="@firebase/firestore-compat",_g="firebase",gg="10.14.1";/**
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
 */const Sa="[DEFAULT]",yg={[Aa]:"fire-core",[W_]:"fire-core-compat",[G_]:"fire-analytics",[H_]:"fire-analytics-compat",[Q_]:"fire-app-check",[K_]:"fire-app-check-compat",[X_]:"fire-auth",[Y_]:"fire-auth-compat",[J_]:"fire-rtdb",[Z_]:"fire-data-connect",[eg]:"fire-rtdb-compat",[tg]:"fire-fn",[ng]:"fire-fn-compat",[rg]:"fire-iid",[sg]:"fire-iid-compat",[ig]:"fire-fcm",[og]:"fire-fcm-compat",[ag]:"fire-perf",[cg]:"fire-perf-compat",[lg]:"fire-rc",[ug]:"fire-rc-compat",[hg]:"fire-gcs",[dg]:"fire-gcs-compat",[fg]:"fire-fst",[mg]:"fire-fst-compat",[pg]:"fire-vertex","fire-js":"fire-js",[_g]:"fire-js-all"};/**
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
 */const ji=new Map,vg=new Map,Ra=new Map;function hu(n,e){try{n.container.addComponent(e)}catch(t){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tr(n){const e=n.name;if(Ra.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Ra.set(e,n);for(const t of ji.values())hu(t,n);for(const t of vg.values())hu(t,n);return!0}function oc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ut(n){return n.settings!==void 0}/**
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
 */const Eg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Ps("app","Firebase",Eg);/**
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
 */class bg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=gg;function Ed(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(t||(t=_d()),!t)throw bn.create("no-options");const i=ji.get(s);if(i){if(Ui(t,i.options)&&Ui(r,i.config))return i;throw bn.create("duplicate-app",{appName:s})}const a=new R_(s);for(const l of Ra.values())a.addComponent(l);const c=new bg(t,r,a);return ji.set(s,c),c}function bd(n=Sa){const e=ji.get(n);if(!e&&n===Sa&&_d())return Ed();if(!e)throw bn.create("no-app",{appName:n});return e}function wn(n,e,t){var r;let s=(r=yg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}Tr(new Hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wg="firebase-heartbeat-database",Tg=1,vs="firebase-heartbeat-store";let ca=null;function wd(){return ca||(ca=j_(wg,Tg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vs)}catch(t){console.warn(t)}}}}).catch(n=>{throw bn.create("idb-open",{originalErrorMessage:n.message})})),ca}async function Ig(n){try{const t=(await wd()).transaction(vs),r=await t.objectStore(vs).get(Td(n));return await t.done,r}catch(e){if(e instanceof Yt)qt.warn(e.message);else{const t=bn.create("idb-get",{originalErrorMessage:e?.message});qt.warn(t.message)}}}async function du(n,e){try{const r=(await wd()).transaction(vs,"readwrite");await r.objectStore(vs).put(e,Td(n)),await r.done}catch(t){if(t instanceof Yt)qt.warn(t.message);else{const r=bn.create("idb-set",{originalErrorMessage:t?.message});qt.warn(r.message)}}}function Td(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ag=1024,Sg=30*24*60*60*1e3;class Rg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Sg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fu(),{heartbeatsToSend:r,unsentEntries:s}=kg(this._heartbeatsCache.heartbeats),i=Fi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return qt.warn(t),""}}}function fu(){return new Date().toISOString().substring(0,10)}function kg(n,e=Ag){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),pu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),pu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Pg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m_()?__().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ig(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return du(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return du(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pu(n){return Fi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Cg(n){Tr(new Hn("platform-logger",e=>new z_(e),"PRIVATE")),Tr(new Hn("heartbeat",e=>new Rg(e),"PRIVATE")),wn(Aa,uu,n),wn(Aa,uu,"esm2017"),wn("fire-js","")}Cg("");var Dg="firebase",Mg="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(Dg,Mg,"app");var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $n,Id;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function E(){}E.prototype=v.prototype,w.D=v.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(T,A,R){for(var g=Array(arguments.length-2),W=2;W<arguments.length;W++)g[W-2]=arguments[W];return v.prototype[A].apply(T,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,E){E||(E=0);var T=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)T[A]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(A=0;16>A;++A)T[A]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=w.g[0],E=w.g[1],A=w.g[2];var R=w.g[3],g=v+(R^E&(A^R))+T[0]+3614090360&4294967295;v=E+(g<<7&4294967295|g>>>25),g=R+(A^v&(E^A))+T[1]+3905402710&4294967295,R=v+(g<<12&4294967295|g>>>20),g=A+(E^R&(v^E))+T[2]+606105819&4294967295,A=R+(g<<17&4294967295|g>>>15),g=E+(v^A&(R^v))+T[3]+3250441966&4294967295,E=A+(g<<22&4294967295|g>>>10),g=v+(R^E&(A^R))+T[4]+4118548399&4294967295,v=E+(g<<7&4294967295|g>>>25),g=R+(A^v&(E^A))+T[5]+1200080426&4294967295,R=v+(g<<12&4294967295|g>>>20),g=A+(E^R&(v^E))+T[6]+2821735955&4294967295,A=R+(g<<17&4294967295|g>>>15),g=E+(v^A&(R^v))+T[7]+4249261313&4294967295,E=A+(g<<22&4294967295|g>>>10),g=v+(R^E&(A^R))+T[8]+1770035416&4294967295,v=E+(g<<7&4294967295|g>>>25),g=R+(A^v&(E^A))+T[9]+2336552879&4294967295,R=v+(g<<12&4294967295|g>>>20),g=A+(E^R&(v^E))+T[10]+4294925233&4294967295,A=R+(g<<17&4294967295|g>>>15),g=E+(v^A&(R^v))+T[11]+2304563134&4294967295,E=A+(g<<22&4294967295|g>>>10),g=v+(R^E&(A^R))+T[12]+1804603682&4294967295,v=E+(g<<7&4294967295|g>>>25),g=R+(A^v&(E^A))+T[13]+4254626195&4294967295,R=v+(g<<12&4294967295|g>>>20),g=A+(E^R&(v^E))+T[14]+2792965006&4294967295,A=R+(g<<17&4294967295|g>>>15),g=E+(v^A&(R^v))+T[15]+1236535329&4294967295,E=A+(g<<22&4294967295|g>>>10),g=v+(A^R&(E^A))+T[1]+4129170786&4294967295,v=E+(g<<5&4294967295|g>>>27),g=R+(E^A&(v^E))+T[6]+3225465664&4294967295,R=v+(g<<9&4294967295|g>>>23),g=A+(v^E&(R^v))+T[11]+643717713&4294967295,A=R+(g<<14&4294967295|g>>>18),g=E+(R^v&(A^R))+T[0]+3921069994&4294967295,E=A+(g<<20&4294967295|g>>>12),g=v+(A^R&(E^A))+T[5]+3593408605&4294967295,v=E+(g<<5&4294967295|g>>>27),g=R+(E^A&(v^E))+T[10]+38016083&4294967295,R=v+(g<<9&4294967295|g>>>23),g=A+(v^E&(R^v))+T[15]+3634488961&4294967295,A=R+(g<<14&4294967295|g>>>18),g=E+(R^v&(A^R))+T[4]+3889429448&4294967295,E=A+(g<<20&4294967295|g>>>12),g=v+(A^R&(E^A))+T[9]+568446438&4294967295,v=E+(g<<5&4294967295|g>>>27),g=R+(E^A&(v^E))+T[14]+3275163606&4294967295,R=v+(g<<9&4294967295|g>>>23),g=A+(v^E&(R^v))+T[3]+4107603335&4294967295,A=R+(g<<14&4294967295|g>>>18),g=E+(R^v&(A^R))+T[8]+1163531501&4294967295,E=A+(g<<20&4294967295|g>>>12),g=v+(A^R&(E^A))+T[13]+2850285829&4294967295,v=E+(g<<5&4294967295|g>>>27),g=R+(E^A&(v^E))+T[2]+4243563512&4294967295,R=v+(g<<9&4294967295|g>>>23),g=A+(v^E&(R^v))+T[7]+1735328473&4294967295,A=R+(g<<14&4294967295|g>>>18),g=E+(R^v&(A^R))+T[12]+2368359562&4294967295,E=A+(g<<20&4294967295|g>>>12),g=v+(E^A^R)+T[5]+4294588738&4294967295,v=E+(g<<4&4294967295|g>>>28),g=R+(v^E^A)+T[8]+2272392833&4294967295,R=v+(g<<11&4294967295|g>>>21),g=A+(R^v^E)+T[11]+1839030562&4294967295,A=R+(g<<16&4294967295|g>>>16),g=E+(A^R^v)+T[14]+4259657740&4294967295,E=A+(g<<23&4294967295|g>>>9),g=v+(E^A^R)+T[1]+2763975236&4294967295,v=E+(g<<4&4294967295|g>>>28),g=R+(v^E^A)+T[4]+1272893353&4294967295,R=v+(g<<11&4294967295|g>>>21),g=A+(R^v^E)+T[7]+4139469664&4294967295,A=R+(g<<16&4294967295|g>>>16),g=E+(A^R^v)+T[10]+3200236656&4294967295,E=A+(g<<23&4294967295|g>>>9),g=v+(E^A^R)+T[13]+681279174&4294967295,v=E+(g<<4&4294967295|g>>>28),g=R+(v^E^A)+T[0]+3936430074&4294967295,R=v+(g<<11&4294967295|g>>>21),g=A+(R^v^E)+T[3]+3572445317&4294967295,A=R+(g<<16&4294967295|g>>>16),g=E+(A^R^v)+T[6]+76029189&4294967295,E=A+(g<<23&4294967295|g>>>9),g=v+(E^A^R)+T[9]+3654602809&4294967295,v=E+(g<<4&4294967295|g>>>28),g=R+(v^E^A)+T[12]+3873151461&4294967295,R=v+(g<<11&4294967295|g>>>21),g=A+(R^v^E)+T[15]+530742520&4294967295,A=R+(g<<16&4294967295|g>>>16),g=E+(A^R^v)+T[2]+3299628645&4294967295,E=A+(g<<23&4294967295|g>>>9),g=v+(A^(E|~R))+T[0]+4096336452&4294967295,v=E+(g<<6&4294967295|g>>>26),g=R+(E^(v|~A))+T[7]+1126891415&4294967295,R=v+(g<<10&4294967295|g>>>22),g=A+(v^(R|~E))+T[14]+2878612391&4294967295,A=R+(g<<15&4294967295|g>>>17),g=E+(R^(A|~v))+T[5]+4237533241&4294967295,E=A+(g<<21&4294967295|g>>>11),g=v+(A^(E|~R))+T[12]+1700485571&4294967295,v=E+(g<<6&4294967295|g>>>26),g=R+(E^(v|~A))+T[3]+2399980690&4294967295,R=v+(g<<10&4294967295|g>>>22),g=A+(v^(R|~E))+T[10]+4293915773&4294967295,A=R+(g<<15&4294967295|g>>>17),g=E+(R^(A|~v))+T[1]+2240044497&4294967295,E=A+(g<<21&4294967295|g>>>11),g=v+(A^(E|~R))+T[8]+1873313359&4294967295,v=E+(g<<6&4294967295|g>>>26),g=R+(E^(v|~A))+T[15]+4264355552&4294967295,R=v+(g<<10&4294967295|g>>>22),g=A+(v^(R|~E))+T[6]+2734768916&4294967295,A=R+(g<<15&4294967295|g>>>17),g=E+(R^(A|~v))+T[13]+1309151649&4294967295,E=A+(g<<21&4294967295|g>>>11),g=v+(A^(E|~R))+T[4]+4149444226&4294967295,v=E+(g<<6&4294967295|g>>>26),g=R+(E^(v|~A))+T[11]+3174756917&4294967295,R=v+(g<<10&4294967295|g>>>22),g=A+(v^(R|~E))+T[2]+718787259&4294967295,A=R+(g<<15&4294967295|g>>>17),g=E+(R^(A|~v))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(A+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var E=v-this.blockSize,T=this.B,A=this.h,R=0;R<v;){if(A==0)for(;R<=E;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<v;)if(T[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,T),A=0;break}}else for(;R<v;)if(T[A++]=w[R++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var E=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=E&255,E/=256;for(this.u(w),w=Array(16),v=E=0;4>v;++v)for(var T=0;32>T;T+=8)w[E++]=this.g[v]>>>T&255;return w};function i(w,v){var E=c;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=v(w)}function a(w,v){this.h=v;for(var E=[],T=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;T&&R==v||(E[A]=R,T=!1)}this.g=E}var c={};function l(w){return-128<=w&&128>w?i(w,function(v){return new a([v|0],0>v?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return S(d(-w));for(var v=[],E=1,T=0;w>=E;T++)v[T]=w/E|0,E*=4294967296;return new a(v,0)}function p(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return S(p(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(v,8)),T=m,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),g=parseInt(w.substring(A,A+R),v);8>R?(R=d(Math.pow(v,R)),T=T.j(R).add(d(g))):(T=T.j(E),T=T.add(d(g)))}return T}var m=l(0),_=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-S(this).m();for(var w=0,v=1,E=0;E<this.g.length;E++){var T=this.i(E);w+=(0<=T?T:4294967296+T)*v,v*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(D(this))return"-"+S(this).toString(w);for(var v=d(Math.pow(w,6)),E=this,T="";;){var A=Q(E,v).g;E=V(E,A.j(v));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=A,k(E))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=V(this,w),D(w)?-1:k(w)?0:1};function S(w){for(var v=w.g.length,E=[],T=0;T<v;T++)E[T]=~w.g[T];return new a(E,~w.h).add(_)}n.abs=function(){return D(this)?S(this):this},n.add=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],T=0,A=0;A<=v;A++){var R=T+(this.i(A)&65535)+(w.i(A)&65535),g=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=g>>>16,R&=65535,g&=65535,E[A]=g<<16|R}return new a(E,E[E.length-1]&-2147483648?-1:0)};function V(w,v){return w.add(S(v))}n.j=function(w){if(k(this)||k(w))return m;if(D(this))return D(w)?S(this).j(S(w)):S(S(this).j(w));if(D(w))return S(this.j(S(w)));if(0>this.l(b)&&0>w.l(b))return d(this.m()*w.m());for(var v=this.g.length+w.g.length,E=[],T=0;T<2*v;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var R=this.i(T)>>>16,g=this.i(T)&65535,W=w.i(A)>>>16,ze=w.i(A)&65535;E[2*T+2*A]+=g*ze,F(E,2*T+2*A),E[2*T+2*A+1]+=R*ze,F(E,2*T+2*A+1),E[2*T+2*A+1]+=g*W,F(E,2*T+2*A+1),E[2*T+2*A+2]+=R*W,F(E,2*T+2*A+2)}for(T=0;T<v;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=v;T<2*v;T++)E[T]=0;return new a(E,0)};function F(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function B(w,v){this.g=w,this.h=v}function Q(w,v){if(k(v))throw Error("division by zero");if(k(w))return new B(m,m);if(D(w))return v=Q(S(w),v),new B(S(v.g),S(v.h));if(D(v))return v=Q(w,S(v)),new B(S(v.g),v.h);if(30<w.g.length){if(D(w)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var E=_,T=v;0>=T.l(w);)E=J(E),T=J(T);var A=te(E,1),R=te(T,1);for(T=te(T,2),E=te(E,2);!k(T);){var g=R.add(T);0>=g.l(w)&&(A=A.add(E),R=g),T=te(T,1),E=te(E,1)}return v=V(w,A.j(v)),new B(A,v)}for(A=m;0<=w.l(v);){for(E=Math.max(1,Math.floor(w.m()/v.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(E),g=R.j(v);D(g)||0<g.l(w);)E-=T,R=d(E),g=R.j(v);k(R)&&(R=_),A=A.add(R),w=V(w,g)}return new B(A,w)}n.A=function(w){return Q(this,w).h},n.and=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)&w.i(T);return new a(E,this.h&w.h)},n.or=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)|w.i(T);return new a(E,this.h|w.h)},n.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)^w.i(T);return new a(E,this.h^w.h)};function J(w){for(var v=w.g.length+1,E=[],T=0;T<v;T++)E[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(E,w.h)}function te(w,v){var E=v>>5;v%=32;for(var T=w.g.length-E,A=[],R=0;R<T;R++)A[R]=0<v?w.i(R+E)>>>v|w.i(R+E+1)<<32-v:w.i(R+E);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Id=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,$n=a}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});var ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ad,cs,Sd,wi,ka,Rd,kd,Pd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ui=="object"&&ui];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var y=0;y<o.length-1;y++){var P=o[y];if(!(P in f))break e;f=f[P]}o=o[o.length-1],y=f[o],u=u(y),u!=y&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,y=!1,P={next:function(){if(!y&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,f){return o.call.apply(o.bind,arguments)}function m(o,u,f){if(!o)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(y,P,C){for(var U=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)U[fe-2]=arguments[fe];return u.prototype[P].apply(y,U)}}function D(o){const u=o.length;if(0<u){const f=Array(u);for(let y=0;y<u;y++)f[y]=o[y];return f}return[]}function S(o,u){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(l(y)){const P=o.length||0,C=y.length||0;o.length=P+C;for(let U=0;U<C;U++)o[P+U]=y[U]}else o.push(y)}}class V{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var J=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function te(o,u,f){for(const y in o)u.call(f,o[y],y,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function v(o){const u={};for(const f in o)u[f]=o[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)o[f]=y[f];for(let C=0;C<E.length;C++)f=E[C],Object.prototype.hasOwnProperty.call(y,f)&&(o[f]=y[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function R(o){c.setTimeout(()=>{throw o},0)}function g(){var o=Jt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class W{constructor(){this.h=this.g=null}add(u,f){const y=ze.get();y.set(u,f),this.h?this.h.next=y:this.g=y,this.h=y}}var ze=new V(()=>new pt,o=>o.reset());class pt{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Nt,et=!1,Jt=new W,qs=()=>{const o=c.Promise.resolve(void 0);Nt=()=>{o.then(Br)}};var Br=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(f){R(f)}var u=ze;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}et=!1};function vt(){this.s=this.s,this.C=this.C}vt.prototype.s=!1,vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var $r=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o}();function mt(o,u){if(me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(J){e:{try{Q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$o[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&mt.aa.h.call(this)}}k(mt,me);var $o={2:"touch",3:"pen",4:"mouse"};mt.prototype.h=function(){mt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var rr="closure_listenable_"+(1e6*Math.random()|0),Ws=0;function qe(o,u,f,y,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!y,this.ha=P,this.key=++Ws,this.da=this.fa=!1}function Zt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Le(o){this.src=o,this.g={},this.h=0}Le.prototype.add=function(o,u,f,y,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var U=Dn(o,u,y,P);return-1<U?(u=o[U],f||(u.fa=!1)):(u=new qe(u,this.src,C,!!y,P),u.fa=f,o.push(u)),u};function ot(o,u){var f=u.type;if(f in o.g){var y=o.g[f],P=Array.prototype.indexOf.call(y,u,void 0),C;(C=0<=P)&&Array.prototype.splice.call(y,P,1),C&&(Zt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Dn(o,u,f,y){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==y)return P}return-1}var Mn="closure_lm_"+(1e6*Math.random()|0),sr={};function Hs(o,u,f,y,P){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Hs(o,u[C],f,y,P);return null}return f=qr(f),o&&o[rr]?o.K(u,f,d(y)?!!y.capture:!1,P):Rt(o,u,f,!1,y,P)}function Rt(o,u,f,y,P,C){if(!u)throw Error("Invalid event type");var U=d(P)?!!P.capture:!!P,fe=we(o);if(fe||(o[Mn]=fe=new Le(o)),f=fe.add(u,f,y,U,C),f.proxy)return f;if(y=en(),f.proxy=y,y.src=o,y.listener=f,o.addEventListener)$r||(P=U),P===void 0&&(P=!1),o.addEventListener(u.toString(),y,P);else if(o.attachEvent)o.attachEvent(ir(u.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function en(){function o(f){return u.call(o.src,o.listener,f)}const u=zr;return o}function _t(o,u,f,y,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)_t(o,u[C],f,y,P);else y=d(y)?!!y.capture:!!y,f=qr(f),o&&o[rr]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=Dn(C,f,y,P),-1<f&&(Zt(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=we(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Dn(u,f,y,P)),(f=-1<o?u[o]:null)&&gt(f))}function gt(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[rr])ot(u.i,o);else{var f=o.type,y=o.proxy;u.removeEventListener?u.removeEventListener(f,y,o.capture):u.detachEvent?u.detachEvent(ir(f),y):u.addListener&&u.removeListener&&u.removeListener(y),(f=we(u))?(ot(f,o),f.h==0&&(f.src=null,u[Mn]=null)):Zt(o)}}}function ir(o){return o in sr?sr[o]:sr[o]="on"+o}function zr(o,u){if(o.da)o=!0;else{u=new mt(u,this);var f=o.listener,y=o.ha||o.src;o.fa&&gt(o),o=f.call(y,u)}return o}function we(o){return o=o[Mn],o instanceof Le?o:null}var tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function qr(o){return typeof o=="function"?o:(o[tn]||(o[tn]=function(u){return o.handleEvent(u)}),o[tn])}function De(){vt.call(this),this.i=new Le(this),this.M=this,this.F=null}k(De,vt),De.prototype[rr]=!0,De.prototype.removeEventListener=function(o,u,f,y){_t(this,o,u,f,y)};function Ne(o,u){var f,y=o.F;if(y)for(f=[];y;y=y.F)f.push(y);if(o=o.M,y=u.type||u,typeof u=="string")u=new me(u,o);else if(u instanceof me)u.target=u.target||o;else{var P=u;u=new me(y,o),T(u,P)}if(P=!0,f)for(var C=f.length-1;0<=C;C--){var U=u.g=f[C];P=Et(U,y,!0,u)&&P}if(U=u.g=o,P=Et(U,y,!0,u)&&P,P=Et(U,y,!1,u)&&P,f)for(C=0;C<f.length;C++)U=u.g=f[C],P=Et(U,y,!1,u)&&P}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],y=0;y<f.length;y++)Zt(f[y]);delete o.g[u],o.h--}}this.F=null},De.prototype.K=function(o,u,f,y){return this.i.add(String(o),u,!1,f,y)},De.prototype.L=function(o,u,f,y){return this.i.add(String(o),u,!0,f,y)};function Et(o,u,f,y){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,C=0;C<u.length;++C){var U=u[C];if(U&&!U.da&&U.capture==f){var fe=U.listener,xe=U.ha||U.src;U.fa&&ot(o.i,U),P=fe.call(xe,y)!==!1&&P}}return P&&!y.defaultPrevented}function tt(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function nn(o){o.g=tt(()=>{o.g=null,o.i&&(o.i=!1,nn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class or extends vt{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:nn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(o){vt.call(this),this.h=o,this.g={}}k(Ot,vt);var ar=[];function rn(o){te(o.g,function(u,f){this.g.hasOwnProperty(f)&&gt(u)},o),o.g={}}Ot.prototype.N=function(){Ot.aa.N.call(this),rn(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cr=c.JSON.stringify,ne=c.JSON.parse,Gs=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function bt(){}bt.prototype.h=null;function Ks(o){return o.h||(o.h=o.i())}function Wr(){}var wt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vn(){me.call(this,"d")}k(Vn,me);function Hr(){me.call(this,"c")}k(Hr,me);var Tt={},Qs=null;function sn(){return Qs=Qs||new De}Tt.La="serverreachability";function lr(o){me.call(this,Tt.La,o)}k(lr,me);function kt(o){const u=sn();Ne(u,new lr(u))}Tt.STAT_EVENT="statevent";function Gr(o,u){me.call(this,Tt.STAT_EVENT,o),this.stat=u}k(Gr,me);function Te(o){const u=sn();Ne(u,new Gr(u,o))}Tt.Ma="timingevent";function ur(o,u){me.call(this,Tt.Ma,o),this.size=u}k(ur,me);function on(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Nn(){this.g=!0}Nn.prototype.xa=function(){this.g=!1};function zo(o,u,f,y,P,C){o.info(function(){if(o.g)if(C)for(var U="",fe=C.split("&"),xe=0;xe<fe.length;xe++){var ce=fe[xe].split("=");if(1<ce.length){var We=ce[0];ce=ce[1];var He=We.split("_");U=2<=He.length&&He[1]=="type"?U+(We+"="+ce+"&"):U+(We+"=redacted&")}}else U=null;else U=C;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+u+`
`+f+`
`+U})}function qo(o,u,f,y,P,C,U){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+u+`
`+f+`
`+C+" "+U})}function at(o,u,f,y){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+an(o,f)+(y?" "+y:"")})}function Xs(o,u){o.info(function(){return"TIMEOUT: "+u})}Nn.prototype.info=function(){};function an(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var y=f[o];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return cr(f)}catch{return u}}var I={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},x={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},z;function cn(){}k(cn,bt),cn.prototype.g=function(){return new XMLHttpRequest},cn.prototype.i=function(){return{}},z=new cn;function ln(o,u,f,y){this.j=o,this.i=u,this.l=f,this.R=y||1,this.U=new Ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}var ol={},Wo={};function Ho(o,u,f){o.L=1,o.v=ei(Lt(u)),o.m=f,o.P=!0,al(o,null)}function al(o,u){o.F=Date.now(),Ys(o),o.A=Lt(o.v);var f=o.A,y=o.R;Array.isArray(y)||(y=[String(y)]),bl(f.i,"t",y),o.C=0,f=o.j.J,o.h=new il,o.g=Ul(o.j,f?u:null,!o.m),0<o.O&&(o.M=new or(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,y=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(ar[0]=P.toString()),P=ar);for(var C=0;C<P.length;C++){var U=Hs(f,P[C],y||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),kt(),zo(o.i,o.u,o.A,o.l,o.R,o.m)}ln.prototype.ca=function(o){o=o.target;const u=this.M;u&&xt(o)==3?u.j():this.Y(o)},ln.prototype.Y=function(o){try{if(o==this.g)e:{const He=xt(this.g);var u=this.g.Ba();const fr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||He!=4||u==7||(u==8||0>=fr?kt(3):kt(2)),Go(this);var f=this.g.Z();this.X=f;t:if(cl(this)){var y=kl(this.g);o="";var P=y.length,C=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),Kr(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(y[u],{stream:!(C&&u==P-1)});y.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,qo(this.i,this.u,this.A,this.l,this.R,He,f),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,xe=this.g;if((fe=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(fe)){var ce=fe;break t}}ce=null}if(f=ce)at(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ko(this,f);else{this.o=!1,this.s=3,Te(12),On(this),Kr(this);break e}}if(this.P){f=!0;let It;for(;!this.J&&this.C<U.length;)if(It=om(this,U),It==Wo){He==4&&(this.s=4,Te(14),f=!1),at(this.i,this.l,null,"[Incomplete Response]");break}else if(It==ol){this.s=4,Te(15),at(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else at(this.i,this.l,It,null),Ko(this,It);if(cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||U.length!=0||this.h.h||(this.s=1,Te(16),f=!1),this.o=this.o&&f,!f)at(this.i,this.l,U,"[Invalid Chunked Response]"),On(this),Kr(this);else if(0<U.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ea(We),We.M=!0,Te(11))}}else at(this.i,this.l,U,null),Ko(this,U);He==4&&On(this),this.o&&!this.J&&(He==4?Ol(this.j,this):(this.o=!1,Ys(this)))}else Tm(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),On(this),Kr(this)}}}catch{}finally{}};function cl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function om(o,u){var f=o.C,y=u.indexOf(`
`,f);return y==-1?Wo:(f=Number(u.substring(f,y)),isNaN(f)?ol:(y+=1,y+f>u.length?Wo:(u=u.slice(y,y+f),o.C=y+f,u)))}ln.prototype.cancel=function(){this.J=!0,On(this)};function Ys(o){o.S=Date.now()+o.I,ll(o,o.I)}function ll(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=on(_(o.ba,o),u)}function Go(o){o.B&&(c.clearTimeout(o.B),o.B=null)}ln.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Xs(this.i,this.A),this.L!=2&&(kt(),Te(17)),On(this),this.s=2,Kr(this)):ll(this,this.S-o)};function Kr(o){o.j.G==0||o.J||Ol(o.j,o)}function On(o){Go(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,rn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ko(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Qo(f.h,o))){if(!o.K&&Qo(f.h,o)&&f.G==3){try{var y=f.Da.g.parse(u)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)oi(f),si(f);else break e;Zo(f),Te(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=on(_(f.Za,f),6e3));if(1>=dl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else xn(f,11)}else if((o.K||f.g==o)&&oi(f),!F(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let ce=P[u];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const We=ce[3];We!=null&&(f.la=We,f.j.info("VER="+f.la));const He=ce[4];He!=null&&(f.Aa=He,f.j.info("SVER="+f.Aa));const fr=ce[5];fr!=null&&typeof fr=="number"&&0<fr&&(y=1.5*fr,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const It=o.g;if(It){const ci=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ci){var C=y.h;C.g||ci.indexOf("spdy")==-1&&ci.indexOf("quic")==-1&&ci.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Xo(C,C.h),C.h=null))}if(y.D){const ta=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;ta&&(y.ya=ta,_e(y.I,y.D,ta))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var U=o;if(y.qa=Fl(y,y.J?y.ia:null,y.W),U.K){fl(y.h,U);var fe=U,xe=y.L;xe&&(fe.I=xe),fe.B&&(Go(fe),Ys(fe)),y.g=U}else Vl(y);0<f.i.length&&ii(f)}else ce[0]!="stop"&&ce[0]!="close"||xn(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?xn(f,7):Jo(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}kt(4)}catch{}}var am=class{constructor(o,u){this.g=o,this.map=u}};function ul(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function dl(o){return o.h?1:o.g?o.g.size:0}function Qo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Xo(o,u){o.g?o.g.add(u):o.h=u}function fl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ul.prototype.cancel=function(){if(this.i=pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return D(o.i)}function cm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,y=0;y<f;y++)u.push(o[y]);return u}u=[],f=0;for(y in o)u[f++]=o[y];return u}function lm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const y in o)u[f++]=y;return u}}}function ml(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=lm(o),y=cm(o),P=y.length,C=0;C<P;C++)u.call(void 0,y[C],f&&f[C],o)}var _l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function um(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var y=o[f].indexOf("="),P=null;if(0<=y){var C=o[f].substring(0,y);P=o[f].substring(y+1)}else C=o[f];u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ln(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ln){this.h=o.h,Js(this,o.j),this.o=o.o,this.g=o.g,Zs(this,o.s),this.l=o.l;var u=o.i,f=new Yr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),gl(this,f),this.m=o.m}else o&&(u=String(o).match(_l))?(this.h=!1,Js(this,u[1]||"",!0),this.o=Qr(u[2]||""),this.g=Qr(u[3]||"",!0),Zs(this,u[4]),this.l=Qr(u[5]||"",!0),gl(this,u[6]||"",!0),this.m=Qr(u[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Ln.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Xr(u,yl,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Xr(u,yl,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Xr(f,f.charAt(0)=="/"?fm:dm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Xr(f,mm)),o.join("")};function Lt(o){return new Ln(o)}function Js(o,u,f){o.j=f?Qr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Zs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function gl(o,u,f){u instanceof Yr?(o.i=u,_m(o.i,o.h)):(f||(u=Xr(u,pm)),o.i=new Yr(u,o.h))}function _e(o,u,f){o.i.set(u,f)}function ei(o){return _e(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Qr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,hm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function hm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var yl=/[#\/\?@]/g,dm=/[#\?:]/g,fm=/[#\?]/g,pm=/[#\?@]/g,mm=/#/g;function Yr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function un(o){o.g||(o.g=new Map,o.h=0,o.i&&um(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Yr.prototype,n.add=function(o,u){un(this),this.i=null,o=hr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function vl(o,u){un(o),u=hr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function El(o,u){return un(o),u=hr(o,u),o.g.has(u)}n.forEach=function(o,u){un(this),this.g.forEach(function(f,y){f.forEach(function(P){o.call(u,P,y,this)},this)},this)},n.na=function(){un(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let y=0;y<u.length;y++){const P=o[y];for(let C=0;C<P.length;C++)f.push(u[y])}return f},n.V=function(o){un(this);let u=[];if(typeof o=="string")El(this,o)&&(u=u.concat(this.g.get(hr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return un(this),this.i=null,o=hr(this,o),El(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function bl(o,u,f){vl(o,u),0<f.length&&(o.i=null,o.g.set(hr(o,u),D(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var y=u[f];const C=encodeURIComponent(String(y)),U=this.V(y);for(y=0;y<U.length;y++){var P=C;U[y]!==""&&(P+="="+encodeURIComponent(String(U[y]))),o.push(P)}}return this.i=o.join("&")};function hr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function _m(o,u){u&&!o.j&&(un(o),o.i=null,o.g.forEach(function(f,y){var P=y.toLowerCase();y!=P&&(vl(this,y),bl(this,P,f))},o)),o.j=u}function gm(o,u){const f=new Nn;if(c.Image){const y=new Image;y.onload=b(hn,f,"TestLoadImage: loaded",!0,u,y),y.onerror=b(hn,f,"TestLoadImage: error",!1,u,y),y.onabort=b(hn,f,"TestLoadImage: abort",!1,u,y),y.ontimeout=b(hn,f,"TestLoadImage: timeout",!1,u,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else u(!1)}function ym(o,u){const f=new Nn,y=new AbortController,P=setTimeout(()=>{y.abort(),hn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:y.signal}).then(C=>{clearTimeout(P),C.ok?hn(f,"TestPingServer: ok",!0,u):hn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),hn(f,"TestPingServer: error",!1,u)})}function hn(o,u,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function vm(){this.g=new Gs}function Em(o,u,f){const y=f||"";try{ml(o,function(P,C){let U=P;d(P)&&(U=cr(P)),u.push(y+C+"="+encodeURIComponent(U))})}catch(P){throw u.push(y+"type="+encodeURIComponent("_badmap")),P}}function ti(o){this.l=o.Ub||null,this.j=o.eb||!1}k(ti,bt),ti.prototype.g=function(){return new ni(this.l,this.j)},ti.prototype.i=function(o){return function(){return o}}({});function ni(o,u){De.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ni,De),n=ni.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Zr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Jr(this):Zr(this),this.readyState==3&&wl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Jr(this))},n.Qa=function(o){this.g&&(this.response=o,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Zr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tl(o){let u="";return te(o,function(f,y){u+=y,u+=":",u+=f,u+=`\r
`}),u}function Yo(o,u,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Tl(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):_e(o,u,f))}function Ie(o){De.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ie,De);var bm=/^https?$/i,wm=["POST","PUT"];n=Ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():z.g(),this.v=this.o?Ks(this.o):Ks(z),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Il(this,C);return}if(o=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const C of y.keys())f.set(C,y.get(C));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(wm,u,void 0))||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,U]of f)this.g.setRequestHeader(C,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Il(this,C)}};function Il(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Al(o),ri(o)}function Al(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),Ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sl(this):this.bb())},n.bb=function(){Sl(this)};function Sl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||xt(o)!=4||o.Z()!=2)){if(o.u&&xt(o)==4)tt(o.Ea,0,o);else if(Ne(o,"readystatechange"),xt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var y;if(y=U===0){var P=String(o.D).match(_l)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),y=!bm.test(P?P.toLowerCase():"")}f=y}if(f)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var C=2<xt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Al(o)}}finally{ri(o)}}}}function ri(o,u){if(o.g){Rl(o);const f=o.g,y=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ne(o,"ready");try{f.onreadystatechange=y}catch{}}}function Rl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function xt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ne(u)}};function kl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Tm(o){const u={};o=(o.g&&2<=xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(F(o[y]))continue;var f=A(o[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[P]||[];u[P]=C,C.push(f)}w(u,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Pl(o){this.Aa=0,this.i=[],this.j=new Nn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,o),this.cb=es("retryDelaySeedMs",1e4,o),this.Wa=es("forwardChannelMaxRetries",2,o),this.wa=es("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ul(o&&o.concurrentRequestLimit),this.Da=new vm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pl.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,y){Te(0),this.W=o,this.H=u||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Fl(this,null,this.W),ii(this)};function Jo(o){if(Cl(o),o.G==3){var u=o.U++,f=Lt(o.I);if(_e(f,"SID",o.K),_e(f,"RID",u),_e(f,"TYPE","terminate"),ts(o,f),u=new ln(o,o.j,u),u.L=2,u.v=ei(Lt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Ul(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ys(u)}xl(o)}function si(o){o.g&&(ea(o),o.g.cancel(),o.g=null)}function Cl(o){si(o),o.u&&(c.clearTimeout(o.u),o.u=null),oi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ii(o){if(!hl(o.h)&&!o.s){o.s=!0;var u=o.Ga;Nt||qs(),et||(Nt(),et=!0),Jt.add(u,o),o.B=0}}function Im(o,u){return dl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=on(_(o.Ga,o,u),Ll(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new ln(this,this.j,o);let C=this.o;if(this.S&&(C?(C=v(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(u+=y,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ml(this,P,u),f=Lt(this.I),_e(f,"RID",o),_e(f,"CVER",22),this.D&&_e(f,"X-HTTP-Session-Id",this.D),ts(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Tl(C)))+"&"+u:this.m&&Yo(f,this.m,C)),Xo(this.h,P),this.Ua&&_e(f,"TYPE","init"),this.P?(_e(f,"$req",u),_e(f,"SID","null"),P.T=!0,Ho(P,f,null)):Ho(P,f,u),this.G=2}}else this.G==3&&(o?Dl(this,o):this.i.length==0||hl(this.h)||Dl(this))};function Dl(o,u){var f;u?f=u.l:f=o.U++;const y=Lt(o.I);_e(y,"SID",o.K),_e(y,"RID",f),_e(y,"AID",o.T),ts(o,y),o.m&&o.o&&Yo(y,o.m,o.o),f=new ln(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Ml(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Xo(o.h,f),Ho(f,y,u)}function ts(o,u){o.H&&te(o.H,function(f,y){_e(u,y,f)}),o.l&&ml({},function(f,y){_e(u,y,f)})}function Ml(o,u,f){f=Math.min(o.i.length,f);var y=o.l?_(o.l.Na,o.l,o):null;e:{var P=o.i;let C=-1;for(;;){const U=["count="+f];C==-1?0<f?(C=P[0].g,U.push("ofs="+C)):C=0:U.push("ofs="+C);let fe=!0;for(let xe=0;xe<f;xe++){let ce=P[xe].g;const We=P[xe].map;if(ce-=C,0>ce)C=Math.max(0,P[xe].g-100),fe=!1;else try{Em(We,U,"req"+ce+"_")}catch{y&&y(We)}}if(fe){y=U.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,y}function Vl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Nt||qs(),et||(Nt(),et=!0),Jt.add(u,o),o.v=0}}function Zo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=on(_(o.Fa,o),Ll(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=on(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),si(this),Nl(this))};function ea(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Nl(o){o.g=new ln(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Lt(o.qa);_e(u,"RID","rpc"),_e(u,"SID",o.K),_e(u,"AID",o.T),_e(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&_e(u,"TO",o.ja),_e(u,"TYPE","xmlhttp"),ts(o,u),o.m&&o.o&&Yo(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ei(Lt(u)),f.m=null,f.P=!0,al(f,o)}n.Za=function(){this.C!=null&&(this.C=null,si(this),Zo(this),Te(19))};function oi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ol(o,u){var f=null;if(o.g==u){oi(o),ea(o),o.g=null;var y=2}else if(Qo(o.h,u))f=u.D,fl(o.h,u),y=1;else return;if(o.G!=0){if(u.o)if(y==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;y=sn(),Ne(y,new ur(y,f)),ii(o)}else Vl(o);else if(P=u.s,P==3||P==0&&0<u.X||!(y==1&&Im(o,u)||y==2&&Zo(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),P){case 1:xn(o,5);break;case 4:xn(o,10);break;case 3:xn(o,6);break;default:xn(o,2)}}}function Ll(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function xn(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),y=o.Xa;const P=!y;y=new Ln(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Js(y,"https"),ei(y),P?gm(y.toString(),f):ym(y.toString(),f)}else Te(2);o.G=0,o.l&&o.l.sa(u),xl(o),Cl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function xl(o){if(o.G=0,o.ka=[],o.l){const u=pl(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ka,u),S(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Fl(o,u,f){var y=f instanceof Ln?Lt(f):new Ln(f);if(y.g!="")u&&(y.g=u+"."+y.g),Zs(y,y.s);else{var P=c.location;y=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var C=new Ln(null);y&&Js(C,y),u&&(C.g=u),P&&Zs(C,P),f&&(C.l=f),y=C}return f=o.D,u=o.ya,f&&u&&_e(y,f,u),_e(y,"VER",o.la),ts(o,y),y}function Ul(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ie(new ti({eb:f})):new Ie(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jl(){}n=jl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ai(){}ai.prototype.g=function(o,u){return new ct(o,u)};function ct(o,u){De.call(this),this.g=new Pl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new dr(this)}k(ct,De),ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){Jo(this.g)},ct.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=cr(o),o=f);u.i.push(new am(u.Ya++,o)),u.G==3&&ii(u)},ct.prototype.N=function(){this.g.l=null,delete this.j,Jo(this.g),delete this.g,ct.aa.N.call(this)};function Bl(o){Vn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Bl,Vn);function $l(){Hr.call(this),this.status=1}k($l,Hr);function dr(o){this.g=o}k(dr,jl),dr.prototype.ua=function(){Ne(this.g,"a")},dr.prototype.ta=function(o){Ne(this.g,new Bl(o))},dr.prototype.sa=function(o){Ne(this.g,new $l)},dr.prototype.ra=function(){Ne(this.g,"b")},ai.prototype.createWebChannel=ai.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,Pd=function(){return new ai},kd=function(){return sn()},Rd=Tt,ka={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},I.NO_ERROR=0,I.TIMEOUT=8,I.HTTP_ERROR=6,wi=I,x.COMPLETE="complete",Sd=x,Wr.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",De.prototype.listen=De.prototype.K,cs=Wr,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,Ad=Ie}).apply(typeof ui<"u"?ui:typeof self<"u"?self:typeof window<"u"?window:{});const _u="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new sc("@firebase/firestore");function ss(){return Gn.logLevel}function $(n,...e){if(Gn.logLevel<=ie.DEBUG){const t=e.map(ac);Gn.debug(`Firestore (${Nr}): ${n}`,...t)}}function Wt(n,...e){if(Gn.logLevel<=ie.ERROR){const t=e.map(ac);Gn.error(`Firestore (${Nr}): ${n}`,...t)}}function Ir(n,...e){if(Gn.logLevel<=ie.WARN){const t=e.map(ac);Gn.warn(`Firestore (${Nr}): ${n}`,...t)}}function ac(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(n="Unexpected state"){const e=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+n;throw Wt(e),new Error(e)}function he(n,e){n||K()}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ke.UNAUTHENTICATED))}shutdown(){}}class Ng{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Og{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new Cd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new Ke(e)}}class Lg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Lg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ug{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){he(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(he(typeof t.token=="string"),this.R=t.token,new Fg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=jg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function Ar(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Me(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Me(0,0))}static max(){return new X(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Es.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Es?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ge extends Es{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const Bg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Es{construct(e,t,r){return new je(e,t,r)}static isValidIdentifier(e){return Bg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new j(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(t)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ge.fromString(e))}static fromName(e){return new q(ge.fromString(e).popFirst(5))}static empty(){return new q(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ge(e.slice()))}}function $g(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new Me(t+1,0):new Me(t,r));return new Sn(s,q.empty(),e)}function zg(n){return new Sn(n.readTime,n.key,-1)}class Sn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Sn(X.min(),q.empty(),-1)}static max(){return new Sn(X.max(),q.empty(),-1)}}function qg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Wg)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Gg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ms(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cc.oe=-1;function po(n){return n==null}function Bi(n){return n===0&&1/n==-1/0}function Kg(n){return typeof n=="number"&&Number.isInteger(n)&&!Bi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Md(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){this.comparator=e,this.root=t||Ue.EMPTY}insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hi(this.root,e,this.comparator,!0)}}class hi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ue.RED,this.left=s??Ue.EMPTY,this.right=i??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ue(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yu(this.data.getIterator())}getIteratorFrom(e){return new yu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class yu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new ut([])}unionWith(e){let t=new Be(je.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Vd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vd("Invalid base64 string: "+i):i}}(e);return new $e(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new $e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const Qg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(n){if(he(!!n),typeof n=="string"){let e=0;const t=Qg.exec(n);if(he(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(n.seconds),nanos:Ae(n.nanos)}}function Ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kn(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function uc(n){const e=n.mapValue.fields.__previous_value__;return lc(e)?uc(e):e}function bs(n){const e=Rn(n.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t,r,s,i,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class ws{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ws&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={mapValue:{}};function Qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lc(n)?4:Jg(n)?9007199254740991:Yg(n)?10:11:K()}function Vt(n,e){if(n===e)return!0;const t=Qn(n);if(t!==Qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bs(n).isEqual(bs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Rn(s.timestampValue),c=Rn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Kn(s.bytesValue).isEqual(Kn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ae(s.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ae(s.integerValue)===Ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ae(s.doubleValue),c=Ae(i.doubleValue);return a===c?Bi(a)===Bi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Ar(n.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(gu(a)!==gu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Vt(a[l],c[l])))return!1;return!0}(n,e);default:return K()}}function Ts(n,e){return(n.values||[]).find(t=>Vt(t,e))!==void 0}function Sr(n,e){if(n===e)return 0;const t=Qn(n),r=Qn(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ae(i.integerValue||i.doubleValue),l=Ae(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return vu(n.timestampValue,e.timestampValue);case 4:return vu(bs(n),bs(e));case 5:return le(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Kn(i),l=Kn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=le(c[d],l[d]);if(p!==0)return p}return le(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=le(Ae(i.latitude),Ae(a.latitude));return c!==0?c:le(Ae(i.longitude),Ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Eu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,d,p;const m=i.fields||{},_=a.fields||{},b=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=(l=_.value)===null||l===void 0?void 0:l.arrayValue,D=le(((d=b?.values)===null||d===void 0?void 0:d.length)||0,((p=k?.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:Eu(b,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===di.mapValue&&a===di.mapValue)return 0;if(i===di.mapValue)return 1;if(a===di.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const _=le(l[m],p[m]);if(_!==0)return _;const b=Sr(c[l[m]],d[p[m]]);if(b!==0)return b}return le(l.length,p.length)}(n.mapValue,e.mapValue);default:throw K()}}function vu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=Rn(n),r=Rn(e),s=le(t.seconds,r.seconds);return s!==0?s:le(t.nanos,r.nanos)}function Eu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Sr(t[s],r[s]);if(i)return i}return le(t.length,r.length)}function Rr(n){return Pa(n)}function Pa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Kn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Pa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Pa(t.fields[a])}`;return s+"}"}(n.mapValue):K()}function bu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ca(n){return!!n&&"integerValue"in n}function hc(n){return!!n&&"arrayValue"in n}function wu(n){return!!n&&"nullValue"in n}function Tu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ti(n){return!!n&&"mapValue"in n}function Yg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function fs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=fs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ti(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fs(t)}setAll(e){let t=je.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=fs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ti(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ti(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Zn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new nt(fs(this.value))}}function Nd(n){const e=[];return Zn(n.fields,(t,r)=>{const s=new je([t]);if(Ti(r)){const i=Nd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Qe(e,0,X.min(),X.min(),X.min(),nt.empty(),0)}static newFoundDocument(e,t,r,s){return new Qe(e,1,t,X.min(),r,s,0)}static newNoDocument(e,t){return new Qe(e,2,t,X.min(),X.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new Qe(e,3,t,X.min(),X.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $i{constructor(e,t){this.position=e,this.inclusive=t}}function Iu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=Sr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Au(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class zi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Od{}class Ce extends Od{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ty(e,t,r):t==="array-contains"?new sy(e,r):t==="in"?new iy(e,r):t==="not-in"?new oy(e,r):t==="array-contains-any"?new ay(e,r):new Ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ny(e,r):new ry(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Sr(t,this.value)):t!==null&&Qn(this.value)===Qn(t)&&this.matchesComparison(Sr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Od{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new St(e,t)}matches(e){return Ld(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ld(n){return n.op==="and"}function xd(n){return ey(n)&&Ld(n)}function ey(n){for(const e of n.filters)if(e instanceof St)return!1;return!0}function Da(n){if(n instanceof Ce)return n.field.canonicalString()+n.op.toString()+Rr(n.value);if(xd(n))return n.filters.map(e=>Da(e)).join(",");{const e=n.filters.map(t=>Da(t)).join(",");return`${n.op}(${e})`}}function Fd(n,e){return n instanceof Ce?function(r,s){return s instanceof Ce&&r.op===s.op&&r.field.isEqual(s.field)&&Vt(r.value,s.value)}(n,e):n instanceof St?function(r,s){return s instanceof St&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Fd(a,s.filters[c]),!0):!1}(n,e):void K()}function Ud(n){return n instanceof Ce?function(t){return`${t.field.canonicalString()} ${t.op} ${Rr(t.value)}`}(n):n instanceof St?function(t){return t.op.toString()+" {"+t.getFilters().map(Ud).join(" ,")+"}"}(n):"Filter"}class ty extends Ce{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class ny extends Ce{constructor(e,t){super(e,"in",t),this.keys=jd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ry extends Ce{constructor(e,t){super(e,"not-in",t),this.keys=jd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class sy extends Ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hc(t)&&Ts(t.arrayValue,this.value)}}class iy extends Ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ts(this.value.arrayValue,t)}}class oy extends Ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ts(this.value.arrayValue,t)}}class ay extends Ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ts(this.value.arrayValue,r))}}/**
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
 */class cy{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Su(n,e=null,t=[],r=[],s=null,i=null,a=null){return new cy(n,e,t,r,s,i,a)}function dc(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Da(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),po(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Rr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Rr(r)).join(",")),e.ue=t}return e.ue}function fc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Zg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Fd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Au(n.startAt,e.startAt)&&Au(n.endAt,e.endAt)}function Ma(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ly(n,e,t,r,s,i,a,c){return new Vs(n,e,t,r,s,i,a,c)}function mo(n){return new Vs(n)}function Ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bd(n){return n.collectionGroup!==null}function ps(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Be(je.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new zi(i,r))}),t.has(je.keyField().canonicalString())||e.ce.push(new zi(je.keyField(),r))}return e.ce}function Pt(n){const e=Y(n);return e.le||(e.le=uy(e,ps(n))),e.le}function uy(n,e){if(n.limitType==="F")return Su(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zi(s.field,i)});const t=n.endAt?new $i(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $i(n.startAt.position,n.startAt.inclusive):null;return Su(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Va(n,e){const t=n.filters.concat([e]);return new Vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qi(n,e,t){return new Vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _o(n,e){return fc(Pt(n),Pt(e))&&n.limitType===e.limitType}function $d(n){return`${dc(Pt(n))}|lt:${n.limitType}`}function mr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ud(s)).join(", ")}]`),po(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Rr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Rr(s)).join(",")),`Target(${r})`}(Pt(n))}; limitType=${n.limitType})`}function go(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=Iu(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,ps(r),s)||r.endAt&&!function(a,c,l){const d=Iu(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,ps(r),s))}(n,e)}function hy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zd(n){return(e,t)=>{let r=!1;for(const s of ps(n)){const i=dy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dy(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Sr(l,d):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Md(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new be(q.comparator);function Ht(){return fy}const qd=new be(q.comparator);function ls(...n){let e=qd;for(const t of n)e=e.insert(t.key,t);return e}function Wd(n){let e=qd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function jn(){return ms()}function Hd(){return ms()}function ms(){return new Or(n=>n.toString(),(n,e)=>n.isEqual(e))}const py=new be(q.comparator),my=new Be(q.comparator);function se(...n){let e=my;for(const t of n)e=e.add(t);return e}const _y=new Be(le);function gy(){return _y}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function Gd(n){return{integerValue:""+n}}function yy(n,e){return Kg(e)?Gd(e):pc(n,e)}/**
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
 */class yo{constructor(){this._=void 0}}function vy(n,e,t){return n instanceof Wi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lc(i)&&(i=uc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Is?Qd(n,e):n instanceof As?Xd(n,e):function(s,i){const a=Kd(s,i),c=ku(a)+ku(s.Pe);return Ca(a)&&Ca(s.Pe)?Gd(c):pc(s.serializer,c)}(n,e)}function Ey(n,e,t){return n instanceof Is?Qd(n,e):n instanceof As?Xd(n,e):t}function Kd(n,e){return n instanceof Hi?function(r){return Ca(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wi extends yo{}class Is extends yo{constructor(e){super(),this.elements=e}}function Qd(n,e){const t=Yd(e);for(const r of n.elements)t.some(s=>Vt(s,r))||t.push(r);return{arrayValue:{values:t}}}class As extends yo{constructor(e){super(),this.elements=e}}function Xd(n,e){let t=Yd(e);for(const r of n.elements)t=t.filter(s=>!Vt(s,r));return{arrayValue:{values:t}}}class Hi extends yo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ku(n){return Ae(n.integerValue||n.doubleValue)}function Yd(n){return hc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function by(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Is&&s instanceof Is||r instanceof As&&s instanceof As?Ar(r.elements,s.elements,Vt):r instanceof Hi&&s instanceof Hi?Vt(r.Pe,s.Pe):r instanceof Wi&&s instanceof Wi}(n.transform,e.transform)}class wy{constructor(e,t){this.version=e,this.transformResults=t}}class rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ii(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vo{}function Jd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Eo(n.key,rt.none()):new Ns(n.key,n.data,rt.none());{const t=n.data,r=nt.empty();let s=new Be(je.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Pn(n.key,r,new ut(s.toArray()),rt.none())}}function Ty(n,e,t){n instanceof Ns?function(s,i,a){const c=s.value.clone(),l=Cu(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Pn?function(s,i,a){if(!Ii(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Cu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Zd(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function _s(n,e,t,r){return n instanceof Ns?function(i,a,c,l){if(!Ii(i.precondition,a))return c;const d=i.value.clone(),p=Du(i.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Pn?function(i,a,c,l){if(!Ii(i.precondition,a))return c;const d=Du(i.fieldTransforms,l,a),p=a.data;return p.setAll(Zd(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Ii(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Iy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Kd(r.transform,s||null);i!=null&&(t===null&&(t=nt.empty()),t.set(r.field,i))}return t||null}function Pu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ar(r,s,(i,a)=>by(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ns extends vo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pn extends vo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Cu(n,e,t){const r=new Map;he(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Ey(a,c,t[s]))}return r}function Du(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,vy(i,a,e))}return r}class Eo extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ay extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ty(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Hd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Jd(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(t,r)=>Pu(t,r))&&Ar(this.baseMutations,e.baseMutations,(t,r)=>Pu(t,r))}}class mc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){he(e.mutations.length===r.length);let s=function(){return py}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new mc(e,t,r,s)}}/**
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
 */class Ry{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ky{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,oe;function Py(n){switch(n){default:return K();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function ef(n){if(n===void 0)return Wt("GRPC error has no .code"),M.UNKNOWN;switch(n){case ke.OK:return M.OK;case ke.CANCELLED:return M.CANCELLED;case ke.UNKNOWN:return M.UNKNOWN;case ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ke.INTERNAL:return M.INTERNAL;case ke.UNAVAILABLE:return M.UNAVAILABLE;case ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ke.NOT_FOUND:return M.NOT_FOUND;case ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ke.ABORTED:return M.ABORTED;case ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ke.DATA_LOSS:return M.DATA_LOSS;default:return K()}}(oe=ke||(ke={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Cy(){return new TextEncoder}/**
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
 */const Dy=new $n([4294967295,4294967295],0);function Mu(n){const e=Cy().encode(n),t=new Id;return t.update(e),new Uint8Array(t.digest())}function Vu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $n([t,r],0),new $n([s,i],0)]}class _c{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new us(`Invalid padding: ${t}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new us(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=$n.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply($n.fromNumber(r)));return s.compare(Dy)===1&&(s=new $n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Mu(e),[r,s]=Vu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new _c(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Mu(e),[r,s]=Vu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new bo(X.min(),s,new be(le),Ht(),se())}}class Os{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Os(r,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class tf{constructor(e,t){this.targetId=e,this.me=t}}class nf{constructor(e,t,r=$e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nu{constructor(){this.fe=0,this.ge=Lu(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),t=se(),r=se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:K()}}),new Os(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Lu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class My{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ht(),this.qe=Ou(),this.Qe=new be(le)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ma(i))if(r===0){const a=new q(i.path);this.Ue(t,a,Qe.newNoDocument(a,X.min()))}else he(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Kn(r).toUint8Array()}catch(l){if(l instanceof Vd)return Ir("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _c(a,s,i)}catch(l){return Ir(l instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Ma(c.target)){const l=new q(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Qe.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=se();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new bo(e,t,this.Qe,this.ke,r);return this.ke=Ht(),this.qe=Ou(),this.Qe=new be(le),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Nu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Be(le),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ou(){return new be(q.comparator)}function Lu(){return new be(q.comparator)}const Vy={asc:"ASCENDING",desc:"DESCENDING"},Ny={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Oy={and:"AND",or:"OR"};class Ly{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Na(n,e){return n.useProto3Json||po(e)?e:{value:e}}function Gi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xy(n,e){return Gi(n,e.toTimestamp())}function Ct(n){return he(!!n),X.fromTimestamp(function(t){const r=Rn(t);return new Me(r.seconds,r.nanos)}(n))}function gc(n,e){return Oa(n,e).canonicalString()}function Oa(n,e){const t=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function sf(n){const e=ge.fromString(n);return he(uf(e)),e}function La(n,e){return gc(n.databaseId,e.path)}function la(n,e){const t=sf(e);if(t.get(1)!==n.databaseId.projectId)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(af(t))}function of(n,e){return gc(n.databaseId,e)}function Fy(n){const e=sf(n);return e.length===4?ge.emptyPath():af(e)}function xa(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function af(n){return he(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xu(n,e,t){return{name:La(n,e),fields:t.value.mapValue.fields}}function Uy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(he(p===void 0||typeof p=="string"),$e.fromBase64String(p||"")):(he(p===void 0||p instanceof Buffer||p instanceof Uint8Array),$e.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?M.UNKNOWN:ef(d.code);return new j(p,d.message||"")}(a);t=new nf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=la(n,r.document.name),i=Ct(r.document.updateTime),a=r.document.createTime?Ct(r.document.createTime):X.min(),c=new nt({mapValue:{fields:r.document.fields}}),l=Qe.newFoundDocument(s,i,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Ai(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=la(n,r.document),i=r.readTime?Ct(r.readTime):X.min(),a=Qe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ai([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=la(n,r.document),i=r.removedTargetIds||[];t=new Ai([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ky(s,i),c=r.targetId;t=new tf(c,a)}}return t}function jy(n,e){let t;if(e instanceof Ns)t={update:xu(n,e.key,e.value)};else if(e instanceof Eo)t={delete:La(n,e.key)};else if(e instanceof Pn)t={update:xu(n,e.key,e.data),updateMask:Qy(e.fieldMask)};else{if(!(e instanceof Ay))return K();t={verify:La(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Wi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Is)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof As)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Hi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(n,e.precondition)),t}function By(n,e){return n&&n.length>0?(he(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Ct(s.updateTime):Ct(i);return a.isEqual(X.min())&&(a=Ct(i)),new wy(a,s.transformResults||[])}(t,e))):[]}function $y(n,e){return{documents:[of(n,e.path)]}}function zy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=of(n,s);const i=function(d){if(d.length!==0)return lf(St.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(_){return{field:_r(_.field),direction:Hy(_.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Na(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function qy(n){let e=Fy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){he(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(m){const _=cf(m);return _ instanceof St&&xd(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(_=>function(k){return new zi(gr(k.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,po(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,b=m.values||[];return new $i(b,_)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const _=!m.before,b=m.values||[];return new $i(b,_)}(t.endAt)),ly(e,s,a,i,c,"F",l,d)}function Wy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=gr(t.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gr(t.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gr(t.unaryFilter.field);return Ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=gr(t.unaryFilter.field);return Ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return Ce.create(gr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return St.create(t.compositeFilter.filters.map(r=>cf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function Hy(n){return Vy[n]}function Gy(n){return Ny[n]}function Ky(n){return Oy[n]}function _r(n){return{fieldPath:n.canonicalString()}}function gr(n){return je.fromServerFormat(n.fieldPath)}function lf(n){return n instanceof Ce?function(t){if(t.op==="=="){if(Tu(t.value))return{unaryFilter:{field:_r(t.field),op:"IS_NAN"}};if(wu(t.value))return{unaryFilter:{field:_r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tu(t.value))return{unaryFilter:{field:_r(t.field),op:"IS_NOT_NAN"}};if(wu(t.value))return{unaryFilter:{field:_r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(t.field),op:Gy(t.op),value:t.value}}}(n):n instanceof St?function(t){const r=t.getFilters().map(s=>lf(s));return r.length===1?r[0]:{compositeFilter:{op:Ky(t.op),filters:r}}}(n):K()}function Qy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function uf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,r,s,i=X.min(),a=X.min(),c=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.ct=e}}function Yy(n){const e=qy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qi(e,e.limit,"L"):e}/**
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
 */class Jy{constructor(){this.un=new Zy}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Sn.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class Zy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(ge.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new kr(0)}static kn(){return new kr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.changes=new Or(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&_s(r.mutation,s,ut.empty(),Me.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const s=jn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ls();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=jn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Ht();const a=ms(),c=function(){return ms()}();return t.forEach((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Pn)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),_s(p.mutation,d,p.mutation.getFieldMask(),Me.now())):a.set(d.key,ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var m;return c.set(d,new tv(p,(m=a.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ms();let s=new be((a,c)=>a-c),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||ut.empty();p=c.applyToLocalView(d,p),r.set(l,p);const m=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,m=Hd();p.forEach(_=>{if(!i.has(_)){const b=Jd(t.get(_),r.get(_));b!==null&&m.set(_,b),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(jn());let c=-1,l=i;return a.next(d=>O.forEach(d,(p,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(p)?O.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{l=l.insert(p,_)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,se())).next(p=>({batchId:c,changes:Wd(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ls();return this.indexManager.getCollectionParents(e,i).next(c=>O.forEach(c,l=>{const d=function(m,_){return new Vs(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Qe.newInvalidDocument(p)))});let c=ls();return a.forEach((l,d)=>{const p=i.get(l);p!==void 0&&_s(p.mutation,d,ut.empty(),Me.now()),go(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ct(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Yy(s.bundledQuery),readTime:Ct(s.readTime)}}(t)),O.resolve()}}/**
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
 */class sv{constructor(){this.overlays=new be(q.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jn();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=jn(),i=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new be((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=jn(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=jn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return O.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ry(t,r));let i=this.Ir.get(t);i===void 0&&(i=se(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class iv{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.Tr=new Be(Oe.Er),this.dr=new Be(Oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Oe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Oe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new q(new ge([])),r=new Oe(t,e),s=new Oe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new ge([])),r=new Oe(t,e),s=new Oe(t,e+1);let i=se();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Oe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||le(e.wr,t.wr)}static Ar(e,t){return le(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Be(Oe.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Sy(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new Oe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Oe(t,0),s=new Oe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(le);return t.forEach(s=>{const i=new Oe(s,0),a=new Oe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new Oe(new q(i),0);let c=new Be(le);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.wr)),!0)},a),O.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){he(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,s=>{const i=new Oe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Oe(t,0),s=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.Mr=e,this.docs=function(){return new be(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(t))}getEntries(e,t){let r=Ht();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qe.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ht();const a=t.path,c=new q(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||qg(zg(p),r)<=0||(s.has(p.key)||go(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){K()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new cv(this)}getSize(e){return O.resolve(this.size)}}class cv extends ev{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.persistence=e,this.Nr=new Or(t=>dc(t),fc),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yc,this.targetCount=0,this.kr=kr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new kr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new cc(0),this.Kr=!1,this.Kr=!0,this.$r=new iv,this.referenceDelegate=e(this),this.Ur=new lv(this),this.indexManager=new Jy,this.remoteDocumentCache=function(s){return new av(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Xy(t),this.Gr=new rv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new ov(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new hv(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class hv extends Hg{constructor(e){super(),this.currentSequenceNumber=e}}class vc{constructor(e){this.persistence=e,this.Jr=new yc,this.Yr=null}static Zr(e){return new vc(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const s=q.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,X.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ec(e,t.fromCache,r,s)}}/**
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
 */class dv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return p_()?8:Gg(Xe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new dv;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ss()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",mr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(ss()<=ie.DEBUG&&$("QueryEngine","Query:",mr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ss()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",mr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pt(t))):O.resolve())}Yi(e,t){if(Ru(t))return O.resolve(null);let r=Pt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=qi(t,null,"F"),r=Pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=se(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,c);return this.ns(t,d,a,l.readTime)?this.Yi(e,qi(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,s){return Ru(t)||s.isEqual(X.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?O.resolve(null):(ss()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mr(t)),this.rs(e,a,t,$g(s,-1)).next(c=>c))})}ts(e,t){let r=new Be(zd(e));return t.forEach((s,i)=>{go(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ss()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",mr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Sn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new be(le),this._s=new Or(i=>dc(i),fc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function mv(n,e,t,r){return new pv(n,e,t,r)}async function hf(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=se();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function _v(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const m=d.batch,_=m.keys();let b=O.resolve();return _.forEach(k=>{b=b.next(()=>p.getEntry(l,k)).next(D=>{const S=d.docVersions.get(k);he(S!==null),D.version.compareTo(S)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=se();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function df(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function gv(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,m)=>{const _=s.get(m);if(!_)return;c.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,m)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken($e.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),s=s.insert(m,b),function(D,S,V){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(_,b,p)&&c.push(t.Ur.updateTargetData(i,b))});let l=Ht(),d=se();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(yv(i,a,e.documentUpdates).next(p=>{l=p.Ps,d=p.Is})),!r.isEqual(X.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return O.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.os=s,i))}function yv(n,e,t){let r=se(),s=se();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Ht();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):$("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function vv(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ev(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new vn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Fa(n,e,t){const r=Y(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ms(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Fu(n,e,t){const r=Y(n);let s=X.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const m=Y(l),_=m._s.get(p);return _!==void 0?O.resolve(m.os.get(_)):m.Ur.getTargetData(d,p)}(r,a,Pt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:X.min(),t?i:se())).next(c=>(bv(r,hy(e),c),{documents:c,Ts:i})))}function bv(n,e,t){let r=n.us.get(e)||X.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Uu{constructor(){this.activeTargetIds=gy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wv{constructor(){this.so=new Uu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Uu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Tv{_o(e){}shutdown(){}}/**
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
 */class ju{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fi=null;function ua(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class Sv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=ua(),l=this.xo(t,r.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,l,d,s).then(p=>($("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw Ir("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",s),p})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=Iv[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ua();return new Promise((a,c)=>{const l=new Ad;l.setWithCredentials(!0),l.listenOnce(Sd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wi.NO_ERROR:const p=l.getResponseJson();$(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case wi.TIMEOUT:$(Ge,`RPC '${e}' ${i} timed out`),c(new j(M.DEADLINE_EXCEEDED,"Request time out"));break;case wi.HTTP_ERROR:const m=l.getStatus();if($(Ge,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_?.error;if(b&&b.status&&b.message){const k=function(S){const V=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(V)>=0?V:M.UNKNOWN}(b.status);c(new j(k,b.message))}else c(new j(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(M.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$(Ge,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);$(Ge,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=ua(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pd(),c=kd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=i.join("");$(Ge,`Creating RPC '${e}' stream ${s}: ${p}`,l);const m=a.createWebChannel(p,l);let _=!1,b=!1;const k=new Av({Io:S=>{b?$(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(_||($(Ge,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),$(Ge,`RPC '${e}' stream ${s} sending:`,S),m.send(S))},To:()=>m.close()}),D=(S,V,F)=>{S.listen(V,B=>{try{F(B)}catch(Q){setTimeout(()=>{throw Q},0)}})};return D(m,cs.EventType.OPEN,()=>{b||($(Ge,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),D(m,cs.EventType.CLOSE,()=>{b||(b=!0,$(Ge,`RPC '${e}' stream ${s} transport closed`),k.So())}),D(m,cs.EventType.ERROR,S=>{b||(b=!0,Ir(Ge,`RPC '${e}' stream ${s} transport errored:`,S),k.So(new j(M.UNAVAILABLE,"The operation could not be completed")))}),D(m,cs.EventType.MESSAGE,S=>{var V;if(!b){const F=S.data[0];he(!!F);const B=F,Q=B.error||((V=B[0])===null||V===void 0?void 0:V.error);if(Q){$(Ge,`RPC '${e}' stream ${s} received error:`,Q);const J=Q.status;let te=function(E){const T=ke[E];if(T!==void 0)return ef(T)}(J),w=Q.message;te===void 0&&(te=M.INTERNAL,w="Unknown error status: "+J+" with message "+Q.message),b=!0,k.So(new j(te,w)),m.close()}else $(Ge,`RPC '${e}' stream ${s} received:`,F),k.bo(F)}}),D(c,Rd.STAT_EVENT,S=>{S.stat===ka.PROXY?$(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===ka.NOPROXY&&$(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function ha(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n){return new Ly(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ff(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(Wt(t.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new j(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rv extends pf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Uy(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?Ct(a.readTime):X.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=xa(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Ma(l)?{documents:$y(i,l)}:{query:zy(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=rf(i,a.resumeToken);const d=Na(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(X.min())>0){c.readTime=Gi(i,a.snapshotVersion.toTimestamp());const d=Na(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Wy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=xa(this.serializer),t.removeTarget=e,this.a_(t)}}class kv extends pf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=By(e.writeResults,e.commitTime),r=Ct(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=xa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>jy(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Oa(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(M.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Oa(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Cv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wt(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{er(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=Y(l);d.L_.add(4),await Ls(d),d.q_.set("Unknown"),d.L_.delete(4),await To(d)}(this))})}),this.q_=new Cv(r,s)}}async function To(n){if(er(n))for(const e of n.B_)await e(!0)}async function Ls(n){for(const e of n.B_)await e(!1)}function mf(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ic(t)?Tc(t):Lr(t).r_()&&wc(t,e))}function bc(n,e){const t=Y(n),r=Lr(t);t.N_.delete(e),r.r_()&&_f(t,e),t.N_.size===0&&(r.r_()?r.o_():er(t)&&t.q_.set("Unknown"))}function wc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lr(n).A_(e)}function _f(n,e){n.Q_.xe(e),Lr(n).R_(e)}function Tc(n){n.Q_=new My({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Lr(n).start(),n.q_.v_()}function Ic(n){return er(n)&&!Lr(n).n_()&&n.N_.size>0}function er(n){return Y(n).L_.size===0}function gf(n){n.Q_=void 0}async function Mv(n){n.q_.set("Online")}async function Vv(n){n.N_.forEach((e,t)=>{wc(n,e)})}async function Nv(n,e){gf(n),Ic(n)?(n.q_.M_(e),Tc(n)):n.q_.set("Unknown")}async function Ov(n,e,t){if(n.q_.set("Online"),e instanceof nf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ki(n,r)}else if(e instanceof Ai?n.Q_.Ke(e):e instanceof tf?n.Q_.He(e):n.Q_.We(e),!t.isEqual(X.min()))try{const r=await df(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const p=i.N_.get(l);if(!p)return;i.N_.set(l,p.withResumeToken($e.EMPTY_BYTE_STRING,p.snapshotVersion)),_f(i,l);const m=new vn(p.target,l,d,p.sequenceNumber);wc(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Ki(n,r)}}async function Ki(n,e,t){if(!Ms(e))throw e;n.L_.add(1),await Ls(n),n.q_.set("Offline"),t||(t=()=>df(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await To(n)})}function yf(n,e){return e().catch(t=>Ki(n,t,e))}async function Io(n){const e=Y(n),t=kn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Lv(e);)try{const s=await vv(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,xv(e,s)}catch(s){await Ki(e,s)}vf(e)&&Ef(e)}function Lv(n){return er(n)&&n.O_.length<10}function xv(n,e){n.O_.push(e);const t=kn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function vf(n){return er(n)&&!kn(n).n_()&&n.O_.length>0}function Ef(n){kn(n).start()}async function Fv(n){kn(n).p_()}async function Uv(n){const e=kn(n);for(const t of n.O_)e.m_(t.mutations)}async function jv(n,e,t){const r=n.O_.shift(),s=mc.from(r,e,t);await yf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Io(n)}async function Bv(n,e){e&&kn(n).V_&&await async function(r,s){if(function(a){return Py(a)&&a!==M.ABORTED}(s.code)){const i=r.O_.shift();kn(r).s_(),await yf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Io(r)}}(n,e),vf(n)&&Ef(n)}async function Bu(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=er(t);t.L_.add(3),await Ls(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await To(t)}async function $v(n,e){const t=Y(n);e?(t.L_.delete(2),await To(t)):e||(t.L_.add(2),await Ls(t),t.q_.set("Unknown"))}function Lr(n){return n.K_||(n.K_=function(t,r,s){const i=Y(t);return i.w_(),new Rv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Mv.bind(null,n),Ro:Vv.bind(null,n),mo:Nv.bind(null,n),d_:Ov.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Ic(n)?Tc(n):n.q_.set("Unknown")):(await n.K_.stop(),gf(n))})),n.K_}function kn(n){return n.U_||(n.U_=function(t,r,s){const i=Y(t);return i.w_(),new kv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Fv.bind(null,n),mo:Bv.bind(null,n),f_:Uv.bind(null,n),g_:jv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Io(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ac(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sc(n,e){if(Wt("AsyncQueue",`${e}: ${n}`),Ms(n))return new j(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=ls(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new vr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new vr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.W_=new be(q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pr{constructor(e,t,r,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Pr(e,t,vr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class qv{constructor(){this.queries=zu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=zu(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new j(M.ABORTED,"Firestore shutting down"))}}function zu(){return new Or(n=>$d(n),_o)}async function Rc(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new zv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Sc(a,`Initialization of query '${mr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Pc(t)}async function kc(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Wv(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Pc(t)}function Hv(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Pc(n){n.Y_.forEach(e=>{e.next()})}var Ua,qu;(qu=Ua||(Ua={})).ea="default",qu.Cache="cache";class Cc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ua.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.key=e}}class wf{constructor(e){this.key=e}}class Gv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=zd(e),this.Ra=new vr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new $u,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const _=s.get(p),b=go(this.query,m)?m:null,k=!!_&&this.mutatedKeys.has(_.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let S=!1;_&&b?_.data.isEqual(b.data)?k!==D&&(r.track({type:3,doc:b}),S=!0):this.ga(_,b)||(r.track({type:2,doc:b}),S=!0,(l&&this.Aa(b,l)>0||d&&this.Aa(b,d)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),S=!0):_&&!b&&(r.track({type:1,doc:_}),S=!0,(l||d)&&(c=!0)),S&&(b?(a=a.add(b),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,m)=>function(b,k){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return D(b)-D(k)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new Pr(this.query,e.Ra,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $u,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new wf(r))}),this.da.forEach(r=>{e.has(r)||t.push(new bf(r))}),t}ba(e){this.Ta=e.Ts,this.da=se();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Pr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Kv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Qv{constructor(e){this.key=e,this.va=!1}}class Xv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Or(c=>$d(c),_o),this.Ma=new Map,this.xa=new Set,this.Oa=new be(q.comparator),this.Na=new Map,this.La=new yc,this.Ba={},this.ka=new Map,this.qa=kr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Yv(n,e,t=!0){const r=kf(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Tf(r,e,t,!0),s}async function Jv(n,e){const t=kf(n);await Tf(t,e,!0,!1)}async function Tf(n,e,t,r){const s=await Ev(n.localStore,Pt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Zv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&mf(n.remoteStore,s),c}async function Zv(n,e,t,r,s){n.Ka=(m,_,b)=>async function(D,S,V,F){let B=S.view.ma(V);B.ns&&(B=await Fu(D.localStore,S.query,!1).then(({documents:w})=>S.view.ma(w,B)));const Q=F&&F.targetChanges.get(S.targetId),J=F&&F.targetMismatches.get(S.targetId)!=null,te=S.view.applyChanges(B,D.isPrimaryClient,Q,J);return Hu(D,S.targetId,te.wa),te.snapshot}(n,m,_,b);const i=await Fu(n.localStore,e,!0),a=new Gv(e,i.Ts),c=a.ma(i.documents),l=Os.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);Hu(n,t,d.wa);const p=new Kv(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function e0(n,e,t){const r=Y(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!_o(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&bc(r.remoteStore,s.targetId),ja(r,s.targetId)}).catch(Ds)):(ja(r,s.targetId),await Fa(r.localStore,s.targetId,!0))}async function t0(n,e){const t=Y(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bc(t.remoteStore,r.targetId))}async function n0(n,e,t){const r=l0(n);try{const s=await function(a,c){const l=Y(a),d=Me.now(),p=c.reduce((b,k)=>b.add(k.key),se());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=Ht(),D=se();return l.cs.getEntries(b,p).next(S=>{k=S,k.forEach((V,F)=>{F.isValidDocument()||(D=D.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,k)).next(S=>{m=S;const V=[];for(const F of c){const B=Iy(F,m.get(F.key).overlayedDocument);B!=null&&V.push(new Pn(F.key,B,Nd(B.value.mapValue),rt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,d,V,c)}).next(S=>{_=S;const V=S.applyToLocalDocumentSet(m,D);return l.documentOverlayCache.saveOverlays(b,S.batchId,V)})}).then(()=>({batchId:_.batchId,changes:Wd(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new be(le)),d=d.insert(c,l),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await xs(r,s.changes),await Io(r.remoteStore)}catch(s){const i=Sc(s,"Failed to persist write");t.reject(i)}}async function If(n,e){const t=Y(n);try{const r=await gv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?he(a.va):s.removedDocuments.size>0&&(he(a.va),a.va=!1))}),await xs(t,r,e)}catch(r){await Ds(r)}}function Wu(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=Y(a);l.onlineState=c;let d=!1;l.queries.forEach((p,m)=>{for(const _ of m.j_)_.Z_(c)&&(d=!0)}),d&&Pc(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function r0(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new be(q.comparator);a=a.insert(i,Qe.newNoDocument(i,X.min()));const c=se().add(i),l=new bo(X.min(),new Map,new be(le),a,c);await If(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Dc(r)}else await Fa(r.localStore,e,!1).then(()=>ja(r,e,t)).catch(Ds)}async function s0(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await _v(t.localStore,e);Sf(t,r,null),Af(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await xs(t,s)}catch(s){await Ds(s)}}async function i0(n,e,t){const r=Y(n);try{const s=await function(a,c){const l=Y(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(m=>(he(m!==null),p=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Sf(r,e,t),Af(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await xs(r,s)}catch(s){await Ds(s)}}function Af(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Sf(n,e,t){const r=Y(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ja(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Rf(n,r)})}function Rf(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(bc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Dc(n))}function Hu(n,e,t){for(const r of t)r instanceof bf?(n.La.addReference(r.key,e),o0(n,r)):r instanceof wf?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Rf(n,r.key)):K()}function o0(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+t),n.xa.add(r),Dc(n))}function Dc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new q(ge.fromString(e)),r=n.qa.next();n.Na.set(r,new Qv(t)),n.Oa=n.Oa.insert(t,r),mf(n.remoteStore,new vn(Pt(mo(t.path)),r,"TargetPurposeLimboResolution",cc.oe))}}async function xs(n,e,t){const r=Y(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Ec.Wi(l.targetId,d);i.push(m)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,d){const p=Y(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(d,_=>O.forEach(_.$i,b=>p.persistence.referenceDelegate.addReference(m,_.targetId,b)).next(()=>O.forEach(_.Ui,b=>p.persistence.referenceDelegate.removeReference(m,_.targetId,b)))))}catch(m){if(!Ms(m))throw m;$("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const _=m.targetId;if(!m.fromCache){const b=p.os.get(_),k=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(k);p.os=p.os.insert(_,D)}}}(r.localStore,i))}async function a0(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await hf(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new j(M.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xs(t,r.hs)}}function c0(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return se().add(r.key);{let s=se();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function kf(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=If.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r0.bind(null,e),e.Ca.d_=Wv.bind(null,e.eventManager),e.Ca.$a=Hv.bind(null,e.eventManager),e}function l0(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=s0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=i0.bind(null,e),e}class Qi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return mv(this.persistence,new fv,e.initialUser,this.serializer)}Ga(e){return new uv(vc.Zr,this.serializer)}Wa(e){return new wv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qi.provider={build:()=>new Qi};class Ba{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=a0.bind(null,this.syncEngine),await $v(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qv}()}createDatastore(e){const t=wo(e.databaseInfo.databaseId),r=function(i){return new Sv(i)}(e.databaseInfo);return function(i,a,c,l){return new Pv(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Dv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Wu(this.syncEngine,t,0),function(){return ju.D()?new ju:new Tv}())}createSyncEngine(e,t){return function(s,i,a,c,l,d,p){const m=new Xv(s,i,a,c,l,d);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);$("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ls(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ba.provider={build:()=>new Ba};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ke.UNAUTHENTICATED,this.clientId=Dd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Sc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function da(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await hf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await h0(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Bu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Bu(e.remoteStore,s)),n._onlineComponents=e}async function h0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await da(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ir("Error using user provided cache. Falling back to memory cache: "+t),await da(n,new Qi)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await da(n,new Qi);return n._offlineComponents}async function Pf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Gu(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Gu(n,new Ba))),n._onlineComponents}function d0(n){return Pf(n).then(e=>e.syncEngine)}async function Xi(n){const e=await Pf(n),t=e.eventManager;return t.onListen=Yv.bind(null,e.syncEngine),t.onUnlisten=e0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=t0.bind(null,e.syncEngine),t}function f0(n,e,t={}){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const p=new Mc({next:_=>{p.Za(),a.enqueueAndForget(()=>kc(i,m));const b=_.docs.has(c);!b&&_.fromCache?d.reject(new j(M.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&l&&l.source==="server"?d.reject(new j(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new Cc(mo(c.path),p,{includeMetadataChanges:!0,_a:!0});return Rc(i,m)}(await Xi(n),n.asyncQueue,e,t,r)),r.promise}function p0(n,e,t={}){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const p=new Mc({next:_=>{p.Za(),a.enqueueAndForget(()=>kc(i,m)),_.fromCache&&l.source==="server"?d.reject(new j(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new Cc(c,p,{includeMetadataChanges:!0,_a:!0});return Rc(i,m)}(await Xi(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Cf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n,e,t){if(!t)throw new j(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function m0(n,e,t,r){if(e===!0&&r===!0)throw new j(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qu(n){if(!q.isDocumentKey(n))throw new j(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xu(n){if(q.isDocumentKey(n))throw new j(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ao(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ao(n);throw new j(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class So{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vg;switch(r.type){case"firstParty":return new xg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ku.get(t);r&&($("ComponentProvider","Removing Datastore"),Ku.delete(t),r.terminate())}(this),Promise.resolve()}}function _0(n,e,t,r={}){var s;const i=(n=dt(n,So))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Ke.MOCK_USER;else{c=a_(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new j(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ke(d)}n._authCredentials=new Ng(new Cd(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cn(this.firestore,e,this._query)}}class Ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class Tn extends Cn{constructor(e,t,r){super(e,t,mo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new q(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function Re(n,e,...t){if(n=Ve(n),Df("collection","path",e),n instanceof So){const r=ge.fromString(e,...t);return Xu(r),new Tn(n,null,r)}{if(!(n instanceof Ze||n instanceof Tn))throw new j(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Xu(r),new Tn(n.firestore,null,r)}}function st(n,e,...t){if(n=Ve(n),arguments.length===1&&(e=Dd.newId()),Df("doc","path",e),n instanceof So){const r=ge.fromString(e,...t);return Qu(r),new Ze(n,null,new q(r))}{if(!(n instanceof Ze||n instanceof Tn))throw new j(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Qu(r),new Ze(n.firestore,n instanceof Tn?n.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ff(this,"async_queue_retry"),this.Vu=()=>{const r=ha();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ha();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ha();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ms(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ac.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Zu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Gt extends So{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ju,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ju(e),this._firestoreClient=void 0,await e}}}function g0(n,e){const t=typeof n=="object"?n:bd(),r=typeof n=="string"?n:"(default)",s=oc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=i_("firestore");i&&_0(s,...i)}return s}function Fs(n){if(n._terminated)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||y0(n),n._firestoreClient}function y0(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,d,p){return new Xg(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Cf(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new u0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cr($e.fromBase64String(e))}catch(t){throw new j(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cr($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class Oc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=/^__.*__$/;class E0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ns(e,this.data,t,this.fieldTransforms)}}class Mf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Pn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Lc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Yi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Vf(this.Cu)&&v0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class b0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wo(e)}Qu(e,t,r,s=!1){return new Lc({Cu:e,methodName:t,qu:r,path:je.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ro(n){const e=n._freezeSettings(),t=wo(n._databaseId);return new b0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Nf(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);xc("Data must be an object, but it was:",a,r);const c=xf(r,a);let l,d;if(i.merge)l=new ut(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const _=$a(e,m,t);if(!a.contains(_))throw new j(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Uf(p,_)||p.push(_)}l=new ut(p),d=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=a.fieldTransforms;return new E0(new nt(c),l,d)}class ko extends Vc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ko}}function Of(n,e,t,r){const s=n.Qu(1,e,t);xc("Data must be an object, but it was:",s,r);const i=[],a=nt.empty();Zn(r,(l,d)=>{const p=Fc(e,l,t);d=Ve(d);const m=s.Nu(p);if(d instanceof ko)i.push(p);else{const _=Us(d,m);_!=null&&(i.push(p),a.set(p,_))}});const c=new ut(i);return new Mf(a,c,s.fieldTransforms)}function Lf(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[$a(e,r,t)],l=[s];if(i.length%2!=0)throw new j(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push($a(e,i[_])),l.push(i[_+1]);const d=[],p=nt.empty();for(let _=c.length-1;_>=0;--_)if(!Uf(d,c[_])){const b=c[_];let k=l[_];k=Ve(k);const D=a.Nu(b);if(k instanceof ko)d.push(b);else{const S=Us(k,D);S!=null&&(d.push(b),p.set(b,S))}}const m=new ut(d);return new Mf(p,m,a.fieldTransforms)}function w0(n,e,t,r=!1){return Us(t,n.Qu(r?4:3,e))}function Us(n,e){if(Ff(n=Ve(n)))return xc("Unsupported field value:",e,n),xf(n,e);if(n instanceof Vc)return function(r,s){if(!Vf(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Us(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Gi(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gi(s.serializer,i)}}if(r instanceof Nc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cr)return{bytesValue:rf(s.serializer,r._byteString)};if(r instanceof Ze){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Oc)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return pc(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ao(r)}`)}(n,e)}function xf(n,e){const t={};return Md(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zn(n,(r,s)=>{const i=Us(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ff(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Me||n instanceof Nc||n instanceof Cr||n instanceof Ze||n instanceof Vc||n instanceof Oc)}function xc(n,e,t){if(!Ff(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ao(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function $a(n,e,t){if((e=Ve(e))instanceof xr)return e._internalPath;if(typeof e=="string")return Fc(n,e);throw Yi("Field path arguments must be of type string or ",n,!1,void 0,t)}const T0=new RegExp("[~\\*/\\[\\]]");function Fc(n,e,t){if(e.search(T0)>=0)throw Yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xr(...e.split("."))._internalPath}catch{throw Yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new j(M.INVALID_ARGUMENT,c+n+l)}function Uf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Uc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class I0 extends jf{data(){return super.data()}}function Uc(n,e){return typeof e=="string"?Fc(n,e):e instanceof xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jc{}class $f extends jc{}function Je(n,e,...t){let r=[];e instanceof jc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Bc).length,c=i.filter(l=>l instanceof Po).length;if(a>1||a>0&&c>0)throw new j(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Po extends $f{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Po(e,t,r)}_apply(e){const t=this._parse(e);return zf(e._query,t),new Cn(e.firestore,e.converter,Va(e._query,t))}_parse(e){const t=Ro(e.firestore);return function(i,a,c,l,d,p,m){let _;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new j(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){th(m,p);const b=[];for(const k of m)b.push(eh(l,i,k));_={arrayValue:{values:b}}}else _=eh(l,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||th(m,p),_=w0(c,a,m,p==="in"||p==="not-in");return Ce.create(d,p,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ee(n,e,t){const r=e,s=Uc("where",n);return Po._create(s,r,t)}class Bc extends jc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:St.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)zf(a,l),a=Va(a,l)}(e._query,t),new Cn(e.firestore,e.converter,Va(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $c extends $f{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new $c(e,t,r)}_apply(e){return new Cn(e.firestore,e.converter,qi(e._query,this._limit,this._limitType))}}function Bn(n){return $c._create("limit",n,"F")}function eh(n,e,t){if(typeof(t=Ve(t))=="string"){if(t==="")throw new j(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bd(e)&&t.indexOf("/")!==-1)throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!q.isDocumentKey(r))throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bu(n,new q(r))}if(t instanceof Ze)return bu(n,t._key);throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ao(t)}.`)}function th(n,e){if(!Array.isArray(n)||n.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class A0{convertValue(e,t="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ae(a.doubleValue));return new Oc(i)}convertGeoPoint(e){return new Nc(Ae(e.latitude),Ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=uc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bs(e));default:return null}}convertTimestamp(e){const t=Rn(e);return new Me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);he(uf(r));const s=new ws(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wf extends jf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Uc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Si extends Wf{data(e={}){return super.data(e)}}class Hf{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Si(this._firestore,this._userDataWriter,r.key,r,new hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Si(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Si(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:S0(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function S0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(n){n=dt(n,Ze);const e=dt(n.firestore,Gt);return f0(Fs(e),n._key).then(t=>Gf(e,n,t))}class zc extends A0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,t)}}function k0(n){n=dt(n,Cn);const e=dt(n.firestore,Gt),t=Fs(e),r=new zc(e);return Bf(n._query),p0(t,n._query).then(s=>new Hf(e,r,n,s))}function P0(n,e,t,...r){n=dt(n,Ze);const s=dt(n.firestore,Gt),i=Ro(s);let a;return a=typeof(e=Ve(e))=="string"||e instanceof xr?Lf(i,"updateDoc",n._key,e,t,r):Of(i,"updateDoc",n._key,e),Co(s,[a.toMutation(n._key,rt.exists(!0))])}function C0(n){return Co(dt(n.firestore,Gt),[new Eo(n._key,rt.none())])}function D0(n,e){const t=dt(n.firestore,Gt),r=st(n),s=qf(n.converter,e);return Co(t,[Nf(Ro(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,rt.exists(!1))]).then(()=>r)}function M0(n,...e){var t,r,s;n=Ve(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Zu(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Zu(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let l,d,p;if(n instanceof Ze)d=dt(n.firestore,Gt),p=mo(n._key.path),l={next:m=>{e[a]&&e[a](Gf(d,n,m))},error:e[a+1],complete:e[a+2]};else{const m=dt(n,Cn);d=dt(m.firestore,Gt),p=m._query;const _=new zc(d);l={next:b=>{e[a]&&e[a](new Hf(d,_,m,b))},error:e[a+1],complete:e[a+2]},Bf(n._query)}return function(_,b,k,D){const S=new Mc(D),V=new Cc(b,S,k);return _.asyncQueue.enqueueAndForget(async()=>Rc(await Xi(_),V)),()=>{S.Za(),_.asyncQueue.enqueueAndForget(async()=>kc(await Xi(_),V))}}(Fs(d),p,c,l)}function Co(n,e){return function(r,s){const i=new zt;return r.asyncQueue.enqueueAndForget(async()=>n0(await d0(r),s,i)),i.promise}(Fs(n),e)}function Gf(n,e,t){const r=t.docs.get(e._key),s=new zc(n);return new Wf(n,s,e._key,r,new hs(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ro(e)}set(e,t,r){this._verifyNotCommitted();const s=fa(e,this._firestore),i=qf(s.converter,t,r),a=Nf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,rt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=fa(e,this._firestore);let a;return a=typeof(t=Ve(t))=="string"||t instanceof xr?Lf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Of(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,rt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=fa(e,this._firestore);return this._mutations=this._mutations.concat(new Eo(t._key,rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fa(n,e){if((n=Ve(n)).firestore!==e)throw new j(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(n){return Fs(n=dt(n,Gt)),new V0(n,e=>Co(n,e))}(function(e,t=!0){(function(s){Nr=s})(Vr),Tr(new Hn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Gt(new Og(r.getProvider("auth-internal")),new Ug(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new j(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ws(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),wn(_u,"4.7.3",e),wn(_u,"4.7.3","esm2017")})();function qc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const O0=Kf,Qf=new Ps("auth","Firebase",Kf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new sc("@firebase/auth");function L0(n,...e){Ji.logLevel<=ie.WARN&&Ji.warn(`Auth (${Vr}): ${n}`,...e)}function Ri(n,...e){Ji.logLevel<=ie.ERROR&&Ji.error(`Auth (${Vr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n,...e){throw Wc(n,...e)}function Dt(n,...e){return Wc(n,...e)}function Xf(n,e,t){const r=Object.assign(Object.assign({},O0()),{[e]:t});return new Ps("auth","Firebase",r).create(e,{appName:n.name})}function In(n){return Xf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Qf.create(n,...e)}function G(n,e,...t){if(!n)throw Wc(e,...t)}function jt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ri(e),new Error(e)}function Qt(n,e){n||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function x0(){return nh()==="http:"||nh()==="https:"}function nh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x0()||h_()||"connection"in navigator)?navigator.onLine:!0}function U0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qt(t>e,"Short delay should be less than long delay!"),this.isMobile=c_()||d_()}get(){return F0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n,e){Qt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new js(3e4,6e4);function Do(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fr(n,e,t,r,s={}){return Jf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Cs(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return u_()||(d.referrerPolicy="no-referrer"),Yf.fetch()(ep(n,n.config.apiHost,t,c),d)})}async function Jf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},j0),e);try{const s=new $0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw pi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw pi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw pi(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Xf(n,p,d);Kt(n,p)}}catch(s){if(s instanceof Yt)throw s;Kt(n,"network-request-failed",{message:String(s)})}}async function Zf(n,e,t,r,s={}){const i=await Fr(n,e,t,r,s);return"mfaPendingCredential"in i&&Kt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function ep(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Hc(n.config,s):`${n.config.apiScheme}://${s}`}class $0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),B0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Dt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(n,e){return Fr(n,"POST","/v1/accounts:delete",e)}async function tp(n,e){return Fr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q0(n,e=!1){const t=Ve(n),r=await t.getIdToken(e),s=Gc(r);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:gs(pa(s.auth_time)),issuedAtTime:gs(pa(s.iat)),expirationTime:gs(pa(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function pa(n){return Number(n)*1e3}function Gc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const s=pd(t);return s?JSON.parse(s):(Ri("Failed to decode base64 JWT payload"),null)}catch(s){return Ri("Caught error parsing JWT payload as JSON",s?.toString()),null}}function rh(n){const e=Gc(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Yt&&W0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function W0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ss(n,tp(t,{idToken:r}));G(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?np(i.providerUserInfo):[],c=K0(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!c?.length,p=l?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new qa(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,m)}async function G0(n){const e=Ve(n);await Zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function np(n){return n.map(e=>{var{providerId:t}=e,r=qc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(n,e){const t=await Jf(n,{},async()=>{const r=Cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=ep(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Yf.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function X0(n,e){return Fr(n,"POST","/v2/accounts:revokeToken",Do(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=rh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Q0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Er;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q0(this,e)}reload(){return G0(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Zi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Ss(this,z0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,d,p;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,V=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:B,emailVerified:Q,isAnonymous:J,providerData:te,stsTokenManager:w}=t;G(B&&w,e,"internal-error");const v=Er.fromJSON(this.name,w);G(typeof B=="string",e,"internal-error"),dn(m,e.name),dn(_,e.name),G(typeof Q=="boolean",e,"internal-error"),G(typeof J=="boolean",e,"internal-error"),dn(b,e.name),dn(k,e.name),dn(D,e.name),dn(S,e.name),dn(V,e.name),dn(F,e.name);const E=new Bt({uid:B,auth:e,email:_,emailVerified:Q,displayName:m,isAnonymous:J,photoURL:k,phoneNumber:b,tenantId:D,stsTokenManager:v,createdAt:V,lastLoginAt:F});return te&&Array.isArray(te)&&(E.providerData=te.map(T=>Object.assign({},T))),S&&(E._redirectEventId=S),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Er;s.updateFromServerResponse(t);const i=new Bt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?np(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new Er;c.updateFromIdToken(r);const l=new Bt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Map;function $t(n){Qt(n instanceof Function,"Expected a class definition");let e=sh.get(n);return e?(Qt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sh.set(n,e),e)}/**
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
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rp.type="NONE";const ih=rp;/**
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
 */function ki(n,e,t){return`firebase:${n}:${e}:${t}`}class br{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=ki("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new br($t(ih),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||$t(ih);const a=ki(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const m=Bt._fromJSON(e,p);d!==i&&(c=m),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new br(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new br(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lp(e))return"Blackberry";if(up(e))return"Webos";if(ip(e))return"Safari";if((e.includes("chrome/")||op(e))&&!e.includes("edge/"))return"Chrome";if(cp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function sp(n=Xe()){return/firefox\//i.test(n)}function ip(n=Xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function op(n=Xe()){return/crios\//i.test(n)}function ap(n=Xe()){return/iemobile/i.test(n)}function cp(n=Xe()){return/android/i.test(n)}function lp(n=Xe()){return/blackberry/i.test(n)}function up(n=Xe()){return/webos/i.test(n)}function Kc(n=Xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Y0(n=Xe()){var e;return Kc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J0(){return f_()&&document.documentMode===10}function hp(n=Xe()){return Kc(n)||cp(n)||up(n)||lp(n)||/windows phone/i.test(n)||ap(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n,e=[]){let t;switch(n){case"Browser":t=oh(Xe());break;case"Worker":t=`${oh(Xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vr}/${r}`}/**
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
 */class Z0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function eE(n,e={}){return Fr(n,"GET","/v2/passwordPolicy",Do(n,e))}/**
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
 */const tE=6;class nE{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:tE,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ah(this),this.idTokenSubscription=new ah(this),this.beforeStateQueue=new Z0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tp(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ut(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(In(this));const t=e?Ve(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eE(this),t=new nE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await X0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&L0(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Mo(n){return Ve(n)}class ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=b_(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sE(n){Qc=n}function iE(n){return Qc.loadJS(n)}function oE(){return Qc.gapiScript}function aE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(n,e){const t=oc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ui(i,e??{}))return s;Kt(s,"already-initialized")}return t.initialize({options:e})}function lE(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map($t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function uE(n,e,t){const r=Mo(n);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fp(e),{host:a,port:c}=hE(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),dE()}function fp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hE(n){const e=fp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ch(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ch(a)}}}function ch(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,t){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n,e){return Zf(n,"POST","/v1/accounts:signInWithIdp",Do(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="http://localhost";class Xn extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=qc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Xn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return wr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wr(e,t)}buildRequest(){const e={requestUri:fE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bs extends mp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Bs{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _n.credential(t,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Bs{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Bs{constructor(){super("twitter.com")}static credential(e,t){return Xn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return yn.credential(t,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),a=lh(r);return new Yn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=lh(r);return new Yn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function lh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Yt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,eo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new eo(e,t,r,s)}}function _p(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?eo._fromErrorAndOperation(n,i,e,r):i})}async function pE(n,e,t=!1){const r=await Ss(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yn._forOperation(n,"link",r)}/**
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
 */async function mE(n,e,t=!1){const{auth:r}=n;if(Ut(r.app))return Promise.reject(In(r));const s="reauthenticate";try{const i=await Ss(n,_p(r,s,e,n),t);G(i.idToken,r,"internal-error");const a=Gc(i.idToken);G(a,r,"internal-error");const{sub:c}=a;return G(n.uid===c,r,"user-mismatch"),Yn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(n,e,t=!1){if(Ut(n.app))return Promise.reject(In(n));const r="signIn",s=await _p(n,r,e),i=await Yn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(n,e){return Zf(n,"POST","/v1/accounts:signInWithCustomToken",Do(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(n,e){if(Ut(n.app))return Promise.reject(In(n));const t=Mo(n),r=await gE(t,{token:e,returnSecureToken:!0}),s=await Yn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function vE(n,e,t,r){return Ve(n).onIdTokenChanged(e,t,r)}function EE(n,e,t){return Ve(n).beforeAuthStateChanged(e,t)}function bE(n){return Ve(n).signOut()}const to="__sak";/**
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
 */class gp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(to,"1"),this.storage.removeItem(to),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=1e3,TE=10;class yp extends gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);J0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,TE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yp.type="LOCAL";const IE=yp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vp.type="SESSION";const Ep=vp;/**
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
 */function AE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Vo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await AE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class SE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=Xc("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function RE(n){Mt().location.href=n}/**
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
 */function bp(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function kE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PE(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function CE(){return bp()?self:null}/**
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
 */const wp="firebaseLocalStorageDb",DE=1,no="firebaseLocalStorage",Tp="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function No(n,e){return n.transaction([no],e?"readwrite":"readonly").objectStore(no)}function ME(){const n=indexedDB.deleteDatabase(wp);return new $s(n).toPromise()}function Wa(){const n=indexedDB.open(wp,DE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(no,{keyPath:Tp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(no)?e(r):(r.close(),await ME(),e(await Wa()))})})}async function uh(n,e,t){const r=No(n,!0).put({[Tp]:e,value:t});return new $s(r).toPromise()}async function VE(n,e){const t=No(n,!1).get(e),r=await new $s(t).toPromise();return r===void 0?null:r.value}function hh(n,e){const t=No(n,!0).delete(e);return new $s(t).toPromise()}const NE=800,OE=3;class Ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>OE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(CE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kE(),!this.activeServiceWorker)return;this.sender=new SE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wa();return await uh(e,to,"1"),await hh(e,to),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>uh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>VE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=No(s,!1).getAll();return new $s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ip.type="LOCAL";const LE=Ip;new js(3e4,6e4);/**
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
 */function xE(n,e){return e?$t(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yc extends pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function FE(n){return _E(n.auth,new Yc(n),n.bypassAuthState)}function UE(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),mE(t,new Yc(n),n.bypassAuthState)}async function jE(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),pE(t,new Yc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FE;case"linkViaPopup":case"linkViaRedirect":return jE;case"reauthViaPopup":case"reauthViaRedirect":return UE;default:Kt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new js(2e3,1e4);class yr extends Ap{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BE.get())};e()}}yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="pendingRedirect",Pi=new Map;class zE extends Ap{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const r=await qE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qE(n,e){const t=GE(e),r=HE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function WE(n,e){Pi.set(n._key(),e)}function HE(n){return $t(n._redirectPersistence)}function GE(n){return ki($E,n.config.apiKey,n.name)}async function KE(n,e,t=!1){if(Ut(n.app))return Promise.reject(In(n));const r=Mo(n),s=xE(r,e),a=await new zE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=10*60*1e3;class XE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Sp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Dt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QE&&this.cachedEventUids.clear(),this.cachedEventUids.has(dh(e))}saveEventToCache(e){this.cachedEventUids.add(dh(e)),this.lastProcessedEventTime=Date.now()}}function dh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function YE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(n,e={}){return Fr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eb=/^https?/;async function tb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await JE(n);for(const t of e)try{if(nb(t))return}catch{}Kt(n,"unauthorized-domain")}function nb(n){const e=za(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!eb.test(t))return!1;if(ZE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rb=new js(3e4,6e4);function fh(){const n=Mt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sb(n){return new Promise((e,t)=>{var r,s,i;function a(){fh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fh(),t(Dt(n,"network-request-failed"))},timeout:rb.get()})}if(!((s=(r=Mt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Mt().gapi)===null||i===void 0)&&i.load)a();else{const c=aE("iframefcb");return Mt()[c]=()=>{gapi.load?a():t(Dt(n,"network-request-failed"))},iE(`${oE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ci=null,e})}let Ci=null;function ib(n){return Ci=Ci||sb(n),Ci}/**
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
 */const ob=new js(5e3,15e3),ab="__/auth/iframe",cb="emulator/auth/iframe",lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hb(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hc(e,cb):`https://${n.config.authDomain}/${ab}`,r={apiKey:e.apiKey,appName:n.name,v:Vr},s=ub.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Cs(r).slice(1)}`}async function db(n){const e=await ib(n),t=Mt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:hb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Dt(n,"network-request-failed"),c=Mt().setTimeout(()=>{i(a)},ob.get());function l(){Mt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pb=500,mb=600,_b="_blank",gb="http://localhost";class ph{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yb(n,e,t,r=pb,s=mb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},fb),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Xe().toLowerCase();t&&(c=op(d)?_b:t),sp(d)&&(e=e||gb,l.scrollbars="yes");const p=Object.entries(l).reduce((_,[b,k])=>`${_}${b}=${k},`,"");if(Y0(d)&&c!=="_self")return vb(e||"",c),new ph(null);const m=window.open(e||"",c,p);G(m,n,"popup-blocked");try{m.focus()}catch{}return new ph(m)}function vb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Eb="__/auth/handler",bb="emulator/auth/handler",wb=encodeURIComponent("fac");async function mh(n,e,t,r,s,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vr,eventId:s};if(e instanceof mp){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",E_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Bs){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),d=l?`#${wb}=${encodeURIComponent(l)}`:"";return`${Tb(n)}?${Cs(c).slice(1)}${d}`}function Tb({config:n}){return n.emulator?Hc(n,bb):`https://${n.authDomain}/${Eb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="webStorageSupport";class Ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ep,this._completeRedirectFn=KE,this._overrideRedirectResult=WE}async _openPopup(e,t,r,s){var i;Qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await mh(e,t,r,za(),s);return yb(e,a,Xc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await mh(e,t,r,za(),s);return RE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Qt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await db(e),r=new XE(e);return t.register("authEvent",s=>(G(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ma,{type:ma},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[ma];a!==void 0&&t(!!a),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hp()||ip()||Kc()}}const Ab=Ib;var _h="@firebase/auth",gh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kb(n){Tr(new Hn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dp(n)},d=new rE(r,s,i,l);return lE(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new Hn("auth-internal",e=>{const t=Mo(e.getProvider("auth").getImmediate());return(r=>new Sb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(_h,gh,Rb(n)),wn(_h,gh,"esm2017")}/**
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
 */const Pb=5*60,Cb=gd("authIdTokenMaxAge")||Pb;let yh=null;const Db=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Cb)return;const s=t?.token;yh!==s&&(yh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mb(n=bd()){const e=oc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=cE(n,{popupRedirectResolver:Ab,persistence:[LE,IE,Ep]}),r=gd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Db(i.toString());EE(t,a,()=>a(t.currentUser)),vE(t,c=>a(c))}}const s=md("auth");return s&&uE(t,`http://${s}`),t}function Vb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}sE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Dt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Vb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kb("Browser");function ue(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function An(n){const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0}function Nb({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const s=new Set(n.map(ue).filter(Boolean)),i={};s.forEach(l=>{i[l]=0});const a=[],c=(l,d,p)=>{const m=ue(l);m&&(s.has(m)?i[m]+=d:a.push({type:"unknown_name",name:m,...p}))};for(const l of e){if(!l||typeof l.date!="string"||!l.date.startsWith(r))continue;const d=l.splits&&typeof l.splits=="object"?Object.entries(l.splits):[];if(d.length===0){a.push({type:"no_splits",id:l.id});continue}const p=An(l.amount);c(l.payer,p,{id:l.id});let m=0;for(const[_,b]of d){const k=An(b);m+=k,c(_,-k,{id:l.id})}Math.abs(m-p)>d.length&&a.push({type:"split_mismatch",id:l.id,diffSatang:m-p})}for(const l of t){if(!l||l.status!=="verified"||l.month!==r)continue;const d=An(l.amount);c(l.from,d,{id:l.id}),c(l.to,-d,{id:l.id})}return{balances:i,warnings:a}}function Ob(n,{minSatang:e=100}={}){const t=[],r=[];for(const[l,d]of Object.entries(n))d<=-e?t.push({name:l,amt:-d}):d>=e&&r.push({name:l,amt:d});const s=(l,d)=>d.amt-l.amt||(l.name<d.name?-1:l.name>d.name?1:0);t.sort(s),r.sort(s);const i=[];let a=0,c=0;for(;a<t.length&&c<r.length;){const l=t[a],d=r[c],p=Math.min(l.amt,d.amt);p>=e&&i.push({from:l.name,to:d.name,amountSatang:p,amount:p/100}),l.amt-=p,d.amt-=p,l.amt<e&&a++,d.amt<e&&c++}return i}function Rp(n){const e=Number(n)||0;return Math.abs(e)<100?0:Math.round(e/100)}function ro(n,e){if(!n)return 0;const t=ue(e),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return ue(n.payer)===t?An(n.amount):0;let s=0;for(const[i,a]of r)ue(i)===t&&(s+=An(a));return s}function kp(n,e){return n&&ue(n.payer)===ue(e)?An(n.amount):0}const Pp=(n,e)=>typeof n=="string"&&n.startsWith(e);function Cp({name:n,transactions:e=[],settlements:t=[],month:r}){const s=ue(n);let i=0,a=0;for(const p of e)!p||!Pp(p.date,r)||(i+=kp(p,s),a+=ro(p,s));let c=0,l=0;for(const p of t){if(!p||p.status!=="verified"||p.month!==r)continue;const m=An(p.amount);ue(p.from)===s&&(c+=m),ue(p.to)===s&&(l+=m)}const d=i-a+c-l;return{name:s,month:r,paid:i,share:a,sent:c,received:l,balance:d}}function Dp({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const{balances:s,warnings:i}=Nb({memberNames:n,transactions:e,settlements:t,month:r}),a=Ob(s),c=Object.keys(s).sort().map(l=>{const d=Cp({name:l,transactions:e,settlements:t,month:r}),p=Rp(s[l]);return{...d,balance:s[l],displayBalance:p,cleared:p===0}});return{month:r,balances:s,plan:a,warnings:i,members:c}}function Jc({name:n,month:e,walletEntries:t=[],transactions:r=[],settlements:s=[]}){const i=ue(n),a=new Set;let c=0,l=0;for(const _ of t){if(!_||ue(_.ownerName)!==i||!Pp(_.date||_.month,e))continue;const b=_.dedupKey||_.transRef;if(b){if(a.has(b))continue;a.add(b)}const k=An(_.amount);k<=0||(_.type==="income"?c+=k:_.type==="expense"&&(l+=k))}const d=Cp({name:i,transactions:r,settlements:s,month:e}),p=d.share,m=l+p;return{name:i,month:e,income:c,personalExpense:l,groupShare:p,expenseTotal:m,net:c-m,receivedBack:d.received,paidBack:d.sent}}function Mp(n){return(n||[]).map(e=>({from:e.from,to:e.to,amount:Math.round(e.amountSatang/100)})).filter(e=>e.amount>=1)}const Vp=n=>[...new Set(n.map(ue).filter(Boolean))].sort();function Lb(n){if(!n||typeof n!="object")return[];const e=n.splits&&typeof n.splits=="object"?Object.keys(n.splits):[];return Vp([n.payer,...e])}function Np(n){return!n||typeof n!="object"?[]:Vp([n.from,n.to])}function xb(n,e){return n==="settlements"?Np(e):Lb(e)}function vh(n,e){return{...e,people:xb(n,e)}}const Fb={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},Eh="2008948704-db2goT00",Op=Ed(Fb),ae=g0(Op),zn=Mb(Op);let Lp=()=>{};const Ub=new Promise(n=>{Lp=n});let bh=!1;const jb=setTimeout(()=>Zc(),1e4);function Zc(){bh||(bh=!0,clearTimeout(jb),Lp())}const tr=()=>Ub,Bb=n=>"m_"+n;async function el(n,e){try{n&&(!zn.currentUser||zn.currentUser.uid!==Bb(e))&&await yE(zn,n)}catch(t){console.warn("firebase sign-in:",t&&t.message)}Zc()}const ht=async(...n)=>(await tr(),k0(...n)),$b=async(...n)=>(await tr(),R0(...n)),nr=async(...n)=>(await tr(),P0(...n)),tl=async(...n)=>(await tr(),C0(...n)),xp=async(...n)=>(await tr(),D0(...n));function wh(n,e,t){let r=null,s=!1;return tr().then(()=>{s||(r=M0(n,e,t))}),()=>{s=!0,r&&r()}}function Fp(n){const e=N0(n),t=e.commit.bind(e);return e.commit=async()=>(await tr(),t()),e}function Up(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function zb(){return typeof liff<"u"?Promise.resolve():new Promise((n,e)=>{let t=0;const r=setInterval(()=>{typeof liff<"u"?(clearInterval(r),n()):++t>100&&(clearInterval(r),e(new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้")))},100)})}let jp=()=>{},Oo=!1,Bp=()=>{};const qb="เซสชัน LINE หมดอายุ กดเข้าสู่ระบบใหม่ที่แถบด้านบน";function Wb(n){Bp=n,Oo&&n()}function Hb(){try{const n=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}liff.login({redirectUri:n})}catch{}}function so(){Oo=!0,Bp();const n=new Error(qb);return n.expired=!0,n}const Gb=new Promise(n=>{jp=n});let Rs="pending";const Ha="dm:v2:webtoken",Kb=20*24*60*60*1e3;function Lo(){try{const n=JSON.parse(localStorage.getItem(Ha)||"null");return n&&typeof n.token=="string"&&n.token?n:null}catch{return null}}function $p(n){try{n?localStorage.setItem(Ha,JSON.stringify({token:n,t:Date.now()})):localStorage.removeItem(Ha)}catch{}}async function Qb(){const n=Lo();if(!(n&&Date.now()-n.t<Kb))try{const e=liff.getIDToken();if(!e)return;const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e,kind:"web"})}),r=await t.json().catch(()=>({}));t.ok&&r.success&&r.token&&$p(r.token)}catch{}}const Xb="U0d739eea39c312e11c487e22861920d1",Yb=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();function Ga(n,e,t){return{name:Yb(e.name),memberId:n,pictureUrl:/^https:\/\//i.test(e.pictureUrl||"")?e.pictureUrl:"",isAdmin:e.role==="admin"||t===Xb,realName:e.realName||"",promptpay:e.promptpay||""}}const Jb=["code","state","liffClientId","liffRedirectUri","error","error_description"],Zb=()=>{const n=new URLSearchParams(location.search);return n.has("code")||n.has("liffClientId")};function Th(){try{const n=new URL(location.href);let e=!1;for(const r of Jb)n.searchParams.has(r)&&(n.searchParams.delete(r),e=!0);let t=n.hash;t==="#_=_"&&(t="",e=!0),e&&history.replaceState(null,"",n.pathname+(n.search||"")+t)}catch{}}let Di="";function Ih(){return Di}async function ew(){await zb();const n=Zb();try{await liff.init({liffId:Eh})}catch(t){if(Di=`เริ่มระบบ LINE ไม่สำเร็จ: ${t&&t.message||t}`,n)Th(),await liff.init({liffId:Eh});else throw t}if(Th(),!liff.isLoggedIn()){Rs="out",Di=Di||(n?"ล็อกอินกลับมาแล้วแต่ LINE ไม่ยืนยันบัตร (ลองกดเข้าสู่ระบบใหม่อีกครั้ง)":"บัตรล็อกอิน LINE ในเบราว์เซอร์นี้หมดอายุหรือยังไม่มี");const t=qp();if(t&&Lo()&&!n){try{const s=await $b(st(ae,"members",String(t.memberId)));if(s.exists())return Ga(s.id,s.data(),s.data().lineUserId||"")}catch{}return t}if(t&&!n)return Oo=!0,{needLogin:!0};const r=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}return liff.login({redirectUri:r}),null}Rs="in",jp(),Qb();try{const t=sessionStorage.getItem("dept_auth_hash");t&&(sessionStorage.removeItem("dept_auth_hash"),(!location.hash||location.hash==="#"||location.hash==="#_=_")&&(location.hash=t))}catch{}const e=await zp({action:"login"});if(e.member)return await el(e.firebaseToken,e.member.id),Ga(e.member.id,e.member,e.member.lineUserId);if(e.needLink)return{needLink:!0,profile:e.profile||{},candidates:e.candidates||[],suggest:e.suggest||""};throw new Error(e.message||"เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง")}async function zp(n){const e=liff.getIDToken();if(!e)throw new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองรีเฟรชหน้านี้");const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,idToken:e})}),r=await t.json().catch(()=>({}));return!t.ok&&!r.message&&(r.message=`เข้าสู่ระบบไม่สำเร็จ (${t.status})`),r}async function VT(n,e){const t=await zp({action:"link",memberId:e});if(!t.member)throw new Error(t.message||"ผูกบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง");return Ur(),await el(t.firebaseToken,t.member.id),Ga(t.member.id,t.member,t.member.lineUserId)}const xo=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase(),Fo=24*60*60*1e3,Uo=10*60*1e3,Xt="dm:v2:";function ft(n,e){try{const t=localStorage.getItem(Xt+n);if(!t)return null;const{t:r,v:s}=JSON.parse(t);return Date.now()-r<e?s:null}catch{return null}}function it(n,e){try{localStorage.setItem(Xt+n,JSON.stringify({t:Date.now(),v:e}))}catch{}}const tw=30*24*60*60*1e3,nw=7*24*60*60*1e3;function qp(){const n=ft("user",tw);return n&&n.name&&n.memberId?n:null}function rw(n){n&&n.name&&n.memberId&&it("user",n)}let io=null;const jo=()=>io||"*";function oo(){return ft("privacy",1/0)}function Wp(){return ft("seeall",1/0)===!0}function sw(n){it("seeall",!!n)}function Hp(n,e=oo(),t=Wp()){return!e||!e.hide||e.super&&t?null:xo(n)||null}function Gp(n){io=n||null}const ks=()=>io?[Ee("people","array-contains",io)]:[];function iw(n,e,t=jo()){const r=ft(`snap:${n}:${t}:${e}`,nw);return r&&Array.isArray(r.transactions)&&Array.isArray(r.settlements)&&Array.isArray(r.wallet)?r:null}function ow(n,e,t){it(`snap:${n}:${jo()}:${e}`,{transactions:t.transactions,settlements:t.settlements,wallet:t.wallet})}function aw(){return ft("members",1/0)}function Ka(){try{Object.keys(localStorage).filter(n=>n.startsWith(Xt)).forEach(n=>localStorage.removeItem(n))}catch{}}async function cw(){const n=ft("members",Uo);if(n)return n;const e=await ht(Re(ae,"members")),t=[...new Set(e.docs.map(r=>xo(r.data().name)).filter(Boolean))];return it("members",t),t}async function lw(n){const e=`m:${jo()}:${n}`,t=ft(e,Fo);if(t)return t;const[r,s]=await Promise.all([ht(Je(Re(ae,"transactions"),...ks(),Ee("date",">=",`${n}-01`),Ee("date","<=",`${n}-31`))),ht(Je(Re(ae,"settlements"),...ks(),Ee("month","==",n)))]),i={transactions:r.docs.map(a=>({id:a.id,...a.data()})),settlements:s.docs.map(a=>({id:a.id,...a.data()}))};return it(e,i),i}function uw(n,e){const t={transactions:null,settlements:null},r=()=>{t.transactions&&t.settlements&&e({...t})},s=a=>e({error:a}),i=[wh(Je(Re(ae,"transactions"),...ks(),Ee("date",">=",`${n}-01`),Ee("date","<=",`${n}-31`)),a=>{t.transactions=a.docs.map(c=>({id:c.id,...c.data()})),r()},s),wh(Je(Re(ae,"settlements"),...ks(),Ee("month","==",n)),a=>{t.settlements=a.docs.map(c=>({id:c.id,...c.data()})),r()},s)];return()=>i.forEach(a=>a())}async function ye(n,e,{line:t=!1}={}){const r=t?null:Lo();if(r){const c=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.token},body:JSON.stringify(e)});let l={};try{l=await c.json()}catch{}if(c.status!==401){if(!c.ok)throw new Error(l.message||`เกิดข้อผิดพลาด (${c.status})`);return l}$p("")}if(Oo||Rs==="out")throw so();await Promise.race([Gb,new Promise((c,l)=>setTimeout(()=>l(new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองใหม่อีกครั้ง")),2e4))]);const s=liff.getIDToken(),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,idToken:s})});let a={};try{a=await i.json()}catch{}if(i.status===401)throw so();if(!i.ok)throw new Error(a.message||`เกิดข้อผิดพลาด (${i.status})`);return a}async function hw(n,{current:e=!1}={}){if(!e){const s=ft("w:"+n,Fo);if(s)return s}const t=await ye("/api/shortcut-transaction",{action:"wallet-list",month:n}),r=Array.isArray(t.items)?t.items:[];return e||it("w:"+n,r),r}async function dw(n,e){const t={},r=[];for(const c of n){if(c===e)continue;const l=ft("w:"+c,Fo);l?t[c]=l:r.push(c)}if(r.length===0)return t[e]=await hw(e,{current:!0}),t;const s=r.slice().sort()[0],i=await ye("/api/shortcut-transaction",{action:"wallet-list",since:s}),a=Array.isArray(i.items)?i.items:[];t[e]=a.filter(c=>String(c.date||"").startsWith(e));for(const c of r){const l=a.filter(d=>String(d.date||"").startsWith(c));t[c]=l,it("w:"+c,l)}return t}async function NT(){const n=await ye("/api/device-token",{},{line:!0});if(!n.success||!n.token)throw new Error(n.message||"สร้างรหัสไม่สำเร็จ");return n}async function OT(){if(Rs!=="in")throw so();const n=await fetch("/api/device-token",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:liff.getIDToken()})});let e={};try{e=await n.json()}catch{}if(!n.ok||!e.success)throw new Error(e.message||"ยกเลิกรหัสไม่สำเร็จ");return e}async function LT(n,e){await ye("/api/shortcut-transaction",{action:"wallet-update",id:n,...e})}async function xT(n){let e=0;for(let t=0;t<n.length;t+=100){const r=await ye("/api/shortcut-transaction",{action:"wallet-update",items:n.slice(t,t+100)});e+=Number(r.updated)||0}return e}async function fw(){const n=await ye("/api/shortcut-transaction",{action:"wallet-template-list"});return Array.isArray(n.items)?n.items:[]}async function FT(n,e){await ye("/api/shortcut-transaction",{action:"wallet-template-update",id:n,...e}),jr()}async function UT(n){await ye("/api/shortcut-transaction",{action:"wallet-template-stop",id:n}),jr()}const Kp=n=>n&&n.plan&&typeof n.plan=="object"?n.plan:{budget:{total:0,cats:{}},months:{},goals:[]};async function pw(){const n=ft("plan",Uo);if(n)return n;const e=Kp(await ye("/api/shortcut-transaction",{action:"plan-get"}));return it("plan",e),e}const Bo=async n=>{const e=Kp(await ye("/api/shortcut-transaction",n));return it("plan",e),e},mw=({scope:n,month:e,total:t,cats:r,clear:s=!1})=>Bo({action:"plan-budget-set",scope:n,month:e,total:t,cats:r,clear:s}),_w=n=>Bo({action:"goal-save",...n}),gw=(n,e,t)=>Bo({action:"goal-move",id:n,amount:e,dir:t}),yw=n=>Bo({action:"goal-delete",id:n}),vw=5*60*1e3;async function Ah({force:n=!1}={}){const e=n?null:ft("cards",vw);if(e)return e;const t=await ye("/api/shortcut-transaction",{action:"card-list"}),r={enabled:t.enabled===!0,cards:Array.isArray(t.cards)?t.cards:[]};return it("cards",r),r}function Ew(){try{localStorage.removeItem(Xt+"cards")}catch{}}const nl=async n=>{const e=await ye("/api/shortcut-transaction",n);return Ew(),e},bw=n=>nl({action:"card-save",...n}),ww=n=>nl({action:"card-delete",id:n}),Tw=(n,e,t)=>nl({action:"card-paid",id:n,paid:e,key:t});async function jT(n,e){for(const t of n.ids&&n.ids.length?n.ids:[n.id])await nr(st(ae,"members",String(t)),{cardAlerts:!!e});Ur()}async function BT(){const n=await ye("/api/shortcut-transaction",{action:"line-quota"});return n&&n.quota?n.quota:null}async function Iw(n){return n&&n.recurring&&jr(),ye("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}async function Sh(){const n=ft("profiles",Uo);if(n)return n;const e=await ht(Re(ae,"members")),t=new Map;e.docs.forEach(s=>{const i=s.data(),a=xo(i.name);if(!a)return;const c={id:s.id,name:a,promptpay:i.promptpay||"",realName:i.realName||"",englishName:i.englishName||"",hasLine:!!i.lineUserId,pictureUrl:/^https?:\/\//i.test(i.pictureUrl||"")?i.pictureUrl:"",role:i.role==="admin"?"admin":"member",cardAlerts:i.cardAlerts===!0,ids:[s.id]},l=t.get(a);l&&(c.ids=[...l.ids,s.id],c.cardAlerts=c.cardAlerts||l.cardAlerts),!l||!l.hasLine&&c.hasLine||!l.promptpay&&c.promptpay||!l.pictureUrl&&c.pictureUrl?t.set(a,c):(l.ids=c.ids,l.cardAlerts=c.cardAlerts)});const r=[...t.values()];return it("profiles",r),r}function Qp(n){try{Object.keys(localStorage).filter(e=>e.startsWith(Xt+"m:")&&e.endsWith(":"+n)).forEach(e=>localStorage.removeItem(e)),localStorage.removeItem(Xt+"w:"+n)}catch{}delete fn[n]}function Ur(){try{localStorage.removeItem(Xt+"profiles"),localStorage.removeItem(Xt+"members")}catch{}}async function Rh(n){return ye("/api/shortcut-transaction",{action:"wallet-delete",id:n})}async function $T(n){let e=0;for(let t=0;t<n.length;t+=50){const r=await ye("/api/shortcut-transaction",{action:"wallet-confirm",ids:n.slice(t,t+50)});e+=Number(r.confirmed)||0}return e}async function Aw(n){return(await ye("/api/shortcut-transaction",{action:"wallet-get",id:n})).item||null}async function zT(n){let e=0,t=0;for(let r=0;r<n.length;r+=50){const s=await ye("/api/shortcut-transaction",{action:"wallet-delete-many",ids:n.slice(r,r+50)});e+=Number(s.deleted)||0,t+=Array.isArray(s.failed)?s.failed.length:0}return{deleted:e,failed:t}}async function Sw(){return(await ht(Je(Re(ae,"subscription_templates"),...ks(),Ee("active","==",!0)))).docs.map(e=>({id:e.id,...e.data()}))}async function Rw(){const n="billsched:"+jo(),e=ft(n,Uo);if(e)return e;const[t,r]=await Promise.all([Sw(),fw().catch(()=>[])]),s={group:t.map(i=>({id:i.id,desc:i.desc,amount:i.amount,billingDay:i.billingDay,payer:i.payer,splits:i.splits,icon:i.icon,active:i.active,every:i.every,startMonth:i.startMonth})),personal:r.map(i=>({id:i.id,desc:i.desc,amount:i.amount,billingDay:i.billingDay,icon:i.icon,every:i.every,startMonth:i.startMonth}))};return it(n,s),s}function jr(){try{Object.keys(localStorage).filter(n=>n.startsWith(Xt+"billsched")).forEach(n=>localStorage.removeItem(n))}catch{}}const fn={},mi={};async function _a(n,{nowMonth:e="",force:t=!1,all:r=!1}={}){const s=p=>fn[p]&&fn[p].all===r&&Date.now()-fn[p].t<(p===e?3e5:Fo),i=t?n:n.filter(p=>!s(p)),a=JSON.stringify([i,r]);mi[a]||(mi[a]=ye("/api/shortcut-transaction",{action:"clear-plan",months:i,all:r}).finally(()=>{delete mi[a]}));const c=await mi[a],l={hide:c.hide===!0,super:c.super===!0};it("privacy",l),Object.entries(c.plans||{}).forEach(([p,m])=>{fn[p]={t:Date.now(),all:r,lines:m}});const d={};return n.forEach(p=>{fn[p]&&fn[p].all===r&&(d[p]=fn[p].lines)}),{...l,plans:d}}async function qT(n){const e=await ye("/api/shortcut-transaction",{action:"privacy-set",hide:!!n}),t=oo()||{};return it("privacy",{...t,hide:e.hide===!0}),e.message}async function WT(){let n=0,e=0;for(let t=0;t<5;t++){const r=await ye("/api/shortcut-transaction",{action:"privacy-backfill"});if(n+=Number(r.updated)||0,e=Math.max(e,Number(r.checked)||0),r.done)return{done:!0,updated:n,checked:e}}return{done:!1,updated:n,checked:e}}async function HT(n){const e=xo(n),t=[["tx","บิล",Je(Re(ae,"transactions"),Ee("people","array-contains",e),Ee("date",">=","2000-01-01"),Ee("date","<=","2999-12-31"),Bn(1))],["st","ประวัติเคลียร์เงิน",Je(Re(ae,"settlements"),Ee("people","array-contains",e),Ee("month","==","2000-01"),Bn(1))],["tpl","บิลรายเดือน",Je(Re(ae,"subscription_templates"),Ee("people","array-contains",e),Ee("active","==",!0),Bn(1))]];return Promise.all(t.map(async([r,s,i])=>{try{return await ht(i),{key:r,label:s,ok:!0,link:""}}catch(a){const c=String(a&&a.message||""),l=c.match(/https:\/\/console\.firebase\.google\.com\S+/);return{key:r,label:s,ok:!1,link:l?l[0]:"",error:a&&a.code==="failed-precondition"?"":c.slice(0,120)}}}))}async function GT(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc.trim().slice(0,100)||"บิลรายเดือน"),typeof e.icon=="string"&&(t.icon=e.icon),e.billingDay!==void 0&&(t.billingDay=Math.min(31,Math.max(1,Math.round(Number(e.billingDay))||1))),e.every!==void 0&&(t.every=[1,3,6,12].includes(Number(e.every))?Number(e.every):1,t.startMonth=Math.min(12,Math.max(1,Math.round(Number(e.startMonth))||1))),await nr(st(ae,"subscription_templates",String(n)),t),jr()}async function KT(n){await nr(st(ae,"subscription_templates",String(n)),{active:!1,stoppedAt:new Date}),jr()}async function kw(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc),typeof e.icon=="string"&&(t.icon=e.icon),await nr(st(ae,"transactions",String(n)),t)}async function QT(n){await xp(Re(ae,"members"),{name:n,createdAt:new Date().toISOString(),quickAdded:!0,role:"member"}),Ur()}async function XT(n,e){const t={realName:String(e.realName||""),promptpay:String(e.promptpay||""),role:e.role==="admin"?"admin":"member",realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date};await nr(st(ae,"members",String(n)),t),Ur()}async function YT(n){const e=n.name;if((await Promise.all([ht(Je(Re(ae,"transactions"),Ee("payer","==",e),Bn(1))),ht(Je(Re(ae,"transactions"),Ee(new xr("splits",e),">=",0),Bn(1))),ht(Je(Re(ae,"settlements"),Ee("from","==",e),Bn(1))),ht(Je(Re(ae,"settlements"),Ee("to","==",e),Bn(1)))])).some(r=>!r.empty))throw new Error(`ลบ ${e} ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน (ถ้าลบ ยอดหนี้ของคนอื่นจะคำนวณผิด)`);await tl(st(ae,"members",String(n.id))),Ur()}async function JT({from:n,to:e,amount:t,month:r,adminName:s}){await xp(Re(ae,"settlements"),{status:"verified",month:r,from:n,to:e,people:Np({from:n,to:e}),amount:Number(t),transactionIds:[],createdAt:new Date().toISOString(),verifiedByAdmin:!0,adminId:s||"unknown"})}async function ZT(n,e){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(e))throw new Error("เดือนไม่ถูกต้อง");await nr(st(ae,"settlements",String(n)),{month:e})}async function eI(n){await tl(st(ae,"settlements",String(n)))}async function tI(){return(await ye("/api/shortcut-transaction",{action:"admin-status"})).jobs||{debt:null,subs:null,cards:null}}async function nI(){return(await ye("/api/shortcut-transaction",{action:"group-summary"})).message||"ส่งแล้ว"}async function rI(){return(await ye("/api/shortcut-transaction",{action:"remind-all"})).message||"สั่งเตือนแล้ว"}async function sI(n){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(n))throw new Error("เดือนไม่ถูกต้อง");const e=await ht(Je(Re(ae,"transactions"),Ee("date",">=",`${n}-01`),Ee("date","<=",`${n}-31`))),t=new Map;e.docs.forEach(a=>t.set(a.id,a.ref));const r=[...new Set(e.docs.map(a=>a.data().groupId).filter(Boolean))];for(const a of r)(await ht(Je(Re(ae,"transactions"),Ee("groupId","==",a)))).docs.forEach(l=>t.set(l.id,l.ref));const s=await ht(Je(Re(ae,"settlements"),Ee("month","==",n))),i=[...t.values(),...s.docs.map(a=>a.ref)];for(let a=0;a<i.length;a+=400){const c=Fp(ae);i.slice(a,a+400).forEach(l=>c.delete(l)),await c.commit()}return Qp(n),{bills:t.size,settlements:s.docs.length}}async function Pw(n){await tl(st(ae,"transactions",String(n)))}async function iI(n,e){for(let t=0;t<n.length;t+=10)await Promise.all(n.slice(t,t+10).map(r=>kw(r,{icon:e})));return n.length}async function oI(n){for(let e=0;e<n.length;e+=10)await Promise.all(n.slice(e,e+10).map(t=>Pw(t)));return n.length}async function aI(n,e){await nr(st(ae,"members",String(n)),{...e,realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date}),Ur()}async function cI(n,{to:e,amount:t,month:r}){const s=await new Promise((l,d)=>{const p=new FileReader;p.onload=()=>l(String(p.result).split(",")[1]),p.onerror=()=>d(new Error("อ่านไฟล์รูปไม่สำเร็จ")),p.readAsDataURL(n)});if(Rs!=="in")throw so();const i=liff.getIDToken(),a=await fetch("/api/verify-settlement-slip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:i,to:e,amount:t,month:r,base64Image:s})});let c={};try{c=await a.json()}catch{}return{ok:a.ok&&c.success===!0,json:c,status:a.status}}function lI(){try{liff.logout()}catch{}try{bE(zn)}catch{}Ka(),location.href="/"}async function kh({docs:n,template:e}){const t=Fp(ae);n.forEach(r=>t.set(st(Re(ae,"transactions")),vh("transactions",r))),e&&t.set(st(Re(ae,"subscription_templates")),vh("subscription_templates",e)),await t.commit(),e&&jr()}(async()=>{try{if(typeof zn.authStateReady=="function"&&await zn.authStateReady(),zn.currentUser)return Zc();const n=Lo();if(!n)return;const e=await fetch("/api/device-token?firebase=1",{headers:{Authorization:"Bearer "+n.token}}),t=await e.json().catch(()=>({}));e.ok&&t.success&&t.member&&await el(t.firebaseToken,t.member.id)}catch(n){console.warn("firebase pass:",n&&n.message)}})();const Ph=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},Ch=60;function Cw(n,e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));if(!t)throw new Error("รูปแบบวันที่ไม่ถูกต้อง");const r=Number(t[1]),s=Number(t[2])-1,i=Number(t[3]),a=r*12+s+Number(e),c=Math.floor(a/12),l=a-c*12,d=new Date(Date.UTC(c,l+1,0)).getUTCDate(),p=Math.min(i,d);return`${String(c).padStart(4,"0")}-${String(l+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`}function Dw({amount:n,installments:e,splits:t,date:r}){const s=Number(e);if(!Number.isInteger(s)||s<1||s>Ch)throw new Error(`จำนวนงวดต้องเป็นเลข 1–${Ch}`);const i=Object.keys(t||{});if(i.length===0)throw new Error("ไม่มีผู้ร่วมจ่าย");const a=Ph(n);if(a<=0)throw new Error("ยอดเงินไม่ถูกต้อง");const c=i.map(p=>[p,Ph(t[p])]),l=a-c.reduce((p,[,m])=>p+m,0);if(l!==0){let p=0;c.forEach(([,m],_)=>{m>c[p][1]&&(p=_)}),c[p][1]+=l}const d=[];for(let p=0;p<s;p++){const m={};let _=0;for(const[b,k]of c){const D=Math.floor(k/s),S=p<k-D*s?1:0;m[b]=(D+S)/100,_+=D+S}d.push({index:p+1,date:Cw(r,p),amount:_/100,splits:m})}return d}const Dh=ud.map(n=>n.key),uI=["plane","shield","home","phone","car","gift","heart","star"],hI=["accent","sun","receive","accent2","navy"],Mw=80,Vw=/^\d{4}-(0[1-9]|1[0-2])$/,qn=n=>Math.round((Number(n)||0)*100),Mh=n=>typeof n=="string"&&Vw.test(n),Vh=n=>!!(n&&(Number(n.total)>0||Object.values(n.cats||{}).some(e=>Number(e)>0)));function Nw(n,e){const t=n||{},r=t.months&&t.months[e];return Vh(r)?{total:Number(r.total)||0,cats:{...r.cats||{}},source:"month"}:Vh(t.budget)?{total:Number(t.budget.total)||0,cats:{...t.budget.cats||{}},source:"default"}:{total:0,cats:{},source:"none"}}function Nh(n,e){return e>0?n>e?"over":n/e*100>=Mw?"near":"ok":"none"}const Qa=(n,e)=>e>0?Math.round(n/e*100):0;function Ow(n,e){const t=n||{total:0,cats:{},source:"none"},r=Object.fromEntries(Dh.map(d=>[d,qn((t.cats||{})[d])])),s=Object.values(r).reduce((d,p)=>d+p,0),i=qn(t.total)>0?qn(t.total):s,a=Math.max(0,Math.round(Number(e&&e.totalSat)||0)),c=e&&e.cats||{},l=Dh.filter(d=>r[d]>0).map(d=>{const p=Math.max(0,Math.round(Number(c[d])||0));return{key:d,budgetSat:r[d],spentSat:p,leftSat:r[d]-p,percent:Qa(p,r[d]),level:Nh(p,r[d])}});return{set:i>0,source:t.source||"none",budgetSat:i,spentSat:a,leftSat:i-a,percent:Qa(a,i),level:Nh(a,i),cats:l,unassignedSat:Math.max(0,i-s)}}function Lw(n,e){if(!Mh(n)||!Mh(e))return 0;const[t,r]=n.split("-").map(Number),[s,i]=e.split("-").map(Number);return Math.max(0,(s-t)*12+(i-r)+1)}function xw(n,e){return(n&&Array.isArray(n.log)?n.log:[]).filter(t=>String(t.date).startsWith(e)).reduce((t,r)=>t+qn(r.amount),0)}function Xp(n,e){const t=n||{},r=qn(t.target),s=qn(t.saved),i=Math.max(0,r-s),a=r>0&&s>=r,c=t.deadline?Lw(e,t.deadline):0,l=!!t.deadline&&c===0&&!a;let d=0;return a||(d=t.deadline?c>0?Math.ceil(i/c/100)*100:i:qn(t.monthly)),{targetSat:r,savedSat:s,remainingSat:i,percent:Math.min(100,Qa(s,r)),done:a,monthsLeft:c,late:l,perMonthSat:d,thisMonthSat:xw(t,e)}}function Yp(n,e){let t=0,r=0;for(const s of n||[]){const i=Xp(s,e);i.done||(t+=i.perMonthSat),r+=i.thisMonthSat}return{planSat:t,doneSat:Math.max(0,r)}}function Fw(n,e,t){const r=Math.max(0,Math.round(Number(n)||0)-Yp(e,t).planSat);return Math.floor(r/1e4)*1e4}const Uw=[1,3,6,12],jw=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function Dr(n){const e=Number(n&&n.every);return Uw.includes(e)?e:1}function ao(n){const e=Number(n&&n.startMonth);return Number.isInteger(e)&&e>=1&&e<=12?e:1}function Xa(n,e){const t=Dr(n);return t===1?!0:((Number(String(e).slice(5,7))-ao(n))%t+t)%t===0}function dI(n){return Array.from({length:12},(e,t)=>t+1).filter(e=>Xa(n,`2000-${String(e).padStart(2,"0")}`))}const fI=n=>12/Dr(n);function pI(n){const e=Dr(n),t=Math.min(31,Math.max(1,Number(n&&n.billingDay)||1));return e===1?`ทุกวันที่ ${t}`:e===12?`ทุกปี ${t} ${jw[ao(n)-1]}`:`ทุก ${e} เดือน วันที่ ${t}`}function Bw(n){const e=Dr(n);return e===1?"":e===12?"ทุกปี":`ทุก ${e} เดือน`}const co=ud.map(n=>({key:n.key,label:n.label,icons:n.icons}));function $w(n){const e=co.find(t=>t.icons.includes(n));return e?e.key:"other"}const Oh=n=>String(n||"").slice(0,7);function Lh({name:n,month:e,today:t="",members:r,transactions:s,settlements:i,walletItems:a=[],planLines:c=null}){const l=ue(n),d=Dp({memberNames:r,transactions:s,settlements:i,month:e}),p=Jc({name:l,month:e,walletEntries:a.map(g=>({ownerName:l,type:g.type,amount:g.amount,date:g.date})),transactions:s,settlements:i}),m=Object.fromEntries(co.map(g=>[g.key,0])),_={},b={},k=(g,W,ze,pt,Nt)=>{if(!pt||!String(g).startsWith(e))return;m[$w(ze)]+=pt;const et=Number(String(g).slice(8,10));_[et]=(_[et]||0)+pt,b[et]||(b[et]=[]),b[et].push({desc:W||"ไม่ระบุ",icon:ze,satang:pt,kind:Nt})};for(const g of s)!g||Oh(g.date)!==e||k(g.date,g.desc,g.icon,ro(g,l),"group");for(const g of a)g.type==="expense"&&k(g.date,g.desc,g.icon,Math.round(Number(g.amount)*100),"personal");const D=Object.values(m).reduce((g,W)=>g+W,0),S=co.map(g=>({key:g.key,label:g.label,satang:m[g.key],percent:D>0?Math.round(m[g.key]/D*100):0})).filter(g=>g.satang>0).sort((g,W)=>W.satang-g.satang),V=t.startsWith(e)?Number(t.slice(8,10)):Mr(e),F=[];for(let g=1;g<=V;g++)F.push({day:g,satang:_[g]||0,today:t===`${e}-${String(g).padStart(2,"0")}`,items:b[g]||[]});const B=Mr(e),Q=[];for(let g=1;g<=B;g++)Q.push({day:g,date:`${e}-${String(g).padStart(2,"0")}`,satang:_[g]||0,today:t===`${e}-${String(g).padStart(2,"0")}`,isFuture:t.startsWith(e)&&g>Number(t.slice(8,10)),items:b[g]||[]});const J=p.expenseTotal,te=V>0?Math.round(J/V/100):0,w=c||Mp(d.plan),v=w.filter(g=>g.to===l).map(g=>({name:g.from,amount:g.amount})).sort((g,W)=>W.amount-g.amount),E=w.filter(g=>g.from===l).map(g=>({name:g.to,amount:g.amount})).sort((g,W)=>W.amount-g.amount),T=v[0]?v[0].amount:0;v.forEach(g=>{g.share=T?Math.round(g.amount/T*100):0});const A=E[0]?E[0].amount:0;E.forEach(g=>{g.share=A?Math.round(g.amount/A*100):0});const R=[];for(const g of s){if(!g||Oh(g.date)!==e)continue;const W=ro(g,l);(W>0||kp(g,l)>0)&&R.push({id:g.id,kind:"group",desc:g.desc||"",icon:g.icon,satang:W,date:g.date,ts:Number(g.timestamp)||0})}for(const g of a)String(g.date).startsWith(e)&&R.push({id:g.id,kind:g.type==="income"?"income":"personal",desc:g.desc||"",icon:g.icon,satang:Math.round(Number(g.amount)*100),date:g.date,ts:Number(g.timestamp)||0});return R.sort((g,W)=>W.date.localeCompare(g.date)||W.ts-g.ts),{month:e,incomeSat:p.income,spentSat:J,personalSat:p.personalExpense,groupShareSat:p.groupShare,netSat:p.net,net:Rp(p.net),spentPercent:p.income>0?Math.min(999,Math.round(J/p.income*100)):null,receivedBackSat:p.receivedBack,categories:S,daily:F,calendarDays:Q,average:te,owedToMe:v,owedTotal:v.reduce((g,W)=>g+W.amount,0),iOwe:E,iOweTotal:E.reduce((g,W)=>g+W.amount,0),recent:R.slice(0,5),warnings:d.warnings}}function xh(n,e,t=""){const r=e.month,s={};for(const d of e.categories||[])s[d.key]=d.satang;const i=Ow(Nw(n||{},r),{totalSat:e.spentSat,cats:s}),a=(n&&n.goals||[]).map(d=>({...d,s:Xp(d,r)})),c=t.startsWith(r),l=c?Mr(r)-Number(t.slice(8,10))+1:0;return{month:r,status:i,goals:a,saving:Yp(a,r),suggestSat:Fw(e.incomeSat,a,r),daysLeft:l,perDaySat:c&&i.leftSat>0&&l>0?Math.floor(i.leftSat/l/100)*100:0}}function zw({me:n,month:e,today:t,group:r=[],personal:s=[],cards:i=[]}){const a=ue(n),c=S=>Math.round((Number(S)||0)*100),l=[];for(const S of r){if(!S||S.active===!1)continue;const V=S.splits&&typeof S.splits=="object"?S.splits:{},F=Object.keys(V).find(Q=>ue(Q)===a),B=ue(S.payer);!F&&B!==a||l.push({id:"g:"+S.id,kind:"group",desc:String(S.desc||"บิลรายเดือน"),icon:S.icon||"",billingDay:Number(S.billingDay)||1,mySat:F?c(V[F]):0,totalSat:c(S.amount),payer:B,people:Object.keys(V).length,names:Object.keys(V).map(ue),coverFor:!F,every:Dr(S),startMonth:ao(S)})}for(const S of s)!S||S.active===!1||l.push({id:"p:"+S.id,kind:"personal",desc:String(S.desc||"รายจ่ายรายเดือน"),icon:S.icon||"",billingDay:Number(S.billingDay)||1,mySat:c(S.amount),totalSat:c(S.amount),payer:a,people:1,coverFor:!1,every:Dr(S),startMonth:ao(S)});const d=(S,V)=>Math.min(Math.max(1,Math.round(V)||1),Mr(S)),p=(S,V)=>{const F=`${V}-${String(d(V,S.billingDay)).padStart(2,"0")}`,B=Math.round((Date.parse(F+"T00:00:00Z")-Date.parse(t+"T00:00:00Z"))/864e5);return{...S,date:F,day:Number(F.slice(8,10)),daysLeft:B,status:B<0?"done":B===0?"today":"soon"}},m=Ww(i,t),_=[...l.filter(S=>Xa(S,e)).map(S=>p(S,e)),...m.filter(S=>S.date.startsWith(e))].sort((S,V)=>S.day-V.day||S.desc.localeCompare(V.desc)),b=t.slice(0,7),k=[...[b,At(b,1),At(b,2)].flatMap(S=>l.filter(V=>Xa(V,S)).map(V=>p(V,S))),...m].filter(S=>S.daysLeft>=0).sort((S,V)=>S.daysLeft-V.daysLeft||V.mySat-S.mySat),D=_.filter(S=>S.kind!=="card");return{month:e,items:_,totalSat:D.reduce((S,V)=>S+V.mySat,0),dueSat:D.filter(S=>S.daysLeft>=0).reduce((S,V)=>S+V.mySat,0),upcoming:k}}function qw(n){const e=n&&n.bank&&n.bank!=="อื่นๆ"?n.bank:"บัตร";return n&&n.last4?`${e} •• ${n.last4}`:e}function ga(n){return`${Number(n.slice(8,10))} ${Jn(n.slice(0,7))}`}function Ww(n,e){const t=[];for(const r of n||[]){const s=(i,a)=>{const c=Math.round((Date.parse(i.dueDate+"T00:00:00Z")-Date.parse(e+"T00:00:00Z"))/864e5);t.push({id:`c:${r.id}:${i.key}`,kind:"card",cardId:r.id,color:r.color,desc:qw(r),icon:"fa-credit-card",date:i.dueDate,day:Number(i.dueDate.slice(8,10)),billingDay:r.dueDay,daysLeft:c,status:c<0?"done":c===0?"today":"soon",mySat:Number(i.amountSat)||0,totalSat:Number(i.amountSat)||0,start:i.start,end:i.end,pending:a,people:1,coverFor:!1})};r.due&&!r.due.paid&&s(r.due,!1),r.open&&s(r.open,!0)}return t}function Hw(n,e){if(n.kind==="card")return n.pending?`ยังไม่ตัดรอบ (ตัดรอบ ${ga(n.end)})`:`ยอดรอบ ${ga(n.start)} - ${ga(n.end)}`;if(n.kind==="personal")return"ส่วนตัว";const t=n.payer===ue(e);return n.coverFor?"คุณจ่ายแทน":t?`คุณจ่าย หาร ${n.people}`:`${n.payer} จ่าย หาร ${n.people}`}function Mr(n){const[e,t]=n.split("-").map(Number);return new Date(Date.UTC(e,t,0)).getUTCDate()}function At(n,e){const[t,r]=n.split("-").map(Number),s=t*12+(r-1)+e,i=Math.floor(s/12);return`${i}-${String(s-i*12+1).padStart(2,"0")}`}const zs=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],Gw=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];function Jp(n){const[e,t]=n.split("-").map(Number);return`${zs[t-1]} ${e+543}`}function rl(n){const[e,t]=n.split("-").map(Number);return`${Gw[t-1]} ${e+543}`}function re(n,{decimals:e=0,sign:t=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return`${r<0?"-":t&&r>0?"+":""}฿${s}`}function Kw({name:n,months:e,transactions:t,settlements:r,walletItems:s=[]}){const i=ue(n),a=s.map(c=>({ownerName:i,type:c.type,amount:c.amount,date:c.date}));return e.map(c=>{const l=Jc({name:i,month:c,walletEntries:a,transactions:t,settlements:r});return{month:c,spentSat:l.expenseTotal,incomeSat:l.income}})}function Fh(n,e){return Array.from({length:e},(t,r)=>At(n,r-(e-1)))}function Jn(n){return zs[Number(n.slice(5,7))-1]}function mI(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10?e.slice(0,6)+"XXXX":e.length===13?"X-XXXX-XXXXX-"+e.slice(11,13)+"-X":e}function Zp(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10||e.length===13?e:""}function _I(n,e){const t=Zp(n);return!t||!(Number(e)>0)?"":`https://promptpay.io/${t}/${Number(e).toFixed(2)}`}function Qw({name:n,month:e,members:t,transactions:r,settlements:s,planLines:i=null}){const a=ue(n),l=(i||Mp(Dp({memberNames:t,transactions:r,settlements:s,month:e}).plan)).map(m=>({from:m.from,to:m.to,amount:m.amount,role:m.from===a?"pay":m.to===a?"receive":"other"})),d={pay:0,receive:1,other:2};l.sort((m,_)=>d[m.role]-d[_.role]||_.amount-m.amount);const p=(s||[]).filter(m=>m&&m.status==="verified"&&m.month===e).map(m=>({id:m.id,from:m.from,to:m.to,amount:Number(m.amount)||0,manual:!!m.verifiedByAdmin,createdAt:m.createdAt||""})).sort((m,_)=>String(_.createdAt).localeCompare(String(m.createdAt)));return{lines:l,history:p,mineToPay:l.filter(m=>m.role==="pay"),mineToReceive:l.filter(m=>m.role==="receive"),cleared:l.length===0}}function Xw({name:n,month:e,walletItems:t,transactions:r,settlements:s}){const i=ue(n),a=Jc({name:i,month:e,walletEntries:t.map(l=>({ownerName:i,type:l.type,amount:l.amount,date:l.date})),transactions:r,settlements:s}),c=t.filter(l=>String(l.date).startsWith(e)).sort((l,d)=>d.date.localeCompare(l.date)||(Number(d.timestamp)||0)-(Number(l.timestamp)||0)).map(l=>({id:l.id,type:l.type==="income"?"income":"expense",desc:l.desc||"",amount:Number(l.amount)||0,date:l.date,icon:l.icon||"",card:l.card||"",unconfirmed:l.unconfirmed===!0,recurring:l.recurring===!0||String(l.id||"").startsWith("wsub_"),ts:Number(l.timestamp)||0}));return{incomeSat:a.income,personalSat:a.personalExpense,groupShareSat:a.groupShare,spentSat:a.expenseTotal,netSat:a.net,receivedBackSat:a.receivedBack,paidBackSat:a.paidBack,items:c}}function Yw({name:n,month:e,transactions:t,search:r=""}){const s=ue(n),i=String(r||"").trim().toUpperCase(),a=t.filter(l=>l&&String(l.date||"").startsWith(e)).map(l=>({id:l.id,desc:l.desc||"",date:l.date,icon:l.icon||"",payer:l.payer||"",amountSat:Jw(l.amount),myShareSat:ro(l,s),iPaid:ue(l.payer)===s,people:Object.keys(l.splits||{}),type:l.paymentType||"normal",ts:Number(l.timestamp)||0})).filter(l=>!i||l.desc.toUpperCase().includes(i)||ue(l.payer).includes(i)).sort((l,d)=>d.date.localeCompare(l.date)||d.ts-l.ts),c=a.filter(l=>l.myShareSat>0||l.iPaid);return{all:a,mine:c,totalSat:a.reduce((l,d)=>l+d.amountSat,0),myShareSat:c.reduce((l,d)=>l+d.myShareSat,0)}}const Jw=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},gI=ho.map(n=>({key:n.key,label:n.label,fa:n.fa,icon:n.icon,group:n.group})),yI=zm;function Zw({me:n,members:e,transactions:t,limit:r=6}){const s=ue(n),i=new Set((e||[]).map(ue)),a=new Map;for(const c of t||[]){const l=new Set(Object.keys(c&&c.splits||{}).map(ue));l.add(ue(c&&c.payer)),l.has(s)&&l.forEach(d=>{d&&d!==s&&i.has(d)&&a.set(d,(a.get(d)||0)+1)})}return[...a.entries()].sort((c,l)=>l[1]-c[1]||(c[0]<l[0]?-1:1)).slice(0,r).map(([c])=>c)}function eT(n,e){const t=Math.round(Number(n)*100),r=e.length,s=Math.floor(t/r),i=t-s*r;return Object.fromEntries(e.map((a,c)=>[a,(s+(c<i?1:0))/100]))}function vI(n){const e=Math.round(Number(n.amount)*100)/100;if(!Number.isFinite(e)||e<=0)return{ok:!1,error:"ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"};if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date||""))return{ok:!1,error:"เลือกวันที่ให้ถูกต้อง"};if(n.today&&n.date>n.today)return{ok:!1,error:"เลือกวันที่ไม่เกินวันนี้"};const t=ue(n.payer);if(!t)return{ok:!1,error:"เลือกคนจ่าย"};const r=[...new Set((n.participants||[]).map(ue).filter(Boolean))];if(r.length===0)return{ok:!1,error:"เลือกคนหารอย่างน้อย 1 คน"};if(r.length===1&&r[0]===t)return{ok:!1,error:"บิลที่มีแต่ตัวเองคนเดียวไม่ต้องหาร ให้ใช้รายจ่ายส่วนตัวแทน"};let s;if(n.mode==="custom"){s={};let d=0;for(const m of r){const _=Math.round(Number((n.custom||{})[m])*100);if(!Number.isFinite(_)||_<=0)return{ok:!1,error:`ใส่ยอดของ ${m} ให้มากกว่า 0 (หรือเอาออกจากคนหาร)`};s[m]=_/100,d+=_}const p=Math.round(e*100)-d;if(p!==0)return{ok:!1,error:`ยอดที่แบ่งรวมกัน ${re(d/100,{decimals:2})} ไม่เท่ายอดบิล ${re(e,{decimals:2})} (${p>0?"ขาด":"เกิน"} ${re(Math.abs(p)/100,{decimals:2})})`}}else{const d=r.includes(t)?[...r.filter(p=>p!==t),t]:r;s=eT(e,d)}const i=String(n.desc||"").trim().slice(0,100)||"ไม่ระบุ",a=n.icon||"fa-money-bill",c=n.now||Date.now(),l={payer:t,icon:a};if(n.type==="installment"){const d=Number(n.installments);let p;try{p=Dw({amount:e,installments:d,splits:s,date:n.date})}catch(_){return{ok:!1,error:_.message}}const m=`grp_${c}`;return{ok:!0,docs:p.map((_,b)=>({...l,date:_.date,desc:`${i} (${_.index}/${d})`,amount:_.amount,splits:_.splits,paymentType:"installment",groupId:m,timestamp:c+b})),template:null,summary:`ผ่อน ${d} งวด งวดละประมาณ ${re(e/d,{decimals:2})}`}}if(n.type==="subscription"){const d=`sub_${c}`,p=n.recurring!==!1,m=[1,3,6,12].includes(Number(n.every))?Number(n.every):1,_={...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"subscription",subscriptionRecurring:p,subscriptionStartDate:n.date,groupId:d,timestamp:c},b=p?{desc:i,amount:e,payer:t,splits:s,icon:a,billingDay:Number(n.date.slice(8,10))||1,groupId:d,active:!0,createdAt:new Date(c),createdBy:t,lastGeneratedMonth:n.date.slice(0,7),every:m,startMonth:Number(n.date.slice(5,7))||1}:null,k=m===1?"ทุกเดือน":m===12?"ทุกปี":`ทุก ${m} เดือน`;return{ok:!0,docs:[_],template:b,summary:p?`สร้างซ้ำ${k}อัตโนมัติ`:"ครั้งเดียว"}}return{ok:!0,docs:[{...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"normal",timestamp:c}],template:null,summary:r.includes(t)?`หารกับเพื่อน ${r.length} คน (รวมผู้จ่าย)`:`จ่ายแทน ${r.length} คน (ไม่มีส่วนของผู้จ่าย)`}}const _i=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"list",label:"รายการ",icon:"list"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"me",label:"ฉัน",icon:"user"}],tT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];function em({month:n,today:e}){if(!n)return null;const t=e&&e.startsWith(n),r=t?Number(e.slice(8,10)):Mr(n),[s,i]=n.split("-").map(Number),a=t?tT[new Date(Date.UTC(s,i-1,r)).getUTCDay()]:"ทั้งเดือน";return h("span",{class:"dtile","aria-hidden":"true",children:[h("span",{class:"m",children:Jn(n)}),h("span",{class:"d num",children:r}),h("span",{class:"w",children:a})]})}const Uh=["home","list","clear","me"];function nT({page:n,children:e}){const t=Li(n),r=t.current;de(()=>{t.current=n},[n]);const s=r===n?"":Uh.indexOf(n)>Uh.indexOf(r)?"dir-r":"dir-l";return h("div",{class:`page-swap ${s}`.trim(),children:e},n)}function rT({month:n,onChange:e,min:t,max:r}){return h("div",{class:"month-wrap",children:[n!==r&&h("button",{type:"button",class:"btn sm ghost",onClick:()=>e(r),children:"เดือนนี้"}),h("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[h("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=t,onClick:()=>e(At(n,-1)),children:h(Z,{name:"left",size:16})}),h("span",{class:"num","aria-live":"polite",children:Jp(n)}),h("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>e(At(n,1)),children:h(Z,{name:"right",size:16})})]})]})}function tm({icon:n,title:e,note:t}){return h("div",{class:"sec-t",children:[h("span",{class:"ico",children:h(Z,{name:n})}),h("div",{children:[h("h2",{children:e}),t&&h("p",{children:t})]})]})}function sT(n){let e=0;for(const t of String(n||""))e=(e*31+t.codePointAt(0))%997;return e%5}const iT=({name:n,pictures:e={}})=>h("span",{class:"payer-av",title:`${n} จ่าย`,children:h(sl,{name:n,pictureUrl:e[n],size:"xs"})}),oT=({payer:n,people:e=[],pictures:t={}})=>h("span",{class:"flow","aria-label":`${n} จ่าย หารกับ ${e.join(", ")}`,children:[h(iT,{name:n,pictures:t}),h(Z,{name:"right",size:12,class:"flow-arr"}),h(Ya,{names:e,pictures:t,max:3,size:"xs"})]});function Ya({names:n=[],pictures:e={},max:t=3,size:r="sm"}){const s=n.slice(0,t);return h("span",{class:"avstack","aria-hidden":"true",children:[s.map(i=>h(sl,{name:i,pictureUrl:e[i],size:r},i)),n.length>t&&h("span",{class:"avstack-more num",children:["+",n.length-t]})]})}function sl({name:n,pictureUrl:e,size:t=""}){const[r,s]=ee(!1),i=[...String(n||"?")][0],a=`av tint${sT(n)} ${t}`.trim();return e&&!r?h("img",{src:e,alt:n?`รูปของ ${n}`:"",class:a,onError:()=>s(!0),loading:"lazy"}):h("div",{class:a,"aria-hidden":"true",children:i})}function aT(){const[n,e]=ee(()=>{if(typeof document>"u")return"light";const s=localStorage.getItem("dm:theme");return s==="dark"||s==="light"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),t=()=>{const s=n==="dark"?"light":"dark";e(s),document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("dm:theme",s)}catch{}},r=n==="dark";return h("button",{type:"button",class:"theme-toggle","aria-label":r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",title:r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",onClick:t,children:h(Z,{name:r?"sun":"moon",size:18})})}function EI({label:n,value:e,options:t,onChange:r,icon:s="calendar",title:i,id:a}){const[c,l]=ee(!1),d=(t||[]).find(p=>p.value===e)||t&&t[0]||{};return h("div",{class:"field",children:[n&&h("label",{for:a,children:n}),h("button",{type:"button",id:a,class:"c-select-trigger",onClick:()=>l(!0),"aria-haspopup":"dialog",children:[s&&h("span",{class:"ico sm",children:h(Z,{name:s,size:16})}),h("span",{class:"c-select-val num",children:d.label||e}),h(Z,{name:"down",size:16,class:"mute"})]}),c&&h(nm,{title:i||n||"เลือกรายการ",onClose:()=>l(!1),children:h("div",{class:"c-select-list",children:(t||[]).map(p=>{const m=p.value===e;return h("button",{type:"button",class:`c-select-item ${m?"on":""}`,onClick:()=>{r(p.value),l(!1)},children:[h("span",{class:"c-select-item-text num",children:p.label}),m&&h(Z,{name:"check",size:18,class:"rcv"})]},p.value)})})})]})}function cT({value:n,max:e,today:t,onSelect:r,onClose:s}){const[i,a]=ee(()=>(n||t).slice(0,7)),[c,l]=ee(n||t),[d,p]=i.split("-").map(Number),m=Mr(i),_=new Date(Date.UTC(d,p-1,1)).getUTCDay(),b=[];for(let D=0;D<_;D++)b.push(null);for(let D=1;D<=m;D++)b.push(`${i}-${String(D).padStart(2,"0")}`);const k=["อา","จ","อ","พ","พฤ","ศ","ส"];return h(nm,{title:"ปฏิทิน",onClose:s,children:h("div",{class:"cal-box",children:[h("div",{class:"cal-hd",children:[h("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",onClick:()=>a(At(i,-1)),children:h(Z,{name:"left",size:16})}),h("span",{class:"cal-month-title num",children:rl(i)}),h("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e&&At(i,1).slice(0,7)>e.slice(0,7),onClick:()=>a(At(i,1)),children:h(Z,{name:"right",size:16})})]}),h("div",{class:"cal-grid",role:"grid",children:[h("div",{class:"cal-dow-row",role:"row",children:k.map(D=>h("span",{class:"cal-dow",role:"columnheader",children:D},D))}),h("div",{class:"cal-days-grid",children:b.map((D,S)=>{if(!D)return h("span",{class:"cal-day empty"},`empty-${S}`);const V=Number(D.slice(8,10)),F=D===t,B=D===c,Q=e&&D>e;return h("button",{type:"button",class:`cal-day-btn num ${B?"on":""} ${F?"today":""}`,disabled:Q,onClick:()=>l(D),children:V},D)})})]}),h("div",{class:"cal-actions",children:[h("button",{type:"button",class:"btn ghost",onClick:()=>{l(t),a(t.slice(0,7))},children:"วันนี้"}),h("button",{type:"button",class:"btn",onClick:()=>r(c),children:["ยืนยัน (",Number(c.slice(8,10))," ",zs[Number(c.slice(5,7))-1],")"]})]})]})})}function bI({id:n,label:e="วันที่",value:t,onChange:r,max:s,today:i}){const[a,c]=ee(!1),[l,d,p]=i.split("-").map(Number),m=new Date(Date.UTC(l,d-1,p-1)),_=`${m.getUTCFullYear()}-${String(m.getUTCMonth()+1).padStart(2,"0")}-${String(m.getUTCDate()).padStart(2,"0")}`,b=t===i,k=t===_,[D,S,V]=(t||i).split("-").map(Number),F=D+543,B=zs[S-1]||"",Q=b?`วันนี้ · ${V} ${B} ${F}`:k?`เมื่อวาน · ${V} ${B} ${F}`:`${V} ${B} ${F}`;return h("div",{class:"field",children:[h("span",{class:"fl",id:`${n}-l`,children:e}),h("div",{class:"date-pick-wrap",children:[h("button",{type:"button",id:n,class:"date-trigger","aria-labelledby":`${n}-l`,onClick:()=>c(!0),children:[h("span",{class:"ico sm",children:h(Z,{name:"calendar",size:16})}),h("span",{class:"date-trigger-text num",children:Q}),h("span",{class:"date-trigger-tag",children:"ปฏิทิน"})]}),h("div",{class:"date-quick-chips",children:[h("button",{type:"button",class:`date-quick-btn ${b?"on":""}`,onClick:()=>r(i),children:"วันนี้"}),h("button",{type:"button",class:`date-quick-btn ${k?"on":""}`,onClick:()=>r(_),children:"เมื่อวาน"}),h("button",{type:"button",class:`date-quick-btn ${!b&&!k?"on":""}`,onClick:()=>c(!0),children:"แก้ไขวันที่"})]})]}),a&&h(cT,{value:t||i,max:s||i,today:i,onSelect:J=>{r(J),c(!1)},onClose:()=>c(!1)})]})}const is=[];function nm({title:n,onClose:e,children:t,as:r="div",onSubmit:s,action:i,class:a=""}){const c=Li(null);return de(()=>{const d=document.activeElement,p={};is.push(p);const m=k=>{k.key==="Escape"&&is[is.length-1]===p&&e()};document.addEventListener("keydown",m);const _=document.body.style.overflow;return document.body.style.overflow="hidden",(c.current&&c.current.querySelector("input, select, textarea")||c.current).focus({preventScroll:!0}),()=>{const k=is.indexOf(p);k>=0&&is.splice(k,1),document.removeEventListener("keydown",m),document.body.style.overflow=_,d&&d.focus&&d.focus({preventScroll:!0})}},[]),h("div",{class:"scrim",onClick:d=>d.target===d.currentTarget&&e(),children:h(r,{class:`sheet ${a}`.trim(),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:c,onSubmit:s,children:[h("div",{class:"grab","aria-hidden":"true"}),h("div",{class:"sheet-hd",children:[h("h2",{children:n}),i,h("button",{type:"button",class:"icon-btn",onClick:e,"aria-label":"ปิด",children:h(Z,{name:"close",size:18})})]}),t]})})}function wI({label:n,onConfirm:e,verb:t="ลบ",busyText:r="กำลังลบ",keepText:s="ยกเลิก",icon:i="trash",danger:a=!0}){const[c,l]=ee("idle");return de(()=>{if(c!=="confirm")return;const d=setTimeout(()=>l("idle"),5e3);return()=>clearTimeout(d)},[c]),c==="idle"?h("button",{type:"button",class:"icon-btn","aria-label":`${t} ${n}`,onClick:()=>l("confirm"),children:h(Z,{name:i,size:17})}):h("span",{class:"confirm",children:[h("button",{type:"button",class:`btn sm ${a?"danger":""}`,disabled:c==="busy",onClick:async()=>{l("busy");try{await e()}finally{l("idle")}},children:c==="busy"?r:t}),h("button",{type:"button",class:"btn sm ghost",disabled:c==="busy",onClick:()=>l("idle"),children:s})]})}function lt({load:n,name:e,fallback:t=null,...r}){const[s,i]=ee(null);if(de(()=>{let c=!0;return n().then(l=>{c&&l&&l[e]&&i({name:e,C:l[e]})}).catch(()=>{}),()=>{c=!1}},[e]),!s||s.name!==e)return t;const a=s.C;return h(a,{...r})}function TI({icon:n,title:e,summary:t,children:r,defaultOpen:s=!1}){const[i,a]=ee(s);return h("section",{class:"card collapsible",children:[h("button",{type:"button",class:"coll-head","aria-expanded":i,onClick:()=>a(!i),children:[h("span",{class:"ico accent",children:h(Z,{name:n})}),h("span",{class:"grow",children:[h("b",{children:e}),h("small",{children:t})]}),h(Z,{name:"down",size:16,class:`coll-chev ${i?"up":""}`})]}),i&&h("div",{class:"coll-body",children:r})]})}function Fn({blocks:n=3}){return h("div",{class:"home-grid","aria-busy":"true","aria-label":"กำลังโหลดข้อมูล",children:[h("div",{class:"col",children:Array.from({length:Math.ceil(n/2)},(e,t)=>h("div",{class:"card sk",style:{height:t===0?"168px":"220px"}},t))}),h("div",{class:"col",children:Array.from({length:Math.floor(n/2)},(e,t)=>h("div",{class:"card sk",style:{height:"200px"}},t))})]})}function lT({onRetry:n}){return h("div",{class:"card state",role:"alert",children:[h("span",{class:"ico",children:h(Z,{name:"alert"})}),h("div",{children:[h("b",{children:"โหลดข้อมูลไม่สำเร็จ"}),h("p",{children:"ตรวจอินเทอร์เน็ตแล้วลองใหม่ ถ้ายังไม่ได้ อาจเป็นเพราะโควต้าฐานข้อมูลของวันนี้เต็ม"})]}),h("button",{type:"button",class:"btn sm",onClick:n,children:"ลองใหม่"})]})}function uT({tab:n,onTab:e,userName:t,userPicture:r,tools:s,onAdd:i,children:a}){const c=(_i.find(l=>l.key===n)||_i[0]).label;return h("div",{class:"app",children:[h("a",{class:"skip",href:"#main",children:"ข้ามไปเนื้อหา"}),h("aside",{class:"side",children:[h("div",{class:"brand",children:[h(su,{size:34}),"Dept Money"]}),h("nav",{"aria-label":"เมนูหลัก",children:_i.map(l=>h("button",{type:"button",class:`snav ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[h(Z,{name:l.icon}),l.label]},l.key))}),h("button",{type:"button",class:"btn side-add",onClick:i,children:[h(Z,{name:"plus"}),"บันทึกรายการ"]}),h("div",{class:"side-me",children:[h(sl,{name:t,pictureUrl:r}),h("span",{children:t})]})]}),h("main",{class:"page",id:"main",children:[h("header",{class:"top",children:[h("div",{class:"brand mobile-only","aria-hidden":"true",children:[h(su,{size:30}),"Dept Money"]}),h("h1",{class:"page-title",children:c}),h("div",{class:"top-actions",children:[s,h(aT,{})]})]}),a]}),h("button",{type:"button",class:"fab",onClick:i,children:[h(Z,{name:"plus"}),"บันทึก"]}),h("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:h("div",{class:"tabbar-in",children:_i.map(l=>h("button",{type:"button",class:`tab ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[h(Z,{name:l.icon}),l.label]},l.key))})})]})}const hT=Object.fromEntries(co.map(n=>[n.key,n.label])),rm={food:"food",bills:"bolt",goods:"bag",travel:"car",fun:"film",other:"dots"},dT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],fT=["อา","จ","อ","พ","พฤ","ศ","ส"];function sm({percent:n,of:e="รายรับ",sub:t="ใช้ไปแล้ว"}){const s=2*Math.PI*42,i=Math.max(0,Math.min(100,n));return h("div",{class:"ring",role:"img","aria-label":`ใช้ไปแล้ว ${n}% ของ${e}`,children:[h("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[h("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),h("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--pay)","stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${s*i/100} ${s}`,transform:"rotate(-90 50 50)"})]}),h("div",{class:"ring-t",children:[h("b",{class:"num",children:[n,"%"]}),h("span",{children:t})]})]})}function pT({m:n,bm:e,today:t,onBudget:r}){const s=e.status,i=s.leftSat<0;return h("section",{class:"card hero","aria-label":"สรุปเดือนเทียบงบ",children:[h("div",{class:"hero-l",children:[h("div",{class:"hero-top",children:[h(em,{month:n.month,today:t}),h("div",{children:[h("p",{class:"lbl",children:i?"ใช้เกินงบแล้ว":"งบเหลือเดือนนี้"}),h("p",{class:"big num",children:re(Math.round(Math.abs(s.leftSat)/100))})]})]}),h("div",{class:"chips",children:[h("button",{type:"button",class:"chip chip-btn",onClick:r,"aria-label":`งบ ${re(s.budgetSat/100)} แตะเพื่อแก้งบ`,children:["งบ ",h("b",{class:"num",children:re(s.budgetSat/100)})]}),h("span",{class:"chip",children:[h(Z,{name:"up",size:14,class:"pay"}),"ใช้ไป ",h("b",{class:"num",children:re(s.spentSat/100)})]}),n.incomeSat>0&&h("span",{class:"chip",children:[h(Z,{name:"down",size:14,class:"rcv"}),"รายรับ ",h("b",{class:"num",children:re(n.incomeSat/100)})]})]}),h("p",{class:"lbl hero-split",children:e.perDaySat>0?h(H,{children:["เหลืออีก ",e.daysLeft," วัน ใช้ได้วันละ ",h("b",{class:"num",children:re(e.perDaySat/100)})]}):h(H,{children:["ส่วนตัว ",h("span",{class:"num",children:re(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",h("span",{class:"num",children:re(n.groupShareSat/100)})]})})]}),h(sm,{percent:s.percent,of:"งบ",sub:"ของงบ"})]})}function mT({m:n,onAddIncome:e,today:t="",bm:r=null,onBudget:s=null}){if(r&&r.status.set)return h(pT,{m:n,bm:r,today:t,onBudget:s});const i=n.incomeSat>0,a=i&&n.netSat<0,c=i?a?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",l=i?Math.abs(n.netSat)/100:n.spentSat/100,d=!i||a?"pay":"rcv";return h("section",{class:"card hero","aria-label":"สรุปเดือน",children:[h("div",{class:"hero-l",children:[h("div",{class:"hero-top",children:[h(em,{month:n.month,today:t}),h("div",{children:[h("p",{class:"lbl",children:c}),h("p",{class:`big num ${d}`,children:re(Math.round(l))})]})]}),h("div",{class:"chips",children:[h("span",{class:"chip",children:[h(Z,{name:"down",size:14,class:"rcv"}),"รายรับ ",h("b",{class:"num",children:re(n.incomeSat/100)})]}),h("span",{class:"chip",children:[h(Z,{name:"up",size:14,class:"pay"}),"ใช้ไป ",h("b",{class:"num",children:re(n.spentSat/100)})]})]}),h("p",{class:"lbl hero-split",children:["ส่วนตัว ",h("span",{class:"num",children:re(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",h("span",{class:"num",children:re(n.groupShareSat/100)})]}),s&&h("button",{type:"button",class:"set-budget",onClick:s,children:[h(Z,{name:"plus",size:14}),"ตั้งงบเดือนนี้"]})]}),i?h(sm,{percent:n.spentPercent}):h("button",{type:"button",class:"hint",onClick:e,children:[h(Z,{name:"plus",size:20}),"เพิ่มรายรับ",h("small",{children:"เพื่อดูว่าเหลือใช้เท่าไร"})]})]})}function _T({m:n,profiles:e=[],month:t="",nowMonth:r=""}){const s=Object.fromEntries((e||[]).map(l=>[l.name,l.pictureUrl])),i=n.owedToMe.map(l=>l.name),a=n.iOwe.map(l=>l.name),c=t&&r&&t!==r?` (${Jn(t)})`:"";return h("div",{class:"owe-grid",children:[h("a",{class:"card owe-card",href:"#clear","aria-label":`เพื่อนค้างฉัน ${re(n.owedTotal)}${i.length?" ได้แก่ "+i.join(", "):""}`,children:[h("span",{class:"owe-k",children:["เพื่อนค้างฉัน",c,h(Z,{name:"right",size:14})]}),h("b",{class:`owe-v num ${n.owedTotal>0?"rcv":""}`,children:re(n.owedTotal)}),i.length>0?h(Ya,{names:i,pictures:s}):h("span",{class:"owe-ok",children:[h(Z,{name:"check",size:14}),"ไม่มีใครค้าง"]})]}),h("a",{class:"card owe-card",href:"#clear","aria-label":`ฉันค้างเพื่อน ${re(n.iOweTotal)}${a.length?" ได้แก่ "+a.join(", "):""}`,children:[h("span",{class:"owe-k",children:["ฉันค้างเพื่อน",c,h(Z,{name:"right",size:14})]}),h("b",{class:`owe-v num ${n.iOweTotal>0?"pay":""}`,children:re(n.iOweTotal)}),a.length>0?h(Ya,{names:a,pictures:s}):h("span",{class:"owe-ok",children:[h(Z,{name:"check",size:14}),"ไม่ค้างใคร"]})]})]})}function gT({sched:n,me:e,onOpen:t,onCard:r,pictures:s={}}){const i=n&&n.upcoming||[];if(!i.length)return null;const[a,...c]=i,l=k=>re(k/100,{decimals:k%100?2:0}),d=k=>k.coverFor?l(k.totalSat):l(k.mySat),p=k=>`${Number(k.date.slice(8,10))} ${Jn(k.date.slice(0,7))}`,m=k=>k.daysLeft===0?"วันนี้":`อีก ${k.daysLeft} วัน`,_=k=>k.kind==="card"&&r?()=>r(k.cardId):t,b=k=>k.kind==="card"?k.pending?"จ่ายบัตร (ยังไม่ตัดรอบ)":"ครบกำหนดจ่ายบัตร":"บิลถัดไป";return h("section",{class:"nb","aria-label":"บิลรายเดือนที่จะถึง",children:[h("button",{type:"button",class:"nb-main",onClick:_(a),"aria-label":`${b(a)} ${a.desc} ${d(a)} ${m(a)} แตะเพื่อเปิดปฏิทินบิล`,children:[a.daysLeft===0?h("span",{class:"nb-cal num","aria-hidden":"true",children:[h("span",{class:"band",children:"วันนี้"}),h("b",{children:Number(a.date.slice(8,10))}),h("small",{children:Jn(a.date.slice(0,7))})]}):h("span",{class:"nb-count","aria-hidden":"true",children:[h("small",{children:"อีก"}),h("b",{class:"num",children:a.daysLeft}),h("small",{children:"วัน"})]}),h("span",{class:"nb-t",children:[h("small",{children:[b(a)," · ",a.daysLeft===0?a.kind==="card"?"วันนี้":"ตัดวันนี้":p(a),a.every>1&&h("span",{class:"nb-pill",children:Bw(a)})]}),h("b",{children:a.desc}),h("span",{class:"nb-amt num",children:[d(a),a.kind==="group"&&!a.coverFor&&h("em",{children:[" จาก ",l(a.totalSat)]})]}),a.kind==="group"?h("span",{class:"nb-flow",children:[h(oT,{payer:a.payer,people:a.names||[],pictures:s}),a.coverFor&&h("small",{children:"จ่ายแทน"})]}):h("small",{children:Hw(a,e)})]}),h(Z,{name:a.kind==="card"?"card":"calendar",size:18,class:"nb-ic"})]}),c.length>0&&h("div",{class:"nb-up",children:c.slice(0,2).map(k=>h("button",{type:"button",class:"nb-mini",onClick:_(k),children:[h("span",{class:"lbl",children:[p(k)," · ",m(k)]}),h("b",{children:k.desc}),h("span",{class:"num",children:[d(k),k.kind==="group"&&!k.coverFor&&h("em",{children:[" จาก ",l(k.totalSat)]})]})]},k.id+k.date))})]})}const jh={near:"ใกล้เต็ม",over:"เกินงบ"};function yT({c:n,label:e}){const t=Math.max(n.spentSat>0?3:0,Math.min(100,n.percent));return h("li",{class:"cat",children:[h("span",{class:"ico big-ico",children:h(Z,{name:rm[n.key]||"dots"})}),h("div",{class:"cat-b",children:[h("div",{class:"cat-r",children:[h("span",{children:[e,jh[n.level]&&h("span",{class:`lv-tag ${n.level}`,children:jh[n.level]})]}),h("span",{class:"num",children:[h("b",{children:re(n.spentSat/100)}),h("em",{children:["/ ",re(n.budgetSat/100)]})]})]}),h("div",{class:`bar lv ${n.level}`,role:"img","aria-label":`ใช้ไป ${n.percent}% ของงบ${e}`,children:h("i",{style:{width:`${t}%`}})}),h("div",{class:"cat-s num",children:[h("span",{children:n.leftSat>=0?`เหลือ ${re(n.leftSat/100)}`:`เกินงบ ${re(-n.leftSat/100)}`}),h("span",{children:[n.percent,"%"]})]})]})]},n.key)}function vT({cats:n,bm:e=null,onBudget:t=null}){const r=e&&e.status.set?e.status.cats:[],s=new Set(r.map(p=>p.key)),i=n.filter(p=>!s.has(p.key));if(n.length===0&&r.length===0)return null;const a=n[0],c=p=>hT[p]||p,l=r.length?`ตั้งงบไว้ ${r.length} หมวด`:a?`ส่วนใหญ่ไปกับ${a.label} ${a.percent}%`:"",d=i[0];return h("section",{class:"card",children:[h("div",{class:"sec-row",children:[h(tm,{icon:"bag",title:"ใช้ไปกับอะไร",note:l}),e&&e.status.set&&t&&h("button",{type:"button",class:"link-btn",onClick:t,children:"แก้งบ"})]}),h("ul",{class:"cats",children:[r.map(p=>h(yT,{c:p,label:c(p.key)},p.key)),i.map(p=>h("li",{class:"cat",children:[h("span",{class:"ico big-ico",children:h(Z,{name:rm[p.key]||"dots"})}),h("div",{class:"cat-b",children:[h("div",{class:"cat-r",children:[h("span",{children:p.label}),h("span",{class:"num",children:[h("b",{children:[p.percent,"%"]}),h("em",{children:re(p.satang/100)})]})]}),h("div",{class:"bar",children:h("i",{style:{width:`${Math.max(3,Math.round(p.percent/d.percent*100))}%`}})})]})]},p.key))]})]})}const im=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n)),ET=n=>re(n/100,{decimals:2});function bT(n,e){if(!n||!e)return 0;const t=n/e;return t>.6?3:t>.25?2:1}function wT({month:n,days:e,onPick:t}){const[r,s]=n.split("-").map(Number),i=new Date(Date.UTC(r,s-1,1)).getUTCDay(),a=e.reduce((c,l)=>Math.max(c,l.satang),0);return h("div",{class:"sc-grid",role:"group","aria-label":`ปฏิทินรายจ่าย ${rl(n)}`,children:[fT.map(c=>h("span",{class:"sc-dow","aria-hidden":"true",children:c},c)),Array.from({length:i},(c,l)=>h("span",{},`e${l}`)),e.map(c=>h("button",{type:"button",class:`sc-day h${bT(c.satang,a)} ${c.today?"today":""} ${c.satang>0&&c.satang===a?"peak":""}`,disabled:c.isFuture,onClick:()=>t(c.day),"aria-label":`วันที่ ${c.day} ใช้ไป ${c.satang>0?re(c.satang/100):"0 บาท"}`,children:[h("span",{class:"num",children:c.day}),c.satang>0?h("small",{class:"num",children:im(c.satang/100)}):null]},c.day))]})}function TT({month:n,days:e,day:t,onDay:r}){const s=e.find(d=>d.day===t)||e[0];if(!s)return null;const[i,a]=n.split("-").map(Number),c=dT[new Date(Date.UTC(i,a-1,s.day)).getUTCDay()],l=e.filter(d=>!d.isFuture).length;return h("div",{class:"sc-day-view",children:[h("div",{class:"sc-day-hd",children:[h("span",{class:"dtile sm","aria-hidden":"true",children:[h("span",{class:"m",children:Jn(n)}),h("span",{class:"d num",children:s.day})]}),h("div",{class:"grow",children:[h("b",{children:[c," ",s.day," ",Jn(n)]}),h("span",{class:"lbl",children:[s.items.length," รายการ"]})]}),h("b",{class:"num pay",children:re(s.satang/100)})]}),h("div",{class:"sc-day-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"วันก่อนหน้า",disabled:s.day<=1,onClick:()=>r(s.day-1),children:h(Z,{name:"left",size:16})}),h("span",{class:"lbl",children:"เลื่อนดูวันอื่น"}),h("button",{type:"button",class:"icon-btn","aria-label":"วันถัดไป",disabled:s.day>=l,onClick:()=>r(s.day+1),children:h(Z,{name:"right",size:16})})]}),s.items.length===0?h("p",{class:"empty",children:[h(Z,{name:"check",size:16,class:"rcv"}),"ไม่มีรายจ่ายในวันนี้"]}):h("ul",{class:"plain",children:s.items.map((d,p)=>h("li",{class:"row",children:[h(Ym,{desc:d.desc,name:Gm(d.icon),size:36,iconSize:18}),h("div",{class:"grow",children:[h("div",{class:"t",children:d.desc||"ไม่ระบุ"}),h("div",{class:"s",children:d.kind==="group"?"ส่วนของฉันในกลุ่ม":"ส่วนตัว"})]}),h("span",{class:"num pay",children:ET(d.satang)})]},p))})]})}function IT({year:n,series:e,since:t,nowMonth:r,onPick:s}){const i=Object.fromEntries((e||[]).map(l=>[l.month,l.spentSat])),a=Array.from({length:12},(l,d)=>{const p=`${n}-${String(d+1).padStart(2,"0")}`,m=p>=t&&p<=r;return{key:p,label:zs[d],inRange:m,sat:m&&i[p]||0}}),c=a.reduce((l,d)=>Math.max(l,d.sat),0);return h("div",{class:"sc-year",children:a.map(l=>h("button",{type:"button",class:`sc-mon ${l.key===r?"cur":""}`,disabled:!l.inRange,onClick:()=>s(l.key),"aria-label":`${Jp(l.key)} ใช้ไป ${l.inRange?re(l.sat/100):"ไม่มีข้อมูล"}`,children:[h("small",{children:l.label}),h("b",{class:"num",children:l.inRange?im(l.sat/100):"-"}),h("i",{style:{width:`${l.inRange&&c>0?Math.max(4,Math.round(l.sat/c*100)):0}%`}})]},l.key))})}function AT({model:n,month:e,onMonth:t,since:r,nowMonth:s,series:i,onNeedYear:a=()=>{}}){const[c,l]=ee("month"),[d,p]=ee(1);de(()=>{c==="year"&&a()},[c]);const m=n.calendarDays||[],_=Number(e.slice(0,4)),b=m.reduce((w,v)=>v.satang>(w?w.satang:0)?v:w,null),k=w=>{const v=At(e,w);v>=r&&v<=s&&t(v)},D=w=>{const v=e.slice(5,7);let E=`${_+w}-${v}`;E<r?E=r:E>s&&(E=s),t(E)},S=r<`${_}-01`,V=`${_+1}-01`<=s,F=(i||[]).filter(w=>w.month.startsWith(String(_))).reduce((w,v)=>w+v.spentSat,0),B=(i||[]).filter(w=>w.month.startsWith(String(_))&&w.month>=r&&w.month<=s).length;function Q(w){p(w),l("day")}function J(w){t(w),l("month")}function te(w){if(w==="day"&&c!=="day"){const v=m.find(E=>E.today);p(v?v.day:b?b.day:1)}l(w)}return h("section",{class:"card sc","aria-label":"ปฏิทินรายจ่าย",children:[h(tm,{icon:"calendar",title:"ใช้ไปเท่าไร",note:"รวมรายจ่ายส่วนตัวและส่วนของฉันในกลุ่ม"}),h("div",{class:"seg sc-seg",role:"group","aria-label":"ดูเป็น",children:[["day","วัน"],["month","เดือน"],["year","ปี"]].map(([w,v])=>h("button",{type:"button",class:c===w?"on":"","aria-pressed":c===w,onClick:()=>te(w),children:v},w))}),c==="year"?h(H,{children:[h("div",{class:"sc-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"ปีก่อนหน้า",disabled:!S,onClick:()=>D(-1),children:h(Z,{name:"left",size:16})}),h("b",{class:"num",children:["ปี ",_+543]}),h("button",{type:"button",class:"icon-btn","aria-label":"ปีถัดไป",disabled:!V,onClick:()=>D(1),children:h(Z,{name:"right",size:16})})]}),i?h(H,{children:[h("div",{class:"sc-sum",children:[h("div",{children:[h("span",{class:"lbl",children:"ใช้ไปทั้งปี"}),h("b",{class:"num pay",children:re(F/100)})]}),h("div",{children:[h("span",{class:"lbl",children:"เฉลี่ยต่อเดือน"}),h("b",{class:"num",children:re(B>0?F/100/B:0)})]})]}),h(IT,{year:_,series:i,since:r,nowMonth:s,onPick:J})]}):h("p",{class:"empty","aria-busy":"true",children:"กำลังโหลดข้อมูลทั้งปี"})]}):h(H,{children:[h("div",{class:"sc-nav",children:[h("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",disabled:e<=r,onClick:()=>k(-1),children:h(Z,{name:"left",size:16})}),h("b",{class:"num",children:rl(e)}),h("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e>=s,onClick:()=>k(1),children:h(Z,{name:"right",size:16})})]}),c==="month"?h(H,{children:[h("div",{class:"sc-sum",children:[h("div",{children:[h("span",{class:"lbl",children:"ใช้ไปทั้งเดือน"}),h("b",{class:"num pay",children:re(n.spentSat/100)})]}),h("div",{children:[h("span",{class:"lbl",children:"เฉลี่ยต่อวัน"}),h("b",{class:"num",children:re(n.average)})]})]}),h(wT,{month:e,days:m,onPick:Q}),b?h("p",{class:"lbl sc-foot",children:["ใช้มากสุดวันที่ ",b.day," (",re(b.satang/100),") แตะวันเพื่อดูรายการ"]}):h("p",{class:"lbl sc-foot",children:"ยังไม่มีรายจ่ายในเดือนนี้"})]}):h(TT,{month:e,days:m,day:d,onDay:p})]})]})}function ST({model:n,series:e,month:t,onMonth:r,onAddIncome:s,profiles:i=[],today:a="",nowMonth:c="",since:l="",onNeedYear:d,bm:p=null,onBudget:m=null,bills:_=null,me:b="",onBills:k=()=>{},onCard:D=null}){const S=c||t;return h("div",{class:"home-grid",children:[h("div",{class:"col",children:[h(mT,{m:n,onAddIncome:s,today:a,bm:p,onBudget:m}),h(_T,{m:n,profiles:i,month:t,nowMonth:S}),t===S&&h(gT,{sched:_,me:b,onOpen:k,onCard:D,pictures:Object.fromEntries((i||[]).map(V=>[V.name,V.pictureUrl]))}),h(vT,{cats:n.categories,bm:p,onBudget:m})]}),h("div",{class:"col",children:h(AT,{model:n,month:t,onMonth:r,since:l||At(S,-11),nowMonth:S,series:e,onNeedYear:d})})]})}const Bh=()=>N(()=>import("./add-CQdH4Nw3.js"),__vite__mapDeps([0,1])),$h=()=>N(()=>import("./ClearPage-DTS484iB.js"),[]),zh=()=>N(()=>import("./ListPage-DHKmwZhL.js"),__vite__mapDeps([2,1])),qh=()=>N(()=>import("./MePage-DYURuThq.js"),__vite__mapDeps([3,4,5])),Wh=()=>N(()=>import("./onboard-DYYw3FIY.js"),[]),ya=()=>N(()=>import("./plan-DYjVAA8Y.js"),[]),RT=()=>N(()=>import("./billcal-DBgQgBOQ.js"),[]),Hh=()=>N(()=>import("./cards-BSHuxg0A.js"),[]),yt=qp();Gp(yt?Hp(yt.name):null);function os(){const n=new URLSearchParams(location.search).get("liff.state")||"";return(location.hash||(n.includes("#")?n.slice(n.indexOf("#")):"")).slice(1)}function as(n){const e=/^(edit|split|choose)=([A-Za-z0-9_-]{1,100})$/.exec(String(n||""));return e?{kind:e[1],id:e[2]}:null}function pr(n){const e=/^card=([A-Za-z0-9_-]{1,60})$/.exec(String(n||""));return e?e[1]:""}const Gh=Up().slice(0,7),Kh=12,kT=["home","list","clear","me"],gi=n=>n==="bills"||n==="wallet"?"list":kT.includes(n)?n:"home";function PT(){const[n,e]=ee(yt?{state:"ok",user:yt}:{state:"loading"}),[t,r]=ee(()=>{const I=os();return as(I)?"list":pr(I)?"me":gi(I)}),[s,i]=ee(()=>as(os())),[a,c]=ee(null),[l,d]=ee(null),p=Ye(()=>Up(),[]),m=p.slice(0,7),_=Ye(()=>At(m,-11),[m]),[b,k]=ee(m),[D,S]=ee(()=>yt?aw():null),[V,F]=ee(()=>{const I=yt?iw(yt.name,Gh):null;return I?{[Gh]:I}:{}}),[B,Q]=ee(!1),[J,te]=ee(null),[w,v]=ee(""),[E,T]=ee(null),[A,R]=ee(()=>yt&&os()==="add"?"menu":null),[g,W]=ee(""),[ze,pt]=ee(0),[Nt,et]=ee(!1),[Jt,qs]=ee(!1),[Br,vt]=ee(!!yt),[me,$r]=ee(null),[mt,$o]=ee(null),[rr,Ws]=ee(!1),[qe,Zt]=ee(null),[Le,ot]=ee(()=>{const I=pr(os());return I?{kind:"detail",id:I}:null}),[Dn,Mn]=ee(()=>oo()),[sr,Hs]=ee(()=>Wp()),[Rt,en]=ee({}),[_t,gt]=ee(null),ir=I=>{if(I.needLogin){et(!0);return}yt&&!I.needLink&&I.memberId!==yt.memberId&&(Ka(),F({}),S(null),te(null)),I.needLink?e({state:"link",profile:I.profile,candidates:I.candidates,suggest:I.suggest||""}):!I.isAdmin&&(!I.realName||!Zp(I.promptpay))?e({state:"onboard",user:I}):e(x=>x.state==="ok"&&JSON.stringify(x.user)===JSON.stringify(I)?x:{state:"ok",user:I}),I.needLink||rw(I)},zr=(I,x)=>F(z=>({...z,[I]:{...z[I]||{},...x}})),we=n.state==="ok"?Hp(n.user.name,Dn,sr):null;Gp(we);const tn=Dn!==null,qr=Li(we);de(()=>{qr.current!==we&&(qr.current=we,F(I=>Object.fromEntries(Object.entries(I).filter(([,x])=>x.wallet).map(([x,z])=>[x,{wallet:z.wallet}]))),en({}))},[we]),de(()=>{n.state==="ok"&&_a([m],{nowMonth:m}).then(I=>{Mn({hide:I.hide,super:I.super}),en(x=>({...x,...I.plans}))}).catch(I=>{I.expired||console.warn("clear-plan:",I.message),oo()||Mn({hide:!1,super:!1})})},[n.state,ze]),de(()=>{ew().then(I=>{if(!I)return;ir(I);const x=os();if(x==="add"){R("menu"),r("home");try{history.replaceState(null,"",location.pathname+"#home")}catch{}}else as(x)?(i(as(x)),r("list")):pr(x)?(ot({kind:"detail",id:pr(x)}),r("me")):x&&["home","list","bills","wallet","clear","me"].includes(x)&&r(gi(x))}).catch(I=>{yt?console.warn("signIn:",I.message):e({state:"error",message:I.message})})},[]),de(()=>{Wb(()=>et(!0))},[]),de(()=>{const I=()=>{const x=location.hash.slice(1),z=as(x);z?(i(z),r("list")):pr(x)?(ot({kind:"detail",id:pr(x)}),r("me")):r(gi(x))};return addEventListener("hashchange",I),()=>removeEventListener("hashchange",I)},[]),de(()=>{n.state==="ok"&&cw().then(S).catch(()=>Q(!0))},[n.state,ze]),de(()=>{n.state!=="ok"||!["home","list","clear","me"].includes(t)||J||Sh().then(te).catch(()=>Q(!0))},[n.state,t,J]),de(()=>{n.state==="ok"&&pw().then($r).catch(I=>{I.expired||console.warn("loadPlan:",I.message),$r(x=>x||{budget:{total:0,cats:{}},months:{},goals:[]})})},[n.state,ze]),de(()=>{n.state!=="ok"||t!=="home"||Rw().then($o).catch(I=>console.warn("loadBillSchedule:",I&&I.message))},[n.state,t,ze]);const De=J&&n.state==="ok"?J.find(I=>I.id===n.user.memberId||(I.ids||[]).includes(n.user.memberId))||J.find(I=>I.name===n.user.name):null,Ne=!!(De&&De.cardAlerts);de(()=>{if(!(n.state!=="ok"||!J||!["home","me"].includes(t))){if(!Ne){Zt({enabled:!1,cards:[]});return}Ah().then(Zt).catch(I=>{I.expired||console.warn("loadCards:",I&&I.message)})}},[n.state,t,ze,Ne,!!J]),de(()=>{if(!(n.state!=="ok"||!tn))return uw(m,I=>{I.error?Q(!0):zr(m,I)})},[n.state,m,tn,we]);const Et=Ye(()=>[...new Set([...Jt?Fh(m,Kh):[],b])].filter(I=>I!==m),[m,b,Jt]);de(()=>{if(n.state!=="ok")return;const I=[m,...Et.filter(x=>!(V[x]&&V[x].wallet))];dw(I,m).then(x=>Object.entries(x).forEach(([z,cn])=>zr(z,{wallet:cn}))).catch(x=>{x.expired||W(x.message)})},[n.state,m,ze,Et.filter(I=>!(V[I]&&V[I].wallet)).join("|")]),de(()=>{n.state!=="ok"||!tn||Et.forEach(I=>{V[I]&&V[I].transactions||lw(I).then(x=>zr(I,{transactions:x.transactions,settlements:x.settlements})).catch(()=>Q(!0))})},[n.state,tn,we,Et,Et.filter(I=>!(V[I]&&V[I].transactions)).join("|")]);const tt=V[m];de(()=>{if(n.state!=="ok"||!we)return;const I=[...new Set([m,b])].filter(x=>!Rt[x]);I.length&&_a(I,{nowMonth:m}).then(x=>en(z=>({...z,...x.plans}))).catch(x=>{x.expired||W(x.message)})},[n.state,we,b,m,!!Rt[b],!!Rt[m]]);const nn=tt&&tt.transactions&&tt.settlements?tt.transactions.map(I=>I.id+":"+I.amount).sort().join(",")+"|"+tt.settlements.map(I=>I.id+":"+I.status).sort().join(","):"",or=Li("");de(()=>{if(!we||!nn)return;if(!or.current){or.current=nn;return}if(or.current===nn)return;or.current=nn;const I=setTimeout(()=>{_a([m],{nowMonth:m,force:!0}).then(x=>en(z=>({...z,...x.plans}))).catch(()=>{})},1200);return()=>clearTimeout(I)},[we,nn]);const Ot=I=>we?Rt[I]||[]:null;de(()=>{n.state==="ok"&&tt&&tt.transactions&&tt.settlements&&tt.wallet&&ow(n.user.name,m,tt)},[tt]),de(()=>{if(n.state!=="ok")return;const x=(window.requestIdleCallback||(z=>setTimeout(z,1500)))(()=>{[zh,$h,qh,Bh].forEach(z=>z().catch(()=>{}))});return()=>{window.cancelIdleCallback?window.cancelIdleCallback(x):clearTimeout(x)}},[n.state]),de(()=>{if(g){const I=setTimeout(()=>W(""),3200);return()=>clearTimeout(I)}},[g]);const ar=I=>V[I]&&V[I].transactions&&V[I].settlements&&V[I].wallet,rn=n.state==="ok"&&D&&ar(m)&&ar(b);de(()=>{rn&&vt(!0)},[rn]),de(()=>{if(Br)return;const I=setTimeout(()=>vt(!0),12e3);return()=>clearTimeout(I)},[Br]);const cr=rn&&Et.every(ar),ne=Ye(()=>{if(!rn)return null;const I=Object.values(V);return{transactions:I.flatMap(x=>x.transactions||[]),settlements:I.flatMap(x=>x.settlements||[]),wallet:I.flatMap(x=>x.wallet||[])}},[rn,V]),Gs=Ye(()=>ne&&D?Zw({me:n.user.name,members:D,transactions:ne.transactions}):[],[ne,n,D]),bt=Ye(()=>ne?Lh({name:n.user.name,month:b,today:p,members:D,transactions:ne.transactions,settlements:ne.settlements,walletItems:ne.wallet,planLines:Ot(b)}):null,[ne,n,D,b,p,we,Rt]),Ks=Ye(()=>ne&&Jt&&cr?Kw({name:n.user.name,months:Fh(m,Kh),transactions:ne.transactions,settlements:ne.settlements,walletItems:ne.wallet}):null,[ne,Jt,cr,n,m]),Wr=Ye(()=>ne&&(!we||Rt[b])?Qw({name:n.user.name,month:b,members:D,transactions:ne.transactions,settlements:ne.settlements,planLines:Ot(b)}):null,[ne,n,D,b,we,Rt]),wt=Ye(()=>ne?Xw({name:n.user.name,month:b,walletItems:ne.wallet,transactions:ne.transactions,settlements:ne.settlements}):null,[ne,n,b]),Vn=Ye(()=>ne?b===m?bt:Lh({name:n.user.name,month:m,today:p,members:D,transactions:ne.transactions,settlements:ne.settlements,walletItems:ne.wallet,planLines:Ot(m)}):null,[ne,bt,b,m,we,Rt]),Hr=Ye(()=>me&&bt?xh(me,bt,p):null,[me,bt,p]),Tt=Ye(()=>me&&Vn?xh(me,Vn,p):null,[me,Vn,p]),Qs=Ye(()=>mt&&n.state==="ok"?zw({me:n.user.name,month:m,today:p,group:mt.group,personal:mt.personal,cards:qe&&qe.enabled?qe.cards:[]}):null,[mt,n,m,p,qe]),sn=(I,x)=>I.then(()=>Ah({force:!0})).then(z=>(Zt(z),x&&W(x),z)),lr=Le&&Le.kind==="detail"&&qe?qe.cards.find(I=>I.id===Le.id):null;de(()=>{if(Le&&Le.kind==="detail"&&qe&&!lr&&(ot(null),W(qe.enabled?"ไม่พบบัตรนี้ (อาจถูกลบไปแล้ว)":"ผู้ดูแลยังไม่ได้เปิดเตือนบัตรเครดิตให้คุณ")),Le&&Le.kind==="detail"&&qe)try{history.replaceState(null,"",location.pathname+"#me")}catch{}},[Le,qe]);const kt=(I,x)=>I.then(z=>($r(z),x&&W(x),z)),Gr=Ye(()=>ne?Yw({name:n.user.name,month:b,transactions:ne.transactions,search:w}):null,[ne,n,b,w]),Te=(I=b)=>{Qp(I),en(x=>{if(!x[I])return x;const z={...x};return delete z[I],z}),I===m?pt(x=>x+1):F(x=>{const z={...x};return delete z[I],z})},ur=I=>{T({amount:I.amount,desc:I.desc,date:I.date,icon:I.icon,convertId:I.id,month:String(I.date).slice(0,7)}),R("bill")};de(()=>{if(!s||!ne)return;let I=!0;const x=ne.wallet.find(z=>z.id===s.id);return(x?Promise.resolve(x):Aw(s.id)).then(z=>{if(I){if(!z){W("ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");return}s.kind==="split"&&z.type!=="income"?ur(z):s.kind==="choose"&&z.type!=="income"?d(z):(r("list"),c({...z}))}}).catch(z=>{I&&!z.expired&&W(z.message)}).finally(()=>{if(I){i(null);try{history.replaceState(null,"",location.pathname+"#list")}catch{}}}),()=>{I=!1}},[s,!!ne]);const on=()=>{Ka(),F({}),en({}),S(null),Q(!1),pt(I=>I+1)},Nn=I=>{sw(I),Hs(I)},zo=I=>Mn(x=>({...x||{},hide:I}));if(n.state==="loading")return h("div",{class:"center",children:h(rs,{label:"กำลังเข้าสู่ระบบ"})});if(n.state==="error")return h("div",{class:"center",children:[h(rs,{}),h("p",{role:"alert",children:n.message}),h("button",{type:"button",class:"btn",onClick:()=>location.reload(),children:"ลองใหม่"})]});if(n.state==="link")return h(lt,{load:Wh,name:"LinkPage",profile:n.profile,candidates:n.candidates,suggest:n.suggest,onDone:ir,fallback:h("div",{class:"center",children:h(rs,{})})});if(n.state==="onboard")return h(lt,{load:Wh,name:"OnboardPage",user:n.user,onDone:ir,fallback:h("div",{class:"center",children:h(rs,{})})});if(!Br&&!B)return h("div",{class:"center",children:h(rs,{label:"กำลังโหลดข้อมูล"})});const qo=I=>{location.hash=I,r(I),window.scrollTo(0,0)},at=gi(t),Xs=at!=="me";let an;return Xs&&B?an=h(lT,{onRetry:on}):at==="home"?an=bt?h(ST,{model:bt,series:Ks,month:b,onMonth:k,onAddIncome:()=>R("income"),profiles:J||[],today:p,nowMonth:m,since:_,onNeedYear:()=>qs(!0),bm:Hr,onBudget:me?()=>gt({kind:"budget"}):null,bills:Qs,me:n.user.name,onBills:()=>Ws(!0),onCard:I=>ot({kind:"detail",id:I})}):h(Fn,{blocks:5}):at==="list"?an=Gr&&wt?h(lt,{load:zh,name:"ListPage",fallback:h(Fn,{blocks:3}),pictures:Object.fromEntries((J||[]).map(I=>[I.name,I.pictureUrl])),bills:Gr,wallet:wt,month:b,today:p,search:w,onSearch:v,me:n.user.name,isAdmin:n.user.isAdmin,privateMode:!!we,version:ze,openEdit:a,onSplit:ur,onChanged:()=>Te(),onError:W,onInfo:W}):h(Fn,{blocks:3}):at==="clear"?an=Wr&&J?h(lt,{load:$h,name:"ClearPage",fallback:h(Fn,{blocks:2}),model:Wr,profiles:J,month:b,back:wt?{receivedSat:wt.receivedBackSat,paidSat:wt.paidBackSat}:null,onChanged:()=>Te(),isAdmin:n.user.isAdmin,privateMode:!!we,adminName:n.user.name,onError:W,onInfo:W}):h(Fn,{blocks:2}):an=J?h(lt,{load:qh,name:"MePage",fallback:h(Fn,{blocks:2}),auth:n,profiles:J,onSaved:()=>te(null),onRefresh:on,onMembers:()=>{Sh().then(te).catch(()=>te(null)),pt(I=>I+1)},onToast:W,transactions:ne?ne.transactions:[],onDataChanged:I=>Te(I),bm:Tt,onBudget:()=>gt({kind:"budget"}),onGoalAdd:()=>gt({kind:"goal"}),onGoalMove:(I,x)=>gt({kind:"move",goal:I,dir:x}),onGoalEdit:I=>gt({kind:"goal",goal:I}),cards:qe,privacy:Dn,seeAll:sr,onSeeAll:Nn,onPrivacy:zo,onCardAdd:()=>ot({kind:"add"}),onCardOpen:I=>ot({kind:"detail",id:I.id})}):h(Fn,{blocks:2}),h(H,{children:[Nt&&h("div",{class:"login-banner",role:"alert",children:[h("span",{children:["เซสชัน LINE หมดอายุ ยังดูข้อมูลที่จำไว้ได้ แต่ข้อมูลกระเป๋าและการบันทึกต้องเข้าสู่ระบบใหม่",Ih()&&h("small",{class:"diag",children:Ih()})]}),h("button",{type:"button",class:"btn sm",onClick:Hb,children:"เข้าสู่ระบบใหม่"})]}),h(uT,{tab:at,onTab:qo,userName:n.user.name,userPicture:n.user.pictureUrl,onAdd:()=>R("menu"),tools:Xs&&h(rT,{month:b,onChange:k,min:_,max:m}),children:h(nT,{page:at,children:an})}),A&&h(lt,{load:Bh,name:"AddSheet",initial:A==="income"?"income":A==="bill"?"bill":null,prefill:E,convertWallet:Rh,today:p,members:D||[],me:n.user.name,suggested:Gs,save:Iw,saveBill:kh,onClose:()=>{R(null),T(null)},onSaved:(I,x=[])=>{W(I),x.forEach(z=>Te(z)),pt(z=>z+1)}}),l&&h(lt,{load:()=>N(()=>import("./editbill-DhtJ9H0Z.js"),__vite__mapDeps([6,1])),name:"ChooseSheet",item:l,members:D||[],me:n.user.name,suggested:Gs,today:p,saveBill:kh,removeWallet:Rh,onClose:()=>d(null),onConfirmed:()=>Te(String(l.date).slice(0,7)),onDone:(I,x=[])=>{W(I),x.forEach(z=>Te(z)),pt(z=>z+1)},onMoreSplit:I=>{d(null),ur(I)}}),Le&&(Le.kind==="add"||Le.kind==="edit")&&h(lt,{load:Hh,name:"CardEditSheet",card:Le.card||null,onClose:()=>ot(null),onSave:I=>sn(bw(I),I.id?"แก้บัตรแล้ว":"เพิ่มบัตรแล้ว"),onDelete:I=>sn(ww(I),"ลบบัตรแล้ว")}),lr&&h(lt,{load:Hh,name:"CardDetailSheet",card:lr,onClose:()=>ot(null),onEdit:I=>ot({kind:"edit",card:I}),onPaid:(I,x,z)=>sn(Tw(I,x,z),x?"จ่ายแล้ว ไม่เตือนรอบนี้อีก":"ยกเลิก จ่ายแล้ว").catch(cn=>W(cn.message))}),rr&&mt&&h(lt,{load:RT,name:"BillCalendarSheet",data:{...mt,cards:qe&&qe.enabled?qe.cards:[]},pictures:Object.fromEntries((J||[]).map(I=>[I.name,I.pictureUrl])),me:n.user.name,today:p,onClose:()=>Ws(!1)}),_t&&_t.kind==="budget"&&h(lt,{load:ya,name:"BudgetSheet",plan:me,nowMonth:m,suggestSat:Tt?Tt.suggestSat:0,onClose:()=>gt(null),onSave:I=>kt(mw(I),I.clear?"กลับไปใช้งบปกติแล้ว":"บันทึกงบแล้ว")}),_t&&_t.kind==="move"&&h(lt,{load:ya,name:"GoalMoveSheet",goal:_t.goal,dir:_t.dir,month:m,onClose:()=>gt(null),onMove:(I,x,z)=>kt(gw(I,x,z),z==="out"?"ถอนออกจากเป้าแล้ว":"เก็บเข้าเป้าแล้ว")}),_t&&_t.kind==="goal"&&h(lt,{load:ya,name:"GoalEditSheet",goal:_t.goal||null,nowMonth:m,onClose:()=>gt(null),onSave:I=>kt(_w(I),I.id?"แก้เป้าแล้ว":"เพิ่มเป้าแล้ว"),onDelete:I=>kt(yw(I),"ลบเป้าแล้ว")}),g&&h("div",{class:"toast",role:"status",children:g})]})}Nm(h(PT,{}),document.getElementById("app"));export{WT as $,sl as A,gI as B,Jn as C,bI as D,Gm as E,Pw as F,iT as G,Rh as H,Z as I,oI as J,zT as K,lt as L,iI as M,Sw as N,fw as O,oT as P,KT as Q,UT as R,nm as S,Ye as T,TI as U,pI as V,nI as W,lI as X,tI as Y,aI as Z,N as _,Ym as a,HT as a0,qT as a1,su as a2,VT as a3,At as a4,ud as a5,uI as a6,hI as a7,Xp as a8,Lw as a9,zw as aa,rl as ab,Hw as ac,ga as ad,qw as ae,LT as af,kw as ag,GT as ah,FT as ai,co as aj,dI as ak,fI as al,jw as am,Xa as an,EI as ao,sI as ap,QT as aq,BT as ar,YT as as,XT as at,jT as au,NT as av,OT as aw,Bm as b,re as c,ee as d,eT as e,H as f,vI as g,yI as h,em as i,Up as j,tm as k,wI as l,Jp as m,eI as n,Fh as o,ZT as p,JT as q,rI as r,_I as s,mI as t,h as u,Zp as v,cI as w,de as x,$T as y,xT as z};
