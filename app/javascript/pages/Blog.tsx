type Post = {
  title: string
  content: string
}

type BlogProps = {
  posts: Post[]
}
export default function Blog({ posts }: BlogProps) {
  console.log('posts', posts)
  return (
    <>
      <div>Welcome to Blog</div>
      <div className="flex flex-col gap-2">
        {posts.map(post => (
          <div>{post.title}</div>
        ))}
      </div>
    </>
  )
}