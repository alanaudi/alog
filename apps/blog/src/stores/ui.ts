import { writable, type Writable } from 'svelte/store'

export const navHeight: Writable<number> = writable(0)
export const footerHeight: Writable<number> = writable(0)
export const theme: Writable<string> = writable('dark')
