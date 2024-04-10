import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, unique: true, required: true },
});

export const CategoryModel =
  mongoose.models.Category || model("Category", categorySchema);
