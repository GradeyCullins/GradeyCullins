import {BlogPost} from "../types.ts";
import {Link} from "@inertiajs/react";
import ContentWrapper from "./ContentWrapper.tsx";
import WideBlockSection from "./WideBlockSection.tsx";

type BlogPreviewProps = {
  posts: BlogPost[]
}

export default function BlogPreview({posts}: BlogPreviewProps) {
  return (
    <WideBlockSection>
      <ContentWrapper>
        <h2 className="text-3xl">I'm Blogging</h2>
        <div className="flex flex-col gap-2">
          {posts.map(post => (
            <div key={post.id} className="flex flex-col gap-2 border-b border-slate-200 pb-4">
              <div className="flex items-center justify-between gap-2">
                <Link href={post.href} className="text-lg font-semibold hover:underline">{post.title}</Link>
                <span className="text-sm text-slate-500">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Draft"}
                </span>
              </div>
              <p className="text-slate-600">{post.excerpt}</p>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                  {post.tags.map(tag => (
                    <span key={tag.id} className="px-2 py-1 bg-slate-100 rounded">{tag.name}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ContentWrapper>
    </WideBlockSection>
  )
}
