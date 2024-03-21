import { Divider } from '@nextui-org/react'
import TopicCreateForm from '@/components/topics/topic-create-form'
import TopicList from '@/components/topics/topics-list'

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="m-2 text-xl">Top Posts</h1>
      </div>
      <div className="border px-2 py-3 shadow">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h2 className="text-lg">Topics</h2>
        <TopicList />
      </div>
    </div>
  )
}
