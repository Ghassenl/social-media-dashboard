const FACEBOOK_API_KEY = import.meta.env.VITE_FACEBOOK_API_KEY

export async function getFacebookStats(username) {
  if (!username) return null
  
  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${username}?fields=followers_count,page_views,likes&access_token=${FACEBOOK_API_KEY}`)
    const data = await response.json()
    
    return {
      followers: data.followers_count,
      pageViews: data.page_views,
      likes: data.likes,
      trends: {
        followers: 12,
        pageViews: 3,
        likes: -2
      }
    }
  } catch (error) {
    console.error('Facebook API Error:', error)
    return null
  }
} 