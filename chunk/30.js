(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"142":function(e,t,a){"use strict";var c=a(135),n=(a(143),a(134));t.a=function Head(e){var t=e.title,a=e.desc;return Object(n.jsxs)(c.B,{"className":"page-head","children":[Object(n.jsx)(c.B,{"className":"page-head-title","children":t}),Object(n.jsx)(c.B,{"className":"page-head-line"}),!!a&&Object(n.jsx)(c.y,{"className":"page-head-desc","children":a})]})}},"143":function(e,t,a){},"144":function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return loadPage})),a.d(t,"a",(function(){return hadlePermissionsDeny})),a.d(t,"f",(function(){return throttle})),a.d(t,"e",(function(){return randomColor}));var c=a(24),n=a(17),o=a(295),s=a(147),l=c.a.getEnv()===c.a.ENV_TYPE.WEB,r=c.a.getEnv()===c.a.ENV_TYPE.RN;function loadPage(e){var t=e.url,a=e.title,c=e.right,o=e.open,s=e.certified,r=void 0===s||s;l?window.location.href=t:Object(n.e)({"url":"/pages/webview/index?certified=".concat(r,"&title=").concat(a,"&link=").concat(encodeURIComponent(t)).concat(c?"&right=".concat(c):"").concat(o?"&open=".concat(encodeURIComponent(o)):"")})}function hadlePermissionsDeny(e){var t=e.perssionText;Object(o.d)({"title":"提示","content":"请在“设置-隐私-".concat(t,"”选项中，允许 Taro 访问你的").concat(t,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&Object(s.b)()}})}function throttle(e,t){var a=0;return function(){var c=Date.now(),n=this,o=arguments;c-a>t&&(e.apply(n,o),a=c)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"145":function(e,t,a){"use strict";var c=a(135),n=a(144),o=a(134);function JSONTree(e){var t=n.c?JSON.stringify(e.data,void 0,2):JSON.stringify(e.data,void 0,2).replace(/[ ]/g,"&nbsp;");return Object(o.jsx)(c.y,{"decode":!0,"children":t})}t.a=function(e){return e.data&&Object.keys(e.data).length>0?Object(o.jsx)(JSONTree,{"data":e.data}):Object(o.jsx)(c.B,{})}},"147":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var c=a(8),n=Object(c.l)("openSetting"),o=Object(c.l)("getSetting")},"154":function(e,t,a){"use strict";var c=a(135),n=(a(155),a(134));t.a=function Log(e){var t=e.logs;return Object(n.jsx)(c.B,{"className":"log-container","children":t.map((function(e,t){return Object(n.jsxs)(c.B,{"className":"log-row","children":[Object(n.jsx)(c.y,{"className":"log-time","children":e.time}),Object(n.jsx)(c.y,{"className":"log-text","children":e.text})]},t)}))})}},"155":function(e,t,a){},"175":function(e,t,a){},"250":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Page}));var c=a(12),n=a(16),o=a(19),s=a(135),l=a(18),r=a(24),i=a(17),d=a(145),u=a(142),j=a(154),b=(a(175),a(134));function Page(){var e=r.a.useRouter(),t=Object(o.a)({},e),a=Object(l.useState)([]),g=Object(n.a)(a,2),m=g[0],x=g[1];r.a.useDidShow((function(){var e={"time":(new Date).toLocaleTimeString(),"text":"useDidShow called."};x([].concat(Object(c.a)(m),[e]))}));var h=Object(l.useState)([]),O=Object(n.a)(h,2),p=O[0],f=O[1];r.a.useDidHide((function(){var e={"time":(new Date).toLocaleTimeString(),"text":"useDidHide called."};f([].concat(Object(c.a)(p),[e]))}));var N=Object(l.useState)([]),v=Object(n.a)(N,2),B=v[0],S=v[1];r.a.useReachBottom((function(){var e={"time":(new Date).toLocaleTimeString(),"text":"useReachBottom called."};S([].concat(Object(c.a)(B),[e]))}));var w=Object(l.useState)([]),y=Object(n.a)(w,2),_=y[0],D=y[1];return r.a.usePageScroll((function(e){var t={"time":(new Date).toLocaleTimeString(),"text":"usePageScroll scrollTop:".concat(e.scrollTop.toFixed(0),".")};D([].concat(Object(c.a)(_.slice(-9)),[t]))})),Object(b.jsxs)(s.B,{"className":"global-page","children":[Object(b.jsx)(s.B,{"className":"global-page__header","children":Object(b.jsx)(u.a,{"title":"Hooks"})}),Object(b.jsxs)(s.B,{"className":"global-page__body","children":[Object(b.jsxs)(s.B,{"className":"global-page__body-example example","children":[Object(b.jsx)(s.B,{"className":"example-header","children":"useRouter"}),Object(b.jsx)(s.B,{"className":"example-body","children":Object(b.jsx)(d.a,{"data":t})})]}),Object(b.jsxs)(s.B,{"className":"global-page__body-example example","children":[Object(b.jsx)(s.B,{"className":"example-header","children":"useDidShow (".concat(m.length,")")}),Object(b.jsx)(j.a,{"logs":m})]}),Object(b.jsxs)(s.B,{"className":"global-page__body-example example","children":[Object(b.jsx)(s.B,{"className":"example-header","children":"useDidHide (".concat(p.length,")")}),Object(b.jsx)(j.a,{"logs":p})]}),Object(b.jsxs)(s.B,{"className":"global-page__body-example example","children":[Object(b.jsx)(s.B,{"className":"example-header","children":"useReachBottom (".concat(B.length,")")}),Object(b.jsx)(j.a,{"logs":B})]}),Object(b.jsxs)(s.B,{"className":"global-page__body-example example","children":[Object(b.jsx)(s.B,{"className":"example-header","children":"usePageScroll (".concat(_.length,")")}),Object(b.jsx)(j.a,{"logs":_})]}),Object(b.jsx)(s.a,{"onClick":function handleJump(){Object(i.e)({"url":"/pages/global/pages/lifecycle/page"})},"children":"跳转"})]})]})}}}]);