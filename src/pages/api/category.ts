import { corsAllow } from "@/helper/cors";
import connect from "@/helper/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connect();
  await corsAllow(req, res);
  const body = req.body;
  switch (req.method) {
    case "POST"
  }
}
