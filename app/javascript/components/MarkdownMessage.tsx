import {Fragment, ReactNode} from "react"

type Block =
  | {type: "paragraph", text: string}
  | {type: "heading", level: 1 | 2 | 3, text: string}
  | {type: "list", ordered: boolean, items: string[]}
  | {type: "quote", text: string}
  | {type: "code", language?: string, text: string}

type MarkdownMessageProps = {
  content: string
}

function parseBlocks(content: string): Block[] {
  const lines = content.replace(/\r\n/g, "\n").split("\n")
  const blocks: Block[] = []
  let paragraph: string[] = []
  let listItems: string[] = []
  let listOrdered = false
  let quote: string[] = []
  let codeLines: string[] = []
  let inCodeBlock = false
  let codeLanguage: string | undefined

  function flushParagraph() {
    if (paragraph.length === 0) return
    blocks.push({type: "paragraph", text: paragraph.join(" ")})
    paragraph = []
  }

  function flushList() {
    if (listItems.length === 0) return
    blocks.push({type: "list", ordered: listOrdered, items: listItems})
    listItems = []
    listOrdered = false
  }

  function flushQuote() {
    if (quote.length === 0) return
    blocks.push({type: "quote", text: quote.join(" ")})
    quote = []
  }

  lines.forEach(line => {
    const fence = line.match(/^```(\w+)?\s*$/)

    if (inCodeBlock) {
      if (fence) {
        blocks.push({type: "code", language: codeLanguage, text: codeLines.join("\n")})
        codeLines = []
        inCodeBlock = false
        codeLanguage = undefined
      } else {
        codeLines.push(line)
      }
      return
    }

    if (fence) {
      flushParagraph()
      flushList()
      flushQuote()
      codeLines = []
      inCodeBlock = true
      codeLanguage = fence[1]
      return
    }

    if (line.trim() === "") {
      flushParagraph()
      flushList()
      flushQuote()
      return
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      flushParagraph()
      flushList()
      flushQuote()
      blocks.push({type: "heading", level: heading[1].length as 1 | 2 | 3, text: heading[2]})
      return
    }

    const orderedList = line.match(/^\s*\d+\.\s+(.+)$/)
    const unorderedList = line.match(/^\s*[-*]\s+(.+)$/)
    if (orderedList || unorderedList) {
      flushParagraph()
      flushQuote()
      const ordered = Boolean(orderedList)
      if (listItems.length > 0 && listOrdered !== ordered) {
        flushList()
      }
      listOrdered = ordered
      listItems.push((orderedList || unorderedList)?.[1] ?? "")
      return
    }

    const quoteLine = line.match(/^>\s?(.+)$/)
    if (quoteLine) {
      flushParagraph()
      flushList()
      quote.push(quoteLine[1])
      return
    }

    flushList()
    flushQuote()
    paragraph.push(line.trim())
  })

  if (inCodeBlock) {
    blocks.push({type: "code", language: codeLanguage, text: codeLines.join("\n")})
  }

  flushParagraph()
  flushList()
  flushQuote()

  return blocks
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const token = match[0]
    if (token.startsWith("**")) {
      nodes.push(<strong key={match.index}>{token.slice(2, -2)}</strong>)
    } else if (token.startsWith("*")) {
      nodes.push(<em key={match.index}>{token.slice(1, -1)}</em>)
    } else if (token.startsWith("`")) {
      nodes.push(<code key={match.index} className="rounded bg-black/5 px-1 py-0.5 text-[0.95em]">{token.slice(1, -1)}</code>)
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      const href = link?.[2] ?? "#"
      const isSafeHref = href.startsWith("/") || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")
      nodes.push(
        <a
          key={match.index}
          href={isSafeHref ? href : "#"}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="font-medium text-emerald-700 underline underline-offset-2"
        >
          {link?.[1] ?? href}
        </a>
      )
    }

    lastIndex = pattern.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export default function MarkdownMessage({content}: MarkdownMessageProps) {
  const blocks = parseBlocks(content)

  return (
    <div className="space-y-2">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const Heading = `h${block.level}` as "h1" | "h2" | "h3"
            return (
              <Heading key={index} className="font-semibold text-gray-900">
                {renderInline(block.text)}
              </Heading>
            )
          }
          case "list": {
            const List = block.ordered ? "ol" : "ul"
            return (
              <List key={index} className={`${block.ordered ? "list-decimal" : "list-disc"} space-y-1 pl-5`}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </List>
            )
          }
          case "quote":
            return (
              <blockquote key={index} className="border-l-2 border-emerald-300 pl-3 text-gray-600">
                {renderInline(block.text)}
              </blockquote>
            )
          case "code":
            return (
              <pre key={index} className="overflow-x-auto rounded-lg bg-gray-950 p-3 text-xs leading-relaxed text-gray-100">
                {block.language && <span className="mb-2 block text-[0.7rem] uppercase tracking-wide text-gray-400">{block.language}</span>}
                <code>{block.text}</code>
              </pre>
            )
          case "paragraph":
            return <p key={index}>{renderInline(block.text)}</p>
          default:
            return <Fragment key={index} />
        }
      })}
    </div>
  )
}
