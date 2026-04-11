import User from "../../model/userSchema"
import bcrypt from "bcrypt"
import connectDb from "../../middleware/mongoose"
 async function handler(req, res) {
    try {
        const { email, name, password } = req.body
        const hasUser = await User.findOne({ email })
        if (hasUser) return res.status(404).json({ message: "user already exist !" })

        const hashedPassword = await bcrypt.hash(password, 10)

        
        const newUser = await User.create({
            email, name, password: hashedPassword
        })
console.log(newUser)
        res.status(201).json({ message: "user created succesfully", newUser })
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}


export default connectDb(handler)