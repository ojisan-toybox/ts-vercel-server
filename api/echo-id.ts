import { NowRequest, NowResponse, VercelRequestQuery } from "@vercel/node";

type QueryParams = {
  id: string;
};

export default async (req: NowRequest, res: NowResponse) => {
  const { query } = req;
  if (!_isValidVercelRequest(query)) {
    throw new Error("invalid request");
  }
  const { id } = query;
  res.json({ id });
};

const _isValidVercelRequest = (query: any): query is QueryParams => {
  if (typeof query.id !== "string") {
    console.error("invalid id type.");
    return false;
  }
  return true;
};
