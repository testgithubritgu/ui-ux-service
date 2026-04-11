import connectDb from "../../middleware/mongoose"
import User from "../../model/userSchema"

async function handler(req, res) {
    const { email, name, age } = req.body

    const user = await User.findOne({ email })
    if (user) {
        return res.status(200).json({ message: "user already exist" })
    }

    const addUser = await User.create({
        name,
        email,
        age: parseInt(age)
    })
    addUser.save()
    res.status(200).json({ message: "user added succesfully" })
}

export default connectDb(handler)