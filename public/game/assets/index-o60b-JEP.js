(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="166",ud=0,Ql=1,dd=2,Oh=1,Bh=2,kn=3,ri=0,Je=1,An=2,Gn=0,rs=1,Mi=2,tc=3,ec=4,fd=5,_i=100,pd=101,md=102,gd=103,vd=104,_d=200,xd=201,yd=202,Md=203,Ao=204,Ro=205,Sd=206,wd=207,Td=208,Ed=209,bd=210,Ad=211,Rd=212,Cd=213,Pd=214,Ld=0,Id=1,Dd=2,na=3,Ud=4,Nd=5,Fd=6,Od=7,pa=0,Bd=1,zd=2,si=0,zh=1,kh=2,Vh=3,ml=4,kd=5,Hh=6,Gh=7,nc="attached",Vd="detached",Wh=300,cs=301,hs=302,ia=303,Co=304,ma=306,wi=1e3,Vn=1001,Po=1002,tn=1003,Hd=1004,lr=1005,xn=1006,La=1007,yi=1008,Xn=1009,Xh=1010,qh=1011,Xs=1012,gl=1013,Ti=1014,Rn=1015,Wn=1016,vl=1017,_l=1018,us=1020,Yh=35902,Kh=1021,jh=1022,dn=1023,Zh=1024,$h=1025,as=1026,ds=1027,Jh=1028,xl=1029,Qh=1030,yl=1031,Ml=1033,jr=33776,Zr=33777,$r=33778,Jr=33779,Lo=35840,Io=35841,Do=35842,Uo=35843,No=36196,Fo=37492,Oo=37496,Bo=37808,zo=37809,ko=37810,Vo=37811,Ho=37812,Go=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,Ko=37818,jo=37819,Zo=37820,$o=37821,Qr=36492,Jo=36494,Qo=36495,tu=36283,tl=36284,el=36285,nl=36286,sa=2300,il=2301,Ia=2302,ic=2400,sc=2401,rc=2402,Gd=2500,Wd=3200,Xd=3201,ga=0,qd=1,ei="",Be="srgb",oi="srgb-linear",Sl="display-p3",va="display-p3-linear",ra="linear",he="srgb",aa="rec709",oa="p3",Li=7680,ac=519,Yd=512,Kd=513,jd=514,eu=515,Zd=516,$d=517,Jd=518,Qd=519,sl=35044,oc="300 es",Hn=2e3,la=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const Ns=Math.PI/180,fs=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ie(s,t,e){return Math.max(t,Math.min(e,s))}function wl(s,t){return(s%t+t)%t}function tf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ef(s,t,e){return s!==t?(e-s)/(t-s):0}function Fs(s,t,e){return(1-e)*s+e*t}function nf(s,t,e,n){return Fs(s,t,1-Math.exp(-e*n))}function sf(s,t=1){return t-Math.abs(wl(s,t*2)-t)}function rf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function af(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function of(s,t){return s+Math.floor(Math.random()*(t-s+1))}function lf(s,t){return s+Math.random()*(t-s)}function cf(s){return s*(.5-Math.random())}function hf(s){s!==void 0&&(lc=s);let t=lc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uf(s){return s*Ns}function df(s){return s*fs}function ff(s){return(s&s-1)===0&&s!==0}function pf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gf(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const He={DEG2RAD:Ns,RAD2DEG:fs,generateUUID:Sn,clamp:Ie,euclideanModulo:wl,mapLinear:tf,inverseLerp:ef,lerp:Fs,damp:nf,pingpong:sf,smoothstep:rf,smootherstep:af,randInt:of,randFloat:lf,randFloatSpread:cf,seededRandom:hf,degToRad:uf,radToDeg:df,isPowerOfTwo:ff,ceilPowerOfTwo:pf,floorPowerOfTwo:mf,setQuaternionFromProperEuler:gf,normalize:ae,denormalize:yn};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],_=i[4],x=i[7],C=i[2],b=i[5],A=i[8];return r[0]=a*v+o*y+l*C,r[3]=a*m+o*_+l*b,r[6]=a*p+o*x+l*A,r[1]=c*v+u*y+h*C,r[4]=c*m+u*_+h*b,r[7]=c*p+u*x+h*A,r[2]=d*v+f*y+g*C,r[5]=d*m+f*_+g*b,r[8]=d*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(i*c-u*n)*v,t[2]=(o*n-i*a)*v,t[3]=d*v,t[4]=(u*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Vt;function nu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vf(){const s=qs("canvas");return s.style.display="block",s}const cc={};function Tl(s){s in cc||(cc[s]=!0,console.warn(s))}function _f(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const hc=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uc=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[oi]:{transfer:ra,primaries:aa,toReference:s=>s,fromReference:s=>s},[Be]:{transfer:he,primaries:aa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[va]:{transfer:ra,primaries:oa,toReference:s=>s.applyMatrix3(uc),fromReference:s=>s.applyMatrix3(hc)},[Sl]:{transfer:he,primaries:oa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(uc),fromReference:s=>s.applyMatrix3(hc).convertLinearToSRGB()}},xf=new Set([oi,va]),ie={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!xf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=cr[t].toReference,i=cr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return cr[s].primaries},getTransfer:function(s){return s===ei?ra:cr[s].transfer}};function os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ua(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ii;class yf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=qs("canvas")),Ii.width=t.width,Ii.height=t.height;const n=Ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=os(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mf=0;class iu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Na(i[a].image)):r.push(Na(i[a]))}else r=Na(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;class Ue extends _s{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Vn,i=Vn,r=xn,a=yi,o=dn,l=Xn,c=Ue.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Sn(),this.name="",this.source=new iu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wi:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wi:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Wh;Ue.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,x=(f+1)/2,C=(p+1)/2,b=(u+d)/4,A=(h+v)/4,I=(g+m)/4;return _>x&&_>C?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=b/n,r=A/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=I/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends _s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new iu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class su extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tf extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ge{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),b=Math.atan2(C,p*y);m=Math.sin(m*b)/C,o=Math.sin(o*b)/C}const x=o*y;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new E,dc=new Ge;class ai{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),ur.subVectors(this.max,Es),Di.subVectors(t.a,Es),Ui.subVectors(t.b,Es),Ni.subVectors(t.c,Es),Kn.subVectors(Ui,Di),jn.subVectors(Ni,Ui),hi.subVectors(Di,Ni);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-hi.z,hi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!Oa(e,Di,Ui,Ni,ur)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Di,Ui,Ni,ur))?!1:(dr.crossVectors(Kn,jn),e=[dr.x,dr.y,dr.z],Oa(e,Di,Ui,Ni,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new E,new E,new E,new E,new E,new E,new E,new E],pn=new E,hr=new ai,Di=new E,Ui=new E,Ni=new E,Kn=new E,jn=new E,hi=new E,Es=new E,ur=new E,dr=new E,ui=new E;function Oa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ui.fromArray(s,r);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ef=new ai,bs=new E,Ba=new E;class Ri{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ef.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Ba)),this.expandByPoint(bs.copy(t.center).sub(Ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new E,za=new E,fr=new E,Zn=new E,ka=new E,pr=new E,Va=new E;class tr{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){za.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(za);const r=t.distanceTo(e)*.5,a=-this.direction.dot(fr),o=Zn.dot(this.direction),l=-Zn.dot(fr),c=Zn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(za).addScaledVector(fr,d),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,r){ka.subVectors(e,t),pr.subVectors(n,t),Va.crossVectors(ka,pr);let a=this.direction.dot(Va),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);const l=o*this.direction.dot(pr.crossVectors(Zn,pr));if(l<0)return null;const c=o*this.direction.dot(ka.cross(Zn));if(c<0||l+c>a)return null;const u=-o*Zn.dot(Va);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(t,e,n,i,r,a,o,l,c,u,h,d,f,g,v,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,h,d,f,g,v,m)}set(t,e,n,i,r,a,o,l,c,u,h,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),a=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;e[0]=d-v*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Af)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),$n.crossVectors(n,sn),$n.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),$n.crossVectors(n,sn)),$n.normalize(),mr.crossVectors(sn,$n),i[0]=$n.x,i[4]=mr.x,i[8]=sn.x,i[1]=$n.y,i[5]=mr.y,i[9]=sn.y,i[2]=$n.z,i[6]=mr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],x=n[11],C=n[15],b=i[0],A=i[4],I=i[8],w=i[12],M=i[1],P=i[5],O=i[9],z=i[13],W=i[2],X=i[6],H=i[10],Y=i[14],G=i[3],ht=i[7],vt=i[11],j=i[15];return r[0]=a*b+o*M+l*W+c*G,r[4]=a*A+o*P+l*X+c*ht,r[8]=a*I+o*O+l*H+c*vt,r[12]=a*w+o*z+l*Y+c*j,r[1]=u*b+h*M+d*W+f*G,r[5]=u*A+h*P+d*X+f*ht,r[9]=u*I+h*O+d*H+f*vt,r[13]=u*w+h*z+d*Y+f*j,r[2]=g*b+v*M+m*W+p*G,r[6]=g*A+v*P+m*X+p*ht,r[10]=g*I+v*O+m*H+p*vt,r[14]=g*w+v*z+m*Y+p*j,r[3]=y*b+_*M+x*W+C*G,r[7]=y*A+_*P+x*X+C*ht,r[11]=y*I+_*O+x*H+C*vt,r[15]=y*w+_*z+x*Y+C*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+m*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=h*m*c-v*d*c+v*l*f-o*m*f-h*l*p+o*d*p,_=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,x=u*v*c-g*h*c+g*o*f-a*v*f-u*o*p+a*h*p,C=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,b=e*y+n*_+i*x+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=y*A,t[1]=(v*d*r-h*m*r-v*i*f+n*m*f+h*i*p-n*d*p)*A,t[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*A,t[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*A,t[4]=_*A,t[5]=(u*m*r-g*d*r+g*i*f-e*m*f-u*i*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*A,t[7]=(a*d*r-u*l*r+u*i*c-e*d*c-a*i*f+e*l*f)*A,t[8]=x*A,t[9]=(g*h*r-u*v*r-g*n*f+e*v*f+u*n*p-e*h*p)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*A,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*f-e*o*f)*A,t[12]=C*A,t[13]=(u*v*i-g*h*i+g*n*d-e*v*d-u*n*m+e*h*m)*A,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*m-e*o*m)*A,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,v=a*u,m=a*h,p=o*h,y=l*c,_=l*u,x=l*h,C=n.x,b=n.y,A=n.z;return i[0]=(1-(v+p))*C,i[1]=(f+x)*C,i[2]=(g-_)*C,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+_)*A,i[9]=(m-y)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Fi.set(i[0],i[1],i[2]).length();const a=Fi.set(i[4],i[5],i[6]).length(),o=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);const c=1/r,u=1/a,h=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,e.setFromRotationMatrix(mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Hn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Hn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===la)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Hn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-r),d=(e+t)*c,f=(n+i)*u;let g,v;if(o===Hn)g=(a+r)*h,v=-2*h;else if(o===la)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new E,mn=new Mt,bf=new E(0,0,0),Af=new E(1,1,1),$n=new E,mr=new E,sn=new E,fc=new Mt,pc=new Ge;class ge{constructor(t=0,e=0,n=0,i=ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ge.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rf=0;const mc=new E,Oi=new Ge,Nn=new Mt,gr=new E,As=new E,Cf=new E,Pf=new Ge,gc=new E(1,0,0),vc=new E(0,1,0),_c=new E(0,0,1),xc={type:"added"},Lf={type:"removed"},Bi={type:"childadded",child:null},Ha={type:"childremoved",child:null};class ue extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new E,e=new ge,n=new Ge,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Vt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(As,gr,this.up):Nn.lookAt(gr,As,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new E(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new E,Fn=new E,Ga=new E,On=new E,zi=new E,ki=new E,yc=new E,Wa=new E,Xa=new E,qa=new E;class Mn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gn.subVectors(t,e),i.cross(gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){gn.subVectors(i,e),Fn.subVectors(n,e),Ga.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(Fn),l=gn.dot(Ga),c=Fn.dot(Fn),u=Fn.dot(Ga),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static isFrontFacing(t,e,n,i){return gn.subVectors(n,e),Fn.subVectors(t,e),gn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;zi.subVectors(i,n),ki.subVectors(r,n),Wa.subVectors(t,n);const l=zi.dot(Wa),c=ki.dot(Wa);if(l<=0&&c<=0)return e.copy(n);Xa.subVectors(t,i);const u=zi.dot(Xa),h=ki.dot(Xa);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(zi,a);qa.subVectors(t,r);const f=zi.dot(qa),g=ki.dot(qa);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ki,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return yc.subVectors(r,i),o=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(yc,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(zi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Ya(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=wl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ya(a,r,t+1/3),this.g=Ya(a,r,t),this.b=Ya(a,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ie.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ie(ke.r*255,0,255))*65536+Math.round(Ie(ke.g*255,0,255))*256+Math.round(Ie(ke.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,r=ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Be){ie.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(vr);const n=Fs(Jn.h,vr.h,e),i=Fs(Jn.s,vr.s,e),r=Fs(Jn.l,vr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new St;St.NAMES=ru;let If=0;class Pn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=rs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ni extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ge,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new E,_r=new et;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Tl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sl&&(t.usage=this.usage),t}}class bl extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class au extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Df=0;const hn=new Mt,Ka=new ue,Vi=new E,rn=new ai,Rs=new ai,Pe=new E;class ye extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nu(t)?au:bl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(rn.min,Rs.min),rn.expandByPoint(Pe),Pe.addVectors(rn.max,Rs.max),rn.expandByPoint(Pe)):(rn.expandByPoint(Rs.min),rn.expandByPoint(Rs.max))}rn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pe.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),Pe.add(Vi)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new E,l[I]=new E;const c=new E,u=new E,h=new E,d=new et,f=new et,g=new et,v=new E,m=new E;function p(I,w,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[I].add(v),o[w].add(v),o[M].add(v),l[I].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,w=y.length;I<w;++I){const M=y[I],P=M.start,O=M.count;for(let z=P,W=P+O;z<W;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const _=new E,x=new E,C=new E,b=new E;function A(I){C.fromBufferAttribute(i,I),b.copy(C);const w=o[I];_.copy(w),_.sub(C.multiplyScalar(C.dot(w))).normalize(),x.crossVectors(b,w);const P=x.dot(l[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,P)}for(let I=0,w=y.length;I<w;++I){const M=y[I],P=M.start,O=M.count;for(let z=P,W=P+O;z<W;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,a=new E,o=new E,l=new E,c=new E,u=new E,h=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new Mt,di=new tr,xr=new Ri,Sc=new E,Hi=new E,Gi=new E,Wi=new E,ja=new E,yr=new E,Mr=new et,Sr=new et,wr=new et,wc=new E,Tc=new E,Ec=new E,Tr=new E,Er=new E;class ut extends ue{constructor(t=new ye,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ja.fromBufferAttribute(h,t),a?yr.addScaledVector(ja,u):yr.addScaledVector(ja.sub(e),u))}e.add(yr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(xr.containsPoint(di.origin)===!1&&(di.intersectSphere(xr,Sc)===null||di.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(Mc.copy(r).invert(),di.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=_;x<C;x+=3){const b=o.getX(x),A=o.getX(x+1),I=o.getX(x+2);i=br(this,p,t,n,c,u,h,b,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);i=br(this,a,t,n,c,u,h,y,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=_;x<C;x+=3){const b=x,A=x+1,I=x+2;i=br(this,p,t,n,c,u,h,b,A,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,_=m+1,x=m+2;i=br(this,a,t,n,c,u,h,y,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Uf(s,t,e,n,i,r,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ri,o),l===null)return null;Er.copy(o),Er.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:s}}function br(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Hi),s.getVertexPosition(l,Gi),s.getVertexPosition(c,Wi);const u=Uf(s,t,e,n,Hi,Gi,Wi,Tr);if(u){i&&(Mr.fromBufferAttribute(i,o),Sr.fromBufferAttribute(i,l),wr.fromBufferAttribute(i,c),u.uv=Mn.getInterpolation(Tr,Hi,Gi,Wi,Mr,Sr,wr,new et)),r&&(Mr.fromBufferAttribute(r,o),Sr.fromBufferAttribute(r,l),wr.fromBufferAttribute(r,c),u.uv1=Mn.getInterpolation(Tr,Hi,Gi,Wi,Mr,Sr,wr,new et)),a&&(wc.fromBufferAttribute(a,o),Tc.fromBufferAttribute(a,l),Ec.fromBufferAttribute(a,c),u.normal=Mn.getInterpolation(Tr,Hi,Gi,Wi,wc,Tc,Ec,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new E,materialIndex:0};Mn.getNormal(Hi,Gi,Wi,h.normal),u.face=h}return u}class oe extends ye{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function g(v,m,p,y,_,x,C,b,A,I,w){const M=x/A,P=C/I,O=x/2,z=C/2,W=b/2,X=A+1,H=I+1;let Y=0,G=0;const ht=new E;for(let vt=0;vt<H;vt++){const j=vt*P-z;for(let rt=0;rt<X;rt++){const lt=rt*M-O;ht[v]=lt*y,ht[m]=j*_,ht[p]=W,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[p]=b>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(rt/A),h.push(1-vt/I),Y+=1}}for(let vt=0;vt<I;vt++)for(let j=0;j<A;j++){const rt=d+j+X*vt,lt=d+j+X*(vt+1),F=d+(j+1)+X*(vt+1),K=d+(j+1)+X*vt;l.push(rt,lt,K),l.push(lt,F,K),G+=6}o.addGroup(f,G,w),f+=G,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){const t={};for(let e=0;e<s.length;e++){const n=ps(s[e]);for(const i in n)t[i]=n[i]}return t}function Nf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ou(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Ys={clone:ps,merge:Ye};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lu extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new E,bc=new et,Ac=new et;class Ze extends lu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,bc,Ac),e.subVectors(Ac,bc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class Bf extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ze(Xi,qi,t,e);i.layers=this.layers,this.add(i);const r=new Ze(Xi,qi,t,e);r.layers=this.layers,this.add(r);const a=new Ze(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new Ze(Xi,qi,t,e);o.layers=this.layers,this.add(o);const l=new Ze(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cu extends Ue{constructor(t,e,n,i,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zf extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oe(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Gn});r.uniforms.tEquirect.value=e;const a=new ut(i,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=xn),new Bf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Za=new E,kf=new E,Vf=new Vt;class gi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Za.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vf.getNormalMatrix(t),i=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ri,Ar=new E;class Al{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+u,m+g,x+y).normalize(),n[3].setComponents(l-a,d-u,m-g,x-y).normalize(),n[4].setComponents(l-o,d-h,m-v,x-_).normalize(),e===Hn)n[5].setComponents(l+o,d+h,m+v,x+_).normalize();else if(e===la)n[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ar.x=i.normal.x>0?t.max.x:t.min.x,Ar.y=i.normal.y>0?t.max.y:t.min.y,Ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hf(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),h.count===-1&&d.length===0&&s.bufferSubData(c,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class xs extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let _=0;_<c;_++){const x=_*h-r;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const _=y+c*p,x=y+c*(p+1),C=y+1+c*(p+1),b=y+1+c*p;f.push(_,x,b),f.push(x,C,b)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Kf,aomap_fragment:jf,aomap_pars_fragment:Zf,batching_pars_vertex:$f,batching_vertex:Jf,begin_vertex:Qf,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:ap,clipping_planes_vertex:op,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:vp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:Mp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:wp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Np,envmap_vertex:Ep,fog_vertex:bp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Dp,lights_pars_begin:Up,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:kp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Hp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Kp,map_fragment:jp,map_pars_fragment:Zp,map_particle_fragment:$p,map_particle_pars_fragment:Jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:am,normal_fragment_maps:om,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:vm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Em,shadowmap_vertex:bm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Im,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:zm,uv_vertex:km,worldpos_vertex:Vm,background_vert:Hm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Km,depth_frag:jm,distanceRGBA_vert:Zm,distanceRGBA_frag:$m,equirect_vert:Jm,equirect_frag:Qm,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:a0,meshmatcap_frag:o0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:h0,meshphong_frag:u0,meshphysical_vert:d0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:v0,shadow_vert:_0,shadow_frag:x0,sprite_vert:y0,sprite_frag:M0},ct={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},bn={basic:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new St(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ye([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ye([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new St(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ye([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ye([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ye([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ye([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ye([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ye([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ye([ct.common,ct.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ye([ct.lights,ct.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};bn.physical={uniforms:Ye([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Rr={r:0,b:0,g:0},pi=new ge,S0=new Mt;function w0(s,t,e,n,i,r,a){const o=new St(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const x=g(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),_=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===ma)?(u===void 0&&(u=new ut(new oe(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:ps(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pi.copy(_.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(pi)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==he,(h!==x||d!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ut(new xs(2,2),new We({name:"BackgroundMaterial",uniforms:ps(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Rr,ou(s)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:m}}function T0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,P,O,z,W){let X=!1;const H=h(z,O,P);r!==H&&(r=H,c(r.object)),X=f(M,z,O,W),X&&g(M,z,O,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(M,P,O,z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,P,O){const z=O.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let H=X[z];return H===void 0&&(H=d(l()),X[z]=H),H}function d(M){const P=[],O=[],z=[];for(let W=0;W<e;W++)P[W]=0,O[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,P,O,z){const W=r.attributes,X=P.attributes;let H=0;const Y=O.getAttributes();for(const G in Y)if(Y[G].location>=0){const vt=W[G];let j=X[G];if(j===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),vt===void 0||vt.attribute!==j||j&&vt.data!==j.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function g(M,P,O,z){const W={},X=P.attributes;let H=0;const Y=O.getAttributes();for(const G in Y)if(Y[G].location>=0){let vt=X[G];vt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));const j={};j.attribute=vt,vt&&vt.data&&(j.data=vt.data),W[G]=j,H++}r.attributes=W,r.attributesNum=H,r.index=z}function v(){const M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const O=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;O[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),W[M]!==P&&(s.vertexAttribDivisor(M,P),W[M]=P)}function y(){const M=r.newAttributes,P=r.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==M[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function _(M,P,O,z,W,X,H){H===!0?s.vertexAttribIPointer(M,P,O,W,X):s.vertexAttribPointer(M,P,O,z,W,X)}function x(M,P,O,z){v();const W=z.attributes,X=O.getAttributes(),H=P.defaultAttributeValues;for(const Y in X){const G=X[Y];if(G.location>=0){let ht=W[Y];if(ht===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){const vt=ht.normalized,j=ht.itemSize,rt=t.get(ht);if(rt===void 0)continue;const lt=rt.buffer,F=rt.type,K=rt.bytesPerElement,at=F===s.INT||F===s.UNSIGNED_INT||ht.gpuType===gl;if(ht.isInterleavedBufferAttribute){const Q=ht.data,Rt=Q.stride,It=ht.offset;if(Q.isInstancedInterleavedBuffer){for(let Ct=0;Ct<G.locationSize;Ct++)p(G.location+Ct,Q.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ct=0;Ct<G.locationSize;Ct++)m(G.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let Ct=0;Ct<G.locationSize;Ct++)_(G.location+Ct,j/G.locationSize,F,vt,Rt*K,(It+j/G.locationSize*Ct)*K,at)}else{if(ht.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)p(G.location+Q,ht.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let Q=0;Q<G.locationSize;Q++)_(G.location+Q,j/G.locationSize,F,vt,j*K,j/G.locationSize*Q*K,at)}}else if(H!==void 0){const vt=H[Y];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(G.location,vt);break;case 3:s.vertexAttrib3fv(G.location,vt);break;case 4:s.vertexAttrib4fv(G.location,vt);break;default:s.vertexAttrib1fv(G.location,vt)}}}}y()}function C(){I();for(const M in n){const P=n[M];for(const O in P){const z=P[O];for(const W in z)u(z[W].object),delete z[W];delete P[O]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const z=P[O];for(const W in z)u(z[W].object),delete z[W];delete P[O]}delete n[M.id]}function A(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const z=O[M.id];for(const W in z)u(z[W].object),delete z[W];delete O[M.id]}}function I(){w(),a=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function E0(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function b0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==dn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const A=b===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Xn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!A)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:x,maxSamples:C}}function A0(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new gi,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,_=y*4;let x=p.clippingState||null;l.value=x,x=u(g,d,_,f);for(let C=0;C!==_;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function R0(s){let t=new WeakMap;function e(a,o){return o===ia?a.mapping=cs:o===Co&&(a.mapping=hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ia||o===Co)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zf(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class _a extends lu{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,Rc=[.125,.215,.35,.446,.526,.582],xi=20,$a=new _a,Cc=new St;let Ja=null,Qa=0,to=0,eo=!1;const vi=(1+Math.sqrt(5))/2,Yi=1/vi,Pc=[new E(-vi,Yi,0),new E(vi,Yi,0),new E(-Yi,0,vi),new E(Yi,0,vi),new E(0,vi,-Yi),new E(0,vi,Yi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,Qa,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Wn,format:dn,colorSpace:oi,depthBuffer:!1},i=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(r)),this._blurMaterial=P0(r,t,e)}return i}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,i){const o=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Cc),u.toneMapping=si,u.autoClear=!1;const f=new ni({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new ut(new oe,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Cc),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;Cr(i,y*_,p>2?_:0,_,_),u.setRenderTarget(i),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===cs||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pc[(i-r-1)%Pc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let y=0;for(let A=0;A<xi;++A){const I=A/v,w=Math.exp(-I*I/2);p.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],C=3*x*(i>_-ns?i-_+ns:0),b=4*(this._cubeSize-x);Cr(e,C,b,3*x,2*x),l.setRenderTarget(e),l.render(h,$a)}}function C0(s){const t=[],e=[],n=[];let i=s;const r=s-ns+1+Rc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ns?l=Rc[a-s+ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,I=b>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(w,v*g*b),_.set(d,m*g*b);const M=[b,b,b,b,b,b];x.set(M,p*g*b)}const C=new ye;C.setAttribute("position",new on(y,v)),C.setAttribute("uv",new on(_,m)),C.setAttribute("faceIndex",new on(x,p)),t.push(C),i>ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(s,t,e){const n=new wn(s,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function P0(s,t,e){const n=new Float32Array(xi),i=new E(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Dc(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Uc(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ia||l===Co,u=l===cs||l===hs;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Lc(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Lc(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function I0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Tl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function D0(s,t,e,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const C=y[_+0],b=y[_+1],A=y[_+2];d.push(C,b,b,A,A,C)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const C=_+0,b=_+1,A=_+2;d.push(C,b,b,A,A,C)}}else return;const m=new(nu(d)?au:bl)(d,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function U0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y];for(let y=0;y<v.length;y++)e.update(p,n,v[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function N0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function F0(s,t,e){const n=new WeakMap,i=new Jt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const A=new Float32Array(C*b*4*h),I=new su(A,C,b,h);I.type=Rn,I.needsUpdate=!0;const w=x*4;for(let P=0;P<h;P++){const O=p[P],z=y[P],W=_[P],X=C*b*4*P;for(let H=0;H<O.count;H++){const Y=H*w;g===!0&&(i.fromBufferAttribute(O,H),A[X+Y+0]=i.x,A[X+Y+1]=i.y,A[X+Y+2]=i.z,A[X+Y+3]=0),v===!0&&(i.fromBufferAttribute(z,H),A[X+Y+4]=i.x,A[X+Y+5]=i.y,A[X+Y+6]=i.z,A[X+Y+7]=0),m===!0&&(i.fromBufferAttribute(W,H),A[X+Y+8]=i.x,A[X+Y+9]=i.y,A[X+Y+10]=i.z,A[X+Y+11]=W.itemSize===4?i.w:1)}}d={count:h,texture:I,size:new et(C,b)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function O0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class uu extends Ue{constructor(t,e,n,i,r,a,o,l,c,u=as){if(u!==as&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===as&&(n=Ti),n===void 0&&u===ds&&(n=us),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const du=new Ue,Nc=new uu(1,1),fu=new su,pu=new Tf,mu=new cu,Fc=[],Oc=[],Bc=new Float32Array(16),zc=new Float32Array(9),kc=new Float32Array(4);function ys(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fc[i];if(r===void 0&&(r=new Float32Array(i),Fc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xa(s,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function B0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function k0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function V0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function H0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),Ce(e,n)}}function G0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;zc.set(n),s.uniformMatrix3fv(this.addr,!1,zc),Ce(e,n)}}function W0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Bc.set(n),s.uniformMatrix4fv(this.addr,!1,Bc),Ce(e,n)}}function X0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function Y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function K0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function j0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function $0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function J0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function Q0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Nc.compareFunction=eu,r=Nc):r=du,e.setTexture2D(t||r,i)}function tg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pu,i)}function eg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mu,i)}function ng(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fu,i)}function ig(s){switch(s){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return V0;case 35674:return H0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return K0;case 5125:return j0;case 36294:return Z0;case 36295:return $0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(s,t){s.uniform1fv(this.addr,t)}function rg(s,t){const e=ys(t,this.size,2);s.uniform2fv(this.addr,e)}function ag(s,t){const e=ys(t,this.size,3);s.uniform3fv(this.addr,e)}function og(s,t){const e=ys(t,this.size,4);s.uniform4fv(this.addr,e)}function lg(s,t){const e=ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function cg(s,t){const e=ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hg(s,t){const e=ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ug(s,t){s.uniform1iv(this.addr,t)}function dg(s,t){s.uniform2iv(this.addr,t)}function fg(s,t){s.uniform3iv(this.addr,t)}function pg(s,t){s.uniform4iv(this.addr,t)}function mg(s,t){s.uniform1uiv(this.addr,t)}function gg(s,t){s.uniform2uiv(this.addr,t)}function vg(s,t){s.uniform3uiv(this.addr,t)}function _g(s,t){s.uniform4uiv(this.addr,t)}function xg(s,t,e){const n=this.cache,i=t.length,r=xa(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||du,r[a])}function yg(s,t,e){const n=this.cache,i=t.length,r=xa(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||pu,r[a])}function Mg(s,t,e){const n=this.cache,i=t.length,r=xa(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||mu,r[a])}function Sg(s,t,e){const n=this.cache,i=t.length,r=xa(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||fu,r[a])}function wg(s){switch(s){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}class Tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ig(e.type)}}class Eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wg(e.type)}}class bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Vc(s,t){s.seq.push(t),s.map[t.id]=t}function Ag(s,t,e){const n=s.name,i=n.length;for(no.lastIndex=0;;){const r=no.exec(n),a=no.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vc(e,c===void 0?new Tg(o,s,t):new Eg(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new bg(o),Vc(e,h)),e=h}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Ag(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Hc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Rg=37297;let Cg=0;function Pg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Lg(s){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(s);let n;switch(t===e?n="":t===oa&&e===aa?n="LinearDisplayP3ToLinearSRGB":t===aa&&e===oa&&(n="LinearSRGBToLinearDisplayP3"),s){case oi:case va:return[n,"LinearTransferOETF"];case Be:case Sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Gc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Pg(s.getShaderSource(t),a)}else return i}function Ig(s,t){const e=Lg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dg(s,t){let e;switch(t){case zh:e="Linear";break;case kh:e="Reinhard";break;case Vh:e="OptimizedCineon";break;case ml:e="ACESFilmic";break;case Hh:e="AgX";break;case Gh:e="Neutral";break;case kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ug(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Ng(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Us(s){return s!==""}function Wc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(s){return s.replace(Og,zg)}const Bg=new Map;function zg(s,t){let e=Gt[t];if(e===void 0){const n=Bg.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(s){return s.replace(kg,Vg)}function Vg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Xg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pa:t="ENVMAP_BLENDING_MULTIPLY";break;case Bd:t="ENVMAP_BLENDING_MIX";break;case zd:t="ENVMAP_BLENDING_ADD";break}return t}function qg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Yg(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Hg(e),c=Gg(e),u=Wg(e),h=Xg(e),d=qg(e),f=Ug(e),g=Ng(r),v=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Gt.tonemapping_pars_fragment:"",e.toneMapping!==si?Dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Ig("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),a=rl(a),a=Wc(a,e),a=Xc(a,e),o=rl(o),o=Wc(o,e),o=Xc(o,e),a=qc(a),o=qc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+a,x=y+p+o,C=Hc(i,i.VERTEX_SHADER,_),b=Hc(i,i.FRAGMENT_SHADER,x);i.attachShader(v,C),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(C).trim(),W=i.getShaderInfoLog(b).trim();let X=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,b);else{const Y=Gc(i,C,"vertex"),G=Gc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Y+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||W==="")&&(H=!1);H&&(P.diagnostics={runnable:X,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(C),i.deleteShader(b),I=new ta(i,v),w=Fg(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,Rg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=b,this}let Kg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zg(t),e.set(t,n)),n}}class Zg{constructor(t){this.id=Kg++,this.code=t,this.usedTimes=0}}function $g(s,t,e,n,i,r,a){const o=new El,l=new jg,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,O,z){const W=O.fog,X=z.geometry,H=w.isMeshStandardMaterial?O.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),G=Y&&Y.mapping===ma?Y.image.height:null,ht=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const vt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,j=vt!==void 0?vt.length:0;let rt=0;X.morphAttributes.position!==void 0&&(rt=1),X.morphAttributes.normal!==void 0&&(rt=2),X.morphAttributes.color!==void 0&&(rt=3);let lt,F,K,at;if(ht){const Qt=bn[ht];lt=Qt.vertexShader,F=Qt.fragmentShader}else lt=w.vertexShader,F=w.fragmentShader,l.update(w),K=l.getVertexShaderID(w),at=l.getFragmentShaderID(w);const Q=s.getRenderTarget(),Rt=z.isInstancedMesh===!0,It=z.isBatchedMesh===!0,Ct=!!w.map,se=!!w.matcap,L=!!Y,fe=!!w.aoMap,re=!!w.lightMap,le=!!w.bumpMap,At=!!w.normalMap,we=!!w.displacementMap,Ot=!!w.emissiveMap,kt=!!w.metalnessMap,R=!!w.roughnessMap,S=w.anisotropy>0,V=w.clearcoat>0,J=w.dispersion>0,tt=w.iridescence>0,$=w.sheen>0,Pt=w.transmission>0,dt=S&&!!w.anisotropyMap,gt=V&&!!w.clearcoatMap,Ht=V&&!!w.clearcoatNormalMap,nt=V&&!!w.clearcoatRoughnessMap,mt=tt&&!!w.iridescenceMap,Kt=tt&&!!w.iridescenceThicknessMap,Ft=$&&!!w.sheenColorMap,_t=$&&!!w.sheenRoughnessMap,Bt=!!w.specularMap,Xt=!!w.specularColorMap,pe=!!w.specularIntensityMap,D=Pt&&!!w.transmissionMap,it=Pt&&!!w.thicknessMap,q=!!w.gradientMap,Z=!!w.alphaMap,ot=w.alphaTest>0,Dt=!!w.alphaHash,Zt=!!w.extensions;let Te=si;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Te=s.toneMapping);const Fe={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:lt,fragmentShader:F,defines:w.defines,customVertexShaderID:K,customFragmentShaderID:at,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:It,batchingColor:It&&z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&z.instanceColor!==null,instancingMorph:Rt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:oi,alphaToCoverage:!!w.alphaToCoverage,map:Ct,matcap:se,envMap:L,envMapMode:L&&Y.mapping,envMapCubeUVHeight:G,aoMap:fe,lightMap:re,bumpMap:le,normalMap:At,displacementMap:d&&we,emissiveMap:Ot,normalMapObjectSpace:At&&w.normalMapType===qd,normalMapTangentSpace:At&&w.normalMapType===ga,metalnessMap:kt,roughnessMap:R,anisotropy:S,anisotropyMap:dt,clearcoat:V,clearcoatMap:gt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:nt,dispersion:J,iridescence:tt,iridescenceMap:mt,iridescenceThicknessMap:Kt,sheen:$,sheenColorMap:Ft,sheenRoughnessMap:_t,specularMap:Bt,specularColorMap:Xt,specularIntensityMap:pe,transmission:Pt,transmissionMap:D,thicknessMap:it,gradientMap:q,opaque:w.transparent===!1&&w.blending===rs&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ot,alphaHash:Dt,combine:w.combine,mapUv:Ct&&v(w.map.channel),aoMapUv:fe&&v(w.aoMap.channel),lightMapUv:re&&v(w.lightMap.channel),bumpMapUv:le&&v(w.bumpMap.channel),normalMapUv:At&&v(w.normalMap.channel),displacementMapUv:we&&v(w.displacementMap.channel),emissiveMapUv:Ot&&v(w.emissiveMap.channel),metalnessMapUv:kt&&v(w.metalnessMap.channel),roughnessMapUv:R&&v(w.roughnessMap.channel),anisotropyMapUv:dt&&v(w.anisotropyMap.channel),clearcoatMapUv:gt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:_t&&v(w.sheenRoughnessMap.channel),specularMapUv:Bt&&v(w.specularMap.channel),specularColorMapUv:Xt&&v(w.specularColorMap.channel),specularIntensityMapUv:pe&&v(w.specularIntensityMap.channel),transmissionMapUv:D&&v(w.transmissionMap.channel),thicknessMapUv:it&&v(w.thicknessMap.channel),alphaMapUv:Z&&v(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(At||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Ct||Z),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ct&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===he,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===An,flipSided:w.side===Je,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(M,w),_(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function x(w){const M=g[w.type];let P;if(M){const O=bn[M];P=Ys.clone(O.uniforms)}else P=w.uniforms;return P}function C(w,M){let P;for(let O=0,z=u.length;O<z;O++){const W=u[O];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Yg(s,M,w,r),u.push(P)),P}function b(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:I}}function Jg(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Qg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Kc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function jc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,g,v,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function o(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Qg),n.length>1&&n.sort(d||Kc),i.length>1&&i.sort(d||Kc)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function tv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new jc,s.set(n,[a])):i>=r.length?(a=new jc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ev(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new St};break;case"SpotLight":e={position:new E,direction:new E,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function nv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let iv=0;function sv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function rv(s){const t=new ev,e=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new Mt,a=new Mt;function o(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,_=0,x=0,C=0,b=0,A=0;c.sort(sv);for(let w=0,M=c.length;w<M;w++){const P=c[w],O=P.color,z=P.intensity,W=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*z,h+=O.g*z,d+=O.b*z;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],z);A++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;const Y=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Y.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=Y.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,x++}v++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(O).multiplyScalar(z),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Y=P.shadow,G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(z),H.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==_||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=_,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=A,n.version=iv++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Zc(s){const t=new rv(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function av(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Zc(s),t.set(i,[o])):r>=a.length?(o=new Zc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class ov extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lv extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uv(s,t,e){let n=new Al;const i=new et,r=new et,a=new Jt,o=new ov({depthPacking:Xd}),l=new lv,c={},u=e.maxTextureSize,h={[ri]:Je,[Je]:ri,[An]:An},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let p=this.type;this.render=function(b,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Gn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=p!==kn&&this.type===kn,W=p===kn&&this.type!==kn;for(let X=0,H=b.length;X<H;X++){const Y=b[X],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ht=G.getFrameExtents();if(i.multiply(ht),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ht.x),i.x=r.x*ht.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ht.y),i.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||z===!0||W===!0){const j=this.type!==kn?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new wn(i.x,i.y,j),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const vt=G.getViewportCount();for(let j=0;j<vt;j++){const rt=G.getViewport(j);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),O.viewport(a),G.updateMatrices(Y,j),n=G.getFrustum(),x(A,I,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&y(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,P)};function y(b,A){const I=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,I,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,I,f,v,null)}function _(b,A,I,w){let M=null;const P=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=M.uuid,z=A.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let X=W[z];X===void 0&&(X=M.clone(),W[z]=X,A.addEventListener("dispose",C)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,w===kn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=I}return M}function x(b,A,I,w,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===kn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const z=t.update(b),W=b.material;if(Array.isArray(W)){const X=z.groups;for(let H=0,Y=X.length;H<Y;H++){const G=X[H],ht=W[G.materialIndex];if(ht&&ht.visible){const vt=_(b,ht,w,M);b.onBeforeShadow(s,b,A,I,z,vt,G),s.renderBufferDirect(I,null,z,vt,b,G),b.onAfterShadow(s,b,A,I,z,vt,G)}}}else if(W.visible){const X=_(b,W,w,M);b.onBeforeShadow(s,b,A,I,z,X,null),s.renderBufferDirect(I,null,z,X,b,null),b.onAfterShadow(s,b,A,I,z,X,null)}}const O=b.children;for(let z=0,W=O.length;z<W;z++)x(O[z],A,I,w,M)}function C(b){b.target.removeEventListener("dispose",C);for(const I in c){const w=c[I],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function dv(s){function t(){let D=!1;const it=new Jt;let q=null;const Z=new Jt(0,0,0,0);return{setMask:function(ot){q!==ot&&!D&&(s.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){D=ot},setClear:function(ot,Dt,Zt,Te,Fe){Fe===!0&&(ot*=Te,Dt*=Te,Zt*=Te),it.set(ot,Dt,Zt,Te),Z.equals(it)===!1&&(s.clearColor(ot,Dt,Zt,Te),Z.copy(it))},reset:function(){D=!1,q=null,Z.set(-1,0,0,0)}}}function e(){let D=!1,it=null,q=null,Z=null;return{setTest:function(ot){ot?at(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(ot){it!==ot&&!D&&(s.depthMask(ot),it=ot)},setFunc:function(ot){if(q!==ot){switch(ot){case Ld:s.depthFunc(s.NEVER);break;case Id:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case na:s.depthFunc(s.LEQUAL);break;case Ud:s.depthFunc(s.EQUAL);break;case Nd:s.depthFunc(s.GEQUAL);break;case Fd:s.depthFunc(s.GREATER);break;case Od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=ot}},setLocked:function(ot){D=ot},setClear:function(ot){Z!==ot&&(s.clearDepth(ot),Z=ot)},reset:function(){D=!1,it=null,q=null,Z=null}}}function n(){let D=!1,it=null,q=null,Z=null,ot=null,Dt=null,Zt=null,Te=null,Fe=null;return{setTest:function(Qt){D||(Qt?at(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!D&&(s.stencilMask(Qt),it=Qt)},setFunc:function(Qt,In,En){(q!==Qt||Z!==In||ot!==En)&&(s.stencilFunc(Qt,In,En),q=Qt,Z=In,ot=En)},setOp:function(Qt,In,En){(Dt!==Qt||Zt!==In||Te!==En)&&(s.stencilOp(Qt,In,En),Dt=Qt,Zt=In,Te=En)},setLocked:function(Qt){D=Qt},setClear:function(Qt){Fe!==Qt&&(s.clearStencil(Qt),Fe=Qt)},reset:function(){D=!1,it=null,q=null,Z=null,ot=null,Dt=null,Zt=null,Te=null,Fe=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,y=null,_=null,x=null,C=null,b=new St(0,0,0),A=0,I=!1,w=null,M=null,P=null,O=null,z=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=H>=2);let G=null,ht={};const vt=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),rt=new Jt().fromArray(vt),lt=new Jt().fromArray(j);function F(D,it,q,Z){const ot=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(D,Dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<q;Zt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(it+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return Dt}const K={};K[s.TEXTURE_2D]=F(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=F(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=F(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=F(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),at(s.DEPTH_TEST),r.setFunc(na),le(!1),At(Ql),at(s.CULL_FACE),fe(Gn);function at(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function Q(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Rt(D,it){return u[D]!==it?(s.bindFramebuffer(D,it),u[D]=it,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function It(D,it){let q=d,Z=!1;if(D){q=h.get(it),q===void 0&&(q=[],h.set(it,q));const ot=D.textures;if(q.length!==ot.length||q[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,Zt=ot.length;Dt<Zt;Dt++)q[Dt]=s.COLOR_ATTACHMENT0+Dt;q.length=ot.length,Z=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Z=!0);Z&&s.drawBuffers(q)}function Ct(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const se={[_i]:s.FUNC_ADD,[pd]:s.FUNC_SUBTRACT,[md]:s.FUNC_REVERSE_SUBTRACT};se[gd]=s.MIN,se[vd]=s.MAX;const L={[_d]:s.ZERO,[xd]:s.ONE,[yd]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[bd]:s.SRC_ALPHA_SATURATE,[Td]:s.DST_COLOR,[Sd]:s.DST_ALPHA,[Md]:s.ONE_MINUS_SRC_COLOR,[Ro]:s.ONE_MINUS_SRC_ALPHA,[Ed]:s.ONE_MINUS_DST_COLOR,[wd]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[Rd]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[Pd]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(D,it,q,Z,ot,Dt,Zt,Te,Fe,Qt){if(D===Gn){g===!0&&(Q(s.BLEND),g=!1);return}if(g===!1&&(at(s.BLEND),g=!0),D!==fd){if(D!==v||Qt!==I){if((m!==_i||_!==_i)&&(s.blendEquation(s.FUNC_ADD),m=_i,_=_i),Qt)switch(D){case rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mi:s.blendFunc(s.ONE,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ec:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,y=null,x=null,C=null,b.set(0,0,0),A=0,v=D,I=Qt}return}ot=ot||it,Dt=Dt||q,Zt=Zt||Z,(it!==m||ot!==_)&&(s.blendEquationSeparate(se[it],se[ot]),m=it,_=ot),(q!==p||Z!==y||Dt!==x||Zt!==C)&&(s.blendFuncSeparate(L[q],L[Z],L[Dt],L[Zt]),p=q,y=Z,x=Dt,C=Zt),(Te.equals(b)===!1||Fe!==A)&&(s.blendColor(Te.r,Te.g,Te.b,Fe),b.copy(Te),A=Fe),v=D,I=!1}function re(D,it){D.side===An?Q(s.CULL_FACE):at(s.CULL_FACE);let q=D.side===Je;it&&(q=!q),le(q),D.blending===rs&&D.transparent===!1?fe(Gn):fe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),i.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(D){w!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),w=D)}function At(D){D!==ud?(at(s.CULL_FACE),D!==M&&(D===Ql?s.cullFace(s.BACK):D===dd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),M=D}function we(D){D!==P&&(X&&s.lineWidth(D),P=D)}function Ot(D,it,q){D?(at(s.POLYGON_OFFSET_FILL),(O!==it||z!==q)&&(s.polygonOffset(it,q),O=it,z=q)):Q(s.POLYGON_OFFSET_FILL)}function kt(D){D?at(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+W-1),G!==D&&(s.activeTexture(D),G=D)}function S(D,it,q){q===void 0&&(G===null?q=s.TEXTURE0+W-1:q=G);let Z=ht[q];Z===void 0&&(Z={type:void 0,texture:void 0},ht[q]=Z),(Z.type!==D||Z.texture!==it)&&(G!==q&&(s.activeTexture(q),G=q),s.bindTexture(D,it||K[D]),Z.type=D,Z.texture=it)}function V(){const D=ht[G];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(D){rt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),rt.copy(D))}function _t(D){lt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),lt.copy(D))}function Bt(D,it){let q=l.get(it);q===void 0&&(q=new WeakMap,l.set(it,q));let Z=q.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(it,D.name),q.set(D,Z))}function Xt(D,it){const Z=l.get(it).get(D);o.get(it)!==Z&&(s.uniformBlockBinding(it,Z,D.__bindingPointIndex),o.set(it,Z))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,ht={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,y=null,_=null,x=null,C=null,b=new St(0,0,0),A=0,I=!1,w=null,M=null,P=null,O=null,z=null,rt.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:at,disable:Q,bindFramebuffer:Rt,drawBuffers:It,useProgram:Ct,setBlending:fe,setMaterial:re,setFlipSided:le,setCullFace:At,setLineWidth:we,setPolygonOffset:Ot,setScissorTest:kt,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:mt,texImage3D:Kt,updateUBOMapping:Bt,uniformBlockBinding:Xt,texStorage2D:Ht,texStorage3D:nt,texSubImage2D:$,texSubImage3D:Pt,compressedTexSubImage2D:dt,compressedTexSubImage3D:gt,scissor:Ft,viewport:_t,reset:pe}}function $c(s,t,e,n){const i=fv(n);switch(e){case Kh:return s*t;case Zh:return s*t;case $h:return s*t*2;case Jh:return s*t/i.components*i.byteLength;case xl:return s*t/i.components*i.byteLength;case Qh:return s*t*2/i.components*i.byteLength;case yl:return s*t*2/i.components*i.byteLength;case jh:return s*t*3/i.components*i.byteLength;case dn:return s*t*4/i.components*i.byteLength;case Ml:return s*t*4/i.components*i.byteLength;case jr:case Zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $r:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Io:case Uo:return Math.max(s,16)*Math.max(t,8)/4;case Lo:case Do:return Math.max(s,8)*Math.max(t,8)/2;case No:case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qr:case Jo:case Qo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case tu:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case el:case nl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fv(s){switch(s){case Xn:case Xh:return{byteLength:1,components:1};case Xs:case qh:case Wn:return{byteLength:2,components:1};case vl:case _l:return{byteLength:2,components:4};case Ti:case gl:case Rn:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function pv(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):qs("canvas")}function v(R,S,V){let J=1;const tt=kt(R);if((tt.width>V||tt.height>V)&&(J=V/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(J*tt.width),Pt=Math.floor(J*tt.height);h===void 0&&(h=g($,Pt));const dt=S?g($,Pt):h;return dt.width=$,dt.height=Pt,dt.getContext("2d").drawImage(R,0,0,$,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+Pt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==tn&&R.minFilter!==xn}function p(R){s.generateMipmap(R)}function y(R,S,V,J,tt=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=S;if(S===s.RED&&(V===s.FLOAT&&($=s.R32F),V===s.HALF_FLOAT&&($=s.R16F),V===s.UNSIGNED_BYTE&&($=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.R8UI),V===s.UNSIGNED_SHORT&&($=s.R16UI),V===s.UNSIGNED_INT&&($=s.R32UI),V===s.BYTE&&($=s.R8I),V===s.SHORT&&($=s.R16I),V===s.INT&&($=s.R32I)),S===s.RG&&(V===s.FLOAT&&($=s.RG32F),V===s.HALF_FLOAT&&($=s.RG16F),V===s.UNSIGNED_BYTE&&($=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RG8UI),V===s.UNSIGNED_SHORT&&($=s.RG16UI),V===s.UNSIGNED_INT&&($=s.RG32UI),V===s.BYTE&&($=s.RG8I),V===s.SHORT&&($=s.RG16I),V===s.INT&&($=s.RG32I)),S===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),S===s.RGBA){const Pt=tt?ra:ie.getTransfer(J);V===s.FLOAT&&($=s.RGBA32F),V===s.HALF_FLOAT&&($=s.RGBA16F),V===s.UNSIGNED_BYTE&&($=Pt===he?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(R,S){let V;return R?S===null||S===Ti||S===us?V=s.DEPTH24_STENCIL8:S===Rn?V=s.DEPTH32F_STENCIL8:S===Xs&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===us?V=s.DEPTH_COMPONENT24:S===Rn?V=s.DEPTH_COMPONENT32F:S===Xs&&(V=s.DEPTH_COMPONENT16),V}function x(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==xn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),A(S),S.isVideoTexture&&u.delete(S)}function b(R){const S=R.target;S.removeEventListener("dispose",b),w(S)}function A(R){const S=n.get(R);if(S.__webglInit===void 0)return;const V=R.source,J=d.get(V);if(J){const tt=J[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(R),Object.keys(J).length===0&&d.delete(V)}n.remove(R)}function I(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const V=R.source,J=d.get(V);delete J[S.__cacheKey],a.memory.textures--}function w(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let tt=0;tt<S.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(S.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let J=0,tt=V.length;J<tt;J++){const $=n.get(V[J]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(R)}let M=0;function P(){M=0}function O(){const R=M;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),M+=1,R}function z(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function W(R,S){const V=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(V,R,S);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function X(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){lt(V,R,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function H(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){lt(V,R,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function Y(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){F(V,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const G={[wi]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Po]:s.MIRRORED_REPEAT},ht={[tn]:s.NEAREST,[Hd]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[La]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},vt={[Yd]:s.NEVER,[Qd]:s.ALWAYS,[Kd]:s.LESS,[eu]:s.LEQUAL,[jd]:s.EQUAL,[Jd]:s.GEQUAL,[Zd]:s.GREATER,[$d]:s.NOTEQUAL};function j(R,S){if(S.type===Rn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===xn||S.magFilter===La||S.magFilter===lr||S.magFilter===yi||S.minFilter===xn||S.minFilter===La||S.minFilter===lr||S.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,G[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,G[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,G[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ht[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==lr&&S.minFilter!==yi||S.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function rt(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const J=S.source;let tt=d.get(J);tt===void 0&&(tt={},d.set(J,tt));const $=z(S);if($!==R.__cacheKey){tt[$]===void 0&&(tt[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),tt[$].usedTimes++;const Pt=tt[R.__cacheKey];Pt!==void 0&&(tt[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&I(S)),R.__cacheKey=$,R.__webglTexture=tt[$].texture}return V}function lt(R,S,V){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);const tt=rt(R,S),$=S.source;e.bindTexture(J,R.__webglTexture,s.TEXTURE0+V);const Pt=n.get($);if($.version!==Pt.__version||tt===!0){e.activeTexture(s.TEXTURE0+V);const dt=ie.getPrimaries(ie.workingColorSpace),gt=S.colorSpace===ei?null:ie.getPrimaries(S.colorSpace),Ht=S.colorSpace===ei||dt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let nt=v(S.image,!1,i.maxTextureSize);nt=Ot(S,nt);const mt=r.convert(S.format,S.colorSpace),Kt=r.convert(S.type);let Ft=y(S.internalFormat,mt,Kt,S.colorSpace,S.isVideoTexture);j(J,S);let _t;const Bt=S.mipmaps,Xt=S.isVideoTexture!==!0,pe=Pt.__version===void 0||tt===!0,D=$.dataReady,it=x(S,nt);if(S.isDepthTexture)Ft=_(S.format===ds,S.type),pe&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ft,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Ft,nt.width,nt.height,0,mt,Kt,null));else if(S.isDataTexture)if(Bt.length>0){Xt&&pe&&e.texStorage2D(s.TEXTURE_2D,it,Ft,Bt[0].width,Bt[0].height);for(let q=0,Z=Bt.length;q<Z;q++)_t=Bt[q],Xt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,mt,Kt,_t.data):e.texImage2D(s.TEXTURE_2D,q,Ft,_t.width,_t.height,0,mt,Kt,_t.data);S.generateMipmaps=!1}else Xt?(pe&&e.texStorage2D(s.TEXTURE_2D,it,Ft,nt.width,nt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,Kt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,nt.width,nt.height,0,mt,Kt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,Ft,Bt[0].width,Bt[0].height,nt.depth);for(let q=0,Z=Bt.length;q<Z;q++)if(_t=Bt[q],S.format!==dn)if(mt!==null)if(Xt){if(D)if(S.layerUpdates.size>0){const ot=$c(_t.width,_t.height,S.format,S.type);for(const Dt of S.layerUpdates){const Zt=_t.data.subarray(Dt*ot/_t.data.BYTES_PER_ELEMENT,(Dt+1)*ot/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,Dt,_t.width,_t.height,1,mt,Zt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,nt.depth,mt,_t.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ft,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,nt.depth,mt,Kt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ft,_t.width,_t.height,nt.depth,0,mt,Kt,_t.data)}else{Xt&&pe&&e.texStorage2D(s.TEXTURE_2D,it,Ft,Bt[0].width,Bt[0].height);for(let q=0,Z=Bt.length;q<Z;q++)_t=Bt[q],S.format!==dn?mt!==null?Xt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,mt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ft,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,mt,Kt,_t.data):e.texImage2D(s.TEXTURE_2D,q,Ft,_t.width,_t.height,0,mt,Kt,_t.data)}else if(S.isDataArrayTexture)if(Xt){if(pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,Ft,nt.width,nt.height,nt.depth),D)if(S.layerUpdates.size>0){const q=$c(nt.width,nt.height,S.format,S.type);for(const Z of S.layerUpdates){const ot=nt.data.subarray(Z*q/nt.data.BYTES_PER_ELEMENT,(Z+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,mt,Kt,ot)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Kt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,nt.width,nt.height,nt.depth,0,mt,Kt,nt.data);else if(S.isData3DTexture)Xt?(pe&&e.texStorage3D(s.TEXTURE_3D,it,Ft,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Kt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,nt.width,nt.height,nt.depth,0,mt,Kt,nt.data);else if(S.isFramebufferTexture){if(pe)if(Xt)e.texStorage2D(s.TEXTURE_2D,it,Ft,nt.width,nt.height);else{let q=nt.width,Z=nt.height;for(let ot=0;ot<it;ot++)e.texImage2D(s.TEXTURE_2D,ot,Ft,q,Z,0,mt,Kt,null),q>>=1,Z>>=1}}else if(Bt.length>0){if(Xt&&pe){const q=kt(Bt[0]);e.texStorage2D(s.TEXTURE_2D,it,Ft,q.width,q.height)}for(let q=0,Z=Bt.length;q<Z;q++)_t=Bt[q],Xt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,mt,Kt,_t):e.texImage2D(s.TEXTURE_2D,q,Ft,mt,Kt,_t);S.generateMipmaps=!1}else if(Xt){if(pe){const q=kt(nt);e.texStorage2D(s.TEXTURE_2D,it,Ft,q.width,q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Kt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Ft,mt,Kt,nt);m(S)&&p(J),Pt.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function F(R,S,V){if(S.image.length!==6)return;const J=rt(R,S),tt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);const $=n.get(tt);if(tt.version!==$.__version||J===!0){e.activeTexture(s.TEXTURE0+V);const Pt=ie.getPrimaries(ie.workingColorSpace),dt=S.colorSpace===ei?null:ie.getPrimaries(S.colorSpace),gt=S.colorSpace===ei||Pt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,mt=[];for(let Z=0;Z<6;Z++)!Ht&&!nt?mt[Z]=v(S.image[Z],!0,i.maxCubemapSize):mt[Z]=nt?S.image[Z].image:S.image[Z],mt[Z]=Ot(S,mt[Z]);const Kt=mt[0],Ft=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Bt=y(S.internalFormat,Ft,_t,S.colorSpace),Xt=S.isVideoTexture!==!0,pe=$.__version===void 0||J===!0,D=tt.dataReady;let it=x(S,Kt);j(s.TEXTURE_CUBE_MAP,S);let q;if(Ht){Xt&&pe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Bt,Kt.width,Kt.height);for(let Z=0;Z<6;Z++){q=mt[Z].mipmaps;for(let ot=0;ot<q.length;ot++){const Dt=q[ot];S.format!==dn?Ft!==null?Xt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,Dt.width,Dt.height,Ft,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Bt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,Dt.width,Dt.height,Ft,_t,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Bt,Dt.width,Dt.height,0,Ft,_t,Dt.data)}}}else{if(q=S.mipmaps,Xt&&pe){q.length>0&&it++;const Z=kt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Bt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,mt[Z].width,mt[Z].height,Ft,_t,mt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Bt,mt[Z].width,mt[Z].height,0,Ft,_t,mt[Z].data);for(let ot=0;ot<q.length;ot++){const Zt=q[ot].image[Z].image;Xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,Zt.width,Zt.height,Ft,_t,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Bt,Zt.width,Zt.height,0,Ft,_t,Zt.data)}}else{Xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ft,_t,mt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Bt,Ft,_t,mt[Z]);for(let ot=0;ot<q.length;ot++){const Dt=q[ot];Xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,Ft,_t,Dt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Bt,Ft,_t,Dt.image[Z])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),$.__version=tt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function K(R,S,V,J,tt,$){const Pt=r.convert(V.format,V.colorSpace),dt=r.convert(V.type),gt=y(V.internalFormat,Pt,dt,V.colorSpace);if(!n.get(S).__hasExternalTextures){const nt=Math.max(1,S.width>>$),mt=Math.max(1,S.height>>$);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,gt,nt,mt,S.depth,0,Pt,dt,null):e.texImage2D(tt,$,gt,nt,mt,0,Pt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),At(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,tt,n.get(V).__webglTexture,0,le(S)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,tt,n.get(V).__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(R,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const J=S.depthTexture,tt=J&&J.isDepthTexture?J.type:null,$=_(S.stencilBuffer,tt),Pt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=le(S);At(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,$,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,$,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,$,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,R)}else{const J=S.textures;for(let tt=0;tt<J.length;tt++){const $=J[tt],Pt=r.convert($.format,$.colorSpace),dt=r.convert($.type),gt=y($.internalFormat,Pt,dt,$.colorSpace),Ht=le(S);V&&At(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,gt,S.width,S.height):At(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht,gt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,gt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Q(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,tt=le(S);if(S.depthTexture.format===as)At(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===ds)At(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Rt(R){const S=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Q(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=s.createRenderbuffer(),at(S.__webglDepthbuffer[J],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),at(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(R,S,V){const J=n.get(R);S!==void 0&&K(J.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Rt(R)}function Ct(R){const S=R.texture,V=n.get(R),J=n.get(S);R.addEventListener("dispose",b);const tt=R.textures,$=R.isWebGLCubeRenderTarget===!0,Pt=tt.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let gt=0;gt<S.mipmaps.length;gt++)V.__webglFramebuffer[dt][gt]=s.createFramebuffer()}else V.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)V.__webglFramebuffer[dt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let dt=0,gt=tt.length;dt<gt;dt++){const Ht=n.get(tt[dt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&At(R)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const gt=tt[dt];V.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);const Ht=r.convert(gt.format,gt.colorSpace),nt=r.convert(gt.type),mt=y(gt.internalFormat,Ht,nt,gt.colorSpace,R.isXRRenderTarget===!0),Kt=le(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,mt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),at(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),j(s.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)K(V.__webglFramebuffer[dt][gt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,gt);else K(V.__webglFramebuffer[dt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let dt=0,gt=tt.length;dt<gt;dt++){const Ht=tt[dt],nt=n.get(Ht);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),j(s.TEXTURE_2D,Ht),K(V.__webglFramebuffer,R,Ht,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(Ht)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,J.__webglTexture),j(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)K(V.__webglFramebuffer[gt],R,S,s.COLOR_ATTACHMENT0,dt,gt);else K(V.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,dt,0);m(S)&&p(dt),e.unbindTexture()}R.depthBuffer&&Rt(R)}function se(R){const S=R.textures;for(let V=0,J=S.length;V<J;V++){const tt=S[V];if(m(tt)){const $=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Pt=n.get(tt).__webglTexture;e.bindTexture($,Pt),p($),e.unbindTexture()}}}const L=[],fe=[];function re(R){if(R.samples>0){if(At(R)===!1){const S=R.textures,V=R.width,J=R.height;let tt=s.COLOR_BUFFER_BIT;const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=n.get(R),dt=S.length>1;if(dt)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[gt]);const Ht=n.get(S[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ht,0)}s.blitFramebuffer(0,0,V,J,0,0,V,J,tt,s.NEAREST),l===!0&&(L.length=0,fe.length=0,L.push(s.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push($),fe.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,fe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[gt]);const Ht=n.get(S[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function le(R){return Math.min(i.maxSamples,R.samples)}function At(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function we(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Ot(R,S){const V=R.colorSpace,J=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==oi&&V!==ei&&(ie.getTransfer(V)===he?(J!==dn||tt!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=It,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=At}function mv(s,t){function e(n,i=ei){let r;const a=ie.getTransfer(i);if(n===Xn)return s.UNSIGNED_BYTE;if(n===vl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return s.BYTE;if(n===qh)return s.SHORT;if(n===Xs)return s.UNSIGNED_SHORT;if(n===gl)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===Wn)return s.HALF_FLOAT;if(n===Kh)return s.ALPHA;if(n===jh)return s.RGB;if(n===dn)return s.RGBA;if(n===Zh)return s.LUMINANCE;if(n===$h)return s.LUMINANCE_ALPHA;if(n===as)return s.DEPTH_COMPONENT;if(n===ds)return s.DEPTH_STENCIL;if(n===Jh)return s.RED;if(n===xl)return s.RED_INTEGER;if(n===Qh)return s.RG;if(n===yl)return s.RG_INTEGER;if(n===Ml)return s.RGBA_INTEGER;if(n===jr||n===Zr||n===$r||n===Jr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Io||n===Do||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===zo||n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Ko||n===jo||n===Zo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===Jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===tl||n===el||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class gv extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qt extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ue,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new We({vertexShader:_v,fragmentShader:xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mv extends _s{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=new yv,m=e.getContextAttributes();let p=null,y=null;const _=[],x=[],C=new et;let b=null;const A=new Ze;A.layers.enable(1),A.viewport=new Jt;const I=new Ze;I.layers.enable(2),I.viewport=new Jt;const w=[A,I],M=new gv;M.layers.enable(1),M.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=_[F];return K===void 0&&(K=new io,_[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=_[F];return K===void 0&&(K=new io,_[F]=K),K.getGripSpace()},this.getHand=function(F){let K=_[F];return K===void 0&&(K=new io,_[F]=K),K.getHandSpace()};function z(F){const K=x.indexOf(F.inputSource);if(K===-1)return;const at=_[K];at!==void 0&&(at.update(F.inputSource,F.frame,c||a),at.dispatchEvent({type:F.type,data:F.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let F=0;F<_.length;F++){const K=x[F];K!==null&&(x[F]=null,_[F].disconnect(K))}P=null,O=null,v.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,y=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new wn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,at=null,Q=null;m.depth&&(Q=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?ds:as,at=m.stencil?us:Ti);const Rt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new wn(d.textureWidth,d.textureHeight,{format:dn,type:Xn,depthTexture:new uu(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(F){for(let K=0;K<F.removed.length;K++){const at=F.removed[K],Q=x.indexOf(at);Q>=0&&(x[Q]=null,_[Q].disconnect(at))}for(let K=0;K<F.added.length;K++){const at=F.added[K];let Q=x.indexOf(at);if(Q===-1){for(let It=0;It<_.length;It++)if(It>=x.length){x.push(at),Q=It;break}else if(x[It]===null){x[It]=at,Q=It;break}if(Q===-1)break}const Rt=_[Q];Rt&&Rt.connect(at)}}const H=new E,Y=new E;function G(F,K,at){H.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(at.matrixWorld);const Q=H.distanceTo(Y),Rt=K.projectionMatrix.elements,It=at.projectionMatrix.elements,Ct=Rt[14]/(Rt[10]-1),se=Rt[14]/(Rt[10]+1),L=(Rt[9]+1)/Rt[5],fe=(Rt[9]-1)/Rt[5],re=(Rt[8]-1)/Rt[0],le=(It[8]+1)/It[0],At=Ct*re,we=Ct*le,Ot=Q/(-re+le),kt=Ot*-re;K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(kt),F.translateZ(Ot),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const R=Ct+Ot,S=se+Ot,V=At-kt,J=we+(Q-kt),tt=L*se/S*R,$=fe*se/S*R;F.projectionMatrix.makePerspective(V,J,tt,$,R,S),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function ht(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;v.texture!==null&&(F.near=v.depthNear,F.far=v.depthFar),M.near=I.near=A.near=F.near,M.far=I.far=A.far=F.far,(P!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far,A.near=P,A.far=O,I.near=P,I.far=O,A.updateProjectionMatrix(),I.updateProjectionMatrix(),F.updateProjectionMatrix());const K=F.parent,at=M.cameras;ht(M,K);for(let Q=0;Q<at.length;Q++)ht(at[Q],K);at.length===2?G(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),vt(F,M,K)};function vt(F,K,at){at===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(at.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=fs*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let j=null;function rt(F,K){if(u=K.getViewerPose(c||a),g=K,u!==null){const at=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Q=!1;at.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let It=0;It<at.length;It++){const Ct=at[It];let se=null;if(f!==null)se=f.getViewport(Ct);else{const fe=h.getViewSubImage(d,Ct);se=fe.viewport,It===0&&(t.setRenderTargetTextures(y,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(y))}let L=w[It];L===void 0&&(L=new Ze,L.layers.enable(It),L.viewport=new Jt,w[It]=L),L.matrix.fromArray(Ct.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ct.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(se.x,se.y,se.width,se.height),It===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(L)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const It=h.getDepthInformation(at[0]);It&&It.isValid&&It.texture&&v.init(t,It,i.renderState)}}for(let at=0;at<_.length;at++){const Q=x[at],Rt=_[at];Q!==null&&Rt!==void 0&&Rt.update(Q,K,c||a)}j&&j(F,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const lt=new hu;lt.setAnimationLoop(rt),this.setAnimationLoop=function(F){j=F},this.dispose=function(){}}}const mi=new ge,Sv=new Mt;function wv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ou(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(mi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tv(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(g(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(y,C);const b=t.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function u(y){const _=h();y.__bindingPointIndex=_;const x=s.createBuffer(),C=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let b=0,A=x.length;b<A;b++){const I=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,M=I.length;w<M;w++){const P=I[w];if(f(P,b,w,C)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let X=0;X<z.length;X++){const H=z[X],Y=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,O+W,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,_,x,C){const b=y.value,A=_+"_"+x;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const I=C[A];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return C[A]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(y){const _=y.uniforms;let x=0;const C=16;for(let A=0,I=_.length;A<I;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,P=w.length;M<P;M++){const O=w[M],z=Array.isArray(O.value)?O.value:[O.value];for(let W=0,X=z.length;W<X;W++){const H=z[W],Y=v(H),G=x%C;G!==0&&C-G<Y.boundary&&(x+=C-G),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Y.storage}}}const b=x%C;return b>0&&(x+=C-b),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Ev{constructor(t={}){const{canvas:e=vf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=si,this.toneMappingExposure=1;const _=this;let x=!1,C=0,b=0,A=null,I=-1,w=null;const M=new Jt,P=new Jt;let O=null;const z=new St(0);let W=0,X=e.width,H=e.height,Y=1,G=null,ht=null;const vt=new Jt(0,0,X,H),j=new Jt(0,0,X,H);let rt=!1;const lt=new Al;let F=!1,K=!1;const at=new Mt,Q=new E,Rt=new Jt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function se(){return A===null?Y:1}let L=n;function fe(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const U="webgl2";if(L=fe(U,T),L===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,le,At,we,Ot,kt,R,S,V,J,tt,$,Pt,dt,gt,Ht,nt,mt,Kt,Ft,_t,Bt,Xt,pe;function D(){re=new I0(L),re.init(),Bt=new mv(L,re),le=new b0(L,re,t,Bt),At=new dv(L),we=new N0(L),Ot=new Jg,kt=new pv(L,re,At,Ot,le,Bt,we),R=new R0(_),S=new L0(_),V=new Hf(L),Xt=new T0(L,V),J=new D0(L,V,we,Xt),tt=new O0(L,J,V,we),Kt=new F0(L,le,kt),Ht=new A0(Ot),$=new $g(_,R,S,re,le,Xt,Ht),Pt=new wv(_,Ot),dt=new tv,gt=new av(re),mt=new w0(_,R,S,At,tt,d,l),nt=new uv(_,tt,le),pe=new Tv(L,we,le,At),Ft=new E0(L,re,we),_t=new U0(L,re,we),we.programs=$.programs,_.capabilities=le,_.extensions=re,_.properties=Ot,_.renderLists=dt,_.shadowMap=nt,_.state=At,_.info=we}D();const it=new Mv(_,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(X,H,!1))},this.getSize=function(T){return T.set(X,H)},this.setSize=function(T,U,B=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,H=U,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),B===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(X*Y,H*Y).floor()},this.setDrawingBufferSize=function(T,U,B){X=T,H=U,Y=B,e.width=Math.floor(T*B),e.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,U,B,k){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,U,B,k),At.viewport(M.copy(vt).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,U,B,k){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,U,B,k),At.scissor(P.copy(j).multiplyScalar(Y).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){At.setScissorTest(rt=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(T=!0,U=!0,B=!0){let k=0;if(T){let N=!1;if(A!==null){const st=A.texture.format;N=st===Ml||st===yl||st===xl}if(N){const st=A.texture.type,pt=st===Xn||st===Ti||st===Xs||st===us||st===vl||st===_l,xt=mt.getClearColor(),yt=mt.getClearAlpha(),Ut=xt.r,Nt=xt.g,Lt=xt.b;pt?(f[0]=Ut,f[1]=Nt,f[2]=Lt,f[3]=yt,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ut,g[1]=Nt,g[2]=Lt,g[3]=yt,L.clearBufferiv(L.COLOR,0,g))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT),B&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),gt.dispose(),Ot.dispose(),R.dispose(),S.dispose(),tt.dispose(),Xt.dispose(),pe.dispose(),$.dispose(),it.dispose(),it.removeEventListener("sessionstart",En),it.removeEventListener("sessionend",ql),ci.stop()};function q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=we.autoReset,U=nt.enabled,B=nt.autoUpdate,k=nt.needsUpdate,N=nt.type;D(),we.autoReset=T,nt.enabled=U,nt.autoUpdate=B,nt.needsUpdate=k,nt.type=N}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dt(T){const U=T.target;U.removeEventListener("dispose",Dt),Zt(U)}function Zt(T){Te(T),Ot.remove(T)}function Te(T){const U=Ot.get(T).programs;U!==void 0&&(U.forEach(function(B){$.releaseProgram(B)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,k,N,st){U===null&&(U=It);const pt=N.isMesh&&N.matrixWorld.determinant()<0,xt=od(T,U,B,k,N);At.setMaterial(k,pt);let yt=B.index,Ut=1;if(k.wireframe===!0){if(yt=J.getWireframeAttribute(B),yt===void 0)return;Ut=2}const Nt=B.drawRange,Lt=B.attributes.position;let te=Nt.start*Ut,_e=(Nt.start+Nt.count)*Ut;st!==null&&(te=Math.max(te,st.start*Ut),_e=Math.min(_e,(st.start+st.count)*Ut)),yt!==null?(te=Math.max(te,0),_e=Math.min(_e,yt.count)):Lt!=null&&(te=Math.max(te,0),_e=Math.min(_e,Lt.count));const xe=_e-te;if(xe<0||xe===1/0)return;Xt.setup(N,k,xt,B,yt);let en,ee=Ft;if(yt!==null&&(en=V.get(yt),ee=_t,ee.setIndex(en)),N.isMesh)k.wireframe===!0?(At.setLineWidth(k.wireframeLinewidth*se()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(N.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),At.setLineWidth(Tt*se()),N.isLineSegments?ee.setMode(L.LINES):N.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else N.isPoints?ee.setMode(L.POINTS):N.isSprite&&ee.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Tt=N._multiDrawStarts,Oe=N._multiDrawCounts,ne=N._multiDrawCount,fn=yt?V.get(yt).bytesPerElement:1,Pi=Ot.get(k).currentProgram.getUniforms();for(let nn=0;nn<ne;nn++)Pi.setValue(L,"_gl_DrawID",nn),ee.render(Tt[nn]/fn,Oe[nn])}else if(N.isInstancedMesh)ee.renderInstances(te,xe,N.count);else if(B.isInstancedBufferGeometry){const Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Oe=Math.min(B.instanceCount,Tt);ee.renderInstances(te,xe,Oe)}else ee.render(te,xe)};function Fe(T,U,B){T.transparent===!0&&T.side===An&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,or(T,U,B),T.side=ri,T.needsUpdate=!0,or(T,U,B),T.side=An):or(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),m=gt.get(B),m.init(U),y.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),T!==B&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const k=new Set;return T.traverse(function(N){const st=N.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){const xt=st[pt];Fe(xt,B,N),k.add(xt)}else Fe(st,B,N),k.add(st)}),y.pop(),m=null,k},this.compileAsync=function(T,U,B=null){const k=this.compile(T,U,B);return new Promise(N=>{function st(){if(k.forEach(function(pt){Ot.get(pt).currentProgram.isReady()&&k.delete(pt)}),k.size===0){N(T);return}setTimeout(st,10)}re.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Qt=null;function In(T){Qt&&Qt(T)}function En(){ci.stop()}function ql(){ci.start()}const ci=new hu;ci.setAnimationLoop(In),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(T){Qt=T,it.setAnimationLoop(T),T===null?ci.stop():ci.start()},it.addEventListener("sessionstart",En),it.addEventListener("sessionend",ql),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,A),m=gt.get(T,y.length),m.init(U),y.push(m),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),lt.setFromProjectionMatrix(at),K=this.localClippingEnabled,F=Ht.init(this.clippingPlanes,K),v=dt.get(T,p.length),v.init(),p.push(v),it.enabled===!0&&it.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&Aa(st,U,-1/0,_.sortObjects)}Aa(T,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(G,ht),Ct=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ct&&mt.addToRenderList(v,T),this.info.render.frame++,F===!0&&Ht.beginShadows();const B=m.state.shadowsArray;nt.render(B,T,U),F===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=v.opaque,N=v.transmissive;if(m.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let pt=0,xt=st.length;pt<xt;pt++){const yt=st[pt];Kl(k,N,T,yt)}Ct&&mt.render(T);for(let pt=0,xt=st.length;pt<xt;pt++){const yt=st[pt];Yl(v,T,yt,yt.viewport)}}else N.length>0&&Kl(k,N,T,U),Ct&&mt.render(T),Yl(v,T,U);A!==null&&(kt.updateMultisampleRenderTarget(A),kt.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,U),Xt.resetDefaultState(),I=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],F===!0&&Ht.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Aa(T,U,B,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||lt.intersectsSprite(T)){k&&Rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(at);const pt=tt.update(T),xt=T.material;xt.visible&&v.push(T,pt,xt,B,Rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||lt.intersectsObject(T))){const pt=tt.update(T),xt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Rt.copy(T.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Rt.copy(pt.boundingSphere.center)),Rt.applyMatrix4(T.matrixWorld).applyMatrix4(at)),Array.isArray(xt)){const yt=pt.groups;for(let Ut=0,Nt=yt.length;Ut<Nt;Ut++){const Lt=yt[Ut],te=xt[Lt.materialIndex];te&&te.visible&&v.push(T,pt,te,B,Rt.z,Lt)}}else xt.visible&&v.push(T,pt,xt,B,Rt.z,null)}}const st=T.children;for(let pt=0,xt=st.length;pt<xt;pt++)Aa(st[pt],U,B,k)}function Yl(T,U,B,k){const N=T.opaque,st=T.transmissive,pt=T.transparent;m.setupLightsView(B),F===!0&&Ht.setGlobalState(_.clippingPlanes,B),k&&At.viewport(M.copy(k)),N.length>0&&ar(N,U,B),st.length>0&&ar(st,U,B),pt.length>0&&ar(pt,U,B),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Kl(T,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new wn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Wn:Xn,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const st=m.state.transmissionRenderTarget[k.id],pt=k.viewport||M;st.setSize(pt.z,pt.w);const xt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(z),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),Ct?mt.render(B):_.clear();const yt=_.toneMapping;_.toneMapping=si;const Ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),F===!0&&Ht.setGlobalState(_.clippingPlanes,k),ar(T,B,k),kt.updateMultisampleRenderTarget(st),kt.updateRenderTargetMipmap(st),re.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Lt=0,te=U.length;Lt<te;Lt++){const _e=U[Lt],xe=_e.object,en=_e.geometry,ee=_e.material,Tt=_e.group;if(ee.side===An&&xe.layers.test(k.layers)){const Oe=ee.side;ee.side=Je,ee.needsUpdate=!0,jl(xe,B,k,en,ee,Tt),ee.side=Oe,ee.needsUpdate=!0,Nt=!0}}Nt===!0&&(kt.updateMultisampleRenderTarget(st),kt.updateRenderTargetMipmap(st))}_.setRenderTarget(xt),_.setClearColor(z,W),Ut!==void 0&&(k.viewport=Ut),_.toneMapping=yt}function ar(T,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=T.length;N<st;N++){const pt=T[N],xt=pt.object,yt=pt.geometry,Ut=k===null?pt.material:k,Nt=pt.group;xt.layers.test(B.layers)&&jl(xt,U,B,yt,Ut,Nt)}}function jl(T,U,B,k,N,st){T.onBeforeRender(_,U,B,k,N,st),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.transparent===!0&&N.side===An&&N.forceSinglePass===!1?(N.side=Je,N.needsUpdate=!0,_.renderBufferDirect(B,U,k,N,T,st),N.side=ri,N.needsUpdate=!0,_.renderBufferDirect(B,U,k,N,T,st),N.side=An):_.renderBufferDirect(B,U,k,N,T,st),T.onAfterRender(_,U,B,k,N,st)}function or(T,U,B){U.isScene!==!0&&(U=It);const k=Ot.get(T),N=m.state.lights,st=m.state.shadowsArray,pt=N.state.version,xt=$.getParameters(T,N.state,st,U,B),yt=$.getProgramCacheKey(xt);let Ut=k.programs;k.environment=T.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(T.isMeshStandardMaterial?S:R).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Dt),Ut=new Map,k.programs=Ut);let Nt=Ut.get(yt);if(Nt!==void 0){if(k.currentProgram===Nt&&k.lightsStateVersion===pt)return $l(T,xt),Nt}else xt.uniforms=$.getUniforms(T),T.onBeforeCompile(xt,_),Nt=$.acquireProgram(xt,yt),Ut.set(yt,Nt),k.uniforms=xt.uniforms;const Lt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=Ht.uniform),$l(T,xt),k.needsLights=cd(T),k.lightsStateVersion=pt,k.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Nt,k.uniformsList=null,Nt}function Zl(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=ta.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function $l(T,U){const B=Ot.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function od(T,U,B,k,N){U.isScene!==!0&&(U=It),kt.resetTextureUnits();const st=U.fog,pt=k.isMeshStandardMaterial?U.environment:null,xt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:oi,yt=(k.isMeshStandardMaterial?S:R).get(k.envMap||pt),Ut=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Lt=!!B.morphAttributes.position,te=!!B.morphAttributes.normal,_e=!!B.morphAttributes.color;let xe=si;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xe=_.toneMapping);const en=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=en!==void 0?en.length:0,Tt=Ot.get(k),Oe=m.state.lights;if(F===!0&&(K===!0||T!==w)){const cn=T===w&&k.id===I;Ht.setState(k,T,cn)}let ne=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Oe.state.version||Tt.outputColorSpace!==xt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==yt||k.fog===!0&&Tt.fog!==st||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ht.numPlanes||Tt.numIntersection!==Ht.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Nt||Tt.morphTargets!==Lt||Tt.morphNormals!==te||Tt.morphColors!==_e||Tt.toneMapping!==xe||Tt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Tt.__version=k.version);let fn=Tt.currentProgram;ne===!0&&(fn=or(k,U,N));let Pi=!1,nn=!1,Ra=!1;const Ee=fn.getUniforms(),Yn=Tt.uniforms;if(At.useProgram(fn.program)&&(Pi=!0,nn=!0,Ra=!0),k.id!==I&&(I=k.id,nn=!0),Pi||w!==T){Ee.setValue(L,"projectionMatrix",T.projectionMatrix),Ee.setValue(L,"viewMatrix",T.matrixWorldInverse);const cn=Ee.map.cameraPosition;cn!==void 0&&cn.setValue(L,Q.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&Ee.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ee.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,nn=!0,Ra=!0)}if(N.isSkinnedMesh){Ee.setOptional(L,N,"bindMatrix"),Ee.setOptional(L,N,"bindMatrixInverse");const cn=N.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ee.setValue(L,"boneTexture",cn.boneTexture,kt))}N.isBatchedMesh&&(Ee.setOptional(L,N,"batchingTexture"),Ee.setValue(L,"batchingTexture",N._matricesTexture,kt),Ee.setOptional(L,N,"batchingIdTexture"),Ee.setValue(L,"batchingIdTexture",N._indirectTexture,kt),Ee.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Ee.setValue(L,"batchingColorTexture",N._colorsTexture,kt));const Ca=B.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0)&&Kt.update(N,B,fn),(nn||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,Ee.setValue(L,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Yn.envMap.value=yt,Yn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Yn.envMapIntensity.value=U.environmentIntensity),nn&&(Ee.setValue(L,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&ld(Yn,Ra),st&&k.fog===!0&&Pt.refreshFogUniforms(Yn,st),Pt.refreshMaterialUniforms(Yn,k,Y,H,m.state.transmissionRenderTarget[T.id]),ta.upload(L,Zl(Tt),Yn,kt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ta.upload(L,Zl(Tt),Yn,kt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ee.setValue(L,"center",N.center),Ee.setValue(L,"modelViewMatrix",N.modelViewMatrix),Ee.setValue(L,"normalMatrix",N.normalMatrix),Ee.setValue(L,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const cn=k.uniformsGroups;for(let Pa=0,hd=cn.length;Pa<hd;Pa++){const Jl=cn[Pa];pe.update(Jl,fn),pe.bind(Jl,fn)}}return fn}function ld(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function cd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,B){Ot.get(T.texture).__webglTexture=U,Ot.get(T.depthTexture).__webglTexture=B;const k=Ot.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const B=Ot.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,B=0){A=T,C=U,b=B;let k=!0,N=null,st=!1,pt=!1;if(T){const yt=Ot.get(T);yt.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(L.FRAMEBUFFER,null),k=!1):yt.__webglFramebuffer===void 0?kt.setupRenderTarget(T):yt.__hasExternalTextures&&kt.rebindTextures(T,Ot.get(T.texture).__webglTexture,Ot.get(T.depthTexture).__webglTexture);const Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);const Nt=Ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?N=Nt[U][B]:N=Nt[U],st=!0):T.samples>0&&kt.useMultisampledRTT(T)===!1?N=Ot.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[B]:N=Nt,M.copy(T.viewport),P.copy(T.scissor),O=T.scissorTest}else M.copy(vt).multiplyScalar(Y).floor(),P.copy(j).multiplyScalar(Y).floor(),O=rt;if(At.bindFramebuffer(L.FRAMEBUFFER,N)&&k&&At.drawBuffers(T,N),At.viewport(M),At.scissor(P),At.setScissorTest(O),st){const yt=Ot.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,B)}else if(pt){const yt=Ot.get(T.texture),Ut=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.__webglTexture,B||0,Ut)}I=-1},this.readRenderTargetPixels=function(T,U,B,k,N,st,pt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){At.bindFramebuffer(L.FRAMEBUFFER,xt);try{const yt=T.texture,Ut=yt.format,Nt=yt.type;if(!le.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&B>=0&&B<=T.height-N&&L.readPixels(U,B,k,N,Bt.convert(Ut),Bt.convert(Nt),st)}finally{const yt=A!==null?Ot.get(A).__webglFramebuffer:null;At.bindFramebuffer(L.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,k,N,st,pt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){At.bindFramebuffer(L.FRAMEBUFFER,xt);try{const yt=T.texture,Ut=yt.format,Nt=yt.type;if(!le.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-k&&B>=0&&B<=T.height-N){const Lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(U,B,k,N,Bt.convert(Ut),Bt.convert(Nt),0),L.flush();const te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await _f(L,te,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st)}finally{L.deleteBuffer(Lt),L.deleteSync(te)}return st}}finally{const yt=A!==null?Ot.get(A).__webglFramebuffer:null;At.bindFramebuffer(L.FRAMEBUFFER,yt)}}},this.copyFramebufferToTexture=function(T,U=null,B=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(T.image.width*k),st=Math.floor(T.image.height*k),pt=U!==null?U.x:0,xt=U!==null?U.y:0;kt.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,pt,xt,N,st),At.unbindTexture()},this.copyTextureToTexture=function(T,U,B=null,k=null,N=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let st,pt,xt,yt,Ut,Nt;B!==null?(st=B.max.x-B.min.x,pt=B.max.y-B.min.y,xt=B.min.x,yt=B.min.y):(st=T.image.width,pt=T.image.height,xt=0,yt=0),k!==null?(Ut=k.x,Nt=k.y):(Ut=0,Nt=0);const Lt=Bt.convert(U.format),te=Bt.convert(U.type);kt.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const _e=L.getParameter(L.UNPACK_ROW_LENGTH),xe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),en=L.getParameter(L.UNPACK_SKIP_PIXELS),ee=L.getParameter(L.UNPACK_SKIP_ROWS),Tt=L.getParameter(L.UNPACK_SKIP_IMAGES),Oe=T.isCompressedTexture?T.mipmaps[N]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,yt),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Ut,Nt,st,pt,Lt,te,Oe.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Ut,Nt,Oe.width,Oe.height,Lt,Oe.data):L.texSubImage2D(L.TEXTURE_2D,N,Ut,Nt,st,pt,Lt,te,Oe),L.pixelStorei(L.UNPACK_ROW_LENGTH,_e),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,en),L.pixelStorei(L.UNPACK_SKIP_ROWS,ee),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Tt),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(T,U,B=null,k=null,N=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0);let st,pt,xt,yt,Ut,Nt,Lt,te,_e;const xe=T.isCompressedTexture?T.mipmaps[N]:T.image;B!==null?(st=B.max.x-B.min.x,pt=B.max.y-B.min.y,xt=B.max.z-B.min.z,yt=B.min.x,Ut=B.min.y,Nt=B.min.z):(st=xe.width,pt=xe.height,xt=xe.depth,yt=0,Ut=0,Nt=0),k!==null?(Lt=k.x,te=k.y,_e=k.z):(Lt=0,te=0,_e=0);const en=Bt.convert(U.format),ee=Bt.convert(U.type);let Tt;if(U.isData3DTexture)kt.setTexture3D(U,0),Tt=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)kt.setTexture2DArray(U,0),Tt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Oe=L.getParameter(L.UNPACK_ROW_LENGTH),ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),fn=L.getParameter(L.UNPACK_SKIP_PIXELS),Pi=L.getParameter(L.UNPACK_SKIP_ROWS),nn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nt),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Tt,N,Lt,te,_e,st,pt,xt,en,ee,xe.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,N,Lt,te,_e,st,pt,xt,en,xe.data):L.texSubImage3D(Tt,N,Lt,te,_e,st,pt,xt,en,ee,xe),L.pixelStorei(L.UNPACK_ROW_LENGTH,Oe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nn),N===0&&U.generateMipmaps&&L.generateMipmap(Tt),At.unbindTexture()},this.initRenderTarget=function(T){Ot.get(T).__webglFramebuffer===void 0&&kt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?kt.setTextureCube(T,0):T.isData3DTexture?kt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?kt.setTexture2DArray(T,0):kt.setTexture2D(T,0),At.unbindTexture()},this.resetState=function(){C=0,b=0,A=null,At.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sl?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===va?"display-p3":"srgb"}}class Cl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new Cl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bv extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ge,this.environmentIntensity=1,this.environmentRotation=new ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Av{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Tl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new E;class ca{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ca(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gu extends Pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ki;const Cs=new E,ji=new E,Zi=new E,$i=new et,Ps=new et,vu=new Mt,Pr=new E,Ls=new E,Lr=new E,Jc=new et,so=new et,Qc=new et;class Rv extends ue{constructor(t=new gu){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Av(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new ca(n,3,0,!1)),Ki.setAttribute("uv",new ca(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),vu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Zi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ir(Pr.set(-.5,-.5,0),Zi,a,ji,i,r),Ir(Ls.set(.5,-.5,0),Zi,a,ji,i,r),Ir(Lr.set(.5,.5,0),Zi,a,ji,i,r),Jc.set(0,0),so.set(1,0),Qc.set(1,1);let o=t.ray.intersectTriangle(Pr,Ls,Lr,!1,Cs);if(o===null&&(Ir(Ls.set(-.5,.5,0),Zi,a,ji,i,r),so.set(0,1),o=t.ray.intersectTriangle(Pr,Lr,Ls,!1,Cs),o===null))return;const l=t.ray.origin.distanceTo(Cs);l<t.near||l>t.far||e.push({distance:l,point:Cs.clone(),uv:Mn.getInterpolation(Cs,Pr,Ls,Lr,Jc,so,Qc,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ir(s,t,e,n,i,r){$i.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ps.x=r*$i.x-i*$i.y,Ps.y=i*$i.x+r*$i.y):Ps.copy($i),s.copy(t),s.x+=Ps.x,s.y+=Ps.y,s.applyMatrix4(vu)}const th=new E,eh=new Jt,nh=new Jt,Cv=new E,ih=new Mt,Dr=new E,ro=new Ri,sh=new Mt,ao=new tr;class Pv extends ut{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nc,this.bindMatrix=new Mt,this.bindMatrixInverse=new Mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ri),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(i),t.ray.intersectsSphere(ro)!==!1&&(sh.copy(i).invert(),ao.copy(t.ray).applyMatrix4(sh),!(this.boundingBox!==null&&ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ao)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===nc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;eh.fromBufferAttribute(i.attributes.skinIndex,t),nh.fromBufferAttribute(i.attributes.skinWeight,t),th.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=nh.getComponent(r);if(a!==0){const o=eh.getComponent(r);ih.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Cv.copy(th).applyMatrix4(ih),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class al extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lv extends Ue{constructor(t=null,e=1,n=1,i,r,a,o,l,c=tn,u=tn,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rh=new Mt,Iv=new Mt;class Pl{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Mt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Mt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Iv;rh.multiplyMatrices(o,e[r]),rh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Lv(e,t,t,dn,Rn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new al),this.bones.push(a),this.boneInverses.push(new Mt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class _u extends Pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ha=new E,ua=new E,ah=new Mt,Is=new tr,Ur=new Ri,oo=new E,oh=new E;class Dv extends ue{constructor(t=new ye,e=new _u){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ha.fromBufferAttribute(e,i-1),ua.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ha.distanceTo(ua);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;ah.copy(i).invert(),Is.copy(t.ray).applyMatrix4(ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=u.getX(v),y=u.getX(v+1),_=Nr(this,t,Is,l,p,y);_&&e.push(_)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Nr(this,t,Is,l,v,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Nr(this,t,Is,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Nr(this,t,Is,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nr(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(ha.fromBufferAttribute(a,i),ua.fromBufferAttribute(a,r),e.distanceSqToSegment(ha,ua,oo,oh)>n)return;oo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(oo);if(!(l<t.near||l>t.far))return{distance:l,point:oh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}class Os extends Pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lh=new Mt,ol=new tr,Fr=new Ri,Or=new E;class xu extends ue{constructor(t=new ye,e=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;lh.copy(i).invert(),ol.copy(t.ray).applyMatrix4(lh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Or.fromBufferAttribute(h,m),ch(Or,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Or.fromBufferAttribute(h,g),ch(Or,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ch(s,t,e,n,i,r,a){const o=ol.distanceSqToPoint(s);if(o<e){const l=new E;ol.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class ya extends Ue{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new et:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,i=[],r=[],a=[],o=new E,l=new Mt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ie(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ll extends Tn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Uv extends Ll{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Br=new E,lo=new Il,co=new Il,ho=new Il;class Nv extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Br.subVectors(i[0],i[1]).add(i[0]),c=Br);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Br.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),lo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),co.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),ho.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),co.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ho.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(lo.calc(l),co.calc(l),ho.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hh(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Fv(s,t){const e=1-s;return e*e*t}function Ov(s,t){return 2*(1-s)*s*t}function Bv(s,t){return s*s*t}function Bs(s,t,e,n){return Fv(s,t)+Ov(s,e)+Bv(s,n)}function zv(s,t){const e=1-s;return e*e*e*t}function kv(s,t){const e=1-s;return 3*e*e*s*t}function Vv(s,t){return 3*(1-s)*s*s*t}function Hv(s,t){return s*s*s*t}function zs(s,t,e,n,i){return zv(s,t)+kv(s,e)+Vv(s,n)+Hv(s,i)}class yu extends Tn{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,i.x,r.x,a.x,o.x),zs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gv extends Tn{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,i.x,r.x,a.x,o.x),zs(t,i.y,r.y,a.y,o.y),zs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mu extends Tn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wv extends Tn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Su extends Tn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,i.x,r.x,a.x),Bs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xv extends Tn{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,i.x,r.x,a.x),Bs(t,i.y,r.y,a.y),Bs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(hh(o,l.x,c.x,u.x,h.x),hh(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new et().fromArray(i))}return this}}var uh=Object.freeze({__proto__:null,ArcCurve:Uv,CatmullRomCurve3:Nv,CubicBezierCurve:yu,CubicBezierCurve3:Gv,EllipseCurve:Ll,LineCurve:Mu,LineCurve3:Wv,QuadraticBezierCurve:Su,QuadraticBezierCurve3:Xv,SplineCurve:wu});class qv extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new uh[i.type]().fromJSON(i))}return this}}class Yv extends qv{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Mu(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Su(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new yu(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Ll(t,e,n,i,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Dl extends ye{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ie(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new E,d=new et,f=new E,g=new E,v=new E;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const _=n+y*u*i,x=Math.sin(_),C=Math.cos(_);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*x,h.y=t[b].y,h.z=t[b].x*C,a.push(h.x,h.y,h.z),d.x=y/e,d.y=b/(t.length-1),o.push(d.x,d.y);const A=l[3*b+0]*x,I=l[3*b+1],w=l[3*b+0]*C;c.push(A,I,w)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){const x=_+y*t.length,C=x,b=x+t.length,A=x+t.length+1,I=x+1;r.push(C,b,I),r.push(A,I,b)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.points,t.segments,t.phiStart,t.phiLength)}}class Ul extends Dl{constructor(t=1,e=1,n=4,i=8){const r=new Yv;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Ul(t.radius,t.length,t.capSegments,t.radialSegments)}}class Nl extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new E,u=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ae extends ye{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function y(){const x=new E,C=new E;let b=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const w=[],M=I/r,P=M*(e-t)+t;for(let O=0;O<=i;O++){const z=O/i,W=z*l+o,X=Math.sin(W),H=Math.cos(W);C.x=P*X,C.y=-M*n+m,C.z=P*H,h.push(C.x,C.y,C.z),x.set(X,A,H).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-M),w.push(g++)}v.push(w)}for(let I=0;I<i;I++)for(let w=0;w<r;w++){const M=v[w][I],P=v[w+1][I],O=v[w+1][I+1],z=v[w][I+1];u.push(M,P,z),u.push(P,O,z),b+=6}c.addGroup(p,b,0),p+=b}function _(x){const C=g,b=new et,A=new E;let I=0;const w=x===!0?t:e,M=x===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const W=O/i*l+o,X=Math.cos(W),H=Math.sin(W);A.x=w*H,A.y=m*M,A.z=w*X,h.push(A.x,A.y,A.z),d.push(0,M,0),b.x=X*.5+.5,b.y=H*.5*M+.5,f.push(b.x,b.y),g++}for(let O=0;O<i;O++){const z=C+O,W=P+O;x===!0?u.push(W,W+1,z):u.push(W+1,W,z),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ma extends Ae{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ma(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fl extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new E,x=new E,C=new E;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],x),f(e[b+2],C),l(_,x,C,y)}function l(y,_,x,C){const b=C+1,A=[];for(let I=0;I<=b;I++){A[I]=[];const w=y.clone().lerp(x,I/b),M=_.clone().lerp(x,I/b),P=b-I;for(let O=0;O<=P;O++)O===0&&I===b?A[I][O]=w:A[I][O]=w.clone().lerp(M,O/P)}for(let I=0;I<b;I++)for(let w=0;w<2*(b-I)-1;w++){const M=Math.floor(w/2);w%2===0?(d(A[I][M+1]),d(A[I+1][M]),d(A[I][M])):(d(A[I][M+1]),d(A[I+1][M+1]),d(A[I+1][M]))}}function c(y){const _=new E;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function u(){const y=new E;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;a.push(x,1-C)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const _=a[y+0],x=a[y+2],C=a[y+4],b=Math.max(_,x,C),A=Math.min(_,x,C);b>.9&&A<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){const y=new E,_=new E,x=new E,C=new E,b=new et,A=new et,I=new et;for(let w=0,M=0;w<r.length;w+=9,M+=6){y.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),C.copy(y).add(_).add(x).divideScalar(3);const P=m(C);v(b,M+0,y,P),v(A,M+2,_,P),v(I,M+4,x,P)}}function v(y,_,x,C){C<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.vertices,t.indices,t.radius,t.details)}}const Kv={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Tu(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,f;if(n&&(r=Qv(s,t,r,e)),s.length>80*e){o=c=s[0],l=u=s[1];for(let g=e;g<i;g+=e)h=s[g],d=s[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Ks(r,a,e,o,l,f,0),a}};function Tu(s,t,e,n,i){let r,a;if(i===h_(s,t,e,n)>0)for(r=t;r<e;r+=n)a=dh(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=dh(r,s[r],s[r+1],a);return a&&Sa(a,a.next)&&(Zs(a),a=a.next),a}function Ei(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Sa(e,e.next)||ve(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ks(s,t,e,n,i,r,a){if(!s)return;!a&&r&&s_(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Zv(s,n,i,r):jv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Zs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=$v(Ei(s),t,e),Ks(s,t,e,n,i,r,2)):a===2&&Jv(s,t,e,n,i,r):Ks(Ei(s),t,e,n,i,r,1);break}}}function jv(s){const t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&is(i,o,r,l,a,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zv(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ve(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,u=i.y,h=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=ll(f,g,t,e,n),y=ll(v,m,t,e,n);let _=s.prevZ,x=s.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&is(o,u,l,h,c,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&is(o,u,l,h,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&is(o,u,l,h,c,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&is(o,u,l,h,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function $v(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Sa(i,r)&&Eu(i,n,n.next,r)&&js(i,r)&&js(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Zs(n),Zs(n.next),n=s=r),n=n.next}while(n!==s);return Ei(n)}function Jv(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&o_(a,o)){let l=bu(a,o);a=Ei(a,a.next),l=Ei(l,l.next),Ks(a,t,e,n,i,r,0),Ks(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Qv(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Tu(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(a_(c));for(i.sort(t_),r=0;r<i.length;r++)e=e_(i[r],e);return e}function t_(s,t){return s.x-t.x}function e_(s,t){const e=n_(s,t);if(!e)return t;const n=bu(e,s);return Ei(n,n.next),Ei(e,e.next)}function n_(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&is(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),js(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&i_(i,e)))&&(i=e,u=h)),e=e.next;while(e!==o);return i}function i_(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function s_(s,t,e,n){let i=s;do i.z===0&&(i.z=ll(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,r_(i)}function r_(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function ll(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function a_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function is(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function o_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!l_(s,t)&&(js(s,t)&&js(t,s)&&c_(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||Sa(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Sa(s,t){return s.x===t.x&&s.y===t.y}function Eu(s,t,e,n){const i=kr(ve(s,t,e)),r=kr(ve(s,t,n)),a=kr(ve(e,n,s)),o=kr(ve(e,n,t));return!!(i!==r&&a!==o||i===0&&zr(s,e,t)||r===0&&zr(s,n,t)||a===0&&zr(e,s,n)||o===0&&zr(e,t,n))}function zr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function kr(s){return s>0?1:s<0?-1:0}function l_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function js(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function c_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function bu(s,t){const e=new cl(s.i,s.x,s.y),n=new cl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dh(s,t,e,n){const i=new cl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function h_(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Ol{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ol.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];fh(t),ph(n,t);let a=t.length;e.forEach(fh);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ph(n,e[l]);const o=Kv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function fh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ph(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Bl extends Fl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bl(t.radius,t.detail)}}class ln extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new E,d=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const b=C/e;h.x=-t*Math.cos(i+b*r)*Math.sin(a+_*o),h.y=t*Math.cos(a+_*o),h.z=t*Math.sin(i+b*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(b+x,1-_),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const _=u[p][y+1],x=u[p][y],C=u[p+1][y],b=u[p+1][y+1];(p!==0||a>0)&&f.push(_,x,b),(p!==n-1||l<Math.PI)&&f.push(x,C,b)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ms extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new E,h=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class u_ extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends Pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uo extends Pn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new St(16777215),this.specular=new St(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ge,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class d_ extends Pn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ge,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Vr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function f_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function p_(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function mh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function Au(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class wa{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class m_ extends wa{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=t,o=2*e-n;break;case rc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:a=t,l=2*n-e;break;case rc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let C=0;C!==o;++C)r[C]=p*a[u+C]+y*a[c+C]+_*a[l+C]+x*a[h+C];return r}}class g_ extends wa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class v_ extends wa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ln{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new v_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new g_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new m_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case sa:e=this.InterpolantFactoryMethodDiscrete;break;case il:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&f_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ia,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=e[h+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=il;class Ms extends Ln{constructor(t,e,n){super(t,e,n)}}Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=sa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Ru extends Ln{}Ru.prototype.ValueTypeName="color";class $s extends Ln{}$s.prototype.ValueTypeName="number";class __ extends wa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let u=c+o;c!==u;c+=4)Ge.slerpFlat(r,0,a,c-o,a,c,l);return r}}class gs extends Ln{InterpolantFactoryMethodLinear(t){return new __(this.times,this.values,this.getValueSize(),t)}}gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Ln{constructor(t,e,n){super(t,e,n)}}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=sa;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Ln{}Js.prototype.ValueTypeName="vector";class x_{constructor(t="",e=-1,n=[],i=Gd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(M_(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=p_(l);l=mh(l,1,u),c=mh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new $s(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,v){if(f.length!==0){const m=[],p=[];Au(f,m,p,g),m.length!==0&&v.push(new h(d,m,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const _=d[g];m.push(_.time),p.push(_.morphTarget===v?1:0)}i.push(new $s(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+e[h].name+"]";n(Js,f+".position",d,"pos",i),n(gs,f+".quaternion",d,"rot",i),n(Js,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function y_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return Ru;case"quaternion":return gs;case"bool":case"boolean":return Ms;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function M_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=y_(s.type);if(s.times===void 0){const e=[],n=[];Au(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const da={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class S_{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const w_=new S_;class bi{constructor(t){this.manager=t!==void 0?t:w_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class T_ extends Error{constructor(t,e){super(t),this.response=e}}class E_ extends bi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=da.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Bn[t]!==void 0){Bn[t].push({onLoad:e,onProgress:n,onError:i});return}Bn[t]=[],Bn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,A=u.length;b<A;b++){const I=u[b];I.onProgress&&I.onProgress(C)}p.enqueue(x),y()}},_=>{p.error(_)})}}});return new Response(m)}else throw new T_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{da.add(t,c);const u=Bn[t];delete Bn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Bn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Bn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class b_ extends bi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=da.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=qs("img");function l(){u(),da.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class A_ extends bi{constructor(t){super(t)}load(t,e,n,i){const r=new Ue,a=new b_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class er extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class R_ extends er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fo=new Mt,gh=new E,vh=new E;class zl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(gh),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class C_ extends zl{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=fs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class P_ extends er{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new C_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const _h=new Mt,Ds=new E,po=new E;class L_ extends zl{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ds),po.copy(n.position),po.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(po),n.updateMatrixWorld(),i.makeTranslation(-Ds.x,-Ds.y,-Ds.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class Ai extends er{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new L_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class I_ extends zl{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ks extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new I_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class D_ extends er{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class U_{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Cu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xh(){return(typeof performance>"u"?Date:performance).now()}const kl="\\[\\]\\.:\\/",N_=new RegExp("["+kl+"]","g"),Vl="[^"+kl+"]",F_="[^"+kl.replace("\\.","")+"]",O_=/((?:WC+[\/:])*)/.source.replace("WC",Vl),B_=/(WCOD+)?/.source.replace("WCOD",F_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),k_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),V_=new RegExp("^"+O_+B_+z_+k_+"$"),H_=["material","materials","bones","map"];class G_{constructor(t,e,n){const i=n||$t.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class $t{constructor(t,e,n){this.path=e,this.parsedPath=n||$t.parseTrackName(e),this.node=$t.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new $t.Composite(t,e,n):new $t(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(t){const e=V_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);H_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=$t.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$t.Composite=G_;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const yh=new Mt;class W_{constructor(t,e,n=0,i=1/0){this.ray=new tr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,n=[]){return hl(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)hl(t[i],this,n,e);return n.sort(Mh),n}}function Mh(s,t){return s.distance-t.distance}function hl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)hl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);const Pu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X_=new _a(-1,1,1,-1,0,1);class q_ extends ye{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}}const Y_=new q_;class Hl{constructor(t){this._mesh=new ut(Y_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,X_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Gl extends ws{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ys.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sh extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class K_ extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class j_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gl(Pu),this.copyPass.material.blending=Gn,this.clock=new Cu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Sh!==void 0&&(a instanceof Sh?n=!0:a instanceof K_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Z_ extends ws{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new St}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const $_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class vs extends ws{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new St(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,a,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new wn(r,a,{type:Wn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new wn(r,a,{type:Wn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=$_;this.highPassUniforms=Ys.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Pu;this.copyUniforms=Ys.clone(u.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Mi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new St,this.oldClearAlpha=1,this.basic=new ni,this.fsQuad=new Hl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=vs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=vs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}vs.BlurDirectionX=new et(1,0);vs.BlurDirectionY=new et(0,1);const J_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Q_ extends ws{constructor(){super();const t=J_;this.uniforms=Ys.clone(t.uniforms),this.material=new u_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const tx=170;function nr(s,t,e,n=1,i=1){const r=document.createElement("canvas");r.width=s,r.height=t,e(r.getContext("2d"),s,t);const a=new ya(r);return a.wrapS=a.wrapT=wi,a.repeat.set(n,i),a.anisotropy=4,a.colorSpace=Be,a}function ex(){return nr(512,512,(s,t,e)=>{s.fillStyle="#33363a",s.fillRect(0,0,t,e);for(let n=0;n<9e3;n++){const i=40+Math.random()*30;s.fillStyle=`rgba(${i},${i},${i+4},${.25+Math.random()*.3})`,s.fillRect(Math.random()*t,Math.random()*e,1.5,1.5)}s.strokeStyle="rgba(18,20,22,0.55)",s.lineWidth=1.2;for(let n=0;n<14;n++){s.beginPath();let i=Math.random()*t,r=Math.random()*e;s.moveTo(i,r);for(let a=0;a<8;a++)i+=(Math.random()-.5)*70,r+=(Math.random()-.5)*70,s.lineTo(i,r);s.stroke()}for(let n=0;n<6;n++){const i=s.createRadialGradient(0,0,0,0,0,30+Math.random()*50);i.addColorStop(0,"rgba(10,12,14,0.5)"),i.addColorStop(1,"rgba(10,12,14,0)"),s.save(),s.translate(Math.random()*t,Math.random()*e),s.fillStyle=i,s.fillRect(-90,-90,180,180),s.restore()}},18,18)}function wh(s="#8a8377"){return nr(256,256,(t,e,n)=>{t.fillStyle=s,t.fillRect(0,0,e,n);for(let i=0;i<2600;i++){const r=.06+Math.random()*.12;t.fillStyle=Math.random()>.5?`rgba(255,255,255,${r})`:`rgba(0,0,0,${r})`,t.fillRect(Math.random()*e,Math.random()*n,2,2)}t.strokeStyle="rgba(0,0,0,0.18)",t.lineWidth=2,t.strokeRect(1,1,e-2,n-2)},1,1)}function nx(s,t,e){return nr(256*Math.max(1,Math.floor(t/3)),128*s,(n,i,r)=>{n.fillStyle=e,n.fillRect(0,0,i,r);for(let l=0;l<40;l++){n.fillStyle=`rgba(0,0,0,${.04+Math.random()*.08})`;const c=Math.random()*i;n.fillRect(c,0,3+Math.random()*10,r)}const a=i/t,o=r/s;for(let l=0;l<s;l++)for(let c=0;c<t;c++){const u=c*a+a*.22,h=l*o+o*.22,d=a*.56,f=o*.5,g=Math.random()<.28;if(n.fillStyle="#15181c",n.fillRect(u-3,h-3,d+6,f+6),g){const v=n.createLinearGradient(u,h,u,h+f);v.addColorStop(0,"#ffd98a"),v.addColorStop(1,"#c98f3a"),n.fillStyle=v}else n.fillStyle=`rgba(${40+Math.random()*25},${52+Math.random()*25},${66+Math.random()*25},1)`;n.fillRect(u,h,d,f),n.fillStyle="rgba(10,12,14,0.8)",n.fillRect(u+d/2-1,h,2,f)}},1,1)}function ix(s){return nr(256,128,(t,e,n)=>{t.fillStyle=s,t.fillRect(0,0,e,n);for(let i=0;i<e;i+=16)t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(i,0,4,n),t.fillStyle="rgba(255,255,255,0.07)",t.fillRect(i+8,0,4,n);for(let i=0;i<30;i++){t.fillStyle=`rgba(96,52,26,${.15+Math.random()*.3})`;const r=Math.random()*e,a=Math.random()*n;t.beginPath(),t.ellipse(r,a,4+Math.random()*14,3+Math.random()*7,Math.random()*3,0,7),t.fill()}},2,1)}function sx(){return nr(128,128,(s,t,e)=>{s.fillStyle="#6e5636",s.fillRect(0,0,t,e);for(let n=0;n<500;n++)s.fillStyle=`rgba(0,0,0,${Math.random()*.12})`,s.fillRect(Math.random()*t,Math.random()*e,6,1.5);s.strokeStyle="#4a3820",s.lineWidth=6,s.strokeRect(3,3,t-6,e-6),s.beginPath(),s.moveTo(0,0),s.lineTo(t,e),s.moveTo(t,0),s.lineTo(0,e),s.lineWidth=5,s.stroke()},1,1)}class rx{constructor(t,e){this.scene=t,this.colliders=[],this.raycastMeshes=[],this.barrels=[],this.enemySpawns=[],this.lampLights=[],this._build(e)}addCollider(t,e,n,i,r,a){this.colliders.push({min:new E(t-i/2,e-r/2,n-a/2),max:new E(t+i/2,e+r/2,n+a/2)})}_solidBox(t,e,n,i,r,a,o,l={}){const c=new ut(new oe(t,e,n),i);if(c.position.set(r,a,o),c.castShadow=l.castShadow!==!1,c.receiveShadow=!0,l.rotY&&(c.rotation.y=l.rotY),this.scene.add(c),l.collide!==!1)if(l.rotY&&Math.abs(Math.sin(l.rotY))>.05){const u=Math.abs(Math.cos(l.rotY)),h=Math.abs(Math.sin(l.rotY));this.addCollider(r,a,o,t*u+n*h,e,t*h+n*u)}else this.addCollider(r,a,o,t,e,n);return l.raycast!==!1&&this.raycastMeshes.push(c),c}_build(t){const e=tx,n=e/2;this.scene.fog=new Cl(1711918,.0085);const i=new ln(480,24,16),r=new We({side:Je,depthWrite:!1,uniforms:{top:{value:new St(659492)},mid:{value:new St(2831696)},horizon:{value:new St(14249778)}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 top; uniform vec3 mid; uniform vec3 horizon;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.1, 1.0);
          vec3 col = mix(horizon, mid, smoothstep(0.0, 0.22, h));
          col = mix(col, top, smoothstep(0.2, 0.75, h));
          // sun glow low in the west
          float sun = pow(max(dot(normalize(vDir), normalize(vec3(-0.75, 0.12, -0.4))), 0.0), 32.0);
          col += vec3(1.0, 0.55, 0.2) * sun * 0.9;
          gl_FragColor = vec4(col, 1.0);
        }`}),a=new ut(i,r);this.scene.add(a);const o=500,l=new Float32Array(o*3);for(let j=0;j<o;j++){const rt=Math.random()*Math.PI*2,lt=Math.acos(.15+Math.random()*.8),F=460;l[j*3]=F*Math.sin(lt)*Math.cos(rt),l[j*3+1]=F*Math.cos(lt),l[j*3+2]=F*Math.sin(lt)*Math.sin(rt)}const c=new ye;c.setAttribute("position",new on(l,3));const u=new xu(c,new Os({color:13490431,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.7,fog:!1}));this.scene.add(u);const h=new R_(3820138,1840914,.55);this.scene.add(h);const d=new ks(16751181,1.35);d.position.set(-90,42,-55),d.castShadow=t!=="low";const f=t==="high"?2048:1024;d.shadow.mapSize.set(f,f),d.shadow.camera.left=-n-10,d.shadow.camera.right=n+10,d.shadow.camera.top=n+10,d.shadow.camera.bottom=-n-10,d.shadow.camera.near=10,d.shadow.camera.far=260,d.shadow.bias=-.0015,this.scene.add(d),this.sun=d;const g=new ks(5926824,.4);g.position.set(60,80,70),this.scene.add(g);const v=new ks(10469631,.5);v.position.set(30,26,90),this.scene.add(v);const m=new ut(new xs(e+60,e+60),new wt({map:ex(),roughness:.95,metalness:.02}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,this.scene.add(m),this.raycastMeshes.push(m);const p=new wt({color:13223034,roughness:.9});for(let j=-n+10;j<n-6;j+=12){const rt=new ut(new oe(.35,.02,5),p);rt.position.set(0,.012,j),rt.receiveShadow=!0,this.scene.add(rt);const lt=new ut(new oe(5,.02,.35),p);lt.position.set(j,.012,0),lt.receiveShadow=!0,this.scene.add(lt)}const y=new wt({map:wh("#6f6a60"),roughness:.9}),_=7,x=1.6;this._solidBox(e+x,_,x,y,0,_/2,-n,{}),this._solidBox(e+x,_,x,y,0,_/2,n,{}),this._solidBox(x,_,e+x,y,-n,_/2,0,{}),this._solidBox(x,_,e+x,y,n,_/2,0,{});const C=new wt({color:2237736,roughness:.5,metalness:.8});[[0,-n],[0,n]].forEach(([j,rt])=>{const lt=new ut(new Ae(.22,.22,e,6),C);lt.rotation.z=Math.PI/2,lt.position.set(j,_+.3,rt),this.scene.add(lt)}),[[-n,0],[n,0]].forEach(([j,rt])=>{const lt=new ut(new Ae(.22,.22,e,6),C);lt.rotation.x=Math.PI/2,lt.position.set(j,_+.3,rt),this.scene.add(lt)});const b=[[-52,-52,26,20,4,"#77705f"],[50,-55,22,26,5,"#6a6e72"],[-55,48,24,24,3,"#7d6f5c"],[52,52,28,18,4,"#6f6a66"],[-18,-60,16,14,3,"#736c60"],[22,62,18,14,3,"#6d6862"],[64,8,14,22,2,"#7a7264"],[-64,-8,14,20,2,"#6e6960"]];for(const[j,rt,lt,F,K,at]of b){const Q=K*3.4,Rt=new wt({map:nx(K,Math.max(3,Math.round(lt/4)),at),roughness:.85}),It=new wt({map:wh("#4a4740"),roughness:.95}),Ct=new ut(new oe(lt,Q,F),[Rt,Rt,It,It,Rt,Rt]);Ct.position.set(j,Q/2,rt),Ct.castShadow=!0,Ct.receiveShadow=!0,this.scene.add(Ct),this.addCollider(j,Q/2,rt,lt,Q,F),this.raycastMeshes.push(Ct);const se=new ut(new oe(lt+.6,.5,F+.6),It);se.position.set(j,Q+.25,rt),se.castShadow=!0,this.scene.add(se);const L=new ut(new oe(2.4,1.4,2),new wt({color:10133668,roughness:.6,metalness:.4}));L.position.set(j+lt*.2,Q+1.2,rt-F*.15),L.castShadow=!0,this.scene.add(L)}const A=["#8a3b2a","#2a5a7a","#3d6b3a","#7a6a2a","#5a3a6a"];[[-21,20,.3],[-13,21,-.1],[-21,27,.2],[28,-18,1.4],[31,-25,1.2],[38,-19,1.3],[8,38,-.4],[-3,41,.15],[-39,-18,.9],[-40,-10,.8],[16,-43,2.2],[43,31,.6],[-31,60,1.9]].forEach(([j,rt,lt],F)=>{const K=new wt({map:ix(A[F%A.length]),roughness:.7,metalness:.35});this._solidBox(6.5,2.6,2.6,K,j,1.3,rt,{rotY:lt})});const w=new wt({map:sx(),roughness:.9}),M=[[-6,12],[19,8],[-12,-28],[36,12],[5,-18],[-28,34],[44,-38],[-45,20],[10,55],[-8,-48],[58,-20],[-58,30],[24,-8],[-18,46]];for(const[j,rt]of M)this._solidBox(1.3,1.3,1.3,w,j,.65,rt,{rotY:Math.random()*.6});const P=new wt({color:9405030,roughness:1}),O=[[0,22,0],[12,-10,1.2],[-16,-6,.5],[-2,-34,0],[26,28,1.6],[-34,8,.8],[48,0,1.57],[0,-22,.3]];for(const[j,rt,lt]of O){const F=new qt;for(let Q=0;Q<3;Q++){const Rt=5-Q;for(let It=0;It<Rt;It++){const Ct=new ut(new Ul(.24,.65,3,8),P);Ct.rotation.z=Math.PI/2,Ct.position.set((It-(Rt-1)/2)*.95,.25+Q*.42,(Math.random()-.5)*.08),Ct.castShadow=!0,Ct.receiveShadow=!0,F.add(Ct)}}F.position.set(j,0,rt),F.rotation.y=lt,this.scene.add(F);const K=Math.abs(Math.cos(lt)),at=Math.abs(Math.sin(lt));this.addCollider(j,.7,rt,4.8*K+.9*at,1.4,4.8*at+.9*K),F.traverse(Q=>{Q.isMesh&&this.raycastMeshes.push(Q)})}const z=new wt({color:11740958,roughness:.55,metalness:.35}),W=new wt({color:15787720,roughness:.6}),X=[[-8,18],[22,-14],[-24,-22],[14,30],[38,20],[-40,-30],[6,-40],[-30,44],[46,-12],[-48,6],[30,48],[-12,62]];for(const[j,rt]of X){const lt=new qt,F=new ut(new Ae(.42,.42,1.15,14),z);F.castShadow=!0,F.receiveShadow=!0;const K=new ut(new Ae(.425,.425,.16,14),W);K.position.y=.2,lt.add(F,K),lt.position.set(j,.58,rt),this.scene.add(lt);const at={mesh:lt,pos:new E(j,.58,rt),alive:!0,hp:25};F.userData.barrel=at,K.userData.barrel=at,this.barrels.push(at),this.raycastMeshes.push(F),this.addCollider(j,.58,rt,.85,1.15,.85)}const H=new wt({color:4998200,roughness:.85});for(const[j,rt]of[[-n+8,-n+8],[n-8,n-8],[n-8,-n+8],[-n+8,n-8]]){for(const[K,at]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]]){const Q=new ut(new oe(.35,7.5,.35),H);Q.position.set(j+K,7.5/2,rt+at),Q.castShadow=!0,this.scene.add(Q)}this._solidBox(4.4,.4,4.4,H,j,7.5+.2,rt,{}),this._solidBox(4.4,1.1,.25,H,j,7.5+1,rt-2.1,{}),this._solidBox(4.4,1.1,.25,H,j,7.5+1,rt+2.1,{}),this._solidBox(.25,1.1,4.4,H,j-2.1,7.5+1,rt,{}),this._solidBox(.25,1.1,4.4,H,j+2.1,7.5+1,rt,{});const F=new ut(new Ma(3.6,1.6,4),H);F.rotation.y=Math.PI/4,F.position.set(j,7.5+3,rt),F.castShadow=!0,this.scene.add(F),this.addCollider(j,7.5/2,rt,3.4,7.5,3.4)}const Y=new wt({color:2895667,roughness:.6,metalness:.7}),G=[[-14,-14],[14,14],[-14,40],[40,-14],[-40,14],[14,-44],[-44,-40],[44,44]],ht=t==="high"?8:t==="medium"?5:3;G.forEach(([j,rt],lt)=>{const F=new ut(new Ae(.12,.16,6.4,8),Y);F.position.set(j,3.2,rt),F.castShadow=!0,this.scene.add(F);const K=new ut(new oe(1.5,.12,.12),Y);K.position.set(j+.7,6.3,rt),this.scene.add(K);const at=new ut(new ln(.2,10,8),new wt({color:16760937,emissive:16753470,emissiveIntensity:2.5}));if(at.position.set(j+1.35,6.22,rt),this.scene.add(at),lt<ht){const Q=new Ai(16753994,14,26,1.8);Q.position.set(j+1.35,6,rt),this.scene.add(Q),this.lampLights.push(Q)}this.addCollider(j,3.2,rt,.4,6.4,.4),this.raycastMeshes.push(F)});const vt=new wt({color:1513498,roughness:.95});for(const[j,rt]of[[9,3],[-22,8],[33,-33],[-6,-14],[20,44],[-52,-32]]){const lt=new ut(new ms(.42,.17,8,16),vt);lt.rotation.x=Math.PI/2,lt.position.set(j,.18,rt),lt.castShadow=!0,lt.receiveShadow=!0,this.scene.add(lt)}this._buildWreck(-2,-8,.6),this._buildWreck(30,6,-1.1),this.enemySpawns=[new E(-n+12,0,-n+20),new E(n-12,0,-n+16),new E(-n+14,0,n-14),new E(n-16,0,n-18),new E(0,0,-n+10),new E(0,0,n-10),new E(-n+10,0,0),new E(n-10,0,0),new E(-34,0,-n+12),new E(36,0,n-12)]}_buildWreck(t,e,n){const i=new wt({color:3621439,roughness:.8,metalness:.3}),r=new wt({color:856598,roughness:.3,metalness:.6}),a=new qt,o=new ut(new oe(4.2,1,1.9),i);o.position.y=.75;const l=new ut(new oe(2.2,.75,1.7),r);l.position.set(-.2,1.55,0),a.add(o,l);const c=new wt({color:1184532,roughness:.95});for(const[d,f]of[[-1.4,-.95],[1.4,-.95],[-1.4,.95],[1.4,.95]]){const g=new ut(new Ae(.38,.38,.3,12),c);g.rotation.x=Math.PI/2,g.position.set(d,.38,f),a.add(g)}a.position.set(t,0,e),a.rotation.y=n,a.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,this.raycastMeshes.push(d))}),this.scene.add(a);const u=Math.abs(Math.cos(n)),h=Math.abs(Math.sin(n));this.addCollider(t,.9,e,4.2*u+1.9*h,1.9,4.2*h+1.9*u)}removeBarrel(t){t.alive=!1,this.scene.remove(t.mesh);const e=this.colliders.findIndex(n=>Math.abs((n.min.x+n.max.x)/2-t.pos.x)<.6&&Math.abs((n.min.z+n.max.z)/2-t.pos.z)<.6&&n.max.y-n.min.y<1.6);e>=0&&this.colliders.splice(e,1),t.mesh.traverse(n=>{const i=this.raycastMeshes.indexOf(n);i>=0&&this.raycastMeshes.splice(i,1)})}}function Lu(s,t,e,n,i=null){for(const r of n){const a=s.y-e;if(s.y<=r.min.y||a>=r.max.y)continue;const l=Math.max(r.min.x,Math.min(s.x,r.max.x)),c=Math.max(r.min.z,Math.min(s.z,r.max.z)),u=s.x-l,h=s.z-c,d=u*u+h*h;if(d<t*t)if(d>1e-8){const f=Math.sqrt(d),g=t-f;s.x+=u/f*g,s.z+=h/f*g}else{const f=s.x-r.min.x+t,g=r.max.x-s.x+t,v=s.z-r.min.z+t,m=r.max.z-s.z+t,p=Math.min(f,g,v,m);p===f?s.x=r.min.x-t:p===g?s.x=r.max.x+t:p===v?s.z=r.min.z-t:s.z=r.max.z+t}}return s}const Hr=new E;function ea(s,t,e,n){Hr.set(s.x,s.y+e,s.z),Lu(Hr,t,e,n),s.x=Hr.x,s.z=Hr.z}function ax(s,t,e,n=.4,i=1.8){for(let a=1;a<10;a++){const o=a/10,l=s.x+(t.x-s.x)*o,c=s.z+(t.z-s.z)*o,u=s.y+(t.y-s.y)*o;for(const h of e)if(!(h.max.y<n||h.min.y>i)&&l>h.min.x&&l<h.max.x&&c>h.min.z&&c<h.max.z&&u>h.min.y&&u<h.max.y)return!0}return!1}class ox{constructor(){this.ctx=null,this.master=null,this.sfxBus=null,this.volume=.7,this.listener={pos:null,fwd:null},this._noiseBuf=null,this._ambientNodes=[],this._heartbeatTimer=0}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-12,e.knee.value=24,e.ratio.value=8,e.attack.value=.002,e.release.value=.15,this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(e),e.connect(this.master),this.master.connect(this.ctx.destination),this._noiseBuf=this._makeNoise(2)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_makeNoise(t){const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;return n}_noiseSource(){const t=this.ctx.createBufferSource();return t.buffer=this._noiseBuf,t.loop=!0,t.loopStart=Math.random(),t}_spatial(t,e=1,n=90){const i=this.ctx.createGain(),r=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;let a=e,o=0;if(t&&this.listener.pos){const l=t.x-this.listener.pos.x,c=t.z-this.listener.pos.z,u=Math.sqrt(l*l+c*c+(t.y-this.listener.pos.y)**2);if(a=e*Math.max(0,1-u/n)**1.4,this.listener.fwd&&u>.5){const h=this.listener.fwd,d=-h.z,f=h.x;o=Math.max(-1,Math.min(1,(l*d+c*f)/u))}}return i.gain.value=a,r?(r.pan.value=o*.8,i.connect(r),r.connect(this.sfxBus)):i.connect(this.sfxBus),i}gunshot(t,e=null){if(!this.ctx)return;const n=this.ctx.currentTime,i={rifle:{dur:.16,freq:900,boom:110,gain:.75,crack:.5},pistol:{dur:.12,freq:1300,boom:160,gain:.6,crack:.45},shotgun:{dur:.28,freq:500,boom:70,gain:1,crack:.7},sniper:{dur:.34,freq:700,boom:60,gain:1,crack:.8},enemy:{dur:.14,freq:800,boom:120,gain:.5,crack:.35}}[t]||{dur:.15,freq:900,boom:110,gain:.7,crack:.5},r=this._spatial(e,i.gain,120),a=this._noiseSource(),o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(i.freq*2.2,n),o.frequency.exponentialRampToValueAtTime(i.freq*.5,n+i.dur),o.Q.value=.8;const l=this.ctx.createGain();l.gain.setValueAtTime(i.crack,n),l.gain.exponentialRampToValueAtTime(.001,n+i.dur),a.connect(o),o.connect(l),l.connect(r),a.start(n),a.stop(n+i.dur+.02);const c=this.ctx.createOscillator();c.type="sine",c.frequency.setValueAtTime(i.boom,n),c.frequency.exponentialRampToValueAtTime(i.boom*.4,n+i.dur*1.4);const u=this.ctx.createGain();u.gain.setValueAtTime(i.gain*.8,n),u.gain.exponentialRampToValueAtTime(.001,n+i.dur*1.5),c.connect(u),u.connect(r),c.start(n),c.stop(n+i.dur*1.6);const h=this._noiseSource(),d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.value=1800;const f=this.ctx.createGain();f.gain.setValueAtTime(.12*i.gain,n+i.dur*.4),f.gain.exponentialRampToValueAtTime(.001,n+i.dur*3),h.connect(d),d.connect(f),f.connect(r),h.start(n+i.dur*.3),h.stop(n+i.dur*3.1)}dryFire(){this._click(1400,.05,.25)}weaponSwitch(){this._click(900,.05,.18),setTimeout(()=>this._click(1300,.05,.22),90)}reloadStage(t){t===0?(this._click(700,.07,.3),this._click(400,.1,.2)):t===1?this._click(1e3,.06,.35):(this._click(1600,.045,.4),setTimeout(()=>this._click(1100,.05,.3),70))}_click(t,e,n){if(!this.ctx)return;const i=this.ctx.currentTime,r=this._noiseSource(),a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=3;const o=this.ctx.createGain();o.gain.setValueAtTime(n,i),o.gain.exponentialRampToValueAtTime(.001,i+e),r.connect(a),a.connect(o),o.connect(this.sfxBus),r.start(i),r.stop(i+e+.02)}footstep(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this._noiseSource(),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=t?500:380;const r=this.ctx.createGain(),a=t?.16:.09;r.gain.setValueAtTime(a,e),r.gain.exponentialRampToValueAtTime(.001,e+.09),n.connect(i),i.connect(r),r.connect(this.sfxBus),n.start(e),n.stop(e+.12)}land(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(50,t+.12);const n=this.ctx.createGain();n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.sfxBus),e.start(t),e.stop(t+.16),this.footstep(!0)}hitmarker(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="square",n.frequency.value=t?2200:1500;const i=this.ctx.createGain();i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(i),i.connect(this.sfxBus),n.start(e),n.stop(e+.06)}killConfirm(){if(!this.ctx)return;const t=this.ctx.currentTime;[660,880].forEach((e,n)=>{const i=this.ctx.createOscillator();i.type="triangle",i.frequency.value=e;const r=this.ctx.createGain(),a=t+n*.07;r.gain.setValueAtTime(1e-4,a),r.gain.exponentialRampToValueAtTime(.14,a+.01),r.gain.exponentialRampToValueAtTime(.001,a+.12),i.connect(r),r.connect(this.sfxBus),i.start(a),i.stop(a+.14)})}playerHurt(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(90,t+.18);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=700;const i=this.ctx.createGain();i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(i),i.connect(this.sfxBus),e.start(t),e.stop(t+.24)}heartbeat(){if(!this.ctx)return;const t=this.ctx.currentTime;[0,.16].forEach((e,n)=>{const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(n===0?62:52,t+e);const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t+e),r.gain.exponentialRampToValueAtTime(n===0?.4:.28,t+e+.015),r.gain.exponentialRampToValueAtTime(.001,t+e+.12),i.connect(r),r.connect(this.sfxBus),i.start(t+e),i.stop(t+e+.14)})}explosion(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this._spatial(t,1.4,160),i=this._noiseSource(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(3e3,e),r.frequency.exponentialRampToValueAtTime(120,e+.9);const a=this.ctx.createGain();a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(.001,e+1.1),i.connect(r),r.connect(a),a.connect(n),i.start(e),i.stop(e+1.2);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(70,e),o.frequency.exponentialRampToValueAtTime(28,e+.8);const l=this.ctx.createGain();l.gain.setValueAtTime(1.1,e),l.gain.exponentialRampToValueAtTime(.001,e+.9),o.connect(l),l.connect(n),o.start(e),o.stop(e+1)}grenadeBounce(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this._spatial(t,.5,60),i=this.ctx.createOscillator();i.type="triangle",i.frequency.setValueAtTime(700+Math.random()*200,e),i.frequency.exponentialRampToValueAtTime(300,e+.06);const r=this.ctx.createGain();r.gain.setValueAtTime(.4,e),r.gain.exponentialRampToValueAtTime(.001,e+.08),i.connect(r),r.connect(n),i.start(e),i.stop(e+.1)}grenadePin(){this._click(2e3,.04,.3)}pickup(t){if(!this.ctx)return;const e=this.ctx.currentTime;(t==="health"?[520,780]:[440,660]).forEach((i,r)=>{const a=this.ctx.createOscillator();a.type="sine",a.frequency.value=i;const o=this.ctx.createGain(),l=e+r*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.16,l+.015),o.gain.exponentialRampToValueAtTime(.001,l+.18),a.connect(o),o.connect(this.sfxBus),a.start(l),a.stop(l+.2)})}waveStart(){if(!this.ctx)return;const t=this.ctx.currentTime;[196,262,330].forEach((e,n)=>{const i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.value=e;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=1200;const a=this.ctx.createGain(),o=t+n*.16;a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.18,o+.03),a.gain.exponentialRampToValueAtTime(.001,o+.5),i.connect(r),r.connect(a),a.connect(this.sfxBus),i.start(o),i.stop(o+.55)})}waveClear(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1046].forEach((e,n)=>{const i=this.ctx.createOscillator();i.type="triangle",i.frequency.value=e;const r=this.ctx.createGain(),a=t+n*.11;r.gain.setValueAtTime(1e-4,a),r.gain.exponentialRampToValueAtTime(.15,a+.02),r.gain.exponentialRampToValueAtTime(.001,a+.35),i.connect(r),r.connect(this.sfxBus),i.start(a),i.stop(a+.4)})}gameOver(){if(!this.ctx)return;const t=this.ctx.currentTime;[330,262,196,131].forEach((e,n)=>{const i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.value=e;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=900;const a=this.ctx.createGain(),o=t+n*.28;a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.16,o+.04),a.gain.exponentialRampToValueAtTime(.001,o+.7),i.connect(r),r.connect(a),a.connect(this.sfxBus),i.start(o),i.stop(o+.75)})}ricochet(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this._spatial(t,.35,50),i=this.ctx.createOscillator();i.type="sine";const r=1800+Math.random()*1500;i.frequency.setValueAtTime(r,e),i.frequency.exponentialRampToValueAtTime(r*.35,e+.14);const a=this.ctx.createGain();a.gain.setValueAtTime(.25,e),a.gain.exponentialRampToValueAtTime(.001,e+.15),i.connect(a),a.connect(n),i.start(e),i.stop(e+.17)}startAmbient(){if(!this.ctx||this._ambientNodes.length)return;const t=this._noiseSource(),e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=260,e.Q.value=.5;const n=this.ctx.createGain();n.gain.value=.045;const i=this.ctx.createOscillator();i.frequency.value=.07;const r=this.ctx.createGain();r.gain.value=.02,i.connect(r),r.connect(n.gain),t.connect(e),e.connect(n),n.connect(this.master),t.start(),i.start(),this._ambientNodes=[t,i]}stopAmbient(){this._ambientNodes.forEach(t=>{try{t.stop()}catch{}}),this._ambientNodes=[]}}new E(0,1,0);function Th(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");if(s==="bullet"){const i=e.createRadialGradient(32,32,0,32,32,30);i.addColorStop(0,"rgba(10,8,6,0.95)"),i.addColorStop(.4,"rgba(20,16,12,0.7)"),i.addColorStop(1,"rgba(20,16,12,0)"),e.fillStyle=i,e.fillRect(0,0,64,64)}else{const i=e.createRadialGradient(32,32,0,32,32,30);i.addColorStop(0,"rgba(90,4,4,0.9)"),i.addColorStop(.5,"rgba(70,4,4,0.55)"),i.addColorStop(1,"rgba(70,4,4,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),e.fillStyle="rgba(60,2,2,0.7)";for(let r=0;r<6;r++){const a=Math.random()*Math.PI*2,o=10+Math.random()*16;e.beginPath(),e.ellipse(32+Math.cos(a)*o,32+Math.sin(a)*o,3+Math.random()*4,2,a,0,7),e.fill()}}return new ya(t)}class lx{constructor(t,e){this.scene=t,this.audio=e,this.tracers=[],this.shells=[],this.impacts=[],this.decals=[],this.explosions=[],this.smokePuffs=[],this.decalMatBullet=new ni({map:Th("bullet"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.decalMatBlood=new ni({map:Th("blood"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.tracerGeo=new Ae(.006,.006,1,5,1,!0),this.tracerGeo.rotateX(Math.PI/2),this.tracerGeo.translate(0,0,-.5),this.tracerMat=new ni({color:16773824,transparent:!0,opacity:.9,blending:Mi,depthWrite:!1}),this.shellGeo=new Ae(.006,.006,.025,6),this.shellMat=new wt({color:13214282,roughness:.3,metalness:.9}),this.sparkMat=new Os({color:16765562,size:.05,transparent:!0,blending:Mi,depthWrite:!1}),this.dustMat=new Os({color:11049080,size:.09,transparent:!0,opacity:.7,depthWrite:!1}),this.bloodMat=new Os({color:9049108,size:.06,transparent:!0,depthWrite:!1}),this.smokeTex=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const i=n.getContext("2d"),r=i.createRadialGradient(32,32,0,32,32,30);return r.addColorStop(0,"rgba(200,200,200,0.55)"),r.addColorStop(1,"rgba(200,200,200,0)"),i.fillStyle=r,i.fillRect(0,0,64,64),new ya(n)})(),this.smokeMat=new gu({map:this.smokeTex,transparent:!0,depthWrite:!1,opacity:.5})}ejectShell(t,e){const n=new ut(this.shellGeo,this.shellMat),r=e.model.position.clone().add(new E(.045,-.01,-.15)).clone();t.localToWorld(r),n.position.copy(r),n.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(n);const a=t.getWorldQuaternion(new Ge),l=new E(1,.3,0).applyQuaternion(a).multiplyScalar(1.2+Math.random()*.8).add(new E(0,1.6+Math.random(),0)).add(new E((Math.random()-.5)*.6,0,(Math.random()-.5)*.6));if(this.shells.push({mesh:n,vel:l,angVel:new E(Math.random()*12,Math.random()*12,Math.random()*12),life:4,bounced:0}),this.shells.length>40){const c=this.shells.shift();this.scene.remove(c.mesh)}}spawnTracer(t,e,n){const i=new ut(this.tracerGeo,this.tracerMat.clone());i.position.copy(t),i.scale.z=Math.min(n,40);const r=new Ge().setFromUnitVectors(new E(0,0,-1),e);i.quaternion.copy(r),this.scene.add(i),this.tracers.push({mesh:i,life:.06,maxLife:.06})}spawnImpact(t,e,n){const i=n==="blood"?14:10,r=n==="blood"?this.bloodMat:n==="flesh"?this.bloodMat:n==="metal"?this.sparkMat:this.dustMat,a=new Float32Array(i*3),o=[];for(let u=0;u<i;u++){a[u*3]=t.x,a[u*3+1]=t.y,a[u*3+2]=t.z;const h=new E((Math.random()-.5)*2,Math.random()*1.6,(Math.random()-.5)*2),d=e.clone().multiplyScalar(1.5+Math.random()*2.5).add(h.multiplyScalar(1.4));o.push(d)}const l=new ye;l.setAttribute("position",new on(a,3));const c=new xu(l,r.clone());if(c.material.transparent=!0,this.scene.add(c),this.impacts.push({points:c,velocities:o,life:.7,maxLife:.7,gravity:n==="spark"||n==="metal"?5:9}),n!=="spark"){const u=n==="blood"||n==="flesh"?this.decalMatBlood:this.decalMatBullet,h=n==="blood"||n==="flesh"?.35+Math.random()*.25:.12+Math.random()*.08,d=new ut(new xs(h,h),u.clone());if(d.position.copy(t).add(e.clone().multiplyScalar(.01)),d.lookAt(t.clone().add(e)),d.rotation.z=Math.random()*Math.PI*2,this.scene.add(d),this.decals.push({mesh:d,life:14}),this.decals.length>60){const f=this.decals.shift();this.scene.remove(f.mesh)}}(n==="metal"||n==="spark")&&this.audio.ricochet(t)}spawnSmoke(t,e=1){const n=new Rv(this.smokeMat.clone());n.position.copy(t),n.scale.setScalar(.3*e),this.scene.add(n),this.smokePuffs.push({spr:n,life:1.2,maxLife:1.2,grow:1.6*e,rise:.4+Math.random()*.3})}spawnExplosion(t){const e=new Ai(16757598,60,26,2);e.position.copy(t).add(new E(0,.5,0)),this.scene.add(e);const n=new ut(new ln(.3,12,10),new ni({color:16764794,transparent:!0,opacity:1,blending:Mi,depthWrite:!1}));n.position.copy(t).add(new E(0,.4,0)),this.scene.add(n),this.explosions.push({light:e,sphere:n,life:.4,maxLife:.4});for(let i=0;i<5;i++)setTimeout(()=>this.spawnSmoke(t.clone().add(new E((Math.random()-.5)*1.5,.3+Math.random(),(Math.random()-.5)*1.5)),2.4),i*90);this.spawnImpact(t.clone().add(new E(0,.3,0)),new E(0,1,0),"dust"),this.audio.explosion(t)}update(t){for(let n=this.tracers.length-1;n>=0;n--){const i=this.tracers[n];i.life-=t,i.mesh.material.opacity=Math.max(0,i.life/i.maxLife*.9),i.life<=0&&(this.scene.remove(i.mesh),this.tracers.splice(n,1))}const e=9.8;for(let n=this.shells.length-1;n>=0;n--){const i=this.shells[n];i.vel.y-=e*t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.rotation.x+=i.angVel.x*t,i.mesh.rotation.y+=i.angVel.y*t,i.mesh.rotation.z+=i.angVel.z*t,i.mesh.position.y<.02&&i.vel.y<0&&(i.bounced<2?(i.vel.y*=-.35,i.vel.x*=.5,i.vel.z*=.5,i.bounced++,i.mesh.position.y=.02):i.vel.set(0,0,0)),i.life-=t,i.life<=0&&(this.scene.remove(i.mesh),this.shells.splice(n,1))}for(let n=this.impacts.length-1;n>=0;n--){const i=this.impacts[n];i.life-=t;const r=i.points.geometry.attributes.position;for(let a=0;a<i.velocities.length;a++){const o=i.velocities[a];o.y-=i.gravity*t,r.array[a*3]+=o.x*t,r.array[a*3+1]+=o.y*t,r.array[a*3+2]+=o.z*t}r.needsUpdate=!0,i.points.material.opacity=Math.max(0,i.life/i.maxLife),i.life<=0&&(this.scene.remove(i.points),this.impacts.splice(n,1))}for(let n=this.decals.length-1;n>=0;n--){const i=this.decals[n];i.life-=t,i.life<2&&(i.mesh.material.opacity=Math.max(0,i.life/2)),i.life<=0&&(this.scene.remove(i.mesh),this.decals.splice(n,1))}for(let n=this.explosions.length-1;n>=0;n--){const i=this.explosions[n];i.life-=t;const r=1-i.life/i.maxLife;i.light.intensity=60*(1-r)*(1-r),i.sphere.scale.setScalar(1+r*9),i.sphere.material.opacity=Math.max(0,1-r*1.3),i.life<=0&&(this.scene.remove(i.light),this.scene.remove(i.sphere),this.explosions.splice(n,1))}for(let n=this.smokePuffs.length-1;n>=0;n--){const i=this.smokePuffs[n];i.life-=t;const r=1-i.life/i.maxLife;i.spr.scale.setScalar(.3+r*i.grow),i.spr.position.y+=i.rise*t,i.spr.material.opacity=Math.max(0,.5*(1-r)),i.life<=0&&(this.scene.remove(i.spr),this.smokePuffs.splice(n,1))}}}const cx={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new et(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},ft={gunmetal:new wt({color:2303530,roughness:.38,metalness:.85}),darkSteel:new wt({color:1513756,roughness:.45,metalness:.9}),polymer:new wt({color:2895667,roughness:.75,metalness:.15}),grip:new wt({color:1974307,roughness:.9,metalness:.05}),tan:new wt({color:9075292,roughness:.7,metalness:.1}),accent:new wt({color:12077614,roughness:.5,metalness:.3}),sightGlow:new wt({color:3211120,emissive:3211120,emissiveIntensity:2.2}),scopeGlass:new wt({color:663600,roughness:.1,metalness:.9}),brass:new wt({color:12097086,roughness:.35,metalness:.95}),glove:new wt({color:2500650,roughness:.85,metalness:.05}),gloveKnuckle:new wt({color:3356216,roughness:.7,metalness:.1}),sleeve:new wt({color:3751982,roughness:.92,metalness:.03}),skin:new wt({color:13081202,roughness:.72,metalness:.02}),skinDark:new wt({color:10909263,roughness:.75,metalness:.02}),nail:new wt({color:14202778,roughness:.4,metalness:.05})};function Yt(s,t,e,n,i=0,r=0,a=0,o=0,l=0,c=0){const u=new ut(new oe(s,t,e),n);return u.position.set(i,r,a),u.rotation.set(o,l,c),u}function je(s,t,e,n,i=0,r=0,a=0,o=0,l=0,c=0,u=12){const h=new ut(new Ae(s,t,e,u),n);return h.position.set(i,r,a),h.rotation.set(o,l,c),h}function Vs(s,t,e,n){const i=new ut(new Ae(t,e,s,8),n);return i.rotation.x=-Math.PI/2,i.position.z=-s/2,i}function hx(s,t,e,n,i){const r=new qt;r.position.set(s,.006,t),r.rotation.x=-(.25+n*.55),r.add(Vs(e*.44,.0115,.0108,ft.skin));const a=new ut(new ln(.0125,8,6),ft.skinDark);r.add(a);const o=new qt;o.position.z=-e*.44,o.rotation.x=-(.35+n*.75),o.add(Vs(e*.33,.0106,.0098,ft.skin));const l=new qt;l.position.z=-e*.33,l.rotation.x=-(.3+n*.7),l.add(Vs(e*.26,.0097,.0075,ft.skin));const c=new ut(new oe(.011,.004,.013),i||ft.nail);return c.position.set(0,.007,-e*.16),l.add(c),o.add(l),r.add(o),r}function Eh(s=1){const t=new qt,e=new ut(new Ae(.05,.075,.34,12),ft.sleeve);e.rotation.x=Math.PI/2,e.position.z=.2,t.add(e);const n=new ut(new ms(.052,.008,6,14),ft.sleeve);n.position.z=.04,t.add(n);const i=new ut(new Ae(.044,.05,.08,12),ft.skin);i.rotation.x=Math.PI/2,i.position.z=.02,t.add(i);const r=new ut(new oe(.088,.046,.1),ft.skin);r.position.set(-.002,0,-.05),t.add(r);const a=new ut(new ln(.045,10,8),ft.skin);a.scale.set(1,.55,.9),a.position.set(-.002,-.004,-.01),t.add(a);const o=new ut(new Ae(.015,.015,.086,8),ft.skinDark);o.rotation.z=Math.PI/2,o.position.set(-.002,.012,-.098),t.add(o);const l=[-.032,-.0105,.0105,.032],c=[.092,.1,.095,.078],u=[-.1,-.104,-.102,-.096];for(let g=0;g<4;g++)t.add(hx(l[g],u[g],c[g],s,ft.nail));const h=new qt;h.position.set(.05,-.004,-.02),h.rotation.set(.15,0,.9),h.add(Vs(.05,.014,.012,ft.skin));const d=new qt;d.position.z=-.05,d.rotation.x=-(.3+s*.35),d.add(Vs(.042,.012,.0085,ft.skin));const f=new ut(new oe(.012,.004,.013),ft.nail);return f.position.set(0,.008,-.026),d.add(f),h.add(d),t.add(h),t.traverse(g=>{g.isMesh&&(g.castShadow=!1,g.frustumCulled=!1)}),t}function Ta(s,t){const e=Eh();e.position.set(...t.left),t.leftRot&&e.rotation.set(...t.leftRot),(t.leftParent||s).add(e);const n=Eh();return n.position.set(...t.right),t.rightRot&&n.rotation.set(...t.rightRot),s.add(n),{left:e,right:n}}function ux(){const s=new qt,t=new qt;s.add(Yt(.055,.075,.46,ft.gunmetal,0,.015,-.02)),s.add(Yt(.05,.06,.3,ft.polymer,0,-.04,.02)),s.add(Yt(.06,.055,.34,ft.polymer,0,.02,-.42));for(let i=0;i<6;i++)s.add(Yt(.062,.008,.03,ft.darkSteel,0,.052,-.3-i*.05));s.add(je(.014,.014,.34,ft.darkSteel,0,.015,-.7,Math.PI/2)),s.add(je(.022,.022,.07,ft.darkSteel,0,.015,-.85,Math.PI/2)),s.add(Yt(.045,.05,.2,ft.polymer,0,0,.24)),s.add(Yt(.05,.09,.05,ft.grip,0,-.03,.32)),s.add(Yt(.035,.09,.045,ft.grip,0,-.095,.08,.25)),s.add(Yt(.008,.035,.008,ft.darkSteel,0,.075,-.55));const e=new ut(new ln(.005,6,6),ft.sightGlow);e.position.set(0,.095,-.55),s.add(e),s.add(Yt(.016,.03,.012,ft.darkSteel,-.014,.075,.12)),s.add(Yt(.016,.03,.012,ft.darkSteel,.014,.075,.12)),t.add(Yt(.042,.13,.075,ft.polymer,0,-.065,0,-.12)),t.add(Yt(.042,.08,.07,ft.polymer,0,-.155,.018,-.3)),t.position.set(0,-.07,-.06),s.add(t),s.add(Yt(.02,.015,.05,ft.darkSteel,.033,.04,.1)),s.add(Yt(.002,.03,.08,ft.brass,.029,.015,-.05));const n=Ta(s,{right:[0,-.085,.11],rightRot:[.42,0,0],left:[-.01,-.055,-.34],leftRot:[.22,0,-.15]});return{group:s,mag:t,muzzle:new E(0,.015,-.9),hands:n}}function dx(){const s=new qt,t=new qt;s.add(Yt(.042,.055,.24,ft.gunmetal,0,.02,-.05)),s.add(Yt(.038,.05,.2,ft.polymer,0,-.02,-.03)),s.add(je(.011,.011,.06,ft.darkSteel,0,.025,-.19,Math.PI/2)),s.add(Yt(.036,.1,.055,ft.grip,0,-.085,.055,.18)),s.add(Yt(.03,.03,.03,ft.darkSteel,0,-.035,-.11)),s.add(Yt(.008,.02,.008,ft.darkSteel,0,.055,-.16));const e=new ut(new ln(.004,6,6),ft.sightGlow);e.position.set(0,.068,-.16),s.add(e),s.add(Yt(.014,.018,.01,ft.darkSteel,-.011,.055,.06)),s.add(Yt(.014,.018,.01,ft.darkSteel,.011,.055,.06));for(let i=0;i<5;i++)s.add(Yt(.044,.04,.006,ft.darkSteel,0,.02,.045+i*.012));t.add(Yt(.028,.1,.045,ft.darkSteel,0,-.04,0)),t.position.set(0,-.09,.055),s.add(t);const n=Ta(s,{right:[0,-.07,.02],rightRot:[.55,0,0],left:[-.05,-.075,0],leftRot:[.5,.5,.1]});return{group:s,mag:t,muzzle:new E(0,.025,-.23),hands:n}}function fx(){const s=new qt,t=new qt;s.add(Yt(.055,.07,.36,ft.gunmetal,0,.01,.05)),s.add(je(.017,.017,.55,ft.darkSteel,0,.035,-.4,Math.PI/2)),s.add(je(.019,.019,.48,ft.gunmetal,0,-.015,-.36,Math.PI/2)),t.add(je(.03,.03,.16,ft.grip,0,0,0,Math.PI/2,0,0,8)),t.position.set(0,-.015,-.38),s.add(t),s.add(Yt(.05,.055,.22,ft.tan,0,-.005,.32)),s.add(Yt(.052,.1,.05,ft.tan,0,-.045,.42)),s.add(Yt(.035,.085,.045,ft.grip,0,-.085,.17,.3)),s.add(Yt(.008,.025,.008,ft.darkSteel,0,.062,-.62));const e=new ut(new ln(.006,6,6),ft.sightGlow);e.position.set(0,.078,-.62),s.add(e);for(let i=0;i<4;i++)s.add(je(.011,.011,.05,ft.accent,.035,.01,.14-i*.045,Math.PI/2,0,0,8));const n=Ta(s,{right:[0,-.075,.16],rightRot:[.45,0,0],left:[0,-.055,.02],leftRot:[.25,0,0],leftParent:t});return{group:s,mag:t,muzzle:new E(0,.035,-.68),hands:n}}function px(){const s=new qt,t=new qt;s.add(Yt(.05,.07,.44,ft.tan,0,0,.06)),s.add(Yt(.05,.1,.06,ft.tan,0,-.03,.34)),s.add(Yt(.052,.05,.34,ft.tan,0,-.005,-.3)),s.add(je(.016,.016,.6,ft.darkSteel,0,.02,-.68,Math.PI/2)),s.add(je(.028,.028,.1,ft.darkSteel,0,.02,-.95,Math.PI/2)),s.add(je(.032,.032,.22,ft.gunmetal,0,.085,-.05,Math.PI/2)),s.add(je(.04,.032,.05,ft.gunmetal,0,.085,-.17,Math.PI/2)),s.add(je(.036,.03,.04,ft.gunmetal,0,.085,.07,Math.PI/2));const e=new ut(new Nl(.036,16),ft.scopeGlass);e.position.set(0,.085,-.195),e.rotation.y=Math.PI,s.add(e),s.add(Yt(.012,.03,.03,ft.darkSteel,0,.05,-.05)),s.add(Yt(.012,.03,.03,ft.darkSteel,0,.05,.04)),s.add(je(.008,.008,.06,ft.darkSteel,.045,.02,.12,0,0,Math.PI/2,8));const n=new ut(new ln(.014,8,8),ft.darkSteel);n.position.set(.075,.02,.12),s.add(n),s.add(Yt(.035,.085,.045,ft.grip,0,-.08,.22,.28)),s.add(je(.006,.006,.14,ft.darkSteel,-.02,-.02,-.44,.5,0,.3,6)),s.add(je(.006,.006,.14,ft.darkSteel,.02,-.02,-.44,.5,0,-.3,6)),t.add(Yt(.038,.09,.08,ft.darkSteel,0,-.045,0)),t.position.set(0,-.04,-.02),s.add(t);const i=Ta(s,{right:[0,-.07,.2],rightRot:[.4,0,0],left:[0,-.04,-.28],leftRot:[.2,0,0]});return{group:s,mag:t,muzzle:new E(0,.02,-1),hands:i}}const mx=[{id:"rifle",name:"M4 KARABİNA",mode:"auto",modeLabel:"TAM OTOMATİK",damage:26,headshotMult:2.1,rpm:720,magSize:30,reserveStart:150,maxReserve:270,reloadTime:2.1,spreadHip:.028,spreadAds:.004,spreadMove:.03,recoilPitch:.011,recoilYaw:.004,kickback:.055,adsFovMult:.82,adsTime:.16,pellets:1,range:140,sound:"rifle",build:ux,hip:[.26,-.24,-.5],ads:[0,-.148,-.32],scope:!1},{id:"shotgun",name:"SPAS POMPALI",mode:"pump",modeLabel:"POMPALI",damage:13,headshotMult:1.6,rpm:68,magSize:6,reserveStart:30,maxReserve:48,reloadTime:2.6,spreadHip:.055,spreadAds:.038,spreadMove:.02,recoilPitch:.035,recoilYaw:.008,kickback:.13,adsFovMult:.88,adsTime:.19,pellets:8,range:40,sound:"shotgun",build:fx,hip:[.26,-.25,-.52],ads:[0,-.175,-.36],scope:!1},{id:"sniper",name:"AX-50 KESKİN",mode:"bolt",modeLabel:"SÜRGÜLÜ",damage:130,headshotMult:2,rpm:42,magSize:5,reserveStart:25,maxReserve:40,reloadTime:3,spreadHip:.08,spreadAds:5e-4,spreadMove:.05,recoilPitch:.05,recoilYaw:.01,kickback:.16,adsFovMult:.28,adsTime:.3,pellets:1,range:400,sound:"sniper",build:px,hip:[.26,-.26,-.55],ads:[0,-.02,-.3],scope:!0},{id:"pistol",name:"M9 TABANCA",mode:"semi",modeLabel:"YARI OTOMATİK",damage:34,headshotMult:2.4,rpm:400,magSize:15,reserveStart:75,maxReserve:120,reloadTime:1.5,spreadHip:.022,spreadAds:.005,spreadMove:.02,recoilPitch:.014,recoilYaw:.005,kickback:.05,adsFovMult:.9,adsTime:.12,pellets:1,range:70,sound:"pistol",build:dx,hip:[.24,-.23,-.45],ads:[0,-.135,-.3],scope:!1}];class gx{constructor(t,e,n){this.camera=t,this.audio=e,this.effects=n,this.rig=new qt,t.add(this.rig),this.vmLight=new Ai(13490406,3.4,2.4,2),this.vmLight.position.set(.18,.12,-.1),this.rig.add(this.vmLight);const i=new ks(10465476,.6);i.position.set(-.3,.4,.5),this.rig.add(i),this.rig.add(i.target),this.weapons=mx.map(o=>{const l=o.build();return l.group.visible=!1,l.group.traverse(c=>{c.isMesh&&(c.castShadow=!1,c.frustumCulled=!1)}),this.rig.add(l.group),{def:o,model:l.group,magMesh:l.mag,magHome:l.mag.position.clone(),muzzleLocal:l.muzzle,leftHand:l.hands?l.hands.left:null,leftHandHome:l.hands?l.hands.left.position.clone():null,animateHand:!!l.hands&&o.id!=="shotgun",mag:o.magSize,reserve:o.reserveStart}}),this.index=0,this.current=this.weapons[0],this.current.model.visible=!0,this.cooldown=0,this.reloading=!1,this.reloadT=0,this.reloadStagePlayed=[!1,!1,!1],this.pumping=0,this.switching=0,this.switchTarget=-1,this.adsAmount=0,this.wantAds=!1,this.triggerHeld=!1,this.semiReady=!0,this.swayPos=new E,this.swayRot=new ge,this.bobPhase=0,this.kick=0,this.recoilRot=0,this.throwT=0,this.flashLight=new Ai(16757598,0,7,2),this.rig.add(this.flashLight);const r=new Ma(.045,.16,8,1,!0),a=new ni({color:16767392,transparent:!0,opacity:0,blending:Mi,depthWrite:!1,side:An});this.flashMesh=new ut(r,a),this.flashMesh.rotation.x=Math.PI/2,this.rig.add(this.flashMesh),this.flashTime=0,this.onShot=null,this.onRecoil=null,this.onAmmoChange=null}get def(){return this.current.def}totalReserve(){return this.current.reserve}addReserve(t,e){for(const n of this.weapons)(t==="all"||n.def.id===t)&&(n.reserve=Math.min(n.def.maxReserve,n.reserve+(t==="all"?Math.ceil(n.def.magSize*1.5):e)));this.onAmmoChange&&this.onAmmoChange()}switchTo(t){if(!(t===this.index||t<0||t>=this.weapons.length)){if(this.switching>0){this.switchTarget=t;return}this.switchTarget=t,this.switching=.36,this.reloading=!1,this.audio.weaponSwitch()}}cycle(t){this.switchTo((this.index+t+this.weapons.length)%this.weapons.length)}startReload(){const t=this.current;this.reloading||this.switching>0||t.mag>=t.def.magSize||t.reserve<=0||(this.reloading=!0,this.reloadT=0,this.reloadStagePlayed=[!1,!1,!1])}setAds(t){this.wantAds=t}playThrow(){this.throwT=.55}setTrigger(t){this.triggerHeld=t,t||(this.semiReady=!0)}tryFire(t){const e=this.current,n=e.def;if(!this.triggerHeld||this.reloading||this.switching>0||this.pumping>0||this.cooldown>0)return null;if(n.mode==="semi"||n.mode==="pump"||n.mode==="bolt"){if(!this.semiReady)return null;this.semiReady=!1}if(e.mag<=0)return this.audio.dryFire(),this.cooldown=.25,e.reserve>0&&this.startReload(),null;e.mag--,this.cooldown=60/n.rpm,(n.mode==="pump"||n.mode==="bolt")&&(this.pumping=.55);let i=this.adsAmount>.6?n.spreadAds:n.spreadHip;t&&(i+=n.spreadMove*(1-this.adsAmount*.8));const r=new E;this.camera.getWorldPosition(r);const a=new E;this.camera.getWorldDirection(a);const o=[];for(let c=0;c<n.pellets;c++){const u=a.clone();u.x+=(Math.random()-.5)*2*i,u.y+=(Math.random()-.5)*2*i,u.z+=(Math.random()-.5)*2*i*.4,u.normalize(),o.push({origin:r.clone(),dir:u,def:n})}const l=1-this.adsAmount*.45;return this.onRecoil&&this.onRecoil(n.recoilPitch*l,(Math.random()-.5)*2*n.recoilYaw*l),this.kick=Math.min(.2,this.kick+n.kickback),this.recoilRot=Math.min(.3,this.recoilRot+n.recoilPitch*6),this.flashTime=.045,this.flashMesh.scale.set(.8+Math.random()*.7,.8+Math.random()*.7,.8+Math.random()*.6),this.flashMesh.rotation.z=Math.random()*Math.PI*2,this.audio.gunshot(n.sound),this.effects.ejectShell(this.camera,this.current),this.onAmmoChange&&this.onAmmoChange(),o}update(t,e){const n=this.current,i=n.def;if(this.cooldown=Math.max(0,this.cooldown-t),this.pumping>0){this.pumping=Math.max(0,this.pumping-t);const p=1-this.pumping/.55,y=Math.sin(Math.min(1,p)*Math.PI);i.mode==="pump"?(n.magMesh.position.z=n.magHome.z+y*.12,p>.4&&p<.5&&!this._pumpSnd&&(this.audio.reloadStage(2),this._pumpSnd=!0)):(n.model.rotation.z=y*.12,p>.35&&p<.45&&!this._pumpSnd&&(this.audio.reloadStage(2),this._pumpSnd=!0)),this.pumping===0&&(this._pumpSnd=!1,i.mode==="pump"&&n.magMesh.position.copy(n.magHome),n.model.rotation.z=0)}if(this.switching>0){this.switching=Math.max(0,this.switching-t);const p=.18;this.switching>p?this.rig.position.y=-((.36-this.switching)/p)*.35:(this.switchTarget>=0&&this.index!==this.switchTarget&&(this.current.model.visible=!1,this.index=this.switchTarget,this.current=this.weapons[this.index],this.current.model.visible=!0,this.onAmmoChange&&this.onAmmoChange()),this.rig.position.y=-(this.switching/p)*.35),this.switching===0&&(this.switchTarget=-1,this.rig.position.y=0)}if(this.reloading){this.reloadT+=t;const p=i.reloadTime,y=this.reloadT/p,_=n.magHome.y;if(y<.3){const x=y/.3;n.magMesh.position.y=_-x*.25,n.magMesh.rotation.x=-x*.5,!this.reloadStagePlayed[0]&&y>.08&&(this.audio.reloadStage(0),this.reloadStagePlayed[0]=!0)}else if(y<.65)n.magMesh.visible=!1;else if(y<.9){n.magMesh.visible=!0;const x=(y-.65)/.25;n.magMesh.position.y=_-(1-x)*.25,n.magMesh.rotation.x=-(1-x)*.5,!this.reloadStagePlayed[1]&&y>.72&&(this.audio.reloadStage(1),this.reloadStagePlayed[1]=!0)}else n.magMesh.position.y=_,n.magMesh.rotation.x=0,this.reloadStagePlayed[2]||(this.audio.reloadStage(2),this.reloadStagePlayed[2]=!0);if(n.leftHand&&n.animateHand){let x=0;y<.3?x=y/.3:y<.65?x=1:y<.92&&(x=1-(y-.65)/.27),n.leftHand.position.y=n.leftHandHome.y-x*.2,n.leftHand.position.z=n.leftHandHome.z+x*.28}if(this.rig.rotation.z=Math.sin(Math.min(1,y)*Math.PI)*.22,this.rig.rotation.x=Math.sin(Math.min(1,y)*Math.PI)*.12,this.reloadT>=p){const x=i.magSize-n.mag,C=Math.min(x,n.reserve);n.mag+=C,n.reserve-=C,this.reloading=!1,this.rig.rotation.set(0,0,0),n.magMesh.position.copy(n.magHome),n.magMesh.rotation.x=0,n.magMesh.visible=!0,n.leftHand&&n.leftHandHome&&n.leftHand.position.copy(n.leftHandHome),this.onAmmoChange&&this.onAmmoChange()}}else n.leftHand&&n.leftHandHome&&n.animateHand&&(n.leftHand.position.y+=(n.leftHandHome.y-n.leftHand.position.y)*Math.min(1,t*12),n.leftHand.position.z+=(n.leftHandHome.z-n.leftHand.position.z)*Math.min(1,t*12));const r=1/i.adsTime;this.wantAds&&!this.reloading&&this.switching===0?this.adsAmount=Math.min(1,this.adsAmount+t*r):this.adsAmount=Math.max(0,this.adsAmount-t*r*1.3);const a=this.adsAmount*this.adsAmount*(3-2*this.adsAmount),o=i.hip,l=i.ads,c=o[0]+(l[0]-o[0])*a,u=o[1]+(l[1]-o[1])*a,h=o[2]+(l[2]-o[2])*a,d=1-a*.85;this.swayPos.x+=(-e.lookDeltaX*.0016*d-this.swayPos.x)*Math.min(1,t*9),this.swayPos.y+=(e.lookDeltaY*.0013*d-this.swayPos.y)*Math.min(1,t*9),this.swayRot.z+=(-e.lookDeltaX*.0011*d-this.swayRot.z)*Math.min(1,t*8),this.swayRot.x+=(-e.lookDeltaY*9e-4*d-this.swayRot.x)*Math.min(1,t*8),e.grounded&&e.speed>.5&&(this.bobPhase+=t*(4.5+e.speed*.9));const f=(.006+e.speed*.0016)*(1-a*.9),g=Math.sin(this.bobPhase)*f,v=Math.abs(Math.cos(this.bobPhase))*f*1.15;this.kick=Math.max(0,this.kick-t*.55),this.recoilRot=Math.max(0,this.recoilRot-t*1.8);const m=this.current.model;if(m.position.set(c+this.swayPos.x+g,u+this.swayPos.y-v,h+this.kick),m.rotation.set(this.swayRot.x-this.recoilRot,0,this.swayRot.z),this.pumping>0&&i.mode==="bolt"&&(m.rotation.z+=Math.sin((1-this.pumping/.55)*Math.PI)*.12),this.throwT>0){this.throwT=Math.max(0,this.throwT-t);const p=1-this.throwT/.55,y=Math.sin(p*Math.PI);m.position.x-=y*.14,m.position.y-=y*.16,m.position.z+=y*.05,m.rotation.x+=y*.6,m.rotation.z-=y*.35}if(m.visible=!(i.scope&&this.adsAmount>.85)&&(this.switching===0||!0),this.flashTime>0){this.flashTime-=t;const p=this.flashTime>0,y=this.muzzleWorldLocal();this.flashMesh.position.copy(y),this.flashMesh.visible=p,this.flashMesh.material.opacity=p?.9:0,this.flashLight.position.copy(y),this.flashLight.intensity=p?26:0}else this.flashMesh.visible=!1,this.flashMesh.material.opacity=0,this.flashLight.intensity=0}muzzleWorldLocal(){const t=this.current;return t.muzzleLocal.clone().add(t.model.position)}currentFovMult(){const t=this.adsAmount*this.adsAmount*(3-2*this.adsAmount);return 1+(this.def.adsFovMult-1)*t}isScoped(){return this.def.scope&&this.adsAmount>.85}}const mo=1.75,vx=1.15,_x=.34,xx=22,yx=7.4,Mx=4.6,Sx=1.6,wx=.5,Tx=42,Ex=12;class bx{constructor(t,e,n){this.camera=t,this.world=e,this.audio=n,this.pos=new E(0,0,6),this.vel=new E,this.yaw=Math.PI,this.pitch=0,this.height=mo,this.targetHeight=mo,this.crouching=!1,this.grounded=!0,this.sprinting=!1,this.wasGrounded=!0,this.maxHp=100,this.hp=this.maxHp,this.regenDelay=0,this.dead=!1,this.sensitivity=1,this.baseFov=80,this.lookDeltaX=0,this.lookDeltaY=0,this.stepDist=0,this.bobT=0,this.jumpBuffer=0,this.coyote=0,this._wasJump=!1,this.onDamage=null,this.onDeath=null,this.input={forward:0,right:0,jump:!1,sprint:!1,crouch:!1}}applyMouseMovement(t,e){const n=this.sensitivity*.0022;this.yaw-=t*n,this.pitch-=e*n,this.pitch=Math.max(-Math.PI/2+.02,Math.min(Math.PI/2-.02,this.pitch)),this.lookDeltaX=t,this.lookDeltaY=e}takeDamage(t,e){this.dead||(this.hp=Math.max(0,this.hp-t),this.regenDelay=4.5,this.audio.playerHurt(),this.onDamage&&this.onDamage(t,e),this.hp<=0&&(this.dead=!0,this.onDeath&&this.onDeath()))}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}update(t,e){const n=!!e.crouch;this.crouching=n,this.targetHeight=n?vx:mo,this.height+=(this.targetHeight-this.height)*Math.min(1,t*10),this.sprinting=!!e.sprint&&!n&&(e.forward||0)>0;const i=new E(Math.sin(this.yaw),0,Math.cos(this.yaw)),r=new E(Math.sin(this.yaw+Math.PI/2),0,Math.cos(this.yaw+Math.PI/2)),a=new E;a.addScaledVector(i,-(e.forward||0)),a.addScaledVector(r,e.right||0),a.lengthSq()>0&&a.normalize();let o=Mx;n?o*=wx:this.sprinting&&(o*=Sx);const l=a.multiplyScalar(o),c=new E(this.vel.x,0,this.vel.z),u=l.clone().sub(c),d=(a.lengthSq()>0?Tx:Ex)*t;u.length()>d&&u.setLength(d),c.add(u),this.vel.x=c.x,this.vel.z=c.z;const f=!!e.jump;f&&!this._wasJump&&(this.jumpBuffer=.12),this._wasJump=f,this.jumpBuffer=Math.max(0,this.jumpBuffer-t),this.coyote=this.grounded?.1:Math.max(0,this.coyote-t),this.jumpBuffer>0&&this.coyote>0&&(this.vel.y=yx*(n?1.08:1),this.grounded=!1,this.jumpBuffer=0,this.coyote=0,this.audio.footstep(!0)),this.grounded||(this.vel.y-=xx*t),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.pos.y+=this.vel.y*t,this.pos.y<=0?(!this.grounded&&this.vel.y<-6&&this.audio.land(),this.pos.y=0,this.vel.y=0,this.grounded=!0):this.grounded=!1,ea(this.pos,_x,this.height,this.world.colliders);const g=Math.hypot(this.vel.x,this.vel.z);if(this.grounded&&g>.6){this.stepDist+=g*t;const m=this.sprinting?2.2:n?3.6:2.8;this.stepDist>m&&(this.stepDist=0,this.audio.footstep(this.sprinting))}else this.stepDist=0;this.regenDelay>0?this.regenDelay-=t:this.hp<this.maxHp&&!this.dead&&(this.hp=Math.min(this.maxHp,this.hp+t*8));const v=this.height-.12;this.camera.position.set(this.pos.x,this.pos.y+v,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.speed=g}consumeLookDelta(){const t={x:this.lookDeltaX,y:this.lookDeltaY};return this.lookDeltaX=0,this.lookDeltaY=0,t}getEyePosition(t){return t.set(this.pos.x,this.pos.y+this.height-.12,this.pos.z)}}function Ax(s){const t=new Map,e=new Map,n=s.clone();return Iu(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=t.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Iu(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Iu(s.children[n],t.children[n],e)}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var un=Uint8Array,ss=Uint16Array,Rx=Int32Array,Du=new un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Uu=new un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Cx=new un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Nu=function(s,t){for(var e=new ss(31),n=0;n<31;++n)e[n]=t+=1<<s[n-1];for(var i=new Rx(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)i[r]=r-e[n]<<5|n;return{b:e,r:i}},Fu=Nu(Du,2),Ou=Fu.b,Px=Fu.r;Ou[28]=258,Px[258]=28;var Lx=Nu(Uu,0),Ix=Lx.b,ul=new ss(32768);for(var de=0;de<32768;++de){var ti=(de&43690)>>1|(de&21845)<<1;ti=(ti&52428)>>2|(ti&13107)<<2,ti=(ti&61680)>>4|(ti&3855)<<4,ul[de]=((ti&65280)>>8|(ti&255)<<8)>>1}var Hs=function(s,t,e){for(var n=s.length,i=0,r=new ss(t);i<n;++i)s[i]&&++r[s[i]-1];var a=new ss(t);for(i=1;i<t;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(e){o=new ss(1<<t);var l=15-t;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=t-s[i],h=a[s[i]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[ul[h]>>l]=c}else for(o=new ss(n),i=0;i<n;++i)s[i]&&(o[i]=ul[a[s[i]-1]++]>>15-s[i]);return o},ir=new un(288);for(var de=0;de<144;++de)ir[de]=8;for(var de=144;de<256;++de)ir[de]=9;for(var de=256;de<280;++de)ir[de]=7;for(var de=280;de<288;++de)ir[de]=8;var Bu=new un(32);for(var de=0;de<32;++de)Bu[de]=5;var Dx=Hs(ir,9,1),Ux=Hs(Bu,5,1),go=function(s){for(var t=s[0],e=1;e<s.length;++e)s[e]>t&&(t=s[e]);return t},vn=function(s,t,e){var n=t/8|0;return(s[n]|s[n+1]<<8)>>(t&7)&e},vo=function(s,t){var e=t/8|0;return(s[e]|s[e+1]<<8|s[e+2]<<16)>>(t&7)},Nx=function(s){return(s+7)/8|0},Fx=function(s,t,e){return(e==null||e>s.length)&&(e=s.length),new un(s.subarray(t,e))},Ox=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_n=function(s,t,e){var n=new Error(t||Ox[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,_n),!e)throw n;return n},Bx=function(s,t,e,n){var i=s.length,r=0;if(!i||t.f&&!t.l)return e||new un(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new un(i*3));var c=function(se){var L=e.length;if(se>L){var fe=new un(Math.max(L*2,se));fe.set(e),e=fe}},u=t.f||0,h=t.p||0,d=t.b||0,f=t.l,g=t.d,v=t.m,m=t.n,p=i*8;do{if(!f){u=vn(s,h,1);var y=vn(s,h+1,3);if(h+=3,y)if(y==1)f=Dx,g=Ux,v=9,m=5;else if(y==2){var b=vn(s,h,31)+257,A=vn(s,h+10,15)+4,I=b+vn(s,h+5,31)+1;h+=14;for(var w=new un(I),M=new un(19),P=0;P<A;++P)M[Cx[P]]=vn(s,h+P*3,7);h+=A*3;for(var O=go(M),z=(1<<O)-1,W=Hs(M,O,1),P=0;P<I;){var X=W[vn(s,h,z)];h+=X&15;var _=X>>4;if(_<16)w[P++]=_;else{var H=0,Y=0;for(_==16?(Y=3+vn(s,h,3),h+=2,H=w[P-1]):_==17?(Y=3+vn(s,h,7),h+=3):_==18&&(Y=11+vn(s,h,127),h+=7);Y--;)w[P++]=H}}var G=w.subarray(0,b),ht=w.subarray(b);v=go(G),m=go(ht),f=Hs(G,v,1),g=Hs(ht,m,1)}else _n(1);else{var _=Nx(h)+4,x=s[_-4]|s[_-3]<<8,C=_+x;if(C>i){l&&_n(0);break}o&&c(d+x),e.set(s.subarray(_,C),d),t.b=d+=x,t.p=h=C*8,t.f=u;continue}if(h>p){l&&_n(0);break}}o&&c(d+131072);for(var vt=(1<<v)-1,j=(1<<m)-1,rt=h;;rt=h){var H=f[vo(s,h)&vt],lt=H>>4;if(h+=H&15,h>p){l&&_n(0);break}if(H||_n(2),lt<256)e[d++]=lt;else if(lt==256){rt=h,f=null;break}else{var F=lt-254;if(lt>264){var P=lt-257,K=Du[P];F=vn(s,h,(1<<K)-1)+Ou[P],h+=K}var at=g[vo(s,h)&j],Q=at>>4;at||_n(3),h+=at&15;var ht=Ix[Q];if(Q>3){var K=Uu[Q];ht+=vo(s,h)&(1<<K)-1,h+=K}if(h>p){l&&_n(0);break}o&&c(d+131072);var Rt=d+F;if(d<ht){var It=r-ht,Ct=Math.min(ht,Rt);for(It+d<0&&_n(3);d<Ct;++d)e[d]=n[It+d]}for(;d<Rt;++d)e[d]=e[d-ht]}}t.l=f,t.p=rt,t.b=d,t.f=u,f&&(u=1,t.m=v,t.d=g,t.n=m)}while(!u);return d!=e.length&&a?Fx(e,0,d):e.subarray(0,d)},zx=new un(0),kx=function(s,t){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&_n(6,"invalid zlib data"),(s[1]>>5&1)==1&&_n(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Vx(s,t){return Bx(s.subarray(kx(s),-4),{i:2},t,t)}var Hx=typeof TextDecoder<"u"&&new TextDecoder,Gx=0;try{Hx.decode(zx,{stream:!0}),Gx=1}catch{}function zu(s,t,e){const n=e.length-s-1;if(t>=e[n])return n-1;if(t<=e[s])return s;let i=s,r=n,a=Math.floor((i+r)/2);for(;t<e[a]||t>=e[a+1];)t<e[a]?r=a:i=a,a=Math.floor((i+r)/2);return a}function Wx(s,t,e,n){const i=[],r=[],a=[];i[0]=1;for(let o=1;o<=e;++o){r[o]=t-n[s+1-o],a[o]=n[s+o]-t;let l=0;for(let c=0;c<o;++c){const u=a[c+1],h=r[o-c],d=i[c]/(u+h);i[c]=l+u*d,l=h*d}i[o]=l}return i}function Xx(s,t,e,n){const i=zu(s,n,t),r=Wx(i,n,s,t),a=new Jt(0,0,0,0);for(let o=0;o<=s;++o){const l=e[i-s+o],c=r[o],u=l.w*c;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*c}return a}function qx(s,t,e,n,i){const r=[];for(let h=0;h<=e;++h)r[h]=0;const a=[];for(let h=0;h<=n;++h)a[h]=r.slice(0);const o=[];for(let h=0;h<=e;++h)o[h]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=e;++h){l[h]=t-i[s+1-h],c[h]=i[s+h]-t;let d=0;for(let f=0;f<h;++f){const g=c[f+1],v=l[h-f];o[h][f]=g+v;const m=o[f][h-1]/o[h][f];o[f][h]=d+g*m,d=v*m}o[h][h]=d}for(let h=0;h<=e;++h)a[0][h]=o[h][e];for(let h=0;h<=e;++h){let d=0,f=1;const g=[];for(let v=0;v<=e;++v)g[v]=r.slice(0);g[0][0]=1;for(let v=1;v<=n;++v){let m=0;const p=h-v,y=e-v;h>=v&&(g[f][0]=g[d][0]/o[y+1][p],m=g[f][0]*o[p][y]);const _=p>=-1?1:-p,x=h-1<=y?v-1:e-h;for(let b=_;b<=x;++b)g[f][b]=(g[d][b]-g[d][b-1])/o[y+1][p+b],m+=g[f][b]*o[p+b][y];h<=y&&(g[f][v]=-g[d][v-1]/o[y+1][h],m+=g[f][v]*o[h][y]),a[v][h]=m;const C=d;d=f,f=C}}let u=e;for(let h=1;h<=n;++h){for(let d=0;d<=e;++d)a[h][d]*=u;u*=e-h}return a}function Yx(s,t,e,n,i){const r=i<s?i:s,a=[],o=zu(s,n,t),l=qx(o,n,s,r,t),c=[];for(let u=0;u<e.length;++u){const h=e[u].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,c[u]=h}for(let u=0;u<=r;++u){const h=c[o-s].clone().multiplyScalar(l[u][0]);for(let d=1;d<=s;++d)h.add(c[o-s+d].clone().multiplyScalar(l[u][d]));a[u]=h}for(let u=r+1;u<=i+1;++u)a[u]=new Jt(0,0,0);return a}function Kx(s,t){let e=1;for(let i=2;i<=s;++i)e*=i;let n=1;for(let i=2;i<=t;++i)n*=i;for(let i=2;i<=s-t;++i)n*=i;return e/n}function jx(s){const t=s.length,e=[],n=[];for(let r=0;r<t;++r){const a=s[r];e[r]=new E(a.x,a.y,a.z),n[r]=a.w}const i=[];for(let r=0;r<t;++r){const a=e[r].clone();for(let o=1;o<=r;++o)a.sub(i[r-o].clone().multiplyScalar(Kx(r,o)*n[o]));i[r]=a.divideScalar(n[0])}return i}function Zx(s,t,e,n,i){const r=Yx(s,t,e,n,i);return jx(r)}class $x extends Tn{constructor(t,e,n,i,r){super(),this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new Jt(o.x,o.y,o.z,o.w)}}getPoint(t,e=new E){const n=e,i=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Xx(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(t,e=new E){const n=e,i=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),r=Zx(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Wt,Se,Ke;class Jx extends bi{constructor(t){super(t)}load(t,e,n,i){const r=this,a=r.path===""?U_.extractUrlBase(t):r.path,o=new E_(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(l){try{e(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t,e){if(sy(t))Wt=new iy().parse(t);else{const i=Gu(t);if(!ry(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Ah(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Ah(i));Wt=new ny().parse(i)}const n=new A_(this.manager).setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);return new Qx(n,this.manager).parse(Wt)}}class Qx{constructor(t,e){this.textureLoader=t,this.manager=e}parse(){Se=this.parseConnections();const t=this.parseImages(),e=this.parseTextures(t),n=this.parseMaterials(e),i=this.parseDeformers(),r=new ty().parse(i);return this.parseScene(i,r,n),Ke}parseConnections(){const t=new Map;return"Connections"in Wt&&Wt.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];t.has(i)||t.set(i,{parents:[],children:[]});const o={ID:r,relationship:a};t.get(i).parents.push(o),t.has(r)||t.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};t.get(r).children.push(l)}),t}parseImages(){const t={},e={};if("Video"in Wt.Objects){const n=Wt.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(t[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(n[i]);e[r.RelativeFilename||r.Filename]=c}}}}for(const n in t){const i=t[n];e[i]!==void 0?t[n]=e[i]:t[n]=t[n].split("\\").pop()}return t}parseImage(t){const e=t.Content,n=t.RelativeFilename||t.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof e=="string")return"data:"+r+";base64,"+e;{const a=new Uint8Array(e);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(t){const e=new Map;if("Texture"in Wt.Objects){const n=Wt.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],t);e.set(parseInt(i),r)}}return e}parseTexture(t,e){const n=this.loadTexture(t,e);n.ID=t.id,n.name=t.attrName;const i=t.WrapModeU,r=t.WrapModeV,a=i!==void 0?i.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?wi:Vn,n.wrapT=o===0?wi:Vn,"Scaling"in t){const l=t.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in t){const l=t.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(t,e){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=t.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,t.RelativeFilename),new Ue;const a=r.path;a||r.setPath(this.textureLoader.path);const o=Se.get(t.id).children;let l;o!==void 0&&o.length>0&&e[o[0].ID]!==void 0&&(l=e[o[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&r.setPath(void 0));const c=r.load(l);return r.setPath(a),c}parseMaterials(t){const e=new Map;if("Material"in Wt.Objects){const n=Wt.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],t);r!==null&&e.set(parseInt(i),r)}}return e}parseMaterial(t,e){const n=t.id,i=t.attrName;let r=t.ShadingModel;if(typeof r=="object"&&(r=r.value),!Se.has(n))return null;const a=this.parseParameters(t,e,n);let o;switch(r.toLowerCase()){case"phong":o=new uo;break;case"lambert":o=new d_;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new uo;break}return o.setValues(a),o.name=i,o}parseParameters(t,e,n){const i={};t.BumpFactor&&(i.bumpScale=t.BumpFactor.value),t.Diffuse?i.color=new St().fromArray(t.Diffuse.value).convertSRGBToLinear():t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(i.color=new St().fromArray(t.DiffuseColor.value).convertSRGBToLinear()),t.DisplacementFactor&&(i.displacementScale=t.DisplacementFactor.value),t.Emissive?i.emissive=new St().fromArray(t.Emissive.value).convertSRGBToLinear():t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(i.emissive=new St().fromArray(t.EmissiveColor.value).convertSRGBToLinear()),t.EmissiveFactor&&(i.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),t.Opacity&&(i.opacity=parseFloat(t.Opacity.value)),i.opacity<1&&(i.transparent=!0),t.ReflectionFactor&&(i.reflectivity=t.ReflectionFactor.value),t.Shininess&&(i.shininess=t.Shininess.value),t.Specular?i.specular=new St().fromArray(t.Specular.value).convertSRGBToLinear():t.SpecularColor&&t.SpecularColor.type==="Color"&&(i.specular=new St().fromArray(t.SpecularColor.value).convertSRGBToLinear());const r=this;return Se.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=r.getTexture(e,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(e,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(e,a.ID),i.map!==void 0&&(i.map.colorSpace=Be);break;case"DisplacementColor":i.displacementMap=r.getTexture(e,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(e,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Be);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(e,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(e,a.ID),i.envMap!==void 0&&(i.envMap.mapping=ia,i.envMap.colorSpace=Be);break;case"SpecularColor":i.specularMap=r.getTexture(e,a.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Be);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(e,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(t,e){return"LayeredTexture"in Wt.Objects&&e in Wt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),e=Se.get(e).children[0].ID),t.get(e)}parseDeformers(){const t={},e={};if("Deformer"in Wt.Objects){const n=Wt.Objects.Deformer;for(const i in n){const r=n[i],a=Se.get(parseInt(i));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,t[i]=o}else if(r.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),e[i]=o}}}return{skeletons:t,morphTargets:e}}parseSkeleton(t,e){const n=[];return t.children.forEach(function(i){const r=e[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new Mt().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(t,e){const n=[];for(let i=0;i<t.children.length;i++){const r=t.children[i],a=e[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=Se.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(t,e,n){Ke=new qt;const i=this.parseModels(t.skeletons,e,n),r=Wt.Objects.Model,a=this;i.forEach(function(l){const c=r[l.ID];a.setLookAtProperties(l,c),Se.get(l.ID).parents.forEach(function(h){const d=i.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&Ke.add(l)}),this.bindSkeleton(t.skeletons,e,i),this.addGlobalSceneSettings(),Ke.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Vu(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new ey().parse();Ke.children.length===1&&Ke.children[0].isGroup&&(Ke.children[0].animations=o,Ke=Ke.children[0]),Ke.animations=o}parseModels(t,e,n){const i=new Map,r=Wt.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=Se.get(o);let u=this.buildSkeleton(c,t,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,e,n);break;case"NurbsCurve":u=this.createCurve(c,e);break;case"LimbNode":case"Root":u=new al;break;case"Null":default:u=new qt;break}u.name=l.attrName?$t.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=o}this.getTransformData(u,l),i.set(o,u)}return i}buildSkeleton(t,e,n,i){let r=null;return t.parents.forEach(function(a){for(const o in e){const l=e[o];l.rawBones.forEach(function(c,u){if(c.ID===a.ID){const h=r;r=new al,r.matrixWorld.copy(c.transformLink),r.name=i?$t.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(t){let e,n;if(t.children.forEach(function(i){const r=Wt.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)e=new ue;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:e=new Ze(u,c,r,a),h!==null&&e.setFocalLength(h);break;case 1:e=new _a(-o/2,o/2,l/2,-l/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),e=new ue;break}}return e}createLight(t){let e,n;if(t.children.forEach(function(i){const r=Wt.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)e=new ue;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new St().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:e=new Ai(r,a,o,l);break;case 1:e=new ks(r,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=He.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=He.degToRad(n.OuterAngle.value),u=Math.max(u,1)),e=new P_(r,a,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),e=new Ai(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(e.castShadow=!0)}return e}createMesh(t,e,n){let i,r=null,a=null;const o=[];return t.children.forEach(function(l){e.has(l.ID)&&(r=e.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new uo({name:bi.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new Pv(r,a),i.normalizeSkinWeights()):i=new ut(r,a),i}createCurve(t,e){const n=t.children.reduce(function(r,a){return e.has(a.ID)&&(r=e.get(a.ID)),r},null),i=new _u({name:bi.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Dv(n,i)}getTransformData(t,e){const n={};"InheritType"in e&&(n.inheritType=parseInt(e.InheritType.value)),"RotationOrder"in e?n.eulerOrder=Hu(e.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in e&&(n.translation=e.Lcl_Translation.value),"PreRotation"in e&&(n.preRotation=e.PreRotation.value),"Lcl_Rotation"in e&&(n.rotation=e.Lcl_Rotation.value),"PostRotation"in e&&(n.postRotation=e.PostRotation.value),"Lcl_Scaling"in e&&(n.scale=e.Lcl_Scaling.value),"ScalingOffset"in e&&(n.scalingOffset=e.ScalingOffset.value),"ScalingPivot"in e&&(n.scalingPivot=e.ScalingPivot.value),"RotationOffset"in e&&(n.rotationOffset=e.RotationOffset.value),"RotationPivot"in e&&(n.rotationPivot=e.RotationPivot.value),t.userData.transformData=n}setLookAtProperties(t,e){"LookAtProperty"in e&&Se.get(t.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Wt.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(a),Ke.add(t.target)):t.lookAt(new E().fromArray(a))}}})}bindSkeleton(t,e,n){const i=this.parsePoseNodes();for(const r in t){const a=t[r];Se.get(parseInt(a.ID)).parents.forEach(function(l){if(e.has(l.ID)){const c=l.ID;Se.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Pl(a.bones),i[h.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in Wt.Objects){const e=Wt.Objects.Pose;for(const n in e)if(e[n].attrType==="BindPose"&&e[n].NbPoseNodes>0){const i=e[n].PoseNode;Array.isArray(i)?i.forEach(function(r){t[r.Node]=new Mt().fromArray(r.Matrix.a)}):t[i.Node]=new Mt().fromArray(i.Matrix.a)}}return t}addGlobalSceneSettings(){if("GlobalSettings"in Wt){if("AmbientColor"in Wt.GlobalSettings){const t=Wt.GlobalSettings.AmbientColor.value,e=t[0],n=t[1],i=t[2];if(e!==0||n!==0||i!==0){const r=new St(e,n,i).convertSRGBToLinear();Ke.add(new D_(r,1))}}"UnitScaleFactor"in Wt.GlobalSettings&&(Ke.userData.unitScaleFactor=Wt.GlobalSettings.UnitScaleFactor.value)}}}class ty{constructor(){this.negativeMaterialIndices=!1}parse(t){const e=new Map;if("Geometry"in Wt.Objects){const n=Wt.Objects.Geometry;for(const i in n){const r=Se.get(parseInt(i)),a=this.parseGeometry(r,n[i],t);e.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),e}parseGeometry(t,e,n){switch(e.attrType){case"Mesh":return this.parseMeshGeometry(t,e,n);case"NurbsCurve":return this.parseNurbsGeometry(e)}}parseMeshGeometry(t,e,n){const i=n.skeletons,r=[],a=t.parents.map(function(h){return Wt.Objects.Model[h.ID]});if(a.length===0)return;const o=t.children.reduce(function(h,d){return i[d.ID]!==void 0&&(h=i[d.ID]),h},null);t.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Hu(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Vu(c);return this.genGeometry(e,o,r,u)}genGeometry(t,e,n,i){const r=new ye;t.attrName&&(r.name=t.attrName);const a=this.parseGeoNode(t,e),o=this.genBuffers(a),l=new jt(o.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new jt(o.colors,3)),e&&(r.setAttribute("skinIndex",new bl(o.weightsIndices,4)),r.setAttribute("skinWeight",new jt(o.vertexWeights,4)),r.FBX_Deformer=e),o.normal.length>0){const c=new Vt().getNormalMatrix(i),u=new jt(o.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new jt(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(h,d){h!==c&&(r.addGroup(u,d-u,c),c=h,u=d)}),r.groups.length>0){const h=r.groups[r.groups.length-1],d=h.start+h.count;d!==o.materialIndex.length&&r.addGroup(d,o.materialIndex.length-d,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,t,n,i),r}parseGeoNode(t,e){const n={};if(n.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],n.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(n.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(n.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(n.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){n.uv=[];let i=0;for(;t.LayerElementUV[i];)t.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(t.LayerElementUV[i])),i++}return n.weightTable={},e!==null&&(n.skeleton=e,e.rawBones.forEach(function(i,r){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[o]})})})),n}genBuffers(t){const e={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],o=[],l=[],c=[],u=[],h=[];const d=this;return t.vertexIndices.forEach(function(f,g){let v,m=!1;f<0&&(f=f^-1,m=!0);let p=[],y=[];if(a.push(f*3,f*3+1,f*3+2),t.color){const _=Gr(g,n,f,t.color);l.push(_[0],_[1],_[2])}if(t.skeleton){if(t.weightTable[f]!==void 0&&t.weightTable[f].forEach(function(_){y.push(_.weight),p.push(_.id)}),y.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const _=[0,0,0,0],x=[0,0,0,0];y.forEach(function(C,b){let A=C,I=p[b];x.forEach(function(w,M,P){if(A>w){P[M]=A,A=w;const O=_[M];_[M]=I,I=O}})}),p=_,y=x}for(;y.length<4;)y.push(0),p.push(0);for(let _=0;_<4;++_)u.push(y[_]),h.push(p[_])}if(t.normal){const _=Gr(g,n,f,t.normal);o.push(_[0],_[1],_[2])}t.material&&t.material.mappingType!=="AllSame"&&(v=Gr(g,n,f,t.material)[0],v<0&&(d.negativeMaterialIndices=!0,v=0)),t.uv&&t.uv.forEach(function(_,x){const C=Gr(g,n,f,_);c[x]===void 0&&(c[x]=[]),c[x].push(C[0]),c[x].push(C[1])}),i++,m&&(d.genFace(e,t,a,v,o,l,c,u,h,i),n++,i=0,a=[],o=[],l=[],c=[],u=[],h=[])}),e}getNormalNewell(t){const e=new E(0,0,0);for(let n=0;n<t.length;n++){const i=t[n],r=t[(n+1)%t.length];e.x+=(i.y-r.y)*(i.z+r.z),e.y+=(i.z-r.z)*(i.x+r.x),e.z+=(i.x-r.x)*(i.y+r.y)}return e.normalize(),e}getNormalTangentAndBitangent(t){const e=this.getNormalNewell(t),i=(Math.abs(e.z)>.5?new E(0,1,0):new E(0,0,1)).cross(e).normalize(),r=e.clone().cross(i).normalize();return{normal:e,tangent:i,bitangent:r}}flattenVertex(t,e,n){return new et(t.dot(e),t.dot(n))}genFace(t,e,n,i,r,a,o,l,c,u){let h;if(u>3){const d=[],f=e.baseVertexPositions||e.vertexPositions;for(let p=0;p<n.length;p+=3)d.push(new E(f[n[p]],f[n[p+1]],f[n[p+2]]));const{tangent:g,bitangent:v}=this.getNormalTangentAndBitangent(d),m=[];for(const p of d)m.push(this.flattenVertex(p,g,v));h=Ol.triangulateShape(m,[])}else h=[[0,1,2]];for(const[d,f,g]of h)t.vertex.push(e.vertexPositions[n[d*3]]),t.vertex.push(e.vertexPositions[n[d*3+1]]),t.vertex.push(e.vertexPositions[n[d*3+2]]),t.vertex.push(e.vertexPositions[n[f*3]]),t.vertex.push(e.vertexPositions[n[f*3+1]]),t.vertex.push(e.vertexPositions[n[f*3+2]]),t.vertex.push(e.vertexPositions[n[g*3]]),t.vertex.push(e.vertexPositions[n[g*3+1]]),t.vertex.push(e.vertexPositions[n[g*3+2]]),e.skeleton&&(t.vertexWeights.push(l[d*4]),t.vertexWeights.push(l[d*4+1]),t.vertexWeights.push(l[d*4+2]),t.vertexWeights.push(l[d*4+3]),t.vertexWeights.push(l[f*4]),t.vertexWeights.push(l[f*4+1]),t.vertexWeights.push(l[f*4+2]),t.vertexWeights.push(l[f*4+3]),t.vertexWeights.push(l[g*4]),t.vertexWeights.push(l[g*4+1]),t.vertexWeights.push(l[g*4+2]),t.vertexWeights.push(l[g*4+3]),t.weightsIndices.push(c[d*4]),t.weightsIndices.push(c[d*4+1]),t.weightsIndices.push(c[d*4+2]),t.weightsIndices.push(c[d*4+3]),t.weightsIndices.push(c[f*4]),t.weightsIndices.push(c[f*4+1]),t.weightsIndices.push(c[f*4+2]),t.weightsIndices.push(c[f*4+3]),t.weightsIndices.push(c[g*4]),t.weightsIndices.push(c[g*4+1]),t.weightsIndices.push(c[g*4+2]),t.weightsIndices.push(c[g*4+3])),e.color&&(t.colors.push(a[d*3]),t.colors.push(a[d*3+1]),t.colors.push(a[d*3+2]),t.colors.push(a[f*3]),t.colors.push(a[f*3+1]),t.colors.push(a[f*3+2]),t.colors.push(a[g*3]),t.colors.push(a[g*3+1]),t.colors.push(a[g*3+2])),e.material&&e.material.mappingType!=="AllSame"&&(t.materialIndex.push(i),t.materialIndex.push(i),t.materialIndex.push(i)),e.normal&&(t.normal.push(r[d*3]),t.normal.push(r[d*3+1]),t.normal.push(r[d*3+2]),t.normal.push(r[f*3]),t.normal.push(r[f*3+1]),t.normal.push(r[f*3+2]),t.normal.push(r[g*3]),t.normal.push(r[g*3+1]),t.normal.push(r[g*3+2])),e.uv&&e.uv.forEach(function(v,m){t.uvs[m]===void 0&&(t.uvs[m]=[]),t.uvs[m].push(o[m][d*2]),t.uvs[m].push(o[m][d*2+1]),t.uvs[m].push(o[m][f*2]),t.uvs[m].push(o[m][f*2+1]),t.uvs[m].push(o[m][g*2]),t.uvs[m].push(o[m][g*2+1])})}addMorphTargets(t,e,n,i){if(n.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Wt.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(t,e,l,i,o.name)})})}genMorphGeometry(t,e,n,i,r){const a=e.Vertices!==void 0?e.Vertices.a:[],o=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=t.attributes.position.count*3,h=new Float32Array(u);for(let v=0;v<c.length;v++){const m=c[v]*3;h[m]=l[v*3],h[m+1]=l[v*3+1],h[m+2]=l[v*3+2]}const d={vertexIndices:o,vertexPositions:h,baseVertexPositions:a},f=this.genBuffers(d),g=new jt(f.vertex,3);g.name=r||n.attrName,g.applyMatrix4(i),t.morphAttributes.position.push(g)}parseNormals(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in t?r=t.NormalIndex.a:"NormalsIndex"in t&&(r=t.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:e,referenceType:n}}parseUVs(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.UV.a;let r=[];return n==="IndexToDirect"&&(r=t.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:e,referenceType:n}}parseVertexColors(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Colors.a;let r=[];n==="IndexToDirect"&&(r=t.ColorIndex.a);for(let a=0,o=new St;a<i.length;a+=4)o.fromArray(i,a).convertSRGBToLinear().toArray(i,a);return{dataSize:4,buffer:i,indices:r,mappingType:e,referenceType:n}}parseMaterialIndices(t){const e=t.MappingInformationType,n=t.ReferenceInformationType;if(e==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=t.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:e,referenceType:n}}parseNurbsGeometry(t){const e=parseInt(t.Order);if(isNaN(e))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new ye;const n=e-1,i=t.KnotVector.a,r=[],a=t.Points.a;for(let h=0,d=a.length;h<d;h+=4)r.push(new Jt().fromArray(a,h));let o,l;if(t.Form==="Closed")r.push(r[0]);else if(t.Form==="Periodic"){o=n,l=i.length-1-o;for(let h=0;h<n;++h)r.push(r[h])}const u=new $x(n,i,r,o,l).getPoints(r.length*12);return new ye().setFromPoints(u)}}class ey{parse(){const t=[],e=this.parseClips();if(e!==void 0)for(const n in e){const i=e[n],r=this.addClip(i);t.push(r)}return t}parseClips(){if(Wt.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const e=this.parseAnimationLayers(t);return this.parseAnimStacks(e)}parseAnimationCurveNodes(){const t=Wt.Objects.AnimationCurveNode,e=new Map;for(const n in t){const i=t[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};e.set(r.id,r)}}return e}parseAnimationCurves(t){const e=Wt.Objects.AnimationCurve;for(const n in e){const i={id:e[n].id,times:e[n].KeyTime.a.map(ay),values:e[n].KeyValueFloat.a},r=Se.get(i.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?t.get(a).curves.x=i:o.match(/Y/)?t.get(a).curves.y=i:o.match(/Z/)?t.get(a).curves.z=i:o.match(/DeformPercent/)&&t.has(a)&&(t.get(a).curves.morph=i)}}}parseAnimationLayers(t){const e=Wt.Objects.AnimationLayer,n=new Map;for(const i in e){const r=[],a=Se.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(t.has(l.ID)){const u=t.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=Se.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=Wt.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?$t.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Ke.traverse(function(g){g.ID===d.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Mt),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),r[c]=f}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=Se.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,d=Se.get(h).parents[0].ID,f=Se.get(d).parents[0].ID,g=Se.get(f).parents[0].ID,v=Wt.Objects.Model[g],m={modelName:v.attrName?$t.sanitizeNodeName(v.attrName):"",morphName:Wt.Objects.Deformer[h].attrName};r[c]=m}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(t){const e=Wt.Objects.AnimationStack,n={};for(const i in e){const r=Se.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=t.get(r[0].ID);n[i]={name:e[i].attrName,layer:a}}return n}addClip(t){let e=[];const n=this;return t.layer.forEach(function(i){e=e.concat(n.generateTracks(i))}),new x_(t.name,-1,e)}generateTracks(t){const e=[];let n=new E,i=new E;if(t.transform&&t.transform.decompose(n,new Ge,i),n=n.toArray(),i=i.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const r=this.generateVectorTrack(t.modelName,t.T.curves,n,"position");r!==void 0&&e.push(r)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const r=this.generateRotationTrack(t.modelName,t.R.curves,t.preRotation,t.postRotation,t.eulerOrder);r!==void 0&&e.push(r)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const r=this.generateVectorTrack(t.modelName,t.S.curves,i,"scale");r!==void 0&&e.push(r)}if(t.DeformPercent!==void 0){const r=this.generateMorphTrack(t);r!==void 0&&e.push(r)}return e}generateVectorTrack(t,e,n,i){const r=this.getTimesForAllAxes(e),a=this.getKeyframeTrackValues(r,e,n);return new Js(t+"."+i,r,a)}generateRotationTrack(t,e,n,i,r){let a,o;if(e.x!==void 0&&e.y!==void 0&&e.z!==void 0){const h=this.interpolateRotations(e.x,e.y,e.z,r);a=h[0],o=h[1]}n!==void 0&&(n=n.map(He.degToRad),n.push(r),n=new ge().fromArray(n),n=new Ge().setFromEuler(n)),i!==void 0&&(i=i.map(He.degToRad),i.push(r),i=new ge().fromArray(i),i=new Ge().setFromEuler(i).invert());const l=new Ge,c=new ge,u=[];if(!o||!a)return new gs(t+".quaternion",[0],[0]);for(let h=0;h<o.length;h+=3)c.set(o[h],o[h+1],o[h+2],r),l.setFromEuler(c),n!==void 0&&l.premultiply(n),i!==void 0&&l.multiply(i),h>2&&new Ge().fromArray(u,(h-3)/3*4).dot(l)<0&&l.set(-l.x,-l.y,-l.z,-l.w),l.toArray(u,h/3*4);return new gs(t+".quaternion",a,u)}generateMorphTrack(t){const e=t.DeformPercent.curves.morph,n=e.values.map(function(r){return r/100}),i=Ke.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new $s(t.modelName+".morphTargetInfluences["+i+"]",e.times,n)}getTimesForAllAxes(t){let e=[];if(t.x!==void 0&&(e=e.concat(t.x.times)),t.y!==void 0&&(e=e.concat(t.y.times)),t.z!==void 0&&(e=e.concat(t.z.times)),e=e.sort(function(n,i){return n-i}),e.length>1){let n=1,i=e[0];for(let r=1;r<e.length;r++){const a=e[r];a!==i&&(e[n]=a,i=a,n++)}e=e.slice(0,n)}return e}getKeyframeTrackValues(t,e,n){const i=n,r=[];let a=-1,o=-1,l=-1;return t.forEach(function(c){if(e.x&&(a=e.x.times.indexOf(c)),e.y&&(o=e.y.times.indexOf(c)),e.z&&(l=e.z.times.indexOf(c)),a!==-1){const u=e.x.values[a];r.push(u),i[0]=u}else r.push(i[0]);if(o!==-1){const u=e.y.values[o];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=e.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(t,e,n,i){const r=[],a=[];r.push(t.times[0]),a.push(He.degToRad(t.values[0])),a.push(He.degToRad(e.values[0])),a.push(He.degToRad(n.values[0]));for(let o=1;o<t.values.length;o++){const l=[t.values[o-1],e.values[o-1],n.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(He.degToRad),u=[t.values[o],e.values[o],n.values[o]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(He.degToRad),d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const v=Math.max(...f)/180,m=new ge(...c,i),p=new ge(...h,i),y=new Ge().setFromEuler(m),_=new Ge().setFromEuler(p);y.dot(_)&&_.set(-_.x,-_.y,-_.z,-_.w);const x=t.times[o-1],C=t.times[o]-x,b=new Ge,A=new ge;for(let I=0;I<1;I+=1/v)b.copy(y.clone().slerp(_.clone(),I)),r.push(x+I*C),A.setFromQuaternion(b,i),a.push(A.x),a.push(A.y),a.push(A.z)}else r.push(t.times[o]),a.push(He.degToRad(t.values[o])),a.push(He.degToRad(e.values[o])),a.push(He.degToRad(n.values[o]))}return[r,a]}}class ny{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,e){this.currentProp=t,this.currentPropName=e}parse(t){this.currentIndent=0,this.allNodes=new ku,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const e=this,n=t.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+e.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+e.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(e.currentIndent-1)+"}}");l?e.parseNodeBegin(i,l):c?e.parseNodeProperty(i,c,n[++r]):u?e.popStack():i.match(/^[^\s\t}]/)&&e.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(t,e){const n=e[1].trim().replace(/^"/,"").replace(/"$/,""),i=e[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(t){let e=t[0];t[0]!==""&&(e=parseInt(t[0]),isNaN(e)&&(e=t[0]));let n="",i="";return t.length>1&&(n=t[1].replace(/^(\w+)::/,""),i=t[2]),{id:e,name:n,type:i}}parseNodeProperty(t,e,n){let i=e[1].replace(/^"/,"").replace(/"$/,"").trim(),r=e[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(t,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",r=[c,u],ly(r,h),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=xo(r))}parseNodePropertyContinued(t){const e=this.getCurrentNode();e.a+=t,t.slice(-1)!==","&&(e.a=xo(e.a))}parseNodeSpecialProperty(t,e,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=xo(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class iy{parse(t){const e=new bh(t);e.skip(23);const n=e.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new ku;for(;!this.endOfContent(e);){const r=this.parseNode(e,n);r!==null&&i.add(r.name,r)}return i}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,e){const n={},i=e>=7500?t.getUint64():t.getUint32(),r=e>=7500?t.getUint64():t.getUint32();e>=7500?t.getUint64():t.getUint32();const a=t.getUint8(),o=t.getString(a);if(i===0)return null;const l=[];for(let d=0;d<r;d++)l.push(this.parseProperty(t));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&t.getOffset()===i;i>t.getOffset();){const d=this.parseNode(t,e);d!==null&&this.parseSubNode(o,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(t,e,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(e[n.name]=n,n.a=i):e[n.name]=i}else if(t==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),e.connections===void 0&&(e.connections=[]),e.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){e[r]=n[r]});else if(t==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],e[i]={type:r,type2:a,flag:o,value:l}}else e[n.name]===void 0?typeof n.id=="number"?(e[n.name]={},e[n.name][n.id]=n):e[n.name]=n:n.name==="PoseNode"?(Array.isArray(e[n.name])||(e[n.name]=[e[n.name]]),e[n.name].push(n)):e[n.name][n.id]===void 0&&(e[n.name][n.id]=n)}parseProperty(t){const e=t.getString(1);let n;switch(e){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return n=t.getUint32(),t.getArrayBuffer(n);case"S":return n=t.getUint32(),t.getString(n);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=t.getUint32(),r=t.getUint32(),a=t.getUint32();if(r===0)switch(e){case"b":case"c":return t.getBooleanArray(i);case"d":return t.getFloat64Array(i);case"f":return t.getFloat32Array(i);case"i":return t.getInt32Array(i);case"l":return t.getInt64Array(i)}const o=Vx(new Uint8Array(t.getArrayBuffer(a))),l=new bh(o.buffer);switch(e){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+e)}}}class bh{constructor(t,e){this.dv=new DataView(t),this.offset=0,this.littleEndian=e!==void 0?e:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const e=[];for(let n=0;n<t;n++)e.push(this.getBoolean());return e}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt32());return e}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e&2147483648?(e=~e&4294967295,t=~t&4294967295,t===4294967295&&(e=e+1&4294967295),t=t+1&4294967295,-(e*4294967296+t)):e*4294967296+t}getInt64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt64());return e}getUint64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat32());return e}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat64());return e}getArrayBuffer(t){const e=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e}getString(t){const e=this.offset;let n=new Uint8Array(this.dv.buffer,e,t);this.skip(t);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,e,i)),this._textDecoder.decode(n)}}class ku{add(t,e){this[t]=e}}function sy(s){const t="Kaydara FBX Binary  \0";return s.byteLength>=t.length&&t===Gu(s,0,t.length)}function ry(s){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let e=0;function n(i){const r=s[i-1];return s=s.slice(e+i),e++,r}for(let i=0;i<t.length;++i)if(n(1)===t[i])return!1;return!0}function Ah(s){const t=/FBXVersion: (\d+)/,e=s.match(t);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function ay(s){return s/46186158e3}const oy=[];function Gr(s,t,e,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=t;break;case"ByVertice":i=e;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return cy(oy,n.buffer,r,a)}const _o=new ge,Ji=new E;function Vu(s){const t=new Mt,e=new Mt,n=new Mt,i=new Mt,r=new Mt,a=new Mt,o=new Mt,l=new Mt,c=new Mt,u=new Mt,h=new Mt,d=new Mt,f=s.inheritType?s.inheritType:0;if(s.translation&&t.setPosition(Ji.fromArray(s.translation)),s.preRotation){const M=s.preRotation.map(He.degToRad);M.push(s.eulerOrder||ge.DEFAULT_ORDER),e.makeRotationFromEuler(_o.fromArray(M))}if(s.rotation){const M=s.rotation.map(He.degToRad);M.push(s.eulerOrder||ge.DEFAULT_ORDER),n.makeRotationFromEuler(_o.fromArray(M))}if(s.postRotation){const M=s.postRotation.map(He.degToRad);M.push(s.eulerOrder||ge.DEFAULT_ORDER),i.makeRotationFromEuler(_o.fromArray(M)),i.invert()}s.scale&&r.scale(Ji.fromArray(s.scale)),s.scalingOffset&&o.setPosition(Ji.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(Ji.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Ji.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Ji.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const g=e.clone().multiply(n).multiply(i),v=new Mt;v.extractRotation(u);const m=new Mt;m.copyPosition(u);const p=m.clone().invert().multiply(u),y=v.clone().invert().multiply(p),_=r,x=new Mt;if(f===0)x.copy(v).multiply(g).multiply(y).multiply(_);else if(f===1)x.copy(v).multiply(y).multiply(g).multiply(_);else{const P=new Mt().scale(new E().setFromMatrixScale(h)).clone().invert(),O=y.clone().multiply(P);x.copy(v).multiply(g).multiply(O).multiply(_)}const C=c.clone().invert(),b=a.clone().invert();let A=t.clone().multiply(l).multiply(c).multiply(e).multiply(n).multiply(i).multiply(C).multiply(o).multiply(a).multiply(r).multiply(b);const I=new Mt().copyPosition(A),w=u.clone().multiply(I);return d.copyPosition(w),A=d.clone().multiply(x),A.premultiply(u.invert()),A}function Hu(s){s=s||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[s]}function xo(s){return s.split(",").map(function(e){return parseFloat(e)})}function Gu(s,t,e){return t===void 0&&(t=0),e===void 0&&(e=s.byteLength),new TextDecoder().decode(new Uint8Array(s,t,e))}function ly(s,t){for(let e=0,n=s.length,i=t.length;e<i;e++,n++)s[n]=t[e]}function cy(s,t,e,n){for(let i=e,r=0;i<n;i++,r++)s[r]=t[i];return s}const hy=1.82;function yo(s,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d");n.fillStyle=s,n.fillRect(0,0,128,128);for(let r=0;r<70;r++){n.fillStyle=t[r%t.length],n.globalAlpha=.55+Math.random()*.35;const a=Math.random()*128,o=Math.random()*128,l=6+Math.random()*16;n.beginPath(),n.ellipse(a,o,l,l*(.6+Math.random()*.5),Math.random()*3,0,7),n.fill()}n.globalAlpha=1;const i=new ya(e);return i.wrapS=i.wrapT=wi,i.colorSpace=Be,i}const Rh={assault:()=>yo("#3f4632",["#2c3122","#4b533b","#20241a","#5a624a"]),rusher:()=>yo("#5a2b26",["#3e1c19","#6e3a30","#241210","#7a4438"]),heavy:()=>yo("#4a4436",["#332f25","#5c5340","#211f18","#6b6250"])};let Wr=null;function uy(){if(Wr)return Wr;const s="/game/models/phoenix.fbx";return Wr=new Promise(t=>{try{new Jx().load(s,e=>{try{const n=dy(e);console.info("[enemy model] loaded"),t(n)}catch(n){console.warn("[enemy model] normalize failed, using fallback",n),t(null)}},void 0,e=>{console.warn("[enemy model] load failed, using fallback",e),t(null)})}catch(e){console.warn("[enemy model] loader threw, using fallback",e),t(null)}}),Wr}function dy(s){s.updateWorldMatrix(!0,!0);const t=new ai().setFromObject(s),e=new E;t.getSize(e);const n=e.y||1,i=hy/n;s.scale.setScalar(i),s.updateWorldMatrix(!0,!0);const r=new ai().setFromObject(s),a=new E;return r.getCenter(a),s.position.x-=a.x,s.position.z-=a.z,s.position.y-=r.min.y,s.traverse(o=>{(o.isMesh||o.isSkinnedMesh)&&(o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1)}),{root:s,forwardOffset:0}}const Le={cloth:new wt({color:3816755,roughness:.9,metalness:.05}),clothDark:new wt({color:2369055,roughness:.9}),vest:new wt({color:2895398,roughness:.85}),skin:new wt({color:13081202,roughness:.8}),helmet:new wt({color:2237471,roughness:.5,metalness:.3}),boot:new wt({color:1579034,roughness:.9}),gun:new wt({color:1776670,roughness:.5,metalness:.7}),visor:new wt({color:659220,roughness:.2,metalness:.6}),eyeGlow:new wt({color:16724e3,emissive:16719888,emissiveIntensity:1.4})},Ch={assault:{label:"ASKER",hp:1,speed:1,dmg:1,scale:1,acc:0,tex:"assault",tint:4936507},rusher:{label:"AKINCI",hp:.6,speed:1.55,dmg:.8,scale:.93,acc:-.06,tex:"rusher",tint:7223856},heavy:{label:"AĞIR",hp:2.1,speed:.72,dmg:1.45,scale:1.13,acc:.04,tex:"heavy",tint:6050624}};function fy(s){const t=Math.random(),e=Math.min(.28,.05+s*.03),n=Math.min(.4,.12+s*.035);return t<e?"heavy":t<e+n?"rusher":"assault"}function Ve(s,t,e,n){return new ut(new oe(s,t,e),n)}function py(){const s=new qt,t=new qt;t.position.y=.92,s.add(t),t.add(Ve(.34,.24,.2,Le.clothDark));const e=new qt;e.position.y=.24,t.add(e);const n=Ve(.38,.46,.24,Le.vest);n.position.y=.23,e.add(n);const i=Ve(.3,.28,.06,Le.clothDark);i.position.set(0,.28,-.15),e.add(i);const r=new qt;r.position.y=.48,e.add(r);const a=Ve(.2,.22,.2,Le.skin);a.position.y=.12,r.add(a);const o=new ut(new ln(.14,10,8,0,Math.PI*2,0,Math.PI*.62),Le.helmet);o.position.y=.2,r.add(o);const l=Ve(.16,.05,.03,Le.visor);l.position.set(0,.13,-.1),r.add(l);const c=Ve(.03,.02,.01,Le.eyeGlow);c.position.set(-.045,.13,-.115),r.add(c);const u=Ve(.03,.02,.01,Le.eyeGlow);u.position.set(.045,.13,-.115),r.add(u);function h(C){const b=new qt;b.position.set(C*.22,.4,0);const A=Ve(.09,.26,.09,Le.cloth);A.position.y=-.13,b.add(A);const I=new qt;I.position.y=-.26,b.add(I);const w=Ve(.075,.24,.075,Le.cloth);w.position.y=-.12,I.add(w);const M=Ve(.07,.08,.08,Le.skin);return M.position.y=-.24,I.add(M),e.add(b),{shoulder:b,elbow:I}}const d=h(-1),f=h(1),g=new qt;g.add(Ve(.05,.06,.55,Le.gun));const v=Ve(.045,.05,.16,Le.cloth);v.position.z=.33,g.add(v);const m=new ut(new Ae(.012,.012,.3,8),Le.gun);m.rotation.x=Math.PI/2,m.position.z=-.4,g.add(m);const p=Ve(.035,.16,.05,Le.gun);p.position.set(0,-.11,-.05),p.rotation.x=-.2,g.add(p),g.position.set(.02,-.14,-.15),g.rotation.y=Math.PI/2+.08,f.elbow.add(g),f.shoulder.rotation.x=-1.35,f.elbow.rotation.x=.3,d.shoulder.rotation.x=-1.1,d.shoulder.rotation.z=.35,d.elbow.rotation.x=1.15;function y(C){const b=new qt;b.position.set(C*.11,-.1,0);const A=Ve(.11,.32,.12,Le.clothDark);A.position.y=-.16,b.add(A);const I=new qt;I.position.y=-.32,b.add(I);const w=Ve(.095,.3,.1,Le.clothDark);w.position.y=-.15,I.add(w);const M=Ve(.11,.1,.18,Le.boot);return M.position.set(0,-.32,.04),I.add(M),t.add(b),{hip:b,knee:I}}const _=y(-1),x=y(1);return s.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0)}),{root:s,torso:e,neck:r,head:a,armL:d,armR:f,legL:_,legR:x,hips:t,rifleFlashAnchor:g}}const Qi={thigh:"x",calf:"x",arm:"x"},Me={IDLE:"idle",HUNT:"hunt",ALERT:"alert",COMBAT:"combat",SEARCH:"search",DEAD:"dead"};let my=0;class gy{constructor(t,e,n,i,r,a=1,o={}){this.id=my++,this.scene=t,this.world=e,this.effects=n,this.audio=i,this.difficulty=a,this.typeKey=o.type||"assault";const l=Ch[this.typeKey]||Ch.assault;if(this.typeCfg=l,o.template)this._buildFromModel(o.template,l),this.useModel=!0;else{const c=py();this.parts=c,this.model=c.root,this.headRef=c.head,this.chestRef=c.torso,this.rifleFlashAnchor=c.rifleFlashAnchor,this.useModel=!1}this.model.position.copy(r),t.add(this.model),this.pos=r.clone(),this.yaw=Math.random()*Math.PI*2,this.radius=.35,this.height=1.8,this.speed=(2.3+Math.random()*.6+a*.06)*l.speed,this.maxHp=(70+a*14)*l.hp,this.hp=this.maxHp,this.dmgMult=l.dmg,this.state=Me.HUNT,this.stuckT=0,this.detourT=0,this.detourDir=1,this.alertTimer=0,this.fireCooldown=0,this.burstLeft=0,this.burstPause=0,this.reposTimer=1+Math.random()*2,this.strafeDir=Math.random()<.5?-1:1,this.lastKnownPlayerPos=null,this.walkPhase=Math.random()*10,this.dead=!1,this.deathT=0,this.removeAfter=null,this.hitFlashT=0,this.accuracy=.55+Math.min(.3,a*.04)+l.acc,this.combatRange=34,this.giveUpSearchT=0,this.onPlayerHit=null,this.onDeath=null,this.onAlert=null}_buildFromModel(t,e){const n=Ax(t.root),i=new qt,r=new qt;r.rotation.y=t.forwardOffset,r.scale.setScalar(e.scale),r.add(n),i.add(r),this.model=i,this.inner=r;const a=(Rh[e.tex]||Rh.assault)(),o=new wt({map:a,color:16777215,roughness:.86,metalness:.08});n.traverse(x=>{(x.isMesh||x.isSkinnedMesh)&&(x.material=o,x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1)});const l={};let c=null,u=null,h=null,d=null,f=null;n.traverse(x=>{if(!x.isBone)return;const C=x.name.toLowerCase();C.includes("l_thigh")?l.lThigh=x:C.includes("r_thigh")?l.rThigh=x:C.includes("l_calf")?l.lCalf=x:C.includes("r_calf")?l.rCalf=x:C.includes("l_upperarm")?l.lArm=x:C.includes("r_upperarm")&&(l.rArm=x),C.includes("head")?h=x:C.includes("spine2")||C.includes("spine1")?(d=d||x,f=x):C.includes("spine")&&(f=f||x),C.includes("neck"),C.includes("weapon_bone")&&!C.includes("clip")&&!C.includes("hand")&&(c=x),C.includes("r_hand")&&(u=x)}),this.bones=l,this.rest={};for(const x of Object.keys(l))this.rest[x]=l[x].rotation.clone();this.spineBone=f||d,this.spineRest=this.spineBone?this.spineBone.rotation.clone():null,this.headRef=h||d||i,this.chestRef=d||f||i;const g=c||u,v=new qt,m=new wt({color:1381914,roughness:.5,metalness:.7}),p=new ut(new oe(.05,.09,.62),m),y=new ut(new Ae(.014,.014,.34,8),m);y.rotation.x=Math.PI/2,y.position.z=-.44;const _=new ut(new oe(.04,.18,.06),m);if(_.position.set(0,-.13,-.04),v.add(p,y,_),v.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.frustumCulled=!1)}),g){const x=1/(t.root.scale.x*e.scale||1);v.scale.setScalar(x),g.add(v),this.rifleFlashAnchor=v}else v.position.set(.25,1.3,-.3),i.add(v),this.rifleFlashAnchor=v}headWorldPos(t){return this.headRef.getWorldPosition(t)}chestWorldPos(t){return this.chestRef.getWorldPosition(t).add(new E(0,.05,0))}takeDamage(t,e,n,i){if(this.dead)return;this.hp-=t,this.hitFlashT=.15;const r=i.clone().multiplyScalar(-1);this.effects.spawnImpact(n,r,"blood"),this.hp<=0?this.die(i):(this.state=Me.COMBAT,this.reactStagger=.18)}die(t){this.dead=!0,this.state=Me.DEAD,this.deathT=0,this.fallAxis=new E(-t.z,0,t.x).normalize(),this.fallForward=Math.random()<.5,this.audio.killConfirm(),this.onDeath&&this.onDeath(this),this.removeAfter=6}canSeePlayer(t){const e=new E;if(this.headRef.getWorldPosition(e),e.distanceTo(t)>this.combatRange+6)return!1;const i=t.clone().sub(e).normalize(),a=new E(Math.sin(this.yaw),0,Math.cos(this.yaw)).angleTo(new E(i.x,0,i.z)),o=this.state===Me.IDLE?Math.PI*.35:Math.PI*.8;return a>o&&this.state!==Me.COMBAT?!1:!ax(e,t,this.world.colliders,.2,2.2)}alert(t){this.dead||(this.state===Me.IDLE||this.state===Me.HUNT)&&(this.state=Me.ALERT,this.lastKnownPlayerPos=t.clone(),this.alertTimer=2.5)}update(t,e,n,i){if(this.dead){this.updateDeath(t);return}const r=this.canSeePlayer(e),a=this.pos.distanceTo(e);r&&a<this.combatRange?(this.state!==Me.COMBAT&&this.onAlert&&this.onAlert(this.pos),this.state=Me.COMBAT,this.lastKnownPlayerPos=e.clone(),this.giveUpSearchT=3.5):this.state===Me.COMBAT?(this.state=Me.SEARCH,this.giveUpSearchT=3,this.lastKnownPlayerPos=e.clone()):this.state===Me.SEARCH?(this.giveUpSearchT-=t,this.giveUpSearchT<=0&&(this.state=Me.HUNT)):this.state===Me.ALERT&&(this.alertTimer-=t,this.alertTimer<=0&&(this.state=Me.HUNT));let o=null,l=null,c=this.speed;if(this.state===Me.COMBAT){const h=e.clone().sub(this.pos);h.y=0;const d=h.length();if(l=Math.atan2(h.x,h.z),this.reposTimer-=t,this.reposTimer<=0&&(this.strafeDir=Math.random()<.5?-1:1,this.reposTimer=1.2+Math.random()*1.8),d>this.combatRange*.7)o=e.clone(),c=this.speed*1.15;else if(d<8){const f=this.pos.clone().add(h.clone().normalize().multiplyScalar(-3)),g=new E(-h.z,0,h.x).normalize().multiplyScalar(this.strafeDir*3);o=f.add(g)}else{const f=new E(-h.z,0,h.x).normalize().multiplyScalar(this.strafeDir*4);o=this.pos.clone().add(f)}this.fireCooldown-=t,this.burstLeft>0?(this.burstPause-=t,this.burstPause<=0&&this.fireCooldown<=0&&(this.shootAt(e,n),this.burstLeft--,this.fireCooldown=.11+Math.random()*.04)):this.fireCooldown<=0&&(this.burstLeft=2+Math.floor(Math.random()*3),this.burstPause=0,this.fireCooldown=.9+Math.random()*1.1-this.difficulty*.05)}else this.state===Me.SEARCH&&this.lastKnownPlayerPos?(o=this.lastKnownPlayerPos,l=Math.atan2(o.x-this.pos.x,o.z-this.pos.z),c=this.speed,this.pos.distanceTo(o)<1.5&&(this.state=Me.HUNT)):(o=this.state===Me.ALERT&&this.lastKnownPlayerPos?this.lastKnownPlayerPos:e,c=this.speed*(this.state===Me.ALERT?.95:1),l=Math.atan2(o.x-this.pos.x,o.z-this.pos.z));let u=!1;if(o){const h=o.clone().sub(this.pos);if(h.y=0,h.length()>.4){if(h.normalize(),this.detourT>0){this.detourT-=t;const m=new E(-h.z,0,h.x).multiplyScalar(this.detourDir);h.addScaledVector(m,1.2).normalize()}for(const m of i){if(m===this||m.dead)continue;const p=this.pos.clone().sub(m.pos);p.y=0;const y=p.length();y<1.4&&y>.01&&h.add(p.normalize().multiplyScalar((1.4-y)*1.5))}h.normalize();const f=this.pos.x,g=this.pos.z;this.pos.addScaledVector(h,c*t),ea(this.pos,this.radius,this.height,this.world.colliders),Math.hypot(this.pos.x-f,this.pos.z-g)<c*t*.35?(this.stuckT+=t,this.stuckT>.5&&this.detourT<=0&&(this.detourT=.6+Math.random()*.4,this.detourDir=Math.random()<.5?-1:1)):this.stuckT=0,l===null&&(l=Math.atan2(h.x,h.z)),u=!0}else ea(this.pos,this.radius,this.height,this.world.colliders)}else ea(this.pos,this.radius,this.height,this.world.colliders);if(this.pos.y=0,l!==null){let h=l-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;this.yaw+=h*Math.min(1,t*8)}this.model.position.copy(this.pos),this.model.rotation.y=this.yaw,u&&(this.walkPhase+=t*c*3.2),this.useModel?this._animateModel(u):this._animateBox(u),this.hitFlashT>0&&(this.hitFlashT-=t)}_animateBox(t){const e=Math.sin(this.walkPhase)*(t?.55:0);this.parts.legL.hip.rotation.x=e,this.parts.legR.hip.rotation.x=-e,this.parts.legL.knee.rotation.x=Math.max(0,-e*.9),this.parts.legR.knee.rotation.x=Math.max(0,e*.9),this.parts.hips.position.y=.92+Math.abs(Math.cos(this.walkPhase))*(t?.02:0)}_animateModel(t){const e=this.bones,n=this.rest,i=t?1:0,r=Math.sin(this.walkPhase)*.5*i,a=Math.sin(this.walkPhase+Math.PI)*.5*i,o=(l,c,u,h)=>{l&&(l.rotation[u]=c[u]+h)};o(e.lThigh,n.lThigh,Qi.thigh,r),o(e.rThigh,n.rThigh,Qi.thigh,a),o(e.lCalf,n.lCalf,Qi.calf,Math.max(0,-r)*.9),o(e.rCalf,n.rCalf,Qi.calf,Math.max(0,-a)*.9),o(e.lArm,n.lArm,Qi.arm,a*.6),o(e.rArm,n.rArm,Qi.arm,r*.6),this.inner&&(this.inner.position.y=Math.abs(Math.cos(this.walkPhase))*.05*i)}shootAt(t,e){const n=new E;this.rifleFlashAnchor.getWorldPosition(n);const i=t.clone().add(new E(0,e?.1:.35,0)),r=i.clone().sub(n).normalize(),a=n.distanceTo(i),l=.02+(1-Math.max(.08,this.accuracy-a*.004))*.09;r.x+=(Math.random()-.5)*l,r.y+=(Math.random()-.5)*l*.6,r.z+=(Math.random()-.5)*l,r.normalize(),this.audio.gunshot("enemy",n),this.effects.spawnTracer(n,r,40);const u=t.clone().sub(n).dot(r);if(u>0&&n.clone().addScaledVector(r,u).distanceTo(t.clone().add(new E(0,.9,0)))<.5&&u<this.combatRange+10){const f=(6+Math.random()*6+this.difficulty*.8)*this.dmgMult;this.onPlayerHit&&this.onPlayerHit(f,n);return}if(Math.random()<.4){const h=t.clone().add(new E((Math.random()-.5)*2,Math.random()*1.5,(Math.random()-.5)*2));this.effects.spawnImpact(h,new E(0,1,0),"dust")}}updateDeath(t){this.deathT+=t;const e=Math.min(1,this.deathT/.5),n=e*(Math.PI/2)*(this.fallForward?1:-1);if(this.model.rotation.x=this.fallForward?n:0,this.model.rotation.z=this.fallForward?0:n,this.model.position.y=this.pos.y-e*.05,this.removeAfter!==null&&(this.removeAfter-=t,this.removeAfter<=1)){const i=Math.max(0,this.removeAfter);this.model.traverse(r=>{(r.isMesh||r.isSkinnedMesh)&&(r.material.transparent=!0,r.material.opacity=i)})}}get expired(){return this.dead&&this.removeAfter!==null&&this.removeAfter<=0}destroy(){this.scene.remove(this.model)}}const bt=s=>document.getElementById(s),vy=bt("app"),Wl=bt("hud"),_y=bt("crosshair"),Xr=bt("hitmarker"),Ph=bt("health-bar"),xy=bt("health-num"),Lh=bt("ammo-mag"),yy=bt("ammo-reserve"),My=bt("weapon-name"),Sy=bt("fire-mode"),wy=bt("grenade-count"),Ty=bt("reload-hint"),Ey=bt("wave-num"),by=bt("score-num"),Ay=bt("enemies-num"),dl=bt("minimap"),qr=bt("killfeed"),Wu=bt("compass-strip"),Ry=bt("compass"),Mo=bt("announce"),Cy=bt("announce-main"),Py=bt("announce-sub"),So=bt("hint");bt("damage-vignette");const Ly=bt("lowhp-vignette"),Yr=bt("screen-flash"),Iy=bt("scope-overlay"),Dy=bt("ads-reticle"),Ih=bt("loading"),sr=bt("menu-main"),Xu=bt("menu-controls"),Ea=bt("menu-settings"),Ts=bt("menu-pause"),rr=bt("menu-death"),wo=bt("set-sens"),Uy=bt("set-sens-val"),To=bt("set-fov"),Ny=bt("set-fov-val"),Eo=bt("set-vol"),Fy=bt("set-vol-val"),Dh=bt("set-quality"),Oy=bt("ds-score"),By=bt("ds-kills"),zy=bt("ds-hs"),ky=bt("ds-acc"),Vy=bt("death-wave-sub"),De=new Ev({antialias:!0,powerPreference:"high-performance"});De.setPixelRatio(Math.min(devicePixelRatio,2));De.setSize(innerWidth,innerHeight);De.shadowMap.enabled=!0;De.shadowMap.type=Bh;De.toneMapping=ml;De.toneMappingExposure=1.14;De.outputColorSpace=Be;vy.appendChild(De.domElement);const li=De.domElement,Qe=new bv,an=new Ze(80,innerWidth/innerHeight,.05,500);let Qs="high";const Ne=new ox,Si=new lx(Qe,Ne);let Cn=new rx(Qe,Qs);const ce=new gx(an,Ne,Si),zt=new bx(an,Cn,Ne);Qe.add(an);let qu=null;const Hy=uy().then(s=>{qu=s}).catch(()=>{}),Ci=new j_(De),Gy=new Z_(Qe,an);Ci.addPass(Gy);const Gs=new vs(new et(innerWidth,innerHeight),.42,.55,.86);Ci.addPass(Gs);const Wy={uniforms:{tDiffuse:{value:null},amount:{value:.55}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      float vig = 1.0 - smoothstep(0.35, 0.9, length(d)) * amount;
      c.rgb *= vig;
      gl_FragColor = c;
    }`},Xy=new Gl(Wy);Ci.addPass(Xy);const Yu=new Gl(cx),fa=()=>{const s=De.getPixelRatio();Yu.material.uniforms.resolution.value.set(1/(innerWidth*s),1/(innerHeight*s))};fa();Ci.addPass(Yu);Ci.addPass(new Q_);function Ku(){Qs==="low"?(De.setPixelRatio(1),Gs.enabled=!1,De.shadowMap.enabled=!1):Qs==="medium"?(De.setPixelRatio(Math.min(devicePixelRatio,1.5)),Gs.enabled=!0,De.shadowMap.enabled=!0):(De.setPixelRatio(Math.min(devicePixelRatio,2)),Gs.enabled=!0,De.shadowMap.enabled=!0),typeof fa=="function"&&fa()}Ku();addEventListener("resize",()=>{an.aspect=innerWidth/innerHeight,an.updateProjectionMatrix(),De.setSize(innerWidth,innerHeight),Ci.setSize(innerWidth,innerHeight),Gs.setSize(innerWidth,innerHeight),fa()});const Et={state:"menu",wave:0,score:0,kills:0,headshots:0,shotsFired:0,shotsHit:0,grenades:3,maxGrenades:3,grenadeCooldown:0,settingsReturnTo:"main"};let Xe=[],ls=[],ii=[],fl=0,ts="incoming",bo=0;const es={forward:0,right:0,jump:!1,sprint:!1,crouch:!1},zn={};function qn(s){s.classList.remove("hidden")}function $e(s){s.classList.add("hidden")}function ju(s,t,e=3e3){Cy.textContent=s,Py.textContent=t||"",Mo.classList.remove("show"),Mo.offsetWidth,Mo.classList.add("show")}function Ws(s,t=1400){So.textContent=s,So.classList.add("show"),clearTimeout(Ws._t),Ws._t=setTimeout(()=>So.classList.remove("show"),t)}function Zu(s,t){const e=document.createElement("div");for(e.className="kf-entry"+(t?" hs":""),e.innerHTML=`<span class="who">SEN</span> ${t?"➤ headshot ➤":"➤"} ${s}`,qr.appendChild(e),setTimeout(()=>e.remove(),3600);qr.children.length>5;)qr.removeChild(qr.firstChild)}const Uh=[];function qy(s){const t=new et(s.x-zt.pos.x,s.z-zt.pos.z);if(t.lengthSq()<1e-4)return;const n=Math.atan2(t.x,t.y)-zt.yaw;let i=Uh.find(r=>!r.busy);if(!i){const r=document.createElement("div");r.className="dmg-dir",Wl.appendChild(r),i={div:r,busy:!1},Uh.push(i)}i.busy=!0,i.div.style.transform=`rotate(${n}rad)`,i.div.style.opacity="1",i.div.style.transition="none",requestAnimationFrame(()=>{i.div.style.transition="opacity 0.9s ease",i.div.style.opacity="0"}),clearTimeout(i._t),i._t=setTimeout(()=>{i.busy=!1},950)}function Nh(s,t,e,n){const i=new E().subVectors(s,e),r=2*t.dot(i),a=i.dot(i)-n*n,o=r*r-4*a;if(o<0)return null;const l=(-r-Math.sqrt(o))/2;return l>0?l:null}function $u(){const s=ce.current,t=s.def;My.textContent=t.name,Sy.textContent=t.modeLabel,Lh.textContent=s.mag,yy.textContent=" / "+s.reserve,Lh.classList.toggle("low",s.mag<=Math.ceil(t.magSize*.25)),Ty.style.display=s.mag===0&&s.reserve>0&&!ce.reloading?"block":"none"}ce.onAmmoChange=$u;ce.onRecoil=(s,t)=>{zt.pitch=Math.max(-Math.PI/2+.02,Math.min(Math.PI/2-.02,zt.pitch+s)),zt.yaw+=t};function Yy(){const s=Math.max(0,zt.hp/zt.maxHp)*100;Ph.style.width=s+"%",Ph.classList.toggle("low",s<30),xy.textContent=Math.ceil(zt.hp),Ly.style.opacity=s<25?.4+.3*Math.abs(Math.sin(performance.now()/300)):0}function ba(){Ey.textContent=Et.wave,by.textContent=Et.score,Ay.textContent=Xe.filter(s=>!s.dead).length}function Xl(){wy.textContent=`✚ EL BOMBASI ×${Et.grenades} [G]`}const Ky=["K","KD","D","GD","G","GB","B","KB"],Ju=4;(function(){for(let t=-60;t<=420;t+=15){const e=document.createElement("div"),n=t%45===0;if(e.className="tick"+(n?" major":""),e.style.left=(t+60)*Ju+"px",n){const i=(t%360+360)%360/45;e.textContent=Ky[i]}else e.textContent="·";Wu.appendChild(e)}})();function jy(){let s=He.radToDeg(zt.yaw)%360;s<0&&(s+=360);const t=Ry.clientWidth||320;Wu.style.transform=`translateX(${t/2-(s+60)*Ju}px)`}const me=dl.getContext("2d"),Kr=55;function Zy(){const s=dl.width,t=dl.height;me.clearRect(0,0,s,t),me.fillStyle="rgba(6,10,14,0.4)",me.fillRect(0,0,s,t);const e=s/2/Kr;me.save(),me.translate(s/2,t/2),me.fillStyle="rgba(140,150,160,0.28)";for(const n of Cn.colliders){const i=(n.min.x+n.max.x)/2-zt.pos.x,r=(n.min.z+n.max.z)/2-zt.pos.z;if(Math.abs(i)>Kr+10||Math.abs(r)>Kr+10)continue;const a=(n.max.x-n.min.x)*e,o=(n.max.z-n.min.z)*e;me.fillRect(i*e-a/2,r*e-o/2,a,o)}for(const n of Xe){if(n.dead)continue;const i=n.pos.x-zt.pos.x,r=n.pos.z-zt.pos.z;Math.hypot(i,r)>Kr||(me.fillStyle=n.state==="combat"?"#ff4b3e":"#ffb340",me.beginPath(),me.arc(i*e,r*e,3,0,Math.PI*2),me.fill())}me.restore(),me.save(),me.translate(s/2,t/2),me.rotate(zt.yaw),me.fillStyle="#ffffff",me.beginPath(),me.moveTo(0,-7),me.lineTo(5,6),me.lineTo(-5,6),me.closePath(),me.fill(),me.restore()}function $y(s){const t=new W_;for(const e of s){Et.shotsFired++;const n=e.def;let i=n.range,r=null,a=null,o=!1,l=null,c=null,u=null;for(const f of Xe){if(f.dead)continue;const g=new E;f.headWorldPos(g);const v=new E;f.chestWorldPos(v);const m=Nh(e.origin,e.dir,g,.16);m!==null&&m<i&&(i=m,r="enemy",a=f,o=!0,l=e.origin.clone().addScaledVector(e.dir,m));const p=Nh(e.origin,e.dir,v,.32);p!==null&&p<i&&(i=p,r="enemy",a=f,o=!1,l=e.origin.clone().addScaledVector(e.dir,p))}t.set(e.origin,e.dir),t.far=n.range;const h=t.intersectObjects(Cn.raycastMeshes,!1);h.length&&h[0].distance<i&&(i=h[0].distance,r=h[0].object.userData.barrel?"barrel":"env",l=h[0].point,c=h[0].face?h[0].face.normal.clone().transformDirection(h[0].object.matrixWorld):e.dir.clone().negate(),u=h[0].object);const d=an.localToWorld(ce.muzzleWorldLocal().clone());if(Si.spawnTracer(d,e.dir,l?i:n.range*.6),r==="enemy"){Et.shotsHit++;const f=n.damage*(o?n.headshotMult:1),g=!a.dead;a.takeDamage(f,o,l,e.dir),Ne.hitmarker(o),Xr.classList.remove("show","kill"),Xr.offsetWidth,Xr.classList.add("show"),a.dead&&g&&(Xr.classList.add("kill"),Et.kills++,o&&Et.headshots++,Et.score+=o?150:100,Zu("DÜŞMAN",o),ba())}else if(r==="barrel"){const f=u.userData.barrel;Jy(f,n.damage),Si.spawnImpact(l,c,"metal")}else if(r==="env"){const f=u&&u.geometry&&u.geometry.type==="PlaneGeometry"?"dust":"metal";Si.spawnImpact(l,c,f)}}}function Jy(s,t){s.alive&&(s.hp-=t,s.hp<=0&&Qu(s))}function Qu(s){s.alive&&(Cn.removeBarrel(s),td(s.pos,7,90),Qy())}function Qy(){Yr.style.transition="none",Yr.style.opacity="0.85",requestAnimationFrame(()=>{Yr.style.transition="opacity 0.4s ease",Yr.style.opacity="0"})}function td(s,t,e){Si.spawnExplosion(s);const n=s.distanceTo(zt.pos.clone().add(new E(0,.9,0)));if(n<t){const i=e*(1-n/t);zt.takeDamage(i,s)}for(const i of Xe){if(i.dead)continue;const r=s.distanceTo(i.pos.clone().add(new E(0,.9,0)));if(r<t){const a=e*(1-r/t),o=!i.dead;i.takeDamage(a,!1,i.pos.clone().add(new E(0,.9,0)),s.clone().sub(i.pos).normalize()),i.dead&&o&&(Et.kills++,Et.score+=100,Zu("DÜŞMAN (patlama)",!1),ba())}}for(const i of Cn.barrels){if(!i.alive)continue;const r=s.distanceTo(i.pos);r<t*1.1&&r>.05&&setTimeout(()=>Qu(i),90+Math.random()*120)}}function tM(){if(Et.grenades<=0||Et.grenadeCooldown>0||ce.reloading||ce.switching>0)return;Et.grenades--,Et.grenadeCooldown=.6,Xl(),Ne.grenadePin(),ce.playThrow();const s=new E;an.getWorldDirection(s);const t=new E;an.getWorldPosition(t),t.addScaledVector(s,.4).add(new E(0,-.1,0));const e=s.clone().multiplyScalar(16).add(new E(0,4.2,0)),n=new E((Math.random()-.5)*16,(Math.random()-.5)*12,8+Math.random()*6);ls.push({pos:t,vel:e,spin:n,fuse:1.7,mesh:eM(t)})}function eM(s){const t=new qt,e=new ut(new ln(.072,12,10),new wt({color:3292971,roughness:.7,metalness:.25}));e.scale.y=1.18;const n=new wt({color:1975834,roughness:.85});for(const o of[.024,-.024]){const l=new ut(new ms(.07,.007,6,14),n);l.rotation.x=Math.PI/2,l.position.y=o,t.add(l)}const i=new ut(new ms(.072,.007,6,14),n);t.add(i);const r=new ut(new Ae(.03,.036,.045,8),new wt({color:6250326,roughness:.5,metalness:.6}));r.position.y=.088;const a=new ut(new oe(.016,.085,.03),new wt({color:9079424,roughness:.4,metalness:.7}));return a.position.set(.036,.07,0),t.add(e,r,a),t.position.copy(s),t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),Qe.add(t),t}function nM(s){Et.grenadeCooldown=Math.max(0,Et.grenadeCooldown-s);for(let t=ls.length-1;t>=0;t--){const e=ls[t];e.vel.y-=9.8*s,e.pos.addScaledVector(e.vel,s),e.pos.y<.08&&(e.pos.y=.08,e.vel.y<-1?(e.vel.y*=-.45,e.vel.x*=.7,e.vel.z*=.7,Ne.grenadeBounce(e.pos)):e.vel.y=0),Lu(e.pos,.08,.16,Cn.colliders,e.vel),e.mesh.position.copy(e.pos);const n=e.pos.y<.12?.25:1;e.mesh.rotation.x+=e.spin.x*s*n,e.mesh.rotation.y+=e.spin.y*s*n,e.mesh.rotation.z+=e.spin.z*s*n,e.fuse-=s,e.fuse<=0&&(Qe.remove(e.mesh),td(e.pos.clone(),6.5,130),ls.splice(t,1))}}function ed(s){Et.wave=s,ts="incoming",fl=s===1?1.2:2.6,ju(`DALGA ${s}`,"DÜŞMANLAR YAKLAŞIYOR")}function iM(){const s=3+Math.floor(Et.wave*1.7),t=1+(Et.wave-1)*.18,e=Cn.enemySpawns;for(let n=0;n<s;n++){const i=e[Math.floor(Math.random()*e.length)].clone();i.x+=(Math.random()-.5)*4,i.z+=(Math.random()-.5)*4;const r=new gy(Qe,Cn,Si,Ne,i,t,{template:qu,type:fy(Et.wave)});r.onPlayerHit=(a,o)=>{zt.takeDamage(a,o),qy(o)},r.onAlert=a=>{for(const o of Xe)o.dead||o.alert(a)},r.onDeath=a=>aM(a.pos.clone()),Xe.push(r)}Ne.waveStart(),ba()}function sM(s){ts==="incoming"?(fl-=s,fl<=0&&(iM(),ts="active")):ts==="active"?!Xe.some(e=>!e.dead)&&Xe.length>0&&(ts="clear",bo=3,Ne.waveClear(),ju("DALGA TEMİZLENDİ","Bir sonraki dalga hazırlanıyor…"),rM(),Et.grenades=Math.min(Et.maxGrenades,Et.grenades+1),Xl()):ts==="clear"&&(bo-=s,bo<=0&&(Xe=Xe.filter(t=>!t.expired),ed(Et.wave+1)))}function rM(){const s=Cn.enemySpawns,t=s[Math.floor(Math.random()*s.length)];zt.hp<75&&Fh(t.clone().add(new E(2,0,2)),"health"),Fh(t.clone().add(new E(-2,0,-2)),"ammo")}function Fh(s,t){const e=t==="health"?4972634:16764779,n=new ut(new Bl(.28,0),new wt({color:e,emissive:e,emissiveIntensity:.8,roughness:.3}));n.position.copy(s).add(new E(0,.6,0));const i=new Ai(e,3,5);i.position.copy(n.position),Qe.add(n,i),ii.push({mesh:n,light:i,kind:t,pos:n.position.clone(),t:0,ground:!1,ttl:1/0})}function aM(s){const t=Math.random();let e;if(t<.14)e="health";else if(t<.82)e="ammo";else return;const n=new qt;if(e==="health"){n.add(new ut(new oe(.34,.2,.32),new wt({color:14342874,roughness:.6})));const i=new wt({color:14170939,emissive:5902095,emissiveIntensity:.6,roughness:.5}),r=new ut(new oe(.2,.05,.07),i);r.position.y=.11;const a=new ut(new oe(.07,.05,.2),i);a.position.y=.11,n.add(r,a)}else{n.add(new ut(new oe(.4,.22,.26),new wt({color:4673583,roughness:.75,metalness:.2})));const i=new ut(new oe(.42,.06,.28),new wt({color:3620646,roughness:.75}));i.position.y=.13;const r=new ut(new oe(.1,.24,.28),new wt({color:13280830,emissive:2761224,emissiveIntensity:.4,roughness:.5,metalness:.4}));n.add(i,r)}n.position.copy(s).add(new E((Math.random()-.5)*.5,.22,(Math.random()-.5)*.5)),n.rotation.y=Math.random()*Math.PI,n.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),Qe.add(n),ii.push({mesh:n,light:null,kind:e,pos:n.position.clone(),t:Math.random()*3,ground:!0,ttl:22})}function oM(s){for(let t=ii.length-1;t>=0;t--){const e=ii[t];if(e.t+=s,e.ground){if(e.mesh.rotation.y+=s*1.1,e.mesh.position.y=e.pos.y+Math.sin(e.t*2.2)*.04,e.ttl-=s,e.ttl<=0){Qe.remove(e.mesh),ii.splice(t,1);continue}}else e.mesh.rotation.y+=s*2,e.mesh.position.y=e.pos.y+Math.sin(e.t*2)*.08;if(e.mesh.position.distanceTo(zt.pos.clone().add(new E(0,1,0)))<1.4){if(Ne.pickup(e.kind),e.kind==="health")zt.heal(e.ground?25:40),Ws(e.ground?"SAĞLIK KİTİ ALINDI":"SAĞLIK TOPLANDI");else if(e.ground){const n=ce.current.def;ce.addReserve(n.id,Math.ceil(n.magSize*.8)),Ws("MERMİ YAĞMALANDI")}else ce.addReserve("all",0),Ws("MÜHİMMAT TOPLANDI");Qe.remove(e.mesh),e.light&&Qe.remove(e.light),ii.splice(t,1)}}}function nd(s,t){zn[s]=t,es.forward=(zn.KeyW?1:0)-(zn.KeyS?1:0),es.right=(zn.KeyD?1:0)-(zn.KeyA?1:0),es.jump=!!zn.Space,es.sprint=!!zn.ShiftLeft||!!zn.ShiftRight,es.crouch=!!zn.KeyC}addEventListener("keydown",s=>{nd(s.code,!0),Et.state==="playing"&&(s.code==="KeyR"&&ce.startReload(),s.code==="KeyG"&&tM(),s.code==="Digit1"&&ce.switchTo(0),s.code==="Digit2"&&ce.switchTo(1),s.code==="Digit3"&&ce.switchTo(2),s.code==="Digit4"&&ce.switchTo(3))});addEventListener("keyup",s=>nd(s.code,!1));addEventListener("mousedown",s=>{Et.state!=="playing"||document.pointerLockElement!==li||(s.button===0&&ce.setTrigger(!0),s.button===2&&ce.setAds(!0))});addEventListener("mouseup",s=>{s.button===0&&ce.setTrigger(!1),s.button===2&&ce.setAds(!1)});addEventListener("contextmenu",s=>s.preventDefault());addEventListener("wheel",s=>{Et.state==="playing"&&ce.cycle(s.deltaY>0?1:-1)});addEventListener("mousemove",s=>{Et.state==="playing"&&document.pointerLockElement===li&&zt.applyMouseMovement(s.movementX,s.movementY)});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==li&&Et.state==="playing"&&sd()});bt("btn-start").addEventListener("click",()=>id());bt("btn-controls").addEventListener("click",()=>{$e(sr),qn(Xu)});bt("btn-settings").addEventListener("click",()=>{Et.settingsReturnTo="main",$e(sr),qn(Ea)});bt("btn-resume").addEventListener("click",()=>hM());bt("btn-pause-settings").addEventListener("click",()=>{Et.settingsReturnTo="pause",$e(Ts),qn(Ea)});bt("btn-quit").addEventListener("click",()=>rd());bt("btn-retry").addEventListener("click",()=>{$e(rr),id()});bt("btn-death-quit").addEventListener("click",()=>{$e(rr),rd()});document.querySelectorAll("[data-back]").forEach(s=>{s.addEventListener("click",()=>{$e(Xu),$e(Ea),Et.settingsReturnTo==="pause"?qn(Ts):qn(sr)})});wo.addEventListener("input",()=>{zt.sensitivity=parseFloat(wo.value),Uy.textContent=wo.value});To.addEventListener("input",()=>{zt.baseFov=parseFloat(To.value),Ny.textContent=To.value});Eo.addEventListener("input",()=>{Ne.setVolume(parseFloat(Eo.value)),Fy.textContent=Math.round(Eo.value*100)+"%"});Dh.addEventListener("change",()=>{Qs=Dh.value,Ku(),lM()});function lM(){Cn.sun.castShadow=Qs!=="low"}async function id(){Ne.init(),Ne.resume(),Ne.startAmbient(),cM(),$e(sr),$e(rr),$e(Ts),qn(Ih),await Promise.race([Hy,new Promise(s=>setTimeout(s,4e3))]),$e(Ih),Wl.classList.add("visible"),Et.state="playing",li.requestPointerLock(),ed(1)}function cM(){Xe.forEach(s=>s.destroy()),Xe=[],ls.forEach(s=>Qe.remove(s.mesh)),ls=[],ii.forEach(s=>{Qe.remove(s.mesh),Qe.remove(s.light)}),ii=[],Et.wave=0,Et.score=0,Et.kills=0,Et.headshots=0,Et.shotsFired=0,Et.shotsHit=0,Et.grenades=Et.maxGrenades,zt.hp=zt.maxHp,zt.dead=!1,zt.pos.set(0,0,6),zt.vel.set(0,0,0),zt.yaw=Math.PI,zt.pitch=0,Xl(),$u()}function sd(){Et.state==="playing"&&(Et.state="paused",qn(Ts))}function hM(){$e(Ts),$e(Ea),Et.state="playing",li.requestPointerLock()}function rd(){Et.state="menu",Wl.classList.remove("visible"),$e(Ts),$e(rr),qn(sr),Ne.stopAmbient(),document.pointerLockElement===li&&document.exitPointerLock()}addEventListener("keydown",s=>{s.code==="Escape"&&Et.state==="playing"&&(document.pointerLockElement===li?document.exitPointerLock():sd())});zt.onDeath=()=>{Et.state="dead",Ne.gameOver(),document.pointerLockElement===li&&document.exitPointerLock(),Vy.textContent=`${Et.wave}. dalgada düştün`,Oy.textContent=Et.score,By.textContent=Et.kills,zy.textContent=Et.headshots,ky.textContent=Et.shotsFired?Math.round(Et.shotsHit/Et.shotsFired*100)+"%":"0%",qn(rr)};const uM=new Cu;function ad(){const s=Math.min(.05,uM.getDelta());if(Et.state==="playing"){zt.update(s,es);const t=zt.consumeLookDelta();ce.update(s,{lookDeltaX:t.x,lookDeltaY:t.y,speed:zt.speed,grounded:zt.grounded,crouch:zt.crouching});const e=ce.tryFire(zt.speed>.5);e&&$y(e);for(const i of Xe)i.update(s,zt.pos,zt.crouching,Xe);Xe=Xe.filter(i=>!i.expired),nM(s),oM(s),sM(s),Si.update(s),an.fov=zt.baseFov*ce.currentFovMult()*(zt.sprinting?1.045:1),an.updateProjectionMatrix();const n=!ce.isScoped()&&ce.adsAmount>.5;_y.classList.toggle("hidden",ce.isScoped()||n),Iy.classList.toggle("active",ce.isScoped()),Dy.classList.toggle("active",n),Ne.listener.pos=an.position,Ne.listener.fwd=an.getWorldDirection(new E),Yy(),ba(),jy(),Zy()}Ci.render(),requestAnimationFrame(ad)}requestAnimationFrame(ad);
