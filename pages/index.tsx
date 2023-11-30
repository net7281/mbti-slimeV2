import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { MainTitle, StartBtn } from "@/styles/index.styles";
import { BtnWrap } from "@/common/components/Button/Button.styles";
import { useRecoilState } from "recoil";
import { coupangFlagState } from "@/common/atoms/mbti-atoms";

const Home = () => {
  const [, setCoupangFlag] = useRecoilState<boolean>(coupangFlagState);

  useEffect(() => {
    setCoupangFlag(false);
  }, []);

  return (
    <div className="contentWrap">
      <div
        className="line"
        css={css`
          margin-top: 80px;
        `}
      ></div>
      <div
        css={css`
          width: 100%;
        `}
      >
        <p
          css={css`
            font-size: 24px;
            margin: 12px 0;
            @media (max-width: 700px) {
              font-size: 20px;
              text-align: center;
              margin-bottom: 8px;
            }
          `}
        >
          나는 어떤 슬라임일까?
        </p>
        <MainTitle>
          <h1>mbti</h1>
        </MainTitle>
        <h3
          css={css`
            font-size: 40px;
            text-align: right;
            @media (max-width: 700px) {
              font-size: 32px;
              text-align: center;
            }
          `}
        >
          슬라임 테스트
        </h3>
      </div>
      <BtnWrap>
        <StartBtn href={"/test/1"}>start!</StartBtn>
      </BtnWrap>
    </div>
  );
};

export default Home;
