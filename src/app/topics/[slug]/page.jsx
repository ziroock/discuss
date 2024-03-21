import PostCreateForm from '@/components/posts/post-create-form'

export default function TopicShowPage({ params }) {
  const { slug } = params

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="mb-2 text-2xl font-bold">{slug}</h1>
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  )
}
