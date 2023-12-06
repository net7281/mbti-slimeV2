import axios from "axios";
import { IQuestionTypes, IResultTypes } from "@/common/types/mbti-type";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { MbtiQuestionData, MbtiResultData } from "@/common/types/data";

export const getMbtiResult = async (mbti: string) => {
  const result: IResultTypes = await axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/result/${mbti}`)
    .then(({ data }) => {
      return data;
    });

  // let result: IResultTypes[] = [];
  //
  // if (mbti === "all") {
  //   result = MbtiResultData;
  // } else {
  //   result = MbtiResultData.filter(m => m.mbti === String(mbti));
  // }

  console.log(result);
  return result;
};

export const useGetMbtiResult = (
  mbti: string,
  options?: UseQueryOptions<IResultTypes, Error, IResultTypes>,
) =>
  useQuery<IResultTypes, Error, IResultTypes>({
    queryKey: ["mbti-result", mbti],
    queryFn: () => getMbtiResult(mbti),
    enabled: !!String(mbti),
    refetchOnWindowFocus: false,
    ...options,
  });

export const getMbtiQuestion = async () => {
  // const result: IQuestionTypes[] = await axios
  //   .get(`/mbti-slime/api/mbti-question`)
  //   .then(({ data }) => {
  //     return data;
  //   });

  return MbtiQuestionData;
};

export const useGetMbtiQuestion = (
  options?: UseQueryOptions<IQuestionTypes, Error, IQuestionTypes>,
) =>
  useQuery<IQuestionTypes, Error, IQuestionTypes>({
    queryKey: ["mbti-question"],
    queryFn: () => getMbtiQuestion(),
    refetchOnWindowFocus: false,
    ...options,
  });
