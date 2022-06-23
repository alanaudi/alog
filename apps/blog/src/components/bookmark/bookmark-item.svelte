<script lang="ts">
  import './bookmark-item.scss'
  import { Icon } from '$components'

  export let href: string
  export let title: string
  export let icon: string
  export let tags: string

  let customIcon: boolean = !icon.startsWith('http')
</script>

<a class="bookmark-item" {href} target="_blank">
  {#if customIcon}
    <Icon class="w-8 h-8 flex items-center" name="github" />
  {:else}
    <img class="w-8 h-8" src={icon} alt={title} />
  {/if}
  <span>{title}</span>
</a>
