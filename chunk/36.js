(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"142":function(e,t,c){"use strict";var n=c(135),a=(c(143),c(134));t.a=function Head(e){var t=e.title,c=e.desc;return Object(a.jsxs)(n.B,{"className":"page-head","children":[Object(a.jsx)(n.B,{"className":"page-head-title","children":t}),Object(a.jsx)(n.B,{"className":"page-head-line"}),!!c&&Object(a.jsx)(n.y,{"className":"page-head-desc","children":c})]})}},"143":function(e,t,c){},"144":function(e,t,c){"use strict";c.d(t,"c",(function(){return i})),c.d(t,"b",(function(){return s})),c.d(t,"d",(function(){return loadPage})),c.d(t,"a",(function(){return hadlePermissionsDeny})),c.d(t,"f",(function(){return throttle})),c.d(t,"e",(function(){return randomColor}));var n=c(24),a=c(17),o=c(295),r=c(147),i=n.a.getEnv()===n.a.ENV_TYPE.WEB,s=n.a.getEnv()===n.a.ENV_TYPE.RN;function loadPage(e){var t=e.url,c=e.title,n=e.right,o=e.open,r=e.certified,s=void 0===r||r;i?window.location.href=t:Object(a.e)({"url":"/pages/webview/index?certified=".concat(s,"&title=").concat(c,"&link=").concat(encodeURIComponent(t)).concat(n?"&right=".concat(n):"").concat(o?"&open=".concat(encodeURIComponent(o)):"")})}function hadlePermissionsDeny(e){var t=e.perssionText;Object(o.d)({"title":"提示","content":"请在“设置-隐私-".concat(t,"”选项中，允许 Taro 访问你的").concat(t,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&Object(r.b)()}})}function throttle(e,t){var c=0;return function(){var n=Date.now(),a=this,o=arguments;n-c>t&&(e.apply(a,o),c=n)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"147":function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return o}));var n=c(8),a=Object(n.l)("openSetting"),o=Object(n.l)("getSetting")},"161":function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(8),a=(Object(n.l)("authorizeForMiniProgram"),Object(n.l)("authorize"))},"187":function(e,t,c){},"188":function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(8),a=Object(n.l)("createCameraContext")},"259":function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return C}));var n=c(33),a=c(2),o=c(3),r=c(13),i=c(10),s=c(11),l=c(4),d=c(22),u=c.n(d),j=c(18),b=c.n(j),m=c(147),h=c(161),f=c(295),p=c(188),O=c(135),g=c(144),v=c(142),x=(c(187),c(134)),C=function(e){Object(i.a)(PageView,e);var t=Object(s.a)(PageView);function PageView(e){var c;return Object(a.a)(this,PageView),c=t.call(this,e),Object(l.a)(Object(r.a)(c),"ref",b.a.createRef()),Object(l.a)(Object(r.a)(c),"cameraContext",void 0),Object(l.a)(Object(r.a)(c),"toggleDevice",(function(){c.setState({"devicePosition":"back"==c.state.devicePosition?"front":"back"})})),Object(l.a)(Object(r.a)(c),"takePhoto",(function(){c.cameraContext.takePhoto({"quality":"high","success":function success(e){var t=e.tempImagePath;c.setState({"imageSrc":t})}})})),Object(l.a)(Object(r.a)(c),"startRecord",Object(n.a)(u.a.mark((function _callee(){return u.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)({});case 2:e.sent.authSetting["scope.record"]||Object(h.a)({"scope":"scope.record","fail":function fail(e){"authorize:denied/undetermined"!==e.errMsg&&"authorize:fail"!==e.errMsg||Object(g.a)({"perssionText":"麦克风"})}}),Object(f.e)({"title":"开始录像","icon":"none"}),console.log("开始录像"),c.cameraContext.startRecord();case 7:case"end":return e.stop()}}),_callee)})))),Object(l.a)(Object(r.a)(c),"stopRecord",(function(){Object(f.e)({"title":"停止录像","icon":"none"}),console.log("停止录像",c.cameraContext),c.cameraContext.stopRecord({"success":function success(e){console.log(e);var t=e.tempVideoPath;c.setState({"videoUrl":t})}})})),Object(l.a)(Object(r.a)(c),"changeMode",(function(){c.setState({"mode":"normal"===c.state.mode?"scanCode":"normal"})})),Object(l.a)(Object(r.a)(c),"onScanCode",Object(g.f)((function(e){Object(f.e)({"title":"扫码成功".concat(e.detail.result),"icon":"none","duration":4e3})}),5e3)),c.state={"mode":"normal","devicePosition":"back","imageSrc":"","videoUrl":""},c}return Object(o.a)(PageView,[{"key":"componentDidMount","value":function componentDidMount(){Object(m.a)({"success":function success(e){e.authSetting["scope.camera"]||Object(h.a)({"scope":"scope.camera","fail":function fail(e){"authorize:denied/undetermined"!==e.errMsg&&"authorize:fail"!==e.errMsg||Object(g.a)({"perssionText":"相机"})}})}}),this.cameraContext=Object(p.a)()}},{"key":"handleError","value":function handleError(){alert("无法使用摄像头")}},{"key":"handleStop","value":function handleStop(){alert("摄像头被非正常终止")}},{"key":"render","value":function render(){var e=this,t=this.state,c=t.imageSrc,n=t.devicePosition,a=t.videoUrl,o=t.mode;return Object(x.jsxs)(O.B,{"className":"components-page","children":[Object(x.jsx)(O.B,{"className":"components-page__header","children":Object(x.jsx)(v.a,{"title":"Camera当前是".concat("normal"===o?"正常模式":"扫码模式")})}),Object(x.jsx)(O.B,{"className":"components-page__body","children":Object(x.jsxs)(O.B,{"className":"components-page__body-example example","children":[Object(x.jsx)(O.B,{"className":"example-body","children":Object(x.jsx)(O.b,{"mode":o,"id":"camera","className":"cammer-content","ref":function ref(t){return e.ref=t},"onStop":this.handleStop,"onError":this.handleError,"devicePosition":this.state.devicePosition,"onInitDone":function onInitDone(){e.cameraContext=Object(p.a)()},"onScanCode":this.onScanCode})}),Object(x.jsxs)(O.B,{"className":"switch-list__item","children":[Object(x.jsx)(O.B,{"className":"switch-list__text","children":"扫码模式"}),Object(x.jsx)(O.x,{"checked":"scanCode"===o,"onChange":this.changeMode})]}),Object(x.jsxs)(O.a,{"className":"btn","type":"primary","onClick":this.toggleDevice,"children":["开启","back"==n?"前置":"后置","镜头"]}),Object(x.jsx)(O.a,{"className":"btn","type":"primary","onClick":this.takePhoto,"children":"拍照"}),Object(x.jsx)(O.a,{"className":"btn","type":"primary","onClick":this.startRecord,"children":"开始录像"}),Object(x.jsx)(O.a,{"className":"btn","type":"primary","onClick":this.stopRecord,"children":"停止录像"}),c&&Object(x.jsx)(O.g,{"className":"preview","src":c}),a&&Object(x.jsx)(O.A,{"className":"preview","src":a,"autoplay":!0})]})})]})}}]),PageView}(b.a.Component)}}]);