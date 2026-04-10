import Link from "next/link"

const Navbar = () => {
  return (
    <div className='w-full '> 
        <ol className='w-full flex justify-center items-center gap-3'>

      {["About","Process","Contact"].map((item)=>( 
          <Link key={item} href={`/${item.toLocaleLowerCase()}`}>  <li className='cursor-pointer'>{item}</li></Link>
        ))}
        </ol>
    </div>
  )
}
 
export default Navbar