(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"144":function(n,e,t){"use strict";t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return s})),t.d(e,"d",(function(){return loadPage})),t.d(e,"a",(function(){return hadlePermissionsDeny})),t.d(e,"f",(function(){return throttle})),t.d(e,"e",(function(){return randomColor}));var c=t(24),o=t(17),a=t(295),r=t(147),i=c.a.getEnv()===c.a.ENV_TYPE.WEB,s=c.a.getEnv()===c.a.ENV_TYPE.RN;function loadPage(n){var e=n.url,t=n.title,c=n.right,a=n.open,r=n.certified,s=void 0===r||r;i?window.location.href=e:Object(o.e)({"url":"/pages/webview/index?certified=".concat(s,"&title=").concat(t,"&link=").concat(encodeURIComponent(e)).concat(c?"&right=".concat(c):"").concat(a?"&open=".concat(encodeURIComponent(a)):"")})}function hadlePermissionsDeny(n){var e=n.perssionText;Object(a.d)({"title":"提示","content":"请在“设置-隐私-".concat(e,"”选项中，允许 Taro 访问你的").concat(e,"。"),"confirmColor":"#6190E8","success":function success(n){n.confirm&&Object(r.b)()}})}function throttle(n,e){var t=0;return function(){var c=Date.now(),o=this,a=arguments;c-t>e&&(n.apply(o,a),t=c)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"145":function(n,e,t){"use strict";var c=t(135),o=t(144),a=t(134);function JSONTree(n){var e=o.c?JSON.stringify(n.data,void 0,2):JSON.stringify(n.data,void 0,2).replace(/[ ]/g,"&nbsp;");return Object(a.jsx)(c.y,{"decode":!0,"children":e})}e.a=function(n){return n.data&&Object.keys(n.data).length>0?Object(a.jsx)(JSONTree,{"data":n.data}):Object(a.jsx)(c.B,{})}},"147":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return a}));var c=t(8),o=Object(c.l)("openSetting"),a=Object(c.l)("getSetting")},"238":function(n,e,t){},"307":function(n,e,t){"use strict";t.r(e);var c=t(16),o=t(8),a=Object(o.l)("stopGyroscope"),r=Object(o.l)("startGyroscope"),i=Object(o.l)("onGyroscopeChange"),s=Object(o.l)("offGyroscopeChange"),l=t(135),u=t(18),p=t(145),d=(t(238),t(134));e.default=function Index(){var n=Object(u.useState)({}),e=Object(c.a)(n,2),t=e[0],o=e[1],f=Object(u.useState)({}),b=Object(c.a)(f,2),j=b[0],g=b[1],C=Object(u.useCallback)((function(n){console.log("回调函数 C1",n),o(n)}),[]),O=Object(u.useCallback)((function(n){console.log("回调函数 C2",n),g(n)}),[]);return Object(d.jsx)(l.B,{"className":"api-page","children":Object(d.jsxs)(l.B,{"className":"api-page__body","children":[Object(d.jsx)(l.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){i(C)},"children":"Taro.onGyroscopeChange(C1)"}),Object(d.jsx)(p.a,{"data":t}),Object(d.jsx)(l.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){i(O)},"children":"Taro.onGyroscopeChange(C2)"}),Object(d.jsx)(p.a,{"data":j}),Object(d.jsx)(l.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){s(C)},"children":"Taro.offGyroscopeChange(C1)"}),Object(d.jsx)(l.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){s(O)},"children":"Taro.offGyroscopeChange(C2)"}),Object(d.jsx)(l.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){s()},"children":"Taro.offGyroscopeChange()"}),Object(d.jsx)(l.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){r({"success":function success(n){console.log("成功",n)}})},"children":"Taro.startGyroscope()"}),Object(d.jsx)(l.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){a()},"children":"Taro.stopGyroscope()"})]})})}}}]);