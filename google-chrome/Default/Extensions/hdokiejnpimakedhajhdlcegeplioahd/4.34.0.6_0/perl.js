var LPPerl=new LPPerl_t;function LPPerl_t(){g_isfirefox||(sprintf=window.sprintf),"undefined"!=typeof sprintf&&null!==sprintf||"undefined"==typeof lp_global_sprintf||(sprintf=lp_global_sprintf),this.time=function(){var t=0;if("undefined"!=typeof Date){var e=new Date;t=parseInt(e.getTime()/1e3+60*e.getTimezoneOffset()),!isNaN(t)&&t!=1/0||(t=0)}return t},this.ctime=function(t){var e="";if(null==t&&(t=(new Date).getTime()),"undefined"!=typeof Date){var n=new Date(t);void 0!==n.toUTCString?e=n.toUTCString():void 0!==n.toGMTString&&(e=n.toGMTString())}return e||"Infinity"!=(e=parseInt(t/1e3).toString())&&"NaN"!=e||(e=""),e},this.chomp=function(t){return t&&"string"==typeof t?("\n"==t.substr(t.length-1,1)&&(t=t.substr(0,t.length-1)),t):""},this.warn=function(){var t="";t="undefined"==typeof sprintf?arguments.join(" "):sprintf.apply(this,arguments),"undefined"!=typeof console_warn&&console_warn(t),"undefined"!=typeof write_history&&write_history({cmd:"warn",msg:t}),"undefined"!=typeof write_to_history&&write_to_history(document,"warn",t)},this.keys=function(t){return void 0===Object.keys&&(Object.keys=function(){"use strict";var i=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=f.length;return function(t){if("object"!=typeof t&&("function"!=typeof t||null===t))throw new TypeError("Object.keys called on non-object");var e=[],n,r;for(n in t)i.call(t,n)&&e.push(n);if(o)for(r=0;r<s;r++)i.call(t,f[r])&&e.push(f[r]);return e}}()),Object.keys(t)}}
//# sourceMappingURL=sourcemaps/perl.js.map
