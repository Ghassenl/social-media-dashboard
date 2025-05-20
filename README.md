# Social Media Dashboard

A modern, responsive social media analytics dashboard built with Vue.js that provides real-time metrics from multiple social media platforms.

## Features

- 🌓 Dark/Light mode toggle
- 📊 Real-time social media metrics
- 📱 Responsive design
- 📈 Interactive analytics charts
- 🎨 Platform-specific styling and branding
- 🔄 Dynamic username-based routing

### Supported Platforms

- Facebook
- Twitter
- Instagram
- TikTok

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Social media API keys (see Configuration section)

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd social-media-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your API keys:
```env
VITE_FACEBOOK_API_KEY=your_facebook_api_key
VITE_TWITTER_API_KEY=your_twitter_api_key
VITE_INSTAGRAM_API_KEY=your_instagram_api_key
VITE_TIKTOK_API_KEY=your_tiktok_api_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage

Access the dashboard by navigating to `http://localhost:5173`. You can view metrics for specific users by using the URL parameter:

```
http://localhost:5173/[username]
```

## Configuration

The dashboard requires API keys from the following platforms:

- Facebook Graph API
- Twitter API v2
- Instagram Graph API
- TikTok API

Please refer to each platform's developer documentation for obtaining API keys.

## Features in Detail

### Stats Cards
- Follower counts
- Engagement metrics (likes, shares, views)
- Trend indicators showing metric changes

### Platform Cards
- Platform-specific branding and colors
- Real-time metrics
- Interactive hover effects

### Analytics Charts
- Fixed aspect ratios for consistent display
- Responsive sizing
- Historical data visualization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Your chosen license]
