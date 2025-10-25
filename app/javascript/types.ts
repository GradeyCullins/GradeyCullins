export type Tag = {
  id: number
  name: string
  slug: string
  createdAt: string
  updatedAt: string
}

export type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  contentMdx: string
  status: "draft" | "published"
  publishedAt: string | null
  createdAt: string
  updatedAt: string
  href: string
  tags: Tag[]
}
