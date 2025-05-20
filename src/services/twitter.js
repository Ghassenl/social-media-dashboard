const TWITTER_API_KEY = import.meta.env.VITE_TWITTER_API_KEY

export async function getTwitterStats(username) {
  if (!username) return null
  
  try {
    const response = await fetch(`https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`, {
      headers: {
        'Authorization': `Bearer ${TWITTER_API_KEY}`
      }
    })
    const data = await response.json()
    
    return {
      followers: data.data.public_metrics.followers_count,
      retweets: data.data.public_metrics.retweet_count,
      likes: data.data.public_metrics.like_count,
      trends: {
        followers: 99,
        retweets: 303,
        likes: 553
      }
    }
  } catch (error) {
    console.error('Twitter API Error:', error)
    return null
  }
} 