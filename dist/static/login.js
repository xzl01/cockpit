"use strict";(()=>{(function(h){let c;try{c=window.localStorage,window.localStorage.removeItem("url-root"),window.localStorage.removeItem("standard-login")}catch(e){c=window.sessionStorage,h.warn(String(e))}let T=c.getItem("shell:style")||"auto";window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&T==="auto"||T==="dark"?document.documentElement.classList.add("pf-v5-theme-dark"):document.documentElement.classList.remove("pf-v5-theme-dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches&&T==="auto"||T==="dark"?document.documentElement.classList.add("pf-v5-theme-dark"):document.documentElement.classList.remove("pf-v5-theme-dark")});let g,l=window.environment||{},u=l.OAuth||null;u&&(u.TokenParam||(u.TokenParam="access_token"),u.ErrorParam||(u.ErrorParam="error_description"));let V=/\$\{([^}]+)\}|\$([a-zA-Z0-9_]+)/g;function v(e){let t=Array.prototype.slice.call(arguments,1);return e.replace(V,function(i,n,r){return t[n||r]||""})}function q(e){if(window.cockpit_po){let t=window.cockpit_po[e];if(t&&t[1])return t[1]}return e}function Y(){if(!document.querySelectorAll)return;let e=document.querySelectorAll("[translate]");for(let t=0;t<e.length;t++)e[t].textContent=q(e[t].textContent)}let s=q,y,m,A,S,Z=/[?&]?([^=]+)=([^&]*)/g,x=null;function P(e){e=e.split("+").join(" ");let t={};for(;;){let i=Z.exec(e);if(!i)break;t[decodeURIComponent(i[1])]=decodeURIComponent(i[2])}return t}h||(h=function(){});function o(e){return document.getElementById(e)}function k(e,t){typeof e=="string"&&(e=[e]);for(let i=0;i<e.length;i++)if(typeof e[i]=="string"){let n=document.querySelectorAll(e[i]);n&&n.forEach(function(r){r.hidden!==!!t&&(r.hidden=!!t)})}else e[i].hidden!==!!t&&(e[i].hidden=!!t)}function f(){k(arguments,!1)}function d(){k(arguments,!0)}function K(e){window.console&&h.warn("stderr:",e),d("#login-wait-validating"),d("#login","#login-details"),f("#login-fatal"),o("login-again").onclick=()=>{d("#login-fatal"),z()},f("#login-again");let t=o("login-fatal-message");t.textContent="",t.appendChild(document.createTextNode(e))}function w(e){window.console&&h.warn("fatal:",e),d("#login-again","#login-wait-validating"),x&&(o("login-again").href=x,f("#login-again")),d("#login","#login-details"),f("#login-fatal");let t=o("login-fatal-message");t.textContent="",t.appendChild(document.createTextNode(e))}function E(e,t){let i=o(e),n=i&&window.getComputedStyle?window.getComputedStyle(i,":before"):null;if(!n)return;let r=n.content;if(r&&r!="none"&&r!="normal"){let a=r.length;(r[0]==='"'||r[0]==="'")&&a>2&&r[a-1]===r[0]&&(r=r.substr(1,a-2)),i.innerHTML=r||t}else i.removeAttribute("class")}function ee(){function e(a){a?(f("#login","#login-details","#login-override"),d("#get-out-link"),o("login-override-content").appendChild(o("login")),o("login-button").classList.add("pf-m-warning"),document.querySelector("#login .login-actions").insertAdjacentHTML("beforebegin","<div class='pf-v5-c-helper-text pf-m-warning' id='bypass-warning'>"+s("Cockpit might not render correctly in your browser")+"</div>")):d("#login","#login-details","#login-override")}function t(a,b){a==="supports"&&(a="@supports API");let _=v(s("This web browser is too old to run the Web Console (missing $0)"),a);window.console&&h.warn(_),o("login-error-message").textContent=_,f("#unsupported-browser","#error-group"),document.body.classList.add("unsupported-browser"),e(b)}function i(a,b){let _;try{_=b&&b[a]}catch(pe){throw w(v(s("The web browser configuration prevents Cockpit from running (inaccessible $0)"),a)),pe}return _===void 0?(t(a),!1):!0}function n(){let a=[].join.call(arguments,": ");return!window.CSS||!window.CSS.supports.apply(this,arguments)?(t(a,"bypass"),!1):!0}return i("WebSocket",window)&&i("XMLHttpRequest",window)&&i("sessionStorage",window)&&i("JSON",window)&&i("defineProperty",Object)&&i("console",window)&&i("pushState",window.history)&&i("textContent",document)&&i("replaceAll",String.prototype)&&i("finally",Promise.prototype)&&i("supports",window.CSS)?(n("display","flex")&&n("display","grid")&&n("selector(test)")&&n("selector(:is(*):where(*))"),!0):!1}function N(e){return e.replace(/^\s+|\s+$/g,"")}function M(e){let t=document.createElement("a"),i=document.baseURI;e=e||"/",t.href=i,t.pathname!="/"&&(g=t.pathname.replace(/^\/+|\/+$/g,""),c.setItem("url-root",g),g&&e.indexOf("/"+g)===0&&(e=e.replace("/"+g,"")||"/")),e.indexOf("/=")===0?(l.hostname=e.substring(2).split("/")[0],o("server-field").value=l.hostname,C(null,!0),e="/cockpit+"+e.split("/")[1]):e.indexOf("/cockpit/")!==0&&e.indexOf("/cockpit+")!==0&&(e="/cockpit"),m=e.split("/")[1],y="/"+m+"/login",g&&(y="/"+g+y),S=m,A=y}function C(e,t){e&&e.type==="keypress"&&e.key!==" "||(e&&e.type==="click"&&e.preventDefault(),t===void 0&&(t=o("server-group").hidden),k("#server-group",!t),o("option-group").setAttribute("data-state",t))}function te(e){let t=o("login-password-input");t.setAttribute("type",t.getAttribute("type")==="password"?"text":"password"),e.stopPropagation()}function oe(){window.onload=null,Y(),window.cockpit_po&&window.cockpit_po[""]&&(document.documentElement.lang=window.cockpit_po[""].language,window.cockpit_po[""]["language-direction"]&&(document.documentElement.dir=window.cockpit_po[""]["language-direction"])),M(window.location.pathname),(window.location.pathname.indexOf("/"+g+"/cockpit/")===0||window.location.pathname.indexOf("/"+g+"/cockpit+")===0)&&document.documentElement.setAttribute("class","inline");let e=l.page.title;if(l.is_cockpit_client&&(e=s("Login")),(!e||m.indexOf("cockpit+=")===0)&&(e=l.hostname),document.title=e,m.indexOf("cockpit+=")===0?d("#brand","#badge"):(E("badge",""),E("brand","Cockpit")),!ee())return;l.banner&&(f("#banner"),o("banner-message").textContent=l.banner.trimEnd()),o("bypass-browser-check").addEventListener("click",C),o("bypass-browser-check").addEventListener("keypress",C),o("show-other-login-options").addEventListener("click",C),o("show-other-login-options").addEventListener("keypress",C),o("server-clear").addEventListener("click",function(){let n=o("server-field");n.value="",n.focus()});let t=window.sessionStorage.getItem("logout-intent")=="explicit";t&&window.sessionStorage.removeItem("logout-intent");let i=window.sessionStorage.getItem("logout-reason");i&&window.sessionStorage.removeItem("logout-reason"),u?(d("#login-details","#login"),t?($(),o("login-again").textContent=s("Login again"),w(s("Logout successful"))):ie()):t?z(i):X()?z():ne()}function ne(){let e=new XMLHttpRequest;e.open("GET",y,!0),e.onreadystatechange=function(){e.readyState==4&&(e.status==200?U(JSON.parse(e.responseText)):e.status==401?z():e.statusText?w(decodeURIComponent(e.statusText)):e.status===0?z():w(v(s("$0 error"),e.status)))},e.send()}function $(){let e=window.location.href.split("#",2);x=u.URL,u.URL.indexOf("?")>-1?x+="&":x+="?",x+="redirect_uri="+encodeURIComponent(e[0])}function ie(){let e=document.createElement("a");if(!u.URL)return w(s("Cockpit authentication is configured incorrectly."));let t=!window.location.search&&window.location.hash?P(window.location.hash.slice(1)):P(window.location.search);if($(),t[u.TokenParam]){window.sessionStorage.getItem("login-wanted")&&(e.href=window.sessionStorage.getItem("login-wanted"),M(e.pathname));let i=t[u.TokenParam];f("#login-wait-validating");let n=new XMLHttpRequest;n.open("GET",y,!0),n.setRequestHeader("Authorization","Bearer "+i),n.onreadystatechange=function(){if(n.readyState==4)if(n.status==200)U(JSON.parse(n.responseText));else{let r=F(n.getResponseHeader("WWW-Authenticate"),n.responseText);r?j(r):w(decodeURIComponent(n.statusText))}},n.send()}else t[u.ErrorParam]?w(t[u.ErrorParam]):(window.sessionStorage.setItem("login-wanted",window.location.href),window.location=x)}function J(){d("#error-group"),o("login-error-message").textContent=""}function W(){d("#info-group"),o("login-info-message").textContent=""}function p(e,t){J(),e&&(u?w(e):(L(t||"login"),o("login-error-message").textContent=e,f("#error-group")))}function re(e){W(),e&&(o("login-info-message").textContent=e,f("#info-group"))}function I(e){o("server-field").value?(J(),o("login-error-message").textContent=e,f("#error-group"),C(null,!0),L("login")):p(e)}function ae(e){let t=o("login-note");e?(f(t),t.textContent=e):t.innerHTML="&nbsp;"}function X(){return l.page.require_host&&S.indexOf("cockpit+=")===-1}function B(){let e=[];try{e=JSON.parse(c.getItem("cockpit-client-sessions")||"[]")}catch(t){h.log("Failed to parse 'cockpit-client-sessions':",t)}return e}function O(){p(null);let e=N(o("login-user-input").value);if(e===""&&!l.is_cockpit_client)p(s("User name cannot be empty"));else if(X()&&o("server-field").value==="")p(s("Please specify the host to connect to"));else{let t=o("server-field").value;t?(m="cockpit+="+t,y=A.replace("/"+S+"/","/"+m+"/"),o("brand").style.display="none",o("badge").style.visibility="hidden"):(m=S,y=A,E("badge",""),E("brand","Cockpit")),o("server-name").textContent=t||l.hostname,o("login-button").removeEventListener("click",O);let i=o("login-password-input").value,n="superuser:"+e+(t?":"+t:""),r=c.getItem(n)||"none";c.setItem("superuser-key",n),c.setItem(n,r),c.setItem("standard-login",!0);let a={Authorization:"Basic "+window.btoa(D(e+":"+i)),"X-Superuser":r};t&&(a["X-SSH-Connect-Unknown-Hosts"]="yes"),Q("GET",a,!1)}}function G(){let e=B(),t=o("recent-hosts-list");t.innerHTML="",e.forEach(i=>{let n=document.createElement("div");n.classList.add("host-line");let r=document.createElement("button");r.textContent=i,r.classList.add("pf-v5-c-button","pf-m-tertiary","host-name"),r.addEventListener("click",()=>{o("server-field").value=i,O()});let a=document.createElement("button");a.title=s("Remove host"),a.ariaLabel=a.title,a.classList.add("host-remove"),a.addEventListener("click",()=>{let b=e.indexOf(i);e.splice(b,1),c.setItem("cockpit-client-sessions",JSON.stringify(e)),G()}),n.append(r,a),t.append(n)}),k("#recent-hosts",e.length==0)}function L(e){let t=l.page.connect,i=o("option-group").getAttribute("data-state");if(d("#login-wait-validating"),f("#login"),k("#login-details",l.is_cockpit_client),k("#server-field-label",l.is_cockpit_client),l.is_cockpit_client){let n=o("brand");n.textContent=s("Connect to:"),n.classList.add("text-brand")}k(["#user-group","#password-group"],e!="login"||l.is_cockpit_client),k("#conversation-group",e!="conversation"),k("#hostkey-group",e!="hostkey"),o("login-button-text").textContent=e=="hostkey"?s("Accept key and log in"):s("Log in"),e!="login"&&(o("login-password-input").value=""),l.page.require_host?(d("#option-group"),i=!0):k("#option-group",!t||e!="login"),!t||e!="login"?d("#server-group"):k("#server-group",!i),o("login-button").removeAttribute("disabled"),o("login-button").removeAttribute("spinning"),o("login-button").classList.remove("pf-m-danger"),o("login-button").classList.add("pf-m-primary"),d("#get-out-link"),e=="login"&&o("login-button").addEventListener("click",O),l.is_cockpit_client&&(G(),document.body.classList.add("cockpit-client"))}function z(e){re(e),o("server-name").textContent=document.title,ae(s("Log in with your server user account.")),o("login-user-input").addEventListener("keydown",function(i){p(null),W(),i.which==13&&o("login-password-input").focus()},!1);let t=function(i){p(null),i.which==13&&O()};o("login-password-input").addEventListener("keydown",t),o("login-password-toggle").addEventListener("click",te),L("login"),l.is_cockpit_client?l.page.require_host&&o("server-field").focus():o("login-user-input").focus()}function se(){try{return JSON.parse(c.getItem("known_hosts")||"{ }")}catch(e){return h.warn("Can't parse known_hosts database in localStorage",e),{}}}function le(e){try{c.setItem("known_hosts",JSON.stringify(e))}catch(t){h.warn("Can't write known_hosts database to localStorage",t)}}function ce(e){let t=se(),i=e["host-key"],n=i.split(" ")[0],r=i.split(" ")[1];if(t[n]==i){R(e.id,e.default);return}t[n]?(o("hostkey-title").textContent=v(s("$0 key changed"),o("server-field").value),f("#hostkey-warning-group"),o("hostkey-message-1").textContent=""):(o("hostkey-title").textContent=s("New host"),d("#hostkey-warning-group"),o("hostkey-message-1").textContent=v(s("You are connecting to $0 for the first time."),o("server-field").value)),o("hostkey-verify-help-1").textContent=v(s("To verify a fingerprint, run the following on $0 while physically sitting at the machine or through a trusted network:"),o("server-field").value),o("hostkey-verify-help-cmds").textContent=v("ssh-keyscan$0 localhost | ssh-keygen -lf -",r?" -t "+r:""),o("hostkey-fingerprint").textContent=e.default,r?(o("hostkey-type").textContent=v("($0)",r),f("#hostkey-type")):d("#hostkey-type"),p("");function a(){o("login-button").removeEventListener("click",a),p(null,"hostkey"),t[n]=i,le(t),R(e.id,e.default)}o("login-button").addEventListener("click",a),L("hostkey"),f("#get-out-link"),t[n]&&(o("login-button").classList.add("pf-m-danger"),o("login-button").classList.remove("pf-m-primary"))}function j(e){if(e["host-key"]){ce(e);return}let t=e.echo?"text":"password";o("conversation-prompt").textContent=e.prompt;let i=o("conversation-message"),n=e.error||e.message;n?(i.textContent=n,f(i)):d(i);let r=o("conversation-input");r.value="",e.default&&(r.value=e.default),r.setAttribute("type",t),p("");function a(){o("conversation-input").removeEventListener("keydown",b),o("login-button").removeEventListener("click",a),p(null,"conversation"),R(e.id,o("conversation-input").value)}function b(_){p(null,"conversation"),_.which==13&&a()}o("conversation-input").addEventListener("keydown",b),o("login-button").addEventListener("click",a),L("conversation"),r.focus()}function D(e){return window.unescape(encodeURIComponent(e))}function F(e,t){if(!e)return null;let i=e.split(" ");if(i[0].toLowerCase()!=="x-conversation"&&i.length!=3)return null;let n=i[1],r;try{r=window.atob(i[2])}catch(b){return window.console&&h.error("Invalid prompt data",b),null}let a;try{a=JSON.parse(t)}catch(b){window.console&&h.log("Got invalid JSON response for prompt data",b),a={}}return a.id=n,a.prompt=r,a}function Q(e,t,i){o("login-button").setAttribute("disabled","true"),o("login-button").setAttribute("spinning","true");let n=new XMLHttpRequest;n.open(e,y,!0);for(let r in t)n.setRequestHeader(r,t[r]);n.onreadystatechange=function(){if(n.readyState==4)if(n.status==200){let r=JSON.parse(n.responseText);U(r)}else if(n.status==401){let r=n.getResponseHeader("WWW-Authenticate");if(r&&r.toLowerCase().indexOf("x-conversation")===0){let a=F(r,n.responseText);a?j(a):w(s("Internal error: Invalid challenge header"))}else if(window.console&&h.log(n.statusText),n.statusText.startsWith("captured-stderr:"))K(decodeURIComponent(n.statusText.replace(/^captured-stderr:/,"")));else if(n.statusText.indexOf("authentication-not-supported")>-1){let a=N(o("login-user-input").value);w(v(s("The server refused to authenticate '$0' using password authentication, and no other supported authentication methods are available."),a))}else n.statusText.indexOf("terminated")>-1?p(s("Authentication failed: Server closed connection")):n.statusText.indexOf("no-host")>-1?I(s("Unable to connect to that address")):n.statusText.indexOf("unknown-hostkey")>-1?I(s("Refusing to connect. Hostkey is unknown")):n.statusText.indexOf("unknown-host")>-1?I(s("Refusing to connect. Host is unknown")):n.statusText.indexOf("invalid-hostkey")>-1?I(s("Refusing to connect. Hostkey does not match")):p(s(i?"Authentication failed":"Wrong user name or password"))}else n.status==403?p(s(decodeURIComponent(n.statusText))||s("Permission denied")):n.statusText?w(decodeURIComponent(n.statusText)):w(v(s("$0 error"),n.status))},n.send()}function R(e,t){let i={Authorization:"X-Conversation "+e+" "+window.btoa(D(t))};Q("GET",i,!0)}function de(e){let t=window.setTimeout(function(){t=null,window.location.reload(!0)},100);e&&e!=window.location.href&&(window.location=e),window.onbeforeunload=function(){t&&window.clearTimeout(t),t=null}}function H(e,t,i){let n=0;for(;n<e.length;){let r=e.key(n);i&&r.indexOf("cockpit")!==0||r.indexOf(t)===0?e.removeItem(r):n++}}function fe(e){if(H(window.sessionStorage,m,!0),c.removeItem("login-data"),H(c,m,!1),e&&e["login-data"]){let i=JSON.stringify(e["login-data"]);c.setItem(m+"login-data",i),c.setItem("login-data",i)}g&&c.setItem("url-root",g);let t=l.CACertUrl;t&&window.sessionStorage.setItem("CACertUrl",t)}function U(e){let t=window.sessionStorage.getItem("login-wanted"),i=o("server-field").value;if(i&&l.is_cockpit_client){let n=B();n.indexOf(i)<0&&(n.push(i),c.setItem("cockpit-client-sessions",JSON.stringify(n)))}i&&m!=S&&(t="/="+i,g&&(t="/"+g+t)),H(window.sessionStorage,m,!1),fe(e),de(t)}window.onload=oe})(window.console);})();
