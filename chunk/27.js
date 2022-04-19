/*! For license information please see 27.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"134":function(e,t,r){"use strict";e.exports=r(136)},"135":function(e,t,r){"use strict";r.d(t,"B",(function(){return k})),r.d(t,"f",(function(){return P})),r.d(t,"p",(function(){return E})),r.d(t,"s",(function(){return I})),r.d(t,"y",(function(){return C})),r.d(t,"a",(function(){return R})),r.d(t,"c",(function(){return M})),r.d(t,"d",(function(){return N})),r.d(t,"e",(function(){return L})),r.d(t,"h",(function(){return B})),r.d(t,"i",(function(){return D})),r.d(t,"m",(function(){return U})),r.d(t,"n",(function(){return T})),r.d(t,"o",(function(){return A})),r.d(t,"q",(function(){return H})),r.d(t,"r",(function(){return W})),r.d(t,"u",(function(){return F})),r.d(t,"x",(function(){return K})),r.d(t,"z",(function(){return V})),r.d(t,"j",(function(){return z})),r.d(t,"k",(function(){return J})),r.d(t,"t",(function(){return $})),r.d(t,"v",(function(){return Y})),r.d(t,"w",(function(){return Z})),r.d(t,"b",(function(){return G})),r.d(t,"g",(function(){return Q})),r.d(t,"A",(function(){return X})),r.d(t,"C",(function(){return ee}));var o=r(18),n=r.n(o),c=r(29),a=r.n(c),i=r(52),u=r.n(i),s=r(14),l=r.n(s),f=r(31),p=r.n(f),d=r(32),v=r.n(d),b=r(137),g=r.n(b),y=r(139),m=r.n(y),O=r(141),h=r.n(O),j=r(53),w=r.n(j);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=h()(e);if(t){var n=h()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return m()(this,r)}}n.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=a;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var f in a)updateStyle(c,f,a[f])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(w()(a),w()(c))).join(" ")}(c,o,n):a}var S=function reactifyWebComponent(e){var t=function(t){g()(Index,t);var r=_createSuper(Index);function Index(e){var t;return p()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(o.createRef)(),t}return v()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===l()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=u()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,c={"ref":this.ref};return n&&(c.dangerouslySetInnerHTML=n),Object(o.createElement)(e,c,r)}}]),Index}(n.a.Component);return n.a.forwardRef((function(e,r){return n.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=S("taro-input-core"),x=(n.a.createElement,n.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),n.a.createElement(_,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),k=S("taro-view-core"),P=S("taro-icon-core"),E=S("taro-progress-core"),I=S("taro-rich-text-core"),C=S("taro-text-core"),R=S("taro-button-core"),M=S("taro-checkbox-core"),N=S("taro-checkbox-group-core"),L=(S("taro-editor-core"),S("taro-form-core")),B=x,D=S("taro-label-core"),U=S("taro-picker-core"),T=S("taro-picker-view-core"),A=S("taro-picker-view-column-core"),H=S("taro-radio-core"),W=S("taro-radio-group-core"),F=S("taro-slider-core"),K=S("taro-switch-core"),V=(S("taro-cover-image-core"),S("taro-textarea-core")),z=(S("taro-cover-view-core"),S("taro-movable-area-core")),J=S("taro-movable-view-core"),$=S("taro-scroll-view-core"),Y=S("taro-swiper-core"),Z=S("taro-swiper-item-core"),G=(S("taro-functional-page-navigator-core"),S("taro-navigator-core"),S("taro-audio-core"),S("taro-camera-core")),Q=S("taro-image-core"),X=(S("taro-live-player-core"),S("taro-video-core")),ee=(S("taro-map-core"),S("taro-canvas-core"),S("taro-ad-core"),S("taro-official-account-core"),S("taro-open-data-core"),S("taro-web-view-core"));S("taro-navigation-bar-core"),o.Fragment,S("taro-custom-wrapper-core")},"136":function(e,t,r){"use strict";r(46);var o=r(18),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},s=null,l=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":l,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"137":function(e,t,r){var o=r(138);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t,r){var o=r(14).default,n=r(140);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"140":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"141":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"153":function(e,t,r){"use strict";r.d(t,"g",(function(){return a})),r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return v}));var o=r(6),n=r(8),c=r(15);function getItem(e){var t;try{t=JSON.parse(localStorage.getItem(e)||"")}catch(e){}return t&&"object"===Object(o.a)(t)&&t.hasOwnProperty("data")?{"result":!0,"data":t.data}:{"result":!1}}var a=function setStorageSync(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"==typeof e){var r=Object(o.a)(t),c={};c="symbol"===r?{"data":""}:{"data":t},localStorage.setItem(e,JSON.stringify(c))}else console.error(Object(n.c)({"name":"setStorage","correct":"String","wrong":e}))},i=function setStorage(e){var t=Object(n.k)(e);if(!t.flag){var r={"errMsg":"setStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var o=e.key,i=e.data,u=e.success,s=e.fail,l=e.complete,f=new c.b({"name":"setStorage","success":u,"fail":s,"complete":l});return"string"!=typeof o?f.fail({"errMsg":Object(n.c)({"para":"key","correct":"String","wrong":o})}):(a(o,i),f.success())},u=(Object(n.l)("revokeBufferURL"),function removeStorage(e){var t=Object(n.k)(e);if(!t.flag){var r={"errMsg":"removeStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var o=e.key,a=e.success,i=e.fail,u=e.complete,s=new c.b({"name":"removeStorage","success":a,"fail":i,"complete":u});return"string"!=typeof o?s.fail({"errMsg":Object(n.c)({"para":"key","correct":"String","wrong":o})}):(function removeStorageSync(e){"string"==typeof e?localStorage.removeItem(e):console.error(Object(n.c)({"name":"removeStorage","correct":"String","wrong":e}))}(o),s.success())}),s=function getStorageSync(e){if("string"==typeof e){var t=getItem(e);return t.result?t.data:""}console.error(Object(n.c)({"name":"getStorageSync","correct":"String","wrong":e}))},l=function getStorageInfoSync(){return{"keys":Object.keys(localStorage),"limitSize":NaN,"currentSize":NaN}},f=function getStorageInfo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,r=e.fail,o=e.complete,n=new c.b({"name":"getStorageInfo","success":t,"fail":r,"complete":o});return n.success(l())},p=function getStorage(e){var t=Object(n.k)(e);if(!t.flag){var r={"errMsg":"getStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var o=e.key,a=e.success,i=e.fail,u=e.complete,s=new c.b({"name":"getStorage","success":a,"fail":i,"complete":u});if("string"!=typeof o)return s.fail({"errMsg":Object(n.c)({"para":"key","correct":"String","wrong":o})});var l=getItem(o),f=l.result,p=l.data;return f?s.success({"data":p}):s.fail({"errMsg":"data not found"})},d=(Object(n.l)("createBufferURL"),function clearStorageSync(){localStorage.clear()}),v=function clearStorage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,r=e.fail,o=e.complete,n=new c.b({"name":"clearStorage","success":t,"fail":r,"complete":o});return d(),n.success()}},"163":function(e,t,r){"use strict";r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return setNavigationBarTitle})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var o=r(15),n=r(8),c=Object(n.l)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(n.k)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.title,a=e.success,i=e.fail,u=e.complete,s=new o.b({"name":"setNavigationBarTitle","success":a,"fail":i,"complete":u});return c&&"string"==typeof c?(document.title!==c&&(document.title=c),s.success()):s.fail({"errMsg":Object(n.c)({"para":"title","correct":"String","wrong":c})})}var a=function setNavigationBarColor(e){var t=e.backgroundColor,r=e.success,n=e.fail,c=e.complete,a=new o.b({"name":"setNavigationBarColor","success":r,"fail":n,"complete":c}),i=document.createElement("meta");return i.setAttribute("name","theme-color"),i.setAttribute("content",t),document.head.appendChild(i),a.success()},i=Object(n.l)("hideNavigationBarLoading");Object(n.l)("hideHomeButton")},"246":function(e,t,r){},"310":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var o=r(2),n=r(3),c=r(13),a=r(10),i=r(11),u=r(4),s=r(18),l=r(24),f=r(163),p=r(33),d=r(22),v=r.n(d),b=r(153),g=r(15);document.addEventListener("copy",(function(){var e;Object(b.f)({"key":"taro_clipboard","data":null===(e=window.getSelection())||void 0===e?void 0:e.toString()}).catch((function(e){console.error(e)}))}));var y=function(){var e=Object(p.a)(v.a.mark((function _callee(e){var t,r,o,n,c,a;return v.a.wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(t=e.data,r=e.success,o=e.fail,n=e.complete,c=new g.b({"name":"setClipboardData","success":r,"fail":o,"complete":n}),i.prev=2,Object(b.g)("taro_clipboard",t),"function"!=typeof document.execCommand){i.next=18;break}(a=document.createElement("textarea")).readOnly=!0,a.value=t,a.style.position="absolute",a.style.width="100px",a.style.left="-10000px",document.body.appendChild(a),a.select(),a.setSelectionRange(0,a.value.length),document.execCommand("copy"),document.body.removeChild(a),i.next=19;break;case 18:throw new Error("Unsupported Function: 'document.execCommand'.");case 19:return i.abrupt("return",c.success());case 22:return i.prev=22,i.t0=i.catch(2),i.abrupt("return",c.fail({"errMsg":i.t0.message}));case 25:case"end":return i.stop()}}),_callee,null,[[2,22]])})));return function setClipboardData(t){return e.apply(this,arguments)}}(),m=r(135),O=(r(246),r(134)),h=function(e){Object(a.a)(Index,e);var t=Object(i.a)(Index);function Index(){var e;Object(o.a)(this,Index);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),Object(u.a)(Object(c.a)(e),"state",{"link":null,"open":null,"certified":"true"}),e}return Object(n.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e,t,r,o=this,n=(null===(e=l.a.Current)||void 0===e||null===(t=e.router)||void 0===t?void 0:t.params)||{},c=n.link&&decodeURIComponent(n.link);this.setState({"link":c,"open":n.open&&decodeURIComponent(n.open),"certified":n.certified});var a=n.title||"WebView";Object(f.c)({"title":a}),Object(f.d)(),"true"!==n.certified&&n.link&&(Object(f.a)(),y({"data":c||""})),null===(r=this.props.navigation)||void 0===r||r.setOptions({"headerRight":function headerRight(){return Object(O.jsx)(m.B,{"onClick":o.openUrl.bind(o),"style":{"paddingRight":20,"paddingLeft":20},"children":Object(O.jsx)(m.y,{"children":n.right||"打开"})})}})}},{"key":"onWebViewLoad","value":function onWebViewLoad(){Object(f.a)()}},{"key":"openUrl","value":function openUrl(){var e=this.state,t=e.open,r=e.link,o=t||r;o&&l.a.openUrl({"url":o})}},{"key":"onError","value":function onError(){Object(f.a)(),Object(f.c)({"title":"加载失败"})}},{"key":"render","value":function render(){var e=this.state,t=e.link,r=e.certified;return t?"true"!==r?Object(O.jsxs)(m.B,{"children":[Object(O.jsx)(m.B,{"className":"webview-url","children":decodeURIComponent(t)}),Object(O.jsx)(m.B,{"className":"webview-tip","children":"该网址不支持打开，已复制到剪切板。"})]}):Object(O.jsx)(m.C,{"src":decodeURIComponent(t),"onLoad":this.onWebViewLoad.bind(this),"onError":this.onError.bind(this)}):null}}]),Index}(s.Component)}}]);