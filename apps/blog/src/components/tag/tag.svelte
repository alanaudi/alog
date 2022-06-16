<script lang="ts">
  import './tag.scss'
  import { Icon } from '$components'
  import { theme } from '$stores'

  export let icon: string
  export let group: 'home' | 'post' | 'post-card'

  let source: string
  let name: string
  let _icon: string
  let option: string
  ;[_icon, option] = icon.split(',')
  ;[source, name] = _icon.split(':')
</script>

<a
  class="tag"
  href="/"
  data-group="{group}-tag"
  data-icon={name}
  {...$$restProps}
>
  <Icon
    class="icon"
    {source}
    {name}
    style={$theme === 'dark' && option === 'invert'
      ? 'filter: invert(100%);'
      : null}
  />
  <span>{name}</span>
</a>
