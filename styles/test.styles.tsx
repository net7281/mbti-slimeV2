import styled from "@emotion/styled";
import * as color from "@/styles/ColorVar";

export const QuestionWrap = styled.div`
  margin: 0 30px;
  padding-top: 80px;
`;
export const QuestionText = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 17px;
  }
`;

export const ModalBox = styled.div`
  width: auto;
  height: auto;
  background-color: ${color.white};
  border-radius: 25px;
  border: 3px solid ${color.black};
  text-align: center;
  padding: 30px;
  & p {
    font-size: 20px;
    margin-bottom: 20px;
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
`;
