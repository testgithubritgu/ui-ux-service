import User from '../../model/userSchema';
import mongoose from 'mongoose';
import Image from "next/image"
export async function getServerSideProps() {

  await mongoose.connect(process.env.MONGO_URL)
  const users = await User.find();
  const updateData = {}
  for (let item of users) {
    if (item.name in updateData) {
      if (updateData[item.name] && updateData[item.name].age > 20) {
        updateData[item.name].age = 40
      }
    } else {
      updateData[item.name] = JSON.parse(JSON.stringify(item))
    } 
  }


  return {
    props: {
      data: updateData
    },
  }
}

const index = ({ data }) => {
  if (!data) return <p>no data</p>
  console.log(data)
  return (
    <div>
      <Image width={500} height={400}  src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" alt="" />
    </div>
  )
}

export default index