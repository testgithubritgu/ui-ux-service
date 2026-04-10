import React, { useState } from 'react'
import fs from "fs"
import path from "path"
import InfiniteScroll from "react-infinite-scroll-component"


export async function getStaticProps(){
  const fileslug =  fs.readdirSync(path.join(process.cwd(),"data","hunting-coder")).filter(file => file.endsWith(".json"))
  return {
    props:{
      app: fileslug
    }
  }
}

const Scroll = ({ app }) => {
  const [count , setCount] = useState(1)
  const [AppArray , setAppArray] = useState([])
  console.log(app)
  const fetchData = ()=>{
    setAppArray(app.slice(0,count))
    setCount(pre => pre+2)
  }
  return (
    <div>
      
      <InfiniteScroll
        dataLength={AppArray.length} // ✅ correct
        next={fetchData}
        hasMore={AppArray.length !== app.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {AppArray.map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default Scroll
