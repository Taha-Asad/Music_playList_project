import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  artist: {
    type: String,
    require: true,
  },
  album: {
    type: String,
  },
  genra: {
    type: String,
  },
  duration: {
    type: Number,
    require: true,
  },
  downloaded: {
    type: Number,
    default: 0,
  },
  audioUrl: {
    type: String,
    require: true,
  },
  coverImage: {
    type: String,
    default: "",
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Song", songSchema);
