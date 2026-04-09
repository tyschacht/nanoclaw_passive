import { FilePath, joinSegments, slugifyFilePath } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import fs from "fs"
import path from "path"

export const RawMarkdown: QuartzEmitterPlugin = () => ({
  name: "RawMarkdown",


  
  async *emit(ctx, content, _resources) {
    const { argv } = ctx
    const outDir = argv.output

    for (const [_tree, vfile] of content) {
      if (!vfile.data.filePath) continue

      const slug = vfile.data.slug!
      const rawOutPath = joinSegments(outDir, "raw", slug + ".md") as FilePath

      await fs.promises.mkdir(path.dirname(rawOutPath), { recursive: true })

      // vfile.value is post-transformer markdown (wikilinks normalized).
      // To emit the truly raw source instead, use fs.copyFile from argv.directory + vfile.data.filePath.
      await fs.promises.writeFile(rawOutPath, vfile.value, "utf-8")

      yield rawOutPath
    }
  },

  async *partialEmit(ctx, _content, _resources, changeEvents) {
    const { argv } = ctx
    const outDir = argv.output

    for (const changeEvent of changeEvents) {
      const ext = path.extname(changeEvent.path)
      if (ext !== ".md") continue

      if (changeEvent.type === "delete") {
        const slug = slugifyFilePath(changeEvent.path)
        const rawOutPath = joinSegments(outDir, "raw", slug + ".md") as FilePath
        try {
          await fs.promises.unlink(rawOutPath)
        } catch {
          // ignore missing file
        }
        continue
      }

      if (!changeEvent.file?.data.filePath) continue

      const vfile = changeEvent.file
      const slug = vfile.data.slug!
      const rawOutPath = joinSegments(outDir, "raw", slug + ".md") as FilePath

      await fs.promises.mkdir(path.dirname(rawOutPath), { recursive: true })
      await fs.promises.writeFile(rawOutPath, vfile.value, "utf-8")

      yield rawOutPath
    }
  },

  getQuartzComponents() {
    return []
  },
})
