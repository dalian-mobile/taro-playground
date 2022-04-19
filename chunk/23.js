/*! For license information please see 23.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"134":function(e,t,r){"use strict";e.exports=r(136)},"135":function(e,t,r){"use strict";r.d(t,"B",(function(){return E})),r.d(t,"f",(function(){return S})),r.d(t,"p",(function(){return N})),r.d(t,"s",(function(){return B})),r.d(t,"y",(function(){return k})),r.d(t,"a",(function(){return R})),r.d(t,"c",(function(){return D})),r.d(t,"d",(function(){return I})),r.d(t,"e",(function(){return H})),r.d(t,"h",(function(){return L})),r.d(t,"i",(function(){return T})),r.d(t,"m",(function(){return A})),r.d(t,"n",(function(){return C})),r.d(t,"o",(function(){return M})),r.d(t,"q",(function(){return K})),r.d(t,"r",(function(){return U})),r.d(t,"u",(function(){return F})),r.d(t,"x",(function(){return W})),r.d(t,"z",(function(){return V})),r.d(t,"j",(function(){return z})),r.d(t,"k",(function(){return J})),r.d(t,"t",(function(){return $})),r.d(t,"v",(function(){return Y})),r.d(t,"w",(function(){return Z})),r.d(t,"b",(function(){return G})),r.d(t,"g",(function(){return Q})),r.d(t,"A",(function(){return X})),r.d(t,"C",(function(){return ee}));var o=r(18),n=r.n(o),c=r(29),a=r.n(c),s=r(52),i=r.n(s),u=r(14),p=r.n(u),f=r(31),l=r.n(f),d=r(32),y=r.n(d),b=r(137),j=r.n(b),m=r(139),x=r.n(m),O=r(141),v=r.n(O),h=r(53),_=r.n(h);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=v()(e);if(t){var n=v()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return x()(this,r)}}n.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],s=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var i=r.substr(2).toLowerCase(),u=a;return"taro-scroll-view-core"===t&&"scroll"===i&&(u=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,u]),c.addEventListener(i,u)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof s)c.style.cssText="";else for(var p in s)updateStyle(c,p,"");for(var f in a)updateStyle(c,f,a[f])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(_()(a),_()(c))).join(" ")}(c,o,n):a}var w=function reactifyWebComponent(e){var t=function(t){j()(Index,t);var r=_createSuper(Index);function Index(e){var t;return l()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(o.createRef)(),t}return y()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===p()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=i()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,c={"ref":this.ref};return n&&(c.dangerouslySetInnerHTML=n),Object(o.createElement)(e,c,r)}}]),Index}(n.a.Component);return n.a.forwardRef((function(e,r){return n.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=w("taro-input-core"),P=(n.a.createElement,n.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),n.a.createElement(g,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),E=w("taro-view-core"),S=w("taro-icon-core"),N=w("taro-progress-core"),B=w("taro-rich-text-core"),k=w("taro-text-core"),R=w("taro-button-core"),D=w("taro-checkbox-core"),I=w("taro-checkbox-group-core"),H=(w("taro-editor-core"),w("taro-form-core")),L=P,T=w("taro-label-core"),A=w("taro-picker-core"),C=w("taro-picker-view-core"),M=w("taro-picker-view-column-core"),K=w("taro-radio-core"),U=w("taro-radio-group-core"),F=w("taro-slider-core"),W=w("taro-switch-core"),V=(w("taro-cover-image-core"),w("taro-textarea-core")),z=(w("taro-cover-view-core"),w("taro-movable-area-core")),J=w("taro-movable-view-core"),$=w("taro-scroll-view-core"),Y=w("taro-swiper-core"),Z=w("taro-swiper-item-core"),G=(w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core")),Q=w("taro-image-core"),X=(w("taro-live-player-core"),w("taro-video-core")),ee=(w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"));w("taro-navigation-bar-core"),o.Fragment,w("taro-custom-wrapper-core")},"136":function(e,t,r){"use strict";r(46);var o=r(18),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},u=null,p=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,o)&&!i.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":u,"ref":p,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"137":function(e,t,r){var o=r(138);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t,r){var o=r(14).default,n=r(140);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"140":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"141":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"142":function(e,t,r){"use strict";var o=r(135),n=(r(143),r(134));t.a=function Head(e){var t=e.title,r=e.desc;return Object(n.jsxs)(o.B,{"className":"page-head","children":[Object(n.jsx)(o.B,{"className":"page-head-title","children":t}),Object(n.jsx)(o.B,{"className":"page-head-line"}),!!r&&Object(n.jsx)(o.y,{"className":"page-head-desc","children":r})]})}},"143":function(e,t,r){},"198":function(e,t,r){},"268":function(e,t,r){"use strict";r.r(t);var o=r(135),n=r(142),c=(r(198),r(134));t.default=function PageView(){return Object(c.jsxs)(o.B,{"className":"components-page","children":[Object(c.jsx)(o.B,{"className":"components-page__header","children":Object(c.jsx)(n.a,{"title":"Text"})}),Object(c.jsxs)(o.B,{"className":"components-page__body","children":[Object(c.jsxs)(o.B,{"className":"components-page__body-example example","children":[Object(c.jsx)(o.B,{"className":"example-header","children":"H5、小程序通用"}),Object(c.jsxs)(o.B,{"className":"example-body","children":[Object(c.jsx)(o.B,{"className":"example-body__text","children":Object(c.jsx)(o.y,{"selectable":!0,"children":"可选择的文字"})}),Object(c.jsx)(o.B,{"className":"example-body__text","children":"不可选择的文字"})]})]}),Object(c.jsxs)(o.B,{"className":"components-page__body-example example","children":[Object(c.jsx)(o.B,{"className":"example-header","children":"仅工作在小程序"}),Object(c.jsxs)(o.B,{"className":"example-body","children":[Object(c.jsx)(o.B,{"className":"example-body__text","children":Object(c.jsx)(o.y,{"children":"不支持多          空格文字"})}),Object(c.jsx)(o.B,{"className":"example-body__text","children":Object(c.jsx)(o.y,{"space":"ensp","children":"多          空格文字(ensp)"})}),Object(c.jsx)(o.B,{"className":"example-body__text","children":Object(c.jsx)(o.y,{"space":"nbsp","children":"多          空格文字(nbsp)"})}),Object(c.jsx)(o.B,{"className":"example-body__text","children":Object(c.jsx)(o.y,{"children":"不解码文字>"})}),Object(c.jsx)(o.B,{"className":"example-body__text","children":Object(c.jsx)(o.y,{"decode":!0,"children":"解码文字>"})})]})]})]})]})}}}]);