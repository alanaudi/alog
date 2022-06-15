import { defineConfig } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  transformers: [transformerDirective(), transformerVariantGroup()],
})
