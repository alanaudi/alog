<script lang="ts">
  import { Button } from '$ui'

  export let as: 'a' | 'button'
</script>

<Button class="nav-link" {as} {...$$restProps}>
  <slot />
</Button>
