var PlaceholderLabel=(()=>{var d=Object.defineProperty,f=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,n=(r,e)=>{for(var t in e||(e={}))j.call(e,t)&&i(r,t,e[t]);if(o)for(var t of o(e))y.call(e,t)&&i(r,t,e[t]);return r},a=(r,e)=>f(r,b(e));var O=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var _=O((m,h)=>{var u=class{_m(e,t){return[...new Set([...Object.keys(e),...Object.keys(t)])].reduce((c,s)=>a(n({},c),{[s]:typeof e[s]=="object"?Object.assign({},e[s],t[s]):t[s]?t[s]:e[s]}),{})}_init(e){e.forEach(t=>{t.placeholder||(t.placeholder=" ")})}constructor(e){this.o=this._m({selector:"form",excludeClass:"pl-none",include:[".pl-parent input",".pl-parent select",".pl-parent textarea"]},e||{}),document.querySelectorAll(this.o.selector).forEach(t=>{if(t.classList.contains(this.o.excludeClass))return;let c=Object.values(this.o.include).join(",");this._init(t.querySelectorAll(c)),new MutationObserver(s=>{s.forEach(l=>{let p=l.target.matches(c)?l.target:l.target.querySelectorAll(c);this._init(p)})}).observe(document,{attributes:!1,childList:!0,subtree:!0})})}};h.exports=u});return _();})();
