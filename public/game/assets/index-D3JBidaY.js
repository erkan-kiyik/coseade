(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="166",bh=0,Xo=1,Rh=2,hc=1,uc=2,wn=3,Hn=0,Ie=1,mn=2,Rn=0,Hi=1,oi=2,qo=3,Yo=4,Ch=5,ni=100,Ph=101,Lh=102,Dh=103,Ih=104,Uh=200,Nh=201,Fh=202,Oh=203,Ra=204,Ca=205,zh=206,Bh=207,kh=208,Hh=209,Vh=210,Gh=211,Wh=212,Xh=213,qh=214,Yh=0,Kh=1,$h=2,xr=3,Jh=4,Zh=5,jh=6,Qh=7,dc=0,tu=1,eu=2,kn=0,fc=1,pc=2,mc=3,po=4,nu=5,gc=6,_c=7,vc=300,Wi=301,Xi=302,Pa=303,La=304,Cr=306,Ms=1e3,si=1001,Da=1002,Qe=1003,iu=1004,Ps=1005,an=1006,Vr=1007,ri=1008,Ln=1009,xc=1010,Mc=1011,Ss=1012,mo=1013,hi=1014,An=1015,Cn=1016,go=1017,_o=1018,qi=1020,Sc=35902,yc=1021,Tc=1022,cn=1023,Ec=1024,wc=1025,Vi=1026,Yi=1027,Ac=1028,vo=1029,bc=1030,xo=1031,Mo=1033,hr=33776,ur=33777,dr=33778,fr=33779,Ia=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,za=37492,Ba=37496,ka=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,Ka=37816,$a=37817,Ja=37818,Za=37819,ja=37820,Qa=37821,pr=36492,to=36494,eo=36495,Rc=36283,no=36284,io=36285,so=36286,su=3200,ru=3201,Cc=0,au=1,Bn="",Ke="srgb",Gn="srgb-linear",So="display-p3",Pr="display-p3-linear",Mr="linear",se="srgb",Sr="rec709",yr="p3",gi=7680,Ko=519,ou=512,lu=513,cu=514,Pc=515,hu=516,uu=517,du=518,fu=519,ro=35044,$o="300 es",bn=2e3,Tr=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jo=1234567;const fs=Math.PI/180,ys=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function yo(i,t){return(i%t+t)%t}function pu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mu(i,t,e){return i!==t?(e-i)/(t-i):0}function ps(i,t,e){return(1-e)*i+e*t}function gu(i,t,e,n){return ps(i,t,1-Math.exp(-e*n))}function _u(i,t=1){return t-Math.abs(yo(i,t*2)-t)}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Su(i,t){return i+Math.random()*(t-i)}function yu(i){return i*(.5-Math.random())}function Tu(i){i!==void 0&&(Jo=i);let t=Jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Eu(i){return i*fs}function wu(i){return i*ys}function Au(i){return(i&i-1)===0&&i!==0}function bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ru(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pu={DEG2RAD:fs,RAD2DEG:ys,generateUUID:Pn,clamp:we,euclideanModulo:yo,mapLinear:pu,inverseLerp:mu,lerp:ps,damp:gu,pingpong:_u,smoothstep:vu,smootherstep:xu,randInt:Mu,randFloat:Su,randFloatSpread:yu,seededRandom:Tu,degToRad:Eu,radToDeg:wu,isPowerOfTwo:Au,ceilPowerOfTwo:bu,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Cu,normalize:ee,denormalize:on};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,s,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],x=s[4],T=s[7],F=s[2],A=s[5],R=s[8];return r[0]=a*_+o*w+l*F,r[3]=a*m+o*x+l*A,r[6]=a*p+o*T+l*R,r[1]=c*_+u*w+h*F,r[4]=c*m+u*x+h*A,r[7]=c*p+u*T+h*R,r[2]=d*_+f*w+g*F,r[5]=d*m+f*x+g*A,r[8]=d*p+f*T+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Vt;function Lc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){const i=Er("canvas");return i.style.display="block",i}const Zo={};function To(i){i in Zo||(Zo[i]=!0,console.warn(i))}function Du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const jo=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qo=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[Gn]:{transfer:Mr,primaries:Sr,toReference:i=>i,fromReference:i=>i},[Ke]:{transfer:se,primaries:Sr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Pr]:{transfer:Mr,primaries:yr,toReference:i=>i.applyMatrix3(Qo),fromReference:i=>i.applyMatrix3(jo)},[So]:{transfer:se,primaries:yr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qo),fromReference:i=>i.applyMatrix3(jo).convertLinearToSRGB()}},Iu=new Set([Gn,Pr]),Qt={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Iu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ls[t].toReference,s=Ls[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ls[i].primaries},getTransfer:function(i){return i===Bn?Mr:Ls[i].transfer}};function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class Uu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Er("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nu=0;class Dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xr(s[a].image)):r.push(Xr(s[a]))}else r=Xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fu=0;class ke extends Zi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=si,s=si,r=an,a=ri,o=cn,l=Ln,c=ke.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Pn(),this.name="",this.source=new Dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=vc;ke.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,T=(f+1)/2,F=(p+1)/2,A=(u+d)/4,R=(h+_)/4,I=(g+m)/4;return x>T&&x>F?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=R/n):T>F?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=I/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=R/r,s=I/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ou extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends Ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ic extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zu extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const F=Math.sqrt(x),A=Math.atan2(F,p*w);m=Math.sin(m*A)/F,o=Math.sin(o*A)/F}const T=o*w;if(l=l*m+d*T,c=c*m+f*T,u=u*m+g*T,h=h*m+_*T,m===1-o){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new E,tl=new ui;class ws{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Is.subVectors(this.max,is),vi.subVectors(t.a,is),xi.subVectors(t.b,is),Mi.subVectors(t.c,is),In.subVectors(xi,vi),Un.subVectors(Mi,xi),Yn.subVectors(vi,Mi);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Yn.z,Yn.y,In.z,0,-In.x,Un.z,0,-Un.x,Yn.z,0,-Yn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Yn.y,Yn.x,0];return!Yr(e,vi,xi,Mi,Is)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,vi,xi,Mi,Is))?!1:(Us.crossVectors(In,Un),e=[Us.x,Us.y,Us.z],Yr(e,vi,xi,Mi,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new E,new E,new E,new E,new E,new E,new E,new E],nn=new E,Ds=new ws,vi=new E,xi=new E,Mi=new E,In=new E,Un=new E,Yn=new E,is=new E,Is=new E,Us=new E,Kn=new E;function Yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bu=new ws,ss=new E,Kr=new E;class Lr{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Kr)),this.expandByPoint(ss.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new E,$r=new E,Ns=new E,Nn=new E,Jr=new E,Fs=new E,Zr=new E;class Eo{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$r.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ns),o=Nn.dot(this.direction),l=-Nn.dot(Ns),c=Nn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($r).addScaledVector(Ns,d),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Jr.subVectors(e,t),Fs.subVectors(n,t),Zr.crossVectors(Jr,Fs);let a=this.direction.dot(Zr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const l=o*this.direction.dot(Fs.crossVectors(Nn,Fs));if(l<0)return null;const c=o*this.direction.dot(Jr.cross(Nn));if(c<0||l+c>a)return null;const u=-o*Nn.dot(Zr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,a,o,l,c,u,h,d,f,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Hu)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Fn.crossVectors(n,Xe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Fn.crossVectors(n,Xe)),Fn.normalize(),Os.crossVectors(Xe,Fn),s[0]=Fn.x,s[4]=Os.x,s[8]=Xe.x,s[1]=Fn.y,s[5]=Os.y,s[9]=Xe.y,s[2]=Fn.z,s[6]=Os.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],x=n[7],T=n[11],F=n[15],A=s[0],R=s[4],I=s[8],y=s[12],M=s[1],P=s[5],k=s[9],O=s[13],G=s[2],X=s[6],W=s[10],J=s[14],U=s[3],Y=s[7],K=s[11],et=s[15];return r[0]=a*A+o*M+l*G+c*U,r[4]=a*R+o*P+l*X+c*Y,r[8]=a*I+o*k+l*W+c*K,r[12]=a*y+o*O+l*J+c*et,r[1]=u*A+h*M+d*G+f*U,r[5]=u*R+h*P+d*X+f*Y,r[9]=u*I+h*k+d*W+f*K,r[13]=u*y+h*O+d*J+f*et,r[2]=g*A+_*M+m*G+p*U,r[6]=g*R+_*P+m*X+p*Y,r[10]=g*I+_*k+m*W+p*K,r[14]=g*y+_*O+m*J+p*et,r[3]=w*A+x*M+T*G+F*U,r[7]=w*R+x*P+T*X+F*Y,r[11]=w*I+x*k+T*W+F*K,r[15]=w*y+x*O+T*J+F*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-e*l*h+e*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,x=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,T=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,F=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=e*w+n*x+s*T+r*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=w*R,t[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*R,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*R,t[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*R,t[4]=x*R,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*f+e*l*f)*R,t[8]=T*R,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*R,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*R,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*f-e*o*f)*R,t[12]=F*R,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*R,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*R,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,w=l*c,x=l*u,T=l*h,F=n.x,A=n.y,R=n.z;return s[0]=(1-(_+p))*F,s[1]=(f+T)*F,s[2]=(g-x)*F,s[3]=0,s[4]=(f-T)*A,s[5]=(1-(d+p))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+x)*R,s[9]=(m-w)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Si.set(s[0],s[1],s[2]).length();const a=Si.set(s[4],s[5],s[6]).length(),o=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const c=1/r,u=1/a,h=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=bn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===bn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Tr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*c,f=(n+s)*u;let g,_;if(o===bn)g=(a+r)*h,_=-2*h;else if(o===Tr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new E,sn=new re,ku=new E(0,0,0),Hu=new E(1,1,1),Fn=new E,Os=new E,Xe=new E,el=new re,nl=new ui;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vu=0;const il=new E,yi=new ui,Sn=new re,zs=new E,rs=new E,Gu=new E,Wu=new ui,sl=new E(1,0,0),rl=new E(0,1,0),al=new E(0,0,1),ol={type:"added"},Xu={type:"removed"},Ti={type:"childadded",child:null},jr={type:"childremoved",child:null};class Se extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new E,e=new un,n=new ui,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Vt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(al,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(rs,zs,this.up):Sn.lookAt(zs,rs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Sn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ol),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xu),jr.child=t,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ol),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,Gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new E(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new E,yn=new E,Qr=new E,Tn=new E,Ei=new E,wi=new E,ll=new E,ta=new E,ea=new E,na=new E;class ln{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),yn.subVectors(n,e),Qr.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(yn),l=rn.dot(Qr),c=yn.dot(yn),u=yn.dot(Qr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),yn.subVectors(t,e),rn.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),rn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),wi.subVectors(r,n),ta.subVectors(t,n);const l=Ei.dot(ta),c=wi.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);const u=Ei.dot(ea),h=wi.dot(ea);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ei,a);na.subVectors(t,r);const f=Ei.dot(na),g=wi.dot(na);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(wi,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ll.subVectors(r,s),o=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(ll,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Ei,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=yo(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ia(a,r,t+1/3),this.g=ia(a,r,t),this.b=ia(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Qt.fromWorkingColorSpace(Le.copy(this),t),Math.round(we(Le.r*255,0,255))*65536+Math.round(we(Le.g*255,0,255))*256+Math.round(we(Le.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ke){Qt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Bs);const n=ps(On.h,Bs.h,e),s=ps(On.s,Bs.s,e),r=ps(On.l,Bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Ft;Ft.NAMES=Uc;let qu=0;class fi extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Hi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class gn extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new E,ks=new at;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ro,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return To("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ro&&(t.usage=this.usage),t}}class Nc extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fc extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yu=0;const je=new re,sa=new Se,Ai=new E,qe=new ws,as=new ws,Ee=new E;class Ne extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lc(t)?Fc:Nc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(qe.min,as.min),qe.expandByPoint(Ee),Ee.addVectors(qe.max,as.max),qe.expandByPoint(Ee)):(qe.expandByPoint(as.min),qe.expandByPoint(as.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),Ee.add(Ai)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new E,l[I]=new E;const c=new E,u=new E,h=new E,d=new at,f=new at,g=new at,_=new E,m=new E;function p(I,y,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[I].add(_),o[y].add(_),o[M].add(_),l[I].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,y=w.length;I<y;++I){const M=w[I],P=M.start,k=M.count;for(let O=P,G=P+k;O<G;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new E,T=new E,F=new E,A=new E;function R(I){F.fromBufferAttribute(s,I),A.copy(F);const y=o[I];x.copy(y),x.sub(F.multiplyScalar(F.dot(y))).normalize(),T.crossVectors(A,y);const P=T.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,y=w.length;I<y;++I){const M=w[I],P=M.start,k=M.count;for(let O=P,G=P+k;O<G;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,u=new E,h=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new re,$n=new Eo,Hs=new Lr,hl=new E,bi=new E,Ri=new E,Ci=new E,ra=new E,Vs=new E,Gs=new at,Ws=new at,Xs=new at,ul=new E,dl=new E,fl=new E,qs=new E,Ys=new E;class it extends Se{constructor(t=new Ne,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ra.fromBufferAttribute(h,t),a?Vs.addScaledVector(ra,u):Vs.addScaledVector(ra.sub(e),u))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Hs.containsPoint($n.origin)===!1&&($n.intersectSphere(Hs,hl)===null||$n.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(cl.copy(r).invert(),$n.copy(t.ray).applyMatrix4(cl),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let T=w,F=x;T<F;T+=3){const A=o.getX(T),R=o.getX(T+1),I=o.getX(T+2);s=Ks(this,p,t,n,c,u,h,A,R,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),x=o.getX(m+1),T=o.getX(m+2);s=Ks(this,a,t,n,c,u,h,w,x,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=w,F=x;T<F;T+=3){const A=T,R=T+1,I=T+2;s=Ks(this,p,t,n,c,u,h,A,R,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,x=m+1,T=m+2;s=Ks(this,a,t,n,c,u,h,w,x,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ku(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Hn,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:i}}function Ks(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,bi),i.getVertexPosition(l,Ri),i.getVertexPosition(c,Ci);const u=Ku(i,t,e,n,bi,Ri,Ci,qs);if(u){s&&(Gs.fromBufferAttribute(s,o),Ws.fromBufferAttribute(s,l),Xs.fromBufferAttribute(s,c),u.uv=ln.getInterpolation(qs,bi,Ri,Ci,Gs,Ws,Xs,new at)),r&&(Gs.fromBufferAttribute(r,o),Ws.fromBufferAttribute(r,l),Xs.fromBufferAttribute(r,c),u.uv1=ln.getInterpolation(qs,bi,Ri,Ci,Gs,Ws,Xs,new at)),a&&(ul.fromBufferAttribute(a,o),dl.fromBufferAttribute(a,l),fl.fromBufferAttribute(a,c),u.normal=ln.getInterpolation(qs,bi,Ri,Ci,ul,dl,fl,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new E,materialIndex:0};ln.getNormal(bi,Ri,Ci,h.normal),u.face=h}return u}class ne extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(h,2));function g(_,m,p,w,x,T,F,A,R,I,y){const M=T/R,P=F/I,k=T/2,O=F/2,G=A/2,X=R+1,W=I+1;let J=0,U=0;const Y=new E;for(let K=0;K<W;K++){const et=K*P-O;for(let Mt=0;Mt<X;Mt++){const It=Mt*M-k;Y[_]=It*w,Y[m]=et*x,Y[p]=G,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Mt/R),h.push(1-K/I),J+=1}}for(let K=0;K<I;K++)for(let et=0;et<R;et++){const Mt=d+et+X*K,It=d+et+X*(K+1),V=d+(et+1)+X*(K+1),j=d+(et+1)+X*K;l.push(Mt,It,j),l.push(It,V,j),U+=6}o.addGroup(f,U,y),f+=U,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Ki(i[e]);for(const s in n)t[s]=n[s]}return t}function $u(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Ts={clone:Ki,merge:Oe};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class De extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=$u(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zc extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new E,pl=new at,ml=new at;class $e extends zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class ju extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Pi,Li,t,e);s.layers=this.layers,this.add(s);const r=new $e(Pi,Li,t,e);r.layers=this.layers,this.add(r);const a=new $e(Pi,Li,t,e);a.layers=this.layers,this.add(a);const o=new $e(Pi,Li,t,e);o.layers=this.layers,this.add(o);const l=new $e(Pi,Li,t,e);l.layers=this.layers,this.add(l);const c=new $e(Pi,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bc extends ke{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qu extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ne(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Rn});r.uniforms.tEquirect.value=e;const a=new it(s,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=an),new ju(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const aa=new E,td=new E,ed=new Vt;class ti{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=aa.subVectors(n,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ed.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Lr,$s=new E;class Ao{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],x=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,m-f,T-p).normalize(),n[1].setComponents(l+r,d+c,m+f,T+p).normalize(),n[2].setComponents(l+a,d+u,m+g,T+w).normalize(),n[3].setComponents(l-a,d-u,m-g,T-w).normalize(),n[4].setComponents(l-o,d-h,m-_,T-x).normalize(),e===bn)n[5].setComponents(l+o,d+h,m+_,T+x).normalize();else if(e===Tr)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($s.x=s.normal.x>0?t.max.x:t.min.x,$s.y=s.normal.y>0?t.max.y:t.min.y,$s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),h.count===-1&&d.length===0&&i.bufferSubData(c,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class di extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let x=0;x<c;x++){const T=x*h-r;g.push(T,-w,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const x=w+c*p,T=w+c*(p+1),F=w+1+c*(p+1),A=w+1+c*p;f.push(x,T,A),f.push(T,F,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.widthSegments,t.heightSegments)}}var id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
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
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
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
#endif`,hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gd=`#ifdef USE_IRIDESCENCE
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
#endif`,_d=`#ifdef USE_BUMPMAP
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ad=`#define PI 3.141592653589793
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
} // validated`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rd=`vec3 transformedNormal = objectNormal;
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
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`
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
}`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
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
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tf=`PhysicalMaterial material;
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
#endif`,ef=`struct PhysicalMaterial {
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
}`,nf=`
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ff=`#if defined( USE_POINTS_UV )
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
#endif`,pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
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
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Af=`#ifdef USE_NORMALMAP
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
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vf=`float getShadowMask() {
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
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wf=`#ifdef USE_SKINNING
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
#endif`,Xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`#include <common>
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
}`,hp=`#if DEPTH_PACKING == 3200
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
}`,up=`#define DISTANCE
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
}`,dp=`#define DISTANCE
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`uniform float scale;
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,vp=`uniform vec3 diffuse;
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
}`,xp=`#define LAMBERT
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
}`,Mp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,yp=`#define MATCAP
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
}`,Tp=`#define NORMAL
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
}`,Ep=`#define NORMAL
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
}`,wp=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,bp=`#define STANDARD
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
}`,Rp=`#define STANDARD
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
}`,Cp=`#define TOON
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
}`,Pp=`#define TOON
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
}`,Lp=`uniform float size;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Up=`uniform vec3 color;
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
}`,Np=`uniform float rotation;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:id,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:ad,alphatest_fragment:od,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:hd,batching_pars_vertex:ud,batching_vertex:dd,begin_vertex:fd,beginnormal_vertex:pd,bsdfs:md,iridescence_fragment:gd,bumpmap_pars_fragment:_d,clipping_planes_fragment:vd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:Sd,color_fragment:yd,color_pars_fragment:Td,color_pars_vertex:Ed,color_vertex:wd,common:Ad,cube_uv_reflection_fragment:bd,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Cd,displacementmap_vertex:Pd,emissivemap_fragment:Ld,emissivemap_pars_fragment:Dd,colorspace_fragment:Id,colorspace_pars_fragment:Ud,envmap_fragment:Nd,envmap_common_pars_fragment:Fd,envmap_pars_fragment:Od,envmap_pars_vertex:zd,envmap_physical_pars_fragment:$d,envmap_vertex:Bd,fog_vertex:kd,fog_pars_vertex:Hd,fog_fragment:Vd,fog_pars_fragment:Gd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:Kd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Zd,lights_phong_fragment:jd,lights_phong_pars_fragment:Qd,lights_physical_fragment:tf,lights_physical_pars_fragment:ef,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:rf,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:of,logdepthbuf_pars_vertex:lf,logdepthbuf_vertex:cf,map_fragment:hf,map_pars_fragment:uf,map_particle_fragment:df,map_particle_pars_fragment:ff,metalnessmap_fragment:pf,metalnessmap_pars_fragment:mf,morphinstance_vertex:gf,morphcolor_vertex:_f,morphnormal_vertex:vf,morphtarget_pars_vertex:xf,morphtarget_vertex:Mf,normal_fragment_begin:Sf,normal_fragment_maps:yf,normal_pars_fragment:Tf,normal_pars_vertex:Ef,normal_vertex:wf,normalmap_pars_fragment:Af,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Rf,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Pf,opaque_fragment:Lf,packing:Df,premultiplied_alpha_fragment:If,project_vertex:Uf,dithering_fragment:Nf,dithering_pars_fragment:Ff,roughnessmap_fragment:Of,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:Bf,shadowmap_pars_vertex:kf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Vf,skinbase_vertex:Gf,skinning_pars_vertex:Wf,skinning_vertex:Xf,skinnormal_vertex:qf,specularmap_fragment:Yf,specularmap_pars_fragment:Kf,tonemapping_fragment:$f,tonemapping_pars_fragment:Jf,transmission_fragment:Zf,transmission_pars_fragment:jf,uv_pars_fragment:Qf,uv_pars_vertex:tp,uv_vertex:ep,worldpos_vertex:np,background_vert:ip,background_frag:sp,backgroundCube_vert:rp,backgroundCube_frag:ap,cube_vert:op,cube_frag:lp,depth_vert:cp,depth_frag:hp,distanceRGBA_vert:up,distanceRGBA_frag:dp,equirect_vert:fp,equirect_frag:pp,linedashed_vert:mp,linedashed_frag:gp,meshbasic_vert:_p,meshbasic_frag:vp,meshlambert_vert:xp,meshlambert_frag:Mp,meshmatcap_vert:Sp,meshmatcap_frag:yp,meshnormal_vert:Tp,meshnormal_frag:Ep,meshphong_vert:wp,meshphong_frag:Ap,meshphysical_vert:bp,meshphysical_frag:Rp,meshtoon_vert:Cp,meshtoon_frag:Pp,points_vert:Lp,points_frag:Dp,shadow_vert:Ip,shadow_frag:Up,sprite_vert:Np,sprite_frag:Fp},ht={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},pn={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};pn.physical={uniforms:Oe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Js={r:0,b:0,g:0},Zn=new un,Op=new re;function zp(i,t,e,n,s,r,a){const o=new Ft(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function _(w){let x=!1;const T=g(w);T===null?p(o,l):T&&T.isColor&&(p(T,1),x=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===Cr)?(u===void 0&&(u=new it(new ne(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Ki(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zn.copy(x.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(Zn)),u.material.toneMapped=Qt.getTransfer(T.colorSpace)!==se,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new it(new di(2,2),new De({name:"BackgroundMaterial",uniforms:Ki(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(T.colorSpace)!==se,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,x){w.getRGB(Js,Oc(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:_,addToRenderList:m}}function Bp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,P,k,O,G){let X=!1;const W=h(O,k,P);r!==W&&(r=W,c(r.object)),X=f(M,O,k,G),X&&g(M,O,k,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,T(M,P,k,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,P,k){const O=k.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let X=G[P.id];X===void 0&&(X={},G[P.id]=X);let W=X[O];return W===void 0&&(W=d(l()),X[O]=W),W}function d(M){const P=[],k=[],O=[];for(let G=0;G<e;G++)P[G]=0,k[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,P,k,O){const G=r.attributes,X=P.attributes;let W=0;const J=k.getAttributes();for(const U in J)if(J[U].location>=0){const K=G[U];let et=X[U];if(et===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),K===void 0||K.attribute!==et||et&&K.data!==et.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(M,P,k,O){const G={},X=P.attributes;let W=0;const J=k.getAttributes();for(const U in J)if(J[U].location>=0){let K=X[U];K===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const et={};et.attribute=K,K&&K.data&&(et.data=K.data),G[U]=et,W++}r.attributes=G,r.attributesNum=W,r.index=O}function _(){const M=r.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const k=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;k[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),G[M]!==P&&(i.vertexAttribDivisor(M,P),G[M]=P)}function w(){const M=r.newAttributes,P=r.enabledAttributes;for(let k=0,O=P.length;k<O;k++)P[k]!==M[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function x(M,P,k,O,G,X,W){W===!0?i.vertexAttribIPointer(M,P,k,G,X):i.vertexAttribPointer(M,P,k,O,G,X)}function T(M,P,k,O){_();const G=O.attributes,X=k.getAttributes(),W=P.defaultAttributeValues;for(const J in X){const U=X[J];if(U.location>=0){let Y=G[J];if(Y===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const K=Y.normalized,et=Y.itemSize,Mt=t.get(Y);if(Mt===void 0)continue;const It=Mt.buffer,V=Mt.type,j=Mt.bytesPerElement,dt=V===i.INT||V===i.UNSIGNED_INT||Y.gpuType===mo;if(Y.isInterleavedBufferAttribute){const ct=Y.data,Lt=ct.stride,Ot=Y.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<U.locationSize;Xt++)p(U.location+Xt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<U.locationSize;Xt++)m(U.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let Xt=0;Xt<U.locationSize;Xt++)x(U.location+Xt,et/U.locationSize,V,K,Lt*j,(Ot+et/U.locationSize*Xt)*j,dt)}else{if(Y.isInstancedBufferAttribute){for(let ct=0;ct<U.locationSize;ct++)p(U.location+ct,Y.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ct=0;ct<U.locationSize;ct++)m(U.location+ct);i.bindBuffer(i.ARRAY_BUFFER,It);for(let ct=0;ct<U.locationSize;ct++)x(U.location+ct,et/U.locationSize,V,K,et*j,et/U.locationSize*ct*j,dt)}}else if(W!==void 0){const K=W[J];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(U.location,K);break;case 3:i.vertexAttrib3fv(U.location,K);break;case 4:i.vertexAttrib4fv(U.location,K);break;default:i.vertexAttrib1fv(U.location,K)}}}}w()}function F(){I();for(const M in n){const P=n[M];for(const k in P){const O=P[k];for(const G in O)u(O[G].object),delete O[G];delete P[k]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const k in P){const O=P[k];for(const G in O)u(O[G].object),delete O[G];delete P[k]}delete n[M.id]}function R(M){for(const P in n){const k=n[P];if(k[M.id]===void 0)continue;const O=k[M.id];for(const G in O)u(O[G].object),delete O[G];delete k[M.id]}}function I(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function kp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==An&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=f>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:T,maxSamples:F}}function Vp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ti,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,x=w*4;let T=p.clippingState||null;l.value=T,T=u(g,d,x,f);for(let F=0;F!==x;++F)T[F]=e[F];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,T=f;x!==_;++x,T+=4)a.copy(h[x]).applyMatrix4(w,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gp(i){let t=new WeakMap;function e(a,o){return o===Pa?a.mapping=Wi:o===La&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pa||o===La)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class bo extends zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,gl=[.125,.215,.35,.446,.526,.582],ii=20,oa=new bo,_l=new Ft;let la=null,ca=0,ha=0,ua=!1;const ei=(1+Math.sqrt(5))/2,Di=1/ei,vl=[new E(-ei,Di,0),new E(ei,Di,0),new E(-Di,0,ei),new E(Di,0,ei),new E(0,ei,-Di),new E(0,ei,Di),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(la,ca,ha),this._renderer.xr.enabled=ua,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Cn,format:cn,colorSpace:Gn,depthBuffer:!1},s=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wp(r)),this._blurMaterial=Xp(r,t,e)}return s}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){const o=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_l),u.toneMapping=kn,u.autoClear=!1;const f=new gn({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new it(new ne,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(_l),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Zs(s,w*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vl[(s-r-1)%vl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new it(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ii-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ii;m>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const p=[];let w=0;for(let R=0;R<ii;++R){const I=R/_,y=Math.exp(-I*I/2);p.push(y),R===0?w+=y:R<m&&(w+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const T=this._sizeLods[s],F=3*T*(s>x-ki?s-x+ki:0),A=4*(this._cubeSize-T);Zs(e,F,A,3*T,2*T),l.setRenderTarget(e),l.render(h,oa)}}function Wp(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+gl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ki?l=gl[a-i+ki-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),x=new Float32Array(m*g*f),T=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,I=A>2?0:-1,y=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];w.set(y,_*g*A),x.set(d,m*g*A);const M=[A,A,A,A,A,A];T.set(M,p*g*A)}const F=new Ne;F.setAttribute("position",new tn(w,_)),F.setAttribute("uv",new tn(x,m)),F.setAttribute("faceIndex",new tn(T,p)),t.push(F),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(i,t,e){const n=new hn(i,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xp(i,t,e){const n=new Float32Array(ii),s=new E(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ml(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Sl(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function qp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pa||l===La,u=l===Wi||l===Xi;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ao(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new ao(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kp(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let x=0,T=w.length;x<T;x+=3){const F=w[x+0],A=w[x+1],R=w[x+2];d.push(F,A,A,R,R,F)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,T=w.length/3-1;x<T;x+=3){const F=x+0,A=x+1,R=x+2;d.push(F,A,A,R,R,F)}}else return;const m=new(Lc(d)?Fc:Nc)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function $p(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w];for(let w=0;w<_.length;w++)e.update(p,n,_[w])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Jp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zp(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),m===!0&&(T=3);let F=o.attributes.position.count*T,A=1;F>t.maxTextureSize&&(A=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const R=new Float32Array(F*A*4*h),I=new Ic(R,F,A,h);I.type=An,I.needsUpdate=!0;const y=T*4;for(let P=0;P<h;P++){const k=p[P],O=w[P],G=x[P],X=F*A*4*P;for(let W=0;W<k.count;W++){const J=W*y;g===!0&&(s.fromBufferAttribute(k,W),R[X+J+0]=s.x,R[X+J+1]=s.y,R[X+J+2]=s.z,R[X+J+3]=0),_===!0&&(s.fromBufferAttribute(O,W),R[X+J+4]=s.x,R[X+J+5]=s.y,R[X+J+6]=s.z,R[X+J+7]=0),m===!0&&(s.fromBufferAttribute(G,W),R[X+J+8]=s.x,R[X+J+9]=s.y,R[X+J+10]=s.z,R[X+J+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new at(F,A)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function jp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Hc extends ke{constructor(t,e,n,s,r,a,o,l,c,u=Vi){if(u!==Vi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vi&&(n=hi),n===void 0&&u===Yi&&(n=qi),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vc=new ke,yl=new Hc(1,1),Gc=new Ic,Wc=new zu,Xc=new Bc,Tl=[],El=[],wl=new Float32Array(16),Al=new Float32Array(9),bl=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Tl[s];if(r===void 0&&(r=new Float32Array(s),Tl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;bl.set(n),i.uniformMatrix2fv(this.addr,!1,bl),Te(e,n)}}function sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;Al.set(n),i.uniformMatrix3fv(this.addr,!1,Al),Te(e,n)}}function rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),Te(e,n)}}function am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yl.compareFunction=Pc,r=yl):r=Vc,e.setTexture2D(t||r,s)}function mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wc,s)}function gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xc,s)}function _m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gc,s)}function vm(i){switch(i){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}function xm(i,t){i.uniform1fv(this.addr,t)}function Mm(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Sm(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function ym(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Tm(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Em(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wm(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Am(i,t){i.uniform1iv(this.addr,t)}function bm(i,t){i.uniform2iv(this.addr,t)}function Rm(i,t){i.uniform3iv(this.addr,t)}function Cm(i,t){i.uniform4iv(this.addr,t)}function Pm(i,t){i.uniform1uiv(this.addr,t)}function Lm(i,t){i.uniform2uiv(this.addr,t)}function Dm(i,t){i.uniform3uiv(this.addr,t)}function Im(i,t){i.uniform4uiv(this.addr,t)}function Um(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Vc,r[a])}function Nm(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wc,r[a])}function Fm(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xc,r[a])}function Om(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gc,r[a])}function zm(i){switch(i){case 5126:return xm;case 35664:return Mm;case 35665:return Sm;case 35666:return ym;case 35674:return Tm;case 35675:return Em;case 35676:return wm;case 5124:case 35670:return Am;case 35667:case 35671:return bm;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Lm;case 36295:return Dm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}class Bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}}class km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zm(e.type)}}class Hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Rl(i,t){i.seq.push(t),i.map[t.id]=t}function Vm(i,t,e){const n=i.name,s=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rl(e,c===void 0?new Bm(o,i,t):new km(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Hm(o),Rl(e,h)),e=h}}}class mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Vm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Cl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gm=37297;let Wm=0;function Xm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function qm(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===yr&&e===Sr?n="LinearDisplayP3ToLinearSRGB":t===Sr&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),i){case Gn:case Pr:return[n,"LinearTransferOETF"];case Ke:case So:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Xm(i.getShaderSource(t),a)}else return s}function Ym(i,t){const e=qm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Km(i,t){let e;switch(t){case fc:e="Linear";break;case pc:e="Reinhard";break;case mc:e="OptimizedCineon";break;case po:e="ACESFilmic";break;case gc:e="AgX";break;case _c:e="Neutral";break;case nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function Jm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ds(i){return i!==""}function Ll(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(jm,t0)}const Qm=new Map;function t0(i,t){let e=Ht[t];if(e===void 0){const n=Qm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oo(e)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(i){return i.replace(e0,n0)}function n0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ul(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===uc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function a0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case tu:t="ENVMAP_BLENDING_MIX";break;case eu:t="ENVMAP_BLENDING_ADD";break}return t}function o0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=i0(e),c=s0(e),u=r0(e),h=a0(e),d=o0(e),f=$m(e),g=Jm(r),_=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(m=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==kn?Km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),a=oo(a),a=Ll(a,e),a=Dl(a,e),o=oo(o),o=Ll(o,e),o=Dl(o,e),a=Il(a),o=Il(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+a,T=w+p+o,F=Cl(s,s.VERTEX_SHADER,x),A=Cl(s,s.FRAGMENT_SHADER,T);s.attachShader(_,F),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(F).trim(),G=s.getShaderInfoLog(A).trim();let X=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,A);else{const J=Pl(s,F,"vertex"),U=Pl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+J+`
`+U)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:X,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(F),s.deleteShader(A),I=new mr(s,_),y=Zm(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Gm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=A,this}let c0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new u0(t),e.set(t,n)),n}}class u0{constructor(t){this.id=c0++,this.code=t,this.usedTimes=0}}function d0(i,t,e,n,s,r,a){const o=new wo,l=new h0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,k,O){const G=k.fog,X=O.geometry,W=y.isMeshStandardMaterial?k.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),U=J&&J.mapping===Cr?J.image.height:null,Y=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=K!==void 0?K.length:0;let Mt=0;X.morphAttributes.position!==void 0&&(Mt=1),X.morphAttributes.normal!==void 0&&(Mt=2),X.morphAttributes.color!==void 0&&(Mt=3);let It,V,j,dt;if(Y){const $t=pn[Y];It=$t.vertexShader,V=$t.fragmentShader}else It=y.vertexShader,V=y.fragmentShader,l.update(y),j=l.getVertexShaderID(y),dt=l.getFragmentShaderID(y);const ct=i.getRenderTarget(),Lt=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,Xt=!!y.map,ue=!!y.matcap,C=!!J,me=!!y.aoMap,te=!!y.lightMap,ie=!!y.bumpMap,Tt=!!y.normalMap,ge=!!y.displacementMap,Ut=!!y.emissiveMap,Bt=!!y.metalnessMap,b=!!y.roughnessMap,v=y.anisotropy>0,H=y.clearcoat>0,Q=y.dispersion>0,nt=y.iridescence>0,Z=y.sheen>0,wt=y.transmission>0,ut=v&&!!y.anisotropyMap,mt=H&&!!y.clearcoatMap,kt=H&&!!y.clearcoatNormalMap,st=H&&!!y.clearcoatRoughnessMap,pt=nt&&!!y.iridescenceMap,qt=nt&&!!y.iridescenceThicknessMap,Dt=Z&&!!y.sheenColorMap,gt=Z&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,Wt=!!y.specularColorMap,le=!!y.specularIntensityMap,L=wt&&!!y.transmissionMap,rt=wt&&!!y.thicknessMap,q=!!y.gradientMap,$=!!y.alphaMap,lt=y.alphaTest>0,Rt=!!y.alphaHash,Yt=!!y.extensions;let _e=kn;y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Re={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:It,fragmentShader:V,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:dt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Gn,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:ue,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:U,aoMap:me,lightMap:te,bumpMap:ie,normalMap:Tt,displacementMap:d&&ge,emissiveMap:Ut,normalMapObjectSpace:Tt&&y.normalMapType===au,normalMapTangentSpace:Tt&&y.normalMapType===Cc,metalnessMap:Bt,roughnessMap:b,anisotropy:v,anisotropyMap:ut,clearcoat:H,clearcoatMap:mt,clearcoatNormalMap:kt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:nt,iridescenceMap:pt,iridescenceThicknessMap:qt,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Nt,specularColorMap:Wt,specularIntensityMap:le,transmission:wt,transmissionMap:L,thicknessMap:rt,gradientMap:q,opaque:y.transparent===!1&&y.blending===Hi&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:Rt,combine:y.combine,mapUv:Xt&&_(y.map.channel),aoMapUv:me&&_(y.aoMap.channel),lightMapUv:te&&_(y.lightMap.channel),bumpMapUv:ie&&_(y.bumpMap.channel),normalMapUv:Tt&&_(y.normalMap.channel),displacementMapUv:ge&&_(y.displacementMap.channel),emissiveMapUv:Ut&&_(y.emissiveMap.channel),metalnessMapUv:Bt&&_(y.metalnessMap.channel),roughnessMapUv:b&&_(y.roughnessMap.channel),anisotropyMapUv:ut&&_(y.anisotropyMap.channel),clearcoatMapUv:mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(y.sheenRoughnessMap.channel),specularMapUv:Nt&&_(y.specularMap.channel),specularColorMapUv:Wt&&_(y.specularColorMap.channel),specularIntensityMapUv:le&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:rt&&_(y.thicknessMap.channel),alphaMapUv:$&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Tt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Xt||$),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Mt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===Ie,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Yt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&y.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(M,y),x(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),y.push(o.mask)}function T(y){const M=g[y.type];let P;if(M){const k=pn[M];P=Ts.clone(k.uniforms)}else P=y.uniforms;return P}function F(y,M){let P;for(let k=0,O=u.length;k<O;k++){const G=u[k];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new l0(i,M,y,r),u.push(P)),P}function A(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:F,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:I}}function f0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function p0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||p0),n.length>1&&n.sort(d||Nl),s.length>1&&s.sort(d||Nl)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function m0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fl,i.set(n,[a])):s>=r.length?(a=new Fl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Ft};break;case"SpotLight":e={position:new E,direction:new E,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function _0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let v0=0;function x0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M0(i){const t=new g0,e=_0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,r=new re,a=new re;function o(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,x=0,T=0,F=0,A=0,R=0;c.sort(x0);for(let y=0,M=c.length;y<M;y++){const P=c[y],k=P.color,O=P.intensity,G=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=k.r*O,h+=k.g*O,d+=k.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);R++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,U=e.get(P);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=W,f++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(k).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const J=P.shadow;if(P.map&&(n.spotLightMap[F]=P.map,F++,J.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,P.castShadow){const U=e.get(P);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=X,T++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(k).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const J=P.shadow,U=e.get(P);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==x||I.numSpotShadows!==T||I.numSpotMaps!==F||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=T+F-A,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=x,I.numSpotShadows=T,I.numSpotMaps=F,I.numLightProbes=R,n.version=v0++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const x=c[p];if(x.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(x.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ol(i){const t=new M0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function S0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ol(i),t.set(s,[o])):r>=a.length?(o=new Ol(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class y0 extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T0 extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
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
}`;function A0(i,t,e){let n=new Ao;const s=new at,r=new at,a=new ae,o=new y0({depthPacking:ru}),l=new T0,c={},u=e.maxTextureSize,h={[Hn]:Ie,[Ie]:Hn,[mn]:mn},d=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:E0,fragmentShader:w0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let p=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Rn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=p!==wn&&this.type===wn,G=p===wn&&this.type!==wn;for(let X=0,W=A.length;X<W;X++){const J=A[X],U=J.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Y=U.getFrameExtents();if(s.multiply(Y),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,U.mapSize.y=r.y)),U.map===null||O===!0||G===!0){const et=this.type!==wn?{minFilter:Qe,magFilter:Qe}:{};U.map!==null&&U.map.dispose(),U.map=new hn(s.x,s.y,et),U.map.texture.name=J.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const K=U.getViewportCount();for(let et=0;et<K;et++){const Mt=U.getViewport(et);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),k.viewport(a),U.updateMatrices(J,et),n=U.getFrustum(),T(R,I,U.camera,J,this.type)}U.isPointLightShadow!==!0&&this.type===wn&&w(U,I),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,P)};function w(A,R){const I=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,I,f,_,null)}function x(A,R,I,y){let M=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=M.uuid,O=R.uuid;let G=c[k];G===void 0&&(G={},c[k]=G);let X=G[O];X===void 0&&(X=M.clone(),G[O]=X,R.addEventListener("dispose",F)),M=X}if(M.visible=R.visible,M.wireframe=R.wireframe,y===wn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=I}return M}function T(A,R,I,y,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const O=t.update(A),G=A.material;if(Array.isArray(G)){const X=O.groups;for(let W=0,J=X.length;W<J;W++){const U=X[W],Y=G[U.materialIndex];if(Y&&Y.visible){const K=x(A,Y,y,M);A.onBeforeShadow(i,A,R,I,O,K,U),i.renderBufferDirect(I,null,O,K,A,U),A.onAfterShadow(i,A,R,I,O,K,U)}}}else if(G.visible){const X=x(A,G,y,M);A.onBeforeShadow(i,A,R,I,O,X,null),i.renderBufferDirect(I,null,O,X,A,null),A.onAfterShadow(i,A,R,I,O,X,null)}}const k=A.children;for(let O=0,G=k.length;O<G;O++)T(k[O],R,I,y,M)}function F(A){A.target.removeEventListener("dispose",F);for(const I in c){const y=c[I],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function b0(i){function t(){let L=!1;const rt=new ae;let q=null;const $=new ae(0,0,0,0);return{setMask:function(lt){q!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){L=lt},setClear:function(lt,Rt,Yt,_e,Re){Re===!0&&(lt*=_e,Rt*=_e,Yt*=_e),rt.set(lt,Rt,Yt,_e),$.equals(rt)===!1&&(i.clearColor(lt,Rt,Yt,_e),$.copy(rt))},reset:function(){L=!1,q=null,$.set(-1,0,0,0)}}}function e(){let L=!1,rt=null,q=null,$=null;return{setTest:function(lt){lt?dt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(lt){rt!==lt&&!L&&(i.depthMask(lt),rt=lt)},setFunc:function(lt){if(q!==lt){switch(lt){case Yh:i.depthFunc(i.NEVER);break;case Kh:i.depthFunc(i.ALWAYS);break;case $h:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case Jh:i.depthFunc(i.EQUAL);break;case Zh:i.depthFunc(i.GEQUAL);break;case jh:i.depthFunc(i.GREATER);break;case Qh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=lt}},setLocked:function(lt){L=lt},setClear:function(lt){$!==lt&&(i.clearDepth(lt),$=lt)},reset:function(){L=!1,rt=null,q=null,$=null}}}function n(){let L=!1,rt=null,q=null,$=null,lt=null,Rt=null,Yt=null,_e=null,Re=null;return{setTest:function($t){L||($t?dt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function($t){rt!==$t&&!L&&(i.stencilMask($t),rt=$t)},setFunc:function($t,vn,dn){(q!==$t||$!==vn||lt!==dn)&&(i.stencilFunc($t,vn,dn),q=$t,$=vn,lt=dn)},setOp:function($t,vn,dn){(Rt!==$t||Yt!==vn||_e!==dn)&&(i.stencilOp($t,vn,dn),Rt=$t,Yt=vn,_e=dn)},setLocked:function($t){L=$t},setClear:function($t){Re!==$t&&(i.clearStencil($t),Re=$t)},reset:function(){L=!1,rt=null,q=null,$=null,lt=null,Rt=null,Yt=null,_e=null,Re=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,w=null,x=null,T=null,F=null,A=new Ft(0,0,0),R=0,I=!1,y=null,M=null,P=null,k=null,O=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let U=null,Y={};const K=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),Mt=new ae().fromArray(K),It=new ae().fromArray(et);function V(L,rt,q,$){const lt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(L,Rt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<q;Yt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(rt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return Rt}const j={};j[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),r.setFunc(xr),ie(!1),Tt(Xo),dt(i.CULL_FACE),me(Rn);function dt(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function ct(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Lt(L,rt){return u[L]!==rt?(i.bindFramebuffer(L,rt),u[L]=rt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ot(L,rt){let q=d,$=!1;if(L){q=h.get(rt),q===void 0&&(q=[],h.set(rt,q));const lt=L.textures;if(q.length!==lt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Yt=lt.length;Rt<Yt;Rt++)q[Rt]=i.COLOR_ATTACHMENT0+Rt;q.length=lt.length,$=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,$=!0);$&&i.drawBuffers(q)}function Xt(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const ue={[ni]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};ue[Dh]=i.MIN,ue[Ih]=i.MAX;const C={[Uh]:i.ZERO,[Nh]:i.ONE,[Fh]:i.SRC_COLOR,[Ra]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function me(L,rt,q,$,lt,Rt,Yt,_e,Re,$t){if(L===Rn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),L!==Ch){if(L!==_||$t!==I){if((m!==ni||x!==ni)&&(i.blendEquation(i.FUNC_ADD),m=ni,x=ni),$t)switch(L){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,w=null,T=null,F=null,A.set(0,0,0),R=0,_=L,I=$t}return}lt=lt||rt,Rt=Rt||q,Yt=Yt||$,(rt!==m||lt!==x)&&(i.blendEquationSeparate(ue[rt],ue[lt]),m=rt,x=lt),(q!==p||$!==w||Rt!==T||Yt!==F)&&(i.blendFuncSeparate(C[q],C[$],C[Rt],C[Yt]),p=q,w=$,T=Rt,F=Yt),(_e.equals(A)===!1||Re!==R)&&(i.blendColor(_e.r,_e.g,_e.b,Re),A.copy(_e),R=Re),_=L,I=!1}function te(L,rt){L.side===mn?ct(i.CULL_FACE):dt(i.CULL_FACE);let q=L.side===Ie;rt&&(q=!q),ie(q),L.blending===Hi&&L.transparent===!1?me(Rn):me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const $=L.stencilWrite;a.setTest($),$&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function Tt(L){L!==bh?(dt(i.CULL_FACE),L!==M&&(L===Xo?i.cullFace(i.BACK):L===Rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),M=L}function ge(L){L!==P&&(X&&i.lineWidth(L),P=L)}function Ut(L,rt,q){L?(dt(i.POLYGON_OFFSET_FILL),(k!==rt||O!==q)&&(i.polygonOffset(rt,q),k=rt,O=q)):ct(i.POLYGON_OFFSET_FILL)}function Bt(L){L?dt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function b(L){L===void 0&&(L=i.TEXTURE0+G-1),U!==L&&(i.activeTexture(L),U=L)}function v(L,rt,q){q===void 0&&(U===null?q=i.TEXTURE0+G-1:q=U);let $=Y[q];$===void 0&&($={type:void 0,texture:void 0},Y[q]=$),($.type!==L||$.texture!==rt)&&(U!==q&&(i.activeTexture(q),U=q),i.bindTexture(L,rt||j[L]),$.type=L,$.texture=rt)}function H(){const L=Y[U];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){Mt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Mt.copy(L))}function gt(L){It.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),It.copy(L))}function Nt(L,rt){let q=l.get(rt);q===void 0&&(q=new WeakMap,l.set(rt,q));let $=q.get(L);$===void 0&&($=i.getUniformBlockIndex(rt,L.name),q.set(L,$))}function Wt(L,rt){const $=l.get(rt).get(L);o.get(rt)!==$&&(i.uniformBlockBinding(rt,$,L.__bindingPointIndex),o.set(rt,$))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},U=null,Y={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,w=null,x=null,T=null,F=null,A=new Ft(0,0,0),R=0,I=!1,y=null,M=null,P=null,k=null,O=null,Mt.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:dt,disable:ct,bindFramebuffer:Lt,drawBuffers:Ot,useProgram:Xt,setBlending:me,setMaterial:te,setFlipSided:ie,setCullFace:Tt,setLineWidth:ge,setPolygonOffset:Ut,setScissorTest:Bt,activeTexture:b,bindTexture:v,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:pt,texImage3D:qt,updateUBOMapping:Nt,uniformBlockBinding:Wt,texStorage2D:kt,texStorage3D:st,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Dt,viewport:gt,reset:le}}function zl(i,t,e,n){const s=R0(n);switch(e){case yc:return i*t;case Ec:return i*t;case wc:return i*t*2;case Ac:return i*t/s.components*s.byteLength;case vo:return i*t/s.components*s.byteLength;case bc:return i*t*2/s.components*s.byteLength;case xo:return i*t*2/s.components*s.byteLength;case Tc:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Mo:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rc:case no:return Math.ceil(i/4)*Math.ceil(t/4)*8;case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function R0(i){switch(i){case Ln:case xc:return{byteLength:1,components:1};case Ss:case Mc:case Cn:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case hi:case mo:case An:return{byteLength:4,components:1};case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function C0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):Er("canvas")}function _(b,v,H){let Q=1;const nt=Bt(b);if((nt.width>H||nt.height>H)&&(Q=H/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(Q*nt.width),wt=Math.floor(Q*nt.height);h===void 0&&(h=g(Z,wt));const ut=v?g(Z,wt):h;return ut.width=Z,ut.height=wt,ut.getContext("2d").drawImage(b,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+wt+")."),ut}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Qe&&b.minFilter!==an}function p(b){i.generateMipmap(b)}function w(b,v,H,Q,nt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=v;if(v===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),v===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),v===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),v===i.RGBA){const wt=nt?Mr:Qt.getTransfer(Q);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=wt===se?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(b,v){let H;return b?v===null||v===hi||v===qi?H=i.DEPTH24_STENCIL8:v===An?H=i.DEPTH32F_STENCIL8:v===Ss&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hi||v===qi?H=i.DEPTH_COMPONENT24:v===An?H=i.DEPTH_COMPONENT32F:v===Ss&&(H=i.DEPTH_COMPONENT16),H}function T(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qe&&b.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function F(b){const v=b.target;v.removeEventListener("dispose",F),R(v),v.isVideoTexture&&u.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),y(v)}function R(b){const v=n.get(b);if(v.__webglInit===void 0)return;const H=b.source,Q=d.get(H);if(Q){const nt=Q[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(b),Object.keys(Q).length===0&&d.delete(H)}n.remove(b)}function I(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const H=b.source,Q=d.get(H);delete Q[v.__cacheKey],a.memory.textures--}function y(b){const v=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let nt=0;nt<v.__webglFramebuffer[Q].length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[Q][nt]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=b.textures;for(let Q=0,nt=H.length;Q<nt;Q++){const Z=n.get(H[Q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(H[Q])}n.remove(b)}let M=0;function P(){M=0}function k(){const b=M;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),M+=1,b}function O(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function G(b,v){const H=n.get(b);if(b.isVideoTexture&&ge(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(H,b,v);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function X(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){It(H,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function W(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){It(H,b,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function J(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){V(H,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const U={[Ms]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},Y={[Qe]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},K={[ou]:i.NEVER,[fu]:i.ALWAYS,[lu]:i.LESS,[Pc]:i.LEQUAL,[cu]:i.EQUAL,[du]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function et(b,v){if(v.type===An&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Vr||v.magFilter===Ps||v.magFilter===ri||v.minFilter===an||v.minFilter===Vr||v.minFilter===Ps||v.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,U[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,U[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,U[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Y[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Y[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,K[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qe||v.minFilter!==Ps&&v.minFilter!==ri||v.type===An&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Mt(b,v){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",F));const Q=v.source;let nt=d.get(Q);nt===void 0&&(nt={},d.set(Q,nt));const Z=O(v);if(Z!==b.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[Z].usedTimes++;const wt=nt[b.__cacheKey];wt!==void 0&&(nt[b.__cacheKey].usedTimes--,wt.usedTimes===0&&I(v)),b.__cacheKey=Z,b.__webglTexture=nt[Z].texture}return H}function It(b,v,H){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);const nt=Mt(b,v),Z=v.source;e.bindTexture(Q,b.__webglTexture,i.TEXTURE0+H);const wt=n.get(Z);if(Z.version!==wt.__version||nt===!0){e.activeTexture(i.TEXTURE0+H);const ut=Qt.getPrimaries(Qt.workingColorSpace),mt=v.colorSpace===Bn?null:Qt.getPrimaries(v.colorSpace),kt=v.colorSpace===Bn||ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let st=_(v.image,!1,s.maxTextureSize);st=Ut(v,st);const pt=r.convert(v.format,v.colorSpace),qt=r.convert(v.type);let Dt=w(v.internalFormat,pt,qt,v.colorSpace,v.isVideoTexture);et(Q,v);let gt;const Nt=v.mipmaps,Wt=v.isVideoTexture!==!0,le=wt.__version===void 0||nt===!0,L=Z.dataReady,rt=T(v,st);if(v.isDepthTexture)Dt=x(v.format===Yi,v.type),le&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Dt,st.width,st.height,0,pt,qt,null));else if(v.isDataTexture)if(Nt.length>0){Wt&&le&&e.texStorage2D(i.TEXTURE_2D,rt,Dt,Nt[0].width,Nt[0].height);for(let q=0,$=Nt.length;q<$;q++)gt=Nt[q],Wt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,pt,qt,gt.data):e.texImage2D(i.TEXTURE_2D,q,Dt,gt.width,gt.height,0,pt,qt,gt.data);v.generateMipmaps=!1}else Wt?(le&&e.texStorage2D(i.TEXTURE_2D,rt,Dt,st.width,st.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,pt,qt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,st.width,st.height,0,pt,qt,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Dt,Nt[0].width,Nt[0].height,st.depth);for(let q=0,$=Nt.length;q<$;q++)if(gt=Nt[q],v.format!==cn)if(pt!==null)if(Wt){if(L)if(v.layerUpdates.size>0){const lt=zl(gt.width,gt.height,v.format,v.type);for(const Rt of v.layerUpdates){const Yt=gt.data.subarray(Rt*lt/gt.data.BYTES_PER_ELEMENT,(Rt+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Rt,gt.width,gt.height,1,pt,Yt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,st.depth,pt,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Dt,gt.width,gt.height,st.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,st.depth,pt,qt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Dt,gt.width,gt.height,st.depth,0,pt,qt,gt.data)}else{Wt&&le&&e.texStorage2D(i.TEXTURE_2D,rt,Dt,Nt[0].width,Nt[0].height);for(let q=0,$=Nt.length;q<$;q++)gt=Nt[q],v.format!==cn?pt!==null?Wt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,pt,qt,gt.data):e.texImage2D(i.TEXTURE_2D,q,Dt,gt.width,gt.height,0,pt,qt,gt.data)}else if(v.isDataArrayTexture)if(Wt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Dt,st.width,st.height,st.depth),L)if(v.layerUpdates.size>0){const q=zl(st.width,st.height,v.format,v.type);for(const $ of v.layerUpdates){const lt=st.data.subarray($*q/st.data.BYTES_PER_ELEMENT,($+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,st.width,st.height,1,pt,qt,lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,pt,qt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,pt,qt,st.data);else if(v.isData3DTexture)Wt?(le&&e.texStorage3D(i.TEXTURE_3D,rt,Dt,st.width,st.height,st.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,pt,qt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,pt,qt,st.data);else if(v.isFramebufferTexture){if(le)if(Wt)e.texStorage2D(i.TEXTURE_2D,rt,Dt,st.width,st.height);else{let q=st.width,$=st.height;for(let lt=0;lt<rt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Dt,q,$,0,pt,qt,null),q>>=1,$>>=1}}else if(Nt.length>0){if(Wt&&le){const q=Bt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,rt,Dt,q.width,q.height)}for(let q=0,$=Nt.length;q<$;q++)gt=Nt[q],Wt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,pt,qt,gt):e.texImage2D(i.TEXTURE_2D,q,Dt,pt,qt,gt);v.generateMipmaps=!1}else if(Wt){if(le){const q=Bt(st);e.texStorage2D(i.TEXTURE_2D,rt,Dt,q.width,q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,qt,st)}else e.texImage2D(i.TEXTURE_2D,0,Dt,pt,qt,st);m(v)&&p(Q),wt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function V(b,v,H){if(v.image.length!==6)return;const Q=Mt(b,v),nt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+H);const Z=n.get(nt);if(nt.version!==Z.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const wt=Qt.getPrimaries(Qt.workingColorSpace),ut=v.colorSpace===Bn?null:Qt.getPrimaries(v.colorSpace),mt=v.colorSpace===Bn||wt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const kt=v.isCompressedTexture||v.image[0].isCompressedTexture,st=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!kt&&!st?pt[$]=_(v.image[$],!0,s.maxCubemapSize):pt[$]=st?v.image[$].image:v.image[$],pt[$]=Ut(v,pt[$]);const qt=pt[0],Dt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),Nt=w(v.internalFormat,Dt,gt,v.colorSpace),Wt=v.isVideoTexture!==!0,le=Z.__version===void 0||Q===!0,L=nt.dataReady;let rt=T(v,qt);et(i.TEXTURE_CUBE_MAP,v);let q;if(kt){Wt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Nt,qt.width,qt.height);for(let $=0;$<6;$++){q=pt[$].mipmaps;for(let lt=0;lt<q.length;lt++){const Rt=q[lt];v.format!==cn?Dt!==null?Wt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Nt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,Rt.width,Rt.height,Dt,gt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Nt,Rt.width,Rt.height,0,Dt,gt,Rt.data)}}}else{if(q=v.mipmaps,Wt&&le){q.length>0&&rt++;const $=Bt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Nt,$.width,$.height)}for(let $=0;$<6;$++)if(st){Wt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Dt,gt,pt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Nt,pt[$].width,pt[$].height,0,Dt,gt,pt[$].data);for(let lt=0;lt<q.length;lt++){const Yt=q[lt].image[$].image;Wt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Yt.width,Yt.height,Dt,gt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Nt,Yt.width,Yt.height,0,Dt,gt,Yt.data)}}else{Wt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Dt,gt,pt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Nt,Dt,gt,pt[$]);for(let lt=0;lt<q.length;lt++){const Rt=q[lt];Wt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Dt,gt,Rt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Nt,Dt,gt,Rt.image[$])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Z.__version=nt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function j(b,v,H,Q,nt,Z){const wt=r.convert(H.format,H.colorSpace),ut=r.convert(H.type),mt=w(H.internalFormat,wt,ut,H.colorSpace);if(!n.get(v).__hasExternalTextures){const st=Math.max(1,v.width>>Z),pt=Math.max(1,v.height>>Z);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,mt,st,pt,v.depth,0,wt,ut,null):e.texImage2D(nt,Z,mt,st,pt,0,wt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,nt,n.get(H).__webglTexture,0,ie(v)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,nt,n.get(H).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(b,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const Q=v.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,Z=x(v.stencilBuffer,nt),wt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=ie(v);Tt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Z,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,b)}else{const Q=v.textures;for(let nt=0;nt<Q.length;nt++){const Z=Q[nt],wt=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),mt=w(Z.internalFormat,wt,ut,Z.colorSpace),kt=ie(v);H&&Tt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,mt,v.width,v.height):Tt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,mt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,nt=ie(v);if(v.depthTexture.format===Vi)Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Yi)Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Lt(b){const v=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ct(v.__webglFramebuffer,b)}else if(H){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=i.createRenderbuffer(),dt(v.__webglDepthbuffer[Q],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),dt(v.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(b,v,H){const Q=n.get(b);v!==void 0&&j(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Lt(b)}function Xt(b){const v=b.texture,H=n.get(b),Q=n.get(v);b.addEventListener("dispose",A);const nt=b.textures,Z=b.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let mt=0;mt<v.mipmaps.length;mt++)H.__webglFramebuffer[ut][mt]=i.createFramebuffer()}else H.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)H.__webglFramebuffer[ut]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ut=0,mt=nt.length;ut<mt;ut++){const kt=n.get(nt[ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Tt(b)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const mt=nt[ut];H.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const kt=r.convert(mt.format,mt.colorSpace),st=r.convert(mt.type),pt=w(mt.internalFormat,kt,st,mt.colorSpace,b.isXRRenderTarget===!0),qt=ie(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,pt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),et(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)j(H.__webglFramebuffer[ut][mt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else j(H.__webglFramebuffer[ut],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ut=0,mt=nt.length;ut<mt;ut++){const kt=nt[ut],st=n.get(kt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),et(i.TEXTURE_2D,kt),j(H.__webglFramebuffer,b,kt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ut=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),et(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)j(H.__webglFramebuffer[mt],b,v,i.COLOR_ATTACHMENT0,ut,mt);else j(H.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,ut,0);m(v)&&p(ut),e.unbindTexture()}b.depthBuffer&&Lt(b)}function ue(b){const v=b.textures;for(let H=0,Q=v.length;H<Q;H++){const nt=v[H];if(m(nt)){const Z=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(nt).__webglTexture;e.bindTexture(Z,wt),p(Z),e.unbindTexture()}}}const C=[],me=[];function te(b){if(b.samples>0){if(Tt(b)===!1){const v=b.textures,H=b.width,Q=b.height;let nt=i.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(b),ut=v.length>1;if(ut)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const kt=n.get(v[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,nt,i.NEAREST),l===!0&&(C.length=0,me.length=0,C.push(i.COLOR_ATTACHMENT0+mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(C.push(Z),me.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const kt=n.get(v[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ie(b){return Math.min(s.maxSamples,b.samples)}function Tt(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ge(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function Ut(b,v){const H=b.colorSpace,Q=b.format,nt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==Gn&&H!==Bn&&(Qt.getTransfer(H)===se?(Q!==cn||nt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Bt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=Ot,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Tt}function P0(i,t){function e(n,s=Bn){let r;const a=Qt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.BYTE;if(n===Mc)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===yc)return i.ALPHA;if(n===Tc)return i.RGB;if(n===cn)return i.RGBA;if(n===Ec)return i.LUMINANCE;if(n===wc)return i.LUMINANCE_ALPHA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Ac)return i.RED;if(n===vo)return i.RED_INTEGER;if(n===bc)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===za||n===Ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===za)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===$a||n===Ja||n===Za||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===to||n===eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class L0 extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gt extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D0={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
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

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new De({vertexShader:I0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends Zi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new N0,m=e.getContextAttributes();let p=null,w=null;const x=[],T=[],F=new at;let A=null;const R=new $e;R.layers.enable(1),R.viewport=new ae;const I=new $e;I.layers.enable(2),I.viewport=new ae;const y=[R,I],M=new L0;M.layers.enable(1),M.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=x[V];return j===void 0&&(j=new fa,x[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=x[V];return j===void 0&&(j=new fa,x[V]=j),j.getGripSpace()},this.getHand=function(V){let j=x[V];return j===void 0&&(j=new fa,x[V]=j),j.getHandSpace()};function O(V){const j=T.indexOf(V.inputSource);if(j===-1)return;const dt=x[j];dt!==void 0&&(dt.update(V.inputSource,V.frame,c||a),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let V=0;V<x.length;V++){const j=T[V];j!==null&&(T[V]=null,x[V].disconnect(j))}P=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,w=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new hn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,dt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Yi:Vi,dt=m.stencil?qi:hi);const Lt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new hn(d.textureWidth,d.textureHeight,{format:cn,type:Ln,depthTexture:new Hc(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(V){for(let j=0;j<V.removed.length;j++){const dt=V.removed[j],ct=T.indexOf(dt);ct>=0&&(T[ct]=null,x[ct].disconnect(dt))}for(let j=0;j<V.added.length;j++){const dt=V.added[j];let ct=T.indexOf(dt);if(ct===-1){for(let Ot=0;Ot<x.length;Ot++)if(Ot>=T.length){T.push(dt),ct=Ot;break}else if(T[Ot]===null){T[Ot]=dt,ct=Ot;break}if(ct===-1)break}const Lt=x[ct];Lt&&Lt.connect(dt)}}const W=new E,J=new E;function U(V,j,dt){W.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(dt.matrixWorld);const ct=W.distanceTo(J),Lt=j.projectionMatrix.elements,Ot=dt.projectionMatrix.elements,Xt=Lt[14]/(Lt[10]-1),ue=Lt[14]/(Lt[10]+1),C=(Lt[9]+1)/Lt[5],me=(Lt[9]-1)/Lt[5],te=(Lt[8]-1)/Lt[0],ie=(Ot[8]+1)/Ot[0],Tt=Xt*te,ge=Xt*ie,Ut=ct/(-te+ie),Bt=Ut*-te;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Bt),V.translateZ(Ut),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const b=Xt+Ut,v=ue+Ut,H=Tt-Bt,Q=ge+(ct-Bt),nt=C*ue/v*b,Z=me*ue/v*b;V.projectionMatrix.makePerspective(H,Q,nt,Z,b,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),M.near=I.near=R.near=V.near,M.far=I.far=R.far=V.far,(P!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far,R.near=P,R.far=k,I.near=P,I.far=k,R.updateProjectionMatrix(),I.updateProjectionMatrix(),V.updateProjectionMatrix());const j=V.parent,dt=M.cameras;Y(M,j);for(let ct=0;ct<dt.length;ct++)Y(dt[ct],j);dt.length===2?U(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),K(V,M,j)};function K(V,j,dt){dt===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ys*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let et=null;function Mt(V,j){if(u=j.getViewerPose(c||a),g=j,u!==null){const dt=u.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ct=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let Ot=0;Ot<dt.length;Ot++){const Xt=dt[Ot];let ue=null;if(f!==null)ue=f.getViewport(Xt);else{const me=h.getViewSubImage(d,Xt);ue=me.viewport,Ot===0&&(t.setRenderTargetTextures(w,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(w))}let C=y[Ot];C===void 0&&(C=new $e,C.layers.enable(Ot),C.viewport=new ae,y[Ot]=C),C.matrix.fromArray(Xt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Xt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(ue.x,ue.y,ue.width,ue.height),Ot===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push(C)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ot=h.getDepthInformation(dt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,s.renderState)}}for(let dt=0;dt<x.length;dt++){const ct=T[dt],Lt=x[dt];ct!==null&&Lt!==void 0&&Lt.update(ct,j,c||a)}et&&et(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const It=new kc;It.setAnimationLoop(Mt),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}const jn=new un,O0=new re;function z0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),x=w.envMap,T=w.envMapRotation;x&&(m.envMap.value=x,jn.copy(T),jn.x*=-1,jn.y*=-1,jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(jn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){const T=x.program;n.uniformBlockBinding(w,T)}function c(w,x){let T=s[w.id];T===void 0&&(g(w),T=u(w),s[w.id]=T,w.addEventListener("dispose",m));const F=x.program;n.updateUBOMapping(w,F);const A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function u(w){const x=h();w.__bindingPointIndex=x;const T=i.createBuffer(),F=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,F,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=s[w.id],T=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,R=T.length;A<R;A++){const I=Array.isArray(T[A])?T[A]:[T[A]];for(let y=0,M=I.length;y<M;y++){const P=I[y];if(f(P,A,y,F)===!0){const k=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let X=0;X<O.length;X++){const W=O[X],J=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+G,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,x,T,F){const A=w.value,R=x+"_"+T;if(F[R]===void 0)return typeof A=="number"||typeof A=="boolean"?F[R]=A:F[R]=A.clone(),!0;{const I=F[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return F[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(w){const x=w.uniforms;let T=0;const F=16;for(let R=0,I=x.length;R<I;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,P=y.length;M<P;M++){const k=y[M],O=Array.isArray(k.value)?k.value:[k.value];for(let G=0,X=O.length;G<X;G++){const W=O[G],J=_(W),U=T%F;U!==0&&F-U<J.boundary&&(T+=F-U),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=J.storage}}}const A=T%F;return A>0&&(T+=F-A),w.__size=T,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class k0{constructor(t={}){const{canvas:e=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=kn,this.toneMappingExposure=1;const x=this;let T=!1,F=0,A=0,R=null,I=-1,y=null;const M=new ae,P=new ae;let k=null;const O=new Ft(0);let G=0,X=e.width,W=e.height,J=1,U=null,Y=null;const K=new ae(0,0,X,W),et=new ae(0,0,X,W);let Mt=!1;const It=new Ao;let V=!1,j=!1;const dt=new re,ct=new E,Lt=new ae,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ue(){return R===null?J:1}let C=n;function me(S,D){return e.getContext(S,D)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",lt,!1),C===null){const D="webgl2";if(C=me(D,S),C===null)throw me(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let te,ie,Tt,ge,Ut,Bt,b,v,H,Q,nt,Z,wt,ut,mt,kt,st,pt,qt,Dt,gt,Nt,Wt,le;function L(){te=new Yp(C),te.init(),Nt=new P0(C,te),ie=new Hp(C,te,t,Nt),Tt=new b0(C),ge=new Jp(C),Ut=new f0,Bt=new C0(C,te,Tt,Ut,ie,Nt,ge),b=new Gp(x),v=new qp(x),H=new nd(C),Wt=new Bp(C,H),Q=new Kp(C,H,ge,Wt),nt=new jp(C,Q,H,ge),qt=new Zp(C,ie,Bt),kt=new Vp(Ut),Z=new d0(x,b,v,te,ie,Wt,kt),wt=new z0(x,Ut),ut=new m0,mt=new S0(te),pt=new zp(x,b,v,Tt,nt,d,l),st=new A0(x,nt,ie),le=new B0(C,ge,ie,Tt),Dt=new kp(C,te,ge),gt=new $p(C,te,ge),ge.programs=Z.programs,x.capabilities=ie,x.extensions=te,x.properties=Ut,x.renderLists=ut,x.shadowMap=st,x.state=Tt,x.info=ge}L();const rt=new F0(x,C);this.xr=rt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(X,W,!1))},this.getSize=function(S){return S.set(X,W)},this.setSize=function(S,D,z=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,W=D,e.width=Math.floor(S*J),e.height=Math.floor(D*J),z===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(X*J,W*J).floor()},this.setDrawingBufferSize=function(S,D,z){X=S,W=D,J=z,e.width=Math.floor(S*z),e.height=Math.floor(D*z),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,D,z,B){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,D,z,B),Tt.viewport(M.copy(K).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(et)},this.setScissor=function(S,D,z,B){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,D,z,B),Tt.scissor(P.copy(et).multiplyScalar(J).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(S){Tt.setScissorTest(Mt=S)},this.setOpaqueSort=function(S){U=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(S=!0,D=!0,z=!0){let B=0;if(S){let N=!1;if(R!==null){const ot=R.texture.format;N=ot===Mo||ot===xo||ot===vo}if(N){const ot=R.texture.type,ft=ot===Ln||ot===hi||ot===Ss||ot===qi||ot===go||ot===_o,vt=pt.getClearColor(),xt=pt.getClearAlpha(),Ct=vt.r,Pt=vt.g,At=vt.b;ft?(f[0]=Ct,f[1]=Pt,f[2]=At,f[3]=xt,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=Ct,g[1]=Pt,g[2]=At,g[3]=xt,C.clearBufferiv(C.COLOR,0,g))}else B|=C.COLOR_BUFFER_BIT}D&&(B|=C.DEPTH_BUFFER_BIT),z&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),mt.dispose(),Ut.dispose(),b.dispose(),v.dispose(),nt.dispose(),Wt.dispose(),le.dispose(),Z.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",dn),rt.removeEventListener("sessionend",zo),qn.stop()};function q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=ge.autoReset,D=st.enabled,z=st.autoUpdate,B=st.needsUpdate,N=st.type;L(),ge.autoReset=S,st.enabled=D,st.autoUpdate=z,st.needsUpdate=B,st.type=N}function lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rt(S){const D=S.target;D.removeEventListener("dispose",Rt),Yt(D)}function Yt(S){_e(S),Ut.remove(S)}function _e(S){const D=Ut.get(S).programs;D!==void 0&&(D.forEach(function(z){Z.releaseProgram(z)}),S.isShaderMaterial&&Z.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,z,B,N,ot){D===null&&(D=Ot);const ft=N.isMesh&&N.matrixWorld.determinant()<0,vt=Th(S,D,z,B,N);Tt.setMaterial(B,ft);let xt=z.index,Ct=1;if(B.wireframe===!0){if(xt=Q.getWireframeAttribute(z),xt===void 0)return;Ct=2}const Pt=z.drawRange,At=z.attributes.position;let Jt=Pt.start*Ct,de=(Pt.start+Pt.count)*Ct;ot!==null&&(Jt=Math.max(Jt,ot.start*Ct),de=Math.min(de,(ot.start+ot.count)*Ct)),xt!==null?(Jt=Math.max(Jt,0),de=Math.min(de,xt.count)):At!=null&&(Jt=Math.max(Jt,0),de=Math.min(de,At.count));const fe=de-Jt;if(fe<0||fe===1/0)return;Wt.setup(N,B,vt,z,xt);let Ge,Zt=Dt;if(xt!==null&&(Ge=H.get(xt),Zt=gt,Zt.setIndex(Ge)),N.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*ue()),Zt.setMode(C.LINES)):Zt.setMode(C.TRIANGLES);else if(N.isLine){let St=B.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*ue()),N.isLineSegments?Zt.setMode(C.LINES):N.isLineLoop?Zt.setMode(C.LINE_LOOP):Zt.setMode(C.LINE_STRIP)}else N.isPoints?Zt.setMode(C.POINTS):N.isSprite&&Zt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const St=N._multiDrawStarts,Ce=N._multiDrawCounts,jt=N._multiDrawCount,en=xt?H.get(xt).bytesPerElement:1,mi=Ut.get(B).currentProgram.getUniforms();for(let We=0;We<jt;We++)mi.setValue(C,"_gl_DrawID",We),Zt.render(St[We]/en,Ce[We])}else if(N.isInstancedMesh)Zt.renderInstances(Jt,fe,N.count);else if(z.isInstancedBufferGeometry){const St=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ce=Math.min(z.instanceCount,St);Zt.renderInstances(Jt,fe,Ce)}else Zt.render(Jt,fe)};function Re(S,D,z){S.transparent===!0&&S.side===mn&&S.forceSinglePass===!1?(S.side=Ie,S.needsUpdate=!0,Cs(S,D,z),S.side=Hn,S.needsUpdate=!0,Cs(S,D,z),S.side=mn):Cs(S,D,z)}this.compile=function(S,D,z=null){z===null&&(z=S),m=mt.get(z),m.init(D),w.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const B=new Set;return S.traverse(function(N){const ot=N.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){const vt=ot[ft];Re(vt,z,N),B.add(vt)}else Re(ot,z,N),B.add(ot)}),w.pop(),m=null,B},this.compileAsync=function(S,D,z=null){const B=this.compile(S,D,z);return new Promise(N=>{function ot(){if(B.forEach(function(ft){Ut.get(ft).currentProgram.isReady()&&B.delete(ft)}),B.size===0){N(S);return}setTimeout(ot,10)}te.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let $t=null;function vn(S){$t&&$t(S)}function dn(){qn.stop()}function zo(){qn.start()}const qn=new kc;qn.setAnimationLoop(vn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(S){$t=S,rt.setAnimationLoop(S),S===null?qn.stop():qn.start()},rt.addEventListener("sessionstart",dn),rt.addEventListener("sessionend",zo),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(D),D=rt.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,R),m=mt.get(S,w.length),m.init(D),w.push(m),dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),It.setFromProjectionMatrix(dt),j=this.localClippingEnabled,V=kt.init(this.clippingPlanes,j),_=ut.get(S,p.length),_.init(),p.push(_),rt.enabled===!0&&rt.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&zr(ot,D,-1/0,x.sortObjects)}zr(S,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(U,Y),Xt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Xt&&pt.addToRenderList(_,S),this.info.render.frame++,V===!0&&kt.beginShadows();const z=m.state.shadowsArray;st.render(z,S,D),V===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(m.setupLights(),D.isArrayCamera){const ot=D.cameras;if(N.length>0)for(let ft=0,vt=ot.length;ft<vt;ft++){const xt=ot[ft];ko(B,N,S,xt)}Xt&&pt.render(S);for(let ft=0,vt=ot.length;ft<vt;ft++){const xt=ot[ft];Bo(_,S,xt,xt.viewport)}}else N.length>0&&ko(B,N,S,D),Xt&&pt.render(S),Bo(_,S,D);R!==null&&(Bt.updateMultisampleRenderTarget(R),Bt.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(x,S,D),Wt.resetDefaultState(),I=-1,y=null,w.pop(),w.length>0?(m=w[w.length-1],V===!0&&kt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function zr(S,D,z,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||It.intersectsSprite(S)){B&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const ft=nt.update(S),vt=S.material;vt.visible&&_.push(S,ft,vt,z,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||It.intersectsObject(S))){const ft=nt.update(S),vt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(vt)){const xt=ft.groups;for(let Ct=0,Pt=xt.length;Ct<Pt;Ct++){const At=xt[Ct],Jt=vt[At.materialIndex];Jt&&Jt.visible&&_.push(S,ft,Jt,z,Lt.z,At)}}else vt.visible&&_.push(S,ft,vt,z,Lt.z,null)}}const ot=S.children;for(let ft=0,vt=ot.length;ft<vt;ft++)zr(ot[ft],D,z,B)}function Bo(S,D,z,B){const N=S.opaque,ot=S.transmissive,ft=S.transparent;m.setupLightsView(z),V===!0&&kt.setGlobalState(x.clippingPlanes,z),B&&Tt.viewport(M.copy(B)),N.length>0&&Rs(N,D,z),ot.length>0&&Rs(ot,D,z),ft.length>0&&Rs(ft,D,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ko(S,D,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new hn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Cn:Ln,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const ot=m.state.transmissionRenderTarget[B.id],ft=B.viewport||M;ot.setSize(ft.z,ft.w);const vt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(O),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),Xt?pt.render(z):x.clear();const xt=x.toneMapping;x.toneMapping=kn;const Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),V===!0&&kt.setGlobalState(x.clippingPlanes,B),Rs(S,z,B),Bt.updateMultisampleRenderTarget(ot),Bt.updateRenderTargetMipmap(ot),te.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let At=0,Jt=D.length;At<Jt;At++){const de=D[At],fe=de.object,Ge=de.geometry,Zt=de.material,St=de.group;if(Zt.side===mn&&fe.layers.test(B.layers)){const Ce=Zt.side;Zt.side=Ie,Zt.needsUpdate=!0,Ho(fe,z,B,Ge,Zt,St),Zt.side=Ce,Zt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Bt.updateMultisampleRenderTarget(ot),Bt.updateRenderTargetMipmap(ot))}x.setRenderTarget(vt),x.setClearColor(O,G),Ct!==void 0&&(B.viewport=Ct),x.toneMapping=xt}function Rs(S,D,z){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ot=S.length;N<ot;N++){const ft=S[N],vt=ft.object,xt=ft.geometry,Ct=B===null?ft.material:B,Pt=ft.group;vt.layers.test(z.layers)&&Ho(vt,D,z,xt,Ct,Pt)}}function Ho(S,D,z,B,N,ot){S.onBeforeRender(x,D,z,B,N,ot),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=Ie,N.needsUpdate=!0,x.renderBufferDirect(z,D,B,N,S,ot),N.side=Hn,N.needsUpdate=!0,x.renderBufferDirect(z,D,B,N,S,ot),N.side=mn):x.renderBufferDirect(z,D,B,N,S,ot),S.onAfterRender(x,D,z,B,N,ot)}function Cs(S,D,z){D.isScene!==!0&&(D=Ot);const B=Ut.get(S),N=m.state.lights,ot=m.state.shadowsArray,ft=N.state.version,vt=Z.getParameters(S,N.state,ot,D,z),xt=Z.getProgramCacheKey(vt);let Ct=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?v:b).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",Rt),Ct=new Map,B.programs=Ct);let Pt=Ct.get(xt);if(Pt!==void 0){if(B.currentProgram===Pt&&B.lightsStateVersion===ft)return Go(S,vt),Pt}else vt.uniforms=Z.getUniforms(S),S.onBeforeCompile(vt,x),Pt=Z.acquireProgram(vt,xt),Ct.set(xt,Pt),B.uniforms=vt.uniforms;const At=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=kt.uniform),Go(S,vt),B.needsLights=wh(S),B.lightsStateVersion=ft,B.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Pt,B.uniformsList=null,Pt}function Vo(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Go(S,D){const z=Ut.get(S);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Th(S,D,z,B,N){D.isScene!==!0&&(D=Ot),Bt.resetTextureUnits();const ot=D.fog,ft=B.isMeshStandardMaterial?D.environment:null,vt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gn,xt=(B.isMeshStandardMaterial?v:b).get(B.envMap||ft),Ct=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pt=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),At=!!z.morphAttributes.position,Jt=!!z.morphAttributes.normal,de=!!z.morphAttributes.color;let fe=kn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=Ge!==void 0?Ge.length:0,St=Ut.get(B),Ce=m.state.lights;if(V===!0&&(j===!0||S!==y)){const Ze=S===y&&B.id===I;kt.setState(B,S,Ze)}let jt=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Ce.state.version||St.outputColorSpace!==vt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==xt||B.fog===!0&&St.fog!==ot||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==kt.numPlanes||St.numIntersection!==kt.numIntersection)||St.vertexAlphas!==Ct||St.vertexTangents!==Pt||St.morphTargets!==At||St.morphNormals!==Jt||St.morphColors!==de||St.toneMapping!==fe||St.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,St.__version=B.version);let en=St.currentProgram;jt===!0&&(en=Cs(B,D,N));let mi=!1,We=!1,Br=!1;const ve=en.getUniforms(),Dn=St.uniforms;if(Tt.useProgram(en.program)&&(mi=!0,We=!0,Br=!0),B.id!==I&&(I=B.id,We=!0),mi||y!==S){ve.setValue(C,"projectionMatrix",S.projectionMatrix),ve.setValue(C,"viewMatrix",S.matrixWorldInverse);const Ze=ve.map.cameraPosition;Ze!==void 0&&Ze.setValue(C,ct.setFromMatrixPosition(S.matrixWorld)),ie.logarithmicDepthBuffer&&ve.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ve.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,We=!0,Br=!0)}if(N.isSkinnedMesh){ve.setOptional(C,N,"bindMatrix"),ve.setOptional(C,N,"bindMatrixInverse");const Ze=N.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ve.setValue(C,"boneTexture",Ze.boneTexture,Bt))}N.isBatchedMesh&&(ve.setOptional(C,N,"batchingTexture"),ve.setValue(C,"batchingTexture",N._matricesTexture,Bt),ve.setOptional(C,N,"batchingIdTexture"),ve.setValue(C,"batchingIdTexture",N._indirectTexture,Bt),ve.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ve.setValue(C,"batchingColorTexture",N._colorsTexture,Bt));const kr=z.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&qt.update(N,z,en),(We||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,ve.setValue(C,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Dn.envMap.value=xt,Dn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Dn.envMapIntensity.value=D.environmentIntensity),We&&(ve.setValue(C,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&Eh(Dn,Br),ot&&B.fog===!0&&wt.refreshFogUniforms(Dn,ot),wt.refreshMaterialUniforms(Dn,B,J,W,m.state.transmissionRenderTarget[S.id]),mr.upload(C,Vo(St),Dn,Bt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mr.upload(C,Vo(St),Dn,Bt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ve.setValue(C,"center",N.center),ve.setValue(C,"modelViewMatrix",N.modelViewMatrix),ve.setValue(C,"normalMatrix",N.normalMatrix),ve.setValue(C,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ze=B.uniformsGroups;for(let Hr=0,Ah=Ze.length;Hr<Ah;Hr++){const Wo=Ze[Hr];le.update(Wo,en),le.bind(Wo,en)}}return en}function Eh(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function wh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,D,z){Ut.get(S.texture).__webglTexture=D,Ut.get(S.depthTexture).__webglTexture=z;const B=Ut.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const z=Ut.get(S);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,z=0){R=S,F=D,A=z;let B=!0,N=null,ot=!1,ft=!1;if(S){const xt=Ut.get(S);xt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(C.FRAMEBUFFER,null),B=!1):xt.__webglFramebuffer===void 0?Bt.setupRenderTarget(S):xt.__hasExternalTextures&&Bt.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ft=!0);const Pt=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?N=Pt[D][z]:N=Pt[D],ot=!0):S.samples>0&&Bt.useMultisampledRTT(S)===!1?N=Ut.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[z]:N=Pt,M.copy(S.viewport),P.copy(S.scissor),k=S.scissorTest}else M.copy(K).multiplyScalar(J).floor(),P.copy(et).multiplyScalar(J).floor(),k=Mt;if(Tt.bindFramebuffer(C.FRAMEBUFFER,N)&&B&&Tt.drawBuffers(S,N),Tt.viewport(M),Tt.scissor(P),Tt.setScissorTest(k),ot){const xt=Ut.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,z)}else if(ft){const xt=Ut.get(S.texture),Ct=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,Ct)}I=-1},this.readRenderTargetPixels=function(S,D,z,B,N,ot,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){Tt.bindFramebuffer(C.FRAMEBUFFER,vt);try{const xt=S.texture,Ct=xt.format,Pt=xt.type;if(!ie.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&z>=0&&z<=S.height-N&&C.readPixels(D,z,B,N,Nt.convert(Ct),Nt.convert(Pt),ot)}finally{const xt=R!==null?Ut.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(C.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(S,D,z,B,N,ot,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){Tt.bindFramebuffer(C.FRAMEBUFFER,vt);try{const xt=S.texture,Ct=xt.format,Pt=xt.type;if(!ie.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-B&&z>=0&&z<=S.height-N){const At=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,At),C.bufferData(C.PIXEL_PACK_BUFFER,ot.byteLength,C.STREAM_READ),C.readPixels(D,z,B,N,Nt.convert(Ct),Nt.convert(Pt),0),C.flush();const Jt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Du(C,Jt,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,At),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ot)}finally{C.deleteBuffer(At),C.deleteSync(Jt)}return ot}}finally{const xt=R!==null?Ut.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(C.FRAMEBUFFER,xt)}}},this.copyFramebufferToTexture=function(S,D=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-z),N=Math.floor(S.image.width*B),ot=Math.floor(S.image.height*B),ft=D!==null?D.x:0,vt=D!==null?D.y:0;Bt.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,ft,vt,N,ot),Tt.unbindTexture()},this.copyTextureToTexture=function(S,D,z=null,B=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,z=null);let ot,ft,vt,xt,Ct,Pt;z!==null?(ot=z.max.x-z.min.x,ft=z.max.y-z.min.y,vt=z.min.x,xt=z.min.y):(ot=S.image.width,ft=S.image.height,vt=0,xt=0),B!==null?(Ct=B.x,Pt=B.y):(Ct=0,Pt=0);const At=Nt.convert(D.format),Jt=Nt.convert(D.type);Bt.setTexture2D(D,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const de=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ge=C.getParameter(C.UNPACK_SKIP_PIXELS),Zt=C.getParameter(C.UNPACK_SKIP_ROWS),St=C.getParameter(C.UNPACK_SKIP_IMAGES),Ce=S.isCompressedTexture?S.mipmaps[N]:S.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,xt),S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Ct,Pt,ot,ft,At,Jt,Ce.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Ct,Pt,Ce.width,Ce.height,At,Ce.data):C.texSubImage2D(C.TEXTURE_2D,N,Ct,Pt,ot,ft,At,Jt,Ce),C.pixelStorei(C.UNPACK_ROW_LENGTH,de),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,St),N===0&&D.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,D,z=null,B=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0);let ot,ft,vt,xt,Ct,Pt,At,Jt,de;const fe=S.isCompressedTexture?S.mipmaps[N]:S.image;z!==null?(ot=z.max.x-z.min.x,ft=z.max.y-z.min.y,vt=z.max.z-z.min.z,xt=z.min.x,Ct=z.min.y,Pt=z.min.z):(ot=fe.width,ft=fe.height,vt=fe.depth,xt=0,Ct=0,Pt=0),B!==null?(At=B.x,Jt=B.y,de=B.z):(At=0,Jt=0,de=0);const Ge=Nt.convert(D.format),Zt=Nt.convert(D.type);let St;if(D.isData3DTexture)Bt.setTexture3D(D,0),St=C.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Bt.setTexture2DArray(D,0),St=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const Ce=C.getParameter(C.UNPACK_ROW_LENGTH),jt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),en=C.getParameter(C.UNPACK_SKIP_PIXELS),mi=C.getParameter(C.UNPACK_SKIP_ROWS),We=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,fe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ct),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pt),S.isDataTexture||S.isData3DTexture?C.texSubImage3D(St,N,At,Jt,de,ot,ft,vt,Ge,Zt,fe.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(St,N,At,Jt,de,ot,ft,vt,Ge,fe.data):C.texSubImage3D(St,N,At,Jt,de,ot,ft,vt,Ge,Zt,fe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ce),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,jt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,en),C.pixelStorei(C.UNPACK_SKIP_ROWS,mi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We),N===0&&D.generateMipmaps&&C.generateMipmap(St),Tt.unbindTexture()},this.initRenderTarget=function(S){Ut.get(S).__webglFramebuffer===void 0&&Bt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Bt.setTextureCube(S,0):S.isData3DTexture?Bt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Bt.setTexture2DArray(S,0):Bt.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){F=0,A=0,R=null,Tt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===So?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Pr?"display-p3":"srgb"}}class Co{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new Co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qc extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class H0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ro,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return To("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new E;class wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yc extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ii;const os=new E,Ui=new E,Ni=new E,Fi=new at,ls=new at,Kc=new re,js=new E,cs=new E,Qs=new E,Bl=new at,pa=new at,kl=new at;class V0 extends Se{constructor(t=new Yc){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new H0(e,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new wr(n,3,0,!1)),Ii.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=Ii,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ui.setFromMatrixScale(this.matrixWorld),Kc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ui.multiplyScalar(-Ni.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;tr(js.set(-.5,-.5,0),Ni,a,Ui,s,r),tr(cs.set(.5,-.5,0),Ni,a,Ui,s,r),tr(Qs.set(.5,.5,0),Ni,a,Ui,s,r),Bl.set(0,0),pa.set(1,0),kl.set(1,1);let o=t.ray.intersectTriangle(js,cs,Qs,!1,os);if(o===null&&(tr(cs.set(-.5,.5,0),Ni,a,Ui,s,r),pa.set(0,1),o=t.ray.intersectTriangle(js,Qs,cs,!1,os),o===null))return;const l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:ln.getInterpolation(os,js,cs,Qs,Bl,pa,kl,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function tr(i,t,e,n,s,r){Fi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ls.x=r*Fi.x-s*Fi.y,ls.y=s*Fi.x+r*Fi.y):ls.copy(Fi),i.copy(t),i.x+=ls.x,i.y+=ls.y,i.applyMatrix4(Kc)}class gr extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hl=new re,lo=new Eo,er=new Lr,nr=new E;class G0 extends Se{constructor(t=new Ne,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=r,t.ray.intersectsSphere(er)===!1)return;Hl.copy(s).invert(),lo.copy(t.ray).applyMatrix4(Hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);nr.fromBufferAttribute(h,m),Vl(nr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)nr.fromBufferAttribute(h,g),Vl(nr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vl(i,t,e,n,s,r,a){const o=lo.distanceSqToPoint(i);if(o<e){const l=new E;lo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Ir extends ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,s=[],r=[],a=[],o=new E,l=new re;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(we(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Po extends _n{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class W0 extends Po{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Lo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const ir=new E,ma=new Lo,ga=new Lo,_a=new Lo;class X0 extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),c=ir);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ma.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),ga.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),_a.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ga.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),_a.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ma.calc(l),ga.calc(l),_a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function q0(i,t){const e=1-i;return e*e*t}function Y0(i,t){return 2*(1-i)*i*t}function K0(i,t){return i*i*t}function ms(i,t,e,n){return q0(i,t)+Y0(i,e)+K0(i,n)}function $0(i,t){const e=1-i;return e*e*e*t}function J0(i,t){const e=1-i;return 3*e*e*i*t}function Z0(i,t){return 3*(1-i)*i*i*t}function j0(i,t){return i*i*i*t}function gs(i,t,e,n,s){return $0(i,t)+J0(i,e)+Z0(i,n)+j0(i,s)}class $c extends _n{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(t,s.x,r.x,a.x,o.x),gs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q0 extends _n{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(t,s.x,r.x,a.x,o.x),gs(t,s.y,r.y,a.y,o.y),gs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jc extends _n{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tg extends _n{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zc extends _n{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ms(t,s.x,r.x,a.x),ms(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eg extends _n{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ms(t,s.x,r.x,a.x),ms(t,s.y,r.y,a.y),ms(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jc extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Gl(o,l.x,c.x,u.x,h.x),Gl(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Wl=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:X0,CubicBezierCurve:$c,CubicBezierCurve3:Q0,EllipseCurve:Po,LineCurve:Jc,LineCurve3:tg,QuadraticBezierCurve:Zc,QuadraticBezierCurve3:eg,SplineCurve:jc});class ng extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Wl[s.type]().fromJSON(s))}return this}}class ig extends ng{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jc(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Zc(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new $c(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new jc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Po(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Do extends Ne{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new E,d=new at,f=new E,g=new E,_=new E;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let w=0;w<=e;w++){const x=n+w*u*s,T=Math.sin(x),F=Math.cos(x);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*T,h.y=t[A].y,h.z=t[A].x*F,a.push(h.x,h.y,h.z),d.x=w/e,d.y=A/(t.length-1),o.push(d.x,d.y);const R=l[3*A+0]*T,I=l[3*A+1],y=l[3*A+0]*F;c.push(R,I,y)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){const T=x+w*t.length,F=T,A=T+t.length,R=T+t.length+1,I=T+1;r.push(F,A,I),r.push(R,I,A)}this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.points,t.segments,t.phiStart,t.phiLength)}}class Io extends Do{constructor(t=1,e=1,n=4,s=8){const r=new ig;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Io(t.radius,t.length,t.capSegments,t.radialSegments)}}class Uo extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new E,u=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ae extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function w(){const T=new E,F=new E;let A=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const y=[],M=I/r,P=M*(e-t)+t;for(let k=0;k<=s;k++){const O=k/s,G=O*l+o,X=Math.sin(G),W=Math.cos(G);F.x=P*X,F.y=-M*n+m,F.z=P*W,h.push(F.x,F.y,F.z),T.set(X,R,W).normalize(),d.push(T.x,T.y,T.z),f.push(O,1-M),y.push(g++)}_.push(y)}for(let I=0;I<s;I++)for(let y=0;y<r;y++){const M=_[y][I],P=_[y+1][I],k=_[y+1][I+1],O=_[y][I+1];u.push(M,P,O),u.push(P,k,O),A+=6}c.addGroup(p,A,0),p+=A}function x(T){const F=g,A=new at,R=new E;let I=0;const y=T===!0?t:e,M=T===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let k=0;k<=s;k++){const G=k/s*l+o,X=Math.cos(G),W=Math.sin(G);R.x=y*W,R.y=m*M,R.z=y*X,h.push(R.x,R.y,R.z),d.push(0,M,0),A.x=X*.5+.5,A.y=W*.5*M+.5,f.push(A.x,A.y),g++}for(let k=0;k<s;k++){const O=F+k,G=P+k;T===!0?u.push(G,G+1,O):u.push(G+1,G,O),I+=3}c.addGroup(p,I,T===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ur extends Ae{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ur(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class He extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],x=p/n;let T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let F=0;F<=e;F++){const A=F/e;h.x=-t*Math.cos(s+A*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(s+A*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+T,1-x),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const x=u[p][w+1],T=u[p][w],F=u[p+1][w],A=u[p+1][w+1];(p!==0||a>0)&&f.push(x,T,A),(p!==n-1||l<Math.PI)&&f.push(T,F,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $i extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new E,h=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(_,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class sg extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _t extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nr extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rg extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const va=new re,Xl=new E,ql=new E;class Qc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ql),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yl=new re,hs=new E,xa=new E;class ag extends Qc{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(hs),xa.copy(n.position),xa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xa),n.updateMatrixWorld(),s.makeTranslation(-hs.x,-hs.y,-hs.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl)}}class Ar extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ag}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class og extends Qc{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _r extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new og}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lg extends Nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class th{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Kl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kl(){return(typeof performance>"u"?Date:performance).now()}const $l=new re;class cg{constructor(t,e,n=0,s=1/0){this.ray=new Eo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $l.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($l),this}intersectObject(t,e=!0,n=[]){return co(t,this,n,e),n.sort(Jl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)co(t[s],this,n,e);return n.sort(Jl),n}}function Jl(i,t){return i.distance-t.distance}function co(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)co(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);const eh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hg=new bo(-1,1,1,-1,0,1);class ug extends Ne{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const dg=new ug;class No{constructor(t){this._mesh=new it(dg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,hg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Fo extends Qi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ts.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new No(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zl extends Qi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class fg extends Qi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class pg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fo(eh),this.copyPass.material.blending=Rn,this.clock=new th}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zl!==void 0&&(a instanceof Zl?n=!0:a instanceof fg&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mg extends Qi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const gg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ji extends Qi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,a,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new hn(r,a,{type:Cn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new hn(r,a,{type:Cn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=gg;this.highPassUniforms=Ts.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=eh;this.copyUniforms=Ts.clone(u.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:oi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new gn,this.fsQuad=new No(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ji.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ji.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ji.BlurDirectionX=new at(1,0);Ji.BlurDirectionY=new at(0,1);const _g={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class vg extends Qi{constructor(){super();const t=_g;this.uniforms=Ts.clone(t.uniforms),this.material=new sg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new No(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===po?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_c&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xg extends qc{constructor(t=null){super();const e=new ne;e.deleteAttribute("uv");const n=new _t({side:Ie}),s=new _t,r=new Ar(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const a=new it(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const o=new it(e,s);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const l=new it(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const c=new it(e,s);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const u=new it(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const h=new it(e,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new it(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new it(e,Oi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const g=new it(e,Oi(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const _=new it(e,Oi(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const m=new it(e,Oi(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const p=new it(e,Oi(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const w=new it(e,Oi(100));w.position.set(0,20,0),w.scale.set(1,.1,1),this.add(w)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Oi(i){const t=new gn;return t.color.setScalar(i),t}const Mg=170;function ts(i,t,e,n=1,s=1){const r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);const a=new Ir(r);return a.wrapS=a.wrapT=Ms,a.repeat.set(n,s),a.anisotropy=4,a.colorSpace=Ke,a}function Sg(){return ts(512,512,(i,t,e)=>{i.fillStyle="#33363a",i.fillRect(0,0,t,e);for(let n=0;n<9e3;n++){const s=40+Math.random()*30;i.fillStyle=`rgba(${s},${s},${s+4},${.25+Math.random()*.3})`,i.fillRect(Math.random()*t,Math.random()*e,1.5,1.5)}i.strokeStyle="rgba(18,20,22,0.55)",i.lineWidth=1.2;for(let n=0;n<14;n++){i.beginPath();let s=Math.random()*t,r=Math.random()*e;i.moveTo(s,r);for(let a=0;a<8;a++)s+=(Math.random()-.5)*70,r+=(Math.random()-.5)*70,i.lineTo(s,r);i.stroke()}for(let n=0;n<6;n++){const s=i.createRadialGradient(0,0,0,0,0,30+Math.random()*50);s.addColorStop(0,"rgba(10,12,14,0.5)"),s.addColorStop(1,"rgba(10,12,14,0)"),i.save(),i.translate(Math.random()*t,Math.random()*e),i.fillStyle=s,i.fillRect(-90,-90,180,180),i.restore()}},18,18)}function jl(i="#8a8377"){return ts(256,256,(t,e,n)=>{t.fillStyle=i,t.fillRect(0,0,e,n);for(let s=0;s<2600;s++){const r=.06+Math.random()*.12;t.fillStyle=Math.random()>.5?`rgba(255,255,255,${r})`:`rgba(0,0,0,${r})`,t.fillRect(Math.random()*e,Math.random()*n,2,2)}t.strokeStyle="rgba(0,0,0,0.18)",t.lineWidth=2,t.strokeRect(1,1,e-2,n-2)},1,1)}function yg(i,t,e){return ts(256*Math.max(1,Math.floor(t/3)),128*i,(n,s,r)=>{n.fillStyle=e,n.fillRect(0,0,s,r);for(let l=0;l<40;l++){n.fillStyle=`rgba(0,0,0,${.04+Math.random()*.08})`;const c=Math.random()*s;n.fillRect(c,0,3+Math.random()*10,r)}const a=s/t,o=r/i;for(let l=0;l<i;l++)for(let c=0;c<t;c++){const u=c*a+a*.22,h=l*o+o*.22,d=a*.56,f=o*.5,g=Math.random()<.28;if(n.fillStyle="#15181c",n.fillRect(u-3,h-3,d+6,f+6),g){const _=n.createLinearGradient(u,h,u,h+f);_.addColorStop(0,"#ffd98a"),_.addColorStop(1,"#c98f3a"),n.fillStyle=_}else n.fillStyle=`rgba(${40+Math.random()*25},${52+Math.random()*25},${66+Math.random()*25},1)`;n.fillRect(u,h,d,f),n.fillStyle="rgba(10,12,14,0.8)",n.fillRect(u+d/2-1,h,2,f)}},1,1)}function Tg(i){return ts(256,128,(t,e,n)=>{t.fillStyle=i,t.fillRect(0,0,e,n);for(let s=0;s<e;s+=16)t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(s,0,4,n),t.fillStyle="rgba(255,255,255,0.07)",t.fillRect(s+8,0,4,n);for(let s=0;s<30;s++){t.fillStyle=`rgba(96,52,26,${.15+Math.random()*.3})`;const r=Math.random()*e,a=Math.random()*n;t.beginPath(),t.ellipse(r,a,4+Math.random()*14,3+Math.random()*7,Math.random()*3,0,7),t.fill()}},2,1)}function Eg(){return ts(128,128,(i,t,e)=>{i.fillStyle="#6e5636",i.fillRect(0,0,t,e);for(let n=0;n<500;n++)i.fillStyle=`rgba(0,0,0,${Math.random()*.12})`,i.fillRect(Math.random()*t,Math.random()*e,6,1.5);i.strokeStyle="#4a3820",i.lineWidth=6,i.strokeRect(3,3,t-6,e-6),i.beginPath(),i.moveTo(0,0),i.lineTo(t,e),i.moveTo(t,0),i.lineTo(0,e),i.lineWidth=5,i.stroke()},1,1)}class wg{constructor(t,e){this.scene=t,this.colliders=[],this.raycastMeshes=[],this.barrels=[],this.enemySpawns=[],this.lampLights=[],this._build(e)}addCollider(t,e,n,s,r,a){this.colliders.push({min:new E(t-s/2,e-r/2,n-a/2),max:new E(t+s/2,e+r/2,n+a/2)})}_solidBox(t,e,n,s,r,a,o,l={}){const c=new it(new ne(t,e,n),s);if(c.position.set(r,a,o),c.castShadow=l.castShadow!==!1,c.receiveShadow=!0,l.rotY&&(c.rotation.y=l.rotY),this.scene.add(c),l.collide!==!1)if(l.rotY&&Math.abs(Math.sin(l.rotY))>.05){const u=Math.abs(Math.cos(l.rotY)),h=Math.abs(Math.sin(l.rotY));this.addCollider(r,a,o,t*u+n*h,e,t*h+n*u)}else this.addCollider(r,a,o,t,e,n);return l.raycast!==!1&&this.raycastMeshes.push(c),c}_build(t){const e=Mg,n=e/2;this.scene.fog=new Co(12375276,130,460);const s=new He(480,24,16),r=new De({side:Ie,depthWrite:!1,uniforms:{top:{value:new Ft(3110096)},mid:{value:new Ft(7645670)},horizon:{value:new Ft(14346484)}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 top; uniform vec3 mid; uniform vec3 horizon;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.1, 1.0);
          vec3 col = mix(horizon, mid, smoothstep(0.0, 0.30, h));
          col = mix(col, top, smoothstep(0.25, 0.9, h));
          // bright sun disk + glow high in the sky
          vec3 sunDir = normalize(vec3(-0.42, 0.72, -0.34));
          float d = max(dot(normalize(vDir), sunDir), 0.0);
          float disk = smoothstep(0.9975, 0.9992, d);
          float glow = pow(d, 220.0) * 0.6 + pow(d, 12.0) * 0.10;
          col += vec3(1.0, 0.97, 0.9) * (disk + glow);
          gl_FragColor = vec4(col, 1.0);
        }`}),a=new it(s,r);this.scene.add(a);const o=ts(128,128,(U,Y,K)=>{U.clearRect(0,0,Y,K);for(let et=0;et<26;et++){const Mt=Y*(.2+Math.random()*.6),It=K*(.35+Math.random()*.3),V=14+Math.random()*26,j=U.createRadialGradient(Mt,It,0,Mt,It,V);j.addColorStop(0,"rgba(255,255,255,0.9)"),j.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=j,U.beginPath(),U.arc(Mt,It,V,0,7),U.fill()}}),l=new gn({map:o,transparent:!0,opacity:.85,depthWrite:!1,fog:!1});for(let U=0;U<9;U++){const Y=Math.random()*Math.PI*2,K=200+Math.random()*150,et=new it(new di(120+Math.random()*90,55+Math.random()*40),l);et.position.set(Math.cos(Y)*K,150+Math.random()*70,Math.sin(Y)*K),et.lookAt(0,40,0),this.scene.add(et)}const c=new rg(12376319,9077105,1.25);this.scene.add(c),this.scene.add(new lg(7636634,.68));const u=new _r(10465476,.45);u.position.set(60,30,-70),this.scene.add(u);const h=new _r(16774370,2.6);h.position.set(-84,138,-66),h.castShadow=t!=="low";const d=t==="high"?2048:1024;h.shadow.mapSize.set(d,d),h.shadow.camera.left=-n-10,h.shadow.camera.right=n+10,h.shadow.camera.top=n+10,h.shadow.camera.bottom=-n-10,h.shadow.camera.near=10,h.shadow.camera.far=320,h.shadow.bias=-.0013,this.scene.add(h),this.sun=h;const f=new _r(11455471,.5);f.position.set(70,90,80),this.scene.add(f);const g=new it(new di(e+60,e+60),new _t({map:Sg(),roughness:.95,metalness:.02}));g.rotation.x=-Math.PI/2,g.receiveShadow=!0,this.scene.add(g),this.raycastMeshes.push(g);const _=new _t({color:13223034,roughness:.9});for(let U=-n+10;U<n-6;U+=12){const Y=new it(new ne(.35,.02,5),_);Y.position.set(0,.012,U),Y.receiveShadow=!0,this.scene.add(Y);const K=new it(new ne(5,.02,.35),_);K.position.set(U,.012,0),K.receiveShadow=!0,this.scene.add(K)}const m=new _t({map:jl("#918a7d"),roughness:.9}),p=7,w=1.6;this._solidBox(e+w,p,w,m,0,p/2,-n,{}),this._solidBox(e+w,p,w,m,0,p/2,n,{}),this._solidBox(w,p,e+w,m,-n,p/2,0,{}),this._solidBox(w,p,e+w,m,n,p/2,0,{});const x=new _t({color:5593954,roughness:.55,metalness:.35});[[0,-n],[0,n]].forEach(([U,Y])=>{const K=new it(new Ae(.22,.22,e,6),x);K.rotation.z=Math.PI/2,K.position.set(U,p+.3,Y),this.scene.add(K)}),[[-n,0],[n,0]].forEach(([U,Y])=>{const K=new it(new Ae(.22,.22,e,6),x);K.rotation.x=Math.PI/2,K.position.set(U,p+.3,Y),this.scene.add(K)});const T=[[-52,-52,26,20,4,"#77705f"],[50,-55,22,26,5,"#6a6e72"],[-55,48,24,24,3,"#7d6f5c"],[52,52,28,18,4,"#6f6a66"],[-18,-60,16,14,3,"#736c60"],[22,62,18,14,3,"#6d6862"],[64,8,14,22,2,"#7a7264"],[-64,-8,14,20,2,"#6e6960"]];for(const[U,Y,K,et,Mt,It]of T){const V=Mt*3.4,j=new _t({map:yg(Mt,Math.max(3,Math.round(K/4)),It),roughness:.85}),dt=new _t({map:jl("#4a4740"),roughness:.95}),ct=new it(new ne(K,V,et),[j,j,dt,dt,j,j]);ct.position.set(U,V/2,Y),ct.castShadow=!0,ct.receiveShadow=!0,this.scene.add(ct),this.addCollider(U,V/2,Y,K,V,et),this.raycastMeshes.push(ct);const Lt=new it(new ne(K+.6,.5,et+.6),dt);Lt.position.set(U,V+.25,Y),Lt.castShadow=!0,this.scene.add(Lt);const Ot=new it(new ne(2.4,1.4,2),new _t({color:10133668,roughness:.6,metalness:.4}));Ot.position.set(U+K*.2,V+1.2,Y-et*.15),Ot.castShadow=!0,this.scene.add(Ot)}const F=["#8a3b2a","#2a5a7a","#3d6b3a","#7a6a2a","#5a3a6a"];[[-21,20,.3],[-13,21,-.1],[-21,27,.2],[28,-18,1.4],[31,-25,1.2],[38,-19,1.3],[8,38,-.4],[-3,41,.15],[-39,-18,.9],[-40,-10,.8],[16,-43,2.2],[43,31,.6],[-31,60,1.9]].forEach(([U,Y,K],et)=>{const Mt=new _t({map:Tg(F[et%F.length]),roughness:.75,metalness:.15});this._solidBox(6.5,2.6,2.6,Mt,U,1.3,Y,{rotY:K})});const R=new _t({map:Eg(),roughness:.9}),I=[[-6,12],[19,8],[-12,-28],[36,12],[5,-18],[-28,34],[44,-38],[-45,20],[10,55],[-8,-48],[58,-20],[-58,30],[24,-8],[-18,46]];for(const[U,Y]of I)this._solidBox(1.3,1.3,1.3,R,U,.65,Y,{rotY:Math.random()*.6});const y=new _t({color:9405030,roughness:1}),M=[[0,22,0],[12,-10,1.2],[-16,-6,.5],[-2,-34,0],[26,28,1.6],[-34,8,.8],[48,0,1.57],[0,-22,.3]];for(const[U,Y,K]of M){const et=new Gt;for(let V=0;V<3;V++){const j=5-V;for(let dt=0;dt<j;dt++){const ct=new it(new Io(.24,.65,3,8),y);ct.rotation.z=Math.PI/2,ct.position.set((dt-(j-1)/2)*.95,.25+V*.42,(Math.random()-.5)*.08),ct.castShadow=!0,ct.receiveShadow=!0,et.add(ct)}}et.position.set(U,0,Y),et.rotation.y=K,this.scene.add(et);const Mt=Math.abs(Math.cos(K)),It=Math.abs(Math.sin(K));this.addCollider(U,.7,Y,4.8*Mt+.9*It,1.4,4.8*It+.9*Mt),et.traverse(V=>{V.isMesh&&this.raycastMeshes.push(V)})}const P=new _t({color:11740958,roughness:.55,metalness:.35}),k=new _t({color:15787720,roughness:.6}),O=[[-8,18],[22,-14],[-24,-22],[14,30],[38,20],[-40,-30],[6,-40],[-30,44],[46,-12],[-48,6],[30,48],[-12,62]];for(const[U,Y]of O){const K=new Gt,et=new it(new Ae(.42,.42,1.15,14),P);et.castShadow=!0,et.receiveShadow=!0;const Mt=new it(new Ae(.425,.425,.16,14),k);Mt.position.y=.2,K.add(et,Mt),K.position.set(U,.58,Y),this.scene.add(K);const It={mesh:K,pos:new E(U,.58,Y),alive:!0,hp:25};et.userData.barrel=It,Mt.userData.barrel=It,this.barrels.push(It),this.raycastMeshes.push(et),this.addCollider(U,.58,Y,.85,1.15,.85)}const G=new _t({color:4998200,roughness:.85});for(const[U,Y]of[[-n+8,-n+8],[n-8,n-8],[n-8,-n+8],[-n+8,n-8]]){for(const[Mt,It]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]]){const V=new it(new ne(.35,7.5,.35),G);V.position.set(U+Mt,7.5/2,Y+It),V.castShadow=!0,this.scene.add(V)}this._solidBox(4.4,.4,4.4,G,U,7.5+.2,Y,{}),this._solidBox(4.4,1.1,.25,G,U,7.5+1,Y-2.1,{}),this._solidBox(4.4,1.1,.25,G,U,7.5+1,Y+2.1,{}),this._solidBox(.25,1.1,4.4,G,U-2.1,7.5+1,Y,{}),this._solidBox(.25,1.1,4.4,G,U+2.1,7.5+1,Y,{});const et=new it(new Ur(3.6,1.6,4),G);et.rotation.y=Math.PI/4,et.position.set(U,7.5+3,Y),et.castShadow=!0,this.scene.add(et),this.addCollider(U,7.5/2,Y,3.4,7.5,3.4)}const X=new _t({color:4738388,roughness:.6,metalness:.35});[[-14,-14],[14,14],[-14,40],[40,-14],[-40,14],[14,-44],[-44,-40],[44,44]].forEach(([U,Y])=>{const K=new it(new Ae(.12,.16,6.4,8),X);K.position.set(U,3.2,Y),K.castShadow=!0,this.scene.add(K);const et=new it(new ne(1.5,.12,.12),X);et.position.set(U+.7,6.3,Y),this.scene.add(et);const Mt=new it(new He(.2,10,8),new _t({color:13620182,roughness:.4,metalness:.3}));Mt.position.set(U+1.35,6.22,Y),this.scene.add(Mt),this.addCollider(U,3.2,Y,.4,6.4,.4),this.raycastMeshes.push(K)});const J=new _t({color:2829616,roughness:.95});for(const[U,Y]of[[9,3],[-22,8],[33,-33],[-6,-14],[20,44],[-52,-32]]){const K=new it(new $i(.42,.17,8,16),J);K.rotation.x=Math.PI/2,K.position.set(U,.18,Y),K.castShadow=!0,K.receiveShadow=!0,this.scene.add(K)}this._buildWreck(-2,-8,.6),this._buildWreck(30,6,-1.1),this.enemySpawns=[new E(-n+12,0,-n+20),new E(n-12,0,-n+16),new E(-n+14,0,n-14),new E(n-16,0,n-18),new E(0,0,-n+10),new E(0,0,n-10),new E(-n+10,0,0),new E(n-10,0,0),new E(-34,0,-n+12),new E(36,0,n-12)]}_buildWreck(t,e,n){const s=new _t({color:3621439,roughness:.8,metalness:.3}),r=new _t({color:2372673,roughness:.35,metalness:.4}),a=new Gt,o=new it(new ne(4.2,1,1.9),s);o.position.y=.75;const l=new it(new ne(2.2,.75,1.7),r);l.position.set(-.2,1.55,0),a.add(o,l);const c=new _t({color:1184532,roughness:.95});for(const[d,f]of[[-1.4,-.95],[1.4,-.95],[-1.4,.95],[1.4,.95]]){const g=new it(new Ae(.38,.38,.3,12),c);g.rotation.x=Math.PI/2,g.position.set(d,.38,f),a.add(g)}a.position.set(t,0,e),a.rotation.y=n,a.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,this.raycastMeshes.push(d))}),this.scene.add(a);const u=Math.abs(Math.cos(n)),h=Math.abs(Math.sin(n));this.addCollider(t,.9,e,4.2*u+1.9*h,1.9,4.2*h+1.9*u)}removeBarrel(t){t.alive=!1,this.scene.remove(t.mesh);const e=this.colliders.findIndex(n=>Math.abs((n.min.x+n.max.x)/2-t.pos.x)<.6&&Math.abs((n.min.z+n.max.z)/2-t.pos.z)<.6&&n.max.y-n.min.y<1.6);e>=0&&this.colliders.splice(e,1),t.mesh.traverse(n=>{const s=this.raycastMeshes.indexOf(n);s>=0&&this.raycastMeshes.splice(s,1)})}}function nh(i,t,e,n,s=null){for(const r of n){const a=i.y-e;if(i.y<=r.min.y||a>=r.max.y)continue;const l=Math.max(r.min.x,Math.min(i.x,r.max.x)),c=Math.max(r.min.z,Math.min(i.z,r.max.z)),u=i.x-l,h=i.z-c,d=u*u+h*h;if(d<t*t)if(d>1e-8){const f=Math.sqrt(d),g=t-f;i.x+=u/f*g,i.z+=h/f*g}else{const f=i.x-r.min.x+t,g=r.max.x-i.x+t,_=i.z-r.min.z+t,m=r.max.z-i.z+t,p=Math.min(f,g,_,m);p===f?i.x=r.min.x-t:p===g?i.x=r.max.x+t:p===_?i.z=r.min.z-t:i.z=r.max.z+t}}return i}const sr=new E;function vr(i,t,e,n){sr.set(i.x,i.y+e,i.z),nh(sr,t,e,n),i.x=sr.x,i.z=sr.z}function Ag(i,t,e,n=.4,s=1.8){for(let a=1;a<10;a++){const o=a/10,l=i.x+(t.x-i.x)*o,c=i.z+(t.z-i.z)*o,u=i.y+(t.y-i.y)*o;for(const h of e)if(!(h.max.y<n||h.min.y>s)&&l>h.min.x&&l<h.max.x&&c>h.min.z&&c<h.max.z&&u>h.min.y&&u<h.max.y)return!0}return!1}class bg{constructor(){this.ctx=null,this.master=null,this.sfxBus=null,this.volume=.7,this.listener={pos:null,fwd:null},this._noiseBuf=null,this._ambientNodes=[],this._heartbeatTimer=0}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-12,e.knee.value=24,e.ratio.value=8,e.attack.value=.002,e.release.value=.15,this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(e),e.connect(this.master),this.master.connect(this.ctx.destination),this._noiseBuf=this._makeNoise(2)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_makeNoise(t){const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return n}_noiseSource(){const t=this.ctx.createBufferSource();return t.buffer=this._noiseBuf,t.loop=!0,t.loopStart=Math.random(),t}_spatial(t,e=1,n=90){const s=this.ctx.createGain(),r=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;let a=e,o=0;if(t&&this.listener.pos){const l=t.x-this.listener.pos.x,c=t.z-this.listener.pos.z,u=Math.sqrt(l*l+c*c+(t.y-this.listener.pos.y)**2);if(a=e*Math.max(0,1-u/n)**1.4,this.listener.fwd&&u>.5){const h=this.listener.fwd,d=-h.z,f=h.x;o=Math.max(-1,Math.min(1,(l*d+c*f)/u))}}return s.gain.value=a,r?(r.pan.value=o*.8,s.connect(r),r.connect(this.sfxBus)):s.connect(this.sfxBus),s}gunshot(t,e=null){if(!this.ctx)return;const n=this.ctx.currentTime,s={rifle:{dur:.16,freq:900,boom:110,gain:.75,crack:.5},pistol:{dur:.12,freq:1300,boom:160,gain:.6,crack:.45},shotgun:{dur:.28,freq:500,boom:70,gain:1,crack:.7},sniper:{dur:.34,freq:700,boom:60,gain:1,crack:.8},enemy:{dur:.14,freq:800,boom:120,gain:.5,crack:.35}}[t]||{dur:.15,freq:900,boom:110,gain:.7,crack:.5},r=this._spatial(e,s.gain,120),a=this._noiseSource(),o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(s.freq*2.2,n),o.frequency.exponentialRampToValueAtTime(s.freq*.5,n+s.dur),o.Q.value=.8;const l=this.ctx.createGain();l.gain.setValueAtTime(s.crack,n),l.gain.exponentialRampToValueAtTime(.001,n+s.dur),a.connect(o),o.connect(l),l.connect(r),a.start(n),a.stop(n+s.dur+.02);const c=this.ctx.createOscillator();c.type="sine",c.frequency.setValueAtTime(s.boom,n),c.frequency.exponentialRampToValueAtTime(s.boom*.4,n+s.dur*1.4);const u=this.ctx.createGain();u.gain.setValueAtTime(s.gain*.8,n),u.gain.exponentialRampToValueAtTime(.001,n+s.dur*1.5),c.connect(u),u.connect(r),c.start(n),c.stop(n+s.dur*1.6);const h=this._noiseSource(),d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.value=1800;const f=this.ctx.createGain();f.gain.setValueAtTime(.12*s.gain,n+s.dur*.4),f.gain.exponentialRampToValueAtTime(.001,n+s.dur*3),h.connect(d),d.connect(f),f.connect(r),h.start(n+s.dur*.3),h.stop(n+s.dur*3.1)}dryFire(){this._click(1400,.05,.25)}weaponSwitch(){this._click(900,.05,.18),setTimeout(()=>this._click(1300,.05,.22),90)}reloadStage(t){t===0?(this._click(700,.07,.3),this._click(400,.1,.2)):t===1?this._click(1e3,.06,.35):(this._click(1600,.045,.4),setTimeout(()=>this._click(1100,.05,.3),70))}_click(t,e,n){if(!this.ctx)return;const s=this.ctx.currentTime,r=this._noiseSource(),a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=3;const o=this.ctx.createGain();o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(.001,s+e),r.connect(a),a.connect(o),o.connect(this.sfxBus),r.start(s),r.stop(s+e+.02)}footstep(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this._noiseSource(),s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=t?500:380;const r=this.ctx.createGain(),a=t?.16:.09;r.gain.setValueAtTime(a,e),r.gain.exponentialRampToValueAtTime(.001,e+.09),n.connect(s),s.connect(r),r.connect(this.sfxBus),n.start(e),n.stop(e+.12)}land(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(50,t+.12);const n=this.ctx.createGain();n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.sfxBus),e.start(t),e.stop(t+.16),this.footstep(!0)}hitmarker(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="square",n.frequency.value=t?2200:1500;const s=this.ctx.createGain();s.gain.setValueAtTime(.12,e),s.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(s),s.connect(this.sfxBus),n.start(e),n.stop(e+.06)}killConfirm(){if(!this.ctx)return;const t=this.ctx.currentTime;[660,880].forEach((e,n)=>{const s=this.ctx.createOscillator();s.type="triangle",s.frequency.value=e;const r=this.ctx.createGain(),a=t+n*.07;r.gain.setValueAtTime(1e-4,a),r.gain.exponentialRampToValueAtTime(.14,a+.01),r.gain.exponentialRampToValueAtTime(.001,a+.12),s.connect(r),r.connect(this.sfxBus),s.start(a),s.stop(a+.14)})}playerHurt(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(90,t+.18);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=700;const s=this.ctx.createGain();s.gain.setValueAtTime(.28,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(s),s.connect(this.sfxBus),e.start(t),e.stop(t+.24)}heartbeat(){if(!this.ctx)return;const t=this.ctx.currentTime;[0,.16].forEach((e,n)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.setValueAtTime(n===0?62:52,t+e);const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t+e),r.gain.exponentialRampToValueAtTime(n===0?.4:.28,t+e+.015),r.gain.exponentialRampToValueAtTime(.001,t+e+.12),s.connect(r),r.connect(this.sfxBus),s.start(t+e),s.stop(t+e+.14)})}explosion(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this._spatial(t,1.4,160),s=this._noiseSource(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(3e3,e),r.frequency.exponentialRampToValueAtTime(120,e+.9);const a=this.ctx.createGain();a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(.001,e+1.1),s.connect(r),r.connect(a),a.connect(n),s.start(e),s.stop(e+1.2);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(70,e),o.frequency.exponentialRampToValueAtTime(28,e+.8);const l=this.ctx.createGain();l.gain.setValueAtTime(1.1,e),l.gain.exponentialRampToValueAtTime(.001,e+.9),o.connect(l),l.connect(n),o.start(e),o.stop(e+1)}grenadeBounce(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this._spatial(t,.5,60),s=this.ctx.createOscillator();s.type="triangle",s.frequency.setValueAtTime(700+Math.random()*200,e),s.frequency.exponentialRampToValueAtTime(300,e+.06);const r=this.ctx.createGain();r.gain.setValueAtTime(.4,e),r.gain.exponentialRampToValueAtTime(.001,e+.08),s.connect(r),r.connect(n),s.start(e),s.stop(e+.1)}grenadePin(){this._click(2e3,.04,.3)}pickup(t){if(!this.ctx)return;const e=this.ctx.currentTime;(t==="health"?[520,780]:[440,660]).forEach((s,r)=>{const a=this.ctx.createOscillator();a.type="sine",a.frequency.value=s;const o=this.ctx.createGain(),l=e+r*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.16,l+.015),o.gain.exponentialRampToValueAtTime(.001,l+.18),a.connect(o),o.connect(this.sfxBus),a.start(l),a.stop(l+.2)})}waveStart(){if(!this.ctx)return;const t=this.ctx.currentTime;[196,262,330].forEach((e,n)=>{const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=e;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=1200;const a=this.ctx.createGain(),o=t+n*.16;a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.18,o+.03),a.gain.exponentialRampToValueAtTime(.001,o+.5),s.connect(r),r.connect(a),a.connect(this.sfxBus),s.start(o),s.stop(o+.55)})}waveClear(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1046].forEach((e,n)=>{const s=this.ctx.createOscillator();s.type="triangle",s.frequency.value=e;const r=this.ctx.createGain(),a=t+n*.11;r.gain.setValueAtTime(1e-4,a),r.gain.exponentialRampToValueAtTime(.15,a+.02),r.gain.exponentialRampToValueAtTime(.001,a+.35),s.connect(r),r.connect(this.sfxBus),s.start(a),s.stop(a+.4)})}gameOver(){if(!this.ctx)return;const t=this.ctx.currentTime;[330,262,196,131].forEach((e,n)=>{const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=e;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=900;const a=this.ctx.createGain(),o=t+n*.28;a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.16,o+.04),a.gain.exponentialRampToValueAtTime(.001,o+.7),s.connect(r),r.connect(a),a.connect(this.sfxBus),s.start(o),s.stop(o+.75)})}ricochet(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this._spatial(t,.35,50),s=this.ctx.createOscillator();s.type="sine";const r=1800+Math.random()*1500;s.frequency.setValueAtTime(r,e),s.frequency.exponentialRampToValueAtTime(r*.35,e+.14);const a=this.ctx.createGain();a.gain.setValueAtTime(.25,e),a.gain.exponentialRampToValueAtTime(.001,e+.15),s.connect(a),a.connect(n),s.start(e),s.stop(e+.17)}startAmbient(){if(!this.ctx||this._ambientNodes.length)return;const t=this._noiseSource(),e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=260,e.Q.value=.5;const n=this.ctx.createGain();n.gain.value=.045;const s=this.ctx.createOscillator();s.frequency.value=.07;const r=this.ctx.createGain();r.gain.value=.02,s.connect(r),r.connect(n.gain),t.connect(e),e.connect(n),n.connect(this.master),t.start(),s.start(),this._ambientNodes=[t,s]}stopAmbient(){this._ambientNodes.forEach(t=>{try{t.stop()}catch{}}),this._ambientNodes=[]}}new E(0,1,0);function Ql(i){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");if(i==="bullet"){const s=e.createRadialGradient(32,32,0,32,32,30);s.addColorStop(0,"rgba(10,8,6,0.95)"),s.addColorStop(.4,"rgba(20,16,12,0.7)"),s.addColorStop(1,"rgba(20,16,12,0)"),e.fillStyle=s,e.fillRect(0,0,64,64)}else{const s=e.createRadialGradient(32,32,0,32,32,30);s.addColorStop(0,"rgba(90,4,4,0.9)"),s.addColorStop(.5,"rgba(70,4,4,0.55)"),s.addColorStop(1,"rgba(70,4,4,0)"),e.fillStyle=s,e.fillRect(0,0,64,64),e.fillStyle="rgba(60,2,2,0.7)";for(let r=0;r<6;r++){const a=Math.random()*Math.PI*2,o=10+Math.random()*16;e.beginPath(),e.ellipse(32+Math.cos(a)*o,32+Math.sin(a)*o,3+Math.random()*4,2,a,0,7),e.fill()}}return new Ir(t)}class Rg{constructor(t,e){this.scene=t,this.audio=e,this.tracers=[],this.shells=[],this.impacts=[],this.decals=[],this.explosions=[],this.smokePuffs=[],this.decalMatBullet=new gn({map:Ql("bullet"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.decalMatBlood=new gn({map:Ql("blood"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.tracerGeo=new Ae(.006,.006,1,5,1,!0),this.tracerGeo.rotateX(Math.PI/2),this.tracerGeo.translate(0,0,-.5),this.tracerMat=new gn({color:16773824,transparent:!0,opacity:.9,blending:oi,depthWrite:!1}),this.shellGeo=new Ae(.006,.006,.025,6),this.shellMat=new _t({color:13214282,roughness:.3,metalness:.9}),this.sparkMat=new gr({color:16765562,size:.05,transparent:!0,blending:oi,depthWrite:!1}),this.dustMat=new gr({color:11049080,size:.09,transparent:!0,opacity:.7,depthWrite:!1}),this.bloodMat=new gr({color:9049108,size:.06,transparent:!0,depthWrite:!1}),this.smokeTex=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,30);return r.addColorStop(0,"rgba(200,200,200,0.55)"),r.addColorStop(1,"rgba(200,200,200,0)"),s.fillStyle=r,s.fillRect(0,0,64,64),new Ir(n)})(),this.smokeMat=new Yc({map:this.smokeTex,transparent:!0,depthWrite:!1,opacity:.5})}ejectShell(t,e){const n=new it(this.shellGeo,this.shellMat),r=e.model.position.clone().add(new E(.045,-.01,-.15)).clone();t.localToWorld(r),n.position.copy(r),n.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(n);const a=t.getWorldQuaternion(new ui),l=new E(1,.3,0).applyQuaternion(a).multiplyScalar(1.2+Math.random()*.8).add(new E(0,1.6+Math.random(),0)).add(new E((Math.random()-.5)*.6,0,(Math.random()-.5)*.6));if(this.shells.push({mesh:n,vel:l,angVel:new E(Math.random()*12,Math.random()*12,Math.random()*12),life:4,bounced:0}),this.shells.length>40){const c=this.shells.shift();this.scene.remove(c.mesh)}}spawnTracer(t,e,n){const s=new it(this.tracerGeo,this.tracerMat.clone());s.position.copy(t),s.scale.z=Math.min(n,40);const r=new ui().setFromUnitVectors(new E(0,0,-1),e);s.quaternion.copy(r),this.scene.add(s),this.tracers.push({mesh:s,life:.06,maxLife:.06})}spawnImpact(t,e,n){const s=n==="blood"?14:10,r=n==="blood"?this.bloodMat:n==="flesh"?this.bloodMat:n==="metal"?this.sparkMat:this.dustMat,a=new Float32Array(s*3),o=[];for(let u=0;u<s;u++){a[u*3]=t.x,a[u*3+1]=t.y,a[u*3+2]=t.z;const h=new E((Math.random()-.5)*2,Math.random()*1.6,(Math.random()-.5)*2),d=e.clone().multiplyScalar(1.5+Math.random()*2.5).add(h.multiplyScalar(1.4));o.push(d)}const l=new Ne;l.setAttribute("position",new tn(a,3));const c=new G0(l,r.clone());if(c.material.transparent=!0,this.scene.add(c),this.impacts.push({points:c,velocities:o,life:.7,maxLife:.7,gravity:n==="spark"||n==="metal"?5:9}),n!=="spark"){const u=n==="blood"||n==="flesh"?this.decalMatBlood:this.decalMatBullet,h=n==="blood"||n==="flesh"?.35+Math.random()*.25:.12+Math.random()*.08,d=new it(new di(h,h),u.clone());if(d.position.copy(t).add(e.clone().multiplyScalar(.01)),d.lookAt(t.clone().add(e)),d.rotation.z=Math.random()*Math.PI*2,this.scene.add(d),this.decals.push({mesh:d,life:14}),this.decals.length>60){const f=this.decals.shift();this.scene.remove(f.mesh)}}(n==="metal"||n==="spark")&&this.audio.ricochet(t)}spawnSmoke(t,e=1){const n=new V0(this.smokeMat.clone());n.position.copy(t),n.scale.setScalar(.3*e),this.scene.add(n),this.smokePuffs.push({spr:n,life:1.2,maxLife:1.2,grow:1.6*e,rise:.4+Math.random()*.3})}spawnExplosion(t){const e=new Ar(16757598,60,26,2);e.position.copy(t).add(new E(0,.5,0)),this.scene.add(e);const n=new it(new He(.3,12,10),new gn({color:16764794,transparent:!0,opacity:1,blending:oi,depthWrite:!1}));n.position.copy(t).add(new E(0,.4,0)),this.scene.add(n),this.explosions.push({light:e,sphere:n,life:.4,maxLife:.4});for(let s=0;s<5;s++)setTimeout(()=>this.spawnSmoke(t.clone().add(new E((Math.random()-.5)*1.5,.3+Math.random(),(Math.random()-.5)*1.5)),2.4),s*90);this.spawnImpact(t.clone().add(new E(0,.3,0)),new E(0,1,0),"dust"),this.audio.explosion(t)}update(t){for(let n=this.tracers.length-1;n>=0;n--){const s=this.tracers[n];s.life-=t,s.mesh.material.opacity=Math.max(0,s.life/s.maxLife*.9),s.life<=0&&(this.scene.remove(s.mesh),this.tracers.splice(n,1))}const e=9.8;for(let n=this.shells.length-1;n>=0;n--){const s=this.shells[n];s.vel.y-=e*t,s.mesh.position.addScaledVector(s.vel,t),s.mesh.rotation.x+=s.angVel.x*t,s.mesh.rotation.y+=s.angVel.y*t,s.mesh.rotation.z+=s.angVel.z*t,s.mesh.position.y<.02&&s.vel.y<0&&(s.bounced<2?(s.vel.y*=-.35,s.vel.x*=.5,s.vel.z*=.5,s.bounced++,s.mesh.position.y=.02):s.vel.set(0,0,0)),s.life-=t,s.life<=0&&(this.scene.remove(s.mesh),this.shells.splice(n,1))}for(let n=this.impacts.length-1;n>=0;n--){const s=this.impacts[n];s.life-=t;const r=s.points.geometry.attributes.position;for(let a=0;a<s.velocities.length;a++){const o=s.velocities[a];o.y-=s.gravity*t,r.array[a*3]+=o.x*t,r.array[a*3+1]+=o.y*t,r.array[a*3+2]+=o.z*t}r.needsUpdate=!0,s.points.material.opacity=Math.max(0,s.life/s.maxLife),s.life<=0&&(this.scene.remove(s.points),this.impacts.splice(n,1))}for(let n=this.decals.length-1;n>=0;n--){const s=this.decals[n];s.life-=t,s.life<2&&(s.mesh.material.opacity=Math.max(0,s.life/2)),s.life<=0&&(this.scene.remove(s.mesh),this.decals.splice(n,1))}for(let n=this.explosions.length-1;n>=0;n--){const s=this.explosions[n];s.life-=t;const r=1-s.life/s.maxLife;s.light.intensity=60*(1-r)*(1-r),s.sphere.scale.setScalar(1+r*9),s.sphere.material.opacity=Math.max(0,1-r*1.3),s.life<=0&&(this.scene.remove(s.light),this.scene.remove(s.sphere),this.explosions.splice(n,1))}for(let n=this.smokePuffs.length-1;n>=0;n--){const s=this.smokePuffs[n];s.life-=t;const r=1-s.life/s.maxLife;s.spr.scale.setScalar(.3+r*s.grow),s.spr.position.y+=s.rise*t,s.spr.material.opacity=Math.max(0,.5*(1-r)),s.life<=0&&(this.scene.remove(s.spr),this.smokePuffs.splice(n,1))}}}const Cg={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new at(1/1024,1/512)}},vertexShader:`

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
	`},tt={gunmetal:new _t({color:3356477,roughness:.42,metalness:.6}),darkSteel:new _t({color:2764082,roughness:.48,metalness:.6}),polymer:new _t({color:2895667,roughness:.75,metalness:.15}),grip:new _t({color:1974307,roughness:.9,metalness:.05}),tan:new _t({color:9075292,roughness:.7,metalness:.1}),accent:new _t({color:12077614,roughness:.5,metalness:.3}),sightGlow:new _t({color:3211120,emissive:3211120,emissiveIntensity:2.2}),scopeGlass:new _t({color:1851477,roughness:.15,metalness:.6}),brass:new _t({color:12886602,roughness:.35,metalness:.7}),glove:new _t({color:2500650,roughness:.85,metalness:.05}),gloveKnuckle:new _t({color:3356216,roughness:.7,metalness:.1}),sleeve:new _t({color:3751982,roughness:.92,metalness:.03}),skin:new _t({color:13081202,roughness:.72,metalness:.02}),skinDark:new _t({color:10909263,roughness:.75,metalness:.02}),nail:new _t({color:14202778,roughness:.4,metalness:.05})};function Et(i,t,e,n,s=0,r=0,a=0,o=0,l=0,c=0){const u=new it(new ne(i,t,e),n);return u.position.set(s,r,a),u.rotation.set(o,l,c),u}function he(i,t,e,n,s=0,r=0,a=0,o=0,l=0,c=0,u=12){const h=new it(new Ae(i,t,e,u),n);return h.position.set(s,r,a),h.rotation.set(o,l,c),h}function _s(i,t,e,n){const s=new it(new Ae(t,e,i,8),n);return s.rotation.x=-Math.PI/2,s.position.z=-i/2,s}function Pg(i,t,e,n,s){const r=new Gt;r.position.set(i,.006,t),r.rotation.x=-(.25+n*.55),r.add(_s(e*.44,.0115,.0108,tt.skin));const a=new it(new He(.0125,8,6),tt.skinDark);r.add(a);const o=new Gt;o.position.z=-e*.44,o.rotation.x=-(.35+n*.75),o.add(_s(e*.33,.0106,.0098,tt.skin));const l=new Gt;l.position.z=-e*.33,l.rotation.x=-(.3+n*.7),l.add(_s(e*.26,.0097,.0075,tt.skin));const c=new it(new ne(.011,.004,.013),s||tt.nail);return c.position.set(0,.007,-e*.16),l.add(c),o.add(l),r.add(o),r}function tc(i=1){const t=new Gt,e=new it(new Ae(.05,.075,.34,12),tt.sleeve);e.rotation.x=Math.PI/2,e.position.z=.2,t.add(e);const n=new it(new $i(.052,.008,6,14),tt.sleeve);n.position.z=.04,t.add(n);const s=new it(new Ae(.044,.05,.08,12),tt.skin);s.rotation.x=Math.PI/2,s.position.z=.02,t.add(s);const r=new it(new ne(.088,.046,.1),tt.skin);r.position.set(-.002,0,-.05),t.add(r);const a=new it(new He(.045,10,8),tt.skin);a.scale.set(1,.55,.9),a.position.set(-.002,-.004,-.01),t.add(a);const o=new it(new Ae(.015,.015,.086,8),tt.skinDark);o.rotation.z=Math.PI/2,o.position.set(-.002,.012,-.098),t.add(o);const l=[-.032,-.0105,.0105,.032],c=[.092,.1,.095,.078],u=[-.1,-.104,-.102,-.096];for(let g=0;g<4;g++)t.add(Pg(l[g],u[g],c[g],i,tt.nail));const h=new Gt;h.position.set(.05,-.004,-.02),h.rotation.set(.15,0,.9),h.add(_s(.05,.014,.012,tt.skin));const d=new Gt;d.position.z=-.05,d.rotation.x=-(.3+i*.35),d.add(_s(.042,.012,.0085,tt.skin));const f=new it(new ne(.012,.004,.013),tt.nail);return f.position.set(0,.008,-.026),d.add(f),h.add(d),t.add(h),t.traverse(g=>{g.isMesh&&(g.castShadow=!1,g.frustumCulled=!1)}),t}function es(i,t){const e=tc();e.position.set(...t.left),t.leftRot&&e.rotation.set(...t.leftRot),(t.leftParent||i).add(e);const n=tc();return n.position.set(...t.right),t.rightRot&&n.rotation.set(...t.rightRot),i.add(n),{left:e,right:n}}function Lg(){const i=new Gt,t=new Gt;i.add(Et(.055,.075,.46,tt.gunmetal,0,.015,-.02)),i.add(Et(.05,.06,.3,tt.polymer,0,-.04,.02)),i.add(Et(.06,.055,.34,tt.polymer,0,.02,-.42));for(let s=0;s<6;s++)i.add(Et(.062,.008,.03,tt.darkSteel,0,.052,-.3-s*.05));i.add(he(.014,.014,.34,tt.darkSteel,0,.015,-.7,Math.PI/2)),i.add(he(.022,.022,.07,tt.darkSteel,0,.015,-.85,Math.PI/2)),i.add(Et(.045,.05,.2,tt.polymer,0,0,.24)),i.add(Et(.05,.09,.05,tt.grip,0,-.03,.32)),i.add(Et(.035,.09,.045,tt.grip,0,-.095,.08,.25)),i.add(Et(.008,.035,.008,tt.darkSteel,0,.075,-.55));const e=new it(new He(.005,6,6),tt.sightGlow);e.position.set(0,.095,-.55),i.add(e),i.add(Et(.016,.03,.012,tt.darkSteel,-.014,.075,.12)),i.add(Et(.016,.03,.012,tt.darkSteel,.014,.075,.12)),t.add(Et(.042,.13,.075,tt.polymer,0,-.065,0,-.12)),t.add(Et(.042,.08,.07,tt.polymer,0,-.155,.018,-.3)),t.position.set(0,-.07,-.06),i.add(t),i.add(Et(.02,.015,.05,tt.darkSteel,.033,.04,.1)),i.add(Et(.002,.03,.08,tt.brass,.029,.015,-.05));const n=es(i,{right:[0,-.085,.11],rightRot:[.42,0,0],left:[-.01,-.055,-.34],leftRot:[.22,0,-.15]});return{group:i,mag:t,muzzle:new E(0,.015,-.9),hands:n}}function Dg(){const i=new Gt,t=new Gt;i.add(Et(.042,.055,.24,tt.gunmetal,0,.02,-.05)),i.add(Et(.038,.05,.2,tt.polymer,0,-.02,-.03)),i.add(he(.011,.011,.06,tt.darkSteel,0,.025,-.19,Math.PI/2)),i.add(Et(.036,.1,.055,tt.grip,0,-.085,.055,.18)),i.add(Et(.03,.03,.03,tt.darkSteel,0,-.035,-.11)),i.add(Et(.008,.02,.008,tt.darkSteel,0,.055,-.16));const e=new it(new He(.004,6,6),tt.sightGlow);e.position.set(0,.068,-.16),i.add(e),i.add(Et(.014,.018,.01,tt.darkSteel,-.011,.055,.06)),i.add(Et(.014,.018,.01,tt.darkSteel,.011,.055,.06));for(let s=0;s<5;s++)i.add(Et(.044,.04,.006,tt.darkSteel,0,.02,.045+s*.012));t.add(Et(.028,.1,.045,tt.darkSteel,0,-.04,0)),t.position.set(0,-.09,.055),i.add(t);const n=es(i,{right:[0,-.07,.02],rightRot:[.55,0,0],left:[-.05,-.075,0],leftRot:[.5,.5,.1]});return{group:i,mag:t,muzzle:new E(0,.025,-.23),hands:n}}function Ig(){const i=new Gt,t=new Gt;i.add(Et(.055,.07,.36,tt.gunmetal,0,.01,.05)),i.add(he(.017,.017,.55,tt.darkSteel,0,.035,-.4,Math.PI/2)),i.add(he(.019,.019,.48,tt.gunmetal,0,-.015,-.36,Math.PI/2)),t.add(he(.03,.03,.16,tt.grip,0,0,0,Math.PI/2,0,0,8)),t.position.set(0,-.015,-.38),i.add(t),i.add(Et(.05,.055,.22,tt.tan,0,-.005,.32)),i.add(Et(.052,.1,.05,tt.tan,0,-.045,.42)),i.add(Et(.035,.085,.045,tt.grip,0,-.085,.17,.3)),i.add(Et(.008,.025,.008,tt.darkSteel,0,.062,-.62));const e=new it(new He(.006,6,6),tt.sightGlow);e.position.set(0,.078,-.62),i.add(e);for(let s=0;s<4;s++)i.add(he(.011,.011,.05,tt.accent,.035,.01,.14-s*.045,Math.PI/2,0,0,8));const n=es(i,{right:[0,-.075,.16],rightRot:[.45,0,0],left:[0,-.055,.02],leftRot:[.25,0,0],leftParent:t});return{group:i,mag:t,muzzle:new E(0,.035,-.68),hands:n}}function Ug(){const i=new Gt,t=new Gt;i.add(Et(.05,.07,.44,tt.tan,0,0,.06)),i.add(Et(.05,.1,.06,tt.tan,0,-.03,.34)),i.add(Et(.052,.05,.34,tt.tan,0,-.005,-.3)),i.add(he(.016,.016,.6,tt.darkSteel,0,.02,-.68,Math.PI/2)),i.add(he(.028,.028,.1,tt.darkSteel,0,.02,-.95,Math.PI/2)),i.add(he(.032,.032,.22,tt.gunmetal,0,.085,-.05,Math.PI/2)),i.add(he(.04,.032,.05,tt.gunmetal,0,.085,-.17,Math.PI/2)),i.add(he(.036,.03,.04,tt.gunmetal,0,.085,.07,Math.PI/2));const e=new it(new Uo(.036,16),tt.scopeGlass);e.position.set(0,.085,-.195),e.rotation.y=Math.PI,i.add(e),i.add(Et(.012,.03,.03,tt.darkSteel,0,.05,-.05)),i.add(Et(.012,.03,.03,tt.darkSteel,0,.05,.04)),i.add(he(.008,.008,.06,tt.darkSteel,.045,.02,.12,0,0,Math.PI/2,8));const n=new it(new He(.014,8,8),tt.darkSteel);n.position.set(.075,.02,.12),i.add(n),i.add(Et(.035,.085,.045,tt.grip,0,-.08,.22,.28)),i.add(he(.006,.006,.14,tt.darkSteel,-.02,-.02,-.44,.5,0,.3,6)),i.add(he(.006,.006,.14,tt.darkSteel,.02,-.02,-.44,.5,0,-.3,6)),t.add(Et(.038,.09,.08,tt.darkSteel,0,-.045,0)),t.position.set(0,-.04,-.02),i.add(t);const s=es(i,{right:[0,-.07,.2],rightRot:[.4,0,0],left:[0,-.04,-.28],leftRot:[.2,0,0]});return{group:i,mag:t,muzzle:new E(0,.02,-1),hands:s}}function Ng(){const i=new Gt,t=new Gt,e=new _t({color:6964004,roughness:.72,metalness:.08});i.add(Et(.056,.08,.42,tt.gunmetal,0,.015,0)),i.add(Et(.05,.05,.3,e,0,.01,-.4)),i.add(Et(.052,.03,.12,e,0,.06,-.36)),i.add(he(.013,.013,.4,tt.darkSteel,0,.02,-.72,Math.PI/2)),i.add(he(.02,.02,.06,tt.darkSteel,0,.02,-.93,Math.PI/2)),i.add(Et(.045,.05,.24,e,0,-.01,.28)),i.add(Et(.05,.085,.05,e,0,-.04,.4)),i.add(Et(.035,.09,.045,e,0,-.095,.06,.22)),i.add(Et(.008,.03,.008,tt.darkSteel,0,.07,-.6));const n=new it(new He(.005,6,6),tt.sightGlow);n.position.set(0,.088,-.6),i.add(n),i.add(Et(.02,.028,.014,tt.darkSteel,0,.072,.16)),t.add(Et(.04,.1,.07,tt.darkSteel,0,-.05,.02,-.15)),t.add(Et(.04,.09,.065,tt.darkSteel,0,-.13,.04,-.4)),t.add(Et(.04,.07,.06,tt.darkSteel,0,-.2,.09,-.62)),t.position.set(0,-.06,-.08),i.add(t),i.add(Et(.022,.016,.05,tt.darkSteel,.032,.05,.02));const s=es(i,{right:[0,-.09,.08],rightRot:[.42,0,0],left:[-.01,-.05,-.36],leftRot:[.24,0,-.12]});return{group:i,mag:t,muzzle:new E(0,.02,-.98),hands:s}}function Fg(){const i=new Gt,t=new Gt;i.add(Et(.05,.075,.34,tt.gunmetal,0,.01,.02)),i.add(he(.026,.026,.2,tt.polymer,0,.012,-.22,Math.PI/2)),i.add(he(.012,.012,.12,tt.darkSteel,0,.012,-.4,Math.PI/2)),i.add(he(.02,.02,.05,tt.darkSteel,0,.012,-.47,Math.PI/2)),i.add(he(.006,.006,.22,tt.darkSteel,-.02,0,.26,Math.PI/2,0,0,6)),i.add(he(.006,.006,.22,tt.darkSteel,.02,0,.26,Math.PI/2,0,0,6)),i.add(Et(.06,.055,.04,tt.grip,0,-.02,.38)),i.add(Et(.034,.085,.045,tt.grip,0,-.088,.08,.2)),i.add(he(.018,.018,.02,tt.darkSteel,0,.055,-.36,Math.PI/2,0,0,8));const e=new it(new He(.004,6,6),tt.sightGlow);e.position.set(0,.062,-.36),i.add(e),i.add(Et(.02,.03,.03,tt.darkSteel,0,.058,.12)),t.add(Et(.03,.16,.05,tt.darkSteel,0,-.09,0,.08)),t.position.set(0,-.05,-.1),i.add(t);const n=es(i,{right:[0,-.085,.1],rightRot:[.45,0,0],left:[-.005,-.045,-.2],leftRot:[.3,0,-.1]});return{group:i,mag:t,muzzle:new E(0,.012,-.52),hands:n}}const Og=[{id:"rifle",name:"M4 KARABİNA",mode:"auto",modeLabel:"TAM OTOMATİK",damage:26,headshotMult:2.1,rpm:720,magSize:30,reserveStart:150,maxReserve:270,reloadTime:2.1,spreadHip:.028,spreadAds:.004,spreadMove:.03,recoilPitch:.011,recoilYaw:.004,kickback:.055,adsFovMult:.82,adsTime:.16,pellets:1,range:140,sound:"rifle",build:Lg,hip:[.26,-.24,-.5],ads:[0,-.148,-.32],scope:!1},{id:"shotgun",name:"SPAS POMPALI",mode:"pump",modeLabel:"POMPALI",damage:13,headshotMult:1.6,rpm:68,magSize:6,reserveStart:30,maxReserve:48,reloadTime:2.6,spreadHip:.055,spreadAds:.038,spreadMove:.02,recoilPitch:.035,recoilYaw:.008,kickback:.13,adsFovMult:.88,adsTime:.19,pellets:8,range:40,sound:"shotgun",build:Ig,hip:[.26,-.25,-.52],ads:[0,-.175,-.36],scope:!1},{id:"sniper",name:"AX-50 KESKİN",mode:"bolt",modeLabel:"SÜRGÜLÜ",damage:130,headshotMult:2,rpm:42,magSize:5,reserveStart:25,maxReserve:40,reloadTime:3,spreadHip:.08,spreadAds:5e-4,spreadMove:.05,recoilPitch:.05,recoilYaw:.01,kickback:.16,adsFovMult:.28,adsTime:.3,pellets:1,range:400,sound:"sniper",build:Ug,hip:[.26,-.26,-.55],ads:[0,-.02,-.3],scope:!0},{id:"pistol",name:"M9 TABANCA",mode:"semi",modeLabel:"YARI OTOMATİK",damage:34,headshotMult:2.4,rpm:400,magSize:15,reserveStart:75,maxReserve:120,reloadTime:1.5,spreadHip:.022,spreadAds:.005,spreadMove:.02,recoilPitch:.014,recoilYaw:.005,kickback:.05,adsFovMult:.9,adsTime:.12,pellets:1,range:70,sound:"pistol",build:Dg,hip:[.24,-.23,-.45],ads:[0,-.135,-.3],scope:!1},{id:"ak",name:"AK-47",mode:"auto",modeLabel:"TAM OTOMATİK",damage:32,headshotMult:2.1,rpm:600,magSize:30,reserveStart:150,maxReserve:240,reloadTime:2.4,spreadHip:.034,spreadAds:.006,spreadMove:.034,recoilPitch:.016,recoilYaw:.006,kickback:.07,adsFovMult:.82,adsTime:.18,pellets:1,range:130,sound:"rifle",build:Ng,hip:[.26,-.24,-.5],ads:[0,-.152,-.32],scope:!1},{id:"smg",name:"MP5",mode:"auto",modeLabel:"TAM OTOMATİK",damage:20,headshotMult:1.9,rpm:800,magSize:30,reserveStart:180,maxReserve:300,reloadTime:1.9,spreadHip:.03,spreadAds:.006,spreadMove:.026,recoilPitch:.008,recoilYaw:.004,kickback:.04,adsFovMult:.85,adsTime:.13,pellets:1,range:90,sound:"pistol",build:Fg,hip:[.25,-.23,-.47],ads:[0,-.142,-.3],scope:!1}];class zg{constructor(t,e,n){this.camera=t,this.audio=e,this.effects=n,this.rig=new Gt,t.add(this.rig),this.vmLight=new Ar(13490406,3.4,2.4,2),this.vmLight.position.set(.18,.12,-.1),this.rig.add(this.vmLight);const s=new _r(10465476,.6);s.position.set(-.3,.4,.5),this.rig.add(s),this.rig.add(s.target),this.weapons=Og.map(o=>{const l=o.build();return l.group.visible=!1,l.group.traverse(c=>{c.isMesh&&(c.castShadow=!1,c.frustumCulled=!1)}),this.rig.add(l.group),{def:o,model:l.group,magMesh:l.mag,magHome:l.mag.position.clone(),muzzleLocal:l.muzzle,leftHand:l.hands?l.hands.left:null,leftHandHome:l.hands?l.hands.left.position.clone():null,animateHand:!!l.hands&&o.id!=="shotgun",mag:o.magSize,reserve:o.reserveStart}}),this.index=0,this.current=this.weapons[0],this.current.model.visible=!0,this.cooldown=0,this.reloading=!1,this.reloadT=0,this.reloadStagePlayed=[!1,!1,!1],this.pumping=0,this.switching=0,this.switchTarget=-1,this.adsAmount=0,this.wantAds=!1,this.triggerHeld=!1,this.semiReady=!0,this.swayPos=new E,this.swayRot=new un,this.bobPhase=0,this.kick=0,this.recoilRot=0,this.throwT=0,this.inspectT=0,this.inspectDur=2.4,this.sprintAmt=0,this.emptyReload=!1,this.breatheT=Math.random()*10,this.flashLight=new Ar(16757598,0,7,2),this.rig.add(this.flashLight);const r=new Ur(.045,.16,8,1,!0),a=new gn({color:16767392,transparent:!0,opacity:0,blending:oi,depthWrite:!1,side:mn});this.flashMesh=new it(r,a),this.flashMesh.rotation.x=Math.PI/2,this.rig.add(this.flashMesh),this.flashTime=0,this.onShot=null,this.onRecoil=null,this.onAmmoChange=null}get def(){return this.current.def}totalReserve(){return this.current.reserve}addReserve(t,e){for(const n of this.weapons)(t==="all"||n.def.id===t)&&(n.reserve=Math.min(n.def.maxReserve,n.reserve+(t==="all"?Math.ceil(n.def.magSize*1.5):e)));this.onAmmoChange&&this.onAmmoChange()}switchTo(t){if(!(t===this.index||t<0||t>=this.weapons.length)){if(this.switching>0){this.switchTarget=t;return}this.switchTarget=t,this.switching=.36,this.reloading=!1,this.audio.weaponSwitch()}}cycle(t){this.switchTo((this.index+t+this.weapons.length)%this.weapons.length)}startReload(){const t=this.current;this.reloading||this.switching>0||t.mag>=t.def.magSize||t.reserve<=0||(this.reloading=!0,this.reloadT=0,this.reloadStagePlayed=[!1,!1,!1,!1],this.emptyReload=t.mag<=0,this.inspectT=0)}setAds(t){this.wantAds=t,t&&(this.inspectT=0)}playThrow(){this.throwT=.55,this.inspectT=0}playInspect(){this.reloading||this.switching>0||this.inspectT>0||(this.inspectT=this.inspectDur)}setTrigger(t){this.triggerHeld=t,t&&(this.inspectT=0),t||(this.semiReady=!0)}tryFire(t){const e=this.current,n=e.def;if(!this.triggerHeld||this.reloading||this.switching>0||this.pumping>0||this.cooldown>0)return null;if(n.mode==="semi"||n.mode==="pump"||n.mode==="bolt"){if(!this.semiReady)return null;this.semiReady=!1}if(e.mag<=0)return this.audio.dryFire(),this.cooldown=.25,e.reserve>0&&this.startReload(),null;e.mag--,this.cooldown=60/n.rpm,(n.mode==="pump"||n.mode==="bolt")&&(this.pumping=.55);let s=this.adsAmount>.6?n.spreadAds:n.spreadHip;t&&(s+=n.spreadMove*(1-this.adsAmount*.8));const r=new E;this.camera.getWorldPosition(r);const a=new E;this.camera.getWorldDirection(a);const o=[];for(let u=0;u<n.pellets;u++){const h=a.clone();h.x+=(Math.random()-.5)*2*s,h.y+=(Math.random()-.5)*2*s,h.z+=(Math.random()-.5)*2*s*.4,h.normalize(),o.push({origin:r.clone(),dir:h,def:n})}const l=1-this.adsAmount*.45;this.onRecoil&&this.onRecoil(n.recoilPitch*l,(Math.random()-.5)*2*n.recoilYaw*l),this.kick=Math.min(.2,this.kick+n.kickback),this.recoilRot=Math.min(.3,this.recoilRot+n.recoilPitch*6),this.flashTime=.05;const c=1+Math.random()*.9;return this.flashMesh.scale.set(c,c,.9+Math.random()*.8),this.flashMesh.rotation.z=Math.random()*Math.PI*2,this.audio.gunshot(n.sound),this.effects.ejectShell(this.camera,this.current),this.onAmmoChange&&this.onAmmoChange(),o}update(t,e){const n=this.current,s=n.def;if(this.cooldown=Math.max(0,this.cooldown-t),this.pumping>0){this.pumping=Math.max(0,this.pumping-t);const x=1-this.pumping/.55,T=Math.sin(Math.min(1,x)*Math.PI);s.mode==="pump"?(n.magMesh.position.z=n.magHome.z+T*.12,x>.4&&x<.5&&!this._pumpSnd&&(this.audio.reloadStage(2),this._pumpSnd=!0)):(n.model.rotation.z=T*.12,x>.35&&x<.45&&!this._pumpSnd&&(this.audio.reloadStage(2),this._pumpSnd=!0)),this.pumping===0&&(this._pumpSnd=!1,s.mode==="pump"&&n.magMesh.position.copy(n.magHome),n.model.rotation.z=0)}if(this.switching>0){this.switching=Math.max(0,this.switching-t);const x=.18;this.switching>x?this.rig.position.y=-((.36-this.switching)/x)*.35:(this.switchTarget>=0&&this.index!==this.switchTarget&&(this.current.model.visible=!1,this.index=this.switchTarget,this.current=this.weapons[this.index],this.current.model.visible=!0,this.onAmmoChange&&this.onAmmoChange()),this.rig.position.y=-(this.switching/x)*.35),this.switching===0&&(this.switchTarget=-1,this.rig.position.y=0)}if(this.reloading){this.reloadT+=t;const x=s.reloadTime*(this.emptyReload?1.2:1),T=this.reloadT/x,F=n.magHome.y;if(T<.3){const A=T/.3;n.magMesh.position.y=F-A*.25,n.magMesh.rotation.x=-A*.5,!this.reloadStagePlayed[0]&&T>.08&&(this.audio.reloadStage(0),this.reloadStagePlayed[0]=!0)}else if(T<.65)n.magMesh.visible=!1;else if(T<.9){n.magMesh.visible=!0;const A=(T-.65)/.25;n.magMesh.position.y=F-(1-A)*.25,n.magMesh.rotation.x=-(1-A)*.5,!this.reloadStagePlayed[1]&&T>.72&&(this.audio.reloadStage(1),this.reloadStagePlayed[1]=!0)}else n.magMesh.position.y=F,n.magMesh.rotation.x=0,this.reloadStagePlayed[2]||(this.audio.reloadStage(2),this.reloadStagePlayed[2]=!0);if(n.leftHand&&n.animateHand){let A=0;T<.3?A=T/.3:T<.65?A=1:T<.92&&(A=1-(T-.65)/.27),n.leftHand.position.y=n.leftHandHome.y-A*.2,n.leftHand.position.z=n.leftHandHome.z+A*.28}if(this.rig.rotation.z=Math.sin(Math.min(1,T)*Math.PI)*.22,this.rig.rotation.x=Math.sin(Math.min(1,T)*Math.PI)*.12,this.emptyReload&&T>.9){const A=Math.sin(Math.min(1,(T-.9)/.1)*Math.PI);this.rig.position.z=A*.05,!this.reloadStagePlayed[3]&&T>.94&&(this.audio.reloadStage(2),this.reloadStagePlayed[3]=!0)}if(this.reloadT>=x){const A=s.magSize-n.mag,R=Math.min(A,n.reserve);n.mag+=R,n.reserve-=R,this.reloading=!1,this.emptyReload=!1,this.rig.rotation.set(0,0,0),this.rig.position.set(0,0,0),n.magMesh.position.copy(n.magHome),n.magMesh.rotation.x=0,n.magMesh.visible=!0,n.leftHand&&n.leftHandHome&&n.leftHand.position.copy(n.leftHandHome),this.onAmmoChange&&this.onAmmoChange()}}else n.leftHand&&n.leftHandHome&&n.animateHand&&(n.leftHand.position.y+=(n.leftHandHome.y-n.leftHand.position.y)*Math.min(1,t*12),n.leftHand.position.z+=(n.leftHandHome.z-n.leftHand.position.z)*Math.min(1,t*12));const r=1/s.adsTime;this.wantAds&&!this.reloading&&this.switching===0?this.adsAmount=Math.min(1,this.adsAmount+t*r):this.adsAmount=Math.max(0,this.adsAmount-t*r*1.3);const a=this.adsAmount*this.adsAmount*(3-2*this.adsAmount),o=s.hip,l=s.ads,c=o[0]+(l[0]-o[0])*a,u=o[1]+(l[1]-o[1])*a,h=o[2]+(l[2]-o[2])*a,d=1-a*.85;this.swayPos.x+=(-e.lookDeltaX*.0016*d-this.swayPos.x)*Math.min(1,t*9),this.swayPos.y+=(e.lookDeltaY*.0013*d-this.swayPos.y)*Math.min(1,t*9),this.swayRot.z+=(-e.lookDeltaX*.0011*d-this.swayRot.z)*Math.min(1,t*8),this.swayRot.x+=(-e.lookDeltaY*9e-4*d-this.swayRot.x)*Math.min(1,t*8),e.grounded&&e.speed>.5&&(this.bobPhase+=t*(4.5+e.speed*.9));const f=(.006+e.speed*.0016)*(1-a*.9),g=Math.sin(this.bobPhase)*f,_=Math.abs(Math.cos(this.bobPhase))*f*1.15;this.kick=Math.max(0,this.kick-t*.55),this.recoilRot=Math.max(0,this.recoilRot-t*1.8);const m=this.current.model;if(m.position.set(c+this.swayPos.x+g,u+this.swayPos.y-_,h+this.kick),m.rotation.set(this.swayRot.x-this.recoilRot,0,this.swayRot.z),this.pumping>0&&s.mode==="bolt"&&(m.rotation.z+=Math.sin((1-this.pumping/.55)*Math.PI)*.12),this.throwT>0){this.throwT=Math.max(0,this.throwT-t);const x=1-this.throwT/.55,T=Math.sin(x*Math.PI);m.position.x-=T*.14,m.position.y-=T*.16,m.position.z+=T*.05,m.rotation.x+=T*.6,m.rotation.z-=T*.35}const p=!!e.sprint&&!this.wantAds&&!this.triggerHeld&&!this.reloading&&this.switching===0&&this.inspectT<=0&&this.pumping<=0;if(this.sprintAmt+=((p?1:0)-this.sprintAmt)*Math.min(1,t*9),this.sprintAmt>.001){const x=this.sprintAmt;m.position.x+=x*.06,m.position.y+=-x*.09,m.position.z+=-x*.05,m.rotation.x+=x*.5,m.rotation.z+=-x*.5,m.rotation.y+=x*.32}this.breatheT+=t;const w=.0045*(.5+this.adsAmount*.8)*(1-this.sprintAmt);if(m.position.y+=Math.sin(this.breatheT*1.6)*w,m.rotation.x+=Math.sin(this.breatheT*1.6+.4)*w*.6,this.inspectT>0){this.inspectT=Math.max(0,this.inspectT-t);const x=1-this.inspectT/this.inspectDur;let T=0,F=0,A=0,R=0,I=0;if(x<.42){const y=x/.42;T=y*.95,A=y*.5,F=-y*.3,R=y*.05,I=y*.09}else if(x<.72){const y=(x-.42)/.3;T=.95-y*.45,F=-.3+y*1.05,A=.5-y*.2,R=.05-y*.13,I=.09+y*.04}else{const y=(x-.72)/.28;T=.5*(1-y),F=.75*(1-y),A=.3*(1-y),R=-.08*(1-y),I=.13*(1-y)}m.rotation.y+=T,m.rotation.x+=F,m.rotation.z+=A,m.position.y+=R,m.position.z+=I}if(m.visible=!(s.scope&&this.adsAmount>.85)&&(this.switching===0||!0),this.flashTime>0){this.flashTime-=t;const x=this.flashTime>0,T=this.muzzleWorldLocal();this.flashMesh.position.copy(T),this.flashMesh.visible=x,this.flashMesh.material.opacity=x?1:0,this.flashLight.position.copy(T),this.flashLight.intensity=x?34+Math.random()*12:0}else this.flashMesh.visible=!1,this.flashMesh.material.opacity=0,this.flashLight.intensity=0}muzzleWorldLocal(){const t=this.current;return t.muzzleLocal.clone().add(t.model.position)}currentFovMult(){const t=this.adsAmount*this.adsAmount*(3-2*this.adsAmount);return 1+(this.def.adsFovMult-1)*t}isScoped(){return this.def.scope&&this.adsAmount>.85}}const Ma=1.75,Bg=1.15,kg=.34,Hg=22,Vg=7.4,br=4.6,Gg=1.6,Wg=.5,Xg=42,qg=12,ec=br*2.05,Yg=.62,Kg=br*.95;class $g{constructor(t,e,n){this.camera=t,this.world=e,this.audio=n,this.pos=new E(0,0,6),this.vel=new E,this.yaw=Math.PI,this.pitch=0,this.height=Ma,this.targetHeight=Ma,this.crouching=!1,this.grounded=!0,this.sprinting=!1,this.wasGrounded=!0,this.maxHp=100,this.hp=this.maxHp,this.regenDelay=0,this.dead=!1,this.sensitivity=1,this.baseFov=80,this.lookDeltaX=0,this.lookDeltaY=0,this.stepDist=0,this.bobT=0,this.jumpBuffer=0,this.coyote=0,this._wasJump=!1,this.sliding=!1,this.slideT=0,this._wasCrouch=!1,this.slideLean=0,this.onDamage=null,this.onDeath=null,this.input={forward:0,right:0,jump:!1,sprint:!1,crouch:!1}}applyMouseMovement(t,e){const n=this.sensitivity*.0022;this.yaw-=t*n,this.pitch-=e*n,this.pitch=Math.max(-Math.PI/2+.02,Math.min(Math.PI/2-.02,this.pitch)),this.lookDeltaX=t,this.lookDeltaY=e}takeDamage(t,e){this.dead||(this.hp=Math.max(0,this.hp-t),this.regenDelay=4.5,this.audio.playerHurt(),this.onDamage&&this.onDamage(t,e),this.hp<=0&&(this.dead=!0,this.onDeath&&this.onDeath()))}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}update(t,e){const n=!!e.crouch,s=n&&!this._wasCrouch;this._wasCrouch=n;const r=Math.hypot(this.vel.x,this.vel.z);if(!this.sliding&&s&&this.grounded&&r>br*1.15){this.sliding=!0,this.slideT=Yg;const d=r>.001?1/r:0;this.vel.x=this.vel.x*d*ec,this.vel.z=this.vel.z*d*ec,this.audio.footstep(!0)}this.crouching=n||this.sliding,this.targetHeight=this.crouching?Bg:Ma,this.height+=(this.targetHeight-this.height)*Math.min(1,t*(this.sliding?16:10)),this.sprinting=!!e.sprint&&!this.crouching&&(e.forward||0)>0&&!this.sliding;const a=new E(Math.sin(this.yaw),0,Math.cos(this.yaw)),o=new E(Math.sin(this.yaw+Math.PI/2),0,Math.cos(this.yaw+Math.PI/2)),l=new E;if(l.addScaledVector(a,-(e.forward||0)),l.addScaledVector(o,e.right||0),l.lengthSq()>0&&l.normalize(),this.sliding){this.slideT-=t;const d=Math.exp(-2.7*t);this.vel.x*=d,this.vel.z*=d;const f=Math.hypot(this.vel.x,this.vel.z);if(f>.001&&l.lengthSq()>0){const g=this.vel.x/f,_=this.vel.z/f,m=2.2*t;let p=g+l.x*m,w=_+l.z*m;const x=Math.hypot(p,w)||1;this.vel.x=p/x*f,this.vel.z=w/x*f}this.slideLean=Math.min(1,this.slideLean+t*6),(this.slideT<=0||f<Kg||!this.grounded||!n&&!e.sprint)&&(this.sliding=!1)}else{this.slideLean=Math.max(0,this.slideLean-t*5);let d=br;n?d*=Wg:this.sprinting&&(d*=Gg);const f=l.multiplyScalar(d),g=new E(this.vel.x,0,this.vel.z),_=f.clone().sub(g),p=(l.lengthSq()>0?Xg:qg)*t;_.length()>p&&_.setLength(p),g.add(_),this.vel.x=g.x,this.vel.z=g.z}const c=!!e.jump;c&&!this._wasJump&&(this.jumpBuffer=.12),this._wasJump=c,this.jumpBuffer=Math.max(0,this.jumpBuffer-t),this.coyote=this.grounded?.1:Math.max(0,this.coyote-t),this.jumpBuffer>0&&this.coyote>0&&(this.vel.y=Vg*(n?1.08:1),this.grounded=!1,this.jumpBuffer=0,this.coyote=0,this.audio.footstep(!0)),this.grounded||(this.vel.y-=Hg*t),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.pos.y+=this.vel.y*t,this.pos.y<=0?(!this.grounded&&this.vel.y<-6&&this.audio.land(),this.pos.y=0,this.vel.y=0,this.grounded=!0):this.grounded=!1,vr(this.pos,kg,this.height,this.world.colliders);const u=Math.hypot(this.vel.x,this.vel.z);if(this.grounded&&u>.6){this.stepDist+=u*t;const d=this.sprinting?2.2:n?3.6:2.8;this.stepDist>d&&(this.stepDist=0,this.audio.footstep(this.sprinting))}else this.stepDist=0;this.regenDelay>0?this.regenDelay-=t:this.hp<this.maxHp&&!this.dead&&(this.hp=Math.min(this.maxHp,this.hp+t*8));const h=this.height-.12;this.camera.position.set(this.pos.x,this.pos.y+h,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,-.09*this.slideLean,"YXZ"),this.speed=u}consumeLookDelta(){const t={x:this.lookDeltaX,y:this.lookDeltaY};return this.lookDeltaX=0,this.lookDeltaY=0,t}getEyePosition(t){return t.set(this.pos.x,this.pos.y+this.height-.12,this.pos.z)}}function Jg(i){const t=new Map,e=new Map,n=i.clone();return ih(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ih(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)ih(i.children[n],t.children[n],e)}function Sa(i,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d");n.fillStyle=i,n.fillRect(0,0,128,128);for(let r=0;r<70;r++){n.fillStyle=t[r%t.length],n.globalAlpha=.55+Math.random()*.35;const a=Math.random()*128,o=Math.random()*128,l=6+Math.random()*16;n.beginPath(),n.ellipse(a,o,l,l*(.6+Math.random()*.5),Math.random()*3,0,7),n.fill()}n.globalAlpha=1;const s=new Ir(e);return s.wrapS=s.wrapT=Ms,s.colorSpace=Ke,s}const nc={assault:()=>Sa("#3f4632",["#2c3122","#4b533b","#20241a","#5a624a"]),rusher:()=>Sa("#5a2b26",["#3e1c19","#6e3a30","#241210","#7a4438"]),heavy:()=>Sa("#4a4436",["#332f25","#5c5340","#211f18","#6b6250"])},us={cloth:new _t({color:3816755,roughness:.9,metalness:.05}),clothDark:new _t({color:2369055,roughness:.9}),vest:new _t({color:2895398,roughness:.85}),skin:new _t({color:13081202,roughness:.8}),helmet:new _t({color:2237471,roughness:.5,metalness:.3}),boot:new _t({color:1579034,roughness:.9}),gun:new _t({color:3356219,roughness:.55,metalness:.4}),visor:new _t({color:1713971,roughness:.25,metalness:.6}),eyeGlow:new _t({color:1119772,roughness:.35,metalness:.4})},ic={assault:{label:"ASKER",hp:1,speed:1,dmg:1,scale:1,acc:0,tex:"assault",tint:4936507},rusher:{label:"AKINCI",hp:.6,speed:1.55,dmg:.8,scale:.93,acc:-.06,tex:"rusher",tint:7223856},heavy:{label:"AĞIR",hp:2.1,speed:.72,dmg:1.45,scale:1.13,acc:.04,tex:"heavy",tint:6050624}};function Ye(i,t,e,n){return new it(new ne(i,t,e),n)}function Zg(i,t){const e=new Ft(i&&i.tint!=null?i.tint:4936507),n=new _t({color:e.clone().multiplyScalar(.9),roughness:.92}),s=new _t({color:e.clone().multiplyScalar(.55),roughness:.9}),r=new _t({color:e.clone().multiplyScalar(.42),roughness:.82,metalness:.06}),a=new Gt,o=new Gt;o.position.y=.92,a.add(o),o.add(Ye(.36,.26,.22,s));const l=new Gt;l.position.y=.24,o.add(l);const c=Ye(.4,.48,.26,r);c.position.y=.23,l.add(c);const u=Ye(.32,.3,.07,s);u.position.set(0,.28,.15),l.add(u);const h=Ye(.14,.12,.24,r);h.position.set(-.24,.42,0),l.add(h);const d=Ye(.14,.12,.24,r);d.position.set(.24,.42,0),l.add(d);const f=new Gt;f.position.y=.48,l.add(f);const g=Ye(.2,.22,.2,us.skin);g.position.y=.12,f.add(g);const _=new it(new He(.145,12,9,0,Math.PI*2,0,Math.PI*.62),us.helmet);_.position.y=.2,f.add(_);const m=Ye(.17,.06,.04,us.visor);m.position.set(0,.12,.1),f.add(m);function p(I){const y=new Gt;y.position.set(I*.24,.4,0);const M=Ye(.095,.27,.095,n);M.position.y=-.13,y.add(M);const P=new Gt;P.position.y=-.27,y.add(P);const k=Ye(.08,.24,.08,n);k.position.y=-.12,P.add(k);const O=Ye(.08,.085,.095,us.skin);return O.position.y=-.24,P.add(O),l.add(y),{shoulder:y,elbow:P}}const w=p(-1),x=p(1),T=sh(t);T.rotation.y=Math.PI,T.position.set(.04,.3,.32),l.add(T),x.shoulder.rotation.set(-1.18,0,-.12),x.elbow.rotation.x=.55,w.shoulder.rotation.set(-1.05,0,.4),w.elbow.rotation.x=.9;function F(I){const y=new Gt;y.position.set(I*.12,-.11,0);const M=Ye(.13,.34,.14,s);M.position.y=-.17,y.add(M);const P=new Gt;P.position.y=-.34,y.add(P);const k=Ye(.1,.3,.11,s);k.position.y=-.15,P.add(k);const O=Ye(.12,.1,.22,us.boot);return O.position.set(0,-.32,.06),P.add(O),o.add(y),{hip:y,knee:P}}const A=F(-1),R=F(1);return a.traverse(I=>{I.isMesh&&(I.castShadow=!0,I.receiveShadow=!0,I.frustumCulled=!1)}),{root:a,torso:l,neck:f,head:g,armL:w,armR:x,legL:A,legR:R,hips:o,rifleFlashAnchor:T}}const zi={thigh:"x",calf:"x",arm:"x"},Ve=new _t({color:3027254,roughness:.55,metalness:.4}),ya=new _t({color:5913118,roughness:.75,metalness:.06}),rr=["rifle","ak","smg","shotgun","sniper"];function fn(i,t,e,n,s,r,a){const o=new it(new ne(i,t,e),n);return o.position.set(s,r,a),o}function Qn(i,t,e,n,s,r){const a=new it(new Ae(i,i,t,8),e);return a.rotation.x=Math.PI/2,a.position.set(n,s,r),a}function sh(i){const t=new Gt;if(i==="ak"){t.add(fn(.05,.08,.44,Ve,0,0,0)),t.add(Qn(.013,.4,Ve,0,.01,-.36)),t.add(fn(.045,.05,.22,ya,0,-.005,.28));const e=fn(.04,.17,.07,Ve,0,-.13,-.05);e.rotation.x=-.25,t.add(e)}else i==="smg"?(t.add(fn(.045,.07,.3,Ve,0,0,.02)),t.add(Qn(.011,.12,Ve,0,.01,-.22)),t.add(fn(.03,.16,.05,Ve,0,-.1,-.06))):i==="shotgun"?(t.add(fn(.05,.07,.4,Ve,0,0,.04)),t.add(Qn(.017,.5,Ve,0,.02,-.38)),t.add(Qn(.018,.44,Ve,0,-.015,-.35)),t.add(fn(.045,.05,.2,ya,0,-.005,.3))):i==="sniper"?(t.add(fn(.045,.06,.5,ya,0,0,.08)),t.add(Qn(.014,.62,Ve,0,.02,-.5)),t.add(Qn(.03,.2,Ve,0,.08,-.05))):(t.add(fn(.05,.09,.62,Ve,0,0,0)),t.add(Qn(.014,.34,Ve,0,0,-.44)),t.add(fn(.04,.18,.06,Ve,0,-.13,-.04)));return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.frustumCulled=!1)}),t}const pe={IDLE:"idle",HUNT:"hunt",ALERT:"alert",COMBAT:"combat",SEARCH:"search",DEAD:"dead"};let jg=0;class Qg{constructor(t,e,n,s,r,a=1,o={}){this.id=jg++,this.scene=t,this.world=e,this.effects=n,this.audio=s,this.difficulty=a,this.typeKey=o.type||"assault";const l=ic[this.typeKey]||ic.assault;this.typeCfg=l,this.weaponKind=rr[Math.floor(Math.random()*rr.length)];const c=Zg(l,this.weaponKind);this.parts=c,this.model=c.root,this.model.scale.setScalar(l.scale||1),this.headRef=c.head,this.chestRef=c.torso,this.rifleFlashAnchor=c.rifleFlashAnchor,this.useModel=!1,this.model.position.copy(r),t.add(this.model),this.pos=r.clone(),this.yaw=Math.random()*Math.PI*2,this.radius=.35,this.height=1.8,this.speed=(2.3+Math.random()*.6+a*.06)*l.speed,this.maxHp=(70+a*14)*l.hp,this.hp=this.maxHp,this.dmgMult=l.dmg,this.guardPos=(o.guardPos||r).clone(),this.patrolRadius=o.patrolRadius!=null?o.patrolRadius:7,this.patrolTarget=this._pickPatrolTarget(),this.patrolWait=0,this.lookPhase=Math.random()*Math.PI*2,this.state=pe.IDLE,this.stuckT=0,this.detourT=0,this.detourDir=1,this.alertTimer=0,this.fireCooldown=0,this.burstLeft=0,this.burstPause=0,this.reposTimer=1+Math.random()*2,this.strafeDir=Math.random()<.5?-1:1,this.lastKnownPlayerPos=null,this.walkPhase=Math.random()*10,this.dead=!1,this.deathT=0,this.removeAfter=null,this.hitFlashT=0,this.accuracy=.55+Math.min(.3,a*.04)+l.acc,this.combatRange=34,this.giveUpSearchT=0,this.onPlayerHit=null,this.onDeath=null,this.onAlert=null,this.onThrowGrenade=null,this.canThrow=this.typeKey!=="rusher",this.grenadeCooldown=6+Math.random()*8}_buildFromModel(t,e){const n=Jg(t.root),s=new Gt,r=new Gt;r.rotation.y=t.forwardOffset,r.scale.setScalar(e.scale),r.add(n),s.add(r),this.model=s,this.inner=r;const a=(nc[e.tex]||nc.assault)(),o=new _t({map:a,color:16777215,roughness:.86,metalness:.08});n.traverse(m=>{(m.isMesh||m.isSkinnedMesh)&&(m.material=o,m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1)});const l={};let c=null,u=null,h=null,d=null,f=null;n.traverse(m=>{if(!m.isBone)return;const p=m.name.toLowerCase();p.includes("l_thigh")?l.lThigh=m:p.includes("r_thigh")?l.rThigh=m:p.includes("l_calf")?l.lCalf=m:p.includes("r_calf")?l.rCalf=m:p.includes("l_upperarm")?l.lArm=m:p.includes("r_upperarm")&&(l.rArm=m),p.includes("head")?h=m:p.includes("spine2")||p.includes("spine1")?(d=d||m,f=m):p.includes("spine")&&(f=f||m),p.includes("neck"),p.includes("weapon_bone")&&!p.includes("clip")&&!p.includes("hand")&&(c=m),p.includes("r_hand")&&(u=m)}),this.bones=l,this.rest={};for(const m of Object.keys(l))this.rest[m]=l[m].rotation.clone();this.spineBone=f||d,this.spineRest=this.spineBone?this.spineBone.rotation.clone():null,this.headRef=h||d||s,this.chestRef=d||f||s,this.weaponKind=rr[Math.floor(Math.random()*rr.length)];const g=c||u,_=sh(this.weaponKind);if(g){const m=1/(t.root.scale.x*e.scale||1);_.scale.setScalar(m),g.add(_),this.rifleFlashAnchor=_}else _.position.set(.25,1.3,-.3),s.add(_),this.rifleFlashAnchor=_}_pickPatrolTarget(){const t=Math.random()*Math.PI*2,e=this.patrolRadius*(.35+Math.random()*.65);return this.guardPos.clone().add(new E(Math.cos(t)*e,0,Math.sin(t)*e))}headWorldPos(t){return this.headRef.getWorldPosition(t)}chestWorldPos(t){return this.chestRef.getWorldPosition(t).add(new E(0,.05,0))}takeDamage(t,e,n,s){if(this.dead)return;this.hp-=t,this.hitFlashT=.15;const r=s.clone().multiplyScalar(-1);this.effects.spawnImpact(n,r,"blood"),this.hp<=0?this.die(s):(this.state=pe.COMBAT,this.reactStagger=.18)}die(t){this.dead=!0,this.state=pe.DEAD,this.deathT=0,this.fallAxis=new E(-t.z,0,t.x).normalize(),this.fallForward=Math.random()<.5,this.audio.killConfirm(),this.onDeath&&this.onDeath(this),this.removeAfter=6}canSeePlayer(t){const e=new E;if(this.headRef.getWorldPosition(e),e.distanceTo(t)>this.combatRange+6)return!1;const s=t.clone().sub(e).normalize(),a=new E(Math.sin(this.yaw),0,Math.cos(this.yaw)).angleTo(new E(s.x,0,s.z)),o=this.state===pe.IDLE?Math.PI*.35:Math.PI*.8;return a>o&&this.state!==pe.COMBAT?!1:!Ag(e,t,this.world.colliders,.2,2.2)}alert(t){this.dead||(this.state===pe.IDLE||this.state===pe.HUNT)&&(this.state=pe.ALERT,this.lastKnownPlayerPos=t.clone(),this.alertTimer=2.5)}update(t,e,n,s){if(this.dead){this.updateDeath(t);return}const r=this.canSeePlayer(e),a=this.pos.distanceTo(e);r&&a<this.combatRange?(this.state!==pe.COMBAT&&this.onAlert&&this.onAlert(this.pos),this.state=pe.COMBAT,this.lastKnownPlayerPos=e.clone(),this.giveUpSearchT=3.5):this.state===pe.COMBAT?(this.state=pe.SEARCH,this.giveUpSearchT=3,this.lastKnownPlayerPos=e.clone()):this.state===pe.SEARCH?(this.giveUpSearchT-=t,this.giveUpSearchT<=0&&(this.state=pe.IDLE)):this.state===pe.ALERT&&(this.alertTimer-=t,this.alertTimer<=0&&(this.state=pe.IDLE));let o=null,l=null,c=this.speed;if(this.state===pe.COMBAT){const h=e.clone().sub(this.pos);h.y=0;const d=h.length();if(l=Math.atan2(h.x,h.z),this.reposTimer-=t,this.reposTimer<=0&&(this.strafeDir=Math.random()<.5?-1:1,this.reposTimer=1.2+Math.random()*1.8),d>this.combatRange*.7)o=e.clone(),c=this.speed*1.15;else if(d<8){const f=this.pos.clone().add(h.clone().normalize().multiplyScalar(-3)),g=new E(-h.z,0,h.x).normalize().multiplyScalar(this.strafeDir*3);o=f.add(g)}else{const f=new E(-h.z,0,h.x).normalize().multiplyScalar(this.strafeDir*4);o=this.pos.clone().add(f)}if(this.grenadeCooldown-=t,this.canThrow&&this.grenadeCooldown<=0&&d>9&&d<30&&this.onThrowGrenade){const f=this.pos.clone().add(new E(0,1.45,0));this.onThrowGrenade(f,e.clone()),this.grenadeCooldown=11+Math.random()*9}this.fireCooldown-=t,this.burstLeft>0?(this.burstPause-=t,this.burstPause<=0&&this.fireCooldown<=0&&(this.shootAt(e,n),this.burstLeft--,this.fireCooldown=.11+Math.random()*.04)):this.fireCooldown<=0&&(this.burstLeft=2+Math.floor(Math.random()*3),this.burstPause=0,this.fireCooldown=.9+Math.random()*1.1-this.difficulty*.05)}else this.state===pe.SEARCH&&this.lastKnownPlayerPos?(o=this.lastKnownPlayerPos,l=Math.atan2(o.x-this.pos.x,o.z-this.pos.z),c=this.speed,this.pos.distanceTo(o)<1.5&&(this.state=pe.IDLE)):this.state===pe.ALERT&&this.lastKnownPlayerPos?(o=this.lastKnownPlayerPos,c=this.speed*.85,l=Math.atan2(o.x-this.pos.x,o.z-this.pos.z),this.pos.distanceTo(o)<1.5&&(this.state=pe.IDLE,this.alertTimer=0)):(this.patrolWait-=t,this.pos.distanceTo(this.patrolTarget)<1.2&&this.patrolWait<=0&&(this.patrolTarget=this._pickPatrolTarget(),this.patrolWait=1.5+Math.random()*3),c=this.speed*.34,this.patrolWait>0&&this.pos.distanceTo(this.patrolTarget)<1.2?(o=null,this.lookPhase+=t*.6,l=this.lookPhase):(o=this.patrolTarget,l=Math.atan2(o.x-this.pos.x,o.z-this.pos.z)));let u=!1;if(o){const h=o.clone().sub(this.pos);if(h.y=0,h.length()>.4){if(h.normalize(),this.detourT>0){this.detourT-=t;const w=new E(-h.z,0,h.x).multiplyScalar(this.detourDir);h.addScaledVector(w,1.2).normalize()}for(const w of s){if(w===this||w.dead)continue;const x=this.pos.clone().sub(w.pos);x.y=0;const T=x.length();T<1.4&&T>.01&&h.add(x.normalize().multiplyScalar((1.4-T)*1.5))}const f=new E(this.pos.x-e.x,0,this.pos.z-e.z),g=f.length();g<1.6&&g>.01&&h.add(f.normalize().multiplyScalar((1.6-g)*2.4)),h.normalize();const _=this.pos.x,m=this.pos.z;this.pos.addScaledVector(h,c*t),vr(this.pos,this.radius,this.height,this.world.colliders),Math.hypot(this.pos.x-_,this.pos.z-m)<c*t*.35?(this.stuckT+=t,this.stuckT>.5&&this.detourT<=0&&(this.detourT=.6+Math.random()*.4,this.detourDir=Math.random()<.5?-1:1)):this.stuckT=0,l===null&&(l=Math.atan2(h.x,h.z)),u=!0}else vr(this.pos,this.radius,this.height,this.world.colliders)}else vr(this.pos,this.radius,this.height,this.world.colliders);this.pos.y=0;{const h=this.pos.x-e.x,d=this.pos.z-e.z,f=Math.hypot(h,d),g=1.5;f<g&&f>.001&&(this.pos.x=e.x+h/f*g,this.pos.z=e.z+d/f*g)}if(l!==null){let h=l-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;this.yaw+=h*Math.min(1,t*8)}this.model.position.copy(this.pos),this.model.rotation.y=this.yaw,u&&(this.walkPhase+=t*c*3.2),this.useModel?this._animateModel(u):this._animateBox(u),this.hitFlashT>0&&(this.hitFlashT-=t)}_animateBox(t){const e=Math.sin(this.walkPhase)*(t?.55:0);this.parts.legL.hip.rotation.x=e,this.parts.legR.hip.rotation.x=-e,this.parts.legL.knee.rotation.x=Math.max(0,-e*.9),this.parts.legR.knee.rotation.x=Math.max(0,e*.9),this.parts.hips.position.y=.92+Math.abs(Math.cos(this.walkPhase))*(t?.02:0)}_animateModel(t){const e=this.bones,n=this.rest,s=t?1:0,r=Math.sin(this.walkPhase)*.5*s,a=Math.sin(this.walkPhase+Math.PI)*.5*s,o=(l,c,u,h)=>{l&&(l.rotation[u]=c[u]+h)};o(e.lThigh,n.lThigh,zi.thigh,r),o(e.rThigh,n.rThigh,zi.thigh,a),o(e.lCalf,n.lCalf,zi.calf,Math.max(0,-r)*.9),o(e.rCalf,n.rCalf,zi.calf,Math.max(0,-a)*.9),o(e.lArm,n.lArm,zi.arm,a*.6),o(e.rArm,n.rArm,zi.arm,r*.6),this.inner&&(this.inner.position.y=Math.abs(Math.cos(this.walkPhase))*.05*s)}shootAt(t,e){const n=new E;this.rifleFlashAnchor.getWorldPosition(n);const s=t.clone().add(new E(0,e?.1:.35,0)),r=s.clone().sub(n).normalize(),a=n.distanceTo(s),l=.02+(1-Math.max(.08,this.accuracy-a*.004))*.09;r.x+=(Math.random()-.5)*l,r.y+=(Math.random()-.5)*l*.6,r.z+=(Math.random()-.5)*l,r.normalize(),this.audio.gunshot("enemy",n),this.effects.spawnTracer(n,r,40);const u=t.clone().sub(n).dot(r);if(u>0&&n.clone().addScaledVector(r,u).distanceTo(t.clone().add(new E(0,.9,0)))<.5&&u<this.combatRange+10){const f=(6+Math.random()*6+this.difficulty*.8)*this.dmgMult;this.onPlayerHit&&this.onPlayerHit(f,n);return}if(Math.random()<.4){const h=t.clone().add(new E((Math.random()-.5)*2,Math.random()*1.5,(Math.random()-.5)*2));this.effects.spawnImpact(h,new E(0,1,0),"dust")}}updateDeath(t){this.deathT+=t;const e=Math.min(1,this.deathT/.5),n=e*(Math.PI/2)*(this.fallForward?1:-1);if(this.model.rotation.x=this.fallForward?n:0,this.model.rotation.z=this.fallForward?0:n,this.model.position.y=this.pos.y-e*.05,this.removeAfter!==null&&(this.removeAfter-=t,this.removeAfter<=1)){const s=Math.max(0,this.removeAfter);this.model.traverse(r=>{(r.isMesh||r.isSkinnedMesh)&&(r.material.transparent=!0,r.material.opacity=s)})}}get expired(){return this.dead&&this.removeAfter!==null&&this.removeAfter<=0}destroy(){this.scene.remove(this.model)}}const yt=i=>document.getElementById(i),t_=yt("app"),Oo=yt("hud"),e_=yt("crosshair"),ar=yt("hitmarker"),sc=yt("health-bar"),n_=yt("health-num"),rc=yt("ammo-mag"),i_=yt("ammo-reserve"),s_=yt("weapon-name"),r_=yt("fire-mode"),a_=yt("grenade-count"),o_=yt("reload-hint"),ac=yt("kills-num"),l_=yt("score-num"),c_=yt("enemies-num"),ho=yt("minimap"),or=yt("killfeed"),rh=yt("compass-strip"),h_=yt("compass"),Ta=yt("announce"),u_=yt("announce-main"),d_=yt("announce-sub"),Ea=yt("hint");yt("damage-vignette");const f_=yt("lowhp-vignette"),lr=yt("screen-flash"),p_=yt("scope-overlay"),m_=yt("ads-reticle"),g_=yt("loading"),As=yt("menu-main"),ah=yt("menu-controls"),Fr=yt("menu-settings"),ns=yt("menu-pause"),bs=yt("menu-death"),wa=yt("set-sens"),__=yt("set-sens-val"),Aa=yt("set-fov"),v_=yt("set-fov-val"),ba=yt("set-vol"),x_=yt("set-vol-val"),oc=yt("set-quality"),M_=yt("ds-score"),S_=yt("ds-kills"),y_=yt("ds-hs"),T_=yt("ds-acc"),E_=yt("death-wave-sub"),Me=new k0({antialias:!0,powerPreference:"high-performance"});Me.setPixelRatio(Math.min(devicePixelRatio,2));Me.setSize(innerWidth,innerHeight);Me.shadowMap.enabled=!0;Me.shadowMap.type=uc;Me.toneMapping=po;Me.toneMappingExposure=1.02;Me.outputColorSpace=Ke;t_.appendChild(Me.domElement);const Wn=Me.domElement,Ue=new qc,Je=new $e(80,innerWidth/innerHeight,.05,500);let Es="high";const be=new bg,li=new Rg(Ue,be);let Xn=new wg(Ue,Es);const oh=new ao(Me);Ue.environment=oh.fromScene(new xg,.04).texture;Ue.environmentIntensity=.75;oh.dispose();const Kt=new zg(Je,be,li),zt=new $g(Je,Xn,be);Ue.add(Je);const pi=new pg(Me),w_=new mg(Ue,Je);pi.addPass(w_);const vs=new Ji(new at(innerWidth,innerHeight),.28,.5,.9);pi.addPass(vs);const A_={uniforms:{tDiffuse:{value:null},amount:{value:.3}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      float vig = 1.0 - smoothstep(0.35, 0.9, length(d)) * amount;
      c.rgb *= vig;
      gl_FragColor = c;
    }`},b_=new Fo(A_);pi.addPass(b_);const lh=new Fo(Cg),Rr=()=>{const i=Me.getPixelRatio();lh.material.uniforms.resolution.value.set(1/(innerWidth*i),1/(innerHeight*i))};Rr();pi.addPass(lh);pi.addPass(new vg);function ch(){Es==="low"?(Me.setPixelRatio(1),vs.enabled=!1,Me.shadowMap.enabled=!1):Es==="medium"?(Me.setPixelRatio(Math.min(devicePixelRatio,1.5)),vs.enabled=!0,Me.shadowMap.enabled=!0):(Me.setPixelRatio(Math.min(devicePixelRatio,2)),vs.enabled=!0,Me.shadowMap.enabled=!0),typeof Rr=="function"&&Rr()}ch();addEventListener("resize",()=>{Je.aspect=innerWidth/innerHeight,Je.updateProjectionMatrix(),Me.setSize(innerWidth,innerHeight),pi.setSize(innerWidth,innerHeight),vs.setSize(innerWidth,innerHeight),Rr()});const bt={state:"menu",score:0,kills:0,headshots:0,shotsFired:0,shotsHit:0,enemyTotal:0,grenades:3,maxGrenades:3,grenadeCooldown:0,settingsReturnTo:"main"};let ze=[],ci=[],ai=[],uo=!1;const Bi={forward:0,right:0,jump:!1,sprint:!1,crouch:!1},En={};function Vn(i){i.classList.remove("hidden")}function Be(i){i.classList.add("hidden")}function hh(i,t,e=3e3){u_.textContent=i,d_.textContent=t||"",Ta.classList.remove("show"),Ta.offsetWidth,Ta.classList.add("show")}function xs(i,t=1400){Ea.textContent=i,Ea.classList.add("show"),clearTimeout(xs._t),xs._t=setTimeout(()=>Ea.classList.remove("show"),t)}function uh(i,t){const e=document.createElement("div");for(e.className="kf-entry"+(t?" hs":""),e.innerHTML=`<span class="who">SEN</span> ${t?"➤ headshot ➤":"➤"} ${i}`,or.appendChild(e),setTimeout(()=>e.remove(),3600);or.children.length>5;)or.removeChild(or.firstChild)}const lc=[];function R_(i){const t=new at(i.x-zt.pos.x,i.z-zt.pos.z);if(t.lengthSq()<1e-4)return;const n=Math.atan2(t.x,t.y)-zt.yaw;let s=lc.find(r=>!r.busy);if(!s){const r=document.createElement("div");r.className="dmg-dir",Oo.appendChild(r),s={div:r,busy:!1},lc.push(s)}s.busy=!0,s.div.style.transform=`rotate(${n}rad)`,s.div.style.opacity="1",s.div.style.transition="none",requestAnimationFrame(()=>{s.div.style.transition="opacity 0.9s ease",s.div.style.opacity="0"}),clearTimeout(s._t),s._t=setTimeout(()=>{s.busy=!1},950)}function cc(i,t,e,n){const s=new E().subVectors(i,e),r=2*t.dot(s),a=s.dot(s)-n*n,o=r*r-4*a;if(o<0)return null;const l=(-r-Math.sqrt(o))/2;return l>0?l:null}function dh(){const i=Kt.current,t=i.def;s_.textContent=t.name,r_.textContent=t.modeLabel,rc.textContent=i.mag,i_.textContent=" / "+i.reserve,rc.classList.toggle("low",i.mag<=Math.ceil(t.magSize*.25)),o_.style.display=i.mag===0&&i.reserve>0&&!Kt.reloading?"block":"none"}Kt.onAmmoChange=dh;Kt.onRecoil=(i,t)=>{zt.pitch=Math.max(-Math.PI/2+.02,Math.min(Math.PI/2-.02,zt.pitch+i)),zt.yaw+=t};function C_(){const i=Math.max(0,zt.hp/zt.maxHp)*100;sc.style.width=i+"%",sc.classList.toggle("low",i<30),n_.textContent=Math.ceil(zt.hp),f_.style.opacity=i<25?.4+.3*Math.abs(Math.sin(performance.now()/300)):0}function Or(){const i=ze.filter(t=>!t.dead).length;l_.textContent=bt.score,c_.textContent=i,ac&&(ac.textContent=bt.kills)}function fh(){a_.textContent=`✚ EL BOMBASI ×${bt.grenades} [G]`}const P_=["K","KD","D","GD","G","GB","B","KB"],ph=4;(function(){for(let t=-60;t<=420;t+=15){const e=document.createElement("div"),n=t%45===0;if(e.className="tick"+(n?" major":""),e.style.left=(t+60)*ph+"px",n){const s=(t%360+360)%360/45;e.textContent=P_[s]}else e.textContent="·";rh.appendChild(e)}})();function L_(){let i=Pu.radToDeg(zt.yaw)%360;i<0&&(i+=360);const t=h_.clientWidth||320;rh.style.transform=`translateX(${t/2-(i+60)*ph}px)`}const ce=ho.getContext("2d"),cr=55;function D_(){const i=ho.width,t=ho.height;ce.clearRect(0,0,i,t),ce.fillStyle="rgba(6,10,14,0.4)",ce.fillRect(0,0,i,t);const e=i/2/cr;ce.save(),ce.translate(i/2,t/2),ce.fillStyle="rgba(140,150,160,0.28)";for(const n of Xn.colliders){const s=(n.min.x+n.max.x)/2-zt.pos.x,r=(n.min.z+n.max.z)/2-zt.pos.z;if(Math.abs(s)>cr+10||Math.abs(r)>cr+10)continue;const a=(n.max.x-n.min.x)*e,o=(n.max.z-n.min.z)*e;ce.fillRect(s*e-a/2,r*e-o/2,a,o)}for(const n of ze){if(n.dead)continue;const s=n.pos.x-zt.pos.x,r=n.pos.z-zt.pos.z;Math.hypot(s,r)>cr||(ce.fillStyle=n.state==="combat"?"#ff4b3e":"#ffb340",ce.beginPath(),ce.arc(s*e,r*e,3,0,Math.PI*2),ce.fill())}ce.restore(),ce.save(),ce.translate(i/2,t/2),ce.rotate(zt.yaw),ce.fillStyle="#ffffff",ce.beginPath(),ce.moveTo(0,-7),ce.lineTo(5,6),ce.lineTo(-5,6),ce.closePath(),ce.fill(),ce.restore()}function I_(i){const t=new cg;for(const e of i){bt.shotsFired++;const n=e.def;let s=n.range,r=null,a=null,o=!1,l=null,c=null,u=null;for(const f of ze){if(f.dead)continue;const g=new E;f.headWorldPos(g);const _=new E;f.chestWorldPos(_);const m=cc(e.origin,e.dir,g,.16);m!==null&&m<s&&(s=m,r="enemy",a=f,o=!0,l=e.origin.clone().addScaledVector(e.dir,m));const p=cc(e.origin,e.dir,_,.32);p!==null&&p<s&&(s=p,r="enemy",a=f,o=!1,l=e.origin.clone().addScaledVector(e.dir,p))}t.set(e.origin,e.dir),t.far=n.range;const h=t.intersectObjects(Xn.raycastMeshes,!1);h.length&&h[0].distance<s&&(s=h[0].distance,r=h[0].object.userData.barrel?"barrel":"env",l=h[0].point,c=h[0].face?h[0].face.normal.clone().transformDirection(h[0].object.matrixWorld):e.dir.clone().negate(),u=h[0].object);const d=Je.localToWorld(Kt.muzzleWorldLocal().clone());if(li.spawnTracer(d,e.dir,l?s:n.range*.6),r==="enemy"){bt.shotsHit++;const f=n.damage*(o?n.headshotMult:1),g=!a.dead;a.takeDamage(f,o,l,e.dir),be.hitmarker(o),ar.classList.remove("show","kill"),ar.offsetWidth,ar.classList.add("show"),a.dead&&g&&(ar.classList.add("kill"),bt.kills++,o&&bt.headshots++,bt.score+=o?150:100,uh("DÜŞMAN",o),Or())}else if(r==="barrel"){const f=u.userData.barrel;U_(f,n.damage),li.spawnImpact(l,c,"metal")}else if(r==="env"){const f=u&&u.geometry&&u.geometry.type==="PlaneGeometry"?"dust":"metal";li.spawnImpact(l,c,f)}}}function U_(i,t){i.alive&&(i.hp-=t,i.hp<=0&&mh(i))}function mh(i){i.alive&&(Xn.removeBarrel(i),gh(i.pos,7,90),N_())}function N_(){lr.style.transition="none",lr.style.opacity="0.85",requestAnimationFrame(()=>{lr.style.transition="opacity 0.4s ease",lr.style.opacity="0"})}function gh(i,t,e){li.spawnExplosion(i);const n=i.distanceTo(zt.pos.clone().add(new E(0,.9,0)));if(n<t){const s=e*(1-n/t);zt.takeDamage(s,i)}for(const s of ze){if(s.dead)continue;const r=i.distanceTo(s.pos.clone().add(new E(0,.9,0)));if(r<t){const a=e*(1-r/t),o=!s.dead;s.takeDamage(a,!1,s.pos.clone().add(new E(0,.9,0)),i.clone().sub(s.pos).normalize()),s.dead&&o&&(bt.kills++,bt.score+=100,uh("DÜŞMAN (patlama)",!1),Or())}}for(const s of Xn.barrels){if(!s.alive)continue;const r=i.distanceTo(s.pos);r<t*1.1&&r>.05&&setTimeout(()=>mh(s),90+Math.random()*120)}}function F_(){if(bt.grenades<=0||bt.grenadeCooldown>0||Kt.reloading||Kt.switching>0)return;bt.grenades--,bt.grenadeCooldown=.6,fh(),be.grenadePin(),Kt.playThrow();const i=new E;Je.getWorldDirection(i);const t=new E;Je.getWorldPosition(t),t.addScaledVector(i,.4).add(new E(0,-.1,0));const e=i.clone().multiplyScalar(16).add(new E(0,4.2,0)),n=new E((Math.random()-.5)*16,(Math.random()-.5)*12,8+Math.random()*6);ci.push({pos:t,vel:e,spin:n,fuse:1.7,mesh:_h(t)})}function O_(i,t){be.grenadePin();const e=new E(t.x-i.x,0,t.z-i.z),n=e.length(),s=n>.001?e.clone().multiplyScalar(1/n):new E(0,0,1),r=Math.min(19,8+n*.55),a=s.multiplyScalar(r).add(new E(0,4.6+n*.08,0)),o=new E((Math.random()-.5)*14,(Math.random()-.5)*10,7+Math.random()*5);ci.push({pos:i.clone(),vel:a,spin:o,fuse:1.9,mesh:_h(i)})}function _h(i){const t=new Gt,e=new it(new He(.072,12,10),new _t({color:3292971,roughness:.7,metalness:.25}));e.scale.y=1.18;const n=new _t({color:1975834,roughness:.85});for(const o of[.024,-.024]){const l=new it(new $i(.07,.007,6,14),n);l.rotation.x=Math.PI/2,l.position.y=o,t.add(l)}const s=new it(new $i(.072,.007,6,14),n);t.add(s);const r=new it(new Ae(.03,.036,.045,8),new _t({color:6250326,roughness:.5,metalness:.6}));r.position.y=.088;const a=new it(new ne(.016,.085,.03),new _t({color:9079424,roughness:.4,metalness:.7}));return a.position.set(.036,.07,0),t.add(e,r,a),t.position.copy(i),t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),Ue.add(t),t}function z_(i){bt.grenadeCooldown=Math.max(0,bt.grenadeCooldown-i);for(let t=ci.length-1;t>=0;t--){const e=ci[t];e.vel.y-=9.8*i,e.pos.addScaledVector(e.vel,i),e.pos.y<.08&&(e.pos.y=.08,e.vel.y<-1?(e.vel.y*=-.45,e.vel.x*=.7,e.vel.z*=.7,be.grenadeBounce(e.pos)):e.vel.y=0),nh(e.pos,.08,.16,Xn.colliders,e.vel),e.mesh.position.copy(e.pos);const n=e.pos.y<.12?.25:1;e.mesh.rotation.x+=e.spin.x*i*n,e.mesh.rotation.y+=e.spin.y*i*n,e.mesh.rotation.z+=e.spin.z*i*n,e.fuse-=i,e.fuse<=0&&(Ue.remove(e.mesh),gh(e.pos.clone(),6.5,130),ci.splice(t,1))}}const B_=[{x:-46,z:-34,type:"assault",r:9},{x:44,z:-40,type:"heavy",r:7},{x:-40,z:42,type:"assault",r:9},{x:46,z:48,type:"heavy",r:7},{x:30,z:-20,type:"rusher",r:10},{x:-20,z:24,type:"rusher",r:10},{x:0,z:-34,type:"assault",r:8},{x:12,z:30,type:"rusher",r:9},{x:-34,z:8,type:"assault",r:8},{x:48,z:4,type:"heavy",r:6},{x:-14,z:-14,type:"rusher",r:11},{x:18,z:12,type:"assault",r:9}];function k_(){for(const t of B_){const e=new E(t.x,0,t.z),n=new Qg(Ue,Xn,li,be,e,1.35,{type:t.type,guardPos:e.clone(),patrolRadius:t.r});n.onPlayerHit=(s,r)=>{zt.takeDamage(s,r),R_(r)},n.onAlert=s=>{for(const r of ze)r.dead||r===n||r.pos.distanceTo(s)<34&&r.alert(s)},n.onDeath=s=>V_(s.pos.clone()),n.onThrowGrenade=(s,r)=>O_(s,r),ze.push(n)}bt.enemyTotal=ze.length,Or()}function H_(){if(uo)return;!ze.some(t=>!t.dead)&&ze.length>0&&(uo=!0,be.waveClear(),hh("SAHA TEMİZLENDİ","Bütün düşmanlar etkisiz hâle getirildi",6e3))}function V_(i){const t=Math.random();let e;if(t<.14)e="health";else if(t<.82)e="ammo";else return;const n=new Gt;if(e==="health"){n.add(new it(new ne(.34,.2,.32),new _t({color:14342874,roughness:.6})));const s=new _t({color:14170939,emissive:5902095,emissiveIntensity:.6,roughness:.5}),r=new it(new ne(.2,.05,.07),s);r.position.y=.11;const a=new it(new ne(.07,.05,.2),s);a.position.y=.11,n.add(r,a)}else{n.add(new it(new ne(.4,.22,.26),new _t({color:4673583,roughness:.75,metalness:.2})));const s=new it(new ne(.42,.06,.28),new _t({color:3620646,roughness:.75}));s.position.y=.13;const r=new it(new ne(.1,.24,.28),new _t({color:13280830,emissive:2761224,emissiveIntensity:.4,roughness:.5,metalness:.4}));n.add(s,r)}n.position.copy(i).add(new E((Math.random()-.5)*.5,.22,(Math.random()-.5)*.5)),n.rotation.y=Math.random()*Math.PI,n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),Ue.add(n),ai.push({mesh:n,light:null,kind:e,pos:n.position.clone(),t:Math.random()*3,ground:!0,ttl:22})}function G_(i){for(let t=ai.length-1;t>=0;t--){const e=ai[t];if(e.t+=i,e.ground){if(e.mesh.rotation.y+=i*1.1,e.mesh.position.y=e.pos.y+Math.sin(e.t*2.2)*.04,e.ttl-=i,e.ttl<=0){Ue.remove(e.mesh),ai.splice(t,1);continue}}else e.mesh.rotation.y+=i*2,e.mesh.position.y=e.pos.y+Math.sin(e.t*2)*.08;if(e.mesh.position.distanceTo(zt.pos.clone().add(new E(0,1,0)))<1.4){if(be.pickup(e.kind),e.kind==="health")zt.heal(e.ground?25:40),xs(e.ground?"SAĞLIK KİTİ ALINDI":"SAĞLIK TOPLANDI");else if(e.ground){const n=Kt.current.def;Kt.addReserve(n.id,Math.ceil(n.magSize*.8)),xs("MERMİ YAĞMALANDI")}else Kt.addReserve("all",0),xs("MÜHİMMAT TOPLANDI");Ue.remove(e.mesh),e.light&&Ue.remove(e.light),ai.splice(t,1)}}}function vh(i,t){En[i]=t,Bi.forward=(En.KeyW?1:0)-(En.KeyS?1:0),Bi.right=(En.KeyD?1:0)-(En.KeyA?1:0),Bi.jump=!!En.Space,Bi.sprint=!!En.ShiftLeft||!!En.ShiftRight,Bi.crouch=!!En.KeyC}addEventListener("keydown",i=>{vh(i.code,!0),bt.state==="playing"&&(i.code==="KeyR"&&Kt.startReload(),i.code==="KeyF"&&Kt.playInspect(),i.code==="KeyG"&&F_(),i.code==="Digit1"&&Kt.switchTo(0),i.code==="Digit2"&&Kt.switchTo(1),i.code==="Digit3"&&Kt.switchTo(2),i.code==="Digit4"&&Kt.switchTo(3),i.code==="Digit5"&&Kt.switchTo(4),i.code==="Digit6"&&Kt.switchTo(5))});addEventListener("keyup",i=>vh(i.code,!1));addEventListener("mousedown",i=>{bt.state!=="playing"||document.pointerLockElement!==Wn||(i.button===0&&Kt.setTrigger(!0),i.button===2&&Kt.setAds(!0))});addEventListener("mouseup",i=>{i.button===0&&Kt.setTrigger(!1),i.button===2&&Kt.setAds(!1)});addEventListener("contextmenu",i=>i.preventDefault());addEventListener("wheel",i=>{bt.state==="playing"&&Kt.cycle(i.deltaY>0?1:-1)});addEventListener("mousemove",i=>{bt.state==="playing"&&document.pointerLockElement===Wn&&zt.applyMouseMovement(i.movementX,i.movementY)});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==Wn&&bt.state==="playing"&&Mh()});yt("btn-start").addEventListener("click",()=>xh());yt("btn-controls").addEventListener("click",()=>{Be(As),Vn(ah)});yt("btn-settings").addEventListener("click",()=>{bt.settingsReturnTo="main",Be(As),Vn(Fr)});yt("btn-resume").addEventListener("click",()=>q_());yt("btn-pause-settings").addEventListener("click",()=>{bt.settingsReturnTo="pause",Be(ns),Vn(Fr)});yt("btn-quit").addEventListener("click",()=>Sh());yt("btn-retry").addEventListener("click",()=>{Be(bs),xh()});yt("btn-death-quit").addEventListener("click",()=>{Be(bs),Sh()});document.querySelectorAll("[data-back]").forEach(i=>{i.addEventListener("click",()=>{Be(ah),Be(Fr),bt.settingsReturnTo==="pause"?Vn(ns):Vn(As)})});wa.addEventListener("input",()=>{zt.sensitivity=parseFloat(wa.value),__.textContent=wa.value});Aa.addEventListener("input",()=>{zt.baseFov=parseFloat(Aa.value),v_.textContent=Aa.value});ba.addEventListener("input",()=>{be.setVolume(parseFloat(ba.value)),x_.textContent=Math.round(ba.value*100)+"%"});oc.addEventListener("change",()=>{Es=oc.value,ch(),W_()});function W_(){Xn.sun.castShadow=Es!=="low"}async function xh(){be.init(),be.resume(),be.startAmbient(),X_(),Be(As),Be(bs),Be(ns),Be(g_),Oo.classList.add("visible"),bt.state="playing",Wn.requestPointerLock(),k_(),hh("SAHAYI TEMİZLE","Bölgeyi ele geçir — düşman devriyeleri yerleşmiş durumda",4e3)}function X_(){ze.forEach(i=>i.destroy()),ze=[],ci.forEach(i=>Ue.remove(i.mesh)),ci=[],ai.forEach(i=>{Ue.remove(i.mesh),Ue.remove(i.light)}),ai=[],uo=!1,bt.score=0,bt.kills=0,bt.headshots=0,bt.shotsFired=0,bt.shotsHit=0,bt.enemyTotal=0,bt.grenades=bt.maxGrenades,zt.hp=zt.maxHp,zt.dead=!1,zt.pos.set(0,0,6),zt.vel.set(0,0,0),zt.yaw=Math.PI,zt.pitch=0,fh(),dh()}function Mh(){bt.state==="playing"&&(bt.state="paused",Vn(ns))}function q_(){Be(ns),Be(Fr),bt.state="playing",Wn.requestPointerLock()}function Sh(){bt.state="menu",Oo.classList.remove("visible"),Be(ns),Be(bs),Vn(As),be.stopAmbient(),document.pointerLockElement===Wn&&document.exitPointerLock()}addEventListener("keydown",i=>{i.code==="Escape"&&bt.state==="playing"&&(document.pointerLockElement===Wn?document.exitPointerLock():Mh())});zt.onDeath=()=>{bt.state="dead",be.gameOver(),document.pointerLockElement===Wn&&document.exitPointerLock(),E_.textContent=`${bt.kills}/${bt.enemyTotal} düşman etkisiz — sahada düştün`,M_.textContent=bt.score,S_.textContent=bt.kills,y_.textContent=bt.headshots,T_.textContent=bt.shotsFired?Math.round(bt.shotsHit/bt.shotsFired*100)+"%":"0%",Vn(bs)};const Y_=new th;function yh(){const i=Math.min(.05,Y_.getDelta());if(bt.state==="playing"){zt.update(i,Bi);const t=zt.consumeLookDelta();Kt.update(i,{lookDeltaX:t.x,lookDeltaY:t.y,speed:zt.speed,grounded:zt.grounded,crouch:zt.crouching,sprint:zt.sprinting});const e=Kt.tryFire(zt.speed>.5);e&&I_(e);for(const s of ze)s.update(i,zt.pos,zt.crouching,ze);ze=ze.filter(s=>!s.expired),z_(i),G_(i),H_(),li.update(i),Je.fov=zt.baseFov*Kt.currentFovMult()*(zt.sprinting?1.07:1),Je.updateProjectionMatrix();const n=!Kt.isScoped()&&Kt.adsAmount>.5;e_.classList.toggle("hidden",Kt.isScoped()||n),p_.classList.toggle("active",Kt.isScoped()),m_.classList.toggle("active",n),be.listener.pos=Je.position,be.listener.fwd=Je.getWorldDirection(new E),C_(),Or(),L_(),D_()}pi.render(),requestAnimationFrame(yh)}requestAnimationFrame(yh);
