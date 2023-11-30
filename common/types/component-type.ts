export interface IButtonType extends IButtonStyleType {
  label: string;
  onClick: () => void;
}

export interface IButtonStyleType {
  width?: string;
  height?: string;
}
