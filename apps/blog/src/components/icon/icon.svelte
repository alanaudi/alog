<script lang="ts">
  import { onMount, type SvelteComponent } from 'svelte'

  let Icon: SvelteComponent

  /**
   * @prop {string} name - Icon name
   */
  export let name: string

  /**
   * @prop {string} [source="iconoir"] - Icon source
   * @see https://iconoir.com/ - default icon source
   * @see https://icones.js.org/ - fantastic icon sources
   */
  export let source: string = 'iconoir'

  /**
   * @prop {string|null} [className=null] - class attribute
   */
  let className: string | null = null

  export { className as class }

  onMount(async () => {
    if (name !== undefined) {
      Icon = (await import(`./${source}/${name}.svelte`)).default
    }
  })
</script>

{#if Icon}
  <span class={className}>
    <svelte:component this={Icon} />
  </span>
{:else}
  <!-- placeholder -->
  <span class="w-4 h-4" />
{/if}
