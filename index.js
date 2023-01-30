(()=>{"use strict";var r={669:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n@media (min-width: 320px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        min-width: 300px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 20px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item .news__meta-details {\r\n        left: -160%;\r\n    }\r\n\r\n    .news__item alt:hover .news__meta-details {\r\n        left: -40%;\r\n    }\r\n}\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n}\r\n@media (max-width: 1920px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 1920px;\r\n    }\r\n}\r\n",""]);const i=o},501:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,".sources {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    height: 120px;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n.sources::-webkit-scrollbar {\r\n    width: 24px;\r\n    height: 15px;\r\n}\r\n.sources::-webkit-scrollbar-track {\r\n    background-color: #91d8f8;\r\n    border-radius: 25px;\r\n}\r\n.sources::-webkit-scrollbar-thumb {\r\n    background-color: #09053e;\r\n    border-radius: 25px;\r\n    border: 1px solid rgb(207, 209, 211);\r\n    box-shadow: inset 1px 1px 5px #f3faf7;\r\n}\r\n\r\n.sources::-webkit-scrollbar-thumb:hover {\r\n    background-color: #3fcc59;\r\n}\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n/* .................................................................................................. */\r\n@media (min-width: 320px) {\r\n    .sources {\r\n        height: 80px;\r\n    }\r\n\r\n    .source__item {\r\n        background: none;\r\n        border: 2px solid #30c5ff;\r\n        font: inherit;\r\n        line-height: 0.8;\r\n        margin: 0.3em;\r\n        padding: 0.5em 0.5em;\r\n        color: #70d6ff;\r\n        transition: 0.25s;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .source__item-name {\r\n        font-weight: 300;\r\n        white-space: nowrap;\r\n    }\r\n}\r\n@media (min-width: 640px) {\r\n    .sources {\r\n        height: 100px;\r\n    }\r\n\r\n    .source__item {\r\n        background: none;\r\n        border: 2px solid #30c5ff;\r\n        font: inherit;\r\n        line-height: 1;\r\n        margin: 0.5em;\r\n        padding: 1em 1em;\r\n        color: #70d6ff;\r\n        transition: 0.25s;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .source__item-name {\r\n        font-weight: 400;\r\n        white-space: nowrap;\r\n    }\r\n}\r\n",""]);const i=o},767:(r,n,e)=>{e.d(n,{Z:()=>p});var t=e(645),o=e.n(t),i=e(669),s=e(501),a=e(667),c=e.n(a),d=e(900),l=o()((function(r){return r[1]}));l.i(i.Z),l.i(s.Z);var f=c()(d);l.push([r.id,"body {\r\n    color: #fff;\r\n    background: #17181c;\r\n    background-image: url("+f+");\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n    text-shadow: 0 0 10px rgb(25, 24, 24), 0 0 10px #30c5ff, 0 0 10px #30c5ff, 0 0 12px #30c5ff, 0 0 12px #30c5ff,\r\n        0 0 12px #30c5ff, 0 0 12px #30c5ff;\r\n}\r\n\r\nfooter {\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: rgb(157, 157, 157);\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: rgb(121, 121, 121);\r\n}\r\nfooter .copyright a:hover {\r\n    color: rgb(135, 134, 134);\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n.footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: flex-start;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    padding: 10px 0;\r\n    line-height: 24px;\r\n}\r\n.footer__inner {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    font-size: 16px;\r\n    color: rgb(207, 207, 207);\r\n}\r\n\r\n.footer__image {\r\n    width: 30px;\r\n    margin: 0 10px;\r\n    fill: #30c5ff;\r\n}\r\n.footer__image1 {\r\n    width: 60px;\r\n    margin: 0 10px;\r\n    fill: #30c5ff;\r\n}\r\n.footer__social {\r\n    text-decoration: none;\r\n    color: #30c5ff;\r\n}\r\n.footer__date {\r\n    font-size: 14px;\r\n    color: rgb(207, 207, 207);\r\n}\r\n@media (max-width: 1920px) {\r\n    header h1 {\r\n        font-size: 24px;\r\n    }\r\n    .footer {\r\n        line-height: 18px;\r\n    }\r\n    .footer__image {\r\n        width: 30px;\r\n        margin: 0 10px;\r\n    }\r\n    .footer__image1 {\r\n        width: 60px;\r\n        margin: 0 10px;\r\n    }\r\n    .footer__inner {\r\n        flex-direction: row;\r\n        justify-content: start;\r\n        align-items: flex-end;\r\n        font-size: 16px;\r\n    }\r\n    .footer__block {\r\n        margin-right: 10px;\r\n    }\r\n    footer .copyright {\r\n        font-size: 16px;\r\n    }\r\n    .footer__date {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (min-width: 320px) {\r\n    header h1 {\r\n        font-size: 20px;\r\n        font-weight: 600;\r\n        text-shadow: 0 0 10px rgb(25, 24, 24), 0 0 10px #30c5ff, 0 0 10px #30c5ff, 0 0 12px #30c5ff, 0 0 12px #30c5ff,\r\n            0 0 12px #30c5ff, 0 0 12px #30c5ff;\r\n    }\r\n    .footer {\r\n        line-height: 16px;\r\n    }\r\n    .footer__image {\r\n        width: 20px;\r\n        margin: 0 5px;\r\n    }\r\n    .footer__image1 {\r\n        width: 60px;\r\n        margin: 0 5px;\r\n    }\r\n    .footer__inner {\r\n        flex-direction: column;\r\n        align-items: flex-end;\r\n        justify-content: start;\r\n        font-size: 12px;\r\n    }\r\n    footer .copyright {\r\n        font-size: 12px;\r\n    }\r\n    .footer__date {\r\n        display: inline-block;\r\n        font-size: 12px;\r\n    }\r\n}\r\n@media (min-width: 640px) {\r\n    header h1 {\r\n        font-size: 40px;\r\n        font-weight: 800;\r\n        text-shadow: 0 0 10px rgb(25, 24, 24), 0 0 10px #30c5ff, 0 0 10px #30c5ff, 0 0 12px #30c5ff, 0 0 12px #30c5ff,\r\n            0 0 12px #30c5ff, 0 0 12px #30c5ff;\r\n    }\r\n    .footer__inner {\r\n        flex-direction: row;\r\n        align-items: flex-end;\r\n        font-size: 14px;\r\n    }\r\n}\r\n",""]);const p=l},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<r.length;a++){var c=[].concat(r[a]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),"string"!=typeof(r=r&&r.__esModule?r.default:r)?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},379:(r,n,e)=>{var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function s(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function a(r,n){for(var e={},t=[],o=0;o<r.length;o++){var a=r[o],c=n.base?a[0]+n.base:a[0],d=e[c]||0,l="".concat(c," ").concat(d);e[c]=d+1;var f=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:h(p,n),references:1}),t.push(l)}return t}function c(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var s=o(r.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,l=(d=[],function(r,n){return d[r]=n,d.filter(Boolean).join("\n")});function f(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),s=r.childNodes;s[n]&&r.removeChild(s[n]),s.length?r.insertBefore(i,s[n]):r.appendChild(i)}}function p(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var u=null,m=0;function h(r,n){var e,t,o;if(n.singleton){var i=m++;e=u||(u=c(n)),t=f.bind(null,e,i,!1),o=f.bind(null,e,i,!0)}else e=c(n),t=p.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=a(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=s(e[t]);i[o].references--}for(var c=a(r,n),d=0;d<e.length;d++){var l=s(e[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=c}}}},900:(r,n,e)=>{r.exports=e.p+"assets/bg.jpg"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.nc=void 0,(()=>{var r,n=e(379),t=e.n(n),o=e(767);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,function(r){r[r.Unauthorized=401]="Unauthorized",r[r.notFound=404]="notFound"}(r||(r={}));var i=e(669);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var s=e(501);t()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;class a{news;sources;constructor(){this.news=new class{draw(r){const n=r.length>=10?r.filter(((r,n)=>n<10)):r,e=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");n.forEach(((r,n)=>{const o=t.content.cloneNode(!0);n%2&&o.querySelector(".news__item").classList.add("alt"),o.querySelector(".news__meta-photo").style.backgroundImage=`url(${r.urlToImage||"img/news_placeholder.jpg"})`,o.querySelector(".news__meta-author").textContent=r.author||r.source.name,o.querySelector(".news__meta-date").textContent=r.publishedAt.slice(0,10).split("-").reverse().join("-"),o.querySelector(".news__description-title").textContent=r.title,o.querySelector(".news__description-source").textContent=r.source.name,o.querySelector(".news__description-content").textContent=r.description,o.querySelector(".news__read-more a").setAttribute("href",r.url),e.append(o)}));const o=document.querySelector(".news");o.innerHTML="",o.appendChild(e)}},this.sources=new class{draw(r){const n=document.createDocumentFragment(),e=document.querySelector("#sourceItemTemp");r.forEach((r=>{const t=e.content.cloneNode(!0);t.querySelector(".source__item-name").textContent=r.name,t.querySelector(".source__item").setAttribute("data-source-id",r.id),n.append(t)})),document.querySelector(".sources").append(n)}}}drawNews(r){const n=r?.articles?r?.articles:[];this.news.draw(n)}drawSources(r){const n=r?.sources?r?.sources:[];this.sources.draw(n)}}(new class{controller;view;constructor(){this.controller=new class extends class extends class{baseLink;options;constructor(r,n){this.baseLink=r,this.options=n}getResp({endpoint:r,options:n={}},e=(()=>{console.error("No callback for GET response")})){this.load("GET",r,e,n)}errorHandler(n){if(!n.ok)throw n.status!==r.Unauthorized&&n.status!==r.notFound||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(r,n){const e={...this.options,...r};let t=`${this.baseLink}${n}?`;return Object.keys(e).forEach((r=>{t+=`${r}=${e[r]}&`})),t.slice(0,-1)}load(r,n,e,t={}){fetch(this.makeUrl(t,n),{method:r}).then(this.errorHandler).then((r=>r.json())).then((r=>e(r))).catch((r=>console.error(r)))}}{apiKey;constructor(){super("https://newsapi.org/v2/",{apiKey:"dd7ccd0a32494fb691c471a79c824e0c"})}}{getSources(r){super.getResp({endpoint:"sources"},r)}getNews(r,n){let e=r.target;const t=r.currentTarget;for(;e!==t;){if(e.classList.contains("source__item")){const r=e.getAttribute("data-source-id");if("string"!=typeof r)return;return void(t.getAttribute("data-source")!==r&&(t.setAttribute("data-source",r),super.getResp({endpoint:"everything",options:{sources:r}},n)))}e=e.parentNode}}},this.view=new a}start(){document.querySelector(".sources").addEventListener("click",(r=>this.controller.getNews(r,(r=>this.view.drawNews(r))))),this.controller.getSources((r=>this.view.drawSources(r)))}}).start()})()})();