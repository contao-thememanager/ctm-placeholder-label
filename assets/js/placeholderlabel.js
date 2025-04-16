class PlaceholderLabel {

    _m(a, b)
    {
        return[...new Set([...Object.keys(a),...Object.keys(b)])].reduce((c,k)=>({...c,[k]:"object"===typeof(a[k])?Object.assign({},a[k],b[k]):!b[k]?a[k]:b[k]}),{})
    }

    _init(i)
    {
        i.forEach((i) => {
            if (!i.placeholder)
                i.placeholder = " ";

            if (!i.value && i.selectedIndex > -1 && i.options[i.selectedIndex].innerText.trim().length > 0)
                i.classList.add('pl-fill')
        })
    }

    constructor(o) {
        this.o = this._m({
            selector: 'form',
            excludeClass: 'pl-none',
            include: [
                '.pl-parent input',
                '.pl-parent select',
                '.pl-parent textarea'
            ]
        }, o || {})

        document.querySelectorAll(this.o.selector).forEach(f => {
            if (f.classList.contains(this.o.excludeClass))
                return

            const i = Object.values(this.o.include).join(',');

            this._init(f.querySelectorAll(i));

            new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    const e = mutation.target.matches(i) ? mutation.target : mutation.target.querySelectorAll(i);
                    this._init(e)
                });
            }).observe(document, { attributes: false, childList: true, subtree: true });
        })
    }
}

module.exports = PlaceholderLabel;
