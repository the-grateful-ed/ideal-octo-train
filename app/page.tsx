import Image from "next/image"
import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

import { formatDate } from "@/lib/utils"

export default function Home() {
  return (
    <div>
      {allPosts.map((post) => {
        let borderColorClass

        switch (post.category) {
          case "code":
            borderColorClass = "border-blue-500"
            break
          case "hacking":
            borderColorClass = "border-red-500"
            break
          case "web":
            borderColorClass = "border-yello-500"
            break
          // Add more cases as needed for other categories
          default:
            borderColorClass = "border-gray-500"
        }

        return (
          <article
            className="flex flex-col rounded-xl border bg-gray-100 p-2 shadow-sm"
            key={post._id}
          >
            <Link href={post.slug}>
              <div
                className={`my-1.5 flex flex-col rounded-xl border-2 bg-card shadow-lg hover:border-primary sm:flex-row ${borderColorClass}`}
              >
                <div className="relative h-auto w-full shrink-0 overflow-hidden bg-white p-0.5 pt-[45%] sm:max-w-[30%] sm:rounded-l-xl sm:rounded-r-none sm:pt-[25%] lg:max-w-[30%]">
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
                        Last updated {formatDate(post.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        )
      })}
    </div>
  )
}
