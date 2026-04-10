import  { useEffect, useState } from 'react'
import Link from "next/link"
const Blog = ({ blogData }) => {
  if(!blogData) return <p>no content</p>
  console.log(blogData)
// const [blogs ,setBlogs] = useState([])
//   useEffect(()=>{
//     const fetchBlogData = async () =>{
//       const data = await fetch("http://localhost:3000/api/blogdata")
//       const res = await data.json()
//       setBlogs(res.data)
//     }
//     fetchBlogData()
//   },[])
  return (
    <div>
      this is blog page
      {blogData.length > 0 && blogData.map(({ title, slug })=>(
      <>
          <span  className='text-green-500'>{title}</span>
          <Link href={`/blog/${slug}`}>{slug}</Link></>
      ))}
    </div>
  )
}

export async function getServerSideProps({query}) {
  const data = await fetch(`http://localhost:3000/api/blog?=`)
  const res = await data.json()
  return {
    props: {
      blogData:res.data
    }
  }
}
export default Blog