import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as color from "@/styles/ColorVar";
import { IButtonStyleType, IButtonType } from "@/common/types/component-type";

export const BtnWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: absolute;
  bottom: 70px;
`;

export const ButtonElement = styled.button<IButtonStyleType>`
  &:hover {
    border: 3px solid ${color.deepPink};
    box-shadow: 4px 4px 0px 0px ${color.deepPink};
    color: ${color.deepPink};
  }
  cursor: pointer;
  font-size: 20px;
  font-family: "Pretendard", "serif";
  letter-spacing: -1px;
  border-radius: 50px;
  border: 3px solid ${color.black};
  color: ${color.black};
  background: ${color.white};
  flex-shrink: 0;
  padding: 10px 20px;
  //margin: 0 30px;
  box-shadow: 4px 4px 0px 0px ${color.black};
  text-align: center;
  min-width: 350px;
  @media (max-width: 700px) {
    min-width: 200px;
    font-size: 13px;
    padding: 10px;
  }
  ${props => {
    return css`
      width: ${props.width && props.width};
      height: ${props.height && props.height};
    `;
  }}
`;

export const PerButton = styled.button<IButtonType>`
  &:hover {
    background-color: ${color.blue};
    &:after {
      background-image: url("/static/image/icon/perBtn_white.svg");
    }
  }
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 2px solid ${color.blue};
  border-radius: 50%;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 20px;
  &:after {
    content: "";
    width: 10px;
    height: 15px;
    display: block;
    background-image: url("/static/image/icon/perBtn.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const ReplayButton = styled.button<IButtonType>`
  &:hover {
    border: 3px solid ${color.deepPink};
    box-shadow: 4px 4px 0px 0px ${color.deepPink};
    color: ${color.deepPink};
  }
  cursor: pointer;
  font-size: 20px;
  font-family: "Pretendard", "serif";
  letter-spacing: -1px;
  border-radius: 50px;
  border: 3px solid ${color.black};
  color: ${color.black};
  background: ${color.white};
  margin-right: 10px;
  padding: 10px 20px;
  box-shadow: 4px 4px 0px 0px ${color.black};
  text-align: center;
  flex: 1;
  @media (max-width: 700px) {
    margin-right: 5px;
    font-size: 13px;
    padding: 10px;
  }
`;

export const ShareButton = styled.button<IButtonType>`
  &:hover {
    border: 3px solid ${color.deepPink};
    box-shadow: 4px 4px 0px 0px ${color.deepPink};
    color: ${color.deepPink};
  }
  width: 50px;
  height: 50px;
  box-shadow: 4px 4px 0px 0px ${color.black};
  border-radius: 50px;
  border: 3px solid ${color.black};
`;
