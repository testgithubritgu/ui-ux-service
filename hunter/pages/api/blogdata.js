import fs from "fs/promises";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "data", "blog-factory");

export default async function handler(req, res) {
    try {
        const files = await fs.readdir(BLOG_DIR);

        const jsonFiles = files.filter(file => file.endsWith(".json"));

        const fileData = await Promise.all(
            jsonFiles.map(async (file) => {
                const filePath = path.join(BLOG_DIR, file);
                const raw = await fs.readFile(filePath, "utf-8");
                return JSON.parse(raw);
            })
        );

        return res.status(200).json({ data: fileData });

    } catch (error) {
        console.error("Error reading files:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}