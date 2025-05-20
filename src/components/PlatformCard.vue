<template>
  <div class="bg-card rounded-lg overflow-hidden hover:brightness-110 transition-all duration-200 cursor-pointer">
    <div :class="`h-1 w-full ${platformColor}`"></div>
    <div class="p-8">
      <div class="flex items-center justify-center gap-3 mb-6">
        <img :src="platformIcon" :alt="platform" class="w-8 h-8" />
        <span class="text-text-secondary text-lg">@{{ username }}</span>
      </div>
      <div class="text-center">
        <div class="text-7xl font-bold text-text-primary mb-2">{{ formatNumber(followers) }}</div>
        <div class="text-text-secondary uppercase tracking-[5px] text-lg mb-6">Followers</div>
      </div>
      <div class="flex items-center justify-center gap-2" :class="trend > 0 ? 'text-accent-green' : 'text-accent-red'">
        <span class="text-lg">{{ trend > 0 ? '▲' : '▼' }}</span>
        <span class="text-lg font-medium">{{ Math.abs(trend) }} Today</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  platform: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  followers: {
    type: Number,
    required: true
  },
  trend: {
    type: Number,
    required: true
  },
  platformIcon: {
    type: String,
    required: true
  },
  platformColor: {
    type: String,
    required: true
  }
})

const formatNumber = (num) => {
  if (num >= 10000) {
    return Math.floor(num / 1000) + 'k'
  }
  return num.toString()
}
</script> 