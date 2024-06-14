import Link from 'next/link'
import PostShow from '@/components/posts/post-show'
import CommentList from '@/components/comments/comment-list'
import CommentCreateForm from '@/components/comments/comment-create-form'
import paths from '@/paths'

export default async function PostShowPage({ params }) {
  const { slug, postId } = params

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>
      {/* <PostShow /> */}
      {/* <CommentCreateForm postId={postId} startOpen /> */}
      {/* <CommentList comments={comments} /> */}
    </div>
  )
}
