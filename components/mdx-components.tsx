import React from "react"
import { Fira_Code } from "next/font/google"
import Image from "next/image"
import { Code } from "bright"
import type { MDXComponents } from "mdx/types"
import { useMDXComponent } from "next-contentlayer/hooks"

import MdxImage from "@/components/mdx/MdxImage"
import Spotify from "@/components/mdx/Spotify"
import YouTube from "@/components/mdx/YouTube"
import YouTubePlaylist from "@/components/mdx/YouTubePlaylist"

const font = Fira_Code({ subsets: ["latin"] })

Code.theme = "dracula-soft"
Code.codeClassName = font.className
Code.titleClassName = font.className

// ... your code ...

const components: MDXComponents = {
  Image,
  img: MdxImage,
  pre: Code,
  YouTube,
  Playlist: YouTubePlaylist,
  Spotify,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="prose dark:prose-invert">
      <Component components={components} />
    </div>
  )
}
