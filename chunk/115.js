(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"131":function(t,n,i){"use strict";i.r(n),i.d(n,"taro_textarea_core",(function(){return o}));var a=i(31);function fixControlledValue(t){return null!=t?t:""}var o=function(){function e(t){var n=this;Object(a.g)(this,t),this.onInput=Object(a.c)(this,"input",7),this.onFocus=Object(a.c)(this,"focus",7),this.onBlur=Object(a.c)(this,"blur",7),this.onChange=Object(a.c)(this,"change",7),this.onLineChange=Object(a.c)(this,"linechange",7),this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.autoHeight=!1,this.nativeProps={},this.line=1,this.handleInput=function(t){t.stopPropagation(),n.handleLineChange(),n.onInput.emit({"value":t.target.value,"cursor":t.target.value.length})},this.handleFocus=function(t){n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value})},this.handleLineChange=function(){var t=n.getNumberOfLines();t!==n.line&&(n.line=t,n.onLineChange.emit({"height":n.textareaRef.clientHeight,"lineCount":n.line}))},this.calculateContentHeight=function(t,n){var i=t.style.height,a=t.offsetHeight,o=t.scrollHeight,r=t.style.overflow,l=t.style.minHeight||null;if(!(a>=o))return o;if(t.style.minHeight=0,t.style.height=a+n+"px",t.style.overflow="hidden",o<t.scrollHeight){for(;t.offsetHeight>=t.scrollHeight;)t.style.height=(a-=n)+"px";for(;t.offsetHeight<t.scrollHeight;)t.style.height=a+++"px";return t.style.height=i,t.style.overflow=r,t.style.minHeight=l,a}},this.getNumberOfLines=function(){var t=n.textareaRef,i=window.getComputedStyle?window.getComputedStyle(t):t.style,a=parseInt(i.lineHeight,10),o=n.calculateContentHeight(t,a);return Math.floor(o/a)}}return e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function(){return t.textareaRef.value},"set":function(n){return t.value=n},"configurable":!0}),this.autoFocus&&this.textareaRef.focus()},e.prototype.render=function(){var t=this,n=this,i=n.value,o=n.placeholder,r=n.disabled,l=n.maxlength,h=n.autoFocus,u=n.autoHeight,s=n.name,c=n.nativeProps,g=n.handleInput,f=n.handleFocus,p=n.handleBlur,d=n.handleChange,v={};return u&&(v.rows=this.line),Object(a.e)("textarea",Object.assign({"ref":function(n){n&&(t.textareaRef=n)},"class":"taro-textarea "+(u?"auto-height":""),"value":fixControlledValue(i),"placeholder":o,"name":s,"disabled":r,"maxlength":l,"autofocus":h,"onInput":g,"onFocus":f,"onBlur":p,"onChange":d},c,v))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(a.d)(this)},"enumerable":!1,"configurable":!0}),e}();o.style="taro-textarea-core{display:block;width:300px}taro-textarea-core .auto-height{height:auto}.taro-textarea{display:block;position:relative;border:0;width:100%;height:150px;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:auto;line-height:1.5}.taro-textarea:focus{outline:none}"}}]);