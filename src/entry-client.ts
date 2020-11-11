import { createSSRApp } from 'vue'
import App from './App.vue'
import { generateRouter } from './router'

import Harlem from '@harlem/core'
import { createClientSSRPlugin } from '@harlem/plugin-ssr'

import registerGlobalComponents from './plugins/global-components'
import setAuthorizationToken from './plugins/set-authorization-token'

const router = generateRouter('client')

const app = createSSRApp(App)
app.use(router)

app.use(Harlem, {
  plugins: [createClientSSRPlugin()],
})

setAuthorizationToken()
registerGlobalComponents(app)

// eslint-disable-next-line @typescript-eslint/no-floating-promises
router.isReady().then(() => {
  // this will hydrate the app
  app.mount('#app', true)
})
