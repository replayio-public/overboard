import type { NextApiRequest, NextApiResponse } from "next";

type RequestData = { colorId: string };

type ResponseData = { message: string };

export default (request: NextApiRequest, response: NextApiResponse<ResponseData>) => {
  const body = request.body as RequestData;

  if (!body.colorId) {
    return response.status(400).json({ message: `Color not found, received: ${body.colorId}` });
  }

  response.status(200).json({ message: `Color "${body.colorId}" successfully purchased!` });
};
