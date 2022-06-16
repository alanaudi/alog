<script lang="ts">
  import { ALOG_VERSION } from '$utils'
  import { Footer, Helmet, Nav } from '$components'
</script>

<Helmet title="Home" />
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
