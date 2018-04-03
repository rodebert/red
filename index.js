
const Vue = require('vue')
const app = new Vue({
    template: `<div>Hello World</div>`
})

// Step 2: Create a renderer
const renderer = require('vue-server-renderer').createRenderer()

// in 2.5.0+, returns a Promise if no callback is passed:
renderer.renderToString(app).then(html => {
    console.log(html)
}).catch(err => {
    console.error(err)
})

