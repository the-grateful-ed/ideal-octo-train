import Image from "next/image"
import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

export default function Home() {
  return (
    <article className="flex flex-col bg-card shadow-sm">
      {allPosts.map((post) => (
        <Link
          href={post.slug}
          key={post._id}
          className="my-1.5 flex flex-col rounded-xl border-y sm:flex-row sm:border sm:border-border"
        >
          <div className="relative w-full shrink-0 overflow-hidden pt-[40%] sm:max-w-[15rem] sm:rounded-l-xl sm:rounded-t-xl md:max-w-xs md:rounded-r-none">
            <Image src={post.image} alt="post.title" fill />
          </div>
          <div className="flex flex-wrap">
            <div className="flex h-full flex-col p-4 sm:p-7">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <div className="mt-1 text-gray-800 dark:text-gray-400">
                {post.description && <p>{post.description}</p>}{" "}
              </div>
              <div className="mt-5 sm:mt-auto">
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Last updated 5 mins ago
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </article>
  )
}
