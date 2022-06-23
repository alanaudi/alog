<script lang="ts">
  import { Icon } from '$components'

  export let href: string
  export let title: string
  export let icon: string
  export let tags: string

  let customIcon: boolean = !icon.startsWith('http')
</script>

<a
  class="flex items-center space-x-4 px-4 py-2 border-2 rounded-lg"
  {href}
  target="_blank"
>
  {#if customIcon}
    <Icon name="github" />
  {:else}
    <img class="w-8 h-8" src={icon} alt={title} />
  {/if}
  <span>{title}</span>
</a>
