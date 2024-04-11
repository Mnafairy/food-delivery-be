import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import { createFood, deleteFood, getFoods } from "@/services/food";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  await corsAllow(req, res);
  const { foodName, category, price, imagePath, ingredients, sale } = req.body;
  switch (req.method) {
    case "POST":
      try {
        const result = await createFood(
          foodName,
          category,
          price,
          imagePath,
          ingredients,
          sale
        );
        return res.status(200).json(result);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "GET":
      try {
        const foods = await getFoods();
        return res.status(200).json(foods);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "DELETE":
      try {
        const result = await deleteFood(req.body._id);
        return res.status(200).json(result);
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    // case "PUT":
    //   try{
    //     const result = await updateFood(req.body._id)
    //   }
  }
};
export default handler;
