import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = { success: boolean };

export default async (request: NextApiRequest, response: NextApiResponse<ResponseData>) => {
  await new Promise(resolve => setTimeout(resolve, 6_000));
  response.status(200).json({ success: true });
};
