import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"

const DownloadMarkdown: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ("index" as FullSlug)
  const href = joinSegments(pathToRoot(slug), "raw", `${slug}.md`)

  // For folder index pages (e.g. slug "notes/index"), use the folder name as filename
  const filename =
    slug === "index" || slug.endsWith("/index")
      ? (slug
          .replace(/\/?index$/, "")
          .split("/")
          .pop() || "index") + ".md"
      : slug.split("/").pop() + ".md"

  return (
    <a
      href={href}
      download={filename}
      class={classNames(displayClass, "download-md")}
      title="Download as Markdown"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      .md
    </a>
  )
}

DownloadMarkdown.css = `
.download-md {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--lightgray);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--darkgray);
  text-decoration: none;
  transition: background 0.1s, color 0.1s;
}
.download-md:hover {
  background: var(--lightgray);
  color: var(--dark);
}
`

export default (() => DownloadMarkdown) satisfies QuartzComponentConstructor
