import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mdx } from "@/components/mdx-components"

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
      className="prose mx-auto w-full py-6 dark:prose-invert"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="mx-auto mb-12 w-full text-left">
        <img
          src={post.image}
          className="h-auto w-full rounded-lg bg-center object-cover object-center"
          alt="Kutty"
        />
        <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wider text-primary">
          Development
        </p>
        <h1
          className="mx-auto mb-3 text-3xl font-bold leading-tight md:text-4xl"
          itemProp="headline"
          title={post.title}
        >
          {post.title}
        </h1>
        <div className="mb-6 flex space-x-2">
          <Badge>
            <Link href="#">CSS</Link>
          </Badge>
          <Badge>
            <Link href="#">Tailwind</Link>
          </Badge>
          <Badge>
            <Link href="#">AlpineJS</Link>
          </Badge>
        </div>
        <Link className="flex items-center" href="#">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <p className="text-sm font-semibold">Praveen Juge</p>
            <p className="text-sm">Jan 02 2021</p>
          </div>
        </Link>
      </div>

      <div className="prose mx-auto dark:prose-invert">
        <Mdx code={post?.body.code} />
      </div>
    </article>
  )
}
