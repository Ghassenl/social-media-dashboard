import { ref } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  }

  // Initialize theme
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')

  return {
    isDark,
    toggleTheme
  }
} 