import path from "path"
import fs from "fs"

const BLOG_DIR = path.join(process.cwd(), "blg-factory")

export function getAllBlogSlug() {
    if (!BLOG_DIR) return []
    return fs.readdirSync(BLOG_DIR).filter(file => file.endsWith(".json")).map(file => {

        const filePath = path.join(BLOG_DIR, file)
        const raw = fs.readFileSync(filePath)
        return JSON.parse(raw)
    })
}