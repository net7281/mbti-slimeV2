// Global.tsx
import { Global, css } from "@emotion/react";
import * as color from "@/styles/ColorVar";

const style = css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Pretendard", "serif";
  }
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p,
  h1,
  h3 {
    margin: 0;
    padding: 0;
    line-height: 100%;
    letter-spacing: -1px;
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: ${color.black};
  }
  .contentWrap {
    max-width: 350px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
