(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"144":function(t,n,e){"use strict";e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return s})),e.d(n,"d",(function(){return loadPage})),e.d(n,"a",(function(){return hadlePermissionsDeny})),e.d(n,"f",(function(){return throttle})),e.d(n,"e",(function(){return randomColor}));var c=e(24),a=e(17),o=e(295),r=e(147),i=c.a.getEnv()===c.a.ENV_TYPE.WEB,s=c.a.getEnv()===c.a.ENV_TYPE.RN;function loadPage(t){var n=t.url,e=t.title,c=t.right,o=t.open,r=t.certified,s=void 0===r||r;i?window.location.href=n:Object(a.e)({"url":"/pages/webview/index?certified=".concat(s,"&title=").concat(e,"&link=").concat(encodeURIComponent(n)).concat(c?"&right=".concat(c):"").concat(o?"&open=".concat(encodeURIComponent(o)):"")})}function hadlePermissionsDeny(t){var n=t.perssionText;Object(o.d)({"title":"提示","content":"请在“设置-隐私-".concat(n,"”选项中，允许 Taro 访问你的").concat(n,"。"),"confirmColor":"#6190E8","success":function success(t){t.confirm&&Object(r.b)()}})}function throttle(t,n){var e=0;return function(){var c=Date.now(),a=this,o=arguments;c-e>n&&(t.apply(a,o),e=c)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"145":function(t,n,e){"use strict";var c=e(135),a=e(144),o=e(134);function JSONTree(t){var n=a.c?JSON.stringify(t.data,void 0,2):JSON.stringify(t.data,void 0,2).replace(/[ ]/g,"&nbsp;");return Object(o.jsx)(c.y,{"decode":!0,"children":n})}n.a=function(t){return t.data&&Object.keys(t.data).length>0?Object(o.jsx)(JSONTree,{"data":t.data}):Object(o.jsx)(c.B,{})}},"227":function(t,n,e){},"284":function(t,n,e){"use strict";e.r(n);var c=e(16),a=e(310),o=e(135),r=e(18),i=e(145),s=(e(227),e(134));n.default=function Index(){var t=Object(r.useState)({}),n=Object(c.a)(t,2),e=n[0],u=n[1],d=Object(r.useState)(""),l=Object(c.a)(d,2),f=l[0],p=l[1];return Object(s.jsxs)(o.B,{"className":"api-page","children":[Object(s.jsxs)(o.B,{"className":"api-page-btns","children":[Object(s.jsx)(o.h,{"className":"url-input","onInput":function onInput(t){p(t.detail.value)},"placeholder":"输入请求的 url"}),Object(s.jsx)(o.a,{"type":"primary","onClick":function _onRequest(){f&&(u({}),Object(a.a)({"url":f,"data":{},"header":{"content-type":"application/json"},"success":function success(t){console.log(t),u(t)},"fail":function fail(t){console.log(t),u(t)}}))},"className":"api-page-btns-btn1","children":"Taro.request"})]}),Object(s.jsx)(i.a,{"data":e})]})}}}]);