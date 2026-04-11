import User from "../../model/userSchema"

export default async function handler(req, res) {
    try {
        const { email, name, password } = req.body
        const hasUser = await User.findOne({ email })
        if (hasUser) return res.status(404).json({ message: "user already exist !" })
        const newUser = await User.create({
            email, name, password
        })

        res.status(201).json({ message: "user created succesfully", newUser })
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}