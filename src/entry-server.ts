/* eslint-disable @typescript-eslint/no-var-requires */

// client related imports
import { createSSRApp } from 'vue'
import renderer from '@vue/server-renderer'
import App from './App.vue'

import Harlem from '@harlem/core'
import { createServerSSRPlugin, getBridgingScriptBlock } from '@harlem/plugin-ssr'

import { generateRouter } from './router'

import registerGlobalComponents from './plugins/global-components'
import { initStore } from './store/init'
import type { ParameterizedContext } from 'koa'

// server related imports
const Koa = require('koa')
const sendFile = require('koa-send')
const path = require('path')
const fs = require('fs')

const server = new Koa()

const clientRoot = path.join(__dirname, '../client')
const indexHtmlPath = path.join(clientRoot, 'index.html')
const indexHtml = fs.readFileSync(indexHtmlPath, { encoding: 'utf-8' })

server.use(async (ctx: ParameterizedContext) => {
  // send static file
  if (ctx.path.startsWith('/_assets')) {
    await sendFile(ctx, ctx.path, { root: clientRoot })
    return
  }

  // go to vue app rendering
  const app = createSSRApp(App)
  const router = generateRouter('ssr')

  // create and initialize store
  app.use(Harlem, { plugins: [createServerSSRPlugin()] })
  initStore(ctx)

  registerGlobalComponents(app)

  app.use(router)

  await router.push(ctx.path)
  await router.isReady()

  if (router.currentRoute.value.matched.length === 0) {
    ctx.throw(404, 'Not Found')
  }

  let renderedHtml = await renderer.renderToString(app)
  renderedHtml += getBridgingScriptBlock()
  const finalHtml = indexHtml.replace('<div id="app">', `<div id="app" data-server-rendered="true">${renderedHtml}`)
  ctx.body = finalHtml
})

server.listen(8080, () => console.log('started server on http://localhost:8080'))
