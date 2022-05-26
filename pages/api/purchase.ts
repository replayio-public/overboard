import type { NextApiRequest, NextApiResponse } from 'next'

type RequestData = {
  colorId: string
}

type ResponseData = {
  data: string
}

export default (
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) => {
  const body = request.body as RequestData

  if (!body.colorId) {
    return response
      .status(400)
      .json({ data: `Color not found, received: ${body.colorId}` })
  }

  response
    .status(200)
    .json({ data: `Color "${body.colorId}" successfully purchased!` })
}
