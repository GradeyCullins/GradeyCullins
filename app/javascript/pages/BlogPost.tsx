import {Head, Link} from '@inertiajs/react'
import {useMemo} from "react";
import type {MDXComponents} from "mdx/types";
import { BlogPost as BlogPostType } from "../types.ts"
import MdxRenderer from "../components/MdxRenderer.tsx";
import ContentWrapper from "../components/ContentWrapper.tsx";
import WideBlockSection from "../components/WideBlockSection.tsx";
import {cn} from "../lib/utils.ts";
import {MoveLeft} from "lucide-react";

type BlogPostProps = {
  post: BlogPostType
}

export default function BlogPost({ post }: BlogPostProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
    : "Unpublished draft"
  const readingMinutes = Math.max(1, Math.round((post.content?.split(/\s+/).filter(Boolean).length ?? 0) / 200))

  const mdxComponents = useMemo<MDXComponents>(() => {
    return {
      h1: ({ className, ...props }: any) => (
        <h1 {...props} className={cn("text-4xl font-semibold leading-tight text-slate-900", className)} />
      ),
      h2: ({ className, ...props }: any) => (
        <h2 {...props} className={cn("mt-12 text-3xl font-semibold text-slate-900", className)} />
      ),
      h3: ({ className, ...props }: any) => (
        <h3 {...props} className={cn("mt-8 text-2xl font-semibold text-slate-900", className)} />
      ),
      p: ({ className, ...props }: any) => (
        <p {...props} className={cn("mt-6 leading-8 text-slate-700", className)} />
      ),
      ul: ({ className, ...props }: any) => (
        <ul {...props} className={cn("mt-6 list-disc list-outside pl-6 space-y-2 text-slate-700", className)} />
      ),
      ol: ({ className, ...props }: any) => (
        <ol {...props} className={cn("mt-6 list-decimal list-outside pl-6 space-y-2 text-slate-700", className)} />
      ),
      li: ({ className, ...props }: any) => (
        <li {...props} className={cn("leading-7", className)} />
      ),
      blockquote: ({ className, ...props }: any) => (
        <blockquote {...props} className={cn("mt-8 border-l-4 border-slate-200 pl-4 italic text-slate-600", className)} />
      ),
      code: ({ className, ...props }: any) => (
        <code {...props} className={cn("rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-900", className)} />
      ),
      pre: ({ className, ...props }: any) => (
        <pre {...props} className={cn("mt-6 overflow-x-auto rounded-2xl bg-slate-900 p-5 text-sm leading-6 text-slate-50 shadow-lg shadow-slate-900/20", className)} />
      ),
      a: ({ className, ...props }: any) => (
        <a {...props} className={cn("text-indigo-600 underline decoration-2 underline-offset-4 transition-colors hover:text-indigo-500", className)} />
      )
    }
  }, [])

  return (
    <>
      <Head title={post.title} />
      <WideBlockSection className="bg-slate-50">
        <ContentWrapper className="pr-4">
          <Link href="/blog" className="w-fit items-center flex gap-2 text-blue-600 group text-sm">
            <MoveLeft className="group-hover:translate-x-[-5px] transition-all" /> Back to Blog
          </Link>
          <p className="mt-4 text-sm uppercase text-slate-500">
            {formattedDate} &nbsp;•&nbsp; {readingMinutes} min read
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{post.excerpt}</p>
          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
              {post.tags.map(tag => (
                <span key={tag.id} className="rounded-full border border-slate-200 px-3 py-1">
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </ContentWrapper>
      </WideBlockSection>
      <WideBlockSection className="bg-white">
        <ContentWrapper className="pr-4">
          <article className="prose prose-lg max-w-none prose-headings:text-slate-900">
            <MdxRenderer code={post.contentMdx} components={mdxComponents} />
          </article>
        </ContentWrapper>
      </WideBlockSection>
    </>
  )
}
