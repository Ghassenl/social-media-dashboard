<template>
  <div class="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-secondary">{{ title }}</h3>
      <img :src="platformIcon" :alt="platform" class="w-6 h-6"/>
    </div>
    <div class="text-3xl font-bold text-primary mb-2">
      {{ formatNumber(value) }}
    </div>
    <div class="flex items-center">
      <span :class="[
        'text-sm font-medium',
        trend > 0 ? 'text-green-500' : 'text-red-500'
      ]">
        {{ trend > 0 ? '↑' : '↓' }} {{ Math.abs(trend) }}%
      </span>
      <span class="text-accent text-sm ml-2">vs last period</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  trend: {
    type: Number,
    default: 0
  },
  platform: {
    type: String,
    required: true
  },
  platformIcon: {
    type: String,
    required: true
  }
})

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}
</script> 