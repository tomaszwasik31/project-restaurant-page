(()=>{"use strict";const e=()=>{console.log("change"),(()=>{const e=document.createElement("div"),t=document.createElement("h1");t.innerText="Our menu:",content.appendChild(e),e.appendChild(t)})()};(()=>{const t=document.querySelector("#content"),n=document.querySelector("#home"),c=document.querySelector("#menu"),i=(document.querySelector("#contact"),()=>{t.innerHTML=""});n.addEventListener("click",(()=>{i(),d(),a(),r()})),c.addEventListener("click",(()=>{i(),e()}));const d=()=>{const e=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("h2");n.innerText="Best pizza in Town!",c.innerText="Italian pizza",e.setAttribute("id","headings-wrapper"),t.appendChild(e),e.appendChild(n),e.appendChild(c)},a=()=>{const e=document.createElement("div"),n=document.createElement("p");e.setAttribute("id","content-article"),n.setAttribute("class","txt"),n.innerText="We serve our Mediterranean delicacies in a beautiful and chic atmosphere. We are ready to welcome you at our table, and welcome you to our restaurant, if you wish.",t.appendChild(e),e.appendChild(n)},r=()=>{const e=document.createElement("div"),n=document.createElement("img"),c=document.createElement("p");e.setAttribute("id","quote-wrapper"),n.setAttribute("id","chef"),n.src="/dist/img/chef.svg",c.setAttribute("class","txt quote"),c.innerText="Papa Bons: Mama mia... è delizioso!",t.appendChild(e),e.appendChild(n),e.appendChild(c)};d(),a(),r()})()})();