'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdUnit() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-client="ca-pub-0103781347588761"
      data-ad-slot="YOUR_SLOT_ID"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
