import Link from "next/link"
import { memo } from "react"

const Navbar = () => {
  console.log('navbar rener')
  return (
    <div className='w-full '> 
        <ol className='w-full flex justify-center items-center gap-3'>

      {["about","products","contact"].map((item)=>( 
        <Link key={item} href={`/${item.toLocaleLowerCase()}`}>  <li >{item}</li></Link>
        ))}
        </ol>
    </div>
  )
}
 
export default memo(Navbar)