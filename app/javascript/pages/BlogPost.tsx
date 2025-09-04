import { Head } from '@inertiajs/react'
import { BlogPost as BlogPostType } from "../types.ts"

type BlogPostProps = {
  post: BlogPostType
}

export default function BlogPost({ post }: BlogPostProps) {
  console.log('post', post)
  return (
    <>
      <Head title={post.title} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-8">
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
        <div className="prose max-w-none">
          <div className="whitespace-pre-wrap">{post.content}</div>
        </div>
      </div>
    </>
  )
}