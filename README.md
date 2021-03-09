# Vue 3 Realword app with Server Side Sendering (SSR)

<<<<<<< HEAD
> :shit: coded version of [original repo](https://github.com/mutoe/vue3-realworld-example-app) with working SSR, made with :heart:
=======
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/mutoe/vue3-realworld-example-app/Test/master?label=master&logo=github&style=for-the-badge)](https://github.com/mutoe/vue3-realworld-example-app/actions?query=branch%3Amaster)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/mutoe/vue3-realworld-example-app/Test/script-setup?label=script-setup&logo=github&style=for-the-badge)](https://github.com/mutoe/vue3-realworld-example-app/actions?query=branch%3Ascript-setup)

[![Codecov branch](https://img.shields.io/codecov/c/github/mutoe/vue3-realworld-example-app/master?label=master&logo=codecov&style=flat-square)](https://app.codecov.io/gh/mutoe/vue3-realworld-example-app/branch/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/mutoe/vue3-realworld-example-app/script-setup?label=script-setup&logo=codecov&style=flat-square)](https://app.codecov.io/gh/mutoe/vue3-realworld-example-app/branch/script-setup)

> ### [Vue3](https://v3.vuejs.org/) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.
>>>>>>> upstream/master

This is an experiment with a try to make _normal_ (at least working) SSR. Don't perceive the code as production-ready.  
If you know how to make things better, PRs are welcome

<<<<<<< HEAD
## Getting started

```shell script
git clone https://github.com/levchak0910/vue3-ssr-realworld-example-app.git
cd vue3-ssr-realworld-example-app
yarn install
yarn build-production
yarn serve-production
```

### For development
```shell script
yarn build
yarn serve
```
=======
### [Demo](https://mutoe.github.io/vue3-realworld-example-app) [RealWorld](https://github.com/gothinkster/realworld)


This codebase was created to demonstrate a fully fledged fullstack application built with **Vue3** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **Vue3** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

# What works?

- [x] [Vite](https://github.com/vitejs/vite)
- [x] [Composition API](https://composition-api.vuejs.org/)
- [x] [Suspense](https://v3.vuejs.org/guide/component-dynamic-async.html#using-with-suspense) (Experimental)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [ESLint](https://eslint.vuejs.org/)
- [x] [Vue router](https://next.router.vuejs.org/)
- [x] [Harlem](https://github.com/andrewcourtice/harlem) ([await Vuex v5](https://github.com/mutoe/vue3-realworld-example-app/issues/15))
- [x] Unit test ([Vue Test Utils](https://github.com/vuejs/vue-test-utils-next))
- [x] E2E test ([Cypress](https://docs.cypress.io))
- [x] Vetur Tools: [VTI](https://github.com/mutoe/vue3-realworld-example-app/pull/28) and [optionally IDE hints](https://github.com/mutoe/vue3-realworld-example-app/commit/8367f89a99c467d181d9c7f4144deb05cec55210#commitcomment-43957089)

#### What works in [script-setup branch](https://github.com/mutoe/vue3-realworld-example-app/tree/script-setup) (based on the master branch)

- [x] [Script setup sugar](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md)
- [ ] [Script ref sugar](https://github.com/vuejs/rfcs/blob/ref-sugar/active-rfcs/0000-ref-sugar.md)
- [x] Unit test ([Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro))
- [ ] Vetur Tools [![Vetur#2296](https://img.shields.io/github/issues/detail/state/vuejs/vetur/2296?label=vetur%232296&logo=github&style=flat-square)](https://github.com/vuejs/vetur/issues/2296)

> _[Why we have the second branch?](https://github.com/mutoe/vue3-realworld-example-app/commit/c0c983dba08cb31fc96bbc3eb7f15faf469d0624#commitcomment-47600736)_

# Getting started

```shell script
yarn install

# Development
yarn dev

# Build dist
yarn build

# Run unit tests
yarn test:unit

# Run E2E tests
yarn cypress open # with GUI
yarn test:e2e # headless
```

# Contributors
>>>>>>> upstream/master

## Acknowledges

- [@mutoe](https://github.com/mutoe) and [contributors](https://github.com/mutoe/vue3-realworld-example-app#contributors) - for original repo
- [@andrewcourtice](https://github.com/andrewcourtice) - for [state manager](https://github.com/andrewcourtice/harlem) with [ssr support](https://github.com/andrewcourtice/harlem/blob/main/plugins/ssr)
- [@tbgse](https://github.com/tbgse) - for [example](https://github.com/tbgse/vue3-vite-ssr-example) how to use vite for creating ssr bundles

## Vue related implementations of the Realworld app
<<<<<<< HEAD
[gothinkster/vue-realworld-example-app](https://github.com/gothinkster/vue-realworld-example-app) - vue2, js  
[AlexBrohshtut/vue-ts-realworld-app](https://github.com/AlexBrohshtut/vue-ts-realworld-app) - vue2, ts, class-component  
[devJang/nuxt-realworld](https://github.com/devJang/nuxt-realworld) - nuxt, ts, composition api  
[mutoe/vue3-realworld-example-app](https://github.com/mutoe/vue3-realworld-example-app) - vue3, vite, ts, composition api  
=======

- [gothinkster/vue-realworld-example-app](https://github.com/gothinkster/vue-realworld-example-app) - vue2, js
- [AlexBrohshtut/vue-ts-realworld-app](https://github.com/AlexBrohshtut/vue-ts-realworld-app) - vue2, ts, class-component
- [devJang/nuxt-realworld](https://github.com/devJang/nuxt-realworld) - nuxt, ts, composition api
- [levchak0910/vue3-ssr-realworld-example-app](https://github.com/levchak0910/vue3-ssr-realworld-example-app) - vue3, ssr
>>>>>>> upstream/master
