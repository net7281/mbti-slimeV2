import Link from "next/link";
import { IButtonType } from "@/common/types/component-type";
import { ButtonElement } from "@/common/components/Button/Button.styles";

const Button = (props: IButtonType) => {
  const { label, onClick } = props;
  return (
    <ButtonElement width={props.width} height={props.height} onClick={onClick}>
      {label}
    </ButtonElement>
  );
};

export default Button;
