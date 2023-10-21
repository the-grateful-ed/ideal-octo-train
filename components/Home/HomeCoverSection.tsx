import React from "react"
import Image from "next/image"
import Link from "next/link"
import { sortBlogs } from "@/utils/"

import Tag from "@/components/Elements/tag"

const HomeCoverSection = ({ posts }) => {
  const sortedBlogs = sortBlogs(posts)
  const post = sortedBlogs[0]
  return (
    <div className="inline-block w-full">
      <article className="relative flex h-[50vh] flex-row items-center justify-center">
        <div className="absolute inset-0 z-0 h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-secondary">
          <Image
            src={post.image.filePath.replace("../public", "")}
            alt={post.name}
            placeholder="blur"
            blurDataURL={post.image.blurhashDataUrl}
            fill
            className="-z-10 flex w-full justify-center rounded-2xl object-cover object-center"
          />
          <div className="z-0 flex w-full flex-col items-center justify-center p-8 text-primary-foreground">
            <Link href={`/categproes/${post.tags[0]}`}>{post.tags[0]}</Link>
            <Tag link={`/categproes/${post.tags[0]}`} name={post.tags[0]} />
          </div>
        </div>
      </article>
    </div>
  )
}

export default HomeCoverSection
