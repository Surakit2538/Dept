(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var br,X,Ya,Gt,Fo,Xa,Ja,ls,er,un,Za,Xs,Ts,ws,hr={},dr=[],Ac=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Rr=Array.isArray;function Bt(n,t){for(var e in t)n[e]=t[e];return n}function Js(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function bc(n,t,e){var r,s,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?br.call(arguments,2):e),typeof n=="function"&&n.defaultProps!=null)for(o in n.defaultProps)a[o]===void 0&&(a[o]=n.defaultProps[o]);return nr(n,a,r,s,null)}function nr(n,t,e,r,s){var o={type:n,props:t,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Ya,__i:-1,__u:0};return s==null&&X.vnode!=null&&X.vnode(o),o}function Rt(n){return n.children}function rr(n,t){this.props=n,this.context=t}function he(n,t){if(t==null)return n.__?he(n.__,n.__i+1):null;for(var e;t<n.__k.length;t++)if((e=n.__k[t])!=null&&e.__e!=null)return e.__e;return typeof n.type=="function"?he(n):null}function Rc(n){if(n.__P&&n.__d){var t=n.__v,e=t.__e,r=[],s=[],o=Bt({},t);o.__v=t.__v+1,X.vnode&&X.vnode(o),Zs(n.__P,o,t,n.__n,n.__P.namespaceURI,32&t.__u?[e]:null,r,e??he(t),!!(32&t.__u),s),o.__v=t.__v,o.__.__k[o.__i]=o,sl(r,o,s),t.__e=t.__=null,o.__e!=e&&tl(o)}}function tl(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(t){if(t!=null&&t.__e!=null)return n.__e=n.__c.base=t.__e}),tl(n)}function Uo(n){(!n.__d&&(n.__d=!0)&&Gt.push(n)&&!fr.__r++||Fo!=X.debounceRendering)&&((Fo=X.debounceRendering)||Xa)(fr)}function fr(){try{for(var n,t=1;Gt.length;)Gt.length>t&&Gt.sort(Ja),n=Gt.shift(),t=Gt.length,Rc(n)}finally{Gt.length=fr.__r=0}}function el(n,t,e,r,s,o,a,u,h,d,m){var w,g,R,C,N,V,L=r&&r.__k||dr,O=t.length;for(h=Sc(e,t,L,h,O),w=0;w<O;w++)(R=e.__k[w])!=null&&(g=R.__i!=-1&&L[R.__i]||hr,R.__i=w,V=Zs(n,R,g,s,o,a,u,h,d,m),C=R.__e,R.ref&&g.ref!=R.ref&&(g.ref&&ti(g.ref,null,R),m.push(R.ref,R.__c||C,R)),N==null&&C!=null&&(N=C),4&R.__u?(h=nl(R,h,n),g.__e&&(g.__e=null)):typeof R.type=="function"&&V!==void 0?h=V:C&&(h=C.nextSibling),R.__u&=-7);return e.__e=N,h}function Sc(n,t,e,r,s){var o,a,u,h,d,m=e.length,w=m,g=0;for(n.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[o]=nr(null,a,null,null,null):Rr(a)?a=n.__k[o]=nr(Rt,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[o]=nr(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[o]=a,h=o+g,a.__=n,a.__b=n.__b+1,u=null,(d=a.__i=Pc(a,e,h,w))!=-1&&(w--,(u=e[d])&&(u.__u|=2)),u==null||u.__v==null?(d==-1&&(s>m?g--:s<m&&g++),typeof a.type!="function"&&(a.__u|=4)):d!=h&&(d==h-1?g--:d==h+1?g++:(d>h?g--:g++,a.__u|=4))):n.__k[o]=null;if(w)for(o=0;o<m;o++)(u=e[o])!=null&&!(2&u.__u)&&(u.__e==r&&(r=he(u)),ol(u,u));return r}function nl(n,t,e){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,t=nl(r[s],t,e));return t}n.__e!=t&&(t&&n.type&&!t.parentNode&&(t=he(n)),t=e.insertBefore(n.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Pc(n,t,e,r){var s,o,a,u=n.key,h=n.type,d=t[e],m=d!=null&&(2&d.__u)==0;if(d===null&&u==null||m&&u==d.key&&h==d.type)return e;if(r>(m?1:0)){for(s=e-1,o=e+1;s>=0||o<t.length;)if((d=t[a=s>=0?s--:o++])!=null&&!(2&d.__u)&&u==d.key&&h==d.type)return a}return-1}function Bo(n,t,e){t[0]=="-"?n.setProperty(t,e??""):n[t]=e==null?"":typeof e!="number"||Ac.test(t)?e:e+"px"}function Gn(n,t,e,r,s){var o,a;t:if(t=="style")if(typeof e=="string")n.style.cssText=e;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(t in r)e&&t in e||Bo(n.style,t,"");if(e)for(t in e)r&&e[t]==r[t]||Bo(n.style,t,e[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Za,"$1")),a=t.toLowerCase(),t=a in n||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),n.l||(n.l={}),n.l[t+o]=e,e?r?e[un]=r[un]:(e[un]=Xs,n.addEventListener(t,o?ws:Ts,o)):n.removeEventListener(t,o?ws:Ts,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in n)try{n[t]=e??"";break t}catch{}typeof e=="function"||(e==null||e===!1&&t[4]!="-"?n.removeAttribute(t):n.setAttribute(t,t=="popover"&&e==1?"":e))}}function $o(n){return function(t){if(this.l){var e=this.l[t.type+n];if(t[er]==null)t[er]=Xs++;else if(t[er]<e[un])return;return e(X.event?X.event(t):t)}}}function Zs(n,t,e,r,s,o,a,u,h,d){var m,w,g,R,C,N,V,L,O,$,q,J,Q,T,y,p,E=t.type;if(t.constructor!==void 0)return null;128&e.__u&&(h=!!(32&e.__u),o=[u=t.__e=e.__e]),(m=X.__b)&&m(t);t:if(typeof E=="function"){w=a.length;try{if(O=t.props,$=E.prototype&&E.prototype.render,q=(m=E.contextType)&&r[m.__c],J=m?q?q.props.value:m.__:r,e.__c?L=(g=t.__c=e.__c).__=g.__E:($?t.__c=g=new E(O,J):(t.__c=g=new rr(O,J),g.constructor=E,g.render=Vc),q&&q.sub(g),g.state||(g.state={}),g.__n=r,R=g.__d=!0,g.__h=[],g._sb=[]),$&&g.__s==null&&(g.__s=g.state),$&&E.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=Bt({},g.__s)),Bt(g.__s,E.getDerivedStateFromProps(O,g.__s))),C=g.props,N=g.state,g.__v=t,R)$&&E.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),$&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if($&&E.getDerivedStateFromProps==null&&O!==C&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(O,J),t.__v==e.__v||!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(O,g.__s,J)===!1){t.__v!=e.__v&&(g.props=O,g.state=g.__s,g.__d=!1),t.__e=e.__e,t.__k=e.__k,t.__k.some(function(I){I&&(I.__=t)}),dr.push.apply(g.__h,g._sb),g._sb=[],g.__h.length&&a.push(g),u=he(e);break t}g.componentWillUpdate!=null&&g.componentWillUpdate(O,g.__s,J),$&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(C,N,V)})}if(g.context=J,g.props=O,g.__P=n,g.__e=!1,Q=X.__r,T=0,$)g.state=g.__s,g.__d=!1,Q&&Q(t),m=g.render(g.props,g.state,g.context),dr.push.apply(g.__h,g._sb),g._sb=[];else do g.__d=!1,Q&&Q(t),m=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++T<25);g.state=g.__s,g.getChildContext!=null&&(r=Bt(Bt({},r),g.getChildContext())),$&&!R&&g.getSnapshotBeforeUpdate!=null&&(V=g.getSnapshotBeforeUpdate(C,N)),y=m!=null&&m.type===Rt&&m.key==null?il(m.props.children):m,u=el(n,Rr(y)?y:[y],t,e,r,s,o,a,u,h,d),g.base=t.__e,t.__u&=-161,g.__h.length&&a.push(g),L&&(g.__E=g.__=null)}catch(I){if(a.length=w,t.__v=null,h||o!=null){if(I.then){for(t.__u|=h?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;o!=null&&(o[o.indexOf(u)]=null),t.__e=u}else if(o!=null)for(p=o.length;p--;)Js(o[p])}else t.__e=e.__e;t.__k==null&&(t.__k=e.__k||[]),I.then||rl(t),X.__e(I,t,e)}}else o==null&&t.__v==e.__v?(t.__k=e.__k,t.__e=e.__e):u=t.__e=Cc(e.__e,t,e,r,s,o,a,h,d);return(m=X.diffed)&&m(t),128&t.__u?void 0:u}function rl(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(rl))}function sl(n,t,e){for(var r=0;r<e.length;r++)ti(e[r],e[++r],e[++r]);X.__c&&X.__c(t,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(o){o.call(s)})}catch(o){X.__e(o,s.__v)}})}function il(n){return typeof n!="object"||n==null||n.__b>0?n:Rr(n)?n.map(il):n.constructor!==void 0?null:Bt({},n)}function Cc(n,t,e,r,s,o,a,u,h){var d,m,w,g,R,C,N,V=e.props||hr,L=t.props,O=t.type;if(O=="svg"?s="http://www.w3.org/2000/svg":O=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(d=0;d<o.length;d++)if((R=o[d])&&"setAttribute"in R==!!O&&(O?R.localName==O:R.nodeType==3)){n=R,o[d]=null;break}}if(n==null){if(O==null)return document.createTextNode(L);n=document.createElementNS(s,O,L.is&&L),u&&(X.__m&&X.__m(t,o),u=!1),o=null}if(O==null)V===L||u&&n.data==L||(n.data=L);else{if(o=O=="textarea"&&L.defaultValue!=null?null:o&&br.call(n.childNodes),!u&&o!=null)for(V={},d=0;d<n.attributes.length;d++)V[(R=n.attributes[d]).name]=R.value;for(d in V)R=V[d],d=="dangerouslySetInnerHTML"?w=R:d=="children"||d in L||d=="value"&&"defaultValue"in L||d=="checked"&&"defaultChecked"in L||Gn(n,d,null,R,s);for(d in L)R=L[d],d=="children"?g=R:d=="dangerouslySetInnerHTML"?m=R:d=="value"?C=R:d=="checked"?N=R:u&&typeof R!="function"||V[d]===R||Gn(n,d,R,V[d],s);if(m)u||w&&(m.__html==w.__html||m.__html==n.innerHTML)||(n.innerHTML=m.__html),t.__k=[];else if(w&&(n.innerHTML=""),el(t.type=="template"?n.content:n,Rr(g)?g:[g],t,e,r,O=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:e.__k&&he(e,0),u,h),o!=null)for(d=o.length;d--;)Js(o[d]);u&&O!="textarea"||(d="value",O=="progress"&&C==null?n.removeAttribute("value"):C!=null&&(C!==n[d]||O=="progress"&&!C||O=="option"&&C!=V[d])&&Gn(n,d,C,V[d],s),d="checked",N!=null&&N!=n[d]&&Gn(n,d,N,V[d],s))}return n}function ti(n,t,e){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&t==null||(n.__u=n(t))}else n.current=t}catch(s){X.__e(s,e)}}function ol(n,t,e){var r,s;if(X.unmount&&X.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||ti(r,null,t)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){X.__e(o,t)}r.base=r.__P=r.__n=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&ol(r[s],t,e||typeof n.type!="function");e||Js(n.__e),n.__c=n.__=n.__e=void 0}function Vc(n,t,e){return this.constructor(n,e)}function Dc(n,t,e){var r,s,o,a;t==document&&(t=document.documentElement),X.__&&X.__(n,t),s=(r=!1)?null:t.__k,o=[],a=[],Zs(t,n=t.__k=bc(Rt,null,[n]),s||hr,hr,t.namespaceURI,s?null:t.firstChild?br.call(t.childNodes):null,o,s?s.__e:t.firstChild,r,a),sl(o,n,a),n.props.children=null}br=dr.slice,X={__e:function(n,t,e,r){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(u){n=u}throw n}},Ya=0,rr.prototype.setState=function(n,t){var e;e=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Bt({},this.state),typeof n=="function"&&(n=n(Bt({},e),this.props)),n&&Bt(e,n),n!=null&&this.__v&&(t&&this._sb.push(t),Uo(this))},rr.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Uo(this))},rr.prototype.render=Rt,Gt=[],Xa=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ja=function(n,t){return n.__v.__b-t.__v.__b},fr.__r=0,ls=Math.random().toString(8),er="__d"+ls,un="__a"+ls,Za=/(PointerCapture)$|Capture$/i,Xs=0,Ts=$o(!1),ws=$o(!0);var kc=0;function _(n,t,e,r,s,o){t||(t={});var a,u,h=t;if("ref"in h)for(u in h={},t)u=="ref"?a=t[u]:h[u]=t[u];var d={type:n,props:h,key:e,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--kc,__i:-1,__u:0,__source:s,__self:o};if(typeof n=="function"&&(a=n.defaultProps))for(u in a)h[u]===void 0&&(h[u]=a[u]);return X.vnode&&X.vnode(d),d}var pn,st,us,qo,Is=0,al=[],at=X,jo=at.__b,zo=at.__r,Ho=at.diffed,Ko=at.__c,Go=at.unmount,Wo=at.__;function ei(n,t){at.__h&&at.__h(st,n,Is||t),Is=0;var e=st.__H||(st.__H={__:[],__h:[]});return n>=e.__.length&&e.__.push({}),e.__[n]}function St(n){return Is=1,Nc(ul,n)}function Nc(n,t,e){var r=ei(pn++,2);if(r.t=n,!r.__c&&(r.__=[ul(void 0,t),function(u){var h=r.__N?r.__N[0]:r.__[0],d=r.t(h,u);h!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=st,!st.__f)){var s=function(u,h,d){if(!r.__c.__H)return!0;var m=!1,w=r.__c.props!==u;if(r.__c.__H.__.some(function(R){if(R.__N){m=!0;var C=R.__[0];R.__=R.__N,R.__N=void 0,C!==R.__[0]&&(w=!0)}}),o){var g=o.call(this,u,h,d);return m?g||w:g}return!m||w};st.__f=!0;var o=st.shouldComponentUpdate,a=st.componentWillUpdate;st.componentWillUpdate=function(u,h,d){if(this.__e){var m=o;o=void 0,s(u,h,d),o=m}a&&a.call(this,u,h,d)},st.shouldComponentUpdate=s}return r.__N||r.__}function nn(n,t){var e=ei(pn++,3);!at.__s&&ll(e.__H,t)&&(e.__=n,e.u=t,st.__H.__h.push(e))}function Wn(n,t){var e=ei(pn++,7);return ll(e.__H,t)&&(e.__=n(),e.__H=t,e.__h=n),e.__}function Mc(){for(var n;n=al.shift();){var t=n.__H;if(n.__P&&t)try{t.__h.some(sr),t.__h.some(As),t.__h=[]}catch(e){t.__h=[],at.__e(e,n.__v)}}}at.__b=function(n){st=null,jo&&jo(n)},at.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),Wo&&Wo(n,t)},at.__r=function(n){zo&&zo(n),pn=0;var t=(st=n.__c).__H;t&&(us===st?(t.__h=[],st.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(sr),t.__h.some(As),t.__h=[],pn=0)),us=st},at.diffed=function(n){Ho&&Ho(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(al.push(t)!==1&&qo===at.requestAnimationFrame||((qo=at.requestAnimationFrame)||xc)(Mc)),t.__H.__.some(function(e){e.u&&(e.__H=e.u,e.u=void 0)})),us=st=null},at.__c=function(n,t){t.some(function(e){try{e.__h.some(sr),e.__h=e.__h.filter(function(r){return!r.__||As(r)})}catch(r){t.some(function(s){s.__h&&(s.__h=[])}),t=[],at.__e(r,e.__v)}}),Ko&&Ko(n,t)},at.unmount=function(n){Go&&Go(n);var t,e=n.__c;e&&e.__H&&(e.__H.__.some(function(r){try{sr(r)}catch(s){t=s}}),e.__H=void 0,t&&at.__e(t,e.__v))};var Qo=typeof requestAnimationFrame=="function";function xc(n){var t,e=function(){clearTimeout(r),Qo&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(e,35);Qo&&(t=requestAnimationFrame(e))}function sr(n){var t=st,e=n.__c;typeof e=="function"&&(n.__c=void 0,e()),st=t}function As(n){var t=st;n.__c=n.__(),st=t}function ll(n,t){return!n||n.length!==t.length||t.some(function(e,r){return e!==n[r]})}function ul(n,t){return typeof t=="function"?t(n):t}const Yo={home:_(Rt,{children:[_("path",{d:"M3.5 11 12 4l8.5 7"}),_("path",{d:"M5.5 9.8V20h13V9.8"}),_("path",{d:"M10 20v-5.5h4V20"})]}),bill:_(Rt,{children:[_("path",{d:"M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z"}),_("path",{d:"M9 8.5h6M9 12h6"})]}),swap:_("path",{d:"M5 8h13l-3.2-3.2M19 16H6l3.2 3.2"}),wallet:_(Rt,{children:[_("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"}),_("rect",{x:"4",y:"8",width:"16",height:"11.5",rx:"2.5"}),_("path",{d:"M15.5 13.8h2.2"})]}),user:_(Rt,{children:[_("circle",{cx:"12",cy:"8.5",r:"3.6"}),_("path",{d:"M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6"})]}),plus:_("path",{d:"M12 5v14M5 12h14"}),check:_("path",{d:"m5 12.5 4.5 4.5L19 7.5"}),qr:_(Rt,{children:[_("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),_("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),_("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),_("path",{d:"M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2"})]}),up:_("path",{d:"M12 19V6M6.5 11.5 12 6l5.5 5.5"}),down:_("path",{d:"M12 5v13M6.5 12.5 12 18l5.5-5.5"}),left:_("path",{d:"m14.5 6.5-5.5 5.5 5.5 5.5"}),right:_("path",{d:"m9.5 6.5 5.5 5.5-5.5 5.5"}),food:_("path",{d:"M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8"}),car:_(Rt,{children:[_("path",{d:"M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18"}),_("path",{d:"M7.5 12.5h.01M16.5 12.5h.01"})]}),bag:_(Rt,{children:[_("path",{d:"M5.5 8h13l-1 11.5h-11z"}),_("path",{d:"M9 8V6.5a3 3 0 0 1 6 0V8"})]}),bolt:_("path",{d:"M13 3.5 6 13.5h5l-1 7 7-10h-5z"}),dots:_("path",{d:"M6 12h.01M12 12h.01M18 12h.01"}),people:_(Rt,{children:[_("circle",{cx:"9",cy:"8.5",r:"3.2"}),_("path",{d:"M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5"}),_("path",{d:"M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2"})]}),lock:_(Rt,{children:[_("rect",{x:"5",y:"10.5",width:"14",height:"9.5",rx:"2.5"}),_("path",{d:"M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"})]}),close:_("path",{d:"M6 6l12 12M18 6 6 18"})};function ft({name:n,size:t,class:e=""}){return _("svg",{class:`ic ${e}`,viewBox:"0 0 24 24","aria-hidden":"true",style:t?{width:t,height:t}:void 0,children:Yo[n]||Yo.dots})}const Oc={"fa-utensils":"food","fa-mug-hot":"food","fa-wine-glass":"food","fa-car":"car","fa-gas-pump":"car","fa-bus":"car","fa-plane":"car","fa-cart-shopping":"bag","fa-basket-shopping":"bag","fa-scissors":"bag","fa-pills":"bag","fa-paw":"bag","fa-gift":"bag","fa-bolt":"bolt","fa-house":"bolt","fa-mobile-screen":"bolt","fa-mobile-screen-button":"bolt","fa-arrow-down":"down"},Lc=n=>Oc[n]||"bill";function Qn({size:n=24}){return _("svg",{viewBox:"0 0 120 120",width:n,height:n,"aria-hidden":"true",children:_("g",{transform:"translate(-8 0)",children:[_("path",{d:"M20 32 A28 28 0 0 1 20 88 Z",fill:"#f3a10b"}),_("path",{d:"M56 88 V46 A14 14 0 0 1 84 46 V88 M84 46 A14 14 0 0 1 112 46 V88",fill:"none",stroke:"currentColor","stroke-width":"9"})]})})}var Xo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Fc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,w=(o&3)<<4|u>>4;let g=(u&15)<<2|d>>6,R=d&63;h||(R=64,a||(g=64)),r.push(e[m],e[w],e[g],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(cl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Fc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||w==null)throw new Uc;const g=o<<2|u>>4;if(r.push(g),d!==64){const R=u<<4&240|d>>2;if(r.push(R),w!==64){const C=d<<6&192|w;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Uc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bc=function(n){const t=cl(n);return hl.encodeByteArray(t,!0)},pr=function(n){return Bc(n).replace(/\./g,"")},$c=function(n){try{return hl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function qc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jc=()=>qc().__FIREBASE_DEFAULTS__,zc=()=>{if(typeof process>"u"||typeof Xo>"u")return;const n=Xo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&$c(n[1]);return t&&JSON.parse(t)},ni=()=>{try{return jc()||zc()||Hc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kc=n=>{var t,e;return(e=(t=ni())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Gc=n=>{const t=Kc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},dl=()=>{var n;return(n=ni())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Qc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pr(JSON.stringify(e)),pr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xc(){var n;const t=(n=ni())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jc(){return!Xc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zc(){try{return typeof indexedDB=="object"}catch{return!1}}function th(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="FirebaseError";class xe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=eh,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?nh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new xe(s,u,r)}}function nh(n,t){return n.replace(rh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const rh=/\{\$([^}]+)}/g;function bs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Jo(o)&&Jo(a)){if(!bs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Jo(n){return n!==null&&typeof n=="object"}/**
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
 */function mn(n){return n&&n._delegate?n._delegate:n}class _n{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const oe="[DEFAULT]";/**
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
 */class sh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Wc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(oh(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ih(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ih(n){return n===oe?void 0:n}function oh(n){return n.instantiationMode==="EAGER"}/**
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
 */class ah{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new sh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const lh={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},uh=H.INFO,ch={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},hh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ch[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pl{constructor(t){this.name=t,this._logLevel=uh,this._logHandler=hh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?lh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const dh=(n,t)=>t.some(e=>n instanceof e);let Zo,ta;function fh(){return Zo||(Zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ph(){return ta||(ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ml=new WeakMap,Rs=new WeakMap,_l=new WeakMap,cs=new WeakMap,ri=new WeakMap;function mh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ml.set(e,n)}).catch(()=>{}),ri.set(t,n),t}function _h(n){if(Rs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Rs.set(n,t)}let Ss={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Rs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||_l.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function gh(n){Ss=n(Ss)}function yh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hs(this),t,...e);return _l.set(r,t.sort?t.sort():[t]),Yt(r)}:ph().includes(n)?function(...t){return n.apply(hs(this),t),Yt(ml.get(this))}:function(...t){return Yt(n.apply(hs(this),t))}}function vh(n){return typeof n=="function"?yh(n):(n instanceof IDBTransaction&&_h(n),dh(n,fh())?new Proxy(n,Ss):n)}function Yt(n){if(n instanceof IDBRequest)return mh(n);if(cs.has(n))return cs.get(n);const t=vh(n);return t!==n&&(cs.set(n,t),ri.set(t,n)),t}const hs=n=>ri.get(n);function Eh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=Yt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Yt(a.result),h.oldVersion,h.newVersion,Yt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Th=["get","getKey","getAll","getAllKeys","count"],wh=["put","add","delete","clear"],ds=new Map;function ea(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=wh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Th.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return ds.set(t,o),o}gh(n=>({...n,get:(t,e,r)=>ea(t,e)||n.get(t,e,r),has:(t,e)=>!!ea(t,e)||n.has(t,e)}));/**
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
 */class Ih{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ah(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ah(n){const t=n.getComponent();return t?.type==="VERSION"}const Ps="@firebase/app",na="0.10.13";/**
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
 */const $t=new pl("@firebase/app"),bh="@firebase/app-compat",Rh="@firebase/analytics-compat",Sh="@firebase/analytics",Ph="@firebase/app-check-compat",Ch="@firebase/app-check",Vh="@firebase/auth",Dh="@firebase/auth-compat",kh="@firebase/database",Nh="@firebase/data-connect",Mh="@firebase/database-compat",xh="@firebase/functions",Oh="@firebase/functions-compat",Lh="@firebase/installations",Fh="@firebase/installations-compat",Uh="@firebase/messaging",Bh="@firebase/messaging-compat",$h="@firebase/performance",qh="@firebase/performance-compat",jh="@firebase/remote-config",zh="@firebase/remote-config-compat",Hh="@firebase/storage",Kh="@firebase/storage-compat",Gh="@firebase/firestore",Wh="@firebase/vertexai-preview",Qh="@firebase/firestore-compat",Yh="firebase",Xh="10.14.1";/**
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
 */const Cs="[DEFAULT]",Jh={[Ps]:"fire-core",[bh]:"fire-core-compat",[Sh]:"fire-analytics",[Rh]:"fire-analytics-compat",[Ch]:"fire-app-check",[Ph]:"fire-app-check-compat",[Vh]:"fire-auth",[Dh]:"fire-auth-compat",[kh]:"fire-rtdb",[Nh]:"fire-data-connect",[Mh]:"fire-rtdb-compat",[xh]:"fire-fn",[Oh]:"fire-fn-compat",[Lh]:"fire-iid",[Fh]:"fire-iid-compat",[Uh]:"fire-fcm",[Bh]:"fire-fcm-compat",[$h]:"fire-perf",[qh]:"fire-perf-compat",[jh]:"fire-rc",[zh]:"fire-rc-compat",[Hh]:"fire-gcs",[Kh]:"fire-gcs-compat",[Gh]:"fire-fst",[Qh]:"fire-fst-compat",[Wh]:"fire-vertex","fire-js":"fire-js",[Yh]:"fire-js-all"};/**
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
 */const mr=new Map,Zh=new Map,Vs=new Map;function ra(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function _r(n){const t=n.name;if(Vs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Vs.set(t,n);for(const e of mr.values())ra(e,n);for(const e of Zh.values())ra(e,n);return!0}function td(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const ed={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new fl("app","Firebase",ed);/**
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
 */class nd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const rd=Xh;function gl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Cs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(e||(e=dl()),!e)throw Xt.create("no-options");const o=mr.get(s);if(o){if(bs(e,o.options)&&bs(r,o.config))return o;throw Xt.create("duplicate-app",{appName:s})}const a=new ah(s);for(const h of Vs.values())a.addComponent(h);const u=new nd(e,r,a);return mr.set(s,u),u}function sd(n=Cs){const t=mr.get(n);if(!t&&n===Cs&&dl())return gl();if(!t)throw Xt.create("no-app",{appName:n});return t}function Ie(n,t,e){var r;let s=(r=Jh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(u.join(" "));return}_r(new _n(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const id="firebase-heartbeat-database",od=1,gn="firebase-heartbeat-store";let fs=null;function yl(){return fs||(fs=Eh(id,od,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(gn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),fs}async function ad(n){try{const e=(await yl()).transaction(gn),r=await e.objectStore(gn).get(vl(n));return await e.done,r}catch(t){if(t instanceof xe)$t.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t?.message});$t.warn(e.message)}}}async function sa(n,t){try{const r=(await yl()).transaction(gn,"readwrite");await r.objectStore(gn).put(t,vl(n)),await r.done}catch(e){if(e instanceof xe)$t.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e?.message});$t.warn(r.message)}}}function vl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ld=1024,ud=30*24*60*60*1e3;class cd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new dd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ia();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=ud}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ia(),{heartbeatsToSend:r,unsentEntries:s}=hd(this._heartbeatsCache.heartbeats),o=pr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $t.warn(e),""}}}function ia(){return new Date().toISOString().substring(0,10)}function hd(n,t=ld){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),oa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),oa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class dd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zc()?th().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ad(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function oa(n){return pr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function fd(n){_r(new _n("platform-logger",t=>new Ih(t),"PRIVATE")),_r(new _n("heartbeat",t=>new cd(t),"PRIVATE")),Ie(Ps,na,n),Ie(Ps,na,"esm2017"),Ie("fire-js","")}fd("");var pd="firebase",md="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(pd,md,"app");var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var le,El;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,y){function p(){}p.prototype=y.prototype,T.D=y.prototype,T.prototype=new p,T.prototype.constructor=T,T.C=function(E,I,b){for(var v=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)v[Lt-2]=arguments[Lt];return y.prototype[I].apply(E,v)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,p){p||(p=0);var E=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)E[I]=y.charCodeAt(p++)|y.charCodeAt(p++)<<8|y.charCodeAt(p++)<<16|y.charCodeAt(p++)<<24;else for(I=0;16>I;++I)E[I]=y[p++]|y[p++]<<8|y[p++]<<16|y[p++]<<24;y=T.g[0],p=T.g[1],I=T.g[2];var b=T.g[3],v=y+(b^p&(I^b))+E[0]+3614090360&4294967295;y=p+(v<<7&4294967295|v>>>25),v=b+(I^y&(p^I))+E[1]+3905402710&4294967295,b=y+(v<<12&4294967295|v>>>20),v=I+(p^b&(y^p))+E[2]+606105819&4294967295,I=b+(v<<17&4294967295|v>>>15),v=p+(y^I&(b^y))+E[3]+3250441966&4294967295,p=I+(v<<22&4294967295|v>>>10),v=y+(b^p&(I^b))+E[4]+4118548399&4294967295,y=p+(v<<7&4294967295|v>>>25),v=b+(I^y&(p^I))+E[5]+1200080426&4294967295,b=y+(v<<12&4294967295|v>>>20),v=I+(p^b&(y^p))+E[6]+2821735955&4294967295,I=b+(v<<17&4294967295|v>>>15),v=p+(y^I&(b^y))+E[7]+4249261313&4294967295,p=I+(v<<22&4294967295|v>>>10),v=y+(b^p&(I^b))+E[8]+1770035416&4294967295,y=p+(v<<7&4294967295|v>>>25),v=b+(I^y&(p^I))+E[9]+2336552879&4294967295,b=y+(v<<12&4294967295|v>>>20),v=I+(p^b&(y^p))+E[10]+4294925233&4294967295,I=b+(v<<17&4294967295|v>>>15),v=p+(y^I&(b^y))+E[11]+2304563134&4294967295,p=I+(v<<22&4294967295|v>>>10),v=y+(b^p&(I^b))+E[12]+1804603682&4294967295,y=p+(v<<7&4294967295|v>>>25),v=b+(I^y&(p^I))+E[13]+4254626195&4294967295,b=y+(v<<12&4294967295|v>>>20),v=I+(p^b&(y^p))+E[14]+2792965006&4294967295,I=b+(v<<17&4294967295|v>>>15),v=p+(y^I&(b^y))+E[15]+1236535329&4294967295,p=I+(v<<22&4294967295|v>>>10),v=y+(I^b&(p^I))+E[1]+4129170786&4294967295,y=p+(v<<5&4294967295|v>>>27),v=b+(p^I&(y^p))+E[6]+3225465664&4294967295,b=y+(v<<9&4294967295|v>>>23),v=I+(y^p&(b^y))+E[11]+643717713&4294967295,I=b+(v<<14&4294967295|v>>>18),v=p+(b^y&(I^b))+E[0]+3921069994&4294967295,p=I+(v<<20&4294967295|v>>>12),v=y+(I^b&(p^I))+E[5]+3593408605&4294967295,y=p+(v<<5&4294967295|v>>>27),v=b+(p^I&(y^p))+E[10]+38016083&4294967295,b=y+(v<<9&4294967295|v>>>23),v=I+(y^p&(b^y))+E[15]+3634488961&4294967295,I=b+(v<<14&4294967295|v>>>18),v=p+(b^y&(I^b))+E[4]+3889429448&4294967295,p=I+(v<<20&4294967295|v>>>12),v=y+(I^b&(p^I))+E[9]+568446438&4294967295,y=p+(v<<5&4294967295|v>>>27),v=b+(p^I&(y^p))+E[14]+3275163606&4294967295,b=y+(v<<9&4294967295|v>>>23),v=I+(y^p&(b^y))+E[3]+4107603335&4294967295,I=b+(v<<14&4294967295|v>>>18),v=p+(b^y&(I^b))+E[8]+1163531501&4294967295,p=I+(v<<20&4294967295|v>>>12),v=y+(I^b&(p^I))+E[13]+2850285829&4294967295,y=p+(v<<5&4294967295|v>>>27),v=b+(p^I&(y^p))+E[2]+4243563512&4294967295,b=y+(v<<9&4294967295|v>>>23),v=I+(y^p&(b^y))+E[7]+1735328473&4294967295,I=b+(v<<14&4294967295|v>>>18),v=p+(b^y&(I^b))+E[12]+2368359562&4294967295,p=I+(v<<20&4294967295|v>>>12),v=y+(p^I^b)+E[5]+4294588738&4294967295,y=p+(v<<4&4294967295|v>>>28),v=b+(y^p^I)+E[8]+2272392833&4294967295,b=y+(v<<11&4294967295|v>>>21),v=I+(b^y^p)+E[11]+1839030562&4294967295,I=b+(v<<16&4294967295|v>>>16),v=p+(I^b^y)+E[14]+4259657740&4294967295,p=I+(v<<23&4294967295|v>>>9),v=y+(p^I^b)+E[1]+2763975236&4294967295,y=p+(v<<4&4294967295|v>>>28),v=b+(y^p^I)+E[4]+1272893353&4294967295,b=y+(v<<11&4294967295|v>>>21),v=I+(b^y^p)+E[7]+4139469664&4294967295,I=b+(v<<16&4294967295|v>>>16),v=p+(I^b^y)+E[10]+3200236656&4294967295,p=I+(v<<23&4294967295|v>>>9),v=y+(p^I^b)+E[13]+681279174&4294967295,y=p+(v<<4&4294967295|v>>>28),v=b+(y^p^I)+E[0]+3936430074&4294967295,b=y+(v<<11&4294967295|v>>>21),v=I+(b^y^p)+E[3]+3572445317&4294967295,I=b+(v<<16&4294967295|v>>>16),v=p+(I^b^y)+E[6]+76029189&4294967295,p=I+(v<<23&4294967295|v>>>9),v=y+(p^I^b)+E[9]+3654602809&4294967295,y=p+(v<<4&4294967295|v>>>28),v=b+(y^p^I)+E[12]+3873151461&4294967295,b=y+(v<<11&4294967295|v>>>21),v=I+(b^y^p)+E[15]+530742520&4294967295,I=b+(v<<16&4294967295|v>>>16),v=p+(I^b^y)+E[2]+3299628645&4294967295,p=I+(v<<23&4294967295|v>>>9),v=y+(I^(p|~b))+E[0]+4096336452&4294967295,y=p+(v<<6&4294967295|v>>>26),v=b+(p^(y|~I))+E[7]+1126891415&4294967295,b=y+(v<<10&4294967295|v>>>22),v=I+(y^(b|~p))+E[14]+2878612391&4294967295,I=b+(v<<15&4294967295|v>>>17),v=p+(b^(I|~y))+E[5]+4237533241&4294967295,p=I+(v<<21&4294967295|v>>>11),v=y+(I^(p|~b))+E[12]+1700485571&4294967295,y=p+(v<<6&4294967295|v>>>26),v=b+(p^(y|~I))+E[3]+2399980690&4294967295,b=y+(v<<10&4294967295|v>>>22),v=I+(y^(b|~p))+E[10]+4293915773&4294967295,I=b+(v<<15&4294967295|v>>>17),v=p+(b^(I|~y))+E[1]+2240044497&4294967295,p=I+(v<<21&4294967295|v>>>11),v=y+(I^(p|~b))+E[8]+1873313359&4294967295,y=p+(v<<6&4294967295|v>>>26),v=b+(p^(y|~I))+E[15]+4264355552&4294967295,b=y+(v<<10&4294967295|v>>>22),v=I+(y^(b|~p))+E[6]+2734768916&4294967295,I=b+(v<<15&4294967295|v>>>17),v=p+(b^(I|~y))+E[13]+1309151649&4294967295,p=I+(v<<21&4294967295|v>>>11),v=y+(I^(p|~b))+E[4]+4149444226&4294967295,y=p+(v<<6&4294967295|v>>>26),v=b+(p^(y|~I))+E[11]+3174756917&4294967295,b=y+(v<<10&4294967295|v>>>22),v=I+(y^(b|~p))+E[2]+718787259&4294967295,I=b+(v<<15&4294967295|v>>>17),v=p+(b^(I|~y))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var p=y-this.blockSize,E=this.B,I=this.h,b=0;b<y;){if(I==0)for(;b<=p;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<y;)if(E[I++]=T.charCodeAt(b++),I==this.blockSize){s(this,E),I=0;break}}else for(;b<y;)if(E[I++]=T[b++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var p=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=p&255,p/=256;for(this.u(T),T=Array(16),y=p=0;4>y;++y)for(var E=0;32>E;E+=8)T[p++]=this.g[y]>>>E&255;return T};function o(T,y){var p=u;return Object.prototype.hasOwnProperty.call(p,T)?p[T]:p[T]=y(T)}function a(T,y){this.h=y;for(var p=[],E=!0,I=T.length-1;0<=I;I--){var b=T[I]|0;E&&b==y||(p[I]=b,E=!1)}this.g=p}var u={};function h(T){return-128<=T&&128>T?o(T,function(y){return new a([y|0],0>y?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return w;if(0>T)return V(d(-T));for(var y=[],p=1,E=0;T>=p;E++)y[E]=T/p|0,p*=4294967296;return new a(y,0)}function m(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return V(m(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(y,8)),E=w,I=0;I<T.length;I+=8){var b=Math.min(8,T.length-I),v=parseInt(T.substring(I,I+b),y);8>b?(b=d(Math.pow(y,b)),E=E.j(b).add(d(v))):(E=E.j(p),E=E.add(d(v)))}return E}var w=h(0),g=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var T=0,y=1,p=0;p<this.g.length;p++){var E=this.i(p);T+=(0<=E?E:4294967296+E)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(N(this))return"-"+V(this).toString(T);for(var y=d(Math.pow(T,6)),p=this,E="";;){var I=q(p,y).g;p=L(p,I.j(y));var b=((0<p.g.length?p.g[0]:p.h)>>>0).toString(T);if(p=I,C(p))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=L(this,T),N(T)?-1:C(T)?0:1};function V(T){for(var y=T.g.length,p=[],E=0;E<y;E++)p[E]=~T.g[E];return new a(p,~T.h).add(g)}n.abs=function(){return N(this)?V(this):this},n.add=function(T){for(var y=Math.max(this.g.length,T.g.length),p=[],E=0,I=0;I<=y;I++){var b=E+(this.i(I)&65535)+(T.i(I)&65535),v=(b>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=v>>>16,b&=65535,v&=65535,p[I]=v<<16|b}return new a(p,p[p.length-1]&-2147483648?-1:0)};function L(T,y){return T.add(V(y))}n.j=function(T){if(C(this)||C(T))return w;if(N(this))return N(T)?V(this).j(V(T)):V(V(this).j(T));if(N(T))return V(this.j(V(T)));if(0>this.l(R)&&0>T.l(R))return d(this.m()*T.m());for(var y=this.g.length+T.g.length,p=[],E=0;E<2*y;E++)p[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var b=this.i(E)>>>16,v=this.i(E)&65535,Lt=T.i(I)>>>16,Ue=T.i(I)&65535;p[2*E+2*I]+=v*Ue,O(p,2*E+2*I),p[2*E+2*I+1]+=b*Ue,O(p,2*E+2*I+1),p[2*E+2*I+1]+=v*Lt,O(p,2*E+2*I+1),p[2*E+2*I+2]+=b*Lt,O(p,2*E+2*I+2)}for(E=0;E<y;E++)p[E]=p[2*E+1]<<16|p[2*E];for(E=y;E<2*y;E++)p[E]=0;return new a(p,0)};function O(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function $(T,y){this.g=T,this.h=y}function q(T,y){if(C(y))throw Error("division by zero");if(C(T))return new $(w,w);if(N(T))return y=q(V(T),y),new $(V(y.g),V(y.h));if(N(y))return y=q(T,V(y)),new $(V(y.g),y.h);if(30<T.g.length){if(N(T)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var p=g,E=y;0>=E.l(T);)p=J(p),E=J(E);var I=Q(p,1),b=Q(E,1);for(E=Q(E,2),p=Q(p,2);!C(E);){var v=b.add(E);0>=v.l(T)&&(I=I.add(p),b=v),E=Q(E,1),p=Q(p,1)}return y=L(T,I.j(y)),new $(I,y)}for(I=w;0<=T.l(y);){for(p=Math.max(1,Math.floor(T.m()/y.m())),E=Math.ceil(Math.log(p)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(p),v=b.j(y);N(v)||0<v.l(T);)p-=E,b=d(p),v=b.j(y);C(b)&&(b=g),I=I.add(b),T=L(T,v)}return new $(I,T)}n.A=function(T){return q(this,T).h},n.and=function(T){for(var y=Math.max(this.g.length,T.g.length),p=[],E=0;E<y;E++)p[E]=this.i(E)&T.i(E);return new a(p,this.h&T.h)},n.or=function(T){for(var y=Math.max(this.g.length,T.g.length),p=[],E=0;E<y;E++)p[E]=this.i(E)|T.i(E);return new a(p,this.h|T.h)},n.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),p=[],E=0;E<y;E++)p[E]=this.i(E)^T.i(E);return new a(p,this.h^T.h)};function J(T){for(var y=T.g.length+1,p=[],E=0;E<y;E++)p[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(p,T.h)}function Q(T,y){var p=y>>5;y%=32;for(var E=T.g.length-p,I=[],b=0;b<E;b++)I[b]=0<y?T.i(b+p)>>>y|T.i(b+p+1)<<32-y:T.i(b+p);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,El=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,le=a}).apply(typeof aa<"u"?aa:typeof self<"u"?self:typeof window<"u"?window:{});var Yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tl,sn,wl,ir,Ds,Il,Al,bl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yn=="object"&&Yn];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break t;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var S=c++;return{value:l(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,c){return i.call.apply(i.bind,arguments)}function w(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function g(i,l,c){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:w,g.apply(null,arguments)}function R(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function C(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,S){for(var k=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)k[Y-2]=arguments[Y];return l.prototype[A].apply(f,k)}}function N(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function V(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,S=f.length||0;i.length=A+S;for(let k=0;k<S;k++)i[A+k]=f[k]}else i.push(f)}}class L{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function q(i){return q[" "](i),i}q[" "]=function(){};var J=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Q(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function T(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function y(i){const l={};for(const c in i)l[c]=i[c];return l}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let S=0;S<p.length;S++)c=p[S],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function I(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function b(i){u.setTimeout(()=>{throw i},0)}function v(){var i=Fr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Lt{constructor(){this.h=this.g=null}add(l,c){const f=Ue.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Ue=new L(()=>new ju,i=>i.reset());class ju{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,$e=!1,Fr=new Lt,Li=()=>{const i=u.Promise.resolve(void 0);Be=()=>{i.then(zu)}};var zu=()=>{for(var i;i=v();){try{i.h.call(i.g)}catch(c){b(c)}var l=Ue;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}$e=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _t(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var Hu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function qe(i,l){if(_t.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(J){t:{try{q(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ku[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&qe.aa.h.call(this)}}C(qe,_t);var Ku={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),Gu=0;function Wu(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++Gu,this.da=this.fa=!1}function Cn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Vn(i){this.src=i,this.g={},this.h=0}Vn.prototype.add=function(i,l,c,f,A){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var k=Br(i,l,f,A);return-1<k?(l=i[k],c||(l.fa=!1)):(l=new Wu(l,this.src,S,!!f,A),l.fa=c,i.push(l)),l};function Ur(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(Cn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Br(i,l,c,f){for(var A=0;A<i.length;++A){var S=i[A];if(!S.da&&S.listener==l&&S.capture==!!c&&S.ha==f)return A}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),qr={};function Fi(i,l,c,f,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Fi(i,l[S],c,f,A);return null}return c=$i(c),i&&i[Pn]?i.K(l,c,d(f)?!!f.capture:!1,A):Qu(i,l,c,!1,f,A)}function Qu(i,l,c,f,A,S){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,Y=zr(i);if(Y||(i[$r]=Y=new Vn(i)),c=Y.add(l,c,f,k,S),c.proxy)return c;if(f=Yu(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Hu||(A=k),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(Bi(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Yu(){function i(c){return l.call(i.src,i.listener,c)}const l=Xu;return i}function Ui(i,l,c,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)Ui(i,l[S],c,f,A);else f=d(f)?!!f.capture:!!f,c=$i(c),i&&i[Pn]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],c=Br(S,c,f,A),-1<c&&(Cn(S[c]),Array.prototype.splice.call(S,c,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=zr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Br(l,c,f,A)),(c=-1<i?l[i]:null)&&jr(c))}function jr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Pn])Ur(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(Bi(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=zr(l))?(Ur(c,i),c.h==0&&(c.src=null,l[$r]=null)):Cn(i)}}}function Bi(i){return i in qr?qr[i]:qr[i]="on"+i}function Xu(i,l){if(i.da)i=!0;else{l=new qe(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&jr(i),i=c.call(f,l)}return i}function zr(i){return i=i[$r],i instanceof Vn?i:null}var Hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $i(i){return typeof i=="function"?i:(i[Hr]||(i[Hr]=function(l){return i.handleEvent(l)}),i[Hr])}function gt(){jt.call(this),this.i=new Vn(this),this.M=this,this.F=null}C(gt,jt),gt.prototype[Pn]=!0,gt.prototype.removeEventListener=function(i,l,c,f){Ui(this,i,l,c,f)};function At(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new _t(l,i);else if(l instanceof _t)l.target=l.target||i;else{var A=l;l=new _t(f,i),E(l,A)}if(A=!0,c)for(var S=c.length-1;0<=S;S--){var k=l.g=c[S];A=Dn(k,f,!0,l)&&A}if(k=l.g=i,A=Dn(k,f,!0,l)&&A,A=Dn(k,f,!1,l)&&A,c)for(S=0;S<c.length;S++)k=l.g=c[S],A=Dn(k,f,!1,l)&&A}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)Cn(c[f]);delete i.g[l],i.h--}}this.F=null},gt.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},gt.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function Dn(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var k=l[S];if(k&&!k.da&&k.capture==c){var Y=k.listener,ht=k.ha||k.src;k.fa&&Ur(i.i,k),A=Y.call(ht,f)!==!1&&A}}return A&&!f.defaultPrevented}function qi(i,l,c){if(typeof i=="function")c&&(i=g(i,c));else if(i&&typeof i.handleEvent=="function")i=g(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function ji(i){i.g=qi(()=>{i.g=null,i.i&&(i.i=!1,ji(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Ju extends jt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ji(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(i){jt.call(this),this.h=i,this.g={}}C(je,jt);var zi=[];function Hi(i){Q(i.g,function(l,c){this.g.hasOwnProperty(c)&&jr(l)},i),i.g={}}je.prototype.N=function(){je.aa.N.call(this),Hi(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kr=u.JSON.stringify,Zu=u.JSON.parse,tc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Gr(){}Gr.prototype.h=null;function Ki(i){return i.h||(i.h=i.i())}function Gi(){}var ze={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wr(){_t.call(this,"d")}C(Wr,_t);function Qr(){_t.call(this,"c")}C(Qr,_t);var ne={},Wi=null;function kn(){return Wi=Wi||new gt}ne.La="serverreachability";function Qi(i){_t.call(this,ne.La,i)}C(Qi,_t);function He(i){const l=kn();At(l,new Qi(l))}ne.STAT_EVENT="statevent";function Yi(i,l){_t.call(this,ne.STAT_EVENT,i),this.stat=l}C(Yi,_t);function bt(i){const l=kn();At(l,new Yi(l,i))}ne.Ma="timingevent";function Xi(i,l){_t.call(this,ne.Ma,i),this.size=l}C(Xi,_t);function Ke(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function Ge(){this.g=!0}Ge.prototype.xa=function(){this.g=!1};function ec(i,l,c,f,A,S){i.info(function(){if(i.g)if(S)for(var k="",Y=S.split("&"),ht=0;ht<Y.length;ht++){var G=Y[ht].split("=");if(1<G.length){var yt=G[0];G=G[1];var vt=yt.split("_");k=2<=vt.length&&vt[1]=="type"?k+(yt+"="+G+"&"):k+(yt+"=redacted&")}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+k})}function nc(i,l,c,f,A,S,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+S+" "+k})}function _e(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+sc(i,c)+(f?" "+f:"")})}function rc(i,l){i.info(function(){return"TIMEOUT: "+l})}Ge.prototype.info=function(){};function sc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Kr(c)}catch{return l}}var Nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yr;function Mn(){}C(Mn,Gr),Mn.prototype.g=function(){return new XMLHttpRequest},Mn.prototype.i=function(){return{}},Yr=new Mn;function zt(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zi}function Zi(){this.i=null,this.g="",this.h=!1}var to={},Xr={};function Jr(i,l,c){i.L=1,i.v=Fn(Ft(l)),i.m=c,i.P=!0,eo(i,null)}function eo(i,l){i.F=Date.now(),xn(i),i.A=Ft(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),_o(c.i,"t",f),i.C=0,c=i.j.J,i.h=new Zi,i.g=Mo(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Ju(g(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(zi[0]=A.toString()),A=zi);for(var S=0;S<A.length;S++){var k=Fi(c,A[S],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?y(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),He(),ec(i.i,i.u,i.A,i.l,i.R,i.m)}zt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ut(i)==3?l.j():this.Y(i)},zt.prototype.Y=function(i){try{if(i==this.g)t:{const vt=Ut(this.g);var l=this.g.Ba();const ve=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Io(this.g)))){this.J||vt!=4||l==7||(l==8||0>=ve?He(3):He(2)),Zr(this);var c=this.g.Z();this.X=c;e:if(no(this)){var f=Io(this.g);i="";var A=f.length,S=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),We(this);var k="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(S&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=c==200,nc(this.i,this.u,this.A,this.l,this.R,vt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Y,ht=this.g;if((Y=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Y)){var G=Y;break e}}G=null}if(c=G)_e(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,c);else{this.o=!1,this.s=3,bt(12),re(this),We(this);break t}}if(this.P){c=!0;let Dt;for(;!this.J&&this.C<k.length;)if(Dt=ic(this,k),Dt==Xr){vt==4&&(this.s=4,bt(14),c=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==to){this.s=4,bt(15),_e(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else _e(this.i,this.l,Dt,null),ts(this,Dt);if(no(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||k.length!=0||this.h.h||(this.s=1,bt(16),c=!1),this.o=this.o&&c,!c)_e(this.i,this.l,k,"[Invalid Chunked Response]"),re(this),We(this);else if(0<k.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),os(yt),yt.M=!0,bt(11))}}else _e(this.i,this.l,k,null),ts(this,k);vt==4&&re(this),this.o&&!this.J&&(vt==4?Vo(this.j,this):(this.o=!1,xn(this)))}else wc(this.g),c==400&&0<k.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),re(this),We(this)}}}catch{}finally{}};function no(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ic(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?Xr:(c=Number(l.substring(c,f)),isNaN(c)?to:(f+=1,f+c>l.length?Xr:(l=l.slice(f,f+c),i.C=f+c,l)))}zt.prototype.cancel=function(){this.J=!0,re(this)};function xn(i){i.S=Date.now()+i.I,ro(i,i.I)}function ro(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ke(g(i.ba,i),l)}function Zr(i){i.B&&(u.clearTimeout(i.B),i.B=null)}zt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(rc(this.i,this.A),this.L!=2&&(He(),bt(17)),re(this),this.s=2,We(this)):ro(this,this.S-i)};function We(i){i.j.G==0||i.J||Vo(i.j,i)}function re(i){Zr(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Hi(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ts(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||es(c.h,i))){if(!i.K&&es(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)zn(c),qn(c);else break t;is(c),bt(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=Ke(g(c.Za,c),6e3));if(1>=oo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ie(c,11)}else if((i.K||c.g==i)&&zn(c),!O(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let G=A[l];if(c.T=G[0],G=G[1],c.G==2)if(G[0]=="c"){c.K=G[1],c.ia=G[2];const yt=G[3];yt!=null&&(c.la=yt,c.j.info("VER="+c.la));const vt=G[4];vt!=null&&(c.Aa=vt,c.j.info("SVER="+c.Aa));const ve=G[5];ve!=null&&typeof ve=="number"&&0<ve&&(f=1.5*ve,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Dt=i.g;if(Dt){const Kn=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kn){var S=f.h;S.g||Kn.indexOf("spdy")==-1&&Kn.indexOf("quic")==-1&&Kn.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ns(S,S.h),S.h=null))}if(f.D){const as=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;as&&(f.ya=as,Z(f.I,f.D,as))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var k=i;if(f.qa=No(f,f.J?f.ia:null,f.W),k.K){ao(f.h,k);var Y=k,ht=f.L;ht&&(Y.I=ht),Y.B&&(Zr(Y),xn(Y)),f.g=k}else Po(f);0<c.i.length&&jn(c)}else G[0]!="stop"&&G[0]!="close"||ie(c,7);else c.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?ie(c,7):ss(c):G[0]!="noop"&&c.l&&c.l.ta(G),c.v=0)}}He(4)}catch{}}var oc=class{constructor(i,l){this.g=i,this.map=l}};function so(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function io(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function oo(i){return i.h?1:i.g?i.g.size:0}function es(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ns(i,l){i.g?i.g.add(l):i.h=l}function ao(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}so.prototype.cancel=function(){if(this.i=lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function lo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return N(i.i)}function ac(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function lc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function uo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=lc(i),f=ac(i),A=f.length,S=0;S<A;S++)l.call(void 0,f[S],c&&c[S],i)}var co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var S=i[c].substring(0,f);A=i[c].substring(f+1)}else S=i[c];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function se(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof se){this.h=i.h,On(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.s),this.l=i.l;var l=i.i,c=new Xe;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),ho(this,c),this.m=i.m}else i&&(l=String(i).match(co))?(this.h=!1,On(this,l[1]||"",!0),this.o=Qe(l[2]||""),this.g=Qe(l[3]||"",!0),Ln(this,l[4]),this.l=Qe(l[5]||"",!0),ho(this,l[6]||"",!0),this.m=Qe(l[7]||"")):(this.h=!1,this.i=new Xe(null,this.h))}se.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Ye(l,fo,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Ye(l,fo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Ye(c,c.charAt(0)=="/"?dc:hc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Ye(c,pc)),i.join("")};function Ft(i){return new se(i)}function On(i,l,c){i.j=c?Qe(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function ho(i,l,c){l instanceof Xe?(i.i=l,mc(i.i,i.h)):(c||(l=Ye(l,fc)),i.i=new Xe(l,i.h))}function Z(i,l,c){i.i.set(l,c)}function Fn(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Qe(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ye(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,cc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function cc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var fo=/[#\/\?@]/g,hc=/[#\?:]/g,dc=/[#\?]/g,fc=/[#\?@]/g,pc=/#/g;function Xe(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Ht(i){i.g||(i.g=new Map,i.h=0,i.i&&uc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=Xe.prototype,n.add=function(i,l){Ht(this),this.i=null,i=ge(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function po(i,l){Ht(i),l=ge(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function mo(i,l){return Ht(i),l=ge(i,l),i.g.has(l)}n.forEach=function(i,l){Ht(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){Ht(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let S=0;S<A.length;S++)c.push(l[f])}return c},n.V=function(i){Ht(this);let l=[];if(typeof i=="string")mo(this,i)&&(l=l.concat(this.g.get(ge(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return Ht(this),this.i=null,i=ge(this,i),mo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function _o(i,l,c){po(i,l),0<c.length&&(i.i=null,i.g.set(ge(i,l),N(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const S=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=S;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function ge(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function mc(i,l){l&&!i.j&&(Ht(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(po(this,f),_o(this,A,c))},i)),i.j=l}function _c(i,l){const c=new Ge;if(u.Image){const f=new Image;f.onload=R(Kt,c,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Kt,c,"TestLoadImage: error",!1,l,f),f.onabort=R(Kt,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Kt,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function gc(i,l){const c=new Ge,f=new AbortController,A=setTimeout(()=>{f.abort(),Kt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?Kt(c,"TestPingServer: ok",!0,l):Kt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Kt(c,"TestPingServer: error",!1,l)})}function Kt(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function yc(){this.g=new tc}function vc(i,l,c){const f=c||"";try{uo(i,function(A,S){let k=A;d(A)&&(k=Kr(A)),l.push(f+S+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function Un(i){this.l=i.Ub||null,this.j=i.eb||!1}C(Un,Gr),Un.prototype.g=function(){return new Bn(this.l,this.j)},Un.prototype.i=function(i){return function(){return i}}({});function Bn(i,l){gt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Bn,gt),n=Bn.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Ze(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Je(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ze(this)),this.g&&(this.readyState=3,Ze(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;go(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function go(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Je(this):Ze(this),this.readyState==3&&go(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Je(this))},n.Qa=function(i){this.g&&(this.response=i,Je(this))},n.ga=function(){this.g&&Je(this)};function Je(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Ze(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function Ze(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function yo(i){let l="";return Q(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function rs(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=yo(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):Z(i,l,c))}function et(i){gt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(et,gt);var Ec=/^https?$/i,Tc=["POST","PUT"];n=et.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yr.g(),this.v=this.o?Ki(this.o):Ki(Yr),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){vo(this,S);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())c.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(S=>S.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Tc,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of c)this.g.setRequestHeader(S,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wo(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){vo(this,S)}};function vo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Eo(i),$n(i)}function Eo(i){i.A||(i.A=!0,At(i,"complete"),At(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,At(this,"complete"),At(this,"abort"),$n(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?To(this):this.bb())},n.bb=function(){To(this)};function To(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ut(i)!=4||i.Z()!=2)){if(i.u&&Ut(i)==4)qi(i.Ea,0,i);else if(At(i,"readystatechange"),Ut(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=k===0){var A=String(i.D).match(co)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Ec.test(A?A.toLowerCase():"")}c=f}if(c)At(i,"complete"),At(i,"success");else{i.m=6;try{var S=2<Ut(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",Eo(i)}}finally{$n(i)}}}}function $n(i,l){if(i.g){wo(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||At(i,"ready");try{c.onreadystatechange=f}catch{}}}function wo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ut(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Zu(l)}};function Io(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function wc(i){const l={};i=(i.g&&2<=Ut(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(O(i[f]))continue;var c=I(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const S=l[A]||[];l[A]=S,S.push(c)}T(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Ao(i){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tn("baseRetryDelayMs",5e3,i),this.cb=tn("retryDelaySeedMs",1e4,i),this.Wa=tn("forwardChannelMaxRetries",2,i),this.wa=tn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new so(i&&i.concurrentRequestLimit),this.Da=new yc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ao.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){bt(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=No(this,null,this.W),jn(this)};function ss(i){if(bo(i),i.G==3){var l=i.U++,c=Ft(i.I);if(Z(c,"SID",i.K),Z(c,"RID",l),Z(c,"TYPE","terminate"),en(i,c),l=new zt(i,i.j,l),l.L=2,l.v=Fn(Ft(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Mo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),xn(l)}ko(i)}function qn(i){i.g&&(os(i),i.g.cancel(),i.g=null)}function bo(i){qn(i),i.u&&(u.clearTimeout(i.u),i.u=null),zn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function jn(i){if(!io(i.h)&&!i.s){i.s=!0;var l=i.Ga;Be||Li(),$e||(Be(),$e=!0),Fr.add(l,i),i.B=0}}function Ic(i,l){return oo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ke(g(i.Ga,i,l),Do(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new zt(this,this.j,i);let S=this.o;if(this.S&&(S?(S=y(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=So(this,A,l),c=Ft(this.I),Z(c,"RID",i),Z(c,"CVER",22),this.D&&Z(c,"X-HTTP-Session-Id",this.D),en(this,c),S&&(this.O?l="headers="+encodeURIComponent(String(yo(S)))+"&"+l:this.m&&rs(c,this.m,S)),ns(this.h,A),this.Ua&&Z(c,"TYPE","init"),this.P?(Z(c,"$req",l),Z(c,"SID","null"),A.T=!0,Jr(A,c,null)):Jr(A,c,l),this.G=2}}else this.G==3&&(i?Ro(this,i):this.i.length==0||io(this.h)||Ro(this))};function Ro(i,l){var c;l?c=l.l:c=i.U++;const f=Ft(i.I);Z(f,"SID",i.K),Z(f,"RID",c),Z(f,"AID",i.T),en(i,f),i.m&&i.o&&rs(f,i.m,i.o),c=new zt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=So(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ns(i.h,c),Jr(c,f,l)}function en(i,l){i.H&&Q(i.H,function(c,f){Z(l,f,c)}),i.l&&uo({},function(c,f){Z(l,f,c)})}function So(i,l,c){c=Math.min(i.i.length,c);var f=i.l?g(i.l.Na,i.l,i):null;t:{var A=i.i;let S=-1;for(;;){const k=["count="+c];S==-1?0<c?(S=A[0].g,k.push("ofs="+S)):S=0:k.push("ofs="+S);let Y=!0;for(let ht=0;ht<c;ht++){let G=A[ht].g;const yt=A[ht].map;if(G-=S,0>G)S=Math.max(0,A[ht].g-100),Y=!1;else try{vc(yt,k,"req"+G+"_")}catch{f&&f(yt)}}if(Y){f=k.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,f}function Po(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Be||Li(),$e||(Be(),$e=!0),Fr.add(l,i),i.v=0}}function is(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ke(g(i.Fa,i),Do(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Co(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ke(g(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),qn(this),Co(this))};function os(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Co(i){i.g=new zt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Ft(i.qa);Z(l,"RID","rpc"),Z(l,"SID",i.K),Z(l,"AID",i.T),Z(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(l,"TO",i.ja),Z(l,"TYPE","xmlhttp"),en(i,l),i.m&&i.o&&rs(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Fn(Ft(l)),c.m=null,c.P=!0,eo(c,i)}n.Za=function(){this.C!=null&&(this.C=null,qn(this),is(this),bt(19))};function zn(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Vo(i,l){var c=null;if(i.g==l){zn(i),os(i),i.g=null;var f=2}else if(es(i.h,l))c=l.D,ao(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=kn(),At(f,new Xi(f,c)),jn(i)}else Po(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Ic(i,l)||f==2&&is(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:ie(i,5);break;case 4:ie(i,10);break;case 3:ie(i,6);break;default:ie(i,2)}}}function Do(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function ie(i,l){if(i.j.info("Error code "+l),l==2){var c=g(i.fb,i),f=i.Xa;const A=!f;f=new se(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||On(f,"https"),Fn(f),A?_c(f.toString(),c):gc(f.toString(),c)}else bt(2);i.G=0,i.l&&i.l.sa(l),ko(i),bo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function ko(i){if(i.G=0,i.ka=[],i.l){const l=lo(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function No(i,l,c){var f=c instanceof se?Ft(c):new se(c);if(f.g!="")l&&(f.g=l+"."+f.g),Ln(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new se(null);f&&On(S,f),l&&(S.g=l),A&&Ln(S,A),c&&(S.l=c),f=S}return c=i.D,l=i.ya,c&&l&&Z(f,c,l),Z(f,"VER",i.la),en(i,f),f}function Mo(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new et(new Un({eb:c})):new et(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xo(){}n=xo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hn(){}Hn.prototype.g=function(i,l){return new Ct(i,l)};function Ct(i,l){gt.call(this),this.g=new Ao(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!O(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new ye(this)}C(Ct,gt),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){ss(this.g)},Ct.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Kr(i),i=c);l.i.push(new oc(l.Ya++,i)),l.G==3&&jn(l)},Ct.prototype.N=function(){this.g.l=null,delete this.j,ss(this.g),delete this.g,Ct.aa.N.call(this)};function Oo(i){Wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}C(Oo,Wr);function Lo(){Qr.call(this),this.status=1}C(Lo,Qr);function ye(i){this.g=i}C(ye,xo),ye.prototype.ua=function(){At(this.g,"a")},ye.prototype.ta=function(i){At(this.g,new Oo(i))},ye.prototype.sa=function(i){At(this.g,new Lo)},ye.prototype.ra=function(){At(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,bl=function(){return new Hn},Al=function(){return kn()},Il=ne,Ds={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,ir=Nn,Ji.COMPLETE="complete",wl=Ji,Gi.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",gt.prototype.listen=gt.prototype.K,sn=Gi,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,Tl=et}).apply(typeof Yn<"u"?Yn:typeof self<"u"?self:typeof window<"u"?window:{});const la="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new pl("@firebase/firestore");function rn(){return de.logLevel}function M(n,...t){if(de.logLevel<=H.DEBUG){const e=t.map(si);de.debug(`Firestore (${Oe}): ${n}`,...e)}}function qt(n,...t){if(de.logLevel<=H.ERROR){const e=t.map(si);de.error(`Firestore (${Oe}): ${n}`,...e)}}function Pe(n,...t){if(de.logLevel<=H.WARN){const e=t.map(si);de.warn(`Firestore (${Oe}): ${n}`,...e)}}function si(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function B(n="Unexpected state"){const t=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: `+n;throw qt(t),new Error(t)}function nt(n,t){n||B()}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends xe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _d{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class gd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class yd{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ue,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ue)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new Rl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new Tt(t)}}class vd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ed{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new vd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Td{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){nt(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new Td(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Id(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function W(n,t){return n<t?-1:n>t?1:0}function Ce(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ct(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new ct(0,0))}static max(){return new U(new ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e,r){e===void 0?e=0:e>t.length&&B(),r===void 0?r=t.length-e:r>t.length-e&&B(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return yn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends yn{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const bd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends yn{construct(t,e,r){return new It(t,e,r)}static isValidIdentifier(t){return bd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new x(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new It(e)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(tt.fromString(t))}static fromName(t){return new F(tt.fromString(t).popFirst(5))}static empty(){return new F(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new tt(t.slice()))}}function Rd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ct(e+1,0):new ct(e,r));return new Zt(s,F.empty(),t)}function Sd(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(U.min(),F.empty(),-1)}static max(){return new Zt(U.max(),F.empty(),-1)}}function Pd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:W(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Cd)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Dd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function wn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class oi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}oi.oe=-1;function Sr(n){return n==null}function gr(n){return n===0&&1/n==-1/0}function kd(n){return typeof n=="number"&&Number.isInteger(n)&&!gr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function In(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Sl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||dt.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xn(this.root,t,this.comparator,!0)}}class Xn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new dt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const t=this.left.check();if(t!==this.right.check())throw B();return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,r,s,o){return this}insert(t,e,r){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ca(this.data.getIterator())}getIteratorFrom(t){return new ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.fields=t,t.sort(It.comparator)}static empty(){return new Wt([])}unionWith(t){let e=new pt(It.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ce(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Pl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Pl("Invalid base64 string: "+o):o}}(t);return new mt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Nd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(nt(!!n),typeof n=="string"){let t=0;const e=Nd.exec(n);if(nt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?mt.fromBase64String(n):mt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function li(n){const t=n.mapValue.fields.__previous_value__;return ai(t)?li(t):t}function vn(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,e,r,s,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class En{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new En("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof En&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={mapValue:{}};function pe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ai(n)?4:Od(n)?9007199254740991:xd(n)?10:11:B()}function xt(n,t){if(n===t)return!0;const e=pe(n);if(e!==pe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return vn(n).isEqual(vn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=te(s.timestampValue),u=te(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return fe(s.bytesValue).isEqual(fe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=rt(s.doubleValue),u=rt(o.doubleValue);return a===u?gr(a)===gr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Ce(n.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(ua(a)!==ua(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!xt(a[h],u[h])))return!1;return!0}(n,t);default:return B()}}function Tn(n,t){return(n.values||[]).find(e=>xt(e,t))!==void 0}function Ve(n,t){if(n===t)return 0;const e=pe(n),r=pe(t);if(e!==r)return W(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return ha(n.timestampValue,t.timestampValue);case 4:return ha(vn(n),vn(t));case 5:return W(n.stringValue,t.stringValue);case 6:return function(o,a){const u=fe(o),h=fe(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=W(u[d],h[d]);if(m!==0)return m}return W(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=W(rt(o.latitude),rt(a.latitude));return u!==0?u:W(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return da(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;const w=o.fields||{},g=a.fields||{},R=(u=w.value)===null||u===void 0?void 0:u.arrayValue,C=(h=g.value)===null||h===void 0?void 0:h.arrayValue,N=W(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((m=C?.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:da(R,C)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Jn.mapValue&&a===Jn.mapValue)return 0;if(o===Jn.mapValue)return 1;if(a===Jn.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let w=0;w<h.length&&w<m.length;++w){const g=W(h[w],m[w]);if(g!==0)return g;const R=Ve(u[h[w]],d[m[w]]);if(R!==0)return R}return W(h.length,m.length)}(n.mapValue,t.mapValue);default:throw B()}}function ha(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return W(n,t);const e=te(n),r=te(t),s=W(e.seconds,r.seconds);return s!==0?s:W(e.nanos,r.nanos)}function da(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ve(e[s],r[s]);if(o)return o}return W(e.length,r.length)}function De(n){return ks(n)}function ks(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ks(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ks(e.fields[a])}`;return s+"}"}(n.mapValue):B()}function fa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ns(n){return!!n&&"integerValue"in n}function ui(n){return!!n&&"arrayValue"in n}function pa(n){return!!n&&"nullValue"in n}function ma(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ps(n){return!!n&&"mapValue"in n}function xd(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return In(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Od(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ps(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=It.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=cn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ps(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ps(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){In(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Nt(cn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new wt(t,0,U.min(),U.min(),U.min(),Nt.empty(),0)}static newFoundDocument(t,e,r,s){return new wt(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new wt(t,2,e,U.min(),U.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,U.min(),U.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yr{constructor(t,e){this.position=t,this.inclusive=e}}function _a(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=Ve(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ga(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!xt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class vr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ld(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Cl{}class lt extends Cl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ud(t,e,r):e==="array-contains"?new qd(t,r):e==="in"?new jd(t,r):e==="not-in"?new zd(t,r):e==="array-contains-any"?new Hd(t,r):new lt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Bd(t,r):new $d(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ve(e,this.value)):e!==null&&pe(this.value)===pe(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Cl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return Vl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vl(n){return n.op==="and"}function Dl(n){return Fd(n)&&Vl(n)}function Fd(n){for(const t of n.filters)if(t instanceof kt)return!1;return!0}function Ms(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+De(n.value);if(Dl(n))return n.filters.map(t=>Ms(t)).join(",");{const t=n.filters.map(e=>Ms(e)).join(",");return`${n.op}(${t})`}}function kl(n,t){return n instanceof lt?function(r,s){return s instanceof lt&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)}(n,t):n instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&kl(a,s.filters[u]),!0):!1}(n,t):void B()}function Nl(n){return n instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${De(e.value)}`}(n):n instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(Nl).join(" ,")+"}"}(n):"Filter"}class Ud extends lt{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Bd extends lt{constructor(t,e){super(t,"in",e),this.keys=Ml("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class $d extends lt{constructor(t,e){super(t,"not-in",e),this.keys=Ml("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ml(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class qd extends lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ui(e)&&Tn(e.arrayValue,this.value)}}class jd extends lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class zd extends lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Tn(this.value.arrayValue,e)}}class Hd extends lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ui(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Tn(this.value.arrayValue,r))}}/**
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
 */class Kd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function ya(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Kd(n,t,e,r,s,o,a)}function ci(n){const t=z(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ms(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Sr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>De(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>De(r)).join(",")),t.ue=e}return t.ue}function hi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ld(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!kl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ga(n.startAt,t.startAt)&&ga(n.endAt,t.endAt)}function xs(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gd(n,t,e,r,s,o,a,u){return new An(n,t,e,r,s,o,a,u)}function di(n){return new An(n)}function va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xl(n){return n.collectionGroup!==null}function hn(n){const t=z(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new pt(It.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new vr(o,r))}),e.has(It.keyField().canonicalString())||t.ce.push(new vr(It.keyField(),r))}return t.ce}function Mt(n){const t=z(n);return t.le||(t.le=Wd(t,hn(n))),t.le}function Wd(n,t){if(n.limitType==="F")return ya(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new vr(s.field,o)});const e=n.endAt?new yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yr(n.startAt.position,n.startAt.inclusive):null;return ya(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Os(n,t){const e=n.filters.concat([t]);return new An(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ls(n,t,e){return new An(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pr(n,t){return hi(Mt(n),Mt(t))&&n.limitType===t.limitType}function Ol(n){return`${ci(Mt(n))}|lt:${n.limitType}`}function Ee(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Nl(s)).join(", ")}]`),Sr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>De(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>De(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function Cr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of hn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=_a(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,hn(r),s)||r.endAt&&!function(a,u,h){const d=_a(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,hn(r),s))}(n,t)}function Qd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ll(n){return(t,e)=>{let r=!1;for(const s of hn(n)){const o=Yd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Yd(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Ve(h,d):B()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){In(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Sl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new it(F.comparator);function ee(){return Xd}const Fl=new it(F.comparator);function on(...n){let t=Fl;for(const e of n)t=t.insert(e.key,e);return t}function Jd(n){let t=Fl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ae(){return dn()}function Ul(){return dn()}function dn(){return new Le(n=>n.toString(),(n,t)=>n.isEqual(t))}const Zd=new pt(F.comparator);function K(...n){let t=Zd;for(const e of n)t=t.add(e);return t}const tf=new pt(W);function ef(){return tf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gr(t)?"-0":t}}function Bl(n){return{integerValue:""+n}}function nf(n,t){return kd(t)?Bl(t):fi(n,t)}/**
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
 */class Vr{constructor(){this._=void 0}}function rf(n,t,e){return n instanceof Fs?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ai(o)&&(o=li(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Er?$l(n,t):n instanceof Tr?ql(n,t):function(s,o){const a=of(s,o),u=Ea(a)+Ea(s.Pe);return Ns(a)&&Ns(s.Pe)?Bl(u):fi(s.serializer,u)}(n,t)}function sf(n,t,e){return n instanceof Er?$l(n,t):n instanceof Tr?ql(n,t):e}function of(n,t){return n instanceof Us?function(r){return Ns(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Fs extends Vr{}class Er extends Vr{constructor(t){super(),this.elements=t}}function $l(n,t){const e=jl(t);for(const r of n.elements)e.some(s=>xt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Tr extends Vr{constructor(t){super(),this.elements=t}}function ql(n,t){let e=jl(t);for(const r of n.elements)e=e.filter(s=>!xt(s,r));return{arrayValue:{values:e}}}class Us extends Vr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ea(n){return rt(n.integerValue||n.doubleValue)}function jl(n){return ui(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function af(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Er&&s instanceof Er||r instanceof Tr&&s instanceof Tr?Ce(r.elements,s.elements,xt):r instanceof Us&&s instanceof Us?xt(r.Pe,s.Pe):r instanceof Fs&&s instanceof Fs}(n.transform,t.transform)}class ce{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ce}static exists(t){return new ce(void 0,t)}static updateTime(t){return new ce(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function or(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class pi{}function zl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new uf(n.key,ce.none()):new mi(n.key,n.data,ce.none());{const e=n.data,r=Nt.empty();let s=new pt(It.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Dr(n.key,r,new Wt(s.toArray()),ce.none())}}function lf(n,t,e){n instanceof mi?function(s,o,a){const u=s.value.clone(),h=wa(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Dr?function(s,o,a){if(!or(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=wa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Hl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function fn(n,t,e,r){return n instanceof mi?function(o,a,u,h){if(!or(o.precondition,a))return u;const d=o.value.clone(),m=Ia(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Dr?function(o,a,u,h){if(!or(o.precondition,a))return u;const d=Ia(o.fieldTransforms,h,a),m=a.data;return m.setAll(Hl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,a,u){return or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Ta(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ce(r,s,(o,a)=>af(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class mi extends pi{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends pi{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Hl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function wa(n,t,e){const r=new Map;nt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,sf(a,u,e[s]))}return r}function Ia(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,rf(o,a,t))}return r}class uf extends pi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&lf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ul();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=zl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),K())}isEqual(t){return this.batchId===t.batchId&&Ce(this.mutations,t.mutations,(e,r)=>Ta(e,r))&&Ce(this.baseMutations,t.baseMutations,(e,r)=>Ta(e,r))}}/**
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
 */class hf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class df{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,j;function Kl(n){if(n===void 0)return qt("GRPC error has no .code"),D.UNKNOWN;switch(n){case ot.OK:return D.OK;case ot.CANCELLED:return D.CANCELLED;case ot.UNKNOWN:return D.UNKNOWN;case ot.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ot.INTERNAL:return D.INTERNAL;case ot.UNAVAILABLE:return D.UNAVAILABLE;case ot.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ot.NOT_FOUND:return D.NOT_FOUND;case ot.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ot.ABORTED:return D.ABORTED;case ot.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ot.DATA_LOSS:return D.DATA_LOSS;default:return B()}}(j=ot||(ot={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ff(){return new TextEncoder}/**
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
 */const pf=new le([4294967295,4294967295],0);function Aa(n){const t=ff().encode(n),e=new El;return e.update(t),new Uint8Array(e.digest())}function ba(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new le([e,r],0),new le([s,o],0)]}class _i{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new an(`Invalid padding: ${e}`);if(r<0)throw new an(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new an(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new an(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=le.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(le.fromNumber(r)));return s.compare(pf)===1&&(s=new le([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Aa(t),[r,s]=ba(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new _i(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=Aa(t),[r,s]=ba(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class an extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new kr(U.min(),s,new it(W),ee(),K())}}class bn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new bn(r,e,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Gl{constructor(t,e){this.targetId=t,this.me=e}}class Wl{constructor(t,e,r=mt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ra{constructor(){this.fe=0,this.ge=Pa(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=K(),e=K(),r=K();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:B()}}),new bn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Pa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,nt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mf{constructor(t){this.Le=t,this.Be=new Map,this.ke=ee(),this.qe=Sa(),this.Qe=new it(W)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:B()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(xs(o))if(r===0){const a=new F(o.path);this.Ue(e,a,wt.newNoDocument(a,U.min()))}else nt(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=fe(r).toUint8Array()}catch(h){if(h instanceof Pl)return Pe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new _i(a,s,o)}catch(h){return Pe(h instanceof an?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&xs(u.target)){const h=new F(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,wt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=K();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new kr(t,e,this.Qe,this.ke,r);return this.ke=ee(),this.qe=Sa(),this.Qe=new it(W),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ra,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new pt(W),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ra),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Sa(){return new it(F.comparator)}function Pa(){return new it(F.comparator)}const _f={asc:"ASCENDING",desc:"DESCENDING"},gf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yf={and:"AND",or:"OR"};class vf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Bs(n,t){return n.useProto3Json||Sr(t)?t:{value:t}}function $s(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ql(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ae(n){return nt(!!n),U.fromTimestamp(function(e){const r=te(e);return new ct(r.seconds,r.nanos)}(n))}function Yl(n,t){return qs(n,t).canonicalString()}function qs(n,t){const e=function(s){return new tt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Xl(n){const t=tt.fromString(n);return nt(nu(t)),t}function ms(n,t){const e=Xl(t);if(e.get(1)!==n.databaseId.projectId)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(Zl(e))}function Jl(n,t){return Yl(n.databaseId,t)}function Ef(n){const t=Xl(n);return t.length===4?tt.emptyPath():Zl(t)}function Ca(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Zl(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Tf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(nt(m===void 0||typeof m=="string"),mt.fromBase64String(m||"")):(nt(m===void 0||m instanceof Buffer||m instanceof Uint8Array),mt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?D.UNKNOWN:Kl(d.code);return new x(m,d.message||"")}(a);e=new Wl(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ms(n,r.document.name),o=Ae(r.document.updateTime),a=r.document.createTime?Ae(r.document.createTime):U.min(),u=new Nt({mapValue:{fields:r.document.fields}}),h=wt.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new ar(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ms(n,r.document),o=r.readTime?Ae(r.readTime):U.min(),a=wt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new ar([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ms(n,r.document),o=r.removedTargetIds||[];e=new ar([],o,s,null)}else{if(!("filter"in t))return B();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new df(s,o),u=r.targetId;e=new Gl(u,a)}}return e}function wf(n,t){return{documents:[Jl(n,t.path)]}}function If(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Jl(n,s);const o=function(d){if(d.length!==0)return eu(kt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(g){return{field:Te(g.field),direction:Rf(g.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Bs(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Af(n){let t=Ef(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){nt(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(w){const g=tu(w);return g instanceof kt&&Dl(g)?g.getFilters():[g]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(g=>function(C){return new vr(we(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(e.orderBy));let u=null;e.limit&&(u=function(w){let g;return g=typeof w=="object"?w.value:w,Sr(g)?null:g}(e.limit));let h=null;e.startAt&&(h=function(w){const g=!!w.before,R=w.values||[];return new yr(R,g)}(e.startAt));let d=null;return e.endAt&&(d=function(w){const g=!w.before,R=w.values||[];return new yr(R,g)}(e.endAt)),Gd(t,s,a,o,u,"F",h,d)}function bf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function tu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=we(e.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=we(e.unaryFilter.field);return lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return lt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=we(e.unaryFilter.field);return lt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(e){return lt.create(we(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(r=>tu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(n):B()}function Rf(n){return _f[n]}function Sf(n){return gf[n]}function Pf(n){return yf[n]}function Te(n){return{fieldPath:n.canonicalString()}}function we(n){return It.fromServerFormat(n.fieldPath)}function eu(n){return n instanceof lt?function(e){if(e.op==="=="){if(ma(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NAN"}};if(pa(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ma(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NAN"}};if(pa(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(e.field),op:Sf(e.op),value:e.value}}}(n):n instanceof kt?function(e){const r=e.getFilters().map(s=>eu(s));return r.length===1?r[0]:{compositeFilter:{op:Pf(e.op),filters:r}}}(n):B()}function nu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e,r,s,o=U.min(),a=U.min(),u=mt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.ct=t}}function Vf(n){const t=Af({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ls(t,t.limit,"L"):t}/**
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
 */class Df{constructor(){this.un=new kf}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Zt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class kf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new pt(tt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new pt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ke(0)}static kn(){return new ke(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.changes=new Le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&fn(r.mutation,s,Wt.empty(),ct.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,K()).next(()=>r))}getLocalViewOfDocuments(t,e,r=K()){const s=ae();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=on();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ae();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,K()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=ee();const a=dn(),u=function(){return dn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Dr)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),fn(m.mutation,d,m.mutation.getFieldMask(),ct.now())):a.set(d.key,Wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var w;return u.set(d,new Mf(m,(w=a.get(d))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(t,e){const r=dn();let s=new it((a,u)=>a-u),o=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Wt.empty();m=u.applyToLocalView(d,m),r.set(h,m);const w=(s.get(u.batchId)||K()).add(h);s=s.insert(u.batchId,w)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,w=Ul();m.forEach(g=>{if(!o.has(g)){const R=zl(e.get(g),r.get(g));R!==null&&w.set(g,R),o=o.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,w))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(ae());let u=-1,h=o;return a.next(d=>P.forEach(d,(m,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(g=>{h=h.insert(m,g)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,K())).next(m=>({batchId:u,changes:Jd(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let s=on();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=on();return this.indexManager.getCollectionParents(t,o).next(u=>P.forEach(u,h=>{const d=function(w,g){return new An(g,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((w,g)=>{a=a.insert(w,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,wt.newInvalidDocument(m)))});let u=on();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&fn(m.mutation,d,Wt.empty(),ct.now()),Cr(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ae(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Vf(s.bundledQuery),readTime:Ae(s.readTime)}}(e)),P.resolve()}}/**
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
 */class Lf{constructor(){this.overlays=new it(F.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ae();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=ae(),o=e.length+1,a=new F(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new it((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=ae(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return P.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hf(e,r));let o=this.Ir.get(e);o===void 0&&(o=K(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class Ff{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.Tr=new pt(ut.Er),this.dr=new pt(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new ut(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new F(new tt([])),r=new ut(e,t),s=new ut(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new F(new tt([])),r=new ut(e,t),s=new ut(e,t+1);let o=K();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ut(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return F.comparator(t.key,e.key)||W(t.wr,e.wr)}static Ar(t,e){return W(t.wr,e.wr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new pt(ut.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cf(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new ut(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),s=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const u=this.Dr(a.wr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new pt(W);return e.forEach(s=>{const o=new ut(s,0),a=new ut(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new ut(new F(o),0);let u=new pt(W);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.wr)),!0)},a),P.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){nt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(e.mutations,s=>{const o=new ut(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new ut(e,0),s=this.br.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t){this.Mr=t,this.docs=function(){return new it(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let r=ee();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():wt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ee();const a=e.path,u=new F(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Pd(Sd(m),r)<=0||(s.has(m.key)||Cr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){B()}Or(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new $f(this)}getSize(t){return P.resolve(this.size)}}class $f extends Nf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){this.persistence=t,this.Nr=new Le(e=>ci(e),hi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gi,this.targetCount=0,this.kr=ke.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ke(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new oi(0),this.Kr=!1,this.Kr=!0,this.$r=new Ff,this.referenceDelegate=t(this),this.Ur=new qf(this),this.indexManager=new Df,this.remoteDocumentCache=function(s){return new Bf(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Cf(e),this.Gr=new Of(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Lf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Uf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new zf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class zf extends Vd{constructor(t){super(),this.currentSequenceNumber=t}}class yi{constructor(t){this.persistence=t,this.Jr=new gi,this.Yr=null}static Zr(t){return new yi(t)}get Xr(){if(this.Yr)return this.Yr;throw B()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=F.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=K(),s=K();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new vi(t,e.fromCache,r,s)}}/**
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
 */class Hf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Kf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Jc()?8:Dd(Yc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Hf;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(rn()<=H.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ee(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(rn()<=H.DEBUG&&M("QueryEngine","Query:",Ee(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(rn()<=H.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ee(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):P.resolve())}Yi(t,e){if(va(e))return P.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ls(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=K(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,u);return this.ns(e,d,a,h.readTime)?this.Yi(t,Ls(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return va(e)||s.isEqual(U.min())?P.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?P.resolve(null):(rn()<=H.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ee(e)),this.rs(t,a,e,Rd(s,-1)).next(u=>u))})}ts(t,e){let r=new pt(Ll(t));return e.forEach((s,o)=>{Cr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return rn()<=H.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ee(e)),this.Ji.getDocumentsMatchingQuery(t,e,Zt.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new it(W),this._s=new Le(o=>ci(o),hi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Wf(n,t,e,r){return new Gf(n,t,e,r)}async function ru(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=K();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function su(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Qf(n,t){const e=z(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach((m,w)=>{const g=s.get(w);if(!g)return;u.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,w)));let R=g.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(mt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(w,R),function(N,V,L){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,R,m)&&u.push(e.Ur.updateTargetData(o,R))});let h=ee(),d=K();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Yf(o,a,t.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(U.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function Yf(n,t,e){let r=K(),s=K();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ee();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):M("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function Xf(n,t){const e=z(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Qt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function js(n,t,e){const r=z(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!wn(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Va(n,t,e){const r=z(n);let s=U.min(),o=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const w=z(h),g=w._s.get(m);return g!==void 0?P.resolve(w.os.get(g)):w.Ur.getTargetData(d,m)}(r,a,Mt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:K())).next(u=>(Jf(r,Qd(t),u),{documents:u,Ts:o})))}function Jf(n,t,e){let r=n.us.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Da{constructor(){this.activeTargetIds=ef()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zf{constructor(){this.so=new Da,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Da,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class tp{_o(t){}shutdown(){}}/**
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
 */class ka{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zn=null;function _s(){return Zn===null?Zn=function(){return 268435456+Math.round(2147483648*Math.random())}():Zn++,"0x"+Zn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class rp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const u=_s(),h=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(m=>(M("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw Pe("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(e,r,s,o,a,u){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=ep[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=_s();return new Promise((a,u)=>{const h=new Tl;h.setWithCredentials(!0),h.listenOnce(wl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ir.NO_ERROR:const m=h.getResponseJson();M(Et,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case ir.TIMEOUT:M(Et,`RPC '${t}' ${o} timed out`),u(new x(D.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const w=h.getStatus();if(M(Et,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let g=h.getResponseJson();Array.isArray(g)&&(g=g[0]);const R=g?.error;if(R&&R.status&&R.message){const C=function(V){const L=V.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(L)>=0?L:D.UNKNOWN}(R.status);u(new x(C,R.message))}else u(new x(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new x(D.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{M(Et,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);M(Et,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=_s(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=bl(),u=Al(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(Et,`Creating RPC '${t}' stream ${s}: ${m}`,h);const w=a.createWebChannel(m,h);let g=!1,R=!1;const C=new np({Io:V=>{R?M(Et,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(g||(M(Et,`Opening RPC '${t}' stream ${s} transport.`),w.open(),g=!0),M(Et,`RPC '${t}' stream ${s} sending:`,V),w.send(V))},To:()=>w.close()}),N=(V,L,O)=>{V.listen(L,$=>{try{O($)}catch(q){setTimeout(()=>{throw q},0)}})};return N(w,sn.EventType.OPEN,()=>{R||(M(Et,`RPC '${t}' stream ${s} transport opened.`),C.yo())}),N(w,sn.EventType.CLOSE,()=>{R||(R=!0,M(Et,`RPC '${t}' stream ${s} transport closed`),C.So())}),N(w,sn.EventType.ERROR,V=>{R||(R=!0,Pe(Et,`RPC '${t}' stream ${s} transport errored:`,V),C.So(new x(D.UNAVAILABLE,"The operation could not be completed")))}),N(w,sn.EventType.MESSAGE,V=>{var L;if(!R){const O=V.data[0];nt(!!O);const $=O,q=$.error||((L=$[0])===null||L===void 0?void 0:L.error);if(q){M(Et,`RPC '${t}' stream ${s} received error:`,q);const J=q.status;let Q=function(p){const E=ot[p];if(E!==void 0)return Kl(E)}(J),T=q.message;Q===void 0&&(Q=D.INTERNAL,T="Unknown error status: "+J+" with message "+q.message),R=!0,C.So(new x(Q,T)),w.close()}else M(Et,`RPC '${t}' stream ${s} received:`,O),C.bo(O)}}),N(u,Il.STAT_EVENT,V=>{V.stat===Ds.PROXY?M(Et,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Ds.NOPROXY&&M(Et,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function gs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){return new vf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,e,r,s,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new iu(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new x(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ip extends sp{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Tf(this.serializer,t),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Ae(a.readTime):U.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Ca(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=xs(h)?{documents:wf(o,h)}:{query:If(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ql(o,a.resumeToken);const d=Bs(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=$s(o,a.snapshotVersion.toTimestamp());const d=Bs(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=bf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Ca(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,qs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(D.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,qs(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ap{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qt(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Sn(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=z(h);d.L_.add(4),await Rn(d),d.q_.set("Unknown"),d.L_.delete(4),await Mr(d)}(this))})}),this.q_=new ap(r,s)}}async function Mr(n){if(Sn(n))for(const t of n.B_)await t(!0)}async function Rn(n){for(const t of n.B_)await t(!1)}function ou(n,t){const e=z(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ii(e)?wi(e):Fe(e).r_()&&Ti(e,t))}function Ei(n,t){const e=z(n),r=Fe(e);e.N_.delete(t),r.r_()&&au(e,t),e.N_.size===0&&(r.r_()?r.o_():Sn(e)&&e.q_.set("Unknown"))}function Ti(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fe(n).A_(t)}function au(n,t){n.Q_.xe(t),Fe(n).R_(t)}function wi(n){n.Q_=new mf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Fe(n).start(),n.q_.v_()}function Ii(n){return Sn(n)&&!Fe(n).n_()&&n.N_.size>0}function Sn(n){return z(n).L_.size===0}function lu(n){n.Q_=void 0}async function up(n){n.q_.set("Online")}async function cp(n){n.N_.forEach((t,e)=>{Ti(n,t)})}async function hp(n,t){lu(n),Ii(n)?(n.q_.M_(t),wi(n)):n.q_.set("Unknown")}async function dp(n,t,e){if(n.q_.set("Online"),t instanceof Wl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Na(n,r)}else if(t instanceof ar?n.Q_.Ke(t):t instanceof Gl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(U.min()))try{const r=await su(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(mt.EMPTY_BYTE_STRING,m.snapshotVersion)),au(o,h);const w=new Qt(m.target,h,d,m.sequenceNumber);Ti(o,w)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Na(n,r)}}async function Na(n,t,e){if(!wn(t))throw t;n.L_.add(1),await Rn(n),n.q_.set("Offline"),e||(e=()=>su(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Mr(n)})}async function Ma(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Sn(e);e.L_.add(3),await Rn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Mr(e)}async function fp(n,t){const e=z(n);t?(e.L_.delete(2),await Mr(e)):t||(e.L_.add(2),await Rn(e),e.q_.set("Unknown"))}function Fe(n){return n.K_||(n.K_=function(e,r,s){const o=z(e);return o.w_(),new ip(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:up.bind(null,n),Ro:cp.bind(null,n),mo:hp.bind(null,n),d_:dp.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Ii(n)?wi(n):n.q_.set("Unknown")):(await n.K_.stop(),lu(n))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Ai(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uu(n,t){if(qt("AsyncQueue",`${t}: ${n}`),wn(n))return new x(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=on(),this.sortedSet=new it(this.comparator)}static emptySet(t){return new be(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new be;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this.W_=new it(F.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):B():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ne{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ne(t,e,be.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class mp{constructor(){this.queries=Oa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=z(e),o=s.queries;s.queries=Oa(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new x(D.ABORTED,"Firestore shutting down"))}}function Oa(){return new Le(n=>Ol(n),Pr)}async function cu(n,t){const e=z(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new pp,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=uu(a,`Initialization of query '${Ee(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&bi(e)}async function hu(n,t){const e=z(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _p(n,t){const e=z(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(s)&&(r=!0);a.z_=s}}r&&bi(e)}function gp(n,t,e){const r=z(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function bi(n){n.Y_.forEach(t=>{t.next()})}var zs,La;(La=zs||(zs={})).ea="default",La.Cache="cache";class du{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ne(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ne.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==zs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t){this.key=t}}class pu{constructor(t){this.key=t}}class yp{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=Ll(t),this.Ra=new be(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new xa,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,w)=>{const g=s.get(m),R=Cr(this.query,w)?w:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;g&&R?g.data.isEqual(R.data)?C!==N&&(r.track({type:3,doc:R}),V=!0):this.ga(g,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.Aa(R,h)>0||d&&this.Aa(R,d)<0)&&(u=!0)):!g&&R?(r.track({type:0,doc:R}),V=!0):g&&!R&&(r.track({type:1,doc:g}),V=!0,(h||d)&&(u=!0)),V&&(R?(a=a.add(R),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,w)=>function(R,C){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return N(R)-N(C)}(m.type,w.type)||this.Aa(m.doc,w.doc)),this.pa(r),s=s!=null&&s;const u=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Ne(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new xa,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new pu(r))}),this.da.forEach(r=>{t.has(r)||e.push(new fu(r))}),e}ba(t){this.Ta=t.Ts,this.da=K();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ne.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ep{constructor(t){this.key=t,this.va=!1}}class Tp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Le(u=>Ol(u),Pr),this.Ma=new Map,this.xa=new Set,this.Oa=new it(F.comparator),this.Na=new Map,this.La=new gi,this.Ba={},this.ka=new Map,this.qa=ke.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wp(n,t,e=!0){const r=vu(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await mu(r,t,e,!0),s}async function Ip(n,t){const e=vu(n);await mu(e,t,!0,!1)}async function mu(n,t,e,r){const s=await Xf(n.localStore,Mt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Ap(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ou(n.remoteStore,s),u}async function Ap(n,t,e,r,s){n.Ka=(w,g,R)=>async function(N,V,L,O){let $=V.view.ma(L);$.ns&&($=await Va(N.localStore,V.query,!1).then(({documents:T})=>V.view.ma(T,$)));const q=O&&O.targetChanges.get(V.targetId),J=O&&O.targetMismatches.get(V.targetId)!=null,Q=V.view.applyChanges($,N.isPrimaryClient,q,J);return Ua(N,V.targetId,Q.wa),Q.snapshot}(n,w,g,R);const o=await Va(n.localStore,t,!0),a=new yp(t,o.Ts),u=a.ma(o.documents),h=bn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Ua(n,e,d.wa);const m=new vp(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function bp(n,t,e){const r=z(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Pr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await js(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ei(r.remoteStore,s.targetId),Hs(r,s.targetId)}).catch(ii)):(Hs(r,s.targetId),await js(r.localStore,s.targetId,!0))}async function Rp(n,t){const e=z(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ei(e.remoteStore,r.targetId))}async function _u(n,t){const e=z(n);try{const r=await Qf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?nt(a.va):s.removedDocuments.size>0&&(nt(a.va),a.va=!1))}),await yu(e,r,t)}catch(r){await ii(r)}}function Fa(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=z(a);h.onlineState=u;let d=!1;h.queries.forEach((m,w)=>{for(const g of w.j_)g.Z_(u)&&(d=!0)}),d&&bi(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sp(n,t,e){const r=z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new it(F.comparator);a=a.insert(o,wt.newNoDocument(o,U.min()));const u=K().add(o),h=new kr(U.min(),new Map,new it(W),a,u);await _u(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Ri(r)}else await js(r.localStore,t,!1).then(()=>Hs(r,t,e)).catch(ii)}function Hs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||gu(n,r)})}function gu(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Ei(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ri(n))}function Ua(n,t,e){for(const r of e)r instanceof fu?(n.La.addReference(r.key,t),Pp(n,r)):r instanceof pu?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||gu(n,r.key)):B()}function Pp(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),Ri(n))}function Ri(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new F(tt.fromString(t)),r=n.qa.next();n.Na.set(r,new Ep(e)),n.Oa=n.Oa.insert(e,r),ou(n.remoteStore,new Qt(Mt(di(e.path)),r,"TargetPurposeLimboResolution",oi.oe))}}async function yu(n,t,e){const r=z(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const w=d?!d.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(d){s.push(d);const w=vi.Wi(h.targetId,d);o.push(w)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const m=z(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>P.forEach(d,g=>P.forEach(g.$i,R=>m.persistence.referenceDelegate.addReference(w,g.targetId,R)).next(()=>P.forEach(g.Ui,R=>m.persistence.referenceDelegate.removeReference(w,g.targetId,R)))))}catch(w){if(!wn(w))throw w;M("LocalStore","Failed to update sequence numbers: "+w)}for(const w of d){const g=w.targetId;if(!w.fromCache){const R=m.os.get(g),C=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(C);m.os=m.os.insert(g,N)}}}(r.localStore,o))}async function Cp(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await ru(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new x(D.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await yu(e,r.hs)}}function Vp(n,t){const e=z(n),r=e.Na.get(t);if(r&&r.va)return K().add(r.key);{let s=K();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function vu(n){const t=z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sp.bind(null,t),t.Ca.d_=_p.bind(null,t.eventManager),t.Ca.$a=gp.bind(null,t.eventManager),t}class wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Nr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Wf(this.persistence,new Kf,t.initialUser,this.serializer)}Ga(t){return new jf(yi.Zr,this.serializer)}Wa(t){return new Zf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wr.provider={build:()=>new wr};class Ks{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cp.bind(null,this.syncEngine),await fp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new mp}()}createDatastore(t){const e=Nr(t.databaseInfo.databaseId),r=function(o){return new rp(o)}(t.databaseInfo);return function(o,a,u,h){return new op(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new lp(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Fa(this.syncEngine,e,0),function(){return ka.D()?new ka:new tp}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const w=new Tp(s,o,a,u,h,d);return m&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=z(s);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Rn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ks.provider={build:()=>new Ks};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Eu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Ad.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=uu(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ys(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ru(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ba(n,t){n.asyncQueue.verifyOperationInProgress();const e=await kp(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ma(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ma(t.remoteStore,s)),n._onlineComponents=t}async function kp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await ys(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Pe("Error using user provided cache. Falling back to memory cache: "+e),await ys(n,new wr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await ys(n,new wr);return n._offlineComponents}async function Np(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Ba(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Ba(n,new Ks))),n._onlineComponents}async function Gs(n){const t=await Np(n),e=t.eventManager;return e.onListen=wp.bind(null,t.syncEngine),e.onUnlisten=bp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ip.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Rp.bind(null,t.syncEngine),e}function Mp(n,t,e={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Eu({next:g=>{m.Za(),a.enqueueAndForget(()=>hu(o,w)),g.fromCache&&h.source==="server"?d.reject(new x(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),w=new du(u,m,{includeMetadataChanges:!0,_a:!0});return cu(o,w)}(await Gs(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Tu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n,t,e){if(!e)throw new x(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Op(n,t,e,r){if(t===!0&&r===!0)throw new x(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function qa(n){if(F.isDocumentKey(n))throw new x(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":B()}function Re(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=xr(n);throw new x(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Op("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Si{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ja({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ja(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _d;switch(r.type){case"firstParty":return new Ed(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=$a.get(e);r&&(M("ComponentProvider","Removing Datastore"),$a.delete(e),r.terminate())}(this),Promise.resolve()}}function Lp(n,t,e,r={}){var s;const o=(n=Re(n,Si))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Pe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Tt.MOCK_USER;else{u=Qc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Tt(d)}n._authCredentials=new gd(new Rl(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new me(this.firestore,t,this._query)}}class Ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Se(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ot(this.firestore,t,this._key)}}class Se extends me{constructor(t,e,r){super(t,e,di(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ot(this.firestore,null,new F(t))}withConverter(t){return new Se(this.firestore,t,this._path)}}function lr(n,t,...e){if(n=mn(n),xp("collection","path",t),n instanceof Si){const r=tt.fromString(t,...e);return qa(r),new Se(n,null,r)}{if(!(n instanceof Ot||n instanceof Se))throw new x(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return qa(r),new Se(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new iu(this,"async_queue_retry"),this.Vu=()=>{const r=gs();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=gs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ue;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!wn(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw qt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Ai.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&B()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Ha(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Ir extends Si{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new za,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new za(t),this._firestoreClient=void 0,await t}}}function Fp(n,t){const e=typeof n=="object"?n:sd(),r=typeof n=="string"?n:"(default)",s=td(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Gc("firestore");o&&Lp(s,...o)}return s}function wu(n){if(n._terminated)throw new x(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Up(n),n._firestoreClient}function Up(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,m){return new Md(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Tu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Dp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u?._online.build();return{_offline:u?._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Me(mt.fromBase64String(t))}catch(e){throw new x(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Me(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}}/**
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
 */class Ci{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=/^__.*__$/;function bu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Vi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Vi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ws(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(bu(this.Cu)&&Bp.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class $p{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Nr(t)}Qu(t,e,r,s=!1){return new Vi({Cu:t,methodName:e,qu:r,path:It.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qp(n){const t=n._freezeSettings(),e=Nr(n._databaseId);return new $p(n._databaseId,!!t.ignoreUndefinedProperties,e)}function jp(n,t,e,r=!1){return Di(e,n.Qu(r?4:3,t))}function Di(n,t){if(Ru(n=mn(n)))return Hp("Unsupported field value:",t,n),zp(n,t);if(n instanceof Au)return function(r,s){if(!bu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Di(u,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=mn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ct.fromDate(r);return{timestampValue:$s(s.serializer,o)}}if(r instanceof ct){const o=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$s(s.serializer,o)}}if(r instanceof Pi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:Ql(s.serializer,r._byteString)};if(r instanceof Ot){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Yl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ci)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return fi(u.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${xr(r)}`)}(n,t)}function zp(n,t){const e={};return Sl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):In(n,(r,s)=>{const o=Di(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ru(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ct||n instanceof Pi||n instanceof Me||n instanceof Ot||n instanceof Au||n instanceof Ci)}function Hp(n,t,e){if(!Ru(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=xr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}const Kp=new RegExp("[~\\*/\\[\\]]");function Gp(n,t,e){if(t.search(Kp)>=0)throw Ws(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Iu(...t.split("."))._internalPath}catch{throw Ws(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ws(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(D.INVALID_ARGUMENT,u+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ki("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Wp extends Su{data(){return super.data()}}function ki(n,t){return typeof t=="string"?Gp(n,t):t instanceof Iu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ni{}class Qp extends Ni{}function Cu(n,t,...e){let r=[];t instanceof Ni&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Mi).length,u=o.filter(h=>h instanceof Or).length;if(a>1||a>0&&u>0)throw new x(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Or extends Qp{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Or(t,e,r)}_apply(t){const e=this._parse(t);return Du(t._query,e),new me(t.firestore,t.converter,Os(t._query,e))}_parse(t){const e=qp(t.firestore);return function(o,a,u,h,d,m,w){let g;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ga(w,m);const R=[];for(const C of w)R.push(Ka(h,o,C));g={arrayValue:{values:R}}}else g=Ka(h,o,w)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ga(w,m),g=jp(u,a,w,m==="in"||m==="not-in");return lt.create(d,m,g)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Vu(n,t,e){const r=t,s=ki("where",n);return Or._create(s,r,e)}class Mi extends Ni{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Mi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:kt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Du(a,h),a=Os(a,h)}(t._query,e),new me(t.firestore,t.converter,Os(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ka(n,t,e){if(typeof(e=mn(e))=="string"){if(e==="")throw new x(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xl(t)&&e.indexOf("/")!==-1)throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(tt.fromString(e));if(!F.isDocumentKey(r))throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fa(n,new F(r))}if(e instanceof Ot)return fa(n,e._key);throw new x(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xr(e)}.`)}function Ga(n,t){if(!Array.isArray(n)||n.length===0)throw new x(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Du(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Yp{convertValue(t,e="none"){switch(pe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw B()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return In(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>rt(a.doubleValue));return new Ci(o)}convertGeoPoint(t){return new Pi(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=li(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(vn(t));default:return null}}convertTimestamp(t){const e=te(t);return new ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=tt.fromString(t);nt(nu(r));const s=new En(r.get(1),r.get(3)),o=new F(r.popFirst(5));return s.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ku extends Su{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ki("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ur extends ku{data(t={}){return super.data(t)}}class Nu{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ln(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ur(this._firestore,this._userDataWriter,r.key,r,new ln(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new ur(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ln(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new ur(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ln(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Xp(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Xp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class xi extends Yp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ot(this.firestore,null,e)}}function Jp(n){n=Re(n,me);const t=Re(n.firestore,Ir),e=wu(t),r=new xi(t);return Pu(n._query),Mp(e,n._query).then(s=>new Nu(t,r,n,s))}function vs(n,...t){var e,r,s;n=mn(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ha(t[a])||(o=t[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ha(t[a])){const w=t[a];t[a]=(e=w.next)===null||e===void 0?void 0:e.bind(w),t[a+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),t[a+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let h,d,m;if(n instanceof Ot)d=Re(n.firestore,Ir),m=di(n._key.path),h={next:w=>{t[a]&&t[a](Zp(d,n,w))},error:t[a+1],complete:t[a+2]};else{const w=Re(n,me);d=Re(w.firestore,Ir),m=w._query;const g=new xi(d);h={next:R=>{t[a]&&t[a](new Nu(d,g,w,R))},error:t[a+1],complete:t[a+2]},Pu(n._query)}return function(g,R,C,N){const V=new Eu(N),L=new du(R,V,C);return g.asyncQueue.enqueueAndForget(async()=>cu(await Gs(g),L)),()=>{V.Za(),g.asyncQueue.enqueueAndForget(async()=>hu(await Gs(g),L))}}(wu(d),m,u,h)}function Zp(n,t,e){const r=e.docs.get(t._key),s=new xi(n);return new ku(n,s,t._key,r,new ln(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Oe=s})(rd),_r(new _n("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Ir(new yd(r.getProvider("auth-internal")),new wd(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new En(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ie(la,"4.7.3",t),Ie(la,"4.7.3","esm2017")})();const tm={apiKey:"AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",authDomain:"deptmoney-6682a.firebaseapp.com",projectId:"deptmoney-6682a",storageBucket:"deptmoney-6682a.firebasestorage.app",messagingSenderId:"6714403201",appId:"1:6714403201:web:a98a2cefcebef5c63b6080"},em="2008948704-db2goT00",cr=Fp(gl(tm));function Mu(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}async function nm(){if(typeof liff>"u")throw new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้");if(await liff.init({liffId:em}),!liff.isLoggedIn())return liff.login({redirectUri:location.href}),null;const n=await liff.getProfile(),t=await Jp(Cu(lr(cr,"members"),Vu("lineUserId","==",n.userId)));if(t.empty)throw new Error("ยังไม่พบบัญชีสมาชิกที่ผูกกับ LINE นี้ กรุณาเข้าใช้งานจากหน้าเว็บเดิมครั้งแรกก่อน");const e=t.docs.find(s=>s.data().realName)||t.docs[0],r=e.data();return{name:String(r.name||"").replace(/\s+/g," ").trim().toUpperCase(),memberId:e.id,pictureUrl:/^https:\/\//i.test(r.pictureUrl||"")?r.pictureUrl:"",isAdmin:r.role==="admin"||n.userId==="U0d739eea39c312e11c487e22861920d1"}}function rm(n,t){const e={members:null,transactions:null,settlements:null},r=()=>{e.members&&e.transactions&&e.settlements&&t({...e})},s=a=>t({error:a}),o=[vs(lr(cr,"members"),a=>{e.members=[...new Set(a.docs.map(u=>String(u.data().name||"").replace(/\s+/g," ").trim().toUpperCase()).filter(Boolean))],r()},s),vs(Cu(lr(cr,"transactions"),Vu("date",">=",`${n}-01`)),a=>{e.transactions=a.docs.map(u=>({id:u.id,...u.data()})),r()},s),vs(lr(cr,"settlements"),a=>{e.settlements=a.docs.map(u=>({id:u.id,...u.data()})),r()},s)];return()=>o.forEach(a=>a())}async function xu(n,t){const e=liff.getIDToken(),r=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,idToken:e})});let s={};try{s=await r.json()}catch{}if(r.status===401){try{liff.logout()}catch{}throw location.reload(),new Error("การเข้าสู่ระบบหมดอายุ กำลังพาไปล็อกอินใหม่")}if(!r.ok)throw new Error(s.message||`เกิดข้อผิดพลาด (${r.status})`);return s}async function sm(n){const t=await xu("/api/shortcut-transaction",{action:"wallet-list",since:n});return Array.isArray(t.items)?t.items:[]}async function im(n){return xu("/api/shortcut-transaction",{action:"wallet-add",...n,source:"web"})}function Pt(n){return String(n??"").replace(/\s+/g," ").trim().toUpperCase()}function Jt(n){const t=Number(n);return Number.isFinite(t)?Math.round(t*100):0}function om({memberNames:n=[],transactions:t=[],settlements:e=[],month:r}){const s=new Set(n.map(Pt).filter(Boolean)),o={};s.forEach(h=>{o[h]=0});const a=[],u=(h,d,m)=>{const w=Pt(h);w&&(s.has(w)?o[w]+=d:a.push({type:"unknown_name",name:w,...m}))};for(const h of t){if(!h||typeof h.date!="string"||!h.date.startsWith(r))continue;const d=h.splits&&typeof h.splits=="object"?Object.entries(h.splits):[];if(d.length===0){a.push({type:"no_splits",id:h.id});continue}const m=Jt(h.amount);u(h.payer,m,{id:h.id});let w=0;for(const[g,R]of d){const C=Jt(R);w+=C,u(g,-C,{id:h.id})}Math.abs(w-m)>d.length&&a.push({type:"split_mismatch",id:h.id,diffSatang:w-m})}for(const h of e){if(!h||h.status!=="verified"||h.month!==r)continue;const d=Jt(h.amount);u(h.from,d,{id:h.id}),u(h.to,-d,{id:h.id})}return{balances:o,warnings:a}}function am(n,{minSatang:t=100}={}){const e=[],r=[];for(const[h,d]of Object.entries(n))d<=-t?e.push({name:h,amt:-d}):d>=t&&r.push({name:h,amt:d});const s=(h,d)=>d.amt-h.amt||(h.name<d.name?-1:h.name>d.name?1:0);e.sort(s),r.sort(s);const o=[];let a=0,u=0;for(;a<e.length&&u<r.length;){const h=e[a],d=r[u],m=Math.min(h.amt,d.amt);m>=t&&o.push({from:h.name,to:d.name,amountSatang:m,amount:m/100}),h.amt-=m,d.amt-=m,h.amt<t&&a++,d.amt<t&&u++}return o}function Ou(n){const t=Number(n)||0;return Math.abs(t)<100?0:Math.round(t/100)}function Qs(n,t){if(!n)return 0;const e=Pt(t),r=n.splits&&typeof n.splits=="object"?Object.entries(n.splits):[];if(r.length===0)return Pt(n.payer)===e?Jt(n.amount):0;let s=0;for(const[o,a]of r)Pt(o)===e&&(s+=Jt(a));return s}function Lu(n,t){return n&&Pt(n.payer)===Pt(t)?Jt(n.amount):0}const Fu=(n,t)=>typeof n=="string"&&n.startsWith(t);function Uu({name:n,transactions:t=[],settlements:e=[],month:r}){const s=Pt(n);let o=0,a=0;for(const m of t)!m||!Fu(m.date,r)||(o+=Lu(m,s),a+=Qs(m,s));let u=0,h=0;for(const m of e){if(!m||m.status!=="verified"||m.month!==r)continue;const w=Jt(m.amount);Pt(m.from)===s&&(u+=w),Pt(m.to)===s&&(h+=w)}const d=o-a+u-h;return{name:s,month:r,paid:o,share:a,sent:u,received:h,balance:d}}function lm({memberNames:n=[],transactions:t=[],settlements:e=[],month:r}){const{balances:s,warnings:o}=om({memberNames:n,transactions:t,settlements:e,month:r}),a=am(s),u=Object.keys(s).sort().map(h=>{const d=Uu({name:h,transactions:t,settlements:e,month:r}),m=Ou(s[h]);return{...d,balance:s[h],displayBalance:m,cleared:m===0}});return{month:r,balances:s,plan:a,warnings:o,members:u}}function Bu({name:n,month:t,walletEntries:e=[],transactions:r=[],settlements:s=[]}){const o=Pt(n),a=new Set;let u=0,h=0;for(const g of e){if(!g||Pt(g.ownerName)!==o||!Fu(g.date||g.month,t))continue;const R=g.dedupKey||g.transRef;if(R){if(a.has(R))continue;a.add(R)}const C=Jt(g.amount);C<=0||(g.type==="income"?u+=C:g.type==="expense"&&(h+=C))}const d=Uu({name:o,transactions:r,settlements:s,month:t}),m=d.share,w=h+m;return{name:o,month:t,income:u,personalExpense:h,groupShare:m,expenseTotal:w,net:u-w,receivedBack:d.received,paidBack:d.sent}}function um(n){return(n||[]).map(t=>({from:t.from,to:t.to,amount:Math.round(t.amountSatang/100)})).filter(t=>t.amount>=1)}const Ys=[{key:"food",label:"อาหารและเครื่องดื่ม",icons:["fa-utensils","fa-mug-hot","fa-wine-glass"]},{key:"bills",label:"บิลและค่าบริการ",icons:["fa-bolt","fa-house","fa-mobile-screen","fa-mobile-screen-button"]},{key:"goods",label:"ของใช้",icons:["fa-cart-shopping","fa-basket-shopping","fa-scissors","fa-pills","fa-paw","fa-gift"]},{key:"travel",label:"เดินทาง",icons:["fa-car","fa-gas-pump","fa-bus","fa-plane"]},{key:"other",label:"อื่นๆ",icons:[]}];function cm(n){const t=Ys.find(e=>e.icons.includes(n));return t?t.key:"other"}const Wa=n=>String(n||"").slice(0,7);function hm({name:n,month:t,today:e="",members:r,transactions:s,settlements:o,walletItems:a=[]}){const u=Pt(n),h=lm({memberNames:r,transactions:s,settlements:o,month:t}),d=Bu({name:u,month:t,walletEntries:a.map(p=>({ownerName:u,type:p.type,amount:p.amount,date:p.date})),transactions:s,settlements:o}),m=Object.fromEntries(Ys.map(p=>[p.key,0])),w={},g=(p,E,I)=>{if(!I||!String(p).startsWith(t))return;m[cm(E)]+=I;const b=Number(String(p).slice(8,10));w[b]=(w[b]||0)+I};for(const p of s)!p||Wa(p.date)!==t||g(p.date,p.icon,Qs(p,u));for(const p of a)p.type==="expense"&&g(p.date,p.icon,Math.round(Number(p.amount)*100));const R=Object.values(m).reduce((p,E)=>p+E,0),C=Ys.map(p=>({key:p.key,label:p.label,satang:m[p.key],percent:R>0?Math.round(m[p.key]/R*100):0})).filter(p=>p.satang>0).sort((p,E)=>E.satang-p.satang),N=e.startsWith(t)?Number(e.slice(8,10)):dm(t),V=[];for(let p=1;p<=N;p++)V.push({day:p,satang:w[p]||0,today:e===`${t}-${String(p).padStart(2,"0")}`});const L=d.expenseTotal,O=N>0?Math.round(L/N/100):0,$=um(h.plan),q=$.filter(p=>p.to===u).map(p=>({name:p.from,amount:p.amount})).sort((p,E)=>E.amount-p.amount),J=$.filter(p=>p.from===u).map(p=>({name:p.to,amount:p.amount})).sort((p,E)=>E.amount-p.amount),Q=q[0]?q[0].amount:0;q.forEach(p=>{p.share=Q?Math.round(p.amount/Q*100):0});const T=J[0]?J[0].amount:0;J.forEach(p=>{p.share=T?Math.round(p.amount/T*100):0});const y=[];for(const p of s){if(!p||Wa(p.date)!==t)continue;const E=Qs(p,u);(E>0||Lu(p,u)>0)&&y.push({id:p.id,kind:"group",desc:p.desc||"",icon:p.icon,satang:E,date:p.date,ts:Number(p.timestamp)||0})}for(const p of a)String(p.date).startsWith(t)&&y.push({id:p.id,kind:p.type==="income"?"income":"personal",desc:p.desc||"",icon:p.icon,satang:Math.round(Number(p.amount)*100),date:p.date,ts:Number(p.timestamp)||0});return y.sort((p,E)=>E.date.localeCompare(p.date)||E.ts-p.ts),{month:t,incomeSat:d.income,spentSat:L,personalSat:d.personalExpense,groupShareSat:d.groupShare,netSat:d.net,net:Ou(d.net),spentPercent:d.income>0?Math.min(999,Math.round(L/d.income*100)):null,receivedBackSat:d.receivedBack,categories:C,daily:V,average:O,owedToMe:q,owedTotal:q.reduce((p,E)=>p+E.amount,0),iOwe:J,iOweTotal:J.reduce((p,E)=>p+E.amount,0),recent:y.slice(0,5),warnings:h.warnings}}function dm(n){const[t,e]=n.split("-").map(Number);return new Date(Date.UTC(t,e,0)).getUTCDate()}function Ar(n,t){const[e,r]=n.split("-").map(Number),s=e*12+(r-1)+t,o=Math.floor(s/12);return`${o}-${String(s-o*12+1).padStart(2,"0")}`}const $u=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function Oi(n){const[t,e]=n.split("-").map(Number);return`${$u[e-1]} ${t+543}`}function Vt(n,{decimals:t=0,sign:e=!1}={}){const r=Number(n)||0,s=Math.abs(r).toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});return`${r<0?"-":e&&r>0?"+":""}฿${s}`}function fm({name:n,months:t,transactions:e,settlements:r,walletItems:s=[]}){const o=Pt(n),a=s.map(u=>({ownerName:o,type:u.type,amount:u.amount,date:u.date}));return t.map(u=>{const h=Bu({name:o,month:u,walletEntries:a,transactions:e,settlements:r});return{month:u,spentSat:h.expenseTotal,incomeSat:h.income}})}function pm(n,t){return Array.from({length:t},(e,r)=>Ar(n,r-(t-1)))}function qu(n){return $u[Number(n.slice(5,7))-1]}const Es=[{key:"home",label:"หน้าแรก",icon:"home"},{key:"bills",label:"บิล",icon:"bill"},{key:"clear",label:"เคลียร์เงิน",icon:"swap"},{key:"wallet",label:"กระเป๋า",icon:"wallet"},{key:"me",label:"ฉัน",icon:"user"}],mm={food:"food",bills:"bolt",goods:"bag",travel:"car",other:"dots"},_m=6;function gm({month:n,onChange:t,min:e,max:r}){return _("div",{class:"month",role:"group","aria-label":"เลือกเดือน",children:[_("button",{type:"button","aria-label":"เดือนก่อนหน้า",disabled:n<=e,onClick:()=>t(Ar(n,-1)),children:_(ft,{name:"left",size:16})}),_("span",{class:"num",children:Oi(n)}),_("button",{type:"button","aria-label":"เดือนถัดไป",disabled:n>=r,onClick:()=>t(Ar(n,1)),children:_(ft,{name:"right",size:16})})]})}function ym({percent:n}){const e=2*Math.PI*42,r=Math.max(0,Math.min(100,n));return _("div",{class:"ring",role:"img","aria-label":`ใช้ไป ${n}% ของรายรับ`,children:[_("svg",{viewBox:"0 0 100 100",width:"112",height:"112","aria-hidden":"true",children:[_("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"var(--chip)","stroke-width":"10"}),_("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:(n>100,"var(--pay)"),"stroke-width":"10","stroke-linecap":"round","stroke-dasharray":`${e*r/100} ${e}`,transform:"rotate(-90 50 50)"})]}),_("div",{class:"ring-t",children:[_("b",{class:"num",children:[n,"%"]}),_("span",{children:"ของรายรับ"})]})]})}function vm({m:n}){const t=n.incomeSat>0,e=t&&n.netSat<0,r=t?e?"ใช้เกินรายรับ":"เหลือใช้เดือนนี้":"ใช้ไปเดือนนี้",s=t?Math.abs(n.netSat)/100:n.spentSat/100;return _("section",{class:"card hero",children:[_("div",{class:"hero-l",children:[_("div",{class:"lbl",children:r}),_("div",{class:`big num ${!t||e?"pay":"rcv"}`,children:Vt(Math.round(s))}),_("div",{class:"chips",children:[_("span",{class:"chip",children:[_(ft,{name:"down",size:14,class:"rcv"}),"รายรับ ",_("b",{class:"num",children:Vt(n.incomeSat/100)})]}),_("span",{class:"chip",children:[_(ft,{name:"up",size:14,class:"pay"}),"ใช้ไป ",_("b",{class:"num",children:Vt(n.spentSat/100)})]})]}),_("div",{class:"lbl",style:{marginTop:"10px"},children:["ส่วนตัว ",Vt(n.personalSat/100)," · ส่วนของฉันในกลุ่ม ",Vt(n.groupShareSat/100)]})]}),t?_(ym,{percent:n.spentPercent}):_("div",{class:"hint",children:[_(ft,{name:"wallet",size:22}),"ยังไม่ได้บันทึกรายรับ",_("br",{}),"กดปุ่ม “บันทึก” เพื่อเพิ่ม"]})]})}function Lr({icon:n,title:t,note:e}){return _("div",{class:"sec-t",children:[_("span",{class:"ico",children:_(ft,{name:n})}),_("div",{children:[_("h3",{children:t}),e&&_("p",{children:e})]})]})}function Em({cats:n}){if(n.length===0)return null;const t=n[0];return _("section",{class:"card",children:[_(Lr,{icon:"bag",title:"ใช้ไปกับอะไร",note:`ส่วนใหญ่ไปกับ ${t.label} ${t.percent}%`}),_("div",{class:"cats",children:n.map(e=>_("div",{class:"cat",children:[_("span",{class:"ico big-ico",children:_(ft,{name:mm[e.key]||"dots"})}),_("div",{class:"cat-b",children:[_("div",{class:"cat-r",children:[_("span",{children:e.label}),_("span",{class:"num",children:[_("b",{children:[e.percent,"%"]})," ",_("em",{children:Vt(e.satang/100)})]})]}),_("div",{class:"bar",children:_("i",{style:{width:`${Math.max(3,Math.round(e.percent/t.percent*100))}%`}})})]})]},e.key))})]})}function Tm({series:n,selected:t,onSelect:e}){const r=Math.max(1,...n.map(o=>Math.max(o.spentSat,o.incomeSat))),s=n.some(o=>o.incomeSat>0);return _(Rt,{children:[_(Lr,{icon:"bill",title:"ใช้ไปรายเดือน",note:"แตะแท่งเพื่อดูรายวันของเดือนนั้น"}),_("div",{class:"months",role:"group","aria-label":"ใช้ไปรายเดือน",children:n.map(o=>{const a=o.month===t;return _("button",{type:"button",class:`mcol ${a?"on":""}`,"aria-pressed":a,"aria-label":`${Oi(o.month)} ใช้ไป ${Vt(o.spentSat/100)}`,onClick:()=>e(o.month),children:[_("span",{class:"mval num",children:o.spentSat>0?wm(o.spentSat/100):""}),_("span",{class:"mplot",children:[_("i",{class:"mbar",style:{height:`${Math.max(2,Math.round(o.spentSat/r*100))}%`}}),o.incomeSat>0&&_("i",{class:"mline",style:{bottom:`${Math.round(o.incomeSat/r*100)}%`}})]}),_("span",{class:"mlab",children:qu(o.month)})]},o.month)})}),s&&_("div",{class:"legend2",children:[_("span",{children:[_("i",{class:"k-bar"}),"ใช้ไป"]}),_("span",{children:[_("i",{class:"k-line"}),"รายรับ"]})]})]})}const wm=n=>n>=1e4?`${Math.round(n/1e3)}k`:n>=1e3?`${(n/1e3).toFixed(1)}k`:String(Math.round(n));function Im({month:n,daily:t}){if(!t.length)return null;const e=Math.max(1,...t.map(o=>o.satang)),r=t.reduce((o,a)=>a.satang>o.satang?a:o,t[0]),s=t.reduce((o,a)=>o+a.satang,0);return _("div",{class:"daily",children:[_("div",{class:"hd-row",children:[_("h4",{children:["รายวันของ ",Oi(n)]}),s>0&&_("span",{class:"lbl",children:["วันที่ใช้มากสุด ",r.day," ",qu(n)," ",Vt(r.satang/100)]})]}),_("div",{class:"days",role:"img","aria-label":"ใช้ไปรายวัน",children:t.map(o=>_("i",{class:o.satang===r.satang&&s>0?"peak":o.today?"today":"",style:{height:`${Math.max(3,Math.round(o.satang/e*100))}%`}},o.day))}),_("div",{class:"axis num",children:[_("span",{children:"1"}),_("span",{children:Math.ceil(t.length/2)}),_("span",{children:t.length})]})]})}function Qa({d:n,tone:t,action:e}){return _("div",{class:"dbar",children:[_("div",{class:"r1",children:[_("div",{class:"av","aria-hidden":"true",children:[...n.name][0]||"?"}),_("div",{style:{flex:1,fontWeight:500,minWidth:0},children:n.name}),_("div",{class:`num ${t==="g"?"rcv":"pay"}`,style:{fontWeight:600},children:Vt(n.amount)}),_("a",{class:"btn sm ghost",href:"/index.html#clear",title:"เปิดหน้าเคลียร์เงิน (หน้าเดิม)",children:[_(ft,{name:t==="g"?"qr":"swap",size:14}),e]})]}),_("div",{class:`bar ${t==="g"?"g":""}`,children:_("i",{style:{width:`${n.share}%`}})})]})}function Am({m:n}){return _("section",{class:"card",children:[_(Lr,{icon:"people",title:"เพื่อนค้างฉัน",note:n.owedTotal>0?`รอรับคืนรวม ${Vt(n.owedTotal)}`:void 0}),n.owedToMe.length===0&&_("div",{class:"empty",children:[_(ft,{name:"check",size:16,class:"rcv"})," ไม่มีใครค้างคุณในเดือนนี้"]}),n.owedToMe.map(t=>_(Qa,{d:t,tone:"g",action:"ขอ"},t.name)),n.iOweTotal>0&&_(Rt,{children:[_("div",{class:"sub-t",children:["ฉันค้างเพื่อน ",_("span",{class:"num pay",children:Vt(n.iOweTotal)})]}),n.iOwe.map(t=>_(Qa,{d:t,tone:"p",action:"โอน"},t.name))]})]})}function bm({items:n}){return n.length?_("section",{class:"card",children:[_(Lr,{icon:"bill",title:"รายการล่าสุด"}),n.map(t=>_("div",{class:"row",children:[_("span",{class:"ico",children:_(ft,{name:t.kind==="income"?"down":Lc(t.icon)})}),_("div",{class:"grow",children:[_("div",{class:"t",children:t.desc||"ไม่ระบุ"}),_("div",{class:"s",children:[t.kind==="group"?"ส่วนของฉันในกลุ่ม":t.kind==="income"?"รายรับ":"ส่วนตัว"," · ",t.date.slice(8,10),"/",t.date.slice(5,7)]})]}),_("div",{class:`num ${t.kind==="income"?"rcv":""}`,children:Vt(t.satang/100,{decimals:2})})]},t.kind+t.id))]}):null}function Rm({model:n,series:t,month:e,onMonth:r,daily:s}){return _("div",{class:"home-grid",children:[_("div",{class:"col",children:[_(vm,{m:n}),_(Em,{cats:n.categories}),_("section",{class:"card",children:[_(Tm,{series:t,selected:e,onSelect:r}),_(Im,{month:e,daily:s})]})]}),_("div",{class:"col",children:[_(Am,{m:n}),_(bm,{items:n.recent})]})]})}function Sm({onClose:n,onSaved:t}){const[e,r]=St(null);return e?_(Pm,{type:e==="income"?"income":"expense",onBack:()=>r(null),onClose:n,onSaved:t}):_("div",{class:"scrim",onClick:s=>s.target===s.currentTarget&&n(),children:_("div",{class:"sheet",role:"dialog","aria-label":"บันทึกรายการ",children:[_("div",{class:"grab"}),_("a",{class:"opt-row",href:"/index.html#add",style:{textDecoration:"none",color:"inherit"},children:[_("span",{class:"ico",children:_(ft,{name:"people"})}),_("div",{children:[_("b",{children:"บิลหารกับเพื่อน"}),_("small",{children:"เลือกคนหาร เท่ากัน กำหนดเอง ผ่อน หรือรายเดือน (ใช้ฟอร์มหน้าเดิมไปก่อน)"})]})]}),_("button",{type:"button",class:"opt-row",onClick:()=>r("personal"),children:[_("span",{class:"ico",children:_(ft,{name:"lock"})}),_("div",{children:[_("b",{children:"รายจ่ายส่วนตัว"}),_("small",{children:"เพื่อนไม่เห็น ไม่กระทบยอดหนี้"})]})]}),_("button",{type:"button",class:"opt-row",onClick:()=>r("income"),children:[_("span",{class:"ico",children:_(ft,{name:"down",class:"rcv"})}),_("div",{children:[_("b",{children:"รายรับ"}),_("small",{children:"เงินเดือน ฯลฯ ไม่รวมเพื่อนโอนคืนหนี้"})]})]})]})})}function Pm({type:n,onBack:t,onClose:e,onSaved:r}){const[s,o]=St(""),[a,u]=St(""),[h,d]=St(Mu()),[m,w]=St(!1),[g,R]=St(""),C=n==="income";async function N(V){V.preventDefault(),R("");const L=Number(s);if(!Number.isFinite(L)||L<=0){R("กรอกจำนวนเงินให้ถูกต้อง");return}w(!0);try{await im({type:n,amount:L,desc:a.trim()||void 0,date:h}),r(C?"บันทึกรายรับแล้ว":"บันทึกรายจ่ายแล้ว"),e()}catch(O){R(O.message),w(!1)}}return _("div",{class:"scrim",onClick:V=>V.target===V.currentTarget&&e(),children:_("form",{class:"sheet",onSubmit:N,"aria-label":C?"บันทึกรายรับ":"บันทึกรายจ่ายส่วนตัว",children:[_("div",{class:"grab"}),_("div",{class:"hd-row",children:[_("b",{children:C?"บันทึกรายรับ":"บันทึกรายจ่ายส่วนตัว"}),_("button",{type:"button",class:"btn sm ghost",onClick:t,children:"เปลี่ยนประเภท"})]}),_("div",{class:"field",children:[_("label",{for:"f-amount",children:"จำนวนเงิน (บาท)"}),_("input",{id:"f-amount",type:"number",inputmode:"decimal",step:"0.01",min:"0",autofocus:!0,value:s,onInput:V=>o(V.currentTarget.value)})]}),_("div",{class:"field",children:[_("label",{for:"f-desc",children:"รายการ"}),_("input",{id:"f-desc",type:"text",maxLength:100,placeholder:C?"เช่น เงินเดือน":"เช่น กาแฟ",value:a,onInput:V=>u(V.currentTarget.value)})]}),_("div",{class:"field",children:[_("label",{for:"f-date",children:"วันที่"}),_("input",{id:"f-date",type:"date",value:h,onInput:V=>d(V.currentTarget.value)})]}),g&&_("div",{class:"msg",role:"alert",children:g}),_("button",{type:"submit",class:"btn",style:{width:"100%",marginTop:"16px"},disabled:m,children:m?"กำลังบันทึก":"บันทึก"})]})})}function tr({title:n,note:t,href:e}){return _("div",{class:"card stub",children:[_("h3",{children:n}),_("p",{children:t}),_("a",{class:"btn ghost",href:e,children:"เปิดหน้าเดิม"})]})}function Cm(){const[n,t]=St({state:"loading"}),[e,r]=St(location.hash.slice(1)||"home"),s=Wn(()=>Mu(),[]),o=s.slice(0,7),a=Wn(()=>Ar(o,-11),[o]),[u,h]=St(o),[d,m]=St(null),[w,g]=St([]),[R,C]=St(!1),[N,V]=St(""),[L,O]=St(0);nn(()=>{nm().then(T=>{T&&t({state:"ok",user:T})}).catch(T=>t({state:"error",message:T.message}))},[]),nn(()=>{const T=()=>r(location.hash.slice(1)||"home");return addEventListener("hashchange",T),()=>removeEventListener("hashchange",T)},[]),nn(()=>{if(n.state==="ok")return rm(a,T=>m(T))},[n.state,a]),nn(()=>{n.state==="ok"&&sm(a).then(g).catch(T=>V(T.message))},[n.state,a,L]),nn(()=>{if(N){const T=setTimeout(()=>V(""),3200);return()=>clearTimeout(T)}},[N]);const $=n.state==="ok"&&d&&!d.error,q=Wn(()=>$?hm({name:n.user.name,month:u,today:s,members:d.members,transactions:d.transactions,settlements:d.settlements,walletItems:w}):null,[$,n,d,w,u,s]),J=Wn(()=>$?fm({name:n.user.name,months:pm(o,_m),transactions:d.transactions,settlements:d.settlements,walletItems:w}):[],[$,n,d,w,o]);if(n.state==="loading")return _("div",{class:"app",children:_("div",{class:"center",children:[_(Qn,{size:64}),_("div",{children:"กำลังเข้าสู่ระบบ"})]})});if(n.state==="error")return _("div",{class:"app",children:_("div",{class:"center",children:[_(Qn,{size:64}),_("div",{role:"alert",children:n.message}),_("a",{class:"btn",href:"/index.html",children:"ไปหน้าเดิม"})]})});const Q=T=>{location.hash=T,r(T)};return _("div",{class:"app",children:[_("aside",{class:"side","aria-label":"เมนูหลัก",children:[_("div",{class:"brand",children:[_(Qn,{size:28}),"Dept Money"]}),_("nav",{children:Es.map(T=>_("button",{type:"button",class:`snav ${e===T.key?"on":""}`,"aria-current":e===T.key?"page":void 0,onClick:()=>Q(T.key),children:[_(ft,{name:T.icon}),T.label]},T.key))}),_("button",{type:"button",class:"btn side-add",onClick:()=>C(!0),children:[_(ft,{name:"plus"}),"บันทึกรายการ"]}),_("div",{class:"side-me",children:[_("span",{class:"av","aria-hidden":"true",children:[...n.user.name][0]}),_("span",{children:n.user.name})]})]}),_("main",{class:"page",children:[_("div",{class:"top",children:[_("div",{class:"brand mobile-only",children:[_(Qn,{size:24}),"Dept Money"]}),_("h1",{class:"page-title",children:Es.find(T=>T.key===e)?.label}),e==="home"&&_(gm,{month:u,onChange:h,min:a,max:o})]}),e==="home"&&(d&&d.error?_("div",{class:"card",role:"alert",children:"โหลดข้อมูลไม่สำเร็จ ลองรีเฟรชหน้านี้"}):q?_(Rm,{model:q,series:J,month:u,onMonth:h,daily:q.daily}):_("div",{class:"empty",children:"กำลังโหลดข้อมูล"})),e==="bills"&&_(tr,{title:"บิล",note:"หน้านี้กำลังสร้าง ใช้หน้าเดิมไปก่อน",href:"/index.html#history"}),e==="clear"&&_(tr,{title:"เคลียร์เงิน",note:"หน้านี้กำลังสร้าง ใช้หน้าเดิมไปก่อน (QR และอัปโหลดสลิปอยู่ที่นั่น)",href:"/index.html#clear"}),e==="wallet"&&_(tr,{title:"กระเป๋า",note:"หน้านี้กำลังสร้าง ตอนนี้ดูสรุปได้ที่หน้าแรก และบันทึกรายรับ/รายจ่ายได้จากปุ่มบันทึก",href:"#home"}),e==="me"&&_(tr,{title:"ฉัน",note:"หน้านี้กำลังสร้าง ตั้งค่าโปรไฟล์และสมาชิกใช้หน้าเดิมไปก่อน",href:"/index.html#profile"})]}),_("button",{type:"button",class:"fab",onClick:()=>C(!0),"aria-label":"บันทึกรายการ",children:[_(ft,{name:"plus"}),"บันทึก"]}),_("nav",{class:"tabbar","aria-label":"เมนูหลัก",children:_("div",{class:"tabbar-in",children:Es.map(T=>_("button",{type:"button",class:`tab ${e===T.key?"on":""}`,"aria-current":e===T.key?"page":void 0,onClick:()=>Q(T.key),children:[_(ft,{name:T.icon}),T.label]},T.key))})}),R&&_(Sm,{onClose:()=>C(!1),onSaved:T=>{V(T),O(y=>y+1)}}),N&&_("div",{class:"toast",role:"status",children:N})]})}Dc(_(Cm,{}),document.getElementById("app"));
