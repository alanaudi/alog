<script lang="ts">
  import './nav.scss'
  import NavLink from './nav-link.svelte'
  import { navHeight } from '$stores'

  const navLinks = [
    {
      title: 'Blog',
      href: '/',
    },
    {
      title: 'Bookmark',
      href: '/',
    },
  ]
</script>

<nav bind:offsetHeight={$navHeight}>
  <a href="/">Logo</a>
  <ul class="nav-link-container">
    {#each navLinks as { title, href } (title)}
      <li>
        <NavLink as="a" {href}>{title}</NavLink>
      </li>
    {/each}
  </ul>
</nav>
