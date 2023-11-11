---
title: "Prettier: My Confguration File"
description: <p>A good starting place for your Prettier configuration file that can be easily modified to further suit your needs.</p>
tags: []
category:
    - code
publishedAt: 2023-11-11T22:59:28.620Z
updatedAt: 2023-11-11T22:59:28.094Z
image: /images/prettier-logo.jpg
author: edndacomputer
isPublished: true
type: Post
---


# Prettier

Here is a good starting place for a Prettier config file.

## Manually generate .prettierrc

```javascript
echo {}> .prettierrc.json
`````

## A decent config file example
```json
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "always",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```