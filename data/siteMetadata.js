/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Infinite Curios',
  author: 'Adam C Johnston',
  headerTitle: 'Infinite Curios',
  description: 'Exploring the curious corners of tech, nostalgia, and the internet.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://infinitecurios.blog',
  siteRepo: 'https://github.com/uxillary/infinite-curios', // Optional: Add your GitHub repo URL if public
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.svg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: '',
  email: 'mail@infinitecurios.blog',
  github: 'https://github.com/uxillary/infinite-curios',
  x: 'https://x.com/infinitecurios_', // Update if you create an account
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'en-US',
  stickyNav: false,
  googleAnalytics: {
    googleAnalyticsId: 'G-7B8BGR6V2V', // e.g. G-XXXXXXX
  },
  newsletter: {
    provider: '', // Leave empty if not using
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'dark',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
