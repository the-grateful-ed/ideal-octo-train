import React from "react"
import { Fira_Code } from "next/font/google"
import Image from "next/image"
import { Code } from "bright"
import type { MDXComponents } from "mdx/types"
import { useMDXComponent } from "next-contentlayer/hooks"

const font = Fira_Code({ subsets: ["latin"] })

Code.theme = "dracula-soft"
Code.codeClassName = font.className
Code.titleClassName = font.className

Code.extensions = [
  {
    name: "lineNumbers",
    beforeHighlight: (props, annotations) => {
      if (annotations.length > 0) {
        return { ...props, lineNumbers: true }
      }
    },
  },
  {
    name: "mark",
    InlineAnnotation: ({ children, query }) => (
      <mark style={{ background: query }}>{children}</mark>
    ),
    MultilineAnnotation: ({ children, query }) => (
      <div style={{ background: query }}>{children}</div>
    ),
  },
  {
    name: "focus",
    MultilineAnnotation: ({ children }) => (
      <div style={{ filter: "contrast(0.3)" }}>{children}</div>
    ),
    beforeHighlight: (props, focusAnnotations) => {
      if (focusAnnotations.length === 0) return props

      const lineCount = props.code.split("\n").length

      const ranges = focusAnnotations.flatMap((a) => a.ranges)

      let newRanges = [{ fromLineNumber: 1, toLineNumber: lineCount }]

      for (const range of ranges) {
        if (!("fromLineNumber" in range)) continue

        const { fromLineNumber, toLineNumber } = range
        newRanges = newRanges.flatMap((r) => {
          if (
            r.fromLineNumber > toLineNumber ||
            r.toLineNumber < fromLineNumber
          )
            return [r]
          if (
            r.fromLineNumber >= fromLineNumber &&
            r.toLineNumber <= toLineNumber
          )
            return []
          if (
            r.fromLineNumber < fromLineNumber &&
            r.toLineNumber > toLineNumber
          )
            return [
              {
                fromLineNumber: r.fromLineNumber,
                toLineNumber: fromLineNumber - 1,
              },
              {
                fromLineNumber: toLineNumber + 1,
                toLineNumber: r.toLineNumber,
              },
            ]
          if (r.fromLineNumber < fromLineNumber)
            return [
              {
                fromLineNumber: r.fromLineNumber,
                toLineNumber: fromLineNumber - 1,
              },
            ]
          if (r.toLineNumber > toLineNumber)
            return [
              {
                fromLineNumber: toLineNumber + 1,
                toLineNumber: r.toLineNumber,
              },
            ]
          return []
        })
      }

      const newAnnotations = props.annotations.filter((a) => a.name !== "focus")
      newAnnotations.push({
        name: "focus",
        ranges: newRanges,
      })
      return { ...props, annotations: newAnnotations }
    },
  },
  // number: {
  //   InlineAnnotation: ({ children, content }) => (
  //     <input defaultValue={content} type="number" min={0} max={99} />
  //   ),
  // },
  // offset: {
  //   // change line numbers
  // },
  {
    name: "title",
    beforeHighlight: (props, annotations) => {
      if (annotations.length > 0) {
        return { ...props, title: annotations[0].query }
      }
    },
  },
  // twoSlash: {
  //   beforeHighlight: (props, query) => {
  //     const annotations = []
  //     const newCode = ""
  //     return {
  //       ...props,
  //       annotations: [...props.annotations, ...annotations],
  //       code: newCode,
  //     }
  //   },
  //   AnnotationComponent: ({ children, query }) => {},
  // },
]

const components = {
  Image,
  pre: Code,
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
