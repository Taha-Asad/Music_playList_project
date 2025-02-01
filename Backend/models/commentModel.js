import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song",
  },
  text: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("Comment", commentSchema);
