class PlaceholderLabel {

    _m(a, b)
    {
        return[...new Set([...Object.keys(a),...Object.keys(b)])].reduce((c,k)=>({...c,[k]:"object"===typeof(a[k])?Object.assign({},a[k],b[k]):!b[k]?a[k]:b[k]}),{})
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

            f.classList.add('pl-init')

            f.querySelectorAll(Object.values(this.o.include).join(',')).forEach((i) => {
                if (!i.placeholder)
                    i.placeholder = " ";
            })
        })
    }
}

module.exports = PlaceholderLabel;
