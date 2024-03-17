import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      require: true,
      type: String,
      unique: true,
    },
    originalUrl: {
      type: String,
      require: true,
    },
    visitHistory: [
      {
        timestamp: { type:String },
      },
    ],
  },
  { timestamps: true }
);

 const URlModel = mongoose.model("URL",urlSchema)

export default URlModel