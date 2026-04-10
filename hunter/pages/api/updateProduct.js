import connectDb from "../../middleware/mongoose";
import User from "../../model/userSchema";


async function handler(req , res){

        try {
            const update  = await User.findByIdAndUpdate(req.body._id , req.body)
            console.log("updated")
            res.status(201).json({meassage:"updated succesfully"})
        } catch (error) {
            
        }


}

export default connectDb(handler)