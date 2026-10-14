(() => {
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let lang=localStorage.getItem("genesis-lang")||"en";
const body=document.body;
if(localStorage.getItem("genesis-theme")==="light")body.classList.add("light-mode");
function applyLanguage(next){
lang=next;body.classList.toggle("fa-mode",lang==="fa");document.documentElement.lang=lang;document.documentElement.dir=lang==="fa"?"rtl":"ltr";
$$("[data-en][data-fa]").forEach(el=>{const v=el.dataset[lang];if(v!==undefined)el.innerHTML=v});
$$("[data-en-placeholder][data-fa-placeholder]").forEach(el=>el.placeholder=lang==="fa"?el.dataset.faPlaceholder:el.dataset.enPlaceholder);
$$("[data-question][data-fa-question]").forEach(el=>el.textContent=lang==="fa"?el.dataset.faQuestion:el.dataset.question);
const toggle=$("#langToggle");if(toggle)toggle.textContent=lang==="en"?"FA":"EN";
$$("[data-page-link]").forEach(a=>a.classList.toggle("active",a.dataset.pageLink===body.dataset.page));
localStorage.setItem("genesis-lang",lang);
document.title=lang==="fa"?"GENESIS AI | پروژه مفهومی علوم اعصاب":"GENESIS AI | "+(document.querySelector("h1")?.textContent||"Neurotech Initiative");
}
$("#langToggle")?.addEventListener("click",()=>applyLanguage(lang==="en"?"fa":"en"));
$("#themeToggle")?.addEventListener("click",()=>{body.classList.toggle("light-mode");localStorage.setItem("genesis-theme",body.classList.contains("light-mode")?"light":"dark");const i=document.querySelector(".theme-icon");if(i)i.textContent=body.classList.contains("light-mode")?"☾":"☼"});
if(body.classList.contains("light-mode")&&document.querySelector(".theme-icon"))document.querySelector(".theme-icon").textContent="☾";
$("#menuToggle")?.addEventListener("click",()=>{const nav=$("#mainNav"),btn=$("#menuToggle"),open=nav.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));btn.setAttribute("aria-label",open?"Close navigation":"Open navigation")});
$$(".agenda-item").forEach(item=>item.addEventListener("click",()=>{const expanded=item.getAttribute("aria-expanded")==="true";item.setAttribute("aria-expanded",String(!expanded));item.querySelector(".agenda-toggle").textContent=expanded?"+":"−"}));
$("#copyAddress")?.addEventListener("click",async()=>{const feedback=$("#copyFeedback");try{await navigator.clipboard.writeText($("#copyAddress").dataset.address);feedback.textContent=lang==="fa"?"اطلاعات محل کپی شد.":"Venue details copied."}catch{feedback.textContent=$("#copyAddress").dataset.address}});
applyLanguage(lang);window.GENESIS={get lang(){return lang},applyLanguage};
})();