(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{a1aefa272411e80f6961:function(t,r,e){"use strict";e.r(r),e.d(r,"Color",function(){return h});var i,n,s,a=e("d1886278d8ad2602c715"),o={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function h(t,r,e){return void 0===r&&void 0===e?this.set(t):this.setRGB(t,r,e)}Object.assign(h.prototype,{isColor:!0,r:1,g:1,b:1,set:function(t){return t&&t.isColor?this.copy(t):"number"===typeof t?this.setHex(t):"string"===typeof t&&this.setStyle(t),this},setScalar:function(t){return this.r=t,this.g=t,this.b=t,this},setHex:function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,this},setRGB:function(t,r,e){return this.r=t,this.g=r,this.b=e,this},setHSL:function(){function t(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+6*(r-t)*(2/3-e):t}return function(r,e,i){if(r=a.a.euclideanModulo(r,1),e=a.a.clamp(e,0,1),i=a.a.clamp(i,0,1),0===e)this.r=this.g=this.b=i;else{var n=i<=.5?i*(1+e):i+e-i*e,s=2*i-n;this.r=t(s,n,r+1/3),this.g=t(s,n,r),this.b=t(s,n,r-1/3)}return this}}(),setStyle:function(t){function r(r){void 0!==r&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}var e;if(e=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){var i,n=e[1],s=e[2];switch(n){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,r(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,r(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)){var a=parseFloat(i[1])/360,h=parseInt(i[2],10)/100,u=parseInt(i[3],10)/100;return r(i[5]),this.setHSL(a,h,u)}}}else if(e=/^\#([A-Fa-f0-9]+)$/.exec(t)){var l,c=(l=e[1]).length;if(3===c)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,this;if(6===c)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,this}t&&t.length>0&&(void 0!==(l=o[t])?this.setHex(l):console.warn("THREE.Color: Unknown color "+t));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},copyGammaToLinear:function(t,r){return void 0===r&&(r=2),this.r=Math.pow(t.r,r),this.g=Math.pow(t.g,r),this.b=Math.pow(t.b,r),this},copyLinearToGamma:function(t,r){void 0===r&&(r=2);var e=r>0?1/r:1;return this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this},convertGammaToLinear:function(t){return this.copyGammaToLinear(this,t),this},convertLinearToGamma:function(t){return this.copyLinearToGamma(this,t),this},copySRGBToLinear:function(){function t(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}return function(r){return this.r=t(r.r),this.g=t(r.g),this.b=t(r.b),this}}(),copyLinearToSRGB:function(){function t(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}return function(r){return this.r=t(r.r),this.g=t(r.g),this.b=t(r.b),this}}(),convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(t){void 0===t&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});var r,e,i=this.r,n=this.g,s=this.b,a=Math.max(i,n,s),o=Math.min(i,n,s),h=(o+a)/2;if(o===a)r=0,e=0;else{var u=a-o;switch(e=h<=.5?u/(a+o):u/(2-a-o),a){case i:r=(n-s)/u+(n<s?6:0);break;case n:r=(s-i)/u+2;break;case s:r=(i-n)/u+4}r/=6}return t.h=r,t.s=e,t.l=h,t},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:(s={},function(t,r,e){return this.getHSL(s),s.h+=t,s.s+=r,s.l+=e,this.setHSL(s.h,s.s,s.l),this}),add:function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},addColors:function(t,r){return this.r=t.r+r.r,this.g=t.g+r.g,this.b=t.b+r.b,this},addScalar:function(t){return this.r+=t,this.g+=t,this.b+=t,this},sub:function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},multiply:function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},multiplyScalar:function(t){return this.r*=t,this.g*=t,this.b*=t,this},lerp:function(t,r){return this.r+=(t.r-this.r)*r,this.g+=(t.g-this.g)*r,this.b+=(t.b-this.b)*r,this},lerpHSL:(i={h:0,s:0,l:0},n={h:0,s:0,l:0},function(t,r){this.getHSL(i),t.getHSL(n);var e=a.a.lerp(i.h,n.h,r),s=a.a.lerp(i.s,n.s,r),o=a.a.lerp(i.l,n.l,r);return this.setHSL(e,s,o),this}),equals:function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},fromArray:function(t,r){return void 0===r&&(r=0),this.r=t[r],this.g=t[r+1],this.b=t[r+2],this},toArray:function(t,r){return void 0===t&&(t=[]),void 0===r&&(r=0),t[r]=this.r,t[r+1]=this.g,t[r+2]=this.b,t},toJSON:function(){return this.getHex()}})},d1886278d8ad2602c715:function(t,r,e){"use strict";e.d(r,"a",function(){return i});var i={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(var t=[],r=0;r<256;r++)t[r]=(r<16?"0":"")+r.toString(16);return function(){var r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(t[255&r]+t[r>>8&255]+t[r>>16&255]+t[r>>24&255]+"-"+t[255&e]+t[e>>8&255]+"-"+t[e>>16&15|64]+t[e>>24&255]+"-"+t[63&i|128]+t[i>>8&255]+"-"+t[i>>16&255]+t[i>>24&255]+t[255&n]+t[n>>8&255]+t[n>>16&255]+t[n>>24&255]).toUpperCase()}}(),clamp:function(t,r,e){return Math.max(r,Math.min(e,t))},euclideanModulo:function(t,r){return(t%r+r)%r},mapLinear:function(t,r,e,i,n){return i+(t-r)*(n-i)/(e-r)},lerp:function(t,r,e){return(1-e)*t+e*r},smoothstep:function(t,r,e){return t<=r?0:t>=e?1:(t=(t-r)/(e-r))*t*(3-2*t)},smootherstep:function(t,r,e){return t<=r?0:t>=e?1:(t=(t-r)/(e-r))*t*t*(t*(6*t-15)+10)},randInt:function(t,r){return t+Math.floor(Math.random()*(r-t+1))},randFloat:function(t,r){return t+Math.random()*(r-t)},randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*i.DEG2RAD},radToDeg:function(t){return t*i.RAD2DEG},isPowerOfTwo:function(t){return 0===(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}}}}]);