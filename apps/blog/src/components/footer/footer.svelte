<script lang="ts">
  import './footer.scss'
  import { footerHeight } from '$stores'
</script>

<footer bind:offsetHeight={$footerHeight}>
  <p>This is footer.</p>
</footer>
