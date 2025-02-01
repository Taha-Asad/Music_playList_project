import mongoose from "mongoose";
const followShema = mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

export default mongoose.model("Follower", followShema);
