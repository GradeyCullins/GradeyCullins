import { Head } from '@inertiajs/react'
import {BlogPost} from "../types.ts"
import ContentWrapper from "../components/ContentWrapper.tsx";
import WideBlockSection from "../components/WideBlockSection.tsx";

type BlogProps = {
  posts: BlogPost[]
}

export default function BlogPage({}: BlogProps) {
  return (
    <>
      <Head title="Blog" />
      <WideBlockSection>
      <ContentWrapper className="">
        <h1 className="text-4xl font-bold">Coming Soon</h1>
        {/*<div className="flex flex-col gap-4">*/}
        {/*  {posts.map(post => (*/}
        {/*    <Link*/}
        {/*      key={post.id}*/}
        {/*      href={post.href}*/}
        {/*      className="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"*/}
        {/*    >*/}
        {/*      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>*/}
        {/*      <div className="text-gray-600">*/}
        {/*        {new Date(post.createdAt).toLocaleDateString()}*/}
        {/*      </div>*/}
        {/*    </Link>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </ContentWrapper>
      </WideBlockSection>
    </>
  )
}