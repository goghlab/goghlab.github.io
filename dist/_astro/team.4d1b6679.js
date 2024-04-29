import{j as N,r as q}from"./index.6739016d.js";import{R,r as S}from"./index.919b8666.js";var ee=Object.defineProperty,L=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,D=(h,s,a)=>s in h?ee(h,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[s]=a,b=(h,s)=>{for(var a in s||(s={}))U.call(s,a)&&D(h,a,s[a]);if(L)for(var a of L(s))x.call(s,a)&&D(h,a,s[a]);return h},O=(h,s)=>{var a={};for(var i in h)U.call(h,i)&&s.indexOf(i)<0&&(a[i]=h[i]);if(h!=null&&L)for(var i of L(h))s.indexOf(i)<0&&x.call(h,i)&&(a[i]=h[i]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var P;(h=>{const s=class{constructor(e,t,r,n){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<s.MIN_VERSION||e>s.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let o=[];for(let l=0;l<this.size;l++)o.push(!1);for(let l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(r);if(this.drawCodewords(c),n==-1){let l=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const f=this.getPenaltyScore();f<l&&(n=g,l=f),this.applyMask(g)}}u(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}static encodeText(e,t){const r=h.QrSegment.makeSegments(e);return s.encodeSegments(r,t)}static encodeBinary(e,t){const r=h.QrSegment.makeBytes(e);return s.encodeSegments([r],t)}static encodeSegments(e,t,r=1,n=40,o=-1,c=!0){if(!(s.MIN_VERSION<=r&&r<=n&&n<=s.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let l,g;for(l=r;;l++){const m=s.getNumDataCodewords(l,t)*8,w=C.getTotalBits(e,l);if(w<=m){g=w;break}if(l>=n)throw new RangeError("Data too long")}for(const m of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])c&&g<=s.getNumDataCodewords(l,m)*8&&(t=m);let f=[];for(const m of e){i(m.mode.modeBits,4,f),i(m.numChars,m.mode.numCharCountBits(l),f);for(const w of m.getData())f.push(w)}u(f.length==g);const A=s.getNumDataCodewords(l,t)*8;u(f.length<=A),i(0,Math.min(4,A-f.length),f),i(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let m=236;f.length<A;m^=253)i(m,8,f);let p=[];for(;p.length*8<f.length;)p.push(0);return f.forEach((m,w)=>p[w>>>3]|=m<<7-(w&7)),new s(l,t,p,o)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)r==0&&n==0||r==0&&n==t-1||r==t-1&&n==0||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let r=t;for(let o=0;o<10;o++)r=r<<1^(r>>>9)*1335;const n=(t<<10|r)^21522;u(n>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,E(n,o));this.setFunctionModule(8,7,E(n,6)),this.setFunctionModule(8,8,E(n,7)),this.setFunctionModule(7,8,E(n,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,E(n,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,E(n,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,E(n,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;u(t>>>18==0);for(let r=0;r<18;r++){const n=E(t,r),o=this.size-11+r%3,c=Math.floor(r/3);this.setFunctionModule(o,c,n),this.setFunctionModule(c,o,n)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){const o=Math.max(Math.abs(n),Math.abs(r)),c=e+n,l=t+r;0<=c&&c<this.size&&0<=l&&l<this.size&&this.setFunctionModule(c,l,o!=2&&o!=4)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,r=this.errorCorrectionLevel;if(e.length!=s.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");const n=s.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],o=s.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],c=Math.floor(s.getNumRawDataModules(t)/8),l=n-c%n,g=Math.floor(c/n);let f=[];const A=s.reedSolomonComputeDivisor(o);for(let m=0,w=0;m<n;m++){let M=e.slice(w,w+g-o+(m<l?0:1));w+=M.length;const I=s.reedSolomonComputeRemainder(M,A);m<l&&M.push(0),f.push(M.concat(I))}let p=[];for(let m=0;m<f[0].length;m++)f.forEach((w,M)=>{(m!=g-o||M>=l)&&p.push(w[m])});return u(p.length==c),p}drawCodewords(e){if(e.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let n=0;n<this.size;n++)for(let o=0;o<2;o++){const c=r-o,g=(r+1&2)==0?this.size-1-n:n;!this.isFunction[g][c]&&t<e.length*8&&(this.modules[g][c]=E(e[t>>>3],7-(t&7)),t++)}}u(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let c=!1,l=0,g=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[o][f]==c?(l++,l==5?e+=s.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,g),c||(e+=this.finderPenaltyCountPatterns(g)*s.PENALTY_N3),c=this.modules[o][f],l=1);e+=this.finderPenaltyTerminateAndCount(c,l,g)*s.PENALTY_N3}for(let o=0;o<this.size;o++){let c=!1,l=0,g=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][o]==c?(l++,l==5?e+=s.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,g),c||(e+=this.finderPenaltyCountPatterns(g)*s.PENALTY_N3),c=this.modules[f][o],l=1);e+=this.finderPenaltyTerminateAndCount(c,l,g)*s.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let c=0;c<this.size-1;c++){const l=this.modules[o][c];l==this.modules[o][c+1]&&l==this.modules[o+1][c]&&l==this.modules[o+1][c+1]&&(e+=s.PENALTY_N2)}let t=0;for(const o of this.modules)t=o.reduce((c,l)=>c+(l?1:0),t);const r=this.size*this.size,n=Math.ceil(Math.abs(t*20-r*10)/r)-1;return u(0<=n&&n<=9),e+=n*s.PENALTY_N4,u(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<s.MIN_VERSION||e>s.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return u(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(s.getNumRawDataModules(e)/8)-s.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*s.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let r=1;for(let n=0;n<e;n++){for(let o=0;o<t.length;o++)t[o]=s.reedSolomonMultiply(t[o],r),o+1<t.length&&(t[o]^=t[o+1]);r=s.reedSolomonMultiply(r,2)}return t}static reedSolomonComputeRemainder(e,t){let r=t.map(n=>0);for(const n of e){const o=n^r.shift();r.push(0),t.forEach((c,l)=>r[l]^=s.reedSolomonMultiply(c,o))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return u(r>>>8==0),r}finderPenaltyCountPatterns(e){const t=e[1];u(t<=this.size*3);const r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let a=s;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],h.QrCode=a;function i(e,t,r){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function E(e,t){return(e>>>t&1)!=0}function u(e){if(!e)throw new Error("Assertion error")}const d=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(const r of e)i(r,8,t);return new d(d.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!d.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let r=0;r<e.length;){const n=Math.min(e.length-r,3);i(parseInt(e.substr(r,n),10),n*3+1,t),r+=n}return new d(d.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!d.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],r;for(r=0;r+2<=e.length;r+=2){let n=d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),i(n,11,t)}return r<e.length&&i(d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new d(d.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:d.isNumeric(e)?[d.makeNumeric(e)]:d.isAlphanumeric(e)?[d.makeAlphanumeric(e)]:[d.makeBytes(d.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else if(e<1e6)i(6,3,t),i(e,21,t);else throw new RangeError("ECI assignment value out of range");return new d(d.Mode.ECI,0,t)}static isNumeric(e){return d.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return d.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(const n of e){const o=n.mode.numCharCountBits(t);if(n.numChars>=1<<o)return 1/0;r+=4+o+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}};let C=d;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",h.QrSegment=C})(P||(P={}));(h=>{(s=>{const a=class{constructor(E,u){this.ordinal=E,this.formatBits=u}};let i=a;i.LOW=new a(0,1),i.MEDIUM=new a(1,0),i.QUARTILE=new a(2,3),i.HIGH=new a(3,2),s.Ecc=i})(h.QrCode||(h.QrCode={}))})(P||(P={}));(h=>{(s=>{const a=class{constructor(E,u){this.modeBits=E,this.numBitsCharCount=u}numCharCountBits(E){return this.numBitsCharCount[Math.floor((E+7)/17)]}};let i=a;i.NUMERIC=new a(1,[10,12,14]),i.ALPHANUMERIC=new a(2,[9,11,13]),i.BYTE=new a(4,[8,16,16]),i.KANJI=new a(8,[8,10,12]),i.ECI=new a(7,[0,0,0]),s.Mode=i})(h.QrSegment||(h.QrSegment={}))})(P||(P={}));var v=P;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Q={L:v.QrCode.Ecc.LOW,M:v.QrCode.Ecc.MEDIUM,Q:v.QrCode.Ecc.QUARTILE,H:v.QrCode.Ecc.HIGH},H=128,k="L",$="#FFFFFF",Y="#000000",j=!1,F=4,te=.1;function G(h,s=0){const a=[];return h.forEach(function(i,E){let u=null;i.forEach(function(d,C){if(!d&&u!==null){a.push(`M${u+s} ${E+s}h${C-u}v1H${u+s}z`),u=null;return}if(C===i.length-1){if(!d)return;u===null?a.push(`M${C+s},${E+s} h1v1H${C+s}z`):a.push(`M${u+s},${E+s} h${C+1-u}v1H${u+s}z`);return}d&&u===null&&(u=C)})}),a.join("")}function X(h,s){return h.slice().map((a,i)=>i<s.y||i>=s.y+s.h?a:a.map((E,u)=>u<s.x||u>=s.x+s.w?E:!1))}function K(h,s,a,i){if(i==null)return null;const E=a?F:0,u=h.length+E*2,d=Math.floor(s*te),C=u/s,e=(i.width||d)*C,t=(i.height||d)*C,r=i.x==null?h.length/2-e/2:i.x*C,n=i.y==null?h.length/2-t/2:i.y*C;let o=null;if(i.excavate){let c=Math.floor(r),l=Math.floor(n),g=Math.ceil(e+r-c),f=Math.ceil(t+n-l);o={x:c,y:l,w:g,h:f}}return{x:r,y:n,h:t,w:e,excavation:o}}var re=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ne(h){const s=h,{value:a,size:i=H,level:E=k,bgColor:u=$,fgColor:d=Y,includeMargin:C=j,style:e,imageSettings:t}=s,r=O(s,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),n=t?.src,o=S.useRef(null),c=S.useRef(null),[l,g]=S.useState(!1);S.useEffect(()=>{if(o.current!=null){const p=o.current,m=p.getContext("2d");if(!m)return;let w=v.QrCode.encodeText(a,Q[E]).getModules();const M=C?F:0,I=w.length+M*2,_=K(w,i,C,t),y=c.current,T=_!=null&&y!==null&&y.complete&&y.naturalHeight!==0&&y.naturalWidth!==0;T&&_.excavation!=null&&(w=X(w,_.excavation));const B=window.devicePixelRatio||1;p.height=p.width=i*B;const z=i/I*B;m.scale(z,z),m.fillStyle=u,m.fillRect(0,0,I,I),m.fillStyle=d,re?m.fill(new Path2D(G(w,M))):w.forEach(function(V,W){V.forEach(function(Z,J){Z&&m.fillRect(J+M,W+M,1,1)})}),T&&m.drawImage(y,_.x+M,_.y+M,_.w,_.h)}}),S.useEffect(()=>{g(!1)},[n]);const f=b({height:i,width:i},e);let A=null;return n!=null&&(A=R.createElement("img",{src:n,key:n,style:{display:"none"},onLoad:()=>{g(!0)},ref:c})),R.createElement(R.Fragment,null,R.createElement("canvas",b({style:f,height:i,width:i,ref:o},r)),A)}function oe(h){const s=h,{value:a,size:i=H,level:E=k,bgColor:u=$,fgColor:d=Y,includeMargin:C=j,imageSettings:e}=s,t=O(s,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let r=v.QrCode.encodeText(a,Q[E]).getModules();const n=C?F:0,o=r.length+n*2,c=K(r,i,C,e);let l=null;e!=null&&c!=null&&(c.excavation!=null&&(r=X(r,c.excavation)),l=R.createElement("image",{xlinkHref:e.src,height:c.h,width:c.w,x:c.x+n,y:c.y+n,preserveAspectRatio:"none"}));const g=G(r,n);return R.createElement("svg",b({height:i,width:i,viewBox:`0 0 ${o} ${o}`},t),R.createElement("path",{fill:u,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),R.createElement("path",{fill:d,d:g,shapeRendering:"crispEdges"}),l)}var se=h=>{const s=h,{renderAs:a}=s,i=O(s,["renderAs"]);return a==="svg"?R.createElement(oe,b({},i)):R.createElement(ne,b({},i))};function ae(){return N.jsx("section",{className:"py-8 px-8 lg:py-16",children:N.jsxs("div",{className:"container mx-auto",children:[N.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}),N.jsxs("div",{className:"mb-24",children:[N.jsx(q.Typography,{variant:"h2",color:"blue-gray",className:"mb-4",children:"QR Code"}),N.jsx("div",{className:"mx-auto lg:w-8/12 lg:px-20",children:N.jsx(se,{value:"https://docs.github.com/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls"})})]})]})})}export{ae as default};