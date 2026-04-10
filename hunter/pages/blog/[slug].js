import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const post = () => {
    const [blogData , setBlogData] = useState(null)
    const router = useRouter()
    const data = router.query 
console.log(data.slug)
    useEffect(()=>{
      if(!router.isReady) return
      const getBlogBySlug = async (slug)=>{
        const data = await fetch(`/api/blog?slug=${slug}`)
        const res = await data.json()
        setBlogData(res.data)
      }
      getBlogBySlug(data.slug)
    }, [router.isReady])
  return (
    <div>
     <h1 className="">{blogData && blogData.title}</h1>
     <p>{blogData?.description}</p>
     <button className="text-4xl" onClick={()=>{
        router.push("/")
     }}>go to homepaged</button>
    </div>
  )
}




export default post