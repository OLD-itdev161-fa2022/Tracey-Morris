import { Mongoose } from "mongoose";

const UserSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})

const User = Mongoose.model('user, Userschema');

export default User;