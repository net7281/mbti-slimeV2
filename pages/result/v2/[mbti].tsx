import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getMbtiResult, useGetMbtiResult } from "@/common/apis/mbti-api";
import { IQuestionTypes, IResultTypes } from "@/common/types/mbti-type";
import Button from "@/common/components/Button/Button";
import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  questionState,
  scoreHistoryState,
  scoreState,
} from "@/common/atoms/mbti-atoms";
import { MbtiResultData, scoreInitData } from "@/common/types/data";
import axios from "axios";

const ResultPageV2 = (props: { result: IResultTypes }) => {
  const router = useRouter();
  //
  // const { isLoading, data } = useGetMbtiResult(String(router.query.mbti));

  //선택한 점수
  const setMbtiScore = useSetRecoilState(scoreState);
  //점수 내역
  const setMbtiScoreHistory = useSetRecoilState(scoreHistoryState);

  const handleGoMain = async () => {
    setMbtiScore(scoreInitData);
    setMbtiScoreHistory([]);
    await router.push(`/`);
  };

  if (router.isFallback) {
    return (
      <>
        Loading...
        <Button
          label={"테스트 처음부터 다시 하기"}
          onClick={async () => {
            await handleGoMain();
          }}
        />
      </>
    );
  }

  return (
    <>
      <div>당신의 mbti는 </div>

      {props.result ? props.result.mbti : null}

      <Button
        label={"테스트 처음부터 다시 하기"}
        onClick={async () => {
          await handleGoMain();
        }}
      />
    </>
  );
};

export async function getStaticPaths() {
  // const results: IResultTypes[] = await axios
  //   .get("/api/mbti-result?mbti=all")
  //   .then(({ data }) => {
  //     console.log(data, "data");
  //     return data;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  const results = MbtiResultData;

  //빌드 타임에 생성
  const paths = results.map(result => {
    return { params: { mbti: result.mbti } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(props: { params: { mbti: string } }) {
  const { params } = props;

  // const result: IResultTypes = await axios
  //   .get(`/api/mbti-result?mbti=${params.mbti}`)
  //   .then(({ data }) => {
  //     return data[0];
  //   });

  // let result: IResultTypes[] = [];
  // if (params.mbti === "all") {
  //   result = MbtiResultData;
  // } else {
  const result = MbtiResultData.filter(m => m.mbti === String(params.mbti));
  //}

  return {
    props: {
      result: result[0],
    },
  };
}

export default ResultPageV2;
