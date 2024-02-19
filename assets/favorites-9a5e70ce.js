import{a as y}from"./vendor-e28a185d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const x={openModalBtn:document.querySelector(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container")};x.openModalBtn.addEventListener("click",P);x.closeModalBtn.addEventListener("click",P);function P(){x.modal.classList.toggle("is-open")}document.querySelector(".mobile-menu-link");const k=document.querySelector(".home-link"),L=document.querySelector(".fav-link"),m="active";window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(L.classList.add(m),k.classList.remove(m)):(k.classList.add(m),L.classList.remove(m))});function I({filter:e,page:s=1,limit:o=12,type:i,...t}){return y.get(`https://energyflow.b.goit.study/api/${i}`,{params:{...t,filter:e,page:s,limit:o}})}function oe(e,s){return y.post(`https://energyflow.b.goit.study/api/${s}`,e)}const S="dateNow",A="quoteDay",M=document.getElementById("description"),O=document.getElementById("author-quote");function U(){const e=new Date,s=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,o=localStorage.getItem(S);if(o===s){const i=JSON.parse(localStorage.getItem(A));if(i){const{author:t,quote:a}=i;M.textContent=a,O.textContent=t}else E();return}(!o||o!==s)&&(localStorage.setItem(S,s),E())}function E(){I({type:"quote"}).then(({data:e})=>{const{author:s,quote:o}=e,i={author:s,quote:o};localStorage.setItem(A,JSON.stringify(i)),M.textContent=o,O.textContent=s}).catch(e=>{console.error("Error fetching quote:",e)})}U();const T=document.querySelectorAll(".switch-item"),K=document.querySelector(".bp-list"),b=document.querySelector(".exercises-list"),q=document.querySelector("#tui-pagination-container");document.querySelector(".title-exercises");let l=8,g=1;window.addEventListener("load",()=>{f(),u(),document.querySelectorAll(".exercises-item").forEach(s=>{s.addEventListener("click",o=>handleExerciseCardClick(o))})});b&&b.addEventListener("click",function(e){const s=e.target.closest(".exercises-item");if(s){e.preventDefault();const o=document.querySelector(".bp-list");o&&o.classList.remove("visually-hidden"),b.classList.add("visually-hidden");const i=new URLSearchParams(window.location.search),t=s.getAttribute("data-filter"),a=s.getAttribute("data-name");console.log(t),console.log(a),i.set(t.toLowerCase(),a.toLowerCase());const n=`${window.location.pathname}?${i.toString()}`;window.history.replaceState(null,null,n),u()}});window.addEventListener("resize",N(()=>{const e=l;f(),e!==l&&u()},250));function N(e,s){let o;return function(...t){const a=()=>{clearTimeout(o),e(...t)};clearTimeout(o),o=setTimeout(a,s)}}function f(){window.innerWidth<768?l=8:l=9}async function W(e){try{return(await I({...e,type:"exercises"})).data}catch(s){throw new Error("Failed to fetch data from API: "+s.message)}}async function u(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}if(!e.textContent.trim().toLowerCase()){console.error("Query is undefined");return}const o=new URLSearchParams(window.location.search);let i=o.get("bodypart"),t=o.get("muscles"),a=o.get("equipment");if(o.size){const r=await W({bodypart:i,muscles:t,equipment:a});if(Array.isArray(r.results)){const h=r.totalPages;g=r.page,F(r.results.slice((g-1)*l,g*l)),D(h,g)}else console.error("Results data is not an array:",r.results)}const n=new URLSearchParams(window.location.search);window.history.replaceState(null,null,window.location.pathname)}catch(e){console.error("Error fetching and rendering data:",e)}}async function z(e,s){g=e,await u(),F(s)}function D(e,s){let o="";for(let t=1;t<=e;t++)o+=`<button class="tui-page page-btn ${t===s?"button-is-active":""}" data-page="${t}">${t}</button>`;q.innerHTML=o,q.querySelectorAll(".page-btn").forEach(t=>{t.addEventListener("click",()=>{const a=parseInt(t.dataset.page);z(a),D(e,a)})})}async function F(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let s="";e.forEach(o=>{s+=Y(o)}),K.innerHTML=s}catch(s){console.error("Error rendering exercise cards:",s)}}function Y(e){return`
    <li class="bp-item" data-id="${e._id}">
    <div class="bp-exercisecard-wraper">
        <div class="bp-rating-info">
        <span class="bp-workout-span">WORKOUT</span>
        <span class="bp-rating">${e.rating.toFixed(1)}</span>
        <svg
            class="icon-star"
            viewBox="0 0 32 32"
            width="13"
            height="13"
            >
            <use href="./img/sprite.svg#icon-star"></use>
        </svg>
    </div>

    <button class="bp-start-button" type="button">
        Start
        <svg
            class="bp-arrow"
            viewBox="0 0 32 32"
            width="14"
            height="14"
            >
            <use href="./img/sprite.svg#icon-arrow" />
        </svg>
    </button>
    </div>

    <div class="bp-exercise-name">
        <svg
            class="bp-run-icon"
            viewBox="0 0 32 32"
            width="14.07"
            height="16"
        >
            <use href="./img/sprite.svg#icon-running-man" />
        </svg>
        <span>${c(e.name)}</span>
    </div>

    <div class="bp-block-info">
        <div class="bp-calories">
            <span class="bp-block-info-title">Burned calories: </span>
            <span class="bp-block-info-value calories-value">${c(e.burnedCalories)}</span>
            <span class="bp-block-info-value">/ ${e.time} min</span>
        </div>
        <div class="bp-body-part">
            <span class="bp-block-info-title">Body part: </span>
            <span class="bp-block-info-value body-part-value">${c(e.bodyPart)}</span>
        </div>
        <div class="bp-target">
            <span class="bp-block-info-title">Target: </span>
            <span class="bp-block-info-value bp-target-value">${c(e.target)}</span>
        </div>
    </div>
    </li>`}function c(e){return/^[a-zA-Z]/.test(e)?e.charAt(0).toUpperCase()+e.slice(1):e}function j(){T.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),g=1,u()}T.forEach(e=>{e.addEventListener("click",j)});window.addEventListener("load",()=>{f(),u()});window.addEventListener("resize",N(()=>{const e=l;f(),e!==l&&u()},250));const Q="exercise",B=document.querySelector(".bp-list"),p=document.querySelector(".backdrop");B&&B.addEventListener("click",G);async function G(e){if(e.target.nodeName!=="BUTTON")return;p.classList.remove("is-hidden");const o=e.target.closest("li").dataset.id;try{const t=await y.get(`https://energyflow.b.goit.study/api/exercises/${o}`);V(t.data),localStorage.setItem(Q,JSON.stringify(t.data));const n=document.querySelector(".stars-wraper").children,r=Math.round(t.data.rating);Z(n,r)}catch(t){console.log(t)}document.querySelector(".modal-close-btn").addEventListener("click",w),window.addEventListener("keydown",J),p.addEventListener("click",t=>{t.currentTarget===t.target&&w()})}function w(){p.classList.add("is-hidden"),window.removeEventListener("keydown",J)}function J(e){e.code==="Escape"&&w()}function V({gifUrl:e,name:s,rating:o,target:i,bodyPart:t,equipment:a,burnedCalories:n,popularity:r,description:h,_id:_}){const H=`<div class="modal">
    <button class="modal-close-btn" type="button">
      <svg class="close-me-icon" viewBox="0 0 32 32" width="24" height="24">
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-wraper">
      <div class="modal-exercises-image">
        <img
          class="exercise-image"
          src="${e}"
          alt="showing exercise"
        />
      </div>
      <div class="modal-info-wraper">
        <h2 class="me-title">${c(s)}</h2>
        <div class="rating-wraper">
          <span class="rating">${Math.round(o).toFixed(1)}</span>
          <div class="stars-wraper">
            <svg class="icon-star dimmed-star" viewBox="0 0 32 32" width="13" height="13">
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="icon-star dimmed-star" viewBox="0 0 32 32" width="13" height="13">
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="icon-star dimmed-star" viewBox="0 0 32 32" width="13" height="13">
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="icon-star dimmed-star" viewBox="0 0 32 32" width="13" height="13">
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
            <svg
              class="icon-star dimmed-star"
              viewBox="0 0 32 32"
              width="13"
              height="13"
            >
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div class="me-block-info">
          <div class="me-block-info-target">
            <h3 class="block-info-name">Target</h3>
            <span class="block-info-value">${c(i)}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Body Part</h3>
            <span class="block-info-value">${c(t)}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Equipment</h3>
            <span class="block-info-value">${c(a)}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Popular</h3>
            <span class="block-info-value">${r}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Burned Calories</h3>
            <div class="calories-wrap">
              <span class="block-info-value">${n}</span
              ><!--
--><span class="block-info-static-value">/3 min</span>
            </div>
          </div>
        </div>
        <p class="exersice-text">
          ${c(h)}
        </p>
        <button class="add-to-favorites-btn" type="button">
         ${te(_)}
        </button>
        <button class="give-rating-btn" type="button">Give a rating</button>
      </div>   
       </div>
    </div> 
    `;p.innerHTML=H}function Z(e,s){Array.from(e).forEach((i,t)=>{t<s&&i.classList.remove("dimmed-star")})}const d="favorites",v=document.querySelector(".list-favorites");document.querySelector(".add-to-favorites-btn");document.querySelector(".delete-from-fav");document.querySelector(".start-btn");const $=document.querySelector(".backdrop"),C=document.querySelector(".message-block-favorites");if(v){const e=JSON.parse(localStorage.getItem(d))||[];R(e),v.addEventListener("click",X)}$&&$.addEventListener("click",ee);function X(e){const s=e.target.closest(".delete-from-fav");if(s){const o=s.dataset.id,t=(JSON.parse(localStorage.getItem(d))||[]).filter(({_id:a})=>a!==o);console.log(t),localStorage.setItem(d,JSON.stringify(t)),R(t)}}function ee(e){if(!e.target.classList.contains("add-to-favorites-btn"))return;const o=JSON.parse(localStorage.getItem(d))||[],i=JSON.parse(localStorage.getItem("exercise"));if(e.target.textContent.trim()==="Add to favorites")o.push(i),localStorage.setItem(d,JSON.stringify(o)),e.target.innerHTML=`Remove from <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`;else{const t=o.filter(({_id:a})=>a!==i._id);localStorage.setItem(d,JSON.stringify(t)),e.target.innerHTML=`Add to favorites <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`}}function te(e){return(JSON.parse(localStorage.getItem(d))||[]).find(i=>e===i._id)?`Remove from <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`:`Add to favorites <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`}function R(e){if(console.log(e),e.length===0){C.classList.remove("hidden"),v.innerHTML="";return}C.classList.add("hidden");const s=e.map(o=>`
        <li class="item-favorites" >
             <div class="workout-block">
               <p class="workout-title">Workout</p>
               <button class="delete-from-fav" type="button" data-id="${o._id}">
                 <svg class="delete-icon" width="16" height="16">
                   <use href="../img/sprite.svg#icon-delete"></use>
                 </svg>
               </button>
             </div>
             <button class="start-btn" type="button">
               Start
               <svg class="arrow-icon" width="14" height="14">
                 <use href="../img/sprite.svg#icon-arrow"></use>
               </svg>
             </button>
             <div class="ex-title-block">
               <div class="icon-man-wraper">
                 <svg class="man-icon" width="16" height="16">
                   <use href="../img/sprite.svg#icon-running-man"></use>
                 </svg>
               </div>
               <h3 class="ex-title">${o.name}</h3>
             </div>
             <ul class="list-ex-category">
               <li>
                 <p class="category-text-accent">Burned calories:<span class="category-text"> ${o.burnedCalories}/ 3 min</span
                   >
                 </p>
               </li>
               <li>
                 <p class="category-text-accent">Body part:<span class="category-text"> ${o.bodyPart}</span>
                 </p>
               </li>
               <li>
                 <p class="category-text-accent">
                   Target:<span class="category-text"> ${o.target}</span>
                 </p>
               </li>
             </ul>
           </li>
    `).join("");v.innerHTML=s}export{oe as p};
//# sourceMappingURL=favorites-9a5e70ce.js.map
