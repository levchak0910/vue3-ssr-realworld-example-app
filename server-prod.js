/* eslint-disable @typescript-eslint/no-var-requires */

const Koa = require('koa')
const sendFile = require('koa-send')

const path = require('path')
const fs = require('fs')

const resolve = (p) => path.resolve(__dirname, p)

const clientRoot = resolve('dist/client')
const template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
const render = require('./dist/server/entry-server.js').render
const manifest = require('./dist/client/ssr-manifest.json')

;(async () => {
  const app = new Koa()

  app.use(async (ctx) => {
  // send static file
    if (ctx.path.startsWith('/assets')) {
      await sendFile(ctx, ctx.path, { root: clientRoot })
      return
    }

    const [appHtml, preloadLinks] = await render(ctx, manifest)

    const html = template
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--app-html-->', appHtml)

    ctx.type = 'text/html'
    ctx.body = html
  })

  app.listen(8080, () => console.log('started server on http://localhost:8080'))
})()
