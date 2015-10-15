!function(e){"use strict";var n,t,r,o,i,a={".js":[".coffee",".jsx",".es6",".es"],".json":[],".css":[],".html":[]},c="function"==typeof require?require:null;return o=function(e){var n=new Error("Could not find module '"+e+"'");return n.code="MODULE_NOT_FOUND",n},i=function(e,n,t){var r,o;if("function"==typeof e[n+t])return n+t;for(r=0;o=a[t][r];++r)if("function"==typeof e[n+o])return n+o;return null},n=function(e,r,a,c,s,u){var f,l,p,h,v,g;for(a=a.split(/[\\/]/),f=a.pop(),("."===f||".."===f)&&(a.push(f),f="");null!=(l=a.shift());)if(l&&"."!==l&&(".."===l?(e=r.pop(),u=u.slice(0,u.lastIndexOf("/"))):(r.push(e),e=e[l],u+="/"+l),!e))throw o(c);if(f&&"function"!=typeof e[f]&&(g=i(e,f,".js"),g||(g=i(e,f,".json")),g||(g=i(e,f,".css")),g||(g=i(e,f,".html")),g?f=g:2!==s&&"object"==typeof e[f]&&(r.push(e),e=e[f],u+="/"+f,f="")),!f)return 1!==s&&e[":mainpath:"]?n(e,r,e[":mainpath:"],c,1,u):n(e,r,"index",c,2,u);if(v=e[f],!v)throw o(c);return v.hasOwnProperty("module")?v.module.exports:(p={},v.module=h={exports:p,id:u+"/"+f},v.call(p,p,h,t(e,r,u)),h.exports)},r=function(t,r,i,a){var s,u=i,f=i.charAt(0),l=0;if("/"===f){if(u=u.slice(1),t=e["/"],!t){if(c)return c(i);throw o(i)}a="/",r=[]}else if("."!==f){if(s=u.split("/",1)[0],t=e[s],!t){if(c)return c(i);throw o(i)}a=s,r=[],u=u.slice(s.length+1),u||(u=t[":mainpath:"],u?l=1:(u="index",l=2))}return n(t,r,u,i,l,a)},(t=function(e,n,t){return function(o){return r(e,[].concat(n),o,t)}})(e,[],"")}({foreach:{":mainpath:":"index.js","index.js":function(e,n,t){var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString;n.exports=function(e,n,t){if("[object Function]"!==o.call(n))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var a=0;i>a;a++)n.call(t,e[a],a,e);else for(var c in e)r.call(e,c)&&n.call(t,e[c],c,e)}}},"json-pointer":{"index.js":function(e,n,t){"use strict";function r(e,n,t){if(3===arguments.length)return r.set(e,n,t);if(2===arguments.length)return r.get(e,n);var o=r.bind(r,e);for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i].bind(o,e));return o}var o=t("foreach");n.exports=r,r.get=function(e,n){for(var t,o=r.parse(n);o.length;){if(t=o.shift(),!(t in e))throw new Error("Invalid reference token: "+t);e=e[t]}return e},r.set=function(e,n,t){for(var o,i=r.parse(n),a=i[0];i.length>1;)o=i.shift(),"-"===o&&Array.isArray(e)&&(o=e.length),a=i[0],o in e||(a.match(/^(\d+|-)$/)?e[o]=[]:e[o]={}),e=e[o];return"-"===a&&Array.isArray(e)&&(a=e.length),e[a]=t,this},r.remove=function(e,n){var t=r.parse(n),o=t.pop();if(void 0===o)throw new Error('Invalid JSON pointer for remove: "'+n+'"');delete r.get(e,r.compile(t))[o]},r.dict=function(e,n){var t={};return r.walk(e,function(e,n){t[n]=e},n),t},r.walk=function(e,n,t){var i=[];t=t||function(e){var n=Object.prototype.toString.call(e);return"[object Object]"===n||"[object Array]"===n},function a(e){o(e,function(e,o){i.push(String(o)),t(e)?a(e):n(e,r.compile(i)),i.pop()})}(e)},r.has=function(e,n){try{r.get(e,n)}catch(t){return!1}return!0},r.escape=function(e){return e.toString().replace(/~/g,"~0").replace(/\//g,"~1")},r.unescape=function(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")},r.parse=function(e){if(""===e)return[];if("/"!==e.charAt(0))throw new Error("Invalid JSON pointer: "+e);return e.substring(1).split(/\//).map(r.unescape)},r.compile=function(e){return 0===e.length?"":"/"+e.map(r.escape).join("/")}}},"json-schema-viewer":{src:{scripts:{components:{"component.es6":function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=jQuery,a=function(){function e(n){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,e),this.el=n,this.$el=i(n),this.data=t,this.attachListeners()}return o(e,[{key:"attachListeners",value:function(){var e=this,n=this,t=/^(\S+)\s*(.*)$/,r=this.listeners,o=function(o){var i=o.trim(),a=!1,c=e[r[o]],s=o.match(t);s&&(i=s[1],a=s[2]);var u=function(e){c.call(this,e,n)};a?e.$el.on(i,a,u):e.$el.on(i,u)};for(var i in r)o(i)}},{key:"child",value:function(e){var n=this.$el.find(e);return n.length?n.eq(0):null}}]),e}();n.exports=a},"schemaviewer.es6":function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=function(e,n,t){for(var r=!0;r;){var o=e,i=n,a=t;c=u=s=void 0,r=!1,null===o&&(o=Function.prototype);var c=Object.getOwnPropertyDescriptor(o,i);if(void 0!==c){if("value"in c)return c.value;var s=c.get;return void 0===s?void 0:s.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return void 0;e=u,n=i,t=a,r=!0}},c=t("./component"),s=(jQuery,"<b> </b>"),u=t("json-pointer"),f=function(e){function n(e,t){r(this,n),a(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,e,t),this.input=this.child(t.source),this.target=this.child(t.target)}return o(n,e),i(n,[{key:"handleChange",value:function(e,n){var t;try{t=JSON.parse(n.input.val())}catch(e){return void(n.target[0].innerHTML="Error parsing JSON")}console.log(t),n.original=t;var r=n.convert(t,0);n.target[0].innerHTML=r}},{key:"convert",value:function(e,n){for(var t=this,r="",o="",i=e.type||"",a=0;n>a;a++)o+=s;if(Array.isArray(i)&&(i=i.join("|")),r+="<i>"+i+"</i>",e.properties){var c=n+1;for(var f in e.properties)r+="\n"+s+o+"<strong>"+f+"</strong>: ",r+=this.convert(e.properties[f],c)}if(e.items){var c=n+1;r+=" <span>[</span>\n",r+=s+o+this.convert(e.items,c),r+="\n"+o+"<span>]</span>"}if(e.$ref){var l=u.get(this.original,e.$ref.replace(/^#/,""));r+=this.convert(l,n)}if(e.anyOf){var c=n+1;r+="<span>&lt;</span>\n",e.anyOf.forEach(function(e,n,i){r+=s+o+t.convert(e,c),n<i.length-1&&(r+="\n"+s+o+"<span>/</span> \n")}),r+="\n"+o+"<span>&gt;</span>"}return r}},{key:"listeners",get:function(){var e={};return e["change "+this.data.source]="handleChange",e["blur "+this.data.source]="handleChange",e}}]),n}(c);n.exports=f}},"index.es6":function(e,n,t){"use strict";t("./plugins");var r={schemaviewer:t("./components/schemaviewer")},o=function(e){if(e.name in r){var n=r[e.name],t="string"==typeof e.place?document.querySelector(e.place):e.place;new n(t,e.data||{})}else console.warn("Component with name "+e.name+" was not found!")};initComponents.map(o),initComponents={push:o}},"plugins.js":function(e,n,t){!function(){for(var e,n=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=t.length,o=window.console=window.console||{};r--;)e=t[r],o[e]||(o[e]=n)}()}}}}})("json-schema-viewer/src/scripts/index");