const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-CFuIz_0x.js","assets/cats-CP80Dd27.js","assets/ListPage-jQAtLZs4.js","assets/MePage-BH46-PKZ.js","assets/plan-CL9xRvYG.js","assets/editbill-Dg7ddTw6.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Zp="modulepreload",em=function(n){return"/app/"+n},vl={},$t=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=em(l),l in vl)return;vl[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":Zp,h||(_.as="script"),_.crossOrigin="",_.href=l,c&&_.setAttribute("nonce",c),document.head.appendChild(_),h)return new Promise((m,w)=>{_.addEventListener("load",m),_.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var ji,he,Th,Zt,wl,Ih,bh,Do,ni,jr,Ah,Aa,Go,Ko,gi={},_i=[],tm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,qi=Array.isArray;function Pt(n,e){for(var t in e)n[t]=e[t];return n}function Sa(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function nm(n,e,t){var r,s,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?ji.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return ri(n,a,r,s,null)}function ri(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Th,__i:-1,__u:0};return s==null&&he.vnode!=null&&he.vnode(i),i}function Q(n){return n.children}function si(n,e){this.props=n,this.context=e}function Nn(n,e){if(e==null)return n.__?Nn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Nn(n):null}function rm(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],s=[],i=Pt({},e);i.__v=e.__v+1,he.vnode&&he.vnode(i),Ra(n.__P,i,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Nn(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,Ch(r,i,s),e.__e=e.__=null,i.__e!=t&&Sh(i)}}function Sh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Sh(n)}function El(n){(!n.__d&&(n.__d=!0)&&Zt.push(n)&&!yi.__r++||wl!=he.debounceRendering)&&((wl=he.debounceRendering)||Ih)(yi)}function yi(){try{for(var n,e=1;Zt.length;)Zt.length>e&&Zt.sort(bh),n=Zt.shift(),e=Zt.length,rm(n)}finally{Zt.length=yi.__r=0}}function Rh(n,e,t,r,s,i,a,c,l,h,f){var _,m,w,R,P,N,V=r&&r.__k||_i,L=e.length;for(l=sm(t,e,V,l,L),_=0;_<L;_++)(w=t.__k[_])!=null&&(m=w.__i!=-1&&V[w.__i]||gi,w.__i=_,N=Ra(n,w,m,s,i,a,c,l,h,f),R=w.__e,w.ref&&m.ref!=w.ref&&(m.ref&&ka(m.ref,null,w),f.push(w.ref,w.__c||R,w)),P==null&&R!=null&&(P=R),4&w.__u?(l=kh(w,l,n),m.__e&&(m.__e=null)):typeof w.type=="function"&&N!==void 0?l=N:R&&(l=R.nextSibling),w.__u&=-7);return t.__e=P,l}function sm(n,e,t,r,s){var i,a,c,l,h,f=t.length,_=f,m=0;for(n.__k=new Array(s),i=0;i<s;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[i]=ri(null,a,null,null,null):qi(a)?a=n.__k[i]=ri(Q,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[i]=ri(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[i]=a,l=i+m,a.__=n,a.__b=n.__b+1,c=null,(h=a.__i=im(a,t,l,_))!=-1&&(_--,(c=t[h])&&(c.__u|=2)),c==null||c.__v==null?(h==-1&&(s>f?m--:s<f&&m++),typeof a.type!="function"&&(a.__u|=4)):h!=l&&(h==l-1?m--:h==l+1?m++:(h>l?m--:m++,a.__u|=4))):n.__k[i]=null;if(_)for(i=0;i<f;i++)(c=t[i])!=null&&!(2&c.__u)&&(c.__e==r&&(r=Nn(c)),Dh(c,c));return r}function kh(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=kh(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Nn(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function im(n,e,t,r){var s,i,a,c=n.key,l=n.type,h=e[t],f=h!=null&&(2&h.__u)==0;if(h===null&&c==null||f&&c==h.key&&l==h.type)return t;if(r>(f?1:0)){for(s=t-1,i=t+1;s>=0||i<e.length;)if((h=e[a=s>=0?s--:i++])!=null&&!(2&h.__u)&&c==h.key&&l==h.type)return a}return-1}function Tl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||tm.test(e)?t:t+"px"}function Hs(n,e,t,r,s){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Tl(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Tl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Ah,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t[jr]=r[jr]:(t[jr]=Aa,n.addEventListener(e,i?Ko:Go,i)):n.removeEventListener(e,i?Ko:Go,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Il(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[ni]==null)e[ni]=Aa++;else if(e[ni]<t[jr])return;return t(he.event?he.event(e):e)}}}function Ra(n,e,t,r,s,i,a,c,l,h){var f,_,m,w,R,P,N,V,L,$,K,te,J,I,y,T,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[c=e.__e=t.__e]),(f=he.__b)&&f(e);e:if(typeof b=="function"){_=a.length;try{if(L=e.props,$=b.prototype&&b.prototype.render,K=(f=b.contextType)&&r[f.__c],te=f?K?K.props.value:f.__:r,t.__c?V=(m=e.__c=t.__c).__=m.__E:($?e.__c=m=new b(L,te):(e.__c=m=new si(L,te),m.constructor=b,m.render=am),K&&K.sub(m),m.state||(m.state={}),m.__n=r,w=m.__d=!0,m.__h=[],m._sb=[]),$&&m.__s==null&&(m.__s=m.state),$&&b.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=Pt({},m.__s)),Pt(m.__s,b.getDerivedStateFromProps(L,m.__s))),R=m.props,P=m.state,m.__v=e,w)$&&b.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),$&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if($&&b.getDerivedStateFromProps==null&&L!==R&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(L,te),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(L,m.__s,te)===!1){e.__v!=t.__v&&(m.props=L,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),_i.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m),c=Nn(t);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(L,m.__s,te),$&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(R,P,N)})}if(m.context=te,m.props=L,m.__P=n,m.__e=!1,J=he.__r,I=0,$)m.state=m.__s,m.__d=!1,J&&J(e),f=m.render(m.props,m.state,m.context),_i.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,J&&J(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++I<25);m.state=m.__s,m.getChildContext!=null&&(r=Pt(Pt({},r),m.getChildContext())),$&&!w&&m.getSnapshotBeforeUpdate!=null&&(N=m.getSnapshotBeforeUpdate(R,P)),y=f!=null&&f.type===Q&&f.key==null?Nh(f.props.children):f,c=Rh(n,qi(y)?y:[y],e,t,r,s,i,a,c,l,h),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),V&&(m.__E=m.__=null)}catch(A){if(a.length=_,e.__v=null,l||i!=null){if(A.then){for(e.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i!=null&&(i[i.indexOf(c)]=null),e.__e=c}else if(i!=null)for(T=i.length;T--;)Sa(i[T])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),A.then||Ph(e),he.__e(A,e,t)}}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=om(t.__e,e,t,r,s,i,a,l,h);return(f=he.diffed)&&f(e),128&e.__u?void 0:c}function Ph(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Ph))}function Ch(n,e,t){for(var r=0;r<t.length;r++)ka(t[r],t[++r],t[++r]);he.__c&&he.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){he.__e(i,s.__v)}})}function Nh(n){return typeof n!="object"||n==null||n.__b>0?n:qi(n)?n.map(Nh):n.constructor!==void 0?null:Pt({},n)}function om(n,e,t,r,s,i,a,c,l){var h,f,_,m,w,R,P,N=t.props||gi,V=e.props,L=e.type;if(L=="svg"?s="http://www.w3.org/2000/svg":L=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(h=0;h<i.length;h++)if((w=i[h])&&"setAttribute"in w==!!L&&(L?w.localName==L:w.nodeType==3)){n=w,i[h]=null;break}}if(n==null){if(L==null)return document.createTextNode(V);n=document.createElementNS(s,L,V.is&&V),c&&(he.__m&&he.__m(e,i),c=!1),i=null}if(L==null)N===V||c&&n.data==V||(n.data=V);else{if(i=L=="textarea"&&V.defaultValue!=null?null:i&&ji.call(n.childNodes),!c&&i!=null)for(N={},h=0;h<n.attributes.length;h++)N[(w=n.attributes[h]).name]=w.value;for(h in N)w=N[h],h=="dangerouslySetInnerHTML"?_=w:h=="children"||h in V||h=="value"&&"defaultValue"in V||h=="checked"&&"defaultChecked"in V||Hs(n,h,null,w,s);for(h in V)w=V[h],h=="children"?m=w:h=="dangerouslySetInnerHTML"?f=w:h=="value"?R=w:h=="checked"?P=w:c&&typeof w!="function"||N[h]===w||Hs(n,h,w,N[h],s);if(f)c||_&&(f.__html==_.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(_&&(n.innerHTML=""),Rh(e.type=="template"?n.content:n,qi(m)?m:[m],e,t,r,L=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:t.__k&&Nn(t,0),c,l),i!=null)for(h=i.length;h--;)Sa(i[h]);c&&L!="textarea"||(h="value",L=="progress"&&R==null?n.removeAttribute("value"):R!=null&&(R!==n[h]||L=="progress"&&!R||L=="option"&&R!=N[h])&&Hs(n,h,R,N[h],s),h="checked",P!=null&&P!=n[h]&&Hs(n,h,P,N[h],s))}return n}function ka(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){he.__e(s,t)}}function Dh(n,e,t){var r,s;if(he.unmount&&he.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||ka(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){he.__e(i,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&Dh(r[s],e,t||typeof n.type!="function");t||Sa(n.__e),n.__c=n.__=n.__e=void 0}function am(n,e,t){return this.constructor(n,t)}function cm(n,e,t){var r,s,i,a;e==document&&(e=document.documentElement),he.__&&he.__(n,e),s=(r=!1)?null:e.__k,i=[],a=[],Ra(e,n=e.__k=nm(Q,null,[n]),s||gi,gi,e.namespaceURI,s?null:e.firstChild?ji.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,a),Ch(i,n,a),n.props.children=null}ji=_i.slice,he={__e:function(n,e,t,r){for(var s,i,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},Th=0,si.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Pt({},this.state),typeof n=="function"&&(n=n(Pt({},t),this.props)),n&&Pt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),El(this))},si.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),El(this))},si.prototype.render=Q,Zt=[],Ih=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,bh=function(n,e){return n.__v.__b-e.__v.__b},yi.__r=0,Do=Math.random().toString(8),ni="__d"+Do,jr="__a"+Do,Ah=/(PointerCapture)$|Capture$/i,Aa=0,Go=Il(!1),Ko=Il(!0);var lm=0;function d(n,e,t,r,s,i){e||(e={});var a,c,l=e;if("ref"in l)for(c in l={},e)c=="ref"?a=e[c]:l[c]=e[c];var h={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--lm,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)l[c]===void 0&&(l[c]=a[c]);return he.vnode&&he.vnode(h),h}var Kr,we,Mo,bl,vi=0,Mh=[],Ie=he,Al=Ie.__b,Sl=Ie.__r,Rl=Ie.diffed,kl=Ie.__c,Pl=Ie.unmount,Cl=Ie.__;function Pa(n,e){Ie.__h&&Ie.__h(we,n,vi||e),vi=0;var t=we.__H||(we.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function se(n){return vi=1,um(Lh,n)}function um(n,e,t){var r=Pa(Kr++,2);if(r.t=n,!r.__c&&(r.__=[Lh(void 0,e),function(c){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,c);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=we,!we.__f)){var s=function(c,l,h){if(!r.__c.__H)return!0;var f=!1,_=r.__c.props!==c;if(r.__c.__H.__.some(function(w){if(w.__N){f=!0;var R=w.__[0];w.__=w.__N,w.__N=void 0,R!==w.__[0]&&(_=!0)}}),i){var m=i.call(this,c,l,h);return f?m||_:m}return!f||_};we.__f=!0;var i=we.shouldComponentUpdate,a=we.componentWillUpdate;we.componentWillUpdate=function(c,l,h){if(this.__e){var f=i;i=void 0,s(c,l,h),i=f}a&&a.call(this,c,l,h)},we.shouldComponentUpdate=s}return r.__N||r.__}function ye(n,e){var t=Pa(Kr++,3);!Ie.__s&&Oh(t.__H,e)&&(t.__=n,t.u=e,we.__H.__h.push(t))}function Vh(n){return vi=5,ze(function(){return{current:n}},[])}function ze(n,e){var t=Pa(Kr++,7);return Oh(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function hm(){for(var n;n=Mh.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(ii),e.__h.some(Qo),e.__h=[]}catch(t){e.__h=[],Ie.__e(t,n.__v)}}}Ie.__b=function(n){we=null,Al&&Al(n)},Ie.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Cl&&Cl(n,e)},Ie.__r=function(n){Sl&&Sl(n),Kr=0;var e=(we=n.__c).__H;e&&(Mo===we?(e.__h=[],we.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(ii),e.__h.some(Qo),e.__h=[],Kr=0)),Mo=we},Ie.diffed=function(n){Rl&&Rl(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Mh.push(e)!==1&&bl===Ie.requestAnimationFrame||((bl=Ie.requestAnimationFrame)||dm)(hm)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Mo=we=null},Ie.__c=function(n,e){e.some(function(t){try{t.__h.some(ii),t.__h=t.__h.filter(function(r){return!r.__||Qo(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Ie.__e(r,t.__v)}}),kl&&kl(n,e)},Ie.unmount=function(n){Pl&&Pl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{ii(r)}catch(s){e=s}}),t.__H=void 0,e&&Ie.__e(e,t.__v))};var Nl=typeof requestAnimationFrame=="function";function dm(n){var e,t=function(){clearTimeout(r),Nl&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);Nl&&(e=requestAnimationFrame(t))}function ii(n){var e=we,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),we=e}function Qo(n){var e=we;n.__c=n.__(),we=e}function Oh(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Lh(n,e){return typeof e=="function"?e(n):e}const xh={netflix:"E50914",spotify:"1DB954",youtube:"FF0000",grab:"00B14F",shopee:"EE4D2D",line:"00C300",starbucks:"006241",mcdonalds:"FBC817",kfc:"F40027",apple:"000000",applemusic:"FA243C",google:"4285F4",googlecloud:"4285F4",openai:"412991",anthropic:"191919",shell:"FFD500",foodpanda:"D70F64",airbnb:"FF5A5F",icloud:"3693F3",amazon:"FF9900",hbo:"000000",tiktok:"000000",instagram:"E4405F",facebook:"0866FF",whatsapp:"25D366",telegram:"26A5E4",discord:"5865F2",twitch:"9146FF",steam:"000000",playstation:"003791",nintendoswitch:"E60012",roblox:"000000",uber:"000000",airasia:"FF0000",expedia:"191E3B",tripadvisor:"34E0A1",ikea:"0058A3",uniqlo:"FF0000",handm:"E50010",zara:"000000",nike:"111111",adidas:"000000",samsung:"1428A0",adobe:"FF0000",dropbox:"0061FF",github:"181717",canva:"00C4CC",notion:"000000",figma:"F24E1E",zoom:"0B5CFF",slack:"4A154B",paypal:"003087",aliexpress:"FF4747",googledrive:"4285F4",googleplay:"414141",soundcloud:"FF5500",tidal:"000000",linkedin:"0A66C2",patreon:"000000",youtubemusic:"FF0000",toyota:"EB0A1E",honda:"E40521",mazda:"101010",nissan:"C3002F",mitsubishi:"E60012",bmw:"0066B1",mercedes:"242424",tesla:"CC0000",suzuki:"E30613"},fm=n=>{const e=parseInt(n.slice(1),16);return .299*(e>>16&255)+.587*(e>>8&255)+.114*(e&255)>170},Fh=n=>fm(n)?"#111111":"#ffffff",F=(n,e,t,r={})=>{const s=r.bg||"#"+xh[t];return{key:n,re:e,si:t,bg:s,fg:r.fg||Fh(s),...r}},Mr=(n,e,t)=>F(n,e,t,{bg:"#ffffff",fg:"#"+xh[t],ring:!0}),tt=(n,e,t,r={})=>({key:n,re:e,bg:t,fg:r.fg||Fh(t),...r}),pm=[F("netflix",/netflix|เน็ตฟลิกซ์/,"netflix",{bg:"#000000",fg:"#e50914"}),F("youtubemusic",/youtube ?music|ยูทูบ ?มิวสิค/,"youtubemusic"),Mr("youtube",/youtube|ยูทูบ/,"youtube"),F("spotify",/spotify|สปอติฟาย/,"spotify",{bg:"#191414",fg:"#1ed760"}),tt("disney",/disney|ดิสนีย์/,"#113ccf"),F("hbo",/\bhbo\b/,"hbo"),F("applemusic",/apple ?music/,"applemusic"),F("icloud",/icloud/,"icloud"),F("apple",/apple|itunes/,"apple"),Mr("googlecloud",/google ?cloud/,"googlecloud"),Mr("googledrive",/google ?(drive|one)/,"googledrive"),Mr("googleplay",/google ?play/,"googleplay"),Mr("google",/google|กูเกิล/,"google"),F("chatgpt",/chatgpt|openai/,"openai",{bg:"#10a37f",fg:"#ffffff"}),F("claude",/claude|anthropic/,"anthropic",{bg:"#d97757",fg:"#ffffff"}),tt("lineman",/line ?man|ไลน์แมน|lpth\*pf|\blm_/,"#06c755"),F("line",/\bline\b|ไลน์/,"line",{bg:"#06c755",fg:"#ffffff"}),F("grab",/\bgrab|แกร็บ/,"grab"),F("uber",/\buber\b/,"uber"),F("foodpanda",/foodpanda|ฟู้ดแพนด้า/,"foodpanda"),tt("seven",/7-?11|7-eleven|seven ?eleven|เซเว่น/,"#00a650"),tt("cafeamazon",/caf[eé] ?amazon|คาเฟ่ ?อเมซอน|อเมซอน/,"#00693c"),F("amazon",/\bamazon\b/,"amazon",{bg:"#232f3e",fg:"#ff9900"}),F("starbucks",/starbucks|สตาร์บัค/,"starbucks",{round:!0}),F("shopee",/shopee|ช้อปปี้/,"shopee"),tt("lazada",/lazada|ลาซาด้า/,"#0f146d"),F("aliexpress",/aliexpress|อาลีเอ็กซ์/,"aliexpress"),F("mcdonald",/mcdonald|แมคโดนัลด์|แมค ?ดี/,"mcdonalds",{bg:"#da291c",fg:"#ffc72c"}),F("kfc",/\bkfc|เคเอฟซี/,"kfc"),tt("ais",/\bais\b|เอไอเอส/,"#8dc63f"),tt("true",/\btrue\b|ทรูมูฟ|ทรูออนไลน์/,"#ee2e24"),tt("3bb",/3bb/,"#0055a5"),tt("ptt",/\bptt\b|ปตท/,"#00439c"),F("shell",/\bshell\b|เชลล์/,"shell",{bg:"#ffd500",fg:"#dd1d21"}),tt("lotus",/lotus|โลตัส/,"#00a651"),tt("bigc",/big ?c\b|บิ๊กซี/,"#ed1c24"),tt("makro",/makro|แม็คโคร|แมคโคร/,"#003d8f"),F("airasia",/airasia|แอร์เอเชีย/,"airasia"),F("airbnb",/airbnb/,"airbnb"),F("expedia",/expedia/,"expedia"),F("tripadvisor",/tripadvisor/,"tripadvisor"),F("tiktok",/tiktok|ติ๊กต็อก/,"tiktok"),F("instagram",/instagram/,"instagram"),F("facebook",/facebook|เฟซบุ๊ก/,"facebook"),F("whatsapp",/whatsapp/,"whatsapp"),F("telegram",/telegram/,"telegram"),F("discord",/discord/,"discord"),F("twitch",/twitch/,"twitch"),F("steam",/steam|สตีม/,"steam"),F("playstation",/playstation|เพลย์สเตชัน|\bpsn\b/,"playstation"),F("nintendo",/nintendo|นินเทนโด/,"nintendoswitch"),F("roblox",/roblox/,"roblox"),F("soundcloud",/soundcloud/,"soundcloud"),F("tidal",/\btidal\b/,"tidal"),F("linkedin",/linkedin/,"linkedin"),F("patreon",/patreon/,"patreon"),F("paypal",/paypal/,"paypal"),F("github",/github/,"github"),F("adobe",/adobe/,"adobe"),F("dropbox",/dropbox/,"dropbox"),F("canva",/canva/,"canva"),F("notion",/notion/,"notion"),F("figma",/figma/,"figma"),F("zoom",/\bzoom\b/,"zoom"),F("slack",/\bslack\b/,"slack"),F("samsung",/samsung|ซัมซุง/,"samsung"),F("ikea",/ikea|อิเกีย/,"ikea"),F("uniqlo",/uniqlo|ยูนิโคล่/,"uniqlo"),F("handm",/h&m/,"handm"),F("zara",/\bzara\b/,"zara"),F("nike",/\bnike\b|ไนกี้/,"nike"),F("adidas",/adidas|อาดิดาส/,"adidas"),F("toyota",/toyota|โตโยต้า|โตโยตา/,"toyota"),F("honda",/honda|ฮอนด้า|civic|ซีวิค/,"honda"),F("mazda",/mazda|มาสด้า/,"mazda"),F("nissan",/nissan|นิสสัน/,"nissan"),F("mitsubishi",/mitsubishi|มิตซู/,"mitsubishi"),F("bmw",/\bbmw\b/,"bmw"),F("mercedes",/mercedes|benz|เบนซ์/,"mercedes"),F("tesla",/tesla|เทสล่า/,"tesla"),F("suzuki",/suzuki|ซูซูกิ/,"suzuki")];function mm(n){const e=String(n||"").toLowerCase();return e.trim()&&pm.find(t=>t.re.test(e))||null}const Dl={home:d(Q,{children:[d("path",{d:"M3.5 11 12 4l8.5 7"}),d("path",{d:"M5.5 9.8V20h13V9.8"}),d("path",{d:"M10 20v-5.5h4V20"})]}),bill:d(Q,{children:[d("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),d("path",{d:"M9 8.5h6M9 12h6"})]}),swap:d("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:d(Q,{children:[d("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),d("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),d("path",{d:"M15.5 13.8h2.2"})]}),user:d(Q,{children:[d("circle",{cx:"12",cy:"8.5",r:"3.6"}),d("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:d("path",{d:"M12 5v14M5 12h14"}),check:d("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:d(Q,{children:[d("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),d("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),d("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),d("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:d("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:d("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:d("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:d("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:d("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:d(Q,{children:[d("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),d("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:d(Q,{children:[d("path",{d:"M5.5 8h13l-1 11.5h-11z"}),d("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:d("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:d(Q,{children:[d("circle",{cx:"6",cy:"12",r:"1.1"}),d("circle",{cx:"12",cy:"12",r:"1.1"}),d("circle",{cx:"18",cy:"12",r:"1.1"})]}),people:d(Q,{children:[d("circle",{cx:"9",cy:"8.5",r:"3.2"}),d("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),d("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:d(Q,{children:[d("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),d("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),bell:d(Q,{children:[d("path",{d:"M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"}),d("path",{d:"M10 20.5h4"})]}),trash:d(Q,{children:[d("path",{d:"M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7"}),d("path",{d:"M10.5 11v5M13.5 11v5"})]}),alert:d(Q,{children:[d("path",{d:"M12 4.5 3.5 19h17z"}),d("path",{d:"M12 10v4.5M12 17h.01"})]}),chart:d("path",{d:"M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5"}),sliders:d(Q,{children:[d("path",{d:"M5 7h9M18 7h1M5 17h1M10 17h9"}),d("circle",{cx:"16",cy:"7",r:"2"}),d("circle",{cx:"8",cy:"17",r:"2"})]}),coffee:d(Q,{children:[d("path",{d:"M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z"}),d("path",{d:"M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4.5v2M12 4.5v2"})]}),key:d(Q,{children:[d("circle",{cx:"8.5",cy:"14.5",r:"3.5"}),d("path",{d:"M11 12 19 4.5M16 7.5l2.5 2.5M14 9.5l1.8 1.8"})]}),film:d(Q,{children:[d("rect",{x:"4",y:"5",width:"16",height:"14",rx:"2"}),d("path",{d:"M8 5v14M16 5v14M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4"})]}),pill:d(Q,{children:[d("rect",{x:"3.5",y:"9",width:"17",height:"6.5",rx:"3.25",transform:"rotate(-40 12 12)"}),d("path",{d:"m9.4 9.4 5.2 5.2"})]}),plane:d("path",{d:"M3.5 13.5 20.5 5l-4 14-4.5-4.5-3 3v-4.5zM11.5 14.5 20.5 5"}),gift:d(Q,{children:[d("rect",{x:"4",y:"9",width:"16",height:"4",rx:"1"}),d("path",{d:"M5.5 13v6.5h13V13M12 9v10.5M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9zM12 9c1-3.5 5-3.5 5-1.2 0 1.2-2 1.2-5 1.2z"})]}),paw:d(Q,{children:[d("circle",{cx:"7",cy:"10",r:"1.6"}),d("circle",{cx:"11",cy:"6.8",r:"1.6"}),d("circle",{cx:"15.5",cy:"7.5",r:"1.6"}),d("circle",{cx:"18",cy:"11.5",r:"1.6"}),d("path",{d:"M8 17.5c0-2.5 2.2-4.5 4.5-4.5s4.5 2 4 4.2c-.4 1.8-2 2.3-4 2.3S8 19.5 8 17.5z"})]}),search:d(Q,{children:[d("circle",{cx:"11",cy:"11",r:"6"}),d("path",{d:"m16 16 4 4"})]}),pencil:d("path",{d:"M5 19l1-4L16.5 4.5a2 2 0 0 1 3 3L9 18zM14.5 6.5l3 3"}),close:d("path",{d:"M6 6l12 12M18 6 6 18"}),copy:d(Q,{children:[d("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),d("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),play:d("polygon",{points:"8 5 19 12 8 19",style:"fill:currentColor"}),shield:d("path",{d:"M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z"}),mobile:d(Q,{children:[d("rect",{x:"7",y:"3",width:"10",height:"18",rx:"2.5"}),d("path",{d:"M11 17.5h2"})]}),external:d(Q,{children:d("path",{d:"M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"})}),layers:d(Q,{children:[d("polygon",{points:"12 3 3 8 12 13 21 8"}),d("path",{d:"m3 12 9 5 9-5M3 16l9 5 9-5"})]}),sparkle:d("path",{d:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"}),sun:d(Q,{children:[d("circle",{cx:"12",cy:"12",r:"4"}),d("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),moon:d("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"}),list:d("path",{d:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"}),upload:d("path",{d:"M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14"}),grid:d(Q,{children:[d("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"13",y:"4",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1.5"}),d("rect",{x:"13",y:"13",width:"7",height:"7",rx:"1.5"})]}),heart:d("path",{d:"M12 20s-7.5-4.4-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"}),star:d("path",{d:"m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"}),target:d(Q,{children:[d("circle",{cx:"12",cy:"12",r:"8.5"}),d("circle",{cx:"12",cy:"12",r:"4.8"}),d("circle",{cx:"12",cy:"12",r:"1.2"})]}),calendar:d(Q,{children:[d("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),d("path",{d:"M16 2v4M8 2v4M3 10h18"})]})};function X({name:n,size:e,class:t=""}){return d("svg",{class:`ic ${t}`,viewBox:"0 0 24 24","aria-hidden":"true",style:e?{width:e,height:e}:void 0,children:Dl[n]||Dl.dots})}const gm={"fa-utensils":"food","fa-mug-hot":"coffee","fa-wine-glass":"coffee","fa-car":"car","fa-gas-pump":"car","fa-bus":"car","fa-plane":"plane","fa-cart-shopping":"bag","fa-basket-shopping":"bag","fa-scissors":"bag","fa-pills":"pill","fa-paw":"paw","fa-gift":"gift","fa-film":"film","fa-house":"key","fa-bolt":"bolt","fa-mobile-screen":"bolt","fa-mobile-screen-button":"bolt","fa-arrow-down":"down"},_m=n=>gm[n]||"bill";let Xo=null,Ml=null;const Jo=new Set;function ym(){Ml||(Ml=$t(()=>import("./brand-paths-Dbek54K2.js"),[]).then(n=>{Xo=n.SI,Jo.forEach(e=>e())}).catch(()=>{}))}function vm(){const[,n]=se(0);return ye(()=>{if(Xo)return;const e=()=>n(t=>t+1);return Jo.add(e),ym(),()=>Jo.delete(e)},[]),Xo}function wm({b:n,size:e,name:t}){const r=vm();if(n.si&&r&&r[n.si]){const s=Math.round(e*.58);return d("svg",{viewBox:"0 0 24 24",width:s,height:s,"aria-hidden":"true",children:d("path",{d:r[n.si],fill:n.fg})})}return d(X,{name:t,size:Math.round(e*.5)})}function Em({desc:n,name:e,size:t=40,iconSize:r}){const s=mm(n);if(!s)return d("span",{class:"ico",style:t!==40?{width:t,height:t}:void 0,children:d(X,{name:e,size:r})});const i={width:t,height:t,background:s.bg,color:s.fg,borderRadius:s.round?"50%":Math.round(t*.3)};return s.ring&&(i.boxShadow="inset 0 0 0 1.5px #e3e8f5"),d("span",{class:"ico brand",style:i,"aria-hidden":"true",children:d(wm,{b:s,size:t,name:e})})}function Vl({size:n=24}){return d("svg",{viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",style:{flex:"none"},children:[d("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),d("path",{d:"M19 13h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),d("path",{d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"}),d("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"}),d("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d"})]})}function Vr({size:n=88,label:e=""}){return d("div",{class:"ld-wrap",role:"status","aria-live":"polite",children:[d("svg",{class:"ld",viewBox:"0 0 64 64",width:n,height:n,"aria-hidden":"true",children:[d("rect",{width:"64",height:"64",rx:"18",fill:"#2343c9"}),d("g",{class:"ld-l",children:[d("path",{d:"M19 13h13v35l-4.3 3-4.4-3-4.3 3z",fill:"#ffffff"}),d("rect",{x:"22.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),d("g",{class:"ld-r",children:[d("path",{d:"M32 13h13v38l-4.3-3-4.4 3-4.3-3z",fill:"#ffffff"}),d("rect",{x:"34.5",y:"22",width:"7",height:"4",rx:"2",fill:"#ffc23d",class:"ld-pill"})]}),d("path",{class:"ld-cut",d:"M32 16v31",stroke:"#2343c9","stroke-width":"3","stroke-dasharray":"3.5 3.5"})]}),e?d("p",{class:"ld-t",children:e}):null]})}var Ol={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,_=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,w=h&63;l||(w=64,a||(m=64)),r.push(t[f],t[_],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Uh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||_==null)throw new Im;const m=i<<2|c>>4;if(r.push(m),h!==64){const w=c<<4&240|h>>2;if(r.push(w),_!==64){const R=h<<6&192|_;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Im extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bm=function(n){const e=Uh(n);return Bh.encodeByteArray(e,!0)},wi=function(n){return bm(n).replace(/\./g,"")},$h=function(n){try{return Bh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Am(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sm=()=>Am().__FIREBASE_DEFAULTS__,Rm=()=>{if(typeof process>"u"||typeof Ol>"u")return;const n=Ol.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},km=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$h(n[1]);return e&&JSON.parse(e)},zi=()=>{try{return Sm()||Rm()||km()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jh=n=>{var e,t;return(t=(e=zi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Pm=n=>{const e=jh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},qh=()=>{var n;return(n=zi())===null||n===void 0?void 0:n.config},zh=n=>{var e;return(e=zi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Nm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wi(JSON.stringify(t)),wi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Mm(){var n;const e=(n=zi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Om(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xm(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fm(){return!Mm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Um(){try{return typeof indexedDB=="object"}catch{return!1}}function Bm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="FirebaseError";class jt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$m,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?jm(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new jt(s,c,r)}}function jm(n,e){return n.replace(qm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qm=/\{\$([^}]+)}/g;function zm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ei(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ll(i)&&Ll(a)){if(!Ei(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ll(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wm(n,e){const t=new Hm(n,e);return t.subscribe.bind(t)}class Hm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Vo),s.error===void 0&&(s.error=Vo),s.complete===void 0&&(s.complete=Vo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vo(){}/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class Dn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class Km{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Cm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xm(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qm(n){return n===Sn?void 0:n}function Xm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Km(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const Ym={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Zm=ne.INFO,eg={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},tg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=eg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=Zm,this._logHandler=tg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ym[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const ng=(n,e)=>e.some(t=>n instanceof t);let xl,Fl;function rg(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sg(){return Fl||(Fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wh=new WeakMap,Yo=new WeakMap,Hh=new WeakMap,Oo=new WeakMap,Na=new WeakMap;function ig(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(on(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wh.set(t,n)}).catch(()=>{}),Na.set(e,n),e}function og(n){if(Yo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Yo.set(n,e)}let Zo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return on(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ag(n){Zo=n(Zo)}function cg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Lo(this),e,...t);return Hh.set(r,e.sort?e.sort():[e]),on(r)}:sg().includes(n)?function(...e){return n.apply(Lo(this),e),on(Wh.get(this))}:function(...e){return on(n.apply(Lo(this),e))}}function lg(n){return typeof n=="function"?cg(n):(n instanceof IDBTransaction&&og(n),ng(n,rg())?new Proxy(n,Zo):n)}function on(n){if(n instanceof IDBRequest)return ig(n);if(Oo.has(n))return Oo.get(n);const e=lg(n);return e!==n&&(Oo.set(n,e),Na.set(e,n)),e}const Lo=n=>Na.get(n);function ug(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=on(a);return r&&a.addEventListener("upgradeneeded",l=>{r(on(a.result),l.oldVersion,l.newVersion,on(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const hg=["get","getKey","getAll","getAllKeys","count"],dg=["put","add","delete","clear"],xo=new Map;function Ul(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xo.get(e))return xo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=dg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hg.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return xo.set(e,i),i}ag(n=>({...n,get:(e,t,r)=>Ul(e,t)||n.get(e,t,r),has:(e,t)=>!!Ul(e,t)||n.has(e,t)}));/**
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
 */class fg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function pg(n){const e=n.getComponent();return e?.type==="VERSION"}const ea="@firebase/app",Bl="0.10.13";/**
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
 */const Ot=new Ca("@firebase/app"),mg="@firebase/app-compat",gg="@firebase/analytics-compat",_g="@firebase/analytics",yg="@firebase/app-check-compat",vg="@firebase/app-check",wg="@firebase/auth",Eg="@firebase/auth-compat",Tg="@firebase/database",Ig="@firebase/data-connect",bg="@firebase/database-compat",Ag="@firebase/functions",Sg="@firebase/functions-compat",Rg="@firebase/installations",kg="@firebase/installations-compat",Pg="@firebase/messaging",Cg="@firebase/messaging-compat",Ng="@firebase/performance",Dg="@firebase/performance-compat",Mg="@firebase/remote-config",Vg="@firebase/remote-config-compat",Og="@firebase/storage",Lg="@firebase/storage-compat",xg="@firebase/firestore",Fg="@firebase/vertexai-preview",Ug="@firebase/firestore-compat",Bg="firebase",$g="10.14.1";/**
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
 */const ta="[DEFAULT]",jg={[ea]:"fire-core",[mg]:"fire-core-compat",[_g]:"fire-analytics",[gg]:"fire-analytics-compat",[vg]:"fire-app-check",[yg]:"fire-app-check-compat",[wg]:"fire-auth",[Eg]:"fire-auth-compat",[Tg]:"fire-rtdb",[Ig]:"fire-data-connect",[bg]:"fire-rtdb-compat",[Ag]:"fire-fn",[Sg]:"fire-fn-compat",[Rg]:"fire-iid",[kg]:"fire-iid-compat",[Pg]:"fire-fcm",[Cg]:"fire-fcm-compat",[Ng]:"fire-perf",[Dg]:"fire-perf-compat",[Mg]:"fire-rc",[Vg]:"fire-rc-compat",[Og]:"fire-gcs",[Lg]:"fire-gcs-compat",[xg]:"fire-fst",[Ug]:"fire-fst-compat",[Fg]:"fire-vertex","fire-js":"fire-js",[Bg]:"fire-js-all"};/**
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
 */const Ti=new Map,qg=new Map,na=new Map;function $l(n,e){try{n.container.addComponent(e)}catch(t){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tr(n){const e=n.name;if(na.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,n);for(const t of Ti.values())$l(t,n);for(const t of qg.values())$l(t,n);return!0}function Da(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ct(n){return n.settings!==void 0}/**
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
 */const zg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new is("app","Firebase",zg);/**
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
 */class Wg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=$g;function Gh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ta,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});if(t||(t=qh()),!t)throw an.create("no-options");const i=Ti.get(s);if(i){if(Ei(t,i.options)&&Ei(r,i.config))return i;throw an.create("duplicate-app",{appName:s})}const a=new Jm(s);for(const l of na.values())a.addComponent(l);const c=new Wg(t,r,a);return Ti.set(s,c),c}function Kh(n=ta){const e=Ti.get(n);if(!e&&n===ta&&qh())return Gh();if(!e)throw an.create("no-app",{appName:n});return e}function cn(n,e,t){var r;let s=(r=jg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}tr(new Dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Hg="firebase-heartbeat-database",Gg=1,Qr="firebase-heartbeat-store";let Fo=null;function Qh(){return Fo||(Fo=ug(Hg,Gg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qr)}catch(t){console.warn(t)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),Fo}async function Kg(n){try{const t=(await Qh()).transaction(Qr),r=await t.objectStore(Qr).get(Xh(n));return await t.done,r}catch(e){if(e instanceof jt)Ot.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e?.message});Ot.warn(t.message)}}}async function jl(n,e){try{const r=(await Qh()).transaction(Qr,"readwrite");await r.objectStore(Qr).put(e,Xh(n)),await r.done}catch(t){if(t instanceof jt)Ot.warn(t.message);else{const r=an.create("idb-set",{originalErrorMessage:t?.message});Ot.warn(r.message)}}}function Xh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qg=1024,Xg=30*24*60*60*1e3;class Jg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ql();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Xg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ql(),{heartbeatsToSend:r,unsentEntries:s}=Yg(this._heartbeatsCache.heartbeats),i=wi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ot.warn(t),""}}}function ql(){return new Date().toISOString().substring(0,10)}function Yg(n,e=Qg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Um()?Bm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zl(n){return wi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function e_(n){tr(new Dn("platform-logger",e=>new fg(e),"PRIVATE")),tr(new Dn("heartbeat",e=>new Jg(e),"PRIVATE")),cn(ea,Bl,n),cn(ea,Bl,"esm2017"),cn("fire-js","")}e_("");var t_="firebase",n_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(t_,n_,"app");var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kn,Jh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(b,A,v){for(var E=Array(arguments.length-2),de=2;de<arguments.length;de++)E[de-2]=arguments[de];return y.prototype[A].apply(b,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,T){T||(T=0);var b=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)b[A]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(A=0;16>A;++A)b[A]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],A=I.g[2];var v=I.g[3],E=y+(v^T&(A^v))+b[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=v+(A^y&(T^A))+b[1]+3905402710&4294967295,v=y+(E<<12&4294967295|E>>>20),E=A+(T^v&(y^T))+b[2]+606105819&4294967295,A=v+(E<<17&4294967295|E>>>15),E=T+(y^A&(v^y))+b[3]+3250441966&4294967295,T=A+(E<<22&4294967295|E>>>10),E=y+(v^T&(A^v))+b[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=v+(A^y&(T^A))+b[5]+1200080426&4294967295,v=y+(E<<12&4294967295|E>>>20),E=A+(T^v&(y^T))+b[6]+2821735955&4294967295,A=v+(E<<17&4294967295|E>>>15),E=T+(y^A&(v^y))+b[7]+4249261313&4294967295,T=A+(E<<22&4294967295|E>>>10),E=y+(v^T&(A^v))+b[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=v+(A^y&(T^A))+b[9]+2336552879&4294967295,v=y+(E<<12&4294967295|E>>>20),E=A+(T^v&(y^T))+b[10]+4294925233&4294967295,A=v+(E<<17&4294967295|E>>>15),E=T+(y^A&(v^y))+b[11]+2304563134&4294967295,T=A+(E<<22&4294967295|E>>>10),E=y+(v^T&(A^v))+b[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=v+(A^y&(T^A))+b[13]+4254626195&4294967295,v=y+(E<<12&4294967295|E>>>20),E=A+(T^v&(y^T))+b[14]+2792965006&4294967295,A=v+(E<<17&4294967295|E>>>15),E=T+(y^A&(v^y))+b[15]+1236535329&4294967295,T=A+(E<<22&4294967295|E>>>10),E=y+(A^v&(T^A))+b[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=v+(T^A&(y^T))+b[6]+3225465664&4294967295,v=y+(E<<9&4294967295|E>>>23),E=A+(y^T&(v^y))+b[11]+643717713&4294967295,A=v+(E<<14&4294967295|E>>>18),E=T+(v^y&(A^v))+b[0]+3921069994&4294967295,T=A+(E<<20&4294967295|E>>>12),E=y+(A^v&(T^A))+b[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=v+(T^A&(y^T))+b[10]+38016083&4294967295,v=y+(E<<9&4294967295|E>>>23),E=A+(y^T&(v^y))+b[15]+3634488961&4294967295,A=v+(E<<14&4294967295|E>>>18),E=T+(v^y&(A^v))+b[4]+3889429448&4294967295,T=A+(E<<20&4294967295|E>>>12),E=y+(A^v&(T^A))+b[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=v+(T^A&(y^T))+b[14]+3275163606&4294967295,v=y+(E<<9&4294967295|E>>>23),E=A+(y^T&(v^y))+b[3]+4107603335&4294967295,A=v+(E<<14&4294967295|E>>>18),E=T+(v^y&(A^v))+b[8]+1163531501&4294967295,T=A+(E<<20&4294967295|E>>>12),E=y+(A^v&(T^A))+b[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=v+(T^A&(y^T))+b[2]+4243563512&4294967295,v=y+(E<<9&4294967295|E>>>23),E=A+(y^T&(v^y))+b[7]+1735328473&4294967295,A=v+(E<<14&4294967295|E>>>18),E=T+(v^y&(A^v))+b[12]+2368359562&4294967295,T=A+(E<<20&4294967295|E>>>12),E=y+(T^A^v)+b[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=v+(y^T^A)+b[8]+2272392833&4294967295,v=y+(E<<11&4294967295|E>>>21),E=A+(v^y^T)+b[11]+1839030562&4294967295,A=v+(E<<16&4294967295|E>>>16),E=T+(A^v^y)+b[14]+4259657740&4294967295,T=A+(E<<23&4294967295|E>>>9),E=y+(T^A^v)+b[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=v+(y^T^A)+b[4]+1272893353&4294967295,v=y+(E<<11&4294967295|E>>>21),E=A+(v^y^T)+b[7]+4139469664&4294967295,A=v+(E<<16&4294967295|E>>>16),E=T+(A^v^y)+b[10]+3200236656&4294967295,T=A+(E<<23&4294967295|E>>>9),E=y+(T^A^v)+b[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=v+(y^T^A)+b[0]+3936430074&4294967295,v=y+(E<<11&4294967295|E>>>21),E=A+(v^y^T)+b[3]+3572445317&4294967295,A=v+(E<<16&4294967295|E>>>16),E=T+(A^v^y)+b[6]+76029189&4294967295,T=A+(E<<23&4294967295|E>>>9),E=y+(T^A^v)+b[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=v+(y^T^A)+b[12]+3873151461&4294967295,v=y+(E<<11&4294967295|E>>>21),E=A+(v^y^T)+b[15]+530742520&4294967295,A=v+(E<<16&4294967295|E>>>16),E=T+(A^v^y)+b[2]+3299628645&4294967295,T=A+(E<<23&4294967295|E>>>9),E=y+(A^(T|~v))+b[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=v+(T^(y|~A))+b[7]+1126891415&4294967295,v=y+(E<<10&4294967295|E>>>22),E=A+(y^(v|~T))+b[14]+2878612391&4294967295,A=v+(E<<15&4294967295|E>>>17),E=T+(v^(A|~y))+b[5]+4237533241&4294967295,T=A+(E<<21&4294967295|E>>>11),E=y+(A^(T|~v))+b[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=v+(T^(y|~A))+b[3]+2399980690&4294967295,v=y+(E<<10&4294967295|E>>>22),E=A+(y^(v|~T))+b[10]+4293915773&4294967295,A=v+(E<<15&4294967295|E>>>17),E=T+(v^(A|~y))+b[1]+2240044497&4294967295,T=A+(E<<21&4294967295|E>>>11),E=y+(A^(T|~v))+b[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=v+(T^(y|~A))+b[15]+4264355552&4294967295,v=y+(E<<10&4294967295|E>>>22),E=A+(y^(v|~T))+b[6]+2734768916&4294967295,A=v+(E<<15&4294967295|E>>>17),E=T+(v^(A|~y))+b[13]+1309151649&4294967295,T=A+(E<<21&4294967295|E>>>11),E=y+(A^(T|~v))+b[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=v+(T^(y|~A))+b[11]+3174756917&4294967295,v=y+(E<<10&4294967295|E>>>22),E=A+(y^(v|~T))+b[2]+718787259&4294967295,A=v+(E<<15&4294967295|E>>>17),E=T+(v^(A|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+v&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,b=this.B,A=this.h,v=0;v<y;){if(A==0)for(;v<=T;)s(this,I,v),v+=this.blockSize;if(typeof I=="string"){for(;v<y;)if(b[A++]=I.charCodeAt(v++),A==this.blockSize){s(this,b),A=0;break}}else for(;v<y;)if(b[A++]=I[v++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var b=0;32>b;b+=8)I[T++]=this.g[y]>>>b&255;return I};function i(I,y){var T=c;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function a(I,y){this.h=y;for(var T=[],b=!0,A=I.length-1;0<=A;A--){var v=I[A]|0;b&&v==y||(T[A]=v,b=!1)}this.g=T}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return N(h(-I));for(var y=[],T=1,b=0;I>=T;b++)y[b]=I/T|0,T*=4294967296;return new a(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return N(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),b=_,A=0;A<I.length;A+=8){var v=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+v),y);8>v?(v=h(Math.pow(y,v)),b=b.j(v).add(h(E))):(b=b.j(T),b=b.add(h(E)))}return b}var _=l(0),m=l(1),w=l(16777216);n=a.prototype,n.m=function(){if(P(this))return-N(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var b=this.i(T);I+=(0<=b?b:4294967296+b)*y,y*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(P(this))return"-"+N(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,b="";;){var A=K(T,y).g;T=V(T,A.j(y));var v=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=A,R(T))return v+b;for(;6>v.length;)v="0"+v;b=v+b}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=V(this,I),P(I)?-1:R(I)?0:1};function N(I){for(var y=I.g.length,T=[],b=0;b<y;b++)T[b]=~I.g[b];return new a(T,~I.h).add(m)}n.abs=function(){return P(this)?N(this):this},n.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],b=0,A=0;A<=y;A++){var v=b+(this.i(A)&65535)+(I.i(A)&65535),E=(v>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=E>>>16,v&=65535,E&=65535,T[A]=E<<16|v}return new a(T,T[T.length-1]&-2147483648?-1:0)};function V(I,y){return I.add(N(y))}n.j=function(I){if(R(this)||R(I))return _;if(P(this))return P(I)?N(this).j(N(I)):N(N(this).j(I));if(P(I))return N(this.j(N(I)));if(0>this.l(w)&&0>I.l(w))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],b=0;b<2*y;b++)T[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<I.g.length;A++){var v=this.i(b)>>>16,E=this.i(b)&65535,de=I.i(A)>>>16,Oe=I.i(A)&65535;T[2*b+2*A]+=E*Oe,L(T,2*b+2*A),T[2*b+2*A+1]+=v*Oe,L(T,2*b+2*A+1),T[2*b+2*A+1]+=E*de,L(T,2*b+2*A+1),T[2*b+2*A+2]+=v*de,L(T,2*b+2*A+2)}for(b=0;b<y;b++)T[b]=T[2*b+1]<<16|T[2*b];for(b=y;b<2*y;b++)T[b]=0;return new a(T,0)};function L(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function $(I,y){this.g=I,this.h=y}function K(I,y){if(R(y))throw Error("division by zero");if(R(I))return new $(_,_);if(P(I))return y=K(N(I),y),new $(N(y.g),N(y.h));if(P(y))return y=K(I,N(y)),new $(N(y.g),y.h);if(30<I.g.length){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,b=y;0>=b.l(I);)T=te(T),b=te(b);var A=J(T,1),v=J(b,1);for(b=J(b,2),T=J(T,2);!R(b);){var E=v.add(b);0>=E.l(I)&&(A=A.add(T),v=E),b=J(b,1),T=J(T,1)}return y=V(I,A.j(y)),new $(A,y)}for(A=_;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(T)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),v=h(T),E=v.j(y);P(E)||0<E.l(I);)T-=b,v=h(T),E=v.j(y);R(v)&&(v=m),A=A.add(v),I=V(I,E)}return new $(A,I)}n.A=function(I){return K(this,I).h},n.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)&I.i(b);return new a(T,this.h&I.h)},n.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)|I.i(b);return new a(T,this.h|I.h)},n.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)^I.i(b);return new a(T,this.h^I.h)};function te(I){for(var y=I.g.length+1,T=[],b=0;b<y;b++)T[b]=I.i(b)<<1|I.i(b-1)>>>31;return new a(T,I.h)}function J(I,y){var T=y>>5;y%=32;for(var b=I.g.length-T,A=[],v=0;v<b;v++)A[v]=0<y?I.i(v+T)>>>y|I.i(v+T+1)<<32-y:I.i(v+T);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,kn=a}).apply(typeof Wl<"u"?Wl:typeof self<"u"?self:typeof window<"u"?window:{});var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yh,Fr,Zh,oi,ra,ed,td,nd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,p){return o==Array.prototype||o==Object.prototype||(o[u]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gs=="object"&&Gs];for(var u=0;u<o.length;++u){var p=o[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var p=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in p))break e;p=p[S]}o=o[o.length-1],g=p[o],u=u(g),u!=g&&u!=null&&e(p,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var p=0,g=!1,S={next:function(){if(!g&&p<o.length){var k=p++;return{value:u(k,o[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,p){return o.call.apply(o.bind,arguments)}function _(o,u,p){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function m(o,u,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,m.apply(null,arguments)}function w(o,u){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function R(o,u){function p(){}p.prototype=u.prototype,o.aa=u.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(g,S,k){for(var O=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)O[ue-2]=arguments[ue];return u.prototype[S].apply(g,O)}}function P(o){const u=o.length;if(0<u){const p=Array(u);for(let g=0;g<u;g++)p[g]=o[g];return p}return[]}function N(o,u){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const S=o.length||0,k=g.length||0;o.length=S+k;for(let O=0;O<k;O++)o[S+O]=g[O]}else o.push(g)}}class V{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var te=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function J(o,u,p){for(const g in o)u.call(p,o[g],g,o)}function I(o,u){for(const p in o)u.call(void 0,o[p],p,o)}function y(o){const u={};for(const p in o)u[p]=o[p];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let p,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(p in g)o[p]=g[p];for(let k=0;k<T.length;k++)p=T[k],Object.prototype.hasOwnProperty.call(g,p)&&(o[p]=g[p])}}function A(o){var u=1;o=o.split(":");const p=[];for(;0<u&&o.length;)p.push(o.shift()),u--;return o.length&&p.push(o.join(":")),p}function v(o){c.setTimeout(()=>{throw o},0)}function E(){var o=zt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class de{constructor(){this.h=this.g=null}add(u,p){const g=Oe.get();g.set(u,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Oe=new V(()=>new Tt,o=>o.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,qt=!1,zt=new de,Is=()=>{const o=c.Promise.resolve(void 0);Qe=()=>{o.then(gr)}};var gr=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(p){v(p)}var u=Oe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}qt=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var _r=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,u),c.removeEventListener("test",p,u)}catch{}return o}();function et(o,u){if(fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(te){e:{try{K(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else p=="mouseover"?u=o.fromElement:p=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_o[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&et.aa.h.call(this)}}R(et,fe);var _o={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $n="closure_listenable_"+(1e6*Math.random()|0),bs=0;function ot(o,u,p,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=p,this.capture=!!g,this.ha=S,this.key=++bs,this.da=this.fa=!1}function Xe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Wt(o){this.src=o,this.g={},this.h=0}Wt.prototype.add=function(o,u,p,g,S){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var O=dt(o,u,g,S);return-1<O?(u=o[O],p||(u.fa=!1)):(u=new ot(u,this.src,k,!!g,S),u.fa=p,o.push(u)),u};function yn(o,u){var p=u.type;if(p in o.g){var g=o.g[p],S=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(g,S,1),k&&(Xe(u),o.g[p].length==0&&(delete o.g[p],o.h--))}}function dt(o,u,p,g){for(var S=0;S<o.length;++S){var k=o[S];if(!k.da&&k.listener==u&&k.capture==!!p&&k.ha==g)return S}return-1}var ft="closure_lm_"+(1e6*Math.random()|0),vn={};function Ht(o,u,p,g,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)Ht(o,u[k],p,g,S);return null}return p=ks(p),o&&o[$n]?o.K(u,p,h(g)?!!g.capture:!1,S):As(o,u,p,!1,g,S)}function As(o,u,p,g,S,k){if(!u)throw Error("Invalid event type");var O=h(S)?!!S.capture:!!S,ue=It(o);if(ue||(o[ft]=ue=new Wt(o)),p=ue.add(u,p,g,O,k),p.proxy)return p;if(g=Y(),p.proxy=g,g.src=o,g.listener=p,o.addEventListener)_r||(S=O),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(Ss(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Y(){function o(p){return u.call(o.src,o.listener,p)}const u=Rs;return o}function yr(o,u,p,g,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)yr(o,u[k],p,g,S);else g=h(g)?!!g.capture:!!g,p=ks(p),o&&o[$n]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],p=dt(k,p,g,S),-1<p&&(Xe(k[p]),Array.prototype.splice.call(k,p,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=It(o))&&(u=o.g[u.toString()],o=-1,u&&(o=dt(u,p,g,S)),(p=-1<o?u[o]:null)&&at(p))}function at(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[$n])yn(u.i,o);else{var p=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(p,g,o.capture):u.detachEvent?u.detachEvent(Ss(p),g):u.addListener&&u.removeListener&&u.removeListener(g),(p=It(u))?(yn(p,o),p.h==0&&(p.src=null,u[ft]=null)):Xe(o)}}}function Ss(o){return o in vn?vn[o]:vn[o]="on"+o}function Rs(o,u){if(o.da)o=!0;else{u=new et(u,this);var p=o.listener,g=o.ha||o.src;o.fa&&at(o),o=p.call(g,u)}return o}function It(o){return o=o[ft],o instanceof Wt?o:null}var wn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ks(o){return typeof o=="function"?o:(o[wn]||(o[wn]=function(u){return o.handleEvent(u)}),o[wn])}function Ee(){it.call(this),this.i=new Wt(this),this.M=this,this.F=null}R(Ee,it),Ee.prototype[$n]=!0,Ee.prototype.removeEventListener=function(o,u,p,g){yr(this,o,u,p,g)};function Pe(o,u){var p,g=o.F;if(g)for(p=[];g;g=g.F)p.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new fe(u,o);else if(u instanceof fe)u.target=u.target||o;else{var S=u;u=new fe(g,o),b(u,S)}if(S=!0,p)for(var k=p.length-1;0<=k;k--){var O=u.g=p[k];S=bt(O,g,!0,u)&&S}if(O=u.g=o,S=bt(O,g,!0,u)&&S,S=bt(O,g,!1,u)&&S,p)for(k=0;k<p.length;k++)O=u.g=p[k],S=bt(O,g,!1,u)&&S}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var p=o.g[u],g=0;g<p.length;g++)Xe(p[g]);delete o.g[u],o.h--}}this.F=null},Ee.prototype.K=function(o,u,p,g){return this.i.add(String(o),u,!1,p,g)},Ee.prototype.L=function(o,u,p,g){return this.i.add(String(o),u,!0,p,g)};function bt(o,u,p,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var O=u[k];if(O&&!O.da&&O.capture==p){var ue=O.listener,Ce=O.ha||O.src;O.fa&&yn(o.i,O),S=ue.call(Ce,g)!==!1&&S}}return S&&!g.defaultPrevented}function vr(o,u,p){if(typeof o=="function")p&&(o=m(o,p));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function At(o){o.g=vr(()=>{o.g=null,o.i&&(o.i=!1,At(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class wr extends it{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:At(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(o){it.call(this),this.h=o,this.g={}}R(Gt,it);var Ps=[];function St(o){J(o.g,function(u,p){this.g.hasOwnProperty(p)&&at(u)},o),o.g={}}Gt.prototype.N=function(){Gt.aa.N.call(this),St(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jn=c.JSON.stringify,Kt=c.JSON.parse,C=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function B(){}B.prototype.h=null;function W(o){return o.h||(o.h=o.i())}function Cs(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yo(){fe.call(this,"d")}R(yo,fe);function vo(){fe.call(this,"c")}R(vo,fe);var En={},Cc=null;function Ns(){return Cc=Cc||new Ee}En.La="serverreachability";function Nc(o){fe.call(this,En.La,o)}R(Nc,fe);function Tr(o){const u=Ns();Pe(u,new Nc(u))}En.STAT_EVENT="statevent";function Dc(o,u){fe.call(this,En.STAT_EVENT,o),this.stat=u}R(Dc,fe);function qe(o){const u=Ns();Pe(u,new Dc(u,o))}En.Ma="timingevent";function Mc(o,u){fe.call(this,En.Ma,o),this.size=u}R(Mc,fe);function Ir(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function br(){this.g=!0}br.prototype.xa=function(){this.g=!1};function Cp(o,u,p,g,S,k){o.info(function(){if(o.g)if(k)for(var O="",ue=k.split("&"),Ce=0;Ce<ue.length;Ce++){var ie=ue[Ce].split("=");if(1<ie.length){var Le=ie[0];ie=ie[1];var xe=Le.split("_");O=2<=xe.length&&xe[1]=="type"?O+(Le+"="+ie+"&"):O+(Le+"=redacted&")}}else O=null;else O=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+p+`
`+O})}function Np(o,u,p,g,S,k,O){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+p+`
`+k+" "+O})}function qn(o,u,p,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Mp(o,p)+(g?" "+g:"")})}function Dp(o,u){o.info(function(){return"TIMEOUT: "+u})}br.prototype.info=function(){};function Mp(o,u){if(!o.g)return u;if(!u)return null;try{var p=JSON.parse(u);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var g=p[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var O=1;O<S.length;O++)S[O]=""}}}}return jn(p)}catch{return u}}var Ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wo;function Ms(){}R(Ms,B),Ms.prototype.g=function(){return new XMLHttpRequest},Ms.prototype.i=function(){return{}},wo=new Ms;function Qt(o,u,p,g){this.j=o,this.i=u,this.l=p,this.R=g||1,this.U=new Gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oc}function Oc(){this.i=null,this.g="",this.h=!1}var Lc={},Eo={};function To(o,u,p){o.L=1,o.v=xs(Rt(u)),o.m=p,o.P=!0,xc(o,null)}function xc(o,u){o.F=Date.now(),Vs(o),o.A=Rt(o.v);var p=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Jc(p.i,"t",g),o.C=0,p=o.j.J,o.h=new Oc,o.g=ml(o.j,p?u:null,!o.m),0<o.O&&(o.M=new wr(m(o.Y,o,o.g),o.O)),u=o.U,p=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ps[0]=S.toString()),S=Ps);for(var k=0;k<S.length;k++){var O=Ht(p,S[k],g||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Tr(),Cp(o.i,o.u,o.A,o.l,o.R,o.m)}Qt.prototype.ca=function(o){o=o.target;const u=this.M;u&&kt(o)==3?u.j():this.Y(o)},Qt.prototype.Y=function(o){try{if(o==this.g)e:{const xe=kt(this.g);var u=this.g.Ba();const Hn=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||sl(this.g)))){this.J||xe!=4||u==7||(u==8||0>=Hn?Tr(3):Tr(2)),Io(this);var p=this.g.Z();this.X=p;t:if(Fc(this)){var g=sl(this.g);o="";var S=g.length,k=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),Ar(this);var O="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(k&&u==S-1)});g.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=p==200,Np(this.i,this.u,this.A,this.l,this.R,xe,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Ce=this.g;if((ue=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ue)){var ie=ue;break t}}ie=null}if(p=ie)qn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bo(this,p);else{this.o=!1,this.s=3,qe(12),Tn(this),Ar(this);break e}}if(this.P){p=!0;let ct;for(;!this.J&&this.C<O.length;)if(ct=Vp(this,O),ct==Eo){xe==4&&(this.s=4,qe(14),p=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Lc){this.s=4,qe(15),qn(this.i,this.l,O,"[Invalid Chunk]"),p=!1;break}else qn(this.i,this.l,ct,null),bo(this,ct);if(Fc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||O.length!=0||this.h.h||(this.s=1,qe(16),p=!1),this.o=this.o&&p,!p)qn(this.i,this.l,O,"[Invalid Chunked Response]"),Tn(this),Ar(this);else if(0<O.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Co(Le),Le.M=!0,qe(11))}}else qn(this.i,this.l,O,null),bo(this,O);xe==4&&Tn(this),this.o&&!this.J&&(xe==4?hl(this.j,this):(this.o=!1,Vs(this)))}else Jp(this.g),p==400&&0<O.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),Tn(this),Ar(this)}}}catch{}finally{}};function Fc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Vp(o,u){var p=o.C,g=u.indexOf(`
`,p);return g==-1?Eo:(p=Number(u.substring(p,g)),isNaN(p)?Lc:(g+=1,g+p>u.length?Eo:(u=u.slice(g,g+p),o.C=g+p,u)))}Qt.prototype.cancel=function(){this.J=!0,Tn(this)};function Vs(o){o.S=Date.now()+o.I,Uc(o,o.I)}function Uc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ir(m(o.ba,o),u)}function Io(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Qt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Dp(this.i,this.A),this.L!=2&&(Tr(),qe(17)),Tn(this),this.s=2,Ar(this)):Uc(this,this.S-o)};function Ar(o){o.j.G==0||o.J||hl(o.j,o)}function Tn(o){Io(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,St(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function bo(o,u){try{var p=o.j;if(p.G!=0&&(p.g==o||Ao(p.h,o))){if(!o.K&&Ao(p.h,o)&&p.G==3){try{var g=p.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)qs(p),$s(p);else break e;Po(p),qe(18)}}else p.za=S[1],0<p.za-p.T&&37500>S[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ir(m(p.Za,p),6e3));if(1>=jc(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else bn(p,11)}else if((o.K||p.g==o)&&qs(p),!L(u))for(S=p.Da.g.parse(u),u=0;u<S.length;u++){let ie=S[u];if(p.T=ie[0],ie=ie[1],p.G==2)if(ie[0]=="c"){p.K=ie[1],p.ia=ie[2];const Le=ie[3];Le!=null&&(p.la=Le,p.j.info("VER="+p.la));const xe=ie[4];xe!=null&&(p.Aa=xe,p.j.info("SVER="+p.Aa));const Hn=ie[5];Hn!=null&&typeof Hn=="number"&&0<Hn&&(g=1.5*Hn,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const ct=o.g;if(ct){const Ws=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var k=g.h;k.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(So(k,k.h),k.h=null))}if(g.D){const No=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(g.ya=No,pe(g.I,g.D,No))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var O=o;if(g.qa=pl(g,g.J?g.ia:null,g.W),O.K){qc(g.h,O);var ue=O,Ce=g.L;Ce&&(ue.I=Ce),ue.B&&(Io(ue),Vs(ue)),g.g=O}else ll(g);0<p.i.length&&js(p)}else ie[0]!="stop"&&ie[0]!="close"||bn(p,7);else p.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?bn(p,7):ko(p):ie[0]!="noop"&&p.l&&p.l.ta(ie),p.v=0)}}Tr(4)}catch{}}var Op=class{constructor(o,u){this.g=o,this.map=u}};function Bc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $c(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function jc(o){return o.h?1:o.g?o.g.size:0}function Ao(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function So(o,u){o.g?o.g.add(u):o.h=u}function qc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Bc.prototype.cancel=function(){if(this.i=zc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function zc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const p of o.g.values())u=u.concat(p.D);return u}return P(o.i)}function Lp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],p=o.length,g=0;g<p;g++)u.push(o[g]);return u}u=[],p=0;for(g in o)u[p++]=o[g];return u}function xp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var p=0;p<o;p++)u.push(p);return u}u=[],p=0;for(const g in o)u[p++]=g;return u}}}function Wc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var p=xp(o),g=Lp(o),S=g.length,k=0;k<S;k++)u.call(void 0,g[k],p&&p[k],o)}var Hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fp(o,u){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var g=o[p].indexOf("="),S=null;if(0<=g){var k=o[p].substring(0,g);S=o[p].substring(g+1)}else k=o[p];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function In(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof In){this.h=o.h,Os(this,o.j),this.o=o.o,this.g=o.g,Ls(this,o.s),this.l=o.l;var u=o.i,p=new kr;p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),Gc(this,p),this.m=o.m}else o&&(u=String(o).match(Hc))?(this.h=!1,Os(this,u[1]||"",!0),this.o=Sr(u[2]||""),this.g=Sr(u[3]||"",!0),Ls(this,u[4]),this.l=Sr(u[5]||"",!0),Gc(this,u[6]||"",!0),this.m=Sr(u[7]||"")):(this.h=!1,this.i=new kr(null,this.h))}In.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Rr(u,Kc,!0),":");var p=this.g;return(p||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Rr(u,Kc,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Rr(p,p.charAt(0)=="/"?$p:Bp,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Rr(p,qp)),o.join("")};function Rt(o){return new In(o)}function Os(o,u,p){o.j=p?Sr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ls(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Gc(o,u,p){u instanceof kr?(o.i=u,zp(o.i,o.h)):(p||(u=Rr(u,jp)),o.i=new kr(u,o.h))}function pe(o,u,p){o.i.set(u,p)}function xs(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Sr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rr(o,u,p){return typeof o=="string"?(o=encodeURI(o).replace(u,Up),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Up(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Kc=/[#\/\?@]/g,Bp=/[#\?:]/g,$p=/[#\?]/g,jp=/[#\?@]/g,qp=/#/g;function kr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Xt(o){o.g||(o.g=new Map,o.h=0,o.i&&Fp(o.i,function(u,p){o.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=kr.prototype,n.add=function(o,u){Xt(this),this.i=null,o=zn(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(u),this.h+=1,this};function Qc(o,u){Xt(o),u=zn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Xc(o,u){return Xt(o),u=zn(o,u),o.g.has(u)}n.forEach=function(o,u){Xt(this),this.g.forEach(function(p,g){p.forEach(function(S){o.call(u,S,g,this)},this)},this)},n.na=function(){Xt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),p=[];for(let g=0;g<u.length;g++){const S=o[g];for(let k=0;k<S.length;k++)p.push(u[g])}return p},n.V=function(o){Xt(this);let u=[];if(typeof o=="string")Xc(this,o)&&(u=u.concat(this.g.get(zn(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)u=u.concat(o[p])}return u},n.set=function(o,u){return Xt(this),this.i=null,o=zn(this,o),Xc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Jc(o,u,p){Qc(o,u),0<p.length&&(o.i=null,o.g.set(zn(o,u),P(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var p=0;p<u.length;p++){var g=u[p];const k=encodeURIComponent(String(g)),O=this.V(g);for(g=0;g<O.length;g++){var S=k;O[g]!==""&&(S+="="+encodeURIComponent(String(O[g]))),o.push(S)}}return this.i=o.join("&")};function zn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function zp(o,u){u&&!o.j&&(Xt(o),o.i=null,o.g.forEach(function(p,g){var S=g.toLowerCase();g!=S&&(Qc(this,g),Jc(this,S,p))},o)),o.j=u}function Wp(o,u){const p=new br;if(c.Image){const g=new Image;g.onload=w(Jt,p,"TestLoadImage: loaded",!0,u,g),g.onerror=w(Jt,p,"TestLoadImage: error",!1,u,g),g.onabort=w(Jt,p,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(Jt,p,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Hp(o,u){const p=new br,g=new AbortController,S=setTimeout(()=>{g.abort(),Jt(p,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?Jt(p,"TestPingServer: ok",!0,u):Jt(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Jt(p,"TestPingServer: error",!1,u)})}function Jt(o,u,p,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(p)}catch{}}function Gp(){this.g=new C}function Kp(o,u,p){const g=p||"";try{Wc(o,function(S,k){let O=S;h(S)&&(O=jn(S)),u.push(g+k+"="+encodeURIComponent(O))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Fs(o){this.l=o.Ub||null,this.j=o.eb||!1}R(Fs,B),Fs.prototype.g=function(){return new Us(this.l,this.j)},Fs.prototype.i=function(o){return function(){return o}}({});function Us(o,u){Ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Us,Ee),n=Us.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Cr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Pr(this):Cr(this),this.readyState==3&&Yc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Pr(this))},n.Qa=function(o){this.g&&(this.response=o,Pr(this))},n.ga=function(){this.g&&Pr(this)};function Pr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=u.next();return o.join(`\r
`)};function Cr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Zc(o){let u="";return J(o,function(p,g){u+=g,u+=":",u+=p,u+=`\r
`}),u}function Ro(o,u,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Zc(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):pe(o,u,p))}function _e(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(_e,Ee);var Qp=/^https?$/i,Xp=["POST","PUT"];n=_e.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wo.g(),this.v=this.o?W(this.o):W(wo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){el(this,k);return}if(o=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)p.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())p.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xp,u,void 0))||g||S||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,O]of p)this.g.setRequestHeader(k,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rl(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){el(this,k)}};function el(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,tl(o),Bs(o)}function tl(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),Bs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bs(this,!0)),_e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?nl(this):this.bb())},n.bb=function(){nl(this)};function nl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||kt(o)!=4||o.Z()!=2)){if(o.u&&kt(o)==4)vr(o.Ea,0,o);else if(Pe(o,"readystatechange"),kt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var g;if(g=O===0){var S=String(o.D).match(Hc)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!Qp.test(S?S.toLowerCase():"")}p=g}if(p)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var k=2<kt(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",tl(o)}}finally{Bs(o)}}}}function Bs(o,u){if(o.g){rl(o);const p=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Pe(o,"ready");try{p.onreadystatechange=g}catch{}}}function rl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function kt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Kt(u)}};function sl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Jp(o){const u={};o=(o.g&&2<=kt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(L(o[g]))continue;var p=A(o[g]);const S=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=u[S]||[];u[S]=k,k.push(p)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nr(o,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||u}function il(o){this.Aa=0,this.i=[],this.j=new br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nr("baseRetryDelayMs",5e3,o),this.cb=Nr("retryDelaySeedMs",1e4,o),this.Wa=Nr("forwardChannelMaxRetries",2,o),this.wa=Nr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Bc(o&&o.concurrentRequestLimit),this.Da=new Gp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=il.prototype,n.la=8,n.G=1,n.connect=function(o,u,p,g){qe(0),this.W=o,this.H=u||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=pl(this,null,this.W),js(this)};function ko(o){if(ol(o),o.G==3){var u=o.U++,p=Rt(o.I);if(pe(p,"SID",o.K),pe(p,"RID",u),pe(p,"TYPE","terminate"),Dr(o,p),u=new Qt(o,o.j,u),u.L=2,u.v=xs(Rt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=u.v,p=!0),p||(u.g=ml(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Vs(u)}fl(o)}function $s(o){o.g&&(Co(o),o.g.cancel(),o.g=null)}function ol(o){$s(o),o.u&&(c.clearTimeout(o.u),o.u=null),qs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function js(o){if(!$c(o.h)&&!o.s){o.s=!0;var u=o.Ga;Qe||Is(),qt||(Qe(),qt=!0),zt.add(u,o),o.B=0}}function Yp(o,u){return jc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ir(m(o.Ga,o,u),dl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Qt(this,this.j,o);let k=this.o;if(this.S&&(k?(k=y(k),b(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=cl(this,S,u),p=Rt(this.I),pe(p,"RID",o),pe(p,"CVER",22),this.D&&pe(p,"X-HTTP-Session-Id",this.D),Dr(this,p),k&&(this.O?u="headers="+encodeURIComponent(String(Zc(k)))+"&"+u:this.m&&Ro(p,this.m,k)),So(this.h,S),this.Ua&&pe(p,"TYPE","init"),this.P?(pe(p,"$req",u),pe(p,"SID","null"),S.T=!0,To(S,p,null)):To(S,p,u),this.G=2}}else this.G==3&&(o?al(this,o):this.i.length==0||$c(this.h)||al(this))};function al(o,u){var p;u?p=u.l:p=o.U++;const g=Rt(o.I);pe(g,"SID",o.K),pe(g,"RID",p),pe(g,"AID",o.T),Dr(o,g),o.m&&o.o&&Ro(g,o.m,o.o),p=new Qt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),u&&(o.i=u.D.concat(o.i)),u=cl(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),So(o.h,p),To(p,g,u)}function Dr(o,u){o.H&&J(o.H,function(p,g){pe(u,g,p)}),o.l&&Wc({},function(p,g){pe(u,g,p)})}function cl(o,u,p){p=Math.min(o.i.length,p);var g=o.l?m(o.l.Na,o.l,o):null;e:{var S=o.i;let k=-1;for(;;){const O=["count="+p];k==-1?0<p?(k=S[0].g,O.push("ofs="+k)):k=0:O.push("ofs="+k);let ue=!0;for(let Ce=0;Ce<p;Ce++){let ie=S[Ce].g;const Le=S[Ce].map;if(ie-=k,0>ie)k=Math.max(0,S[Ce].g-100),ue=!1;else try{Kp(Le,O,"req"+ie+"_")}catch{g&&g(Le)}}if(ue){g=O.join("&");break e}}}return o=o.i.splice(0,p),u.D=o,g}function ll(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Qe||Is(),qt||(Qe(),qt=!0),zt.add(u,o),o.v=0}}function Po(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ir(m(o.Fa,o),dl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ir(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),$s(this),ul(this))};function Co(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ul(o){o.g=new Qt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Rt(o.qa);pe(u,"RID","rpc"),pe(u,"SID",o.K),pe(u,"AID",o.T),pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(u,"TO",o.ja),pe(u,"TYPE","xmlhttp"),Dr(o,u),o.m&&o.o&&Ro(u,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=xs(Rt(u)),p.m=null,p.P=!0,xc(p,o)}n.Za=function(){this.C!=null&&(this.C=null,$s(this),Po(this),qe(19))};function qs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function hl(o,u){var p=null;if(o.g==u){qs(o),Co(o),o.g=null;var g=2}else if(Ao(o.h,u))p=u.D,qc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){p=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;g=Ns(),Pe(g,new Mc(g,p)),js(o)}else ll(o);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&Yp(o,u)||g==2&&Po(o)))switch(p&&0<p.length&&(u=o.h,u.i=u.i.concat(p)),S){case 1:bn(o,5);break;case 4:bn(o,10);break;case 3:bn(o,6);break;default:bn(o,2)}}}function dl(o,u){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*u}function bn(o,u){if(o.j.info("Error code "+u),u==2){var p=m(o.fb,o),g=o.Xa;const S=!g;g=new In(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Os(g,"https"),xs(g),S?Wp(g.toString(),p):Hp(g.toString(),p)}else qe(2);o.G=0,o.l&&o.l.sa(u),fl(o),ol(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function fl(o){if(o.G=0,o.ka=[],o.l){const u=zc(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function pl(o,u,p){var g=p instanceof In?Rt(p):new In(p);if(g.g!="")u&&(g.g=u+"."+g.g),Ls(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new In(null);g&&Os(k,g),u&&(k.g=u),S&&Ls(k,S),p&&(k.l=p),g=k}return p=o.D,u=o.ya,p&&u&&pe(g,p,u),pe(g,"VER",o.la),Dr(o,g),g}function ml(o,u,p){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new _e(new Fs({eb:p})):new _e(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gl(){}n=gl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zs(){}zs.prototype.g=function(o,u){return new Je(o,u)};function Je(o,u){Ee.call(this),this.g=new il(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!L(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!L(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Wn(this)}R(Je,Ee),Je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){ko(this.g)},Je.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=jn(o),o=p);u.i.push(new Op(u.Ya++,o)),u.G==3&&js(u)},Je.prototype.N=function(){this.g.l=null,delete this.j,ko(this.g),delete this.g,Je.aa.N.call(this)};function _l(o){yo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const p in u){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(_l,yo);function yl(){vo.call(this),this.status=1}R(yl,vo);function Wn(o){this.g=o}R(Wn,gl),Wn.prototype.ua=function(){Pe(this.g,"a")},Wn.prototype.ta=function(o){Pe(this.g,new _l(o))},Wn.prototype.sa=function(o){Pe(this.g,new yl)},Wn.prototype.ra=function(){Pe(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,nd=function(){return new zs},td=function(){return Ns()},ed=En,ra={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ds.NO_ERROR=0,Ds.TIMEOUT=8,Ds.HTTP_ERROR=6,oi=Ds,Vc.COMPLETE="complete",Zh=Vc,Cs.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Fr=Cs,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,Yh=_e}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});const Hl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Ca("@firebase/firestore");function Or(){return Mn.logLevel}function U(n,...e){if(Mn.logLevel<=ne.DEBUG){const t=e.map(Ma);Mn.debug(`Firestore (${hr}): ${n}`,...t)}}function Lt(n,...e){if(Mn.logLevel<=ne.ERROR){const t=e.map(Ma);Mn.error(`Firestore (${hr}): ${n}`,...t)}}function nr(n,...e){if(Mn.logLevel<=ne.WARN){const t=e.map(Ma);Mn.warn(`Firestore (${hr}): ${n}`,...t)}}function Ma(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: `+n;throw Lt(e),new Error(e)}function le(n,e){n||z()}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ue.UNAUTHENTICATED))}shutdown(){}}class s_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class i_{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new rd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Ue(e)}}class o_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class a_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new o_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class c_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){le(this.o===void 0);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string"),this.R=t.token,new c_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=u_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(n,e){return n<e?-1:n>e?1:0}function rr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class me extends Xr{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new me(t)}static emptyPath(){return new me([])}}const h_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends Xr{construct(e,t,r){return new De(e,t,r)}static isValidIdentifier(e){return h_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new x(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new x(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(me.fromString(e))}static fromName(e){return new j(me.fromString(e).popFirst(5))}static empty(){return new j(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new me(e.slice()))}}function d_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new Ae(t+1,0):new Ae(t,r));return new dn(s,j.empty(),e)}function f_(n){return new dn(n.readTime,n.key,-1)}class dn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new dn(H.min(),j.empty(),-1)}static max(){return new dn(H.max(),j.empty(),-1)}}function p_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class g_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==m_)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(s=>s?M.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new M((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new M((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function __(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Va{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Va.oe=-1;function Wi(n){return n==null}function Ii(n){return n===0&&1/n==-1/0}function y_(n){return typeof n=="number"&&Number.isInteger(n)&&!Ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function id(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ks(this.root,e,this.comparator,!0)}}class Ks{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ne(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kl(this.data.getIterator())}getIteratorFrom(e){return new Kl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Me(this.comparator);return t.data=e,t}}class Kl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new Me(De.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new od("Invalid base64 string: "+i):i}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const v_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(le(!!n),typeof n=="string"){let e=0;const t=v_.exec(n);if(le(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function La(n){const e=n.mapValue.fields.__previous_value__;return Oa(e)?La(e):e}function Jr(n){const e=fn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,r,s,i,a,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Yr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={mapValue:{}};function On(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oa(n)?4:T_(n)?9007199254740991:E_(n)?10:11:z()}function vt(n,e){if(n===e)return!0;const t=On(n);if(t!==On(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jr(n).isEqual(Jr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=fn(s.timestampValue),c=fn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Vn(s.bytesValue).isEqual(Vn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ve(s.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ve(s.integerValue)===ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ve(s.doubleValue),c=ve(i.doubleValue);return a===c?Ii(a)===Ii(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return rr(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Gl(a)!==Gl(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!vt(a[l],c[l])))return!1;return!0}(n,e);default:return z()}}function Zr(n,e){return(n.values||[]).find(t=>vt(t,e))!==void 0}function sr(n,e){if(n===e)return 0;const t=On(n),r=On(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ve(i.integerValue||i.doubleValue),l=ve(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Ql(n.timestampValue,e.timestampValue);case 4:return Ql(Jr(n),Jr(e));case 5:return oe(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Vn(i),l=Vn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=oe(c[h],l[h]);if(f!==0)return f}return oe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=oe(ve(i.latitude),ve(a.latitude));return c!==0?c:oe(ve(i.longitude),ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const _=i.fields||{},m=a.fields||{},w=(c=_.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=oe(((h=w?.values)===null||h===void 0?void 0:h.length)||0,((f=R?.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Xl(w,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Qs.mapValue&&a===Qs.mapValue)return 0;if(i===Qs.mapValue)return 1;if(a===Qs.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let _=0;_<l.length&&_<f.length;++_){const m=oe(l[_],f[_]);if(m!==0)return m;const w=sr(c[l[_]],h[f[_]]);if(w!==0)return w}return oe(l.length,f.length)}(n.mapValue,e.mapValue);default:throw z()}}function Ql(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);const t=fn(n),r=fn(e),s=oe(t.seconds,r.seconds);return s!==0?s:oe(t.nanos,r.nanos)}function Xl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=sr(t[s],r[s]);if(i)return i}return oe(t.length,r.length)}function ir(n){return sa(n)}function sa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=fn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=sa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${sa(t.fields[a])}`;return s+"}"}(n.mapValue):z()}function Jl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ia(n){return!!n&&"integerValue"in n}function xa(n){return!!n&&"arrayValue"in n}function Yl(n){return!!n&&"nullValue"in n}function Zl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ai(n){return!!n&&"mapValue"in n}function E_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function qr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=qr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function T_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ai(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(t)}setAll(e){let t=De.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=qr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ai(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ai(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Fn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ge(qr(this.value))}}function ad(n){const e=[];return Fn(n.fields,(t,r)=>{const s=new De([t]);if(ai(r)){const i=ad(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Be(e,0,H.min(),H.min(),H.min(),Ge.empty(),0)}static newFoundDocument(e,t,r,s){return new Be(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Be(e,2,t,H.min(),H.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,H.min(),H.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bi{constructor(e,t){this.position=e,this.inclusive=t}}function eu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),t.key):r=sr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ai{constructor(e,t="asc"){this.field=e,this.dir=t}}function I_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class cd{}class be extends cd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new A_(e,t,r):t==="array-contains"?new k_(e,r):t==="in"?new P_(e,r):t==="not-in"?new C_(e,r):t==="array-contains-any"?new N_(e,r):new be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new S_(e,r):new R_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(sr(t,this.value)):t!==null&&On(this.value)===On(t)&&this.matchesComparison(sr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends cd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ht(e,t)}matches(e){return ld(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ld(n){return n.op==="and"}function ud(n){return b_(n)&&ld(n)}function b_(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function oa(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+ir(n.value);if(ud(n))return n.filters.map(e=>oa(e)).join(",");{const e=n.filters.map(t=>oa(t)).join(",");return`${n.op}(${e})`}}function hd(n,e){return n instanceof be?function(r,s){return s instanceof be&&r.op===s.op&&r.field.isEqual(s.field)&&vt(r.value,s.value)}(n,e):n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&hd(a,s.filters[c]),!0):!1}(n,e):void z()}function dd(n){return n instanceof be?function(t){return`${t.field.canonicalString()} ${t.op} ${ir(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(dd).join(" ,")+"}"}(n):"Filter"}class A_ extends be{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class S_ extends be{constructor(e,t){super(e,"in",t),this.keys=fd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class R_ extends be{constructor(e,t){super(e,"not-in",t),this.keys=fd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class k_ extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xa(t)&&Zr(t.arrayValue,this.value)}}class P_ extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zr(this.value.arrayValue,t)}}class C_ extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Zr(this.value.arrayValue,t)}}class N_ extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zr(this.value.arrayValue,r))}}/**
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
 */class D_{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function nu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new D_(n,e,t,r,s,i,a)}function Fa(n){const e=G(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>oa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ir(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ir(r)).join(",")),e.ue=t}return e.ue}function Ua(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!I_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tu(n.startAt,e.startAt)&&tu(n.endAt,e.endAt)}function aa(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function M_(n,e,t,r,s,i,a,c){return new ls(n,e,t,r,s,i,a,c)}function Hi(n){return new ls(n)}function ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pd(n){return n.collectionGroup!==null}function zr(n){const e=G(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Me(De.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ai(i,r))}),t.has(De.keyField().canonicalString())||e.ce.push(new Ai(De.keyField(),r))}return e.ce}function mt(n){const e=G(n);return e.le||(e.le=V_(e,zr(n))),e.le}function V_(n,e){if(n.limitType==="F")return nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ai(s.field,i)});const t=n.endAt?new bi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new bi(n.startAt.position,n.startAt.inclusive):null;return nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ca(n,e){const t=n.filters.concat([e]);return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Si(n,e,t){return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Gi(n,e){return Ua(mt(n),mt(e))&&n.limitType===e.limitType}function md(n){return`${Fa(mt(n))}|lt:${n.limitType}`}function Gn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>dd(s)).join(", ")}]`),Wi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ir(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ir(s)).join(",")),`Target(${r})`}(mt(n))}; limitType=${n.limitType})`}function Ki(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of zr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=eu(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,zr(r),s)||r.endAt&&!function(a,c,l){const h=eu(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,zr(r),s))}(n,e)}function O_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gd(n){return(e,t)=>{let r=!1;for(const s of zr(n)){const i=L_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function L_(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?sr(l,h):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return id(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new ge(j.comparator);function xt(){return x_}const _d=new ge(j.comparator);function Ur(...n){let e=_d;for(const t of n)e=e.insert(t.key,t);return e}function yd(n){let e=_d;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rn(){return Wr()}function vd(){return Wr()}function Wr(){return new dr(n=>n.toString(),(n,e)=>n.isEqual(e))}const F_=new ge(j.comparator),U_=new Me(j.comparator);function ee(...n){let e=U_;for(const t of n)e=e.add(t);return e}const B_=new Me(oe);function $_(){return B_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function wd(n){return{integerValue:""+n}}function j_(n,e){return y_(e)?wd(e):Ba(n,e)}/**
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
 */class Qi{constructor(){this._=void 0}}function q_(n,e,t){return n instanceof Ri?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oa(i)&&(i=La(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof es?Td(n,e):n instanceof ts?Id(n,e):function(s,i){const a=Ed(s,i),c=su(a)+su(s.Pe);return ia(a)&&ia(s.Pe)?wd(c):Ba(s.serializer,c)}(n,e)}function z_(n,e,t){return n instanceof es?Td(n,e):n instanceof ts?Id(n,e):t}function Ed(n,e){return n instanceof ki?function(r){return ia(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ri extends Qi{}class es extends Qi{constructor(e){super(),this.elements=e}}function Td(n,e){const t=bd(e);for(const r of n.elements)t.some(s=>vt(s,r))||t.push(r);return{arrayValue:{values:t}}}class ts extends Qi{constructor(e){super(),this.elements=e}}function Id(n,e){let t=bd(e);for(const r of n.elements)t=t.filter(s=>!vt(s,r));return{arrayValue:{values:t}}}class ki extends Qi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function su(n){return ve(n.integerValue||n.doubleValue)}function bd(n){return xa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function W_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof es&&s instanceof es||r instanceof ts&&s instanceof ts?rr(r.elements,s.elements,vt):r instanceof ki&&s instanceof ki?vt(r.Pe,s.Pe):r instanceof Ri&&s instanceof Ri}(n.transform,e.transform)}class H_{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ci(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xi{}function Ad(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ji(n.key,Ke.none()):new us(n.key,n.data,Ke.none());{const t=n.data,r=Ge.empty();let s=new Me(De.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new gn(n.key,r,new Ye(s.toArray()),Ke.none())}}function G_(n,e,t){n instanceof us?function(s,i,a){const c=s.value.clone(),l=ou(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof gn?function(s,i,a){if(!ci(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ou(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Sd(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Hr(n,e,t,r){return n instanceof us?function(i,a,c,l){if(!ci(i.precondition,a))return c;const h=i.value.clone(),f=au(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof gn?function(i,a,c,l){if(!ci(i.precondition,a))return c;const h=au(i.fieldTransforms,l,a),f=a.data;return f.setAll(Sd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(i,a,c){return ci(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function K_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ed(r.transform,s||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(r.field,i))}return t||null}function iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rr(r,s,(i,a)=>W_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class us extends Xi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gn extends Xi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ou(n,e,t){const r=new Map;le(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,z_(a,c,t[s]))}return r}function au(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,q_(i,a,e))}return r}class Ji extends Xi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q_ extends Xi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&G_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=vd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Ad(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&rr(this.mutations,e.mutations,(t,r)=>iu(t,r))&&rr(this.baseMutations,e.baseMutations,(t,r)=>iu(t,r))}}class $a{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){le(e.mutations.length===r.length);let s=function(){return F_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new $a(e,t,r,s)}}/**
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
 */class J_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Y_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,re;function Z_(n){switch(n){default:return z();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Rd(n){if(n===void 0)return Lt("GRPC error has no .code"),D.UNKNOWN;switch(n){case Te.OK:return D.OK;case Te.CANCELLED:return D.CANCELLED;case Te.UNKNOWN:return D.UNKNOWN;case Te.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Te.INTERNAL:return D.INTERNAL;case Te.UNAVAILABLE:return D.UNAVAILABLE;case Te.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Te.NOT_FOUND:return D.NOT_FOUND;case Te.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Te.ABORTED:return D.ABORTED;case Te.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Te.DATA_LOSS:return D.DATA_LOSS;default:return z()}}(re=Te||(Te={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ey(){return new TextEncoder}/**
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
 */const ty=new kn([4294967295,4294967295],0);function cu(n){const e=ey().encode(n),t=new Jh;return t.update(e),new Uint8Array(t.digest())}function lu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kn([t,r],0),new kn([s,i],0)]}class ja{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Br(`Invalid padding: ${t}`);if(r<0)throw new Br(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Br(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Br(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=kn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(kn.fromNumber(r)));return s.compare(ty)===1&&(s=new kn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=cu(e),[r,s]=lu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ja(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=cu(e),[r,s]=lu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Br extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,hs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yi(H.min(),s,new ge(oe),xt(),ee())}}class hs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new hs(r,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class kd{constructor(e,t){this.targetId=e,this.me=t}}class Pd{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class uu{constructor(){this.fe=0,this.ge=du(),this.pe=Ve.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new hs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=du()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ny{constructor(e){this.Le=e,this.Be=new Map,this.ke=xt(),this.qe=hu(),this.Qe=new ge(oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(aa(i))if(r===0){const a=new j(i.path);this.Ue(t,a,Be.newNoDocument(a,H.min()))}else le(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Vn(r).toUint8Array()}catch(l){if(l instanceof od)return nr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ja(a,s,i)}catch(l){return nr(l instanceof Br?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&aa(c.target)){const l=new j(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Be.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ee();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Yi(e,t,this.Qe,this.ke,r);return this.ke=xt(),this.qe=hu(),this.Qe=new ge(oe),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new uu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Me(oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new uu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function hu(){return new ge(j.comparator)}function du(){return new ge(j.comparator)}const ry={asc:"ASCENDING",desc:"DESCENDING"},sy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iy={and:"AND",or:"OR"};class oy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function la(n,e){return n.useProto3Json||Wi(e)?e:{value:e}}function Pi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ay(n,e){return Pi(n,e.toTimestamp())}function gt(n){return le(!!n),H.fromTimestamp(function(t){const r=fn(t);return new Ae(r.seconds,r.nanos)}(n))}function qa(n,e){return ua(n,e).canonicalString()}function ua(n,e){const t=function(s){return new me(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Nd(n){const e=me.fromString(n);return le(Ld(e)),e}function ha(n,e){return qa(n.databaseId,e.path)}function Uo(n,e){const t=Nd(e);if(t.get(1)!==n.databaseId.projectId)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Md(t))}function Dd(n,e){return qa(n.databaseId,e)}function cy(n){const e=Nd(n);return e.length===4?me.emptyPath():Md(e)}function da(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Md(n){return le(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fu(n,e,t){return{name:ha(n,e),fields:t.value.mapValue.fields}}function ly(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(le(f===void 0||typeof f=="string"),Ve.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ve.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?D.UNKNOWN:Rd(h.code);return new x(f,h.message||"")}(a);t=new Pd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uo(n,r.document.name),i=gt(r.document.updateTime),a=r.document.createTime?gt(r.document.createTime):H.min(),c=new Ge({mapValue:{fields:r.document.fields}}),l=Be.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new li(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uo(n,r.document),i=r.readTime?gt(r.readTime):H.min(),a=Be.newNoDocument(s,i),c=r.removedTargetIds||[];t=new li([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uo(n,r.document),i=r.removedTargetIds||[];t=new li([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Y_(s,i),c=r.targetId;t=new kd(c,a)}}return t}function uy(n,e){let t;if(e instanceof us)t={update:fu(n,e.key,e.value)};else if(e instanceof Ji)t={delete:ha(n,e.key)};else if(e instanceof gn)t={update:fu(n,e.key,e.data),updateMask:vy(e.fieldMask)};else{if(!(e instanceof Q_))return z();t={verify:ha(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Ri)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof es)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ts)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ki)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ay(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function hy(n,e){return n&&n.length>0?(le(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?gt(s.updateTime):gt(i);return a.isEqual(H.min())&&(a=gt(i)),new H_(a,s.transformResults||[])}(t,e))):[]}function dy(n,e){return{documents:[Dd(n,e.path)]}}function fy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Dd(n,s);const i=function(h){if(h.length!==0)return Od(ht.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Kn(m.field),direction:gy(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=la(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function py(n){let e=cy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){le(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(_){const m=Vd(_);return m instanceof ht&&ud(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(m=>function(R){return new Ai(Qn(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(_){let m;return m=typeof _=="object"?_.value:_,Wi(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(_){const m=!!_.before,w=_.values||[];return new bi(w,m)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const m=!_.before,w=_.values||[];return new bi(w,m)}(t.endAt)),M_(e,s,a,i,c,"F",l,h)}function my(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Vd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Qn(t.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qn(t.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qn(t.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qn(t.unaryFilter.field);return be.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return be.create(Qn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>Vd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function gy(n){return ry[n]}function _y(n){return sy[n]}function yy(n){return iy[n]}function Kn(n){return{fieldPath:n.canonicalString()}}function Qn(n){return De.fromServerFormat(n.fieldPath)}function Od(n){return n instanceof be?function(t){if(t.op==="=="){if(Zl(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NAN"}};if(Yl(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zl(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NOT_NAN"}};if(Yl(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(t.field),op:_y(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(s=>Od(s));return r.length===1?r[0]:{compositeFilter:{op:yy(t.op),filters:r}}}(n):z()}function vy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ld(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,r,s,i=H.min(),a=H.min(),c=Ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.ct=e}}function Ey(n){const e=py({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Si(e,e.limit,"L"):e}/**
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
 */class Ty{constructor(){this.un=new Iy}addToCollectionParentIndex(e,t){return this.un.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(dn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class Iy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Me(me.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new or(0)}static kn(){return new or(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.changes=new dr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ay{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Hr(r.mutation,s,Ye.empty(),Ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const s=Rn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ur();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=xt();const a=Wr(),c=function(){return Wr()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof gn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Hr(f.mutation,h,f.mutation.getFieldMask(),Ae.now())):a.set(h.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var _;return c.set(h,new Ay(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Wr();let s=new ge((a,c)=>a-c),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||Ye.empty();f=c.applyToLocalView(h,f),r.set(l,f);const _=(s.get(c.batchId)||ee()).add(l);s=s.insert(c.batchId,_)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,_=vd();f.forEach(m=>{if(!i.has(m)){const w=Ad(t.get(m),r.get(m));w!==null&&_.set(m,w),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(Rn());let c=-1,l=i;return a.next(h=>M.forEach(h,(f,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ee())).next(f=>({batchId:c,changes:yd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let s=Ur();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ur();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(_,m){return new ls(m,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((_,m)=>{a=a.insert(_,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Be.newInvalidDocument(f)))});let c=Ur();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Hr(f.mutation,h,Ye.empty(),Ae.now()),Ki(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return M.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:gt(s.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Ey(s.bundledQuery),readTime:gt(s.readTime)}}(t)),M.resolve()}}/**
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
 */class ky{constructor(){this.overlays=new ge(j.comparator),this.Ir=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rn();return M.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=Rn(),i=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ge((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Rn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Rn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return M.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new J_(t,r));let i=this.Ir.get(t);i===void 0&&(i=ee(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Py{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.Tr=new Me(Re.Er),this.dr=new Me(Re.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Re(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Re(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new j(new me([])),r=new Re(t,e),s=new Re(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new j(new me([])),r=new Re(t,e),s=new Re(t,e+1);let i=ee();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Re(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return j.comparator(e.key,t.key)||oe(e.wr,t.wr)}static Ar(e,t){return oe(e.wr,t.wr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Me(Re.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new X_(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Me(oe);return t.forEach(s=>{const i=new Re(s,0),a=new Re(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const a=new Re(new j(i),0);let c=new Me(oe);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},a),M.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){le(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(t.mutations,s=>{const i=new Re(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Re(t,0),s=this.br.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.Mr=e,this.docs=function(){return new ge(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let r=xt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Be.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=xt();const a=t.path,c=new j(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||p_(f_(f),r)<=0||(s.has(f.key)||Ki(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Or(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Dy(this)}getSize(e){return M.resolve(this.size)}}class Dy extends by{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.persistence=e,this.Nr=new dr(t=>Fa(t),Ua),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new za,this.targetCount=0,this.kr=or.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),M.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new or(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Kn(t),M.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Va(0),this.Kr=!1,this.Kr=!0,this.$r=new Py,this.referenceDelegate=e(this),this.Ur=new My(this),this.indexManager=new Ty,this.remoteDocumentCache=function(s){return new Ny(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new wy(t),this.Gr=new Ry(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ky,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Cy(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new Oy(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Oy extends g_{constructor(e){super(),this.currentSequenceNumber=e}}class Wa{constructor(e){this.persistence=e,this.Jr=new za,this.Yr=null}static Zr(e){return new Wa(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),M.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=j.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return M.or([()=>M.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ee(),s=ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ha(e,t.fromCache,r,s)}}/**
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
 */class Ly{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Fm()?8:__($e())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Ly;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Or()<=ne.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Gn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Or()<=ne.DEBUG&&U("QueryEngine","Query:",Gn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Or()<=ne.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Gn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):M.resolve())}Yi(e,t){if(ru(t))return M.resolve(null);let r=mt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Si(t,null,"F"),r=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ee(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,c);return this.ns(t,h,a,l.readTime)?this.Yi(e,Si(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return ru(t)||s.isEqual(H.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?M.resolve(null):(Or()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gn(t)),this.rs(e,a,t,d_(s,-1)).next(c=>c))})}ts(e,t){let r=new Me(gd(e));return t.forEach((s,i)=>{Ki(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Or()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Gn(t)),this.Ji.getDocumentsMatchingQuery(e,t,dn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ge(oe),this._s=new dr(i=>Fa(i),Ua),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Uy(n,e,t,r){return new Fy(n,e,t,r)}async function xd(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=ee();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function By(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const _=h.batch,m=_.keys();let w=M.resolve();return m.forEach(R=>{w=w.next(()=>f.getEntry(l,R)).next(P=>{const N=h.docVersions.get(R);le(N!==null),P.version.compareTo(N)<0&&(_.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,_))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Fd(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function $y(n,e){const t=G(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,_)=>{const m=s.get(_);if(!m)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,_)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?w=w.withResumeToken(Ve.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(_,w),function(P,N,V){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,w,f)&&c.push(t.Ur.updateTargetData(i,w))});let l=xt(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(jy(i,a,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(_=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return M.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function jy(n,e,t){let r=ee(),s=ee();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=xt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):U("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function qy(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zy(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new sn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function fa(n,e,t){const r=G(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!cs(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function pu(n,e,t){const r=G(n);let s=H.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const _=G(l),m=_._s.get(f);return m!==void 0?M.resolve(_.os.get(m)):_.Ur.getTargetData(h,f)}(r,a,mt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:ee())).next(c=>(Wy(r,O_(e),c),{documents:c,Ts:i})))}function Wy(n,e,t){let r=n.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class mu{constructor(){this.activeTargetIds=$_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hy{constructor(){this.so=new mu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new mu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Gy{_o(e){}shutdown(){}}/**
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
 */class gu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xs=null;function Bo(){return Xs===null?Xs=function(){return 268435456+Math.round(2147483648*Math.random())}():Xs++,"0x"+Xs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class Xy extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=Bo(),l=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,l,h,s).then(f=>(U("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw nr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=Ky[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Bo();return new Promise((a,c)=>{const l=new Yh;l.setWithCredentials(!0),l.listenOnce(Zh.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case oi.NO_ERROR:const f=l.getResponseJson();U(Fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case oi.TIMEOUT:U(Fe,`RPC '${e}' ${i} timed out`),c(new x(D.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const _=l.getStatus();if(U(Fe,`RPC '${e}' ${i} failed with status:`,_,"response text:",l.getResponseText()),_>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m?.error;if(w&&w.status&&w.message){const R=function(N){const V=N.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(V)>=0?V:D.UNKNOWN}(w.status);c(new x(R,w.message))}else c(new x(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new x(D.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U(Fe,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);U(Fe,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=Bo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=nd(),c=td(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");U(Fe,`Creating RPC '${e}' stream ${s}: ${f}`,l);const _=a.createWebChannel(f,l);let m=!1,w=!1;const R=new Qy({Io:N=>{w?U(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(U(Fe,`Opening RPC '${e}' stream ${s} transport.`),_.open(),m=!0),U(Fe,`RPC '${e}' stream ${s} sending:`,N),_.send(N))},To:()=>_.close()}),P=(N,V,L)=>{N.listen(V,$=>{try{L($)}catch(K){setTimeout(()=>{throw K},0)}})};return P(_,Fr.EventType.OPEN,()=>{w||(U(Fe,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),P(_,Fr.EventType.CLOSE,()=>{w||(w=!0,U(Fe,`RPC '${e}' stream ${s} transport closed`),R.So())}),P(_,Fr.EventType.ERROR,N=>{w||(w=!0,nr(Fe,`RPC '${e}' stream ${s} transport errored:`,N),R.So(new x(D.UNAVAILABLE,"The operation could not be completed")))}),P(_,Fr.EventType.MESSAGE,N=>{var V;if(!w){const L=N.data[0];le(!!L);const $=L,K=$.error||((V=$[0])===null||V===void 0?void 0:V.error);if(K){U(Fe,`RPC '${e}' stream ${s} received error:`,K);const te=K.status;let J=function(T){const b=Te[T];if(b!==void 0)return Rd(b)}(te),I=K.message;J===void 0&&(J=D.INTERNAL,I="Unknown error status: "+te+" with message "+K.message),w=!0,R.So(new x(J,I)),_.close()}else U(Fe,`RPC '${e}' stream ${s} received:`,L),R.bo(L)}}),P(c,ed.STAT_EVENT,N=>{N.stat===ra.PROXY?U(Fe,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===ra.NOPROXY&&U(Fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function $o(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){return new oy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ud(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new x(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jy extends Bd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=ly(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?gt(a.readTime):H.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=da(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=aa(l)?{documents:dy(i,l)}:{query:fy(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Cd(i,a.resumeToken);const h=la(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Pi(i,a.snapshotVersion.toTimestamp());const h=la(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=my(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=da(this.serializer),t.removeTarget=e,this.a_(t)}}class Yy extends Bd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=hy(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=da(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>uy(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ua(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,ua(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ev{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Lt(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Un(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=G(l);h.L_.add(4),await ds(h),h.q_.set("Unknown"),h.L_.delete(4),await eo(h)}(this))})}),this.q_=new ev(r,s)}}async function eo(n){if(Un(n))for(const e of n.B_)await e(!0)}async function ds(n){for(const e of n.B_)await e(!1)}function $d(n,e){const t=G(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Xa(t)?Qa(t):fr(t).r_()&&Ka(t,e))}function Ga(n,e){const t=G(n),r=fr(t);t.N_.delete(e),r.r_()&&jd(t,e),t.N_.size===0&&(r.r_()?r.o_():Un(t)&&t.q_.set("Unknown"))}function Ka(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fr(n).A_(e)}function jd(n,e){n.Q_.xe(e),fr(n).R_(e)}function Qa(n){n.Q_=new ny({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),fr(n).start(),n.q_.v_()}function Xa(n){return Un(n)&&!fr(n).n_()&&n.N_.size>0}function Un(n){return G(n).L_.size===0}function qd(n){n.Q_=void 0}async function nv(n){n.q_.set("Online")}async function rv(n){n.N_.forEach((e,t)=>{Ka(n,e)})}async function sv(n,e){qd(n),Xa(n)?(n.q_.M_(e),Qa(n)):n.q_.set("Unknown")}async function iv(n,e,t){if(n.q_.set("Online"),e instanceof Pd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ci(n,r)}else if(e instanceof li?n.Q_.Ke(e):e instanceof kd?n.Q_.He(e):n.Q_.We(e),!t.isEqual(H.min()))try{const r=await Fd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Ve.EMPTY_BYTE_STRING,f.snapshotVersion)),jd(i,l);const _=new sn(f.target,l,h,f.sequenceNumber);Ka(i,_)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ci(n,r)}}async function Ci(n,e,t){if(!cs(e))throw e;n.L_.add(1),await ds(n),n.q_.set("Offline"),t||(t=()=>Fd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await eo(n)})}function zd(n,e){return e().catch(t=>Ci(n,t,e))}async function to(n){const e=G(n),t=pn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ov(e);)try{const s=await qy(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,av(e,s)}catch(s){await Ci(e,s)}Wd(e)&&Hd(e)}function ov(n){return Un(n)&&n.O_.length<10}function av(n,e){n.O_.push(e);const t=pn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Wd(n){return Un(n)&&!pn(n).n_()&&n.O_.length>0}function Hd(n){pn(n).start()}async function cv(n){pn(n).p_()}async function lv(n){const e=pn(n);for(const t of n.O_)e.m_(t.mutations)}async function uv(n,e,t){const r=n.O_.shift(),s=$a.from(r,e,t);await zd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await to(n)}async function hv(n,e){e&&pn(n).V_&&await async function(r,s){if(function(a){return Z_(a)&&a!==D.ABORTED}(s.code)){const i=r.O_.shift();pn(r).s_(),await zd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await to(r)}}(n,e),Wd(n)&&Hd(n)}async function _u(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Un(t);t.L_.add(3),await ds(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await eo(t)}async function dv(n,e){const t=G(n);e?(t.L_.delete(2),await eo(t)):e||(t.L_.add(2),await ds(t),t.q_.set("Unknown"))}function fr(n){return n.K_||(n.K_=function(t,r,s){const i=G(t);return i.w_(),new Jy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:nv.bind(null,n),Ro:rv.bind(null,n),mo:sv.bind(null,n),d_:iv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Xa(n)?Qa(n):n.q_.set("Unknown")):(await n.K_.stop(),qd(n))})),n.K_}function pn(n){return n.U_||(n.U_=function(t,r,s){const i=G(t);return i.w_(),new Yy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cv.bind(null,n),mo:hv.bind(null,n),f_:lv.bind(null,n),g_:uv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await to(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ja(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ya(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),cs(n))return new x(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Ur(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new Jn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Jn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.W_=new ge(j.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ar{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ar(e,t,Jn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class pv{constructor(){this.queries=vu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=vu(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new x(D.ABORTED,"Firestore shutting down"))}}function vu(){return new dr(n=>md(n),Gi)}async function Za(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new fv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ya(a,`Initialization of query '${Gn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&tc(t)}async function ec(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function mv(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&tc(t)}function gv(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function tc(n){n.Y_.forEach(e=>{e.next()})}var pa,wu;(wu=pa||(pa={})).ea="default",wu.Cache="cache";class nc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ar(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==pa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.key=e}}class Kd{constructor(e){this.key=e}}class _v{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=gd(e),this.Ra=new Jn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new yu,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,_)=>{const m=s.get(f),w=Ki(this.query,_)?_:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;m&&w?m.data.isEqual(w.data)?R!==P&&(r.track({type:3,doc:w}),N=!0):this.ga(m,w)||(r.track({type:2,doc:w}),N=!0,(l&&this.Aa(w,l)>0||h&&this.Aa(w,h)<0)&&(c=!0)):!m&&w?(r.track({type:0,doc:w}),N=!0):m&&!w&&(r.track({type:1,doc:m}),N=!0,(l||h)&&(c=!0)),N&&(w?(a=a.add(w),i=P?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,_)=>function(w,R){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return P(w)-P(R)}(f.type,_.type)||this.Aa(f.doc,_.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,a.length!==0||h?{snapshot:new ar(this.query,e.Ra,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new yu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Kd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Gd(r))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ar.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class yv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class vv{constructor(e){this.key=e,this.va=!1}}class wv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new dr(c=>md(c),Gi),this.Ma=new Map,this.xa=new Set,this.Oa=new ge(j.comparator),this.Na=new Map,this.La=new za,this.Ba={},this.ka=new Map,this.qa=or.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ev(n,e,t=!0){const r=ef(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Qd(r,e,t,!0),s}async function Tv(n,e){const t=ef(n);await Qd(t,e,!0,!1)}async function Qd(n,e,t,r){const s=await zy(n.localStore,mt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Iv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&$d(n.remoteStore,s),c}async function Iv(n,e,t,r,s){n.Ka=(_,m,w)=>async function(P,N,V,L){let $=N.view.ma(V);$.ns&&($=await pu(P.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,$)));const K=L&&L.targetChanges.get(N.targetId),te=L&&L.targetMismatches.get(N.targetId)!=null,J=N.view.applyChanges($,P.isPrimaryClient,K,te);return Tu(P,N.targetId,J.wa),J.snapshot}(n,_,m,w);const i=await pu(n.localStore,e,!0),a=new _v(e,i.Ts),c=a.ma(i.documents),l=hs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Tu(n,t,h.wa);const f=new yv(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function bv(n,e,t){const r=G(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Gi(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ga(r.remoteStore,s.targetId),ma(r,s.targetId)}).catch(as)):(ma(r,s.targetId),await fa(r.localStore,s.targetId,!0))}async function Av(n,e){const t=G(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ga(t.remoteStore,r.targetId))}async function Sv(n,e,t){const r=Mv(n);try{const s=await function(a,c){const l=G(a),h=Ae.now(),f=c.reduce((w,R)=>w.add(R.key),ee());let _,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=xt(),P=ee();return l.cs.getEntries(w,f).next(N=>{R=N,R.forEach((V,L)=>{L.isValidDocument()||(P=P.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,R)).next(N=>{_=N;const V=[];for(const L of c){const $=K_(L,_.get(L.key).overlayedDocument);$!=null&&V.push(new gn(L.key,$,ad($.value.mapValue),Ke.exists(!0)))}return l.mutationQueue.addMutationBatch(w,h,V,c)}).next(N=>{m=N;const V=N.applyToLocalDocumentSet(_,P);return l.documentOverlayCache.saveOverlays(w,N.batchId,V)})}).then(()=>({batchId:m.batchId,changes:yd(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Ba[a.currentUser.toKey()];h||(h=new ge(oe)),h=h.insert(c,l),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await fs(r,s.changes),await to(r.remoteStore)}catch(s){const i=Ya(s,"Failed to persist write");t.reject(i)}}async function Xd(n,e){const t=G(n);try{const r=await $y(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?le(a.va):s.removedDocuments.size>0&&(le(a.va),a.va=!1))}),await fs(t,r,e)}catch(r){await as(r)}}function Eu(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=G(a);l.onlineState=c;let h=!1;l.queries.forEach((f,_)=>{for(const m of _.j_)m.Z_(c)&&(h=!0)}),h&&tc(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rv(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ge(j.comparator);a=a.insert(i,Be.newNoDocument(i,H.min()));const c=ee().add(i),l=new Yi(H.min(),new Map,new ge(oe),a,c);await Xd(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),rc(r)}else await fa(r.localStore,e,!1).then(()=>ma(r,e,t)).catch(as)}async function kv(n,e){const t=G(n),r=e.batch.batchId;try{const s=await By(t.localStore,e);Yd(t,r,null),Jd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await fs(t,s)}catch(s){await as(s)}}async function Pv(n,e,t){const r=G(n);try{const s=await function(a,c){const l=G(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(_=>(le(_!==null),f=_.keys(),l.mutationQueue.removeMutationBatch(h,_))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Yd(r,e,t),Jd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await fs(r,s)}catch(s){await as(s)}}function Jd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Yd(n,e,t){const r=G(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ma(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Zd(n,r)})}function Zd(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ga(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),rc(n))}function Tu(n,e,t){for(const r of t)r instanceof Gd?(n.La.addReference(r.key,e),Cv(n,r)):r instanceof Kd?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Zd(n,r.key)):z()}function Cv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),rc(n))}function rc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new j(me.fromString(e)),r=n.qa.next();n.Na.set(r,new vv(t)),n.Oa=n.Oa.insert(t,r),$d(n.remoteStore,new sn(mt(Hi(t.path)),r,"TargetPurposeLimboResolution",Va.oe))}}async function fs(n,e,t){const r=G(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const _=h?!h.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,_?"current":"not-current")}if(h){s.push(h);const _=Ha.Wi(l.targetId,h);i.push(_)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,h){const f=G(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>M.forEach(h,m=>M.forEach(m.$i,w=>f.persistence.referenceDelegate.addReference(_,m.targetId,w)).next(()=>M.forEach(m.Ui,w=>f.persistence.referenceDelegate.removeReference(_,m.targetId,w)))))}catch(_){if(!cs(_))throw _;U("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const m=_.targetId;if(!_.fromCache){const w=f.os.get(m),R=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,P)}}}(r.localStore,i))}async function Nv(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await xd(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new x(D.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fs(t,r.hs)}}function Dv(n,e){const t=G(n),r=t.Na.get(e);if(r&&r.va)return ee().add(r.key);{let s=ee();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function ef(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rv.bind(null,e),e.Ca.d_=mv.bind(null,e.eventManager),e.Ca.$a=gv.bind(null,e.eventManager),e}function Mv(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pv.bind(null,e),e}class Ni{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Uy(this.persistence,new xy,e.initialUser,this.serializer)}Ga(e){return new Vy(Wa.Zr,this.serializer)}Wa(e){return new Hy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ni.provider={build:()=>new Ni};class ga{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Eu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nv.bind(null,this.syncEngine),await dv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pv}()}createDatastore(e){const t=Zi(e.databaseInfo.databaseId),r=function(i){return new Xy(i)}(e.databaseInfo);return function(i,a,c,l){return new Zy(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new tv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Eu(this.syncEngine,t,0),function(){return gu.D()?new gu:new Gy}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,f){const _=new wv(s,i,a,c,l,h);return f&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);U("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ds(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ga.provider={build:()=>new ga};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=sd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ya(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jo(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await xd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Iu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ov(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>_u(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>_u(e.remoteStore,s)),n._onlineComponents=e}async function Ov(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await jo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;nr("Error using user provided cache. Falling back to memory cache: "+t),await jo(n,new Ni)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await jo(n,new Ni);return n._offlineComponents}async function tf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Iu(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Iu(n,new ga))),n._onlineComponents}function Lv(n){return tf(n).then(e=>e.syncEngine)}async function Di(n){const e=await tf(n),t=e.eventManager;return t.onListen=Ev.bind(null,e.syncEngine),t.onUnlisten=bv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Tv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Av.bind(null,e.syncEngine),t}function xv(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new sc({next:m=>{f.Za(),a.enqueueAndForget(()=>ec(i,_));const w=m.docs.has(c);!w&&m.fromCache?h.reject(new x(D.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?h.reject(new x(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new nc(Hi(c.path),f,{includeMetadataChanges:!0,_a:!0});return Za(i,_)}(await Di(n),n.asyncQueue,e,t,r)),r.promise}function Fv(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new sc({next:m=>{f.Za(),a.enqueueAndForget(()=>ec(i,_)),m.fromCache&&l.source==="server"?h.reject(new x(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new nc(c,f,{includeMetadataChanges:!0,_a:!0});return Za(i,_)}(await Di(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function nf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n,e,t){if(!t)throw new x(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Uv(n,e,t,r){if(e===!0&&r===!0)throw new x(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Au(n){if(!j.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Su(n){if(j.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function no(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=no(n);throw new x(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ro{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ru({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ru(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new r_;switch(r.type){case"firstParty":return new a_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=bu.get(t);r&&(U("ComponentProvider","Removing Datastore"),bu.delete(t),r.terminate())}(this),Promise.resolve()}}function Bv(n,e,t,r={}){var s;const i=(n=Ze(n,ro))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Ue.MOCK_USER;else{c=Nm(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new x(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ue(h)}n._authCredentials=new s_(new rd(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _n(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class ln extends _n{constructor(e,t,r){super(e,t,Hi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new j(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function ke(n,e,...t){if(n=Se(n),rf("collection","path",e),n instanceof ro){const r=me.fromString(e,...t);return Su(r),new ln(n,null,r)}{if(!(n instanceof He||n instanceof ln))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return Su(r),new ln(n.firestore,null,r)}}function st(n,e,...t){if(n=Se(n),arguments.length===1&&(e=sd.newId()),rf("doc","path",e),n instanceof ro){const r=me.fromString(e,...t);return Au(r),new He(n,null,new j(r))}{if(!(n instanceof He||n instanceof ln))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return Au(r),new He(n.firestore,n instanceof ln?n.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ud(this,"async_queue_retry"),this.Vu=()=>{const r=$o();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=$o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=$o();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Vt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!cs(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ja.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Pu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Ft extends ro{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ku,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ku(e),this._firestoreClient=void 0,await e}}}function $v(n,e){const t=typeof n=="object"?n:Kh(),r=typeof n=="string"?n:"(default)",s=Da(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Pm("firestore");i&&Bv(s,...i)}return s}function ps(n){if(n._terminated)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jv(n),n._firestoreClient}function jv(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,f){return new w_(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,nf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Vv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(Ve.fromBase64String(e))}catch(t){throw new x(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cr(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */class ac{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=/^__.*__$/;class zv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new gn(e,this.data,this.fieldMask,t,this.fieldTransforms):new us(e,this.data,t,this.fieldTransforms)}}class sf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new gn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function of(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class cc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Mi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(of(this.Cu)&&qv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Wv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zi(e)}Qu(e,t,r,s=!1){return new cc({Cu:e,methodName:t,qu:r,path:De.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function so(n){const e=n._freezeSettings(),t=Zi(n._databaseId);return new Wv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function af(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);lc("Data must be an object, but it was:",a,r);const c=uf(r,a);let l,h;if(i.merge)l=new Ye(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const _ of i.mergeFields){const m=_a(e,_,t);if(!a.contains(m))throw new x(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);df(f,m)||f.push(m)}l=new Ye(f),h=a.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,h=a.fieldTransforms;return new zv(new Ge(c),l,h)}class io extends ic{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof io}}function cf(n,e,t,r){const s=n.Qu(1,e,t);lc("Data must be an object, but it was:",s,r);const i=[],a=Ge.empty();Fn(r,(l,h)=>{const f=uc(e,l,t);h=Se(h);const _=s.Nu(f);if(h instanceof io)i.push(f);else{const m=ms(h,_);m!=null&&(i.push(f),a.set(f,m))}});const c=new Ye(i);return new sf(a,c,s.fieldTransforms)}function lf(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[_a(e,r,t)],l=[s];if(i.length%2!=0)throw new x(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(_a(e,i[m])),l.push(i[m+1]);const h=[],f=Ge.empty();for(let m=c.length-1;m>=0;--m)if(!df(h,c[m])){const w=c[m];let R=l[m];R=Se(R);const P=a.Nu(w);if(R instanceof io)h.push(w);else{const N=ms(R,P);N!=null&&(h.push(w),f.set(w,N))}}const _=new Ye(h);return new sf(f,_,a.fieldTransforms)}function Hv(n,e,t,r=!1){return ms(t,n.Qu(r?4:3,e))}function ms(n,e){if(hf(n=Se(n)))return lc("Unsupported field value:",e,n),uf(n,e);if(n instanceof ic)return function(r,s){if(!of(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=ms(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return j_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ae.fromDate(r);return{timestampValue:Pi(s.serializer,i)}}if(r instanceof Ae){const i=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pi(s.serializer,i)}}if(r instanceof oc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cr)return{bytesValue:Cd(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ac)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ba(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${no(r)}`)}(n,e)}function uf(n,e){const t={};return id(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fn(n,(r,s)=>{const i=ms(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function hf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof oc||n instanceof cr||n instanceof He||n instanceof ic||n instanceof ac)}function lc(n,e,t){if(!hf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=no(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function _a(n,e,t){if((e=Se(e))instanceof pr)return e._internalPath;if(typeof e=="string")return uc(n,e);throw Mi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Gv=new RegExp("[~\\*/\\[\\]]");function uc(n,e,t){if(e.search(Gv)>=0)throw Mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pr(...e.split("."))._internalPath}catch{throw Mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new x(D.INVALID_ARGUMENT,c+n+l)}function df(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Kv extends ff{data(){return super.data()}}function hc(n,e){return typeof e=="string"?uc(n,e):e instanceof pr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dc{}class mf extends dc{}function nt(n,e,...t){let r=[];e instanceof dc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof fc).length,c=i.filter(l=>l instanceof oo).length;if(a>1||a>0&&c>0)throw new x(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class oo extends mf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new oo(e,t,r)}_apply(e){const t=this._parse(e);return gf(e._query,t),new _n(e.firestore,e.converter,ca(e._query,t))}_parse(e){const t=so(e.firestore);return function(i,a,c,l,h,f,_){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Nu(_,f);const w=[];for(const R of _)w.push(Cu(l,i,R));m={arrayValue:{values:w}}}else m=Cu(l,i,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Nu(_,f),m=Hv(c,a,_,f==="in"||f==="not-in");return be.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function We(n,e,t){const r=e,s=hc("where",n);return oo._create(s,r,t)}class fc extends dc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)gf(a,l),a=ca(a,l)}(e._query,t),new _n(e.firestore,e.converter,ca(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pc extends mf{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new pc(e,t,r)}_apply(e){return new _n(e.firestore,e.converter,Si(e._query,this._limit,this._limitType))}}function Js(n){return pc._create("limit",n,"F")}function Cu(n,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new x(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pd(e)&&t.indexOf("/")!==-1)throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!j.isDocumentKey(r))throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jl(n,new j(r))}if(t instanceof He)return Jl(n,t._key);throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${no(t)}.`)}function Nu(n,e){if(!Array.isArray(n)||n.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Qv{convertValue(e,t="none"){switch(On(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ve(a.doubleValue));return new ac(i)}convertGeoPoint(e){return new oc(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=La(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){const t=fn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);le(Ld(r));const s=new Yr(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||Lt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yf extends ff{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(hc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ui extends yf{data(e={}){return super.data(e)}}class vf{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new $r(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ui(this._firestore,this._userDataWriter,r.key,r,new $r(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new ui(s._firestore,s._userDataWriter,c.doc.key,c.doc,new $r(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ui(s._firestore,s._userDataWriter,c.doc.key,c.doc,new $r(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Xv(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Xv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(n){n=Ze(n,He);const e=Ze(n.firestore,Ft);return xv(ps(e),n._key).then(t=>wf(e,n,t))}class mc extends Qv{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function Yv(n){n=Ze(n,_n);const e=Ze(n.firestore,Ft),t=ps(e),r=new mc(e);return pf(n._query),Fv(t,n._query).then(s=>new vf(e,r,n,s))}function Zv(n,e,t,...r){n=Ze(n,He);const s=Ze(n.firestore,Ft),i=so(s);let a;return a=typeof(e=Se(e))=="string"||e instanceof pr?lf(i,"updateDoc",n._key,e,t,r):cf(i,"updateDoc",n._key,e),ao(s,[a.toMutation(n._key,Ke.exists(!0))])}function ew(n){return ao(Ze(n.firestore,Ft),[new Ji(n._key,Ke.none())])}function tw(n,e){const t=Ze(n.firestore,Ft),r=st(n),s=_f(n.converter,e);return ao(t,[af(so(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then(()=>r)}function nw(n,...e){var t,r,s;n=Se(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Pu(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Pu(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(s=_.complete)===null||s===void 0?void 0:s.bind(_)}let l,h,f;if(n instanceof He)h=Ze(n.firestore,Ft),f=Hi(n._key.path),l={next:_=>{e[a]&&e[a](wf(h,n,_))},error:e[a+1],complete:e[a+2]};else{const _=Ze(n,_n);h=Ze(_.firestore,Ft),f=_._query;const m=new mc(h);l={next:w=>{e[a]&&e[a](new vf(h,m,_,w))},error:e[a+1],complete:e[a+2]},pf(n._query)}return function(m,w,R,P){const N=new sc(P),V=new nc(w,N,R);return m.asyncQueue.enqueueAndForget(async()=>Za(await Di(m),V)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>ec(await Di(m),V))}}(ps(h),f,c,l)}function ao(n,e){return function(r,s){const i=new Vt;return r.asyncQueue.enqueueAndForget(async()=>Sv(await Lv(r),s,i)),i.promise}(ps(n),e)}function wf(n,e,t){const r=t.docs.get(e._key),s=new mc(n);return new yf(n,s,e._key,r,new $r(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=so(e)}set(e,t,r){this._verifyNotCommitted();const s=qo(e,this._firestore),i=_f(s.converter,t,r),a=af(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Ke.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=qo(e,this._firestore);let a;return a=typeof(t=Se(t))=="string"||t instanceof pr?lf(this._dataReader,"WriteBatch.update",i._key,t,r,s):cf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=qo(e,this._firestore);return this._mutations=this._mutations.concat(new Ji(t._key,Ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function qo(n,e){if((n=Se(n)).firestore!==e)throw new x(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n){return ps(n=Ze(n,Ft)),new rw(n,e=>ao(n,e))}(function(e,t=!0){(function(s){hr=s})(ur),tr(new Dn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ft(new i_(r.getProvider("auth-internal")),new l_(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new x(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),cn(Hl,"4.7.3",e),cn(Hl,"4.7.3","esm2017")})();function gc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Ef(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iw=Ef,Tf=new is("auth","Firebase",Ef());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Ca("@firebase/auth");function ow(n,...e){Vi.logLevel<=ne.WARN&&Vi.warn(`Auth (${ur}): ${n}`,...e)}function hi(n,...e){Vi.logLevel<=ne.ERROR&&Vi.error(`Auth (${ur}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,...e){throw _c(n,...e)}function _t(n,...e){return _c(n,...e)}function If(n,e,t){const r=Object.assign(Object.assign({},iw()),{[e]:t});return new is("auth","Firebase",r).create(e,{appName:n.name})}function un(n){return If(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _c(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Tf.create(n,...e)}function q(n,e,...t){if(!n)throw _c(e,...t)}function Nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hi(e),new Error(e)}function Bt(n,e){n||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function aw(){return Du()==="http:"||Du()==="https:"}function Du(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aw()||Om()||"connection"in navigator)?navigator.onLine:!0}function lw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bt(t>e,"Short delay should be less than long delay!"),this.isMobile=Dm()||Lm()}get(){return cw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n,e){Bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new gs(3e4,6e4);function co(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function mr(n,e,t,r,s={}){return Af(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=os(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return Vm()||(h.referrerPolicy="no-referrer"),bf.fetch()(Rf(n,n.config.apiHost,t,c),h)})}async function Af(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},uw),e);try{const s=new dw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ys(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ys(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ys(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ys(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw If(n,f,h);Ut(n,f)}}catch(s){if(s instanceof jt)throw s;Ut(n,"network-request-failed",{message:String(s)})}}async function Sf(n,e,t,r,s={}){const i=await mr(n,e,t,r,s);return"mfaPendingCredential"in i&&Ut(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Rf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?yc(n.config,s):`${n.config.apiScheme}://${s}`}class dw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),hw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ys(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=_t(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(n,e){return mr(n,"POST","/v1/accounts:delete",e)}async function kf(n,e){return mr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pw(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=vc(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Gr(zo(s.auth_time)),issuedAtTime:Gr(zo(s.iat)),expirationTime:Gr(zo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function zo(n){return Number(n)*1e3}function vc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return hi("JWT malformed, contained fewer than 3 sections"),null;try{const s=$h(t);return s?JSON.parse(s):(hi("Failed to decode base64 JWT payload"),null)}catch(s){return hi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Mu(n){const e=vc(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jt&&mw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ns(n,kf(t,{idToken:r}));q(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pf(i.providerUserInfo):[],c=yw(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,f=l?h:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new va(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function _w(n){const e=Se(n);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Pf(n){return n.map(e=>{var{providerId:t}=e,r=gc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(n,e){const t=await Af(n,{},async()=>{const r=os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Rf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",bf.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ww(n,e){return mr(n,"POST","/v2/accounts:revokeToken",co(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Mu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await vw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Yn;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=gc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new va(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ns(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pw(this,e)}reload(){return _w(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await ns(this,fw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,f;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,V=(h=t.createdAt)!==null&&h!==void 0?h:void 0,L=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:K,isAnonymous:te,providerData:J,stsTokenManager:I}=t;q($&&I,e,"internal-error");const y=Yn.fromJSON(this.name,I);q(typeof $=="string",e,"internal-error"),Yt(_,e.name),Yt(m,e.name),q(typeof K=="boolean",e,"internal-error"),q(typeof te=="boolean",e,"internal-error"),Yt(w,e.name),Yt(R,e.name),Yt(P,e.name),Yt(N,e.name),Yt(V,e.name),Yt(L,e.name);const T=new Dt({uid:$,auth:e,email:m,emailVerified:K,displayName:_,isAnonymous:te,photoURL:R,phoneNumber:w,tenantId:P,stsTokenManager:y,createdAt:V,lastLoginAt:L});return J&&Array.isArray(J)&&(T.providerData=J.map(b=>Object.assign({},b))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,t,r=!1){const s=new Yn;s.updateFromServerResponse(t);const i=new Dt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Pf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new Yn;c.updateFromIdToken(r);const l=new Dt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new va(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map;function Mt(n){Bt(n instanceof Function,"Expected a class definition");let e=Vu.get(n);return e?(Bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vu.set(n,e),e)}/**
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
 */class Cf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cf.type="NONE";const Ou=Cf;/**
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
 */function di(n,e,t){return`firebase:${n}:${e}:${t}`}class Zn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=di(this.userKey,s.apiKey,i),this.fullPersistenceKey=di("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zn(Mt(Ou),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Mt(Ou);const a=di(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){const _=Dt._fromJSON(e,f);h!==i&&(c=_),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Zn(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Zn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lf(e))return"Blackberry";if(xf(e))return"Webos";if(Df(e))return"Safari";if((e.includes("chrome/")||Mf(e))&&!e.includes("edge/"))return"Chrome";if(Of(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Nf(n=$e()){return/firefox\//i.test(n)}function Df(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mf(n=$e()){return/crios\//i.test(n)}function Vf(n=$e()){return/iemobile/i.test(n)}function Of(n=$e()){return/android/i.test(n)}function Lf(n=$e()){return/blackberry/i.test(n)}function xf(n=$e()){return/webos/i.test(n)}function wc(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ew(n=$e()){var e;return wc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tw(){return xm()&&document.documentMode===10}function Ff(n=$e()){return wc(n)||Of(n)||xf(n)||Lf(n)||/windows phone/i.test(n)||Vf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n,e=[]){let t;switch(n){case"Browser":t=Lu($e());break;case"Worker":t=`${Lu($e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ur}/${r}`}/**
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
 */class Iw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function bw(n,e={}){return mr(n,"GET","/v2/passwordPolicy",co(n,e))}/**
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
 */const Aw=6;class Sw{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Aw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.beforeStateQueue=new Iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await kf(this,{idToken:e}),r=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(un(this));const t=e?Se(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bw(this),t=new Sw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ww(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[Mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&ow(`Error while retrieving App Check token: ${t.error}`),t?.token}}function lo(n){return Se(n)}class xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wm(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kw(n){Ec=n}function Pw(n){return Ec.loadJS(n)}function Cw(){return Ec.gapiScript}function Nw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(n,e){const t=Da(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ei(i,e??{}))return s;Ut(s,"already-initialized")}return t.initialize({options:e})}function Mw(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Mt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Vw(n,e,t){const r=lo(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bf(e),{host:a,port:c}=Ow(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Lw()}function Bf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ow(n){const e=Bf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Fu(a)}}}function Fu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Lw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,t){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(n,e){return Sf(n,"POST","/v1/accounts:signInWithIdp",co(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="http://localhost";class Ln extends $f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ut("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=gc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ln(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){const e={requestUri:xw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=os(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends _s{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ln._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends _s{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends _s{constructor(){super("twitter.com")}static credential(e,t){return Ln._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rn.credential(t,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),a=Uu(r);return new xn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Uu(r);return new xn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Uu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends jt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Li.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Li(e,t,r,s)}}function qf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Li._fromErrorAndOperation(n,i,e,r):i})}async function Fw(n,e,t=!1){const r=await ns(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xn._forOperation(n,"link",r)}/**
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
 */async function Uw(n,e,t=!1){const{auth:r}=n;if(Ct(r.app))return Promise.reject(un(r));const s="reauthenticate";try{const i=await ns(n,qf(r,s,e,n),t);q(i.idToken,r,"internal-error");const a=vc(i.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(n.uid===c,r,"user-mismatch"),xn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Ut(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,e,t=!1){if(Ct(n.app))return Promise.reject(un(n));const r="signIn",s=await qf(n,r,e),i=await xn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(n,e){return Sf(n,"POST","/v1/accounts:signInWithCustomToken",co(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(n,e){if(Ct(n.app))return Promise.reject(un(n));const t=lo(n),r=await $w(t,{token:e,returnSecureToken:!0}),s=await xn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function qw(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function zw(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function Ww(n){return Se(n).signOut()}const xi="__sak";/**
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
 */class zf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xi,"1"),this.storage.removeItem(xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=1e3,Gw=10;class Wf extends zf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ff(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Tw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wf.type="LOCAL";const Kw=Wf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends zf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hf.type="SESSION";const Gf=Hf;/**
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
 */function Qw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new uo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await Qw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Xw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Tc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const m=_;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return window}function Jw(n){yt().location.href=n}/**
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
 */function Kf(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function Yw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function e0(){return Kf()?self:null}/**
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
 */const Qf="firebaseLocalStorageDb",t0=1,Fi="firebaseLocalStorage",Xf="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ho(n,e){return n.transaction([Fi],e?"readwrite":"readonly").objectStore(Fi)}function n0(){const n=indexedDB.deleteDatabase(Qf);return new ys(n).toPromise()}function wa(){const n=indexedDB.open(Qf,t0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fi,{keyPath:Xf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fi)?e(r):(r.close(),await n0(),e(await wa()))})})}async function Bu(n,e,t){const r=ho(n,!0).put({[Xf]:e,value:t});return new ys(r).toPromise()}async function r0(n,e){const t=ho(n,!1).get(e),r=await new ys(t).toPromise();return r===void 0?null:r.value}function $u(n,e){const t=ho(n,!0).delete(e);return new ys(t).toPromise()}const s0=800,i0=3;class Jf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>i0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uo._getInstance(e0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Yw(),!this.activeServiceWorker)return;this.sender=new Xw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wa();return await Bu(e,xi,"1"),await $u(e,xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>r0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$u(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ho(s,!1).getAll();return new ys(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jf.type="LOCAL";const o0=Jf;new gs(3e4,6e4);/**
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
 */function a0(n,e){return e?Mt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ic extends $f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function c0(n){return Bw(n.auth,new Ic(n),n.bypassAuthState)}function l0(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Uw(t,new Ic(n),n.bypassAuthState)}async function u0(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Fw(t,new Ic(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return c0;case"linkViaPopup":case"linkViaRedirect":return u0;case"reauthViaPopup":case"reauthViaRedirect":return l0;default:Ut(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new gs(2e3,1e4);class Xn extends Yf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,h0.get())};e()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="pendingRedirect",fi=new Map;class f0 extends Yf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fi.get(this.auth._key());if(!e){try{const r=await p0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fi.set(this.auth._key(),e)}return this.bypassAuthState||fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p0(n,e){const t=_0(e),r=g0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function m0(n,e){fi.set(n._key(),e)}function g0(n){return Mt(n._redirectPersistence)}function _0(n){return di(d0,n.config.apiKey,n.name)}async function y0(n,e,t=!1){if(Ct(n.app))return Promise.reject(un(n));const r=lo(n),s=a0(r,e),a=await new f0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=10*60*1e3;class w0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!E0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Zf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_t(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ju(e))}saveEventToCache(e){this.cachedEventUids.add(ju(e)),this.lastProcessedEventTime=Date.now()}}function ju(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Zf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function E0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(n,e={}){return mr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b0=/^https?/;async function A0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await T0(n);for(const t of e)try{if(S0(t))return}catch{}Ut(n,"unauthorized-domain")}function S0(n){const e=ya(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!b0.test(t))return!1;if(I0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const R0=new gs(3e4,6e4);function qu(){const n=yt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function k0(n){return new Promise((e,t)=>{var r,s,i;function a(){qu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qu(),t(_t(n,"network-request-failed"))},timeout:R0.get()})}if(!((s=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yt().gapi)===null||i===void 0)&&i.load)a();else{const c=Nw("iframefcb");return yt()[c]=()=>{gapi.load?a():t(_t(n,"network-request-failed"))},Pw(`${Cw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw pi=null,e})}let pi=null;function P0(n){return pi=pi||k0(n),pi}/**
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
 */const C0=new gs(5e3,15e3),N0="__/auth/iframe",D0="emulator/auth/iframe",M0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O0(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yc(e,D0):`https://${n.config.authDomain}/${N0}`,r={apiKey:e.apiKey,appName:n.name,v:ur},s=V0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${os(r).slice(1)}`}async function L0(n){const e=await P0(n),t=yt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:O0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=_t(n,"network-request-failed"),c=yt().setTimeout(()=>{i(a)},C0.get());function l(){yt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const x0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},F0=500,U0=600,B0="_blank",$0="http://localhost";class zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j0(n,e,t,r=F0,s=U0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},x0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=$e().toLowerCase();t&&(c=Mf(h)?B0:t),Nf(h)&&(e=e||$0,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[w,R])=>`${m}${w}=${R},`,"");if(Ew(h)&&c!=="_self")return q0(e||"",c),new zu(null);const _=window.open(e||"",c,f);q(_,n,"popup-blocked");try{_.focus()}catch{}return new zu(_)}function q0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const z0="__/auth/handler",W0="emulator/auth/handler",H0=encodeURIComponent("fac");async function Wu(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ur,eventId:s};if(e instanceof jf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof _s){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${H0}=${encodeURIComponent(l)}`:"";return`${G0(n)}?${os(c).slice(1)}${h}`}function G0({config:n}){return n.emulator?yc(n,W0):`https://${n.authDomain}/${z0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="webStorageSupport";class K0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gf,this._completeRedirectFn=y0,this._overrideRedirectResult=m0}async _openPopup(e,t,r,s){var i;Bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Wu(e,t,r,ya(),s);return j0(e,a,Tc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Wu(e,t,r,ya(),s);return Jw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await L0(e),r=new w0(e);return t.register("authEvent",s=>(q(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wo,{type:Wo},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[Wo];a!==void 0&&t(!!a),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=A0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ff()||Df()||wc()}}const Q0=K0;var Hu="@firebase/auth",Gu="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Y0(n){tr(new Dn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uf(n)},h=new Rw(r,s,i,l);return Mw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),tr(new Dn("auth-internal",e=>{const t=lo(e.getProvider("auth").getImmediate());return(r=>new X0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Hu,Gu,J0(n)),cn(Hu,Gu,"esm2017")}/**
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
 */const Z0=5*60,eE=zh("authIdTokenMaxAge")||Z0;let Ku=null;const tE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>eE)return;const s=t?.token;Ku!==s&&(Ku=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nE(n=Kh()){const e=Da(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Dw(n,{popupRedirectResolver:Q0,persistence:[o0,Kw,Gf]}),r=zh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=tE(i.toString());zw(t,a,()=>a(t.currentUser)),qw(t,c=>a(c))}}const s=jh("auth");return s&&Vw(t,`http://${s}`),t}function rE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=_t("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",rE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Y0("Browser");const sE={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},Qu="2008948704-db2goT00",ep=Gh(sE),ae=$v(ep),Pn=nE(ep);let tp=()=>{};const iE=new Promise(n=>{tp=n});let Xu=!1;const oE=setTimeout(()=>bc(),1e4);function bc(){Xu||(Xu=!0,clearTimeout(oE),tp())}const Bn=()=>iE,aE=n=>"m_"+n;async function Ac(n,e){try{n&&(!Pn.currentUser||Pn.currentUser.uid!==aE(e))&&await jw(Pn,n)}catch(t){console.warn("firebase sign-in:",t&&t.message)}bc()}const rt=async(...n)=>(await Bn(),Yv(...n)),cE=async(...n)=>(await Bn(),Jv(...n)),vs=async(...n)=>(await Bn(),Zv(...n)),Sc=async(...n)=>(await Bn(),ew(...n)),np=async(...n)=>(await Bn(),tw(...n));function Ju(n,e,t){let r=null,s=!1;return Bn().then(()=>{s||(r=nw(n,e,t))}),()=>{s=!0,r&&r()}}function rp(n){const e=sw(n),t=e.commit.bind(e);return e.commit=async()=>(await Bn(),t()),e}function sp(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function lE(){return typeof liff<"u"?Promise.resolve():new Promise((n,e)=>{let t=0;const r=setInterval(()=>{typeof liff<"u"?(clearInterval(r),n()):++t>100&&(clearInterval(r),e(new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้")))},100)})}let ip=()=>{},fo=!1,op=()=>{};const uE="เซสชัน LINE หมดอายุ กดเข้าสู่ระบบใหม่ที่แถบด้านบน";function hE(n){op=n,fo&&n()}function dE(){try{const n=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}liff.login({redirectUri:n})}catch{}}function Ui(){fo=!0,op();const n=new Error(uE);return n.expired=!0,n}const fE=new Promise(n=>{ip=n});let rs="pending";const Ea="dm:v2:webtoken",pE=20*24*60*60*1e3;function po(){try{const n=JSON.parse(localStorage.getItem(Ea)||"null");return n&&typeof n.token=="string"&&n.token?n:null}catch{return null}}function ap(n){try{n?localStorage.setItem(Ea,JSON.stringify({token:n,t:Date.now()})):localStorage.removeItem(Ea)}catch{}}async function mE(){const n=po();if(!(n&&Date.now()-n.t<pE))try{const e=liff.getIDToken();if(!e)return;const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e,kind:"web"})}),r=await t.json().catch(()=>({}));t.ok&&r.success&&r.token&&ap(r.token)}catch{}}const gE="U0d739eea39c312e11c487e22861920d1",_E=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();function Ta(n,e,t){return{name:_E(e.name),memberId:n,pictureUrl:/^https:\/\//i.test(e.pictureUrl||"")?e.pictureUrl:"",isAdmin:e.role==="admin"||t===gE,realName:e.realName||"",promptpay:e.promptpay||""}}const yE=["code","state","liffClientId","liffRedirectUri","error","error_description"],vE=()=>{const n=new URLSearchParams(location.search);return n.has("code")||n.has("liffClientId")};function Yu(){try{const n=new URL(location.href);let e=!1;for(const r of yE)n.searchParams.has(r)&&(n.searchParams.delete(r),e=!0);let t=n.hash;t==="#_=_"&&(t="",e=!0),e&&history.replaceState(null,"",n.pathname+(n.search||"")+t)}catch{}}let mi="";function Zu(){return mi}async function wE(){await lE();const n=vE();try{await liff.init({liffId:Qu})}catch(t){if(mi=`เริ่มระบบ LINE ไม่สำเร็จ: ${t&&t.message||t}`,n)Yu(),await liff.init({liffId:Qu});else throw t}if(Yu(),!liff.isLoggedIn()){rs="out",mi=mi||(n?"ล็อกอินกลับมาแล้วแต่ LINE ไม่ยืนยันบัตร (ลองกดเข้าสู่ระบบใหม่อีกครั้ง)":"บัตรล็อกอิน LINE ในเบราว์เซอร์นี้หมดอายุหรือยังไม่มี");const t=lp();if(t&&po()&&!n){try{const s=await cE(st(ae,"members",String(t.memberId)));if(s.exists())return Ta(s.id,s.data(),s.data().lineUserId||"")}catch{}return t}if(t&&!n)return fo=!0,{needLogin:!0};const r=location.origin+location.pathname;try{sessionStorage.setItem("dept_auth_hash",location.hash||"#home")}catch{}return liff.login({redirectUri:r}),null}rs="in",ip(),mE();try{const t=sessionStorage.getItem("dept_auth_hash");t&&(sessionStorage.removeItem("dept_auth_hash"),(!location.hash||location.hash==="#"||location.hash==="#_=_")&&(location.hash=t))}catch{}const e=await cp({action:"login"});if(e.member)return await Ac(e.firebaseToken,e.member.id),Ta(e.member.id,e.member,e.member.lineUserId);if(e.needLink)return{needLink:!0,profile:e.profile||{},candidates:e.candidates||[],suggest:e.suggest||""};throw new Error(e.message||"เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง")}async function cp(n){const e=liff.getIDToken();if(!e)throw new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองรีเฟรชหน้านี้");const t=await fetch("/api/device-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,idToken:e})}),r=await t.json().catch(()=>({}));return!t.ok&&!r.message&&(r.message=`เข้าสู่ระบบไม่สำเร็จ (${t.status})`),r}async function HT(n,e){const t=await cp({action:"link",memberId:e});if(!t.member)throw new Error(t.message||"ผูกบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง");return ws(),await Ac(t.firebaseToken,t.member.id),Ta(t.member.id,t.member,t.member.lineUserId)}const Rc=24*60*60*1e3,mo=10*60*1e3,mn="dm:v2:";function wt(n,e){try{const t=localStorage.getItem(mn+n);if(!t)return null;const{t:r,v:s}=JSON.parse(t);return Date.now()-r<e?s:null}catch{return null}}function Et(n,e){try{localStorage.setItem(mn+n,JSON.stringify({t:Date.now(),v:e}))}catch{}}const EE=30*24*60*60*1e3,TE=7*24*60*60*1e3;function lp(){const n=wt("user",EE);return n&&n.name&&n.memberId?n:null}function IE(n){n&&n.name&&n.memberId&&Et("user",n)}function bE(n,e){const t=wt(`snap:${n}:${e}`,TE);return t&&Array.isArray(t.transactions)&&Array.isArray(t.settlements)&&Array.isArray(t.wallet)?t:null}function AE(n,e,t){Et(`snap:${n}:${e}`,{transactions:t.transactions,settlements:t.settlements,wallet:t.wallet})}function SE(){return wt("members",1/0)}function Ia(){try{Object.keys(localStorage).filter(n=>n.startsWith(mn)).forEach(n=>localStorage.removeItem(n))}catch{}}const up=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();async function RE(){const n=wt("members",mo);if(n)return n;const e=await rt(ke(ae,"members")),t=[...new Set(e.docs.map(r=>up(r.data().name)).filter(Boolean))];return Et("members",t),t}async function kE(n){const e=wt("m:"+n,Rc);if(e)return e;const[t,r]=await Promise.all([rt(nt(ke(ae,"transactions"),We("date",">=",`${n}-01`),We("date","<=",`${n}-31`))),rt(nt(ke(ae,"settlements"),We("month","==",n)))]),s={transactions:t.docs.map(i=>({id:i.id,...i.data()})),settlements:r.docs.map(i=>({id:i.id,...i.data()}))};return Et("m:"+n,s),s}function PE(n,e){const t={transactions:null,settlements:null},r=()=>{t.transactions&&t.settlements&&e({...t})},s=a=>e({error:a}),i=[Ju(nt(ke(ae,"transactions"),We("date",">=",`${n}-01`),We("date","<=",`${n}-31`)),a=>{t.transactions=a.docs.map(c=>({id:c.id,...c.data()})),r()},s),Ju(nt(ke(ae,"settlements"),We("month","==",n)),a=>{t.settlements=a.docs.map(c=>({id:c.id,...c.data()})),r()},s)];return()=>i.forEach(a=>a())}async function je(n,e,{line:t=!1}={}){const r=t?null:po();if(r){const c=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r.token},body:JSON.stringify(e)});let l={};try{l=await c.json()}catch{}if(c.status!==401){if(!c.ok)throw new Error(l.message||`เกิดข้อผิดพลาด (${c.status})`);return l}ap("")}if(fo||rs==="out")throw Ui();await Promise.race([fE,new Promise((c,l)=>setTimeout(()=>l(new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองใหม่อีกครั้ง")),2e4))]);const s=liff.getIDToken(),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,idToken:s})});let a={};try{a=await i.json()}catch{}if(i.status===401)throw Ui();if(!i.ok)throw new Error(a.message||`เกิดข้อผิดพลาด (${i.status})`);return a}async function CE(n,{current:e=!1}={}){if(!e){const s=wt("w:"+n,Rc);if(s)return s}const t=await je("/api/shortcut-transaction",{action:"wallet-list",month:n}),r=Array.isArray(t.items)?t.items:[];return e||Et("w:"+n,r),r}async function NE(n,e){const t={},r=[];for(const c of n){if(c===e)continue;const l=wt("w:"+c,Rc);l?t[c]=l:r.push(c)}if(r.length===0)return t[e]=await CE(e,{current:!0}),t;const s=r.slice().sort()[0],i=await je("/api/shortcut-transaction",{action:"wallet-list",since:s}),a=Array.isArray(i.items)?i.items:[];t[e]=a.filter(c=>String(c.date||"").startsWith(e));for(const c of r){const l=a.filter(h=>String(h.date||"").startsWith(c));t[c]=l,Et("w:"+c,l)}return t}async function GT(){const n=await je("/api/device-token",{},{line:!0});if(!n.success||!n.token)throw new Error(n.message||"สร้างรหัสไม่สำเร็จ");return n}async function KT(){if(rs!=="in")throw Ui();const n=await fetch("/api/device-token",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:liff.getIDToken()})});let e={};try{e=await n.json()}catch{}if(!n.ok||!e.success)throw new Error(e.message||"ยกเลิกรหัสไม่สำเร็จ");return e}async function QT(n,e){await je("/api/shortcut-transaction",{action:"wallet-update",id:n,...e})}async function XT(n){let e=0;for(let t=0;t<n.length;t+=100){const r=await je("/api/shortcut-transaction",{action:"wallet-update",items:n.slice(t,t+100)});e+=Number(r.updated)||0}return e}async function DE(){const n=await je("/api/shortcut-transaction",{action:"wallet-template-list"});return Array.isArray(n.items)?n.items:[]}async function JT(n,e){await je("/api/shortcut-transaction",{action:"wallet-template-update",id:n,...e}),Es()}async function YT(n){await je("/api/shortcut-transaction",{action:"wallet-template-stop",id:n}),Es()}const hp=n=>n&&n.plan&&typeof n.plan=="object"?n.plan:{budget:{total:0,cats:{}},months:{},goals:[]};async function ME(){const n=wt("plan",mo);if(n)return n;const e=hp(await je("/api/shortcut-transaction",{action:"plan-get"}));return Et("plan",e),e}const go=async n=>{const e=hp(await je("/api/shortcut-transaction",n));return Et("plan",e),e},VE=({scope:n,month:e,total:t,cats:r,clear:s=!1})=>go({action:"plan-budget-set",scope:n,month:e,total:t,cats:r,clear:s}),OE=n=>go({action:"goal-save",...n}),LE=(n,e,t)=>go({action:"goal-move",id:n,amount:e,dir:t}),xE=n=>go({action:"goal-delete",id:n});async function FE(n){return n&&n.recurring&&Es(),je("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}async function UE(){const n=wt("profiles",mo);if(n)return n;const e=await rt(ke(ae,"members")),t=new Map;e.docs.forEach(s=>{const i=s.data(),a=up(i.name);if(!a)return;const c={id:s.id,name:a,promptpay:i.promptpay||"",realName:i.realName||"",englishName:i.englishName||"",hasLine:!!i.lineUserId,pictureUrl:/^https?:\/\//i.test(i.pictureUrl||"")?i.pictureUrl:"",role:i.role==="admin"?"admin":"member"},l=t.get(a);(!l||!l.hasLine&&c.hasLine||!l.promptpay&&c.promptpay||!l.pictureUrl&&c.pictureUrl)&&t.set(a,c)});const r=[...t.values()];return Et("profiles",r),r}function dp(n){try{localStorage.removeItem(mn+"m:"+n),localStorage.removeItem(mn+"w:"+n)}catch{}}function ws(){try{localStorage.removeItem(mn+"profiles"),localStorage.removeItem(mn+"members")}catch{}}async function eh(n){return je("/api/shortcut-transaction",{action:"wallet-delete",id:n})}async function ZT(n){let e=0;for(let t=0;t<n.length;t+=50){const r=await je("/api/shortcut-transaction",{action:"wallet-confirm",ids:n.slice(t,t+50)});e+=Number(r.confirmed)||0}return e}async function BE(n){return(await je("/api/shortcut-transaction",{action:"wallet-get",id:n})).item||null}async function eI(n){let e=0,t=0;for(let r=0;r<n.length;r+=50){const s=await je("/api/shortcut-transaction",{action:"wallet-delete-many",ids:n.slice(r,r+50)});e+=Number(s.deleted)||0,t+=Array.isArray(s.failed)?s.failed.length:0}return{deleted:e,failed:t}}async function $E(){return(await rt(nt(ke(ae,"subscription_templates"),We("active","==",!0)))).docs.map(e=>({id:e.id,...e.data()}))}async function jE(){const n=wt("billsched",mo);if(n)return n;const[e,t]=await Promise.all([$E(),DE().catch(()=>[])]),r={group:e.map(s=>({id:s.id,desc:s.desc,amount:s.amount,billingDay:s.billingDay,payer:s.payer,splits:s.splits,icon:s.icon,active:s.active})),personal:t.map(s=>({id:s.id,desc:s.desc,amount:s.amount,billingDay:s.billingDay,icon:s.icon}))};return Et("billsched",r),r}function Es(){try{localStorage.removeItem(mn+"billsched")}catch{}}async function tI(n){await vs(st(ae,"subscription_templates",String(n)),{active:!1,stoppedAt:new Date}),Es()}async function qE(n,e){const t={};typeof e.desc=="string"&&(t.desc=e.desc),typeof e.icon=="string"&&(t.icon=e.icon),await vs(st(ae,"transactions",String(n)),t)}async function nI(n){await np(ke(ae,"members"),{name:n,createdAt:new Date().toISOString(),quickAdded:!0,role:"member"}),ws()}async function rI(n,e){const t={realName:String(e.realName||""),promptpay:String(e.promptpay||""),role:e.role==="admin"?"admin":"member",realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date};await vs(st(ae,"members",String(n)),t),ws()}async function sI(n){const e=n.name;if((await Promise.all([rt(nt(ke(ae,"transactions"),We("payer","==",e),Js(1))),rt(nt(ke(ae,"transactions"),We(new pr("splits",e),">=",0),Js(1))),rt(nt(ke(ae,"settlements"),We("from","==",e),Js(1))),rt(nt(ke(ae,"settlements"),We("to","==",e),Js(1)))])).some(r=>!r.empty))throw new Error(`ลบ ${e} ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน (ถ้าลบ ยอดหนี้ของคนอื่นจะคำนวณผิด)`);await Sc(st(ae,"members",String(n.id))),ws()}async function iI({from:n,to:e,amount:t,month:r,adminName:s}){await np(ke(ae,"settlements"),{status:"verified",month:r,from:n,to:e,amount:Number(t),transactionIds:[],createdAt:new Date().toISOString(),verifiedByAdmin:!0,adminId:s||"unknown"})}async function oI(n,e){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(e))throw new Error("เดือนไม่ถูกต้อง");await vs(st(ae,"settlements",String(n)),{month:e})}async function aI(n){await Sc(st(ae,"settlements",String(n)))}async function cI(){return(await je("/api/shortcut-transaction",{action:"remind-all"})).message||"สั่งเตือนแล้ว"}async function lI(n){if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(n))throw new Error("เดือนไม่ถูกต้อง");const e=await rt(nt(ke(ae,"transactions"),We("date",">=",`${n}-01`),We("date","<=",`${n}-31`))),t=new Map;e.docs.forEach(a=>t.set(a.id,a.ref));const r=[...new Set(e.docs.map(a=>a.data().groupId).filter(Boolean))];for(const a of r)(await rt(nt(ke(ae,"transactions"),We("groupId","==",a)))).docs.forEach(l=>t.set(l.id,l.ref));const s=await rt(nt(ke(ae,"settlements"),We("month","==",n))),i=[...t.values(),...s.docs.map(a=>a.ref)];for(let a=0;a<i.length;a+=400){const c=rp(ae);i.slice(a,a+400).forEach(l=>c.delete(l)),await c.commit()}return dp(n),{bills:t.size,settlements:s.docs.length}}async function zE(n){await Sc(st(ae,"transactions",String(n)))}async function uI(n,e){for(let t=0;t<n.length;t+=10)await Promise.all(n.slice(t,t+10).map(r=>qE(r,{icon:e})));return n.length}async function hI(n){for(let e=0;e<n.length;e+=10)await Promise.all(n.slice(e,e+10).map(t=>zE(t)));return n.length}async function dI(n,e){await vs(st(ae,"members",String(n)),{...e,realNameUpdatedAt:new Date,promptpayUpdatedAt:new Date}),ws()}async function fI(n,{to:e,amount:t,month:r}){const s=await new Promise((l,h)=>{const f=new FileReader;f.onload=()=>l(String(f.result).split(",")[1]),f.onerror=()=>h(new Error("อ่านไฟล์รูปไม่สำเร็จ")),f.readAsDataURL(n)});if(rs!=="in")throw Ui();const i=liff.getIDToken(),a=await fetch("/api/verify-settlement-slip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:i,to:e,amount:t,month:r,base64Image:s})});let c={};try{c=await a.json()}catch{}return{ok:a.ok&&c.success===!0,json:c,status:a.status}}function pI(){try{liff.logout()}catch{}try{Ww(Pn)}catch{}Ia(),location.href="/"}async function th({docs:n,template:e}){const t=rp(ae);n.forEach(r=>t.set(st(ke(ae,"transactions")),r)),e&&t.set(st(ke(ae,"subscription_templates")),e),await t.commit(),e&&Es()}(async()=>{try{if(typeof Pn.authStateReady=="function"&&await Pn.authStateReady(),Pn.currentUser)return bc();const n=po();if(!n)return;const e=await fetch("/api/device-token?firebase=1",{headers:{Authorization:"Bearer "+n.token}}),t=await e.json().catch(()=>({}));e.ok&&t.success&&t.member&&await Ac(t.firebaseToken,t.member.id)}catch(n){console.warn("firebase pass:",n&&n.message)}})();const nh=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},rh=60;function WE(n,e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));if(!t)throw new Error("รูปแบบวันที่ไม่ถูกต้อง");const r=Number(t[1]),s=Number(t[2])-1,i=Number(t[3]),a=r*12+s+Number(e),c=Math.floor(a/12),l=a-c*12,h=new Date(Date.UTC(c,l+1,0)).getUTCDate(),f=Math.min(i,h);return`${String(c).padStart(4,"0")}-${String(l+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`}function HE({amount:n,installments:e,splits:t,date:r}){const s=Number(e);if(!Number.isInteger(s)||s<1||s>rh)throw new Error(`จำนวนงวดต้องเป็นเลข 1–${rh}`);const i=Object.keys(t||{});if(i.length===0)throw new Error("ไม่มีผู้ร่วมจ่าย");const a=nh(n);if(a<=0)throw new Error("ยอดเงินไม่ถูกต้อง");const c=i.map(f=>[f,nh(t[f])]),l=a-c.reduce((f,[,_])=>f+_,0);if(l!==0){let f=0;c.forEach(([,_],m)=>{_>c[f][1]&&(f=m)}),c[f][1]+=l}const h=[];for(let f=0;f<s;f++){const _={};let m=0;for(const[w,R]of c){const P=Math.floor(R/s),N=f<R-P*s?1:0;_[w]=(P+N)/100,m+=P+N}h.push({index:f+1,date:WE(r,f),amount:m/100,splits:_})}return h}const GE=[["trip",["เที่ยว","โรงแรม","ที่พักรีสอร์ท","เครื่องบิน","ตั๋วเครื่องบิน","airbnb","agoda","ทริป"]],["rent",["ค่าเช่า","ค่าห้อง","ค่าหอ","คอนโด","ค่าส่วนกลาง"]],["drink",["กาแฟ","ชานม","ชาไข่มุก","คาเฟ่","เครื่องดื่ม","น้ำผลไม้","เหล้า","เบียร์","ไวน์","ปาร์ตี้","starbucks","amazon"]],["pet",["แมว","หมา","สุนัข","สัตว์"]],["food",["ข้าว","กิน","อาหาร","ก๋วยเตี๋ยว","ขนม","หมูกระทะ","ชาบู","บุฟเฟ","ส้มตำ","ไก่","หมู","เนื้อ","ปิ้งย่าง","ผัด","ต้ม","แกง","ส้ม","ไอติม","เค้ก","grab food","lineman","line man","foodpanda"]],["bills",["ค่าไฟ","ค่าน้ำ","ค่าเน็ต","อินเทอร์เน็ต","เน็ต","โทรศัพท์","ค่าโทร","netflix","spotify","youtube","disney","subscription","ค่าบริการ","claude","chatgpt","openai","icloud","adobe","canva","hbo","prime video","google one","ค่ามือถือ","ค่าเช่ารายเดือน","dtac","true","ais","3bb","google cloud"]],["travel",["รถ","น้ำมัน","แท็กซี่","grab","bolt","bts","mrt","ทางด่วน","ที่จอดรถ","ค่าเดินทาง","รถเมล์","ตั๋วรถ","civic","honda","toyota","mazda","nissan","isuzu","mitsubishi","benz","bmw","ประกันรถ","ภาษีรถ","พ.ร.บ.","ค่างวดรถ","ผ่อนรถ","ล้างรถ","ค่ารถ"]],["fun",["หนัง","โรงหนัง","เกม","steam","คอนเสิร์ต","บัตรคอน","karaoke","คาราโอเกะ","บอร์ดเกม","ดูหนัง"]],["health",["ค่ายา","ซื้อยา","หมอ","โรงพยาบาล","คลินิก","ฟัน","ตรวจสุขภาพ","วิตามิน","ฟิตเนส","ยิม"]],["gift",["ของขวัญ","วันเกิด","ซองงาน","ทำบุญ","ดอกไม้"]],["goods",["ซื้อ","ของใช้","ช้อป","shopee","lazada","7-11","เซเว่น","ซุปเปอร์","โลตัส","บิ๊กซี","tops","makro","แม็คโคร","ที่ปิ้ง","ครีม","สบู่","ยาสระผม","ตัดผม","ซาลอน"]]];function KE(n){const e=String(n||"").toLowerCase();if(!e.trim())return"other";for(const[t,r]of GE)if(r.some(s=>e.includes(s)))return t;return"other"}const QE=[{key:"food",label:"อาหารและเครื่องดื่ม",short:"อาหาร",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",short:"บิล/รายเดือน",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",short:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",short:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"fun",label:"บันเทิง",short:"บันเทิง",icons:["fa-film"]},{key:"other",label:"อื่นๆ",short:"อื่นๆ",icons:[]}],sh=QE.map(n=>n.key),mI=["plane","shield","home","phone","car","gift","heart","star"],gI=["accent","sun","receive","accent2","navy"],XE=80,JE=/^\d{4}-(0[1-9]|1[0-2])$/,Cn=n=>Math.round((Number(n)||0)*100),ih=n=>typeof n=="string"&&JE.test(n),oh=n=>!!(n&&(Number(n.total)>0||Object.values(n.cats||{}).some(e=>Number(e)>0)));function YE(n,e){const t=n||{},r=t.months&&t.months[e];return oh(r)?{total:Number(r.total)||0,cats:{...r.cats||{}},source:"month"}:oh(t.budget)?{total:Number(t.budget.total)||0,cats:{...t.budget.cats||{}},source:"default"}:{total:0,cats:{},source:"none"}}function ah(n,e){return e>0?n>e?"over":n/e*100>=XE?"near":"ok":"none"}const ba=(n,e)=>e>0?Math.round(n/e*100):0;function ZE(n,e){const t=n||{total:0,cats:{},source:"none"},r=Object.fromEntries(sh.map(h=>[h,Cn((t.cats||{})[h])])),s=Object.values(r).reduce((h,f)=>h+f,0),i=Cn(t.total)>0?Cn(t.total):s,a=Math.max(0,Math.round(Number(e&&e.totalSat)||0)),c=e&&e.cats||{},l=sh.filter(h=>r[h]>0).map(h=>{const f=Math.max(0,Math.round(Number(c[h])||0));return{key:h,budgetSat:r[h],spentSat:f,leftSat:r[h]-f,percent:ba(f,r[h]),level:ah(f,r[h])}});return{set:i>0,source:t.source||"none",budgetSat:i,spentSat:a,leftSat:i-a,percent:ba(a,i),level:ah(a,i),cats:l,unassignedSat:Math.max(0,i-s)}}function eT(n,e){if(!ih(n)||!ih(e))return 0;const[t,r]=n.split("-").map(Number),[s,i]=e.split("-").map(Number);return Math.max(0,(s-t)*12+(i-r)+1)}function tT(n,e){return(n&&Array.isArray(n.log)?n.log:[]).filter(t=>String(t.date).startsWith(e)).reduce((t,r)=>t+Cn(r.amount),0)}function fp(n,e){const t=n||{},r=Cn(t.target),s=Cn(t.saved),i=Math.max(0,r-s),a=r>0&&s>=r,c=t.deadline?eT(e,t.deadline):0,l=!!t.deadline&&c===0&&!a;let h=0;return a||(h=t.deadline?c>0?Math.ceil(i/c/100)*100:i:Cn(t.monthly)),{targetSat:r,savedSat:s,remainingSat:i,percent:Math.min(100,ba(s,r)),done:a,monthsLeft:c,late:l,perMonthSat:h,thisMonthSat:tT(t,e)}}function pp(n,e){let t=0,r=0;for(const s of n||[]){const i=fp(s,e);i.done||(t+=i.perMonthSat),r+=i.thisMonthSat}return{planSat:t,doneSat:Math.max(0,r)}}function nT(n,e,t){const r=Math.max(0,Math.round(Number(n)||0)-pp(e,t).planSat);return Math.floor(r/1e4)*1e4}function ce(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function hn(n){const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0}function rT({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const s=new Set(n.map(ce).filter(Boolean)),i={};s.forEach(l=>{i[l]=0});const a=[],c=(l,h,f)=>{const _=ce(l);_&&(s.has(_)?i[_]+=h:a.push({type:"unknown_name",name:_,...f}))};for(const l of e){if(!l||typeof l.date!="string"||!l.date.startsWith(r))continue;const h=l.splits&&typeof l.splits=="object"?Object.entries(l.splits):[];if(h.length===0){a.push({type:"no_splits",id:l.id});continue}const f=hn(l.amount);c(l.payer,f,{id:l.id});let _=0;for(const[m,w]of h){const R=hn(w);_+=R,c(m,-R,{id:l.id})}Math.abs(_-f)>h.length&&a.push({type:"split_mismatch",id:l.id,diffSatang:_-f})}for(const l of t){if(!l||l.status!=="verified"||l.month!==r)continue;const h=hn(l.amount);c(l.from,h,{id:l.id}),c(l.to,-h,{id:l.id})}return{balances:i,warnings:a}}function sT(n,{minSatang:e=100}={}){const t=[],r=[];for(const[l,h]of Object.entries(n))h<=-e?t.push({name:l,amt:-h}):h>=e&&r.push({name:l,amt:h});const s=(l,h)=>h.amt-l.amt||(l.name<h.name?-1:l.name>h.name?1:0);t.sort(s),r.sort(s);const i=[];let a=0,c=0;for(;a<t.length&&c<r.length;){const l=t[a],h=r[c],f=Math.min(l.amt,h.amt);f>=e&&i.push({from:l.name,to:h.name,amountSatang:f,amount:f/100}),l.amt-=f,h.amt-=f,l.amt<e&&a++,h.amt<e&&c++}return i}function mp(n){const e=Number(n)||0;return Math.abs(e)<100?0:Math.round(e/100)}function Bi(n,e){if(!n)return 0;const t=ce(e),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return ce(n.payer)===t?hn(n.amount):0;let s=0;for(const[i,a]of r)ce(i)===t&&(s+=hn(a));return s}function gp(n,e){return n&&ce(n.payer)===ce(e)?hn(n.amount):0}const _p=(n,e)=>typeof n=="string"&&n.startsWith(e);function yp({name:n,transactions:e=[],settlements:t=[],month:r}){const s=ce(n);let i=0,a=0;for(const f of e)!f||!_p(f.date,r)||(i+=gp(f,s),a+=Bi(f,s));let c=0,l=0;for(const f of t){if(!f||f.status!=="verified"||f.month!==r)continue;const _=hn(f.amount);ce(f.from)===s&&(c+=_),ce(f.to)===s&&(l+=_)}const h=i-a+c-l;return{name:s,month:r,paid:i,share:a,sent:c,received:l,balance:h}}function vp({memberNames:n=[],transactions:e=[],settlements:t=[],month:r}){const{balances:s,warnings:i}=rT({memberNames:n,transactions:e,settlements:t,month:r}),a=sT(s),c=Object.keys(s).sort().map(l=>{const h=yp({name:l,transactions:e,settlements:t,month:r}),f=mp(s[l]);return{...h,balance:s[l],displayBalance:f,cleared:f===0}});return{month:r,balances:s,plan:a,warnings:i,members:c}}function kc({name:n,month:e,walletEntries:t=[],transactions:r=[],settlements:s=[]}){const i=ce(n),a=new Set;let c=0,l=0;for(const m of t){if(!m||ce(m.ownerName)!==i||!_p(m.date||m.month,e))continue;const w=m.dedupKey||m.transRef;if(w){if(a.has(w))continue;a.add(w)}const R=hn(m.amount);R<=0||(m.type==="income"?c+=R:m.type==="expense"&&(l+=R))}const h=yp({name:i,transactions:r,settlements:s,month:e}),f=h.share,_=l+f;return{name:i,month:e,income:c,personalExpense:l,groupShare:f,expenseTotal:_,net:c-_,receivedBack:h.received,paidBack:h.sent}}function wp(n){return(n||[]).map(e=>({from:e.from,to:e.to,amount:Math.round(e.amountSatang/100)})).filter(e=>e.amount>=1)}const $i=[{key:"food",label:"อาหารและเครื่องดื่ม",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"fun",label:"บันเทิง",icons:["fa-film"]},{key:"other",label:"อื่นๆ",icons:[]}];function iT(n){const e=$i.find(t=>t.icons.includes(n));return e?e.key:"other"}const ch=n=>String(n||"").slice(0,7);function lh({name:n,month:e,today:t="",members:r,transactions:s,settlements:i,walletItems:a=[]}){const c=ce(n),l=vp({memberNames:r,transactions:s,settlements:i,month:e}),h=kc({name:c,month:e,walletEntries:a.map(v=>({ownerName:c,type:v.type,amount:v.amount,date:v.date})),transactions:s,settlements:i}),f=Object.fromEntries($i.map(v=>[v.key,0])),_={},m={},w=(v,E,de,Oe,Tt)=>{if(!Oe||!String(v).startsWith(e))return;f[iT(de)]+=Oe;const Qe=Number(String(v).slice(8,10));_[Qe]=(_[Qe]||0)+Oe,m[Qe]||(m[Qe]=[]),m[Qe].push({desc:E||"ไม่ระบุ",icon:de,satang:Oe,kind:Tt})};for(const v of s)!v||ch(v.date)!==e||w(v.date,v.desc,v.icon,Bi(v,c),"group");for(const v of a)v.type==="expense"&&w(v.date,v.desc,v.icon,Math.round(Number(v.amount)*100),"personal");const R=Object.values(f).reduce((v,E)=>v+E,0),P=$i.map(v=>({key:v.key,label:v.label,satang:f[v.key],percent:R>0?Math.round(f[v.key]/R*100):0})).filter(v=>v.satang>0).sort((v,E)=>E.satang-v.satang),N=t.startsWith(e)?Number(t.slice(8,10)):lr(e),V=[];for(let v=1;v<=N;v++)V.push({day:v,satang:_[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,items:m[v]||[]});const L=lr(e),$=[];for(let v=1;v<=L;v++)$.push({day:v,date:`${e}-${String(v).padStart(2,"0")}`,satang:_[v]||0,today:t===`${e}-${String(v).padStart(2,"0")}`,isFuture:t.startsWith(e)&&v>Number(t.slice(8,10)),items:m[v]||[]});const K=h.expenseTotal,te=N>0?Math.round(K/N/100):0,J=wp(l.plan),I=J.filter(v=>v.to===c).map(v=>({name:v.from,amount:v.amount})).sort((v,E)=>E.amount-v.amount),y=J.filter(v=>v.from===c).map(v=>({name:v.to,amount:v.amount})).sort((v,E)=>E.amount-v.amount),T=I[0]?I[0].amount:0;I.forEach(v=>{v.share=T?Math.round(v.amount/T*100):0});const b=y[0]?y[0].amount:0;y.forEach(v=>{v.share=b?Math.round(v.amount/b*100):0});const A=[];for(const v of s){if(!v||ch(v.date)!==e)continue;const E=Bi(v,c);(E>0||gp(v,c)>0)&&A.push({id:v.id,kind:"group",desc:v.desc||"",icon:v.icon,satang:E,date:v.date,ts:Number(v.timestamp)||0})}for(const v of a)String(v.date).startsWith(e)&&A.push({id:v.id,kind:v.type==="income"?"income":"personal",desc:v.desc||"",icon:v.icon,satang:Math.round(Number(v.amount)*100),date:v.date,ts:Number(v.timestamp)||0});return A.sort((v,E)=>E.date.localeCompare(v.date)||E.ts-v.ts),{month:e,incomeSat:h.income,spentSat:K,personalSat:h.personalExpense,groupShareSat:h.groupShare,netSat:h.net,net:mp(h.net),spentPercent:h.income>0?Math.min(999,Math.round(K/h.income*100)):null,receivedBackSat:h.receivedBack,categories:P,daily:V,calendarDays:$,average:te,owedToMe:I,owedTotal:I.reduce((v,E)=>v+E.amount,0),iOwe:y,iOweTotal:y.reduce((v,E)=>v+E.amount,0),recent:A.slice(0,5),warnings:l.warnings}}function uh(n,e,t=""){const r=e.month,s={};for(const h of e.categories||[])s[h.key]=h.satang;const i=ZE(YE(n||{},r),{totalSat:e.spentSat,cats:s}),a=(n&&n.goals||[]).map(h=>({...h,s:fp(h,r)})),c=t.startsWith(r),l=c?lr(r)-Number(t.slice(8,10))+1:0;return{month:r,status:i,goals:a,saving:pp(a,r),suggestSat:nT(e.incomeSat,a,r),daysLeft:l,perDaySat:c&&i.leftSat>0&&l>0?Math.floor(i.leftSat/l/100)*100:0}}function oT({me:n,month:e,today:t,group:r=[],personal:s=[]}){const i=ce(n),a=w=>Math.round((Number(w)||0)*100),c=[];for(const w of r){if(!w||w.active===!1)continue;const R=w.splits&&typeof w.splits=="object"?w.splits:{},P=Object.keys(R).find(V=>ce(V)===i),N=ce(w.payer);!P&&N!==i||c.push({id:"g:"+w.id,kind:"group",desc:String(w.desc||"บิลรายเดือน"),icon:w.icon||"",billingDay:Number(w.billingDay)||1,mySat:P?a(R[P]):0,totalSat:a(w.amount),payer:N,people:Object.keys(R).length,coverFor:!P})}for(const w of s)!w||w.active===!1||c.push({id:"p:"+w.id,kind:"personal",desc:String(w.desc||"รายจ่ายรายเดือน"),icon:w.icon||"",billingDay:Number(w.billingDay)||1,mySat:a(w.amount),totalSat:a(w.amount),payer:i,people:1,coverFor:!1});const l=(w,R)=>Math.min(Math.max(1,Math.round(R)||1),lr(w)),h=(w,R)=>{const P=`${R}-${String(l(R,w.billingDay)).padStart(2,"0")}`,N=Math.round((Date.parse(P+"T00:00:00Z")-Date.parse(t+"T00:00:00Z"))/864e5);return{...w,date:P,day:Number(P.slice(8,10)),daysLeft:N,status:N<0?"done":N===0?"today":"soon"}},f=c.map(w=>h(w,e)).sort((w,R)=>w.day-R.day||w.desc.localeCompare(R.desc)),_=t.slice(0,7),m=[_,ut(_,1),ut(_,2)].flatMap(w=>c.map(R=>h(R,w))).filter(w=>w.daysLeft>=0).sort((w,R)=>w.daysLeft-R.daysLeft||R.mySat-w.mySat);return{month:e,items:f,totalSat:f.reduce((w,R)=>w+R.mySat,0),dueSat:f.filter(w=>w.daysLeft>=0).reduce((w,R)=>w+R.mySat,0),upcoming:m}}function aT(n,e){if(n.kind==="personal")return"ส่วนตัว";const t=n.payer===ce(e);return n.coverFor?"คุณจ่ายแทน":t?`คุณจ่าย หาร ${n.people}`:`${n.payer} จ่าย หาร ${n.people}`}function lr(n){const[e,t]=n.split("-").map(Number);return new Date(Date.UTC(e,t,0)).getUTCDate()}function ut(n,e){const[t,r]=n.split("-").map(Number),s=t*12+(r-1)+e,i=Math.floor(s/12);return`${i}-${String(s-i*12+1).padStart(2,"0")}`}const Ts=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],cT=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];function Ep(n){const[e,t]=n.split("-").map(Number);return`${Ts[t-1]} ${e+543}`}function Pc(n){const[e,t]=n.split("-").map(Number);return`${cT[t-1]} ${e+543}`}function Z(n,{decimals:e=0,sign:t=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return`${r<0?"-":t&&r>0?"+":""}฿${s}`}function lT({name:n,months:e,transactions:t,settlements:r,walletItems:s=[]}){const i=ce(n),a=s.map(c=>({ownerName:i,type:c.type,amount:c.amount,date:c.date}));return e.map(c=>{const l=kc({name:i,month:c,walletEntries:a,transactions:t,settlements:r});return{month:c,spentSat:l.expenseTotal,incomeSat:l.income}})}function hh(n,e){return Array.from({length:e},(t,r)=>ut(n,r-(e-1)))}function ss(n){return Ts[Number(n.slice(5,7))-1]}function _I(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10?e.slice(0,6)+"XXXX":e.length===13?"X-XXXX-XXXXX-"+e.slice(11,13)+"-X":e}function Tp(n){const e=String(n||"").replace(/[^0-9]/g,"");return e.length===10||e.length===13?e:""}function yI(n,e){const t=Tp(n);return!t||!(Number(e)>0)?"":`https://promptpay.io/${t}/${Number(e).toFixed(2)}`}function uT({name:n,month:e,members:t,transactions:r,settlements:s}){const i=ce(n),a=vp({memberNames:t,transactions:r,settlements:s,month:e}),c=wp(a.plan).map(f=>({from:f.from,to:f.to,amount:f.amount,role:f.from===i?"pay":f.to===i?"receive":"other"})),l={pay:0,receive:1,other:2};c.sort((f,_)=>l[f.role]-l[_.role]||_.amount-f.amount);const h=(s||[]).filter(f=>f&&f.status==="verified"&&f.month===e).map(f=>({id:f.id,from:f.from,to:f.to,amount:Number(f.amount)||0,manual:!!f.verifiedByAdmin,createdAt:f.createdAt||""})).sort((f,_)=>String(_.createdAt).localeCompare(String(f.createdAt)));return{lines:c,history:h,mineToPay:c.filter(f=>f.role==="pay"),mineToReceive:c.filter(f=>f.role==="receive"),cleared:c.length===0}}function hT({name:n,month:e,walletItems:t,transactions:r,settlements:s}){const i=ce(n),a=kc({name:i,month:e,walletEntries:t.map(l=>({ownerName:i,type:l.type,amount:l.amount,date:l.date})),transactions:r,settlements:s}),c=t.filter(l=>String(l.date).startsWith(e)).sort((l,h)=>h.date.localeCompare(l.date)||(Number(h.timestamp)||0)-(Number(l.timestamp)||0)).map(l=>({id:l.id,type:l.type==="income"?"income":"expense",desc:l.desc||"",amount:Number(l.amount)||0,date:l.date,icon:l.icon||"",card:l.card||"",unconfirmed:l.unconfirmed===!0,recurring:l.recurring===!0||String(l.id||"").startsWith("wsub_"),ts:Number(l.timestamp)||0}));return{incomeSat:a.income,personalSat:a.personalExpense,groupShareSat:a.groupShare,spentSat:a.expenseTotal,netSat:a.net,receivedBackSat:a.receivedBack,paidBackSat:a.paidBack,items:c}}function dT({name:n,month:e,transactions:t,search:r=""}){const s=ce(n),i=String(r||"").trim().toUpperCase(),a=t.filter(l=>l&&String(l.date||"").startsWith(e)).map(l=>({id:l.id,desc:l.desc||"",date:l.date,icon:l.icon||"",payer:l.payer||"",amountSat:fT(l.amount),myShareSat:Bi(l,s),iPaid:ce(l.payer)===s,people:Object.keys(l.splits||{}),type:l.paymentType||"normal",ts:Number(l.timestamp)||0})).filter(l=>!i||l.desc.toUpperCase().includes(i)||ce(l.payer).includes(i)).sort((l,h)=>h.date.localeCompare(l.date)||h.ts-l.ts),c=a.filter(l=>l.myShareSat>0||l.iPaid);return{all:a,mine:c,totalSat:a.reduce((l,h)=>l+h.amountSat,0),myShareSat:c.reduce((l,h)=>l+h.myShareSat,0)}}const fT=n=>{const e=Number(n);return Number.isFinite(e)?Math.round(e*100):0},vI=[{key:"food",label:"อาหาร",fa:"fa-utensils",icon:"food"},{key:"drink",label:"เครื่องดื่ม",fa:"fa-mug-hot",icon:"coffee"},{key:"goods",label:"ของใช้",fa:"fa-cart-shopping",icon:"bag"},{key:"travel",label:"เดินทาง",fa:"fa-car",icon:"car"},{key:"bills",label:"บิล",fa:"fa-bolt",icon:"bolt"},{key:"rent",label:"ที่พัก",fa:"fa-house",icon:"key"},{key:"fun",label:"บันเทิง",fa:"fa-film",icon:"film"},{key:"health",label:"สุขภาพ",fa:"fa-pills",icon:"pill"},{key:"trip",label:"เที่ยว",fa:"fa-plane",icon:"plane"},{key:"gift",label:"ของขวัญ",fa:"fa-gift",icon:"gift"},{key:"pet",label:"สัตว์เลี้ยง",fa:"fa-paw",icon:"paw"},{key:"other",label:"อื่นๆ",fa:"fa-money-bill",icon:"dots"}],wI=KE;function pT({me:n,members:e,transactions:t,limit:r=6}){const s=ce(n),i=new Set((e||[]).map(ce)),a=new Map;for(const c of t||[]){const l=new Set(Object.keys(c&&c.splits||{}).map(ce));l.add(ce(c&&c.payer)),l.has(s)&&l.forEach(h=>{h&&h!==s&&i.has(h)&&a.set(h,(a.get(h)||0)+1)})}return[...a.entries()].sort((c,l)=>l[1]-c[1]||(c[0]<l[0]?-1:1)).slice(0,r).map(([c])=>c)}function mT(n,e){const t=Math.round(Number(n)*100),r=e.length,s=Math.floor(t/r),i=t-s*r;return Object.fromEntries(e.map((a,c)=>[a,(s+(c<i?1:0))/100]))}function EI(n){const e=Math.round(Number(n.amount)*100)/100;if(!Number.isFinite(e)||e<=0)return{ok:!1,error:"ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"};if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date||""))return{ok:!1,error:"เลือกวันที่ให้ถูกต้อง"};if(n.today&&n.date>n.today)return{ok:!1,error:"เลือกวันที่ไม่เกินวันนี้"};const t=ce(n.payer);if(!t)return{ok:!1,error:"เลือกคนจ่าย"};const r=[...new Set((n.participants||[]).map(ce).filter(Boolean))];if(r.length===0)return{ok:!1,error:"เลือกคนหารอย่างน้อย 1 คน"};if(r.length===1&&r[0]===t)return{ok:!1,error:"บิลที่มีแต่ตัวเองคนเดียวไม่ต้องหาร ให้ใช้รายจ่ายส่วนตัวแทน"};let s;if(n.mode==="custom"){s={};let h=0;for(const _ of r){const m=Math.round(Number((n.custom||{})[_])*100);if(!Number.isFinite(m)||m<=0)return{ok:!1,error:`ใส่ยอดของ ${_} ให้มากกว่า 0 (หรือเอาออกจากคนหาร)`};s[_]=m/100,h+=m}const f=Math.round(e*100)-h;if(f!==0)return{ok:!1,error:`ยอดที่แบ่งรวมกัน ${Z(h/100,{decimals:2})} ไม่เท่ายอดบิล ${Z(e,{decimals:2})} (${f>0?"ขาด":"เกิน"} ${Z(Math.abs(f)/100,{decimals:2})})`}}else{const h=r.includes(t)?[...r.filter(f=>f!==t),t]:r;s=mT(e,h)}const i=String(n.desc||"").trim().slice(0,100)||"ไม่ระบุ",a=n.icon||"fa-money-bill",c=n.now||Date.now(),l={payer:t,icon:a};if(n.type==="installment"){const h=Number(n.installments);let f;try{f=HE({amount:e,installments:h,splits:s,date:n.date})}catch(m){return{ok:!1,error:m.message}}const _=`grp_${c}`;return{ok:!0,docs:f.map((m,w)=>({...l,date:m.date,desc:`${i} (${m.index}/${h})`,amount:m.amount,splits:m.splits,paymentType:"installment",groupId:_,timestamp:c+w})),template:null,summary:`ผ่อน ${h} งวด งวดละประมาณ ${Z(e/h,{decimals:2})}`}}if(n.type==="subscription"){const h=`sub_${c}`,f=n.recurring!==!1,_={...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"subscription",subscriptionRecurring:f,subscriptionStartDate:n.date,groupId:h,timestamp:c},m=f?{desc:i,amount:e,payer:t,splits:s,icon:a,billingDay:Number(n.date.slice(8,10))||1,groupId:h,active:!0,createdAt:new Date(c),createdBy:t,lastGeneratedMonth:n.date.slice(0,7)}:null;return{ok:!0,docs:[_],template:m,summary:f?"สร้างซ้ำทุกเดือนอัตโนมัติ":"ครั้งเดียว"}}return{ok:!0,docs:[{...l,date:n.date,desc:i,amount:e,splits:s,paymentType:"normal",timestamp:c}],template:null,summary:r.includes(t)?`หารกับเพื่อน ${r.length} คน (รวมผู้จ่าย)`:`จ่ายแทน ${r.length} คน (ไม่มีส่วนของผู้จ่าย)`}}const Zs=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"list",label:"รายการ",icon:"list"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"me",label:"ฉัน",icon:"user"}],gT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"];function Ip({month:n,today:e}){if(!n)return null;const t=e&&e.startsWith(n),r=t?Number(e.slice(8,10)):lr(n),[s,i]=n.split("-").map(Number),a=t?gT[new Date(Date.UTC(s,i-1,r)).getUTCDay()]:"ทั้งเดือน";return d("span",{class:"dtile","aria-hidden":"true",children:[d("span",{class:"m",children:ss(n)}),d("span",{class:"d num",children:r}),d("span",{class:"w",children:a})]})}const dh=["home","list","clear","me"];function _T({page:n,children:e}){const t=Vh(n),r=t.current;ye(()=>{t.current=n},[n]);const s=r===n?"":dh.indexOf(n)>dh.indexOf(r)?"dir-r":"dir-l";return d("div",{class:`page-swap ${s}`.trim(),children:e},n)}function yT({month:n,onChange:e,min:t,max:r}){return d("div",{class:"month-wrap",children:[n!==r&&d("button",{type:"button",class:"btn sm ghost",onClick:()=>e(r),children:"เดือนนี้"}),d("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[d("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=t,onClick:()=>e(ut(n,-1)),children:d(X,{name:"left",size:16})}),d("span",{class:"num","aria-live":"polite",children:Ep(n)}),d("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>e(ut(n,1)),children:d(X,{name:"right",size:16})})]})]})}function bp({icon:n,title:e,note:t}){return d("div",{class:"sec-t",children:[d("span",{class:"ico",children:d(X,{name:n})}),d("div",{children:[d("h2",{children:e}),t&&d("p",{children:t})]})]})}function vT(n){let e=0;for(const t of String(n||""))e=(e*31+t.codePointAt(0))%997;return e%5}function fh({names:n=[],pictures:e={},max:t=3,size:r="sm"}){const s=n.slice(0,t);return d("span",{class:"avstack","aria-hidden":"true",children:[s.map(i=>d(Ap,{name:i,pictureUrl:e[i],size:r},i)),n.length>t&&d("span",{class:"avstack-more num",children:["+",n.length-t]})]})}function Ap({name:n,pictureUrl:e,size:t=""}){const[r,s]=se(!1),i=[...String(n||"?")][0],a=`av tint${vT(n)} ${t}`.trim();return e&&!r?d("img",{src:e,alt:n?`รูปของ ${n}`:"",class:a,onError:()=>s(!0),loading:"lazy"}):d("div",{class:a,"aria-hidden":"true",children:i})}function wT(){const[n,e]=se(()=>{if(typeof document>"u")return"light";const s=localStorage.getItem("dm:theme");return s==="dark"||s==="light"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),t=()=>{const s=n==="dark"?"light":"dark";e(s),document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("dm:theme",s)}catch{}},r=n==="dark";return d("button",{type:"button",class:"theme-toggle","aria-label":r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",title:r?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด",onClick:t,children:d(X,{name:r?"sun":"moon",size:18})})}function TI({label:n,value:e,options:t,onChange:r,icon:s="calendar",title:i,id:a}){const[c,l]=se(!1),h=(t||[]).find(f=>f.value===e)||t&&t[0]||{};return d("div",{class:"field",children:[n&&d("label",{for:a,children:n}),d("button",{type:"button",id:a,class:"c-select-trigger",onClick:()=>l(!0),"aria-haspopup":"dialog",children:[s&&d("span",{class:"ico sm",children:d(X,{name:s,size:16})}),d("span",{class:"c-select-val num",children:h.label||e}),d(X,{name:"down",size:16,class:"mute"})]}),c&&d(Sp,{title:i||n||"เลือกรายการ",onClose:()=>l(!1),children:d("div",{class:"c-select-list",children:(t||[]).map(f=>{const _=f.value===e;return d("button",{type:"button",class:`c-select-item ${_?"on":""}`,onClick:()=>{r(f.value),l(!1)},children:[d("span",{class:"c-select-item-text num",children:f.label}),_&&d(X,{name:"check",size:18,class:"rcv"})]},f.value)})})})]})}function ET({value:n,max:e,today:t,onSelect:r,onClose:s}){const[i,a]=se(()=>(n||t).slice(0,7)),[c,l]=se(n||t),[h,f]=i.split("-").map(Number),_=lr(i),m=new Date(Date.UTC(h,f-1,1)).getUTCDay(),w=[];for(let P=0;P<m;P++)w.push(null);for(let P=1;P<=_;P++)w.push(`${i}-${String(P).padStart(2,"0")}`);const R=["อา","จ","อ","พ","พฤ","ศ","ส"];return d(Sp,{title:"ปฏิทิน",onClose:s,children:d("div",{class:"cal-box",children:[d("div",{class:"cal-hd",children:[d("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",onClick:()=>a(ut(i,-1)),children:d(X,{name:"left",size:16})}),d("span",{class:"cal-month-title num",children:Pc(i)}),d("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e&&ut(i,1).slice(0,7)>e.slice(0,7),onClick:()=>a(ut(i,1)),children:d(X,{name:"right",size:16})})]}),d("div",{class:"cal-grid",role:"grid",children:[d("div",{class:"cal-dow-row",role:"row",children:R.map(P=>d("span",{class:"cal-dow",role:"columnheader",children:P},P))}),d("div",{class:"cal-days-grid",children:w.map((P,N)=>{if(!P)return d("span",{class:"cal-day empty"},`empty-${N}`);const V=Number(P.slice(8,10)),L=P===t,$=P===c,K=e&&P>e;return d("button",{type:"button",class:`cal-day-btn num ${$?"on":""} ${L?"today":""}`,disabled:K,onClick:()=>l(P),children:V},P)})})]}),d("div",{class:"cal-actions",children:[d("button",{type:"button",class:"btn ghost",onClick:()=>{l(t),a(t.slice(0,7))},children:"วันนี้"}),d("button",{type:"button",class:"btn",onClick:()=>r(c),children:["ยืนยัน (",Number(c.slice(8,10))," ",Ts[Number(c.slice(5,7))-1],")"]})]})]})})}function II({id:n,label:e="วันที่",value:t,onChange:r,max:s,today:i}){const[a,c]=se(!1),[l,h,f]=i.split("-").map(Number),_=new Date(Date.UTC(l,h-1,f-1)),m=`${_.getUTCFullYear()}-${String(_.getUTCMonth()+1).padStart(2,"0")}-${String(_.getUTCDate()).padStart(2,"0")}`,w=t===i,R=t===m,[P,N,V]=(t||i).split("-").map(Number),L=P+543,$=Ts[N-1]||"",K=w?`วันนี้ · ${V} ${$} ${L}`:R?`เมื่อวาน · ${V} ${$} ${L}`:`${V} ${$} ${L}`;return d("div",{class:"field",children:[d("span",{class:"fl",id:`${n}-l`,children:e}),d("div",{class:"date-pick-wrap",children:[d("button",{type:"button",id:n,class:"date-trigger","aria-labelledby":`${n}-l`,onClick:()=>c(!0),children:[d("span",{class:"ico sm",children:d(X,{name:"calendar",size:16})}),d("span",{class:"date-trigger-text num",children:K}),d("span",{class:"date-trigger-tag",children:"ปฏิทิน"})]}),d("div",{class:"date-quick-chips",children:[d("button",{type:"button",class:`date-quick-btn ${w?"on":""}`,onClick:()=>r(i),children:"วันนี้"}),d("button",{type:"button",class:`date-quick-btn ${R?"on":""}`,onClick:()=>r(m),children:"เมื่อวาน"}),d("button",{type:"button",class:`date-quick-btn ${!w&&!R?"on":""}`,onClick:()=>c(!0),children:"แก้ไขวันที่"})]})]}),a&&d(ET,{value:t||i,max:s||i,today:i,onSelect:te=>{r(te),c(!1)},onClose:()=>c(!1)})]})}const Lr=[];function Sp({title:n,onClose:e,children:t,as:r="div",onSubmit:s,action:i,class:a=""}){const c=Vh(null);return ye(()=>{const h=document.activeElement,f={};Lr.push(f);const _=R=>{R.key==="Escape"&&Lr[Lr.length-1]===f&&e()};document.addEventListener("keydown",_);const m=document.body.style.overflow;return document.body.style.overflow="hidden",(c.current&&c.current.querySelector("input, select, textarea")||c.current).focus({preventScroll:!0}),()=>{const R=Lr.indexOf(f);R>=0&&Lr.splice(R,1),document.removeEventListener("keydown",_),document.body.style.overflow=m,h&&h.focus&&h.focus({preventScroll:!0})}},[]),d("div",{class:"scrim",onClick:h=>h.target===h.currentTarget&&e(),children:d(r,{class:`sheet ${a}`.trim(),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:c,onSubmit:s,children:[d("div",{class:"grab","aria-hidden":"true"}),d("div",{class:"sheet-hd",children:[d("h2",{children:n}),i,d("button",{type:"button",class:"icon-btn",onClick:e,"aria-label":"ปิด",children:d(X,{name:"close",size:18})})]}),t]})})}function bI({label:n,onConfirm:e,verb:t="ลบ",busyText:r="กำลังลบ",keepText:s="ยกเลิก",icon:i="trash",danger:a=!0}){const[c,l]=se("idle");return ye(()=>{if(c!=="confirm")return;const h=setTimeout(()=>l("idle"),5e3);return()=>clearTimeout(h)},[c]),c==="idle"?d("button",{type:"button",class:"icon-btn","aria-label":`${t} ${n}`,onClick:()=>l("confirm"),children:d(X,{name:i,size:17})}):d("span",{class:"confirm",children:[d("button",{type:"button",class:`btn sm ${a?"danger":""}`,disabled:c==="busy",onClick:async()=>{l("busy");try{await e()}finally{l("idle")}},children:c==="busy"?r:t}),d("button",{type:"button",class:"btn sm ghost",disabled:c==="busy",onClick:()=>l("idle"),children:s})]})}function lt({load:n,name:e,fallback:t=null,...r}){const[s,i]=se(null);if(ye(()=>{let c=!0;return n().then(l=>{c&&l&&l[e]&&i({name:e,C:l[e]})}).catch(()=>{}),()=>{c=!1}},[e]),!s||s.name!==e)return t;const a=s.C;return d(a,{...r})}function AI({icon:n,title:e,summary:t,children:r,defaultOpen:s=!1}){const[i,a]=se(s);return d("section",{class:"card collapsible",children:[d("button",{type:"button",class:"coll-head","aria-expanded":i,onClick:()=>a(!i),children:[d("span",{class:"ico accent",children:d(X,{name:n})}),d("span",{class:"grow",children:[d("b",{children:e}),d("small",{children:t})]}),d(X,{name:"down",size:16,class:`coll-chev ${i?"up":""}`})]}),i&&d("div",{class:"coll-body",children:r})]})}function An({blocks:n=3}){return d("div",{class:"home-grid","aria-busy":"true","aria-label":"กำลังโหลดข้อมูล",children:[d("div",{class:"col",children:Array.from({length:Math.ceil(n/2)},(e,t)=>d("div",{class:"card sk",style:{height:t===0?"168px":"220px"}},t))}),d("div",{class:"col",children:Array.from({length:Math.floor(n/2)},(e,t)=>d("div",{class:"card sk",style:{height:"200px"}},t))})]})}function TT({onRetry:n}){return d("div",{class:"card state",role:"alert",children:[d("span",{class:"ico",children:d(X,{name:"alert"})}),d("div",{children:[d("b",{children:"โหลดข้อมูลไม่สำเร็จ"}),d("p",{children:"ตรวจอินเทอร์เน็ตแล้วลองใหม่ ถ้ายังไม่ได้ อาจเป็นเพราะโควต้าฐานข้อมูลของวันนี้เต็ม"})]}),d("button",{type:"button",class:"btn sm",onClick:n,children:"ลองใหม่"})]})}function IT({tab:n,onTab:e,userName:t,userPicture:r,tools:s,onAdd:i,children:a}){const c=(Zs.find(l=>l.key===n)||Zs[0]).label;return d("div",{class:"app",children:[d("a",{class:"skip",href:"#main",children:"ข้ามไปเนื้อหา"}),d("aside",{class:"side",children:[d("div",{class:"brand",children:[d(Vl,{size:34}),"Dept Money"]}),d("nav",{"aria-label":"เมนูหลัก",children:Zs.map(l=>d("button",{type:"button",class:`snav ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[d(X,{name:l.icon}),l.label]},l.key))}),d("button",{type:"button",class:"btn side-add",onClick:i,children:[d(X,{name:"plus"}),"บันทึกรายการ"]}),d("div",{class:"side-me",children:[d(Ap,{name:t,pictureUrl:r}),d("span",{children:t})]})]}),d("main",{class:"page",id:"main",children:[d("header",{class:"top",children:[d("div",{class:"brand mobile-only","aria-hidden":"true",children:[d(Vl,{size:30}),"Dept Money"]}),d("h1",{class:"page-title",children:c}),d("div",{class:"top-actions",children:[s,d(wT,{})]})]}),a]}),d("button",{type:"button",class:"fab",onClick:i,children:[d(X,{name:"plus"}),"บันทึก"]}),d("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:d("div",{class:"tabbar-in",children:Zs.map(l=>d("button",{type:"button",class:`tab ${n===l.key?"on":""}`,"aria-current":n===l.key?"page":void 0,onClick:()=>e(l.key),children:[d(X,{name:l.icon}),l.label]},l.key))})})]})}const bT=Object.fromEntries($i.map(n=>[n.key,n.label])),Rp={food:"food",bills:"bolt",goods:"bag",travel:"car",fun:"film",other:"dots"},AT=["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],ST=["อา","จ","อ","พ","พฤ","ศ","ส"];function kp({percent:n,of:e="รายรับ",sub:t="ใช้ไปแล้ว"}){const s=2*Math.PI*42,i=Math.max(0,Math.min(100,n));return d("div",{class:"ring",role:"img","aria-label":`ใช้ไปแล้ว ${n}% ของ${e}`,children:[d("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[d("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),d("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--pay)","stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${s*i/100} ${s}`,transform:"rotate(-90 50 50)"})]}),d("div",{class:"ring-t",children:[d("b",{class:"num",children:[n,"%"]}),d("span",{children:t})]})]})}function RT({m:n,bm:e,today:t,onBudget:r}){const s=e.status,i=s.leftSat<0;return d("section",{class:"card hero","aria-label":"สรุปเดือนเทียบงบ",children:[d("div",{class:"hero-l",children:[d("div",{class:"hero-top",children:[d(Ip,{month:n.month,today:t}),d("div",{children:[d("p",{class:"lbl",children:i?"ใช้เกินงบแล้ว":"งบเหลือเดือนนี้"}),d("p",{class:"big num",children:Z(Math.round(Math.abs(s.leftSat)/100))})]})]}),d("div",{class:"chips",children:[d("button",{type:"button",class:"chip chip-btn",onClick:r,"aria-label":`งบ ${Z(s.budgetSat/100)} แตะเพื่อแก้งบ`,children:["งบ ",d("b",{class:"num",children:Z(s.budgetSat/100)})]}),d("span",{class:"chip",children:[d(X,{name:"up",size:14,class:"pay"}),"ใช้ไป ",d("b",{class:"num",children:Z(s.spentSat/100)})]}),n.incomeSat>0&&d("span",{class:"chip",children:[d(X,{name:"down",size:14,class:"rcv"}),"รายรับ ",d("b",{class:"num",children:Z(n.incomeSat/100)})]})]}),d("p",{class:"lbl hero-split",children:e.perDaySat>0?d(Q,{children:["เหลืออีก ",e.daysLeft," วัน ใช้ได้วันละ ",d("b",{class:"num",children:Z(e.perDaySat/100)})]}):d(Q,{children:["ส่วนตัว ",d("span",{class:"num",children:Z(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",d("span",{class:"num",children:Z(n.groupShareSat/100)})]})})]}),d(kp,{percent:s.percent,of:"งบ",sub:"ของงบ"})]})}function kT({m:n,onAddIncome:e,today:t="",bm:r=null,onBudget:s=null}){if(r&&r.status.set)return d(RT,{m:n,bm:r,today:t,onBudget:s});const i=n.incomeSat>0,a=i&&n.netSat<0,c=i?a?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",l=i?Math.abs(n.netSat)/100:n.spentSat/100,h=!i||a?"pay":"rcv";return d("section",{class:"card hero","aria-label":"สรุปเดือน",children:[d("div",{class:"hero-l",children:[d("div",{class:"hero-top",children:[d(Ip,{month:n.month,today:t}),d("div",{children:[d("p",{class:"lbl",children:c}),d("p",{class:`big num ${h}`,children:Z(Math.round(l))})]})]}),d("div",{class:"chips",children:[d("span",{class:"chip",children:[d(X,{name:"down",size:14,class:"rcv"}),"รายรับ ",d("b",{class:"num",children:Z(n.incomeSat/100)})]}),d("span",{class:"chip",children:[d(X,{name:"up",size:14,class:"pay"}),"ใช้ไป ",d("b",{class:"num",children:Z(n.spentSat/100)})]})]}),d("p",{class:"lbl hero-split",children:["ส่วนตัว ",d("span",{class:"num",children:Z(n.personalSat/100)})," · ส่วนของฉันในกลุ่ม ",d("span",{class:"num",children:Z(n.groupShareSat/100)})]}),s&&d("button",{type:"button",class:"set-budget",onClick:s,children:[d(X,{name:"plus",size:14}),"ตั้งงบเดือนนี้"]})]}),i?d(kp,{percent:n.spentPercent}):d("button",{type:"button",class:"hint",onClick:e,children:[d(X,{name:"plus",size:20}),"เพิ่มรายรับ",d("small",{children:"เพื่อดูว่าเหลือใช้เท่าไร"})]})]})}function PT({m:n,profiles:e=[],month:t="",nowMonth:r=""}){const s=Object.fromEntries((e||[]).map(l=>[l.name,l.pictureUrl])),i=n.owedToMe.map(l=>l.name),a=n.iOwe.map(l=>l.name),c=t&&r&&t!==r?` (${ss(t)})`:"";return d("div",{class:"owe-grid",children:[d("a",{class:"card owe-card",href:"#clear","aria-label":`เพื่อนค้างฉัน ${Z(n.owedTotal)}${i.length?" ได้แก่ "+i.join(", "):""}`,children:[d("span",{class:"owe-k",children:["เพื่อนค้างฉัน",c,d(X,{name:"right",size:14})]}),d("b",{class:`owe-v num ${n.owedTotal>0?"rcv":""}`,children:Z(n.owedTotal)}),i.length>0?d(fh,{names:i,pictures:s}):d("span",{class:"owe-ok",children:[d(X,{name:"check",size:14}),"ไม่มีใครค้าง"]})]}),d("a",{class:"card owe-card",href:"#clear","aria-label":`ฉันค้างเพื่อน ${Z(n.iOweTotal)}${a.length?" ได้แก่ "+a.join(", "):""}`,children:[d("span",{class:"owe-k",children:["ฉันค้างเพื่อน",c,d(X,{name:"right",size:14})]}),d("b",{class:`owe-v num ${n.iOweTotal>0?"pay":""}`,children:Z(n.iOweTotal)}),a.length>0?d(fh,{names:a,pictures:s}):d("span",{class:"owe-ok",children:[d(X,{name:"check",size:14}),"ไม่ค้างใคร"]})]})]})}function CT({sched:n,me:e,onOpen:t}){const r=n&&n.upcoming||[];if(!r.length)return null;const[s,...i]=r,a=f=>Z(f/100,{decimals:f%100?2:0}),c=f=>f.coverFor?a(f.totalSat):a(f.mySat),l=f=>`${Number(f.date.slice(8,10))} ${ss(f.date.slice(0,7))}`,h=f=>f.daysLeft===0?"วันนี้":`อีก ${f.daysLeft} วัน`;return d("section",{class:"nb","aria-label":"บิลรายเดือนที่จะถึง",children:[d("button",{type:"button",class:"nb-main",onClick:t,"aria-label":`บิลถัดไป ${s.desc} ${c(s)} ${h(s)} แตะเพื่อเปิดปฏิทินบิล`,children:[d("span",{class:"nb-count","aria-hidden":"true",children:s.daysLeft===0?d("b",{class:"today",children:"วันนี้"}):d(Q,{children:[d("small",{children:"อีก"}),d("b",{class:"num",children:s.daysLeft}),d("small",{children:"วัน"})]})}),d("span",{class:"nb-t",children:[d("small",{children:["บิลถัดไป · ",l(s)]}),d("b",{children:s.desc}),d("span",{class:"nb-amt num",children:[c(s),s.kind==="group"&&!s.coverFor&&d("em",{children:[" จาก ",a(s.totalSat)]})]}),d("small",{children:aT(s,e)})]}),d(X,{name:"calendar",size:18,class:"nb-ic"})]}),i.length>0&&d("div",{class:"nb-up",children:i.slice(0,2).map(f=>d("button",{type:"button",class:"nb-mini",onClick:t,children:[d("span",{class:"lbl",children:[l(f)," · ",h(f)]}),d("b",{children:f.desc}),d("span",{class:"num",children:[c(f),f.kind==="group"&&!f.coverFor&&d("em",{children:[" จาก ",a(f.totalSat)]})]})]},f.id+f.date))})]})}const ph={near:"ใกล้เต็ม",over:"เกินงบ"};function NT({c:n,label:e}){const t=Math.max(n.spentSat>0?3:0,Math.min(100,n.percent));return d("li",{class:"cat",children:[d("span",{class:"ico big-ico",children:d(X,{name:Rp[n.key]||"dots"})}),d("div",{class:"cat-b",children:[d("div",{class:"cat-r",children:[d("span",{children:[e,ph[n.level]&&d("span",{class:`lv-tag ${n.level}`,children:ph[n.level]})]}),d("span",{class:"num",children:[d("b",{children:Z(n.spentSat/100)}),d("em",{children:["/ ",Z(n.budgetSat/100)]})]})]}),d("div",{class:`bar lv ${n.level}`,role:"img","aria-label":`ใช้ไป ${n.percent}% ของงบ${e}`,children:d("i",{style:{width:`${t}%`}})}),d("div",{class:"cat-s num",children:[d("span",{children:n.leftSat>=0?`เหลือ ${Z(n.leftSat/100)}`:`เกินงบ ${Z(-n.leftSat/100)}`}),d("span",{children:[n.percent,"%"]})]})]})]},n.key)}function DT({cats:n,bm:e=null,onBudget:t=null}){const r=e&&e.status.set?e.status.cats:[],s=new Set(r.map(f=>f.key)),i=n.filter(f=>!s.has(f.key));if(n.length===0&&r.length===0)return null;const a=n[0],c=f=>bT[f]||f,l=r.length?`ตั้งงบไว้ ${r.length} หมวด`:a?`ส่วนใหญ่ไปกับ${a.label} ${a.percent}%`:"",h=i[0];return d("section",{class:"card",children:[d("div",{class:"sec-row",children:[d(bp,{icon:"bag",title:"ใช้ไปกับอะไร",note:l}),e&&e.status.set&&t&&d("button",{type:"button",class:"link-btn",onClick:t,children:"แก้งบ"})]}),d("ul",{class:"cats",children:[r.map(f=>d(NT,{c:f,label:c(f.key)},f.key)),i.map(f=>d("li",{class:"cat",children:[d("span",{class:"ico big-ico",children:d(X,{name:Rp[f.key]||"dots"})}),d("div",{class:"cat-b",children:[d("div",{class:"cat-r",children:[d("span",{children:f.label}),d("span",{class:"num",children:[d("b",{children:[f.percent,"%"]}),d("em",{children:Z(f.satang/100)})]})]}),d("div",{class:"bar",children:d("i",{style:{width:`${Math.max(3,Math.round(f.percent/h.percent*100))}%`}})})]})]},f.key))]})]})}const Pp=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n)),MT=n=>Z(n/100,{decimals:2});function VT(n,e){if(!n||!e)return 0;const t=n/e;return t>.6?3:t>.25?2:1}function OT({month:n,days:e,onPick:t}){const[r,s]=n.split("-").map(Number),i=new Date(Date.UTC(r,s-1,1)).getUTCDay(),a=e.reduce((c,l)=>Math.max(c,l.satang),0);return d("div",{class:"sc-grid",role:"group","aria-label":`ปฏิทินรายจ่าย ${Pc(n)}`,children:[ST.map(c=>d("span",{class:"sc-dow","aria-hidden":"true",children:c},c)),Array.from({length:i},(c,l)=>d("span",{},`e${l}`)),e.map(c=>d("button",{type:"button",class:`sc-day h${VT(c.satang,a)} ${c.today?"today":""} ${c.satang>0&&c.satang===a?"peak":""}`,disabled:c.isFuture,onClick:()=>t(c.day),"aria-label":`วันที่ ${c.day} ใช้ไป ${c.satang>0?Z(c.satang/100):"0 บาท"}`,children:[d("span",{class:"num",children:c.day}),c.satang>0?d("small",{class:"num",children:Pp(c.satang/100)}):null]},c.day))]})}function LT({month:n,days:e,day:t,onDay:r}){const s=e.find(h=>h.day===t)||e[0];if(!s)return null;const[i,a]=n.split("-").map(Number),c=AT[new Date(Date.UTC(i,a-1,s.day)).getUTCDay()],l=e.filter(h=>!h.isFuture).length;return d("div",{class:"sc-day-view",children:[d("div",{class:"sc-day-hd",children:[d("span",{class:"dtile sm","aria-hidden":"true",children:[d("span",{class:"m",children:ss(n)}),d("span",{class:"d num",children:s.day})]}),d("div",{class:"grow",children:[d("b",{children:[c," ",s.day," ",ss(n)]}),d("span",{class:"lbl",children:[s.items.length," รายการ"]})]}),d("b",{class:"num pay",children:Z(s.satang/100)})]}),d("div",{class:"sc-day-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"วันก่อนหน้า",disabled:s.day<=1,onClick:()=>r(s.day-1),children:d(X,{name:"left",size:16})}),d("span",{class:"lbl",children:"เลื่อนดูวันอื่น"}),d("button",{type:"button",class:"icon-btn","aria-label":"วันถัดไป",disabled:s.day>=l,onClick:()=>r(s.day+1),children:d(X,{name:"right",size:16})})]}),s.items.length===0?d("p",{class:"empty",children:[d(X,{name:"check",size:16,class:"rcv"}),"ไม่มีรายจ่ายในวันนี้"]}):d("ul",{class:"plain",children:s.items.map((h,f)=>d("li",{class:"row",children:[d(Em,{desc:h.desc,name:_m(h.icon),size:36,iconSize:18}),d("div",{class:"grow",children:[d("div",{class:"t",children:h.desc||"ไม่ระบุ"}),d("div",{class:"s",children:h.kind==="group"?"ส่วนของฉันในกลุ่ม":"ส่วนตัว"})]}),d("span",{class:"num pay",children:MT(h.satang)})]},f))})]})}function xT({year:n,series:e,since:t,nowMonth:r,onPick:s}){const i=Object.fromEntries((e||[]).map(l=>[l.month,l.spentSat])),a=Array.from({length:12},(l,h)=>{const f=`${n}-${String(h+1).padStart(2,"0")}`,_=f>=t&&f<=r;return{key:f,label:Ts[h],inRange:_,sat:_&&i[f]||0}}),c=a.reduce((l,h)=>Math.max(l,h.sat),0);return d("div",{class:"sc-year",children:a.map(l=>d("button",{type:"button",class:`sc-mon ${l.key===r?"cur":""}`,disabled:!l.inRange,onClick:()=>s(l.key),"aria-label":`${Ep(l.key)} ใช้ไป ${l.inRange?Z(l.sat/100):"ไม่มีข้อมูล"}`,children:[d("small",{children:l.label}),d("b",{class:"num",children:l.inRange?Pp(l.sat/100):"-"}),d("i",{style:{width:`${l.inRange&&c>0?Math.max(4,Math.round(l.sat/c*100)):0}%`}})]},l.key))})}function FT({model:n,month:e,onMonth:t,since:r,nowMonth:s,series:i,onNeedYear:a=()=>{}}){const[c,l]=se("month"),[h,f]=se(1);ye(()=>{c==="year"&&a()},[c]);const _=n.calendarDays||[],m=Number(e.slice(0,4)),w=_.reduce((I,y)=>y.satang>(I?I.satang:0)?y:I,null),R=I=>{const y=ut(e,I);y>=r&&y<=s&&t(y)},P=I=>{const y=e.slice(5,7);let T=`${m+I}-${y}`;T<r?T=r:T>s&&(T=s),t(T)},N=r<`${m}-01`,V=`${m+1}-01`<=s,L=(i||[]).filter(I=>I.month.startsWith(String(m))).reduce((I,y)=>I+y.spentSat,0),$=(i||[]).filter(I=>I.month.startsWith(String(m))&&I.month>=r&&I.month<=s).length;function K(I){f(I),l("day")}function te(I){t(I),l("month")}function J(I){if(I==="day"&&c!=="day"){const y=_.find(T=>T.today);f(y?y.day:w?w.day:1)}l(I)}return d("section",{class:"card sc","aria-label":"ปฏิทินรายจ่าย",children:[d(bp,{icon:"calendar",title:"ใช้ไปเท่าไร",note:"รวมรายจ่ายส่วนตัวและส่วนของฉันในกลุ่ม"}),d("div",{class:"seg sc-seg",role:"group","aria-label":"ดูเป็น",children:[["day","วัน"],["month","เดือน"],["year","ปี"]].map(([I,y])=>d("button",{type:"button",class:c===I?"on":"","aria-pressed":c===I,onClick:()=>J(I),children:y},I))}),c==="year"?d(Q,{children:[d("div",{class:"sc-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"ปีก่อนหน้า",disabled:!N,onClick:()=>P(-1),children:d(X,{name:"left",size:16})}),d("b",{class:"num",children:["ปี ",m+543]}),d("button",{type:"button",class:"icon-btn","aria-label":"ปีถัดไป",disabled:!V,onClick:()=>P(1),children:d(X,{name:"right",size:16})})]}),i?d(Q,{children:[d("div",{class:"sc-sum",children:[d("div",{children:[d("span",{class:"lbl",children:"ใช้ไปทั้งปี"}),d("b",{class:"num pay",children:Z(L/100)})]}),d("div",{children:[d("span",{class:"lbl",children:"เฉลี่ยต่อเดือน"}),d("b",{class:"num",children:Z($>0?L/100/$:0)})]})]}),d(xT,{year:m,series:i,since:r,nowMonth:s,onPick:te})]}):d("p",{class:"empty","aria-busy":"true",children:"กำลังโหลดข้อมูลทั้งปี"})]}):d(Q,{children:[d("div",{class:"sc-nav",children:[d("button",{type:"button",class:"icon-btn","aria-label":"เดือนก่อนหน้า",disabled:e<=r,onClick:()=>R(-1),children:d(X,{name:"left",size:16})}),d("b",{class:"num",children:Pc(e)}),d("button",{type:"button",class:"icon-btn","aria-label":"เดือนถัดไป",disabled:e>=s,onClick:()=>R(1),children:d(X,{name:"right",size:16})})]}),c==="month"?d(Q,{children:[d("div",{class:"sc-sum",children:[d("div",{children:[d("span",{class:"lbl",children:"ใช้ไปทั้งเดือน"}),d("b",{class:"num pay",children:Z(n.spentSat/100)})]}),d("div",{children:[d("span",{class:"lbl",children:"เฉลี่ยต่อวัน"}),d("b",{class:"num",children:Z(n.average)})]})]}),d(OT,{month:e,days:_,onPick:K}),w?d("p",{class:"lbl sc-foot",children:["ใช้มากสุดวันที่ ",w.day," (",Z(w.satang/100),") แตะวันเพื่อดูรายการ"]}):d("p",{class:"lbl sc-foot",children:"ยังไม่มีรายจ่ายในเดือนนี้"})]}):d(LT,{month:e,days:_,day:h,onDay:f})]})]})}function UT({model:n,series:e,month:t,onMonth:r,onAddIncome:s,profiles:i=[],today:a="",nowMonth:c="",since:l="",onNeedYear:h,bm:f=null,onBudget:_=null,bills:m=null,me:w="",onBills:R=()=>{}}){const P=c||t;return d("div",{class:"home-grid",children:[d("div",{class:"col",children:[d(kT,{m:n,onAddIncome:s,today:a,bm:f,onBudget:_}),d(PT,{m:n,profiles:i,month:t,nowMonth:P}),t===P&&d(CT,{sched:m,me:w,onOpen:R}),d(DT,{cats:n.categories,bm:f,onBudget:_})]}),d("div",{class:"col",children:d(FT,{model:n,month:t,onMonth:r,since:l||ut(P,-11),nowMonth:P,series:e,onNeedYear:h})})]})}const mh=()=>$t(()=>import("./add-CFuIz_0x.js"),__vite__mapDeps([0,1])),gh=()=>$t(()=>import("./ClearPage-CeyrgDIf.js"),[]),_h=()=>$t(()=>import("./ListPage-jQAtLZs4.js"),__vite__mapDeps([2,1])),yh=()=>$t(()=>import("./MePage-BH46-PKZ.js"),__vite__mapDeps([3,4])),vh=()=>$t(()=>import("./onboard-CY_iHEub.js"),[]),Ho=()=>$t(()=>import("./plan-CL9xRvYG.js"),[]),BT=()=>$t(()=>import("./billcal-DiihiDZp.js"),[]),pt=lp();function ei(){const n=new URLSearchParams(location.search).get("liff.state")||"";return(location.hash||(n.includes("#")?n.slice(n.indexOf("#")):"")).slice(1)}function xr(n){const e=/^(edit|split|choose)=([A-Za-z0-9_-]{1,100})$/.exec(String(n||""));return e?{kind:e[1],id:e[2]}:null}const wh=sp().slice(0,7),Eh=12,$T=["home","list","clear","me"],ti=n=>n==="bills"||n==="wallet"?"list":$T.includes(n)?n:"home";function jT(){const[n,e]=se(pt?{state:"ok",user:pt}:{state:"loading"}),[t,r]=se(()=>{const C=ei();return xr(C)?"list":ti(C)}),[s,i]=se(()=>xr(ei())),[a,c]=se(null),[l,h]=se(null),f=ze(()=>sp(),[]),_=f.slice(0,7),m=ze(()=>ut(_,-11),[_]),[w,R]=se(_),[P,N]=se(()=>pt?SE():null),[V,L]=se(()=>{const C=pt?bE(pt.name,wh):null;return C?{[wh]:C}:{}}),[$,K]=se(!1),[te,J]=se(null),[I,y]=se(""),[T,b]=se(null),[A,v]=se(()=>pt&&ei()==="add"?"menu":null),[E,de]=se(""),[Oe,Tt]=se(0),[Qe,qt]=se(!1),[zt,Is]=se(!1),[gr,it]=se(!!pt),[fe,_r]=se(null),[et,_o]=se(null),[$n,bs]=se(!1),[ot,Xe]=se(null),Wt=C=>{if(C.needLogin){qt(!0);return}pt&&!C.needLink&&C.memberId!==pt.memberId&&(Ia(),L({}),N(null),J(null)),C.needLink?e({state:"link",profile:C.profile,candidates:C.candidates,suggest:C.suggest||""}):!C.isAdmin&&(!C.realName||!Tp(C.promptpay))?e({state:"onboard",user:C}):e(B=>B.state==="ok"&&JSON.stringify(B.user)===JSON.stringify(C)?B:{state:"ok",user:C}),C.needLink||IE(C)},yn=(C,B)=>L(W=>({...W,[C]:{...W[C]||{},...B}}));ye(()=>{wE().then(C=>{if(!C)return;Wt(C);const B=ei();if(B==="add"){v("menu"),r("home");try{history.replaceState(null,"",location.pathname+"#home")}catch{}}else xr(B)?(i(xr(B)),r("list")):B&&["home","list","bills","wallet","clear","me"].includes(B)&&r(ti(B))}).catch(C=>{pt?console.warn("signIn:",C.message):e({state:"error",message:C.message})})},[]),ye(()=>{hE(()=>qt(!0))},[]),ye(()=>{const C=()=>{const B=location.hash.slice(1),W=xr(B);W?(i(W),r("list")):r(ti(B))};return addEventListener("hashchange",C),()=>removeEventListener("hashchange",C)},[]),ye(()=>{n.state==="ok"&&RE().then(N).catch(()=>K(!0))},[n.state,Oe]),ye(()=>{n.state!=="ok"||!["home","list","clear","me"].includes(t)||te||UE().then(J).catch(()=>K(!0))},[n.state,t,te]),ye(()=>{n.state==="ok"&&ME().then(_r).catch(C=>{C.expired||console.warn("loadPlan:",C.message),_r(B=>B||{budget:{total:0,cats:{}},months:{},goals:[]})})},[n.state,Oe]),ye(()=>{n.state!=="ok"||t!=="home"||jE().then(_o).catch(C=>console.warn("loadBillSchedule:",C&&C.message))},[n.state,t,Oe]),ye(()=>{if(n.state==="ok")return PE(_,C=>{C.error?K(!0):yn(_,C)})},[n.state,_]);const dt=ze(()=>[...new Set([...zt?hh(_,Eh):[],w])].filter(C=>C!==_),[_,w,zt]);ye(()=>{if(n.state!=="ok")return;const C=[_,...dt.filter(B=>!(V[B]&&V[B].wallet))];NE(C,_).then(B=>Object.entries(B).forEach(([W,Cs])=>yn(W,{wallet:Cs}))).catch(B=>{B.expired||de(B.message)})},[n.state,_,Oe,dt.filter(C=>!(V[C]&&V[C].wallet)).join("|")]),ye(()=>{n.state==="ok"&&dt.forEach(C=>{V[C]&&V[C].transactions||kE(C).then(B=>yn(C,{transactions:B.transactions,settlements:B.settlements})).catch(()=>K(!0))})},[n.state,dt,dt.filter(C=>!(V[C]&&V[C].transactions)).join("|")]);const ft=V[_];ye(()=>{n.state==="ok"&&ft&&ft.transactions&&ft.settlements&&ft.wallet&&AE(n.user.name,_,ft)},[ft]),ye(()=>{if(n.state!=="ok")return;const B=(window.requestIdleCallback||(W=>setTimeout(W,1500)))(()=>{[_h,gh,yh,mh].forEach(W=>W().catch(()=>{}))});return()=>{window.cancelIdleCallback?window.cancelIdleCallback(B):clearTimeout(B)}},[n.state]),ye(()=>{if(E){const C=setTimeout(()=>de(""),3200);return()=>clearTimeout(C)}},[E]);const vn=C=>V[C]&&V[C].transactions&&V[C].settlements&&V[C].wallet,Ht=n.state==="ok"&&P&&vn(_)&&vn(w);ye(()=>{Ht&&it(!0)},[Ht]),ye(()=>{if(gr)return;const C=setTimeout(()=>it(!0),12e3);return()=>clearTimeout(C)},[gr]);const As=Ht&&dt.every(vn),Y=ze(()=>{if(!Ht)return null;const C=Object.values(V);return{transactions:C.flatMap(B=>B.transactions||[]),settlements:C.flatMap(B=>B.settlements||[]),wallet:C.flatMap(B=>B.wallet||[])}},[Ht,V]),yr=ze(()=>Y&&P?pT({me:n.user.name,members:P,transactions:Y.transactions}):[],[Y,n,P]),at=ze(()=>Y?lh({name:n.user.name,month:w,today:f,members:P,transactions:Y.transactions,settlements:Y.settlements,walletItems:Y.wallet}):null,[Y,n,P,w,f]),Ss=ze(()=>Y&&zt&&As?lT({name:n.user.name,months:hh(_,Eh),transactions:Y.transactions,settlements:Y.settlements,walletItems:Y.wallet}):null,[Y,zt,As,n,_]),Rs=ze(()=>Y?uT({name:n.user.name,month:w,members:P,transactions:Y.transactions,settlements:Y.settlements}):null,[Y,n,P,w]),It=ze(()=>Y?hT({name:n.user.name,month:w,walletItems:Y.wallet,transactions:Y.transactions,settlements:Y.settlements}):null,[Y,n,w]),wn=ze(()=>Y?w===_?at:lh({name:n.user.name,month:_,today:f,members:P,transactions:Y.transactions,settlements:Y.settlements,walletItems:Y.wallet}):null,[Y,at,w,_]),ks=ze(()=>fe&&at?uh(fe,at,f):null,[fe,at,f]),Ee=ze(()=>fe&&wn?uh(fe,wn,f):null,[fe,wn,f]),Pe=ze(()=>et&&n.state==="ok"?oT({me:n.user.name,month:_,today:f,group:et.group,personal:et.personal}):null,[et,n,_,f]),bt=(C,B)=>C.then(W=>(_r(W),B&&de(B),W)),vr=ze(()=>Y?dT({name:n.user.name,month:w,transactions:Y.transactions,search:I}):null,[Y,n,w,I]),At=(C=w)=>{dp(C),C===_?Tt(B=>B+1):L(B=>{const W={...B};return delete W[C],W})},wr=C=>{b({amount:C.amount,desc:C.desc,date:C.date,icon:C.icon,convertId:C.id,month:String(C.date).slice(0,7)}),v("bill")};ye(()=>{if(!s||!Y)return;let C=!0;const B=Y.wallet.find(W=>W.id===s.id);return(B?Promise.resolve(B):BE(s.id)).then(W=>{if(C){if(!W){de("ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");return}s.kind==="split"&&W.type!=="income"?wr(W):s.kind==="choose"&&W.type!=="income"?h(W):(r("list"),c({...W}))}}).catch(W=>{C&&!W.expired&&de(W.message)}).finally(()=>{if(C){i(null);try{history.replaceState(null,"",location.pathname+"#list")}catch{}}}),()=>{C=!1}},[s,!!Y]);const Gt=()=>{Ia(),L({}),N(null),K(!1),Tt(C=>C+1)};if(n.state==="loading")return d("div",{class:"center",children:d(Vr,{label:"กำลังเข้าสู่ระบบ"})});if(n.state==="error")return d("div",{class:"center",children:[d(Vr,{}),d("p",{role:"alert",children:n.message}),d("button",{type:"button",class:"btn",onClick:()=>location.reload(),children:"ลองใหม่"})]});if(n.state==="link")return d(lt,{load:vh,name:"LinkPage",profile:n.profile,candidates:n.candidates,suggest:n.suggest,onDone:Wt,fallback:d("div",{class:"center",children:d(Vr,{})})});if(n.state==="onboard")return d(lt,{load:vh,name:"OnboardPage",user:n.user,onDone:Wt,fallback:d("div",{class:"center",children:d(Vr,{})})});if(!gr&&!$)return d("div",{class:"center",children:d(Vr,{label:"กำลังโหลดข้อมูล"})});const Ps=C=>{location.hash=C,r(C),window.scrollTo(0,0)},St=ti(t),jn=St!=="me";let Kt;return jn&&$?Kt=d(TT,{onRetry:Gt}):St==="home"?Kt=at?d(UT,{model:at,series:Ss,month:w,onMonth:R,onAddIncome:()=>v("income"),profiles:te||[],today:f,nowMonth:_,since:m,onNeedYear:()=>Is(!0),bm:ks,onBudget:fe?()=>Xe({kind:"budget"}):null,bills:Pe,me:n.user.name,onBills:()=>bs(!0)}):d(An,{blocks:5}):St==="list"?Kt=vr&&It?d(lt,{load:_h,name:"ListPage",fallback:d(An,{blocks:3}),pictures:Object.fromEntries((te||[]).map(C=>[C.name,C.pictureUrl])),bills:vr,wallet:It,month:w,today:f,search:I,onSearch:y,me:n.user.name,isAdmin:n.user.isAdmin,version:Oe,openEdit:a,onSplit:wr,onChanged:()=>At(),onError:de,onInfo:de}):d(An,{blocks:3}):St==="clear"?Kt=Rs&&te?d(lt,{load:gh,name:"ClearPage",fallback:d(An,{blocks:2}),model:Rs,profiles:te,month:w,back:It?{receivedSat:It.receivedBackSat,paidSat:It.paidBackSat}:null,onChanged:()=>At(),isAdmin:n.user.isAdmin,adminName:n.user.name,onError:de,onInfo:de}):d(An,{blocks:2}):Kt=te?d(lt,{load:yh,name:"MePage",fallback:d(An,{blocks:2}),auth:n,profiles:te,onSaved:()=>J(null),onRefresh:Gt,onMembers:()=>{J(null),Tt(C=>C+1)},onToast:de,transactions:Y?Y.transactions:[],onDataChanged:C=>At(C),bm:Ee,onBudget:()=>Xe({kind:"budget"}),onGoalAdd:()=>Xe({kind:"goal"}),onGoalMove:(C,B)=>Xe({kind:"move",goal:C,dir:B}),onGoalEdit:C=>Xe({kind:"goal",goal:C})}):d(An,{blocks:2}),d(Q,{children:[Qe&&d("div",{class:"login-banner",role:"alert",children:[d("span",{children:["เซสชัน LINE หมดอายุ ยังดูข้อมูลที่จำไว้ได้ แต่ข้อมูลกระเป๋าและการบันทึกต้องเข้าสู่ระบบใหม่",Zu()&&d("small",{class:"diag",children:Zu()})]}),d("button",{type:"button",class:"btn sm",onClick:dE,children:"เข้าสู่ระบบใหม่"})]}),d(IT,{tab:St,onTab:Ps,userName:n.user.name,userPicture:n.user.pictureUrl,onAdd:()=>v("menu"),tools:jn&&d(yT,{month:w,onChange:R,min:m,max:_}),children:d(_T,{page:St,children:Kt})}),A&&d(lt,{load:mh,name:"AddSheet",initial:A==="income"?"income":A==="bill"?"bill":null,prefill:T,convertWallet:eh,today:f,members:P||[],me:n.user.name,suggested:yr,save:FE,saveBill:th,onClose:()=>{v(null),b(null)},onSaved:(C,B=[])=>{de(C),B.forEach(W=>At(W)),Tt(W=>W+1)}}),l&&d(lt,{load:()=>$t(()=>import("./editbill-Dg7ddTw6.js"),__vite__mapDeps([5,1])),name:"ChooseSheet",item:l,members:P||[],me:n.user.name,suggested:yr,today:f,saveBill:th,removeWallet:eh,onClose:()=>h(null),onConfirmed:()=>At(String(l.date).slice(0,7)),onDone:(C,B=[])=>{de(C),B.forEach(W=>At(W)),Tt(W=>W+1)},onMoreSplit:C=>{h(null),wr(C)}}),$n&&et&&d(lt,{load:BT,name:"BillCalendarSheet",data:et,me:n.user.name,today:f,onClose:()=>bs(!1)}),ot&&ot.kind==="budget"&&d(lt,{load:Ho,name:"BudgetSheet",plan:fe,nowMonth:_,suggestSat:Ee?Ee.suggestSat:0,onClose:()=>Xe(null),onSave:C=>bt(VE(C),C.clear?"กลับไปใช้งบปกติแล้ว":"บันทึกงบแล้ว")}),ot&&ot.kind==="move"&&d(lt,{load:Ho,name:"GoalMoveSheet",goal:ot.goal,dir:ot.dir,month:_,onClose:()=>Xe(null),onMove:(C,B,W)=>bt(LE(C,B,W),W==="out"?"ถอนออกจากเป้าแล้ว":"เก็บเข้าเป้าแล้ว")}),ot&&ot.kind==="goal"&&d(lt,{load:Ho,name:"GoalEditSheet",goal:ot.goal||null,nowMonth:_,onClose:()=>Xe(null),onSave:C=>bt(OE(C),C.id?"แก้เป้าแล้ว":"เพิ่มเป้าแล้ว"),onDelete:C=>bt(xE(C),"ลบเป้าแล้ว")}),E&&d("div",{class:"toast",role:"status",children:E})]})}cm(d(jT,{}),document.getElementById("app"));export{mI as $,Ap as A,vI as B,ss as C,II as D,_m as E,zE as F,eh as G,hI as H,X as I,eI as J,uI as K,lt as L,$E as M,DE as N,tI as O,YT as P,AI as Q,fh as R,Sp as S,ze as T,pI as U,dI as V,Vl as W,HT as X,ut as Y,QE as Z,$t as _,Em as a,gI as a0,fp as a1,eT as a2,oT as a3,Pc as a4,aT as a5,QT as a6,qE as a7,JT as a8,TI as a9,lI as aa,nI as ab,sI as ac,rI as ad,GT as ae,KT as af,mm as b,Z as c,se as d,mT as e,EI as f,wI as g,Ip as h,sp as i,Q as j,bp as k,bI as l,Ep as m,aI as n,hh as o,oI as p,iI as q,cI as r,yI as s,_I as t,d as u,Tp as v,fI as w,ye as x,ZT as y,XT as z};
