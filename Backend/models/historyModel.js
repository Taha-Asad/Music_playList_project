import mongoose from "mongoose";
const historySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song",
  },
  playedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("History", historySchema);
