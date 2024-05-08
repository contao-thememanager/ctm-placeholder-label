const esbuild = require('esbuild');

// Browser
esbuild.build({
    entryPoints: ['./assets/js/placeholderlabel.js'],
    outfile: './public/assets/dist/placeholderlabel.js',
    minify: true,
    bundle: true,
    sourcemap: false,
    format: 'iife',
    globalName: 'PlaceholderLabel',
    target: ['es2015']
}).catch((e) => console.error(e.message))
