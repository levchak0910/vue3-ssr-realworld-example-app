# Vue 3 Realword app with Server Side Sendering (SSR)

This is an experiment with a try to clone the [original repo](https://github.com/mutoe/vue3-realworld-example-app) and add SSR using latest [Vite2](https://github.com/vitejs/vite) features



# What works?

- [x] [Vite](https://github.com/vitejs/vite)
- [x] [Composition API](https://composition-api.vuejs.org/)
- [x] [Suspense](https://v3.vuejs.org/guide/component-dynamic-async.html#using-with-suspense)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [ESLint](https://eslint.vuejs.org/)
- [x] [Vue router](https://next.router.vuejs.org/)
- [x] [Harlem](https://github.com/andrewcourtice/harlem)
- [x] Vetur Tools: [VTI](https://vuejs.github.io/vetur/guide/vti.html) and [Interpolation](https://vuejs.github.io/vetur/guide/interpolation.html)
- [x] [SSR](https://v3.vuejs.org/guide/ssr/introduction.html) with [Vite2 HMR](https://vitejs.dev/guide/ssr.html)

## Getting started

```shell script
git clone https://github.com/levchak0910/vue3-ssr-realworld-example-app.git
cd vue3-ssr-realworld-example-app
yarn install
yarn build
yarn serve
```

### For development
```shell script
yarn dev
```

## Acknowledges

- [@mutoe](https://github.com/mutoe) and [contributors](https://github.com/mutoe/vue3-realworld-example-app#contributors) - for original repo
- [@andrewcourtice](https://github.com/andrewcourtice) - for [state manager](https://github.com/andrewcourtice/harlem) with [ssr support](https://github.com/andrewcourtice/harlem/blob/main/plugins/ssr)
- [@tbgse](https://github.com/tbgse) - for [example](https://github.com/tbgse/vue3-vite-ssr-example) how to use vite for creating ssr bundles
- [@yyx990803](https://github.com/yyx990803) - for another [example](https://github.com/vitejs/vite/tree/main/packages/playground/ssr-vue) how to use vite2 for creating ssr apps

## Vue related implementations of the Realworld app
[gothinkster/vue-realworld-example-app](https://github.com/gothinkster/vue-realworld-example-app) - vue2, js  
[AlexBrohshtut/vue-ts-realworld-app](https://github.com/AlexBrohshtut/vue-ts-realworld-app) - vue2, ts, class-component  
[devJang/nuxt-realworld](https://github.com/devJang/nuxt-realworld) - nuxt, ts, composition api  
[mutoe/vue3-realworld-example-app](https://github.com/mutoe/vue3-realworld-example-app) - vue3, vite, ts, composition api  
