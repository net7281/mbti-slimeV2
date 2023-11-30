import type { NextApiRequest, NextApiResponse } from "next";
import { MbtiQuestionData } from "@/common/types/data";
import { IQuestionTypes } from "@/common/types/mbti-type";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IQuestionTypes>,
) {
  return res.status(200).json(MbtiQuestionData);
}
