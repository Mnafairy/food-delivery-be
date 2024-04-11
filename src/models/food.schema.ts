import mongoose, { model, Schema } from "mongoose";

const foodSchema = new Schema({
  foodName: String,
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: Number,
  imagePath: String,
  ingredients: [],
  sale: Number,
});

export const FoodModel = mongoose.models.Food || model("Food", foodSchema);
