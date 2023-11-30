export interface IScoreTypes {
  [key: string]: number;
}

export interface IResultTypes {
  mbti: string;
  titleName: string;
  summary: string;
  description: string;
}

export interface IQuestionTypes {
  [key: string]: {
    question: string;
    answers: {
      score: string;
      text: string;
    }[];
    select: string;
  };
}
