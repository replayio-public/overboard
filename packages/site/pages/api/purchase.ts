import type { NextApiRequest, NextApiResponse } from "next";

type RequestData = { color: string };

type ResponseData = { message: string };

export default (request: NextApiRequest, response: NextApiResponse<ResponseData>) => {
  const body = request.body as RequestData;

  if (!body.color) {
    return response.status(400).json({ message: `Color not found, received: ${body.color}` });
  }

  response.status(200).json({ message: `Color "${body.color}" successfully purchased!` });
};
