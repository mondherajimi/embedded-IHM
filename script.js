/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
"document"in self&&!("classList"in document.createElement("_"))&&function(e){"use strict";if("Element"in e){var t="classList",n="prototype",r=e.Element[n],a=Object,i=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},s=Array[n].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1},l=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},o=function(e,t){if(""===t)throw new l("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new l("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(e,t)},c=function(e){for(var t=i.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):[],r=0,a=n.length;a>r;r++)this.push(n[r]);this._updateClassName=function(){e.setAttribute("class",""+this)}},u=c[n]=[],d=function(){return new c(this)};if(l[n]=Error[n],u.item=function(e){return this[e]||null},u.contains=function(e){return e+="",-1!==o(this,e)},u.add=function(){var e,t=arguments,n=0,r=t.length,a=!1;do e=t[n]+"",-1===o(this,e)&&(this.push(e),a=!0);while(r>++n);a&&this._updateClassName()},u.remove=function(){var e,t=arguments,n=0,r=t.length,a=!1;do{e=t[n]+"";var i=o(this,e);-1!==i&&(this.splice(i,1),a=!0)}while(r>++n);a&&this._updateClassName()},u.toggle=function(e,t){e+="";var n=this.contains(e),r=n?t!==!0&&"remove":t!==!1&&"add";return r&&this[r](e),!n},u.toString=function(){return this.join(" ")},a.defineProperty){var g={get:d,enumerable:!0,configurable:!0};try{a.defineProperty(r,t,g)}catch(h){-2146823252===h.number&&(g.enumerable=!1,a.defineProperty(r,t,g))}}else a[n].__defineGetter__&&r.__defineGetter__(t,d)}}(self),/*!
 * Bootstrap without jQuery v0.6.1 for Bootstrap 3
 * By Daniel Davis under MIT License
 * https://github.com/tagawa/bootstrap-without-jquery
 */
function(){"use strict";function e(){var e,t=document.createElement("div"),n={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(n.hasOwnProperty(e)&&void 0!==t.style[e])return n[e];return!1}function t(e){var t={};e=e||window.event,t.evTarget=e.currentTarget||e.srcElement;var n=t.evTarget.getAttribute("data-target");return t.dataTarget=n?document.querySelector(n):!1,t}function n(e){var t=e.style.height;e.style.height="auto";var n=getComputedStyle(e).height;return e.style.height=t,e.offsetHeight,n}function r(e,t){if(document.createEvent){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!1),e.dispatchEvent(n)}else e.fireEvent("on"+t)}function a(e,t){e.classList.remove("collapse"),e.classList.add("collapsing"),t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0),e.style.height=n(e),d?e.addEventListener(d,function(){s(e)},!1):s(e)}function i(e,t){e.classList.remove("collapse"),e.classList.remove("in"),e.classList.add("collapsing"),t.classList.add("collapsed"),t.setAttribute("aria-expanded",!1),e.style.height=getComputedStyle(e).height,e.offsetHeight,e.style.height="0px"}function s(e){e.classList.remove("collapsing"),e.classList.add("collapse"),e.setAttribute("aria-expanded",!1),"0px"!==e.style.height&&(e.classList.add("in"),e.style.height="auto")}function l(e){e.preventDefault();var n=t(e),r=n.dataTarget;return r.classList.contains("in")?i(r,n.evTarget):a(r,n.evTarget),!1}function o(e){function n(){try{i.parentNode.removeChild(i),r(i,"closed.bs.alert")}catch(e){window.console.error("Unable to remove alert")}}e.preventDefault();var a=t(e),i=a.dataTarget;if(!i){var s=a.evTarget.parentNode;s.classList.contains("alert")?i=s:s.parentNode.classList.contains("alert")&&(i=s.parentNode)}return r(i,"close.bs.alert"),i.classList.remove("in"),d&&i.classList.contains("fade")?i.addEventListener(d,function(){n()},!1):n(),!1}function c(e){e=e||window.event;var t=e.currentTarget||e.srcElement;return t.parentElement.classList.toggle("open"),!1}function u(e){e=e||window.event;var t=e.currentTarget||e.srcElement;return t.parentElement.classList.remove("open"),e.relatedTarget&&"dropdown"!==e.relatedTarget.getAttribute("data-toggle")&&e.relatedTarget.click(),!1}for(var d=e(),g=document.querySelectorAll("[data-toggle=collapse]"),h=0,f=g.length;f>h;h++)g[h].onclick=l;for(var m=document.querySelectorAll("[data-dismiss=alert]"),v=0,p=m.length;p>v;v++)m[v].onclick=o;for(var y,E=document.querySelectorAll("[data-toggle=dropdown]"),w=0,b=E.length;b>w;w++)y=E[w],y.setAttribute("tabindex","0"),y.onclick=c,y.onblur=u}();/**
 * React v0.13.1
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t){"use strict";var n=e(19),r=e(32),o=e(34),i=e(33),a=e(38),u=e(39),s=e(55),l=(e(56),e(40)),c=e(51),p=e(54),d=e(64),f=e(68),h=e(73),m=e(76),v=e(79),g=e(82),y=e(27),C=e(115),E=e(142);p.inject();var b=s.createElement,_=s.createFactory,x=s.cloneElement,D=h.measure("React","render",f.render),M={Children:{map:r.map,forEach:r.forEach,count:r.count,only:E},Component:o,DOM:l,PropTypes:m,initializeTouchEvents:function(e){n.useTouchEvents=e},createClass:i.createClass,createElement:b,cloneElement:x,createFactory:_,createMixin:function(e){return e},constructAndRenderComponent:f.constructAndRenderComponent,constructAndRenderComponentByID:f.constructAndRenderComponentByID,findDOMNode:C,render:D,renderToString:g.renderToString,renderToStaticMarkup:g.renderToStaticMarkup,unmountComponentAtNode:f.unmountComponentAtNode,isValidElement:s.isValidElement,withContext:a.withContext,__spread:y};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:u,InstanceHandles:d,Mount:f,Reconciler:v,TextComponent:c});M.version="0.13.1",t.exports=M},{115:115,142:142,19:19,27:27,32:32,33:33,34:34,38:38,39:39,40:40,51:51,54:54,55:55,56:56,64:64,68:68,73:73,76:76,79:79,82:82}],2:[function(e,t){"use strict";var n=e(117),r={componentDidMount:function(){this.props.autoFocus&&n(this.getDOMNode())}};t.exports=r},{117:117}],3:[function(e,t){"use strict";function n(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function r(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function o(e){switch(e){case I.topCompositionStart:return T.compositionStart;case I.topCompositionEnd:return T.compositionEnd;case I.topCompositionUpdate:return T.compositionUpdate}}function i(e,t){return e===I.topKeyDown&&t.keyCode===E}function a(e,t){switch(e){case I.topKeyUp:return-1!==C.indexOf(t.keyCode);case I.topKeyDown:return t.keyCode!==E;case I.topKeyPress:case I.topMouseDown:case I.topBlur:return!0;default:return!1}}function u(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function s(e,t,n,r){var s,l;if(b?s=o(e):P?a(e,r)&&(s=T.compositionEnd):i(e,r)&&(s=T.compositionStart),!s)return null;D&&(P||s!==T.compositionStart?s===T.compositionEnd&&P&&(l=P.getData()):P=m.getPooled(t));var c=v.getPooled(s,n,r);if(l)c.data=l;else{var p=u(r);null!==p&&(c.data=p)}return f.accumulateTwoPhaseDispatches(c),c}function l(e,t){switch(e){case I.topCompositionEnd:return u(t);case I.topKeyPress:var n=t.which;return n!==M?null:(R=!0,N);case I.topTextInput:var r=t.data;return r===N&&R?null:r;default:return null}}function c(e,t){if(P){if(e===I.topCompositionEnd||a(e,t)){var n=P.getData();return m.release(P),P=null,n}return null}switch(e){case I.topPaste:return null;case I.topKeyPress:return t.which&&!r(t)?String.fromCharCode(t.which):null;case I.topCompositionEnd:return D?null:t.data;default:return null}}function p(e,t,n,r){var o;if(o=x?l(e,r):c(e,r),!o)return null;var i=g.getPooled(T.beforeInput,n,r);return i.data=o,f.accumulateTwoPhaseDispatches(i),i}var d=e(15),f=e(20),h=e(21),m=e(22),v=e(91),g=e(95),y=e(139),C=[9,13,27,32],E=229,b=h.canUseDOM&&"CompositionEvent"in window,_=null;h.canUseDOM&&"documentMode"in document&&(_=document.documentMode);var x=h.canUseDOM&&"TextEvent"in window&&!_&&!n(),D=h.canUseDOM&&(!b||_&&_>8&&11>=_),M=32,N=String.fromCharCode(M),I=d.topLevelTypes,T={beforeInput:{phasedRegistrationNames:{bubbled:y({onBeforeInput:null}),captured:y({onBeforeInputCapture:null})},dependencies:[I.topCompositionEnd,I.topKeyPress,I.topTextInput,I.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:y({onCompositionEnd:null}),captured:y({onCompositionEndCapture:null})},dependencies:[I.topBlur,I.topCompositionEnd,I.topKeyDown,I.topKeyPress,I.topKeyUp,I.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:y({onCompositionStart:null}),captured:y({onCompositionStartCapture:null})},dependencies:[I.topBlur,I.topCompositionStart,I.topKeyDown,I.topKeyPress,I.topKeyUp,I.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:y({onCompositionUpdate:null}),captured:y({onCompositionUpdateCapture:null})},dependencies:[I.topBlur,I.topCompositionUpdate,I.topKeyDown,I.topKeyPress,I.topKeyUp,I.topMouseDown]}},R=!1,P=null,w={eventTypes:T,extractEvents:function(e,t,n,r){return[s(e,t,n,r),p(e,t,n,r)]}};t.exports=w},{139:139,15:15,20:20,21:21,22:22,91:91,95:95}],4:[function(e,t){"use strict";function n(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var r={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeOpacity:!0},o=["Webkit","ms","Moz","O"];Object.keys(r).forEach(function(e){o.forEach(function(t){r[n(t,e)]=r[e]})});var i={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},a={isUnitlessNumber:r,shorthandPropertyExpansions:i};t.exports=a},{}],5:[function(e,t){"use strict";var n=e(4),r=e(21),o=(e(106),e(111)),i=e(131),a=e(141),u=(e(150),a(function(e){return i(e)})),s="cssFloat";r.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(s="styleFloat");var l={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=u(n)+":",t+=o(n,r)+";")}return t||null},setValueForStyles:function(e,t){var r=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=o(i,t[i]);if("float"===i&&(i=s),a)r[i]=a;else{var u=n.shorthandPropertyExpansions[i];if(u)for(var l in u)r[l]="";else r[i]=""}}}};t.exports=l},{106:106,111:111,131:131,141:141,150:150,21:21,4:4}],6:[function(e,t){"use strict";function n(){this._callbacks=null,this._contexts=null}var r=e(28),o=e(27),i=e(133);o(n.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){i(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{133:133,27:27,28:28}],7:[function(e,t){"use strict";function n(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function r(e){var t=_.getPooled(I.change,R,e);C.accumulateTwoPhaseDispatches(t),b.batchedUpdates(o,t)}function o(e){y.enqueueEvents(e),y.processEventQueue()}function i(e,t){T=e,R=t,T.attachEvent("onchange",r)}function a(){T&&(T.detachEvent("onchange",r),T=null,R=null)}function u(e,t,n){return e===N.topChange?n:void 0}function s(e,t,n){e===N.topFocus?(a(),i(t,n)):e===N.topBlur&&a()}function l(e,t){T=e,R=t,P=e.value,w=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(T,"value",A),T.attachEvent("onpropertychange",p)}function c(){T&&(delete T.value,T.detachEvent("onpropertychange",p),T=null,R=null,P=null,w=null)}function p(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==P&&(P=t,r(e))}}function d(e,t,n){return e===N.topInput?n:void 0}function f(e,t,n){e===N.topFocus?(c(),l(t,n)):e===N.topBlur&&c()}function h(e){return e!==N.topSelectionChange&&e!==N.topKeyUp&&e!==N.topKeyDown||!T||T.value===P?void 0:(P=T.value,R)}function m(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function v(e,t,n){return e===N.topClick?n:void 0}var g=e(15),y=e(17),C=e(20),E=e(21),b=e(85),_=e(93),x=e(134),D=e(136),M=e(139),N=g.topLevelTypes,I={change:{phasedRegistrationNames:{bubbled:M({onChange:null}),captured:M({onChangeCapture:null})},dependencies:[N.topBlur,N.topChange,N.topClick,N.topFocus,N.topInput,N.topKeyDown,N.topKeyUp,N.topSelectionChange]}},T=null,R=null,P=null,w=null,O=!1;E.canUseDOM&&(O=x("change")&&(!("documentMode"in document)||document.documentMode>8));var S=!1;E.canUseDOM&&(S=x("input")&&(!("documentMode"in document)||document.documentMode>9));var A={get:function(){return w.get.call(this)},set:function(e){P=""+e,w.set.call(this,e)}},k={eventTypes:I,extractEvents:function(e,t,r,o){var i,a;if(n(t)?O?i=u:a=s:D(t)?S?i=d:(i=h,a=f):m(t)&&(i=v),i){var l=i(e,t,r);if(l){var c=_.getPooled(I.change,l,o);return C.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,r)}};t.exports=k},{134:134,136:136,139:139,15:15,17:17,20:20,21:21,85:85,93:93}],8:[function(e,t){"use strict";var n=0,r={createReactRootIndex:function(){return n++}};t.exports=r},{}],9:[function(e,t){"use strict";function n(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var r=e(12),o=e(70),i=e(145),a=e(133),u={dangerouslyReplaceNodeWithMarkup:r.dangerouslyReplaceNodeWithMarkup,updateTextContent:i,processUpdates:function(e,t){for(var u,s=null,l=null,c=0;c<e.length;c++)if(u=e[c],u.type===o.MOVE_EXISTING||u.type===o.REMOVE_NODE){var p=u.fromIndex,d=u.parentNode.childNodes[p],f=u.parentID;a(d),s=s||{},s[f]=s[f]||[],s[f][p]=d,l=l||[],l.push(d)}var h=r.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(u=e[v],u.type){case o.INSERT_MARKUP:n(u.parentNode,h[u.markupIndex],u.toIndex);break;case o.MOVE_EXISTING:n(u.parentNode,s[u.parentID][u.fromIndex],u.toIndex);break;case o.TEXT_CONTENT:i(u.parentNode,u.textContent);break;case o.REMOVE_NODE:}}};t.exports=u},{12:12,133:133,145:145,70:70}],10:[function(e,t){"use strict";function n(e,t){return(e&t)===t}var r=e(133),o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},i=e.DOMAttributeNames||{},u=e.DOMPropertyNames||{},s=e.DOMMutationMethods||{};e.isCustomAttribute&&a._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){r(!a.isStandardName.hasOwnProperty(l)),a.isStandardName[l]=!0;var c=l.toLowerCase();if(a.getPossibleStandardName[c]=l,i.hasOwnProperty(l)){var p=i[l];a.getPossibleStandardName[p]=l,a.getAttributeName[l]=p}else a.getAttributeName[l]=c;a.getPropertyName[l]=u.hasOwnProperty(l)?u[l]:l,a.getMutationMethod[l]=s.hasOwnProperty(l)?s[l]:null;var d=t[l];a.mustUseAttribute[l]=n(d,o.MUST_USE_ATTRIBUTE),a.mustUseProperty[l]=n(d,o.MUST_USE_PROPERTY),a.hasSideEffects[l]=n(d,o.HAS_SIDE_EFFECTS),a.hasBooleanValue[l]=n(d,o.HAS_BOOLEAN_VALUE),a.hasNumericValue[l]=n(d,o.HAS_NUMERIC_VALUE),a.hasPositiveNumericValue[l]=n(d,o.HAS_POSITIVE_NUMERIC_VALUE),a.hasOverloadedBooleanValue[l]=n(d,o.HAS_OVERLOADED_BOOLEAN_VALUE),r(!a.mustUseAttribute[l]||!a.mustUseProperty[l]),r(a.mustUseProperty[l]||!a.hasSideEffects[l]),r(!!a.hasBooleanValue[l]+!!a.hasNumericValue[l]+!!a.hasOverloadedBooleanValue[l]<=1)}}},i={},a={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<a._isCustomAttributeFunctions.length;t++){var n=a._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=i[e];return r||(i[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:o};t.exports=a},{133:133}],11:[function(e,t){"use strict";function n(e,t){return null==t||r.hasBooleanValue[e]&&!t||r.hasNumericValue[e]&&isNaN(t)||r.hasPositiveNumericValue[e]&&1>t||r.hasOverloadedBooleanValue[e]&&t===!1}var r=e(10),o=e(143),i=(e(150),{createMarkupForID:function(e){return r.ID_ATTRIBUTE_NAME+"="+o(e)},createMarkupForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(e)&&r.isStandardName[e]){if(n(e,t))return"";var i=r.getAttributeName[e];return r.hasBooleanValue[e]||r.hasOverloadedBooleanValue[e]&&t===!0?i:i+"="+o(t)}return r.isCustomAttribute(e)?null==t?"":e+"="+o(t):null},setValueForProperty:function(e,t,o){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var i=r.getMutationMethod[t];if(i)i(e,o);else if(n(t,o))this.deleteValueForProperty(e,t);else if(r.mustUseAttribute[t])e.setAttribute(r.getAttributeName[t],""+o);else{var a=r.getPropertyName[t];r.hasSideEffects[t]&&""+e[a]==""+o||(e[a]=o)}}else r.isCustomAttribute(t)&&(null==o?e.removeAttribute(t):e.setAttribute(t,""+o))},deleteValueForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var n=r.getMutationMethod[t];if(n)n(e,void 0);else if(r.mustUseAttribute[t])e.removeAttribute(r.getAttributeName[t]);else{var o=r.getPropertyName[t],i=r.getDefaultValueForProperty(e.nodeName,o);r.hasSideEffects[t]&&""+e[o]===i||(e[o]=i)}}else r.isCustomAttribute(t)&&e.removeAttribute(t)}});t.exports=i},{10:10,143:143,150:150}],12:[function(e,t){"use strict";function n(e){return e.substring(1,e.indexOf(" "))}var r=e(21),o=e(110),i=e(112),a=e(125),u=e(133),s=/^(<[^ \/>]+)/,l="data-danger-index",c={dangerouslyRenderMarkup:function(e){u(r.canUseDOM);for(var t,c={},p=0;p<e.length;p++)u(e[p]),t=n(e[p]),t=a(t)?t:"*",c[t]=c[t]||[],c[t][p]=e[p];var d=[],f=0;for(t in c)if(c.hasOwnProperty(t)){var h,m=c[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(s,"$1 "+l+'="'+h+'" ')}for(var g=o(m.join(""),i),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(l)&&(h=+C.getAttribute(l),C.removeAttribute(l),u(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return u(f===d.length),u(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){u(r.canUseDOM),u(t),u("html"!==e.tagName.toLowerCase());var n=o(t,i)[0];e.parentNode.replaceChild(n,e)}};t.exports=c},{110:110,112:112,125:125,133:133,21:21}],13:[function(e,t){"use strict";var n=e(139),r=[n({ResponderEventPlugin:null}),n({SimpleEventPlugin:null}),n({TapEventPlugin:null}),n({EnterLeaveEventPlugin:null}),n({ChangeEventPlugin:null}),n({SelectEventPlugin:null}),n({BeforeInputEventPlugin:null}),n({AnalyticsEventPlugin:null}),n({MobileSafariClickEventPlugin:null})];t.exports=r},{139:139}],14:[function(e,t){"use strict";var n=e(15),r=e(20),o=e(97),i=e(68),a=e(139),u=n.topLevelTypes,s=i.getFirstReactDOM,l={mouseEnter:{registrationName:a({onMouseEnter:null}),dependencies:[u.topMouseOut,u.topMouseOver]},mouseLeave:{registrationName:a({onMouseLeave:null}),dependencies:[u.topMouseOut,u.topMouseOver]}},c=[null,null],p={eventTypes:l,extractEvents:function(e,t,n,a){if(e===u.topMouseOver&&(a.relatedTarget||a.fromElement))return null;if(e!==u.topMouseOut&&e!==u.topMouseOver)return null;var p;if(t.window===t)p=t;else{var d=t.ownerDocument;p=d?d.defaultView||d.parentWindow:window}var f,h;if(e===u.topMouseOut?(f=t,h=s(a.relatedTarget||a.toElement)||p):(f=p,h=t),f===h)return null;var m=f?i.getID(f):"",v=h?i.getID(h):"",g=o.getPooled(l.mouseLeave,m,a);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=o.getPooled(l.mouseEnter,v,a);return y.type="mouseenter",y.target=h,y.relatedTarget=f,r.accumulateEnterLeaveDispatches(g,y,m,v),c[0]=g,c[1]=y,c}};t.exports=p},{139:139,15:15,20:20,68:68,97:97}],15:[function(e,t){"use strict";var n=e(138),r=n({bubbled:null,captured:null}),o=n({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),i={topLevelTypes:o,PropagationPhases:r};t.exports=i},{138:138}],16:[function(e,t){var n=e(112),r={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,r){return e.addEventListener?(e.addEventListener(t,r,!0),{remove:function(){e.removeEventListener(t,r,!0)}}):{remove:n}},registerDefault:function(){}};t.exports=r},{112:112}],17:[function(e,t){"use strict";var n=e(18),r=e(19),o=e(103),i=e(118),a=e(133),u={},s=null,l=function(e){if(e){var t=r.executeDispatch,o=n.getPluginModuleForEvent(e);o&&o.executeDispatch&&(t=o.executeDispatch),r.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},c=null,p={injection:{injectMount:r.injection.injectMount,injectInstanceHandle:function(e){c=e},getInstanceHandle:function(){return c},injectEventPluginOrder:n.injectEventPluginOrder,injectEventPluginsByName:n.injectEventPluginsByName},eventNameDispatchConfigs:n.eventNameDispatchConfigs,registrationNameModules:n.registrationNameModules,putListener:function(e,t,n){a(!n||"function"==typeof n);var r=u[t]||(u[t]={});r[e]=n},getListener:function(e,t){var n=u[t];return n&&n[e]},deleteListener:function(e,t){var n=u[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in u)delete u[t][e]},extractEvents:function(e,t,r,i){for(var a,u=n.plugins,s=0,l=u.length;l>s;s++){var c=u[s];if(c){var p=c.extractEvents(e,t,r,i);p&&(a=o(a,p))}}return a},enqueueEvents:function(e){e&&(s=o(s,e))},processEventQueue:function(){var e=s;s=null,i(e,l),a(!s)},__purge:function(){u={}},__getListenerBank:function(){return u}};t.exports=p},{103:103,118:118,133:133,18:18,19:19}],18:[function(e,t){"use strict";function n(){if(a)for(var e in u){var t=u[e],n=a.indexOf(e);if(i(n>-1),!s.plugins[n]){i(t.extractEvents),s.plugins[n]=t;var o=t.eventTypes;for(var l in o)i(r(o[l],t,l))}}}function r(e,t,n){i(!s.eventNameDispatchConfigs.hasOwnProperty(n)),s.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var a in r)if(r.hasOwnProperty(a)){var u=r[a];o(u,t,n)}return!0}return e.registrationName?(o(e.registrationName,t,n),!0):!1}function o(e,t,n){i(!s.registrationNameModules[e]),s.registrationNameModules[e]=t,s.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var i=e(133),a=null,u={},s={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){i(!a),a=Array.prototype.slice.call(e),n()},injectEventPluginsByName:function(e){var t=!1;for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];u.hasOwnProperty(r)&&u[r]===o||(i(!u[r]),u[r]=o,t=!0)}t&&n()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return s.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=s.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){a=null;for(var e in u)u.hasOwnProperty(e)&&delete u[e];s.plugins.length=0;var t=s.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=s.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=s},{133:133}],19:[function(e,t){"use strict";function n(e){return e===m.topMouseUp||e===m.topTouchEnd||e===m.topTouchCancel}function r(e){return e===m.topMouseMove||e===m.topTouchMove}function o(e){return e===m.topMouseDown||e===m.topTouchStart}function i(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function a(e,t,n){e.currentTarget=h.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function u(e,t){i(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function s(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function l(e){var t=s(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function c(e){var t=e._dispatchListeners,n=e._dispatchIDs;f(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function p(e){return!!e._dispatchListeners}var d=e(15),f=e(133),h={Mount:null,injectMount:function(e){h.Mount=e}},m=d.topLevelTypes,v={isEndish:n,isMoveish:r,isStartish:o,executeDirectDispatch:c,executeDispatch:a,executeDispatchesInOrder:u,executeDispatchesInOrderStopAtTrue:l,hasDispatches:p,injection:h,useTouchEvents:!1};t.exports=v},{133:133,15:15}],20:[function(e,t){"use strict";function n(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return m(e,r)}function r(e,t,r){var o=t?h.bubbled:h.captured,i=n(e,r,o);i&&(r._dispatchListeners=d(r._dispatchListeners,i),r._dispatchIDs=d(r._dispatchIDs,e))}function o(e){e&&e.dispatchConfig.phasedRegistrationNames&&p.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,r,e)}function i(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=m(e,r);o&&(n._dispatchListeners=d(n._dispatchListeners,o),n._dispatchIDs=d(n._dispatchIDs,e))}}function a(e){e&&e.dispatchConfig.registrationName&&i(e.dispatchMarker,null,e)}function u(e){f(e,o)}function s(e,t,n,r){p.injection.getInstanceHandle().traverseEnterLeave(n,r,i,e,t)}function l(e){f(e,a)}var c=e(15),p=e(17),d=e(103),f=e(118),h=c.PropagationPhases,m=p.getListener,v={accumulateTwoPhaseDispatches:u,accumulateDirectDispatches:l,accumulateEnterLeaveDispatches:s};t.exports=v},{103:103,118:118,15:15,17:17}],21:[function(e,t){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};t.exports=r},{}],22:[function(e,t){"use strict";function n(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var r=e(28),o=e(27),i=e(128);o(n.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[i()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),r.addPoolingTo(n),t.exports=n},{128:128,27:27,28:28}],23:[function(e,t){"use strict";var n,r=e(10),o=e(21),i=r.injection.MUST_USE_ATTRIBUTE,a=r.injection.MUST_USE_PROPERTY,u=r.injection.HAS_BOOLEAN_VALUE,s=r.injection.HAS_SIDE_EFFECTS,l=r.injection.HAS_NUMERIC_VALUE,c=r.injection.HAS_POSITIVE_NUMERIC_VALUE,p=r.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(o.canUseDOM){var d=document.implementation;n=d&&d.hasFeature&&d.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var f={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:i|u,allowTransparency:i,alt:null,async:u,autoComplete:null,autoPlay:u,cellPadding:null,cellSpacing:null,charSet:i,checked:a|u,classID:i,className:n?i:a,cols:i|c,colSpan:null,content:null,contentEditable:null,contextMenu:i,controls:a|u,coords:null,crossOrigin:null,data:null,dateTime:i,defer:u,dir:null,disabled:i|u,download:p,draggable:null,encType:null,form:i,formAction:i,formEncType:i,formMethod:i,formNoValidate:u,formTarget:i,frameBorder:i,headers:null,height:i,hidden:i|u,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:a,label:null,lang:null,list:i,loop:a|u,manifest:i,marginHeight:null,marginWidth:null,max:null,maxLength:i,media:i,mediaGroup:null,method:null,min:null,multiple:a|u,muted:a|u,name:null,noValidate:u,open:u,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:a|u,rel:null,required:u,role:i,rows:i|c,rowSpan:null,sandbox:null,scope:null,scrolling:null,seamless:i|u,selected:a|u,shape:null,size:i|c,sizes:i,span:c,spellCheck:null,src:null,srcDoc:a,srcSet:i,start:l,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:a|s,width:i,wmode:i,autoCapitalize:null,autoCorrect:null,itemProp:i,itemScope:i|u,itemType:i,itemID:i,itemRef:i,property:null},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=f},{10:10,21:21}],24:[function(e,t){"use strict";function n(e){s(null==e.props.checkedLink||null==e.props.valueLink)}function r(e){n(e),s(null==e.props.value&&null==e.props.onChange)}function o(e){n(e),s(null==e.props.checked&&null==e.props.onChange)}function i(e){this.props.valueLink.requestChange(e.target.value)}function a(e){this.props.checkedLink.requestChange(e.target.checked)}var u=e(76),s=e(133),l={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},c={Mixin:{propTypes:{value:function(e,t){return!e[t]||l[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func}},getValue:function(e){return e.props.valueLink?(r(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(o(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(r(e),i):e.props.checkedLink?(o(e),a):e.props.onChange}};t.exports=c},{133:133,76:76}],25:[function(e,t){"use strict";function n(e){e.remove()}var r=e(30),o=e(103),i=e(118),a=e(133),u={trapBubbledEvent:function(e,t){a(this.isMounted());var n=this.getDOMNode();a(n);var i=r.trapBubbledEvent(e,t,n);this._localEventListeners=o(this._localEventListeners,i)},componentWillUnmount:function(){this._localEventListeners&&i(this._localEventListeners,n)}};t.exports=u},{103:103,118:118,133:133,30:30}],26:[function(e,t){"use strict";var n=e(15),r=e(112),o=n.topLevelTypes,i={eventTypes:null,extractEvents:function(e,t,n,i){if(e===o.topTouchStart){var a=i.target;a&&!a.onclick&&(a.onclick=r)}}};t.exports=i},{112:112,15:15}],27:[function(e,t){"use strict";function n(e){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var t=Object(e),n=Object.prototype.hasOwnProperty,r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o){var i=Object(o);for(var a in i)n.call(i,a)&&(t[a]=i[a])}}return t}t.exports=n},{}],28:[function(e,t){"use strict";var n=e(133),r=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},o=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},i=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},a=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},u=function(e){var t=this;n(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},s=10,l=r,c=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||l,n.poolSize||(n.poolSize=s),n.release=u,n},p={addPoolingTo:c,oneArgumentPooler:r,twoArgumentPooler:o,threeArgumentPooler:i,fiveArgumentPooler:a};t.exports=p},{133:133}],29:[function(e,t){"use strict";var n=e(115),r={getDOMNode:function(){return n(this)}};t.exports=r},{115:115}],30:[function(e,t){"use strict";function n(e){return Object.prototype.hasOwnProperty.call(e,h)||(e[h]=d++,c[e[h]]={}),c[e[h]]}var r=e(15),o=e(17),i=e(18),a=e(59),u=e(102),s=e(27),l=e(134),c={},p=!1,d=0,f={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},h="_reactListenersID"+String(Math.random()).slice(2),m=s({},a,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(m.handleTopLevel),m.ReactEventListener=e}},setEnabled:function(e){m.ReactEventListener&&m.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!m.ReactEventListener||!m.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var o=t,a=n(o),u=i.registrationNameDependencies[e],s=r.topLevelTypes,c=0,p=u.length;p>c;c++){var d=u[c];a.hasOwnProperty(d)&&a[d]||(d===s.topWheel?l("wheel")?m.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",o):l("mousewheel")?m.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",o):m.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",o):d===s.topScroll?l("scroll",!0)?m.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",o):m.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",m.ReactEventListener.WINDOW_HANDLE):d===s.topFocus||d===s.topBlur?(l("focus",!0)?(m.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",o),m.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",o)):l("focusin")&&(m.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",o),m.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",o)),a[s.topBlur]=!0,a[s.topFocus]=!0):f.hasOwnProperty(d)&&m.ReactEventListener.trapBubbledEvent(d,f[d],o),a[d]=!0)}},trapBubbledEvent:function(e,t,n){return m.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return m.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!p){var e=u.refreshScrollValues;
m.ReactEventListener.monitorScrollValue(e),p=!0}},eventNameDispatchConfigs:o.eventNameDispatchConfigs,registrationNameModules:o.registrationNameModules,putListener:o.putListener,getListener:o.getListener,deleteListener:o.deleteListener,deleteAllListeners:o.deleteAllListeners});t.exports=m},{102:102,134:134,15:15,17:17,18:18,27:27,59:59}],31:[function(e,t){"use strict";var n=e(79),r=e(116),o=e(132),i=e(147),a={instantiateChildren:function(e){var t=r(e);for(var n in t)if(t.hasOwnProperty(n)){var i=t[n],a=o(i,null);t[n]=a}return t},updateChildren:function(e,t,a,u){var s=r(t);if(!s&&!e)return null;var l;for(l in s)if(s.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=s[l];if(i(p,d))n.receiveComponent(c,d,a,u),s[l]=c;else{c&&n.unmountComponent(c,l);var f=o(d,null);s[l]=f}}for(l in e)!e.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||n.unmountComponent(e[l]);return s},unmountChildren:function(e){for(var t in e){var r=e[t];n.unmountComponent(r)}}};t.exports=a},{116:116,132:132,147:147,79:79}],32:[function(e,t){"use strict";function n(e,t){this.forEachFunction=e,this.forEachContext=t}function r(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function o(e,t,o){if(null==e)return e;var i=n.getPooled(t,o);d(e,r,i),n.release(i)}function i(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function a(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var u=o.mapFunction.call(o.mapContext,t,r);i[n]=u}}function u(e,t,n){if(null==e)return e;var r={},o=i.getPooled(r,t,n);return d(e,a,o),i.release(o),p.create(r)}function s(){return null}function l(e){return d(e,s,null)}var c=e(28),p=e(61),d=e(149),f=(e(150),c.twoArgumentPooler),h=c.threeArgumentPooler;c.addPoolingTo(n,f),c.addPoolingTo(i,h);var m={forEach:o,map:u,count:l};t.exports=m},{149:149,150:150,28:28,61:61}],33:[function(e,t){"use strict";function n(e,t){var n=x.hasOwnProperty(t)?x[t]:null;M.hasOwnProperty(t)&&g(n===b.OVERRIDE_BASE),e.hasOwnProperty(t)&&g(n===b.DEFINE_MANY||n===b.DEFINE_MANY_MERGED)}function r(e,t){if(t){g("function"!=typeof t),g(!p.isValidElement(t));var r=e.prototype;t.hasOwnProperty(E)&&D.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==E){var i=t[o];if(n(r,o),D.hasOwnProperty(o))D[o](e,i);else{var s=x.hasOwnProperty(o),l=r.hasOwnProperty(o),c=i&&i.__reactDontBind,d="function"==typeof i,f=d&&!s&&!l&&!c;if(f)r.__reactAutoBindMap||(r.__reactAutoBindMap={}),r.__reactAutoBindMap[o]=i,r[o]=i;else if(l){var h=x[o];g(s&&(h===b.DEFINE_MANY_MERGED||h===b.DEFINE_MANY)),h===b.DEFINE_MANY_MERGED?r[o]=a(r[o],i):h===b.DEFINE_MANY&&(r[o]=u(r[o],i))}else r[o]=i}}}}function o(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in D;g(!o);var i=n in e;g(!i),e[n]=r}}}function i(e,t){g(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(g(void 0===e[n]),e[n]=t[n]);return e}function a(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return i(o,n),i(o,r),o}}function u(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function s(e,t){var n=t.bind(e);return n}function l(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=s(e,d.guard(n,e.constructor.displayName+"."+t))}}var c=e(34),p=(e(39),e(55)),d=e(58),f=e(65),h=e(66),m=(e(75),e(74),e(84)),v=e(27),g=e(133),y=e(138),C=e(139),E=(e(150),C({mixins:null})),b=y({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),_=[],x={mixins:b.DEFINE_MANY,statics:b.DEFINE_MANY,propTypes:b.DEFINE_MANY,contextTypes:b.DEFINE_MANY,childContextTypes:b.DEFINE_MANY,getDefaultProps:b.DEFINE_MANY_MERGED,getInitialState:b.DEFINE_MANY_MERGED,getChildContext:b.DEFINE_MANY_MERGED,render:b.DEFINE_ONCE,componentWillMount:b.DEFINE_MANY,componentDidMount:b.DEFINE_MANY,componentWillReceiveProps:b.DEFINE_MANY,shouldComponentUpdate:b.DEFINE_ONCE,componentWillUpdate:b.DEFINE_MANY,componentDidUpdate:b.DEFINE_MANY,componentWillUnmount:b.DEFINE_MANY,updateComponent:b.OVERRIDE_BASE},D={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=v({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=v({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps=e.getDefaultProps?a(e.getDefaultProps,t):t},propTypes:function(e,t){e.propTypes=v({},e.propTypes,t)},statics:function(e,t){o(e,t)}},M={replaceState:function(e,t){m.enqueueReplaceState(this,e),t&&m.enqueueCallback(this,t)},isMounted:function(){var e=f.get(this);return e&&e!==h.currentlyMountingInstance},setProps:function(e,t){m.enqueueSetProps(this,e),t&&m.enqueueCallback(this,t)},replaceProps:function(e,t){m.enqueueReplaceProps(this,e),t&&m.enqueueCallback(this,t)}},N=function(){};v(N.prototype,c.prototype,M);var I={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&l(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;g("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new N,t.prototype.constructor=t,_.forEach(r.bind(null,t)),r(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),g(t.prototype.render);for(var n in x)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){_.push(e)}}};t.exports=I},{133:133,138:138,139:139,150:150,27:27,34:34,39:39,55:55,58:58,65:65,66:66,74:74,75:75,84:84}],34:[function(e,t){"use strict";function n(e,t){this.props=e,this.context=t}{var r=e(84),o=e(133);e(150)}n.prototype.setState=function(e,t){o("object"==typeof e||"function"==typeof e||null==e),r.enqueueSetState(this,e),t&&r.enqueueCallback(this,t)},n.prototype.forceUpdate=function(e){r.enqueueForceUpdate(this),e&&r.enqueueCallback(this,e)};t.exports=n},{133:133,150:150,84:84}],35:[function(e,t){"use strict";var n=e(44),r=e(68),o={processChildrenUpdates:n.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:n.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){r.purgeID(e)}};t.exports=o},{44:44,68:68}],36:[function(e,t){"use strict";var n=e(133),r=!1,o={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){n(!r),o.unmountIDFromEnvironment=e.unmountIDFromEnvironment,o.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,o.processChildrenUpdates=e.processChildrenUpdates,r=!0}}};t.exports=o},{133:133}],37:[function(e,t){"use strict";function n(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var r=e(36),o=e(38),i=e(39),a=e(55),u=(e(56),e(65)),s=e(66),l=e(71),c=e(73),p=e(75),d=(e(74),e(79)),f=e(85),h=e(27),m=e(113),v=e(133),g=e(147),y=(e(150),1),C={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=y++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=l.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=m,this._instance=a,u.set(a,this);var c=a.state;void 0===c&&(a.state=c=null),v("object"==typeof c&&!Array.isArray(c)),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,f=s.currentlyMountingInstance;s.currentlyMountingInstance=this;try{a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),p=this._renderValidatedComponent()}finally{s.currentlyMountingInstance=f}this._renderedComponent=this._instantiateReactComponent(p,this._currentElement.type);var h=d.mountComponent(this._renderedComponent,e,t,this._processChildContext(n));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),h},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=s.currentlyUnmountingInstance;s.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{s.currentlyUnmountingInstance=t}}d.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,u.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=a.cloneAndReplaceProps(n,h({},n.props,e)),f.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return m;var n=this._currentElement.type.contextTypes;if(!n)return m;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_processChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){v("object"==typeof t.constructor.childContextTypes);for(var r in n)v(r in t.constructor.childContextTypes);return h({},e,n)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,r){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{v("function"==typeof e[i]),a=e[i](t,i,o,r)}catch(u){a=u}a instanceof Error&&(n(this),r===p.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&d.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,u=i.props;t!==n&&(a=this._processContext(n._context),u=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(u,a));var s=this._processPendingState(u,a),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(u,s,a);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,u,s,a,e,o)):(this._currentElement=n,this._context=o,i.props=u,i.state=s,i.context=a)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;for(var i=h({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var u=r[a];h(i,"function"==typeof u?u.call(n,i,e,t):u)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,u=a.props,s=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,u,s,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._renderValidatedComponent();if(g(r,o))d.receiveComponent(n,o,e,this._processChildContext(t));else{var i=this._rootNodeID,a=n._rootNodeID;d.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(o,this._currentElement.type);var u=d.mountComponent(this._renderedComponent,i,e,t);this._replaceNodeWithMarkupByID(a,u)}},_replaceNodeWithMarkupByID:function(e,t){r.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(){var e,t=o.current;o.current=this._processChildContext(this._currentElement._context),i.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{o.current=t,i.current=null}return v(null===e||e===!1||a.isValidElement(e)),e},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===m?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};c.measureMethods(C,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var E={Mixin:C};t.exports=E},{113:113,133:133,147:147,150:150,27:27,36:36,38:38,39:39,55:55,56:56,65:65,66:66,71:71,73:73,74:74,75:75,79:79,85:85}],38:[function(e,t){"use strict";var n=e(27),r=e(113),o=(e(150),{current:r,withContext:function(e,t){var r,i=o.current;o.current=n({},i,e);try{r=t()}finally{o.current=i}return r}});t.exports=o},{113:113,150:150,27:27}],39:[function(e,t){"use strict";var n={current:null};t.exports=n},{}],40:[function(e,t){"use strict";function n(e){return r.createFactory(e)}var r=e(55),o=(e(56),e(140)),i=o({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},n);t.exports=i},{140:140,55:55,56:56}],41:[function(e,t){"use strict";var n=e(2),r=e(29),o=e(33),i=e(55),a=e(138),u=i.createFactory("button"),s=a({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),l=o.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[n,r],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&s[t]||(e[t]=this.props[t]);return u(e,this.props.children)}});t.exports=l},{138:138,2:2,29:29,33:33,55:55}],42:[function(e,t){"use strict";function n(e){e&&(null!=e.dangerouslySetInnerHTML&&(v(null==e.children),v(null!=e.dangerouslySetInnerHTML.__html)),v(null==e.style||"object"==typeof e.style))}function r(e,t,n,r){var o=p.findReactContainerForID(e);if(o){var i=o.nodeType===x?o.ownerDocument:o;C(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function o(e){T.call(I,e)||(v(N.test(e)),I[e]=!0)}function i(e){o(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var a=e(5),u=e(10),s=e(11),l=e(30),c=e(35),p=e(68),d=e(69),f=e(73),h=e(27),m=e(114),v=e(133),g=(e(134),e(139)),y=(e(150),l.deleteListener),C=l.listenTo,E=l.registrationNameModules,b={string:!0,number:!0},_=g({style:null}),x=1,D=null,M={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},N=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,I={},T={}.hasOwnProperty;i.displayName="ReactDOMComponent",i.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,r){this._rootNodeID=e,n(this._currentElement.props);var o=M[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,r)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];if(null!=i)if(E.hasOwnProperty(o))r(this._rootNodeID,o,i,e);else{o===_&&(i&&(i=this._previousStyleCopy=h({},t.style)),i=a.createMarkupForStyles(i));var u=s.createMarkupForProperty(o,i);u&&(n+=" "+u)}}if(e.renderToStaticMarkup)return n+">";var l=s.createMarkupForID(this._rootNodeID);return n+" "+l+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=b[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+m(i);if(null!=a){var u=this.mountChildren(a,e,t);return n+u.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,r,o){n(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,o,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===_){var s=this._previousStyleCopy;for(o in s)s.hasOwnProperty(o)&&(i=i||{},i[o]="");this._previousStyleCopy=null}else E.hasOwnProperty(n)?y(this._rootNodeID,n):(u.isStandardName[n]||u.isCustomAttribute(n))&&D.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===_?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===_)if(l&&(l=this._previousStyleCopy=h({},l)),c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(i=i||{},i[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(i=i||{},i[o]=l[o])}else i=l;else E.hasOwnProperty(n)?r(this._rootNodeID,n,l,t):(u.isStandardName[n]||u.isCustomAttribute(n))&&D.updatePropertyByID(this._rootNodeID,n,l)}i&&D.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=b[typeof e.children]?e.children:null,i=b[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=u;null!=s&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=u?a!==u&&D.updateInnerHTMLByID(this._rootNodeID,u):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),l.deleteAllListeners(this._rootNodeID),c.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},f.measureMethods(i,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),h(i.prototype,i.Mixin,d.Mixin),i.injection={injectIDOperations:function(e){i.BackendIDOperations=D=e}},t.exports=i},{10:10,11:11,114:114,133:133,134:134,139:139,150:150,27:27,30:30,35:35,5:5,68:68,69:69,73:73}],43:[function(e,t){"use strict";var n=e(15),r=e(25),o=e(29),i=e(33),a=e(55),u=a.createFactory("form"),s=i.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[o,r],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(n.topLevelTypes.topSubmit,"submit")}});t.exports=s},{15:15,25:25,29:29,33:33,55:55}],44:[function(e,t){"use strict";var n=e(5),r=e(9),o=e(11),i=e(68),a=e(73),u=e(133),s=e(144),l={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},c={updatePropertyByID:function(e,t,n){var r=i.getNode(e);u(!l.hasOwnProperty(t)),null!=n?o.setValueForProperty(r,t,n):o.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=i.getNode(e);u(!l.hasOwnProperty(t)),o.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var r=i.getNode(e);n.setValueForStyles(r,t)},updateInnerHTMLByID:function(e,t){var n=i.getNode(e);s(n,t)},updateTextContentByID:function(e,t){var n=i.getNode(e);r.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=i.getNode(e);r.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=i.getNode(e[n].parentID);r.processUpdates(e,t)}};a.measureMethods(c,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=c},{11:11,133:133,144:144,5:5,68:68,73:73,9:9}],45:[function(e,t){"use strict";var n=e(15),r=e(25),o=e(29),i=e(33),a=e(55),u=a.createFactory("iframe"),s=i.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[o,r],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load")}});t.exports=s},{15:15,25:25,29:29,33:33,55:55}],46:[function(e,t){"use strict";var n=e(15),r=e(25),o=e(29),i=e(33),a=e(55),u=a.createFactory("img"),s=i.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[o,r],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(n.topLevelTypes.topError,"error")}});t.exports=s},{15:15,25:25,29:29,33:33,55:55}],47:[function(e,t){"use strict";function n(){this.isMounted()&&this.forceUpdate()}var r=e(2),o=e(11),i=e(24),a=e(29),u=e(33),s=e(55),l=e(68),c=e(85),p=e(27),d=e(133),f=s.createFactory("input"),h={},m=u.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[r,i.Mixin,a],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=p({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=i.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=i.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,f(e,this.props.children)},componentDidMount:function(){var e=l.getID(this.getDOMNode());h[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=l.getID(e);delete h[t]},componentDidUpdate:function(){var e=this.getDOMNode();null!=this.props.checked&&o.setValueForProperty(e,"checked",this.props.checked||!1);var t=i.getValue(this);null!=t&&o.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,r=i.getOnChange(this);r&&(t=r.call(this,e)),c.asap(n,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var a=this.getDOMNode(),u=a;u.parentNode;)u=u.parentNode;for(var s=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),p=0,f=s.length;f>p;p++){var m=s[p];if(m!==a&&m.form===a.form){var v=l.getID(m);d(v);var g=h[v];d(g),c.asap(n,g)}}}return t}});t.exports=m},{11:11,133:133,2:2,24:24,27:27,29:29,33:33,55:55,68:68,85:85}],48:[function(e,t){"use strict";var n=e(29),r=e(33),o=e(55),i=(e(150),o.createFactory("option")),a=r.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[n],componentWillMount:function(){},render:function(){return i(this.props,this.props.children)}});t.exports=a},{150:150,29:29,33:33,55:55}],49:[function(e,t){"use strict";function n(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=a.getValue(this);null!=e&&this.isMounted()&&o(this,e)}}function r(e,t){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function o(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i.length&&(i[0].selected=!0)}}var i=e(2),a=e(24),u=e(29),s=e(33),l=e(55),c=e(85),p=e(27),d=l.createFactory("select"),f=s.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[i,a.Mixin,u],propTypes:{defaultValue:r,value:r},render:function(){var e=p({},this.props);return e.onChange=this._handleChange,e.value=null,d(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=a.getValue(this);null!=e?o(this,e):null!=this.props.defaultValue&&o(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=a.getValue(this);null!=t?(this._pendingUpdate=!1,o(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?o(this,this.props.defaultValue):o(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,r=a.getOnChange(this);return r&&(t=r.call(this,e)),this._pendingUpdate=!0,c.asap(n,this),t}});t.exports=f},{2:2,24:24,27:27,29:29,33:33,55:55,85:85}],50:[function(e,t){"use strict";function n(e,t,n,r){return e===n&&t===r}function r(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function o(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var r=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,u=t.getRangeAt(0),s=n(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=s?0:u.toString().length,c=u.cloneRange();c.selectNodeContents(e),c.setEnd(u.startContainer,u.startOffset);var p=n(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(r,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function i(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function a(e,t){if(window.getSelection){var n=window.getSelection(),r=e[l()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var u=s(e,o),c=s(e,i);if(u&&c){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),n.addRange(p))}}}var u=e(21),s=e(126),l=e(128),c=u.canUseDOM&&"selection"in document&&!("getSelection"in window),p={getOffsets:c?r:o,setOffsets:c?i:a};t.exports=p},{126:126,128:128,21:21}],51:[function(e,t){"use strict";var n=e(11),r=e(35),o=e(42),i=e(27),a=e(114),u=function(){};i(u.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t){this._rootNodeID=e;var r=a(this._stringText);return t.renderToStaticMarkup?r:"<span "+n.createMarkupForID(e)+">"+r+"</span>"},receiveComponent:function(e){if(e!==this._currentElement){this._currentElement=e;var t=""+e;t!==this._stringText&&(this._stringText=t,o.BackendIDOperations.updateTextContentByID(this._rootNodeID,t))}},unmountComponent:function(){r.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=u},{11:11,114:114,27:27,35:35,42:42}],52:[function(e,t){"use strict";function n(){this.isMounted()&&this.forceUpdate()}var r=e(2),o=e(11),i=e(24),a=e(29),u=e(33),s=e(55),l=e(85),c=e(27),p=e(133),d=(e(150),s.createFactory("textarea")),f=u.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[r,i.Mixin,a],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(p(null==e),Array.isArray(t)&&(p(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=i.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=c({},this.props);return p(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,d(e,this.state.initialValue)},componentDidUpdate:function(){var e=i.getValue(this);if(null!=e){var t=this.getDOMNode();o.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,r=i.getOnChange(this);return r&&(t=r.call(this,e)),l.asap(n,this),t}});t.exports=f},{11:11,133:133,150:150,2:2,24:24,27:27,29:29,33:33,55:55,85:85}],53:[function(e,t){"use strict";function n(){this.reinitializeTransaction()}var r=e(85),o=e(101),i=e(27),a=e(112),u={initialize:a,close:function(){p.isBatchingUpdates=!1}},s={initialize:a,close:r.flushBatchedUpdates.bind(r)},l=[s,u];i(n.prototype,o.Mixin,{getTransactionWrappers:function(){return l}});var c=new n,p={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=p.isBatchingUpdates;p.isBatchingUpdates=!0,i?e(t,n,r,o):c.perform(e,null,t,n,r,o)}};t.exports=p},{101:101,112:112,27:27,85:85}],54:[function(e,t){"use strict";function n(e){return f.createClass({tagName:e.toUpperCase(),render:function(){return new I(e,null,null,null,null,this.props)}})}function r(){R.EventEmitter.injectReactEventListener(T),R.EventPluginHub.injectEventPluginOrder(u),R.EventPluginHub.injectInstanceHandle(P),R.EventPluginHub.injectMount(w),R.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:k,EnterLeaveEventPlugin:s,ChangeEventPlugin:i,MobileSafariClickEventPlugin:p,SelectEventPlugin:S,BeforeInputEventPlugin:o}),R.NativeComponent.injectGenericComponentClass(v),R.NativeComponent.injectTextComponentClass(N),R.NativeComponent.injectAutoWrapper(n),R.Class.injectMixin(d),R.NativeComponent.injectComponentClasses({button:g,form:y,iframe:b,img:C,input:_,option:x,select:D,textarea:M,html:U("html"),head:U("head"),body:U("body")}),R.DOMProperty.injectDOMPropertyConfig(c),R.DOMProperty.injectDOMPropertyConfig(L),R.EmptyComponent.injectEmptyComponent("noscript"),R.Updates.injectReconcileTransaction(O),R.Updates.injectBatchingStrategy(m),R.RootIndex.injectCreateReactRootIndex(l.canUseDOM?a.createReactRootIndex:A.createReactRootIndex),R.Component.injectEnvironment(h),R.DOMComponent.injectIDOperations(E)}var o=e(3),i=e(7),a=e(8),u=e(13),s=e(14),l=e(21),c=e(23),p=e(26),d=e(29),f=e(33),h=e(35),m=e(53),v=e(42),g=e(41),y=e(43),C=e(46),E=e(44),b=e(45),_=e(47),x=e(48),D=e(49),M=e(52),N=e(51),I=e(55),T=e(60),R=e(62),P=e(64),w=e(68),O=e(78),S=e(87),A=e(88),k=e(89),L=e(86),U=e(109);t.exports={inject:r}},{109:109,13:13,14:14,21:21,23:23,26:26,29:29,3:3,33:33,35:35,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,51:51,52:52,53:53,55:55,60:60,62:62,64:64,68:68,7:7,78:78,8:8,86:86,87:87,88:88,89:89}],55:[function(e,t){"use strict";var n=e(38),r=e(39),o=e(27),i=(e(150),{key:!0,ref:!0}),a=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};a.prototype={_isReactElement:!0},a.createElement=function(e,t,o){var u,s={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(u in t)t.hasOwnProperty(u)&&!i.hasOwnProperty(u)&&(s[u]=t[u])
}var p=arguments.length-2;if(1===p)s.children=o;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];s.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(u in h)"undefined"==typeof s[u]&&(s[u]=h[u])}return new a(e,l,c,r.current,n.current,s)},a.createFactory=function(e){var t=a.createElement.bind(null,e);return t.type=e,t},a.cloneAndReplaceProps=function(e,t){var n=new a(e.type,e.key,e.ref,e._owner,e._context,t);return n},a.cloneElement=function(e,t,n){var u,s=o({},e.props),l=e.key,c=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,p=r.current),void 0!==t.key&&(l=""+t.key);for(u in t)t.hasOwnProperty(u)&&!i.hasOwnProperty(u)&&(s[u]=t[u])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];s.children=f}return new a(e.type,l,c,p,e._context,s)},a.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=a},{150:150,27:27,38:38,39:39}],56:[function(e,t){"use strict";function n(){if(g.current){var e=g.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function r(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function o(){var e=g.current;return e&&r(e)||void 0}function i(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,u('Each child in an array or iterator should have a unique "key" prop.',e,t))}function a(e,t,n){x.test(e)&&u("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function u(e,t,n){var i=o(),a="string"==typeof n?n:n.displayName||n.name,u=i||a,s=b[e]||(b[e]={});if(!s.hasOwnProperty(u)){s[u]=!0;var l="";if(t&&t._owner&&t._owner!==g.current){var c=r(t._owner);l=" It was passed a child from "+c+"."}}}function s(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];h.isValidElement(r)&&i(r,t)}else if(h.isValidElement(e))e._store.validated=!0;else if(e){var o=C(e);if(o){if(o!==e.entries)for(var u,s=o.call(e);!(u=s.next()).done;)h.isValidElement(u.value)&&i(u.value,t)}else if("object"==typeof e){var l=m.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&a(c,l[c],t)}}}function l(e,t,r,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{E("function"==typeof t[i]),a=t[i](r,i,e,o)}catch(u){a=u}a instanceof Error&&!(a.message in _)&&(_[a.message]=!0,n(this))}}function c(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!D.hasOwnProperty(i)){D[i]=!0;var a="";r&&(a=" <"+r+" />");var u="";o&&(u=" The element was created by "+o+".")}}function p(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function d(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&p(t[r],n[r])||(c(r,e),t[r]=n[r]))}}function f(e){if(null!=e.type){var t=y.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&l(n,t.propTypes,e.props,v.prop),"function"==typeof t.getDefaultProps}}var h=e(55),m=e(61),v=e(75),g=(e(74),e(39)),y=e(71),C=e(124),E=e(133),b=(e(150),{}),_={},x=/^\d+$/,D={},M={checkAndWarnForMutatedProps:d,createElement:function(e){var t=h.createElement.apply(this,arguments);if(null==t)return t;for(var n=2;n<arguments.length;n++)s(arguments[n],e);return f(t),t},createFactory:function(e){var t=M.createElement.bind(null,e);return t.type=e,t},cloneElement:function(){for(var e=h.cloneElement.apply(this,arguments),t=2;t<arguments.length;t++)s(arguments[t],e.type);return f(e),e}};t.exports=M},{124:124,133:133,150:150,39:39,55:55,61:61,71:71,74:74,75:75}],57:[function(e,t){"use strict";function n(e){l[e]=!0}function r(e){delete l[e]}function o(e){return!!l[e]}var i,a=e(55),u=e(65),s=e(133),l={},c={injectEmptyComponent:function(e){i=a.createFactory(e)}},p=function(){};p.prototype.componentDidMount=function(){var e=u.get(this);e&&n(e._rootNodeID)},p.prototype.componentWillUnmount=function(){var e=u.get(this);e&&r(e._rootNodeID)},p.prototype.render=function(){return s(i),i()};var d=a.createElement(p),f={emptyElement:d,injection:c,isNullComponentID:o};t.exports=f},{133:133,55:55,65:65}],58:[function(e,t){"use strict";var n={guard:function(e){return e}};t.exports=n},{}],59:[function(e,t){"use strict";function n(e){r.enqueueEvents(e),r.processEventQueue()}var r=e(17),o={handleTopLevel:function(e,t,o,i){var a=r.extractEvents(e,t,o,i);n(a)}};t.exports=o},{17:17}],60:[function(e,t){"use strict";function n(e){var t=c.getID(e),n=l.getReactRootIDFromNodeID(t),r=c.findReactContainerForID(n),o=c.getFirstReactDOM(r);return o}function r(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function o(e){for(var t=c.getFirstReactDOM(f(e.nativeEvent))||window,r=t;r;)e.ancestors.push(r),r=n(r);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=c.getID(t)||"";m._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function i(e){var t=h(window);e(t)}var a=e(16),u=e(21),s=e(28),l=e(64),c=e(68),p=e(85),d=e(27),f=e(123),h=e(129);d(r.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),s.addPoolingTo(r,s.twoArgumentPooler);var m={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:u.canUseDOM?window:null,setHandleTopLevel:function(e){m._handleTopLevel=e},setEnabled:function(e){m._enabled=!!e},isEnabled:function(){return m._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?a.listen(r,t,m.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?a.capture(r,t,m.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=i.bind(null,e);a.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(m._enabled){var n=r.getPooled(e,t);try{p.batchedUpdates(o,n)}finally{r.release(n)}}}};t.exports=m},{123:123,129:129,16:16,21:21,27:27,28:28,64:64,68:68,85:85}],61:[function(e,t){"use strict";var n=(e(55),e(150),{create:function(e){return e},extract:function(e){return e},extractIfFragment:function(e){return e}});t.exports=n},{150:150,55:55}],62:[function(e,t){"use strict";var n=e(10),r=e(17),o=e(36),i=e(33),a=e(57),u=e(30),s=e(71),l=e(42),c=e(73),p=e(81),d=e(85),f={Component:o.injection,Class:i.injection,DOMComponent:l.injection,DOMProperty:n.injection,EmptyComponent:a.injection,EventPluginHub:r.injection,EventEmitter:u.injection,NativeComponent:s.injection,Perf:c.injection,RootIndex:p.injection,Updates:d.injection};t.exports=f},{10:10,17:17,30:30,33:33,36:36,42:42,57:57,71:71,73:73,81:81,85:85}],63:[function(e,t){"use strict";function n(e){return o(document.documentElement,e)}var r=e(50),o=e(107),i=e(117),a=e(119),u={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=a();return{focusedElem:e,selectionRange:u.hasSelectionCapabilities(e)?u.getSelection(e):null}},restoreSelection:function(e){var t=a(),r=e.focusedElem,o=e.selectionRange;t!==r&&n(r)&&(u.hasSelectionCapabilities(r)&&u.setSelection(r,o),i(r))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=r.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,o=t.end;if("undefined"==typeof o&&(o=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(o,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",o-n),i.select()}else r.setOffsets(e,t)}};t.exports=u},{107:107,117:117,119:119,50:50}],64:[function(e,t){"use strict";function n(e){return d+e.toString(36)}function r(e,t){return e.charAt(t)===d||t===e.length}function o(e){return""===e||e.charAt(0)===d&&e.charAt(e.length-1)!==d}function i(e,t){return 0===t.indexOf(e)&&r(t,e.length)}function a(e){return e?e.substr(0,e.lastIndexOf(d)):""}function u(e,t){if(p(o(e)&&o(t)),p(i(e,t)),e===t)return e;var n,a=e.length+f;for(n=a;n<t.length&&!r(t,n);n++);return t.substr(0,n)}function s(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var i=0,a=0;n>=a;a++)if(r(e,a)&&r(t,a))i=a;else if(e.charAt(a)!==t.charAt(a))break;var u=e.substr(0,i);return p(o(u)),u}function l(e,t,n,r,o,s){e=e||"",t=t||"",p(e!==t);var l=i(t,e);p(l||i(e,t));for(var c=0,d=l?a:u,f=e;;f=d(f,t)){var m;if(o&&f===e||s&&f===t||(m=n(f,l,r)),m===!1||f===t)break;p(c++<h)}}var c=e(81),p=e(133),d=".",f=d.length,h=100,m={createReactRootID:function(){return n(c.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===d&&e.length>1){var t=e.indexOf(d,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=s(e,t);i!==e&&l(e,i,n,r,!1,!0),i!==t&&l(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(l("",e,t,n,!0,!1),l(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){l("",e,t,n,!0,!1)},_getFirstCommonAncestorID:s,_getNextDescendantID:u,isAncestorIDOf:i,SEPARATOR:d};t.exports=m},{133:133,81:81}],65:[function(e,t){"use strict";var n={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=n},{}],66:[function(e,t){"use strict";var n={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=n},{}],67:[function(e,t){"use strict";var n=e(104),r={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=n(e);return e.replace(">"," "+r.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var o=t.getAttribute(r.CHECKSUM_ATTR_NAME);o=o&&parseInt(o,10);var i=n(e);return i===o}};t.exports=r},{104:104}],68:[function(e,t){"use strict";function n(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function r(e){var t=T(e);return t&&K.getID(t)}function o(e){var t=i(e);if(t)if(k.hasOwnProperty(t)){var n=k[t];n!==e&&(P(!l(n,t)),k[t]=e)}else k[t]=e;return t}function i(e){return e&&e.getAttribute&&e.getAttribute(A)||""}function a(e,t){var n=i(e);n!==t&&delete k[n],e.setAttribute(A,t),k[t]=e}function u(e){return k.hasOwnProperty(e)&&l(k[e],e)||(k[e]=K.findReactNodeByID(e)),k[e]}function s(e){var t=E.get(e)._rootNodeID;return y.isNullComponentID(t)?null:(k.hasOwnProperty(t)&&l(k[t],t)||(k[t]=K.findReactNodeByID(t)),k[t])}function l(e,t){if(e){P(i(e)===t);var n=K.findReactContainerForID(t);if(n&&I(n,e))return!0}return!1}function c(e){delete k[e]}function p(e){var t=k[e];return t&&l(t,e)?void(j=t):!1}function d(e){j=null,C.traverseAncestors(e,p);var t=j;return j=null,t}function f(e,t,n,r,o){var i=x.mountComponent(e,t,r,N);e._isTopLevel=!0,K._mountImageIntoNode(i,n,o)}function h(e,t,n,r){var o=M.ReactReconcileTransaction.getPooled();o.perform(f,null,e,t,n,o,r),M.ReactReconcileTransaction.release(o)}var m=e(10),v=e(30),g=(e(39),e(55)),y=(e(56),e(57)),C=e(64),E=e(65),b=e(67),_=e(73),x=e(79),D=e(84),M=e(85),N=e(113),I=e(107),T=e(127),R=e(132),P=e(133),w=e(144),O=e(147),S=(e(150),C.SEPARATOR),A=m.ID_ATTRIBUTE_NAME,k={},L=1,U=9,F={},B={},V=[],j=null,K={_instancesByReactRootID:F,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return K.scrollMonitor(n,function(){D.enqueueElementInternal(e,t),r&&D.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){P(t&&(t.nodeType===L||t.nodeType===U)),v.ensureScrollValueMonitoring();var n=K.registerContainer(t);return F[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=R(e,null),o=K._registerComponent(r,t);return M.batchedUpdates(h,r,o,t,n),r},render:function(e,t,n){P(g.isValidElement(e));var o=F[r(t)];if(o){var i=o._currentElement;if(O(i,e))return K._updateRootComponent(o,e,t,n).getPublicInstance();K.unmountComponentAtNode(t)}var a=T(t),u=a&&K.isRenderedByReact(a),s=u&&!o,l=K._renderNewRootComponent(e,t,s).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=g.createElement(e,t);return K.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return P(r),K.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=r(e);return t&&(t=C.getReactRootIDFromNodeID(t)),t||(t=C.createReactRootID()),B[t]=e,t},unmountComponentAtNode:function(e){P(e&&(e.nodeType===L||e.nodeType===U));var t=r(e),n=F[t];return n?(K.unmountComponentFromNode(n,e),delete F[t],delete B[t],!0):!1},unmountComponentFromNode:function(e,t){for(x.unmountComponent(e),t.nodeType===U&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=C.getReactRootIDFromNodeID(e),n=B[t];return n},findReactNodeByID:function(e){var t=K.findReactContainerForID(e);return K.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=K.getID(e);return t?t.charAt(0)===S:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(K.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=V,r=0,o=d(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var u=K.getID(a);u?t===u?i=a:C.isAncestorIDOf(u,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,P(!1)},_mountImageIntoNode:function(e,t,r){if(P(t&&(t.nodeType===L||t.nodeType===U)),r){var o=T(t);if(b.canReuseMarkup(e,o))return;var i=o.getAttribute(b.CHECKSUM_ATTR_NAME);o.removeAttribute(b.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(b.CHECKSUM_ATTR_NAME,i);var u=n(e,a);" (client) "+e.substring(u-20,u+20)+"\n (server) "+a.substring(u-20,u+20),P(t.nodeType!==U)}P(t.nodeType!==U),w(t,e)},getReactRootID:r,getID:o,setID:a,getNode:u,getNodeFromInstance:s,purgeID:c};_.measureMethods(K,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=K},{10:10,107:107,113:113,127:127,132:132,133:133,144:144,147:147,150:150,30:30,39:39,55:55,56:56,57:57,64:64,65:65,67:67,73:73,79:79,84:84,85:85}],69:[function(e,t){"use strict";function n(e,t,n){f.push({parentID:e,parentNode:null,type:l.INSERT_MARKUP,markupIndex:h.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function r(e,t,n){f.push({parentID:e,parentNode:null,type:l.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function o(e,t){f.push({parentID:e,parentNode:null,type:l.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function i(e,t){f.push({parentID:e,parentNode:null,type:l.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function a(){f.length&&(s.processChildrenUpdates(f,h),u())}function u(){f.length=0,h.length=0}var s=e(36),l=e(70),c=e(79),p=e(31),d=0,f=[],h=[],m={Mixin:{mountChildren:function(e,t,n){var r=p.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=this._rootNodeID+a,l=c.mountComponent(u,s,t,n);u._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){d++;var t=!0;try{var n=this._renderedChildren;p.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{d--,d||(t?u():a())}},updateChildren:function(e,t,n){d++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{d--,d||(r?u():a())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=p.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,u=0;for(i in o)if(o.hasOwnProperty(i)){var s=r&&r[i],l=o[i];s===l?(this.moveChild(s,u,a),a=Math.max(s._mountIndex,a),s._mountIndex=u):(s&&(a=Math.max(s._mountIndex,a),this._unmountChildByName(s,i)),this._mountChildByNameAtIndex(l,i,u,t,n)),u++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;p.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&r(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){n(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){o(this._rootNodeID,e._mountIndex)},setTextContent:function(e){i(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=c.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e){this.removeChild(e),e._mountIndex=null}}};t.exports=m},{31:31,36:36,70:70,79:79}],70:[function(e,t){"use strict";var n=e(138),r=n({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=r},{138:138}],71:[function(e,t){"use strict";function n(e){if("function"==typeof e.type)return e.type;var t=e.type,n=c[t];return null==n&&(c[t]=n=s(t)),n}function r(e){return u(l),new l(e.type,e.props)}function o(e){return new p(e)}function i(e){return e instanceof p}var a=e(27),u=e(133),s=null,l=null,c={},p=null,d={injectGenericComponentClass:function(e){l=e},injectTextComponentClass:function(e){p=e},injectComponentClasses:function(e){a(c,e)},injectAutoWrapper:function(e){s=e}},f={getComponentClassForElement:n,createInternalComponent:r,createInstanceForText:o,isTextComponent:i,injection:d};t.exports=f},{133:133,27:27}],72:[function(e,t){"use strict";var n=e(133),r={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,o){n(r.isValidOwner(o)),o.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,o){n(r.isValidOwner(o)),o.getPublicInstance().refs[t]===e.getPublicInstance()&&o.detachRef(t)}};t.exports=r},{133:133}],73:[function(e,t){"use strict";function n(e,t,n){return n}var r={enableMeasure:!1,storedMeasure:n,measureMethods:function(){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){r.storedMeasure=e}}};t.exports=r},{}],74:[function(e,t){"use strict";var n={};t.exports=n},{}],75:[function(e,t){"use strict";var n=e(138),r=n({prop:null,context:null,childContext:null});t.exports=r},{138:138}],76:[function(e,t){"use strict";function n(e){function t(t,n,r,o,i){if(o=o||E,null==n[r]){var a=y[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function r(e){function t(t,n,r,o){var i=t[n],a=h(i);if(a!==e){var u=y[o],s=m(i);return new Error("Invalid "+u+" `"+n+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return n(t)}function o(){return n(C.thatReturns(null))}function i(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=y[o],u=h(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var s=0;s<i.length;s++){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return n(t)}function a(){function e(e,t,n,r){if(!v.isValidElement(e[t])){var o=y[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return n(e)}function u(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=y[o],a=e.name||E;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return n(t)}function s(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var u=y[o],s=JSON.stringify(e);return new Error("Invalid "+u+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+s+"."))}return n(t)}function l(e){function t(t,n,r,o){var i=t[n],a=h(i);if("object"!==a){var u=y[o];return new Error("Invalid "+u+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var s in i)if(i.hasOwnProperty(s)){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return n(t)}function c(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var u=y[o];return new Error("Invalid "+u+" `"+n+"` supplied to "+("`"+r+"`."))}return n(t)}function p(){function e(e,t,n,r){if(!f(e[t])){var o=y[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return n(e)}function d(e){function t(t,n,r,o){var i=t[n],a=h(i);if("object"!==a){var u=y[o];return new Error("Invalid "+u+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var s in e){var l=e[s];if(l){var c=l(i,s,r,o);if(c)return c}}return null}return n(t)}function f(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(f);if(null===e||v.isValidElement(e))return!0;e=g.extractIfFragment(e);for(var t in e)if(!f(e[t]))return!1;return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var v=e(55),g=e(61),y=e(74),C=e(112),E="<<anonymous>>",b=a(),_=p(),x={array:r("array"),bool:r("boolean"),func:r("function"),number:r("number"),object:r("object"),string:r("string"),any:o(),arrayOf:i,element:b,instanceOf:u,node:_,objectOf:l,oneOf:s,oneOfType:c,shape:d};t.exports=x},{112:112,55:55,61:61,74:74}],77:[function(e,t){"use strict";function n(){this.listenersToPut=[]}var r=e(28),o=e(30),i=e(27);i(n.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];o.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{27:27,28:28,30:30}],78:[function(e,t){"use strict";function n(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=r.getPooled(null),this.putListenerQueue=u.getPooled()}var r=e(6),o=e(28),i=e(30),a=e(63),u=e(77),s=e(101),l=e(27),c={initialize:a.getSelectionInformation,close:a.restoreSelection},p={initialize:function(){var e=i.isEnabled();return i.setEnabled(!1),e},close:function(e){i.setEnabled(e)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},h=[f,c,p,d],m={getTransactionWrappers:function(){return h},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){r.release(this.reactMountReady),this.reactMountReady=null,u.release(this.putListenerQueue),this.putListenerQueue=null}};l(n.prototype,s.Mixin,m),o.addPoolingTo(n),t.exports=n},{101:101,27:27,28:28,30:30,6:6,63:63,77:77}],79:[function(e,t){"use strict";function n(){r.attachRefs(this,this._currentElement)}var r=e(80),o=(e(56),{mountComponent:function(e,t,r,o){var i=e.mountComponent(t,r,o);return r.getReactMountReady().enqueue(n,e),i},unmountComponent:function(e){r.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,o,i){var a=e._currentElement;if(t!==a||null==t._owner){var u=r.shouldUpdateRefs(a,t);u&&r.detachRefs(e,a),e.receiveComponent(t,o,i),u&&o.getReactMountReady().enqueue(n,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}});t.exports=o},{56:56,80:80}],80:[function(e,t){"use strict";function n(e,t,n){"function"==typeof e?e(t.getPublicInstance()):o.addComponentAsRefTo(t,e,n)}function r(e,t,n){"function"==typeof e?e(null):o.removeComponentAsRefFrom(t,e,n)}var o=e(72),i={};i.attachRefs=function(e,t){var r=t.ref;null!=r&&n(r,e,t._owner)},i.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},i.detachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},t.exports=i},{72:72}],81:[function(e,t){"use strict";var n={injectCreateReactRootIndex:function(e){r.createReactRootIndex=e}},r={createReactRootIndex:null,injection:n};t.exports=r},{}],82:[function(e,t){"use strict";function n(e){c(o.isValidElement(e));var t;try{var n=i.createReactRootID();return t=u.getPooled(!1),t.perform(function(){var r=l(e,null),o=r.mountComponent(n,t,s);return a.addChecksumToMarkup(o)},null)}finally{u.release(t)}}function r(e){c(o.isValidElement(e));var t;try{var n=i.createReactRootID();return t=u.getPooled(!0),t.perform(function(){var r=l(e,null);return r.mountComponent(n,t,s)},null)}finally{u.release(t)}}var o=e(55),i=e(64),a=e(67),u=e(83),s=e(113),l=e(132),c=e(133);t.exports={renderToString:n,renderToStaticMarkup:r}},{113:113,132:132,133:133,55:55,64:64,67:67,83:83}],83:[function(e,t){"use strict";function n(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=o.getPooled(null),this.putListenerQueue=i.getPooled()}var r=e(28),o=e(6),i=e(77),a=e(101),u=e(27),s=e(112),l={initialize:function(){this.reactMountReady.reset()},close:s},c={initialize:function(){this.putListenerQueue.reset()},close:s},p=[c,l],d={getTransactionWrappers:function(){return p},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,i.release(this.putListenerQueue),this.putListenerQueue=null}};u(n.prototype,a.Mixin,d),r.addPoolingTo(n),t.exports=n},{101:101,112:112,27:27,28:28,6:6,77:77}],84:[function(e,t){"use strict";function n(e){e!==o.currentlyMountingInstance&&s.enqueueUpdate(e)}function r(e){c(null==i.current);var t=u.get(e);return t?t===o.currentlyUnmountingInstance?null:t:null}var o=e(66),i=e(39),a=e(55),u=e(65),s=e(85),l=e(27),c=e(133),p=(e(150),{enqueueCallback:function(e,t){c("function"==typeof t);var i=r(e);return i&&i!==o.currentlyMountingInstance?(i._pendingCallbacks?i._pendingCallbacks.push(t):i._pendingCallbacks=[t],void n(i)):null},enqueueCallbackInternal:function(e,t){c("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],n(e)},enqueueForceUpdate:function(e){var t=r(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,n(t))},enqueueReplaceState:function(e,t){var o=r(e,"replaceState");o&&(o._pendingStateQueue=[t],o._pendingReplaceState=!0,n(o))},enqueueSetState:function(e,t){var o=r(e,"setState");if(o){var i=o._pendingStateQueue||(o._pendingStateQueue=[]);i.push(t),n(o)}},enqueueSetProps:function(e,t){var o=r(e,"setProps");if(o){c(o._isTopLevel);var i=o._pendingElement||o._currentElement,u=l({},i.props,t);o._pendingElement=a.cloneAndReplaceProps(i,u),n(o)}},enqueueReplaceProps:function(e,t){var o=r(e,"replaceProps");if(o){c(o._isTopLevel);var i=o._pendingElement||o._currentElement;o._pendingElement=a.cloneAndReplaceProps(i,t),n(o)}},enqueueElementInternal:function(e,t){e._pendingElement=t,n(e)}});t.exports=p},{133:133,150:150,27:27,39:39,55:55,65:65,66:66,85:85}],85:[function(e,t){"use strict";function n(){m(M.ReactReconcileTransaction&&C)}function r(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=l.getPooled(),this.reconcileTransaction=M.ReactReconcileTransaction.getPooled()}function o(e,t,r,o,i){n(),C.batchedUpdates(e,t,r,o,i)}function i(e,t){return e._mountOrder-t._mountOrder}function a(e){var t=e.dirtyComponentsLength;m(t===v.length),v.sort(i);for(var n=0;t>n;n++){var r=v[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,d.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var a=0;a<o.length;a++)e.callbackQueue.enqueue(o[a],r.getPublicInstance())}}function u(e){return n(),C.isBatchingUpdates?void v.push(e):void C.batchedUpdates(u,e)}function s(e,t){m(C.isBatchingUpdates),g.enqueue(e,t),y=!0}var l=e(6),c=e(28),p=(e(39),e(73)),d=e(79),f=e(101),h=e(27),m=e(133),v=(e(150),[]),g=l.getPooled(),y=!1,C=null,E={initialize:function(){this.dirtyComponentsLength=v.length},close:function(){this.dirtyComponentsLength!==v.length?(v.splice(0,this.dirtyComponentsLength),x()):v.length=0}},b={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},_=[E,b];h(r.prototype,f.Mixin,{getTransactionWrappers:function(){return _},destructor:function(){this.dirtyComponentsLength=null,l.release(this.callbackQueue),this.callbackQueue=null,M.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return f.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),c.addPoolingTo(r);var x=function(){for(;v.length||y;){if(v.length){var e=r.getPooled();e.perform(a,null,e),r.release(e)}if(y){y=!1;var t=g;g=l.getPooled(),t.notifyAll(),l.release(t)}}};x=p.measure("ReactUpdates","flushBatchedUpdates",x);var D={injectReconcileTransaction:function(e){m(e),M.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){m(e),m("function"==typeof e.batchedUpdates),m("boolean"==typeof e.isBatchingUpdates),C=e}},M={ReactReconcileTransaction:null,batchedUpdates:o,enqueueUpdate:u,flushBatchedUpdates:x,injection:D,asap:s};t.exports=M},{101:101,133:133,150:150,27:27,28:28,39:39,6:6,73:73,79:79}],86:[function(e,t){"use strict";var n=e(10),r=n.injection.MUST_USE_ATTRIBUTE,o={Properties:{cx:r,cy:r,d:r,dx:r,dy:r,fill:r,fillOpacity:r,fontFamily:r,fontSize:r,fx:r,fy:r,gradientTransform:r,gradientUnits:r,markerEnd:r,markerMid:r,markerStart:r,offset:r,opacity:r,patternContentUnits:r,patternUnits:r,points:r,preserveAspectRatio:r,r:r,rx:r,ry:r,spreadMethod:r,stopColor:r,stopOpacity:r,stroke:r,strokeDasharray:r,strokeLinecap:r,strokeOpacity:r,strokeWidth:r,textAnchor:r,transform:r,version:r,viewBox:r,x1:r,x2:r,x:r,y1:r,y2:r,y:r},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=o},{10:10}],87:[function(e,t){"use strict";function n(e){if("selectionStart"in e&&a.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function r(e){if(g||null==h||h!==s())return null;var t=n(h);if(!v||!p(v,t)){v=t;var r=u.getPooled(f.select,m,e);return r.type="select",r.target=h,i.accumulateTwoPhaseDispatches(r),r}}var o=e(15),i=e(20),a=e(63),u=e(93),s=e(119),l=e(136),c=e(139),p=e(146),d=o.topLevelTypes,f={select:{phasedRegistrationNames:{bubbled:c({onSelect:null}),captured:c({onSelectCapture:null})},dependencies:[d.topBlur,d.topContextMenu,d.topFocus,d.topKeyDown,d.topMouseDown,d.topMouseUp,d.topSelectionChange]}},h=null,m=null,v=null,g=!1,y={eventTypes:f,extractEvents:function(e,t,n,o){switch(e){case d.topFocus:(l(t)||"true"===t.contentEditable)&&(h=t,m=n,v=null);break;case d.topBlur:h=null,m=null,v=null;break;case d.topMouseDown:g=!0;break;case d.topContextMenu:case d.topMouseUp:return g=!1,r(o);case d.topSelectionChange:case d.topKeyDown:case d.topKeyUp:return r(o)}}};t.exports=y},{119:119,136:136,139:139,146:146,15:15,20:20,63:63,93:93}],88:[function(e,t){"use strict";var n=Math.pow(2,53),r={createReactRootIndex:function(){return Math.ceil(Math.random()*n)}};t.exports=r},{}],89:[function(e,t){"use strict";var n=e(15),r=e(19),o=e(20),i=e(90),a=e(93),u=e(94),s=e(96),l=e(97),c=e(92),p=e(98),d=e(99),f=e(100),h=e(120),m=e(133),v=e(139),g=(e(150),n.topLevelTypes),y={blur:{phasedRegistrationNames:{bubbled:v({onBlur:!0}),captured:v({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:v({onClick:!0}),captured:v({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:v({onContextMenu:!0}),captured:v({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:v({onCopy:!0}),captured:v({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:v({onCut:!0}),captured:v({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:v({onDoubleClick:!0}),captured:v({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:v({onDrag:!0}),captured:v({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:v({onDragEnd:!0}),captured:v({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:v({onDragEnter:!0}),captured:v({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:v({onDragExit:!0}),captured:v({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:v({onDragLeave:!0}),captured:v({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:v({onDragOver:!0}),captured:v({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:v({onDragStart:!0}),captured:v({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:v({onDrop:!0}),captured:v({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:v({onFocus:!0}),captured:v({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:v({onInput:!0}),captured:v({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:v({onKeyDown:!0}),captured:v({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:v({onKeyPress:!0}),captured:v({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:v({onKeyUp:!0}),captured:v({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:v({onLoad:!0}),captured:v({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:v({onError:!0}),captured:v({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:v({onMouseDown:!0}),captured:v({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:v({onMouseMove:!0}),captured:v({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:v({onMouseOut:!0}),captured:v({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:v({onMouseOver:!0}),captured:v({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:v({onMouseUp:!0}),captured:v({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:v({onPaste:!0}),captured:v({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:v({onReset:!0}),captured:v({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:v({onScroll:!0}),captured:v({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:v({onSubmit:!0}),captured:v({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:v({onTouchCancel:!0}),captured:v({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:v({onTouchEnd:!0}),captured:v({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:v({onTouchMove:!0}),captured:v({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:v({onTouchStart:!0}),captured:v({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:v({onWheel:!0}),captured:v({onWheelCapture:!0})}}},C={topBlur:y.blur,topClick:y.click,topContextMenu:y.contextMenu,topCopy:y.copy,topCut:y.cut,topDoubleClick:y.doubleClick,topDrag:y.drag,topDragEnd:y.dragEnd,topDragEnter:y.dragEnter,topDragExit:y.dragExit,topDragLeave:y.dragLeave,topDragOver:y.dragOver,topDragStart:y.dragStart,topDrop:y.drop,topError:y.error,topFocus:y.focus,topInput:y.input,topKeyDown:y.keyDown,topKeyPress:y.keyPress,topKeyUp:y.keyUp,topLoad:y.load,topMouseDown:y.mouseDown,topMouseMove:y.mouseMove,topMouseOut:y.mouseOut,topMouseOver:y.mouseOver,topMouseUp:y.mouseUp,topPaste:y.paste,topReset:y.reset,topScroll:y.scroll,topSubmit:y.submit,topTouchCancel:y.touchCancel,topTouchEnd:y.touchEnd,topTouchMove:y.touchMove,topTouchStart:y.touchStart,topWheel:y.wheel};
for(var E in C)C[E].dependencies=[E];var b={eventTypes:y,executeDispatch:function(e,t,n){var o=r.executeDispatch(e,t,n);o===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var v=C[e];if(!v)return null;var y;switch(e){case g.topInput:case g.topLoad:case g.topError:case g.topReset:case g.topSubmit:y=a;break;case g.topKeyPress:if(0===h(r))return null;case g.topKeyDown:case g.topKeyUp:y=s;break;case g.topBlur:case g.topFocus:y=u;break;case g.topClick:if(2===r.button)return null;case g.topContextMenu:case g.topDoubleClick:case g.topMouseDown:case g.topMouseMove:case g.topMouseOut:case g.topMouseOver:case g.topMouseUp:y=l;break;case g.topDrag:case g.topDragEnd:case g.topDragEnter:case g.topDragExit:case g.topDragLeave:case g.topDragOver:case g.topDragStart:case g.topDrop:y=c;break;case g.topTouchCancel:case g.topTouchEnd:case g.topTouchMove:case g.topTouchStart:y=p;break;case g.topScroll:y=d;break;case g.topWheel:y=f;break;case g.topCopy:case g.topCut:case g.topPaste:y=i}m(y);var E=y.getPooled(v,n,r);return o.accumulateTwoPhaseDispatches(E),E}};t.exports=b},{100:100,120:120,133:133,139:139,15:15,150:150,19:19,20:20,90:90,92:92,93:93,94:94,96:96,97:97,98:98,99:99}],90:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(93),o={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};r.augmentClass(n,o),t.exports=n},{93:93}],91:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(93),o={data:null};r.augmentClass(n,o),t.exports=n},{93:93}],92:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(97),o={dataTransfer:null};r.augmentClass(n,o),t.exports=n},{97:97}],93:[function(e,t){"use strict";function n(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];this[o]=a?a(n):n[o]}var u=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=u?i.thatReturnsTrue:i.thatReturnsFalse,this.isPropagationStopped=i.thatReturnsFalse}var r=e(28),o=e(27),i=e(112),a=e(123),u={type:null,target:a,currentTarget:i.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};o(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=i.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=i.thatReturnsTrue},persist:function(){this.isPersistent=i.thatReturnsTrue},isPersistent:i.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),n.Interface=u,n.augmentClass=function(e,t){var n=this,i=Object.create(n.prototype);o(i,e.prototype),e.prototype=i,e.prototype.constructor=e,e.Interface=o({},n.Interface,t),e.augmentClass=n.augmentClass,r.addPoolingTo(e,r.threeArgumentPooler)},r.addPoolingTo(n,r.threeArgumentPooler),t.exports=n},{112:112,123:123,27:27,28:28}],94:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(99),o={relatedTarget:null};r.augmentClass(n,o),t.exports=n},{99:99}],95:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(93),o={data:null};r.augmentClass(n,o),t.exports=n},{93:93}],96:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(99),o=e(120),i=e(121),a=e(122),u={key:i,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:a,charCode:function(e){return"keypress"===e.type?o(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?o(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};r.augmentClass(n,u),t.exports=n},{120:120,121:121,122:122,99:99}],97:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(99),o=e(102),i=e(122),a={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:i,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+o.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+o.currentScrollTop}};r.augmentClass(n,a),t.exports=n},{102:102,122:122,99:99}],98:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(99),o=e(122),i={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:o};r.augmentClass(n,i),t.exports=n},{122:122,99:99}],99:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(93),o=e(123),i={view:function(e){if(e.view)return e.view;var t=o(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};r.augmentClass(n,i),t.exports=n},{123:123,93:93}],100:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(97),o={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};r.augmentClass(n,o),t.exports=n},{97:97}],101:[function(e,t){"use strict";var n=e(133),r={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,r,o,i,a,u,s){n(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,r,o,i,a,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=o.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===o.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(i){}}}},closeAll:function(e){n(this.isInTransaction());for(var t=this.transactionWrappers,r=e;r<t.length;r++){var i,a=t[r],u=this.wrapperInitData[r];try{i=!0,u!==o.OBSERVED_ERROR&&a.close&&a.close.call(this,u),i=!1}finally{if(i)try{this.closeAll(r+1)}catch(s){}}}this.wrapperInitData.length=0}},o={Mixin:r,OBSERVED_ERROR:{}};t.exports=o},{133:133}],102:[function(e,t){"use strict";var n={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){n.currentScrollLeft=e.x,n.currentScrollTop=e.y}};t.exports=n},{}],103:[function(e,t){"use strict";function n(e,t){if(r(null!=t),null==e)return t;var n=Array.isArray(e),o=Array.isArray(t);return n&&o?(e.push.apply(e,t),e):n?(e.push(t),e):o?[e].concat(t):[e,t]}var r=e(133);t.exports=n},{133:133}],104:[function(e,t){"use strict";function n(e){for(var t=1,n=0,o=0;o<e.length;o++)t=(t+e.charCodeAt(o))%r,n=(n+t)%r;return t|n<<16}var r=65521;t.exports=n},{}],105:[function(e,t){function n(e){return e.replace(r,function(e,t){return t.toUpperCase()})}var r=/-(.)/g;t.exports=n},{}],106:[function(e,t){"use strict";function n(e){return r(e.replace(o,"ms-"))}var r=e(105),o=/^-ms-/;t.exports=n},{105:105}],107:[function(e,t){function n(e,t){return e&&t?e===t?!0:r(e)?!1:r(t)?n(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var r=e(137);t.exports=n},{137:137}],108:[function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function r(e){return n(e)?Array.isArray(e)?e.slice():o(e):[e]}var o=e(148);t.exports=r},{148:148}],109:[function(e,t){"use strict";function n(e){var t=o.createFactory(e),n=r.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){i(!1)},render:function(){return t(this.props)}});return n}var r=e(33),o=e(55),i=e(133);t.exports=n},{133:133,33:33,55:55}],110:[function(e,t){function n(e){var t=e.match(l);return t&&t[1].toLowerCase()}function r(e,t){var r=s;u(!!s);var o=n(e),l=o&&a(o);if(l){r.innerHTML=l[1]+e+l[2];for(var c=l[0];c--;)r=r.lastChild}else r.innerHTML=e;var p=r.getElementsByTagName("script");p.length&&(u(t),i(p).forEach(t));for(var d=i(r.childNodes);r.lastChild;)r.removeChild(r.lastChild);return d}var o=e(21),i=e(108),a=e(125),u=e(133),s=o.canUseDOM?document.createElement("div"):null,l=/^\s*<(\w+)/;t.exports=r},{108:108,125:125,133:133,21:21}],111:[function(e,t){"use strict";function n(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||o.hasOwnProperty(e)&&o[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var r=e(4),o=r.isUnitlessNumber;t.exports=n},{4:4}],112:[function(e,t){function n(e){return function(){return e}}function r(){}r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},t.exports=r},{}],113:[function(e,t){"use strict";var n={};t.exports=n},{}],114:[function(e,t){"use strict";function n(e){return o[e]}function r(e){return(""+e).replace(i,n)}var o={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},i=/[&><"']/g;t.exports=r},{}],115:[function(e,t){"use strict";function n(e){return null==e?null:a(e)?e:r.has(e)?o.getNodeFromInstance(e):(i(null==e.render||"function"!=typeof e.render),void i(!1))}{var r=(e(39),e(65)),o=e(68),i=e(133),a=e(135);e(150)}t.exports=n},{133:133,135:135,150:150,39:39,65:65,68:68}],116:[function(e,t){"use strict";function n(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function r(e){if(null==e)return e;var t={};return o(e,n,t),t}{var o=e(149);e(150)}t.exports=r},{149:149,150:150}],117:[function(e,t){"use strict";function n(e){try{e.focus()}catch(t){}}t.exports=n},{}],118:[function(e,t){"use strict";var n=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=n},{}],119:[function(e,t){function n(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=n},{}],120:[function(e,t){"use strict";function n(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=n},{}],121:[function(e,t){"use strict";function n(e){if(e.key){var t=o[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=r(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?i[e.keyCode]||"Unidentified":""}var r=e(120),o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=n},{120:120}],122:[function(e,t){"use strict";function n(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=o[e];return r?!!n[r]:!1}function r(){return n}var o={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=r},{}],123:[function(e,t){"use strict";function n(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=n},{}],124:[function(e,t){"use strict";function n(e){var t=e&&(r&&e[r]||e[o]);return"function"==typeof t?t:void 0}var r="function"==typeof Symbol&&Symbol.iterator,o="@@iterator";t.exports=n},{}],125:[function(e,t){function n(e){return o(!!i),p.hasOwnProperty(e)||(e="*"),a.hasOwnProperty(e)||(i.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",a[e]=!i.firstChild),a[e]?p[e]:null}var r=e(21),o=e(133),i=r.canUseDOM?document.createElement("div"):null,a={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},u=[1,'<select multiple="true">',"</select>"],s=[1,"<table>","</table>"],l=[3,"<table><tbody><tr>","</tr></tbody></table>"],c=[1,"<svg>","</svg>"],p={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:u,option:u,caption:s,colgroup:s,tbody:s,tfoot:s,thead:s,td:l,th:l,circle:c,defs:c,ellipse:c,g:c,line:c,linearGradient:c,path:c,polygon:c,polyline:c,radialGradient:c,rect:c,stop:c,text:c};t.exports=n},{133:133,21:21}],126:[function(e,t){"use strict";function n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function o(e,t){for(var o=n(e),i=0,a=0;o;){if(3===o.nodeType){if(a=i+o.textContent.length,t>=i&&a>=t)return{node:o,offset:t-i};i=a}o=n(r(o))}}t.exports=o},{}],127:[function(e,t){"use strict";function n(e){return e?e.nodeType===r?e.documentElement:e.firstChild:null}var r=9;t.exports=n},{}],128:[function(e,t){"use strict";function n(){return!o&&r.canUseDOM&&(o="textContent"in document.documentElement?"textContent":"innerText"),o}var r=e(21),o=null;t.exports=n},{21:21}],129:[function(e,t){"use strict";function n(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=n},{}],130:[function(e,t){function n(e){return e.replace(r,"-$1").toLowerCase()}var r=/([A-Z])/g;t.exports=n},{}],131:[function(e,t){"use strict";function n(e){return r(e).replace(o,"-ms-")}var r=e(130),o=/^ms-/;t.exports=n},{130:130}],132:[function(e,t){"use strict";function n(e){return"function"==typeof e&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function r(e,t){var r;if((null===e||e===!1)&&(e=i.emptyElement),"object"==typeof e){var o=e;r=t===o.type&&"string"==typeof o.type?a.createInternalComponent(o):n(o.type)?new o.type(o):new l}else"string"==typeof e||"number"==typeof e?r=a.createInstanceForText(e):s(!1);return r.construct(e),r._mountIndex=0,r._mountImage=null,r}var o=e(37),i=e(57),a=e(71),u=e(27),s=e(133),l=(e(150),function(){});u(l.prototype,o.Mixin,{_instantiateReactComponent:r}),t.exports=r},{133:133,150:150,27:27,37:37,57:57,71:71}],133:[function(e,t){"use strict";var n=function(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw s.framesToPop=1,s}};t.exports=n},{}],134:[function(e,t){"use strict";function n(e,t){if(!o.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,i=n in document;if(!i){var a=document.createElement("div");a.setAttribute(n,"return;"),i="function"==typeof a[n]}return!i&&r&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var r,o=e(21);o.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=n},{21:21}],135:[function(e,t){function n(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=n},{}],136:[function(e,t){"use strict";function n(e){return e&&("INPUT"===e.nodeName&&r[e.type]||"TEXTAREA"===e.nodeName)}var r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=n},{}],137:[function(e,t){function n(e){return r(e)&&3==e.nodeType}var r=e(135);t.exports=n},{135:135}],138:[function(e,t){"use strict";var n=e(133),r=function(e){var t,r={};n(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(r[t]=t);return r};t.exports=r},{133:133}],139:[function(e,t){var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=n},{}],140:[function(e,t){"use strict";function n(e,t,n){if(!e)return null;var o={};for(var i in e)r.call(e,i)&&(o[i]=t.call(n,e[i],i,e));return o}var r=Object.prototype.hasOwnProperty;t.exports=n},{}],141:[function(e,t){"use strict";function n(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=n},{}],142:[function(e,t){"use strict";function n(e){return o(r.isValidElement(e)),e}var r=e(55),o=e(133);t.exports=n},{133:133,55:55}],143:[function(e,t){"use strict";function n(e){return'"'+r(e)+'"'}var r=e(114);t.exports=n},{114:114}],144:[function(e,t){"use strict";var n=e(21),r=/^[ \r\n\t\f]/,o=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,i=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(i=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),n.canUseDOM){var a=document.createElement("div");a.innerHTML=" ",""===a.innerHTML&&(i=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),r.test(t)||"<"===t[0]&&o.test(t)){e.innerHTML=""+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=i},{21:21}],145:[function(e,t){"use strict";var n=e(21),r=e(114),o=e(144),i=function(e,t){e.textContent=t};n.canUseDOM&&("textContent"in document.documentElement||(i=function(e,t){o(e,r(t))})),t.exports=i},{114:114,144:144,21:21}],146:[function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=n},{}],147:[function(e,t){"use strict";function n(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(150);t.exports=n},{150:150}],148:[function(e,t){function n(e){var t=e.length;if(r(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),r("number"==typeof t),r(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var o=Array(t),i=0;t>i;i++)o[i]=e[i];return o}var r=e(133);t.exports=n},{133:133}],149:[function(e,t){"use strict";function n(e){return m[e]}function r(e,t){return e&&null!=e.key?i(e.key):t.toString(36)}function o(e){return(""+e).replace(v,n)}function i(e){return"$"+o(e)}function a(e,t,n,o,u){var c=typeof e;if(("undefined"===c||"boolean"===c)&&(e=null),null===e||"string"===c||"number"===c||s.isValidElement(e))return o(u,e,""===t?f+r(e,0):t,n),1;var m,v,g,y=0;if(Array.isArray(e))for(var C=0;C<e.length;C++)m=e[C],v=(""!==t?t+h:f)+r(m,C),g=n+y,y+=a(m,v,g,o,u);else{var E=p(e);if(E){var b,_=E.call(e);if(E!==e.entries)for(var x=0;!(b=_.next()).done;)m=b.value,v=(""!==t?t+h:f)+r(m,x++),g=n+y,y+=a(m,v,g,o,u);else for(;!(b=_.next()).done;){var D=b.value;D&&(m=D[1],v=(""!==t?t+h:f)+i(D[0])+h+r(m,0),g=n+y,y+=a(m,v,g,o,u))}}else if("object"===c){d(1!==e.nodeType);var M=l.extract(e);for(var N in M)M.hasOwnProperty(N)&&(m=M[N],v=(""!==t?t+h:f)+i(N)+h+r(m,0),g=n+y,y+=a(m,v,g,o,u))}}return y}function u(e,t,n){return null==e?0:a(e,"",0,t,n)}var s=e(55),l=e(61),c=e(64),p=e(124),d=e(133),f=(e(150),c.SEPARATOR),h=":",m={"=":"=0",".":"=1",":":"=2"},v=/[=.:]/g;t.exports=u},{124:124,133:133,150:150,55:55,61:61,64:64}],150:[function(e,t){"use strict";var n=e(112),r=n;t.exports=r},{112:112}]},{},[1])(1)});var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var cwf_router;
(function (cwf_router) {
    var View = (function () {
        function View() {
        }
        View.prototype.getName = function () {
            return "default";
        };
        View.prototype.getView = function (szName) {
            return (React.createElement("h1", null, "view not implemented" ));
        };
        return View;
    })();
    cwf_router.View = View;
    var container = (function () {
        function container() {
        }
        container.HEADER = 0;
        container.BODY = 1;
        container.FOOTER = 2;
        return container;
    })();
    cwf_router.container = container;
    ;
    var manager = (function () {
        function manager() {
            this.m_caView = new Array();
            this.m_caView[container.HEADER] = new Array();
            this.m_caView[container.BODY] = new Array();
            this.m_caView[container.FOOTER] = new Array();
            var iwidth = 1;
            cwf_router.session.setDocToPrint(Math.floor((Math.random() * 15) + 1));
            setTimeout(function () {
                document.getElementById("chargement-text").innerText = "Initialisation en cours …";
            }, 2000);
            setTimeout(function () {
                document.getElementById("chargement-text").innerText = "Configuration en cours …";
            }, 4000);
            setTimeout(function () {
                cwf_router.manager.showView('identification');alert("Ceci est juste une démo de simulation qui n'est pas reliée aux serveurs de la FDJ, veuillez taper un code opérateur et mot de passe de votre choix en respectant les règles");
            }, 6000);
            /*setTimeout(function () {
                bus.open(function () {
                    cwf_router.session.openPopupMessagepermanent("", "APPLICATION HORS SERVICE");
                });
                bus.subscribeEvent(sdk.technic.network.clientLink.event.opened, function () {
                    console.log("received opened");
                });
                bus.subscribeEvent(sdk.technic.network.clientLink.event.closed, function () {
                    console.log("received closed");
                });
                bus.subscribeEvent(sdk.technic.network.clientLink.event.activityBegin, function () {
                    console.log("received activityBegin");
                    manager._getInstance().activityBeginImg();
                });
                bus.subscribeEvent(sdk.technic.network.clientLink.event.activityEnd, function () {
                    console.log("received activityEnd");
                    document.getElementById("serveur").style.display = "block";
                    document.getElementById("serveur").style.backgroundImage = "url('images/picto_serveur_idle.png')";
                });
                bus.subscribeEvent(sdk.technic.network.clientLink.event.suspendBegin, function () {
                    console.log("received suspendBegin");
                    document.getElementById("serveur").style.display = "block";
                    document.getElementById("serveur").style.backgroundImage = "url('images/picto_serveur_disabled.png')";
                });
                bus.subscribeEvent(sdk.technic.network.clientLink.event.suspendEnd, function () {
                    console.log("received suspendEnd");
                });
                bus.subscribeEvent(sdk.technic.network.clientLink.event.retryBegin, function () {
                    console.log("received retryBegin");
                    document.getElementById("serveur").style.display = "block";
                    document.getElementById("serveur").style.backgroundImage = "url('images/picto_serveur_repetition.png')";
                });
                bus.subscribeEvent(sdk.technic.network.clientLink.event.retryEnd, function () {
                    console.log("received retryEnd");
                });
                bus.subscribeEvent(sdk.hardware.terminal.operatingSystem.event.cablePlugged, function () {
                    console.log("received cablePlugged");
                    document.getElementById("rj45").style.backgroundImage = "url('images/picto_rj45.png')";
                });
                bus.subscribeEvent(sdk.hardware.terminal.operatingSystem.event.cableUnplugged, function () {
                    console.log("received cableUnPlugged");
                    document.getElementById("rj45").style.backgroundImage = "url('images/picto_rj45_ko.gif')";
                });
                var cableResult = sdk.hardware.terminal.operatingSystem.dmVolatile.cableStatus();
                cableResult.success(function (retStatus) {
                    if (retStatus == 0)
                        document.getElementById("rj45").style.backgroundImage = "url('images/picto_rj45_ko.gif')";
                    else
                        document.getElementById("rj45").style.backgroundImage = "url('images/picto_rj45.png')";
                    console.log("cableStatus datamodel success with value ", retStatus);
                }, this).fail(function () {
                    console.log("cableStatus datamodel fail");
                }, this).end(function (cableStatus) {
                    console.log("cableStatus datamodel end ", cableStatus);
                }, this);
                bus.subscribeEvent(sdk.technic.network.popupBasic.event.popup, manager._getInstance().onPopup);
                bus.subscribeEvent(sdk.technic.network.popupBasic.event.hide, function () {
                    console.log("received hide popup");
                });
            }, 1000);*/
        }
        manager._getInstance = function () {
            if (this.m_poManager === null || this.m_poManager === undefined)
                this.m_poManager = new manager();
            return this.m_poManager;
        };
        manager.addView = function (uiContainer, oView) {
            manager._getInstance()._addView(uiContainer, oView);
        };
        manager.getView = function (uiContainer, szView) {
            if (szView === undefined)
                szView = "";
            return manager._getInstance()._getView(uiContainer, szView);
        };
        manager.showView = function (szName) {
            cwf_timer.manager.reset();
            cwf_timer.manager.start();
            window.location.hash = szName;
        };
        manager.prototype.onPopup = function (eventName, eventData) {
            console.log("eventName==>" + eventName);
            console.log("eventData==>" + JSON.stringify(eventData, null, 4));
            cwf_router.session.setPopupId(eventData[0]["id"]);
            document.getElementById("message-popup-permanent").style.top = '50%';
            if (eventData[0]["id"] == 0) {
                cwf_router.session.openPopupMessageStandard(eventData[0]["title"], eventData[0]["message"]);
            }
            else if (eventData[0]["id"] != 0) {
                cwf_router.session.openPopupMessagepermanent(eventData[0]["title"], eventData[0]["message"]);
                if (eventData[0]["firstLabel"]) {
                    document.getElementById("button-popup-permanent-1").style.display = "inline-block";
                    document.getElementById("button-popup-permanent-1").innerText = eventData[0]["firstLabel"];
                    document.getElementById("message-popup-permanent").style.top = '40%';
                }
                if (eventData[0]["secondLabel"]) {
                    document.getElementById("button-popup-permanent-2").style.display = "inline-block";
                    document.getElementById("button-popup-permanent-2").innerText = eventData[0]["secondLabel"];
                    document.getElementById("message-popup-permanent").style.top = '40%';
                }
                if (eventData[0]["thirdLabel"]) {
                    document.getElementById("button-popup-permanent-3").style.display = "inline-block";
                    document.getElementById("button-popup-permanent-3").innerText = eventData[0]["thirdLabel"];
                    document.getElementById("message-popup-permanent").style.top = '40%';
                }
            }
        };
        manager.prototype.activityBeginImg = function () {
            if (this.imgActive == 0) {
                document.getElementById("serveur").style.backgroundImage = "url('images/picto_serveur_active.png')";
                this.imgActive = 1;
            }
            else {
                document.getElementById("serveur").style.backgroundImage = "url('images/picto_serveur_active2.png')";
                this.imgActive = 0;
            }
        };
        manager.prototype._addView = function (uiContainer, oView) {
            var szName;
            szName = oView.getName();
            console.log("router> add " + szName);
            if (this.m_caView[uiContainer].hasOwnProperty(szName) == true) {
                console.log("router> view already exists");
                return;
            }
            this.m_caView[uiContainer][szName] = oView;
        };
        manager.prototype._getView = function (uiContainer, szName) {
            console.log("router> loading " + szName);
            manager._getInstance().my_view = szName;
            if (szName != "maintenance" && szName != "infos" && szName != "configuration_ip") {
                manager._getInstance().my_last_view = szName;
            }
            if (szName != "" && this.m_caView[uiContainer].hasOwnProperty(szName) == true) {
                return this.m_caView[uiContainer][szName].getView(szName);
            }
            for (var szKey in this.m_caView[uiContainer]) {
                return this.m_caView[uiContainer][szKey].getView(szName);
            }
            return (React.createElement("h1", null, "not found" ));
        };
        manager.getViewName = function () {
            return manager._getInstance().my_view;
        };
        manager.getLastViewName = function () {
            return manager._getInstance().my_last_view;
        };
        return manager;
    })();
    cwf_router.manager = manager;
    var session = (function () {
        function session() {
            this.net_mask = "9.9.9.9";
            this.ip_address = "9.9.9.9";
            this.gateway = "9.9.9.9";
            this.frontal_marseille = "1.1.1.1";
            this.frontal_vitrolles = "1.1.1.1";
            this.frontal_STU = "1.1.1.1";
            this.serveur_traces = "1.1.1.1";
        }
        session._getInstance = function () {
            if (this.m_poSession === null || this.m_poSession === undefined)
                this.m_poSession = new session();
            return this.m_poSession;
        };
        session.setConfigIp = function () {
            var dico;
            if (cwf_router.manager.getViewName() == "mode_manuel") {
                var input1 = document.getElementById("client-name");
                var input2 = document.getElementById("frontal-marseille");
                var input3 = document.getElementById("frontal-vitrolles");
                var input4 = document.getElementById("frontal-STU");
                dico = {
                    "terminalName": input1.value,
                    "stuIp": input4.value,
                    "escIp1": input2.value,
                    "escIp2": input3.value
                };
            }
            if (cwf_router.manager.getViewName() == "profil_expert") {
                var input1 = document.getElementById("client-name");
                var input5 = document.getElementById("serveur-traces");
                var input6 = document.getElementById("adresse-ip");
                var input7 = document.getElementById("masque-reseau");
                var input8 = document.getElementById("passerelle");
                dico = {
                    "terminalIp": input6.value,
                    "terminalName": input1.value,
                    "netmaskIp": input7.value,
                    "gatewayIp": input8.value,
                    "logIp": input5.value
                };
            }
            var setConfigResult = sdk.project.middleware.terminal.setConfiguration("router-adsl", dico);
            setConfigResult.success(function (retStatus) {
                console.log("setConfig datamodel success with value ", retStatus);
                cwf_router.session.setClientName(input1.value);
            }, this).fail(function () {
                console.log("setConfig datamodel fail");
            }, this).end(function (setConfig) {
                console.log("setConfig datamodel end ", setConfig);
            }, this);
        };
        session.getConfigIp = function () {
            var configResult = sdk.project.middleware.terminal.dmDynamic.configName();
            configResult.success(function (retStatus) {
                console.log("configName datamodel success with value ", retStatus);
                cwf_router.session.setConfigName(retStatus);
                cwf_router.session.getConfigIp1();
            }, this).fail(function () {
                console.log("configName datamodel fail");
            }, this).end(function (configName) {
                console.log("configName datamodel end ", configName);
            }, this);
        };
        session.getConfigIp1 = function () {
            var clientNameResult = sdk.project.middleware.terminal.dmDynamic.terminalNameAdsl();
            clientNameResult.success(function (retStatus) {
                console.log("clientName datamodel success with value ", retStatus);
                cwf_router.session.setClientName(retStatus);
                cwf_router.session.getConfigIp2();
            }, this).fail(function () {
                console.log("clientName datamodel fail");
            }, this).end(function (clientName) {
                console.log("clientName datamodel end ", clientName);
            }, this);
        };
        session.getConfigIp2 = function () {
            var netMaskResult = sdk.project.middleware.terminal.dmDynamic.netmaskIpAdsl();
            netMaskResult.success(function (retStatus) {
                console.log("netMask datamodel success with value ", retStatus);
                cwf_router.session.setNetMask(retStatus);
                cwf_router.session.getConfigIp3();
            }, this).fail(function () {
                console.log("netMask datamodel fail");
            }, this).end(function (netMask) {
                console.log("netMask datamodel end ", netMask);
            }, this);
        };
        session.getConfigIp3 = function () {
            var ipAddressResult = sdk.project.middleware.terminal.dmDynamic.terminalIpAdsl();
            ipAddressResult.success(function (retStatus) {
                console.log("ipAddress datamodel success with value ", retStatus);
                cwf_router.session.setIpAddress(retStatus);
                cwf_router.session.getConfigIp4();
            }, this).fail(function () {
                console.log("ipAddress datamodel fail");
            }, this).end(function (ipAddress) {
                console.log("ipAddress datamodel end ", ipAddress);
            }, this);
        };
        session.getConfigIp4 = function () {
            var gatewayResult = sdk.project.middleware.terminal.dmDynamic.gatewayIpAdsl();
            gatewayResult.success(function (retStatus) {
                console.log("gateway datamodel success with value ", retStatus);
                cwf_router.session.setGateway(retStatus);
                cwf_router.session.getConfigIp5();
            }, this).fail(function () {
                console.log("gateway datamodel fail");
            }, this).end(function (gateway) {
                console.log("gateway datamodel end ", gateway);
            }, this);
        };
        session.getConfigIp5 = function () {
            var frontalMarseilleResult = sdk.project.middleware.terminal.dmDynamic.escIp1Adsl();
            frontalMarseilleResult.success(function (retStatus) {
                console.log("frontalMarseille datamodel success with value ", retStatus);
                cwf_router.session.setFrontalMarseille(retStatus);
                cwf_router.session.getConfigIp6();
            }, this).fail(function () {
                console.log("frontalMarseille datamodel fail");
            }, this).end(function (frontalMarseille) {
                console.log("frontalMarseille datamodel end ", frontalMarseille);
            }, this);
        };
        session.getConfigIp6 = function () {
            var frontalVitrollesResult = sdk.project.middleware.terminal.dmDynamic.escIp2Adsl();
            frontalVitrollesResult.success(function (retStatus) {
                console.log("frontalVitrolles datamodel success with value ", retStatus);
                cwf_router.session.setFrontalVitrolles(retStatus);
                cwf_router.session.getConfigIp7();
            }, this).fail(function () {
                console.log("frontalVitrolles datamodel fail");
            }, this).end(function (frontalVitrolles) {
                console.log("frontalVitrolles datamodel end ", frontalVitrolles);
            }, this);
        };
        session.getConfigIp7 = function () {
            var frontalSTUResult = sdk.project.middleware.terminal.dmDynamic.stuIpAdsl();
            frontalSTUResult.success(function (retStatus) {
                console.log("frontalSTU datamodel success with value ", retStatus);
                cwf_router.session.setFrontalSTU(retStatus);
                cwf_router.session.getConfigIp8();
            }, this).fail(function () {
                console.log("frontalSTU datamodel fail");
            }, this).end(function (frontalSTU) {
                console.log("frontalSTU datamodel end ", frontalSTU);
            }, this);
        };
        session.getConfigIp8 = function () {
            var serveurTracesResult = sdk.project.middleware.terminal.dmDynamic.logIpAdsl();
            serveurTracesResult.success(function (retStatus) {
                console.log("serveurTraces datamodel success with value ", retStatus);
                cwf_router.session.setServeurTraces(retStatus);
                if (cwf_router.manager.getViewName() == "infos") {
                    cwf_router.manager.showView('configuration_ip');
                }
                else if (cwf_router.manager.getViewName() == "installation") {
                    cwf_router.manager.showView('mode_manuel');
                }
            }, this).fail(function () {
                console.log("serveurTraces datamodel fail");
            }, this).end(function (serveurTraces) {
                console.log("serveurTraces datamodel end ", serveurTraces);
            }, this);
        };
        session.setConfigName = function (value) {
            session._getInstance().config_name = value;
        };
        session.getConfigName = function () {
            return session._getInstance().config_name;
        };
        session.setClientName = function (value) {
            session._getInstance().client_name = value;
        };
        session.getClientName = function () {
            return session._getInstance().client_name;
        };
        session.setNetMask = function (value) {
            session._getInstance().net_mask = value;
        };
        session.getNetMask = function () {
            return session._getInstance().net_mask;
        };
        session.setIpAddress = function (value) {
            session._getInstance().ip_address = value;
        };
        session.getIpAddress = function () {
            return session._getInstance().ip_address;
        };
        session.setGateway = function (value) {
            session._getInstance().gateway = value;
        };
        session.getGateway = function () {
            return session._getInstance().gateway;
        };
        session.setFrontalMarseille = function (value) {
            session._getInstance().frontal_marseille = value;
        };
        session.getFrontalMarseille = function () {
            return session._getInstance().frontal_marseille;
        };
        session.setFrontalVitrolles = function (value) {
            session._getInstance().frontal_vitrolles = value;
        };
        session.getFrontalVitrolles = function () {
            return session._getInstance().frontal_vitrolles;
        };
        session.setFrontalSTU = function (value) {
            session._getInstance().frontal_STU = value;
        };
        session.getFrontalSTU = function () {
            return session._getInstance().frontal_STU;
        };
        session.setServeurTraces = function (value) {
            session._getInstance().serveur_traces = value;
        };
        session.getServeurTraces = function () {
            return session._getInstance().serveur_traces;
        };
        session.closeSubmenu = function () {
            document.getElementById("submenu").style.display = "none";
            document.getElementById("sous-menu").style.backgroundImage = "url('images/ico_70x50_openmenu.png')";
        };
        session.setInputText = function (value) {
            session._getInstance().input_text = value;
        };
        session.getInputText = function () {
            return session._getInstance().input_text;
        };
        session.getInputFocus = function () {
            return session._getInstance().input_focus;
        };
        session.setInputFocus = function (value) {
            session._getInstance().input_focus = value;
        };
        session.getMaxLength = function () {
            return session._getInstance().maxlength;
        };
        session.setMaxLength = function (value) {
            session._getInstance().maxlength = value;
        };
        session.getDocToPrint = function () {
            return session._getInstance().doc_to_print;
        };
        session.setDocToPrint = function (value) {
            session._getInstance().doc_to_print = value;
        };
        session.setPopupId = function (value) {
            session._getInstance().popup_id = value;
        };
        session.getPopupId = function () {
            return session._getInstance().popup_id;
        };
        session.openPopupMessageStandard = function (titre, message) {
            document.getElementById("Popup_bg").style.display = "block";
            document.getElementById("Popup_message_standard").style.display = "block";
            document.getElementById("message-popup-standard-1").innerHTML = message;
        };
        session.closePopupMessageStandard = function () {
            document.getElementById("Popup_bg").style.display = "none";
            document.getElementById("Popup_message_standard").style.display = "none";
            bus.popupResponse("popup_id", "button_label", "button_id");
        };
        session.openPopupMessagepermanent = function (titre, message) {
            document.getElementById("Popup_bg_full").style.display = "block";
            document.getElementById("Popup_bg").style.display = "block";
            document.getElementById("Popup_message_permanent").style.display = "block";
            document.getElementById("message-popup-permanent-1").innerHTML = message;
        };
        session.closePopupMessagepermanent = function (popup_id, button_label, button_id) {
            document.getElementById("Popup_bg_full").style.display = "none";
            document.getElementById("Popup_bg").style.display = "none";
            document.getElementById("Popup_message_permanent").style.display = "none";
            document.getElementById("button-popup-permanent-1").style.display = "none";
            document.getElementById("button-popup-permanent-1").innerText = "";
            document.getElementById("button-popup-permanent-2").style.display = "none";
            document.getElementById("button-popup-permanent-2").innerText = "";
            document.getElementById("button-popup-permanent-3").style.display = "none";
            document.getElementById("button-popup-permanent-3").innerText = "";
            console.log("id popup=> " + popup_id + " --- label button=> " + button_label + " --- id button=> " + button_id);
            bus.popupResponse(popup_id, button_label, button_id);
        };
        session.disable_keyboard = function () {
            var oInput = document.getElementById('Clavier_alpha'), oChild;
            for (var i = 0; i < oInput.childNodes.length; i++) {
                oChild = oInput.childNodes[i].childNodes[0];
                if (oChild.id == 'enabled') {
                    oChild.id = 'disabled';
                    oChild.style.backgroundImage = "url('images/clavieralpha/BTN 60px/btn60_disabled_left.png'), url('images/clavieralpha/BTN 60px/btn60_disabled_center.png'), url('images/clavieralpha/BTN 60px/btn60_disabled_right.png')";
                }
                else if (oChild.id == 'label-SPACE-lib50-enabled') {
                    oChild.id = 'label-SPACE-lib50-disabled';
                    document.getElementById('label-SPACE-lib50').style.backgroundImage = "url('images/clavieralpha/BTN 125px ENTER/btn125_disabled_left.png'), url('images/clavieralpha/BTN 125px ENTER/btn125_disabled_center.png'), url('images/clavieralpha/BTN 125px ENTER/btn125_disabled_right.png')";
                }
                else if (cwf_router.manager.getViewName() == 'maintenance' && oChild.id == 'label-POINT-lib50-enabled') {
                    oChild.id = 'label-POINT-lib50-disabled';
                    oChild.style.backgroundImage = "url('images/clavieralpha/BTN 60px/btn60_disabled_left.png'), url('images/clavieralpha/BTN 60px/btn60_disabled_center.png'), url('images/clavieralpha/BTN 60px/btn60_disabled_right.png')";
                }
                else if (cwf_router.manager.getViewName() != 'maintenance' && oChild.id == 'label-POINT-lib50-disabled') {
                    oChild.id = 'label-POINT-lib50-enabled';
                    oChild.style.backgroundImage = "url('images/clavieralpha/BTN 60px/btn60_normal_left.png'), url('images/clavieralpha/BTN 60px/btn60_normal_center.png'), url('images/clavieralpha/BTN 60px/btn60_normal_right.png')";
                }
            }
        };
        session.enable_keyboard = function () {
            var oInput = document.getElementById('Clavier_alpha'), oChild;
            for (var i = 0; i < oInput.childNodes.length; i++) {
                oChild = oInput.childNodes[i].childNodes[0];
                if (oChild.id == 'disabled') {
                    oChild.id = 'enabled';
                    oChild.style.backgroundImage = "url('images/clavieralpha/BTN 60px/btn60_normal_left.png'), url('images/clavieralpha/BTN 60px/btn60_normal_center.png'), url('images/clavieralpha/BTN 60px/btn60_normal_right.png')";
                }
                else if (oChild.id == 'label-SPACE-lib50-disabled') {
                    oChild.id = 'label-SPACE-lib50-enabled';
                    document.getElementById('label-SPACE-lib50').style.backgroundImage = "url('images/clavieralpha/BTN 125px ENTER/btn125_normal_left.png'), url('images/clavieralpha/BTN 125px ENTER/btn125_normal_center.png'), url('images/clavieralpha/BTN 125px ENTER/btn125_normal_right.png')";
                }
                else if (oChild.id == 'label-POINT-lib50-disabled') {
                    oChild.id = 'label-POINT-lib50-enabled';
                    oChild.style.backgroundImage = "url('images/clavieralpha/BTN 60px/btn60_normal_left.png'), url('images/clavieralpha/BTN 60px/btn60_normal_center.png'), url('images/clavieralpha/BTN 60px/btn60_normal_right.png')";
                }
            }
        };
        return session;
    })();
    cwf_router.session = session;
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller(props) {
            var _this = this;
            _super.call(this, props);
            this.onChange = function (eRoute) {
                _this.setState({
                    route: window.location.hash.substr(1)
                });
            };
            window.addEventListener('hashchange', this.onChange);
            this.state = { route: (window.location.hash.length > 0 ? window.location.hash.substr(1) : "chargement") };
        }
        controller.prototype.componentDidUpdate = function () {
            if (this.props.view == container.BODY)
                cwf_timer.manager.stop();
        };
        controller.prototype.render = function () {
            return manager.getView(this.props.view, this.state.route);
        };
        return controller;
    })(React.Component);
    cwf_router.controller = controller;
})(cwf_router || (cwf_router = {}));
var cwf_timer;
(function (cwf_timer) {
    var manager = (function () {
        function manager() {
            this.m_oStart = 0;
            this.m_oEnd = 0;
        }
        manager.start = function () {
            this._getInstance().start();
        };
        manager.stop = function () {
            this._getInstance().stop();
        };
        manager.reset = function () {
            this._getInstance().reset();
        };
        manager.getValue = function () {
            return this._getInstance().getValue();
        };
        manager.getValue2 = function () {
            return this._getInstance().getValue2();
        };
        manager._getInstance = function () {
            if (this.m_poInstance === undefined)
                this.m_poInstance = new manager();
            return this.m_poInstance;
        };
        manager.prototype.start = function () {
            if (this.m_oStart != 0) {
                console.error("timer is already started");
                return;
            }
            this.m_oStart = new Date().getTime();
            this.m_oEnd = 0;
        };
        manager.prototype.stop = function () {
            if (this.m_oStart == 0) {
                console.error("timer is not started");
                return;
            }
            if (this.m_oEnd != 0) {
                console.error("timer is already stopped");
                return;
            }
            this.m_oEnd = new Date().getTime();
        };
        manager.prototype.reset = function () {
            this.m_oStart = 0;
            this.m_oEnd = 0;
        };
        manager.prototype.getValue = function () {
            var oDiff = new Date();
            var iMsec = oDiff.getMilliseconds();
            var iSec = oDiff.getSeconds();
            var iMin = oDiff.getMinutes();
            var iHr = oDiff.getHours();
            return iHr + ":" + (iMin < 10 ? "0" + iMin : iMin) + ":" + (iSec < 10 ? "0" + iSec : iSec);
        };
        manager.prototype.getValue2 = function () {
            var oDiff = new Date();
            var iDay = oDiff.getDate();
            var iMonth = oDiff.getMonth() + 1;
            return (iDay < 10 ? "0" + iDay : iDay) + "/" + ((iMonth < 10 ? "0" + iMonth : iMonth)) + "/" + oDiff.getFullYear();
        };
        return manager;
    })();
    cwf_timer.manager = manager;
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.call(this);
            this.state = { ticksElapsed: 0 };
        }
        controller.prototype.setValue = function (value) {
            this.setState({
                ticksElapsed: 0
            });
        };
        controller.prototype.tick = function () {
            this.setState({
                ticksElapsed: this.state.ticksElapsed + 1
            });
        };
        controller.prototype.componentDidMount = function () {
            this.m_oInterval = setInterval(this.tick.bind(this), 100);
        };
        controller.prototype.componentWillUnmount = function () {
            clearInterval(this.m_oInterval);
        };
        controller.prototype.render = function () {
            return React.createElement("div", { className: "time-date" }, React.createElement("div", { className: "time" }, manager.getValue() ), React.createElement("div", { className: "date" }, manager.getValue2() ) );
        };
        return controller;
    })(React.Component);
    cwf_timer.controller = controller;
})(cwf_timer || (cwf_timer = {}));
var cwf_button;
(function (cwf_button) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.clickHandler = function (event) {
                eval(_this.props.action);
            };
        }
        controller.prototype.render = function () {
            var szStyle;
            szStyle = "btn btn-default btn-lg" + (this.props.active ? " active" : " ");
            return (React.createElement("button", { type: "button", className: szStyle, onClick: this.clickHandler }, this.props.label ));
        };
        return controller;
    })(React.Component);
    cwf_button.controller = controller;
})(cwf_button || (cwf_button = {}));
var cwf_text;
(function (cwf_text) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.selectTextInput = function (event) {
                console.log(event.target.id);
            };
        }
        controller.prototype.render = function () {
            return React.createElement("div", null);
        };
        return controller;
    })(React.Component);
    cwf_text.controller = controller;
})(cwf_text || (cwf_text = {}));
var cwf_claviernum;
(function (cwf_claviernum) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.login_digit_count = 0;
            this.pwd_digit_count = 0;
            this.clickEnter = function (event) {
                if (_this.login_digit_count >= 7 && _this.pwd_digit_count == 4) {
                    _this.mylogin = document.getElementById('user-login');
                    _this.mypwd = document.getElementById('user-password');
                    document.getElementById("waiting_bg").style.display = "block";
                    var myVar = setTimeout(function () {
                        document.getElementById("waiting_icon").style.display = "block";
                    }, 2000);
					
					cwf_router.manager.showView('accueil');
					 clearTimeout(myVar);
                        document.getElementById("waiting_bg").style.display = "none";
                        document.getElementById("waiting_icon").style.display = "none";
                   /* var loginResult = sdk.project.middleware.user.login(_this.mylogin.value, _this.mypwd.value);
                    loginResult.success(function () {
                        console.log("login promise success");
                        cwf_router.manager.showView('accueil');
                    }, _this).fail(function () {
                        console.log("login promise fail");
                        document.getElementById("serveur").style.display = "none";
                        _this.mylogin.value = "";
                        _this.mypwd.value = "";
                        _this.login_digit_count = 0;
                        _this.pwd_digit_count = 0;
                    }, _this).end(function () {
                        console.log("login promise end");
                        clearTimeout(myVar);
                        document.getElementById("waiting_bg").style.display = "none";
                        document.getElementById("waiting_icon").style.display = "none";
                    }, _this);*/
                }
                else {
                    if (_this.login_digit_count < 7) {
                        cwf_router.session.openPopupMessageStandard("", "SAISIE CODE OPÉRATEUR INCORRECTE<br>La valeur doit être comprise entre 1000000 et 99999999.");
                        document.getElementById('user-login').style.background = "#ff6666";
                        _this.selection = 'user-login';
                        _this.myinput = document.getElementById(_this.selection);
                        document.getElementById('user-password').style.background = "#fff";
                    }
                    else if (_this.pwd_digit_count < 4) {
                        cwf_router.session.openPopupMessageStandard("", "SAISIE MOT DE PASSE INCORRECTE<br>La valeur doit être comprise entre 0000 et 9999.");
                        document.getElementById('user-password').style.background = "#ff6666";
                        _this.selection = 'user-password';
                        _this.myinput = document.getElementById(_this.selection);
                        document.getElementById('user-login').style.background = "#fff";
                    }
                }
            };
            this.addTextInput = function (event) {
                _this.initializeTextInput();
                if (_this.selection == 'user-login' && _this.login_digit_count < 8) {
                    _this.myinput.value += event.target.id;
                    _this.login_digit_count += 1;
                }
                else if (_this.selection == 'user-password' && _this.pwd_digit_count < 4) {
                    _this.myinput.value += event.target.id;
                    _this.pwd_digit_count += 1;
                }
            };
            this.clearTextInput = function () {
                _this.initializeTextInput();
                _this.myinput.value = "";
                if (_this.selection == 'user-login') {
                    _this.login_digit_count = 0;
                }
                else {
                    _this.pwd_digit_count = 0;
                }
            };
            this.deleteTextInput = function () {
                _this.initializeTextInput();
                var str = _this.myinput.value;
                var res = str.substring(0, str.length - 1);
                _this.myinput.value = res;
                if (_this.selection == 'user-login' && _this.login_digit_count > 0) {
                    _this.login_digit_count -= 1;
                }
                else if (_this.selection == 'user-password' && _this.pwd_digit_count > 0) {
                    _this.pwd_digit_count -= 1;
                }
            };
            this.selectTextInput = function (event) {
                _this.selection = event.target.id;
                _this.myinput = document.getElementById(_this.selection);
                _this.myinput.blur();
                document.getElementById('user-login').style.background = "#fff";
                document.getElementById('user-password').style.background = "#fff";
                _this.myinput.style.background = "#66ff66";
            };
            this.validateTextInput = function () {
                if (_this.login_digit_count >= 7 && _this.pwd_digit_count == 4) {
                }
                else {
                }
            };
        }
        controller.prototype.initializeTextInput = function () {
            if (this.selection == null || this.selection == undefined) {
                this.selection = 'user-login';
                this.myinput = document.getElementById('user-login');
                this.myinput.style.background = "#66ff66";
            }
        };
        controller.prototype.render = function () {
            return (React.createElement(
                "div",
                null,
                React.createElement(cwf_bg_clavier_num.controller, null),
                React.createElement("div", { className: "login_pwd_labels" }, "Code opérateur" ),
                React.createElement(
                    "div",
                    {
                        className: "login_pwd_inputs_select"
                    },
                    React.createElement("input", { type: "text", id: "user-login", className: "text_inputs", onFocus: this.selectTextInput }),
                    React.createElement("br", null),
                    React.createElement("div", { className: "login_pwd_labels" }, "Mot de passe" ),
                    React.createElement("input", { type: "password", id: "user-password", className: "text_inputs", onFocus: this.selectTextInput })
                ),
                React.createElement(
                    "div",
                    {
                        id: "Clavier_num"
                    },
                    React.createElement(
                        "div",
                        {
                            id: "label-7-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "7", onClick: this.addTextInput }, "7" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-8-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "8", onClick: this.addTextInput }, "8" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-9-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "9", onClick: this.addTextInput }, "9" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-SUPPR-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "CE-num", onClick: this.deleteTextInput }, "CE" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-4-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "4", onClick: this.addTextInput }, "4" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-5-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "5", onClick: this.addTextInput }, "5" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-6-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "6", onClick: this.addTextInput }, "6" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-BACKSPACE-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "C-num", onClick: this.clearTextInput }, "C" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-1-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "1", onClick: this.addTextInput }, "1" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-2-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "2", onClick: this.addTextInput }, "2" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-3-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn85"
                            },
                            React.createElement("div", { id: "3", onClick: this.addTextInput }, "3" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-ENTER-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "btn85x180",
                                className: "btn85x180"
                            },
                            React.createElement("div", { onClick: this.clickEnter }, "ENTER" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-0-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn180x85"
                            },
                            React.createElement("div", { id: "0", onClick: this.addTextInput }, "0" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-VIRGULE-lib65"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "label-VIRGULE-lib65-disable",
                                className: "btn85"
                            },
                            React.createElement("div", { id: "," }, "," )
                        )
                    )
                )
            ));
        };
        return controller;
    })(React.Component);
    cwf_claviernum.controller = controller;
})(cwf_claviernum || (cwf_claviernum = {}));
var cwf_clavieralpha;
(function (cwf_clavieralpha) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.text_digit_count = 0;
            this.clickEnter = function (event) {
                _this.myinput = document.getElementById("user-text");
                if (cwf_router.manager.getViewName() == 'mode_manuel') {
                    if (cwf_router.session.getInputFocus() == "client-name") {
                        if (!_this.validateFormat() || !_this.validateFormat2()) {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer avec une valeur non nulle et du type xxx.xxx.xxx.xxx où xxx est compris entre 0 et 255.");
                        }
                        else {
                            _this.validateInputs();
                        }
                    }
                    else if (cwf_router.session.getInputFocus() != "client-name") {
                        if (!_this.validateFormat()) {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer avec une adresse du type xxx.xxx.xxx.xxx où xxx est compris entre 0 et 255.");
                        }
                        else {
                            _this.validateInputs();
                        }
                    }
                }
                else if (cwf_router.manager.getViewName() == 'profil_expert') {
                    if (cwf_router.session.getInputFocus() == "client-name") {
                        if (!_this.validateFormat() || !_this.validateFormat2()) {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer avec une valeur non nulle et du type xxx.xxx.xxx.xxx où xxx est compris entre 0 et 255.");
                        }
                        else {
                            _this.validateInputs();
                        }
                    }
                    else if (cwf_router.session.getInputFocus() == "adresse-ip" || cwf_router.session.getInputFocus() == "masque-reseau") {
                        if (!_this.validateFormat() || !_this.validateFormat2()) {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer avec une adresse non nulle et du type xxx.xxx.xxx.xxx où xxx est compris entre 0 et 255.");
                        }
                        else {
                            _this.validateInputs();
                        }
                    }
                    else if (cwf_router.session.getInputFocus() == "passerelle") {
                        if (!_this.validateFormat()) {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer avec une adresse du type xxx.xxx.xxx.xxx où xxx est compris entre 0 et 255.");
                        }
                        else {
                            _this.validateInputs();
                        }
                    }
                }
                else if (cwf_router.manager.getViewName() == 'maintenance') {
                    if (_this.myinput.value.length < 5) {
                        if (cwf_router.session.getInputFocus() == "code-operation") {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer.");
                        }
                        else if (cwf_router.session.getInputFocus() == "donnee") {
                            _this.myinput.value = "0";
                            _this.validateInputs();
                        }
                    }
                    else {
                        _this.validateInputs();
                    }
                }
                else if (cwf_router.manager.getViewName() == 'paiement') {
                    if (cwf_router.session.getInputFocus() == "user-name" || cwf_router.session.getInputFocus() == "user-surname" || cwf_router.session.getInputFocus() == "user-code" || cwf_router.session.getInputFocus() == "user-ville" || cwf_router.session.getInputFocus() == "user-postalcode" || cwf_router.session.getInputFocus() == "user-tel") {
                        if (_this.myinput.value == "") {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer.");
                        }
                        else {
                            _this.validateInputs();
                        }
                    }
                    else if (cwf_router.session.getInputFocus() == "user-day") {
                        if (_this.myinput.value < 1 || _this.myinput.value > 31) {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez saisir une valeur entre 1 et 31.");
                        }
                        else {
                            if (_this.myinput.value < 10 && _this.myinput.value.length == 1) {
                                _this.myinput.value = "0" + _this.myinput.value;
                            }
                            _this.validateInputs();
                        }
                    }
                    else if (cwf_router.session.getInputFocus() == "user-month") {
                        if (_this.myinput.value < 1 || _this.myinput.value > 12) {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez saisir une valeur entre 1 et 12.");
                        }
                        else {
                            if (_this.myinput.value < 10 && _this.myinput.value.length == 1) {
                                _this.myinput.value = "0" + _this.myinput.value;
                            }
                            _this.validateInputs();
                        }
                    }
                    else if (cwf_router.session.getInputFocus() == "user-year") {
                        var oDiff = new Date();
                        if (_this.myinput.value == "" || _this.myinput.value > oDiff.getFullYear() - 18) {
                            cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Vous devez avoir 18 ans minimum.");
                        }
                        else {
                            _this.validateInputs();
                        }
                    }
                }
            };
            this.addTextInput = function (event) {
                if (event.target.parentNode.id != "disabled" && event.target.parentNode.id != "label-POINT-lib50-disabled") {
                    _this.myinput = document.getElementById("user-text");
                    if (_this.myinput.value.length < cwf_router.session.getMaxLength()) {
                        _this.myinput.value += event.target.id;
                        _this.text_digit_count += 1;
                    }
                }
            };
            this.clearTextInput = function () {
                _this.myinput = document.getElementById("user-text");
                _this.myinput.value = "";
                _this.text_digit_count = 0;
            };
            this.deleteTextInput = function () {
                _this.myinput = document.getElementById("user-text");
                var str = _this.myinput.value;
                var res = str.substring(0, str.length - 1);
                _this.myinput.value = res;
                if (_this.text_digit_count > 0) {
                    _this.text_digit_count -= 1;
                }
            };
        }
        controller.prototype.validateFormat = function () {
            this.myinput = document.getElementById("user-text");
            try {
                if (this.myinput.value.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/))
                    return true;
            }
            catch (e) {
                return false;
            }
            return false;
        };
        controller.prototype.validateFormat2 = function () {
            this.myinput = document.getElementById("user-text");
            var decomposition;
            decomposition = this.myinput.value.split(".");
            console.log("ip decompose ", decomposition);
            if ((decomposition[0] == "0" || decomposition[0] == "00" || decomposition[0] == "000") && (decomposition[1] == "0" || decomposition[1] == "00" || decomposition[1] == "000") && (decomposition[2] == "0" || decomposition[2] == "00" || decomposition[2] == "000") && (decomposition[3] == "0" || decomposition[3] == "00" || decomposition[3] == "000")) {
                return false;
            }
            else {
                return true;
            }
        };
        controller.prototype.validateInputs = function () {
            cwf_router.session.setInputText(this.myinput.value);
            var myinputDestination = document.getElementById(cwf_router.session.getInputFocus());
            myinputDestination.value = cwf_router.session.getInputText();
            document.getElementById("clavier-alpha").style.display = "none";
            document.getElementById(cwf_router.session.getInputFocus()).style.background = "#fff";
            if (cwf_router.manager.getViewName() == 'paiement') {
                document.getElementById("link2").style.opacity = "0";
            }
        };
        controller.prototype.render = function () {
            return (React.createElement(
                "div",
                {
                    id: "clavier-alpha"
                },
                React.createElement("div", { id: "bg-clavier-alpha" }),
                React.createElement(cwf_bg_clavier_alpha.controller, null),
                React.createElement(
                    "div",
                    {
                        className: "text_input_select"
                    },
                    React.createElement("input", { type: "text", id: "user-text", className: "text_inputs" }),
                    React.createElement("br", null)
                ),
                React.createElement(
                    "div",
                    {
                        id: "Clavier_alpha"
                    },
                    React.createElement(
                        "div",
                        {
                            id: "label-1-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "1", onClick: this.addTextInput }, "1" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-2-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "2", onClick: this.addTextInput }, "2" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-3-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "3", onClick: this.addTextInput }, "3" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-4-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "4", onClick: this.addTextInput }, "4" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-5-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "5", onClick: this.addTextInput }, "5" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-6-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "6", onClick: this.addTextInput }, "6" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-7-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "7", onClick: this.addTextInput }, "7" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-8-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "8", onClick: this.addTextInput }, "8" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-9-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "9", onClick: this.addTextInput }, "9" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-0-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "0", onClick: this.addTextInput }, "0" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-A-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "A", onClick: this.addTextInput }, "A" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-Z-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "Z", onClick: this.addTextInput }, "Z" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-E-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "E", onClick: this.addTextInput }, "E" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-R-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "R", onClick: this.addTextInput }, "R" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-T-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "T", onClick: this.addTextInput }, "T" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-Y-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "Y", onClick: this.addTextInput }, "Y" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-U-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "U", onClick: this.addTextInput }, "U" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-I-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "I", onClick: this.addTextInput }, "I" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-O-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "O", onClick: this.addTextInput }, "O" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-P-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "P", onClick: this.addTextInput }, "P" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-Q-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "Q", onClick: this.addTextInput }, "Q" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-S-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "S", onClick: this.addTextInput }, "S" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-D-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "D", onClick: this.addTextInput }, "D" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-F-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "F", onClick: this.addTextInput }, "F" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-G-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "G", onClick: this.addTextInput }, "G" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-H-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "H", onClick: this.addTextInput }, "H" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-J-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "J", onClick: this.addTextInput }, "J" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-K-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "K", onClick: this.addTextInput }, "K" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-L-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "L", onClick: this.addTextInput }, "L" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-M-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "M", onClick: this.addTextInput }, "M" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label---lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "@", onClick: this.addTextInput }, "@" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-W-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "W", onClick: this.addTextInput }, "W" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-X-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "X", onClick: this.addTextInput }, "X" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-C-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "C", onClick: this.addTextInput }, "C" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-V-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "V", onClick: this.addTextInput }, "V" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-B-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "B", onClick: this.addTextInput }, "B" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-N-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "N", onClick: this.addTextInput }, "N" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-APOSTROPHE-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "'", onClick: this.addTextInput }, "'" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-TIRET-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: "-", onClick: this.addTextInput }, "-" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-ENTER-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "btn60x125",
                                className: "btn60x125"
                            },
                            React.createElement("div", { onClick: this.clickEnter }, "ENTER" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-POINT-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "label-POINT-lib50-enabled",
                                className: "btn60"
                            },
                            React.createElement("div", { id: ".", onClick: this.addTextInput }, "." )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-SPACE-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                id: "label-SPACE-lib50-enabled"
                            },
                            React.createElement("div", { id: " ", onClick: this.addTextInput })
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-BACKSPACE-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "C-alpha", onClick: this.clearTextInput }, "C" )
                        )
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "label-SUPPR-lib50"
                        },
                        React.createElement(
                            "div",
                            {
                                className: "btn60"
                            },
                            React.createElement("div", { id: "CE-alpha", onClick: this.deleteTextInput }, "CE" )
                        )
                    )
                )
            ));
        };
        return controller;
    })(React.Component);
    cwf_clavieralpha.controller = controller;
})(cwf_clavieralpha || (cwf_clavieralpha = {}));
var cwf_menu_top;
(function (cwf_menu_top) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.showHideSubMenu = function (event) {
                if (document.getElementById("link1").style.opacity == "1") {
                    cwf_router.session.closePopupMessageStandard();
                    if (document.getElementById("submenu").style.display == "none") {
                        document.getElementById("submenu").style.display = "block";
                        document.getElementById("sous-menu").style.backgroundImage = "url('images/ico_70x50_closemenu.png')";
                        _this.changeSubMenu();
                    }
                    else {
                        cwf_router.session.closeSubmenu();
                    }
                }
            };
        }
        controller.prototype.changeSubMenu = function () {
            if (cwf_router.manager.getViewName() == "accueil") {
                document.getElementById('btn_text1').className = "btn_submenu_hidden";
                document.getElementById('btn_text2').className = "btn_submenu_hidden";
                document.getElementById('btn_text3').className = "btn_submenu_hidden";
                document.getElementById('btn_text4').className = "btn_submenu_hidden";
                document.getElementById('btn_text5').className = "btn190x70_gauche";
                document.getElementById('btn_text1').innerText = "";
                document.getElementById('btn_text2').innerText = "";
                document.getElementById('btn_text3').innerText = "";
                document.getElementById('btn_text4').innerText = "";
                document.getElementById('btn_text5').innerText = "Fin de session";
            }
            else {
                document.getElementById('btn_text1').className = "btn_submenu_hidden";
                document.getElementById('btn_text2').className = "btn190x70_gauche";
                document.getElementById('btn_text3').className = "btn_submenu_hidden";
                document.getElementById('btn_text4').className = "btn190x70_gauche";
                document.getElementById('btn_text5').className = "btn_submenu_hidden";
                document.getElementById('btn_text1').innerText = "";
                document.getElementById('btn_text2').innerText = "Maintenance";
                document.getElementById('btn_text3').innerText = "";
                document.getElementById('btn_text4').innerText = "Infos";
                document.getElementById('btn_text5').innerText = "";
            }
        };
        controller.prototype.gotoPrevious = function (event) {
            if (cwf_router.manager.getViewName() == "mode_manuel" || cwf_router.manager.getViewName() == "profil_expert") {
                if (document.getElementById("clavier-alpha").style.display == "block") {
                    document.getElementById("clavier-alpha").style.display = "none";
                }
                else {
                    cwf_router.manager.showView('installation');
                }
            }
            else if (cwf_router.manager.getViewName() == "infos") {
                cwf_router.manager.showView(cwf_router.manager.getLastViewName());
            }
            else if (cwf_router.manager.getViewName() == "configuration_ip") {
                cwf_router.manager.showView('infos');
            }
            else if (cwf_router.manager.getViewName() == "maintenance") {
                if (document.getElementById("clavier-alpha").style.display == "block") {
                    document.getElementById("clavier-alpha").style.display = "none";
                }
                else {
                    cwf_router.manager.showView(cwf_router.manager.getLastViewName());
                }
            }
            else if (cwf_router.manager.getViewName() == "loto" || cwf_router.manager.getViewName() == "superloto" || cwf_router.manager.getViewName() == "euromillions") {
                cwf_router.manager.showView('accueil');
            }
            else if (cwf_router.manager.getViewName() == "paiement") {
                document.getElementById("clavier-alpha").style.display = "none";
                document.getElementById("link2").style.opacity = "0";
            }
            cwf_router.session.closeSubmenu();
            cwf_router.session.closePopupMessageStandard();
        };
        controller.prototype.gotoHome = function () {
        };
        controller.prototype.render = function () {
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "menu_top_buttons"
                    },
                    React.createElement(
                        "div",
                        {
                            className: "btn_menu_top"
                        },
                        React.createElement("div", { id: "link1", className: "btn120x70", onClick: this.showHideSubMenu }, React.createElement("div", { id: "sous-menu", className: "sous-menu" }) ),
                        React.createElement("div", { id: "link2", className: "btn120x70", onClick: this.gotoPrevious }, React.createElement("div", { id: "retour", className: "retour" }) ),
                        React.createElement("div", { id: "link3", className: "btn120x70", onClick: this.gotoPrevious }, React.createElement("div", { id: "accueil", className: "accueil" }) )
                    )
                ),
                React.createElement(
                    "div",
                    {
                        className: "menu_top_icons"
                    },
                    React.createElement("div", { id: "messages", className: "messages" }),
                    React.createElement("div", { id: "impression", className: "impression" }, React.createElement("div", { id: "impression_notif", className: "impression_notif" }, cwf_router.session.getDocToPrint() ) ),
                    React.createElement("div", { id: "serveur", className: "serveur" }),
                    React.createElement("div", { id: "rj45", className: "rj45" })
                )
            ));
        };
        return controller;
    })(React.Component);
    cwf_menu_top.controller = controller;
})(cwf_menu_top || (cwf_menu_top = {}));
var cwf_submenu;
(function (cwf_submenu) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.clickHandler = function (event) {
                cwf_router.session.closeSubmenu();
            };
            this.setMaintenance = function (event) {
                if (document.getElementById('btn_text2').innerText != "") {
                    cwf_router.manager.showView('maintenance');
                    cwf_router.session.closeSubmenu();
                }
            };
            this.setInfos = function (event) {
                if (document.getElementById('btn_text4').innerText != "") {
                    cwf_router.manager.showView('infos');
                    cwf_router.session.closeSubmenu();
                }
            };
            this.endSession = function (event) {
                if (document.getElementById('btn_text5').innerText != "") {
                    cwf_router.session.closeSubmenu();
                    document.getElementById("waiting_bg").style.display = "block";
                    var myVar = setTimeout(function () {
                        document.getElementById("waiting_icon").style.display = "block";
                    }, 2000);
					clearTimeout(myVar);
                        cwf_router.manager.showView('identification');
                        document.getElementById("waiting_bg").style.display = "none";
                        document.getElementById("waiting_icon").style.display = "none";
                        document.getElementById("serveur").style.display = "none";
                   /* var logoutResult = sdk.project.middleware.user.logout();
                    logoutResult.success(function () {
                        console.log("logout promise success");
                    }, _this).fail(function () {
                        console.log("logout promise fail");
                    }, _this).end(function () {
                        console.log("logout promise end");
                        clearTimeout(myVar);
                        cwf_router.manager.showView('identification');
                        document.getElementById("waiting_bg").style.display = "none";
                        document.getElementById("waiting_icon").style.display = "none";
                        document.getElementById("serveur").style.display = "none";
                    }, _this);*/
                }
            };
        }
        controller.prototype.render = function () {
            return (React.createElement(
                "div",
                {
                    id: "submenu",
                    className: "submenu"
                },
                React.createElement(
                    "div",
                    {
                        className: "submenu_bg_left"
                    },
                    React.createElement(
                        "div",
                        {
                            className: "submenu_buttons"
                        },
                        React.createElement("div", { id: "btn_text1", className: "" }),
                        React.createElement("div", { id: "btn_text2", className: "", onClick: this.setMaintenance }),
                        React.createElement("div", { id: "btn_text3", className: "" }),
                        React.createElement("div", { id: "btn_text4", className: "", onClick: this.setInfos }),
                        React.createElement("div", { id: "btn_text5", className: "", onClick: this.endSession })
                    )
                ),
                React.createElement("div", { className: "submenu_bg_right", onClick: this.clickHandler })
            ));
        };
        return controller;
    })(React.Component);
    cwf_submenu.controller = controller;
})(cwf_submenu || (cwf_submenu = {}));
var cwf_popup_bg;
(function (cwf_popup_bg) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.closePopup = function (event) {
                cwf_router.session.closePopupMessageStandard();
            };
        }
        controller.prototype.render = function () {
            return React.createElement(
                "div",
                null,
                React.createElement("div", { id: "Popup_bg_full" }),
                React.createElement(
                    "div",
                    {
                        id: "Popup_bg"
                    },
                    React.createElement(
                        "div",
                        {
                            id: "bg50-popup-780x390-coin-haut-gauche"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-popup-780x390-h20px"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-popup-780x390-haut-droite"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-popup-780x390-h350px"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-popup-780x390-coin-bas-gauche"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-popup-780x390-h20px-bas"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-popup-780x390-bas-droite"
                        }
                    )
                )
            );
        };
        return controller;
    })(React.Component);
    cwf_popup_bg.controller = controller;
})(cwf_popup_bg || (cwf_popup_bg = {}));
var cwf_popup_message_standard;
(function (cwf_popup_message_standard) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.closePopup = function (event) {
                cwf_router.session.closePopupMessageStandard();
            };
        }
        controller.prototype.render = function () {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        id: "Popup_message_standard"
                    },
                    React.createElement(
                        "div",
                        {
                            className: "message-popup-standard"
                        },
                        React.createElement("div", { id: "message-popup-standard-1" }),
                        React.createElement("div", { id: "message-popup-standard-2" })
                    ),
                    React.createElement("div", { id: "btn_valider_popup", className: "btn_valider_popup", onClick: this.closePopup }, React.createElement("div", { className: "btn190x70" }, "  ", React.createElement("img", { src: "images/picto_valider.png" }), "  Valider" ) )
                )
            );
        };
        return controller;
    })(React.Component);
    cwf_popup_message_standard.controller = controller;
})(cwf_popup_message_standard || (cwf_popup_message_standard = {}));
var cwf_popup_message_permanent;
(function (cwf_popup_message_permanent) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.closePopup = function (event) {
                cwf_router.session.closePopupMessagepermanent(cwf_router.session.getPopupId(), document.getElementById(event.target.id).innerText, event.target.id);
            };
        }
        controller.prototype.render = function () {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        id: "Popup_message_permanent"
                    },
                    React.createElement(
                        "div",
                        {
                            id: "message-popup-permanent",
                            className: "message-popup-permanent"
                        },
                        React.createElement("div", { id: "message-popup-permanent-1" }),
                        React.createElement("div", { id: "message-popup-permanent-2" })
                    ),
                    React.createElement(
                        "div",
                        {
                            className: "button-popup-permanent"
                        },
                        React.createElement("div", { id: "button-popup-permanent-1", className: "btn190x70", onClick: this.closePopup }),
                        React.createElement("div", { id: "button-popup-permanent-2", className: "btn190x70", onClick: this.closePopup }),
                        React.createElement("div", { id: "button-popup-permanent-3", className: "btn190x70", onClick: this.closePopup })
                    )
                )
            );
        };
        return controller;
    })(React.Component);
    cwf_popup_message_permanent.controller = controller;
})(cwf_popup_message_permanent || (cwf_popup_message_permanent = {}));
var cwf_bg_clavier_num;
(function (cwf_bg_clavier_num) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.showPopup = function (event) {
            };
        }
        controller.prototype.render = function () {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        id: "bg_clavier_num"
                    },
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-num-380x380-coin-haut-gauche"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-num-380x380-h20px"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-num-380x380-coin-haut-droite"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-num-380x380-h340px"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-num-380x380-coin-bas-gauche"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-num-380x380-h20px-bas"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-num-380x380-coin-bas-droite"
                        }
                    )
                )
            );
        };
        return controller;
    })(React.Component);
    cwf_bg_clavier_num.controller = controller;
})(cwf_bg_clavier_num || (cwf_bg_clavier_num = {}));
var cwf_bg_clavier_alpha;
(function (cwf_bg_clavier_alpha) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.showPopup = function (event) {
            };
        }
        controller.prototype.render = function () {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        id: "bg_clavier_alpha"
                    },
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-alpha-780x390-coin-haut-gauche"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-alpha-780x390-h20px"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-alpha-780x390-haut-droite"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-alpha-780x390-h350px"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-alpha-780x390-coin-bas-gauche"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-alpha-780x390-h20px-bas"
                        }
                    ),
                    React.createElement(
                        "div",
                        {
                            id: "bg50-clavier-alpha-780x390-bas-droite"
                        }
                    )
                )
            );
        };
        return controller;
    })(React.Component);
    cwf_bg_clavier_alpha.controller = controller;
})(cwf_bg_clavier_alpha || (cwf_bg_clavier_alpha = {}));
var view_00_header;
(function (view_00_header) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
        }
        controller.prototype.getName = function () {
            return "header";
        };
        controller.prototype.getView = function (szName) {
            if (szName == "")
                szName = "chargement";
            return (React.createElement(
                "div",
                {
                    className: "header"
                },
                React.createElement("div", { id: "bg-image", className: "bg-image" }),
                React.createElement(cwf_menu_top.controller, null),
                React.createElement(cwf_timer.controller, null),
                React.createElement(cwf_submenu.controller, null),
                React.createElement(cwf_clavieralpha.controller, null),
                React.createElement(cwf_popup_bg.controller, null),
                React.createElement(cwf_popup_message_standard.controller, null),
                React.createElement(cwf_popup_message_permanent.controller, null),
                React.createElement("div", { id: "waiting_bg" }),
                React.createElement("div", { id: "waiting_icon" })
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_header.controller = controller;
    cwf_router.manager.addView(cwf_router.container.HEADER, new controller());
})(view_00_header || (view_00_header = {}));
var view_00_footer;
(function (view_00_footer) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
        }
        controller.prototype.getName = function () {
            return "footer";
        };
        controller.prototype.getView = function (szName) {
            return (React.createElement(
                "div",
                {
                    className: "footer"
                }
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_footer.controller = controller;
    cwf_router.manager.addView(cwf_router.container.FOOTER, new controller());
})(view_00_footer || (view_00_footer = {}));
var view_00_chargement;
(function (view_00_chargement) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
        }
        controller.prototype.getName = function () {
            return "chargement";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "0";
            document.getElementById("link3").style.opacity = "0";
            document.getElementById("submenu").style.display = "none";
            return (React.createElement(
                "div",
                null,
                React.createElement("div", { id: "chargement-text" }, "Démarrage en cours …" )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_chargement.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_00_chargement || (view_00_chargement = {}));
var view_00_installation;
(function (view_00_installation) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.gotoInstallation = function (event) {
                if (event.target.id == "mode-manuel") {
                    cwf_router.session.getConfigIp();
                }
            };
        }
        controller.prototype.getName = function () {
            return "installation";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "1";
            document.getElementById("link2").style.opacity = "0";
            document.getElementById("link3").style.opacity = "0";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "installation_buttons"
                    },
                    React.createElement("div", { id: "mode-manuel", className: "btn_menu_grille", onClick: this.gotoInstallation }, "Mode manuel" )
                )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_installation.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_00_installation || (view_00_installation = {}));
var view_00_mode_manuel;
(function (view_00_mode_manuel) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.validerInstallation = function (event) {
                var myinput1 = document.getElementById("client-name");
                var myinput2 = document.getElementById("frontal-marseille");
                var myinput3 = document.getElementById("frontal-vitrolles");
                if (myinput1.value == "") {
                    cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer avec une valeur non nulle et du type xxx.xxx.xxx.xxx où xxx est compris entre 0 et 255.");
                    myinput1.style.background = "#ff6666";
                }
                else if (myinput2.value == "0.0.0.0" && myinput3.value == "0.0.0.0") {
                    cwf_router.session.openPopupMessageStandard("", "SAISIE INVALIDE<br>Veuillez ne pas saisir deux adresses nulles pour les frontaux Marseille et Vitrolles.");
                    myinput2.style.background = "#ff6666";
                    myinput3.style.background = "#ff6666";
                }
                else {
                    cwf_router.session.setConfigIp();
                }
            };
            this.callKeyboard = function (event) {
                document.getElementById("client-name").style.background = "#fff";
                document.getElementById("frontal-marseille").style.background = "#fff";
                document.getElementById("frontal-vitrolles").style.background = "#fff";
                document.getElementById("clavier-alpha").style.display = "block";
                document.getElementById("link2").style.opacity = "1";
                cwf_router.session.setInputFocus(event.target.id);
                _this.myinput = document.getElementById("user-text");
                _this.myinput.value = event.target.value;
                cwf_router.session.disable_keyboard();
                cwf_router.session.setMaxLength(15);
            };
        }
        controller.prototype.getName = function () {
            return "mode_manuel";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "0";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "mode_manuel-left"
                    },
                    React.createElement("div", { className: "mode_manuel-labels" }, "Client name" ),
                    React.createElement("br", null),
                    React.createElement("div", { className: "mode_manuel-labels" }, "Frontal Marseille" ),
                    React.createElement("br", null),
                    React.createElement("div", { className: "mode_manuel-labels" }, "Frontal Vitrolles" ),
                    React.createElement("br", null),
                    React.createElement("div", { className: "mode_manuel-labels" }, "Frontal STU" ),
                    React.createElement("br", null),
                    React.createElement("div", { className: "mode_manuel-labels" }, "Serveur traces" ),
                    React.createElement("br", null)
                ),
                React.createElement(
                    "div",
                    {
                        className: "mode_manuel-right"
                    },
                    React.createElement("input", { type: "text", id: "client-name", className: "text_inputs", value: cwf_router.session.getClientName(), onFocus: this.callKeyboard }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "frontal-marseille", className: "text_inputs", value: cwf_router.session.getFrontalMarseille(), onFocus: this.callKeyboard }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "frontal-vitrolles", className: "text_inputs", value: cwf_router.session.getFrontalVitrolles(), onFocus: this.callKeyboard }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "frontal-STU", className: "text_inputs", value: cwf_router.session.getFrontalSTU(), onFocus: this.callKeyboard }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "serveur-traces", className: "text_inputs", value: cwf_router.session.getServeurTraces(), onFocus: this.callKeyboard }),
                    React.createElement("br", null)
                ),
                React.createElement("div", { id: "btn_valider_mode_manuel", className: "btn_valider_mode_manuel", onClick: this.validerInstallation }, React.createElement("div", { className: "btn190x70" }, "  ", React.createElement("img", { src: "images/picto_valider.png" }), "  Valider" ) )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_mode_manuel.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_00_mode_manuel || (view_00_mode_manuel = {}));
var view_00_profil_expert;
(function (view_00_profil_expert) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.validerInstallation = function (event) {
                var myinput1 = document.getElementById("client-name");
                if (myinput1.value == "") {
                    cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez saisir une valeur.");
                    myinput1.style.background = "#ff6666";
                }
                else {
                    cwf_router.session.setConfigIp();
                }
            };
            this.callKeyboard = function (event) {
                document.getElementById("client-name").style.background = "#fff";
                document.getElementById("clavier-alpha").style.display = "block";
                document.getElementById("link2").style.opacity = "1";
                cwf_router.session.setInputFocus(event.target.id);
                _this.myinput = document.getElementById("user-text");
                _this.myinput.value = event.target.value;
                cwf_router.session.disable_keyboard();
                cwf_router.session.setMaxLength(15);
            };
        }
        controller.prototype.getName = function () {
            return "profil_expert";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "0";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "profil_expert-left"
                    },
                    React.createElement("div", { className: "profil_expert-labels" }, "Client name" ),
                    React.createElement("br", null),
                    React.createElement("div", { className: "profil_expert-labels" }, "Adresse IP" ),
                    React.createElement("br", null),
                    React.createElement("div", { className: "profil_expert-labels" }, "Masque de sous-réseau" ),
                    React.createElement("br", null),
                    React.createElement("div", { className: "profil_expert-labels" }, "Passerelle" ),
                    React.createElement("br", null)
                ),
                React.createElement(
                    "div",
                    {
                        className: "profil_expert-right"
                    },
                    React.createElement("input", { type: "text", id: "client-name", className: "text_inputs", value: cwf_router.session.getClientName(), onFocus: this.callKeyboard }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "adresse-ip", className: "text_inputs", value: cwf_router.session.getIpAddress(), onFocus: this.callKeyboard }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "masque-reseau", className: "text_inputs", value: cwf_router.session.getNetMask(), onFocus: this.callKeyboard }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "passerelle", className: "text_inputs", value: cwf_router.session.getGateway(), onFocus: this.callKeyboard }),
                    React.createElement("br", null)
                ),
                React.createElement("div", { id: "btn_valider_profil_expert", className: "btn_valider_profil_expert", onClick: this.validerInstallation }, React.createElement("div", { className: "btn190x70" }, "  ", React.createElement("img", { src: "images/picto_valider.png" }), "  Valider" ) )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_profil_expert.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_00_profil_expert || (view_00_profil_expert = {}));
var view_00_maintenance;
(function (view_00_maintenance) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.validerMaintenance = function (event) {
                var myinput1 = document.getElementById("code-operation");
                var myinput2 = document.getElementById("donnee");
                if (myinput1.value == "") {
                    cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer.");
                    myinput1.style.background = "#ff6666";
                }
                else {
                    var maintenanceResult = sdk.project.middleware.terminal.onMaintenanceCode(myinput1.value, myinput2.value);
                    maintenanceResult.success(function (retStatus) {
                        console.log("onMaintenanceCode datamodel success with value ", retStatus);
                        cwf_router.manager.showView('identification');
                    }, _this).fail(function () {
                        console.log("onMaintenanceCode datamodel fail");
                    }, _this).end(function (onMaintenanceCode) {
                        console.log("onMaintenanceCode datamodel end ", onMaintenanceCode);
                    }, _this);
                }
            };
            this.callKeyboard = function (event) {
                document.getElementById("code-operation").style.background = "#fff";
                document.getElementById("donnee").style.background = "#fff";
                document.getElementById("clavier-alpha").style.display = "block";
                document.getElementById("link2").style.opacity = "1";
                cwf_router.session.setInputFocus(event.target.id);
                _this.myinput = document.getElementById("user-text");
                _this.myinput.value = event.target.value;
                cwf_router.session.disable_keyboard();
                if (event.target.id == "code-operation") {
                    cwf_router.session.setMaxLength(5);
                }
                else {
                    cwf_router.session.setMaxLength(4);
                }
            };
        }
        controller.prototype.getName = function () {
            return "maintenance";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "0";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "maintenance-left"
                    },
                    React.createElement("div", { className: "maintenance-labels" }, "Code opération" ),
                    React.createElement("br", null),
                    React.createElement("div", { className: "maintenance-labels" }, "Donnée" ),
                    React.createElement("br", null)
                ),
                React.createElement(
                    "div",
                    {
                        className: "maintenance-right"
                    },
                    React.createElement("input", { type: "text", id: "code-operation", className: "text_inputs", onFocus: this.callKeyboard }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "donnee", className: "text_inputs", value: "0", onFocus: this.callKeyboard }),
                    React.createElement("br", null)
                ),
                React.createElement("div", { id: "btn_valider_maintenance", className: "btn_valider_maintenance", onClick: this.validerMaintenance }, React.createElement("div", { className: "btn190x70" }, "  ", React.createElement("img", { src: "images/picto_valider.png" }), "  Valider" ) )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_maintenance.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_00_maintenance || (view_00_maintenance = {}));
var view_00_configuration_ip;
(function (view_00_configuration_ip) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.gotoTab = function (event) {
                _this.myinput1 = document.getElementById("param1");
                _this.myinput2 = document.getElementById("param2");
                _this.myinput3 = document.getElementById("param3");
                _this.myinput4 = document.getElementById("param4");
                if (event.target.id == "terminal") {
                    document.getElementById("tab_terminal_frontaux").className = "tab_terminal";
                    document.getElementById("terminal").className = "terminal_active";
                    document.getElementById("frontaux").className = "frontaux_inactive";
                    document.getElementById("titre_config1").innerHTML = "Client name";
                    document.getElementById("titre_config2").innerHTML = "Masque de sous-réseau";
                    document.getElementById("titre_config3").innerHTML = "Adresse IP";
                    document.getElementById("titre_config4").innerHTML = "Passerelle";
                    _this.myinput1.value = cwf_router.session.getClientName();
                    _this.myinput2.value = cwf_router.session.getNetMask();
                    _this.myinput3.value = cwf_router.session.getIpAddress();
                    _this.myinput4.value = cwf_router.session.getGateway();
                }
                else if (event.target.id == "frontaux") {
                    document.getElementById("tab_terminal_frontaux").className = "tab_frontaux";
                    document.getElementById("terminal").className = "terminal_inactive";
                    document.getElementById("frontaux").className = "frontaux_active";
                    document.getElementById("titre_config1").innerHTML = "Frontal Marseille";
                    document.getElementById("titre_config2").innerHTML = "Frontal Vitrolles";
                    document.getElementById("titre_config3").innerHTML = "Frontal STU";
                    document.getElementById("titre_config4").innerHTML = "Serveur traces";
                    _this.myinput1.value = cwf_router.session.getFrontalMarseille();
                    _this.myinput2.value = cwf_router.session.getFrontalVitrolles();
                    _this.myinput3.value = cwf_router.session.getFrontalSTU();
                    _this.myinput4.value = cwf_router.session.getServeurTraces();
                }
            };
            this.selectTextInput = function (event) {
                document.getElementById(event.target.id).blur();
            };
        }
        controller.prototype.getName = function () {
            return "configuration_ip";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "0";
            return (React.createElement(
                "div",
                null,
                React.createElement("div", { id: "tab_terminal_frontaux", className: "tab_terminal" }),
                React.createElement("div", { id: "terminal", className: "terminal_active", onClick: this.gotoTab }, "Terminal" ),
                React.createElement("div", { id: "frontaux", className: "frontaux_inactive", onClick: this.gotoTab }, "Frontaux" ),
                React.createElement("div", { className: "tab_config_bg" }),
                React.createElement(
                    "ul",
                    {
                        className: "config_inputs_select"
                    },
                    React.createElement("li", null, React.createElement("div", { id: "titre_config1", className: "titres_config" }, "Client name" ), React.createElement("input", { type: "text", id: "param1", className: "text_inputs", value: cwf_router.session.getClientName(), onFocus: this.selectTextInput }) ),
                    React.createElement("li", null, React.createElement("div", { id: "titre_config2", className: "titres_config" }, "Masque de sous-réseau" ), React.createElement("input", { type: "text", id: "param2", className: "text_inputs", value: cwf_router.session.getNetMask(), onFocus: this.selectTextInput }) ),
                    React.createElement("li", null, React.createElement("div", { id: "titre_config3", className: "titres_config" }, "Adresse IP" ), React.createElement("input", { type: "text", id: "param3", className: "text_inputs", value: cwf_router.session.getIpAddress(), onFocus: this.selectTextInput }) ),
                    React.createElement("li", null, React.createElement("div", { id: "titre_config4", className: "titres_config" }, "Passerelle" ), React.createElement("input", { type: "text", id: "param4", className: "text_inputs", value: cwf_router.session.getGateway(), onFocus: this.selectTextInput }) )
                )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_configuration_ip.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_00_configuration_ip || (view_00_configuration_ip = {}));
var view_00_infos;
(function (view_00_infos) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.gotoInfos = function (event) {
                if (event.target.id == "config-ip") {
				cwf_router.manager.showView('configuration_ip');
                    //cwf_router.session.getConfigIp();
                }
            };
        }
        controller.prototype.getName = function () {
            return "infos";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "0";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "infos_buttons"
                    },
                    React.createElement("div", { id: "config-ip", className: "" }),
                    React.createElement("div", { id: "config-ip", className: "" }),
                    React.createElement("div", { id: "config-ip", className: "btn_menu_jeu", onClick: this.gotoInfos }, "Configuration IP" )
                )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_infos.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_00_infos || (view_00_infos = {}));
var view_00_options;
(function (view_00_options) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.toggleControl = function (event) {
                var idClicked = event.target.id;
                var control = null;
                if (idClicked == 0) {
                    control = document.getElementById("myonoffswitch");
                    if (control.checked) {
                        document.getElementById("on_off_labels").innerText = "off";
                    }
                    else {
                        document.getElementById("on_off_labels").innerText = "on";
                    }
                    control.checked = !(control.checked);
                }
            };
            this.toggleSwitch = function (event) {
                document.getElementById("choix1").style.backgroundSize = "0";
                document.getElementById("choix1").style.color = "black";
                document.getElementById("choix2").style.backgroundSize = "0";
                document.getElementById("choix2").style.color = "black";
                document.getElementById("choix3").style.backgroundSize = "0";
                document.getElementById("choix3").style.color = "black";
                document.getElementById("choix4").style.backgroundSize = "0";
                document.getElementById("choix4").style.color = "black";
                document.getElementById(event.target.id).style.backgroundSize = "34px";
                document.getElementById(event.target.id).style.color = "#00cc00";
            };
        }
        controller.prototype.getName = function () {
            return "options";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "1";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "1";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "options_select_bg"
                    },
                    React.createElement("div", { id: "choix1", className: "options_select_content", onClick: this.toggleSwitch }, "Choix 1" ),
                    React.createElement("div", { id: "choix2", className: "options_select_content", onClick: this.toggleSwitch }, "Choix 2" ),
                    React.createElement("div", { id: "choix3", className: "options_select_content", onClick: this.toggleSwitch }, "Choix 3" ),
                    React.createElement("div", { id: "choix4", className: "options_select_content", onClick: this.toggleSwitch }, "Choix 4" )
                ),
                React.createElement(
                    "div",
                    {
                        className: "on_off_bg"
                    },
                    React.createElement(
                        "div",
                        {
                            className: "on_off_content"
                        },
                        React.createElement("span", { id: "on_off_labels", className: "on_off_labels" }, "on" ),
                        React.createElement(
                            "div",
                            {
                                className: "onoffswitch right",
                                id: "0",
                                onClick: this.toggleControl
                            },
                            React.createElement("input", { type: "checkbox", name: "onoffswitch", className: "onoffswitch-checkbox", id: "myonoffswitch", value: "", checked: true }),
                            React.createElement("label", { className: "onoffswitch-label", id: "0" }, React.createElement("span", { className: "onoffswitch-inner", id: "0" }), React.createElement("span", { className: "onoffswitch-switch", id: "0" }) )
                        )
                    )
                )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_00_options.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_00_options || (view_00_options = {}));
var view_01_identification;
(function (view_01_identification) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
        }
        controller.prototype.getName = function () {
            return "identification";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "1";
            document.getElementById("link2").style.opacity = "0";
            document.getElementById("link3").style.opacity = "0";
            document.getElementById("waiting_bg").style.display = "none";
            document.getElementById("waiting_icon").style.display = "none";
            return (React.createElement(
                "div",
                null,
                React.createElement(cwf_claviernum.controller, null)
            ));
        };
        return controller;
    })(cwf_router.View);
    view_01_identification.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_01_identification || (view_01_identification = {}));
var view_02_accueil;
(function (view_02_accueil) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
            this.gotoGame = function (event) {
                if (event.target.id == "loto") {
                    cwf_router.manager.showView('loto');
                }
                else if (event.target.id == "super-loto") {
                    cwf_router.manager.showView('superloto');
                }
                else if (event.target.id == "euro-millions") {
                    cwf_router.manager.showView('euromillions');
                }
            };
        }
        controller.prototype.getName = function () {
            return "accueil";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "1";
            document.getElementById("link2").style.opacity = "0";
            document.getElementById("link3").style.opacity = "0";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "menu_jeu"
                    },
                    React.createElement(
                        "ul",
                        {
                            className: "menu_jeu_buttons"
                        },
                        React.createElement("li", { className: "btn_menu_jeu" }, React.createElement("div", { id: "loto", className: "loto", onClick: this.gotoGame }) ),
						React.createElement("li", { className: "btn_menu_jeu" }, React.createElement("div", { id: "super-loto", className: "super-loto", onClick: this.gotoGame }) ),
						React.createElement("li", { className: "btn_menu_jeu" }, React.createElement("div", { id: "euro-millions", className: "euro-millions", onClick: this.gotoGame }) )
                    )
                ),
                React.createElement(
                    "div",
                    {
                        className: "menu_droite"
                    },
                    React.createElement(
                        "div",
                        {
                            className: "btn_menu_droite"
                        },
						 React.createElement("div", { className: "btn190x70_droite" }, React.createElement("div", null,"Lecture code-barres") ),
						 React.createElement("div", { className: "btn190x70_droite" }, React.createElement("div", null,"Annulation jeu") ),
						 React.createElement("div", { className: "btn190x70_droite" }, React.createElement("div", null,"Annulation gain") ),
						 React.createElement("div", { className: "btn190x70_droite" }, React.createElement("div", null,"Rapports") )
                    )
                )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_02_accueil.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_02_accueil || (view_02_accueil = {}));
var view_03_loto;
(function (view_03_loto) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
			this.gotoPayment = function (event) {
                cwf_router.manager.showView('paiement');
            };
        }
        controller.prototype.getName = function () {
            return "loto";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "1";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "menu_grille"
                    },
                    React.createElement(
                        "ul",
                        {
                            className: "menu_grille_buttons"
                        },
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-l-1", className: "grille-l-1" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-l-2", className: "grille-l-2" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-l-3", className: "grille-l-3" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-l-4", className: "grille-l-4" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-l-5", className: "grille-l-5" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-l-6", className: "grille-l-6" , onClick: this.gotoPayment}) )
                    )
                )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_03_loto.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_03_loto || (view_03_loto = {}));
var view_04_superloto;
(function (view_04_superloto) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
			this.gotoPayment = function (event) {
                cwf_router.manager.showView('paiement');
            };
        }
        controller.prototype.getName = function () {
            return "superloto";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "1";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "menu_grille"
                    },
                    React.createElement(
                        "ul",
                        {
                            className: "menu_grille_buttons"
                        },
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-sl-1", className: "grille-sl-1" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-sl-2", className: "grille-sl-2" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-sl-3", className: "grille-sl-3" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-sl-4", className: "grille-sl-4" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-sl-5", className: "grille-sl-5" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-sl-6", className: "grille-sl-6" , onClick: this.gotoPayment}) )
                    )
                )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_04_superloto.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_04_superloto || (view_04_superloto = {}));
var view_05_euromillions;
(function (view_05_euromillions) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            _super.apply(this, arguments);
			this.gotoPayment = function (event) {
                cwf_router.manager.showView('paiement');
            };
        }
        controller.prototype.getName = function () {
            return "euromillions";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "1";
            document.getElementById("link3").style.opacity = "1";
            return (React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {
                        className: "menu_grille"
                    },
                    React.createElement(
                        "ul",
                        {
                            className: "menu_grille_buttons"
                        },
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-em-1", className: "grille-em-1" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-em-2", className: "grille-em-2" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-em-3", className: "grille-em-3" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-em-4", className: "grille-em-4" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-em-5", className: "grille-em-5" , onClick: this.gotoPayment}) ),
                        React.createElement("li", { className: "btn_menu_grille" }, React.createElement("div", { id: "grille-em-6", className: "grille-em-6" , onClick: this.gotoPayment}) )
                    )
                )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_05_euromillions.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_05_euromillions || (view_05_euromillions = {}));
var view_06_paiement;
(function (view_06_paiement) {
    var controller = (function (_super) {
        __extends(controller, _super);
        function controller() {
            var _this = this;
            _super.apply(this, arguments);
            this.validerPaiement = function (event) {
                var myinput1 = document.getElementById("user-name");
                var myinput2 = document.getElementById("user-day");
                var myinput3 = document.getElementById("user-month");
                var myinput4 = document.getElementById("user-year");
                var myinput5 = document.getElementById("user-ville");
                var myinput6 = document.getElementById("user-postalcode");
                var myinput7 = document.getElementById("user-tel");
                if (myinput1.value == "" || myinput2.value == "" || myinput3.value == "" || myinput4.value == "" || myinput5.value == "" || myinput6.value == "" || myinput7.value == "") {
                    cwf_router.session.openPopupMessageStandard("", "SAISIE INCORRECTE<br>Veuillez recommencer");
                }
                else {
                    cwf_router.manager.showView('accueil');
                }
            };
            this.annulerPaiement = function (event) {
                cwf_router.manager.showView('accueil');
            };
            this.callKeyboard = function (event) {
                document.getElementById("clavier-alpha").style.display = "block";
                document.getElementById("link2").style.opacity = "1";
                cwf_router.session.setInputFocus(event.target.id);
                _this.myinput = document.getElementById("user-text");
                _this.myinput.value = event.target.value;
                if (event.target.id == "user-day" || event.target.id == "user-month" || event.target.id == "user-year" || event.target.id == "user-postalcode" || event.target.id == "user-tel") {
                    cwf_router.session.disable_keyboard();
                }
                else {
                    cwf_router.session.enable_keyboard();
                }
                if (event.target.id == "user-name" || event.target.id == "user-surname" || event.target.id == "user-code") {
                    cwf_router.session.setMaxLength(22);
                }
                if (event.target.id == "user-day" || event.target.id == "user-month" || event.target.id == "user-postalcode") {
                    cwf_router.session.setMaxLength(2);
                }
                if (event.target.id == "user-year") {
                    cwf_router.session.setMaxLength(4);
                }
                if (event.target.id == "user-ville") {
                    cwf_router.session.setMaxLength(15);
                }
                if (event.target.id == "user-tel") {
                    cwf_router.session.setMaxLength(10);
                }
            };
        }
        controller.prototype.getName = function () {
            return "paiement";
        };
        controller.prototype.getView = function (szName) {
            document.getElementById("link1").style.opacity = "0";
            document.getElementById("link2").style.opacity = "0";
            document.getElementById("link3").style.opacity = "0";
            return (React.createElement(
                "div",
                null,
                React.createElement("div", { className: "titre1_paiement" }, "Paiement par virement" ),
                React.createElement(
                    "div",
                    {
                        className: "nom_prenom_code_inputs_select"
                    },
                    React.createElement("input", { type: "text", id: "user-name", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "Nom" }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "user-surname", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "Prénom" }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", id: "user-code", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "Code IBAN" }),
                    React.createElement("br", null)
                ),
                React.createElement("div", { className: "titre2_paiement" }, "Date et lieu de naissance" ),
                React.createElement(
                    "div",
                    {
                        className: "date_lieu_inputs_select"
                    },
                    React.createElement("input", { type: "text", id: "user-day", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "jj" }),
                    React.createElement("input", { type: "text", id: "user-month", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "mm" }),
                    React.createElement("input", { type: "text", id: "user-year", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "aaaa" }),
                    React.createElement("input", { type: "text", id: "user-ville", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "Ville" }),
                    React.createElement("input", { type: "text", id: "user-postalcode", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "CP" }),
                    React.createElement("input", { type: "text", id: "user-tel", className: "text_inputs", onFocus: this.callKeyboard, placeholder: "Téléphone" })
                ),
                React.createElement("div", { className: "slash" }, "/ /" ),
                React.createElement("div", { id: "btn_annuler_paiement", className: "btn_annuler_paiement", onClick: this.annulerPaiement }, React.createElement("div", { className: "btn190x70" }, "  ", React.createElement("img", { src: "images/picto_annuler.png" }), "  Annuler" ) ),
                React.createElement("div", { id: "btn_valider_paiement", className: "btn_valider_paiement", onClick: this.validerPaiement }, React.createElement("div", { className: "btn190x70" }, "  ", React.createElement("img", { src: "images/picto_valider.png" }), "  Valider" ) )
            ));
        };
        return controller;
    })(cwf_router.View);
    view_06_paiement.controller = controller;
    cwf_router.manager.addView(cwf_router.container.BODY, new controller());
})(view_06_paiement || (view_06_paiement = {}));
var oViewHeader = React.createElement(cwf_router.controller, { view: cwf_router.container.HEADER });
React.render(oViewHeader, document.getElementById('view-header'));
var oViewBody = React.createElement(cwf_router.controller, { view: cwf_router.container.BODY });
React.render(oViewBody, document.getElementById('view-body'));
var oViewFooter = React.createElement(cwf_router.controller, { view: cwf_router.container.FOOTER });
React.render(oViewFooter, document.getElementById('view-footer'));
var bus;
(function (bus) {
    var Promise = (function () {
        function Promise(func) {
            this._thens = [];
            this._catches = [];
            this._ends = [];
            this._done = false;
            this._started = new Date();
            this._isDebug = false;
            func.apply(arguments);
        }
        Promise.prototype.success = function (func, context) {
            this._thens.push(function () {
                var res = func.apply(context, arguments);
            });
            return this;
        };
        Promise.prototype.fail = function (func, context) {
            this._catches.push(function () {
                var res = func.apply(context, arguments);
            });
            return this;
        };
        Promise.prototype.end = function (func, context) {
            this._ends.push(function () {
                var res = func.apply(context, arguments);
            });
            return this;
        };
        Promise.prototype.resolve = function (message, context) {
            if (this._isDebug)
                console.log("message", message, context);
            this._done = true;
            if ('status' in message && message.status == 'SUCCESS') {
                if (this._isDebug)
                    console.log("message success", this._thens);
                for (var i = 0; i < this._thens.length; i++) {
                    this._thens[i].apply(null, message.returnValues);
                }
                this._thens = [];
            }
            else {
                if (this._isDebug)
                    console.log("message catches", this._catches);
                for (var i = 0; i < this._catches.length; i++) {
                    this._catches[i].apply(null, arguments);
                }
                this._catches = [];
            }
            for (var i = 0; i < this._ends.length; i++) {
                this._ends[i].apply(null, arguments);
            }
            this._ends = [];
        };
        return Promise;
    })();
    bus.Promise = Promise;
    var UrbanMessage = (function () {
        function UrbanMessage(messageData) {
            this._valid = false;
            try {
                var message = JSON.parse(messageData);
                if (('urbanMessage' in message && 'urbanType' in message.urbanMessage)) {
                    for (var prop in message.urbanMessage)
                        this[prop] = message.urbanMessage[prop];
                    this._valid = true;
                }
            }
            catch (exception) {
                console.error(exception);
            }
        }
        UrbanMessage.prototype.isValid = function () {
            return this._valid;
        };
        UrbanMessage.prototype.isCall = function () {
            return this._valid && this.urbanType == 'call';
        };
        UrbanMessage.prototype.isEvent = function () {
            return this._valid && this.urbanType == 'event';
        };
        UrbanMessage.prototype.isDatamodel = function () {
            return this._valid && this.urbanType == 'datamodel';
        };
        return UrbanMessage;
    })();
    var UrbanConnector = (function () {
        function UrbanConnector(_wsUrl) {
            var _this = this;
            this._wsUrl = _wsUrl;
            this._wsCalls = [];
            this._eventListeners = [];
            this._globalEventListeners = [];
            this._currentCallbackId = 0;
            this._callbacks = [];
            if (UrbanConnector._instance) {
                throw new Error("Error: Instantiation failed: Use UrbanConnector.getInstance() instead of new.");
            }
            UrbanConnector._instance = this;
            setInterval(function () { return _this.websocketActor(); }, 100);
        }
        UrbanConnector.getInstance = function () {
            if (UrbanConnector._instance === null)
                UrbanConnector._instance = new UrbanConnector("ws://127.0.0.1:8844/ws/");
            return UrbanConnector._instance;
        };
        UrbanConnector.prototype.websocketActor = function () {
            if (this._wsCalls && this._wsCalls.length > 0 && this.isReady()) {
                this._ws.send(JSON.stringify(this._wsCalls.shift()));
            }
        };
        UrbanConnector.prototype.setUrl = function (url) {
            this._wsUrl = url;
        };
        UrbanConnector.prototype.open = function () {
            console.log("new websocket with url", this._wsUrl);
            this._ws = new WebSocket(this._wsUrl);
            this._ws.onopen = this.onOpen;
            this._ws.onmessage = this.onMessage;
            this._ws.onclose = this.onClose;
        };
        UrbanConnector.prototype.close = function () {
            try {
                this._ws.close();
                this._ws = null;
            }
            catch (e) {
                console.error("when closing websocket", e);
            }
        };
        UrbanConnector.prototype.postMessage = function (request) {
            this._wsCalls.push(request);
        };
        UrbanConnector.prototype.sendMessage = function (request) {
            var _this = this;
            var callbackId = this.getCallbackId();
            request.callback_id = callbackId;
            var promise = new Promise(function () { return _this._wsCalls.push(request); });
            this._callbacks[callbackId] = { promise: promise };
            return promise;
        };
        UrbanConnector.prototype.isReady = function () {
            return (this._ws && this._ws.readyState === this._ws.OPEN);
        };
        UrbanConnector.prototype.popupResponse = function (idPopup, responseText, responseIndex) {
            this.postMessage({
                "urbanType": "popupResponse",
                "idPopup": idPopup,
                "response": responseText,
                "responseIndex": responseIndex
            });
        };
        UrbanConnector.prototype.subscribeEvent = function (eventName, eventListener) {
            if (!(eventName in this._eventListeners)) {
                this._eventListeners[eventName] = [];
                this.postMessage({
                    "urbanType": "event",
                    "address": eventName
                });
            }
            this._eventListeners[eventName].push(eventListener);
        };
        UrbanConnector.prototype.removeListener = function (eventListener) {
            for (var eventName in this._eventListeners) {
                this._eventListeners[eventName].remove(eventListener);
            }
        };
        UrbanConnector.prototype.removeAllListeners = function () {
            this._eventListeners = [];
        };
        UrbanConnector.prototype.globalSubscribeEvent = function (eventName, eventListener) {
            if (!(eventName in this._globalEventListeners)) {
                this._globalEventListeners[eventName] = [];
                this.postMessage({
                    "urbanType": "event",
                    "address": eventName
                });
            }
            this._globalEventListeners[eventName].push(eventListener);
        };
        UrbanConnector.prototype.onOpen = function () {
            console.log("websocket has been opened !!");
        };
        UrbanConnector.prototype.onClose = function (event) {
            console.log('WebSocket close', event.code, event.reason);
            UrbanConnector._instance.onCloseCB();
        };
        UrbanConnector.prototype.onMessage = function (event) {
            var urbanMessage = new UrbanMessage(event.data);
            if (urbanMessage.isCall() || urbanMessage.isDatamodel()) {
                if (UrbanConnector._instance._callbacks.hasOwnProperty(urbanMessage.callback_id)) {
                    UrbanConnector._instance._callbacks[urbanMessage.callback_id].promise.resolve(urbanMessage);
                    delete UrbanConnector._instance._callbacks[urbanMessage.callback_id].cb;
                    delete UrbanConnector._instance._callbacks[urbanMessage.callback_id];
                }
                else {
                    console.error("that's wrong. we got a message we can't match to callback and thus are leaking : ", urbanMessage.status);
                }
            }
            else if (urbanMessage.isEvent()) {
                if (urbanMessage.address in UrbanConnector._instance._eventListeners) {
                    for (var cb in UrbanConnector._instance._eventListeners[urbanMessage.address]) {
                        UrbanConnector._instance._eventListeners[urbanMessage.address][cb].call(null, urbanMessage.address, urbanMessage.parameters);
                    }
                }
                if (urbanMessage.address in UrbanConnector._instance._globalEventListeners) {
                    for (var cb in UrbanConnector._instance._globalEventListeners[urbanMessage.address]) {
                        UrbanConnector._instance._globalEventListeners[urbanMessage.address][cb].call(null, urbanMessage.address, urbanMessage.parameters);
                    }
                }
            }
        };
        UrbanConnector.prototype.getCallbackId = function () {
            this._currentCallbackId++;
            if (this._currentCallbackId > 100000)
                this._currentCallbackId = 0;
            return this._currentCallbackId;
        };
        UrbanConnector._instance = null;
        return UrbanConnector;
    })();
    function callFunction(address) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        return _urbanConnector.sendMessage({
            "urbanType": "call",
            "address": address,
            "parameters": parameters
        });
    }
    bus.callFunction = callFunction;
    function datamodelGet(address, szType) {
        return _urbanConnector.sendMessage({
            "urbanType": "datamodel",
            "address": address,
            "szType": szType,
            "parameters": []
        });
    }
    bus.datamodelGet = datamodelGet;
    function subscribeEvent(eventName, eventListener) {
        _urbanConnector.subscribeEvent(eventName, eventListener);
    }
    bus.subscribeEvent = subscribeEvent;
    function removeListener(eventListener) {
        _urbanConnector.removeListener(eventListener);
    }
    bus.removeListener = removeListener;
    function removeAllListeners() {
        _urbanConnector.removeAllListeners();
    }
    bus.removeAllListeners = removeAllListeners;
    function globalSubscribeEvent(eventName, eventListener) {
        _urbanConnector.globalSubscribeEvent(eventName, eventListener);
    }
    bus.globalSubscribeEvent = globalSubscribeEvent;
    function popupResponse(response, responseText, responseIndex) {
        _urbanConnector.popupResponse(response, responseText, responseIndex);
    }
    bus.popupResponse = popupResponse;
    function open(onClose) {
        _urbanConnector.onCloseCB = onClose;
        _urbanConnector.open();
    }
    bus.open = open;
    var _urbanConnector = UrbanConnector.getInstance();
})(bus || (bus = {}));
var sdk;
(function (sdk) {
    var business;
    (function (business) {
        var game;
        (function (game) {
            var api_pipeIn_dmStatic_event = (function () {
                function api_pipeIn_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_pipeIn_dmStatic_event;
            })();
            var api_pipeIn_dmStatic = (function () {
                function api_pipeIn_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_pipeIn_dmStatic_event(nodeAddress);
                }
                return api_pipeIn_dmStatic;
            })();
            var api_pipeIn_dmDynamic_event = (function () {
                function api_pipeIn_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_pipeIn_dmDynamic_event;
            })();
            var api_pipeIn_dmDynamic = (function () {
                function api_pipeIn_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_pipeIn_dmDynamic_event(nodeAddress);
                }
                return api_pipeIn_dmDynamic;
            })();
            var api_pipeIn_dmVolatile_event = (function () {
                function api_pipeIn_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_pipeIn_dmVolatile_event;
            })();
            var api_pipeIn_dmVolatile = (function () {
                function api_pipeIn_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_pipeIn_dmVolatile_event(nodeAddress);
                }
                return api_pipeIn_dmVolatile;
            })();
            var api_pipeIn_event = (function () {
                function api_pipeIn_event() {
                }
                return api_pipeIn_event;
            })();
            var api_pipeIn_status = (function () {
                function api_pipeIn_status() {
                }
                return api_pipeIn_status;
            })();
            var api_pipeIn = (function () {
                function api_pipeIn(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_pipeIn_dmDynamic(nodeAddress);
                    this.dmStatic = new api_pipeIn_dmStatic(nodeAddress);
                    this.dmVolatile = new api_pipeIn_dmVolatile(nodeAddress);
                    this.status = new api_pipeIn_status();
                    this.event = new api_pipeIn_event();
                }
                api_pipeIn.prototype.open = function (usPriorities, usDepth) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "UShort", "value": usPriorities, "return": false }, { "type": "UShort", "value": usDepth, "return": false });
                };
                api_pipeIn.prototype.push = function (roResource, szFamily, szSubFamily, usPriority) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0, { "type": "RFBusResource", "value": roResource, "return": false }, { "type": "string", "value": szFamily, "return": false }, { "type": "string", "value": szSubFamily, "return": false }, { "type": "UShort", "value": usPriority, "return": false });
                };
                api_pipeIn.prototype.close = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0);
                };
                return api_pipeIn;
            })();
            var api_pipeOut_dmStatic_event = (function () {
                function api_pipeOut_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_pipeOut_dmStatic_event;
            })();
            var api_pipeOut_dmStatic = (function () {
                function api_pipeOut_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_pipeOut_dmStatic_event(nodeAddress);
                }
                return api_pipeOut_dmStatic;
            })();
            var api_pipeOut_dmDynamic_event = (function () {
                function api_pipeOut_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_pipeOut_dmDynamic_event;
            })();
            var api_pipeOut_dmDynamic = (function () {
                function api_pipeOut_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_pipeOut_dmDynamic_event(nodeAddress);
                }
                return api_pipeOut_dmDynamic;
            })();
            var api_pipeOut_dmVolatile_event = (function () {
                function api_pipeOut_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_pipeOut_dmVolatile_event;
            })();
            var api_pipeOut_dmVolatile = (function () {
                function api_pipeOut_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_pipeOut_dmVolatile_event(nodeAddress);
                }
                return api_pipeOut_dmVolatile;
            })();
            var api_pipeOut_event = (function () {
                function api_pipeOut_event() {
                    this.resourceAvailable = (0x060107000 >>> 0);
                }
                return api_pipeOut_event;
            })();
            var api_pipeOut_status = (function () {
                function api_pipeOut_status() {
                }
                return api_pipeOut_status;
            })();
            var api_pipeOut = (function () {
                function api_pipeOut(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_pipeOut_dmDynamic(nodeAddress);
                    this.dmStatic = new api_pipeOut_dmStatic(nodeAddress);
                    this.dmVolatile = new api_pipeOut_dmVolatile(nodeAddress);
                    this.status = new api_pipeOut_status();
                    this.event = new api_pipeOut_event();
                }
                api_pipeOut.prototype.getFamily = function (szFamily) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "string", "value": szFamily, "return": true });
                };
                api_pipeOut.prototype.getSubFamily = function (szSubFamily) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0, { "type": "string", "value": szSubFamily, "return": true });
                };
                api_pipeOut.prototype.getResource = function (roResource) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "RFBusResource", "value": roResource, "return": true });
                };
                api_pipeOut.prototype.save = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0);
                };
                api_pipeOut.prototype.beginTransaction = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0);
                };
                api_pipeOut.prototype.endTransaction = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006005) >>> 0);
                };
                api_pipeOut.prototype.pop = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006006) >>> 0);
                };
                return api_pipeOut;
            })();
            game.pipeIn = new api_pipeIn(0x060004000 >>> 0);
            game.pipeOut = new api_pipeOut(0x060104000 >>> 0);
        })(game = business.game || (business.game = {}));
    })(business = sdk.business || (sdk.business = {}));
})(sdk || (sdk = {}));
var sdk;
(function (sdk) {
    var hardware;
    (function (hardware) {
        var terminal;
        (function (terminal) {
            var api_printer_dmStatic_event = (function () {
                function api_printer_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_printer_dmStatic_event;
            })();
            var api_printer_dmStatic = (function () {
                function api_printer_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_printer_dmStatic_event(nodeAddress);
                }
                return api_printer_dmStatic;
            })();
            var api_printer_dmDynamic_event = (function () {
                function api_printer_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_printer_dmDynamic_event;
            })();
            var api_printer_dmDynamic = (function () {
                function api_printer_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_printer_dmDynamic_event(nodeAddress);
                }
                return api_printer_dmDynamic;
            })();
            var api_printer_dmVolatile_event = (function () {
                function api_printer_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.status = (((this.nodeAddress & 0x0FFFF0000) | 0x000008300) >>> 0);
                    this.serialNumber = (((this.nodeAddress & 0x0FFFF0000) | 0x000008301) >>> 0);
                    this.versionFirmware = (((this.nodeAddress & 0x0FFFF0000) | 0x000008302) >>> 0);
                }
                return api_printer_dmVolatile_event;
            })();
            var api_printer_dmVolatile = (function () {
                function api_printer_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_printer_dmVolatile_event(nodeAddress);
                }
                api_printer_dmVolatile.prototype.status = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008300) >>> 0, "number");
                };
                api_printer_dmVolatile.prototype.serialNumber = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008301) >>> 0, "string");
                };
                api_printer_dmVolatile.prototype.versionFirmware = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008302) >>> 0, "string");
                };
                return api_printer_dmVolatile;
            })();
            var api_printer_event = (function () {
                function api_printer_event() {
                    this.unplugged = (0x010007000 >>> 0);
                    this.plugged = (0x010007001 >>> 0);
                    this.ready = (0x010007002 >>> 0);
                    this.versionReady = (0x010007003 >>> 0);
                    this.coverOpen = (0x010007004 >>> 0);
                    this.coverClose = (0x010007005 >>> 0);
                    this.almostEndOfPaper = (0x010007006 >>> 0);
                    this.endOfPaper = (0x010007007 >>> 0);
                    this.paperOk = (0x010007008 >>> 0);
                    this.paperJam = (0x010007009 >>> 0);
                    this.tooHot = (0x01000700A >>> 0);
                }
                return api_printer_event;
            })();
            var api_printer_status = (function () {
                function api_printer_status() {
                    this.exceptionBadF3g = (0x01000C800 >>> 0);
                    this.errorDoesntWork = (0x01000C701 >>> 0);
                    this.timeoutConnection = (0x01000C802 >>> 0);
                }
                return api_printer_status;
            })();
            var api_printer = (function () {
                function api_printer(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_printer_dmDynamic(nodeAddress);
                    this.dmStatic = new api_printer_dmStatic(nodeAddress);
                    this.dmVolatile = new api_printer_dmVolatile(nodeAddress);
                    this.status = new api_printer_status();
                    this.event = new api_printer_event();
                }
                api_printer.prototype.open = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0);
                };
                api_printer.prototype.close = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                api_printer.prototype.print = function (roSvg) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "RSSvg", "value": roSvg, "return": false });
                };
                api_printer.prototype.printBmp = function (roBmp) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0, { "type": "ImageBmp", "value": roBmp, "return": false });
                };
                api_printer.prototype.printDiagnostic = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0);
                };
                api_printer.prototype.cut = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006005) >>> 0);
                };
                api_printer.prototype.feedPaper = function (usLines) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006006) >>> 0, { "type": "UShort", "value": usLines, "return": false });
                };
                api_printer.prototype.updateFirmware = function (szFirmwarePath) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006007) >>> 0, { "type": "string", "value": szFirmwarePath, "return": false });
                };
                api_printer.prototype.refreshInformation = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006008) >>> 0);
                };
                api_printer.prototype.printTest = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006009) >>> 0);
                };
                return api_printer;
            })();
            var api_barcodereader_dmStatic_event = (function () {
                function api_barcodereader_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_barcodereader_dmStatic_event;
            })();
            var api_barcodereader_dmStatic = (function () {
                function api_barcodereader_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_barcodereader_dmStatic_event(nodeAddress);
                }
                return api_barcodereader_dmStatic;
            })();
            var api_barcodereader_dmDynamic_event = (function () {
                function api_barcodereader_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_barcodereader_dmDynamic_event;
            })();
            var api_barcodereader_dmDynamic = (function () {
                function api_barcodereader_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_barcodereader_dmDynamic_event(nodeAddress);
                }
                return api_barcodereader_dmDynamic;
            })();
            var api_barcodereader_dmVolatile_event = (function () {
                function api_barcodereader_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.serialNumber = (((this.nodeAddress & 0x0FFFF0000) | 0x000008300) >>> 0);
                    this.firmwareVersion = (((this.nodeAddress & 0x0FFFF0000) | 0x000008301) >>> 0);
                }
                return api_barcodereader_dmVolatile_event;
            })();
            var api_barcodereader_dmVolatile = (function () {
                function api_barcodereader_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_barcodereader_dmVolatile_event(nodeAddress);
                }
                api_barcodereader_dmVolatile.prototype.serialNumber = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008300) >>> 0, "string");
                };
                api_barcodereader_dmVolatile.prototype.firmwareVersion = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008301) >>> 0, "string");
                };
                return api_barcodereader_dmVolatile;
            })();
            var api_barcodereader_event = (function () {
                function api_barcodereader_event() {
                    this.ready = (0x010107000 >>> 0);
                    this.barcode = (0x010107001 >>> 0);
                    this.plugged = (0x010107002 >>> 0);
                    this.unplugged = (0x010107003 >>> 0);
                }
                return api_barcodereader_event;
            })();
            var api_barcodereader_status = (function () {
                function api_barcodereader_status() {
                }
                return api_barcodereader_status;
            })();
            var api_barcodereader = (function () {
                function api_barcodereader(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_barcodereader_dmDynamic(nodeAddress);
                    this.dmStatic = new api_barcodereader_dmStatic(nodeAddress);
                    this.dmVolatile = new api_barcodereader_dmVolatile(nodeAddress);
                    this.status = new api_barcodereader_status();
                    this.event = new api_barcodereader_event();
                }
                api_barcodereader.prototype.open = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0);
                };
                api_barcodereader.prototype.close = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                api_barcodereader.prototype.updateFirmware = function (szFirmwarePath) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "string", "value": szFirmwarePath, "return": false });
                };
                api_barcodereader.prototype.Enable = function (bBeepOn) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0, { "type": "bool", "value": bBeepOn, "return": false });
                };
                api_barcodereader.prototype.EnableOnce = function (bBeepOn, bForce) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0, { "type": "bool", "value": bBeepOn, "return": false }, { "type": "bool", "value": bForce, "return": false });
                };
                api_barcodereader.prototype.Disable = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006005) >>> 0);
                };
                api_barcodereader.prototype.EnableSymbology = function (eType, nMin, nMax) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006006) >>> 0, { "type": "int", "value": eType, "return": false }, { "type": "UShort", "value": nMin, "return": false }, { "type": "UShort", "value": nMax, "return": false });
                };
                api_barcodereader.prototype.DisableSymbology = function (eType) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006007) >>> 0, { "type": "int", "value": eType, "return": false });
                };
                api_barcodereader.prototype.SetFocusMode = function (eType) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006008) >>> 0, { "type": "int", "value": eType, "return": false });
                };
                api_barcodereader.prototype.refreshInformation = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006009) >>> 0);
                };
                return api_barcodereader;
            })();
            var api_screen_dmStatic_event = (function () {
                function api_screen_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_screen_dmStatic_event;
            })();
            var api_screen_dmStatic = (function () {
                function api_screen_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_screen_dmStatic_event(nodeAddress);
                }
                return api_screen_dmStatic;
            })();
            var api_screen_dmDynamic_event = (function () {
                function api_screen_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.luminosity = (((this.nodeAddress & 0x0FFFF0000) | 0x000008200) >>> 0);
                }
                return api_screen_dmDynamic_event;
            })();
            var api_screen_dmDynamic = (function () {
                function api_screen_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_screen_dmDynamic_event(nodeAddress);
                }
                api_screen_dmDynamic.prototype.luminosity = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008200) >>> 0, "number");
                };
                return api_screen_dmDynamic;
            })();
            var api_screen_dmVolatile_event = (function () {
                function api_screen_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.status = (((this.nodeAddress & 0x0FFFF0000) | 0x000008300) >>> 0);
                }
                return api_screen_dmVolatile_event;
            })();
            var api_screen_dmVolatile = (function () {
                function api_screen_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_screen_dmVolatile_event(nodeAddress);
                }
                api_screen_dmVolatile.prototype.status = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008300) >>> 0, "number");
                };
                return api_screen_dmVolatile;
            })();
            var api_screen_event = (function () {
                function api_screen_event() {
                    this.unplugged = (0x010207000 >>> 0);
                    this.plugged = (0x010207001 >>> 0);
                }
                return api_screen_event;
            })();
            var api_screen_status = (function () {
                function api_screen_status() {
                }
                return api_screen_status;
            })();
            var api_screen = (function () {
                function api_screen(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_screen_dmDynamic(nodeAddress);
                    this.dmStatic = new api_screen_dmStatic(nodeAddress);
                    this.dmVolatile = new api_screen_dmVolatile(nodeAddress);
                    this.status = new api_screen_status();
                    this.event = new api_screen_event();
                }
                api_screen.prototype.open = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0);
                };
                api_screen.prototype.close = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                api_screen.prototype.configure = function (dTimeClear) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "double", "value": dTimeClear, "return": false });
                };
                api_screen.prototype.displayLine = function (iLine, sText, align) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0, { "type": "int", "value": iLine, "return": false }, { "type": "string", "value": sText, "return": false }, { "type": "int", "value": align, "return": false });
                };
                api_screen.prototype.autoTest = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0);
                };
                api_screen.prototype.setLuminosity = function (iPercent) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006005) >>> 0, { "type": "int", "value": iPercent, "return": false });
                };
                api_screen.prototype.getLuminosity = function (iLuminosity) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006006) >>> 0, { "type": "int", "value": iLuminosity, "return": true });
                };
                api_screen.prototype.backLightOn = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006007) >>> 0);
                };
                api_screen.prototype.backLightOff = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006008) >>> 0);
                };
                api_screen.prototype.updateFirmware = function (szFirmwarePath) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006009) >>> 0, { "type": "string", "value": szFirmwarePath, "return": false });
                };
                api_screen.prototype.refreshInformation = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x00000600A) >>> 0);
                };
                return api_screen;
            })();
            var api_sound_dmStatic_event = (function () {
                function api_sound_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_sound_dmStatic_event;
            })();
            var api_sound_dmStatic = (function () {
                function api_sound_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_sound_dmStatic_event(nodeAddress);
                }
                return api_sound_dmStatic;
            })();
            var api_sound_dmDynamic_event = (function () {
                function api_sound_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_sound_dmDynamic_event;
            })();
            var api_sound_dmDynamic = (function () {
                function api_sound_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_sound_dmDynamic_event(nodeAddress);
                }
                return api_sound_dmDynamic;
            })();
            var api_sound_dmVolatile_event = (function () {
                function api_sound_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_sound_dmVolatile_event;
            })();
            var api_sound_dmVolatile = (function () {
                function api_sound_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_sound_dmVolatile_event(nodeAddress);
                }
                return api_sound_dmVolatile;
            })();
            var api_sound_event = (function () {
                function api_sound_event() {
                    this.mute = (0x010307000 >>> 0);
                    this.unmute = (0x010307001 >>> 0);
                    this.volume = (0x010307002 >>> 0);
                }
                return api_sound_event;
            })();
            var api_sound_status = (function () {
                function api_sound_status() {
                }
                return api_sound_status;
            })();
            var api_sound = (function () {
                function api_sound(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_sound_dmDynamic(nodeAddress);
                    this.dmStatic = new api_sound_dmStatic(nodeAddress);
                    this.dmVolatile = new api_sound_dmVolatile(nodeAddress);
                    this.status = new api_sound_status();
                    this.event = new api_sound_event();
                }
                api_sound.prototype.open = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0);
                };
                api_sound.prototype.close = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                api_sound.prototype.isOpened = function (bResult) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "Bool", "value": bResult, "return": true });
                };
                api_sound.prototype.getVolume = function (usVolume) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0, { "type": "UShort", "value": usVolume, "return": true });
                };
                api_sound.prototype.setVolume = function (usVolume) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0, { "type": "UShort", "value": usVolume, "return": false });
                };
                api_sound.prototype.mute = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006005) >>> 0);
                };
                api_sound.prototype.unmute = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006006) >>> 0);
                };
                api_sound.prototype.isMute = function (bResult) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006007) >>> 0, { "type": "Bool", "value": bResult, "return": true });
                };
                api_sound.prototype.refreshInformation = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006008) >>> 0);
                };
                return api_sound;
            })();
            var api_operatingSystem_dmStatic_event = (function () {
                function api_operatingSystem_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_operatingSystem_dmStatic_event;
            })();
            var api_operatingSystem_dmStatic = (function () {
                function api_operatingSystem_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_operatingSystem_dmStatic_event(nodeAddress);
                }
                return api_operatingSystem_dmStatic;
            })();
            var api_operatingSystem_dmDynamic_event = (function () {
                function api_operatingSystem_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.ip = (((this.nodeAddress & 0x0FFFF0000) | 0x000008200) >>> 0);
                    this.subnetMask = (((this.nodeAddress & 0x0FFFF0000) | 0x000008201) >>> 0);
                    this.gatewayIp = (((this.nodeAddress & 0x0FFFF0000) | 0x000008202) >>> 0);
                }
                return api_operatingSystem_dmDynamic_event;
            })();
            var api_operatingSystem_dmDynamic = (function () {
                function api_operatingSystem_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_operatingSystem_dmDynamic_event(nodeAddress);
                }
                api_operatingSystem_dmDynamic.prototype.ip = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008200) >>> 0, "string");
                };
                api_operatingSystem_dmDynamic.prototype.subnetMask = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008201) >>> 0, "string");
                };
                api_operatingSystem_dmDynamic.prototype.gatewayIp = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008202) >>> 0, "string");
                };
                return api_operatingSystem_dmDynamic;
            })();
            var api_operatingSystem_dmVolatile_event = (function () {
                function api_operatingSystem_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.cableStatus = (((this.nodeAddress & 0x0FFFF0000) | 0x000008300) >>> 0);
                }
                return api_operatingSystem_dmVolatile_event;
            })();
            var api_operatingSystem_dmVolatile = (function () {
                function api_operatingSystem_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_operatingSystem_dmVolatile_event(nodeAddress);
                }
                api_operatingSystem_dmVolatile.prototype.cableStatus = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008300) >>> 0, "number");
                };
                return api_operatingSystem_dmVolatile;
            })();
            var api_operatingSystem_event = (function () {
                function api_operatingSystem_event() {
                    this.shutdown = (0x010407000 >>> 0);
                    this.reboot = (0x010407001 >>> 0);
                    this.cablePlugged = (0x010407002 >>> 0);
                    this.cableUnplugged = (0x010407003 >>> 0);
                    this.diskPlugged = (0x010407004 >>> 0);
                    this.diskUnplugged = (0x010407005 >>> 0);
                }
                return api_operatingSystem_event;
            })();
            var api_operatingSystem_status = (function () {
                function api_operatingSystem_status() {
                }
                return api_operatingSystem_status;
            })();
            var api_operatingSystem = (function () {
                function api_operatingSystem(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_operatingSystem_dmDynamic(nodeAddress);
                    this.dmStatic = new api_operatingSystem_dmStatic(nodeAddress);
                    this.dmVolatile = new api_operatingSystem_dmVolatile(nodeAddress);
                    this.status = new api_operatingSystem_status();
                    this.event = new api_operatingSystem_event();
                }
                api_operatingSystem.prototype.shutdown = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0);
                };
                api_operatingSystem.prototype.reboot = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                api_operatingSystem.prototype.mountVolume = function (szVolumeName, szMountName) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "string", "value": szVolumeName, "return": false }, { "type": "string", "value": szMountName, "return": false });
                };
                api_operatingSystem.prototype.unmountVolume = function (szVolumeName) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0, { "type": "string", "value": szVolumeName, "return": false });
                };
                api_operatingSystem.prototype.setTime = function (rfDateTime) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0, { "type": "RFDateTime", "value": rfDateTime, "return": true });
                };
                api_operatingSystem.prototype.configure = function (roInstall) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006005) >>> 0, { "type": "RSDictionnary", "value": roInstall, "return": true });
                };
                api_operatingSystem.prototype.refreshInformation = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006006) >>> 0);
                };
                api_operatingSystem.prototype.open = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006007) >>> 0);
                };
                return api_operatingSystem;
            })();
            terminal.printer = new api_printer(0x010004000 >>> 0);
            terminal.barcodereader = new api_barcodereader(0x010104000 >>> 0);
            terminal.screen = new api_screen(0x010204000 >>> 0);
            terminal.sound = new api_sound(0x010304000 >>> 0);
            terminal.operatingSystem = new api_operatingSystem(0x010404000 >>> 0);
        })(terminal = hardware.terminal || (hardware.terminal = {}));
    })(hardware = sdk.hardware || (sdk.hardware = {}));
})(sdk || (sdk = {}));
var sdk;
(function (sdk) {
    var project;
    (function (project) {
        var middleware;
        (function (middleware) {
            var api_exception_handler_dmStatic_event = (function () {
                function api_exception_handler_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_exception_handler_dmStatic_event;
            })();
            var api_exception_handler_dmStatic = (function () {
                function api_exception_handler_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_exception_handler_dmStatic_event(nodeAddress);
                }
                return api_exception_handler_dmStatic;
            })();
            var api_exception_handler_dmDynamic_event = (function () {
                function api_exception_handler_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.type = (((this.nodeAddress & 0x0FFFF0000) | 0x000008200) >>> 0);
                    this.description = (((this.nodeAddress & 0x0FFFF0000) | 0x000008201) >>> 0);
                    this.rebootNeeded = (((this.nodeAddress & 0x0FFFF0000) | 0x000008202) >>> 0);
                    this.ackedByOperator = (((this.nodeAddress & 0x0FFFF0000) | 0x000008203) >>> 0);
                    this.printed = (((this.nodeAddress & 0x0FFFF0000) | 0x000008204) >>> 0);
                    this.sentToEste = (((this.nodeAddress & 0x0FFFF0000) | 0x000008205) >>> 0);
                }
                return api_exception_handler_dmDynamic_event;
            })();
            var api_exception_handler_dmDynamic = (function () {
                function api_exception_handler_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_exception_handler_dmDynamic_event(nodeAddress);
                }
                api_exception_handler_dmDynamic.prototype.type = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008200) >>> 0, "number");
                };
                api_exception_handler_dmDynamic.prototype.description = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008201) >>> 0, "string");
                };
                api_exception_handler_dmDynamic.prototype.rebootNeeded = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008202) >>> 0, "boolean");
                };
                api_exception_handler_dmDynamic.prototype.ackedByOperator = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008203) >>> 0, "boolean");
                };
                api_exception_handler_dmDynamic.prototype.printed = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008204) >>> 0, "boolean");
                };
                api_exception_handler_dmDynamic.prototype.sentToEste = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008205) >>> 0, "boolean");
                };
                return api_exception_handler_dmDynamic;
            })();
            var api_exception_handler_dmVolatile_event = (function () {
                function api_exception_handler_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_exception_handler_dmVolatile_event;
            })();
            var api_exception_handler_dmVolatile = (function () {
                function api_exception_handler_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_exception_handler_dmVolatile_event(nodeAddress);
                }
                return api_exception_handler_dmVolatile;
            })();
            var api_exception_handler_event = (function () {
                function api_exception_handler_event() {
                    this.exceptionOccured = (0x090007000 >>> 0);
                }
                return api_exception_handler_event;
            })();
            var api_exception_handler_status = (function () {
                function api_exception_handler_status() {
                    this.fatal = (0x09000C800 >>> 0);
                    this.standard = (0x09000C801 >>> 0);
                }
                return api_exception_handler_status;
            })();
            var api_exception_handler = (function () {
                function api_exception_handler(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_exception_handler_dmDynamic(nodeAddress);
                    this.dmStatic = new api_exception_handler_dmStatic(nodeAddress);
                    this.dmVolatile = new api_exception_handler_dmVolatile(nodeAddress);
                    this.status = new api_exception_handler_status();
                    this.event = new api_exception_handler_event();
                }
                api_exception_handler.prototype.start = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0);
                };
                api_exception_handler.prototype.throwException = function (errType, szDescription, bRebootNeeded) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0, { "type": "RFStatus", "value": errType, "return": false }, { "type": "string", "value": szDescription, "return": false }, { "type": "Bool", "value": bRebootNeeded, "return": false });
                };
                return api_exception_handler;
            })();
            var api_user_dmStatic_event = (function () {
                function api_user_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_user_dmStatic_event;
            })();
            var api_user_dmStatic = (function () {
                function api_user_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_user_dmStatic_event(nodeAddress);
                }
                return api_user_dmStatic;
            })();
            var api_user_dmDynamic_event = (function () {
                function api_user_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_user_dmDynamic_event;
            })();
            var api_user_dmDynamic = (function () {
                function api_user_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_user_dmDynamic_event(nodeAddress);
                }
                return api_user_dmDynamic;
            })();
            var api_user_dmVolatile_event = (function () {
                function api_user_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_user_dmVolatile_event;
            })();
            var api_user_dmVolatile = (function () {
                function api_user_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_user_dmVolatile_event(nodeAddress);
                }
                return api_user_dmVolatile;
            })();
            var api_user_event = (function () {
                function api_user_event() {
                }
                return api_user_event;
            })();
            var api_user_status = (function () {
                function api_user_status() {
                }
                return api_user_status;
            })();
            var api_user = (function () {
                function api_user(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_user_dmDynamic(nodeAddress);
                    this.dmStatic = new api_user_dmStatic(nodeAddress);
                    this.dmVolatile = new api_user_dmVolatile(nodeAddress);
                    this.status = new api_user_status();
                    this.event = new api_user_event();
                }
                api_user.prototype.login = function (rszOperatorId, rszOperatorPwd) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "string", "value": rszOperatorId, "return": false }, { "type": "string", "value": rszOperatorPwd, "return": false });
                };
                api_user.prototype.logout = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                return api_user;
            })();
            var api_terminal_dmStatic_event = (function () {
                function api_terminal_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_terminal_dmStatic_event;
            })();
            var api_terminal_dmStatic = (function () {
                function api_terminal_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_terminal_dmStatic_event(nodeAddress);
                }
                return api_terminal_dmStatic;
            })();
            var api_terminal_dmDynamic_event = (function () {
                function api_terminal_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.languageName = (((this.nodeAddress & 0x0FFFF0000) | 0x000008200) >>> 0);
                    this.configName = (((this.nodeAddress & 0x0FFFF0000) | 0x000008201) >>> 0);
                    this.terminalIpAdsl = (((this.nodeAddress & 0x0FFFF0000) | 0x000008202) >>> 0);
                    this.terminalNameAdsl = (((this.nodeAddress & 0x0FFFF0000) | 0x000008203) >>> 0);
                    this.netmaskIpAdsl = (((this.nodeAddress & 0x0FFFF0000) | 0x000008204) >>> 0);
                    this.gatewayIpAdsl = (((this.nodeAddress & 0x0FFFF0000) | 0x000008205) >>> 0);
                    this.stuIpAdsl = (((this.nodeAddress & 0x0FFFF0000) | 0x000008206) >>> 0);
                    this.escIp1Adsl = (((this.nodeAddress & 0x0FFFF0000) | 0x000008207) >>> 0);
                    this.escIp2Adsl = (((this.nodeAddress & 0x0FFFF0000) | 0x000008208) >>> 0);
                    this.logIpAdsl = (((this.nodeAddress & 0x0FFFF0000) | 0x000008209) >>> 0);
                    this.terminalIpCellular = (((this.nodeAddress & 0x0FFFF0000) | 0x00000820A) >>> 0);
                    this.terminalNameCellular = (((this.nodeAddress & 0x0FFFF0000) | 0x00000820B) >>> 0);
                    this.netmaskIpCellular = (((this.nodeAddress & 0x0FFFF0000) | 0x00000820C) >>> 0);
                    this.gatewayIpCellular = (((this.nodeAddress & 0x0FFFF0000) | 0x00000820D) >>> 0);
                    this.stuIpCellular = (((this.nodeAddress & 0x0FFFF0000) | 0x00000820E) >>> 0);
                    this.escIp1Cellular = (((this.nodeAddress & 0x0FFFF0000) | 0x00000820F) >>> 0);
                    this.escIp2Cellular = (((this.nodeAddress & 0x0FFFF0000) | 0x000008210) >>> 0);
                    this.logIpCellular = (((this.nodeAddress & 0x0FFFF0000) | 0x000008211) >>> 0);
                    this.nbIntrusion = (((this.nodeAddress & 0x0FFFF0000) | 0x000008212) >>> 0);
                    this.deviceClassKey = (((this.nodeAddress & 0x0FFFF0000) | 0x000008213) >>> 0);
                    this.clientNameKey = (((this.nodeAddress & 0x0FFFF0000) | 0x000008214) >>> 0);
                    this.mbSerialNumber = (((this.nodeAddress & 0x0FFFF0000) | 0x000008215) >>> 0);
                    this.udpMaxPacketLength = (((this.nodeAddress & 0x0FFFF0000) | 0x000008216) >>> 0);
                }
                return api_terminal_dmDynamic_event;
            })();
            var api_terminal_dmDynamic = (function () {
                function api_terminal_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_terminal_dmDynamic_event(nodeAddress);
                }
                api_terminal_dmDynamic.prototype.languageName = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008200) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.configName = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008201) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.terminalIpAdsl = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008202) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.terminalNameAdsl = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008203) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.netmaskIpAdsl = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008204) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.gatewayIpAdsl = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008205) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.stuIpAdsl = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008206) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.escIp1Adsl = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008207) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.escIp2Adsl = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008208) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.logIpAdsl = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008209) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.terminalIpCellular = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x0000820A) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.terminalNameCellular = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x0000820B) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.netmaskIpCellular = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x0000820C) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.gatewayIpCellular = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x0000820D) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.stuIpCellular = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x0000820E) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.escIp1Cellular = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x0000820F) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.escIp2Cellular = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008210) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.logIpCellular = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008211) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.nbIntrusion = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008212) >>> 0, "number");
                };
                api_terminal_dmDynamic.prototype.deviceClassKey = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008213) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.clientNameKey = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008214) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.mbSerialNumber = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008215) >>> 0, "string");
                };
                api_terminal_dmDynamic.prototype.udpMaxPacketLength = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008216) >>> 0, "number");
                };
                return api_terminal_dmDynamic;
            })();
            var api_terminal_dmVolatile_event = (function () {
                function api_terminal_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.gamePrivileges = (((this.nodeAddress & 0x0FFFF0000) | 0x000008300) >>> 0);
                }
                return api_terminal_dmVolatile_event;
            })();
            var api_terminal_dmVolatile = (function () {
                function api_terminal_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_terminal_dmVolatile_event(nodeAddress);
                }
                api_terminal_dmVolatile.prototype.gamePrivileges = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008300) >>> 0, "number");
                };
                return api_terminal_dmVolatile;
            })();
            var api_terminal_event = (function () {
                function api_terminal_event() {
                }
                return api_terminal_event;
            })();
            var api_terminal_status = (function () {
                function api_terminal_status() {
                }
                return api_terminal_status;
            })();
            var api_terminal = (function () {
                function api_terminal(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_terminal_dmDynamic(nodeAddress);
                    this.dmStatic = new api_terminal_dmStatic(nodeAddress);
                    this.dmVolatile = new api_terminal_dmVolatile(nodeAddress);
                    this.status = new api_terminal_status();
                    this.event = new api_terminal_event();
                }
                api_terminal.prototype.start = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0);
                };
                api_terminal.prototype.stop = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                api_terminal.prototype.setMode = function (iMode) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "Int", "value": iMode, "return": false });
                };
                api_terminal.prototype.getConfiguration = function (szConfigName, roInstall) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0, { "type": "string", "value": szConfigName, "return": false }, { "type": "RSDictionnary", "value": roInstall, "return": true });
                };
                api_terminal.prototype.setConfiguration = function (szConfigName, roInstall) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0, { "type": "string", "value": szConfigName, "return": false }, { "type": "RSDictionnary", "value": roInstall, "return": true });
                };
                api_terminal.prototype.hardwareSelfTest = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006005) >>> 0);
                };
                api_terminal.prototype.hardwarePrinterTest = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006006) >>> 0);
                };
                api_terminal.prototype.hardwareScreenCalibrate = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006007) >>> 0);
                };
                api_terminal.prototype.initDevices = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006008) >>> 0);
                };
                api_terminal.prototype.shutdown = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006009) >>> 0);
                };
                api_terminal.prototype.resetIntrusion = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x00000600A) >>> 0);
                };
                api_terminal.prototype.changeLanguage = function (szLanguage) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x00000600B) >>> 0, { "type": "string", "value": szLanguage, "return": false });
                };
                api_terminal.prototype.hardwareSoundGetVolume = function (usVolume) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x00000600C) >>> 0, { "type": "UShort", "value": usVolume, "return": true });
                };
                api_terminal.prototype.hardwareSoundSetVolume = function (usVolume) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x00000600D) >>> 0, { "type": "UShort", "value": usVolume, "return": false });
                };
                api_terminal.prototype.onMaintenanceCode = function (uiCode, usData) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x00000600E) >>> 0, { "type": "UInt", "value": uiCode, "return": false }, { "type": "UShort", "value": usData, "return": false });
                };
                return api_terminal;
            })();
            middleware.exception_handler = new api_exception_handler(0x090002000 >>> 0);
            middleware.user = new api_user(0x090102000 >>> 0);
            middleware.terminal = new api_terminal(0x090202000 >>> 0);
        })(middleware = project.middleware || (project.middleware = {}));
    })(project = sdk.project || (sdk.project = {}));
})(sdk || (sdk = {}));
var sdk;
(function (sdk) {
    var technic;
    (function (technic) {
        var network;
        (function (network) {
            var api_clientLink_dmStatic_event = (function () {
                function api_clientLink_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_clientLink_dmStatic_event;
            })();
            var api_clientLink_dmStatic = (function () {
                function api_clientLink_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_clientLink_dmStatic_event(nodeAddress);
                }
                return api_clientLink_dmStatic;
            })();
            var api_clientLink_dmDynamic_event = (function () {
                function api_clientLink_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_clientLink_dmDynamic_event;
            })();
            var api_clientLink_dmDynamic = (function () {
                function api_clientLink_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_clientLink_dmDynamic_event(nodeAddress);
                }
                return api_clientLink_dmDynamic;
            })();
            var api_clientLink_dmVolatile_event = (function () {
                function api_clientLink_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_clientLink_dmVolatile_event;
            })();
            var api_clientLink_dmVolatile = (function () {
                function api_clientLink_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_clientLink_dmVolatile_event(nodeAddress);
                }
                return api_clientLink_dmVolatile;
            })();
            var api_clientLink_event = (function () {
                function api_clientLink_event() {
                    this.opened = (0x020007000 >>> 0);
                    this.closed = (0x020007001 >>> 0);
                    this.activityBegin = (0x020007002 >>> 0);
                    this.activityEnd = (0x020007003 >>> 0);
                    this.suspendBegin = (0x020007004 >>> 0);
                    this.suspendEnd = (0x020007005 >>> 0);
                    this.retryBegin = (0x020007006 >>> 0);
                    this.retryEnd = (0x020007007 >>> 0);
                }
                return api_clientLink_event;
            })();
            var api_clientLink_status = (function () {
                function api_clientLink_status() {
                }
                return api_clientLink_status;
            })();
            var api_clientLink = (function () {
                function api_clientLink(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_clientLink_dmDynamic(nodeAddress);
                    this.dmStatic = new api_clientLink_dmStatic(nodeAddress);
                    this.dmVolatile = new api_clientLink_dmVolatile(nodeAddress);
                    this.status = new api_clientLink_status();
                    this.event = new api_clientLink_event();
                }
                api_clientLink.prototype.create = function (szName, szType, roConfiguration) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "string", "value": szName, "return": false }, { "type": "string", "value": szType, "return": false }, { "type": "RSDictionnary", "value": roConfiguration, "return": false });
                };
                api_clientLink.prototype.configure = function (szName, roConfiguration) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0, { "type": "string", "value": szName, "return": false }, { "type": "RSDictionnary", "value": roConfiguration, "return": false });
                };
                api_clientLink.prototype.destroy = function (szName) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "string", "value": szName, "return": false });
                };
                return api_clientLink;
            })();
            var api_clientConnector_dmStatic_event = (function () {
                function api_clientConnector_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_clientConnector_dmStatic_event;
            })();
            var api_clientConnector_dmStatic = (function () {
                function api_clientConnector_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_clientConnector_dmStatic_event(nodeAddress);
                }
                return api_clientConnector_dmStatic;
            })();
            var api_clientConnector_dmDynamic_event = (function () {
                function api_clientConnector_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_clientConnector_dmDynamic_event;
            })();
            var api_clientConnector_dmDynamic = (function () {
                function api_clientConnector_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_clientConnector_dmDynamic_event(nodeAddress);
                }
                return api_clientConnector_dmDynamic;
            })();
            var api_clientConnector_dmVolatile_event = (function () {
                function api_clientConnector_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_clientConnector_dmVolatile_event;
            })();
            var api_clientConnector_dmVolatile = (function () {
                function api_clientConnector_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_clientConnector_dmVolatile_event(nodeAddress);
                }
                return api_clientConnector_dmVolatile;
            })();
            var api_clientConnector_event = (function () {
                function api_clientConnector_event() {
                }
                return api_clientConnector_event;
            })();
            var api_clientConnector_status = (function () {
                function api_clientConnector_status() {
                }
                return api_clientConnector_status;
            })();
            var api_clientConnector = (function () {
                function api_clientConnector(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_clientConnector_dmDynamic(nodeAddress);
                    this.dmStatic = new api_clientConnector_dmStatic(nodeAddress);
                    this.dmVolatile = new api_clientConnector_dmVolatile(nodeAddress);
                    this.status = new api_clientConnector_status();
                    this.event = new api_clientConnector_event();
                }
                api_clientConnector.prototype.attach = function (szLink) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "string", "value": szLink, "return": false });
                };
                api_clientConnector.prototype.open = function (uiConnectionTimeoutSecs, uiActivityTimeoutSecs) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0, { "type": "UInt", "value": uiConnectionTimeoutSecs, "return": false }, { "type": "UInt", "value": uiActivityTimeoutSecs, "return": false });
                };
                api_clientConnector.prototype.send = function (roRequest, roResponse) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "RSPacket", "value": roRequest, "return": true }, { "type": "RSPacket", "value": roResponse, "return": true });
                };
                api_clientConnector.prototype.close = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0);
                };
                api_clientConnector.prototype.dettach = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0);
                };
                return api_clientConnector;
            })();
            var api_server_dmStatic_event = (function () {
                function api_server_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_server_dmStatic_event;
            })();
            var api_server_dmStatic = (function () {
                function api_server_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_server_dmStatic_event(nodeAddress);
                }
                return api_server_dmStatic;
            })();
            var api_server_dmDynamic_event = (function () {
                function api_server_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.state = (((this.nodeAddress & 0x0FFFF0000) | 0x000008200) >>> 0);
                }
                return api_server_dmDynamic_event;
            })();
            var api_server_dmDynamic = (function () {
                function api_server_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_server_dmDynamic_event(nodeAddress);
                }
                api_server_dmDynamic.prototype.state = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008200) >>> 0, "string");
                };
                return api_server_dmDynamic;
            })();
            var api_server_dmVolatile_event = (function () {
                function api_server_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_server_dmVolatile_event;
            })();
            var api_server_dmVolatile = (function () {
                function api_server_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_server_dmVolatile_event(nodeAddress);
                }
                return api_server_dmVolatile;
            })();
            var api_server_event = (function () {
                function api_server_event() {
                    this.connectionAccepted = (0x020207000 >>> 0);
                    this.connectionRejected = (0x020207001 >>> 0);
                    this.connectionClosed = (0x020207002 >>> 0);
                }
                return api_server_event;
            })();
            var api_server_status = (function () {
                function api_server_status() {
                }
                return api_server_status;
            })();
            var api_server = (function () {
                function api_server(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_server_dmDynamic(nodeAddress);
                    this.dmStatic = new api_server_dmStatic(nodeAddress);
                    this.dmVolatile = new api_server_dmVolatile(nodeAddress);
                    this.status = new api_server_status();
                    this.event = new api_server_event();
                }
                api_server.prototype.open = function (roConfiguration) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "RSDictionnary", "value": roConfiguration, "return": false });
                };
                api_server.prototype.close = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                return api_server;
            })();
            var api_networkServer_dmStatic_event = (function () {
                function api_networkServer_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_networkServer_dmStatic_event;
            })();
            var api_networkServer_dmStatic = (function () {
                function api_networkServer_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_networkServer_dmStatic_event(nodeAddress);
                }
                return api_networkServer_dmStatic;
            })();
            var api_networkServer_dmDynamic_event = (function () {
                function api_networkServer_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_networkServer_dmDynamic_event;
            })();
            var api_networkServer_dmDynamic = (function () {
                function api_networkServer_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_networkServer_dmDynamic_event(nodeAddress);
                }
                return api_networkServer_dmDynamic;
            })();
            var api_networkServer_dmVolatile_event = (function () {
                function api_networkServer_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_networkServer_dmVolatile_event;
            })();
            var api_networkServer_dmVolatile = (function () {
                function api_networkServer_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_networkServer_dmVolatile_event(nodeAddress);
                }
                return api_networkServer_dmVolatile;
            })();
            var api_networkServer_event = (function () {
                function api_networkServer_event() {
                    this.request = (0x020307000 >>> 0);
                }
                return api_networkServer_event;
            })();
            var api_networkServer_status = (function () {
                function api_networkServer_status() {
                }
                return api_networkServer_status;
            })();
            var api_networkServer = (function () {
                function api_networkServer(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_networkServer_dmDynamic(nodeAddress);
                    this.dmStatic = new api_networkServer_dmStatic(nodeAddress);
                    this.dmVolatile = new api_networkServer_dmVolatile(nodeAddress);
                    this.status = new api_networkServer_status();
                    this.event = new api_networkServer_event();
                }
                api_networkServer.prototype.postPacket = function (roTree) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "RFTree", "value": roTree, "return": true });
                };
                return api_networkServer;
            })();
            var api_connector_dmStatic_event = (function () {
                function api_connector_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_connector_dmStatic_event;
            })();
            var api_connector_dmStatic = (function () {
                function api_connector_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_connector_dmStatic_event(nodeAddress);
                }
                return api_connector_dmStatic;
            })();
            var api_connector_dmDynamic_event = (function () {
                function api_connector_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_connector_dmDynamic_event;
            })();
            var api_connector_dmDynamic = (function () {
                function api_connector_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_connector_dmDynamic_event(nodeAddress);
                }
                return api_connector_dmDynamic;
            })();
            var api_connector_dmVolatile_event = (function () {
                function api_connector_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_connector_dmVolatile_event;
            })();
            var api_connector_dmVolatile = (function () {
                function api_connector_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_connector_dmVolatile_event(nodeAddress);
                }
                return api_connector_dmVolatile;
            })();
            var api_connector_event = (function () {
                function api_connector_event() {
                    this.busPacket = (0x020407000 >>> 0);
                    this.eventPacket = (0x020407001 >>> 0);
                    this.datamodelPacket = (0x020407002 >>> 0);
                    this.popupPacket = (0x020407003 >>> 0);
                }
                return api_connector_event;
            })();
            var api_connector_status = (function () {
                function api_connector_status() {
                }
                return api_connector_status;
            })();
            var api_connector = (function () {
                function api_connector(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_connector_dmDynamic(nodeAddress);
                    this.dmStatic = new api_connector_dmStatic(nodeAddress);
                    this.dmVolatile = new api_connector_dmVolatile(nodeAddress);
                    this.status = new api_connector_status();
                    this.event = new api_connector_event();
                }
                return api_connector;
            })();
            var api_connectorChannel_dmStatic_event = (function () {
                function api_connectorChannel_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_connectorChannel_dmStatic_event;
            })();
            var api_connectorChannel_dmStatic = (function () {
                function api_connectorChannel_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_connectorChannel_dmStatic_event(nodeAddress);
                }
                return api_connectorChannel_dmStatic;
            })();
            var api_connectorChannel_dmDynamic_event = (function () {
                function api_connectorChannel_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_connectorChannel_dmDynamic_event;
            })();
            var api_connectorChannel_dmDynamic = (function () {
                function api_connectorChannel_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_connectorChannel_dmDynamic_event(nodeAddress);
                }
                return api_connectorChannel_dmDynamic;
            })();
            var api_connectorChannel_dmVolatile_event = (function () {
                function api_connectorChannel_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_connectorChannel_dmVolatile_event;
            })();
            var api_connectorChannel_dmVolatile = (function () {
                function api_connectorChannel_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_connectorChannel_dmVolatile_event(nodeAddress);
                }
                return api_connectorChannel_dmVolatile;
            })();
            var api_connectorChannel_event = (function () {
                function api_connectorChannel_event() {
                }
                return api_connectorChannel_event;
            })();
            var api_connectorChannel_status = (function () {
                function api_connectorChannel_status() {
                }
                return api_connectorChannel_status;
            })();
            var api_connectorChannel = (function () {
                function api_connectorChannel(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_connectorChannel_dmDynamic(nodeAddress);
                    this.dmStatic = new api_connectorChannel_dmStatic(nodeAddress);
                    this.dmVolatile = new api_connectorChannel_dmVolatile(nodeAddress);
                    this.status = new api_connectorChannel_status();
                    this.event = new api_connectorChannel_event();
                }
                return api_connectorChannel;
            })();
            var api_popup_dmStatic_event = (function () {
                function api_popup_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_popup_dmStatic_event;
            })();
            var api_popup_dmStatic = (function () {
                function api_popup_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_popup_dmStatic_event(nodeAddress);
                }
                return api_popup_dmStatic;
            })();
            var api_popup_dmDynamic_event = (function () {
                function api_popup_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_popup_dmDynamic_event;
            })();
            var api_popup_dmDynamic = (function () {
                function api_popup_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_popup_dmDynamic_event(nodeAddress);
                }
                return api_popup_dmDynamic;
            })();
            var api_popup_dmVolatile_event = (function () {
                function api_popup_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_popup_dmVolatile_event;
            })();
            var api_popup_dmVolatile = (function () {
                function api_popup_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_popup_dmVolatile_event(nodeAddress);
                }
                return api_popup_dmVolatile;
            })();
            var api_popup_event = (function () {
                function api_popup_event() {
                    this.popup = (0x020607000 >>> 0);
                    this.hide = (0x020607001 >>> 0);
                }
                return api_popup_event;
            })();
            var api_popup_status = (function () {
                function api_popup_status() {
                }
                return api_popup_status;
            })();
            var api_popup = (function () {
                function api_popup(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_popup_dmDynamic(nodeAddress);
                    this.dmStatic = new api_popup_dmStatic(nodeAddress);
                    this.dmVolatile = new api_popup_dmVolatile(nodeAddress);
                    this.status = new api_popup_status();
                    this.event = new api_popup_event();
                }
                return api_popup;
            })();
            network.clientLink = new api_clientLink(0x020004000 >>> 0);
            network.clientIdentification = new api_clientConnector(0x020104000 >>> 0);
            network.clientRetail = new api_clientConnector(0x020114000 >>> 0);
            network.clientSport = new api_clientConnector(0x020124000 >>> 0);
            network.clientHorse = new api_clientConnector(0x020134000 >>> 0);
            network.clientUpdate = new api_clientConnector(0x020144000 >>> 0);
            network.serverConnector = new api_server(0x020204000 >>> 0);
            network.networkServerWebapp = new api_networkServer(0x020304000 >>> 0);
            network.connectorJs = new api_connector(0x020404000 >>> 0);
            network.connectorPython = new api_connector(0x020414000 >>> 0);
            network.connectorChannelBus = new api_connectorChannel(0x020504000 >>> 0);
            network.connectorChannelDatamodel = new api_connectorChannel(0x020514000 >>> 0);
            network.connectorChannelEvent = new api_connectorChannel(0x020524000 >>> 0);
            network.popupBasic = new api_popup(0x020604000 >>> 0);
        })(network = technic.network || (technic.network = {}));
    })(technic = sdk.technic || (sdk.technic = {}));
})(sdk || (sdk = {}));
var sdk;
(function (sdk) {
    var technic;
    (function (technic) {
        var security;
        (function (security) {
            var api_mode_dmStatic_event = (function () {
                function api_mode_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_mode_dmStatic_event;
            })();
            var api_mode_dmStatic = (function () {
                function api_mode_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_mode_dmStatic_event(nodeAddress);
                }
                return api_mode_dmStatic;
            })();
            var api_mode_dmDynamic_event = (function () {
                function api_mode_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.mode = (((this.nodeAddress & 0x0FFFF0000) | 0x000008200) >>> 0);
                    this.subMode = (((this.nodeAddress & 0x0FFFF0000) | 0x000008201) >>> 0);
                }
                return api_mode_dmDynamic_event;
            })();
            var api_mode_dmDynamic = (function () {
                function api_mode_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_mode_dmDynamic_event(nodeAddress);
                }
                api_mode_dmDynamic.prototype.mode = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008200) >>> 0, "string");
                };
                api_mode_dmDynamic.prototype.subMode = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008201) >>> 0, "string");
                };
                return api_mode_dmDynamic;
            })();
            var api_mode_dmVolatile_event = (function () {
                function api_mode_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_mode_dmVolatile_event;
            })();
            var api_mode_dmVolatile = (function () {
                function api_mode_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_mode_dmVolatile_event(nodeAddress);
                }
                return api_mode_dmVolatile;
            })();
            var api_mode_event = (function () {
                function api_mode_event() {
                    this.modeBegin = (0x030007000 >>> 0);
                    this.modeEnd = (0x030007001 >>> 0);
                    this.submodeChange = (0x030007002 >>> 0);
                    this.enableScreen = (0x030007003 >>> 0);
                    this.disableScreen = (0x030007004 >>> 0);
                    this.enableWaitAnimation = (0x030007005 >>> 0);
                }
                return api_mode_event;
            })();
            var api_mode_status = (function () {
                function api_mode_status() {
                }
                return api_mode_status;
            })();
            var api_mode = (function () {
                function api_mode(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_mode_dmDynamic(nodeAddress);
                    this.dmStatic = new api_mode_dmStatic(nodeAddress);
                    this.dmVolatile = new api_mode_dmVolatile(nodeAddress);
                    this.status = new api_mode_status();
                    this.event = new api_mode_event();
                }
                api_mode.prototype.getMode = function (szMode, szSubMode) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "string", "value": szMode, "return": true }, { "type": "string", "value": szSubMode, "return": true });
                };
                api_mode.prototype.create = function (szMode, roSubModes) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0, { "type": "string", "value": szMode, "return": false }, { "type": "RSDictionnary", "value": roSubModes, "return": false });
                };
                api_mode.prototype.setMode = function (szMode, szSubMode) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "string", "value": szMode, "return": false }, { "type": "string", "value": szSubMode, "return": false });
                };
                api_mode.prototype.setPrivileges = function (szType, roPrivileges) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0, { "type": "string", "value": szType, "return": false }, { "type": "RSList", "value": roPrivileges, "return": false });
                };
                api_mode.prototype.pageShown = function (dPageId, dPopupId) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0, { "type": "double", "value": dPageId, "return": false }, { "type": "double", "value": dPopupId, "return": false });
                };
                api_mode.prototype.enableScreen = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006005) >>> 0);
                };
                api_mode.prototype.disableScreen = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006006) >>> 0);
                };
                api_mode.prototype.enableWaitAnimation = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006007) >>> 0);
                };
                return api_mode;
            })();
            var api_authentication_dmStatic_event = (function () {
                function api_authentication_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_authentication_dmStatic_event;
            })();
            var api_authentication_dmStatic = (function () {
                function api_authentication_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_authentication_dmStatic_event(nodeAddress);
                }
                return api_authentication_dmStatic;
            })();
            var api_authentication_dmDynamic_event = (function () {
                function api_authentication_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_authentication_dmDynamic_event;
            })();
            var api_authentication_dmDynamic = (function () {
                function api_authentication_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_authentication_dmDynamic_event(nodeAddress);
                }
                return api_authentication_dmDynamic;
            })();
            var api_authentication_dmVolatile_event = (function () {
                function api_authentication_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_authentication_dmVolatile_event;
            })();
            var api_authentication_dmVolatile = (function () {
                function api_authentication_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_authentication_dmVolatile_event(nodeAddress);
                }
                return api_authentication_dmVolatile;
            })();
            var api_authentication_event = (function () {
                function api_authentication_event() {
                }
                return api_authentication_event;
            })();
            var api_authentication_status = (function () {
                function api_authentication_status() {
                }
                return api_authentication_status;
            })();
            var api_authentication = (function () {
                function api_authentication(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_authentication_dmDynamic(nodeAddress);
                    this.dmStatic = new api_authentication_dmStatic(nodeAddress);
                    this.dmVolatile = new api_authentication_dmVolatile(nodeAddress);
                    this.status = new api_authentication_status();
                    this.event = new api_authentication_event();
                }
                api_authentication.prototype.login = function (roBadge) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "RSBadge", "value": roBadge, "return": false });
                };
                api_authentication.prototype.logout = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                return api_authentication;
            })();
            var api_identification_dmStatic_event = (function () {
                function api_identification_dmStatic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                }
                return api_identification_dmStatic_event;
            })();
            var api_identification_dmStatic = (function () {
                function api_identification_dmStatic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_identification_dmStatic_event(nodeAddress);
                }
                return api_identification_dmStatic;
            })();
            var api_identification_dmDynamic_event = (function () {
                function api_identification_dmDynamic_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.address = (((this.nodeAddress & 0x0FFFF0000) | 0x000008200) >>> 0);
                    this.pointOfSellName = (((this.nodeAddress & 0x0FFFF0000) | 0x000008201) >>> 0);
                    this.ltn = (((this.nodeAddress & 0x0FFFF0000) | 0x000008202) >>> 0);
                    this.localIp = (((this.nodeAddress & 0x0FFFF0000) | 0x000008203) >>> 0);
                }
                return api_identification_dmDynamic_event;
            })();
            var api_identification_dmDynamic = (function () {
                function api_identification_dmDynamic(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_identification_dmDynamic_event(nodeAddress);
                }
                api_identification_dmDynamic.prototype.address = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008200) >>> 0, "string");
                };
                api_identification_dmDynamic.prototype.pointOfSellName = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008201) >>> 0, "string");
                };
                api_identification_dmDynamic.prototype.ltn = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008202) >>> 0, "string");
                };
                api_identification_dmDynamic.prototype.localIp = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008203) >>> 0, "string");
                };
                return api_identification_dmDynamic;
            })();
            var api_identification_dmVolatile_event = (function () {
                function api_identification_dmVolatile_event(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.retailerExternalId = (((this.nodeAddress & 0x0FFFF0000) | 0x000008300) >>> 0);
                    this.vendorSessionTimeout = (((this.nodeAddress & 0x0FFFF0000) | 0x000008301) >>> 0);
                    this.playerSessionTimeout = (((this.nodeAddress & 0x0FFFF0000) | 0x000008302) >>> 0);
                    this.stillAlive = (((this.nodeAddress & 0x0FFFF0000) | 0x000008303) >>> 0);
                    this.pwdVendorExpired = (((this.nodeAddress & 0x0FFFF0000) | 0x000008304) >>> 0);
                    this.pwdShopExpired = (((this.nodeAddress & 0x0FFFF0000) | 0x000008305) >>> 0);
                }
                return api_identification_dmVolatile_event;
            })();
            var api_identification_dmVolatile = (function () {
                function api_identification_dmVolatile(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.event = new api_identification_dmVolatile_event(nodeAddress);
                }
                api_identification_dmVolatile.prototype.retailerExternalId = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008300) >>> 0, "string");
                };
                api_identification_dmVolatile.prototype.vendorSessionTimeout = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008301) >>> 0, "number");
                };
                api_identification_dmVolatile.prototype.playerSessionTimeout = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008302) >>> 0, "number");
                };
                api_identification_dmVolatile.prototype.stillAlive = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008303) >>> 0, "boolean");
                };
                api_identification_dmVolatile.prototype.pwdVendorExpired = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008304) >>> 0, "boolean");
                };
                api_identification_dmVolatile.prototype.pwdShopExpired = function () {
                    return bus.datamodelGet(((this.nodeAddress & 0x0FFFF0000) | 0x00008305) >>> 0, "boolean");
                };
                return api_identification_dmVolatile;
            })();
            var api_identification_event = (function () {
                function api_identification_event() {
                    this.newDateTime = (0x030207000 >>> 0);
                    this.passwordExpired = (0x030207001 >>> 0);
                    this.loggedOut = (0x030207002 >>> 0);
                }
                return api_identification_event;
            })();
            var api_identification_status = (function () {
                function api_identification_status() {
                }
                return api_identification_status;
            })();
            var api_identification = (function () {
                function api_identification(nodeAddress) {
                    this.nodeAddress = nodeAddress;
                    this.dmDynamic = new api_identification_dmDynamic(nodeAddress);
                    this.dmStatic = new api_identification_dmStatic(nodeAddress);
                    this.dmVolatile = new api_identification_dmVolatile(nodeAddress);
                    this.status = new api_identification_status();
                    this.event = new api_identification_event();
                }
                api_identification.prototype.login = function (roBadge) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006000) >>> 0, { "type": "RSBadge", "value": roBadge, "return": false });
                };
                api_identification.prototype.logout = function () {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006001) >>> 0);
                };
                api_identification.prototype.changeVendorPassword = function (szShopPwd, szOldPwd, szNewPwd) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006002) >>> 0, { "type": "string", "value": szShopPwd, "return": false }, { "type": "string", "value": szOldPwd, "return": false }, { "type": "string", "value": szNewPwd, "return": false });
                };
                api_identification.prototype.changePOSPassword = function (szVendorPwd, szShopPwd, szNewPwd) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006003) >>> 0, { "type": "string", "value": szVendorPwd, "return": false }, { "type": "string", "value": szShopPwd, "return": false }, { "type": "string", "value": szNewPwd, "return": false });
                };
                api_identification.prototype.setLtn = function (szLtn) {
                    return bus.callFunction(((this.nodeAddress & 0x0FFFF0000) | 0x000006004) >>> 0, { "type": "string", "value": szLtn, "return": false });
                };
                return api_identification;
            })();
            security.modeSonic = new api_mode(0x030004000 >>> 0);
            security.authenticationAtu = new api_authentication(0x030104000 >>> 0);
            security.identificationProsys = new api_identification(0x030204000 >>> 0);
        })(security = technic.security || (technic.security = {}));
    })(technic = sdk.technic || (sdk.technic = {}));
})(sdk || (sdk = {}));
