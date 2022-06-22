<script lang="ts">
  import './footer.scss'
  import PoweredByVercel from './powered-by-vercel.svelte'
  import ThemeSwitch from './theme-switch.svelte'
  import SocialLinks from './social-links.svelte'
  import { footerHeight } from '$stores'
</script>

<footer bind:offsetHeight={$footerHeight}>
  <PoweredByVercel />
  <SocialLinks />
  <ThemeSwitch />
</footer>
