<script lang="ts">
  import './social-links.scss'
  import { Icon } from '$components'
  import { socialLinks } from '$utils'

  const target = '_blank'
  const rel = 'noreferrer noopener nofollow'
</script>

<ul class="flex space-x-12">
  {#each socialLinks as { name, icon, href } (name)}
    <li>
      <a class="social-link" {href} {target} {rel}>
        <Icon name={icon} />
      </a>
    </li>
  {/each}
</ul>
