<script lang="ts">
  import { BookmarkItem, Helmet } from '$components'
  import type { Bookmark } from '$types'

  export let bookmarks: Bookmark[]
</script>

<Helmet title="Bookmark" />
<main class="flex flex-col px-8">
  <div
    class="my-10 grid grid-cols-1 sm:(grid-cols-2) md:(grid-cols-3) lg:(grid-cols-4) xl:(grid-cols-5) gap-8"
  >
    {#each bookmarks as bookmark (bookmark.id)}
      <BookmarkItem {...bookmark} />
    {/each}
  </div>
</main>

<style lang="scss">
  main {
    @apply flex-1;
  }
</style>
