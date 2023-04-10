!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=34)}([function(t,e,n){"use strict";var o=n(4),i=Object.prototype.toString;function r(t){return"[object Array]"===i.call(t)}function s(t){return void 0===t}function a(t){return null!==t&&"object"==typeof t}function c(t){if("[object Object]"!==i.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function u(t){return"[object Function]"===i.call(t)}function l(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:r,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:function(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isPlainObject:c,isUndefined:s,isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:u,isStream:function(t){return a(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function t(){var e={};function n(n,o){c(e[o])&&c(n)?e[o]=t(e[o],n):c(n)?e[o]=t({},n):r(n)?e[o]=n.slice():e[o]=n}for(var o=0,i=arguments.length;o<i;o++)l(arguments[o],n);return e},extend:function(t,e,n){return l(e,(function(e,i){t[i]=n&&"function"==typeof e?o(e,n):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(3),i=n.n(o);class r{bindClassMethods(t,e){t.forEach(t=>{e[t]=e[t].bind(e)})}formatCurrency(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}showMessage(t){i()({text:t,duration:4500,gravity:"top",position:"right",close:!0,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}errorHandler(t){i()({text:t,duration:4500,gravity:"top",position:"right",close:!0,style:{background:"linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))"}}).showToast()}}},function(t,e,n){"use strict";(function(e){var o=n(0),i=n(20),r=n(6),s={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(c=n(7)),c),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)||e&&"application/json"===e["Content-Type"]?(a(e,"application/json"),function(t,e,n){if(o.isString(t))try{return(e||JSON.parse)(t),o.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&o.isString(t)&&t.length)try{return JSON.parse(t)}catch(t){if(s){if("SyntaxError"===t.name)throw r(t,this,"E_JSON_PARSE");throw t}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),o.forEach(["post","put","patch"],(function(t){u.headers[t]=o.merge(s)})),t.exports=u}).call(this,n(19))},function(t,e,n){
/*!
 * Toastify js 1.11.2
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
var o,i;o=this,i=function(t){var e=function(t){return new e.lib.init(t)};function n(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function o(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,style:{background:""}},e.lib=e.prototype={toastify:"1.11.2",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var o=document.createElement("img");o.src=this.options.avatar,o.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(o):t.insertAdjacentElement("afterbegin",o)}if(!0===this.options.close){var i=document.createElement("span");i.innerHTML="&#10006;",i.className="toast-close",i.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var r=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&r>360?t.insertAdjacentElement("afterbegin",i):t.appendChild(i)}if(this.options.stopOnFocus&&this.options.duration>0){var s=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){s.removeElement(t)}),s.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var a=n("x",this.options),c=n("y",this.options),u="left"==this.options.position?a:"-"+a,l="toastify-top"==this.options.gravity?c:"-"+c;t.style.transform="translate("+u+","+l+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var n=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,n),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},n={top:15,bottom:15},i={top:15,bottom:15},r=document.getElementsByClassName("toastify"),s=0;s<r.length;s++){t=!0===o(r[s],"toastify-top")?"toastify-top":"toastify-bottom";var a=r[s].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(r[s].style[t]=i[t]+"px",i[t]+=a+15):!0===o(r[s],"toastify-left")?(r[s].style[t]=e[t]+"px",e[t]+=a+15):(r[s].style[t]=n[t]+"px",n[t]+=a+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=i():o.Toastify=i()},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return t.apply(e,n)}}},function(t,e,n){"use strict";var o=n(0);function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var r;if(n)r=n(e);else if(o.isURLSearchParams(e))r=e.toString();else{var s=[];o.forEach(e,(function(t,e){null!=t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,(function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(i(e)+"="+i(t))})))})),r=s.join("&")}if(r){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t}},function(t,e,n){"use strict";t.exports=function(t,e,n,o,i){return t.config=e,n&&(t.code=n),t.request=o,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},function(t,e,n){"use strict";var o=n(0),i=n(21),r=n(22),s=n(5),a=n(23),c=n(26),u=n(27),l=n(8);t.exports=function(t){return new Promise((function(e,n){var d=t.data,f=t.headers,p=t.responseType;o.isFormData(d)&&delete f["Content-Type"];var h=new XMLHttpRequest;if(t.auth){var m=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";f.Authorization="Basic "+btoa(m+":"+g)}var y=a(t.baseURL,t.url);function v(){if(h){var o="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,r={data:p&&"text"!==p&&"json"!==p?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:o,config:t,request:h};i(e,n,r),h=null}}if(h.open(t.method.toUpperCase(),s(y,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,"onloadend"in h?h.onloadend=v:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(v)},h.onabort=function(){h&&(n(l("Request aborted",t,"ECONNABORTED",h)),h=null)},h.onerror=function(){n(l("Network Error",t,null,h)),h=null},h.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,t.transitional&&t.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},o.isStandardBrowserEnv()){var b=(t.withCredentials||u(y))&&t.xsrfCookieName?r.read(t.xsrfCookieName):void 0;b&&(f[t.xsrfHeaderName]=b)}"setRequestHeader"in h&&o.forEach(f,(function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete f[e]:h.setRequestHeader(e,t)})),o.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),p&&"json"!==p&&(h.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){h&&(h.abort(),n(t),h=null)})),d||(d=null),h.send(d)}))}},function(t,e,n){"use strict";var o=n(6);t.exports=function(t,e,n,i,r){var s=new Error(t);return o(s,e,n,i,r)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t,e){e=e||{};var n={},i=["url","method","data"],r=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(t,e){return o.isPlainObject(t)&&o.isPlainObject(e)?o.merge(t,e):o.isPlainObject(e)?o.merge({},e):o.isArray(e)?e.slice():e}function u(i){o.isUndefined(e[i])?o.isUndefined(t[i])||(n[i]=c(void 0,t[i])):n[i]=c(t[i],e[i])}o.forEach(i,(function(t){o.isUndefined(e[t])||(n[t]=c(void 0,e[t]))})),o.forEach(r,u),o.forEach(s,(function(i){o.isUndefined(e[i])?o.isUndefined(t[i])||(n[i]=c(void 0,t[i])):n[i]=c(void 0,e[i])})),o.forEach(a,(function(o){o in e?n[o]=c(t[o],e[o]):o in t&&(n[o]=c(void 0,t[o]))}));var l=i.concat(r).concat(s).concat(a),d=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===l.indexOf(t)}));return o.forEach(d,u),n}},function(t,e,n){"use strict";function o(t){this.message=t}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,t.exports=o},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(1);class i extends o.a{constructor(t={}){super(),this.bindClassMethods(["getState","get","setState","set","addChangeListener"],this),this.state=t,this.listeners=[]}getState(){return this.state}get(t){return this.state[t]}setState(t){this.state={...this.state,...t},this.listeners.forEach(t=>t())}set(t,e){this.state[t]=e,this.listeners.forEach(t=>t())}addChangeListener(t){this.listeners.push(t)}}},function(t,e,n){t.exports=n(14)},function(t,e,n){"use strict";var o=n(0),i=n(4),r=n(15),s=n(10);function a(t){var e=new r(t),n=i(r.prototype.request,e);return o.extend(n,r.prototype,e),o.extend(n,e),n}var c=a(n(2));c.Axios=r,c.create=function(t){return a(s(c.defaults,t))},c.Cancel=n(11),c.CancelToken=n(30),c.isCancel=n(9),c.all=function(t){return Promise.all(t)},c.spread=n(31),c.isAxiosError=n(32),t.exports=c,t.exports.default=c},function(t,e,n){"use strict";var o=n(0),i=n(5),r=n(16),s=n(17),a=n(10),c=n(28),u=c.validators;function l(t){this.defaults=t,this.interceptors={request:new r,response:new r}}l.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&c.assertOptions(e,{silentJSONParsing:u.transitional(u.boolean,"1.0.0"),forcedJSONParsing:u.transitional(u.boolean,"1.0.0"),clarifyTimeoutError:u.transitional(u.boolean,"1.0.0")},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,r=[];if(this.interceptors.response.forEach((function(t){r.push(t.fulfilled,t.rejected)})),!o){var l=[s,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(r),i=Promise.resolve(t);l.length;)i=i.then(l.shift(),l.shift());return i}for(var d=t;n.length;){var f=n.shift(),p=n.shift();try{d=f(d)}catch(t){p(t);break}}try{i=s(d)}catch(t){return Promise.reject(t)}for(;r.length;)i=i.then(r.shift(),r.shift());return i},l.prototype.getUri=function(t){return t=a(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),o.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,n,o){return this.request(a(o||{},{method:t,url:e,data:n}))}})),t.exports=l},function(t,e,n){"use strict";var o=n(0);function i(){this.handlers=[]}i.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){o.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},function(t,e,n){"use strict";var o=n(0),i=n(18),r=n(9),s=n(2);function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return a(t),t.headers=t.headers||{},t.data=i.call(t,t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),o.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||s.adapter)(t).then((function(e){return a(t),e.data=i.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return r(e)||(a(t),e&&e.response&&(e.response.data=i.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},function(t,e,n){"use strict";var o=n(0),i=n(2);t.exports=function(t,e,n){var r=this||i;return o.forEach(n,(function(n){t=n.call(r,t,e)})),t}},function(t,e){var n,o,i=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(t){n=r}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(t){o=s}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var t=a(f);l=!0;for(var e=u.length;e;){for(c=u,u=[];++d<e;)c&&c[d].run();d=-1,e=u.length}c=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t,e){o.forEach(t,(function(n,o){o!==e&&o.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[o])}))}},function(t,e,n){"use strict";var o=n(8);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(o("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";var o=n(0);t.exports=o.isStandardBrowserEnv()?{write:function(t,e,n,i,r,s){var a=[];a.push(t+"="+encodeURIComponent(e)),o.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),o.isString(i)&&a.push("path="+i),o.isString(r)&&a.push("domain="+r),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";var o=n(24),i=n(25);t.exports=function(t,e){return t&&!o(e)?i(t,e):e}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var o=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,r,s={};return t?(o.forEach(t.split("\n"),(function(t){if(r=t.indexOf(":"),e=o.trim(t.substr(0,r)).toLowerCase(),n=o.trim(t.substr(r+1)),e){if(s[e]&&i.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},function(t,e,n){"use strict";var o=n(0);t.exports=o.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var o=t;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=o.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var o=n(29),i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var r={},s=o.version.split(".");function a(t,e){for(var n=e?e.split("."):s,o=t.split("."),i=0;i<3;i++){if(n[i]>o[i])return!0;if(n[i]<o[i])return!1}return!1}i.transitional=function(t,e,n){var i=e&&a(e);function s(t,e){return"[Axios v"+o.version+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,o,a){if(!1===t)throw new Error(s(o," has been removed in "+e));return i&&!r[o]&&(r[o]=!0,console.warn(s(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,o,a)}},t.exports={isOlderVersion:a,assertOptions:function(t,e,n){if("object"!=typeof t)throw new TypeError("options must be an object");for(var o=Object.keys(t),i=o.length;i-- >0;){var r=o[i],s=e[r];if(s){var a=t[r],c=void 0===a||s(a,r,t);if(!0!==c)throw new TypeError("option "+r+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+r)}},validators:i}},function(t){t.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')},function(t,e,n){"use strict";var o=n(11);function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new o(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i((function(e){t=e})),cancel:t}},t.exports=i},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},,function(t,e,n){"use strict";n.r(e);var o=n(1),i=n(12),r=n(13),s=n.n(r);class a extends o.a{constructor(t={}){super();this.bindClassMethods(["clientLoaded","getAccommodations","createAccommodation","createRequest"],this),this.props=t,this.clientLoaded(s.a)}clientLoaded(t){this.client=t,this.props.hasOwnProperty("onReady")&&this.props.onReady()}async getAccommodations(t,e){try{return(await this.client.get("/accommodations/"+t)).data}catch(t){this.handleError("getAccommodations",t,e)}}async getAllAccommodations(t){try{return(await this.client.get("/accommodations/all")).data}catch(e){this.handleError("getAccommodations",e,t)}}async createAccommodation(t,e,n,o){try{return(await this.client.post("accommodations",{accessibilityNeed:t,accommodations:[e,n]})).data}catch(t){this.handleError("createAccommodation",t,o)}}async createRequest(t,e,n,o){try{return(await this.client.post("request",{name:t,accommodation:[e,n]})).data}catch(t){this.handleError("createRequest",t,o)}}async getAllRequest(t){try{return(await this.client.get("/request/all")).data}catch(e){this.handleError("getRequest",e,t)}}handleError(t,e,n){console.error(t+" failed - "+e),void 0!==e.response.data.message&&console.error(e.response.data.message),n&&n(t+" failed - "+e)}}class c extends o.a{constructor(){super(),this.bindClassMethods(["myFunction","onClick","onShowRequest","onSubmitRequest","onCreate"],this),this.dataStore=new i.a}async mount(){document.getElementById("request-results").addEventListener("submit",this.onShowRequest),document.getElementById("request-accommodation").addEventListener("submit",this.onSubmitRequest),document.getElementById("accessibilityNeeds").addEventListener("click",this.onClick),document.getElementById("buttonTest").addEventListener("click",this.myFunction),this.client=new a}async myFunction(){console.log("pushed");var t=document.getElementById("testing");"none"===t.style.display?t.style.display="block":t.style.display="none"}async onClick(t){t.preventDefault(),console.log(t);let e=await this.client.getAccommodations(t.path[0].id,this.errorHandler);console.log(e),console.log(e.accommodations.length);let n=document.getElementById("accommodations");for(let t=0;t<e.accommodations.length;t++)n.innerHTML=`<div><h1>Accommodations for ${e.accessibilityNeed}</h1>\n                    ${e.accommodations.map(t=>` <p>${t}</p>`).join("")}\n                    </div>`}async onShowRequest(t){t.preventDefault();let e=await this.client.getAllRequest(this.errorHandler);console.log(e);let n=document.getElementById("result4");for(let t=0;t<e.length;t++)n.innerHTML=`<div>\n                    ${e.map(t=>` <p>Name: ${t.name}</p><p>Request Date: ${t.timeStamp}</p><p>Requested Accommodations: ${t.accommodation}</p>`).join("")}\n                    </div>`}async onSubmitRequest(t){t.preventDefault();document.getElementById("request-accommodation");let e=document.getElementById("create-accessibility-need-field").value,n=document.getElementById("acc-select").value,o=document.getElementById("acc-select2").value;const i=await this.client.createRequest(e,n,o,this.errorHandler);console.log("created:"),console.log(i),i?this.showMessage("Your request has been sent"):this.errorHandler("Error sending, please Try again...")}async onCreate(){if(0==(await this.client.getAllAccommodations(this.errorHandler)).length){await this.client.createAccommodation("Sensory Sensitivity","Quiet and/or private workspace","Wear noise cancellation headphones",this.errorHandler),await this.client.createAccommodation("Physical Organization","30 minutes blocked off on the calendar at the end of each workday to organize and reset space","60 minutes blocked off on the calendar at the end of each workday to organize and reset space",this.errorHandler),await this.client.createAccommodation("Social Communication","Prefer to text or chat","Visual Learning Aids",this.errorHandler),await this.client.createAccommodation("Time Management","Setting a timer for 10 minutes and doing the task intentionally for those 10 minutes without breaks or distractions","Take a couple minutes at the beginning of each day to plan your priorities.",this.errorHandler),await this.client.createAccommodation("Task Organization","Supervisor organizes all assigned tasks by priority","Review or priorities daily",this.errorHandler),await this.client.createAccommodation("Auditory Processing","All instructions and feedback in written form","closed captioning for all digital meetings",this.errorHandler)}let t=await this.client.getAllAccommodations(this.errorHandler),e=document.getElementById("accessibilityNeeds");for(let n=0;n<t.length;n++)e.innerHTML=`<div id="button-group">\n            ${t.map(t=>`<button id = "${t.id}">${t.accessibilityNeed}</button>`).join("")}\n            </div>`;const n=new Set([]);t.map(t=>t.accommodations.map(t=>n.add(t)));const o=Array.from(n);console.log(o),document.getElementById("acc-select").innerHTML=`<option value="">--Please choose an option--</option>\n        ${o.map(t=>` <option value = "${t}">${t}</option>`).join("")}\n        </div>`,document.getElementById("acc-select2").innerHTML=`<option value="">--Please choose an option--</option>\n        ${o.map(t=>` <option value = "${t}">${t}<option>`).join("")}\n        </div>`}}window.addEventListener("DOMContentLoaded",async()=>{const t=new c;await t.mount(),await t.onCreate()})}]);
//# sourceMappingURL=requestPage.js.map