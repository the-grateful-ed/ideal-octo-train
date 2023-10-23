import { Metadata } from "next"
import Image from "next/image"
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
    // <article className="prose py-6 dark:prose-invert">
    //   <h1 className="mb-2">{post.title}</h1>
    //   {post.description && (
    //     <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
    //       {post.description}
    //     </p>
    //   )}
    //   <hr className="my-4" />
    //   <Mdx code={post.body.code} />
    // </article>
    <article
      className="mx-auto w-full rose py-6 dark:prose-invert"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="mx-auto mb-12 w-full text-left">
        <img
          src={post.image}
          fill
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
          <Link href="#">Tailwind</Link>
          <Badge className="badge" href="#">
            AlpineJS
          </Badge>
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar">
            {/* <Image src={post.image} fill alt="Photo of Praveen Juge" /> */}
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>

      <div className="prose mx-auto dark:prose-invert">
        <Mdx code={post?.body.code} />
      </div>
    </article>
  )
}
