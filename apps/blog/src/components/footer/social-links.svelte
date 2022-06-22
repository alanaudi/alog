<script lang="ts">
  import './social-links.scss'
  import { Icon } from '$components'
  import { socialLinks } from '$utils'

  const target = '_blank'
  const rel = 'noreferrer noopener nofollow'
</script>

<ul class="social-links-container">
  {#each socialLinks as { name, icon, href } (name)}
    <li>
      <a class="social-link" {href} {target} {rel} aria-label={name}>
        <Icon name={icon} />
      </a>
    </li>
  {/each}
</ul>
