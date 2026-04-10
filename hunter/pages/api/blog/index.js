import fs from "fs"
import path from "path"
const BLOG_DIR = path.join(process.cwd(), "data", "blog-factory");
export default function handler(req,res){
    if(!req.query.slug){
        res.json({data:"error"})
    }
    const raw =   fs.readFileSync(path.join(BLOG_DIR, `${req.query.slug}.json`))
    res.status(200).json({data:JSON.parse(raw)})
} 