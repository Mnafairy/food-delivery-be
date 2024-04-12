import { FoodModel } from "@/models/food.schema";
import { FoodType } from "@/utils/types/food";
import mongoose, { model, Schema } from "mongoose";

export const createFood = async (
  foodName: String,
  category: { type: Schema.Types.ObjectId; ref: "Category"; required: true },
  price: Number,
  imagePath: String,
  ingredients: [],
  sale: Number
) => {
  const createFood = FoodModel.create({
    foodName,
    category,
    price,
    imagePath,
    ingredients,
    sale,
  });
  return createFood;
};

export const getFoods = async (): Promise<FoodType[]> => {
  try {
    const foods: FoodType[] = await FoodModel.find().populate("category");
    return foods;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const getFoodById = async (id: string) => {
  try {
    const food = await FoodModel.findOne({ _id: id });
    return food;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const deleteFood = async (id: string) => {
  try {
    await FoodModel.deleteOne({ _id: id });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const updateFood = async (id: string, updateInfo: Partial<FoodType>) => {
  try {
    await FoodModel.updateOne({ _id: id }, { updateInfo });
  } catch (e: any) {
    throw new Error(e.message);
  }
};
