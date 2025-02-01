import mongoose from "mongoose";

const playListSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song",
  },
  likeCount:{
    type:Number ,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  coverImage: {
    type: String,
    default: "",
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("PlayList", playListSchema);
