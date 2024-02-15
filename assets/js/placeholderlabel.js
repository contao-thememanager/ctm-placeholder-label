(()=>{var e={454:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},810:()=>{!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,r;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}()},379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var u=e[o],c=t.base?u[0]+t.base:u[0],l=n[c]||0,s="".concat(c," ").concat(l);n[c]=l+1;var d=i(s),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:m(f,t),references:1}),r.push(s)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,p=0;function m(e,t){var n,r,o;if(t.singleton){var a=p++;n=v||(v=c(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var c=u(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=c}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),r=n(454);function o(e){if(!e.hasAttribute("autocompleted")){e.setAttribute("autocompleted","");var t=new window.CustomEvent("onautocomplete",{bubbles:!0,cancelable:!0,detail:null});e.dispatchEvent(t)||(e.value="")}}function a(e){e.hasAttribute("autocompleted")&&(e.removeAttribute("autocompleted"),e.dispatchEvent(new window.CustomEvent("onautocomplete",{bubbles:!0,cancelable:!1,detail:null})))}t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,n(810),document.addEventListener("animationstart",(function(e){"onautofillstart"===e.animationName?o(e.target):a(e.target)}),!0),document.addEventListener("input",(function(e){"insertReplacementText"!==e.inputType&&"data"in e?a(e.target):o(e.target)}),!0)})()})();

class PlaceholderLabel {
    constructor(o) {
        this.o = this._m({
            selector: 'form',
            excludeClass: 'pl-none',
            autofill: true,
            inputs: {
                parent: 'div.widget',
                label:  'label',
                include: [
                    'input',
                    'select',
                    'textarea'
                ],
                exclude: [
                    '[type="checkbox"]',
                    '[type="radio"]',
                    '[type="range"]',
                    '[type="hidden"]',
                    '[type="submit"]',
                    '[type="file"]',
                    '[class="rsas-field"]'
                ]
            },
            onFocus: () => {},
            onBlur: () => {},
            onChange: () => {},
            onInit: () => {}
        }, o || {})

        this.f = document.querySelectorAll(this.o.selector)

        if(!this.f.length)
            return

        this.c = {
            i: 'pl-init',
            p: 'pl-parent',
            f: '_focus',
            b: '_blur',
            c: '_changed',
            l: '_filled'
        }

        this._i()
    }

    _m(a, b)
    {
        return[...new Set([...Object.keys(a),...Object.keys(b)])].reduce((c,k)=>({...c,[k]:"object"===typeof(a[k])?Object.assign({},a[k],b[k]):!b[k]?a[k]:b[k]}),{})
    }

    _i()
    {
        this.b = []

        for(let f of this.f)
        {
            if(!!this.o.excludeClass && f.classList.contains(this.o.excludeClass))
                return

            if(f.hasOwnProperty('phl'))
                continue

            f.classList.add(this.c.i)
            f.phl = {
                i: true,
                p: []
            }

            let p = f.querySelectorAll(this.o.inputs.include.join(','))

            if(!p.length)
                continue

            let a = [...p].filter(i => !i.matches(this.o.inputs.exclude.join(',')))

            a.forEach((i) => {
                this._r(f, i)
                this._u(i)
            })

            this.b.push({
                f: f,
                p: a
            })
        }

        this.o.onInit.call(this)
    }

    _r(f, i)
    {
        let p = i.closest(this.o.inputs.parent)

        if (p)
        {
            let c = new Event('change');

            i.addEventListener('onautocomplete', (e) => {e.currentTarget.dispatchEvent(c)}, false)
            i.addEventListener('focus',  (e) => { this._e(e) }, false)
            i.addEventListener('blur',   (e) => { this._e(e) }, false)
            i.addEventListener('change', (e) => { this._e(e) }, false)

            p.classList.add(this.c.p)

            i.phl = {
                l: p.querySelector(this.o.inputs.label),
                p: p
            }

            f.phl.p.push(i)
        }
    }

    _e(e)
    {
        let i = e.target
        let p = e.target.phl.p

        switch (e.type)
        {
            case 'focus':
                p.classList.add(this.c.f)
                p.classList.remove(this.c.b)
                this.o.onFocus.call(this, e, i)
                break

            case 'blur':
                p.classList.add(this.c.b)
                p.classList.remove(this.c.f)
                this.o.onBlur.call(this, e, i)
                break

            case 'change':
                p.classList.add(this.c.c)
                this.o.onChange.call(this, e, i)

                if(i.nodeName.toLowerCase() === 'select')
                    this._u(i)

                break
        }

        if(i.nodeName.toLowerCase() !== 'select')
            this._u(i)
    }

    _u(i, a)
    {
        let p = i.phl?.p

        if (p)
        {
            let t = i.nodeName.toLowerCase()

            let f = t === 'select' && i.value.length === 0 && i.options[i.selectedIndex]?.innerHTML.replace(/&nbsp;/g,' ').trim()
            let e = t === 'select' && i.options[i.selectedIndex]?.innerHTML === '&nbsp;'

            if ((i.value.length === 0 && !i.matches(':-webkit-autofill') && !f && i.placeholder === '') || e)
                p.classList.remove(this.c.l)
            else
                p.classList.add(this.c.l)

            if(!!a && this.o.autofill)
            {
                let n = 0
                let m = setInterval(() => {
                    this._u(i)

                    if(n++ === 5) clearInterval(m)
                },50)
            }
        }
    }

    add(f, i)
    {
        this._r(f, i)
    }
}

window.PlaceholderLabel = PlaceholderLabel;
