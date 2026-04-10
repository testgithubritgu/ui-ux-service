import fs from "fs/promises";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "data", "blog-factory");

export default async function handler(req, res) {
   if(req.method !== "POST"){
    return res.status(405).json({message:"unvalid req type"})
   }
   const {email ,name ,city ,address}= req.body 
   if (fs.access(path.join(BLOG_DIR , `${name}.json`))) return res.status(500).json({message:"already file existsync"})
   await fs.writeFile( `${BLOG_DIR}/${name}.json`,JSON.stringify(req.body),null ,2)
   return res.status(200).json({message:"success bhai"})
} 