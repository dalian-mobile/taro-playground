/*! For license information please see 22.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"134":function(e,t,r){"use strict";e.exports=r(136)},"135":function(e,t,r){"use strict";r.d(t,"B",(function(){return S})),r.d(t,"f",(function(){return N})),r.d(t,"p",(function(){return E})),r.d(t,"s",(function(){return k})),r.d(t,"y",(function(){return B})),r.d(t,"a",(function(){return R})),r.d(t,"c",(function(){return D})),r.d(t,"d",(function(){return I})),r.d(t,"e",(function(){return C})),r.d(t,"h",(function(){return L})),r.d(t,"i",(function(){return A})),r.d(t,"m",(function(){return H})),r.d(t,"n",(function(){return M})),r.d(t,"o",(function(){return T})),r.d(t,"q",(function(){return K})),r.d(t,"r",(function(){return U})),r.d(t,"u",(function(){return F})),r.d(t,"x",(function(){return W})),r.d(t,"z",(function(){return z})),r.d(t,"j",(function(){return J})),r.d(t,"k",(function(){return V})),r.d(t,"t",(function(){return $})),r.d(t,"v",(function(){return Y})),r.d(t,"w",(function(){return Z})),r.d(t,"b",(function(){return G})),r.d(t,"g",(function(){return Q})),r.d(t,"A",(function(){return X})),r.d(t,"C",(function(){return ee}));var o=r(18),n=r.n(o),c=r(25),s=r.n(c),i=r(52),a=r.n(i),u=r(14),l=r.n(u),f=r(31),p=r.n(f),d=r(32),b=r.n(d),h=r(137),j=r.n(h),y=r(139),O=r.n(y),v=r(141),x=r.n(v),m=r(53),_=r.n(m);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=x()(e);if(t){var n=x()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return O()(this,r)}}n.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,s=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,s),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=s);if("scrollLeft"===r)return void(c.mpScrollLeft=s);if("scrollIntoView"===r)return void(c.mpScrollIntoView=s)}if("function"==typeof s&&r.match(/^on[A-Z]/)){var a=r.substr(2).toLowerCase(),u=s;return"taro-scroll-view-core"===t&&"scroll"===a&&(u=function fn(e){e instanceof CustomEvent&&s.apply(null,Array.from(arguments))}),e.eventHandlers.push([a,u]),c.addEventListener(a,u)}return"string"==typeof s||"number"==typeof s?(c.setAttribute(r,s),void(c[r]=s)):"boolean"==typeof s?s?(c[r]=!0,c.setAttribute(r,s)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=s)}if("string"==typeof s)return void c.setAttribute(r,s);if(!s)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var f in s)updateStyle(c,f,s[f])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),s=[];return o.forEach((function(e){c.indexOf(e)>-1?(s.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&s.push(e)})),(s=[].concat(_()(s),_()(c))).join(" ")}(c,o,n):s}var w=function reactifyWebComponent(e){var t=function(t){j()(Index,t);var r=_createSuper(Index);function Index(e){var t;return p()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(o.createRef)(),t}return b()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===l()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,c={"ref":this.ref};return n&&(c.dangerouslySetInnerHTML=n),Object(o.createElement)(e,c,r)}}]),Index}(n.a.Component);return n.a.forwardRef((function(e,r){return n.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=w("taro-input-core"),P=(n.a.createElement,n.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),n.a.createElement(g,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=w("taro-view-core"),N=w("taro-icon-core"),E=w("taro-progress-core"),k=w("taro-rich-text-core"),B=w("taro-text-core"),R=w("taro-button-core"),D=w("taro-checkbox-core"),I=w("taro-checkbox-group-core"),C=(w("taro-editor-core"),w("taro-form-core")),L=P,A=w("taro-label-core"),H=w("taro-picker-core"),M=w("taro-picker-view-core"),T=w("taro-picker-view-column-core"),K=w("taro-radio-core"),U=w("taro-radio-group-core"),F=w("taro-slider-core"),W=w("taro-switch-core"),z=(w("taro-cover-image-core"),w("taro-textarea-core")),J=(w("taro-cover-view-core"),w("taro-movable-area-core")),V=w("taro-movable-view-core"),$=w("taro-scroll-view-core"),Y=w("taro-swiper-core"),Z=w("taro-swiper-item-core"),G=(w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core")),Q=w("taro-image-core"),X=(w("taro-live-player-core"),w("taro-video-core")),ee=(w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"));w("taro-navigation-bar-core"),o.Fragment,w("taro-custom-wrapper-core")},"136":function(e,t,r){"use strict";r(46);var o=r(18),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,a={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},u=null,l=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!a.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":u,"ref":l,"props":c,"_owner":s.current}}t.jsx=q,t.jsxs=q},"137":function(e,t,r){var o=r(138);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t,r){var o=r(14).default,n=r(140);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"140":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"141":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"142":function(e,t,r){"use strict";var o=r(135),n=(r(143),r(134));t.a=function Head(e){var t=e.title,r=e.desc;return Object(n.jsxs)(o.B,{"className":"page-head","children":[Object(n.jsx)(o.B,{"className":"page-head-title","children":t}),Object(n.jsx)(o.B,{"className":"page-head-line"}),!!r&&Object(n.jsx)(o.y,{"className":"page-head-desc","children":r})]})}},"143":function(e,t,r){},"203":function(e,t,r){},"274":function(e,t,r){"use strict";r.r(t);var o=r(16),n=r(18),c=r(135),s=r(142),i=(r(203),r(134));t.default=function PageSwitch(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),r=t[0],a=t[1];return Object(i.jsxs)(c.B,{"className":"container","children":[Object(i.jsx)(s.a,{"title":"Switch"}),Object(i.jsxs)(c.B,{"className":"page-body","children":[Object(i.jsxs)(c.B,{"className":"page-section","children":[Object(i.jsx)(c.y,{"className":"page-section-title","children":"静态展示"}),Object(i.jsxs)(c.B,{"className":"switch-list","children":[Object(i.jsxs)(c.B,{"className":"switch-list__item","children":[Object(i.jsx)(c.B,{"className":"switch-list__text","children":"关闭"}),Object(i.jsx)(c.x,{})]}),Object(i.jsxs)(c.B,{"className":"switch-list__item","children":[Object(i.jsx)(c.B,{"className":"switch-list__text","children":"开启中"}),Object(i.jsx)(c.x,{"checked":!0})]}),Object(i.jsxs)(c.B,{"className":"switch-list__item","children":[Object(i.jsx)(c.B,{"className":"switch-list__text","children":"disabled"}),Object(i.jsx)(c.x,{"checked":!0,"disabled":!0})]}),Object(i.jsxs)(c.B,{"className":"switch-list__item","children":[Object(i.jsx)(c.B,{"className":"switch-list__text","children":"更换颜色"}),Object(i.jsx)(c.x,{"checked":!0,"color":"#6190E8"})]}),Object(i.jsxs)(c.B,{"className":"switch-list__item","children":[Object(i.jsx)(c.B,{"className":"switch-list__text","children":"CheckBox形式"}),Object(i.jsx)(c.x,{"type":"checkbox"})]})]})]}),Object(i.jsxs)(c.B,{"className":"page-section","children":[Object(i.jsx)(c.y,{"className":"page-section-title","children":"数据绑定"}),Object(i.jsx)(c.B,{"className":"switch-list","children":Object(i.jsxs)(c.B,{"className":"switch-list__item","children":[Object(i.jsx)(c.B,{"className":"switch-list__text","children":r?"开启":"关闭"}),Object(i.jsx)(c.x,{"onChange":function onChangeSwitch(e){var t;null!=e&&null!==(t=e.detail)&&void 0!==t&&t.value&&a(e.detail.value)},"checked":r})]})})]})]})]})}}}]);