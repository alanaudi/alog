<script lang="ts">
  import { Button } from '$ui'

  export let as: 'a' | 'button'
</script>

<Button {as} {...$$restProps}>
  <slot />
</Button>
