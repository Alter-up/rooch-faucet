"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5589],{11698:function(t,e,n){n.d(e,{Z:function(){return C}});var r=n(37878),o=n(76904),i=n(3479),a=n(78667),u=n(66421),s=n(89110),l=n(2667),c=n(70377),f=n(32511),d=(0,c.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=n(49833),m=n(8631);function g(t){return(0,m.ZP)("MuiAvatar",t)}(0,p.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var v=n(45851);let h=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],y=t=>{let{classes:e,variant:n,colorDefault:r}=t;return(0,u.Z)({root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]},g,e)},x=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})(t=>{let{theme:e}=t;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,o.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,o.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]}}),w=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,s.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});var C=i.forwardRef(function(t,e){let n=(0,l.i)({props:t,name:"MuiAvatar"}),{alt:u,children:s,className:c,component:d="div",slots:p={},slotProps:m={},imgProps:g,sizes:C,src:k,srcSet:P,variant:S="circular"}=n,R=(0,r.Z)(n,h),M=null,j=function(t){let{crossOrigin:e,referrerPolicy:n,src:r,srcSet:o}=t,[a,u]=i.useState(!1);return i.useEffect(()=>{if(!r&&!o)return;u(!1);let t=!0,i=new Image;return i.onload=()=>{t&&u("loaded")},i.onerror=()=>{t&&u("error")},i.crossOrigin=e,i.referrerPolicy=n,i.src=r,o&&(i.srcset=o),()=>{t=!1}},[e,n,r,o]),a}((0,o.Z)({},g,{src:k,srcSet:P})),A=k||P,W=A&&"error"!==j,Z=(0,o.Z)({},n,{colorDefault:!W,component:d,variant:S}),D=y(Z),[E,T]=(0,v.Z)("img",{className:D.img,elementType:w,externalForwardedProps:{slots:p,slotProps:{img:(0,o.Z)({},g,m.img)}},additionalProps:{alt:u,src:k,srcSet:P,sizes:C},ownerState:Z});return M=W?(0,f.jsx)(E,(0,o.Z)({},T)):s||0===s?s:A&&u?u[0]:(0,f.jsx)(b,{ownerState:Z,className:D.fallback}),(0,f.jsx)(x,(0,o.Z)({as:d,ownerState:Z,className:(0,a.Z)(D.root,c),ref:e},R,{children:M}))})},24636:function(t,e,n){n.d(e,{t:function(){return r}});let r=new Set(["opacity","clipPath","filter","transform"])},80594:function(t,e,n){n.d(e,{M:function(){return r}});let r="data-"+(0,n(37801).D)("framerAppearId")},98001:function(t,e,n){n.d(e,{H:function(){return r}});function r(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}},13641:function(t,e,n){n.d(e,{C:function(){return r}});let r=t=>Array.isArray(t)},49960:function(t,e,n){n.d(e,{p:function(){return r}});let r=(0,n(3479).createContext)({})},28257:function(t,e,n){n.d(e,{u:function(){return r}});let r=(0,n(3479).createContext)({strict:!1})},83265:function(t,e,n){n.d(e,{O:function(){return r}});let r=(0,n(3479).createContext)(null)},81455:function(t,e,n){n.d(e,{g:function(){return r}});let r=(0,n(3479).createContext)({})},40907:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(35350);let o=["read","resolveKeyframes","update","preRender","render","postRender"];function i(t,e){let n=!1,i=!0,a={delta:0,timestamp:0,isProcessing:!1},u=()=>n=!0,s=o.reduce((t,e)=>(t[e]=function(t){let e=new Set,n=new Set,r=!1,o=!1,i=new WeakSet,a={delta:0,timestamp:0,isProcessing:!1};function u(e){i.has(e)&&(s.schedule(e),t()),e(a)}let s={schedule:(t,o=!1,a=!1)=>{let u=a&&r?e:n;return o&&i.add(t),u.has(t)||u.add(t),t},cancel:t=>{n.delete(t),i.delete(t)},process:t=>{if(a=t,r){o=!0;return}r=!0,[e,n]=[n,e],n.clear(),e.forEach(u),r=!1,o&&(o=!1,s.process(t))}};return s}(u),t),{}),{read:l,resolveKeyframes:c,update:f,preRender:d,render:p,postRender:m}=s,g=()=>{let o=r.c.useManualTiming?a.timestamp:performance.now();n=!1,a.delta=i?1e3/60:Math.max(Math.min(o-a.timestamp,40),1),a.timestamp=o,a.isProcessing=!0,l.process(a),c.process(a),f.process(a),d.process(a),p.process(a),m.process(a),a.isProcessing=!1,n&&e&&(i=!1,t(g))},v=()=>{n=!0,i=!0,a.isProcessing||t(g)};return{schedule:o.reduce((t,e)=>{let r=s[e];return t[e]=(t,e=!1,o=!1)=>(n||v(),r.schedule(t,e,o)),t},{}),cancel:t=>{for(let e=0;e<o.length;e++)s[o[e]].cancel(t)},state:a,steps:s}}},32300:function(t,e,n){n.d(e,{Pn:function(){return i},S6:function(){return u},Wi:function(){return o},frameData:function(){return a}});var r=n(34751);let{schedule:o,cancel:i,state:a,steps:u}=(0,n(40907).Z)("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:r.Z,!0)},5666:function(t,e,n){n.d(e,{g:function(){return r}});let{schedule:r,cancel:o}=(0,n(40907).Z)(queueMicrotask,!1)},28078:function(t,e,n){n.d(e,{featureDefinitions:function(){return o}});let r={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},o={};for(let t in r)o[t]={isEnabled:e=>r[t].some(t=>!!e[t])}},79247:function(t,e,n){n.d(e,{K:function(){return o}});var r=n(28078);function o(t){for(let e in t)r.featureDefinitions[e]={...r.featureDefinitions[e],...t[e]}}},12707:function(t,e,n){n.d(e,{j:function(){return i}});var r=n(53709),o=n(32772);function i(t,{layout:e,layoutId:n}){return o.G.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!r.P[t]||"opacity"===t)}},53709:function(t,e,n){n.d(e,{B:function(){return o},P:function(){return r}});let r={};function o(t){Object.assign(r,t)}},12638:function(t,e,n){n.d(e,{m:function(){return G}});var r,o=n(32511),i=n(3479);let a=(0,i.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),u=(0,i.createContext)({});var s=n(83265),l=n(59120),c=n(28257),f=n(80594),d=n(5666),p=n(12652),m=n(81455);let g=!1;function v(){window.MotionHandoffIsComplete=!0}var h=n(37644),y=n(72542);function x(t){return Array.isArray(t)?t.join(" "):t}var w=n(79247),b=n(23349),C=n(49960);let k=Symbol.for("motionComponentSymbol");var P=n(28078),S=n(38137),R=n(58760),M=n(14235),j=n(98001),A=n(32538),W=n(35732),Z=n(87741),D=n(49346),E=n(80841);let T=t=>(e,n)=>{let r=(0,i.useContext)(u),o=(0,i.useContext)(s.O),a=()=>(function({applyWillChange:t=!1,scrapeMotionValuesFromProps:e,createRenderState:n,onMount:r},o,i,a,u){let s={latestValues:function(t,e,n,r,o){var i;let a={},u=[],s=r&&(null===(i=t.style)||void 0===i?void 0:i.willChange)===void 0,l=o(t,{});for(let t in l)a[t]=(0,Z.b)(l[t]);let{initial:c,animate:f}=t,d=(0,y.G)(t),p=(0,y.M)(t);e&&p&&!d&&!1!==t.inherit&&(void 0===c&&(c=e.initial),void 0===f&&(f=e.animate));let m=!!n&&!1===n.initial,g=(m=m||!1===c)?f:c;return g&&"boolean"!=typeof g&&!(0,j.H)(g)&&L(t,g,(t,e)=>{for(let e in t){let n=t[e];if(Array.isArray(n)){let t=m?n.length-1:0;n=n[t]}null!==n&&(a[e]=n)}for(let t in e)a[t]=e[t]}),s&&(f&&!1!==c&&!(0,j.H)(f)&&L(t,f,t=>{for(let e in t)!function(t,e){let n=(0,D.p)(e);n&&(0,E.y4)(t,n)}(u,e)}),u.length&&(a.willChange=u.join(","))),a}(o,i,a,!u&&t,e),renderState:n()};return r&&(s.mount=t=>r(o,t,s)),s})(t,e,r,o,n);return n?a():(0,W.h)(a)};function L(t,e,n){let r=Array.isArray(e)?e:[e];for(let e=0;e<r.length;e++){let o=(0,A.o)(t,r[e]);if(o){let{transitionEnd:t,transition:e,...r}=o;n(r,t)}}}let O=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),F=()=>({...O(),attrs:{}});var V=n(4062),$=n(49079),I=n(32300);let H={useVisualState:T({scrapeMotionValuesFromProps:M.U,createRenderState:F,onMount:(t,e,{renderState:n,latestValues:r})=>{I.Wi.read(()=>{try{n.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(t){n.dimensions={x:0,y:0,width:0,height:0}}}),I.Wi.render(()=>{(0,V.i)(n,r,(0,$.a)(e.tagName),t.transformTemplate),(0,R.K)(e,n)})}})},B={useVisualState:T({applyWillChange:!0,scrapeMotionValuesFromProps:n(432).U,createRenderState:O})};var q=n(12707),Y=n(30650),N=n(37750);function X(t,e,n){for(let r in e)(0,Y.i)(e[r])||(0,q.j)(r,n)||(t[r]=e[r])}let z=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||z.has(t)}let U=t=>!_(t);try{(r=require("@emotion/is-prop-valid").default)&&(U=t=>t.startsWith("on")?!_(t):r(t))}catch(t){}let G=function(t){if("undefined"==typeof Proxy)return t;let e=new Map;return new Proxy((...e)=>t(...e),{get:(n,r)=>"create"===r?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}(function(t,{forwardMotionProps:e}={forwardMotionProps:!1}){return function(t){let{preloadedFeatures:e,createVisualElement:n,useRender:r,useVisualState:S,Component:R}=t;e&&(0,w.K)(e);let M=(0,i.forwardRef)(function(t,e){var w;let k;let M={...(0,i.useContext)(a),...t,layoutId:function(t){let{layoutId:e}=t,n=(0,i.useContext)(C.p).id;return n&&void 0!==e?n+"-"+e:e}(t)},{isStatic:j}=M,A=function(t){let{initial:e,animate:n}=function(t,e){if((0,y.G)(t)){let{initial:e,animate:n}=t;return{initial:!1===e||(0,h.$)(e)?e:void 0,animate:(0,h.$)(n)?n:void 0}}return!1!==t.inherit?e:{}}(t,(0,i.useContext)(u));return(0,i.useMemo)(()=>({initial:e,animate:n}),[x(e),x(n)])}(t),W=S(t,j);if(!j&&b.j){(0,i.useContext)(c.u).strict;let t=function(t){let{drag:e,layout:n}=P.featureDefinitions;if(!e&&!n)return{};let r={...e,...n};return{MeasureLayout:(null==e?void 0:e.isEnabled(t))||(null==n?void 0:n.isEnabled(t))?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(M);k=t.MeasureLayout,A.visualElement=function(t,e,n,r,o){var h;let{visualElement:y}=(0,i.useContext)(u),x=(0,i.useContext)(c.u),w=(0,i.useContext)(s.O),b=(0,i.useContext)(a).reducedMotion,C=(0,i.useRef)();r=r||x.renderer,!C.current&&r&&(C.current=r(t,{visualState:e,parent:y,props:n,presenceContext:w,blockInitialAnimation:!!w&&!1===w.initial,reducedMotionConfig:b}));let k=C.current,P=(0,i.useContext)(m.g);k&&!k.projection&&o&&("html"===k.type||"svg"===k.type)&&function(t,e,n,r){let{layoutId:o,layout:i,drag:a,dragConstraints:u,layoutScroll:s,layoutRoot:l}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:function t(e){if(e)return!1!==e.options.allowProjection?e.projection:t(e.parent)}(t.parent)),t.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:!!a||u&&(0,p.I)(u),visualElement:t,animationType:"string"==typeof i?i:"both",initialPromotionConfig:r,layoutScroll:s,layoutRoot:l})}(C.current,n,o,P),(0,i.useInsertionEffect)(()=>{k&&k.update(n,w)});let S=n[f.M],R=(0,i.useRef)(!!S&&!window.MotionHandoffIsComplete&&(null===(h=window.MotionHasOptimisedAnimation)||void 0===h?void 0:h.call(window,S)));return(0,l.L)(()=>{k&&(k.updateFeatures(),d.g.render(k.render),R.current&&k.animationState&&k.animationState.animateChanges())}),(0,i.useEffect)(()=>{k&&(!R.current&&k.animationState&&k.animationState.animateChanges(),R.current=!1,g||(g=!0,queueMicrotask(v)))}),k}(R,W,M,n,t.ProjectionNode)}return(0,o.jsxs)(u.Provider,{value:A,children:[k&&A.visualElement?(0,o.jsx)(k,{visualElement:A.visualElement,...M}):null,r(R,t,(w=A.visualElement,(0,i.useCallback)(t=>{t&&W.mount&&W.mount(t),w&&(t?w.mount(t):w.unmount()),e&&("function"==typeof e?e(t):(0,p.I)(e)&&(e.current=t))},[w])),W,j,A.visualElement)]})});return M[k]=R,M}({...(0,S.q)(t)?H:B,preloadedFeatures:void 0,useRender:function(t=!1){return(e,n,r,{latestValues:o},a)=>{let u=((0,S.q)(e)?function(t,e,n,r){let o=(0,i.useMemo)(()=>{let n=F();return(0,V.i)(n,e,(0,$.a)(r),t.transformTemplate),{...n.attrs,style:{...n.style}}},[e]);if(t.style){let e={};X(e,t.style,t),o.style={...e,...o.style}}return o}:function(t,e){let n={},r=function(t,e){let n=t.style||{},r={};return X(r,n,t),Object.assign(r,function({transformTemplate:t},e){return(0,i.useMemo)(()=>{let n=O();return(0,N.r)(n,e,t),Object.assign({},n.vars,n.style)},[e])}(t,e)),r}(t,e);return t.drag&&!1!==t.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===t.drag?"none":`pan-${"x"===t.drag?"y":"x"}`),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n})(n,o,a,e),s=function(t,e,n){let r={};for(let o in t)("values"!==o||"object"!=typeof t.values)&&(U(o)||!0===n&&_(o)||!e&&!_(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}(n,"string"==typeof e,t),l=e!==i.Fragment?{...s,...u,ref:r}:{},{children:c}=n,f=(0,i.useMemo)(()=>(0,Y.i)(c)?c.get():c,[c]);return(0,i.createElement)(e,{...l,children:f})}}(e),createVisualElement:void 0,Component:t})})},37801:function(t,e,n){n.d(e,{D:function(){return r}});let r=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase()},55364:function(t,e,n){n.d(e,{f:function(){return o},t:function(){return a}});let r=t=>e=>"string"==typeof e&&e.startsWith(t),o=r("--"),i=r("var(--"),a=t=>!!i(t)&&u.test(t.split("/*")[0].trim()),u=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu},38137:function(t,e,n){n.d(e,{q:function(){return o}});let r=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function o(t){if("string"!=typeof t||t.includes("-"));else if(r.indexOf(t)>-1||/[A-Z]/u.test(t))return!0;return!1}},2375:function(t,e,n){n.d(e,{j:function(){return a}});var r=n(38180),o=n(96031);let i={...r.Rx,transform:Math.round},a={borderWidth:o.px,borderTopWidth:o.px,borderRightWidth:o.px,borderBottomWidth:o.px,borderLeftWidth:o.px,borderRadius:o.px,radius:o.px,borderTopLeftRadius:o.px,borderTopRightRadius:o.px,borderBottomRightRadius:o.px,borderBottomLeftRadius:o.px,width:o.px,maxWidth:o.px,height:o.px,maxHeight:o.px,size:o.px,top:o.px,right:o.px,bottom:o.px,left:o.px,padding:o.px,paddingTop:o.px,paddingRight:o.px,paddingBottom:o.px,paddingLeft:o.px,margin:o.px,marginTop:o.px,marginRight:o.px,marginBottom:o.px,marginLeft:o.px,rotate:o.RW,rotateX:o.RW,rotateY:o.RW,rotateZ:o.RW,scale:r.bA,scaleX:r.bA,scaleY:r.bA,scaleZ:r.bA,skew:o.RW,skewX:o.RW,skewY:o.RW,distance:o.px,translateX:o.px,translateY:o.px,translateZ:o.px,x:o.px,y:o.px,z:o.px,perspective:o.px,transformPerspective:o.px,opacity:r.Fq,originX:o.$C,originY:o.$C,originZ:o.px,zIndex:i,backgroundPositionX:o.px,backgroundPositionY:o.px,fillOpacity:r.Fq,strokeOpacity:r.Fq,numOctaves:i}},37750:function(t,e,n){n.d(e,{r:function(){return l}});var r=n(32772);let o=(t,e)=>e&&"number"==typeof t?e.transform(t):t;var i=n(2375);let a={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},u=r._.length;var s=n(55364);function l(t,e,n){let{style:l,vars:c,transformOrigin:f}=t,d=!1,p=!1;for(let t in e){let n=e[t];if(r.G.has(t)){d=!0;continue}if((0,s.f)(t)){c[t]=n;continue}{let e=o(n,i.j[t]);t.startsWith("origin")?(p=!0,f[t]=e):l[t]=e}}if(!e.transform&&(d||n?l.transform=function(t,e,n){let s="",l=!0;for(let c=0;c<u;c++){let u=r._[c],f=t[u];if(void 0===f)continue;let d=!0;if(!(d="number"==typeof f?f===(u.startsWith("scale")?1:0):0===parseFloat(f))||n){let t=o(f,i.j[u]);if(!d){l=!1;let e=a[u]||u;s+=`${e}(${t}) `}n&&(e[u]=t)}}return s=s.trim(),n?s=n(e,l?"":s):l&&(s="none"),s}(e,t.transform,n):l.transform&&(l.transform="none")),p){let{originX:t="50%",originY:e="50%",originZ:n=0}=f;l.transformOrigin=`${t} ${e} ${n}`}}},60463:function(t,e,n){n.d(e,{N:function(){return r}});function r(t,{style:e,vars:n},r,o){for(let i in Object.assign(t.style,e,o&&o.getProjectionStyles(r)),n)t.style.setProperty(i,n[i])}},432:function(t,e,n){n.d(e,{U:function(){return i}});var r=n(12707),o=n(30650);function i(t,e,n){var i;let{style:a}=t,u={};for(let s in a)((0,o.i)(a[s])||e.style&&(0,o.i)(e.style[s])||(0,r.j)(s,t)||(null===(i=null==n?void 0:n.getValue(s))||void 0===i?void 0:i.liveStyle)!==void 0)&&(u[s]=a[s]);return n&&a&&"string"==typeof a.willChange&&(n.applyWillChange=!1),u}},32772:function(t,e,n){n.d(e,{G:function(){return o},_:function(){return r}});let r=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],o=new Set(r)},4062:function(t,e,n){n.d(e,{i:function(){return s}});var r=n(37750),o=n(96031);function i(t,e,n){return"string"==typeof t?t:o.px.transform(e+n*t)}let a={offset:"stroke-dashoffset",array:"stroke-dasharray"},u={offset:"strokeDashoffset",array:"strokeDasharray"};function s(t,{attrX:e,attrY:n,attrScale:s,originX:l,originY:c,pathLength:f,pathSpacing:d=1,pathOffset:p=0,...m},g,v){if((0,r.r)(t,m,v),g){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:h,style:y,dimensions:x}=t;h.transform&&(x&&(y.transform=h.transform),delete h.transform),x&&(void 0!==l||void 0!==c||y.transform)&&(y.transformOrigin=function(t,e,n){let r=i(e,t.x,t.width),o=i(n,t.y,t.height);return`${r} ${o}`}(x,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==e&&(h.x=e),void 0!==n&&(h.y=n),void 0!==s&&(h.scale=s),void 0!==f&&function(t,e,n=1,r=0,i=!0){t.pathLength=1;let s=i?a:u;t[s.offset]=o.px.transform(-r);let l=o.px.transform(e),c=o.px.transform(n);t[s.array]=`${l} ${c}`}(h,f,d,p,!1)}},19238:function(t,e,n){n.d(e,{s:function(){return r}});let r=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"])},49079:function(t,e,n){n.d(e,{a:function(){return r}});let r=t=>"string"==typeof t&&"svg"===t.toLowerCase()},58760:function(t,e,n){n.d(e,{K:function(){return a}});var r=n(37801),o=n(60463),i=n(19238);function a(t,e,n,a){for(let n in(0,o.N)(t,e,void 0,a),e.attrs)t.setAttribute(i.s.has(n)?n:(0,r.D)(n),e.attrs[n])}},14235:function(t,e,n){n.d(e,{U:function(){return a}});var r=n(30650),o=n(432),i=n(32772);function a(t,e,n){let a=(0,o.U)(t,e,n);for(let n in t)((0,r.i)(t[n])||(0,r.i)(e[n]))&&(a[-1!==i._.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n]=t[n]);return a}},72542:function(t,e,n){n.d(e,{G:function(){return a},M:function(){return u}});var r=n(98001),o=n(37644),i=n(79282);function a(t){return(0,r.H)(t.animate)||i.V.some(e=>(0,o.$)(t[e]))}function u(t){return!!(a(t)||t.variants)}},37644:function(t,e,n){n.d(e,{$:function(){return r}});function r(t){return"string"==typeof t||Array.isArray(t)}},32538:function(t,e,n){function r(t){let e=[{},{}];return null==t||t.values.forEach((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()}),e}function o(t,e,n,o){if("function"==typeof e){let[i,a]=r(o);e=e(void 0!==n?n:t.custom,i,a)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){let[i,a]=r(o);e=e(void 0!==n?n:t.custom,i,a)}return e}n.d(e,{o:function(){return o}})},79282:function(t,e,n){n.d(e,{V:function(){return o},e:function(){return r}});let r=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],o=["initial",...r]},35350:function(t,e,n){n.d(e,{c:function(){return r}});let r={skipAnimations:!1,useManualTiming:!1}},80841:function(t,e,n){function r(t,e){-1===t.indexOf(e)&&t.push(e)}function o(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}n.d(e,{cl:function(){return o},y4:function(){return r}})},10906:function(t,e,n){n.d(e,{u:function(){return r}});let r=(t,e,n)=>n>e?e:n<t?t:n},23349:function(t,e,n){n.d(e,{j:function(){return r}});let r="undefined"!=typeof window},12652:function(t,e,n){n.d(e,{I:function(){return r}});function r(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}},34751:function(t,e,n){n.d(e,{Z:function(){return r}});let r=t=>t},73001:function(t,e,n){n.d(e,{Y:function(){return i},p:function(){return o}});var r=n(13641);let o=t=>!!(t&&"object"==typeof t&&t.mix&&t.toValue),i=t=>(0,r.C)(t)?t[t.length-1]||0:t},35732:function(t,e,n){n.d(e,{h:function(){return o}});var r=n(3479);function o(t){let e=(0,r.useRef)(null);return null===e.current&&(e.current=t()),e.current}},59120:function(t,e,n){n.d(e,{L:function(){return o}});var r=n(3479);let o=n(23349).j?r.useLayoutEffect:r.useEffect},38180:function(t,e,n){n.d(e,{Fq:function(){return i},Rx:function(){return o},bA:function(){return a}});var r=n(10906);let o={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},i={...o,transform:t=>(0,r.u)(0,1,t)},a={...o,default:1}},96031:function(t,e,n){n.d(e,{$C:function(){return c},RW:function(){return i},aQ:function(){return a},px:function(){return u},vh:function(){return s},vw:function(){return l}});var r=n(7807);let o=t=>({test:e=>(0,r.HD)(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),i=o("deg"),a=o("%"),u=o("px"),s=o("vh"),l=o("vw"),c={...a,parse:t=>a.parse(t)/100,transform:t=>a.transform(100*t)}},7807:function(t,e,n){n.d(e,{HD:function(){return u},KP:function(){return o},Nw:function(){return r},Rw:function(){return s},dA:function(){return i},mj:function(){return a}});let r=t=>Math.round(1e5*t)/1e5,o=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,i=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,a=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function u(t){return"string"==typeof t}function s(t){return null==t}},49346:function(t,e,n){n.d(e,{p:function(){return a}});var r=n(24636),o=n(37801),i=n(32772);function a(t){return i.G.has(t)?"transform":r.t.has(t)?(0,o.D)(t):void 0}},30650:function(t,e,n){n.d(e,{i:function(){return r}});let r=t=>!!(t&&t.getVelocity)},87741:function(t,e,n){n.d(e,{b:function(){return i}});var r=n(73001),o=n(30650);function i(t){let e=(0,o.i)(t)?t.get():t;return(0,r.p)(e)?e.toValue():e}}}]);