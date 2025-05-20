const TIKTOK_API_KEY = import.meta.env.VITE_TIKTOK_API_KEY

export async function getTikTokStats(username) {
  if (!username) return null
  
  try {
    const response = await fetch(`https://open.tiktokapis.com/v2/user/info/?fields=stats&username=${username}`, {
      headers: {
        'Authorization': `Bearer ${TIKTOK_API_KEY}`
      }
    })
    const data = await response.json()
    
    return {
      followers: data.user.stats.follower_count,
      likes: data.user.stats.heart_count,
      views: data.user.stats.video_views,
      trends: {
        followers: -8239,
        likes: -19,
        views: -12
      }
    }
  } catch (error) {
    console.error('TikTok API Error:', error)
    return null
  }
} 