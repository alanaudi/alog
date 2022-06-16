<script lang="ts">
  import './tag.scss'
  import { Icon } from '$components'

  export let icon: string
  export let group: 'home' | 'post' | 'post-card'

  let source: string
  let name: string
  ;[source, name] = icon.split(':')
</script>

<a
  class="tag"
  href="/"
  data-group="{group}-tag"
  data-icon={name}
  {...$$restProps}
>
  <Icon class="inline-flex items-center" {source} {name} />
  <span>{name}</span>
</a>
