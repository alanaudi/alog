<script lang="ts">
  import './powered-by-vercel.scss'
  import { Icon } from '$components'

  export let href: string = 'https://vercel.com/#get-started'
</script>

<a
  class="powered-by-vercel"
  {href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Powered by Vercel"
>
  <Icon source="custom" name="powered-by-vercel" />
</a>
