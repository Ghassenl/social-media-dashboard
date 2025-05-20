<template>
  <div class="bg-card rounded-lg p-8 hover:brightness-110 transition-all duration-200 cursor-pointer">
    <div class="flex items-center justify-between mb-6">
      <span class="text-text-secondary text-lg">{{ title }}</span>
      <img :src="platformIcon" :alt="platform" class="w-8 h-8" />
    </div>
    <div class="flex items-center justify-between">
      <span class="text-5xl font-bold text-text-primary">{{ formatNumber(value) }}</span>
      <div class="flex items-center gap-2" :class="trend > 0 ? 'text-accent-green' : 'text-accent-red'">
        <span class="text-lg">{{ trend > 0 ? '▲' : '▼' }}</span>
        <span class="text-lg font-medium">{{ Math.abs(trend) }}%</span>
      </div>
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
    required: true
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
  if (num >= 10000) {
    return Math.floor(num / 1000) + 'K'
  }
  return num.toString()
}
</script> 