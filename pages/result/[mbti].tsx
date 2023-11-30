import { useRouter } from "next/router";
import { useGetMbtiResult } from "@/common/apis/mbti-api";
import {
  CoupangWrap,
  ResultImg,
  ResultSummary,
  ResultTitle,
  ResultWrap,
} from "@/styles/result.styles";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  coupangFlagState,
  scoreHistoryState,
  scoreState,
} from "@/common/atoms/mbti-atoms";
import { scoreInitData } from "@/common/types/data";
import { css } from "@emotion/react";
import {
  ReplayButton,
  ShareButton,
} from "@/common/components/Button/Button.styles";
import { shareKakao } from "@/common/utils/function";
import { Tooltip } from "@mui/material";
import Button from "@/common/components/Button/Button";

const ResultPage = () => {
  const router = useRouter();

  const { isLoading, data } = useGetMbtiResult(String(router.query.mbti));

  //선택한 점수
  const setMbtiScore = useSetRecoilState(scoreState);
  //점수 내역
  const setMbtiScoreHistory = useSetRecoilState(scoreHistoryState);
  const [open, setOpen] = useState<boolean>(false);
  const [coupangFlag, setCoupangFlag] =
    useRecoilState<boolean>(coupangFlagState);

  //메인으로 돌아가기
  const handleGoMain = async () => {
    setMbtiScore(scoreInitData);
    setMbtiScoreHistory([]);
    await router.push(`/`);
  };

  //트위터 공유
  const onClickTwitter = () => {
    if (typeof window != "undefined" && data && data?.length > 0) {
      const url = window.location.protocol + "//" + window.location.host;

      const text = `${data[0].summary} ${data[0].mbti}, ${data[0].titleName}입니다. 나를 닮은 슬라임은 뭘까요? mbti 슬라임 테스트 하러 가기! 👉`;

      window.open(
        "https://twitter.com/intent/tweet?text=" +
          text +
          "&url=" +
          url +
          "&hashtags=MBTI,슬라임",
      );
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setOpen(false);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [open]);

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      <CoupangWrap coupangFlag={coupangFlag}>
        {/*쿠팡 광고*/}
        {/*디자인*/}
        <Button
          label={"쿠팡 방문하고 결과 확인하기"}
          onClick={() => {
            setCoupangFlag(true);
            window.open(
              "https://link.coupang.com/a/bdJq6X",
              "_blank",
              "noopener, noreferrer",
            );
          }}
        ></Button>
        <p
          css={css`
            font-size: 13px;
            word-break: keep-all;
          `}
        >
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
          제공받습니다.
        </p>
      </CoupangWrap>
      <div
        className="contentWrap"
        css={css`
          padding-bottom: 30px;
          text-align: center;
        `}
      >
        {/*쿠팡 보고난 후*/}
        <ResultWrap coupangFlag={coupangFlag}>
          <ResultTitle>{data ? data[0].titleName : null}</ResultTitle>
          <ResultImg
            src={`/static/image/result/${data ? data[0].mbti : "no_img"}.png`}
            alt="result_img"
          />
          <ResultSummary>
            {data ? data[0].summary : null} &ldquo;
            {data ? data[0].titleName : null}
            &rdquo;
          </ResultSummary>
          <p
            css={css`
              line-height: 120%;
              margin: 50px 0;
              text-align: center;
              word-break: keep-all;
            `}
          >
            {data ? data[0].description : null}
          </p>
          <div
            css={css`
              width: 100%;
              height: auto;
              display: flex;
              justify-content: flex-end;
              gap: 10px;
            `}
          >
            <ReplayButton
              label={"다시하기"}
              onClick={async () => {
                await handleGoMain();
              }}
            >
              다시하기
            </ReplayButton>
            {/*링크공유*/}
            <Tooltip open={open} title="복사 완료">
              <ShareButton
                label={"링크공유"}
                onClick={() => {
                  if (typeof window != "undefined") {
                    navigator.clipboard
                      .writeText(window.location.href)
                      .then(() => {
                        setOpen(true);
                      });
                  }
                }}
                css={css`
                  &:hover {
                    background: url("/static/image/icon/share_pink.svg")
                      no-repeat center;
                  }

                  background: url("/static/image/icon/share.svg") no-repeat
                    center;
                `}
              ></ShareButton>
            </Tooltip>
            {/*인스타공유*/}
            {/*<ShareButton*/}
            {/*  label={"인스타공유"}*/}
            {/*  onClick={() => {}}*/}
            {/*  css={css`*/}
            {/*    &:hover {*/}
            {/*      background: url("/static/image/icon/Instagram_pink.svg") no-repeat*/}
            {/*        center;*/}
            {/*    }*/}
            {/*    background: url("/static/image/icon/Instagram.svg") no-repeat center;*/}
            {/*  `}*/}
            {/*></ShareButton>*/}
            {/*  카카오톡 공유*/}
            <ShareButton
              label={"카카오톡 공유"}
              onClick={() => {
                if (data && data.length > 0) {
                  shareKakao(
                    router.query.mbti as string,
                    `/static/image/result/${data[0].mbti}.png`,
                    data[0].summary,
                    data[0].titleName,
                  );
                }
              }}
              css={css`
                background: url("/static/image/icon/kakaotalk_sharing_btn_medium.png")
                  no-repeat center;
                background-size: cover;
              `}
            ></ShareButton>
            {/*  트위터 공유*/}
            <ShareButton
              label={"트위터 공유"}
              onClick={() => {
                onClickTwitter();
              }}
              css={css`
                background: url("/static/image/icon/twitter_icon.png") no-repeat
                  center;
                background-size: cover;
              `}
            ></ShareButton>
          </div>
        </ResultWrap>
      </div>
    </>
  );
};

export default ResultPage;
