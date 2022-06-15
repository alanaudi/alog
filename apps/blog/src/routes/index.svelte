<script lang="ts">
  import { ALOG_VERSION } from '$utils'
  import { Footer, Nav } from '$components'
  import { footerHeight, navHeight } from '$stores'
</script>

<Nav />
<main
  style={`--current-nav-height: ${$navHeight}px;` +
    `--current-footer-height: ${$footerHeight}px;`}
  class="grid place-items-center"
>
  <p class="">App Version: {ALOG_VERSION}</p>
</main>
<Footer />

<style lang="scss">
  main {
    @apply bg-black/10;
    min-height: calc(
      100vh - var(--current-nav-height) - var(--current-footer-height)
    );
  }
</style>
