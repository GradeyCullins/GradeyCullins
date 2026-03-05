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

export type CvIntro = {
  id: number
  summary: string
  linkedinUrl: string
  githubUrl: string
  email: string
}

export type CvRole = {
  id: number
  title: string
  company: string
  companyUrl: string | null
  description: string
  highlights: string[]
  startDate: string
  endDate: string | null
  dateRange: string
  position: number
}

export type CvEducation = {
  id: number
  institution: string
  degree: string
  startDate: string
  endDate: string | null
  dateRange: string
  position: number
}
