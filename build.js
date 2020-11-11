const { ssrBuild, build } = require('vite');

(async () => {
  await build({
    esbuildTarget: 'es2018',
    outDir: 'dist/client',
    rollupInputOptions: {
      input: './src/entry-client.ts'
    },
  })

  await ssrBuild({
    esbuildTarget: 'es2018',
    outDir: 'dist/server',
    rollupInputOptions: {
      input: './src/entry-server.ts'
    },
  })
})()