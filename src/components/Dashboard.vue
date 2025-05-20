<template>
  <div class="min-h-screen w-full bg-darker text-text-primary flex justify-center">
    <div class="w-full max-w-[1110px] px-6 py-8">
      <header class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <div>
          <h1 class="text-2xl font-bold">Social Media Dashboard</h1>
          <p class="text-text-secondary">Total Followers: {{ totalFollowers }}</p>
          <p v-if="error" class="text-accent-red mt-2">{{ error }}</p>
        </div>
        <div class="flex items-center gap-3 pt-4 sm:pt-0 border-t border-text-secondary/20 sm:border-0">
          <span class="text-text-secondary">Light Mode</span>
          <button 
            @click="toggleTheme"
            class="w-12 h-6 bg-card rounded-full relative cursor-pointer transition-colors duration-200"
            :class="{ 'bg-gradient-to-r from-[#378FE6] to-[#3EDA82]': !isDark }"
          >
            <div 
              class="w-5 h-5 bg-darker rounded-full absolute top-0.5 transition-all duration-200"
              :class="isDark ? 'right-1' : 'left-1'"
            ></div>
          </button>
        </div>
      </header>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-text-primary mx-auto"></div>
        <p class="mt-4 text-text-secondary">Loading stats...</p>
      </div>

      <template v-else>
        <!-- Platform Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <PlatformCard
            platform="facebook"
            :username="username"
            :followers="stats.followers.facebook"
            :trend="stats.trends.facebook"
            platformIcon="/icons/facebook.svg"
            platformColor="bg-facebook"
          />
          <PlatformCard
            platform="twitter"
            :username="username"
            :followers="stats.followers.twitter"
            :trend="stats.trends.twitter"
            platformIcon="/icons/twitter.svg"
            platformColor="bg-twitter"
          />
          <PlatformCard
            platform="instagram"
            :username="username"
            :followers="stats.followers.instagram"
            :trend="stats.trends.instagram"
            platformIcon="/icons/instagram.svg"
            platformColor="bg-gradient-to-r from-[#FDC468] to-[#DF4996]"
          />
          <PlatformCard
            platform="tiktok"
            :username="username"
            :followers="stats.followers.tiktok"
            :trend="stats.trends.tiktok"
            platformIcon="/icons/tiktok.svg"
            platformColor="bg-tiktok"
          />
        </div>

        <!-- Overview Section -->
        <h2 class="text-2xl font-bold mb-6">Overview - Today</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatsCard
            title="Page Views"
            :value="stats.overview.facebook.pageViews"
            :trend="stats.overview.facebook.pageViewsTrend"
            platform="facebook"
            platformIcon="/icons/facebook.svg"
          />
          <StatsCard
            title="Likes"
            :value="stats.overview.facebook.likes"
            :trend="stats.overview.facebook.likesTrend"
            platform="facebook"
            platformIcon="/icons/facebook.svg"
          />
          <StatsCard
            title="Likes"
            :value="stats.overview.instagram.likes"
            :trend="stats.overview.instagram.likesTrend"
            platform="instagram"
            platformIcon="/icons/instagram.svg"
          />
          <StatsCard
            title="Profile Views"
            :value="stats.overview.instagram.views"
            :trend="stats.overview.instagram.viewsTrend"
            platform="instagram"
            platformIcon="/icons/instagram.svg"
          />
          <StatsCard
            title="Retweets"
            :value="stats.overview.twitter.retweets"
            :trend="stats.overview.twitter.retweetsTrend"
            platform="twitter"
            platformIcon="/icons/twitter.svg"
          />
          <StatsCard
            title="Likes"
            :value="stats.overview.twitter.likes"
            :trend="stats.overview.twitter.likesTrend"
            platform="twitter"
            platformIcon="/icons/twitter.svg"
          />
          <StatsCard
            title="Likes"
            :value="stats.overview.tiktok.likes"
            :trend="stats.overview.tiktok.likesTrend"
            platform="tiktok"
            platformIcon="/icons/tiktok.svg"
          />
          <StatsCard
            title="Total Views"
            :value="stats.overview.tiktok.views"
            :trend="stats.overview.tiktok.viewsTrend"
            platform="tiktok"
            platformIcon="/icons/tiktok.svg"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '../stores/theme'
import PlatformCard from './PlatformCard.vue'
import StatsCard from './StatsCard.vue'
import { ref, computed, watchEffect } from 'vue'
import { getFacebookStats } from '../services/facebook'
import { getTwitterStats } from '../services/twitter'
import { getInstagramStats } from '../services/instagram'
import { getTikTokStats } from '../services/tiktok'

const props = defineProps({
  username: {
    type: String,
    default: ''
  }
})

const { isDark, toggleTheme } = useTheme()

const loading = ref(false)
const error = ref(null)
const socialData = ref({
  facebook: null,
  twitter: null,
  instagram: null,
  tiktok: null
})

async function fetchAllStats() {
  if (!props.username) {
    socialData.value = {
      facebook: null,
      twitter: null,
      instagram: null,
      tiktok: null
    }
    return
  }

  loading.value = true
  error.value = null

  try {
    const [facebook, twitter, instagram, tiktok] = await Promise.all([
      getFacebookStats(props.username),
      getTwitterStats(props.username),
      getInstagramStats(props.username),
      getTikTokStats(props.username)
    ])

    socialData.value = {
      facebook,
      twitter,
      instagram,
      tiktok
    }
  } catch (e) {
    error.value = 'Failed to fetch social media stats'
    console.error(e)
  } finally {
    loading.value = false
  }
}

watchEffect(() => {
  fetchAllStats()
})

const stats = computed(() => ({
  followers: {
    facebook: socialData.value.facebook?.followers ?? '-',
    twitter: socialData.value.twitter?.followers ?? '-',
    instagram: socialData.value.instagram?.followers ?? '-',
    tiktok: socialData.value.tiktok?.followers ?? '-'
  },
  trends: {
    facebook: socialData.value.facebook?.trends.followers ?? '-',
    twitter: socialData.value.twitter?.trends.followers ?? '-',
    instagram: socialData.value.instagram?.trends.followers ?? '-',
    tiktok: socialData.value.tiktok?.trends.followers ?? '-'
  },
  overview: {
    facebook: {
      pageViews: socialData.value.facebook?.pageViews ?? '-',
      likes: socialData.value.facebook?.likes ?? '-',
      pageViewsTrend: socialData.value.facebook?.trends.pageViews ?? '-',
      likesTrend: socialData.value.facebook?.trends.likes ?? '-'
    },
    instagram: {
      likes: socialData.value.instagram?.likes ?? '-',
      views: socialData.value.instagram?.views ?? '-',
      likesTrend: socialData.value.instagram?.trends.likes ?? '-',
      viewsTrend: socialData.value.instagram?.trends.views ?? '-'
    },
    twitter: {
      retweets: socialData.value.twitter?.retweets ?? '-',
      likes: socialData.value.twitter?.likes ?? '-',
      retweetsTrend: socialData.value.twitter?.trends.retweets ?? '-',
      likesTrend: socialData.value.twitter?.trends.likes ?? '-'
    },
    tiktok: {
      likes: socialData.value.tiktok?.likes ?? '-',
      views: socialData.value.tiktok?.views ?? '-',
      likesTrend: socialData.value.tiktok?.trends.likes ?? '-',
      viewsTrend: socialData.value.tiktok?.trends.views ?? '-'
    }
  }
}))

const totalFollowers = computed(() => {
  if (!props.username) return '-'
  
  const total = Object.values(stats.value.followers).reduce((sum, count) => {
    return sum + (typeof count === 'number' ? count : 0)
  }, 0)
  
  return total.toLocaleString()
})
</script> 