import { Schema, model } from "mongoose";

const resourceSchema = new Schema({
  key: { type: String, required: true, unique: true },
  url: { type: String, required: true },
});

const Resource = model("Resource", resourceSchema);

export default Resource;
