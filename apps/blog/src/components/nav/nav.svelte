<script lang="ts">
  import './nav.scss'
  import NavLink from './nav-link.svelte'
  import { page } from '$app/stores'
  import { navHeight } from '$stores'
  import { writable } from 'svelte/store'

  const currentLeft = writable(0)

  const navLinks = [
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Bookmark',
      href: '/bookmark',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Snippet',
      href: '/snippet',
    },
  ]

  // TODO: fancy nav inidcator
  // const handleNavClick = (e: MouseEvent) => {
  //   const navLinks = document.querySelectorAll('.nav-link')
  //   console.log($page.url.pathname)

  //   for (let i = 0; i < navLinks.length; i++) {
  //     if (navLinks[i] === e.target) {
  //       navLinks[i].setAttribute('aria-current', 'page')
  //       currentLeft.set(e.target.offsetLeft + e.target.offsetWidth / 2)
  //     } else {
  //       navLinks[i].removeAttribute('aria-current')
  //     }
  //   }
  // }
</script>

<nav bind:offsetHeight={$navHeight}>
  <a class="logo" href="/">ALOG</a>
  <ul
    class="nav-link-container"
    style={`--nav-indicator-dot-left: ${$currentLeft}px`}
  >
    {#each navLinks as { title, href } (title)}
      <li>
        <NavLink
          as="a"
          aria-current={$page.url.pathname === href ? 'page' : null}
          {href}>{title}</NavLink
        >
      </li>
    {/each}
  </ul>
</nav>
