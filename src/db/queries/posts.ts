import type { Post } from '@prisma/client'
import { db } from '@/db'
import { pseudoRandomBytes } from 'crypto'

// Manual way, but more explicit
export type PostWithData = Post & {
  topic: { slug: string }
  user: { name: string | null }
  _count: { comments: number }
}

// Automatic way to get the type returned by fetchPostByTopicSlug
// export type PostWithData = Awaited<ReturnType<typeof fetchPostByTopicSlug>>[number]

export function fetchPostByTopicSlug(slug: string) {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  })
}
