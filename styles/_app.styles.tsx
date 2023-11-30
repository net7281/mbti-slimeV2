import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/css";
import * as color from "@/styles/ColorVar";

export const BaseBg = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: ${color.bgPink};
  background-image: url("/static/image/main/background.svg");
  background-size: 891.26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const BaseBox = styled.div`
  width: 80%;
  max-width: 800px;
  height: 80%;
  max-height: 500px;
  background-color: ${color.white};
  border-radius: 25px;
  border: 3px solid ${color.black};
  box-shadow: 10px 10px 0px 0px ${color.black};
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const BaseBoxDetails = styled.ul`
  width: 100%;
  padding: 20px;
  border-bottom: 3px solid ${color.black};
  box-sizing: border-box;
  display: flex;
  gap: 20px;
`;

export const detailsElement = css`
  height: 20px;
  border-radius: 25px;
  border: 3px solid ${color.black};
  box-sizing: border-box;
`;

export const bgElement = css`
  width: 330px;
  height: 330px;
  background-color: ${color.white};
  filter: blur(25px);
  opacity: 0.7;
  position: absolute;
  z-index: 0;
  transition: all 0.3s;
  @media (max-width: 700px) {
    width: 220px;
    height: 220px;
  }
`;
export const BaseBgElement = css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  transition: all 0.3s;
`;

export const startAni = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`;
