import connectDb from "../../middleware/mongoose";
import User from "../../model/userSchema";

async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const users = await User.find();

            res.status(200).json({
                success: true,
                users: users
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Internal Server Error"
                
            });
        }
    }else if (req.method === "POST") {
        try {
            const { name, email, age } = req.body;

            const user = await User.create({
                name,
                email,
                age
            });

            res.status(201).json({
                success: true,
                user: user
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                error: error.message
            });
        }

    } else  {

        res.status(405).json({
            success: false,
            error: "Method Not Allowed"
        });
    }
}

export default connectDb(handler);