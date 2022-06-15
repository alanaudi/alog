import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import Unocss from 'unocss/vite'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const file = fileURLToPath(new URL('package.json', import.meta.url))
const json = readFileSync(file, 'utf-8')
const pkg = JSON.parse(json)

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "./src/styles/variables.scss" as *;',
      },
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $components: './src/components',
      $stores: './src/stores',
      $ui: './src/ui',
      $utils: './src/utils',
    },
    vite: {
      plugins: [
        Unocss({
          /* options */
        }),
      ],
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/styles/variables.scss" as *;',
          },
        },
      },
      define: {
        __ALOG_VERSION__: JSON.stringify(pkg.version),
      },
    },
  },
}

export default config
