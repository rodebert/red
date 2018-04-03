const Vue = require('vue')
const server = require('express')()

// Step 2: Create a renderer
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.tmpl.html', 'utf-8')
})

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>The visited URL is: {{ url }}</div>`
    })

    const context = {
        title: 'hello',
        meta: '<meta charset="utf-8">'
    }

    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(html)
    })
})

server.listen(8090)
