import {BlogPost} from "../types.ts";
import {Link} from "@inertiajs/react";

type BlogPreviewProps = {
  posts: BlogPost[]
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <div>
      <h2 className="text-3xl">I'm Blogging</h2>
      <div className="flex flex-col gap-2">
        {posts.map(post => (
          <div className="flex gap-2 justify-between">
            <Link href={post.href}>{post.title}</Link>
            <span>{new Date(post.createdAt).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}