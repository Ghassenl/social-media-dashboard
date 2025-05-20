const INSTAGRAM_API_KEY = import.meta.env.VITE_INSTAGRAM_API_KEY

export async function getInstagramStats(username) {
  if (!username) return null
  
  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=followers_count,media_count&access_token=${INSTAGRAM_API_KEY}`)
    const data = await response.json()
    
    return {
      followers: data.followers_count,
      likes: data.media_count,
      views: data.profile_views,
      trends: {
        followers: 1099,
        likes: 2257,
        views: 1375
      }
    }
  } catch (error) {
    console.error('Instagram API Error:', error)
    return null
  }
} 