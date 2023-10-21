import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

import HomeCoverSection from "@/components/Home/HomeCoverSection"

export default function Home() {
  console.log(allPosts)
  return (
    <div className="prose flex flex-col justify-center dark:prose-invert">
      <HomeCoverSection posts={allPosts} />
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
