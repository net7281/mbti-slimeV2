import type { NextApiRequest, NextApiResponse } from "next";
import { IResultTypes } from "../../common/types/mbti-type";
import { MbtiResultData } from "@/common/types/data";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResultTypes[]>,
) {
  const { mbti } = req.query;
  let result: IResultTypes[] = [];
  if (mbti === "all") {
    result = MbtiResultData;
  } else {
    result = MbtiResultData.filter(m => m.mbti === String(mbti));
  }

  return res.status(200).json(
    result && result.length > 0
      ? result
      : [
          {
            mbti: "Error",
            titleName: "Error",
            summary: "",
            description: "",
          },
        ],
  );
}
