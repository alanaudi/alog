import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'
import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        logo: 'Jost',
        number: 'M PLUS 1p',
      },
    }),
  ],
  transformers: [transformerDirective(), transformerVariantGroup()],
})
