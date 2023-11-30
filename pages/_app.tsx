import React, { useEffect } from "react";
import "@/styles/globals.css";
import "@/public/assets/font/font.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Button from "../common/components/Button/Button";
import GlobalStyle from "@/styles/Global";
import {
  BaseBg,
  BaseBgElement,
  BaseBox,
  BaseBoxDetails,
  bgElement,
  detailsElement,
  startAni,
} from "@/styles/_app.styles";
import * as color from "@/styles/ColorVar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "@/common/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <GlobalStyle />
        <Header />
        <BaseBg>
          <div
            css={css`
              width: 80%;
              max-width: 800px;
              height: 80%;
              max-height: 500px;
              position: absolute;
            `}
          >
            <div
              className={bgElement}
              css={css`
                top: -130px;
                left: -100px;
                border-radius: 50%;
              `}
            ></div>
            <div
              className={bgElement}
              css={css`
                bottom: -80px;
                right: -90px;
                transform: rotate(45deg);
              `}
            ></div>
          </div>
          <BaseBox>
            <div
              className={BaseBgElement}
              css={css`
                width: 194px;
                height: 240px;
                background-image: url("/static/image/main/main_1.png");
                top: -70px;
                right: -70px;
                animation: ${startAni} ease-out 0.3s;
                z-index: 10;
                @media (max-width: 700px) {
                  width: 120px;
                  height: 150px;
                  top: -35px;
                }
              `}
            ></div>
            <div
              className={BaseBgElement}
              css={css`
                width: 240px;
                height: 236px;
                background-image: url("/static/image/main/main_2.png");
                bottom: -90px;
                left: -90px;
                animation: ${startAni} ease-out backwards 0.2s 0.3s;
                @media (max-width: 700px) {
                  width: 150px;
                  height: 147px;
                  bottom: -80px;
                }
              `}
            ></div>
            <BaseBoxDetails>
              <li
                className={detailsElement}
                css={css`
                  width: 35%;
                  background: ${color.lightPink};
                `}
              ></li>
              <li
                className={detailsElement}
                css={css`
                  width: 20px;
                  background: ${color.lightYellow};
                `}
              ></li>
              <li
                className={detailsElement}
                css={css`
                  width: 20px;
                  background: ${color.orange};
                `}
              ></li>
            </BaseBoxDetails>
            <div
              css={css`
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: scroll;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
              `}
            >
              <Component {...pageProps} />
            </div>
          </BaseBox>
          <div
            css={css`
              text-align: center;
              position: relative;
              z-index: 10;
            `}
          >
            <a
              href="https://link.coupang.com/a/bdJ119"
              target="_blank"
              referrerPolicy="unsafe-url"
            >
              <img
                src="https://ads-partners.coupang.com/banners/723207?subId=&traceId=V0-301-7e6e8eb8ddfa1bfb-I723207&w=320&h=50"
                alt=""
              />
            </a>
            <p
              css={css`
                font-size: 10px;
                opacity: 0.5;
              `}
            >
              이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의
              수수료를 제공받습니다.
            </p>
          </div>
        </BaseBg>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
