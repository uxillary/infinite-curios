'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  const giscus = siteMetadata.comments?.giscusConfig
  const isConfigured =
    siteMetadata.comments?.provider === 'giscus' &&
    giscus?.repo &&
    giscus?.repositoryId &&
    giscus?.category &&
    giscus?.categoryId

  if (!isConfigured) {
    return null
  }

  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
