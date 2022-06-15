<script lang="ts">
  import './footer.scss'
  import PoweredByVercel from './powered-by-vercel.svelte'
  import { footerHeight } from '$stores'
</script>

<footer bind:offsetHeight={$footerHeight}>
  <PoweredByVercel />
  <p>This is footer.</p>
</footer>
