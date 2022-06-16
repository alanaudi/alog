<script lang="ts">
  import { ALOG_VERSION } from '$utils'
  import { Footer, Nav, Tag } from '$components'
  import { writable } from 'svelte/store'
  const divClick = writable(0)

  const tags = [
    {
      name: 'svelte',
      icon: 'svgporn:svelte',
    },
    {
      name: 'unocss',
      icon: 'svgporn:unocss,invert',
    },
  ]

  const handleClick = (e: MouseEvent) => {
    const tag = (e.target as HTMLElement).closest('a')
    console.log((tag as HTMLElement).dataset.group)
    divClick.set($divClick + 1)
  }
</script>

<Nav />
<main class="flex flex-col px-8">
  <p class="">App Version: {ALOG_VERSION}</p>
  <h2>Tags</h2>
  <h1>{$divClick}</h1>
  <div on:click={handleClick}>
    <div class="flex space-x-2">
      {#each tags as { name, icon } (name)}
        <Tag group="home" {name} {icon} />
      {/each}
    </div>
  </div>
</main>
<Footer />

<style lang="scss">
  main {
    @apply flex-1;
  }
</style>
