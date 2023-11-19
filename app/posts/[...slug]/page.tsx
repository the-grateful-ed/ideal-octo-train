import { Metadata } from "next"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { formatDate } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mdx } from "@/components/mdx-components"
import Tag from "@/components/tags"
import tags from "@/components/tags"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article
      className="prose mx-auto w-full rounded-xl bg-card p-2 py-6 shadow-lg dark:prose-invert"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="mx-auto mb-12 w-full text-left">
        <img
          src={post.image}
          className="h-auto w-full rounded-lg bg-center object-cover object-center"
          alt="Kutty"
        />
        <Badge variant={"secondary"}>Development</Badge>
        <h1 itemProp="headline" title={post.title}>
          {post.title}
        </h1>
        <div className="mb-6 flex space-x-2">
          {post.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>

        <div className="flex flex-row">
          <div>
            <img
              src={post.author.image}
              alt={post.author.name}
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="ml-2 flex flex-col">
            <span className="text-sm font-semibold">{post.author.name}</span>
            <span className="text-sm">{formatDate(post.updatedAt)}</span>
          </div>
        </div>
      </div>

      <div className="prose mx-auto dark:prose-invert">
        <Mdx code={post?.body.code} />
      </div>
    </article>
  )
}
