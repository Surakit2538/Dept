(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Pr,J,il,Wt,jo,ol,al,hs,ir,fn,ll,Zs,Is,As,fr={},pr=[],ku=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Cr=Array.isArray;function $t(n,t){for(var e in t)n[e]=t[e];return n}function ti(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Nu(n,t,e){var r,s,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?Pr.call(arguments,2):e),typeof n=="function"&&n.defaultProps!=null)for(o in n.defaultProps)a[o]===void 0&&(a[o]=n.defaultProps[o]);return or(n,a,r,s,null)}function or(n,t,e,r,s){var o={type:n,props:t,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++il,__i:-1,__u:0};return s==null&&J.vnode!=null&&J.vnode(o),o}function St(n){return n.children}function ar(n,t){this.props=n,this.context=t}function pe(n,t){if(t==null)return n.__?pe(n.__,n.__i+1):null;for(var e;t<n.__k.length;t++)if((e=n.__k[t])!=null&&e.__e!=null)return e.__e;return typeof n.type=="function"?pe(n):null}function Mu(n){if(n.__P&&n.__d){var t=n.__v,e=t.__e,r=[],s=[],o=$t({},t);o.__v=t.__v+1,J.vnode&&J.vnode(o),ei(n.__P,o,t,n.__n,n.__P.namespaceURI,32&t.__u?[e]:null,r,e??pe(t),!!(32&t.__u),s),o.__v=t.__v,o.__.__k[o.__i]=o,fl(r,o,s),t.__e=t.__=null,o.__e!=e&&cl(o)}}function cl(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(t){if(t!=null&&t.__e!=null)return n.__e=n.__c.base=t.__e}),cl(n)}function zo(n){(!n.__d&&(n.__d=!0)&&Wt.push(n)&&!mr.__r++||jo!=J.debounceRendering)&&((jo=J.debounceRendering)||ol)(mr)}function mr(){try{for(var n,t=1;Wt.length;)Wt.length>t&&Wt.sort(al),n=Wt.shift(),t=Wt.length,Mu(n)}finally{Wt.length=mr.__r=0}}function ul(n,t,e,r,s,o,a,c,h,d,m){var T,v,R,P,N,V,L=r&&r.__k||pr,O=t.length;for(h=xu(e,t,L,h,O),T=0;T<O;T++)(R=e.__k[T])!=null&&(v=R.__i!=-1&&L[R.__i]||fr,R.__i=T,V=ei(n,R,v,s,o,a,c,h,d,m),P=R.__e,R.ref&&v.ref!=R.ref&&(v.ref&&ni(v.ref,null,R),m.push(R.ref,R.__c||P,R)),N==null&&P!=null&&(N=P),4&R.__u?(h=hl(R,h,n),v.__e&&(v.__e=null)):typeof R.type=="function"&&V!==void 0?h=V:P&&(h=P.nextSibling),R.__u&=-7);return e.__e=N,h}function xu(n,t,e,r,s){var o,a,c,h,d,m=e.length,T=m,v=0;for(n.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[o]=or(null,a,null,null,null):Cr(a)?a=n.__k[o]=or(St,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[o]=or(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[o]=a,h=o+v,a.__=n,a.__b=n.__b+1,c=null,(d=a.__i=Ou(a,e,h,T))!=-1&&(T--,(c=e[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(s>m?v--:s<m&&v++),typeof a.type!="function"&&(a.__u|=4)):d!=h&&(d==h-1?v--:d==h+1?v++:(d>h?v--:v++,a.__u|=4))):n.__k[o]=null;if(T)for(o=0;o<m;o++)(c=e[o])!=null&&!(2&c.__u)&&(c.__e==r&&(r=pe(c)),ml(c,c));return r}function hl(n,t,e){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,t=hl(r[s],t,e));return t}n.__e!=t&&(t&&n.type&&!t.parentNode&&(t=pe(n)),t=e.insertBefore(n.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ou(n,t,e,r){var s,o,a,c=n.key,h=n.type,d=t[e],m=d!=null&&(2&d.__u)==0;if(d===null&&c==null||m&&c==d.key&&h==d.type)return e;if(r>(m?1:0)){for(s=e-1,o=e+1;s>=0||o<t.length;)if((d=t[a=s>=0?s--:o++])!=null&&!(2&d.__u)&&c==d.key&&h==d.type)return a}return-1}function Ho(n,t,e){t[0]=="-"?n.setProperty(t,e??""):n[t]=e==null?"":typeof e!="number"||ku.test(t)?e:e+"px"}function Jn(n,t,e,r,s){var o,a;t:if(t=="style")if(typeof e=="string")n.style.cssText=e;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(t in r)e&&t in e||Ho(n.style,t,"");if(e)for(t in e)r&&e[t]==r[t]||Ho(n.style,t,e[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(ll,"$1")),a=t.toLowerCase(),t=a in n||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),n.l||(n.l={}),n.l[t+o]=e,e?r?e[fn]=r[fn]:(e[fn]=Zs,n.addEventListener(t,o?As:Is,o)):n.removeEventListener(t,o?As:Is,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in n)try{n[t]=e??"";break t}catch{}typeof e=="function"||(e==null||e===!1&&t[4]!="-"?n.removeAttribute(t):n.setAttribute(t,t=="popover"&&e==1?"":e))}}function Ko(n){return function(t){if(this.l){var e=this.l[t.type+n];if(t[ir]==null)t[ir]=Zs++;else if(t[ir]<e[fn])return;return e(J.event?J.event(t):t)}}}function ei(n,t,e,r,s,o,a,c,h,d){var m,T,v,R,P,N,V,L,O,$,z,Y,Q,I,g,p,E=t.type;if(t.constructor!==void 0)return null;128&e.__u&&(h=!!(32&e.__u),o=[c=t.__e=e.__e]),(m=J.__b)&&m(t);t:if(typeof E=="function"){T=a.length;try{if(O=t.props,$=E.prototype&&E.prototype.render,z=(m=E.contextType)&&r[m.__c],Y=m?z?z.props.value:m.__:r,e.__c?L=(v=t.__c=e.__c).__=v.__E:($?t.__c=v=new E(O,Y):(t.__c=v=new ar(O,Y),v.constructor=E,v.render=Fu),z&&z.sub(v),v.state||(v.state={}),v.__n=r,R=v.__d=!0,v.__h=[],v._sb=[]),$&&v.__s==null&&(v.__s=v.state),$&&E.getDerivedStateFromProps!=null&&(v.__s==v.state&&(v.__s=$t({},v.__s)),$t(v.__s,E.getDerivedStateFromProps(O,v.__s))),P=v.props,N=v.state,v.__v=t,R)$&&E.getDerivedStateFromProps==null&&v.componentWillMount!=null&&v.componentWillMount(),$&&v.componentDidMount!=null&&v.__h.push(v.componentDidMount);else{if($&&E.getDerivedStateFromProps==null&&O!==P&&v.componentWillReceiveProps!=null&&v.componentWillReceiveProps(O,Y),t.__v==e.__v||!v.__e&&v.shouldComponentUpdate!=null&&v.shouldComponentUpdate(O,v.__s,Y)===!1){t.__v!=e.__v&&(v.props=O,v.state=v.__s,v.__d=!1),t.__e=e.__e,t.__k=e.__k,t.__k.some(function(w){w&&(w.__=t)}),pr.push.apply(v.__h,v._sb),v._sb=[],v.__h.length&&a.push(v),c=pe(e);break t}v.componentWillUpdate!=null&&v.componentWillUpdate(O,v.__s,Y),$&&v.componentDidUpdate!=null&&v.__h.push(function(){v.componentDidUpdate(P,N,V)})}if(v.context=Y,v.props=O,v.__P=n,v.__e=!1,Q=J.__r,I=0,$)v.state=v.__s,v.__d=!1,Q&&Q(t),m=v.render(v.props,v.state,v.context),pr.push.apply(v.__h,v._sb),v._sb=[];else do v.__d=!1,Q&&Q(t),m=v.render(v.props,v.state,v.context),v.state=v.__s;while(v.__d&&++I<25);v.state=v.__s,v.getChildContext!=null&&(r=$t($t({},r),v.getChildContext())),$&&!R&&v.getSnapshotBeforeUpdate!=null&&(V=v.getSnapshotBeforeUpdate(P,N)),g=m!=null&&m.type===St&&m.key==null?pl(m.props.children):m,c=ul(n,Cr(g)?g:[g],t,e,r,s,o,a,c,h,d),v.base=t.__e,t.__u&=-161,v.__h.length&&a.push(v),L&&(v.__E=v.__=null)}catch(w){if(a.length=T,t.__v=null,h||o!=null){if(w.then){for(t.__u|=h?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o!=null&&(o[o.indexOf(c)]=null),t.__e=c}else if(o!=null)for(p=o.length;p--;)ti(o[p])}else t.__e=e.__e;t.__k==null&&(t.__k=e.__k||[]),w.then||dl(t),J.__e(w,t,e)}}else o==null&&t.__v==e.__v?(t.__k=e.__k,t.__e=e.__e):c=t.__e=Lu(e.__e,t,e,r,s,o,a,h,d);return(m=J.diffed)&&m(t),128&t.__u?void 0:c}function dl(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(dl))}function fl(n,t,e){for(var r=0;r<e.length;r++)ni(e[r],e[++r],e[++r]);J.__c&&J.__c(t,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(o){o.call(s)})}catch(o){J.__e(o,s.__v)}})}function pl(n){return typeof n!="object"||n==null||n.__b>0?n:Cr(n)?n.map(pl):n.constructor!==void 0?null:$t({},n)}function Lu(n,t,e,r,s,o,a,c,h){var d,m,T,v,R,P,N,V=e.props||fr,L=t.props,O=t.type;if(O=="svg"?s="http://www.w3.org/2000/svg":O=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(d=0;d<o.length;d++)if((R=o[d])&&"setAttribute"in R==!!O&&(O?R.localName==O:R.nodeType==3)){n=R,o[d]=null;break}}if(n==null){if(O==null)return document.createTextNode(L);n=document.createElementNS(s,O,L.is&&L),c&&(J.__m&&J.__m(t,o),c=!1),o=null}if(O==null)V===L||c&&n.data==L||(n.data=L);else{if(o=O=="textarea"&&L.defaultValue!=null?null:o&&Pr.call(n.childNodes),!c&&o!=null)for(V={},d=0;d<n.attributes.length;d++)V[(R=n.attributes[d]).name]=R.value;for(d in V)R=V[d],d=="dangerouslySetInnerHTML"?T=R:d=="children"||d in L||d=="value"&&"defaultValue"in L||d=="checked"&&"defaultChecked"in L||Jn(n,d,null,R,s);for(d in L)R=L[d],d=="children"?v=R:d=="dangerouslySetInnerHTML"?m=R:d=="value"?P=R:d=="checked"?N=R:c&&typeof R!="function"||V[d]===R||Jn(n,d,R,V[d],s);if(m)c||T&&(m.__html==T.__html||m.__html==n.innerHTML)||(n.innerHTML=m.__html),t.__k=[];else if(T&&(n.innerHTML=""),ul(t.type=="template"?n.content:n,Cr(v)?v:[v],t,e,r,O=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:e.__k&&pe(e,0),c,h),o!=null)for(d=o.length;d--;)ti(o[d]);c&&O!="textarea"||(d="value",O=="progress"&&P==null?n.removeAttribute("value"):P!=null&&(P!==n[d]||O=="progress"&&!P||O=="option"&&P!=V[d])&&Jn(n,d,P,V[d],s),d="checked",N!=null&&N!=n[d]&&Jn(n,d,N,V[d],s))}return n}function ni(n,t,e){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&t==null||(n.__u=n(t))}else n.current=t}catch(s){J.__e(s,e)}}function ml(n,t,e){var r,s;if(J.unmount&&J.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||ni(r,null,t)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){J.__e(o,t)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&ml(r[s],t,e||typeof n.type!="function");e||ti(n.__e),n.__c=n.__=n.__e=void 0}function Fu(n,t,e){return this.constructor(n,e)}function Uu(n,t,e){var r,s,o,a;t==document&&(t=document.documentElement),J.__&&J.__(n,t),s=(r=!1)?null:t.__k,o=[],a=[],ei(t,n=t.__k=Nu(St,null,[n]),s||fr,fr,t.namespaceURI,s?null:t.firstChild?Pr.call(t.childNodes):null,o,s?s.__e:t.firstChild,r,a),fl(o,n,a),n.props.children=null}Pr=pr.slice,J={__e:function(n,t,e,r){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},il=0,ar.prototype.setState=function(n,t){var e;e=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=$t({},this.state),typeof n=="function"&&(n=n($t({},e),this.props)),n&&$t(e,n),n!=null&&this.__v&&(t&&this._sb.push(t),zo(this))},ar.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),zo(this))},ar.prototype.render=St,Wt=[],ol=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,al=function(n,t){return n.__v.__b-t.__v.__b},mr.__r=0,hs=Math.random().toString(8),ir="__d"+hs,fn="__a"+hs,ll=/(PointerCapture)$|Capture$/i,Zs=0,Is=Ko(!1),As=Ko(!0);var Bu=0;function y(n,t,e,r,s,o){t||(t={});var a,c,h=t;if("ref"in h)for(c in h={},t)c=="ref"?a=t[c]:h[c]=t[c];var d={type:n,props:h,key:e,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Bu,__i:-1,__u:0,__source:s,__self:o};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)h[c]===void 0&&(h[c]=a[c]);return J.vnode&&J.vnode(d),d}var yn,it,ds,Go,bs=0,_l=[],lt=J,Wo=lt.__b,Qo=lt.__r,Yo=lt.diffed,Xo=lt.__c,Jo=lt.unmount,Zo=lt.__;function ri(n,t){lt.__h&&lt.__h(it,n,bs||t),bs=0;var e=it.__H||(it.__H={__:[],__h:[]});return n>=e.__.length&&e.__.push({}),e.__[n]}function Pt(n){return bs=1,$u(yl,n)}function $u(n,t,e){var r=ri(yn++,2);if(r.t=n,!r.__c&&(r.__=[yl(void 0,t),function(c){var h=r.__N?r.__N[0]:r.__[0],d=r.t(h,c);h!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=it,!it.__f)){var s=function(c,h,d){if(!r.__c.__H)return!0;var m=!1,T=r.__c.props!==c;if(r.__c.__H.__.some(function(R){if(R.__N){m=!0;var P=R.__[0];R.__=R.__N,R.__N=void 0,P!==R.__[0]&&(T=!0)}}),o){var v=o.call(this,c,h,d);return m?v||T:v}return!m||T};it.__f=!0;var o=it.shouldComponentUpdate,a=it.componentWillUpdate;it.componentWillUpdate=function(c,h,d){if(this.__e){var m=o;o=void 0,s(c,h,d),o=m}a&&a.call(this,c,h,d)},it.shouldComponentUpdate=s}return r.__N||r.__}function ae(n,t){var e=ri(yn++,3);!lt.__s&&gl(e.__H,t)&&(e.__=n,e.u=t,it.__H.__h.push(e))}function Ie(n,t){var e=ri(yn++,7);return gl(e.__H,t)&&(e.__=n(),e.__H=t,e.__h=n),e.__}function qu(){for(var n;n=_l.shift();){var t=n.__H;if(n.__P&&t)try{t.__h.some(lr),t.__h.some(Rs),t.__h=[]}catch(e){t.__h=[],lt.__e(e,n.__v)}}}lt.__b=function(n){it=null,Wo&&Wo(n)},lt.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),Zo&&Zo(n,t)},lt.__r=function(n){Qo&&Qo(n),yn=0;var t=(it=n.__c).__H;t&&(ds===it?(t.__h=[],it.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(lr),t.__h.some(Rs),t.__h=[],yn=0)),ds=it},lt.diffed=function(n){Yo&&Yo(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(_l.push(t)!==1&&Go===lt.requestAnimationFrame||((Go=lt.requestAnimationFrame)||ju)(qu)),t.__H.__.some(function(e){e.u&&(e.__H=e.u,e.u=void 0)})),ds=it=null},lt.__c=function(n,t){t.some(function(e){try{e.__h.some(lr),e.__h=e.__h.filter(function(r){return!r.__||Rs(r)})}catch(r){t.some(function(s){s.__h&&(s.__h=[])}),t=[],lt.__e(r,e.__v)}}),Xo&&Xo(n,t)},lt.unmount=function(n){Jo&&Jo(n);var t,e=n.__c;e&&e.__H&&(e.__H.__.some(function(r){try{lr(r)}catch(s){t=s}}),e.__H=void 0,t&&lt.__e(t,e.__v))};var ta=typeof requestAnimationFrame=="function";function ju(n){var t,e=function(){clearTimeout(r),ta&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(e,35);ta&&(t=requestAnimationFrame(e))}function lr(n){var t=it,e=n.__c;typeof e=="function"&&(n.__c=void 0,e()),it=t}function Rs(n){var t=it;n.__c=n.__(),it=t}function gl(n,t){return!n||n.length!==t.length||t.some(function(e,r){return e!==n[r]})}function yl(n,t){return typeof t=="function"?t(n):t}const ea={home:y(St,{children:[y("path",{d:"M3.5 11 12 4l8.5 7"}),y("path",{d:"M5.5 9.8V20h13V9.8"}),y("path",{d:"M10 20v-5.5h4V20"})]}),bill:y(St,{children:[y("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),y("path",{d:"M9 8.5h6M9 12h6"})]}),swap:y("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:y(St,{children:[y("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),y("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),y("path",{d:"M15.5 13.8h2.2"})]}),user:y(St,{children:[y("circle",{cx:"12",cy:"8.5",r:"3.6"}),y("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:y("path",{d:"M12 5v14M5 12h14"}),check:y("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:y(St,{children:[y("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),y("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),y("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),y("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:y("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:y("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:y("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:y("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:y("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:y(St,{children:[y("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),y("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:y(St,{children:[y("path",{d:"M5.5 8h13l-1 11.5h-11z"}),y("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:y("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:y("path",{d:"M6 12h.01M12 12h.01M18 12h.01"}),people:y(St,{children:[y("circle",{cx:"9",cy:"8.5",r:"3.2"}),y("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),y("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:y(St,{children:[y("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),y("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),close:y("path",{d:"M6 6l12 12M18 6 6 18"})};function pt({name:n,size:t,class:e=""}){return y("svg",{class:`ic ${e}`,viewBox:"0 0 24 24","aria-hidden":"true",style:t?{width:t,height:t}:void 0,children:ea[n]||ea.dots})}const zu={"fa-utensils":"food","fa-mug-hot":"food","fa-wine-glass":"food","fa-car":"car","fa-gas-pump":"car","fa-bus":"car","fa-plane":"car","fa-cart-shopping":"bag","fa-basket-shopping":"bag","fa-scissors":"bag","fa-pills":"bag","fa-paw":"bag","fa-gift":"bag","fa-bolt":"bolt","fa-house":"bolt","fa-mobile-screen":"bolt","fa-mobile-screen-button":"bolt","fa-arrow-down":"down"},Hu=n=>zu[n]||"bill";function Zn({size:n=24}){return y("svg",{viewBox:"0 0 120 120",width:n,height:n,"aria-hidden":"true",children:y("g",{transform:"translate(-8 0)",children:[y("path",{d:"M20 32 A28 28 0 0 1 20 88 Z",fill:"#f3a10b"}),y("path",{d:"M56 88 V46 A14 14 0 0 1 84 46 V88 M84 46 A14 14 0 0 1 112 46 V88",fill:"none",stroke:"currentColor","stroke-width":"9"})]})})}var na={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ku=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,T=(o&3)<<4|c>>4;let v=(c&15)<<2|d>>6,R=d&63;h||(R=64,a||(v=64)),r.push(e[m],e[T],e[v],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(vl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ku(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||T==null)throw new Gu;const v=o<<2|c>>4;if(r.push(v),d!==64){const R=c<<4&240|d>>2;if(r.push(R),T!==64){const P=d<<6&192|T;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wu=function(n){const t=vl(n);return El.encodeByteArray(t,!0)},_r=function(n){return Wu(n).replace(/\./g,"")},Qu=function(n){try{return El.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Yu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xu=()=>Yu().__FIREBASE_DEFAULTS__,Ju=()=>{if(typeof process>"u"||typeof na>"u")return;const n=na.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Qu(n[1]);return t&&JSON.parse(t)},si=()=>{try{return Xu()||Ju()||Zu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},th=n=>{var t,e;return(e=(t=si())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},eh=n=>{const t=th(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Tl=()=>{var n;return(n=si())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function rh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_r(JSON.stringify(e)),_r(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ih(){var n;const t=(n=si())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oh(){return!ih()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ah(){try{return typeof indexedDB=="object"}catch{return!1}}function lh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="FirebaseError";class $e extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ch,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?uh(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new $e(s,c,r)}}function uh(n,t){return n.replace(hh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const hh=/\{\$([^}]+)}/g;function Ss(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ra(o)&&ra(a)){if(!Ss(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ra(n){return n!==null&&typeof n=="object"}/**
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
 */function vn(n){return n&&n._delegate?n._delegate:n}class En{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const le="[DEFAULT]";/**
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
 */class dh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new nh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ph(t))try{this.getOrInitializeService({instanceIdentifier:le})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=le){return this.instances.has(t)}getOptions(t=le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=le){return this.component?this.component.multipleInstances?t:le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fh(n){return n===le?void 0:n}function ph(n){return n.instantiationMode==="EAGER"}/**
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
 */class mh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new dh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const _h={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},gh=H.INFO,yh={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},vh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=yh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Il{constructor(t){this.name=t,this._logLevel=gh,this._logHandler=vh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_h[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const Eh=(n,t)=>t.some(e=>n instanceof e);let sa,ia;function Th(){return sa||(sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wh(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Al=new WeakMap,Ps=new WeakMap,bl=new WeakMap,fs=new WeakMap,ii=new WeakMap;function Ih(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Xt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Al.set(e,n)}).catch(()=>{}),ii.set(t,n),t}function Ah(n){if(Ps.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ps.set(n,t)}let Cs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ps.get(n);if(t==="objectStoreNames")return n.objectStoreNames||bl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Xt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function bh(n){Cs=n(Cs)}function Rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ps(this),t,...e);return bl.set(r,t.sort?t.sort():[t]),Xt(r)}:wh().includes(n)?function(...t){return n.apply(ps(this),t),Xt(Al.get(this))}:function(...t){return Xt(n.apply(ps(this),t))}}function Sh(n){return typeof n=="function"?Rh(n):(n instanceof IDBTransaction&&Ah(n),Eh(n,Th())?new Proxy(n,Cs):n)}function Xt(n){if(n instanceof IDBRequest)return Ih(n);if(fs.has(n))return fs.get(n);const t=Sh(n);return t!==n&&(fs.set(n,t),ii.set(t,n)),t}const ps=n=>ii.get(n);function Ph(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Xt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Xt(a.result),h.oldVersion,h.newVersion,Xt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ch=["get","getKey","getAll","getAllKeys","count"],Vh=["put","add","delete","clear"],ms=new Map;function oa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ms.get(t))return ms.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Vh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ch.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return ms.set(t,o),o}bh(n=>({...n,get:(t,e,r)=>oa(t,e)||n.get(t,e,r),has:(t,e)=>!!oa(t,e)||n.has(t,e)}));/**
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
 */class Dh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(kh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function kh(n){const t=n.getComponent();return t?.type==="VERSION"}const Vs="@firebase/app",aa="0.10.13";/**
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
 */const qt=new Il("@firebase/app"),Nh="@firebase/app-compat",Mh="@firebase/analytics-compat",xh="@firebase/analytics",Oh="@firebase/app-check-compat",Lh="@firebase/app-check",Fh="@firebase/auth",Uh="@firebase/auth-compat",Bh="@firebase/database",$h="@firebase/data-connect",qh="@firebase/database-compat",jh="@firebase/functions",zh="@firebase/functions-compat",Hh="@firebase/installations",Kh="@firebase/installations-compat",Gh="@firebase/messaging",Wh="@firebase/messaging-compat",Qh="@firebase/performance",Yh="@firebase/performance-compat",Xh="@firebase/remote-config",Jh="@firebase/remote-config-compat",Zh="@firebase/storage",td="@firebase/storage-compat",ed="@firebase/firestore",nd="@firebase/vertexai-preview",rd="@firebase/firestore-compat",sd="firebase",id="10.14.1";/**
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
 */const Ds="[DEFAULT]",od={[Vs]:"fire-core",[Nh]:"fire-core-compat",[xh]:"fire-analytics",[Mh]:"fire-analytics-compat",[Lh]:"fire-app-check",[Oh]:"fire-app-check-compat",[Fh]:"fire-auth",[Uh]:"fire-auth-compat",[Bh]:"fire-rtdb",[$h]:"fire-data-connect",[qh]:"fire-rtdb-compat",[jh]:"fire-fn",[zh]:"fire-fn-compat",[Hh]:"fire-iid",[Kh]:"fire-iid-compat",[Gh]:"fire-fcm",[Wh]:"fire-fcm-compat",[Qh]:"fire-perf",[Yh]:"fire-perf-compat",[Xh]:"fire-rc",[Jh]:"fire-rc-compat",[Zh]:"fire-gcs",[td]:"fire-gcs-compat",[ed]:"fire-fst",[rd]:"fire-fst-compat",[nd]:"fire-vertex","fire-js":"fire-js",[sd]:"fire-js-all"};/**
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
 */const gr=new Map,ad=new Map,ks=new Map;function la(n,t){try{n.container.addComponent(t)}catch(e){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function yr(n){const t=n.name;if(ks.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;ks.set(t,n);for(const e of gr.values())la(e,n);for(const e of ad.values())la(e,n);return!0}function ld(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const cd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new wl("app","Firebase",cd);/**
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
 */class ud{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const hd=id;function Rl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ds,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(e||(e=Tl()),!e)throw Jt.create("no-options");const o=gr.get(s);if(o){if(Ss(e,o.options)&&Ss(r,o.config))return o;throw Jt.create("duplicate-app",{appName:s})}const a=new mh(s);for(const h of ks.values())a.addComponent(h);const c=new ud(e,r,a);return gr.set(s,c),c}function dd(n=Ds){const t=gr.get(n);if(!t&&n===Ds&&Tl())return Rl();if(!t)throw Jt.create("no-app",{appName:n});return t}function Se(n,t,e){var r;let s=(r=od[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}yr(new En(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const fd="firebase-heartbeat-database",pd=1,Tn="firebase-heartbeat-store";let _s=null;function Sl(){return _s||(_s=Ph(fd,pd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Jt.create("idb-open",{originalErrorMessage:n.message})})),_s}async function md(n){try{const e=(await Sl()).transaction(Tn),r=await e.objectStore(Tn).get(Pl(n));return await e.done,r}catch(t){if(t instanceof $e)qt.warn(t.message);else{const e=Jt.create("idb-get",{originalErrorMessage:t?.message});qt.warn(e.message)}}}async function ca(n,t){try{const r=(await Sl()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(t,Pl(n)),await r.done}catch(e){if(e instanceof $e)qt.warn(e.message);else{const r=Jt.create("idb-set",{originalErrorMessage:e?.message});qt.warn(r.message)}}}function Pl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _d=1024,gd=30*24*60*60*1e3;class yd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ed(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ua();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=gd}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ua(),{heartbeatsToSend:r,unsentEntries:s}=vd(this._heartbeatsCache.heartbeats),o=_r(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return qt.warn(e),""}}}function ua(){return new Date().toISOString().substring(0,10)}function vd(n,t=_d){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ha(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ha(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ed{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ah()?lh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await md(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ha(n){return _r(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Td(n){yr(new En("platform-logger",t=>new Dh(t),"PRIVATE")),yr(new En("heartbeat",t=>new yd(t),"PRIVATE")),Se(Vs,aa,n),Se(Vs,aa,"esm2017"),Se("fire-js","")}Td("");var wd="firebase",Id="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se(wd,Id,"app");var da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,Cl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function p(){}p.prototype=g.prototype,I.D=g.prototype,I.prototype=new p,I.prototype.constructor=I,I.C=function(E,w,b){for(var _=Array(arguments.length-2),et=2;et<arguments.length;et++)_[et-2]=arguments[et];return g.prototype[w].apply(E,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,p){p||(p=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(p++)|g.charCodeAt(p++)<<8|g.charCodeAt(p++)<<16|g.charCodeAt(p++)<<24;else for(w=0;16>w;++w)E[w]=g[p++]|g[p++]<<8|g[p++]<<16|g[p++]<<24;g=I.g[0],p=I.g[1],w=I.g[2];var b=I.g[3],_=g+(b^p&(w^b))+E[0]+3614090360&4294967295;g=p+(_<<7&4294967295|_>>>25),_=b+(w^g&(p^w))+E[1]+3905402710&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(p^b&(g^p))+E[2]+606105819&4294967295,w=b+(_<<17&4294967295|_>>>15),_=p+(g^w&(b^g))+E[3]+3250441966&4294967295,p=w+(_<<22&4294967295|_>>>10),_=g+(b^p&(w^b))+E[4]+4118548399&4294967295,g=p+(_<<7&4294967295|_>>>25),_=b+(w^g&(p^w))+E[5]+1200080426&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(p^b&(g^p))+E[6]+2821735955&4294967295,w=b+(_<<17&4294967295|_>>>15),_=p+(g^w&(b^g))+E[7]+4249261313&4294967295,p=w+(_<<22&4294967295|_>>>10),_=g+(b^p&(w^b))+E[8]+1770035416&4294967295,g=p+(_<<7&4294967295|_>>>25),_=b+(w^g&(p^w))+E[9]+2336552879&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(p^b&(g^p))+E[10]+4294925233&4294967295,w=b+(_<<17&4294967295|_>>>15),_=p+(g^w&(b^g))+E[11]+2304563134&4294967295,p=w+(_<<22&4294967295|_>>>10),_=g+(b^p&(w^b))+E[12]+1804603682&4294967295,g=p+(_<<7&4294967295|_>>>25),_=b+(w^g&(p^w))+E[13]+4254626195&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(p^b&(g^p))+E[14]+2792965006&4294967295,w=b+(_<<17&4294967295|_>>>15),_=p+(g^w&(b^g))+E[15]+1236535329&4294967295,p=w+(_<<22&4294967295|_>>>10),_=g+(w^b&(p^w))+E[1]+4129170786&4294967295,g=p+(_<<5&4294967295|_>>>27),_=b+(p^w&(g^p))+E[6]+3225465664&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^p&(b^g))+E[11]+643717713&4294967295,w=b+(_<<14&4294967295|_>>>18),_=p+(b^g&(w^b))+E[0]+3921069994&4294967295,p=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(p^w))+E[5]+3593408605&4294967295,g=p+(_<<5&4294967295|_>>>27),_=b+(p^w&(g^p))+E[10]+38016083&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^p&(b^g))+E[15]+3634488961&4294967295,w=b+(_<<14&4294967295|_>>>18),_=p+(b^g&(w^b))+E[4]+3889429448&4294967295,p=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(p^w))+E[9]+568446438&4294967295,g=p+(_<<5&4294967295|_>>>27),_=b+(p^w&(g^p))+E[14]+3275163606&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^p&(b^g))+E[3]+4107603335&4294967295,w=b+(_<<14&4294967295|_>>>18),_=p+(b^g&(w^b))+E[8]+1163531501&4294967295,p=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(p^w))+E[13]+2850285829&4294967295,g=p+(_<<5&4294967295|_>>>27),_=b+(p^w&(g^p))+E[2]+4243563512&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^p&(b^g))+E[7]+1735328473&4294967295,w=b+(_<<14&4294967295|_>>>18),_=p+(b^g&(w^b))+E[12]+2368359562&4294967295,p=w+(_<<20&4294967295|_>>>12),_=g+(p^w^b)+E[5]+4294588738&4294967295,g=p+(_<<4&4294967295|_>>>28),_=b+(g^p^w)+E[8]+2272392833&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^p)+E[11]+1839030562&4294967295,w=b+(_<<16&4294967295|_>>>16),_=p+(w^b^g)+E[14]+4259657740&4294967295,p=w+(_<<23&4294967295|_>>>9),_=g+(p^w^b)+E[1]+2763975236&4294967295,g=p+(_<<4&4294967295|_>>>28),_=b+(g^p^w)+E[4]+1272893353&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^p)+E[7]+4139469664&4294967295,w=b+(_<<16&4294967295|_>>>16),_=p+(w^b^g)+E[10]+3200236656&4294967295,p=w+(_<<23&4294967295|_>>>9),_=g+(p^w^b)+E[13]+681279174&4294967295,g=p+(_<<4&4294967295|_>>>28),_=b+(g^p^w)+E[0]+3936430074&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^p)+E[3]+3572445317&4294967295,w=b+(_<<16&4294967295|_>>>16),_=p+(w^b^g)+E[6]+76029189&4294967295,p=w+(_<<23&4294967295|_>>>9),_=g+(p^w^b)+E[9]+3654602809&4294967295,g=p+(_<<4&4294967295|_>>>28),_=b+(g^p^w)+E[12]+3873151461&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^p)+E[15]+530742520&4294967295,w=b+(_<<16&4294967295|_>>>16),_=p+(w^b^g)+E[2]+3299628645&4294967295,p=w+(_<<23&4294967295|_>>>9),_=g+(w^(p|~b))+E[0]+4096336452&4294967295,g=p+(_<<6&4294967295|_>>>26),_=b+(p^(g|~w))+E[7]+1126891415&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~p))+E[14]+2878612391&4294967295,w=b+(_<<15&4294967295|_>>>17),_=p+(b^(w|~g))+E[5]+4237533241&4294967295,p=w+(_<<21&4294967295|_>>>11),_=g+(w^(p|~b))+E[12]+1700485571&4294967295,g=p+(_<<6&4294967295|_>>>26),_=b+(p^(g|~w))+E[3]+2399980690&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~p))+E[10]+4293915773&4294967295,w=b+(_<<15&4294967295|_>>>17),_=p+(b^(w|~g))+E[1]+2240044497&4294967295,p=w+(_<<21&4294967295|_>>>11),_=g+(w^(p|~b))+E[8]+1873313359&4294967295,g=p+(_<<6&4294967295|_>>>26),_=b+(p^(g|~w))+E[15]+4264355552&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~p))+E[6]+2734768916&4294967295,w=b+(_<<15&4294967295|_>>>17),_=p+(b^(w|~g))+E[13]+1309151649&4294967295,p=w+(_<<21&4294967295|_>>>11),_=g+(w^(p|~b))+E[4]+4149444226&4294967295,g=p+(_<<6&4294967295|_>>>26),_=b+(p^(g|~w))+E[11]+3174756917&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~p))+E[2]+718787259&4294967295,w=b+(_<<15&4294967295|_>>>17),_=p+(b^(w|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var p=g-this.blockSize,E=this.B,w=this.h,b=0;b<g;){if(w==0)for(;b<=p;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<g;)if(E[w++]=I.charCodeAt(b++),w==this.blockSize){s(this,E),w=0;break}}else for(;b<g;)if(E[w++]=I[b++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var p=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=p&255,p/=256;for(this.u(I),I=Array(16),g=p=0;4>g;++g)for(var E=0;32>E;E+=8)I[p++]=this.g[g]>>>E&255;return I};function o(I,g){var p=c;return Object.prototype.hasOwnProperty.call(p,I)?p[I]:p[I]=g(I)}function a(I,g){this.h=g;for(var p=[],E=!0,w=I.length-1;0<=w;w--){var b=I[w]|0;E&&b==g||(p[w]=b,E=!1)}this.g=p}var c={};function h(I){return-128<=I&&128>I?o(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return T;if(0>I)return V(d(-I));for(var g=[],p=1,E=0;I>=p;E++)g[E]=I/p|0,p*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return V(m(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(g,8)),E=T,w=0;w<I.length;w+=8){var b=Math.min(8,I.length-w),_=parseInt(I.substring(w,w+b),g);8>b?(b=d(Math.pow(g,b)),E=E.j(b).add(d(_))):(E=E.j(p),E=E.add(d(_)))}return E}var T=h(0),v=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var I=0,g=1,p=0;p<this.g.length;p++){var E=this.i(p);I+=(0<=E?E:4294967296+E)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(N(this))return"-"+V(this).toString(I);for(var g=d(Math.pow(I,6)),p=this,E="";;){var w=z(p,g).g;p=L(p,w.j(g));var b=((0<p.g.length?p.g[0]:p.h)>>>0).toString(I);if(p=w,P(p))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=L(this,I),N(I)?-1:P(I)?0:1};function V(I){for(var g=I.g.length,p=[],E=0;E<g;E++)p[E]=~I.g[E];return new a(p,~I.h).add(v)}n.abs=function(){return N(this)?V(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),p=[],E=0,w=0;w<=g;w++){var b=E+(this.i(w)&65535)+(I.i(w)&65535),_=(b>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);E=_>>>16,b&=65535,_&=65535,p[w]=_<<16|b}return new a(p,p[p.length-1]&-2147483648?-1:0)};function L(I,g){return I.add(V(g))}n.j=function(I){if(P(this)||P(I))return T;if(N(this))return N(I)?V(this).j(V(I)):V(V(this).j(I));if(N(I))return V(this.j(V(I)));if(0>this.l(R)&&0>I.l(R))return d(this.m()*I.m());for(var g=this.g.length+I.g.length,p=[],E=0;E<2*g;E++)p[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<I.g.length;w++){var b=this.i(E)>>>16,_=this.i(E)&65535,et=I.i(w)>>>16,Mt=I.i(w)&65535;p[2*E+2*w]+=_*Mt,O(p,2*E+2*w),p[2*E+2*w+1]+=b*Mt,O(p,2*E+2*w+1),p[2*E+2*w+1]+=_*et,O(p,2*E+2*w+1),p[2*E+2*w+2]+=b*et,O(p,2*E+2*w+2)}for(E=0;E<g;E++)p[E]=p[2*E+1]<<16|p[2*E];for(E=g;E<2*g;E++)p[E]=0;return new a(p,0)};function O(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function $(I,g){this.g=I,this.h=g}function z(I,g){if(P(g))throw Error("division by zero");if(P(I))return new $(T,T);if(N(I))return g=z(V(I),g),new $(V(g.g),V(g.h));if(N(g))return g=z(I,V(g)),new $(V(g.g),g.h);if(30<I.g.length){if(N(I)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var p=v,E=g;0>=E.l(I);)p=Y(p),E=Y(E);var w=Q(p,1),b=Q(E,1);for(E=Q(E,2),p=Q(p,2);!P(E);){var _=b.add(E);0>=_.l(I)&&(w=w.add(p),b=_),E=Q(E,1),p=Q(p,1)}return g=L(I,w.j(g)),new $(w,g)}for(w=T;0<=I.l(g);){for(p=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(p)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(p),_=b.j(g);N(_)||0<_.l(I);)p-=E,b=d(p),_=b.j(g);P(b)&&(b=v),w=w.add(b),I=L(I,_)}return new $(w,I)}n.A=function(I){return z(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),p=[],E=0;E<g;E++)p[E]=this.i(E)&I.i(E);return new a(p,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),p=[],E=0;E<g;E++)p[E]=this.i(E)|I.i(E);return new a(p,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),p=[],E=0;E<g;E++)p[E]=this.i(E)^I.i(E);return new a(p,this.h^I.h)};function Y(I){for(var g=I.g.length+1,p=[],E=0;E<g;E++)p[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(p,I.h)}function Q(I,g){var p=g>>5;g%=32;for(var E=I.g.length-p,w=[],b=0;b<E;b++)w[b]=0<g?I.i(b+p)>>>g|I.i(b+p+1)<<32-g:I.i(b+p);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ue=a}).apply(typeof da<"u"?da:typeof self<"u"?self:typeof window<"u"?window:{});var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vl,cn,Dl,cr,Ns,kl,Nl,Ml;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof tr=="object"&&tr];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break t;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var S=u++;return{value:l(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,u){return i.call.apply(i.bind,arguments)}function T(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function v(i,l,u){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,v.apply(null,arguments)}function R(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,S){for(var k=Array(arguments.length-2),X=2;X<arguments.length;X++)k[X-2]=arguments[X];return l.prototype[A].apply(f,k)}}function N(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function V(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,S=f.length||0;i.length=A+S;for(let k=0;k<S;k++)i[A+k]=f[k]}else i.push(f)}}class L{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function z(i){return z[" "](i),i}z[" "]=function(){};var Y=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Q(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function I(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function g(i){const l={};for(const u in i)l[u]=i[u];return l}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let S=0;S<p.length;S++)u=p[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function w(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function b(i){c.setTimeout(()=>{throw i},0)}function _(){var i=$r;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class et{constructor(){this.h=this.g=null}add(l,u){const f=Mt.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Mt=new L(()=>new Xc,i=>i.reset());class Xc{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let He,Ke=!1,$r=new et,qi=()=>{const i=c.Promise.resolve(void 0);He=()=>{i.then(Jc)}};var Jc=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(u){b(u)}var l=Mt;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Ke=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Zc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function Ge(i,l){if(gt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Y){t:{try{z(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:tu[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ge.aa.h.call(this)}}P(Ge,gt);var tu={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Nn="closure_listenable_"+(1e6*Math.random()|0),eu=0;function nu(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++eu,this.da=this.fa=!1}function Mn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function xn(i){this.src=i,this.g={},this.h=0}xn.prototype.add=function(i,l,u,f,A){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var k=jr(i,l,f,A);return-1<k?(l=i[k],u||(l.fa=!1)):(l=new nu(l,this.src,S,!!f,A),l.fa=u,i.push(l)),l};function qr(i,l){var u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(Mn(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function jr(i,l,u,f){for(var A=0;A<i.length;++A){var S=i[A];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==f)return A}return-1}var zr="closure_lm_"+(1e6*Math.random()|0),Hr={};function ji(i,l,u,f,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)ji(i,l[S],u,f,A);return null}return u=Ki(u),i&&i[Nn]?i.K(l,u,d(f)?!!f.capture:!1,A):ru(i,l,u,!1,f,A)}function ru(i,l,u,f,A,S){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,X=Gr(i);if(X||(i[zr]=X=new xn(i)),u=X.add(l,u,f,k,S),u.proxy)return u;if(f=su(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)Zc||(A=k),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(Hi(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function su(){function i(u){return l.call(i.src,i.listener,u)}const l=iu;return i}function zi(i,l,u,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)zi(i,l[S],u,f,A);else f=d(f)?!!f.capture:!!f,u=Ki(u),i&&i[Nn]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],u=jr(S,u,f,A),-1<u&&(Mn(S[u]),Array.prototype.splice.call(S,u,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=Gr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=jr(l,u,f,A)),(u=-1<i?l[i]:null)&&Kr(u))}function Kr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Nn])qr(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(Hi(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Gr(l))?(qr(u,i),u.h==0&&(u.src=null,l[zr]=null)):Mn(i)}}}function Hi(i){return i in Hr?Hr[i]:Hr[i]="on"+i}function iu(i,l){if(i.da)i=!0;else{l=new Ge(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&Kr(i),i=u.call(f,l)}return i}function Gr(i){return i=i[zr],i instanceof xn?i:null}var Wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ki(i){return typeof i=="function"?i:(i[Wr]||(i[Wr]=function(l){return i.handleEvent(l)}),i[Wr])}function yt(){zt.call(this),this.i=new xn(this),this.M=this,this.F=null}P(yt,zt),yt.prototype[Nn]=!0,yt.prototype.removeEventListener=function(i,l,u,f){zi(this,i,l,u,f)};function bt(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new gt(l,i);else if(l instanceof gt)l.target=l.target||i;else{var A=l;l=new gt(f,i),E(l,A)}if(A=!0,u)for(var S=u.length-1;0<=S;S--){var k=l.g=u[S];A=On(k,f,!0,l)&&A}if(k=l.g=i,A=On(k,f,!0,l)&&A,A=On(k,f,!1,l)&&A,u)for(S=0;S<u.length;S++)k=l.g=u[S],A=On(k,f,!1,l)&&A}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)Mn(u[f]);delete i.g[l],i.h--}}this.F=null},yt.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},yt.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function On(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var k=l[S];if(k&&!k.da&&k.capture==u){var X=k.listener,dt=k.ha||k.src;k.fa&&qr(i.i,k),A=X.call(dt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Gi(i,l,u){if(typeof i=="function")u&&(i=v(i,u));else if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Wi(i){i.g=Gi(()=>{i.g=null,i.i&&(i.i=!1,Wi(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class ou extends zt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Wi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(i){zt.call(this),this.h=i,this.g={}}P(We,zt);var Qi=[];function Yi(i){Q(i.g,function(l,u){this.g.hasOwnProperty(u)&&Kr(l)},i),i.g={}}We.prototype.N=function(){We.aa.N.call(this),Yi(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=c.JSON.stringify,au=c.JSON.parse,lu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Yr(){}Yr.prototype.h=null;function Xi(i){return i.h||(i.h=i.i())}function Ji(){}var Qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xr(){gt.call(this,"d")}P(Xr,gt);function Jr(){gt.call(this,"c")}P(Jr,gt);var re={},Zi=null;function Ln(){return Zi=Zi||new yt}re.La="serverreachability";function to(i){gt.call(this,re.La,i)}P(to,gt);function Ye(i){const l=Ln();bt(l,new to(l))}re.STAT_EVENT="statevent";function eo(i,l){gt.call(this,re.STAT_EVENT,i),this.stat=l}P(eo,gt);function Rt(i){const l=Ln();bt(l,new eo(l,i))}re.Ma="timingevent";function no(i,l){gt.call(this,re.Ma,i),this.size=l}P(no,gt);function Xe(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function Je(){this.g=!0}Je.prototype.xa=function(){this.g=!1};function cu(i,l,u,f,A,S){i.info(function(){if(i.g)if(S)for(var k="",X=S.split("&"),dt=0;dt<X.length;dt++){var G=X[dt].split("=");if(1<G.length){var vt=G[0];G=G[1];var Et=vt.split("_");k=2<=Et.length&&Et[1]=="type"?k+(vt+"="+G+"&"):k+(vt+"=redacted&")}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+k})}function uu(i,l,u,f,A,S,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+S+" "+k})}function ve(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+du(i,u)+(f?" "+f:"")})}function hu(i,l){i.info(function(){return"TIMEOUT: "+l})}Je.prototype.info=function(){};function du(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Qr(u)}catch{return l}}var Fn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ro={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zr;function Un(){}P(Un,Yr),Un.prototype.g=function(){return new XMLHttpRequest},Un.prototype.i=function(){return{}},Zr=new Un;function Ht(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new so}function so(){this.i=null,this.g="",this.h=!1}var io={},ts={};function es(i,l,u){i.L=1,i.v=jn(Ut(l)),i.m=u,i.P=!0,oo(i,null)}function oo(i,l){i.F=Date.now(),Bn(i),i.A=Ut(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),To(u.i,"t",f),i.C=0,u=i.j.J,i.h=new so,i.g=Uo(i.j,u?l:null,!i.m),0<i.O&&(i.M=new ou(v(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Qi[0]=A.toString()),A=Qi);for(var S=0;S<A.length;S++){var k=ji(u,A[S],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Ye(),cu(i.i,i.u,i.A,i.l,i.R,i.m)}Ht.prototype.ca=function(i){i=i.target;const l=this.M;l&&Bt(i)==3?l.j():this.Y(i)},Ht.prototype.Y=function(i){try{if(i==this.g)t:{const Et=Bt(this.g);var l=this.g.Ba();const we=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Po(this.g)))){this.J||Et!=4||l==7||(l==8||0>=we?Ye(3):Ye(2)),ns(this);var u=this.g.Z();this.X=u;e:if(ao(this)){var f=Po(this.g);i="";var A=f.length,S=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),Ze(this);var k="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(S&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,uu(this.i,this.u,this.A,this.l,this.R,Et,u),this.o){if(this.T&&!this.K){e:{if(this.g){var X,dt=this.g;if((X=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(X)){var G=X;break e}}G=null}if(u=G)ve(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,u);else{this.o=!1,this.s=3,Rt(12),se(this),Ze(this);break t}}if(this.P){u=!0;let kt;for(;!this.J&&this.C<k.length;)if(kt=fu(this,k),kt==ts){Et==4&&(this.s=4,Rt(14),u=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==io){this.s=4,Rt(15),ve(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else ve(this.i,this.l,kt,null),rs(this,kt);if(ao(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||k.length!=0||this.h.h||(this.s=1,Rt(16),u=!1),this.o=this.o&&u,!u)ve(this.i,this.l,k,"[Invalid Chunked Response]"),se(this),Ze(this);else if(0<k.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),cs(vt),vt.M=!0,Rt(11))}}else ve(this.i,this.l,k,null),rs(this,k);Et==4&&se(this),this.o&&!this.J&&(Et==4?xo(this.j,this):(this.o=!1,Bn(this)))}else Vu(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),se(this),Ze(this)}}}catch{}finally{}};function ao(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function fu(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?ts:(u=Number(l.substring(u,f)),isNaN(u)?io:(f+=1,f+u>l.length?ts:(l=l.slice(f,f+u),i.C=f+u,l)))}Ht.prototype.cancel=function(){this.J=!0,se(this)};function Bn(i){i.S=Date.now()+i.I,lo(i,i.I)}function lo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Xe(v(i.ba,i),l)}function ns(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ht.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(hu(this.i,this.A),this.L!=2&&(Ye(),Rt(17)),se(this),this.s=2,Ze(this)):lo(this,this.S-i)};function Ze(i){i.j.G==0||i.J||xo(i.j,i)}function se(i){ns(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Yi(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function rs(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||ss(u.h,i))){if(!i.K&&ss(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Qn(u),Gn(u);else break t;ls(u),Rt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Xe(v(u.Za,u),6e3));if(1>=ho(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else oe(u,11)}else if((i.K||u.g==i)&&Qn(u),!O(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let G=A[l];if(u.T=G[0],G=G[1],u.G==2)if(G[0]=="c"){u.K=G[1],u.ia=G[2];const vt=G[3];vt!=null&&(u.la=vt,u.j.info("VER="+u.la));const Et=G[4];Et!=null&&(u.Aa=Et,u.j.info("SVER="+u.Aa));const we=G[5];we!=null&&typeof we=="number"&&0<we&&(f=1.5*we,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const kt=i.g;if(kt){const Xn=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xn){var S=f.h;S.g||Xn.indexOf("spdy")==-1&&Xn.indexOf("quic")==-1&&Xn.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(is(S,S.h),S.h=null))}if(f.D){const us=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;us&&(f.ya=us,Z(f.I,f.D,us))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=i;if(f.qa=Fo(f,f.J?f.ia:null,f.W),k.K){fo(f.h,k);var X=k,dt=f.L;dt&&(X.I=dt),X.B&&(ns(X),Bn(X)),f.g=k}else No(f);0<u.i.length&&Wn(u)}else G[0]!="stop"&&G[0]!="close"||oe(u,7);else u.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?oe(u,7):as(u):G[0]!="noop"&&u.l&&u.l.ta(G),u.v=0)}}Ye(4)}catch{}}var pu=class{constructor(i,l){this.g=i,this.map=l}};function co(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function uo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ho(i){return i.h?1:i.g?i.g.size:0}function ss(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function is(i,l){i.g?i.g.add(l):i.h=l}function fo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}co.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function po(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return N(i.i)}function mu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function _u(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function mo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=_u(i),f=mu(i),A=f.length,S=0;S<A;S++)l.call(void 0,f[S],u&&u[S],i)}var _o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gu(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var S=i[u].substring(0,f);A=i[u].substring(f+1)}else S=i[u];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function ie(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ie){this.h=i.h,$n(this,i.j),this.o=i.o,this.g=i.g,qn(this,i.s),this.l=i.l;var l=i.i,u=new nn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),go(this,u),this.m=i.m}else i&&(l=String(i).match(_o))?(this.h=!1,$n(this,l[1]||"",!0),this.o=tn(l[2]||""),this.g=tn(l[3]||"",!0),qn(this,l[4]),this.l=tn(l[5]||"",!0),go(this,l[6]||"",!0),this.m=tn(l[7]||"")):(this.h=!1,this.i=new nn(null,this.h))}ie.prototype.toString=function(){var i=[],l=this.j;l&&i.push(en(l,yo,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(en(l,yo,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(en(u,u.charAt(0)=="/"?Eu:vu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",en(u,wu)),i.join("")};function Ut(i){return new ie(i)}function $n(i,l,u){i.j=u?tn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function qn(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function go(i,l,u){l instanceof nn?(i.i=l,Iu(i.i,i.h)):(u||(l=en(l,Tu)),i.i=new nn(l,i.h))}function Z(i,l,u){i.i.set(l,u)}function jn(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function tn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function en(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,yu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function yu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var yo=/[#\/\?@]/g,vu=/[#\?:]/g,Eu=/[#\?]/g,Tu=/[#\?@]/g,wu=/#/g;function nn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Kt(i){i.g||(i.g=new Map,i.h=0,i.i&&gu(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=nn.prototype,n.add=function(i,l){Kt(this),this.i=null,i=Ee(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function vo(i,l){Kt(i),l=Ee(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Eo(i,l){return Kt(i),l=Ee(i,l),i.g.has(l)}n.forEach=function(i,l){Kt(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){Kt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=i[f];for(let S=0;S<A.length;S++)u.push(l[f])}return u},n.V=function(i){Kt(this);let l=[];if(typeof i=="string")Eo(this,i)&&(l=l.concat(this.g.get(Ee(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},n.set=function(i,l){return Kt(this),this.i=null,i=Ee(this,i),Eo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function To(i,l,u){vo(i,l),0<u.length&&(i.i=null,i.g.set(Ee(i,l),N(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const S=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=S;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function Ee(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Iu(i,l){l&&!i.j&&(Kt(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(vo(this,f),To(this,A,u))},i)),i.j=l}function Au(i,l){const u=new Je;if(c.Image){const f=new Image;f.onload=R(Gt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Gt,u,"TestLoadImage: error",!1,l,f),f.onabort=R(Gt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Gt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function bu(i,l){const u=new Je,f=new AbortController,A=setTimeout(()=>{f.abort(),Gt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?Gt(u,"TestPingServer: ok",!0,l):Gt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Gt(u,"TestPingServer: error",!1,l)})}function Gt(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function Ru(){this.g=new lu}function Su(i,l,u){const f=u||"";try{mo(i,function(A,S){let k=A;d(A)&&(k=Qr(A)),l.push(f+S+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function zn(i){this.l=i.Ub||null,this.j=i.eb||!1}P(zn,Yr),zn.prototype.g=function(){return new Hn(this.l,this.j)},zn.prototype.i=function(i){return function(){return i}}({});function Hn(i,l){yt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Hn,yt),n=Hn.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,sn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function wo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?rn(this):sn(this),this.readyState==3&&wo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,rn(this))},n.Qa=function(i){this.g&&(this.response=i,rn(this))},n.ga=function(){this.g&&rn(this)};function rn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,sn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function sn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Io(i){let l="";return Q(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function os(i,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Io(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):Z(i,l,u))}function nt(i){yt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(nt,yt);var Pu=/^https?$/i,Cu=["POST","PUT"];n=nt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zr.g(),this.v=this.o?Xi(this.o):Xi(Zr),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){Ao(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Cu,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of u)this.g.setRequestHeader(S,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{So(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){Ao(this,S)}};function Ao(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,bo(i),Kn(i)}function bo(i){i.A||(i.A=!0,bt(i,"complete"),bt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,bt(this,"complete"),bt(this,"abort"),Kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kn(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ro(this):this.bb())},n.bb=function(){Ro(this)};function Ro(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Bt(i)!=4||i.Z()!=2)){if(i.u&&Bt(i)==4)Gi(i.Ea,0,i);else if(bt(i,"readystatechange"),Bt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=k===0){var A=String(i.D).match(_o)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Pu.test(A?A.toLowerCase():"")}u=f}if(u)bt(i,"complete"),bt(i,"success");else{i.m=6;try{var S=2<Bt(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",bo(i)}}finally{Kn(i)}}}}function Kn(i,l){if(i.g){So(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||bt(i,"ready");try{u.onreadystatechange=f}catch{}}}function So(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Bt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),au(l)}};function Po(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Vu(i){const l={};i=(i.g&&2<=Bt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(O(i[f]))continue;var u=w(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[A]||[];l[A]=S,S.push(u)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function on(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Co(i){this.Aa=0,this.i=[],this.j=new Je,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=on("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=on("baseRetryDelayMs",5e3,i),this.cb=on("retryDelaySeedMs",1e4,i),this.Wa=on("forwardChannelMaxRetries",2,i),this.wa=on("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new co(i&&i.concurrentRequestLimit),this.Da=new Ru,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Co.prototype,n.la=8,n.G=1,n.connect=function(i,l,u,f){Rt(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Fo(this,null,this.W),Wn(this)};function as(i){if(Vo(i),i.G==3){var l=i.U++,u=Ut(i.I);if(Z(u,"SID",i.K),Z(u,"RID",l),Z(u,"TYPE","terminate"),an(i,u),l=new Ht(i,i.j,l),l.L=2,l.v=jn(Ut(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Uo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Bn(l)}Lo(i)}function Gn(i){i.g&&(cs(i),i.g.cancel(),i.g=null)}function Vo(i){Gn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Qn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Wn(i){if(!uo(i.h)&&!i.s){i.s=!0;var l=i.Ga;He||qi(),Ke||(He(),Ke=!0),$r.add(l,i),i.B=0}}function Du(i,l){return ho(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Xe(v(i.Ga,i,l),Oo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Ht(this,this.j,i);let S=this.o;if(this.S&&(S?(S=g(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=ko(this,A,l),u=Ut(this.I),Z(u,"RID",i),Z(u,"CVER",22),this.D&&Z(u,"X-HTTP-Session-Id",this.D),an(this,u),S&&(this.O?l="headers="+encodeURIComponent(String(Io(S)))+"&"+l:this.m&&os(u,this.m,S)),is(this.h,A),this.Ua&&Z(u,"TYPE","init"),this.P?(Z(u,"$req",l),Z(u,"SID","null"),A.T=!0,es(A,u,null)):es(A,u,l),this.G=2}}else this.G==3&&(i?Do(this,i):this.i.length==0||uo(this.h)||Do(this))};function Do(i,l){var u;l?u=l.l:u=i.U++;const f=Ut(i.I);Z(f,"SID",i.K),Z(f,"RID",u),Z(f,"AID",i.T),an(i,f),i.m&&i.o&&os(f,i.m,i.o),u=new Ht(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ko(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),is(i.h,u),es(u,f,l)}function an(i,l){i.H&&Q(i.H,function(u,f){Z(l,f,u)}),i.l&&mo({},function(u,f){Z(l,f,u)})}function ko(i,l,u){u=Math.min(i.i.length,u);var f=i.l?v(i.l.Na,i.l,i):null;t:{var A=i.i;let S=-1;for(;;){const k=["count="+u];S==-1?0<u?(S=A[0].g,k.push("ofs="+S)):S=0:k.push("ofs="+S);let X=!0;for(let dt=0;dt<u;dt++){let G=A[dt].g;const vt=A[dt].map;if(G-=S,0>G)S=Math.max(0,A[dt].g-100),X=!1;else try{Su(vt,k,"req"+G+"_")}catch{f&&f(vt)}}if(X){f=k.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,f}function No(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;He||qi(),Ke||(He(),Ke=!0),$r.add(l,i),i.v=0}}function ls(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Xe(v(i.Fa,i),Oo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Mo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Xe(v(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Gn(this),Mo(this))};function cs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Mo(i){i.g=new Ht(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Ut(i.qa);Z(l,"RID","rpc"),Z(l,"SID",i.K),Z(l,"AID",i.T),Z(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(l,"TO",i.ja),Z(l,"TYPE","xmlhttp"),an(i,l),i.m&&i.o&&os(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=jn(Ut(l)),u.m=null,u.P=!0,oo(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Gn(this),ls(this),Rt(19))};function Qn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function xo(i,l){var u=null;if(i.g==l){Qn(i),cs(i),i.g=null;var f=2}else if(ss(i.h,l))u=l.D,fo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=Ln(),bt(f,new no(f,u)),Wn(i)}else No(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Du(i,l)||f==2&&ls(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:oe(i,5);break;case 4:oe(i,10);break;case 3:oe(i,6);break;default:oe(i,2)}}}function Oo(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function oe(i,l){if(i.j.info("Error code "+l),l==2){var u=v(i.fb,i),f=i.Xa;const A=!f;f=new ie(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$n(f,"https"),jn(f),A?Au(f.toString(),u):bu(f.toString(),u)}else Rt(2);i.G=0,i.l&&i.l.sa(l),Lo(i),Vo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Lo(i){if(i.G=0,i.ka=[],i.l){const l=po(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function Fo(i,l,u){var f=u instanceof ie?Ut(u):new ie(u);if(f.g!="")l&&(f.g=l+"."+f.g),qn(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new ie(null);f&&$n(S,f),l&&(S.g=l),A&&qn(S,A),u&&(S.l=u),f=S}return u=i.D,l=i.ya,u&&l&&Z(f,u,l),Z(f,"VER",i.la),an(i,f),f}function Uo(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new nt(new zn({eb:u})):new nt(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bo(){}n=Bo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Yn(){}Yn.prototype.g=function(i,l){return new Vt(i,l)};function Vt(i,l){yt.call(this),this.g=new Co(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!O(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Te(this)}P(Vt,yt),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){as(this.g)},Vt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=Qr(i),i=u);l.i.push(new pu(l.Ya++,i)),l.G==3&&Wn(l)},Vt.prototype.N=function(){this.g.l=null,delete this.j,as(this.g),delete this.g,Vt.aa.N.call(this)};function $o(i){Xr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P($o,Xr);function qo(){Jr.call(this),this.status=1}P(qo,Jr);function Te(i){this.g=i}P(Te,Bo),Te.prototype.ua=function(){bt(this.g,"a")},Te.prototype.ta=function(i){bt(this.g,new $o(i))},Te.prototype.sa=function(i){bt(this.g,new qo)},Te.prototype.ra=function(){bt(this.g,"b")},Yn.prototype.createWebChannel=Yn.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Ml=function(){return new Yn},Nl=function(){return Ln()},kl=re,Ns={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fn.NO_ERROR=0,Fn.TIMEOUT=8,Fn.HTTP_ERROR=6,cr=Fn,ro.COMPLETE="complete",Dl=ro,Ji.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",yt.prototype.listen=yt.prototype.K,cn=Ji,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Vl=nt}).apply(typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{});const fa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Il("@firebase/firestore");function ln(){return me.logLevel}function M(n,...t){if(me.logLevel<=H.DEBUG){const e=t.map(oi);me.debug(`Firestore (${qe}): ${n}`,...e)}}function jt(n,...t){if(me.logLevel<=H.ERROR){const e=t.map(oi);me.error(`Firestore (${qe}): ${n}`,...e)}}function ke(n,...t){if(me.logLevel<=H.WARN){const e=t.map(oi);me.warn(`Firestore (${qe}): ${n}`,...e)}}function oi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n="Unexpected state"){const t=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: `+n;throw jt(t),new Error(t)}function rt(n,t){n||B()}function j(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends $e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ad{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(wt.UNAUTHENTICATED))}shutdown(){}}class bd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Rd{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){rt(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new he;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new he,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new he)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new xl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new wt(t)}}class Sd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Pd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Sd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){rt(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string"),this.R=e.token,new Cd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Dd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function W(n,t){return n<t?-1:n>t?1:0}function Ne(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ht.fromMillis(Date.now())}static fromDate(t){return ht.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ht(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new ht(0,0))}static max(){return new U(new ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e,r){e===void 0?e=0:e>t.length&&B(),r===void 0?r=t.length-e:r>t.length-e&&B(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return wn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends wn{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const Nd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends wn{construct(t,e,r){return new At(t,e,r)}static isValidIdentifier(t){return Nd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new x(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new At(e)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(tt.fromString(t))}static fromName(t){return new F(tt.fromString(t).popFirst(5))}static empty(){return new F(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new tt(t.slice()))}}function Md(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ht(e+1,0):new ht(e,r));return new te(s,F.empty(),t)}function xd(n){return new te(n.readTime,n.key,-1)}class te{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new te(U.min(),F.empty(),-1)}static max(){return new te(U.max(),F.empty(),-1)}}function Od(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:W(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Ld)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Ud(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class li{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}li.oe=-1;function Vr(n){return n==null}function vr(n){return n===0&&1/n==-1/0}function Bd(n){return typeof n=="number"&&Number.isInteger(n)&&!vr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Pn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ol(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new er(this.root,t,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new er(this.root,t,this.comparator,!0)}}class er{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=o??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ft(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const t=this.left.check();if(t!==this.right.check())throw B();return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ma(this.data.getIterator())}getIteratorFrom(t){return new ma(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class ma{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.fields=t,t.sort(At.comparator)}static empty(){return new Qt([])}unionWith(t){let e=new mt(At.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Ll extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ll("Invalid base64 string: "+o):o}}(t);return new _t(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const $d=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(rt(!!n),typeof n=="string"){let t=0;const e=$d.exec(n);if(rt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ui(n){const t=n.mapValue.fields.__previous_value__;return ci(t)?ui(t):t}function In(n){const t=ee(n.mapValue.fields.__local_write_time__.timestampValue);return new ht(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class An{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={mapValue:{}};function ge(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ci(n)?4:zd(n)?9007199254740991:jd(n)?10:11:B()}function Lt(n,t){if(n===t)return!0;const e=ge(n);if(e!==ge(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return In(n).isEqual(In(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ee(s.timestampValue),c=ee(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return _e(s.bytesValue).isEqual(_e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=st(s.doubleValue),c=st(o.doubleValue);return a===c?vr(a)===vr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(pa(a)!==pa(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Lt(a[h],c[h])))return!1;return!0}(n,t);default:return B()}}function bn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function Me(n,t){if(n===t)return 0;const e=ge(n),r=ge(t);if(e!==r)return W(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return _a(n.timestampValue,t.timestampValue);case 4:return _a(In(n),In(t));case 5:return W(n.stringValue,t.stringValue);case 6:return function(o,a){const c=_e(o),h=_e(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=W(c[d],h[d]);if(m!==0)return m}return W(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=W(st(o.latitude),st(a.latitude));return c!==0?c:W(st(o.longitude),st(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ga(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const T=o.fields||{},v=a.fields||{},R=(c=T.value)===null||c===void 0?void 0:c.arrayValue,P=(h=v.value)===null||h===void 0?void 0:h.arrayValue,N=W(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((m=P?.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:ga(R,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===nr.mapValue&&a===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(a===nr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const v=W(h[T],m[T]);if(v!==0)return v;const R=Me(c[h[T]],d[m[T]]);if(R!==0)return R}return W(h.length,m.length)}(n.mapValue,t.mapValue);default:throw B()}}function _a(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return W(n,t);const e=ee(n),r=ee(t),s=W(e.seconds,r.seconds);return s!==0?s:W(e.nanos,r.nanos)}function ga(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Me(e[s],r[s]);if(o)return o}return W(e.length,r.length)}function xe(n){return Ms(n)}function Ms(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ee(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ms(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ms(e.fields[a])}`;return s+"}"}(n.mapValue):B()}function ya(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function xs(n){return!!n&&"integerValue"in n}function hi(n){return!!n&&"arrayValue"in n}function va(n){return!!n&&"nullValue"in n}function Ea(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gs(n){return!!n&&"mapValue"in n}function jd(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function pn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Pn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=pn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=pn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function zd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!gs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pn(e)}setAll(t){let e=At.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=pn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());gs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];gs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Pn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new xt(pn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new It(t,0,U.min(),U.min(),U.min(),xt.empty(),0)}static newFoundDocument(t,e,r,s){return new It(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new It(t,2,e,U.min(),U.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,U.min(),U.min(),xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Er{constructor(t,e){this.position=t,this.inclusive=e}}function Ta(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=Me(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function wa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Hd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Fl{}class ct extends Fl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Gd(t,e,r):e==="array-contains"?new Yd(t,r):e==="in"?new Xd(t,r):e==="not-in"?new Jd(t,r):e==="array-contains-any"?new Zd(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Wd(t,r):new Qd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Me(e,this.value)):e!==null&&ge(this.value)===ge(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends Fl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Nt(t,e)}matches(t){return Ul(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ul(n){return n.op==="and"}function Bl(n){return Kd(n)&&Ul(n)}function Kd(n){for(const t of n.filters)if(t instanceof Nt)return!1;return!0}function Os(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+xe(n.value);if(Bl(n))return n.filters.map(t=>Os(t)).join(",");{const t=n.filters.map(e=>Os(e)).join(",");return`${n.op}(${t})`}}function $l(n,t){return n instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&Lt(r.value,s.value)}(n,t):n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&$l(a,s.filters[c]),!0):!1}(n,t):void B()}function ql(n){return n instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${xe(e.value)}`}(n):n instanceof Nt?function(e){return e.op.toString()+" {"+e.getFilters().map(ql).join(" ,")+"}"}(n):"Filter"}class Gd extends ct{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Wd extends ct{constructor(t,e){super(t,"in",e),this.keys=jl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Qd extends ct{constructor(t,e){super(t,"not-in",e),this.keys=jl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function jl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class Yd extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hi(e)&&bn(e.arrayValue,this.value)}}class Xd extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&bn(this.value.arrayValue,e)}}class Jd extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!bn(this.value.arrayValue,e)}}class Zd extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>bn(this.value.arrayValue,r))}}/**
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
 */class tf{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Ia(n,t=null,e=[],r=[],s=null,o=null,a=null){return new tf(n,t,e,r,s,o,a)}function di(n){const t=j(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Os(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>xe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>xe(r)).join(",")),t.ue=e}return t.ue}function fi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Hd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!$l(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!wa(n.startAt,t.startAt)&&wa(n.endAt,t.endAt)}function Ls(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ef(n,t,e,r,s,o,a,c){return new Cn(n,t,e,r,s,o,a,c)}function pi(n){return new Cn(n)}function Aa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zl(n){return n.collectionGroup!==null}function mn(n){const t=j(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new mt(At.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Tr(o,r))}),e.has(At.keyField().canonicalString())||t.ce.push(new Tr(At.keyField(),r))}return t.ce}function Ot(n){const t=j(n);return t.le||(t.le=nf(t,mn(n))),t.le}function nf(n,t){if(n.limitType==="F")return Ia(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Tr(s.field,o)});const e=n.endAt?new Er(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Er(n.startAt.position,n.startAt.inclusive):null;return Ia(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Fs(n,t){const e=n.filters.concat([t]);return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Us(n,t,e){return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Dr(n,t){return fi(Ot(n),Ot(t))&&n.limitType===t.limitType}function Hl(n){return`${di(Ot(n))}|lt:${n.limitType}`}function Ae(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ql(s)).join(", ")}]`),Vr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>xe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>xe(s)).join(",")),`Target(${r})`}(Ot(n))}; limitType=${n.limitType})`}function kr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of mn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=Ta(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,mn(r),s)||r.endAt&&!function(a,c,h){const d=Ta(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,mn(r),s))}(n,t)}function rf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kl(n){return(t,e)=>{let r=!1;for(const s of mn(n)){const o=sf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function sf(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Me(h,d):B()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Pn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Ol(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new ot(F.comparator);function ne(){return of}const Gl=new ot(F.comparator);function un(...n){let t=Gl;for(const e of n)t=t.insert(e.key,e);return t}function af(n){let t=Gl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ce(){return _n()}function Wl(){return _n()}function _n(){return new je(n=>n.toString(),(n,t)=>n.isEqual(t))}const lf=new mt(F.comparator);function K(...n){let t=lf;for(const e of n)t=t.add(e);return t}const cf=new mt(W);function uf(){return cf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vr(t)?"-0":t}}function Ql(n){return{integerValue:""+n}}function hf(n,t){return Bd(t)?Ql(t):mi(n,t)}/**
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
 */class Nr{constructor(){this._=void 0}}function df(n,t,e){return n instanceof Bs?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ci(o)&&(o=ui(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof wr?Yl(n,t):n instanceof Ir?Xl(n,t):function(s,o){const a=pf(s,o),c=ba(a)+ba(s.Pe);return xs(a)&&xs(s.Pe)?Ql(c):mi(s.serializer,c)}(n,t)}function ff(n,t,e){return n instanceof wr?Yl(n,t):n instanceof Ir?Xl(n,t):e}function pf(n,t){return n instanceof $s?function(r){return xs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Bs extends Nr{}class wr extends Nr{constructor(t){super(),this.elements=t}}function Yl(n,t){const e=Jl(t);for(const r of n.elements)e.some(s=>Lt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ir extends Nr{constructor(t){super(),this.elements=t}}function Xl(n,t){let e=Jl(t);for(const r of n.elements)e=e.filter(s=>!Lt(s,r));return{arrayValue:{values:e}}}class $s extends Nr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ba(n){return st(n.integerValue||n.doubleValue)}function Jl(n){return hi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof wr&&s instanceof wr||r instanceof Ir&&s instanceof Ir?Ne(r.elements,s.elements,Lt):r instanceof $s&&s instanceof $s?Lt(r.Pe,s.Pe):r instanceof Bs&&s instanceof Bs}(n.transform,t.transform)}class de{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new de}static exists(t){return new de(void 0,t)}static updateTime(t){return new de(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ur(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _i{}function Zl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new gf(n.key,de.none()):new gi(n.key,n.data,de.none());{const e=n.data,r=xt.empty();let s=new mt(At.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Mr(n.key,r,new Qt(s.toArray()),de.none())}}function _f(n,t,e){n instanceof gi?function(s,o,a){const c=s.value.clone(),h=Sa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Mr?function(s,o,a){if(!ur(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Sa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(tc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function gn(n,t,e,r){return n instanceof gi?function(o,a,c,h){if(!ur(o.precondition,a))return c;const d=o.value.clone(),m=Pa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Mr?function(o,a,c,h){if(!ur(o.precondition,a))return c;const d=Pa(o.fieldTransforms,h,a),m=a.data;return m.setAll(tc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,c){return ur(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Ra(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ne(r,s,(o,a)=>mf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class gi extends _i{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends _i{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function tc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Sa(n,t,e){const r=new Map;rt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,ff(a,c,e[s]))}return r}function Pa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,df(o,a,t))}return r}class gf extends _i{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&_f(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Wl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Zl(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),K())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(e,r)=>Ra(e,r))&&Ne(this.baseMutations,t.baseMutations,(e,r)=>Ra(e,r))}}/**
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
 */class vf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ef{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,q;function ec(n){if(n===void 0)return jt("GRPC error has no .code"),D.UNKNOWN;switch(n){case at.OK:return D.OK;case at.CANCELLED:return D.CANCELLED;case at.UNKNOWN:return D.UNKNOWN;case at.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case at.INTERNAL:return D.INTERNAL;case at.UNAVAILABLE:return D.UNAVAILABLE;case at.UNAUTHENTICATED:return D.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case at.NOT_FOUND:return D.NOT_FOUND;case at.ALREADY_EXISTS:return D.ALREADY_EXISTS;case at.PERMISSION_DENIED:return D.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case at.ABORTED:return D.ABORTED;case at.OUT_OF_RANGE:return D.OUT_OF_RANGE;case at.UNIMPLEMENTED:return D.UNIMPLEMENTED;case at.DATA_LOSS:return D.DATA_LOSS;default:return B()}}(q=at||(at={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tf(){return new TextEncoder}/**
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
 */const wf=new ue([4294967295,4294967295],0);function Ca(n){const t=Tf().encode(n),e=new Cl;return e.update(t),new Uint8Array(e.digest())}function Va(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,r],0),new ue([s,o],0)]}class yi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new hn(`Invalid padding: ${e}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new hn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ue.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(ue.fromNumber(r)));return s.compare(wf)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ca(t),[r,s]=Va(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new yi(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Ca(t),[r,s]=Va(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Vn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new xr(U.min(),s,new ot(W),ne(),K())}}class Vn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Vn(r,e,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class nc{constructor(t,e){this.targetId=t,this.me=e}}class rc{constructor(t,e,r=_t.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Da{constructor(){this.fe=0,this.ge=Na(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=K(),e=K(),r=K();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:B()}}),new Vn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Na()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,rt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class If{constructor(t){this.Le=t,this.Be=new Map,this.ke=ne(),this.qe=ka(),this.Qe=new ot(W)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:B()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Ls(o))if(r===0){const a=new F(o.path);this.Ue(e,a,It.newNoDocument(a,U.min()))}else rt(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=_e(r).toUint8Array()}catch(h){if(h instanceof Ll)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new yi(a,s,o)}catch(h){return ke(h instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Ls(c.target)){const h=new F(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,It.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=K();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new xr(t,e,this.Qe,this.ke,r);return this.ke=ne(),this.qe=ka(),this.Qe=new ot(W),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Da,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new mt(W),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Da),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ka(){return new ot(F.comparator)}function Na(){return new ot(F.comparator)}const Af={asc:"ASCENDING",desc:"DESCENDING"},bf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rf={and:"AND",or:"OR"};class Sf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function qs(n,t){return n.useProto3Json||Vr(t)?t:{value:t}}function js(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Pe(n){return rt(!!n),U.fromTimestamp(function(e){const r=ee(e);return new ht(r.seconds,r.nanos)}(n))}function ic(n,t){return zs(n,t).canonicalString()}function zs(n,t){const e=function(s){return new tt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function oc(n){const t=tt.fromString(n);return rt(hc(t)),t}function ys(n,t){const e=oc(t);if(e.get(1)!==n.databaseId.projectId)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(lc(e))}function ac(n,t){return ic(n.databaseId,t)}function Pf(n){const t=oc(n);return t.length===4?tt.emptyPath():lc(t)}function Ma(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lc(n){return rt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Cf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(rt(m===void 0||typeof m=="string"),_t.fromBase64String(m||"")):(rt(m===void 0||m instanceof Buffer||m instanceof Uint8Array),_t.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?D.UNKNOWN:ec(d.code);return new x(m,d.message||"")}(a);e=new rc(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ys(n,r.document.name),o=Pe(r.document.updateTime),a=r.document.createTime?Pe(r.document.createTime):U.min(),c=new xt({mapValue:{fields:r.document.fields}}),h=It.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new hr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ys(n,r.document),o=r.readTime?Pe(r.readTime):U.min(),a=It.newNoDocument(s,o),c=r.removedTargetIds||[];e=new hr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ys(n,r.document),o=r.removedTargetIds||[];e=new hr([],o,s,null)}else{if(!("filter"in t))return B();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Ef(s,o),c=r.targetId;e=new nc(c,a)}}return e}function Vf(n,t){return{documents:[ac(n,t.path)]}}function Df(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ac(n,s);const o=function(d){if(d.length!==0)return uc(Nt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:be(v.field),direction:Mf(v.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=qs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function kf(n){let t=Pf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){rt(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const v=cc(T);return v instanceof Nt&&Bl(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(v=>function(P){return new Tr(Re(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(e.orderBy));let c=null;e.limit&&(c=function(T){let v;return v=typeof T=="object"?T.value:T,Vr(v)?null:v}(e.limit));let h=null;e.startAt&&(h=function(T){const v=!!T.before,R=T.values||[];return new Er(R,v)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const v=!T.before,R=T.values||[];return new Er(R,v)}(e.endAt)),ef(t,s,a,o,c,"F",h,d)}function Nf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function cc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Re(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Re(e.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Re(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Re(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(e){return ct.create(Re(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Nt.create(e.compositeFilter.filters.map(r=>cc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(n):B()}function Mf(n){return Af[n]}function xf(n){return bf[n]}function Of(n){return Rf[n]}function be(n){return{fieldPath:n.canonicalString()}}function Re(n){return At.fromServerFormat(n.fieldPath)}function uc(n){return n instanceof ct?function(e){if(e.op==="=="){if(Ea(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NAN"}};if(va(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ea(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NOT_NAN"}};if(va(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:be(e.field),op:xf(e.op),value:e.value}}}(n):n instanceof Nt?function(e){const r=e.getFilters().map(s=>uc(s));return r.length===1?r[0]:{compositeFilter:{op:Of(e.op),filters:r}}}(n):B()}function hc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e,r,s,o=U.min(),a=U.min(),c=_t.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t){this.ct=t}}function Ff(n){const t=kf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Us(t,t.limit,"L"):t}/**
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
 */class Uf{constructor(){this.un=new Bf}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(te.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Bf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new mt(tt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new mt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oe(0)}static kn(){return new Oe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.changes=new je(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&gn(r.mutation,s,Qt.empty(),ht.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,K()).next(()=>r))}getLocalViewOfDocuments(t,e,r=K()){const s=ce();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=un();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ce();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,K()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=ne();const a=_n(),c=function(){return _n()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Mr)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),gn(m.mutation,d,m.mutation.getFieldMask(),ht.now())):a.set(d.key,Qt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var T;return c.set(d,new qf(m,(T=a.get(d))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const r=_n();let s=new ot((a,c)=>a-c),o=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Qt.empty();m=c.applyToLocalView(d,m),r.set(h,m);const T=(s.get(c.batchId)||K()).add(h);s=s.insert(c.batchId,T)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,T=Wl();m.forEach(v=>{if(!o.has(v)){const R=Zl(e.get(v),r.get(v));R!==null&&T.set(v,R),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(ce());let c=-1,h=o;return a.next(d=>C.forEach(d,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(v=>{h=h.insert(m,v)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,K())).next(m=>({batchId:c,changes:af(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let s=un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=un();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const d=function(T,v){return new Cn(v,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((T,v)=>{a=a.insert(T,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,It.newInvalidDocument(m)))});let c=un();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&gn(m.mutation,d,Qt.empty(),ht.now()),kr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Pe(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Ff(s.bundledQuery),readTime:Pe(s.readTime)}}(e)),C.resolve()}}/**
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
 */class Hf{constructor(){this.overlays=new ot(F.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ce();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=ce(),o=e.length+1,a=new F(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ot((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=ce(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=ce(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return C.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new vf(e,r));let o=this.Ir.get(e);o===void 0&&(o=K(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class Kf{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.Tr=new mt(ut.Er),this.dr=new mt(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new ut(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new F(new tt([])),r=new ut(e,t),s=new ut(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new F(new tt([])),r=new ut(e,t),s=new ut(e,t+1);let o=K();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ut(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return F.comparator(t.key,e.key)||W(t.wr,e.wr)}static Ar(t,e){return W(t.wr,e.wr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new mt(ut.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new yf(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new ut(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),s=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(W);return e.forEach(s=>{const o=new ut(s,0),a=new ut(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new ut(new F(o),0);let c=new mt(W);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),C.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){rt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,s=>{const o=new ut(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new ut(e,0),s=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t){this.Mr=t,this.docs=function(){return new ot(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let r=ne();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():It.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ne();const a=e.path,c=new F(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Od(xd(m),r)<=0||(s.has(m.key)||kr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){B()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Qf(this)}getSize(t){return C.resolve(this.size)}}class Qf extends $f{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.persistence=t,this.Nr=new je(e=>di(e),fi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vi,this.targetCount=0,this.kr=Oe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Oe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new li(0),this.Kr=!1,this.Kr=!0,this.$r=new Kf,this.referenceDelegate=t(this),this.Ur=new Yf(this),this.indexManager=new Uf,this.remoteDocumentCache=function(s){return new Wf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Lf(e),this.Gr=new zf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Gf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new Jf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Jf extends Fd{constructor(t){super(),this.currentSequenceNumber=t}}class Ei{constructor(t){this.persistence=t,this.Jr=new vi,this.Yr=null}static Zr(t){return new Ei(t)}get Xr(){if(this.Yr)return this.Yr;throw B()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=F.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=K(),s=K();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ti(t,e.fromCache,r,s)}}/**
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
 */class Zf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class tp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return oh()?8:Ud(sh())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Zf;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(ln()<=H.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(ln()<=H.DEBUG&&M("QueryEngine","Query:",Ae(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ln()<=H.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):C.resolve())}Yi(t,e){if(Aa(e))return C.resolve(null);let r=Ot(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Us(e,null,"F"),r=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=K(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,Us(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return Aa(e)||s.isEqual(U.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?C.resolve(null):(ln()<=H.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ae(e)),this.rs(t,a,e,Md(s,-1)).next(c=>c))})}ts(t,e){let r=new mt(Kl(t));return e.forEach((s,o)=>{kr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return ln()<=H.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.Ji.getDocumentsMatchingQuery(t,e,te.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new ot(W),this._s=new je(o=>di(o),fi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function np(n,t,e,r){return new ep(n,t,e,r)}async function dc(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=K();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function fc(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function rp(n,t){const e=j(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((m,T)=>{const v=s.get(T);if(!v)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,T)));let R=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?R=R.withResumeToken(_t.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(T,R),function(N,V,L){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(v,R,m)&&c.push(e.Ur.updateTargetData(o,R))});let h=ne(),d=K();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(sp(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(U.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(T=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return C.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function sp(n,t,e){let r=K(),s=K();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ne();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function ip(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Yt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Hs(n,t,e){const r=j(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Sn(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function xa(n,t,e){const r=j(n);let s=U.min(),o=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=j(h),v=T._s.get(m);return v!==void 0?C.resolve(T.os.get(v)):T.Ur.getTargetData(d,m)}(r,a,Ot(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:K())).next(c=>(op(r,rf(t),c),{documents:c,Ts:o})))}function op(n,t,e){let r=n.us.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Oa{constructor(){this.activeTargetIds=uf()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ap{constructor(){this.so=new Oa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Oa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class lp{_o(t){}shutdown(){}}/**
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
 */class La{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rr=null;function vs(){return rr===null?rr=function(){return 268435456+Math.round(2147483648*Math.random())}():rr++,"0x"+rr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class hp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=vs(),h=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(M("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw ke("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=cp[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=vs();return new Promise((a,c)=>{const h=new Vl;h.setWithCredentials(!0),h.listenOnce(Dl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case cr.NO_ERROR:const m=h.getResponseJson();M(Tt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case cr.TIMEOUT:M(Tt,`RPC '${t}' ${o} timed out`),c(new x(D.DEADLINE_EXCEEDED,"Request time out"));break;case cr.HTTP_ERROR:const T=h.getStatus();if(M(Tt,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v?.error;if(R&&R.status&&R.message){const P=function(V){const L=V.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(L)>=0?L:D.UNKNOWN}(R.status);c(new x(P,R.message))}else c(new x(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(D.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{M(Tt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);M(Tt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=vs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ml(),c=Nl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(Tt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const T=a.createWebChannel(m,h);let v=!1,R=!1;const P=new up({Io:V=>{R?M(Tt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(v||(M(Tt,`Opening RPC '${t}' stream ${s} transport.`),T.open(),v=!0),M(Tt,`RPC '${t}' stream ${s} sending:`,V),T.send(V))},To:()=>T.close()}),N=(V,L,O)=>{V.listen(L,$=>{try{O($)}catch(z){setTimeout(()=>{throw z},0)}})};return N(T,cn.EventType.OPEN,()=>{R||(M(Tt,`RPC '${t}' stream ${s} transport opened.`),P.yo())}),N(T,cn.EventType.CLOSE,()=>{R||(R=!0,M(Tt,`RPC '${t}' stream ${s} transport closed`),P.So())}),N(T,cn.EventType.ERROR,V=>{R||(R=!0,ke(Tt,`RPC '${t}' stream ${s} transport errored:`,V),P.So(new x(D.UNAVAILABLE,"The operation could not be completed")))}),N(T,cn.EventType.MESSAGE,V=>{var L;if(!R){const O=V.data[0];rt(!!O);const $=O,z=$.error||((L=$[0])===null||L===void 0?void 0:L.error);if(z){M(Tt,`RPC '${t}' stream ${s} received error:`,z);const Y=z.status;let Q=function(p){const E=at[p];if(E!==void 0)return ec(E)}(Y),I=z.message;Q===void 0&&(Q=D.INTERNAL,I="Unknown error status: "+Y+" with message "+z.message),R=!0,P.So(new x(Q,I)),T.close()}else M(Tt,`RPC '${t}' stream ${s} received:`,O),P.bo(O)}}),N(c,kl.STAT_EVENT,V=>{V.stat===Ns.PROXY?M(Tt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Ns.NOPROXY&&M(Tt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Es(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){return new Sf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new pc(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new x(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fp extends dp{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Cf(this.serializer,t),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Pe(a.readTime):U.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Ma(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ls(h)?{documents:Vf(o,h)}:{query:Df(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=sc(o,a.resumeToken);const d=qs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=js(o,a.snapshotVersion.toTimestamp());const d=qs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=Nf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Ma(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,zs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(D.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,zs(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jt(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{kn(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=j(h);d.L_.add(4),await Dn(d),d.q_.set("Unknown"),d.L_.delete(4),await Lr(d)}(this))})}),this.q_=new mp(r,s)}}async function Lr(n){if(kn(n))for(const t of n.B_)await t(!0)}async function Dn(n){for(const t of n.B_)await t(!1)}function mc(n,t){const e=j(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),bi(e)?Ai(e):ze(e).r_()&&Ii(e,t))}function wi(n,t){const e=j(n),r=ze(e);e.N_.delete(t),r.r_()&&_c(e,t),e.N_.size===0&&(r.r_()?r.o_():kn(e)&&e.q_.set("Unknown"))}function Ii(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ze(n).A_(t)}function _c(n,t){n.Q_.xe(t),ze(n).R_(t)}function Ai(n){n.Q_=new If({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),ze(n).start(),n.q_.v_()}function bi(n){return kn(n)&&!ze(n).n_()&&n.N_.size>0}function kn(n){return j(n).L_.size===0}function gc(n){n.Q_=void 0}async function gp(n){n.q_.set("Online")}async function yp(n){n.N_.forEach((t,e)=>{Ii(n,t)})}async function vp(n,t){gc(n),bi(n)?(n.q_.M_(t),Ai(n)):n.q_.set("Unknown")}async function Ep(n,t,e){if(n.q_.set("Online"),t instanceof rc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Fa(n,r)}else if(t instanceof hr?n.Q_.Ke(t):t instanceof nc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(U.min()))try{const r=await fc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(_t.EMPTY_BYTE_STRING,m.snapshotVersion)),_c(o,h);const T=new Yt(m.target,h,d,m.sequenceNumber);Ii(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Fa(n,r)}}async function Fa(n,t,e){if(!Sn(t))throw t;n.L_.add(1),await Dn(n),n.q_.set("Offline"),e||(e=()=>fc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Lr(n)})}async function Ua(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=kn(e);e.L_.add(3),await Dn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Lr(e)}async function Tp(n,t){const e=j(n);t?(e.L_.delete(2),await Lr(e)):t||(e.L_.add(2),await Dn(e),e.q_.set("Unknown"))}function ze(n){return n.K_||(n.K_=function(e,r,s){const o=j(e);return o.w_(),new fp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:gp.bind(null,n),Ro:yp.bind(null,n),mo:vp.bind(null,n),d_:Ep.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),bi(n)?Ai(n):n.q_.set("Unknown")):(await n.K_.stop(),gc(n))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new he,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new Ri(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yc(n,t){if(jt("AsyncQueue",`${t}: ${n}`),Sn(n))return new x(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=un(),this.sortedSet=new ot(this.comparator)}static emptySet(t){return new Ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.W_=new ot(F.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):B():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Le{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Le(t,e,Ce.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Dr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Ip{constructor(){this.queries=$a(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=j(e),o=s.queries;s.queries=$a(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new x(D.ABORTED,"Firestore shutting down"))}}function $a(){return new je(n=>Hl(n),Dr)}async function vc(n,t){const e=j(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new wp,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=yc(a,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Si(e)}async function Ec(n,t){const e=j(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Ap(n,t){const e=j(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Si(e)}function bp(n,t,e){const r=j(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Si(n){n.Y_.forEach(t=>{t.next()})}var Ks,qa;(qa=Ks||(Ks={})).ea="default",qa.Cache="cache";class Tc{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Le(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ks.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.key=t}}class Ic{constructor(t){this.key=t}}class Rp{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=Kl(t),this.Ra=new Ce(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Ba,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const v=s.get(m),R=kr(this.query,T)?T:null,P=!!v&&this.mutatedKeys.has(v.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;v&&R?v.data.isEqual(R.data)?P!==N&&(r.track({type:3,doc:R}),V=!0):this.ga(v,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.Aa(R,h)>0||d&&this.Aa(R,d)<0)&&(c=!0)):!v&&R?(r.track({type:0,doc:R}),V=!0):v&&!R&&(r.track({type:1,doc:v}),V=!0,(h||d)&&(c=!0)),V&&(R?(a=a.add(R),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,T)=>function(R,P){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return N(R)-N(P)}(m.type,T.type)||this.Aa(m.doc,T.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Le(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ba,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Ic(r))}),this.da.forEach(r=>{t.has(r)||e.push(new wc(r))}),e}ba(t){this.Ta=t.Ts,this.da=K();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Le.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Sp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Pp{constructor(t){this.key=t,this.va=!1}}class Cp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new je(c=>Hl(c),Dr),this.Ma=new Map,this.xa=new Set,this.Oa=new ot(F.comparator),this.Na=new Map,this.La=new vi,this.Ba={},this.ka=new Map,this.qa=Oe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Vp(n,t,e=!0){const r=Pc(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await Ac(r,t,e,!0),s}async function Dp(n,t){const e=Pc(n);await Ac(e,t,!0,!1)}async function Ac(n,t,e,r){const s=await ip(n.localStore,Ot(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await kp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&mc(n.remoteStore,s),c}async function kp(n,t,e,r,s){n.Ka=(T,v,R)=>async function(N,V,L,O){let $=V.view.ma(L);$.ns&&($=await xa(N.localStore,V.query,!1).then(({documents:I})=>V.view.ma(I,$)));const z=O&&O.targetChanges.get(V.targetId),Y=O&&O.targetMismatches.get(V.targetId)!=null,Q=V.view.applyChanges($,N.isPrimaryClient,z,Y);return za(N,V.targetId,Q.wa),Q.snapshot}(n,T,v,R);const o=await xa(n.localStore,t,!0),a=new Rp(t,o.Ts),c=a.ma(o.documents),h=Vn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);za(n,e,d.wa);const m=new Sp(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function Np(n,t,e){const r=j(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Dr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&wi(r.remoteStore,s.targetId),Gs(r,s.targetId)}).catch(ai)):(Gs(r,s.targetId),await Hs(r.localStore,s.targetId,!0))}async function Mp(n,t){const e=j(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),wi(e.remoteStore,r.targetId))}async function bc(n,t){const e=j(n);try{const r=await rp(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?rt(a.va):s.removedDocuments.size>0&&(rt(a.va),a.va=!1))}),await Sc(e,r,t)}catch(r){await ai(r)}}function ja(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=j(a);h.onlineState=c;let d=!1;h.queries.forEach((m,T)=>{for(const v of T.j_)v.Z_(c)&&(d=!0)}),d&&Si(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function xp(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new ot(F.comparator);a=a.insert(o,It.newNoDocument(o,U.min()));const c=K().add(o),h=new xr(U.min(),new Map,new ot(W),a,c);await bc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Pi(r)}else await Hs(r.localStore,t,!1).then(()=>Gs(r,t,e)).catch(ai)}function Gs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Rc(n,r)})}function Rc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(wi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Pi(n))}function za(n,t,e){for(const r of e)r instanceof wc?(n.La.addReference(r.key,t),Op(n,r)):r instanceof Ic?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Rc(n,r.key)):B()}function Op(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),Pi(n))}function Pi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new F(tt.fromString(t)),r=n.qa.next();n.Na.set(r,new Pp(e)),n.Oa=n.Oa.insert(e,r),mc(n.remoteStore,new Yt(Ot(pi(e.path)),r,"TargetPurposeLimboResolution",li.oe))}}async function Sc(n,t,e){const r=j(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=Ti.Wi(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=j(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(d,v=>C.forEach(v.$i,R=>m.persistence.referenceDelegate.addReference(T,v.targetId,R)).next(()=>C.forEach(v.Ui,R=>m.persistence.referenceDelegate.removeReference(T,v.targetId,R)))))}catch(T){if(!Sn(T))throw T;M("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const v=T.targetId;if(!T.fromCache){const R=m.os.get(v),P=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(P);m.os=m.os.insert(v,N)}}}(r.localStore,o))}async function Lp(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await dc(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new x(D.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Sc(e,r.hs)}}function Fp(n,t){const e=j(n),r=e.Na.get(t);if(r&&r.va)return K().add(r.key);{let s=K();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Pc(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=bc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xp.bind(null,t),t.Ca.d_=Ap.bind(null,t.eventManager),t.Ca.$a=bp.bind(null,t.eventManager),t}class Ar{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Or(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return np(this.persistence,new tp,t.initialUser,this.serializer)}Ga(t){return new Xf(Ei.Zr,this.serializer)}Wa(t){return new ap}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ar.provider={build:()=>new Ar};class Ws{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ja(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lp.bind(null,this.syncEngine),await Tp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ip}()}createDatastore(t){const e=Or(t.databaseInfo.databaseId),r=function(o){return new hp(o)}(t.databaseInfo);return function(o,a,c,h){return new pp(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new _p(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ja(this.syncEngine,e,0),function(){return La.D()?new La:new lp}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const T=new Cp(s,o,a,c,h,d);return m&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=j(s);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Dn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ws.provider={build:()=>new Ws};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new he;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=yc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ts(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await dc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ha(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Bp(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ua(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ua(t.remoteStore,s)),n._onlineComponents=t}async function Bp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ts(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await Ts(n,new Ar)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Ts(n,new Ar);return n._offlineComponents}async function $p(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Ha(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Ha(n,new Ws))),n._onlineComponents}async function Qs(n){const t=await $p(n),e=t.eventManager;return e.onListen=Vp.bind(null,t.syncEngine),e.onUnlisten=Np.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Dp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Mp.bind(null,t.syncEngine),e}function qp(n,t,e={}){const r=new he;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Cc({next:v=>{m.Za(),a.enqueueAndForget(()=>Ec(o,T)),v.fromCache&&h.source==="server"?d.reject(new x(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),T=new Tc(c,m,{includeMetadataChanges:!0,_a:!0});return vc(o,T)}(await Qs(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Vc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,t,e){if(!e)throw new x(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function zp(n,t,e,r){if(t===!0&&r===!0)throw new x(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ga(n){if(F.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":B()}function Ve(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fr(n);throw new x(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ci{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ad;switch(r.type){case"firstParty":return new Pd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ka.get(e);r&&(M("ComponentProvider","Removing Datastore"),Ka.delete(e),r.terminate())}(this),Promise.resolve()}}function Hp(n,t,e,r={}){var s;const o=(n=Ve(n,Ci))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=wt.MOCK_USER;else{c=rh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new wt(d)}n._authCredentials=new bd(new xl(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ye(this.firestore,t,this._query)}}class Ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new De(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ft(this.firestore,t,this._key)}}class De extends ye{constructor(t,e,r){super(t,e,pi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ft(this.firestore,null,new F(t))}withConverter(t){return new De(this.firestore,t,this._path)}}function Fe(n,t,...e){if(n=vn(n),jp("collection","path",t),n instanceof Ci){const r=tt.fromString(t,...e);return Ga(r),new De(n,null,r)}{if(!(n instanceof Ft||n instanceof De))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Ga(r),new De(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new pc(this,"async_queue_retry"),this.Vu=()=>{const r=Es();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Es();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Es();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new he;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Sn(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw jt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Ri.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&B()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Ya(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class br extends Ci{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Qa,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qa(t),this._firestoreClient=void 0,await t}}}function Kp(n,t){const e=typeof n=="object"?n:dd(),r=typeof n=="string"?n:"(default)",s=ld(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=eh("firestore");o&&Hp(s,...o)}return s}function Dc(n){if(n._terminated)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gp(n),n._firestoreClient}function Gp(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new qd(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Vc(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Up(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(_t.fromBase64String(t))}catch(e){throw new x(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ue(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}}/**
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
 */class Di{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=/^__.*__$/;function Mc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class ki{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ki(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ys(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Mc(this.Cu)&&Wp.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Qp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Or(t)}Qu(t,e,r,s=!1){return new ki({Cu:t,methodName:e,qu:r,path:At.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yp(n){const t=n._freezeSettings(),e=Or(n._databaseId);return new Qp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Xp(n,t,e,r=!1){return Ni(e,n.Qu(r?4:3,t))}function Ni(n,t){if(xc(n=vn(n)))return Zp("Unsupported field value:",t,n),Jp(n,t);if(n instanceof Nc)return function(r,s){if(!Mc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Ni(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=vn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ht.fromDate(r);return{timestampValue:js(s.serializer,o)}}if(r instanceof ht){const o=new ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:js(s.serializer,o)}}if(r instanceof Vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ue)return{bytesValue:sc(s.serializer,r._byteString)};if(r instanceof Ft){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ic(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Di)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return mi(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Fr(r)}`)}(n,t)}function Jp(n,t){const e={};return Ol(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pn(n,(r,s)=>{const o=Ni(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function xc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ht||n instanceof Vi||n instanceof Ue||n instanceof Ft||n instanceof Nc||n instanceof Di)}function Zp(n,t,e){if(!xc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Fr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}const tm=new RegExp("[~\\*/\\[\\]]");function em(n,t,e){if(t.search(tm)>=0)throw Ys(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new kc(...t.split("."))._internalPath}catch{throw Ys(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ys(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(D.INVALID_ARGUMENT,c+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new nm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class nm extends Oc{data(){return super.data()}}function Mi(n,t){return typeof t=="string"?em(n,t):t instanceof kc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xi{}class rm extends xi{}function Rn(n,t,...e){let r=[];t instanceof xi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Oi).length,c=o.filter(h=>h instanceof Ur).length;if(a>1||a>0&&c>0)throw new x(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ur extends rm{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ur(t,e,r)}_apply(t){const e=this._parse(t);return Fc(t._query,e),new ye(t.firestore,t.converter,Fs(t._query,e))}_parse(t){const e=Yp(t.firestore);return function(o,a,c,h,d,m,T){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ja(T,m);const R=[];for(const P of T)R.push(Xa(h,o,P));v={arrayValue:{values:R}}}else v=Xa(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ja(T,m),v=Xp(c,a,T,m==="in"||m==="not-in");return ct.create(d,m,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function fe(n,t,e){const r=t,s=Mi("where",n);return Ur._create(s,r,e)}class Oi extends xi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Oi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Nt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)Fc(a,h),a=Fs(a,h)}(t._query,e),new ye(t.firestore,t.converter,Fs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Xa(n,t,e){if(typeof(e=vn(e))=="string"){if(e==="")throw new x(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zl(t)&&e.indexOf("/")!==-1)throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(tt.fromString(e));if(!F.isDocumentKey(r))throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ya(n,new F(r))}if(e instanceof Ft)return ya(n,e._key);throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fr(e)}.`)}function Ja(n,t){if(!Array.isArray(n)||n.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Fc(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class sm{convertValue(t,e="none"){switch(ge(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw B()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Pn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>st(a.doubleValue));return new Di(o)}convertGeoPoint(t){return new Vi(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ui(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(In(t));default:return null}}convertTimestamp(t){const e=ee(t);return new ht(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=tt.fromString(t);rt(hc(r));const s=new An(r.get(1),r.get(3)),o=new F(r.popFirst(5));return s.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Uc extends Oc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Mi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class dr extends Uc{data(t={}){return super.data(t)}}class Bc{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new dn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new dr(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new dr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new dn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new dr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new dn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:im(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function im(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class Li extends sm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ft(this.firestore,null,e)}}function Rr(n){n=Ve(n,ye);const t=Ve(n.firestore,br),e=Dc(t),r=new Li(t);return Lc(n._query),qp(e,n._query).then(s=>new Bc(t,r,n,s))}function Za(n,...t){var e,r,s;n=vn(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ya(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ya(t[a])){const T=t[a];t[a]=(e=T.next)===null||e===void 0?void 0:e.bind(T),t[a+1]=(r=T.error)===null||r===void 0?void 0:r.bind(T),t[a+2]=(s=T.complete)===null||s===void 0?void 0:s.bind(T)}let h,d,m;if(n instanceof Ft)d=Ve(n.firestore,br),m=pi(n._key.path),h={next:T=>{t[a]&&t[a](om(d,n,T))},error:t[a+1],complete:t[a+2]};else{const T=Ve(n,ye);d=Ve(T.firestore,br),m=T._query;const v=new Li(d);h={next:R=>{t[a]&&t[a](new Bc(d,v,T,R))},error:t[a+1],complete:t[a+2]},Lc(n._query)}return function(v,R,P,N){const V=new Cc(N),L=new Tc(R,V,P);return v.asyncQueue.enqueueAndForget(async()=>vc(await Qs(v),L)),()=>{V.Za(),v.asyncQueue.enqueueAndForget(async()=>Ec(await Qs(v),L))}}(Dc(d),m,c,h)}function om(n,t,e){const r=e.docs.get(t._key),s=new Li(n);return new Uc(n,s,t._key,r,new dn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){qe=s})(hd),yr(new En("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new br(new Rd(r.getProvider("auth-internal")),new Vd(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Se(fa,"4.7.3",t),Se(fa,"4.7.3","esm2017")})();const am={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},lm="2008948704-db2goT00",Be=Kp(Rl(am));function $c(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}async function cm(){if(typeof liff>"u")throw new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้");if(await liff.init({liffId:lm}),!liff.isLoggedIn())return liff.login({redirectUri:location.href}),null;const n=await liff.getProfile(),t=await Rr(Rn(Fe(Be,"members"),fe("lineUserId","==",n.userId)));if(t.empty)throw new Error("ยังไม่พบบัญชีสมาชิกที่ผูกกับ LINE นี้ กรุณาเข้าใช้งานจากหน้าเว็บเดิมครั้งแรกก่อน");const e=t.docs.find(s=>s.data().realName)||t.docs[0],r=e.data();return{name:String(r.name||"").replace(/\s+/g," ").trim().toUpperCase(),memberId:e.id,pictureUrl:/^https:\/\//i.test(r.pictureUrl||"")?r.pictureUrl:"",isAdmin:r.role==="admin"||n.userId==="U0d739eea39c312e11c487e22861920d1"}}const qc=24*60*60*1e3,um=10*60*1e3,Fi="dm:v2:";function Ui(n,t){try{const e=localStorage.getItem(Fi+n);if(!e)return null;const{t:r,v:s}=JSON.parse(e);return Date.now()-r<t?s:null}catch{return null}}function Bi(n,t){try{localStorage.setItem(Fi+n,JSON.stringify({t:Date.now(),v:t}))}catch{}}function hm(){try{Object.keys(localStorage).filter(n=>n.startsWith(Fi)).forEach(n=>localStorage.removeItem(n))}catch{}}const dm=n=>String(n||"").replace(/\s+/g," ").trim().toUpperCase();async function fm(){const n=Ui("members",um);if(n)return n;const t=await Rr(Fe(Be,"members")),e=[...new Set(t.docs.map(r=>dm(r.data().name)).filter(Boolean))];return Bi("members",e),e}async function pm(n){const t=Ui("m:"+n,qc);if(t)return t;const[e,r]=await Promise.all([Rr(Rn(Fe(Be,"transactions"),fe("date",">=",`${n}-01`),fe("date","<=",`${n}-31`))),Rr(Rn(Fe(Be,"settlements"),fe("month","==",n)))]),s={transactions:e.docs.map(o=>({id:o.id,...o.data()})),settlements:r.docs.map(o=>({id:o.id,...o.data()}))};return Bi("m:"+n,s),s}function mm(n,t){const e={transactions:null,settlements:null},r=()=>{e.transactions&&e.settlements&&t({...e})},s=a=>t({error:a}),o=[Za(Rn(Fe(Be,"transactions"),fe("date",">=",`${n}-01`),fe("date","<=",`${n}-31`)),a=>{e.transactions=a.docs.map(c=>({id:c.id,...c.data()})),r()},s),Za(Rn(Fe(Be,"settlements"),fe("month","==",n)),a=>{e.settlements=a.docs.map(c=>({id:c.id,...c.data()})),r()},s)];return()=>o.forEach(a=>a())}async function jc(n,t){const e=liff.getIDToken(),r=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,idToken:e})});let s={};try{s=await r.json()}catch{}if(r.status===401){try{liff.logout()}catch{}throw location.reload(),new Error("การเข้าสู่ระบบหมดอายุ กำลังพาไปล็อกอินใหม่")}if(!r.ok)throw new Error(s.message||`เกิดข้อผิดพลาด (${r.status})`);return s}async function tl(n,{current:t=!1}={}){if(!t){const s=Ui("w:"+n,qc);if(s)return s}const e=await jc("/api/shortcut-transaction",{action:"wallet-list",month:n}),r=Array.isArray(e.items)?e.items:[];return t||Bi("w:"+n,r),r}async function _m(n){return jc("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}function Ct(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function Zt(n){const t=Number(n);return Number.isFinite(t)?Math.round(t*100):0}function gm({memberNames:n=[],transactions:t=[],settlements:e=[],month:r}){const s=new Set(n.map(Ct).filter(Boolean)),o={};s.forEach(h=>{o[h]=0});const a=[],c=(h,d,m)=>{const T=Ct(h);T&&(s.has(T)?o[T]+=d:a.push({type:"unknown_name",name:T,...m}))};for(const h of t){if(!h||typeof h.date!="string"||!h.date.startsWith(r))continue;const d=h.splits&&typeof h.splits=="object"?Object.entries(h.splits):[];if(d.length===0){a.push({type:"no_splits",id:h.id});continue}const m=Zt(h.amount);c(h.payer,m,{id:h.id});let T=0;for(const[v,R]of d){const P=Zt(R);T+=P,c(v,-P,{id:h.id})}Math.abs(T-m)>d.length&&a.push({type:"split_mismatch",id:h.id,diffSatang:T-m})}for(const h of e){if(!h||h.status!=="verified"||h.month!==r)continue;const d=Zt(h.amount);c(h.from,d,{id:h.id}),c(h.to,-d,{id:h.id})}return{balances:o,warnings:a}}function ym(n,{minSatang:t=100}={}){const e=[],r=[];for(const[h,d]of Object.entries(n))d<=-t?e.push({name:h,amt:-d}):d>=t&&r.push({name:h,amt:d});const s=(h,d)=>d.amt-h.amt||(h.name<d.name?-1:h.name>d.name?1:0);e.sort(s),r.sort(s);const o=[];let a=0,c=0;for(;a<e.length&&c<r.length;){const h=e[a],d=r[c],m=Math.min(h.amt,d.amt);m>=t&&o.push({from:h.name,to:d.name,amountSatang:m,amount:m/100}),h.amt-=m,d.amt-=m,h.amt<t&&a++,d.amt<t&&c++}return o}function zc(n){const t=Number(n)||0;return Math.abs(t)<100?0:Math.round(t/100)}function Xs(n,t){if(!n)return 0;const e=Ct(t),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return Ct(n.payer)===e?Zt(n.amount):0;let s=0;for(const[o,a]of r)Ct(o)===e&&(s+=Zt(a));return s}function Hc(n,t){return n&&Ct(n.payer)===Ct(t)?Zt(n.amount):0}const Kc=(n,t)=>typeof n=="string"&&n.startsWith(t);function Gc({name:n,transactions:t=[],settlements:e=[],month:r}){const s=Ct(n);let o=0,a=0;for(const m of t)!m||!Kc(m.date,r)||(o+=Hc(m,s),a+=Xs(m,s));let c=0,h=0;for(const m of e){if(!m||m.status!=="verified"||m.month!==r)continue;const T=Zt(m.amount);Ct(m.from)===s&&(c+=T),Ct(m.to)===s&&(h+=T)}const d=o-a+c-h;return{name:s,month:r,paid:o,share:a,sent:c,received:h,balance:d}}function vm({memberNames:n=[],transactions:t=[],settlements:e=[],month:r}){const{balances:s,warnings:o}=gm({memberNames:n,transactions:t,settlements:e,month:r}),a=ym(s),c=Object.keys(s).sort().map(h=>{const d=Gc({name:h,transactions:t,settlements:e,month:r}),m=zc(s[h]);return{...d,balance:s[h],displayBalance:m,cleared:m===0}});return{month:r,balances:s,plan:a,warnings:o,members:c}}function Wc({name:n,month:t,walletEntries:e=[],transactions:r=[],settlements:s=[]}){const o=Ct(n),a=new Set;let c=0,h=0;for(const v of e){if(!v||Ct(v.ownerName)!==o||!Kc(v.date||v.month,t))continue;const R=v.dedupKey||v.transRef;if(R){if(a.has(R))continue;a.add(R)}const P=Zt(v.amount);P<=0||(v.type==="income"?c+=P:v.type==="expense"&&(h+=P))}const d=Gc({name:o,transactions:r,settlements:s,month:t}),m=d.share,T=h+m;return{name:o,month:t,income:c,personalExpense:h,groupShare:m,expenseTotal:T,net:c-T,receivedBack:d.received,paidBack:d.sent}}function Em(n){return(n||[]).map(t=>({from:t.from,to:t.to,amount:Math.round(t.amountSatang/100)})).filter(t=>t.amount>=1)}const Js=[{key:"food",label:"อาหารและเครื่องดื่ม",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"other",label:"อื่นๆ",icons:[]}];function Tm(n){const t=Js.find(e=>e.icons.includes(n));return t?t.key:"other"}const el=n=>String(n||"").slice(0,7);function wm({name:n,month:t,today:e="",members:r,transactions:s,settlements:o,walletItems:a=[]}){const c=Ct(n),h=vm({memberNames:r,transactions:s,settlements:o,month:t}),d=Wc({name:c,month:t,walletEntries:a.map(p=>({ownerName:c,type:p.type,amount:p.amount,date:p.date})),transactions:s,settlements:o}),m=Object.fromEntries(Js.map(p=>[p.key,0])),T={},v=(p,E,w)=>{if(!w||!String(p).startsWith(t))return;m[Tm(E)]+=w;const b=Number(String(p).slice(8,10));T[b]=(T[b]||0)+w};for(const p of s)!p||el(p.date)!==t||v(p.date,p.icon,Xs(p,c));for(const p of a)p.type==="expense"&&v(p.date,p.icon,Math.round(Number(p.amount)*100));const R=Object.values(m).reduce((p,E)=>p+E,0),P=Js.map(p=>({key:p.key,label:p.label,satang:m[p.key],percent:R>0?Math.round(m[p.key]/R*100):0})).filter(p=>p.satang>0).sort((p,E)=>E.satang-p.satang),N=e.startsWith(t)?Number(e.slice(8,10)):Im(t),V=[];for(let p=1;p<=N;p++)V.push({day:p,satang:T[p]||0,today:e===`${t}-${String(p).padStart(2,"0")}`});const L=d.expenseTotal,O=N>0?Math.round(L/N/100):0,$=Em(h.plan),z=$.filter(p=>p.to===c).map(p=>({name:p.from,amount:p.amount})).sort((p,E)=>E.amount-p.amount),Y=$.filter(p=>p.from===c).map(p=>({name:p.to,amount:p.amount})).sort((p,E)=>E.amount-p.amount),Q=z[0]?z[0].amount:0;z.forEach(p=>{p.share=Q?Math.round(p.amount/Q*100):0});const I=Y[0]?Y[0].amount:0;Y.forEach(p=>{p.share=I?Math.round(p.amount/I*100):0});const g=[];for(const p of s){if(!p||el(p.date)!==t)continue;const E=Xs(p,c);(E>0||Hc(p,c)>0)&&g.push({id:p.id,kind:"group",desc:p.desc||"",icon:p.icon,satang:E,date:p.date,ts:Number(p.timestamp)||0})}for(const p of a)String(p.date).startsWith(t)&&g.push({id:p.id,kind:p.type==="income"?"income":"personal",desc:p.desc||"",icon:p.icon,satang:Math.round(Number(p.amount)*100),date:p.date,ts:Number(p.timestamp)||0});return g.sort((p,E)=>E.date.localeCompare(p.date)||E.ts-p.ts),{month:t,incomeSat:d.income,spentSat:L,personalSat:d.personalExpense,groupShareSat:d.groupShare,netSat:d.net,net:zc(d.net),spentPercent:d.income>0?Math.min(999,Math.round(L/d.income*100)):null,receivedBackSat:d.receivedBack,categories:P,daily:V,average:O,owedToMe:z,owedTotal:z.reduce((p,E)=>p+E.amount,0),iOwe:Y,iOweTotal:Y.reduce((p,E)=>p+E.amount,0),recent:g.slice(0,5),warnings:h.warnings}}function Im(n){const[t,e]=n.split("-").map(Number);return new Date(Date.UTC(t,e,0)).getUTCDate()}function Sr(n,t){const[e,r]=n.split("-").map(Number),s=e*12+(r-1)+t,o=Math.floor(s/12);return`${o}-${String(s-o*12+1).padStart(2,"0")}`}const Qc=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function $i(n){const[t,e]=n.split("-").map(Number);return`${Qc[e-1]} ${t+543}`}function Dt(n,{decimals:t=0,sign:e=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});return`${r<0?"-":e&&r>0?"+":""}฿${s}`}function Am({name:n,months:t,transactions:e,settlements:r,walletItems:s=[]}){const o=Ct(n),a=s.map(c=>({ownerName:o,type:c.type,amount:c.amount,date:c.date}));return t.map(c=>{const h=Wc({name:o,month:c,walletEntries:a,transactions:e,settlements:r});return{month:c,spentSat:h.expenseTotal,incomeSat:h.income}})}function nl(n,t){return Array.from({length:t},(e,r)=>Sr(n,r-(t-1)))}function Yc(n){return Qc[Number(n.slice(5,7))-1]}const ws=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"bills",label:"บิล",icon:"bill"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"wallet",label:"กระเป๋า",icon:"wallet"},{key:"me",label:"ฉัน",icon:"user"}],bm={food:"food",bills:"bolt",goods:"bag",travel:"car",other:"dots"},rl=6;function Rm({month:n,onChange:t,min:e,max:r}){return y("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[y("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=e,onClick:()=>t(Sr(n,-1)),children:y(pt,{name:"left",size:16})}),y("span",{class:"num",children:$i(n)}),y("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>t(Sr(n,1)),children:y(pt,{name:"right",size:16})})]})}function Sm({percent:n}){const e=2*Math.PI*42,r=Math.max(0,Math.min(100,n));return y("div",{class:"ring",role:"img","aria-label":`ใช้ไป ${n}% ของรายรับ`,children:[y("svg",{viewBox:"0 0 100 100",width:"112",height:"112","aria-hidden":"true",children:[y("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),y("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:(n>100,"var(--pay)"),"stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${e*r/100} ${e}`,transform:"rotate(-90 50 50)"})]}),y("div",{class:"ring-t",children:[y("b",{class:"num",children:[n,"%"]}),y("span",{children:"ของรายรับ"})]})]})}function Pm({m:n}){const t=n.incomeSat>0,e=t&&n.netSat<0,r=t?e?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",s=t?Math.abs(n.netSat)/100:n.spentSat/100;return y("section",{class:"card hero",children:[y("div",{class:"hero-l",children:[y("div",{class:"lbl",children:r}),y("div",{class:`big num ${!t||e?"pay":"rcv"}`,children:Dt(Math.round(s))}),y("div",{class:"chips",children:[y("span",{class:"chip",children:[y(pt,{name:"down",size:14,class:"rcv"}),"รายรับ ",y("b",{class:"num",children:Dt(n.incomeSat/100)})]}),y("span",{class:"chip",children:[y(pt,{name:"up",size:14,class:"pay"}),"ใช้ไป ",y("b",{class:"num",children:Dt(n.spentSat/100)})]})]}),y("div",{class:"lbl",style:{marginTop:"10px"},children:["ส่วนตัว ",Dt(n.personalSat/100)," · ส่วนของฉันในกลุ่ม ",Dt(n.groupShareSat/100)]})]}),t?y(Sm,{percent:n.spentPercent}):y("div",{class:"hint",children:[y(pt,{name:"wallet",size:22}),"ยังไม่ได้บันทึกรายรับ",y("br",{}),"กดปุ่ม “บันทึก” เพื่อเพิ่ม"]})]})}function Br({icon:n,title:t,note:e}){return y("div",{class:"sec-t",children:[y("span",{class:"ico",children:y(pt,{name:n})}),y("div",{children:[y("h3",{children:t}),e&&y("p",{children:e})]})]})}function Cm({cats:n}){if(n.length===0)return null;const t=n[0];return y("section",{class:"card",children:[y(Br,{icon:"bag",title:"ใช้ไปกับอะไร",note:`ส่วนใหญ่ไปกับ ${t.label} ${t.percent}%`}),y("div",{class:"cats",children:n.map(e=>y("div",{class:"cat",children:[y("span",{class:"ico big-ico",children:y(pt,{name:bm[e.key]||"dots"})}),y("div",{class:"cat-b",children:[y("div",{class:"cat-r",children:[y("span",{children:e.label}),y("span",{class:"num",children:[y("b",{children:[e.percent,"%"]})," ",y("em",{children:Dt(e.satang/100)})]})]}),y("div",{class:"bar",children:y("i",{style:{width:`${Math.max(3,Math.round(e.percent/t.percent*100))}%`}})})]})]},e.key))})]})}function Vm({series:n,selected:t,onSelect:e}){const r=Math.max(1,...n.map(o=>Math.max(o.spentSat,o.incomeSat))),s=n.some(o=>o.incomeSat>0);return y(St,{children:[y(Br,{icon:"bill",title:"ใช้ไปรายเดือน",note:"แตะแท่งเพื่อดูรายวันของเดือนนั้น"}),y("div",{class:"months",role:"group","aria-label":"ใช้ไปรายเดือน",children:n.map(o=>{const a=o.month===t;return y("button",{type:"button",class:`mcol ${a?"on":""}`,"aria-pressed":a,"aria-label":`${$i(o.month)} ใช้ไป ${Dt(o.spentSat/100)}`,onClick:()=>e(o.month),children:[y("span",{class:"mval num",children:o.spentSat>0?Dm(o.spentSat/100):""}),y("span",{class:"mplot",children:[y("i",{class:"mbar",style:{height:`${Math.max(2,Math.round(o.spentSat/r*100))}%`}}),o.incomeSat>0&&y("i",{class:"mline",style:{bottom:`${Math.round(o.incomeSat/r*100)}%`}})]}),y("span",{class:"mlab",children:Yc(o.month)})]},o.month)})}),s&&y("div",{class:"legend2",children:[y("span",{children:[y("i",{class:"k-bar"}),"ใช้ไป"]}),y("span",{children:[y("i",{class:"k-line"}),"รายรับ"]})]})]})}const Dm=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n));function km({month:n,daily:t}){if(!t.length)return null;const e=Math.max(1,...t.map(o=>o.satang)),r=t.reduce((o,a)=>a.satang>o.satang?a:o,t[0]),s=t.reduce((o,a)=>o+a.satang,0);return y("div",{class:"daily",children:[y("div",{class:"hd-row",children:[y("h4",{children:["รายวันของ ",$i(n)]}),s>0&&y("span",{class:"lbl",children:["วันที่ใช้มากสุด ",r.day," ",Yc(n)," ",Dt(r.satang/100)]})]}),y("div",{class:"days",role:"img","aria-label":"ใช้ไปรายวัน",children:t.map(o=>y("i",{class:o.satang===r.satang&&s>0?"peak":o.today?"today":"",style:{height:`${Math.max(3,Math.round(o.satang/e*100))}%`}},o.day))}),y("div",{class:"axis num",children:[y("span",{children:"1"}),y("span",{children:Math.ceil(t.length/2)}),y("span",{children:t.length})]})]})}function sl({d:n,tone:t,action:e}){return y("div",{class:"dbar",children:[y("div",{class:"r1",children:[y("div",{class:"av","aria-hidden":"true",children:[...n.name][0]||"?"}),y("div",{style:{flex:1,fontWeight:500,minWidth:0},children:n.name}),y("div",{class:`num ${t==="g"?"rcv":"pay"}`,style:{fontWeight:600},children:Dt(n.amount)}),y("a",{class:"btn sm ghost",href:"/index.html#clear",title:"เปิดหน้าเคลียร์เงิน (หน้าเดิม)",children:[y(pt,{name:t==="g"?"qr":"swap",size:14}),e]})]}),y("div",{class:`bar ${t==="g"?"g":""}`,children:y("i",{style:{width:`${n.share}%`}})})]})}function Nm({m:n}){return y("section",{class:"card",children:[y(Br,{icon:"people",title:"เพื่อนค้างฉัน",note:n.owedTotal>0?`รอรับคืนรวม ${Dt(n.owedTotal)}`:void 0}),n.owedToMe.length===0&&y("div",{class:"empty",children:[y(pt,{name:"check",size:16,class:"rcv"})," ไม่มีใครค้างคุณในเดือนนี้"]}),n.owedToMe.map(t=>y(sl,{d:t,tone:"g",action:"ขอ"},t.name)),n.iOweTotal>0&&y(St,{children:[y("div",{class:"sub-t",children:["ฉันค้างเพื่อน ",y("span",{class:"num pay",children:Dt(n.iOweTotal)})]}),n.iOwe.map(t=>y(sl,{d:t,tone:"p",action:"โอน"},t.name))]})]})}function Mm({items:n}){return n.length?y("section",{class:"card",children:[y(Br,{icon:"bill",title:"รายการล่าสุด"}),n.map(t=>y("div",{class:"row",children:[y("span",{class:"ico",children:y(pt,{name:t.kind==="income"?"down":Hu(t.icon)})}),y("div",{class:"grow",children:[y("div",{class:"t",children:t.desc||"ไม่ระบุ"}),y("div",{class:"s",children:[t.kind==="group"?"ส่วนของฉันในกลุ่ม":t.kind==="income"?"รายรับ":"ส่วนตัว"," · ",t.date.slice(8,10),"/",t.date.slice(5,7)]})]}),y("div",{class:`num ${t.kind==="income"?"rcv":""}`,children:Dt(t.satang/100,{decimals:2})})]},t.kind+t.id))]}):null}function xm({model:n,series:t,month:e,onMonth:r,daily:s,onRefresh:o}){return y("div",{class:"home-grid",children:[y("div",{class:"col",children:[y(Pm,{m:n}),y(Cm,{cats:n.categories}),y("section",{class:"card",children:[y(Vm,{series:t,selected:e,onSelect:r}),y(km,{month:e,daily:s})]})]}),y("div",{class:"col",children:[y(Nm,{m:n}),y(Mm,{items:n.recent}),y("button",{type:"button",class:"btn sm ghost",style:{alignSelf:"flex-start"},onClick:o,children:"รีเฟรชข้อมูลย้อนหลัง"})]})]})}function Om({onClose:n,onSaved:t}){const[e,r]=Pt(null);return e?y(Lm,{type:e==="income"?"income":"expense",onBack:()=>r(null),onClose:n,onSaved:t}):y("div",{class:"scrim",onClick:s=>s.target===s.currentTarget&&n(),children:y("div",{class:"sheet",role:"dialog","aria-label":"บันทึกรายการ",children:[y("div",{class:"grab"}),y("a",{class:"opt-row",href:"/index.html#add",style:{textDecoration:"none",color:"inherit"},children:[y("span",{class:"ico",children:y(pt,{name:"people"})}),y("div",{children:[y("b",{children:"บิลหารกับเพื่อน"}),y("small",{children:"เลือกคนหาร เท่ากัน กำหนดเอง ผ่อน หรือรายเดือน (ใช้ฟอร์มหน้าเดิมไปก่อน)"})]})]}),y("button",{type:"button",class:"opt-row",onClick:()=>r("personal"),children:[y("span",{class:"ico",children:y(pt,{name:"lock"})}),y("div",{children:[y("b",{children:"รายจ่ายส่วนตัว"}),y("small",{children:"เพื่อนไม่เห็น ไม่กระทบยอดหนี้"})]})]}),y("button",{type:"button",class:"opt-row",onClick:()=>r("income"),children:[y("span",{class:"ico",children:y(pt,{name:"down",class:"rcv"})}),y("div",{children:[y("b",{children:"รายรับ"}),y("small",{children:"เงินเดือน ฯลฯ ไม่รวมเพื่อนโอนคืนหนี้"})]})]})]})})}function Lm({type:n,onBack:t,onClose:e,onSaved:r}){const[s,o]=Pt(""),[a,c]=Pt(""),[h,d]=Pt($c()),[m,T]=Pt(!1),[v,R]=Pt(""),P=n==="income";async function N(V){V.preventDefault(),R("");const L=Number(s);if(!Number.isFinite(L)||L<=0){R("กรอกจำนวนเงินให้ถูกต้อง");return}T(!0);try{await _m({type:n,amount:L,desc:a.trim()||void 0,date:h}),r(P?"บันทึกรายรับแล้ว":"บันทึกรายจ่ายแล้ว"),e()}catch(O){R(O.message),T(!1)}}return y("div",{class:"scrim",onClick:V=>V.target===V.currentTarget&&e(),children:y("form",{class:"sheet",onSubmit:N,"aria-label":P?"บันทึกรายรับ":"บันทึกรายจ่ายส่วนตัว",children:[y("div",{class:"grab"}),y("div",{class:"hd-row",children:[y("b",{children:P?"บันทึกรายรับ":"บันทึกรายจ่ายส่วนตัว"}),y("button",{type:"button",class:"btn sm ghost",onClick:t,children:"เปลี่ยนประเภท"})]}),y("div",{class:"field",children:[y("label",{for:"f-amount",children:"จำนวนเงิน (บาท)"}),y("input",{id:"f-amount",type:"number",inputmode:"decimal",step:"0.01",min:"0",autofocus:!0,value:s,onInput:V=>o(V.currentTarget.value)})]}),y("div",{class:"field",children:[y("label",{for:"f-desc",children:"รายการ"}),y("input",{id:"f-desc",type:"text",maxLength:100,placeholder:P?"เช่น เงินเดือน":"เช่น กาแฟ",value:a,onInput:V=>c(V.currentTarget.value)})]}),y("div",{class:"field",children:[y("label",{for:"f-date",children:"วันที่"}),y("input",{id:"f-date",type:"date",value:h,onInput:V=>d(V.currentTarget.value)})]}),v&&y("div",{class:"msg",role:"alert",children:v}),y("button",{type:"submit",class:"btn",style:{width:"100%",marginTop:"16px"},disabled:m,children:m?"กำลังบันทึก":"บันทึก"})]})})}function sr({title:n,note:t,href:e}){return y("div",{class:"card stub",children:[y("h3",{children:n}),y("p",{children:t}),y("a",{class:"btn ghost",href:e,children:"เปิดหน้าเดิม"})]})}function Fm(){const[n,t]=Pt({state:"loading"}),[e,r]=Pt(location.hash.slice(1)||"home"),s=Ie(()=>$c(),[]),o=s.slice(0,7),a=Ie(()=>Sr(o,-11),[o]),[c,h]=Pt(o),[d,m]=Pt(null),[T,v]=Pt({}),[R,P]=Pt(!1),[N,V]=Pt(!1),[L,O]=Pt(""),[$,z]=Pt(0),Y=(_,et)=>v(Mt=>({...Mt,[_]:{...Mt[_]||{},...et}}));ae(()=>{cm().then(_=>{_&&t({state:"ok",user:_})}).catch(_=>t({state:"error",message:_.message}))},[]),ae(()=>{const _=()=>r(location.hash.slice(1)||"home");return addEventListener("hashchange",_),()=>removeEventListener("hashchange",_)},[]),ae(()=>{n.state==="ok"&&fm().then(m).catch(()=>P(!0))},[n.state,$]),ae(()=>{if(n.state==="ok")return mm(o,_=>{_.error?P(!0):Y(o,_)})},[n.state,o]),ae(()=>{n.state==="ok"&&tl(o,{current:!0}).then(_=>Y(o,{wallet:_})).catch(_=>O(_.message))},[n.state,o,$]);const Q=Ie(()=>[...new Set([...nl(o,rl),c])].filter(_=>_!==o),[o,c]);ae(()=>{n.state==="ok"&&Q.forEach(_=>{T[_]&&T[_].transactions&&T[_].wallet||Promise.all([pm(_),tl(_)]).then(([et,Mt])=>Y(_,{transactions:et.transactions,settlements:et.settlements,wallet:Mt})).catch(()=>P(!0))})},[n.state,Q]),ae(()=>{if(L){const _=setTimeout(()=>O(""),3200);return()=>clearTimeout(_)}},[L]);const I=n.state==="ok"&&d&&Q.every(_=>T[_]&&T[_].transactions&&T[_].wallet)&&T[o]&&T[o].transactions&&T[o].settlements&&T[o].wallet,g=Ie(()=>{if(!I)return null;const _=Object.values(T);return{transactions:_.flatMap(et=>et.transactions||[]),settlements:_.flatMap(et=>et.settlements||[]),wallet:_.flatMap(et=>et.wallet||[])}},[I,T]),p=Ie(()=>g?wm({name:n.user.name,month:c,today:s,members:d,transactions:g.transactions,settlements:g.settlements,walletItems:g.wallet}):null,[g,n,d,c,s]),E=Ie(()=>g?Am({name:n.user.name,months:nl(o,rl),transactions:g.transactions,settlements:g.settlements,walletItems:g.wallet}):[],[g,n,o]),w=()=>{hm(),v({}),m(null),P(!1),z(_=>_+1)};if(n.state==="loading")return y("div",{class:"app",children:y("div",{class:"center",children:[y(Zn,{size:64}),y("div",{children:"กำลังเข้าสู่ระบบ"})]})});if(n.state==="error")return y("div",{class:"app",children:y("div",{class:"center",children:[y(Zn,{size:64}),y("div",{role:"alert",children:n.message}),y("a",{class:"btn",href:"/index.html",children:"ไปหน้าเดิม"})]})});const b=_=>{location.hash=_,r(_)};return y("div",{class:"app",children:[y("aside",{class:"side","aria-label":"เมนูหลัก",children:[y("div",{class:"brand",children:[y(Zn,{size:28}),"Dept Money"]}),y("nav",{children:ws.map(_=>y("button",{type:"button",class:`snav ${e===_.key?"on":""}`,"aria-current":e===_.key?"page":void 0,onClick:()=>b(_.key),children:[y(pt,{name:_.icon}),_.label]},_.key))}),y("button",{type:"button",class:"btn side-add",onClick:()=>V(!0),children:[y(pt,{name:"plus"}),"บันทึกรายการ"]}),y("div",{class:"side-me",children:[y("span",{class:"av","aria-hidden":"true",children:[...n.user.name][0]}),y("span",{children:n.user.name})]})]}),y("main",{class:"page",children:[y("div",{class:"top",children:[y("div",{class:"brand mobile-only",children:[y(Zn,{size:24}),"Dept Money"]}),y("h1",{class:"page-title",children:ws.find(_=>_.key===e)?.label}),e==="home"&&y(Rm,{month:c,onChange:h,min:a,max:o})]}),e==="home"&&(R?y("div",{class:"card",role:"alert",children:["โหลดข้อมูลไม่สำเร็จ ลองรีเฟรชหน้านี้ ",y("button",{type:"button",class:"btn sm ghost",onClick:w,children:"ลองใหม่"})]}):p?y(xm,{model:p,series:E,month:c,onMonth:h,daily:p.daily,onRefresh:w}):y("div",{class:"empty",children:"กำลังโหลดข้อมูล"})),e==="bills"&&y(sr,{title:"บิล",note:"หน้านี้กำลังสร้าง ใช้หน้าเดิมไปก่อน",href:"/index.html#history"}),e==="clear"&&y(sr,{title:"เคลียร์เงิน",note:"หน้านี้กำลังสร้าง ใช้หน้าเดิมไปก่อน (QR และอัปโหลดสลิปอยู่ที่นั่น)",href:"/index.html#clear"}),e==="wallet"&&y(sr,{title:"กระเป๋า",note:"หน้านี้กำลังสร้าง ตอนนี้ดูสรุปได้ที่หน้าแรก และบันทึกรายรับ/รายจ่ายได้จากปุ่มบันทึก",href:"#home"}),e==="me"&&y(sr,{title:"ฉัน",note:"หน้านี้กำลังสร้าง ตั้งค่าโปรไฟล์และสมาชิกใช้หน้าเดิมไปก่อน",href:"/index.html#profile"})]}),y("button",{type:"button",class:"fab",onClick:()=>V(!0),"aria-label":"บันทึกรายการ",children:[y(pt,{name:"plus"}),"บันทึก"]}),y("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:y("div",{class:"tabbar-in",children:ws.map(_=>y("button",{type:"button",class:`tab ${e===_.key?"on":""}`,"aria-current":e===_.key?"page":void 0,onClick:()=>b(_.key),children:[y(pt,{name:_.icon}),_.label]},_.key))})}),N&&y(Om,{onClose:()=>V(!1),onSaved:_=>{O(_),z(et=>et+1)}}),L&&y("div",{class:"toast",role:"status",children:L})]})}Uu(y(Fm,{}),document.getElementById("app"));
