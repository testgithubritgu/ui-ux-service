import React from 'react'

export async function getServerSideProps(){
  const res = await fetch("http://localhost:3000/api/getUsers")
  const data = await res.json()
  return {
    props:{
      data:[...data.users]
    },
    revalidate:5
  }
}

const index = ({data}) => {
  if(!data) return <p>no data</p>
  console.log(data)
  return (
    <div>
      {data.map((user,idx)=>(
        <div>
          {user.name}
        </div>
      ))}
    </div>
  )
}




export default index
