import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faRedditAlien,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

type SocialShareProps = {
  url: string
  summary: string
  hashtags: string
}

export default function SocialShare({ url, summary, hashtags }: SocialShareProps) {
  const twitterShare = `https://x.com/intent/tweet?text=${encodeURIComponent(summary)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags.replace(/#/g, '').replace(/\s+/g, ''))}`
  const redditShare = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(summary)}`
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  const linkedinShare = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(summary)}`

  return (
    <div className="flex justify-center space-x-4 py-6">
      <a
        href={twitterShare}
        target="_blank"
        rel="noopener noreferrer"
        className="transform rounded bg-blue-500 p-2 text-white transition hover:scale-105 hover:bg-blue-600"
        aria-label="Share on X"
      >
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </a>
      <a
        href={redditShare}
        target="_blank"
        rel="noopener noreferrer"
        className="transform rounded bg-orange-500 p-2 text-white transition hover:scale-105 hover:bg-orange-600"
        aria-label="Share on Reddit"
      >
        <FontAwesomeIcon icon={faRedditAlien} size="lg" />
      </a>
      <a
        href={facebookShare}
        target="_blank"
        rel="noopener noreferrer"
        className="transform rounded bg-blue-600 p-2 text-white transition hover:scale-105 hover:bg-blue-700"
        aria-label="Share on Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} size="lg" />
      </a>
      <a
        href={linkedinShare}
        target="_blank"
        rel="noopener noreferrer"
        className="transform rounded bg-blue-700 p-2 text-white transition hover:scale-105 hover:bg-blue-800"
        aria-label="Share on LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
      </a>
    </div>
  )
}
