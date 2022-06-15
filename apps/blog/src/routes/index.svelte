<script lang="ts">
  import { ALOG_VERSION } from '$utils'
  import { Footer, Nav } from '$components'
</script>

<Nav />
<main class="grid place-items-center">
  <p class="">App Version: {ALOG_VERSION}</p>
</main>
<Footer />

<style lang="scss">
  main {
    @apply flex-1 bg-black/10;
  }
</style>
