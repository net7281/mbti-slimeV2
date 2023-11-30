import styled from "@emotion/styled";
import * as color from "@/styles/ColorVar";
import Link from "next/link";

export const MainTitle = styled.div`
  width: 100%;
  position: relative;
  & h1 {
    font-family: "Shrikhand";
    text-transform: uppercase;
    font-size: 96px;
    font-weight: 400;
    text-align: center;
    position: relative;
    @media (max-width: 700px) {
      font-size: 64px;
    }
  }
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 30px;
    background-color: ${color.lightYellow};
    position: absolute;
    top: calc(50% - 20px);
    @media (max-width: 700px) {
      top: calc(50% - 15px);
    }
  }
`;

export const StartBtn = styled(Link)`
  &:hover {
    border: 3px solid ${color.deepPink};
    box-shadow: 4px 4px 0px 0px ${color.deepPink};
    color: ${color.deepPink};
  }
  width: 300px;
  height: 50px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 800;
  color: ${color.black};
  font-family: "Pretendard", "serif";
  text-transform: uppercase;
  text-decoration: none;
  background: ${color.white};
  border-radius: 25px;
  border: 3px solid ${color.black};
  flex-shrink: 0;
  box-shadow: 4px 4px 0px 0px ${color.black};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 7px;
  @media (max-width: 700px) {
    width: 200px;
  }
`;
