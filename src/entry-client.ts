import { createSSRApp } from 'vue'

import { createRouter } from './router'

import App from './App.vue'

import Harlem from '@harlem/core'
import { createClientSSRPlugin } from '@harlem/plugin-ssr'

import registerGlobalComponents from './plugins/global-components'
import setAuthorizationToken from './plugins/set-authorization-token'

const router = createRouter('client')

const app = createSSRApp(App)
app.use(router)

app.use(Harlem, {
  plugins: [createClientSSRPlugin()],
})

setAuthorizationToken()
registerGlobalComponents(app)

// eslint-disable-next-line @typescript-eslint/no-floating-promises
router.isReady().then(() => {
  app.mount('#app', true)
})
