const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TeaLanding-BwlFvCer.js","assets/TeaLanding-B7TCT960.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}})();var kh={exports:{}},rl={};var Rv;function bM(){if(Rv)return rl;Rv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return rl.Fragment=t,rl.jsx=e,rl.jsxs=e,rl}var Cv;function EM(){return Cv||(Cv=1,kh.exports=bM()),kh.exports}var Ct=EM(),Wh={exports:{}},sl={},Xh={exports:{}},qh={};var Dv;function TM(){return Dv||(Dv=1,(function(r){function t(N,X){var W=N.length;N.push(X);t:for(;0<W;){var at=W-1>>>1,B=N[at];if(0<o(B,X))N[at]=X,N[W]=B,W=at;else break t}}function e(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var X=N[0],W=N.pop();if(W!==X){N[0]=W;t:for(var at=0,B=N.length,nt=B>>>1;at<nt;){var gt=2*(at+1)-1,pt=N[gt],$=gt+1,mt=N[$];if(0>o(pt,W))$<B&&0>o(mt,pt)?(N[at]=mt,N[$]=W,at=$):(N[at]=pt,N[gt]=W,at=gt);else if($<B&&0>o(mt,W))N[at]=mt,N[$]=W,at=$;else break t}}return X}function o(N,X){var W=N.sortIndex-X.sortIndex;return W!==0?W:N.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],d=[],g=1,_=null,v=3,y=!1,M=!1,E=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function A(N){for(var X=e(d);X!==null;){if(X.callback===null)a(d);else if(X.startTime<=N)a(d),X.sortIndex=X.expirationTime,t(p,X);else break;X=e(d)}}function P(N){if(E=!1,A(N),!M)if(e(p)!==null)M=!0,L||(L=!0,Z());else{var X=e(d);X!==null&&rt(P,X.startTime-N)}}var L=!1,z=-1,I=5,C=-1;function T(){return S?!0:!(r.unstable_now()-C<I)}function H(){if(S=!1,L){var N=r.unstable_now();C=N;var X=!0;try{t:{M=!1,E&&(E=!1,O(z),z=-1),y=!0;var W=v;try{e:{for(A(N),_=e(p);_!==null&&!(_.expirationTime>N&&T());){var at=_.callback;if(typeof at=="function"){_.callback=null,v=_.priorityLevel;var B=at(_.expirationTime<=N);if(N=r.unstable_now(),typeof B=="function"){_.callback=B,A(N),X=!0;break e}_===e(p)&&a(p),A(N)}else a(p);_=e(p)}if(_!==null)X=!0;else{var nt=e(d);nt!==null&&rt(P,nt.startTime-N),X=!1}}break t}finally{_=null,v=W,y=!1}X=void 0}}finally{X?Z():L=!1}}}var Z;if(typeof w=="function")Z=function(){w(H)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,et=G.port2;G.port1.onmessage=H,Z=function(){et.postMessage(null)}}else Z=function(){x(H,0)};function rt(N,X){z=x(function(){N(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(N){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var W=v;v=X;try{return N()}finally{v=W}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=v;v=N;try{return X()}finally{v=W}},r.unstable_scheduleCallback=function(N,X,W){var at=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?at+W:at):W=at,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=W+B,N={id:g++,callback:X,priorityLevel:N,startTime:W,expirationTime:B,sortIndex:-1},W>at?(N.sortIndex=W,t(d,N),e(p)===null&&N===e(d)&&(E?(O(z),z=-1):E=!0,rt(P,W-at))):(N.sortIndex=B,t(p,N),M||y||(M=!0,L||(L=!0,Z()))),N},r.unstable_shouldYield=T,r.unstable_wrapCallback=function(N){var X=v;return function(){var W=v;v=X;try{return N.apply(this,arguments)}finally{v=W}}}})(qh)),qh}var Uv;function AM(){return Uv||(Uv=1,Xh.exports=TM()),Xh.exports}var Yh={exports:{}},_e={};var Lv;function wM(){if(Lv)return _e;Lv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(B,nt,gt){this.props=B,this.context=nt,this.refs=E,this.updater=gt||y}S.prototype.isReactComponent={},S.prototype.setState=function(B,nt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,nt,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function x(){}x.prototype=S.prototype;function O(B,nt,gt){this.props=B,this.context=nt,this.refs=E,this.updater=gt||y}var w=O.prototype=new x;w.constructor=O,M(w,S.prototype),w.isPureReactComponent=!0;var A=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},L=Object.prototype.hasOwnProperty;function z(B,nt,gt,pt,$,mt){return gt=mt.ref,{$$typeof:r,type:B,key:nt,ref:gt!==void 0?gt:null,props:mt}}function I(B,nt){return z(B.type,nt,void 0,void 0,void 0,B.props)}function C(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function T(B){var nt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(gt){return nt[gt]})}var H=/\/+/g;function Z(B,nt){return typeof B=="object"&&B!==null&&B.key!=null?T(""+B.key):nt.toString(36)}function G(){}function et(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(G,G):(B.status="pending",B.then(function(nt){B.status==="pending"&&(B.status="fulfilled",B.value=nt)},function(nt){B.status==="pending"&&(B.status="rejected",B.reason=nt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function rt(B,nt,gt,pt,$){var mt=typeof B;(mt==="undefined"||mt==="boolean")&&(B=null);var vt=!1;if(B===null)vt=!0;else switch(mt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(B.$$typeof){case r:case t:vt=!0;break;case g:return vt=B._init,rt(vt(B._payload),nt,gt,pt,$)}}if(vt)return $=$(B),vt=pt===""?"."+Z(B,0):pt,A($)?(gt="",vt!=null&&(gt=vt.replace(H,"$&/")+"/"),rt($,nt,gt,"",function(Ft){return Ft})):$!=null&&(C($)&&($=I($,gt+($.key==null||B&&B.key===$.key?"":(""+$.key).replace(H,"$&/")+"/")+vt)),nt.push($)),1;vt=0;var ht=pt===""?".":pt+":";if(A(B))for(var Mt=0;Mt<B.length;Mt++)pt=B[Mt],mt=ht+Z(pt,Mt),vt+=rt(pt,nt,gt,mt,$);else if(Mt=v(B),typeof Mt=="function")for(B=Mt.call(B),Mt=0;!(pt=B.next()).done;)pt=pt.value,mt=ht+Z(pt,Mt++),vt+=rt(pt,nt,gt,mt,$);else if(mt==="object"){if(typeof B.then=="function")return rt(et(B),nt,gt,pt,$);throw nt=String(B),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return vt}function N(B,nt,gt){if(B==null)return B;var pt=[],$=0;return rt(B,pt,"","",function(mt){return nt.call(gt,mt,$++)}),pt}function X(B){if(B._status===-1){var nt=B._result;nt=nt(),nt.then(function(gt){(B._status===0||B._status===-1)&&(B._status=1,B._result=gt)},function(gt){(B._status===0||B._status===-1)&&(B._status=2,B._result=gt)}),B._status===-1&&(B._status=0,B._result=nt)}if(B._status===1)return B._result.default;throw B._result}var W=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function at(){}return _e.Children={map:N,forEach:function(B,nt,gt){N(B,function(){nt.apply(this,arguments)},gt)},count:function(B){var nt=0;return N(B,function(){nt++}),nt},toArray:function(B){return N(B,function(nt){return nt})||[]},only:function(B){if(!C(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},_e.Component=S,_e.Fragment=e,_e.Profiler=o,_e.PureComponent=O,_e.StrictMode=a,_e.Suspense=p,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,_e.__COMPILER_RUNTIME={__proto__:null,c:function(B){return P.H.useMemoCache(B)}},_e.cache=function(B){return function(){return B.apply(null,arguments)}},_e.cloneElement=function(B,nt,gt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var pt=M({},B.props),$=B.key,mt=void 0;if(nt!=null)for(vt in nt.ref!==void 0&&(mt=void 0),nt.key!==void 0&&($=""+nt.key),nt)!L.call(nt,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&nt.ref===void 0||(pt[vt]=nt[vt]);var vt=arguments.length-2;if(vt===1)pt.children=gt;else if(1<vt){for(var ht=Array(vt),Mt=0;Mt<vt;Mt++)ht[Mt]=arguments[Mt+2];pt.children=ht}return z(B.type,$,void 0,void 0,mt,pt)},_e.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},_e.createElement=function(B,nt,gt){var pt,$={},mt=null;if(nt!=null)for(pt in nt.key!==void 0&&(mt=""+nt.key),nt)L.call(nt,pt)&&pt!=="key"&&pt!=="__self"&&pt!=="__source"&&($[pt]=nt[pt]);var vt=arguments.length-2;if(vt===1)$.children=gt;else if(1<vt){for(var ht=Array(vt),Mt=0;Mt<vt;Mt++)ht[Mt]=arguments[Mt+2];$.children=ht}if(B&&B.defaultProps)for(pt in vt=B.defaultProps,vt)$[pt]===void 0&&($[pt]=vt[pt]);return z(B,mt,void 0,void 0,null,$)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(B){return{$$typeof:f,render:B}},_e.isValidElement=C,_e.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:X}},_e.memo=function(B,nt){return{$$typeof:d,type:B,compare:nt===void 0?null:nt}},_e.startTransition=function(B){var nt=P.T,gt={};P.T=gt;try{var pt=B(),$=P.S;$!==null&&$(gt,pt),typeof pt=="object"&&pt!==null&&typeof pt.then=="function"&&pt.then(at,W)}catch(mt){W(mt)}finally{P.T=nt}},_e.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},_e.use=function(B){return P.H.use(B)},_e.useActionState=function(B,nt,gt){return P.H.useActionState(B,nt,gt)},_e.useCallback=function(B,nt){return P.H.useCallback(B,nt)},_e.useContext=function(B){return P.H.useContext(B)},_e.useDebugValue=function(){},_e.useDeferredValue=function(B,nt){return P.H.useDeferredValue(B,nt)},_e.useEffect=function(B,nt,gt){var pt=P.H;if(typeof gt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return pt.useEffect(B,nt)},_e.useId=function(){return P.H.useId()},_e.useImperativeHandle=function(B,nt,gt){return P.H.useImperativeHandle(B,nt,gt)},_e.useInsertionEffect=function(B,nt){return P.H.useInsertionEffect(B,nt)},_e.useLayoutEffect=function(B,nt){return P.H.useLayoutEffect(B,nt)},_e.useMemo=function(B,nt){return P.H.useMemo(B,nt)},_e.useOptimistic=function(B,nt){return P.H.useOptimistic(B,nt)},_e.useReducer=function(B,nt,gt){return P.H.useReducer(B,nt,gt)},_e.useRef=function(B){return P.H.useRef(B)},_e.useState=function(B){return P.H.useState(B)},_e.useSyncExternalStore=function(B,nt,gt){return P.H.useSyncExternalStore(B,nt,gt)},_e.useTransition=function(){return P.H.useTransition()},_e.version="19.1.0",_e}var Nv;function Cp(){return Nv||(Nv=1,Yh.exports=wM()),Yh.exports}var jh={exports:{}},Bn={};var Pv;function RM(){if(Pv)return Bn;Pv=1;var r=Cp();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var a={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},Bn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Bn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Bn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Bn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=f(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Bn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Bn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=f(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Bn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Bn.requestFormReset=function(p){a.d.r(p)},Bn.unstable_batchedUpdates=function(p,d){return p(d)},Bn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bn.version="19.1.0",Bn}var Ov;function CM(){if(Ov)return jh.exports;Ov=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jh.exports=RM(),jh.exports}var zv;function DM(){if(zv)return sl;zv=1;var r=AM(),t=Cp(),e=CM();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(c(n)!==n)throw Error(a(188))}function p(n){var i=n.alternate;if(!i){if(i=c(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,l=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return f(h),n;if(m===l)return f(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=m;else{for(var b=!1,U=h.child;U;){if(U===s){b=!0,s=h,l=m;break}if(U===l){b=!0,l=h,s=m;break}U=U.sibling}if(!b){for(U=m.child;U;){if(U===s){b=!0,s=m,l=h;break}if(U===l){b=!0,l=m,s=h;break}U=U.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function d(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=d(n),i!==null)return i;n=n.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),w=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var G=Symbol.for("react.client.reference");function et(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===G?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case L:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case w:return(n.displayName||"Context")+".Provider";case O:return(n._context.displayName||"Context")+".Consumer";case A:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return i=n.displayName||null,i!==null?i:et(n.type)||"Memo";case I:i=n._payload,n=n._init;try{return et(n(i))}catch{}}return null}var rt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},at=[],B=-1;function nt(n){return{current:n}}function gt(n){0>B||(n.current=at[B],at[B]=null,B--)}function pt(n,i){B++,at[B]=n.current,n.current=i}var $=nt(null),mt=nt(null),vt=nt(null),ht=nt(null);function Mt(n,i){switch(pt(vt,i),pt(mt,n),pt($,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?nv(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=nv(i),n=iv(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}gt($),pt($,n)}function Ft(){gt($),gt(mt),gt(vt)}function $t(n){n.memoizedState!==null&&pt(ht,n);var i=$.current,s=iv(i,n.type);i!==s&&(pt(mt,n),pt($,s))}function ge(n){mt.current===n&&(gt($),gt(mt)),ht.current===n&&(gt(ht),tl._currentValue=W)}var Yt=Object.prototype.hasOwnProperty,Ae=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,hn=r.unstable_shouldYield,he=r.unstable_requestPaint,Kt=r.unstable_now,Qt=r.unstable_getCurrentPriorityLevel,we=r.unstable_ImmediatePriority,te=r.unstable_UserBlockingPriority,F=r.unstable_NormalPriority,D=r.unstable_LowPriority,lt=r.unstable_IdlePriority,Et=r.log,Tt=r.unstable_setDisableYieldValue,_t=null,Ht=null;function Ut(n){if(typeof Et=="function"&&Tt(n),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(_t,n)}catch{}}var Lt=Math.clz32?Math.clz32:Vt,me=Math.log,wt=Math.LN2;function Vt(n){return n>>>=0,n===0?32:31-(me(n)/wt|0)|0}var ee=256,Wt=4194304;function Rt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ce(n,i,s){var l=n.pendingLanes;if(l===0)return 0;var h=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var U=l&134217727;return U!==0?(l=U&~m,l!==0?h=Rt(l):(b&=U,b!==0?h=Rt(b):s||(s=U&~n,s!==0&&(h=Rt(s))))):(U=l&~m,U!==0?h=Rt(U):b!==0?h=Rt(b):s||(s=l&~n,s!==0&&(h=Rt(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function se(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function Ne(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K(){var n=ee;return ee<<=1,(ee&4194048)===0&&(ee=256),n}function Ot(){var n=Wt;return Wt<<=1,(Wt&62914560)===0&&(Wt=4194304),n}function dt(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function ft(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function zt(n,i,s,l,h,m){var b=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var U=n.entanglements,k=n.expirationTimes,ot=n.hiddenUpdates;for(s=b&~s;0<s;){var yt=31-Lt(s),bt=1<<yt;U[yt]=0,k[yt]=-1;var ct=ot[yt];if(ct!==null)for(ot[yt]=null,yt=0;yt<ct.length;yt++){var ut=ct[yt];ut!==null&&(ut.lane&=-536870913)}s&=~bt}l!==0&&Bt(n,l,0),m!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~i))}function Bt(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-Lt(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|s&4194090}function ue(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var l=31-Lt(s),h=1<<l;h&i|n[l]&i&&(n[l]|=i),s&=~h}}function Me(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ge(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function xe(){var n=X.p;return n!==0?n:(n=window.event,n===void 0?32:Mv(n.type))}function En(n,i){var s=X.p;try{return X.p=n,i()}finally{X.p=s}}var en=Math.random().toString(36).slice(2),$e="__reactFiber$"+en,vn="__reactProps$"+en,_n="__reactContainer$"+en,Vi="__reactEvents$"+en,Sr="__reactListeners$"+en,na="__reactHandles$"+en,Gi="__reactResources$"+en,Ri="__reactMarker$"+en;function Ci(n){delete n[$e],delete n[vn],delete n[Vi],delete n[Sr],delete n[na]}function mi(n){var i=n[$e];if(i)return i;for(var s=n.parentNode;s;){if(i=s[_n]||s[$e]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=ov(n);n!==null;){if(s=n[$e])return s;n=ov(n)}return i}n=s,s=n.parentNode}return null}function gi(n){if(n=n[$e]||n[_n]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function St(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function ae(n){var i=n[Gi];return i||(i=n[Gi]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function jt(n){n[Ri]=!0}var R=new Set,q={};function j(n,i){it(n,i),it(n+"Capture",i)}function it(n,i){for(q[n]=i,n=0;n<i.length;n++)R.add(i[n])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),At={},Pt={};function Nt(n){return Yt.call(Pt,n)?!0:Yt.call(At,n)?!1:Q.test(n)?Pt[n]=!0:(At[n]=!0,!1)}function Dt(n,i,s){if(Nt(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function ne(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function qt(n,i,s,l){if(l===null)n.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+l)}}var kt,ve;function Ce(n){if(kt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);kt=i&&i[1]||"",ve=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+n+ve}var Ie=!1;function Tn(n,i){if(!n||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(ut){var ct=ut}Reflect.construct(n,[],bt)}else{try{bt.call()}catch(ut){ct=ut}n.call(bt.prototype)}}else{try{throw Error()}catch(ut){ct=ut}(bt=n())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(ut){if(ut&&ct&&typeof ut.stack=="string")return[ut.stack,ct.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],U=m[1];if(b&&U){var k=b.split(`
`),ot=U.split(`
`);for(h=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;h<ot.length&&!ot[h].includes("DetermineComponentFrameRoot");)h++;if(l===k.length||h===ot.length)for(l=k.length-1,h=ot.length-1;1<=l&&0<=h&&k[l]!==ot[h];)h--;for(;1<=l&&0<=h;l--,h--)if(k[l]!==ot[h]){if(l!==1||h!==1)do if(l--,h--,0>h||k[l]!==ot[h]){var yt=`
`+k[l].replace(" at new "," at ");return n.displayName&&yt.includes("<anonymous>")&&(yt=yt.replace("<anonymous>",n.displayName)),yt}while(1<=l&&0<=h);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Ce(s):""}function Pe(n){switch(n.tag){case 26:case 27:case 5:return Ce(n.type);case 16:return Ce("Lazy");case 13:return Ce("Suspense");case 19:return Ce("SuspenseList");case 0:case 15:return Tn(n.type,!1);case 11:return Tn(n.type.render,!1);case 1:return Tn(n.type,!0);case 31:return Ce("Activity");default:return""}}function Zt(n){try{var i="";do i+=Pe(n),n=n.return;while(n);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function sn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ni(n){var i=De(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){l=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Di(n){n._valueTracker||(n._valueTracker=ni(n))}function On(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return n&&(l=De(n)?n.checked?"true":"false":n.value),n=l,n!==s?(i.setValue(n),!0):!1}function ki(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var je=/[\n"\\]/g;function nn(n){return n.replace(je,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ia(n,i,s,l,h,m,b,U){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),i!=null?b==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+sn(i)):n.value!==""+sn(i)&&(n.value=""+sn(i)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),i!=null?vi(n,b,sn(i)):s!=null?vi(n,b,sn(s)):l!=null&&n.removeAttribute("value"),h==null&&m!=null&&(n.defaultChecked=!!m),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?n.name=""+sn(U):n.removeAttribute("name")}function Gn(n,i,s,l,h,m,b,U){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+sn(s):"",i=i!=null?""+sn(i):s,U||i===n.value||(n.value=i),n.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=U?n.checked:!!l,n.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b)}function vi(n,i,s){i==="number"&&ki(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function kn(n,i,s,l){if(n=n.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=i.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&l&&(n[s].defaultSelected=!0)}else{for(s=""+sn(s),i=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function fo(n,i,s){if(i!=null&&(i=""+sn(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+sn(s):""}function em(n,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(rt(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=sn(i),n.defaultValue=s,l=n.textContent,l===s&&l!==""&&l!==null&&(n.value=l)}function Qr(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var xx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nm(n,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,s):typeof s!="number"||s===0||xx.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function im(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&nm(n,h,l)}else for(var m in i)i.hasOwnProperty(m)&&nm(n,m,i[m])}function Vu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(n){return Mx.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Gu=null;function ku(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Jr=null,$r=null;function am(n){var i=gi(n);if(i&&(n=i.stateNode)){var s=n[vn]||null;t:switch(n=i.stateNode,i.type){case"input":if(ia(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+nn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==n&&l.form===n.form){var h=l[vn]||null;if(!h)throw Error(a(90));ia(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===n.form&&On(l)}break t;case"textarea":fo(n,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&kn(n,!!s.multiple,i,!1)}}}var Wu=!1;function rm(n,i,s){if(Wu)return n(i,s);Wu=!0;try{var l=n(i);return l}finally{if(Wu=!1,(Jr!==null||$r!==null)&&(gc(),Jr&&(i=Jr,n=$r,$r=Jr=null,am(i),n)))for(i=0;i<n.length;i++)am(n[i])}}function ho(n,i){var s=n.stateNode;if(s===null)return null;var l=s[vn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(aa)try{var po={};Object.defineProperty(po,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Xu=!1}var za=null,qu=null,Ll=null;function sm(){if(Ll)return Ll;var n,i=qu,s=i.length,l,h="value"in za?za.value:za.textContent,m=h.length;for(n=0;n<s&&i[n]===h[n];n++);var b=s-n;for(l=1;l<=b&&i[s-l]===h[m-l];l++);return Ll=h.slice(n,1<l?1-l:void 0)}function Nl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Pl(){return!0}function om(){return!1}function Zn(n){function i(s,l,h,m,b){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(s=n[U],this[U]=s?s(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pl:om,this.isPropagationStopped=om,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),i}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Zn(Mr),mo=g({},Mr,{view:0,detail:0}),bx=Zn(mo),Yu,ju,go,zl=g({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==go&&(go&&n.type==="mousemove"?(Yu=n.screenX-go.screenX,ju=n.screenY-go.screenY):ju=Yu=0,go=n),Yu)},movementY:function(n){return"movementY"in n?n.movementY:ju}}),lm=Zn(zl),Ex=g({},zl,{dataTransfer:0}),Tx=Zn(Ex),Ax=g({},mo,{relatedTarget:0}),Zu=Zn(Ax),wx=g({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=Zn(wx),Cx=g({},Mr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Dx=Zn(Cx),Ux=g({},Mr,{data:0}),cm=Zn(Ux),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ox(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Px[n])?!!i[n]:!1}function Ku(){return Ox}var zx=g({},mo,{key:function(n){if(n.key){var i=Lx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Nx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(n){return n.type==="keypress"?Nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Bx=Zn(zx),Ix=g({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=Zn(Ix),Fx=g({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),Hx=Zn(Fx),Vx=g({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=Zn(Vx),kx=g({},zl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wx=Zn(kx),Xx=g({},Mr,{newState:0,oldState:0}),qx=Zn(Xx),Yx=[9,13,27,32],Qu=aa&&"CompositionEvent"in window,vo=null;aa&&"documentMode"in document&&(vo=document.documentMode);var jx=aa&&"TextEvent"in window&&!vo,fm=aa&&(!Qu||vo&&8<vo&&11>=vo),hm=" ",dm=!1;function pm(n,i){switch(n){case"keyup":return Yx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ts=!1;function Zx(n,i){switch(n){case"compositionend":return mm(i);case"keypress":return i.which!==32?null:(dm=!0,hm);case"textInput":return n=i.data,n===hm&&dm?null:n;default:return null}}function Kx(n,i){if(ts)return n==="compositionend"||!Qu&&pm(n,i)?(n=sm(),Ll=qu=za=null,ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return fm&&i.locale!=="ko"?null:i.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Qx[n.type]:i==="textarea"}function vm(n,i,s,l){Jr?$r?$r.push(l):$r=[l]:Jr=l,i=Mc(i,"onChange"),0<i.length&&(s=new Ol("onChange","change",null,s,l),n.push({event:s,listeners:i}))}var _o=null,yo=null;function Jx(n){Q0(n,0)}function Bl(n){var i=St(n);if(On(i))return n}function _m(n,i){if(n==="change")return i}var ym=!1;if(aa){var Ju;if(aa){var $u="oninput"in document;if(!$u){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),$u=typeof xm.oninput=="function"}Ju=$u}else Ju=!1;ym=Ju&&(!document.documentMode||9<document.documentMode)}function Sm(){_o&&(_o.detachEvent("onpropertychange",Mm),yo=_o=null)}function Mm(n){if(n.propertyName==="value"&&Bl(yo)){var i=[];vm(i,yo,n,ku(n)),rm(Jx,i)}}function $x(n,i,s){n==="focusin"?(Sm(),_o=i,yo=s,_o.attachEvent("onpropertychange",Mm)):n==="focusout"&&Sm()}function tS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bl(yo)}function eS(n,i){if(n==="click")return Bl(i)}function nS(n,i){if(n==="input"||n==="change")return Bl(i)}function iS(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:iS;function xo(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!Yt.call(i,h)||!ii(n[h],i[h]))return!1}return!0}function bm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Em(n,i){var s=bm(n);n=0;for(var l;s;){if(s.nodeType===3){if(l=n+s.textContent.length,n<=i&&l>=i)return{node:s,offset:i-n};n=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=bm(s)}}function Tm(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Tm(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Am(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=ki(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=ki(n.document)}return i}function tf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var aS=aa&&"documentMode"in document&&11>=document.documentMode,es=null,ef=null,So=null,nf=!1;function wm(n,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;nf||es==null||es!==ki(l)||(l=es,"selectionStart"in l&&tf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),So&&xo(So,l)||(So=l,l=Mc(ef,"onSelect"),0<l.length&&(i=new Ol("onSelect","select",null,i,s),n.push({event:i,listeners:l}),i.target=es)))}function br(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var ns={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},af={},Rm={};aa&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Er(n){if(af[n])return af[n];if(!ns[n])return n;var i=ns[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in Rm)return af[n]=i[s];return n}var Cm=Er("animationend"),Dm=Er("animationiteration"),Um=Er("animationstart"),rS=Er("transitionrun"),sS=Er("transitionstart"),oS=Er("transitioncancel"),Lm=Er("transitionend"),Nm=new Map,rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rf.push("scrollEnd");function Ui(n,i){Nm.set(n,i),j(i,[n])}var Pm=new WeakMap;function _i(n,i){if(typeof n=="object"&&n!==null){var s=Pm.get(n);return s!==void 0?s:(i={value:n,source:i,stack:Zt(i)},Pm.set(n,i),i)}return{value:n,source:i,stack:Zt(i)}}var yi=[],is=0,sf=0;function Il(){for(var n=is,i=sf=is=0;i<n;){var s=yi[i];yi[i++]=null;var l=yi[i];yi[i++]=null;var h=yi[i];yi[i++]=null;var m=yi[i];if(yi[i++]=null,l!==null&&h!==null){var b=l.pending;b===null?h.next=h:(h.next=b.next,b.next=h),l.pending=h}m!==0&&Om(s,h,m)}}function Fl(n,i,s,l){yi[is++]=n,yi[is++]=i,yi[is++]=s,yi[is++]=l,sf|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function of(n,i,s,l){return Fl(n,i,s,l),Hl(n)}function as(n,i){return Fl(n,null,null,i),Hl(n)}function Om(n,i,s){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s);for(var h=!1,m=n.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(h=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,h&&i!==null&&(h=31-Lt(s),n=m.hiddenUpdates,l=n[h],l===null?n[h]=[i]:l.push(i),i.lane=s|536870912),m):null}function Hl(n){if(50<qo)throw qo=0,dh=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var rs={};function lS(n,i,s,l){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,i,s,l){return new lS(n,i,s,l)}function lf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ra(n,i){var s=n.alternate;return s===null?(s=ai(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function zm(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Vl(n,i,s,l,h,m){var b=0;if(l=n,typeof n=="function")lf(n)&&(b=1);else if(typeof n=="string")b=uM(n,s,$.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case C:return n=ai(31,s,i,h),n.elementType=C,n.lanes=m,n;case M:return Tr(s.children,h,m,i);case E:b=8,h|=24;break;case S:return n=ai(12,s,i,h|2),n.elementType=S,n.lanes=m,n;case P:return n=ai(13,s,i,h),n.elementType=P,n.lanes=m,n;case L:return n=ai(19,s,i,h),n.elementType=L,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case w:b=10;break t;case O:b=9;break t;case A:b=11;break t;case z:b=14;break t;case I:b=16,l=null;break t}b=29,s=Error(a(130,n===null?"null":typeof n,"")),l=null}return i=ai(b,s,i,h),i.elementType=n,i.type=l,i.lanes=m,i}function Tr(n,i,s,l){return n=ai(7,n,l,i),n.lanes=s,n}function cf(n,i,s){return n=ai(6,n,null,i),n.lanes=s,n}function uf(n,i,s){return i=ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var ss=[],os=0,Gl=null,kl=0,xi=[],Si=0,Ar=null,sa=1,oa="";function wr(n,i){ss[os++]=kl,ss[os++]=Gl,Gl=n,kl=i}function Bm(n,i,s){xi[Si++]=sa,xi[Si++]=oa,xi[Si++]=Ar,Ar=n;var l=sa;n=oa;var h=32-Lt(l)-1;l&=~(1<<h),s+=1;var m=32-Lt(i)+h;if(30<m){var b=h-h%5;m=(l&(1<<b)-1).toString(32),l>>=b,h-=b,sa=1<<32-Lt(i)+h|s<<h|l,oa=m+n}else sa=1<<m|s<<h|l,oa=n}function ff(n){n.return!==null&&(wr(n,1),Bm(n,1,0))}function hf(n){for(;n===Gl;)Gl=ss[--os],ss[os]=null,kl=ss[--os],ss[os]=null;for(;n===Ar;)Ar=xi[--Si],xi[Si]=null,oa=xi[--Si],xi[Si]=null,sa=xi[--Si],xi[Si]=null}var Wn=null,on=null,ze=!1,Rr=null,Wi=!1,df=Error(a(519));function Cr(n){var i=Error(a(418,""));throw Eo(_i(i,n)),df}function Im(n){var i=n.stateNode,s=n.type,l=n.memoizedProps;switch(i[$e]=n,i[vn]=l,s){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(s=0;s<jo.length;s++)Te(jo[s],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),Gn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Di(i);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),em(i,l.value,l.defaultValue,l.children),Di(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||ev(i.textContent,s)?(l.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),l.onScroll!=null&&Te("scroll",i),l.onScrollEnd!=null&&Te("scrollend",i),l.onClick!=null&&(i.onclick=bc),i=!0):i=!1,i||Cr(n)}function Fm(n){for(Wn=n.return;Wn;)switch(Wn.tag){case 5:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Wn=Wn.return}}function Mo(n){if(n!==Wn)return!1;if(!ze)return Fm(n),ze=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Ch(n.type,n.memoizedProps)),s=!s),s&&on&&Cr(n),Fm(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){on=Ni(n.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;n=n.nextSibling}on=null}}else i===27?(i=on,Ja(n.type)?(n=Nh,Nh=null,on=n):on=i):on=Wn?Ni(n.stateNode.nextSibling):null;return!0}function bo(){on=Wn=null,ze=!1}function Hm(){var n=Rr;return n!==null&&(Jn===null?Jn=n:Jn.push.apply(Jn,n),Rr=null),n}function Eo(n){Rr===null?Rr=[n]:Rr.push(n)}var pf=nt(null),Dr=null,la=null;function Ba(n,i,s){pt(pf,i._currentValue),i._currentValue=s}function ca(n){n._currentValue=pf.current,gt(pf)}function mf(n,i,s){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===s)break;n=n.return}}function gf(n,i,s,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var U=m;m=h;for(var k=0;k<i.length;k++)if(U.context===i[k]){m.lanes|=s,U=m.alternate,U!==null&&(U.lanes|=s),mf(m.return,s,n),l||(b=null);break t}m=U.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),mf(b,s,n),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===n){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function To(n,i,s,l){n=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var U=h.type;ii(h.pendingProps.value,b.value)||(n!==null?n.push(U):n=[U])}}else if(h===ht.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(tl):n=[tl])}h=h.return}n!==null&&gf(i,n,s,l),i.flags|=262144}function Wl(n){for(n=n.firstContext;n!==null;){if(!ii(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ur(n){Dr=n,la=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function zn(n){return Vm(Dr,n)}function Xl(n,i){return Dr===null&&Ur(n),Vm(n,i)}function Vm(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},la===null){if(n===null)throw Error(a(308));la=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else la=la.next=i;return s}var cS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},uS=r.unstable_scheduleCallback,fS=r.unstable_NormalPriority,yn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vf(){return{controller:new cS,data:new Map,refCount:0}}function Ao(n){n.refCount--,n.refCount===0&&uS(fS,function(){n.controller.abort()})}var wo=null,_f=0,ls=0,cs=null;function hS(n,i){if(wo===null){var s=wo=[];_f=0,ls=xh(),cs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return _f++,i.then(Gm,Gm),i}function Gm(){if(--_f===0&&wo!==null){cs!==null&&(cs.status="fulfilled");var n=wo;wo=null,ls=0,cs=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function dS(n,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var km=N.S;N.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&hS(n,i),km!==null&&km(n,i)};var Lr=nt(null);function yf(){var n=Lr.current;return n!==null?n:Qe.pooledCache}function ql(n,i){i===null?pt(Lr,Lr.current):pt(Lr,i.pool)}function Wm(){var n=yf();return n===null?null:{parent:yn._currentValue,pool:n}}var Ro=Error(a(460)),Xm=Error(a(474)),Yl=Error(a(542)),xf={then:function(){}};function qm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function jl(){}function Ym(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(jl,jl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Zm(n),n;default:if(typeof i.status=="string")i.then(jl,jl);else{if(n=Qe,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Zm(n),n}throw Co=i,Ro}}var Co=null;function jm(){if(Co===null)throw Error(a(459));var n=Co;return Co=null,n}function Zm(n){if(n===Ro||n===Yl)throw Error(a(483))}var Ia=!1;function Sf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Fa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ha(n,i,s){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Fe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Hl(n),Om(n,null,s),i}return Fl(n,l,i,s),Hl(n)}function Do(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,ue(n,s)}}function bf(n,i){var s=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var Ef=!1;function Uo(){if(Ef){var n=cs;if(n!==null)throw n}}function Lo(n,i,s,l){Ef=!1;var h=n.updateQueue;Ia=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var k=U,ot=k.next;k.next=null,b===null?m=ot:b.next=ot,b=k;var yt=n.alternate;yt!==null&&(yt=yt.updateQueue,U=yt.lastBaseUpdate,U!==b&&(U===null?yt.firstBaseUpdate=ot:U.next=ot,yt.lastBaseUpdate=k))}if(m!==null){var bt=h.baseState;b=0,yt=ot=k=null,U=m;do{var ct=U.lane&-536870913,ut=ct!==U.lane;if(ut?(Re&ct)===ct:(l&ct)===ct){ct!==0&&ct===ls&&(Ef=!0),yt!==null&&(yt=yt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var le=n,re=U;ct=i;var Xe=s;switch(re.tag){case 1:if(le=re.payload,typeof le=="function"){bt=le.call(Xe,bt,ct);break t}bt=le;break t;case 3:le.flags=le.flags&-65537|128;case 0:if(le=re.payload,ct=typeof le=="function"?le.call(Xe,bt,ct):le,ct==null)break t;bt=g({},bt,ct);break t;case 2:Ia=!0}}ct=U.callback,ct!==null&&(n.flags|=64,ut&&(n.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[ct]:ut.push(ct))}else ut={lane:ct,tag:U.tag,payload:U.payload,callback:U.callback,next:null},yt===null?(ot=yt=ut,k=bt):yt=yt.next=ut,b|=ct;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ut=U,U=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);yt===null&&(k=bt),h.baseState=k,h.firstBaseUpdate=ot,h.lastBaseUpdate=yt,m===null&&(h.shared.lanes=0),ja|=b,n.lanes=b,n.memoizedState=bt}}function Km(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function Qm(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Km(s[n],i)}var us=nt(null),Zl=nt(0);function Jm(n,i){n=ga,pt(Zl,n),pt(us,i),ga=n|i.baseLanes}function Tf(){pt(Zl,ga),pt(us,us.current)}function Af(){ga=Zl.current,gt(us),gt(Zl)}var Va=0,Se=null,ke=null,dn=null,Kl=!1,fs=!1,Nr=!1,Ql=0,No=0,hs=null,pS=0;function un(){throw Error(a(321))}function wf(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!ii(n[s],i[s]))return!1;return!0}function Rf(n,i,s,l,h,m){return Va=m,Se=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=n===null||n.memoizedState===null?Og:zg,Nr=!1,m=s(l,h),Nr=!1,fs&&(m=tg(i,s,l,h)),$m(n),m}function $m(n){N.H=ic;var i=ke!==null&&ke.next!==null;if(Va=0,dn=ke=Se=null,Kl=!1,No=0,hs=null,i)throw Error(a(300));n===null||An||(n=n.dependencies,n!==null&&Wl(n)&&(An=!0))}function tg(n,i,s,l){Se=n;var h=0;do{if(fs&&(hs=null),No=0,fs=!1,25<=h)throw Error(a(301));if(h+=1,dn=ke=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}N.H=SS,m=i(s,l)}while(fs);return m}function mS(){var n=N.H,i=n.useState()[0];return i=typeof i.then=="function"?Po(i):i,n=n.useState()[0],(ke!==null?ke.memoizedState:null)!==n&&(Se.flags|=1024),i}function Cf(){var n=Ql!==0;return Ql=0,n}function Df(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function Uf(n){if(Kl){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Kl=!1}Va=0,dn=ke=Se=null,fs=!1,No=Ql=0,hs=null}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Se.memoizedState=dn=n:dn=dn.next=n,dn}function pn(){if(ke===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=ke.next;var i=dn===null?Se.memoizedState:dn.next;if(i!==null)dn=i,ke=n;else{if(n===null)throw Se.alternate===null?Error(a(467)):Error(a(310));ke=n,n={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},dn===null?Se.memoizedState=dn=n:dn=dn.next=n}return dn}function Lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(n){var i=No;return No+=1,hs===null&&(hs=[]),n=Ym(hs,n,i),i=Se,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?Og:zg),n}function Jl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Po(n);if(n.$$typeof===w)return zn(n)}throw Error(a(438,String(n)))}function Nf(n){var i=null,s=Se.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Lf(),Se.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),l=0;l<n;l++)s[l]=T;return i.index++,s}function ua(n,i){return typeof i=="function"?i(n):i}function $l(n){var i=pn();return Pf(i,ke,n)}function Pf(n,i,s){var l=n.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=n.baseQueue,m=l.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,l.pending=null}if(m=n.baseState,h===null)n.memoizedState=m;else{i=h.next;var U=b=null,k=null,ot=i,yt=!1;do{var bt=ot.lane&-536870913;if(bt!==ot.lane?(Re&bt)===bt:(Va&bt)===bt){var ct=ot.revertLane;if(ct===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),bt===ls&&(yt=!0);else if((Va&ct)===ct){ot=ot.next,ct===ls&&(yt=!0);continue}else bt={lane:0,revertLane:ot.revertLane,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},k===null?(U=k=bt,b=m):k=k.next=bt,Se.lanes|=ct,ja|=ct;bt=ot.action,Nr&&s(m,bt),m=ot.hasEagerState?ot.eagerState:s(m,bt)}else ct={lane:bt,revertLane:ot.revertLane,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},k===null?(U=k=ct,b=m):k=k.next=ct,Se.lanes|=bt,ja|=bt;ot=ot.next}while(ot!==null&&ot!==i);if(k===null?b=m:k.next=U,!ii(m,n.memoizedState)&&(An=!0,yt&&(s=cs,s!==null)))throw s;n.memoizedState=m,n.baseState=b,n.baseQueue=k,l.lastRenderedState=m}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Of(n){var i=pn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var l=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do m=n(m,b.action),b=b.next;while(b!==h);ii(m,i.memoizedState)||(An=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function eg(n,i,s){var l=Se,h=pn(),m=ze;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!ii((ke||h).memoizedState,s);b&&(h.memoizedState=s,An=!0),h=h.queue;var U=ag.bind(null,l,h,n);if(Oo(2048,8,U,[n]),h.getSnapshot!==i||b||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,ds(9,tc(),ig.bind(null,l,h,s,i),null),Qe===null)throw Error(a(349));m||(Va&124)!==0||ng(l,i,s)}return s}function ng(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=Se.updateQueue,i===null?(i=Lf(),Se.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function ig(n,i,s,l){i.value=s,i.getSnapshot=l,rg(i)&&sg(n)}function ag(n,i,s){return s(function(){rg(i)&&sg(n)})}function rg(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!ii(n,s)}catch{return!0}}function sg(n){var i=as(n,2);i!==null&&ci(i,n,2)}function zf(n){var i=Kn();if(typeof n=="function"){var s=n;if(n=s(),Nr){Ut(!0);try{s()}finally{Ut(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},i}function og(n,i,s,l){return n.baseState=s,Pf(n,ke,typeof l=="function"?l:ua)}function gS(n,i,s,l,h){if(nc(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};N.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,lg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function lg(n,i){var s=i.action,l=i.payload,h=n.state;if(i.isTransition){var m=N.T,b={};N.T=b;try{var U=s(h,l),k=N.S;k!==null&&k(b,U),cg(n,i,U)}catch(ot){Bf(n,i,ot)}finally{N.T=m}}else try{m=s(h,l),cg(n,i,m)}catch(ot){Bf(n,i,ot)}}function cg(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){ug(n,i,l)},function(l){return Bf(n,i,l)}):ug(n,i,s)}function ug(n,i,s){i.status="fulfilled",i.value=s,fg(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,lg(n,s)))}function Bf(n,i,s){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,fg(i),i=i.next;while(i!==l)}n.action=null}function fg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function hg(n,i){return i}function dg(n,i){if(ze){var s=Qe.formState;if(s!==null){t:{var l=Se;if(ze){if(on){e:{for(var h=on,m=Wi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ni(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){on=Ni(h.nextSibling),l=h.data==="F!";break t}}Cr(l)}l=!1}l&&(i=s[0])}}return s=Kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hg,lastRenderedState:i},s.queue=l,s=Lg.bind(null,Se,l),l.dispatch=s,l=zf(!1),m=Gf.bind(null,Se,!1,l.queue),l=Kn(),h={state:i,dispatch:null,action:n,pending:null},l.queue=h,s=gS.bind(null,Se,h,m,s),h.dispatch=s,l.memoizedState=n,[i,s,!1]}function pg(n){var i=pn();return mg(i,ke,n)}function mg(n,i,s){if(i=Pf(n,i,hg)[0],n=$l(ua)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Po(i)}catch(b){throw b===Ro?Yl:b}else l=i;i=pn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(Se.flags|=2048,ds(9,tc(),vS.bind(null,h,s),null)),[l,m,n]}function vS(n,i){n.action=i}function gg(n){var i=pn(),s=ke;if(s!==null)return mg(i,s,n);pn(),i=i.memoizedState,s=pn();var l=s.queue.dispatch;return s.memoizedState=n,[i,l,!1]}function ds(n,i,s,l){return n={tag:n,create:s,deps:l,inst:i,next:null},i=Se.updateQueue,i===null&&(i=Lf(),Se.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(l=s.next,s.next=n,n.next=l,i.lastEffect=n),n}function tc(){return{destroy:void 0,resource:void 0}}function vg(){return pn().memoizedState}function ec(n,i,s,l){var h=Kn();l=l===void 0?null:l,Se.flags|=n,h.memoizedState=ds(1|i,tc(),s,l)}function Oo(n,i,s,l){var h=pn();l=l===void 0?null:l;var m=h.memoizedState.inst;ke!==null&&l!==null&&wf(l,ke.memoizedState.deps)?h.memoizedState=ds(i,m,s,l):(Se.flags|=n,h.memoizedState=ds(1|i,m,s,l))}function _g(n,i){ec(8390656,8,n,i)}function yg(n,i){Oo(2048,8,n,i)}function xg(n,i){return Oo(4,2,n,i)}function Sg(n,i){return Oo(4,4,n,i)}function Mg(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function bg(n,i,s){s=s!=null?s.concat([n]):null,Oo(4,4,Mg.bind(null,i,n),s)}function If(){}function Eg(n,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&wf(i,l[1])?l[0]:(s.memoizedState=[n,i],n)}function Tg(n,i){var s=pn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&wf(i,l[1]))return l[0];if(l=n(),Nr){Ut(!0);try{n()}finally{Ut(!1)}}return s.memoizedState=[l,i],l}function Ff(n,i,s){return s===void 0||(Va&1073741824)!==0?n.memoizedState=i:(n.memoizedState=s,n=R0(),Se.lanes|=n,ja|=n,s)}function Ag(n,i,s,l){return ii(s,i)?s:us.current!==null?(n=Ff(n,s,l),ii(n,i)||(An=!0),n):(Va&42)===0?(An=!0,n.memoizedState=s):(n=R0(),Se.lanes|=n,ja|=n,i)}function wg(n,i,s,l,h){var m=X.p;X.p=m!==0&&8>m?m:8;var b=N.T,U={};N.T=U,Gf(n,!1,i,s);try{var k=h(),ot=N.S;if(ot!==null&&ot(U,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var yt=dS(k,l);zo(n,i,yt,li(n))}else zo(n,i,l,li(n))}catch(bt){zo(n,i,{then:function(){},status:"rejected",reason:bt},li())}finally{X.p=m,N.T=b}}function _S(){}function Hf(n,i,s,l){if(n.tag!==5)throw Error(a(476));var h=Rg(n).queue;wg(n,h,i,W,s===null?_S:function(){return Cg(n),s(l)})}function Rg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:W},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Cg(n){var i=Rg(n).next.queue;zo(n,i,{},li())}function Vf(){return zn(tl)}function Dg(){return pn().memoizedState}function Ug(){return pn().memoizedState}function yS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=li();n=Fa(s);var l=Ha(i,n,s);l!==null&&(ci(l,i,s),Do(l,i,s)),i={cache:vf()},n.payload=i;return}i=i.return}}function xS(n,i,s){var l=li();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},nc(n)?Ng(i,s):(s=of(n,i,s,l),s!==null&&(ci(s,n,l),Pg(s,i,l)))}function Lg(n,i,s){var l=li();zo(n,i,s,l)}function zo(n,i,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(nc(n))Ng(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,U=m(b,s);if(h.hasEagerState=!0,h.eagerState=U,ii(U,b))return Fl(n,i,h,0),Qe===null&&Il(),!1}catch{}if(s=of(n,i,h,l),s!==null)return ci(s,n,l),Pg(s,i,l),!0}return!1}function Gf(n,i,s,l){if(l={lane:2,revertLane:xh(),action:l,hasEagerState:!1,eagerState:null,next:null},nc(n)){if(i)throw Error(a(479))}else i=of(n,s,l,2),i!==null&&ci(i,n,2)}function nc(n){var i=n.alternate;return n===Se||i!==null&&i===Se}function Ng(n,i){fs=Kl=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function Pg(n,i,s){if((s&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,ue(n,s)}}var ic={readContext:zn,use:Jl,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un},Og={readContext:zn,use:Jl,useCallback:function(n,i){return Kn().memoizedState=[n,i===void 0?null:i],n},useContext:zn,useEffect:_g,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,ec(4194308,4,Mg.bind(null,i,n),s)},useLayoutEffect:function(n,i){return ec(4194308,4,n,i)},useInsertionEffect:function(n,i){ec(4,2,n,i)},useMemo:function(n,i){var s=Kn();i=i===void 0?null:i;var l=n();if(Nr){Ut(!0);try{n()}finally{Ut(!1)}}return s.memoizedState=[l,i],l},useReducer:function(n,i,s){var l=Kn();if(s!==void 0){var h=s(i);if(Nr){Ut(!0);try{s(i)}finally{Ut(!1)}}}else h=i;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=xS.bind(null,Se,n),[l.memoizedState,n]},useRef:function(n){var i=Kn();return n={current:n},i.memoizedState=n},useState:function(n){n=zf(n);var i=n.queue,s=Lg.bind(null,Se,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:If,useDeferredValue:function(n,i){var s=Kn();return Ff(s,n,i)},useTransition:function(){var n=zf(!1);return n=wg.bind(null,Se,n.queue,!0,!1),Kn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var l=Se,h=Kn();if(ze){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Qe===null)throw Error(a(349));(Re&124)!==0||ng(l,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,_g(ag.bind(null,l,m,n),[n]),l.flags|=2048,ds(9,tc(),ig.bind(null,l,m,s,i),null),s},useId:function(){var n=Kn(),i=Qe.identifierPrefix;if(ze){var s=oa,l=sa;s=(l&~(1<<32-Lt(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Ql++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=pS++,i="«"+i+"r"+s.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Vf,useFormState:dg,useActionState:dg,useOptimistic:function(n){var i=Kn();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Gf.bind(null,Se,!0,s),s.dispatch=i,[n,i]},useMemoCache:Nf,useCacheRefresh:function(){return Kn().memoizedState=yS.bind(null,Se)}},zg={readContext:zn,use:Jl,useCallback:Eg,useContext:zn,useEffect:yg,useImperativeHandle:bg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:Tg,useReducer:$l,useRef:vg,useState:function(){return $l(ua)},useDebugValue:If,useDeferredValue:function(n,i){var s=pn();return Ag(s,ke.memoizedState,n,i)},useTransition:function(){var n=$l(ua)[0],i=pn().memoizedState;return[typeof n=="boolean"?n:Po(n),i]},useSyncExternalStore:eg,useId:Dg,useHostTransitionStatus:Vf,useFormState:pg,useActionState:pg,useOptimistic:function(n,i){var s=pn();return og(s,ke,n,i)},useMemoCache:Nf,useCacheRefresh:Ug},SS={readContext:zn,use:Jl,useCallback:Eg,useContext:zn,useEffect:yg,useImperativeHandle:bg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:Tg,useReducer:Of,useRef:vg,useState:function(){return Of(ua)},useDebugValue:If,useDeferredValue:function(n,i){var s=pn();return ke===null?Ff(s,n,i):Ag(s,ke.memoizedState,n,i)},useTransition:function(){var n=Of(ua)[0],i=pn().memoizedState;return[typeof n=="boolean"?n:Po(n),i]},useSyncExternalStore:eg,useId:Dg,useHostTransitionStatus:Vf,useFormState:gg,useActionState:gg,useOptimistic:function(n,i){var s=pn();return ke!==null?og(s,ke,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:Ug},ps=null,Bo=0;function ac(n){var i=Bo;return Bo+=1,ps===null&&(ps=[]),Ym(ps,n,i)}function Io(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function rc(n,i){throw i.$$typeof===_?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Bg(n){var i=n._init;return i(n._payload)}function Ig(n){function i(tt,Y){if(n){var st=tt.deletions;st===null?(tt.deletions=[Y],tt.flags|=16):st.push(Y)}}function s(tt,Y){if(!n)return null;for(;Y!==null;)i(tt,Y),Y=Y.sibling;return null}function l(tt){for(var Y=new Map;tt!==null;)tt.key!==null?Y.set(tt.key,tt):Y.set(tt.index,tt),tt=tt.sibling;return Y}function h(tt,Y){return tt=ra(tt,Y),tt.index=0,tt.sibling=null,tt}function m(tt,Y,st){return tt.index=st,n?(st=tt.alternate,st!==null?(st=st.index,st<Y?(tt.flags|=67108866,Y):st):(tt.flags|=67108866,Y)):(tt.flags|=1048576,Y)}function b(tt){return n&&tt.alternate===null&&(tt.flags|=67108866),tt}function U(tt,Y,st,xt){return Y===null||Y.tag!==6?(Y=cf(st,tt.mode,xt),Y.return=tt,Y):(Y=h(Y,st),Y.return=tt,Y)}function k(tt,Y,st,xt){var Xt=st.type;return Xt===M?yt(tt,Y,st.props.children,xt,st.key):Y!==null&&(Y.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===I&&Bg(Xt)===Y.type)?(Y=h(Y,st.props),Io(Y,st),Y.return=tt,Y):(Y=Vl(st.type,st.key,st.props,null,tt.mode,xt),Io(Y,st),Y.return=tt,Y)}function ot(tt,Y,st,xt){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==st.containerInfo||Y.stateNode.implementation!==st.implementation?(Y=uf(st,tt.mode,xt),Y.return=tt,Y):(Y=h(Y,st.children||[]),Y.return=tt,Y)}function yt(tt,Y,st,xt,Xt){return Y===null||Y.tag!==7?(Y=Tr(st,tt.mode,xt,Xt),Y.return=tt,Y):(Y=h(Y,st),Y.return=tt,Y)}function bt(tt,Y,st){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=cf(""+Y,tt.mode,st),Y.return=tt,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return st=Vl(Y.type,Y.key,Y.props,null,tt.mode,st),Io(st,Y),st.return=tt,st;case y:return Y=uf(Y,tt.mode,st),Y.return=tt,Y;case I:var xt=Y._init;return Y=xt(Y._payload),bt(tt,Y,st)}if(rt(Y)||Z(Y))return Y=Tr(Y,tt.mode,st,null),Y.return=tt,Y;if(typeof Y.then=="function")return bt(tt,ac(Y),st);if(Y.$$typeof===w)return bt(tt,Xl(tt,Y),st);rc(tt,Y)}return null}function ct(tt,Y,st,xt){var Xt=Y!==null?Y.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return Xt!==null?null:U(tt,Y,""+st,xt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case v:return st.key===Xt?k(tt,Y,st,xt):null;case y:return st.key===Xt?ot(tt,Y,st,xt):null;case I:return Xt=st._init,st=Xt(st._payload),ct(tt,Y,st,xt)}if(rt(st)||Z(st))return Xt!==null?null:yt(tt,Y,st,xt,null);if(typeof st.then=="function")return ct(tt,Y,ac(st),xt);if(st.$$typeof===w)return ct(tt,Y,Xl(tt,st),xt);rc(tt,st)}return null}function ut(tt,Y,st,xt,Xt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return tt=tt.get(st)||null,U(Y,tt,""+xt,Xt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case v:return tt=tt.get(xt.key===null?st:xt.key)||null,k(Y,tt,xt,Xt);case y:return tt=tt.get(xt.key===null?st:xt.key)||null,ot(Y,tt,xt,Xt);case I:var be=xt._init;return xt=be(xt._payload),ut(tt,Y,st,xt,Xt)}if(rt(xt)||Z(xt))return tt=tt.get(st)||null,yt(Y,tt,xt,Xt,null);if(typeof xt.then=="function")return ut(tt,Y,st,ac(xt),Xt);if(xt.$$typeof===w)return ut(tt,Y,st,Xl(Y,xt),Xt);rc(Y,xt)}return null}function le(tt,Y,st,xt){for(var Xt=null,be=null,Jt=Y,oe=Y=0,Rn=null;Jt!==null&&oe<st.length;oe++){Jt.index>oe?(Rn=Jt,Jt=null):Rn=Jt.sibling;var Oe=ct(tt,Jt,st[oe],xt);if(Oe===null){Jt===null&&(Jt=Rn);break}n&&Jt&&Oe.alternate===null&&i(tt,Jt),Y=m(Oe,Y,oe),be===null?Xt=Oe:be.sibling=Oe,be=Oe,Jt=Rn}if(oe===st.length)return s(tt,Jt),ze&&wr(tt,oe),Xt;if(Jt===null){for(;oe<st.length;oe++)Jt=bt(tt,st[oe],xt),Jt!==null&&(Y=m(Jt,Y,oe),be===null?Xt=Jt:be.sibling=Jt,be=Jt);return ze&&wr(tt,oe),Xt}for(Jt=l(Jt);oe<st.length;oe++)Rn=ut(Jt,tt,oe,st[oe],xt),Rn!==null&&(n&&Rn.alternate!==null&&Jt.delete(Rn.key===null?oe:Rn.key),Y=m(Rn,Y,oe),be===null?Xt=Rn:be.sibling=Rn,be=Rn);return n&&Jt.forEach(function(ir){return i(tt,ir)}),ze&&wr(tt,oe),Xt}function re(tt,Y,st,xt){if(st==null)throw Error(a(151));for(var Xt=null,be=null,Jt=Y,oe=Y=0,Rn=null,Oe=st.next();Jt!==null&&!Oe.done;oe++,Oe=st.next()){Jt.index>oe?(Rn=Jt,Jt=null):Rn=Jt.sibling;var ir=ct(tt,Jt,Oe.value,xt);if(ir===null){Jt===null&&(Jt=Rn);break}n&&Jt&&ir.alternate===null&&i(tt,Jt),Y=m(ir,Y,oe),be===null?Xt=ir:be.sibling=ir,be=ir,Jt=Rn}if(Oe.done)return s(tt,Jt),ze&&wr(tt,oe),Xt;if(Jt===null){for(;!Oe.done;oe++,Oe=st.next())Oe=bt(tt,Oe.value,xt),Oe!==null&&(Y=m(Oe,Y,oe),be===null?Xt=Oe:be.sibling=Oe,be=Oe);return ze&&wr(tt,oe),Xt}for(Jt=l(Jt);!Oe.done;oe++,Oe=st.next())Oe=ut(Jt,tt,oe,Oe.value,xt),Oe!==null&&(n&&Oe.alternate!==null&&Jt.delete(Oe.key===null?oe:Oe.key),Y=m(Oe,Y,oe),be===null?Xt=Oe:be.sibling=Oe,be=Oe);return n&&Jt.forEach(function(MM){return i(tt,MM)}),ze&&wr(tt,oe),Xt}function Xe(tt,Y,st,xt){if(typeof st=="object"&&st!==null&&st.type===M&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case v:t:{for(var Xt=st.key;Y!==null;){if(Y.key===Xt){if(Xt=st.type,Xt===M){if(Y.tag===7){s(tt,Y.sibling),xt=h(Y,st.props.children),xt.return=tt,tt=xt;break t}}else if(Y.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===I&&Bg(Xt)===Y.type){s(tt,Y.sibling),xt=h(Y,st.props),Io(xt,st),xt.return=tt,tt=xt;break t}s(tt,Y);break}else i(tt,Y);Y=Y.sibling}st.type===M?(xt=Tr(st.props.children,tt.mode,xt,st.key),xt.return=tt,tt=xt):(xt=Vl(st.type,st.key,st.props,null,tt.mode,xt),Io(xt,st),xt.return=tt,tt=xt)}return b(tt);case y:t:{for(Xt=st.key;Y!==null;){if(Y.key===Xt)if(Y.tag===4&&Y.stateNode.containerInfo===st.containerInfo&&Y.stateNode.implementation===st.implementation){s(tt,Y.sibling),xt=h(Y,st.children||[]),xt.return=tt,tt=xt;break t}else{s(tt,Y);break}else i(tt,Y);Y=Y.sibling}xt=uf(st,tt.mode,xt),xt.return=tt,tt=xt}return b(tt);case I:return Xt=st._init,st=Xt(st._payload),Xe(tt,Y,st,xt)}if(rt(st))return le(tt,Y,st,xt);if(Z(st)){if(Xt=Z(st),typeof Xt!="function")throw Error(a(150));return st=Xt.call(st),re(tt,Y,st,xt)}if(typeof st.then=="function")return Xe(tt,Y,ac(st),xt);if(st.$$typeof===w)return Xe(tt,Y,Xl(tt,st),xt);rc(tt,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,Y!==null&&Y.tag===6?(s(tt,Y.sibling),xt=h(Y,st),xt.return=tt,tt=xt):(s(tt,Y),xt=cf(st,tt.mode,xt),xt.return=tt,tt=xt),b(tt)):s(tt,Y)}return function(tt,Y,st,xt){try{Bo=0;var Xt=Xe(tt,Y,st,xt);return ps=null,Xt}catch(Jt){if(Jt===Ro||Jt===Yl)throw Jt;var be=ai(29,Jt,null,tt.mode);return be.lanes=xt,be.return=tt,be}}}var ms=Ig(!0),Fg=Ig(!1),Mi=nt(null),Xi=null;function Ga(n){var i=n.alternate;pt(xn,xn.current&1),pt(Mi,n),Xi===null&&(i===null||us.current!==null||i.memoizedState!==null)&&(Xi=n)}function Hg(n){if(n.tag===22){if(pt(xn,xn.current),pt(Mi,n),Xi===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Xi=n)}}else ka()}function ka(){pt(xn,xn.current),pt(Mi,Mi.current)}function fa(n){gt(Mi),Xi===n&&(Xi=null),gt(xn)}var xn=nt(0);function sc(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Lh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function kf(n,i,s,l){i=n.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Wf={enqueueSetState:function(n,i,s){n=n._reactInternals;var l=li(),h=Fa(l);h.payload=i,s!=null&&(h.callback=s),i=Ha(n,h,l),i!==null&&(ci(i,n,l),Do(i,n,l))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var l=li(),h=Fa(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Ha(n,h,l),i!==null&&(ci(i,n,l),Do(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=li(),l=Fa(s);l.tag=2,i!=null&&(l.callback=i),i=Ha(n,l,s),i!==null&&(ci(i,n,s),Do(i,n,s))}};function Vg(n,i,s,l,h,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!xo(s,l)||!xo(h,m):!0}function Gg(n,i,s,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==n&&Wf.enqueueReplaceState(i,i.state,null)}function Pr(n,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(n=n.defaultProps){s===i&&(s=g({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var oc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function kg(n){oc(n)}function Wg(n){console.error(n)}function Xg(n){oc(n)}function lc(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function qg(n,i,s){try{var l=n.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Xf(n,i,s){return s=Fa(s),s.tag=3,s.payload={element:null},s.callback=function(){lc(n,i)},s}function Yg(n){return n=Fa(n),n.tag=3,n}function jg(n,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;n.payload=function(){return h(m)},n.callback=function(){qg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){qg(i,s,l),typeof h!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var U=l.stack;this.componentDidCatch(l.value,{componentStack:U!==null?U:""})})}function MS(n,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&To(i,s,h,!0),s=Mi.current,s!==null){switch(s.tag){case 13:return Xi===null?mh():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===xf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),vh(n,l,h)),!1;case 22:return s.flags|=65536,l===xf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),vh(n,l,h)),!1}throw Error(a(435,s.tag))}return vh(n,l,h),mh(),!1}if(ze)return i=Mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==df&&(n=Error(a(422),{cause:l}),Eo(_i(n,s)))):(l!==df&&(i=Error(a(423),{cause:l}),Eo(_i(i,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=_i(l,s),h=Xf(n.stateNode,l,h),bf(n,h),ln!==4&&(ln=2)),!1;var m=Error(a(520),{cause:l});if(m=_i(m,s),Xo===null?Xo=[m]:Xo.push(m),ln!==4&&(ln=2),i===null)return!0;l=_i(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=Xf(s.stateNode,l,n),bf(s,n),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Za===null||!Za.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Yg(h),jg(h,n,s,l),bf(s,h),!1}s=s.return}while(s!==null);return!1}var Zg=Error(a(461)),An=!1;function Un(n,i,s,l){i.child=n===null?Fg(i,null,s,l):ms(i,n.child,s,l)}function Kg(n,i,s,l,h){s=s.render;var m=i.ref;if("ref"in l){var b={};for(var U in l)U!=="ref"&&(b[U]=l[U])}else b=l;return Ur(i),l=Rf(n,i,s,b,m,h),U=Cf(),n!==null&&!An?(Df(n,i,h),ha(n,i,h)):(ze&&U&&ff(i),i.flags|=1,Un(n,i,l,h),i.child)}function Qg(n,i,s,l,h){if(n===null){var m=s.type;return typeof m=="function"&&!lf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Jg(n,i,m,l,h)):(n=Vl(s.type,null,l,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!$f(n,h)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:xo,s(b,l)&&n.ref===i.ref)return ha(n,i,h)}return i.flags|=1,n=ra(m,l),n.ref=i.ref,n.return=i,i.child=n}function Jg(n,i,s,l,h){if(n!==null){var m=n.memoizedProps;if(xo(m,l)&&n.ref===i.ref)if(An=!1,i.pendingProps=l=m,$f(n,h))(n.flags&131072)!==0&&(An=!0);else return i.lanes=n.lanes,ha(n,i,h)}return qf(n,i,s,l,h)}function $g(n,i,s){var l=i.pendingProps,h=l.children,m=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,n!==null){for(h=i.child=n.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return t0(n,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&ql(i,m!==null?m.cachePool:null),m!==null?Jm(i,m):Tf(),Hg(i);else return i.lanes=i.childLanes=536870912,t0(n,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(ql(i,m.cachePool),Jm(i,m),ka(),i.memoizedState=null):(n!==null&&ql(i,null),Tf(),ka());return Un(n,i,h,s),i.child}function t0(n,i,s,l){var h=yf();return h=h===null?null:{parent:yn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},n!==null&&ql(i,null),Tf(),Hg(i),n!==null&&To(n,i,l,!0),null}function cc(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function qf(n,i,s,l,h){return Ur(i),s=Rf(n,i,s,l,void 0,h),l=Cf(),n!==null&&!An?(Df(n,i,h),ha(n,i,h)):(ze&&l&&ff(i),i.flags|=1,Un(n,i,s,h),i.child)}function e0(n,i,s,l,h,m){return Ur(i),i.updateQueue=null,s=tg(i,l,s,h),$m(n),l=Cf(),n!==null&&!An?(Df(n,i,m),ha(n,i,m)):(ze&&l&&ff(i),i.flags|=1,Un(n,i,s,m),i.child)}function n0(n,i,s,l,h){if(Ur(i),i.stateNode===null){var m=rs,b=s.contextType;typeof b=="object"&&b!==null&&(m=zn(b)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Wf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Sf(i),b=s.contextType,m.context=typeof b=="object"&&b!==null?zn(b):rs,m.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(kf(i,s,b,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Wf.enqueueReplaceState(m,m.state,null),Lo(i,l,m,h),Uo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){m=i.stateNode;var U=i.memoizedProps,k=Pr(s,U);m.props=k;var ot=m.context,yt=s.contextType;b=rs,typeof yt=="object"&&yt!==null&&(b=zn(yt));var bt=s.getDerivedStateFromProps;yt=typeof bt=="function"||typeof m.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,yt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(U||ot!==b)&&Gg(i,m,l,b),Ia=!1;var ct=i.memoizedState;m.state=ct,Lo(i,l,m,h),Uo(),ot=i.memoizedState,U||ct!==ot||Ia?(typeof bt=="function"&&(kf(i,s,bt,l),ot=i.memoizedState),(k=Ia||Vg(i,s,k,l,ct,ot,b))?(yt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ot),m.props=l,m.state=ot,m.context=b,l=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Mf(n,i),b=i.memoizedProps,yt=Pr(s,b),m.props=yt,bt=i.pendingProps,ct=m.context,ot=s.contextType,k=rs,typeof ot=="object"&&ot!==null&&(k=zn(ot)),U=s.getDerivedStateFromProps,(ot=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==bt||ct!==k)&&Gg(i,m,l,k),Ia=!1,ct=i.memoizedState,m.state=ct,Lo(i,l,m,h),Uo();var ut=i.memoizedState;b!==bt||ct!==ut||Ia||n!==null&&n.dependencies!==null&&Wl(n.dependencies)?(typeof U=="function"&&(kf(i,s,U,l),ut=i.memoizedState),(yt=Ia||Vg(i,s,yt,l,ct,ut,k)||n!==null&&n.dependencies!==null&&Wl(n.dependencies))?(ot||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ut,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ut,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&ct===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&ct===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ut),m.props=l,m.state=ut,m.context=k,l=yt):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&ct===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&ct===n.memoizedState||(i.flags|=1024),l=!1)}return m=l,cc(n,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&l?(i.child=ms(i,n.child,null,h),i.child=ms(i,null,s,h)):Un(n,i,s,h),i.memoizedState=m.state,n=i.child):n=ha(n,i,h),n}function i0(n,i,s,l){return bo(),i.flags|=256,Un(n,i,s,l),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(n){return{baseLanes:n,cachePool:Wm()}}function Zf(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=bi),n}function a0(n,i,s){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(xn.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,n===null){if(ze){if(h?Ga(i):ka(),ze){var U=on,k;if(k=U){t:{for(k=U,U=Wi;k.nodeType!==8;){if(!U){U=null;break t}if(k=Ni(k.nextSibling),k===null){U=null;break t}}U=k}U!==null?(i.memoizedState={dehydrated:U,treeContext:Ar!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},k=ai(18,null,null,0),k.stateNode=U,k.return=i,i.child=k,Wn=i,on=null,k=!0):k=!1}k||Cr(i)}if(U=i.memoizedState,U!==null&&(U=U.dehydrated,U!==null))return Lh(U)?i.lanes=32:i.lanes=536870912,null;fa(i)}return U=l.children,l=l.fallback,h?(ka(),h=i.mode,U=uc({mode:"hidden",children:U},h),l=Tr(l,h,s,null),U.return=i,l.return=i,U.sibling=l,i.child=U,h=i.child,h.memoizedState=jf(s),h.childLanes=Zf(n,b,s),i.memoizedState=Yf,l):(Ga(i),Kf(i,U))}if(k=n.memoizedState,k!==null&&(U=k.dehydrated,U!==null)){if(m)i.flags&256?(Ga(i),i.flags&=-257,i=Qf(n,i,s)):i.memoizedState!==null?(ka(),i.child=n.child,i.flags|=128,i=null):(ka(),h=l.fallback,U=i.mode,l=uc({mode:"visible",children:l.children},U),h=Tr(h,U,s,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,ms(i,n.child,null,s),l=i.child,l.memoizedState=jf(s),l.childLanes=Zf(n,b,s),i.memoizedState=Yf,i=h);else if(Ga(i),Lh(U)){if(b=U.nextSibling&&U.nextSibling.dataset,b)var ot=b.dgst;b=ot,l=Error(a(419)),l.stack="",l.digest=b,Eo({value:l,source:null,stack:null}),i=Qf(n,i,s)}else if(An||To(n,i,s,!1),b=(s&n.childLanes)!==0,An||b){if(b=Qe,b!==null&&(l=s&-s,l=(l&42)!==0?1:Me(l),l=(l&(b.suspendedLanes|s))!==0?0:l,l!==0&&l!==k.retryLane))throw k.retryLane=l,as(n,l),ci(b,n,l),Zg;U.data==="$?"||mh(),i=Qf(n,i,s)}else U.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=k.treeContext,on=Ni(U.nextSibling),Wn=i,ze=!0,Rr=null,Wi=!1,n!==null&&(xi[Si++]=sa,xi[Si++]=oa,xi[Si++]=Ar,sa=n.id,oa=n.overflow,Ar=i),i=Kf(i,l.children),i.flags|=4096);return i}return h?(ka(),h=l.fallback,U=i.mode,k=n.child,ot=k.sibling,l=ra(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,ot!==null?h=ra(ot,h):(h=Tr(h,U,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,U=n.child.memoizedState,U===null?U=jf(s):(k=U.cachePool,k!==null?(ot=yn._currentValue,k=k.parent!==ot?{parent:ot,pool:ot}:k):k=Wm(),U={baseLanes:U.baseLanes|s,cachePool:k}),h.memoizedState=U,h.childLanes=Zf(n,b,s),i.memoizedState=Yf,l):(Ga(i),s=n.child,n=s.sibling,s=ra(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,n!==null&&(b=i.deletions,b===null?(i.deletions=[n],i.flags|=16):b.push(n)),i.child=s,i.memoizedState=null,s)}function Kf(n,i){return i=uc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function uc(n,i){return n=ai(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Qf(n,i,s){return ms(i,n.child,null,s),n=Kf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function r0(n,i,s){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),mf(n.return,i,s)}function Jf(n,i,s,l,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=h)}function s0(n,i,s){var l=i.pendingProps,h=l.revealOrder,m=l.tail;if(Un(n,i,l.children,s),l=xn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&r0(n,s,i);else if(n.tag===19)r0(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(pt(xn,l),h){case"forwards":for(s=i.child,h=null;s!==null;)n=s.alternate,n!==null&&sc(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Jf(i,!1,h,s,m);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&sc(n)===null){i.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Jf(i,!0,s,null,m);break;case"together":Jf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ha(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),ja|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(To(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=ra(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=ra(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function $f(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Wl(n)))}function bS(n,i,s){switch(i.tag){case 3:Mt(i,i.stateNode.containerInfo),Ba(i,yn,n.memoizedState.cache),bo();break;case 27:case 5:$t(i);break;case 4:Mt(i,i.stateNode.containerInfo);break;case 10:Ba(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ga(i),i.flags|=128,null):(s&i.child.childLanes)!==0?a0(n,i,s):(Ga(i),n=ha(n,i,s),n!==null?n.sibling:null);Ga(i);break;case 19:var h=(n.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(To(n,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return s0(n,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),pt(xn,xn.current),l)break;return null;case 22:case 23:return i.lanes=0,$g(n,i,s);case 24:Ba(i,yn,n.memoizedState.cache)}return ha(n,i,s)}function o0(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)An=!0;else{if(!$f(n,s)&&(i.flags&128)===0)return An=!1,bS(n,i,s);An=(n.flags&131072)!==0}else An=!1,ze&&(i.flags&1048576)!==0&&Bm(i,kl,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")lf(l)?(n=Pr(l,n),i.tag=1,i=n0(null,i,l,n,s)):(i.tag=0,i=qf(null,i,l,n,s));else{if(l!=null){if(h=l.$$typeof,h===A){i.tag=11,i=Kg(null,i,l,n,s);break t}else if(h===z){i.tag=14,i=Qg(null,i,l,n,s);break t}}throw i=et(l)||l,Error(a(306,i,""))}}return i;case 0:return qf(n,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=Pr(l,i.pendingProps),n0(n,i,l,h,s);case 3:t:{if(Mt(i,i.stateNode.containerInfo),n===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,Mf(n,i),Lo(i,l,null,s);var b=i.memoizedState;if(l=b.cache,Ba(i,yn,l),l!==m.cache&&gf(i,[yn],s,!0),Uo(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=i0(n,i,l,s);break t}else if(l!==h){h=_i(Error(a(424)),i),Eo(h),i=i0(n,i,l,s);break t}else for(n=i.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,on=Ni(n.firstChild),Wn=i,ze=!0,Rr=null,Wi=!0,s=Fg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(bo(),l===h){i=ha(n,i,s);break t}Un(n,i,l,s)}i=i.child}return i;case 26:return cc(n,i),n===null?(s=fv(i.type,null,i.pendingProps,null))?i.memoizedState=s:ze||(s=i.type,n=i.pendingProps,l=Ec(vt.current).createElement(s),l[$e]=i,l[vn]=n,Nn(l,s,n),jt(l),i.stateNode=l):i.memoizedState=fv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return $t(i),n===null&&ze&&(l=i.stateNode=lv(i.type,i.pendingProps,vt.current),Wn=i,Wi=!0,h=on,Ja(i.type)?(Nh=h,on=Ni(l.firstChild)):on=h),Un(n,i,i.pendingProps.children,s),cc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&ze&&((h=l=on)&&(l=QS(l,i.type,i.pendingProps,Wi),l!==null?(i.stateNode=l,Wn=i,on=Ni(l.firstChild),Wi=!1,h=!0):h=!1),h||Cr(i)),$t(i),h=i.type,m=i.pendingProps,b=n!==null?n.memoizedProps:null,l=m.children,Ch(h,m)?l=null:b!==null&&Ch(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=Rf(n,i,mS,null,null,s),tl._currentValue=h),cc(n,i),Un(n,i,l,s),i.child;case 6:return n===null&&ze&&((n=s=on)&&(s=JS(s,i.pendingProps,Wi),s!==null?(i.stateNode=s,Wn=i,on=null,n=!0):n=!1),n||Cr(i)),null;case 13:return a0(n,i,s);case 4:return Mt(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=ms(i,null,l,s):Un(n,i,l,s),i.child;case 11:return Kg(n,i,i.type,i.pendingProps,s);case 7:return Un(n,i,i.pendingProps,s),i.child;case 8:return Un(n,i,i.pendingProps.children,s),i.child;case 12:return Un(n,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ba(i,i.type,l.value),Un(n,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ur(i),h=zn(h),l=l(h),i.flags|=1,Un(n,i,l,s),i.child;case 14:return Qg(n,i,i.type,i.pendingProps,s);case 15:return Jg(n,i,i.type,i.pendingProps,s);case 19:return s0(n,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},n===null?(s=uc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ra(n.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return $g(n,i,s);case 24:return Ur(i),l=zn(yn),n===null?(h=yf(),h===null&&(h=Qe,m=vf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:l,cache:h},Sf(i),Ba(i,yn,h)):((n.lanes&s)!==0&&(Mf(n,i),Lo(i,null,null,s),Uo()),h=n.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ba(i,yn,l)):(l=m.cache,Ba(i,yn,l),l!==h.cache&&gf(i,[yn],s,!0))),Un(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function da(n){n.flags|=4}function l0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!gv(i)){if(i=Mi.current,i!==null&&((Re&4194048)===Re?Xi!==null:(Re&62914560)!==Re&&(Re&536870912)===0||i!==Xi))throw Co=xf,Xm;n.flags|=8192}}function fc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ot():536870912,n.lanes|=i,ys|=i)}function Fo(n,i){if(!ze)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function an(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,l=0;if(i)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=s,i}function ES(n,i,s){var l=i.pendingProps;switch(hf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return s=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ca(yn),Ft(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Mo(i)?da(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hm())),an(i),null;case 26:return s=i.memoizedState,n===null?(da(i),s!==null?(an(i),l0(i,s)):(an(i),i.flags&=-16777217)):s?s!==n.memoizedState?(da(i),an(i),l0(i,s)):(an(i),i.flags&=-16777217):(n.memoizedProps!==l&&da(i),an(i),i.flags&=-16777217),null;case 27:ge(i),s=vt.current;var h=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}n=$.current,Mo(i)?Im(i):(n=lv(h,l,s),i.stateNode=n,da(i))}return an(i),null;case 5:if(ge(i),s=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}if(n=$.current,Mo(i))Im(i);else{switch(h=Ec(vt.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}n[$e]=i,n[vn]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=n;t:switch(Nn(n,s,l),s){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&da(i)}}return an(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&da(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(n=vt.current,Mo(i)){if(n=i.stateNode,s=i.memoizedProps,l=null,h=Wn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[$e]=i,n=!!(n.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||ev(n.nodeValue,s)),n||Cr(i)}else n=Ec(n).createTextNode(l),n[$e]=i,i.stateNode=n}return an(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Mo(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[$e]=i}else bo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),h=!1}else h=Hm(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(fa(i),i):(fa(i),null)}if(fa(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,n=n!==null&&n.memoizedState!==null,s){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)}return s!==n&&s&&(i.child.flags|=8192),fc(i,i.updateQueue),an(i),null;case 4:return Ft(),n===null&&Eh(i.stateNode.containerInfo),an(i),null;case 10:return ca(i.type),an(i),null;case 19:if(gt(xn),h=i.memoizedState,h===null)return an(i),null;if(l=(i.flags&128)!==0,m=h.rendering,m===null)if(l)Fo(h,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=sc(n),m!==null){for(i.flags|=128,Fo(h,!1),n=m.updateQueue,i.updateQueue=n,fc(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)zm(s,n),s=s.sibling;return pt(xn,xn.current&1|2),i.child}n=n.sibling}h.tail!==null&&Kt()>pc&&(i.flags|=128,l=!0,Fo(h,!1),i.lanes=4194304)}else{if(!l)if(n=sc(m),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,fc(i,n),Fo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!ze)return an(i),null}else 2*Kt()-h.renderingStartTime>pc&&s!==536870912&&(i.flags|=128,l=!0,Fo(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(n=h.last,n!==null?n.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Kt(),i.sibling=null,n=xn.current,pt(xn,l?n&1|2:n&1),i):(an(i),null);case 22:case 23:return fa(i),Af(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),s=i.updateQueue,s!==null&&fc(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),n!==null&&gt(Lr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ca(yn),an(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function TS(n,i){switch(hf(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ca(yn),Ft(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return ge(i),null;case 13:if(fa(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));bo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return gt(xn),null;case 4:return Ft(),null;case 10:return ca(i.type),null;case 22:case 23:return fa(i),Af(),n!==null&&gt(Lr),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ca(yn),null;case 25:return null;default:return null}}function c0(n,i){switch(hf(i),i.tag){case 3:ca(yn),Ft();break;case 26:case 27:case 5:ge(i);break;case 4:Ft();break;case 13:fa(i);break;case 19:gt(xn);break;case 10:ca(i.type);break;case 22:case 23:fa(i),Af(),n!==null&&gt(Lr);break;case 24:ca(yn)}}function Ho(n,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&n)===n){l=void 0;var m=s.create,b=s.inst;l=m(),b.destroy=l}s=s.next}while(s!==h)}}catch(U){Ze(i,i.return,U)}}function Wa(n,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&n)===n){var b=l.inst,U=b.destroy;if(U!==void 0){b.destroy=void 0,h=i;var k=s,ot=U;try{ot()}catch(yt){Ze(h,k,yt)}}}l=l.next}while(l!==m)}}catch(yt){Ze(i,i.return,yt)}}function u0(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{Qm(i,s)}catch(l){Ze(n,n.return,l)}}}function f0(n,i,s){s.props=Pr(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(l){Ze(n,i,l)}}function Vo(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(h){Ze(n,i,h)}}function qi(n,i){var s=n.ref,l=n.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){Ze(n,i,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ze(n,i,h)}else s.current=null}function h0(n){var i=n.type,s=n.memoizedProps,l=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){Ze(n,n.return,h)}}function th(n,i,s){try{var l=n.stateNode;qS(l,n.type,s,i),l[vn]=i}catch(h){Ze(n,n.return,h)}}function d0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ja(n.type)||n.tag===4}function eh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||d0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ja(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nh(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=bc));else if(l!==4&&(l===27&&Ja(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(nh(n,i,s),n=n.sibling;n!==null;)nh(n,i,s),n=n.sibling}function hc(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(l!==4&&(l===27&&Ja(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(hc(n,i,s),n=n.sibling;n!==null;)hc(n,i,s),n=n.sibling}function p0(n){var i=n.stateNode,s=n.memoizedProps;try{for(var l=n.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Nn(i,l,s),i[$e]=n,i[vn]=s}catch(m){Ze(n,n.return,m)}}var pa=!1,fn=!1,ih=!1,m0=typeof WeakSet=="function"?WeakSet:Set,wn=null;function AS(n,i){if(n=n.containerInfo,wh=Dc,n=Am(n),tf(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var b=0,U=-1,k=-1,ot=0,yt=0,bt=n,ct=null;e:for(;;){for(var ut;bt!==s||h!==0&&bt.nodeType!==3||(U=b+h),bt!==m||l!==0&&bt.nodeType!==3||(k=b+l),bt.nodeType===3&&(b+=bt.nodeValue.length),(ut=bt.firstChild)!==null;)ct=bt,bt=ut;for(;;){if(bt===n)break e;if(ct===s&&++ot===h&&(U=b),ct===m&&++yt===l&&(k=b),(ut=bt.nextSibling)!==null)break;bt=ct,ct=bt.parentNode}bt=ut}s=U===-1||k===-1?null:{start:U,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Rh={focusedElem:n,selectionRange:s},Dc=!1,wn=i;wn!==null;)if(i=wn,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,wn=n;else for(;wn!==null;){switch(i=wn,m=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var le=Pr(s.type,h,s.elementType===s.type);n=l.getSnapshotBeforeUpdate(le,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(re){Ze(s,s.return,re)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)Uh(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Uh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,wn=n;break}wn=i.return}}function g0(n,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Xa(n,s),l&4&&Ho(5,s);break;case 1:if(Xa(n,s),l&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(b){Ze(s,s.return,b)}else{var h=Pr(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(h,i,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Ze(s,s.return,b)}}l&64&&u0(s),l&512&&Vo(s,s.return);break;case 3:if(Xa(n,s),l&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Qm(n,i)}catch(b){Ze(s,s.return,b)}}break;case 27:i===null&&l&4&&p0(s);case 26:case 5:Xa(n,s),i===null&&l&4&&h0(s),l&512&&Vo(s,s.return);break;case 12:Xa(n,s);break;case 13:Xa(n,s),l&4&&y0(n,s),l&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=OS.bind(null,s),$S(n,s))));break;case 22:if(l=s.memoizedState!==null||pa,!l){i=i!==null&&i.memoizedState!==null||fn,h=pa;var m=fn;pa=l,(fn=i)&&!m?qa(n,s,(s.subtreeFlags&8772)!==0):Xa(n,s),pa=h,fn=m}break;case 30:break;default:Xa(n,s)}}function v0(n){var i=n.alternate;i!==null&&(n.alternate=null,v0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ci(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var tn=null,Qn=!1;function ma(n,i,s){for(s=s.child;s!==null;)_0(n,i,s),s=s.sibling}function _0(n,i,s){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(_t,s)}catch{}switch(s.tag){case 26:fn||qi(s,i),ma(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:fn||qi(s,i);var l=tn,h=Qn;Ja(s.type)&&(tn=s.stateNode,Qn=!1),ma(n,i,s),Ko(s.stateNode),tn=l,Qn=h;break;case 5:fn||qi(s,i);case 6:if(l=tn,h=Qn,tn=null,ma(n,i,s),tn=l,Qn=h,tn!==null)if(Qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(s.stateNode)}catch(m){Ze(s,i,m)}else try{tn.removeChild(s.stateNode)}catch(m){Ze(s,i,m)}break;case 18:tn!==null&&(Qn?(n=tn,sv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),al(n)):sv(tn,s.stateNode));break;case 4:l=tn,h=Qn,tn=s.stateNode.containerInfo,Qn=!0,ma(n,i,s),tn=l,Qn=h;break;case 0:case 11:case 14:case 15:fn||Wa(2,s,i),fn||Wa(4,s,i),ma(n,i,s);break;case 1:fn||(qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&f0(s,i,l)),ma(n,i,s);break;case 21:ma(n,i,s);break;case 22:fn=(l=fn)||s.memoizedState!==null,ma(n,i,s),fn=l;break;default:ma(n,i,s)}}function y0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{al(n)}catch(s){Ze(i,i.return,s)}}function wS(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new m0),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new m0),i;default:throw Error(a(435,n.tag))}}function ah(n,i){var s=wS(n);i.forEach(function(l){var h=zS.bind(null,n,l);s.has(l)||(s.add(l),l.then(h,h))})}function ri(n,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],m=n,b=i,U=b;t:for(;U!==null;){switch(U.tag){case 27:if(Ja(U.type)){tn=U.stateNode,Qn=!1;break t}break;case 5:tn=U.stateNode,Qn=!1;break t;case 3:case 4:tn=U.stateNode.containerInfo,Qn=!0;break t}U=U.return}if(tn===null)throw Error(a(160));_0(m,b,h),tn=null,Qn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)x0(i,n),i=i.sibling}var Li=null;function x0(n,i){var s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ri(i,n),si(n),l&4&&(Wa(3,n,n.return),Ho(3,n),Wa(5,n,n.return));break;case 1:ri(i,n),si(n),l&512&&(fn||s===null||qi(s,s.return)),l&64&&pa&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Li;if(ri(i,n),si(n),l&512&&(fn||s===null||qi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=n.memoizedState,s===null)if(l===null)if(n.stateNode===null){t:{l=n.type,s=n.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Ri]||m[$e]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Nn(m,l,s),m[$e]=n,jt(m),l=m;break t;case"link":var b=pv("link","href",h).get(l+(s.href||""));if(b){for(var U=0;U<b.length;U++)if(m=b[U],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(U,1);break e}}m=h.createElement(l),Nn(m,l,s),h.head.appendChild(m);break;case"meta":if(b=pv("meta","content",h).get(l+(s.content||""))){for(U=0;U<b.length;U++)if(m=b[U],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(U,1);break e}}m=h.createElement(l),Nn(m,l,s),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[$e]=n,jt(m),l=m}n.stateNode=l}else mv(h,n.type,n.stateNode);else n.stateNode=dv(h,l,n.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?mv(h,n.type,n.stateNode):dv(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&th(n,n.memoizedProps,s.memoizedProps)}break;case 27:ri(i,n),si(n),l&512&&(fn||s===null||qi(s,s.return)),s!==null&&l&4&&th(n,n.memoizedProps,s.memoizedProps);break;case 5:if(ri(i,n),si(n),l&512&&(fn||s===null||qi(s,s.return)),n.flags&32){h=n.stateNode;try{Qr(h,"")}catch(ut){Ze(n,n.return,ut)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,th(n,h,s!==null?s.memoizedProps:h)),l&1024&&(ih=!0);break;case 6:if(ri(i,n),si(n),l&4){if(n.stateNode===null)throw Error(a(162));l=n.memoizedProps,s=n.stateNode;try{s.nodeValue=l}catch(ut){Ze(n,n.return,ut)}}break;case 3:if(wc=null,h=Li,Li=Tc(i.containerInfo),ri(i,n),Li=h,si(n),l&4&&s!==null&&s.memoizedState.isDehydrated)try{al(i.containerInfo)}catch(ut){Ze(n,n.return,ut)}ih&&(ih=!1,S0(n));break;case 4:l=Li,Li=Tc(n.stateNode.containerInfo),ri(i,n),si(n),Li=l;break;case 12:ri(i,n),si(n);break;case 13:ri(i,n),si(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(uh=Kt()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,ah(n,l)));break;case 22:h=n.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,ot=pa,yt=fn;if(pa=ot||h,fn=yt||k,ri(i,n),fn=yt,pa=ot,si(n),l&8192)t:for(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||k||pa||fn||Or(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(m=k.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{U=k.stateNode;var bt=k.memoizedProps.style,ct=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;U.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(ut){Ze(k,k.return,ut)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(ut){Ze(k,k.return,ut)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,ah(n,s))));break;case 19:ri(i,n),si(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,ah(n,l)));break;case 30:break;case 21:break;default:ri(i,n),si(n)}}function si(n){var i=n.flags;if(i&2){try{for(var s,l=n.return;l!==null;){if(d0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=eh(n);hc(n,m,h);break;case 5:var b=s.stateNode;s.flags&32&&(Qr(b,""),s.flags&=-33);var U=eh(n);hc(n,U,b);break;case 3:case 4:var k=s.stateNode.containerInfo,ot=eh(n);nh(n,ot,k);break;default:throw Error(a(161))}}catch(yt){Ze(n,n.return,yt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function S0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;S0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Xa(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)g0(n,i.alternate,i),i=i.sibling}function Or(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Wa(4,i,i.return),Or(i);break;case 1:qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&f0(i,i.return,s),Or(i);break;case 27:Ko(i.stateNode);case 26:case 5:qi(i,i.return),Or(i);break;case 22:i.memoizedState===null&&Or(i);break;case 30:Or(i);break;default:Or(i)}n=n.sibling}}function qa(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=n,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:qa(h,m,s),Ho(4,m);break;case 1:if(qa(h,m,s),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(ot){Ze(l,l.return,ot)}if(l=m,h=l.updateQueue,h!==null){var U=l.stateNode;try{var k=h.shared.hiddenCallbacks;if(k!==null)for(h.shared.hiddenCallbacks=null,h=0;h<k.length;h++)Km(k[h],U)}catch(ot){Ze(l,l.return,ot)}}s&&b&64&&u0(m),Vo(m,m.return);break;case 27:p0(m);case 26:case 5:qa(h,m,s),s&&l===null&&b&4&&h0(m),Vo(m,m.return);break;case 12:qa(h,m,s);break;case 13:qa(h,m,s),s&&b&4&&y0(h,m);break;case 22:m.memoizedState===null&&qa(h,m,s),Vo(m,m.return);break;case 30:break;default:qa(h,m,s)}i=i.sibling}}function rh(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Ao(s))}function sh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ao(n))}function Yi(n,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)M0(n,i,s,l),i=i.sibling}function M0(n,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Yi(n,i,s,l),h&2048&&Ho(9,i);break;case 1:Yi(n,i,s,l);break;case 3:Yi(n,i,s,l),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ao(n)));break;case 12:if(h&2048){Yi(n,i,s,l),n=i.stateNode;try{var m=i.memoizedProps,b=m.id,U=m.onPostCommit;typeof U=="function"&&U(b,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(k){Ze(i,i.return,k)}}else Yi(n,i,s,l);break;case 13:Yi(n,i,s,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Yi(n,i,s,l):Go(n,i):m._visibility&2?Yi(n,i,s,l):(m._visibility|=2,gs(n,i,s,l,(i.subtreeFlags&10256)!==0)),h&2048&&rh(b,i);break;case 24:Yi(n,i,s,l),h&2048&&sh(i.alternate,i);break;default:Yi(n,i,s,l)}}function gs(n,i,s,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=n,b=i,U=s,k=l,ot=b.flags;switch(b.tag){case 0:case 11:case 15:gs(m,b,U,k,h),Ho(8,b);break;case 23:break;case 22:var yt=b.stateNode;b.memoizedState!==null?yt._visibility&2?gs(m,b,U,k,h):Go(m,b):(yt._visibility|=2,gs(m,b,U,k,h)),h&&ot&2048&&rh(b.alternate,b);break;case 24:gs(m,b,U,k,h),h&&ot&2048&&sh(b.alternate,b);break;default:gs(m,b,U,k,h)}i=i.sibling}}function Go(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,l=i,h=l.flags;switch(l.tag){case 22:Go(s,l),h&2048&&rh(l.alternate,l);break;case 24:Go(s,l),h&2048&&sh(l.alternate,l);break;default:Go(s,l)}i=i.sibling}}var ko=8192;function vs(n){if(n.subtreeFlags&ko)for(n=n.child;n!==null;)b0(n),n=n.sibling}function b0(n){switch(n.tag){case 26:vs(n),n.flags&ko&&n.memoizedState!==null&&hM(Li,n.memoizedState,n.memoizedProps);break;case 5:vs(n);break;case 3:case 4:var i=Li;Li=Tc(n.stateNode.containerInfo),vs(n),Li=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=ko,ko=16777216,vs(n),ko=i):vs(n));break;default:vs(n)}}function E0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Wo(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];wn=l,A0(l,n)}E0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)T0(n),n=n.sibling}function T0(n){switch(n.tag){case 0:case 11:case 15:Wo(n),n.flags&2048&&Wa(9,n,n.return);break;case 3:Wo(n);break;case 12:Wo(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,dc(n)):Wo(n);break;default:Wo(n)}}function dc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];wn=l,A0(l,n)}E0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Wa(8,i,i.return),dc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,dc(i));break;default:dc(i)}n=n.sibling}}function A0(n,i){for(;wn!==null;){var s=wn;switch(s.tag){case 0:case 11:case 15:Wa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ao(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,wn=l;else t:for(s=n;wn!==null;){l=wn;var h=l.sibling,m=l.return;if(v0(l),l===s){wn=null;break t}if(h!==null){h.return=m,wn=h;break t}wn=m}}}var RS={getCacheForType:function(n){var i=zn(yn),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s}},CS=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Ee=null,Re=0,He=0,oi=null,Ya=!1,_s=!1,oh=!1,ga=0,ln=0,ja=0,zr=0,lh=0,bi=0,ys=0,Xo=null,Jn=null,ch=!1,uh=0,pc=1/0,mc=null,Za=null,Ln=0,Ka=null,xs=null,Ss=0,fh=0,hh=null,w0=null,qo=0,dh=null;function li(){if((Fe&2)!==0&&Re!==0)return Re&-Re;if(N.T!==null){var n=ls;return n!==0?n:xh()}return xe()}function R0(){bi===0&&(bi=(Re&536870912)===0||ze?K():536870912);var n=Mi.current;return n!==null&&(n.flags|=32),bi}function ci(n,i,s){(n===Qe&&(He===2||He===9)||n.cancelPendingCommit!==null)&&(Ms(n,0),Qa(n,Re,bi,!1)),ft(n,s),((Fe&2)===0||n!==Qe)&&(n===Qe&&((Fe&2)===0&&(zr|=s),ln===4&&Qa(n,Re,bi,!1)),ji(n))}function C0(n,i,s){if((Fe&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&n.expiredLanes)===0||se(n,i),h=l?LS(n,i):gh(n,i,!0),m=l;do{if(h===0){_s&&!l&&Qa(n,i,0,!1);break}else{if(s=n.current.alternate,m&&!DS(s)){h=gh(n,i,!1),m=!1;continue}if(h===2){if(m=i,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var U=n;h=Xo;var k=U.current.memoizedState.isDehydrated;if(k&&(Ms(U,b).flags|=256),b=gh(U,b,!1),b!==2){if(oh&&!k){U.errorRecoveryDisabledLanes|=m,zr|=m,h=4;break t}m=Jn,Jn=h,m!==null&&(Jn===null?Jn=m:Jn.push.apply(Jn,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){Ms(n,0),Qa(n,i,0,!0);break}t:{switch(l=n,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Qa(l,i,bi,!Ya);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=uh+300-Kt(),10<h)){if(Qa(l,i,bi,!Ya),ce(l,0,!0)!==0)break t;l.timeoutHandle=av(D0.bind(null,l,s,Jn,mc,ch,i,bi,zr,ys,Ya,m,2,-0,0),h);break t}D0(l,s,Jn,mc,ch,i,bi,zr,ys,Ya,m,0,-0,0)}}break}while(!0);ji(n)}function D0(n,i,s,l,h,m,b,U,k,ot,yt,bt,ct,ut){if(n.timeoutHandle=-1,bt=i.subtreeFlags,(bt&8192||(bt&16785408)===16785408)&&($o={stylesheets:null,count:0,unsuspend:fM},b0(i),bt=dM(),bt!==null)){n.cancelPendingCommit=bt(B0.bind(null,n,i,m,s,l,h,b,U,k,yt,1,ct,ut)),Qa(n,m,b,!ot);return}B0(n,i,m,s,l,h,b,U,k)}function DS(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],m=h.getSnapshot;h=h.value;try{if(!ii(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Qa(n,i,s,l){i&=~lh,i&=~zr,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var h=i;0<h;){var m=31-Lt(h),b=1<<m;l[m]=-1,h&=~b}s!==0&&Bt(n,s,i)}function gc(){return(Fe&6)===0?(Yo(0),!1):!0}function ph(){if(Ee!==null){if(He===0)var n=Ee.return;else n=Ee,la=Dr=null,Uf(n),ps=null,Bo=0,n=Ee;for(;n!==null;)c0(n.alternate,n),n=n.return;Ee=null}}function Ms(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,jS(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),ph(),Qe=n,Ee=s=ra(n.current,null),Re=i,He=0,oi=null,Ya=!1,_s=se(n,i),oh=!1,ys=bi=lh=zr=ja=ln=0,Jn=Xo=null,ch=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var h=31-Lt(l),m=1<<h;i|=n[h],l&=~m}return ga=i,Il(),s}function U0(n,i){Se=null,N.H=ic,i===Ro||i===Yl?(i=jm(),He=3):i===Xm?(i=jm(),He=4):He=i===Zg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,oi=i,Ee===null&&(ln=1,lc(n,_i(i,n.current)))}function L0(){var n=N.H;return N.H=ic,n===null?ic:n}function N0(){var n=N.A;return N.A=RS,n}function mh(){ln=4,Ya||(Re&4194048)!==Re&&Mi.current!==null||(_s=!0),(ja&134217727)===0&&(zr&134217727)===0||Qe===null||Qa(Qe,Re,bi,!1)}function gh(n,i,s){var l=Fe;Fe|=2;var h=L0(),m=N0();(Qe!==n||Re!==i)&&(mc=null,Ms(n,i)),i=!1;var b=ln;t:do try{if(He!==0&&Ee!==null){var U=Ee,k=oi;switch(He){case 8:ph(),b=6;break t;case 3:case 2:case 9:case 6:Mi.current===null&&(i=!0);var ot=He;if(He=0,oi=null,bs(n,U,k,ot),s&&_s){b=0;break t}break;default:ot=He,He=0,oi=null,bs(n,U,k,ot)}}US(),b=ln;break}catch(yt){U0(n,yt)}while(!0);return i&&n.shellSuspendCounter++,la=Dr=null,Fe=l,N.H=h,N.A=m,Ee===null&&(Qe=null,Re=0,Il()),b}function US(){for(;Ee!==null;)P0(Ee)}function LS(n,i){var s=Fe;Fe|=2;var l=L0(),h=N0();Qe!==n||Re!==i?(mc=null,pc=Kt()+500,Ms(n,i)):_s=se(n,i);t:do try{if(He!==0&&Ee!==null){i=Ee;var m=oi;e:switch(He){case 1:He=0,oi=null,bs(n,i,m,1);break;case 2:case 9:if(qm(m)){He=0,oi=null,O0(i);break}i=function(){He!==2&&He!==9||Qe!==n||(He=7),ji(n)},m.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:qm(m)?(He=0,oi=null,O0(i)):(He=0,oi=null,bs(n,i,m,7));break;case 5:var b=null;switch(Ee.tag){case 26:b=Ee.memoizedState;case 5:case 27:var U=Ee;if(!b||gv(b)){He=0,oi=null;var k=U.sibling;if(k!==null)Ee=k;else{var ot=U.return;ot!==null?(Ee=ot,vc(ot)):Ee=null}break e}}He=0,oi=null,bs(n,i,m,5);break;case 6:He=0,oi=null,bs(n,i,m,6);break;case 8:ph(),ln=6;break t;default:throw Error(a(462))}}NS();break}catch(yt){U0(n,yt)}while(!0);return la=Dr=null,N.H=l,N.A=h,Fe=s,Ee!==null?0:(Qe=null,Re=0,Il(),ln)}function NS(){for(;Ee!==null&&!hn();)P0(Ee)}function P0(n){var i=o0(n.alternate,n,ga);n.memoizedProps=n.pendingProps,i===null?vc(n):Ee=i}function O0(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=e0(s,i,i.pendingProps,i.type,void 0,Re);break;case 11:i=e0(s,i,i.pendingProps,i.type.render,i.ref,Re);break;case 5:Uf(i);default:c0(s,i),i=Ee=zm(i,ga),i=o0(s,i,ga)}n.memoizedProps=n.pendingProps,i===null?vc(n):Ee=i}function bs(n,i,s,l){la=Dr=null,Uf(i),ps=null,Bo=0;var h=i.return;try{if(MS(n,h,i,s,Re)){ln=1,lc(n,_i(s,n.current)),Ee=null;return}}catch(m){if(h!==null)throw Ee=h,m;ln=1,lc(n,_i(s,n.current)),Ee=null;return}i.flags&32768?(ze||l===1?n=!0:_s||(Re&536870912)!==0?n=!1:(Ya=n=!0,(l===2||l===9||l===3||l===6)&&(l=Mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),z0(i,n)):vc(i)}function vc(n){var i=n;do{if((i.flags&32768)!==0){z0(i,Ya);return}n=i.return;var s=ES(i.alternate,i,ga);if(s!==null){Ee=s;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=n}while(i!==null);ln===0&&(ln=5)}function z0(n,i){do{var s=TS(n.alternate,n);if(s!==null){s.flags&=32767,Ee=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){Ee=n;return}Ee=n=s}while(n!==null);ln=6,Ee=null}function B0(n,i,s,l,h,m,b,U,k){n.cancelPendingCommit=null;do _c();while(Ln!==0);if((Fe&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=sf,zt(n,s,m,b,U,k),n===Qe&&(Ee=Qe=null,Re=0),xs=i,Ka=n,Ss=s,fh=m,hh=h,w0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,BS(F,function(){return G0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,h=X.p,X.p=2,b=Fe,Fe|=4;try{AS(n,i,s)}finally{Fe=b,X.p=h,N.T=l}}Ln=1,I0(),F0(),H0()}}function I0(){if(Ln===1){Ln=0;var n=Ka,i=xs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var l=X.p;X.p=2;var h=Fe;Fe|=4;try{x0(i,n);var m=Rh,b=Am(n.containerInfo),U=m.focusedElem,k=m.selectionRange;if(b!==U&&U&&U.ownerDocument&&Tm(U.ownerDocument.documentElement,U)){if(k!==null&&tf(U)){var ot=k.start,yt=k.end;if(yt===void 0&&(yt=ot),"selectionStart"in U)U.selectionStart=ot,U.selectionEnd=Math.min(yt,U.value.length);else{var bt=U.ownerDocument||document,ct=bt&&bt.defaultView||window;if(ct.getSelection){var ut=ct.getSelection(),le=U.textContent.length,re=Math.min(k.start,le),Xe=k.end===void 0?re:Math.min(k.end,le);!ut.extend&&re>Xe&&(b=Xe,Xe=re,re=b);var tt=Em(U,re),Y=Em(U,Xe);if(tt&&Y&&(ut.rangeCount!==1||ut.anchorNode!==tt.node||ut.anchorOffset!==tt.offset||ut.focusNode!==Y.node||ut.focusOffset!==Y.offset)){var st=bt.createRange();st.setStart(tt.node,tt.offset),ut.removeAllRanges(),re>Xe?(ut.addRange(st),ut.extend(Y.node,Y.offset)):(st.setEnd(Y.node,Y.offset),ut.addRange(st))}}}}for(bt=[],ut=U;ut=ut.parentNode;)ut.nodeType===1&&bt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<bt.length;U++){var xt=bt[U];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Dc=!!wh,Rh=wh=null}finally{Fe=h,X.p=l,N.T=s}}n.current=i,Ln=2}}function F0(){if(Ln===2){Ln=0;var n=Ka,i=xs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var l=X.p;X.p=2;var h=Fe;Fe|=4;try{g0(n,i.alternate,i)}finally{Fe=h,X.p=l,N.T=s}}Ln=3}}function H0(){if(Ln===4||Ln===3){Ln=0,he();var n=Ka,i=xs,s=Ss,l=w0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,xs=Ka=null,V0(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Za=null),Ge(s),i=i.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(_t,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=N.T,h=X.p,X.p=2,N.T=null;try{for(var m=n.onRecoverableError,b=0;b<l.length;b++){var U=l[b];m(U.value,{componentStack:U.stack})}}finally{N.T=i,X.p=h}}(Ss&3)!==0&&_c(),ji(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===dh?qo++:(qo=0,dh=n):qo=0,Yo(0)}}function V0(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Ao(i)))}function _c(n){return I0(),F0(),H0(),G0()}function G0(){if(Ln!==5)return!1;var n=Ka,i=fh;fh=0;var s=Ge(Ss),l=N.T,h=X.p;try{X.p=32>s?32:s,N.T=null,s=hh,hh=null;var m=Ka,b=Ss;if(Ln=0,xs=Ka=null,Ss=0,(Fe&6)!==0)throw Error(a(331));var U=Fe;if(Fe|=4,T0(m.current),M0(m,m.current,b,s),Fe=U,Yo(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{X.p=h,N.T=l,V0(n,i)}}function k0(n,i,s){i=_i(s,i),i=Xf(n.stateNode,i,2),n=Ha(n,i,2),n!==null&&(ft(n,2),ji(n))}function Ze(n,i,s){if(n.tag===3)k0(n,n,s);else for(;i!==null;){if(i.tag===3){k0(i,n,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Za===null||!Za.has(l))){n=_i(s,n),s=Yg(2),l=Ha(i,s,2),l!==null&&(jg(s,l,i,n),ft(l,2),ji(l));break}}i=i.return}}function vh(n,i,s){var l=n.pingCache;if(l===null){l=n.pingCache=new CS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(oh=!0,h.add(s),n=PS.bind(null,n,i,s),i.then(n,n))}function PS(n,i,s){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Qe===n&&(Re&s)===s&&(ln===4||ln===3&&(Re&62914560)===Re&&300>Kt()-uh?(Fe&2)===0&&Ms(n,0):lh|=s,ys===Re&&(ys=0)),ji(n)}function W0(n,i){i===0&&(i=Ot()),n=as(n,i),n!==null&&(ft(n,i),ji(n))}function OS(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),W0(n,s)}function zS(n,i){var s=0;switch(n.tag){case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),W0(n,s)}function BS(n,i){return Ae(n,i)}var yc=null,Es=null,_h=!1,xc=!1,yh=!1,Br=0;function ji(n){n!==Es&&n.next===null&&(Es===null?yc=Es=n:Es=Es.next=n),xc=!0,_h||(_h=!0,FS())}function Yo(n,i){if(!yh&&xc){yh=!0;do for(var s=!1,l=yc;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var b=l.suspendedLanes,U=l.pingedLanes;m=(1<<31-Lt(42|n)+1)-1,m&=h&~(b&~U),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,j0(l,m))}else m=Re,m=ce(l,l===Qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||se(l,m)||(s=!0,j0(l,m));l=l.next}while(s);yh=!1}}function IS(){X0()}function X0(){xc=_h=!1;var n=0;Br!==0&&(YS()&&(n=Br),Br=0);for(var i=Kt(),s=null,l=yc;l!==null;){var h=l.next,m=q0(l,i);m===0?(l.next=null,s===null?yc=h:s.next=h,h===null&&(Es=s)):(s=l,(n!==0||(m&3)!==0)&&(xc=!0)),l=h}Yo(n)}function q0(n,i){for(var s=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-Lt(m),U=1<<b,k=h[b];k===-1?((U&s)===0||(U&l)!==0)&&(h[b]=Ne(U,i)):k<=i&&(n.expiredLanes|=U),m&=~U}if(i=Qe,s=Re,s=ce(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,s===0||n===i&&(He===2||He===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&J(l),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||se(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(l!==null&&J(l),Ge(s)){case 2:case 8:s=te;break;case 32:s=F;break;case 268435456:s=lt;break;default:s=F}return l=Y0.bind(null,n),s=Ae(s,l),n.callbackPriority=i,n.callbackNode=s,i}return l!==null&&l!==null&&J(l),n.callbackPriority=2,n.callbackNode=null,2}function Y0(n,i){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(_c()&&n.callbackNode!==s)return null;var l=Re;return l=ce(n,n===Qe?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(C0(n,l,i),q0(n,Kt()),n.callbackNode!=null&&n.callbackNode===s?Y0.bind(null,n):null)}function j0(n,i){if(_c())return null;C0(n,i,!0)}function FS(){ZS(function(){(Fe&6)!==0?Ae(we,IS):X0()})}function xh(){return Br===0&&(Br=K()),Br}function Z0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ul(""+n)}function K0(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function HS(n,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var m=Z0((h[vn]||null).action),b=l.submitter;b&&(i=(i=b[vn]||null)?Z0(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var U=new Ol("action","action",null,l,h);n.push({event:U,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Br!==0){var k=b?K0(h,b):new FormData(h);Hf(s,{pending:!0,data:k,method:h.method,action:m},null,k)}}else typeof m=="function"&&(U.preventDefault(),k=b?K0(h,b):new FormData(h),Hf(s,{pending:!0,data:k,method:h.method,action:m},m,k))},currentTarget:h}]})}}for(var Sh=0;Sh<rf.length;Sh++){var Mh=rf[Sh],VS=Mh.toLowerCase(),GS=Mh[0].toUpperCase()+Mh.slice(1);Ui(VS,"on"+GS)}Ui(Cm,"onAnimationEnd"),Ui(Dm,"onAnimationIteration"),Ui(Um,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(rS,"onTransitionRun"),Ui(sS,"onTransitionStart"),Ui(oS,"onTransitionCancel"),Ui(Lm,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function Q0(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var l=n[s],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var U=l[b],k=U.instance,ot=U.currentTarget;if(U=U.listener,k!==m&&h.isPropagationStopped())break t;m=U,h.currentTarget=ot;try{m(h)}catch(yt){oc(yt)}h.currentTarget=null,m=k}else for(b=0;b<l.length;b++){if(U=l[b],k=U.instance,ot=U.currentTarget,U=U.listener,k!==m&&h.isPropagationStopped())break t;m=U,h.currentTarget=ot;try{m(h)}catch(yt){oc(yt)}h.currentTarget=null,m=k}}}}function Te(n,i){var s=i[Vi];s===void 0&&(s=i[Vi]=new Set);var l=n+"__bubble";s.has(l)||(J0(i,n,2,!1),s.add(l))}function bh(n,i,s){var l=0;i&&(l|=4),J0(s,n,l,i)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Eh(n){if(!n[Sc]){n[Sc]=!0,R.forEach(function(s){s!=="selectionchange"&&(kS.has(s)||bh(s,!1,n),bh(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Sc]||(i[Sc]=!0,bh("selectionchange",!1,i))}}function J0(n,i,s,l){switch(Mv(i)){case 2:var h=gM;break;case 8:h=vM;break;default:h=Ih}s=h.bind(null,i,s,n),h=void 0,!Xu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(i,s,{capture:!0,passive:h}):n.addEventListener(i,s,!0):h!==void 0?n.addEventListener(i,s,{passive:h}):n.addEventListener(i,s,!1)}function Th(n,i,s,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var U=l.stateNode.containerInfo;if(U===h)break;if(b===4)for(b=l.return;b!==null;){var k=b.tag;if((k===3||k===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;U!==null;){if(b=mi(U),b===null)return;if(k=b.tag,k===5||k===6||k===26||k===27){l=m=b;continue t}U=U.parentNode}}l=l.return}rm(function(){var ot=m,yt=ku(s),bt=[];t:{var ct=Nm.get(n);if(ct!==void 0){var ut=Ol,le=n;switch(n){case"keypress":if(Nl(s)===0)break t;case"keydown":case"keyup":ut=Bx;break;case"focusin":le="focus",ut=Zu;break;case"focusout":le="blur",ut=Zu;break;case"beforeblur":case"afterblur":ut=Zu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Hx;break;case Cm:case Dm:case Um:ut=Rx;break;case Lm:ut=Gx;break;case"scroll":case"scrollend":ut=bx;break;case"wheel":ut=Wx;break;case"copy":case"cut":case"paste":ut=Dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=um;break;case"toggle":case"beforetoggle":ut=qx}var re=(i&4)!==0,Xe=!re&&(n==="scroll"||n==="scrollend"),tt=re?ct!==null?ct+"Capture":null:ct;re=[];for(var Y=ot,st;Y!==null;){var xt=Y;if(st=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||st===null||tt===null||(xt=ho(Y,tt),xt!=null&&re.push(Zo(Y,xt,st))),Xe)break;Y=Y.return}0<re.length&&(ct=new ut(ct,le,null,s,yt),bt.push({event:ct,listeners:re}))}}if((i&7)===0){t:{if(ct=n==="mouseover"||n==="pointerover",ut=n==="mouseout"||n==="pointerout",ct&&s!==Gu&&(le=s.relatedTarget||s.fromElement)&&(mi(le)||le[_n]))break t;if((ut||ct)&&(ct=yt.window===yt?yt:(ct=yt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ut?(le=s.relatedTarget||s.toElement,ut=ot,le=le?mi(le):null,le!==null&&(Xe=c(le),re=le.tag,le!==Xe||re!==5&&re!==27&&re!==6)&&(le=null)):(ut=null,le=ot),ut!==le)){if(re=lm,xt="onMouseLeave",tt="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(re=um,xt="onPointerLeave",tt="onPointerEnter",Y="pointer"),Xe=ut==null?ct:St(ut),st=le==null?ct:St(le),ct=new re(xt,Y+"leave",ut,s,yt),ct.target=Xe,ct.relatedTarget=st,xt=null,mi(yt)===ot&&(re=new re(tt,Y+"enter",le,s,yt),re.target=st,re.relatedTarget=Xe,xt=re),Xe=xt,ut&&le)e:{for(re=ut,tt=le,Y=0,st=re;st;st=Ts(st))Y++;for(st=0,xt=tt;xt;xt=Ts(xt))st++;for(;0<Y-st;)re=Ts(re),Y--;for(;0<st-Y;)tt=Ts(tt),st--;for(;Y--;){if(re===tt||tt!==null&&re===tt.alternate)break e;re=Ts(re),tt=Ts(tt)}re=null}else re=null;ut!==null&&$0(bt,ct,ut,re,!1),le!==null&&Xe!==null&&$0(bt,Xe,le,re,!0)}}t:{if(ct=ot?St(ot):window,ut=ct.nodeName&&ct.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ct.type==="file")var Xt=_m;else if(gm(ct))if(ym)Xt=nS;else{Xt=tS;var be=$x}else ut=ct.nodeName,!ut||ut.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&Vu(ot.elementType)&&(Xt=_m):Xt=eS;if(Xt&&(Xt=Xt(n,ot))){vm(bt,Xt,s,yt);break t}be&&be(n,ct,ot),n==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&vi(ct,"number",ct.value)}switch(be=ot?St(ot):window,n){case"focusin":(gm(be)||be.contentEditable==="true")&&(es=be,ef=ot,So=null);break;case"focusout":So=ef=es=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,wm(bt,s,yt);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":wm(bt,s,yt)}var Jt;if(Qu)t:{switch(n){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else ts?pm(n,s)&&(oe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(oe="onCompositionStart");oe&&(fm&&s.locale!=="ko"&&(ts||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ts&&(Jt=sm()):(za=yt,qu="value"in za?za.value:za.textContent,ts=!0)),be=Mc(ot,oe),0<be.length&&(oe=new cm(oe,n,null,s,yt),bt.push({event:oe,listeners:be}),Jt?oe.data=Jt:(Jt=mm(s),Jt!==null&&(oe.data=Jt)))),(Jt=jx?Zx(n,s):Kx(n,s))&&(oe=Mc(ot,"onBeforeInput"),0<oe.length&&(be=new cm("onBeforeInput","beforeinput",null,s,yt),bt.push({event:be,listeners:oe}),be.data=Jt)),HS(bt,n,ot,s,yt)}Q0(bt,i)})}function Zo(n,i,s){return{instance:n,listener:i,currentTarget:s}}function Mc(n,i){for(var s=i+"Capture",l=[];n!==null;){var h=n,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=ho(n,s),h!=null&&l.unshift(Zo(n,h,m)),h=ho(n,i),h!=null&&l.push(Zo(n,h,m))),n.tag===3)return l;n=n.return}return[]}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function $0(n,i,s,l,h){for(var m=i._reactName,b=[];s!==null&&s!==l;){var U=s,k=U.alternate,ot=U.stateNode;if(U=U.tag,k!==null&&k===l)break;U!==5&&U!==26&&U!==27||ot===null||(k=ot,h?(ot=ho(s,m),ot!=null&&b.unshift(Zo(s,ot,k))):h||(ot=ho(s,m),ot!=null&&b.push(Zo(s,ot,k)))),s=s.return}b.length!==0&&n.push({event:i,listeners:b})}var WS=/\r\n?/g,XS=/\u0000|\uFFFD/g;function tv(n){return(typeof n=="string"?n:""+n).replace(WS,`
`).replace(XS,"")}function ev(n,i){return i=tv(i),tv(n)===i}function bc(){}function We(n,i,s,l,h,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Qr(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Qr(n,""+l);break;case"className":ne(n,"class",l);break;case"tabIndex":ne(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(n,s,l);break;case"style":im(n,l,m);break;case"data":if(i!=="object"){ne(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=Ul(""+l),n.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&We(n,i,"name",h.name,h,null),We(n,i,"formEncType",h.formEncType,h,null),We(n,i,"formMethod",h.formMethod,h,null),We(n,i,"formTarget",h.formTarget,h,null)):(We(n,i,"encType",h.encType,h,null),We(n,i,"method",h.method,h,null),We(n,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=Ul(""+l),n.setAttribute(s,l);break;case"onClick":l!=null&&(n.onclick=bc);break;case"onScroll":l!=null&&Te("scroll",n);break;case"onScrollEnd":l!=null&&Te("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}s=Ul(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""+l):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":l===!0?n.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,l):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(s,l):n.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(s):n.setAttribute(s,l);break;case"popover":Te("beforetoggle",n),Te("toggle",n),Dt(n,"popover",l);break;case"xlinkActuate":qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dt(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Sx.get(s)||s,Dt(n,s,l))}}function Ah(n,i,s,l,h,m){switch(s){case"style":im(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof l=="string"?Qr(n,l):(typeof l=="number"||typeof l=="bigint")&&Qr(n,""+l);break;case"onScroll":l!=null&&Te("scroll",n);break;case"onScrollEnd":l!=null&&Te("scrollend",n);break;case"onClick":l!=null&&(n.onclick=bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!q.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=n[vn]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,l,h);break t}s in n?n[s]=l:l===!0?n.setAttribute(s,""):Dt(n,s,l)}}}function Nn(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",n),Te("load",n);var l=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(n,i,m,b,s,null)}}h&&We(n,i,"srcSet",s.srcSet,s,null),l&&We(n,i,"src",s.src,s,null);return;case"input":Te("invalid",n);var U=m=b=h=null,k=null,ot=null;for(l in s)if(s.hasOwnProperty(l)){var yt=s[l];if(yt!=null)switch(l){case"name":h=yt;break;case"type":b=yt;break;case"checked":k=yt;break;case"defaultChecked":ot=yt;break;case"value":m=yt;break;case"defaultValue":U=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(a(137,i));break;default:We(n,i,l,yt,s,null)}}Gn(n,m,U,k,ot,b,h,!1),Di(n);return;case"select":Te("invalid",n),l=b=m=null;for(h in s)if(s.hasOwnProperty(h)&&(U=s[h],U!=null))switch(h){case"value":m=U;break;case"defaultValue":b=U;break;case"multiple":l=U;default:We(n,i,h,U,s,null)}i=m,s=b,n.multiple=!!l,i!=null?kn(n,!!l,i,!1):s!=null&&kn(n,!!l,s,!0);return;case"textarea":Te("invalid",n),m=h=l=null;for(b in s)if(s.hasOwnProperty(b)&&(U=s[b],U!=null))switch(b){case"value":l=U;break;case"defaultValue":h=U;break;case"children":m=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(91));break;default:We(n,i,b,U,s,null)}em(n,l,h,m),Di(n);return;case"option":for(k in s)s.hasOwnProperty(k)&&(l=s[k],l!=null)&&(k==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":We(n,i,k,l,s,null));return;case"dialog":Te("beforetoggle",n),Te("toggle",n),Te("cancel",n),Te("close",n);break;case"iframe":case"object":Te("load",n);break;case"video":case"audio":for(l=0;l<jo.length;l++)Te(jo[l],n);break;case"image":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"embed":case"source":case"link":Te("error",n),Te("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in s)if(s.hasOwnProperty(ot)&&(l=s[ot],l!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(n,i,ot,l,s,null)}return;default:if(Vu(i)){for(yt in s)s.hasOwnProperty(yt)&&(l=s[yt],l!==void 0&&Ah(n,i,yt,l,s,void 0));return}}for(U in s)s.hasOwnProperty(U)&&(l=s[U],l!=null&&We(n,i,U,l,s,null))}function qS(n,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,U=null,k=null,ot=null,yt=null;for(ut in s){var bt=s[ut];if(s.hasOwnProperty(ut)&&bt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":k=bt;default:l.hasOwnProperty(ut)||We(n,i,ut,null,l,bt)}}for(var ct in l){var ut=l[ct];if(bt=s[ct],l.hasOwnProperty(ct)&&(ut!=null||bt!=null))switch(ct){case"type":m=ut;break;case"name":h=ut;break;case"checked":ot=ut;break;case"defaultChecked":yt=ut;break;case"value":b=ut;break;case"defaultValue":U=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==bt&&We(n,i,ct,ut,l,bt)}}ia(n,b,U,k,ot,yt,m,h);return;case"select":ut=b=U=ct=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":ut=k;default:l.hasOwnProperty(m)||We(n,i,m,null,l,k)}for(h in l)if(m=l[h],k=s[h],l.hasOwnProperty(h)&&(m!=null||k!=null))switch(h){case"value":ct=m;break;case"defaultValue":U=m;break;case"multiple":b=m;default:m!==k&&We(n,i,h,m,l,k)}i=U,s=b,l=ut,ct!=null?kn(n,!!s,ct,!1):!!l!=!!s&&(i!=null?kn(n,!!s,i,!0):kn(n,!!s,s?[]:"",!1));return;case"textarea":ut=ct=null;for(U in s)if(h=s[U],s.hasOwnProperty(U)&&h!=null&&!l.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:We(n,i,U,null,l,h)}for(b in l)if(h=l[b],m=s[b],l.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":ct=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&We(n,i,b,h,l,m)}fo(n,ct,ut);return;case"option":for(var le in s)ct=s[le],s.hasOwnProperty(le)&&ct!=null&&!l.hasOwnProperty(le)&&(le==="selected"?n.selected=!1:We(n,i,le,null,l,ct));for(k in l)ct=l[k],ut=s[k],l.hasOwnProperty(k)&&ct!==ut&&(ct!=null||ut!=null)&&(k==="selected"?n.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":We(n,i,k,ct,l,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in s)ct=s[re],s.hasOwnProperty(re)&&ct!=null&&!l.hasOwnProperty(re)&&We(n,i,re,null,l,ct);for(ot in l)if(ct=l[ot],ut=s[ot],l.hasOwnProperty(ot)&&ct!==ut&&(ct!=null||ut!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:We(n,i,ot,ct,l,ut)}return;default:if(Vu(i)){for(var Xe in s)ct=s[Xe],s.hasOwnProperty(Xe)&&ct!==void 0&&!l.hasOwnProperty(Xe)&&Ah(n,i,Xe,void 0,l,ct);for(yt in l)ct=l[yt],ut=s[yt],!l.hasOwnProperty(yt)||ct===ut||ct===void 0&&ut===void 0||Ah(n,i,yt,ct,l,ut);return}}for(var tt in s)ct=s[tt],s.hasOwnProperty(tt)&&ct!=null&&!l.hasOwnProperty(tt)&&We(n,i,tt,null,l,ct);for(bt in l)ct=l[bt],ut=s[bt],!l.hasOwnProperty(bt)||ct===ut||ct==null&&ut==null||We(n,i,bt,ct,l,ut)}var wh=null,Rh=null;function Ec(n){return n.nodeType===9?n:n.ownerDocument}function nv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Ch(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dh=null;function YS(){var n=window.event;return n&&n.type==="popstate"?n===Dh?!1:(Dh=n,!0):(Dh=null,!1)}var av=typeof setTimeout=="function"?setTimeout:void 0,jS=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,ZS=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(n){return rv.resolve(null).then(n).catch(KS)}:av;function KS(n){setTimeout(function(){throw n})}function Ja(n){return n==="head"}function sv(n,i){var s=i,l=0,h=0;do{var m=s.nextSibling;if(n.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var b=n.ownerDocument;if(s&1&&Ko(b.documentElement),s&2&&Ko(b.body),s&4)for(s=b.head,Ko(s),b=s.firstChild;b;){var U=b.nextSibling,k=b.nodeName;b[Ri]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=U}}if(h===0){n.removeChild(m),al(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);al(i)}function Uh(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Uh(s),Ci(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function QS(n,i,s,l){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ri])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Ni(n.nextSibling),n===null)break}return null}function JS(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Ni(n.nextSibling),n===null))return null;return n}function Lh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function $S(n,i){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Ni(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Nh=null;function ov(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}function lv(n,i,s){switch(i=Ec(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Ko(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Ci(n)}var Ei=new Map,cv=new Set;function Tc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var va=X.d;X.d={f:tM,r:eM,D:nM,C:iM,L:aM,m:rM,X:oM,S:sM,M:lM};function tM(){var n=va.f(),i=gc();return n||i}function eM(n){var i=gi(n);i!==null&&i.tag===5&&i.type==="form"?Cg(i):va.r(n)}var As=typeof document>"u"?null:document;function uv(n,i,s){var l=As;if(l&&typeof i=="string"&&i){var h=nn(i);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),cv.has(h)||(cv.add(h),n={rel:n,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Nn(i,"link",n),jt(i),l.head.appendChild(i)))}}function nM(n){va.D(n),uv("dns-prefetch",n,null)}function iM(n,i){va.C(n,i),uv("preconnect",n,i)}function aM(n,i,s){va.L(n,i,s);var l=As;if(l&&n&&i){var h='link[rel="preload"][as="'+nn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+nn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+nn(s.imageSizes)+'"]')):h+='[href="'+nn(n)+'"]';var m=h;switch(i){case"style":m=ws(n);break;case"script":m=Rs(n)}Ei.has(m)||(n=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),Ei.set(m,n),l.querySelector(h)!==null||i==="style"&&l.querySelector(Qo(m))||i==="script"&&l.querySelector(Jo(m))||(i=l.createElement("link"),Nn(i,"link",n),jt(i),l.head.appendChild(i)))}}function rM(n,i){va.m(n,i);var s=As;if(s&&n){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+nn(l)+'"][href="'+nn(n)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Rs(n)}if(!Ei.has(m)&&(n=g({rel:"modulepreload",href:n},i),Ei.set(m,n),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Jo(m)))return}l=s.createElement("link"),Nn(l,"link",n),jt(l),s.head.appendChild(l)}}}function sM(n,i,s){va.S(n,i,s);var l=As;if(l&&n){var h=ae(l).hoistableStyles,m=ws(n);i=i||"default";var b=h.get(m);if(!b){var U={loading:0,preload:null};if(b=l.querySelector(Qo(m)))U.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":i},s),(s=Ei.get(m))&&Ph(n,s);var k=b=l.createElement("link");jt(k),Nn(k,"link",n),k._p=new Promise(function(ot,yt){k.onload=ot,k.onerror=yt}),k.addEventListener("load",function(){U.loading|=1}),k.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Ac(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:U},h.set(m,b)}}}function oM(n,i){va.X(n,i);var s=As;if(s&&n){var l=ae(s).hoistableScripts,h=Rs(n),m=l.get(h);m||(m=s.querySelector(Jo(h)),m||(n=g({src:n,async:!0},i),(i=Ei.get(h))&&Oh(n,i),m=s.createElement("script"),jt(m),Nn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function lM(n,i){va.M(n,i);var s=As;if(s&&n){var l=ae(s).hoistableScripts,h=Rs(n),m=l.get(h);m||(m=s.querySelector(Jo(h)),m||(n=g({src:n,async:!0,type:"module"},i),(i=Ei.get(h))&&Oh(n,i),m=s.createElement("script"),jt(m),Nn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function fv(n,i,s,l){var h=(h=vt.current)?Tc(h):null;if(!h)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ws(s.href),s=ae(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=ws(s.href);var m=ae(h).hoistableStyles,b=m.get(n);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=h.querySelector(Qo(n)))&&!m._p&&(b.instance=m,b.state.loading=5),Ei.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ei.set(n,s),m||cM(h,n,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Rs(s),s=ae(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function ws(n){return'href="'+nn(n)+'"'}function Qo(n){return'link[rel="stylesheet"]['+n+"]"}function hv(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function cM(n,i,s,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Nn(i,"link",s),jt(i),n.head.appendChild(i))}function Rs(n){return'[src="'+nn(n)+'"]'}function Jo(n){return"script[async]"+n}function dv(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+nn(s.href)+'"]');if(l)return i.instance=l,jt(l),l;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),jt(l),Nn(l,"style",h),Ac(l,s.precedence,n),i.instance=l;case"stylesheet":h=ws(s.href);var m=n.querySelector(Qo(h));if(m)return i.state.loading|=4,i.instance=m,jt(m),m;l=hv(s),(h=Ei.get(h))&&Ph(l,h),m=(n.ownerDocument||n).createElement("link"),jt(m);var b=m;return b._p=new Promise(function(U,k){b.onload=U,b.onerror=k}),Nn(m,"link",l),i.state.loading|=4,Ac(m,s.precedence,n),i.instance=m;case"script":return m=Rs(s.src),(h=n.querySelector(Jo(m)))?(i.instance=h,jt(h),h):(l=s,(h=Ei.get(m))&&(l=g({},s),Oh(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),jt(h),Nn(h,"link",l),n.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ac(l,s.precedence,n));return i.instance}function Ac(n,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,b=0;b<l.length;b++){var U=l[b];if(U.dataset.precedence===i)m=U;else if(m!==h)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function Ph(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Oh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var wc=null;function pv(n,i,s){if(wc===null){var l=new Map,h=wc=new Map;h.set(s,l)}else h=wc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(n))return l;for(l.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var m=s[h];if(!(m[Ri]||m[$e]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=n+b;var U=l.get(b);U?U.push(m):l.set(b,[m])}}return l}function mv(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function uM(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(n=i.disabled,typeof i.precedence=="string"&&n==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function gv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var $o=null;function fM(){}function hM(n,i,s){if($o===null)throw Error(a(475));var l=$o;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=ws(s.href),m=n.querySelector(Qo(h));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Rc.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=m,jt(m);return}m=n.ownerDocument||n,s=hv(s),(h=Ei.get(h))&&Ph(s,h),m=m.createElement("link"),jt(m);var b=m;b._p=new Promise(function(U,k){b.onload=U,b.onerror=k}),Nn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Rc.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function dM(){if($o===null)throw Error(a(475));var n=$o;return n.stylesheets&&n.count===0&&zh(n,n.stylesheets),0<n.count?function(i){var s=setTimeout(function(){if(n.stylesheets&&zh(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Rc(){if(this.count--,this.count===0){if(this.stylesheets)zh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Cc=null;function zh(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Cc=new Map,i.forEach(pM,n),Cc=null,Rc.call(n))}function pM(n,i){if(!(i.state.loading&4)){var s=Cc.get(n);if(s)var l=s.get(null);else{s=new Map,Cc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}h=i.instance,b=h.getAttribute("data-precedence"),m=s.get(b)||l,m===l&&s.set(null,h),s.set(b,h),this.count++,l=Rc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),i.state.loading|=4}}var tl={$$typeof:w,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function mM(n,i,s,l,h,m,b,U){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function vv(n,i,s,l,h,m,b,U,k,ot,yt,bt){return n=new mM(n,i,s,b,U,k,ot,bt),i=1,m===!0&&(i|=24),m=ai(3,null,null,i),n.current=m,m.stateNode=n,i=vf(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Sf(m),n}function _v(n){return n?(n=rs,n):rs}function yv(n,i,s,l,h,m){h=_v(h),l.context===null?l.context=h:l.pendingContext=h,l=Fa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ha(n,l,i),s!==null&&(ci(s,n,i),Do(s,n,i))}function xv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Bh(n,i){xv(n,i),(n=n.alternate)&&xv(n,i)}function Sv(n){if(n.tag===13){var i=as(n,67108864);i!==null&&ci(i,n,67108864),Bh(n,67108864)}}var Dc=!0;function gM(n,i,s,l){var h=N.T;N.T=null;var m=X.p;try{X.p=2,Ih(n,i,s,l)}finally{X.p=m,N.T=h}}function vM(n,i,s,l){var h=N.T;N.T=null;var m=X.p;try{X.p=8,Ih(n,i,s,l)}finally{X.p=m,N.T=h}}function Ih(n,i,s,l){if(Dc){var h=Fh(l);if(h===null)Th(n,i,l,Uc,s),bv(n,l);else if(yM(h,n,i,s,l))l.stopPropagation();else if(bv(n,l),i&4&&-1<_M.indexOf(n)){for(;h!==null;){var m=gi(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Rt(m.pendingLanes);if(b!==0){var U=m;for(U.pendingLanes|=2,U.entangledLanes|=2;b;){var k=1<<31-Lt(b);U.entanglements[1]|=k,b&=~k}ji(m),(Fe&6)===0&&(pc=Kt()+500,Yo(0))}}break;case 13:U=as(m,2),U!==null&&ci(U,m,2),gc(),Bh(m,2)}if(m=Fh(l),m===null&&Th(n,i,l,Uc,s),m===h)break;h=m}h!==null&&l.stopPropagation()}else Th(n,i,l,null,s)}}function Fh(n){return n=ku(n),Hh(n)}var Uc=null;function Hh(n){if(Uc=null,n=mi(n),n!==null){var i=c(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=u(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Uc=n,null}function Mv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qt()){case we:return 2;case te:return 8;case F:case D:return 32;case lt:return 268435456;default:return 32}default:return 32}}var Vh=!1,$a=null,tr=null,er=null,el=new Map,nl=new Map,nr=[],_M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bv(n,i){switch(n){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":el.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(i.pointerId)}}function il(n,i,s,l,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=gi(i),i!==null&&Sv(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function yM(n,i,s,l,h){switch(i){case"focusin":return $a=il($a,n,i,s,l,h),!0;case"dragenter":return tr=il(tr,n,i,s,l,h),!0;case"mouseover":return er=il(er,n,i,s,l,h),!0;case"pointerover":var m=h.pointerId;return el.set(m,il(el.get(m)||null,n,i,s,l,h)),!0;case"gotpointercapture":return m=h.pointerId,nl.set(m,il(nl.get(m)||null,n,i,s,l,h)),!0}return!1}function Ev(n){var i=mi(n.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){n.blockedOn=i,En(n.priority,function(){if(s.tag===13){var l=li();l=Me(l);var h=as(s,l);h!==null&&ci(h,s,l),Bh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=Fh(n.nativeEvent);if(s===null){s=n.nativeEvent;var l=new s.constructor(s.type,s);Gu=l,s.target.dispatchEvent(l),Gu=null}else return i=gi(s),i!==null&&Sv(i),n.blockedOn=s,!1;i.shift()}return!0}function Tv(n,i,s){Lc(n)&&s.delete(i)}function xM(){Vh=!1,$a!==null&&Lc($a)&&($a=null),tr!==null&&Lc(tr)&&(tr=null),er!==null&&Lc(er)&&(er=null),el.forEach(Tv),nl.forEach(Tv)}function Nc(n,i){n.blockedOn===i&&(n.blockedOn=null,Vh||(Vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xM)))}var Pc=null;function Av(n){Pc!==n&&(Pc=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pc===n&&(Pc=null);for(var i=0;i<n.length;i+=3){var s=n[i],l=n[i+1],h=n[i+2];if(typeof l!="function"){if(Hh(l||s)===null)continue;break}var m=gi(s);m!==null&&(n.splice(i,3),i-=3,Hf(m,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function al(n){function i(k){return Nc(k,n)}$a!==null&&Nc($a,n),tr!==null&&Nc(tr,n),er!==null&&Nc(er,n),el.forEach(i),nl.forEach(i);for(var s=0;s<nr.length;s++){var l=nr[s];l.blockedOn===n&&(l.blockedOn=null)}for(;0<nr.length&&(s=nr[0],s.blockedOn===null);)Ev(s),s.blockedOn===null&&nr.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],m=s[l+1],b=h[vn]||null;if(typeof m=="function")b||Av(s);else if(b){var U=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[vn]||null)U=b.formAction;else if(Hh(h)!==null)continue}else U=b.action;typeof U=="function"?s[l+1]=U:(s.splice(l,3),l-=3),Av(s)}}}function Gh(n){this._internalRoot=n}Oc.prototype.render=Gh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=li();yv(s,l,n,i,null,null)},Oc.prototype.unmount=Gh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;yv(n.current,2,null,n,null,null),gc(),i[_n]=null}};function Oc(n){this._internalRoot=n}Oc.prototype.unstable_scheduleHydration=function(n){if(n){var i=xe();n={blockedOn:null,target:n,priority:i};for(var s=0;s<nr.length&&i!==0&&i<nr[s].priority;s++);nr.splice(s,0,n),s===0&&Ev(n)}};var wv=t.version;if(wv!=="19.1.0")throw Error(a(527,wv,"19.1.0"));X.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=p(i),n=n!==null?d(n):null,n=n===null?null:n.stateNode,n};var SM={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{_t=zc.inject(SM),Ht=zc}catch{}}return sl.createRoot=function(n,i){if(!o(n))throw Error(a(299));var s=!1,l="",h=kg,m=Wg,b=Xg,U=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(U=i.unstable_transitionCallbacks)),i=vv(n,1,!1,null,null,s,l,h,m,b,U,null),n[_n]=i.current,Eh(n),new Gh(i)},sl.hydrateRoot=function(n,i,s){if(!o(n))throw Error(a(299));var l=!1,h="",m=kg,b=Wg,U=Xg,k=null,ot=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(U=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(k=s.unstable_transitionCallbacks),s.formState!==void 0&&(ot=s.formState)),i=vv(n,1,!0,i,s??null,l,h,m,b,U,k,ot),i.context=_v(null),s=i.current,l=li(),l=Me(l),h=Fa(l),h.callback=null,Ha(s,h,l),s=l,i.current.lanes=s,ft(i,s),ji(i),n[_n]=i.current,Eh(n),new Oc(i)},sl.version="19.1.0",sl}var Bv;function UM(){if(Bv)return Wh.exports;Bv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wh.exports=DM(),Wh.exports}var LM=UM();const NM="modulepreload",PM=function(r){return"/"+r},Iv={},OM=function(t,e,a){let o=Promise.resolve();if(e&&e.length>0){let p=function(d){return Promise.all(d.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=u?.nonce||u?.getAttribute("nonce");o=p(e.map(d=>{if(d=PM(d),d in Iv)return;Iv[d]=!0;const g=d.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${_}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":NM,g||(v.as="script"),v.crossOrigin="",v.href=d,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((y,M)=>{v.addEventListener("load",y),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${d}`)))})}))}function c(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return o.then(u=>{for(const f of u||[])f.status==="rejected"&&c(f.reason);return t().catch(c)})};var fe=Cp();const zM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),BM=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,a)=>a?a.toUpperCase():e.toLowerCase()),Fv=r=>{const t=BM(r);return t.charAt(0).toUpperCase()+t.slice(1)},vy=(...r)=>r.filter((t,e,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===e).join(" ").trim(),IM=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var FM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const HM=fe.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...f},p)=>fe.createElement("svg",{ref:p,...FM,width:t,height:t,stroke:r,strokeWidth:a?Number(e)*24/Number(t):e,className:vy("lucide",o),...!c&&!IM(f)&&{"aria-hidden":"true"},...f},[...u.map(([d,g])=>fe.createElement(d,g)),...Array.isArray(c)?c:[c]]));const ta=(r,t)=>{const e=fe.forwardRef(({className:a,...o},c)=>fe.createElement(HM,{ref:c,iconNode:t,className:vy(`lucide-${zM(Fv(r))}`,`lucide-${r}`,a),...o}));return e.displayName=Fv(r),e};const VM=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],GM=ta("cookie",VM);const kM=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],WM=ta("hand",kM);const XM=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],qM=ta("rotate-3d",XM);const YM=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jM=ta("rotate-ccw",YM);const ZM=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],KM=ta("sliders-horizontal",ZM);const QM=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],JM=ta("timer",QM);const $M=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],t1=ta("waves",$M);const e1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],n1=ta("x",e1);const i1=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],a1=ta("zoom-in",i1);const r1=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],s1=ta("zoom-out",r1);const Dp="170",o1=0,Hv=1,l1=2,Lu=1,c1=2,Ea=3,yr=0,ei=1,Ta=2,vr=0,js=1,Vv=2,Gv=3,kv=4,u1=5,Yr=100,f1=101,h1=102,d1=103,p1=104,m1=200,g1=201,v1=202,_1=203,zd=204,Bd=205,y1=206,x1=207,S1=208,M1=209,b1=210,E1=211,T1=212,A1=213,w1=214,Id=0,Fd=1,Hd=2,Qs=3,Vd=4,Gd=5,kd=6,Wd=7,_y=0,R1=1,C1=2,_r=0,D1=1,U1=2,L1=3,Up=4,N1=5,P1=6,O1=7,Wv="attached",z1="detached",yy=300,Js=301,$s=302,Xd=303,qd=304,Nu=306,Yd=1e3,wa=1001,jd=1002,gn=1003,B1=1004,Bc=1005,Fi=1006,Zh=1007,pr=1008,Ua=1009,xy=1010,Sy=1011,Sl=1012,Lp=1013,Zr=1014,Yn=1015,Al=1016,Np=1017,Pp=1018,to=1020,My=35902,by=1021,Ey=1022,Vn=1023,Ty=1024,Ay=1025,Zs=1026,eo=1027,Op=1028,zp=1029,wy=1030,Bp=1031,Ip=1033,mu=33776,gu=33777,vu=33778,_u=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,tp=37492,ep=37496,np=37808,ip=37809,ap=37810,rp=37811,sp=37812,op=37813,lp=37814,cp=37815,up=37816,fp=37817,hp=37818,dp=37819,pp=37820,mp=37821,yu=36492,gp=36494,vp=36495,Ry=36283,_p=36284,yp=36285,xp=36286,bu=2300,Sp=2301,Kh=2302,Xv=2400,qv=2401,Yv=2402,I1=2500,jC=0,ZC=1,KC=2,F1=3200,Cy=3201,Dy=0,H1=1,hr="",Hn="srgb",ao="srgb-linear",Pu="linear",qe="srgb",Cs=7680,jv=519,V1=512,G1=513,k1=514,Uy=515,W1=516,X1=517,q1=518,Y1=519,Mp=35044,Zv="300 es",Ra=2e3,Eu=2001;class ro{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(e)===-1&&a[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const c=o.indexOf(e);c!==-1&&o.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kv=1234567;const yl=Math.PI/180,no=180/Math.PI;function Hi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function Sn(r,t,e){return Math.max(t,Math.min(e,r))}function Fp(r,t){return(r%t+t)%t}function j1(r,t,e,a,o){return a+(r-t)*(o-a)/(e-t)}function Z1(r,t,e){return r!==t?(e-r)/(t-r):0}function xl(r,t,e){return(1-e)*r+e*t}function K1(r,t,e,a){return xl(r,t,1-Math.exp(-e*a))}function Q1(r,t=1){return t-Math.abs(Fp(r,t*2)-t)}function J1(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function $1(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function tb(r,t){return r+Math.floor(Math.random()*(t-r+1))}function eb(r,t){return r+Math.random()*(t-r)}function nb(r){return r*(.5-Math.random())}function ib(r){r!==void 0&&(Kv=r);let t=Kv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ab(r){return r*yl}function rb(r){return r*no}function sb(r){return(r&r-1)===0&&r!==0}function ob(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cb(r,t,e,a,o){const c=Math.cos,u=Math.sin,f=c(e/2),p=u(e/2),d=c((t+a)/2),g=u((t+a)/2),_=c((t-a)/2),v=u((t-a)/2),y=c((a-t)/2),M=u((a-t)/2);switch(o){case"XYX":r.set(f*g,p*_,p*v,f*d);break;case"YZY":r.set(p*v,f*g,p*_,f*d);break;case"ZXZ":r.set(p*_,p*v,f*g,f*d);break;case"XZX":r.set(f*g,p*M,p*y,f*d);break;case"YXY":r.set(p*y,f*g,p*M,f*d);break;case"ZYZ":r.set(p*M,p*y,f*g,f*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ii(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ve(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Be={DEG2RAD:yl,RAD2DEG:no,generateUUID:Hi,clamp:Sn,euclideanModulo:Fp,mapLinear:j1,inverseLerp:Z1,lerp:xl,damp:K1,pingpong:Q1,smoothstep:J1,smootherstep:$1,randInt:tb,randFloat:eb,randFloatSpread:nb,seededRandom:ib,degToRad:ab,radToDeg:rb,isPowerOfTwo:sb,ceilPowerOfTwo:ob,floorPowerOfTwo:lb,setQuaternionFromProperEuler:cb,normalize:Ve,denormalize:Ii};class ie{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,a=this.y,o=t.elements;return this.x=o[0]*e+o[3]*a+o[6],this.y=o[1]*e+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(e,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Sn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y;return e*e+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const a=Math.cos(e),o=Math.sin(e),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(t,e,a,o,c,u,f,p,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,a,o,c,u,f,p,d)}set(t,e,a,o,c,u,f,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=e,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],this}extractBasis(t,e,a){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,o=e.elements,c=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],y=a[5],M=a[8],E=o[0],S=o[3],x=o[6],O=o[1],w=o[4],A=o[7],P=o[2],L=o[5],z=o[8];return c[0]=u*E+f*O+p*P,c[3]=u*S+f*w+p*L,c[6]=u*x+f*A+p*z,c[1]=d*E+g*O+_*P,c[4]=d*S+g*w+_*L,c[7]=d*x+g*A+_*z,c[2]=v*E+y*O+M*P,c[5]=v*S+y*w+M*L,c[8]=v*x+y*A+M*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8];return e*u*g-e*f*d-a*c*g+a*f*p+o*c*d-o*u*p}invert(){const t=this.elements,e=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],_=g*u-f*d,v=f*p-g*c,y=d*c-u*p,M=e*_+a*v+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=_*E,t[1]=(o*d-g*a)*E,t[2]=(f*a-o*u)*E,t[3]=v*E,t[4]=(g*e-o*p)*E,t[5]=(o*c-f*e)*E,t[6]=y*E,t[7]=(a*p-d*e)*E,t[8]=(u*e-a*c)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,a,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(Qh.makeScale(t,e)),this}rotate(t){return this.premultiply(Qh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,a,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,a=t.elements;for(let o=0;o<9;o++)if(e[o]!==a[o])return!1;return!0}fromArray(t,e=0){for(let a=0;a<9;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qh=new pe;function Ly(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ub(){const r=Ml("canvas");return r.style.display="block",r}const Qv={};function ml(r){r in Qv||(Qv[r]=!0,console.warn(r))}function fb(r,t,e){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,e);break;default:a()}}setTimeout(c,e)})}function hb(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function db(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ue={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===qe&&(r.r=Ca(r.r),r.g=Ca(r.g),r.b=Ca(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===qe&&(r.r=Ks(r.r),r.g=Ks(r.g),r.b=Ks(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?Pu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Jv=[.64,.33,.3,.6,.15,.06],$v=[.2126,.7152,.0722],t_=[.3127,.329],e_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ue.define({[ao]:{primaries:Jv,whitePoint:t_,transfer:Pu,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:$v,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:Jv,whitePoint:t_,transfer:qe,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:$v,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}});let Ds;class pb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=Ml("canvas")),Ds.width=t.width,Ds.height=t.height;const a=Ds.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ml("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ca(c[u]/255)*255;return a.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let a=0;a<e.length;a++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[a]=Math.floor(Ca(e[a]/255)*255):e[a]=Ca(e[a]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mb=0;class Ny{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Jh(o[u].image)):c.push(Jh(o[u]))}else c=Jh(o);a.url=c}return e||(t.images[this.uuid]=a),a}}function Jh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gb=0;class Pn extends ro{constructor(t=Pn.DEFAULT_IMAGE,e=Pn.DEFAULT_MAPPING,a=wa,o=wa,c=Fi,u=pr,f=Vn,p=Ua,d=Pn.DEFAULT_ANISOTROPY,g=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Hi(),this.name="",this.source=new Ny(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),e||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case wa:t.x=t.x<0?0:1;break;case jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case wa:t.y=t.y<0?0:1;break;case jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=yy;Pn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,a=0,o=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,a,o){return this.x=t,this.y=e,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*e+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*e+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*e+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*e+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,a,o,c;const p=t.elements,d=p[0],g=p[4],_=p[8],v=p[1],y=p[5],M=p[9],E=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(d+1)/2,A=(y+1)/2,P=(x+1)/2,L=(g+v)/4,z=(_+E)/4,I=(M+S)/4;return w>A&&w>P?w<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(w),o=L/a,c=z/a):A>P?A<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),a=L/o,c=I/o):P<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),a=z/c,o=I/c),this.set(a,o,c,e),this}let O=Math.sqrt((S-M)*(S-M)+(_-E)*(_-E)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(S-M)/O,this.y=(_-E)/O,this.z=(v-g)/O,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(e,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this.w=t.w+(e.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vb extends ro{constructor(t=1,e=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const o={width:t,height:e,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Pn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,a=1){if(this.width!==t||this.height!==e||this.depth!==a){this.width=t,this.height=e,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let a=0,o=t.textures.length;a<o;a++)this.textures[a]=t.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ny(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class La extends vb{constructor(t=1,e=1,a={}){super(t,e,a),this.isWebGLRenderTarget=!0}}class Py extends Pn{constructor(t=null,e=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:a,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _b extends Pn{constructor(t=null,e=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:a,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class so{constructor(t=0,e=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=a,this._w=o}static slerpFlat(t,e,a,o,c,u,f){let p=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3];const v=c[u+0],y=c[u+1],M=c[u+2],E=c[u+3];if(f===0){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f===1){t[e+0]=v,t[e+1]=y,t[e+2]=M,t[e+3]=E;return}if(_!==E||p!==v||d!==y||g!==M){let S=1-f;const x=p*v+d*y+g*M+_*E,O=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const P=Math.sqrt(w),L=Math.atan2(P,x*O);S=Math.sin(S*L)/P,f=Math.sin(f*L)/P}const A=f*O;if(p=p*S+v*A,d=d*S+y*A,g=g*S+M*A,_=_*S+E*A,S===1-f){const P=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=P,d*=P,g*=P,_*=P}}t[e]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_}static multiplyQuaternionsFlat(t,e,a,o,c,u){const f=a[o],p=a[o+1],d=a[o+2],g=a[o+3],_=c[u],v=c[u+1],y=c[u+2],M=c[u+3];return t[e]=f*M+g*_+p*y-d*v,t[e+1]=p*M+g*v+d*_-f*y,t[e+2]=d*M+g*y+f*v-p*_,t[e+3]=g*M-f*_-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,a,o){return this._x=t,this._y=e,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const a=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),g=f(o/2),_=f(c/2),v=p(a/2),y=p(o/2),M=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*y*M,this._y=d*y*_-v*g*M,this._z=d*g*M+v*y*_,this._w=d*g*_-v*y*M;break;case"YXZ":this._x=v*g*_+d*y*M,this._y=d*y*_-v*g*M,this._z=d*g*M-v*y*_,this._w=d*g*_+v*y*M;break;case"ZXY":this._x=v*g*_-d*y*M,this._y=d*y*_+v*g*M,this._z=d*g*M+v*y*_,this._w=d*g*_-v*y*M;break;case"ZYX":this._x=v*g*_-d*y*M,this._y=d*y*_+v*g*M,this._z=d*g*M-v*y*_,this._w=d*g*_+v*y*M;break;case"YZX":this._x=v*g*_+d*y*M,this._y=d*y*_+v*g*M,this._z=d*g*M-v*y*_,this._w=d*g*_-v*y*M;break;case"XZY":this._x=v*g*_-d*y*M,this._y=d*y*_-v*g*M,this._z=d*g*M+v*y*_,this._w=d*g*_+v*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const a=e/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,a=e[0],o=e[4],c=e[8],u=e[1],f=e[5],p=e[9],d=e[2],g=e[6],_=e[10],v=a+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(a>f&&a>_){const y=2*Math.sqrt(1+a-f-_);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(f>_){const y=2*Math.sqrt(1+f-a-_);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-f);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let a=t.dot(e)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Sn(this.dot(t),-1,1)))}rotateTowards(t,e){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,e/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const a=t._x,o=t._y,c=t._z,u=t._w,f=e._x,p=e._y,d=e._z,g=e._w;return this._x=a*g+u*f+o*d-c*p,this._y=o*g+u*p+c*f-a*d,this._z=c*g+u*d+a*p-o*f,this._w=u*g-a*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let f=u*t._w+a*t._x+o*t._y+c*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-e;return this._w=y*u+e*this._w,this._x=y*a+e*this._x,this._y=y*o+e*this._y,this._z=y*c+e*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,f),_=Math.sin((1-e)*g)/d,v=Math.sin(e*g)/d;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=o*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,a){return this.copy(t).slerp(e,a)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(e),c*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,a=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=a}set(t,e,a){return a===void 0&&(a=this.z),this.x=t,this.y=e,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(i_.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(i_.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*e+c[3]*a+c[6]*o,this.y=c[1]*e+c[4]*a+c[7]*o,this.z=c[2]*e+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*e+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*e+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*e+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*e+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const e=this.x,a=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*a),g=2*(f*e-c*o),_=2*(c*a-u*e);return this.x=e+p*d+u*_-f*g,this.y=a+p*g+f*d-c*_,this.z=o+p*_+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*e+c[4]*a+c[8]*o,this.y=c[1]*e+c[5]*a+c[9]*o,this.z=c[2]*e+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(e,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const a=t.x,o=t.y,c=t.z,u=e.x,f=e.y,p=e.z;return this.x=o*p-c*f,this.y=c*u-a*p,this.z=a*f-o*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const a=t.dot(this)/e;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return $h.copy(this).projectOnVector(t),this.sub($h)}reflect(t){return this.sub($h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Sn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return e*e+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,a){const o=Math.sin(e)*t;return this.x=o*Math.sin(a),this.y=Math.cos(e)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,a){return this.x=t*Math.sin(e),this.y=a,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=a,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,a=Math.sqrt(1-e*e);return this.x=a*Math.cos(t),this.y=e,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $h=new V,i_=new so;class di{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,a=t.count;e<a;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(e===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Pi):Pi.fromBufferAttribute(c,u),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ic.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ic.copy(a.boundingBox)),Ic.applyMatrix4(t.matrixWorld),this.union(Ic)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,a;return t.normal.x>0?(e=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),e<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ol),Fc.subVectors(this.max,ol),Us.subVectors(t.a,ol),Ls.subVectors(t.b,ol),Ns.subVectors(t.c,ol),ar.subVectors(Ls,Us),rr.subVectors(Ns,Ls),Ir.subVectors(Us,Ns);let e=[0,-ar.z,ar.y,0,-rr.z,rr.y,0,-Ir.z,Ir.y,ar.z,0,-ar.x,rr.z,0,-rr.x,Ir.z,0,-Ir.x,-ar.y,ar.x,0,-rr.y,rr.x,0,-Ir.y,Ir.x,0];return!td(e,Us,Ls,Ns,Fc)||(e=[1,0,0,0,1,0,0,0,1],!td(e,Us,Ls,Ns,Fc))?!1:(Hc.crossVectors(ar,rr),e=[Hc.x,Hc.y,Hc.z],td(e,Us,Ls,Ns,Fc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_a),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _a=[new V,new V,new V,new V,new V,new V,new V,new V],Pi=new V,Ic=new di,Us=new V,Ls=new V,Ns=new V,ar=new V,rr=new V,Ir=new V,ol=new V,Fc=new V,Hc=new V,Fr=new V;function td(r,t,e,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Fr.fromArray(r,c);const f=o.x*Math.abs(Fr.x)+o.y*Math.abs(Fr.y)+o.z*Math.abs(Fr.z),p=t.dot(Fr),d=e.dot(Fr),g=a.dot(Fr);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>f)return!1}return!0}const yb=new di,ll=new V,ed=new V;class Oa{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const a=this.center;e!==void 0?a.copy(e):yb.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const a=this.center.distanceToSquared(t);return e.copy(t),a>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ll.subVectors(t,this.center);const e=ll.lengthSq();if(e>this.radius*this.radius){const a=Math.sqrt(e),o=(a-this.radius)*.5;this.center.addScaledVector(ll,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ll.copy(t.center).add(ed)),this.expandByPoint(ll.copy(t.center).sub(ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ya=new V,nd=new V,Vc=new V,sr=new V,id=new V,Gc=new V,ad=new V;class wl{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const a=e.dot(this.direction);return a<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ya.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,e),ya.distanceToSquared(t))}distanceSqToSegment(t,e,a,o){nd.copy(t).add(e).multiplyScalar(.5),Vc.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(nd);const c=t.distanceTo(e)*.5,u=-this.direction.dot(Vc),f=sr.dot(this.direction),p=-sr.dot(Vc),d=sr.lengthSq(),g=Math.abs(1-u*u);let _,v,y,M;if(g>0)if(_=u*p-f,v=u*f-p,M=c*g,_>=0)if(v>=-M)if(v<=M){const E=1/g;_*=E,v*=E,y=_*(_+u*v+2*f)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;else v<=-M?(_=Math.max(0,-(-u*c+f)),v=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d):v<=M?(_=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+d):(_=Math.max(0,-(u*c+f)),v=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(nd).addScaledVector(Vc,v),y}intersectSphere(t,e){ya.subVectors(t.center,this.origin);const a=ya.dot(this.direction),o=ya.dot(ya)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,e):this.at(f,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/e;return a>=0?a:null}intersectPlane(t,e){const a=this.distanceToPlane(t);return a===null?null:this.at(a,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let a,o,c,u,f,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(f=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,e)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,e,a,o,c){id.subVectors(e,t),Gc.subVectors(a,t),ad.crossVectors(id,Gc);let u=this.direction.dot(ad),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;sr.subVectors(this.origin,t);const p=f*this.direction.dot(Gc.crossVectors(sr,Gc));if(p<0)return null;const d=f*this.direction.dot(id.cross(sr));if(d<0||p+d>u)return null;const g=-f*sr.dot(ad);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,a,o,c,u,f,p,d,g,_,v,y,M,E,S){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,a,o,c,u,f,p,d,g,_,v,y,M,E,S)}set(t,e,a,o,c,u,f,p,d,g,_,v,y,M,E,S){const x=this.elements;return x[0]=t,x[4]=e,x[8]=a,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],e[9]=a[9],e[10]=a[10],e[11]=a[11],e[12]=a[12],e[13]=a[13],e[14]=a[14],e[15]=a[15],this}copyPosition(t){const e=this.elements,a=t.elements;return e[12]=a[12],e[13]=a[13],e[14]=a[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,a){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,e,a){return this.set(t.x,e.x,a.x,0,t.y,e.y,a.y,0,t.z,e.z,a.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,a=t.elements,o=1/Ps.setFromMatrixColumn(t,0).length(),c=1/Ps.setFromMatrixColumn(t,1).length(),u=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=a[0]*o,e[1]=a[1]*o,e[2]=a[2]*o,e[3]=0,e[4]=a[4]*c,e[5]=a[5]*c,e[6]=a[6]*c,e[7]=0,e[8]=a[8]*u,e[9]=a[9]*u,e[10]=a[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,y=u*_,M=f*g,E=f*_;e[0]=p*g,e[4]=-p*_,e[8]=d,e[1]=y+M*d,e[5]=v-E*d,e[9]=-f*p,e[2]=E-v*d,e[6]=M+y*d,e[10]=u*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,M=d*g,E=d*_;e[0]=v+E*f,e[4]=M*f-y,e[8]=u*d,e[1]=u*_,e[5]=u*g,e[9]=-f,e[2]=y*f-M,e[6]=E+v*f,e[10]=u*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,M=d*g,E=d*_;e[0]=v-E*f,e[4]=-u*_,e[8]=M+y*f,e[1]=y+M*f,e[5]=u*g,e[9]=E-v*f,e[2]=-u*d,e[6]=f,e[10]=u*p}else if(t.order==="ZYX"){const v=u*g,y=u*_,M=f*g,E=f*_;e[0]=p*g,e[4]=M*d-y,e[8]=v*d+E,e[1]=p*_,e[5]=E*d+v,e[9]=y*d-M,e[2]=-d,e[6]=f*p,e[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*d,M=f*p,E=f*d;e[0]=p*g,e[4]=E-v*_,e[8]=M*_+y,e[1]=_,e[5]=u*g,e[9]=-f*g,e[2]=-d*g,e[6]=y*_+M,e[10]=v-E*_}else if(t.order==="XZY"){const v=u*p,y=u*d,M=f*p,E=f*d;e[0]=p*g,e[4]=-_,e[8]=d*g,e[1]=v*_+E,e[5]=u*g,e[9]=y*_-M,e[2]=M*_-y,e[6]=f*g,e[10]=E*_+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xb,t,Sb)}lookAt(t,e,a){const o=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),or.crossVectors(a,ui),or.lengthSq()===0&&(Math.abs(a.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),or.crossVectors(a,ui)),or.normalize(),kc.crossVectors(ui,or),o[0]=or.x,o[4]=kc.x,o[8]=ui.x,o[1]=or.y,o[5]=kc.y,o[9]=ui.y,o[2]=or.z,o[6]=kc.z,o[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,o=e.elements,c=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],y=a[13],M=a[2],E=a[6],S=a[10],x=a[14],O=a[3],w=a[7],A=a[11],P=a[15],L=o[0],z=o[4],I=o[8],C=o[12],T=o[1],H=o[5],Z=o[9],G=o[13],et=o[2],rt=o[6],N=o[10],X=o[14],W=o[3],at=o[7],B=o[11],nt=o[15];return c[0]=u*L+f*T+p*et+d*W,c[4]=u*z+f*H+p*rt+d*at,c[8]=u*I+f*Z+p*N+d*B,c[12]=u*C+f*G+p*X+d*nt,c[1]=g*L+_*T+v*et+y*W,c[5]=g*z+_*H+v*rt+y*at,c[9]=g*I+_*Z+v*N+y*B,c[13]=g*C+_*G+v*X+y*nt,c[2]=M*L+E*T+S*et+x*W,c[6]=M*z+E*H+S*rt+x*at,c[10]=M*I+E*Z+S*N+x*B,c[14]=M*C+E*G+S*X+x*nt,c[3]=O*L+w*T+A*et+P*W,c[7]=O*z+w*H+A*rt+P*at,c[11]=O*I+w*Z+A*N+P*B,c[15]=O*C+w*G+A*X+P*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],M=t[3],E=t[7],S=t[11],x=t[15];return M*(+c*p*_-o*d*_-c*f*v+a*d*v+o*f*y-a*p*y)+E*(+e*p*y-e*d*v+c*u*v-o*u*y+o*d*g-c*p*g)+S*(+e*d*_-e*f*y-c*u*_+a*u*y+c*f*g-a*d*g)+x*(-o*f*g-e*p*_+e*f*v+o*u*_-a*u*v+a*p*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=a),this}invert(){const t=this.elements,e=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],M=t[12],E=t[13],S=t[14],x=t[15],O=_*S*d-E*v*d+E*p*y-f*S*y-_*p*x+f*v*x,w=M*v*d-g*S*d-M*p*y+u*S*y+g*p*x-u*v*x,A=g*E*d-M*_*d+M*f*y-u*E*y-g*f*x+u*_*x,P=M*_*p-g*E*p-M*f*v+u*E*v+g*f*S-u*_*S,L=e*O+a*w+o*A+c*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return t[0]=O*z,t[1]=(E*v*c-_*S*c-E*o*y+a*S*y+_*o*x-a*v*x)*z,t[2]=(f*S*c-E*p*c+E*o*d-a*S*d-f*o*x+a*p*x)*z,t[3]=(_*p*c-f*v*c-_*o*d+a*v*d+f*o*y-a*p*y)*z,t[4]=w*z,t[5]=(g*S*c-M*v*c+M*o*y-e*S*y-g*o*x+e*v*x)*z,t[6]=(M*p*c-u*S*c-M*o*d+e*S*d+u*o*x-e*p*x)*z,t[7]=(u*v*c-g*p*c+g*o*d-e*v*d-u*o*y+e*p*y)*z,t[8]=A*z,t[9]=(M*_*c-g*E*c-M*a*y+e*E*y+g*a*x-e*_*x)*z,t[10]=(u*E*c-M*f*c+M*a*d-e*E*d-u*a*x+e*f*x)*z,t[11]=(g*f*c-u*_*c-g*a*d+e*_*d+u*a*y-e*f*y)*z,t[12]=P*z,t[13]=(g*E*o-M*_*o+M*a*v-e*E*v-g*a*S+e*_*S)*z,t[14]=(M*f*o-u*E*o-M*a*p+e*E*p+u*a*S-e*f*S)*z,t[15]=(u*_*o-g*f*o+g*a*p-e*_*p-u*a*v+e*f*v)*z,this}scale(t){const e=this.elements,a=t.x,o=t.y,c=t.z;return e[0]*=a,e[4]*=o,e[8]*=c,e[1]*=a,e[5]*=o,e[9]*=c,e[2]*=a,e[6]*=o,e[10]*=c,e[3]*=a,e[7]*=o,e[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,a,o))}makeTranslation(t,e,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,a,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,e,-a,0,0,a,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,0,a,0,0,1,0,0,-a,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,0,a,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const a=Math.cos(e),o=Math.sin(e),c=1-a,u=t.x,f=t.y,p=t.z,d=c*u,g=c*f;return this.set(d*u+a,d*f-o*p,d*p+o*f,0,d*f+o*p,g*f+a,g*p-o*u,0,d*p-o*f,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,e,a){return this.set(t,0,0,0,0,e,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,e,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,e,o,1,0,0,0,0,1),this}compose(t,e,a){const o=this.elements,c=e._x,u=e._y,f=e._z,p=e._w,d=c+c,g=u+u,_=f+f,v=c*d,y=c*g,M=c*_,E=u*g,S=u*_,x=f*_,O=p*d,w=p*g,A=p*_,P=a.x,L=a.y,z=a.z;return o[0]=(1-(E+x))*P,o[1]=(y+A)*P,o[2]=(M-w)*P,o[3]=0,o[4]=(y-A)*L,o[5]=(1-(v+x))*L,o[6]=(S+O)*L,o[7]=0,o[8]=(M+w)*z,o[9]=(S-O)*z,o[10]=(1-(v+E))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,a){const o=this.elements;let c=Ps.set(o[0],o[1],o[2]).length();const u=Ps.set(o[4],o[5],o[6]).length(),f=Ps.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Oi.copy(this);const d=1/c,g=1/u,_=1/f;return Oi.elements[0]*=d,Oi.elements[1]*=d,Oi.elements[2]*=d,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=_,Oi.elements[9]*=_,Oi.elements[10]*=_,e.setFromRotationMatrix(Oi),a.x=c,a.y=u,a.z=f,this}makePerspective(t,e,a,o,c,u,f=Ra){const p=this.elements,d=2*c/(e-t),g=2*c/(a-o),_=(e+t)/(e-t),v=(a+o)/(a-o);let y,M;if(f===Ra)y=-(u+c)/(u-c),M=-2*u*c/(u-c);else if(f===Eu)y=-u/(u-c),M=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=d,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,e,a,o,c,u,f=Ra){const p=this.elements,d=1/(e-t),g=1/(a-o),_=1/(u-c),v=(e+t)*d,y=(a+o)*g;let M,E;if(f===Ra)M=(u+c)*_,E=-2*_;else if(f===Eu)M=c*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=E,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const e=this.elements,a=t.elements;for(let o=0;o<16;o++)if(e[o]!==a[o])return!1;return!0}fromArray(t,e=0){for(let a=0;a<16;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t[e+9]=a[9],t[e+10]=a[10],t[e+11]=a[11],t[e+12]=a[12],t[e+13]=a[13],t[e+14]=a[14],t[e+15]=a[15],t}}const Ps=new V,Oi=new ye,xb=new V(0,0,0),Sb=new V(1,1,1),or=new V,kc=new V,ui=new V,a_=new ye,r_=new so;class $i{constructor(t=0,e=0,a=0,o=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,a,o=this._order){return this._x=t,this._y=e,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],g=o[9],_=o[2],v=o[6],y=o[10];switch(e){case"XYZ":this._y=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Sn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,a){return a_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(a_,e,a)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return r_.setFromEuler(this),this.setFromQuaternion(r_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Hp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mb=0;const s_=new V,Os=new so,xa=new ye,Wc=new V,cl=new V,bb=new V,Eb=new so,o_=new V(1,0,0),l_=new V(0,1,0),c_=new V(0,0,1),u_={type:"added"},Tb={type:"removed"},zs={type:"childadded",child:null},rd={type:"childremoved",child:null};class cn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const t=new V,e=new $i,a=new so,o=new V(1,1,1);function c(){a.setFromEuler(e,!1)}function u(){e.setFromQuaternion(a,void 0,!1)}e._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ye},normalMatrix:{value:new pe}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(o_,t)}rotateY(t){return this.rotateOnAxis(l_,t)}rotateZ(t){return this.rotateOnAxis(c_,t)}translateOnAxis(t,e){return s_.copy(t).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(o_,t)}translateY(t){return this.translateOnAxis(l_,t)}translateZ(t){return this.translateOnAxis(c_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(t,e,a){t.isVector3?Wc.copy(t):Wc.set(t,e,a);const o=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(cl,Wc,this.up):xa.lookAt(Wc,cl,this.up),this.quaternion.setFromRotationMatrix(xa),o&&(xa.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(xa),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(u_),zs.child=t,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tb),rd.child=t,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xa.multiply(t.parent.matrixWorld)),t.applyMatrix4(xa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(u_),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,a=[]){this[t]===e&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,e,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,t,bb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,Eb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let a=0,o=e.length;a<o;a++)e[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let a=0,o=e.length;a<o;a++)e[a].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let a=0,o=e.length;a<o;a++)e[a].updateMatrixWorld(t)}updateWorldMatrix(t,e){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",a={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(e){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}cn.DEFAULT_UP=new V(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new V,Sa=new V,sd=new V,Ma=new V,Bs=new V,Is=new V,f_=new V,od=new V,ld=new V,cd=new V,ud=new Le,fd=new Le,hd=new Le;class wi{constructor(t=new V,e=new V,a=new V){this.a=t,this.b=e,this.c=a}static getNormal(t,e,a,o){o.subVectors(a,e),zi.subVectors(t,e),o.cross(zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,e,a,o,c){zi.subVectors(o,e),Sa.subVectors(a,e),sd.subVectors(t,e);const u=zi.dot(zi),f=zi.dot(Sa),p=zi.dot(sd),d=Sa.dot(Sa),g=Sa.dot(sd),_=u*d-f*f;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*p-f*g)*v,M=(u*g-f*p)*v;return c.set(1-y-M,M,y)}static containsPoint(t,e,a,o){return this.getBarycoord(t,e,a,o,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(t,e,a,o,c,u,f,p){return this.getBarycoord(t,e,a,o,Ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ma.x),p.addScaledVector(u,Ma.y),p.addScaledVector(f,Ma.z),p)}static getInterpolatedAttribute(t,e,a,o,c,u){return ud.setScalar(0),fd.setScalar(0),hd.setScalar(0),ud.fromBufferAttribute(t,e),fd.fromBufferAttribute(t,a),hd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(ud,c.x),u.addScaledVector(fd,c.y),u.addScaledVector(hd,c.z),u}static isFrontFacing(t,e,a,o){return zi.subVectors(a,e),Sa.subVectors(t,e),zi.cross(Sa).dot(o)<0}set(t,e,a){return this.a.copy(t),this.b.copy(e),this.c.copy(a),this}setFromPointsAndIndices(t,e,a,o){return this.a.copy(t[e]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,a,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),zi.cross(Sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,a,o,c){return wi.getInterpolation(t,this.a,this.b,this.c,e,a,o,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const a=this.a,o=this.b,c=this.c;let u,f;Bs.subVectors(o,a),Is.subVectors(c,a),od.subVectors(t,a);const p=Bs.dot(od),d=Is.dot(od);if(p<=0&&d<=0)return e.copy(a);ld.subVectors(t,o);const g=Bs.dot(ld),_=Is.dot(ld);if(g>=0&&_<=g)return e.copy(o);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),e.copy(a).addScaledVector(Bs,u);cd.subVectors(t,c);const y=Bs.dot(cd),M=Is.dot(cd);if(M>=0&&y<=M)return e.copy(c);const E=y*d-p*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),e.copy(a).addScaledVector(Is,f);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return f_.subVectors(c,o),f=(_-g)/(_-g+(y-M)),e.copy(o).addScaledVector(f_,f);const x=1/(S+E+v);return u=E*x,f=v*x,e.copy(a).addScaledVector(Bs,u).addScaledVector(Is,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function dd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,a)}set(t,e,a){if(e===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,a,o=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=a,Ue.toWorkingColorSpace(this,o),this}setHSL(t,e,a,o=Ue.workingColorSpace){if(t=Fp(t,1),e=Sn(e,0,1),a=Sn(a,0,1),e===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+e):a+e-a*e,u=2*a-c;this.r=dd(u,c,t+1/3),this.g=dd(u,c,t),this.b=dd(u,c,t-1/3)}return Ue.toWorkingColorSpace(this,o),this}setStyle(t,e=Hn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,e);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,e);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(c,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Hn){const a=Oy[t.toLowerCase()];return a!==void 0?this.setHex(a,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return Ue.fromWorkingColorSpace(Fn.copy(this),t),Math.round(Sn(Fn.r*255,0,255))*65536+Math.round(Sn(Fn.g*255,0,255))*256+Math.round(Sn(Fn.b*255,0,255))}getHexString(t=Hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Fn.copy(this),e);const a=Fn.r,o=Fn.g,c=Fn.b,u=Math.max(a,o,c),f=Math.min(a,o,c);let p,d;const g=(f+u)/2;if(f===u)p=0,d=0;else{const _=u-f;switch(d=g<=.5?_/(u+f):_/(2-u-f),u){case a:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-a)/_+2;break;case c:p=(a-o)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Hn){Ue.fromWorkingColorSpace(Fn.copy(this),t);const e=Fn.r,a=Fn.g,o=Fn.b;return t!==Hn?`color(${t} ${e.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,e,a){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+e,lr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,a){return this.r=t.r+(e.r-t.r)*a,this.g=t.g+(e.g-t.g)*a,this.b=t.b+(e.b-t.b)*a,this}lerpHSL(t,e){this.getHSL(lr),t.getHSL(Xc);const a=xl(lr.h,Xc.h,e),o=xl(lr.s,Xc.s,e),c=xl(lr.l,Xc.l,e);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*e+c[3]*a+c[6]*o,this.g=c[1]*e+c[4]*a+c[7]*o,this.b=c[2]*e+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Gt;Gt.NAMES=Oy;let Ab=0;class xr extends ro{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=Hi(),this.name="",this.blending=js,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Bd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(a.blending=this.blending),this.side!==yr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==zd&&(a.blendSrc=this.blendSrc),this.blendDst!==Bd&&(a.blendDst=this.blendDst),this.blendEquation!==Yr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(e){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let a=null;if(e!==null){const o=e.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=e[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vp extends xr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=_y,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Aa=wb();function wb(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),a=new Uint32Array(512),o=new Uint32Array(512);for(let p=0;p<256;++p){const d=p-127;d<-27?(a[p]=0,a[p|256]=32768,o[p]=24,o[p|256]=24):d<-14?(a[p]=1024>>-d-14,a[p|256]=1024>>-d-14|32768,o[p]=-d-1,o[p|256]=-d-1):d<=15?(a[p]=d+15<<10,a[p|256]=d+15<<10|32768,o[p]=13,o[p|256]=13):d<128?(a[p]=31744,a[p|256]=64512,o[p]=24,o[p|256]=24):(a[p]=31744,a[p|256]=64512,o[p]=13,o[p|256]=13)}const c=new Uint32Array(2048),u=new Uint32Array(64),f=new Uint32Array(64);for(let p=1;p<1024;++p){let d=p<<13,g=0;for(;(d&8388608)===0;)d<<=1,g-=8388608;d&=-8388609,g+=947912704,c[p]=d|g}for(let p=1024;p<2048;++p)c[p]=939524096+(p-1024<<13);for(let p=1;p<31;++p)u[p]=p<<23;u[31]=1199570944,u[32]=2147483648;for(let p=33;p<63;++p)u[p]=2147483648+(p-32<<23);u[63]=3347054592;for(let p=1;p<64;++p)p!==32&&(f[p]=1024);return{floatView:t,uint32View:e,baseTable:a,shiftTable:o,mantissaTable:c,exponentTable:u,offsetTable:f}}function Rb(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Sn(r,-65504,65504),Aa.floatView[0]=r;const t=Aa.uint32View[0],e=t>>23&511;return Aa.baseTable[e]+((t&8388607)>>Aa.shiftTable[e])}function Cb(r){const t=r>>10;return Aa.uint32View[0]=Aa.mantissaTable[Aa.offsetTable[t]+(r&1023)]+Aa.exponentTable[t],Aa.floatView[0]}const QC={toHalfFloat:Rb,fromHalfFloat:Cb},mn=new V,qc=new ie;class Ke{constructor(t,e,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=a,this.usage=Mp,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,a){t*=this.itemSize,a*=e.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=e.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,a=this.count;e<a;e++)qc.fromBufferAttribute(this,e),qc.applyMatrix3(t),this.setXY(e,qc.x,qc.y);else if(this.itemSize===3)for(let e=0,a=this.count;e<a;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix3(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let e=0,a=this.count;e<a;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let a=this.array[t*this.itemSize+e];return this.normalized&&(a=Ii(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=Ve(a,this.array)),this.array[t*this.itemSize+e]=a,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,a){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),a=Ve(a,this.array)),this.array[t+0]=e,this.array[t+1]=a,this}setXYZ(t,e,a,o){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),a=Ve(a,this.array),o=Ve(o,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,e,a,o,c){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),a=Ve(a,this.array),o=Ve(o,this.array),c=Ve(c,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mp&&(t.usage=this.usage),t}}class zy extends Ke{constructor(t,e,a){super(new Uint16Array(t),e,a)}}class By extends Ke{constructor(t,e,a){super(new Uint32Array(t),e,a)}}class jn extends Ke{constructor(t,e,a){super(new Float32Array(t),e,a)}}let Db=0;const Ti=new ye,pd=new cn,Fs=new V,fi=new di,ul=new di,Cn=new V;class pi extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ly(t)?By:zy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,a=0){this.groups.push({start:t,count:e,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,e,a){return Ti.makeTranslation(t,e,a),this.applyMatrix4(Ti),this}scale(t,e,a){return Ti.makeScale(t,e,a),this.applyMatrix4(Ti),this}lookAt(t){return pd.lookAt(t),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new jn(a,3))}else{for(let a=0,o=e.count;a<o;a++){const c=t[a];e.setXYZ(a,c.x,c.y,c.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const c=e[a];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const a=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let c=0,u=e.length;c<u;c++){const f=e[c];ul.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(fi.min,ul.min),fi.expandByPoint(Cn),Cn.addVectors(fi.max,ul.max),fi.expandByPoint(Cn)):(fi.expandByPoint(ul.min),fi.expandByPoint(ul.max))}fi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Cn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Cn));if(e)for(let c=0,u=e.length;c<u;c++){const f=e[c],p=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Cn.fromBufferAttribute(f,d),p&&(Fs.fromBufferAttribute(t,d),Cn.add(Fs)),o=Math.max(o,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=e.position,o=e.normal,c=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let I=0;I<a.count;I++)f[I]=new V,p[I]=new V;const d=new V,g=new V,_=new V,v=new ie,y=new ie,M=new ie,E=new V,S=new V;function x(I,C,T){d.fromBufferAttribute(a,I),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,T),v.fromBufferAttribute(c,I),y.fromBufferAttribute(c,C),M.fromBufferAttribute(c,T),g.sub(d),_.sub(d),y.sub(v),M.sub(v);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(H),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(H),f[I].add(E),f[C].add(E),f[T].add(E),p[I].add(S),p[C].add(S),p[T].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let I=0,C=O.length;I<C;++I){const T=O[I],H=T.start,Z=T.count;for(let G=H,et=H+Z;G<et;G+=3)x(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const w=new V,A=new V,P=new V,L=new V;function z(I){P.fromBufferAttribute(o,I),L.copy(P);const C=f[I];w.copy(C),w.sub(P.multiplyScalar(P.dot(C))).normalize(),A.crossVectors(L,C);const H=A.dot(p[I])<0?-1:1;u.setXYZW(I,w.x,w.y,w.z,H)}for(let I=0,C=O.length;I<C;++I){const T=O[I],H=T.start,Z=T.count;for(let G=H,et=H+Z;G<et;G+=3)z(t.getX(G+0)),z(t.getX(G+1)),z(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const o=new V,c=new V,u=new V,f=new V,p=new V,d=new V,g=new V,_=new V;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),E=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(e,M),c.fromBufferAttribute(e,E),u.fromBufferAttribute(e,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,S),f.add(g),p.add(g),d.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=e.count;v<y;v+=3)o.fromBufferAttribute(e,v+0),c.fromBufferAttribute(e,v+1),u.fromBufferAttribute(e,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,a=t.count;e<a;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,p){const d=f.array,g=f.itemSize,_=f.normalized,v=new d.constructor(p.length*g);let y=0,M=0;for(let E=0,S=p.length;E<S;E++){f.isInterleavedBufferAttribute?y=p[E]*f.data.stride+f.offset:y=p[E]*g;for(let x=0;x<g;x++)v[M++]=d[y++]}return new Ke(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pi,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,a);e.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,a);p.push(y)}e.morphAttributes[f]=p}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(e));const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(e))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const h_=new ye,Hr=new wl,Yc=new Oa,d_=new V,jc=new V,Zc=new V,Kc=new V,md=new V,Qc=new V,p_=new V,Jc=new V;class Dn extends cn{constructor(t=new pi,e=new Vp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const o=e[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,e){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;e.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){Qc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=f[p],_=c[p];g!==0&&(md.fromBufferAttribute(_,t),u?Qc.addScaledVector(md,g):Qc.addScaledVector(md.sub(e),g))}e.add(Qc)}return e}raycast(t,e){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Yc.copy(a.boundingSphere),Yc.applyMatrix4(c),Hr.copy(t.ray).recast(t.near),!(Yc.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Yc,d_)===null||Hr.origin.distanceToSquared(d_)>(t.far-t.near)**2))&&(h_.copy(c).invert(),Hr.copy(t.ray).applyMatrix4(h_),!(a.boundingBox!==null&&Hr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,e,Hr)))}_computeIntersections(t,e,a){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=u[S.materialIndex],O=Math.max(S.start,y.start),w=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=O,P=w;A<P;A+=3){const L=f.getX(A),z=f.getX(A+1),I=f.getX(A+2);o=$c(this,x,t,a,d,g,_,L,z,I),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,e.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const O=f.getX(S),w=f.getX(S+1),A=f.getX(S+2);o=$c(this,u,t,a,d,g,_,O,w,A),o&&(o.faceIndex=Math.floor(S/3),e.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=u[S.materialIndex],O=Math.max(S.start,y.start),w=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let A=O,P=w;A<P;A+=3){const L=A,z=A+1,I=A+2;o=$c(this,x,t,a,d,g,_,L,z,I),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,e.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(p.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const O=S,w=S+1,A=S+2;o=$c(this,u,t,a,d,g,_,O,w,A),o&&(o.faceIndex=Math.floor(S/3),e.push(o))}}}}function Ub(r,t,e,a,o,c,u,f){let p;if(t.side===ei?p=a.intersectTriangle(u,c,o,!0,f):p=a.intersectTriangle(o,c,u,t.side===yr,f),p===null)return null;Jc.copy(f),Jc.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Jc);return d<e.near||d>e.far?null:{distance:d,point:Jc.clone(),object:r}}function $c(r,t,e,a,o,c,u,f,p,d){r.getVertexPosition(f,jc),r.getVertexPosition(p,Zc),r.getVertexPosition(d,Kc);const g=Ub(r,t,e,a,jc,Zc,Kc,p_);if(g){const _=new V;wi.getBarycoord(p_,jc,Zc,Kc,_),o&&(g.uv=wi.getInterpolatedAttribute(o,f,p,d,_,new ie)),c&&(g.uv1=wi.getInterpolatedAttribute(c,f,p,d,_,new ie)),u&&(g.normal=wi.getInterpolatedAttribute(u,f,p,d,_,new V),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new V,materialIndex:0};wi.getNormal(jc,Zc,Kc,v.normal),g.face=v,g.barycoord=_}return g}class Rl extends pi{constructor(t=1,e=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,y=0;M("z","y","x",-1,-1,a,e,t,u,c,0),M("z","y","x",1,-1,a,e,-t,u,c,1),M("x","z","y",1,1,t,a,e,o,u,2),M("x","z","y",1,-1,t,a,-e,o,u,3),M("x","y","z",1,-1,t,e,a,o,c,4),M("x","y","z",-1,-1,t,e,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new jn(d,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(_,2));function M(E,S,x,O,w,A,P,L,z,I,C){const T=A/z,H=P/I,Z=A/2,G=P/2,et=L/2,rt=z+1,N=I+1;let X=0,W=0;const at=new V;for(let B=0;B<N;B++){const nt=B*H-G;for(let gt=0;gt<rt;gt++){const pt=gt*T-Z;at[E]=pt*O,at[S]=nt*w,at[x]=et,d.push(at.x,at.y,at.z),at[E]=0,at[S]=0,at[x]=L>0?1:-1,g.push(at.x,at.y,at.z),_.push(gt/z),_.push(1-B/I),X+=1}}for(let B=0;B<I;B++)for(let nt=0;nt<z;nt++){const gt=v+nt+rt*B,pt=v+nt+rt*(B+1),$=v+(nt+1)+rt*(B+1),mt=v+(nt+1)+rt*B;p.push(gt,pt,mt),p.push(pt,$,mt),W+=6}f.addGroup(y,W,C),y+=W,v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function io(r){const t={};for(const e in r){t[e]={};for(const a in r[e]){const o=r[e][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][a]=null):t[e][a]=o.clone():Array.isArray(o)?t[e][a]=o.slice():t[e][a]=o}}return t}function qn(r){const t={};for(let e=0;e<r.length;e++){const a=io(r[e]);for(const o in a)t[o]=a[o]}return t}function Lb(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Iy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const Nb={clone:io,merge:qn};var Pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Na extends xr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pb,this.fragmentShader=Ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=Lb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?e.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[o]={type:"m4",value:u.toArray()}:e.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}}class Fy extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Ra}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new V,m_=new ie,g_=new ie;class ti extends Fy{constructor(t=50,e=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,a){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cr.x,cr.y).multiplyScalar(-t/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(cr.x,cr.y).multiplyScalar(-t/cr.z)}getViewSize(t,e){return this.getViewBounds(t,m_,g_),e.subVectors(g_,m_)}setViewOffset(t,e,a,o,c,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yl*.5*this.fov)/this.zoom,a=2*e,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,e-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,e,e-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hs=-90,Vs=1;class zb extends cn{constructor(t,e,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(Hs,Vs,t,e);o.layers=this.layers,this.add(o);const c=new ti(Hs,Vs,t,e);c.layers=this.layers,this.add(c);const u=new ti(Hs,Vs,t,e);u.layers=this.layers,this.add(u);const f=new ti(Hs,Vs,t,e);f.layers=this.layers,this.add(f);const p=new ti(Hs,Vs,t,e);p.layers=this.layers,this.add(p);const d=new ti(Hs,Vs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[a,o,c,u,f,p]=e;for(const d of e)this.remove(d);if(t===Ra)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Eu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(e,c),t.setRenderTarget(a,1,o),t.render(e,u),t.setRenderTarget(a,2,o),t.render(e,f),t.setRenderTarget(a,3,o),t.render(e,p),t.setRenderTarget(a,4,o),t.render(e,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,o),t.render(e,g),t.setRenderTarget(_,v,y),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Hy extends Pn{constructor(t,e,a,o,c,u,f,p,d,g){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,a,o,c,u,f,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bb extends La{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Hy(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Rl(5,5,5),c=new Na({name:"CubemapFromEquirect",uniforms:io(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:vr});c.uniforms.tEquirect.value=e;const u=new Dn(o,c),f=e.minFilter;return e.minFilter===pr&&(e.minFilter=Fi),new zb(1,10,this).update(t,u),e.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,e,a,o){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,a,o);t.setRenderTarget(c)}}const gd=new V,Ib=new V,Fb=new pe;class Qi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,o){return this.normal.set(t,e,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){const o=gd.subVectors(a,e).cross(Ib.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const a=t.delta(gd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:e.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const a=e||Fb.getNormalMatrix(t),o=this.coplanarPoint(gd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Oa,tu=new V;class Gp{constructor(t=new Qi,e=new Qi,a=new Qi,o=new Qi,c=new Qi,u=new Qi){this.planes=[t,e,a,o,c,u]}set(t,e,a,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(a),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const e=this.planes;for(let a=0;a<6;a++)e[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,e=Ra){const a=this.planes,o=t.elements,c=o[0],u=o[1],f=o[2],p=o[3],d=o[4],g=o[5],_=o[6],v=o[7],y=o[8],M=o[9],E=o[10],S=o[11],x=o[12],O=o[13],w=o[14],A=o[15];if(a[0].setComponents(p-c,v-d,S-y,A-x).normalize(),a[1].setComponents(p+c,v+d,S+y,A+x).normalize(),a[2].setComponents(p+u,v+g,S+M,A+O).normalize(),a[3].setComponents(p-u,v-g,S-M,A-O).normalize(),a[4].setComponents(p-f,v-_,S-E,A-w).normalize(),e===Ra)a[5].setComponents(p+f,v+_,S+E,A+w).normalize();else if(e===Eu)a[5].setComponents(f,_,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(t){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){const e=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(e[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let a=0;a<6;a++){const o=e[a];if(tu.x=o.normal.x>0?t.max.x:t.min.x,tu.y=o.normal.y>0?t.max.y:t.min.y,tu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(tu)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let a=0;a<6;a++)if(e[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vy(){let r=null,t=!1,e=null,a=null;function o(c,u){e(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){e=c},setContext:function(c){r=c}}}function Hb(r){const t=new WeakMap;function e(f,p){const d=f.array,g=f.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,d,g),f.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,d){const g=p.array,_=p.updateRanges;if(r.bindBuffer(d,f),_.length===0)r.bufferSubData(d,0,g);else{_.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<_.length;y++){const M=_[v],E=_[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,_[v]=E)}_.length=v+1;for(let y=0,M=_.length;y<M;y++){const E=_[y];r.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(r.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,e(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}class oo extends pi{constructor(t=1,e=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:a,heightSegments:o};const c=t/2,u=e/2,f=Math.floor(a),p=Math.floor(o),d=f+1,g=p+1,_=t/f,v=e/p,y=[],M=[],E=[],S=[];for(let x=0;x<g;x++){const O=x*v-u;for(let w=0;w<d;w++){const A=w*_-c;M.push(A,-O,0),E.push(0,0,1),S.push(w/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<f;O++){const w=O+d*x,A=O+d*(x+1),P=O+1+d*(x+1),L=O+1+d*x;y.push(w,A,L),y.push(A,P,L)}this.setIndex(y),this.setAttribute("position",new jn(M,3)),this.setAttribute("normal",new jn(E,3)),this.setAttribute("uv",new jn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$b=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vE="gl_FragColor = linearToOutputTexel( gl_FragColor );",_E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ST=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ET=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Vb,alphahash_pars_fragment:Gb,alphamap_fragment:kb,alphamap_pars_fragment:Wb,alphatest_fragment:Xb,alphatest_pars_fragment:qb,aomap_fragment:Yb,aomap_pars_fragment:jb,batching_pars_vertex:Zb,batching_vertex:Kb,begin_vertex:Qb,beginnormal_vertex:Jb,bsdfs:$b,iridescence_fragment:tE,bumpmap_pars_fragment:eE,clipping_planes_fragment:nE,clipping_planes_pars_fragment:iE,clipping_planes_pars_vertex:aE,clipping_planes_vertex:rE,color_fragment:sE,color_pars_fragment:oE,color_pars_vertex:lE,color_vertex:cE,common:uE,cube_uv_reflection_fragment:fE,defaultnormal_vertex:hE,displacementmap_pars_vertex:dE,displacementmap_vertex:pE,emissivemap_fragment:mE,emissivemap_pars_fragment:gE,colorspace_fragment:vE,colorspace_pars_fragment:_E,envmap_fragment:yE,envmap_common_pars_fragment:xE,envmap_pars_fragment:SE,envmap_pars_vertex:ME,envmap_physical_pars_fragment:NE,envmap_vertex:bE,fog_vertex:EE,fog_pars_vertex:TE,fog_fragment:AE,fog_pars_fragment:wE,gradientmap_pars_fragment:RE,lightmap_pars_fragment:CE,lights_lambert_fragment:DE,lights_lambert_pars_fragment:UE,lights_pars_begin:LE,lights_toon_fragment:PE,lights_toon_pars_fragment:OE,lights_phong_fragment:zE,lights_phong_pars_fragment:BE,lights_physical_fragment:IE,lights_physical_pars_fragment:FE,lights_fragment_begin:HE,lights_fragment_maps:VE,lights_fragment_end:GE,logdepthbuf_fragment:kE,logdepthbuf_pars_fragment:WE,logdepthbuf_pars_vertex:XE,logdepthbuf_vertex:qE,map_fragment:YE,map_pars_fragment:jE,map_particle_fragment:ZE,map_particle_pars_fragment:KE,metalnessmap_fragment:QE,metalnessmap_pars_fragment:JE,morphinstance_vertex:$E,morphcolor_vertex:tT,morphnormal_vertex:eT,morphtarget_pars_vertex:nT,morphtarget_vertex:iT,normal_fragment_begin:aT,normal_fragment_maps:rT,normal_pars_fragment:sT,normal_pars_vertex:oT,normal_vertex:lT,normalmap_pars_fragment:cT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:fT,clearcoat_pars_fragment:hT,iridescence_pars_fragment:dT,opaque_fragment:pT,packing:mT,premultiplied_alpha_fragment:gT,project_vertex:vT,dithering_fragment:_T,dithering_pars_fragment:yT,roughnessmap_fragment:xT,roughnessmap_pars_fragment:ST,shadowmap_pars_fragment:MT,shadowmap_pars_vertex:bT,shadowmap_vertex:ET,shadowmask_pars_fragment:TT,skinbase_vertex:AT,skinning_pars_vertex:wT,skinning_vertex:RT,skinnormal_vertex:CT,specularmap_fragment:DT,specularmap_pars_fragment:UT,tonemapping_fragment:LT,tonemapping_pars_fragment:NT,transmission_fragment:PT,transmission_pars_fragment:OT,uv_pars_fragment:zT,uv_pars_vertex:BT,uv_vertex:IT,worldpos_vertex:FT,background_vert:HT,background_frag:VT,backgroundCube_vert:GT,backgroundCube_frag:kT,cube_vert:WT,cube_frag:XT,depth_vert:qT,depth_frag:YT,distanceRGBA_vert:jT,distanceRGBA_frag:ZT,equirect_vert:KT,equirect_frag:QT,linedashed_vert:JT,linedashed_frag:$T,meshbasic_vert:tA,meshbasic_frag:eA,meshlambert_vert:nA,meshlambert_frag:iA,meshmatcap_vert:aA,meshmatcap_frag:rA,meshnormal_vert:sA,meshnormal_frag:oA,meshphong_vert:lA,meshphong_frag:cA,meshphysical_vert:uA,meshphysical_frag:fA,meshtoon_vert:hA,meshtoon_frag:dA,points_vert:pA,points_frag:mA,shadow_vert:gA,shadow_frag:vA,sprite_vert:_A,sprite_frag:yA},It={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ji={basic:{uniforms:qn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:qn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Gt(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:qn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:qn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:qn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Gt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:qn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:qn([It.points,It.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:qn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:qn([It.common,It.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:qn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:qn([It.sprite,It.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:qn([It.common,It.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:qn([It.lights,It.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ji.physical={uniforms:qn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const eu={r:0,b:0,g:0},Gr=new $i,xA=new ye;function SA(r,t,e,a,o,c,u){const f=new Gt(0);let p=c===!0?0:1,d,g,_=null,v=0,y=null;function M(O){let w=O.isScene===!0?O.background:null;return w&&w.isTexture&&(w=(O.backgroundBlurriness>0?e:t).get(w)),w}function E(O){let w=!1;const A=M(O);A===null?x(f,p):A&&A.isColor&&(x(A,1),w=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(O,w){const A=M(w);A&&(A.isCubeTexture||A.mapping===Nu)?(g===void 0&&(g=new Dn(new Rl(1,1,1),new Na({name:"BackgroundCubeMaterial",uniforms:io(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Gr.copy(w.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(xA.makeRotationFromEuler(Gr)),g.material.toneMapped=Ue.getTransfer(A.colorSpace)!==qe,(_!==A||v!==A.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=A,v=A.version,y=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new Dn(new oo(2,2),new Na({name:"BackgroundMaterial",uniforms:io(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Ue.getTransfer(A.colorSpace)!==qe,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||v!==A.version||y!==r.toneMapping)&&(d.material.needsUpdate=!0,_=A,v=A.version,y=r.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null))}function x(O,w){O.getRGB(eu,Iy(r)),a.buffers.color.setClear(eu.r,eu.g,eu.b,w,u)}return{getClearColor:function(){return f},setClearColor:function(O,w=1){f.set(O),p=w,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,x(f,p)},render:E,addToRenderList:S}}function MA(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function f(T,H,Z,G,et){let rt=!1;const N=_(G,Z,H);c!==N&&(c=N,d(c.object)),rt=y(T,G,Z,et),rt&&M(T,G,Z,et),et!==null&&t.update(et,r.ELEMENT_ARRAY_BUFFER),(rt||u)&&(u=!1,A(T,H,Z,G),et!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function p(){return r.createVertexArray()}function d(T){return r.bindVertexArray(T)}function g(T){return r.deleteVertexArray(T)}function _(T,H,Z){const G=Z.wireframe===!0;let et=a[T.id];et===void 0&&(et={},a[T.id]=et);let rt=et[H.id];rt===void 0&&(rt={},et[H.id]=rt);let N=rt[G];return N===void 0&&(N=v(p()),rt[G]=N),N}function v(T){const H=[],Z=[],G=[];for(let et=0;et<e;et++)H[et]=0,Z[et]=0,G[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:G,object:T,attributes:{},index:null}}function y(T,H,Z,G){const et=c.attributes,rt=H.attributes;let N=0;const X=Z.getAttributes();for(const W in X)if(X[W].location>=0){const B=et[W];let nt=rt[W];if(nt===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(nt=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(nt=T.instanceColor)),B===void 0||B.attribute!==nt||nt&&B.data!==nt.data)return!0;N++}return c.attributesNum!==N||c.index!==G}function M(T,H,Z,G){const et={},rt=H.attributes;let N=0;const X=Z.getAttributes();for(const W in X)if(X[W].location>=0){let B=rt[W];B===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(B=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(B=T.instanceColor));const nt={};nt.attribute=B,B&&B.data&&(nt.data=B.data),et[W]=nt,N++}c.attributes=et,c.attributesNum=N,c.index=G}function E(){const T=c.newAttributes;for(let H=0,Z=T.length;H<Z;H++)T[H]=0}function S(T){x(T,0)}function x(T,H){const Z=c.newAttributes,G=c.enabledAttributes,et=c.attributeDivisors;Z[T]=1,G[T]===0&&(r.enableVertexAttribArray(T),G[T]=1),et[T]!==H&&(r.vertexAttribDivisor(T,H),et[T]=H)}function O(){const T=c.newAttributes,H=c.enabledAttributes;for(let Z=0,G=H.length;Z<G;Z++)H[Z]!==T[Z]&&(r.disableVertexAttribArray(Z),H[Z]=0)}function w(T,H,Z,G,et,rt,N){N===!0?r.vertexAttribIPointer(T,H,Z,et,rt):r.vertexAttribPointer(T,H,Z,G,et,rt)}function A(T,H,Z,G){E();const et=G.attributes,rt=Z.getAttributes(),N=H.defaultAttributeValues;for(const X in rt){const W=rt[X];if(W.location>=0){let at=et[X];if(at===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(at=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(at=T.instanceColor)),at!==void 0){const B=at.normalized,nt=at.itemSize,gt=t.get(at);if(gt===void 0)continue;const pt=gt.buffer,$=gt.type,mt=gt.bytesPerElement,vt=$===r.INT||$===r.UNSIGNED_INT||at.gpuType===Lp;if(at.isInterleavedBufferAttribute){const ht=at.data,Mt=ht.stride,Ft=at.offset;if(ht.isInstancedInterleavedBuffer){for(let $t=0;$t<W.locationSize;$t++)x(W.location+$t,ht.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let $t=0;$t<W.locationSize;$t++)S(W.location+$t);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let $t=0;$t<W.locationSize;$t++)w(W.location+$t,nt/W.locationSize,$,B,Mt*mt,(Ft+nt/W.locationSize*$t)*mt,vt)}else{if(at.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)x(W.location+ht,at.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ht=0;ht<W.locationSize;ht++)S(W.location+ht);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ht=0;ht<W.locationSize;ht++)w(W.location+ht,nt/W.locationSize,$,B,nt*mt,nt/W.locationSize*ht*mt,vt)}}else if(N!==void 0){const B=N[X];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(W.location,B);break;case 3:r.vertexAttrib3fv(W.location,B);break;case 4:r.vertexAttrib4fv(W.location,B);break;default:r.vertexAttrib1fv(W.location,B)}}}}O()}function P(){I();for(const T in a){const H=a[T];for(const Z in H){const G=H[Z];for(const et in G)g(G[et].object),delete G[et];delete H[Z]}delete a[T]}}function L(T){if(a[T.id]===void 0)return;const H=a[T.id];for(const Z in H){const G=H[Z];for(const et in G)g(G[et].object),delete G[et];delete H[Z]}delete a[T.id]}function z(T){for(const H in a){const Z=a[H];if(Z[T.id]===void 0)continue;const G=Z[T.id];for(const et in G)g(G[et].object),delete G[et];delete Z[T.id]}}function I(){C(),u=!0,c!==o&&(c=o,d(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:S,disableUnusedAttributes:O}}function bA(r,t,e){let a;function o(d){a=d}function c(d,g){r.drawArrays(a,d,g),e.update(g,a,1)}function u(d,g,_){_!==0&&(r.drawArraysInstanced(a,d,g,_),e.update(g,a,_))}function f(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];e.update(y,a,1)}function p(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)u(d[M],g[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E]*v[E];e.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function EA(r,t,e,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Vn&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const I=z===Al&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ua&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Yn&&!I)}function p(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=e.logarithmicDepthBuffer===!0,v=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:O,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:P,maxSamples:L}}function TA(r){const t=this;let e=null,a=0,o=!1,c=!1;const u=new Qi,f=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||o;return o=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){e=g(_,v,0)},this.setState=function(_,v,y){const M=_.clippingPlanes,E=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!o||M===null||M.length===0||c&&!S)c?g(null):d();else{const O=c?0:a,w=O*4;let A=x.clippingState||null;p.value=A,A=g(M,v,w,y);for(let P=0;P!==w;++P)A[P]=e[P];x.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=O}};function d(){p.value!==e&&(p.value=e,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,M){const E=_!==null?_.length:0;let S=null;if(E!==0){if(S=p.value,M!==!0||S===null){const x=y+E*4,O=v.matrixWorldInverse;f.getNormalMatrix(O),(S===null||S.length<x)&&(S=new Float32Array(x));for(let w=0,A=y;w!==E;++w,A+=4)u.copy(_[w]).applyMatrix4(O,f),u.normal.toArray(S,A),S[A+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,S}}function AA(r){let t=new WeakMap;function e(u,f){return f===Xd?u.mapping=Js:f===qd&&(u.mapping=$s),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Xd||f===qd)if(t.has(u)){const p=t.get(u).texture;return e(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new Bb(p.height);return d.fromEquirectangularTexture(r,u),t.set(u,d),u.addEventListener("dispose",o),e(d.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}class kp extends Fy{constructor(t=-1,e=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,f=o+e,p=o-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qs=4,v_=[.125,.215,.35,.446,.526,.582],jr=20,vd=new kp,__=new Gt;let _d=null,yd=0,xd=0,Sd=!1;const Xr=(1+Math.sqrt(5))/2,Gs=1/Xr,y_=[new V(-Xr,Gs,0),new V(Xr,Gs,0),new V(-Gs,0,Xr),new V(Gs,0,Xr),new V(0,Xr,-Gs),new V(0,Xr,Gs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class x_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,a=.1,o=100){_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,a,o,c),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_d,yd,xd),this._renderer.xr.enabled=Sd,t.scissorTest=!1,nu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=e||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,a={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Al,format:Vn,colorSpace:ao,depthBuffer:!1},o=S_(t,e,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(t,e,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wA(c)),this._blurMaterial=RA(c,t,e)}return o}_compileMaterial(t){const e=new Dn(this._lodPlanes[0],t);this._renderer.compile(e,vd)}_sceneToCubeUV(t,e,a,o){const f=new ti(90,1,e,a),p=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(__),g.toneMapping=_r,g.autoClear=!1;const y=new Vp({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),M=new Dn(new Rl,y);let E=!1;const S=t.background;S?S.isColor&&(y.color.copy(S),t.background=null,E=!0):(y.color.copy(__),E=!0);for(let x=0;x<6;x++){const O=x%3;O===0?(f.up.set(0,p[x],0),f.lookAt(d[x],0,0)):O===1?(f.up.set(0,0,p[x]),f.lookAt(0,d[x],0)):(f.up.set(0,p[x],0),f.lookAt(0,0,d[x]));const w=this._cubeSize;nu(o,O*w,x>2?w:0,w,w),g.setRenderTarget(o),E&&g.render(M,f),g.render(t,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=v,g.autoClear=_,t.background=S}_textureToCubeUV(t,e){const a=this._renderer,o=t.mapping===Js||t.mapping===$s;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Dn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;nu(e,0,0,3*p,2*p),a.setRenderTarget(e),a.render(u,vd)}_applyPMREM(t){const e=this._renderer,a=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=y_[(o-c-1)%y_.length];this._blur(t,c-1,c,u,f)}e.autoClear=a}_blur(t,e,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,e,a,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Dn(this._lodPlanes[o],d),v=d.uniforms,y=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*jr-1),E=c/M,S=isFinite(c)?1+Math.floor(g*E):jr;S>jr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${jr}`);const x=[];let O=0;for(let z=0;z<jr;++z){const I=z/E,C=Math.exp(-I*I/2);x.push(C),z===0?O+=C:z<S&&(O+=2*C)}for(let z=0;z<x.length;z++)x[z]=x[z]/O;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-a;const A=this._sizeLods[o],P=3*A*(o>w-qs?o-w+qs:0),L=4*(this._cubeSize-A);nu(e,P,L,3*A,2*A),p.setRenderTarget(e),p.render(_,vd)}}function wA(r){const t=[],e=[],a=[];let o=r;const c=r-qs+1+v_.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);e.push(f);let p=1/f;u>r-qs?p=v_[u-r+qs-1]:u===0&&(p=0),a.push(p);const d=1/(f-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,E=3,S=2,x=1,O=new Float32Array(E*M*y),w=new Float32Array(S*M*y),A=new Float32Array(x*M*y);for(let L=0;L<y;L++){const z=L%3*2/3-1,I=L>2?0:-1,C=[z,I,0,z+2/3,I,0,z+2/3,I+1,0,z,I,0,z+2/3,I+1,0,z,I+1,0];O.set(C,E*M*L),w.set(v,S*M*L);const T=[L,L,L,L,L,L];A.set(T,x*M*L)}const P=new pi;P.setAttribute("position",new Ke(O,E)),P.setAttribute("uv",new Ke(w,S)),P.setAttribute("faceIndex",new Ke(A,x)),t.push(P),o>qs&&o--}return{lodPlanes:t,sizeLods:e,sigmas:a}}function S_(r,t,e){const a=new La(r,t,e);return a.texture.mapping=Nu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function nu(r,t,e,a,o){r.viewport.set(t,e,a,o),r.scissor.set(t,e,a,o)}function RA(r,t,e){const a=new Float32Array(jr),o=new V(0,1,0);return new Na({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function M_(){return new Na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function b_(){return new Na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Wp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CA(r){let t=new WeakMap,e=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===Xd||p===qd,g=p===Js||p===$s;if(d||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return e===null&&(e=new x_(r)),_=d?e.fromEquirectangular(f,_):e.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return d&&y&&y.height>0||g&&y&&o(y)?(e===null&&(e=new x_(r)),_=d?e.fromEquirectangular(f):e.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let p=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:a,dispose:u}}function DA(r){const t={};function e(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return e(a)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(a){const o=e(a);return o===null&&ml("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function UA(r,t,e,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let S=0,x=E.length;S<x;S++)t.remove(E[S])}v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,e.memory.geometries++),v}function p(_){const v=_.attributes;for(const M in v)t.update(v[M],r.ARRAY_BUFFER);const y=_.morphAttributes;for(const M in y){const E=y[M];for(let S=0,x=E.length;S<x;S++)t.update(E[S],r.ARRAY_BUFFER)}}function d(_){const v=[],y=_.index,M=_.attributes.position;let E=0;if(y!==null){const O=y.array;E=y.version;for(let w=0,A=O.length;w<A;w+=3){const P=O[w+0],L=O[w+1],z=O[w+2];v.push(P,L,L,z,z,P)}}else if(M!==void 0){const O=M.array;E=M.version;for(let w=0,A=O.length/3-1;w<A;w+=3){const P=w+0,L=w+1,z=w+2;v.push(P,L,L,z,z,P)}}else return;const S=new(Ly(v)?By:zy)(v,1);S.version=E;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function LA(r,t,e){let a;function o(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function p(v,y){r.drawElements(a,y,c,v*u),e.update(y,a,1)}function d(v,y,M){M!==0&&(r.drawElementsInstanced(a,y,c,v*u,M),e.update(y,a,M))}function g(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];e.update(S,a,1)}function _(v,y,M,E){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,E,0,M);let x=0;for(let O=0;O<M;O++)x+=y[O]*E[O];e.update(x,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function NA(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(e.calls++,u){case r.TRIANGLES:e.triangles+=f*(c/3);break;case r.LINES:e.lines+=f*(c/2);break;case r.LINE_STRIP:e.lines+=f*(c-1);break;case r.LINE_LOOP:e.lines+=f*c;break;case r.POINTS:e.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:a}}function PA(r,t,e){const a=new WeakMap,o=new Le;function c(u,f,p){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let C=function(){z.dispose(),a.delete(f),f.removeEventListener("dispose",C)};v!==void 0&&v.texture.dispose();const y=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let w=0;y===!0&&(w=1),M===!0&&(w=2),E===!0&&(w=3);let A=f.attributes.position.count*w,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const L=new Float32Array(A*P*4*_),z=new Py(L,A,P,_);z.type=Yn,z.needsUpdate=!0;const I=w*4;for(let T=0;T<_;T++){const H=S[T],Z=x[T],G=O[T],et=A*P*4*T;for(let rt=0;rt<H.count;rt++){const N=rt*I;y===!0&&(o.fromBufferAttribute(H,rt),L[et+N+0]=o.x,L[et+N+1]=o.y,L[et+N+2]=o.z,L[et+N+3]=0),M===!0&&(o.fromBufferAttribute(Z,rt),L[et+N+4]=o.x,L[et+N+5]=o.y,L[et+N+6]=o.z,L[et+N+7]=0),E===!0&&(o.fromBufferAttribute(G,rt),L[et+N+8]=o.x,L[et+N+9]=o.y,L[et+N+10]=o.z,L[et+N+11]=G.itemSize===4?o.w:1)}}v={count:_,texture:z,size:new ie(A,P)},a.set(f,v),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,e);else{let y=0;for(let E=0;E<d.length;E++)y+=d[E];const M=f.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",M),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function OA(r,t,e,a){let o=new WeakMap;function c(p){const d=a.render.frame,g=p.geometry,_=t.get(p,g);if(o.get(_)!==d&&(t.update(_),o.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(e.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&e.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:c,dispose:u}}class Gy extends Pn{constructor(t,e,a,o,c,u,f,p,d,g=Zs){if(g!==Zs&&g!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===Zs&&(a=Zr),a===void 0&&g===eo&&(a=to),super(null,o,c,u,f,p,g,a,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=f!==void 0?f:gn,this.minFilter=p!==void 0?p:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ky=new Pn,E_=new Gy(1,1),Wy=new Py,Xy=new _b,qy=new Hy,T_=[],A_=[],w_=new Float32Array(16),R_=new Float32Array(9),C_=new Float32Array(4);function lo(r,t,e){const a=r[0];if(a<=0||a>0)return r;const o=t*e;let c=T_[o];if(c===void 0&&(c=new Float32Array(o),T_[o]=c),t!==0){a.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=e,r[u].toArray(c,f)}return c}function Mn(r,t){if(r.length!==t.length)return!1;for(let e=0,a=r.length;e<a;e++)if(r[e]!==t[e])return!1;return!0}function bn(r,t){for(let e=0,a=t.length;e<a;e++)r[e]=t[e]}function Ou(r,t){let e=A_[t];e===void 0&&(e=new Int32Array(t),A_[t]=e);for(let a=0;a!==t;++a)e[a]=r.allocateTextureUnit();return e}function zA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function BA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;r.uniform2fv(this.addr,t),bn(e,t)}}function IA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Mn(e,t))return;r.uniform3fv(this.addr,t),bn(e,t)}}function FA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;r.uniform4fv(this.addr,t),bn(e,t)}}function HA(r,t){const e=this.cache,a=t.elements;if(a===void 0){if(Mn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,a))return;C_.set(a),r.uniformMatrix2fv(this.addr,!1,C_),bn(e,a)}}function VA(r,t){const e=this.cache,a=t.elements;if(a===void 0){if(Mn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,a))return;R_.set(a),r.uniformMatrix3fv(this.addr,!1,R_),bn(e,a)}}function GA(r,t){const e=this.cache,a=t.elements;if(a===void 0){if(Mn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,a))return;w_.set(a),r.uniformMatrix4fv(this.addr,!1,w_),bn(e,a)}}function kA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function WA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;r.uniform2iv(this.addr,t),bn(e,t)}}function XA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;r.uniform3iv(this.addr,t),bn(e,t)}}function qA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;r.uniform4iv(this.addr,t),bn(e,t)}}function YA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function jA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;r.uniform2uiv(this.addr,t),bn(e,t)}}function ZA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;r.uniform3uiv(this.addr,t),bn(e,t)}}function KA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;r.uniform4uiv(this.addr,t),bn(e,t)}}function QA(r,t,e){const a=this.cache,o=e.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(E_.compareFunction=Uy,c=E_):c=ky,e.setTexture2D(t||c,o)}function JA(r,t,e){const a=this.cache,o=e.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),e.setTexture3D(t||Xy,o)}function $A(r,t,e){const a=this.cache,o=e.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),e.setTextureCube(t||qy,o)}function t2(r,t,e){const a=this.cache,o=e.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),e.setTexture2DArray(t||Wy,o)}function e2(r){switch(r){case 5126:return zA;case 35664:return BA;case 35665:return IA;case 35666:return FA;case 35674:return HA;case 35675:return VA;case 35676:return GA;case 5124:case 35670:return kA;case 35667:case 35671:return WA;case 35668:case 35672:return XA;case 35669:case 35673:return qA;case 5125:return YA;case 36294:return jA;case 36295:return ZA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return t2}}function n2(r,t){r.uniform1fv(this.addr,t)}function i2(r,t){const e=lo(t,this.size,2);r.uniform2fv(this.addr,e)}function a2(r,t){const e=lo(t,this.size,3);r.uniform3fv(this.addr,e)}function r2(r,t){const e=lo(t,this.size,4);r.uniform4fv(this.addr,e)}function s2(r,t){const e=lo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function o2(r,t){const e=lo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function l2(r,t){const e=lo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function c2(r,t){r.uniform1iv(this.addr,t)}function u2(r,t){r.uniform2iv(this.addr,t)}function f2(r,t){r.uniform3iv(this.addr,t)}function h2(r,t){r.uniform4iv(this.addr,t)}function d2(r,t){r.uniform1uiv(this.addr,t)}function p2(r,t){r.uniform2uiv(this.addr,t)}function m2(r,t){r.uniform3uiv(this.addr,t)}function g2(r,t){r.uniform4uiv(this.addr,t)}function v2(r,t,e){const a=this.cache,o=t.length,c=Ou(e,o);Mn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)e.setTexture2D(t[u]||ky,c[u])}function _2(r,t,e){const a=this.cache,o=t.length,c=Ou(e,o);Mn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)e.setTexture3D(t[u]||Xy,c[u])}function y2(r,t,e){const a=this.cache,o=t.length,c=Ou(e,o);Mn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)e.setTextureCube(t[u]||qy,c[u])}function x2(r,t,e){const a=this.cache,o=t.length,c=Ou(e,o);Mn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)e.setTexture2DArray(t[u]||Wy,c[u])}function S2(r){switch(r){case 5126:return n2;case 35664:return i2;case 35665:return a2;case 35666:return r2;case 35674:return s2;case 35675:return o2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return f2;case 35669:case 35673:return h2;case 5125:return d2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return x2}}class M2{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.setValue=e2(e.type)}}class b2{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S2(e.type)}}class E2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,e[f.id],a)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function D_(r,t){r.seq.push(t),r.map[t.id]=t}function T2(r,t,e){const a=r.name,o=a.length;for(Md.lastIndex=0;;){const c=Md.exec(a),u=Md.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){D_(e,d===void 0?new M2(f,r,t):new b2(f,r,t));break}else{let _=e.map[f];_===void 0&&(_=new E2(f),D_(e,_)),e=_}}}class xu{constructor(t,e){this.seq=[],this.map={};const a=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(e,o),u=t.getUniformLocation(e,c.name);T2(c,u,this)}}setValue(t,e,a,o){const c=this.map[e];c!==void 0&&c.setValue(t,a,o)}setOptional(t,e,a){const o=e[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,e,a,o){for(let c=0,u=e.length;c!==u;++c){const f=e[c],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,e){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in e&&a.push(u)}return a}}function U_(r,t,e){const a=r.createShader(t);return r.shaderSource(a,e),r.compileShader(a),a}const A2=37297;let w2=0;function R2(r,t){const e=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,e.length);for(let u=o;u<c;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${e[u]}`)}return a.join(`
`)}const L_=new pe;function C2(r){Ue._getMatrix(L_,Ue.workingColorSpace,r);const t=`mat3( ${L_.elements.map(e=>e.toFixed(4))} )`;switch(Ue.getTransfer(r)){case Pu:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function N_(r,t,e){const a=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+R2(r.getShaderSource(t),u)}else return o}function D2(r,t){const e=C2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function U2(r,t){let e;switch(t){case D1:e="Linear";break;case U1:e="Reinhard";break;case L1:e="Cineon";break;case Up:e="ACESFilmic";break;case P1:e="AgX";break;case O1:e="Neutral";break;case N1:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const iu=new V;function L2(){Ue.getLuminanceCoefficients(iu);const r=iu.x.toFixed(4),t=iu.y.toFixed(4),e=iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function P2(r){const t=[];for(const e in r){const a=r[e];a!==!1&&t.push("#define "+e+" "+a)}return t.join(`
`)}function O2(r,t){const e={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let f=1;c.type===r.FLOAT_MAT2&&(f=2),c.type===r.FLOAT_MAT3&&(f=3),c.type===r.FLOAT_MAT4&&(f=4),e[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:f}}return e}function gl(r){return r!==""}function P_(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function O_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(r){return r.replace(z2,I2)}const B2=new Map;function I2(r,t){let e=de[t];if(e===void 0){const a=B2.get(t);if(a!==void 0)e=de[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return bp(e)}const F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z_(r){return r.replace(F2,H2)}function H2(r,t,e,a){let o="";for(let c=parseInt(t);c<parseInt(e);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function B_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function V2(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===c1?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ea&&(t="SHADOWMAP_TYPE_VSM"),t}function G2(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Js:case $s:t="ENVMAP_TYPE_CUBE";break;case Nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function k2(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===$s&&(t="ENVMAP_MODE_REFRACTION"),t}function W2(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _y:t="ENVMAP_BLENDING_MULTIPLY";break;case R1:t="ENVMAP_BLENDING_MIX";break;case C1:t="ENVMAP_BLENDING_ADD";break}return t}function X2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:a,maxMip:e}}function q2(r,t,e,a){const o=r.getContext(),c=e.defines;let u=e.vertexShader,f=e.fragmentShader;const p=V2(e),d=G2(e),g=k2(e),_=W2(e),v=X2(e),y=N2(e),M=P2(c),E=o.createProgram();let S,x,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(gl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(gl).join(`
`),x.length>0&&(x+=`
`)):(S=[B_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),x=[B_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_r?"#define TONE_MAPPING":"",e.toneMapping!==_r?de.tonemapping_pars_fragment:"",e.toneMapping!==_r?U2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,D2("linearToOutputTexel",e.outputColorSpace),L2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gl).join(`
`)),u=bp(u),u=P_(u,e),u=O_(u,e),f=bp(f),f=P_(f,e),f=O_(f,e),u=z_(u),f=z_(f),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",e.glslVersion===Zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=O+S+u,A=O+x+f,P=U_(o,o.VERTEX_SHADER,w),L=U_(o,o.FRAGMENT_SHADER,A);o.attachShader(E,P),o.attachShader(E,L),e.index0AttributeName!==void 0?o.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function z(H){if(r.debug.checkShaderErrors){const Z=o.getProgramInfoLog(E).trim(),G=o.getShaderInfoLog(P).trim(),et=o.getShaderInfoLog(L).trim();let rt=!0,N=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,E,P,L);else{const X=N_(o,P,"vertex"),W=N_(o,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+X+`
`+W)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(G===""||et==="")&&(N=!1);N&&(H.diagnostics={runnable:rt,programLog:Z,vertexShader:{log:G,prefix:S},fragmentShader:{log:et,prefix:x}})}o.deleteShader(P),o.deleteShader(L),I=new xu(o,E),C=O2(o,E)}let I;this.getUniforms=function(){return I===void 0&&z(this),I};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(E,A2)),T},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w2++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=L,this}let Y2=0;class j2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(e),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const a of e)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let a=e.get(t);return a===void 0&&(a=new Set,e.set(t,a)),a}_getShaderStage(t){const e=this.shaderCache;let a=e.get(t);return a===void 0&&(a=new Z2(t),e.set(t,a)),a}}class Z2{constructor(t){this.id=Y2++,this.code=t,this.usedTimes=0}}function K2(r,t,e,a,o,c,u){const f=new Hp,p=new j2,d=new Set,g=[],_=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,T,H,Z,G){const et=Z.fog,rt=G.geometry,N=C.isMeshStandardMaterial?Z.environment:null,X=(C.isMeshStandardMaterial?e:t).get(C.envMap||N),W=X&&X.mapping===Nu?X.image.height:null,at=M[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const B=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,nt=B!==void 0?B.length:0;let gt=0;rt.morphAttributes.position!==void 0&&(gt=1),rt.morphAttributes.normal!==void 0&&(gt=2),rt.morphAttributes.color!==void 0&&(gt=3);let pt,$,mt,vt;if(at){const xe=Ji[at];pt=xe.vertexShader,$=xe.fragmentShader}else pt=C.vertexShader,$=C.fragmentShader,p.update(C),mt=p.getVertexShaderID(C),vt=p.getFragmentShaderID(C);const ht=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),Ft=G.isInstancedMesh===!0,$t=G.isBatchedMesh===!0,ge=!!C.map,Yt=!!C.matcap,Ae=!!X,J=!!C.aoMap,hn=!!C.lightMap,he=!!C.bumpMap,Kt=!!C.normalMap,Qt=!!C.displacementMap,we=!!C.emissiveMap,te=!!C.metalnessMap,F=!!C.roughnessMap,D=C.anisotropy>0,lt=C.clearcoat>0,Et=C.dispersion>0,Tt=C.iridescence>0,_t=C.sheen>0,Ht=C.transmission>0,Ut=D&&!!C.anisotropyMap,Lt=lt&&!!C.clearcoatMap,me=lt&&!!C.clearcoatNormalMap,wt=lt&&!!C.clearcoatRoughnessMap,Vt=Tt&&!!C.iridescenceMap,ee=Tt&&!!C.iridescenceThicknessMap,Wt=_t&&!!C.sheenColorMap,Rt=_t&&!!C.sheenRoughnessMap,ce=!!C.specularMap,se=!!C.specularColorMap,Ne=!!C.specularIntensityMap,K=Ht&&!!C.transmissionMap,Ot=Ht&&!!C.thicknessMap,dt=!!C.gradientMap,ft=!!C.alphaMap,zt=C.alphaTest>0,Bt=!!C.alphaHash,ue=!!C.extensions;let Me=_r;C.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Me=r.toneMapping);const Ge={shaderID:at,shaderType:C.type,shaderName:C.name,vertexShader:pt,fragmentShader:$,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:vt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:$t,batchingColor:$t&&G._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&G.instanceColor!==null,instancingMorph:Ft&&G.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ao,alphaToCoverage:!!C.alphaToCoverage,map:ge,matcap:Yt,envMap:Ae,envMapMode:Ae&&X.mapping,envMapCubeUVHeight:W,aoMap:J,lightMap:hn,bumpMap:he,normalMap:Kt,displacementMap:v&&Qt,emissiveMap:we,normalMapObjectSpace:Kt&&C.normalMapType===H1,normalMapTangentSpace:Kt&&C.normalMapType===Dy,metalnessMap:te,roughnessMap:F,anisotropy:D,anisotropyMap:Ut,clearcoat:lt,clearcoatMap:Lt,clearcoatNormalMap:me,clearcoatRoughnessMap:wt,dispersion:Et,iridescence:Tt,iridescenceMap:Vt,iridescenceThicknessMap:ee,sheen:_t,sheenColorMap:Wt,sheenRoughnessMap:Rt,specularMap:ce,specularColorMap:se,specularIntensityMap:Ne,transmission:Ht,transmissionMap:K,thicknessMap:Ot,gradientMap:dt,opaque:C.transparent===!1&&C.blending===js&&C.alphaToCoverage===!1,alphaMap:ft,alphaTest:zt,alphaHash:Bt,combine:C.combine,mapUv:ge&&E(C.map.channel),aoMapUv:J&&E(C.aoMap.channel),lightMapUv:hn&&E(C.lightMap.channel),bumpMapUv:he&&E(C.bumpMap.channel),normalMapUv:Kt&&E(C.normalMap.channel),displacementMapUv:Qt&&E(C.displacementMap.channel),emissiveMapUv:we&&E(C.emissiveMap.channel),metalnessMapUv:te&&E(C.metalnessMap.channel),roughnessMapUv:F&&E(C.roughnessMap.channel),anisotropyMapUv:Ut&&E(C.anisotropyMap.channel),clearcoatMapUv:Lt&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:me&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&E(C.sheenRoughnessMap.channel),specularMapUv:ce&&E(C.specularMap.channel),specularColorMapUv:se&&E(C.specularColorMap.channel),specularIntensityMapUv:Ne&&E(C.specularIntensityMap.channel),transmissionMapUv:K&&E(C.transmissionMap.channel),thicknessMapUv:Ot&&E(C.thicknessMap.channel),alphaMapUv:ft&&E(C.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Kt||D),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!rt.attributes.uv&&(ge||ft),fog:!!et,useFog:C.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Mt,skinning:G.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:gt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:ge&&C.map.isVideoTexture===!0&&Ue.getTransfer(C.map.colorSpace)===qe,decodeVideoTextureEmissive:we&&C.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(C.emissiveMap.colorSpace)===qe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ta,flipSided:C.side===ei,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ue&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&C.extensions.multiDraw===!0||$t)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ge.vertexUv1s=d.has(1),Ge.vertexUv2s=d.has(2),Ge.vertexUv3s=d.has(3),d.clear(),Ge}function x(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)T.push(H),T.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(O(T,C),w(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function O(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function w(C,T){f.disableAll(),T.supportsVertexTextures&&f.enable(0),T.instancing&&f.enable(1),T.instancingColor&&f.enable(2),T.instancingMorph&&f.enable(3),T.matcap&&f.enable(4),T.envMap&&f.enable(5),T.normalMapObjectSpace&&f.enable(6),T.normalMapTangentSpace&&f.enable(7),T.clearcoat&&f.enable(8),T.iridescence&&f.enable(9),T.alphaTest&&f.enable(10),T.vertexColors&&f.enable(11),T.vertexAlphas&&f.enable(12),T.vertexUv1s&&f.enable(13),T.vertexUv2s&&f.enable(14),T.vertexUv3s&&f.enable(15),T.vertexTangents&&f.enable(16),T.anisotropy&&f.enable(17),T.alphaHash&&f.enable(18),T.batching&&f.enable(19),T.dispersion&&f.enable(20),T.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),T.fog&&f.enable(0),T.useFog&&f.enable(1),T.flatShading&&f.enable(2),T.logarithmicDepthBuffer&&f.enable(3),T.reverseDepthBuffer&&f.enable(4),T.skinning&&f.enable(5),T.morphTargets&&f.enable(6),T.morphNormals&&f.enable(7),T.morphColors&&f.enable(8),T.premultipliedAlpha&&f.enable(9),T.shadowMapEnabled&&f.enable(10),T.doubleSided&&f.enable(11),T.flipSided&&f.enable(12),T.useDepthPacking&&f.enable(13),T.dithering&&f.enable(14),T.transmission&&f.enable(15),T.sheen&&f.enable(16),T.opaque&&f.enable(17),T.pointsUvs&&f.enable(18),T.decodeVideoTexture&&f.enable(19),T.decodeVideoTextureEmissive&&f.enable(20),T.alphaToCoverage&&f.enable(21),C.push(f.mask)}function A(C){const T=M[C.type];let H;if(T){const Z=Ji[T];H=Nb.clone(Z.uniforms)}else H=C.uniforms;return H}function P(C,T){let H;for(let Z=0,G=g.length;Z<G;Z++){const et=g[Z];if(et.cacheKey===T){H=et,++H.usedTimes;break}}return H===void 0&&(H=new q2(r,T,C,c),g.push(H)),H}function L(C){if(--C.usedTimes===0){const T=g.indexOf(C);g[T]=g[g.length-1],g.pop(),C.destroy()}}function z(C){p.remove(C)}function I(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:P,releaseProgram:L,releaseShaderCache:z,programs:g,dispose:I}}function Q2(){let r=new WeakMap;function t(u){return r.has(u)}function e(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function a(u){r.delete(u)}function o(u,f,p){r.get(u)[f]=p}function c(){r=new WeakMap}return{has:t,get:e,remove:a,update:o,dispose:c}}function J2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function I_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function F_(){const r=[];let t=0;const e=[],a=[],o=[];function c(){t=0,e.length=0,a.length=0,o.length=0}function u(_,v,y,M,E,S){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:M,renderOrder:_.renderOrder,z:E,group:S},r[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=_.renderOrder,x.z=E,x.group=S),t++,x}function f(_,v,y,M,E,S){const x=u(_,v,y,M,E,S);y.transmission>0?a.push(x):y.transparent===!0?o.push(x):e.push(x)}function p(_,v,y,M,E,S){const x=u(_,v,y,M,E,S);y.transmission>0?a.unshift(x):y.transparent===!0?o.unshift(x):e.unshift(x)}function d(_,v){e.length>1&&e.sort(_||J2),a.length>1&&a.sort(v||I_),o.length>1&&o.sort(v||I_)}function g(){for(let _=t,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:a,transparent:o,init:c,push:f,unshift:p,finish:g,sort:d}}function $2(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new F_,r.set(a,[u])):o>=c.length?(u=new F_,c.push(u)):u=c[o],u}function e(){r=new WeakMap}return{get:t,dispose:e}}function tw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Gt};break;case"SpotLight":e={position:new V,direction:new V,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=e,e}}}function ew(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let nw=0;function iw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function aw(r){const t=new tw,e=ew(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new V);const o=new V,c=new ye,u=new ye;function f(d){let g=0,_=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,M=0,E=0,S=0,x=0,O=0,w=0,A=0,P=0,L=0,z=0;d.sort(iw);for(let C=0,T=d.length;C<T;C++){const H=d[C],Z=H.color,G=H.intensity,et=H.distance,rt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Z.r*G,_+=Z.g*G,v+=Z.b*G;else if(H.isLightProbe){for(let N=0;N<9;N++)a.probe[N].addScaledVector(H.sh.coefficients[N],G);z++}else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,a.directionalShadow[y]=W,a.directionalShadowMap[y]=rt,a.directionalShadowMatrix[y]=H.shadow.matrix,O++}a.directional[y]=N,y++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(Z).multiplyScalar(G),N.distance=et,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,a.spot[E]=N;const X=H.shadow;if(H.map&&(a.spotLightMap[P]=H.map,P++,X.updateMatrices(H),H.castShadow&&L++),a.spotLightMatrix[E]=X.matrix,H.castShadow){const W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,a.spotShadow[E]=W,a.spotShadowMap[E]=rt,A++}E++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(Z).multiplyScalar(G),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=N,S++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const X=H.shadow,W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,a.pointShadow[M]=W,a.pointShadowMap[M]=rt,a.pointShadowMatrix[M]=H.shadow.matrix,w++}a.point[M]=N,M++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(G),N.groundColor.copy(H.groundColor).multiplyScalar(G),a.hemi[x]=N,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=It.LTC_FLOAT_1,a.rectAreaLTC2=It.LTC_FLOAT_2):(a.rectAreaLTC1=It.LTC_HALF_1,a.rectAreaLTC2=It.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const I=a.hash;(I.directionalLength!==y||I.pointLength!==M||I.spotLength!==E||I.rectAreaLength!==S||I.hemiLength!==x||I.numDirectionalShadows!==O||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==P||I.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=E,a.rectArea.length=S,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=A+P-L,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=z,I.directionalLength=y,I.pointLength=M,I.spotLength=E,I.rectAreaLength=S,I.hemiLength=x,I.numDirectionalShadows=O,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=P,I.numLightProbes=z,a.version=nw++)}function p(d,g){let _=0,v=0,y=0,M=0,E=0;const S=g.matrixWorldInverse;for(let x=0,O=d.length;x<O;x++){const w=d[x];if(w.isDirectionalLight){const A=a.directional[_];A.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),_++}else if(w.isSpotLight){const A=a.spot[y];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const A=a.rectArea[M];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),u.identity(),c.copy(w.matrixWorld),c.premultiply(S),u.extractRotation(c),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(w.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),v++}else if(w.isHemisphereLight){const A=a.hemi[E];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:f,setupView:p,state:a}}function H_(r){const t=new aw(r),e=[],a=[];function o(g){d.camera=g,e.length=0,a.length=0}function c(g){e.push(g)}function u(g){a.push(g)}function f(){t.setup(e)}function p(g){t.setupView(e,g)}const d={lightsArray:e,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function rw(r){let t=new WeakMap;function e(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new H_(r),t.set(o,[f])):c>=u.length?(f=new H_(r),u.push(f)):f=u[c],f}function a(){t=new WeakMap}return{get:e,dispose:a}}class Tu extends xr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=F1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sw extends xr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cw(r,t,e){let a=new Gp;const o=new ie,c=new ie,u=new Le,f=new Tu({depthPacking:Cy}),p=new sw,d={},g=e.maxTextureSize,_={[yr]:ei,[ei]:yr,[Ta]:Ta},v=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:ow,fragmentShader:lw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new pi;M.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Dn(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let x=this.type;this.render=function(L,z,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(vr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const G=x!==Ea&&this.type===Ea,et=x===Ea&&this.type!==Ea;for(let rt=0,N=L.length;rt<N;rt++){const X=L[rt],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const at=W.getFrameExtents();if(o.multiply(at),c.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/at.x),o.x=c.x*at.x,W.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/at.y),o.y=c.y*at.y,W.mapSize.y=c.y)),W.map===null||G===!0||et===!0){const nt=this.type!==Ea?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new La(o.x,o.y,nt),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const B=W.getViewportCount();for(let nt=0;nt<B;nt++){const gt=W.getViewport(nt);u.set(c.x*gt.x,c.y*gt.y,c.x*gt.z,c.y*gt.w),Z.viewport(u),W.updateMatrices(X,nt),a=W.getFrustum(),A(z,I,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Ea&&O(W,I),W.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(C,T,H)};function O(L,z){const I=t.update(E);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new La(o.x,o.y)),v.uniforms.shadow_pass.value=L.map.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(z,null,I,v,E,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(z,null,I,y,E,null)}function w(L,z,I,C){let T=null;const H=I.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)T=H;else if(T=I.isPointLight===!0?p:f,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const Z=T.uuid,G=z.uuid;let et=d[Z];et===void 0&&(et={},d[Z]=et);let rt=et[G];rt===void 0&&(rt=T.clone(),et[G]=rt,z.addEventListener("dispose",P)),T=rt}if(T.visible=z.visible,T.wireframe=z.wireframe,C===Ea?T.side=z.shadowSide!==null?z.shadowSide:z.side:T.side=z.shadowSide!==null?z.shadowSide:_[z.side],T.alphaMap=z.alphaMap,T.alphaTest=z.alphaTest,T.map=z.map,T.clipShadows=z.clipShadows,T.clippingPlanes=z.clippingPlanes,T.clipIntersection=z.clipIntersection,T.displacementMap=z.displacementMap,T.displacementScale=z.displacementScale,T.displacementBias=z.displacementBias,T.wireframeLinewidth=z.wireframeLinewidth,T.linewidth=z.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=r.properties.get(T);Z.light=I}return T}function A(L,z,I,C,T){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===Ea)&&(!L.frustumCulled||a.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,L.matrixWorld);const G=t.update(L),et=L.material;if(Array.isArray(et)){const rt=G.groups;for(let N=0,X=rt.length;N<X;N++){const W=rt[N],at=et[W.materialIndex];if(at&&at.visible){const B=w(L,at,C,T);L.onBeforeShadow(r,L,z,I,G,B,W),r.renderBufferDirect(I,null,G,B,L,W),L.onAfterShadow(r,L,z,I,G,B,W)}}}else if(et.visible){const rt=w(L,et,C,T);L.onBeforeShadow(r,L,z,I,G,rt,null),r.renderBufferDirect(I,null,G,rt,L,null),L.onAfterShadow(r,L,z,I,G,rt,null)}}const Z=L.children;for(let G=0,et=Z.length;G<et;G++)A(Z[G],z,I,C,T)}function P(L){L.target.removeEventListener("dispose",P);for(const I in d){const C=d[I],T=L.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const uw={[Id]:Fd,[Hd]:kd,[Vd]:Wd,[Qs]:Gd,[Fd]:Id,[kd]:Hd,[Wd]:Vd,[Gd]:Qs};function fw(r,t){function e(){let K=!1;const Ot=new Le;let dt=null;const ft=new Le(0,0,0,0);return{setMask:function(zt){dt!==zt&&!K&&(r.colorMask(zt,zt,zt,zt),dt=zt)},setLocked:function(zt){K=zt},setClear:function(zt,Bt,ue,Me,Ge){Ge===!0&&(zt*=Me,Bt*=Me,ue*=Me),Ot.set(zt,Bt,ue,Me),ft.equals(Ot)===!1&&(r.clearColor(zt,Bt,ue,Me),ft.copy(Ot))},reset:function(){K=!1,dt=null,ft.set(-1,0,0,0)}}}function a(){let K=!1,Ot=!1,dt=null,ft=null,zt=null;return{setReversed:function(Bt){if(Ot!==Bt){const ue=t.get("EXT_clip_control");Ot?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);const Me=zt;zt=null,this.setClear(Me)}Ot=Bt},getReversed:function(){return Ot},setTest:function(Bt){Bt?ht(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(Bt){dt!==Bt&&!K&&(r.depthMask(Bt),dt=Bt)},setFunc:function(Bt){if(Ot&&(Bt=uw[Bt]),ft!==Bt){switch(Bt){case Id:r.depthFunc(r.NEVER);break;case Fd:r.depthFunc(r.ALWAYS);break;case Hd:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case Vd:r.depthFunc(r.EQUAL);break;case Gd:r.depthFunc(r.GEQUAL);break;case kd:r.depthFunc(r.GREATER);break;case Wd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=Bt}},setLocked:function(Bt){K=Bt},setClear:function(Bt){zt!==Bt&&(Ot&&(Bt=1-Bt),r.clearDepth(Bt),zt=Bt)},reset:function(){K=!1,dt=null,ft=null,zt=null,Ot=!1}}}function o(){let K=!1,Ot=null,dt=null,ft=null,zt=null,Bt=null,ue=null,Me=null,Ge=null;return{setTest:function(xe){K||(xe?ht(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(xe){Ot!==xe&&!K&&(r.stencilMask(xe),Ot=xe)},setFunc:function(xe,En,en){(dt!==xe||ft!==En||zt!==en)&&(r.stencilFunc(xe,En,en),dt=xe,ft=En,zt=en)},setOp:function(xe,En,en){(Bt!==xe||ue!==En||Me!==en)&&(r.stencilOp(xe,En,en),Bt=xe,ue=En,Me=en)},setLocked:function(xe){K=xe},setClear:function(xe){Ge!==xe&&(r.clearStencil(xe),Ge=xe)},reset:function(){K=!1,Ot=null,dt=null,ft=null,zt=null,Bt=null,ue=null,Me=null,Ge=null}}}const c=new e,u=new a,f=new o,p=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],M=null,E=!1,S=null,x=null,O=null,w=null,A=null,P=null,L=null,z=new Gt(0,0,0),I=0,C=!1,T=null,H=null,Z=null,G=null,et=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=X>=2);let at=null,B={};const nt=r.getParameter(r.SCISSOR_BOX),gt=r.getParameter(r.VIEWPORT),pt=new Le().fromArray(nt),$=new Le().fromArray(gt);function mt(K,Ot,dt,ft){const zt=new Uint8Array(4),Bt=r.createTexture();r.bindTexture(K,Bt),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ue=0;ue<dt;ue++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,zt):r.texImage2D(Ot+ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,zt);return Bt}const vt={};vt[r.TEXTURE_2D]=mt(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ht(r.DEPTH_TEST),u.setFunc(Qs),he(!1),Kt(Hv),ht(r.CULL_FACE),J(vr);function ht(K){g[K]!==!0&&(r.enable(K),g[K]=!0)}function Mt(K){g[K]!==!1&&(r.disable(K),g[K]=!1)}function Ft(K,Ot){return _[K]!==Ot?(r.bindFramebuffer(K,Ot),_[K]=Ot,K===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ot),K===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function $t(K,Ot){let dt=y,ft=!1;if(K){dt=v.get(Ot),dt===void 0&&(dt=[],v.set(Ot,dt));const zt=K.textures;if(dt.length!==zt.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let Bt=0,ue=zt.length;Bt<ue;Bt++)dt[Bt]=r.COLOR_ATTACHMENT0+Bt;dt.length=zt.length,ft=!0}}else dt[0]!==r.BACK&&(dt[0]=r.BACK,ft=!0);ft&&r.drawBuffers(dt)}function ge(K){return M!==K?(r.useProgram(K),M=K,!0):!1}const Yt={[Yr]:r.FUNC_ADD,[f1]:r.FUNC_SUBTRACT,[h1]:r.FUNC_REVERSE_SUBTRACT};Yt[d1]=r.MIN,Yt[p1]=r.MAX;const Ae={[m1]:r.ZERO,[g1]:r.ONE,[v1]:r.SRC_COLOR,[zd]:r.SRC_ALPHA,[b1]:r.SRC_ALPHA_SATURATE,[S1]:r.DST_COLOR,[y1]:r.DST_ALPHA,[_1]:r.ONE_MINUS_SRC_COLOR,[Bd]:r.ONE_MINUS_SRC_ALPHA,[M1]:r.ONE_MINUS_DST_COLOR,[x1]:r.ONE_MINUS_DST_ALPHA,[E1]:r.CONSTANT_COLOR,[T1]:r.ONE_MINUS_CONSTANT_COLOR,[A1]:r.CONSTANT_ALPHA,[w1]:r.ONE_MINUS_CONSTANT_ALPHA};function J(K,Ot,dt,ft,zt,Bt,ue,Me,Ge,xe){if(K===vr){E===!0&&(Mt(r.BLEND),E=!1);return}if(E===!1&&(ht(r.BLEND),E=!0),K!==u1){if(K!==S||xe!==C){if((x!==Yr||A!==Yr)&&(r.blendEquation(r.FUNC_ADD),x=Yr,A=Yr),xe)switch(K){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vv:r.blendFunc(r.ONE,r.ONE);break;case Gv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kv:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vv:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kv:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}O=null,w=null,P=null,L=null,z.set(0,0,0),I=0,S=K,C=xe}return}zt=zt||Ot,Bt=Bt||dt,ue=ue||ft,(Ot!==x||zt!==A)&&(r.blendEquationSeparate(Yt[Ot],Yt[zt]),x=Ot,A=zt),(dt!==O||ft!==w||Bt!==P||ue!==L)&&(r.blendFuncSeparate(Ae[dt],Ae[ft],Ae[Bt],Ae[ue]),O=dt,w=ft,P=Bt,L=ue),(Me.equals(z)===!1||Ge!==I)&&(r.blendColor(Me.r,Me.g,Me.b,Ge),z.copy(Me),I=Ge),S=K,C=!1}function hn(K,Ot){K.side===Ta?Mt(r.CULL_FACE):ht(r.CULL_FACE);let dt=K.side===ei;Ot&&(dt=!dt),he(dt),K.blending===js&&K.transparent===!1?J(vr):J(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),u.setFunc(K.depthFunc),u.setTest(K.depthTest),u.setMask(K.depthWrite),c.setMask(K.colorWrite);const ft=K.stencilWrite;f.setTest(ft),ft&&(f.setMask(K.stencilWriteMask),f.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),f.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),we(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(K){T!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),T=K)}function Kt(K){K!==o1?(ht(r.CULL_FACE),K!==H&&(K===Hv?r.cullFace(r.BACK):K===l1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),H=K}function Qt(K){K!==Z&&(N&&r.lineWidth(K),Z=K)}function we(K,Ot,dt){K?(ht(r.POLYGON_OFFSET_FILL),(G!==Ot||et!==dt)&&(r.polygonOffset(Ot,dt),G=Ot,et=dt)):Mt(r.POLYGON_OFFSET_FILL)}function te(K){K?ht(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function F(K){K===void 0&&(K=r.TEXTURE0+rt-1),at!==K&&(r.activeTexture(K),at=K)}function D(K,Ot,dt){dt===void 0&&(at===null?dt=r.TEXTURE0+rt-1:dt=at);let ft=B[dt];ft===void 0&&(ft={type:void 0,texture:void 0},B[dt]=ft),(ft.type!==K||ft.texture!==Ot)&&(at!==dt&&(r.activeTexture(dt),at=dt),r.bindTexture(K,Ot||vt[K]),ft.type=K,ft.texture=Ot)}function lt(){const K=B[at];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _t(){try{r.texSubImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ht(){try{r.texSubImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Lt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function me(){try{r.texStorage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function wt(){try{r.texStorage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Vt(){try{r.texImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ee(){try{r.texImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Wt(K){pt.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),pt.copy(K))}function Rt(K){$.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),$.copy(K))}function ce(K,Ot){let dt=d.get(Ot);dt===void 0&&(dt=new WeakMap,d.set(Ot,dt));let ft=dt.get(K);ft===void 0&&(ft=r.getUniformBlockIndex(Ot,K.name),dt.set(K,ft))}function se(K,Ot){const ft=d.get(Ot).get(K);p.get(Ot)!==ft&&(r.uniformBlockBinding(Ot,ft,K.__bindingPointIndex),p.set(Ot,ft))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},at=null,B={},_={},v=new WeakMap,y=[],M=null,E=!1,S=null,x=null,O=null,w=null,A=null,P=null,L=null,z=new Gt(0,0,0),I=0,C=!1,T=null,H=null,Z=null,G=null,et=null,pt.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ht,disable:Mt,bindFramebuffer:Ft,drawBuffers:$t,useProgram:ge,setBlending:J,setMaterial:hn,setFlipSided:he,setCullFace:Kt,setLineWidth:Qt,setPolygonOffset:we,setScissorTest:te,activeTexture:F,bindTexture:D,unbindTexture:lt,compressedTexImage2D:Et,compressedTexImage3D:Tt,texImage2D:Vt,texImage3D:ee,updateUBOMapping:ce,uniformBlockBinding:se,texStorage2D:me,texStorage3D:wt,texSubImage2D:_t,texSubImage3D:Ht,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Lt,scissor:Wt,viewport:Rt,reset:Ne}}function V_(r,t,e,a){const o=hw(a);switch(e){case by:return r*t;case Ty:return r*t;case Ay:return r*t*2;case Op:return r*t/o.components*o.byteLength;case zp:return r*t/o.components*o.byteLength;case wy:return r*t*2/o.components*o.byteLength;case Bp:return r*t*2/o.components*o.byteLength;case Ey:return r*t*3/o.components*o.byteLength;case Vn:return r*t*4/o.components*o.byteLength;case Ip:return r*t*4/o.components*o.byteLength;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vu:case _u:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kd:case Jd:return Math.max(r,16)*Math.max(t,8)/4;case Zd:case Qd:return Math.max(r,8)*Math.max(t,8)/2;case $d:case tp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ep:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case np:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ip:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ap:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case rp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case sp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case op:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case lp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case up:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case mp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case yu:case gp:case vp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ry:case _p:return Math.ceil(r/4)*Math.ceil(t/4)*8;case yp:case xp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hw(r){switch(r){case Ua:case xy:return{byteLength:1,components:1};case Sl:case Sy:case Al:return{byteLength:2,components:1};case Np:case Pp:return{byteLength:2,components:4};case Zr:case Lp:case Yn:return{byteLength:4,components:1};case My:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function dw(r,t,e,a,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ie,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,D){return y?new OffscreenCanvas(F,D):Ml("canvas")}function E(F,D,lt){let Et=1;const Tt=te(F);if((Tt.width>lt||Tt.height>lt)&&(Et=lt/Math.max(Tt.width,Tt.height)),Et<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const _t=Math.floor(Et*Tt.width),Ht=Math.floor(Et*Tt.height);_===void 0&&(_=M(_t,Ht));const Ut=D?M(_t,Ht):_;return Ut.width=_t,Ut.height=Ht,Ut.getContext("2d").drawImage(F,0,0,_t,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+_t+"x"+Ht+")."),Ut}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),F;return F}function S(F){return F.generateMipmaps}function x(F){r.generateMipmap(F)}function O(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(F,D,lt,Et,Tt=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let _t=D;if(D===r.RED&&(lt===r.FLOAT&&(_t=r.R32F),lt===r.HALF_FLOAT&&(_t=r.R16F),lt===r.UNSIGNED_BYTE&&(_t=r.R8)),D===r.RED_INTEGER&&(lt===r.UNSIGNED_BYTE&&(_t=r.R8UI),lt===r.UNSIGNED_SHORT&&(_t=r.R16UI),lt===r.UNSIGNED_INT&&(_t=r.R32UI),lt===r.BYTE&&(_t=r.R8I),lt===r.SHORT&&(_t=r.R16I),lt===r.INT&&(_t=r.R32I)),D===r.RG&&(lt===r.FLOAT&&(_t=r.RG32F),lt===r.HALF_FLOAT&&(_t=r.RG16F),lt===r.UNSIGNED_BYTE&&(_t=r.RG8)),D===r.RG_INTEGER&&(lt===r.UNSIGNED_BYTE&&(_t=r.RG8UI),lt===r.UNSIGNED_SHORT&&(_t=r.RG16UI),lt===r.UNSIGNED_INT&&(_t=r.RG32UI),lt===r.BYTE&&(_t=r.RG8I),lt===r.SHORT&&(_t=r.RG16I),lt===r.INT&&(_t=r.RG32I)),D===r.RGB_INTEGER&&(lt===r.UNSIGNED_BYTE&&(_t=r.RGB8UI),lt===r.UNSIGNED_SHORT&&(_t=r.RGB16UI),lt===r.UNSIGNED_INT&&(_t=r.RGB32UI),lt===r.BYTE&&(_t=r.RGB8I),lt===r.SHORT&&(_t=r.RGB16I),lt===r.INT&&(_t=r.RGB32I)),D===r.RGBA_INTEGER&&(lt===r.UNSIGNED_BYTE&&(_t=r.RGBA8UI),lt===r.UNSIGNED_SHORT&&(_t=r.RGBA16UI),lt===r.UNSIGNED_INT&&(_t=r.RGBA32UI),lt===r.BYTE&&(_t=r.RGBA8I),lt===r.SHORT&&(_t=r.RGBA16I),lt===r.INT&&(_t=r.RGBA32I)),D===r.RGB&&lt===r.UNSIGNED_INT_5_9_9_9_REV&&(_t=r.RGB9_E5),D===r.RGBA){const Ht=Tt?Pu:Ue.getTransfer(Et);lt===r.FLOAT&&(_t=r.RGBA32F),lt===r.HALF_FLOAT&&(_t=r.RGBA16F),lt===r.UNSIGNED_BYTE&&(_t=Ht===qe?r.SRGB8_ALPHA8:r.RGBA8),lt===r.UNSIGNED_SHORT_4_4_4_4&&(_t=r.RGBA4),lt===r.UNSIGNED_SHORT_5_5_5_1&&(_t=r.RGB5_A1)}return(_t===r.R16F||_t===r.R32F||_t===r.RG16F||_t===r.RG32F||_t===r.RGBA16F||_t===r.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function A(F,D){let lt;return F?D===null||D===Zr||D===to?lt=r.DEPTH24_STENCIL8:D===Yn?lt=r.DEPTH32F_STENCIL8:D===Sl&&(lt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Zr||D===to?lt=r.DEPTH_COMPONENT24:D===Yn?lt=r.DEPTH_COMPONENT32F:D===Sl&&(lt=r.DEPTH_COMPONENT16),lt}function P(F,D){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==gn&&F.minFilter!==Fi?Math.log2(Math.max(D.width,D.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?D.mipmaps.length:1}function L(F){const D=F.target;D.removeEventListener("dispose",L),I(D),D.isVideoTexture&&g.delete(D)}function z(F){const D=F.target;D.removeEventListener("dispose",z),T(D)}function I(F){const D=a.get(F);if(D.__webglInit===void 0)return;const lt=F.source,Et=v.get(lt);if(Et){const Tt=Et[D.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&C(F),Object.keys(Et).length===0&&v.delete(lt)}a.remove(F)}function C(F){const D=a.get(F);r.deleteTexture(D.__webglTexture);const lt=F.source,Et=v.get(lt);delete Et[D.__cacheKey],u.memory.textures--}function T(F){const D=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++){if(Array.isArray(D.__webglFramebuffer[Et]))for(let Tt=0;Tt<D.__webglFramebuffer[Et].length;Tt++)r.deleteFramebuffer(D.__webglFramebuffer[Et][Tt]);else r.deleteFramebuffer(D.__webglFramebuffer[Et]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[Et])}else{if(Array.isArray(D.__webglFramebuffer))for(let Et=0;Et<D.__webglFramebuffer.length;Et++)r.deleteFramebuffer(D.__webglFramebuffer[Et]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Et=0;Et<D.__webglColorRenderbuffer.length;Et++)D.__webglColorRenderbuffer[Et]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[Et]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const lt=F.textures;for(let Et=0,Tt=lt.length;Et<Tt;Et++){const _t=a.get(lt[Et]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),u.memory.textures--),a.remove(lt[Et])}a.remove(F)}let H=0;function Z(){H=0}function G(){const F=H;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),H+=1,F}function et(F){const D=[];return D.push(F.wrapS),D.push(F.wrapT),D.push(F.wrapR||0),D.push(F.magFilter),D.push(F.minFilter),D.push(F.anisotropy),D.push(F.internalFormat),D.push(F.format),D.push(F.type),D.push(F.generateMipmaps),D.push(F.premultiplyAlpha),D.push(F.flipY),D.push(F.unpackAlignment),D.push(F.colorSpace),D.join()}function rt(F,D){const lt=a.get(F);if(F.isVideoTexture&&Qt(F),F.isRenderTargetTexture===!1&&F.version>0&&lt.__version!==F.version){const Et=F.image;if(Et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(lt,F,D);return}}e.bindTexture(r.TEXTURE_2D,lt.__webglTexture,r.TEXTURE0+D)}function N(F,D){const lt=a.get(F);if(F.version>0&&lt.__version!==F.version){$(lt,F,D);return}e.bindTexture(r.TEXTURE_2D_ARRAY,lt.__webglTexture,r.TEXTURE0+D)}function X(F,D){const lt=a.get(F);if(F.version>0&&lt.__version!==F.version){$(lt,F,D);return}e.bindTexture(r.TEXTURE_3D,lt.__webglTexture,r.TEXTURE0+D)}function W(F,D){const lt=a.get(F);if(F.version>0&&lt.__version!==F.version){mt(lt,F,D);return}e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture,r.TEXTURE0+D)}const at={[Yd]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[jd]:r.MIRRORED_REPEAT},B={[gn]:r.NEAREST,[B1]:r.NEAREST_MIPMAP_NEAREST,[Bc]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[Zh]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},nt={[V1]:r.NEVER,[Y1]:r.ALWAYS,[G1]:r.LESS,[Uy]:r.LEQUAL,[k1]:r.EQUAL,[q1]:r.GEQUAL,[W1]:r.GREATER,[X1]:r.NOTEQUAL};function gt(F,D){if(D.type===Yn&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Fi||D.magFilter===Zh||D.magFilter===Bc||D.magFilter===pr||D.minFilter===Fi||D.minFilter===Zh||D.minFilter===Bc||D.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,at[D.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,at[D.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,at[D.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,B[D.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,B[D.minFilter]),D.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,nt[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===gn||D.minFilter!==Bc&&D.minFilter!==pr||D.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||a.get(D).__currentAnisotropy){const lt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(F,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,o.getMaxAnisotropy())),a.get(D).__currentAnisotropy=D.anisotropy}}}function pt(F,D){let lt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,D.addEventListener("dispose",L));const Et=D.source;let Tt=v.get(Et);Tt===void 0&&(Tt={},v.set(Et,Tt));const _t=et(D);if(_t!==F.__cacheKey){Tt[_t]===void 0&&(Tt[_t]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,lt=!0),Tt[_t].usedTimes++;const Ht=Tt[F.__cacheKey];Ht!==void 0&&(Tt[F.__cacheKey].usedTimes--,Ht.usedTimes===0&&C(D)),F.__cacheKey=_t,F.__webglTexture=Tt[_t].texture}return lt}function $(F,D,lt){let Et=r.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Et=r.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Et=r.TEXTURE_3D);const Tt=pt(F,D),_t=D.source;e.bindTexture(Et,F.__webglTexture,r.TEXTURE0+lt);const Ht=a.get(_t);if(_t.version!==Ht.__version||Tt===!0){e.activeTexture(r.TEXTURE0+lt);const Ut=Ue.getPrimaries(Ue.workingColorSpace),Lt=D.colorSpace===hr?null:Ue.getPrimaries(D.colorSpace),me=D.colorSpace===hr||Ut===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let wt=E(D.image,!1,o.maxTextureSize);wt=we(D,wt);const Vt=c.convert(D.format,D.colorSpace),ee=c.convert(D.type);let Wt=w(D.internalFormat,Vt,ee,D.colorSpace,D.isVideoTexture);gt(Et,D);let Rt;const ce=D.mipmaps,se=D.isVideoTexture!==!0,Ne=Ht.__version===void 0||Tt===!0,K=_t.dataReady,Ot=P(D,wt);if(D.isDepthTexture)Wt=A(D.format===eo,D.type),Ne&&(se?e.texStorage2D(r.TEXTURE_2D,1,Wt,wt.width,wt.height):e.texImage2D(r.TEXTURE_2D,0,Wt,wt.width,wt.height,0,Vt,ee,null));else if(D.isDataTexture)if(ce.length>0){se&&Ne&&e.texStorage2D(r.TEXTURE_2D,Ot,Wt,ce[0].width,ce[0].height);for(let dt=0,ft=ce.length;dt<ft;dt++)Rt=ce[dt],se?K&&e.texSubImage2D(r.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,Vt,ee,Rt.data):e.texImage2D(r.TEXTURE_2D,dt,Wt,Rt.width,Rt.height,0,Vt,ee,Rt.data);D.generateMipmaps=!1}else se?(Ne&&e.texStorage2D(r.TEXTURE_2D,Ot,Wt,wt.width,wt.height),K&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,wt.width,wt.height,Vt,ee,wt.data)):e.texImage2D(r.TEXTURE_2D,0,Wt,wt.width,wt.height,0,Vt,ee,wt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){se&&Ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,Wt,ce[0].width,ce[0].height,wt.depth);for(let dt=0,ft=ce.length;dt<ft;dt++)if(Rt=ce[dt],D.format!==Vn)if(Vt!==null)if(se){if(K)if(D.layerUpdates.size>0){const zt=V_(Rt.width,Rt.height,D.format,D.type);for(const Bt of D.layerUpdates){const ue=Rt.data.subarray(Bt*zt/Rt.data.BYTES_PER_ELEMENT,(Bt+1)*zt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,Bt,Rt.width,Rt.height,1,Vt,ue)}D.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,wt.depth,Vt,Rt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,Wt,Rt.width,Rt.height,wt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?K&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,wt.depth,Vt,ee,Rt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,dt,Wt,Rt.width,Rt.height,wt.depth,0,Vt,ee,Rt.data)}else{se&&Ne&&e.texStorage2D(r.TEXTURE_2D,Ot,Wt,ce[0].width,ce[0].height);for(let dt=0,ft=ce.length;dt<ft;dt++)Rt=ce[dt],D.format!==Vn?Vt!==null?se?K&&e.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,Vt,Rt.data):e.compressedTexImage2D(r.TEXTURE_2D,dt,Wt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?K&&e.texSubImage2D(r.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,Vt,ee,Rt.data):e.texImage2D(r.TEXTURE_2D,dt,Wt,Rt.width,Rt.height,0,Vt,ee,Rt.data)}else if(D.isDataArrayTexture)if(se){if(Ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,Wt,wt.width,wt.height,wt.depth),K)if(D.layerUpdates.size>0){const dt=V_(wt.width,wt.height,D.format,D.type);for(const ft of D.layerUpdates){const zt=wt.data.subarray(ft*dt/wt.data.BYTES_PER_ELEMENT,(ft+1)*dt/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ft,wt.width,wt.height,1,Vt,ee,zt)}D.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Vt,ee,wt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,wt.width,wt.height,wt.depth,0,Vt,ee,wt.data);else if(D.isData3DTexture)se?(Ne&&e.texStorage3D(r.TEXTURE_3D,Ot,Wt,wt.width,wt.height,wt.depth),K&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Vt,ee,wt.data)):e.texImage3D(r.TEXTURE_3D,0,Wt,wt.width,wt.height,wt.depth,0,Vt,ee,wt.data);else if(D.isFramebufferTexture){if(Ne)if(se)e.texStorage2D(r.TEXTURE_2D,Ot,Wt,wt.width,wt.height);else{let dt=wt.width,ft=wt.height;for(let zt=0;zt<Ot;zt++)e.texImage2D(r.TEXTURE_2D,zt,Wt,dt,ft,0,Vt,ee,null),dt>>=1,ft>>=1}}else if(ce.length>0){if(se&&Ne){const dt=te(ce[0]);e.texStorage2D(r.TEXTURE_2D,Ot,Wt,dt.width,dt.height)}for(let dt=0,ft=ce.length;dt<ft;dt++)Rt=ce[dt],se?K&&e.texSubImage2D(r.TEXTURE_2D,dt,0,0,Vt,ee,Rt):e.texImage2D(r.TEXTURE_2D,dt,Wt,Vt,ee,Rt);D.generateMipmaps=!1}else if(se){if(Ne){const dt=te(wt);e.texStorage2D(r.TEXTURE_2D,Ot,Wt,dt.width,dt.height)}K&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Vt,ee,wt)}else e.texImage2D(r.TEXTURE_2D,0,Wt,Vt,ee,wt);S(D)&&x(Et),Ht.__version=_t.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function mt(F,D,lt){if(D.image.length!==6)return;const Et=pt(F,D),Tt=D.source;e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+lt);const _t=a.get(Tt);if(Tt.version!==_t.__version||Et===!0){e.activeTexture(r.TEXTURE0+lt);const Ht=Ue.getPrimaries(Ue.workingColorSpace),Ut=D.colorSpace===hr?null:Ue.getPrimaries(D.colorSpace),Lt=D.colorSpace===hr||Ht===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const me=D.isCompressedTexture||D.image[0].isCompressedTexture,wt=D.image[0]&&D.image[0].isDataTexture,Vt=[];for(let ft=0;ft<6;ft++)!me&&!wt?Vt[ft]=E(D.image[ft],!0,o.maxCubemapSize):Vt[ft]=wt?D.image[ft].image:D.image[ft],Vt[ft]=we(D,Vt[ft]);const ee=Vt[0],Wt=c.convert(D.format,D.colorSpace),Rt=c.convert(D.type),ce=w(D.internalFormat,Wt,Rt,D.colorSpace),se=D.isVideoTexture!==!0,Ne=_t.__version===void 0||Et===!0,K=Tt.dataReady;let Ot=P(D,ee);gt(r.TEXTURE_CUBE_MAP,D);let dt;if(me){se&&Ne&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,ce,ee.width,ee.height);for(let ft=0;ft<6;ft++){dt=Vt[ft].mipmaps;for(let zt=0;zt<dt.length;zt++){const Bt=dt[zt];D.format!==Vn?Wt!==null?se?K&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Bt.width,Bt.height,Wt,Bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,ce,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Bt.width,Bt.height,Wt,Rt,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,ce,Bt.width,Bt.height,0,Wt,Rt,Bt.data)}}}else{if(dt=D.mipmaps,se&&Ne){dt.length>0&&Ot++;const ft=te(Vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,ce,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(wt){se?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Vt[ft].width,Vt[ft].height,Wt,Rt,Vt[ft].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Vt[ft].width,Vt[ft].height,0,Wt,Rt,Vt[ft].data);for(let zt=0;zt<dt.length;zt++){const ue=dt[zt].image[ft].image;se?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,ue.width,ue.height,Wt,Rt,ue.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,ce,ue.width,ue.height,0,Wt,Rt,ue.data)}}else{se?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Wt,Rt,Vt[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Wt,Rt,Vt[ft]);for(let zt=0;zt<dt.length;zt++){const Bt=dt[zt];se?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Wt,Rt,Bt.image[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,ce,Wt,Rt,Bt.image[ft])}}}S(D)&&x(r.TEXTURE_CUBE_MAP),_t.__version=Tt.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function vt(F,D,lt,Et,Tt,_t){const Ht=c.convert(lt.format,lt.colorSpace),Ut=c.convert(lt.type),Lt=w(lt.internalFormat,Ht,Ut,lt.colorSpace),me=a.get(D),wt=a.get(lt);if(wt.__renderTarget=D,!me.__hasExternalTextures){const Vt=Math.max(1,D.width>>_t),ee=Math.max(1,D.height>>_t);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?e.texImage3D(Tt,_t,Lt,Vt,ee,D.depth,0,Ht,Ut,null):e.texImage2D(Tt,_t,Lt,Vt,ee,0,Ht,Ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,F),Kt(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,Tt,wt.__webglTexture,0,he(D)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Et,Tt,wt.__webglTexture,_t),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(F,D,lt){if(r.bindRenderbuffer(r.RENDERBUFFER,F),D.depthBuffer){const Et=D.depthTexture,Tt=Et&&Et.isDepthTexture?Et.type:null,_t=A(D.stencilBuffer,Tt),Ht=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=he(D);Kt(D)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,_t,D.width,D.height):lt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,_t,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,_t,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ht,r.RENDERBUFFER,F)}else{const Et=D.textures;for(let Tt=0;Tt<Et.length;Tt++){const _t=Et[Tt],Ht=c.convert(_t.format,_t.colorSpace),Ut=c.convert(_t.type),Lt=w(_t.internalFormat,Ht,Ut,_t.colorSpace),me=he(D);lt&&Kt(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,Lt,D.width,D.height):Kt(D)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,Lt,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,Lt,D.width,D.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(F,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,F),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=a.get(D.depthTexture);Et.__renderTarget=D,(!Et.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),rt(D.depthTexture,0);const Tt=Et.__webglTexture,_t=he(D);if(D.depthTexture.format===Zs)Kt(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Tt,0,_t):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Tt,0);else if(D.depthTexture.format===eo)Kt(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Tt,0,_t):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function Ft(F){const D=a.get(F),lt=F.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==F.depthTexture){const Et=F.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),Et){const Tt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,Et.removeEventListener("dispose",Tt)};Et.addEventListener("dispose",Tt),D.__depthDisposeCallback=Tt}D.__boundDepthTexture=Et}if(F.depthTexture&&!D.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");Mt(D.__webglFramebuffer,F)}else if(lt){D.__webglDepthbuffer=[];for(let Et=0;Et<6;Et++)if(e.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[Et]),D.__webglDepthbuffer[Et]===void 0)D.__webglDepthbuffer[Et]=r.createRenderbuffer(),ht(D.__webglDepthbuffer[Et],F,!1);else{const Tt=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=D.__webglDepthbuffer[Et];r.bindRenderbuffer(r.RENDERBUFFER,_t),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,_t)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=r.createRenderbuffer(),ht(D.__webglDepthbuffer,F,!1);else{const Et=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=D.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,Tt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(F,D,lt){const Et=a.get(F);D!==void 0&&vt(Et.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),lt!==void 0&&Ft(F)}function ge(F){const D=F.texture,lt=a.get(F),Et=a.get(D);F.addEventListener("dispose",z);const Tt=F.textures,_t=F.isWebGLCubeRenderTarget===!0,Ht=Tt.length>1;if(Ht||(Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture()),Et.__version=D.version,u.memory.textures++),_t){lt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(D.mipmaps&&D.mipmaps.length>0){lt.__webglFramebuffer[Ut]=[];for(let Lt=0;Lt<D.mipmaps.length;Lt++)lt.__webglFramebuffer[Ut][Lt]=r.createFramebuffer()}else lt.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){lt.__webglFramebuffer=[];for(let Ut=0;Ut<D.mipmaps.length;Ut++)lt.__webglFramebuffer[Ut]=r.createFramebuffer()}else lt.__webglFramebuffer=r.createFramebuffer();if(Ht)for(let Ut=0,Lt=Tt.length;Ut<Lt;Ut++){const me=a.get(Tt[Ut]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),u.memory.textures++)}if(F.samples>0&&Kt(F)===!1){lt.__webglMultisampledFramebuffer=r.createFramebuffer(),lt.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Tt.length;Ut++){const Lt=Tt[Ut];lt.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,lt.__webglColorRenderbuffer[Ut]);const me=c.convert(Lt.format,Lt.colorSpace),wt=c.convert(Lt.type),Vt=w(Lt.internalFormat,me,wt,Lt.colorSpace,F.isXRRenderTarget===!0),ee=he(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,Vt,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,lt.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(lt.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(lt.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_t){e.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),gt(r.TEXTURE_CUBE_MAP,D);for(let Ut=0;Ut<6;Ut++)if(D.mipmaps&&D.mipmaps.length>0)for(let Lt=0;Lt<D.mipmaps.length;Lt++)vt(lt.__webglFramebuffer[Ut][Lt],F,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Lt);else vt(lt.__webglFramebuffer[Ut],F,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(D)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let Ut=0,Lt=Tt.length;Ut<Lt;Ut++){const me=Tt[Ut],wt=a.get(me);e.bindTexture(r.TEXTURE_2D,wt.__webglTexture),gt(r.TEXTURE_2D,me),vt(lt.__webglFramebuffer,F,me,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,0),S(me)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ut=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Ut,Et.__webglTexture),gt(Ut,D),D.mipmaps&&D.mipmaps.length>0)for(let Lt=0;Lt<D.mipmaps.length;Lt++)vt(lt.__webglFramebuffer[Lt],F,D,r.COLOR_ATTACHMENT0,Ut,Lt);else vt(lt.__webglFramebuffer,F,D,r.COLOR_ATTACHMENT0,Ut,0);S(D)&&x(Ut),e.unbindTexture()}F.depthBuffer&&Ft(F)}function Yt(F){const D=F.textures;for(let lt=0,Et=D.length;lt<Et;lt++){const Tt=D[lt];if(S(Tt)){const _t=O(F),Ht=a.get(Tt).__webglTexture;e.bindTexture(_t,Ht),x(_t),e.unbindTexture()}}}const Ae=[],J=[];function hn(F){if(F.samples>0){if(Kt(F)===!1){const D=F.textures,lt=F.width,Et=F.height;let Tt=r.COLOR_BUFFER_BIT;const _t=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ht=a.get(F),Ut=D.length>1;if(Ut)for(let Lt=0;Lt<D.length;Lt++)e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Lt=0;Lt<D.length;Lt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ht.__webglColorRenderbuffer[Lt]);const me=a.get(D[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,lt,Et,0,0,lt,Et,Tt,r.NEAREST),p===!0&&(Ae.length=0,J.length=0,Ae.push(r.COLOR_ATTACHMENT0+Lt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ae.push(_t),J.push(_t),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,J)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let Lt=0;Lt<D.length;Lt++){e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,Ht.__webglColorRenderbuffer[Lt]);const me=a.get(D[Lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,me,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const D=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[D])}}}function he(F){return Math.min(o.maxSamples,F.samples)}function Kt(F){const D=a.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Qt(F){const D=u.render.frame;g.get(F)!==D&&(g.set(F,D),F.update())}function we(F,D){const lt=F.colorSpace,Et=F.format,Tt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||lt!==ao&&lt!==hr&&(Ue.getTransfer(lt)===qe?(Et!==Vn||Tt!==Ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),D}function te(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.setTexture2D=rt,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=$t,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Kt}function pw(r,t){function e(a,o=hr){let c;const u=Ue.getTransfer(o);if(a===Ua)return r.UNSIGNED_BYTE;if(a===Np)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Pp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===My)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===xy)return r.BYTE;if(a===Sy)return r.SHORT;if(a===Sl)return r.UNSIGNED_SHORT;if(a===Lp)return r.INT;if(a===Zr)return r.UNSIGNED_INT;if(a===Yn)return r.FLOAT;if(a===Al)return r.HALF_FLOAT;if(a===by)return r.ALPHA;if(a===Ey)return r.RGB;if(a===Vn)return r.RGBA;if(a===Ty)return r.LUMINANCE;if(a===Ay)return r.LUMINANCE_ALPHA;if(a===Zs)return r.DEPTH_COMPONENT;if(a===eo)return r.DEPTH_STENCIL;if(a===Op)return r.RED;if(a===zp)return r.RED_INTEGER;if(a===wy)return r.RG;if(a===Bp)return r.RG_INTEGER;if(a===Ip)return r.RGBA_INTEGER;if(a===mu||a===gu||a===vu||a===_u)if(u===qe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Zd||a===Kd||a===Qd||a===Jd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Zd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Kd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Qd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Jd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===$d||a===tp||a===ep)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===$d||a===tp)return u===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ep)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===np||a===ip||a===ap||a===rp||a===sp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===np)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ip)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ap)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===rp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===sp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===op)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===lp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===cp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===up)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===fp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===hp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===dp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===pp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===mp)return u===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yu||a===gp||a===vp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===yu)return u===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ry||a===_p||a===yp||a===xp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===yu)return c.COMPRESSED_RED_RGTC1_EXT;if(a===_p)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===yp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===xp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===to?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:e}}class mw extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vl extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gw={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const a of t.hand.values())this._getHandJoint(e,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,a){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const E of t.hand.values()){const S=e.getJointPose(E,a),x=this._getHandJoint(d,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,M=.005;d.inputState.pinching&&v>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=e.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=e.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(gw)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const a=new vl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[e.jointName]=a,t.add(a)}return t.joints[e.jointName]}}const vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_w=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,a){if(this.texture===null){const o=new Pn,c=t.properties.get(o);c.__webglTexture=e.texture,(e.depthNear!=a.depthNear||e.depthFar!=a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,a=new Na({vertexShader:vw,fragmentShader:_w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new oo(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xw extends ro{constructor(t,e){super();const a=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,g=null,_=null,v=null,y=null,M=null;const E=new yw,S=e.getContextAttributes();let x=null,O=null;const w=[],A=[],P=new ie;let L=null;const z=new ti;z.viewport=new Le;const I=new ti;I.viewport=new Le;const C=[z,I],T=new mw;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let mt=w[$];return mt===void 0&&(mt=new bd,w[$]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function($){let mt=w[$];return mt===void 0&&(mt=new bd,w[$]=mt),mt.getGripSpace()},this.getHand=function($){let mt=w[$];return mt===void 0&&(mt=new bd,w[$]=mt),mt.getHandSpace()};function G($){const mt=A.indexOf($.inputSource);if(mt===-1)return;const vt=w[mt];vt!==void 0&&(vt.update($.inputSource,$.frame,d||u),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function et(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",et),o.removeEventListener("inputsourceschange",rt);for(let $=0;$<w.length;$++){const mt=A[$];mt!==null&&(A[$]=null,w[$].disconnect(mt))}H=null,Z=null,E.reset(),t.setRenderTarget(x),y=null,v=null,_=null,o=null,O=null,pt.stop(),a.isPresenting=!1,t.setPixelRatio(L),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",et),o.addEventListener("inputsourceschange",rt),S.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(P),o.renderState.layers===void 0){const mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,e,mt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new La(y.framebufferWidth,y.framebufferHeight,{format:Vn,type:Ua,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let mt=null,vt=null,ht=null;S.depth&&(ht=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=S.stencil?eo:Zs,vt=S.stencil?to:Zr);const Mt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:c};_=new XRWebGLBinding(o,e),v=_.createProjectionLayer(Mt),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new La(v.textureWidth,v.textureHeight,{format:Vn,type:Ua,depthTexture:new Gy(v.textureWidth,v.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),pt.setContext(o),pt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function rt($){for(let mt=0;mt<$.removed.length;mt++){const vt=$.removed[mt],ht=A.indexOf(vt);ht>=0&&(A[ht]=null,w[ht].disconnect(vt))}for(let mt=0;mt<$.added.length;mt++){const vt=$.added[mt];let ht=A.indexOf(vt);if(ht===-1){for(let Ft=0;Ft<w.length;Ft++)if(Ft>=A.length){A.push(vt),ht=Ft;break}else if(A[Ft]===null){A[Ft]=vt,ht=Ft;break}if(ht===-1)break}const Mt=w[ht];Mt&&Mt.connect(vt)}}const N=new V,X=new V;function W($,mt,vt){N.setFromMatrixPosition(mt.matrixWorld),X.setFromMatrixPosition(vt.matrixWorld);const ht=N.distanceTo(X),Mt=mt.projectionMatrix.elements,Ft=vt.projectionMatrix.elements,$t=Mt[14]/(Mt[10]-1),ge=Mt[14]/(Mt[10]+1),Yt=(Mt[9]+1)/Mt[5],Ae=(Mt[9]-1)/Mt[5],J=(Mt[8]-1)/Mt[0],hn=(Ft[8]+1)/Ft[0],he=$t*J,Kt=$t*hn,Qt=ht/(-J+hn),we=Qt*-J;if(mt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(we),$.translateZ(Qt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Mt[10]===-1)$.projectionMatrix.copy(mt.projectionMatrix),$.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const te=$t+Qt,F=ge+Qt,D=he-we,lt=Kt+(ht-we),Et=Yt*ge/F*te,Tt=Ae*ge/F*te;$.projectionMatrix.makePerspective(D,lt,Et,Tt,te,F),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function at($,mt){mt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(mt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let mt=$.near,vt=$.far;E.texture!==null&&(E.depthNear>0&&(mt=E.depthNear),E.depthFar>0&&(vt=E.depthFar)),T.near=I.near=z.near=mt,T.far=I.far=z.far=vt,(H!==T.near||Z!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,Z=T.far),z.layers.mask=$.layers.mask|2,I.layers.mask=$.layers.mask|4,T.layers.mask=z.layers.mask|I.layers.mask;const ht=$.parent,Mt=T.cameras;at(T,ht);for(let Ft=0;Ft<Mt.length;Ft++)at(Mt[Ft],ht);Mt.length===2?W(T,z,I):T.projectionMatrix.copy(z.projectionMatrix),B($,T,ht)};function B($,mt,vt){vt===null?$.matrix.copy(mt.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(mt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(mt.projectionMatrix),$.projectionMatrixInverse.copy(mt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=no*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function($){p=$,v!==null&&(v.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(T)};let nt=null;function gt($,mt){if(g=mt.getViewerPose(d||u),M=mt,g!==null){const vt=g.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let ht=!1;vt.length!==T.cameras.length&&(T.cameras.length=0,ht=!0);for(let Ft=0;Ft<vt.length;Ft++){const $t=vt[Ft];let ge=null;if(y!==null)ge=y.getViewport($t);else{const Ae=_.getViewSubImage(v,$t);ge=Ae.viewport,Ft===0&&(t.setRenderTargetTextures(O,Ae.colorTexture,v.ignoreDepthValues?void 0:Ae.depthStencilTexture),t.setRenderTarget(O))}let Yt=C[Ft];Yt===void 0&&(Yt=new ti,Yt.layers.enable(Ft),Yt.viewport=new Le,C[Ft]=Yt),Yt.matrix.fromArray($t.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray($t.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(ge.x,ge.y,ge.width,ge.height),Ft===0&&(T.matrix.copy(Yt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ht===!0&&T.cameras.push(Yt)}const Mt=o.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Ft=_.getDepthInformation(vt[0]);Ft&&Ft.isValid&&Ft.texture&&E.init(t,Ft,o.renderState)}}for(let vt=0;vt<w.length;vt++){const ht=A[vt],Mt=w[vt];ht!==null&&Mt!==void 0&&Mt.update(ht,mt,d||u)}nt&&nt($,mt),mt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:mt}),M=null}const pt=new Vy;pt.setAnimationLoop(gt),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}const kr=new $i,Sw=new ye;function Mw(r,t){function e(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,Iy(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,O,w,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(c(S,x),M(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),E(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,O,w):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,e(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ei&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,e(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ei&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,e(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,e(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const O=t.get(x),w=O.envMap,A=O.envMapRotation;w&&(S.envMap.value=w,kr.copy(A),kr.x*=-1,kr.y*=-1,kr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),S.envMapRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(kr)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,O,w){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*O,S.scale.value=w*.5,x.map&&(S.map.value=x.map,e(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,O){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const O=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function bw(r,t,e,a){let o={},c={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,w){const A=w.program;a.uniformBlockBinding(O,A)}function d(O,w){let A=o[O.id];A===void 0&&(M(O),A=g(O),o[O.id]=A,O.addEventListener("dispose",S));const P=w.program;a.updateUBOMapping(O,P);const L=t.render.frame;c[O.id]!==L&&(v(O),c[O.id]=L)}function g(O){const w=_();O.__bindingPointIndex=w;const A=r.createBuffer(),P=O.__size,L=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,P,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,A),A}function _(){for(let O=0;O<f;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const w=o[O.id],A=O.uniforms,P=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let L=0,z=A.length;L<z;L++){const I=Array.isArray(A[L])?A[L]:[A[L]];for(let C=0,T=I.length;C<T;C++){const H=I[C];if(y(H,L,C,P)===!0){const Z=H.__offset,G=Array.isArray(H.value)?H.value:[H.value];let et=0;for(let rt=0;rt<G.length;rt++){const N=G[rt],X=E(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,Z+et,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,et),et+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,w,A,P){const L=O.value,z=w+"_"+A;if(P[z]===void 0)return typeof L=="number"||typeof L=="boolean"?P[z]=L:P[z]=L.clone(),!0;{const I=P[z];if(typeof L=="number"||typeof L=="boolean"){if(I!==L)return P[z]=L,!0}else if(I.equals(L)===!1)return I.copy(L),!0}return!1}function M(O){const w=O.uniforms;let A=0;const P=16;for(let z=0,I=w.length;z<I;z++){const C=Array.isArray(w[z])?w[z]:[w[z]];for(let T=0,H=C.length;T<H;T++){const Z=C[T],G=Array.isArray(Z.value)?Z.value:[Z.value];for(let et=0,rt=G.length;et<rt;et++){const N=G[et],X=E(N),W=A%P,at=W%X.boundary,B=W+at;A+=at,B!==0&&P-B<X.storage&&(A+=P-B),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=X.storage}}}const L=A%P;return L>0&&(A+=P-L),O.__size=A,O.__cache={},this}function E(O){const w={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(w.boundary=4,w.storage=4):O.isVector2?(w.boundary=8,w.storage=8):O.isVector3||O.isColor?(w.boundary=16,w.storage=12):O.isVector4?(w.boundary=16,w.storage=16):O.isMatrix3?(w.boundary=48,w.storage=48):O.isMatrix4?(w.boundary=64,w.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),w}function S(O){const w=O.target;w.removeEventListener("dispose",S);const A=u.indexOf(w.__bindingPointIndex);u.splice(A,1),r.deleteBuffer(o[w.id]),delete o[w.id],delete c[w.id]}function x(){for(const O in o)r.deleteBuffer(o[O]);u=[],o={},c={}}return{bind:p,update:d,dispose:x}}class Ew{constructor(t={}){const{canvas:e=ub(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const O=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=_r,this.toneMappingExposure=1;const A=this;let P=!1,L=0,z=0,I=null,C=-1,T=null;const H=new Le,Z=new Le;let G=null;const et=new Gt(0);let rt=0,N=e.width,X=e.height,W=1,at=null,B=null;const nt=new Le(0,0,N,X),gt=new Le(0,0,N,X);let pt=!1;const $=new Gp;let mt=!1,vt=!1;const ht=new ye,Mt=new ye,Ft=new V,$t=new Le,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Ae(){return I===null?W:1}let J=a;function hn(R,q){return e.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dp}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Bt,!1),J===null){const q="webgl2";if(J=hn(q,R),J===null)throw hn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let he,Kt,Qt,we,te,F,D,lt,Et,Tt,_t,Ht,Ut,Lt,me,wt,Vt,ee,Wt,Rt,ce,se,Ne,K;function Ot(){he=new DA(J),he.init(),se=new pw(J,he),Kt=new EA(J,he,t,se),Qt=new fw(J,he),Kt.reverseDepthBuffer&&v&&Qt.buffers.depth.setReversed(!0),we=new NA(J),te=new Q2,F=new dw(J,he,Qt,te,Kt,se,we),D=new AA(A),lt=new CA(A),Et=new Hb(J),Ne=new MA(J,Et),Tt=new UA(J,Et,we,Ne),_t=new OA(J,Tt,Et,we),Wt=new PA(J,Kt,F),wt=new TA(te),Ht=new K2(A,D,lt,he,Kt,Ne,wt),Ut=new Mw(A,te),Lt=new $2,me=new rw(he),ee=new SA(A,D,lt,Qt,_t,y,p),Vt=new cw(A,_t,Kt),K=new bw(J,we,Kt,Qt),Rt=new bA(J,he,we),ce=new LA(J,he,we),we.programs=Ht.programs,A.capabilities=Kt,A.extensions=he,A.properties=te,A.renderLists=Lt,A.shadowMap=Vt,A.state=Qt,A.info=we}Ot();const dt=new xw(A,J);this.xr=dt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const R=he.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=he.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(N,X,!1))},this.getSize=function(R){return R.set(N,X)},this.setSize=function(R,q,j=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,X=q,e.width=Math.floor(R*W),e.height=Math.floor(q*W),j===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(N*W,X*W).floor()},this.setDrawingBufferSize=function(R,q,j){N=R,X=q,W=j,e.width=Math.floor(R*j),e.height=Math.floor(q*j),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,q,j,it){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,q,j,it),Qt.viewport(H.copy(nt).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,q,j,it){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,q,j,it),Qt.scissor(Z.copy(gt).multiplyScalar(W).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){Qt.setScissorTest(pt=R)},this.setOpaqueSort=function(R){at=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(R=!0,q=!0,j=!0){let it=0;if(R){let Q=!1;if(I!==null){const At=I.texture.format;Q=At===Ip||At===Bp||At===zp}if(Q){const At=I.texture.type,Pt=At===Ua||At===Zr||At===Sl||At===to||At===Np||At===Pp,Nt=ee.getClearColor(),Dt=ee.getClearAlpha(),ne=Nt.r,qt=Nt.g,kt=Nt.b;Pt?(M[0]=ne,M[1]=qt,M[2]=kt,M[3]=Dt,J.clearBufferuiv(J.COLOR,0,M)):(E[0]=ne,E[1]=qt,E[2]=kt,E[3]=Dt,J.clearBufferiv(J.COLOR,0,E))}else it|=J.COLOR_BUFFER_BIT}q&&(it|=J.DEPTH_BUFFER_BIT),j&&(it|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Bt,!1),Lt.dispose(),me.dispose(),te.dispose(),D.dispose(),lt.dispose(),_t.dispose(),Ne.dispose(),K.dispose(),Ht.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",$e),dt.removeEventListener("sessionend",vn),_n.stop()};function ft(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=we.autoReset,q=Vt.enabled,j=Vt.autoUpdate,it=Vt.needsUpdate,Q=Vt.type;Ot(),we.autoReset=R,Vt.enabled=q,Vt.autoUpdate=j,Vt.needsUpdate=it,Vt.type=Q}function Bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){const q=R.target;q.removeEventListener("dispose",ue),Me(q)}function Me(R){Ge(R),te.remove(R)}function Ge(R){const q=te.get(R).programs;q!==void 0&&(q.forEach(function(j){Ht.releaseProgram(j)}),R.isShaderMaterial&&Ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,j,it,Q,At){q===null&&(q=ge);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,Nt=St(R,q,j,it,Q);Qt.setMaterial(it,Pt);let Dt=j.index,ne=1;if(it.wireframe===!0){if(Dt=Tt.getWireframeAttribute(j),Dt===void 0)return;ne=2}const qt=j.drawRange,kt=j.attributes.position;let ve=qt.start*ne,Ce=(qt.start+qt.count)*ne;At!==null&&(ve=Math.max(ve,At.start*ne),Ce=Math.min(Ce,(At.start+At.count)*ne)),Dt!==null?(ve=Math.max(ve,0),Ce=Math.min(Ce,Dt.count)):kt!=null&&(ve=Math.max(ve,0),Ce=Math.min(Ce,kt.count));const Ie=Ce-ve;if(Ie<0||Ie===1/0)return;Ne.setup(Q,it,Nt,j,Dt);let Tn,Pe=Rt;if(Dt!==null&&(Tn=Et.get(Dt),Pe=ce,Pe.setIndex(Tn)),Q.isMesh)it.wireframe===!0?(Qt.setLineWidth(it.wireframeLinewidth*Ae()),Pe.setMode(J.LINES)):Pe.setMode(J.TRIANGLES);else if(Q.isLine){let Zt=it.linewidth;Zt===void 0&&(Zt=1),Qt.setLineWidth(Zt*Ae()),Q.isLineSegments?Pe.setMode(J.LINES):Q.isLineLoop?Pe.setMode(J.LINE_LOOP):Pe.setMode(J.LINE_STRIP)}else Q.isPoints?Pe.setMode(J.POINTS):Q.isSprite&&Pe.setMode(J.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Zt=Q._multiDrawStarts,sn=Q._multiDrawCounts,De=Q._multiDrawCount,ni=Dt?Et.get(Dt).bytesPerElement:1,Di=te.get(it).currentProgram.getUniforms();for(let On=0;On<De;On++)Di.setValue(J,"_gl_DrawID",On),Pe.render(Zt[On]/ni,sn[On])}else if(Q.isInstancedMesh)Pe.renderInstances(ve,Ie,Q.count);else if(j.isInstancedBufferGeometry){const Zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,sn=Math.min(j.instanceCount,Zt);Pe.renderInstances(ve,Ie,sn)}else Pe.render(ve,Ie)};function xe(R,q,j){R.transparent===!0&&R.side===Ta&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,Ci(R,q,j),R.side=yr,R.needsUpdate=!0,Ci(R,q,j),R.side=Ta):Ci(R,q,j)}this.compile=function(R,q,j=null){j===null&&(j=R),x=me.get(j),x.init(q),w.push(x),j.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),R!==j&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const it=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const At=Q.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){const Nt=At[Pt];xe(Nt,j,Q),it.add(Nt)}else xe(At,j,Q),it.add(At)}),w.pop(),x=null,it},this.compileAsync=function(R,q,j=null){const it=this.compile(R,q,j);return new Promise(Q=>{function At(){if(it.forEach(function(Pt){te.get(Pt).currentProgram.isReady()&&it.delete(Pt)}),it.size===0){Q(R);return}setTimeout(At,10)}he.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let En=null;function en(R){En&&En(R)}function $e(){_n.stop()}function vn(){_n.start()}const _n=new Vy;_n.setAnimationLoop(en),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(R){En=R,dt.setAnimationLoop(R),R===null?_n.stop():_n.start()},dt.addEventListener("sessionstart",$e),dt.addEventListener("sessionend",vn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(q),q=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,q,I),x=me.get(R,w.length),x.init(q),w.push(x),Mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(Mt),vt=this.localClippingEnabled,mt=wt.init(this.clippingPlanes,vt),S=Lt.get(R,O.length),S.init(),O.push(S),dt.enabled===!0&&dt.isPresenting===!0){const At=A.xr.getDepthSensingMesh();At!==null&&Vi(At,q,-1/0,A.sortObjects)}Vi(R,q,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(at,B),Yt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Yt&&ee.addToRenderList(S,R),this.info.render.frame++,mt===!0&&wt.beginShadows();const j=x.state.shadowsArray;Vt.render(j,R,q),mt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=S.opaque,Q=S.transmissive;if(x.setupLights(),q.isArrayCamera){const At=q.cameras;if(Q.length>0)for(let Pt=0,Nt=At.length;Pt<Nt;Pt++){const Dt=At[Pt];na(it,Q,R,Dt)}Yt&&ee.render(R);for(let Pt=0,Nt=At.length;Pt<Nt;Pt++){const Dt=At[Pt];Sr(S,R,Dt,Dt.viewport)}}else Q.length>0&&na(it,Q,R,q),Yt&&ee.render(R),Sr(S,R,q);I!==null&&(F.updateMultisampleRenderTarget(I),F.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(A,R,q),Ne.resetDefaultState(),C=-1,T=null,w.pop(),w.length>0?(x=w[w.length-1],mt===!0&&wt.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function Vi(R,q,j,it){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){it&&$t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);const Pt=_t.update(R),Nt=R.material;Nt.visible&&S.push(R,Pt,Nt,j,$t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const Pt=_t.update(R),Nt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$t.copy(R.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),$t.copy(Pt.boundingSphere.center)),$t.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(Nt)){const Dt=Pt.groups;for(let ne=0,qt=Dt.length;ne<qt;ne++){const kt=Dt[ne],ve=Nt[kt.materialIndex];ve&&ve.visible&&S.push(R,Pt,ve,j,$t.z,kt)}}else Nt.visible&&S.push(R,Pt,Nt,j,$t.z,null)}}const At=R.children;for(let Pt=0,Nt=At.length;Pt<Nt;Pt++)Vi(At[Pt],q,j,it)}function Sr(R,q,j,it){const Q=R.opaque,At=R.transmissive,Pt=R.transparent;x.setupLightsView(j),mt===!0&&wt.setGlobalState(A.clippingPlanes,j),it&&Qt.viewport(H.copy(it)),Q.length>0&&Gi(Q,q,j),At.length>0&&Gi(At,q,j),Pt.length>0&&Gi(Pt,q,j),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function na(R,q,j,it){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[it.id]===void 0&&(x.state.transmissionRenderTarget[it.id]=new La(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Al:Ua,minFilter:pr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const At=x.state.transmissionRenderTarget[it.id],Pt=it.viewport||H;At.setSize(Pt.z,Pt.w);const Nt=A.getRenderTarget();A.setRenderTarget(At),A.getClearColor(et),rt=A.getClearAlpha(),rt<1&&A.setClearColor(16777215,.5),A.clear(),Yt&&ee.render(j);const Dt=A.toneMapping;A.toneMapping=_r;const ne=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),x.setupLightsView(it),mt===!0&&wt.setGlobalState(A.clippingPlanes,it),Gi(R,j,it),F.updateMultisampleRenderTarget(At),F.updateRenderTargetMipmap(At),he.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let kt=0,ve=q.length;kt<ve;kt++){const Ce=q[kt],Ie=Ce.object,Tn=Ce.geometry,Pe=Ce.material,Zt=Ce.group;if(Pe.side===Ta&&Ie.layers.test(it.layers)){const sn=Pe.side;Pe.side=ei,Pe.needsUpdate=!0,Ri(Ie,j,it,Tn,Pe,Zt),Pe.side=sn,Pe.needsUpdate=!0,qt=!0}}qt===!0&&(F.updateMultisampleRenderTarget(At),F.updateRenderTargetMipmap(At))}A.setRenderTarget(Nt),A.setClearColor(et,rt),ne!==void 0&&(it.viewport=ne),A.toneMapping=Dt}function Gi(R,q,j){const it=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,At=R.length;Q<At;Q++){const Pt=R[Q],Nt=Pt.object,Dt=Pt.geometry,ne=it===null?Pt.material:it,qt=Pt.group;Nt.layers.test(j.layers)&&Ri(Nt,q,j,Dt,ne,qt)}}function Ri(R,q,j,it,Q,At){R.onBeforeRender(A,q,j,it,Q,At),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(A,q,j,it,R,At),Q.transparent===!0&&Q.side===Ta&&Q.forceSinglePass===!1?(Q.side=ei,Q.needsUpdate=!0,A.renderBufferDirect(j,q,it,Q,R,At),Q.side=yr,Q.needsUpdate=!0,A.renderBufferDirect(j,q,it,Q,R,At),Q.side=Ta):A.renderBufferDirect(j,q,it,Q,R,At),R.onAfterRender(A,q,j,it,Q,At)}function Ci(R,q,j){q.isScene!==!0&&(q=ge);const it=te.get(R),Q=x.state.lights,At=x.state.shadowsArray,Pt=Q.state.version,Nt=Ht.getParameters(R,Q.state,At,q,j),Dt=Ht.getProgramCacheKey(Nt);let ne=it.programs;it.environment=R.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(R.isMeshStandardMaterial?lt:D).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",ue),ne=new Map,it.programs=ne);let qt=ne.get(Dt);if(qt!==void 0){if(it.currentProgram===qt&&it.lightsStateVersion===Pt)return gi(R,Nt),qt}else Nt.uniforms=Ht.getUniforms(R),R.onBeforeCompile(Nt,A),qt=Ht.acquireProgram(Nt,Dt),ne.set(Dt,qt),it.uniforms=Nt.uniforms;const kt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=wt.uniform),gi(R,Nt),it.needsLights=jt(R),it.lightsStateVersion=Pt,it.needsLights&&(kt.ambientLightColor.value=Q.state.ambient,kt.lightProbe.value=Q.state.probe,kt.directionalLights.value=Q.state.directional,kt.directionalLightShadows.value=Q.state.directionalShadow,kt.spotLights.value=Q.state.spot,kt.spotLightShadows.value=Q.state.spotShadow,kt.rectAreaLights.value=Q.state.rectArea,kt.ltc_1.value=Q.state.rectAreaLTC1,kt.ltc_2.value=Q.state.rectAreaLTC2,kt.pointLights.value=Q.state.point,kt.pointLightShadows.value=Q.state.pointShadow,kt.hemisphereLights.value=Q.state.hemi,kt.directionalShadowMap.value=Q.state.directionalShadowMap,kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,kt.spotShadowMap.value=Q.state.spotShadowMap,kt.spotLightMatrix.value=Q.state.spotLightMatrix,kt.spotLightMap.value=Q.state.spotLightMap,kt.pointShadowMap.value=Q.state.pointShadowMap,kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),it.currentProgram=qt,it.uniformsList=null,qt}function mi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=xu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function gi(R,q){const j=te.get(R);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.batchingColor=q.batchingColor,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.instancingMorph=q.instancingMorph,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function St(R,q,j,it,Q){q.isScene!==!0&&(q=ge),F.resetTextureUnits();const At=q.fog,Pt=it.isMeshStandardMaterial?q.environment:null,Nt=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ao,Dt=(it.isMeshStandardMaterial?lt:D).get(it.envMap||Pt),ne=it.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qt=!!j.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),kt=!!j.morphAttributes.position,ve=!!j.morphAttributes.normal,Ce=!!j.morphAttributes.color;let Ie=_r;it.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ie=A.toneMapping);const Tn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pe=Tn!==void 0?Tn.length:0,Zt=te.get(it),sn=x.state.lights;if(mt===!0&&(vt===!0||R!==T)){const Gn=R===T&&it.id===C;wt.setState(it,R,Gn)}let De=!1;it.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==sn.state.version||Zt.outputColorSpace!==Nt||Q.isBatchedMesh&&Zt.batching===!1||!Q.isBatchedMesh&&Zt.batching===!0||Q.isBatchedMesh&&Zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Zt.instancing===!1||!Q.isInstancedMesh&&Zt.instancing===!0||Q.isSkinnedMesh&&Zt.skinning===!1||!Q.isSkinnedMesh&&Zt.skinning===!0||Q.isInstancedMesh&&Zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Zt.instancingMorph===!1&&Q.morphTexture!==null||Zt.envMap!==Dt||it.fog===!0&&Zt.fog!==At||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==wt.numPlanes||Zt.numIntersection!==wt.numIntersection)||Zt.vertexAlphas!==ne||Zt.vertexTangents!==qt||Zt.morphTargets!==kt||Zt.morphNormals!==ve||Zt.morphColors!==Ce||Zt.toneMapping!==Ie||Zt.morphTargetsCount!==Pe)&&(De=!0):(De=!0,Zt.__version=it.version);let ni=Zt.currentProgram;De===!0&&(ni=Ci(it,q,Q));let Di=!1,On=!1,ki=!1;const je=ni.getUniforms(),nn=Zt.uniforms;if(Qt.useProgram(ni.program)&&(Di=!0,On=!0,ki=!0),it.id!==C&&(C=it.id,On=!0),Di||T!==R){Qt.buffers.depth.getReversed()?(ht.copy(R.projectionMatrix),hb(ht),db(ht),je.setValue(J,"projectionMatrix",ht)):je.setValue(J,"projectionMatrix",R.projectionMatrix),je.setValue(J,"viewMatrix",R.matrixWorldInverse);const vi=je.map.cameraPosition;vi!==void 0&&vi.setValue(J,Ft.setFromMatrixPosition(R.matrixWorld)),Kt.logarithmicDepthBuffer&&je.setValue(J,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&je.setValue(J,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,On=!0,ki=!0)}if(Q.isSkinnedMesh){je.setOptional(J,Q,"bindMatrix"),je.setOptional(J,Q,"bindMatrixInverse");const Gn=Q.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),je.setValue(J,"boneTexture",Gn.boneTexture,F))}Q.isBatchedMesh&&(je.setOptional(J,Q,"batchingTexture"),je.setValue(J,"batchingTexture",Q._matricesTexture,F),je.setOptional(J,Q,"batchingIdTexture"),je.setValue(J,"batchingIdTexture",Q._indirectTexture,F),je.setOptional(J,Q,"batchingColorTexture"),Q._colorsTexture!==null&&je.setValue(J,"batchingColorTexture",Q._colorsTexture,F));const ia=j.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0)&&Wt.update(Q,j,ni),(On||Zt.receiveShadow!==Q.receiveShadow)&&(Zt.receiveShadow=Q.receiveShadow,je.setValue(J,"receiveShadow",Q.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(nn.envMap.value=Dt,nn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(nn.envMapIntensity.value=q.environmentIntensity),On&&(je.setValue(J,"toneMappingExposure",A.toneMappingExposure),Zt.needsLights&&ae(nn,ki),At&&it.fog===!0&&Ut.refreshFogUniforms(nn,At),Ut.refreshMaterialUniforms(nn,it,W,X,x.state.transmissionRenderTarget[R.id]),xu.upload(J,mi(Zt),nn,F)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(xu.upload(J,mi(Zt),nn,F),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&je.setValue(J,"center",Q.center),je.setValue(J,"modelViewMatrix",Q.modelViewMatrix),je.setValue(J,"normalMatrix",Q.normalMatrix),je.setValue(J,"modelMatrix",Q.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Gn=it.uniformsGroups;for(let vi=0,kn=Gn.length;vi<kn;vi++){const fo=Gn[vi];K.update(fo,ni),K.bind(fo,ni)}}return ni}function ae(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function jt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,q,j){te.get(R.texture).__webglTexture=q,te.get(R.depthTexture).__webglTexture=j;const it=te.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=j===void 0,it.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const j=te.get(R);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,j=0){I=R,L=q,z=j;let it=!0,Q=null,At=!1,Pt=!1;if(R){const Dt=te.get(R);if(Dt.__useDefaultFramebuffer!==void 0)Qt.bindFramebuffer(J.FRAMEBUFFER,null),it=!1;else if(Dt.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(Dt.__hasExternalTextures)F.rebindTextures(R,te.get(R.texture).__webglTexture,te.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(Dt.__boundDepthTexture!==kt){if(kt!==null&&te.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Pt=!0);const qt=te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[q])?Q=qt[q][j]:Q=qt[q],At=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?Q=te.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?Q=qt[j]:Q=qt,H.copy(R.viewport),Z.copy(R.scissor),G=R.scissorTest}else H.copy(nt).multiplyScalar(W).floor(),Z.copy(gt).multiplyScalar(W).floor(),G=pt;if(Qt.bindFramebuffer(J.FRAMEBUFFER,Q)&&it&&Qt.drawBuffers(R,Q),Qt.viewport(H),Qt.scissor(Z),Qt.setScissorTest(G),At){const Dt=te.get(R.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+q,Dt.__webglTexture,j)}else if(Pt){const Dt=te.get(R.texture),ne=q||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Dt.__webglTexture,j||0,ne)}C=-1},this.readRenderTargetPixels=function(R,q,j,it,Q,At,Pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){Qt.bindFramebuffer(J.FRAMEBUFFER,Nt);try{const Dt=R.texture,ne=Dt.format,qt=Dt.type;if(!Kt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-it&&j>=0&&j<=R.height-Q&&J.readPixels(q,j,it,Q,se.convert(ne),se.convert(qt),At)}finally{const Dt=I!==null?te.get(I).__webglFramebuffer:null;Qt.bindFramebuffer(J.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(R,q,j,it,Q,At,Pt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){const Dt=R.texture,ne=Dt.format,qt=Dt.type;if(!Kt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-it&&j>=0&&j<=R.height-Q){Qt.bindFramebuffer(J.FRAMEBUFFER,Nt);const kt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,kt),J.bufferData(J.PIXEL_PACK_BUFFER,At.byteLength,J.STREAM_READ),J.readPixels(q,j,it,Q,se.convert(ne),se.convert(qt),0);const ve=I!==null?te.get(I).__webglFramebuffer:null;Qt.bindFramebuffer(J.FRAMEBUFFER,ve);const Ce=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await fb(J,Ce,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,kt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,At),J.deleteBuffer(kt),J.deleteSync(Ce),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,j=0){R.isTexture!==!0&&(ml("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const it=Math.pow(2,-j),Q=Math.floor(R.image.width*it),At=Math.floor(R.image.height*it),Pt=q!==null?q.x:0,Nt=q!==null?q.y:0;F.setTexture2D(R,0),J.copyTexSubImage2D(J.TEXTURE_2D,j,0,0,Pt,Nt,Q,At),Qt.unbindTexture()},this.copyTextureToTexture=function(R,q,j=null,it=null,Q=0){R.isTexture!==!0&&(ml("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],q=arguments[2],Q=arguments[3]||0,j=null);let At,Pt,Nt,Dt,ne,qt,kt,ve,Ce;const Ie=R.isCompressedTexture?R.mipmaps[Q]:R.image;j!==null?(At=j.max.x-j.min.x,Pt=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,Dt=j.min.x,ne=j.min.y,qt=j.isBox3?j.min.z:0):(At=Ie.width,Pt=Ie.height,Nt=Ie.depth||1,Dt=0,ne=0,qt=0),it!==null?(kt=it.x,ve=it.y,Ce=it.z):(kt=0,ve=0,Ce=0);const Tn=se.convert(q.format),Pe=se.convert(q.type);let Zt;q.isData3DTexture?(F.setTexture3D(q,0),Zt=J.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(F.setTexture2DArray(q,0),Zt=J.TEXTURE_2D_ARRAY):(F.setTexture2D(q,0),Zt=J.TEXTURE_2D),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment);const sn=J.getParameter(J.UNPACK_ROW_LENGTH),De=J.getParameter(J.UNPACK_IMAGE_HEIGHT),ni=J.getParameter(J.UNPACK_SKIP_PIXELS),Di=J.getParameter(J.UNPACK_SKIP_ROWS),On=J.getParameter(J.UNPACK_SKIP_IMAGES);J.pixelStorei(J.UNPACK_ROW_LENGTH,Ie.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ie.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Dt),J.pixelStorei(J.UNPACK_SKIP_ROWS,ne),J.pixelStorei(J.UNPACK_SKIP_IMAGES,qt);const ki=R.isDataArrayTexture||R.isData3DTexture,je=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const nn=te.get(R),ia=te.get(q),Gn=te.get(nn.__renderTarget),vi=te.get(ia.__renderTarget);Qt.bindFramebuffer(J.READ_FRAMEBUFFER,Gn.__webglFramebuffer),Qt.bindFramebuffer(J.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let kn=0;kn<Nt;kn++)ki&&J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,te.get(R).__webglTexture,Q,qt+kn),R.isDepthTexture?(je&&J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,te.get(q).__webglTexture,Q,Ce+kn),J.blitFramebuffer(Dt,ne,At,Pt,kt,ve,At,Pt,J.DEPTH_BUFFER_BIT,J.NEAREST)):je?J.copyTexSubImage3D(Zt,Q,kt,ve,Ce+kn,Dt,ne,At,Pt):J.copyTexSubImage2D(Zt,Q,kt,ve,Ce+kn,Dt,ne,At,Pt);Qt.bindFramebuffer(J.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else je?R.isDataTexture||R.isData3DTexture?J.texSubImage3D(Zt,Q,kt,ve,Ce,At,Pt,Nt,Tn,Pe,Ie.data):q.isCompressedArrayTexture?J.compressedTexSubImage3D(Zt,Q,kt,ve,Ce,At,Pt,Nt,Tn,Ie.data):J.texSubImage3D(Zt,Q,kt,ve,Ce,At,Pt,Nt,Tn,Pe,Ie):R.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Q,kt,ve,At,Pt,Tn,Pe,Ie.data):R.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Q,kt,ve,Ie.width,Ie.height,Tn,Ie.data):J.texSubImage2D(J.TEXTURE_2D,Q,kt,ve,At,Pt,Tn,Pe,Ie);J.pixelStorei(J.UNPACK_ROW_LENGTH,sn),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,De),J.pixelStorei(J.UNPACK_SKIP_PIXELS,ni),J.pixelStorei(J.UNPACK_SKIP_ROWS,Di),J.pixelStorei(J.UNPACK_SKIP_IMAGES,On),Q===0&&q.generateMipmaps&&J.generateMipmap(Zt),Qt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,j=null,it=null,Q=0){return R.isTexture!==!0&&(ml("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,it=arguments[1]||null,R=arguments[2],q=arguments[3],Q=arguments[4]||0),ml('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,j,it,Q)},this.initRenderTarget=function(R){te.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),Qt.unbindTexture()},this.resetState=function(){L=0,z=0,I=null,Qt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ue._getUnpackColorSpace()}}class Tw extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class JC{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mp,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,a){t*=this.stride,a*=e.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=e.array[a+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(e,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new V;class Yy{constructor(t,e,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,a=this.data.count;e<a;e++)Xn.fromBufferAttribute(this,e),Xn.applyMatrix4(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)Xn.fromBufferAttribute(this,e),Xn.applyNormalMatrix(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)Xn.fromBufferAttribute(this,e),Xn.transformDirection(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}getComponent(t,e){let a=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(a=Ii(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=Ve(a,this.array)),this.data.array[t*this.data.stride+this.offset+e]=a,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ii(e,this.array)),e}setXY(t,e,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),a=Ve(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=a,this}setXYZ(t,e,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),a=Ve(a,this.array),o=Ve(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,e,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),a=Ve(a,this.array),o=Ve(o,this.array),c=Ve(c,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)e.push(this.data.array[o+c])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yy(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)e.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const G_=new V,k_=new Le,W_=new Le,Aw=new V,X_=new ye,au=new V,Ed=new Oa,q_=new ye,Td=new wl;class $C extends Dn{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wv,this.bindMatrix=new ye,this.bindMatrixInverse=new ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new di),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let a=0;a<e.count;a++)this.getVertexPosition(a,au),this.boundingBox.expandByPoint(au)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oa),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let a=0;a<e.count;a++)this.getVertexPosition(a,au),this.boundingSphere.expandByPoint(au)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const a=this.material,o=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ed.copy(this.boundingSphere),Ed.applyMatrix4(o),t.ray.intersectsSphere(Ed)!==!1&&(q_.copy(o).invert(),Td.copy(t.ray).applyMatrix4(q_),!(this.boundingBox!==null&&Td.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Td)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Le,e=this.geometry.attributes.skinWeight;for(let a=0,o=e.count;a<o;a++){t.fromBufferAttribute(e,a);const c=1/t.manhattanLength();c!==1/0?t.multiplyScalar(c):t.set(1,0,0,0),e.setXYZW(a,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Wv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===z1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const a=this.skeleton,o=this.geometry;k_.fromBufferAttribute(o.attributes.skinIndex,t),W_.fromBufferAttribute(o.attributes.skinWeight,t),G_.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let c=0;c<4;c++){const u=W_.getComponent(c);if(u!==0){const f=k_.getComponent(c);X_.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),e.addScaledVector(Aw.copy(G_).applyMatrix4(X_),u)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ww extends cn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zu extends Pn{constructor(t=null,e=1,a=1,o,c,u,f,p,d=gn,g=gn,_,v){super(null,u,f,p,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:e,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Y_=new ye,Rw=new ye;class jy{constructor(t=[],e=[]){this.uuid=Hi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,o=this.bones.length;a<o;a++)this.boneInverses.push(new ye)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const a=new ye;this.bones[t]&&a.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const a=this.bones[t];a&&a.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const a=this.bones[t];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const t=this.bones,e=this.boneInverses,a=this.boneMatrices,o=this.boneTexture;for(let c=0,u=t.length;c<u;c++){const f=t[c]?t[c].matrixWorld:Rw;Y_.multiplyMatrices(f,e[c]),Y_.toArray(a,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new jy(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const a=new zu(e,t,t,Vn,Yn);return a.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=a,this}getBoneByName(t){for(let e=0,a=this.bones.length;e<a;e++){const o=this.bones[e];if(o.name===t)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let a=0,o=t.bones.length;a<o;a++){const c=t.bones[a];let u=e[c];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),u=new ww),this.bones.push(u),this.boneInverses.push(new ye().fromArray(t.boneInverses[a]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,a=this.boneInverses;for(let o=0,c=e.length;o<c;o++){const u=e[o];t.bones.push(u.uuid);const f=a[o];t.boneInverses.push(f.toArray())}return t}}class j_ extends Ke{constructor(t,e,a,o=1){super(t,e,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ks=new ye,Z_=new ye,ru=[],K_=new di,Cw=new ye,fl=new Dn,hl=new Oa;class t3 extends Dn{constructor(t,e,a){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new j_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,Cw)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<e;a++)this.getMatrixAt(a,ks),K_.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(K_)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oa),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<e;a++)this.getMatrixAt(a,ks),hl.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(hl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const a=e.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let f=0;f<a.length;f++)a[f]=o[u+f]}raycast(t,e){const a=this.matrixWorld,o=this.count;if(fl.geometry=this.geometry,fl.material=this.material,fl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(a),t.ray.intersectsSphere(hl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,ks),Z_.multiplyMatrices(a,ks),fl.matrixWorld=Z_,fl.raycast(t,ru);for(let u=0,f=ru.length;u<f;u++){const p=ru[u];p.instanceId=c,p.object=this,e.push(p)}ru.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new j_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const a=e.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new zu(new Float32Array(o*this.count),o,this.count,Op,Yn));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const f=this.geometry.morphTargetsRelative?1:1-u,p=o*t;c[p]=f,c.set(a,p+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Dw extends xr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Au=new V,wu=new V,Q_=new ye,dl=new wl,su=new Oa,Ad=new V,J_=new V;class Zy extends cn{constructor(t=new pi,e=new Dw){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[0];for(let o=1,c=e.count;o<c;o++)Au.fromBufferAttribute(e,o-1),wu.fromBufferAttribute(e,o),a[o]=a[o-1],a[o]+=Au.distanceTo(wu);t.setAttribute("lineDistance",new jn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),su.copy(a.boundingSphere),su.applyMatrix4(o),su.radius+=c,t.ray.intersectsSphere(su)===!1)return;Q_.copy(o).invert(),dl.copy(t.ray).applyMatrix4(Q_);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=d){const x=g.getX(E),O=g.getX(E+1),w=ou(this,t,dl,p,x,O);w&&e.push(w)}if(this.isLineLoop){const E=g.getX(M-1),S=g.getX(y),x=ou(this,t,dl,p,E,S);x&&e.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=d){const x=ou(this,t,dl,p,E,E+1);x&&e.push(x)}if(this.isLineLoop){const E=ou(this,t,dl,p,M-1,y);E&&e.push(E)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const o=e[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function ou(r,t,e,a,o,c){const u=r.geometry.attributes.position;if(Au.fromBufferAttribute(u,o),wu.fromBufferAttribute(u,c),e.distanceSqToSegment(Au,wu,Ad,J_)>a)return;Ad.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ad);if(!(p<t.near||p>t.far))return{distance:p,point:J_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const $_=new V,ty=new V;class e3 extends Zy{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[];for(let o=0,c=e.count;o<c;o+=2)$_.fromBufferAttribute(e,o),ty.fromBufferAttribute(e,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+$_.distanceTo(ty);t.setAttribute("lineDistance",new jn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class n3 extends Zy{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Uw extends xr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ey=new ye,Ep=new wl,lu=new Oa,cu=new V;class i3 extends cn{constructor(t=new pi,e=new Uw){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),lu.copy(a.boundingSphere),lu.applyMatrix4(o),lu.radius+=c,t.ray.intersectsSphere(lu)===!1)return;ey.copy(o).invert(),Ep.copy(t.ray).applyMatrix4(ey);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let M=v,E=y;M<E;M++){const S=d.getX(M);cu.fromBufferAttribute(_,S),ny(cu,S,p,o,t,e,this)}}else{const v=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let M=v,E=y;M<E;M++)cu.fromBufferAttribute(_,M),ny(cu,M,p,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const o=e[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function ny(r,t,e,a,o,c,u){const f=Ep.distanceSqToPoint(r);if(f<e){const p=new V;Ep.closestPointToPoint(r,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Ky extends Pn{constructor(t,e,a,o,c,u,f,p,d){super(t,e,a,o,c,u,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lw{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const a=this.getUtoTmapping(t);return this.getPoint(a,e)}getPoints(t=5){const e=[];for(let a=0;a<=t;a++)e.push(this.getPoint(a/t));return e}getSpacedPoints(t=5){const e=[];for(let a=0;a<=t;a++)e.push(this.getPointAt(a/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let a,o=this.getPoint(0),c=0;e.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),e.push(c),o=a;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const a=this.getLengths();let o=0;const c=a.length;let u;e?u=e:u=t*a[c-1];let f=0,p=c-1,d;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),d=a[o]-u,d<0)f=o+1;else if(d>0)p=o-1;else{p=o;break}if(o=p,a[o]===u)return o/(c-1);const g=a[o],v=a[o+1]-g,y=(u-g)/v;return(o+y)/(c-1)}getTangent(t,e){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),f=this.getPoint(c),p=e||(u.isVector2?new ie:new V);return p.copy(f).sub(u).normalize(),p}getTangentAt(t,e){const a=this.getUtoTmapping(t);return this.getTangent(a,e)}computeFrenetFrames(t,e){const a=new V,o=[],c=[],u=[],f=new V,p=new ye;for(let y=0;y<=t;y++){const M=y/t;o[y]=this.getTangentAt(M,new V)}c[0]=new V,u[0]=new V;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,a.set(1,0,0)),_<=d&&(d=_,a.set(0,1,0)),v<=d&&a.set(0,0,1),f.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],f),u[0].crossVectors(o[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Sn(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(f,M))}u[y].crossVectors(o[y],c[y])}if(e===!0){let y=Math.acos(Sn(c[0].dot(c[t]),-1,1));y/=t,o[0].dot(f.crossVectors(c[0],c[t]))>0&&(y=-y);for(let M=1;M<=t;M++)c[M].applyMatrix4(p.makeRotationAxis(o[M],y*M)),u[M].crossVectors(o[M],c[M])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Xp(){let r=0,t=0,e=0,a=0;function o(c,u,f,p){r=c,t=f,e=-3*c+3*u-2*f-p,a=2*c-2*u+f+p}return{initCatmullRom:function(c,u,f,p,d){o(u,f,d*(f-c),d*(p-u))},initNonuniformCatmullRom:function(c,u,f,p,d,g,_){let v=(u-c)/d-(f-c)/(d+g)+(f-u)/g,y=(f-u)/g-(p-u)/(g+_)+(p-f)/_;v*=g,y*=g,o(u,f,v,y)},calc:function(c){const u=c*c,f=u*c;return r+t*c+e*u+a*f}}}const uu=new V,wd=new Xp,Rd=new Xp,Cd=new Xp;class Nw extends Lw{constructor(t=[],e=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=a,this.tension=o}getPoint(t,e=new V){const a=e,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/c)+1)*c:p===0&&f===c-1&&(f=c-2,p=1);let d,g;this.closed||f>0?d=o[(f-1)%c]:(uu.subVectors(o[0],o[1]).add(o[0]),d=uu);const _=o[f%c],v=o[(f+1)%c];if(this.closed||f+2<c?g=o[(f+2)%c]:(uu.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=uu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(_),y),E=Math.pow(_.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(g),y);E<1e-4&&(E=1),M<1e-4&&(M=E),S<1e-4&&(S=E),wd.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,M,E,S),Rd.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,M,E,S),Cd.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,M,E,S)}else this.curveType==="catmullrom"&&(wd.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),Rd.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),Cd.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return a.set(wd.calc(p),Rd.calc(p),Cd.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let e=0,a=t.points.length;e<a;e++){const o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,a=this.points.length;e<a;e++){const o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,a=t.points.length;e<a;e++){const o=t.points[e];this.points.push(new V().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}const Pw={triangulate:function(r,t,e=2){const a=t&&t.length,o=a?t[0]*e:r.length;let c=Qy(r,0,o,e,!0);const u=[];if(!c||c.next===c.prev)return u;let f,p,d,g,_,v,y;if(a&&(c=Fw(r,t,c,e)),r.length>80*e){f=d=r[0],p=g=r[1];for(let M=e;M<o;M+=e)_=r[M],v=r[M+1],_<f&&(f=_),v<p&&(p=v),_>d&&(d=_),v>g&&(g=v);y=Math.max(d-f,g-p),y=y!==0?32767/y:0}return bl(c,u,e,f,p,y,0),u}};function Qy(r,t,e,a,o){let c,u;if(o===Kw(r,t,e,a)>0)for(c=t;c<e;c+=a)u=iy(c,r[c],r[c+1],u);else for(c=e-a;c>=t;c-=a)u=iy(c,r[c],r[c+1],u);return u&&Bu(u,u.next)&&(Tl(u),u=u.next),u}function Kr(r,t){if(!r)return r;t||(t=r);let e=r,a;do if(a=!1,!e.steiner&&(Bu(e,e.next)||rn(e.prev,e,e.next)===0)){if(Tl(e),e=t=e.prev,e===e.next)break;a=!0}else e=e.next;while(a||e!==t);return t}function bl(r,t,e,a,o,c,u){if(!r)return;!u&&c&&Ww(r,a,o,c);let f=r,p,d;for(;r.prev!==r.next;){if(p=r.prev,d=r.next,c?zw(r,a,o,c):Ow(r)){t.push(p.i/e|0),t.push(r.i/e|0),t.push(d.i/e|0),Tl(r),r=d.next,f=d.next;continue}if(r=d,r===f){u?u===1?(r=Bw(Kr(r),t,e),bl(r,t,e,a,o,c,2)):u===2&&Iw(r,t,e,a,o,c):bl(Kr(r),t,e,a,o,c,1);break}}}function Ow(r){const t=r.prev,e=r,a=r.next;if(rn(t,e,a)>=0)return!1;const o=t.x,c=e.x,u=a.x,f=t.y,p=e.y,d=a.y,g=o<c?o<u?o:u:c<u?c:u,_=f<p?f<d?f:d:p<d?p:d,v=o>c?o>u?o:u:c>u?c:u,y=f>p?f>d?f:d:p>d?p:d;let M=a.next;for(;M!==t;){if(M.x>=g&&M.x<=v&&M.y>=_&&M.y<=y&&Ys(o,f,c,p,u,d,M.x,M.y)&&rn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function zw(r,t,e,a){const o=r.prev,c=r,u=r.next;if(rn(o,c,u)>=0)return!1;const f=o.x,p=c.x,d=u.x,g=o.y,_=c.y,v=u.y,y=f<p?f<d?f:d:p<d?p:d,M=g<_?g<v?g:v:_<v?_:v,E=f>p?f>d?f:d:p>d?p:d,S=g>_?g>v?g:v:_>v?_:v,x=Tp(y,M,t,e,a),O=Tp(E,S,t,e,a);let w=r.prevZ,A=r.nextZ;for(;w&&w.z>=x&&A&&A.z<=O;){if(w.x>=y&&w.x<=E&&w.y>=M&&w.y<=S&&w!==o&&w!==u&&Ys(f,g,p,_,d,v,w.x,w.y)&&rn(w.prev,w,w.next)>=0||(w=w.prevZ,A.x>=y&&A.x<=E&&A.y>=M&&A.y<=S&&A!==o&&A!==u&&Ys(f,g,p,_,d,v,A.x,A.y)&&rn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;w&&w.z>=x;){if(w.x>=y&&w.x<=E&&w.y>=M&&w.y<=S&&w!==o&&w!==u&&Ys(f,g,p,_,d,v,w.x,w.y)&&rn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;A&&A.z<=O;){if(A.x>=y&&A.x<=E&&A.y>=M&&A.y<=S&&A!==o&&A!==u&&Ys(f,g,p,_,d,v,A.x,A.y)&&rn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Bw(r,t,e){let a=r;do{const o=a.prev,c=a.next.next;!Bu(o,c)&&Jy(o,a,a.next,c)&&El(o,c)&&El(c,o)&&(t.push(o.i/e|0),t.push(a.i/e|0),t.push(c.i/e|0),Tl(a),Tl(a.next),a=r=c),a=a.next}while(a!==r);return Kr(a)}function Iw(r,t,e,a,o,c){let u=r;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&Yw(u,f)){let p=$y(u,f);u=Kr(u,u.next),p=Kr(p,p.next),bl(u,t,e,a,o,c,0),bl(p,t,e,a,o,c,0);return}f=f.next}u=u.next}while(u!==r)}function Fw(r,t,e,a){const o=[];let c,u,f,p,d;for(c=0,u=t.length;c<u;c++)f=t[c]*a,p=c<u-1?t[c+1]*a:r.length,d=Qy(r,f,p,a,!1),d===d.next&&(d.steiner=!0),o.push(qw(d));for(o.sort(Hw),c=0;c<o.length;c++)e=Vw(o[c],e);return e}function Hw(r,t){return r.x-t.x}function Vw(r,t){const e=Gw(r,t);if(!e)return t;const a=$y(e,r);return Kr(a,a.next),Kr(e,e.next)}function Gw(r,t){let e=t,a=-1/0,o;const c=r.x,u=r.y;do{if(u<=e.y&&u>=e.next.y&&e.next.y!==e.y){const v=e.x+(u-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=c&&v>a&&(a=v,o=e.x<e.next.x?e:e.next,v===c))return o}e=e.next}while(e!==t);if(!o)return null;const f=o,p=o.x,d=o.y;let g=1/0,_;e=o;do c>=e.x&&e.x>=p&&c!==e.x&&Ys(u<d?c:a,u,p,d,u<d?a:c,u,e.x,e.y)&&(_=Math.abs(u-e.y)/(c-e.x),El(e,r)&&(_<g||_===g&&(e.x>o.x||e.x===o.x&&kw(o,e)))&&(o=e,g=_)),e=e.next;while(e!==f);return o}function kw(r,t){return rn(r.prev,r,t.prev)<0&&rn(t.next,r,r.next)<0}function Ww(r,t,e,a){let o=r;do o.z===0&&(o.z=Tp(o.x,o.y,t,e,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,Xw(o)}function Xw(r){let t,e,a,o,c,u,f,p,d=1;do{for(e=r,r=null,c=null,u=0;e;){for(u++,a=e,f=0,t=0;t<d&&(f++,a=a.nextZ,!!a);t++);for(p=d;f>0||p>0&&a;)f!==0&&(p===0||!a||e.z<=a.z)?(o=e,e=e.nextZ,f--):(o=a,a=a.nextZ,p--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;e=a}c.nextZ=null,d*=2}while(u>1);return r}function Tp(r,t,e,a,o){return r=(r-e)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function qw(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ys(r,t,e,a,o,c,u,f){return(o-u)*(t-f)>=(r-u)*(c-f)&&(r-u)*(a-f)>=(e-u)*(t-f)&&(e-u)*(c-f)>=(o-u)*(a-f)}function Yw(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!jw(r,t)&&(El(r,t)&&El(t,r)&&Zw(r,t)&&(rn(r.prev,r,t.prev)||rn(r,t.prev,t))||Bu(r,t)&&rn(r.prev,r,r.next)>0&&rn(t.prev,t,t.next)>0)}function rn(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Bu(r,t){return r.x===t.x&&r.y===t.y}function Jy(r,t,e,a){const o=hu(rn(r,t,e)),c=hu(rn(r,t,a)),u=hu(rn(e,a,r)),f=hu(rn(e,a,t));return!!(o!==c&&u!==f||o===0&&fu(r,e,t)||c===0&&fu(r,a,t)||u===0&&fu(e,r,a)||f===0&&fu(e,t,a))}function fu(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function hu(r){return r>0?1:r<0?-1:0}function jw(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Jy(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function El(r,t){return rn(r.prev,r,r.next)<0?rn(r,t,r.next)>=0&&rn(r,r.prev,t)>=0:rn(r,t,r.prev)<0||rn(r,r.next,t)<0}function Zw(r,t){let e=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do e.y>c!=e.next.y>c&&e.next.y!==e.y&&o<(e.next.x-e.x)*(c-e.y)/(e.next.y-e.y)+e.x&&(a=!a),e=e.next;while(e!==r);return a}function $y(r,t){const e=new Ap(r.i,r.x,r.y),a=new Ap(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,e.next=o,o.prev=e,a.next=e,e.prev=a,c.next=a,a.prev=c,a}function iy(r,t,e,a){const o=new Ap(r,t,e);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function Tl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ap(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kw(r,t,e,a){let o=0;for(let c=t,u=e-a;c<e;c+=a)o+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return o}class qp{static area(t){const e=t.length;let a=0;for(let o=e-1,c=0;c<e;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return qp.area(t)<0}static triangulateShape(t,e){const a=[],o=[],c=[];ay(t),ry(a,t);let u=t.length;e.forEach(ay);for(let p=0;p<e.length;p++)o.push(u),u+=e[p].length,ry(a,e[p]);const f=Pw.triangulate(a,o);for(let p=0;p<f.length;p+=3)c.push(f.slice(p,p+3));return c}}function ay(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ry(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Qw extends xr{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Jw extends xr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dy,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $w extends Jw{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function du(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function tR(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function eR(r){function t(o,c){return r[o]-r[c]}const e=r.length,a=new Array(e);for(let o=0;o!==e;++o)a[o]=o;return a.sort(t),a}function sy(r,t,e){const a=r.length,o=new r.constructor(a);for(let c=0,u=0;u!==a;++c){const f=e[c]*t;for(let p=0;p!==t;++p)o[u++]=r[f+p]}return o}function tx(r,t,e,a){let o=1,c=r[0];for(;c!==void 0&&c[a]===void 0;)c=r[o++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(t.push(c.time),e.push.apply(e,u)),c=r[o++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(t.push(c.time),u.toArray(e,e.length)),c=r[o++];while(c!==void 0);else do u=c[a],u!==void 0&&(t.push(c.time),e.push(u)),c=r[o++];while(c!==void 0)}class Iu{constructor(t,e,a,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new e.constructor(a),this.sampleValues=e,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let a=this._cachedIndex,o=e[a],c=e[a-1];t:{e:{let u;n:{i:if(!(t<o)){for(let f=a+2;;){if(o===void 0){if(t<c)break i;return a=e.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(c=o,o=e[++a],t<o)break e}u=e.length;break n}if(!(t>=c)){const f=e[1];t<f&&(a=2,c=f);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(o=c,c=e[--a-1],t>=c)break e}u=a,a=0;break n}break t}for(;a<u;){const f=a+u>>>1;t<e[f]?u=f:a=f+1}if(o=e[a],c=e[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return a=e.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,o)}return this.interpolate_(a,c,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o;for(let u=0;u!==o;++u)e[u]=a[c+u];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class nR extends Iu{constructor(t,e,a,o){super(t,e,a,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xv,endingEnd:Xv}}intervalChanged_(t,e,a){const o=this.parameterPositions;let c=t-2,u=t+1,f=o[c],p=o[u];if(f===void 0)switch(this.getSettings_().endingStart){case qv:c=t,f=2*e-a;break;case Yv:c=o.length-2,f=e+o[c]-o[c+1];break;default:c=t,f=a}if(p===void 0)switch(this.getSettings_().endingEnd){case qv:u=t,p=2*a-e;break;case Yv:u=1,p=a+o[1]-o[0];break;default:u=t-1,p=e}const d=(a-e)*.5,g=this.valueSize;this._weightPrev=d/(e-f),this._weightNext=d/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(t,e,a,o){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=t*f,d=p-f,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,M=(a-e)/(o-e),E=M*M,S=E*M,x=-v*S+2*v*E-v*M,O=(1+v)*S+(-1.5-2*v)*E+(-.5+v)*M+1,w=(-1-y)*S+(1.5+y)*E+.5*M,A=y*S-y*E;for(let P=0;P!==f;++P)c[P]=x*u[g+P]+O*u[d+P]+w*u[p+P]+A*u[_+P];return c}}class iR extends Iu{constructor(t,e,a,o){super(t,e,a,o)}interpolate_(t,e,a,o){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=t*f,d=p-f,g=(a-e)/(o-e),_=1-g;for(let v=0;v!==f;++v)c[v]=u[d+v]*_+u[p+v]*g;return c}}class aR extends Iu{constructor(t,e,a,o){super(t,e,a,o)}interpolate_(t){return this.copySampleValue_(t-1)}}class ea{constructor(t,e,a,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=du(e,this.TimeBufferType),this.values=du(a,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let a;if(e.toJSON!==this.toJSON)a=e.toJSON(t);else{a={name:t.name,times:du(t.times,Array),values:du(t.values,Array)};const o=t.getInterpolation();o!==t.DefaultInterpolation&&(a.interpolation=o)}return a.type=t.ValueTypeName,a}InterpolantFactoryMethodDiscrete(t){return new aR(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new iR(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nR(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case bu:e=this.InterpolantFactoryMethodDiscrete;break;case Sp:e=this.InterpolantFactoryMethodLinear;break;case Kh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bu;case this.InterpolantFactoryMethodLinear:return Sp;case this.InterpolantFactoryMethodSmooth:return Kh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let a=0,o=e.length;a!==o;++a)e[a]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let a=0,o=e.length;a!==o;++a)e[a]*=t}return this}trim(t,e){const a=this.times,o=a.length;let c=0,u=o-1;for(;c!==o&&a[c]<t;)++c;for(;u!==-1&&a[u]>e;)--u;if(++u,c!==0||u!==o){c>=u&&(u=Math.max(u,1),c=u-1);const f=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*f,u*f)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const a=this.times,o=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let u=null;for(let f=0;f!==c;f++){const p=a[f];if(typeof p=="number"&&isNaN(p)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,p),t=!1;break}if(u!==null&&u>p){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,p,u),t=!1;break}u=p}if(o!==void 0&&tR(o))for(let f=0,p=o.length;f!==p;++f){const d=o[f];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),a=this.getValueSize(),o=this.getInterpolation()===Kh,c=t.length-1;let u=1;for(let f=1;f<c;++f){let p=!1;const d=t[f],g=t[f+1];if(d!==g&&(f!==1||d!==t[0]))if(o)p=!0;else{const _=f*a,v=_-a,y=_+a;for(let M=0;M!==a;++M){const E=e[_+M];if(E!==e[v+M]||E!==e[y+M]){p=!0;break}}}if(p){if(f!==u){t[u]=t[f];const _=f*a,v=u*a;for(let y=0;y!==a;++y)e[v+y]=e[_+y]}++u}}if(c>0){t[u]=t[c];for(let f=c*a,p=u*a,d=0;d!==a;++d)e[p+d]=e[f+d];++u}return u!==t.length?(this.times=t.slice(0,u),this.values=e.slice(0,u*a)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),a=this.constructor,o=new a(this.name,t,e);return o.createInterpolant=this.createInterpolant,o}}ea.prototype.TimeBufferType=Float32Array;ea.prototype.ValueBufferType=Float32Array;ea.prototype.DefaultInterpolation=Sp;class co extends ea{constructor(t,e,a){super(t,e,a)}}co.prototype.ValueTypeName="bool";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=bu;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;class ex extends ea{}ex.prototype.ValueTypeName="color";class Ru extends ea{}Ru.prototype.ValueTypeName="number";class rR extends Iu{constructor(t,e,a,o){super(t,e,a,o)}interpolate_(t,e,a,o){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=(a-e)/(o-e);let d=t*f;for(let g=d+f;d!==g;d+=4)so.slerpFlat(c,0,u,d-f,u,d,p);return c}}class Fu extends ea{InterpolantFactoryMethodLinear(t){return new rR(this.times,this.values,this.getValueSize(),t)}}Fu.prototype.ValueTypeName="quaternion";Fu.prototype.InterpolantFactoryMethodSmooth=void 0;class uo extends ea{constructor(t,e,a){super(t,e,a)}}uo.prototype.ValueTypeName="string";uo.prototype.ValueBufferType=Array;uo.prototype.DefaultInterpolation=bu;uo.prototype.InterpolantFactoryMethodLinear=void 0;uo.prototype.InterpolantFactoryMethodSmooth=void 0;class Cu extends ea{}Cu.prototype.ValueTypeName="vector";class a3{constructor(t="",e=-1,a=[],o=I1){this.name=t,this.tracks=a,this.duration=e,this.blendMode=o,this.uuid=Hi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],a=t.tracks,o=1/(t.fps||1);for(let u=0,f=a.length;u!==f;++u)e.push(oR(a[u]).scale(o));const c=new this(t.name,t.duration,e,t.blendMode);return c.uuid=t.uuid,c}static toJSON(t){const e=[],a=t.tracks,o={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let c=0,u=a.length;c!==u;++c)e.push(ea.toJSON(a[c]));return o}static CreateFromMorphTargetSequence(t,e,a,o){const c=e.length,u=[];for(let f=0;f<c;f++){let p=[],d=[];p.push((f+c-1)%c,f,(f+1)%c),d.push(0,1,0);const g=eR(p);p=sy(p,1,g),d=sy(d,1,g),!o&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new Ru(".morphTargetInfluences["+e[f].name+"]",p,d).scale(1/a))}return new this(t,-1,u)}static findByName(t,e){let a=t;if(!Array.isArray(t)){const o=t;a=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<a.length;o++)if(a[o].name===e)return a[o];return null}static CreateClipsFromMorphTargetSequences(t,e,a){const o={},c=/^([\w-]*?)([\d]+)$/;for(let f=0,p=t.length;f<p;f++){const d=t[f],g=d.name.match(c);if(g&&g.length>1){const _=g[1];let v=o[_];v||(o[_]=v=[]),v.push(d)}}const u=[];for(const f in o)u.push(this.CreateFromMorphTargetSequence(f,o[f],e,a));return u}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,y,M,E){if(y.length!==0){const S=[],x=[];tx(y,S,x,M),S.length!==0&&E.push(new _(v,S,x))}},o=[],c=t.name||"default",u=t.fps||30,f=t.blendMode;let p=t.length||-1;const d=t.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let E=0;E<v[M].morphTargets.length;E++)y[v[M].morphTargets[E]]=-1;for(const E in y){const S=[],x=[];for(let O=0;O!==v[M].morphTargets.length;++O){const w=v[M];S.push(w.time),x.push(w.morphTarget===E?1:0)}o.push(new Ru(".morphTargetInfluence["+E+"]",S,x))}p=y.length*u}else{const y=".bones["+e[_].name+"]";a(Cu,y+".position",v,"pos",o),a(Fu,y+".quaternion",v,"rot",o),a(Cu,y+".scale",v,"scl",o)}}return o.length===0?null:new this(c,p,o,f)}resetDuration(){const t=this.tracks;let e=0;for(let a=0,o=t.length;a!==o;++a){const c=this.tracks[a];e=Math.max(e,c.times[c.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sR(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ru;case"vector":case"vector2":case"vector3":case"vector4":return Cu;case"color":return ex;case"quaternion":return Fu;case"bool":case"boolean":return co;case"string":return uo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function oR(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=sR(r.type);if(r.times===void 0){const e=[],a=[];tx(r.keys,e,a,"value"),r.times=e,r.values=a}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const mr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lR{constructor(t,e,a){const o=this;let c=!1,u=0,f=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=a,this.itemStart=function(g){f++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,f),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,f),u===f&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const y=d[_],M=d[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return M}return null}}}const cR=new lR;class Cl{constructor(t){this.manager=t!==void 0?t:cR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const a=this;return new Promise(function(o,c){a.load(t,o,e,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ba={};class uR extends Error{constructor(t,e){super(t),this.response=e}}class r3 extends Cl{constructor(t){super(t)}load(t,e,a,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=mr.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(c),this.manager.itemEnd(t)},0),c;if(ba[t]!==void 0){ba[t].push({onLoad:e,onProgress:a,onError:o});return}ba[t]=[],ba[t].push({onLoad:e,onProgress:a,onError:o});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=ba[t],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,M=y!==0;let E=0;const S=new ReadableStream({start(x){O();function O(){_.read().then(({done:w,value:A})=>{if(w)x.close();else{E+=A.byteLength;const P=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let L=0,z=g.length;L<z;L++){const I=g[L];I.onProgress&&I.onProgress(P)}x.enqueue(A),O()}},w=>{x.error(w)})}}});return new Response(S)}else throw new uR(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return d.json();default:if(f===void 0)return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(M=>y.decode(M))}}}).then(d=>{mr.add(t,d);const g=ba[t];delete ba[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=ba[t];if(g===void 0)throw this.manager.itemError(t),d;delete ba[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class fR extends Cl{constructor(t){super(t)}load(t,e,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=mr.get(t);if(u!==void 0)return c.manager.itemStart(t),setTimeout(function(){e&&e(u),c.manager.itemEnd(t)},0),u;const f=Ml("img");function p(){g(),mr.add(t,this),e&&e(this),c.manager.itemEnd(t)}function d(_){g(),o&&o(_),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(t),f.src=t,f}}class s3 extends Cl{constructor(t){super(t)}load(t,e,a,o){const c=new Pn,u=new fR(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){c.image=f,c.needsUpdate=!0,e!==void 0&&e(c)},a,o),c}}class Dl extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hR extends Dl{constructor(t,e,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Dd=new ye,oy=new V,ly=new V;class Yp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gp,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,a=this.matrix;oy.setFromMatrixPosition(t.matrixWorld),e.position.copy(oy),ly.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ly),e.updateMatrixWorld(),Dd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dR extends Yp{constructor(){super(new ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,a=no*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height,c=t.distance||e.far;(a!==e.fov||o!==e.aspect||c!==e.far)&&(e.fov=a,e.aspect=o,e.far=c,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class o3 extends Dl{constructor(t,e,a=0,o=Math.PI/3,c=0,u=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new dR}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const cy=new ye,pl=new V,Ud=new V;class pR extends Yp{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new Le(2,1,1,1),new Le(0,1,1,1),new Le(3,1,1,1),new Le(1,1,1,1),new Le(3,0,1,1),new Le(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),pl.setFromMatrixPosition(t.matrixWorld),a.position.copy(pl),Ud.copy(a.position),Ud.add(this._cubeDirections[e]),a.up.copy(this._cubeUps[e]),a.lookAt(Ud),a.updateMatrixWorld(),o.makeTranslation(-pl.x,-pl.y,-pl.z),cy.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cy)}}class mR extends Dl{constructor(t,e,a=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new pR}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gR extends Yp{constructor(){super(new kp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ld extends Dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new gR}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class l3 extends Dl{constructor(t,e,a=10,o=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=a,this.height=o}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class c3{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let a=0,o=t.length;a<o;a++)e+=String.fromCharCode(t[a]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class u3 extends Cl{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,a,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=mr.get(t);if(u!==void 0){if(c.manager.itemStart(t),u.then){u.then(d=>{e&&e(d),c.manager.itemEnd(t)}).catch(d=>{o&&o(d)});return}return setTimeout(function(){e&&e(u),c.manager.itemEnd(t)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader;const p=fetch(t,f).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){return mr.add(t,d),e&&e(d),c.manager.itemEnd(t),d}).catch(function(d){o&&o(d),mr.remove(t),c.manager.itemError(t),c.manager.itemEnd(t)});mr.add(t,p),c.manager.itemStart(t)}}const jp="\\[\\]\\.:\\/",vR=new RegExp("["+jp+"]","g"),Zp="[^"+jp+"]",_R="[^"+jp.replace("\\.","")+"]",yR=/((?:WC+[\/:])*)/.source.replace("WC",Zp),xR=/(WCOD+)?/.source.replace("WCOD",_R),SR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zp),MR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zp),bR=new RegExp("^"+yR+xR+SR+MR+"$"),ER=["material","materials","bones","map"];class TR{constructor(t,e,a){const o=a||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,o)}getValue(t,e){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(t,e)}setValue(t,e){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,a=t.length;e!==a;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,a=t.length;e!==a;++e)t[e].unbind()}}class Ye{constructor(t,e,a){this.path=e,this.parsedPath=a||Ye.parseTrackName(e),this.node=Ye.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,a){return t&&t.isAnimationObjectGroup?new Ye.Composite(t,e,a):new Ye(t,e,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vR,"")}static parseTrackName(t){const e=bR.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);ER.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(e);if(a!==void 0)return a}if(t.children){const a=function(c){for(let u=0;u<c.length;u++){const f=c[u];if(f.name===e||f.uuid===e)return f;const p=a(f.children);if(p)return p}return null},o=a(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)t[e++]=a[o]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,a=e.objectName,o=e.propertyName;let c=e.propertyIndex;if(t||(t=Ye.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=e.objectIndex;switch(a){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(d!==void 0){if(t[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const u=t[o];if(u===void 0){const d=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",t);return}let f=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?f=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=TR;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const uy=new ye;class Kp{constructor(t,e,a=0,o=1/0){this.ray=new wl(t,e),this.near=a,this.far=o,this.camera=null,this.layers=new Hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uy.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uy),this}intersectObject(t,e=!0,a=[]){return wp(t,this,a,e),a.sort(fy),a}intersectObjects(t,e=!0,a=[]){for(let o=0,c=t.length;o<c;o++)wp(t[o],this,a,e);return a.sort(fy),a}}function fy(r,t){return r.distance-t.distance}function wp(r,t,e,a){let o=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,f=c.length;u<f;u++)wp(c[u],t,e,!0)}}const hy=new ie;class AR{constructor(t=new ie(1/0,1/0),e=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=hy.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hy).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);const nx=fe.createContext(null),wR=()=>fe.useContext(nx);function RR({children:r}){const[t,e]=fe.useState();return fe.useEffect(()=>{let a=null;try{new URLSearchParams(location.search).get("preview")!=="canvas"&&(a=new Ew({alpha:!0,antialias:!0,powerPreference:"high-performance"}),a.outputColorSpace=Hn,a.toneMapping=Up,a.toneMappingExposure=1.14,a.shadowMap.enabled=!0,a.shadowMap.type=Lu)}catch{}const o=c=>{c.preventDefault(),e(null)};return a?.domElement.addEventListener("webglcontextlost",o),e(a),()=>{a?.domElement.removeEventListener("webglcontextlost",o),a?.dispose()}},[]),t===void 0?Ct.jsx("div",{className:"studio-loading",role:"status",children:"Preparing the study…"}):Ct.jsx(nx.Provider,{value:t,children:r})}function CR(r){const t=new hR("#fff4d9","#72846d",2.35),e=new Ld("#fff5df",3.2);e.position.set(-3.8,5.3,4.5),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-2.5,right:2.5,top:3,bottom:-3}),e.shadow.bias=-15e-5,e.shadow.normalBias=.008,e.shadow.radius=10;const a=new Ld("#f1a8a0",2.2);a.position.set(4.1,1.7,1.9);const o=new Ld("#fff0bf",3.2);o.position.set(.4,1.2,-4.2);const c=new mR("#d6e4c1",.95,12);return c.position.set(-2,-1.2,2.8),r.add(t,e,a,o,c),()=>{e.shadow.map?.dispose(),r.remove(t,e,a,o,c)}}function DR(){const r=new Dn(new oo(30,30),new Qw({color:5325622,opacity:.13,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,r.renderOrder=-2,r}const Ki={distance:4.95,yaw:.92,pitch:.68},Su=3.8,Rp=7.4;function UR(r,t,e,a,o=Ki.yaw,c=Ki.pitch){const u=Be.lerp(a,Be.clamp(e,Su,Rp),.14),f=new V(0,-.3*t,0);return r.position.set(Math.sin(o)*Math.cos(c),Math.sin(c),Math.cos(o)*Math.cos(c)).multiplyScalar(u).add(f),r.lookAt(f),r.updateMatrixWorld(!0),u}function LR(r,t,e){r.aspect=t/e;const a=t<=760&&e>t;r.setViewOffset(t,e,a?0:-t*.125,-e*(a?.04:.075),t,e),r.updateProjectionMatrix()}function NR(r,t){const e=r.getWorldDirection(new V).negate(),a=new V().crossVectors(new V(0,1,0),e).normalize(),o=new V().crossVectors(e,a),c=new V(0,-.3,0),u=r.projectionMatrix.elements;return{right:a,up:o,direction:e,focus:c,distance:r.position.distanceTo(c.clone().multiplyScalar(t))/t,halfFov:new ie(.94/u[0],.94/u[5]),offsetFov:new ie(u[8]/u[0],u[9]/u[5]),depthLimit:1.65}}const PR=112,OR=144;function Hu(r,t,{rings:e=PR,sides:a=OR}={}){const o=new Float32Array((e+1)*(a+1)*3),c=new Float32Array(o.length),u=new Float32Array(o.length),f=[];for(let g=0;g<=e;g++){const _=g/e*Math.PI;for(let v=0;v<=a;v++){const y=v/a*Math.PI*2,M=Math.sin(_)*Math.sin(y),E=Math.sin(_)*Math.cos(y),S=Math.cos(_),x=(g*(a+1)+v)*3;c.set([M,E,S],x);const O=r(M,E,S);o.set(O,x);const w=t(O,[M,E,S]);u.set([w.r,w.g,w.b],x)}}for(let g=0;g<e;g++)for(let _=0;_<a;_++){const v=g*(a+1)+_,y=v+a+1;f.push(v,v+1,y,v+1,y+1,y)}const p=new pi;p.setAttribute("position",new Ke(o.slice(),3)),p.setAttribute("color",new Ke(u,3)),p.setAttribute("aFleshCoordinate",new Ke(c.slice(),3)),p.setIndex(f),p.computeVertexNormals();const d=p.getAttribute("normal");for(let g=0;g<=e;g++){const _=g*(a+1),v=_+a,y=new V().fromBufferAttribute(d,_).add(new V().fromBufferAttribute(d,v)).normalize();d.setXYZ(_,y.x,y.y,y.z),d.setXYZ(v,y.x,y.y,y.z)}for(const g of[0,e]){const _=new V;for(let v=0;v<a;v++)_.add(new V().fromBufferAttribute(d,g*(a+1)+v));_.normalize();for(let v=0;v<=a;v++)d.setXYZ(g*(a+1)+v,_.x,_.y,_.z)}return{geometry:p,sourcePositions:o,volumeSourcePositions:c,rings:e,sides:a}}const zR=112,BR=144,_l=(r,t,e)=>Be.smoothstep(r,t,e);function ix(r,t){const e=(t-.045)/.55,a=.38*(1-.3*Be.clamp(e,-1,1));return Math.hypot(r/a,e)}function ax(r,t,e){const a=Math.min(1,Math.hypot(r,t)),o=Math.atan2(r,t),c=Math.exp(-((Math.atan2(Math.sin(o),Math.cos(o))/.34)**2)),u=1.03*(1+.045*Math.cos(o)-.04*Math.cos(2*o)),f=Math.sin(o)*a*u,p=Math.cos(o)*a*(1.07+.1*c),d=Math.sqrt(Math.max(0,1-a*a)),g=Math.max(0,(a-.82)/.18),_=Math.sqrt(Math.max(0,1-g*g)),v=ix(f,p),y=1-_l(v,.08,1.08),M=.11*_-.16*y,E=Math.max(0,(a-.6)/.4),S=-.54*Math.sqrt(Math.max(0,1-E*E)),x=d>1e-6?Be.clamp((e/d+1)/2,0,1):.5;return[f,Be.lerp(S,M,x),-p]}function IR(){const r=new Gt("#eee3cd"),t=new Gt("#f2dcd3"),e=new Gt("#ce285c"),a=new Gt("#bd2853"),o=new Gt("#b23d60");return Hu(ax,(c,u)=>{const f=c[0],p=-c[2],d=ix(f,p),g=_l(u[2],-.06,.12),_=(1-_l(d,.75,1.85))*g,v=_l(p,-.15,1.14),y=r.clone().lerp(t,.22+v*.3);return y.lerp(e,v*v*.95).lerp(a,_*.88).lerp(o,(1-_l(d,.1,.72))*g*.25),y})}function FR(r){const t=r.onBeforeCompile.bind(r),a=r.customProgramCacheKey.bind(r)();r.onBeforeCompile=(o,c)=>{t(o,c),o.uniforms.uFiberRose={value:new Gt("#bc345d")},o.uniforms.uFiberCream={value:new Gt("#f9eee0")},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aFleshCoordinate;varying vec3 vFlesh;`),o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFlesh=aFleshCoordinate;`),o.vertexShader.includes("vFlesh=aFleshCoordinate;")||(o.vertexShader=o.vertexShader.replace("void main() {",`void main() {
vFlesh=aFleshCoordinate;`)),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFlesh;uniform vec3 uFiberRose,uFiberCream;
float fleshHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
`),o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
vec2 flesh=vFlesh.xy;float radius=length(flesh);float angle=atan(flesh.x,flesh.y-0.035);
float face=smoothstep(-0.04,0.15,vFlesh.z);
float fibers=pow(0.5+0.5*sin(angle*126.0+sin(angle*31.0)*2.4+radius*14.0),14.0);
fibers*=smoothstep(0.2,0.38,radius)*(1.0-smoothstep(0.77,0.97,radius));
fibers*=0.4+0.6*(0.5+0.5*sin(radius*93.0+angle*7.0));
float paleFibers=pow(0.5+0.5*sin(flesh.x*105.0+sin(flesh.y*9.0)*1.8+flesh.y*18.0),12.0);
paleFibers*=0.5+0.5*sin(flesh.y*29.0+flesh.x*11.0);
vec2 cells=flesh*85.0,cell=floor(cells);float seed=fleshHash(cell);
vec2 offset=vec2(fleshHash(cell+vec2(4.1,8.7)),fleshHash(cell+vec2(3.2,9.1)))*0.6+0.2;
float flecks=(1.0-smoothstep(0.04,0.17,length(fract(cells)-offset)))*step(0.945,seed);
float centerTint=1.0-smoothstep(0.4,0.95,radius);
diffuseColor.rgb=mix(diffuseColor.rgb,uFiberRose,face*(fibers*(0.13+0.32*centerTint)+flecks*0.42));
diffuseColor.rgb*=1.0-0.07*(1.0-smoothstep(0.10,0.48,radius))*face;
diffuseColor.rgb=mix(diffuseColor.rgb,uFiberCream,paleFibers*(0.015+0.09*smoothstep(0.3,0.65,radius))*(0.3+0.7*face));
`)},r.customProgramCacheKey=()=>`${a}-peach-slice-fibers-v1`}const HR=new kp(-1,1,1,-1,0,1);class VR extends pi{constructor(){super(),this.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jn([0,2,0,0,2,0],2))}}const GR=new VR;class kR{constructor(t){this._mesh=new Dn(GR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,HR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class WR{constructor(t,e,a){this.variables=[],this.currentTextureIndex=0;let o=Yn;const c={passThruTexture:{value:null}},u=d(_(),c),f=new kR(u);this.setDataType=function(v){return o=v,this},this.addVariable=function(v,y,M){const E=this.createShaderMaterial(y),S={name:v,initialValueTexture:M,material:E,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:gn,magFilter:gn};return this.variables.push(S),S},this.setVariableDependencies=function(v,y){v.dependencies=y},this.init=function(){if(a.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let v=0;v<this.variables.length;v++){const y=this.variables[v];y.renderTargets[0]=this.createRenderTarget(t,e,y.wrapS,y.wrapT,y.minFilter,y.magFilter),y.renderTargets[1]=this.createRenderTarget(t,e,y.wrapS,y.wrapT,y.minFilter,y.magFilter),this.renderTexture(y.initialValueTexture,y.renderTargets[0]),this.renderTexture(y.initialValueTexture,y.renderTargets[1]);const M=y.material,E=M.uniforms;if(y.dependencies!==null)for(let S=0;S<y.dependencies.length;S++){const x=y.dependencies[S];if(x.name!==y.name){let O=!1;for(let w=0;w<this.variables.length;w++)if(x.name===this.variables[w].name){O=!0;break}if(!O)return"Variable dependency not found. Variable="+y.name+", dependency="+x.name}E[x.name]={value:null},M.fragmentShader=`
uniform sampler2D `+x.name+`;
`+M.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const v=this.currentTextureIndex,y=this.currentTextureIndex===0?1:0;for(let M=0,E=this.variables.length;M<E;M++){const S=this.variables[M];if(S.dependencies!==null){const x=S.material.uniforms;for(let O=0,w=S.dependencies.length;O<w;O++){const A=S.dependencies[O];x[A.name].value=A.renderTargets[v].texture}}this.doRenderTarget(S.material,S.renderTargets[y])}this.currentTextureIndex=y},this.getCurrentRenderTarget=function(v){return v.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(v){return v.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){f.dispose();const v=this.variables;for(let y=0;y<v.length;y++){const M=v[y];M.initialValueTexture&&M.initialValueTexture.dispose();const E=M.renderTargets;for(let S=0;S<E.length;S++)E[S].dispose()}};function p(v){v.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}this.addResolutionDefine=p;function d(v,y){y=y||{};const M=new Na({name:"GPUComputationShader",uniforms:y,vertexShader:g(),fragmentShader:v});return p(M),M}this.createShaderMaterial=d,this.createRenderTarget=function(v,y,M,E,S,x){return v=v||t,y=y||e,M=M||wa,E=E||wa,S=S||gn,x=x||gn,new La(v,y,{wrapS:M,wrapT:E,minFilter:S,magFilter:x,format:Vn,type:o,depthBuffer:!1})},this.createTexture=function(){const v=new Float32Array(t*e*4),y=new zu(v,t,e,Vn,Yn);return y.needsUpdate=!0,y},this.renderTexture=function(v,y){c.passThruTexture.value=v,this.doRenderTarget(u,y),c.passThruTexture.value=null},this.doRenderTarget=function(v,y){const M=a.getRenderTarget(),E=a.xr.enabled,S=a.shadowMap.autoUpdate;a.xr.enabled=!1,a.shadowMap.autoUpdate=!1,f.material=v,a.setRenderTarget(y),f.render(a),f.material=u,a.xr.enabled=E,a.shadowMap.autoUpdate=S,a.setRenderTarget(M)};function g(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function _(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const hi=16,Je=24;function dy(r){return[-.5*r+r*r-.5*r*r*r,1-2.5*r*r+1.5*r*r*r,.5*r+2*r*r-1.5*r*r*r,-.5*r*r+.5*r*r*r]}function XR(r,t,e,a=(o,c,u)=>[o,c,u]){const o=hi/2,c=5,u=[],f=[],p=(P,L,z)=>{const I=u.length/3;return u.push(...a(P,L,z)),f.push(P,L,z),I},d=Array.from({length:c},()=>Array.from({length:o+1},()=>[])),g=[];for(let P=0;P<Je;P++){const L=P/Je*Math.PI*2;g.push(p(Math.sin(L),Math.cos(L),0))}for(let P=0;P<c;P++){const L=p(0,0,P/(c-1)*2-1);d[P][0]=Array(Je).fill(L),d[P][o]=g;for(let z=1;z<o;z++)for(let I=0;I<Je;I++){const C=Math.round(z*t/hi)*(e+1)+Math.round(I*e/Je);d[P][z][I]=p(r[C*3],r[C*3+1],r[C*3+2]*(P/(c-1)*2-1))}}const _=(P,L,z)=>d[P][L][(z%Je+Je)%Je],v=[],y=[],M=(P,L,z,I)=>{if(new Set([P,L,z,I]).size<4)return;const C=u[L*3]-u[P*3],T=u[L*3+1]-u[P*3+1],H=u[L*3+2]-u[P*3+2],Z=u[z*3]-u[P*3],G=u[z*3+1]-u[P*3+1],et=u[z*3+2]-u[P*3+2],rt=u[I*3]-u[P*3],N=u[I*3+1]-u[P*3+1],X=u[I*3+2]-u[P*3+2],W=(C*(G*X-et*N)+T*(et*rt-Z*X)+H*(Z*N-G*rt))/6;if(Math.abs(W)<1e-12)throw new Error("Degenerate material cell");W<0&&([L,z]=[z,L]),v.push(P,L,z,I),y.push(Math.abs(W))};for(let P=0;P<c-1;P++)for(let L=0;L<o;L++)for(let z=0;z<Je;z++){const I=_(P,L,z),C=_(P,L+1,z),T=_(P,L,z+1),H=_(P+1,L,z),Z=_(P,L+1,z+1),G=_(P+1,L+1,z),et=_(P+1,L,z+1),rt=_(P+1,L+1,z+1);M(I,C,Z,rt),M(I,Z,T,rt),M(I,T,et,rt),M(I,et,H,rt),M(I,H,G,rt),M(I,G,C,rt)}const E=u.length/3,S=Array.from({length:E},()=>new Set),x=Array.from({length:E},()=>[]);for(let P=0;P<y.length;P++)for(let L=0;L<4;L++){const z=v[P*4+L];x[z].push(P);for(let I=0;I<4;I++)L!==I&&S[z].add(v[P*4+I])}const O=new Uint32Array((hi+1)*Je);for(let P=0;P<=hi;P++)for(let L=0;L<Je;L++)O[P*Je+L]=P<=o?_(c-1,P,L):_(0,hi-P,L);const w=(P,L)=>O[P*Je+(L%Je+Je)%Je],A=[];for(let P=0;P<=t;P++)for(let L=0;L<=e;L++){const z=L*Je/e,I=P*hi/t,C=dy(z-Math.floor(z)),T=dy(I-Math.floor(I)),H=new Map;for(let Z=0;Z<4;Z++)for(let G=0;G<4;G++){const et=w(Math.max(0,Math.min(hi,Math.floor(I)+Z-1)),Math.floor(z)+G-1);H.set(et,(H.get(et)??0)+C[G]*T[Z])}A.push({nodes:[...H.keys()],weights:[...H.values()]})}return{nodeCount:E,restPositions:new Float32Array(u),materialPositions:new Float32Array(f),tetrahedra:new Uint32Array(v),tetraRestVolumes:new Float32Array(y),edges:S.map(P=>[...P]),incidentTetrahedra:x,surfaceGrid:O,bindings:A}}function qR(r){const t=[];return r.edges.forEach((e,a)=>{const o=new V().fromArray(r.restPositions,a*3),c=e.map(p=>new V().fromArray(r.restPositions,p*3).sub(o)),u=new pe().set(0,0,0,0,0,0,0,0,0),f=u.elements;c.forEach(p=>{const d=p.toArray(),g=1/Math.max(p.lengthSq(),1e-10);for(let _=0;_<3;_++)for(let v=0;v<3;v++)f[_*3+v]+=d[v]*d[_]*g}),u.invert(),c.forEach((p,d)=>{const g=1/Math.max(p.lengthSq(),1e-10);p.applyMatrix3(u).multiplyScalar(g),t.push([p.x,p.y,p.z,e[d]])})}),t}function YR(r,t,e){const a=e.restPositions,o=Array.from({length:e.tetraRestVolumes.length},(E,S)=>{const x=Array.from(e.tetrahedra.slice(S*4,S*4+4)),O=x.map(P=>new V().fromArray(a,P*3)),w=O.slice(1).map(P=>P.clone().sub(O[0])),A=new pe().set(w[0].x,w[1].x,w[2].x,w[0].y,w[1].y,w[2].y,w[0].z,w[1].z,w[2].z).invert();return{nodes:x,p:O,edges:w,inverse:A,bounds:new di().setFromPoints(O).expandByScalar(.035)}}),c=new Map,u=E=>Math.floor(E/.16);o.forEach((E,S)=>{for(let x=u(E.bounds.min.x);x<=u(E.bounds.max.x);x++)for(let O=u(E.bounds.min.y);O<=u(E.bounds.max.y);O++)for(let w=u(E.bounds.min.z);w<=u(E.bounds.max.z);w++){const A=`${x},${O},${w}`,P=c.get(A)??[];P.push(S),c.set(A,P)}});const f=new Float32Array(t.length/3*4),p=new Float32Array(f.length),d=new Float32Array(t.length),g=r.getAttribute("normal"),_=new V,v=new V,y=new V,M=[];for(let E=0;E<t.length/3;E++){_.fromArray(t,E*3);let S=c.get(`${u(_.x)},${u(_.y)},${u(_.z)}`);const x=()=>{const z=new Set;for(let I=u(_.x)-1;I<=u(_.x)+1;I++)for(let C=u(_.y)-1;C<=u(_.y)+1;C++)for(let T=u(_.z)-1;T<=u(_.z)+1;T++)for(const H of c.get(`${I},${C},${T}`)??[])z.add(H);return[...z]};if(S?.length||(S=x()),!S.length)throw new Error("This fragment is too thin to attach its surface safely. Try a wider bite.");let O=-1,w=1/0,A=[0,0,0,0];const P=z=>{for(const I of z){const C=o[I];v.copy(_).sub(C.p[0]).applyMatrix3(C.inverse);const T=1-v.x-v.y-v.z,H=Math.max(0,-T)+Math.max(0,-v.x)+Math.max(0,-v.y)+Math.max(0,-v.z);if(H<w&&(O=I,w=H,A[0]=T,A[1]=v.x,A[2]=v.y,A[3]=v.z,H<1e-7))break}};if(P(S),w>.75&&P(x()),w>3)throw new Error("This fragment is too thin to attach its surface safely. Try a wider bite.");const L=o[O];f.set(L.nodes,E*4),p.set(A,E*4),y.fromBufferAttribute(g,E),d.set(L.edges.map(z=>z.dot(y)),E*3),M.push({nodes:L.nodes,weights:A})}e.bindings=M,r.setAttribute("aVolumeNodes",new Ke(f,4)),r.setAttribute("aVolumeWeights",new Ke(p,4)),r.setAttribute("aVolumeNormal",new Ke(d,3))}const Bi=-.68,Nd=9.81,py=.55,ur=1/120,jR=10,my=6,Ws=48,Xs=.36,ZR=100;function qr(r,t,e){const a=new zu(r,t,e,Vn,Yn);return a.minFilter=a.magFilter=gn,a.generateMipmaps=!1,a.needsUpdate=!0,a}function Wr(r,t=256){const e=Math.max(1,Math.ceil(r.length/t)),a=new Float32Array(t*e*4);return r.forEach((o,c)=>a.set(o,c*4)),qr(a,t,e)}function $n(r,t){return new La(r,t,{type:Yn,format:Vn,minFilter:gn,magFilter:gn,depthBuffer:!1,stencilBuffer:!1})}class KR{constructor(t,e,a,o,c,u,f,p){this.renderer=t,this.geometry=e,this.source=a,this.restBounds.setFromBufferAttribute(new Ke(a,3)),this.topology=p??XR(u,o,c,f),e.userData.volumeSkinning&&!e.userData.volumeBindingsReady&&YR(e,a,this.topology);const d=this.topology;this.height=Math.ceil(d.nodeCount/this.width),this.nodesBuffer=new Float32Array(this.width*this.height*4);const g=new Float32Array(this.nodesBuffer.length);for(let N=0;N<d.nodeCount;N++)g.set([d.restPositions[N*3],d.restPositions[N*3+1],d.restPositions[N*3+2],1],N*4);this.rest=qr(g,this.width,this.height),this.textures.push(this.rest),this.gpu=new WR(this.width,this.height,t),this.positions=[$n(this.width,this.height),$n(this.width,this.height)],this.velocities=[$n(this.width,this.height),$n(this.width,this.height)],this.previous=$n(this.width,this.height),this.com=$n(1,1),this.grab=$n(1,1),this.skin=$n(Je,hi+1);const _=[],v=[],y=[];for(let N=0;N<d.nodeCount;N++){y.push([_.length,d.edges[N].length,v.length,d.incidentTetrahedra[N].length]);for(const X of d.edges[N])_.push([X,Math.hypot(...[0,1,2].map(W=>d.restPositions[X*3+W]-d.restPositions[N*3+W])),0,0]);for(const X of d.incidentTetrahedra[N])v.push([X,0,0,0])}const M=Wr(_),E=Wr(v),S=Wr(y,this.width),x=Wr(Array.from(d.tetraRestVolumes,(N,X)=>Array.from(d.tetrahedra.slice(X*4,X*4+4)))),O=Wr(Array.from(d.tetraRestVolumes,N=>[N,0,0,0]));this.boundsTarget=$n(2,1),this.shape=$n(4,1),this.viewportShift=$n(1,1),this.safety=$n(x.image.width,x.image.height),this.safeFraction=$n(1,1),this.grabWeightValues=new Float32Array(g.length),this.grabWeights=qr(this.grabWeightValues,this.width,this.height);const w=Wr(Array.from(d.surfaceGrid,N=>[N,0,0,0]),Je);this.textures.push(M,E,S,x,O,this.grabWeights,w);const A=`
uniform sampler2D uPositions,uRest,uVelocity;
uniform float uDelta;
uniform float uWalls,uWallDistance,uWallDepth;
uniform vec3 uWallRight,uWallUp,uWallDirection,uWallFocus;uniform vec2 uWallFov,uWallOffset;

vec2 nodeUv(float i){return (vec2(mod(i,${this.width}.0),floor(i/${this.width}.0))+0.5)/vec2(${this.width}.0,${this.height}.0);}
vec3 pos(float i){return texture2D(uPositions,nodeUv(i)).xyz;}
vec2 packedUv(float i,vec2 size){return (vec2(mod(i,size.x),floor(i/size.x))+0.5)/size;}
`,P=()=>({uPositions:{value:null},uRest:{value:this.rest},uVelocity:{value:null},uDelta:{value:ur},...this.wallUniforms}),L=(N,X={})=>{const W=this.gpu.createShaderMaterial(A+N,{...P(),...X});return this.materials.push(W),W};this.normalFrames=$n(this.width*3,this.height);const z=Wr(qR(d));this.textures.push(z),this.normalPass=L(`
uniform sampler2D uGradientLinks,uNodeMeta;
void main(){
 float column=mod(floor(gl_FragCoord.x),3.0);
 float id=floor(gl_FragCoord.x/3.0)+floor(gl_FragCoord.y)*${this.width}.0;
 if(id>=${d.nodeCount}.0){gl_FragColor=vec4(0.0);return;}
 vec4 meta=texture2D(uNodeMeta,nodeUv(id)); vec3 center=pos(id),f=vec3(0.0);
 for(int j=0;j<${Math.max(...d.edges.map(N=>N.length))};j++){
  if(float(j)>=meta.y)break;
  vec4 link=texture2D(uGradientLinks,packedUv(meta.x+float(j),vec2(${z.image.width}.0,${z.image.height}.0)));
  float coefficient=column<.5?link.x:(column<1.5?link.y:link.z);
  f+=(pos(link.w)-center)*coefficient;
 }
 gl_FragColor=vec4(f,1.0);
}`,{uGradientLinks:{value:z},uNodeMeta:{value:S}}),this.comPass=L(`void main(){vec3 v=vec3(0.0);float minimum=1e20;for(int i=0;i<${d.nodeCount};i++){v+=texture2D(uVelocity,nodeUv(float(i))).xyz;minimum=min(minimum,pos(float(i)).y);}gl_FragColor=vec4(v/${d.nodeCount}.0,minimum<${Bi+.001}?1.0:0.0);}`),this.predictPass=L(`
uniform sampler2D uCom,uShakeModeA,uShakeModeB,uShakeShape;
uniform float uDamping,uGravity,uShake,uAirDrag;
uniform vec2 uShakeMix;
void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 rest=texture2D(uRest,uv);if(rest.w<0.5){gl_FragColor=vec4(0.0);return;}
vec3 p=texture2D(uPositions,uv).xyz,v=texture2D(uVelocity,uv).xyz,com=texture2D(uCom,vec2(0.5)).xyz;
vec3 drift=com;
if(texture2D(uCom,vec2(.5)).w>.5&&com.y<.05){float slide=length(com.xz);drift.xz*=max(0.0,1.0-${py}*uGravity*${Nd}*uDelta/max(slide,0.000001));}
v=drift+(v-com)*exp(-uDamping*uDelta);
v.y-=uGravity*${Nd}*uDelta;v*=exp(-uAirDrag*uDelta);
if(abs(uShake)>0.0){
mat3 rotation=mat3(texture2D(uShakeShape,vec2(.375,.5)).xyz,texture2D(uShakeShape,vec2(.625,.5)).xyz,texture2D(uShakeShape,vec2(.875,.5)).xyz);
v+=uShake*rotation*(uShakeMix.x*texture2D(uShakeModeA,uv).xyz+uShakeMix.y*texture2D(uShakeModeB,uv).xyz);
}
gl_FragColor=vec4(p+v*uDelta,1.0);}`,{uCom:{value:this.com.texture},uDamping:{value:3},uGravity:{value:1},uAirDrag:{value:.08},uShake:{value:0},uShakeMix:{value:new ie},uShakeModeA:{value:null},uShakeModeB:{value:null},uShakeShape:{value:this.shape.texture}}),this.grabPass=L(`
uniform float uCount;uniform sampler2D uForceStencil;
uniform float uNodes[${Ws}];uniform float uWeights[${Ws}];uniform vec3 uPoint;
void main(){vec3 p=uPoint;float denom=0.0;for(int i=0;i<${Ws};i++){if(float(i)>=uCount)break;float w=uWeights[i];p+=w*(pos(uNodes[i])-texture2D(uRest,nodeUv(uNodes[i])).xyz);denom+=w*texture2D(uForceStencil,nodeUv(uNodes[i])).x;}gl_FragColor=vec4(p,denom);}`,{uCount:{value:0},uForceStencil:{value:this.grabWeights},uNodes:{value:new Float32Array(Ws)},uWeights:{value:new Float32Array(Ws)},uPoint:{value:new V}});const I=N=>({value:new ie(N.image.width,N.image.height)}),C=new V;for(let N=0;N<d.nodeCount;N++)C.add(new V().fromArray(d.restPositions,N*3));C.divideScalar(d.nodeCount);const T=new pe().set(0,0,0,0,0,0,0,0,0);for(let N=0;N<d.nodeCount;N++){const X=new V().fromArray(d.restPositions,N*3).sub(C);for(let W=0;W<3;W++)for(let at=0;at<3;at++)T.elements[W*3+at]+=X.getComponent(at)*X.getComponent(W)/d.nodeCount}const H=T.elements[0]+T.elements[4]+T.elements[8],Z=T.clone().multiplyScalar(-1);for(const N of[0,4,8])Z.elements[N]+=H;Z.invert();for(const[N,X]of[[0,"uShakeModeA"],[1,"uShakeModeB"]]){const W=[],at=[],B=new V,nt=new V;for(let ht=0;ht<d.nodeCount;ht++){const Mt=new V().fromArray(d.restPositions,ht*3).sub(C),Ft=N===0?new V(Mt.x,0,-Mt.z):new V(Mt.z,0,Mt.x);W.push(Mt),at.push(Ft),B.add(Ft),nt.add(new V().crossVectors(Mt,Ft))}B.divideScalar(d.nodeCount);const gt=nt.divideScalar(d.nodeCount).applyMatrix3(Z);let pt=0;for(let ht=0;ht<d.nodeCount;ht++)at[ht].sub(B).sub(new V().crossVectors(gt,W[ht])),pt+=at[ht].lengthSq();const $=1/Math.max(Math.sqrt(pt/d.nodeCount),1e-6),mt=new Float32Array(g.length);for(let ht=0;ht<d.nodeCount;ht++)at[ht].multiplyScalar($).toArray(mt,ht*4);const vt=qr(mt,this.width,this.height);this.textures.push(vt),this.predictPass.uniforms[X].value=vt}this.shapePass=L(`uniform vec3 uRestCenter;uniform mat3 uInverseCovariance,uInverseInertia;uniform float uGravity;
void main(){vec3 center=vec3(0.0);mat3 covariance=mat3(0.0);
for(int i=0;i<${d.nodeCount};i++){vec3 p=pos(float(i)),r=texture2D(uRest,nodeUv(float(i))).xyz-uRestCenter;center+=p;covariance+=mat3(p*r.x,p*r.y,p*r.z);}
center/=${d.nodeCount}.0;
mat3 rotation=(covariance/${d.nodeCount}.0)*uInverseCovariance;
for(int j=0;j<8;j++){vec3 a=rotation[0],b=rotation[1],c=rotation[2];float det=dot(a,cross(b,c));mat3 inverseTranspose=mat3(cross(b,c),cross(c,a),cross(a,b))/max(det,0.000001);rotation=(rotation+inverseTranspose)*0.5;}
// A tilted recovery frame needs the gravitational moment about its support
// region. A supported flat base has zero moment; an edge-balanced slice tips.
float low=1e20;
for(int i=0;i<${d.nodeCount};i++){vec3 q=rotation*(texture2D(uRest,nodeUv(float(i))).xyz-uRestCenter);low=min(low,q.y);}
if(center.y+low<${Bi+.006}&&uGravity>0.0){
vec2 footLow=vec2(1e20),footHigh=vec2(-1e20);
for(int i=0;i<${d.nodeCount};i++){vec3 q=rotation*(texture2D(uRest,nodeUv(float(i))).xyz-uRestCenter);if(q.y<low+.012){footLow=min(footLow,q.xz);footHigh=max(footHigh,q.xz);}}
vec2 foot=clamp(vec2(0.0),footLow,footHigh);
vec3 torque=cross(vec3(foot.x,low,foot.y),vec3(0.0,uGravity*${Nd},0.0));
vec3 localTorque=vec3(dot(rotation[0],torque),dot(rotation[1],torque),dot(rotation[2],torque));
vec3 angle=rotation*(uInverseInertia*localTorque)*uDelta*uDelta;
float turn=length(angle);if(turn>.012)angle*=.012/turn;
for(int j=0;j<3;j++)rotation[j]+=cross(angle,rotation[j]);
rotation[0]=normalize(rotation[0]);rotation[2]=normalize(cross(rotation[0],rotation[1]));rotation[1]=cross(rotation[2],rotation[0]);
}
if(gl_FragCoord.x<1.0){
float minimum=1e20;
for(int i=0;i<${d.nodeCount};i++)minimum=min(minimum,(rotation*(texture2D(uRest,nodeUv(float(i))).xyz-uRestCenter)).y);
center.y=max(center.y,${Bi}-minimum);gl_FragColor=vec4(center,1.0);return;
}
int column=int(floor(gl_FragCoord.x))-1;gl_FragColor=vec4(rotation[column],1.0);}`,{uRestCenter:{value:C},uInverseCovariance:{value:T.invert()},uInverseInertia:{value:Z},uGravity:{value:1}}),this.projectPass=L(`
uniform sampler2D uMeta,uLinks,uIncident,uTetra,uVolumes,uGrab,uGrabWeights,uPrevious;
uniform vec2 uLinkSize,uIncidentSize,uTetSize;
uniform float uEdgeCompliance,uGrabCompliance,uGrabActive;
uniform vec3 uGrabTarget,uRestCenter;uniform sampler2D uShape;uniform float uShapeStiffness;
void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 rest=texture2D(uRest,uv);if(rest.w<0.5){gl_FragColor=vec4(0.0);return;}
float id=floor(gl_FragCoord.y)*${this.width}.0+floor(gl_FragCoord.x);vec3 p=texture2D(uPositions,uv).xyz;vec4 meta=texture2D(uMeta,uv);
vec3 edge=vec3(0.0),volume=vec3(0.0),barrier=vec3(0.0);float worstRatio=0.4;
for(int j=0;j<${Math.max(...d.edges.map(N=>N.length))};j++){if(float(j)>=meta.y)break;vec4 link=texture2D(uLinks,packedUv(meta.x+float(j),uLinkSize));vec3 d=pos(link.x)-p;float len=max(length(d),0.000001);float degree=max(meta.y,texture2D(uMeta,nodeUv(link.x)).y);edge+=d*((len-link.y)/len)/((2.0+uEdgeCompliance/(uDelta*uDelta))*degree);
// A firm jelly can stretch locally, but thin boundary cells must not become
// long needles when contact and the hand pull in opposing directions.
if(len>link.y*1.5)edge+=d*((len-link.y*1.5)/len)/(2.0*degree);
}
for(int j=0;j<${Math.max(...d.incidentTetrahedra.map(N=>N.length))};j++){if(float(j)>=meta.w)break;float ti=texture2D(uIncident,packedUv(meta.z+float(j),uIncidentSize)).x;vec2 tu=packedUv(ti,uTetSize);vec4 ids=texture2D(uTetra,tu);float rv=texture2D(uVolumes,tu).x;
vec3 a=pos(ids.x),b=pos(ids.y),c=pos(ids.z),d=pos(ids.w);vec3 gb=cross(c-a,d-a)/6.0,gc=cross(d-a,b-a)/6.0,gd=cross(b-a,c-a)/6.0,ga=-gb-gc-gd;
float v=dot(b-a,gb);float denominator=dot(ga,ga)+dot(gb,gb)+dot(gc,gc)+dot(gd,gd)+2e-8*rv/(uDelta*uDelta);
vec3 grad=id==ids.x?ga:id==ids.y?gb:id==ids.z?gc:gd;
float degree=max(max(texture2D(uMeta,nodeUv(ids.x)).w,texture2D(uMeta,nodeUv(ids.y)).w),max(texture2D(uMeta,nodeUv(ids.z)).w,texture2D(uMeta,nodeUv(ids.w)).w));volume+=-grad*(v-rv)/(max(denominator,1e-15)*degree);if(v/rv<worstRatio){worstRatio=v/rv;barrier=-grad*(v-0.4*rv)/max(denominator,1e-15);}}
vec3 correction=0.8*edge+0.9*volume;
float lengthCorrection=length(correction);if(lengthCorrection>0.045)correction*=0.045/lengthCorrection;
vec3 center=texture2D(uShape,vec2(0.125,0.5)).xyz;
mat3 rotation=mat3(texture2D(uShape,vec2(0.375,0.5)).xyz,texture2D(uShape,vec2(0.625,0.5)).xyz,texture2D(uShape,vec2(0.875,0.5)).xyz);
// The recovery frame carries support torque; local contact and volume
// constraints still determine deformation at the floor.
vec3 goal=center+rotation*(rest.xyz-uRestCenter);goal.y=max(goal.y,${Bi});
p+=correction+0.8*barrier+uShapeStiffness*(goal-p);
if(uGrabActive>0.5){float weight=texture2D(uGrabWeights,uv).x;vec4 grab=texture2D(uGrab,vec2(0.5));vec3 move=weight*(uGrabTarget-grab.xyz)/(grab.w+uGrabCompliance/(uDelta*uDelta));float m=length(move);if(m>0.04)move*=0.04/m;p+=move;}
// Static/contact friction belongs to the position solve. This prevents the
// floor from being a frictionless moving support between velocity updates.
float penetration=max(0.0,${Bi}-p.y);
if(penetration>0.0){vec2 slip=p.xz-texture2D(uPrevious,uv).xz;p.xz-=slip*min(1.0,${py}*penetration/max(length(slip),0.000001));}
p.y=max(p.y,${Bi});gl_FragColor=vec4(p,1.0);}`,{uPrevious:{value:this.previous.texture},uShape:{value:this.shape.texture},uShapeStiffness:{value:.02},uRestCenter:{value:C},uMeta:{value:S},uLinks:{value:M},uIncident:{value:E},uTetra:{value:x},uVolumes:{value:O},uLinkSize:I(M),uIncidentSize:I(E),uTetSize:I(x),uGrab:{value:this.grab.texture},uGrabWeights:{value:this.grabWeights},uEdgeCompliance:{value:1e-6},uGrabCompliance:{value:1e-6},uGrabActive:{value:0},uGrabTarget:{value:this.grabTarget}}),this.viewportPass=L(`
void main(){
vec3 shift=vec3(0.0);
if(uWalls>0.5)for(int iteration=0;iteration<6;iteration++){
float nearDepth=-1e20,farDepth=1e20;
for(int i=0;i<${d.nodeCount};i++){float d=dot(pos(float(i))+shift-uWallFocus,uWallDirection);nearDepth=max(nearDepth,d);farDepth=min(farDepth,d);}
float dl=-uWallDepth-farDepth,dh=uWallDepth-nearDepth;
shift+=uWallDirection*(dl<=dh?clamp(0.0,dl,dh):(dl+dh)*.5);
vec2 lo=vec2(-1e20),hi=vec2(1e20);float lowest=1e20;
for(int i=0;i<${d.nodeCount};i++){
vec3 p=pos(float(i))+shift,q=p-uWallFocus;float depth=dot(q,uWallDirection);
vec2 xy=vec2(dot(q,uWallRight),dot(q,uWallUp));
lo=max(lo,(uWallDistance-depth)*(uWallOffset-uWallFov)-xy);
hi=min(hi,(uWallDistance-depth)*(uWallOffset+uWallFov)-xy);
lowest=min(lowest,p.y);
}
vec2 move=clamp(vec2(0.0),min(lo,hi),max(lo,hi));
shift+=uWallRight*move.x+uWallUp*move.y;
shift.y+=max(0.0,${Bi}-(lowest+uWallRight.y*move.x+uWallUp.y*move.y));
}
gl_FragColor=vec4(shift,1.0);}`,{}),this.applyViewportPass=L(`uniform sampler2D uShift;
void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 p=texture2D(uPositions,uv);p.xyz+=texture2D(uShift,vec2(.5)).xyz;gl_FragColor=p;}`,{uShift:{value:this.viewportShift.texture}}),this.safetyPass=L(`
uniform sampler2D uPrevious,uTetra,uVolumes;
uniform vec2 uTetSize;
float volume(vec3 a,vec3 b,vec3 c,vec3 d){return dot(b-a,cross(c-a,d-a))/6.0;}
void main(){vec2 uv=gl_FragCoord.xy/uTetSize;float rv=texture2D(uVolumes,uv).x;
if(rv<=0.0){gl_FragColor=vec4(1.0);return;}
vec4 ids=texture2D(uTetra,uv);
vec3 a=texture2D(uPrevious,nodeUv(ids.x)).xyz,b=texture2D(uPrevious,nodeUv(ids.y)).xyz,c=texture2D(uPrevious,nodeUv(ids.z)).xyz,d=texture2D(uPrevious,nodeUv(ids.w)).xyz;
vec3 da=pos(ids.x)-a,db=pos(ids.y)-b,dc=pos(ids.z)-c,dd=pos(ids.w)-d;
float safe=1.0;
if(volume(a+da,b+db,c+dc,d+dd)<rv*0.15 || volume(a+da*0.5,b+db*0.5,c+dc*0.5,d+dd*0.5)<rv*0.15){
float lo=0.0,hi=1.0;for(int j=0;j<12;j++){float f=(lo+hi)*0.5;if(volume(a+da*f,b+db*f,c+dc*f,d+dd*f)>=rv*0.15)lo=f;else hi=f;}safe=lo*0.98;
}gl_FragColor=vec4(safe);}`,{uPrevious:{value:this.previous.texture},uTetra:{value:x},uVolumes:{value:O},uTetSize:I(x)}),this.reduceSafetyPass=L(`uniform sampler2D uSafety;uniform vec2 uTetSize;
void main(){float f=1.0;for(int i=0;i<${d.tetraRestVolumes.length};i++)f=min(f,texture2D(uSafety,packedUv(float(i),uTetSize)).x);gl_FragColor=vec4(f);}`,{uSafety:{value:this.safety.texture},uTetSize:I(x)}),this.applySafetyPass=L("uniform sampler2D uPrevious,uFraction;void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;float f=texture2D(uFraction,vec2(0.5)).x;gl_FragColor=mix(texture2D(uPrevious,uv),texture2D(uPositions,uv),f);}",{uPrevious:{value:this.previous.texture},uFraction:{value:this.safeFraction.texture}}),this.velocityPass=L(`
uniform sampler2D uPrevious;
uniform float uGravity;
void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;if(texture2D(uRest,uv).w<0.5){gl_FragColor=vec4(0.0);return;}
vec3 p=texture2D(uPositions,uv).xyz,old=texture2D(uPrevious,uv).xyz,v=(p-old)/uDelta;
if(p.y<${Bi+.001}){
// Contact removes inward velocity. Upward motion is supplied by stored strain
// in the volume constraints, not a second impulse added to the whole body.
v.y=max(v.y,0.0);

}
float speed=length(v);if(speed>8.0)v*=8.0/speed;gl_FragColor=vec4(v,1.0);}`,{uPrevious:{value:this.previous.texture},uGravity:{value:1}}),this.boundsPass=L(`void main(){vec3 low=vec3(1e20),high=vec3(-1e20);
for(int i=0;i<${d.nodeCount};i++){vec3 d=pos(float(i))-texture2D(uRest,nodeUv(float(i))).xyz;low=min(low,d);high=max(high,d);}
gl_FragColor=vec4(gl_FragCoord.x<1.0?low:high,1.0);}`),this.skinPass=L(`uniform sampler2D uSurface;void main(){vec2 uv=gl_FragCoord.xy/vec2(${Je}.0,${hi+1}.0);float id=texture2D(uSurface,uv).x;gl_FragColor=vec4(pos(id)-texture2D(uRest,nodeUv(id)).xyz,1.0);}`,{uSurface:{value:w}});const G=new Float32Array(a.length),et=new Float32Array(a.length),rt=new Float32Array(a.length/3*2);for(let N=0;!e.userData.volumeSkinning&&N<=o;N++)for(let X=0;X<=c;X++){const W=N*(c+1)+X;rt[W*2]=X*Je/c,rt[W*2+1]=N*hi/o;const at=N*(c+1)+(X+c-1)%c,B=N*(c+1)+(X+1)%c,nt=Math.max(0,N-1)*(c+1)+X,gt=Math.min(o,N+1)*(c+1)+X;for(let pt=0;pt<3;pt++)G[W*3+pt]=(a[B*3+pt]-a[at*3+pt])*c/(2*Je),et[W*3+pt]=(a[gt*3+pt]-a[nt*3+pt])*o/(2*hi)}e.setAttribute("aRestPosition",new Ke(a.slice(),3)),e.hasAttribute("aRestDu")||e.setAttribute("aRestDu",new Ke(G,3)),e.hasAttribute("aRestDv")||e.setAttribute("aRestDv",new Ke(et,3)),e.setAttribute("aSoftUv",new Ke(rt,2)),this.reset()}renderer;geometry;topology;gpu;width=64;height;rest;positions;velocities;previous;com;grab;skin;textures=[];materials=[];comPass;predictPass;projectPass;velocityPass;grabPass;skinPass;normalPass;normalFrames;boundsPass;boundsTarget;boundsPixels=new Float32Array(8);restBounds=new di;surfaceBounds=new di;viewportPass;applyViewportPass;viewportShift;shapePass;shape;safetyPass;reduceSafetyPass;applySafetyPass;safety;safeFraction;grabWeights;grabWeightValues;nodesBuffer;source;start=new V;grabTarget=new V;requestedTarget=new V;targetDelta=new V;wallUniforms={uWalls:{value:0},uWallRight:{value:new V(1,0,0)},uWallUp:{value:new V(0,1,0)},uWallDirection:{value:new V(0,0,1)},uWallFocus:{value:new V},uWallDistance:{value:5},uWallFov:{value:new ie(1,1)},uWallOffset:{value:new ie},uWallDepth:{value:1.65}};accumulator=0;active=!1;shakePending=!1;shakeCount=0;shakeTime=Xs;disposed=!1;volumeUniforms=[];pass(t,e){t.uniforms.uPositions.value=this.positions[0].texture,t.uniforms.uVelocity.value=this.velocities[0].texture,this.gpu.doRenderTarget(t,e)}step(t,e){if(this.disposed||e.paused)return;this.accumulator+=Math.min(.05,Math.max(0,t))*(e.slowMotion?.24:1);let a=0;for(;this.accumulator>=ur&&a<my;){if(this.gpu.renderTexture(this.positions[0].texture,this.previous),this.pass(this.comPass,this.com),this.predictPass.uniforms.uGravity.value=e.gravity===!1?0:Be.clamp((e.gravityStrength??100)/100,0,2),this.shapePass.uniforms.uGravity.value=e.gravity===!1?0:Be.clamp((e.gravityStrength??100)/100,0,2),this.predictPass.uniforms.uAirDrag.value=this.active?1.4:.08,this.predictPass.uniforms.uDamping.value=Be.lerp(.6,8,e.damping/100),this.shakePending){this.shakePending=!1,this.shakeTime=0,this.shakeCount++;const u=this.shakeCount*2.17;this.predictPass.uniforms.uShakeMix.value.set(Math.cos(u),Math.sin(u))}let o=0;if(this.shakeTime<Xs){const u=(this.shakeTime+ur*.5)/Xs;o=ZR*ur*Math.sin(Math.PI*u)*Math.sin(4*Math.PI*u),this.shakeTime=Math.min(Xs,this.shakeTime+ur),this.pass(this.shapePass,this.shape)}this.predictPass.uniforms.uShake.value=o,this.pass(this.predictPass,this.positions[1]),this.positions.reverse();const c=Be.clamp((e.handStrength??60)/100,0,1);this.projectPass.uniforms.uEdgeCompliance.value=Be.lerp(8e-5,2e-8,e.firmness/100),this.active&&this.grabTarget.add(this.targetDelta.copy(this.requestedTarget).sub(this.grabTarget).clampLength(0,1.5*ur)),this.projectPass.uniforms.uGrabActive.value=this.active&&c>0?1:0,this.projectPass.uniforms.uGrabCompliance.value=Be.lerp(.007,.001,c*c),this.projectPass.uniforms.uShapeStiffness.value=Be.lerp(.012,.05,e.firmness/100),this.pass(this.shapePass,this.shape);for(let u=0;u<jR;u++)this.active&&c>0&&this.pass(this.grabPass,this.grab),this.pass(this.projectPass,this.positions[1]),this.positions.reverse();this.wallUniforms.uWalls.value>.5&&(this.pass(this.viewportPass,this.viewportShift),this.pass(this.applyViewportPass,this.positions[1]),this.positions.reverse()),this.pass(this.safetyPass,this.safety),this.pass(this.reduceSafetyPass,this.safeFraction),this.pass(this.applySafetyPass,this.positions[1]),this.positions.reverse(),this.pass(this.velocityPass,this.velocities[1]),this.velocities.reverse(),this.accumulator-=ur,a++}a===my&&(this.accumulator=Math.min(this.accumulator,ur)),a&&(this.pass(this.skinPass,this.skin),this.geometry.userData.volumeSkinning&&this.pass(this.normalPass,this.normalFrames),this.pass(this.boundsPass,this.boundsTarget));for(const o of this.volumeUniforms)o.value=this.positions[0].texture}beginGrab(t,e,a){if(this.start.copy(t),this.grabTarget.copy(t),this.requestedTarget.copy(t),this.active=!0,!e||!a){this.syncSurfaceForRaycast();const g=this.geometry.getAttribute("position");let _=0,v=1/0;for(let y=0;y<g.count;y++){const M=(g.getX(y)-t.x)**2+(g.getY(y)-t.y)**2+(g.getZ(y)-t.z)**2;M<v&&(v=M,_=y)}e=[_],a=new V(1,0,0)}const o=new Map,c=new V;if(e.forEach((g,_)=>{const v=a.getComponent(_);c.addScaledVector(new V().fromArray(this.source,g*3),v);const y=this.topology.bindings[g];y.nodes.forEach((M,E)=>o.set(M,(o.get(M)??0)+v*y.weights[E]))}),o.size>Ws)throw new Error("Grab attachment exceeds GPU capacity.");const u=this.grabPass.uniforms.uNodes.value,f=this.grabPass.uniforms.uWeights.value,p=this.grabWeightValues;p.fill(0);let d=0;for(const[g,_]of o)u[d]=g,f[d]=_,d++;for(let g=0;g<this.topology.nodeCount;g++){const _=new V().fromArray(this.topology.restPositions,g*3).distanceToSquared(c),v=Math.max(0,1-_/(.36*.36));p[g*4]=v*v}this.grabPass.uniforms.uCount.value=d,this.grabPass.uniforms.uPoint.value.copy(c),this.grabWeights.needsUpdate=!0}moveGrab(t){this.active&&(this.requestedTarget.copy(t).sub(this.start).clampLength(0,.9).add(this.start),this.confineGrabTarget())}confineGrabTarget(){const t=this.wallUniforms;if(t.uWalls.value<.5)return;const e=t.uWallRight.value,a=t.uWallUp.value,o=t.uWallDirection.value,c=t.uWallFocus.value,u=t.uWallFov.value;for(let f=0;f<3;f++){const p=this.targetDelta.copy(this.requestedTarget).sub(c),d=t.uWallDistance.value-p.dot(o),g=p.dot(e),_=p.dot(a);this.requestedTarget.addScaledVector(e,Be.clamp(g,d*(t.uWallOffset.value.x-u.x),d*(t.uWallOffset.value.x+u.x))-g),this.requestedTarget.addScaledVector(a,Be.clamp(_,d*(t.uWallOffset.value.y-u.y),d*(t.uWallOffset.value.y+u.y))-_),this.requestedTarget.y=Math.max(Bi,this.requestedTarget.y)}}endGrab(){this.active=!1}triggerShake(){this.shakeTime>=Xs&&(this.shakePending=!0)}reset(){this.active=!1,this.accumulator=0,this.shakePending=!1,this.shakeCount=0,this.shakeTime=Xs;for(const e of this.positions)this.gpu.renderTexture(this.rest,e);const t=qr(new Float32Array(this.nodesBuffer.length),this.width,this.height);for(const e of this.velocities)this.gpu.renderTexture(t,e);t.dispose(),this.pass(this.skinPass,this.skin),this.geometry.userData.volumeSkinning&&this.pass(this.normalPass,this.normalFrames),this.pass(this.boundsPass,this.boundsTarget),this.syncSurfaceForRaycast()}setPlayBounds(t){const e=this.wallUniforms;e.uWalls.value=t?1:0,t&&(e.uWallRight.value.copy(t.right),e.uWallUp.value.copy(t.up),e.uWallDirection.value.copy(t.direction),e.uWallFocus.value.copy(t.focus),e.uWallDistance.value=t.distance,e.uWallFov.value.copy(t.halfFov),e.uWallOffset.value.copy(t.offsetFov),e.uWallDepth.value=t.depthLimit)}getSurfaceBounds(){this.renderer.readRenderTargetPixels(this.boundsTarget,0,0,2,1,this.boundsPixels);for(let t=0;t<3;t++){const e=(this.boundsPixels[t]+this.boundsPixels[t+4])*.5,a=(this.boundsPixels[t+4]-this.boundsPixels[t])*.5*1.5625+.005;this.surfaceBounds.min.setComponent(t,this.restBounds.min.getComponent(t)+e-a),this.surfaceBounds.max.setComponent(t,this.restBounds.max.getComponent(t)+e+a)}return this.surfaceBounds}readNodes(){this.renderer.readRenderTargetPixels(this.positions[0],0,0,this.width,this.height,this.nodesBuffer)}snapshot(){this.readNodes();const t=new Float32Array(this.nodesBuffer.length);this.renderer.readRenderTargetPixels(this.velocities[0],0,0,this.width,this.height,t);const e=new Float32Array(this.topology.nodeCount*3),a=new Float32Array(e.length);for(let o=0;o<this.topology.nodeCount;o++)e.set(this.nodesBuffer.subarray(o*4,o*4+3),o*3),a.set(t.subarray(o*4,o*4+3),o*3);return{topology:this.topology,positions:e,velocities:a}}restoreState(t,e){const a=new Float32Array(this.nodesBuffer.length),o=new Float32Array(a.length);for(let f=0;f<this.topology.nodeCount;f++)a.set(t.subarray(f*3,f*3+3),f*4),a[f*4+3]=1,e&&o.set(e.subarray(f*3,f*3+3),f*4);const c=qr(a,this.width,this.height),u=qr(o,this.width,this.height);for(const f of this.positions)this.gpu.renderTexture(c,f);for(const f of this.velocities)this.gpu.renderTexture(u,f);c.dispose(),u.dispose(),this.pass(this.skinPass,this.skin),this.geometry.userData.volumeSkinning&&this.pass(this.normalPass,this.normalFrames),this.pass(this.boundsPass,this.boundsTarget),this.syncSurfaceForRaycast()}syncSurfaceForRaycast(){this.readNodes();const t=this.geometry.getAttribute("position");this.topology.bindings.forEach((e,a)=>{let o=this.source[a*3],c=this.source[a*3+1],u=this.source[a*3+2];e.nodes.forEach((f,p)=>{const d=e.weights[p];o+=d*(this.nodesBuffer[f*4]-this.topology.restPositions[f*3]),c+=d*(this.nodesBuffer[f*4+1]-this.topology.restPositions[f*3+1]),u+=d*(this.nodesBuffer[f*4+2]-this.topology.restPositions[f*3+2])}),t.setXYZ(a,o,c,u)}),t.needsUpdate=!0,this.geometry.computeBoundingSphere(),this.geometry.computeBoundingBox()}diagnostics(){this.readNodes();let t=0,e=0,a=1/0,o=1/0,c=0,u=0,f=0,p=0,d=0,g=0,_=0;const v=this.nodesBuffer;for(let x=0;x<this.topology.nodeCount;x++){o=Math.min(o,v[x*4+1]),u+=v[x*4+1]/this.topology.nodeCount;for(const O of this.topology.edges[x]){const w=Math.hypot(v[O*4]-v[x*4],v[O*4+1]-v[x*4+1],v[O*4+2]-v[x*4+2]),A=this.topology.restPositions,P=Math.hypot(A[O*3]-A[x*3],A[O*3+1]-A[x*3+1],A[O*3+2]-A[x*3+2]);p=Math.max(p,w/Math.max(P,1e-8))}}const y=new V,M=new V,E=new V,S=new V;this.topology.tetraRestVolumes.forEach((x,O)=>{const w=this.topology.tetrahedra.subarray(O*4,O*4+4);y.fromArray(v,w[0]*4),M.fromArray(v,w[1]*4).sub(y),E.fromArray(v,w[2]*4).sub(y),S.fromArray(v,w[3]*4).sub(y);const A=M.dot(E.cross(S))/6;t+=A,e+=x,a=Math.min(a,A/x)}),this.renderer.readRenderTargetPixels(this.velocities[0],0,0,this.width,this.height,v);for(let x=0;x<this.topology.nodeCount;x++)c=Math.max(c,Math.hypot(v[x*4],v[x*4+1],v[x*4+2])),f+=v[x*4+1]/this.topology.nodeCount,g+=v[x*4]/this.topology.nodeCount,_+=v[x*4+2]/this.topology.nodeCount,d+=(v[x*4]**2+v[x*4+1]**2+v[x*4+2]**2)/this.topology.nodeCount;return{volumeRatio:t/e,minVolumeRatio:a,minimumY:o,maxSpeed:c,centerY:u,centerVelocityY:f,centerSpeed:Math.hypot(g,f,_),maxEdgeRatio:p,strainSpeed:Math.sqrt(Math.max(0,d-g**2-f**2-_**2))}}bindSurfaceMaterial(t){if(this.geometry.userData.volumeSkinning){t.onBeforeCompile=e=>{const a={value:this.positions[0].texture};this.volumeUniforms.push(a),e.uniforms.uVolumePositions=a,e.uniforms.uVolumeNormals={value:this.normalFrames.texture},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aVolumeNodes,aVolumeWeights;
attribute vec3 aVolumeNormal;
uniform sampler2D uVolumePositions,uVolumeNormals;
mat3 volumeFrame(float n){
 vec2 at=vec2(mod(n,${this.width}.0)*3.0,floor(n/${this.width}.0));
 vec2 size=vec2(${this.width*3}.0,${this.height}.0);
 return mat3(texture2D(uVolumeNormals,(at+vec2(.5,.5))/size).xyz,texture2D(uVolumeNormals,(at+vec2(1.5,.5))/size).xyz,texture2D(uVolumeNormals,(at+vec2(2.5,.5))/size).xyz);
}
vec3 volumeNode(float n){return texture2D(uVolumePositions,(vec2(mod(n,${this.width}.0),floor(n/${this.width}.0))+.5)/vec2(${this.width}.0,${this.height}.0)).xyz;}
void volumeSample(out vec3 p,out vec3 n){
 vec3 a=volumeNode(aVolumeNodes.x),b=volumeNode(aVolumeNodes.y),c=volumeNode(aVolumeNodes.z),d=volumeNode(aVolumeNodes.w);
 p=a*aVolumeWeights.x+b*aVolumeWeights.y+c*aVolumeWeights.z+d*aVolumeWeights.w;
 vec4 w=max(aVolumeWeights,vec4(0.0));w/=dot(w,vec4(1.0));
 mat3 f=volumeFrame(aVolumeNodes.x)*w.x+volumeFrame(aVolumeNodes.y)*w.y+volumeFrame(aVolumeNodes.z)*w.z+volumeFrame(aVolumeNodes.w)*w.w;
 n=normalize(cross(f[1],f[2])*normal.x+cross(f[2],f[0])*normal.y+cross(f[0],f[1])*normal.z);
}`),e.vertexShader=e.vertexShader.replace("#include <beginnormal_vertex>","vec3 volumePosition,objectNormal;volumeSample(volumePosition,objectNormal);"),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",t instanceof Tu?"vec3 volumePosition,volumeNormal;volumeSample(volumePosition,volumeNormal);vec3 transformed=volumePosition;":"vec3 transformed=volumePosition;")},t.customProgramCacheKey=()=>`jelly-volume-embedded-v3-${this.width}x${this.height}`;return}t.onBeforeCompile=e=>{e.uniforms.uSoftDisplacement={value:this.skin.texture},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aRestPosition,aRestDu,aRestDv;attribute vec2 aSoftUv;uniform sampler2D uSoftDisplacement;
vec4 weights(float t){return vec4(-0.5*t+t*t-0.5*t*t*t,1.0-2.5*t*t+1.5*t*t*t,0.5*t+2.0*t*t-1.5*t*t*t,-0.5*t*t+0.5*t*t*t);}
vec4 derivatives(float t){return vec4(-0.5+2.0*t-1.5*t*t,-5.0*t+4.5*t*t,0.5+4.0*t-4.5*t*t,-t+1.5*t*t);}
void softSample(out vec3 delta,out vec3 du,out vec3 dv){vec2 f=fract(aSoftUv),base=floor(aSoftUv);vec4 wx=weights(f.x),wy=weights(f.y),dx=derivatives(f.x),dy=derivatives(f.y);delta=vec3(0.0);du=vec3(0.0);dv=vec3(0.0);
for(int y=0;y<4;y++)for(int x=0;x<4;x++){vec2 p=base+vec2(float(x)-1.0,float(y)-1.0);p.x=mod(p.x+${Je}.0,${Je}.0);p.y=clamp(p.y,0.0,${hi}.0);vec3 d=texture2D(uSoftDisplacement,(p+0.5)/vec2(${Je}.0,${hi+1}.0)).xyz;delta+=d*wx[x]*wy[y];du+=d*dx[x]*wy[y];dv+=d*wx[x]*dy[y];}}`),e.vertexShader=e.vertexShader.replace("#include <beginnormal_vertex>","vec3 softDelta,softDu,softDv;softSample(softDelta,softDu,softDv);vec3 n=cross(aRestDu+softDu,aRestDv+softDv);vec3 objectNormal=length(n)>0.000001?normalize(n):normalize(normal);"),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",t instanceof Tu?"vec3 softDelta,softDu,softDv;softSample(softDelta,softDu,softDv);vec3 transformed=aRestPosition+softDelta;":"vec3 transformed=aRestPosition+softDelta;")},t.customProgramCacheKey=()=>"jelly-volume-surface-v2"}dispose(){if(!this.disposed){this.disposed=!0;for(const t of this.materials)t.dispose();for(const t of this.textures)t.dispose();for(const t of[...this.positions,...this.velocities,this.previous,this.com,this.grab,this.skin,this.normalFrames,this.safety,this.safeFraction,this.shape,this.viewportShift,this.boundsTarget])t.dispose();this.gpu.dispose()}}}function Pd(r,t,e,a,o,c,u,f){if(!r.capabilities.isWebGL2||!r.getContext().getExtension("EXT_color_buffer_float"))throw new Error("Floating-point WebGL 2 simulation is unavailable.");return new KR(r,t,e,a,o,c,u,f)}const dr=Be.smoothstep;function Qp(r){const t=r*20+.23*Math.sin(r*3)+.12*Math.cos(r*7);return .5+.5*Math.cos(t)}function rx(r,t){const e=r*20+.23*Math.sin(r*3)+.12*Math.cos(r*7),a=Qp(r),o=.027*Math.sin(r*9)+.013*Math.cos(r*13),c=(p,d)=>Math.exp(-Math.pow((t-p-o)/d,2)),u=.043*c(-.36,.075)+.055*c(-.155,.09)+.034*c(.055,.075),f=Math.exp(2.7*(Math.cos(e+Math.PI)-1))*(.022*c(-.26,.058)+.018*c(-.025,.055));return a*u+f}function sx(r,t,e){const a=Math.min(1,Math.hypot(r,t)),o=Math.atan2(r,t),c=Math.sqrt(Math.max(0,1-a*a)),u=c>1e-6?Be.clamp(e/c,-1,1):0,f=.985+.011*Math.cos(o*3)+.008*Math.sin(o*5),p=a*(f+dr(a,.8,.98)*.062*Qp(o)),d=Math.max(0,(a-.88)/.12),g=Math.sqrt(Math.max(0,1-d**4)),_=-.165,v=1-dr(a,.11,.32),y=_+.335*g-.045*v,M=_-.335*g;return[Math.sin(o)*p*1.01,Be.lerp(M,y,(u+1)/2),-Math.cos(o)*p]}function QR(r,t,e){const a=sx(r,t,e),o=Math.hypot(r,t),c=Math.atan2(r,t),u=dr(o,.86,.975)*rx(c,a[1]);return a[0]+=Math.sin(c)*u*1.01,a[2]-=Math.cos(c)*u,a}function JR(){const r=new Gt("#deddb7"),t=new Gt("#779b49"),e=new Gt("#bdd09a"),a=new Gt("#224f29"),o=new Gt("#50763b"),c=new Gt("#b93c38");return Hu(QR,(u,[f,p])=>{const d=Math.hypot(f,p),g=Math.atan2(f,p),_=d+.014*Math.sin(g*7)+.009*Math.cos(g*13),v=r.clone().lerp(e,dr(_,.47,.68)).lerp(t,dr(_,.65,.84)).lerp(a,dr(_,.86,.98));v.lerp(o,dr(d,.88,.99)*(.2*Qp(g)+4.5*rx(g,u[1])));let y=0;for(let M=0;M<3;M++){const E=M*(Math.PI*2/3)+.18,S=Math.sin(E),x=Math.cos(E),O=f-S*.38,w=p-x*.38,A=Math.hypot((O*x-w*S)/.145,(O*S+w*x)/.235);y=Math.max(y,1-dr(A,.72,.94))}return v.lerp(c,y*.94),v},{sides:288})}function $R(r){const t=r.onBeforeCompile.bind(r),e=r.customProgramCacheKey();r.onBeforeCompile=(a,o)=>{t(a,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aFleshCoordinate;varying vec3 vGourd;`),a.vertexShader=a.vertexShader.replace("void main() {",`void main() {
vGourd=aFleshCoordinate;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGourd;
float gourdHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
`),a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float gr=length(vGourd.xy),ga=atan(vGourd.x,vGourd.y),rind=smoothstep(.84,.98,gr);
float grain=gourdHash(floor(vGourd*215.0));
float pores=smoothstep(.76,.98,grain)*rind;
vec2 cell=fract(vGourd.xy*74.0+vec2(sin(vGourd.y*12.0),sin(vGourd.x*11.0))*.35)-.5;
float walls=smoothstep(.24,.47,length(cell));
float fibers=pow(.5+.5*sin(ga*155.0+gr*28.0+sin(ga*21.0)*2.0),12.0);
float inner=1.0-smoothstep(.57,.84,gr);
float loculeRim=0.0,seeds=0.0;
for(int chamber=0;chamber<3;chamber++){
 float ca=float(chamber)*2.094395+.18;vec2 axis=vec2(sin(ca),cos(ca)),across=vec2(axis.y,-axis.x),q=vGourd.xy-axis*.38;
 float ellipse=length(vec2(dot(q,across)/.145,dot(q,axis)/.235));
 float rimDistance=(ellipse-1.0)/.055;
 loculeRim+=exp(-rimDistance*rimDistance);seeds=max(seeds,1.0-smoothstep(.72,.94,ellipse));
}
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.78,.74,.43),loculeRim*.30);
float membranes=pow(.5+.5*cos(ga*3.0+sin(gr*12.0)*.3),30.0)*smoothstep(.15,.28,gr)*(1.0-smoothstep(.45,.66,gr));
diffuseColor.rgb*=1.0-pores*.22-(1.0-rind)*walls*.055;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.64,.70,.39),fibers*(1.0-rind)*(1.0-seeds)*.15);
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.88,.85,.62),(membranes*.28+walls*inner*.035)*(1.0-seeds));
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.59,.055,.042),seeds*fibers*.18);
`),a.fragmentShader=a.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=clamp(roughnessFactor+0.05*smoothstep(.82,.99,length(vGourd.xy)),0.0,1.0);`),a.fragmentShader=a.fragmentShader.replace("#include <transmission_fragment>",de.transmission_fragment.replace("material.transmission = transmission;","material.transmission = transmission * mix(1.0,0.30,smoothstep(.82,.98,length(vGourd.xy)));"))},r.customProgramCacheKey=()=>e+"-bitter-gourd-v3"}const Da=Be.smoothstep,ox=Be.clamp,tC=new Gt("#ec842c"),eC=new Gt("#e56c21"),nC=new Gt("#ab4b15"),iC=new Gt("#833510"),aC=new Gt("#562513");function rC(r,t){const e=Math.hypot(r,t),a=Math.atan2(r,t)-.1,o=Math.atan2(Math.sin(a*8),Math.cos(a*8))/8,c=ox((e-.07)/.72,0,1),u=.017+.049*Math.sin(Math.PI*c);return(1-Da(Math.abs(e*Math.sin(o)),u*.4,u))*Da(e,.055,.12)*(1-Da(e,.65,.81))}function lx(r,t,e){return Da(e,.04,.16)*(1-Da(Math.hypot(r,t),.963,.992))}function cx(r,t,e){const a=Math.min(1,Math.hypot(r,t)),o=Math.atan2(r,t),c=1.01+.012*Math.sin(o*3)+.015*Math.cos(o*5),u=Math.sqrt(Math.max(0,1-a*a)),f=u>1e-6?ox((e/u+1)/2,0,1):.5,p=Math.max(0,(a-.88)/.12),d=-.16+.26*Math.sqrt(Math.max(0,1-p**4)),g=Math.max(0,(a-.58)/.42),_=-.16-.34*Math.sqrt(Math.max(0,1-g**2));return[r*c,Be.lerp(_,d,f),-t*c]}function sC(r,t,e){const a=cx(r,t,e),o=Math.hypot(r,t),c=Math.atan2(r,t),u=(1-lx(r,t,e))*Da(o,.8,.98),f=Math.sin(c*53+o*21+Math.sin(c*7)*1.6)*u*.003;return a[0]*=1+f,a[2]*=1+f,a}const ux=(r,t,e)=>{const a=Math.sin(r*127.1+t*311.7+e*74.7)*43758.5453;return a-Math.floor(a)};function fx(r,t){const e=Math.hypot(r,t),a=Math.atan2(r,t),o=tC.clone().lerp(eC,Da(e,.2,.94)*.5);o.lerp(nC,rC(r,t)*.7);const c=e/(1+.1*Math.cos(a*8));return o.lerp(iC,(1-Da(c,.035,.225))*.9)}function oC(r,t,e){const a=fx(r,t),o=[r,t,e].map(p=>Math.floor(p*105)),c=ux(o[0],o[1],o[2]),u=[r,t,e].map((p,d)=>p*105-o[d]-.5),f=c>.92?1-Da(Math.hypot(...u),.13,.3):0;return a.lerp(aC,f*.88)}function lC(){const r=new Gt("#c35925"),t=new Gt("#df7730"),e=new Gt("#f6eee2");return Hu(sC,(a,[o,c,u])=>{const f=.5+.5*Math.sin(o*9+Math.sin(c*7)+u*3),p=ux(Math.floor(o*175),Math.floor(c*175),Math.floor(u*175)),d=r.clone().lerp(t,f*.45);return d.lerp(e,.035+.1*p),d.lerp(fx(o,c),lx(o,c,u))},{rings:144,sides:288})}function cC(r){r.attenuationColor.set("#ffc27d"),r.attenuationDistance=1.45,r.sheenColor.set("#fff0dd"),r.clearcoat=.18;const t=r.onBeforeCompile.bind(r),e=r.customProgramCacheKey();r.onBeforeCompile=(a,o)=>{t(a,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aFleshCoordinate;varying vec3 vDried;`),a.vertexShader=a.vertexShader.replace("void main() {",`void main() {
vDried=aFleshCoordinate;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vDried;
float dryHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float dryNoise(vec3 p){
 vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
 return mix(mix(mix(dryHash(i),dryHash(i+vec3(1,0,0)),f.x),mix(dryHash(i+vec3(0,1,0)),dryHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(dryHash(i+vec3(0,0,1)),dryHash(i+vec3(1,0,1)),f.x),mix(dryHash(i+vec3(0,1,1)),dryHash(i+vec3(1,1,1)),f.x),f.y),f.z);
}
float dryCutFace(vec3 p){return smoothstep(.04,.16,p.z)*(1.0-smoothstep(.963,.992,length(p.xy)));}
float dryStar(vec2 p){
 float r=length(p),a=atan(p.x,p.y)-.1;
 float folded=atan(sin(a*8.0),cos(a*8.0))/8.0;
 float along=clamp((r-.07)/.72,0.0,1.0),width=.017+.049*sin(3.14159265*along);
 return (1.0-smoothstep(width*.4,width,abs(r*sin(folded))))*smoothstep(.055,.12,r)*(1.0-smoothstep(.65,.81,r));
}
float dryPowder(vec3 p){
 float bloom=smoothstep(.25,.78,dryNoise(p*4.0)*.55+dryNoise(p*13.0)*.45);
 float grit=dryHash(floor(p*210.0))*.7+dryHash(floor(p*105.0))*.3;
 return (.3+.52*bloom)*smoothstep(.30,.68,grit)*(1.0-dryCutFace(p));
}
`),a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float dr=length(vDried.xy),da=atan(vDried.x,vDried.y),cutFace=dryCutFace(vDried),powder=dryPowder(vDried);
float star=dryStar(vDried.xy)*cutFace;
float fold=pow(.5+.5*sin(da*53.0+dr*21.0+sin(da*7.0)*1.6),12.0)*smoothstep(.22,.4,dr);
diffuseColor.rgb*=1.0-fold*.12*(1.0-cutFace);
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.94,.90,.83),powder*.72);
// Fine irregular dark speckles sit within the exposed flesh, including the darker heart.
vec2 grainPosition=vDried.xy*105.0,cell=floor(grainPosition);
float grain=dryHash(vec3(cell,0.0));
vec2 grainCenter=vec2(dryHash(vec3(cell,19.7)),dryHash(vec3(cell,53.1)))*.6+.2;
float spotDistance=length(fract(grainPosition)-grainCenter);
float spotSize=mix(.14,.29,dryHash(vec3(cell,8.2)));
float aa=max(fwidth(spotDistance)*.5,.015);
float spots=step(.92,grain)*(1.0-smoothstep(spotSize-aa,spotSize+aa,spotDistance));
float fibers=pow(.5+.5*sin(da*184.0+dr*17.0+sin(da*13.0)*.7),22.0);
float rings=pow(.5+.5*cos(dr*198.0+sin(da*5.0)*.35),28.0);
float tissueGrain=dryHash(floor(vDried*380.0))-.5;
diffuseColor.rgb*=1.0+tissueGrain*.035*cutFace;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.9,.53,.19),(fibers*.045+rings*.025)*cutFace*(1.0-star));
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.019,.006),spots*.86*cutFace*(1.0-star*.25));
`),a.fragmentShader=a.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(.54+.34*dryPowder(vDried),mix(.50,.35,dryStar(vDried.xy)),dryCutFace(vDried));`),a.fragmentShader=a.fragmentShader.replace("#include <transmission_fragment>",de.transmission_fragment.replace("material.transmission = transmission;","material.transmission = mix(.60*(1.0-.75*dryPowder(vDried)),mix(.60,.94,dryStar(vDried.xy)),dryCutFace(vDried));").replace("material.thickness = thickness;","material.thickness = thickness * mix(1.0,.62,dryStar(vDried.xy)*dryCutFace(vDried));"))},r.customProgramCacheKey=()=>e+"-dried-persimmon-slice-v4"}function uC(r,t,e){const a=Array.from({length:128},(P,L)=>{const z=L*Math.PI*2/128;return new ie(Math.cos(z)*.89,Math.sin(z)*.89)}),o=[...a,...r.flat()];let c=qp.triangulateShape(a,r),u=0,f=[a,...r].map(P=>P.map(()=>u++));for(let P=0;P<3;P++){const L=new Map,z=(I,C)=>{const T=I<C?`${I}:${C}`:`${C}:${I}`;let H=L.get(T);return H===void 0&&(H=o.length,o.push(o[I].clone().add(o[C]).multiplyScalar(.5)),L.set(T,H)),H};c=c.flatMap(([I,C,T])=>{const H=z(I,C),Z=z(C,T),G=z(T,I);return[[I,H,G],[H,C,Z],[G,Z,T],[H,Z,G]]}),f=f.map(I=>I.flatMap((C,T)=>[C,z(C,I[(T+1)%I.length])]))}const p=[],d=[],g=[],_=[],v=[],y=(P,L,z,I,C=0)=>{const T=t(P,L,z);I!==void 0&&(T[1]=I);const H=e([P,L,z],C),Z=p.length/3;return p.push(...T),d.push(H.r,H.g,H.b),g.push(P,L,z),_.push(C),Z},M=o.map(({x:P,y:L})=>y(P,L,Math.sqrt(1-P*P-L*L))),E=o.map(({x:P,y:L})=>y(P,L,-Math.sqrt(1-P*P-L*L)));for(const[P,L,z]of c)v.push(M[P],M[L],M[z],E[P],E[z],E[L]);const S=(P,L,z)=>{for(let I=0;I<P.length;I++){const C=(I+1)%P.length;z?v.push(P[I],P[C],L[I],P[C],L[C],L[I]):v.push(P[I],L[I],P[C],P[C],L[I],L[C])}};let x=f[0].map(P=>M[P]);for(let P=1;P<=24;P++){const L=P*Math.PI/24,z=.89+.11*Math.sin(L),I=-.16+.34*Math.cos(L)*Math.sqrt(1+Math.sin(L)**2),C=P===24?f[0].map(T=>E[T]):f[0].map(T=>{const H=o[T].clone().multiplyScalar(z/.89),Z=Math.sign(Math.cos(L))*Math.sqrt(Math.max(0,1-H.lengthSq()));return y(H.x,H.y,Z,I)});S(x,C,!1),x=C}r.forEach((P,L)=>{const z=P.reduce((T,H)=>T.add(H),new ie).multiplyScalar(1/P.length),I=f[L+1];x=I.map(T=>M[T]);const C=[[.012,.93],[.03,.86],[.09,.84],[.25,.84],[.5,.84],[.75,.84],[.91,.84],[.97,.86],[.988,.93],[1,1]];for(const[T,H]of C){const Z=T===1?I.map(G=>E[G]):I.map(G=>{const et=o[G].clone().sub(z).multiplyScalar(H).add(z),rt=Math.sqrt(1-et.lengthSq())*(1-2*T);return y(et.x,et.y,rt,.18-.68*T,1)});S(x,Z,!0),x=Z}});const O=new pi;O.setAttribute("position",new jn(p,3)),O.setAttribute("color",new jn(d,3)),O.setAttribute("aFleshCoordinate",new jn(g,3)),O.setAttribute("aChannelWall",new jn(_,1)),O.setIndex(v),O.computeVertexNormals();const w=new Set(f.flat()),A=O.getAttribute("normal");return o.forEach((P,L)=>{w.has(L)||(A.setXYZ(M[L],0,1,0),A.setXYZ(E[L],0,-1,0))}),O.userData.volumeSkinning=!0,O}const Pa=Be.smoothstep,Du=Math.PI*2,Uu=new Gt("#c4877c"),hx=new Gt("#a96359"),dx=new Gt("#fff9e9"),fC=new Gt("#ffd644"),Mu=[[-.594,.594,.3,.049],[-.184,.049,1.1,.041],[.695,.186,.7,.048],[.186,-.695,-.4,.044],[.594,-.594,.2,.045],[-.39,.7,.6,.029],[.42,.62,-.3,.027],[-.39,-.6,1.3,.031],[.12,.33,.8,.025]],gr=(r,t)=>{const e=Math.sin(r*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Zi=(r,t,e,a,o=0)=>[Math.sin(r)*t,Math.cos(r)*t,r+o,e,a],px=[Zi(.02,.55,.137,.235,-.11),Zi(.91,.57,.14,.195,.06),Zi(1.68,.52,.145,.22,-.1),Zi(2.43,.57,.126,.215,.11),Zi(3.22,.535,.153,.247,-.045),Zi(4.02,.53,.135,.204,.14),Zi(4.78,.57,.136,.22,-.02),Zi(5.54,.52,.141,.24,.08)],Jp=[...Array.from({length:8},(r,t)=>Zi(t*Du/8+.43+.06*Math.sin(t*2.7),.815+.014*Math.sin(t*1.3),.026+.007*gr(t,7),.036+.011*gr(t,13),.22*Math.sin(t*1.9))),...Array.from({length:6},(r,t)=>Zi(t*Du/6+.39+.1*Math.sin(t*2.4),.224+.025*Math.sin(t*1.8),.025+.007*gr(t,4),.034+.012*gr(t,16),.4*Math.sin(t)))];function mx(r,t,e){let a=20;for(const[o,c,u,f,p]of e){const d=r-o,g=t-c,_=(d*Math.cos(u)-g*Math.sin(u))/f,v=(d*Math.sin(u)+g*Math.cos(u))/p;a=Math.min(a,Math.pow(Math.abs(_)**2.3+Math.abs(v)**2.3,1/2.3))}return a}function hC(r,t){const e=Math.hypot(r-.014,t+.009),a=Math.atan2(r,t);return Math.min(e/(.097*(1+.07*Math.cos(a*7))),mx(r,t,px))}function dC(r,t){return mx(r,t,Jp)}function $p(r,t){return(1-Pa(hC(r,t),.84,1.02))*Pa(dC(r,t),1,1.35)}function gx(r,t){const e=r*31,a=t*31,o=Math.floor(e),c=Math.floor(a);let u=9;for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){const d=o+f,g=c+p;if(gr(d+41,g+17)<.74)continue;const _=e-d-.5-(gr(d+19.7,g)-.5)*.55,v=a-g-.5-(gr(d,g+53.1)-.5)*.55,y=gr(d,g)*Du;u=Math.min(u,Math.hypot((_*Math.cos(y)+v*Math.sin(y))/.64,(-_*Math.sin(y)+v*Math.cos(y))/.34))}return 1-Pa(u,.15,1.08)}function vx(r,t){let e=0;for(const[a,o,c,u]of Mu){const f=(r-a)/u,p=(t-o)/u;let d=1-Pa(Math.hypot(f,p),.12,.25);for(let g=0;g<4;g++){const _=c+g*Math.PI/2,v=f*Math.cos(_)+p*Math.sin(_),y=-f*Math.sin(_)+p*Math.cos(_);d=Math.max(d,1-Pa(Math.hypot((v-.43)/.44,y/.265),.72,1))}e=Math.max(e,d)}return e}function _x(r,t,e){return Pa(Math.abs(e),.04,.2)*(1-Pa(Math.hypot(r,t),.95,.985))}function tm(r,t,e){const a=Math.min(1,Math.hypot(r,t)),o=Math.atan2(r,t),c=Math.sqrt(Math.max(0,1-a*a)),u=c>1e-6?Be.clamp(e/c,-1,1):0,f=1.02+.009*Math.sin(o*3)+.006*Math.cos(o*5),p=Math.max(0,(a-.89)/.11),d=Math.sqrt(Math.max(0,1-p**4));return[r*f,-.16+u*.34*d,-t*f]}function pC(r,t,e){const a=tm(r,t,e),o=_x(r,t,e)*Pa(e,0,.2);if(o>0){const c=$p(r,t),u=c>0?gx(r,t):0;a[1]+=o*(c*(-.011+.004*u)+vx(r,t)*.012)}return a}function mC(r,t,e){const a=$p(r,t);return Uu.clone().lerp(dx,a)}function gC(){const r=Hu(tm,()=>Uu,{rings:64,sides:96});r.geometry.dispose();const t=Jp.map(([a,o,c,u,f])=>Array.from({length:32},(p,d)=>{const g=d*Du/32,_=Math.sign(Math.cos(g))*Math.abs(Math.cos(g))**(2/2.3)*u*1.2,v=Math.sign(Math.sin(g))*Math.abs(Math.sin(g))**(2/2.3)*f*1.2;return new ie(a+_*Math.cos(c)+v*Math.sin(c),o-_*Math.sin(c)+v*Math.cos(c))})),e=uC(t,pC,([a,o,c],u)=>{const f=_x(a,o,c),p=$p(a,o)*f*(1-u),d=hx.clone().lerp(Uu,f),g=p>0?gx(a,o):0;return d.lerp(dx.clone().multiplyScalar(.95+g*.05),p),d.multiplyScalar(1-u*.12),d.lerp(fC,vx(a,o)*Pa(c,.1,.3)*(1-u)),d});return{...r,geometry:e,sourcePositions:new Float32Array(e.getAttribute("position").array)}}function vC(r){r.attenuationColor.set("#f3cdc2"),r.attenuationDistance=1.7,r.clearcoat=.23,r.clearcoatRoughness=.48,r.sheenColor.set("#f3cdc2");const t=r.onBeforeCompile.bind(r),e=r.customProgramCacheKey();r.onBeforeCompile=(a,o)=>{t(a,o),a.uniforms.uOsmanthus={value:Mu.map(p=>new Le(...p))},a.uniforms.uLotusFlesh={value:Uu},a.uniforms.uLotusRind={value:hx};const c=p=>({axes:p.map(([d,g,_])=>new Le(d,g,Math.sin(_),Math.cos(_))),sizes:p.map(([,,,d,g])=>new ie(d,g))}),u=c(px),f=c(Jp);a.uniforms.uRiceAxes={value:u.axes},a.uniforms.uRiceSizes={value:u.sizes},a.uniforms.uHollowAxes={value:f.axes},a.uniforms.uHollowSizes={value:f.sizes},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aFleshCoordinate;attribute float aChannelWall;varying vec3 vLotus;varying float vChannelWall;`),a.vertexShader=a.vertexShader.replace("void main() {",`void main() {
vLotus=aFleshCoordinate;vChannelWall=aChannelWall;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLotus;
varying float vChannelWall;
uniform vec3 uLotusFlesh,uLotusRind;
uniform vec4 uOsmanthus[${Mu.length}];
float lotusHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
uniform vec4 uRiceAxes[8],uHollowAxes[14];
uniform vec2 uRiceSizes[8],uHollowSizes[14];
float channelEllipse(vec2 p,vec4 c,vec2 size){
 vec2 q=p-c.xy;float across=abs(dot(q,vec2(c.w,-c.z))/size.x),along=abs(dot(q,c.zw)/size.y);
 return pow(pow(across,2.3)+pow(along,2.3),1.0/2.3);
}
float lotusChannel(vec2 p){
 float r=length(p-vec2(.014,-.009)),a=atan(p.x,p.y),d=r/(.097*(1.0+.07*cos(a*7.0)));
 for(int i=0;i<8;i++)d=min(d,channelEllipse(p,uRiceAxes[i],uRiceSizes[i]));
 return d;
}
float lotusHollow(vec2 p){
 float d=20.0;for(int i=0;i<14;i++)d=min(d,channelEllipse(p,uHollowAxes[i],uHollowSizes[i]));return d;
}
float lotusGrain(vec2 p){
 vec2 pos=p*31.0,cell=floor(pos);float d=9.0;
 for(int i=-1;i<=1;i++)for(int j=-1;j<=1;j++){
  vec2 c=cell+vec2(float(i),float(j));
  if(lotusHash(c+vec2(41,17))<.74)continue;
  vec2 q=pos-c-.5-(vec2(lotusHash(c+vec2(19.7,0)),lotusHash(c+vec2(0,53.1)))-.5)*.55;
  float a=lotusHash(c)*6.283185307;
  d=min(d,length(vec2(dot(q,vec2(cos(a),sin(a)))/.64,dot(q,vec2(-sin(a),cos(a)))/.34)));
 }
 return 1.0-smoothstep(.15,1.08,d);
}
vec2 lotusFlower(vec2 p){
 float flower=0.0,heart=0.0;
 for(int f=0;f<${Mu.length};f++){
  vec4 blossom=uOsmanthus[f];vec2 q=(p-blossom.xy)/blossom.w;
  float petal=1.0-smoothstep(.12,.25,length(q));
  heart=max(heart,1.0-smoothstep(.1,.27,length(q)));
  for(int i=0;i<4;i++){
   float a=blossom.z+float(i)*1.570796327;
   float along=dot(q,vec2(cos(a),sin(a))),across=dot(q,vec2(-sin(a),cos(a)));
   petal=max(petal,1.0-smoothstep(.72,1.0,length(vec2((along-.43)/.44,across/.265))));
  }
  flower=max(flower,petal);
 }
 return vec2(flower,heart);
}
`),a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float lr=length(vLotus.xy),la=atan(vLotus.x,vLotus.y);
float lotusFace=smoothstep(.04,.2,abs(vLotus.z))*(1.0-smoothstep(.95,.985,lr));
// Evaluate tissue masks per pixel: interpolating white cap vertex colors
// across the triangulated openings creates pale triangular streaks.
diffuseColor.rgb=mix(uLotusRind,uLotusFlesh,lotusFace);
float channel=lotusChannel(vLotus.xy);
float hollow=lotusHollow(vLotus.xy);
float lotusRice=(1.0-smoothstep(.84,1.02,channel))*lotusFace*smoothstep(1.0,1.35,hollow)*(1.0-vChannelWall);
float riceGrain=lotusRice>.001?lotusGrain(vLotus.xy):0.0;
vec2 blossom=lotusFlower(vLotus.xy)*smoothstep(.1,.3,vLotus.z)*(1.0-vChannelWall);
float tissue=lotusHash(floor(vLotus.xy*270.0))-.5;
float fibers=pow(.5+.5*sin(la*212.0+lr*24.0+sin(la*17.0)),18.0);
diffuseColor.rgb*=1.0+tissue*.045-fibers*.05*lotusFace*(1.0-lotusRice);
// A fine red channel lining separates white sticky rice from translucent root flesh.
float rimDistance=(channel-1.04)/.085;
float lining=exp(-rimDistance*rimDistance)*lotusFace;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.28,.09,.064),lining*.34);
// Mostly soft gelatinized paste, with only a few recognizable swollen grains.
float cloud=.5+.5*sin(vLotus.x*35.0+sin(vLotus.y*23.0))*sin(vLotus.y*29.0+vLotus.x*17.0);
vec3 riceColor=mix(vec3(.67,.65,.58),vec3(.76,.74,.67),cloud);
riceColor=mix(riceColor,vec3(.98,.96,.87),riceGrain*.70);
diffuseColor.rgb*=1.0-vChannelWall*.12;
diffuseColor.rgb=mix(diffuseColor.rgb,riceColor,lotusRice);
vec3 petalColor=mix(vec3(1.0,.69,.025),vec3(.85,.29,.005),blossom.y*.7);
diffuseColor.rgb=mix(diffuseColor.rgb,petalColor,blossom.x);
`),a.fragmentShader=a.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(mix(mix(.55,.38+.025*(1.0-riceGrain),lotusRice),.72,1.0-smoothstep(.9,1.8,hollow)),.60,blossom.x);`),a.fragmentShader=a.fragmentShader.replace("#include <transmission_fragment>",de.transmission_fragment.replace("material.transmission = transmission;","material.transmission = mix(mix(mix(mix(.20,.34,lotusFace),.22,lotusRice),.08,blossom.x),.06,vChannelWall);"))},r.customProgramCacheKey=()=>e+"-stuffed-lotus-root-v9"}const Ai={peach:{label:"Peach",title:"Longevity peach slice",latin:"Prunus persica",number:"001",note:"Pale flesh, a rose-colored heart, and an empty pit cavity in frosted translucent jelly.",create:IR,map:ax,appearance:FR},"bitter-gourd":{label:"Bitter gourd",title:"Chinese bitter gourd",latin:"Momordica charantia",number:"002",note:"Knobbly green skin, layered pale flesh, and three orange-red seeds around a pale center in frosted translucent jelly.",create:JR,map:sx,appearance:$R},"lotus-root":{label:"Stuffed Lotus Root",title:"Stuffed lotus root slice",latin:"Nelumbo nucifera",number:"005",note:"Salmon-pink lotus root, uneven chambers of soft white sticky rice, small hollow channels, and embedded golden osmanthus blossoms.",create:gC,map:tm,appearance:vC,interior:{colorAt:mC}},"dried-persimmon":{label:"Dried Persimmon",title:"Dried persimmon slice",latin:"Diospyros kaki",number:"004",note:"Exposed orange flesh, a darker heart, translucent star-shaped tissue, and dark speckles inside a frosted dried-persimmon rind.",create:lC,map:cx,appearance:cC,interior:{colorAt:oC}}};function _C(r,t,e,a="peach slice",{rings:o=zR,sides:c=BR,indices:u}={}){r.replaceChildren();const f=document.createElement("canvas");f.dataset.testid="still-peach-preview",f.setAttribute("role","img"),f.setAttribute("aria-label",`Still preview of ${a}. GPU simulation unavailable.`),r.appendChild(f);const p=f.getContext("2d");if(!p)return{setZoom:()=>{},dispose:()=>f.remove()};const{yaw:d,pitch:g}=Ki,_=new V(Math.sin(d)*Math.cos(g),Math.sin(g),Math.cos(d)*Math.cos(g)),v=new V().crossVectors(new V(0,1,0),_).normalize(),y=new V().crossVectors(_,v),M=new V(-.5,.8,.3).normalize(),E=new V,S=Array.from({length:t.length/3},(G,et)=>(E.fromArray(t,et*3),{x:E.dot(v),y:E.dot(y),depth:E.dot(_)})),x=Math.min(...S.map(G=>G.x)),O=Math.max(...S.map(G=>G.x)),w=Math.min(...S.map(G=>G.y)),A=Math.max(...S.map(G=>G.y)),P=[],L=new V,z=new V,I=new V,C=G=>{L.fromArray(t,G[0]*3),z.fromArray(t,G[1]*3),I.fromArray(t,G[2]*3);const et=z.sub(L).cross(I.sub(L)).normalize();if(et.dot(_)<=0)return;const rt=new Gt(0,0,0);for(const N of G)rt.add(new Gt().fromArray(e,N*3));rt.multiplyScalar((.72+.4*Math.max(0,et.dot(M)))/3),P.push({ids:G,depth:G.reduce((N,X)=>N+S[X].depth,0)/3,color:rt.getStyle(Hn)})};if(u)for(let G=0;G<u.length;G+=3)C([u[G],u[G+1],u[G+2]]);else for(let G=0;G<o;G++)for(let et=0;et<c;et++){const rt=G*(c+1)+et,N=rt+c+1;C([rt,rt+1,N]),C([rt+1,N+1,N])}P.sort((G,et)=>G.depth-et.depth);let T=4.95;const H=()=>{const G=Math.max(r.clientWidth,1),et=Math.max(r.clientHeight,1),rt=Math.min(devicePixelRatio||1,2);f.width=Math.round(G*rt),f.height=Math.round(et*rt),p.setTransform(rt,0,0,rt,0,0);const N=Math.min(G*(G<=760&&et>G?.74:.36)/(O-x),et*.62/(A-w))*Math.min(1.14,4.95/T),X=at=>G*(G<=760&&et>G?.5:.625)+(at-(x+O)/2)*N,W=at=>et*(G<=760&&et>G?.54:.575)-(at-(w+A)/2)*N;p.fillStyle="rgba(53,60,45,.10)",p.beginPath(),p.ellipse(G*(G<=760&&et>G?.5:.625),W(w)-3,(O-x)*N*.46,N*.05,0,0,Math.PI*2),p.fill();for(const at of P)p.beginPath(),at.ids.forEach((B,nt)=>{const gt=S[B];nt===0?p.moveTo(X(gt.x),W(gt.y)):p.lineTo(X(gt.x),W(gt.y))}),p.closePath(),p.fillStyle=at.color,p.strokeStyle=at.color,p.lineWidth=.45,p.fill(),p.stroke()},Z=new ResizeObserver(H);return Z.observe(r),H(),{setZoom:G=>{T=G,H()},dispose:()=>{Z.disconnect(),f.remove()}}}function yC(r,t){const e=r.onBeforeCompile.bind(r),a=r.customProgramCacheKey();r.onBeforeCompile=(o,c)=>{e(o,c),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute float aCutSurface;attribute vec3 aInteriorColor;varying vec4 vCutColor;varying vec3 vCutPoint;`),o.vertexShader=o.vertexShader.replace("void main() {",`void main() {
vCutColor=vec4(aInteriorColor,aCutSurface);vCutPoint=aFleshCoordinate;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vCutColor;varying vec3 vCutPoint;`),o.fragmentShader=o.fragmentShader.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
float cutNoise=fract(sin(dot(floor(vCutPoint*185.0),vec3(127.1,311.7,74.7)))*43758.5453);
vec3 cutColor=vCutColor.rgb*(.96+.06*cutNoise);
${t==="dried-persimmon"?`
vec3 grainPoint=vCutPoint*105.0,grainCell=floor(grainPoint);
float seed=fract(sin(dot(grainCell,vec3(127.1,311.7,74.7)))*43758.5453);
float grainDistance=length(fract(grainPoint)-.5);
float speck=step(.92,seed)*(1.0-smoothstep(.14,.30,grainDistance));
cutColor=mix(cutColor,vec3(.092,.019,.006),speck*.88);`:""}
diffuseColor.rgb=mix(diffuseColor.rgb,cutColor,step(.5,vCutColor.a));
roughnessFactor=mix(roughnessFactor,.48,step(.5,vCutColor.a));`)},r.customProgramCacheKey=()=>a+"-munch-interior-v3-"+t}const xC=[[11.3153,186.2527],[6.5825,184.6684],[2.317,181.1096],[.7884,175.6669],[.5151,169.8595],[1.5259,163.5711],[5.5495,158.6729],[10.5819,155.3776],[6.4378,150.7322],[3.7087,144.693],[3.9899,138.1248],[5.7896,132.7831],[9.4819,128.8216],[14.6144,126.956],[13.3083,122.6501],[18.67,124.3962],[9.5049,117.9019],[9.1819,111.4281],[10.0035,104.9862],[11.5994,98.8023],[14.8764,93.4625],[20.7058,91.6945],[26.2133,91.4092],[23.8224,86.7129],[21.7016,81.5773],[22.5746,75.7804],[25.9096,69.6813],[31.7562,66.6321],[31.7312,61.566],[31.3004,56.6382],[33.0326,51.9465],[36.4621,48.0952],[41.3932,46.5055],[46.1064,44.7836],[44.6894,39.4975],[43.6446,33.7589],[46.1976,28.5488],[50.043,24.9106],[55.0073,24.0474],[59.9582,23.8155],[61.3148,18.588],[64.6893,14.1021],[69.5084,10.9697],[74.8044,8.7133],[80.3252,9.1509],[84.8648,11.7338],[85.8704,6.9023],[88.7921,2.6214],[94.2171,.942],[101.1671,.8101],[106.5,4.677],[111.833,.8101],[118.783,.942],[124.208,2.6215],[127.1297,6.9024],[128.135,11.7337],[132.6748,9.1509],[138.1958,8.7133],[143.4916,10.9697],[148.3108,14.1021],[151.6851,18.5881],[153.0417,23.8156],[157.9926,24.0474],[162.9569,24.9106],[166.8024,28.5489],[169.3554,33.7589],[168.3106,39.4975],[166.8936,44.7835],[171.6068,46.5055],[176.5381,48.0952],[179.9672,51.9463],[181.6996,56.6381],[181.2686,61.5661],[181.2437,66.6319],[187.0903,69.6812],[190.4253,75.7801],[191.2984,81.5771],[189.1776,86.7128],[186.7868,91.4094],[192.2941,91.6945],[198.1236,93.4625],[201.4004,98.8024],[202.9965,104.9862],[203.818,111.4282],[203.4951,117.9021],[199.6918,122.6501],[198.3858,126.956],[194.33,124.3962],[203.5182,128.8216],[207.2104,132.7831],[209.0101,138.125],[209.2913,144.6931],[206.5621,150.7321],[202.4181,155.3777],[207.4505,158.6729],[211.4742,163.5712],[212.4848,169.8596],[212.2115,175.6668],[210.683,181.1097],[206.4175,184.6684],[201.6847,186.2527]],SC=new Nw(xC.map(([r,t])=>new V((r-106.5)/106.5,(186.5-t)/106.5,0)),!1,"centripetal"),MC=SC.getPoints(400).map(r=>new ie(r.x,r.y));function yx(r){return MC.map(t=>t.clone().multiplyScalar(r))}class bC extends Error{}function EC(r){const t=typeof r=="number"?r:r.radius,e=typeof r=="number"||!r.arch?yx(t):r.arch.map(a=>a.clone());return e.push(new ie(e.at(-1).x,-8*t),new ie(e[0].x,-8*t)),e}function TC(r,t){const e={};for(const[a,o]of Object.entries(r.attributes)){if(!(o instanceof Ke))throw new Error("Munch requires non-interleaved surface attributes.");["position","normal","color","aFleshCoordinate","aChannelWall","aCutSurface"].includes(a)&&(e[a]={array:o.array.slice(),itemSize:o.itemSize,normalized:o.normalized})}return{attributes:e,index:r.index?new Uint32Array(r.index.array):null,volumeSkinning:!!r.userData.volumeSkinning,volumeBindingsReady:!!r.userData.volumeBindingsReady}}function AC(r){const t=new pi;for(const[e,a]of Object.entries(r.attributes))t.setAttribute(e,new Ke(a.array,a.itemSize,a.normalized));return r.index&&t.setIndex(new Ke(r.index,1)),t.userData.volumeSkinning=r.volumeSkinning,t.userData.volumeBindingsReady=r.volumeBindingsReady,t}function wC(r,t){const{bindings:e,...a}=r.topology,o=new Uint32Array(e.length+1);for(let f=0;f<e.length;f++)o[f+1]=o[f]+e[f].nodes.length;const c=new Uint32Array(o[e.length]),u=new Float64Array(c.length);return e.forEach((f,p)=>{c.set(f.nodes,o[p]),u.set(f.weights,o[p])}),{topology:t?{...a,restPositions:a.restPositions.slice(),materialPositions:a.materialPositions?.slice(),tetrahedra:a.tetrahedra.slice(),tetraRestVolumes:a.tetraRestVolumes.slice(),surfaceGrid:a.surfaceGrid.slice()}:a,positions:t?r.positions.slice():r.positions,velocities:t?r.velocities.slice():r.velocities,bindingOffsets:o,bindingNodes:c,bindingWeights:u}}function RC(r){const t=[];for(let e=0;e+1<r.bindingOffsets.length;e++){const a=r.bindingOffsets[e],o=r.bindingOffsets[e+1];t.push({nodes:Array.from(r.bindingNodes.subarray(a,o)),weights:Array.from(r.bindingWeights.subarray(a,o))})}return{positions:r.positions,velocities:r.velocities,topology:{...r.topology,bindings:t}}}function CC(r,t,e,a,o,c){return{id:r,geometry:TC(t),state:wC(e,!0),specimen:o,consumeWhole:c,guide:{origin:a.origin.toArray(),right:a.right.toArray(),up:a.up.toArray(),forward:a.forward.toArray(),radius:a.radius}}}function DC(r){return r.kind!=="cut"?r:{...r,pieces:r.pieces.map(t=>({geometry:AC(t.geometry),source:t.source,state:RC(t.state)}))}}function UC(r){const t=new Set,e=c=>{c?.buffer instanceof ArrayBuffer&&t.add(c.buffer)},a=c=>{Object.values(c.attributes).forEach(u=>e(u.array)),c.index&&e(c.index)},o=c=>{e(c.positions),e(c.velocities),e(c.bindingOffsets),e(c.bindingNodes),e(c.bindingWeights),e(c.topology.restPositions),e(c.topology.materialPositions),e(c.topology.tetrahedra),e(c.topology.tetraRestVolumes),e(c.topology.surfaceGrid)};return"id"in r?(a(r.geometry),o(r.state)):r.kind==="cut"&&r.pieces.forEach(c=>{a(c.geometry),o(c.state),e(c.source)}),[...t]}class LC{worker=null;disposed=!1;warmupAttempted=!1;createWorker;sequence=0;pending=null;constructor(t=()=>new Worker(new URL("/assets/munch.worker-B0iBd1--.js",import.meta.url),{type:"module"})){this.createWorker=t}warmup(){if(!(this.worker||this.disposed||this.warmupAttempted)){this.warmupAttempted=!0;try{this.ensureWorker()}catch{}}}ensureWorker(){if(this.disposed)throw new DOMException("Munch cancelled.","AbortError");if(this.worker)return this.worker;const t=this.createWorker();this.worker=t,t.onmessage=({data:a})=>{const o=this.pending;if(!(!o||a.id!==o.id||this.worker!==t))if(this.pending=null,"error"in a)o.reject(new bC(a.error));else try{o.resolve(DC(a.result))}catch{o.reject(new Error("Munch could not restore this cut. Try again or Reset."))}};const e=()=>{this.worker===t&&(t.terminate(),this.worker=null,this.pending?.reject(new Error("Munch could not load or finish. Try again or Reset.")),this.pending=null)};return t.onerror=e,t.onmessageerror=e,t}async cut(t,e,a,o,c=!1){if(this.pending)throw new Error("Please wait for the current bite to finish.");const u=this.ensureWorker(),f=CC(++this.sequence,t,e,a,o,c);return new Promise((p,d)=>{this.pending={id:f.id,resolve:p,reject:d};try{u.postMessage(f,UC(f))}catch(g){this.pending=null,d(g)}})}dispose(){this.disposed=!0,this.worker?.terminate(),this.worker=null,this.pending?.reject(new DOMException("Munch cancelled.","AbortError")),this.pending=null}}function NC(r,t,e,a,o,c){const u=new V(0,1,0),f=r.intersectPlane(new Qi(u,-a),new V);if(!f||Math.abs(r.direction.y)<.05)return null;const p=new V().setFromMatrixColumn(t.matrixWorld,0);p.y=0,p.normalize();const d=new V().crossVectors(p,u).negate(),g=new V(0,1,0),_=-f.clone().applyMatrix4(t.matrixWorldInverse).z;if(_<=0)return null;const v=e.matrixWorld.clone().invert(),y={origin:e.worldToLocal(f),right:p.transformDirection(v),up:d.transformDirection(v),forward:g.transformDirection(v),radius:o*2*_*Math.tan(Be.degToRad(t.fov/2))/c/e.scale.x},M=e.localToWorld(y.origin.clone()).project(t),E=new Kp,S=new Qi(u,-a),x=c*t.aspect,O=[];for(const w of yx(o)){E.setFromCamera(new ie(M.x+2*w.x/x,M.y+2*w.y/c),t);const A=E.ray.intersectPlane(S,new V);if(!A||Math.abs(E.ray.direction.y)<.025)return null;const P=e.worldToLocal(A).sub(y.origin);O.push(new ie(P.dot(y.right),P.dot(y.up)))}return y.arch=O,y}function PC(r,t,e,a,o,c,u,f){const p=EC(c),d=new AR().setFromPoints(p),g=p.map((Z,G)=>{const et=p[(G+1)%p.length];return{a:Z,b:et,minX:Math.min(Z.x,et.x),maxX:Math.max(Z.x,et.x),minY:Math.min(Z.y,et.y),maxY:Math.max(Z.y,et.y)}}),_=(Z,G)=>{if(Z<d.min.x||Z>d.max.x||G<d.min.y||G>d.max.y)return!1;let et=!1;for(const{a:rt,b:N,minY:X,maxY:W}of g)G<X||G>=W||Z<rt.x+(N.x-rt.x)*(G-rt.y)/(N.y-rt.y)&&(et=!et);return et};t.updateWorldMatrix(!0,!1),a.updateMatrixWorld();const v=new ye().multiplyMatrices(a.matrixWorldInverse,t.matrixWorld),y=new ye().multiplyMatrices(a.projectionMatrix,v),M=r.getAttribute("position"),E=new Float64Array(M.count),S=new Float64Array(M.count),x=new Float64Array(M.count),O=new Float64Array(M.count),w=new Uint8Array(M.count),A=new V,P=new V;let L=!0;for(let Z=0;Z<M.count;Z++)A.fromBufferAttribute(M,Z),O[Z]=1/-P.copy(A).applyMatrix4(v).z,x[Z]=P.copy(A).applyMatrix4(t.matrixWorld).y,P.copy(A).applyMatrix4(y),E[Z]=(P.x-o.x)*u/2,S[Z]=(P.y-o.y)*f/2,w[Z]=O[Z]>0&&_(E[Z],S[Z])?1:0,L&&=w[Z]===1;let z=-1/0;const I=r.getIndex(),C=I?.count??M.count;for(let Z=0;Z<C;Z+=3){const G=[0,1,2].map(ht=>I?I.getX(Z+ht):Z+ht);if(G.some(ht=>O[ht]<=0))continue;const et=E[G[0]],rt=S[G[0]],N=E[G[1]],X=S[G[1]],W=E[G[2]],at=S[G[2]],B=Math.min(et,N,W),nt=Math.max(et,N,W),gt=Math.min(rt,X,at),pt=Math.max(rt,X,at);if(nt<d.min.x||B>d.max.x||pt<d.min.y||gt>d.max.y)continue;const $=(X-at)*(et-W)+(W-N)*(rt-at);if(Math.abs($)<1e-10)continue;const mt=(ht,Mt)=>{const Ft=((X-at)*(ht-W)+(W-N)*(Mt-at))/$,$t=((at-rt)*(ht-W)+(et-W)*(Mt-at))/$;return[Ft,$t,1-Ft-$t]},vt=[];G.forEach(ht=>{w[ht]&&vt.push([E[ht],S[ht]])});for(const ht of g)if(!(ht.maxX<B||ht.minX>nt||ht.maxY<gt||ht.minY>pt)){mt(ht.a.x,ht.a.y).every(Mt=>Mt>=-1e-9)&&vt.push([ht.a.x,ht.a.y]);for(let Mt=0;Mt<3;Mt++){const Ft=G[Mt],$t=G[(Mt+1)%3],ge=E[$t]-E[Ft],Yt=S[$t]-S[Ft],Ae=ht.b.x-ht.a.x,J=ht.b.y-ht.a.y,hn=ge*J-Yt*Ae;if(Math.abs(hn)<1e-10)continue;const he=ht.a.x-E[Ft],Kt=ht.a.y-S[Ft],Qt=(he*J-Kt*Ae)/hn,we=(he*Yt-Kt*ge)/hn;Qt>=0&&Qt<=1&&we>=0&&we<=1&&(vt.push([E[Ft]+Qt*ge,S[Ft]+Qt*Yt]),L=!1)}}if(vt.length){vt.push([vt.reduce((ht,Mt)=>ht+Mt[0],0)/vt.length,vt.reduce((ht,Mt)=>ht+Mt[1],0)/vt.length]);for(const[ht,Mt]of vt){if(!_(ht,Mt))continue;const Ft=mt(ht,Mt).map((ge,Yt)=>ge*O[G[Yt]]),$t=Ft.reduce((ge,Yt,Ae)=>ge+Yt*x[G[Ae]],0)/Ft.reduce((ge,Yt)=>ge+Yt,0);z=Math.max(z,$t)}}}if(!Number.isFinite(z))return{kind:"miss"};const T=new Kp;T.setFromCamera(o,a);const H=NC(T.ray,a,e,z,c,f);return!H&&!L?{kind:"unsupported"}:{kind:"hit",guide:H,fullyCovered:L}}function OC(r){const t=r.closest(".playground-shell")??r.parentElement,e=document.createElement("canvas"),a=e.getContext("2d"),o=new Ky(e);o.colorSpace=Hn,o.minFilter=pr,o.magFilter=Fi,o.generateMipmaps=!0;const c=new ie(1,1),u={value:1};let f=!0,p=!1;const d=()=>{f=!0},g=new ResizeObserver(d);g.observe(r);const _=[...t.querySelectorAll(".specimen-heading, .specimen-caption")],v=new MutationObserver(d);v.observe(t,{attributes:!0,attributeFilter:["data-entering"]});for(const M of _)g.observe(M),v.observe(M,{attributes:!0,childList:!0,characterData:!0,subtree:!0});document.fonts.ready.then(()=>{p||d()}),document.fonts.addEventListener("loadingdone",d);const y=()=>{if(p||!f&&t.dataset.entering!=="true")return;f=!1;const M=r.getBoundingClientRect(),E=Math.min(.75,1536/Math.max(1,M.width,M.height)),S=Math.max(2,Math.round(M.width*E)),x=Math.max(2,Math.round(M.height*E));(e.width!==S||e.height!==x)&&(e.width=S,e.height=x),u.value=E,c.set(S,x),a.setTransform(E,0,0,E,0,0),a.globalAlpha=1,a.fillStyle=getComputedStyle(t).backgroundColor,a.fillRect(0,0,M.width+2,M.height+2),a.textBaseline="top";const O=document.createRange();for(const w of _){if(!w.getClientRects().length||getComputedStyle(w).display==="none")continue;const A=getComputedStyle(w);a.globalAlpha=Number(A.opacity);const P=w.getBoundingClientRect();parseFloat(A.borderTopWidth)>0&&(a.fillStyle=A.borderTopColor,a.fillRect(P.left-M.left,P.top-M.top,P.width,parseFloat(A.borderTopWidth)));const L=document.createTreeWalker(w,NodeFilter.SHOW_TEXT);for(let z=L.nextNode();z;z=L.nextNode()){const I=z.parentElement,C=getComputedStyle(I);if(C.display==="none"||C.visibility==="hidden")continue;a.font=`${C.fontStyle} ${C.fontWeight} ${C.fontSize} ${C.fontFamily}`,a.fillStyle=C.color;const T=z.textContent??"";for(let H=0;H<T.length;){const Z=String.fromCodePoint(T.codePointAt(H));if(O.setStart(z,H),H+=Z.length,O.setEnd(z,H),!Z.trim())continue;const G=O.getBoundingClientRect();if(!G.width||!G.height)continue;const et=C.textTransform==="uppercase"?Z.toUpperCase():Z;a.fillText(et,G.left-M.left,G.top-M.top)}}}a.globalAlpha=1,o.needsUpdate=!0};return y(),{texture:o,size:c,pixelRatio:u,update:y,dispose(){p=!0,g.disconnect(),v.disconnect(),document.fonts.removeEventListener("loadingdone",d),o.dispose()}}}function Od(r,t){const e=r.onBeforeCompile.bind(r),a=r.customProgramCacheKey();r.transparent=!1,r.opacity=1,r.onBeforeCompile=(o,c)=>{e(o,c),o.uniforms.uJellyBackdrop={value:t.texture},o.uniforms.uJellyBackdropSize={value:t.size},o.uniforms.uJellyBackdropRatio=t.pixelRatio;const u=de.transmission_pars_fragment.replace("uniform sampler2D transmissionSamplerMap;",`uniform sampler2D transmissionSamplerMap;
uniform sampler2D uJellyBackdrop;
uniform vec2 uJellyBackdropSize;
uniform float uJellyBackdropRatio;`).replace("return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );",`vec4 sceneColor = textureBicubic(transmissionSamplerMap, fragCoord.xy, lod);
// Frost scatters background detail across a broad cone. Keep this in screen
// pixels so switching between desktop and mobile does not sharpen the text.
float scatterPixels = 10.0 + 110.0 * roughness * roughness;
float maxLod = max(0.0, floor(log2(min(uJellyBackdropSize.x, uJellyBackdropSize.y))) - 1.0);
float pageLod = clamp(log2(max(1.0, scatterPixels * uJellyBackdropRatio)), 0.0, maxLod);
vec3 pageColor = textureBicubic(uJellyBackdrop, clamp(fragCoord.xy, vec2(0.001), vec2(0.999)), pageLod).rgb;
// Three r170 clears its transmission target to premultiplied white at
// alpha 0.5 when the main canvas has alpha. Remove that fallback before
// filling uncovered pixels with the real page. Preserve opaque scene color.
float sceneCoverage = clamp(sceneColor.a * 2.0 - 1.0, 0.0, 1.0);
vec3 sceneRadiance = max(vec3(0.0), sceneColor.rgb - vec3(0.5 * (1.0 - sceneCoverage)));
return vec4(sceneRadiance + pageColor * (1.0 - sceneCoverage), 1.0);`);o.fragmentShader=o.fragmentShader.replace("#include <transmission_pars_fragment>",u),o.fragmentShader=o.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
// Transmission is already resolved; do not composite the HTML a second time.
gl_FragColor.a = 1.0;`)},r.customProgramCacheKey=()=>a+"-frosted-page-refraction-v1"}function zC(r,t){if(r.length<2||t.length<2)return null;const[e,a]=r,[o,c]=t,u=Math.hypot(a.x-e.x,a.y-e.y),f=Math.hypot(c.x-o.x,c.y-o.y);if(u<8||f<8)return null;const p=Math.atan2(c.y-o.y,c.x-o.x)-Math.atan2(a.y-e.y,a.x-e.x);return{dx:(o.x+c.x-e.x-a.x)/2,dy:(o.y+c.y-e.y-a.y)/2,twist:Math.atan2(Math.sin(p),Math.cos(p)),zoomRatio:u/f}}function BC(r,t,e,a){const o=e===1?16:e===2?240:1;return a?{dx:0,dy:0,twist:0,zoomRatio:Math.exp(Math.max(-.3,Math.min(.3,t*o*.008)))}:{dx:Math.max(-100,Math.min(100,r*o))*.7,dy:Math.max(-100,Math.min(100,t*o))*.7,twist:0,zoomRatio:1}}const IC=new EventTarget;function FC(r){IC.dispatchEvent(new CustomEvent("munch",{detail:r}))}function HC(){const r=document.createElement("canvas");r.width=128,r.height=128;const t=r.getContext("2d");if(t){const e=t.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"rgba(40, 45, 34, 0.29)"),e.addColorStop(.36,"rgba(47, 51, 40, 0.16)"),e.addColorStop(1,"rgba(47, 51, 40, 0)"),t.fillStyle=e,t.fillRect(0,0,128,128)}return new Ky(r)}function VC({specimen:r,resetToken:t,zoomStep:e,handEnabled:a,munchEnabled:o,rotateEnabled:c,slowMotion:u,firmness:f,damping:p,handStrength:d,gravityStrength:g,shakeToken:_,onSimulationStatus:v}){const y=wR(),M=fe.useRef(null),E=fe.useRef(null),S=fe.useRef(Ki.distance),x=fe.useRef(e),O=fe.useRef({x:0,y:0}),w=fe.useRef(null),A=fe.useRef(null),P=fe.useRef(null),L=fe.useRef({handEnabled:a,munchEnabled:o,rotateEnabled:c,paused:!1,slowMotion:u,firmness:f,damping:p,handStrength:d,gravityStrength:g,shakeToken:_});L.current={handEnabled:a,munchEnabled:o,rotateEnabled:c,paused:!1,slowMotion:u,firmness:f,damping:p,handStrength:d,gravityStrength:g,shakeToken:_};const z=fe.useRef(v);return z.current=v,fe.useEffect(()=>{const I=M.current;if(!I)return;const{geometry:C,sourcePositions:T,volumeSourcePositions:H,rings:Z,sides:G}=Ai[r].create(),et=new Float32Array(C.getAttribute("color").array);let rt=!1;const N=()=>{rt||(rt=!0,C.dispose())};let X=y,W=null,at=null;const B=()=>(W&&(W.dispose(),W=null),w.current=null,E.current=null,X&&(X.domElement.remove(),X=null),at=_C(I,T,et,Ai[r].title,{rings:Z,sides:G,indices:C.getIndex()?.array}),A.current=at,N(),z.current("still"),()=>{at?.dispose(),A.current===at&&(A.current=null),N()});if(new URLSearchParams(window.location.search).get("preview")==="canvas"||!X)return B();X.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),X.setSize(I.clientWidth,I.clientHeight),X.outputColorSpace=Hn,X.toneMapping=Up,X.toneMappingExposure=1.14,X.shadowMap.enabled=!0,X.shadowMap.type=Lu,X.domElement.setAttribute("aria-label",`${Ai[r].title}. Hand drags the jelly. Rotate or two fingers orbit; pinch to zoom.`),X.domElement.setAttribute("role","img"),X.domElement.dataset.testid="canvas-peach-specimen",I.appendChild(X.domElement);try{if(new URLSearchParams(window.location.search).get("preview")==="still")throw new Error("Still preview requested.");W=Pd(X,C,T,Z,G,H,Ai[r].map);const St=X.getContext();for(;St.getError()!==St.NO_ERROR;);if(W.step(1/120,{firmness:f,damping:p,paused:!1,slowMotion:!1}),St.getError()!==St.NO_ERROR)throw new Error("The GPU soft-body shader could not run on this device.");W.reset()}catch{W?.dispose(),W=null;const St=C.getAttribute("position");St.array.set(T),St.needsUpdate=!0,X.domElement.setAttribute("aria-label",`Still 3D preview of ${Ai[r].title}. GPU simulation unavailable.`)}const nt=new Tw,gt=OC(I),pt=new ti(33,I.clientWidth/Math.max(I.clientHeight,1),.1,100);pt.position.set(0,.1,4.95),E.current=pt;const $=new vl;$.position.y=-.12,nt.add($);const mt=new $w({vertexColors:!0,transparent:!1,opacity:1,roughness:.58,metalness:0,clearcoat:.18,clearcoatRoughness:.61,transmission:.62,thickness:.75,attenuationDistance:1.9,attenuationColor:new Gt("#f7dfd9"),ior:1.4,specularIntensity:.72,sheen:.22,sheenRoughness:.65,sheenColor:new Gt("#ffd5bf")});W?.bindSurfaceMaterial(mt),Ai[r].appearance(mt),Od(mt,gt);const vt=new Dn(C,mt);vt.castShadow=!0,vt.frustumCulled=!1,vt.receiveShadow=!0;const ht=new Tu({depthPacking:Cy});W?.bindSurfaceMaterial(ht),vt.customDepthMaterial=ht,$.add(vt);let Mt=W?[{mesh:vt,body:W,depth:ht}]:[],Ft=!1,$t=!1,ge=0,Yt=null;const Ae=St=>{$.remove(St.mesh),St.body.endGrab(),St.body.dispose(),St.mesh.geometry.dispose(),St.mesh.material.dispose(),St.depth.dispose()},J=St=>{const ae=Pd(X,St.geometry,St.source,0,0,St.state.topology.restPositions,(j,it,Q)=>[j,it,Q],St.state.topology);ae.restoreState(St.state.positions,St.state.velocities);const jt=mt.clone();ae.bindSurfaceMaterial(jt),Ai[r].appearance(jt),yC(jt,r),Od(jt,gt);const R=ht.clone();ae.bindSurfaceMaterial(R);const q=new Dn(St.geometry,jt);return q.castShadow=q.receiveShadow=!0,q.frustumCulled=!1,q.customDepthMaterial=R,{mesh:q,body:ae,depth:R}},hn=()=>{const St=Ai[r].create(),ae=Pd(X,St.geometry,St.sourcePositions,St.rings,St.sides,St.volumeSourcePositions,Ai[r].map),jt=ae.snapshot();for(let it=1;it<jt.positions.length;it+=3)jt.positions[it]+=.6;ae.restoreState(jt.positions,jt.velocities);const R=mt.clone();ae.bindSurfaceMaterial(R),Ai[r].appearance(R),Od(R,gt);const q=ht.clone();ae.bindSurfaceMaterial(q);const j=new Dn(St.geometry,R);return j.castShadow=j.receiveShadow=!0,j.frustumCulled=!1,j.customDepthMaterial=q,{mesh:j,body:ae,depth:q}},he=DR();nt.add(he);const Kt=new Dn(new oo(2.85,2.85),new Vp({map:HC(),transparent:!0,depthWrite:!1}));Kt.rotation.x=-Math.PI/2,Kt.position.set(.08,-1.2-.02,.06),Kt.renderOrder=-1,nt.add(Kt);const Qt=CR(nt),we=()=>{const St=Math.max(1,I.clientWidth),ae=Math.max(1,I.clientHeight);pt.fov=window.innerWidth<600?37:33,LR(pt,St,ae),X?.setPixelRatio(Math.min(window.devicePixelRatio||1,St<760||window.matchMedia("(pointer: coarse)").matches?1.5:2)),X?.setSize(St,ae)},te=new ResizeObserver(we);te.observe(I),we(),w.current=W,z.current(W?"ready":"still");let F=L.current.shakeToken,D=0,lt=0,Et=Ki.distance;const Tt=new di().setFromBufferAttribute(new Ke(T,3)),_t=new V;let Ht=0;for(let St=0;St<T.length;St+=3)Ht=Math.max(Ht,Math.hypot(T[St],T[St+1]+.3,T[St+2]));const Ut=St=>{if(!X)return;const ae=I.clientWidth,jt=I.clientHeight,R=window.innerWidth<=760||jt<=500&&window.innerWidth<=1e3,q=R&&window.innerWidth>jt,j=L.current;j.shakeToken!==F&&(Mt.forEach(ve=>ve.body.triggerShake()),F=j.shakeToken);const it=D===0?0:Math.min((St-D)/1e3,.05);D=St,(!j.handEnabled||j.paused)&&Rt==="grab"&&zt(),$.position.set(0,0,0);const Q=2*Ki.distance*Math.tan(Be.degToRad(pt.fov/2)),At=Math.min(ae*(R&&!q?.82:.46),jt*(q?.56:R?.57:.82)),Pt=Be.degToRad(pt.fov/2),Nt=Math.min(Pt,Math.atan(Math.tan(Pt)*pt.aspect*(R&&!q?1:.5))),Dt=Math.min(At*Q/(jt*2.4),Su*Math.sin(Nt)/(Ht*1.05));$.scale.setScalar(Dt);const ne=Be.clamp(Ki.pitch+O.current.x,.16,1.35),qt=Ki.yaw-O.current.y;Et=UR(pt,Dt,S.current,Et,qt,ne);const kt=new di;for(const ve of Mt)ve.body.setPlayBounds(NR(pt,Dt)),!document.hidden&&!Ft&&ve.body.step(it,j),kt.union(ve.body.getSurfaceBounds());Mt.length||kt.copy(Tt),kt.getCenter(_t),j.munchEnabled?en.warmup():Me.style.display="none",I.dataset.pieceCount=String(Mt.length),I.dataset.biteCount=String(ge),he.position.y=Bi*Dt-.003,Kt.scale.setScalar(Dt),Kt.position.set(_t.x*Dt,Bi*Dt-.005,_t.z*Dt),Kt.material.opacity=R?.8:1,gt.update(),X.render(nt,pt),lt=window.requestAnimationFrame(Ut)};lt=window.requestAnimationFrame(Ut);const Lt=new Kp,me=new ie,wt=new Qi,Vt=new V,ee=new V,Wt=new Map;let Rt="none",ce=-1,se=0,Ne=0,K=!1,Ot=1,dt=0;const ft=X.domElement,zt=()=>{Mt.forEach(ae=>ae.body.endGrab()),Yt=null;const St=[...Wt.keys()];Wt.clear(),Rt="none",ce=-1,K=!1,I.dataset.grabbing="false";for(const ae of St)ft.hasPointerCapture?.(ae)&&ft.releasePointerCapture(ae)};P.current=zt;const Bt=()=>{D=0,document.hidden&&zt()},ue=St=>{Wt.set(St.pointerId,{x:St.clientX,y:St.clientY})},Me=document.createElementNS("http://www.w3.org/2000/svg","svg");Me.classList.add("munch-guide"),Me.dataset.testid="munch-guide",Me.setAttribute("aria-hidden","true");const Ge=document.createElementNS("http://www.w3.org/2000/svg","image");Ge.setAttribute("href","/references/bite-mark.svg"),Ge.setAttribute("preserveAspectRatio","xMidYMid meet"),Me.appendChild(Ge),I.appendChild(Me);const xe=document.createElement("div");xe.className="munch-status",xe.setAttribute("role","status"),xe.dataset.testid="munch-status",I.appendChild(xe);const En=St=>{xe.textContent=St},en=new LC,$e=(St,ae)=>{if(!L.current.munchEnabled||!Mt.length)return null;en.warmup();const jt=ft.getBoundingClientRect(),R=St-jt.left,q=ae-jt.top,j=Math.min(135,Math.max(60,jt.width*.085)),it=j/106.5;return Ge.setAttribute("x",String(R-j)),Ge.setAttribute("y",String(q-186.5*it)),Ge.setAttribute("width",String(213*it)),Ge.setAttribute("height",String(187*it)),Me.setAttribute("viewBox",`0 0 ${jt.width} ${jt.height}`),Me.style.display="block",j},vn=async(St,ae)=>{if(Ft)return;const jt=$e(St,ae);if(!jt)return;Ft=!0,En("Munching…"),Mt.forEach(j=>j.body.endGrab());const R=[],q=[];try{if(await new Promise(Nt=>requestAnimationFrame(()=>Nt())),$t)return;const j=ft.getBoundingClientRect();me.set((St-j.left)/j.width*2-1,1-(ae-j.top)/j.height*2),pt.updateMatrixWorld(),$.updateMatrixWorld(!0);const it=[];for(const Nt of Mt){Nt.body.syncSurfaceForRaycast();const Dt=PC(Nt.mesh.geometry,Nt.mesh,$,pt,me,jt,j.width,j.height);if(Dt.kind==="miss"){it.push({piece:Nt,result:{kind:"miss"}});continue}if(Dt.kind==="unsupported")throw new Error("This view is too low for a vertical bite here. Orbit slightly downward and try again.");const ne=Dt.guide??{origin:new V,right:new V(1,0,0),up:new V(0,0,-1),forward:new V(0,1,0),radius:1},qt=await en.cut(Nt.mesh.geometry,Nt.body.snapshot(),ne,r,Dt.fullyCovered);if(qt.kind==="cut"&&q.push(...qt.pieces),$t)return;it.push({piece:Nt,result:qt})}if($t)return;if(it.every(Nt=>Nt.result.kind==="miss")){En("No jelly inside the bite guide.");return}let Q=0;const At=[];for(const{piece:Nt,result:Dt}of it)if(Dt.kind==="miss")At.push(Nt);else if(Q+=Dt.removedVolume,Dt.kind==="cut")for(const ne of Dt.pieces){const qt=J(ne);R.push(qt),At.push(qt)}if(At.length>4)throw new Error("This bite would leave too many fragments. Try a wider bite.");const Pt=At.length===0;if(Pt){const Nt=hn();R.push(Nt),At.push(Nt)}for(const{piece:Nt,result:Dt}of it)Dt.kind!=="miss"&&Ae(Nt);Mt=At,R.forEach(Nt=>$.add(Nt.mesh)),W=Mt[0]?.body??null,w.current=W,ge++,FC({specimen:r,removedVolume:Q,remainingPieces:Pt?0:Mt.length,consumed:Pt}),En(Pt?"Finished — a fresh jelly is dropping in.":"Munch! Switch to Hand to stretch the remaining jelly.")}catch(j){if(R.forEach(Ae),$t)return;En(j instanceof Error?j.message:"That bite could not be made safely. Try another position.")}finally{for(const j of q)Mt.some(it=>it.mesh.geometry===j.geometry)||j.geometry.dispose();Ft=!1,D=0}},_n=({dx:St,dy:ae,twist:jt,zoomRatio:R})=>{O.current.y+=St*.008-jt,O.current.x=Be.clamp(O.current.x+ae*.005,-.65,.65),S.current=Be.clamp(S.current*R,Su,Rp)},Vi=St=>{if(St.button===0&&!Ft)if(ue(St),ft.setPointerCapture&&ft.setPointerCapture(St.pointerId),Wt.size===1){if(ce=St.pointerId,se=St.clientX,Ne=St.clientY,L.current.munchEnabled){Rt="munch",$e(St.clientX,St.clientY);return}if(Rt=L.current.rotateEnabled?"orbit":"none",W&&L.current.handEnabled&&!L.current.paused){Mt.forEach(R=>R.body.syncSurfaceForRaycast());const ae=ft.getBoundingClientRect();me.set((St.clientX-ae.left)/Math.max(ae.width,1)*2-1,-((St.clientY-ae.top)/Math.max(ae.height,1)*2-1)),$.updateMatrixWorld(!0),Mt.forEach(R=>R.mesh.updateMatrixWorld(!0)),pt.updateMatrixWorld(!0),Lt.setFromCamera(me,pt);const jt=Lt.intersectObjects(Mt.map(R=>R.mesh),!1)[0];if(jt){Yt=Mt.find(j=>j.mesh===jt.object),pt.getWorldDirection(ee),wt.setFromNormalAndCoplanarPoint(ee,jt.point);const R=Yt.mesh.worldToLocal(jt.point.clone()),q=jt.face;if(q){const j=Yt.mesh.geometry.getAttribute("position"),it=new V;wi.getBarycoord(R,new V().fromBufferAttribute(j,q.a),new V().fromBufferAttribute(j,q.b),new V().fromBufferAttribute(j,q.c),it),Yt.body.beginGrab(R,[q.a,q.b,q.c],it)}Rt="grab",I.dataset.grabbing="true"}}}else Yt?.body.endGrab(),Yt=null,I.dataset.grabbing="false",Me.style.display="none",Rt="view",ce=-1},Sr=St=>{if(K)return;if(!Wt.get(St.pointerId)){L.current.munchEnabled&&Wt.size===0&&$e(St.clientX,St.clientY);return}const jt=[...Wt.values()];if(ue(St),Rt==="view"&&Wt.size>=2){const j=zC(jt,[...Wt.values()]);j&&_n(j);return}if(Rt==="none"||ce!==St.pointerId)return;if(Rt==="munch"){$e(St.clientX,St.clientY);return}if(Rt==="grab"){if($t)return;const j=ft.getBoundingClientRect();me.set((St.clientX-j.left)/Math.max(j.width,1)*2-1,-((St.clientY-j.top)/Math.max(j.height,1)*2-1)),Lt.setFromCamera(me,pt),Lt.ray.intersectPlane(wt,Vt)&&Yt?.body.moveGrab(Yt.mesh.worldToLocal(Vt.clone()));return}const R=St.clientX-se,q=St.clientY-Ne;se=St.clientX,Ne=St.clientY,_n({dx:R,dy:q,twist:0,zoomRatio:1})},na=St=>{Wt.has(St.pointerId)&&(Wt.delete(St.pointerId),ce===St.pointerId&&(Rt==="munch"&&vn(St.clientX,St.clientY),Yt?.body.endGrab(),Yt=null,I.dataset.grabbing="false",Rt="none",ce=-1),Rt==="view"&&Wt.size<2&&(Rt="none",ce=-1),ft.hasPointerCapture?.(St.pointerId)&&ft.releasePointerCapture(St.pointerId))},Gi=St=>{St.preventDefault(),!(K||Wt.size)&&_n(BC(St.deltaX,St.deltaY,St.deltaMode,St.ctrlKey))},Ri=St=>{if(St.preventDefault(),Wt.size)return;K=!0;const ae=St;Ot=ae.scale||1,dt=ae.rotation||0},Ci=St=>{if(St.preventDefault(),!K)return;const{scale:ae,rotation:jt}=St;!(ae>0)||!Number.isFinite(ae)||!Number.isFinite(jt)||(_n({dx:0,dy:0,twist:(jt-dt)*Math.PI/180,zoomRatio:Ot/ae}),Ot=ae,dt=jt)},mi=St=>{St.preventDefault(),K=!1};ft.addEventListener("gesturestart",Ri,{passive:!1}),ft.addEventListener("gesturechange",Ci,{passive:!1}),ft.addEventListener("gestureend",mi,{passive:!1}),ft.addEventListener("pointerdown",Vi),ft.addEventListener("pointermove",Sr);const gi=()=>{Me.style.display="none"};return ft.addEventListener("pointerleave",gi),ft.addEventListener("pointerup",na),ft.addEventListener("pointercancel",zt),ft.addEventListener("lostpointercapture",na),window.addEventListener("blur",zt),document.addEventListener("visibilitychange",Bt),ft.addEventListener("wheel",Gi,{passive:!1}),()=>{$t=!0,en.dispose(),window.cancelAnimationFrame(lt),te.disconnect(),ft.removeEventListener("pointerdown",Vi),ft.removeEventListener("pointermove",Sr),ft.removeEventListener("pointerleave",gi),ft.removeEventListener("pointerup",na),ft.removeEventListener("pointercancel",zt),ft.removeEventListener("lostpointercapture",na),window.removeEventListener("blur",zt),document.removeEventListener("visibilitychange",Bt),P.current=null,ft.removeEventListener("wheel",Gi),ft.removeEventListener("gesturestart",Ri),ft.removeEventListener("gesturechange",Ci),ft.removeEventListener("gestureend",mi),Mt.forEach(Ae),w.current===W&&(w.current=null),C.dispose(),mt.dispose(),ht.dispose(),Me.remove(),xe.remove(),he.geometry.dispose(),he.material.dispose(),Kt.geometry.dispose();const St=Kt.material;St.map?.dispose(),St.dispose(),Qt(),gt.dispose(),I.contains(ft)&&I.removeChild(ft),E.current=null}},[y]),fe.useEffect(()=>{t!==0&&(P.current?.(),O.current={x:0,y:0},S.current=Ki.distance,E.current?.position.set(0,.1,4.95),w.current?.reset(),A.current?.setZoom(Ki.distance))},[t]),fe.useEffect(()=>{S.current=Be.clamp(S.current+(e-x.current)*.38,Su,Rp),x.current=e,A.current?.setZoom(S.current)},[e]),fe.useEffect(()=>{P.current?.()},[a,o,c]),Ct.jsx("div",{className:"canvas-stage",ref:M,"data-testid":"canvas-stage","aria-label":"Jelly play area across the viewport","data-hand":a?"on":"off","data-tool":a?"hand":o?"munch":"rotate"})}const fr={firmness:45,damping:0,handStrength:100,gravityStrength:170},GC=fe.lazy(()=>OM(()=>import("./TeaLanding-BwlFvCer.js"),__vite__mapDeps([0,1]))),kC=[{id:"lotus-root",label:"Stuffed Lotus Root",chinese:"桂花莲藕"},{id:"dried-persimmon",label:"Dried Persimmon",chinese:"柿饼"},{id:"peach",label:"Longevity Peach",chinese:"寿桃"},{id:"bitter-gourd",label:"Bitter Gourd",chinese:"苦瓜"}],pu={peach:{lines:["Longevity","Peach"],chinese:"寿桃"},"bitter-gourd":{lines:["Bitter","Gourd"],chinese:"苦瓜"},"lotus-root":{lines:["Stuffed","Lotus Root"],chinese:"糯米莲藕"},"dried-persimmon":{lines:["Dried","Persimmon"],chinese:"柿饼"}};function WC({entering:r=!1}){const t=fe.useRef(null),[e,a]=fe.useState(r);fe.useEffect(()=>{if(!r)return;t.current?.focus({preventScroll:!0});const at=setTimeout(()=>a(!1),1300);return()=>clearTimeout(at)},[r]);const[o,c]=fe.useState("peach"),u=Ai[o],[f,p]=fe.useState(0),[d,g]=fe.useState(0),[_,v]=fe.useState("checking"),[y,M]=fe.useState("hand"),E=y==="hand",S=y==="munch",[x,O]=fe.useState(!1),[w,A]=fe.useState(fr.firmness),[P,L]=fe.useState(fr.damping),[z,I]=fe.useState(0),[C,T]=fe.useState(fr.handStrength),[H,Z]=fe.useState(fr.gravityStrength),[G,et]=fe.useState(!1),rt=_==="ready",N=fe.useCallback(()=>g(at=>at-1),[]),X=fe.useCallback(()=>g(at=>at+1),[]),W=fe.useCallback(()=>{p(at=>at+1),g(0),M("hand"),O(!1),A(fr.firmness),L(fr.damping),T(fr.handStrength),Z(fr.gravityStrength)},[]);return Ct.jsxs("main",{className:"study-shell playground-shell","data-entering":e,"aria-label":"Jelly Study 3D fruit playground",children:[Ct.jsxs("h1",{className:"specimen-heading",ref:t,tabIndex:-1,"aria-label":`${pu[o].lines.join(" ")} · ${pu[o].chinese}`,children:[Ct.jsx("span",{className:"specimen-heading-english",children:pu[o].lines.map(at=>Ct.jsx("span",{children:at},at))}),Ct.jsx("span",{className:"specimen-heading-chinese",lang:"zh-Hans",children:pu[o].chinese})]}),Ct.jsx("nav",{className:"selection","aria-label":"Specimen selection",children:Ct.jsx("div",{className:"fruit-list",children:kC.map(({id:at,label:B,chinese:nt})=>{const gt=Object.hasOwn(Ai,at);return Ct.jsxs("button",{type:"button",className:"fruit-link","aria-pressed":at===o,"aria-label":`${B}: ${gt?at===o?"current specimen":"select specimen":"not available yet"}`,disabled:!gt,onClick:()=>{gt&&at!==o&&(v("checking"),c(at))},"data-testid":`select-fruit-${at}`,children:[Ct.jsx("span",{children:B}),Ct.jsx("span",{lang:"zh-Hans",children:nt})]},at)})})}),Ct.jsx(VC,{specimen:o,resetToken:f,zoomStep:d,handEnabled:E,munchEnabled:S,rotateEnabled:y==="rotate",slowMotion:x,firmness:w,damping:P,handStrength:C,gravityStrength:H,shakeToken:z,onSimulationStatus:v},`${o}-${f}`),_==="still"&&Ct.jsx("div",{className:"preview-notice",role:"status",children:"Still preview · GPU simulation unavailable"}),o==="peach"&&Ct.jsx("aside",{className:"specimen-caption","data-testid":"text-specimen-description",children:"Traditionally enjoyed as a steamed bun at birthdays of elderly individuals."}),o==="bitter-gourd"&&Ct.jsx("aside",{className:"specimen-caption","data-testid":"text-specimen-description",children:"Eating bitter gourds symbolizes enduring and accepting hardship."}),o==="dried-persimmon"&&Ct.jsx("aside",{className:"specimen-caption","data-testid":"text-specimen-description",children:"As persimmons dry and lose moisture, their natural sugars crystallize on the surface, creating a prized white powdery coating"}),o==="lotus-root"&&Ct.jsxs("aside",{className:"specimen-caption","data-testid":"text-specimen-description",children:["A traditional sweet appetizer"," ",Ct.jsx("strong",{children:"tracing back to the Tang Dynasty,"})," usually stuffed with sticky rice and sweetened with Osmanthus syrup"]}),Ct.jsxs("aside",{className:"physics-panel",id:"physics-settings","data-expanded":G,"aria-label":"Soft-body simulation settings",children:[Ct.jsx("button",{type:"button",className:"settings-close","aria-label":"Close physics settings",onClick:()=>et(!1),children:Ct.jsx(n1,{"aria-hidden":"true"})}),Ct.jsx("div",{className:"physics-panel-heading",children:Ct.jsx("span",{children:"Soft body"})}),Ct.jsxs("label",{className:"physics-range",htmlFor:"firmness-control",children:[Ct.jsxs("span",{children:["Firmness ",Ct.jsx("output",{htmlFor:"firmness-control",children:w})]}),Ct.jsx("input",{id:"firmness-control",style:{"--range-fill":`${w}%`},"data-testid":"slider-firmness",type:"range",min:"0",max:"100",step:"1",value:w,disabled:!rt,onChange:at=>A(Number(at.target.value))})]}),Ct.jsxs("label",{className:"physics-range",htmlFor:"damping-control",children:[Ct.jsxs("span",{children:["Damping ",Ct.jsx("output",{htmlFor:"damping-control",children:P})]}),Ct.jsx("input",{id:"damping-control",style:{"--range-fill":`${P}%`},"data-testid":"slider-damping",type:"range",min:"0",max:"100",step:"1",value:P,disabled:!rt,onChange:at=>L(Number(at.target.value))})]}),Ct.jsxs("label",{className:"physics-range",htmlFor:"hand-strength-control",children:[Ct.jsxs("span",{children:["Hand strength"," ",Ct.jsx("output",{htmlFor:"hand-strength-control",children:C})]}),Ct.jsx("input",{title:"Grab/pinch force: 0 applies no pull, 100 gives the strongest attachment",id:"hand-strength-control",style:{"--range-fill":`${C}%`},"data-testid":"slider-hand-strength",type:"range",min:"0",max:"100",step:"1",value:C,disabled:!rt,onChange:at=>T(Number(at.target.value))})]}),Ct.jsxs("label",{className:"physics-range",htmlFor:"gravity-control",children:[Ct.jsxs("span",{children:["Gravity"," ",Ct.jsxs("output",{htmlFor:"gravity-control",children:[(H/100).toFixed(2),"×"]})]}),Ct.jsx("input",{id:"gravity-control",style:{"--range-fill":`${H/2}%`},"data-testid":"slider-gravity",type:"range",min:"0",max:"200",step:"5",value:H,disabled:!rt,title:"Gravity toward the floor beneath the slice: 0× is weightless, 1× uses 9.81 units/s²",onChange:at=>Z(Number(at.target.value))})]})]}),Ct.jsxs("nav",{className:"toolbar","aria-label":"Study tools",children:[Ct.jsxs("button",{type:"button",className:"tool-button",title:"Reset","data-testid":"button-reset-view","aria-label":"Reset specimen, simulation, and view",onClick:W,children:[Ct.jsx(jM,{"aria-hidden":"true"}),Ct.jsx("span",{children:"Reset"})]}),Ct.jsx("span",{className:"tool-divider","aria-hidden":"true"}),Ct.jsxs("div",{className:"tool-zoom",role:"group","aria-label":"Zoom",children:[Ct.jsx("button",{type:"button",className:"tool-button",title:"Zoom out","data-testid":"button-zoom-out","aria-label":"Zoom out",onClick:X,children:Ct.jsx(s1,{"aria-hidden":"true"})}),Ct.jsx("span",{className:"zoom-label","aria-hidden":"true",children:"Zoom"}),Ct.jsx("button",{type:"button",className:"tool-button",title:"Zoom in","data-testid":"button-zoom-in","aria-label":"Zoom in",onClick:N,children:Ct.jsx(a1,{"aria-hidden":"true"})})]}),Ct.jsxs("button",{type:"button",className:"tool-button",title:"Rotate — drag to orbit; two fingers rotate and pinch to zoom","data-testid":"button-rotate-mode","data-active":y==="rotate","aria-label":y==="rotate"?"Rotate mode on":"Rotate mode off","aria-pressed":y==="rotate",disabled:!rt,onClick:()=>M("rotate"),children:[Ct.jsx(qM,{"aria-hidden":"true"}),Ct.jsx("span",{children:"Rotate"})]}),Ct.jsx("span",{className:"tool-divider","aria-hidden":"true"}),Ct.jsxs("button",{type:"button",className:"tool-button",title:"Hand","data-testid":"button-hand-mode","data-active":E,"aria-label":E?"Hand mode on: drag the fruit to deform it":"Hand mode off: select to drag or poke the jelly","aria-pressed":E,disabled:!rt,onClick:()=>M("hand"),children:[Ct.jsx(WM,{"aria-hidden":"true"}),Ct.jsx("span",{children:"Hand"})]}),Ct.jsxs("button",{type:"button",className:"tool-button",title:"Munch","data-testid":"button-munch","aria-label":S?"Munch mode on":"Munch mode off","aria-pressed":S,"data-active":S,disabled:!rt,onClick:()=>M("munch"),children:[Ct.jsx(GM,{"aria-hidden":"true"}),Ct.jsx("span",{children:"Munch"})]}),Ct.jsxs("button",{type:"button",className:"tool-button",title:"Wiggle","data-testid":"button-shake","aria-label":"Wiggle specimen",disabled:!rt,onClick:()=>I(at=>at+1),children:[Ct.jsx(t1,{"aria-hidden":"true"}),Ct.jsx("span",{children:"Wiggle"})]}),Ct.jsxs("button",{type:"button",className:"tool-button",title:"Slow motion","data-testid":"button-slow-motion","data-active":x,"aria-label":x?"Slow motion on":"Slow motion off","aria-pressed":x,disabled:!rt,onClick:()=>O(at=>!at),children:[Ct.jsx(JM,{"aria-hidden":"true"}),Ct.jsx("span",{children:"Slow"})]}),Ct.jsxs("button",{type:"button",className:"tool-button settings-toggle",title:"Physics settings","data-testid":"button-physics-settings","aria-label":"Physics settings","aria-expanded":G,"aria-controls":"physics-settings","data-active":G,onClick:()=>et(at=>!at),children:[Ct.jsx(KM,{"aria-hidden":"true"}),Ct.jsx("span",{children:"Settings"})]})]}),Ct.jsxs("span",{className:"sr-only","aria-live":"polite","data-testid":"status-active-fruit",children:[u.title," is the current specimen. Choose Longevity Peach, Bitter Gourd, Stuffed Lotus Root, or Dried Persimmon to switch specimens."]}),Ct.jsx("span",{className:"sr-only","aria-live":"polite","data-testid":"text-stage-status",children:rt?"Hand drags or pokes the jelly. Rotate orbits the view. Use two fingers to rotate and pinch to zoom, or use the zoom buttons.":_==="still"?"Still preview. GPU simulation is unavailable and simulation-only controls are disabled.":"Checking GPU support for soft-body simulation."})]})}function XC(){const[r,t]=fe.useState(!1),e=fe.useCallback(()=>t(!0),[]),a=new URLSearchParams(location.search),o=!r&&(a.get("draft")==="tea"||!a.has("playground"));return Ct.jsx(RR,{children:o?Ct.jsx(fe.Suspense,{fallback:Ct.jsx("div",{className:"studio-loading",children:"Preparing the tea table…"}),children:Ct.jsx(GC,{onEnter:e})}):Ct.jsx(WC,{entering:r})})}function gy(r){if(r instanceof Error)return r;if(typeof r=="string")return new Error(r);try{return new Error(JSON.stringify(r))}catch{return new Error(String(r))}}function qC({error:r,resetError:t}){return Ct.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:Ct.jsxs("div",{className:"max-w-lg w-full text-center",children:[Ct.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),Ct.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,Ct.jsx("button",{type:"button",onClick:t,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class YC extends fe.Component{state={error:null};static getDerivedStateFromError(t){return{error:gy(t)}}componentDidCatch(t,e){console.error("ErrorBoundary caught an error:",gy(t),e.componentStack)}componentDidUpdate(t){this.state.error!==null&&t.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:t}=this.state;if(t===null)return this.props.children;const e=this.props.FallbackComponent??qC;return Ct.jsx(e,{error:t,resetError:this.resetError})}}LM.createRoot(document.getElementById("root"),{onCaughtError:(r,t)=>{console.error(r,t.componentStack)}}).render(Ct.jsx(YC,{children:Ct.jsx(XC,{})}));export{ww as $,$C as A,Ke as B,Gt as C,Ld as D,Dn as E,r3 as F,e3 as G,Zy as H,t3 as I,n3 as J,i3 as K,Cl as L,$w as M,Bc as N,cn as O,mR as P,so as Q,Yd as R,Hn as S,jC as T,vl as U,ie as V,ti as W,Be as X,kp as Y,jy as Z,a3 as _,KC as a,bu as a0,Sp as a1,Yy as a2,Pn as a3,Cu as a4,Ru as a5,Fu as a6,Ue as a7,yr as a8,Iu as a9,di as aa,Oa as ab,zu as ac,Vn as ad,Yn as ae,yy as af,QC as ag,Al as ah,It as ai,hR as aj,l3 as ak,de as al,wR as am,fe as an,Tw as ao,Lu as ap,Qw as aq,oo as ar,Ct as as,AR as at,ZC as b,c3 as c,ao as d,o3 as e,ye as f,V as g,j_ as h,s3 as i,u3 as j,JC as k,pr as l,Zh as m,B1 as n,Fi as o,gn as p,jd as q,wa as r,Uw as s,xr as t,Dw as u,Jw as v,Ta as w,Vp as x,Ye as y,pi as z};
