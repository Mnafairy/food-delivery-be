import connect from "@/helper/db";
import { createUser } from "@/services/user";
import type { NextApiResponse, NextApiRequest } from "next";

connect();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body?.firstName || !req.body?.lastName || !req.body?.email) {
    res.status(400).json("firstName, lastName,email is missing");
  }

  const { firstName, lastName, age, email } = req.body;

  try {
    const user = await createUser(firstName, lastName, email, age);

    res.status(200).json({ message: "Successfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default handler;
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.status(200).json({ message: "Hello World" });
