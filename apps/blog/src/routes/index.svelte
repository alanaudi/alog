<script lang="ts">
  import { ALOG_VERSION } from '$lib/utils'
</script>

<h1 class="font-bold text-4xl">Welcome to SvelteKit</h1>
<p class="font-semibold text-2xl">
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<p>App Version: {ALOG_VERSION}</p>

<style lang="scss">
  p {
    & a {
      color: $secondary;
    }
  }
</style>
