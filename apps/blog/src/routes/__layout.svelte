<script lang="ts">
  /**
   * CSS Reset / Normalization
   */
  // normalize.css
  // import '@unocss/reset/normalize.css'
  // reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
  // import '@unocss/reset/eric-meyer.css'
  // preflights from tailwind
  import '@unocss/reset/tailwind.css'

  /**
   * Styling
   */
  import 'uno.css'
  import '../styles/app.scss'

  import { Footer, Nav } from '$components'
</script>

<Nav />
<slot />
<Footer />
