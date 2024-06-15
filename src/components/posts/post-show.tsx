import { notFound } from 'next/navigation'
import { db } from '@/db'

interface PostShowProps {
  postId: string
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await db.post.findFirst({
    where: { id: postId },
  })

  if (!post) {
    notFound
  }

  return (
    <div className="m-4">
      <h1 className="my-2 text-2xl font-bold">{post.title}</h1>
      <p className="rounded border p-4">{post.content}</p>
    </div>
  )
}
