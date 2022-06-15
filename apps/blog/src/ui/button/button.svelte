<script lang="ts">
  export let as: 'a' | 'button'
  // let className: string
  // export { className as class }
</script>

<svelte:element this={as} {...$$restProps}>
  <slot />
</svelte:element>
