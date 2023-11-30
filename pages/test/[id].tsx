import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  scoreState,
  questionState,
  scoreHistoryState,
  flagState,
} from "@/common/atoms/mbti-atoms";
import { useRouter } from "next/router";
import Button from "../../common/components/Button/Button";
import Modal from "@mui/material/Modal";
import { scoreInitData } from "@/common/types/data";
import { css } from "@emotion/react";
import { BtnWrap, PerButton } from "@/common/components/Button/Button.styles";
import { ModalBox, QuestionText, QuestionWrap } from "@/styles/test.styles";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
};

const TestPage = () => {
  const router = useRouter();

  //질문
  const mbtiQuestion = useRecoilValue(questionState);
  //선택한 점수
  const [mbtiScore, setMbtiScore] = useRecoilState(scoreState);
  //점수 내역
  const [mbtiScoreHistory, setMbtiScoreHistory] =
    useRecoilState(scoreHistoryState);

  const [open, setOpen] = useState<boolean>(false);
  const [flag, setFlag] = useRecoilState(flagState);

  //mbti별 점수 얻기
  const handleGetScore = async (select: string) => {
    //flag
    if (Number(router.query.id as string) === 1) {
      setFlag(true);
    }

    //점수 +1
    setMbtiScore({ ...mbtiScore, [select]: mbtiScore[select] + 1 });
    //json 변경
    setMbtiScoreHistory([...mbtiScoreHistory, select]);
    //페이지 이동
    await router.push(`/test/${Number(router.query.id) + 1}`);
  };

  const handleBack = async () => {
    //1. 스코어 제거
    //마지막에 선택한 값
    const last_score = mbtiScoreHistory[mbtiScoreHistory.length - 1];
    setMbtiScore({ ...mbtiScore, [last_score]: mbtiScore[last_score] - 1 });

    //2. 히스토리 제거
    const history_copy = [...mbtiScoreHistory];
    history_copy.pop(); //제일 마지막값 제거
    setMbtiScoreHistory(history_copy);

    //이동
    await router.push(`/test/${Number(router.query.id) - 1}`);
  };

  //점수 합산 후 mbti 조합
  const handleGetMbti = async () => {
    const getBigger = (arr: string[]) => {
      return mbtiScore[arr[0]] > mbtiScore[arr[1]] ? arr[0] : arr[1];
    };

    const result =
      getBigger(["I", "E"]) +
      getBigger(["S", "N"]) +
      getBigger(["F", "T"]) +
      getBigger(["J", "P"]);

    await router.push(`/result/${result}`);
  };

  const handleGoMain = async () => {
    setMbtiScore(scoreInitData);
    setMbtiScoreHistory([]);
    await router.push(`/`);
  };

  //뒤로가기 제어
  useEffect(() => {
    // 뒤로가기 제어
    (() => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", () => {
        setOpen(true);
      });
    })();

    return () => {
      window.removeEventListener("popstate", () => {
        setOpen(true);
      });
    };
  }, []);

  //새로고침시 데이터 꼬임 방지
  useEffect(() => {
    if (Number(router.query.id) > 1 && !flag) {
      //검사를 한번 이상해서 결과가 누적되었는데 새로고침 한 경우
      setOpen(true);
    }
  }, [flag, router.query.id]);

  return (
    <>
      {router.query.id && (
        <>
          {/*질문*/}
          <QuestionWrap>
            <div className="line"></div>
            <p
              css={css`
                font-size: 20px;
                margin-top: 10px;
                @media (max-width: 700px) {
                  font-size: 15px;
                }
              `}
            >
              문제 {String(router.query.id)}
            </p>
            <QuestionText>
              {mbtiQuestion[String(router.query.id)].question}
            </QuestionText>
          </QuestionWrap>

          {/*답*/}
          <BtnWrap>
            {mbtiQuestion[String(router.query.id)].answers.map(a => {
              return (
                <Button
                  key={a.score + a.text}
                  label={a.text}
                  onClick={async () => {
                    if (Number(router.query.id) < 12) {
                      await handleGetScore(a.score);
                    } else {
                      await handleGetMbti();
                    }
                  }}
                />
              );
            })}
          </BtnWrap>

          {/* 이전으로 가기*/}
          {Number(router.query.id) > 1 && (
            <PerButton
              label={"이전으로 가기"}
              onClick={async () => {
                await handleBack();
              }}
            />
          )}
        </>
      )}

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <ModalBox>
            <p>
              뒤로가기, 새로고침 시
              <br />
              테스트가 원활하지 않을 수 있습니다.
              <br />
              <br />
              처음으로 돌아가기 버튼을 클릭해주세요.
              <br />
            </p>
            <Button label={"처음으로 돌아가기"} onClick={handleGoMain} />
          </ModalBox>
        </div>
      </Modal>
    </>
  );
};
export default TestPage;
