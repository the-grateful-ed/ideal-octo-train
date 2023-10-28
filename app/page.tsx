import Image from "next/image"
import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

import { formatDate } from "@/lib/utils"

export default function Home() {
  return (
    <article className="flex flex-col rounded-xl bg-gray-100 p-2 shadow-sm">
      {allPosts.map((post) => (
        <Link
          href={post.slug}
          key={post._id}
          className="my-1.5 flex flex-col rounded-xl border-y bg-card shadow-lg hover:border-primary sm:flex-row sm:border sm:border-border"
        >
          <div className="relative h-auto w-full shrink-0 overflow-hidden bg-white pt-[45%] sm:max-w-[30%] sm:rounded-l-xl sm:rounded-r-none sm:pt-[25%] lg:max-w-[30%]">
            <Image
              src={post.image}
              alt="post.title"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="flex h-auto flex-col p-4 sm:p-7">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <div className="mt-1">
                {post.description && <p>{post.description}</p>}{" "}
              </div>
              <div className="mt-5 sm:mt-auto">
                <p className="text-xs ">
                  Last updated 5 {formatDate(post.updatedAt)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </article>
  )
}
