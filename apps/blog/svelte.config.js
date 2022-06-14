import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import Unocss from 'unocss/vite'

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
    },
  },
}

export default config
