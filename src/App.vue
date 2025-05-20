<script setup>
import Dashboard from './components/Dashboard.vue'
</script>

<template>
  <router-view />
</template>

<style>
:root {
  --color-dark: #1E202A;
  --color-darker: #1F212E;
  --color-card: #252A41;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #8B97C6;
}

:root[data-theme="light"] {
  --color-dark: #FFFFFF;
  --color-darker: #F5F7FF;
  --color-card: #F0F2FA;
  --color-text-primary: #1E202A;
  --color-text-secondary: #63687E;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
