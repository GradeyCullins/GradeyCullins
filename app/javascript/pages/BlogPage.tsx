import {Head, Link} from '@inertiajs/react'
import {BlogPost} from "../types.ts"
import ContentWrapper from "../components/ContentWrapper.tsx";
import WideBlockSection from "../components/WideBlockSection.tsx";
import {MoveRight} from "lucide-react";

type BlogProps = {
  posts: BlogPost[]
}

export default function BlogPage({posts}: BlogProps) {
  const sortedPosts = [...posts].sort((a, b) => {
    const aDate = new Date(a.publishedAt ?? a.createdAt).getTime()
    const bDate = new Date(b.publishedAt ?? b.createdAt).getTime()
    return bDate - aDate
  })
  const publishedPosts = sortedPosts.filter(post => post.status === "published")
  const displayPosts = publishedPosts.length > 0 ? publishedPosts : sortedPosts
  
  const formatDate = (value: string | null) => {
    if (!value) return "Draft"
    return new Date(value).toLocaleDateString(undefined, {year: "numeric", month: "short", day: "numeric"})
  }
  
  const readingMinutes = (content: string) => {
    const words = content?.split(/\s+/).filter(Boolean).length ?? 0
    return Math.max(1, Math.round(words / 200))
  }
  
  return (
    <>
      <Head title="Blog"/>
      <WideBlockSection className="bg-white">
        <ContentWrapper className="pr-4">
          {displayPosts.length === 0 ? (
            <p className="text-slate-600">I&apos;m still drafting the first story. Check back soon.</p>
          ) : (
            <div className="flex flex-col divide-y divide-slate-200">
              {displayPosts.map(post => (
                <article key={post.id} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-3">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>•</span>
                    <span>{readingMinutes(post.content)} min read</span>
                    {post.status === "draft" && (
                      <>
                        <span>•</span>
                        <span className="uppercase tracking-wide text-amber-500 font-semibold">Draft</span>
                      </>
                    )}
                  </div>
                  <h2
                    className="text-2xl font-semibold text-slate-900 group-hover:text-indigo-600 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 max-w-3xl">{post.excerpt}</p>
                  {post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
                      {post.tags.map(tag => (
                        <span key={tag.id} className="rounded-full border border-slate-200 px-3 py-1">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href={post.href} className="mt-4 py-1 w-fit group flex gap-2 text-blue-600">Read
                    Now <MoveRight
                      className="transition-all group-hover:translate-x-1"/></Link>
                </article>
              ))}
            </div>
          )}
        </ContentWrapper>
      </WideBlockSection>
    </>
  )
}
