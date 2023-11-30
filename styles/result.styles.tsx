import styled from "@emotion/styled";
import * as color from "@/styles/ColorVar";

interface StyledComponentProps {
  coupangFlag: boolean;
}

export const ResultTitle = styled.h1`
  width: 100%;
  //height: 40px;
  border-radius: 20px;
  border: 3px solid ${color.black};
  box-sizing: border-box;
  font-size: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 5px 0;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: keep-all;
`;

export const ResultImg = styled.img`
  width: 160px;
  margin: 50px 0;
`;

export const ResultSummary = styled.h3`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid ${color.black};
  border-bottom: 1px solid ${color.black};
  font-size: 16px;
  line-height: 120%;
`;

export const CoupangWrap = styled.div<StyledComponentProps>`
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: absolute;
  z-index: 5;

  ${({ coupangFlag }) =>
    coupangFlag &&
    `
    display: none;
  `}
`;

export const ResultWrap = styled.div<StyledComponentProps>`
  ${({ coupangFlag }) =>
    !coupangFlag &&
    `
    filter: blur(8px);
    -webkit-filter: blur(8px);
    overflow: hidden;
    height: 407px;
  `}
`;
