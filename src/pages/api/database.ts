import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
const uri: string = process.env.MONGO_DB_URL as string;
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const connect = async () => {
    try {
      await mongoose.connect(uri);
      console.log("Database connected succesfully");
    } catch (error) {
      console.log(error);
    }
  };
  connect();
};

export default handler;
