<script lang="ts">
  import { ALOG_VERSION } from '$utils'
  import { Footer, Nav } from '$components'
</script>

<Nav />
<main class="flex flex-col px-8">
  <p class="">App Version: {ALOG_VERSION}</p>
</main>
<Footer />

<style lang="scss">
  main {
    @apply flex-1;
  }
</style>
