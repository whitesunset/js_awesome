/*! modernizr 3.2.0 (Custom Build) -> detect CSS animations | MIT *
 * http://modernizr.com/download/?-cssanimations !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?LA_Modernizr[a[0]]=o:(!LA_Modernizr[a[0]]||LA_Modernizr[a[0]]instanceof Boolean||(LA_Modernizr[a[0]]=new Boolean(LA_Modernizr[a[0]])),LA_Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=_.className,t=LA_Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),LA_Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}LA_Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?_.className.baseVal=n:_.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?f(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=a(S?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var s,i,l,f,u="modernizr",d=a("div"),p=c();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:u+(r+1),d.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),i=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=f,_.offsetHeight):d.parentNode.removeChild(d),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),p("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,s){function f(){d&&(delete P.style,delete P.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var d,c,p,h,v,y=["modernizr","tspan"];!P.style;)d=!0,P.modElem=a(y.shift()),P.style=P.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=P.style[h],i(h,"-")&&(h=l(h)),P.style[h]!==t){if(s||r(o,"undefined"))return f(),"pfx"==n?h:!0;try{P.style[h]=o}catch(g){}if(P.style[h]!=v)return f(),"pfx"==n?h:!0}return f(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},LA_Modernizr=function(){};LA_Modernizr.prototype=w,LA_Modernizr=new LA_Modernizr;var _=n.documentElement,S="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",b=w._config.usePrefixes?x.split(" "):[];w._cssomPrefixes=b;var E=w._config.usePrefixes?x.toLowerCase().split(" "):[];w._domPrefixes=E;var N={elem:a("modernizr")};LA_Modernizr._q.push(function(){delete N.elem});var P={style:N.elem.style};LA_Modernizr._q.unshift(function(){delete P.style}),w.testAllProps=v,w.testAllProps=y,LA_Modernizr.addTest("cssanimations",y("animationName","a",!0)),o(),s(g),delete w.addTest,delete w.addAsyncTest;for(var z=0;z<LA_Modernizr._q.length;z++)LA_Modernizr._q[z]();e.LA_Modernizr=LA_Modernizr}(window,document);

// matrix library
eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [
            function (e) {
                return r[e]
            }
        ];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('9 17={3i:\'0.1.3\',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8\'[\'+7.4.2K(\', \')+\']\'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K(\'\\n\')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!=\'1f\'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)==\'1f\'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)==\'1f\'&&1g(a.W)==\'1f\'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)==\'1f\'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;', 62, 206, '||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ'.split('|'), 0, {}))

// transformation matrix calculation
var _T = {
    rotate: function (deg) {
        var rad = parseFloat(deg) * (Math.PI / 180),
            costheta = Math.cos(rad),
            sintheta = Math.sin(rad);

        var a = costheta,
            b = sintheta,
            c = -sintheta,
            d = costheta;

        return $M([
            [a, c, 0],
            [b, d, 0],
            [0, 0, 1]
        ]);
    },

    skew: function (dx, dy) {
        var radX = parseFloat(dx) * (Math.PI / 180),
            radY = parseFloat(dy) * (Math.PI / 180),
            c = Math.tan(radX),
            b = Math.tan(radY);


        return $M([
            [1, c, 0],
            [b, 1, 0],
            [0, 0, 1]
        ]);
    },

    translate: function (x, y) {
        var e = x || 0,
            f = y || 0;

        return $M([
            [1, 0, e],
            [0, 1, f],
            [0, 0, 1]
        ]);
    },

    scale: function (x, y) {
        var a = x || 0,
            d = y || 0;

        return $M([
            [a, 0, 0],
            [0, d, 0],
            [0, 0, 1]
        ]);
    },

    toString: function (m) {
        var s = 'matrix(',
            r, c;

        for (c = 1; c <= 3; c++) {
            for (r = 1; r <= 2; r++)
                s += m.e(r, c) + ', ';
        }

        s = s.substr(0, s.length - 2) + ')';

        return s;
    },

    fromString: function (s) {
        var t = /^matrix\((\S*), (\S*), (\S*), (\S*), (\S*), (\S*)\)$/g.exec(s),
            a = parseFloat(!t ? 1 : t[1]),
            b = parseFloat(!t ? 0 : t[2]),
            c = parseFloat(!t ? 0 : t[3]),
            d = parseFloat(!t ? 1 : t[4]),
            e = parseFloat(!t ? 0 : t[5]),
            f = parseFloat(!t ? 0 : t[6]);

        return $M([
            [a, c, e],
            [b, d, f],
            [0, 0, 1]
        ]);
    }
};

/**
 * Awesome Panel library
 *
 * Usage example:
 *
 * HTML - Insert unique plugin-wide {ID}
 * --------
 * <div class="a-slide-panel" id="a-slide-panel-{ID}">
 *    <div id="a-slide-panel-spinner" class="a-spinner at-transition"></div>
 * </div>
 *
 * CSS - Insert correct path to spinner image
 * --------
 * .a-slide-panel .a-spinner{
 *    background: url("/wp-content/plugins/{PLUGIN}/admin/img/loading.svg") center center transparent no-repeat;
 * }
 *
 * JS - params Object
 * -------- *
 * id               string      |   panel unique ID
 * item_id          int         |   model item ID
 * model_name       string      |   model name (for example custom post type name)
 * html             string      |   DOM element #id to insert into panel
 * direction        string      |   [right|left|top|bottom] direction for slide
 * width            string      |   panel width in px / %
 * height           string      |   panel height in px / %
 * load_model       callback    |   function to load some data from DB into JS (Backbone etc) model. Must return Deferred object
 * callback_open    callback    |   called after panel initialized
 * callback_close   callback    |   called after panel closed
 *
 */

var AwesomePanel = function (options) {
    'use strict';

    var $ = jQuery; // enable jQuery
    var self = this;

    // Data
    self.options = options;
    self.id = options.id;
    self.item_id = options.item_id; // model item ID passed from page
    self.model_name = options.model_name; // model name passed from page
    self.content_url = options.content_url; // model name passed from page
    self.overlayvisible = true; // store click on overlay to close panel

    // todo: do this calculations and caching once
    var $body = $('body');
    var $win = $(window);
    var $html = $('html');
    var isIE = /msie|trident.*rv\:11\./.test(navigator.userAgent.toLowerCase());
    var isFF = /firefox/.test(navigator.userAgent.toLowerCase());
    var transProp = getVendorPropertyName('transform');
    var translation = _T.translate((self.direction === 'left' ? parseInt(self.width) : -parseInt(self.width)), 0);
    var defTranslationStr = _T.toString(_T.translate(0, 0));
    var htmlMargins = {
        top: parseInt($html.css('marginTop')),
        bottom: parseInt($html.css('marginBottom'))
    }

    // View
    self.panel = $('<div class="a-slide-panel" id="a-slide-panel-' + self.id + '"></div>'); // panel instance
    self.overlay = $('<div></div>').addClass('a-slide-panel-overlay');
    self.spinner = $('<div class="a-slide-panel-spinner a-spinner at-transition"></div>');

    self.parent = options.parent || 'body'; // panel parent element
    self.position = self.parent == 'body' ? 'fixed' : 'absolute';


    self.direction = options.direction || 'left';
    self.animation = options.animation || 'over';
    self.width = options.width || '100%';
    self.height = options.height || '100%';

    // Show spinner animation
    self.animation_start = function () {
        // show spinner animation
        self.spinner.addClass('fade-animation-in');
    };

    // Hide spinner animation
    self.animation_end = function () {
        self.spinner.removeClass('fade-animation-in'); // hide spinner animation
    };

    // Hide panel content
    self.hide_content = function () {
        self.panel.find('.a-slide-panel-content-wrapper').removeClass('fade-animation-in');
    };

    // Show panel content
    self.show_content = function () {
        self.panel.find('.a-slide-panel-content-wrapper').addClass('fade-animation-in');
    };

    // Open Panel
    self.open = function () {
        var $parent = $(self.parent);

        window[self.id + '_panel_openinig'] = true;
        window[self.id + '_overlayvisible'] = true;

        $parent.append(self.overlay);
        $parent.addClass('a-slide-panel-parent');

        //create panel
        window[self.id + '_panel_object'] = self;
        window[self.id + '_panel'] = self.panel;
        $parent.append(self.panel);

        self.panel.css('width', self.width);
        self.panel.css('height', self.height);

        self.panel.addClass('a-slide-to-' + self.direction);
        setTimeout(function () {
            if (self.animation == 'push') {
                var translate = self.direction == 'left' ? '-' + self.width : self.width;
                var style = '<style type="text/css" id="a-slide-panel-styles">\
                            .a-slide-panel-push > *{\
                            -webkit-transform:translateX(' + translate + ');\
                            -moz-transform:translateX(' + translate + ');\
                            -ms-transform:translateX(' + translate + ');\
                            -o-transform:translateX(' + translate + ');\
                            transform:translateX(' + translate + ');\
                            }\
                            </style>';
                $parent.append(style);
            }

            $parent.addClass('a-slide-panel-' + self.animation);
            self.panel.addClass('a-slide-panel-active');
            $(self.overlay).addClass('open');
            $(self.overlay).css('position', self.position);

            if (self.animation == 'push') {
                var scroll_top = $win.scrollTop();
                var scroll_left = $win.scrollLeft();
                if (self.direction == 'left' || self.direction == 'right') {
                    scroll_left = +scroll_left;
                }
                $parent.find('*').each(function (i, el) {
                    if (!$(el).hasClass('a-slide-panel') &&
                        !$(el).hasClass('a-slide-panel-overlay') &&
                        !$(el).parent().is($(self.parent)) &&
                        $(el).closest('.a-slide-panel').length === 0) {
                        shiftFixed(i, el, scroll_top, scroll_left);
                    }
                });
            }

            setTimeout(function () {
                window[self.id + '_panel_openinig'] = false;

                $parent.addClass('at-overflow-hidden');
                if ($(window).height() < $(document).height()) {
                    $parent.addClass('at-overflow-hidden-' + self.direction);
                }
            }, 400);
        }, 14); // dirty hack to wait css class assign
    };

    // Close Panel
    self.close = function () {
        $('.close-panel', $(self.parent)).off('click');
        if (self.animation == 'push') {
            var $fixed = $('.at_fixed_inner_el');
            $fixed.each(function (i, el) {
                unshiftFixed(i, el);
            });
        }
        if (LA_Modernizr.cssanimations) {
            $(self.overlay).remove(); // if IE => just remove overlay
            window[self.id + '_overlayvisible'] = false;
        } else { // else remove after animation ends
            $(self.parent).find(self.overlay)
                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    $(self.overlay).remove();
                }).addClass('remove-overlay');
        }

        self.panel.removeClass('a-slide-panel-active');
        $(self.parent).removeClass('a-slide-panel-' + self.animation);

        $(self.parent).removeClass('at-overflow-hidden');
        $(self.parent).removeClass('at-overflow-hidden-' + self.direction);

        if (typeof self.options.callback_close === 'function') {
            self.options.callback_close(); // close panel callback
        }

        setTimeout(function () {
            if (self.animation == 'push') {
                $('#a-slide-panel-styles', self.parent).remove();
            }
            $(self.parent).removeClass('a-slide-panel-parent');
            if ($(self.html_pool)) {
                $(self.html_pool).append($(self.html)); // return panel content back to hidden div (aka pool)
            }
            self.hide_content();
            $(self.panel).remove();
            delete window[self.id + '_panel'];
        }, 500);
    };

    // Append HTML
    self.appendHTML = function () {
        self.html = self.html || options.html; // HTML to append
        self.html_pool = $(self.html).parent();
        var $html = $(self.html) || self.html; // get panel content as jQuery object
        self.panel.append($html); // append panel content

        self.panel.append(self.spinner); // append spinner
        self.animation_start(); // show loading animation
        self.hide_content(); // hide it temporary (until model is loaded)
    };

    self.showHTML = function () {
        self.animation_end(); // hide loading animation
        self.show_content(); // show panel content
        if (typeof self.options.callback_open === 'function') {
            self.options.callback_open();
        }
    }

    // Bind Actions to buttons
    self.bindActions = function () {
        var $parent = $(self.parent);

        $(self.overlay, $parent).on('click', function () {
            if (window[self.id + '_overlayvisible']) {
                self.close();
            }
        });
        $('.close-panel', $parent).on('click', function () {
            if (window[self.id + '_overlayvisible']) {
                self.close();
            }
        });
    };

    function shiftFixed(i, el, scrollTop, scrollLeft, bh, wh) {
        var $t = $(el);
        var $offsetP;
        var t;
        var nu;
        var offset;
        var oLeft;
        var oTop;
        var coords;
        var newCSS;
        var _b;
        var transf;

        if ($t.css('position') === 'fixed') {

            $t.addClass('at_fixed_inner_el')

            if (isIE) {

                t = $t.css(transProp);

                if (t !== 'none') {
                    $t.attr('ncf-old-matrix', t);
                    t = _T.fromString(t);
                    nu = t.x(translation); // add translation
                    $t.css(transProp, _T.toString(nu)).attr('ncf-transformed', 1);
                } else {
                    $t.css(transProp, _T.toString(translation)/*, transition: trans + 'transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)', transitionDelay: '90ms'*/).attr('ncf-transformed', 1);
                }

            } else {

                $offsetP = $t;

                while ($offsetP = $offsetP.parent()) {
                    transf = $offsetP.css(transProp);
                    if ((transf && transf !== 'none') || $offsetP.is('body')) {
                        break
                    }
                }

                offset = $offsetP.offset();
                oLeft = offset.left;
                oTop = offset.top;

                if (isFF && $t.is(':visible')) {
                    $t.hide().attr('ncf-ff-hidden', 1);
                }

                coords = {
                    left: $t.css('left'),
                    right: $t.css('right'),
                    top: $t.css('top'),
                    bottom: $t.css('bottom'),
                    transition: window.getComputedStyle($t.get(0)).transition
                }

                if (isFF && $t.attr('ncf-ff-hidden')) $t.show();

                newCSS = {};
                _b = parseInt(coords.bottom);
                _b = isNaN(_b) ? 0 : _b;

                if (coords.left !== 'auto') {
                    coords.toChangeHor = 'left';
                    newCSS[coords.toChangeHor] = '-=' + (oLeft - scrollLeft);
                } else if (coords.right !== 'auto') {
                    coords.toChangeHor = 'right';
                    newCSS[coords.toChangeHor] = '-=' + (oLeft - scrollLeft);
                } else {
                    coords.toChangeHor = 'left'
                }

                if (coords.top !== 'auto') {
                    coords.toChangeVert = 'top';
                    newCSS[coords.toChangeVert] = oTop - scrollTop > 0 ? parseInt(coords.top) - (oTop - scrollTop) : parseInt(coords.top) + (scrollTop - oTop);
                } else if (coords.bottom !== 'auto') {
                    coords.toChangeVert = 'bottom';
                    newCSS[coords.toChangeVert] = $body.height() + htmlMargins.top + htmlMargins.bottom + _b - $win.height() - scrollTop + 'px';
                } else {
                    coords.toChangeVert = 'top';
                    newCSS[coords.toChangeVert] = scrollTop;
                }

                newCSS['transitionProperty'] = 'none';
                $t.css(newCSS).attr('ncf-old-pos', JSON.stringify(coords))
                $t.css('tra')
            }
        }
    }

    function unshiftFixed(i, el) {
        var $el = $(el);
        var coords;
        var newCss;
        if (isIE) {
            setTimeout(function () {
                $el.removeClass('at_fixed_inner_el');
            }, 500);
            if ($el.attr('ncf-old-matrix')) {
                $el.css(transProp, $el.attr('ncf-old-matrix')).attr('ncf-old-matrix', '');
            } else {
                $el.css(transProp, defTranslationStr).attr('ncf-transformed', '');
            }
        } else {
            setTimeout(function () {
                $el.removeClass('at_fixed_inner_el');
                coords = JSON.parse($el.attr('ncf-old-pos'));
                newCss = {};
                if (coords) {
                    newCss[coords.toChangeHor] = coords[coords.toChangeHor];
                    newCss[coords.toChangeVert] = coords[coords.toChangeVert];
                    //newCss['transitionProperty'] = '';
                    if (coords.toChangeVert === 'bottom') newCss['top'] = '';
                    $el.css(newCss);
                    $el.attr('ncf-old-pos', '');
                } else {
                    $el.css({left: '', top: '', bottom: '', right: '', 'transitionProperty': ''})
                }
            }, 500);
            setTimeout(function () {
                $el.css('transition', coords.transition);
            }, 700);
        }
    }

    function getVendorPropertyName(prop) {

        var prefixes = ['Moz', 'Webkit', 'O', 'ms'],
            vendorProp, i,
            div = document.createElement('div'),
            prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

        if (prop in div.style) {
            return prop;
        }

        for (i = 0; i < prefixes.length; ++i) {

            vendorProp = prefixes[i] + prop_;

            if (vendorProp in div.style) {
                return vendorProp;
            }

        }

        // Avoid memory leak in IE.
        this.div = null;
    };


    // Init Panel
    self.init = function () {
        self.open(); // create panel HTML
        self.bindActions(); // bind close button & overlay clicks
        // load backbone model if arg passed
        if (typeof self.options.load_model === 'function') {
            self.appendHTML();

            self.options.load_model(self.item_id, self.model_name).then(function () {
                self.showHTML();
            });
            return;
        }
        if (typeof self.options.load_content === 'object') {
            self.panel.append(self.spinner); // append spinner
            self.animation_start(); // show loading animation

            self.options.load_content.then(function (data) {
                self.html = data;
                self.appendHTML();
                self.showHTML();
            });
            return;
        }
        self.appendHTML(); // append panel to DOM
        self.showHTML();
    };
};