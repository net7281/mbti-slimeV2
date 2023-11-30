import { atom } from "recoil";
import { IQuestionTypes, IScoreTypes } from "@/common/types/mbti-type";
import { MbtiQuestionData, scoreInitData } from "@/common/types/data";

export const scoreState = atom<IScoreTypes>({
  key: "mbti-score",
  default: scoreInitData,
});

export const scoreHistoryState = atom<string[]>({
  key: "mbti-score-history",
  default: [],
});

export const questionState = atom<IQuestionTypes>({
  key: "question-collect",
  default: MbtiQuestionData, //나중에 API 호출로 변경
});

export const flagState = atom<boolean>({
  key: "flag",
  default: false,
});

export const coupangFlagState = atom<boolean>({
  key: "coupangFlag",
  default: false,
});
