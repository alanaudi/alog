<script lang="ts">
  import { browser } from '$app/env'
  import './theme-switch.scss'
  import { theme } from '$stores'

  if (typeof localStorage !== 'undefined') {
    if (
      localStorage.theme === 'light' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      theme.set('light')
    }
  }

  const handleClick = () => {
    if ($theme === 'light') {
      switchTheme('dark')
    } else if ($theme === 'dark') {
      switchTheme('light')
    }
  }

  const switchTheme = (target: string) => {
    if (browser) {
      theme.set(target)
      localStorage.theme = target
      document.documentElement.dataset.theme = $theme
    }
  }
</script>

<button class="theme-switch" on:click={handleClick}>
  {$theme}
</button>
