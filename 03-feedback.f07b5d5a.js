var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a={save:(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.log("Remove item error",e.message)}}},n=r("kEUo3");const s=document.querySelector(".feedback-form");let l={};(()=>{const e=a.load("feedback-form-state");if(void 0!==e){console.log(s.elements);for(const t of Object.keys(e))e.hasOwnProperty(t)&&(s.elements[t].value=e[t]);l=e}})();s.addEventListener("input",n.throttle((e=>{const{target:t}=e,o=t.name,r=t.value;l[o]=r,a.save("feedback-form-state",l)}),500)),s.addEventListener("submit",(e=>{e.preventDefault(),e.target.reset(),a.remove("feedback-form-state"),console.log(l),l={}}));
//# sourceMappingURL=03-feedback.f07b5d5a.js.map