import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId ,
        ref: "User"
    },
    song:{
        type:mongoose.Schema.Types.ObjectId ,
        ref: "Song"
    },
    createdAt:{
        type:Date,
        default:Date.now ,
    }
});

export default mongoose.model("Like" , likeSchema)